Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "messages#index"
  get 'api/random-greeting', to: 'messages#random_greeting'
  get '*path', to: 'messages#index', via: :all
end
