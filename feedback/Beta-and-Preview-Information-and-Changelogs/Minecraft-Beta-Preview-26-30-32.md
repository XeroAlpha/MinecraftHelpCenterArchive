---
title: Minecraft Beta & Preview - 26.30.32
date: 2026-05-26T13:16:11Z
updated: 2026-05-26T15:52:35Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46149394356877-Minecraft-Beta-Preview-26-30-32
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 26 May 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

**Please note** - the Preview on iOS will be rolling out later than other platforms this week.

# Chaos Cubed Features and Fixes

## Biomes

- Sulfur Caves now blend correctly with neighboring pre-generated chunks

## Sulfur Cube

- Fixed a bug where Sulfur Cubes would sink or not be able to move after ejecting its block

- Sulfur Cube released from a Bucket no longer retains the movement it had when captured ([MCPE-238275](https://bugs.mojang.com/browse/MCPE-238275))

- Sulfur Cube with TNT can now be primed by Redstone dust pointing at it ([MCPE-238476](https://bugs.mojang.com/browse/MCPE-238476))

- Sulfur Cubes using the "slow bouncy" archetype are now correctly kicked back based on the damage dealt

- Sulfur Cubes using the "hot" archetype are now thrown as far as those using the "regular" archetype ([MCPE-238953](https://bugs.mojang.com/browse/MCPE-238953))

## Potent Sulfur

- Erupting Potent Sulfur can now propel Boats and falling blocks

# Features and Bug Fixes

## Graphical

- Fixed corrupted visuals on mobs when using Vibrant Visuals with PBR resource packs that include heightmap textures for actors

## Music

- Music now plays in Mega Taiga and Redwood Taiga Mutated again ([MCPE-238957](https://bugs.mojang.com/browse/MCPE-238957))

## Stability and Performance

- Fix a crash that could occur when a player takes too long to join local multiplayer on XBOX

# Technical Updates

## Editor

- Disabled the "Export World" button on the Edit Project screen. To export the world, enter the Project, go to File -\> Export, and select "Shareable World" from the dropdown

## Entity Filters

- The `redstone_strength_at_position` entity filter now correctly evaluates to 0 when no signal is present

- The `redstone_strength_at_position` entity filter now correctly evaluates to the redstone strength when a Redstone Wire is pointing at the evaluated position

## Features

- The `only_check_intersection_for_motion_blocking_blocks` field in the `block_intersection` constraint of `minecraft:structure_template_feature` is now optional
