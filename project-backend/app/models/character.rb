class Character < ApplicationRecord
    belongs_to :user 
    belongs_to :campaign 
    belongs_to :order
    has_many :character_items
    has_many :items, through: :character_items
end
