---
title: Minecraft Beta & Preview - 26.30.20/21
date: 2026-04-21T15:03:36Z
updated: 2026-04-21T15:50:52Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45261940654221-Minecraft-Beta-Preview-26-30-20-21
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 21 April 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions (**Please note** - Android will have version 26.30.21 this week)

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/45261940651917" alt="Sulfur cubes in a cave, with sulfur spikes" />
</figure>

Keep your eyes peeled in sulfur caves, as sulfur spikes are ready to test! Sulfur spikes grow on cinnabar and sulfur blocks, making sulfur caves more atmospheric and bringing a colorful, pointy touch to your builds. Unlike dripstone, walking into them is harmless, but falling sulfur spikes sure pack a puncture! Don't worry, though - the odds of sulfur spikes falling are quite low (but never zero). And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

## Known Issues

We have a few known issues in this week's Beta & Preview, and we are working on getting them resolved as soon as possible

- Due to an issue that was found that could cause a crash, this week's Beta and Preview will not be shipping out on servers. Players may see an error when a joining a Realm.
- Sulfur Springs are not generating correctly in new worlds and chunks
- The Sulfur Spike is not yet available in the creative inventory

# Chaos Cubed Fixes and Features

## Sulfur Spike

- A new block that generates naturally on Sulfur blocks inside the sulfur caves biome
- Forms a stalactite if placed on the ceiling or a stalagmite if placed on the floor
- Can be combined to form longer stalactites & stalagmites
- Stalactites and stalagmites merge if the tips are next to each other, unless you press shift while placing
- Stalagmites will break if they're not attached to something below
- Stalactites fall down if not attached to something above
- Being hit by a falling stalactite hurts, and they are sharp!
- Thrown Tridents break Sulfur Spikes

### Sulfur Caves

