---
title: "Minecraft: Java Edition - Snapshot 19W06A"
date: 2019-02-06T16:53:12Z
updated: 2025-03-12T11:15:49Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360023016591-Minecraft-Java-Edition-Snapshot-19W06A
---

**6 February 2019**

This week's snapshot is a small one, but it brings a fancy new splash screen! Start up the snapshot and you'll find out right away.

# CHANGES IN 19W06A

- Added a new splash screen and slightly improved startup time
- Updated LWJGL to 3.2.1
- Particles are now broken up into individual textures rather than being in `particles.png`
  - This breaks resource packs right now but we're working on a way to still be able to load old resource packs
- Adjustments to the Wandering Trader
- New optional tag for block items: `BlockStateTag`
  - Contains map of block state properties to be overwritten after block is placed (note: item model is not affected).
- Fixed bugs

# FIXED BUGS IN 19W06A

- [MC-11532](https://bugs.mojang.com/browse/MC-11532) - Empty map is consumed upon right-clicking in creative
- [MC-90523](https://bugs.mojang.com/browse/MC-90523) - falling_block entity floating on fences/walls
- [MC-114561](https://bugs.mojang.com/browse/MC-114561) - Baby mobs can grow while dying
- [MC-119808](https://bugs.mojang.com/browse/MC-119808) - Minecarts drop their items offset in the positive direction
- [MC-126302](https://bugs.mojang.com/browse/MC-126302) - Game freezes if splash text 231 is the only one in splashes.txt
- [MC-136400](https://bugs.mojang.com/browse/MC-136400) - 'Serious Dedication' advancement not given when using up diamond hoe
- [MC-138389](https://bugs.mojang.com/browse/MC-138389) - Slime balls sneezed by pandas cannot be picked up
- [MC-138617](https://bugs.mojang.com/browse/MC-138617) - Jungle Pyramids not spawning in bamboo jungle
- [MC-139477](https://bugs.mojang.com/browse/MC-139477) - Ravager falls with NoAI:1
- [MC-140009](https://bugs.mojang.com/browse/MC-140009) - Pandas can eat while swimming
- [MC-140240](https://bugs.mojang.com/browse/MC-140240) - plains_big_house_1 in new plains villages is missing a floor
- [MC-140286](https://bugs.mojang.com/browse/MC-140286) - Village stair not connecting
- [MC-140698](https://bugs.mojang.com/browse/MC-140698) - The snowy_small_house_7 house from new snowy villages is missing a light source
- [MC-140703](https://bugs.mojang.com/browse/MC-140703) - Weaponsmith building catches fire
- [MC-140710](https://bugs.mojang.com/browse/MC-140710) - Pillagers require skylight to spawn from spawners
- [MC-140759](https://bugs.mojang.com/browse/MC-140759) - Some of the new village structures are missing a jigsaw block
- [MC-140940](https://bugs.mojang.com/browse/MC-140940) - Procedurally generated bells in Villagers do not connect to blocks correctly
- [MC-140985](https://bugs.mojang.com/browse/MC-140985) - Scheduled ticks get lost when leaving chunks (Redstone components get stuck)
- [MC-141823](https://bugs.mojang.com/browse/MC-141823) - End gateways on the main end island take you to a tiny island
- [MC-141940](https://bugs.mojang.com/browse/MC-141940) - Crafting table shows campfire and stonecutter recipes
- [MC-142655](https://bugs.mojang.com/browse/MC-142655) - Client crashes when opening resolved book on lectern containing malformed text components
- [MC-142893](https://bugs.mojang.com/browse/MC-142893) - Magma cube riding zombie causes crash in lava
- [MC-142916](https://bugs.mojang.com/browse/MC-142916) - Recipe toasts for stonecutter use crafting table icon
- [MC-142958](https://bugs.mojang.com/browse/MC-142958) - Water disappears when placed on double slab
- [MC-143069](https://bugs.mojang.com/browse/MC-143069) - An armor stand which is Marker:1b doesn't collide with a block
- [MC-143347](https://bugs.mojang.com/browse/MC-143347) - Ravager spawn egg is not sorted alphabetically within the spawn egg list
- [MC-143350](https://bugs.mojang.com/browse/MC-143350) - Wandering trader subtitle missing; shows translation string
- [MC-143351](https://bugs.mojang.com/browse/MC-143351) - Item frames and leash knots appear at the wrong location
- [MC-143354](https://bugs.mojang.com/browse/MC-143354) - Filling a composter is silent

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the "Launch Options" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/20c069d373e77265aaeeedb733f7051e294325a3/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://minecraft.net/en-us/article/discord.gg/Minecraft).
