---
title: Minecraft Beta & Preview - 1.19.20.20/21
date: 2022-06-29T13:04:55Z
updated: 2022-08-09T16:43:31Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/7285705024909-Minecraft-Beta-Preview-1-19-20-20-21
hash:
  mangrove-azalea-leaves: mangrove--azalea-leaves
  stability-performance: stability--performance
---

**Posted:** 29<sup>th</sup> June 2022

**Update 30<sup>th</sup> June 2022:** The Preview on iOS will be version 1.19.20.21, but has the same features as mentioned below

## **Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

![A Minecraft Screenshot, showing a character near a Mangrove swamp and a house](https://feedback.minecraft.net/hc/article_attachments/7285452875533/beta19U2_1_16x9_alex.jpg)

Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/) and send us [your feedback](https://aka.ms/MinecraftBetaFeedback).

**Please note** that there will not be a Preview/Beta release for the week of July 4, 2022.  
  

# **Features and Bug Fixes**

## **Vanilla Parity**

- Zombies now have a 10% chance to be able to break doors on hard difficulty ([MCPE-79636](https://bugs.mojang.com/browse/MCPE-79636))
- Removed "Wood" from the names of Mangrove Wood Planks, Stairs, and Slabs ([MCPE-156791](https://bugs.mojang.com/browse/MCPE-156791))
- The Wandering Trader's spawning now matches Java Edition and will no longer spawn in water, lava, or underground ([MCPE-46911](https://bugs.mojang.com/browse/MCPE-46911))
- End Portal Frame Block is now named "End Portal Frame" instead of "End Portal" ([MCPE-76821](https://bugs.mojang.com/browse/MCPE-76821))
- Tadpoles flopping around while on land now more closely match Java Edition and fishes in speed ([MCPE-154316](https://bugs.mojang.com/browse/MCPE-154316))
- Polar Bears no longer panic when attacked
- Piglins will now stop attacking if the player puts on Gold Armor ([MCPE-65516](https://bugs.mojang.com/browse/MCPE-65516))

### **Spectator Mode (Experimental)**

- Players can now place blocks where a spectator is hovering
- Players now have their hands back when they are holding a Map when they have one item in offhand and one in main hand. Curious how they held it without hands... ([MCPE-100259](https://bugs.mojang.com/browse/MCPE-100259))

## **Audio**

- Fixed a bug that caused the new Wild Update music to not play in the Wild Update biomes when in Creative mode

## **Blocks**

- Twisting Vines and Weeping Vines with no support now pop even when the random ticking speed is set to 0 ([MCPE-69305](https://bugs.mojang.com/browse/MCPE-69305))
- Sculk Catalyst now blooms when a mob with no experience dies next to it
- Hanging Mangrove Propagules no longer drop a Propagule item when Silk Touched if not at max growth ([MCPE-156821](https://bugs.mojang.com/browse/MCPE-156821))
- Muddy Mangrove Roots can now be placed sideways ([MCPE-153721](https://bugs.mojang.com/browse/MCPE-153721))
- Hanging Mangrove Propagule no longer changes color when certain blocks are placed nearby ([MCPE-156570](https://bugs.mojang.com/browse/MCPE-156570))

## **Gameplay**

- Fixed an issue that could occur when travelling through a nether portal to the overworld ([MCPE-158167](https://bugs.mojang.com/browse/MCPE-158167))

## **VR**

- The ‘Toggle Perspective’ hint now shows the player's assignment instead of the default assignment

## **Mangrove & Azalea Leaves**

- Mangrove and Azalea Leaves no longer prevent tree growth ([MCPE-154980](https://bugs.mojang.com/browse/MCPE-154980))

## **Mob Effects**

- Fixed an issue with extra health from Health Boost not persisting after exiting the world ([MCPE-153504](https://bugs.mojang.com/browse/MCPE-153504))
- Fixed an issue that caused FOV to stutter when sprinting while the player had a speed effect applied

## **Mobile Controls**

- Added support for middle mouse click on iOS

## **Mobs**

- Jobless Zombie Villagers are no longer unable to ride Minecarts and Boats ([MCPE-76831](https://bugs.mojang.com/browse/MCPE-76831))
- Ravager is now able to destroy Mangrove Leaves, Azalea, Azalea Leaves, Cave Vines, Dripleaves, Spore Blossoms, and Hanging Roots ([MCPE-156551](https://bugs.mojang.com/browse/MCPE-156551)) ([MCPE-125322](https://bugs.mojang.com/browse/MCPE-125322))

## **Sculk Sensor**

- If two vibrations are emitted at the same time, Sculk Sensors will now react to the closest one ([MCPE-155793](https://bugs.mojang.com/browse/MCPE-155793))
- If two vibrations are emitted at the same time and at the same distance, Sculk Sensors will now react to the one with the highest frequency
- Sculk Sensors now detect a Creeper exploding with a frequency of 15
- Sculk Sensors now detect an End Crystal exploding with a frequency of 15 ([MCPE-153733](https://bugs.mojang.com/browse/MCPE-153733))
- Sculk Sensors now detect a Fish being let out of a Bucket with a frequency of 12
- Sculk Sensors now detect a TNT being fired out of a Dispenser with a frequency of 12

## **Stability & Performance**

- Fixed a crash that could occur when teleporting and killing an entity in the same tick
- Entities that die completely now have their data removed from the world file ([MCPE-155283](https://bugs.mojang.com/browse/MCPE-155283))
- Fix potential crash when returning to the Overworld from the Nether or The End (
- The game no longer crashes when entering Coin Starter Bundle Screen

## **User Interface**

- Redesigned the toggle switches to make it easier to distinguish between the on and off states
- Saddled Pig's tooltip changed to "Ride" instead of "Mount" to match other ridable mobs

### **Trades**

- Fixed an issue that prevented Fisherman Villagers from offering to buy Boats at max level

# **Technical Updates**

## **General**

- Fixed bugs where client state could get out of sync with server if using an item is cancelled or fails

## **Bucket Item**

- Releasing a bucketed custom mob now spawns the correct type of mob
- Fixed the order in which a bucketed mob is created when released, which means any Actor Properties on it will load correctly

## **Dedicated Server**

- Added a server property *disable-player-interaction* which informs clients that they should ignore other players when interacting with the world
- Added a new dedicated server property, "chat-restriction", that can be modified in the "server.properties" file to restrict the chat for all players connecting to the server. The property's possible values are "None", "Dropped", and "Disabled". See the default file for more information

## **Graphical**

- With data-driven block tessellation, geometry box pivot-base rotation now rotates around the correct pivot point
- Add Content warnings for large icons for texture tessellation (eg. objects in hand)

<!-- -->

-  

# **Experimental Features**

## **Actor Properties**

- Added Content Errors for when there are too many properties on the actor (more than 32) or when a string enum name is too long (more than 32 characters)
- Restored ability to use a Molang expression string for default values of Actor Properties (These are primarily useful for random starting values)

## **GameTest Framework**

- Performance Watchdog
  - Added a performance watchdog that monitors GameTests for slow-running scripts
  - Executing a slow-running script will result in content log warnings
  - Additionally, long script hangs (more than 3 seconds in a single tick) will result in an exception
  - Added new properties to propertiesfor watchdog configuration on Dedicated Server
    - script-watchdog-enable- Enables the watchdog (default = true)
    - script-watchdog-hang-threshold- Sets the watchdog threshold for single tick hangs (default = 3000 ms)
    - script-watchdog-spike-threshold- Sets the watchdog threshold for single tick spikes (default = 100 ms)
    - script-watchdog-slow-threshold- Sets the watchdog threshold for slow scripts over multiple ticks (default = 2ms)
  - Updated mojang-minecraft-uiforms to respond when the client was unable to show a modal form
    - Renamed isCanceledfield to canceled
    - Added cancelationReasonfield
    - Added FormCancelationReasonenum
  - ScoreboardObjectiveDisplayOptions
    - Added 'ScoreboardObjectiveDisplayOptions' class
    - Added read-only property 'Objective: objective'
    - Added read-only property 'ObjectiveSortOrder: sortOrder'
  - Scoreboard
    - Added function 'removeObjective(objectiveId: string \| Objective): void' - Untracks an objective
    - Added function 'addObjective(objectiveId: string, displayName: string): Objective' - Creates and objective to be tracked, identified with objectiveId and displayed on the screen with displayName
    - Added function 'getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions' - Gets objective and sort order contained in the DisplayObjective slot specified by displaySlotId
    - Added function 'setObjectiveAtDisplaySlot(displaySlotId: string, ScoreboardObjectiveDisplayOptions: scoreboardObjectiveDisplayOptions): Objective' - Sets the objective and sort order of the display slot, as specified by displaySlotId
    - Added function 'clearObjectiveAtDisplaySlot(displaySlotId: string): Objective' - Clear's the DisplayObjective of the objective it is currently displaying
  - Block
    - Added Block SignComponent that allows for retrieving of the value of sign text - Accessible from getComponent("sign")on sign blocks
  - BlockSignComponent
    - Added read-only property text: string- Gets the sign text

## **General**

- Limit the number of elements in the conditionsfield of the minecraft:part_visibility to 64
- Renamed minecraft:aim_collisionblock component to minecraft:selection_box 
- Renamed the 'minecraft:block_light_emission' component to 'minecraft:light_emission' and changed its accepted value type from float to int
- Renamed 'minecraft:destroy_time' to 'minecraft:destructible_by_mining' and restructured the component to be either defined as a boolean or as an object
  - Setting the component to true will give the block the default destroy time and setting it to false will make the block indestructible by mining
  - Setting the component as an object will let users define the number of seconds needed to destroy the block with base equipment
- Changed the minecraft:frictioncomponent to represent friction of block instead of movement
