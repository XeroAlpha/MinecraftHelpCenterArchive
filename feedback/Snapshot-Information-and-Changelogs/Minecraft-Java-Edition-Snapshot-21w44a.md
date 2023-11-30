---
title: "Minecraft: Java Edition - Snapshot 21w44a"
date: 2021-11-03T18:01:20Z
updated: 2021-11-03T18:01:25Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4412655865997-Minecraft-Java-Edition-Snapshot-21w44a
---

Another snapshot is now available. We've added new world generation below existing chunks, and blocks and fluids are now also part of the simulation distance setting. We also fixed a few bugs. 

Keep in mind that we're still working on the world upgrades, so making a backup before upgrading is still a good idea.

Enjoy!

# NEW FEATURES IN 21W44A

- New world generation is now inserted under existing chunks when upgrading a world to the new world height
- Added an Online options screen where you can now find the Realms Notifications option and Difficulty when on a server
- Added an “Allow Server Listings” option to opt-out of having your name displayed in server listings

# CHANGES IN 21W44A

- Sleeping now only resets the weather cycle if it was raining
- Blocks and fluids are now also affected by simulation distance. It might be a good idea to test that the behavior of your redstone contraptions remained the same
- Optimized entity collisions

# TECHNICAL CHANGES IN 21W44A

- Servers can now set property hide-online-players to true in order to not send a player list on status requests
- When JFR profiling is started from an external source, the JFR events for network packets are now aggregated instead of one event per packet

# FIXED BUGS IN 21W44A

- [MC-63340](https://bugs.mojang.com/browse/MC-63340) - Sleeping always resets time until rain
- [MC-170551](https://bugs.mojang.com/browse/MC-170551) - Foxes can’t spawn on podzol or coarse dirt
- [MC-200494](https://bugs.mojang.com/browse/MC-200494) - In mineshafts, torches can generate attached to blocks other than the wooden supports
- [MC-216432](https://bugs.mojang.com/browse/MC-216432) - Mineshafts can generate with light but without any torches
- [MC-216561](https://bugs.mojang.com/browse/MC-216561) - Torches not spawning in abandoned mineshafts under y=0
- [MC-217038](https://bugs.mojang.com/browse/MC-217038) - Large dripstone structures can be generated outside the caves
- [MC-236701](https://bugs.mojang.com/browse/MC-236701) - New mountain biomes don’t count towards “Adventuring Time” advancement
- [MC-236938](https://bugs.mojang.com/browse/MC-236938) - /jfr stop output does not have a link
- [MC-237986](https://bugs.mojang.com/browse/MC-237986) - Mobs specific to structures aren’t spawning in their structures
- [MC-238062](https://bugs.mojang.com/browse/MC-238062) - Foxes & Wolves don’t spawn in Groves
- [MC-238761](https://bugs.mojang.com/browse/MC-238761) - Adventuring Time does not account for the new cave biomes
- [MC-238877](https://bugs.mojang.com/browse/MC-238877) - Deep Ocean & Ocean is not needed for the “Adventure Time” advancement
- [MC-238900](https://bugs.mojang.com/browse/MC-238900) - Values of ‘Infinity’ in noise settings in default worldgen
- [MC-238912](https://bugs.mojang.com/browse/MC-238912) - Powder snow strips can’t generate exposed to the surface
- [MC-238962](https://bugs.mojang.com/browse/MC-238962) - Icebergs go all the way to ocean floor.
- [MC-238966](https://bugs.mojang.com/browse/MC-238966) - Old Growth Spruce Taiga and Old Growth Birch Forest aren’t part of the “Adventuring Time” advancement
- [MC-238968](https://bugs.mojang.com/browse/MC-238968) - Windswept Gravelly Hills & Windswept Savanna aren’t apart of the “Adventuring Time” advancement
- [MC-239280](https://bugs.mojang.com/browse/MC-239280) - Withers do not move down to follow the player when the wither’s health is half or lower
- [MC-239344](https://bugs.mojang.com/browse/MC-239344) - All torches in mineshafts are facing the wrong way
- [MC-239359](https://bugs.mojang.com/browse/MC-239359) - Wither Skeletons can only spawn on Nether Bricks
- [MC-239689](https://bugs.mojang.com/browse/MC-239689) - The “amplified” boolean in noise settings does nothing
- [MC-239854](https://bugs.mojang.com/browse/MC-239854) - Nether and caves world is missing bedrock
- [MC-239858](https://bugs.mojang.com/browse/MC-239858) - Nether decorations can be generated on the original bedrock layer
- [MC-239866](https://bugs.mojang.com/browse/MC-239866) - Terrain shaper in noise_settings is not used

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/ae583fd57a8c07f2d6fbadce1ce1e1379bf4b32d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
