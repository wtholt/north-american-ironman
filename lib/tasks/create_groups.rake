task create_groups: :environment do 
  10.times do 
    Group.create!({
      name: Faker::Company.name,
      info: Faker::Company.bs,
      city: Faker::Address.city,
      state: Faker::Address.state,
      zip: Faker::Address.zip_code
      })
  end
  
end