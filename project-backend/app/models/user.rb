class User < ApplicationRecord
    has_many :characters 
    has_many :campaigns, through: :characters 
    has_many :friends

    has_secure_password
end
