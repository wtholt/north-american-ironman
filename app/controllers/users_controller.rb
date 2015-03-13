class UsersController < ApplicationController
  respond_to :json
  def new
    @user = User.new
  end

  def create
    @user = User.create user_params
  end

private
  def user_params
    params.require(:user).permit(:username, :password_digest)
  end
end
