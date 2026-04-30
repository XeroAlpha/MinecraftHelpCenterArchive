---
title: Minecraft Java Edition - 26.2 Snapshot 5
date: 2026-04-30T08:23:04Z
updated: 2026-04-30T08:23:12Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45491723095821-Minecraft-Java-Edition-26-2-Snapshot-5
hash:
  h_01KQEQQJT139Y9WKH42SAXQ7GM: new-features
  h_01KQEQQJT2RCH399T4EJBHGBF1: sulfur-cube-mob
  h_01KQEQQJT35TZDS9PWHX4NNJ3T: sulfur-cube-archetypes
  h_01KQEQQJT70YM3EBZ6WZT4SJBA: potent-sulfur
  h_01KQEQQJT87N9VEDJCV181EBR7: changes
  h_01KQEQQJT887S99YCT2975TNQH: mob-spawning
  h_01KQEQQJT9SJMMC8WEH4CBSA29: sounds
  h_01KQEQQJT9B3W2PEPFQ1DX8K4W: settings
  h_01KQEQQJTA0P2CVEV3RK8B3YG0: technical-changes
  h_01KQEQQJTB9F5785P2SQK31HT1: minecraft-server-management-protocol-300
  h_01KQEQQJTC2JK6348A6HPBJ5F0: data-pack-version-1040
  h_01KQEQQJTEDRZDZAP4K0QBT9DX: commands
  h_01KQEQQJTFV7V571J6CC7S0SK0: changed-minecraftnameplate_distance
  h_01KQEQQJTG9K8NC8WXTATA9P1J: world-generation
  h_01KQEQQJTH3QJJT09H4TCCFZ2N: configured-features
  h_01KQEQQJTHZF9F5Y9J7E74ZGFF: changes-to-minecraftmultiface_growth
  h_01KQEQQJTHYK7G1C598623M944: density-functions
  h_01KQEQQJTHWZT1PQGJD9CKP8WV: added-minecraftinterval_select
  h_01KQEQQJTKTC2R0B9X9JAKWJAD: removed-minecraftweird_scaled_sampler
  h_01KQEQQJTPCJ25500MSNP5WF5W: tags
  h_01KQEQQJTP9AFKFBHJA8T43YMW: block-tags
  h_01KQEQQJTQ9872TR22XJH3XDB9: particles
  h_01KQEQQJTQWC9BHES3TMY400VG: added-minecraftgeyser_base
  h_01KQEQQJTRWXCT8NV8JFBZJM89: added-minecraftgeyser_poof
  h_01KQEQQJTSRXM3APC2WHVCC3XV: added-minecraftgeyser_plume
  h_01KQEQQJTT9X7B4NDRD8TKYZZW: added-minecraftgeyser
  h_01KQEQQJTVFZRPTJJXPX9Z0BM7: game-test-environments
  h_01KQEQQJTV9CA621XR0D3DPBCT: added-minecraftdifficulty
  h_01KQEQQJTWX6DHK6CNHB32KWQM: resource-pack-version-862
  h_01KQEQQJTWW0FW8ET41YE9G6G9: sounds-1
  h_01KQEQQJTXAFTYXS80ZMMMNMWY: particles-1
  h_01KQEQQJV20B7NFC1NH4R9R0FB: fixed-bugs-in-262-snapshot-5
  h_01KQEQQJV6728EWTYKHAB4SP2V: get-the-snapshot
---

Boom!! 26.2 Snapshot 5 just exploded into the scene! This snapshot introduces erupting Geysers and a new explosive archetype for the Sulfur Cube!

Happy mining!

## New Features

- New Sulfur Cube archetype: Explosive
- Potent Sulfur can now form Geysers

### Sulfur Cube mob

- With a block inside, it is now immune to explosions

#### Sulfur Cube archetypes

- There is now a third special archetype:
  - Explosive: similar properties to a Regular with a slightly higher air drag,
    - Used when absorbing a TNT block
    - Absorbed TNT can be primed by Redstone, fire sources (including a Dispenser with a Flint and Steel) or nearby explosions
    - When primed by fire or Redstone, absorbed TNT uses a fuse time of 6 seconds
    - When primed by an explosion, absorbed TNT uses a randomized fuse time between 0.75 and 3 seconds
    - Sulfur Cubes with an absorbed, primed TNT block cannot be picked up with a Bucket
    - Sulfur Cubes with an absorbed, primed TNT block cannot be damaged
    - Absorbed, primed TNT blocks cannot be sheared out
    - On explosion, no Small Sulfur Cubes are spawned

### Potent Sulfur

