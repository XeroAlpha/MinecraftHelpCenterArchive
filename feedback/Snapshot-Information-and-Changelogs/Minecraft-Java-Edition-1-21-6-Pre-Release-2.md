---
title: Minecraft Java Edition - 1.21.6 Pre-Release 2
date: 2025-06-09T09:45:08Z
updated: 2025-06-09T09:45:38Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/37231550988813-Minecraft-Java-Edition-1-21-6-Pre-Release-2
hash:
  h_01JXA16H2TW8XC2JGY7A3VFZZB: changes
  h_01JXA16H2T2MXK53JG6AD6D10X: music-and-sound
  h_01JXA16H2TFTAGS7A3C9HJYTGQ: technical-changes
  h_01JXA16H2TDMZACEFJTTPH1N47: dialogs
  h_01JXA16H2T7K6KF8099KEF47WJ: dialog-description-format
  h_01JXA16H2TE9GDZM983DDJRYW5: input-control-types
  h_01JXA16H2T1P60M11MJG1NY75C: minecrafttext
  h_01JXA16H2VSB2PFM7SZJNK065X: fixed-bugs-in-1216-pre-release-2
  h_01JXA16H2VTA5Z4TBFPSDPHR1M: get-the-pre-release
---

We're kicking the week off with another pre-release, including some music and happy ghast bug fixes. The Chase the Skies drop is getting closer and the pre-release schedule might include more than one pre-release per week.

## Changes

### Music and Sound

- The following sound categories have been renamed:
  - Friendly Creatures -\> Friendly Mobs
  - Hostile Creatures -\> Hostile Mobs

## Technical Changes

### Dialogs

#### **Dialog Description Format**

#### Input Control Types

#### minecraft:text

- Output values:

  - As template substitution: contents with special characters escaped to fit in a SNBT literal (note: both ' and " are escaped)

- For multiline field:

  - If height field is omitted, but max_lines is present, the height that will be chosen to fit the maximum number of lines can't exceed 512

## Fixed bugs in 1.21.6 Pre-Release 2

- [MC-217887](https://bugs.mojang.com/browse/MC-217887) - Unsigned books written in 1.9-pre1 or earlier don't upgrade properly
- [MC-297575](https://bugs.mojang.com/browse/MC-297575) - Happy Ghast with nbt NoAI set to true can't be controlled by player
- [MC-297591](https://bugs.mojang.com/browse/MC-297591) - Ender pearls can unexpectedly come to a halt
- [MC-298104](https://bugs.mojang.com/browse/MC-298104) - The max_lines field of multiline text input control is unrestricted, lagging the game
- [MC-298144](https://bugs.mojang.com/browse/MC-298144) - The initial value of minecraft:text input type is limited to 32 characters, regardless of max_length field
- [MC-298155](https://bugs.mojang.com/browse/MC-298155) - Dialog command_template using a multiline text input causes player to be kicked out of the server due to illegal characters in chat (which is \n)
- [MC-298209](https://bugs.mojang.com/browse/MC-298209) - Player cannot move while touching a happy ghast's body
- [MC-298301](https://bugs.mojang.com/browse/MC-298301) - Blinking the cursor shifts all characters to the right of a multilines text field input in Dialogs
- [MC-298307](https://bugs.mojang.com/browse/MC-298307) - Entering and exiting a pale garden while in Creative mode causes the current music track to remain silent
- [MC-298358](https://bugs.mojang.com/browse/MC-298358) - Riding a mob into powder snow no longer affects the player properly
- [MC-298361](https://bugs.mojang.com/browse/MC-298361) - Happy ghast with player riding, teleports back and forth when exiting nether portal
- [MC-298368](https://bugs.mojang.com/browse/MC-298368) - "music_notes.png.mcmeta" has an extra index that does not exist, causing a warning
- [MC-298394](https://bugs.mojang.com/browse/MC-298394) - Freezing in Powdered Snow is very inconsistent and jittery
- [MC-298422](https://bugs.mojang.com/browse/MC-298422) - Ghasts and happy ghasts do not take damage from harmful blocks under some circumstances

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/67fcbd0cf180f7223fa52c58e5c6a7ac05145686/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
