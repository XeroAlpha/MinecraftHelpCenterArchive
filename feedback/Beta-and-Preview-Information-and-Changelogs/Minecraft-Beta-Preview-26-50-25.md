---
title: Minecraft Beta & Preview - 26.50.25
date: 2026-08-11T14:50:48Z
updated: 2026-08-11T15:45:43Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48053406322829-Minecraft-Beta-Preview-26-50-25
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  drop-3-2026: drop-3-2026-fixes-and-features
  h_01KZRMTBXHA1PGQCKVZ3956BFM: thepayload-innow-accepts-an-optionalfield-on-each-definition-specifying-an-xz-range-in-blocks-when-set-a-broadcast-play-sound-is-delivered-to-players-within-this-range-of-the-sound
---

**Posted:** 11 August 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Drop 3 2026  Fixes and Features

## Abandoned Camp

- Seagrass in Abandoned Camps are now always waterlogged ([MCPE-240331](https://bugs.mojang.com/browse/MCPE-240331))
- Removed duplicate entries of the Cushion in two campsite structures
- Barrels in the Abandoned Camp can now contain a White Cushion and Straw Bed
- Firework Rockets are replaced with Gunpowder in the Abandoned Camps loot tables
- Explorer maps found in abandoned camps no longer lead to camps in the same biome that they were looted from

## Cushion

- Cushion can now occupy the same space as Honey Blocks and Sniffer Eggs ([MCPE-240778](https://bugs.mojang.com/browse/MCPE-240778))
  - The Honey Block and Sniffer Egg Block no longer offer support on the sides
- Chains are no longer treated as full blocks, so Cushions can now be placed in the same space as a Chain ([MCPE-240466](https://bugs.mojang.com/browse/MCPE-240466))
  - Ladders, Vines and Twisting Vines can no longer be attached to Chains ([MCPE-147584](https://bugs.mojang.com/browse/MCPE-147584))
  - Lanterns and Bells can no longer be hung from the underside of horizontal Chains ([MCPE-232536](https://bugs.mojang.com/browse/MCPE-232536))
- Breaking particles from a Cushion are now spawned at the Cushion instead of in the block below it
- The hint shown while sitting on a Cushion now reads "Press SHIFT to get up", matching Java Edition ([MCPE-240477](https://bugs.mojang.com/browse/MCPE-240477))
- Cushions spawned without a color, such as with the `/summon` command, are now White instead of Black, matching Java Edition ([MCPE-240780](https://bugs.mojang.com/browse/MCPE-240780))
- The Cushion can no longer be destroyed by the player while in adventure mode ([MCPE-241279](https://bugs.mojang.com/browse/MCPE-241279))

## Explorer Maps

- Poplar Leaves now show the correct color on the Explorer Maps
- Changed naming on Explorer Maps Buried Ancient City, Buried Mineshaft, Desert Pyramid, Warm Ocean Ruins

## Straw Bed

- Straw Beds now breaks faster when using a Hoe

## Blocks

- Wool and Concrete Stairs, Slabs and Double Slabs no longer always drop themselves when destroyed by an explosion and the `tntExplosionDropDecay` game rule is enabled
- Concrete Stairs and Concrete Slabs can now be crafted in the Stonecutter in all 16 colors ([MCPE-241352](https://bugs.mojang.com/browse/MCPE-241352))
- Wool stairs and slabs no longer produce vibrations when their item is dropped on the ground, matching full wool blocks ([MCPE-240057](https://bugs.mojang.com/browse/MCPE-240057))
- Wool Stairs and Wool Slabs can now be broken faster with Shears, matching Wool blocks ([MCPE-240164](https://bugs.mojang.com/browse/MCPE-240164))

## Graphics

- Flowing water in the Dappled Forest biome is no longer opaque ([MCPE-240501](https://bugs.mojang.com/browse/MCPE-240501))

# Features and Bug Fixes

## Blocks

- Cherry, Pale Oak, and Poplar Saplings are no longer flammable, matching all other Saplings
- Fixed Saplings not growing when Leaves were above them ([MCPE-240014](https://bugs.mojang.com/browse/MCPE-240014))

## Gameplay

- Lava lakes no longer replace nearby beds or doors with stone during world generation if a lake generates in a village

## Graphical

- Fixed an issue that caused the sky to render incorrectly when seen through boats in Vibrant Visuals
- Changed the map color of the Red Shrub to Crimson Nylium
- Changed the map color of the Shelf Mushroom to Terracotta Yellow

## Items

- Fixed issues that occurred when attempting to pick up a Small Sulfur Cube or a lit TNT Sulfur Cube with a Bucket ([MCPE-239750](https://bugs.mojang.com/browse/MCPE-239750))
- The targeted Sulfur Cube and water or lava sources, Powder Snow, or water from waterlogged blocks at the world origin no longer disappear
- Using a Bucket from a stack larger than eight no longer creates additional Buckets

## Mobs

- Chains no longer prevent mobs from spawning in the space underneath them ([MCPE-190746](https://bugs.mojang.com/browse/MCPE-190746))
- Fixed issue where using a lava bucket on a cow produced a milk bucket.
- Husks and Zombies now retain their held and equipped items when transforming into Zombies and Drowned

## Sounds

- Red shrub now plays the correct sound
- Correct subtitle is shown when Straw Bed is used
- Cushion only produces "Cushion breaks" closed caption when broken
- Multiple jukeboxes can now play the same record independently
- Broadcast sounds such as jukebox records now play from the correct position for players who move into range or connect after the sound has started

## Stability and Performance

- Fixed a crash that could occur when flying over or through water bodies with entities nearby
- Reduced main thread work during world load by removing the redundant pre-caching of the world settings screen

## User Interface

- GUI Scale modifier on PlayStation will now be respected on title launch ([MCPE-89543](https://bugs.mojang.com/browse/MCPE-89543))
- Updated style of "Leave Boat" button in the "D-Pad & tap to interact" touch option ([MCPE-235723](https://bugs.mojang.com/browse/MCPE-235723))
- Achievement warnings are no longer displayed in Preview or Beta builds
- Realms Plus subscribers who open Marketplace Pass from the Marketplace sidebar now go straight to the View All Packs screen instead of the subscription page
- Improved inventory input mode switching between touch and mouse
- Prevent gamepad button swapping for emotes
- Fixed an issue where block items held on the cursor could render behind other block items, such as a Shelf Mushroom appearing behind a Snow Layer, in the inventory ([MCPE-240495](https://bugs.mojang.com/browse/MCPE-240495))
- Fixed double toast notification happening while importing an old world from PS4 preview to PS5 preview

# Technical Updates

## Editor

- Fixed a bug that caused the server to crash when regenerating chunks from the Chunk Management tool
- The Poplar Hanging Sign now has the correct name

## Actor Components

- Made the 'minecraft:barter' schema stricter when parsing and fail to load an entity json that has invalid data in versions 1.26.50 and newer.

## AI Components

- Made schema for the `minecraft:preferred_path` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.50 and newer.

## AI Goals

- Updated "minecraft:behavior.follow_mob" : whenever the goal stops or is removed through a component group change, the mob's navigation is always interrupted.

## API

- Fixed a bug where called the `Player.playSound` method could result in read-only errors when writing new properties to the player class afterwards.

### @minecraft/server-graphics

- Released version 1.0.0 of `@minecraft/server-graphics`, promoting the module and all of its APIs out of beta
- `@minecraft/server-graphics` version 1.0.0 requires version 2.3.0 or later of `@minecraft/server`

### Pack Settings

- Added a new `multiselect` pack setting type, letting pack authors declare a list of options
  - Molang can query for active options in the multiselect via `query.is_pack_setting_selected`
  - `world.getPackSettings()` now can return an array of strings for multiselect options in `@minecraft/server` beta
  - `PackSettingsChangeAfterEvent.settingValue` now can be an array of strings for multiselect options in `@minecraft/server` beta

## Block Components

- Fixed an issue where custom blocks and items without a display name component that use localization keys to chain translations displayed their text inconsistently depending on the presentation context. These blocks and items will now consistently display as raw text unless a display name component is used ([MCPE-236819](https://bugs.mojang.com/browse/MCPE-236819))
- Update Block JSON loader to support future optimization and out of game upgrade

### Leaves

- All vanilla leaves blocks now carry the `minecraft:leaves` tag
- Vanilla tree features match leaves through `"tags": "query.any_tag('minecraft:leaves')"` in `may_replace` instead of listing each leaves block by name, so a new leaves block no longer has to be added to every tree feature to be grown through

### minecraft:tags

- The `minecraft:is_shears_item_destructible` block tag now also grants the Shears breaking speed bonus, matching the behavior of the other `is_*_item_destructible` tags

## Blocks

- Released horizontal multi-blocks, these are blocks defined with the `minecraft:multi_block` trait with a `direction` field that is horizontal. Upcoming Creator Features experiment is still required for them if `format_version` is less than 1.26.50
- Chorus Plant
  - Chorus plant blocks now expose the `minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`, `minecraft:connection_up`, and `minecraft:connection_down` block states reflecting which adjacent chorus plants and chorus flowers they connect to
- Fire
  - Fire blocks now expose the `minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`, `minecraft:connection_up`, and `minecraft:connection_down` block states reflecting the flammable and supporting blocks around them

## Editor

- List view control actions can now declare a `submenu`, so the overflow menu renders nested menus and reports only the clicked leaf action

### Paste Preview

- Added a Move mode to the Paste Preview tool, which freezes the preview in place so it can be repositioned with a world gizmo or by typing exact coordinates

## Entity Components

- Entities with the following runtime_identifiers will be upgraded to automatically have this component:

- Vulnerability to freezing damage from Powder Snow is no longer hardcoded at runtime and is instead defined by the `minecraft:freezing_vulnerable` component

  - Entities with the following runtime_identifiers will be upgraded to automatically have this component:
    - "minecraft:blaze"
    - "minecraft:magma_cube"
    - "minecraft:strider" "minecraft:freezing_vulnerable": {}

## Gameplay

- The `minecraft:default_biome` component in dimension JSON is now optional and only supported on custom dimensions; using it on a vanilla dimension now produces a content error instead of being silently accepted
- Added the `minecraft:default_biome` component to custom dimension JSON, allowing creators to configure the biome a custom dimension generates with
- Added support for defining custom dimensions with JSON and configuring custom dimension heights

## JSON Schema

- The JSON document upgrader now differentiates base game JSON from creator JSON, so base game content may use the `minecraft:` namespace while creator content continues to be validated against creator namespace rules

## Packs

- System packs that fail to load their manifest file, or fail to execute their script plugin (if available), will now stop dedicated server

## Sounds

- Added `allow_concurrent_streaming` to sound objects in `sound_definitions.json`, allowing streamed ordinary sound events to play independent simultaneous instances. The field defaults to `true` in format version 1.26.50 and later

## Stability and Performance

- Minor improvements to allocator performance and out-of-memory handling

## User Interface

- Fixed an error when deeplinking from the subscribe now button from the Marketplace Pass site while client is closed

# Experimental Technical Updates

## API

- Scripting websockets no longer send a ping packet to the socket server every second, this now send every 45 seconds.

- # The `minecraft:server_sound_definitions` payload in `sounds/sound_definitions.json` now accepts an optional `broadcast_range` field on each definition specifying an XZ range in blocks. When set, a broadcast play sound is delivered to players within this range of the sound
