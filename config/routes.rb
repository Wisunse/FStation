Rails.application.routes.draw do
  devise_for :users

  root to: 'authenticated#authenticated'

  get '/login' => 'authenticated#authenticated'
  get '/firemen_view' => 'authenticated#authenticated'
  get '/cars_view' => 'authenticated#authenticated'
  get '/actions_view' => 'authenticated#authenticated'
  get '/alarms_view' => 'authenticated#authenticated'
  get '/reminders_view' => 'authenticated#authenticated'
  get '/settings_view' => 'authenticated#authenticated'
  get '/register' => 'authenticated#authenticated'

  authenticated :user do
    resources :firemen, :defaults => { :format => :json }
    resources :cars, :defaults => { :format => :json }
    resources :medicals, :defaults => { :format => :json }
    resources :courses, :defaults => { :format => :json }
  end

end
