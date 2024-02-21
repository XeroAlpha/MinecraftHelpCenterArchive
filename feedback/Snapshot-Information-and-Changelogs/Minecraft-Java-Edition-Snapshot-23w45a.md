---
title: "Minecraft: Java Edition - Snapshot 23w45a"
date: 2023-11-08T15:24:30Z
updated: 2023-11-08T15:24:33Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/21146865750157-Minecraft-Java-Edition-Snapshot-23w45a
hash:
  h_01HEQRGDZB11Q3EP5HPZP2GMV9: changes
  h_01HEQRGDZBH7YGR0FQ5TH6KZJ8: technical-changes
  h_01HEQRGDZBTDN0HKCH0YSKWY09: data-pack-version-24
  h_01HEQRGDZBHH00XQD668DSWNWS: resource-pack-version-21
  h_01HEQRGDZB37AFZG9D40XS699F: breeze-mob
  h_01HEQRGDZB4SMKEPZCNXTWWTRR: added-breeze-mob
  h_01HEQRGDZBTV116R8G9FP9ZF9V: trial-spawner
  h_01HEQRGDZBEWHWY2WQCR5BKMBP: trial-chambers
  h_01HEQRGDZB6TXSHF4RFD09QBS3: known-issues
  h_01HEQRGDZBV2Q2DCHM2S4QC1NB: trial-key
  h_01HEQRGDZBT90M5JSCQG7EG6YH: fixed-bugs-in-snapshot-23w45a
  h_01HEQRGDZB541E2J455XR1GKAN: get-the-snapshot
---

We're happy to share another snapshot, this time offering an early look at some exciting new adventures waiting for you underground in the form of Trial Chambers!

Trial Chambers are designed to be challenging moments of combat and exploration hidden medium-deep below the surface of the Overworld. Trial Chambers bring new decorative and lighting blocks, new Trial Spawners to deliver a different style of multi-mob fights, and the bushy-browed Breeze, a new mob specific to Trial Chambers which will add quite a bit of chaos to your combats.

Happy Mining!

# CHANGES

- Monster Spawner now renders their inner faces when looking inside

# TECHNICAL CHANGES

- The Data Pack version is now 24
- The Resource Pack version is now 21

# DATA PACK VERSION 24

- Added experimental Breeze mob
- Added experimental Trial Spawner block
- Increased maximum value of Jigsaw structure variable size from 7 to 20
- Added trial_chambers_copper_bulb_degradation structure processor list

# RESOURCE PACK VERSION 21

- uniform font has been updated to use Unifont 15.1.04 (from 15.0.06)
- The only supported texture format is now .png

## BREEZE MOB

- Added entity models and textures for experimental Breeze mob:
  - breeze, wind_charge
- Added shader:
  - breeze_wind

## ADDED BREEZE MOB

- The Breeze is a cunning, hostile mob that can spawn via Trial Spawner in some rooms within the Trial Chambers
- The Breeze moves primarily by leaping around the target, sometimes jumping quite long distances
- An aggressive adversary, the Breeze shoots volatile wind energy in the form of wind charge projectiles at its target
- Wind charges deal a small amount of damage when colliding directly with an entity
- After colliding with an entity or a block, wind charge projectiles produce a wind burst, which knocks back entities in the area by several blocks
- Wind bursts also have the effect of 'activating' certain blocks:
  - Non-Iron Doors and Trapdoors are flipped
  - Fence Gates are flipped
  - Buttons are pressed
  - Levers are flipped
  - Bells are rung and swung
  - Lit Candles (both standalone and on cake) are extinguished
- Wind bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

## TRIAL SPAWNER

- Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion and can have variable levels of challenge in multiplayer
- The challenge level will increase for each new player a Trial Spawner notices nearby
  - Challenge level will not decrease until it is reset during a Trial Spawner's cooldown
- Unlike normal spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
  - It can only spawn a mob at positions that are within line of sight
  - It can spawn a mob regardless of any light level requirement the mob has
  - Spawned mobs are persistent
- Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
  - After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes during which it will no longer spawn mobs
- Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
- Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
- When placed in Creative, Trial Spawners have no mob type set by default
  - The mob type can be set by interacting with it while holding a Spawn Egg
- Creative and Spectator players cannot be detected or noticed by Trial Spawners

## TRIAL CHAMBERS

- Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges during the mid-game
  - Trial Chambers are made out of a variety of Copper and Tuff blocks and can be found in different sizes from large to small
  - Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
- The layout of each Trial Chamber is procedurally generated, and can include traps, reward chests and a variety of combat spaces
  - Supply chests can be found between different rooms, and give you blocks and items which help you navigate your trials
  - Reward chests are guarded by challenges in each room, and can be a source of many high level enchanted books and equipment
  - The loot found in reward chests are still being iterated, and are absolutely not final
- Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
  - Melee
    - Zombie
    - Husk
    - Slime
  - Small Melee
    - Spider
    - Cave Spider
    - Baby Zombie
    - Silverfish
  - Ranged
    - Skeleton
    - Stray
    - Skeleton with Poison Tipped Arrows
- Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
  - For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
  - The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes

### KNOWN ISSUES

- The corridors sometimes end with a dead end
- Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber

## TRIAL KEY

- An item that can only be obtained from Trial Spawners
- Trial Keys do not currently have any functionality

# FIXED BUGS IN SNAPSHOT 23W45A

- [MC-131646](https://bugs.mojang.com/browse/MC-131646) - Drowned spawners only work in biomes where drowned spawn
- [MC-177446](https://bugs.mojang.com/browse/MC-177446) - "RootVehicle" tag in playerdata entry is not upgraded
- [MC-186797](https://bugs.mojang.com/browse/MC-186797) - Functioning clock and compasses in crafting output slot
- [MC-255244](https://bugs.mojang.com/browse/MC-255244) - NBT link/reference when using /fill
- [MC-265702](https://bugs.mojang.com/browse/MC-265702) - Text components in commands accept malformed JSON
- [MC-265747](https://bugs.mojang.com/browse/MC-265747) - Punching a TNT Minecart in creative mode drops the minecart
- [MC-265875](https://bugs.mojang.com/browse/MC-265875) - Compasses, Clocks and Recovery Compasses work normally within the output slot of the crafter
- [MC-266054](https://bugs.mojang.com/browse/MC-266054) - Side Water texture on Copper bulbs
- [MC-266056](https://bugs.mojang.com/browse/MC-266056) - Mobs suffocate inside most copper grate block variants
- [MC-266063](https://bugs.mojang.com/browse/MC-266063) - Copper Doors and Trapdoors make generic metal sounds when placing
- [MC-266090](https://bugs.mojang.com/browse/MC-266090) - Light can pass through copper bulbs
- [MC-266091](https://bugs.mojang.com/browse/MC-266091) - Copper Bulbs do not cull faces correctly
- [MC-266096](https://bugs.mojang.com/browse/MC-266096) - Mobs can spawn on oxidized or waxed copper grates
- [MC-266248](https://bugs.mojang.com/browse/MC-266248) - No error message when granting/revoking an advancement that is already granted/revoked
- [MC-266256](https://bugs.mojang.com/browse/MC-266256) - Accessibility button in the Welcome screen still needs its own string
- [MC-266287](https://bugs.mojang.com/browse/MC-266287) - Can't load .dat and .nbt files (server list & saved hotbar)
- [MC-266289](https://bugs.mojang.com/browse/MC-266289) - Could not save data raids.dat and random_sequences.dat

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/9c2b37701bf77ae22df4c32fd6dd1614049ce994/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
