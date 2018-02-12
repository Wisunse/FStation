# json.extract! medal, :id, :created_at, :updated_at
json.merge! medal.attributes
json.url medal_url(medal, format: :json)
