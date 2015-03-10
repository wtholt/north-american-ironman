json.array!(@groups) do |group|
  json.extract! group, :id, :name, :info, :city, :state, :zip
  json.url group_url(group, format: :json)
end