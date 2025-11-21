---
title: Minecraft Java Edition - 1.21.11 Pre-Release 2
date: 2025-11-21T13:57:14Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/41317802954381-Minecraft-Java-Edition-1-21-11-Pre-Release-2
hash:
  h_01KAKB5BT9Y4WH5CYVCM9S74FV: changes
  h_01KAKB5BTBZNNBB8B8NPNH5CJS: fixed-bugs-in-12111-pre-release-2
  h_01KAKB5BTKBW3V01GD6KG9T3GJ: get-the-pre-release
---

Today we're celebrating Friday with a second Pre-Release for 1.21.11! This one has some improvements when See-Through Leaves is turned off along with bug fixes.

Happy mining!

## Changes

- When the "See-Through Leaves" video setting is disabled, the gaps between leaves are now dark green instead of black
- Turning the "See-Through Leaves" video setting off now gives a bigger performance boost than before

## Fixed bugs in 1.21.11 Pre-Release 2

- [MC-238715](https://bugs.mojang.com/browse/MC-238715) - The "minecraft:block.chest.locked" sound cannot be heard by other players when attempting to open locked blocks
- [MC-302660](https://bugs.mojang.com/browse/MC-302660) - The "options.cutoutLeaves.tooltip" string is missing the word “you” making it grammatically incorrect
- [MC-303061](https://bugs.mojang.com/browse/MC-303061) - The "minecraft:block.chest.locked" sound plays at the player position, not the chest's
- [MC-304023](https://bugs.mojang.com/browse/MC-304023) - Redundant level data fixer files are saved in worlds' "data" folder
- [MC-304369](https://bugs.mojang.com/browse/MC-304369) - Crash when loading the game without an existing options.txt file
- [MC-304401](https://bugs.mojang.com/browse/MC-304401) - Non see-through leaves look different compared to the previous snapshot
- [MC-304421](https://bugs.mojang.com/browse/MC-304421) - "attack_range" component breaks hit result

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7f997b55094aa7754f25173aafef657449f02bec/server.jar)

As we are [preparing to remove obfuscation from Java Edition](https://www.minecraft.net/en-us/article/removing-obfuscation-in-java-edition), you can also get a non-obfuscated experimental version of this snapshot using the Minecraft Launcher:

- [Download this zip file](https://piston-data.mojang.com/v1/objects/528731e05b7be26c90fedf8f2ef6470abb0d1994/1_21_11-pre2_unobfuscated.zip)
- Unpack the folder into your "versions" folder of your local Minecraft application data folder
- Start (or restart) the Launcher
- Create a new launch installation and select the "unobfuscated 1.21.11_unobfuscated" version
- Start the game and the remaining files will be downloaded

An unobfuscated server jar can be found here:

- [Unobfuscated server jar](https://piston-data.mojang.com/v1/objects/ec5d0361fb8f38ec6f6fd0162f6da0eef2c1a7d7/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
