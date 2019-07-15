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
    # if Video.where(link: params[:video][:link]).count >= 1
    if false
      flash[:notice] = "Video with entered link already exists!"
      redirect_to new_video_path
    else
      params[:rubric][:author] = session[:current_user_name]
      rubric = Rubric.new(rubric_params)
      @video =  rubric.create_video(video_params)
      @video.lastEdit = session[:current_user_name]
      @video.save
      flash[:notice] = "Video has been created and has following id:'#{@video.id}'"
      redirect_to video_path(@video)
    end
  end


  def edit
    @video = Video.find params[:id]
  end

  def show
     id = params[:id]
    @video = Video.find(id)
    # render plain: "#{id.class}"
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

  def create_rubric
    id = params[:id]
    @video = Video.find(id)
    params[:rubric][:author] = session[:current_user_name]
    rubric = Rubric.new(rubric_params)
    rubric.video = @video
    rubric.save
    flash[:notice] = "#{rubric.author}'s has been created"
    redirect_to @video

  end

  def update_rubric
    id = params[:id]
    rubric = Rubric.find(id)
    rubric.update(rubric_params)
    flash[:notice] = "#{rubric.author}'s has been updated"
    video = Video.find(rubric.video_id)
    redirect_to video
  end

  def destroy
    @video = Video.find(params[:id])
    @video.destroy
    flash[:notice] = "Video with id '#{@video.id}' has been deleted."
    redirect_to videos_path
  end

  def video_params
       params.require(:video).permit(:link,
                                     :section,
                                     :topic,
                                     :presenter,
                                     :description,
                                     segments:[:cut,:keywords => []],
                                     :courses => [])
  end


  def rubric_params
    params.require(:rubric).permit(:author,:voice, :noise,:volume,:enhacements,:overallSmooth,
                                   :transition,:sharpFocus,:effects,:symbol,:informationMinimized,
                                   :conveyMessage,:wordingAccurate,:wordingAppropriate,
                                   :contentAccurate,:contentOrganized,:contentRelevant,
                                   :sequencing,:weblinks,:graphicsEffective,:graphicsDistraction,
                                   :graphicsQuality,:textAppropriate,
                                   :textConsistent,:textAmount,:background,:interactive,
                                   :studentControl,:shownPresenter,:videoLength,:personal,
                                   :moving,:engaging,:normalPace,:enunciation,:problem,
                                   :lecture,:review,:concept,:supplementary,:print,:view,:use,:overall)
  end


end
