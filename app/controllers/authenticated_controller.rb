class AuthenticatedController < ApplicationController
  # protect_from_forgery prepend: true
  # include SessionsHelper


  def authenticated
    render 'layouts/main'
  end

  def go_login
    redirect_to('/login')
  end

  def go_firemen_view
    redirect_to('/firemen_view')
  end

end
