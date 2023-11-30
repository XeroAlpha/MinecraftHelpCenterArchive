---
title: Minecraft Beta & Preview - 1.20.50.23
date: 2023-11-02T14:03:35Z
updated: 2023-11-02T14:06:34Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20951835532429-Minecraft-Beta-Preview-1-20-50-23
---

**Posted:** 2 November 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot of am abandoned village. There are bats flying around, and there's a crafter in the scene.](https://feedback.minecraft.net/hc/article_attachments/20951830497165)

Here’s a list of what’s new in this week’s Preview and Beta! As ever, we’d love your feedback on these new features and changes. Send us your thoughts [here](https://aka.ms/Minecraft121Feedback) and report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)!

*(Please note: This Preview and Beta will be rolling out to players around 09:00PDT if all goes to plan!)*

# Experimental Features

## Chiseled Copper

- Added recipe for Chiseled Copper 

## Crafter

- Updated Crafter textures

## Tuff Blocks

- Added recipes for Tuff Blocks 

## Waxed Chiseled Copper

- Added recipe for Waxed Chiseled Copper
- Added Stonecutter recipes for all oxidization levels of Waxed Chiseled Copper 

## Waxed Copper Doors

- Added Crafting Table recipes for all oxidization levels of Waxed Copper Doors

## Waxed Copper Grates

- Added Stonecutter recipes for all oxidization levels of Waxed Copper Grates 

## Waxed Copper Trapdoors

- Added Crafting table recipes for all oxidization levels of Waxed Copper Trapdoors

## Textures

- Updated Tuff Bricks textures 
- Updated Copper Door textures 
- Updated Copper Trapdoor textures 
- Updated Copper Door item textures 

# Features and Bug Fixes

## Blocks

- Chorus Flowers can now be destroyed by any projectile, which will no longer disappear after impact ([MCPE-176184](https://bugs.mojang.com/browse/MCPE-176184))
- Fixed a bug making Calcite not being obtainable as an item through commands or creative inventory ([MCPE-176371](https://bugs.mojang.com/browse/MCPE-176371))

## Crafting and Inventory Screen

- Inventory option states such as the all/craftable toggle and selected inventory tab are now saved between sessions ([MCPE-175159](https://bugs.mojang.com/browse/MCPE-175159))

## Gameplay

- Fixed a regression that caused flying players to slow down significantly after touching ground 
- Sneaking in water is now possible with touch controls ([MCPE-167218](https://bugs.mojang.com/browse/MCPE-167218))

## General

- Improved handling of unexpected errors during world export and provide better error messaging ([MCPE-41898](https://bugs.mojang.com/browse/MCPE-41898))

## Graphical

- Made the hotbar less transparent ([MCPE-31014](https://bugs.mojang.com/browse/MCPE-31014))
- Added background dimming on screens that didn't have it ([MCPE-168598](https://bugs.mojang.com/browse/MCPE-168598))

## Marketplace

- Fixed possible soft locking when performing different actions within Marketplace 
- Added the ability to deep link users within a server to Dressing Room offers 

## Mobs

- Mobs that were placed in Boats before the introduction of the new size restriction, and are now considered too large to fit, will no longer be ejected ([MCPE-176198](https://bugs.mojang.com/browse/MCPE-176198))

## Molang

- *query.is_moving* now detects vertical motion for the player again 

## Character Creator

- The classic skins info pop now sends you to the correct settings page

## Realms

- Fixed a crash when joining a Realm after doing other things for a while

## User Interface

- Fixed an issue where the border around the 'Creator' tab in Settings would not be highlighted ([MCPE-169617](https://bugs.mojang.com/browse/MCPE-169617))
- Added an altered main menu and world creation experience. Keep an eye out as we're rolling out these changes to some players

# Technical Updates

## API

- Moved* Entity*.*remove* from *beta* to *1.7.0*

## Items

- Deprecated 'on_dig' event triggers from 'minecraft:digger' in format versions 1.20.50 and higher 

# Experimental Technical Features

## API

- DataDrivenEntityTriggerAfterEvent 

- - Renamed property *id* to *eventId* for clarity
  - Changed *getModifier* to work in read-only mode

- Changed *DefinitionModifier* from a *class* to an *interface* with properties

- Made *EntityTypes.get* properly reflect that it can return *EntityType \| undefined* instead of just *EntityType*

## Gametest

- Dynamic Properties

- - NBT change: Dynamic properties are now stored using the behavior pack manifest UUID, rather than the module UUID. Existing worlds using dynamic properties will continue to work, and will be migrated to the new format when properties are read or modified