- When placed above a Magma block and under 1-4 Water source blocks, it creates a Geyser
- The Geyser will erupt at random intervals, shooting a plume of water particles upwards and applying an upward impulse to entities above it

## Changes

- Tweaked various mobs hitbox, eye height, and rider positions

### Mob Spawning

- Hoglins are now considered hostile and do not spawn on Peaceful difficutly

### Sounds

- Added sounds for Geyser eruptions
- Sulfur Spikes now have unique sound events

### Settings

- Removed Touchscreen Mode

> **Developer's Note**: *Touch screen mode has been poorly implemented and not properly supported for a long time. We plan to deprecate this feature in this release. To provide your feedback on this topic, head over to* [*the feedback site*](https://aka.ms/mctouchscreenjavafeedback)*.*

## Technical Changes

- The Data Pack version is now 104.0
- The Resource Pack version is now 86.2
- A player's score will no longer be displayed in the player tab overlay if the player doesn't have the objective

### Minecraft Server Management Protocol 3.0.0

- The management server now starts before the Minecraft server starts
  - Most notably, this means the heartbeat will be sent while the world is loading and potentially upgrading
- The rpc.discover and notification/server/status methods are now accessible before the dedicated server spins up
  - The server will return an error when other methods are called during this time

## Data Pack Version 104.0

- Entries in the minecraft:sulfur_cube_archetype registry have a new field:
  - explosion_fuse: optional integer, if present, the Sulfur Cube of this archetype will explode with this fuse time when ignited
- Added geyser, geyser_poof, geyser_base, and geyser_plume particles

### Commands

- Team color arguments (used in team modify \[name\] color and waypoint modify \[name\] color) now accept only lowercase names with underscores
  - I.e. only dark_purple is accepted and not darkpurple or DarkPurple
  - Values now match color names in text components

#### Changed minecraft:nameplate_distance

- Renamed to minecraft:name_tag_distance

### World Generation

- Added matching_biomes world generation-type block predicate type which checks if the block position matches one of the specified biomes
  - Format: object with fields:
    - biomes - biome ID, list of biome IDs, or hash-prefixed biome tag: the biomes to match
- tree feature configuration's below_trunk_provider block state provider no longer has a default value

#### Configured Features

##### Changes to minecraft:multiface_growth

- Field block is now mandatory (defaulted to minecraft:grow_lichen)

#### Density Functions

##### Added minecraft:interval_select

Selects between a number of Density Functions based on an input Density Function and a set of threshold values. Format: object with fields:

- input - Density Function, the value to be compared with any given thresholds
- thresholds - non-empty list of floats, the threshold values to compare input with
  - If input \< thresholds\[i\], the result of functions\[i\] will be selected
  - If the input is greater than the last threshold value, the last function will be selected
  - Must be one fewer thresholds than functions
- functions - list of at least 2 Density Functions, the resulting functions to be selected from
  - Must be one more element in functions than in thresholds

##### Removed minecraft:weird_scaled_sampler

- This Density Function has been removed, with its functionality replaced by interval_select
- When rarity_value_mapper was type_1, equivalent to:
  - interval_select with thresholds -0.75, -0.5, 0.5, 0.75
  - Selected functions follow: abs(rarity \* noise(x/rarity, y/rarity, z/rarity))
    - Corresponding rarity values: 0.5, 0.75, 1.0, 2.0, 3.0
- When rarity_value_mapper was type_2, equivalent to:
  - interval_select with thresholds -0.5, 0.0, 0.5
  - Selected functions follow: abs(rarity \* noise(x/rarity, y/rarity, z/rarity))
    - Corresponding rarity values: 0.75, 1.0, 1.5, 2.0

### Tags

#### Block Tags

- Added the following tags for blocks which some mobs are immune to. These have effect on dismounting, and valid surroundings of spawn placements for some mobs. They do not have an effect on pathfinding.
  - \#fox_immune_to
  - \#polar_bear_immune_to
  - \#snow_golem_immune_to
  - \#stray_immune_to
  - \#wither_immune_to
  - \#wither_skeleton_immune_to
  - \#default_immune_to - this tag is intentionally left empty

### Particles

#### Added minecraft:geyser_base

- Spawns as a cloud on the base of an erupting Potent Sulfur block
- Format: object with fields:
  - water_blocks - positive integer, scales the particle size and its burst impulse
  - burst_impulse_base - float, scales the initial burst impulse

#### Added minecraft:geyser_poof

- Spawns as a cloud on the base of an erupting Potent Sulfur block
- Format: object with fields:
  - water_blocks - positive integer, scales the particle size and its burst impulse
  - burst_impulse_base - float, scales the initial burst impulse

