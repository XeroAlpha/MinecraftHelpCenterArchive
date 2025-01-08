---
title: Minecraft Beta & Preview - 1.21.60.25
date: 2025-01-08T15:26:33Z
updated: 2025-01-08T17:08:26Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/33310018457741-Minecraft-Beta-Preview-1-21-60-25
hash:
  user-content-experimental-features: experimental-features
  user-content-pig-variants: pig-variants
  user-content-'cold-biomes': cold-biomes
  user-content-'warm-biomes': warm-biomes
  user-content-'temperate-biomes': temperate-biomes
  user-content-new-leaf-particles: new-leaf-particles
  user-content-lodestone-changes: lodestone-changes
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-biomes: biomes-1
  user-content-blocks: blocks-3
  user-content-gameplay: gameplay-1
  user-content-general: general
  user-content-graphics: graphics
  user-content-loot-tables: loot-tables
  user-content-mobs: mobs-1
  user-content-realms: realms
  user-content-recipes: recipes
  user-content-sound: sound-1
  user-content-user-inteface: user-inteface
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-spawner: spawner
  user-content-technical-updates: technical-updates
  user-content-api: api-1
  user-content-commands: commands
  user-content-components: components
  user-content-dedicated-server: dedicated-server
  user-content-editor: editor
  user-content-entities: entities
  user-content-items: items
  user-content-stability-and-performance: stability-and-performance
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-aim-assist: aim-assist
  user-content-camera: camera
  user-content-experimental: experimental
  user-content-ui: user-interface-1
---

**Posted:** 8 January 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)for detailed instructions

