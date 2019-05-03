Rails.application.routes.draw do
  get '/form', :to => 'welcome#form'
  root 'welcome#index'
end
