---
title: Minecraft Java Edition - 26.2 Pre-release 4
date: 2026-06-04T13:53:20Z
updated: 2026-06-04T13:53:32Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46393304366349-Minecraft-Java-Edition-26-2-Pre-release-4
hash:
  h_01KT9EHAR6CPG02M4F51WTPPGC: changes
  h_01KT9EHARCDFR4BM1P0Z71A0TH: sulfur-cube-mob
  h_01KT9EHARFD7C15D7F43YNKZM9: potent-sulfur
  h_01KT9EHARGN408FM82JMKVR5ZN: ui
  h_01KT9EHARJTJGVMGCPDS4JSHQP: world-options-screen
  h_01KT9EHARKVCDH6N2ERW7DY1BG: open-to-lan-screen
  h_01KT9EHARR7C425DDZEP9W6EF7: technical-changes
  h_01KT9EHASAKWNNK8GPRDNM47HD: data-pack-version-1071
  h_01KT9EHASAS3M9KC6HD4M381ME: entity-tags
  h_01KT9EHASDZKYNQ3MZS053ZNYC: fixed-bugs-in-262-pre-release-4
  h_01KT9EHASZ2GBPK62Z84R261PD: get-the-pre-release
---

Today we are releasing 26.2 Pre-Release 4, with a couple of fixes and tweaks to the Chaos Cubed drop. As announced at Minecraft Live, the drop is set to release on June 16!

Happy crafting!

## Changes

- When the game is overwhelmed with particles, instead of removing existing particles in flight, it will now randomly select for particles to render or not render to stay under the particle limit
  - This change is especially visible with a large number of new geyser eruptions

### Sulfur Cube mob

- The Sulfur Cube will now be knocked back farther as the knockback enchantment level increases

### Potent Sulfur

- The Ender Dragon will no longer be affected by the Geyser

### UI

- The "Multiplayer Options" screen has been renamed back to "Open to LAN"
- Fixed an issue where the Realms configuration screen could fail to open

#### World Options screen

- The host of a world now has access to the "Game Mode" and "Allow Commands" buttons in the World Options screen

#### Open to LAN screen

- As opposed to World Options, the host of a world can configure the "Game Mode" and "Allow Commands" values for other players in their world (separate from themselves)
  - These buttons are available under a "Settings for Other Players" header

## Technical Changes

- The Data Pack version is now 107.1
- The particle_render_stats now includes the counts of different particle groups (SQ for single quads, NR for no render, EG for elder guardians and IP for item pickup), as well as the total

## Data Pack Version 107.1

### Entity Tags

- Added #not_affected_by_geysers - entities that are not affected by the upward impulse applied by Geyser eruptions

## Fixed bugs in 26.2 Pre-Release 4

- [MC-223248](https://bugs.mojang.com/browse/MC-223248) - Spore blossom particles gradually disappear/lessen until the world is reloaded
- [MC-306460](https://bugs.mojang.com/browse/MC-306460) - The game window is one pixel too tall in fullscreen mode
- [MC-307382](https://bugs.mojang.com/browse/MC-307382) - Screenshots taken in fullscreen mode on Windows are one pixel too tall
- [MC-308063](https://bugs.mojang.com/browse/MC-308063) - The client still thinks commands are enabled when enabling multiplayer with commands and disabling it
- [MC-308097](https://bugs.mojang.com/browse/MC-308097) - The "Server Links..." button in the game menu looks out of place
- [MC-308174](https://bugs.mojang.com/browse/MC-308174) - Hitboxes of item entities render from farther away than the item entities themselves
- [MC-308337](https://bugs.mojang.com/browse/MC-308337) - The "Friends Screen" key bind doesn't work when set to a mouse button
- [MC-308339](https://bugs.mojang.com/browse/MC-308339) - Visual glitches occur in the particle effects when plenty of continuous geysers erupt simultaneously
- [MC-308579](https://bugs.mojang.com/browse/MC-308579) - Charging a crossbow with Multishot level 32 or higher crashes the game
- [MC-308583](https://bugs.mojang.com/browse/MC-308583) - The block breaking animation no longer renders when breaking most mob heads
- [MC-308584](https://bugs.mojang.com/browse/MC-308584) - The block breaking animation z-fights with blocks with the Vulkan rendering backend (and rarely with the OpenGL backend)
- [MC-308588](https://bugs.mojang.com/browse/MC-308588) - Debug keybinds combinations now execute other keybinds bound to the key
- [MC-308592](https://bugs.mojang.com/browse/MC-308592) - Switching gamemode with F3 + F4 applies F4 keybind

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/99ee9aa4422d2067f83d33f833ad105e25f1d3c6/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
