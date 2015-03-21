require 'rails_helper'

RSpec.describe EventsController, type: :controller do

  let!(:group){
    FactoryGirl.create(:group)
  }
  let!(:event){
    FactoryGirl.create(:event)
  }

  # let!(:user){
  #   FactoryGirl.create(:user)
  # }

  describe 'GET #index' do
    it 'should return all events' do
      get :index, format: :json, group_id: group
      expect(assigns(:events)).not_to eq(nil)
    end
  end

  describe 'GET #show' do 
    it 'should show an event object' do 
      get :show, format: :json, id: event, group_id: group
      expect(assigns(:event)).to eq event
      expect(assigns(:event)).not_to eq(nil)
    end
  end

  describe 'GET #new' do 
    it 'should initialize a new event' do 
      get :new, format: :json, id: event, group_id: group
      expect(assigns(:event).class).to eq Event
      expect(assigns(:event)).not_to eq nil
      expect(assigns(:event).new_record?).to eq(true)
    end
  end

  describe 'POST #create' do 
    context 'with good data' do 
      it 'should create' do 
        event_params = FactoryGirl.attributes_for(:event)
        expect{
          post :create, format: :json, :event => event_params, group_id: group
        }.to change(Event, :count).by(1)
      end
    end
    context 'with bad data' do 
      it 'shouldnt create' do 
        expect{
          post :create, format: :json, event:{
            title: '',
            info: '',
            location: '',
            address: '',
            city: '',
            state: '',
            zip: '',
          }, group_id: group
        }.to_not change(Event, :count)
      end
    end
  end

  describe 'GET #edit' do 
    it 'should edit an event' do 
      get :edit, format: :json, id: event, group_id: group
      expect(assigns(:event)).to eq event
      expect(assigns(:event)).not_to eq(nil)
    end
  end

  describe 'PATCH #update' do 
    context 'with good data' do
      it 'updates event' do 
        event_params = FactoryGirl.attributes_for(:event)
        patch :update, format: :json, id: event, event: event_params, group_id: group
      end
    end
    context 'with bad data' do 
      it 'doesnt update' do 
        patch :update, format: :json, id: event, event: {
          name: '',
          info: '',
          location: '',
          address: '',
          city: '',
          state: '',
          zip: '',
        }, group_id: group
      end
    end
  end

  describe 'DELETE #destroy' do 
    it 'should delete an event' do 
      expect{
        delete :destroy, format: :json, id: event, group_id: group
      }.to change(Event, :count).by(-1)
    end
  end

end
