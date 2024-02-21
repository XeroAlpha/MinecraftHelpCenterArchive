---
title: Minecraft Beta - 1.17.20.20 (Xbox One/Windows 10/Android)
date: 2021-06-23T13:58:30Z
updated: 2021-06-23T17:07:33Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4403617652109-Minecraft-Beta-1-17-20-20-Xbox-One-Windows-10-Android
---

**Posted:** 23 June 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at [aka.ms/CavesCliffsFeedback](https://aka.ms/CavesCliffsFeedback), and search and reports any new bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

![bamboo_sword_16x9.jpg](https://feedback.minecraft.net/hc/article_attachments/4403617609997/bamboo_sword_16x9.jpg)

## **Features and Bug Fixes** 

**World Settings** 

- Added the "Respawn Blocks Explode" game rule, which can be used to prevent Respawn Anchors and Beds from exploding ([MCPE-76687](https://bugs.mojang.com/browse/MCPE-76687))  

**Caves And Cliffs** 

- Worlds with the Caves & Cliffs experimental toggle enabled are now more likely to have the same default world spawn position as worlds without the experiment using the same seed ([MCPE-127708](https://bugs.mojang.com/browse/MCPE-127708))  

**Vanilla Parity** 

- Monster spawning in the Nether has been changed to more closely match Java Edition ([MCPE-65762](https://bugs.mojang.com/browse/MCPE-65762))  
  - There will now be a maximum of 15 to 20 mobs around the player in the Nether, instead of 30 to 40 
- Block interaction "click" sounds are now controlled by the "Blocks" volume slider ([MCPE-104983](https://bugs.mojang.com/browse/MCPE-104983))  
- Swapped toggle sounds for levers so that they are now parity with Java Edition ([MCPE-30379](https://bugs.mojang.com/browse/MCPE-30379)) 

**General** 

- Fixed a bug where the contents of a Shulker Box are deleted when dyeing from the recipe tab ([MCPE-131809](https://bugs.mojang.com/browse/MCPE-131809))
- Swords now break Bamboo in a single swing ([MCPE-64013](https://bugs.mojang.com/browse/MCPE-64013))
- Disabled biome tinting for Spruce and Birch Leaves ([MCPE-128996](https://bugs.mojang.com/browse/MCPE-128996))
- Using a Powder Snow Bucket on a Cauldron filled with Powder Snow no longer creates a new Powder Snow block ([MCPE-131177](https://bugs.mojang.com/browse/MCPE-131177))
- Using a Water Bucket on a fully filled Cauldron now produces the correct sound ([MCPE-131177](https://bugs.mojang.com/browse/MCPE-131177))  
- Lava Buckets can now be emptied into a Cauldron filled with Lava
- Cave Vines can now be pollinated by Bees ([MCPE-127821](https://bugs.mojang.com/browse/MCPE-127821))
- Enchantment Tables now emit light level 7 ([MCPE-130868](https://bugs.mojang.com/browse/MCPE-130868))
- The falling position of Pointed Dripstone is no longer slightly offset ([MCPE-119548](https://bugs.mojang.com/browse/MCPE-119548))
- Powder Snow can now be collected with a Dispenser ([MCPE-127564](https://bugs.mojang.com/browse/MCPE-127564))
- Placing a Sign on Rooted Dirt now correctly opens the text editor ([MCPE-129280](https://bugs.mojang.com/browse/MCPE-129280))
- Target Blocks now conduct Redstone signals ([MCPE-75034](https://bugs.mojang.com/browse/MCPE-75034))
- Message/tell commands no longer fail when cheats are not activated ([REALMS-7760](https://bugs.mojang.com/browse/REALMS-7760))
- Teleporting a mob between dimensions no longer causes the mob to despawn ([MCPE-127414](https://bugs.mojang.com/browse/MCPE-127414))
- Fixed offhand Shields clipping into players’ arms while in third-person perspective ([MCPE-122672](https://bugs.mojang.com/browse/MCPE-122672))
- Minecart with Chest will now copy over its chest contents when pick blocked
- Soul Speed Boots can now be unequipped properly after losing durability ([MCPE-106367](https://bugs.mojang.com/browse/MCPE-106367))
- Baby Goats no longer have horns ([MCPE-123253](https://bugs.mojang.com/browse/MCPE-123253))
- Diamond Pickaxes found in Hoglin Stable chests are now enchanted ([MCPE-129750](https://bugs.mojang.com/browse/MCPE-129750))
- Bubble Columns are now placed properly when loaded with a Structure Block ([MCPE-97027](https://bugs.mojang.com/browse/MCPE-97027))  

**Sounds** 

- Amethyst walking sounds are now affected by the "Player" audio setting  
- Deepslate walking sounds are now affected by the "Player" audio setting  
- Moss Block walking sounds are now affected by the "Player" audio setting  
- Sounds of moving in/on Powder Snow are now affected by the "Player" audio setting  
- Jumping and landing on blocks have now their sounds affected by the "Player" audio slider ([MCPE-116135](https://bugs.mojang.com/browse/MCPE-116135))
- Dripstone drip sounds are now affected by the "Block" audio slider  
- Turtle Eggs no longer produce the Bone Meal sound when placed on Sand ([MCPE-127189](https://bugs.mojang.com/browse/MCPE-127189))  
- Big Dripleaf now has a distinct tilt up sound ([MCPE-123488](https://bugs.mojang.com/browse/MCPE-123488))  

**User Interface** 

- The Sign In dialog is no longer shown on a split-screen game to anyone other than the primary player on PlayStation 4  
- A debug string is no longer shown for how to open chat ([MCPE-128955](https://bugs.mojang.com/browse/MCPE-128955))  

 

## **Technical Updates** 

**Fixes** 

- 'behavior.knockback_roar' now has a vertical and horizontal strength value   

**Data-Driven Items** 

- Added required toggle to component item documentation, and to content error  

**GameTest Framework (Experimental)** 

- GameTest 
  - Added helper method spawnAtLocation(location : Location) : Entity - Spawns an entity at the given Location 
  - Added helper method walkToLocation(mob : Entity, location : Location, speedModifier : number) : Commands an entity to move to the given Location 
  - Added method assertCanReachLocation(mob : Entity, location : BlockLocation, bool canReach) - Asserts that the given mob can reach the target block location 
- Events 
  - Added event World.events.beforeExplosion - Fires before an explosion occurs 
  - Added event World.events.explosion - Fires when an explosion occurs 
  - Added event World.events.explodeBlock - Fires when a block breaks due to an explosion 
  - Added event World.event.beforeActivatePiston - Fires before a piston is activated 
  - Added event World.event.activatePiston - Fires when a piston is activated 
- Block 
  - Added method getDimension() : Dimension 
- BlockPistonComponent 
  - Read-only property attachedBlocks - Returns an array containing the BlockLocation of each block attached to the piston 
  - Read-only property isMoving - Returns true if the piston is expanding or retracting 
  - Read-only property isExpanded - Returns true if the piston is fully expanded 
  - Read-only property isExpanding - Returns true if the piston is expanding 
  - Read-only property isRetracting - Returns true if the piston is retracting 
  - Read-only property isRetracted - Returns true if the piston is fully retracted
