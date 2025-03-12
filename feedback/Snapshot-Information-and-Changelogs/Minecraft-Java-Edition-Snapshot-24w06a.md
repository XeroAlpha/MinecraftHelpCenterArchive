---
title: "Minecraft: Java Edition - Snapshot 24w06a"
date: 2024-02-14T16:02:47Z
updated: 2025-03-12T10:45:13Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/24116545955213-Minecraft-Java-Edition-Snapshot-24w06a
hash:
  h_01HPM5NQQBRWA7ZHDFG3FFKJQ8: experimental-features
  h_01HPM5NQQBVY87E7PFSN9FE1X1: wind-charge
  h_01HPM5NQQBNJMF83K923W0KXM2: vault
  h_01HPM5NQQBKEHC0R261T4MK755: changes
  h_01HPM5NQQBEDCFRV100JEYK6ZK: armadillo
  h_01HPM5NQQBY0YX2W06BYPN0H3K: tamed-wolves-health-and-damage
  h_01HPM5NQQB5PGFC3HMYCGTNTEY: japanese-font-variants
  h_01HPM5NQQBM93N0EPSXCS6GYED: technical-changes
  h_01HPM5NQQBVXGJJTREAMRM6NS1: data-pack-version-31
  h_01HPM5NQQBPT0J5X0WA1GDWTM8: tags
  h_01HPM5NQQB1TWH4VM679GMA9ET: block-tags
  h_01HPM5NQQBTN185XG3B7C2AZH7: resource-pack-version-26
  h_01HPM5NQQB6GV0X9SYY54WJ20G: font-variant-filters
  h_01HPM5NQQBG2QW3XE9GDPE7DQV: fixed-bugs-in-24w06a
  h_01HPM5NQQB4DYCMWKM3VJZ8SJS: get-the-snapshot
---

Poof! Here's snapshot 24w06a with the new experimental Wind Charge item and optimizations for Hoppers... among other changes!

