---
title: Minecraft Java Edition - Snapshot 25w05a
date: 2025-01-30T11:51:52Z
updated: 2025-01-30T11:52:10Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/33905562654349-Minecraft-Java-Edition-Snapshot-25w05a
hash:
  h_01JJVGTVETBJPGXDDCX72W3822: new-features
  h_01JJVGTVETRACE3PVZ2EW0HDH2: cow-variants
  h_01JJVGTVET4GJMVY6NVK9VHY91: firefly-bush
  h_01JJVGTVET1HYE2Q3ZHAH7JEBD: bush
  h_01JJVGTVET5FQH9F1V58FHD4R1: new-ambient-sounds-for-desert-and-badlands
  h_01JJVGTVETAJ1K7GSTEDMFB08S: changes
  h_01JJVGTVETBX3AGCSNJSEDSWA8: technical-changes
  h_01JJVGTVETE1445TH3XDRYJGC9: data-pack-versions-65
  h_01JJVGTVETQW4BAA792S9WVFSW: commands
  h_01JJVGTVET3QGK6ADR97KFGWKY: tags
  h_01JJVGTVETBE6B67H6RK2ESR93: block-tags
  h_01JJVGTVET3SASDEMKPQJ4DXTA: damage-type-tags
  h_01JJVGTVETTMC3ZKP6N0R16R5V: cow-variants-1
  h_01JJVGTVETFXFGA5KF1HHD1F7E: item-components
  h_01JJVGTVETH0JJMW1G848CZV06: changes-to-theblocks_attackscomponent
  h_01JJVGTVEVVS8F82MEQ80XMEHX: resource-pack-version-50
  h_01JJVGTVEVGS6B5R93184SNQMF: updated-pig-textures
  h_01JJVGTVEVNFFHXR1Y2RKKXQH4: new-and-updated-cow-textures-and-model
  h_01JJVGTVEV6GNDQKF6Y33ZGZXA: fixed-bugs-in-25w05a
  h_01JJVGTVEVVRE6QV4B1CDYBDFA: get-the-snapshot
---

