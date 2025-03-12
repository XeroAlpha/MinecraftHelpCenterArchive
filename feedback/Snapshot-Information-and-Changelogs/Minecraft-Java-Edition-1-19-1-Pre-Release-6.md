---
title: "Minecraft: Java Edition - 1.19.1 Pre-Release 6 "
date: 2022-09-15T14:07:03Z
updated: 2025-03-12T11:13:10Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/9186873342989-Minecraft-Java-Edition-1-19-1-Pre-Release-6
hash:
  changes-in-1.19.1-pre-release-6: changes-in-1191-pre-release-6
  technical-changes-in-1.19.1-pre-release-6: technical-changes-in-1191-pre-release-6
  bugs-fixed-in-1.19.1-pre-release-6: bugs-fixed-in-1191-pre-release-6
---

We are now releasing pre-release 6 for Minecraft 1.19.1 with some small tweaks to sculk sensors and catalysts as well as bug fixes and improvements to the chat signing system.

# CHANGES IN 1.19.1 PRE-RELEASE 6

- Sculk Catalysts will now drop 5 XP instead of 20 XP
- Colors of the signing indicators for sending a message have been adjusted for improved accessiblity

# TECHNICAL CHANGES IN 1.19.1 PRE-RELEASE 6

- Therun_commandclick event for text components no longer supports any commands that send chat messages
  - /tellrawshould be used instead

# BUGS FIXED IN 1.19.1 PRE-RELEASE 6

- [MC-148149](https://bugs.mojang.com/browse/MC-148149)- Linux game crash when opening links
- [MC-207077](https://bugs.mojang.com/browse/MC-207077)- Crash on loading pre-1.13 world with noteblock + note NBT in inventory
- [MC-235614](https://bugs.mojang.com/browse/MC-235614)- Reference to unexisting predicate in a datapack causes java.lang.NullPointerException
- [MC-252190](https://bugs.mojang.com/browse/MC-252190)- Player-dropped items creating vibrations depends on you sneaking at the moment the item hits the ground, instead of when you threw the item
- [MC-252258](https://bugs.mojang.com/browse/MC-252258)- Wool block / carpet items generate vibrations, unless thrown by crouching players
- [MC-252265](https://bugs.mojang.com/browse/MC-252265)- --server argument causes java.lang.NullPointerException crash on some servers
- [MC-253402](https://bugs.mojang.com/browse/MC-253402)- Game crash when you shift right click on item in your hotbar to the chest at the same time as you die
- [MC-254255](https://bugs.mojang.com/browse/MC-254255)- Unable to text in chat with Chat Preview On send while sleeping
- [MC-254261](https://bugs.mojang.com/browse/MC-254261)- “The background opacity box of the chat preview field renders behind the ““Leave Bed”” button when sleeping in beds”
- [MC-254284](https://bugs.mojang.com/browse/MC-254284)- Sending chat packets with invalid message type id crashes the game
- [MC-254349](https://bugs.mojang.com/browse/MC-254349)- Crash when putting dye into a loom on a modded server

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/en-us/download) and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2cad39169c1a505ffca1049b236a4ddaf62c617d/server.jar)

Report bugs here:

- Minecraft issue tracker!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
