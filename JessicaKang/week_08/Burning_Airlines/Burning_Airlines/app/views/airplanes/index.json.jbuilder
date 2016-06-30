json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :row, :column, :name
  json.url airplane_url(airplane, format: :json)
  # Associations go here
end
