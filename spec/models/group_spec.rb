require 'rails_helper'

RSpec.describe Group, type: :model do

  let!(:group){
    FactoryGirl.create(:group)
  }

  it 'should have info' do 
    expect(group.name).to eq('name')
    expect(group.info).to eq('info')
    expect(group.city).to eq('city')
    expect(group.state).to eq('state')
    expect(group.zip).to eq('zip')
  end

  it 'shouldnt not have info' do 
    expect(group.name).not_to eq(nil)
    expect(group.info).not_to eq(nil)
    expect(group.city).not_to eq(nil)
    expect(group.state).not_to eq(nil)
    expect(group.zip).not_to eq(nil)
  end

  it 'should have a name' do 
    expect(group.name).to eq('name')
  end

  it 'shouldnt not have a name' do 
    expect(group.name).not_to eq(nil)
  end

  it 'should have info' do 
    expect(group.info).to eq('info')
  end

  it 'shouldnt not have info' do 
    expect(group.info).not_to eq(nil)
  end

  it 'should have a city' do 
    expect(group.city).to eq('city')
  end

  it 'shouldnt not have a city' do 
    expect(group.city).not_to eq(nil)
  end

  it 'should have a state' do 
    expect(group.state).to eq('state')
  end

  it 'shouldnt not have a state' do 
    expect(group.state).not_to eq(nil)
  end

  it 'should have a zip' do 
    expect(group.zip).to eq('zip')
  end

  it 'shouldnt not have a zip' do 
    expect(group.zip).not_to eq(nil)
  end

  it 'should validate when no name' do 
    new_group = Group.new
    expect(new_group.valid?).to eq(false)
    expect(new_group.errors).to include(:name)
    expect(new_group.errors.full_messages).to include("Name can't be blank")
  end

  it 'should validate when no name' do 
    new_group = Group.new
    expect(new_group.valid?).not_to eq(true)
    expect(new_group.errors).not_to include(nil)
    expect(new_group.errors.full_messages).not_to include(nil)
  end 

  it 'should validate when no info' do 
    new_group = Group.new
    expect(new_group.valid?).to eq(false)
    expect(new_group.errors).to include(:info)
    expect(new_group.errors.full_messages).to include("Info can't be blank")
  end

  it 'should validate when no info' do 
    new_group = Group.new
    expect(new_group.valid?).not_to eq(true)
    expect(new_group.errors).not_to include(nil)
    expect(new_group.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no city' do 
    new_group = Group.new
    expect(new_group.valid?).to eq(false)
    expect(new_group.errors).to include(:city)
    expect(new_group.errors.full_messages).to include("City can't be blank")
  end

  it 'should validate when no city' do 
    new_group = Group.new
    expect(new_group.valid?).not_to eq(true)
    expect(new_group.errors).not_to include(nil)
    expect(new_group.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no state' do 
    new_group = Group.new
    expect(new_group.valid?).to eq(false)
    expect(new_group.errors).to include(:state)
    expect(new_group.errors.full_messages).to include("State can't be blank")
  end

  it 'should validate when no state' do 
    new_group = Group.new
    expect(new_group.valid?).not_to eq(true)
    expect(new_group.errors).not_to include(nil)
    expect(new_group.errors.full_messages).not_to include(nil)
  end

  it 'should validate when no zip' do 
    new_group = Group.new 
    expect(new_group.valid?).to eq(false)
    expect(new_group.errors).to include(:zip)
    expect(new_group.errors.full_messages).to include("Zip can't be blank")
  end

  it 'should validate when no zip' do 
    new_group = Group.new 
    expect(new_group.valid?).not_to eq(true)
    expect(new_group.errors).not_to include(nil)
    expect(new_group.errors.full_messages).not_to include(nil)
  end
end
