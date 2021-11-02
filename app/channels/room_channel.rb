class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_#{current_user.id}"
  end

  def unsubscribed
    stop_all_streams
  end

  def call(data)
    recipient_id = data['recipient_id']
    @session = create_session
    session_id = @session.session_id
    broadcast_notif_to_recipient(recipient_id, session_id)
  end

  private

  def broadcast_notif_to_recipient(recipient_id, session_id)
    ActionCable.server.broadcast(
      "room_#{recipient_id}",
      sender_first_name: current_user.name,
      sender_id: current_user.id,
      session_id: session_id,
      step: 'receiving the call'
    )
  end

  def api_key
    ENV['TOKBOX_API_KEY']
  end

  def secret_key
    ENV['TOKBOX_SECRET_KEY']
  end

  def opentok
    OpenTok::OpenTok.new api_key, secret_key
  end

  def create_session
    opentok.create_session :media_mode => :routed
  end

  def create_token(session_id)
    opentok.generate_token(session_id)
  end
end
