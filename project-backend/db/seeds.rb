puts "🏕 Seeding users..."

#User.create(username: username, password_digest: )


puts "🏕 Seeding campaigns..."

#Campaign.create(name: "", genre: "", notes: "", world_level: , start_time: )
Campaign.create(name: "dj's journey", genre: "sci-fi", notes: "idk", world_level: 1, start_time: Time.now)

puts "🏕 Seeding orders..."

barbarian = Order.create(name: "Barbarian", description: "A fierce warrior of primitive background who can enter a battle rage", ability: "Strength", saves: "Strength & Constitution", image_url: 'https://i.imgur.com/8QiqEW6.png')
bard = Order.create(name: "Bard", description: "An inspiring magician whose power echoes the music of creation", ability: "charisma", saves: "Dexterity & Charisma", image_url: 'https://i.imgur.com/vnQaITb.png')
cleric = Order.create(name: "Cleric", description: "A priestly champion who wieldds divine magic in service of a higher power",  ability: "Wisdom", saves: "Wisdom & Charisma", image_url: 'https://i.imgur.com/JJHqRqD.png')
druid = Order.create(name: "Druid", description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",  ability: "Wisdom", saves: "Intelligence & Wisdom", image_url: 'https://i.imgur.com/4KBnWzI.png')
fighter = Order.create(name: "Fighter", description: "A master of martial combat, skilled with a variety of weapons and armour",  ability: "Strength or Dexterity", saves: "Strength & Constitution", image_url: 'https://i.imgur.com/VatiFW6.png')
monk = Order.create(name: "Monk", description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection", ability: "Dexterity & Wisdom", saves: "Strength & Dexterity", image_url: 'https://i.imgur.com/XVgjkMD.png')
paladin = Order.create(name: "Paladin", description: "A holy warrior bound to a sacred oath", ability: "Strength & Charisma", saves: "Wisdom & Charisma", image_url: 'https://i.imgur.com/kHlqZAi.png')
ranger = Order.create(name: "Ranger", description: "A warrior who combats threats on the edges of civilization", ability: "Dexterity & Wisdom", saves: "Strength & Dexterity", image_url: 'https://i.imgur.com/6CyUHA9.png')
rogue = Order.create(name: "Rogue", description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies", ability: "Dexterity", saves: "Dexterity & Intelligence", image_url: 'https://i.imgur.com/19Lclb1.png')
sorcerer = Order.create(name: "Sorcerer", description: "A spellcaster who draws on inherent magic from a gift of bloodline", ability: "Charisma", saves: "Constitution & Charisma", image_url: 'https://i.imgur.com/hRRKWTy.png')
warlock = Order.create(name: "Warlock", description: "A wielder of magic that is derived from a bargain with an extraplanar entity", ability: "Charisma", saves: "Wisdom & Charisma", image_url: 'https://i.imgur.com/xxJmCbL.png')
wizard = Order.create(name: "Wizard", description: "A scholarly magic-user capable of manipulating the structures of reality", ability: "Intelligence", saves: "Intelligence & Wisdom", image_url: 'https://i.imgur.com/tC8E3Pl.png')

puts "🏕 Seeding items..."

axe = Item.create(name: "Axe", category: "Weapon", image_url: "https://i.imgur.com/bXMVk3m.png", stat: "STR +10")
club = Item.create(name: "Club", category: "Weapon", image_url: "https://i.imgur.com/ktKOOxc.png", stat: "STR +15")
dagger = Item.create(name: "Dagger", category: "Weapon", image_url: "https://i.imgur.com/EyDWqkq.png", stat: "STR +10")
flail = Item.create(name: "Flail", category: "Weapon", image_url: "https://i.imgur.com/k2KwRew.png", stat: "STR +12")
greatsword = Item.create(name: "Greatsword", category: "Weapon", image_url: "https://i.imgur.com/yDX4XGI.png", stat: "STR +15")
hammer = Item.create(name: "Hammer", category: "Weapon", image_url: "https://i.imgur.com/h0BdZo1.png", stat: "STR +20")
heavy_crossbow = Item.create(name: "Heavy Crossbow", category: "Weapon", image_url: "https://i.imgur.com/Xigg8kb.png", stat: "STR +15")
longbow = Item.create(name: "Longbow", category: "Weapon", image_url: "https://i.imgur.com/gRdkopR.png", stat: "STR +10")
scimitar = Item.create(name: "Scimitar", category: "Weapon", image_url: "https://i.imgur.com/Xngyeg2.png", stat: "STR +12")
spear = Item.create(name: "Spear", category: "Weapon", image_url: "https://i.imgur.com/he0h0Rn.png", stat: "STR +10" )
steel_breastplate = Item.create(name: "Steel Breastplate", category: "Armor", image_url: "https://i.imgur.com/ut5Drzt.png", stat: "STR +10")
enchanted_breastplate = Item.create(name: "Enchanted Breastplate", category: "Armor", image_url: "https://i.imgur.com/jPA1oQO.png", stat: "STR +10")
gauntlets = Item.create(name: "Gauntlets", category: "Armor", image_url: "https://i.imgur.com/eV6tFyZ.png", stat: "DEF +12")
greaves = Item.create(name: "Greaves", category: "Armor", image_url: "https://i.imgur.com/t4rS1Iz.png", stat: "DEF +15")
helmet = Item.create(name: "Helmet", category: "Armor", image_url: "https://i.imgur.com/3tevWCZ.png", stat: "DEF +10")
wooden_shield = Item.create(name: "Wooden Shield", category: "Armor", image_url: "https://i.imgur.com/ojcJy3B.png", stat: "DEF +12")
steel_shield = Item.create(name: "Steel Shield", category: "Armor", image_url: "https://i.imgur.com/L5B4YAU.png", stat: "DEF +18")
charisma_potion = Item.create(name: "Charisma Potion", category: "Potion", image_url: "https://i.imgur.com/8gkr4SF.png", stat: "CHAR +10")
dexterity_potion = Item.create(name: "Dexterity Potion", category: "Potion", image_url: "https://i.imgur.com/iQSeegD.png", stat: "DEX +10")
intelligence_potion = Item.create(name: "Intelligence Potion", category: "Potion", image_url: "https://i.imgur.com/YdUV6Sg.png", stat: "INT +10")
strength_potion = Item.create(name: "Strength Potion", category: "Potion", image_url: "https://i.imgur.com/jGLVPYm.png", stat: "STR +10")
wisdom_potion = Item.create(name: "Wisdom Potion", category: "Potion", image_url: "https://i.imgur.com/ZNXj2sN.png", stat: "WIS +10")

puts "🏕 Seeding characters..."

#Character.create(name: "",  order_id: order_id, level: 1, user_id: user_id, campaign_id: campaign_id)
Character.create(name:'shrek', bio:'ogre', level:1, order_id:1, user_id:1, campaign_id:1)

puts "🏕 Seeding character_items..."
CharacterItem.create(item_id:1, character_id:1)

puts "🏕 Seeding friends..."

#Friend.create(user_id: user_id, friend_id: friend_id)
Friend.create(user_id:1, friend_id:2)