We'd love to get your feedback on the new Wind Charge feature over at the official feedback site: [Let's talk about Wind Charges!](https://aka.ms/mcwindchargefeedback)

We've also made a change so that a hopper will no longer try to pick up item entities if there is a full block placed above it. This will improve performance for many redstone builds, but will break some machines that relied on glitching items into a block above a hopper.

Happy parkouring!

## EXPERIMENTAL FEATURES

### WIND CHARGE

- Become the Breeze! Using a Wind Charge will fire off a wind charge projectile similar to the Breeze's
- A Wind Charge fired by a player will grant 10% more knockback than a Breeze's, but have a much smaller area of impact
- Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
- The Breeze drops between 4-6 Wind Charges when killed
- There is a half-second cooldown after each use
- Wind Charges can be fired from a dispenser
- Players that launch themselves with a wind charge only accumulate fall damage below the y-level of where they collided with the wind burst

### VAULT

- Tweaked the texture of Vaults to make them easier to distinguish from Trial Spawners

## CHANGES

- Final tweaks to Armadillo
- Updates to Tamed Wolves health and damage
- Added option to use Japanese variants of CJK characters
- Hoppers will no longer try to pick up item entities if there is a full block placed above it

### ARMADILLO

- Armadillos do not panic when damaged but roll up instead, and hide their head and feet
- Armadillos peek out to see if “the coast is clear” before unrolling
- New animations and sounds for rolling up and unrolling + the peek out animation

With these changes the Armadillo work is done for now, and we are switching our attention to the Wolf Armor instead.

### TAMED WOLVES HEALTH AND DAMAGE

- Tamed Wolves now have 40 health points (20 hearts) instead of 20 health points (10 hearts)
- They no longer take half of the damage from most environmental sources like they used to do
  - In most cases this change will make no difference given the health boost, but now they can withstand more damage from players and arrows
- Feeding a Wolf now heals twice as many health points

### JAPANESE FONT VARIANTS

- New option has been added to select Japanese variants for some CJK characters
- Replacement glyphs come from Japanese version of Unifont font
- New option is included in new "Font Settings" menu, accessible from "Language" menu
- Default value of this option is based on system locale language setting
- "Force Unicode" button has been moved to "Font Settings"

## TECHNICAL CHANGES

- The Data Pack version is now 31
- The Resource Pack version is now 26
- Improved hopper performance
- Added JFR (Java Flight Recorder) events for individual chunk reads (minecraft.ChunkRegionRead) and writes (minecraft.ChunkRegionWrite)
- Maximum length of a command in a function (including macro expansions) can no longer exceed 2,000,000 characters
- Reduced amount of data sent by the server during login by reusing parts of the vanilla datapack

## DATA PACK VERSION 31

- Potion effect amplifiers are restricted between 0 and 255 again
  - The former behavior of effects such as Jump Boost, Levitation, and Mining Fatigue over 127 has been replaced with new attributes
- Added generic.gravity attribute that controls blocks/tick^2 acceleration downward
- Added generic.safe_fall_distance attribute to control the fall distance after which the entity will take fall damage
- Added generic.fall_damage_multiplier attribute to multiply overall fall damage amount
- Renamed horse.jump_strength to generic.jump_strength, and now applies to all entities
  - This controls the base impulse from a jump (before jump boost or modifier on block)
- Added player.block_break_speed attribute that acts as a multiplier over block breaking speed for players
- All block positions are now stored as an array of 3 integers instead of a map of X, Y, and Z
- FlowerPos and HivePos in Bees have been renamed to flower_pos and hive_pos
- FlowerPos in Beehives has been renamed to flower_pos
- BeamTarget in End Crystals has been renamed to beam_target
- Leash in all leashable entities has been renamed to leash
- PatrolTarget in patrolling mobs has been renamed to patrol_target
- ExitPortal in End Gateways has been renamed to exit_portal
- WanderTarget in Wandering Traders has been renamed to wander_target

### TAGS

#### BLOCK TAGS:

- Added 'minecraft:blocks_wind_charge_explosions' for blocks not impacted by the explosion when hit by Wind Charge.

## RESOURCE PACK VERSION 26

- Added font variant filters to font providers

### FONT VARIANT FILTERS

- Every glyph provider can now be enabled or disabled based on certain set of variants
- Available variants are currently hardcoded and controlled by font options menu
  - Current variants:
    - uniform - wired to "Force Uniform" button
    - jp - wired to "Japanese Glyph Variants" button
- Filters are defined in section called filter, available for every glyph provider
  - Keys in that object are variant names (for example uniform)
  - Glyph provider will be included only when value in filter matches actual value of variant in key

## FIXED BUGS IN 24W06A

- [MC-72151](https://bugs.mojang.com/browse/MC-72151) - Snow Golem's snowballs damage wolves instead of pushing them
- [MC-193202](https://bugs.mojang.com/browse/MC-193202) - Tamed wolf health resets when NBT is loaded (e.g. relog)
- [MC-259142](https://bugs.mojang.com/browse/MC-259142) - Hoppers with barrel facing downwards on top picking up item
- [MC-261846](https://bugs.mojang.com/browse/MC-261846) - Japanese language uses a Chinese font
- [MC-264684](https://bugs.mojang.com/browse/MC-264684) - Too long macro silently fails
- [MC-267512](https://bugs.mojang.com/browse/MC-267512) - Invulnerable ghasts can be killed with reflected fireballs
- [MC-267917](https://bugs.mojang.com/browse/MC-267917) - Baby armadillos don't make an eating sound when feeding them spider eyes
- [MC-267940](https://bugs.mojang.com/browse/MC-267940) - Armadillo's scute drop timer is not saved to data
- [MC-268065](https://bugs.mojang.com/browse/MC-268065) - Armadillos with no AI roll up after being attacked
- [MC-268091](https://bugs.mojang.com/browse/MC-268091) - "Shuniji", "Dragon Fish" and "Axolotl" no longer play underwater
- [MC-268096](https://bugs.mojang.com/browse/MC-268096) - Singleplayer client discards synced biome tags
- [MC-268179](https://bugs.mojang.com/browse/MC-268179) - Horse armor and wolf armor disappear when right-clicking in the air
- [MC-268189](https://bugs.mojang.com/browse/MC-268189) - "block.vault.fall" uses placeholder sounds

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/703cffc390ff71b7900d7a4356f48bc2108b448e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
