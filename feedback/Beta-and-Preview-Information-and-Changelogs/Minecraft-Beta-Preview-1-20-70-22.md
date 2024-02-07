---
title: Minecraft Beta & Preview - 1.20.70.22
date: 2024-02-07T16:19:40Z
updated: 2024-02-07T17:03:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23935492768781-Minecraft-Beta-Preview-1-20-70-22
---

**Posted:** 7 February 2024

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Armadillos in their rolled up position, with their legs and faces peeking out.](https://feedback.minecraft.net/hc/article_attachments/23935504574349)

# Experimental Features

## Armadillo

- Armadillos have a brand-new unrolling animation 
- Armadillos now randomly peek out of their shell while rolled-up
- To accommodate these new animations, the time for a rolled-up Armadillo to stay without threats before unrolling has been increased from 3 to 4 seconds

## Vault

- The Vault texture has been updated 
- If any nearby player has not unlocked a Vault, the keyhole will be open
- If all nearby players have unlocked a Vault, the keyhole will be closed

## Breeze

- The Breeze is only suggested in the type selector when the appropriate experimental toggle is enabled 
- The Breeze's attack damage has been tweaked 

#  

# Features and Bug Fixes

## Blocks

- Cave Vines without Glow Berries no longer drop a Glow Berry when Silk Touched ([MCPE-151348](https://bugs.mojang.com/browse/MCPE-151348))
- Blue and Black Candle Cakes now display and drop the correct type of Candle ([MCPE-162868](https://bugs.mojang.com/browse/MCPE-162868)) 
- "wood" block is now split into unique instances: "oak_wood", "spruce_wood", "birch_wood", "jungle_wood", "acacia_wood", "dark_oak_wood", "stripped_oak_wood", "stripped_spruce_wood", "stripped_birch_wood", "stripped_jungle_wood", "stripped_acacia_wood", and "stripped_dark_oak_wood" 

## In-Game Tips

- You may have noticed that in an earlier preview we launched a dynamic game tips feature. It will help players learn basic things necessary to explore and enjoy Minecraft. With the tips being mainly aimed at new players, you're not very likely to ever encounter them, however, feel free to leave feedback if you do see them at [aka.ms/mcgametipsfeedback](https://aka.ms/mcgametipsfeedback)

## Inventory

- End Portal Frame item has been moved to Nature category in the Creative inventory menu 

## Realms

- On Realms, we no longer will keep the chunks loaded in The End unless a player is in the area ([REALMS-11358](https://bugs.mojang.com/browse/REALMS-11358)) ([REALMS-11290](https://bugs.mojang.com/browse/REALMS-11290))
- Fixed a bug where text in the Realms Subscription landing page was slightly truncated 

## Realms Stories

- Added four new Realm Events 
- Added two extra-special LARGE Realm Events
- Fixed gamepad back button input not working correctly on the Realms Stories Settings screen 
- Fixed issue with time blocks not rendering in the correct time zones on Switch
- Added screen-reader narration for Comments screen
- When in split-screen mode, only the primary user can access Realms Stories

## User Interface

- The updated Death Screen is now enabled by default, even when resource packs are applied to a world 
- The grid/list layout button in the new Play screen now retains the selected layout mode on restart ([MCPE-177975](https://bugs.mojang.com/browse/MCPE-177975)) 
- The feedback button in the Friends Drawer in the new Play screen now leads to the correct feedback page 

## World Generation

- Fixed a bug that could sometimes prevent the Stronghold portal room from being generated ([MCPE-19426](https://bugs.mojang.com/browse/MCPE-19426)) 

 

# Technical Updates

## API

- Fixed the timing of *PlayerInteractWithEntityAfterEvent* and *PlayerInteractWithBlockAfterEvent* 
- Adding *Player.setGameMode* and *Player.getGameMode* to *beta* for changing the Player's *GameMode* 
- Adding events *PlayerGameModeChangeAfterEvent*, *PlayerGameModeChangeBeforeEvent* with signals *world.afterEvents.playerGameModeChange* and *world.beforeEvents.playerGameModeChange* to *beta* 
- Adding *GameRuleChangeAfterEvent*, *GameRule* and *world.afterEvents.gameRuleChange* for responding to GameRules changes

## Blocks

- Fixed 'minecraft:geometry.full_block' faces not rotating to match transform component
- Fixed 'minecraft:geometry.full_block' blocks not culling faces against some vanilla blocks 

## Components

- Entities with a "damage_sensor" component can once again be killed via commands
- The "damage_sensor" component can once again trigger entity events on entities other than the owner 

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Renamed enum ClipboardMirrorAxis to StructureMirrorAxis and moved it to module @minecraft/server
- Renamed enum ClipboardRotation to StructureRotation and moved it to module @minecraft/server
- Panel booleans can now be represented as a toggleswitch as an alternative to a checkbox

## Molang

- Released *query.is_attached* and *query.has_player_rider* from experimental
- Removed experimental Molang queries *query.get_ride* and *query.get_riders*
- Deprecated the Molang Features experiment
- Released Molang *query.scoreboard* for use with behavior packs from experimental (resource packs will return 0) 

#  

# Experimental Technical Updates

## API

- Fixed a bug where item dynamic properties could sometimes be applied to items with a stack size greater than 1 
  - Removing function *triggerEvent()*
- WorldBeforeEvents
  - Removing property *itemDefinitionEvent*
- WorldAfterEvents
  - Removing property *itemDefinitionEvent*
  - Moved *explosion* from *beta* to *1.9.0*
- WorldBeforeEvents
  - Moved *explosion* from *beta* to *1.9.0*

## Graphical

- Fixed a crash on Android devices when entering Deferred Technical Preview worlds 
- Fixed a circular visual artifact that could occur when using the new Point Light Shadows feature in the Deferred Technical Preview
