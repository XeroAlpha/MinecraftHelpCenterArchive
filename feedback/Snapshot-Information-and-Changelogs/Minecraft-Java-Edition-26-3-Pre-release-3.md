---
title: Minecraft Java Edition - 26.3 Pre-release 3
date: 2026-09-08T14:20:55Z
updated: 2026-09-08T15:02:22Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48740521840909-Minecraft-Java-Edition-26-3-Pre-release-3
hash:
  h_01M20RKS07K2S3YA4ZZHWSZXM2: technical-changes
  h_01M20RKS0AQ5JSF5GFRB9VHNZK: number-providers
  h_01M20RKS0BXJ2E73XQ2Q6M1HA4: changedminecraftmodfloat-provider-type
  h_01M20RKS0CG24DS3E0W682W90C: changedminecraftpowfloat-provider-type
  h_01M20P8J5TJX90NDG68X2QPETW: fixed-bugs-in-263-pre-release-3
  h_01M20P8J65RKXSJ90TNB8GW3JZ: get-the-pre-release
---

The road to release continues with pre-release 3! Today we're tackling another batch of bug fixes as we prepare for a full release of 26.3.

Happy Mining!

## Technical Changes

- The Data Pack version is now 121.0

### Number Providers

#### Changed minecraft:mod Float Provider Type

- Now uses standard modulus instead of floor modulus, matching the int variant

#### Changed minecraft:pow Float Provider Type

- Raising 0 to the power of 0 will now cause an error and halt computation, matching the int variant

## Fixed bugs in 26.3 Pre-Release 3

- [MC-309262](https://bugs.mojang.com/browse/MC-309262) - Falling blocks disappear for a split second when landing
- [MC-310189](https://bugs.mojang.com/browse/MC-310189) - The post_effect debug overlay entry does not upgrade to post_effects
- [MC-311113](https://bugs.mojang.com/browse/MC-311113) - The game does not hand off focus when clicking links on Wayland
- [MC-311419](https://bugs.mojang.com/browse/MC-311419) - Breaking a falling block with another one on top causes the top block to briefly become invisible when landing, revealing unlit block particles
- [MC-311579](https://bugs.mojang.com/browse/MC-311579) - The player can see through blocks when the camera is inside snow layers
- [MC-311631](https://bugs.mojang.com/browse/MC-311631) - Changing the "Exclusive Fullscreen Mode" option does not update the game's actual resolution on macOS
- [MC-311634](https://bugs.mojang.com/browse/MC-311634) - Setting the "Exclusive Fullscreen Mode" option to "Current" keeps the previously selected resolution
- [MC-311650](https://bugs.mojang.com/browse/MC-311650) - Integer and float number providers return inconsistent results for 0^0
- [MC-311651](https://bugs.mojang.com/browse/MC-311651) - Integer and float number providers return inconsistent results for (4 % -3)
- [MC-311664](https://bugs.mojang.com/browse/MC-311664) - Normal fullscreen does not take effect after disabling the "Exclusive Fullscreen" option on Windows
- [MC-311673](https://bugs.mojang.com/browse/MC-311673) - Shovels no longer lose durability when extinguishing campfires
- [MC-311676](https://bugs.mojang.com/browse/MC-311676) - Block breaking particles and sounds are not cancelled and continue appearing when pausing the game in multiplayer or using a portal
- [MC-311678](https://bugs.mojang.com/browse/MC-311678) - Damaging a villager so that it has zero reputation toward the player while trading allows for trades to be completed without payment
- [MC-311679](https://bugs.mojang.com/browse/MC-311679) - Players can complete trades without payment if the villager restocks while the trading screen is open
- [MC-311683](https://bugs.mojang.com/browse/MC-311683) - Borderless fullscreen doesn't take up the whole screen
- [MC-311714](https://bugs.mojang.com/browse/MC-311714) - Players no longer immediately benefit from the "Reduce fps when" option being set to "Minimized" when playing with the "Exclusive Fullscreen" option enabled and then switching focus
- [MC-311721](https://bugs.mojang.com/browse/MC-311721) - The rightmost column of pixels does not render correctly in windowed mode
- [MC-311722](https://bugs.mojang.com/browse/MC-311722) - Pressing Windows+↓ in fullscreen mode incorrectly restores the game window to a borderless windowed state
- [MC-311738](https://bugs.mojang.com/browse/MC-311738) - The block hitting sound is not played when breaking blocks that are destroyed quickly

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/73142eca8f45b713ef157e25a238285eb171010d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
