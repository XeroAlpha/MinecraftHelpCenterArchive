---
title: Minecraft Java Edition - 26.2 Pre-release 1
date: 2026-05-26T15:08:54Z
updated: 2026-05-26T15:09:00Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46153634280333-Minecraft-Java-Edition-26-2-Pre-release-1
hash:
  h_01KSJD9B3BPRF59CDV9EG9A5MG: changes
  h_01KSJD9B3BZ6F5CA5PV9WPHCAA: sulfur-cube-mob
  h_01KSJD9B3CEGQT4HX9JPESA30Y: sulfur-caves-biome
  h_01KSJD9B3D1YNWKM8VB3VMNBDK: potent-sulfur
  h_01KSJD9B3DPCG5KXQSEJGEG9W5: sounds
  h_01KSJD9B3E8R2XFCR86YEXBBNV: ui
  h_01KSJD9B3E1W7J3C6WR2KDKQN9: technical-changes
  h_01KSJD9B3EFDMBHWEYSWEVJ5MK: server-properties
  h_01KSJD9B3J6B5NEZ454825CJ49: data-pack-version-1061
  h_01KSJD9B3JQFGESX31CWV5ZSAS: sulfur-cube-archetype-registry
  h_01KSJD9B3XQDMYM81JNGT20D4A: commands
  h_01KSJD9B3Y4VHNNCTJVB09X076: world-presets
  h_01KSJD9B3YH5BGAEN0DRZKXAPS: resource-pack-version-880
  h_01KSJD9B3YTM4R44910F4RDFSJ: block-sprites
  h_01KSJD9B3Z699QQS405AJN1ZDV: entity-textures
  h_01KSJD9B40QGZGBM99YMVKCBKN: sounds-1
  h_01KSJD9B45YJFFT0T4EC3P95JB: fixed-bugs-in-262-pre-release-1
  h_01KSJD9B4EWW470PJQHKRP5CAA: get-the-pre-release
---

Today we're rolling out the first pre-release for 26.2! From this point on, you should mostly see bug fixes as we prepare for release. Pre-releases also break away from the usual Tuesday snapshot rhythm, so keep an eye out for the next one!

With this pre-release, we are removing the Peer-to-Peer connection feature introduced in a recent snapshot. Because the experience wasn't what we wanted it to be for all players, we do not consider the feature ready for release in its current form.

## Changes

### Sulfur Cube mob

- Small Sulfur Cubes now have an updated model and texture
- The Sulfur Cube now has unique hit and push sounds for each archetype

### Sulfur Caves biome

- Updated the fog color in the Sulfur Caves, Bedrock will match this color later
- Reduced the max growth length of the Sulfur Spikes

### Potent Sulfur

- The continuous Geyser set-up now requires a source Lava Block to erupt

### Sounds

- Updated hurt and death sounds for one of the chicken sound variants
- Small Sulfur Cube now have sounds playing when being fed with Slimeballs

### UI

- The friend list button is now always visible, even if the feature is disabled in the options

## Technical Changes

- The Data Pack version is now 106.1
- The Resource Pack version is now 88.0

### Server properties

- Added chat-spam-threshold-seconds and command-spam-threshold-seconds properties, separating the spam thresholds for chat vs commands
  - Both thresholds are set to 10 by default, which was the existing threshold for combined command+chat spam
  - These thresholds configure the mechanism that automatically kicks players for sending too many chat messages or commands
  - The value describes how many seconds worth of spamming a player must do to get kicked, where each message a player sends increases the counter by 1 second
  - The counter is decremented once per tick (equivalent to 1/20th of a second), and a player is kicked if their counter reaches the configured threshold
  - Either threshold can be set to 0 to disable kicks for the associated type of spam
  - Examples of message rates that would cause a kick, given the default threshold of 10:
    - Sending 11 messages in 1 second
    - Sending 14 messages in 2 seconds
    - Sending 21 messages in 10 seconds

## Data Pack Version 106.1

### Sulfur Cube Archetype Registry

Added field:

- sound_settings - a field that contains various sound settings for the Sulfur Cube
  - hit_sound - sound event that is played when the Sulfur Cube is hit while it has a block inside
  - push_sound - sound event that is played when the Sulfur Cube is pushed while it has a block inside
  - push_sound_impulse_threshold - float that specifies the smallest impulse required to trigger the push sound effect on the Sulfur Cube
  - push_sound_cooldown - float that specifies the cooldown in seconds for the push sound effect

### Commands

- The execute on owner command will now consider Vexes as owned by their Evoker

### World Presets

- Added a new minecraft:flat_all_dimensions world preset
  - This preset does not show up by default in the create world screen

## Resource Pack Version 88.0

### Block Sprites

- Renamed block/quartz_pillar.png and block/purpur_pillar.png to append \_side as a suffix

### Entity Textures

- Added new Entity textures:
  - entity/sulfur_cube/sulfur_cube_outer.png
  - entity/sulfur_cube/sulfur_cube_inner.png
  - entity/sulfur_cube/sulfur_cube_outer_small.png
  - entity/sulfur_cube/sulfur_cube_inner_small.png

### Sounds

- Removed sounds for Sulfur Cube:
  - entity.sulfur_cube.hit
  - entity.sulfur_cube.push
