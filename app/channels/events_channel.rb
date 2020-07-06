class EventsChannel < ApplicationCable::Channel
  def subscribed
    Rails.logger.debug "We got a new subscription for the events channel!"

    # We want all events to go to a single channel 'events'
    stream_from 'events'
  end
end
