class MedalsController < ApplicationController
  before_action :set_medal, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /medals
  # GET /medals.json
  def index
    @medals = Medal.all.where(user_id: current_user.id).order(:id)
  end

  # GET /medals/1
  # GET /medals/1.json
  def show
  end

  # GET /medals/new
  def new
    @medal = Medal.new
  end

  # GET /medals/1/edit
  def edit
  end

  # POST /medals
  # POST /medals.json
  def create

    hash = {}
    medal_params.each { |key, value| hash[key] = value }
    hash[:user_id] = current_user.id
    puts hash
    @medal = Medal.new(hash)

    respond_to do |format|
      if @medal.save
        format.html { redirect_to @medal, notice: 'Medal was successfully created.' }
        format.json { render :show, status: :created, location: @medal }
      else
        format.html { render :new }
        format.json { render json: @medal.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /medals/1
  # PATCH/PUT /medals/1.json
  def update
    @medal = Medal.find(medal_params[:id])
    if @medal[:user_id] == current_user.id
      hash = {}
      medal_params.each { |key, value| hash[key] = value }
      hash.delete('id')
      hash.delete('url')
      respond_to do |format|
        if @medal.update(hash)
          format.html { redirect_to @medal, notice: 'Medal was successfully updated.' }
          format.json { render :show, status: :ok, location: @medal }
        else
          format.html { render :edit }
          format.json { render json: @medal.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /medals/1
  # DELETE /medals/1.json
  def destroy
    @medal.destroy
    respond_to do |format|
      format.html { redirect_to medals_url, notice: 'Medal was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medal
      @medal = Medal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def medal_params
      params.fetch(:medal, {})
    end
end