- The Sulfur Caves now have Granite and Tuff Blocks interspersed between the Sulfur and Cinnabar
- The Sulfur Spike Clusters have been made slightly shorter on average
- The Sulfur Caves biome no longer replaces Bedrock blocks ([MCPE-237778](https://bugs.mojang.com/browse/MCPE-237778))

## Creative Inventory

- Sulfur Bricks, Cinnabar Bricks, Chiseled Sulfur and Chiseled Cinnabar now appear in the Construction inventory tab ([MCPE-237715](https://bugs.mojang.com/browse/MCPE-237715 "https://bugs.mojang.com/browse/mcpe-237715"))
- Bucket of Sulfur Cube is now positioned together with other Buckets in Creative Inventory ([MCPE-237719](https://bugs.mojang.com/browse/MCPE-237719 "https://bugs.mojang.com/browse/mcpe-237719"))
- Polished Sulfur, Sulfur Bricks, Cinnabar, Polished Cinnabar and Cinnabar Brick Walls are now found in the Walls category in the Creative Inventory
- Potent Sulfur is now placed before Sulfur Bricks in the Creative Inventory
- Sulfur blocks are now correctly shown after Cinnabar blocks in the Creative Inventory

## Sulfur Cube

- Updated the Sulfur Cube's textures
- Reduced the Sulfur Cube's health from 9 to 8
- Sulfur Cube no longer becomes unpushable once a block is removed from it
- Added sounds for absorbing blocks, ejecting blocks and landing
- The Sulfur Cube is now knocked back based on the tap location when using a touch device input

## Sounds

- Each ball archetype now has their own unique hit and push sound
- Changed category for Sulfur and Cinnabar to Neutral
- Correct subtitles now play for Sulfur Cube, and Sulfur and Cinnabar blocks
- Sulfur and Cinnabar blocks now have unique jump and land sounds

# Features and Bug Fixes

### Blocks

- Fixed Command Block Hover Note text not updating after changing it until the world is reloaded ([MCPE-236701](https://bugs.mojang.com/browse/MCPE-236701))

### Graphical

- Texture streaming is now enabled by default on supported platforms and can be disabled in Video settings. Texture streaming is currently only available to PC and mobile devices and will be expanded to other platforms in the future
- Fixed some blocks appearing as semi-transparent in the inventory when Texture Streaming is enabled ([MCPE-235799](https://bugs.mojang.com/browse/MCPE-235799))
- Streamed textures are no longer completely invisible after being off-screen for a while.
- Fixed an issue where dithered objects would flicker in split-screen.
- Fixed an issue where item-in-hand was clipping when inside a block in Vibrant Visuals
- Fixed an issue for certain item-in-hand not rendering when inside a block in Fancy
- Snow golem heads no longer render as completely black with Vibrant Visuals enabled
- Added Boss Fog in the End Dimension while the Ender Dragon is alive.

## Mobs

- Skeletons, Strays, Bogged, and Parched now shoot arrows at the same rate as Java Edition, with difficulty-based attack intervals instead of distance-scaled intervals ([MCPE-61036](https://bugs.mojang.com/browse/MCPE-61036))
- Fixed issue where Villager farmers get stuck nodding while planting crops ([MCPE-237708](https://bugs.mojang.com/browse/MCPE-237708))

## Realms

- "No Members Found" modal no longer briefly shows up before loading members in Realms Stories and Realms Hub
- Fixed the Realms side menu tabs being squashed and difficult to select when the design preview panel was visible
- Update the looks of Welcome to Realms screen.
- Fixed an issue where two states could be presented in the moderate feed screen

## Stability and Performance

- Fixed a crash related to the data-driven renderer when an entity's geometry expression was unable to be resolved

## User Interface

- Text fields can now be navigated using the Tab key, which enters editing mode with all text selected. Pressing Tab while editing moves to the next field
- Fixed an issue that caused the Default Game Mode and the Activate Cheats settings to appear editable to players that don't have operator permissions. ([MCPE-237784](https://bugs.mojang.com/browse/MCPE-237784))
- Fixed the on-screen keyboard not dismissing after submitting text in JSON UI text fields on iOS and Android
- Fixed Banner message for graphics mode settings option ([MCPE-231879](https://bugs.mojang.com/browse/MCPE-231879))
- Storage indicator now is taller and has a square action button. Copy has been updated from "Go to storage settings" to "Settings".
- Enabled add-ons in the create from template screen for preview ([MCPE-232902](https://bugs.mojang.com/browse/MCPE-232902))
- Narrate chat text if UI or Char narration is enabled
- Stop narration of typed letters when the message is sent
- Narrate chat input text when it's auto-completed or taken from history
- Updated Recipe unlocked tooltip design
- Fixed issue on the idle device screen on Switch, which could result in the text showing incorrectly. The image has been updated also.

# Technical Updates

### Commands

- Fixed command auto-completion for custom block states with integer values showing incorrect zero-based indices instead of the actual defined values ([MCPE-236301](https://bugs.mojang.com/browse/MCPE-236301))
- Removed the `locatorbar` boolean gamerule. Worlds that previously had `locatorbar` set to `true` will automatically migrate to the new `playerWaypoints` Game Rule with a value of `everyone`, and `false` will migrate to `off`.
- Added the `playerWaypoints` gamerule as a replacement for the deprecated `locatorbar` Game Rule. Accepted values are `off` (players are not shown on the locator bar) and `everyone` (all players are visible on the locator bar).
- `/stopsound` command now produces exactly one success or failure message upon completion ([MCPE-236165](https://bugs.mojang.com/browse/MCPE-236165))
- `/playsound` command now produces exactly one success or failure message upon completion ([MCPE-236157](https://bugs.mojang.com/browse/MCPE-236157))

### Dedicated Server

- JSON schema outputs now include beta format versions

### Editor

- Added Cherry, Mangrove, Pale Oak, Crimson, and Warped tree types to the Tree Generator sample tool
- Added Melon as a crop option in the Farm Generator tool
- Added tooltip with keyboard shortcut information to the Flood Tool "Apply Flood" button
- Fixed Flood Tool preview placement and movement not supporting Undo and Redo actions
- Fixed Flood Tool preview being visually displaced by one block when placed at Y coordinate of 0 or lower
- Fixed a bug where adding a new Jigsaw collection would cause the selected collection to switch to the last one alphabetically instead of staying on the newly created collection

## Loot Tables

- Fixed loot table container filling so when no empty slots remain, generated loot now merges into matching non-full stacks instead of failing to place ([MCPE-233039](https://bugs.mojang.com/browse/MCPE-233039))

## AI Goals

- Made the schema for `minecraft:behavior.croak` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer. Float Range fields `interval` and `duration` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made the schema for `minecraft:behavior.emerge` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.fire_at_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer. Float Range field `attack_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.
  - `minecraft:behavior.restrict_open_door`
  - `minecraft:behavior.restrict_sun`
  - `minecraft:behavior.rise_to_liquid_level`
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.
  - `minecraft:behavior.roll`
  - `minecraft:behavior.run_around_like_crazy`
  - `minecraft:behavior.scared`
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.
  - `minecraft:behavior.stay_while_sitting`
  - `minecraft:behavior.sneeze`
  - `minecraft:behavior.trade_interest`
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.
  - `minecraft:behavior.follow_caravan`
  - `minecraft:behavior.share_items`
  - `minecraft:behavior.target_when_pushed`

## API

- Released `@minecraft/server` version 2.8.0
- Added `@minecraft/server` version 2.9.0-beta
- Significantly improved block search speed when using BlockVolume for 'getBlocks' API.
- Significantly improved block search speed when using BlockVolume for 'containsBlock' API.
- Released `ClientSystemInfo.locale` from beta to `2.8.0`
- Released `class BlockContainerClosedAfterEvent` from `beta` to `2.8.0`
- Released `class BlockContainerClosedAfterEventSignal` from `beta` to `2.8.0`
- Released `class BlockContainerOpenedAfterEvent` from `beta` to `2.8.0`
- Released `class BlockContainerOpenedAfterEventSignal` from `beta` to `2.8.0`
- Released `class EntityContainerClosedAfterEvent` from `beta` to `2.8.0`
- Released `class EntityContainerClosedAfterEventSignal` from `beta` to `2.8.0`
- Released `class EntityContainerOpenedAfterEvent` from `beta` to `2.8.0`
- Released `class EntityContainerOpenedAfterEventSignal` from `beta` to `2.8.0`
- Released `class ContainerAccessSource` from `beta` to `2.8.0`
- Released `interface BlockContainerAccessEventOptions` from `beta` to `2.8.0`
- Released `interface EntityContainerAccessEventOptions` from `beta` to `2.8.0`
- Released `interface ContainerAccessSourceFilter` from `beta` to `2.8.0`
- Released `class EntityEnderInventoryComponent` from `beta` to `2.8.0`
- Released `function StructureManager.getPackStructureIds` from `beta` to `2.8.0`

## Blocks

- Fixed a bug where the "minecraft:material_instances" on custom blocks would override the "minecraft:material_instances" inside a "minecraft:item_visual", causing custom blocks held by the player to be rendered incorrectly ([MCPE-234766](https://bugs.mojang.com/browse/MCPE-234766))
- Fixed permutation component constraints for multi-blocks with `format_version >= 1.26.20`

## Client Entities

- Added the `hide_held_items` Molang expression property to `minecraft:client_entity`'s `scripts` section that hides held items when it evaluates to a non-zero value

## Components

- Fixed an assert that would occur when trying to use the `minecraft:noise_gradient` builder type inside a `minecraft:surface_builder` biome component if the biome definition's schema version was set to `beta`.

### Surface Builders

- The `NoiseDescriptor` schema definition has been introduced. The purpose of this schema is to be used as part of a surface- or subsurface-builder's schema. It has the following fields:
  - `name`: The string used to initialize the noise. Has no impact on the qualitative aspects of the generated values (required)
  - `first_octave`: Governs the general frequency characteristics of the generated noise. Lower value results in noise with lower frequency content (required)
  - `amplitudes`: Governs the attenuation of the first n octaves in the generated noise (required)
- The `NoiseBlockSpecifier` schema definition has been introduced. The purpose of this schema is to be used as part of a surface- or subsurface-builder's schema. It has the following fields:
  - `noise`: The noise identifier associated with a particular NoiseBlockSpecifier (non-required)
  - `threshold`: The minimum sampled noise value associated with the provided Block (non-required)
  - `range`: The range of sampled noise value associated with the provided Block (non-required)
  - `block`: The block to place if the noise sample satisfies either the threshold or range condition (required)
- The `minecraft:noise_gradient` surface- and subsurface builder has an updated API consisting of the following:
  - `noise`: a NoiseDescriptor (required)
  - `non_replaceable_blocks`: A list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air) block type (non-required)
  - `noise_block_specifiers`: An array of `NoiseBlockSpecifier`s defining which sample ranges of noise are associated with which blocks. The ranges provided are valid on the interval \[0, 1\], and may overlap at their endpoints (required)

## Editor

- Implemented Jigsaw auto-save for changing structure and weight in pool

- Implemented auto-save for Prefab template layout changing.

- Added Minimap click and hover interactions

  - Added click-to-teleport on the minimap and markers.
  - Added hover tooltips showing block, biome, and coordinate info on the minimap, and label info on markers.

- Improved Minimap architecture and added new features

  - Moved block scanning to a client-driven model with spread-over-frames processing to avoid frame spikes.
  - Added marker system with Multiplayer, Location, and Custom marker types.
  - Added FollowPlayer and FreeCenter tracking modes.
  - Added Y-level control for top-block scanning depth.
  - Added client-side block change detection via BlockSourceListener.
  - Changed minimap position types from Vec2 to VecXZ.
  - Reworked MinimapItem script API with typed marker methods and options-based createMinimap.
  - Added comprehensive unit tests for minimap services, cache, and block change tracking.

- Status bar now displays the biome under the cursor

## Entity Components

- Added "presets" field to the "minecraft:pushable_by_entity" component, allowing customization of push behavior per entity type
  - These changes are in beta format version, the intent is to add these changes to format version 1.26.30, when going out of beta
  - Each preset entry supports the following fields:
    - "filter", conditions that must be met for the preset to be applied
    - "push_mode", the type of push calculation: "default", "legacy_boat", or "legacy_minecart"
    - "strength_multiplier", scales the push force applied to the entity
    - "min_distance", minimum distance between entities for push forces to be applied
    - "push_scale_self", scales how much push force this entity applies to itself away on collision
    - "push_scale_other", scales how much push force this entity applies to the other entity on collision
    - "play_sound_cooldown_in_seconds", cooldown in seconds between sounds, a lower number results in more sounds
    - "play_sound_impulse_threshold", minimum change of velocity needed to trigger the push sound, a lower value means higher sensitivity

## Entity Filters

- Added the `redstone_strength_at_position` entity filter that tests the redstone signal strength at the subject entity's position

## General

- Fixed a bug where pack settings could be lost when an older version of the same pack without settings defined existed in the cache

## Graphical

- Removed padding from terrain atlas on RenderDragon.
  - Known issue around RTX textures displaying incorrectly; this will be resolved in an upcoming Preview.

## Items

- A new field "start_using" was added to the "minecraft:use_modifiers" item component. It can either be set to "always" or "if_first". It is defaulted to "always" with format version lower than 1.26.30 and "if_first" otherwise. When set to "if_first", "minecraft:use_modifiers" will only attempt to start using the item if no other component has already attempted to.
- Items with both a "minecraft:use_modifiers" and a "minecraft:shooter" component with a charge duration will now properly charge and shoot with "start_using" set to "if_first". ([MCPE-228331](https://bugs.mojang.com/browse/MCPE-228331)) ([MCPE-228332](https://bugs.mojang.com/browse/MCPE-228332)) ([MCPE-228333](https://bugs.mojang.com/browse/MCPE-228333))

## Molang

- Added the `query.fuse_time` query that returns the remaining fuse time of an entity, or -1 if the entity doesn't have a "minecraft:explode" component

## Sound

- Updated sound assets for Nautilus jets and Nautilus recovers
- Added bespoke sound event for when Slime mobs land
  - Actual sound on Slime and Magma Cube is unchanged, this is to support the Sulfur Cube

# Experimental Technical Updates

## API

- Adds `WebSocketClientCloseReasons` enum to `@minecraft/server-net` in beta.
- `WebSocketClientCloseAfterEvent`
  - Adds property `reason: WebSocketClientCloseReasons` in beta
  - This event is now sent when `WebSocketClient.close()` is called
- Adds `max_websocket_payload_size` to `@minecraft/sever-net` module configuration
  - This setting, if set, will prevent a websocket from being spammed by the server and close the socket if all data payloads size received during a tick exceeds this value.
- Added `getPing()` to `Player` in `@minecraft/server` in beta
- Added `playfabId` property to `Player` in `@minecraft/server` in beta
- Adds `HttpStatusCode` enum to @minecraft/server-net in beta
- `WebSocketConnectionFailedError`
  - Property `errorCode` is now a `HttpStatusCode` in beta
- `@minecraft/server-net` in beta
  - When connection websockets, you can now provide headers for the connection packet: `WebSocket.connect(uri: string, headers?: HttpHeader[]) : Promise<WebSocketClient>`
- GameRules
  - Removed `locatorBar: boolean` property from beta.
  - Added `playerWaypoints: PlayerWaypointsMode` property to beta. This replaces the removed `locatorBar` rule.
- Added `PlayerWaypointMode` enum to beta.
- Added `EntityUpgradeAfterEvent` which fires when an entity upgrade occurs in `@minecraft/server`
- Added `entityUpgrade` event to `WorldAfterEvents` in `@minecraft/server`

## Blocks

- Fixed bug where custom blocks with random_offset would be put back in the center of its position when snow logged.
- Changed the precipitation behavior value from "snow_log_no_collision" to "snowlogging" to avoid confusion regarding its functionality.

### Voxel Shapes

- Added non-unit-cube voxel shapes for 8 Vanilla blocks when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed
  - Anvil shape (3 blocks): Anvil, Chipped Anvil, Damaged Anvil
  - Cactus shape (1 block)
  - End Portal Frame eye shape (1 block): added shape for the eye-filled state
  - Grindstone shape (1 block)
  - Heavy Core shape (1 block)
  - Lectern shape (1 block)
- Added directional voxel shapes for 13 Vanilla blocks when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed based on placement orientation
  - Shelf shapes (12 blocks): Acacia Shelf, Bamboo Shelf, Birch Shelf, Cherry Shelf, Crimson Shelf, Dark Oak Shelf, Jungle Shelf, Mangrove Shelf, Oak Shelf, Pale Oak Shelf, Spruce Shelf, Warped Shelf
  - Bell attachment shapes (1 block): floor, ceiling, single wall, and double wall variants

## Editor

- Added three new export types to Export Settings (Project Backup, World Template, Shareable World).
  - Project Backup: Creates a packaged backup of the current editor project into the archive folder (.mcproject file)
  - World Template: Creates a packaged World Template (.mctemplate) with all Editor settings and metadata removed into the archive folder
  - Shareable World: Creates a packaged playable world (.mcworld) with all Editor settings and metadata removed into the archive folder
- Added a new flag to Bedrock Dedicated Server to allow converting standard vanilla worlds to an Editor Project when launching BDS as Editor
- The Line Tool with two control points now respects the maximum allowable distance when moving the second point

## Entities

- Added support for using entity actions in entity_version upgraders

## Entity Components

- The following beta fields of `minecraft:apply_knockback_rules` now use the direction of the tap location when using a touch input device
  - `horizontal_hit_angle_scale`
  - `vertical_hit_angle_scale`
  - `vertical_position_angle_scale`
- The beta field `vertical_hit_angle_scale` from `minecraft:apply_knockback_rules` is now correctly applied when `horizontal_hit_angle_scale` negative
