class ApplicationController < ActionController::Base

  # protect_from_forgery with: :exception
  # respond_to :json
  protect_from_forgery prepend: true
  def angular
    render 'layouts/main'
  end



end
