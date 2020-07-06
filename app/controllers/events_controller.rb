class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    random_test_value = (0...8).map { (65 + rand(26)).chr }.join
    Event.create!(key: 'Demo', value: random_test_value)
  end
end
