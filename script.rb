require 'net/http'
require 'pg'
require 'hashie'

PG_HOST = 'localhost'
PG_PORT = 5432
PG_DB_NAME = 'myapp_development'
PG_USER = 'postgres'
PG_PASSWORD = ''

SMS_EMAIL = 'szahmatt@gmail.com'
SMS_PASSWORD = '58nTdlfY89n8RcSW'
SMS_DEVICE_ID = '77468'

module Postgres

  extend self

  def sql_query(query)

    params = {
        host:     PG_HOST,
        port:     PG_PORT,
        dbname:   PG_DB_NAME,
        user:     PG_USER,
        password: PG_PASSWORD
    }

    execute_sql( params.merge(query) )[:result]

  end

  def execute_sql(params)

    pg_con = nil
    result = []

    begin

      if params.has_key?(:statement) && params[:statement].to_s != ''

        params[:values] = [] unless params.has_key?(:values)

        unless params.has_key?(:stmt_name)
          params[:stmt_name] = ''
          10.times{params[:stmt_name] << rand(97..122).chr}
        end

        pg_con = PG.connect(host: params[:host], port: params[:port], dbname: params[:dbname], user: params[:user], password: params[:password])
        pg_con.type_map_for_results = PG::BasicTypeMapForResults.new(pg_con)

        pg_con.prepare(params[:stmt_name], params[:statement])

        result = pg_con.exec_prepared(params[:stmt_name], params[:values])

      end

      result = result.map { |n| Hashie.symbolize_keys(n) }
      error = nil

    rescue StandardError => error_msg

      puts error_msg
      error = {message: error_msg}

    ensure

      pg_con.close if pg_con

    end

    {result: result, status: error}

  end

end

class Sms

  def initialize

    course = fetch_courses_alarms
    medical = fetch_medical_alarms

    unless course.nil? || medical.nil?
      message = course + medical
      phone_number = get_phone_number
      url = make_url(message, phone_number)
      send_sms(url)
    end

  end

  def fetch_courses_alarms
    sql = { statement: "select courses.name as courses_name, courses.expiry_date, firemen.name, firemen.surname from courses
                      left join firemen on courses.firemen_id = firemen.id
                      where expiry_date < current_date - interval '30' day" }
    result = Postgres.sql_query(sql)

    message = nil
    if result.count > 0
      message = 'OSP: Zbliza sie koniec szkolen -'
      result.each do |row|
        message << " #{row[:name]} #{row[:surname]} #{row[:courses_name]} | "
      end
    end

    message

  end

  def fetch_medical_alarms

    sql = { statement: "select medicals.name as exam_name, medicals.end_date, firemen.name, firemen.surname, firemen.phone from medicals
                      left join firemen on medicals.firemen_id = firemen.id
                      where end_date < current_date - interval '30' day" }

    result = Postgres.sql_query(sql)

    message = nil

    if result.count > 0
      message = 'OSP: Zbliza sie koniec badan -'
      result.each do |row|
        message << " #{row[:name]} #{row[:surname]} #{row[:exam_name]} | "
      end
    end

    message

  end

  def get_phone_number
    '+48531510177'
  end

  def make_url(message, phone_number)
    "http://smsgateway.me/api/v3/messages/send?email=#{SMS_EMAIL}&password=#{SMS_PASSWORD}&device=#{SMS_DEVICE_ID}&message=#{message}&number=#{phone_number}"
  end

  def send_sms(url)
    uri = URI.parse(url)
    req = Net::HTTP::Post.new(uri.to_s)
    res = Net::HTTP.start(uri.host, uri.port) {|http|
      http.request(req)
    }
    puts res.body
  end


end

Sms.new