---
title: Minecraft Java Edition - 26.2 Snapshot 4
date: 2026-04-30T08:22:02Z
updated: 2026-04-30T08:22:12Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45491721929613-Minecraft-Java-Edition-26-2-Snapshot-4
hash:
  h_01KQEQNR8TKRHEXXS7HRN7R7Y9: new-features
  h_01KQEQNR8WJ9WR137R8JCKGDNV: sulfur-cube-mob
  h_01KQEQNR8XEQK6PBX28BCYPZ3T: sulfur-caves-biome
  h_01KQEQNR8YJMCDV8NVG4S7WKV3: changes
  h_01KQEQNR8YFN3BGH4AGAHYCT7D: mob-spawning
  h_01KQEQNR8ZKMAJA4AZM8P5615E: sounds
  h_01KQEQNR8Z849JT1E9V5ZCBJXF: technical-changes
  h_01KQEQNR8ZRPHM53MNZVQBBT28: data-pack-version-1030
  h_01KQEQNR8Z8R9SNRVBS0NKGEER: attributes
  h_01KQEQNR8Z1A7JH3C51EN5B4NW: added-minecraftnameplate_distance
  h_01KQEQNR92ZRV5117YSDZEYNHR: added-minecraftbelow_name_distance
  h_01KQEQNR93YS67BXJDFK9F5NWE: predicates
  h_01KQEQNR93KTV82MYWK10293Z5: entity-predicates
  h_01KQEQNR93BB4PXBPA1HE4NKKN: resource-pack-version-861
  h_01KQEQNR94QF7SZ190E917DS3K: telemetry
  h_01KQEQNR94C8P1MBXBT11BHEQA: new-required-events
  h_01KQEQNR97GJBB9PMJ06YR6QNB: fixed-bugs-in-262-snapshot-4
  h_01KQEQNR9DJDNWF6AJHMV0R4S9: get-the-snapshot
---

Today we thought we'd bring you a fourth snapshot for 26.2! With this release we have added in language support for two new languages and made some changes to the sulfur cube and the sulfur cave biome. Also in this release, our peaceful players can now spawn Hoglins, Piglins and Sulfur cubes!

Happy Mining!

## New Features

- Added Swiss French language support to the game
- Added Chuvash language support to the game

### Sulfur Cube mob

- Naturally-spawned small Sulfur Cubes now have the correct size
- The outer texture of the Sulfur Cube has been updated

### Sulfur Caves biome

- Granite and Tuff blocks are now dispersed between Sulfur and Cinnabar blocks
- The Sulfur Spike Clusters have been made slightly shorter, on average

## Changes

### Mob Spawning

- Hoglins, Piglins and Sulfur Cubes now spawn on Peaceful difficulty

### Sounds

- Added sounds for when using a bucket on a Sulfur Cube

## Technical Changes

- The Data Pack version is now 103.0
- The Resource Pack version is now 86.1

## Data Pack Version 103.0

### Attributes

#### Added minecraft:nameplate_distance

- Controls how far away in blocks the nameplate of an entity is visible
- The nameplate cannot be visible if the entity is not visible
- Accepts values between 0.0 and 512.0
- Default value: 64.0

#### Added minecraft:below_name_distance

- Controls how far away in blocks the below_name scoreboard display is visible
- The nameplate cannot be visible if the entity is not visible
- Accepts values between 0.0 and 512.0
- Default value: 10.0

### Predicates

#### Entity Predicates

- Slime sub-predicate has been renamed from minecraft:type_specific/slime to minecraft:type_specific/cube_mob

## Resource Pack Version 86.1

- The minecraft:beds atlas has been removed

### Telemetry

#### New required events

- graphics_capabilities
  - This is a new event that posts on startup, and informs us of the capabilities of the graphics device used to play the game
  - Added new property: backend_name
    - This will be Vulkan or OpenGL, and will help us understand which graphics api players are using
  - Added new property: backend_failure_reason
    - This will be a list of short error codes, for example vulkan_device_version_too_low, which will help us identify any issues with our targeted Vulkan requirements
  - Added new property: backend_failure_message
    - This will be a short and vague messages, such as Failed to find the GLFW platform surface extensions, which will help us narrow down issues if players are experiencing issues running with Vulkan
  - Added new property: backend_failure_missing_capabilities
    - This will be a list of missing capabilities from Vulkan, for example VULKAN_CORE_1_2, VK_KHR_dynamic_rendering, which will help us know which capabilities players would need in order to use Vulkan

## Fixed bugs in 26.2 Snapshot 4

- [MC-186131](https://bugs.mojang.com/browse/MC-186131) - Piglins and hoglins cannot spawn naturally on Peaceful difficulty
- [MC-296343](https://bugs.mojang.com/browse/MC-296343) - Using the mouse wheel to switch between cast fishing rods briefly displays the uncast texture in first-person
- [MC-307002](https://bugs.mojang.com/browse/MC-307002) - Using the kill command on one of the end crystals used to respawn the ender dragon no longer aborts the respawn sequence
- [MC-307327](https://bugs.mojang.com/browse/MC-307327) - VSync limits the framerate inconsistently in fullscreen with the Vulkan rendering backend on some Mac systems
- [MC-307378](https://bugs.mojang.com/browse/MC-307378) - The glowing effect is not visible with the Vulkan rendering backend on some graphics
- [MC-307434](https://bugs.mojang.com/browse/MC-307434) - Sulfur cubes cannot spawn naturally on Peaceful difficulty
- [MC-307532](https://bugs.mojang.com/browse/MC-307532) - Lava buckets now remain filled server-side when emptied into flowing water
- [MC-307539](https://bugs.mojang.com/browse/MC-307539) - The game crashes upon startup on some Mac systems
- [MC-307545](https://bugs.mojang.com/browse/MC-307545) - The "High Contrast" resource pack is listed as incompatible
- [MC-307549](https://bugs.mojang.com/browse/MC-307549) - beds.png-atlas still exists
- [MC-307587](https://bugs.mojang.com/browse/MC-307587) - Wet sponges are no longer removed from the inventory server-side when placed in the Nether
- [MC-307624](https://bugs.mojang.com/browse/MC-307624) - The cube mob entity sub-predicate is called type_specific/slime rather than cube_mob
- [MC-307626](https://bugs.mojang.com/browse/MC-307626) - The selection lists in the pack selection screen can extend outside the bounds of the game window, violating the Vulkan specification
- [MC-307647](https://bugs.mojang.com/browse/MC-307647) - Crash on startup with the Vulkan validation layer enabled — the NORMAL vertex attribute uses a format without guaranteed VERTEX_BUFFER_BIT support

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/679190223788622aa5edfb9346fad3d0717087c5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
