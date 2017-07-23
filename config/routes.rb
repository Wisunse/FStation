Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'application#angular'
  # get '/all_firemen', to: 'firemen#all_firemen'

  # scope ‘/api’ do
  #   scope ‘/v1’ do
  #     scope ‘/tasks’ do
  #       get ‘/’ => ‘task#all’
  #     end
  #   end
  # end
  root to: 'application#angular'
  get '/login' => 'login#login'
  get '/all_firemen' => 'firemen#all'
  # get “*unmatched_route” => “task#index”
end
