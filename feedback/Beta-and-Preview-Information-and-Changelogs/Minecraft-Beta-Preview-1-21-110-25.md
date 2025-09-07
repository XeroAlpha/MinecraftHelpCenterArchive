---
title: Minecraft Beta & Preview - 1.21.110.25
date: 2025-08-19T15:43:32Z
updated: 2025-08-19T16:00:22Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38927463808269-Minecraft-Beta-Preview-1-21-110-25
hash:
  h_01K2FF7AMKD9PX52E26Z5CS1BW: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-api: api
  user-content-biomes: biomes
  user-content-blocks: blocks
  user-content-iron-bars%2C-copper-bars: iron-bars-copper-bars
  user-content-lightning-rods: lightning-rods
  user-content-shelf: shelf
  user-content-commands: commands
  user-content-editor: editor
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-music: music
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  h_01K31FXQ0AB0F091FF3Y44TD8V: api-1
  h_01K31FXQ0AM8B4VWCX59M0E7ZM: editor-1
  user-content-experimental: experimental
  h_01K31FXQ0AH8X1ZJYG086K1XEF: general-1
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01K31FXQ0AC4SKDQE9RMMHAH8V: api-2
  h_01K31FXQ0AXGWQ0F81W53PR2RH: blocks-1
  user-content-block-components: block-components
  user-content-components: components
  h_01K31FXQ0A938XPP40KXAWSMR3: gameplay-1
---

**Posted:** 19 August 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/38927463805965" alt="klsfdjlksjdfkhlyu.jpeg" />
</figure>

 

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).  
 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=features-and-bug-fixes)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=api)

- Moved `LootTableManager` API from beta into 2.2.0

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=biomes)

- Custom Biomes are now out of experimental
- Added `underwater_music` parameter to `minecraft:biome_music` client biome component that enables the underwater music for the biome
- Fix issue where a default surface builder was not chosen leading to bare surfaces in some biomes
- Fixed a bug where setting the precipitation of a biome to 0 in `biome.json` files would not stop rain from occurring in the biome

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=blocks)

