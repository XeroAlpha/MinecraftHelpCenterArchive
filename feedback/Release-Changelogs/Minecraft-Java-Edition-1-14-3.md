---
title: "Minecraft: Java Edition - 1.14.3"
date: 2019-07-09T06:40:11Z
updated: 2019-10-28T15:19:04Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360030771451-Minecraft-Java-Edition-1-14-3
hash:
  may-2019: 28-may-2019
  changes-in-1.14.3: changes-in-1143
  fixed-bugs-in-1.14.3: fixed-bugs-in-1143
---

### **28 May 2019**

# CHANGES IN 1.14.3

- Items can now be repaired by crafting them together again
- Reverted the enchanting system to how it was before 1.14
- Torches, lanterns and pressure plates can now be placed on glass panes and iron bars
- Lanterns can now be attached below iron bars and glass panes
- Saturation is no longer required for the "How did we get here?" advancement
- You can now turn off raids with '/gamerule disableRaids true'
- Patrol changes:
- Vindicators are no longer part of patrols
- Doubled the minimum time to spawn from 5 + (up to 1) minutes to 10 + (up to 1) minutes
- Patrols no longer spawns if the block light level disallows monster spawning
- Patrols are now allowed to spawn in any biome except mushroom biomes
- Villagers that are panicking now have a bigger chance of spawning Iron Golems, assuming they can occasionally work and sleep
- "Last slept" and "last worked" is now saved properly for Villagers
- Farmers now spend more time farming when they are working
- Farmers can now always give away food even if other villagers don't need it
- Improved performance
- Fixed bugs

# FIXED BUGS IN 1.14.3