![ New Cold Pig variants spawned in a cold Taiga biome. There is a Lodestone in the background.](https://feedback.minecraft.net/hc/article_attachments/33311874312461)

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on these new features at [feedback.mojang.net](http://feedback.mojang.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/)! Here's what's new this week:

# Experimental Features

- There is a new experimental toggle for the next game drop update! You will need to enable it in order to test out these features that are in development. We would love to hear your thoughts on these updates, so please leave us your feedback at [aka.ms/mcgamedropfeedback](https://aka.ms/mcgamedropfeedback) and reports any bugs to [bugs.mojang.com](http://bugs.mojang.com/)!

## Pig Variants

- Added two new Pig variants - Warm Pig and Cold Pig!
- These have their own own unique texture and geometry, but not a separate spawn egg
- These will spawn in different biomes, making the biomes feel more distinct from each other:

### 'Cold Biomes'

- These Biomes now spawn the cold variants:
  - Old Growth Pine Taiga
  - Old Growth Spruce Taiga
  - Taiga
  - Snowy Taiga
  - Windswept Hills
  - Windswept Gravelly Hills
  - Windswept Forest

### 'Warm Biomes'

- These Biomes now spawn the warm variants:
  - Savanna
  - Savanna Plateau
  - Windswept Savanna
  - Jungle
  - Sparse Jungle
  - Bamboo Jungle
  - Eroded Badlands
  - Wooded Badlands
  - Badlands

### 'Temperate Biomes'

- These biomes spawn the same pigs as before. There is no change.
  - Forest
  - Flower Forest
  - Birch Forest
  - Old Growth Birch Forest
  - Dark Forest
  - Swamp

# New Leaf Particles

- All Leaves blocks now emit falling leaf particles. These blocks are affected by this change:

  - Oak Leaves
  - Jungle Leaves
  - Acacia Leaves
  - Dark Oak Leaves
  - Spruce Leaves
  - Mangrove Leaves
  - Birch Leaves
  - Azalea Leaves
  - Flowering Azalea Leaves

- Two blocks already emitted falling leaf particles before this update. They will continue to work like they did before:

  - Cherry Leaves
  - Pale Oak Leaves

# Lodestone Changes

- Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Blocks
- The crafting recipe unlocks when the player obtains an Iron Ingot or a Lodestone.
- Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether.

# Features and Bug Fixes

## Biomes

- Pale Gardens now generate more frequently and are overall larger
- Woodland Mansions can now generate in Pale Gardens

## Blocks

- Crafter with no BlockActor data no longer produce a crash ([MCPE-188674](https://bugs.mojang.com/browse/MCPE-188674))
- Bone Meal can no longer be used on single Dark Oak or Pale Oak Saplings ([MCPE-187564](https://bugs.mojang.com/browse/MCPE-187564))
- The map color of Pale Oak Leaves and Pale Oak Sapling has been updated to better match their actual in-game color
- The Creaking Heart now has an additional state for when it is in a valid configuration but unable to spawn a Creaking due to it being daytime
- Eyeblossoms now open when the moon starts rising, and close when the moon has completely set
- Big Dripleaf blocks can no longer be placed on top of Pale Moss blocks
- Fixed a crash that could occur when destroying a Creaking Heart
- Fixed rendering issue with grass block under monster spawner block ([MCPE-188809](https://bugs.mojang.com/browse/MCPE-188809)) 
- A Player can now place blocks on Iron Doors and Iron Trapdoors without having to sneak ([MCPE-19129](https://bugs.mojang.com/browse/MCPE-19129))

## Gameplay

- Fixed a bug where mobs would teleport to a height of 32767 when going to the Overworld from The End ([MCPE-157125](https://bugs.mojang.com/browse/MCPE-157125)) 

## General

- Pistons, Sticky Pistons, Droppers, and Dispensers now show up in the recipe book again when crafting 

## Graphics

- Added support 'minecraft:foliage_appearance' and 'minecraft:grass_appearance' components in client_biome JSON files to control color or palette selection for foliage and grass rendering 

## Loot Tables

- Entity loot tables with a spawn egg that omits the actor ID will no longer drop an invalid spawn egg when destroyed via the minecraft:instant_despawn component.

## Mobs

- Creakings now emit vibrations when swaying after being hit
- Creakings now spawn on Snow Layers ([MCPE-187368](https://bugs.mojang.com/browse/MCPE-187368))
- Creakings spawned by a Creaking Heart can now be nametagged, preventing them from despawning during the day
  - Destroying their Creaking Heart will still cause them to crumble
  - Hitting a nametagged Creaking during the day will result in a particle trail, but no Resin
- The Creaking can now spawn when the moon starts rising, and crumbles when the moon has completely set

## Realms

- Fixed issue where the text of the purchase button on the old Realms product description page can swap between "Subscribe Now ..." and "Start Free Trial"
- Users can now access Realms Stories of Realms they are a part of even when multiplayer access is disabled in the account's privacy settings

## Recipes

- Added content error when parsing shaped recipes if none of the keys can be mapped to any of the pattern characters, this fixes a crash when opening the crafting screen with such malformed recipes ([MCPE-178520](https://bugs.mojang.com/browse/MCPE-178520))

## Sound

### Blocks

- Iron Bars, Iron Blocks, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates now make iron sounds when you mine, break, place and walk on them

## User Inteface

- Fixed an issue which prevented the user from exiting Edit World when choosing Play on Realm button and canceling the Sign-in process 

## User Interface

- It is now possible to scroll through the friends tab with text-to-speech enabled and cross-play disabled
- The achievements disabled crossed bottle icon is now a blocked icon

## Vanilla Parity

### Blocks

- Changed the player's hurt sound when walking on a Magma Block to use the fire hurt sound instead of the default sound ([MCPE-125864](https://bugs.mojang.com/browse/MCPE-125864))

### Mobs

- Endermen now correctly have a delay before they become hostile when you look at them ([MCPE-23544](https://bugs.mojang.com/browse/MCPE-23544)) 

### Sound

- Added unique sound effects for Vines, Glow Berry Vines, Weeping Vines, and Twisting Vines ([MCPE-188001](https://bugs.mojang.com/browse/MCPE-188001)) 

### Spawner

- Zombie Villagers can no longer randomly spawn from a Zombie Mob Spawner, matching Java Edition ([MCPE-91436](https://bugs.mojang.com/browse/MCPE-91436))

# Technical Updates

## API

- Added script bindings to `beta` for the experimental Aim-Assist feature.
  - `class AimAssistCategory`
  - `class AimAssistCategorySettings`
  - `class AimAssistPreset`
  - `class AimAssistPresetSettings`
  - `class AimAssistRegistry`
  - `enum AimAssistTargetMode`
  - `interface PlayerAimAssistSettings`
  - `class PlayerAimAssist`
  - method Player.getAimAssist to modify a player's aim-assist settings
  - method World.getAimAssist to add aim-assist presets and categories.
- Added enum `InvalidArgumentErrorType` that adds extra context to the type of invalid argument error. 
- Added property `type` to `InvalidArgumentError` for checking the type of argument error. 

## Biomes

- Add creature spawn probability JSON component for spawning related experiments

## Blocks

- Removed content log error: 'Block needs both a geometry and material instances component' 

## Commands

- `wsserver` command disabled by default. Enable in General Settings.
- Websocket encryption default enabled for all platforms.

## Components

- Added "min_looked_at_duration" field to "minecraft:looked_at" component to specify how long a stare has to be maintained before the target and cooldown logic is set
- The Strider now makes use of the minecraft:movement_sound_distance_offset component for its movement sound distance offset
- Two values on the minecraft:storage_item component have been split off into separate components:
  - max_weight_limit has been moved to the new minecraft:storage_weight_limit component
  - weight_in_storage_item has been moved to the new minecraft:storage_weight_modifier component  
      

## Dedicated Server

- The movement mode authority chosen settings will now be displayed in the command window on dedicated server launch

## Editor

- Added a night vision setting to the view settings pane. This enables night vision within the editor for the user and is enabled by default. 
- Added new Vertical Fly Speed ability.
- Added a new `BlockTable` UI element to Property Pane API. 
- Added an optional CursorPosition property to the CursorPropertiesChangeAfterEvent. Using this new property, developers can track when the block or block face under the mouse cursor changes. 
- Added right click on action bar items to toggle selector menus
- Updated farm generator to use transactions allowing for undo and redo functionality 
- Updated the summon tool nudge operation to remain active as long as the key binding is held down. 
- Fixed an assert/crash that occurs when changing dimensions 
- Fixed an assert/crash when saving world and re-entering a world multiple times
- Fixed a bug that occasionally made panel scrollbars unresponsive.
- Fixed a bug that caused action bar items to change positions when scrollbar is visible 
- Fixed a bug where game menus are shown in the tool mode viewport

## Entities

- Fixed issue where `No more entities` assert failure occurred when flying through biomes during a storm

## Items

- Removed "Upcoming Creator Feature" toggle requirement for `minecraft:block_placer` item component
- Migrated ItemData from `StartGamePacket` into `ItemRegistryPacket` (renamed from `ItemComponentPacket`) 

## Stability and Performance

- Removed redundant biome data from chunks and improved World Template generation stability. 
- Made changes to add up to 4% CPU performance improvement on Switch

# Experimental Technical Updates

## Aim Assist

- Aim assist will now only allow interactions within player's interact distance
- Aim Assist can now properly detect entities have hitbox partially inside detection area 

## API

- `RegistrationBuilder.structureLocation` method in @minecraft/server-gametest
  - Added optional argument `structureDimension: DimensionTye | string` to specify which dimension the gametest should spawn in. If not provided, it will default to whichever dimension the test is ran from.
- `system.scriptEvent()` no longer returns `ScriptEventMessageSizeError` but instead an `InvalidArgumentError` for the message size exceeding 2048 characters in size in Beta
- Removed `ScriptEventMessageSizeError` from Beta
- Moved CameraTargetOptions from beta to `v1.16.0`

## Camera

- Block and entity targeting of Aim assist will now apply to touch control modes: 'Joystick & tap to interact' and 'D-Pad & tap to interact' 

## Experimental

- Removed the Creator Cameras: Focus Target Camera experimental toggle 

## Gameplay

- Focus Target Camera now displays a command output error when trying to target an entity when not on a free camera or custom camera that inherits from free camera. 
- Focus Target Camera `vertical_rotation_limits` are now in world space. 0 degrees is straight down, 90 degrees is horizontal and 180 degrees is straight up. The limits for the values are \[0, 180\] inclusive.

## User Interface

Added full support and fixes for some input glyph replacement strings. This is to make them work across all the platforms (PC, Consoles, Mobile).  
These are the values fixed:

- :\_input_key.forward:
- :\_input_key.back:
- :\_input_key.left:
- :\_input_key.right:
- :\_input_key.inventory:
- :\_input_key.use:
- :\_input_key.chat:
- :\_input_key.attack:
- :\_input_key.sprint:  
  The icons for these strings are updated in diverse areas of the game that support contextual glyphs, such as: signs, signed books, tags, chat, commands.  
  Also, as improvement, replacement of these values depends on the interaction/control mode when using touch as input mode. These modes are Joystick & tap to interact, D-Pad & tap to interact, and Joystick & aim crosshair.
