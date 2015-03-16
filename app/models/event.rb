class Event < ActiveRecord::Base
  belongs_to :user
  belongs_to :group

  validates :title, presence: true
  validates :info, presence: true
  validates :location, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
end
