class MedicalsController < ApplicationController
  before_action :set_medical, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /medicals
  # GET /medicals.json
  def index
    @medicals = Medical.all.where(user_id: current_user.id).order(:id)
  end

  # GET /medicals/1
  # GET /medicals/1.json
  def show
  end

  # GET /medicals/new
  def new
    @medical = Medical.new
  end

  # GET /medicals/1/edit
  def edit
  end

  # POST /medicals
  # POST /medicals.json
  def create

    hash = {}
    medical_params.each { |key, value| hash[key] = value }
    hash[:user_id] = current_user.id
    @medical = Medical.new(hash)

    respond_to do |format|
      if @medical.save
        format.html { redirect_to @medical, notice: 'Medical was successfully created.' }
        format.json { render :show, status: :created, location: @medical }
      else
        format.html { render :new }
        format.json { render json: @medical.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /medicals/1
  # PATCH/PUT /medicals/1.json
  def update
    puts medical_params
    @medical = Medical.find(medical_params[:id])
    if @medical[:user_id] == current_user.id
      hash = {}
      medical_params.each { |key, value| hash[key] = value }
      hash.delete('id')
      hash.delete('url')

      respond_to do |format|
        if @medical.update(hash)
          format.html { redirect_to @medical, notice: 'Medical was successfully updated.' }
          format.json { render :show, status: :ok, location: @medical }
        else
          format.html { render :edit }
          format.json { render json: @medical.errors, status: :unprocessable_entity }
        end
      end
    else
      format.json { render json: 'error', status: 'error' }
    end
  end

  # DELETE /medicals/1
  # DELETE /medicals/1.json
  def destroy
    if @medical.user_id == current_user.id
      @medical.destroy
      respond_to do |format|
        format.html { redirect_to medicals_url, notice: 'Medical was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medical
      @medical = Medical.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def medical_params
      params.fetch(:medical, {})
    end
end
