class Group < ApplicationRecord
  has_many :group_users
  hass_many :users, through: :group_users
  validates :name, presence: true, uniqueness: true
end

