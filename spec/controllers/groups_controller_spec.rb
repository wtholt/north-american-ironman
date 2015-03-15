require 'rails_helper'

RSpec.describe GroupsController, type: :controller do

  let!(:group){
    FactoryGirl.create(:group)
  }

  let!(:event){
    FactoryGirl.create(:event)
  }

  describe 'GET #index' do 
    it 'should return all groups' do 
      get :index, format: :json
      expect(assigns(:groups)).not_to eq(nil)
      expect(assigns(:groups).length).to eq(1)
      expect(assigns(:groups)).to include(group)
    end
  end

  # describe 'event relationship' do 
  #   it 'should have a relationship with events' do 
  #     get :show, format: :json, id: group
  #     expect(assigns(:events).class).to eq('')
  #   end
  # end

  describe 'GET #show' do 
    it 'should return a specific group' do 
      get :show, id: group, format: :json
      expect(assigns(:group)).to eq(group)
    end
  end

  describe 'GET #new' do 
    it 'should initialize a new group' do 
      get :new, format: :json
      expect(assigns(:group).class).to eq Group
      expect(assigns(:group).new_record?).to eq(true)
    end
  end

  describe 'POST #create' do 
    it 'should create a group' do 
      group_params = FactoryGirl.attributes_for(:group)
      expect { post :create, :group => group_params, format: :json}.to change(Group, :count).by(1)
    end
    it 'shouldnt create a group' do 
      expect { post :create, format: :json, :group => {
        name: '',
        info: '',
        city: '',
        state: '',
        zip: ''}}.not_to change(Group, :count)
    end
  end

  describe 'GET #edit' do 
    it 'should edit a group' do
      get :edit, format: :json, id: group
    end
  end

  describe 'PATCH #update' do 
    context 'with good data' do 
      it 'updates group' do 
        group_params = FactoryGirl.attributes_for(:group)
        patch :update, format: :json, id: group, group: group_params
        expect(response).to render_template :show
      end
    end
    context 'with bad data' do 
      it 'does not update' do 
        patch :update, format: :json, id: group, group:{
          name: '',
          info: '',
          city: '',
          state: '',
          zip: ''}
        expect(response).not_to render_template :show
      end
    end
  end

  describe 'DELETE #destroy' do 
    it 'deletes the group' do
      expect { delete :destroy, 
        format: :json, id: group}.to change(Group, :count).by(-1)
    end
  end

end
















