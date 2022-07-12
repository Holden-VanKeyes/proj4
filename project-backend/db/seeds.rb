puts "🏕 Seeding CharacterClasses..."

barbarian = CharacterClass.create(name: "Barbarian", description: "A fierce warrior of primitive background who can enter a battle rage", primary_ability: "Strength", saves: "Strength & Constitution")
bard = CharacterClass.create(name: "Bard", description: "An inspiring magician whose power echoes the music of creation", primary_ability: "charisma", saves: "Dexterity & Charisma")
cleric = CharacterClass.create(name: "Cleric", description: "A priestly champion who wieldds divine magic in service of a higher power",  primary_ability: "Wisdom", saves: "Wisdom & Charisma")
druid = CharacterClass.create(name: "Druid", description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",  primary_ability: "Wisdom", saves: "Intelligence & Wisdom")
fighter = CharacterClass.create(name: "Fighter", description: "A master of martial combat, skilled with a variety of weapons and armour",  primary_ability: "Strength or Dexterity", saves: "Strength & Constitution")
monk = CharacterClass.create(name: "Monk", description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection", primary_ability: "Dexterity & Wisdom", saves: "Strength & Dexterity")
paladin = CharacterClass.create(name: "Paladin", description: "A holy warrior bound to a sacred oath", primary_ability: "Strength & Charisma", saves: "Wisdom & Charisma")
ranger = CharacterClass.create(name: "Ranger", description: "A warrior who combats threats on the edges of civilization", primary_ability: "Dexterity & Wisdom", saves: "Strength & Dexterity")
rogue = CharacterClass.create(name: "Rogue", description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies", primary_ability: "Dexterity", saves: "Dexterity & Intelligence")
sorcerer = CharacterClass.create(name: "Sorcerer", description: "A spellcaster who draws on inherent magic from a gift of bloodline", primary_ability: "Charisma", saves: "Constitution & Charisma")
warlock = CharacterClass.create(name: "Warlock", description: "A wielder of magic that is derived from a bargain with an extraplanar entity", primary_ability: "Charisma", saves: "Wisdom & Charisma")
wizard = CharacterClass.create(name: "Wizard", description: "A scholarly magic-user capable of manipulating the structures of reality", primary_ability: "Intelligence", saves: "Intelligence & Wisdom")

puts "🏕 Seeding items..."

club = Item.create(name: "Club", type: "Weapon", item_img: "", power_level: 1, character_id: character_id)
dagger = Item.create(name: "Dagger", type: "Weapon", item_img: "", power_level: 2, character_id: character_id)
spear = Item.create(name: "Spear", type: "Weapon", item_img: "", power_level: 3, character_id: character_id)
flail = Item.create(name: "Flail", type: "Weapon", item_img: "", power_level: 4, character_id: character_id)
greatsword = Item.create(name: "Greatsword", type: "Weapon", item_img: "", power_level: 5, character_id: character_id)
scimitar = Item.create(name: "Scimitar", type: "Weapon", item_img: "", power_level: 5, character_id: character_id)
light_crossbow = Item.create(name: "Light Crossbow", type: "Weapon", item_img: "", power_level: 1, character_id: character_id)
sling = Item.create(name: "Sling", type: "Weapon", item_img: "", power_level: 2, character_id: character_id)
longbow = Item.create(name: "Longbow", type: "Weapon", item_img: "", power_level: 4, character_id: character_id)
heavy_crossbow = Item.create(name: "Heavy Crossbow", type: "Weapon", item_img: "", power_level: 6 , character_id: character_id)
padded_armor = Item.create(name: "Padded Armor", type: "Armor", item_img: "", power_level: 1, character_id: character_id)
studded_leather = Item.create(name: "Studded Leather", type: "Armor", item_img: "", power_level: 2, character_id: character_id)
scale_mail = Item.create(name: "Scale Mail", type: "Armor", item_img: "", power_level: 3, character_id: character_id)
breastplate = Item.create(name: "Breastplate", type: "Armor", item_img: "", power_level: 4, character_id: character_id)
chain_mail = Item.create(name: "Chain Mail", type: "Armor", item_img: "", power_level: 6, character_id: character_id)
plate = Item.create(name: "Plate", type: "Armor", item_img: "", power_level: 8, character_id: character_id)
wooden_shield = Item.create(name: "Wooden Shield", type: "Off-hand", item_img: "", power_level: 1, character_id: character_id)
steel_shield = Item.create(name: "Steel Shield", type: "Off-hand", item_img: "", power_level: 3, character_id: character_id)
socerers_tome = Item.create(name: "Sorcerers Tome", type: "Off-hand", item_img: "", power_level: 4, character_id: character_id)
dragonleather_shield = Item.create(name: "Dragon-leather Shield", type: "Off-hand", item_img: "", power_level: 4, character_id: character_id)
Item.create(name: "", type: "", item_img: "", power_level: , character_id: character_id)
Item.create(name: "", type: "", item_img: "", power_level: , character_id: character_id)


puts "🏕 Seeding character..."

Character.create(name: "",  character_class_id: character_class_id, level: 1, user_id: user_id, campaign_id: campaign_id)


puts "🏕 Seeding campaign..."

Campaign.create(name: "", genre: "", notes: "", world_level: , start_time: , admin_id: admin_id)


puts "🏕 Seeding user..."

User.create(username: username, password_digest: )

puts "🏕 Seeding friend..."

Friend.create(user_id: user_id, friend_id: friend_id)