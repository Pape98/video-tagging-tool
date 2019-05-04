class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)

    render plain: "#{params[:cuts]}"
  end

  #
  # def edit
  #
  # end
  #
  # def show
  #
  # end
  #
  # def update
  #
  # end
  #
  # def destroy
  #
  # end

  def video_params
    params.permit(:link, :cuts, :courses, :section, :keywords, :topic, :presenter)
  end

end
