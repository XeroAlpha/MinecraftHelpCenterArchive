---
title: Minecraft Java Edition - 1.21.9 Pre-Release 2
date: 2025-09-22T13:17:09Z
updated: 2025-09-22T13:19:03Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/39755876051597-Minecraft-Java-Edition-1-21-9-Pre-Release-2
hash:
  h_01K5RS4NHY1SNXSHGGSR663HJ9: changes
  h_01K5RS4NHZECVW5HHMJJS4PGKX: technical-changes
  h_01K5RS4NHZ3GSZTD3NKJ4JQN75: fixed-bugs-in-1219-pre-release-2
  h_01K5RS4NHZEAT8W3CYX7GNTD7N: get-the-pre-release
---

We heard Friday would be a Pre-tty cool day to release the second Pre-Release for Minecraft: Java Edition 1.21.9, so here we are! This pre-release contains fixes to various issues introduced in previous snapshots, as well as a missed bump to the Data Pack major version.

Happy Crafting!

## Changes

- Copper Golems will now oxidize even when the game rule doDaylightCycle is disabled
- The Copper Golem's behavior for turning into a statue has been tweaked to match Bedrock
  - Copper Golems no longer need to be close to the center of an empty block position in order to turn into a statue
  - Copper Golems now have the possibility to turn into a statue as soon as they become fully oxidized

## Technical Changes

- The Data Pack version is now 88.0, to match the breaking change to /setworldspawn and /spawnpoint in the 1.21.9-pre1

## Fixed bugs in 1.21.9 Pre-Release 2

- [MC-300362](https://bugs.mojang.com/browse/MC-300362) - Copper golems do not oxidize when doDaylightCycle is disabled
- [MC-301566](https://bugs.mojang.com/browse/MC-301566) - Occasional sound crash on resource pack reload
- [MC-301706](https://bugs.mojang.com/browse/MC-301706) - Server Management Protocol does not support parameters as object (by-name)
- [MC-301770](https://bugs.mojang.com/browse/MC-301770) - The below_name plate is not displayed higher for players and mannequins named “deadmau5”
- [MC-301963](https://bugs.mojang.com/browse/MC-301963) - Copper golems cause huge lag spikes when checking chests
- [MC-302088](https://bugs.mojang.com/browse/MC-302088) - Oxidized Copper Golems take an extremely long time to turn into a statue
- [MC-302112](https://bugs.mojang.com/browse/MC-302112) - Posed mannequins don't use the correct hitbox
- [MC-302117](https://bugs.mojang.com/browse/MC-302117) - Text display billboarding is broken
- [MC-302120](https://bugs.mojang.com/browse/MC-302120) - Dimension-specific world spawn point causes mob spawning in other dimensions to fail
- [MC-302148](https://bugs.mojang.com/browse/MC-302148) - Copper Golem does not get close enough to search the chest, getting permanently stuck
- [MC-302164](https://bugs.mojang.com/browse/MC-302164) - Breaking change to /setworldspawn and /spawnpoint in minor datapack version

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/cd046af3f42191edbcc4870f11e06e95582dbbda/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
