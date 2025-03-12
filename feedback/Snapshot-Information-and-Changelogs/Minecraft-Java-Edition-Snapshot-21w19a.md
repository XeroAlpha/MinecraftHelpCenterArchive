---
title: "Minecraft: Java Edition - Snapshot 21w19a"
date: 2021-05-12T12:36:09Z
updated: 2025-03-12T11:13:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360060771772-Minecraft-Java-Edition-Snapshot-21w19a
hash:
  changes-to-the-caves-cliffs-preview: changes-to-the-caves--cliffs-preview
---

Now with twice as much Java version.

Starting with this snapshot, Candles, Bundles, and Sculk Sensors are only accessible through commands. We do not feel that they are at the quality we want for Part 1 of the Caves & Cliffs release. To keep trying these features out in survival mode, use the Preview data pack!

# CHANGES IN 21W19A

- The maximum length of item names in the anvil UI has been increased from 35 to 50
- Made geodes significantly rarer
- Unfinished items (Sculk Sensor, Bundles, and Candles) have been removed from the creative inventory
- Recipes for unfinished items (Bundles, Candles) have been removed

# CHANGES TO THE CAVES & CLIFFS PREVIEW

Download the [updated datapack](https://launcher.mojang.com/v1/objects/a6b56d6f14869646eb8d399e99a0149bdd954490/CavesAndCliffsPreview.zip).

- The pack now includes recipes related to bundles and candles

# TECHNICAL CHANGES IN 21W19A

- Upgraded to Java 16
- Added mineable/axe, mineable/hoe, mineable/pickaxe and mineable/shovel block tags. Blocks with these tags can be destroyed more quickly with the matching tool.
- Added needs_stone_tool, needs_iron_tool and needs_diamond_tool block tags. If a block requires the correct tool to drop, these tags determine which tier of that tool is required.
- Changed the syntax of the /item command

## JAVA 16

Minecraft now uses a more recent version of Java. If you are using a default setup the Launcher will download and install the correct version. If you are using a custom Java setup or a third-party launcher, you will need to ensure that your Java installation is version 16 or above.

## ITEM COMMAND

New syntax:

- /item replace \<target\> with \<item stack\> \[\<count\>\] - same as old replaceitem
- /item replace \<target\> from \<source\> \[\<modifier\>\] - copies item for source to target(s), optionally applying modifier
- /item modify \<target\> \<modifier\> - modifies item (without copying)

For example, /item replace block ~ ~ ~ container.0 from entity @s enderchest.0 will copy first item from player’s enderchest to first slot of container player is currently standing on.

# FIXED BUGS IN 21W19A

- [MC-105080](https://bugs.mojang.com/browse/MC-105080) - Ender Dragon is respawned if all Exit End Portal blocks are removed / legacy scanning is done for worlds with new dragon fight
- [MC-136647](https://bugs.mojang.com/browse/MC-136647) - Leads don’t work with Squids
- [MC-200009](https://bugs.mojang.com/browse/MC-200009) - Crash when using a non-mushroom block in a huge mushroom feature’s cap
- [MC-203606](https://bugs.mojang.com/browse/MC-203606) - “X Candle Cake” should be “Cake with X Candle”
- [MC-203718](https://bugs.mojang.com/browse/MC-203718) - Lightning rod stays activated when struck by lighting at the same time as being moved by a piston
- [MC-203757](https://bugs.mojang.com/browse/MC-203757) - Anvil character limit is too low for items with long names
- [MC-204244](https://bugs.mojang.com/browse/MC-204244) - Sheep are rendered like white sheared sheep through tinted glass blocks
- [MC-205626](https://bugs.mojang.com/browse/MC-205626) - The command syntax order of /item is inconsistent
- [MC-208663](https://bugs.mojang.com/browse/MC-208663) - Pufferfish don’t defend themselves from axolotls
- [MC-208740](https://bugs.mojang.com/browse/MC-208740) - Withers attack axolotls that are playing dead
- [MC-209533](https://bugs.mojang.com/browse/MC-209533) - Amethyst shard is not grouped with other gemstones in the Creative inventory
- [MC-212206](https://bugs.mojang.com/browse/MC-212206) - Shulkers generating outside the world border bug out when trying to spawn
- [MC-213774](https://bugs.mojang.com/browse/MC-213774) - Hanging roots float in your hand
- [MC-213922](https://bugs.mojang.com/browse/MC-213922) - Shulkers are not spawned in the correct place
- [MC-213943](https://bugs.mojang.com/browse/MC-213943) - Flying slightly above a big dripleaf can cause it to tilt without touching it
- [MC-214127](https://bugs.mojang.com/browse/MC-214127) - Despite being a type of berry plant, bees don’t pollinate cave vines
- [MC-214220](https://bugs.mojang.com/browse/MC-214220) - Items in water streams don’t fall from big dripleaves, but constantly try
- [MC-214283](https://bugs.mojang.com/browse/MC-214283) - Hanging roots break sound event uses break3 twice, excluding break4
- [MC-217626](https://bugs.mojang.com/browse/MC-217626) - Spore blossom is positioned rather strangely among flowers in Creative
- [MC-219445](https://bugs.mojang.com/browse/MC-219445) - Bonemealing big dripleaf in flowing water doesn’t update the water
- [MC-219873](https://bugs.mojang.com/browse/MC-219873) - Lightning Bolt detecting lightning rod incorrectly
- [MC-220106](https://bugs.mojang.com/browse/MC-220106) - Lightning hitting an entity on copper slabs on top another copper block fully cleans the bottom block first
- [MC-220215](https://bugs.mojang.com/browse/MC-220215) - Opening a shulker box while an entity is standing on top of it pushes it too high for a short amount of time
- [MC-221309](https://bugs.mojang.com/browse/MC-221309) - Experience orbs produce particles whilst moving through powder snow
- [MC-221756](https://bugs.mojang.com/browse/MC-221756) - Snow particles do not render at all when the block light level is 7 or more
- [MC-221844](https://bugs.mojang.com/browse/MC-221844) - Powder snow doesn’t produce particles when broken by burning mobs
- [MC-221957](https://bugs.mojang.com/browse/MC-221957) - Pick Block used on a level 15 light block returns a different item from the default light block
- [MC-222738](https://bugs.mojang.com/browse/MC-222738) - Leads don’t work with Glow Squids
- [MC-222882](https://bugs.mojang.com/browse/MC-222882) - Spyglass in Search tab of creative inventory is mixed with block types instead of tools where it belongs
- [MC-223132](https://bugs.mojang.com/browse/MC-223132) - Powder snow doesn’t produce a breaking sound or subtitle, when destroyed through extinguishing a burning player, mob, or flame arrow
- [MC-223171](https://bugs.mojang.com/browse/MC-223171) - Budding Amethyst and Copper variants are far away in the creative inventory
- [MC-223227](https://bugs.mojang.com/browse/MC-223227) - Floating water caves in caves under the ocean
- [MC-223446](https://bugs.mojang.com/browse/MC-223446) - Shulkers appear in the wrong place when riding an entity
- [MC-223820](https://bugs.mojang.com/browse/MC-223820) - Azalea & Flowering Azalea aren’t part of the block or item tags for \#saplings
- [MC-223907](https://bugs.mojang.com/browse/MC-223907) - Moss block appears in the \#lush_ground_replaceable.json twice
- [MC-224322](https://bugs.mojang.com/browse/MC-224322) - Powder snow can create ghost blocks in creative mode
- [MC-224325](https://bugs.mojang.com/browse/MC-224325) - minecraft.used:minecraft.COMPOSTABLE_ITEM doesn’t increase when placing an item into a composter
- [MC-224388](https://bugs.mojang.com/browse/MC-224388) - Ores and raw materials in smelting preview are off center
- [MC-224389](https://bugs.mojang.com/browse/MC-224389) - Copper Ingots are no longer grouped in the crafting table
- [MC-224927](https://bugs.mojang.com/browse/MC-224927) - Infested blocks take twice as long instead of half the time
- [MC-224972](https://bugs.mojang.com/browse/MC-224972) - Infested blocks have no effective tool
- [MC-225025](https://bugs.mojang.com/browse/MC-225025) - Server side performance drop with dragon’s breath area effect clouds

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/d0a9151432af384f5f2ca72e8e43422772158d0e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
