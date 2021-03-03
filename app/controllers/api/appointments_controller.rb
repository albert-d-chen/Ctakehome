class Api::AppointmentsController < ApplicationController
    #retrieve all appointments
    def index
        @appointments = Appointment.all
        render :index
    end

    def show
        @appointment = Appointment.find(params[:id])
        render :show
    end

    def create
        @appointment = Appointment.new(appointment_params)
        @appointments = Appointment.all

        if @appointment.save
            render :index
        end
    end

    private

    def appointment_params
        params.require(:appointment).permit(:name, :time, :kind, :physician_id)
    end

end
