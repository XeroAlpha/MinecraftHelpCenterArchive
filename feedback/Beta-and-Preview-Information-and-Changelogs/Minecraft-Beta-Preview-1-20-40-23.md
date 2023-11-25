---
title: Minecraft Beta & Preview - 1.20.40.23
date: 2023-09-27T14:32:53Z
updated: 2023-09-28T13:40:16Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19883048087693-Minecraft-Beta-Preview-1-20-40-23
---

**Posted:** 27 September 2023

**Information on the Minecraft Preview and Beta:**

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot of Zuri standing next to a goat and a cauldron.](https://feedback.minecraft.net/hc/article_attachments/19882985673613)

Here's a list of what's new in this week's Minecraft Preview and Beta! As always, we really want to hear your thoughts on these fixes and features, so please send your feedback and ideas to [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).\
\

# Features and Bug Fixes

## Audio

-   The updated splash sounds now play on Android as well ([MCPE-174524](https://bugs.mojang.com/browse/MCPE-174524)) 

## Blocks

-   Third person camera no longer phases through the lower part of Cauldron ([MCPE-173010](https://bugs.mojang.com/browse/MCPE-173010)) 
-   Falling in Powder Snow no longer causes any damage, no matter the height fallen from ([MCPE-174859](https://bugs.mojang.com/browse/MCPE-174859))
-   Lightweight mobs and entities wearing Leather Boots once again sink into the top layer of Powder Snow when falling from a height of more than two and a half blocks

## Gameplay

-   Goat Horn sound is now considered a Jukebox/Note Block sound again ([MCPE-175156](https://bugs.mojang.com/browse/MCPE-175156)) 
-   Fixed an issue where the game would lock up if a mob would move on a block with 0 friction ([MCPE-173073](https://bugs.mojang.com/browse/MCPE-173073))

## Graphical

-   Random lights no longer appear in the world without a source ([MCPE-169001](https://bugs.mojang.com/browse/MCPE-169001)) 

## Graphics

-   Splash particles are now emitted at an actor\'s waist instead of above their head

## Items

-   Warped Fungus on a Stick is no longer held backwards in first person view ([MCPE-169765](https://bugs.mojang.com/browse/MCPE-169765)) 

## Mobs

-   Fixed a bug where the Sniffer ended digging as soon as item was created, not at the end of the specified dig duration 

## Stability and Performance

-   Fixed a crash related to tessellation of water blocks

## User Interface

-   Placing invalid items into offhand slot will no longer cause them to drop 

# Technical Updates

## EDU Features

-   Fixed a bug that prevented summon NPC commands from working if the users did not have worldbuilder permissions where the base version of the world was before 1.19.80

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Fixed this week:

-   Fixed a bug that prevented the Origin Vector3 item in the Selection pane from updating when the movement gizmo was dragged.

## Entity Components

-   Unlocked "behavior.random_search_and_dig" for creators to use
-   \"target_blocks\" field added. List of blocks that the mob can dig on. Default if \"target_blocks\" isn\'t added is Dirt, Grass, Podzol, Dirt with Roots, Moss, Mud, and Muddy Mangrove Roots
-   \"item_table\" field added. Path to a loot table that specifies what the mob can dig up. \"item_table\" takes precedence over \"items\"
-   Content errors added if the behavior has trouble reading or finding \"item_table\" and if unable to get an item from \"items\"
-   \'on_item_found\' event now fires on item found AND digging finished. Before the event firing caused the digging to stop early

# Experimental Technical Features

## API

-   Added *matches* function called on an entity, which takes in *EntityQueryOptions* and returns true if the entity matches and false otherwise.
-   Moved *getRotation* from *beta* to 1.*6.0*
-   Move *setRotation* from *beta* to 1.*6.0*
-   Added *PlayerLeaveBeforeEvent*- This event fires when a player leaves the server, before the Player object is removed
-   Releasing PlayerDimensionChangeAfterEvent beta to *1.6.0*

## Graphical

-   High emissive values (\> 0.25) no longer obscure surface detail in the Deferred Technical Preview