- [MC-47699](https://bugs.mojang.com/browse/MC-47699) - Blazes are able to see a player through blocks
- [MC-72390](https://bugs.mojang.com/browse/MC-72390) - Rcon is not thread-safe
- [MC-74407](https://bugs.mojang.com/browse/MC-74407) - Villager inventories can get into a state where villagers cannot do anything useful
- [MC-93892](https://bugs.mojang.com/browse/MC-93892) - Fire/Flame arrows and fireballs set player on fire even when blocking with shield
- [MC-110004](https://bugs.mojang.com/browse/MC-110004) - Enderman/blaze don’t drop experience when hit with splash/lingering potion
- [MC-123836](https://bugs.mojang.com/browse/MC-123836) - Double blocks aren’t loaded in structures
- [MC-124170](https://bugs.mojang.com/browse/MC-124170) - Performance issue with particles causing lag
- [MC-129491](https://bugs.mojang.com/browse/MC-129491) - Advancement location trigger works inconsistently for structures added in 1.9 or later
- [MC-138053](https://bugs.mojang.com/browse/MC-138053) - Gamerule spectatorsGenerateChunks being false prevents chunks from being loaded
- [MC-139257](https://bugs.mojang.com/browse/MC-139257) - Server crash on reload when worldborder is modified.
- [MC-141301](https://bugs.mojang.com/browse/MC-141301) - Illager patrols spawning on blocks mobs shouldn’t spawn on, such as slabs, carpets, stairs, etc.
- [MC-142360](https://bugs.mojang.com/browse/MC-142360) - Pillagers patrols can spawn pillagers on top of trees inside a leaf block
- [MC-143369](https://bugs.mojang.com/browse/MC-143369) - Wandering trader text implies trades refresh
- [MC-144107](https://bugs.mojang.com/browse/MC-144107) - Miscalculation of camera position in windowed mode on Linux
- [MC-144507](https://bugs.mojang.com/browse/MC-144507) - The legs on cats clip through to the top of the model
- [MC-144929](https://bugs.mojang.com/browse/MC-144929) - When there is water above a water source, other water sources adjacent to the water source flow outwards
- [MC-145863](https://bugs.mojang.com/browse/MC-145863) - Villagers breed even if there are not enough beds
- [MC-146433](https://bugs.mojang.com/browse/MC-146433) - Double Chest does not display custom name
- [MC-146835](https://bugs.mojang.com/browse/MC-146835) - Illager captain spawned from raids will still give the bad omen effect to its killer, causing raids to never end
- [MC-147619](https://bugs.mojang.com/browse/MC-147619) - Foxes that trust a player will still avoid wolves and other players they’re angry towards instead pursuing them
- [MC-147851](https://bugs.mojang.com/browse/MC-147851) - Villagers frequently run right into mobs they’re “trying” to avoid
- [MC-148600](https://bugs.mojang.com/browse/MC-148600) - Zombie pigmen will spread their anger forever if they can continously respawn
- [MC-148610](https://bugs.mojang.com/browse/MC-148610) - Hostile mobs spawning on top Trapdoors, Glowstone and Sea Lanterns
- [MC-148986](https://bugs.mojang.com/browse/MC-148986) - Low-tier enchants from lv.30 standard enchanting setups
- [MC-149372](https://bugs.mojang.com/browse/MC-149372) - Game crashes when opening a 1.13.2 world
- [MC-149443](https://bugs.mojang.com/browse/MC-149443) - Iron golems spawn too often
- [MC-149518](https://bugs.mojang.com/browse/MC-149518) - Skylight appearing under blocks
- [MC-149877](https://bugs.mojang.com/browse/MC-149877) - Baby foxes suffocate when jumping under blocks
- [MC-150319](https://bugs.mojang.com/browse/MC-150319) - I can’t load up my minecraft world after doing /kill
- [MC-150401](https://bugs.mojang.com/browse/MC-150401) - Chickens suffocate if jumping while under a solid block
- [MC-150954](https://bugs.mojang.com/browse/MC-150954) - Pillager Patrol spawn is way off. Spawning too close to each other, in odd biomes, and too frequent.
- [MC-151079](https://bugs.mojang.com/browse/MC-151079) - An employed villager quickly becomes unemployed and employed when he works, even if his workstation has not been deleted.
- [MC-151084](https://bugs.mojang.com/browse/MC-151084) - Chunk rendering is slow and random in 1.14.1 (pre 1)
- [MC-151144](https://bugs.mojang.com/browse/MC-151144) - Hostile mobs in lazy chunks no longer count towards mob cap, breaking mob switches
- [MC-151185](https://bugs.mojang.com/browse/MC-151185) - Game crash after breaking villager point of interest
- [MC-151337](https://bugs.mojang.com/browse/MC-151337) - Mob spawn rate too high
- [MC-151346](https://bugs.mojang.com/browse/MC-151346) - Crash while F3 menu tries to access tags while /reload-ing
- [MC-151395](https://bugs.mojang.com/browse/MC-151395) - Farmers create Bread ONLY when they pick up at least 3 wheat AT ONCE
- [MC-151566](https://bugs.mojang.com/browse/MC-151566) - Pillagers patrols can spawn outside world border
- [MC-151710](https://bugs.mojang.com/browse/MC-151710) - Enties not functioning in forceloaded chunks
- [MC-151753](https://bugs.mojang.com/browse/MC-151753) - More than one raid can happen in a village
- [MC-151771](https://bugs.mojang.com/browse/MC-151771) - Villagers don’t try to run away from zombie villagers
- [MC-151772](https://bugs.mojang.com/browse/MC-151772) - Mob cap in the hundreds to over 1000 per player.
- [MC-151802](https://bugs.mojang.com/browse/MC-151802) - Spawning causes massive TPS CPU load on a flat world.
- [MC-151989](https://bugs.mojang.com/browse/MC-151989) - Players in Survival do not get Dolphins Grace effect if Dolphin cannot path to Player
- [MC-151995](https://bugs.mojang.com/browse/MC-151995) - Patrol Leaders spawning without banner
- [MC-152044](https://bugs.mojang.com/browse/MC-152044) - Baby trader llamas disappear immediately
- [MC-152053](https://bugs.mojang.com/browse/MC-152053) - High client-side lag when pistons activate
- [MC-152228](https://bugs.mojang.com/browse/MC-152228) - Can not /summon trader llama
- [MC-152542](https://bugs.mojang.com/browse/MC-152542) - Resource Warning “Codepoint ‘1ed0’ declared multiple times in minecraft:textures/font/accented.png”
- [MC-152638](https://bugs.mojang.com/browse/MC-152638) - Villager trade GUI does not close when a major change happens to the Villager, leading to free trades and quick stock refreshing
- [MC-152810](https://bugs.mojang.com/browse/MC-152810) - Cat’s natural spawning causes Null Pointer Exception
- [MC-153221](https://bugs.mojang.com/browse/MC-153221) - dragon fireball causes FPS to crash
- [MC-153222](https://bugs.mojang.com/browse/MC-153222) - Broken/Incorrect recipe files cause a data pack not to load with nothing in log
- [MC-153470](https://bugs.mojang.com/browse/MC-153470) - Language map does not close internal ‘en_us.json’ file after reading
- [MC-154000](https://bugs.mojang.com/browse/MC-154000) - When dispenser places shulkerbox it decreases its stack twice.
- [MC-154080](https://bugs.mojang.com/browse/MC-154080) - Wandering Trader trade GUI does not close when the Wandering Trader changes dimensions allowing you to trade infinitely
- [MC-154081](https://bugs.mojang.com/browse/MC-154081) - Opening survival inventory when opening world crashes game
- [MC-154092](https://bugs.mojang.com/browse/MC-154092) - Zombie Pigmen lose aggro even when they’re in range and have a line of sight
- [MC-154239](https://bugs.mojang.com/browse/MC-154239) - NPE server crash when painting entities spawned with mob spawn eggs are saved
- [MC-154328](https://bugs.mojang.com/browse/MC-154328) - The Village Siege (Zombie Siege) never happens

# GET THE RELEASE

To install the release, open up the [Minecraft Launcher](https://minecraft.net/download) and click play.

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/d0d0fe2b1dc6ab4c65554cb734270872b72dadd6/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
