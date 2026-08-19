---
title: Minecraft Beta & Preview - 26.50.26
date: 2026-08-18T15:29:52Z
updated: 2026-08-19T12:47:44Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48228443785101-Minecraft-Beta-Preview-26-50-26
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 18 August 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Drop 3 2026 Features

## Abandoned Camp

- Abandoned Camps are now less likely to generate on top of Villages

- Fixed multiple trees not generating in Cherry Grove and Old Growth Birch Forest Abandoned Campsites

## Blocks

- Fixed Red Shrub flickering when placing one against another Red Shrub in multiplayer

- Wool stairs and slabs can no longer be used in the painting recipe ([MCPE-241662](https://bugs.mojang.com/browse/MCPE-241662))

## Cushion

- Fishing Rod bobbers now break Cushions consistently instead of passing through them when they come to rest inside the Cushion's hitbox

- Cushions can now be placed inside non-full blocks that already have a Cushion on top ([MCPE-240482](https://bugs.mojang.com/browse/MCPE-240482))

- Fixed being able to place a Cushion on top another Cushion when moving quickly in any direction

- The Cushion can no longer be renamed with name tag ([MCPE-241359](https://bugs.mojang.com/browse/MCPE-241359 "https://bugs.mojang.com/browse/mcpe-241359"))

- Cushions no longer prevent vibrations when placed, broken or interacted with ([MCPE-241421](https://bugs.mojang.com/browse/MCPE-241421))

## Explorer Maps

- Changed the map color of several Poplar items to match their in-game appearance ([MCPE-240287](https://bugs.mojang.com/browse/MCPE-240287))

- The following items had their map colors changed:

  - Poplar Door
  - Poplar Double Slab
  - Poplar Fence
  - Poplar Fence Gate
  - Poplar Hanging Sign
  - Poplar Log
  - Poplar Pressure Plate
  - Poplar Sapling
  - Poplar Shelf
  - Poplar Slab
  - Poplar Stair
  - Poplar Standing Sign
  - Poplar Trap Door
  - Poplar Wall Sign
  - Poplar Wood
  - Stripped Poplar Log
  - Stripped Poplar Wood

## Sound

- The correct subtitle is now shown when jumping and landing on a Straw Bed ([MCPE-240463](https://bugs.mojang.com/browse/MCPE-240463))

- The correct subtitle is now shown when jumping and landing on a Shelf Mushroom ([MCPE-241675](https://bugs.mojang.com/browse/MCPE-241675))

## Straw Bed

- Straw Bed pillows now render correctly when two beds are placed next to each other ([MCPE-240506](https://bugs.mojang.com/browse/MCPE-240506))

# Features and Bug Fixes

## Blocks

- Comparators can once again read a container's inventory through Honey Blocks and Chains ([MCPE-241687](https://bugs.mojang.com/browse/MCPE-241687))

> **Developer's Note:** *While fixing a bug related to cushions (*[*MCPE-240778*](https://bugs.mojang.com/browse/MCPE-240778)*), we found that the change also affected how some players were using comparators with chains. While this behavior wasn't originally intended, we recognize it has become part of many players' creations over time. For now, we've reverted this change and may explore it further in the future.*

## Commands

- Removed self selection expansion when using commands (i.e. `/tell`) for non-operator players

## Editor

- Added user-friendly biome and block names to minimap hover tooltips, making it easier to identify biomes and blocks at a glance

- Updated custom biome color handling so that color changes are now immediately displayed both in the biome list and on the minimap for Custom Biome Tool

## Graphical

- Vibrant Visuals are no longer disabled when loading a world with Education features enabled ([MCPE-240476](https://bugs.mojang.com/browse/MCPE-240476))

- Foxes now hold the Shelf Mushroom correctly in their mouths ([MCPE-241160](https://bugs.mojang.com/browse/MCPE-241160))

- The poplar door hinges now have a metallic reflectiveness

- Fixed triangular gaps that could appear in water surfaces where water meets a bank or flows over a lip

- Increased maximum view distance to 48 for Vibrant Visuals on Windows

## Minecraft Debugger

- The Entity System and CPU Profiler views are now usable without a behavior pack enabled

## Misc

- Updated the main menu cube map

## Mobs

- Fixed incorrect naming for the yellow tail parrot fish ([MCPE-117477](https://bugs.mojang.com/browse/MCPE-117477))

## Realms

- Fixed an issue that would sometimes cause a crash on opening Realms Edit World, particularly on iOS devices

## Stability and Performance

- Fixed a crash that could occur when render controller expressions referenced variables of the wrong resource type

- Fixed worlds containing chunks saved before block connection upgrades getting stuck while loading when creating the world

- Fixed an issue that could disconnect players while loading worlds with certain add-on content ([MCPE-241505](https://bugs.mojang.com/browse/MCPE-241505))

- Fixed the game stuttering in world after long play sessions or after leaving the game suspended for an extended time

- Reduced the memory used by animated Character Creator skins

## Textures

- Fixes poplar hanging sign visuals to be in parity with other signs

## User Interface

- Fixed leftover instances where button touch areas did not align with the buttons in windowed Android modes with a title bar, such as Samsung DeX and pop up view.

- Some sign-in errors which were previously reported as "Wool" are now reported with a more specific codename

- Screen narration now properly reads out the first focused element after opening the Pause Menu

- Fixed a bug where a party leader using Join Game on a friend not in their party would spuriously see the "Your party is too large" message

- The Shelf Mushroom now has the correct scale in the inventory slots

- Prevent soft-locks when the game is unable to connect to a server ([MCPE-240897](https://bugs.mojang.com/browse/MCPE-240897))

- Fixed the gamepad cursor in menus becoming choppy after long play sessions or after leaving the game suspended for an extended time

- Added an option to mute a player when reporting their chat messages

# Technical Updates

## API

- Fixed `Player.fogSettings` APIs throwing when player re-joins server.

- Releasing `PrimitiveShapesManager.getShapes` from beta to 2.10.0.

- Releasing `PrimitiveShapeQueryOptions` from beta to 2.10.0.

- `DimensionTypes.get` and `DimensionTypes.getAll` now return custom dimension types in addition to vanilla dimension types

### DDUI

- The close button in DDUI forms now make a sound when clicked or when the form is closed with a key shortcut.
- Fixed a issue where DDUI (CustomForm/MessageBox) was not working in split screen.

### Dimension

- Moved the `cloneBlocks` method from `beta` to `v2.10.0`, allowing regions of blocks to be cloned from one area of a dimension to another with support for clone modes and an optional block filter

  - Released `enum CloneMode`

  - Released the `Dimension` method `cloneBlocks`

## Blocks

- Replacing a custom block that has a `minecraft:block_entity` component with a different block definition now creates a new block entity, so the previous block's dynamic properties are no longer carried over to the block that replaced it. Changing only a block state keeps the same block entity and its dynamic properties

## Editor

- Fixed a bug that caused undo operation to fail sometimes for large block operations

- Added Undo/Redo functionality for Placing a layout instance.

- Selecting Local Lights configuration from Vibrant Visuals will now display an error if the world doesn't have resource pack definitions

- Added ControlHelp feature in the Editor. This allows the user to see what keyboard shortcuts are available in any context (globally and tool-specific) .

- `addColorPicker` on a sub pane header now renders a compact square swatch

- Added `Swatch` variant to `ColorPickerPropertyItemVariant` for color pickers that need to collapse to a single square

- Reworked the Cinematic tool's keyframe list to use expandable sub panes instead of a list pane

  - Each keyframe now owns an expander holding its name, timestamp, camera position, a collapsible rotation section, and easing type, with a teleport button and an action menu in the header
  - Added a view control footer that selects, duplicates and deletes checked keyframes, redistributes timestamps, and copies or imports cinematic JSON, replacing the buttons that previously sat above the keyframe list

- Template Instance Editor - added confirmation dialog for the action of Baking an instance.

- Improved Primitives tool placement performance and increased maximum allowed shape sizes

### Block Picker

- Fixed the Flowing Water and Flowing Lava blocks displaying as "Water" and "Lava", making them indistinguishable from their still variants

## Entity Components

- The `isolated_physics` field on `minecraft:projectile` now defaults to `true` for format version 1.26.30 and above, and `false` for older versions

  - Vanilla projectile entities now explicitly set `isolated_physics` to `false` on their `minecraft:projectile` component
  - A content error is now emitted when `isolated_physics` is set to `true` on an entity using a Vanilla projectile `runtime_identifier` (e.g., `minecraft:arrow`), as it is not intended to be used with Vanilla projectiles

## User Interface

- Fixed geometries using `"item_display_transforms" -> "gui" -> "fit_to_frame": false` being force-centered in the slot, so blocks intended to rest at the bottom are no longer moved to the center ([MCPE-240720](https://bugs.mojang.com/browse/MCPE-240720))

- Fixed `"item_display_transforms" -> "gui" -> "translation"` no longer affecting an item's position in the slot

# Experimental Technical Updates

## API

- Added `TimeMarker` class to `@minecraft/server` in beta

  - Has properties for `name`, `time`, and `period`

- Added `WorldClockRegistrationOptions` interface to `@minecraft/server` in beta

- Added `TimeMarkerOptions` interface to `@minecraft/server` in beta

- Added `WorldClockReloadTimeMarkerError` class to `@minecraft/server` in beta. This is thrown when an existing world clock has an invalid time marker after reloading scripts

- Added `WorldClockAddTimeMarkerError` class to `@minecraft/server` in beta. This is thrown by a `WorldClock.addTimeMarker` when adding a time marker fails

- Added `WorldClockRemoveMinecraftTimeMarkerError` class to `@minecraft/server` in beta. This is thrown by `WorldClock.removeTimeMarker` when trying to remove a time marker with the `minecraft:` namespace

- Added `WorldClockInvalidTimeMarkerError` class to `@minecraft/server` in beta. This is thrown when trying to access data on an invalid time marker `minecraft:` namespace

- Added `WorldClockTimeMarkerNotFoundError` class to `@minecraft/server` in beta. This is thrown by a `WorldClock` when a time marker does not exist

- Added `WorldClockRewindError` class to `@minecraft/server` in beta. This is thrown by `WorldClock.rewindTo` when the world clock's current time is behind the time marker's first occurrence

- Added `WorldClockOnTimeModifiedAfterEvent` class to `@minecraft/server` in beta

  - This event is fired when a world clock's time is directly changed through scripting or commands

- Added `WorldClockOnTimeModifiedAfterEventSignal` class to `@minecraft/server` in beta

- Added `WorldClockOnPausedAfterEvent` class to `@minecraft/server` in beta

  - This event is fired when a world clock is paused

- Added `WorldClockOnPausedAfterEventSignal` class to `@minecraft/server` in beta

- Added `WorldClockOnResumedAfterEvent` class to `@minecraft/server` in beta

  - This event is fired when a world clock is resumed

- Added `WorldClockOnResumedAfterEventSignal` class to `@minecraft/server` in beta

- Added `WorldClockOnTimeMarkerAfterEvent` class to `@minecraft/server` in beta

  - This event is fired when a world clock's time hits a time marker

- Added `WorldClockOnTimeMarkerAfterEventSignal` class to `@minecraft/server` in beta

- Added `WorldClockOnRestartBeforeEvent` class to `@minecraft/server` in beta

  - This event is fired when a world clock ticks at the maximum time and is about to restart
  - the `newTime` property on the event can be optionally set to set a custom restart time for the world clock

- Added `WorldClockOnRestartBeforeEventSignal` class to `@minecraft/server` in beta

- Added `WorldClockEventOptions` interface to `@minecraft/server` in beta

  - Has a `clock` property to filter out which clock the event should fire for

- Added `WorldClockTimeMarkerEventOptions` interface to `@minecraft/server` in beta

  - Has a `clock` property to filter out which clock the event should fire for
  - Has an optional `timeMarker` property to filter out which time marker the event should fire for

### DDUI

- Fixed wrapping for labels and headers when using large texts with no spaces between. ([MCPE-241081](https://bugs.mojang.com/browse/MCPE-241081)) Fix for players when leaving world while having a DDUI screen is open, becoming soft-locked when re-joining.

### EntityIsTamedComponent

- Added read-only `tamedToPlayer` and `tamedToPlayerId` properties to `beta` that return the player and player id that tamed the entity

### WorldAfterEvents

- Added the `worldClockOnTimeModified` event signal to `@minecraft/server` in beta. This is used to subscribe to world clock time modified events

- Added the `worldClockOnPaused` event signal to `@minecraft/server` in beta. This is used to subscribe to world clock paused events

- Added the `worldClockOnResumed` event signal to `@minecraft/server` in beta. This is used to subscribe to world clock resumed events

- Added the `worldClockOnTimeMarker` event signal to `@minecraft/server` in beta. This is used to subscribe to world clock time marker events

### WorldBeforeEvents

- Added the `worldClockOnRestart` event signal to `@minecraft/server` in beta. This is used to subscribe to world clock restart events

### WorldClock

- Added `timeMarkers` property in beta

- Added `addTimeMarker` function in beta

- Added `removeTimeMarker` function in beta

- Added `set` function in beta

- Added `skipTo` function in beta

- Added `rewindTo` function in beta

### WorldClockRegistry

- Added `registrationOptions` parameter to `registerClock` function to optionally create time markers during registration in beta

## Blocks

- Added the `container` field to the `minecraft:block_entity` block component, which gives a custom block a container that holds up to 54 item stacks, persists with the world, drops its contents when the block is broken, and opens a container screen when the block is used

- Replacing a custom block whose `minecraft:block_entity` declares a `container` with a different block definition rebuilds its block entity, so the outgoing block drops its container contents rather than handing them to the new block

- Added scripting access to custom block inventories provided by `minecraft:block_entity` containers

## Commands

- Add new `/time of` sub-command for modifying world clocks under the Creator World Clocks Features experiment

  - `/time of <clock> add <time>` - Adds time to the clock. Cannot result in a negative time
  - `/time of <clock> set <time>` - Sets the clock to the specified time. Cannot be set to negative.
  - `/time of <clock> set <timemarker> (next|previous|stay)` - Sets the clock to the occurrence of the time marker. Cannot result in a negative time
  - `/time of <clock> pause` - Pauses the clock
  - `/time of <clock> resume` - Resumes the clock
  - `/time of <clock> query time` - Outputs the clock's current time

## Gameplay

- Custom dimension heights defined in a dimension JSON file can once again span the full -512 to 512 block range instead of being capped to the default Overworld heights of -64 to 320 ([MCPE-241528](https://bugs.mojang.com/browse/MCPE-241528))

- Added experimental support for defining point-of-interest types and hierarchical tags in behavior packs

- Added a beta Script API for querying and managing registered points in the current dimension

- Added `/locate poi` for locating registered points by type or tag
