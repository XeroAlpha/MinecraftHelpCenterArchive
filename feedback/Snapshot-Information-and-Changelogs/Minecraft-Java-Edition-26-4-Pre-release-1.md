---
title: Minecraft Java Edition - 26.4 Pre-release 1
date: 2026-11-24T15:03:20Z
updated: 2026-11-24T15:03:26Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/50642841188365-Minecraft-Java-Edition-26-4-Pre-release-1
hash:
  h_01M8719J7E6YJXKNTB89GJSGFK: changes
  h_01M8719J7F66M6WB94TG7QAPYB: technical-changes
  h_01M8719J7GDK5SSCZJZK5X7YQP: data-pack-version-1281
  h_01M8719J7GRXX3SAHE4A8M9ZWN: changed-minecrafttooltip_display-data-components
  h_01M8719J7HF93HS2A2KADYGNHV: changed-upscale-density-function
  h_01M8719J7HC9VEB2F3CAHBC3XX: fixed-bugs-in-264-pre-release-1
  h_01M8719J80HEX0F2HCJXC84Q8N: get-the-pre-release
---

**Published** 11/24/26

The first pre-release for 26.4: The Deep Freeze has arrived! We're hard at work squashing bugs, making improvements, and putting the final icy touches on the update ahead of release. Pre-releases don't follow the usual Tuesday snapshot schedule, so stay frosty! You never know when the next update might come sliding in.

Happy mining!

## Changes

- Interacting with entities using an item will now correctly apply the item's use cooldown
- Lowered break sound volume for several ice blocks
- Major improvements have been made to the speed and reliability of Realms world upload & download
- Improved the reliability and speed of friend requests
- When friends-only chat is enabled by Xbox settings, a prompt will now show when chat is open

## Technical Changes

- The Data Pack version is now 128.1
- Commands issued through server console are now rejected while the server is starting

## Data Pack Version 128.1

### Changed minecraft:tooltip_display Data Components

- Added a new field split_lines that allows items to opt out of the new tooltip line splitting and word-wrapping behavior (default: true)

### Changed upscale Density Function

- Upscaling changed axis order from Z,X,Y to X,Z,Y.

## Fixed bugs in 26.4 Pre-Release 1

