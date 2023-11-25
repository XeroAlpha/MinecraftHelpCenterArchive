---
title: "Minecraft: Java Edition - Snapshot 19W38B"
date: 2019-09-18T15:13:40Z
updated: 2019-09-19T19:14:51Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360033496792-Minecraft-Java-Edition-Snapshot-19W38B
---

19 September 2019

# CHANGES IN 19W38B

-   Fixed a bug

# FIXED BUG IN 19W38B

-   [MC-161268](https://bugs.mojang.com/browse/MC-161268) - java.lang.IndexOutOfBoundsException while tesselating block model / Game crashes when breaking a block

18 September 2019

# CHANGES IN 19W38A

-   Fixed a few bugs
-   Some technical changes, listed below

# TECHNICAL

Loot table predicates can now be defined in separate files and used for entity selectors and in execute if command.

-   Added general-purpose storage for data commands.
-   Extended advancement and loot table predicates.
-   Extended schedule command to allow scheduling function multiple times

### ENTITY PREDICATE

#### PLAYER

Entity predicate now accepts player field, which checks player properties. Fails when entity is not player.

##### Fields:

-   level - range of allowed player levels
-   gamemode - same values as /gamemode command
-   stats - list of statistics to match. Entry fields: type (like minecraft:custom), stat (like minecraft:sneak_time) and value (int range)
-   recipes - map of recipe ids. Boolean value tells if it should or should not be known to player
-   advancements - map of advancement ids. If value is boolean, checks if advancement is done. If value is object, checks completion of criterions.

#### TEAM

Entity predicate now accepts team field, which matches team name.

### LOCATION PREDICATE

#### BLOCK AND FLUID

Predicate also accepts block and fluid sub-predicate. Available fields:

-   block/fluid - exact block/fluid id to match
-   tag - block/fluid tag to match
-   nbt - matcher for block entity NBT (only for blocks)
-   state - map of name-value properties. Value can be integer, boolean or string or object with optional min and max properties.

#### LIGHT

Predicate now accepts light sub-predicate. Object has one integer range - light that matches visible light (max(sky-darkening,block)).

## COMMANDS

### DATA

-   Data commands can now use storage as target. This is general-purpose, key-value storage.
    -   Storage is shared between all dimensions in level.
    -   Data in storage persist between reloads.

### EXECUTE IF PREDICATE

New subcommand evaluates custom predicates (defined in predicates directory of datapack).

### SCHEDULE

-   Added new syntax /schedule \... \[append\|replace\] (/schedule \... defaults to replace)
-   Added new syntax /schedule clear \<id\> to remove existing schedules (returns number of removed schedules)

### ENTITY SELECTORS

New selector parameter predicate allows to apply custom custom predicate (defined in predicates directory of datapack).

### KILL

The kill command now defaults to \@s if no target argument is given.

## CUSTOM PREDICATES

Condition part of loot tables can now be defined as separate data pack resource in predicates directory.

## LOOT TABLES

### LOCATION_CHECK

New parameters added:

-   offsetX, offsetY, offsetZ - optional offsets to location

### TIME_CHECK CONDITION

New condition that checks day time.

#### PARAMETERS

-   value - range of accepted values
-   period - if present, time will be modulo-divided by this value (for example, if set to 24000, value will operate on time of day)

### NEW CONDITIONS

#### REFERENCE

Includes condition defined in predicates directory of datapack, selected with name parameter.

# FIXED BUGS IN 19W38A

-   [MC-70111](https://bugs.mojang.com/browse/MC-70111) - When a thrown ender pearl is in the air, it disappears after relogging and you don't get teleported.
-   [MC-96207](https://bugs.mojang.com/browse/MC-96207) - Boat breaking lily pad creates too much particles
-   [MC-101247](https://bugs.mojang.com/browse/MC-101247) - Horses, donkeys, mules, and boats sometimes disappear after dismounting
-   [MC-103672](https://bugs.mojang.com/browse/MC-103672) - Steerable ridden entity (boat / pig / horse) teleports back to previous position for short moment on dismount
-   [MC-136367](https://bugs.mojang.com/browse/MC-136367) - When exiting a boat it will put you on top of the boat
-   [MC-138465](https://bugs.mojang.com/browse/MC-138465) - Ender pearl forgets owner after reload(of game or chunks)
-   [MC-157697](https://bugs.mojang.com/browse/MC-157697) - Unplayable conditions when Pillagers loaded. Extreme lag spikes.
-   [MC-158373](https://bugs.mojang.com/browse/MC-158373) - Raid horn sounds play globally in all villages
-   [MC-158414](https://bugs.mojang.com/browse/MC-158414) - When riding an entity, players appear to be at the location they mounted it at as soon as they are out of range
-   [MC-160367](https://bugs.mojang.com/browse/MC-160367) - Pillagers don't despawn
-   [MC-160919](https://bugs.mojang.com/browse/MC-160919) - Disabling fire damage does not disable magma block damage

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/e40184002fa2e183de5fda0229d0709cfd6bfe8a/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
