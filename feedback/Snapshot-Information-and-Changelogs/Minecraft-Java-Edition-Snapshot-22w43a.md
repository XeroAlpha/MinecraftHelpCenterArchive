---
title: "Minecraft: Java Edition - Snapshot 22w43a"
date: 2022-11-02T14:31:05Z
updated: 2025-02-27T12:25:05Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/10330243077261-Minecraft-Java-Edition-Snapshot-22w43a
---

Did you know that Camels walk by lifting both legs on one side at the same time? Yes, in snapshot 22w43a, Minecraft knows too! This snapshot also contains another round of tweaks to the Creative Inventory.

Happy Mining!

# CHANGES IN 22W43A

- Changed the colors of the Camel Spawn Egg
- Tweaked Camel walk cycle animation
- Fence Gates no longer provide center support beneath them
- The Chat Reporting screen now shows when the player being reported rejoined chat
- More Changes to the Creative Inventory
- Added Draft Player Reports

## MORE CHANGES TO THE CREATIVE INVENTORY

A lot of feedback has come pouring in as a result of the creative inventory ordering changes.

### CHANGES

- Change the icons of creative tabs for better color coding as well as show most iconic visuals
- Nature Blocks tab has been renamed to Natural Blocks
- Moved dirts and stones to top of Natural Blocks tab which was a big ask from many people (saying they use many of those blocks more than flowers etc)
- Fixed Water Bottles not populating in the Consumables tab
- Reordered Quartz so Smooth Quartz is a separate section of blocks
- Climbable plant blocks are now together in the Natural Blocks tab
- Fixed order of Waxed Copper blocks
- Fixed order of Coral Blocks to be consistent
- Made sure Netherrack was next to Nylium in Natural Blocks tab
- Reordered equipment so golden tools and weapons were in a logical order
- Moved normal Rails to be before special Rails
- Order colored blocks by their gradient (Wool, Terracotta, Candles, Banners, Stained Glass, etc)
- Moved Signs up higher in the Functional Blocks tab as it is used quite often by players
- Basalt blocks are now found after Nether Brick blocks in the Building Blocks tab, next to Blackstone
- Generally reordered the plants of the Natural Blocks tab

###  ADDITIONS

- Added to Redstone Blocks tab
  - Boat with Chests
  - Bell
  - Big Dripleaf
  - White Wool next to Sculk Sensor
  - String next to Tripwire Hook
  - Redstone Ores
  - Chiselled Bookshelf
- Added to Consumables tab
  - Milk Buckets
- Added to Functional Blocks tab
  - Ominous Banner
  - Dragon Egg
  - Lectern
  - Lightning Rod
  - Note Block
- Added to Crafting tab
  - Snowball
- Added to Spawn Eggs tab
  - Spawner
- Added to Combat tab
  - TNT
  - End Crystal
- Added to Tools & Utilities tab
  - Bone Meal

## ADDED DRAFT PLAYER REPORTS

Player Reports can now be kept temporarily as a draft while connected to a server.

- When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
  - The draft will always be kept if the screen was forcefully closed (e.g. player dying)
- Draft reports are kept until the player leaves the current server or world
  - When leaving, the player will be prompted to either discard or finish and send the report

# TECHNICAL CHANGES IN 22W43A

- Migrated linear algebra types to Java OpenGL Math Library (JOML)

## NETWORK PROTOCOL

- Servers can now lazily distribute players’ profile public keys along with their first chat packet
- Profile public keys will now be refreshed without reconnecting
- Clients now reset their chat session on receiving a login packet

# FIXED BUGS IN 22W43A

