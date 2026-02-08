---
title: Minecraft Beta & Preview - 1.21.80.27
date: 2025-04-08T14:47:55Z
updated: 2025-04-08T15:48:00Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/35680472765325-Minecraft-Beta-Preview-1-21-80-27
hash:
  user-content-experimental-features: experimental-features
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-commands: commands
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-ambient-block-sounds: ambient-block-sounds
  user-content-blocks: blocks
  h_01JRAXX2B9TKNE8MPCW7T7S0MP: gameplay-1
  user-content-general: general
  user-content-mobs: mobs
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60-1.19.0: "1190"
  user-content-%60%40minecraft%2Fserver%60-2.0.0-beta: 200-beta
  user-content-%60%40minecraft%2Fserver-ui%60-2.0.0-beta: 200-beta-1
  user-content-block-components: block-components
  h_01JRAXX2B9318SD92ZH2ZZNXW2: blocks-1
  user-content-components: components
  user-content-editor: editor
  user-content-structures: structures
---

**Posted:** 8 April 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![r21u7_5.jpg](https://feedback.minecraft.net/hc/article_attachments/35680472763277)

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).\
\
**Note:** This week's Preview and Beta might be delayed on PlayStation 4. We are working on getting it to you as soon as possible!

 

## Experimental Features

### Gameplay

- Added 'minecraft:replace_biomes' component to allow for custom biomes to replace portions of vanilla biomes. To use, add to custom biome files in behavior packs
  - Known issues: Mob spawning on custom blocks is not working, removing an add-on with a custom biome will cause issues, a total replacement of all biomes will cause the locate structure command to lag

### Graphical

- Re-enabled local exposure on all platforms in Vibrant Visuals mode

- Fixed an issue that caused candles, chiseled bookshelves and dried kelp blocks not to use PBR textures in Vibrant Visuals mode and Raytracing mode ([MCPE-132021](https://bugs.mojang.com/browse/MCPE-132021))

- Stained glass now renders with correct colors when using Vibrant Visuals

### Commands

- Added the `/controlscheme` command for switching control schemes when the Experimental Creator Camera toggle is enabled

## Features and Bug Fixes

### Ambient Block Sounds

- The ambient sounds for Sand block, Dead Bush block and Terracotta block can now play ([MCPE-194677](https://bugs.mojang.com/browse/MCPE-194677))

### Blocks

- Basalt can be created if the soul soil is placed last after the lava and blue ice are already in place again ([MCPE-194008](https://bugs.mojang.com/browse/MCPE-194008))

### Gameplay

- Changed Elytra so that while gliding, using a firework will only be used as a boost even if placed on a block

- Fixed an issue where using a Firework with Elytra in another block like Sugar Cane would result in rubberbanding ([MCPE-191595](https://bugs.mojang.com/browse/MCPE-191595))

### General

- Enable *Filter Profanity* toggle on Xbox platforms

- Enable *Filter Profanity* toggle on Nintendo platforms

### Mobs

- Fixed Evoker legs not moving when walking ([MCPE-191193](https://bugs.mojang.com/browse/MCPE-191193))

### User Interface

- Bundle UI now correctly disappears when interacting with Inventory tabs in Pocket UI

- Fixed a bug where the game would be unresponsive for a short while after leaving the bed screen

## Technical Updates

### API

### `@minecraft/server` 1.19.0

- Moved methods `StructureManager.placeJigsaw` and `StructureManager.placeJigsawStructure` from `beta` to `1.19.0`.
- Moved interface `JigsawPlaceOptions` from `beta` to `1.19.0`
- Moved interface `JigsawStructurePlaceOptions` from `beta` to `1.19.0`
- Moved error class `PlaceJigsawError` from `beta` to `1.19.0`

### `@minecraft/server` 2.0.0-beta

- Coroutines (promises) are now flushed in early execution to allow async imports to interact with early execution APIs like Custom Components and Custom Commands.
- Added support for custom command enums.
- Added `Enum` type to `CustomCommandParamType`
- `spawnEntity` method of `Dimension` no longer supports using a spawn event inside the `identifier` parameter. `SpawnEntityOptions` interface now has an optional string member `spawnEvent?: string` for specifying a spawn event to be sent to the entity when it is spawned. Please update any existing usages of spawn events inside `identifier` to instead use this new `spawnEvent` option. For example:\
   `spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", {x:0, y:0, z:0})` should become `spawnEntity("minecraft:horse", {x:0, y:0, z:0}, {spawnEvent: 'minecraft:ageable_grow_up'})`
- `EntityGroundOffsetComponent` has been remove
- `Block` method `getComponent` will return `BlockCustomComponentInstance` for custom components registered with `BlockComponentRegistry` in `2.0.0`

### `@minecraft/server-ui` 2.0.0-beta

- Class `ModalFormResponse`
  - Changed type for `formValues` property from `(boolean | number | string)[]` to `(boolean | number | string | undefined)[]`.\
      - New Signature: `formValues?: (boolean | number | string | undefined)[]`.\
      - Old Signature: `formValues?: (boolean | number | string)[]`.

  - `formValues` array now contains entries for all the elements provided by the request. It means that labels, headers, and dividers are considered into the response with an `undefined` value.

### Block Components

- Fixed isotropic textures in `"minecraft:material_instances"` being squashed and stretched for non-square faces

### Blocks

- New field "condition" added to the culling rules schema. It provides more control over which neighbor blocks will trigger a face or part to be culled.
  - The supported values are "default", "same_culling_layer", "same_block" and "same_block_permutation".
    - "default" will pass the condition if the neighbor block is full and opaque
      - All conditions are an extension of "default", meaning a full and opaque neighbor will always be a passing condition, before the extended "same\_\*" condition is checked
    - "same_culling_layer" will pass the condition if the neighbor block shares the same "culling_layer" as the block being occluded, defined in the geometry component
      - If either of the culling layers being compared is "minecraft:culling_layer.undefined", the condition will never pass
    - "same_block" will pass the condition if the neighbor block has the same identifier
    - "same_block_permutation" will pass the condition if the neighbor block has the same identifier and is the exact same permutation
  - Additionally, the feature is currently only usable behind the "upcoming creator features" toggle.
- New field "culling_layer" added to the block's geometry component. It allows different blocks to be grouped together when using the "same_culling_layer" condition in a culling rules file.
  - When using the minecraft namespace, the only allowed culling layer identifiers are : "minecraft:culling_layer.undefined" or "minecraft:culling_layer.leaves".
  - Additionally, the feature is currently only usable behind the "upcoming creator features" toggle.

### Components

- Content errors will log missing entity references in the "minecraft:entity_placer" and "minecraft:projectile" item components

### Editor

- Fixed a bug where moving a structure to the clipboard while in Paste Preview (with no actual active clipboard) did not update the clipboard client widget

- Fixed some bugs around freehand selection with very large volumes

- Capped some of the brush volume max sizes so that they don't exceed our max voxel count for selection operations

- Fixed a bug where a number of script widget errors would fire when entering The Nether as the startup dimension at Editor open

- Fixed a bug that caused mouse cursor to be released when changing to Crosshair mode

- Adding an animation on the viewport and opening the log panel when an error is logged.

- Re-organized core modal tools in tool rail

- Added an indicator to the 3D Block Cursor to show the face that the mouse is pointing at

- Added a new tutorial flow which can be activated from Help menu

### Structures

- Trail ruins generate at the same location in Mutated Birch Forests between Java and Bedrock on the same world seed
