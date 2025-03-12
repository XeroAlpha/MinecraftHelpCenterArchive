---
title: Minecraft Java Edition - Snapshot 20W16A
date: 2020-04-15T15:17:23Z
updated: 2025-03-12T11:15:03Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360042332451-Minecraft-Java-Edition-Snapshot-20W16A
---

15 April 2020

Bastion remnants, or "home sweet home" as Piglins would call them, are finally here! This snapshot introduces the home of the Piglins. If you scour the world you might also find ruins of some old portals.

# NEW FEATURES IN 20W16A

- Added bastion remnants
- Added ruined portals
- Added chain blocks
- Added a new music disc titled "Pigstep" by Lena Raine which can only be found in bastions

## BASTION REMNANTS

What's made of blackstone and full of Piglins and Hoglins? Bastion remnants!

- ​Added 4 separate bastion remnant types: bridge, Hoglin stable, housing units, and treasure room
- You can find these sizable structures in all biomes in the Nether except the treacherous ash-dusted towers of basalt deltas
- Explore, loot, and conquer a bastion remnant to call it your home... but beware, Piglins don't take kindly to intruders stealing their things

## RUINED PORTALS

Shattered remains of ancient nether portals. Wonder who built them?​

- They can be found in any overworld or nether biome
- Some are hidden underground, under the sea, or buried in sand

# CHANGES IN 20W16A

- Increased the amount of lava pools to make the deltas more "deltary"
- The Piglin banner pattern can now be found in bastions

# TECHNICAL CHANGES IN 20W16A

- Added a button in the GUI that generates a jigsaw structure starting from the jigsaw block, using given generation depth.
- Expanded the max size per axis of Structure Blocks from 32 to 48
- Added a JMX MBean to monitor dedicated server tick times

## JMX MONITORING

It is now possible to monitor the server tick times though JMX.  
The rationale for this is that JMX is a well known and supported monitoring technology with existing integrations and tools.

This enables server admins to hook alerts and graphing tools using ordinary JMX clients and dashboards.

### ENABLING JMX MONITORING

- A new flag enable-jmx-monitoring has been added to the server.properties file which if set to true will expose an MBean with the Object name net.minecraft.server:type=Server and two attributes averageTickTime and tickTimes exposing the tick times in milliseconds.
- In order for enabling JMX on the Java runtime you also need to add a couple of JVM flags to the startup as documented [here](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html).

# FIXED BUGS IN 20W16A

- [MC-37557](https://bugs.mojang.com/browse/MC-37557) - Sometimes a minecart sound plays/subtitle shown when loading a world
- [MC-91163](https://bugs.mojang.com/browse/MC-91163) - Certain subtitles show up when the player is too far away to hear the sound
- [MC-154617](https://bugs.mojang.com/browse/MC-154617) - Server hangs on stop due to rcon
- [MC-171020](https://bugs.mojang.com/browse/MC-171020) - New nether biomes don’t work properly in buffet worlds
- [MC-175919](https://bugs.mojang.com/browse/MC-175919) - Villagers sometimes stop farming
- [MC-177136](https://bugs.mojang.com/browse/MC-177136) - All compasses and lodestone compasses point to the same target, regardless of what type of compass it is
- [MC-177238](https://bugs.mojang.com/browse/MC-177238) - Windows symbolic link in saves/ is no longer followed as of 20w14a
- [MC-177253](https://bugs.mojang.com/browse/MC-177253) - Running a set_attributes function throws java.lang.NullPointerException if it contains an undefined attribute
- [MC-177316](https://bugs.mojang.com/browse/MC-177316) - Lodestone compass in item frame does not update after turning
- [MC-178368](https://bugs.mojang.com/browse/MC-178368) - When rotating a lodestone compass is put in the item frame the compass don’t work

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/754bbd654d8e6bd90cd7a1464a9e68a0624505dd/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
