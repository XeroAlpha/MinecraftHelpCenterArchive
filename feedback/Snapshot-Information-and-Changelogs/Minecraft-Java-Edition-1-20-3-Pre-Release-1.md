---
title: "Minecraft: Java Edition - 1.20.3 Pre-Release 1 "
date: 2023-11-20T16:20:56Z
updated: 2025-03-12T11:12:28Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/21502506063245-Minecraft-Java-Edition-1-20-3-Pre-Release-1
hash:
  h_01HFPRGR5GMPTVAV3CFK5H2JDV: technical-changes
  h_01HFPRGR5GDC6M1NWRS9B1EBF4: world-resource-packs
  h_01HFPRGR5GDXANFTENQDA9W925: ui
  h_01HFPRGR5G52FGDEVE7MHEVPC6: local-storage
  h_01HFPRGR5G4YK8P4RN610X7D5K: server-config
  h_01HFPRGR5GZVRM6RTBNGGTR0G3: packets
  h_01HFPRGR5GC07QYFNRKVC5XJMB: data-pack-version-26
  h_01HFPRGR5G5RK28NGQ18SME3TN: resource-pack-version-22
  h_01HFPRGR5G5QMD1ZCRE57D8A4Z: fixed-bugs-in-1203-pre-release-1
  h_01HFPRGR5GM47T38Q507D58RAR: get-the-pre-release
---

We're bringing you the first Pre-Release of 1.20.3 with updates to server resource pack handling and bug fixes!

## TECHNICAL CHANGES

- The Data Pack version is now 26
- The Resource Pack version is now 22
- Changes to downloaded/world resource pack handling

### WORLD RESOURCE PACKS

Changes apply to world resource packs (resources.zip), Realms resource packs and resource packs controlled by dedicated servers.

#### UI

- Download screen has been replaced with a toast
- World resource pack application will start together with chunk loading

#### LOCAL STORAGE

Downloaded packs are now stored in downloads directory (with different file organization than old server-resource-packs)

- Files in this directory are no longer automatically cleaned (previously only up 10 packs were kept)
- Additionally, inside this directory there is also log file log.json that stores information about downloaded files for debug purposes

#### SERVER CONFIG

Downloaded packs now have unique id (GUID/UUID) that can be used to differentiate them

- This value for dedicated server pack can be configured with resource-pack-id option in server.properties
- If the value is missing, it will be generated based on URL
- If hash of a pack is not set, this pack will be redownloaded before every application
  - Previously, if hash was missing, latest downloaded version of pack was applied

#### PACKETS

Some additional options are added for 3rd-party servers software:

- Client can now accept multiple server resource packs
- New packet was added to un-apply server resource packs
- Resource packs are no longer cleaned when entering configuration phase

## DATA PACK VERSION 26

- Renamed minecraft:grass block and item to minecraft:short_grass

## RESOURCE PACK VERSION 22

- Renamed minecraft:grass block and item to minecraft:short_grass

## FIXED BUGS IN 1.20.3 PRE-RELEASE 1

- [MC-142160](https://bugs.mojang.com/browse/MC-142160) - pausedTickDelta updated when the game is unpaused rather than paused
- [MC-164316](https://bugs.mojang.com/browse/MC-164316) - Resource pack update by a hash doesn't work
- [MC-251126](https://bugs.mojang.com/browse/MC-251126) - Server resource pack is not redownloaded when a hash mismatch is detected with the previously downloaded version
- [MC-265927](https://bugs.mojang.com/browse/MC-265927) - Edit box length restrictions can result in unpaired surrogate characters
- [MC-265929](https://bugs.mojang.com/browse/MC-265929) - Ctrl+Backspacing a word with non-BMP characters in an edit box deletes additional characters
- [MC-266456](https://bugs.mojang.com/browse/MC-266456) - Breezes in minecarts or boats are passive
- [MC-266468](https://bugs.mojang.com/browse/MC-266468) - Breeze cannot attack in deep water
- [MC-266472](https://bugs.mojang.com/browse/MC-266472) - Charged creeper / wither armor is rendered incorrectly
- [MC-266507](https://bugs.mojang.com/browse/MC-266507) - Number of block drops from TNT explosions is capped to 16
- [MC-266563](https://bugs.mojang.com/browse/MC-266563) - End Crystals and TNT Minecarts that explode without a source entity deal no damage at all
- [MC-266571](https://bugs.mojang.com/browse/MC-266571) - Breezes won't attack while under the effects of levitation status
- [MC-266656](https://bugs.mojang.com/browse/MC-266656) - The interpolation of particle, entity and block entity transforms is disrupted when pausing the game in singleplayer
- [MC-266723](https://bugs.mojang.com/browse/MC-266723) - Monsters Hunted advancement requires killing a Breeze even when they're disabled
- [MC-266724](https://bugs.mojang.com/browse/MC-266724) - scoreboard players reset no longer works
- [MC-266729](https://bugs.mojang.com/browse/MC-266729) - Unformatted objects in scoreboard error messages

## GET THE PRE-RELEASE

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/e5db7e4884f55c4dd986ca7200145759169e0045/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
