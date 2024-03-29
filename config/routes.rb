Rails.application.routes.draw do
  get 'rubric/create'
  get 'rubric/destroy'
  devise_for :users, controllers: { sessions: 'users/sessions' }
  resources :videos
  resources :keywords , only: [:index, :create, :destroy]

  get '/trial' , :to => 'videos#trial'
  # id of video
  post 'rubric/create/:id' , :to => 'videos#create_rubric'
  # id of rubric
  post 'rubric/update/:id' , :to => 'videos#update_rubric'
  # id of rubric
  post 'rubric/delete/:id' , :to => 'videos#destroy_rubric'

  # API
  get '/api/videos' , :to => 'api#videos'
  get '/api/videos/:id' , :to => 'api#video'
  get '/videos/:id/related', :to => 'videos#related_videos'

  root 'welcome#index'
end
