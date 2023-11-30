---
title: Minecraft Beta & Preview - 1.20.30.21
date: 2023-08-09T14:40:18Z
updated: 2023-08-11T08:24:29Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/18365310423565-Minecraft-Beta-Preview-1-20-30-21
---

**Posted:** 9 August 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A pillager standing in a pillager outpost in a Cherry Grove biome, in Minecraft](https://feedback.minecraft.net/hc/article_attachments/18365286259213)

We have some more fixes and tweaks ready for you in this week’s Minecraft Preview and Beta. Please report and upvote any bugs you encounter at* *[bugs.mojang.com](http://bugs.mojang.com/). Here’s a list of the latest changes:

# **Features and Bug Fixes**

## **Audio**

- Pigs now emit sounds when transformed into Zombified Piglins ([MCPE-169557](https://bugs.mojang.com/browse/MCPE-169557)) 
- Using Shears to carve Pumpkins now produces a carving sound like in Java Edition
- Hoglins now have their own sound when transforming into Zoglins ([MCPE-87379](https://bugs.mojang.com/browse/MCPE-87379)) 
- Sound is now consistently played when an item is dropped into Lava ([MCPE-96015](https://bugs.mojang.com/browse/MCPE-96015))
- Sound is no longer played sometimes when Netherite items are dropped into Lava ([MCPE-95872](https://bugs.mojang.com/browse/MCPE-95872)) 
- Snow Golems now play a sound when they throw Snowballs ([MCPE-119083](https://bugs.mojang.com/browse/MCPE-119083)) 
- Husks now play sounds when converting to Zombies underwater 

## **Marketplace**

- Fixed worlds downloaded from Realms not loading packs correctly

## **Gameplay**

- The game no longer crashes due to running out of rendering resources while entering a world through the End Portal back to the Overworld ([MCPE-139021](https://bugs.mojang.com/browse/MCPE-139021))
- The horizon no longer changes color when the player is standing under blocks ([MCPE-85888](https://bugs.mojang.com/browse/MCPE-85888)) 
- Crouch-jumping while aiming forward and holding down the build button will no longer continue to build blocks upwards past where the player is aiming 
- The discount for curing a Zombie Villager no longer increases when the same Villager is reinfected and cured multiple times

## **Village Raids**

- Witches now throw healing and regeneration potions at raiders during village raids

## **Vanilla Parity**

- Players can now toggle flying when crawling or sneaking in Creative Mode 
- Fence Gate icon model in UI and Item Frames now match the Fence Gate Block ([MCPE-44296](https://bugs.mojang.com/browse/MCPE-44296)) 

## **User Interface**

- Updated menu HUD icons for touch controls

## **Structures**

- Pillager Outposts can now generate in Cherry Grove biomes ([MCPE-173323](https://bugs.mojang.com/browse/MCPE-173323))

## **Sculk Vibrations**

- Collecting Fish, Axolotls, and Tadpoles with Buckets now emits vibrations at the right position 
- Applying a Nametag now emits vibrations 
- Evokers summoning Vexes or Fangs now emit vibrations
- Chickens laying eggs now emit vibrations
- Turtles and Frogs laying eggs now emit vibrations 
- Using Bone Meal now emits vibrations
- Sculk Sensors and Sculk Shriekers no longer activate repeatedly when a projectile is stuck in them ([MCPE-172704](https://bugs.mojang.com/browse/MCPE-172704))
- Chiseled Bookshelves now emit vibrations when Books are inserted into them using Hoppers ([MCPE-168887](https://bugs.mojang.com/browse/MCPE-168887)) 
- Extinguishing Fire now emits vibrations 
- Mounting or dismounting a vehicle now emits vibrations 
- Rabbits eating Carrot crops now emit vibrations 
- Foxes eating Sweet Berry Bushes now emit vibrations
- Unequipping armor now emits vibrations at a different frequency than equipping it
- Placing a Banner now emits vibrations 
- Placing a Bamboo Sapling now emits vibrations 
- Placing a Mob Head now emits vibrations
- Placing a Lily Pad now emits vibrations 
- Placing Frogspawn now emits vibrations
- Placing or adding Sea Pickles now emits vibrations 
- Adding a Turtle Egg to already placed ones now emits vibrations of the same frequency as placing a block 
- Destroying a Turtle Egg now always emits vibrations of the same frequency as destroying a block, regardless of how many Turtle Eggs are left
- Turtle Eggs cracking now emit vibrations

# ** Technical Updates**

## **Graphics**

- Added a new experimental toggle to Video menu for players on Windows which reduces input latency; enabling this setting will increase battery consumption

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Fixes this week:

- Fixed infinite gizmo drag and bugs around gizmo drag size, setting it as a limit to 100 units. How this works: Total volume of 100x100x100. Ability to create multiple selections within the bounds of the 100x100x100 total volumes.

## **Stability and Performance**

- The game no longer crashes when it tries to place an invalid custom feature 

# **Experimental Technical Features**

## **API**

- Moved *ProjectileHitBlockAfterEvent* to *1.5.0*
- Moved *ProjectileHitEntityAfterEvent* to *1.5.0*
- Moved *ProjectileHitBlockAfterEventSignal* to *1.5.0*
- Moved *ProjectileHitEntityAfterEventSignal* to *1.5.0*
- Moved *BlockHitInformation* to *1.5.0*
- Moved *EntityHitInformation* to *1.5.0*
  - Moved *spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap)* to *1.5.0*
  - Moved *setColorRGB(variableName: string, color: RGB)* to *1.5.0*
  - Moved *setColorRGBA(variableName: string, color: RGBA)* to *1.5.0*
  - Moved *setFloat(variableName: string, number: number)* to *1.5.0*
  - Moved *setSpeedAndDirection(variableName: string, speed: number, direction: Vector3)* to *1.5.0*
  - Moved *setVector3(variableName: string, vector: Vector3)* to *1.5.0*
- RGB
  - Moved *RGB* to *1.5.0*
  - Moved *RGBA* to *1.5.0*
  - Moved *triggerEvent(eventName: string)* to *1.5.0*
- Renamed *EntityEquipmentInventoryComponent* to *EntityEquippableComponent*

**Events**

- ScriptEventCommandMessageAfterEvent
  - Made *initiator*, *sourceBlock*, and *sourceEntity* optional types

## **Graphical**

- Fixed a crash in the Deferred Technical Preview that could occur while generating terrain 

**Blocks**

- Updated *isSolid*, *isLiquid*, and *isAir* to be properties instead of methods 

## **Items**

- Fixed issue with content errors occurring with the Holiday Creator Features toggle turned on when using a json object version of "max_stack_size", "can_destroy_in_creative", "hover_text_color" 

## **Scripting**

- Using *removeParticipant* is now properly synced with clients ([MCPE-172920](https://bugs.mojang.com/browse/MCPE-172920))
