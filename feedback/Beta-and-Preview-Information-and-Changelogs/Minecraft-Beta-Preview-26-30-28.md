---
title: Minecraft Beta & Preview - 26.30.28
date: 2026-05-12T12:58:07Z
updated: 2026-05-12T15:47:53Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45785756698381-Minecraft-Beta-Preview-26-30-28
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 12 May 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

You might've seen all the features coming for Chaos Cubed – but have you listened to the official soundtrack yet? Composed by fingerspit (Paula Ruiz) and featuring 6 tracks including the music disc Bounce, this is the perfect soundtrack for chaos. Listen today on Spotify, or wherever you stream your music!

And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Chaos Cubed Features and Fixes

## Music

- Added new music by composer fingerspit (Paula Ruiz) to the game

  - Added a new music disc with the song "Bounce" that may be found inside Minecarts with Chests in abandoned mineshaft structures within Sulfur Caves
  - Added new music tracks Ebb, Home, Memories, Nightly, and Shores to the main Menu music, Creative Mode music, and several biomes

- The new music tracks will play in the following biomes:

  - Mesa
  - Bamboo Jungle
  - Cherry Grove
  - Desert
  - Dripstone Caves
  - Flower Forest
  - Forest
  - Frozen Peaks
  - Grove
  - Jagged Peaks
  - Jungle
  - Lush Caves
  - Meadow
  - Old Growth Spruce Taiga
  - Old Growth Pine Taiga
  - Snowy Slopes
  - Sparse Jungle
  - Snowy Peaks
  - Swamp
  - Sulfur Caves

## Sulfur Cube

