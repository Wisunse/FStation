class ApplicationController < ActionController::Base

  protect_from_forgery prepend: true
  include SessionsHelper

  def angular
      render 'layouts/main'
  end



end
