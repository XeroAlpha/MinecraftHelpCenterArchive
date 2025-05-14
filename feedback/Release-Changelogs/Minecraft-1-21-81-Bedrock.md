---
title: Minecraft - 1.21.81 (Bedrock)
date: 2025-05-12T14:57:05Z
updated: 2025-05-14T16:09:01Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36539685655053-Minecraft-1-21-81-Bedrock
hash:
  user-content-fixes%3A: fixes
  user-content-graphical: graphical
  user-content-gameplay: gameplay
  user-content-performance-and-stability: performance-and-stability
  user-content-api: api
  user-content-components: components
---

**Posted:** 14 May 2025

A new update has been released to address a few issues with the 1.21.80 release. Please continue to report and upvote any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Fixes:

## Graphical

- Fixed an issue where Vibrant Visuals (Experimental) would sometimes apply to worlds that do not correctly support it
- Fixed an issue that could cause pixelated distortion on specific iOS devices ([MCPE-218490](https://bugs.mojang.com/browse/MCPE-218490))

## Gameplay

- Fixed a bug where hitting blocks while swimming would cause players to slow down too much ([MCPE-201832](https://bugs.mojang.com/browse/MCPE-201832))

## Performance and Stability

- Fixed a crash that could occur when loading a world with leashed entities in it
- Fixed a crash that could occur after activating "SplashPotChange" and "LingeringPotChange" resource packs ([MCPE-217599](https://bugs.mojang.com/browse/MCPE/issues/MCPE-217599))

## API

- Fixed bug where block custom component event `beforeOnPlayerPlace` was not using read only privilege. Due to V1.X.X of scripting releasing without read only privilege, the fix is now only applied to V2.X.X and higher versions of scripting

## Components

- "minecraft:leashable" component values can once again be updated at runtime via component groups
- "minecraft:leashable" presets are now re-evaluated every tick instead of only when the entity is leashed
