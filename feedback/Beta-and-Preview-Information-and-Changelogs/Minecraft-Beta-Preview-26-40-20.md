---
title: Minecraft Beta & Preview - 26.40.20
date: 2026-06-02T14:41:23Z
updated: 2026-06-02T19:42:07Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46333309174669-Minecraft-Beta-Preview-26-40-20
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  editor-1: editor
---

**Posted:** 2 June 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Accessibility Features

- Fixed text field narration restarting label and description on every keypress

- Text field now narrates its content when editing is stopped via keyboard or gamepad

- Fixed a bug where Sweet Berry Bush damage did not produce closed captions ([MCPE-238265](https://bugs.mojang.com/browse/MCPE-238265))

## Biomes

- Water fog in Sulfur Caves is now more blue than green, to better match Java Edition ([MCPE-238660](https://bugs.mojang.com/browse/MCPE-238660))

## Blocks

- Fixed an issue where a ghost block was being created when simultaneously releasing crouch and placing a block on an interactive block such as a Decorated Pot, Item Frame, or Chest ([MCPE-189683](https://bugs.mojang.com/browse/MCPE-189683)) ([MCPE-234423](https://bugs.mojang.com/browse/MCPE-234423))

- Potent Sulfur can now erupt through flowing liquids

- Potent sulfur is located after sulfur instead of polished sulfur in the creative inventory

## Cloud Storage

- Fix issue where banner presenting "Low Cloud Storage" was displayed briefly when duplicating worlds. ([MCPE-239103](https://bugs.mojang.com/browse/MCPE-239103))

## Gameplay

- Minecart entity separation is now working as it previously did prior to 1.21.0 ([MCPE-216837](https://bugs.mojang.com/browse/MCPE-216837))

- Player names will now show as blue when in a party 

## Graphical

- Guardian and Elder Guardian beams now render with their correct animated textures when Texture Streaming is enabled ([MCPE-238393](https://bugs.mojang.com/browse/MCPE-238393))

- End Crystal beams no longer appear as white cylinders when Texture Streaming is enabled ([MCPE-238293](https://bugs.mojang.com/browse/MCPE-238293))

- Fixed enchantment glint effect disappearing from items with texture streaming enabled after some time passes ([MCPE-238317](https://bugs.mojang.com/browse/MCPE-238317))

- Fixed high resolution textures from Texture Packs appearing blurred when Texture Streaming is enabled ([MCPE-238380](https://bugs.mojang.com/browse/MCPE-238380))

- Fixed Anti-Aliasing not being applied when launching the title in fullscreen mode ([MCPE-237155](https://bugs.mojang.com/browse/MCPE-237155))

- Fixed a rare crash that could occur when relaunching the game near an End gateway beam after changing graphics mode.

- Custom dimension fog color matches the brightness depending on time of day ([MCPE-238051](https://bugs.mojang.com/browse/MCPE-238051))

- Fixed an issue where cloud reflections in water were unusually bright for a few seconds after switching to midnight time in Vibrant Visuals. ([MCPE-221546](https://bugs.mojang.com/browse/MCPE-221546))

- Fixed an issue where component-rendered custom blocks did not show emissive/MER effects when held, dropped, or displayed in item frames or shelves with Vibrant Visuals enabled. ([MCPE-237517](https://bugs.mojang.com/browse/MCPE-237517))

## Items

- Mobs released from a Bucket no longer carry over their state from before they were captured ([MCPE-238275](https://bugs.mojang.com/browse/MCPE-238275))

  - Mobs no longer take fall damage accumulated before being captured
  - Mobs captured while on fire are no longer still burning when released
  - Mobs captured while suffocating no longer take leftover suffocation damage when released
  - Mobs captured shortly after using a Nether portal can now use one again immediately when released
  - Mobs no longer keep any status effects they had when captured
  - Mobs no longer immediately resume attacking their previous target when released

- The "Bounce" music disc can now be found in abandoned mineshafts when the "Villager Trade Rebalancing" experiment is enabled

- Mobs released from a Bucket no longer retain the movement they had when captured ([MCPE-238275](https://bugs.mojang.com/browse/MCPE-238275))

## Mobs

- Turtles can now be attached to Balloons with the EDU toggle on

- Fixed leashed mobs being incorrectly pulled by Leash Knots ([MCPE-237752](https://bugs.mojang.com/browse/MCPE-237752))

  - This could happen to Sulfur Cubes being leashed to Fences, after being hit repeatedly with a Mace, making it look like the Sulfur Cube lost gravity

- Sulfur Cubes no longer push each other when placed on adjacent blocks

- The Sulfur Cube no longer absorbs a block in the player's hand from further distance than 8 blocks

- The item label for a Bucket of a named Sulfur Cube now includes its absorbed Block (MCPE-238162)

- Sulfur Cubes with a block absorbed can no longer freeze

## Character Creator

- Added toast notification when character creator fails to initalize on Realm join

## Realms

- Moving Realm tags to the left side of the Information Panel

- Fixed the spacing in the Realms Hub Side Panel

- Various adjustments to the Realms Hub Community screen components

- When the client is outdated load the Realm List and allow access to Realms Hub, but the player will be unable to play until they update their game.

- Shrink focus size of side menu in stories comments and report screens to fit the content

- Fixed an issue in Realms hub admin logs where gamertags of players who are no longer members of the Realm were delayed on loading

- Removed the Realms Subscriptions from the Settings-\>Subscriptions page

- Adding in the Admin Log icon to the Community Tab in Realms Hub

## Sounds

- Fixed Shulker hurt sounds not playing due to mismatched audio file names

- Fixed Pillager celebrate sound not playing due to a typo in the sound definition (`elebrate3` → `celebrate3`)

- Fixed Panda idle, aggressive idle, and worried sounds referencing non-existent audio files, which could cause missing audio

- Sulfur spikes now have their own dedicated block sounds and events

- Updated hurt and death sounds for one of the chicken sound variants

- Main menu music will now start after the initial loading screen to prevent stuttering

- Background music will now stop when a player is close to a playing Jukebox ([MCPE-31166](https://bugs.mojang.com/browse/MCPE-31166))

## Stability and Performance

- Fixed a memory leak in the Character Creator that could cause crashes after extended use on memory-constrained platforms

## User Interface

- Added a specific error message when adding or editing an external server with an address and port that already exists

- Fixed missing localized text for the Follow Me, Over There, Simple Clap, and Wave emotes

- The Marketplace Pass accordion is now hidden when the player is in any beta

  - When the player is in a beta on PlayStation or iOS, the "Get more" Marketplace button is hidden as well

- Fixed missing Storage Location option in New Storage Tab for Android devices ([MCPE-238935](https://bugs.mojang.com/browse/MCPE-238935))

- Fixed a bug that caused the New Settings Screen to display a deprecated warning modal when enabling text-to-speech while an unsupported language is selected

# Technical Updates

## AI Goals

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.40 and newer.

  - `minecraft:behavior.leap_at_target`
  - `minecraft:behavior.silverfish_merge_with_stone`
  - `minecraft:behavior.silverfish_wake_up_friends`

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.40 and newer.

  - `minecraft:behavior.squid_dive`
  - `minecraft:behavior.squid_flee`
  - `minecraft:behavior.squid_idle`
  - `minecraft:behavior.squid_move_away_from_ground`
  - `minecraft:behavior.squid_out_of_water`

- Made the schema for `minecraft:behavior.beg` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.40 and newer. Int Range field `look_time` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made the schema for `minecraft:behavior.drink_potion` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.40 and newer

- Made the schema for `minecraft:behavior.float_wander` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.40 and newer. Float Range field `float_duration` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made the schema for `minecraft:behavior.summon_entity` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.40 and newer

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.40 and newer.

  - `minecraft:behavior.nap`
  - `minecraft:behavior.move_to_block`
  - `minecraft:behavior.snacking`
  - `minecraft:behavior.stalk_and_pounce_on_target`

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.40 and newer.

  - `minecraft:behavior.charge_held_item`
  - `minecraft:behavior.eat_block`
  - `minecraft:behavior.knockback_roar`
  - `minecraft:behavior.ranged_attack`

- Actor goal `minecraft:behavior.ranged_attack` takes a float range for `attack_interval` instead of `attack_interval_min` and `attack_interval_max` for versions 1.26.40 and newer.

## API

- Released `@minecraft/server` version 2.9.0

- Added `@minecraft/server` version 2.10.0-beta

- Fixed invulnerable timer bypass when changing before hurt event damage below source amount

- Moved `nameplateDepthTested` and `nameplateRenderDistance` from beta to V2.8.0

- Moved `SoundInstance` class from beta to `V1.2.0`.

- Moved `SoundInstance.stop` from beta to `V2.9.0`.

- Moved `Player.playSound` returning a `SoundInstance` from beta to `V1.2.0`.

- Moved `Dimension.playSound` returning a `SoundInstance` from beta to `V1.11.0`.

### Dimension

- Significantly improved block search speed when using BlockVolume for 'fillBlocks' API.

## Blocks

- Added "shelf" as an "item_display_transforms" offsets value inside geo.json

  - This is to give the offsets when placed inside a Shelf Block
  - Pre 1.26.40 blocks with a "fixed" value will have that value copied to "shelf"
  - New 1.26.40 blocks will be able to define "fixed" for Item Frame and "self" for Shelf Block

## Bug

- Updating a structure from clipboard now opens a confirmation dialog before overwriting, and the option is disabled when the clipboard has no content

- Added pagination and selector menu support for tabs

- Using mouse wheel scroll on tool rail, action bar items and floating window tabs will now toggle between pages

- Added scrolling support for the menu bar and context submenus when they extend beyond the window size

## Editor

- Builds no longer crash or incorrectly copies data out of the Shared 'minecraftWorlds' folder for worlds (with behavior / resource packs enabled) upon exiting the Edit Project screen using the Back / Resume buttons

- Fixed an issue where the mouse cursor preview volume vanishes after toggling Vibrant Visuals on/off

- Added real-time chunk sync to the Biome Data Assignment Tool

- The Vibrant Visuals generate resource pack button now exports any edited configurations to a resource pack with a folder link provided

## Entity Components

- Added a new `require_collision_overlap` boolean field to `minecraft:pushable_by_entity`'s `presets`:

  - Determines whether the collision boxes of two entities must overlap for pushing to occur
  - For format versions `1.26.40` and higher, this field defaults to `true`
  - For format versions below `1.26.40`, this field defaults to `false`

## Item Components

- Item component `minecraft:wearable` setting `slot` field to `slot.armor.body` will not cause assert.

## Items

- Fixed minecraft:shooter component not being able to shoot if no ammunition was defined

- Items declared with a `format_version` of 1.26.30 or higher now require at least one entry under `minecraft:item.components`. Previously such items would silently fall back to legacy item parsing; they now fail to register with a content error.

- Custom item definitions in resource packs now reliably override their Vanilla counterparts in two previously-broken cases:

  - A custom definition using an older `format_version` will now be applied on top of a Vanilla item that ships with `format_version` 1.16+ (previously the custom data was silently dropped). In Vanilla this only affects `minecraft:apple` and `minecraft:breeze_rod`.

  - A custom definition targeting a Vanilla item by its flattened identifier (e.g. `minecraft:enchanted_golden_apple`) now correctly applies even when Vanilla defines the item under its legacy identifier (e.g. `minecraft:appleEnchanted`). ([MCPE-185730](https://bugs.mojang.com/browse/MCPE-185730))

## Particles

- Particles using textures from the font folder no longer produces erroneous content log error ([MCPE-238790](https://bugs.mojang.com/browse/MCPE-238790))

## User Interface

- Refactor of ProfileSystem subscriptions for a speculative fix for profile fetches resulting in a crash due to stale reference

# Experimental Technical Updates

## API

- Added a new loot function CarryOverBlockEntityDataFunction with a single boolean field "dynamic_properties" behind beta

- Added `ItemBlockDynamicPropertiesComponent` item component behind `beta`

  - It may be retrieved on an item that resulted from a `carry_over_block_entity_data` loot function
  - It has two methods, `get` and `totalByteCount` which work like their block component counterparts

- Added `EntityStartSneakingAfterEvent` and `EntityStartSneakingAfterEventSignal` to beta.

- Added `EntityStopSneakingAfterEvent` and `EntityStopSneakingAfterEventSignal` to beta.

- Added `clear()` to `AllowList` in `@minecraft/server-admin` in beta

- Added `setVolume`, `setPitch`, `fade`, and `seekTo` methods to `SoundInstance` in `beta`

- Added `loopCount` option to `PlayerSoundOptions` and `WorldSoundOptions` in `beta`

- Infinitely-looping sounds (`loopCount: -1`) stop automatically when the last `SoundInstance` reference is dropped; retain the handle to keep the sound playing

- Added `enum CameraShakeType` to `beta`

- Added `interface CameraShakeOptions` to `beta`

- Added `function Camera.addShake` to `beta`

- Added `function Camera.stopShaking` to `beta`

- Added `class EntityTamedAfterEvent` to `beta`

- Added `class EntityTamedAfterEventSignal` to `beta`

- Added `interface EntityTamedEventFilter` to `beta`

- Added `property WorldAfterEvents.entityTamed` to `beta`

- Added `interface BlockQueryOptions` to `beta`

- Changed `Dimension.getBlocks` in `beta` to accept `BlockQueryOptions` instead of `BlockFilter` which adds support for `closest`, `farthest`, and `location` options

- `SoundInstance` in `beta` now exposes a `soundEventId` property that reports the sound event the instance was started with

- `SoundInstance` in `beta` now exposes a `recipient` property that returns the `Player` the sound was played for, or `undefined` for broadcast sounds

- `SoundInstance` in `beta` now exposes a `durationInfo` property that returns a `SoundDurationInfo` when the underlying sound definition includes duration information, otherwise `undefined`

- Added `SoundDurationInfo` in `beta` with a `duration` property, an `isActive` property, and a `getPlaybackPosition()` getter that returns the elapsed playback time in seconds

- `SoundInstance` now exposes an `id` property that returns a unique identifier for the instance

- `WorldAfterEvents` in `beta` now exposes a `soundCompleted` signal with a `soundInstanceId` property that matches the `id` of the `SoundInstance` that completed that fires when a tracked sound's declared duration elapses

- Added API for `minecraft:instrument_sound` component

  - it has a getInstrumentName function to get the assigned instrument given a valid facing Direction
  - it has a playInstrumentSound function to play the instrument sound assinged to a given valid facing Direction
  - the component can be obtained from any custom or vanilla block; if a block does not have the component explicitly defined, then a component with the default sounds will be returned

- Fixed `PlayerStartBreakingBlock` and `PlayerCancelBreakingBlock` from firing when a block can't be broken by item in creative

## Blocks

- When applying a "minecraft:sixteen_way_rotation" value via console command, autocomplete suggestions will now correctly show numbers 0-15. Sixteen-way placement direction block trait now applies its rotation with the same orientation as existing Cardinal Direction and Facing Direction traits.

- Added some trait restrictions for blocks with the `minecraft:multi_block` trait

  - Cannot also define the `minecraft:connection` trait

  - Cannot also define the `minecraft:placement_position` trait

  - If the `minecraft:placement_direction` is defined, only the `minecraft:cardinal_direction` state is allowed to be enabled

  - The component `minecraft:geometry` cannot define `n_way_visual_rotation` for multi-blocks

  - Cannot also define the `minecraft:block_entity` component

### Voxel Shapes

- Added occlusion voxel shapes for one-arm, two-arm, three-arm, four-arm, and full-arm wall connections. These shapes will be applied to all Wall variations when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces of custom blocks are correctly removed when attached to different Wall geometries: single posts, wall runs, corners, T-junctions, intersections, and wall clusters

### DDUI

- Fixing default behavior for close button bellow DDUI custom forms
  - Default visibility value is false

\##Items

- Added a new loot function "carry_over_block_entity_data" with a single boolean field "dynamic_properties" defaulted to false
  - When looting a block with a block-entity and dynamic-properties, it will try to carry its dynamic-properties over to the created item-stack
  - Requires "Upcoming Creator Features Experiment"

## Sounds

- Added a new `minecraft:server_sound_definitions` payload to `sounds/sound_definitions.json` that lets behavior packs declare server-side sound definitions for sounds played from script

- Each definition can include an optional `duration_info` with a `seconds` length and a `mode` that controls how playback time is tracked

- A `mode` of `game_time` means the duration is tracked by ticks

- A `mode` of `real_time` means the duration is tracked by wall-clock time

Example:

``` auto
{
    "format_version": "beta",
    "minecraft:server_sound_definitions": [
        {
            "sound_event_name": "creatorpack:my_cool_song",
            "duration_info": {
                "mode": "game_time",
                "seconds": 180.0
            }
        },
        {
            "sound_event_name": "creatorpack:my_other_song",
            "duration_info": {
                "mode": "real_time",
                "seconds": 12.5
            }
        },
        {
            "sound_event_name": "creatorpack:ambient_loop"
        }
    ]
}
```

## Graphical

- Updated point lights to use a shadow atlas

  - Shadows should look identical to before, with some improvements to performance and update rate
