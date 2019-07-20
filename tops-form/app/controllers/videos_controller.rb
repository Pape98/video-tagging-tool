class VideosController < ApplicationController
  def trial
  end

  before_action :authenticate_user!


  def index
    if params[:video].nil?
      @videos = Video.asc(:presenter)
    else
      allKeywords = Keyword.pluck(:name)
      allCourses =  ["141", "140", "142", "147", "148",
                         "150","151", "152", "166", "167",
                         "171","172", "251", "304", "308",
                         "366" ,"365"]
      presenter = params[:video][:presenter]
      keywords = params[:video][:keywords].nil? ? [''] : params[:video][:keywords]
      courses = params[:video][:courses].nil? ? ['']: params[:video][:courses]
      # # @videos = Video.where(keywords:['Absolute','Absolute Maximun'])
      # # @videos = Video.where(presenter:presenter).union.in.(courses: courses).union.in(keywords: keywords)
      # # @videos = Video.where(courses: { '$in': courses }).union.in(keywords: { '$in': keywords })
      # @videos = Video.or({:courses.in => courses},{:keywords.in => keywords})
      # @videos = Video.or(segments: {'$elemMatch': { keywords: {'$in': keywords} }})
       @videos = Video.or(:presenter => presenter).or(:courses.in => courses).or(segments: {'$elemMatch': { keywords: {'$in': keywords} }})
      # User.where(c: {'$elemMatch' => {name: 'a'}})
      # render json: keywords
      #
      # render plain: "#{courses.nil?}"

      # render json:@videos
    end
    # render json:params[:video]
  end

  def new
  end

  def create
    # if Video.where(link: params[:video][:link]).count >= 1
    if false
      flash[:notice] = "Video with entered link already exists!"
      redirect_to new_video_path
    else
      @video =  Video.new(video_params)
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
    flash[:notice] = "#{rubric.author}'s rubric has been created"
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

  def destroy_rubric
    id = params[:id]
    rubric = Rubric.find(id)
    flash[:notice] = "#{rubric.author}'s rubric has been deleted"
    rubric.destroy
    redirect_to request.referrer
  # render json: rubric
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
                                     resources:[:link,:category,:description],
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
