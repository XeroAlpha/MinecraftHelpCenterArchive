---
title: Minecraft Beta - 1.17.0.50 (Xbox One/Windows 10/Android)
date: 2021-04-21T13:07:01Z
updated: 2021-04-21T15:45:35Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - beta_changelog
  - caves&cliffs
link: https://feedback.minecraft.net/hc/en-us/articles/360060214711-Minecraft-Beta-1-17-0-50-Xbox-One-Windows-10-Android
---

**Posted:** April 21, 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It’s Wednesday, and we all know what that means – it’s time for another Bedrock beta update, *of quartz!* Get ready to discover new features and tweaks, and involuntarily exclaim “oooh, shiny!” several times per game session. Maybe more. You will need to enable the Caves & Cliffs Experimental Features Toggle to check out some of these features in your beta worlds. Find out more about using the toggles at [aka.ms/MCExperimentalToggle](https://aka.ms/MCExperimentalToggle).   

You can leave us your feedback for these features in the threads at [aka.ms/CavesCliffsFeedback](https://aka.ms/CavesCliffsFeedback), and search and reports any new bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

 

![amethyst_1170x500.jpg](https://feedback.minecraft.net/hc/article_attachments/360093174772/amethyst_1170x500.jpg)

 

## Experimental Features

### Amethysts and Geodes

- Amethyst Geodes have been added to the game!
  - These huge geodes can be found anywhere underground in the Overworld
  - Amethyst geodes have an outer layer of a new block called Smooth Basalt
  - Amethyst geodes have a second layer of another new block called Calcite
  - Amethyst geodes have an inner layer of various Amethyst blocks
- Calcite, Tuff, and Smooth Basalt have been added to the game!
  - Just smelt basalt to obtain smooth basalt!
- Amethyst Clusters have been added to the game!
  - Amethyst Clusters grow from Budding Amethyst, which can be found inside geodes
  - Clusters have four growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster
  - Clusters can only grow when they are placed on Budding Amethyst blocks
  - Fully-grown Amethyst Clusters drop four Amethyst Shards (or more with Fortune) when an Iron Pickaxe or higher is used, and otherwise drop nothing when broken
  - Clusters can be Silk Touched at any stage
- Budding Amethyst has been added to the game!
  - On any side of a Budding Amethyst block where there is air or a water source block, a Small Amethyst Bud will eventually grow
  - Amethyst Buds can only grow when attached to Budding Amethyst, and will grow until they become Amethyst
- Clusters Amethyst Blocks have been added to the game!
  - Amethyst comes in block form inside the geodes in two ways: Block of Amethyst and Budding Amethyst
  - All types of Amethyst blocks (clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile – go make some music!
- Tinted Glass has been added to the game!
  - Tinted Glass is a type of glass that does not allow light to pass through
  - Tinted Glass is crafted by putting a Glass block in the middle of four Amethyst Shards
  - Tinted Glass can be obtained without Silk Touch; it does not shatter like normal glass
- Amethyst Shards have been added to the game!
  - Amethyst Clusters drop four Amethyst Shards (or more with Fortune)

### Spyglass

- The Spyglass item has been added to game, and can be crafted with Copper Ingots and an Amethyst Shard
- Camera movement when looking through a Spyglass is slowed to make it more comfortable to use. This is adjustable using the Spyglass Damping slider in Settings

### Smeltable Ore Drops

- Added Raw Copper, Raw Iron and Raw Gold items
- Ores that are smeltable now drop raw item forms of the ore instead of the ore block, and these can be smelted just like before
- This is to open up the design space for more base stones with ores without cluttering the inventory, and have consistency with Fortune on all ores
- Ore blocks will continue to be smeltable, meaning you can smelt ore blocks from inventories on old worlds

### Raw Ore Blocks

- Added Block of Raw Iron, Copper, and Gold
- Just like other ore materials, you can craft a compact version with raw ore items in order to save inventory space

### Tuff

- Blobs of tuff now generate in the world at y-levels below 16

## Tweaks and Fixes

### Axolotl

- Bucketing an Axolotl no longer unlocks the "I am a Marine Biologist" achievement
- Axolotls are now much more likely to spawn
- Axolotls no longer grant themselves regeneration when killing their target
- Player now receives experience points after breeding Axolotls ([MCPE-123708](https://bugs.mojang.com/browse/MCPE-123708))

### Caves

- Cobwebs no longer generate suspended in the air in mineshafts

### Copper

- Copper surfaces now deoxidize in a more random pattern when struck by lightning

### Copper Block

- Horizontally placed Lightning Rods now interact properly with respect to de-oxidizing Copper Blocks ([MCPE-121671](https://bugs.mojang.com/browse/MCPE-121671))
- Copper Blocks struck by lightning now deoxidize even if there's no lightning rod present ([MCPE-121546](https://bugs.mojang.com/browse/MCPE-121546))
- Copper stairs now produce their unique footstep sounds at positions below y=0 ([MCPE-121955](https://bugs.mojang.com/browse/MCPE-121955))

### Deepslate

- Cobbled Deepslate, Deepslate Bricks, and Deepslate Tiles now give experience from smelting in a Furnace ([MCPE-123671](https://bugs.mojang.com/browse/MCPE-123671))
- Cobbled deepslate can now be used as crafting material for tools, furnace and brewing stand ([MCPE-123669](https://bugs.mojang.com/browse/MCPE-123669))

### Dripstone

- Landing on dripstone no longer deals fall damage when gamerule falldamage is set to false
- Dripstone Block is now correctly named ([MCPE-119573](https://bugs.mojang.com/browse/MCPE-119573))
- Only the tips of stalagmites deal increased fall damage ([MCPE-119917](https://bugs.mojang.com/browse/MCPE-119917))
- Cauldrons fill slightly faster with water from dripping stalactites

### Glow Item Frame

- Glow Item Frame's textures are no longer inconsistent between Bedrock and Java
- Glow Item Frame now produces Redstone signal ([MCPE-119726](https://bugs.mojang.com/browse/MCPE-119726))

### Lightning Rod

- Lightning Rod is now rendered correctly when held in hand
- Throwing a Channeling trident at a rod during a thunderstorm now correctly converts nearby mobs ([MCPE-116137](https://bugs.mojang.com/browse/MCPE-116137))
- Blocks connected to a Lightning Rod now correctly conduct redstone signal when the rod is hit by lightning
- Throwing a Channeling trident at a rod during a thunderstorm now correctly affects villagers

### Lush Caves

- Lush Cave biomes now randomly generate underground
- Azalea and Flowering Azalea leaves now have a chance to drop Azalea or Flowering Azalea when broken ([MCPE-122165](https://bugs.mojang.com/browse/MCPE-122165))
- Moss Carpet now has Block Placing sound ([MCPE-121663](https://bugs.mojang.com/browse/MCPE-121663))
- Azalea and Flowering Azalea now have ambient occlusion ([MCPE-121660](https://bugs.mojang.com/browse/MCPE-121660))
- Bonemealing Small Dripleaves now creates Big Dripleaves of a random height between 1-5
- Changed which blocks some world generation features can replace with Moss blocks and Lush Ground:
  - Moss blocks can replace: Dirt, Podzol, Rooted Dirt, Stone, Cave Vines
  - Lush Ground can replace: Dirt, Podzol, Rooted Dirt, Stone, Cave Vines, Clay, Moss Block, Sand, Gravel
- Moss block bonemealing behavior tweaks:
  - Bonemealing a Moss block can now also replace Grass and Mycelium
  - The maximum radius covered by Moss bonemealing has been reduced by 1
  - The chance of growing vegetation when bonemealing a Moss block has been decreased

### Pointed Dripstone

- If a Stalactite is hanging from a Dripstone block with a water source above, it will slowly grow both the Stalactite from above and a Stalagmite from below
- Growth speed is random but very slow, a single growth step can take several Minecraft days
- A Stalactite will only trigger growth if it is max 7 in length, and if the Stalagmite or floor is max 10 blocks below
- If the stalactite tip is inside water it won't drip, and therefore won't trigger any growth
- If the Stalagmite tip is underwater it won't receive drops, and therefore won't be grown by a dripping Stalactite. Same thing if there is any fluid between the two tips
- A Stalagmite or Stalactite will never grow into a fluid

### Bone Meal

- Bone Meal now makes a sound when used

### Player

- Added distinct damage sounds for burning, freezing and drowning ([MCPE-111645](https://bugs.mojang.com/browse/MCPE-111645))
- Walking sound will now play at positions below y=0 ([MCPE-121807](https://bugs.mojang.com/browse/MCPE-121807))

## Features No Longer Behind the Experimental Toggle

### Powder Snow

- Powder Snow is now available in the Creative inventory in the game, outside of the Experimental Features
- Most mobs cannot walk on Powder Snow, but fall into the block instead
- Mobs inside a block of Powder Snow start to freeze and eventually take damage
- Players can protect themselves from Powder Snow by equipping leather armor
- Buckets can be used to scoop up and place Powder Snow
- Powder Snow blocks are now removed by flowing water and lava ([MCPE-111729](https://bugs.mojang.com/browse/MCPE-111729))
- Foxes can now walk on Powder Snow ([MCPE-116836](https://bugs.mojang.com/browse/MCPE-116836))
- Exiting a world while being slowed down from freezing will no longer keep the Character slowed after rejoining ([MCPE-117814](https://bugs.mojang.com/browse/MCPE-117814))
- Powder Snow now only applies the freeze component to entities server-side

### Glow Lichen

- Glow Lichen is now available outside the Caves & Cliffs experiment
- Glow Lichen can now be placed with all six faces set
- Glow Lichen no longer generates floating in air
- Glow Lichen can no longer exist with no faces present

### Features and Bug Fixes

- Fixed invite icon remaining on start screen after signing out of Microsoft account

### Accessibility Features

- Fixed a bug where Text-to-speech read the wrong text when displaying toasts

### Commands

- Fixed issue where /structure delete command is listed in the middle of both /structure load commands ([MCPE-114022](https://bugs.mojang.com/browse/MCPE-114022))
- Fixed issue where the /stopsound command crashes/freezes the game completely ([MCPE-120336](https://bugs.mojang.com/browse/MCPE-120336))

### Gameplay

- Renamed Structure Blocks will no longer have the incorrect data mode on creation ([MCPE-41625](https://bugs.mojang.com/browse/MCPE-41625))

### Graphical

- Cubemap no longer blinks when loading the game, loading into a world or leaving a world ([MCPE-103842](https://bugs.mojang.com/browse/MCPE-103842))
- Fixed Strider, Hoglin, Zoglin, Piglin, Piglin Brute Spawn Eggs turning red when quick-moved inside any Inventory in RenderDragon builds
- Fixed enchantment glint shape of Charged Bow and Crossbow icons in RenderDragon builds

### Items

- Using an axe on Wood blocks turns them into Stripped Wood blocks ([MCPE-105998](https://bugs.mojang.com/browse/MCPE-105998))
- Fixed items playing “attack” and “using” animations at the same time on touch input ([MCPE-117133](https://bugs.mojang.com/browse/MCPE-117133))

### Vanilla Parity

- Critical hit particles now generate around a mob instead of under it ([MCPE-39599](https://bugs.mojang.com/browse/MCPE-39599))

## Technical Updates

### Actors

- Internal state flag CAN_RIDE_TARGET that was stopping interactions with items will be properly set/cleared when looking at a mob that cannot be ridden

### General

- Added two new variables to the biomes_client.json file: "remove_all_prior_fog" and "inherit_from_prior_fog",which control fog merging and/or inheritance
- "remove_all_prior_fog", when true, will clear all previous fog definitions stored on the stack, making the current pack the new "starting point" for fogs
- "inherit_from_prior_fog", when true, will merge a biome's fog definition with matching biomes on the stack then create a new merged definition for it
- transparentattachable tag should only affect rendering in first person camera perspective

### Scoreboards

- Fixed a crash that sometimes happened when an entity with a scoreboard value was removed from the level

### Stability and Performance

- Added content warnings for invalid map item parent id caused by the outdated Marketplace world templates
