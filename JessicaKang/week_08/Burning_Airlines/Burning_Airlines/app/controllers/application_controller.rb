class ApplicationController < ActionController::Base
  
  protect_from_forgery with: :exception

  before_action :fetch_user

  private
  def fetch_user
    @current_user = User.find_by( :id => session[:user_id] )
    session[:user_id] = nil unless @current_user
  end

end