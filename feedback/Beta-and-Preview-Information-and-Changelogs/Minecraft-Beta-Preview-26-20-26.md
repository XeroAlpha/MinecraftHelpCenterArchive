---
title: Minecraft Beta & Preview - 26.20.26
date: 2026-04-08T13:07:33Z
updated: 2026-04-08T13:09:08Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44927450403725-Minecraft-Beta-Preview-26-20-26
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-audio: audio
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-stability-and-performance: stability-and-performance
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-accounts: accounts
  user-content-ai-goals: ai-goals
  user-content-block-components: block-components
  h_01KNPJXEDMHNWGD1RQWV3T5F4W: blocks-1
  user-content-editor: editor
  user-content-entity-components: entity-components
  h_01KNPJXEDMEYVW1ZF161HYCKMY: mobs-1
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-api: api
  user-content-ddui: ddui
  h_01KNPJXEDM73CABC6J64FWP2J8: blocks-2
  user-content-voxel-shapes: voxel-shapes
  user-content-entities: entities
  h_01KNPJXEDM6WT3NY8FW1VAK1R9: entity-components-1
  user-content-graphical: graphical
---

**Posted:** 8 April 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions\
   

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/) , and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/) .\
 

# Features and Bug Fixes[](https://feedback.minecraft.net/hc/en-us/articles/features-and-bug-fixes)

## Audio[](https://feedback.minecraft.net/hc/en-us/articles/audio)

