class SessionsController < ApplicationController

  def create
    # user = User.where(:username => params[:session][:username].downcase).first
    user = User.find_by(username: params[:session][:username])

    if user && user.authenticate(params[:session][:password_digest])
      # Log the user in and redirect to the user's show page.
      puts 'true'
      render json: true
    else
      # Create an error message.
      render json: false
    end
    # render json: user
  end
end
