export const specialbossesGen = {
  btnGeneral: `Find`,
  thumbnailHeight: 255,
}

export const specialbosses = [
  {
    id: 1,
    count: 5,
    title: 'Headless',
    img: `headless.jpg`,
    locations: [
      {
        primary: `Ako`,
        secondary: `Ashina Outskirts - Outskirts Wall Stairway`,
        description: `Found beneath Ashina Outskirts in the depths of a dark cave that connects to Senpou Temple, Mt. Kongo through a shinobi tunnel.`,
        reward: {
          reward_title: `Ako's Spiritfall`,
          reward_description: `Fallen, headless spirit of Ako that increases Vitality and Posture damage for a time. Consume Spirit Emblems to use repeatedly.

          Headless are the ruined form of corrupted heroes who once fought for their country.
          
          Seize the power of an inhuman spirit by laying it to rest, but risk going quite mad unless something is offered in return.`,
          reward_img: `ako-thumbnail.png`,
        }
      },
      {
        primary: `Gokan`,
        secondary: `Sunken Valley - Under-Shrine Valley`,
        description: `Take the Under-Shrine Valley path upwards. Find the x3 burial mounds on a cliff in the Outskirts Wall, and dive into the pool at the back. Follow the underwater tunnel to a dark subterranean burial site with additional mounds.`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`,
        reward: {
          reward_title: `Gokan's Spiritfall`,
          reward_description: `Fallen, headless spirit of Gokan. Reduces Posture damage taken for a time. Consume Spirit Emblems to use repeatedly.

          Headless are the ruined form of corrupted heroes who once fought for their country.
          
          Dedicated burial mounds quietly appease the spirits with severed heads, though none call upon them for long.`,
          reward_img: `gokan-thumbnail.png`,
        }
      },
      {
        primary: `Gachiin`,
        secondary: `Ashina Depths - Hidden Forest`,
        description: `Found in the lowest depths of the Hidden Forest.`,
        reward: {
          reward_title: `Gachiin's Spiritfall`,
          reward_description: `Fallen, headless spirit of Gachiin. Suppresses sound and presence, making the user harder to detect. Consume Spirit Emblems to use repeatedly.

          Headless are the ruined form of corrupted heroes who once fought for their country.
          
          "I'm falling to pieces", said the man to himself, drifting deep into the forest.`,
          reward_img: `gachiin-thumbnail.png`,
        }
      },
      {
        primary: `Ungo`,
        secondary: `Ashina Castle - Old Grave`,
        description: `Found beneath the waters of the Castle moat by the Old Graveyard.`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill.`,
        reward: {
          reward_title: `Ungo's Spiritfall`,
          reward_description: `Fallen, headless spirit of Ungo that reduces Vitality damage taken from physical attacks.
          Consume spirit emblems to use repeatedly.
          Headless are the ruined form of corrupted heroes who once fought for their country.
          This warrior lost his mind in defense of the state. His attempted mutiny was met with a swift beheading, and the lifeless body sunk to the bottom of the moat.`,
          reward_img: `ungo-thumbnail.png`,
        }
      },
      {
        primary: `Yashariku`,
        secondary: `Fountainhead Palace - Great Sakura`,
        description: `Found in the deepest depths beneath the waters of the Great Carp lake.`,
        requirement: `Requirement: Mibu Breathing Technique Latent Skill. Defeat Okami Leader Shizu to make this area accessible.`,
        reward: {
          reward_title: `Yashariku's Spiritfall`,
          reward_description: `Fallen, headless spirit of  Yashariku. Briefly sacrifice Vitality and Posture while gaining a large Attack Power boost. Consume Spirit Emblems to use repeatedly.

          Headless are the ruined form of corrupted heroes who once fought for their country.This brave soul's twin was lost in utero. He may not have fallen to the palace  nobles had his sibling been at his side...`,
          reward_img: `yashariku-thumbnail.png`,
        }
      }
    ]
  },
  {
    id: 2,
    count: 3,
    title: 'Shichimen Warriors',
    img: `shichimen-warrior.jpg`,
    locations: [
      {
        primary: `Shichimen Warrior`,
        secondary: `Abandoned Dungeon - Bottomless Hole`,
        description: `Found in a large caverneous area in the depths of the Abandoned Dungeon.`,
        reward: {
          reward_title: `Ceremonial Tanto`,
          reward_description: `Dagger with a stark white blade and hilt. Converts Vitality into Spirit Emblems.

          Originally, this tanto was used in a ritual offering to the dragon, in which an emblem would be cut from one's own life force and set adrift on the Fountainhead waters.
          
          The blade is inscribed with its true name: "Devoted Soul".`,
          reward_img: `ceremonial-tanto-thumbnail.png`,
        }
      },
      {
        primary: `Shichimen Warrior`,
        secondary: `Ashina Depths - Gaurdian Ape's Burrow`,
        description: `Found in the burrow of the Gaurdian Ape after defeating the Headless Ape.`,
        requirement: `Defeat the Headless Ape to enable this encounter`,
        reward: {
          reward_title: `Malcontent's Ring`,
          reward_description: `An old ring well-suited for slender fingers. "Kingfisher" is engraved on the underside. Can be used to upgrade the Finger Whistle Prosthetic Tool.

          Wearing this ring as you blow the finger whistle will create a somber tune.  The weeping voice is full of solitude and beauty. Possible somber enough to temporarily quell a voice of rage.`,
          reward_img: `malcontent-ring-thumbnail.png`,
        }
      },
      {
        primary: `Shichimen Warrior`,
        secondary: `Fountainhead Palace - Great Sakura`,
        description: `Found behind the Great Sakura beneath the Palace by a waterfall.`,
        reward: {
          reward_title: `Lapis Lazuli`,
          reward_description: `Precious azure lazulite, used for the highest level of Prosthetic Tool upgrades.

          Fountainhead lazulite is a symbol of eternity, and anything forged with it will never break nor rust thanks to the blessing of the Divine Dragon. Tools forged with lazulite transcend human intellect, and are dubbed as treasures of the Divine Dragon.`,
          reward_img: `lapis-lazuli-thumbnail.png`,
        }
      }
    ]
  }
]