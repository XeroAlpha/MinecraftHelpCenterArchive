---
title: Minecraft Beta & Preview - 1.21.50.28
date: 2024-11-07T16:40:42Z
updated: 2024-11-07T16:40:47Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31693342053517-Minecraft-Beta-Preview-1-21-50-28
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-pale-garden: pale-garden
  user-content-blocks: blocks
  user-content-copper-grate: copper-grate
  user-content-creaking-heart: creaking-heart
  user-content-eyeblossom: eyeblossom
  user-content-pale-moss-carpet: pale-moss-carpet
  user-content-features: features
  user-content-gameplay: gameplay
  user-content-items: items
  user-content-resin-bricks: resin-bricks
  user-content-mobs: mobs
  user-content-magma-cube: magma-cube
  user-content-realms: realms
  user-content-sound: sound
  user-content-creaking: creaking
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  01JC3QNKBSW3E9ZXCNN14BEYXW: blocks-1
  user-content-weapons: weapons
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-api: api
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-experimental-technical-updates: experimental-technical-updates
  01JC3QNKBS2QE3E1S7QMAXBECA: api-1
  user-content-block-components: block-components
  user-content-cameras: cameras
  user-content-ui: ui
---

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![sildfjsldfkjv.jpeg](https://feedback.minecraft.net/hc/article_attachments/31693342049421)

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on these new features at [aka.ms/mcgamedropfeedback](https://aka.ms/mcgamedropfeedback) , and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/) ! Here's what's new this week:

# Features and Bug Fixes

## Pale Garden

- The sky now appears darker at the horizon during rain while in a Pale Garden biome ([MCPE-187539](https://bugs.mojang.com/browse/MCPE-187539))

## Blocks

- Trial Spawners with a Mob set by a Spawn Egg no longer revert to an empty state when their cooldown ends ([MCPE-185960](https://bugs.mojang.com/browse/MCPE-185960))
- Azalea, Flowering Azalea, Mangrove, Cherry, and Pale Oak Leaves no longer display black pixels from a distance ([MCPE-156469](https://bugs.mojang.com/browse/MCPE-156469))
- Mangrove Leaves now have a dedicated texture for when "Fancy Leaves" is disabled ([MCPE-170516](https://bugs.mojang.com/browse/MCPE-170516))
- The orientation of the Pale Oak Leaves texture is no longer randomized for each block
- Moss Blocks now have a quieter step and land sound ([MCPE-176933](https://bugs.mojang.com/browse/MCPE-176933))
- Decorated Pots no longer activate Observers on world load
- Sculk Sensors now detect Eyeblossoms opening and closing
- Fixed all Skull block variants being turned into skeleton_skull when opening a world-template version locked below 1.21.40 or structures. Please note, this fix will not apply to already overwritten chunks
- Textures for Bricks, Nether Bricks, Red Nether Bricks, Resin Bricks, and related blocks have been updated to be horizontally aligned with all other brick blocks ([MCPE-187806](https://bugs.mojang.com/browse/MCPE-187806))
- Closed Eyeblossoms no longer poision Bees
- The Poison effect from Open Eyeblossoms now also damages Bees while they are within the block, rather than only upon exiting
- Reduced the duration of the Poison effect applied by Open Eyeblossoms
- Adjusted the frequency of ambient sounds emitted by Eyeblossoms, Creaking Hearts, and Pale Hanging Moss to better align with Java

### Copper Grate

- Liquids such as still Water and still Lava no longer tessellate incorrectly when Copper Grates cover them ([MCPE-178719](https://bugs.mojang.com/browse/MCPE-178719))

### Creaking Heart

- Creaking Heart drops more Resin Clumps when destroyed with the Fortune ([MCPE-187697](https://bugs.mojang.com/browse/MCPE-187697))

### Eyeblossom

- Eyeblossom's will now open and close even when snow-logged ([MCPE-187759](https://bugs.mojang.com/browse/MCPE-187759))

### Pale Moss Carpet

- The sides of Pale Moss Carpet are now shaded correctly ([MCPE-187373](https://bugs.mojang.com/browse/MCPE-187373))
- Cracks are now properly applied to the sides of Pale Moss Carpet when mined ([MCPE-187566](https://bugs.mojang.com/browse/MCPE-187566))

## Features

- The following feature types are now unable to place internal-only features
  - `minecraft:aggregate_feature`
  - `minecraft:snap_to_surface_feature`
  - `minecraft:surface_relative_threshold_feature`
  - `minecraft:weighted_random_feature`

## Gameplay

- Fixed clients sometimes not matching the servers rain/snow weather state ([MCPE-131325](https://bugs.mojang.com/browse/MCPE-131325))

## Items

- The Slate is no longer present in the Creative inventory outside of Education Edition ([MCPE-187696](https://bugs.mojang.com/browse/MCPE-187696))
- The effect durations of Suspicious Stew have been adjusted to be the same across versions
- Suspicious Stew from Open Eyeblossom now grants the same Blindness duration as Suspicious Stew from Azure Bluet ([MCPE-187802](https://bugs.mojang.com/browse/MCPE-187802))

## Resin Bricks

- Resin Bricks are now used to apply the Resin Armor Trim instead of Resin Clumps

## Mobs

- The Creaking will no longer sometimes phase through blocks if you are looking at it far away
- Ravagers can now destroy all types of leaf blocks, rather than a limited selection ([MCPE-169375](https://bugs.mojang.com/browse/MCPE-169375))
- Bees can no longer be tempted or pollinate within Closed Eyeblossoms
- Feeding Bees Open Eyeblossoms now applies the Poison effect
- Feeding Bees Wither Roses now applies the Wither effect

### Magma Cube

- Magma Cube model part UVs no longer overlap each other

## Realms

- Fixed crash on several platforms when navigating back to Realms Stories after inviting a player on the manage members screen

## Sound

- Fall & step sound events for Sponge, Wet Sponge, Creaking Heart, Resin Brick and Resin blocks changed to "player"
- Adds Jump and Land sound events to Creaking Heart, Resin Bricks and Resin Blocks ([MCPE-187713](https://bugs.mojang.com/browse/MCPE-187713) , [MCPE-188088](https://bugs.mojang.com/browse/MCPE-188088))
- Creaking Heart breaking and placing sounds are now quieter
- Added more breaking sounds for Resin

### Creaking

- Creaking now plays 4 different sway sounds
- Creaking now plays new attack sounds

## User Interface

- Items in a Bundle tooltip now have a gray background
- Touch controls: Fixed a bug where the camera could sometimes get stuck after leaving a boat ([MCPE-184406](https://bugs.mojang.com/browse/MCPE-184406))
- Bundle tooltip correctly appears after being placed from the cursor
- Gamepad tooltips are now correct when hovering the crafting output in Inventory Screen and Crafting Table Screen with a bundle on the cursor
- Screenshots: Added the ability to Feature and Showcase screenshots for others to see when they visit your Profile. Added ability to set custom world thumbnail from screenshots.

## Vanilla Parity

- Managing to kill a Wolf, Bee, or Silverfish in one hit no longer angers nearby mobs of the same type
- Managing to kill a Zombified Piglin in one hit no longer angers nearby Zombified Piglins ([MCPE-68327](https://bugs.mojang.com/browse/MCPE-68327))

### Blocks

- Head Blocks can now be placed on the side of blocks even if they lack a supporting block below them

## Weapons

- The game no longer crashes if a mob attacks with an item that breaks during the attack

# Technical Updates

## Add-Ons and Script Engine

- Fixed a bug where vanilla items with the "minecraft:block_placer" component had the wrong icon on split-screen clients.

## API

- Fixed an API script processing error that could result in an infinite loop

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor**. Learn [how to use](https://learn.microsoft.com/en-us/minecraft/creator/documents/editoroverview?view=minecraft-bedrock-stable)   the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions)   forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit)   and [samples](https://github.com/Mojang/minecraft-editor-extension-samples) .

This week we're releasing Editor V0.8! This release was jam packed with tons of few features and improvements, including:

- Flatten Tool
- Fill Tool
- Smooth Tool
- Quick Extrude
- Repeater Tool
- Farm Tool
- 2D Directional XZ Compass
- Custom Blocks
- Block Picker Updates
- Select with Brush
- Carve with Brush
- Brush Offset
- Locate Biome Tool
- Grapple/locomotion Updates
- Middle Mouse Block Selection
- Custom Widget Improvements

Checkout the full changelog with demos at the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions)   page.  
Updates this week:

- Added a new Flatten Brush: drag this brush over a block to turn blocks above it into air. This brush has a customizable height and radius.
- Added a Fill tool to allow creators to quickly change block groups
- Added a Smooth tool to easily smooth terrain
- Added a Quick Extrude tool to allow creators to extrude block groups
- Added a Repeater tool to repeat a selection volume along X, Y, and Z
- Added a Farm tool to quickly drop in farms into a world
- Added friendly names in the Block Picker
- Added a 2D directional XZ compass to game viewport to aid with building
  - Added the ability to click on the compass to snap to closest cardinal direction
- Added a configurable Fly Speed Multiplier.  
  - Added SpeedSettings
  - New Slider in View-\>View Settings to configure fly speed multiplier between 1 and 10
  - Fly Speed Multiplier only takes effect while in Tool/Editor mode
- Added quick action for Selection::Delete
- Added new axis and plane restriction options in the Widget Gizmo Component creation options. Creators can restrict which axes of movement are afforded by their gizmos
- Added Block Filter Disabled state
- Added M key to toggle between mask mode and disabled
- Added R key to toggle between replace mode and disabled
- Added support for persistence in hotbar block palettes
- Added context menu to the options button next to hotbar for creating and managing new palettes
- Added a new `session.extensionContext.blockUtilities` object which will present a number of high-performance common block operations. First function added is a `fillVolume` function to perform large scale fill operation which honors Editors different block palette types
- Updated default filters with air (when not loaded previous state)
- Updated the icon for Selection::Deselect
- Updated block IDs in the UI to use localized names
- Updated checkbox labels to be clickable
- Updated property pane information tooltip icon to be more visible
- Updated the View-\>Log Panel menu item to now expand the panel drawer
- Fixed a bug that caused dropdowns to be truncated at the window edges

## Entity Components

- Added the 'minecraft:ignore_cannot_be_attacked' component and moved the filter from 'minecraft:cannot_be_attacked' to it. This allows content to have custom mobs which bypass the 'cannot_be_attacked' component (for example the one on the Ghast) without requiring a modification of the attacked mob's settings.

# Experimental Technical Updates

## API

- Moved `BlockFillOptions` from beta to `v1.16.0`
- Moved `UnloadedChunksError` from beta to `v1.16.0`
- Fixed bug where `Dimension.fillBlocks` would set blocks outside of the ticking area when `ignoreChunkBoundErrors` was set to true.
- Dimension
  - Moved `containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean` from beta to `v1.16.0`
  - Moved `getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume` from beta to \`v1.16.0
  - Moved `fillBlocks(volume: BlockVolumeBase, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume;` from beta to `v1.16.0`
- ItemUseOnBeforeEvent
  - Move property `readonly isFirstEvent: boolean` from beta to `v1.16.0`
- ItemUseOnAfterEvent
  - Move property `readonly isFirstEvent: boolean` from beta to `v1.16.0`
- CameraFixedBoomOptions
  - Added property `entityOffset?: Vector3`
- Added new `CameraTargetOptions` parameter inside `setCamera` for `beta`. This can be used to modify the `minecraft:free` preset if the Focus Target experimental camera toggle is enabled

## Block Components

- Modified `"ambient_occlusion"` field for `"minecraft:material_instances"` component to be a float value, requires **UpcomingCreatorFeatures** experiment

## Cameras

- Tracking a target using the free camera preset: optional "tracking_radius" float value for setting a listening radius for a target entity
- Added content error when trying to target an entity when not on a free camera.

## UI

- Added support for input glyph replacement for signed books. For example, using input string ":\_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.
