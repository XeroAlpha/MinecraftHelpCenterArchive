---
title: Minecraft Java Edition - Snapshot 25w19a
date: 2025-05-12T08:46:33Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/36531037403277-Minecraft-Java-Edition-Snapshot-25w19a
hash:
  h_01JV1TPRQ3EMW2R5NA251MNDRV: changes
  h_01JV1TPRQ3EFQQ7XAR5Z7QCHSY: projectile-targeting
  h_01JV1TPRQ3FXVJB3D1VGE59914: technical-changes
  h_01JV1TPRQ3CXF13X756XZ13RTB: data-pack-version-76
  h_01JV1TPRQ3WXRRTQXG0QMYG510: entity-data
  h_01JV1TPRQ32EZTMV0DWN9TGPB7: tnt
  h_01JV1TPRQ36JEZQV70EY3TJJN4: vex
  h_01JV1TPRQ3V6HER6D0QPZJN45Y: resource-pack-version-60
  h_01JV1TPRQ3X84MA4VQ9Q28ZPJZ: ui-sprites
  h_01JV1TPRQ31DZHG6V51KKB9J8J: shaders--post-process-effects
  h_01JV1TPRQ3PYHTXWBXQYMV35F6: shader-fog-changes
  h_01JV1TPRQ3XC8ZWE1FNAE74B0M: foguniform-block
  h_01JV1TPRQ305GTQVK14FGBVQ72: sound-events
  h_01JV1TPRQ30K3Q042DPWSVT54K: fixed-bugs-in-snapshot-25w19a
  h_01JV1TPRQ351CCQX76BWS9R3AD: get-the-snapshot
---

Take aim for this snapshot! It's a bit smaller this week, and you might want to train a bit more to learn the new projectile mechanics! And while you are here, why not enjoy some misty peaks at a distance!

## Changes

- Projectiles target tolerance margin now changes over time
- Fog was tweaked for improved atmospheric perspective
- It now becomes foggier when it rains
- The test framework will no longer try to restart running tests after a server restart

### Projectile Targeting

- Projectiles now have a target tolerance margin that changes over time
  - Previously, all projectiles had a fixed 0.3 blocks target tolerance margin
  - Now, all projectiles start with no margin for the first two ticks of their flight
  - After that, the target margin will expand by 0.05 blocks per tick until it reaches the previous 0.3 blocks margin
  - This allows for better precision close to the shooting player or entity, while still allowing for some collision leeway when the projectile is further away

## Technical Changes

- The Data Pack version is now 76
- --quickPlaySingleplayer command line argument can now be used without an identifier to launch into the last played world

## Data Pack Version 76

- The scale attribute for the Happy Ghast now has a limit of 1.0

### Entity Data

#### tnt

- The entity that primed the TNT is now stored in an optional owner field (UUID of Living entity)

#### vex

- The owner of a Vex is now stored in an optional owner field (UUID of Mob)

## Resource Pack Version 60

- Panorama textures must now all be the same size, and square
- Sounds for the Dried Ghast Block have been changed

### UI Sprites

- The Mob Effect atlas has been removed, and sprites in the textures/mob_effect/ folder are now included within the GUI atlas
  - This means Mob Effect sprites now support GUI sprite scaling properties

### Shaders & Post-process Effects

#### Shader fog changes

- The fog is now split into environmental and render-distance-based
- Previously both those concepts were mixed in the same uniforms
- Environmental fog is supposed to represent the "fogginess" of the environment the player is in: lava, water, and now also atmosphere
- Render distance fog is supposed to obscure the border of visible terrain
- Environmental fog uses spherical distance to determine its intensity, render distance fog uses cylindrical distance
- The resulting fog value for any given vertex is the maximum of both

#### Fog Uniform Block

- FogStart was renamed to FogRenderDistanceStart and now represents the render distance fog start
- FogEnd was renamed to FogRenderDistanceEnd and now represents the render distance fog end
- FogEnvironmentalStart is new and represents the start of environment-based fog
- FogEnvironmentalEnd is new and represents the end of environment-based fog
- FogShape was removed. Render distance fog is now cylindrical and environmental for is spherical

### Sound Events

- block.dried_ghast.hit has been removed

## Fixed bugs in Snapshot 25w19a

- [MC-69821](https://bugs.mojang.com/browse/MC-69821) - TNT "forgets" the player that ignited it when the world is reloaded
- [MC-118430](https://bugs.mojang.com/browse/MC-118430) - Vex summoner is not stored in NBT despite being used for AI task
- [MC-118432](https://bugs.mojang.com/browse/MC-118432) - Vex summoner is not reset once it is dead
- [MC-277486](https://bugs.mojang.com/browse/MC-277486) - Mob effect icons ignore "scaling" parameter in mcmeta files
- [MC-277903](https://bugs.mojang.com/browse/MC-277903) - Creative inventory tab icons can display item cooldown overlay
- [MC-295690](https://bugs.mojang.com/browse/MC-295690) - Players stay on fire for a while after barely touching fire
- [MC-296432](https://bugs.mojang.com/browse/MC-296432) - The ability to stand on top of happy ghasts which have a larger scale attribute becomes unreliable or even impossible
- [MC-296460](https://bugs.mojang.com/browse/MC-296460) - Debug crosshair renders incorrectly
- [MC-296494](https://bugs.mojang.com/browse/MC-296494) - The player sometimes falls from a happy ghast when reconnecting to a world
- [MC-296701](https://bugs.mojang.com/browse/MC-296701) - Transformed entities do not retain their custom_data component
- [MC-296709](https://bugs.mojang.com/browse/MC-296709) - All non-default jukebox_playable components are deleted from existing items when updating past 1.21.4
- [MC-296797](https://bugs.mojang.com/browse/MC-296797) - The movement of happy ghasts for non-controlling passengers is jittery
- [MC-296813](https://bugs.mojang.com/browse/MC-296813) - The panorama isn't slightly blurred anymore which causes some "flickering" effects
- [MC-296970](https://bugs.mojang.com/browse/MC-296970) - The dried ghast block has a hit sound event
- [MC-297142](https://bugs.mojang.com/browse/MC-297142) - The "Leave Bed" button is invisible
- [MC-297235](https://bugs.mojang.com/browse/MC-297235) - Clouds not fully rendered depending on angle when very high above the world
- [MC-297271](https://bugs.mojang.com/browse/MC-297271) - Waypoint packet is handled by network thread instead of render thread, causing crash
- [MC-297339](https://bugs.mojang.com/browse/MC-297339) - Sign text is non-functional
- [MC-297347](https://bugs.mojang.com/browse/MC-297347) - Tamed animals no longer sit when their owner changes dimension
- [MC-297461](https://bugs.mojang.com/browse/MC-297461) - Equipment and sleeping pos data cannot be loaded in 1.21.4, but can be loaded in 1.21.5 to bees spawned from bee nest and bee hive

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/cd279a0a79fd62f41c9dd8d17d455d06ff4d8013/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
