---
title: Minecraft Beta & Preview - 1.21.70.25
date: 2025-02-26T15:38:46Z
updated: 2025-02-26T15:49:53Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34570334565901-Minecraft-Beta-Preview-1-21-70-25
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-achievements-with-add-ons: achievements-with-add-ons
  user-content-blocks: blocks
  user-content-flower-pot: flower-pot
  user-content-leaf-litter: leaf-litter
  user-content-wildflower: wildflower
  user-content-sheep-wool-color-in-warm-and-cold-biomes: sheep-wool-color-in-warm-and-cold-biomes
  user-content-mobs: mobs
  user-content-cow: cow
  user-content-sheep: sheep
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-user-interface: user-interface
  user-content-wandering-trader-trades: wandering-trader-trades
  user-content-technical-updates: technical-updates
  user-content-biomes: biomes
  user-content-client-biome-components: client-biome-components
  h_01JN1DTDT7EGCY7SG9JFWBYCMH: blocks-1
  user-content-bug: bug
  user-content-commands: commands
  user-content-dedicated-server: dedicated-server
  user-content-editor: editor
  h_01JN1DTDT7N4T4MPHS40PW4HZJ: gameplay-1
  h_01JN1DTDT739R75X8GXSFC0TZX: general-1
  user-content-particles: particles
  user-content-structures: structures
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-api: api
  user-content-graphical: graphical
---

**Posted:** 26 February 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

 

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

Enjoy!

# Features and Bug Fixes

## Achievements with Add-Ons

- Enabled earning Achievements while playing in a world with Add-Ons applied.

## Blocks

