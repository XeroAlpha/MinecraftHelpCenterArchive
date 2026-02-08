---
title: Minecraft Beta & Preview - 1.21.50.26
date: 2024-10-30T13:31:25Z
updated: 2025-02-04T15:05:22Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31476211695501-Minecraft-Beta-Preview-1-21-50-26
hash:
  user-content-new-features-and-bug-fixes: new-features-and-bug-fixes
  user-content-biomes: biomes
  user-content-pale-garden: pale-garden
  user-content-blocks: blocks
  user-content-creaking-heart: creaking-heart
  user-content-resin-bricks: resin-bricks
  user-content-resin-clump: resin-clump
  user-content-commands: commands
  user-content-features: features
  user-content-gameplay: gameplay
  user-content-graphics: graphics
  user-content-items: items
  user-content-mobs: mobs
  01JBES9M8RBW9AKYKK9KSQMWVA: creaking
  user-content-realms: realms
  user-content-stability-and-performance: stability-and-performance
  user-content-structures: structures
  user-content-jigsaw: jigsaw
  user-content-technical: technical
  user-content-trial-spawner: trial-spawner
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  01JBES9M8R5GQJSS7V21Y0ZV6P: blocks-1
  user-content-technical-updates: technical-updates
  01JBES9M8S17RQ5054DJP6QB5R: mobs-1
  h_01JK8QTRJKWG71SNRXX7BTCCXH: blocks-2
  user-content-audio: audio
  01JBES9M8RXQ7VHDS9QQ6FAFYW: biomes-1
  user-content-molang: molang
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-scripting-api: scripting-api
  user-content-network-protocol: network-protocol
  user-content-recipes: recipes
  01JBES9M8S2FG813JWWA2E2Z85: stability-and-performance-1
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JK8QTRJKVMRX342NGEA0KYJN: blocks-3
  user-content-api: api
  user-content-camera: camera
  user-content-component: component
  user-content-scripting: scripting
  user-content-server-ui: server-ui
  01JBES9M8STP9FXJ8CE96B5EJR: structures-1
---

**Posted:** 30 October 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![paleoakleaves.jpg](https://feedback.minecraft.net/hc/article_attachments/31476211693453)

It's time for a new Preview and Beta! This week we're amping up the atmosphere in the pale garden. Eyeblossoms will now puff out orange particles when they open – and leaves will fall from the pale oak trees in the pale garden – adding to the ambiance of this new, eerie biome. As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/hc/en-us) and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/)! Here's what's new this week:

# New Features and Bug Fixes

## Biomes

- Music volume now gradually lowers to zero when entering a Pale Garden and gradually resumes when leaving it

### Pale Garden

