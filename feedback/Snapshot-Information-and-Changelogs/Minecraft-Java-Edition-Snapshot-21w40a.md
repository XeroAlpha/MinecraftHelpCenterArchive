---
title: "Minecraft: Java Edition - Snapshot 21w40a"
date: 2021-10-07T14:37:04Z
updated: 2025-03-12T11:13:34Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/4410827451533-Minecraft-Java-Edition-Snapshot-21w40a
---

Yet another snapshot is now available for Minecraft Java. This time around we've done some additional tweaks to world generation and a few changes to mob spawning.

We've continuously made performance improvements since we released the first Caves & Cliffs: Part II snapshot (21w37a), and we've created another survey about performance. If you try out the snapshot, we would very much appreciate it if you could fill out [this survey](http://aka.ms/MCPerfPoll) and tell us how you perceive the current performance. Thanks and happy mining!

**We still highly recommend backing up your world before loading it in this snapshot.**

# CHANGES IN 21W40A

- World generation tweaks
- Changes to mob spawning
- Copper Ore now drops 2-5 (from 2-3) Raw Copper items
- In the Stonecutter, a Block of Copper can be converted to four Cut Copper
- A bunch of biome variants with similar features but different shapes have been merged into one since the shape is controlled independently now
- Renamed some biomes

## WORLD GENERATION

- Updated ore distribution to make branch mining deep down more rewarding. [Updated ore distribution chart](https://images.ctfassets.net/8y6ykjruobr4/29MoVuTVm4HDgaYuRaEyZW/65db8f6a4c66f54fb47df33c999a7f2e/snapshot-21w-40a-ore-distribution-6th_iteration.jpg)
  - For example, added more unexposed diamonds
  - Iron ore now generates above 80, with more iron ore as you go higher
  - Extra gold generates below height -48
- Non-cave biomes no longer change with height - so no more savannas in the sky and things like that
- Tweaked the relative size of some biomes to match 1.17 a bit closer.
- Increased the average size of most biomes (this also means biomes aren’t in the same places as before)
- Fixed some aquifer issues (a side effect of this is that aquifers are in different places now compared to last snapshot)
- Slightly increased the frequency of underwater magma
- Increased the amount of dungeons, especially below height 0
- Gravel now generates below height 0
- Villages are slightly more spread out
- Removed water lake features, Aquifers provide local water levels

## MOB SPAWNS

- Axolotls now only spawn in water, above clay blocks, in lush caves
- Glowsquids now only spawn in water blocks, under height 30
- Cod, Salmon, Pufferfish, Tropical Fish, Squid, and Dolphins now only spawn in water from height 50 to height 64
- Tropical Fish now also spawn in lush caves at any height
- Zombies once again spawn in dripstone caves – drowned can also spawn there however
- Goats no longer spawn in stony peaks\
  \

![snapshot-21w40-article-carousel.jpg](https://feedback.minecraft.net/hc/article_attachments/4410832167821/snapshot-21w40-article-carousel.jpg)

**Ore distribution in snapshot 21w40a. [Click here](https://images.ctfassets.net/8y6ykjruobr4/29MoVuTVm4HDgaYuRaEyZW/65db8f6a4c66f54fb47df33c999a7f2e/snapshot-21w-40a-ore-distribution-6th_iteration.jpg) for a link to the full-size image.** 

# TECHNICAL CHANGES IN 21W40A

- Optimized AI for Axolotls, Goats, Hoglins, Zoglins, Piglins, Piglin Brutes and Villagers
- Bedrock layers generate dependent on the world seed now

# FIXED BUGS IN 21W40A

- [MC-217906](https://bugs.mojang.com/browse/MC-217906) Large amounts of axolotls cause performance issues
- [MC-229365](https://bugs.mojang.com/browse/MC-229365) Large amounts of goats causes performance issues
- [MC-236632](https://bugs.mojang.com/browse/MC-236632) Banners without patterns do not render properly
- [MC-236663](https://bugs.mojang.com/browse/MC-236663) Command blocks do not display command in their UI
- [MC-236736](https://bugs.mojang.com/browse/MC-236736) No relief on treasure map or explorer maps
- [MC-237925](https://bugs.mojang.com/browse/MC-237925) Opening world from 1.12.2 (or older) in latest snapshot regenerates random chunks
- [MC-237933](https://bugs.mojang.com/browse/MC-237933) Sweet Berries generate much too often
- [MC-237950](https://bugs.mojang.com/browse/MC-237950) Cave vines can generate without tip because prioritize_tip option is negated
- [MC-237951](https://bugs.mojang.com/browse/MC-237951) Cave vines can generate into water
- [MC-237962](https://bugs.mojang.com/browse/MC-237962) Entities bob their head up and down when targeting towards the player
- [MC-238104](https://bugs.mojang.com/browse/MC-238104) Blue Orchid generation has decreased
- [MC-238265](https://bugs.mojang.com/browse/MC-238265) version.json contains internal revision ID instead of game version ID

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/84496ec4beeeae34a448b99f3e3d890066f6807f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