- Fixed Cactus Flower hitbox not being the same size as the Cactus hitbox ([MCPE-190404](https://bugs.mojang.com/browse/MCPE-190404))

### Flower Pot

- Plants in Flower Pots are no longer overly stretched ([MCPE-190422](https://bugs.mojang.com/browse/MCPE-190422))
- Potted plants are no longer clipping through Flower Pots

### Leaf Litter

- Add Biome based tinting to Leaf Litter

### Wildflower

- Fixed Wildflower stray pixel when rendered in Item Frame ([MCPE-190209](https://bugs.mojang.com/browse/MCPE-190209))
- Fixed Wildflower item texture being veryyyyyy slightly offset compared to Java

## Sheep wool color in warm and cold biomes

- Reverted the change from two weeks back that allowed Blue, Light Blue, Cyan, Yellow, Orange and Red Sheep to spawn naturally in different biomes
- Black Sheep will still be the most common type to spawn in cold biomes, and Brown Sheep will be the most common type in warm biomes
- Pink Sheep will still be very rare and able to spawn anywhere where Sheep can spawn

## Mobs

- Temperate Cows no longer have harsh borders on their legs
- Red and Brown Mooshrooms no longer have harsh borders on their legs
- Fixed the z-fighting of the Mushrooms on Mooshrooms that was occuring from certain distance ([MCPE-190291](https://bugs.mojang.com/browse/MCPE-190291))
- Fixed Iron Golem cracked texture not appearing at appropriate damage levels

### Cow

- Fixed texture on the sides of a Cold Cow's head to be mirrored correctly

### Sheep

- Sheep wool texture has been tweaked to remove stark line at the back

## Gameplay

- Fixed a bug where using items with a use duration (fishing rods, food, potions, etc.) and changing slots would force your slot back to the original slot
- Fixed an issue where attacking a mob while sprint jumping would remove all player momentum ([MCPE-189501](https://bugs.mojang.com/browse/MCPE-189501))
- Fixed an issue where laggy players fighting would occasionally not be able to hit each other ([MCPE-190552](https://bugs.mojang.com/browse/MCPE-190552))
- Fixed an issue where Player's collision box would sometimes be incorrect after using a bed ([MCPE-190604](https://bugs.mojang.com/browse/MCPE-190604))

## General

- Enabled *Filter Profanity* toggle on mobile platforms

## User Interface

- Stacks are now correctly splitting across slots when moving cursor and holding the button to split stack
- Fixed a potential crash that could occur when splitting stacks of items in the creative inventory
- Encyclopedia now uses the correct term "Enchanting Table" rather than "Enchantment Table" ([MCPE-190418](https://bugs.mojang.com/browse/MCPE-190418))
- Trying to craft a Bundle while holding a Bundle with a Bundle inside of it now correctly crafts a Bundle instead of only consuming ingredients ([MCPE-190550](https://bugs.mojang.com/browse/MCPE-190550))
- Fixed an issue which prevented some users from accessing the Create New World screen in iOS Preview and PlayStation Preview
- Touch controls: Camera perspective can now be changed from a HUD button., enable this in the touch settings

## Wandering Trader Trades

- Wandering Traders' buying trades can now be used twice before they lock instead of only once

# Technical Updates

## Biomes

### Client Biome Components

- Add `minecraft:dry_foliage_color` component to override color for `dry_foliage` tint method

## Blocks

- Empty Bell blocks no longer crash the game when moved by a sticky piston ([MCPE-188687](https://bugs.mojang.com/browse/MCPE-188687))
- Updated the /fill, /clear and /testforblock Commands
  - Fixed a bug where these commands would recognize IDs of some flattened blocks as block group names and affect all variants under those groups
- Add `dry_foliage` tint method which uses the `textures/colormap/dry_foliage.png` color map
- Exposed the Block component minecraft:destruction_particles as a JSON object. This represents the particles used when the Block is destroyed
  - There is two fields for it:
    - "texture" is a required string field to set the texture used by the particles
    - "tint_method" is an optional string field that multiplies the texture color with a predefined tint. Default to "none". Supported values are "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage", "grass" and "water".
  - Block format before 1.21.70 will be upgraded to have the component added using the texture from the "down" or "\*" of the minecraft:material_instances component if present and "none" for tint_method. This was the old behavior.
  - Block format from 1.21.70 without the component will not be upgraded and uses the invalid texture\
    Examples:
    ``` hljs
     "minecraft:destruction_particles": {
      "texture": "my_particles_texture",
      "tint_method": "grass"
     }
    ```

    or
    ``` hljs
    "minecraft:destruction_particles": {
     "texture": "my_particles_texture"
    }
    ```

## Bug

- Fixed issue that occurs when cancelling world resource pack download
- Fixed crash that occurs when initializing `minecraft:decorated_pot` renderer

## Commands

- Removed set_movement_authority command.

## Dedicated Server

- Exposed a new parameter for dedicated server. This will make the server more strict on entity interactions. Look in server.properties for more information on what these do
  - server-authoritative-entity-interactions-strict default to false and can be set to true. Will affect Entity interaction acceptance
- Removed server-authoritative-movement parameter. It will now always use server-auth-with-rewind.

## Editor

- Added Realms integration
  - Users can now publish their Editor project directly to Realms
  - Users can download their Realms world
  - **NOTE**: Users must be signed in and have an active Realms subscription. For Preview builds, they must have a Preview Realms first. This can be created in non-Editor mode of Bedrock on Preview builds.
- Added better management of Structures:
  - Added the ability to rename a structure
  - Added the ability to delete a structure
  - Added the ability to duplicate a structure
  - Added the ability to rename the file/unique name
  - Added the ability to change the namespace
  - **NOTE**: Project structures will be exported to the `editor/structuredb` subdirectory in the world folder
- Added the Grid Repeat feature to the Repeater tool, which includes both Uniform and Separate repeat types
- Added visualization for the first layer added/removed in the extrude tool
- Updated the default flyspeed to 4.0 while using Editor
- Updated `IPropertyPane.addTable` API function to `IPropertyPane.addDataTable`
- Updated `IBlockListPropertyItem` and rename `ITablePropertyItem` to `IDataTablePropertyItem` APIs
- Fixed missing Air and Sugarcane block images
- Fixed a bug that would sometimes cause the refresh button to crash Editor
- Fixed a bug that caused farms to be placed near unloaded areas
- Fixed a bug that prevented slider to be visually updated for `INumberPropertyItem.updateLimits` API function

## Gameplay

- CommandBlock hover name now shown in GUI messages generated from commands ([MCPE-190606](https://bugs.mojang.com/browse/MCPE-190606))

## General

- Server Authoritative movement is now turned on by default

## Particles

- Multiple controllers transitioning out of a state at the same time will now properly expire all intended particles instead of just the last one

## Structures

- Fixed mirroring and rotation of crafter blocks when part of a structure that is being placed

# Experimental Technical Updates

## API

- `BlockMapColorComponent` scripting API is now read-only
- `BlockMapColorComponent` scripting API fields color and tintMethod are now properties instead of methods
- Fixed an issue where native constructors were not properly checking privileges when being called. Constructors now check privileges properly and produce correct errors when being used in Early Execution privilege.
- Deprecated `ItemUseOnBeforeEvent` in `@minecraft/server` 2.0.0-beta. Use `PlayerInteractWithBlockBeforeEvent` instead
- Deprecated `ItemUseOnAfterEvent` in `@minecraft/server` 2.0.0-beta. Use `PlayerInteractWithBlockAfterEvent` instead
- `BlockDestructionParticlesComponent` API has been added to `@minecraft/server` 2.0.0-beta
- `EntityScaleComponent` has been changed to read-only in version 2.0.0-beta

## Graphical

- Reduced emissive intensity by a factor of 15 in the Deferred Technical Preview, creators will likely need to adjust their emissive texture values
- Adjusted air and fog densities for volumetric scattering for more visible light rays in Deferred Technical Preview
- Made slight adjustments to auto exposure and eye adaptation in the Deferred Technical Preview
