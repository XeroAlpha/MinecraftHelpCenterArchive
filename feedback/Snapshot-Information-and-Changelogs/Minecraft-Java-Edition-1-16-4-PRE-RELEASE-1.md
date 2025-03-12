---
title: "Minecraft: Java Edition: 1.16.4, PRE-RELEASE 1"
date: 2020-10-15T16:30:59Z
updated: 2025-03-12T11:14:59Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360050583452-Minecraft-Java-Edition-1-16-4-PRE-RELEASE-1
hash:
  new-features-in-1.16.4-pre-release-1: new-features-in-1164-pre-release-1
  technical-changes-in-1.16.4-pre-release-1: technical-changes-in-1164-pre-release-1
  fixed-bugs-in-1.16.4-pre-release-1: fixed-bugs-in-1164-pre-release-1
---

15 October

The first pre-release for 1.16.4 is officially out!

If you’ve been on the Internet for some time, you’ve probably noticed that you occasionally run into other players that you don’t get along with. To alleviate some of that frustration, we’re introducing a UI element called the “social interactions screen”, which will let you disable chatting with certain players, thus hiding any messages you receive from them. Additionally, the 1.16.4 update will contain some fixes for critical bugs, but other than that, this will be it for this dot-release.

Please help us out by testing the new UI and reporting any bugs you find on the bug tracker.

# NEW FEATURES IN 1.16.4 PRE-RELEASE 1

- New UI called Social Interactions Screen

## SOCIAL INTERACTIONS SCREEN

- Opens with a configurable key binding, by default "P"
- Whether a player is hidden resets when re-joining a server

# TECHNICAL CHANGES IN 1.16.4 PRE-RELEASE 1

- New network protocol scheme, with a high bit (bit 30) set for snapshots. The protocol version will increase by 1 for each snapshot, but full releases may keep the same protocol version as the previous full release in cases where the network protocols are compatible
- More information is now added to the crash log in cases where poor performance causes the server to crash

# FIXED BUGS IN 1.16.4 PRE-RELEASE 1

- [MC-192434](https://bugs.mojang.com/browse/MC-192434) - Netherite Leggings are textured weirdly
- [MC-199487](https://bugs.mojang.com/browse/MC-199487) - WorldGen Deadlock

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/28eb6f8c4c05eec278e3e7f9f0379a16adbfb91d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!
