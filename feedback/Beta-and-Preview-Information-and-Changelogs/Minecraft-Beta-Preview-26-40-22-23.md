---
title: Minecraft Beta & Preview - 26.40.22/23
date: 2026-06-09T14:11:06Z
updated: 2026-06-09T16:51:13Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46506466842125-Minecraft-Beta-Preview-26-40-22-23
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  blocks-1: blocks
  h_01KTPMP4EFTVPEXCZS0NA2GE53: user-interface-1
  user-interface-1: user-interface-2
---

**Posted:** 9 June 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/46507319483661" alt="Minecraft Preview 26.40.22" />
</figure>

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Accessibility

- Added a screen distortion option in the accessibility settings that controls how much the screen is distorted by the nausea effect and when going through Nether portals

## Character Creator

- Fixed error message not showing when importing an invalid custom skin ([MCPE-239136](https://bugs.mojang.com/browse/MCPE-239136))

## Graphical

- Clouds, sun, moon, and stars now render when the camera is underwater in Vibrant Visuals
- Fixed corrupted visuals on mobs when using Vibrant Visuals with PBR resource packs that include heightmap textures for actors

## Items

- Thrown Eggs no longer cause their targets to jump extra high in the air ([MCPE-238865](https://bugs.mojang.com/browse/MCPE-238865))
- Fixed Shulker Boxes not playing the pickup-pop animation in inventory slots ([MCPE-239091](https://bugs.mojang.com/browse/MCPE-239091))

## Mobs

- The Sulfur Cube and Slime no longer play step sounds when moving around
- The Sulfur Cube no longer destroys snow layers upon its spawning from a Bucket of Sulfur Cube
- A Sulfur Cube that has absorbed a Magma block will no longer apply damage to actors wearing Frost Walker Enchanted Boots ([MCPE-238662](https://bugs.mojang.com/browse/MCPE-238662))
- Sulfur Cubes will now correctly take damage from Hot Sulfur Cubes if they don't have a block absorbed
- Sulfur cubes are no longer considered hostile:
  - They no longer prevent players from sleeping ([MCPE-239139](https://bugs.mojang.com/browse/MCPE-239139))
  - They no longer grant the Monster Hunter achievement when killed
  - They are no longer attacked by conduits ([MCPE-239180](https://bugs.mojang.com/browse/MCPE-239180))
- Sulfur cubes can now spawn on the surface when the biome is sulfur caves ([MCPE-239038](https://bugs.mojang.com/browse/MCPE-239038))
- Sulfur cubes can now spawn regardless of light level ([MCPE-239039](https://bugs.mojang.com/browse/MCPE-239039))
- Fixed bug where Sulfur Cubes would sink or not be able to move after ejecting their block

## Realms

- Fixed an issue where the profanity popup wouldn't show when using profanity in the Realm title or description
- Fixed an issue where Realms specific tips weren't showing when loading into a Realm
- Added in more Realms based tips

## Stability and Performance

- Fixed a bug where available storage was not being correctly measured when downloading resource packs to join multiplayer worlds.
- When downloading resource packs to join multiplayer worlds with low available storage, unused cached packs from previous sessions will be cleared to make room for the incoming packs.
- When downloading resource packs to join multiplayer worlds with low available storage, packs will be downloaded one a time to compact the total required space.
- Fixed a potential rare crash related to dimension changes on PlayStation

## User Interface

- Fixed strikethrough alignment for sale prices
- Fixed a bug where some pack configurations would load locally but not when uploaded to Realms.
- Added new variant for Marketplace Bundle UI
- Changed furnace tabs order; furnace recipes reordered
- Pressing "E" while hovering the mouse cursor over the recipe search bar, inputs the letter “E” instead of closing the screen at CraftingScreen and FurnaceScreen
- Fixed Fullscreen mode to remember which screen it was last on
- The Marketplace Pass accordion is now hidden when the player is in any beta
  - When the player is in a beta on PlayStation or iOS, the "Get more" Marketplace button is hidden as well
- The fire overlay added to the player has been updated to more closely resemble Java: ([MCPE-128988](https://bugs.mojang.com/browse/MCPE-128988))
  - The overlay has been rotated 45 degrees to increase visibility in the center of the frame
  - The overlay has been shifted down somewhat to increase visibility across the frame
- Fixed flickering crosshair in split screen ([MCPE-123918](https://bugs.mojang.com/browse/MCPE-123918))
- Fixed Banner message for graphics mode settings option ([MCPE-231879](https://bugs.mojang.com/browse/MCPE-231879))

# Technical Updates

## AI Goals

- Made schemas for the following actor components stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.40 and newer.
  - `minecraft:on_death`
  - `minecraft:on_friendly_anger`
  - `minecraft:on_hurt_by_player`
  - `minecraft:on_hurt`
  - `minecraft:on_ignite`
  - `minecraft:on_start_landing`
  - `minecraft:on_start_takeoff`
  - `minecraft:on_target_acquired`
  - `minecraft:on_target_escape`
  - `minecraft:on_wake_with_owner`

## API

- Released `Block.getParts` from beta to scripts version `2.9.0`
- Changed `EntityFogComponent` -\> `FogSettings`, `EntityFogComponentError` -\> `FogSettingsError`, and added `fogSettings` property to `Player` in `@minecraft/server` beta. `FogSettings` is functionally identical to `EntityFogComponent` but is no longer accessed via `Entity.getComponent`, use `Player.fogSettings` instead.

## Blocks

- Fixed custom blocks with the 'minecraft:tick' component ticking more than expected when placed via a structure with saved tick data ([MCPE-236362](https://bugs.mojang.com/browse/MCPE-236362))
- Released `minecraft:multi_block` trait. However, for the field `"direction"` horizontal directions will still require `Upcoming Creator Features` experiment
- Custom stairs can now form corners with vanilla stairs outside of Beta

## Block Components

### Fences

- Vanilla fence blocks now expose per-direction connection block states (`minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`) reflecting which neighbors the fence connects to

## Editor

- Renamed "Brush Paint" to "Brush" in the Editor UI
- Added glTF and GLB file format support to the Custom Mesh Tool.
- The Dimensions dropdown menu now shows a checkmark next to the player's current dimension
- Added Structures to the View menu
- Added Keyboard Settings to the File menu
- Added Biome Data Assignment to the World menu
- Added Dimensions Panel to the Dimensions submenu in the World menu
- Added a filterProfanity option to string property item so the editor's world export name field validates the input against a profanity filter, surfacing a warning modal and clearing the field when profanity is detected.
- Fixed issue that leaves the instance in the layout after baking, instead of removing it.
- Fixed a crash that occurred when removing structures from a layout template when a template was placed into the world

## Entity Components

- Made the following changes to the `minecraft:apply_knockback_rules` component:
  - Renamed `scale_previous_velocity` to `slowdown_scale`
  - `horizontal_power` is no longer scaled by `0.4` internally
    - Similar values for `horizontal_power` and `vertical_power` now produce similar knockback on both axes
  - Deprecated the following fields:
    - `horizontal_hit_angle_scale`
    - `vertical_hit_angle_scale`
    - `vertical_position_angle_scale`
  - Added a new field, `knockback_mode`, which provides more intuitive control over how knockback is applied:
    - `relative_horizontal` (default): Applies knockback along the horizontal direction from attacker to target
    - `hit_direction`: Applies knockback based on the hit direction and point of impact (for example, hits from below push upward, and hits on the left side push to the right)
  - The component is no longer in Beta

## Features

- Added content error when loading features with identifiers that already exist within the same behavior pack

## General

- Fixed invulnerability bypass when changing damage of entity hurt before event during lethal damage
- Fixed invulnerability timer floating-point cycling issue for very small damage diffs

## Item Components

- Updated item schema validation so `minecraft:item.components` now requires at least one component entry for item documents in v1_26_30 and beta

## User Interface

- Small geometries using the `"item_display_transforms" -> "gui" -> "fit_to_frame": false` option will now be properly centered in format_version 1.21.130 and above ([MCPE-234752](https://bugs.mojang.com/browse/MCPE-234752))

# Experimental Technical Updates

## Add-Ons

- Improved the experimental JSON document upgrader: configuration parsing errors are now surfaced through the upgrader's error logging, errors that abort an upgrade are recorded in the error log, and files found outside of a pack are ignored instead of failing the run

## API

- Changed property name `playfabId` on `Player` class to `persistentId` in `@minecraft/server` in beta.
- Added property `splitScreenSlot` to `@minecraft/server-admin`'s `AsyncPlayerJoinBeforeEvent` in `beta`
- Added enum `PlayerScriptScreenSlot` to `@minecraft/server` in `2.9.0`
- Added method `getSplitScreenSlot` to `@minecraft/server`'s `Player` in `beta`
- Changed `beta` method `getPing` of `@minecraft/server`'s `Player` to have restricted execution privilege
- Added `BlockVolumeBase.getClosest` to `beta`. Returns the closest N block positions in a volume to a given location sorted by distance
- Added `BlockVolumeBase.getFarthest` to `beta`. Returns the farthest N block positions in a volume from a given location sorted by distance
- Added `class EntityTamedBeforeEvent` to `beta`
- Added `class EntityTamedBeforeEventSignal` to `beta`
- Added `property WorldBeforeEvents.entityTamed` to `beta`

## Jigsaw Structures

- A Jigsaw Structure's layout will now be persisted to disk if any intersecting chunks are saved. This makes partially saved Jigsaw Structures less prone to breaking because of configuration changes. The feature will be incrementally rolled out to online devices and Realms.

## Sounds

- Fixed a crash that occurred when loading a behavior pack containing a `sounds/sound_definitions.json` file with the `minecraft:server_sound_definitions` payload

## User Interface

- Removed the Point Light Shadow Quality slider and merged its functionality into the Point Light Quality slider. These sliders are available only when the "RenderDragon Features for Creators" experiment toggle is enabled for Vibrant Visuals.
