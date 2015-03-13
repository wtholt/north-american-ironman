FactoryGirl.define do 
  factory :group do 
    name 'name'
    info 'info'
    city 'city'
    state 'state'
    zip 'zip'
  end

  factory :event do 
    name 'name'
    info 'info'
    location 'location'
    address 'address'
    city 'city'
    state 'state'
    zip 'zip'
  end

end