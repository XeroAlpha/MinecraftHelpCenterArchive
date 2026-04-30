---
title: Minecraft Beta & Preview - 26.30.25/26
date: 2026-04-30T13:52:51Z
updated: 2026-04-30T15:47:43Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45497683432333-Minecraft-Beta-Preview-26-30-25-26
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 30 April 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 
- **Please note** - Preview on PlayStation will have version 26.30.26, and will be rolling out later than the other platforms

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/45497700055565" alt="Sulfur Cubes bouncing in a Geyser" />
</figure>

Test two more features from Chaos Cubed! Watch out for geysers – vertical bursts of sulfurous water – or they will send you flying. Unless that's what you want, of course! Then, try feeding a TNT block to a sulfur cube. What happens if you ignite it? Surely nothing too bad or chaotic, right? Find out in Bedrock beta & preview right now!

# Chaos Cubed Features and Fixes

## Geysers

- Geysers form when a Magma block is generated or placed underneath a Potent Sulfur block that's submerged underneath 1 to 4 blocks of water. Use them for a vertical boost or a dramatic landscaping element!
- **Please note:** We have two known issues that we are working on; Geysers are currently missing their sounds, and Geyser particle animation may look jerky due to an underlying issue.

## Sulfur Caves

- Sulfur Springs once again generate above Sulfur Caves
- Sulfur Springs are now less likely to destroy trees
- Canyons can now correctly carve through Cinnabar and Sulfur
- Readded the Sulfur Spike to creative inventory

## Sulfur Cube

- Sulfur Cubes are now able to absorb TNT blocks
  - Absorbed TNT can be primed by Redstone, fire sources, or nearby explosions
  - When primed by fire or Redstone, absorbed TNT uses a fuse time of 6 seconds
  - When primed by an explosion, absorbed TNT uses a randomized fuse time between 0.75 and 3 seconds
  - Sulfur Cubes with an absorbed, primed TNT block cannot be picked up with a Bucket
  - Sulfur Cubes with an absorbed, primed TNT block cannot be damaged
  - Absorbed, primed TNT blocks cannot be sheared out
  - On explosion, no Small Sulfur Cubes are spawned
