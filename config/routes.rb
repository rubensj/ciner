Rails.application.routes.draw do
  root 'static_pages#home'
  get '/minha-pagina', to: 'static_pages#minha'
end
