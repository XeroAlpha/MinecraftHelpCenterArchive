---
title: Minecraft Beta & Preview - 1.21.60.24
date: 2024-12-12T18:30:38Z
updated: 2024-12-12T19:48:11Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/32662041516045-Minecraft-Beta-Preview-1-21-60-24
hash:
  user-content-new-features-and-bug-fixes: new-features-and-bug-fixes
  user-content-achievements: achievements
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-items: items
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-stability-and-performance: stability-and-performance
  user-content-structures: structures
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  01JEY20HGE6FG6SRTN0M3V5FKY: blocks-2
  user-content-world-generation: world-generation
  user-content-technical-updates: technical-updates
  user-content-components: components
  user-content-collisions: collisions
  01JEY20HGF0R8J7BSEXKWSVV8Q: components-1
  user-content-editor: editor
  user-content-fog: fog
  01JEY20HGEVC493X5HZWFDHNFC: gameplay-1
  user-content-graphical: graphical
  user-content-graphics: graphics
  01JEY20HGFDVMWH7GXTHMP8Z3G: items-1
  user-content-scripting: scripting
  user-content-experimental-technical-features: experimental-technical-features
  01JEY20HGF33F566AH64PGXHB0: scripting-1
  user-content-camera: camera
---

**Posted:** 12 December 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![woeifjlskdjfliwejfv.jpeg](https://feedback.minecraft.net/hc/article_attachments/32662041494285)

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/)! Here's what's new this week:

# New Features and Bug Fixes

## Achievements

- The Monster Hunter achievement can now be unlocked by destroying a Creaking Heart while it has a spawned Creaking

## Blocks

