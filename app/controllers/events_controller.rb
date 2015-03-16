class EventsController < ApplicationController

  def index
    @group = Group.find params[:group_id]
    @events = @group.events
    respond_to do |format|
      format.json { render json: @events}
      format.html
    end
  end

  def show 
    @event = Event.find params[:id]
    respond_to do |format|
      format.json { render json: @event}
      format.html
    end
  end

  def new
    @group = Group.find params[:group_id]
    @event = @group.events.new
    respond_to do |format|
      format.json { render json: @event }
      format.html
    end
  end

  def edit
    @event = Event.find params[:id]
    respond_to do |format|
      format.json { render json: @event }
      format.html
    end
  end

  def create
    @group = Group.find params[:group_id]
    @event = @group.events.create event_params
    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render :show, status: :created, location: @event }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @event = Event.find params[:id]
    @event.update_attributes event_params
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render json: @event}
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
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
      :end
    )
  end
end
