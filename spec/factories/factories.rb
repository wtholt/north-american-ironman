FactoryGirl.define do 
  factory :group do 
    name 'name'
    info 'info'
    city 'city'
    state 'state'
    zip 'zip'
  end

  factory :event do 
    title 'name'
    info 'info'
    location 'location'
    address 'address'
    city 'city'
    state 'state'
    zip 'zip'
  end

  # factory :user do 
  #   name 'name'
  #   email 'email@email.com'
  #   password 'password'
  #   password_confirmation 'password'
  # end

end