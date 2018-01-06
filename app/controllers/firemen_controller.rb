class FiremenController < ApplicationController

  before_action :set_fireman, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /firemen
  # GET /firemen.json
  def index
    @firemen = Firemen.all.order(:id)
  end

  # GET /firemen/1
  # GET /firemen/1.json
  def show
  end

  # GET /firemen/new
  def new
    @fireman = Firemen.new
  end

  # GET /firemen/1/edit
  def edit
  end

  # POST /firemen
  # POST /firemen.json
  def create

    hash = {}
    fireman_params.each { |key, value| hash[key] = value }
    @fireman = Firemen.new(hash)

    respond_to do |format|
      if @fireman.save
        format.html { redirect_to @fireman, notice: 'Firemen was successfully created.' }
        format.json { render :show, status: :created, location: @fireman }
      else
        format.html { render :new }
        format.json { render json: @fireman.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /firemen/1
  # PATCH/PUT /firemen/1.json
  def update

    @firemen = Firemen.find(fireman_params[:id])
    hash = {}
    fireman_params.each { |key, value| hash[key] = value }
    hash.delete('id')
    hash.delete('url')
    if @firemen.update(hash)
    head :no_content
    else
      render json: @firemen.errors, status: :unprocessable_entity
    end
  end

  # DELETE /firemen/1
  # DELETE /firemen/1.json
  def destroy
    @fireman.destroy
    respond_to do |format|
      format.html { redirect_to firemen_url, notice: 'Firemen was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fireman
      @fireman = Firemen.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def fireman_params
      params.fetch(:fireman, {})
    end
end
