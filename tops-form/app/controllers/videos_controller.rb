class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def new
    # default: render 'new' template
  end

  def create
    @video = Video.create!(video_params)
    @video.save
    redirect_to :action=>"index", :controller=>"videos"
  end


  def edit
    @video = Video.find params[:id]
  end

  def show
    id = params[:id]
    @video = Video.find(id)
  end

  def update
    @video = Video.find params[:id]
    if @video.update(video_params)
      redirect_to @video
    else
      render 'new'
    end

    # flash[:notice] = "#{@movie.title} was successfully updated."
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    redirect_to videos_path
  end

  def video_params
    params.require(:video).permit(:link, :section,:topic, :presenter,:cuts => [], :courses => [], :keywords=> [])
  end

end
