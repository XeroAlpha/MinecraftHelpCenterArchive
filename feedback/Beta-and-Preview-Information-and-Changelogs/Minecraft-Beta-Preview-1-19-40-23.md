---
title: Minecraft Beta & Preview - 1.19.40.23
date: 2022-09-29T14:48:32Z
updated: 2022-09-29T15:44:50Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/9527647861005-Minecraft-Beta-Preview-1-19-40-23
---

**Posted:** 29th September 2022

## **Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)for detailed instructions

![A Minecraft screenshot related to the fixes in this week's preview, with nether portal ruins, a wither skeleton, a villager, and various other mobs in the scene.](https://feedback.minecraft.net/hc/article_attachments/9527542833677/R19U4_4_16x9.jpg)

Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](https://bugs.mojang.com/) and feel free to send us [your feedback](https://aka.ms/MinecraftBetaFeedback).

# **Features and Bug Fixes**

## **Vanilla Parity**

- Getting killed by a mob with a renamed weapon now produces a death message with the item name ([MCPE-162055](https://bugs.mojang.com/browse/MCPE-162055))
- Wither Skeletons can now spawn inside of Wither Roses ([MCPE-110127](https://bugs.mojang.com/browse/MCPE-110127))
- Decreased the amount of hunger used while swimming to match Java Edition ([MCPE-154452](https://bugs.mojang.com/browse/MCPE-154452))
- Librarian Villagers can now offer Enchanted Books with Curse of Vanishing and Curse of Binding ([MCPE-84906](https://bugs.mojang.com/browse/MCPE-84906))

## **Spectator Mode (Experimental)**

- Shulker bullets no longer follow Spectators ([MCPE-162069](https://bugs.mojang.com/browse/MCPE-162069))
- Spectators are now invisible to normal players
- If a player is in Spectator Mode and other non-spectating players are present on the server, the spectating player won't affect mob despawning anymore
- If there are only spectating players on the server, mob despawning is now put on hold

## **User Interface**

- Fixed a bug where death messages were sometimes too long to fit on screen ([MCPE-156550](https://bugs.mojang.com/browse/MCPE-156550))
- The inventory button for touch devices is now reset to its default appearance after closing the inventory
- Fixed the crafting screen search string not saving correctly
- Fixed an issue with the durability bar missing on inventory screens on Xbox ([MCPE-162063](https://bugs.mojang.com/browse/MCPE-162063))
- Fixed a bug where the sign in button on Create New World didn't work on some platforms

## **Mobile Touch Controls**

- Fixed a bug where items could not be removed from the hotbar by moving them onto other items in Creative Inventory on mobile devices
- Fixed an issue where the stack splitting progress bar was not aligned on touch mode
- Adjusted layout of the touch toolbar and status effect icons based on user feedback
- Temporarily disabled the preview of our new Touch Stack Splitting UX while we work through feedback

## **Mobs**

- When a mob is a passenger in a Boat, neither the Boat nor the mob are allowed to change dimension ([MCPE-154919](https://bugs.mojang.com/browse/MCPE-154919))

## **Blocks**

- The book of an Enchanting Table now properly faces a nearby player ([MCPE-29924](https://bugs.mojang.com/browse/MCPE-29924))

## **NPC (EDU)**

- NPCs can now have no name, hiding the nametag above their head

## **Marketplace**

- Fixed an issue with Marketplace bundle prices not showing as free after purchasing

## **Performance and Stability**

- Fixed a potential crash source in explosions
- Fixed a crash that could occur when leaving a split screen session

# **Technical Updates**

## **Experimental Features**

## **API**

**Major breaking change to experimental JavaScript APIs:**

All script modules have been renamed to follow a new convention.  

- *mojang-gametest*-\> *@minecraft/server-gametest*
- *mojang-minecraft*-\> *@minecraft/server*
- *mojang-minecraft-ui*-\> *@minecraft/server-ui*
- *mojang-minecraft-server-admin*-\> *@minecraft/server-admin*
- *mojang-net*-\> *@minecraft/server-net*

For example, rather than using:

import \* as mc from “mojang-minecraft”;

Use

import \* as mc from “@minecraft/server”;

- Use of script eval()and Function() must be explicitly enabled in  json 
  - To do this, set script_evalin capabilities

"capabilities": \[  "script_eval"\]

- Root path for imports has changed; scripts/prefix are no longer allowed.
- For imports, use import "./source.js" or import "source.js"
- Deprecated use of import "scripts/source.js"

## **Actor Properties**

- Fixed "bool_property" filters that didn't specify a "value"

## **Commands**

- Temporarily disabled the rotation for the /summon command while a bug is worked on
- Fixed a rotation issue when a Command Block executes 'execute facing' and 'execute rotated' ([MCPE-162256](https://bugs.mojang.com/browse/MCPE-162256))
- Implemented the '/execute in' command
- Implemented the ‘/execute anchored \<eyes\|feet\>’ command

## **General**

- Release BlockGeometryComponent out of experimental in JSON formats 1.19.40 and higher
- Release BlockMaterialInstancesComponent out of experimental in JSON formats 1.19.40 and higher
- Renamed *minecraft:block_light_filter*component to *minecraft:light_dampening*
