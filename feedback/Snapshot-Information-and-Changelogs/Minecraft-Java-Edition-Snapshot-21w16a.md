---
title: "Minecraft: Java Edition - Snapshot 21w16a"
date: 2021-04-28T14:35:15Z
updated: 2021-04-28T14:35:34Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360060534911-Minecraft-Java-Edition-Snapshot-21w16a
---

Snapshot 21w16a introduces some changes to azaleas and dripstone. On top of that, we've tweaked the textures of raw ores. There are also a few additions to the Caves & Cliffs preview datapack.

# NEW FEATURES IN 21W16A

- Azalea and Flowering Azalea can now be bonemealed to get an Azalea Trees
- Added dripstone growth

## DRIPSTONE GROWTH

- If a stalactite is hanging from a dripstone block with a water source above, it will slowly grow both the stalactite from above and a stalagmite from below
- Growth speed is random but very slow, a single growth step can take several minecraft days
- A stalactite will only grow up to 7 blocks long
- A stalactite will only cause stalagmite growth if the floor or stalagmite below is within 10 blocks
- If the stalactite tip is inside water it won’t drip, and therefore won’t trigger any growth
- If the stalagmite tip is inside water it won’t receive drops, and therefore won’t be grown by a dripping stalactite. Same thing if there is any fluid between the two tips
- A stalagmite or stalactite will never grow into a fluid

# CHANGES IN 21W16A

- Tweaked the texture of raw ores and raw ore blocks

