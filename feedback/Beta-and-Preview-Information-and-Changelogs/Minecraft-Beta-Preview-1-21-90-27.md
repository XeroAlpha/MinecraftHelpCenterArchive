---
title: Minecraft Beta & Preview - 1.21.90.27
date: 2025-05-27T14:55:47Z
updated: 2025-05-27T16:14:04Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36938170843021-Minecraft-Beta-Preview-1-21-90-27
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-graphical: graphical
  user-content-items: items
  user-content-mobs: mobs
  user-content-technical-updates: technical-updates
  user-content-blocks: blocks
  h_01JW93WW8PSGKTSDNC31MW2PE9: items-1
  user-content-gameplay: gameplay
---

**Posted:** 27 May 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Beta & Preview! For the full list of changes and additions, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Graphical

- Fixed ambient lighting levels in the Nether in Vibrant Visuals
- Fixed fog settings in warm and humid biomes in Vibrant Visuals
- Fixed black screen issues on some Android devices when in Vibrant Visuals
- Vibrant Visuals is no longer tinted green on Android devices ([MCPE-220308](https://bugs.mojang.com/browse/MCPE/issues/MCPE-220308))
- Temporarily reverted weather-related changes to sky color in Vibrant Visuals while some issues are sorted out.

## Items

- Resolved an issue that caused items held in hand to not animate properly ([MCPE-219652](https://bugs.mojang.com/browse/MCPE-219652))

## Mobs

- Updated Ghastling speed to slow it down. Chill, friend, you have time to take in the sights.
- The Happy Ghast's player detection area has been reverted to a single box: it now extends 2 blocks above its top, 1 block below, and 1 block to each side
- The Happy Ghast no longer jitters when a player is detected at the edge of its detection area
- Fixed the leash attach positions for the following mobs:
  - Allay ([MCPE-220035](https://bugs.mojang.com/browse/MCPE-220035))
  - Glow Squid
  - Ocelot ([MCPE-220034](https://bugs.mojang.com/browse/MCPE-220034))
  - Parrot
  - Snow Golem ([MCPE-220041](https://bugs.mojang.com/browse/MCPE-220041))
  - Squid ([MCPE-220039](https://bugs.mojang.com/browse/MCPE-220039))
- The correct leash physics simulating four ropes is now used when a Mule is leashed to a Happy Ghast ([MCPE-219640](https://bugs.mojang.com/browse/MCPE-219640))
- Entities can now be leashed to Glow Squid, just like regular Squid ([MCPE-220040](https://bugs.mojang.com/browse/MCPE-220040))

# Technical Updates

## Blocks

- "alpha_test_to_opaque", "alpha_test_single_sided_to_opaque", and "blend_to_opaque" will not shift to "opaque" in the distance. This is a temporary rollback of functionality that will be fixed later.

## Items

- Fixed items with empty icon textures displaying as garbled pixels when held in hand

## Gameplay

- Fixed the default control schemes for all cameras
