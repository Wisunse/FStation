class DeparturesController < ApplicationController
  before_action :set_departure, only: [:show, :edit, :update, :destroy]

  # GET /departures
  # GET /departures.json
  def index
    @departures = Departure.all.where(user_id: current_user.id).order(:id)
  end

  # GET /departures/1
  # GET /departures/1.json
  def show
  end

  # GET /departures/new
  def new
    @departure = Departure.new
  end

  # GET /departures/1/edit
  def edit
  end

  # POST /departures
  # POST /departures.json
  def create
    hash = {}
    departure_params.each { |key, value| hash[key] = value }
    hash[:user_id] = current_user.id
    @departure = Departure.new(hash)

    respond_to do |format|
      if @departure.save
        format.html { redirect_to @departure, notice: 'Departure was successfully created.' }
        format.json { render :show, status: :created, location: @departure }
      else
        format.html { render :new }
        format.json { render json: @departure.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /departures/1
  # PATCH/PUT /departures/1.json
  def update
    @departure = Departure.find(departure_params[:id])
    if @departure[:user_id] == current_user.id
      hash = {}
      departure_params.each { |key, value| hash[key] = value }
      hash.delete('id')
      hash.delete('user_id')
      hash.delete('url')
      respond_to do |format|
        if @departure.update(hash)
          format.html { redirect_to @departure, notice: 'Departure was successfully updated.' }
          format.json { render :show, status: :ok, location: @departure }
        else
          format.html { render :edit }
          format.json { render json: @departure.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /departures/1
  # DELETE /departures/1.json
  def destroy
    @departure.destroy
    respond_to do |format|
      format.html { redirect_to departures_url, notice: 'Departure was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_departure
      @departure = Departure.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def departure_params
      params.fetch(:departure, {})
    end
end
