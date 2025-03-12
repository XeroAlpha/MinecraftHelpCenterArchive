---
title: "Minecraft: Java Edition - Snapshot 21w43a"
date: 2021-10-27T16:37:29Z
updated: 2025-03-12T11:13:33Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/4412156111629-Minecraft-Java-Edition-Snapshot-21w43a
---

Here's a snapshot from the blender! In this snapshot, world generation around the edges of an old world will now be adjusted for a smoother transition! This is the first iteration of this system, which we expect to keep improving. Keep in mind that if you try it out now, the result will be saved to your world forever – which, as we know, is quite a long time. Better be safe than sorry – make a backup before you try it!

Also – the space underneath existing chunks is now filled in, but only with deepslate. We will be adding full cave generation in this place later on, so if you want that in your world, make a backup before you try it!

Due to some updates to terrain generation in this snapshot, seeds have shuffled once again so worlds will not look like they did in the previous snapshot. We expect world seeds to be stable after this snapshot.

Oh yeah, did we mention that it's a good idea to make a backup?

# NEW FEATURES IN 21W43A

- The edge between old and new world generation is now adjusted when you upgrade a world

## UPGRADING OF OLD WORLDS

- When generating close to old chunks hew terrain is adjusted to better match the existing terrain at the borders
- In old chunks, if there is Bedrock at y=0, the column below will be filled with Deepslate
  - Worlds upgraded in this snapshot will permanently have this deepslate, so if you want new caves under height 0 later, make sure to keep a backup before upgrading
- The old Bedrock between y=0 and y=4 in old chunks gets replaced with Deepslate
- A new Bedrock layer is placed at y=-64

# CHANGES IN 21W43A

- The Priority Updates video setting has been renamed to Chunk Builder
- Reduced the amount of flooded caves near river and ocean coastlines
- Aquifer water levels change less often, so you’ll more often have larger areas with the same water level. This means slightly fewer underground waterfalls and slightly easier underground boat travel
- Lava aquifers are slightly less common
- Restricted Big Dripleaf placement to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol and Mycelium

# TECHNICAL CHANGES IN 21W43A

- Some internal details of block and fluid ticking have been changed to improve save times. While it should behave exactly as it was, it might be a good time to test your redstone contraptions (on a copy of a world or with a backup, of course)
- The Chunk format has been updated

## WORLD DATA: CHUNK FORMAT

- Removed chunk’s Level and moved everything it contained up
- Chunk’s Level.Entities has moved to entities
- Chunk’s Level.TileEntities has moved to block_entities
- Chunk’s Level.TileTicks and Level.ToBeTicked have moved to block_ticks
- Chunk’s Level.LiquidTicks and Level.LiquidsToBeTicked have moved to fluid_ticks
- Chunk’s Level.Sections has moved to sections
- Chunk’s Level.Structures has moved to structures
- Chunk’s Level.Structures.Starts has moved to structures.starts
- Chunk’s Level.Sections\[\].BlockStates and Level.Sections\[\].Palette have moved to a container structure in sections\[\].block_states
- Chunk’s Level.Biomes are now paletted and live in a similar container structure in sections\[\].biomes
- Added yPos the minimum section y position in the chunk
- Added below_zero_retrogen containing data to support below zero generation
- Added blending_data containing data to support blending new world generation with existing chunks

# FIXED BUGS IN 21W43A

- [MC-131930](https://bugs.mojang.com/browse/MC-131930) - Deep warm ocean generates without coral and sea pickles
- [MC-156616](https://bugs.mojang.com/browse/MC-156616) - Badlands layers not generating properly
- [MC-217379](https://bugs.mojang.com/browse/MC-217379) - Pufferfish don’t spawn in deep warm ocean
- [MC-236624](https://bugs.mojang.com/browse/MC-236624) - Deep Warm Oceans don’t count towards the “Adventuring Time” advancement
- [MC-236970](https://bugs.mojang.com/browse/MC-236970) - Badlands strata is covered by orange terracotta at Y=160 and above
- [MC-238073](https://bugs.mojang.com/browse/MC-238073) - Decorators are independent of world seed
- [MC-238939](https://bugs.mojang.com/browse/MC-238939) - Stone can generate in the Nether
- [MC-239397](https://bugs.mojang.com/browse/MC-239397) - Lava pockets generate in icebergs

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/cf518e2c80fdaef443d68d50d1ac23a72a0a7d85/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
