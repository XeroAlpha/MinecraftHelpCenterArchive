---
title: Minecraft Beta & Preview - 1.21.100.21
date: 2025-06-18T11:07:31Z
updated: 2025-06-18T15:43:17Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37453175894669-Minecraft-Beta-Preview-1-21-100-21
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-item-use: item-use
  user-content-mobs: mobs
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  h_01JY1BACEZCAEVX1P3V3FHYY74: mobs-1
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  h_01JY1BACEZB45RJHRN5P2YYKP3: api
  user-content-block: block
  user-content-block-components: block-components
  user-content-commands: commands
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  h_01JY1BACEZG0J21NAC2TMQS55C: graphical-1
  user-content-molang: molang
  user-content-textures: textures
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JY1BACEZC4T9Z09656NVV7D1: api-1
  h_01JY1BACEZXJ7TVRTVWBHW7N3Y: gameplay-1
---

**Posted:** 18 June 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

 

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

Enjoy!

 

# Features and Bug Fixes

## Gameplay

- The block breaking animation will now stop when opening the Pause Menu ([MCPE-191029](https://bugs.mojang.com/browse/MCPE-191029))

## Graphical

- Moved the graphics mode and render distance options to the top of video settings for convenience
- Fixed an issue where certain blocks did not show a highlight when they were interactable, if outline selection was disabled ([MCPE-180453](https://bugs.mojang.com/browse/MCPE-180453))
- Adjusted default rendering position for players holding leads if a lead_hold locator is not defined on the model, such that the lead does not render out of the player's forehead ([MCPE-96298](https://bugs.mojang.com/browse/MCPE-96298))
- Fixed the animation of End Crystal healing beams in Vibrant Visuals ([MCPE-208094](https://bugs.mojang.com/browse/MCPE-208094))
- Fixed the animation of Beacon beams in Vibrant Visuals ([MCPE-220579](https://bugs.mojang.com/browse/MCPE-220579))
- Weather events now affect the scene illumination and the color of clouds and sky in Vibrant Visuals

## Item Use

- Quickly swapping the selected item slot after a Riptide Trident uses will not rewind the player position anymore ([MCPE-190952](https://bugs.mojang.com/browse/MCPE-190952))

## Mobs

- Fixed a bug where Foxes could not pick up non-stackable items ([MCPE-178487](https://bugs.mojang.com/browse/MCPE-178487))
- Fixed a bug where Foxes would wear picked up armor instead of holding it ([MCPE-153135](https://bugs.mojang.com/browse/MCPE-153135))
- Bogged can now spawn as Spider Jockeys in Swamps and Mangrove Swamps ([MCPE-221119](https://bugs.mojang.com/browse/MCPE-221119))
- Leads can no longer be used on untamed Wolves that have been angered ([MCPE-178947](https://bugs.mojang.com/browse/MCPE-178947))

## User Interface

- Fixed a bug where the death screen could be shown while the player was alive when certain gamepad buttons where pressed at the same time
- Added preview sounds for the new audio tab

## Vanilla Parity

### Mobs

- Endermen can now pick up all block types they are able to in Java Edition
- The block carried by an Enderman can now be set via commands, similar to Foxes and Allays; it will then attempt to place that block as normal ([MCPE-164355](https://bugs.mojang.com/browse/MCPE-164355))
- Fixed an issue where Endermen could take blocks without having line of sight to them
- Fixed Endermen placing blocks in locations or states where they normally shouldn’t ([MCPE-162613](https://bugs.mojang.com/browse/MCPE-162613))

# Technical Updates

## AI Goals

- Added the `minecraft:behavior.take_block` AI goal, allows an entity to take blocks from the world with the following options:
  - `blocks`: Array of block descriptors that the entity can take, if empty can take any block
  - `can_take`: Entity filters for when the entity can use the goal
  - `on_take`: Trigger ran if the entity does take a block
  - `xz_range`: XZ range from which the entity will try and take blocks from
  - `y_range`: Y range from which the entity will try and take blocks from
  - `chance`: Chance each tick to try and take a block
  - `affected_by_griefing_rule`: If the goal is affected by the mob griefing game rule
  - `requires_line_of_sight`: If the entity requires line of sight on the block it tries to take
- Removed the `minecraft:behavior.enderman_take_block` AI goal, it upgrades to the above goal
- Added the `minecraft:behavior.place_block` AI goal, allows an entity to place blocks in the world with the following options:
  - `placeable_carried_blocks`: Array of block descriptors that the entity can place if its carried item, if empty can place any block from its carried item
  - `randomly_placeable_blocks`: Array of weighted block descriptors that the entity can randomly place, if empty the entity will try to place the block in its carried item instead
  - `can_place`: Entity filters for when the entity can use the goal
  - `on_place`: Trigger ran if the entity does place a block
  - `xz_range`: X range from which the entity will try and place blocks in
  - `y_range`: Y range from which the entity will try and place blocks in
  - `chance`: Chance each tick to try and place a block
  - `affected_by_griefing_rule`: If the goal is affected by the mob griefing game rule
- Removed the `minecraft:behavior.enderman_leave_block` AI goal, it upgrades to the above goal

## API

- Removed `minecraft:destruction_particles`'s block API from "beta", it was deemed too risky to expose to server scripting API since the component is only being used on client
- Moved enum `MovementType` from beta to v2.0.0
- Moved enum `StickyType` from beta to v2.0.0
- Moved class `BlockMovableComponent` from beta to v2.0.0
- Moved `localizationKey` property on `Block`, `Entity`, `Dimension`, and `ItemStack` from beta into 2.1.0
- Moved `Container` methods `contains`, `firstEmptySlot`, `firstItem`, `find`, and `findLast` from beta into 2.1.0

## Block

- "alpha_test_to_opaque", "alpha_test_single_sided_to_opaque", and "blend_to_opaque" will now shift to "opaque" in the distance again when used as render method in minecraft:material_instances
- Removed Upcoming Creator Features toggle requirement from Movable Component.

## Block Components

- Field `uv_lock` no longer requires **Upcoming Creator Features** experiment to work. JSON `format_version` still needs to be \>= `1.21.90`

## Commands

- Added `@n` target selector which returns the single closest entity

## Components

- Content warnings will log missing references in Jigsaw Structure, Processor List, Template Pool, and Structure Sets JSON

## Editor

- Added tooltips for all actions with keybindings in Editor
- Updated Editor Scripting Structure Manager to use Editor's structure repository instead of the level's
- Updated cursor control keybinding to cycle through all cursor control modes
- Updated brush mask keybinding to cycle through all the brush mask modes

## Entity Components

- Added a "can_wear_armor" field to the "minecraft:equip_item" entity component that specifies if equipped armor should be added to the armor slot or hand slot ([MCPE-153135](https://bugs.mojang.com/browse/MCPE-153135))

## Graphical

- Updated Reflections configurations for "Favor Performance" presets on Xbox platforms with Vibrant Visuals

## Molang

- `query.is_carrying_block` is now usable by all entities, not just Enderman
- `query.is_carrying_block` returns 1.0 if the entity is carrying any block, including air

## Textures

- Modified Json parsing of `"variations"` texture objects in **terrain_texture.json** files 
  - `weight` field clamped to minimum value of 0.05
  - `weight` field clamped to maximum value of 1000000

# Experimental Technical Updates

## API

- Added `runOnFinish` method to `GameTest` which runs after the test is completed, regardless if it passed, failed, or timed out

## Gameplay

- When loading a chunk that used a removed custom biome, the removed biome is now replaced with the dimension's default biome, which is Ocean in the overworld
