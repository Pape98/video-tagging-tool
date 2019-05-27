class WelcomeController < ApplicationController

  def index
  end
  def name
  end
  def save
    session[:username] = params[:name]
    redirect_to :action=>"index", :controller=>"videos"
  end

end