Happy snapshot Wednesday! (You didn't think we were done, did you?) Today's snapshot is filled with new features: Say hello the cold and warm cow variants roaming cold and warm biomes across the Overworld, treat your ears to new ambient desert sounds and spruce up your builds with the bush block and sparkling firefly bush! And of course, we're also bringing you a fresh collection of bug fixes and technical updates. Happy mining!

## New Features

- Added cold and warm variants for the Cow
- Added Firefly Bush block
- Added Bush block
- Added new ambient block sounds for ambient sounds in Desert and Badlands biomes

### Cow Variants

- New Cow variants have been added, the variant is determined by the biome they spawn in
- Temperate variant - The Cow we are all familiar with
  - Spawns by default where the cold and warm variants do not spawn
- Cold variant - A variant that spawns in the following biomes:
  - Old Growth Pine Taiga
  - Old Growth Spruce Taiga
  - Taiga
  - Snowy Taiga
  - Windswept Hills
  - Windswept Gravelly Hills
  - Windswept Forest
- Warm variant - A variant that spawns in the following biomes:
  - Savanna
  - Savanna Plateau
  - Windswept Savanna
  - Jungle
  - Sparse Jungle
  - Bamboo Jungle
  - Eroded Badlands
  - Wooded Badlands
  - Badlands
- When bred by a player, a baby Cow variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants

### Firefly Bush

- The Firefly Bush is found in Swamps and near Rivers
- When it's dark, glowing firefly particles appear around the Firefly Bush
- Using Bone Meal on a Firefly Bush will spawn another Firefly Bush item
- The Firefly Bush emits light level 2

### Bush

- The Bush is a new type of decorative block that can be found in small patches in the following biomes:
  - Plains
  - Windswept Hills
  - Windswept Gravelly Hills
  - Windswept Forest
  - River
  - Frozen River
  - Forest
  - Birch Forest
  - Old Growth Birch Forest
- The Bush can be used in the Composter
- Using Bone Meal on a Bush places a neighbouring Bush next to the Bush if possible

### New Ambient Sounds for Desert and Badlands

- Sand, Red Sand and Terracotta of any color have a chance of playing ambient sounds when surrounded by any one of them on at least 3 sides 8 blocks away
  - block.sand.idle can be played in any biome
  - block.sand.wind only plays when in Desert or Badlands biomes
- Dead Bush blocks have a chance of playing ambient sounds when placed on top of two blocks that are any color of Terracotta, Sand or Red Sand blocks in any biome

## Changes

- The look of the temperate Cow has been slightly updated to have an extruded snout
- Beacons and their beams now render beyond 16 chunks up to the client render distance
  - To keep it easily visible at large distances, the beam is rendered thicker the further away you are
  - The beam now renders up to 2048 blocks high, up from 1024

## Technical Changes

- The Data Pack version is now 65
- The Resource Pack version is now 50

## Data Pack Versions 65

### Commands

- Text component arguments in /bossbar, /scoreboard and /team commands are now resolved before use in context of entity held in @s

### Tags

#### Block Tags

- Added \#plays_ambient_desert_block_sounds - blocks that will play ambient desert block sounds

#### Damage Type Tags

- Renamed \#bypasses_blocking back to \#bypasses_shield

### Cow Variants

- Cow variants can be data-driven by adding entries to data/\<namespace\>/cow_variant/\<id\>.json
- This feature is experimental
- Fields in file:
  - model - one of: normal, cold, warm
  - asset_id - namespaced id for this variant asset, resolves to assets/\<namespace\>/textures/\<path\>.png
  - spawn_conditions - field described in uniform variant selection above

### Item Components

#### Changes to the blocks_attacks component

- New bypassed_by field - hashtagged damage type tag (optional)
  - If specified, blocking is bypassed by these damage types
- The objects within the damage_reductions list now have a new field:
  - horizontal_blocking_angle - angle in degrees as a positive float (default: 90)
    - The maximum angle between the user's facing and the incoming attack for the block to be effective

## Resource Pack Version 50

- Updated Pig textures
- New and updated Cow textures
- Added textures for new Firefly Bush block
- Added textures for new Bush blocks

### Updated Pig textures

- Texture pig has been renamed to temperate_pig

### New and updated Cow textures and model

- Added new textures for Cow variants:
  - cold_cow
  - warm_cow
- Texture cow has been renamed to temperate_cow
- Changed the size of temperate_cow texture
- Changed the size of red_mooshroom and brown_mooshroom textures
- The temperate Cow has an updated model and texture
  - Cow models now have a snout
  - Cow models now have their legs mirrored

## Fixed bugs in 25w05a

- [MC-108495](https://bugs.mojang.com/browse/MC-108495) - Non-LivingBase entities can be on a team (and show color) but can't be targeted using team=
- [MC-165711](https://bugs.mojang.com/browse/MC-165711) - Eye of ender hitbox always lags behind the animation
- [MC-279257](https://bugs.mojang.com/browse/MC-279257) - crafting_transmute recipes don't give output if the resulting item has the same ID as the input item
- [MC-279280](https://bugs.mojang.com/browse/MC-279280) - windswept_hills is in both the warm and cold variant farm animal biome tags
- [MC-279315](https://bugs.mojang.com/browse/MC-279315) - Warm pigs do not spawn in windswept savannas
- [MC-279353](https://bugs.mojang.com/browse/MC-279353) - The minecraft:fall_damage_multiplier attribute doesn't function when riding specific rideable mobs
- [MC-279390](https://bugs.mojang.com/browse/MC-279390) - Baby zombified piglin helmet clipping
- [MC-279497](https://bugs.mojang.com/browse/MC-279497) - Structure preview outline breaks for max integer-length sizes
- [MC-279531](https://bugs.mojang.com/browse/MC-279531) - GameTest entrypoint doesn't report failures to spawn the structure
- [MC-279534](https://bugs.mojang.com/browse/MC-279534) - Display entities use interpolation duration value for teleport duration
- [MC-279543](https://bugs.mojang.com/browse/MC-279543) - Neutral Mobs don't attack the player back when attacked under certain conditions
- [MC-279556](https://bugs.mojang.com/browse/MC-279556) - The "/execute on attacker" command does not target an entity previously targeted by the "/data" command
- [MC-279577](https://bugs.mojang.com/browse/MC-279577) - Test blocks are restricted to one within a block-based structure
- [MC-279684](https://bugs.mojang.com/browse/MC-279684) - Shield blocking animation no longer plays when blocking an attack
- [MC-279685](https://bugs.mojang.com/browse/MC-279685) - Shields no longer consume durability when blocking attacks
- [MC-279688](https://bugs.mojang.com/browse/MC-279688) - Sprinting is canceled upon flying with elytra
- [MC-279692](https://bugs.mojang.com/browse/MC-279692) - Instrument component crashes the game
- [MC-279693](https://bugs.mojang.com/browse/MC-279693) - Summoned lingering potions render as splash potions
- [MC-279697](https://bugs.mojang.com/browse/MC-279697) - Llamas show a non-interactive saddle slot
- [MC-279698](https://bugs.mojang.com/browse/MC-279698) - provides_banner_pattern component does not use hash prefix
- [MC-279760](https://bugs.mojang.com/browse/MC-279760) - Typing an inline definition in the provides_trim_material component crashes the game
- [MC-279857](https://bugs.mojang.com/browse/MC-279857) - Piglins summoned by the /summon command do not pick up gold items

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2c873903a90c9633dd6bd2e3501046100daceafd/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
