require 'rails_helper'

RSpec.describe GroupsController, type: :controller do

  let!(:group){
    FactoryGirl.create(:group)
  }

  describe 'GET #index' do 
    it 'should return all groups' do 
      xhr :get, :index
      expect(assigns(:groups)).not_to eq(nil)
    end
  end

  describe 'POST #create' do 
    it 'should create a group' do 
      group_params = FactoryGirl.attributes_for(:group)
      expect { post :create, :group => group_params }.to change(Group, :count).by(1)
      expect(flash[:notice]).to eq 'Group was successfully created.'
    end
    # it 'shouldnt create a group' do 
    #   expect { post :create, :group => {
    #     name: '',
    #     info: '',
    #     city: '',
    #     state: '', 
    #     zip: '',
    #     }}.to_not change(Group, :count)
    # end
  end

end















