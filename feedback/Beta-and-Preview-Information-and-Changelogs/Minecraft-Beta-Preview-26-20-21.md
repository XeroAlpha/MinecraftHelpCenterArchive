---
title: Minecraft Beta & Preview - 26.20.21
date: 2026-03-17T09:47:12Z
updated: 2026-03-18T14:54:29Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44351318785165-Minecraft-Beta-Preview-26-20-21
hash:
  h_01KJWVNWWSJJ5RPG1AV39PK5W6: information-on-minecraft-preview-and-beta
---

**Posted:** 17 March 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

**Note**: Realms cannot be joined in this week's preview, they will be back working next week. Thanks for your patience!

# Features and Bug Fixes

## Blocks

- Tall Seagrass no longer breaks when generated using Bonemeal ([MCPE-112509](https://bugs.mojang.com/browse/MCPE-112509))

- Bone Meal no longer produces Seagrass's upper half above other plants ([MCPE-224063](https://bugs.mojang.com/browse/MCPE-224063))

## General

- Fall damage visual effects now trigger when the entity hits the ground

## Graphical

- The baby Bees' textures have been updated to match the adult Bees' textures ([MCPE-236685](https://bugs.mojang.com/browse/MCPE/issues/MCPE-236685))

- Fixed an issue where Static Colored Lighting wouldn't propagate in chunks that were completely empty in Vibrant Visuals mode.

- Fixed broken or incorrect textures after loading a world ([MCPE-202009](https://bugs.mojang.com/browse/MCPE-202009))

## Input

- Fixed changing from handheld to docked Joy-Cons preventing input

## Mobs

- Updated the Snow Fox baby's sleeping texture; eyes are now dark blue to match adult's sleeping texture ([MCPE-236972](https://bugs.mojang.com/browse/MCPE-236972 "https://bugs.mojang.com/browse/mcpe-236972"))

- Baby Zombies are no longer levitating when riding baby mobs

- The rabbits' idle animation has been disabled while they are leashed

- The baby Wolves' hind legs are now rotated correctly while sitting

- Fixed a bug where Slime family mobs' bounce animations would snap abruptly

## Sounds

- Baby spawn sounds now play with the correct pitch for the following baby mobs:

  - Baby Pig
  - Baby Cat
  - Baby Chicken
  - Baby Horse
  - Baby Wolf

## Stability and Performance

- Fixed a crash that could occur when loading the Token FAQ page on PlayStation

- Fixed crash that could occur when logging Molang content

## User Interface

- Fixed caret movement acting twice and backspace deleting too many characters when using a physical keyboard on iOS

- Improved how scrollable screen content is displayed in Ore UI menu screens on devices with notches, rounded corners or safe zones applied. Content now smoothly scrolls beneath the safe area instead of being cut off.

- Furnace recipes will now unlock when you collect the corresponding material. The feature is available under "Experimental"

# Technical Updates

## Blocks

- The pick-block action will now give the desired item in a flowerpot when the "minecraft:block_placer" component is defined with "replace_block_item" set to true ([MCPE-234586](https://bugs.mojang.com/browse/MCPE-234586))

- Fix validation of large geometries that are scaled down with a transformation component ([MCPE-236317](https://bugs.mojang.com/browse/MCPE-236317))

## AI Goals

- Made the schema for `minecraft:behavior.jump_around_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer. Float Range fields `valid_distance_to_target` and `landing_distance_from_target` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made the schema for `minecraft:behavior.jump_to_block` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer. Float Range field `cooldown_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made the schema for `minecraft:behavior.move_around_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer. Float Range field `destination_position_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.

  - `minecraft:behavior.find_cover`
  - `minecraft:behavior.find_mount`
  - `minecraft:behavior.find_underwater_treasure`
  - `minecraft:behavior.flee_sun`

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.

  - `minecraft:behavior.float`
  - `minecraft:behavior.follow_owner`
  - `minecraft:behavior.follow_parent`
  - `minecraft:behavior.hold_ground`

## API

- Added `maximumRenderDistance` property to `DebugShape` .

- Added `maximumRenderDistance` property to `PrimitiveShape` .

- The default render distance used by `DebugShape` and `PrimitiveShape` is now your client's render distance, instead of infinity. If you'd like to match the old behavior, you can set `maximumRenderDistance` to a very large number (Infinity isn't valid in scripting due to platform differences unfortunately).

- Added `InvalidType` and `UnsupportedValue` to `InvalidArgumentErrorType` enum in `@minecraft/common` v1.3.0

### DDUI

- Made close buttons client authoritative so that forms close more quickly.

## Editor

- Toast notifications are grouped when multiple errors are triggered rapidly.

- Disabled left mouse button paste in Paste Preview when Keyboard-only cursor mode is active

- Added the Primitives tool to the Editor tool rail

- Fixed Paste Preview appearing at an unpredictable position when entering Keys Only cursor mode from the dropdown, T key, or tool activation while Keys Only is already selected. The preview now appears at the block the player is looking at, or 32 blocks in front of the camera if no block is in view.

- Implemented auto-save for structure detail setting and removed Save button and Save menu from structure detail pane

- The Vibrant Visuals generate resource pack button now exports any edited configurations to a resource pack with a folder link provided

## Entity Filters

- Removed "has_equipment_block_tag" entity filter

  - We should not be looking at block tags on items for item behavior, and because of this the filter is being removed

## General

- Upgraded particles, trading, and cameras JSON resources to Cereal slice 1.26.10 and re-serialized to align with the updated schema.
- Updated new features in structure pools to include data driven features.

## Items

- New 1.26.10 attachables now use a new 'controller.render.armor.v2' render_controller rather than using an updated 'controller.render.armor'. Fixes some creator content's custom armor not rendering properly

## Network Protocol

- Modified the binary format of PlayerEnchantOptionsPacket

## User Interface

- Fixed an issue causing the HUD to fail to load after disabling Screen Animations in-game, sometimes causing a soft-lock issue ([MCPE-236881](https://bugs.mojang.com/browse/MCPE-236881))

# Experimental Technical Updates

## API

- Added `opPlayer` and `deopPlayer` functions to `@minecraft/server-admin` in beta
- Added `allowCheats` boolean property to the `World` class in `@minecraft/server` in beta
- Added WebSocket clients to `@minecraft/server-net` in beta
  - `WebSocket` class added which is used to create and connect websocket clients. This is created as the global `websocket` object in `@minecraft/server-net`
  - `WebSocketClient` class added to interact with the websocket and receive data from the server through events
- Moving `BiomeTypes.getAll` to `2.7.0` in `@minecraft/server`
- Moving `BiomeTypes.get` to `2.7.0` in `@minecraft/server`
- Moving `BiomeType.hasTags` to `2.7.0` in `@minecraft/server`
- Moving `BiomeType.getTags` to `2.7.0` in `@minecraft/server`
