---
title: Minecraft Beta & Preview - 26.10.24
date: 2026-02-17T16:49:03Z
updated: 2026-02-17T16:50:43Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43587352441741-Minecraft-Beta-Preview-26-10-24
hash:
  h_01KEVVCRJYJ96D2TDS3PPZKW57: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-drop-1-2026: drop-1-2026
  user-content-baby-mobs: baby-mobs
  user-content-golden-dandelion: golden-dandelion
  user-content-blocks: blocks
  user-content-input: input
  user-content-items: items
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-server-tab: server-tab
  user-content-sounds: sounds
  user-content-stability-and-performance: stability-and-performance
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  user-content-client-entities: client-entities
  user-content-commands: commands
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-entity-filters: entity-filters
  user-content-general: general
  user-content-graphical: graphical
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01KHP7JP7YX56SSFAZ5K37ARBW: api-1
  user-content-server-ui-ddui: server-ui-ddui
  h_01KHP7JP7YD78K31H8RG0FVTFQ: blocks-1
  user-content-voxel-shapes: voxel-shapes
  h_01KHP7JP7YNMNWMFZ1VR1433PE: realms-1
---

**Posted:** 17 February 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- This update will be rolling out to the various platforms as they become available, so please allow time for the update to reach you.\
   

![lxfjcrlcxjawfdezdf.jpeg](https://feedback.minecraft.net/hc/article_attachments/43587342260877)\
 

Get ready to try out the final features from our first game drop of the year as the last babies waddle their way into testing! Some are sweet, some are spicy, and all five are ready for new shenanigans in the Overworld and beyond. Discover the striped baby hoglin and zoglin, the chunkier snifflet, and our fluffiest baby panda. And let’s not forget the grumpiest of them all – our baby strider! As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/) , and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/) .

# Features and Bug Fixes[](https://feedback.minecraft.net/hc/en-us/articles/features-and-bug-fixes)

## Drop 1 2026[](https://feedback.minecraft.net/hc/en-us/articles/drop-1-2026)

### Baby Mobs[](https://feedback.minecraft.net/hc/en-us/articles/baby-mobs)

- Updated the textures and models of the following baby mobs:
  - Panda
  - Strider
  - Hoglin
  - Sniffer
  - Zoglin

### Golden Dandelion[](https://feedback.minecraft.net/hc/en-us/articles/golden-dandelion)

- Golden Dandelion now displays green particles when used on a Baby Mob
  - Particles moving downwards indicate that aging is paused
  - Particles moving upwards indicate that age has been reset and is now resumed
- Golden Dandelion now plays pause growth and reset growth sounds on use

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Stone and Deepslate can now be crafted into their Cobbled variants in the Stonecutter
- Dead bush can be placed on farmland

## Input[](https://feedback.minecraft.net/hc/en-us/articles/input)

