module SessionsHelper

  def log_in(user)
    session[:user_id] = user.id
    session[:login] = true
  end

  def is_log_in?
    session[:user_id]
  end

end