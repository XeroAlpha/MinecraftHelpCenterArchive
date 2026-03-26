---
title: Minecraft Java Edition - 26.1 Pre-release 3
date: 2026-03-26T13:29:46Z
updated: 2026-03-26T13:29:51Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44608739569677-Minecraft-Java-Edition-26-1-Pre-release-3
hash:
  h_01KMN5C5DFDXTS34FVFC4Y79QY: technical-changes
  h_01KMN5C5DGFW5MW2NBE80BV7T6: data-pack-version-1011
  h_01KMN5C5DHR422JCN48MB7JK0F: world-generation
  h_01KMN5C5DHFXE6QT6AEPC8NS7J: placement-modifiers
  h_01KMN5C5DHQY6S3935181QN2EK: count-placement-modifier
  h_01KMN5C5DMHPRYVWASKZ3A2DAW: fixed-bugs-in-261-pre-release-3
  h_01KMN5C5DVHP9EP1C0CA7ZGVHC: get-the-pre-release
---

Today we are shipping the third pre-release with minor tech changes and bug fixes.

Happy mining!

## Technical Changes

- The Data Pack version is now 101.1

## Data Pack Version 101.1

### World Generation

#### Placement Modifiers

##### count Placement Modifier

- The count field is now limited to a range of 0 to 4096 instead of the previous 256

## Fixed bugs in 26.1 Pre-Release 3

- [MC-305118](https://bugs.mojang.com/browse/MC-305118) - Resource packs previously labeled as "Broken or incompatible" don't show up at all
- [MC-306240](https://bugs.mojang.com/browse/MC-306240) - /fill does not obey the max_block_modifications game rule if too many blocks are in the specified area
- [MC-306620](https://bugs.mojang.com/browse/MC-306620) - Feeding a snifflet with a golden dandelion resets its age to the wrong amount of ticks
- [MC-306805](https://bugs.mojang.com/browse/MC-306805) - Baby zombie villagers' arms are positioned and move incorrectly when holding an item
- [MC-306840](https://bugs.mojang.com/browse/MC-306840) - Dolphins still drown themselves when no players are nearby
- [MC-306850](https://bugs.mojang.com/browse/MC-306850) - The caves and floating_islands noise settings no longer generate as intended
- [MC-306854](https://bugs.mojang.com/browse/MC-306854) - Unmentioned differences of villager trades between 1.21.11 and 26.1 snapshots
- [MC-306859](https://bugs.mojang.com/browse/MC-306859) - The arms of baby zombies, baby husks, gurgles, and baby zombie villagers clip through their worn chestplates when holding items
- [MC-306860](https://bugs.mojang.com/browse/MC-306860) - Player object text components in server status messages (MotD) are no longer replaced by fallback text
- [MC-306898](https://bugs.mojang.com/browse/MC-306898) - Placed / Configured Features are now limited to only 256 tries, previously higher numbers where possible
- [MC-306899](https://bugs.mojang.com/browse/MC-306899) - The blocklists of the fire_patch and soul_fire_patch features are inverted, causing generation issues

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/f731aaf0a0f6be00b5aaba1fabbd75ce750e92e4/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
