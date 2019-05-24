class KeywordsController < ApplicationController
  def index
    @keyword = Keyword.new
  end
  def create
    @keyword = Keyword.create!(keyword_params)
    @keyword.save
    redirect_to :action=>"index", :controller=>"keywords"
  end

  def destroy
    @keyword = Keyword.find(params[:id])
    @keyword.destroy
    redirect_to keywords_path
  end
  def keyword_params
    params.permit(:name)
  end
end
