---
title: Minecraft Beta & Preview - 1.21.110.24
date: 2025-08-12T15:46:11Z
updated: 2025-08-13T10:05:36Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38757295608077-Minecraft-Beta-Preview-1-21-110-24
hash:
  h_01K2FF7AMKD9PX52E26Z5CS1BW: information-on-minecraft-preview-and-beta
  user-content-known-issue: known-issue
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-copper-golem-statue: copper-golem-statue
  user-content-copper-torch: copper-torch
  user-content-shelf: shelf
  user-content-mobs: mobs
  user-content-sounds: sounds
  user-content-copper-chest: copper-chest
  user-content-copper-golem: copper-golem
  user-content-items: items
  user-content-gameplay: gameplay
  user-content-editor: editor
  user-content-user-interface: user-interface
  user-content-graphical: graphical
  user-content-technical-updates: technical-updates
  user-content-commands: commands
  user-content-ai-goals: ai-goals
  h_01K2FF6Y87NEPSMZZSCFK1WHF6: editor-1
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60: ""
  user-content-biomes: biomes
  user-content-general: general
---

**Posted:** 12 August 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! Before we move our focus onto technical tweaks and bug fixes for this drop, we have one final feature to announce – and it involves a very cute interaction between the copper golem and the iron golem! With this, all features for our third game drop of 2025 are now in testing and we'll start working our next game drop, which we are excited to tell you about soon!

For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/) , and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/) .

\
 

## Known Issue[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=known-issue)

- There is a bug with the Ender Dragon death animation, preventing the End Portal from opening. We are working on a fix and hope to have it addressed soon! ([MCPE-224403](https://bugs.mojang.com/browse/MCPE-224403))

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=features-and-bug-fixes)

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=blocks)

- Prevent wall blocks from connecting to crimson_fungus, warped_fungus and bamboo

### Copper Golem Statue[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=copper-golem-statue)

- Using the pick block functionality on the Copper Golem statue now picks the same posed version ([MCPE-225265](https://bugs.mojang.com/browse/MCPE-225265))

### Copper Torch[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=copper-torch)

- Fixed the Copper Torch recipe only giving one torch instead of four

### Shelf[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=shelf)

- Only the shelves which change items will now emit a block neighbor update e.g. for Observers to see ([MCPE-225461](https://bugs.mojang.com/browse/MCPE-225461))

> **Developer's Note:** *In an upcoming Preview, items displayed in shelves will be centered again, mirroring the change in Java Snapshot 25w33a.*

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=mobs)

- Iron Golems will sometimes plant a decorative flower onto a nearby Copper Golem
  - Known issue: The flower disappears when the Copper Golem dies
- The Copper Golem will now wait next to the Chest or Copper Chest when it is opened by a player ([MCPE-226272](https://bugs.mojang.com/browse/MCPE-226272))
- The Copper Golem will now look towards the container it is walking towards

## Sounds[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=sounds)

- When picking up an item to hand that is not hand equippable, mobs no longer play an equip sound ([MCPE-223747](https://bugs.mojang.com/browse/MCPE-223747))

### Copper Chest[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=copper-chest)

- The closing sound of Copper Chests is now properly synced with their animation ([MCPE-223966](https://bugs.mojang.com/browse/MCPE-223966))
- Copper Chest opening and closing sounds can now only be heard up to a range of 12 blocks ([MCPE-224011](https://bugs.mojang.com/browse/MCPE-224011))

### Copper Golem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=copper-golem)

- The sound of Copper Golems can now only be heard up to a range of 16 blocks ([MCPE-223867](https://bugs.mojang.com/browse/MCPE-223867))
  - The more frequent Copper Golem step and spin sounds have an even shorter range of 12 blocks

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=items)

- The sound of the "Tears" music disc is now controlled by the "Musical blocks" audio slider in the game settings ([MCPE-222162](https://bugs.mojang.com/browse/MCPE-222162))
- The sound of the "Lava Chicken" music disc is now controlled by the "Musical blocks" audio slider in the game settings ([MCPE-224504](https://bugs.mojang.com/browse/MCPE-224504))

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=gameplay)

- Fixed issue where equipping armor while aiming at a mob would create a "ghost" cloned item ([MCPE-220172](https://bugs.mojang.com/browse/MCPE-220172))
- Fixed an issue where the control scheme set via control scheme commands would not be retained if a later-activated camera did not support it. The scheme will now persist as intended until explicitly cleared via `/controlscheme clear`, beginning since base game version `1.21.110`
- Fix stuck progress arrow despite no process in Furnance/Blast Furnance/Smoker ([MCPE-63099](https://bugs.mojang.com/browse/MCPE-63099))

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=editor)

- The Copy to Clipboard button in the Detailed Structure Panel now switches to PastePreview when clicked pressed
- The Pencil in editor now has an ability to place "objects" in the scene. Objects are non-trivial Minecraft elements, like beds, doors, plants, etc.

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=user-interface)

- Fix incorrect order of Weathered Copper Block in creative inventory ([MCPE-189611](https://bugs.mojang.com/browse/MCPE-189611))
- Updated the Marketplace Pass Chevron on tiles and the purchase buttons to have the correct scaling
- Resized the icons on the marketplace sidebar to match the icon's proper size
- Resized the icons on the Inventory category selection to match the icon's proper size
- Addded a properly sized My Library button for the top bar to use
- Changed a couple locations where the information bulb appears to be the correct resolution
- Updated the Marketplace Error animations to display at the correct resolution
- Added new icons for the Sale banners to fit the pixelated style of the UI

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=graphical)

- Fixed block breaking texture being double the size for Shelf Blocks
- Updated Shelf Block model to remove overlapping texture UVs

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=technical-updates)

### Commands[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=commands)

- Fix issue preventing /place from working correctly in flat worlds

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=ai-goals)

- Transport Items Goal
  - Mobs with the goal will now queue when players are interacting with their target container if "allow_simultaneous_interaction" is false

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=editor)

- Added toast notifications support
  - Added support for toast notifications by introducing a new logChannel property and a subMessage field in the LogMessage class.
  - Log messages with the Toast channel now appear as popup notifications in the viewport when an error occurs.
  - The subMessage field allows for additional contextual information to be displayed in the toast.
- Added a new Setting – 'Show Toast Notifications'
  - A new checkbox setting, 'Show Toast Notifications', has been added to the Settings panel.
  - When enabled, Info and Warning messages will also be displayed as toast notifications, in addition to Errors.
- Updated Block Picker to give input focus to the search field when filter mode is Name
- Fixed a bug that caused selection brush indicator to remain after enabling Vibrant Visuals
- Updated summon tool to use Shift + Scroll to rotate the entity
- Updated messages to show up as notifications

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=api)

### `@minecraft/server`[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=%60%40minecraft/server%60)

- Fixed an issue where using /reload in the command console throws a Gametest error if using the GameTest.setAfterBatchCallback method
- Added `Dimension.getBiome(location: Vector3)` which can be used to locate the Biome of a given location.
- Added `Entity.getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined` method to `beta`.
- Added `Entity.getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];` methods to `beta`.
- Added `GetBlocksStandingOnOptions` interface
  - Optional Parameter `blockFilter?: BlockFilter` filters the block being returned.
  - Optional Parameter `ignoreThinBlocks?: boolean` determines if blocks of height 0.2 or lower are ignored.
- Added method `Camera.setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void` to beta

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=biomes)

- Fix for biome music component being removed from some biomes

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30174/R21U11-4-Preview?anchor=general)

- Adding custom biomes to a world that already has custom biomes is more stable now

\
