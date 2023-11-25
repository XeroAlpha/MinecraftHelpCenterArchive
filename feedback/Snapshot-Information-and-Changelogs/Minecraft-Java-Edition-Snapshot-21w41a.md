---
title: "Minecraft: Java Edition - Snapshot 21w41a"
date: 2021-10-14T06:59:23Z
updated: 2021-10-14T06:59:49Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4411284365453-Minecraft-Java-Edition-Snapshot-21w41a
---

Have a random snapshot! In this snapshot, we\'ve replaced the random number generator used for world generation, which makes more seeds come out as different\... but it also moves everything around in the world, so expect all worlds to look different in this snapshot.

Another thing that we\'ve replaced is the cubemap - the spinning image that you see behind the main menu. It\'s pretty sweet!

Also, in case you missed it, we\'re having our [annual Minecraft Live event](https://www.minecraft.net/live) this Saturday. Make sure to check that out!

**We still highly recommend backing up your world before loading it in this snapshot.**

# CHANGES IN 21W41A

-   The main menu backdrop now shows a Caves & Cliffs: Part II scene
-   Badlands mineshafts generate higher up
-   Geodes now only generate up to height 30 and their rarity has been adjusted to match 1.17 levels
-   The angle at which sprinting against a block does not break your sprint has been increased a bit

# TECHNICAL CHANGES IN 21W41A

-   Changed the prioritization order of the chunk rendering pipeline
    -   Unrendered chunk holes in the world should not appear anymore while flying fast with a high render distance
-   Server classes are now signed
-   New random number generator for Overworld generation

# FIXED BUGS IN 21W41A

-   [MC-118134](https://bugs.mojang.com/browse/MC-118134) Item frame texture as an item uses texture of oak planks
-   [MC-137950](https://bugs.mojang.com/browse/MC-137950) Signs textures does not correspond to the actual texture of their handle
-   [MC-142385](https://bugs.mojang.com/browse/MC-142385) Campfire texture has one pixel extending into hotbar outline
-   [MC-148182](https://bugs.mojang.com/browse/MC-148182) The zombie villager \"profession\" texture uses villager-skin-colored pixels
-   [MC-152506](https://bugs.mojang.com/browse/MC-152506) Wither skull projectile has faces with old texture
-   [MC-160256](https://bugs.mojang.com/browse/MC-160256) Texture of door items does not match the blocks
-   [MC-166508](https://bugs.mojang.com/browse/MC-166508) Glitchy chunk rendering since 1.15 pre-release 2
-   [MC-173339](https://bugs.mojang.com/browse/MC-173339) Comparators lit base texture is incorrect
-   [MC-203155](https://bugs.mojang.com/browse/MC-203155) Enchanting table GUI uses old lapis texture
-   [MC-225949](https://bugs.mojang.com/browse/MC-225949) Parity Issue: different Bedrock and Java sign items textures.
-   [MC-227398](https://bugs.mojang.com/browse/MC-227398) Misplaced pixel on cave vines texture
-   [MC-230302](https://bugs.mojang.com/browse/MC-230302) Glow Item Frame item texture is missing two pixels
-   [MC-236620](https://bugs.mojang.com/browse/MC-236620) Nether biomes don\'t generate correctly
-   [MC-236650](https://bugs.mojang.com/browse/MC-236650) Minecraft in 1.18 has 2\^48 seeds instead of 2\^64 seeds.
-   [MC-237330](https://bugs.mojang.com/browse/MC-237330) Worlds created with seed \"REDApRES\" (0) crash when trying to load new 1.18 mountain biomes / java.lang.NullPointerException: Cannot invoke \"dfw.a(double, double, double)\" because \"this.a\" is null
-   [MC-237457](https://bugs.mojang.com/browse/MC-237457) Snowy Slopes biome no longer generates stone cliff feature from experimental snapshots
-   [MC-238003](https://bugs.mojang.com/browse/MC-238003) Stone in jagged peaks is always covered by snow blocks
-   [MC-238561](https://bugs.mojang.com/browse/MC-238561) Axolotls aren\'t able to spawn at all in lush caves (recurrence of MC-218701)
-   [MC-238661](https://bugs.mojang.com/browse/MC-238661) InhabitedTime value/Local Difficulty doesn\'t increase

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/8eab49e576b21d6babfc60dcd14c68fac4926ab3/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