- Fixed placement sound not playing when placing waterloggable blocks in water ([MCPE-236601](https://bugs.mojang.com/browse/MCPE-236601))

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Blocks can now only be placed above a flowerpot when crouching ([MCPE-237222](https://bugs.mojang.com/browse/MCPE-237222))
- Fixed interacting with a Jukebox or Composter while holding armor creating a ghost item ([MCPE-227535](https://bugs.mojang.com/browse/MCPE-227535))

## Gameplay[](https://feedback.minecraft.net/hc/en-us/articles/gameplay)

- Smelting damaged armor now outputs nuggets ([MCPE-237404](https://bugs.mojang.com/browse/MCPE-237404))

## Mobs[](https://feedback.minecraft.net/hc/en-us/articles/mobs)

- When the Sulfur Cube is hit by a Player its knockback is now affected by the attacker's hit angle, position and damage:
  - When it is hit on the left it moves to the right and vice versa
  - When it is hit on the top it moves along the ground
  - When it is hit on the bottom it moves higher upwards
  - When it is hit with a greater damage it is knocked back more
  - When the attacker is positioned higher it moves downwards
  - When the attacker is positioned lower it moves upwards

## Realms[](https://feedback.minecraft.net/hc/en-us/articles/realms)

- Realms Admin log has been added to the new Realms Hub. Please share feedback from the link in Realms Hub, accessed from the Realms play screen.
- fixed crash in Realms Stories for high member count Realms
- Fixed issue in Realms Stories where the Members tab did not load in correctly

## Stability and Performance[](https://feedback.minecraft.net/hc/en-us/articles/stability-and-performance)

- Syncing of Xbox world data now occurs when specific world is selected

## User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Added two missing strings that are only shown for a brief moment
- Fixed a bug where emojis were not rendering at the small text tooltip when selecting an item in the HUD's hotbar
- Fixed the Delayed Breaking Blocks setting visibility for the "Joystick & tap to interact" and "D-Pad & tap to interact" control modes of the Touch Tab of the New Settings Screen. ([MCPE-236872](https://bugs.mojang.com/browse/MCPE-236872))

# Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/technical-updates)

## Accounts[](https://feedback.minecraft.net/hc/en-us/articles/accounts)

- Add platform subscription checks as part of multiplayer allowance check and return new platform-subscription-specific permission deny reasons if the check failed.

## AI Goals[](https://feedback.minecraft.net/hc/en-us/articles/ai-goals)

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer
  - `minecraft:behavior.random_hover`
  - `minecraft:behavior.random_sitting`
  - `minecraft:behavior.random_stroll`
- The `hover_height` field in `minecraft:behavior.random_hover` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made the schema for `minecraft:behavior.go_home` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for `minecraft:behavior.go_and_give_items_to_owner` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for `minecraft:behavior.go_and_give_items_to_noteblock` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer

## Block Components[](https://feedback.minecraft.net/hc/en-us/articles/block-components)

- Released the component `minecraft:chest_obstruction` from experimental for block format versions 1.26.20 or higher

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Fixed content warning regarding texture variations for block components `minecraft:item_visual` and `minecraft:embedded_visual`
- Added content warning for component `minecraft:item_visual` trying to use texture variations. Variation textures are not supported for this component
- The "minecraft:selection_box" component will correctly give an error again when the y is over the 16 limit
- Fixed legacy `tag:` entries in block permutations being silently dropped when upgrading to format version 1.26.20, which could cause scripts relying on permutation-specific tags to fail
- Items with "replace_block_item" set to true will no longer take the planted block in a flowerpot ([MCPE-237222](https://bugs.mojang.com/browse/MCPE-237222))

## Editor[](https://feedback.minecraft.net/hc/en-us/articles/editor)

- Ensure proper offsets are applied when switching flatten modes in the Terrain Tool
- Fixed issue where Flatten Up was sampling too far into the ground
- Fixed an error that occurred when running the /reload command from tool mode chat shortcut
- Fixed Jigsaw Collection names allowing case-variant duplicates which caused file conflicts and potential data loss on case-insensitive file systems

## Entity Components[](https://feedback.minecraft.net/hc/en-us/articles/entity-components)

- Non-Ocelot and non-Cat mobs can now use "minecraft:behavior.ocelotattack" ([MCPE-237713](https://bugs.mojang.com/browse/MCPE-237713))
- The component "minecraft:apply_knockback_rules" now takes an array of presets
  - "presets" is an array of elements with the same parameters as "minecraft:apply_knockback_rules" had previously
- The preset elements have the following new field:
  - "filter" is an actor filter with the default syntax
- Add `filters` parameter to `minecraft:spawn_on_death`

## Mobs[](https://feedback.minecraft.net/hc/en-us/articles/mobs)

- Fixed player friction not resetting for older content

# Experimental Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/experimental-technical-updates)

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- Fixed a bug where in-flight http requests could freeze the game when the http client is destroyed in scripting
- Changed the maximum length of the `text` param of `setText` on `TextPrimitive`, to be 128 lines and 128 characters per line
- Fixed issue that caused websockets to not complete their connection with the server
- Fixing a bug with Debug Drawing and Primitive Shapes where they could get into a bad state when used with Simulated Players
- Class `DimensionRegistry`
  - Added method `registerCustomDimension` to allow registrations of new custom dimensions in beta
- Startup event
  - Added the ability to register custom dimensions during the before startup event

### DDUI[](https://feedback.minecraft.net/hc/en-us/articles/ddui)

- Adding support for multiline texts for `MessageBox.body`, `CustomForm.label`, `CustomForm.header` using `\n`

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Fixed `minecraft:replaceable` to work with all parts of a **multi-block**. Also the component can no longer be defined in the **permutations** array, only allowed in the base **components** object
- Fixed selection outline for **multi-blocks** using `minecraft:random_offset`. Also for **multi-blocks** `minecraft:random_offset` can no longer be defined in the **permutations** array only in the base **components** object ([MCPE-237071](https://bugs.mojang.com/browse/MCPE-237071))
- Fix `minecraft:placement_filter` not working for block with trait `minecraft:multi_block` ([MCPE-237498](https://bugs.mojang.com/browse/MCPE-237498))
- Multi-blocks that don't have a `minecraft:selection_box` component will now default to a full block outline shape for each part ([MCPE-237089](https://bugs.mojang.com/browse/MCPE-237089))

### Voxel Shapes[](https://feedback.minecraft.net/hc/en-us/articles/voxel-shapes)

- Added non-unit-cube voxel shapes for 19 Vanilla blocks when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed
  - Cake shapes (1 block): 7 bite-counter shapes for each slice of cake
  - Candle Cake shape (17 blocks)
  - Composter shapes (1 block): 8 fill-level shapes for each stage of composting

## Entities[](https://feedback.minecraft.net/hc/en-us/articles/entities)

- Added a new `entity_version` description field to entity behavior definitions that enables per-entity versioning and upgrade handling
  - The `entity_version` field is a JSON object containing an `upgrades` array, where each entry specifies an integer `upgrade_to` version and a `name` string referencing an upgrade handler defined in a new top-level `upgrades` section of the entity definition
  - Upgrade versions must start at `1` and be contiguous (e.g., 1, 2, 3), gaps or duplicates are rejected with a content error
  - Version `0` is reserved for entities that have no version set ("versionless"), which is the default for all existing entities
  - When an entity is loaded with a version older than the current definition version, all upgrade handlers between the entity's saved version and the current version are executed sequentially
  - Newly spawned entities are set directly to the latest version without running any upgrade handlers.
  - Upgrade handlers reuse the existing event system but are defined in a separate `upgrades` section, keeping them distinct from regular `events`
  - The entity's version is persisted and loaded/saved automatically
  - This feature is gated behind the Upcoming Creator Features experiment toggle

## Entity Components[](https://feedback.minecraft.net/hc/en-us/articles/entity-components)

- The following fields have been added to the preset element exclusively in the beta version of "minecraft:apply_knockback_rules":
  - "scale_previous_velocity" scales the previous velocity of the target when hit
  - "horizontal_hit_angle_scale" scales the horizontal angle response of the target when hit based on the attacker's aim direction
  - "vertical_hit_angle_scale" scales the vertical angle response of the target when hit based on the attacker's aim direction
  - "vertical_position_angle_scale" scales the vertical angle response of the target when hit based on the attacker's relative feet position
  - "scale_with_damage" enables scaling the magnitude of knocback based on the inverse square of the damage
- There is currently a known issue where knockback is applied twice
  - the first is the custom knockback defined by "minecraft:apply_knockback_rules"
  - the second is the default knockback with the custom "horizontal_power", "vertical_power" and "vertical_velocity_cap" defined by "minecraft:apply_knockback_rules"

## Graphical[](https://feedback.minecraft.net/hc/en-us/articles/graphical)

- Added `static_light` shading to weather
