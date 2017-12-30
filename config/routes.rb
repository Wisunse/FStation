Rails.application.routes.draw do
  devise_for :models

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'application#angular'
  # resources :login, :authenticated, :is_logged, :firemen

  root to: 'application#angular'

  get '/login' => 'login#login'
  post '/login' => 'sessions#create'

  get '/is_logged' => 'sessions#is_logged'

  get '/' => 'authenticated#authenticated'
  get '/firemen_view' => 'authenticated#authenticated'
  get '/cars_view' => 'authenticated#authenticated'
  get '/alarms_view' => 'authenticated#authenticated'
  get '/reminders_view' => 'authenticated#authenticated'
  get '/settings_view' => 'authenticated#authenticated'

  resources :firemen, :defaults => { :format => :json }
  resources :cars, :defaults => { :format => :json }
  resources :medicals, :defaults => { :format => :json }

end
