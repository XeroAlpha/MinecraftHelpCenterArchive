---
title: Minecraft Java Edition - 26.3 Snapshot 8
date: 2026-08-12T11:40:16Z
updated: 2026-08-12T11:40:35Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48078031305101-Minecraft-Java-Edition-26-3-Snapshot-8
hash:
  h_01KZTW87XZ4QV7WVTKK8ENC4N4: new-features
  h_01KZTW87XZQTN5JARPKEHQ8G3H: explorer-maps
  h_01KZTW87Y1E4VD1KSWYHYS0AXW: realms
  h_01KZTW87Y3JXQA5R64J0JHFWJR: changes
  h_01KZTW87Y3897AHAJZR6Z0E7ZK: ui
  h_01KZTW87Y3TBDN07QH5JF2PVDP: world-options
  h_01KZTW87Y626X344AHEVGWHDB6: technical-changes
  h_01KZTW87Y6CRHHHD0WAKT25010: data-pack-version-1160
  h_01KZTW87Y6HEPNHG8KKNWQD84R: world-generation
  h_01KZTW87Y63QG11TAECTW14AAV: features
  h_01KZTW87Y7R1M51986W5P93AMR: changedminecrafttemplate
  h_01KZTW87Y8BTG94Y8119FXWNDE: placement-modifiers
  h_01KZTW87Y8RH6930QP46GW8HY5: addedminecraftrandomly_selected
  h_01KZTW87Y98Z7AVFQMW8T6SSSM: block-predicates
  h_01KZTW87Y93XM4582GNT0YTXCV: addedminecraftvolume_match
  h_01KZTW87YA19KM20EFEJ2BPYC9: resource-pack-version-96
  h_01KZTW87YA6ZCRQSH3GPNH45PH: shaders--post-process-effects
  h_01KZTW87YAP0N0NP095NWAV39Q: removed-core-shaders
  h_01KZTW87YB5P6HTBXEFA0A0E1X: order-independent-transparency-oit-related-shader-changes
  h_01KZTW87YBF9DW2WWN9CJV2ZXT: fixed-bugs-in-263-snapshot-8
  h_01KZTW87YSFE9VSPBXTF5FCZF7: get-the-snapshot
---

This Wednesday, a hot new Snapshot enters the Realm! That's right, in 26.3 Snapshot 8, Realm owners can now create and manage Invite Codes, making it easier than ever to join the fun.

Alongside these additions, we've made further improvements to the World Options screen and included several gameplay fixes and technical updates.

Happy mining!

## New Features

### Explorer Maps

- Renamed the following maps:
  - Buried Ancient City Map
  - Buried Mineshaft Map
  - Abandoned Camp Map

### Realms

- Realm owners can now create and manage Invite Codes
  - Each Realm can have up to five Invite Codes
  - Invite Codes can be configured to be active / inactive and deleted
  - The expiration of an Invite Code can also be configured
- Players can now easily join a Realm by entering an Invite Code in a new "Join Realm" screen

## Changes

- Cushions are now only destroyed when fully covered by blocks that cause suffocation
- New Villager trades, unlocked from a Villager leveling up their profession, will now update even if the player is in the process of trading with them

### UI

#### World Options

- Some further improvements have been made to the World Options screen, which is now accessible from the pause menu
  - The "Game Mode" button has been renamed to "Default Game Mode"
  - The "General" section has a new addition:
    - Personal Game Mode: your active game mode in the current world (equivalent to the /gamemode command, or F3+F4)
  - The "Multiplayer" section has a new addition:
    - Force Game Mode: controls whether other players game mode is forced to match the default game mode of the world or not

## Technical Changes

- The Data Pack version is now 116.0
- The Resource Pack version is now 96.0

## Data Pack Version 116.0

### World Generation

#### Features

- Removed feature types:
  - minecraft:desert_well

##### Changed minecraft:template