- Fixed Paintings from breaking when loading into a world or teleporting ([MCPE-181306](https://bugs.mojang.com/browse/MCPE-181306))
- The Copper Golem Statue no longer has z-fighting with certain block when they are placed on top of it ([MCPE-225203](https://bugs.mojang.com/browse/MCPE-225203))
- Shelves now produce the same particles as their Stripped Log counterparts when they break
- The Copper Chest icon is no longer missing its handle in the inventory ([MCPE-225497](https://bugs.mojang.com/browse/MCPE-225497))
- Double Chests now visually open when a Copper Golem opens the second half
- Copper Doors can now be opened by Villagers and Copper Golems

### Iron Bars, Copper Bars[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=iron-bars%2C-copper-bars)

- Fixed Iron and Copper Bars connection pattern ([MCPE-226269](https://bugs.mojang.com/browse/MCPE-226269))

### Lightning Rods[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=lightning-rods)

- Removed a white line of pixels on the edge of Exposed and Weathered Copper Lightning Rods

### Shelf[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=shelf)

- Items in the Shelf will render in the middle of the Shelf
- Updated the sizes of many items in the Shelf to better fit the Shelf
- Walking on the Shelf now produces the same sound as walking on the Chiseled Bookshelf ([MCPE-226623](https://bugs.mojang.com/browse/MCPE-226623))
- Blocks requiring support can now be placed on the back of the Shelf regardless of its facing direction ([MCPE-226223](https://bugs.mojang.com/browse/MCPE-226223))

## Commands[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=commands)

- Fixed hidden commands (`getlocalplayername` and `geteduclientinfo`) showing into the autocomplete options in the chat ([MCPE-136930](https://bugs.mojang.com/browse/MCPE-136930))
- Fixed issue where command selector 'c=-1' would not return the furthest matching entity ([MCPE-226102](https://bugs.mojang.com/browse/MCPE-226102))

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=editor)

- Fixed a bug in the Vibrant Visuals Settings pane which caused incorrect file paths
- The Line Tool's performance when moving a gizmo with thickness applied to the Line now runs smoother

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=gameplay)

- Fixed a bug where putting items in a Bundle as it is being transferred from one Hopper to another would delete the item
- Fixed a crash that occurred when treatment packs were removed while loading game or loading into a world

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=general)

- The game will no longer crash when loading a world with a corrupted Copper Chest ([MCPE-225443](https://bugs.mojang.com/browse/MCPE-225443))

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=graphical)

- Fixed an issue that caused certain mobs to display incorrectly when using the Minecraft Classic Texture Pack ([MCPE-221572](https://bugs.mojang.com/browse/MCPE-221572))

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=mobs)

- Copper Golems no longer get stuck under Shelf blocks ([MCPE-225325](https://bugs.mojang.com/browse/MCPE-225325))
- Copper Golems can now pathfind through 1 block high passages
- The Copper Golem will no longer interact with Chests and Copper Chests that it cannot see
- Chests now close immediately when a Copper Golem starts panicking while looking inside
- Copper Golems now drop their Poppy Flower on death ([MCPE-226262](https://bugs.mojang.com/browse/MCPE-226262))
- It is possible for Zombies and Skeletons to spawn with diamond tier armor again ([MCPE-226140](https://bugs.mojang.com/browse/MCPE-226140))

## Music[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=music)

- Music in Forest biome will no longer get stuck to the position it started playing at ([MCPE-222113](https://bugs.mojang.com/browse/MCPE-222113))

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=technical-updates)

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=ai-goals)

- The `minecraft:behavior.transport_items` AI goal now checks that the entity can see the container it tries to interact with
  - It checks once before starting to queue at the container and once before starting to interact
  - If it does not see the container, it fails to open it

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=api)

- Change the following methods on `Dimension` to have the read-only privilege so they can be called in "before" events:
  - `getWeather`, `findClosestBiome`, `getBlockAbove`, `getBlockBelow`, `getTopmostBlock`,
  - `getLightLevel`, `getSkyLightLevel`
- Moved `ItemBookComponent` from `beta` to `V2.2.0`
- Moved `BookError` from `beta` to `V2.2.0`
- Moved `BookPageContentError` from `beta` to `V2.2.0`
- Moved `BookErrorReason` from `beta` to `V2.2.0`
- Moved `InvalidItemStackError` from `beta` to `V2.2.0`
- Camera
  - Moved `setFov(fovCameraOptions?: CameraFovOptions): void` from `beta` to `V2.2.0`
    - Moved `setLore(loreList?: (RawMessage | string)[]): void` from `beta` to `V2.2.0`
    - Moved `getRawLore(): RawMessage[]` from `beta` to `V2.2.0`
- ContainerSlot
  - Moved `setLore(loreList?: (RawMessage | string)[]): void` from `beta` to `V2.2.0`
  - Moved `getRawLore(): RawMessage[]` from `beta` to `V2.2.0`

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=editor)

- Added new Flatten Tool functionality
  - Added new Flatten mode to Terrain Tool, and new FlattenSmoothing, FlattenIntensity, and FloorBlockOverride properties
  - Added two new Flatten sub-modes: Flatten Up and Flatten Both
  - Added ability to hide rotation controls within Cylinder Brush Shape
  - Added Cylinder Brush Shape property getters for width, depth, height, radius, and isUniform
  - Removed old Flatten Tool, along with its FlattenHeight and FlattenRadius properties
- Added a gizmo to the center of freehand and smart tool
- Added new `ProjectAfterEvents` API to global `editor` object for project wide events
- Added a new button in export settings that sets the current position in Overworld as world spawn point for the playable world
- Updated the brush API to now specify a specific or relative position of the 'front face' of a block. You can also force the brush to apply a specific state to the block after its been placed
- Updated paused entity state to persist through sessions for each project world
- Updated Ruler Tool to support click-and-drag. Holding CTRL while clicking will create additional rulers. Rulers will no longer disappear when switching to other tools
- Updated Terrain Tool by consolidating Flatten and Elevation into one tool and improved functionality
- Removed PBR Fallout Settings from Vibrant Visuals Settings
- Fixed issue that prevents dragging nodes to be placed on a desired position
- Fixed issue with distance between nodes while dragging. There should be a minimum predefined distance between nodes so two nodes cannot be placed on the same position
- Fixed a bug that caused revert button in Vibrant Visuals panel settings to not function
- Fixed Vibrant Visuals settings to have proper formatting after being copied to clipboard
- Fixed a bug that caused Paste Preview offset to be incorrect after switching back from another modal tool
- Fixed a bug that caused difficulty setting not applying correctly while exporting a playable world
- Fixed a bug that caused weather setting not applying correctly while exporting a playable world
- Fixed a bug that caused Smart Fill to highlight air when blocks are replaced with air block

## Experimental[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=experimental)

- Camera custom FOV command no longer requires the `Experimental Creator Cameras` experimental toggle

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=general)

- Models exported via Structure Blocks no longer use the missing texture for all block geometry ([MCPE-223559](https://bugs.mojang.com/browse/MCPE-223559))

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=api)

- Added new method `isChunkLoaded` to `Dimension` which returns true if a chunk at an area is loaded and ticking
- Expanded `LootTableManager` `beta` functionality, which now allows for loot table discovery via the new `getLootTable` method
- Added enum `HeldItemOption` to `beta` for `PlayerSwingEventOptions`. This specifies options related to the item currently being held at the time of a player swing

``` auto
export enum HeldItemOption {  
    AnyItem = 'AnyItem',       
    NoItem = 'NoItem'  
}
```

- Added interface `PlayerSwingEventOptions` to `beta`. Event options/filters for `PlayerSwingStartAfterEvent`.  
  - Field `heldItemOption?: HeldItemOption`
  - Added class `PlayerSwingStartAfterEvent` to `beta`. This contains information regarding a player starting to swing their arm
    - Field `heldItemStack?: ItemStack`
    - Field `player: Player`
  - Added class `PlayerSwingStartAfterEventSignal` to `beta`. This event is fired at the start of a player's swing (e.g. attacking, using an item, interacting). It can be subscribed/unsubscribed via `world.afterEvents.playerSwingStart` and optionally filtered by passing in `PlayerSwingEventOptions`.

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=blocks)

- Added component `minecraft:redstone_producer` behind the Upcoming Creator Features toggle

## Block Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=block-components)

- Modified `"minecraft:material_instances"` to support weighted variations textures with these requirements
  - **"format_version"** must be greater than or equal to `"1.21.110"`
  - World must have **Upcoming Creator Features** experiment enabled

## Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=components)

- Added new block component `minecraft:flower_pottable`
  - It is an empty component defined as such: `minecraft:flower_pottable: {}`
  - When the component is present on the block, \> a player can interact with an empty flowerpot when holding the block in order to embed it
  - Similar to other Vanilla pottable blocks, a player can remove the potted block by interacting with the pot with an empty hand
  - The component requires the Upcoming Creator Features toggle
  - Pottable not potable
- Added new block component `minecraft:embedded_visual`
  - The component has two required fields, "geometry" and "material_instances", similarly to "minecraft:item_visual"
  - When the component is present on the block, it defines which geometry and material_instances to use when the block is embedded into another block, eg. into a Flowerpot
    - If the component is not present, embedded blocks fallback to their innate geometry and material_instances
    - The component cannot be defined in the "permutations" section; only one embedded visual can be achieved per block type
  - The component requires the Upcoming Creator Features toggle
- Added new field `embedded"`to the `item_display_transforms` object
  - The field defines the overall transformation this geometry should be subject to when embedded into a block, eg. a Flowerpot
  - If the field is not defined, the default transformation is a 0.75x scale, similar to the one applied to most Vanilla flowers

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30232/R21U11-5-Preview?anchor=gameplay)

- The Ender Dragon no longer freezes at the end of its death. It now dies and creates the portal ([MCPE-224403](https://bugs.mojang.com/browse/MCPE-224403))
