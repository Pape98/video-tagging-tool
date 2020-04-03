class ApiController < ApplicationController
    # Get /videos
    def videos
        #videos = Video.only('courses','link','topic','segments','presenter','resources')
        videos = Video.all
        render json: videos
    end 

    def video
        id = params[:id]
        video = Video.only('courses','link','topic','segments','presenter','resources').find(id)
        render json: video
    end 
end
