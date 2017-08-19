class LoginController < ApplicationController

  def index
  end

  def login
    render 'layouts/main'
  end

  def all
    render json: Login.all
  end

end
