---
title: "Minecraft: Java Edition - Snapshot 18W49A"
date: 2018-12-05T17:59:28Z
updated: 2025-03-12T11:15:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360020603951-Minecraft-Java-Edition-Snapshot-18W49A
---

5 December 2018

**CHANGES IN 18W49A**

- Updated savanna villages
- Added snowy villages
- Added Berry Bushes
- Added Berries
- Changes to raids
- New loot table function: copy_nbt

**BERRIES**

- Delicious!
- Not very filling!
- Plant your berries in the ground and look with your special eyes as they grow up into a strong, independent bush!

**BERRY BUSHES**

- Commonly found in Taiga, Taiga Hills, and Taiga Mountains
- Rarely found in Snowy Taiga and Snowy Taiga Hills and Snowy Taiga Mountains
- You can stand inside them, but be careful, it will hurt to move
- Has 4 stages of growth. Sapling, no berries, some berries, full berries
- Drops 1-2 berries in younger stage, 2-3 in full growth stage
- Supports bonemeal!

**RAID CHANGES**

- There's now two waves per Bad Omen level
- Beast now has a possibility to be a part of every wave
- You now have to complete a wave before the next one starts

**NEW LOOT TABLE FUNCTION COPY_NBT**

- Copies NBT from source to item tags.

**PARAMETERS**

- source - may be this, killer, killer_player or block_entity
- ops - list of copy operations:
  - source - source path (same as /data commands)
  - target - target path
  - op - replace, append (for lists), merge - for compound tags
- entity - source of profile (see note about entity target parameter for values, will do nothing if it's not player).

**FIXED BUGS IN 18W49A**

- [MC-111480](https://bugs.mojang.com/browse/MC-111480) - Firework boosting doesn't work in the first world loaded after a game start / if player has entity id 0
- [MC-137647](https://bugs.mojang.com/browse/MC-137647) - Firework Rockets Fired From Crossbow Slide Across The Ground
- [MC-137688](https://bugs.mojang.com/browse/MC-137688) - A firework rocket shot by a crossbow doesn't explode on entities
- [MC-137848](https://bugs.mojang.com/browse/MC-137848) - Shulker boxes dont drop when mined by hand
- [MC-138067](https://bugs.mojang.com/browse/MC-138067) - Replacing filled jukebox drops record
- [MC-138641](https://bugs.mojang.com/browse/MC-138641) - Shulker boxes no longer retain "Lock" nbt when being broken
- [MC-139555](https://bugs.mojang.com/browse/MC-139555) - /data modify copies source nbt to destination nbt as reference
- [MC-139712](https://bugs.mojang.com/browse/MC-139712) - Copying one half of unrecognised Unicode character crashes client
- [MC-139935](https://bugs.mojang.com/browse/MC-139935) - Infinite loop when a raid is searching for a spawn position
- [MC-139979](https://bugs.mojang.com/browse/MC-139979) - Raid never finishes if raid mobs aren't killed by player
- [MC-139994](https://bugs.mojang.com/browse/MC-139994) - Raid never finishes if the player is set to peaceful mode when subjected to raids
- [MC-140069](https://bugs.mojang.com/browse/MC-140069) - Banners lose their name when placed
- [MC-140113](https://bugs.mojang.com/browse/MC-140113) - Raid bar will not decrease when raid mobs walked into the nether portal, end portal or end gateway

**GET THE SNAPSHOT**

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the "Launch Options" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/5b6eb767f6708d351e3d1009a44115bb033b854f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
