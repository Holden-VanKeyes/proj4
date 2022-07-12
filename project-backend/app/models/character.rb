class Character < ApplicationRecord
    belongs_to :user 
    belongs_to :campaign 
    belongs_to :class 
    has_many :items
end