- Fixed a bug on Windows where the system setting "Scrolling direction" had no effect\
  ([MCPE-232634](https://bugs.mojang.com/browse/MCPE-232634))

## Items[](https://feedback.minecraft.net/hc/en-us/articles/items)

- Clocks, Compasses, and Recovery Compasses no longer have a corrupted appearance after turning high resolution texture packs on/off ([MCPE-173775](https://bugs.mojang.com/browse/MCPE-173775))
- Fixed player inventory sometimes not being updated properly when picking up items already held in off-hand ([MCPE-235655](https://bugs.mojang.com/browse/MCPE-235655))

## Mobs[](https://feedback.minecraft.net/hc/en-us/articles/mobs)

- Spawning baby Cat and Wolf using spawn egg on another Cat/Wolf no longer makes them untameable ([MCPE-234672](https://bugs.mojang.com/browse/MCPE-234672))
- Baby Wolves and baby Cats no longer spawn with grey collar when spawned using a spawn egg on another mob ([MCPE-234763](https://bugs.mojang.com/browse/MCPE-234763))
- Wolves and baby Wolves now become aggressive when a player attacks a baby Wolf nearby
- Player is no longer able to breed an untamed Wolf with a tamed Wolf
- Baby Wolves now attack Sheep
- Baby Mule and baby Donkey's models have been centered so that their collision boxes are no longer misaligned
- Baby Zombie Horse can now be leashed
- Baby Skeleton Horses spawned using the `minecraft:entity_born` spawn event can no longer be ridden by players
- Baby Horses, baby Zombie Horses, and Baby Skeleton Horses now have slightly larger collision boxes
- The baby Armadillo now has the correct head placement
- The baby Armadillo now plays the correct animation when unrolling
- Items carried by foxes is now correctly displayed being held in their mouth
- Baby Llama's model has been updated to no longer exhibit visual glitches on its legs
- Fixed tame baby British shorthair cat variant texture
- Baby Villagers' hitboxes are now aligned properly
- Baby Zombies, Husks, Piglins, Zombified Piglins, and Drowned no longer have weirdly offsetted torsos when riding vehicles or other mobs
- Baby Wolves now growl when angry
- Adult humanoid enemy mobs now hold offhand items in the correct location again
- Baby Villagers now sleep in the center of Beds again
- Improved the Lead position for leashed Baby Mobs that have new geometry
- Added MERS textures for tamed baby cats
- Baby Polar Bears are now the correct size
- Baby Turtle's hitbox is adjusted to match its model size
- Fixed a case where baby mobs would be incorrectly scaled when using classic texture packs
- Fixed a regression where Striders and (once again) Piglins over enthusiastically scream
- Lowered the arms of Baby Zombies and Baby Drowned to prevent clipping between their held items and their heads
- Separated the Baby Wolf animations from the adult Wolf animations
- Fixed an issue where the baby Armadillo would not peek out while rolled up

## Realms[](https://feedback.minecraft.net/hc/en-us/articles/realms)

- The 'world_replica_based_backup' flag and the old Realms backup system have been removed, and now the new backups system, Realms Saves, is enabled at all times

## Server Tab[](https://feedback.minecraft.net/hc/en-us/articles/server-tab)

- Updated Servers Tab to display custom servers even if Minecraft provided servers were not found

## Sounds[](https://feedback.minecraft.net/hc/en-us/articles/sounds)

- Pig, Cat, Cow and Chicken now have adult sound variants

## Stability and Performance[](https://feedback.minecraft.net/hc/en-us/articles/stability-and-performance)

- Fixed slow server when loading into a world with too many blocks scheduled for ticking ([MCPE-224638](https://bugs.mojang.com/browse/MCPE-224638))
- Fixed game freezes and large save files when spending time near Lava flow in the Nether ([MCPE-224638](https://bugs.mojang.com/browse/MCPE-224638))

## User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Fixed narration for elements outside a scroller
- Fixed characters rotating incorrectly in UI when riding a mob
- Fixed an issue that prevented some Ore UI Keyboard & Mouse settings from being saved when modified while in-game. ([MCPE-235690](https://bugs.mojang.com/browse/MCPE-235690))
- Add experimental toggle to enable the new Furnace Recipe Book
- The "How to play" section has been moved from Settings to the Pause screen
- Made it possible to move the caret position within signs using a mouse or touch ([MCPE-174365](https://bugs.mojang.com/browse/MCPE-174365))

# Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/technical-updates)

## AI Goals[](https://feedback.minecraft.net/hc/en-us/articles/ai-goals)

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 26.10 and newer
  - `minecraft:behavior.move_to_land`
  - `minecraft:behavior.move_to_water`
  - `minecraft:behavior.ocelot_sit_on_block`
  - `minecraft:behavior.raid_garden`
  - `minecraft:behavior.stomp_turtle_egg`
- Made the schema for `minecraft:behavior.offer_flower` stricter when parsing, now will fail to load an entity json that has invalid data in versions 26.10 and newer
- Made the schema for `minecraft:behavior.play_dead` stricter when parsing, now will fail to load an entity json that has invalid data in versions 26.10 and newer. Int Range field `random_damage_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made the schema for `minecraft:behavior.play` stricter when parsing, now will fail to load an entity json that has invalid data in versions 26.10 and newer

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- Released `AimAssistCategory` from `beta` to `v2.6.0`
- Released `AimAssistCategorySettings` from `beta` to `v2.6.0`
- Released `AimAssistPreset` from `beta` to `v2.6.0`
- Released `AimAssistPresetSettings` from `beta` to `v2.6.0`
- Released `AimAssistRegistry` from `beta` to `v2.6.0`
- Released `PlayerAimAssist` from `beta` to `v2.6.0`
- Released `PlayerAimAssistSettings` from `beta` to `v2.6.0`
- Released `AimAssistTargetMode` from `beta` to `v2.6.0`
- Released `World.getAimAssist` from `beta` to `v2.6.0`
- Released `Player.getAimAssist` from `beta` to `v2.6.0`
- Released BlockComponentEntityEvent from beta to `v2.6.0`
- Added `Block.getParts` method behind `beta`. Returns an array of Block parts if the block has the **minecraft:multi_block** trait
- Fixed localization string for `tile.sticky_piston_arm_collision.name` to `Sticky Piston Arm Collision`

## Client Entities[](https://feedback.minecraft.net/hc/en-us/articles/client-entities)

- Added "held_item_scale" field to entity.json schema
  - Allows items held by mobs to be scaled by a factor greater than zero
  - Defaults to 1.0

## Commands[](https://feedback.minecraft.net/hc/en-us/articles/commands)

- Fixed `/setblock` and `/fill` commands from placing partial double blocks, like the upper part of a door Block

## Components[](https://feedback.minecraft.net/hc/en-us/articles/components)

- Blocks with `minecraft:liquid_detection` component containing an empty array will now fail to load and produce a content error. ([MCPE-235481](https://bugs.mojang.com/browse/MCPE-235481))

## Editor[](https://feedback.minecraft.net/hc/en-us/articles/editor)

- Fixed a bug where Brush Settings were displayed incorrectly across all Terrain Modes
- Added "New Collection..." option to the Jigsaw Editor Collection dropdown, allowing users to create a new collection directly from the dropdown
- Added Tag Container control as Property Pane API
- Added icon property to the Property Pane API for root panes and sub panes, enabling icon display in pane headers
- Added structure block support for multi blocks
- Added editor brush/pencil erasing support for multi blocks
- Repeater tool now dynamically limits repetition count based on selection size and spacing to prevent offset errors
- Re-enabled 3-point selection and re-added 2-point selection toggle (off by default)
- Fixed click-drag-release issue where it doesn't finalize the 2nd point in the 3-point selection
- Fixed visual inconsistencies for expanders
- Fixed a bug to allow opening .mcproject files now correctly launches the game in Editor mode
- Removed block masks and filters pane in Elevation terrain mode

## Entity Components[](https://feedback.minecraft.net/hc/en-us/articles/entity-components)

- A content warning will now throw if the amount of experience orbs requested to be spawned in a single tick exceeds the recommended max of 512
  - It is possible that performance will degrade when a large number of experience orbs are spawned at once

## Entity Filters[](https://feedback.minecraft.net/hc/en-us/articles/entity-filters)

- Added the "is_tamed" entity filter, telling if the subject entity is tamed ([MCPE-234672](https://bugs.mojang.com/browse/MCPE-234672))

## General[](https://feedback.minecraft.net/hc/en-us/articles/general)

- Upgraded actor JSON resources to Cereal slice 26.0 and re-serialized to align with the updated schema

## Graphical[](https://feedback.minecraft.net/hc/en-us/articles/graphical)

- Vibrant visuals now correctly support grayscale crushed images in texture sets
- Fixed sky light calculations being applied multiple times per chunk, causing excessive memory usage

# Experimental Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/experimental-technical-updates)

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- Game Test
  - When running `/gametest run <test>` on a game tests with an invalid structure, the game test is no longer spawned at the world ceiling.
- Added `dedicatedServer` optional global to `beta` of `server-admin` for accessing dedicated server only APIs
- Added `DedicatedServerUtils` to `beta` of `server-admin` with dedicated server only APIs
- Added `LevelStorage` to `beta` of `server-admin` with dedicated server save state management APIs
- Added `LevelStorageQuerySnapshotFile` to `beta` of `server-admin`
- Added `AllowList` to `beta` of `server-admin` with dedicated server allow list management APIs
- Added `function Entity.addItem` for directly giving items to a mob or player

### Server-UI DDUI[](https://feedback.minecraft.net/hc/en-us/articles/server-ui-ddui)

- Changed Class `CustomForm`
  - Changed return of method `show(): Promise<void>` to `Promise<boolean>` where returning true means it was shown and false means it was not shown.
  - Added `isShowing(): boolean` method.
- Changed Class `MessageBox`
  - Added `isShowing(): boolean` method.
- Changed interface `MessageBoxResult`.
  - Added property `wasShown` which is set to true if the message box was shown to the player.

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

### Voxel Shapes[](https://feedback.minecraft.net/hc/en-us/articles/voxel-shapes)

- Fixed voxel shape loading to properly validate custom shape files ([MCPE-235789](https://bugs.mojang.com/browse/MCPE-235789))
  - Individual boxes must now be within the allowed bounds of (-14, -14, -14) to (30, 30, 30) pixels
  - At least one box must overlap the base block (0-16 pixels on all axes)
  - Total shape extent cannot exceed 30 pixels (1 block + 14 pixels) on any axis

## Realms[](https://feedback.minecraft.net/hc/en-us/articles/realms)

- Enable Realms purchase reconciliation on Switch
