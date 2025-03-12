---
title: "Minecraft: Java Edition - Snapshot 21w39a"
date: 2021-09-29T17:25:21Z
updated: 2025-03-12T11:13:34Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/4410294651405-Minecraft-Java-Edition-Snapshot-21w39a
---

Time for an advanced snapshot! In this snapshot, you can also open worlds from previous versions again - with one big warning! The blending technology we intend to introduce for Caves & Cliffs: Part II is not yet available. If you open an old world in this snapshot it will be upgraded with air under the current bottom of the world and visible chunk borders to new areas.  
  
**We highly recommend backing up your world before loading it in this snapshot.**

# NEW FEATURES IN 21W39A

- Added Caves & Cliffs: Part II Advancements

## ADVANCEMENTS

- Added “Caves & Cliffs” for falling from top to bottom of the Overworld
- Added “Feels like home” for riding strider on lava for 50 blocks in the Overworld
- Added “Star Trader” for trading with a villager at the build height limit
- Added “Sound of Music” for playing music with a jukebox in a Meadow biome

# CHANGES IN 21W39A

- The lone trees in Meadows now always contain a bee nest
- Drowned can spawn in aquifers inside dripstone caves
- Zombies don’t spawn in dripstone caves
- Buried treasure chests can now contain water breathing potions
- Changed default brightness to 50
- Redesigned how effects look in the inventory screen, to allow them to show even with the recipe book open

## EFFECTS

- Your list of effects are now shown to the right of your inventory, instead of the left side
- When the inventory effects list is visible, it will be hidden from the game view to reduce screen clutter
- There’s now two modes of seeing the effect list: compact and classic
  - Classic is the pre-existing list of effects, one after another
  - Compact is a single icon for each effect, suitable for small screen estate
- The game will automatically switch between the two looks to suit the available screen estate (including having the recipe book open)

# TECHNICAL CHANGES IN 21W39A

- Added fall_from_height and ride_entity_distance advancement triggers
- Changed nether_travel to match other similar triggers
- Added new loot table function set_potion
- Changes to the on-disk chunk format
- Resource pack format has been increased to 8
- Standalone server.jar now bundles contains individual libraries instead of being flat archive

## ADVANCEMENTS

### NEW TRIGGERS

#### FALL_FROM_HEIGHT

- Triggered when a player lands after falling
- Conditions:
  - player - a player for which this trigger runs
  - start_position - location predicate for last position before falling started
  - distance - predicate for distance between start_position and player

#### RIDE_ENTITY_IN_LAVA

- Triggered for every tick when player rides in lava
- Conditions
  - player - a player for which this trigger runs
  - start_position - position where riding started (first tick on lava)
  - distance - predicate for distance between start_position and player

### CHANGED TRIGGERS

#### NETHER_TRAVEL

- entered condition renamed to start_position
- exited has been removed, since it was identical to player.location

## LOOT TABLES

### NEW FUNCTIONS

#### SET_POTION

Sets Potion tag on any item

##### Parameters:

- id - potion id

## WORLD DATA: CHUNK FORMAT

- Chunk’s Level.Sections\[\].BlockStates & Level.Sections\[\].Palette have moved to a container structure in Level.Sections\[\].block_states
- Chunk’s Level.Biomes are now paletted and live in a similar container structure in Level.Sections\[\].biomes
- Chunk’s Level.CarvingMasks\[\] is now long\[\] instead of byte\[\]

## RESOURCE PACK FORMAT

- minecraft/textures/gui/container/inventory.png now contains an extra sprite for a thin-layout version of the effect list in the inventory

## SERVER BUNDLING

- server.jar now bundles individual libraries instead of merging all the files into single archive
- This change is meant to solve certain problems related to Java modules
- On startup, server.jar will unpack libraries into a directory configured by bundlerRepoDir (default: working directory)
- To run different main class than server, use bundlerMainClass property (for example java -DbundlerMainClass=net.minecraft.data.Main -jar server.jar --reports) or unpack jar manually and use contents of META-INF/classpath-joined for command line

# FIXED BUGS IN 21W39A

- [MC-116359](https://bugs.mojang.com/browse/MC-116359) - Status effects aren’t displayed in inventory when recipe book is open
- [MC-149822](https://bugs.mojang.com/browse/MC-149822) - Bottom border on status effect displays in the inventory is missing
- [MC-193348](https://bugs.mojang.com/browse/MC-193348) - Status effect bars shift the player’s inventory in creative mode
- [MC-196723](https://bugs.mojang.com/browse/MC-196723) - Potion effects obtained in creative mode while in inventory do not show up until reopening inventory
- [MC-214894](https://bugs.mojang.com/browse/MC-214894) - Bamboo generates in caves under jungles
- [MC-214959](https://bugs.mojang.com/browse/MC-214959) - Sugar cane generated in cave
- [MC-218167](https://bugs.mojang.com/browse/MC-218167) - Chatting causes lag to occur
- [MC-236755](https://bugs.mojang.com/browse/MC-236755) - “Feature Placement” Crash / java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0
- [MC-236903](https://bugs.mojang.com/browse/MC-236903) - Naturally generated cave vines have an age between 17-25
- [MC-237505](https://bugs.mojang.com/browse/MC-237505) - Certain Biome Builder debug values do not change

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/2b40ef4bf57b2040f7d9affb48c0131b228f954f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
