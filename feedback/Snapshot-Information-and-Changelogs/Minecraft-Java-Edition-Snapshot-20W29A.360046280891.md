---
title: Minecraft Java Edition - Snapshot 20W29A
date: 2020-07-15T16:01:49Z
updated: 2025-03-12T11:15:01Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360046280891-Minecraft-Java-Edition-Snapshot-20W29A
hash:
  spawnpoint-setworldspawn: spawnpoint--setworldspawn
---

15 July 2020

Today we’re releasing Snapshot 20w29a for Minecraft Java Edition. We found some bugs to squash, but also snuck in a technical change or two!

# CHANGES IN 20W29A

- Tools are now sorted based on material in the creative inventory

# TECHNICAL CHANGES IN 20W29A

## COMMANDS

### SPAWNPOINT & SETWORLDSPAWN

Added angle parameter for setting the default facing angle of a respawning player.  
Syntax: spawnpoint \[targets\] \[pos\] \[angle\]  
Syntax: setworldspawn \[pos\] \[angle\]  
New parameters:

- angle - Floating point angle in degrees. Supports the relative ~ modifier

## CUSTOMIZED WORLD GENERATION

- worldgen/noise_settings can now contain noise configurations

# FIXED BUGS IN 20W28A

- [MC-194464](https://bugs.mojang.com/browse/MC-194464) - “large_oak_foliage_placer” incorrectly serializes to “blob_foliage_placer”
- [MC-194298](https://bugs.mojang.com/browse/MC-194298) - Bone meal can’t create flowers
- [MC-194257](https://bugs.mojang.com/browse/MC-194257) - Several instances of “snowy” being spelled as “snovy” in the vanilla_worldgen configuration
- [MC-194220](https://bugs.mojang.com/browse/MC-194220) - Totems of Undying give you Fire Resistance II instead of the maximum Fire Resistance I
- [MC-194200](https://bugs.mojang.com/browse/MC-194200) - Birch trees are not generated correctly in the Birch Forest and Birch Forest Hills biomes
- [MC-194173](https://bugs.mojang.com/browse/MC-194173) - Hitboxes are rendered offset while picking up items or experience on graphics settings Fast and Fancy
- [MC-193662](https://bugs.mojang.com/browse/MC-193662) - Player flying in creative slightly above blocks while sneaking and jumping are restrained to that block
- [MC-193560](https://bugs.mojang.com/browse/MC-193560) - Enchantment glint doesn’t render on elytra in specific circumstances
- [MC-192021](https://bugs.mojang.com/browse/MC-192021) - Enchantment Glint effect on transparent blocks not properly rendered on Fabulous graphic
- [MC-191623](https://bugs.mojang.com/browse/MC-191623) - Ender dragon battle music does not stop after ender dragon has been defeated
- [MC-191031](https://bugs.mojang.com/browse/MC-191031) - Players in spectator mode can interact with boats
- [MC-190559](https://bugs.mojang.com/browse/MC-190559) - Baby striders don’t die when it’s raining and they are in lava
- [MC-189788](https://bugs.mojang.com/browse/MC-189788) - Certain mobs in boats sometimes take drowning damage while the boat is moving
- [MC-185019](https://bugs.mojang.com/browse/MC-185019) - Worldgen settings with empty structures parameter generates all structures extremely frequent
- [MC-176836](https://bugs.mojang.com/browse/MC-176836) - Unarmed vindicators raise their arm in offensive way when attacking
- [MC-176778](https://bugs.mojang.com/browse/MC-176778) - Camera is reset when a block reappears due to high server latency
- [MC-166718](https://bugs.mojang.com/browse/MC-166718) - Mobs no longer suffocate inside of soul sand, farmland or grass paths
- [MC-158735](https://bugs.mojang.com/browse/MC-158735) - Pillagers without crossbows hold their arm up, in a way that may be offensive to some people
- [MC-153230](https://bugs.mojang.com/browse/MC-153230) - Players in spectator mode can stop minecarts

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/ea9a65a38e000fe76b51fa36e923c09d5d8fa473/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
