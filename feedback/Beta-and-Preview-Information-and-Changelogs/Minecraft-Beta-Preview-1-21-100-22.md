---
title: Minecraft Beta & Preview - 1.21.100.22
date: 2025-06-23T12:50:14Z
updated: 2025-06-25T15:39:46Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37552064279565-Minecraft-Beta-Preview-1-21-100-22
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-items: items
  user-content-leads: leads
  user-content-mobs: mobs
  user-content-projectiles: projectiles
  user-content-sounds: sounds
  user-content-technical-updates: technical-updates
  user-content-biomes: biomes
  h_01JYKT9S1R3CYXZA599ZKPS94V: blocks-1
  user-content-editor: editor
  user-content-graphical: graphical
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-api: api
  h_01JYKT9S1RMQPWJYKZS2RE9TXB: biomes-1
  user-content-jigsaw: jigsaw
---

**Posted:** 25 June 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

Enjoy!

# Features and Bug Fixes

## Blocks

- Fixed bug where an Enchanted Book with Fire Aspect could be used to light Campfires, Candles, and activate TNT ([MCPE-100021](https://bugs.mojang.com/browse/MCPE-100021))

## Items

- When using a Lead on an entity the "Attach" prompt is now translated ([MCPE-219627](https://bugs.mojang.com/browse/MCPE-219627))

## Leads

- Leashes will now emit their breaking sound from the location of the leash holder, rather than the actor being leashed

## Mobs

- Happy Ghast now drops 1-3 experience orbs when killed by a player
- Starting in 1.21.100, we’re gradually enabling engine changes to mob death behavior. This refactor shouldn’t affect gameplay but we’ll monitor for any death-related bugs.

## Projectiles

- Projectile tolerance margin is now incremented based on the total time active in the world ([MCPE-220496](https://bugs.mojang.com/browse/MCPE-220496))
  - Previously, projectile tolerance margin was expanded for every flight tick
  - Now, projectile tolerance margin is expanded for every active tick, regardless of projectile travel state

## Sounds

- Increased volume of Happy Ghast ride sound

# Technical Updates

## Biomes

- Updated "minecraft:grass_appearance" component with "grass_is_shaded" variable if true it adds a shading effect to the grass as if there was a roof.

## Blocks

- Released the component `minecraft:random_offset` from experimental for block format versions 1.21.100 or higher
- Fix incorrect destruction particles on blocks that do not have a "minecraft:destruction_particles" component on the base block json definition, it will now fall back to the "minecraft:material_instances" component's definition for that permutation like it used to
- Fixed a crash related to reading incorrect or corrupt json data for animated blocks. Instead we now trigger a content error and prevent the block from animating.

## Editor

- Added an optional image field to tooltips for modal tools and property pane components.
- Added 'Mute Music' and 'Mute Game Sounds' toggles to Editor settings pane.
- Added the ability to drag a structure item from the Structure panel to the viewport. This updates the clipboard and activates the paste preview
- Updated the /structure command in an Editor Project to use the Editor Structure repository instead of the level's
- Fixed misaligned icons and image artifacts for block imaged after entering and returning from a test world

## Graphical

- Fishing Line: Increased thickness in Vibrant Visuals mode, so that the fishing line does not disappear from TAA
- Reduced the alpha value from 60% to 25% for hurt color overlay on entities to aid in accessibility
- Caustics textures with incorrect dimensions will no longer be loaded; a content error will be issued and the default caustics texture will be used instead

# Experimental Technical Updates

## API

- Added `class ItemBookComponent` to `beta` for interfacing with `minecraft:writable_book` and `minecraft:written_book` to change their contents and sign them.
- Added `class BookError` and `class BookPageContentError` to `beta`.

## Biomes

- Adding a new server side biome component `surface_builder` that will combine the components `surface_parameters`, `frozen_ocean_surface`, `mesa_surface`, `swamp_surface`, `capped_surface`, and `the_end_surface` into one component. Each biome can only use one builder type. The component can be used for world generation settings such as foundation material and sea floor depth.
- Added "minecraft:humidity" component with "is_humid" this forces a biome to either always be humid or never humid. Humidity effects the spread chance, and spread rate of fire in the biome.
- Added 'minecraft:partially_frozen' This component will impact the temperature in a frozen biome, causing some areas to not be frozen. Ex: patchy ice, patchy snow.

## Jigsaw

- Changed structure definitions folder from `worldgen/jigsaw_structures` to `worldgen/structures`.
