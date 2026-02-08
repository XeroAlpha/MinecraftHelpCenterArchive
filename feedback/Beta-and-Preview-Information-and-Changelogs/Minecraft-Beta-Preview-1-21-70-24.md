---
title: Minecraft Beta & Preview - 1.21.70.24
date: 2025-02-19T13:44:09Z
updated: 2025-02-19T16:26:12Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34396781018893-Minecraft-Beta-Preview-1-21-70-24
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-spawn-eggs: spawn-eggs
  user-content-biomes: biomes
  h_01JMFFY1RD0W9YPCQ22NW8AA5K: leaf-litter
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphics: graphics
  user-content-sound-for-leaf-litter-and-grass: sound-for-leaf-litter-and-grass
  user-content-user-interface: user-interface
  user-content-wolf-variants: wolf-variants
  h_01JMFG1E1KFPDZGCQTZSMSE783: technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60-1.18.0: "1180"
  user-content-blocks: blocks
  user-content-components: components
  user-content-creator: creator
  user-content-editor: editor
  user-content-goals: goals
  user-content-network-protocol: network-protocol
  user-content-technical-experimental-updates: technical-experimental-updates
  h_01JMF79DQKS3THZMG986S5F9H4: api-1
  user-content-%60%40minecraft%2Fserver%60-2.0.0-beta: 200-beta
  user-content-experimental: experimental
  user-content-graphical: graphical
---

**Posted:** 19 February 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![A dropped panda spawn egg in a bamboo jungle. There are pandas nearby, and a red parrot can be seen in the tree.](https://feedback.minecraft.net/hc/article_attachments/34396781014285)

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/)!

Enjoy!

# Features and Bug Fixes

## Spawn Eggs

- Overhauled the visuals of each Spawn Egg to improve readability and accessibility
  - Each Spawn Egg now has their own unique visual which captures the personality and character of the mob it spawns
  - Each egg visual varies in shape to reflect the in-world size of the mob it spawns
    - For example, smaller mobs tend to have a smaller Spawn Egg

## Biomes

