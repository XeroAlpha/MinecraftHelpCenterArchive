---
title: Minecraft Java Edition - Snapshot 20W17A
date: 2020-04-22T14:16:43Z
updated: 2025-03-12T11:15:03Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360042188032-Minecraft-Java-Edition-Snapshot-20W17A
---

22 April 2020

We also have a survey up so that you can tell us what you think about the Nether Update. You can find it by clicking [here](https://www.surveymonkey.com/r/SF65G2F). We would very much appreciate if you could take the time and fill it out.

# NEW FEATURES IN 20W17A

- Added an Entity Distance scale option ranging from 50% to 500%
- Difficulty and game rules can now be changed from "Create World" screen

# CHANGES IN 20W17A

- Improved Smithing Table UI
- Ruined Portals now spawn less frequently
- Renamed "Soul Fire Torch" and "Soul Fire Lantern" to "Soul Torch" and "Soul Lantern"
- Tweaked Bastion Remnant loot
- Walls now create posts under more things, like pressure plates and banners
- The "Singleplayer" button will jump directly to "Create World" screen if there are no worlds to select

# TECHNICAL CHANGES IN 20W17A

- Chat component style can now select font
- Block storage format in chunks slightly changed to speed up various tasks (rendering, pathfinding, world generation, etc)
- Full range of Unicode characters is supported (some may know what that means 😉)
- Added the attribute command

## WORLD SAVE FORMAT

- Saving level.dat now uses randomly-named temporary files (instead of using level.dat_new every time)
- player/\*.dat are now saved in a way similar to level.dat (including leaving .dat_old files)

## BLOCK STORAGE

BlockStates in Sections elements no longer contain values stretching over multiple 64-bit fields. If number of bits per block is not power of two (i.e. single 64-bit value can't fill whole number of blockstates) some bits will not be used.

For example, if single block state takes 5 bits, highest 4 bits of every 64-bit field will be unused. That also means slight increase in storage size (in case of 5 bits, from 320 to 342 64-bit fields).

## COMMANDS

### ATTRIBUTE

Adds modifies attribute on single entity. Possible syntax:  
Parameters:

- attribute \<target\> \<attribute\> get \[\<scale\>\] - get total value of attribute
- attribute \<target\> \<attribute\> base set \<value\> - sets base valye
- attribute \<target\> \<attribute\> base get \[\<scale\>\] - get base value
- attribute \<target\> \<attribute\> modifier add \<uuid\> \<name\> \<value\> add\|multiply\|multiply_base - adds modifier (fails if modifier is already present)
- attribute \<target\> \<attribute\> modifier remove \<uuid\> - removes modifier
- attribute \<target\> \<attribute\> modifier value get \<uuid\> \[\<scale\>\] - get value of modifier
- target - single entity (note: only players, armor stands and mobs have attributes)
- attribute - name of attribute (like minecraft:generic.max_health)
- name - string (in optional quotes) describing human-readable name of modifier
- value - floating point value (note: certain attributes have limits on final value, so your change might not be noticeable)

## CHAT COMPONENTS

### HOVER EVENT ARGUMENT

- style.hoverEvent parameter now has parameter contents, with contents depending on type:
- For show_text - chat component
- For show_item - either item id or object with fields id, count and tag (with last one being serialized NBT)
- For show_entity - object with fields: id (UUID), name (chat component) and type (entity type resource location)
- Old style value argument is now deprecated (but still supported)

### COLORS

color property can now contain RGB value prefixed by \#. For example \#55ff55 will result in the same color as green.

### CUSTOM FONTS

Chat component style now supports font property, which is resource location for font in resource pack. No entry is equivalent to minecraft:default.

## FONTS

- Force Unicode option now switches between normal and alternative font (called uniform.json) - no reload needed

# FIXED BUGS IN 20W17

- [MC-1601](https://bugs.mojang.com/browse/MC-1601) - Breaking a Furnace will not give you the experience for the smelted things inside
- [MC-5410](https://bugs.mojang.com/browse/MC-5410) - In creative mode, flying down is stopped when brushing up against ladders or vines.
- [MC-31032](https://bugs.mojang.com/browse/MC-31032) - Using only one empty map doesn’t increase minecraft.used:minecraft.map
- [MC-46417](https://bugs.mojang.com/browse/MC-46417) - Sprint particles are generated in spectator mode
- [MC-56373](https://bugs.mojang.com/browse/MC-56373) - Selector and score text components don’t work on hoverEvents
- [MC-94535](https://bugs.mojang.com/browse/MC-94535) - Flying and holding CTRL really close to the ground, emits walking particles
- [MC-96319](https://bugs.mojang.com/browse/MC-96319) - Mob pathfinding AI does not regard some blocks as obstructions and is unable to pathfind on top of them
- [MC-100195](https://bugs.mojang.com/browse/MC-100195) - Player retains 1-block hitbox if entering a minecart/boat while swimming or when flying with elytra or a riptide trident
- [MC-114544](https://bugs.mojang.com/browse/MC-114544) - Kicked by “Flying is not enabled on this server” while sleeping
- [MC-120572](https://bugs.mojang.com/browse/MC-120572) - /recipe crashes the game
- [MC-126244](https://bugs.mojang.com/browse/MC-126244) - ‘/locate’, explorer maps, and treasure maps can cause extreme TPS lag, even leading to a complete server freeze if structure generation is turned off
- [MC-149704](https://bugs.mojang.com/browse/MC-149704) - Sneaking / crouching twice makes player sprint
- [MC-169514](https://bugs.mojang.com/browse/MC-169514) - Tamed parrots cannot be renamed unless they are flying
- [MC-171561](https://bugs.mojang.com/browse/MC-171561) - Only one player can access shulker box at a time
- [MC-174359](https://bugs.mojang.com/browse/MC-174359) - Piglins prefer using an unenchanted gold item instead of an enchanted gold item
- [MC-175113](https://bugs.mojang.com/browse/MC-175113) - Rain prevents entities from burning in fire
- [MC-175186](https://bugs.mojang.com/browse/MC-175186) - Respawning doesn’t check if the “respawn block” is the correct one for the dimension
- [MC-175998](https://bugs.mojang.com/browse/MC-175998) - Striders are moving very fast between two blocks or when diagonally running into blocks
- [MC-176029](https://bugs.mojang.com/browse/MC-176029) - Right clicking a lodestone with a stack of compasses converts the whole stack
- [MC-176060](https://bugs.mojang.com/browse/MC-176060) - Recipe book doesn’t load the entire empty map recipe anymore
- [MC-176104](https://bugs.mojang.com/browse/MC-176104) - Dropped compasses always point up
- [MC-176116](https://bugs.mojang.com/browse/MC-176116) - Saddle texture on Strider is backwards
- [MC-176521](https://bugs.mojang.com/browse/MC-176521) - Pressing space while the recipe book button is highlighted in crafting interfaces doesn’t toggle the recipe book
- [MC-177346](https://bugs.mojang.com/browse/MC-177346) - Compass in a mob’s hand does not point to correct location if mob turns
- [MC-177776](https://bugs.mojang.com/browse/MC-177776) - Netherite ingots are not sorted properly with other ingots
- [MC-177780](https://bugs.mojang.com/browse/MC-177780) - Shulkers cannot be opened while playing closing animation anymore
- [MC-177796](https://bugs.mojang.com/browse/MC-177796) - Blackstone walls are in the “Building Blocks” category instead of “decoration Blocks” category, unlike all other walls
- [MC-177862](https://bugs.mojang.com/browse/MC-177862) - Polished blackstone button and pressure plate in incorrect area in creative inventory
- [MC-177885](https://bugs.mojang.com/browse/MC-177885) - Invisible Horses show patterns
- [MC-177997](https://bugs.mojang.com/browse/MC-177997) - Baby zoglins still use the same attack damage as an adult
- [MC-178086](https://bugs.mojang.com/browse/MC-178086) - Flying close to the ground with soul speed over soul blocks speeds up player and generates soul particles
- [MC-178093](https://bugs.mojang.com/browse/MC-178093) - Piglins with full inventories won’t pick up gold ingots to barter even though you can still right-click to barter with them
- [MC-178259](https://bugs.mojang.com/browse/MC-178259) - Game crashes when an iron golem with the attack damage attribute set to 0.5d
- [MC-178316](https://bugs.mojang.com/browse/MC-178316) - Dispenser plays “dispensed item” sound when attempting to charge a full respawn anchor instead of “dispenser fails”
- [MC-178630](https://bugs.mojang.com/browse/MC-178630) - TNT eyeheight changed
- [MC-178797](https://bugs.mojang.com/browse/MC-178797) - Barrier blocks generate in bastion remnant
- [MC-178955](https://bugs.mojang.com/browse/MC-178955) - Badlands are viewed as a mountainous biome for Ruined Portals
- [MC-179542](https://bugs.mojang.com/browse/MC-179542) - Basalt Delta Blocks Override Nether Bricks in Fortresses

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/0b7e36b084577fb26148c6341d590ac14606db21/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
