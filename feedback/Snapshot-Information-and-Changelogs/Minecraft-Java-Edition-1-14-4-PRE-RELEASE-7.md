---
title: "Minecraft: Java Edition - 1.14.4 PRE-RELEASE 7"
date: 2019-07-10T13:07:29Z
updated: 2019-07-18T14:52:44Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360030491732-Minecraft-Java-Edition-1-14-4-PRE-RELEASE-7
---

**Update: **Pre-Release 7 is now available and we intend for it to be the last pre-release for Minecraft 1.14.4. Please let us know on the [issue tracker](https://bugs.mojang.com/projects/MC/) if there are any major bugs.

# CHANGES IN 1.14.4 PRE-RELEASE 7

- Fixed bugs
- Performance optimizations for leaf rendering

# FIXED BUGS IN 1.14.4 PRE-RELEASE 7

- [MC-150623](https://bugs.mojang.com/browse/MC-150623) - The game crashed whilst rendering overlay: Unable to fit texture
- [MC-156389](https://bugs.mojang.com/browse/MC-156389) - Game Crashes when Shift + Command + Delete 18 characters at once on Anvil
- [MC-156407](https://bugs.mojang.com/browse/MC-156407) - Unobtainable (speed) suspicious stew can be obtained from villagers
- [MC-156574](https://bugs.mojang.com/browse/MC-156574) - Villager demand values increase/decrease indefinitely

# CHANGES IN 1.14.4 PRE-RELEASE 6

- Fixed two bugs
- Performance improvements
- Fixed a memory leak
- Removed camera pivot offset in first-person
- Improved chunk loading when travelling at high speed

# FIXED BUGS IN 1.14.4 PRE-RELEASE 6

- [MC-149018](https://bugs.mojang.com/browse/MC-149018) - High Idle CPU usage on Server Edition (Minecraft 1.14 Release)
- [MC-154271](https://bugs.mojang.com/browse/MC-154271) - Rolling shutter issue on MacOS since 1.14.3 Pre-Release 2

# CHANGES IN 1.14.4 PRE-RELEASE 5

- Fixed bugs
- Performance improvements

# FIXED BUGS IN 1.14.4 PRE-RELEASE 5

- [MC-149880](https://bugs.mojang.com/browse/MC-149880) - Villager trades wrong book
- [MC-151282](https://bugs.mojang.com/browse/MC-151282) - Villager trade GUI doesn’t show the correct price on servers if trade demand is high
- [MC-156042](https://bugs.mojang.com/browse/MC-156042) - Villager demand never goes down over time unless traded with
- [MC-156349](https://bugs.mojang.com/browse/MC-156349) - Cannot press Enter on Direct Connect
- Fixed debug reports in worlds with a dot in their name
- Fixed server freeze when Villagers fell into the void

# CHANGES IN 1.14.4 PRE-RELEASE 4

- Fixed a few bugs
- Fixed incorrect Pillager texture
- /reload and /forceload is now available to gamemasters
- function-permission-level is a new setting in server.propertiesthat controls which commands functions have access to

# FIXED BUGS IN 1.14.4 PRE-RELEASE 4

- [MC-145769](https://bugs.mojang.com/browse/MC-145769) - Villagers aren’t shutting doors behind them
- [MC-148613](https://bugs.mojang.com/browse/MC-148613) - Aquatic mobs are not spawning / Fish spawned from buckets count towards the aquatic mob cap again
- [MC-152908](https://bugs.mojang.com/browse/MC-152908) - When a player joins a server, everything that happened during the time offline queued on connecting to the server
- [MC-153406](https://bugs.mojang.com/browse/MC-153406) - Score JSON Component Crash in items
- [MC-153749](https://bugs.mojang.com/browse/MC-153749) - Trusting Foxes attack player when self-injured
- [MC-153852](https://bugs.mojang.com/browse/MC-153852) - Concrete powder deleting waterlogged blocks when falling
- [MC-155711](https://bugs.mojang.com/browse/MC-155711) - Functions capable of running commands they shouldn’t be able to (publish, debug …)
- [MC-156013](https://bugs.mojang.com/browse/MC-156013) - Breaking Blocks “re-appear” to nudge player

# CHANGES IN 1.14.4 PRE-RELEASE 3

- Fixed an issue with chunk loading

# FIXED BUGS IN 1.14.4 PRE-RELEASE 3

- [MC-151082](https://bugs.mojang.com/browse/MC-151082) - Loading chunks creates irrecoverable lag (restart required)

# CHANGES IN 1.14.4 PRE-RELEASE 2

- Fixed a few bugs
- Villagers now stock more items
- Villagers will now remember their gossip after becoming a Zombie Villager 
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

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/853bf851bda5862b7f68baf93ae86fb90571ceca/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
