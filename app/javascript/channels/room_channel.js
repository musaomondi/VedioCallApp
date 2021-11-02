import consumer from "./consumer"

const roomSubscriber = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    if (data['step'] === 'receiving the call'){
      var sender_first_name = data['sender_first_name'];
      var sender_id = data['sender_id'];
      var session_id = data['session_id'];
      var session_id_modal = document.getElementById('session_id');
      session_id_modal.innerHTML = session_id;
      var sender_id_modal = document.getElementById('sender_id');
      sender_id_modal.innerHTML = sender_id;
      var sender_name_modal = document.getElementById('sender_name');
      sender_name_modal.innerHTML = sender_first_name;
      // Display the receiver notification modal
      $('#receiver-notif-modal').modal('show');
    }
  },

  call(recipient_id, recipient_name) {
    return this.perform('call', {
      recipient_id: recipient_id
    });
  },

  answer(session_id, sender_id) {
    console.log(`Hello from the answer method: ${session_id}`);
    return this.perform('answer', {
      session_id: session_id,
      sender_id: sender_id
    });
  }
});

export default roomSubscriber
