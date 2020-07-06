
class Event < ApplicationRecord
  # After the record has been inserted into the DB, publish the event to the WS channel
  after_create :publish_event

  private

  def publish_event
    ActionCable.server.broadcast('events', self)
  end
end
