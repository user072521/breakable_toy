class ApplicationController < ApiController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :configure_permitted_parameters, if: :devise_controller?

  protect_from_forgery with: :exception

  protected

  def after_sign_in_path_for(resource)
    resorts_path
  end

  def after_sign_out_path_for(resource)
    resorts_path
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:profile_photo, :username])
  end

end