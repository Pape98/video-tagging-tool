class VideosController < ApplicationController
  def trial
    @video = Video.find('5ce7280622918608b34f0238')
  end
  @trial = []
  def postrial
    @trial = video_params[:keywords]
    render plain:"#{@trial}"
  end

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
    # if params[:video].key?(:keywords) == false
    #   params[:video][:keywords] = []
    # end

      params.require(:video).permit(:link, :section,:topic, :presenter,:keywords=> [],:cuts => [], :courses => [])
  end

end
