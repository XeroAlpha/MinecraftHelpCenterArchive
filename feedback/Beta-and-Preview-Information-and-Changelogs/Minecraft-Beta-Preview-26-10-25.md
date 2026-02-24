---
title: Minecraft Beta & Preview - 26.10.25
date: 2026-02-24T14:55:26Z
updated: 2026-02-24T16:39:06Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43775430834701-Minecraft-Beta-Preview-26-10-25
hash:
  h_01KEVVCRJYJ96D2TDS3PPZKW57: information-on-minecraft-preview-and-beta
---

**Posted:** 24 February 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- This update will be rolling out to the various platforms as they become available, so please allow time for the update to reach you.

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes

## Drop 1 2026

### Mobs

- Reduced the head size of the following baby mob models:

  - Zombie
  - Husk
  - Drowned

## Character Creator

- Fixed an issue that could cause invalid classic skins to be shown as blank skins

## Accessibility Features

- Updated the name of Describe to Identify Block, a feature that lets you know through text and text-to-speech (TTS) what block or mob you have in front of you
  - Share your feedback on this feature [here](https://aka.ms/mcbedrockidblockfeedback)

## Blocks

- Corner stairs next to a stair block of a different type will no longer leak water for worlds of base game version `26.10` or higher ([MCPE-104070)](https://bugs.mojang.com/browse/MCPE-104070))

- Andesite, Diorite, and Granite can no longer be crafted into Cobblestone blocks in the Stonecutter ([MCPE-236401](https://bugs.mojang.com/browse/MCPE-236401 "https://bugs.mojang.com/browse/mcpe-236401"))

## Marketplace

- Fixed the inability to download RealismCraft 2.X add-on from "Create from..." menu with active Marketplace Pass subscription ([MCPE-232505](https://bugs.mojang.com/browse/MCPE-232505))

## Gameplay

- Fixed a bug where the Trial Spawner in some cases spawned too many mobs ([MCPE-186092](https://bugs.mojang.com/browse/MCPE-186092))

- Camera splines and attach entity APIs are now out of experimental

## Graphical

- Glow Squid babies now emit light like their adult version while using Simple and Fancy graphical settings ([MCPE-235469](https://bugs.mojang.com/browse/MCPE-235469))

- Armor trims are now visible again when worn by players or adult mobs ([MCPE-236105](https://bugs.mojang.com/browse/MCPE-236105))

- Added static/colorized block light shading to particles in Vibrant Visuals

- Fixed an issue where some players on PS5 had vertical sync disabled, causing image tearing

## Items

- Name Tags can no longer be bought from Librarians
- Name Tags are added as an Ordinary Trade to Wandering Traders at 1 for 1 Emerald, with a 7% probability and 5 Name Tags in stock
- Name Tags can no longer be obtained from chests in Ancient Cities or Woodland Mansions

## Mobs

- Fixed a hole in the Snifflet texture

- Copper Golem now properly picks up Spears, Tridents, and Crossbows

- Rabbits will now flee in the correct direction when hit while airborne

- Baby Camels walk animation now gets sped up when it runs after being hit

- Baby Piglin, Zombified Piglin, Zombie Villager, Zombie, Drowned, and Husk no longer sit too low in Boat/Raft/Minecart or when riding other mobs

- Zombie Villagers and baby Zombie Villagers no longer have incorrect textures on biome variants

- Baby Drowneds no longer get offset weirdly when swimming

- Baby Panda is no longer floating above ground when scared

- Baby Donkey and baby Mule's geometry have been adjusted so that the Hooves are visible again

- Baby Villagers that become zombiefied no longer have incorrect biome variant textures

- Rabbits will no longer jump past each other when breeding

- Updated the Lead position when leashed to an adult Rabbit

- Improved the Happy Ghast Harness Lead positions for Baby Mobs that have new geometry

- Dyed Leather Armor for Humanoid Babies now shows the correct colors in the undyed areas ([MCPE-236101](https://bugs.mojang.com/browse/MCPE-236101 "https://bugs.mojang.com/browse/mcpe-236101"))

- Baby Squid and baby Glow Squid now age like they do on Java ([MCPE-235739](https://bugs.mojang.com/browse/MCPE-235739))

## Realms

- Fixed broken modals shown when client attempts to play on a Realm

- Added Realm purchase success modal, shown when purchase is successful but fetching the Realm fails

## User Interface

- Unified inventory search in both Creative and Survival gamemodes

- General improvements and bug fixes related to closed captions ([MCPE-233144](https://bugs.mojang.com/browse/MCPE-233144)) ([MCPE-233144](https://bugs.mojang.com/browse/MCPE-233144)) ([MCPE-233116](https://bugs.mojang.com/browse/MCPE-233116))

- Navigation tabs for the new Service-driven Inventory Screen

- Some sign-in errors have new codenames to avoid overlap with codenames for networking errors, sign-in error codenames are no longer localized

- Improvements to closed captions UI ([MCPE-234709](https://bugs.mojang.com/browse/MCPE-234709))

- Fixed scaling values on certain devices ([MCPE-234792](https://bugs.mojang.com/browse/MCPE-234792))

# Technical Updates

## AI Goals

- The `minecraft:behavior.panic` goal has been made more robust in how it calculates an entity's desired path

## API

- Moved interface `TickingAreaOptions` from beta to `V2.6.0`

- Moved class `TickingAreaManager` from beta to `V2.6.0`

- Moved interface `TickingArea` from beta to `V2.6.0`

- Moved error `TickingAreaError` from beta to `V2.6.0`

- Moved enum `TickingAreaErrorReason` from beta to `V2.6.0`

- Camera

  - Released `playAnimation` method from `beta` to `v2.6.0`

  - Released `attachToEntity` method from `beta` to `v2.6.0`

  - Released `EntityAttachPoint` from `beta` to `v2.6.0`

  - Released `CatmullRomSpline` from `beta` to `v2.6.0`

  - Released `LinearSpline` from `beta` to `v2.6.0`

  - Released `AnimationOptions` from `beta` to `v2.6.0`

  - Released `CameraAttachOptions` from `beta` to `v2.6.0`

  - Released `ProgressKeyFrame` from `beta` to `v2.6.0`

  - Released `RotationKeyFrame` from `beta` to `v2.6.0`

  - Released `SplineAnimation` from `beta` to `v2.6.0`

- World

  - Moved property `readonly tickingAreaManager: TickingAreaManager` from beta to `V2.6.0`

## Blocks

- Fixed `placement_filter` and `block_placer` components to support placing on liquid blocks when used with `liquid_clipped`

- Added some Json constraints for blocks with trait `minecraft:multi_block`

  - Component `"minecraft:movable"` must be defined and cannot be defined in permutations. Valid values for `"movement_type"` are `"popped"` or `"immovable"`

  - Component `"minecraft:placement_filter"` cannot be defined in permutations

## Editor

- Updated the Editor Landing Page, this will gradually roll out over the next few weeks

- Fixed a bug that prevented graphs from rendering inside the Vibrant Visuals pane

- Fixed a bug where the Brush dropdown should be hidden in Elevation mode for Terrain tool. AB#1514760

- Fixed a bug where clearing the name of a stored location in the Navigation panel caused it to alternate between "Location" and "Location {1}" on each edit

- Fixed a bug that caused sliders with invalid ranges to show an error, instead they will get disabled now

- Fixed a bug where the selection volume would not be updated in Marquee mode after deselecting items in the Block Manifest Table. AB#1514667

- Jigsaw Editor Collection dropdown no longer automatically opens the New Collection dialog when the tool is first opened

- Canceling the New Collection dialog now correctly reverts the dropdown to no selection

- Add Pool, Export, and Delete buttons are now hidden when no collection is selected

- Collection tree is now hidden when no collection is selected

- Added confirmation dialog when deleting a Jigsaw Collection

- Added validation to prevent generating a Jigsaw when all elements in the starting pool are empty

- Fixed tool names to make them align with existing patterns

- Updating Primitive tool localization for block filter mode and placement progress dialog strings

- Fixed an issue where the Texel Size slider in Vibrant Visuals Shadow settings displayed decimal values instead of integers

- Fixed a bug where the "Spawn at Current Location" checkbox in Test World settings was always treated as enabled, causing the player to always spawn at the Editor camera's location regardless of the checkbox state

- Fixed an issue where switching to the Extrude Tool would remove any active selection volumes

- Fixed Farm Generator's preview displaying one block lower than the actual farm placement position

- Cinematic Tool now supports undo/redo for control point position and rotation changes via the Editor's transaction system

- Added speed dots to the Cinematic Tool to visualize camera travel speed along the spline path

- Cinematic Tool now hides control points, spline, and speed dots during cinematic preview playback

- Cinematic Tool Import JSON button now opens a modal dialog for pasting exported cinematic data

- Cinematic Tool now uses Redistribute Evenly to properly distribute control point times across the total duration

- Cinematic Tool Export JSON button now copies cinematic data to the clipboard for sharing between sessions

- Fixed 'Update' and 'Move to' Camera Point referring to different y levels in the Cinematic Tool

## Entity Components

- Split the `minecraft:pushable` component into two new components:

  - `minecraft:pushable_by_block` is the equivalent of setting `"is_pushable_by_piston": true`
    - If `minecraft:pushable_by_block` exists on the entity then Pistons and Shulker Boxes can attempt to push it
    - Removing `minecraft:pushable_by_block` is the equivalent of setting `"is_pushable_by_piston": false`
  - `minecraft:pushable_by_entity` is the equivalent of setting setting `"is_pushable": true`
    - If `minecraft:pushable_by_entity` exists on the entity then other entities can attempt to push it
    - Removing `minecraft:pushable_by_entity` is the equivalent of setting `"is_pushable": false`
  - The component `minecraft:pushable` will no longer be parsed

## Graphical

- Static/Colorized block lighting in Vibrant Visuals is no longer restricted to Preview builds

  - Known issue around empty chunks not propagating colors will be fixed in a future update

## Mobs

- Fixed Baby Zombie Villager plains texture; missing pixel in the robe 
- Fixed baby Hoglin and Zoglin left ear texture so it is properly mirrored 
- Updated the Rabbit texture for the following variants:
  - Brown Rabbit
  - Gold Rabbit
  - Salt Rabbit

# Experimental Technical Updates

## API

- TickingAreaManager

  - Changed `createTickingArea()` to return `Promise<void>` instead of `Promise<TickingArea>` in beta

- Added `locatorBar` property to beta - Manages the collection of waypoints displayed on this player's locator bar

- Added `Waypoint` class to beta - Base class for waypoints displayed on the player's locator bar

- Added `EntityWaypoint` class to beta - Waypoint that tracks an entity's position

- Added `PlayerWaypoint` class to beta - Waypoint that tracks a player's position with player-specific visibility rules

- Added `LocationWaypoint` class to beta - Waypoint that points to a fixed location in the world

- Added `WaypointTexture` enum to beta - Enum representing different texture icons for waypoints

- Added `WaypointTextureBounds` interface to beta - Defines a texture and distance range for waypoint display

- Added `WaypointTextureSelector` interface to beta - Defines how waypoint textures change based on distance

- Added `EntityVisibilityRules` interface to beta - Controls waypoint visibility based on entity state

- Added `PlayerVisibilityRules` interface to beta - Controls waypoint visibility based on player-specific states

- Added `LocatorBar` class to beta - Manages the collection of waypoints displayed on a player's locator bar

- Added `LocatorBarError` error class to beta - Error thrown when a locator bar operation fails

- Added `LocatorBarErrorReason` enum to beta - Enum representing reasons why locator bar operations fail

- Added `InvalidWaypointError` error class to beta - Error thrown when attempting operations on an invalid waypoint

- Added `InvalidWaypointTextureSelectorError` error class to beta - Error thrown when using WaypointTextureSelector size over limit

## Blocks

- Added `minecraft:chest_obstruction` component under the Upcoming Creator Features toggle

- It defines how a block placed above a chest or ender_chest should obstruct their opening

  - "obstruction_rule" (Optional): Specifies how the block is evaluated during chest opening if placed above; "shape" is the default when not specified.
    - "always": Will always obstruct a chest from opening.
    - "never" : Will never obstruct a chest from opening.
    - "shape" : Will use the Blocks AABB shape to determine if the chest is obstructed from opening.
  - Blocks prior to 26.10 will behave as expected based on their defined geometry and materail instances
  - Example:

``` auto
   "format_version": "26.10",
    "minecraft:block": {
        "description": {
            "identifier": "test:test_block"
        },
        "components": {
            "minecraft:chest_obstruction": {
                "obstruction_rule": "always"
            }
        }
    }
```

- Update on the block parsing experiment: We have collected data and are evaluating the results
  - The breaking API changes mentioned in the previous changelog related to this experiment are no long applicable for the rest of U1 previews and release, thank you for your participation!

### Voxel Shapes

- Fixed rare crash on PS5 native due to inconsistency of packet ordering

- Fixed content warnings for unit cube and empty shapes that appear when joining a voxel shape enabled world as a client
