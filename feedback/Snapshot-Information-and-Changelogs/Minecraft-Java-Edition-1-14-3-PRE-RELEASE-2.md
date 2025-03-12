---
title: "Minecraft: Java Edition - 1.14.3 PRE-RELEASE 2"
date: 2019-06-03T15:02:49Z
updated: 2025-03-12T11:15:31Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360029074071-Minecraft-Java-Edition-1-14-3-PRE-RELEASE-2
hash:
  changes-in-1.14.3-pre-release-2: changes-in-1143-pre-release-2
  fixed-bugs-in-1.14.3-pre-release-2: fixed-bugs-in-1143-pre-release-2
  changes-in-1.14.3-pre-release-1: changes-in-1143-pre-release-1
  fixed-bugs-in-1.14.2-pre-release-3: fixed-bugs-in-1142-pre-release-3
---

7 June 2019

We're now releasing the first pre-release of 1.14.3 which addresses a couple of bugs. Please report any bugs you find on our [bug tracker](https://bugs.mojang.com/browse/MC), it helps a lot!

**Update:** We've now released the second pre-release of 1.14.3. This one has changes to patrols, Villager panic behaviour, and a few bugfixes.

# CHANGES IN 1.14.3 PRE-RELEASE 2

- Patrol changes
  - Vindicators are no longer part of patrols
  - Doubled the minimum time to spawn from 5 + (up to 1) minutes to 10 + (up to 1) minutes
  - Patrols no longer spawns if the block light level disallows monster spawning
  - Patrols are now allowed to spawn in any biome except mushroom biomes
- Panicked Villagers now have to work and sleep so they can't be in a state of panic all the time
- "Last slept" and "last worked" is now saved properly for Villagers
- Reverted enchanting system to how it was before 1.14
- Saturation is no longer required for the "How did we get here?" advancement
- Fixed bugs

# FIXED BUGS IN 1.14.3 PRE-RELEASE 2