- Add the Pale Oak Sapling, Eyeblossoms, Pale Moss Block, and Hanging Pale Moss to the Wandering Trader ([MCPE-187456](https://bugs.mojang.com/browse/MCPE-187456))

## Blocks

- Adjusted the flammability of Pale Moss, Pale Moss Carpet, and Pale Hanging Moss\
  - They now burn more quickly but take longer to catch on fire
  - They can now be ignited by Lava
- The attenuation drop-off rate for Pale Hanging Moss and Creaking Heart ambient sounds is now linear, allowing them to be heard from greater distances ([MCPE-187326](https://bugs.mojang.com/browse/MCPE-187326))
- Eyeblossoms now play sounds when opening and closing
- Open Eyeblossoms now emit ambient sounds when placed on a Pale Moss Block
- Vine, Cave Vines, Twisting Vines, and Weeping Vines now play their correct sounds instead of the Nether Wart sound
- Hanging Pale Moss now has the same model as Java ([MCPE-187397](https://bugs.mojang.com/browse/MCPE-187397))
- Eyeblossoms placed in world and in Flower Pots now emit a particle when opening/closing
- Pale Oak Leaves now emit falling leaf particles

### Creaking Heart

- Reduced the distance by which the Creaking Heart can spread Resin Clumps by one block
- Resin Clumps can now only spread onto Pale Oak Log, Stripped Pale Oak Log, Pale Oak Wood, and Stripped Pale Oak Wood

### Resin Bricks

- Recipes for Resin Brick Slabs, Stairs, and Walls now give the same amount of blocks as the Nether Brick ones ([MCPE-187707](https://bugs.mojang.com/browse/MCPE-187707), [MCPE-187795](https://bugs.mojang.com/browse/MCPE-187795), [MCPE-187796](https://bugs.mojang.com/browse/MCPE-187796))

> **Developer's Note:** *Counting is hard.*

### Resin Clump

- Mobs now correctly pathfind over Resin Clumps ([MCPE-187778](https://bugs.mojang.com/browse/MCPE-187778))

## Commands

- Translated rawtexts with extra percentage signs in them no longer expand inconsistently for numbered forms ("%%%%1"), compared to non-numbered ones ("%%%%s"). ([MCPE-171001](https://bugs.mojang.com/browse/MCPE-171001))
- Effect command now properly displays duration as seconds in the displayed message after adding an effect ([MCPE-186963](https://bugs.mojang.com/browse/MCPE-186963))

## Features

- Standardized the blocks that trees can replace when growing, with a few exceptions ([MCPE-187302](https://bugs.mojang.com/browse/MCPE-187302)) ([MCPE-187301](https://bugs.mojang.com/browse/MCPE-187301))
  - All trees can now grow through leaves, with the exception of Cherry trees cannot grow through their own leaves ([MCPE-168029](https://bugs.mojang.com/browse/MCPE-168029))
  - All trees can grow on dirt-like blocks ([MCPE-187739](https://bugs.mojang.com/browse/MCPE-187739))
- Tall Grass generates properly with its top part in the Pale Garden biome ([MCPE-187308](https://bugs.mojang.com/browse/MCPE-187308))
- Tall Grass generates properly with its top part in the Lush Caves biome ([MCPE-125799](https://bugs.mojang.com/browse/MCPE-125799))

## Gameplay

- Holding the jump button when falling on a Slime Block no longer cancels the bounce ([MCPE-185354](https://bugs.mojang.com/browse/MCPE-185354))
- Sneaking while landing on a Slime Block no longer causes fall damage

> **Developer's Note:** The intended way to stop bouncing on a Slime Block is now to sneak.\
> Previously players could stop bouncing by holding the jump button, but this was an unintentional oversight that worked since the jump effectively cancelled out the movement from the block.
>
> This caused other types of bugs such as when hitting a mob with a Mace with Wind Charge enchantment while holding the jump button.\
> The new player jump behaviour is to always pick the highest between existing vertical velocity and jump velocity.

- Fixed one case where blocks would fail to place if a player would place a block and then change their selected slot before the server handled the block placement. This would reject the block placement because the server didn't expect the slot to change ([MCPE-112420](https://bugs.mojang.com/browse/MCPE-112420))

## Graphics

- Sky color now gradually transitions when traveling between different biomes, rather than changing abruptly ([MCPE-90625](https://bugs.mojang.com/browse/MCPE-90625))

## Items

- Resin Clump and Resin Brick items no longer float in the Player's hand in 3rd person view
- Open and Closed Eyeblossoms can now be used on Mooshrooms to obtain their respective Suspicious Stews when milking ([MCPE-187754](https://bugs.mojang.com/browse/MCPE-187754))
- Blackstone can now be used to repair stone tools and stone weapons ([MCPE-71859](https://bugs.mojang.com/browse/MCPE-71859))

## Mobs

### Creaking

- Reduced the speed of non-hostile Creakings
- Tamed Wolves' attacks no longer prevent Creakings from attacking the Player
- Creakings can no longer move when only their feet are observed, and their feet are in Soul Sand or Mud
- Creakings can now approach a Player which is looking downward, stopping only once they enter the Player's field of view
- The Creaking now sways when hit by a projectile
- The Creaking's attack animation has been smoothed out for a more natural motion
- The volume and pitch of the Creaking's step sounds have been adjusted
- The attenuation drop-off rate for some of the Creaking's sounds is now linear, allowing them to be heard from greater distances

## Realms

- Fixed bug where loading screens while loading a realm were not showing Realms UI elements

## Stability and Performance

- Improved game loading stability

## Structures

### Jigsaw

- Dimension padding is now taken into account when placing the start piece of a jigsaw structure

## Technical

- Vanilla Trial Spawner NBT `normalConfig` and `ominousConfig` tags values now support references to common configurations as an alternative to inline configuration

## Trial Spawner

- Some Trial Spawners did not have an extra Breeze out at once when Ominous

## User Interface

- Enables selecting disabled buttons on the 'join friends' menu while crossplay is turned off

- Dualsense gamepads now have correct tooltip icons on mobile devices

- Fixed spacing on Realms Stories and Timeline pages

- Touch Controls: Fixed a bug where boats were interactable during control customization ([MCPE-184404](https://bugs.mojang.com/browse/MCPE-184404))

- Fixed a bug where the death screen and new bed screen would sometimes have incorrect textures applied when resource packs were used ([MCPE-178701](https://bugs.mojang.com/browse/MCPE-178701), [MCPE-184050](https://bugs.mojang.com/browse/MCPE-184050))

- *Added Pick Block for touch controls in Creative mode*

  > ***Developer's Note:**** Pick Block allows you to add items to your hotbar without the need to open your inventory. With Pick Block you can select the block you want in your world and it will be added to your hotbar.*

## Vanilla Parity

### Blocks

- Resin Clumps and Glow Lichen now play their step sound when on top of a block an actor is walking on

# Technical Updates

### Mobs

- Mangrove Swamp no longer spawns mobs from other biomes ([MCPE-187514](https://bugs.mojang.com/browse/MCPE-187514))

### Blocks

- Added the 'minecraft:liquid_detection' component which controls the basic liquid detection properties of a block, such as liquidlogging, liquid blocking, and being broken or popped by liquid spread. The only liquid currently supported by the component is water
- Using the "minecraft:block_placer" item component to render the referenced block as the item icon no longer requires the "Upcoming Creator Features" toggle
- Cherry Leaves no longer count as custom blocks ([MCPE-180725](https://bugs.mojang.com/browse/MCPE-180725))

## Audio

- Per-biome ambient sounds are now defined in client_biome JSON components\
  - This uses the new "minecraft:ambient_sounds" component
  - Named sounds must be defined in "individual_named_sounds" in sounds.json files

## Biomes

- Client biome JSON files now support a "minecraft:biome_music" component with a "volume_multiplier" field which will gradually affect music volume when the audio listener is inside the corresponding biome\
  - The gradual volume change will take roughly ten seconds and will linearly increase but exponentially decrease

## Molang

- Moved `query.client_memory_tier` to stable.
  - Removed 'Undetermined'. It returns a number representing the client RAM memory tier, 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'. Available on the Client (Resource Packs) only.
- Moved `query.server_memory_tier` to stable.
  - Removed 'Undetermined'. It returns a number representing the server RAM memory tier, 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'. Available on the server side (Behavior Packs) only.
- Moved `query.client_max_render_distance` to stable.

## Editor

- Added a new `ClipboardWidgetComponent` to the client widget system to allow creators to be able to add clipboard items to widgets, and have them displayed as 'holograms'
- Added a flag to `Widget` and `WidgetBaseComponent` to allow locking the Y position to the surface, based on the XZ position
- Added a flag to `Widget` to tell the widget to bind it's position to that of the 3D block cursor
- Added quick action button bar to Selection (Deselect & Fill)
- Added Copy & Cut to main menu and action bar items
- Added information tooltip links for core editor panes
- Added a new `ClipboardWidgetComponent` to the client widget system to allow creators to be able to add clipboard items to widgets, and have them displayed as 'holograms'
- Added a flag to `Widget` and `WidgetBaseComponent` to allow locking the Y position to the surface, based on the XZ position
- Added a flag to `Widget` to tell the widget to bind it's position to that of the 3D block cursor
- Added quick action button bar to Selection (Deselect & Fill)
- Added Copy & Cut to main menu and action bar items
- Added information tooltip links for core editor panes
- Added Middle Mouse block picking in block picker modal
- Updated the Selection Tool size input box to be enabled when a block is selected
- Update `IModalToolContainer.addTool` API function to take unique tool id as a required argument. Removed `inputContextId` and `inputContextLabel` from creation parameters.
- Updated Grapple locomotion\
  - Added 'getRay()' to Cursor Service API
  - Camera now rotates towards grapple target during flight and is less snappy
  - Grapple now lets the creator fly 100 blocks distance towards the mouse pointer if there is no nearby block to grapple to
  - Changed hotkey for grapple-to-selection from F to CTRL+SHIFT+F
- Removed all of the `CursorAttachment` related types, properties and methods
- Removed `hide`, `show`, `dispose` functions from `IModalTool` API
- Renamed `anchor` in the `ClipboardWriteOptions` to `normalizedOrigin` for clarity
- Removed all of the `CursorAttachment` related types, properties and methods
- Fixed a bug where cylinder and cuboid brushes with a height of 1 were incorrectly sized
- Fixed deselect in Line Tool (this was actually a problem with Client Widgets not correctly tracking selected state in script)
- Fixed incorrect key binding in Selection move up/down
- Fixed 'Next Navigation Position' keyboard shortcut to no longer conflict with 'Previous Navigation Position'.
- Fixed an issue where Brush Painting tools to work in dimensiononly work in the starting dimension (generally Overworld) and do not work when changing dimensions
- Fixed keyboard navigation for interactive tooltip links
- Fixed padding for Selection tool panel items when the scrollbar is absent
- Fixed issue where camera flashes to the inside of the player mobs' head when grappling

## Entity Components

- The "minecraft:looked_at" component's "look_at_locations" field now accepts a list of objects as a parameter, each containing two fields\
  - "location", the location of the entity that must be visible
    - Valid values: "head", "body", "feet"
  - "vertical_offset", an optional vertical offset applied to the entity's location

## Scripting API

- Moved `ClientSystemInfo` from `beta` to `1.16.0`.
- Moved `MemoryTier` from `beta` to `1.16.0`.
- Moved `PlatformType` from `beta` to `1.16.0`.
- Moved `SystemInfo` from `beta` to `1.16.0`.
- Enum `MemoryTier`.
  - Removed `Undetermined` entry.

## Network Protocol

- New level sound events added: Open, OpenLong, Close, and CloseLong
- New Particle Type added: EyeblossomOpen
- New Particle Type added: EyeblossomClose
- New particle type added: PaleOakLeaves

## Recipes

- Added content error when parsing shaped recipes if the pattern contains undefined keys, also fixes crash when opening crafting screen with such malformed recipes ([MCPE-178520](https://bugs.mojang.com/browse/MCPE-178520))

## Stability and Performance

- Some stats for packs discovered on launch are stored locally to enable faster future launches on some platforms

# Experimental Technical Updates

## Blocks

- Added "minecraft:item_visual" block component. This component takes nested "minecraft:geometry" and "minecraft:material_instances" components to configure the item representation of a block
  - "geometry" and "material_instances" fields are required. They utilize the same fields/requirements as "minecraft:geometry" and "minecraft:material_instances" respectively
  - Block must include "minecraft:geometry" and "minecraft:material_instances" components alongside the "minecraft:item_visual" component
  - Requires the "Upcoming Creator Features" toggle
- Cobwebs now obey 'blockshape' and 'textures' properties set in blocks.json
  - Requires the "Upcoming Creator Features" toggle

## API

- Added access to the composting chance for existing Vanilla items via the ItemStack API
- Added access to the composting chance for items with CompostableItemComponent via the Item Component API

## Camera

- Added the rotation to the camera command for the fixed_boom camera

## Component

- Added the "minecraft:compostable" item component to UpcomingCreatorFeatures experimental toggle

## Scripting

### Server UI

- Added support for input glyph replacement for server forms (`ActionFormData`, `MessageFormData`, and `ModalFormData`).

## Structures

- Expose "Data-Driven Jigsaw Structures" experiment toggle to Creators
  - Creators will be able to modify structure generation rules around placement (location and frequency), layout (how structure pieces are placed relative to one another), and customization (how blocks within a structure piece are modified or replaced).
  - There are 4 new JSON files comprising Jigsaw Structure data:
    - Jigsaw Structures: These are structures that can be constructed throughout the world with various structure pieces. The connection block is a jigsaw block.
    - Processors: A processor can add custom behaviors to the structure that affects how it looks.
    - Structure Sets: Structure sets are JSON that indicate where and how a structure is placed throughout the world.
    - Template Pools: A template pool contains the structure pieces that make up a structure.
