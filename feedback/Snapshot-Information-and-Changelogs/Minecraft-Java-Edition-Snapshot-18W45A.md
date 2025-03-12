---
title: "Minecraft: Java Edition - Snapshot 18W45A"
date: 2018-11-07T16:46:32Z
updated: 2025-03-12T11:15:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360019189051-Minecraft-Java-Edition-Snapshot-18W45A
---

**7 November 2018**

**CHANGES IN 18W45A**

- Added Illager Patrols
- Added scaffolding
- Rewrote the sign editing to be more intuitive
- Performance improvements & bug fixes!

**ILLAGER PATROLS**

- Spawn in the world as a pack of 5 mobs consisting of an Illager beast and 4 random other illagers.
- Spawn in all variations of the Plains, Taiga, Deserts, Savanna.
- Scary-spooky new banner can be found a top the patrol leaders head.

**REWRITE OF SIGN EDITING**

The pen is mightier than the sword! Unless you're fighting a Pillager...

- Movable cursor for free text editing
- Selection support
- Copy & Paste

**SCAFFOLDING**

Here to make your life easy! No strings attached.

- Easily buildable
- Easily destroyable
- Easily climbable
- Easily the best use of your Bamboo

**TECHNICAL CHANGES IN 18W45A**

- Renamed /drop to /loot and reworked the syntax to be easier to understand

**ENTITY EQUIPMENT ADVANCEMENT PREDICATE**

- Entity predicate now accepts equipment field.
- This predicate can contain up to six fields: head, chest, legs, feet, mainhand, offhand.
- If this predicate is non-null, test will fail for entities that have no equipment (i.e. not mobs, players or armor stands).

**LOOT COMMAND**

General syntax: loot \<target\> \<source\>

**SOURCES**

- fish \<loot table id\> \<fishing location\> \[tool \<item\>\|mainhand\|offhand\] - uses fishing context
- loot \<loot table id\> - uses loot chest context (can be also used for advancement awards and cat gifts)
- kill \<entity selector\> - simulates entity drops
- mine \<mining location\> \[tool \<item\>\|mainhand\|offhand\] - simulates block drops

**TARGETS**

- spawn \<position\> - drops in world
- replace - works similar to /replaceitem. If count is missing, command will try to place all returned items. If count is higher than number of items, remaining slots will be cleared.
  - entity \<entity selector\> \<start slot\> \[\<count\>\] - replaces range of slots.
  - block \<position\> \<start slot\> \[\<count\>\] - replaces range of slots.
- give \<player selector\> - inserts items into player's inventory (similar to /give)
- insert \<position\> - inserts items into container (similar to shift left-click)

**FIXED BUGS IN 18W45A**

- [MC-138539](https://bugs.mojang.com/browse/MC-138539) - Dying causes you to respawn in empty unplayable world until relog
- [MC-138338](https://bugs.mojang.com/browse/MC-138338) - Wither roses are made even though mobGriefing is false
- [MC-138003](https://bugs.mojang.com/browse/MC-138003) - Cannot move backwards in signs while writing / Cannot copy anything from the sign
- [MC-137967](https://bugs.mojang.com/browse/MC-137967) - Leaves drop either 2 or no sticks but never 1
- [MC-137946](https://bugs.mojang.com/browse/MC-137946) - Loaded crossbow model placement issue when holding another crossbow in the offhand slot
- [MC-137783](https://bugs.mojang.com/browse/MC-137783) - Trident and bow uses crossbow animation when wielding a crossbow in your offhand
- [MC-137572](https://bugs.mojang.com/browse/MC-137572) - Loom consumes two banners
- [MC-137506](https://bugs.mojang.com/browse/MC-137506) - Pillager constantly firing into the ground with nothing to agro onto to.
- [MC-137498](https://bugs.mojang.com/browse/MC-137498) - Crossbow enchantments missing in creative tab
- [MC-137496](https://bugs.mojang.com/browse/MC-137496) - Banner pattern cannot be shift-clicked out of loom
- [MC-137473](https://bugs.mojang.com/browse/MC-137473) - Fireworks and multishot (crossbow) don't work together properly
- [MC-137459](https://bugs.mojang.com/browse/MC-137459) - Bamboo item doesn't use the handheld model
- [MC-137456](https://bugs.mojang.com/browse/MC-137456) - Wither rose withers creative mode players

**GET THE SNAPSHOT**

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the "Launch Options" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/a004069d93ebfd9a6d93c57b66becac29f876d4c/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
