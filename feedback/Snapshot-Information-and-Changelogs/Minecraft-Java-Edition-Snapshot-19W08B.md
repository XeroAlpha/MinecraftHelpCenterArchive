---
title: "Minecraft: Java Edition - Snapshot 19W08B"
date: 2019-02-20T15:43:06Z
updated: 2019-02-21T15:11:59Z
categories: Snapshot Information and Changelogs
tags:
  - java
  - snapshot
  - 19W08A
link: https://feedback.minecraft.net/hc/en-us/articles/360023928672-Minecraft-Java-Edition-Snapshot-19W08B
---

**21 February 2019**

# CHANGES IN 19W08B

-   Fixed a couple of crashes

# CHANGES IN 19W08A

-   One Iron Golem now spawns in all villages upon generation
-   Improvements to invisibility to allow it to correctly work in many cases where it didn\'t but you\'d expect it to
-   Added Leather Horse Armor
-   Textures for potion effects are now split into individual files
-   Command parser now accepts \' as string quotes. Inside \'-quoted string \" is handled as normal character and requires no escaping (and vice-versa) - so now it\'s easier to input text components in NBT.
-   Stopped foxes, dolphins, and pandas from having armor equipped onto them via dispenser
-   Changed bounding box and eye height of foxes (prevents them from drowning when swimming)
-   Foxes that trusted you in the previous snapshot will unfortunately no longer be trusting

## LEATHER HORSE ARMOR

-   Added a new armor type for horses
-   Dye it in lots, yes LOTS, of different colors

# FIXED BUGS IN 19W08B

-   [MC-144469](https://bugs.mojang.com/browse/MC-144469) - Replacing same block at location will cause animation to stop/stuck and can crash if using other block type

# FIXED BUGS IN 19W08A

-   [MC-10901](https://bugs.mojang.com/browse/MC-10901) - Various mobs can see invisible players
-   [MC-64581](https://bugs.mojang.com/browse/MC-64581) - Game freezes a couple of seconds when changing mipmap level parameter
-   [MC-68563](https://bugs.mojang.com/browse/MC-68563) - Barrier particles display random textures when switching resource packs
-   [MC-79320](https://bugs.mojang.com/browse/MC-79320) - Invisible villagers and wandering traders can be seen by zombies
-   [MC-106430](https://bugs.mojang.com/browse/MC-106430) - \"Glowing\" shader not reloaded on resource pack reload
-   [MC-116969](https://bugs.mojang.com/browse/MC-116969) - Mobs look at invisible mobs / players
-   [MC-129855](https://bugs.mojang.com/browse/MC-129855) - Turtle egg block model has stretched texture
-   [MC-130564](https://bugs.mojang.com/browse/MC-130564) - Server resource packs can brick the client for up to minutes!
-   [MC-131368](https://bugs.mojang.com/browse/MC-131368) - Snow golems attack invisible mobs
-   [MC-134625](https://bugs.mojang.com/browse/MC-134625) - Tesselating liquid in world - NullPointerException
-   [MC-137009](https://bugs.mojang.com/browse/MC-137009) - Shulker Detection Range Incorrect for invisible targets
-   [MC-137722](https://bugs.mojang.com/browse/MC-137722) - Smooth quartz blocks do not use the proper \"smooth\" texture
-   [MC-137841](https://bugs.mojang.com/browse/MC-137841) - Villagers don\'t run away from ravagers
-   [MC-138022](https://bugs.mojang.com/browse/MC-138022) - Wither roses can be placed on unusual blocks like hoppers
-   [MC-143398](https://bugs.mojang.com/browse/MC-143398) - Recalibrated the connection to the bovine plane
-   [MC-138558](https://bugs.mojang.com/browse/MC-138558) - Cats and ocelots run away from players in creative mode
-   [MC-139739](https://bugs.mojang.com/browse/MC-139739) - Bad Omen\'s icon is bugged in Programmer Art
-   [MC-140379](https://bugs.mojang.com/browse/MC-140379) - New village church stained window is one block lower
-   [MC-140676](https://bugs.mojang.com/browse/MC-140676) - Sweet berry bush do not burn
-   [MC-141318](https://bugs.mojang.com/browse/MC-141318) - Server crashes when an arrow, which has a non-vanilla sound event in it\'s SoundEvent tag, hit a block or mob
-   [MC-141911](https://bugs.mojang.com/browse/MC-141911) - Fire charges cannot ignite campfires
-   [MC-141987](https://bugs.mojang.com/browse/MC-141987) - Splash water bottle does not extinguish campfire
-   [MC-142850](https://bugs.mojang.com/browse/MC-142850) - Baby pandas never spawn naturally
-   [MC-143983](https://bugs.mojang.com/browse/MC-143983) - Mojang logo can be changed using texture pack
-   [MC-144080](https://bugs.mojang.com/browse/MC-144080) - Clicking anywhere in \"Video Settings\...\" play\'s the click sound
-   [MC-144083](https://bugs.mojang.com/browse/MC-144083) - Cannot drag slider in Options
-   [MC-144092](https://bugs.mojang.com/browse/MC-144092) - Fox offspring don\'t trust the player
-   [MC-144142](https://bugs.mojang.com/browse/MC-144142) - Foxes take and eat things while sleeping
-   [MC-144161](https://bugs.mojang.com/browse/MC-144161) - Warning on game startup: \"File minecraft:sounds/mob/fox/bark5.ogg does not exist, cannot add it to event minecraft:entity.fox.bark\"

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the \"Launch Options\" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/045006b74b84a8e04e0e6e0c89c8069c9476938f/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