- Added field processors: Namespaced ID or inline definition of a structure processor list to apply to the template

#### Placement Modifiers

##### Added minecraft:randomly_selected

Randoly selects a Placement Modifier from a list and delegates placement to it.

Format:

- placements: Non-empty list of Placement Modifiers to pick from

#### Block Predicates

##### Added minecraft:volume_match

Checks that every block in a volume matches a given Block Predicate.

Format:

- min: List of 3 integers in range -16 to 16 specifying the lower corner of the volume as an offset from the test position
- max: List of 3 integers in range -16 to 16 specifying the upper corner of the volume as an offset from the test position
- match: Block Predicate to test on each position

## Resource Pack Version 96

### Shaders & Post-process Effects

#### Removed Core Shaders

- core/text_background.fsh and core/text_background.vsh were removed and text background in Text Display Entities is now rendered using the text shaders

#### Order-independent Transparency (OIT)-related Shader Changes

- OIT_FORCE_ZERO_DEPTH shader define was removed since the see-through text it was used for is now rendered in a separate pass outside OIT

## Fixed bugs in 26.3 Snapshot 8

- [MC-44654](https://bugs.mojang.com/browse/MC-44654) - Some entities' positions are not updated on the client when teleported
- [MC-122731](https://bugs.mojang.com/browse/MC-122731) - Camera movement stutters when turning in a boat
- [MC-206540](https://bugs.mojang.com/browse/MC-206540) - Increased input delay when riding an entity
- [MC-236497](https://bugs.mojang.com/browse/MC-236497) - The head rotations of passengers in boats are not correctly displayed for other players
- [MC-237679](https://bugs.mojang.com/browse/MC-237679) - The head rotations of passengers in boats are constantly forced to turn in certain directions if the rider were to dismount the boat while moving left or right
- [MC-249200](https://bugs.mojang.com/browse/MC-249200) - Several entities constantly deviate visually from their actual positions on the client when teleported
- [MC-253023](https://bugs.mojang.com/browse/MC-253023) - Breaking paintings, item frames, glow item frames cannot trigger sculk shriekers
- [MC-258579](https://bugs.mojang.com/browse/MC-258579) - The player's head does not rotate smoothly (with delay) in third person view while riding a vehicle
- [MC-259512](https://bugs.mojang.com/browse/MC-259512) - Horizontal camera rotation lags when riding
- [MC-260780](https://bugs.mojang.com/browse/MC-260780) - Shulker bullets always push fireballs south
- [MC-280250](https://bugs.mojang.com/browse/MC-280250) - Projectiles sometimes desync when thrown/shot while moving
- [MC-300000](https://bugs.mojang.com/browse/MC-300000) - Players desync when teleporting all users riding a happy ghast
- [MC-305214](https://bugs.mojang.com/browse/MC-305214) - Arrows deflecting off of entities get offset
- [MC-308961](https://bugs.mojang.com/browse/MC-308961) - When changing the game mode using debug hotkeys while in the World Options screen, the "Game Mode" button does not update
- [MC-309284](https://bugs.mojang.com/browse/MC-309284) - Poplar leaves don't use the dark_cutout mipmap strategy
- [MC-309668](https://bugs.mojang.com/browse/MC-309668) - Straw beds are not broken faster when using hoes
- [MC-309670](https://bugs.mojang.com/browse/MC-309670) - Cushions z-fight with the tops of dragon heads
- [MC-309716](https://bugs.mojang.com/browse/MC-309716) - Cushions can be broken in Adventure mode
- [MC-310066](https://bugs.mojang.com/browse/MC-310066) - Tridents thrown by drowned still visually bounce off entities
- [MC-310097](https://bugs.mojang.com/browse/MC-310097) - Experience orbs desync and appear to phase through blocks
- [MC-310103](https://bugs.mojang.com/browse/MC-310103) - The "Text Background Opacity" setting makes the text darker when the "Text Background" setting is set to Everywhere
- [MC-310166](https://bugs.mojang.com/browse/MC-310166) - The straw bed is not placed immediately after regular beds in the Creative mode inventory
- [MC-310175](https://bugs.mojang.com/browse/MC-310175) - Missing resource warning when loading up the game
- [MC-310200](https://bugs.mojang.com/browse/MC-310200) - The player's model flickers while falling into the void when viewed from certain angles
- [MC-310393](https://bugs.mojang.com/browse/MC-310393) - Certain projectiles thrown at the world border rubberband repeatedly
- [MC-310476](https://bugs.mojang.com/browse/MC-310476) - Projectiles only collide outright with the world border when underwater
- [MC-310530](https://bugs.mojang.com/browse/MC-310530) - Changing the game mode in the World Options screen no longer changes the player's game mode
- [MC-310540](https://bugs.mojang.com/browse/MC-310540) - A noise definition with base_amplitude set to 0.0 crashes the game during world load
- [MC-310543](https://bugs.mojang.com/browse/MC-310543) - The JVM crashes with EXCEPTION_ACCESS_VIOLATION in atio6axx.dll on Boot Camp (AMD Radeon Pro 555X)
- [MC-310549](https://bugs.mojang.com/browse/MC-310549) - invulnerable_time never decreases for some entities
- [MC-310632](https://bugs.mojang.com/browse/MC-310632) - Farmer villagers no longer throw excess wheat to other villagers
- [MC-310642](https://bugs.mojang.com/browse/MC-310642) - Landing on farmland deals no fall damage when the block is prevented from being trampled
- [MC-310687](https://bugs.mojang.com/browse/MC-310687) - Languages other than "English (US)" fail to load
- [MC-310691](https://bugs.mojang.com/browse/MC-310691) - Stonecutter recipes for concrete stairs and slabs are missing
- [MC-310692](https://bugs.mojang.com/browse/MC-310692) - The error message when the game is unable to load translations can extend outside the screen
- [MC-310705](https://bugs.mojang.com/browse/MC-310705) - The difficulty lock warning screen shows the wrong difficulty after changing the difficulty
- [MC-310718](https://bugs.mojang.com/browse/MC-310718) - Unused color attachments are unusable with the OpenGL rendering backend
- [MC-310726](https://bugs.mojang.com/browse/MC-310726) - The mansion icon in the texture of woodland explorer maps doesn't match the respective icon on the map
- [MC-310728](https://bugs.mojang.com/browse/MC-310728) - Cushions can still be used to see through blocks in third person mode
- [MC-310729](https://bugs.mojang.com/browse/MC-310729) - Explorer maps from previous versions prevent saved hotbars from loading
- [MC-310743](https://bugs.mojang.com/browse/MC-310743) - The category headers in the Debug Options screen are still different than the other options screens
- [MC-310757](https://bugs.mojang.com/browse/MC-310757) - In OIT shaders, coefficients\[0\] is accumulated using depth but subtracted using originalDepth
- [MC-310771](https://bugs.mojang.com/browse/MC-310771) - The common abandoned camp map is named "Abandoned Campsite Map" instead of "Abandoned Camp Map"
- [MC-310783](https://bugs.mojang.com/browse/MC-310783) - Resource packs with custom namespaces cause the "English (US)" language to fail to load
- [MC-310787](https://bugs.mojang.com/browse/MC-310787) - Villagers do not level up until the trading window is closed for several seconds
- [MC-310789](https://bugs.mojang.com/browse/MC-310789) - Chunks sometimes don't fade in correctly
- [MC-310812](https://bugs.mojang.com/browse/MC-310812) - Placing and breaking cushions does not trigger sculk shriekers
- [MC-310917](https://bugs.mojang.com/browse/MC-310917) - Chunk generation can corrupt on worlds upgraded from previous versions

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/f56c190d1deda0a8e63592ae07b1cd7f26cccd3e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
