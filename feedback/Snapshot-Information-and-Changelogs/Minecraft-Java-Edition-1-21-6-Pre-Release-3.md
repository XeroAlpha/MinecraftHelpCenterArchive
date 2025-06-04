---
title: Minecraft Java Edition - 1.21.6 Pre-Release 3
date: 2025-06-04T15:12:29Z
updated: 2025-06-04T15:12:39Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37134499449485-Minecraft-Java-Edition-1-21-6-Pre-Release-3
hash:
  h_01JWXQY8CMGRENH9PG55FDHVT1: new-features
  h_01JWXQY8CMKNTEW2WC6R4HDQVH: music-and-sound
  h_01JWXQY8CM3QMABB9Y38775417: technical-changes
  h_01JWXQY8CM25YDS6CBSP0FYBTP: data-pack-version-80
  h_01JWXQY8CM9SE0KCZA7WHH7MMJ: new-triggers
  h_01JWXQY8CM0QF030B03C2MQW1N: commands
  h_01JWXQY8CMHCM6F455ZQPG53A7: modifiedplaysound
  h_01JWXQY8CMDD77HV8SRDJ2FP6S: fixed-bugs-in-1216-pre-release-3
  h_01JWXQY8CNKNM0S0Q56MT6RX6A: get-the-pre-release
---

We've got another pre-release coming in hot! This time with a new advancement trigger and sound category but most importantly some much needed bug fixes.

## New Features

### Music and Sound

- Added new sound volume category called "UI" for sounds played by UI elements, like button clicks

## Technical Changes

- The Data Pack version is now 80

## Data Pack Version 80

- Added player_sheared_equipment trigger

### New Triggers

Added minecraft:player_sheared_equipment

- Can Trigger when a player shears off a shearable equipment from an Entity
- Conditions:
  - item - Item that is sheared
  - entity - The entity that was sheared

### Commands

#### Modified playsound

- Added new category ui
  - Sounds in this category will continue playing when paused, similarly to music

## Fixed bugs in 1.21.6 Pre-Release 3

- [MC-296371](https://bugs.mojang.com/browse/MC-296371) - The entity shadows of happy ghasts are too small in relation to the size of their models
- [MC-296374](https://bugs.mojang.com/browse/MC-296374) - The entity shadows of ghastlings are too small in relation to the size of their models
- [MC-296853](https://bugs.mojang.com/browse/MC-296853) - The "Shear Brilliance" advancement is incorrectly given by shearing a lead off a wolf
- [MC-297113](https://bugs.mojang.com/browse/MC-297113) - Hotbar shown in loading terrain screen
- [MC-297497](https://bugs.mojang.com/browse/MC-297497) - The “Connection Lost” title isn’t displayed when being kicked from realms due to idle timeout
- [MC-297972](https://bugs.mojang.com/browse/MC-297972) - Dialog body content is misaligned
- [MC-298353](https://bugs.mojang.com/browse/MC-298353) - Ridden entities won't make the lead breaking sound when attached to a fence
- [MC-298412](https://bugs.mojang.com/browse/MC-298412) - Subtitles are no longer shown when the master volume is set to zero
- [MC-298466](https://bugs.mojang.com/browse/MC-298466) - When clicking the "yes" button to confirm command execution in a dialog, if the player is put into another dialog, the click sound from the "yes" button will not be played until it is closed
- [MC-298492](https://bugs.mojang.com/browse/MC-298492) - Disconnecting through dialog in configuration phase causes the client to crash.
- [MC-298516](https://bugs.mojang.com/browse/MC-298516) - While running /dialog clear and /dialog show every tick, pressing the warning button just after joining the world can crash the game
- [MC-298520](https://bugs.mojang.com/browse/MC-298520) - Items in slots now render behind the container title, mismatching 1.21.5 behavior

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/03f53214df599b9e39a560b94d0df5636858c32f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
