---
title: Minecraft Beta & Preview - 1.21.60.27
date: 2025-01-15T16:20:42Z
updated: 2025-01-16T10:54:18Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/33502112973069-Minecraft-Beta-Preview-1-21-60-27
---

**Posted:** 15 January 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft shipwreck underwater with tropical fish and a dolphin nearby](https://feedback.minecraft.net/hc/article_attachments/33502112969229)

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)! Here's what's new this week:

# Features and Bug Fixes

## Audio

- Music volume now goes back to normal when exiting the game from a Pale Garden biome ([MCPE-188766](https://bugs.mojang.com/browse/MCPE-188766 "https://bugs.mojang.com/browse/MCPE-188766"))

## Blocks

- Open and Closed Eyeblossoms no longer appear in the Creative Inventory for worlds that have not been updated to 1.21.50 ([MCPE-189030](https://bugs.mojang.com/browse/MCPE-189030 "https://bugs.mojang.com/browse/MCPE-189030"))

## Gameplay

- Fixed issue where players who entered a world while crawling would sometimes take suffocation damage ([MCPE-185676](https://bugs.mojang.com/browse/MCPE-185676 "https://bugs.mojang.com/browse/MCPE-185676"))

## Mobs

- Fixed issue preventing Squid from rotating to match their movement

- Fixed an issue to prevent Enderman from teleporting when riding Boats and Minecarts ([MCPE-31761](https://bugs.mojang.com/browse/MCPE-31761 "https://bugs.mojang.com/browse/MCPE-31761"))

## Vanilla Parity

- Wheat color is now yellow on a Map instead of green ([MCPE-186083](https://bugs.mojang.com/browse/MCPE-186083))

- Shearing Cave Vines with Glow Berries when sneaking now shears the Cave Vine instead of dropping Glow Berries ([MCPE-189118](https://bugs.mojang.com/browse/MCPE-189118 "https://bugs.mojang.com/browse/MCPE-189118"))

### Biomes

- Seagrass now generates more frequently, with the amount of tall Seagrass varying by biome ([MCPE-188870](https://bugs.mojang.com/browse/MCPE-188870 "https://bugs.mojang.com/browse/MCPE-188870"))

- Kelp can now generate at any depth, leading to increased overall generation ([MCPE-188870](https://bugs.mojang.com/browse/MCPE-188870 "https://bugs.mojang.com/browse/MCPE-188870"))

- Mangrove Swamp downfall value now matches that of regular Swamp ([MCPE-156495](https://bugs.mojang.com/browse/MCPE-156495 "https://bugs.mojang.com/browse/MCPE-156495"))

- Mangrove Swamp underwater fog now gradually fades out after entering water, as it does in other biomes ([MCPE-158256](https://bugs.mojang.com/browse/MCPE-158256 "https://bugs.mojang.com/browse/MCPE-158256"))

- Fossils now generate under Mangrove Swamps, similar to regular Swamps ([MCPE-175680](https://bugs.mojang.com/browse/MCPE-175680 "https://bugs.mojang.com/browse/MCPE-175680"))

- Jungle Bushes now use Oak Leaves for foliage, aligning with the intended game aesthetic, despite their Jungle Log trunks ([MCPE-164963](https://bugs.mojang.com/browse/MCPE-164963 "https://bugs.mojang.com/browse/MCPE-164963"))

### Sounds

- Wood stripping now plays a wood stripping sound instead of a wood step sound ([MCPE-106552](https://bugs.mojang.com/browse/MCPE-106552 "https://bugs.mojang.com/browse/MCPE-106552"))

- Creating a Grass Path now makes a shovel flattening sound instead of a grass step sound ([MCPE-114390](https://bugs.mojang.com/browse/MCPE-114390 "https://bugs.mojang.com/browse/MCPE-114390"))

## World Generation

- Fixed issue that caused new terrain generation to not match already saved chunks in some Biomes ([MCPE-175332](https://bugs.mojang.com/browse/MCPE-175332 "https://bugs.mojang.com/browse/MCPE-175332"))

# Technical Updates

## Component

- Moved the "minecraft:compostable" item component out of experimental and to Release. Moved the related scripting apis out of Beta to Release

## Editor

- Added a new Workbench tool which allows for quickly changing block states for blocks with modifiable properties (doors, fences, etc)

- Added `ContinuousAction` to supported key binding actions that simulate key repeats at set tick intervals

- Added 'Test World', 'Export', and 'Settings' to the ActionBar

- Added missing image for 'Navigation Panel' in the ActionBar

- Updated rotation slider to be an integer

- Fixed incorrect maximum value for fixed distance mode

- Fixed a bug that caused text field to lose focus when another UI element is hovered

# Experimental Technical Updates

## API

- Rename `handleCounts` interface to `HandleCounts` in `@minecraft/debug_utilities` module.
- Fixed `BlockLocationIterator` crash that could happen if the `BlockVolume` that the iterator came from was deleted first.

## Experimental

- Focus Target Camera has vertical_rotation_limits of \[0.0, 180.0\] by default to reflect world space changes

- Focus Target camera now stops targeting when either `clear` from the camera command is used, or when the target is over 64 chunks away from the camera

## Stability and Performance

- Experimental support for applying a service-driven texture memory budget in low memory situations. When enabled, memory will be conserved by progressively reducing resolution of some textures as usage approaches the budgeted limit.