- Tall Grass that is placed when using Bone Meal on Moss Blocks or Pale Moss Blocks no longer render only their bottom half ([MCPE-188789](https://bugs.mojang.com/browse/MCPE-188789))

## Gameplay

- The second passenger of a boat will no longer have large camera twitches when rotating toward the west direction

## Items

- Open Bundle textures updated such that there is no longer a missing string pixel ([MCPE-188355](https://bugs.mojang.com/browse/MCPE-188355))
- Resin Bricks are no longer found in Woodland Mansion chests ([MCPE-188234](https://bugs.mojang.com/browse/MCPE-188234))
- The XP rewarded for smelting Resin Clumps into Resin Bricks has been reduced from 0.3 to 0.1

## Mobs

- Creakings spawned from Creaking Hearts now always persist upon reloading the world ([MCPE-188352](https://bugs.mojang.com/browse/MCPE-188352))
- Creaking's eyes now properly flicker when the Creaking Heart which spawned it is destroyed

## Realms

- The friends tab on the Play screen now shows the correct list of joinable worlds and Realms
- Player permissions no longer revert to the previous state after leaving the Manage Realm tab
- Fixed issue where game mode appears as Unknown on the Realms Tab even if the Realm has a world with a valid game mode

## Stability and Performance

- Players on Switch should remain signed into their Microsoft Account after putting Minecraft app to sleep and resuming it

## Structures

- Some Savanna Villages no longer have a hole where a Dirt Path block should be

## User Interface

- \[PlayStation®5\] 'Enable Screen Reader' accessibility setting is now used to initialize Text-to-Speech during first launch
- Fixed a bug where the game could soft lock in certain scenarios when it was suspended right before the player dying
- Changed wording for enabling/disabling player's sleep skipping the night to "Skip night by sleeping" from "Beds work"
- Added additional debug info regarding Realms features in the general settings screen
- Updated the text on the new bed screen when sleeping to skip the night is disabled

## Vanilla Parity

### Blocks

- Sniffer Egg block now only provides center support on top and bottom faces ([MCPE-169520](https://bugs.mojang.com/browse/MCPE-169520))
- Shears can now be used on Cave Vines, Kelp, Twisting Vines, and Weeping Vines while sneaking ([MCPE-188474](https://bugs.mojang.com/browse/MCPE-188474))
- Using Shears on Cave Vines, Kelp, Twisting Vines, and Weeping Vines now plays the arm swing animation ([MCPE-188473](https://bugs.mojang.com/browse/MCPE-188473))
- Water and Lava no longer remain in the world when placing a Water or Lava Bucket against a Cave Vine with Glow Berries
- Collecting Glow Berries when holding Shears no longer picks the Berries and shears at the same time ([MCPE-188476](https://bugs.mojang.com/browse/MCPE-188476))
- Sniffer Egg block no longer provides side support to any block

## World Generation

- Creaking Hearts now generate more often in naturally generated Pale Oaks ([MCPE-187337](https://bugs.mojang.com/browse/MCPE-187337))
- Canyons now generate more often
- Canyons can once again reach the surface ([MCPE-121708](https://bugs.mojang.com/browse/MCPE-121708))
- Canyons can once again generate on the ocean floor
- Canyons now completely carve through Copper Ore veins and most other underground blocks ([MCPE-181410](https://bugs.mojang.com/browse/MCPE-181410))
- Canyons now properly interact with aquifers, filling with water instead of generating as disconnected segments

# Technical Updates

## Blocks

- Fixed issue where legacy data driven block didn't apply the render layer from the material instances component
- Fix spurious content log error: 'trying to override the Geometry component with blocks.json settings for a custom block'
- Door blocks use state `minecraft:cardinal_direction` instead of `minecraft:direction`. Uses string values ("north, south, east, west")

### Components

- Moved the `minecraft:liquid_detection` component out of the Upcoming Creator Features experiment for format_versions 1.21.60 and above

## Collisions

- Entities with no collision box but with the `minecraft:custom_hit_test` component are no longer sometimes unable to be interacted with

## Components

- Expand the `minecraft:breedable` component to allow inheriting properties to child entities  
  - Adds the new "property_inheritance" field which takes property name keyed objects
  - The objects in property_inheritance can contain a "mutation_chance" which give the chance it should not inherit from either parent
  - They can also contain the "mutation_values" array of values to select from if mutating and the component has random mutation set

## Editor

- Centers block thumbnail images in hotbar, block picker and lists
- Adds data-driven rendering to editor block images
  - Adds block name aliasing for signs
  - Adds support for namespace block names for `block://` protocol
- Player model is now fully hidden while in tool mode

## Fog

- Fixed issue where "inherit_from_prior_fog" field in biomes_client.json was ignored on first content on resource pack stack ([MCPE-187805](https://bugs.mojang.com/browse/MCPE-187805))

## Gameplay

- Fixed a bug where opening a chest while the clone command is spamming could crash the server

## Graphical

- Single-channel textures in resource packs are now interpreted as grayscale, rather than red. This change does not apply to single-channel UI textures, which were already interpreted as such

## Graphics

- client_biome JSON files now support a "surface_opacity" field in the "minecraft:water_appearance" component  
  - This change also restores swampland and warm_ocean surface opacity to what they were until recently when the client_biome JSON files were introduced

## Items

- Fixed an issue where non-host clients joining multiplayer sessions would be missing an icon for packs that had duplicate items
- The following legacy item (pre 1.16.100) components are now synced to the client:
  - `minecraft:camera`
  - `minecraft:seed`
  - `minecraft:max_damage`
  - `minecraft:hand_equipped`
  - `minecraft:stacked_by_data`
  - `minecraft:foil`
  - `minecraft:block`
  - `minecraft:use_duration`
  - `minecraft:max_stack_size`

## Scripting

- Fixed `Entity.getComponent` and `Entity.getComponents` from crashing when called within `EntityDieAfterEvent` callback.

# Experimental Technical Features

## Scripting

- `system.scriptEvent` updated to return a new error for exceeding the message size
- Structure
  - Added `waterlogged: boolean` parameter to `setBlockPermutation`. This can be used to set whether the specified block within a structure is waterlogged.
- Removed `ScriptBlockType.canBeWaterlogged` from Beta - instead, `ScriptBlock.canContainLiquid` or `ScriptBlockPermutation.canContainLiquid` can be used to check if a block can be waterlogged.

## Camera

- Aim assist will no longer get automatically enabled when switched to vanilla third-person-behind camera by default ([MCPE-188005](https://bugs.mojang.com/browse/MCPE-188005))
