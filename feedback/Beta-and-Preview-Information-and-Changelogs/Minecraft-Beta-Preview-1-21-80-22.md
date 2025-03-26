---
title: Minecraft Beta & Preview - 1.21.80.22
date: 2025-03-26T11:40:12Z
updated: 2025-03-26T16:43:03Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/35325653515149-Minecraft-Beta-Preview-1-21-80-22
hash:
  editor-1: editor
  minecraftserver-200-beta: 200-beta
  added-new-container-apis: added-newapis
---

**Posted:** 26 March 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![r21u8_3_1080.jpg](https://feedback.minecraft.net/hc/article_attachments/35326083928205)

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).

Enjoy!

# Experimental Features

## Locator Bar

- Dots are now shown representing Players in Spectator Mode to other Players also in Spectator Mode on the Locator Bar

# Features and Bug Fixes

## Flat World Presets

- It's now possible to select a flat world preset in the Advanced Tab of the Create New World screen when flat world mode has been enabled.

  - You can now have more variety in your flat worlds with the following presets:
    - Classic Flat
    - Tunnelers' Dream
    - Water World
    - Overworld
    - Snowy Kingdom
    - Bottomless Pit
    - Desert
    - Redstone Ready
  - We want to develop the future of flat worlds together with you, the community, by hearing your ideas over at [the feedback site](https://aka.ms/mcflatworldfeedback)

  > **Developer's Note:** *This is the first batch of flat world presets we're adding. More changes are on the way, including the popular The Void preset.*

## Accessibility

- Fixed an issue where Text To Speech wasn't working on Android Fire Tablet devices

## Gameplay

- Fixed an issue where the player would momentarily lay under or beside a Bed when going to sleep

- Deepslate Redstone Ore once again lights up after interacting with it ([MCPE-191381](https://bugs.mojang.com/browse/MCPE-191381))

- Deepslate Redstone Ore no longer stays infinitely lit up after interacting with it ([MCPE-136864](https://bugs.mojang.com/browse/MCPE-136864))

- When respawning from death while gliding or swimming players will now have the correct collision ([MCPE-189554](https://bugs.mojang.com/browse/MCPE-189554))

## Mobs

- Mobs no longer have difficulty inflicting recurring hits when very close to non-moving players ([MCPE-190362](https://bugs.mojang.com/browse/MCPE-190362))

- Camels no longer spawn in spaces that are too small for them ([MCPE-190700](https://bugs.mojang.com/browse/MCPE-190700))

## Music

- Music and sounds will no longer play once the save and exit button is pressed ([MCPE-190632](https://bugs.mojang.com/browse/MCPE-190632))

## Realms

- Fixed a crash when clicking several times while trying to upload a world to an inactive Realm slot

## Sounds

- Fixed Wolf spawning sounds not using the appropriate sound variants ([MCPE-190576](https://bugs.mojang.com/browse/MCPE-190576))

## Stability and Performance

- Fixed an issue that caused a crash while generating chunks

## User Interface

- Fixed an issue which prevented the escape keyboard shortcut from working in certain scenarios on the death screen

- Bundle slot selection using gamepad right stick no longer skips slots when playing in splitscreen

- Stacks are now correctly splitting across slots when moving cursor and holding the left mouse button to split a stack evenly across slots

- Updated the friends drawer status to tell if a friend is playing in the same world as you

# Technical Updates

## Block Components

- Removed UpcomingCreatorFeatures experiment requirement for field `"isotropic"` in `"minecraft:material_instances"` component

## Blocks

- From 1.21.80 onward, when using a minecraft:geometry component or minecraft:material_instances component, you must include both

## Commands

- Released `/place structure` and `/place jigsaw` out of the `Data-Driven Jigsaw Structures` experiment

## Components

- Added validation for block asset references in components

  - Content errors will log missing block references for the following components:
    - item component "minecraft:digger"
    - item component "minecraft:entity_placer"
    - item component "minecraft:block_placer"
    - spawn rules component "minecraft:spawns_on_block_filter"
    - spawn rules component "minecraft:spawns_on_block_prevented_filter"
    - spawn rules component "minecraft:spawns_above_block_filter"

- "can_be_stolen" has been moved from "presets" back to being a direct sub-field of the "minecraft:leashable" component

## Documentation

- Include biome and client_biome JSON files in generated documentation

## Editor

- Added "Magic Select" to selection modes. This mode allows users to quickly select non-air blocks at and above a selected block. This is extremely useful when working with structures. The current implementation is prototype and only has an 8-block search radius, upwards from the point of click. Holding SHIFT while clicking will make the selection additive to any existing selections

- Added a missing string when there is an empty slot in the Realms Slot dropdown

- Fixed Publish to Realms bug by cleaning up local world copy that's created during publish process

- Fixed a bug where passing a complex volume with non-contiguous voxels was copying only the contents of the bounding rectangle to the clipboard. Only the specified voxels should have been copied. This now allows us to create structures where air and structure voids are stripped out

- The Structure Panel now has the ability to create a new Structure from an existing selection

- The Structure Panel now allows the editing of the origin field

## Goals

- Added fields to "minecraft:behavior.tempt" goal

  - The "stop_distance" field specifies a custom distance for when the tempted mob should stop moving towards the player
  - The "on_start" field specifies the event to trigger when the goal starts
  - The "on_end" field specifies the event to trigger when the goal ends

- Added "minecraft:behavior.float_tempt" goal, which allows a tempted mob to move in a line towards the player

  - This goal is a variant of the "minecraft:behavior.tempt" goal and shares the same fields
  - Requires the mob to be in a floating state (e.g. use the "minecraft:navigation.float" component)

## Structures

- Exposed new fields to data driven jigsaw structures: start_height, dimensional_padding, pool_aliases, max_distance_from_center
- made height_map_projection optional and changed anchor to start_jigsaw_name

## User Interface

- Fixed a bug where worlds set to Creative would be created with cheats turned on

# Experimental Technical Updates

## API

### `@minecraft/server` 2.0.0-beta

- `EntitySkinIdComponent` has been changed to read-only in version 2.0 beta

- Added property `localizationKey` to `Entity`, `Block`, and `ItemStack` which returns the key used for finding the localized names of these objects

#### Added new `Container` APIs:

- `contains(ItemStack)`: Attempts to find an instance of an item inside the container
- `firstEmptySlot()`: Finds the index of the first empty slot inside the container
- `firstItem()`: Finds the index of the first item inside the container
- `find(ItemStack)`: Find the index of the first instance of an item inside the container
- `reverseFind(ItemStack)`: Find the index of the last instance of an item inside the container

#### Custom Commands

Added support for custom commands authored in script. The new `CustomCommandRegistry` is provided when listening to `ModuleStartupEvent`. More APIs in the area will come in the coming weeks.

Additional types added:

- `CustomCommandRegistry`
- `CustomCommandPermissionLevel`
- `CustomCommandParamType`
- `CustomCommandResult` and `CustomCommandStatus`
- `CustomCommandParameter`

## Graphical

- Fixed an issue with Android GPU identification causing Deferred Technical Preview to be disabled on certain supported devices.

- Disabled split screen for the Deferred Technical Preview. Deferred/Ray Tracing modes are not available in the video menu during split screen sessions, and starting a split screen session while in one of these modes will force the game back to Fancy mode.