- [MC-133992](https://bugs.mojang.com/browse/MC-133992) - Wither skeletons and blazes do not spawn in fortresses generated before 1.13
- [MC-148293](https://bugs.mojang.com/browse/MC-148293) - Closed captions aren't shown without a sound device
- [MC-215831](https://bugs.mojang.com/browse/MC-215831) - You cannot trade with wandering traders while holding villager spawn eggs
- [MC-226684](https://bugs.mojang.com/browse/MC-226684) - Pausing the game while drawing a bow causes the arrow to be fired
- [MC-243106](https://bugs.mojang.com/browse/MC-243106) - The sounds of using flint and steel or fire charges on creepers are controlled by the "Hostile Mobs" sound category instead of "Players"
- [MC-310211](https://bugs.mojang.com/browse/MC-310211) - The game crashes when a button with scrolling text is outside the game window in a non-scrollable menu
- [MC-310341](https://bugs.mojang.com/browse/MC-310341) - Pausing the game while drawing a bow causes the bow to get fully drawn
- [MC-311681](https://bugs.mojang.com/browse/MC-311681) - Dispensers can remove TNT from primed sulfur cubes
- [MC-312049](https://bugs.mojang.com/browse/MC-312049) - Armor trims z-fight when rendered on held items
- [MC-312194](https://bugs.mojang.com/browse/MC-312194) - Changing post effects can disconnect the player with a ConcurrentModificationException
- [MC-312206](https://bugs.mojang.com/browse/MC-312206) - When picking up an item, its shadow moves with it
- [MC-312228](https://bugs.mojang.com/browse/MC-312228) - The closed captions for wax being applied or removed are still formatted incorrectly
- [MC-312319](https://bugs.mojang.com/browse/MC-312319) - The closed caption for firing a crossbow attributes firing to the crossbow, while the one for firing a bow attributes it to the arrow
- [MC-312340](https://bugs.mojang.com/browse/MC-312340) - The "Games Quit" statistic no longer increments when leaving the world
- [MC-312433](https://bugs.mojang.com/browse/MC-312433) - The closed caption for throwing ice balls is inconsistent with the ones for other throwable items
- [MC-312521](https://bugs.mojang.com/browse/MC-312521) - The div integer provider returns -2147483648 for -2147483648 / -1 instead of an error
- [MC-312582](https://bugs.mojang.com/browse/MC-312582) - The count of the "All" tab in the other players menu excludes players that are offline
- [MC-312670](https://bugs.mojang.com/browse/MC-312670) - The narrator doesn't read the messages on the backup, optimize world, and error screens
- [MC-312695](https://bugs.mojang.com/browse/MC-312695) - The server sometimes crashes when a client accepts its code of conduct
- [MC-312825](https://bugs.mojang.com/browse/MC-312825) - Dispensers consume the durability of flint and steel and play their clicking sound when facing a sulfur cube holding TNT while the tnt_explodes game rule is set to false
- [MC-312832](https://bugs.mojang.com/browse/MC-312832) - Dispensers cannot give carved pumpkins or glowstone to sulfur cubes
- [MC-312943](https://bugs.mojang.com/browse/MC-312943) - The sounds of dispensers filling bottles with honey from beehives or bee nests are controlled by the "Friendly Mobs" sound category instead of "Blocks"
- [MC-313015](https://bugs.mojang.com/browse/MC-313015) - Blocks in the head slot of baby humanoid mobs render at full size, unlike helmets
- [MC-313048](https://bugs.mojang.com/browse/MC-313048) - Any mouse button can be used to select the recipe book search field by clicking on the search icon
- [MC-313185](https://bugs.mojang.com/browse/MC-313185) - The additional vertical gap applied under item names in their tooltips was removed altogether
- [MC-313204](https://bugs.mojang.com/browse/MC-313204) - The usage cooldown on spawn eggs doesn't prevent spawning baby mobs
- [MC-313218](https://bugs.mojang.com/browse/MC-313218) - Players launched by wind charges experience a sudden drop in movement speed when taking damage
- [MC-313244](https://bugs.mojang.com/browse/MC-313244) - Selecting inventory slots that contain items for the first time causes each item's tooltip to appear slightly later than it should
- [MC-313271](https://bugs.mojang.com/browse/MC-313271) - The slot the mouse cursor is hovering over when opening the inventory can no longer be selected until the cursor is moved away and back
- [MC-313273](https://bugs.mojang.com/browse/MC-313273) - The Creative mode inventory can no longer be scrolled when hovering over a tab
- [MC-313274](https://bugs.mojang.com/browse/MC-313274) - Integer Y coordinates in commands are moved up by half a block
- [MC-313275](https://bugs.mojang.com/browse/MC-313275) - The output order of elements in the loot_context_requirements data generator report is not stable
- [MC-313278](https://bugs.mojang.com/browse/MC-313278) - Dispensers can brush dying armadillos
- [MC-313280](https://bugs.mojang.com/browse/MC-313280) - Shields no longer block melee attacks from mobs or players holding snowballs
- [MC-313290](https://bugs.mojang.com/browse/MC-313290) - /rotate no longer properly rotates mobs vertically
- [MC-313298](https://bugs.mojang.com/browse/MC-313298) - Sulfur cubes with the cold archetype can convert water into frosted ice despite the mob_griefing game rule being set to false
- [MC-313301](https://bugs.mojang.com/browse/MC-313301) - Boats accumulate fall distance at twice the actual rate
- [MC-313306](https://bugs.mojang.com/browse/MC-313306) - Players who join while the "Other Players" menu is open aren't shown in its list
- [MC-313320](https://bugs.mojang.com/browse/MC-313320) - Recipes in the recipe book lose their keyboard focus when clicked again
- [MC-313324](https://bugs.mojang.com/browse/MC-313324) - Dispensers can till dirt from below using the transform_block dispense behavior, unlike players
- [MC-313326](https://bugs.mojang.com/browse/MC-313326) - Dispensers don't use up or damage unstackable items when transforming blocks, unlike players
- [MC-313327](https://bugs.mojang.com/browse/MC-313327) - The shoot_projectile dispense behavior deletes items that can't be shot instead of trying the next behavior
- [MC-313330](https://bugs.mojang.com/browse/MC-313330) - Players launched by many explosions at once on multiplayer servers are teleported back for moving too quickly
- [MC-313333](https://bugs.mojang.com/browse/MC-313333) - Silent turtles play their sand breaking and egg laying sounds when laying eggs
- [MC-313341](https://bugs.mojang.com/browse/MC-313341) - Tags aren't shown in the tooltips of items in the Creative mode inventory when the tag search contains capital letters
- [MC-313342](https://bugs.mojang.com/browse/MC-313342) - The game crashes when placing creaking hearts between non-log blocks added to the \#pale_oak_logs tag
- [MC-313344](https://bugs.mojang.com/browse/MC-313344) - The "Repeat Recipe/Trade" key bind doesn't work when set to a mouse button
- [MC-313346](https://bugs.mojang.com/browse/MC-313346) - Wardens no longer get angry at players who break entities
- [MC-313347](https://bugs.mojang.com/browse/MC-313347) - TNT minecarts explode after falling only two blocks
- [MC-313348](https://bugs.mojang.com/browse/MC-313348) - Attribute effects in the location-based effects of sulfur cube archetypes don't update when sulfur cubes move
- [MC-313358](https://bugs.mojang.com/browse/MC-313358) - Silent foxes play their teleporting sounds after eating chorus fruit
- [MC-313359](https://bugs.mojang.com/browse/MC-313359) - Silent entities play sounds when certain status effects are applied to them
- [MC-313360](https://bugs.mojang.com/browse/MC-313360) - Silent cushions play their placing sound when being placed
- [MC-313361](https://bugs.mojang.com/browse/MC-313361) - Silent entities play the fire extinguishing sound when being extinguished
- [MC-313362](https://bugs.mojang.com/browse/MC-313362) - Silent entities play the thorns damage sound when the thorns enchantment activates
- [MC-313363](https://bugs.mojang.com/browse/MC-313363) - Silent zombies play turtle egg stomping sounds when stomping turtle eggs
- [MC-313364](https://bugs.mojang.com/browse/MC-313364) - Silent zombies play door shaking and breaking sounds when breaking down doors
- [MC-313365](https://bugs.mojang.com/browse/MC-313365) - Silent baby entities play eating sounds when feeding them golden dandelions
- [MC-313366](https://bugs.mojang.com/browse/MC-313366) - Silent foxes play snow breaking sounds when stuck in snow after pouncing
- [MC-313367](https://bugs.mojang.com/browse/MC-313367) - Silent withers play block breaking sounds when breaking blocks
- [MC-313368](https://bugs.mojang.com/browse/MC-313368) - Silent entities play item pickup sounds when picking up items
- [MC-313369](https://bugs.mojang.com/browse/MC-313369) - Silent entities play mace smashing sounds when performing smash attacks using maces
- [MC-313370](https://bugs.mojang.com/browse/MC-313370) - Silent entities play totem activation sounds when using totems of undying
- [MC-313371](https://bugs.mojang.com/browse/MC-313371) - Silent falling suspicious blocks play their breaking sounds when hitting the ground
- [MC-313391](https://bugs.mojang.com/browse/MC-313391) - Approaching fish don't leave water splash trails over waterlogged blocks
- [MC-313429](https://bugs.mojang.com/browse/MC-313429) - ore_vein material rules take exponential time per chunk with shared density functions
- [MC-313435](https://bugs.mojang.com/browse/MC-313435) - The game crashes when a dispenser tries to dispense a block that can be stacked in the same block space and has a place_block dispense behavior
- [MC-313446](https://bugs.mojang.com/browse/MC-313446) - Loot table groups with one child stop sequences when their child fails, unlike larger groups
- [MC-313474](https://bugs.mojang.com/browse/MC-313474) - The game crashes when validating POIs when the \#villagers_can_sleep_on_bed tag contains non-bed blocks
- [MC-313490](https://bugs.mojang.com/browse/MC-313490) - Explosions no longer apply knockback to the player when taking explosion damage
- [MC-313498](https://bugs.mojang.com/browse/MC-313498) - The game crashes when switching from Creative mode to Spectator mode with the "Survival Inventory" tab open and clicking certain slots
- [MC-313499](https://bugs.mojang.com/browse/MC-313499) - /debug function now always throws a ClassCastException
- [MC-313548](https://bugs.mojang.com/browse/MC-313548) - Decorated pots play their failed insertion animation when successfully inserting items into them

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7ade6b7bb19a6ffbc3185c9227ab1871bf17e00e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
