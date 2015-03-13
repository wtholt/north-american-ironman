class GroupsController < ApplicationController

  def index
    @groups = Group.all
    respond_to do |format|
      format.json { render json: @groups}
    end
  end

  def show
    @group = Group.find params[:id]
  end

  def new
    @group = Group.new
    respond_to do |format|
      format.json { render json: @group }
    end
  end

  def edit 
    @group = Group.find params[:id]
  end

  def create
    @group = Group.new(group_params)
    respond_to do |format|
      if @group.save
        format.html { redirect_to @group, notice: 'Group was successfully created.' }
        format.json { render :show, status: :created, location: @group }
      else
        format.html { render :new }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @group = Group.find params[:id]
    @group.update_attributes group_params
    respond_to do |format|
      if @group.update(group_params)
        format.html { redirect_to @group, notice: 'Group was successfully updated.' }
        format.json { render :show, status: :ok, location: @group }
      else
        format.html { render :edit }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @group = Group.find params[:id]
    @group.destroy
    respond_to do |format|
      format.html { redirect_to groups_url, notice: 'Group was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

private
  def group_params
    params.require(:group).permit(:name, :info, :city, :state, :zip)
  end
  
end
