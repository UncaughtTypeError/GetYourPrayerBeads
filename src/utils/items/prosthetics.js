export const prostheticsGen = {
  btnGeneral: `Details`,
  btnTable: `Upgrades`,
  countname: `Upgrades`,
  thTitleOne: `Prosthetic`,
  thTitleTwo: `Upgrade`,
  thTitleThree: `Tier`,
}

export const prosthetics = [
  {
    id: 1,
    title: `Loaded Shuriken`,
    location: `Ashina Outskirts - Outskirts Wall Gate Path`,
    description: `A Shuriken Wheel Prosthetic Tool, fitted to the Shinobi Prosthetic. Costs Spirit Emblems to use.

    Pull a shuriken loaded into the wheel and launch it at a target in a single, flowing motion.
    
    The swiftly thrown shuriken damages enemy Vitality and Posture, particularly against those with a tendency to take to the air.`,
    cost: 1,
    count: 5,
    requirement: `Upgrade Part: Shuriken Wheel`,
    img: `loaded-shuriken.png`,
    upgrades: [
      { id: 1, upgrade: `Spinning Shuriken`, tier: 2, img: `spinning-shuriken-thumbnail.webp` },
      { id: 2, upgrade: `Gouging Top`, tier: 3, img: `gouging-top-thumbnail.webp` },
      { id: 3, upgrade: `Phantom Kunai`, tier: 4, img: `phantom-kunai-thumbnail.webp` },
      { id: 4, upgrade: `Sen Throw`, tier: 5, img: `sen-throw-thumbnail.webp` },
      { id: 5, upgrade: `Lazulite Shuriken`, tier: 6, img: `lazulite-shuriken-thumbnail.webp` },
    ],
  },
  {
    id: 2,
    title: `Shinobi Firecracker`,
    location: `Ashina Outskirts - Outskirts Wall Gate Path`,
    description: `A Prosthetic Tool fitted with Robert's firecrackers. Costs Spirit Emblems.

    Unleashes an explosive flash that briefly blinds foes and inflicts Posture damage on beast-type enemies. Has a wide, frontward field of effect that can impact multiple enemies at once.
    
    Suitable for temporarily immobilizing enemies and particularly good for scaring beasts`,
    cost: 2,
    count: 3,
    requirement: `Upgrade Part: Robert's Firecrackers`,
    utility: `Utility: Feared by beasts`,
    img: `shinobi-firecracker.webp`,
    upgrades: [
      { id: 1, upgrade: `Spring-load Firecracker`, tier: 2, img: `spring-load-firecracker-thumbnail.webp` },
      { id: 2, upgrade: `Long Spark`, tier: 3, img: `long-spark-thumbnail.webp` },
      { id: 3, upgrade: `Purple Fume Spark`, tier: 5, img: `purple-fume-spark.webp` },
    ],
  },
  {
    id: 3,
    title: `Flame Vent`,
    location: `Hirata Estate - Estate Path`,
    description: `A Prosthetic Tool made from a loaded Flame Barrel. Costs Spirit Emblems to use.

    Deals fire damage to enemies via a short-range blast of fire while also inflicting Burn status.
    
    It is difficult to control the rage of those with "Red Eyes" through the power of man alone. They do, however, fear the flame above all else. This tool has the power to make them tremble.`,
    cost: 3,
    count: 3,
    requirement: `Upgrade Part: Flame Barrel`,
    effect: `Status Effect: Burn abnormality`,
    utility: `Utility: Feared by the Red-eyes`,
    img: `flame-vent.png`,
    upgrades: [
      { id: 1, upgrade: `Spring-load Flame Vent`, tier: 2, img: `spring-load-flame-vent-thumbnail.webp` },
      { id: 2, upgrade: `Okinaga's Flame Vent`, tier: 4, img: `okinagas-flame-vent-thumbnail.webp` },
      { id: 3, upgrade: `Lazulite Sacred Flame`, tier: 6, img: `lazulite-sacred-flame-thumbnail.webp` },
    ],
  },
  {
    id: 4,
    title: `Loaded Axe`,
    location: `Hirata Estate - Estate Path`,
    description: `A Prosthetic Tool loaded with a heavy Shinobi Axe. Costs Spirit Emblems to use.

    The strength of the Loaded Axe lies in its heft.
    
    One strike can easily turn a wooden shield into splinters or shred an enemy's posture.`,
    cost: 2,
    count: 3,
    requirement: `Upgrade Part: Shinobi Axe of the Monkey`,
    utility: `Utility: Breaks shields`,
    img: `loaded-axe.webp`,
    upgrades: [
      { id: 1, upgrade: `Spring-load Axe`, tier: 2, img: `spring-load-axe-thumbnail.webp` },
      { id: 2, upgrade: `Sparking Axe`, tier: 4, img: `sparking-axe-thumbnail.webp` },
      { id: 3, upgrade: `Lazulite Axe`, tier: 6, img: `lazulite-axe-thumbnail.webp` },
    ],
  },
  {
    id: 5,
    title: `Mist Raven`,
    location: `Hirata Estate - Bamboo Thicket Slope`,
    description: `A Prosthetic Tool loaded with the feather of a Mist Raven. Costs Spirit Emblems to use.
    When attacked in the assumed stance, disappear like the mist and move away.
    Once you think you've caught one, all that will remain is feathers.
    That is the mark of a true Mist Raven.`,
    cost: 2,
    count: 2,
    requirement: `Upgrade Part: Mist Raven's Feathers`,
    img: `mist-raven.webp`,
    upgrades: [
      { id: 1, upgrade: `Aged Feather Mist Raven`, tier: 3, img: `aged-feather-mist-raven-thumbnail.webp` },
      { id: 2, upgrade: `Great Feather Mist Raven`, tier: 5, img: `great-feather-mist_raven-thumbnail.webp` },
    ],
  },
  {
    id: 6,
    title: `Loaded Spear`,
    location: `Ashina Castle - Ashina Reservoir`,
    description: ` A Prosthetic Tool loaded with Gyoubu's Broken Horn. Costs Spirit Emblems to use.

    Unleash far-reaching thrust attacks. Lighter enemies struck by the spear may be dragged towards the wielder.
    
    Those of large build will at times force themselves into poorly-fitting armor. Such armor could be torn clean off: coined by Gyoubu as Armor Stripping.`,
    cost: 1,
    count: 4,
    utility: `Utility: Strips armor`,
    requirement: `Upgrade Part: Gyoubu's Broken Horn`,
    img: `loaded-spear.webp`,
    upgrades: [
      { id: 1, upgrade: `Loaded Spear Thrust Type`, tier: 2, img: `loaded-spear-thrust-type-thumbnail.webp` },
      { id: 2, upgrade: `Loaded Spear Cleave Type`, tier: 3, img: `loaded-spear-cleave-type-thumbnail.webp` },
      { id: 3, upgrade: `Spiral Spear`, tier: 4, img: `spiral-spear-thumbnail.webp` },
      { id: 4, upgrade: `Leaping Flame`, tier: 5, img: `leaping-flame-thumbnail.webp` },
    ],
  },
  {
    id: 7,
    title: `Sabimaru`,
    location: `Ashina Castle - Ashina Castle`,
    description: `A Prosthetic Tool made with the blade Sabimaru, allowing for a quick series of attacks together with the sword.

    The blue, poisonous rust on Sabimaru's blade applies "Poison" status abnormality. Wielded in wars of old, the blade's blue rust was used to drive off inhuman Okami warrior women. Even now, it is likely to be effective against their descendants. `,
    cost: 1,
    count: 3,
    requirement: `Upgrade Part: Sabimaru`,
    effect: `Status Effect: Poison abnormality`,
    img: `sabimaru.webp`,
    upgrades: [
      { id: 1, upgrade: `Improved Sabimaru`, tier: 2, img: `improved-sabimaru-thumbnail.webp` },
      { id: 2, upgrade: `Piercing Sabimaru`, tier: 5, img: `piercing-sabimaru-thumbnail.webp` },
      { id: 3, upgrade: `Lazulite Sabimaru`, tier: 6, img: `lazulite-sabimaru-thumbnail.webp` },
    ],
  },
  {
    id: 8,
    title: `Loaded Umbrella`,
    location: `Ashina Castle - Old Grave`,
    description: `
    A Prosthetic Tool created by fitting an indestructible Iron-ribbed Umbrella to the Arm. Costs spirit emblems to use.
    
    When spread open, it will protect against attacks from all directions. Hold it out while moving to protect from light attacks.
    
    But this is an umbrella after all, it won't protect you from low attacks such as sweep attacks.`,
    cost: 1,
    count: 3,
    requirement: `Upgrade Part: Iron Fortress`,
    utility: `Utility: Block attacks`,
    img: `loaded-umbrella.webp`,
    upgrades: [
      { id: 1, upgrade: `Loaded Umbrella - Magnet`, tier: 3, img: `loaded-umbrella-magnet-thumbnail.webp` },
      { id: 2, upgrade: `Phoenix's Lilac Umbrella`, tier: 4, img: `phoenixs-lilac-umbrella-thumbnail.webp` },
      { id: 3, upgrade: `Suzaku's Lotus Umbrella`, tier: 5, img: `suzakus-lotus-umbrella-thumbnail.webp` },
    ],
  },
  {
    id: 9,
    title: `Divine Abduction`,
    location: `Sunken Valley - Gun Fort`,
    description: `A Prosthetic Tool loaded with a large fan. Costs Spirit Emblems to use. Gathers and released a gust of wind, forcing enemies caught by the vortex to turn around.

    It is a mild sort of being spirited away that can be returned from quite quickly. However, it's said that one can only return from being spirited away once, and if taken again, there is no coming back.`,
    cost: 3,
    count: 2,
    requirement: `Upgrade Part: Large Fan`,
    utility: `Utility: Abduction (banish opponent)`,
    img: `divine-abduction.webp`,
    upgrades: [
      { id: 1, upgrade: `Double Divine Abduction`, tier: 2, img: `double-divine-abduction-thumbnail.webp` },
      { id: 2, upgrade: `Golden Vortex`, tier: 5, img: `golden-vortex-thumbnail.webp` },
    ],
  },
  {
    id: 10,
    title: `Finger Whistle`,
    location: `Sunken Valley - Gaurdian Ape's Watering Hole`,
    description: `A Prosthetic Tool created by fitting a slender finger to the prosthetic. Costs Spirit Emblems to use.

    Its sound will grab an enemy's attention and draw them to the whistle's location. By locking on to a target, only the targeted enemy will hear the whistle.
    
    The sound of the finger whistle enrages beasts, making them unable to distinguish friend from foe.`,
    cost: 2,
    count: 2,
    requirement: `Upgrade Part: Slender Finger`,
    effect: `Status Effect: Rage abnormality on beasts`,
    utility: `Utility: Lure targets & Enrage beasts`,
    img: `finger-whistle.webp`,
    upgrades: [
      { id: 1, upgrade: `Mountain Echo`, tier: 3, img: `mountain-echo-thumbnail.webp` },
      { id: 2, upgrade: `Malcontent`, tier: 5, img: `malcontent-thumbnail.webp` },
    ],
  },
]