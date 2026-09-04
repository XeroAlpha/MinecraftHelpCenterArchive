---
title: Minecraft Java Edition - 26.3 Pre-release 2
date: 2026-09-04T14:03:48Z
updated: 2026-09-04T14:03:55Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48670034106253-Minecraft-Java-Edition-26-3-Pre-release-2
hash:
  h_01M1PBPH0WR506HDZ9NRHGDX0M: changes
  h_01M1PBPH0X3BE3GDQ96GZJDEE8: ui
  h_01M1PBPH0YAPQPPKY7PR9WD7D2: technical-changes
  h_01M1PBPH0Z2HHRKT043ZAF4A55: data-pack-version-1200
  h_01M1PBPH0Z21Q0JXYFQ2QD2FCT: tags
  h_01M1PBPH0Z9E4XJBWX8A5MHS5F: structure-tags
  h_01M1PBPH11SJNZ9G5MHHQ42E5R: fixed-bugs-in-263-pre-release-2
  h_01M1PBPH1D82N099A6EXEFVD8X: get-the-pre-release
---

Two pre-releases in one week!? That's right! Now that we're in the pre-release phase, we're no longer following our regular snapshot schedule. This also means we're spending more time hunting bugs as we get things ready for release, and this pre-release is no exception. Hope you brought your bug spray!

Happy Mining!

## Changes

### UI

- Removed the custom rendering of IME candidates

## Technical Changes

- The Data Pack version is now 120.0

## Data Pack Version 120.0

### Tags

#### Structure Tags

- Renamed on_abandoned_camp_windswept to on_abandoned_camp_windswept_forest

## Fixed bugs in 26.3 Pre-Release 2

- [MC-210117](https://bugs.mojang.com/browse/MC-210117) - Sculk sensors don't detect ice/snow melting
- [MC-211708](https://bugs.mojang.com/browse/MC-211708) - Client spawns crit particles when attacking another player that cannot be harmed
- [MC-228273](https://bugs.mojang.com/browse/MC-228273) - Goats do not move correctly after they are tempted during a long jump
- [MC-237053](https://bugs.mojang.com/browse/MC-237053) - Block breaking particles cannot be seen by other players
- [MC-237165](https://bugs.mojang.com/browse/MC-237165) - Block breaking sounds cannot be heard by other players
- [MC-247034](https://bugs.mojang.com/browse/MC-247034) - Particles produced from entities growing cannot be seen by other players
- [MC-248600](https://bugs.mojang.com/browse/MC-248600) - Particles produced from moving in powder snow cannot be seen by other players
- [MC-263100](https://bugs.mojang.com/browse/MC-263100) - Cave biomes interfere with relief on exploration maps
- [MC-299460](https://bugs.mojang.com/browse/MC-299460) - Saddled pigs in boats carried by happy ghasts can cause a desync when unequipping a carrot on a stick
- [MC-304719](https://bugs.mojang.com/browse/MC-304719) - InhabitedTime for some chunks can be set to impossibly high values when a world is opened
- [MC-307449](https://bugs.mojang.com/browse/MC-307449) - Spawners with their light limits set no longer spawn mobs underground at night time
- [MC-310088](https://bugs.mojang.com/browse/MC-310088) - The taskbar icon displays the Java logo instead of the game's logo
- [MC-310169](https://bugs.mojang.com/browse/MC-310169) - The IME candidate box sometimes twitches while typing
- [MC-310300](https://bugs.mojang.com/browse/MC-310300) - Other windows cannot be displayed on top of the game window even with the "Exclusive Fullscreen" option disabled
- [MC-310592](https://bugs.mojang.com/browse/MC-310592) - Severe rendering errors occur on Windows devices with a Snapdragon 8cx Gen 2 CPU
- [MC-310756](https://bugs.mojang.com/browse/MC-310756) - The mouse cursor is invisible in fullscreen mode with the OpenGL rendering backend
- [MC-310939](https://bugs.mojang.com/browse/MC-310939) - Interacting with camels with two passengers is preferred over using items
- [MC-311186](https://bugs.mojang.com/browse/MC-311186) - The water overlay and fog does not render when the player's head is inside a block underwater
- [MC-311219](https://bugs.mojang.com/browse/MC-311219) - Pressing a mouse button after unmaximizing the game window while in a world can cause odd behavior
- [MC-311245](https://bugs.mojang.com/browse/MC-311245) - Ruined portals can generate replacing end portal frames
- [MC-311271](https://bugs.mojang.com/browse/MC-311271) - Some loot context parameters are missing from "generic" loot context
- [MC-311272](https://bugs.mojang.com/browse/MC-311272) - Some LootContextUser can crash when referenced parameter is not provided
- [MC-311285](https://bugs.mojang.com/browse/MC-311285) - Unnamed key binds from previous versions cause several options to be reset
- [MC-311345](https://bugs.mojang.com/browse/MC-311345) - Reloading resource packs with the OpenGL rendering backend when in a world causes visual glitches and crashes
- [MC-311430](https://bugs.mojang.com/browse/MC-311430) - The name of the #on_abandoned_camp_windswept structure tag does not contain the full name of the biome it generates in
- [MC-311445](https://bugs.mojang.com/browse/MC-311445) - In the 26.3 snapshots, game input freezes after triggering emoji panel with Win + .
- [MC-311453](https://bugs.mojang.com/browse/MC-311453) - Particles from feeding flowers to brown mooshrooms cannot be seen by other players
- [MC-311454](https://bugs.mojang.com/browse/MC-311454) - Particles from water evaporating in the Nether are not properly displayed
- [MC-311482](https://bugs.mojang.com/browse/MC-311482) - Kelp and seagrass can generate floating on submerged beached shipwrecks
- [MC-311485](https://bugs.mojang.com/browse/MC-311485) - The fog color when the weather is rain or thunder is much bluer compared to previous versions
- [MC-311488](https://bugs.mojang.com/browse/MC-311488) - Some IME software still cannot be used in fullscreen even with borderless mode.
- [MC-311583](https://bugs.mojang.com/browse/MC-311583) - Riding saddled pigs with carrot on a stick in boats carried by happy ghasts causes severe desync
- [MC-311592](https://bugs.mojang.com/browse/MC-311592) - Cursor containment does not update
- [MC-311593](https://bugs.mojang.com/browse/MC-311593) - Spear animation jitters when swapping into spear slot and charging it in the same tick
- [MC-311594](https://bugs.mojang.com/browse/MC-311594) - Some number providers produce an unexpected error when used in /compute
- [MC-311610](https://bugs.mojang.com/browse/MC-311610) - Clicking on an unopened double loot chest in Spectator mode plays the locked chest sound
- [MC-311652](https://bugs.mojang.com/browse/MC-311652) - Player-caused damage while trading allows villager trades to be completed without payment

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/1dcf227881b28b21cc1d03ba830273f0d2d26319/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
