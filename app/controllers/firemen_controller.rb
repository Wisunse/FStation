class FiremenController < ApplicationController
  # respond_to :json

  def index
  end

  def all
    puts Firemen.all
    render json: Firemen.all
  end

  private
  def post_params
    params.require(:firemen).permit(:name, :surname)
  end

  def add
    Firemen.new(params)
  end

end
