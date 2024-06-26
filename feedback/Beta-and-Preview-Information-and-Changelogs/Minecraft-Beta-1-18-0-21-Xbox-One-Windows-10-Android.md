---
title: Minecraft Beta - 1.18.0.21 (Xbox One/Windows 10/Android)
date: 2021-10-14T14:44:20Z
updated: 2021-10-14T17:08:17Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4411290325901-Minecraft-Beta-1-18-0-21-Xbox-One-Windows-10-Android
---

**Posted:** 14 October 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

 

![Screen_Shot_10-14-21_at_02.32_PM.JPG](https://feedback.minecraft.net/hc/article_attachments/4411290305037/Screen_Shot_10-14-21_at_02.32_PM.JPG)

 

 

It's time for another Caves & Cliffs Beta! As always, please send your feedback to [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback) and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/).

**Reminder:** We are still tweaking world generation and features may change, please remember **make regular backup copies** of your favourite worlds!

**Android Players:** If you cannot see your worlds, please see [this article](https://help.minecraft.net/hc/en-us/articles/4411299967629) on how to retrieve them.

 

# **Features and Bug Fixes**

### **World Generation**

- Updated ore distribution to make branch mining deep down more rewarding
- Non-cave biomes no longer change with height - so no more savannas in the sky and things like that
- Tweaked the relative size of some biomes to match 1.17 a bit closer
- Increased the average size of most biomes (this also means biomes aren't in the same places as before)
- Fixed some aquifer issues (a side effect of this is that aquifers are in different places now compared to the last beta)
- Slightly increased the frequency of underwater magma
- Increased the amount of dungeons, especially below height 0
- Gravel now generates below height 0
- Villages are now slightly more spread out
- Removed water lake features, as aquifers provide local water levels
- Zombies once again spawn in dripstone caves - Drowned can also spawn there, however
- Goats no longer spawn in stony peaks ​
- Fixed shifted sub-chunks on Caves & Cliffs flat worlds ([MCPE-140428](https://bugs.mojang.com/browse/MCPE-140428))
- Hoodoos now generate in Eroded Badland biomes again ([MCPE-141083](https://bugs.mojang.com/browse/MCPE-141083))
- Strange pillars no longer generate below Eroded Badland biomes ([MCPE-141342](https://bugs.mojang.com/browse/MCPE-141342))
- Water and Lava springs now correctly generate at the expected frequency
- Tweaked Frozen biomes blending
- Canyons are now placed on the same height as on pre-1.18 world generation
- Fixed issue with Copper Ore hanging mid-air in ravines ([MCPE-141189](https://bugs.mojang.com/browse/MCPE-141189))

## **Actors**

- Lightning bolts do not have a shadow anymore ([MCPE-140689](https://bugs.mojang.com/browse/MCPE-140689))

## **Blocks**

- Snow Grass Block and all types of Snow blocks now use similar colors ([MCPE-57022](https://bugs.mojang.com/browse/MCPE-57022))

## **Bone Meal**

- Nether Sprouts once again generate when using Bone Meal on Warped Nylium ([MCPE-139672](https://bugs.mojang.com/browse/MCPE-139672))

## **Gameplay**

- Re-entering a Caves & Cliffs world when in a danger zone at a valid negative Y position no longer teleports player to positive Y ([MCPE-141039](https://bugs.mojang.com/browse/MCPE-141039))
- Copper Ore now drops 2-5 (from 2-3) Raw Copper items ([MCPE-144071](https://bugs.mojang.com/browse/MCPE-144071))
- In the Stonecutter, a Block of Copper can be converted to four Cut Copper ([MCPE-144067](https://bugs.mojang.com/browse/MCPE-144067))

## **Player**

- Fixed player hitbox not resetting after gliding with Elytra ([MCPE-109925](https://bugs.mojang.com/browse/MCPE-109925))
- Fixed player flight with Elytra being cancelled when hitting a wall and taking damage ([MCPE-54031](https://bugs.mojang.com/browse/MCPE-54031))

## **Items**

- Ender Pearls no longer generate as Glow Sticks in Woodland Mansion chests ([MCPE-137440)](https://bugs.mojang.com/browse/MCPE-137440)

## **Mobs**

- Fixed an issue preventing Tropical Fish from spawning in Lush Caves ([MCPE-144070](https://bugs.mojang.com/browse/MCPE-144070))

## **Particles**

- Water drips now trigger splash effects

## **User Interface**

- Renamed some occurrences of "level" in the user interface to the more accurate "world"
- When a value for a stepped slider does not correspond to a step it will display at the closest step
- Replaced the missing "Always Day" option in world settings ([MCPE-137790](https://bugs.mojang.com/browse/MCPE-137790))  
    

## **Vanilla Parity**

- Shield blocking animation now plays smoothly ([MCPE-125951](https://bugs.mojang.com/browse/MCPE-125951))

# **Technical Updates**

## **General**

- Fixed caching support for subchunk requests where it would sometimes not use the cache
- Fixed a versioning error with animation controllers that was causing the wrong schema to be utilized on marketplace worlds with an animation controller version 1.8.0

## **Android**

- Revved Android version to Google API 30

## **Commands**

- Added the '/loot' command with spawn loot overload

# **Experimental Features**

## **GameTest Framework**

- Added deltaTime read only property to TickEvent which represents the time between the last Level tick in seconds
