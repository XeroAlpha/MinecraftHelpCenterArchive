---
title: Minecraft Beta - 1.18.0.20 (Xbox One/Windows 10/Android)
date: 2021-10-06T14:42:38Z
updated: 2021-10-06T16:24:34Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4410756779405-Minecraft-Beta-1-18-0-20-Xbox-One-Windows-10-Android
hash:
  caves-cliffs: caves--cliffs
---

**Posted:** 6 October 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Screen_Shot_10-06-21_at_10.47_AM_001.JPG](https://feedback.minecraft.net/hc/article_attachments/4410756729229/Screen_Shot_10-06-21_at_10.47_AM_001.JPG)

 

Ah, Betas. They grow up so fast! What was once a little baby bedrock beta has now blossomed before our very eyes. Why this nostalgic turn, you may ask? It may be a slight case of empty nest syndrome since the Caves & Cliffs features have moved out of the Experimental Features and grown into fully adult defaults. That’s not a tear in my eye, it’s just very dusty after the move! Maybe take a break from flinging wild accusations about and enjoy this week’s update instead, and as always send your feedback to [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback) and report bugs at [bugs.mojang.com](http://bugs.mojang.com/). Where are my tissues?!

 

**Once again we would love to hear from you regarding the game's performance - you can let us know how the game runs in this short survey: [aka.ms/MCPerfPoll](https://aka.ms/MCPerfPoll)**

 

**Reminder:** We are still tweaking world generation and features may change, please remember **make regular backup copies** of your favourite worlds!

 

# **Caves & Cliffs**

- Features related to Caves & Cliffs Part II have been moved from the Experimental Toggle and are now enabled by default
  - **NOTE:** Upon loading your world into this beta, new Caves & Cliffs Part II world generation will automatically be introduced with no default world copy created. You can read more about how new generation will be added below your existing chunks in our [FAQ](https://aka.ms/ccworldupgrade)!
- New world generation in Caves and Cliffs Part II is currently incompatible with the 'Creation of Custom Biomes' experiment. In this beta, expect worlds with custom biome generation to be potentially unstable and for custom biomes to only exist in currently saved out areas of the world
- Changed ore generation rates to be in parity with Java Edition
- Fixed an issue that prevented large trees from growing below y=0 ([MCPE-126254](https://bugs.mojang.com/browse/MCPE-126254))
- Small Dripleaf now properly generates as part of Lush Caves biome ([MCPE-125799](https://bugs.mojang.com/browse/MCPE-125799))

## **Cave Generation**

- Old caves can now reach all the way to the surface
- Old cave carver placement is now on parity with Java Edition
- Floating water no longer generates in caves ([MCPE-141424](https://bugs.mojang.com/browse/MCPE-141424))

## **Feature Placement**

- Meadow Flowers no longer replace blocks in villages or other structures ([MCPE-141378](https://bugs.mojang.com/browse/MCPE-141378))
- Tuff blob features now generate below y=0 ([MCPE-141452](https://bugs.mojang.com/browse/MCPE-141452))
- Deepslate patches no longer generate above y=0 ([MCPE-141330](https://bugs.mojang.com/browse/MCPE-141330))
- Amethyst Geodes now get placed in the correct y-range during world generation ([MCPE-141326](https://bugs.mojang.com/browse/MCPE-141326))

### **World Generation**

- Updated feature placement of Granite, Andesite, Diorite, Dirt, and Gravel to match Java Edition
- Tweaked peaks to make small mountains look more like proper jagged mountain peaks instead of flat hilly mounds
- Improved blending between old and new chunks
- Mineshaft tunnels can't replace Bedrock anymore ([MCPE-141123](https://bugs.mojang.com/browse/MCPE-141123))

# **Features and Bug Fixes**

## **Stability and Performance**

- Players are no longer disconnected if server and client have different Runtime Block IDs
- Optimized the time it takes to place vines in the Overworld

## **Accessibility**

- Added missing screen reader on the "Controller lost connection" prompt

## **Gameplay**

- Corrected Portal locations when the Portal was moved but the location was not updated ([MCPE-28765](https://bugs.mojang.com/browse/MCPE-28765))
- Breaking a block below fire no longer creates an invisible fire block when the 'doFireTick' gamerule is disabled ([MCPE-101371](https://bugs.mojang.com/browse/MCPE-101371))

## **General**

- Players with higher than recommended render distance settings are now prompted to change it to the recommended value
- Render distance default and max settings have been updated for better performance
- A prompt now warns players that they will be taken back to the main menu if they sign-in while in-game

## **Graphical**

- The Carved Pumpkin enchantment glint now only covers the item instead of the entire slot ([MCPE-68219](https://bugs.mojang.com/browse/MCPE-68219))
- Fixed a bug that could occur on older worlds where looking up in a Minecart would display the inside of the Minecart, blocking the player's view
- Updated item rendering so enchanted items are no longer be invisible in the Nether ([MCPE-116880](https://bugs.mojang.com/browse/MCPE-116880))

## **Marketplace**

- Store update prompt no longer appears for no internet connection or session start failure

## **Mobs**

- Mobs can now path over Trapdoors
- Mobs no longer walk through Campfires ([MCPE-142054](https://bugs.mojang.com/browse/MCPE-142054))
- Axolotls now animate correctly when airborne ([MCPE-131322](https://bugs.mojang.com/browse/MCPE-131322))
- Sweet Berry Bushes now damage mobs ([MCPE-56142](https://bugs.mojang.com/browse/MCPE-56142)) ([MCPE-140012](https://bugs.mojang.com/browse/MCPE-140012))
- Mobs no longer try to path through Sweet Berry Bushes

## **User Interface**

- Structure Block can now be saved and loaded within current dimension height limits ([MCPE-122643](https://bugs.mojang.com/browse/MCPE-122643))
- Fixed an issue where searching for non-existent content brought up the incorrect "1 result" message
- Fixed overlapping text on offerings occurring in 4:3 resolution screens
- Fixed Java Edition parity while lying in bed in multiplayer game. A message will show how many players are lying in bed while waiting for all players to fall asleep
- Provide better visual feedback and hints for different render distance settings

## **Vanilla Parity**

- Raid mobs now despawn after a raid ends if the player moves too far away
- Raid boss bar color changed to red from purple ([MCPE-46047](https://bugs.mojang.com/browse/MCPE-46047))
- Vindicators no longer naturally spawn in Illager Patrols

## **Villages**

### **Hero Of The Village**

- Hero of the Village effect now applies to all players who helped kill a raider once a raid is defeated, and the effect remains on the players, even if they travel outside the village ([MCPE-53384](https://bugs.mojang.com/browse/MCPE-53384))

# **Technical Updates**

## **Commands**

- Order of function calls triggered by '/execute' inside a function are now consistent ([MCPE-111849](https://bugs.mojang.com/browse/MCPE-111849))

## **General**

- Added caching support for subchunk requests and fixed issues with holes in the terrain
- Fixed a rendering error that could occur when attempting to render a Vanilla mob in a base game version prior to the version that mob was introduced through JSON files
- Most content errors and warnings will now only display once per world ([MCPE-135153](https://bugs.mojang.com/browse/MCPE-135153))

## **Item Scripting**

Implemented first past of Item Script Components

- ItemStack
  - Exposed interfaces for accessing script-enabled ItemComponents on ItemStack
  - hasComponent(componentId: string) - returns true if the ItemStack has the component \[componentId\] attached to it
  - getComponent(componentId: string) - returns a handle to the component attached to this ItemStack. Returns an undefined handle if the component does not exist or if the component is yet to be exposed to script
  - getComponents() - returns an array of all attached script-enabled components on this ItemStack
- NumberRange
  - A class to describe a random value between a min and max number
  - Property min - the minimum value in the range
  - Property max - the maximum value in the range
  - next() - returns a random number between min and max
- Items Registry
  - Added Items registry class to get all Items by name
  - get(itemId: string) - returns a handle to an ItemType if a type by the given name exists
- Script enabled Item components
  - minecraft:food
    - Read-only property nutrition - number that describes how much nutrition this food item gives the player when eaten
    - Read-only property saturationModifier - number that is the saturation modifier used to apply the saturation buff when eaten
    - Read-only property canAlwaysEat - if true the player can always eat this item (even when not hungry)
    - Read-only property usingConvertsTo - string name of the Item this will be converted to when eaten. If empty, the item will not convert to anything else
  - minecraft:durability
    - Read-only property maxDurability - the number amount of damage this item can take before breaking
    - Read-only property damageRange - a NumberRange describing the chance of the item losing durability
    - Property damage - gets or sets the current damage on the ItemStack
  - getDamageChance(unbreaking: number = 0) - gets the maximum chance that this item would be damaged using the damageRange property if given an unbreaking level. Incoming unbreaking parameter must be greater than 0
