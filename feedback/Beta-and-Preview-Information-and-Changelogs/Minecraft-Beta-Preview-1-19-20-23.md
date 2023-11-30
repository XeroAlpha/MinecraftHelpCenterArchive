---
title: Minecraft Beta & Preview - 1.19.20.23
date: 2022-07-20T13:37:29Z
updated: 2022-07-20T20:09:27Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/7814091998989-Minecraft-Beta-Preview-1-19-20-23
---

**Posted:** 20th July 2022

## **Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

![A Minecraft screenshot showing increased sculk patches in an Ancient City.](https://feedback.minecraft.net/hc/article_attachments/7814071288845/beta19U2_3_1600x900.jpg)

 

Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/) and send us [your feedback](https://aka.ms/MinecraftBetaFeedback).

# **Features and Bug Fixes**

## **Accessibility Features**

- D-Pad Left can now be held down again to move the cursor left in menus ([MCPE-155976](https://bugs.mojang.com/browse/MCPE-155976))

## **Blocks**

- Reduced Sculk Catalyst experience drop from 20 to 5
- Mangrove Log, Mangrove Wood, and Stripped Mangrove Wood can now be used to craft a Campfire with Charcoal ([MCPE-157271](https://bugs.mojang.com/browse/MCPE-157271))

## **Deep Dark**

- Ancient Cities have more frequent Sculk Patch generation ([MCPE-154229](https://bugs.mojang.com/browse/MCPE-154229))
- Sculk Patch Features can now be placed on additional block types ([MCPE-156669](https://bugs.mojang.com/browse/MCPE-156669))

## **Gameplay**

- Player textures and UI elements should no longer turn pink after playing for an extended period time on highly populated servers ([MCPE-105487](https://bugs.mojang.com/browse/MCPE-105487))
- Instantaneous effects (Potions, Tipped Arrows) can no longer be applied to dead mobs and players
- Player no longer takes damage from entering a Nether portal if it is placed at Y=-21 or below ([MCPE-154888](https://bugs.mojang.com/browse/MCPE-154888))

## **General**

- So Below music track now plays in Basalt Deltas ([MCPE-70890](https://bugs.mojang.com/browse/MCPE-70890))
- Fixed an issue where scores on scoreboards were not being ordered properly ([MCPE-141427](https://bugs.mojang.com/browse/MCPE-141427))

## **Items**

- Fixed a bug where fishing hooks would drop loot when killed with the /kill command ([MCPE-142329](https://bugs.mojang.com/browse/MCPE-142329))

## **Mobs**

- Fixed a bug causing baby mobs with the *minecraft:behavior.sleep* goal to have a shrunken hitbox ([MCPE-46040](https://bugs.mojang.com/browse/MCPE-46040))
- Allays and Bees are now less likely to get stuck in non-full blocks ([MCPE-155777](https://bugs.mojang.com/browse/MCPE-155777))
- Wardens can now detect a player sneaking on top of a Sculk Sensor ([MCPE-155804](https://bugs.mojang.com/browse/MCPE-155804))
- Warden can now let itself fall up to 20 blocks down, instead of just 3 ([MCPE-158304](https://bugs.mojang.com/browse/MCPE-158304))
- Allays can now pick up armor pieces with a different durability than the one they are holding ([MCPE-158339](https://bugs.mojang.com/browse/MCPE-158339))

## **Player**

- Player’s Soul Speed is now properly activated and de-activated on Soul Sand ([MCPE-157152](https://bugs.mojang.com/browse/MCPE-157152))
- Fixed a bug causing health_boost to display incorrect health values, causing the player to turn invisible and unable to interact with the world on dying

## **Stability and Performance**

- Fixed a bug which could cause mobs to not load into the world if their saved y-position was greater than or equal to 25

### **Audio**

- When trading, the Villager plays the correct sound based on the item in the input slot ([MCPE-152555](https://bugs.mojang.com/browse/MCPE-152555))

## **Vanilla Parity**

- Skulls in Ancient Cities now better match the orientation they have in Java Edition ([MCPE-153547](https://bugs.mojang.com/browse/MCPE-153547))
- Goat Horn sound is now placed in the Jukebox/Note Blocks sound category in Settings ([MCPE-154885](https://bugs.mojang.com/browse/MCPE-154885))

# **Technical Updates**

## **Add-Ons**

- Enable event filters in the root definition to be evaluated independent of sequence or randomize when a *format_version* of 1.19.20 or higher is specified

## **Stability and Performance**

- Fixed a crash when exploring multiple categories in Marketplace on Xbox and PlayStation

# **Experimental Technical Features**

## **GameTest Framework**

- System Events
  - Added event *beforeWatchdogTerminate*- Shuts down the server when a critical scripting exception occurs (e.g. script hang). Can be canceled to prevent shutdown
  - Added enum *WatchdogTerminateReason*- Specifies the reason for watchdog termination
  - Added new properties to *properties*for watchdog configuration on Bedrock Dedicated Server
    - *script-watchdog-enable-exception-handling*- Enables watchdog exception handling via the *events.beforeWatchdogTerminate* event (default = true)
    - *script-watchdog-enable-shutdown*- Enables server shutdown in the case of an unhandled watchdog exception (default = true)
    - *script-watchdog-hang-exception*- Throws a critical exception when a hang occurs (default = true)

## **General**

- Removed the component *minecraft:unwalkable*
- Renamed *'minecraft:explosion_resistance'* to *'minecraft:destructible_by_explosion'* and restructured the component to be either defined as a boolean or as an object
  - Setting the component to true will give the block the default *explosion_resistance* and setting it to false will make the block indestructible by explosion
  - Setting the component as an object will let users define the resistance of the block to a base explosion
