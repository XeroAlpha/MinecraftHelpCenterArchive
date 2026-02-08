---
title: Minecraft Beta & Preview - 1.21.120.23
date: 2025-09-23T14:37:06Z
updated: 2025-09-23T15:48:47Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/39792573984013-Minecraft-Beta-Preview-1-21-120-23
hash:
  h_01K4QGGX0VZTA2K57049601A6D: posted23-september-2025
  h_01K4QGH0NC3AWYN35PD4ZSPGX6: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-general: general
  user-content-graphical: graphical
  user-content-inventory: inventory
  h_01K5VFR4KV9H29FDK06CDSRKAW: mobs
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  user-content-biomes: biomes
  user-content-block-components: block-components
  user-content-editor: editor
  user-content-item-components: item-components
  user-content-structures: structures
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01K5VFR4KVSKB7QX3ACMZ3HMAQ: api-1
---

#### **Posted:** 23 September 2025

**NOTE:** While we roll out the GDK update on Minecraft Preview for Windows, some players will remain on Preview version 1.21.120.20. This will affect Realms and multiplayer compatibility with newer Preview versions. We will continue to roll the update out to more Preview players on Windows in the coming days. Thanks for your patience!

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=features-and-bug-fixes)

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=blocks)

- The Copper Golem Statue now takes the custom name of the Copper Golem it came from ([MCPE-227714](https://bugs.mojang.com/browse/MCPE-227714))
- Fixed Copper Trapdoor recipe giving an extra Trapdoor ([MCPE-227893](https://bugs.mojang.com/browse/MCPE-227893)) 

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=general)

- Added previously missing File Associations on Windows (e.g. .mcaddon) ([MCPE-227920](https://bugs.mojang.com/browse/MCPE-227920))
- Fixed a bug where buttons can not be pressed while the game window is unfocused\
  ([MCPE-227830](https://bugs.mojang.com/browse/MCPE-227830))
- Fixed a bug that caused the mouse movement to freeze when pausing the game by pressing the Windows key ([MCPE-227741](https://bugs.mojang.com/browse/MCPE-227741))

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=graphical)

- Fixed a bug that caused lighting to be too bright when the player was underwater in caves in Vibrant Visuals. ([MCPE-208089](https://bugs.mojang.com/browse/MCPE-208089))
- Fixed a bug with the "biome blending" system in Vibrant Visuals that caused non-surface biomes to be ignored. Biomes will now blend vertically as well as horizontally, meaning that custom rendering configurations for biomes such as Deep Dark and Lush Caves will now function properly.
  - Note that this issue is only fixed for Atmospherics, Color Grading, Lighting and Tone Mapping, while Water configurations still suffer from the issue.
- Fixed sky appearing black on certain Android devices ([MCPE-222915](https://bugs.mojang.com/browse/MCPE-222915)) 

## Inventory[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=inventory)

- Items can now be transported to hotbar slots using their corresponding hotkeys ([MCPE-105889](https://bugs.mojang.com/browse/MCPE-105889)) 

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=mobs)

- The Copper Golem now takes the custom name of the Copper Golem Statue it came from ([MCPE-227714](https://bugs.mojang.com/browse/MCPE-227714))
- Drowned no longer drop tridents to pick up nautilus shells ([MCPE-155739](https://bugs.mojang.com/browse/MCPE-155739))
- Parrot imitating hostile mob sounds are now affected by the "Friendly Creatures" volume slider in settings 

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=user-interface)

- Fixed a bug where a sound played on certain screens after an invalid navigation with gamepad or keyboard even when Text To Speech was disabled
- Paper doll in inventory should look at cursor. ([MCPE-227626](https://bugs.mojang.com/browse/MCPE-227626))
- Added a toggle to the Accessibility menu to enable/disable the dithering effect on Mobs.

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=technical-updates)

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=ai-goals)

- Fixed a crash occurring on mobs running the "minecraft:behavior.delayed_attack" AI goal 

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=api)

- Fixing some scenarios where the additional context information for error messages was inaccurate after previously catching an exception.
- Released `setDynamicProperties` method on `Entity`, `ContainerSlot`, `ItemStack` and `World` to 2.3.0
- Dimension
  - Moved `isChunkLoaded(location: Vector3): boolean` from `beta` to `V2.3.0`

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=biomes)

- Fix use of a default surface builder by some recent preview builds, biomes no longer require a surface builder. Surfaces in distant chunks now appear correctly when playing on Realms

## Block Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=block-components)

- Added **"emissive"** field to `minecraft:material_instances` block component with these requirements
  - World must enable **Upcoming Creator Features** experiment for emissive face materials to work
  - Block `format_version` must be greater than or equal to `1.21.120`

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=editor)

- Added support for Double Left Click, so the Color Picker and Editable popup open with DLC on the Graph
- Added custom icon support for the checkbox variant of `IBoolPropertyItem` with `checkboxIcon` optional property
- Added a new Scale Tool to resize selection
  - Enabled scaling along X, Y, Z axes individually or uniformly.
  - Added Fractional scaling with fractional scale factors; maintained structure shapes during enlargement/shrink.
  - Added preview visualization showing the scaled size before applying changes.
  - Integrated the tool with undo and redo behaviors.
  - Disabled scaling if current volume or resulting volume, whichever is larger, exceeds MAX_ALLOWED_BLOCKS (currently 200,000).
- Added 'orientation' settings which allows the use to decide what orientation the block should be placed.
- Added keyboard shortcuts and accompanying tooltips to all pencil 'modes' (mode, draw mode, orientation mode).
- Added error message (log & toast) for when an object cannot be placed to due gameplay rules.
- Updated the pencil tool, now when you erase, if you're in face selection mode it will switch to block selection (so you can actually erase things) and then will switch back when you go back to draw mode.
- Updated settings/usage to now persists between sessions.
- Updated Pencil functionality to have more polish.
- Fixed a bug that caused creating multiple hotbars to error when the hotbar management panel is open
- Fixed a bug that caused dismissing interactive tooltips to not work
- Block picker images' layout is consistent across different window sizes and after exiting a test world
- Fixed Confirm button in hotbar dialog to immediately turn green when typing begins, providing proper visual feedback
- Fixed undo behavior when using 'object' mode.

## Item Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=item-components)

- Added the "emit_vibrations" field to the "minecraft:use_modifiers" item component, which controls whether an item emits vibrations when it starts or stops being used

## Structures[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=structures)

- Released Data Driven Jigsaw Structures. They can now be used beyond the experimental context 

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30459/R21U12-4-Preview?anchor=api)

- Added `getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined` method to `beta`.
- Added `getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];` methods to `beta`.
- Added `GetBlocksStandingOnOptions` interface.
- Added `AABB` interface which defines an axis-aligned bounding box to `beta`.
  - Added parameter `center:Vector3` which defines the centerpoint of the box.
  - Added parameter `extent:Vector3` which defines the distance from the centerpoint to the edges of the box.
  - Added method `getAABB(): AABB` to `beta`.
- Added `unbreakable` property to `ItemDurabilityComponent` in `beta`.
- Fixed an issue when inserting items into storage items through the UI. Previously the items inserted could result in gaps in the container stack when it was previously modified through the ItemInventoryComponent API. The storage container now sorts items to remove gaps prior to an item being inserted via the UI.
- (Beta) Player method `clearPropertyOverridesForEntity` can now take an Entity or Entity ID as valid arguments
