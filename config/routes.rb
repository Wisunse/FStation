Rails.application.routes.draw do
  devise_for :models

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'application#angular'
  # get '/all_firemen', to: 'firemen#all_firemen'

  root to: 'application#angular'

  get '/login' => 'login#login'
  get '/authenticated' => 'authenticated#authenticated'

  post '/login' => 'sessions#create'
  get '/is_logged' => 'sessions#is_logged'

  get '/all_firemen' => 'firemen#all'
  post '/add_fireman' => 'firemen#add'
  

end