- Small Sulfur Cube no longer occasionally spawns from a Bucket of Sulfur Cube
- Using a Water Bucket on a Small Sulfur Cube no longer causes it to disappear and place water at the world origin ([MCPE-61625](https://bugs.mojang.com/browse/MCPE-61625))
- Using a Bucket of Sulfur Cube no longer sets the target block to be the same as the block at Player's eye position ([MCPE-237825](https://bugs.mojang.com/browse/MCPE-237825))
- Wandering Traders can now sell Sulfur Spikes

# Features and Bug Fixes

## Accessibility Features

- Added a Panorama Scroll Speed slider to Video settings that controls the rotation speed of the main menu background ([MCPE-180178](https://bugs.mojang.com/browse/MCPE-180178))

## Blocks

- Iron doors and stone buttons now generate in strongholds ([MCPE-11765](https://bugs.mojang.com/browse/MCPE-11765))
- Fixed wooden doors in strongholds being placed with the wrong orientation
- Fixed Java parity issue where Cauldron/Composter blocks pulled by sticky pistons can pull player through walls ([MCPE-181221](https://bugs.mojang.com/browse/MCPE-181221))
- Four Sulfur Spikes can now be used to craft one Sulfur block

## Gameplay

- Fixed items being duplicated when crossing chunk borders in The End ([MCPE-233883](https://bugs.mojang.com/browse/MCPE-233883))
- Fixed a bug that caused entities on the edge of less-than full-height water and lava to still be affected by the liquid. ([MCPE-45633](https://bugs.mojang.com/browse/MCPE-45633) ) ([MCPE-183531](https://bugs.mojang.com/browse/MCPE-183531) )
- Fixed a bug where bees don't pollinate Spore Blossoms and Chorus Flowers ([MCPE-174401](https://bugs.mojang.com/browse/MCPE-174401))
- Fixed a bug where Strider's loot was not affected by Looting Enchantment ([MCPE-112761](https://bugs.mojang.com/browse/MCPE-112761))

## General

- Fixed the rest of the cases where offline multiplayer would load infinitely ([MCPE-173418](https://bugs.mojang.com/browse/MCPE-173418))
- Fixed bug where boat would jitter when switching from one to the other.

## Graphical

- RTX terrain atlas issue remains in this preview
- Fixed some animations not working correctly on certain Android devices ([MCPE-235729](https://bugs.mojang.com/browse/MCPE-235729))
- Fixed an issue that caused dropped items to sometimes appear behind other objects in Ray Tracing graphics mode
- Fixed snow golem heads disappearing in Ray Tracing mode when the player is too close
- Fixed z-fighting on scaffolding top face.
- Fixed an issue where loading in some Marketplace worlds would result in all white screen in Vibrant Visuals.
- Updated the fog JSON schemas to allow keyframes for the following volumetric fog data members. JSONs must target the `1.26.20` schema version to use this new capability :
  - Max Density: Maximum fog density (0.0–1.0)
  - Zero Density Height: Y level with maximum density
  - Max Density Height: Y level where density reaches 0
  - Scattering: RGB scattering coefficients (light bouncing in fog)
  - Absorption: RGB absorption coefficients (light absorbed by fog)
  - Henyey Greenstein G: Scattering asymmetry parameter

## Marketplace

Fixed instances where open color picker button appeared on pages with no color picker ([MCPE-229764](https://bugs.mojang.com/browse/MCPE-229764)) Fixed flickering crosshair in split screen , ([MCPE-123918](https://bugs.mojang.com/browse/MCPE-123918))

## Mobs

- Fixed a bug where Ghasts could get stuck in the preparing-to-fire animation pose after the player walks out of attack range

## Realms

- Updated the Minecraft EULA link displayed in the Realms Core and Realms Plus subscription terms to use the locale-agnostic minecraft.net/eula URL
- Updated store name on Switch

### Realms Hub

- Added icons to the Story feed, Members, Slots, and Saves subtabs in the Realms Hub

## Sounds

- Tune trumpet sound assets for Copper variants Note Block interaction so that they are in tune with other Note Block variants ([MCPE-237578](https://bugs.mojang.com/browse/MCPE-237578))

## Stability and Performance

- Fixed crash when using a structure block that contains a glow stone in Ray Tracing graphics mode . ([MCPE-236402](https://bugs.mojang.com/browse/MCPE-236402))
- Fixed constant hard drive activity caused by the texture cache flushing to disk every frame ([MCPE-238187](https://bugs.mojang.com/browse/MCPE-238187))

## User Interface

- Fixes buttons sometimes becoming unselectable at the bottom of a scroll panel while using a controller
- Crafting preview now shows the correct wood material variants.
  - Recipes containing different wood materials now show the variants related to the materials you own.
- Fixed a bug where resource packs with subpacks would not correctly save to new worlds when they were added automatically by activating a corresponding behavior pack.
- Fixed a bug where resource packs with subpacks would not display the valid default settings when they were added automatically by activating a corresponding behavior pack.
- Fixed format for number percentage strings in Turkish language
- Fixed the profile picture on the start screen showing a blank space instead of the default Alex icon while loading
- Fixed the profile picture not updating after signing in due to the refresh window closing prematurely
- Ctrl + Left/Right Arrow now correctly moves the cursor by word in Ore UI text fields on Windows
- Ctrl + Backspace and Ctrl + Delete now correctly delete an entire word in Ore UI text fields on Windows ([MCPE-237189](https://bugs.mojang.com/browse/MCPE-237189))
- Fixed sorting by Installed state in player library not working on Switch
- Players are now informed when their skin is not compatible with cross-platform multiplayer and can choose to proceed when creating or starting a world
- Double tap or click now selects a word, and triple selects all text in Ore UI text fields
- Tap and drag now moves the cursor in Ore UI text fields
- Tap and hold now allows selecting text in Ore UI text fields
- Added ContentCard component to display marketplace items with pricing, ratings, and content badges

# Technical Updates

## AI Goals

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.30 and newer.
  - `minecraft:behavior.make_love`
  - `minecraft:behavior.receive_love`
  - `minecraft:behavior.skeleton_horse_trap`
  - `minecraft:behavior.swell`

## API

- Fixed a crash that would sometimes occur when setting the color of an item with `DyeableItemComponent` ([MCPE-237909](https://bugs.mojang.com/browse/MCPE-237909))

## Biome Components

- The following biome components have been taken out of beta and are available starting with the "1.26.30" format version:
  - "minecraft:surface_builder"
  - "minecraft:subsurface_builder"

## Commands

- Change how the localization process percentage signs in formatted strings: a numbered form with an invalid parameter will be left as it is

## Editor

- Fixed a crash and missing blocks when generating a Jigsaw preview containing wall blocks or other blocks whose post-placement state depends on neighboring blocks
- Fixed a crash that occurred when generating a Jigsaw preview with structures containing Jigsaw blocks that have an invalid "Turns Into" block name
- Fixed a bug that the Jigsaw was built using only one structure from pool of pieces after rejoining a Project
- Fixed a bug that the preview offset has been changed after click Quick Move in Selection Tool
- Fixed a bug that the LayoutInstance structure rotation/mirror didn't match the structure preview
- Fixed transition when loading a project on Editor play screen from Instant to Slide, and making it consistent with Play screen
- Fixed a bug in the Editor Workbench tool where doors could only be edited by clicking the bottom half. Clicks on the top half (`upper_block_bit=true`) are now resolved to the bottom half so block state highlighting and property edits work consistently from either half.
- Added `TooltipButton` API for interactive tooltips to support buttons
- Improved performance for frequently updating scripted panes. Also removed `beginConstruct` and `endConstruct` functions
- Added `setSortOrder` and `getSortOrder` to `IModalToolContainer` for custom tool organization

## Entity Components

- The following entity components have been taken out of beta and are available starting with the "1.26.30" format version:
  - "minecraft:apply_knockback_rules"
  - "minecraft:pushable_by_entity"
  - "minecraft:bounciness"
  - "minecraft:air_drag_modifier"
- Added the `use_self_as_damage_source` property to the `minecraft:area_attack` component
  - If set to false, other entites won't retaliate against the attacking entity

## General

- Projectiles spawned using the "minecraft:spawn_entity" component now respect the anchor field of "minecraft:projectile" ([MCM-1700](https://bugs.mojang.com/browse/MCM-1700))

## Graphical

- Fixed an issue where "should_update_bones_and_effects_offscreen" and "should_update_effects_offscreen" settings were not applied as expected

## Mobs

- The `effect_amplifier` field on the `minecraft:attack` component is now applied to the inflicted status effect, so amplifier-sensitive effects such as Hunger now scale correctly when triggered by a mob's melee attack ([MCM-206](https://bugs.mojang.com/browse/MCM-206))

## Network Protocol

- Modified the binary format of BossEventPacket

## World Generation

- Fixed infinite loading issue for biomes with subsurface builder ([MCPE-238131](https://bugs.mojang.com/browse/MCPE-238131))

# Experimental Technical Updates

## API

- Added `SoundInstance` class to `beta` with a `stop` method that allows stopping a playing sound
- `Dimension.playSound` now returns a `SoundInstance` in `beta`
- `Player.playSound` now returns a `SoundInstance` in `beta`

## Blocks

- Added snow logging behavior for multi-blocks

### Voxel Shapes

- Added voxel shapes for 46 Vanilla blocks that change geometry during runtime based on player interactions or the environment. These shapes need the Voxel Shapes experiment to be enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed.
  - Big Dripleaf shape (3 blocks): Big Dripleaf, Big Dripleaf Tilt Partial, and Big Dripleaf Tilt Full
  - Fence shape (13 blocks): Fence for each wood type (13)
  - Fence Gate shape (26 blocks): Fence Gate and Fence Gate In Wall for each wood type (13)

## Graphical

- Point lights are now disabled on unsupported hardware (Android, PS4, Xbox One) when the RenderDragon Features for Creators experiment is enabled in Vibrant Visuals.
-  

## User Interface

- Fixed formatting codes when using multiline texts in Ore UI system.
