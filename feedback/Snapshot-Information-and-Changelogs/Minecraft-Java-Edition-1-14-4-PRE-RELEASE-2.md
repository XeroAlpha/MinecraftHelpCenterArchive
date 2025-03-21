---
title: "Minecraft: Java Edition - 1.14.4 PRE-RELEASE 2"
date: 2019-07-04T14:53:09Z
updated: 2025-03-12T11:15:31Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360030412391-Minecraft-Java-Edition-1-14-4-PRE-RELEASE-2
hash:
  changes-in-1.14.4-pre-release-2: changes-in-1144-pre-release-2
  fixed-bugs-in-1.14.4-pre-release-2: fixed-bugs-in-1144-pre-release-2
  changes-in-1.14.4-pre-release-1: changes-in-1144-pre-release-1
  fixed-bugs-in-1.14.4-pre-release-1: fixed-bugs-in-1144-pre-release-1
---

We're now releasing the first pre-release of 1.14.4 which fixes a few bugs. Please report any bugs you find on our [bug tracker](https://bugs.mojang.com/browse/MC), it helps a lot!

**Update: **We've now released 1.14.4 Pre-Release 2.

# CHANGES IN 1.14.4 PRE-RELEASE 2

- Fixed a few bugs
- Villagers now stock more items
- Villagers will now remember their gossip after becoming a Zombie Villager 
- Villagers can now work without also restocking at the same time
- Improved performance of Villager pathfinding
- Villagers can now work without also restocking at the same time
- Gossip about players who converted a zombie villager will now last longer
- The Player Activity button on the Realm screen has been removed

# FIXED BUGS IN 1.14.4 PRE-RELEASE 2

- [MC-136318](https://bugs.mojang.com/browse/MC-136318) - Floatable mobs are unable to walk when in waterlogged blocks
- [MC-151150](https://bugs.mojang.com/browse/MC-151150) - Entities (Villagers) cause massive lag when attempting to pathfind
- [MC-151376](https://bugs.mojang.com/browse/MC-151376) - Villagers are not pathfinding towards their POI; POI detection range is too small
- [MC-151810](https://bugs.mojang.com/browse/MC-151810) - Mobs don’t try to avoid fall damage anymore
- [MC-154214](https://bugs.mojang.com/browse/MC-154214) - Chunks refusing to unload due to incorrect player ticket additions
- [MC-155147](https://bugs.mojang.com/browse/MC-155147) - Mouse acceleration with the new 1.14.3 update
- [MC-155906](https://bugs.mojang.com/browse/MC-155906) - Failed to save debug dump if the destination location contains a space

# CHANGES IN 1.14.4 PRE-RELEASE 1

- Fixed bugs
- Suspicious stew made from poppies now gives you night vision instead of speed
- Some performance optimisations 
- Added /debug report for getting more detailed information. Please include this while making bug reports about performance!

# FIXED BUGS IN 1.14.4 PRE-RELEASE 1

- [MC-100946](https://bugs.mojang.com/browse/MC-100946) - Bow with mending undraws when receiving XP while drawed
- [MC-113968](https://bugs.mojang.com/browse/MC-113968) - Zombies of village siege spawn despite gamerule doMobSpawning being false
- [MC-113970](https://bugs.mojang.com/browse/MC-113970) - Zombies of village siege do not spawn centered on a block
- [MC-134964](https://bugs.mojang.com/browse/MC-134964) - Unexpected error: java.util.NoSuchElementException
- [MC-142037](https://bugs.mojang.com/browse/MC-142037) - java.lang.NullPointerException: Initializing game
- [MC-143755](https://bugs.mojang.com/browse/MC-143755) - Arbitrary score/selector/NBT resolution using lectern without operator rights
- [MC-143886](https://bugs.mojang.com/browse/MC-143886) - Acacia leaves render improprly from a distance
- [MC-146289](https://bugs.mojang.com/browse/MC-146289) - Farmer villagers don’t stop to pick up their crops
- [MC-147844](https://bugs.mojang.com/browse/MC-147844) - Pillagers don’t pathfind around obstacles & out of water
- [MC-152094](https://bugs.mojang.com/browse/MC-152094) - End city/end ship generation gets cut at chunk borders sometimes
- [MC-152636](https://bugs.mojang.com/browse/MC-152636) - Killing a zombie right as it converts into a Drowned will drop the loot from zombie while still converting into a Drowned
- [MC-153498](https://bugs.mojang.com/browse/MC-153498) - Cyrillic letter Є is not included in the Minecraft font
- [MC-153665](https://bugs.mojang.com/browse/MC-153665) - Full villager inventory creates invisible items
- [MC-153712](https://bugs.mojang.com/browse/MC-153712) - Java using 100-200% CPU (MacOS)
- [MC-153766](https://bugs.mojang.com/browse/MC-153766) - Rabbits no longer need sand/grass in order to spawn in deserts/tundras
- [MC-153892](https://bugs.mojang.com/browse/MC-153892) - Mending slows down breaking blocks
- [MC-154019](https://bugs.mojang.com/browse/MC-154019) - Beacon deactivate sound not sounds when you break the base
- [MC-154031](https://bugs.mojang.com/browse/MC-154031) - villagers give away all food if they want to share it
- [MC-154068](https://bugs.mojang.com/browse/MC-154068) - parrots occasionally disappearing when you take them from a boat
- [MC-154201](https://bugs.mojang.com/browse/MC-154201) - Trying to trade with villager immediately closes trading menu for some villagers
- [MC-154362](https://bugs.mojang.com/browse/MC-154362) - Crossbow has to re-load when mending takes place
- [MC-154509](https://bugs.mojang.com/browse/MC-154509) - Bashkir letters Ҙ, ҙ, Ҡ, ҡ, Ҫ, and ҫ are not included in the Minecraft font
- [MC-154668](https://bugs.mojang.com/browse/MC-154668) - Invalid characters crash the game in jigsaw block input upon pressing enter
- [MC-154830](https://bugs.mojang.com/browse/MC-154830) - All wall signs use oak color on maps
- [MC-155092](https://bugs.mojang.com/browse/MC-155092) - Zombie sieges can happen on mushroom islands
- [MC-155104](https://bugs.mojang.com/browse/MC-155104) - when closing a menu while moving the mouse, the screen will move in that direction
- [MC-155172](https://bugs.mojang.com/browse/MC-155172) - Hostile Wolf AI has been broken. Wolves can no longer attack enemies efficiently.
- [MC-155238](https://bugs.mojang.com/browse/MC-155238) - Villagers picking up workstation through wall
- [MC-155345](https://bugs.mojang.com/browse/MC-155345) - ConcurrentModificationException when a player leaves an active raid
- [MC-155571](https://bugs.mojang.com/browse/MC-155571) - Silverfish & Endermite spawners no longer functioning

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the "Launch Options" tab.

Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/a7023b92091ca5872d35b17c8aab1c6daa833a69/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
