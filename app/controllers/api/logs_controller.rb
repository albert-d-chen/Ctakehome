class Api::LogsController < ApplicationController
     #retrieve all data
    def index
        @logs = Log.all
        render :index
    end

    def show
        @log = Log.find(params[:id])
        render :show
    end

    def create
        @log = Log.new(logs_params)
        @logs = Log.all
        
        if @log.save
            render :index
        else 
            render :index
        end
    end

    private

    def logs_params
        params.require(:log).permit(:id, :timeSet, :timeRemaining, :connected, :status, :data)
    end
end