#### Added minecraft:geyser_plume

- Spawns as an upwards stream above an erupting Potent Sulfur block
- Format: object with fields:
  - water_blocks - positive integer, scales the particle size and its burst impulse

#### Added minecraft:geyser

- An emitter particle that spawns the geyser_base, geyser_poof, and geyser_plume particles above an erupting Potent Sulfur block
- Format: object with fields:
  - water_blocks - positive integer, scales the particle size and its burst impulse

### Game Test Environments

#### Added minecraft:difficulty

Sets the difficulty of the game test environment. Fields:

- difficulty: The difficulty ID to set
  - One of: peaceful, easy, normal, hard

## Resource Pack Version 86.2

### Sounds

- Added sounds for Geyser eruptions:
  - block.potent_sulfur.geyser_eruption
  - block.potent_sulfur.geyser_eruption_active

### Particles

- Added new Particle textures:
  - particle/noxious_gas_01.png
  - particle/noxious_gas_02.png
  - particle/noxious_gas_03.png
  - particle/noxious_gas_04.png
  - particle/noxious_gas_05.png
  - particle/noxious_gas_06.png
  - particle/noxious_gas_07.png
  - particle/noxious_gas_08.png
  - particle/geyser_base_01.png
  - particle/geyser_base_02.png
  - particle/geyser_base_03.png
  - particle/geyser_base_04.png
  - particle/geyser_base_05.png
  - particle/geyser_base_06.png
  - particle/geyser_base_07.png
  - particle/geyser_base_08.png
  - particle/geyser_plume_01.png
  - particle/geyser_plume_02.png
  - particle/geyser_plume_03.png
  - particle/geyser_plume_04.png
  - particle/geyser_plume_05.png
  - particle/geyser_plume_06.png
  - particle/geyser_plume_07.png
  - particle/geyser_plume_08.png
  - particle/geyser_poof_01.png
  - particle/geyser_poof_02.png
  - particle/geyser_poof_03.png
  - particle/geyser_poof_04.png
  - particle/geyser_poof_05.png
  - particle/geyser_poof_06.png
  - particle/geyser_poof_07.png
  - particle/geyser_poof_08.png

## Fixed bugs in 26.2 Snapshot 5

- [MC-304862](https://bugs.mojang.com/browse/MC-304862) - Activating a dispenser with a hostile mob spawn egg in Peaceful difficulty consumes the egg and plays a sound
- [MC-306622](https://bugs.mojang.com/browse/MC-306622) - The height of chicken jockeys is slightly off
- [MC-306685](https://bugs.mojang.com/browse/MC-306685) - The riding position on baby hoglins is too low
- [MC-307012](https://bugs.mojang.com/browse/MC-307012) - When a scoreboard objective is set to the below_name display mode, all named entities with no score display it with a score of 0
- [MC-307125](https://bugs.mojang.com/browse/MC-307125) - Target selectors with duplicate team arguments are parsed inconsistently depending on argument order
- [MC-307194](https://bugs.mojang.com/browse/MC-307194) - The discount given by fletchers for tipped arrow trades decreases the arrow cost instead of the emerald cost
- [MC-307266](https://bugs.mojang.com/browse/MC-307266) - Zombie villagers change biome type after being cured
- [MC-307283](https://bugs.mojang.com/browse/MC-307283) - Placing sulfur springs using /place does not update the affected blocks
- [MC-307513](https://bugs.mojang.com/browse/MC-307513) - Using /deop on multiple players shows the same player in all success messages
- [MC-307623](https://bugs.mojang.com/browse/MC-307623) - Chunk sections are sometimes invisible until they are updated
- [MC-307689](https://bugs.mojang.com/browse/MC-307689) - The player's arm swings when failing to use a spawn egg in Peaceful difficulty
- [MC-307690](https://bugs.mojang.com/browse/MC-307690) - The error message produced by /difficulty doesn't use the difficulty's translated name
- [MC-307702](https://bugs.mojang.com/browse/MC-307702) - Skeletons' AI breaks when picking up any item
- [MC-307706](https://bugs.mojang.com/browse/MC-307706) - The game inconsistently refers to name tags and name plates
- [MC-307710](https://bugs.mojang.com/browse/MC-307710) - Deoxidizing waxed copper blocks now takes priority over scraping off the wax
- [MC-307754](https://bugs.mojang.com/browse/MC-307754) - Monsters now spawn regardless of the "Spawn Monsters" game rule

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/dbcd57afe4cdba19be8c9e658d1e3a176d53a5db/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
