Rails.application.routes.draw do
  resources :videos, :keywords
  root 'welcome#index'
end
