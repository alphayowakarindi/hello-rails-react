class MessagesController < ApplicationController
  def index
    'jjjj'
  end

  def random_greeting
    @random_greeting = Message.all.sample
    render json: @random_greeting
  end
end
