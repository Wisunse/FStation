# json.extract! fireman, :id, :created_at, :updated_at
json.merge! fireman.attributes
json.url fireman_url(fireman, format: :json)