class FiremenController < ApplicationController
  # respond_to :json

  def index
  end

  def all
    render json: Firemen.all
  end

  def add
    puts 'aaa'
    puts params
    Firemen.create(name: params[:name], surname: params[:surname], email: params[:email])
    render json: Firemen.all

  end

  private
  def post_params
    params.require(:firemen).permit(:name, :surname)
  end



end
