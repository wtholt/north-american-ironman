class Group < ActiveRecord::Base
  belongs_to :user
  has_many :events, dependent: :destroy

  validates :name, presence: true
  validates :info, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
end
