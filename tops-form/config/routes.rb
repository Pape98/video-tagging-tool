Rails.application.routes.draw do
  get 'rubric/create'
  get 'rubric/destroy'
  devise_for :users, controllers: { sessions: 'users/sessions' }
  resources :videos
  resources :keywords , only: [:index, :create, :destroy]

  get '/trial' , :to => 'videos#trial'

  root 'welcome#index'
end
