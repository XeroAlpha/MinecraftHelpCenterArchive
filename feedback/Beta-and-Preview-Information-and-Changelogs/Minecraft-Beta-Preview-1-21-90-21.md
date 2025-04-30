---
title: Minecraft Beta & Preview - 1.21.90.21
date: 2025-04-29T10:05:47Z
updated: 2025-04-30T12:37:48Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36203344176269-Minecraft-Beta-Preview-1-21-90-21
hash:
  user-content-known-issues: known-issues
  user-content-experimental-features: experimental-features
  user-content-user-interface: user-interface
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-accessibility: accessibility
  user-content-ambient-block-sounds: ambient-block-sounds
  user-content-ambient-dead-bush-sounds: ambient-dead-bush-sounds
  user-content-ambient-sand-sounds: ambient-sand-sounds
  user-content-ambient-wind-sounds: ambient-wind-sounds
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-items: items
  user-content-mobs: mobs
  user-content-vanila-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60-2.0.0: "200"
  user-content-block-components: block-components
  h_01JT0FVXTR54YYCJP1EZFJR953: blocks-1
  user-content-components: components
  user-content-editor: editor
  user-content-molang: molang
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JT0FVXTR4AKBKCYYVDN49KBN: api-1
  user-content-%60%40minecraft%2Fserver%60-2.1.0-beta: 210-beta
  h_01JT0FVXTRY8XXJBA0T2ECCHCD: block-components-1
  user-content-commands: commands
  user-content-jigsaw: jigsaw
  h_01JT0FVXTRFCD8F3XP2M092193: components-1
---

**Posted:** 29 April 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![Alt text: Happy ghasts and a ghastling in a snowy scene with vibrant visuals enabled ](https://feedback.minecraft.net/hc/article_attachments/36203349077133)

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).  
**Note:** This week's Preview might be delayed on iOS. We are working on getting it to you as soon as possible!

## Known Issues

- There is a known issue in this Beta and Preview that might cause some mob animation issues, such as freezing Camels and floating Foxes! We have a fix lined up and hope to have this resolved as soon as possible.

# Experimental Features

## User Interface

- The distance of players now modifies the size of the Locator Bar Player Dot instead of the opacity 

# Features and Bug Fixes

## Accessibility

- Text to speech will select an appropriate voice if available when changing in-game language on Android, iOS, and Win10. 

## Ambient Block Sounds

- How often and where some ambient block sounds play have been updated 

### Ambient Dead Bush Sounds

- Dead Bush ambient sounds now have a slightly increased chance of playing

### Ambient Sand Sounds

- Ambient sand sounds no longer requires sky access to play
- Ambient sand sounds now have a slightly decreased chance to play
- Ambient sand sounds can now play in all biomes 
- Terracotta block no longer triggers ambient sand sounds

### Ambient Wind Sounds

- Sand block no longer trigger ambient wind sounds
- Short Dry Grass block and Tall Dry Grass block can now trigger ambient wind sounds when above 2 Sand/Red Sand or Terracotta blocks
- Terracotta block no longer trigger ambient wind sounds

## Blocks

