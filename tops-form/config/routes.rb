Rails.application.routes.draw do
  devise_for :users
  resources :videos, :keywords
  get '/trial' , :to => 'videos#trial'
  post 'trial' , :to => 'videos#postrial'
  get '/name' , :to => 'welcome#name'
  post '/name/save', :to => 'welcome#save'
  root 'welcome#index'
end