- [MC-84873](https://bugs.mojang.com/browse/MC-84873) - DeathTime values 20+ cause corrupted mobs
- [MC-92017](https://bugs.mojang.com/browse/MC-92017) - Shield damage direction is incorrect
- [MC-128003](https://bugs.mojang.com/browse/MC-128003) - When destroying one block of tall seagrass, the other block becomes air when destroyed, rather than water
- [MC-188247](https://bugs.mojang.com/browse/MC-188247) - Explosions from end crystals can’t be blocked by shields
- [MC-188506](https://bugs.mojang.com/browse/MC-188506) - AngryAt cannot be manually applied to endermen
- [MC-189911](https://bugs.mojang.com/browse/MC-189911) - Splash water bottles don’t extinguish mobs and player
- [MC-191948](https://bugs.mojang.com/browse/MC-191948) - Ghast fireballs explosions still inflict damage when blocked by a shield
- [MC-198493](https://bugs.mojang.com/browse/MC-198493) - Villagers lose their discounts when relogging while it is a zombie villager
- [MC-200006](https://bugs.mojang.com/browse/MC-200006) - Explosions from beds and respawn anchors can’t be blocked by shields
- [MC-202513](https://bugs.mojang.com/browse/MC-202513) - Weeping vines and twisting vines are not grouped with regular vines in creative inventory
- [MC-222407](https://bugs.mojang.com/browse/MC-222407) - Endermen holding big dripleaf stems don’t drop big dripleaves upon being killed
- [MC-244694](https://bugs.mojang.com/browse/MC-244694) - The sounds of goats stomping and ramming aren’t controlled by the “Friendly Creatures” sound slider
- [MC-249691](https://bugs.mojang.com/browse/MC-249691) - Nylium is not grouped with netherrack in the Creative inventory
- [MC-252214](https://bugs.mojang.com/browse/MC-252214) - Going into water does not extinguish the fire on you if you’re in a boat
- [MC-253542](https://bugs.mojang.com/browse/MC-253542) - Spawner blocks with SpawnPotential and no SpawnData will crash during worldgen
- [MC-254597](https://bugs.mojang.com/browse/MC-254597) - Mobs hurt by water don’t take water damage when they are on a boat
- [MC-254634](https://bugs.mojang.com/browse/MC-254634) - POIs are not created properly when upgrading worlds
- [MC-256462](https://bugs.mojang.com/browse/MC-256462) - If camel is sitting while exiting and reloading the world, it will play the sitting animation again
- [MC-256476](https://bugs.mojang.com/browse/MC-256476) - Panorama Scroll Speed isn’t saved
- [MC-256483](https://bugs.mojang.com/browse/MC-256483) - Acacia hanging signs cannot be crafted
- [MC-256494](https://bugs.mojang.com/browse/MC-256494) - Birch hanging signs cannot be crafted
- [MC-256495](https://bugs.mojang.com/browse/MC-256495) - Z-fighting occurs when the legs of camels intersect one another
- [MC-256502](https://bugs.mojang.com/browse/MC-256502) - Crash when pressing certain buttons while on spectator mode
- [MC-256515](https://bugs.mojang.com/browse/MC-256515) - Hanging signs connect weirdly on the bottom of a fence gate.
- [MC-256522](https://bugs.mojang.com/browse/MC-256522) - Coral Blocks are sorted different than Corals and Coral Fans
- [MC-256534](https://bugs.mojang.com/browse/MC-256534) - Saved hotbars can import disabled items
- [MC-256573](https://bugs.mojang.com/browse/MC-256573) - Water bottles, awkward/mundane/thick potions and tipped arrows don’t appear in the Creative Inventory
- [MC-256575](https://bugs.mojang.com/browse/MC-256575) - Some of the translation keys were merged, resulting in some language translation errors
- [MC-256581](https://bugs.mojang.com/browse/MC-256581) - Lightning Rod isn’t in Functional Blocks tab in creative inventory
- [MC-256582](https://bugs.mojang.com/browse/MC-256582) - Lectern isn’t in Functional Blocks tab in creative inventory
- [MC-256612](https://bugs.mojang.com/browse/MC-256612) - Waxed Exposed Copper blocks are out of order in Building Blocks creative tab
- [MC-256639](https://bugs.mojang.com/browse/MC-256639) - Allays, Piglins, and Villagers lose inventory if unloaded and reloaded
- [MC-256661](https://bugs.mojang.com/browse/MC-256661) - Line spacing on Hanging Signs is too small, causing certain characters to overlap
- [MC-256705](https://bugs.mojang.com/browse/MC-256705) - Discrepancy exists between identifier-allowed characters and path segment-allowed characters
- [MC-256734](https://bugs.mojang.com/browse/MC-256734) - Entities will often spin while pathfinding on top of wall hanging signs
- [MC-256843](https://bugs.mojang.com/browse/MC-256843) - Milk Bucket isn’t in the Consumable Tab in the creative inventory
- [MC-256845](https://bugs.mojang.com/browse/MC-256845) - Nether Wart isn’t in the Nature Blocks tab in the creative inventory
- [MC-256846](https://bugs.mojang.com/browse/MC-256846) - Chiseled Bookshelf isn’t in the Redstone Blocks Tab in the creative inventory
- [MC-256847](https://bugs.mojang.com/browse/MC-256847) - Bone Meal isn’t in the Tools & Utilities Tab in the creative inventory
- [MC-256848](https://bugs.mojang.com/browse/MC-256848) - String isn’t in the Redstone Blocks Tab in the creative inventory

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/6718a5ac0b073644dbdfbd25f8218c68a1b390db/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).  If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
