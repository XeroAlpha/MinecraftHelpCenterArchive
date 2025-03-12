---
title: "Minecraft: Java Edition - Snapshot 21w38a "
date: 2021-09-23T15:28:47Z
updated: 2025-03-12T11:13:35Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/4409891990285-Minecraft-Java-Edition-Snapshot-21w38a
---

The second Caves & Cliffs: Part II snapshot is here! This snapshot mostly contains tweaks and bug fixes, but there are also some new technical additions such as a separate simulation distance slider and an increased thread count (no I'm not talking about the fancy sheets you're thinking about buying).

Oh, and you also seemed to enjoy Strongholds quite a lot, so we decided to add them back into the game. Enjoy!

# KNOWN ISSUES IN 21W38A

- This snapshot is still not compatible with older worlds – to play in this snapshot, you will have to create a new world
- World saving can sometimes take a very long time – if you see the world stop moving for a time, this is why

# CHANGES IN 21W38A

- Sprinting is no longer reduced to walking when gently brushing your sleeve against a wall
- Fixes for the distribution of ores

## ORE DISTRIBUTION

- Copper ore generates up to y 95 (as originally designed)
- Increased the amount of copper
- Lapis lazuli generates in blobs, like other ores (instead of spread out)

## SPRINTING

- Previously, any collision with a block would reduce sprinting to walking. Now, for very minor angles of collision with a block, players retain their sprint. For larger angles of collision, the old behavior is retained.

# TECHNICAL CHANGES IN 21W38A

- A new setting has been added: “Simulation distance”
- Maximum amount of background threads increased
- Added telemetry for world loading

## SIMULATION DISTANCE SETTING

- Entities will not be updated outside of simulation distance.
- Allows higher render distance with less CPU load.
- A new slider in video settings on the client.
- A new simulation-distance property in dedicated server properties.
- We will continue working on it with a goal of simulation distance also affecting block and fluid ticking.

## MAXIMUM AMOUNT OF BACKGROUND THREADS INCREASED

Various background tasks including worldgen are executed on a background thread pool. Its size equals the amount of available CPU threads minus one, but there was an upper limit of 7. Now this upper limit is 255. This should help higher-end machines with world-gen performance.

The upper limit can be overridden by max.bg.threads Java system property, for example when running multiple servers on a single machine.

## TELEMETRY

In this release, we are re-introducing diagnostic tracking, which was part of Minecraft: Java Edition until 2018. We are bringing it back to better understand our players and to improve their experience. Specifically, we hope to ensure stronger performance for the extremely heavy world generation in the second part of the Caves & Cliffs update later this year.

In practice, this can mean identifying technical pain points in the game, like how less powerful hardware performs in high-complexity terrain. This information will also help us prioritize various aspects of development, balance game features (by learning, for instance, that the goats are pushing every single player off the cliffs) and lend new Minecrafters a helping hand (after realizing that many of them get stuck at the same points). All data is treated according to GDPR and CCPA best practices and is used to develop a better-performing and generally more enjoyable Minecraft: Java Edition.

At this point the only implemented event is world load.

### WORLD LOAD EVENT

- Sent when loading singleplayer world or connecting to multiplayer server
- Contains following information:
  - launcher identifier
  - user identitifer (XUID)
  - client session id (changes on restart)
  - world session id (changes per world load, to be reused for later events)
  - game version
  - operating system name and version
  - Java runtime version
  - if client or server is modded (same information as on crash logs)
  - server type (single player, Realms or other)
  - game mode

# FIXED BUGS IN 21W38A

- [MC-44055](https://bugs.mojang.com/browse/MC-44055) - Game fails to switch the audio output from one device to another after the game has started (from title screen)
- [MC-236611](https://bugs.mojang.com/browse/MC-236611) - No sound for using shears on weeping, twisting, cave vines or kelp
- [MC-236618](https://bugs.mojang.com/browse/MC-236618) - Strongholds don’t generate in 21w37a
- [MC-236621](https://bugs.mojang.com/browse/MC-236621) - Liquids sometimes do not propagate
- [MC-236633](https://bugs.mojang.com/browse/MC-236633) - Random light level of 0 in sky
- [MC-236656](https://bugs.mojang.com/browse/MC-236656) - Crash when changing render distance / java.lang.ArrayIndexOutOfBoundsException: Index 28084 out of bounds for length 26136
- [MC-236665](https://bugs.mojang.com/browse/MC-236665) - Memory leak in 21w37a
- [MC-236698](https://bugs.mojang.com/browse/MC-236698) - Big Spruce Trees don’t generate in Groves
- [MC-236711](https://bugs.mojang.com/browse/MC-236711) - Starting and stopping JFR profiling multiple times within the same minute overwrites previous JFR results saved during that minute
- [MC-236718](https://bugs.mojang.com/browse/MC-236718) - Dripstone caves generate above the ground
- [MC-236795](https://bugs.mojang.com/browse/MC-236795) - Cannot start with alternate JVM due to JFR requirement
- [MC-236873](https://bugs.mojang.com/browse/MC-236873) - Problems with JFR event metadata
- [MC-236967](https://bugs.mojang.com/browse/MC-236967) - Too many aquifers on biome surfaces at Y=63 and below
- [MC-237109](https://bugs.mojang.com/browse/MC-237109) - Aquifers often generate with harsh straight borders

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/1283dff678ee5efb8e52d2fc77ec9d840317c6ca/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
