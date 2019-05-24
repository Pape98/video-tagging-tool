Rails.application.routes.draw do
  resources :videos, :keywords
  get '/trial' , :to => 'videos#trial'
  post 'trial' , :to => 'videos#postrial'
  get '/name' , :to => 'welcome#name'
  post '/name/save/:name', :to => 'welcome#save'
  root 'welcome#index'
end