- Fixed a bug where leaves in snowy biomes were not turning white while snowing ([MCPE-189693](https://bugs.mojang.com/browse/MCPE-189693))

## Leaf Litter

- Leaf Litter is tinted based on which biome it's in

## Gameplay

- Fixed an issue where destroying and picking up a Shulker box would make it appear invisible in the inventory until world reload 

## General

- Fixed an issue where chunks weren't saving properly on older worlds

## Graphics

- Fire overlay will no longer animate while the game is paused ([MCPE-188464](https://bugs.mojang.com/browse/MCPE-188464))
- Blocks will no longer play their animations while the game is paused ([MCPE-188459](https://bugs.mojang.com/browse/MCPE-188459)) 
- Held items are no longer displayed incorrectly when the game is paused ([MCPE-190218](https://bugs.mojang.com/browse/MCPE-190218)) 
- Hand position should remain the same while the game is paused ([MCPE-190290](https://bugs.mojang.com/browse/MCPE-190290)) 

## Sound for leaf litter and grass

- Lowered volume in sound files for Leaf Litter (break, step, place)
- Lowered volume in sound files for Grass (dig)

## User Interface

- Taking screenshots no longer takes the player out of the pause screen
- The "Place" controller tooltip is no longer incorrectly hidden when being able to place additional Pink Petals, Wildflowers, or Leaf Litter. ([MCPE-190225](https://bugs.mojang.com/browse/MCPE-190225))
- Changes have been made to the Multiplayer tab in create new world and edit world! Player permission icons have been updated to better signal the roles, and on PlayStation and Nintendo consoles now shows a message informing the player that they need to sign in to access multiplayer features. Below the message there's a button that will take the player to respective console sign in flow

## Wolf Variants

- Added 6 new Wolf audio variants with unique ambient, hurt, death, growl, whine, and pant sounds 
  - Every Wolf will have a random audio variant assigned to it from the 6 new variants and the original one
  - The audio variant is not related to the texture variant

# Technical Updates

## API

### `@minecraft/server` 1.18.0

- Moved `CameraFixedBoomOptions` from beta to stable
- Moved `LiquidType` enum from beta to stable
- Moved liquid detection methods in `Block` from beta to stable
- Moved liquid detection methods in `BlockPermutation` from beta to stable
- Moved method `Player.spawnParticle` from beta to stable

## Blocks

- The minecraft:material_instances component supports an optional "tint_method" field in its instance definitions
  - "tint_method" is a string field that multiplies a face color with a tint computed with the biome the block is in. Supported values are "none, "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass", and "water".
  - Held block-items are tinted as if they were in the "plains" biome.\
    Example:\
    "minecraft:material_instances": {\
    "\*": {\
    "texture": "minimal",\
    "render_method": "opaque",\
    "tint_method": "water"\
    }

## Components

- Added the "minecraft:input_air_controlled" component, that enables controlling flying rideables 
  - Functions similarly to "minecraft:input_ground_controlled", but instead of limiting acceleration to the XZ-plane, this component applies acceleration in the direction the player is looking in three dimensions
  - Supports adjustments to strafing and backward movement speeds, allowing entities to fly at equal speeds in all directions or move slower when strafing or reversing
  - This component is experimental and as such requires "use_beta_features" to be enabled
  - It may undergo significant changes or even be replaced as development progresses

## Creator

- ItemTag support in the `match_tool` loot table condition no longer requires enabling the "Upcoming Creator Features" experiment toggle

## Editor

- Added Terracotta to block picker
- Added Workbench support for selections allowing for updated to all blocks of the same type in the selection
- Updated various icons in editor UI for better resolution and functional clarity
- Updated Flatten Tool to no longer stays active when changing to Crosshair Mode
- Updated pyramid brush maximum height to 40 blocks 
- Removed End Gateway or Structure Block from block picker
- Fixed a bug that filtered stain glass blocks from block picker
- Fixed a bug that caused Project Through Water checkbox to be active for Keyboard only cursor control in panes
- Fixed a bug that caused custom time settings to be disabled for Time of Day pane
- Fixed a bug that caused player positions limit to have wrong values in Navigation Panel. 
- Fixed a bug where releasing the scrollbar after dragging outside the dropdown menu closed it. 
- Fixed a bug that caused button layout and inner icon size to be incorrect
- Fixed a render issue related to Banner, Conduit, Creeper Head, Decorated Pot, Dragon Head, Piglin Head, Player Head, Skeleton Skull, Wither Skeleton Skull, and Zombie Head thumbnails 
- Fixed an assert/crash due to custom block rendering components in creator packs or addons 
- Fixed Workbench functionality with block that use the `minecraft:block_face` and `minecraft:vertical_half` properties.

## Goals

- Added "use_home_position_restriction" field to "minecraft:behavior.float_wander" AI goal to control whether mobs respect home position restrictions when selecting target positions
  - Defaults to false for entities with format version below 1.21.70, and true for 1.21.70 and later
  - When true, the mob will respect home position restrictions when selecting target positions

## Network Protocol

- Added ActorFlags::WASD_AIR_CONTROLLED

# Technical Experimental Updates

## API

### `@minecraft/server` 2.0.0-beta

- Fixed a bug where the `typeid` property of the `Effect` class was being translated based on your language option
- Raised the limit for Lore Entry length from 50 to 1000 and the number of lines from 20 to 100 when using `ItemStack.setLore`
- Added three new methods to `Player`. These Entity Overrides are only applied to the target `Player`. Changes are not applied until the next tick and will not apply to other players.
  - `setPropertyOverrideForEntity`: Overrides an Entity Property on the target Entity to the provided value. This property must be client synced.
  - `removePropertyOverrideForEntity`: Removes the override of the specified Entity Property on the target Entity.
  - `clearPropertyOverridesForEntity`: Removes all overrides of any Entity Properties on the target Entity.

## Experimental

- Removed the Experimental Third Person Cameras toggle and added an Experimental Creator Camera Features toggle for all future experimental cameras

## Graphical

- Decorated pots now render correctly when held in hand in the Deferred Technical Preview. ([MCPE-181679](https://bugs.mojang.com/browse/MCPE-181679))
- Added 4 optional components to the Client Biome JSON 1.21.70 Schema. However, these components are intended for future use with the Deferred Technical Preview and have no effect in current builds, Preview or otherwise. With this change, Deferred resource pack rules have changed slightly:
  - The game will now load all valid JSON files in the "atmospherics", "color_grading", "lighting" and "water" directories of a Deferred resource pack. Every valid JSON file in each category must have a unique "`identifier`" field in its schema.
  - Reserved filenames for each schema category (e.g., "atmospherics/atmospherics.json" or "lighting/global.json") will still be treated as the global/default settings for a pack.
  - If a Biome JSON in a Deferred resource pack contains any of these new identifier components, then the identifiers will be validated against the identifiers found in the respective set of Deferred configurations. For instance, if a Biome JSON contains a "`minecraft:water_identifier`" entry, then the supplied identifier must correspond to a valid "`identifier`" in one of the pack's Water JSONs.
  - If a Biome JSON doesn't contain one of the new identifiers, then the global/default identifier from the reserved filenames will automatically be added to said biome.

``` hljs
"format_version": "1.21.70",
"minecraft:client_biome": {
  ...
  "components": {
    ...,
    "minecraft:atmosphere_identifier": {
      "atmosphere_identifier": "mypack:default_atmospherics"
    },
    "minecraft:color_grading_identifier": {
      "color_grading_identifier": "mypack:default_color_grading"
    },
    "minecraft:lighting_identifier": {
      "lighting_identifier": "mypack:default_lighting"
    },
    "minecraft:water_identifier": {
      "water_identifier": "mypack:default_water"
    }
  }
}
```
