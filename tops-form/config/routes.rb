Rails.application.routes.draw do
  resources :videos, :keywords
  get '/trial' , :to => 'welcome#trial'
  root 'welcome#index'
end
