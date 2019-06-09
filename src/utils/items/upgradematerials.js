export const upgradematerialsGen = {
  btnGeneral: `Details`,
  btnList: `Find / Farm`,
  btnTable: `Upgrades`,
  thTitleOne: `Prosthetic`,
  thTitleTwo: `Upgrade`,
  thTitleThree: `Qty`,
}

export const upgradematerialsFilters = [
  { id: 1, val: `All`, active: true, },
  { id: 2, val: `Common`, active: false, },
  { id: 3, val: `Uncommon`, active: false, },
  { id: 4, val: `Rare`, active: false, },
  { id: 5, val: `Limited`, active: false, },
  { id: 6, val: `Unique`, active: false, },
]

export const upgradematerials = [
  {
    id: 1,
    filterId: 2,
    title: `Scrap Iron`,
    description: `Iron dregs mined in Ashina.

    Widely used for basic reinforcement, it can serve as a base material for Prosthetic Tool upgrades.
    
    Ashina is burdened with thick snow and infertile land, but the scrap iron dug from her soil is anything but crude.`,
    value: `Common`,
    valueSym: 'C',
    usage: [
      { id: 1, upgrade: `Spring-load Firecracker (Tier 2 Shinobi Firecracker)`, qty: 2, img: `spring-load-firecracker-thumbnail.webp` },
      { id: 2, upgrade: `Spinning Shuriken (Tier 2 Loaded Shuriken)`, qty: 3, img: `spinning-shuriken-thumbnail.webp` },
      { id: 3, upgrade: `Spring-load Flame Vent (Tier 2 Flame Vent)`, qty: 3, img: `spring-load-flame-vent-thumbnail.webp` },
      { id: 4, upgrade: `Loaded Spear Thrust Type (Tier 2 Loaded Spear)`, qty: 5, img: `loaded-spear-thrust-type-thumbnail.webp` },
      { id: 5, upgrade: `Spring-load Axe (Tier 2 Loaded Axe)`, qty: 5, img: `spring-load-axe-thumbnail.webp` },
      { id: 6, upgrade: `Double Divine Abduction (Tier 2 Divine Abduction)`, qty: 3, img: `double-divine-abduction-thumbnail.webp` },
      { id: 7, upgrade: `Loaded Spear Cleave Type (Tier 3 Loaded Spear)`, qty: 5, img: `loaded-spear-cleave-type-thumbnail.webp` },
      { id: 8, upgrade: `Loaded Umbrella - Magnet (Tier 3 Loaded Umbrella)`, qty: 4, img: `loaded-umbrella-magnet-thumbnail.webp` },
      { id: 9, upgrade: `Improved Sabimaru (Tier 3 Sabimaru)`, qty: 4, img: `improved-sabimaru-thumbnail.webp` },
      { id: 10, upgrade: `Spiral Spear (Tier 4 Loaded Spear)`, qty: 10, img: `spiral-spear-thumbnail.webp` },
      { id: 11, upgrade: `Phoenix's Lilac Umbrella (Tier 4 Loaded Umbrella)`, qty: 6, img: `phoenixs-lilac-umbrella-thumbnail.webp` },
      { id: 12, upgrade: `Sparking Axe (Tier 4 Loaded Axe)`, qty: 4, img: `sparking-axe-thumbnail.webp` },
      { id: 13, upgrade: `Golden Vortex (Tier 5 Divine Abduction)`, qty: 4, img: `golden-vortex-thumbnail.webp` },
      { id: 14, upgrade: `Leaping Flame (Tier 5 Loaded Spear)`, qty: 8, img: `leaping-flame-thumbnail.webp` },
      { id: 15, upgrade: `Sen Throw (Tier 5 Loaded Shuriken)`, qty: 4, img: `sen-throw-thumbnail.webp` },
      { id: 16, upgrade: `Piercing Sabimaru (Tier 5 Sabimaru)`, qty: 8, img: `piercing-sabimaru-thumbnail.webp` },
      { id: 17, upgrade: `Lazulite Sabimaru (Tier 6 Sabimaru)`, qty: 12, img: `lazulite-sabimaru-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `On a neigboring cliff ledge close to where the serpent's skin hangs, reached by grapple.` },
      { id: 2, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `Sold by Anayama the Peddler after telling him what the Ashina Samurai want.` },
      { id: 3, location: `Ashina Outskirts - Ashina Castle Gate`, find: `Explore the upper reaches beyond the gate, below a wall covered with Poison Lizards.` },
      { id: 4, location: `Ashina Outskirts - Ashina Castle Gate`, find: `By the wall of the corner building along the cliff edge beyond the castle gate.` },
      { id: 5, location: `Ashina Castle - Ashina Castle`, find: `Lying at the roots of a tree a grapple path out the moat will take you to.` },
      { id: 6, location: `Ashina Castle - Ashina Castle`, find: `Beneath the shade of a tree overlooking the moat and castle bridge.` },
      { id: 7, location: `Ashina Castle - Upper Tower Antechamber`, find: `By the x2 samurai strategising over a map in a room with a hole in the ceiling.` },
      { id: 8, location: `Ashina Castle - Ashina Reservoir`, find: `At the base of the castle wall behind a Senpou Temple Assasin beneath the bridge in the empty moat leading to the secret passage.` },
      { id: 9, location: `Ashina Castle - Ashina Reservoir`, find: `Beneath a tree next to the Moon-view Tower.` },
      { id: 10, location: `Ashina Castle - Ashina Reservoir`, find: `On a ledge above at the end of the reservoir tunnel.` },
      { id: 11, location: `Ashina Castle - Old Grave`, find: `x2 on a ledge by a wall overlooking the moat, near the entrance to the Great Serpent Shrine` },
      { id: 12, location: `Abandoned Dungeon - Underground Waterway`, find: `At the end of a wooden gangway leading into the underground lake.` },
      { id: 13, location: `Senpou Temple Mt. Kongo - Senpou Temple Mt. Kongo`, find: `On the otherside of the wall of the hanging scroll where the voice of the Divine Child warns you about the Temple upon your fist arrival.` },
      { id: 14, location: `Sunken Valley - Bodhisattva Valley`, find: `x3 can be found where monkeys come to gather between the two massive old tree stumps.` },
      { id: 15, location: `Ashina Depths - Hidden Forest`, find: `x5 at the bottom of the forest in the depths` },
      { id: 16, location: `Ashina Outskirts, Ashina Castle, Senpou Temple Mt. Kongo, Sunken Valley, Ashina Depths`, find: `Any Memorial Mob Merchant after receiving the Dragon's Tally Board` },
      { id: 17, location: `Ashina Outskirts - Dilapidated Temple`, find: `Sold by Fujioka the Info Broker after receiving the Dragon's Tally Board` },
    ],
    farm: [
      { id: 1, enemy: `Ashina Swordsmen`, location: `Ashina Outskirts, Ashina Castle`, chance: `Common` },
      { id: 2, enemy: `Ashina Spearmen`, location: `Ashina Outskirts, Ashina Castle`, chance: `Common` },
      { id: 3, enemy: `Ashina Taro Troopers`, location: `Ashina Outskirts, Ashina Reservoir, Ashina Castle`, chance: `Common` },
      { id: 4, enemy: `Bandits`, location: `Hirata Estate, Senpou Temple Mt. Kongo`, chance: `Common` },
      { id: 5, enemy: `Bandit Taro Troopers`, location: `Hirata Estate, Senpou Temple Mt. Kongo`, chance: `Common` },
      { id: 6, enemy: `Nightjar Shinobi (grey feathers)`, location: `Ashina Castle, Sunken Valley - Bodhisattva Valley`, chance: `Common` },
      { id: 7, enemy: `Senpou Temple Assassins`, location: `Ashina Castle Gate, Ashina Castle, Senpou Temple Mt. Kongo`, chance: `Common` },
      { id: 8, enemy: `Monk Taro Troopers`, location: `Senpou Temple Mt. Kongo`, chance: `Common` },
      { id: 9, enemy: `Glaive Monks`, location: `Senpou Temple Mt. Kongo`,  chance: `Common` },
      { id: 10, enemy: `Spear Mercenaries`, location: `Ashina Castle - Old Grave, Hirata Estate`, chance: `Common` },
      { id: 11, enemy: `Ashina Samurai`, location: `Ashina Castle - Upper Tower Antechamber, Ashina Castle - Upper Tower Ashina Dojo`, chance: `Common` }, 
      { id: 12, enemy: `Interior Ministry Shinobi`, location: `Ashina Castle, Hirata Estate`, chance: `Common` },
      { id: 13, enemy: `Dual-Wielding White Monkeys`, location: `Ashina Castle - Great Serpent Shrine, Sunken Valley - Bodhisattva Valley`, chance: `Common` },
    ],
    img: `scrap-iron.webp`
  },
  {
    id: 2,
    filterId: 3,
    title: `Scrap Magnetite`,
    description: `Magnetic ore mined in Ashina,

    Base material commonly used in Prothetic Tool upgrades of intermediate and higher rank.
    
    Forging with magnetite produces a hard steel: a precious commodity in Ashina. Bedrock offering up this ore is constantly mined out, making it a rare one at that.`,
    value: `Uncommon`,
    valueSym: 'U',
    usage: [
      { id: 1, upgrade: `Gouging Top (Tier 3 Loaded Shuriken)`, qty: 3, img: `gouging-top-thumbnail.webp` },
      { id: 2, upgrade: `Loaded Umbrella - Magnet (Tier 3 Loaded Umbrella)`, qty: 3, img: `loaded-umbrella-magnet-thumbnail.webp` },
      { id: 3, upgrade: `Improved Sabimaru (Tier 3 Sabimaru)`, qty: 4, img: `improved-sabimaru-thumbnail.webp` },
      { id: 4, upgrade: `Aged Feather Mist Raven (Tier 3 Mist Raven)`, qty: 2, img: `aged-feather-mist-raven-thumbnail.webp` },
      { id: 5, upgrade: `Mountain Echo (Tier 3 Finger Whistle)`, qty: 3, img: `mountain-echo-thumbnail.webp` },
      { id: 6, upgrade: `Okinaga's Flame Vent (Tier 4 Flame Vent)`, qty: 2, img: `okinagas-flame-vent-thumbnail.webp` },
      { id: 7, upgrade: `Spiral Spear (Tier 4 Loaded Spear)`, qty: 4, img: `spiral-spear-thumbnail.webp` },
      { id: 8, upgrade: `Phoenix's Lilac Umbrella (Tier 4 Loaded Umbrella)`, qty: 4, img: `phoenixs-lilac-umbrella-thumbnail.webp` },
      { id: 9, upgrade: `Sen Throw (Tier 5 Loaded Shuriken)`, qty: 4, img: `sen-throw-thumbnail.webp` },
      { id: 10, upgrade: `Suzaku's Lotus Umbrella (Tier 5 Loaded Umbrella)`, qty: 6, img: `suzakus-lotus-umbrella-thumbnail.webp` },
      { id: 11, upgrade: `Piercing Sabimaru (Tier 5 Sabimaru)`, qty: 2, img: `piercing-sabimaru-thumbnail.webp` },
      { id: 12, upgrade: `Malcontent (Tier 5 Finger Whistle)`, qty: 4, img: `malcontent-thumbnail.webp` },
      { id: 13, upgrade: `Lazulite Shuriken (Tier 6 Loaded Shuriken)`, qty: 6, img: `lazulite-shuriken-thumbnail.webp` },
      { id: 14, upgrade: `Lazulite Sabimaru (Tier 6 Sabimaru)`, qty: 8, img: `lazulite-sabimaru-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `x4 sold by Anayama the Peddler after sending him a suitable partner.` },
      { id: 2, location: `Ashina Castle - Upper Tower Ashina Dojo`, find: `Beneath a window in an adjoining room of the dojo leading out to the rooftops.` },
      { id: 3, location: `Ashina Castle - Abandoned Dungeon Entrance`, find: `Dropped by an amored bell-wielding Taro Trooper upon initial defeat in a courtyard close to the Abandoned Dungeon Entrance.` },
      { id: 4, location: `Ashina Castle - Ashina Reservoir`, find: `x2 dropped by the Lone Shadow Longswordsman upon defeat.` },
      { id: 5, location: `Abandoned Dungeon - Bottomless Hole`, find: `In the Shichimen Warrior pit.` },
      { id: 6, location: `Ashina Depths - Poison Pool`, find: `In the palm of a Buddha statue.` },
      { id: 7, location: `Ashina Depths - Poison Pool`, find: `Outside of a hut on an island in the Poison Pool.` },
      { id: 8, location: `Ashina Depths - Poison Pool`, find: `In a hut on an island in the Poison Pool.` },
      { id: 9, location: `Ashina Depths - Hidden Forest`, find: `On a ledge beneath the branches descending into the depths` },
      { id: 10, location: `Ashina Depths - Hidden Forest`, find: `Where Headless stands in the depths` },
      { id: 11, location: `Senpou Temple Mt. Kongo - Shugendo`, find: `x2 sold by the Shugendo Memorial Mob Merchant for 330 Sen` },
      { id: 12, location: `Senpou Temple Mt. Kongo - Temple Grounds`, find: `At the foot of a rock near the Scultpor's Idol by the exit of the Armored Warrior's bridge.` },
      { id: 13, location: `Senpou Temple Mt. Kongo - Senpou Temple Mt. Kongo`, find: `Outside the mouth of a cave leading to the Sunken Valley Cavern.` },
      { id: 14, location: `Sunken Valley - Under-Shrine Valley`, find: `Past the x3 burials, through the underwater cave, close to Headless among the subterranean burials.`, requirement: `Requirement: Mibu Breathing Technique Latent Skill.` },
      { id: 15, location: `Sunken Valley - Sunken Valley`, find: `Found near the edge of a cliff overlooking the Gun Fort across the chasm.` },
      { id: 16, location: `Sunken Valley - Gun Fort`, find: `On a ledge below the Gun Fort overlooking the bridge.` },
      { id: 17, location: `Sunken Valley - Gun Fort`, find: `Behind wooden palisades at the edge of an upper cliff outside the Gun Fort overlooking the bridge below` },
      { id: 18, location: `Sunken Valley - Gun Fort`, find: `By the wall in the Gun Fort shrine where Long-Arm Centipede Giraffe is encountered.` },
      { id: 19, location: `Sunken Valley - Bodhisattva Valley`, find: `On an island of monkeys in the Poison Pool at the bottom of the valley.` },
      { id: 20, location: `Sunken Valley - Bodhisattva Valley`, find: `On a ledge with other items in the Great Serpent cave.` },
      { id: 21, location: `Sunken Valley - Bodhisattva Valley`, find: `On a ledge at the end of the Great Serpent cave before approaching the shrine the Great Serpent guards.` },
      { id: 22, location: `Ashina Depths - Hidden Forest`, find: `Dropped by the Mist Noble upon defeat.` },
      { id: 23, location: `Ashina Depths - Mibu Village`, find: `Dropped by the Interior Ministry Shinobi upon initial defeat.` },
      { id: 24, location: `Ashina Castle (after the shinobi infiltration) - Ashina Castle`, find: `x2 found on a corpse of a Nightjar Shinobi on the roof of a tower.` },
      { id: 25, location: `Fountainhead Palace - Great Sakura`, find: `3x among the reeds of the shallow depths of the palace lake below the pot noble`, requirement: `Requirement: Mibu Breathing Technique Latent Skill.` },
    ],
    farm: [
      { id: 1, enemy: `Ashina Swordsmen`, location: `Ashina Outskirts, Ashina Castle`, chance: `Rare` },
      { id: 2, enemy: `Ashina Spearmen`, location: `Ashina Outskirts, Ashina Castle`, chance: `Rare` },
      { id: 3, enemy: `Ashina Taro Troopers`, location: `Ashina Outskirts, Ashina Castle`, chance: `Rare` },
      { id: 4, enemy: `Nightjar Shinobi (grey feathers)`, location: `Ashina Castle, Sunken Valley - Bodhisattva Valley`, chance: `Uncommon` },
      { id: 5, enemy: `Spear Mercenaries`, location: `Ashina Castle - Old Grave, Hirata Estate`, chance: `Uncommon` },
      { id: 6, enemy: `Bandits (late game)`, location: `Hirata Estate`, chance: `Uncommon` },
      { id: 7, enemy: `Bandit Taro Troopers`, location: `Hirata Estate`, chance: `Uncommon` },
      { id: 8, enemy: `Monk Taro Troopers`, location: `Hirata Estate`, chance: `Uncommon` },
      { id: 9, enemy: `Monk`, location: `Senpou Temple Mt. Kongo`, chance: `Rare` },
      { id: 10, enemy: `Senpou Temple Assassins`, location: `Ashina Castle Gate, Ashina Castle, Senpou Temple Mt. Kongo`, chance: `Uncommon` },
      { id: 11, enemy: `Glaive Monks`, location: `Senpou Temple Mt. Kongo`, chance: `Uncommon` },
      { id: 12, enemy: `Wall Demons`, location: `Sunken Valley - Bodhisattva Valley`, chance: `Common` },
      { id: 13, enemy: `Bell Taro Troopers`, location: `Ashina Depths`, chance: `Uncommon` },
      { id: 14, enemy: `Interior Ministry Shinobi`, location: `Ashina Castle, Hirata Estate`, chance: `Uncommon` },
      { id: 15, enemy: `Interior Ministry Dual-Wielding Swordsman`, location: `Ashina Castle`, chance: `Uncommon` },
      { id: 16, enemy: `Okami Warriors`, location: `Fountainhead Palace`, chance: `Common` },
      { id: 17, enemy: `Interior Ministry Dual-Wielding Swordsman Elites (late game)`, location: `Ashina Outskirts`, chance: `Common` },
    ],
    img: `scrap-magnetite.webp`
  },
  {
    id: 3,
    filterId: 4,
    title: `Adamantite Scrap`,
    description: `Adamantite ore with a dull, silvery shine.

    Base material commonly used in advanced Prosthetic Tool Upgrades.
    
    Adamantite can only be mined in the oldest parts of Ashina. Ancient rock and soil is said to attract the grace of gods, perhaps lending this metal its supple strength.`,
    value: `Rare`,
    valueSym: 'R',
    usage: [
      { id: 1, upgrade: `Sparking Axe (Tier 4 Loaded Axe)`, qty: 2, img: `sparking-axe-thumbnail.webp` },
      { id: 2, upgrade: `Golden Vortex (Tier 5 Divine Abduction)`, qty: 2, img: `golden-vortex-thumbnail.webp` },
      { id: 3, upgrade: `Sen Throw (Tier 5 Loaded Shuriken)`, qty: 2, img: `sen-throw-thumbnail.webp` },
      { id: 4, upgrade: `Purple Fume Spark (Tier 5 Shinobi Firecracker)`, qty: 2, img: `purple-fume-spark.webp` },
      { id: 5, upgrade: `Leaping Flame (Tier 5 Loaded Spear)`, qty: 2, img: `leaping-flame-thumbnail.webp` },
      { id: 6, upgrade: `Suzaku's Lotus Umbrella (Tier 5 Loaded Umbrella)`, qty: 2, img: `suzakus-lotus-umbrella-thumbnail.webp` },
      { id: 7, upgrade: `Piercing Sabimaru (Tier 5 Sabimaru)`, qty: 4, img: `piercing-sabimaru-thumbnail.webp` },
      { id: 8, upgrade: `Malcontent (Tier 5 Finger Whistle)`, qty: 2, img: `malcontent-thumbnail.webp` },
      { id: 9, upgrade: `Lazulite Axe (Tier 6 Loaded Axe)`, qty: 5, img: `lazulite-axe-thumbnail.webp` },
      { id: 10, upgrade: `Lazulite Shuriken (Tier 6 Loaded Shuriken)`, qty: 5, img: `lazulite-shuriken-thumbnail.webp` },
      { id: 11, upgrade: `Lazulite Sabimaru (Tier 6 Sabimaru)`, qty: 4, img: `lazulite-sabimaru-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Sunken Valley - Riven Cave`, find: `At the entrance of a tunnel leading out of the cave.` },
      { id: 2, location: `Sunken Valley - Riven Cave`, find: `At the bottom of one end of the lake outside of the Riven Cave`, requirement: `Requirement: Mibu Breathing Technique Latent Skill.` },
      { id: 3, location: `Ashina Depths - Hidden Forest`, find: `At the foot of a tree on a ledge in the lower regions below the temple.` },
      { id: 4, location: `Ashina Depths - Mibu Village`, find: `x2 sold by the Exiled Memorial Mob Merchant for 600 Sen` },
      { id: 5, location: `Ashina Depths - Mibu Village`, find: `On an upper ledge to the right of the rice paddy field at the end of Mibu Village.` },
      { id: 6, location: `Ashina Depths - Water Mill`, find: `Behind the shrine beyond the bridge past the Water Mill.` },
      { id: 7, location: `Ashina Depths - Mibu Village`, find: `On the roof of the hut at the end of the road on the far bank of the Mibu Village lake.` },
      { id: 8, location: `Ashina Castle (after the shinobi infiltration) - Ashina Castle`, find: `Found by a wall by the Castle entrance.` },
      { id: 9, location: `Ashina Castle (after the shinobi infiltration) - Ashina Castle`, find: `Found resting on the central shrine in the hall between the castle entrances.` },
      { id: 10, location: `Ashina Castle (after the shinobi infiltration) - Upper Tower Ashina Dojo`, find: `Found by a corner of a wall in the Ashina Dojo.` },
      { id: 11, location: `Hirata Estate (second memory) - Bamboo Thicket Slope`, find: `x2 dropped by Lone Shadow Masanaga the Spear-Bearer upon initial defeat.` },
      { id: 12, location: `Hirata Estate (second memory) - Main Hall`, find: `Found on the roof of a burning building by the Hirata Estate pond where Interior Ministry shinobi patrol.` },
      { id: 13, location: `Hirata Estate (second memory) - Main Hall`, find: `Found under a tree in the courtyard close to the the Main Hall entrance.` },
      { id: 14, location: `Fountainhead Palace - Fountainhead Palace`, find: `Found in a half sunken building off the banks where the broken bridge stands and an Okami Warrior dances.` },
      { id: 15, location: `Fountainhead Palace - Mibu Manor`, find: `In a building surrounded by beasts outside of the entrance to Mibu Manor where a single Mist Noble plays.` },
      { id: 16, location: `Fountainhead Palace - Mibu Manor`, find: `Found at the back of a room looking out on the Mibu Manor courtyard.` },
      { id: 17, location: `Fountainhead Palace - Mibu Manor`, find: `Found around the corner of the Mibu Manor where the Sakura Bull emerges from.` },
      { id: 18, location: `Ashina Castle (during Interior Ministry invasion) - Upper Tower Antechamber`, find: `x2 found against the far wall in the room where Ashina Samurai and Interior Ministry Shinobi battle.` },
      { id: 19, location: `Ashina Outskirts (during Interior Ministry invasion) - Underbridge Valley`, find: `Found at the shrine on the edge of a cliff guarded by an Interior Ministry Dual-Wielding Swordsman Elite` },
      { id: 20, location: `Ashina Outskirts (during Interior Ministry invasion) - Outskirts Wall Stairway`, find: `Found by an archway along the Outskirts Wall Gate Path leading to the Stairway` },
      { id: 21, location: `Ashina Outskirts (during Interior Ministry invasion) - Outskirts Wall Stairway`, find: `Found at the top of a sentry tower manned by an Interior Ministry Gunman.` },
    ],
    farm: [
      { id: 1, enemy: `Glaive Monks (late game)`, location: `Senpou Temple Mt. Kongo`, chance: `Rare` },
      { id: 2, enemy: `Okami Warriors`, location: `Fountainhead Palace`, chance: `Rare` },
      { id: 3, enemy: `Spear Mercenaries (late game)`, location: `Ashina Castle, Hirata Estate`, chance: `Rare` },
      { id: 4, enemy: `Interior Ministry Shinobi (late game)`, location: `Hirata Estate`, chance: `Rare` },
      { id: 5, enemy: `Interior Ministry Dual-Wielding Swordsmen`, location: `Ashina Outskirts, Ashina Castle`, chance: `Rare` },
      { id: 6, enemy: `Interior Ministry Dual-Wielding Swordsman Elites (late game)`, location: `Ashina Outskirts`, chance: `Rare` },
    ],
    img: `adamantite-scrap.webp`
  },
  {
    id: 4,
    filterId: 2,
    title: `Black Gunpowder`,
    description: `Black grains forming the base of gunpowder.

    Material used in alchemical Prosthetic Tool upgrades, including those of an explosive and occultic nature.
    
    Even the most mundane form of gunpowder has a wide variety of applications.`,
    value: `Common`,
    valueSym: 'C',
    usage: [
      { id: 1, upgrade: `Spring-load Firecracker (Tier 2 Shinobi Firecracker)`, qty: 1, img: `spring-load-firecracker-thumbnail.webp` },
      { id: 2, upgrade: `Spring-load Flame Vent (Tier 2 Flame Vent)`, qty: 3, img: `spring-load-flame-vent-thumbnail.webp` },
      { id: 3, upgrade: `Double Divine Abduction (Tier 2 Divine Abduction)`, qty: 2, img: `double-divine-abduction-thumbnail.webp` },
      { id: 4, upgrade: `Long Spark (Tier 3 Shinobi Firecracker)`, qty: 3, img: `long-spark-thumbnail.webp` },
      { id: 5, upgrade: `Loaded Spear Cleave Type (Tier 3 Loaded Spear)`, qty: 4, img: `loaded-spear-cleave-type-thumbnail.webp` },
      { id: 6, upgrade: `Aged Feather Mist Raven (Tier 3 Mist Raven)`, qty: 2, img: `aged-feather-mist-raven-thumbnail.webp` },
      { id: 7, upgrade: `Sparking Axe (Tier 4 Loaded Axe)`, qty: 4, img: `sparking-axe-thumbnail.webp` },
      { id: 8, upgrade: `Okinaga's Flame Vent (Tier 4 Flame Vent)`, qty: 6, img: `okinagas-flame-vent-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `Sold by Anayama the Peddler after telling him what the Ashina Samurai want.` },
      { id: 2, location: `Ashina Castle - Abandoned Dungeon Entrance`, find: `In a courtyard close to the Abandoned Dungeon Entrance with an amored bell-wielding Taro Trooper.` },
      { id: 3, location: `Ashina Castle - Old Grave`, find: `By the broken bridge that once connected Ashina Castle to the Underbridge Valley.` },
      { id: 4, location: `Abandoned Dungeon - Underground Waterway`, find: `At the back of the cave on the far bank of the underground lake.` },
      { id: 5, location: `Senpou Temple Mt. Kongo - Bell Demon's Temple`, find: `At the base of an incense burner in the temple leading to the Demon Bell.` },
      { id: 6, location: `Senpou Temple Mt. Kongo - Temple Grounds`, find: `x2 in the temple of the centipede men.` },
      { id: 7, location: `Senpou Temple Mt. Kongo - Main Hall`, find: `Close to an infested monk behind pots at the end of a hall.` },
      { id: 8, location: `Abandoned Dungeon - Bottomless Hole`, find: `In the Shichimen Warrior pit.` },
      { id: 9, location: `Sunken Valley - Gun Fort`, find: `Resting by the path leading into the Gun Fort` },
      { id: 10, location: `Sunken Valley - Gun Fort`, find: `x2 at the edge of the cliff outside the Gun Fort overlooking the bridge below.` },
      { id: 11, location: `Ashina Depths - Poison Pool`, find: `x2 on an island in the Poison Pool.` },
      { id: 12, location: `Ashina Depths - Mibu Village`, find: `In the Mibu Village graveyard.` },
      { id: 13, location: `Ashina Castle (after the shinobi infiltration) - Ashina Castle`, find: `x2 found against the wall in the corner of a small opening with a single tree.` },
      { id: 14, location: `Ashina Outskirts, Ashina Castle, Senpou Temple Mt. Kongo, Sunken Valley, Ashina Depths`, find: `Any Memorial Mob Merchant after receiving the Dragon's Tally Board` },
      { id: 15, location: `Ashina Outskirts - Dilapidated Temple`, find: `Sold by Fujioka the Info Broker after receiving the Dragon's Tally Board` },
    ],
    farm: [
      { id: 1, enemy: `Bandit Bowmen`, location: `Hirata Estate`, chance: `Common` },
      { id: 2, enemy: `Sunken Valley Cannoneers`, location: `Ashina Outskirts, Poison Pool, Ashina Castle`, chance: `Common` },
      { id: 3, enemy: `Ashina Riflemen`, location: `Ashina Outskirts, Ashina Castle`, chance: `Common` },
      { id: 4, enemy: `Senpou Temple Assassins`, location: `Ashina Castle Gate, Ashina Castle, Senpou Temple Mt. Kongo`, chance: `Common` },
      { id: 5, enemy: `Pyro Bomber Monks`, location: `Senpou Temple Mt. Kongo`, chance: `Common` },
      { id: 6, enemy: `Sunken Valley Rifleman`, location: `Sunken Valley`, chance: `Common` },
      { id: 7, enemy: `Sunken Valley Scatter-Shots`, location: `Poison Pool, Gun Fort, Sunken Valley`, chance: `Common` },
      { id: 8, enemy: `Centipede Men`, location: `Senpou Temple, Sunken Valley`, chance: `Common` },
      { id: 9, enemy: `Nightjar Shinobi (black feathers)`, location: `Ashina Castle, Sunken Valley - Bodhisattva Valley`, chance: `Common` },
      { id: 10, enemy: `Interior Ministry Shinobi`, location: `Hirata Estate`, chance: `Common` },
      { id: 11, enemy: `Senpou Interior Ministry Assassins`, location: `Ashina Castle, Ashina Outskirts`, chance: `Common` },
    ],
    img: `black-gunpowder.png`
  },
  {
    id: 5,
    filterId: 3,
    title: `Yellow Gunpowder`,
    description: `Amber-colored grains forming the base for powerful gunpowder. A precious commodity only found in the Sunken Valley.

    Used for explosive Prosthetic Tool upgrade of intermediate and higher rank.
    
    The yield from yellow powder is greater than that of black, lending the valley stronghold defenses their fiery vigor.`,
    value: `Uncommon`,
    valueSym: 'U',
    usage: [
      { id: 1, upgrade: `Long Spark (Tier 3 Shinobi Firecracker)`, qty: 2, img: `long-spark-thumbnail.webp` },
      { id: 2, upgrade: `Sparking Axe (Tier 4 Loaded Axe)`, qty: 2, img: `sparking-axe-thumbnail.webp` },
      { id: 3, upgrade: `Okinaga's Flame Vent (Tier 4 Flame Vent)`, qty: 4, img: `okinagas-flame-vent-thumbnail.webp` },
      { id: 4, upgrade: `Leaping Flame (Tier 5 Loaded Spear)`, qty: 4, img: `leaping-flame-thumbnail.webp` },
      { id: 5, upgrade: `Suzaku's Lotus Umbrella (Tier 5 Loaded Umbrella)`, qty: 6, img: `suzakus-lotus-umbrella-thumbnail.webp` },
      { id: 6, upgrade: `Great Feather Mist Raven (Tier 5 Mist Raven)`, qty: 4, img: `great-feather-mist_raven-thumbnail.webp` },
      { id: 7, upgrade: `Lazulite Sacred Flame (Tier 6 Flame Vent)`, qty: 7, img: `lazulite-sacred-flame-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `x3 Sold by Anayama the Peddler after sending him a suitable partner.` },
      { id: 2, location: `Senpou Temple Mt. Kongo - Temple Grounds`, find: `x2 dropped by the Long-Arm Centipede Sen-Un upon defeat.` },
      { id: 3, location: `Sunken Valley - Under-Shrine Valley`, find: `Next to a lean-to at the top of a cliff off the beaten path.` },
      { id: 4, location: `Sunken Valley - Gun Fort`, find: `x3 dropped by one of the Sunken Valley Scatter-Shooters within the Gun Fort upon initial defeat.` },
      { id: 5, location: `Sunken Valley - Gun Fort`, find: `Within the Gun Fort found resting beneath its fortified wooden walls.` },
      { id: 6, location: `Sunken Valley - Gun Fort`, find: `x2 dropped by the Long-Arm Centipede Giraffe upon defeat.` },
      { id: 7, location: `Sunken Valley - Gun Fort`, find: `Beneath the floorboards of the Gun Fort shrine where Long-Arm Centipede Giraffe is encountered.` },
      { id: 8, location: `Sunken Valley - Bodhisattva Valley`, find: `In Poison Pool at the bottom of the valley.` },
      { id: 9, location: `Sunken Valley - Bodhisattva Valley`, find: `Dropped by the Dual-Wielding White Monkeys upon initial defeat.` },
      { id: 10, location: `Sunken Valley - Bodhisattva Valley`, find: `x2 sold by the Toxic Memorial Mob Merchant for 720 Sen` },
      { id: 11, location: `Ashina Depths - Poison Pool`, find: `Found in the Poison Pool behind a rock near a bank.` },
      { id: 12, location: `Ashina Depths - Poison Pool`, find: `On a cliff by the leaning buddha statue that can be reached by a hidden path from behind.` },
      { id: 13, location: `Ashina Depths - Hidden Forest`, find: `In a corner against a ledge wall in the lower regions below the temple.` },
      { id: 14, location: `Ashina Depths - Mibu Village`, find: `In a house leading to the Water Mill.` },
      { id: 15, location: `Fountainhead Palace - Mibu Manor`, find: `x4 can be found at the end of a flooded passageway within the Manor.` },
    ],
    farm: [
      { id: 1, enemy: `Bandit Bowmen (late game)`, location: `Hirata Estate`, chance: `Uncommon` },
      { id: 2, enemy: `Pyro Bomber Monks`, location: `Senpou Temple Mt. Kongo`, chance: `Rare` },
      { id: 3, enemy: `Sunken Valley Cannoneers`, location: `Ashina Outskirts, Poison Pool, Ashina Castle`, chance: `Uncommon` },
      { id: 4, enemy: `Sunken Valley Riflemen`, location: `Poison Pool, Gun Fort, Sunken Valley`, chance: `Rare` },
      { id: 5, enemy: `Ashina Riflemen (late game)`, location: `Ashina Outskirts, Ashina Castle`, chance: `Rare` },
      { id: 6, enemy: `Centipede Men`, location: `Senpou Temple, Sunken Valley`, chance: `Rare` },
      { id: 7, enemy: `Sunken Valley Scatter-Shots`, location: `Poison Pool, Gun Fort, Sunken Valley`, chance: `Uncommon` },
      { id: 8, enemy: `Dual-Wielding White Monkeys`, location: `Sunken Valley - Sunken Valley Passage`, chance: `Uncommon` },
      { id: 9, enemy: `Interior Ministry Gunman`, location: `Ashina Outskirts, Ashina Castle`, chance: `Uncommon` },
    ],
    img: `yellow-gunpowder.webp`
  },
  {
    id: 6,
    filterId: 4,
    title: `Fulminated Mercury`,
    description: `Highly precious grains forming the base for a devastating form of gunpowder.

    Used in explosive Prosthetic Tool upgrades of advanced rank.
    
    Created in secret by the Interior Ministry using knowledge from across southern seas. The central forces' military might owes much to this tiny tweak of chemistry.`,
    value: `Rare`,
    valueSym: 'R',
    usage: [
      { id: 1, upgrade: `Leaping Flame (Tier 5 Loaded Spear)`, qty: 1, img: `leaping-flame-thumbnail.webp` },
      { id: 2, upgrade: `Suzaku's Lotus Umbrella (Tier 5 Loaded Umbrella)`, qty: 2, img: `suzakus-lotus-umbrella-thumbnail.webp` },
      { id: 3, upgrade: `Purple Fume Spark (Tier 5 Shinobi Firecracker)`, qty: 2, img: `purple-fume-spark.webp` },
      { id: 4, upgrade: `Great Feather Mist Raven (Tier 5 Mist Raven)`, qty: 3, img: `great-feather-mist_raven-thumbnail.webp` },
      { id: 5, upgrade: `Lazulite Axe (Tier 6 Loaded Axe)`, qty: 3, img: `lazulite-axe-thumbnail.webp` },
      { id: 6, upgrade: `Lazulite Sacred Flame (Tier 6 Flame Vent)`, qty: 4, img: `lazulite-sacred-flame-thumbnail.webp` },
      { id: 7, upgrade: `Lazulite Sabimaru (Tier 6 Sabimaru)`, qty: 4, img: `lazulite-sabimaru-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Hirata Estate (second memory) - Main Hall`, find: `Found beneath a tower among the burnt rubble leading towards the Hirata Estate - Main Hall.` },
      { id: 2, location: `Hirata Estate (second memory) - Hirata Audience Chamber`, find: `Found by a wall in the Audience Chamber.` },
      { id: 3, location: `Sunken Valley - Bodhisattva Valley`, find: `Behind a rock at the end of the Poison Pool canyon by monkey island.` },
      { id: 4, location: `Fountainhead Palace - Fountainhead Palace`, find: `Found in a half sunken building off the banks of the broken bridge where an Okami Warrior dnaces.` },
      { id: 5, location: `Ashina Castle (during Interior Ministry invasion) - Ashina Castle`, find: `Against a wall off to the side of the stairway leading up to the Ashina Castle entrance` },
      { id: 6, location: `Ashina Castle (during Interior Ministry invasion) - Ashina Reservoir`, find: `Found in front of the burning entrance to the Ashina Reservoir.` },
      { id: 7, location: `Ashina Outskirts (during Interior Ministry invasion) - Outskirts Wall Stairway`, find: `Found behind stacked containers at the top of the stairway.` },
      { id: 8, location: `Ashina Outskirts (during Interior Ministry invasion) - Outskirts Wall Gate Path`, find: `Next to stacked containers behind an Interior Ministry cannon.` },
    ],
    farm: [
      { id: 1, enemy: `Sunken Valley Cannoneers`, location: `Ashina Outskirts, Poison Pool, Ashina Castle`, chance: `Rare` },
      { id: 2, enemy: `Sunken Valley Scatter-Shots`, location: `Poison Pool, Gun Fort, Sunken Valley`, chance: `Rare` },
      { id: 3, enemy: `Interior Ministry Gunman`, location: `Ashina Outskirts, Ashina Castle`, chance: `Uncommon` },
      { id: 4, enemy: `Interior Ministry Poison Shinobi (late game)`, location: `Hirata Estate`, chance: `Rare` },
    ],
    img: `fulminated-mercury.webp`
  },
  {
    id: 7,
    filterId: 3,
    title: `Lump of Fat Wax`,
    description: `These lumps of fatty wax form inside the body in rare circumstances.

    Can be used for intermediate and higher Occultic upgrades for Prosthetic Tools.
    
    Considered omens of disease, they are known to grow larger as the illness worsens. It's best not to to let one grow any larger after it turns brown.`,
    value: `Uncommon`,
    valueSym: 'U',
    usage: [
      { id: 1, upgrade: `Aged Feather Mist Raven (Tier 3 Mist Raven)`, qty: 1, img: `aged-feather-mist-raven-thumbnail.webp` },
      { id: 2, upgrade: `Mountain Echo (Tier 3 Finger Whistle)`, qty: 2, img: `mountain-echo-thumbnail.webp` },
      { id: 3, upgrade: `Phoenix's Lilac Umbrella (Tier 4 Loaded Umbrella)`, qty: 4, img: `phoenixs-lilac-umbrella-thumbnail.webp` },
      { id: 4, upgrade: `Golden Vortex (Tier 5 Divine Abduction)`, qty: 4, img: `golden-vortex-thumbnail.webp` },
      { id: 5, upgrade: `Purple Fume Spark (Tier 5 Shinobi Firecracker)`, qty: 5, img: `purple-fume-spark.webp` },
      { id: 6, upgrade: `Great Feather Mist Raven (Tier 5 Mist Raven)`, qty: 4, img: `great-feather-mist_raven-thumbnail.webp` },
      { id: 7, upgrade: `Malcontent (Tier 5 Finger Whistle)`, qty: 4, img: `malcontent-thumbnail.webp` },
      { id: 8, upgrade: `Lazulite Shuriken (Tier 6 Loaded Shuriken)`, qty: 6, img: `lazulite-shuriken-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `x3 Sold by Anayama the Peddler after sending him a suitable partner.` },
      { id: 2, location: `Ashina Depths - Abandoned Dungeon`, find: `x3 are rewarded by Doujun for delivering a suitable patient.` },
      { id: 3, location: `Senpou Temple Mt. Kongo - Senpou Temple Mt. Kongo`, find: `Behind the altar at the back of a shrine where an infested monk sits.` },
      { id: 4, location: `Senpou Temple Mt. Kongo - Temple Grounds`, find: `In a temple of meditating monks, behind an infested monk.` },
      { id: 5, location: `Senpou Temple Mt. Kongo - Main Hall`, find: `Behind the Buddha statue in the Main Hall.` },
      { id: 6, location: `Ashina Depths - Hidden Forest`, find: `Where Headless stands in the depths` },
      { id: 7, location: `Ashina Depths - Hidden Forest`, find: `Along a pathway leading to the roof of the shrine.` },
      { id: 8, location: `Ashina Depths - Mibu Village`, find: `Along the walls outside of a hut next to a woodpile.` },
      { id: 9, location: `Ashina Depths - Water Mill`, find: `On a ledge by the waterfall beyond the Water Mill` },
    ],
    farm: [
      { id: 1, enemy: `Ashina Peasant Lookouts`, location: `Ashina Castle, Ashina Outskirts`, chance: `Rare` },
      { id: 2, enemy: `Monks`, location: `Senpou Temple Mt. Kongo`, chance: `Uncommon` },
      { id: 3, enemy: `Infested Monks`, location: `Senpou Temple Mt. Kongo`, chance: `Uncommon` },
      { id: 4, enemy: `Sunken Valley Old Maid`, location: `Sunken Valley - Gun Fort`, chance: `Uncommon` },
      { id: 5, enemy: `Palace Nobles (Blue Garb)`, location: `Fountainhead Palace`, chance: `Uncommon` },
      { id: 6, enemy: `Interior Ministry Poison Shinobi`, location: `Ashina Depths - Mibu Village`, chance: `Uncommon` },
      { id: 7, enemy: `Mibu Village People`, location: `Ashina Depths - Mibu Village`, chance: `Uncommon` },
    ],
    img: `lump-of-fat-wax.webp`
  },
  {
    id: 8,
    filterId: 4,
    title: `Lump of Grave Wax`,
    description: `A lump of fatty wax that has formed inside the body and turned pitch black.

    Used for occultic Prosthetic Tool upgrades of an advanced nature.
    
    A long-suffered illness will see the growth turn large and blacker still. It is customary to run water over the site of an extracted growth.`,
    value: `Rare`,
    valueSym: 'R',
    usage: [
      { id: 1, upgrade: `Golden Vortex (Tier 5 Divine Abduction)`, qty: 2, img: `golden-vortex-thumbnail.webp` },
      { id: 2, upgrade: `Great Feather Mist Raven (Tier 5 Mist Raven)`, qty: 3, img: `great-feather-mist_raven-thumbnail.webp` },
      { id: 3, upgrade: `Malcontent (Tier 5 Finger Whistle)`, qty: 2, img: `malcontent-thumbnail.webp` },
      { id: 4, upgrade: `Lazulite Axe (Tier 6 Loaded Axe)`, qty: 3, img: `lazulite-axe-thumbnail.webp` },
      { id: 5, upgrade: `Lazulite Shuriken (Tier 6 Loaded Shuriken)`, qty: 3, img: `lazulite-shuriken-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Depths - Hidden Forest`, find: `Where Headless stands in the depths` },
      { id: 2, location: `Ashina Outskirts - Under-Shrine Valley`, find: `Past the x3 burials, through the underwater cave, close to Headless among the subterranean burials.`, requirement: `Requirement: Mibu Breathing Technique Latent Skill.` },
      { id: 3, location: `Ashina Depths - Hidden Forest`, find: `Dropped by the Mist Noble upon defeat.` },
      { id: 4, location: `Ashina Castle - Abandoned Dungeon Entrance`, find: `x2 are rewarded by Doujun when given the red carp eyes.` },
      { id: 5, location: `Fountainhead Palace - Fountainhead Palace`, find: `On a broken bridge where an Okami Warrior dances.` },
      { id: 6, location: `Fountainhead Palace - Mibu Manor`, find: `Found in an altar at the back of a room below a hole in the ceiling.` },
      { id: 7, location: `Fountainhead Palace - Great Sakura`, find: `Below the sunken building an old woman stands atop in the palace lake.` },
      { id: 8, location: `Fountainhead Palace - Great Sakura`, find: `On the tip of a roof of a sunken building that pokes out of the palace lake.` },
      { id: 9, location: `Ashina Outskirts (during Interior Ministry invasion) - Outskirts Wall Gate Path`, find: `Found beneath a sentry tower where an Ogre roams below.` },
      { id: 10, location: `Ashina Outskirts (during Interior Ministry invasion) - Ashina Castle Gate`, find: `Resting against a wall along the stairway leading up to the temple where the Battlefield Memorial Mob is found.` },
    ],
    farm: [
      { id: 1, enemy: `Monks (late game)`, location: `Senpou Temple Mt. Kongo`, chance: `Rare` },
      { id: 2, enemy: `Palace Nobles (Blue Garb)`, location: `Fountainhead Palace`, chance: `Rare` },
      { id: 3, enemy: `Bell Taro Troopers (late game)`, location: `Ashina Depths`, chance: `Rare` },
    ],
    img: `lump-of-grave-wax.webp`
  },
  {
    id: 9,
    filterId: 5,
    title: `Lapis Lazuli`,
    description: `Precious azure lazulite, used for the highest level of Prosthetic Tool upgrades.

    Fountainhead lazulite is a symbol of eternity, and anything forged with it will never break nor rust thanks to the blessing of the Divine Dragon. Tools forged with lazulite transcend human intellect, and are dubbed as treasures of the Divine Dragon.`,
    value: 'Limited',
    valueSym: 'L',
    usage: [
      { id: 1, upgrade: `Lazulite Sabimaru (Tier 6 Sabimaru)`, qty: 2, img: `lazulite-sabimaru-thumbnail.webp` },
      { id: 2, upgrade: `Lazulite Axe (Tier 6 Loaded Axe)`, qty: 3, img: `lazulite-axe-thumbnail.webp` },
      { id: 3, upgrade: `Lazulite Sacred Flame (Tier 6 Flame Vent)`, qty: 3, img: `lazulite-sacred-flame-thumbnail.webp` },
      { id: 4, upgrade: `Lazulite Shuriken (Tier 6 Loaded Shuriken)`, qty: 2, img: `lazulite-shuriken-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Fountainhead Palace - Near Pot Noble`, find: `x2 sold by the Fountainhead Palace Pot Noble Koremori for x6 Treasure Carp Scale each.` },
      { id: 2, location: `Fountainhead Palace - Near Pot Noble or Hirata Estate - Dragonspring Hirata Estate`, find: `Given by Pot Noble Harunaga or Pot Noble Koremori after feeding their 'Truly Precious Bait' to the Great Colored Carp.` },
      { id: 3, location: `Fountainhead Palace - Great Sakura`, find: `Dropped by the Shichimen Warrior upon defeat, found at the base of a waterfall behind the Great Sakura.` },
      { id: 4, location: `Ashina Outskirts (during Interior Ministry invasion) - Flames of Hatred`, find: `x2 dropped by the Demon of Hatred upon defeat.` },
    ],
    img: `lapis-lazuli.webp`
  },
  {
    id: 10,
    filterId: 6,
    title: `Phantom Kunai`,
    description: `A kunai used by Lady Butterfly that can be used to upgrade the Loaded Shuriken.

    A ringing sound is heard when the kunai is thrown, and phantom butterflies appear in the kunai's trail.
    
    Since childhood, Lady Butterfly had accumulated much experience in Usui's forest, far from civilization along Tozan Trail. His forest is filled with mist and mystifications, making it ideal for training in illusion techniques.`,
    value: 'Unique',
    valueSym: 'Un',
    usage: [
      { id: 1, upgrade: `Phantom Kunai (Tier 4 Loaded Shuriken)`, qty: 1, img: `phantom-kunai-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Outskirts - Outskirts Wall Stairway`, find: `Sold by Anayama the Peddler for 3,000 Sen` },
    ],
    img: `phantom-kunai.webp`
  },
  {
    id: 11,
    filterId: 6,
    title: `Pine Resin Ember`,
    description: `A piece of resin that contains a continuously smoldering flame. Can be used to upgrade the Flame Vent.

    The resin was found in a black pine within the forests of Mibu Village. The ever-smoldering flames acted as a landmark to find one's way to the village. In time the villagers came to loathe the flames, and the black pines were lost. Those who defended the flame were equally loathed.`,
    value: 'Unique',
    valueSym: 'Un',
    usage: [
      { id: 1, upgrade: `Okinaga's Flame Vent (Tier 4 Flame Vent)`, qty: 1, img: `okinagas-flame-vent-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Depths - Mibu Village`, find: `On the roof of the hut at the end of the road on the far bank of the Mibu Village lake.` },
    ],
    img: `pine-resin-ember.webp`
  },
  {
    id: 12,
    filterId: 6,
    title: `Malcontent's Ring`,
    description: `An old ring well-suited for slender fingers. "Kingfisher" is engraved on the underside. Can be used to upgrade the Finger Whistle Prosthetic Tool.

    Wearing this ring as you blow the finger whistle will create a somber tune.  The weeping voice is full of solitude and beauty. Possible somber enough to temporarily quell a voice of rage.`,
    value: 'Unique',
    valueSym: 'Un',
    usage: [
      { id: 1, upgrade: `Malcontent (Tier 5 Finger Whistle)`, qty: 1, img: `malcontent-thumbnail.webp` },
    ],
    obtain: [
      { id: 1, location: `Ashina Depths - Guardian Ape's Burrow`, find: `Dropped by the Shichimen Warrior upon defeat.`, requirement: `Defeat the Headless Ape here first to enable this encounter` },
    ],
    img: `malcontent-ring.webp`
  },
]