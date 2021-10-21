# frozen_string_literal: true

module HomeHelper
  def developers
    if user_signed_in?
      'home/partials/developers'
    else
      'home/partials/empty'
    end
  end
end
