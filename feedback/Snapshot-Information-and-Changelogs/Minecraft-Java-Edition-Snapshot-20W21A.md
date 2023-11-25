---
title: Minecraft Java Edition - Snapshot 20W21A
date: 2020-05-20T23:20:47Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360043476792-Minecraft-Java-Edition-Snapshot-20W21A
---

20 May 2020

In this snapshot, we\'re adding support for custom world settings and custom dimensions. This is an early release to hear your feedback about this feature - do note that this support is considered experimental and unsupported. Any custom world settings may change from one snapshot to the next, and worlds using custom settings will be clearly marked as experimental in your worlds list.

# NEW FEATURES IN IN 20W21A

-   Added the ability to toggle redstone wire between a cross and a dot
-   Added import/export world settings functionality
-   Added a new disableMultiplayer command line option - when used, the Multiplayer button is disabled
-   Added a new disableChat command line option - when used, receiving and sending online chat is disabled

## REDSTONE TOGGLE

-   When right clicking a single piece of redstone, it toggles between a the cross and the dot
-   A dot of redstone will not power its surrounding blocks

# CHANGES IN 20W20A

-   Piglins no longer walk around when admiring gold
-   If you hurt a piglin while it is admiring an ingot, the ingot will now disappear
-   Increased the chance of ores to generate in the Basalt Deltas to balance against the reduced amount of Netherrack in this biome
-   Lily pads are now considered junk fishing loot rather than treasure
-   Updated logos for Mojang Studios and Minecraft
-   Temporarily removed structure settings from flat level preset strings (workaround: use import/export settings functionality)

# TECHNICAL CHANGES IN 20W21A

-   Added the ability to control the height of the spreadplayers command
-   Added custom worlds and custom dimensions

## COMMANDS

### SPREADPLAYERS

Added an optional argument to specify maximum height.

New syntax: spreadplayers \<center\> \<spreadDistance\> \<maxRange\> \[under \<maxHeight\>\] \<respectTeams\> \<targets\>

-   maxHeight - Specifies the maximum height for resulting positions

### LOCATE

-   Structure names are now specified as lowercase

## CUSTOM WORLDS

-   Added experimental support for new custom worlds
-   Edit world screen now has an option to export world settings to a JSON file
-   During world creation you can import previously exported world settings
-   A bunch of new parameters are exposed, but marked as experimental, meaning you can play with them, but there is no guarantee that any of them will continue working (even in the next snapshot!)
-   Flat level preset string lost structure settings (they are now stored in a common format for all worlds), we will restore some form of this functionality soon
-   Buffet world can no longer be created from server.properties, flat level settings changed a bit; better support for custom world creation on the server is coming soon

# FIXED BUGS IN 20W21A

-   [MC-97247](https://bugs.mojang.com/browse/MC-97247) - Map making sound uses equipment sound subtitle
-   [MC-97507](https://bugs.mojang.com/browse/MC-97507) - Using item which modifies the held item shows "Gear equips" subtitle
-   [MC-107103](https://bugs.mojang.com/browse/MC-107103) - Trying to interact with entity 3 or more blocks away without seeing its eyes only interacts client-side
-   [MC-113068](https://bugs.mojang.com/browse/MC-113068) - Zombie banging on door subtitle is called "Block broken"
-   [MC-123155](https://bugs.mojang.com/browse/MC-123155) - When any non-player entity enters an End portal the obsidian platform is not regenerated and the entity can fall into the void
-   [MC-147516](https://bugs.mojang.com/browse/MC-147516) - Hostile mobs will sometimes stop attacking/following their target when directly next to it
-   [MC-166292](https://bugs.mojang.com/browse/MC-166292) - Subtitle from foxes eating chorus fruit: "Player teleports"
-   [MC-169764](https://bugs.mojang.com/browse/MC-169764) - Fish flopping sound shows 'Footsteps' subtitles
-   [MC-170930](https://bugs.mojang.com/browse/MC-170930) - Nether Sprouts item not visible when held in the hand in first person
-   [MC-172090](https://bugs.mojang.com/browse/MC-172090) - Piglins would rather hold a golden item instead of a crossbow
-   [MC-172207](https://bugs.mojang.com/browse/MC-172207) - Parrots don't imitate hoglins, zoglins and piglins
-   [MC-172255](https://bugs.mojang.com/browse/MC-172255) - Piglins immediately dismount any entity that they are riding
-   [MC-177075](https://bugs.mojang.com/browse/MC-177075) - Taking product out of stonecutter produces no subtitle
-   [MC-177088](https://bugs.mojang.com/browse/MC-177088) - Polar bear step sound does not have subtitles
-   [MC-177438](https://bugs.mojang.com/browse/MC-177438) - Turtle egg's name inconsistently capitalized across different subtitles
-   [MC-177830](https://bugs.mojang.com/browse/MC-177830) - Blackstone and basalt prevent Ancient Debris and other Nether ores from generating
-   [MC-178130](https://bugs.mojang.com/browse/MC-178130) - Zombie Villagers are called "Zombie" in some subtitles
-   [MC-178212](https://bugs.mojang.com/browse/MC-178212) - Nether planks, their variants, and hyphae are harder than stems
-   [MC-178298](https://bugs.mojang.com/browse/MC-178298) - Ancient debris and nether gold ore can't generate in Basalt Deltas
-   [MC-180257](https://bugs.mojang.com/browse/MC-180257) - Crash when setting LodestonePos of compass to something other than NBT compound
-   [MC-180852](https://bugs.mojang.com/browse/MC-180852) - There is no space on the beacon's secondary power effects in the UI
-   [MC-181270](https://bugs.mojang.com/browse/MC-181270) - Trying to open old worlds (in Region format?) without version information in snapshots does not show warning screen
-   [MC-181298](https://bugs.mojang.com/browse/MC-181298) - Game crashes when trying to generate a nether biome superflat world with ruined portals
-   [MC-181463](https://bugs.mojang.com/browse/MC-181463) - The buttons are not selected in the right order using Tab in the new world creation menus
-   [MC-181499](https://bugs.mojang.com/browse/MC-181499) - Buckets cannot be emptied into a source block, but still produce a sound when trying
-   [MC-181511](https://bugs.mojang.com/browse/MC-181511) - Chunks with redstone are removed
-   [MC-181522](https://bugs.mojang.com/browse/MC-181522) - Chunks that haven't been explored since 1.13 are resetting
-   [MC-181611](https://bugs.mojang.com/browse/MC-181611) - Vindicators stop attacking you when they are standing really close to you
-   [MC-182514](https://bugs.mojang.com/browse/MC-182514) - 15 Block States per SubChunk Limit during World Upgrade
-   [MC-182743](https://bugs.mojang.com/browse/MC-182743) - Wither skeletons don't spawn inside of wither roses
-   [MC-182912](https://bugs.mojang.com/browse/MC-182912) - Piglins still do not change their current crossbow for a new enchanted one
-   [MC-183249](https://bugs.mojang.com/browse/MC-183249) - Carving Mask BitSets created for lower chunk statuses
-   [MC-183786](https://bugs.mojang.com/browse/MC-183786) - Named seeds that are not numbers are not being recognized

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/03b8fa357937d0bdb6650ec8cc74506ec2fd91a7/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
