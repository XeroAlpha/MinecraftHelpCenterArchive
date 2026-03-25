---
title: Minecraft Beta & Preview - 26.20.22
date: 2026-03-25T11:50:17Z
updated: 2026-03-25T15:25:24Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44573082558349-Minecraft-Beta-Preview-26-20-22
hash:
  h_01KJWVNWWSJJ5RPG1AV39PK5W6: information-on-minecraft-preview-and-beta
---

**Posted:** 25 March 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes

## Accessibility Features

- Damage tilt slider now affects rotation of player's hands ([MCPE-229437](https://bugs.mojang.com/browse/MCPE-229437))

## Accounts

- Fixed issue where large values for player profile stats are incorrectly displayed ([MCPE-185186](https://bugs.mojang.com/browse/MCPE-185186))

## General

- Fixed most cases where offline multiplayer would load infinitely ([MCPE-173418](https://bugs.mojang.com/browse/MCPE-173418))
- Fall damage audio effects now trigger when the entity hits the ground

## Graphical

- Fixed an issue that caused mushrooms on the back of mooshrooms to have incorrect illumination . ([MCPE-225482](https://bugs.mojang.com/browse/MCPE-225482))
- Fixed an issue that prevented per-biome directional light orbital offset provided by resource packs from being applied in Vibrant Visuals. Such offset can be provided through the field "orbital_offset_degrees" in lighting configuration files.

## Graphics

- Adding vibrant visual support for the following:

  - Shelf blocks
  - Nautilus Armors
  - Happy Ghast Ropes
  - Music Disc: Lava Chicken
  - Music Disc: Tears

- Updated MERS texture for Baby Lazy Panda ([MCPE-236812](https://bugs.mojang.com/browse/MCPE-236812))

## Items

- Golden Dandelion growth particles now emit from above Baby Mobs instead of from inside them

## Marketplace

- Fixed an issue where free trials were incorrectly being advertised for Marketplace Pass and Realms Plus on Nintendo Switch and Nintendo Switch 2 platforms

## Mobs

- Baby Camel hitbox size increased to match model geometry ([MCPE-236077](https://bugs.mojang.com/browse/MCPE-236077))
- The baby humanoid Chestplate Armor is now centered on the mob
- Baby Hoglin hitbox size increased to match model geometry
- Baby Zoglin hitbox size increased to match model geometry
- Adjusted the hitboxes for the following mobs, to better match Java:
  - Baby Villager
  - Baby Zombie Villager
  - Baby Zombie
  - Gurgle
  - Baby Husk
  - Baby Piglin
  - Baby Zombie Piglin
  - Baby Squid
  - Baby Glow Squid
  - Baby Fox
  - Adult Chicken

## Party System

- The Party System has been upgraded! It now features text chat with your party members that you can access through the Social Drawer. Party Text Chat is separate from in-game world chat and travels with you from world to world. You can also travel with your party into Realms and supported featured servers.
  - Please give us your feedback at [aka.ms/MinecraftPartyFeedback](https://aka.ms/MinecraftPartyFeedback)
  - The Party System is now on Xbox, Windows, iOS, and Android! It will be coming to more device platforms over time
  - Party members will only follow the party leader into a Realm if they are already a member of that Realm

## Realms

- Introducing Realms Admin role. Owners can grant more authority to members. Find it in the new Realm Hub.
- Added Realms Hub, bringing together world management, member activity, settings and more, in one unified place. Some screens are still JSON as there's an ongoing migration of UI screens to OreUI in this area.
  - Send us your feedback on this change at [aka.ms/realmsfeedback](https://aka.ms/realmsfeedback)
- Migrated pack management in the Realm edit world screen to OreUI.
- Support added to join Realms with a Party.
- Fixed issue where player can be softlocked trying to join a realm they're not a member of.

## Stability and Performance

- Fixed realms region bindings crash when indexing out of bounds region data
- Fixed a crash that can occur when prompted about extra Joy-Con controllers that are connected

## User Interface

- We have added multiple new settings for closed captions which allow players to control how long they are displayed, the location they appear in, and toggle if certain sounds should be hidden (the players own sounds, ambient noises, etc.) ([MCPE-236782](https://bugs.mojang.com/browse/MCPE-236782))
- Fixed incorrect UI scales when changing resolution

## World Generation

- It is now possible to generate single biome Dripstone Cave worlds

# Technical Updates

## AI Goals

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - `minecraft:behavior.hover`
  - `minecraft:behavior.lay_down`
  - `minecraft:behavior.mount_pathing`
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - `minecraft:behavior.move_through_village`
  - `minecraft:behavior.move_to_random_block`
  - `minecraft:behavior.move_towards_target`
- Added "on_pickup_item_start" and "on_pickup_item_end" to "minecraft:behavior.pickup_items"

## API

- Added `Observable.toJSON` to `@minecraft/server` beta so that observables can be easily be stringified with `JSON.stringify`.
- Added the pack name to Error content log lines.
- Added `locale` property to `ClientSystemInfo` that provides the player's selected language (e.g., en_US, fr_FR, ja_JP)

### DDUI

- Added `DataDrivenScreenClosedReason` to `@minecraft/server-ui` beta.
- Replaced `MessageBoxResult.wasShown` with `MessageBoxResult.closeReason` which is a `DataDrivenScreenClosedReason`.
- Changed return type of `CustomForm.show(): Promise<boolean>` to `Promise<DataDrivenScreenClosedReason>`.
- Added `FormCloseError`, `PlayerLeftError`, `ServerShutdownError` to `@minecraft/server-ui` beta for use with `CustomForm` and `MessageBox`.

## Audio

- Fixed an issue where content packs that override entity sound events without defining variants could incorrectly clear the variant key from the base sounds.json, causing content warnings during loading.

## Blocks

- Custom blocks will no longer have darker shade when occluded by a small set of vanilla blocks like the minecraft:kelp. ([MCPE-236304](https://bugs.mojang.com/browse/MCPE-236304))
- Blocks that use the "flower_pottable" component without the "geometry" and "minecraft:material_instances" components will now generate a content error ([MCPE-234599](https://bugs.mojang.com/browse/MCPE-234599))

## Editor

- Updated outdated tooltip for 2-point select checkbox in Selection Tool
- Updated how incomplete 3-point select volumes are handled by Selection Tool
  - Switching between tools now clears the incomplete 3-point select volume
  - Deselect (Ctrl+D) correctly clears the incomplete 3-point select volume and no longer logs an error
  - Fill (Ctrl+F) correctly ignores the incomplete 3-point select volume and no longer logs an error
- Fixed label values for the 'Deselect' and 'Delete Instance' shortcuts for the layout instance editor.
- Fixed tooltips for the mode selectors for the layout instance editor.
- Fixed issue in 3-point selection mode where single-clicking to create a volume didn't finalize it, preventing further actions on it.
- Fixed a bug that caused the Test World panel to not open when the menu item was clicked
- Added Ignore Air Blocks toggle to Paste Preview, allowing air blocks in the clipboard to be excluded from the paste operation

## Entity Components

- Add `minecraft:spawn_on_death` Component for spawning entities when an entity perishes.
  - `entity_to_spawn` (optional) What entity to spawn, defaults to owning entity when not set
  - `spawn_method` (optional) Spawn method. born, spawned, or summoned, defaults to spawned when not set
  - `spawn_amount` (optional) How many entities to spawn, defaults to 1 when not set
  - `inherit_parent_name` (optional) If true, the entity will inherit the name of the parent entity, defaults to true when not set
  - `additional_spawn_range` (optional) Additional random range of entities to spawn, defaults to 0, 0 when not set

\##Items

- Fixed furnace recipe categorization so custom items using `minecraft:block_placer` with `replace_block_item` are correctly treated as block recipes. ([MCPE-236444](https://bugs.mojang.com/browse/MCPE-236444))

## Scripting

- Added `CustomTexture` type to beta
  - `textureBoundsList` in the `WaypointTextureSelector` now has the option of passing in a `CustomTexture` with a specified path, height, and width

## Stability and Performance

- Fixed a crash that may occur when suspending title while "Syncing user data" UI is displayed

# Experimental Technical Updates

## API

- Added two functions to `DedicatedServerUtils` of `@minecraft/server-admin` in beta
  - Added `reloadScriptingConfig()` to reload scripting configuration files from disk
  - Added `reloadPermissions()` to reload the sever permissions file from disk
  - Added `reloadCDNConfig()` to reload cdn configuration files from disk
- Added `backfaceVisible` property to `DebugText` in the `@minecraft/debug-utilities` module. .
- Added `backfaceVisible` property to `TextPrimitive` in the `@minecraft/server` module. .
- Added `textBackfaceVisible` property to `DebugText` in the `@minecraft/debug-utilities` module. .
- Added `textBackfaceVisible` property to `TextPrimitive` in the `@minecraft/server` module. .
- Added new property `maxShapes` to `PrimitiveShapesManager`.
- Changed the maximum number of `PrimitiveShape` objects to 1000.
- Changed the maximum length of the `text` param of `setText` on `TextPrimitive`, to 128.
- Changed the min and max scale value of `PrimitiveShape` objects to -1000 and 1000 respectively.

## Blocks

- Added snow_log_no_collision behavior to precipitation_behavior in minecraft:precipitation_interactions component. This behavior will allow creators to specify whether snow should cover their custom block or not.
- Fixed trait `minecraft:multi_block` not loading properly with modern block definition loader

## Graphical

- Fixed an issue where the RenderDragon Features for Creators Experimental resource pack would override other resource packs on the stack
- Fixed an issue where point lights were over exposed at their center
- This behavior can be replicated using emissive textures if desired
- Under the RenderDragon Features for Creators Experiment
  - Migrated colored block light storage to the GPU
    - There may be new artifacts with light leaking through or around blocks
  - Colored block lights now influence Volumetrics