- The block inside a Sulfur Cube now matches the size of regular blocks ([MCPE-2381919](https://bugs.mojang.com/browse/MCPE-2381919))

- The block inside a Sulfur Cube now perfectly aligns vertically with the block grid when the Sulfur Cube is invisible ([MCPE-2381919](https://bugs.mojang.com/browse/MCPE-2381919))

- TNT Sulfur Cubes now ignite when shot with a flaming arrow or blaze fireball

- TNT Sulfur Cubes now ignite when using a tool with the Fire Aspect enchantment

- The Sulfur Cube's TNT archetype now respects the "mobGriefing" game rule when exploding

- The Sulfur Cube's TNT archetype now respects the "tntExplosionDropDecay" game rule when exploding ([MCPE-238474](https://bugs.mojang.com/browse/MCPE-238474))

- Magma blocks no longer damage Sulfur Cubes with a block inside

- Igniting a TNT Sulfur Cube now makes the same sound as igniting a TNT block ([MCPE-238473](https://bugs.mojang.com/browse/MCPE-238473))

- Throwing items on a Sulfur Cube containing Magma no longer makes the item disappear

- A TNT Block absorbed by the Sulfur Cube is no longer made invisible when the Sulfur Cube is invisible ([MCPE-238593](https://bugs.mojang.com/browse/MCPE-238593))

- The Sulfur Cube hot archetype's attack range has been adjusted to be more aligned with Java

- Sulfur Cube with TNT leash keeps exerting its force once the Sulfur Cube is ignited ,

- Sulfur Cube is now unleashed once the absorbed block is ejected

- Sulfur Cubes can no longer ride vehicles

> *Developer's Note:* This is a known parity break with Java, due to the way entities interact with Boats and Minecarts

- Sulfur Cubes that have absorbed a block now react the same way when pushed by a player-ridden vehicle as they do when pushed by a player

- Sulfur Cubes now spawn in Peaceful difficulty ([MCPE-1591089](https://bugs.mojang.com/browse/MCPE-1591089))

- Updated the model and texture of the Small Sulfur Cube

- Added dedicated sounds for when the Sulfur Cube is picked up or placed with a Bucket

## Potent Sulfur

- Noxious Gas from Potent Sulfur can now rise through non-collidable, waterlogged blocks and spread through other non-collidable blocks

- Erupting Potent Sulfur can now emit its plume and propel entities through non-collidable blocks

  - This includes Scaffolding, which can be used as an alternative to Copper Grates to stand above erupting Potent Sulfur without being affected by Noxious Gas

- Players propelled by erupting Potent Sulfur no longer experience jitter at high latency

- Players in Creative flight are no longer propelled by erupting Potent Sulfur

- Potent Sulfur geysers no longer change their eruption timing after each eruption cycle

## Blocks

- Chiseled Sulfur and Chiseled Cinnabar can no longer be crafted by stonecutting Sulfur Bricks and Polished Cinnabar, respectively ([MCPE-238470](https://bugs.mojang.com/browse/MCPE-238470))

- Geyser eruption timing is now determined by the block's position in the world, rather than being randomized when the block is placed

- Placing a Lava block under a Potent Sulfur block now causes the Geyser to erupt continuously without stopping

# Features and Bug Fixes

## Accessibility Features

- "Hide Sky Flashes" setting now also suppresses lightning sky flashes in the Overworld, matching Java Edition behavior ([MCPE-180737](https://bugs.mojang.com/browse/MCPE-180737))

- Text to speech (TTS) will now read the character '&' as 'and' instead of 'ampersand'

## Blocks

- Using Bone Meal on Dirt in shallow water will now correctly create Seagrass or Coral ([MCPE-91152](https://bugs.mojang.com/browse/MCPE-91152))

- Fixed a client-side display issue that caused falling blocks (such as Sand, Gravel, and Anvils) to appear to pass through Cobwebs without slowing down and to lose their collision after landing

## Gameplay

- Removed warning text that "you can't earn achievements" when creating a world with Add-ons enabled.

## General

- Party chat now appears in the world, and you can respond from world chat with the /party command

- Fixed a crash that could occur when loading behavior packs with multiple custom dimension definitions ([MCPE-238456](https://bugs.mojang.com/browse/MCPE-238456))

- Updated the game credits

- Updated the cubemap

## Graphical

- Re-enabled texture streaming in PC and mobile previews after fixing a bug with blank textures

- Fixed shulker boxes appearing as semi-transparent in the inventory when Texture Streaming is enabled ([MCPE-235799](https://bugs.mojang.com/browse/MCPE-235799))

- Fishing line no longer disconnects from the bobber in split-screen mode ([MCPE-230910](https://bugs.mojang.com/browse/MCPE-230910))

- Clouds no longer jitter when upscaling is enabled in Vibrant Visuals.

- Armor attached to player no longer flickers when upscaling is enabled in Vibrant Visuals.

- Atlas composited textures for in-hand items now render correctly (JIRA ([MCPE-223126](https://bugs.mojang.com/browse/MCPE-223126))

## Realms

- Fixed a bug in the Realms saves screen where the "Save to storage" button on an automatic save displayed the active world's size instead of the selected save's size, and the "Free up space" dialog was not shown when the selected automatic save was too large to fit in the Realm's storage

- Fixed an issue where backups containing only Resource Packs displayed empty entries without names in the Saves tab

- Fixed an issue where modals may display blank text on the Realms Hub subscription tab

- Disable clear all members button for admin roles to avoid confusion, since admins can not remove other admins or owners

- Fixing an issue where the wrong icon was used for leaving a realm

- Changing the Try Realms button in the How To Play screen to redirect to the Realms PDP instead

- Updated the save modal text when saving settings in Realms Edit World

- Added achievements disabled warning modal to realms edit world

- Fixed RealmsHub settings screens not exiting properly after saving changes made on the screens.

## Stability and Performance

- Reduced unnecessary copies in atmospheric scattering keyframe lookups to improve frame time when Vibrant Visuals are enabled

- Fixed a crash that could occur when initializing a dimension on the client side if the spawn dimension was set to a non-Overworld dimension

## Social Drawer

- Fixed a crash that could occur when trying to search for players without signing in ([MCPE-235488](https://bugs.mojang.com/browse/MCPE-235488))

## User Interface

- Fixed a bug where the emote wheel could be opened while riding a mob or Minecart, causing the player to crouch instead of dismounting

- Added Marketplace Error component to display marketplace errors

- Non-gameplay related toast notifications (e.g. Minecraft Live reminders) will no longer be able to show during gameplay

- Added ability to access Marketplace for Preview

- Fixed an issue that caused the framerate limit option under Vibrant Visual Options to behave differently from the other quality options

- Improved the furnace recipe book UI

## World Storage

- Added OREUI Storage Settings: Storage Status and Management
- Added cloud backup of Windows worlds as an early preview
  - Please share your feedback at [feedback.minecraft.net](http://feedback.minecraft.net/) and report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/) to help inform next our steps

# Technical Updates

## AI Goals

- Made the schema for `minecraft:behavior.follow_target_leader` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made the schema for `minecraft:behavior.defend_trusted_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made the schema for `minecraft:behavior.nearest_prioritized_attackable_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made the schema for `minecraft:behavior.random_breach` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made the schema for `minecraft:behavior.random_fly` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made the schema for `minecraft:behavior.random_swim` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made the schema for `minecraft:behavior.wither_random_attack_pos_goal` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.

  - `minecraft:behavior.dragondeath`
  - `minecraft:behavior.dragonholdingpattern`
  - `minecraft:behavior.dragonlanding`
  - `minecraft:behavior.dragonscanning`
  - `minecraft:behavior.dragontakeoff`

- Made schemas for `minecraft:behavior.place_block` and `minecraft:behavior.take_block` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.

  - Fields `xz_range` and `y_range` now only accept an object with `min` and `max` values. Other formats will fail to parse

## API

- Released `EntityUpgradeAfterEvent` from beta to stable

- Entity version upgrades are no longer gated behind the Upcoming Creator Features experiment

- Added a new condition "biome_has_tag" that allows checking which biome tag is present at the location of the entity that is dropping loot

  - Specify which Biome tag to check in the "tag" field of the condition

- Releasing `PrimitiveShapesManager`, `PrimitiveShape`, `TextPrimitive` and `PrimitiveShapeError` from beta to 2.8.0

- Released `enum member EntityHealCause.TotemOfUndying` from `beta` to `v2.8.0`

- Released `minecraft:totem_of_undying` firing `entityHeal` events from `beta` to `v2.8.0`

- Released `class BlockComponentBlockStateChangeEvent` from `beta` to `v2.8.0`

### DDUI

- Fixed a bug where you could not show ModalFormData or MessageFormData directly after CustomForm or MessageBox.

## Blocks

- Added `n_way_visual_rotation` field to block geometry component, which takes the name of a block state as a string, which drives visual-only rotation of the block based on that state. Supported states are: "minecraft:cardinal_direction",  "minecraft:sixteen_way_rotation", and all custom states.

- Added "minecraft:sixteen_way_rotation" as an enabled state for the "minecraft:placement_direction" block trait, which will automatically apply a state value from 0-15 based on player rotation at time of block placement.

## Content Log

- Content log messages now cut out the user's personal file path prefix to instead only show the relevant path

## Editor

- Added Custom Dimensions tool to the action bar. Easy and teleport between custom dimensions inside your world.

- Fixed Navigation Panel teleport-to-player so it also moves the local player to the target player's dimension instead of teleporting to their XYZ in the local player's current dimension

- Introduced infrastructure to enable custom cursor icon in Editor, per context

  - Introduced new enum MouseCursorIconType for the supported cursor icons.
  - Player Input Service extended to support cosmetic feature in Editor.
  - Cursor icon can be set/clear with context priority resolution.
  - Priority is Global -\> Modal Tool -\> Viewport.

- Added a new modal to display information about the new changes in editor, this can be access from the Help menu

- Removed Quick Start panel

- Added `PrimaryAttention` and `SecondaryAttention` to `ThemeSettingsColorKey` API for content badges

- GameCore builds no longer crash or incorrectly copies data out of the Shared 'minecraftWorlds' folder for worlds (with behavior / resource packs enabled) upon exiting the Edit Project screen using the Back / Resume buttons

- Fixed a crash that occurred when removing structures from a layout template when a template was placed into the world

## Entity Components

- Added `unleash_on_removal` field to `minecraft:leashable` component

  - When set to `true` (the default), the entity is unleashed from the entity it is leashed to once the component is removed
  - Entities with format versions prior to 1.26.30 will have this field defaulted to `false` to preserve existing behavior

- Added `unleash_on_removal` field to `minecraft:leashable_to` component

  - When set to `true` (the default), entities leashed to the entity are unleashed once the component is removed
  - Entities with format versions prior to 1.26.30 will have this field defaulted to `false` to preserve existing behavior

## Entity Event Responses

- Added `unleash` entity event response

  - If its `unleash_self` field is set to true, it unleashes the entity from the entity it is leashed to
  - If its `unleash_others` field is set to true, it unleashes all entities that are leashed to the entity

## General

- Fixed an issue where on slower connections the hotbar would swap between items if you placed a block and immediately swapped

- String length validation for JSON now correctly apply to multi-byte characters

## Graphics

- Restructured internal graphics settings to be more compact and separated by platform

## Voxel Shapes

- Internally used Voxel Shapes have been released to the bedrock-samples Github repo (<https://github.com/Mojang/bedrock-samples/>) for creator reference when making their own shapes.
- Matching shapes will be merged at runtime for better performance.
  - ex. minecraft:composter & custom:composter (where custom:composter is a copy of the exported minecraft:composter shape) will be de-duplicated down on world load to save memory.
- For a deeper dive into Voxel Shape usage please see the additional documentation available here: [Voxel Shapes \| Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/documents/voxelshapes?view=minecraft-bedrock-stable).

## Renderer

- Fixed a bug where held_item_scale was not correctly applied to data driven blocks

## Scripting

- Added BiomeWater API for water graphics overrides to beta
- Added BiomeColorGrading API for color grading and tone mapping graphics overrides to beta
- Added BiomeLighting API for lighting graphics overrides to beta
- Added PlayerWater API for per-player water graphics overrides to beta
- Added PlayerColorGrading API for per-player color grading and tone mapping graphics overrides to beta
- Added PlayerLighting API for per-player lighting graphics overrides to beta
- Added PlayerAtmospherics API for per-player atmospherics graphics overrides to beta
- Added `LootItem.conditions` to beta. MCPE: 238052

## UI

- Fixed marketplace offers sometimes showing coin icons in places they shouldn't

# Experimental Features

## Add-Ons

- Custom projectiles spawned via the "minecraft:spawn_entity" component now apply the offset field of "minecraft:projectile" when the experimental toggle "Custom Projectiles" is enabled

## API

- Fixed bug where `@minecraft/server-net` was using the incorrect dedicated server configuration ID for a pack. Under `./config/<moduleID>/*` is a pack's configuration for scripting. The server-net module was looking at the pack ID rather than the script module ID like all other modules.

- Added `class PlayerStartBreakingBlockAfterEvent` to `beta`

- Added `class PlayerStartBreakingBlockAfterEventSignal` to `beta`

- Added `interface PlayerBreakingBlockEventOptions` to `beta`

- Added `property WorldAfterEvents.playerStartBreakingBlock` to `beta`

- Removed the beta `Player.partyInfo` scripting property and `PartyInfo` interface from `@minecraft/server`

- Added the `minecraft:dynamic_properties` block component

  - It is only present on blocks defined with a 'minecraft:block_entity`component with`dynamic_properties\` set to true
  - It stores properties of the same DynamicProperties type that can be found on entities or item stacks
  - It comes with a get, set and totalByteCount API
  - It may only store up to 1KBytes of data per block entity
  - It (currently) does not carry over its data to the item resulting from mining or picking the block entity

### DDUI

- Added class `ScriptInvalidObservableError` that is thrown when an observable value is expected to be writable, but it is not.
- Changed class `CustomForm`
  - Changed function `dropdown`
    - Changed return type from `CustomForm` (throws `InvalidFormModificationError`) to `CustomForm` (throws `InvalidFormModificationError`, `InvalidObservableError`)
  - Changed function `slider`
    - Changed return type from `CustomForm` (throws `InvalidFormModificationError`) to `CustomForm` (throws `InvalidFormModificationError`, `InvalidObservableError`)
  - Changed function `textField`
    - Changed return type from `CustomForm` (throws `InvalidFormModificationError`) to `CustomForm` (throws `InvalidFormModificationError`, `InvalidObservableError`)
  - Changed function `toggle`
    - Changed return type from `CustomForm` (throws `InvalidFormModificationError`) to `CustomForm` (throws `InvalidFormModificationError`, `InvalidObservableError`)

## Blocks

- Added the 'minecraft:block_entity\` block component

  - It has a single boolean field `dynamic_properties`
  - It requires format version 1.26.20 and Experimental Upcoming Creator Features
  - It cannot be used in permutations

- When a block with a 'minecraft:block_entity\` is placed in the world, an associated block-entity will be placed with the intent to provide persistent local metadata, akin to chests, spawners, signs, etc...

  - While leaner than their Vanilla counterparts, they still are heavier on the RAM than non-block-entities; use them sparingly

## Graphical

- Fixed an issue where square artifacts would appear when looking at point lights

## Items

- Item components `minecraft:swing_sounds`, `minecraft:durability_sensor`, `minecraft:record`, and `minecraft:use_modifiers` now accept string-based sound event names in addition to enum values when using the Beta APIs experimental toggle

- String-based sound names reference entries in `sound_definitions.json`, allowing content creators to use custom sounds in data-driven items without needing new enum values

## Packs

- Added new pack folder to dedicated server for system packs (packs which are loaded automatically to the world and disallow other packs using their IDs)
  - `system_behavior_packs` and `system_resource_packs`
