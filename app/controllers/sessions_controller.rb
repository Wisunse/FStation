class SessionsController < ApplicationController

  def create
    # user = User.where(:username => params[:session][:username].downcase).first
    user = User.find_by(username: params[:session][:username])

    # sha1_password = Digest::SHA1.hexdigest("#{''}#{real_password}")
    # self.password_digest = BCrypt::Password.create(sha1_password).to_s

    user.password = '1234'
    user.password_digest = '1234'
    user.save

    if user && user.authenticate(params[:session][:password_digest].to_s)
      # Log the user in and redirect to the user's show page.
      puts 'true'
      render json: true
    else
      # Create an error message.
      render json: false
    end
    # render json: user
  end
end
