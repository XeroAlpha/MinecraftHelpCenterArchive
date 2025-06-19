---
title: Minecraft - 1.21.92 (Bedrock)
date: 2025-06-19T15:53:24Z
updated: 2025-06-19T15:53:48Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37486954069645-Minecraft-1-21-92-Bedrock
hash:
  user-content-fixes%3A: fixes
  user-content-gameplay: gameplay
  user-content-projectiles: projectiles
  user-content-technical-updates: technical-updates
  user-content-items: items
  user-content-graphical: graphical
  user-content-mobs: mobs
---

**Posted:** 19 June 2025

A new update has been released to address a few issues with the 1.21.90 release. Please continue to report and upvote any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/). 

Please note: This update will be rolling to the various platforms as they become available, so please allow time for the update to reach you.

# Fixes:

## Gameplay

- Fixed an issue that could cause split-screen players to always show as Guests on Xbox ([MCPE-222048](https://bugs.mojang.com/browse/MCPE-222048)) 
- Fixed an issue that could cause players to get disconnected from multiplayer worlds when attempting to add split-screen players

## Projectiles

- Projectile tolerance margin is now incremented based on the total time active in the world ([MCPE-220496](https://bugs.mojang.com/browse/MCPE-220496))
  - Previously, projectile tolerance margin was expanded for every flight tick
  - Now, projectile tolerance margin is expanded for every active tick, regardless of projectile travel state

# Technical Updates

## Items

- Items that are less than 16 pixels in width or height now render properly again

## Graphical

- Custom skyboxes in texture packs will now render on non-Vibrant Visuals settings ([MCPE-221318](https://bugs.mojang.com/browse/MCPE/issues/MCPE-221318))

## Mobs

- Fix to restore original behavior where null components in entity definition files were allowed to parse and load correctly
