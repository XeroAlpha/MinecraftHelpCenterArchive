---
title: Minecraft Java Edition - Snapshot 24w35a
date: 2024-08-28T13:55:12Z
updated: 2024-08-28T14:30:49Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/29718626514189-Minecraft-Java-Edition-Snapshot-24w35a
hash:
  h_01J6CKKXR1S8ZS5ZTM2J6Y8K0K: experimental-features
  h_01J6CKKXR1V2K18VTY42A5ZA2D: bundles
  h_01J6CKKXR1804ZKRZVPWH7KBTY: changes
  h_01J6CKKXR11Q0ZBBZPHZH7RDKQ: technical-changes
  h_01J6CKKXR18PB88AQXVHVKNWTP: data-pack-version-51
  h_01J6CKKXR10BRA1FXXS4410V4G: loot-tables
  h_01J6CKKXR1SP15Q42QCB5CN6YF: sheep-loot-tables
  h_01J6CKKXR1T87F0TG98SBMSD4M: mooshroom-shearing-loot-table
  h_01J6CKKXR1FJ3RFNGY31M1QJ04: new-conditions
  h_01J6CKKXR1GN68NYCP4YDER5XJ: sheepentity-sub-predicate
  h_01J6CKKXR1QZRE93ER8HZC0Y4M: fixed-bugs-in-24w35a
  h_01J6CKKXR1356H80S7QDMRV0SR: get-the-snapshot
---

Hello! In this week's snapshot we have addressed some important bugs related to village raid spawns, bundles and redstone.

Happy mining!

 

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

 

### Bundles

- Selecting items in a Bundle is now only done by scrolling

> **Developer's Note**: *In previous snapshots you could select items in a Bundle with the number keys. We removed this because it was conflicting with hotkeys used by expert players, and it was not as useful now that the Bundle can have more than 10 items visible.*

## Changes

- Raiders must find a place to spawn no more than 96 blocks vertically above or below the village center, or a raid will not start
- It is now much less likely for raiders to not find a valid place to spawn when raiding

## Technical Changes

- The Data Pack version is now 51

## Data Pack Version 51

- Trial Spawner configurations in fields normal_config and ominous_config are now defined in registry trial_spawner
  - This allows for easier customization of Trial Spawner configurations in data packs
  - Inlined configuration data is still supported
- Entities' rotation on the x axis is now clamped between -90 and 90
- loot command now returns an error when trying to drop from block without loot table (like air)

### Loot tables

- Special loot table empty has been removed and is no longer defined in vanilla data pack

#### Sheep loot tables

- Sheep now always uses a single loot table entities/sheep
- Wool drops are still defined in sub-tables in entities/sheep/\<color\>, but they are now just dispatched from the main table
  - Note: mutton drop is now controlled by the main table, while sub-tables are responsible only for wool drop
- Sheep shearing is now controlled by loot table found as shearing/sheep

#### Mooshroom shearing loot table

- Mooshroom shearing is now controlled by loot table found as shearing/mooshroom

### New conditions

#### sheep entity sub-predicate

New entity sub-predicate for testing sheep wool Fields:

- sheared - optional boolean
- color - optional wool dye color

## Fixed bugs in 24w35a

