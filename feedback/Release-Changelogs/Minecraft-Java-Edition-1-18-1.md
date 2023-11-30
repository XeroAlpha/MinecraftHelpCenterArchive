---
title: "Minecraft: Java Edition 1.18.1 "
date: 2021-12-10T10:25:49Z
updated: 2021-12-10T10:25:54Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4416161161101-Minecraft-Java-Edition-1-18-1-
---

We’re now releasing Minecraft: Java Edition 1.18.1. This release fixes a critical security issue for multiplayer servers, changes how the world fog works to make more of the world visible, and fixes a couple of other bugs.

If you are running a multiplayer server, we highly encourage you to upgrade to this version as soon as possible.

Enjoy!

# TECHNICAL CHANGES IN 1.18.1

- Fixed an issue that would cause players on low-bandwidth connections to get timeout errors when connecting to a server
- World fog now starts further away from the player, to make distant terrain more visible
- Instead of applying fog as a spherical volume it is now applied as a cylindrical volume

# FIXED BUGS IN 1.18.1

- [MC-152198](https://bugs.mojang.com/browse/MC-152198) - Actual render distance is 2 chunks lower than render distance setting
- [MC-219507](https://bugs.mojang.com/browse/MC-219507) - Beacon’s power reverts back to previous one on world reload
- [MC-229321](https://bugs.mojang.com/browse/MC-229321) - Bees inside of bee hives / nests sometimes despawn when the world is reloaded
- [MC-242729](https://bugs.mojang.com/browse/MC-242729) - “Observer activating without any updates nearby, caused by /clone”
- [MC-243216](https://bugs.mojang.com/browse/MC-243216) - Chunk render distance on servers seems shorter than in 1.17.1
- [MC-243796](https://bugs.mojang.com/browse/MC-243796) - Random non fatal exceptions in console: Failed to store chunk ConcurrentModificationException

# GET THE RELEASE

​To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play!

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/125e5adf40c659fd3bce3e66e67a16bb49ecc1b9/server.jar)

Report bugs here:

- [Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/summary)

Want to give feedback?

- Head over to our [feedback website](https://feedback.minecraft.net/) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
