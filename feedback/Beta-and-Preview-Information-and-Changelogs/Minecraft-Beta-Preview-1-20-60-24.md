---
title: Minecraft Beta & Preview - 1.20.60.24
date: 2024-01-04T15:45:01Z
updated: 2024-01-05T09:07:10Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/22915685759373-Minecraft-Beta-Preview-1-20-60-24
---

**Posted:** 4 January 2024

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![r20u6_5.jpg](https://feedback.minecraft.net/hc/article_attachments/22915726555021)

Here’s a list of what’s new in the latest Minecraft Preview and Beta. As always, we love to hear your feedback, so please let us know what you think [here](https://aka.ms/MinecraftArmadilloFeedback), and report any bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

# Experimental Features

## Armadillo

- Armadillo now emits vibrations when rolling up and when unrolling 
- Baby Armadillos no longer move towards their parents after rolling up 
- Armadillo's legs no longer flicker while rolled up ([MCPE-177551](https://bugs.mojang.com/browse/MCPE-177551))
- Armadillo now correctly plays sounds when rolling up ([MCPE-177562](https://bugs.mojang.com/browse/MCPE-177562)) 

## Trial Spawner

- Improved Trial Spawner particles

## Breeze

- Breeze can now jump when standing in water 
- The Breeze now avoids Trapdoors when pathfinding 

## Wind Burst

- Removed the darkening tint in Wind Burst particle to uphold parity 

## Wolf Armor

- Volume of sounds for equipping and removing Wolf Armor is now controlled by the Friendly Creatures slider 

# Features and Bug Fixes

## Blocks

- Pistons pushing, pulling or destroying blocks no longer risk teleporting surrounding Players towards the world's origin ([MCPE-175206](https://bugs.mojang.com/browse/MCPE-175206)) 
- Potato, Carrot, Melon, Sweet Berries, Nether Wart, Sunflower, Lilac, Rose Bush, Peony, Glowstone Dust, and Gravel no longer have increased chance of drops when mined with an Enchanted Book of Fortune
- Fixed a bug where the player would exit a vehicle at an incorrect height if the vehicle was over a fire block 

## Boat

- Fixed an issue where a boat disappears if placed at the player's feet or next to another boat ([MCPE-177283](https://bugs.mojang.com/browse/MCPE-177283))

## Education Edition Only Features

- The EDU-only "hard_stained_glass" block is now split into unique instances "hard_black_stained_glass", "hard_blue_stained_glass", "hard_brown_stained_glass", "hard_cyan_stained_glass", "hard_gray_stained_glass", "hard_green_stained_glass", "hard_light_blue_stained_glass", "hard_light_gray_stained_glass", "hard_lime_stained_glass", "hard_magenta_stained_glass", "hard_orange_stained_glass", "hard_pink_stained_glass", "hard_purple_stained_glass", "hard_red_stained_glass", "hard_white_stained_glass", "hard_yellow_stained_glass" 
- The EDU-only "hard_stained_glass_pane" block is now split into unique instances "hard_black_stained_glass_pane", "hard_blue_stained_glass_pane", "hard_brown_stained_glass_pane", "hard_cyan_stained_glass_pane", "hard_gray_stained_glass_pane", "hard_green_stained_glass_pane", "hard_light_blue_stained_glass_pane", "hard_light_gray_stained_glass_pane", "hard_lime_stained_glass_pane", "hard_magenta_stained_glass_pane", "hard_orange_stained_glass_pane", "hard_pink_stained_glass_pane", "hard_purple_stained_glass_pane", "hard_red_stained_glass_pane", "hard_white_stained_glass_pane", "hard_yellow_stained_glass_pane"

## Gameplay

- Flying players are now only slowed by touching the ground when moving down ([MCPE-176365](https://bugs.mojang.com/browse/MCPE-176365))
- If you close the game while changing dimensions, we won't place you in an unexpected position when re-entering the world ([MCPE-173386](https://bugs.mojang.com/browse/MCPE-173386))
- Double pressing the jump button to disable flying no longer causes the player to jump slightly after flying is disabled ([MCPE-176926](https://bugs.mojang.com/browse/MCPE-176926))

## Graphical

- Fix font glyph boundary artifacts (spotty pixels at the edge of each character) with italic text rendering at certain resolution

## Items

- Renamed "Scute" to "Turtle Scute"

<div>

## Mobs

- Villagers who were mistakenly assigned to the same bed or workstation as others will now actively seek out a new bed or workstation ([MCPE-176528](https://bugs.mojang.com/browse/MCPE-176528)) 
- Pufferfish no longer inflate and deflate repeatedly when a player is at a specific distance from them 
- Animal equipment, such as Horse Armor and Wolf Armor, no longer has a chance of being duplicated when the animal carrying them is killed ([MCPE-177560](https://bugs.mojang.com/browse/MCPE-177560))
- Pillagers now spawn correctly near Pillager Outposts ([MCPE-177593](https://bugs.mojang.com/browse/MCPE-177593))
- Mobs that have partial blocks (e.g. Trapdoors, Slabs, etc.) specified as part of their list of blocks to avoid in their Navigation Component should now avoid them properly 

## Realms

- Realms Tab in new Play Screen should no longer be stuck in a loading state 
- Fixed crash that could occur in the Play menu whilst looking at Realms
- Corrected translations about "posting" and "liking" on Realms Stories

## Vanilla Parity

- Trail Ruins will now be placed in the same location and configuration as in Java ([MCPE-169988)](https://bugs.mojang.com/browse/MCPE-169988)

## Villages

- Some Villagers could have their skins not match their professions. This should now be resolved ([MCPE-105457](https://bugs.mojang.com/browse/MCPE-105457))

# Technical Updates

## AI Goals

- "behavior.follow_parent" now interrupts navigation on stop for content using engine version 1.20.60 or higher 

## Biomes

- Biome tags in JSON files are now specified under a "minecraft:tags" component, in a "tags" array, rather than as loose JSON objects, for files with a format_version of 1.20.60 or higher 

## Components

- The "interact" component now supports the additional "entity_act" value for the "vibration" field

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Removed addSeparator function from IMenu API 
- Fixed issue where resource packs were not being retained during editing and testing - now they are retained!
- Added addEntityPicker function to IPropertyPane API for selecting an entity type
- Added interface IPropertyItemOptionsDataPicker for both entity and block picker optional properties, removed IPropertyItemOptionsBlocks
- Introducing Void World generation! The Flat World toggle found on the Advanced tab of the Create New Project page has been replaced with a drop down, allowing new Editor projects to be created in a Vanilla, Flat, or Void world. The Void world project experience will be iterated on in the coming months. Upon starting a Void world project, swap Selection to Fixed Distance to place blocks to kickstart your build.
- Added toolGroupId optional property to IRegisterExtensionOptionalParameters API for organizing tools in custom groups!

## Entity Event Responses

- Added the "emit_vibration" entity event response, which allows the entity to emit a vibration having the entity itself as its source

- - The "vibration" field allows to specify the vibration to be emitted
  - The allowed values are "shear", "entity_act", and "entity_interact"

## Molang

- Added content errors that state *query.remaining_durability* and *query.max_durability* are only to be used with Item contexts.

## Performance

- Feature toggle *Enable New Geometry Tessellation Pipeline* defaults to true

# Experimental Technical Updates

## Add-Ons and Script Engine

</div>

<div>

- The block component "minecraft:random_ticking" is now supported again

</div>

<div>

## API

- system.runJob()

- system.clearJob()

- - Added runJob and clearJob for optimizing long running tasks using JavaScript generators. system.runJob takes a generator function and returns a jobId. See documentation for usage examples.

- *@minecraft/server.BlockPermutation*

- - Moved getState and withStates APIs from beta to stable

## Graphical

- Fixed issue where shadows for alpha tested geometry (doors, leaves, etc.) were no longer rendering in the Deferred Technical Preview 
- Banner shields now render when equipped in both left and right hands in the Deferred Technical Preview
- Fixed an issue where light emitting items glowed in the player's hand in dark rooms during the day in the Deferred Technical Preview
- Improved upscaling stability on Android in the Deferred Technical Preview
- On Android, pixelated artifacts are no longer visible on the right half of the screen when upscaling is turned on in the Deferred Technical Preview
- Fixed unstable and incorrect light clustering results in the Deferred Technical Preview

## Scripting

- Added *ScriptBiomeTypes* and *ScriptBiomeType* to allow Scripting API to enumerate the BiomeRegistry.
- Added a *findClosestBiome* function to *Dimension* to find the closest biome of a specified type, to a given position in the world.

</div>
