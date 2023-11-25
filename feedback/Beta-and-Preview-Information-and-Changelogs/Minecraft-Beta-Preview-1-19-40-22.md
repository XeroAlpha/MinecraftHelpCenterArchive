---
title: Minecraft Beta & Preview - 1.19.40.22
date: 2022-09-21T14:33:13Z
updated: 2022-09-21T15:45:28Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/9329824511629-Minecraft-Beta-Preview-1-19-40-22
---

**Posted:** 21st September 2022

## **Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot featuring villagers, allays, and some scaffolding.](https://feedback.minecraft.net/hc/article_attachments/9329732420877/R19U4_3_16x9.jpg)

Here\'s a list of what is new in this week\'s Minecraft Preview and Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](https://bugs.mojang.com/) and feel free to send us [your feedback](https://aka.ms/MinecraftBetaFeedback).

# **Features and Bug Fixes**

## **Vanilla Parity**

### **Spectator Mode (Experimental)**

-   Spectator players no longer play sounds when entering/exiting bubble columns ([MCPE-161536](https://bugs.mojang.com/browse/MCPE-161536))

# **Features and Bug Fixes**

## **Blocks**

-   Scaffolds now burn at a more correct rate, 1/4 of an item ([MCPE-42949](https://bugs.mojang.com/browse/MCPE-42949))
-   Breaking the block below a Snow-covered Flower now makes the Flower drop instead of the Snow Layer ([MCPE-61609](https://bugs.mojang.com/browse/MCPE-61609))

## **Commands**

-   Copying a bubble column with the /clone command no longer results in invisible water ([MCPE-153903](https://bugs.mojang.com/browse/MCPE-153903))

## **Gameplay**

-   Reverted the change that caused Arrows and Tridents to stop moving ([MCPE-162085](https://bugs.mojang.com/browse/MCPE-162085))
-   Fixed an issue where Wither effect damage would be reduced by armor ([MCPE-159407](https://bugs.mojang.com/browse/MCPE-159407))

## **Graphical**

-   Fixed Beacon block suddenly disappearing when seen from a distance

## **Mobs**

-   Fixed an issue where Drowned could change held items when attacking ([MCPE-40288](https://bugs.mojang.com/browse/MCPE-40288))

## **Touch Controls**

-   Improved the images for the three control schemes in the touch settings menu

## **User Interface**

-   Fixed an issue where players couldn\'t drag/drop or select items from the equipment page
-   Changed the color of the text descriptions for the \'Darkness Effect Strength\' and \'Notification Duration\' accessibility options to a lighter shade to make them more readable ([MCPE-162047](https://bugs.mojang.com/browse/MCPE-162047))
-   Fixed an issue where users couldn\'t swap unstackable items with touch controls

# **Technical Updates**

## **Entity Documentation**

-   Removed experimental markers for The Wild Update entity behaviors and components
-   Added documentation for minecraft:heartbeat. Rephrased some of the documentation

## **Items**

-   Added support for recipes to use item tags directly instead of item names
    -   Added new item tags
    -   Converted several recipes from code into their own recipe files
    -   Added several recipes using the new tags to override many old, item specific recipes (these still exist for backwards compatability):
        -   barrel, beehive, bookshelf, bowl, brewing_stand, campfire, cartography_table, chest, composter, crafting_table, daylight_detector, fire_charge, fletching_table, furnace, grindstone, jukebox, lectern, loom, noteblock, painting, piston, shield, smithing_table, smoker, soul_campfire, soul_torch, stick, stone_axe, stone_hoe, stone_pickaxe, stone_shovel, stone_sword, torch, tripwire_hook, wooden_axe, wooden_hoe, wooden_pickaxe, wooden_shovel, wooden_sword

# **Experimental Technical Features**

## **Add-Ons and Script Engine**

-   Implemented the has_property, int_property, bool_property, float_property, and enum_property actor behavior filters

## **API**

-   Updated the API. See the list below for specific changes:
    -   Events
        -   Removed event tick- called each tick
    -   System
        -   Added run() - to queue a callback to run next tick, re-queue each tick to get behavior similar to tick event
    -   Block
        -   Renamed property id to typeId
    -   BlockComponent
        -   Renamed property id to typeId
    -   Entity
        -   Renamed property id to typeId
        -   Added read-only property id: string- Returns a unique identifier for the entity. This identifier remains consistent across world loads.
    -   EntityComponent
        -   Renamed property id to typeId
    -   ItemComponent
        -   Renamed property id to typeId
    -   ItemStack
        -   Renamed property id to typeId

## **GameTest Framework**

-   Fixed a bug where EntityHurtEvent would not fire on Player death
-   Renamed experiment GameTest Framework to Beta APIs
-   The now-renamed Beta APIs experiment is still needed to access all beta APIs, including core Minecraft APIs and GameTest APIs
