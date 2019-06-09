export const treasurecarpscalesGen = {
  btnGeneral: `Find`,
  thumbnailHeight: 150,
}

export const treasurecarpscales = [
  {
    id: 1,
    count: 7,
    title: `Hirata Estate`,
    note: `Early Game`,
    img: `Hirata-Estate.webp`,
    locations: [
      {
        primary: `x2 Carp swimming shallow`,
        secondary: `Dragonspring Hirata Estate`,
        description: `Close to the surface in the waters beneath the Dragonspring bridge.`,
        procurement: `Hunted`
      },
      {
        primary: `x2 Carp within the depths of the river`,
        secondary: `Dragonspring Hirata Estate`,
        description: `In the waters beneath the Dragonspring bridge.`,
        procurement: `Hunted`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      },
      {
        primary: `x1 Found by the bank`,
        secondary: `Dragonspring Hirata Estate`,
        description: `Search the banks of the river before crossing the bridge to Hirata Estate entrance.`,
        procurement: `Discovered`
      },
      {
        primary: `x1 Carp swimming shallow`,
        secondary: `Bamboo Thicket Slope`,
        description: `Close to the surface in the waters beneath the bridge beyond the Bamboo Thicket.`,
        procurement: `Hunted`,
      },
      {
        primary: `x1 Carp within the depths of the river`,
        secondary: `Bamboo Thicket Slope`,
        description: `In the waters beneath the bridge beyond the Bamboo Thicket.`,
        procurement: `Hunted`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      },
    ]
  },
  {
    id: 2,
    count: 1,
    title: `Ashina Castle`,
    note: `Early Game`,
    img: `Ashina-Castle.webp`,
    locations: [
      {
        primary: `x1 Found within the depths of the moat`,
        secondary: `Ashina Castle`,
        description: `Found in a corner on the moat floor beneath the surface.`,
        procurement: `Discovered`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      },
    ]
  },
  {
    id: 3,
    count: 2,
    title: `Senpou Temple, Mt. Kongo`,
    note: `Early Game`,
    img: `Senpou-Temple.webp`,
    locations: [
      {
        primary: `x2 Carp swimming shallow`,
        secondary: `Temple Grounds`,
        description: `Close to the surface in the waters of the Temple Grounds pond.`,
        procurement: `Hunted`
      }
    ]
  },
  {
    id: 4,
    count: 3,
    title: `Sunken Valley`,
    note: `Mid Game`,
    img: `Sunken-Valley.webp`,
    locations: [
      {
        primary: `x2 Carp within the depths of the lake`,
        secondary: `Riven Cave`,
        description: `In the waters of the lake outside Riven Cave.`,
        procurement: `Hunted`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      },
      {
        primary: `x1 Found within the depths of the lake`,
        secondary: `Riven Cave`,
        description: `In the waters of the lake outside Riven Cave.`,
        procurement: `Discovered`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      }
    ]
  },
  {
    id: 5,
    count: 9,
    title: `Ashina Depths`,
    note: `Mid Game`,
    img: `Ashina-Depths.webp`,
    locations: [
      {
        primary: `x2 Sold by the Exiled Memorial Mob`,
        secondary: `Mibu Village`,
        description: `Sold by Exiled Memorial Mob for 500 sen`,
        procurement: `Purchased`
      },
      {
        primary: `x1 Found at the end of the rivene`,
        secondary: `Mibu Village`,
        description: `Follow the shallow stream to its end but beware the Interior Ministry Shinobi that waits.`,
        procurement: `Discovered`,
      },
      {
        primary: `x1 Carp within the depths of the lake`,
        secondary: `Water Mill`,
        description: `In the waters of the river at the end of Mibu Village.`,
        procurement: `Hunted`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      },
      {
        primary: `x5 Rewarded from Noble`,
        secondary: `Water Mill`,
        description: `Defeat the Mist Noble in the shrine at the end of Mibu Village beyond the bridge past the Water Mill.`,
        procurement: `Rewarded`,
        note: `Note: The Mibu Village Priest needs to drink the Water of the Palace to transform into the Mist Noble.`
      },
    ]
  },
  {
    id: 6,
    count: 1,
    title: `Ashina Castle`,
    note: `Mid Game - after shinobi infiltration`,
    img: `Ashina-Castle.webp`,
    locations: [
      {
        primary: `x1 Carp within the depths of the moat`,
        secondary: `Ashina Castle`,
        description: `In the waters within the Castle Moat.`,
        procurement: `Hunted`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`,
        note: `Note: Only spawns mid-game after shinobi infiltration of Ashina Castle.`
      }
    ]
  },
  {
    id: 7,
    count: 19,
    title: `Fountainhead Palace`,
    note: `Late Game`,
    img: `Fountainhead-Palace.webp`,
    locations: [
      {
        primary: `x3 Found in a room with a hole in the floor`,
        secondary: `Mibu Manor`,
        description: `Find a hole in the floor at the end of Mibu Manor by the Flower Viewing Stage and dive in the water below to enter the adjacent building.`,
        procurement: `Discovered`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`
      },
      {
        primary: `x7 Carp within the depths of the Fountainhead Palace lake`,
        secondary: `Great Sakura`,
        description: `Acquired from x7 carp throughout the depths of the lake below the Great Sakura.`,
        procurement: `Hunted`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill. Defeat Okami Leader Shizu to make this area accessible.`,
      },
      {
        primary: `x3 Found within the depths of the Fountainhead Palace lake`,
        secondary: `Great Sakura`,
        description: `Found beneath a sunken building almost completely submerged in the lake below the Great Sakura.`,
        procurement: `Discovered`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill. Defeat Okami Leader Shizu to make this area accessible.`,
      },
      {
        primary: `x2 Found within the depths of the Fountainhead Palace lake`,
        secondary: `Flower Viewing Stage`,
        description: `Found by the skeletal remains of a great carp at the bottom of the lake near Mibu Manor.`,
        procurement: `Discovered`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill. Defeat Okami Leader Shizu to make this area accessible.`,
      },
      {
        primary: `x4 Rewarded by the Great Carp Attendant`,
        secondary: `Feeding Grounds`,
        description: `x1 rewarded after initial feeding of the Great Carp, another x3 are rewarded after the second feeding.`,
        procurement: `Rewarded`,
        note: `Note: the scales obtained by the Great Carp Attendant can be looted from his corpse after the death of the Great Carp if they were not rewarded by the feeding.`
      },
    ]
  }
]