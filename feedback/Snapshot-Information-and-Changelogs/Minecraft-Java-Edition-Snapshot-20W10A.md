---
title: Minecraft Java Edition - Snapshot 20W10A
date: 2020-03-04T17:17:18Z
updated: 2025-03-12T11:15:04Z
categories: Snapshot Information and Changelogs
tags:
  - 20W10A
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360040499111-Minecraft-Java-Edition-Snapshot-20W10A
---

04 March 2020

Today's snapshot is loud! It comes with a bunch of new ambient sound that adds some really nice flavour to the Nether biomes. Apart from this, you now have to use the smithing table to craft Netherite. Happy mining!

# NEW FEATURES IN 20W10A

- Added crimson and warped hyphae – all-sided "stem" blocks including stripped variations
- Use a smithing table to fuse the Netherite ingot with your diamond weapon/tool/armor
- New ambient sounds for the Nether biomes

# CHANGES IN 20W10A

- Fish now despawn when further than 64 blocks away from the closest player
- Hoes are now more like other tools used to break blocks
- Updated the Netherite item textures

## HOE CHANGES

We've made some changes to Hoes to make them more useful in the Nether.

- Each tier has different speed at which Hoes mine blocks they are effective against
- Hoes can now be enchanted with the following enchantments: Efficiency, Fortune, Silk Touch
- Those enchantments can now be provided through the enchanting table.

# TECHNICAL CHANGES IN 20W10A

## ENTITY UUIDS

- UUIDs of the owners of projectiles, such as arrows or snowballs, are now stored as an array of four integers. All UUIDs will be stored in this format in the future

## NEW TAGS FOR ITEM FRAMES

- Invisible - makes item frame invisible (item inside frame remains visible)
- Fixed - prevents item frame from being broken and the item inside from being removed

## TARGET_HIT ADVANCEMENT TRIGGER TYPE

- **signal_strength** matches the signal strength output from the block on hit
- **projectile matches** the projectile entity
- **shooter** matches the player who shot or threw the projectile

# FIXED BUGS IN 20W10A

- [MC-130906](https://bugs.mojang.com/browse/MC-130906) - Dolphins are moving very fast when near a boat
- [MC-131046](https://bugs.mojang.com/browse/MC-131046) - Angry dolphins give players dolphin’s grace
- [MC-146824](https://bugs.mojang.com/browse/MC-146824) - Inconsistency: Ladders and tripwire hooks cannot be placed on the sides of redstone blocks, observers and target blocks
- [MC-147496](https://bugs.mojang.com/browse/MC-147496) - Dolphin tries to catch the boat of the non-player ride
- [MC-152441](https://bugs.mojang.com/browse/MC-152441) - Corner quartz stairs (not corner smooth quartz stairs) do not have the border on the back/bottom that a normal quartz stair would have
- [MC-165518](https://bugs.mojang.com/browse/MC-165518) - Village houses desert_temple_1 and plains_temple_4 have no floor at entrance
- [MC-169533](https://bugs.mojang.com/browse/MC-169533) - Asymmetrical walls in snowy_cartographer_house_1
- [MC-169715](https://bugs.mojang.com/browse/MC-169715) - Misrotated block in snowy_small_house_3
- [MC-169869](https://bugs.mojang.com/browse/MC-169869) - Mooshroom using incorrect texture in Programmer Art
- [MC-170242](https://bugs.mojang.com/browse/MC-170242) - Asymmetrical walls in taiga_medium_house_4
- [MC-170470](https://bugs.mojang.com/browse/MC-170470) - At snowy_library_1, the snow block is placed next to the window, which causes ugly visual effect
- [MC-170819](https://bugs.mojang.com/browse/MC-170819) - Netherite sword and boots textures have transparent pixels
- [MC-170829](https://bugs.mojang.com/browse/MC-170829) - When dropping netherite tools and armor into lava, it sounds as if they are burning
- [MC-170897](https://bugs.mojang.com/browse/MC-170897) - Fossils in soulsand valleys can be generated in the air
- [MC-171367](https://bugs.mojang.com/browse/MC-171367) - Warped Fungi item does not match block texture
- [MC-171447](https://bugs.mojang.com/browse/MC-171447) - Crimson root item form has inconsistent texture
- [MC-172077](https://bugs.mojang.com/browse/MC-172077) - Piglins with NoAI shake in the overworld
- [MC-172082](https://bugs.mojang.com/browse/MC-172082) - Piglins do not serialize their conversion time
- [MC-172242](https://bugs.mojang.com/browse/MC-172242) - Left handed piglins don’t look at gold ingots in their right hand
- [MC-172567](https://bugs.mojang.com/browse/MC-172567) - Wither skeletons don’t automaticly attack piglins
- [MC-173021](https://bugs.mojang.com/browse/MC-173021) - Unuseful warning is logged when server receives incorrect vehicle movement packets
- [MC-173090](https://bugs.mojang.com/browse/MC-173090) - Attacking baby piglins don’t anger any adult piglins
- [MC-173165](https://bugs.mojang.com/browse/MC-173165) - Piglin Bartering Loot Table contains an extra “set_count” function
- [MC-173168](https://bugs.mojang.com/browse/MC-173168) - The word “backup” appears instead of the phrase “back up.”
- [MC-173169](https://bugs.mojang.com/browse/MC-173169) - Piglins still aren’t attracted to powered rails
- [MC-173176](https://bugs.mojang.com/browse/MC-173176) - Serialization error affecting operators list and whitelist
- [MC-173244](https://bugs.mojang.com/browse/MC-173244) - Target block moved by pistons permanently keep their signal strength

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/b9310c21839112d6758b0b245998f57a2b9a0500/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
