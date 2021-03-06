Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do

    resources :users, only: [:index, :update, :destroy]
     get "user/boards", to: "boards#index_created"
     get "user/posts", to: "posts#index_created"
     get "user/followedBoards", to: "boards#followed"
     get "user/user_boards", to: "boards#user_boards"
     get "user/:user_id/user_boards", to: 'user_boards#get_user_boards'
    resources :posts, only: [:index]
   
    resources :posts do
      resources :comments
    end
      
    get "likes/:post_id", to: "likes#index"


    resources :user_boards, only: [:create]
    get "user_boards/:user_id", to: "user_boards#index"
    get "user_board/board/:code", to: "boards#set_board"
    delete "user_boards/unfollow/:board_id", to: "user_boards#destroy"

    
    resources :boards do 
      resources :posts, module: "boards"
    end

    resources :users do 
      resources :likes, only: [:create]
      get "users/likes/:post_id", to: "likes#show"
      delete "users/likes/:post_id", to: "likes#destroy"
      

      resources :posts, module: "user"
    end


    
  end

  get '*other', to: 'static#index'
end