class WelcomeController < ApplicationController

  def index
  end
  def name
  end
  def save
    session[:username] = params[:username]
    redirect_to :action=>"index", :controller=>"videos"
  end

end
