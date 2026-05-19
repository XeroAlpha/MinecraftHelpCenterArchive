---
title: Minecraft Java Edition - 26.2 Snapshot 8
date: 2026-05-19T15:46:05Z
updated: 2026-05-19T15:46:26Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45976772290701-Minecraft-Java-Edition-26-2-Snapshot-8
hash:
  h_01KS0EKPF0R15EDM9RVNMG94KZ: new-features
  h_01KS0EKPF0J1C7DEXKD8E9HBR1: sulfur-caves-biome
  h_01KS0EKPF1B1B8Y9RZJG028FZG: sulfur-cube-mob
  h_01KS0EKPF1FE5Z77EPHHXPKNT6: changes
  h_01KS0EKPF2V9BQ0Q4ASP3VZGBG: changed-graphics-api-video-setting
  h_01KS0EKPF3ANPVWPWNE09BX55S: ui-sprites
  h_01KS0EKPF4FTEGAGJ6DVAXJHSP: technical-changes
  h_01KS0EKPF4AK0V4YS3FTHJ1NF7: damage-types
  h_01KS0EKPF4JX89ZYZ34NFCA9KT: data-pack-version-1060
  h_01KS0EKPF582YJKMJKK09QCBXT: commands
  h_01KS0EKPF502DZ9VR4EX4394B5: publish
  h_01KS0EKPF5NRX44QB8VJY2WX47: unpublish
  h_01KS0EKPF6KWT5EE6ARQYR8662: fixed-bugs-in-262-snapshot-8
  h_01KS0EKPFDBNQ60H67ATXM63T6: get-the-snapshot
---

Today we're shipping 26.2 Snapshot 8! OpenGL is now the default, while Vulkan moves into experimental territory. You'll also find updates to the sulfur cave and sulfur cube, along with beds that are now a bit bouncier than before!

Happy bouncing!

## New Features

### Sulfur Caves biome

- If exposed to the surface, the biome will generate with all the features of the underground Sulfur Caves biome

### Sulfur Cube mob

- Sulfur Cubes containing a block inside are now immune to damage from Magma Blocks, as well as from other Sulfur Cubes that contain a Magma Block

## Changes

- The game will now use OpenGL graphics API by default
- Beds are now slightly more bouncy to match Bedrock

### Changed "Graphics API" Video Setting

- "Vulkan" is now marked as "Experimental"
  - You can still use it if you want, it works well on most common systems, but may reduce performance or cause instability on some other systems
- "Default" option will now use OpenGL behind the scenes
- The setting will be reset to "Default" for all players

### UI Sprites

- Added friends/background_dark — a darker variant of the friends/background panel sprite, used as the background for confirmation dialogs in the Friends UI

## Technical Changes

- The Data Pack version is now 106.0

### Damage Types

- Added a new minecraft:sulfur_cube_hot damage type

## Data Pack Version 106.0

### Commands

#### Publish

- The publish command now takes an additional boolean as it's first argument to specify whether the server should be opened to online multiplayer or just local multiplayer
  - Default: true (online multiplayer)

#### Unpublish

- Added unpublish command that unpublishes your integrated server if there is one present

## Fixed bugs in 26.2 Snapshot 8

- [MC-306673](https://bugs.mojang.com/browse/MC-306673) - The color of sleeping baby snow foxes' eyes is inconsistent with their adult variant
- [MC-306738](https://bugs.mojang.com/browse/MC-306738) - Blocks sometimes remain visible after breaking
- [MC-306750](https://bugs.mojang.com/browse/MC-306750) - The texture of snifflets contains unused pixels
- [MC-306962](https://bugs.mojang.com/browse/MC-306962) - The "Take Screenshot" key bind doesn't work when set to a mouse button
- [MC-307212](https://bugs.mojang.com/browse/MC-307212) - The texture of the back of gurgles' right arm has a line of miscolored pixels
- [MC-307363](https://bugs.mojang.com/browse/MC-307363) - Baby hoglins' mane no longer appears on both sides of the body texture
- [MC-307833](https://bugs.mojang.com/browse/MC-307833) - The world freezes when villagers with specific trade sets level up
- [MC-307911](https://bugs.mojang.com/browse/MC-307911) - The death message for dying to a sulfur cube with an absorbed magma block is " discovered the floor was lava"
- [MC-308035](https://bugs.mojang.com/browse/MC-308035) - Standing signs next to blocks now have an extra dark looking face
- [MC-308047](https://bugs.mojang.com/browse/MC-308047) - Friends service forbidden (403) — user may lack an active profile
- [MC-308048](https://bugs.mojang.com/browse/MC-308048) - The "options.inGameNotification" string is improperly capitalized
- [MC-308058](https://bugs.mojang.com/browse/MC-308058) - Sulfur cubes touching cacti spam the hurting sound
- [MC-308061](https://bugs.mojang.com/browse/MC-308061) - Games published with /publish are shown as offline in the multiplayer options screen
- [MC-308073](https://bugs.mojang.com/browse/MC-308073) - Text in the friends list warning screen can extend outside the window when reducing the resolution
- [MC-308102](https://bugs.mojang.com/browse/MC-308102) - Non-friends can join a friends-only world if they are using the same network
- [MC-308103](https://bugs.mojang.com/browse/MC-308103) - The sign editing screen no longer distinguishes between standing signs and wall signs
- [MC-308104](https://bugs.mojang.com/browse/MC-308104) - The side faces of wall signs do not get culled against blocks
- [MC-308114](https://bugs.mojang.com/browse/MC-308114) - The name of the debug property that simulates friend-only chat repeats the word "DEBUG\_"
- [MC-308145](https://bugs.mojang.com/browse/MC-308145) - Cannot see own chat messages when chat is restricted to friends only by Xbox options
- [MC-308163](https://bugs.mojang.com/browse/MC-308163) - Entities pushed upward by geysers take fall damage proportional to the time they have been hovering for when landing
- [MC-308168](https://bugs.mojang.com/browse/MC-308168) - The skin preview in the skin reporting screen can no longer be rotated vertically
- [MC-308181](https://bugs.mojang.com/browse/MC-308181) - When the Villager Trade Rebalance experiment is on, the "Bounce" music disc does not generate

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/63a80c132f2270af2f43161db596fce69e3e5339/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
