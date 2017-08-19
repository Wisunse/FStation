class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password_digest])
      log_in(user)
      render json: true
    else
      render json: false
    end
  end

  def is_logged
    render json: is_log_in?
  end


end