Click [here](https://images.ctfassets.net/8y6ykjruobr4/2ragaS4aJHiGAMrFJSP4RQ/debb3c28f570940eebc77b05ce21837c/snapshot-21w16a-ore-texture-comparison-full.png) for a full resolution image of the new raw ore textures in snapshot 21w16a. 

 

# CHANGES TO THE CAVES & CLIFFS PREVIEW

Download the updated [datapack here](https://launcher.mojang.com/v1/objects/ebe5698b1f6787e30662691f57511a08587db502/CavesAndCliffsPreview.zip).

- Aquifers below height 0 will sometimes be lava aquifers instead of water aquifers
- Ore veins can now spawn underground

Click [here](https://images.ctfassets.net/8y6ykjruobr4/1xwq8In1lqyO4TrAT3VGic/56ddac7d5739b64b38d9998dbdc694a6/snapshot-21w16a-carousel-full.png) for a full resolution image of a lava aquifer in snapshot 21w16a. 

## ORE VEINS

- Ore veins are large, rare, snake-like underground ore formations
- Copper veins form above height 0 and are mixed with granite
- Iron veins form below height 0 and are mixed with tuff

# TECHNICAL CHANGES IN 21W16A

- Users who previously permanently declined server resource packs will now still be shown the pack prompt if the pack is mandatory (instead of being immediately disconnected)
- The statistic for play time has been renamed to play_time
- There is now a statistic for “Time with World Open” (total_world_time) that also includes the time when the game was paused

# FIXED BUGS IN 21W16A

- [MC-29522](https://bugs.mojang.com/browse/MC-29522) - stat.playOneMinute adds a value of 1 every tick
- [MC-55775](https://bugs.mojang.com/browse/MC-55775) - Statistics screen sometimes doesn’t show up to date information
- [MC-111534](https://bugs.mojang.com/browse/MC-111534) - The firework rocket use statistic doesn’t count rockets used for elytra boosting
- [MC-117653](https://bugs.mojang.com/browse/MC-117653) - Recipes and advancements are not granted while most GUIs are open
- [MC-136560](https://bugs.mojang.com/browse/MC-136560) - minecraft.used:minecraft.elytra not functioning
- [MC-136681](https://bugs.mojang.com/browse/MC-136681) - Debug Stick use statistic increases when not allowed to use it
- [MC-157116](https://bugs.mojang.com/browse/MC-157116) - Food that is plantable counts towards using when right clicked on the ground
- [MC-190128](https://bugs.mojang.com/browse/MC-190128) - Using a flint and steel to ingite TNT is not tracked by the in-game stats
- [MC-203637](https://bugs.mojang.com/browse/MC-203637) - Mobs don’t avoid lava cauldrons when pathfinding despite of setting themselves on fire
- [MC-205236](https://bugs.mojang.com/browse/MC-205236) - Frozen State doesn’t go away after respawn when on a server
- [MC-208598](https://bugs.mojang.com/browse/MC-208598) - Baby axolotls take damage when touching a solid block from below / eye height is outside of their hitbox
- [MC-212113](https://bugs.mojang.com/browse/MC-212113) - Glow Lichen can spawn underwater whilst not in a cave.
- [MC-212863](https://bugs.mojang.com/browse/MC-212863) - Glow lichen use the same color as vines on maps
- [MC-213927](https://bugs.mojang.com/browse/MC-213927) - Using bone meal on a sapling that is on a moss block consumes bone meal, but doesn’t grow into a tree
- [MC-213998](https://bugs.mojang.com/browse/MC-213998) - root_vines_head is unused in-game files
- [MC-214129](https://bugs.mojang.com/browse/MC-214129) - Several dirt blocks are not part of the \#minecraft:lush_plants_replaceable tag
- [MC-214293](https://bugs.mojang.com/browse/MC-214293) - Mobs can spawn on top of azaleas
- [MC-215270](https://bugs.mojang.com/browse/MC-215270) - Moss requires air above a replaceable block to spread
- [MC-216787](https://bugs.mojang.com/browse/MC-216787) - Cobwebs in mineshafts can generate as if supported by chains
- [MC-217411](https://bugs.mojang.com/browse/MC-217411) - Anvils can become damaged when only falling one block
- [MC-218590](https://bugs.mojang.com/browse/MC-218590) - Error message for commands.give.failed.toomanyitems doesn’t translate item name
- [MC-218592](https://bugs.mojang.com/browse/MC-218592) - Azalea trees can generate inside of lakes (even completely submerged in water)
- [MC-218614](https://bugs.mojang.com/browse/MC-218614) - Inconsistency: Infested Deepslate can’t be placed along axis
- [MC-218637](https://bugs.mojang.com/browse/MC-218637) - Inconsistency: Infested deepslate is not rotated randomly like normal deepslate
- [MC-219155](https://bugs.mojang.com/browse/MC-219155) - Cast fishing line is disconnected from the rod
- [MC-219211](https://bugs.mojang.com/browse/MC-219211) - Two mysterious white pixels can be seen in the upper left corner of the recipe book icon
- [MC-219851](https://bugs.mojang.com/browse/MC-219851) - Applying bone meal to a waterlogged big dripleaf stem creates more waterlogged big dripleaf stems
- [MC-219903](https://bugs.mojang.com/browse/MC-219903) - Silverfish infesting deepslate cause it to rotate
- [MC-220024](https://bugs.mojang.com/browse/MC-220024) - Shader compilation slows or fails the more asterisks are in a multiline comment
- [MC-220307](https://bugs.mojang.com/browse/MC-220307) - TrueType Font glyphs render incorrectly
- [MC-220641](https://bugs.mojang.com/browse/MC-220641) - Loyalty tridents disappear when your inventory is full
- [MC-220887](https://bugs.mojang.com/browse/MC-220887) - Shader includes fail to compile correctly when missing newline at end of file
- [MC-221560](https://bugs.mojang.com/browse/MC-221560) - Copper/Coal Ore in Deepslate Patches aren’t Deepslate Ores
- [MC-221628](https://bugs.mojang.com/browse/MC-221628) - Entities don’t stop glowing after losing the glowing effect
- [MC-221652](https://bugs.mojang.com/browse/MC-221652) - Teleport command to player does not work as in previous versions
- [MC-221655](https://bugs.mojang.com/browse/MC-221655) - Glow Squids and Axolotls Spawn in Monuments
- [MC-222004](https://bugs.mojang.com/browse/MC-222004) - Grass block isn’t apart of the \#dirt block tag
- [MC-222517](https://bugs.mojang.com/browse/MC-222517) - A large amount of slime or honey blocks will crash the game
- [MC-222684](https://bugs.mojang.com/browse/MC-222684) - You cannot grow azalea trees by bonemealing Azalea plants
- [MC-222778](https://bugs.mojang.com/browse/MC-222778) - minecraft.used:minecraft.candle doesn’t increase when placing a candle on a cake
- [MC-223260](https://bugs.mojang.com/browse/MC-223260) - Emerald ore does not generate as intended
- [MC-223553](https://bugs.mojang.com/browse/MC-223553) - minecraft.used:minecraft.glow_ink_sac doesn’t increase when applying a glow ink sac to a sign
- [MC-223554](https://bugs.mojang.com/browse/MC-223554) - minecraft.used:minecraft.ink_sac doesn’t increase when applying an ink sac to a sign
- [MC-223555](https://bugs.mojang.com/browse/MC-223555) - minecraft.used:minecraft.COLOR_dye doesn’t increase when applying a dye to a sign
- [MC-223557](https://bugs.mojang.com/browse/MC-223557) - minecraft.used:minecraft.bucket doesn’t increase when taking powder snow, lava, or water from a cauldron using a bucket
- [MC-223558](https://bugs.mojang.com/browse/MC-223558) - minecraft.used:minecraft.glass_bottle doesn’t increase when taking water from a cauldron using a glass bottle
- [MC-223563](https://bugs.mojang.com/browse/MC-223563) - minecraft.used:minecraft.glass_bottle doesn’t increase when collecting honey from a beehive or bee nest
- [MC-223638](https://bugs.mojang.com/browse/MC-223638) - minecraft.used:minecraft.shears doesn’t increase when carving a pumpkin
- [MC-223639](https://bugs.mojang.com/browse/MC-223639) - minecraft.used:minecraft.shears doesn’t increase when collecting honeycombs from a beehive or bee nest
- [MC-223756](https://bugs.mojang.com/browse/MC-223756) - minecraft.used:minecraft.powder_snow_bucket doesn’t increase when filling a cauldron with a powder snow bucket
- [MC-223757](https://bugs.mojang.com/browse/MC-223757) - minecraft.used:minecraft.lava_bucket doesn’t increase when filling a cauldron with a lava bucket

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/b8bacc67a9db84db59e2f97e9a9fba3a242480a8/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