- Added sounds for Sulfur Cube:
  - entity.sulfur_cube.regular.hit
  - entity.sulfur_cube.regular.push
  - entity.sulfur_cube.bouncy.hit
  - entity.sulfur_cube.bouncy.push
  - entity.sulfur_cube.slow_flat.hit
  - entity.sulfur_cube.slow_flat.push
  - entity.sulfur_cube.fast_flat.hit
  - entity.sulfur_cube.fast_flat.push
  - entity.sulfur_cube.light.hit
  - entity.sulfur_cube.light.push
  - entity.sulfur_cube.fast_sliding.hit
  - entity.sulfur_cube.fast_sliding.push
  - entity.sulfur_cube.slow_sliding.hit
  - entity.sulfur_cube.slow_sliding.push
  - entity.sulfur_cube.high_resistance.hit
  - entity.sulfur_cube.high_resistance.push
  - entity.sulfur_cube.sticky.hit
  - entity.sulfur_cube.sticky.push
  - entity.sulfur_cube.hot.hit
  - entity.sulfur_cube.hot.push

## Fixed bugs in 26.2 Pre-Release 1

- [MC-134349](https://bugs.mojang.com/browse/MC-134349) - Making a zoomed-out version of a map fails when using the pick block key
- [MC-277487](https://bugs.mojang.com/browse/MC-277487) - The game softlocks when attempting to create a new world if the saves folder is not writable
- [MC-301761](https://bugs.mojang.com/browse/MC-301761) - Elements within the realms “Players” tab all move down slightly when the “Invited” element is selected using the TAB key
- [MC-302144](https://bugs.mojang.com/browse/MC-302144) - Players respawn inside the bottom bedrock layers when the world spawn point is set in the Nether
- [MC-302268](https://bugs.mojang.com/browse/MC-302268) - Running multiple commands quickly kicks the player for spamming in multiplayer
- [MC-303401](https://bugs.mojang.com/browse/MC-303401) - Using the pick block key on maps with map_post_processing from a cartography table in Creative mode causes the game to crash
- [MC-307008](https://bugs.mojang.com/browse/MC-307008) - Severe loss of framerate in the new update
- [MC-307159](https://bugs.mojang.com/browse/MC-307159) - Using bone meal from the main hand simultaneously places a block held in the off hand
- [MC-307330](https://bugs.mojang.com/browse/MC-307330) - Major framerate drop in 26.1 and above
- [MC-307536](https://bugs.mojang.com/browse/MC-307536) - Performance drop while rendering decorated pots
- [MC-307589](https://bugs.mojang.com/browse/MC-307589) - Tridents don't render if their hitbox is far outside the player's field of view, even if part of them should otherwise be visible
- [MC-307721](https://bugs.mojang.com/browse/MC-307721) - Large numbers of banners in the world cause performance issues
- [MC-307935](https://bugs.mojang.com/browse/MC-307935) - Sulfur caves can eventually become overgrown with sulfur spikes
- [MC-307951](https://bugs.mojang.com/browse/MC-307951) - Piglins continuously make a sound while trying to zombify in Peaceful difficulty
- [MC-307999](https://bugs.mojang.com/browse/MC-307999) - The game's tick rate freezes for a while when a sulfur cube takes damage from Instant Damage with a very high amplifier
- [MC-308039](https://bugs.mojang.com/browse/MC-308039) - The click sound isn’t played when clicking on the “Microsoft account” link in the friends menu
- [MC-308041](https://bugs.mojang.com/browse/MC-308041) - Long usernames render outside of the friends list area
- [MC-308045](https://bugs.mojang.com/browse/MC-308045) - Small sulfur cubes don't have their own texture, unlike in Bedrock Edition
- [MC-308057](https://bugs.mojang.com/browse/MC-308057) - The “Manage online safety with your Microsoft account“ element in the friends menu is not perfectly horizontally centered
- [MC-308111](https://bugs.mojang.com/browse/MC-308111) - Items can enter the player's inventory after death, causing them to be deleted with the keep_inventory game rule disabled
- [MC-308112](https://bugs.mojang.com/browse/MC-308112) - The panorama starts spinning when entering the Music & Sounds menu from the accessibility onboarding screen
- [MC-308141](https://bugs.mojang.com/browse/MC-308141) - Friends' skins take a long time to show when opening the friends list
- [MC-308157](https://bugs.mojang.com/browse/MC-308157) - The game crashes when an evoker retaliates against a vex that has itself as its owner
- [MC-308182](https://bugs.mojang.com/browse/MC-308182) - The fog in sulfur caves is not green, unlike in Bedrock Edition
- [MC-308184](https://bugs.mojang.com/browse/MC-308184) - The game does not properly handle save folder deletion while running
- [MC-308194](https://bugs.mojang.com/browse/MC-308194) - The friend list doesn't use high contrast button textures when the "High Contrast" resource pack is enabled
- [MC-308217](https://bugs.mojang.com/browse/MC-308217) - Shulkers suffocate when opening while hanging from a block
- [MC-308226](https://bugs.mojang.com/browse/MC-308226) - Template models for signs are not prefixed with template\_
- [MC-308227](https://bugs.mojang.com/browse/MC-308227) - Template models for beds are not prefixed with template\_
- [MC-308237](https://bugs.mojang.com/browse/MC-308237) - Crash when post shaders fail to compile
- [MC-308242](https://bugs.mojang.com/browse/MC-308242) - Hanging signs' recipe unlock criterion name was changed to has_planks
- [MC-308292](https://bugs.mojang.com/browse/MC-308292) - The "My profile name: " string in the friends menu is placed to the left of the username even in right-to-left languages

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/4303619d9f1a22f51a98adbcd2d528f43c5b19bb/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
