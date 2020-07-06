import consumer from "./consumer"
import $ from 'jquery'
 
consumer.subscriptions.create("EventsChannel", {
  // Called once when the subscription is created.
  initialized() {
  },
 
  // Called when the subscription is ready for use on the server.
  connected() {
    $('#websocket-status').html("<b>Connected</b>")
  },
 
  // Called when the WebSocket connection is closed.
  disconnected() {
    $('#websocket-status').html("<b>Disconnected</b>")
  },
 
  // Called when the subscription is rejected by the server.
  received(data) {
    console.log("We've been notified of a new event in the system")
    console.log(data)

    // Here is where you would trigger some kind of pop-up or screen modal instead
    // of the built-in alert dialog
    const alert_text = `A new event has been created in our system - ${data['value']}`
    alert(alert_text)
  }

})
