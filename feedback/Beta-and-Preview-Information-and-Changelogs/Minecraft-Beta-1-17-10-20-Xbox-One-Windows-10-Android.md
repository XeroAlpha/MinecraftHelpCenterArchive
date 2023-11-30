---
title: Minecraft Beta - 1.17.10.20 (Xbox One/Windows 10/Android)
date: 2021-05-26T14:33:20Z
updated: 2021-05-27T17:15:06Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - beta_changelog
  - caves&cliffs
link: https://feedback.minecraft.net/hc/en-us/articles/360061498232-Minecraft-Beta-1-17-10-20-Xbox-One-Windows-10-Android-
---

**Posted:** May 26, 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at [aka.ms/CavesCliffsFeedback](https://aka.ms/CavesCliffsFeedback), and search and reports any new bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).  
  

**Known Issue: **

- May 27, 2021 - The team is aware of a crash that occurs when breaking blocks while the Caves & Cliffs experimental toggle is enabled. While we work on a fix, avoid playing on worlds with the experimental toggle.  
    

![axolotl_crystal.jpg](https://feedback.minecraft.net/hc/article_attachments/360096550071/axolotl_crystal.jpg)

 

## **Features and Bug Fixes**

**Vanilla Parity**

- Thunderstorms now happen as often as on Minecraft: Java Edition ([MCPE-72798](https://bugs.mojang.com/browse/MCPE-72798))

**Axolotl**

- Axolotls no longer move their tails while playing dead ([MCPE-123309](https://bugs.mojang.com/browse/MCPE-123309))
- Feeding Axolotls with Bucket of Tropical Fish now returns Water Bucket instead of empty Bucket ([MCPE-127382](https://bugs.mojang.com/browse/MCPE-127382))
- Axolotl's hitbox is now smaller to match the size of the mob
- Guardians and Elder Guardians now attack Axolotl on sight
- Drowned now attack Axolotls on sight

**Azalea**

- Azalea can now be bone-mealed when placed on Clay
- Using Pick Block on Azalea Leaves and Flowering Azalea Leaves now results in the correct blocks being picked ([MCPE-128092](https://bugs.mojang.com/browse/MCPE-128092))

**Copper Ore**

- Copper Ore is now placed after other overworld ores in the Creative inventory ([MCPE-119724](https://bugs.mojang.com/browse/MCPE-119724))

**Deepslate**

- Deepslate is now placed after other stones in the Creative inventory ([MCPE-127592](https://bugs.mojang.com/browse/MCPE-127592))

**Glow Item Frame**

- Glow Item Frame is now placed after regular Item Frame in the Creative inventory ([MCPE-117532](https://bugs.mojang.com/browse/MCPE-117532))

**Hanging Roots**

- Hanging Roots are now destroyed by water ([MCPE-121676,](https://bugs.mojang.com/browse/MCPE-121676) [MCPE-127677](https://bugs.mojang.com/browse/MCPE-127677))

**Lightning Rod**

- Lightning Rod no longer breaks falling blocks that land on it ([MCPE-116545](https://bugs.mojang.com/browse/MCPE-116545))

**Rooted Dirt**

- Rooted Dirt texture is now randomly rotated, matching the behaviour of the regular Dirt Block ([MCPE-123197](https://bugs.mojang.com/browse/MCPE-123197))

**Character Creator**

- Items can now be previewed in the Character Creator and equipped using the Equip button
- Added Equip button to Classic Skins and Capes tab

**Commands**

- '/title clear' now correctly clears the title and subtitle from the HUD ([MCPE-97636](https://bugs.mojang.com/browse/MCPE-97636))

**Dressing Room**

- Profile screen reload button is now localized

**Gameplay**

- Fixed split-screen players not able to rename items on Anvils ([MCPE-108405](https://bugs.mojang.com/browse/MCPE-108405))

**Graphical**

- Projectiles such as Snowballs and Eggs no longer cast shadows

**Items**

- All dropped items now have a similar floating height
- Data-driven items now swing faster when not targeting blocks ([MCPE-119702](https://bugs.mojang.com/browse/MCPE-119702))
- Firework Rockets obtained from '/replaceitem' command now have a flight duration ([MCPE-109037](https://bugs.mojang.com/browse/MCPE-109037))
- Firework Stars obtained from '/replaceitem' command now have proper color values ([MCPE-109037](https://bugs.mojang.com/browse/MCPE-109037))

**Lush Caves**

- Small Dripleaf now only drops itself when broken with Shears

**Skeleton**

- Skeletons now turn into Strays after 20 seconds in Powder Snow, reduced from 45 seconds

**Powder Snow**

- Burning mobs can no longer destroy Powder Snow when the Mob Griefing gamerule is disabled ([MC-221842](https://bugs.mojang.com/browse/MC-221842))

**User Interface**

- Hotbar item tooltip duration now scales with the length of the tooltip's text
- Added a new accessibility icon in the Settings menu

 

## **Technical Updates**

**Gameplay**

- Loot chests with Seed=0 now correctly randomize if placed on the same coordinates. Note that pickblocking a Vanilla loot chest before opening it will now result in identical loot in each copy unless you set the seed to 0 in the NBT

**Data Driven Mobs**

- The Ender Dragon rendering and animations are now fully data-driven
- The Ender Crystal rendering and animations are now fully data-driven

**Graphics**

- Graphics hardware that supports a maximum D3D11 feature level of 9_3 or below are no longer supported

**Stability and Performance**

- Added better error handling for json parsing. Also added several new content errors for item parsing as well as for loot tables

**Actors**

- Incoming client-sync properties for newly seen types will properly register with client-side Actor Property Manager groups

**Molang**

- "query.wing_flap_position" now works with the Ender Dragon
- Added "query.show_bottom" - a query for determining whether or not the entity's bottom is rendered
- Added "query.death_time" - a query for determining the elapsed ticks since a mob started dying
- Added "math.min_angle" - a math expression for minimizing the angle magnitude (in degrees) into the range \[-180, 180)

**Experimental Features**

**GameTest Framework**

- Updated the '/clearall ' command to also clear tests outside of loaded areas
- Dimension
  - getEntitiesAtBlockLocation(location : BlockLocation) : Entity\[\] - Returns an array of all entities at the given block location
  - spawnEntity(identifier : String, location : BlockLocation) : Entity - Spawns an entity with the given identifier at the given block location
  - \[Removed\] function getName()
  - property id : String - Gets the entity's identifier
  - property nameTag : String - Gets or sets the entity's name tag

<!-- -->

- Player
  - property name : String - Gets the player's name
  - method getPlayers() : Player\[\] - Returns all players in the server

<!-- -->

-
