export const keyitemsGen = {
  btnGeneral: `Details / Find`,
}

export const keyitemsFilters = [
  { id: 1, val: `All`, active: true, },
  { id: 2, val: `Special Items`, active: false, },
  { id: 3, val: `Combat Skills`, active: false, },
  { id: 4, val: `Incense ingredients`, active: false, },
  { id: 5, val: `Esoteric Texts`, active: false, },
  { id: 6, val: `Special Consumables`, active: false, },
  { id: 7, val: `Quest Items`, active: false, },
]

export const keyitems = [
  {
    id: 1,
    filterId: 2,
    title: `Withered Red Gourd`,
    location: `Hirata Estate - Dragonspring Hirata Estate`,
    description: `A curved, withered red gourd filled with medicinal water. The gourd's medicine refills upon rest.
    Reduces Burn buildup, and lightly increases Burn resistance. It cannot heal the Burn status abnormality, however.`,
    type: `Special Item`,
    procurement: `Purchased`,
    find: `The Withered Red Gourd is sold by the Pot Noble Harunaga for x2 Treasure Carp Scales, located on a rocky island close to the banks of the river flowing beneath a bridge leading to the Hirata Estate Path entrance.`,
    note: `Note: Sold by the Pot Noble Harunaga for x2 Treasure Carp Scales`,
    img: `withered-red-gourd.webp`
  },
  {
    id: 2,
    filterId: 2,
    title: `Green Mossy Gourd`,
    location: `Sunken Valley - Bodhisattva Valley`,
    description: `A curved, moss-covered gourd filled with medicinal water. Refills upon rest. While it does not heal "Poison" status it reduces Poison buildup, and increases Poison resistance.
    This gourd was made out of necessity by those that made poisonous lands their home. It's said if you live there long enough, eventually poison won't affect you at all.`,
    type: `Special Item`,
    procurement: `Purchased`,
    find: `The Green Mossy Gourd is sold by the Toxic Memorial Mob for 1800 sen, located on the banks of the poison pools at the bottom of the Bodhisattva Valley before the entrance to the Great Serpent cave.`,
    note: `Note: Sold by the Toxic Memorial Mob for 1800 sen`,
    img: `green-mossy-gourd.webp`
  },
  {
    id: 3,
    filterId: 2,
    title: `Mottled Purple Gourd`,
    location: `Ashina Depths - Mibu Village`,
    description: `A curved, mottled purple gourd filled with medicinal water. Refills upon rest. Reduces "Terror" status buildup, and increases Terror resistance.
    This gourd's twisted form was formed in graveyards, corpse-strewn battlefields, and other forlorn places of death. It follows then that drinking its waters can help prevent the onset of Terror.`,
    type: `Special Item`,
    procurement: `Purchased`,
    find: `The Mottled Purple Gourd is sold by the Exiled Memorial Mob for 1800 sen, located on the banks of a stream just outside of Mibu Village.`,
    note: `Note: Sold by the Exiled Memorial Mob for 1800 sen`,
    img: `mottled-purple-gourd.webp`
  },
  {
    id: 4,
    filterId: 2,
    title: `Nightjar Monocular`,
    location: `Ashina Outskirts - Outskirts Wall Stairway`,
    description: `A bamboo tube used to see distant objects.
    While shinobi aready have good vision, looking through this tube with one eye enables one to see even further.
    The Nightjar Ninja serve Isshin Ashina, guarding the rooftops of Ashina Castle, their sharp eyes on the lookout for any would-be trespassers. Not much escapes the eyes of a Nightjar.`,
    type: `Special Item`,
    procurement: `Discovered`,
    find: `The first item encountered by a wall in the building at the top of the Stairway where the Chained Ogre was encountered.`,
    img: `nightjar-monocular.webp`
  },
  {
    id: 5,
    filterId: 2,
    title: `Hidden Tooth`,
    location: `Ashina Outskirts - Dilapidated Temple`,
    description: `False tooth loaded with a secret shinobi drug, blue in color.
    Can be used Repeatedly.
    Crush the blue nostrum between the back teeth to die as often as one pleases.
    Could be useful in certain situations.
    Surely an unnecessary reminder, but the first death is typically one's last.`,
    type: `Special Item`,
    procurement: `Rewarded`,
    find: `Rewarded by Hanbei the Undying after fulfilling his request for a quick death by Wolf's hand using the Mortal Blade.`,
    img: `hidden-tooth.webp`
  },
  {
    id: 6,
    filterId: 2,
    title: `Ceremonial Tanto`,
    location: `Abandoned Dungeon - Bottomless Hole`,
    description: `Dagger with a stark white blade and hilt. Converts Vitality into Spirit Emblems.
    Originally, this tanto was used in a ritual offering to the dragon, in which an emblem would be cut from one's own life force and set adrift on the Fountainhead waters. The blade is inscribed with its true name: "Devoted Soul".`,
    type: `Special Item`,
    procurement: `Rewarded`,
    find: `Dropped by the Shichimen Warrior in the Bottomless Hole upon defeat.`,
    img: `ceremonial-tanto.webp`
  },
  {
    id: 7,
    filterId: 2,
    title: `Sakura Droplet`,
    location: `Hirata Estate - Hidden Temple`,
    description: `Pale pink crystal residue known to form when an immortal oath fails to establish.

    Increases Resurrective Power to allow an additional resurrection.
    
    To repeat the vows of the undying and be awarded Resurrective Power once more surely necessitates the aid of a Divine Child of the Dragon's Heritage.`,
    type: `Special Item`,
    procurement: `Rewarded`,
    find: `Dropped by the Lady Butterfly upon defeat.`,
    img: `sakura-droplet.webp`
  },
  {
    id: 8,
    filterId: 2,
    title: `Dragon's Tally Board`,
    location: `Fountainhead Palace - Vermilion Bridge`,
    description: `A tally board carved from a large piece of jade. Possessing this increases the stocks that can be purchased in merchants' shops.

    Such a tally board is higly prized by the merchant class. Old custom dictates that those of dragon rank are recognized as supreme merchants by the imperial palace, and should be given the best possible treatment.`,
    type: `Special Item`,
    procurement: `Rewarded`,
    find: `Dropped by the True Monk upon defeat.`,
    img: `dragons-tally-board.webp`
  },
  {
    id: 9,
    filterId: 3,
    title: `Anti Air Deathblow Text`,
    location: `Ashina Castle - Old Grave`,
    description: `Compendium on the shinobi Martial Art, "Anti-Air Deathblow". Skill unlocked upon acquiring this item.

    "A technique which serves the shinobi who is not bound by the earth in battle."
    
    Leap towards an opponent who has exposed himself in mid-air, and strike, killing him before he hits the ground.`,
    type: `Combat Skill`,
    procurement: `Purchased`,
    find: `The Anti Air Deathblow Text is sold by the merchant Blackhat Badger for 2200 Sen. He is located inside a building near the Old Grave Idol in Ashina Castle (jump down the hole in the roof below the idol).
    During the Ministry invasion, if you have not yet purchased the text it will be available in the Offering Box at the Dilapidated Temple for 2200 sen.`,
    note: `Note: Sold by the merchant Blackhat Badger for 2200 sen`,
    img: `anti-air-deathblow-text.webp`
  },
  {
    id: 10,
    filterId: 3,
    title: `Floating Passage Text`,
    location: `Hirata Estate - Dragonspring Hirata Estate`,
    description: `A compendium on the "Floating Passage" Combat Art. It is learned upon acquiring this text.

    "Floating Passage unleashes attacks in a flowing, dancelike form, overwhelming opponents in a flurry of graceful aggression.
    
    While technically an Ashina technique, its foreign origin caused it to be deemed heretical."`,
    type: `Combat Skill`,
    procurement: `Purchased`,
    find: `The Floating Passage Text is sold by the Pot Noble Harunaga for x5 Treasure Carp Scales, located on a rocky island close to the banks of the river flowing beneath a bridge leading to the Hirata Estate Path entrance.`,
    note: `Note: Sold by the Pot Noble Harunaga for x5 Treasure Carp Scales`,
    img: `floating-passage-text.png`
  },
  {
    id: 11,
    filterId: 3,
    title: `Mortal Blade`,
    location: `Senpou Temple, Mt. Kongo - Inner Sanctum`,
    description: `An odachi capable of slaying the undying. Its crimson blade will take the life of any who dares draw it. Without the power of Resurrection, one could not hope to wield this weapon, which allows one to defeat even infested beings.

    Long concealed within Senpou Temple, the blade is inscribed with its true name: Gracious Gift of Tears".`,
    type: `Combat Skill`,
    procurement: `Rewarded`,
    find: `Given by the Divine Child of Rejuvenation upon the first encounter after reaching the Inner Sanctum.`,
    requirement: `Defeat the Folding Screen Monkeys to access item location.`,
    img: `mortal-blade.webp`
  },
  {
    id: 12,
    filterId: 4,
    title: `Lotus of the Palace`,
    location: `Sunken Valley - Gaurdian Ape's Watering Hole`,
    description: `A white lotus flower found blooming in the depths of the Sunken Valley, where the Fountainhead Waters pool deeply.

    The flower's aroma attracts female apes. Thus the Guardian Ape carefully tended to it, so as to offer it to his bride.
    
    One of the incense ingredient sought by the Divine Heir for Immortal Severance.`,
    type: `Incense ingredient`,
    procurement: `Discovered`,
    find: `Found at the back of a cave in the Guardian Ape's Watering Hole.`,
    requirement: `Defeat the Gaurdian Ape to access item location.`,
    img: `lotus-of-the-palace.png`
  },
  {
    id: 13,
    filterId: 4,
    title: `Shelter Stone`,
    location: `Ashina Depths - Wedding Cave Door`,
    description: `A stone found on an altar deep within the village of the water-dwellers. 
    Stones will sometimes appear in the bodies of those who have long drank from the Fountainhead Waters.
    "Step into the marital shrine and offer the fragrant, auspicious stone."
    
    One of the incense ingredient sought by the Divine Heir for Immortal Severance.`,
    type: `Incense ingredient`,
    procurement: `Discovered`,
    find: `Found resting on an altar within the Wedding Cave.`,
    requirement: `Defeat the Corrupted Monk to access item location.`,
    img: `shelter-stone.webp`
  },
  {
    id: 14,
    filterId: 4,
    title: `Aromatic Branch`,
    location: `Ashina Castle - Castle Tower Lookout`,
    description: `Dried aromatic wood from the Everblossom. Plucked by the Wolf's father.

    The Everblossom is a sakura tree, and as such is ripe with nostalgia. Takeru would likely gaze upon this branch when once it bloomed, reminded of home.
    
    One of the incense ingredient sought by the Divine Heir for Immortal Severance.`,
    type: `Incense ingredient`,
    procurement: `Rewarded`,
    find: `Dropped by Great Shinobi Owl upon defeat.`,
    img: `aromatic-branch.webp`
  },
  {
    id: 15,
    filterId: 4,
    title: `Aromatic Flower`,
    location: `Hirata Estate - Hidden Temple`,
    description: `Flowers of the Everblossom that bloomed in an old memory. Grafted by Takeru, who took the branch from the Divine Realm as a parting relic.

    One who seeks Purification may impart the Dragon tears and these flowers to the Divine Heir of the Dragon's Heritage, thus severing the shackles that bind the immortal bearer of Dragon's Blood.`,
    type: `Incense ingredient`,
    procurement: `Rewarded`,
    find: `Dropped by Owl (Father) upon defeat.`,
    img: `aromatic-flower.webp`
  },
  {
    id: 16,
    filterId: 5,
    title: `Shinobi Esoteric Text`,
    location: `Ashina Outskirts - Dilapidated Temple`,
    description: `A book of secrets that details a variety of techniques employed by Shinobi. Grants the ability to learn "Shinobi Style" Skills.

    Within this text are the innermost secrets of the Shinobi Arts, such as attacks performed in the air and hiding one's body to avoid detection.
    
    Such moves could never be practiced by samurai.`,
    type: `Esoteric Text`,
    procurement: `Rewarded`,
    find: `Given by the Sculptor after earning the first skill point.`,
    note: `Note: grants access to the Shinobi Arts Skill Tree`,
    img: `shinobi-esoteric-text.png`
  },
  {
    id: 17,
    filterId: 5,
    title: `Prosthetic Esoteric Text`,
    location: `Ashina Outskirts - Dilapidated Temple`,
    description: `A book of secrets that details a variety of techniques for use with Shinobi Prosthetic. Grants the ability to learn "Prosthetic Style" Skills.

    Written by a man who abandoned the path of the Shinobi, but could not bring himself to discard his painstaking research.
    
    He never expected to pass these on to anyone else.`,
    type: `Esoteric Text`,
    procurement: `Rewarded`,
    find: `Given by the Sculptor after having fitted x3 prosthetic tools.`,
    note: `Note: grants access to the Prosthetic Arts Skill Tree`,
    img: `prosthetic-esoteric-text.png`
  },
  {
    id: 18,
    filterId: 5,
    title: `Ashina Esoteric Text`,
    location: `Ashina Outskirts - Ashina Castle Gate`,
    description: `A compendium of the Ashina Sword Style. Allows one to learn "Ashina Style" Skills.

    The text reads like a history of Ishhin Ashina's battles; when young, Isshin fought desperately time and time again, polishing his technique in the blood of his enemies.
    
    He consolidated his learnings under the "Ashina Style" name for the sake of his clan's dominance.`,
    type: `Esoteric Text`,
    procurement: `Rewarded`,
    find: `Rewarded by the Tengu of Ashina upon slaying the "rats".`,
    note: `Note: grants access to the Ashina Arts Skill Tree`,
    img: `ashina-esoteric-text.webp`
  },
  {
    id: 19,
    filterId: 5,
    title: `Senpou Esoteric Text`,
    location: `Senpou Temple, Mt. Kongo - Main Hall`,
    description: `A book of secrets that grants the ability to learn "Senpou Style" Skills.

    Those of the Senpou Temple mastered martial arts in the pursuit of virtue. They considered strong fists and strict discipline essential against Buddha's enemies.
    
    However, Senpou Temple was seized by an obsession for the undying, which corrupted their teachings and style.`,
    type: `Esoteric Text`,
    procurement: `Discovered`,
    find: `Found resting at the base of a buddha statue within a x5 story pagoda at the summit of Mt. Kongo. Reach it through a subterranean tunnel you can find the entrance to just outside of the Main Hall's back entrance.`,
    note: `Note: grants access to the Temple Arts Skill Tree`,
    img: `senpou-esoteric-text.webp`
  },
  {
    id: 20,
    filterId: 5,
    title: `Mushin Esoteric Text`,
    location: `Ashina Castle - Great Serpent Shrine`,
    description: `A unique text of the legendary Ashina Mushin Compound Style.

    Young Isshin would stop at nothing in his lust for power, and this single-minded search for strength ended in him taking Ashina for his own. This is the result of combining techniques from the styles he encountered. This drive defined Isshin's achievements and as such, this text will never be finished.`,
    type: `Esoteric Text`,
    procurement: `Rewarded`,
    find: `Rewarded by the Tengu of Ashina, at the Great Serpent Shrine, upon learning any secret technique. These secret techniques are any Special Technique in any Combat Art Skill Tree.`,
    note: `Note: grants access to the Mushin Arts Skill Tree`,
    img: `mushin-esoteric-text-.png`
  },
  {
    id: 21,
    filterId: 6,
    title: `Unrefined Sake`,
    location: `Various Locations`,
    description: `A bottle of cloudy, unrefined sake. Sake is a drink meant for sharing.

    This cloudy sake is one of Isshin Ashina's favorites. It has a rich, full-bodied flavor.
    
    On the other hand, it has a reputation for getting one too drunk, too quickly.`,
    procurement: `Various`,
    type: `Special Consumable`,
    collect: [
      { 
        id: 1,
        find: `Dropped by Juzou the Drunkard upon defeat. (Early game)`,
        location: `Hirata Estate - Main Hall`,
        procurement: `Rewarded`,
      },
      { 
        id: 2,
        find: `Given by Isshin Ashina after deafting Genichiro Ashina at the Castle Tower Lookout. (Early game)`,
        location: `Ashina Castle - Upper Tower Kuro's Room`,
        procurement: `Rewarded`,
      },
      { 
        id: 3,
        find: `Dropped by Tokujiro the Glutton upon defeat. (Mid game)`,
        location: `Ashina Depths - Hidden Forest`,
        procurement: `Rewarded`,
      },
    ],
    note: `Note: provides new dialogue interactions when offered to eihter The Sculptor, Emma or Isshin Ashina`,
    img: `unrefined-sake.webp`
  },
  {
    id: 22,
    filterId: 6,
    title: `Monkey Booze`,
    location: `Various Locations`,
    description: `Alcohol created by dew pooled in a hollow tree.

    Fruits hidden by monkeys in tree hollows can sometimes ferment and turn into sake with a bit of luck.
    
    While it's known for its brutally harsh flavor, some find this acquired taste irresistible.`,
    type: `Special Consumable`,
    procurement: `Various`,
    collect: [
      { 
        id: 1,
        find: `Found in the palms of a buddha statue in a shrine on route to the Demon Bell. (Early game)`,
        location: `Senpou Temple, Mt. Kongo - Bell Demon's Temple`,
        procurement: `Discovered`,
      },
      { 
        id: 2,
        find: `Dropped by a large barrel of monkeys gathered near the edge of a cliff in . (Mid game)`,
        location: `Sunken Valley - Bodhisattva Valley`,
        procurement: `Rewarded`,
      },
      { 
        id: 3,
        find: `Found by the skeletal remains of a great ape on the edge of a ledge overlooking the Great Ape's Burrow. When exiting the Poison Pools on route to the Hidden Forest, look for an upper ledge to the left that can be grappled to, follow this path to its end. (Mid game)`,
        location: `Ashina Depths - Poison Pool`,
        procurement: `Discovered`,
      },
    ],
    note: `Note: provides new dialogue interactions when offered to eihter The Sculptor, Emma or Isshin Ashina`,
    img: `monkey-booze.webp`
  },
  {
    id: 23,
    filterId: 6,
    title: `Ashina Sake`,
    location: `Various Locations`,
    description: `A bottle of Ashina sake given by Emma. Sake is a drink meant for sharing.

    While it does not contain water from the fountainhead, it is made from the purest of waters, and is a drink beloved by the people of Ashina.`,
    type: `Special Consumable`,
    procurement: `Various`,
    collect: [
      { 
        id: 1,
        find: `Given by Emma upon the Sculptor's cure of his first affliction with Dragon Rot (Early game)`,
        location: `Ashina Outskirts - Dilapidated Temple`,
        procurement: `Rewarded`,
      },
      { 
        id: 2,
        find: `Found by a shrine at the end of a rice paddy field in Miby Village close to the Water Mill (Mid game)`,
        location: `Ashina Depths - Water Mill`,
        procurement: `Discovered`,
      },
      { 
        id: 3,
        find: `Found in a room among a gang of bandits (Late game)`,
        location: `Hirata Estate - Main Hall`,
        procurement: `Discovered`,
      },
    ],
    note: `Note: provides new dialogue interactions when offered to eihter The Sculptor, Emma or Isshin Ashina`,
    img: `ashina-sake.webp`
  },
  {
    id: 24,
    filterId: 6,
    title: `Dragonspring Sake`,
    location: `Various Locations`,
    description: `A bottle of crystal-clear sake. Sake is a drink meant for sharing.

    A top-shelf sake brewed by the Ashina brew master with water from the Dragonspring. The pure water extracts every last bit of flavor from Ashina's finest rice.
    
    There are no words that can do the flavor justice. To understand, one must taste it for themselves.`,
    type: `Special Consumable`,
    procurement: `Various`,
    collect: [
      { 
        id: 1,
        find: `Sold by the Exiled Memorial Mob Merchant for 1000 Sen. (Mid game)`,
        location: `Ashina Depths - Mibu Village`,
        procurement: `Purchased`,
      },
      { 
        id: 2,
        find: `Given by the Mibu Village priest locked within the shrine at the end of Mibu Village beyond the Water Mill after giving him the Water of the Palace. (Mid game)`,
        location: `Ashina Depths - Water Mill`,
        procurement: `Rewarded`,
      },
      { 
        id: 3,
        find: `Dropped by the Elite Okami Warrior dancing near the Great Sakura upon defeat. (Late game)`,
        location: `Fountainhead Palace - Great Sakura`,
        procurement: `Rewarded`,
      },
    ],
    note: `Note: provides new dialogue interactions when offered to eihter The Sculptor, Emma or Isshin Ashina`,
    img: `dragonspring-sake.webp`
  },
  {
    id: 25,
    filterId: 7,
    title: `Divine Dragon's Tears`,
    location: `Fountainhead Palace - Sanctuary`,
    description: `Tears received from the Divine Dragon. The gracious gift of tears can only be granted by the Mortal Blade.

    The body of the Divine Dragon is eternal, and its tears, once shed, will maintain their form and moisture in perpetuity.
    
    Should one of the Dragon's Heritage partake of the dragon's tears, Immortal Severance will be reified.`,
    type: `Quest Item`,
    procurement: `Rewarded`,
    find: `collected from the Divine Dragon upon defeat.`,
    img: `divine-dragons-tears.webp`
  },
  {
    id: 26,
    filterId: 7,
    title: `Dried Serpent Viscera`,
    location: `Sunken Valley - Bodhisattva Valley`,
    description: `A dried, persimmon-like heart of a Great Serpent. The Great Serpent is a god of the land, and the heart is believed to be where one's spirit resides. While it looks much like a persimmon, in fact this is the red viscera of a god.

    Apparently, denizens of the Sunken Valley worship the organs believing they represent the deity itself.`,
    type: `Quest Item`,
    procurement: `Discovered`,
    find: `Found resting in the palm of a buddha statue in a shrine at the end of the Great Serpent cave.`,
    img: `dried-serpent-viscera.webp`
  },
  {
    id: 27,
    filterId: 7,
    title: `Fresh Serpent Viscera`,
    location: `Sunken Valley - Gun Fort`,
    description: `The persimmon-like heart of a Great Serpent.

    The Great Serpent is considered to be a god of the land, and the heart is believed to be where one's spirit resides. While its shape bears similarity to a persimmon, in fact this is the red viscera of a god. It is safe to assume that eating it would be poisonous to one's health.`,
    type: `Quest Item`,
    procurement: `Rewarded`,
    find: `collected by slaying the Great Serpent resting by the lake below the Gun Fort back entrance and close to Riven Cave.`,
    img: `fresh-serpent-viscera.webp`
  },
  {
    id: 28,
    filterId: 7,
    title: `Frozen Tears`,
    location: `Senpou Temple, Mt. Kongo - Inner Sanctum`,
    description: `Tears that were shed by the Divine Child of Rejuvenation once she became the cradle.

    They are but frozen drops.
    
    By having Kuro drink both the Dragon Tears and the Frozen Tears, the Cradling ritual can be performed.
    
    Cold Dragon Tears are just that.`,
    type: `Quest Item`,
    procurement: `Rewarded`,
    find: `Given by the Divine Child of Rejuvenation after she has consumed the pair of serpentine fruits.`,
    img: `frozen-tears.png`
  },
  {
    id: 29,
    filterId: 7,
    title: `Young Lord's Bell Charm`,
    location: `Ashina Outskirts - Outskirts Wall Gate Path`,
    description: `A bell charm received from an old woman, who asked that it be offered to Buddha.

    Bell charms protect their holders through Buddha's divine protection. If one finds themselves the owner of another's bell charm, offering it to Buddha on their behalf is common courtesy.
    
    The Sculptor at the Dilapidated Temple can advise on how it should be offered.`,
    type: `Quest Item`,
    procurement: `Discovered`,
    find: `Given by the Faithful One, mother of Inosuke Nogami, in a ruined building along the Gate Path.`,
    img: `young-lords-bell-charm.png`
  },
  {
    id: 30,
    filterId: 7,
    title: `Father's Bell Charm`,
    location: `Ashina Castle or Dilapidated Temple`,
    description: `A bell charm previously owned by the owl.

    The Owl held this bell for a long time. Offering it at the Dilapidated Temple may result in seeing a different memory than before.
    
    There's no way of knowing why this protective bell exits. Perhaps the Owl kept it for himself, or perhaps he meant to give it to someone...`,
    type: `Quest Item`,
    procurement: `Rewarded`,
    find: `Given by Emma after various eavesdrops reveal details that open up specific dialogue branches.`,
    img: `fathers-bell-charm.webp`
  },
  {
    id: 31,
    filterId: 2,
    title: `Mask Fragment: Right`,
    location: `Fountainhead Palace - Near Pot Noble`,
    description: `A fragment of an old dancer's mask.

    The original must have been broken into several pieces, and this fragment appears to be the right side of the mask.`,
    type: `Special Item`,
    procurement: `Purchased`,
    find: `The Mask Fragment: Right is sold by the Pot Noble Harunaga for x7 Treasure Carp Scales, located on a rocky island close to the banks of the river flowing beneath a bridge leading to the Hirata Estate Path entrance.`,
    note: `Note: Sold by the Pot Noble Harunaga for x7 Treasure Carp Scales`,
    img: `mask-fragment-right.png`
  },
  {
    id: 32,
    filterId: 2,
    title: `Mask Fragment: Dragon`,
    location: `Ashina Castle - Abandoned Dungeon Entrance`,
    description: `A fragment of an old dancer's mask.

    The original must have been broken into several pieces, and this fragment appears to be a decoration at the top of the mask.`,
    type: `Special Item`,
    procurement: `Purchased`,
    find: `The Mask Fragment: Dragon is sold by the Dungeon Memorial Mob Merchant for 5000 Sen. He is located by the entrance to the Abandoned Dungeon in Ashina Castle.`,
    note: `Note: Sold by the Dungeon Memorial Mob Merchant for 5000 Sen.`,
    img: `mask-fragment-dragon.png`
  },
  {
    id: 33,
    filterId: 2,
    title: `Mask Fragment: Left`,
    location: `Fountainhead Palace - Near Pot Noble`,
    description: `A fragment of an old dancer's mask.

    The original must have been broken into several pieces, and this fragment appears to be the left side of the mask.`,
    type: `Special Item`,
    procurement: `Purchased`,
    find: `The Mask Fragment: Left is sold by the Pot Noble Koremori for x12 Treasure Carp Scales, located on the edge of a cliff overlooking the Great Carp lake the x5 story pagoda.`,
    note: `Note: Sold by the Pot Noble Koremori for x12 Treasure Carp Scales`,
    img: `mask-fragment-left.webp`
  },
]