class VideosController < ApplicationController
  def trial
  end

  before_action :authenticate_user!


  def index
    @videos = Video.all
  end

  def new
  end

  def create
    # @video = Video.create!(video_params)
    # @video.lastEdit = session[:current_user_name]
    # @video.save
    # flash[:notice] = "Video has been created and has following id:'#{@video.id}'"
    # redirect_to :action=>"index", :controller=>"videos"
    render :json => params[:video]

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
      @video.lastEdit = session[:current_user_name]
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
                                    :transition,:sharpFocus,:effects,:symbol,:informationMinimized,
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
