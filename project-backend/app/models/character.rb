class Character < ApplicationRecord
    belongs_to :user 
    belongs_to :campaign 
    belongs_to :class 
    has_many :character_items
    has_many :items, through: :character_items
end
