class VideosController < ApplicationController

  before_action :authenticate_user!
  # def trial
  #   @video = Video.find('5ce7280622918608b34f0238')
  # end
  # @trial = []
  # def postrial
  #   @trial = video_params[:keywords]
  #   render plain:"#{@trial}"
  # end

  def index
    @videos = Video.all
  end

  def new
  end

  def create
    @video = Video.create!(video_params)
    @video.lastEdit = session[:username]
    @video.save
    flash[:notice] = "Video has been created and has following id:'#{@video.id}'"
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
      flash[:notice] = "Video with id '#{@video.id}' has been updated."
      @video.lastEdit = session[:username]
      @video.save
      redirect_to @video
    else
      render 'new'
    end

  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    flash[:notice] = "Video with id '#{@video.id}' has been deleted."
    redirect_to videos_path
  end

  def video_params
      params.require(:video).permit(:link, :section,:topic, :presenter,
                                    :voice, :noise,:volume,:enhacements,:overallSmooth,
                                    :transiton,:sharpFocus,:effects,:symbol,:informationMinimized,
                                    :conveyMessage,:wordingAccurate,:wordingAppropriate,
                                    :contentAccurate,:contentOrganized,:contentRelevant,
                                    :sequencing,:weblinks,:graphicsEffective,:graphicsDistraction,
                                    :graphicsQuality,:graphicsAppropriate,:textAppropriate,
                                    :textConsistent,:textAmount,:background,:interactive,
                                    :studentControl,:shownPresenter,:videoLength,:personal,
                                    :moving,:engaging,:normalPace,:enunciation,:problem,
                                    :lecture,:review,:concept,:supplementary,:print,:view,:use,
                                    :keywords=> [],:cuts => [], :courses => [])
  end

end
