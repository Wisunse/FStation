class LoginController < ApplicationController



  def index
  end

  def login
    render 'layouts/main'
  end

  def all
    # Login.create({username: 'mattLogin', password: '1234', email: 'Mm@pl.pl'})
    puts Login.all
    render json: Login.all
  end

end
