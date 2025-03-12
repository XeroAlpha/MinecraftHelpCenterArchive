---
title: Minecraft Java Edition - 1.21.5 Pre-Release 1
date: 2025-03-12T09:59:23Z
updated: 2025-03-12T09:59:26Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/34942367461517-Minecraft-Java-Edition-1-21-5-Pre-Release-1
hash:
  h_01JP4WKD9T4VFS41C4JB7Y9665: changes
  h_01JP4WKD9T7W08C4TJMK71HV8C: technical-changes
  h_01JP4WKD9TA9514FR106V0HRFH: network-protocol
  h_01JP4WKD9TV0D19JR3M96KAW6P: resource-pack-version-55
  h_01JP4WKD9TGH3RDYV687WP2F7K: fixed-bugs-in-1215-pre-release-1
  h_01JP4WKD9TTSM59531XG4379NZ: get-the-pre-release
---

Today we're shipping the first pre-release of Minecraft 1.21.5. From now on you will mostly see bug fixes and technical tweaks until the start of the next snapshot cycle. As we enter the pre-release phase we will be releasing more frequently than our regular cadence on Wednesdays, so keep an eye out for the next pre-release!

## Changes

- Added Spawn Eggs textures for programmer art texture pack

## Technical Changes

- The Resource Pack version is now 55
- Arguments in commands that accept inline values like loot tables, predicates, modifiers, data components, formatted text (/loot, /give, /tellraw, /execute if predicate, data components in /execute if items, etc.) have been reverted to accept numbers in place of booleans

> **Developer's Note**: The original change happened because we moved away from using NBT as an intermediate format for parsing those values, which meant that booleans were separated from numbers (similar to handling in JSON). We've decided to temporarily revert that, since some functionality can't be achieved yet without using storage and macro functions. However, once that missing functionality is added (and data can be transferred without being converted to and from text), legacy boolean handling will be removed once again.

### Network Protocol

- The clientbound player_chat packet now contains an index increasing for every message sent to the client
  - The index starts at 0 when logging in (or is reset by configuration phase and the login packet)
  - For every message, the server should increment this value by 1
  - If this value updates in an unexpected way, the client will disconnect
  - As the protocol requires that every chat packet reaches the client in produced order, the goal is to enable faster detection of missed/reordered chat messages for custom server developers
- The serverbound chat and chat_command_signed packets now contain a checksum byte along with the 'last seen' update
  - This is a simple hash of the 'last seen' signatures which should be reconstructed by the server, allowing quicker detection of desynchronized state
  - This can be passed as 0 to disable the check, for compatibility with protocol translation

## Resource Pack Version 55

- Tweaked Leaf Litter block models

## Fixed bugs in 1.21.5 Pre-Release 1

- [MC-170134](https://bugs.mojang.com/browse/MC-170134) - Minecraft uses several times more VRAM than needed after exploring terrain for a while
- [MC-279350](https://bugs.mojang.com/browse/MC-279350) - Leaf litter multipart model system is unoptimized, causing render lag
- [MC-280141](https://bugs.mojang.com/browse/MC-280141) - Baby farm animals from spawn eggs with a variant differing from the parent flash the wrong variant initially
- [MC-280241](https://bugs.mojang.com/browse/MC-280241) - Cold Cows have improperly mirrored and incorrectly aligned ear textures
- [MC-280249](https://bugs.mojang.com/browse/MC-280249) - Spawn eggs don't use their old textures with the Programmer Art resource pack enabled
- [MC-280278](https://bugs.mojang.com/browse/MC-280278) - Sheep wool uses 1.14 texture with Programmer Art resource pack enabled
- [MC-280326](https://bugs.mojang.com/browse/MC-280326) - When teleporting across dimensions an error is often thrown
- [MC-280361](https://bugs.mojang.com/browse/MC-280361) - When a fallen tree replaces the bottom half of tall vegetation, the top part of the vegetation still generates
- [MC-280474](https://bugs.mojang.com/browse/MC-280474) - TNT minecarts explode regardless of tntExplodes gamerule
- [MC-280477](https://bugs.mojang.com/browse/MC-280477) - TNT still explodes when summoned or dispensed while tntExplodes gamerule is false
- [MC-280479](https://bugs.mojang.com/browse/MC-280479) - TNT is completely deleted when attempting to ignite it using redstone pulses when the “tntExplodes” gamerule is disabled
- [MC-280480](https://bugs.mojang.com/browse/MC-280480) - No flint and steel clicking sound when attempting to ignite TNT with a flint and steel when the "tntExplodes" gamerule is disabled
- [MC-280493](https://bugs.mojang.com/browse/MC-280493) - If the tntExplodes game rule is changed to false while primed TNT already exists in the world, the primed TNT explodes as normal
- [MC-280501](https://bugs.mojang.com/browse/MC-280501) - The "Fire extinguishes" sound plays every game tick while on fire in rain
- [MC-280520](https://bugs.mojang.com/browse/MC-280520) - ItemDropChance on an item frame is not serialized when there is no item anymore, leading to inconsistencies

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/b663ce11b5951546a74947c1896e0d4713188833/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
