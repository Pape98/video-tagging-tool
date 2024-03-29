class ApiController < ApplicationController
    # Get /videos
    def videos
        videos = Video.only('courses','link','topic,keywords','presenter')
        render json: videos
    end 

    def video
        id = params[:id]
        video = Video.only('courses','link','topic,keywords','presenter').find(id)
        render json: video
    end 
end
