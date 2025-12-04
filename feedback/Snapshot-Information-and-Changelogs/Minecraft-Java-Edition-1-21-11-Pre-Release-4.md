---
title: Minecraft Java Edition - 1.21.11 Pre-Release 4
date: 2025-12-04T12:24:25Z
updated: 2025-12-04T12:26:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/41651182661389-Minecraft-Java-Edition-1-21-11-Pre-Release-4
hash:
  h_01KBMN2D4DZ0ZNYRYYA9V0EG92: changes
  h_01KBMN2D4EGSG21XNBYQZKA8FP: nautilus
  h_01KBMN2D4EKYNNVY889VG93359: technical-changes
  h_01KBMN2D4ESNCXAB170A855BAK: data-pack-version-941
  h_01KBMN2D4EQKKN2MH6W31K57E3: item-components
  h_01KBMN2D4EPNSNCGMVRBZEHK8B: changes-tominecraftattack_range
  h_01KBMN2D4EVDT8XBQ6VF148MRH: fixed-bugs-in-12111-pre-release-4
  h_01KBMN2D4ES7A57QGJ85WDPB5B: get-the-pre-release
---

We're starting the week with Pre-Release 4 for Mounts of Mayhem! With this one, Dispensers can now be part of the Mayhem with the new Mounts, along with other fixes!

Happy Mining!

## Changes

- The attack range extension for players in Creative Mode is once again set to 2 blocks
  - This reverts an accidental change that increased the range to 4 or 6 blocks in certain cases

### Nautilus

- Dispensers can now equip Saddles and Nautilus Armor on tamed Nautiluses and Zombie Nautiluses
- Dismounting a Nautilus or Zombie Nautilus while on land no longer places the player inside the Nautilus
  - This works given that there is a valid block to place the player on
  - If there is no valid block, the player will be placed inside the Nautilus as before

## Technical Changes

- The Data Pack version is now 94.1

## Data Pack Version 94.1

### Item Components

#### Changes to minecraft:attack_range

- Added fields:
  - min_creative_reach: float, the minimum distance in blocks from the Creative Mode attacker to the target to be considered valid
    - Default value: 0.0, valid from 0.0 to 64.0
  - max_creative_reach: float, the maximum distance in blocks from the Creative Mode attacker to the target to be considered valid
    - Default value: 5.0, valid from 0.0 to 64.0

## Fixed bugs in 1.21.11 Pre-Release 4

- [MC-154651](https://bugs.mojang.com/browse/MC-154651) - Boats and rafts can break off paintings and item frames
- [MC-300588](https://bugs.mojang.com/browse/MC-300588) - Waypoint modifications reset upon death
- [MC-301127](https://bugs.mojang.com/browse/MC-301127) - Music stops and restarts when trying to connect to a server when the music frequency is set to constant
- [MC-302516](https://bugs.mojang.com/browse/MC-302516) - Zombie villagers spawn as the variant matching the biome at 0, 0, 0
- [MC-302662](https://bugs.mojang.com/browse/MC-302662) - Dismounting a nautilus always places you inside the nautilus
- [MC-302895](https://bugs.mojang.com/browse/MC-302895) - Spears held in the off hand play the charging animation when using items in the main hand
- [MC-304374](https://bugs.mojang.com/browse/MC-304374) - Zombie nautilus drops are not affected by Looting
- [MC-304385](https://bugs.mojang.com/browse/MC-304385) - Item frames and paintings pop out when in the same space as a stationary happy ghast
- [MC-304547](https://bugs.mojang.com/browse/MC-304547) - Items in the crafter's slots aren't visible

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/db1a9f24a4610f2f71e8991c11f70a4b62750c1b/server.jar)

As we are [preparing to remove obfuscation from Java Edition](https://www.minecraft.net/en-us/article/removing-obfuscation-in-java-edition), you can also get a non-obfuscated experimental version of this snapshot using the Minecraft Launcher:

- [Download this zip file](https://piston-data.mojang.com/v1/objects/834666571f1e1374923b73f4baec4203d44e9c0d/1_21_11-pre4_unobfuscated.zip)
- Unpack the folder into your "versions" folder of your local Minecraft application data folder
- Start (or restart) the Launcher
- Create a new launch installation and select the "unobfuscated 1.21.11 Pre-Release 4_unobfuscated" version
- Start the game and the remaining files will be downloaded

An unobfuscated server jar can be found here:

- [Unobfuscated server jar](https://piston-data.mojang.com/v1/objects/3ba399e6d77e8eab79f5563ab796244f8e8e0dec/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
