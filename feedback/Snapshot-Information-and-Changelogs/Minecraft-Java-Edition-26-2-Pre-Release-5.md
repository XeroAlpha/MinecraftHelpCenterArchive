---
title: Minecraft Java Edition - 26.2 Pre-Release 5
date: 2026-06-08T18:18:23Z
updated: 2026-06-08T18:18:32Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46484282747021-Minecraft-Java-Edition-26-2-Pre-Release-5
hash:
  h_01KTM77SC4EEZN34TFQ3Z1QETK: changes
  h_01KTM77SC6C6VE0GTPDGNGYZ20: startup-and-fallback-behavior-for-graphics-api
  h_01KTM77SC75MP41YHT5XY88H93: fixed-bugs-in-262-pre-release-5
  h_01KTM77SCFENZCY0TS10BAPWXF: get-the-pre-release
---

Today it is time for 26.2 Pre-Release 5, with a change to Hardcore mode settings along with other fixes! As announced at Minecraft Live, the drop is set to release on June 16!

Happy (careful) hardcore mining!

## Changes

- The game setting for Graphics API now changes if a crash is detected during startup
- The sound for when hitting the sulfur cube of a bouncy archetype now plays the correct sound
- As the host of a world, changing the game mode with F3 + F4 or with commands now changes the default game mode of the world
- The "Game Mode" and "Allow Commands" buttons are no longer available in Hardcore mode worlds

### Startup and Fallback Behavior for Graphics API

- If the game crashes at startup with "Prefer Vulkan" set, the setting will automatically be changed to "Default"
- When set to "Default", the game will still attempt to gather systems information about Vulkan at startup
- If the game crashes at startup with "Default" set, the setting will automatically be changed to "Prefer OpenGL"
  - With "Prefer OpenGL" set, no interaction will be made with Vulkan in case that causes crashes

## Fixed bugs in 26.2 Pre-Release 5

- [MC-308470](https://bugs.mojang.com/browse/MC-308470) - The "bouncy" sulfur cube archetype's sounds play at a significantly higher volume
- [MC-308575](https://bugs.mojang.com/browse/MC-308575) - The flower_default and flower_warm features generate a single flower, instead of a flower patch
- [MC-308587](https://bugs.mojang.com/browse/MC-308587) - Using a spear with Lunge on a geyser launches you downwards
- [MC-308619](https://bugs.mojang.com/browse/MC-308619) - Players can change their game mode from the World Options menu in hardcore worlds
- [MC-308620](https://bugs.mojang.com/browse/MC-308620) - Pressing the key bound to the "Friends Screen" key bind in the username field in the friends screen closes it instead of typing
- [MC-308622](https://bugs.mojang.com/browse/MC-308622) - Custom dialog buttons break the game menu
- [MC-308630](https://bugs.mojang.com/browse/MC-308630) - Changing whether commands are enabled does not properly update the state of the "Game Rules" button in the World Options screen
- [MC-308633](https://bugs.mojang.com/browse/MC-308633) - Changing your game mode with commands doesn't update the World Options screen
- [MC-308648](https://bugs.mojang.com/browse/MC-308648) - The "Statistics" button in the game menu is shifted to the right when there is a "Server Links..." button
- [MC-308657](https://bugs.mojang.com/browse/MC-308657) - The gui.friends.error.unauthorized string contains a comma splice
- [MC-308674](https://bugs.mojang.com/browse/MC-308674) - After re-entering the save, the game mode is set to Survival mode.
- [MC-308686](https://bugs.mojang.com/browse/MC-308686) - Hardcore death can be bypassed by rejoining the world

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/af01bff67124778cea0a0d426147c1042e05bf8f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
