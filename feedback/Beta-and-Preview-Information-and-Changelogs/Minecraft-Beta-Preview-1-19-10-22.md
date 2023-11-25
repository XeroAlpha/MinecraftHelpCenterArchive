---
title: Minecraft Beta & Preview - 1.19.10.22
date: 2022-06-08T14:34:14Z
updated: 2022-06-08T15:46:46Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/6757843469453-Minecraft-Beta-Preview-1-19-10-22
---

**Posted:** 8th June 2022

## **Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

![Minecraft Allay Mobs](https://feedback.minecraft.net/hc/article_attachments/6757809355277/beta19U1_3_16x9.jpg)

Here\'s a list of what is new in this week\'s Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/) and send us [your feedback](https://aka.ms/MinecraftBetaFeedback).

# **Features and Bug Fixes**

## **Vanilla Parity**

-   Renamed \"Flowered Azalea Leaves\" to \"Flowering Azalea Leaves\"
-   Goat Horn now has the same sound for the "Call" variant as Java Edition ([MCPE-154886](https://bugs.mojang.com/browse/MCPE-154886))
-   The last sound for Goat Horn was renamed from "Resist" to "Dream" to match Java Edition ([MCPE-155059](https://bugs.mojang.com/browse/MCPE-155059))

### **Spectator Mode (Experimental)**

-   While in Spectator Mode, actors in other chunks are no longer culled away

## **Allay**

-   Allays can now follow players through Nether portals ([MCPE-155678](https://bugs.mojang.com/browse/MCPE-155678))

## **Allay Duplication**

-   When an Allay hears a Jukebox playing, it will do a dance animation
-   If the Jukebox stops playing, or if the allay gets too far away from the Jukebox, it will stop dancing
-   If the Allay is given an Amethyst Shard while dancing, it will play a small amethyst sound, make a heart, and duplicate into another Allay
-   After duplication, both Allays will have a 2.5-minute cooldown before being able to duplicate again

## **Deep Dark**

-   Amethyst Clusters are no longer destroyed if attached to a Sculk Sensor

### **Sculk Shrieker**

-   Sculk Shrieker particles are now correctly rendered from behind ([MCPE-153591](https://bugs.mojang.com/browse/MCPE-153591))

## **Sculk Catalyst**

-   When a mob dies in proximity of multiple Sculk Catalysts, only the closest one will bloom
-   The \"It Spreads\" achievement is no longer unlocked when a Sculk Catalysts blooms after the death of a mob which carries no XP

### **Warden**

-   No more graphical artifacts from the Warden emerge or dig particle effect ([MCPE-153580](https://bugs.mojang.com/browse/MCPE-153580))

## **Frog**

-   Frogs no longer lay Frogspawn on shallow, flowing water ([MCPE-152559](https://bugs.mojang.com/browse/MCPE-152559))

## **Gameplay**

-   Fixed issues with mobs disappearing after going through Nether portals ([MCPE-155678](https://bugs.mojang.com/browse/MCPE-155678))
-   Resistance effect is no longer one level weaker than it should be ([MCPE-156012](https://bugs.mojang.com/browse/MCPE-156012))
-   Haste I will now properly increase the player\'s mining speed ([MCPE-102237](https://bugs.mojang.com/browse/MCPE-102237))
-   Conduit Power I now grants the effect of Haste I instead of Haste II
-   Container entities like Boat with Chest can now be opened on mobile devices without crouching if all the seats are occupied

## **Blocks**

-   Lapis Lazuli Block is now named Block of Lapis Lazuli ([MCPE-105452](https://bugs.mojang.com/browse/MCPE-105452))
-   Cut Copper Slab and its variants can now be placed on the top half of a block on the first attempt ([MCPE-154302](https://bugs.mojang.com/browse/MCPE-154302))

## **Commands**

-   Pillagers and Vindicator Captains spawned with commands are once again hostile by default ([MCPE-116971](https://bugs.mojang.com/browse/MCPE-116971))

## **General**

-   Ensured content errors are not ignored when loading entity JSON schemas with invalid value types for following fields: The \"Runtime_Identifier\", \"Is_Spawnable\" and \"Is_Summonable\" fields for \"description\", the \"component_groups\" field and the \"event\" field for \"events\" ([MCPE-151381](https://bugs.mojang.com/browse/MCPE-151381))
-   Fixed an issue where new users given Operator permissions by default were not able to use operator commands
-   Fixed an issue where worlds that give Operator permissions to new users only give Member permissions

## **Mobile Controls**

-   Updated icon for Interact Button

## **Graphical**

-   Fog setting with negative fog start will no longer cause flame on player model in UI get tainted by fog color
-   "particles_blend" material is no longer culled in RenderDragon

## **Items**

-   Fixed an issue where Carved Pumpkins launched from Dispensers weren\'t equipping to nearby mobs

## **Mobs**

-   Parrots once again are poisoned by Cookies ([MCPE-151671](https://bugs.mojang.com/browse/MCPE-151671))

## **Player**

-   The player no longer endlessly jumps after entering a boat while holding down the jump button ([MCPE-155774](https://bugs.mojang.com/browse/MCPE-155774))

## **Stability and Performance**

-   Fixed a crash that could occur if a mob has the flocking component

## **Vanilla Parity**

# **Technical Updates**

## **Add-Ons and Script Engine**

-   Fixed an issue where projectiles with an offset weren\'t spawned based on the player\'s rotation ([MCPE-153880](https://bugs.mojang.com/browse/MCPE-153880))

**General**

-   Cake blocks emit blockChange game events when slices are eaten

## **Hunger**

-   Exhaustion component now uses new correct default values ([MCPE-154238](https://bugs.mojang.com/browse/MCPE-154238))
    -   Please note, add-on packs that alter the player.json may need to ensure that the player saturation rate is set correctly to match the default values if required

# **Experimental Features**

## **General**

-   Renamed the \'minecraft:block_light_filter\' component to \'minecraft:light_dampening\'
-   Renamed the \'part visibility\' component\'s field \'rules\' to \'conditions\'
-   Renamed the \'crafting_table\' component\'s field \'custom_description\' to \'table_name\'

## **Stability and Performance**

-   Loading a world no longer takes a very long time when having the Holiday Creator Features toggle enabled
