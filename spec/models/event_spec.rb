require 'rails_helper'

RSpec.describe Event, type: :model do

  let!(:event){
    FactoryGirl.create(:event)
  }

  it 'should have required data' do 
    expect(event.title).to eq('name')
    expect(event.info).to eq('info')
    expect(event.location).to eq('location')
    expect(event.address).to eq('address')
    expect(event.city).to eq('city')
    expect(event.state).to eq('state')
    expect(event.zip).to eq('zip')
  end

  it 'shouldnt not have required data' do 
    expect(event.title).not_to eq(nil)
    expect(event.info).not_to eq(nil)
    expect(event.location).not_to eq(nil)
    expect(event.address).not_to eq(nil)
    expect(event.city).not_to eq(nil)
    expect(event.state).not_to eq(nil)
    expect(event.zip).not_to eq(nil)
  end

  it 'should have a title' do 
    expect(event.title).to eq('name')
  end

  it 'shouldnt not have a title' do 
    expect(event.title).not_to eq(nil)
  end

  it 'should have info' do 
    expect(event.info).to eq('info')
  end

  it 'shouldnt not have info' do 
    expect(event.info).not_to eq(nil)
  end

  it 'should have a location' do 
    expect(event.location).to eq('location')
  end

  it 'shouldnt not have a location' do 
    expect(event.location).not_to eq(nil)
  end

  it 'should have an address' do 
    expect(event.address).to eq('address')
  end

  it 'shouldnt not have an address' do 
    expect(event.address).not_to eq(nil)
  end

  it 'should have a city' do 
    expect(event.city).to eq('city')
  end

  it 'shouldnt not have a city' do 
    expect(event.city).not_to eq(nil)
  end

  it 'should have a state' do 
    expect(event.state).to eq('state')
  end

  it 'shouldnt not have a state' do 
    expect(event.state).not_to eq(nil)
  end

  it 'should have a zip' do 
    expect(event.zip).to eq('zip')
  end

  it 'shouldnt not have a zip' do 
    expect(event.zip).not_to eq(nil)
  end

  it 'should validate when no title' do 
    new_event = Event.new 
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:title)
    expect(new_event.errors.full_messages).to include("Title can't be blank")
  end

  it 'should validate when no title' do 
    new_event = Event.new
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to eq(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no info' do 
    new_event = Event.new
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:info)
    expect(new_event.errors.full_messages).to include("Info can't be blank")
  end

  it 'should validate when no info' do 
    new_event = Event.new 
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to include(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no location' do 
    new_event = Event.new
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:location)
    expect(new_event.errors.full_messages).to include("Location can't be blank")
  end

  it 'should validate when no location' do 
    new_event = Event.new
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to include(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no address' do 
    new_event = Event.new
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:address)
    expect(new_event.errors.full_messages).to include("Address can't be blank")
  end

  it 'should validate when no address' do 
    new_event = Event.new 
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to include(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no city' do 
    new_event = Event.new
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:city)
    expect(new_event.errors.full_messages).to include("City can't be blank")
  end

  it 'should validate when no city' do 
    new_event = Event.new
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to include(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no state' do 
    new_event = Event.new
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:state)
    expect(new_event.errors.full_messages).to include("State can't be blank")
  end

  it 'should validate when no state' do 
    new_event = Event.new
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to include(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no zip' do 
    new_event = Event.new 
    expect(new_event.valid?).to eq(false)
    expect(new_event.errors).to include(:zip)
    expect(new_event.errors.full_messages).to include("Zip can't be blank")
  end

  it 'should validate when no zip' do 
    new_event = Event.new
    expect(new_event.valid?).not_to eq(true)
    expect(new_event.errors).not_to include(nil)
    expect(new_event.errors.full_messages).not_to include(nil)
  end

  it 'should belong to a group' do 
    g = Event.reflect_on_association(:group)
    g.macro.should == :belongs_to
  end

  it 'should belong to a user' do 
    u = Event.reflect_on_association(:user)
    u.macro.should == :belongs_to
  end

end


 # it 'should have many events' do 
 #    e = Group.reflect_on_association(:events)
 #    e.macro.should == :has_many
 #  end

 #  it 'should belong to a user' do 
 #    u = Group.reflect_on_association(:user)
 #    u.macro.should == :belongs_to
 #  end



















