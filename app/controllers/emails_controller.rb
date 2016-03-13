class EmailsController < ApplicationController

  @mainname = ''
  @mainsurname = ''
  @email = ''
  @partnersname = ''
  @partnerssurname = ''
  @comming = ''
  @bus = ''
  def index
    # render params[:confirmation]
    # @mainname = params[:mainname]
    # @mainsurname = params[:mainsurname]
    # @email = params[:email]
    # @partnersname = params[:partnersname]
    # @partnerssurname = params[:partnerssurname]
    # @comming = params[:comming]
    # @bus = params[:bus]
    @confirmation = params[:confirmation]
    puts "------------ ********* -----------"
    UserNotifier.send_email(@confirmation).deliver
  end

end
