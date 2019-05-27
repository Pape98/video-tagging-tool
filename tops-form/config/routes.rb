Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  resources :videos
  resources :keywords , only: [:index, :create, :destroy]

  get '/trial' , :to => 'videos#trial'
  post 'trial' , :to => 'videos#postrial'

  root 'welcome#index'
end
