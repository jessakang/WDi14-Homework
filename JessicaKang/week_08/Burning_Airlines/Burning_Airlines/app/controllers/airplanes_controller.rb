class AirplanesController < ApplicationController
  before_action :set_airplane, only: [:show, :edit, :update, :destroy]


  def index
    @airplanes = Airplane.all
  end


  def show
    @airplane = Airplane.find params[:id]
  end


  def new
    @airplane = Airplane.new
    @airplanes = Airplane.all
  end


  def edit
    @airplane = Airplane.find params[:id]
  end


  def create
    @airplane = Airplane.create airplane_params
    @airplanes = Airplane.all

    redirect_to "/airplane/#{airplane.id}"

    # respond_to do |format|
    #   if @airplane.save
    #     format.html { redirect_to @airplane, notice: 'Airplane was successfully created.' }
    #     format.json { render :show, status: :created, location: @airplane }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @airplane.errors, status: :unprocessable_entity }
    #   end
    # end
  end


  def update
    respond_to do |format|
      if @airplane.update(airplane_params)
        format.html { redirect_to @airplane, notice: 'Airplane was successfully updated.' }
        format.json { render :show, status: :ok, location: @airplane }
      else
        format.html { render :edit }
        format.json { render json: @airplane.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @airplane.destroy
    respond_to do |format|
      format.html { redirect_to airplanes_url, notice: 'Airplane was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def airbus300
  end

  def boeing747
  end


  def privateJet
  end

  private

    def set_airplane
      @airplane = Airplane.find(params[:id])
    end


    def airplane_params
      params.require(:airplane).permit(:row, :column, :name)
    end
end
