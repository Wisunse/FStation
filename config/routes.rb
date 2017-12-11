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
  get '/firemen' => 'authenticated#authenticated'
  get '/cars' => 'authenticated#authenticated'
  get '/alarms' => 'authenticated#authenticated'
  get '/reminders' => 'authenticated#authenticated'
  get '/settings' => 'authenticated#authenticated'

  get '/all_firemen' => 'firemen#all'
  post '/add_fireman' => 'firemen#add'


end
