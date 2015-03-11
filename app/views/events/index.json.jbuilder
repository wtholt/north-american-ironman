json.array!(@group.events) do |event|
  json.extract! event, :id, :name, :info, :location, :address, :city, :state, :zip
  json.url group_url(event, format: :json)
end