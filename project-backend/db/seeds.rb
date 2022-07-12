# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
CharacterClass.create(name:"Fighter", image_url:'https://i.imgur.com/1T2EHxu.jpeg', description:'a fighter', ability: 'swords')
CharacterClass.create(name:"Ranger", image_url:'https://i.imgur.com/ONO08W1.jpeg', description:'a ranger', ability: 'stealth')
CharacterClass.create(name:"Druid", image_url:'https://i.imgur.com/cGZMmfb.jpeg', description:'a druid', ability: 'healing')
CharacterClass.create(name:"Sorcerer", image_url:'https://i.imgur.com/hEn11gM.jpeg', description:'a sorcerer', ability: 'magic')
