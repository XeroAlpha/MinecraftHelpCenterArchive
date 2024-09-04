---
title: Minecraft Beta & Preview - 1.21.40.20
date: 2024-09-04T13:52:17Z
updated: 2024-09-04T21:22:39Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/29937458432397-Minecraft-Beta-Preview-1-21-40-20
hash:
  user-content-experimental-features: experimental-features
  user-content-bundles: bundles
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-commands: commands
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  01J6YGVDFH2GGV7N6RF98FNEDV: mobs-1
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-api: api
  01J6YGVDFGHD8K1Z26TBC2HNND: commands-1
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-entity-event-responses: entity-event-responses
  user-content-general: general
  01J6YGVDFG1M0EV1N6TS8WJRPA: graphical-2
  user-content-molang: molang
  user-content-resource-and-behavior-packs: resource-and-behavior-packs
  user-content-stability-and-performance: stability-and-performance
  user-content-experimental-technical-updates: experimental-technical-updates
  01J6YGVDFH75W9YRM4VYPK4VQM: api-1
  user-content-cameras: cameras
---

**Posted:** 4th September 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta ](https://aka.ms/JoinMCBeta)for detailed instructions

![A Villager standing in a village. There is a chicken behind, and in the background a flower forest can be seen.](https://feedback.minecraft.net/hc/article_attachments/29937458426637)

It's time for a new Minecraft Preview and Beta! We’d love your feedback on bundles, so please let us know what you think at <https://aka.ms/mcbundlesfeedback> , and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/) .

**Known Issue:** In this Beta and Preview, you might spot some graphical rendering issues. Our team is on it and we aim to have this sorted out soon. Thanks for your patience!

# Experimental Features

## Bundles

- The "Use" button hint is now shown when a Bundle is selected in the hotbar and using a game controller input ([MCPE-185504](https://bugs.mojang.com/browse/MCPE-185504))
  - Using this button throws items out of the Bundle
- Bundles now display the bar showing their fullness level when placed in the hotbar
- Using a Bundle from the hotbar now plays a sound and triggers an animation when emptying items ([MCPE-185460](https://bugs.mojang.com/browse/MCPE-185460))
- Bundle tooltip placement now takes Screen Safe Area into account 
- When a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once
- The "Clear Hotbar" button hint is now shown when hovering the cursor over a Bundle, with the "Clear Hotbar" toggle enabled and using a game controller ([MCPE-185504](https://bugs.mojang.com/browse/MCPE-185504))
- The "Swap" button hint is now shown when hovering an item over another item with a game controller
- The "Place" button hint is now shown on all screens when holding an item on the cursor with a game controller

# Features and Bug Fixes

- Made a change on Nintendo Switch which may help neighboring chunks to load quicker when player has maximum framerate set ([MCPE-120971](https://bugs.mojang.com/browse/MCPE-120971))

## Blocks

- Vines placed with commands are now visible ([MCPE-131854](https://bugs.mojang.com/browse/MCPE-131854))
- "mushroom_stem" is now its own block and is no longer a variant of "red_mushroom_block" and "brown_mushroom_block" 
- "skull" has been split into 7 unique instances: "skeleton_skull", "wither_skeleton_skull", "zombie_head", "player_head", "creeper_head", "dragon_head", "piglin_head"

## Commands

- Game rule ShowRecipeMessages is no longer considered a cheat ([MCPE-177299](https://bugs.mojang.com/browse/MCPE-177299)) 
- Added the 'entity_offset' parameter to the camera command

## Gameplay

- Wind Charges can't be hit and redirected shortly after throwing them 

- Interacting with a Bed now sets it as the respawn point regardless of nearby enemies ([MCPE-152134](https://bugs.mojang.com/browse/MCPE-152134))

- Players hitting the edge of the generated world will keep their velocity. Example: While flying with the Elytra, the player will stay floating instead of losing all speed instantly

## Graphical

- Addressed an issue where the game would show pink on iOS when using Large Zoom ([MCPE-174398](https://bugs.mojang.com/browse/MCPE-174398)) ([MCPE-185373](https://bugs.mojang.com/browse/MCPE-185373))

## Mobs

- Polar bear now drops Cooked Fish when killed by fire or lava ([MCPE-122488](https://bugs.mojang.com/browse/MCPE-122488))
- Pillager's 'celebrate3' sound now works ([MCPE-121058](https://bugs.mojang.com/browse/MCPE-121058))
- Wolves, Cats, and Parrots trying to catch up to their owner now seamlessly resume navigation after teleporting to them
- Wolves, Cats, and Parrots now teleport to their owner when panicking and far enough away
- Wolves now teleport to their owner when in a fight and far enough away, preventing them from being left behind ([MCPE-151765](https://bugs.mojang.com/browse/MCPE-151765))

## Realms

- Added a new Realm Event. Can you discover it?
- Fixed a bug that would prevent activation of addon for a Realm via Marketplace

## User Interface

- Hint about dismounting an entity no longer appears when changing dimensions and re-entering the world ([MCPE-182876](https://bugs.mojang.com/browse/MCPE-182876))
- Armor HUD now updates properly when the player's equipped armor breaks ([MCPE-103592](https://bugs.mojang.com/browse/MCPE-103592)) 
- Fixed a bug where the close button subpanel in the Stonecutter panel was empty instead of hidden while using controller
- Added a new message to explain when a Marketplace Template is not available on a specific platform
- Aligned the hunger and health bars with the experience bar in Classic UI on mobile devices ([MCPE-177192](https://bugs.mojang.com/browse/MCPE-177192))
- Air bubbles now line up properly with hunger bar ([MCPE-185268](https://bugs.mojang.com/browse/MCPE-185268))
- Position of player paper doll in the UI is now consistent between Classic and Pocket UI settings ([MCPE-57498](https://bugs.mojang.com/browse/MCPE-57498))
- Potions with percentage-based effects now show the percentage sign correctly on their tooltips (on mobile devices) ([MCPE-28531](https://bugs.mojang.com/browse/MCPE-28531))
- When dying by the thorns of a Guardian, the death message now reads "'Player' was killed trying to hurt 'Mob'" ([MCPE-114752](https://bugs.mojang.com/browse/MCPE-114752))
- Chat messages no longer overlap with one pixel ([MCPE-119761](https://bugs.mojang.com/browse/MCPE-119761))
- Item text no longer jumps up when looking at a non-interactable entity ([MCPE-161140](https://bugs.mojang.com/browse/MCPE-161140)) 
- Close and help button visuals for Smithing Table and Loom changed to match visuals for Cartography Table ([MCPE-166008](https://bugs.mojang.com/browse/MCPE-166008))
- "Hide Controller Hints" now properly hides all control hints in the Villager trading menu ([MCPE-167134](https://bugs.mojang.com/browse/MCPE-167134))

## Vanilla Parity

- Creepers now drop a Music Disc upon being killed by a Bogged ([MCPE-179008](https://bugs.mojang.com/browse/MCPE-179008))
- Bogged now drops Poison Arrows when killed by Mobs tamed by a Player
- Dyeing Sheep and collars on Cats and Dogs now plays the dyeing sound as in Java Edition ([MCPE-150684](https://bugs.mojang.com/browse/MCPE-150684))
- Mushroom Stems used on the Composter have had their fill chance adjusted from 85% to 65% 
- The all-sided pore mushroom block has been removed from the creative inventory
- Enchanted Golden Apples now give Regeneration II instead of Regeneration V, matching Java Edition ([MCPE-103061](https://bugs.mojang.com/browse/MCPE-103061))
- Added infinite duration option to Effect command. `/effect <player: target> <effect: Effect> infinite [amplifier: int] [hideParticles: Boolean]`
- Added specific effect removal option to Effect command. `/effect <player: target> clear <effect: Effect>`
- Placing Cocoa Beans now plays a sound ([MCPE-49126](https://bugs.mojang.com/browse/MCPE-49126))
- Beehive and Bee Nest can no longer be used as fuel in Furnaces ([MCPE-128393](https://bugs.mojang.com/browse/MCPE-128393)) 

### Mobs

- Piglins will no longer pick up and admire Powered Rail items ([MCPE-91187](https://bugs.mojang.com/browse/MCPE-91187)) 

# Technical Updates

## Add-Ons and Script Engine

- Fixed a bug where using "bone_visibility" for a block geometry would cause the "item_display_transforms" not to be applied properly ([MCPE-185868](https://bugs.mojang.com/browse/MCPE-185868))
- Fixed issue which prevented the new 1.21.30 trade table format from loading in-game 

## API

- ItemStack
  - Fixed method `ItemStack.getComponents` from returning components that are unsupported in the current `@minecraft/server` version 
- Fixed issue where invalid ModalFormData would never reject or resolve its promise ([MCPE-178148](https://bugs.mojang.com/browse/MCPE-178148)) 
- `BlockLiquidContainerComponents` API (water, lava, potion, snow) have been removed from beta
- `BlockFluidContainerComponent` API has been added to beta, replacing the `BlockLiquidContainerComponents`
- Moved `isHardcore` from beta to 1.15.0

## Commands

- Added new overloads for the `schedule` command which allows you to clear a queued function 
  - `/schedule clear <function name>` - Clears all queued functions matching the given name
  - `/schedule on_area_loaded clear function <function name>` - Clears all queued functions that are scheduled as `on_area_load` by name
  - `/schedule on_area_loaded clear tickingarea <tickingarea name> [function name]` - Clears all queued functions that are scheduled as `on_area_load` by ticking area name (and optionally also checks function name too)

## Components

- The "restriction_type" field has been added to the "minecraft:home" component, allowing to define how an entity is restricted to its home position:
  - Its values are:
    - "none", which poses no restriction
    - "random_movement", which restricts randomized movement around the home position
    - "all_movement", which restricts any kind of movement around the home position
  - The "all_movement" value is currently in \[Beta\] and is planned to be fully released at a later date
  - Entities that have moved too far from their home will always be able to move closer to it if prompted
  - The radius of the restriction is still specified with "restriction_radius"
  - Entities with a format version prior to 1.21.40 will be upgraded to use the new field in a way that preserves their existing behavior
- Added the "minecraft:dimension_bound" component, which prevents entities from changing dimension through portals 
  - In Vanilla content, this is used by the Ender Dragon, the Fishing Hook, and some projectiles
- Added the "minecraft:transient" component, entities with this component will never be saved. In Vanilla content, this is currently used for the Fishing Hook 

## Editor

- Added block picking for the current block palette on middle mouse click
- Added custom block textures to now support in block images
- Added resource access protocol "block://\<block_name\>" to retrieve block images 
- Added new API interface `IStatusBar` to manage `IStatusBarItem` objects. It can be accessed from `statusBar` property on `IPlayerUISession`.
  - Added `IStatusBarItemCreationParams` for status bar item initialization
  - Removed `text` property from `IStatusBarItem` in favor of `getText` and `setText` functions. Added localization support for text content
  - Renamed `EditorStatusBarAlignment` to `StatusBarAlignment`
- Renamed 'Input Mapping' to 'Keyboard Settings' action bar item and improved modal panel visuals 
- Fixed a bug related to losing the block palette setting of simple blocks in hotbar between suspend/resume of application 
- Fixed a bug where Quick Start panel visibility was not persisted correctly
- Fixed a bug so the hotbar fills with a list of default blocks rather than all air when creating a new editor world

## Entity Components

- "behavior.fire_at_target" is no longer usable if it is missing a projectile definition and will now throw a content error if so

## Entity Event Responses

- Added the "execute_event_on_home_block" entity event response, which allows the entity to execute an event on the block at its home position
  - The "event" field allows to specify the event to execute
  - For this to work properly, the entity must have a "minecraft:home" component with a set home position

## General

- Made the following changes to 'minecraft:single_block_feature'
  - 'places_block' now supports a list of weighted block specifiers
  - New 'randomize_rotation' property
  - New 'may_not_attach_to' placement conditions
  - Added 'diagonal' as a new option for 'may_attach_to' conditions
  - File format version increased to 1.21.40

## Graphical

- Fixed bug where the tessellation of Redstone dust does not match the powered state of the dust for the following blocks: 
  - minecraft:\*\_slab
  - minecraft:chain
  - minecraft:chorus_flower
  - minecraft:chorus_plant
  - minecraft:farmland
  - minecraft:grass_path
  - minecraft:heavy_core
  - minecraft:jigsaw
  - minecraft:sea_lantern
  - minecraft:sniffer_egg
  - minecraft:structure_block

## Molang

- Molang queries "wing_flap_position" and "wing_flap_speed" now work for the Chicken 

## Resource and Behavior Packs

- Built-in packs now include archive files for improved load performance on some platforms 

## Stability and Performance

- Increased the size of biome ids in saved chunk data from 8 bit to 16 bit values
- Fixed a bug where extremely fast moving entities would cause the game to crash. Entities can now no longer move more than 16 blocks in a single tick. (For reference, an entity with Speed 255 will move ~11 blocks in a single tick.)
- Game will no longer crash when loading a world near an End City

# Experimental Technical Updates

## API

- Moved `EntityBreathableComponent` from `beta` to `1.15.0`
  - Moved `breathesAir` from `beta` to `1.15.0`
  - Moved `breathesLava` from `beta` to `1.15.0`
  - Moved `breathesSolids` from `beta` to `1.15.0`
  - Moved `breathesWater` from `beta` to `1.15.0`
  - Moved `generatesBubbles` from `beta` to `1.15.0`
  - Moved `inhaleTime` from `beta` to `1.15.0`
  - Moved `suffocateTime` from `beta` to `1.15.0`
  - Moved `totalSupply` from `beta` to `1.15.0`
  - Moved `componentId` from `beta` to `1.15.0`
  - Moved `getBreatheBlocks()` from `beta` to `1.15.0`
  - Moved `getNonBreatheBlocks()` from `beta` to `1.15.0`
- Moved class `BlockLocationIterator` from `beta` to `1.15.0`
- Moved class `InvalidIteratorError` from `beta` to `1.15.0`
- Moved property `BlockVolumeBase.getBlockLocationIterator` from `beta` to `1.15.0`
- Moved enum `BlockVolumeIntersection` from `beta` to `1.15.0` 
- Moved class `BlockVolume` from `beta` to `1.15.0`
- Added the `DyeableItemComponent` to `beta` 

## Cameras

- Fixed an issue where `rider_rotation_lock` of `minecraft:rideable` had no effect when using the `minecraft:follow_orbit` camera
- Added `minecraft:camera_attach_to_player` to `minecraft:follow_orbit`
- Added `align_target_and_camera_forward` option to the camera preset behavior pack JSON which can be used when the third person camera preset experiment is enabled
- 3rd person camera experiment - The radius property of the creator cameras is now constrained to a value between 0.1 and 100 
- Third person boom camera will now reset to the starting rotation values specified in json when the 'default' parameter is passed in the camera command

## Graphical

- Removed the dark aura around the moon in the Deferred Technical Preview
