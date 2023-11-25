---
title: "Minecraft: Java Edition - Snapshot 21w18a"
date: 2021-05-05T19:40:37Z
updated: 2021-05-05T19:41:06Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360060468912-Minecraft-Java-Edition-Snapshot-21w18a
---

Hey-hoo! Will you look at that! It\'s Wednesday once again, which means we get to share updates about all the Minecraft bits and bobs. This week, we\'re distributing an ore distribution Snapshot for all you lovely Snapshot connoisseurs to feast upon. Enjoy!

# CHANGES IN 21W18A

-   Infested Blocks are no longer instantly destroyed. Instead, they have half the destroy time of their non-infested counterpart.
-   Screaming goats will use their ram attack more often than other goats will

# CHANGES TO THE CAVES & CLIFFS PREVIEW

Download the [updated datapack](https://launcher.mojang.com/v1/objects/6b510a715701aec5e601c7966d87922a300e0c73/CavesAndCliffsPreview.zip).\
\
[Click here](https://images.ctfassets.net/8y6ykjruobr4/2LIQ8aXiaLvRyHRob8wBXg/fde7e0a9e8c97f1430f06f8cfc935077/snapshot-21w18a-ores-distribution-full.jpg) for a full resolution image of ore distribution in 21w18a. 

-   Reduced Copper spawning a bit, to compensate for large ore veins
-   Large ore veins are slightly more rare and slightly smaller on average. But the size varies a lot so you can still find huge ones.
-   Increased chance of finding raw ore blocks in ore veins
-   Cave carvers generate below y 0 in Ocean biomes (they didn't before, it was an accident)
-   Increased the minimum size of noodle caves and carvers, to make them easier to traverse and less likely to break up into fragments.
-   Noodle caves no longer generate above y 30, so the surface should be less riddled with holes.
-   Removed Deepslate blobs above y 0
-   Extended the vertical range of the smaller blobs of iron ore, to make it possible to find iron in caves near the surface.
-   Slightly reduced the amount of normal-sized iron blobs, to compensate for large ore veins and the increased range of smaller blobs.

# FIXED BUGS IN 21W18A

-   [MC-3587](https://bugs.mojang.com/browse/MC-3587) - Last use of an anvil causes player to drop their item
-   [MC-87935](https://bugs.mojang.com/browse/MC-87935) - When closing the inventory while holding an item with the cursor in Creative mode, the item disappears
-   [MC-125033](https://bugs.mojang.com/browse/MC-125033) - Old cave and ravine generation gets cut off unnaturally on chunk borders near water
-   [MC-162953](https://bugs.mojang.com/browse/MC-162953) - NativeImage bounds checks are incorrect
-   [MC-197616](https://bugs.mojang.com/browse/MC-197616) - Certain custom biome settings cause game to spam "Received invalid biome id: -1" in the console, causing major lag or freeze
-   [MC-204707](https://bugs.mojang.com/browse/MC-204707) - Adventure mode players can extinguish candles
-   [MC-204969](https://bugs.mojang.com/browse/MC-204969) - No "Burning" sound for items burning in lava cauldron
-   [MC-205797](https://bugs.mojang.com/browse/MC-205797) - Zoglins attack Marker armor stands and Invisible armor stands
-   [MC-206560](https://bugs.mojang.com/browse/MC-206560) - Pufferfish react to Marker armor stands and Invisible armor stands
-   [MC-208430](https://bugs.mojang.com/browse/MC-208430) - Minecraft crashes when loading resource pack due to "tessellating block model"
-   [MC-208679](https://bugs.mojang.com/browse/MC-208679) - Axolotl inconsistently doesn't show its mouth in-game
-   [MC-211064](https://bugs.mojang.com/browse/MC-211064) - Loading in a TrueTypeFont with an out-of-bounds size crashes the game
-   [MC-214159](https://bugs.mojang.com/browse/MC-214159) - Small Dripleaf sometimes shrink into smaller (1 block tall) Big Dripleaf when using bone meal
-   [MC-214427](https://bugs.mojang.com/browse/MC-214427) - Spore Blossoms can be used to breathe underwater / cannot be waterlogged
-   [MC-214793](https://bugs.mojang.com/browse/MC-214793) - Some strips of chunks generate completely dark
-   [MC-214808](https://bugs.mojang.com/browse/MC-214808) - World occasionally fails to load correctly
-   [MC-214860](https://bugs.mojang.com/browse/MC-214860) - Some chunks in a line are lit up constantly
-   [MC-214898](https://bugs.mojang.com/browse/MC-214898) - Extreme world generation lag
-   [MC-215867](https://bugs.mojang.com/browse/MC-215867) - Crash: java.lang.IllegalStateException: Chunk not there when requested
-   [MC-215946](https://bugs.mojang.com/browse/MC-215946) - Game fatally crashed while exploring chunks (IllegalStateException: Accessing PalettedContainer from multiple threads)
-   [MC-216148](https://bugs.mojang.com/browse/MC-216148) - Some chunks occasionally don't save properly, resetting progress
-   [MC-221647](https://bugs.mojang.com/browse/MC-221647) - Goat Babies Don't Follow Parents
-   [MC-221725](https://bugs.mojang.com/browse/MC-221725) - Legs of goats move differently
-   [MC-221727](https://bugs.mojang.com/browse/MC-221727) - Goat eye height is outside of its hitbox while airborne
-   [MC-221840](https://bugs.mojang.com/browse/MC-221840) - Goats can still do high jumps normally when on honey blocks
-   [MC-222151](https://bugs.mojang.com/browse/MC-222151) - Goat head animation is weird when it rides a boat
-   [MC-222157](https://bugs.mojang.com/browse/MC-222157) - Eye position of the goat is too high in some cases, causing suffocation
-   [MC-222458](https://bugs.mojang.com/browse/MC-222458) - UVs on the goat's ears aren't mirrored as they should be
-   [MC-223141](https://bugs.mojang.com/browse/MC-223141) - Piglins aren't attracted to a Block of Raw Gold
-   [MC-223145](https://bugs.mojang.com/browse/MC-223145) - Piglins aren't angered when mining a Block of Raw Gold
-   [MC-223150](https://bugs.mojang.com/browse/MC-223150) - Goats ram Marker armor stands & Invisible armor stands
-   [MC-223178](https://bugs.mojang.com/browse/MC-223178) - Deepslate Tile Stairs come before Deepslate Brick Stairs in the creative inventory
-   [MC-223203](https://bugs.mojang.com/browse/MC-223203) - Deepslate ore map colors are inconsistent with deepslate
-   [MC-223239](https://bugs.mojang.com/browse/MC-223239) - Ramming sound that comes from a baby goat does not change pitch
-   [MC-223422](https://bugs.mojang.com/browse/MC-223422) - When removing water from base of Small Dripleaf, the block stands without water untill a block update
-   [MC-224401](https://bugs.mojang.com/browse/MC-224401) - Mob death does not show death particles
-   [MC-224428](https://bugs.mojang.com/browse/MC-224428) - Raw ore blocks can generate as floating blocks in ore veins

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/0b18d883bd1132f761aa715d6a97e29e54a9b8b6/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
