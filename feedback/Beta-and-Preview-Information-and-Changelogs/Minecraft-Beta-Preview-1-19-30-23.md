---
title: Minecraft Beta & Preview - 1.19.30.23
date: 2022-08-24T14:00:53Z
updated: 2022-08-29T18:20:34Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/8653419896589-Minecraft-Beta-Preview-1-19-30-23
---

**Posted:** 25th August 2022

## **Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

![A Minecraft screenshot, featuring a Villager and Allays in a village, with pink sheep in a pen.](https://feedback.minecraft.net/hc/article_attachments/8653339179533/beta19U3_4_16x9.jpg)

Here's a list of wh is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](https://bugs.mojang.com/) and send us [your feedback](https://aka.ms/MinecraftBetaFeedback).  
  

# **Features and Bug Fixes**

## **Vanilla Parity**

### **Spectator Mode (Experimental)**

- Capes are no longer rendered while in Spectator Mode ([MCPE-156929](https://bugs.mojang.com/browse/MCPE-156929))
- Spectator players in Lava Cauldrons no longer display the burning animation ([MCPE-160331](https://bugs.mojang.com/browse/MCPE-160331))

## **Blocks**

- Banners now spawn correctly in newly generated structures ([MCPE-160696](https://bugs.mojang.com/browse/MCPE-160696))

## **Gameplay**

- Player textures and UI elements should no longer turn pink after playing for an extended period time on highly populated servers ([MCPE-105487](https://bugs.mojang.com/browse/MCPE-105487))
- Fixed issue where player would see inside of Top Snow when diving into it while wearing Elytra

## **Graphical**

- Fixed a bug where the name tag background was slightly offset ([MCPE-160254](https://bugs.mojang.com/browse/MCPE-160254))

## **Performance and Stability**

- Fixed a crash that could occur when resuming the game on Xbox

## **Items**

- It is no longer possible to get an aged Sapling in the inventory by block-picking
- Item stacks now are merged together after assigned tick threshold

## **Mobile Controls**

- Resolves issue in new Touch Controls where the sprint button could not be toggled when standing still
- Added logic to automatically toggle off sprint button when player releases the on-screen joystick

## **Mobs**

- Reduced the Enderman's teleport range to 32x32x32 to ensure that it cannot despawn itself by teleporting ([MCPE-152268](https://bugs.mojang.com/browse/MCPE-152268))
- Reverted a change to Drowned spawning, and they again spawn in Warm Ocean biomes to match the Java Edition

## **User Interface**

- Added a missing settings button on packs in the updated Create New World screen
- Added a new disconnection error message - "Unable to connect, please restart your client"
- Added a paste button to the Command Block screen
- Updated splash texts
- Fix issue causing messages with non-unicode characters to have incorrect spacing

## **General**

- Fixed a bug where deleting cloud synced worlds would not delete the cloud version of the world when the player deletes the world locally
- EDU Toggle: NPC names default to only being displayed while looking at them

## **Audio**

- Fixed PS4 audio stuttering issues while framerate is low ([MCPE-158902](https://bugs.mojang.com/browse/MCPE-158902))

# **Technical Updates**

## **General**

- Fixed a crashing issue related to undyed Shulkers

## **Commands**

- The '/execute at' and '/execute as' commands will now execute at the correct relative rotation ([MCPE-156277](https://bugs.mojang.com/browse/MCPE-156277))
- '/execute at @e run kill @e' no longer crashes the game when there are items on the ground ([MCPE-161029](https://bugs.mojang.com/browse/MCPE-161029))
- Added chat output when entities are skipped by "/ride summon_ride no_ride_change" ([MCPE-129486](https://bugs.mojang.com/browse/MCPE-129486))

# **Experimental Technical Features**

## **Actor Properties**

- Add a content error when default or set_property expressions include side-effects, such as Molang variable assignment

## **GameTest Framework**

- Memory Watchdog
  - `script-watchdog-memory-warning-` Produces a content log warning when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the warning. (default = 100)
  - `script-watchdog-memory-limit-` Saves and shuts down the world when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the limit. (default = 250)
- Player
  - setVelocity will now throw an exception when called on player types
- Watchdog
  - Increased slow code warning threshold from 2 ms to 6 ms
- Items
  - Renamed `Items` to `ItemTypes`
- ItemTypes
  - Added `function getAll(): ItemTypeIterator-` Returns an iterator of all available item types