- [MC-124331](https://bugs.mojang.com/browse/MC-124331) - Redstone lamps do not show on maps
- [MC-129298](https://bugs.mojang.com/browse/MC-129298) - Drowned don't chase you if they are in 1 block deep water
- [MC-146805](https://bugs.mojang.com/browse/MC-146805) - Trader Llamas don't attack zombies, drowned, husks, zombie villager and illagers
- [MC-148982](https://bugs.mojang.com/browse/MC-148982) - Map color for wheat is incorrect
- [MC-167906](https://bugs.mojang.com/browse/MC-167906) - Beehive items at full honey level do not appear with honey in inventory/as item/in hand
- [MC-168329](https://bugs.mojang.com/browse/MC-168329) - Bees do not leave their hives in the Nether/End in some cases
- [MC-168546](https://bugs.mojang.com/browse/MC-168546) - Bee nest / hive items have no lore
- [MC-203382](https://bugs.mojang.com/browse/MC-203382) - The "Bee Our Guest" advancement description only states a beehive is required to unlock
- [MC-270742](https://bugs.mojang.com/browse/MC-270742) - Displays don't rotate properly between 179 and 180
- [MC-272345](https://bugs.mojang.com/browse/MC-272345) - Some trial spawners don't have an extra breeze out at once when ominous
- [MC-273601](https://bugs.mojang.com/browse/MC-273601) - The channeling enchantment no longer functions on tridents without an owner
- [MC-273745](https://bugs.mojang.com/browse/MC-273745) - Soul speed momentum resets when jumping on soul sand
- [MC-275204](https://bugs.mojang.com/browse/MC-275204) - Coast Armor Trim has generic "Smithing Template" name
- [MC-275208](https://bugs.mojang.com/browse/MC-275208) - You cannot move the bundle into or around the inventory using hotkeys
- [MC-275220](https://bugs.mojang.com/browse/MC-275220) - Picking up a Salmon in a Bucket doesn't keep its size
- [MC-275222](https://bugs.mojang.com/browse/MC-275222) - Salmons always have same hitbox regardless of their size
- [MC-275256](https://bugs.mojang.com/browse/MC-275256) - Snow golem shoots to the sky/floor instead of at mobs
- [MC-275275](https://bugs.mojang.com/browse/MC-275275) - Footsteps on Monster Spawners create missing subtitle
- [MC-275279](https://bugs.mojang.com/browse/MC-275279) - Raiders do not spawn on small islands even though there are close enough places around the village
- [MC-275322](https://bugs.mojang.com/browse/MC-275322) - "Subspace Bubble" is granted when exiting and entering some Nether Portals
- [MC-275353](https://bugs.mojang.com/browse/MC-275353) - Item Frame/Glow Item Frame "Fixed" tag behaving strangely since 24w33a
- [MC-275358](https://bugs.mojang.com/browse/MC-275358) - Renamed bundle's contents are not centered
- [MC-275409](https://bugs.mojang.com/browse/MC-275409) - Stuffing too many items into a bundle through commands will cause the capacity bar to overflow
- [MC-275410](https://bugs.mojang.com/browse/MC-275410) - Flying in Creative Mode no longer resists the thrust of the bubble column
- [MC-275417](https://bugs.mojang.com/browse/MC-275417) - Creepers can destroy vehicles even if mobGriefing is set to false
- [MC-275521](https://bugs.mojang.com/browse/MC-275521) - Tall seagrass can now generate when bone mealing one-high water
- [MC-275523](https://bugs.mojang.com/browse/MC-275523) - Reduced shield glint applies to the shield's item appearance
- [MC-275586](https://bugs.mojang.com/browse/MC-275586) - Renamed items highlighted in the bundle are not in italics
- [MC-275612](https://bugs.mojang.com/browse/MC-275612) - Items with rarity values highlighted in bundles do not display their rarity colors
- [MC-275752](https://bugs.mojang.com/browse/MC-275752) - Villagers indefinitely stand around items when their "CanPickUpLoot" tag is set to "0b"
- [MC-275754](https://bugs.mojang.com/browse/MC-275754) - Random stack trace sometimes appears
- [MC-275755](https://bugs.mojang.com/browse/MC-275755) - Attempting to swap armor by right clicking deletes it
- [MC-275757](https://bugs.mojang.com/browse/MC-275757) - Using a bucket deletes the bucket in most cases
- [MC-275774](https://bugs.mojang.com/browse/MC-275774) - Observers no longer detect redstone dust powering/unpowering
- [MC-275778](https://bugs.mojang.com/browse/MC-275778) - Bundle fullness bar texture and color are hardcoded
- [MC-275800](https://bugs.mojang.com/browse/MC-275800) - Translucency sorting is broken
- [MC-275801](https://bugs.mojang.com/browse/MC-275801) - Use cooldown triggers without item consumption
- [MC-275828](https://bugs.mojang.com/browse/MC-275828) - Game crashes when there is an invalid shader path
- [MC-275837](https://bugs.mojang.com/browse/MC-275837) - The use_cooldown component uses field cooldownGroup instead of cooldown_group
- [MC-275838](https://bugs.mojang.com/browse/MC-275838) - Drowned holds trident upside down
- [MC-275843](https://bugs.mojang.com/browse/MC-275843) - Using an empty map (single item in stack) doesn't create a filled map in survival mode
- [MC-275851](https://bugs.mojang.com/browse/MC-275851) - diameter in teleport_randomly consume effect is ignored
- [MC-275959](https://bugs.mojang.com/browse/MC-275959) - Drowned no longer raise their arms to attack
- [MC-276053](https://bugs.mojang.com/browse/MC-276053) - Glass bottles are deleted when used on a water source block

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/93d259fdba93aa7d3c1763cfb0136295087e0de3/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
