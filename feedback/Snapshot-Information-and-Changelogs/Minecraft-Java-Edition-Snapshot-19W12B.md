---
title: "Minecraft: Java Edition - Snapshot 19W12B"
date: 2019-03-28T17:12:10Z
updated: 2025-03-12T11:15:32Z
categories: Snapshot Information and Changelogs
tags:
  - java
  - 19W12B
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360025668532-Minecraft-Java-Edition-Snapshot-19W12B
---

**19 March 2019**

# CHANGES IN 19W12B

- Fixed bugs
- Tweaked Iron Golem spawning
  - Spawn chance is slightly increased
  - It now requires 5 Villagers to gossip instead of 10
  - Villagers that are recently hurt by zombies have a higher chance of spawning an Iron Golem

We're actively looking for feedback regarding the changes to Iron Golem spawning.

# FIXED BUGS IN 19W12B

- [MC-141155](https://bugs.mojang.com/browse/MC-141155) - Structure block integrity solely dependent on structure location, integrity seed is ignored
- [MC-141484](https://bugs.mojang.com/browse/MC-141484) - Entities stay on the global list even when the chunk unloaded
- [MC-145731](https://bugs.mojang.com/browse/MC-145731) - Turning in boats causes extremely annoying frame issue
- [MC-145864](https://bugs.mojang.com/browse/MC-145864) - Villagers see players in spectator
- [MC-146218](https://bugs.mojang.com/browse/MC-146218) - Stuttering screen when spectating someone
- [MC-146244](https://bugs.mojang.com/browse/MC-146244) - /clear removes item in cursor in creative mode even if it's not the item that should be cleared
- [MC-146246](https://bugs.mojang.com/browse/MC-146246) - Crash when a conduit is activated
- [MC-146252](https://bugs.mojang.com/browse/MC-146252) - You can no longer dye signs in survival mode
- [MC-146258](https://bugs.mojang.com/browse/MC-146258) - Head in glass blacks out world in first person view

# CHANGES IN 19W12A

- Tweaked Iron Golem spawning
- Baby Villagers now play in villages
- Villager AI and trade improvements
- Cut sandstone and cut red sandstone is now available (including slabs)
- Rewrote sound system
  - Reduces stutterings when playing sounds
- Bugfixes

# FIXED BUGS IN 19W12A

- [MC-41113](https://bugs.mojang.com/browse/MC-41113) - /clear turns items held by mouse into ghost items
- [MC-50367](https://bugs.mojang.com/browse/MC-50367) - Bad hit boxes and eye positions
- [MC-122885](https://bugs.mojang.com/browse/MC-122885) - Attempting to backup a world with a path longer than 260 results in a crash
- [MC-137451](https://bugs.mojang.com/browse/MC-137451) - Mobs heads rotate super quickly when looking around and at other entities
- [MC-137725](https://bugs.mojang.com/browse/MC-137725) - Advancements not updated in 1.14 snapshots
- [MC-137761](https://bugs.mojang.com/browse/MC-137761) - Loom model and placement is incorrect
- [MC-138220](https://bugs.mojang.com/browse/MC-138220) - Random ticks occur while player is in spectator mode
- [MC-138491](https://bugs.mojang.com/browse/MC-138491) - Crash when rendering a sign with the vanilla datapack disabled
- [MC-138580](https://bugs.mojang.com/browse/MC-138580) - Adventure mode does not prevent dyeing signs
- [MC-138659](https://bugs.mojang.com/browse/MC-138659) - Totem of Undying death animation model doesn't match with CustomModelData
- [MC-139440](https://bugs.mojang.com/browse/MC-139440) - Illager banners can be copied
- [MC-139458](https://bugs.mojang.com/browse/MC-139458) - Horse texture is sometimes translucent
- [MC-140354](https://bugs.mojang.com/browse/MC-140354) - Evokers continue attacking nothing after target dies
- [MC-140409](https://bugs.mojang.com/browse/MC-140409) - Scaffolding Texture
- [MC-141286](https://bugs.mojang.com/browse/MC-141286) - Teleporting big distance freezes the server
- [MC-142466](https://bugs.mojang.com/browse/MC-142466) - Book page flipping sound seems to only play on left or right channel depending on player's position
- [MC-143390](https://bugs.mojang.com/browse/MC-143390) - Non-existing CatType summons an invisible cat
- [MC-143412](https://bugs.mojang.com/browse/MC-143412) - Trader llamas do not join llama caravan unless a trader llama is the leader
- [MC-143736](https://bugs.mojang.com/browse/MC-143736) - Trader llama actively attacks the zombie pigmans
- [MC-144501](https://bugs.mojang.com/browse/MC-144501) - Horses drops two leather armor when killed
- [MC-144612](https://bugs.mojang.com/browse/MC-144612) - Ender dragon fly incorrectly
- [MC-145668](https://bugs.mojang.com/browse/MC-145668) - Front facing camera up/down directions are reversed in F5/third person
- [MC-145689](https://bugs.mojang.com/browse/MC-145689) - Villagers never stop running after being attacked by a zombie
- [MC-145712](https://bugs.mojang.com/browse/MC-145712) - Some villagers do not go to bed at night
- [MC-145732](https://bugs.mojang.com/browse/MC-145732) - Villager trade experience changes based on what trade your looking at
- [MC-145744](https://bugs.mojang.com/browse/MC-145744) - Villager AI pegs CPU at 100%, causes lag in 19w11a
- [MC-145787](https://bugs.mojang.com/browse/MC-145787) - When entering a bed from the block next to it or while standing on it, the camera moves too far into the player model
- [MC-145802](https://bugs.mojang.com/browse/MC-145802) - Enderman never attacking again once you put on creative mode and back to survival
- [MC-145817](https://bugs.mojang.com/browse/MC-145817) - Villager lost their levels after becoming a zombie and getting cured
- [MC-145857](https://bugs.mojang.com/browse/MC-145857) - Farmer villagers don't farm
- [MC-145872](https://bugs.mojang.com/browse/MC-145872) - Villagers walk around their work stations and bell
- [MC-145925](https://bugs.mojang.com/browse/MC-145925) - Realms button crash NoSuchMethodError: RealmsClientOutdatedScreen
- [MC-145956](https://bugs.mojang.com/browse/MC-145956) - Breaking doors with villagers crashes the game
- [MC-145994](https://bugs.mojang.com/browse/MC-145994) - Watching Server java.lang.Unsafe.park(Native Method)
- [MC-146005](https://bugs.mojang.com/browse/MC-146005) - Suspicious stews sold by farmers have an extremely short effect

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the "Launch Options" tab.

Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/37d6d9753b8eac2420e9deba132c38e00c8204c3/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
