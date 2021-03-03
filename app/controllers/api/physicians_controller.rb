class Api::PhysiciansController < ApplicationController
    #retrive all physicians
    def index 
        @physicians = Physician.all
        render :index
    end

    def show 
        @physician = Physician.find_by(id: params[:id])
        if @physician 
            render :show 
        else 
            render json: ['Physician does not exist'], status: 404
        end
    end 

end
