export const upgradesGen = {
  btnGeneral: `Details`,
  btnTable: `Materials`,
  thTitleOne: `Material`,
  thTitleTwo: ``,
  thTitleThree: `Qty`,
}

export const upgradesFilters = [
  { id: 1, val: `All`, active: true, },
  { id: 2, val: `Tier 1`, active: false, },
  { id: 3, val: `Tier 2`, active: false, },
  { id: 4, val: `Tier 3`, active: false, },
  { id: 5, val: `Tier 4`, active: false, },
  { id: 6, val: `Tier 5`, active: false, },
  { id: 7, val: `Tier 6`, active: false, },
]

export const upgrades = [
  {
    id: 1,
    filterId: 2,
    title: `Spinning Shuriken`,
    description: `An enhanced Shuriken that can be empowered with rotatinoal energy. Costs Spirit Emblems to use.

    Damage an enemy's Vitality and Posture, and does huge damage to jumping enemies. Taking a moment to further bend the spring and build rotational energy will cause the blade to rotate after landing, damaging the enemy multiple times on hit.
    
    Similar to a spinning top, but with blades.`,
    cost: 1,
    tier: `Tier 1`,
    img: `spinning-shuriken-upgrade.webp`,
    sen: 200,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 3, img: `scrap-iron-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Shuriken`, 
      parent_img: `loaded-shuriken-thumbnail.png`,
    }
  },
  {
    id: 2,
    filterId: 4,
    title: `Gouging Top`,
    description: `An enhanced shuriken that pierces enemies with its sharp blades. Costs Spirit Emblems to use.

    These piercing blades retain momentum after landing, and will damage an enemy's Vitality and Posture, even if guarded. Taking a moment to further bend the spring, and buildrotational energy will cause the blade to rotate after landing, damaging the enemy multiple times on hit.`,
    cost: 1,
    tier: `Tier 3`,
    img: `gouging-top-upgrade.webp`,
    sen: 600,
    materials: [
      { id: 1, item: `Scrap Magnetite`, qty: 3, img: `scrap-magnetite-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Shuriken`, 
      parent_img: `loaded-shuriken-thumbnail.png`,
    }
  },
  {
    id: 3,
    filterId: 5,
    title: `Phantom Kunai`,
    description: `Lady Butterfly's kunai, fitted into the shuriken wheel. Costs Spirit Emblems to use.

    Creates a special sound when thrown, which causes phantom butterflies to follow the path of the kunai.
    
    The phantom butterflies chase after enemies and inclict damage even when guarded.`,
    cost: 2,
    tier: `Tier 4`,
    img: `phantom-kunai-upgrade.png`,
    sen: 1000,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 6, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 3, img: `scrap-magnetite-thumbnail.png` },
      { id: 3, item: `Lump of Fat Wax`, qty: 3, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 4, item: `Phantom Kunai`, qty: 1, img: `phantom-kunai-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Shuriken`, 
      parent_img: `loaded-shuriken-thumbnail.png`,
    }
  },
  {
    id: 4,
    filterId: 6,
    title: `Sen Throw`,
    description: `A Prosthetic Tool that shoots loaded coin bundles. Costs sen and Spirit Emblems to use. While it lacks a shuriken's range, it inflicts far more damage, as the coins hit multiple times. The amount of coins thrown increases depending on how much money one possesses. Being rich makes the blast incredibly strong, but an empty purse will shoot nothing but dust.`,
    cost: 2,
    tier: `Tier 5`,
    img: `sen-throw-upgrade.webp`,
    sen: 2000,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 4, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 4, img: `scrap-magnetite-thumbnail.png` },
      { id: 4, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Shuriken`, 
      parent_img: `loaded-shuriken-thumbnail.png`,
    }
  },
  {
    id: 5,
    filterId: 7,
    title: `Lazulite Shuriken`,
    description: `Shuriken blessed with the favor of the Fountainhead Lapis Lazuli. Costs Spirit Emblems to use.

    Its piercing edge heavily damages Vitality, and damages Vitality and Posture even if guarded. These blades do not slow down, even after striking an enemy.
    
    The lazulite blue trail of light it emits in flight is reminiscent of a shooting star.`,
    cost: 1,
    tier: `Tier 6`,
    img: `lazulite-shuriken-upgrade.webp`,
    sen: 3000,
    materials: [
      { id: 1, item: `Scrap Magnetite`, qty: 6, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Lump of Fat Wax`, qty: 6, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 3, item: `Lump of Grave Wax`, qty: 3, img: `lump-of-grave-wax-thumbnail.png` },
      { id: 4, item: `Adamantite Scrap`, qty: 5, img: `adamantite-scrap-thumbnail.png` },
      { id: 5, item: `Lapis Lazuli`, qty: 2, img: `lapis-lazuli-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Shuriken`, 
      parent_img: `loaded-shuriken-thumbnail.png`,
    }
  },
  {
    id: 6,
    filterId: 3,
    title: `Spring-load Flame Vent`,
    description: `A Flame Barrel fitted with a gunpowder-loaded mechanism. Costs spirit emblems to use.
    Deals damage to enemies with gouts of fire, inflicting Burn status abnormality. The spring mechanism can also be charged to release a massive blast of flames and hot air, sending opponents flying.`,
    cost: 3,
    tier: `Tier 2`,
    img: `spring-load-flame-vent-upgrade.webp`,
    sen: 400,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 3, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Black Gunpowder`, qty: 2, img: `black-gunpowder-thumbnail.png` },
    ],
    parent: {
      parent_title: `Flame Vent`, 
      parent_img: `flame-vent-thumbnail.png`,
    }
  },
  {
    id: 7,
    filterId: 5,
    title: `Okinaga's Flame Vent`,
    description: `A barrel containing smoldering resin that acts as an explosive catalyst. Costs Spirit Emblems to use.
    Emits a short-range flame blast. Continuous fire damage will inflict the burn status.
    It is able to maintain a continues stream of flames due to the smoldering resin inside of the tube.`,
    cost: 3,
    tier: `Tier 4`,
    img: `okinagas-flame-vent-upgrade.webp`,
    sen: 1000,
    materials: [
      { id: 1, item: `Black Gunpowder`, qty: 6, img: `black-gunpowder-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 2, img: `scrap-iron-thumbnail.png` },
      { id: 3, item: `Pine Resin Ember`, qty: 6, img: `pine-resin-ember-thumbnail.png` },
    ],
    parent: {
      parent_title: `Flame Vent`, 
      parent_img: `flame-vent-thumbnail.png`,
    }
  },
  {
    id: 8,
    filterId: 7,
    title: `Lazulite Sacred Flame`,
    description: `	A Flame Barrel blessed with the favor of the Fountainhead Lapiz Lazuli. Costs Spirit Emblems to use.
    Damages even apparitions with its blazing purple flame. The flame does not, however, inflict the Burn status abnormality.
    The sacred Lapis Lazuli fires are divine. Cleanse the deep-seated hatred with flame.`,
    cost: 3,
    tier: `Tier 6`,
    img: `lazulite-sacred-flame-upgrade.webp`,
    sen: 3000,
    materials: [
      { id: 1, item: `Yellow Gunpowder`, qty: 7, img: `yellow-gunpowder-thumbnail.png` },
      { id: 2, item: `Lump of Fat Wax`, qty: 7, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 3, item: `Lump of Grave Wax`, qty: 4, img: `lump-of-grave-wax-thumbnail.png` },
      { id: 4, item: `Fulminated Mercury`, qty: 4, img: `fulminated-mercury-thumbnail.png` },
      { id: 5, item: `Lapis Lazuli`, qty: 3, img: `lapis-lazuli-thumbnail.png` },
    ],
    parent: {
      parent_title: `Flame Vent`, 
      parent_img: `flame-vent-thumbnail.png`,
    }
  },
  {
    id: 9,
    filterId: 3,
    title: `Spring-load Axe`,
    description: `A Loaded Axe reinforced with a spring mechanism. Costs Spirit Emblems to use.
    The strength of the Loaded Axe lies in its heft. The weight allows one to shrug off incoming attacks, and can easily turn a wooden shield into splinters.
    Storing and unleashing energy in the spring mechanism allows for large, sweeping attacks despite its weight.`,
    cost: 2,
    tier: `Tier 2`,
    img: `spring-load-axe-upgrade.webp`,
    sen: 400,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 5, img: `scrap-iron-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Axe`, 
      parent_img: `loaded-axe-thumbnail.png`,
    }
  },
  {
    id: 10,
    filterId: 5,
    title: `Sparking Axe`,
    description: `A loaded Axe with an attached percussion hammer to create flame. Costs Spirit Emblems to use.
    Metes out attacks bathed in flame from axe's blade. Hitting the sparking percussion hammer causes a violent eruption of flames and increases the effective area of the attack.
    This is both firearm and heavy axe.`,
    cost: 2,
    tier: `Tier 4`,
    img: `sparking-axe-upgrade.webp`,
    sen: 1000,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 4, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Black Gunpowder`, qty: 4, img: `black-gunpowder-thumbnail.png` },
      { id: 3, item: `Yellow Gunpowder`, qty: 2, img: `yellow-gunpowder-thumbnail.png` },
      { id: 4, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Axe`, 
      parent_img: `loaded-axe-thumbnail.png`,
    }
  },
  {
    id: 11,
    filterId: 7,
    title: `Lazulite Axe`,
    description: `A Loaded Axe blessed with the favor of the Fountainhead Lapis Lazuli. Costs Spirit Emblems to use.
    The hefty lazulite blade inflicts damage even on guarding enemies. The sound of the lapis lazuli blade striking home creates a powerful reverberation capable of dispelling enemy illusions.`,
    cost: 2,
    tier: `Tier 6`,
    img: `lazulite-axe-upgrade.webp`,
    sen: 3000,
    materials: [
      { id: 1, item: `Adamantite Scrap`, qty: 5, img: `adamantite-scrap-thumbnail.png` },
      { id: 2, item: `Lump of Grave Wax`, qty: 3, img: `lump-of-grave-wax-thumbnail.png` },
      { id: 3, item: `Fulminated Mercury`, qty: 3, img: `fulminated-mercury-thumbnail.png` },
      { id: 4, item: `Lapis Lazuli`, qty: 3, img: `lapis-lazuli-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Axe`, 
      parent_img: `loaded-axe-thumbnail.png`,
    }
  },
  {
    id: 12,
    filterId: 2,
    title: `Spring-load Firecracker`,
    description: `An upgraded Firecracker using a spirit mechanism. Costs Spirit Emblems to use.
    Lets out a large explosive sound and flash, and inflicts damage on beast-type enemies 
    Charging up the spring mechanism allows one to spread the gunpowder more effectively, allowing one to increase the field of effect to cover all directions.`,
    cost: 2,
    tier: `Tier 1`,
    img: `spring-load-firecracker-upgrade.webp`,
    sen: 200,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 2, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Black Gunpowder`, qty: 1, img: `black-gunpowder-thumbnail.png` },
    ],
    parent: {
      parent_title: `Shinobi Firecracker`, 
      parent_img: `shinobi-firecracker-thumbnail.png`,
    }
  },
  {
    id: 13,
    filterId: 4,
    title: `Long Spark`,
    description: `An upgraded Firecracker using compound gunpowder. Costs Spirit Emblems to use.
    Compound gunpowder is said to have a long spark, and by increasing the proportion of Black Gunpowder the effect can be prolonged for longer than the average Firecracker. 
    The flames of the firecrackers bloom for a short while.`,
    cost: 2,
    tier: `Tier 3`,
    img: `long-spark-upgrade.webp`,
    sen: 500,
    materials: [
      { id: 1, item: `Black Gunpowder`, qty: 3, img: `black-gunpowder-thumbnail.png` },
      { id: 2, item: `Yellow Gunpowder`, qty: 2, img: `yellow-gunpowder-thumbnail.png` },
    ],
    parent: {
      parent_title: `Shinobi Firecracker`, 
      parent_img: `shinobi-firecracker-thumbnail.png`,
    }
  },
  {
    id: 14,
    filterId: 6,
    title: `Purple Fume Spark`,
    description: `An upgraded Firecracker that uses a purple, smoke-emitting compound gunpowder.
    Costs Spirit Emblems to use. The tweaked compound gunpowder is known as " Purple Fume Spark".  
    The addition of fatty wax lumps delays the explosion slightly. 
    Enemies blinded by the blast take slightly more Vitality and Posture damage for a brief period of time.`,
    cost: 2,
    tier: `Tier 5`,
    img: `purple-fume-spark-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 1, item: `Lump of Fat Wax`, qty: 5, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 2, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
      { id: 3, item: `Fulminated Mercury`, qty: 2, img: `fulminated-mercury-thumbnail.png` },
    ],
    parent: {
      parent_title: `Shinobi Firecracker`, 
      parent_img: `shinobi-firecracker-thumbnail.png`,
    }
  },
  {
    id: 15,
    filterId: 4,
    title: `Aged Feather Mist Raven`,
    description: `Mist Raven feathers with notches in the tips. Costs Spirit Embles to use.
    Disappear like the mist and move away. Can be performed not only from the assumed stance, but also after taking damage.
    The slight notches in the tips of the feathers give the appearance of an old Mist Raven. They are there to allow one to dissolve into the mist even more easily.`,
    cost: 2,
    tier: `Tier 3`,
    img: `aged-feather-mist-raven-upgrade.webp`,
    sen: 500,
    materials: [
      { id: 2, item: `Black Gunpowder`, qty: 2, img: `black-gunpowder-thumbnail.png` },
      { id: 1, item: `Scrap Magnetite`, qty: 2, img: `scrap-iron-thumbnail.png` },
      { id: 1, item: `Lump of Fat Wax`, qty: 1, img: `lump-of-fat-wax-thumbnail.png` },
    ],
    parent: {
      parent_title: `Mist Raven`, 
      parent_img: `mist-raven-thumbnail.png`,
    }
  },
  {
    id: 16,
    filterId: 6,
    title: `Great Feather Mist Raven`,
    description: `Mist Raven fused with crimson feathers. Costs Spirit Emblems to use.
    Disappear and displace, like the mist. Can be performed from both the assumed stance and after taking damage. Dyed red to resemble the Great Mist Raven.
    The feathers vanish in a scorching wake. The great raven is a god of the land, and the touch of gods is to be feared.`,
    cost: 3,
    tier: `Tier 5`,
    img: `great-feather-mist-raven-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 2, item: `Yellow Gunpowder`, qty: 4, img: `yellow-gunpowder-thumbnail.png` },
      { id: 1, item: `Lump of Fat Wax`, qty: 4, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 3, item: `Lump of Grave Wax`, qty: 3, img: `lump-of-grave-wax-thumbnail.png` },
      { id: 3, item: `Fulminated Mercury`, qty: 3, img: `fulminated-mercury-thumbnail.png` },
    ],
    parent: {
      parent_title: `Mist Raven`, 
      parent_img: `mist-raven-thumbnail.png`,
    }
  },
  {
    id: 17,
    filterId: 3,
    title: `Loaded Spear Thrust Type`,
    description: `A Loaded Spear reinforced with a spring mechanism. Costs Spirit Emblems to use.
    Allows for long range thrust attacks. Small enemies struck by the attacks can be dragged towards the wielder. Can even remove crude armor from foes.
    Storing up energy in the sping mechanism allows for successive and relentless thrust attacks.`,
    cost: 1,
    tier: `Tier 2`,
    img: `loaded-spear-thrust-type-upgrade.webp`,
    sen: 400,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 5, img: `scrap-iron-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Spear`, 
      parent_img: `loaded-spear-thumbnail.png`,
    }
  },
  {
    id: 18,
    filterId: 4,
    title: `Loaded Spear Cleave Type`,
    description: `A Loaded Spear reinforced with a spring mechanism. Costs Spirit Emblems to use.
    Allows for long range thrust attacks. Small enemies struck by the attacks can be dragged towards the wielder. Can even remove crude armor from foes.
    Storing up energy in the sping mechanism allows for successive and relentless thrust attacks.`,
    cost: 1,
    tier: `Tier 3`,
    img: `loaded-spear-cleave-type-upgrade.webp`,
    sen: 600,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 4, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 3, img: `scrap-magnetite-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Spear`, 
      parent_img: `loaded-spear-thumbnail.png`,
    }
  },
  {
    id: 19,
    filterId: 5,
    title: `Spiral Spear`,
    description: `A Loaded Spear with a chiseled into the blade. Costs Spirit Emblems to use.
    Sharp thrust attacks from this Prosthetic Tool damage an enemy's Vitality and Posture, even through their guard.
    The spear's spiral creates a corkscrew shockwave that gouges and rends as it penetrates.`,
    cost: 1,
    tier: `Tier 4`,
    img: `spiral-spear-upgrade.webp`,
    sen: 1000,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 10, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 4, img: `scrap-magnetite-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Spear`, 
      parent_img: `loaded-spear-thumbnail.png`,
    }
  },
  {
    id: 20,
    filterId: 6,
    title: `Leaping Flame`,
    description: `A loaded Spear with an attached percussion hammer to create flame. Costs Spirit Emblems to use.
    Baths the tip of the loaded spear in flames making it a dangerously sharp spear and firearm.
    A charged strike of the spear will knock enemies down and consume them in a fiery blaze.`,
    cost: 2,
    tier: `Tier 5`,
    img: `leaping-flame-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 2, item: `Black Gunpowder`, qty: 8, img: `black-gunpowder-thumbnail.png` },
      { id: 2, item: `Yellow Gunpowder`, qty: 4, img: `yellow-gunpowder-thumbnail.png` },
      { id: 4, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
      { id: 3, item: `Fulminated Mercury`, qty: 1, img: `fulminated-mercury-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Spear`, 
      parent_img: `loaded-spear-thumbnail.png`,
    }
  },
  {
    id: 21,
    filterId: 4,
    title: `Improved Sabimaru`,
    description: `An improved Sabimaru with a special mechanism for unleashing the blade. Costs spirit emblems to use.

    Due to the revised mechanism, one can fluidly swap between two separate sets of attacks as desired. 
    Has a blue rust poison applied to the blade that eats into enemies' defense and inlicts "Poison" status abnormality.`,
    cost: 1,
    tier: `Tier 3`,
    img: `improved-sabimaru-upgrade.webp`,
    sen: 600,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 4, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 4, img: `scrap-magnetite-thumbnail.png` },
    ],
    parent: {
      parent_title: `Sabimaru`, 
      parent_img: `sabimaru-thumbnail.png`,
    }
  },
  {
    id: 22,
    filterId: 6,
    title: `Piercing Sabimaru`,
    description: `A further improved Sabimaru with a finely sharpened blade. Costs Spirit Emblems to use.

    Repeated attacks with the newly sharpened edge of the blade will damage an enemy's Vitality and Posture, even through their guard. 
    The blue rust poison on Sabimaru's blade eats its way into enemies and applies Poison status.`,
    cost: 1,
    tier: `Tier 5`,
    img: `piercing-sabimaru-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 4, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 4, img: `scrap-magnetite-thumbnail.png` },
      { id: 3, item: `Adamantite Scrap`, qty: 4, img: `adamantite-scrap-thumbnail.png` },
    ],
    parent: {
      parent_title: `Sabimaru`, 
      parent_img: `sabimaru-thumbnail.png`,
    }
  },
  {
    id: 23,
    filterId: 7,
    title: `Lazulite Sabimaru`,
    description: `Sabimaru blessed with the favor of the Fountainhead lapis Lazuli. Cost Spirit Emblems to use.

    The combination of Lapis Lazuli and the rusted blue blade produces a poisonous mist with every swing. 
    Dissolving the Lapis Lazuli over the blade caused the ancient blue rust to bubble to the blade's surface.`,
    cost: 1,
    tier: `Tier 6`,
    img: `lazulite-sabimaru-upgrade.webp`,
    sen: 3000,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 12, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 8, img: `scrap-magnetite-thumbnail.png` },
      { id: 3, item: `Adamantite Scrap`, qty: 4, img: `adamantite-scrap-thumbnail.png` },
      { id: 4, item: `Fulminated Mercury`, qty: 4, img: `fulminated-mercury-thumbnail.png` },
      { id: 5, item: `Lapis Lazuli`, qty: 2, img: `lapis-lazuli-thumbnail.png` },
    ],
    parent: {
      parent_title: `Sabimaru`, 
      parent_img: `sabimaru-thumbnail.png`,
    }
  },
  {
    id: 24,
    filterId: 4,
    title: `Loaded Umbrella - Magnet`,
    description: `A Loaded Umbrella upgraded with a magnetic mechanism. Costs Spirit Emblems to use.
    When spread open, it will protect against attacks from all directions. Hold it out while moving to protect from light attacks. Has a tempered magnetic shaft that makes it nearly unbreakable. Enemy attacks can be deflected by spinning the open umbrella.`,
    cost: 1,
    tier: `Tier 3`,
    img: `loaded-umbrella-magnet-upgrade.webp`,
    sen: 500,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 4, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 3, img: `scrap-magnetite-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Umbrella`, 
      parent_img: `loaded-umbrella-thumbnail.png`,
    }
  },
  {
    id: 25,
    filterId: 5,
    title: `Phoenix's Lilac Umbrella`,
    description: `A Loaded Umbrella emblazoned with a purplish-blue phoenix. Costs Spirit Emblems to use.
    When spread open, it will protect against attacks from all directions. Hold it out while moving to protect from light attacks.
    The blessings of the phoenix fill the umbrella, preventing damage from apparition-type enemies.`,
    cost: 1,
    tier: `Tier 4`,
    img: `phoenixs-lilac-umbrella-upgrade.webp`,
    sen: 1000,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 6, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Scrap Magnetite`, qty: 4, img: `scrap-magnetite-thumbnail.png` },
      { id: 3, item: `Lump of Fat Wax`, qty: 4, img: `lump-of-fat-wax-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Umbrella`, 
      parent_img: `loaded-umbrella-thumbnail.png`,
    }
  },
  {
    id: 26,
    filterId: 6,
    title: `Suzaku's Lotus Umbrella`,
    description: `A Loaded Umbrella emblazoned with a bright red vermilion bird.
    Costs Spirit Emblems to use.
    When spread open, it will protect against attacks from all directions. Hold it out while moving to protect from light attacks.
    The blessing of the vermilion bird prevents damage from fire-based attacks, and also prevents buildup of "Burn" status.`,
    cost: 1,
    tier: `Tier 5`,
    img: `suzakus-lotus-umbrella-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 1, item: `Scrap Magnetite`, qty: 6, img: `scrap-magnetite-thumbnail.png` },
      { id: 2, item: `Yellow Gunpowder`, qty: 6, img: `yellow-gunpowder-thumbnail.png` },
      { id: 3, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
      { id: 4, item: `Fulminated Mercury`, qty: 2, img: `fulminated-mercury-thumbnail.png` },
    ],
    parent: {
      parent_title: `Loaded Umbrella`, 
      parent_img: `loaded-umbrella-thumbnail.png`,
    }
  },
  {
    id: 27,
    filterId: 3,
    title: `Double Divine Abduction`,
    description: `A large fan that creates a vortex of wind. Costs Spirit Emblems to use.
    Gathers and releases a gust of wind, forcing enemies caught by the blast to turn around. Can be waved twice in succession. It is a mild sort of being spirited away that can be returned form quite quickly.
    However, it's said that one can only return from being spirited away once, and if taken again, there is no coming back.`,
    cost: 3,
    tier: `Tier 2`,
    img: `double-divine-abduction-upgrade.webp`,
    sen: 400,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 3, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Black Gunpowder`, qty: 2, img: `black-gunpowder-thumbnail.png` },
    ],
    parent: {
      parent_title: `Divine Abduction`, 
      parent_img: `divine-abduction-thumbnail.png`,
    }
  },
  {
    id: 28,
    filterId: 6,
    title: `Golden Vortex`,
    description: `A large and withered golden fan. Costs spirit emblems to use.
    Gather illustrious golden wind and release it to force enemies caught up in the vortex to face the other way. Can be performed twice in a row.
    
    Enemies that have been turned around drop items or money, to be considered "donations".`,
    cost: 4,
    tier: `Tier 5`,
    img: `golden-vortex-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 1, item: `Scrap Iron`, qty: 8, img: `scrap-iron-thumbnail.png` },
      { id: 2, item: `Lump of Fat Wax`, qty: 4, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 3, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
      { id: 4, item: `Lump of Grave Wax`, qty: 2, img: `lump-of-grave-wax-thumbnail.png` },
    ],
    parent: {
      parent_title: `Divine Abduction`, 
      parent_img: `divine-abduction-thumbnail.png`,
    }
  },
  {
    id: 29,
    filterId: 4,
    title: `Mountain Echo`,
    description: `A Prosthetic Tool created by fitting a slender finger to the prosthetic. Costs Spirit Emblems to use.
    Its sound will grab an enemy's attention and draw them to the whistle's location. By locking on to a target, only the targeted enemy will hear the whistle.
    The sound of the finger whistle enrages beasts, making them unable to distinguish friend from foe.
    Taking a deep breath before performing a whistle allows for the sound to be delayed.`,
    cost: 3,
    tier: `Tier 3`,
    img: `mountain-echo-upgrade.webp`,
    sen: 600,
    materials: [
      { id: 1, item: `Scrap Magnetite`, qty: 3, img: `scrap-magnetite-thumbnail.png` },
      { id: 2, item: `Lump of Fat Wax`, qty: 2, img: `lump-of-fat-wax-thumbnail.png` },
    ],
    parent: {
      parent_title: `Finger Whistle`, 
      parent_img: `finger-whistle-thumbnail.png`,
    }
  },
  {
    id: 30,
    filterId: 6,
    title: `Malcontent`,
    description: `Finger Whistle reinforced with the Malcontent's ring. Costs Spirit Emblems to use. Can be used to drive beasts mad, and to torment apparition-type enemies.
    "Kingfisher" is etched onto the ring. The Kingfisher's cry could be heard along the waterfront of Sunken Valley. Now, she cries no more.`,
    cost: 4,
    tier: `Tier 5`,
    img: `malcontent-upgrade.webp`,
    sen: 1500,
    materials: [
      { id: 1, item: `Scrap Magnetite`, qty: 4, img: `scrap-magnetite-thumbnail.png` },
      { id: 2, item: `Lump of Fat Wax`, qty: 4, img: `lump-of-fat-wax-thumbnail.png` },
      { id: 3, item: `Adamantite Scrap`, qty: 2, img: `adamantite-scrap-thumbnail.png` },
      { id: 4, item: `Lump of Grave Wax`, qty: 2, img: `lump-of-grave-wax-thumbnail.png` },
      { id: 5, item: `Malcontent's Ring`, qty: 2, img: `malcontent-ring-thumbnail.png` },
    ],
    parent: {
      parent_title: `Finger Whistle`, 
      parent_img: `finger-whistle-thumbnail.png`,
    }
  },
]