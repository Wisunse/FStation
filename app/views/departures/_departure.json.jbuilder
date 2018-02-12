# json.extract! departure, :id, :created_at, :updated_at
json.merge! departure.attributes
json.url departure_url(departure, format: :json)