- [MC-72390](https://bugs.mojang.com/browse/MC-72390) - Rcon is not thread-safe
- [MC-124170](https://bugs.mojang.com/browse/MC-124170) - Performance issue with particles causing lag
- [MC-129491](https://bugs.mojang.com/browse/MC-129491) - Advancement location trigger works inconsistently for structures added in 1.9 or later
- [MC-139257](https://bugs.mojang.com/browse/MC-139257) - Server crash on reload when worldborder is modified.
- [MC-141301](https://bugs.mojang.com/browse/MC-141301) - Illager patrols spawning on blocks mobs shouldn’t spawn on, such as slabs, carpets, stairs, etc.
- [MC-142360](https://bugs.mojang.com/browse/MC-142360) - Pillagers patrols can spawn pillagers on top of trees inside a leaf block
- [MC-144107](https://bugs.mojang.com/browse/MC-144107) - Miscalculation of camera position in windowed mode on Linux
- [MC-144929](https://bugs.mojang.com/browse/MC-144929) - When there is water above a water source, other water sources adjacent to the water source flow outwards
- [MC-146433](https://bugs.mojang.com/browse/MC-146433) - Double Chest does not display custom name
- [MC-148600](https://bugs.mojang.com/browse/MC-148600) - Zombie pigmen will spread their anger forever if they can continously respawn
- [MC-148986](https://bugs.mojang.com/browse/MC-148986) - Low-tier enchants from lv.30 standard enchanting setups
- [MC-149877](https://bugs.mojang.com/browse/MC-149877) - Baby foxes suffocate when jumping under blocks
- [MC-150401](https://bugs.mojang.com/browse/MC-150401) - Chickens suffocate if jumping while under a solid block
- [MC-150954](https://bugs.mojang.com/browse/MC-150954) - Pillager Patrol spawn is way off. Spawning too close to each other, in odd biomes, and too frequent.
- [MC-151566](https://bugs.mojang.com/browse/MC-151566) - Pillagers patrols can spawn outside world border
- [MC-151989](https://bugs.mojang.com/browse/MC-151989) - Players in Survival do not get Dolphins Grace effect if Dolphin cannot path to Player
- [MC-152638](https://bugs.mojang.com/browse/MC-152638) - Villager trade GUI does not close when a major change happens to the Villager, leading to free trades and quick stock refreshing
- [MC-153221](https://bugs.mojang.com/browse/MC-153221) - dragon fireball causes FPS to crash
- [MC-153714](https://bugs.mojang.com/browse/MC-153714) - Old graphics card warning on Mac despite having recent hardware
- [MC-153734](https://bugs.mojang.com/browse/MC-153734) - Vanilla data pack disabled after upgrading a world to 1.14.3 (items do not drop, fishing doesn’t work, no advancements, …)

# CHANGES IN 1.14.3 PRE-RELEASE 1

- Fixed bugs
- Villagers that are panicking now have a bigger chance of spawning Iron Golems
- Improved performance
- Farmers now spend more time farming when they are working
- Farmers can now always give away food even if other villagers don't need it

# FIXED BUGS IN 1.14.2 PRE-RELEASE 3

- [MC-74407](https://bugs.mojang.com/browse/MC-74407) - Villager inventories can get into a state where villagers cannot do anything useful
- [MC-123836](https://bugs.mojang.com/browse/MC-123836) - Double blocks aren’t loaded in structures
- [MC-138053](https://bugs.mojang.com/browse/MC-138053) - Gamerule spectatorsGenerateChunks being false prevents chunks from being loaded
- [MC-143369](https://bugs.mojang.com/browse/MC-143369) - Wandering trader text implies trades refresh
- [MC-144507](https://bugs.mojang.com/browse/MC-144507) - The legs on cats clip through to the top of the model
- [MC-145863](https://bugs.mojang.com/browse/MC-145863) - Villagers breed even if there are not enough beds
- [MC-146835](https://bugs.mojang.com/browse/MC-146835) - Illager captain spawned from raids will still give the bad omen effect to its killer, causing raids to never end
- [MC-147851](https://bugs.mojang.com/browse/MC-147851) - Villagers frequently run right into mobs they’re “trying” to avoid
- [MC-148610](https://bugs.mojang.com/browse/MC-148610) - Hostile mobs spawning on top Trapdoors, Glowstone and Sea Lanterns
- [MC-149443](https://bugs.mojang.com/browse/MC-149443) - Iron golems spawn too often
- [MC-149372](https://bugs.mojang.com/browse/MC-149372) - Game crashes when opening a 1.13.2 world
- [MC-150319](https://bugs.mojang.com/browse/MC-150319) - I can’t load up my minecraft world after doing /kill
- [MC-151079](https://bugs.mojang.com/browse/MC-151079) - An employed villager quickly becomes unemployed and employed when he works, even if his workstation has not been deleted.
- [MC-151084](https://bugs.mojang.com/browse/MC-151084) - Chunk rendering is slow and random in 1.14.1 (pre 1)
- [MC-151144](https://bugs.mojang.com/browse/MC-151144) - Hostile mobs in lazy chunks no longer count towards mob cap, breaking mob switches
- [MC-151185](https://bugs.mojang.com/browse/MC-151185) - Game crash after breaking villager point of interest
- [MC-151337](https://bugs.mojang.com/browse/MC-151337) - Mob spawn rate too high
- [MC-151346](https://bugs.mojang.com/browse/MC-151346) - Crash while F3 menu tries to access tags while /reload-ing
- [MC-151395](https://bugs.mojang.com/browse/MC-151395) - Farmers create Bread ONLY when they pick up at least 3 wheat AT ONCE
- [MC-151753](https://bugs.mojang.com/browse/MC-151753) - More than one raid can happen in a village
- [MC-151771](https://bugs.mojang.com/browse/MC-151771) - Villagers don’t try to run away from zombie villagers
- [MC-151772](https://bugs.mojang.com/browse/MC-151772) - Mob cap in the hundreds to over 1000 per player.
- [MC-151802](https://bugs.mojang.com/browse/MC-151802) - Spawning causes massive TPS CPU load on a flat world.
- [MC-151995](https://bugs.mojang.com/browse/MC-151995) - Patrol Leaders spawning without banner
- [MC-152044](https://bugs.mojang.com/browse/MC-152044) - Baby trader llamas disappear immediately
- [MC-152053](https://bugs.mojang.com/browse/MC-152053) - High client-side lag when pistons activate
- [MC-152228](https://bugs.mojang.com/browse/MC-152228) - Can not /summon trader llama
- [MC-152542](https://bugs.mojang.com/browse/MC-152542) - Resource Warning “Codepoint ‘1ed0’ declared multiple times in minecraft:textures/font/accented.png”
- [MC-152810](https://bugs.mojang.com/browse/MC-152810) - Cat’s natural spawning causes Null Pointer Exception
- [MC-153222](https://bugs.mojang.com/browse/MC-153222) - Broken/Incorrect recipe files cause a data pack not to load with nothing in log- [MC-74407](https://bugs.mojang.com/browse/MC-74407) - Villager inventories can get into a state where villagers cannot do anything useful
- [MC-123836](https://bugs.mojang.com/browse/MC-123836) - Double blocks aren’t loaded in structures
- [MC-138053](https://bugs.mojang.com/browse/MC-138053) - Gamerule spectatorsGenerateChunks being false prevents chunks from being loaded
- [MC-143369](https://bugs.mojang.com/browse/MC-143369) - Wandering trader text implies trades refresh
- [MC-144507](https://bugs.mojang.com/browse/MC-144507) - The legs on cats clip through to the top of the model
- [MC-145863](https://bugs.mojang.com/browse/MC-145863) - Villagers breed even if there are not enough beds
- [MC-146835](https://bugs.mojang.com/browse/MC-146835) - Illager captain spawned from raids will still give the bad omen effect to its killer, causing raids to never end
- [MC-147851](https://bugs.mojang.com/browse/MC-147851) - Villagers frequently run right into mobs they’re “trying” to avoid
- [MC-148610](https://bugs.mojang.com/browse/MC-148610) - Hostile mobs spawning on top Trapdoors, Glowstone and Sea Lanterns
- [MC-149372](https://bugs.mojang.com/browse/MC-149372) - Game crashes when opening a 1.13.2 world
- [MC-150319](https://bugs.mojang.com/browse/MC-150319) - I can’t load up my minecraft world after doing /kill
- [MC-151079](https://bugs.mojang.com/browse/MC-151079) - An employed villager quickly becomes unemployed and employed when he works, even if his workstation has not been deleted.
- [MC-151084](https://bugs.mojang.com/browse/MC-151084) - Chunk rendering is slow and random in 1.14.1 (pre 1)
- [MC-151144](https://bugs.mojang.com/browse/MC-151144) - Hostile mobs in lazy chunks no longer count towards mob cap, breaking mob switches
- [MC-151185](https://bugs.mojang.com/browse/MC-151185) - Game crash after breaking villager point of interest
- [MC-151337](https://bugs.mojang.com/browse/MC-151337) - Mob spawn rate too high
- [MC-151346](https://bugs.mojang.com/browse/MC-151346) - Crash while F3 menu tries to access tags while /reload-ing
- [MC-151395](https://bugs.mojang.com/browse/MC-151395) - Farmers create Bread ONLY when they pick up at least 3 wheat AT ONCE
- [MC-151753](https://bugs.mojang.com/browse/MC-151753) - More than one raid can happen in a village
- [MC-151771](https://bugs.mojang.com/browse/MC-151771) - Villagers don’t try to run away from zombie villagers
- [MC-151772](https://bugs.mojang.com/browse/MC-151772) - Mob cap in the hundreds to over 1000 per player.
- [MC-151802](https://bugs.mojang.com/browse/MC-151802) - Spawning causes massive TPS CPU load on a flat world.
- [MC-151995](https://bugs.mojang.com/browse/MC-151995) - Patrol Leaders spawning without banner
- [MC-152044](https://bugs.mojang.com/browse/MC-152044) - Baby trader llamas disappear immediately
- [MC-152053](https://bugs.mojang.com/browse/MC-152053) - High client-side lag when pistons activate
- [MC-152228](https://bugs.mojang.com/browse/MC-152228) - Can not /summon trader llama
- [MC-152542](https://bugs.mojang.com/browse/MC-152542) - Resource Warning “Codepoint ‘1ed0’ declared multiple times in minecraft:textures/font/accented.png”
- [MC-152810](https://bugs.mojang.com/browse/MC-152810) - Cat’s natural spawning causes Null Pointer Exception
- [MC-153222](https://bugs.mojang.com/browse/MC-153222) - Broken/Incorrect recipe files cause a data pack not to load with nothing in log

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the "Launch Options" tab.

Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/966984c5d8b5c3604a8838f8fb5635b8b9cd73c7/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
