Rails.application.routes.draw do
  devise_for :users
  # devise_for :models

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'application#angular'
  # resources :login, :authenticated, :is_logged, :firemen

  root to: 'authenticated#authenticated'

  get '/login' => 'authenticated#authenticated'
  get '/firemen_view' => 'authenticated#authenticated'
  get '/cars_view' => 'authenticated#authenticated'
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
