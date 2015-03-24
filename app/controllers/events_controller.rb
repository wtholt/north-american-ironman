class EventsController < ApplicationController

  def index
    @group = Group.find params[:group_id]
    @events = @group.events
    respond_to do |format|
      format.json { render json: @events}
    end
  end

  def show 
    @event = Event.find params[:id]
  end

  def new
    @group = Group.find params[:group_id]
    @event = @group.events.new
    respond_to do |format|
      format.json { render json: @event }
    end
  end

  def edit
    @event = Event.find params[:id]
    render :json => @event
  end

  def create
    @group = Group.find params[:group_id]
    @event = @group.events.create event_params
    @event.user = current_user
    @event.save
    render :json => @event
  end

  def update
    @event = Event.find params[:id]
    @event.update_attributes event_params
    render :json => @event
  end

  def destroy
    @event = Event.find params[:id]
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


private
  def event_params
    params.require(:event).permit(
      :title, 
      :info, 
      :location, 
      :address,
      :city,
      :state,
      :zip,
      :start,
      :end,
      :id
    )
  end
end
