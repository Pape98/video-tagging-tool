class VideosController < ApplicationController
  def trial
  end

  before_action :authenticate_user!


  def index
    if params[:video].nil?
      @videos = Video.asc(:presenter)
    elsif params[:status].nil? == false
      temp = Rubric.where(overall: params[:status]).only(:video_id).map(&:video_id)
      @videos =   Video.where(:_id.in => temp).all
    else
      allKeywords = Keyword.pluck(:name)
      allCourses =  ["141", "140", "142", "147", "148",
                    "150","151", "152", "166", "167",
                    "171","172", "251", "304", "308",
                     "365" ,"366"]
      presenter = params[:video][:presenter]
      keywords = params[:video][:keywords].nil? ? [''] : params[:video][:keywords].uniq
      courses = params[:video][:courses].nil? ? ['']: params[:video][:courses].uniq
      @videos = Video.or(:presenter => presenter).or(:courses.in => courses).or(segments: {'$elemMatch': { keywords: {'$all': keywords} }})
      arr = Array.new
      
      @videos.each do |video| 
        s = get_keywords_from_videos video[:segments]
        arr.push(s)
        k = Array.new

        arr.each do |keywords|
        k = k + keywords
        end
        k = k.uniq
  
        @matchesCount = Array.new
        @videos.each do |video|
          temp = get_keywords_from_videos (video.segments)
          matches = k & temp
          @matchesCount.push(matches.size)
          video[:matches] = matches.size
          video.save
        end 
        @videos = @videos.sort_by { |k| k["matches"] }
      end
    end
    # render json:@videos
  end

def related_videos
  id = params[:id]
  video = Video.find(id)
  courses = video.courses
  keywords = get_keywords_from_videos video[:segments]
  # @videos = Video.or(:courses.in => courses).or(segments: {'$elemMatch': { keywords: {'$all': keywords} }})
  @videos = Video.where('_id':{'$ne':id}).and(:courses.in => courses).and(segments: {'$elemMatch': { keywords: {'$in': keywords} }})
  arr = Array.new
  
  k=Array.new
 
  @matchesCount = Array.new
  
  @videos.each do |video|
      temp = get_keywords_from_videos (video.segments)
      matches = temp & keywords
      @matchesCount.push(matches)
      video[:matches] = matches.size
      video.save
  end 

    
    @videos = (@videos.sort_by { |k| k["matches"] }).reverse()
    @selectedVideo = video

  render "index"

#  render json:@videos
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

  def get_keywords_from_videos segments
    keywords = []
        segments.each do |segment|
        keywords = keywords.concat(segment[:keywords].to_a)
      end
    return keywords.uniq      
end



end
