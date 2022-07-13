puts "🏕 Seeding users..."

#User.create(username: username, password_digest: )
User.create(username: "brian", password_digest: "123")
User.create(username: "abram", password_digest: "123")
User.create(username: "river", password_digest: "123")
User.create(username: "jimmy", password_digest: "123")


puts "🏕 Seeding campaigns..."

#Campaign.create(name: "", genre: "", notes: "", world_level: , start_time: )
Campaign.create(name: "dj's journey", genre: "sci-fi", notes: "idk", world_level: 1, start_time: Time.now)

puts "🏕 Seeding CharacterClasses..."

barbarian = CharacterClass.create(name: "Barbarian", description: "A fierce warrior of primitive background who can enter a battle rage", ability: "Strength", saves: "Strength & Constitution")
bard = CharacterClass.create(name: "Bard", description: "An inspiring magician whose power echoes the music of creation", ability: "charisma", saves: "Dexterity & Charisma")
cleric = CharacterClass.create(name: "Cleric", description: "A priestly champion who wieldds divine magic in service of a higher power",  ability: "Wisdom", saves: "Wisdom & Charisma")
druid = CharacterClass.create(name: "Druid", description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",  ability: "Wisdom", saves: "Intelligence & Wisdom")
fighter = CharacterClass.create(name: "Fighter", description: "A master of martial combat, skilled with a variety of weapons and armour",  ability: "Strength or Dexterity", saves: "Strength & Constitution")
monk = CharacterClass.create(name: "Monk", description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection", ability: "Dexterity & Wisdom", saves: "Strength & Dexterity")
paladin = CharacterClass.create(name: "Paladin", description: "A holy warrior bound to a sacred oath", ability: "Strength & Charisma", saves: "Wisdom & Charisma")
ranger = CharacterClass.create(name: "Ranger", description: "A warrior who combats threats on the edges of civilization", ability: "Dexterity & Wisdom", saves: "Strength & Dexterity")
rogue = CharacterClass.create(name: "Rogue", description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies", ability: "Dexterity", saves: "Dexterity & Intelligence")
sorcerer = CharacterClass.create(name: "Sorcerer", description: "A spellcaster who draws on inherent magic from a gift of bloodline", ability: "Charisma", saves: "Constitution & Charisma")
warlock = CharacterClass.create(name: "Warlock", description: "A wielder of magic that is derived from a bargain with an extraplanar entity", ability: "Charisma", saves: "Wisdom & Charisma")
wizard = CharacterClass.create(name: "Wizard", description: "A scholarly magic-user capable of manipulating the structures of reality", ability: "Intelligence", saves: "Intelligence & Wisdom")

puts "🏕 Seeding items..."

club = Item.create(name: "Club", category: "Weapon", image_url: "", power_level: 1)
dagger = Item.create(name: "Dagger", category: "Weapon", image_url: "", power_level: 2)
spear = Item.create(name: "Spear", category: "Weapon", image_url: "", power_level: 3)
flail = Item.create(name: "Flail", category: "Weapon", image_url: "", power_level: 4)
greatsword = Item.create(name: "Greatsword", category: "Weapon", image_url: "", power_level: 5)
scimitar = Item.create(name: "Scimitar", category: "Weapon", image_url: "", power_level: 5)
light_crossbow = Item.create(name: "Light Crossbow", category: "Weapon", image_url: "", power_level: 1)
sling = Item.create(name: "Sling", category: "Weapon", image_url: "", power_level: 2)
longbow = Item.create(name: "Longbow", category: "Weapon", image_url: "", power_level: 4)
heavy_crossbow = Item.create(name: "Heavy Crossbow", category: "Weapon", image_url: "", power_level: 6 )
padded_armor = Item.create(name: "Padded Armor", category: "Armor", image_url: "", power_level: 1)
studded_leather = Item.create(name: "Studded Leather", category: "Armor", image_url: "", power_level: 2)
scale_mail = Item.create(name: "Scale Mail", category: "Armor", image_url: "", power_level: 3)
breastplate = Item.create(name: "Breastplate", category: "Armor", image_url: "", power_level: 4)
chain_mail = Item.create(name: "Chain Mail", category: "Armor", image_url: "", power_level: 6)
plate = Item.create(name: "Plate", category: "Armor", image_url: "", power_level: 8)
wooden_shield = Item.create(name: "Wooden Shield", category: "Off-hand", image_url: "", power_level: 1)
steel_shield = Item.create(name: "Steel Shield", category: "Off-hand", image_url: "", power_level: 3)
socerers_tome = Item.create(name: "Sorcerers Tome", category: "Off-hand", image_url: "", power_level: 4)
dragonleather_shield = Item.create(name: "Dragon-leather Shield", category: "Off-hand", image_url: "", power_level: 4)
# Item.create(name: "", category: "", image_url: "", power_level: )
# Item.create(name: "", category: "", image_url: "", power_level: )

puts "🏕 Seeding character_items..."
CharacterItem.create(item_id:1, character_id:1)

puts "🏕 Seeding characters..."

#Character.create(name: "",  character_class_id: character_class_id, level: 1, user_id: user_id, campaign_id: campaign_id)
Character.create(name:'shrek', bio:'ogre', level:1, character_class_id:1, user_id:1, campaign_id:1)

puts "🏕 Seeding friends..."

#Friend.create(user_id: user_id, friend_id: friend_id)
Friend.create(user_id:1, friend_id:2)