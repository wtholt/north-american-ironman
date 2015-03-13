require 'rails_helper'

RSpec.describe Event, type: :model do

  let!(:event){
    FactoryGirl.create(:event)
  }

  it 'should have required data' do 
    expect(event.name).to eq('name')
    expect(event.info).to eq('info')
    expect(event.location).to eq('location')
    expect(event.address).to eq('address')
    expect(event.city).to eq('city')
    expect(event.state).to eq('state')
    expect(event.zip).to eq('zip')
  end

  it 'shouldnt not have required data' do 
    expect(event.name).not_to eq(nil)
    expect(event.info).not_to eq(nil)
    expect(event.location).not_to eq(nil)
    expect(event.address).not_to eq(nil)
    expect(event.city).not_to eq(nil)
    expect(event.state).not_to eq(nil)
    expect(event.zip).not_to eq(nil)
  end

  it 'should have a name' do 
    expect(event.name).to eq('name')
  end

  it 'shouldnt not have a name' do 
    expect(event.name).not_to eq(nil)
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
end
