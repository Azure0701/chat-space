class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  valigates :content, presence: true, unless: :image?
end
