---
title: Minecraft Beta & Preview - 1.21.70.22
date: 2025-02-05T16:15:20Z
updated: 2025-02-06T12:32:13Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34063162910093-Minecraft-Beta-Preview-1-21-70-22
hash:
  user-content-experimental-features: experimental-features
  user-content-cactus-flower: cactus-flower
  user-content-chicken-variants: chicken-variants
  user-content-firefly-bush: firefly-bush
  user-content-general: general
  user-content-short-and-tall-dry-grass: short-and-tall-dry-grass
  user-content-animal-variants: animal-variants
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-known-issues: known-issues
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  h_01JKBE0YNXX8NDG3JCJYWVMGVN: general-1
  user-content-user-interface: user-interface
  user-content-player-permissions: player-permissions
  user-content-friends-drawer-improvements: friends-drawer-improvements
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-commands: commands
  user-content-components: components
  user-content-data-driven-jigsaw-structures: data-driven-jigsaw-structures
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-goals: goals
  user-content-mobs: mobs
  user-content-network-protocol: network-protocol
  user-content-sounds: sounds
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JKBE0YNYD6DZCNSW1Z1PQFCJ: api-1
  user-content-graphical: graphical
---

**Posted:** 5 February 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![New Chicken variants in a desert village.](https://feedback.minecraft.net/hc/article_attachments/34063162908429)

Apologies if all the clucking is distracting you from this changelog, but two new chicken variants have just joined the coop! The cold chicken and the warm chicken spawn in their respective climates, drop different colored eggs, and cause all kinds of chaos. Uh-oh, I think they are in fact about to escape their pen! I’ll quickly tell you that pink cactus flowers and two types of dry grass are now sprouting in sandy biomes. Oh, and we’ve squashed some bugs too!

# Experimental Features

## Cactus Flower

- Added the Cactus Flower, a new type of flower which has a chance of generating on Cactuses in Deserts and Badlands
- Cactus Flower can be placed on Cactus blocks or any block which has center support at the top of the block
- Cactus Flowers have a chance of growing on Cactus blocks
  - If a Cactus is 1-2 blocks high the Cactus Flower has a 10% chance to grow instead of the Cactus getting higher
  - If a Cactus is 3 blocks high the Cactus Flower has a 25% chance to grow instead of the Cactus getting higher
- Cactus Flowers can be used in the Composter
- A Cactus Flower can be used to craft 1 Pink Dye

## Chicken Variants

- Added two new Chicken variants - Warm Chicken and Cold Chicken!
- These have their own unique texture and geometry, but not a separate spawn egg
- They spawn in the same biomes as the Warm, Cold, and Temperate variants of Pigs and Cows
- Two new Egg items have been added for the Warm and Cold Chicken variants
  - Blue Egg - The Egg that is laid by and can hatch Cold Chicken variants
  - Brown Egg - The Egg that is laid by and can hatch Warm Chicken variants

## Firefly Bush

- Added ambient sounds to the Firefly Bush that will play when the moon is visible to the block
- Fixed held Firefly Bush texture to better match Java Edition ([MCPE-190248](https://bugs.mojang.com/browse/MCPE-190248))

## General

- Fixed the Bush block emitting brightness ([MCPE-190222](https://bugs.mojang.com/browse/MCPE-190222)) 
- Leaf Litter can now be placed on any block which provides center support 
- Fixed Leaf Litter step sound being in the block audio category not player 
- Change Leaf Litter map colour to be Brown 
- Fixed trailing spaces on new item names ([MCPE-190210](https://bugs.mojang.com/browse/MCPE-190210)) 

## Short and Tall Dry Grass

- Added two new types of grass: Short Dry Grass and Tall Dry Grass
- Both are 1 block high, which makes Tall Dry Grass differ from Tall Grass which is 2 blocks high
- Both generate in the Desert and Badlands
- Both can be placed on types of Sand, Terracotta and Dirt blocks like the Dead Bush
- Both can be bone mealed
  - Using Bone Meal on Short Dry Grass grows it into a Tall Dry Grass
  - Using Bone Meal on Tall Dry Grass places a neighbouring Short Dry Grass next to the block if possible
- Both can be used in the Composter
- Sheep can eat both to regrow its wool
- Both can be used as fuel for smelting

## Animal Variants

- Applied the warm and cold animal variant tags to all appropriate biomes, so that animals spawned in these biomes by spawn eggs or commands are an appropriate variant even if they still do not spawn in the biome naturally
- Cold Farm Animal Biomes:
  - Deep Frozen Ocean
  - Frozen Ocean
  - Frozen Peaks
  - Frozen River
  - Grove
  - Ice Spikes
  - Jagged Peaks
  - Snowy Beach
  - Snowy Plains
  - Snowy Slopes
  - Snowy Taiga
  - The End
  - Cold Ocean
  - Deep Cold Ocean
  - Deep Dark
  - End Barrens
  - End Highlands
  - End Midlands
  - Small End Islands
  - Stony Peaks
  - Old Growth Pine Taiga
  - Old Growth Spruce Taiga
  - Taiga
  - Windswept Forest
  - Windswept Gravelly Hills
  - Windswept Hills
- Warm Farm Animal Biomes
  - Mangrove Swamp
  - Badlands
  - Bamboo Jungle
  - Basalt Deltas
  - Crimson Forest
  - Desert
  - Eroded Badlands
  - Jungle
  - Nether Wastes
  - Savanna Plateau
  - Savanna
  - Soul Sand Valley
  - Sparse Jungle
  - Warm Ocean
  - Warped Forest
  - Windswept Savanna
  - Wooded Badlands
  - Deep Lukewarm Ocean
  - Lukewarm Ocean
- Temperate Farm Animal Biomes
  - Swamp
  - Beach
  - Birch Forest
  - Cherry Grove
  - Dark Forest
  - Dripstone Caves
  - Flower Forest
  - Forest
  - Lush Caves
  - Meadow
  - Mushroom Fields
  - Ocean
  - Old Growth Birch Forest
  - Plains
  - River
  - Stony Shore
  - Sunflower Plains
  - Lukewarm Ocean
  - The Void
  - Pale Garden

# Features and Bug Fixes

## Known Issues

- We have a couple of known issues in this week's update that we hope to have addressed soon
  - The Player's character is moving sideways
  - Other Players in Multiplayer sessions can get stuck in dying animation after respawn 

## Blocks

- Fixed z-fighting textures in Flower Pot and Nether Sprout blocks ([MCPE-190215](https://bugs.mojang.com/browse/MCPE-190215)) 
- Fixed a crash that would sometimes happen when entities with an excessively large hitbox entered liquid 
- Fixed blocks using the `minecraft:destructible_by_mining` component with `item_specific_speeds` defined flickering during their block breaking animation ([MCPE-188401](https://bugs.mojang.com/browse/MCPE-188401)) 
- Fixed trigger rate of red stone powered droppers and dispensers ([MCPE-189895](https://bugs.mojang.com/browse/MCPE-189895)) 

## Gameplay

- Using Riptide while standing in shallow water will once again launch the player as if they weren't standing in water. ([MCPE-188795](https://bugs.mojang.com/browse/MCPE-188795))

## General

- In Server Authoritative movement, the Player will not constantly bop up and down if flying state change during small loss of connection with the server. 
- Removing experimental files cold_taiga, cold_taiga_hills, and cold_taiga_mutated from behavior packs. These files were only loaded with the custom biomes experiment enabled, and this change does not remove the biomes themselves. 

## User Interface

- Fixed some typos and inaccuracies in the minecraft Encyclopedia ([MCPE-186358](https://bugs.mojang.com/browse/MCPE-186358))
- Screen Safe Area Settings: Disables Horizontal and Vertical Screen Position sliders if the Safe area is set to 100% 
- Stops Screen Position from displaying -0.0 due to a rounding error.
- Long splash texts on the start screen will break into two lines to be more readable. 
- The invite button on the pause screen is moved up a bit and now has an icon.
- Scaled and moved the title logo to make room for the friends drawer button. 
- Added new loading tips for creative mode. 

### Player Permissions

- The Player Permissions screen has been upgraded to the new Ore UI, bringing a fresh look and a more intuitive and user friendly experience. We've improved the visual design, introduced new icons for permission levels, and simplified the flow for easier navigation. Additionally, players now receive better feedback after each action, and error handling has been improved for a smoother experience. Let us know how you like it, at [aka.ms/mcplayerpermissionscreenfeedback](https://aka.ms/mcplayerpermissionscreenfeedback)

### Friends Drawer Improvements

- Players can now also find the Friends Drawer in the Main Menu and Game Menu, in addition to the Play Screen, in the top right of the screen. We hope this will make it easier to connect and play with your friends! Let us know how you like it, at [aka.ms/mcfriendsdrawerfeedback](https://aka.ms/mcfriendsdrawerfeedback)

# Technical Updates

## API

- Component `minecraft:fluidContainer` has been renamed to `minecraft:fluid_container` in V2. 

## Commands

- Fixed commands not executing when command is entered with leading spaces ([MCPE-147815](https://bugs.mojang.com/browse/MCPE-147815))
- Moved the `place feature` and `place featurerule` subcommands out of the Upcoming Creator Features experiment 

## Components

- Added the "minecraft:is_collidable" component
  - This component allows other mobs to have vertical and horizontal collisions with the component's owner
    - For a collision to occur, both mobs must have a "minecraft:collision_box" component
    - This component can only be used on mobs and enables collisions exclusively between mobs
  - Please note that this type of collision is unreliable for moving mobs
    - It is recommended to use this component only in scenarios where the mob remains stationary
  - Collidable behavior is closely related to stackable behavior
    - While the "minecraft:is_collidable" component governs how other mobs interact with the component's owner, the "minecraft:is_stackable" component describes how an entity interacts with others of its own kind
- The "entity_sensor" component now has two additional fields: 
  - "y_offset", applies a vertical offset to the entity's position when calculating distances to other entities
  - "find_players_only", restricts the search to Players only, affecting all subsensors
- Added the "minecraft:body_rotation_axis_aligned" component, that causes the entity's body to automatically rotate to align with the nearest cardinal direction based on its current facing direction 
  - Combining this with the "minecraft:body_rotation_blocked" component will cause the entity to align to the nearest cardinal direction and remain fixed in that orientation, regardless of future changes in its facing direction

## Data-driven Jigsaw Structures

- Fixed placement of Jigsaw structures that contain blocks with `minecraft:tick` component. 

## Editor

- Added Block Inspector tool which allows you to view block states and permutations of blocks 
- Added Entity Inspector tool which allows you to view and modify entity components
- Added a new `IRootPropertyPane.createModalOverlayPane` API function, allowing the creation of `IModalOverlayPane` to display on top of the pane content. Each pane supports one active modal overlay at a time, but it can own multiple modals. Modal overlays can be managed through the root pane's `setActiveModalOverlay` function or the overlay pane's `show` and `hide` functions 
- Fixed an assert encountered on client disconnect from dedicated server and re-entry into a world 
  - Fixed block picker UI dialog persisting after a client disconnect from a dedicated server

## Entity Components

- Added `on_spawn` trigger to `spawn_chance` on hit sub-component, triggered on the newly spawned entity with `other` set to the owning entity
- Added `particle_item_name` map to `particle_on_hit` on hit sub-component, maps an item name to an actor filter to determine what the name of the item used in the particle should be. Falls back to the name of the entity itself as before.

## Goals

- "minecraft:behavior.float_wander" AI goal will now restrict mobs to their home position if they have the "minecraft:home" component 

## Mobs

- Added maximum value of `100000000.0` and minimum value of `-100000000.0` to **"minecraft:collision_box"** component

## Network Protocol

- Added ActorFlags::COLLIDABLE
- Added ActorFlags::BODY_ROTATION_AXIS_ALIGNED

## Sounds

- Sound effects found in animations and animation controllers can now include an optional "locator" field similar to particle effects allowing them to originate from the locator on the entity rather than the origin 

# Experimental Technical Updates

## API

- `World`
  - Added `getDifficulty(): Difficulty` method to beta. This method gets the worlds current game difficulty.
  - Added `setDifficulty(difficulty: Difficulty): void` method to beta. This method sets the worlds current game difficulty. 
- `ActionFormData`
  - Added method `header(text: minecraftserver.RawMessage): ActionFormData;`. It adds a header into the form.
  - Added method `label(text: minecraftserver.RawMessage): ActionFormData;`. It adds a label into the form.
- `ModalFormData`
  - Added method `header(text: minecraftserver.RawMessage): ModalFormData;`. It adds a header into the form.
  - Added method `label(text: minecraftserver.RawMessage): ModalFormData;`. It adds a label into the form.
- Added new script module `@minecraft/diagnostics` version 1.0.0-beta. This module is dedicated server only for now and allows script modules to connect their script packs to [Sentry](https://sentry.io/) . This enables remote error tracking and monitoring for script packs. 

## Graphical

- Fixed a bug that caused water to render through the bottom of boats in the Deferred Technical Preview. 
- Fixed a bug that caused weather (rain, snow, etc...) to appear brighter than it should be at night in the Deferred Technical Preview.
