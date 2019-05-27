class ApplicationController < ActionController::Base
  def after_sign_in_path_for(resource)
    # redirect_to :action=>"save", :controller=>"welcome"
    videos_path
  end
end