- Dispensing a lava bucket on a waterlogged Dried Ghast no longer duplicates the Dried Ghast 
- Dispensing a Lava Bucket on waterlogged blocks no longer empties the bucket without placing Lava ([MCPE-178295](https://bugs.mojang.com/browse/MCPE-178295)) 
- Maximum Beacon beam height is now 2048 ([MCPE-190223](https://bugs.mojang.com/browse/MCPE-190223))

## Gameplay

- Fixed an issue where swapping item slots during an attack against a mob would re-select the original item slot used during the attack instead of staying on the new inventory slot item 
- Fixed entering the water while sprinting from double tapping forward no longer automatically enters the swimming state ([MCPE-216867](https://bugs.mojang.com/browse/MCPE-216867)) 
- Fixed End islands portal teleports User outside the map borders instantly kills Player and causes them to lose all items in inventory ([MCPE-174465](https://bugs.mojang.com/browse/MCPE-174465))

## General

- Gamertags are used on all platforms to identify players in cross-platform multiplayer games

## Graphical

- The local player's vehicle will now always be eligible for rendering, no matter the orientation of the model compared to the render bounding box. 
- Fixed an issue in Vibrant Visuals where black boxes sometimes appeared on end portals when using TAAU at a non-native resolution ([MCPE-212398](https://bugs.mojang.com/browse/MCPE-212398)) 
- Fixed a bug in Vibrant Visuals where materials with certain properties rendered black

## Items

- Mace with Wind Burst enchantment once again launches players as high as it does on Java Edition ([MCPE-185829](https://bugs.mojang.com/browse/MCPE-185829))
- The recipe for Leads has been updated to no longer require a Slime Ball
- The recipe for the Dried Ghast Block has been updated to now require a Soul Sand Block rather than a Bone Block

## Mobs

- Mobs will no longer clip through blocks sometimes when viewing them at a distance when they auto step up a block 
- Shadows are no longer rendered for entities that are riding a vehicle, unless said vehicle is invisible ([MCPE-200797](https://bugs.mojang.com/browse/MCPE-200797))
- Pigs saddled by hand no longer drop two saddles when killed. (All pigs saddled by hand between 1.21.70 and now will still drop their duplicated saddles on death.)
- Increased attack range for Blaze from 16 to 48 blocks to match its target detection range ([MCPE-35647](https://bugs.mojang.com/browse/MCPE-35647))
- Increased Blaze attack sound distance to 32 to match Java
- The Ghastling can now follow Happy Ghasts
- Piglins can now give Dried Ghast Blocks when bartered with

## Vanilla Parity

- Fixes a bug where Sponges would absorb water from waterlogged Barriers ([MCPE-174826](https://bugs.mojang.com/browse/MCPE-174826))
- Baby Zombified Piglins no longer have golden swords equipped
- Zoglin and Zombified Piglin are no longer faster when chasing the player in the Bedrock version
- Piglins and Hoglins naturally spawned in Bastion Remnants will now drop XP when killed ([MCPE-166103](https://bugs.mojang.com/browse/MCPE-166103))
- Fixed the Frozen Peaks biome generation so, like Java Edition, no Ice blocks are generated in the sea under the top sheet. ([MCPE-194838](https://bugs.mojang.com/browse/MCPE-194838))
- Fixed a bug where players could not use usable items while sneaking and looking at interactive blocks ([MCPE-64477](https://bugs.mojang.com/browse/MCPE-64477))

# Technical Updates

## API

### `@minecraft/server` 2.0.0

- Added`isValid` property on `Camera` from beta to stable
- Moved `TicksPerDay` from beta to stable
- Moved enum `ScriptTintMethod` from beta to stable
- Moved enum `ScriptBlockMapColorComponent` from beta to stable 

## Block Components

- Fixed a bug with the `minecraft:geometry` component where the full block geometry identifier `minecraft:geometry.full_block` was being ignored for several behaviors, including:
  - Mob spawning (mobs with custom spawn rules can now spawn on blocks using full block geometry)
  - Chest obstruction (blocks with full block geometry will now obstruct Chests)
  - Grass and Farmland survival (Grass and Farmland will turn into Dirt with a block using full block geometry above them)
  - Nylium survival (Nylium will turn into Netherrack with a block using full block geometry above it)
  - Vine growth (Vines will now spread to blocks using full block geometry)
  - Breathability (Mobs and actors can no longer breathe in blocks using full block geometry)

## Blocks

- Replaced emitter_intensity with emitter_particle_count in block_destruction.json and block_slide.json. This is to go in line with the particle count field in the BlockDestructionParticlesComponent. emitter_intensity Will still be used in the previous versions of these files.

## Components

- Fixed incorrect warning for using valid entity with event identifier in "minecraft:entity_placer" component.
- The "minecraft:input_air_controlled" component no longer requires "use_beta_features" 

## Editor

- Added block picker modes to filter blocks either by name or color 
- Updated Editor logging to not flash the screen when a global error occurs
- Updated tutorial step confirmation for movement stage
- Updated the farm tool to have a preview bounding box 
- Updated the block image thumbnail size from 128x128 to 64x64 resulting in 1/4 texture memory requirements for terrain blocks 
- Fixed a bug to prevent crashes when multiple players try concurrently exporting
- Fixed a bug where block thumbnail images weren't correctly presented after changing video mode while in an Editor world 
- Fixed a crash while using the Flatten Brush tool while targeting air
- Fixed a bug where clicking the color box didn't close the open color picker popup

## Molang

- Fixed query.health to work for the Wither to properly reflect the elapsed ticks since it started dying 

# Experimental Technical Updates

## API

### `@minecraft/server` 2.1.0-beta

- Added enum `LiquidSettings` in `beta`. 
- Added optional property `liquidSettings` to scripting interfaces `JigsawPlaceOptions` and `JigsawStructurePlaceOptions` in `beta`. Defaults to `ApplyWaterlogging`.  
  New `cheatsRequired` property on CustomCommand interface.  
  If undefined or true (default is true), custom command execution requires that cheats are enabled. If false, then the custom command can execute without cheats enabled.
- Remove Player.isOp()
- Add read-only property `playerPermissionLevel` to `Player`
- Add property `commandPermissionLevel` to `Player`
- Added `PlayerPermissionLevel` enum with Visitor, Member, Operator values

## Block Components

- Added field `"uv_lock"` to **"minecraft:geometry"** block component behind UpcomingCreatorFeatures experiment
  - UV locking will allow faces to have the same texture orientations as the default geometry state, regardless of how `"minecraft:transformation"` component rotates the geometry.

## Commands

- Added optional property `liquidSettings` to `/place structure` and `/place jigsaw` commands. Defaults to `apply_waterlogging`.

## Jigsaw

- Jigsaw structures being placed in water no longer replace water incorrectly.
- Added optional property `liquid_settings` to `minecraft:jigsaw` JSON to allow control over handling liquids when placing structures. Defaults to `apply_waterlogging`.

## Components

- The BlockDestructionParticles component has a new field allowing creators to determine the amount of particles that are generated on the destruction of the block
