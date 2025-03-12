---
title: "Minecraft: Java Edition - 1.18 Pre-Release 2 "
date: 2021-11-16T17:37:31Z
updated: 2025-03-12T11:13:33Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/4413713019277-Minecraft-Java-Edition-1-18-Pre-Release-2
hash:
  technical-changes-in-1.18-pre-release-2: technical-changes-in-118-pre-release-2
  fixed-bugs-in-1.18-pre-release-2: fixed-bugs-in-118-pre-release-2
---

The second pre-release for Minecraft Java is now available. In this pre-release, we've upgraded the Java version that is bundled with the game, and the game now uses Java 17. Other than this, we've mostly been busy fixing bugs.

Enjoy!

# TECHNICAL CHANGES IN 1.18 PRE-RELEASE 2

Minecraft now uses Java version 17. If you are using a default setup the Launcher will download and install the correct version. If you are using a custom Java setup or a third-party launcher, you will need to ensure that your Java installation is version 17 or above.

# FIXED BUGS IN 1.18 PRE-RELEASE 2

- [MC-32813](https://bugs.mojang.com/browse/MC-32813) - Floating water / lava above caves / cave carver doesn’t update water
- [MC-206303](https://bugs.mojang.com/browse/MC-206303) - Minecarts have old textures on the bottom
- [MC-214963](https://bugs.mojang.com/browse/MC-214963) - Mineshaft generation is non-deterministic
- [MC-217038](https://bugs.mojang.com/browse/MC-217038) - Large dripstone structures can be generated outside the caves
- [MC-217056](https://bugs.mojang.com/browse/MC-217056) - Some high-speed particles lag/freeze the game
- [MC-220061](https://bugs.mojang.com/browse/MC-220061) - Painting back texture is mirrored
- [MC-223917](https://bugs.mojang.com/browse/MC-223917) - Goats on fire do not attempt to pathfind towards water
- [MC-226689](https://bugs.mojang.com/browse/MC-226689) - Albert Pastore’s name is grey and improperly indented in the credits
- [MC-227163](https://bugs.mojang.com/browse/MC-227163) - Credits say ‘‘IT Manager’’ instead of ‘‘IT Managers’’
- [MC-227204](https://bugs.mojang.com/browse/MC-227204) - “Explore, dream, discover” quote no longer appears after new credits
- [MC-227206](https://bugs.mojang.com/browse/MC-227206) - Random names in the new credits use curly quotes/apostrophes
- [MC-227231](https://bugs.mojang.com/browse/MC-227231) - Steven Silvester’s name is misspelt in the credits
- [MC-227239](https://bugs.mojang.com/browse/MC-227239) - In the credits, Elizabeth Batson’s company name is improperly capitalized
- [MC-227329](https://bugs.mojang.com/browse/MC-227329) - The usage and punctuation of “Inc” is still inconsistent in the credits
- [MC-231782](https://bugs.mojang.com/browse/MC-231782) - Missing “(” in Frank Criscione credit
- [MC-236756](https://bugs.mojang.com/browse/MC-236756) - Biome-exclusive mob spawn rates are reduced
- [MC-236858](https://bugs.mojang.com/browse/MC-236858) - Seeds that spawn you in the middle of the ocean cause lag
- [MC-237608](https://bugs.mojang.com/browse/MC-237608) - Server address shown when connection fails during server startup
- [MC-238049](https://bugs.mojang.com/browse/MC-238049) - Passive mobs (cows, pigs, sheep, chickens) sometimes do not spawn
- [MC-238076](https://bugs.mojang.com/browse/MC-238076) - UpgradeData in chunk is not migrated to new world height
- [MC-238375](https://bugs.mojang.com/browse/MC-238375) - Crash and/or data corruption upon attempting to save a world with a world border center over 30 million blocks
- [MC-238587](https://bugs.mojang.com/browse/MC-238587) - Sprinting while flying into a block causes the screen to rapidly zoom in and out
- [MC-239397](https://bugs.mojang.com/browse/MC-239397) - Lava pockets generate in icebergs
- [MC-239423](https://bugs.mojang.com/browse/MC-239423) - Kumi Tanioka isn’t under “Music composed by” in the credits
- [MC-239856](https://bugs.mojang.com/browse/MC-239856) - Upgrading old worlds causes vines to have the wrong block state
- [MC-239857](https://bugs.mojang.com/browse/MC-239857) - Fences, iron bars, and glass panes often use an incorrect block state after conversion
- [MC-239884](https://bugs.mojang.com/browse/MC-239884) - Water from old chunks don’t properly propagate into new chunks
- [MC-239899](https://bugs.mojang.com/browse/MC-239899) - Connected redstone does not properly upgrade from older versions
- [MC-240030](https://bugs.mojang.com/browse/MC-240030) - Holes in worlds created in Alpha and Infdev below y=0 after conversion
- [MC-240494](https://bugs.mojang.com/browse/MC-240494) - Duplicated mineshafts with new cave generation
- [MC-240507](https://bugs.mojang.com/browse/MC-240507) - Mob Spawning in structures fails in pre-1.18 generated monuments/swamp huts/outposts
- [MC-240570](https://bugs.mojang.com/browse/MC-240570) - Biomes in old chunks are not copied to new caves below Y=0 when chunks are extended
- [MC-240610](https://bugs.mojang.com/browse/MC-240610) - “Allow Server Listings” option doesn’t save its last setting
- [MC-240783](https://bugs.mojang.com/browse/MC-240783) - Powder snow does not reduce or negate fall damage
- [MC-241111](https://bugs.mojang.com/browse/MC-241111) - Some Mojang employees are not mentioned in the credits
- [MC-241194](https://bugs.mojang.com/browse/MC-241194) - Crash: java.lang.NullPointerException: Cannot invoke “ddm.a(cao, cps, java.util.Random, gh)” because the return value of “java.util.function.Supplier.get()” is null
- [MC-241199](https://bugs.mojang.com/browse/MC-241199) - Double chests have incorrect block states after upgrading old worlds
- [MC-241208](https://bugs.mojang.com/browse/MC-241208) - Powered buttons, pressure plates, and tripwire hooks remain powered forever after upgrading old worlds
- [MC-241234](https://bugs.mojang.com/browse/MC-241234) - Fossils get cut off at chunk borders
- [MC-241413](https://bugs.mojang.com/browse/MC-241413) - Floating water generates around ravines

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c203586f5d2c02b417f0e104b65a8e5e7625b2f8/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
