# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @users = User.where.not(id: current_user.id) if user_signed_in?
  end

  def online
    current_user.online!
    respond_to do |format|
      format.js
    end
  end

  def offline
    current_user.offline!
    respond_to do |format|
      format.js
    end
  end
end
