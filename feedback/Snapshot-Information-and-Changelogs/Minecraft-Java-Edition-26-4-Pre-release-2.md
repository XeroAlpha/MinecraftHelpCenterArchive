---
title: Minecraft Java Edition - 26.4 Pre-release 2
date: 2026-11-27T12:34:27Z
updated: 2026-11-27T12:34:32Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/50724936903053-Minecraft-Java-Edition-26-4-Pre-release-2
hash:
  h_01M8EFZJ3QJPY7HS0YABFPE3E0: technical-changes
  h_01M8EFZJ3RK71D8MP8ZVNKXD00: data-pack-version-1282
  h_01M8EFZJ3RSKFJ1P8NM1CNK4EM: block-tags
  h_01M8EFZJ3SPTQ3MV3PG6JJ9QT2: fixed-bugs-in-264-pre-release-2
  h_01M8EFZJ42ZCRS3XMGFK70BRBR: get-the-pre-release
---

**Published** 11/27/2

It's Friday! To celebrate the weekend, we're releasing the second pre-release for 26.4: Deep Freeze! This time around, we've been busy fixing bugs, with a new data pack tag added for good measure. We're now one step closer to release!

Happy weekend mining!

## Technical changes

- The Data Pack version is now 128.2

## Data Pack Version 128.2

### Block Tags

- Added \#wall_side_shape_override - all blocks which should use their base shape instead of their collision shape for how a wall's sides should look

## Fixed bugs in 26.4 Pre-Release 2

- [MC-181541](https://bugs.mojang.com/browse/MC-181541) - Using flint and steel, lily pads, or fire charges while facing a block at the height limit doesn't show a warning and causes the player's arm to swing
- [MC-216719](https://bugs.mojang.com/browse/MC-216719) - Water buckets can be used above and below the Nether
- [MC-297931](https://bugs.mojang.com/browse/MC-297931) - Fireballs do not despawn when crossing a certain height, unlike wind charges
- [MC-310822](https://bugs.mojang.com/browse/MC-310822) - The whack and stab animation types look identical when holding a map in first person mode
- [MC-310823](https://bugs.mojang.com/browse/MC-310823) - The whack and stab animation types look identical when holding a crossbow in first person mode
- [MC-311450](https://bugs.mojang.com/browse/MC-311450) - block_transformer item components with random_block_provider block state providers sometimes cycle through every specified block
- [MC-311518](https://bugs.mojang.com/browse/MC-311518) - copyTextureToTexture passes the width and height coordinates instead of sourceX + width and sourceY + height
- [MC-311547](https://bugs.mojang.com/browse/MC-311547) - The whack and stab animation types look identical when holding nothing in first person mode
- [MC-311681](https://bugs.mojang.com/browse/MC-311681) - Dispensers can remove TNT from primed sulfur cubes
- [MC-312844](https://bugs.mojang.com/browse/MC-312844) - Walls below honey blocks don't become tall, unlike walls below slime blocks
- [MC-312887](https://bugs.mojang.com/browse/MC-312887) - Straw beds don't play their breaking sound when broken by a fluid
- [MC-313113](https://bugs.mojang.com/browse/MC-313113) - The game crashes when copying too much text
- [MC-313125](https://bugs.mojang.com/browse/MC-313125) - The cursor disappears and cannot be used after pressing the up/down arrow keys in the sign editing UI
- [MC-313183](https://bugs.mojang.com/browse/MC-313183) - Glowing falling blocks have a darker outline that changes shade with each face's direction
- [MC-313251](https://bugs.mojang.com/browse/MC-313251) - Pressing the debug key bind that toggles advanced tooltips in the "Items" tab of the statistics menu doesn't update tooltips until the screen is reopened
- [MC-313288](https://bugs.mojang.com/browse/MC-313288) - The texture of Steve's face is outdated in the Spectator mode hotbar icons
- [MC-313300](https://bugs.mojang.com/browse/MC-313300) - Pigs and striders regain their speed boosts after reloading the world
- [MC-313302](https://bugs.mojang.com/browse/MC-313302) - Icicles use the light blue map color instead of the ice map color, unlike other ice blocks
- [MC-313303](https://bugs.mojang.com/browse/MC-313303) - Sculk sensors aren't activated upon retrieving music discs from jukeboxes with chests above them
- [MC-313305](https://bugs.mojang.com/browse/MC-313305) - The "Open/Close Inventory" key bind fails to close the inventory after closing the overlapping recipe book with the Escape key after searching
- [MC-313307](https://bugs.mojang.com/browse/MC-313307) - Unfinished player reports aren't saved as drafts when you're disconnected after clicking the "Continue Editing" button
- [MC-313317](https://bugs.mojang.com/browse/MC-313317) - The narrator doesn't read the online statuses of friends in the friends menu
- [MC-313329](https://bugs.mojang.com/browse/MC-313329) - Jigsaw pieces rejected by their corner constraints prevent other pieces from generating in their place
- [MC-313331](https://bugs.mojang.com/browse/MC-313331) - Silent ice balls play their impact sounds
- [MC-313332](https://bugs.mojang.com/browse/MC-313332) - Silent camels and camel husks play their recovery sounds when recovering from dashes
- [MC-313343](https://bugs.mojang.com/browse/MC-313343) - Pushing sulfur cubes with the cold archetype plays their hit sound instead of their push sound
- [MC-313398](https://bugs.mojang.com/browse/MC-313398) - Breaking furnaces that have stored recipes which aren't cooking recipes disconnects players
- [MC-313449](https://bugs.mojang.com/browse/MC-313449) - The game crashes when placing speleothems on non-speleothem blocks added to the \#speleothems tag
- [MC-313464](https://bugs.mojang.com/browse/MC-313464) - The sounds of throwing ice balls are controlled by the "Friendly Mobs" sound category instead of "Players"
- [MC-313483](https://bugs.mojang.com/browse/MC-313483) - Splash and bubble particles now always appear at the player's feet when in contact with water
- [MC-313484](https://bugs.mojang.com/browse/MC-313484) - The game crashes when a randomized_int block state provider samples an out of range integer value
- [MC-313531](https://bugs.mojang.com/browse/MC-313531) - The narrator says that left-clicking items while holding bundles places the bundles, rather than storing the items in them
- [MC-313537](https://bugs.mojang.com/browse/MC-313537) - Failed /effect commands report zero targets when used on non-living entities

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/63feac922579f0c3e0081bf1c41613de8feb5db9/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
