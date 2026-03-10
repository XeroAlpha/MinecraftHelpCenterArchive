---
title: Minecraft Java Edition - 26.1 Pre-release 1
date: 2026-03-10T15:21:15Z
updated: 2026-03-10T15:21:22Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44167381353869-Minecraft-Java-Edition-26-1-Pre-release-1
hash:
  h_01KKC5CDFTZ8AEW4F4J9BHMJ0R: technical-changes
  h_01KKC5CDFZ8P2A2GMZ0HY76NXY: network-protocol
  h_01KKC5CDG03N4JDX2PDXMENJV8: data-pack-version-101
  h_01KKC5CDG0VNW6Q9016HXMT9YH: commands
  h_01KKC5CDG0M14NVFKEMA905B6E: changes-totime
  h_01KKC5CDG447540GB8S1PXNB7S: data-components
  h_01KKC5CDG4PH2DMXY7BQWNEPSN: modifiedminecraftprovides_banner_patterns
  h_01KKC5CDG5KBWPXG8GYYXCVEQQ: modifiedminecraftblocks_attacks
  h_01KKC5CDG5PZHW2A6S7A79CMBY: modifiedminecraftdamage_resistant
  h_01KKC5CDG6P0XBB7129MZHS1G8: loot-functions
  h_01KKC5CDG6HZAC915YMQ9R6V8P: changedminecraftset_instrument
  h_01KKC5CDG7RA4SV3CDSTCYQXV8: predicates
  h_01KKC5CDG7JN8840YKSAXG48VF: addedminecraftenvironment_attribute_checkloot-predicate
  h_01KKC5CDG8GK4JCWPY85BB94TG: number-providers
  h_01KKC5CDG9061XYXA5WYJB06R1: addedminecraftenvironment_attribute
  h_01KKC5CDG9YGGKP1V372QPCXHM: world-generation
  h_01KKC5CDG9KFD81XZ1QE8YTRE5: flower-features
  h_01KKC5CDGBX0HW8YRZ0SW6GK88: int-providers
  h_01KKC5CDGC8VPWF53428PTNJTW: addedtrapezoidint-provider
  h_01KKC5CDGD8ZJDWXPTZAWM150D: tags
  h_01KKC5CDGDNAAWFJGG54HJ33QN: configured-feature-tags
  h_01KKC5CDGEJ14H9J0DA9QGV845: text-components
  h_01KKC5CDGEERPPF8GGG05W1VGA: minecraftobject
  h_01KKC5CDGE27QAZ73TSWGB4R3K: resource-pack-version-84
  h_01KKC5CDGEBSNT88NFP4QM9KQS: item-models
  h_01KKC5CDGFX8YAS8XEA7GVX44N: minecraftend_cubespecial-model-type
  h_01KKC5CDGGE82JY6VT5NE5H4V6: block-state-rendering
  h_01KKC5CDGGZZVYPJ4CHSG57HK0: shaders--post-process-effects
  h_01KKC5CDGG2RN3ZWA3TQMC2MZB: fixed-bugs-in-261-pre-release-1
  h_01KKC5CDGQYEAAYT606KQR6BEN: get-the-pre-release
---

Today we are shipping the first pre-release for Java version 26.1, the Tiny Takeover game drop! From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Tuesdays, so keep your eyes peeled for the next pre-release.

## Technical Changes

- The Data Pack version is now 101
- The Resource Pack version is now 84
- Changes to the minecraft:nbt text component format
- Changes to the minecraft:selector, minecraft:nbt and minecraft:object text component formats

### Network Protocol

## Data Pack Version 101

- The "Default Components" report generator no longer outputs files for entries without any components

### Commands

#### Changes to time

Syntax:

- time \[of \<clock\>\] rate \<rate\> - sets the rate multiplier at which the clock should advance
  - Note: this only changes the rate at which the World Clock and any Timelines dependent on it advance their internal timers
    - For example, in the case of the minecraft:overworld clock, the day/night cycle will pass quicker with a larger value, but actual game simulation will not speed up (as would happen with /tick rate)
  - A rate of 1 corresponds to normal speed
  - rate is a float between 0 (exclusive) and 1000 (inclusive)

### Data Components

#### Modified minecraft:provides_banner_patterns

- The component now also accepts an ID or a list of IDs in addition to a tag

#### Modified minecraft:blocks_attacks

- The field bypassed_by now also accepts an ID or a list of IDs in addition to a tag

#### Modified minecraft:damage_resistant

- The field types now also accepts an ID or a list of IDs in addition to a tag

### Loot Functions

#### Changed minecraft:set_instrument

- The options field now also accepts an ID and a list of IDs in addition to a tag

### Predicates

#### Added minecraft:environment_attribute_check Loot Predicate

Exactly matches the value of an Environment Attribute at a given position. Note: this predicate requires a context with an origin position set as long as the Environment Attribute can vary positionally.

Format: object with fields:

- attribute - Environment Attribute ID to test
- value - Exact value of the Environment Attribute to match
- e.g. {condition: 'environment_attribute_check', attribute: 'gameplay/piglins_zombify', value: true}

### Number Providers

#### Added minecraft:environment_attribute

Fetches and provides the value of an Environment Attribute (that can be represented as a number). Note: this provider requires a context with an origin position set as long as the Environment Attribute can vary positionally.

Format: object with fields:

- attribute - Environment Attribute ID to fetch
- e.g. {type: 'environment_attribute', attribute: 'gameplay/sky_light_level'}

