Rails.application.routes.draw do
  devise_for :users

  # root to: 'authenticated#authenticated'

  authenticated :user do
    root to: 'authenticated#authenticated'
    get '/firemen_view' => 'authenticated#authenticated'
    get '/cars_view' => 'authenticated#authenticated'
    get '/actions_view' => 'authenticated#authenticated'
    get '/alarms_view' => 'authenticated#authenticated'
    get '/reminders_view' => 'authenticated#authenticated'
    get '/settings_view' => 'authenticated#authenticated'

    resources :firemen, :defaults => { :format => :json }
    resources :cars, :defaults => { :format => :json }
    resources :medicals, :defaults => { :format => :json }
    resources :courses, :defaults => { :format => :json }
    resources :medals, :defaults => { :format => :json }
    resources :departures, :defaults => { :format => :json }
  end

  root to: 'authenticated#go_login'

  unauthenticated :user do
    get '/firemen_view' => 'authenticated#go_login'
    get '/cars_view' => 'authenticated#go_login'
    get '/actions_view' => 'authenticated#go_login'
    get '/alarms_view' => 'authenticated#go_login'
    get '/reminders_view' => 'authenticated#go_login'
    get '/settings_view' => 'authenticated#go_login'
  end

  get '/login' => 'authenticated#authenticated'
  get '/register' => 'authenticated#authenticated'

end
