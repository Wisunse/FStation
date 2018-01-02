class AuthenticatedController < ApplicationController
  # protect_from_forgery prepend: true
  # include SessionsHelper

  def authenticated
    render 'layouts/main'
  end
end