### World Generation

#### Flower Features

- Features spawned from Bone Meal are no longer restricted to the flower feature type, and instead controlled by the #can_spawn_from_bone_meal Configured Feature Tag
- The flower, flower_no_bonemeal, and random_patch feature types have been removed
  - Instead, patches can be expressed as a sequence of count and random_offset placement modifiers

#### Int Providers

##### Added trapezoid Int Provider

Select a random value with a trapezoid distribution, similar to the trapezoid Float Provider.

Format: object with fields:

- min: integer, the minimum value to generate
- max: integer, the maximum value to generate
- plateau: integer, the width of the "plateau" of the distribution in which all values are equally likely to occur
  - A value of 0 is equivalent to a triangle distribution
  - A value of max-min is equivalent to a uniform distribution

### Tags

#### Configured Feature Tags

- Added #can_spawn_from_bone_meal - features that, when added in a biome, can be spawned when using Bone Meal in that biome

### Text components

#### \`minecraft:object

- Added a new optional field named fallback that contains a text component to be used when object component itself can't be displayed (for example when printing messages in server logs or during narration)
- Objects of type player (player heads) no longer can be used in server status messages (MotD)
  - All components of that type will be replaced by a fallback text

## Resource Pack Version 84

- Updated textures for Pup to fix issues with overlapping textures

### Item Models

#### minecraft:end_cube Special Model Type

- New special model type that renders a cube with the same texture effects as the End Portal and the End Gateway blocks
- Fields:
  - effect - texture effect to apply, one of: portal, gateway

### Block State Rendering

- End Gateway and End Portal should now look the same when rendered on a Block Display as they look when placed in world

### Shaders & Post-process Effects

- The core/rendertype_translucent_moving_block shaders have been removed in favor of core/block

## Fixed bugs in 26.1 Pre-Release 1

- [MC-195237](https://bugs.mojang.com/browse/MC-195237) - End portals and end gateways held by endermen or as block display entities are not rendered, but nether portals are
- [MC-230746](https://bugs.mojang.com/browse/MC-230746) - Pointed dripstone does not grow with a waterlogged block 2 blocks above it but does fill cauldrons
- [MC-305518](https://bugs.mojang.com/browse/MC-305518) - Baby wolves' tail uses an incorrect UV map
- [MC-305702](https://bugs.mojang.com/browse/MC-305702) - Zombies and their variants have lost their special animation when holding spears
- [MC-305914](https://bugs.mojang.com/browse/MC-305914) - /swing does not swing players' arms on their perspective
- [MC-306056](https://bugs.mojang.com/browse/MC-306056) - The selected difficulty does not visually update when going into and out of the game rules menu
- [MC-306232](https://bugs.mojang.com/browse/MC-306232) - The block breaking animation on banners is now amplified
- [MC-306315](https://bugs.mojang.com/browse/MC-306315) - The left side of wolf pups' heads is misaligned, causing a gap and texture error
- [MC-306338](https://bugs.mojang.com/browse/MC-306338) - Baby zombified piglins' snout texture was made for a 4×3×1 cube model, even though the snout model is actually a 3×3×1 cube
- [MC-306341](https://bugs.mojang.com/browse/MC-306341) - Helmets on baby humanoids shift off-center when their heads rotate
- [MC-306427](https://bugs.mojang.com/browse/MC-306427) - Certain mobs holding items with empty "kinetic_weapon" components crash the game whenever target acquisition succeeds
- [MC-306532](https://bugs.mojang.com/browse/MC-306532) - The error that occurred when a resource pack used textures that were too large is now incomprehensible
- [MC-306571](https://bugs.mojang.com/browse/MC-306571) - CommandEncoder#copyTextureToBuffer has incorrect parameter validation statements
- [MC-306612](https://bugs.mojang.com/browse/MC-306612) - Baby zombies, baby husks, and gurgles now hold items like players do
- [MC-306624](https://bugs.mojang.com/browse/MC-306624) - Various translucent geometry is now invisible behind name plates
- [MC-306631](https://bugs.mojang.com/browse/MC-306631) - Baby zombies, husks, drowned, and zombified piglins spawned by using spawn eggs on normal ones can't pick up items
- [MC-306633](https://bugs.mojang.com/browse/MC-306633) - The "Toggle GUI" key bind doesn't work when set to a mouse button
- [MC-306653](https://bugs.mojang.com/browse/MC-306653) - Name plates are no longer visible through opaque blocks
- [MC-306705](https://bugs.mojang.com/browse/MC-306705) - Copper golem statues with a pose now appear upside down as items
- [MC-306706](https://bugs.mojang.com/browse/MC-306706) - The game hangs/freezes upon losing focus
- [MC-306708](https://bugs.mojang.com/browse/MC-306708) - Block state rendering of chests for the left and right block states uses the single chest texture
- [MC-306713](https://bugs.mojang.com/browse/MC-306713) - The most transparent pixels of the gradient banner patterns are no longer visible
- [MC-306742](https://bugs.mojang.com/browse/MC-306742) - Rendering an empty item model with oversized_in_gui causes a crash
- [MC-306748](https://bugs.mojang.com/browse/MC-306748) - Profiler tick ended before path was fully popped (remainder: 'root'). Mismatched push/pop?
- [MC-306796](https://bugs.mojang.com/browse/MC-306796) - Text displays with see_through set to 1 now z-fight with themselves

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/07127fc27cad5f29b326cb9c5ef8bb24599e2c11/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
