class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.create!(video_params)
    redirect_to :action=>"index", :controller=>"videos"
  end


  def edit
    @video = Movie.find params[:id]
  end

  def show
    id = params[:id] # retrieve movie ID from URI route
    @video = Movie.find(id) # look up movie by unique ID
  end
  #
  # def update
  #
  # end
  #
  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    redirect_to videos_path
  end

  def video_params
    puts "===============#{params}"
    params.require(:video).permit(:link, :section,:topic, :presenter,:cuts => [], :courses => [], :keywords=> [])
  end

end
