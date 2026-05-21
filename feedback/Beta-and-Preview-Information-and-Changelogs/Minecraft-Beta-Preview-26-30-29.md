---
title: Minecraft Beta & Preview - 26.30.29/31
date: 2026-05-19T15:20:37Z
updated: 2026-05-21T17:25:11Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45975590959117-Minecraft-Beta-Preview-26-30-29-31
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Update:** 21 May 2026

Beta & Preview 26.30.31 - Mobile Only

- Please note, we have additional fixes being added for Android and iOS devices rolling out to players, to address some important bugs that could occur during gameplay.

**Posted:** 19 May 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

# Chaos Cubed Features and Fixes

## Biomes

- Added a grass color override specific to the Sulfur Caves

## Blocks

- The textures of Sulfur and Cinnabar Blocks have been updated to match Java ([MCPE-238420](https://bugs.mojang.com/browse/MCPE-238420))

- Chiseled Sulfur and Chiseled Cinnabar can no longer be crafted by stonecutting Polished Sulfur and Cinnabar Bricks, respectively ([MCPE-238470](https://bugs.mojang.com/browse/MCPE-238470))

- Sulfur Spikes now grow over time ([MCPE-238496](https://bugs.mojang.com/browse/MCPE-238496))

## Potent Sulfur

- Entities propelled by erupting Potent Sulfur now travel slightly higher, matching Java Edition

- Erupting Potent Sulfur particles now travel slightly higher, matching Java Edition

- Erupting Potent Sulfur particles no longer get blocked as easily by surrounding blocks

- Noxious Gas particles now darken based on surrounding light levels ([MCPE-238484](https://bugs.mojang.com/browse/MCPE-238484))

- Potent Sulfur can no longer be moved by Pistons or by Sticky Pistons ([MCPE-238533](https://bugs.mojang.com/browse/MCPE-238533))

- Fixed a bug where naturally generated Sulfur Springs would occasionally not produce a geyser ([MCPE-238482](https://bugs.mojang.com/browse/MCPE-238482))

## Sulfur Caves

- Sulfur Caves now spawn more Sulfur pools

- Adjusted spawn ratios for the following mobs within the Sulfur Caves .

  - Creeper: spawns less frequently and always in groups of two
  - Skeleton: spawns less frequently and always in groups of two
  - Sulfur Cube: spawns in groups of two to four
  - Witch: spawns less frequently
  - Zombie: spawns less frequently and always in groups of two
  - Cave Spiders replace Spiders

- Reduced the amount of Glow Lichen occurring to be in line with other caves

- Sulfur Caves exposed to the surface now generate with all the features

## Sulfur Cube

- Fixed bug where the Sulfur Cube would look for blocks and be tempted at a longer distance than intended

- Fixed an issue where upward gravity compensation was incorrectly applied after a slow, straight-up bounce on the Sulfur Cube ([MCPE-237914](https://bugs.mojang.com/browse/MCPE-237914))

- Sulfur Cubes can no longer pick up more than one item at a time by themselves

- Fixed bug where the Sulfur Cube would inconsistently stay floating after absorbing a block that should make it sink

- Improved server-side performance when lots of Sulfur Cubes are in an area

- Added death message for when a player is killed by a Magma Sulfur Cube ([MCPE-238663](https://bugs.mojang.com/browse/MCPE-238663))

- Sulfur Cube with an absorbed block is now immune to the Poison effect

- Fixed the Sulfur Cube not being able to spawn in 1x1 large spaces ([MCPE-237758](https://bugs.mojang.com/browse/MCPE-237758))

- TNT Sulfur Cubes can now be ignited when in contact with either a Magma block or a Sulfur Cube with a Magma block inside of it

- Magma Sulfur Cubes now won't damage Netherite Armor anymore ([MCPE-238665](https://bugs.mojang.com/browse/MCPE-238665))

- Shields don't block the damage from Magma Sulfur Cubes anymore ([MCPE-238664](https://bugs.mojang.com/browse/MCPE-238664))

- Fire Resistance effect now properly protects against Magma Sulfur Cubes ([MCPE-238669](https://bugs.mojang.com/browse/MCPE-238669))

- Sulfur Cubes with an absorbed block no longer push player-controlled mounts

- Sulfur Cubes using the `fast_flat` archetype are no longer buoyant

- Sulfur Cubes using the `hot` archetype now have the same physics properties as the `regular` archetype

## Sounds

- Regular Sulfur Cube once again plays a landing sound after a jump

- Geysers now have unique sounds when continuously erupting

# Features and Bug Fixes

## Biomes

- Fixed a bug that caused custom Nether biomes to generate with a repeating tiling pattern across chunk boundaries

## Blocks

- TNT blocks now have smoke particles when ignited ([MCPE-238488](https://bugs.mojang.com/browse/MCPE-238488))

## Character Creator

- Fixed error message displayed when importing a custom skin on android without enough device space ([MCPE-231262](https://bugs.mojang.com/browse/MCPE-231262))

## General

- Fixed an issue where accepting a game invite while the game was loading could fail due to skins not yet being loaded

- Fixed placement of Lakes where they would not break above the surface

- Fixed a scenario where the game would send excessive web requests.

## Graphical

- Fixed Vibrant Visuals shadows and reflections not rendering on PlayStation 4

- Fixed a crash that could occur on Windows when resizing the game window during initial loading

## Loot Tables

- Fixed loot table container filling so that when trying to insert a new item, existing partial stacks will be merged to open up slots for new additions ([MCPE-233039](https://bugs.mojang.com/browse/MCPE-233039))

## Marketplace

- Fixed issue causing the Marketplace screen to throw an assert

## Mobs

- Sulfur Cubes can now receive angled knockback when hit using weapons enchanted with Knockback and when the attacker is sprinting or swimming ([MCPE-238284](https://bugs.mojang.com/browse/MCPE-238284))

## Music

- Reference to the nonexistent `clark.ogg` sound asset has been removed ([MCPE-238930](https://bugs.mojang.com/browse/MCPE-238930))

## Realms

- Fixed an issue where clearing Realm members via "Clear All Members" resulted in a crash

- Adding in a hardcore heart and border in the Realms Hub Slots section

- Fixed an issue where pack content would not visually reset until leaving the screen when resetting the world

## User Interface

- Fixed a freeze when opening a furnace without recipes

- Replaced the Locator Bar toggle in the Multiplayer tab of the Create New World and Edit World screens with a Player Waypoints setting, allowing players to choose between "Off" (no players shown on the locator bar) and "Everyone" (all players shown on the locator bar)

- Added support for new Marketplace Content Cards

- Updated skin info panel in dressing room to remove duplicate author label

## World Storage

- Increased Windows Preview cloud backup storage capacity to 4GB

# Technical Updates

## Add-Ons

- Released the Custom Projectiles experiment. They can now be used beyond the experimental context

## Editor

- Added a modal dialog to Vibrant Visuals that allows users to map per-biome lighting configurations, letting creators assign specific lighting groups, atmospheric scattering, color grading, water, and cubemap settings to individual biomes

- Added Dimensions and Biome Data Assignment tools

- Added the Custom Mesh tool to Editor, allowing creators to import STL mesh files and place them as blocks

- Updated editor tools to show a load/busy mouse cursor during longer-running operations (shape placement, flood apply, chunk operations).

- Modifying buttons in a button pane now works correctly again

## API

- Fixed a bug where the `@minecraft/debug-utilities` package didn't have a peer dependency on the beta version of `@minecraft/server`.

- Released `EntityUpgradeAfterEvent` and `EntityUpgradeAfterEventSignal` from beta to stable

- Released `LocatorBarErrorReason` from `beta` to `v2.8.0`

- Released `WaypointTexture` from `beta` to `v2.8.0`

- Released `EntityWaypoint` from `beta` to `v2.8.0`

- Released `LocationWaypoint` from `beta` to `v2.8.0`

- Released `LocatorBar` from `beta` to `v2.8.0`

- Released `PlayerWaypoint` from `beta` to `v2.8.0`

- Released `Waypoint` from `beta` to `v2.8.0`

- Released `WaypointTextureBounds` from `beta` to `v2.8.0`

- Released `WaypointTextureSelector` from `beta` to `v2.8.0`

- Released `InvalidWaypointError` from `beta` to `v2.8.0`

- Released `InvalidWaypointTextureSelectorError` from `beta` to `v2.8.0`

- Released `LocatorBarError` from `beta` to `v2.8.0`

- Released `CustomTexture` from `beta` to `v2.8.0`

- Released `EntityVisibilityRules` from `beta` to `v2.8.0`

- Released `PlayerVisibilityRules` from `beta` to `v2.8.0`

- Released `DimensionRegistry` from `beta` to `v2.8.0`

- Released `StartupBeforeEvent.dimensionRegistry` from `beta` to `v2.8.0`

- Released `CustomDimensionAlreadyRegisteredError` from `beta` to `v2.8.0`

- Released `CustomDimensionInvalidRegistryError` from `beta` to `v2.8.0`

- Released `CustomDimensionNameError` from `beta` to `v2.8.0`

- Released `CustomDimensionReloadNewDimensionError` from `beta` to `v2.8.0`

- Added new @minecraft/server-ui 2.1.0 release

### DDUI

- Released MessageBox, CustomForm, and all supporting APIs out of beta and into @minecraft/server-ui 2.1.0

## Biome Components

- The `minecraft:noise_gradient` surface builder type has been updated. The API is the same as before, but the noise ranges provided are now clamped to the range \[-1, 1\] instead of \[0, 1\]

## Blocks

- The "lava_flammable" field of the "minecraft:flammable" component is now usable without the Experimental Upcoming Creator Features

- Fixed block traits not respecting experimental requirements for `format_version >= 1.26.20`

- Blocks with a custom `beforeOnPlayerPlace` scripting event placed by an item with a `minecraft:block_placer` component no longer desyncs upon placement ([MCPE-238017](https://bugs.mojang.com/browse/MCPE-238017))

## Commands

- Fixed an issue where every `/camerashake add` changed the shake types of previously added shake events

- Fix missing suggestions for commands typed after '/execute run setblock' ([MCPE-238266](https://bugs.mojang.com/browse/MCPE-238266))

## Components

- Added field 'stop_if_holding_item' to "minecraft:behavior.pickup_items"

  - Defaults to false,
  - If true, the mob will not pick up another item if the item's preferred slot matches

## Entity Components

- Added the field `extra_knockback_approach` to `minecraft:apply_knockback_rules` preset settings for handling extra knockback from enchantments, sprinting and swimming

  - `reapply_default` preserves the current behaviour where knockback is reapplied with the new power and a default preset
  - `multiply` instead combines it into the original knockback calculation by multiplying the power value in the preset provided by `minecraft:apply_knockback_rules`

- Made several changes to `minecraft:pushable_by_entity` presets:

  - The `min_distance` field now controls the minimum range at which push interactions can occur for all `push_mode` values

    - Distance is measured as the horizontal distance between the centers of the two entities

  - Renamed the `kick_distance_threshold` field to `max_distance`, which now controls the maximum range at which push interactions can occur for all `push_mode` values

    - Distance is measured as the horizontal distance between the center of the pushed entity and the edge of the pushing entity's collision box

  - Added a `play_sound` field to control whether the `pushed_by_player` sound is played

  - Added a new `none` value to the `push_mode` field, which disables pushing behavior entirely

## Items

- Items with both a "minecraft:use_modifiers" and a "minecraft:shooter" component with no available ammo will no longer draw with "start_using" set to "if_first" on the "minecraft:use_modifiers" component ([MCPE-228331](https://bugs.mojang.com/browse/MCPE-228331))

## Renderer

- Entity `held_item_scale` now accepts a Molang expression for state-driven scaling, and consistently applies to the main hand only in both first- and third-person

## Stability and Performance

- When leaving the game in split screen the ecomode system could receive a callback after the client had been removed causing a crash

## User Interface

- Fixed a bug where the coin icon may not appear on certain Marketplace offers

## World Generation

- Bedrock floor and ceiling will be placed regardless of "minecraft:surface_builder" and "minecraft:subsurface_builder" presence in the biome.json file

# Experimental Technical Updates

## API

- Added `EntityFogComponent` to `@minecraft/server` (beta) for manipulating a player's fog settings, with `push`, `pop`, `remove`, `getStack`, `getTags`, and `applyStack` methods

- Added `EntityFogComponentError` to `@minecraft/server` (beta)

## Blocks

- Added the `minecraft:instrument_sound` block component behind the Upcoming Creator Features experiment

  - it can be used to assign an instrument to "up" and "down" faces of a block and it's permutations

    - all current instruments can be used to define a sound
    - newly added "note.none" can be used to specify no sound for a face
    - if a face is not defined it will use its default value; "up": "note.harp" and "down": "note.none"
    - at least one face must be defined for the component to be valid Example:

``` auto
{
    "format_version": "1.26.20",
    "minecraft:block": {
        "description": {
            "identifier": "test:test_block"
        },
        "components": {
            "minecraft:instrument_sound": {
                "up": "note.bit",
                        "down": "note.bell"
            }
        }
    }
}
```

## API

- Fixed a race condition when connecting script websocket clients to a server which caused the socket to fail to connect.

- Added `class PlayerCancelBreakingBlockAfterEvent` to `beta`

- Added `class PlayerCancelBreakingBlockAfterEventSignal` to `beta`

- Added `property WorldAfterEvents.playerCancelBreakingBlock` to `beta`

## General

- Fixed player spawn position when rejoining a world after their previously saved custom dimension becomes inactive

## User Interface

- Add support for responding to Xbox friend requests from the Social Drawer
