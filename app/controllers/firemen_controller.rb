class FiremenController < ApplicationController
  # respond_to :json

  def index
  end

  def all
    # Firemen.create({name: 'Mateusz', surname: 'Mmm', email: 'Mm@pl.pl'})
    puts Firemen.all
    render json: Firemen.all
  end

  # def all_firemen
  #   Firemen.create({name: 'Mateusz', surname: 'Mmm', email: 'Mm@pl.pl'})
  #   @firemen = Firemen.all
  #   puts @firemen
  # end

  # def create
  #   respond_with Post.create(post_params)
  # end
  #
  # def show
  #   respond_with Post.find(params[:id])
  # end
  #
  # def upvote
  #   post = Post.find(params[:id])
  #   post.increment!(:upvotes)
  #
  #   respond_with post
  # end
  #
  private
  def post_params
    params.require(:firemen).permit(:name, :surname)
  end
end
