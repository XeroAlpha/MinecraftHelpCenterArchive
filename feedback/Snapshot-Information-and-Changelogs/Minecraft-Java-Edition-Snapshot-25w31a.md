---
title: Minecraft Java Edition - Snapshot 25w31a
date: 2025-07-29T14:13:04Z
updated: 2025-09-09T11:32:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38407004270605-Minecraft-Java-Edition-Snapshot-25w31a
hash:
  h_01K4Q3V6W5BN37DKAY51P9KKQ1: new-features
  h_01K4Q3V6W5R1XVFXB6AG7Y37MQ: copper-chest
  h_01K4Q3V6W5ZTA64FZZE7BB8C99: copper-golem
  h_01K4Q3V6W5K7B4K9F8R6S0P9A9: copper-golem-item-sorting
  h_01K4Q3V6W5A68ZQN5QDBGDK0Y8: copper-golem-statue-block
  h_01K4Q3V6W5P65DKGVXZKAFBZHP: lightning-rod
  h_01K4Q3V6W5QXCW1JHPH80BGBVR: copper-equipment
  h_01K4Q3V6W5N6YNR80YCBGSWDNR: shelf
  h_01K4Q3V6W5VG815F5RRAJQASPP: accessibility
  h_01K4Q3V6W58CT4NRKJ6FM1N9N3: changes
  h_01K4Q3V6W5T7HHC1T8KYX1BMDH: world-loading-and-spawn-chunks
  h_01K4Q3V6W69E0EPNDG4XMRJHQQ: sounds
  h_01K4Q3V6W658MKYY23R3ZDBK9H: ui
  h_01K4Q3V6W68X9MH0M9BMQXGT6F: debug-screen
  h_01K4Q3V6W6R9TEBY88MJ2VABDQ: accessibility-1
  h_01K4Q3V6W602M91ANR90CY3RZE: performance-improvements
  h_01K4Q3V6W6375SRC9RVSS42TSC: technical-changes
  h_01K4Q3V6W6HMFP5PTWESY9G21N: pack-formats
  h_01K4Q3V6W62TJ47GRQJ0ZCNEFQ: pack-metadata
  h_01K4Q3V6W67PPA7YHV5ABGQ9TK: data-pack-version-820
  h_01K4Q3V6W6QZJS379TV241FVS5: commands
  h_01K4Q3V6W6EB7MHA4TQD3HSSDB: game-rules
  h_01K4Q3V6W6R7S8MKEHGYDDZ26R: data-components
  h_01K4Q3V6W6K9S9FHQ9X9TR44A8: blocks_attacksitem-component
  h_01K4Q3V6W6VQ0VJ3VWSWRBG5XN: loot-tables
  h_01K4Q3V6W6BSHH0DRREWZP4TQS: world-generation
  h_01K4Q3V6W6G4Q68JTVNC4HQT1S: density-functions
  h_01K4Q3V6W6F5HMK2FCSN398M2T: addedminecraftfind_top_surface
  h_01K4Q3V6W63AJMPXH2H16PYXFF: addedminecraftinvert
  h_01K4Q3V6W61JRJ7M4G39193K26: jigsaw-structures
  h_01K4Q3V6W60BJK0532HYT5DE3A: tags
  h_01K4Q3V6W6DRXAYQGEH1TKS3ZJ: block-tags
  h_01K4Q3V6W6F4WXGVQAWKBEM3GC: item-tags
  h_01K4Q3V6W6YPCJE7WFP5SSXHDM: resource-pack-version-650
  h_01K4Q3V6W69XB53ZNZ47Z44BAT: block-sprites
  h_01K4Q3V6W6V5EV7H8HW6Y4WC7T: entity-sprites
  h_01K4Q3V6W626D1FN8WWGCEZF2A: item-sprites
  h_01K4Q3V6W6NTBPG61H5M5RXPEP: sound-events
  h_01K4Q3V6W6TM0H9XYXZ7FDWTST: shaders--post-process-effects
  h_01K4Q3V6W6S77E4ZKE2CWAWSPH: changes-to-full-screen-passes
  h_01K1B8CSXKFCG1019XQW6H5FAG: fixed-bugs-in-25w31a
  h_01K1B8CSY0XBEF2DJT6BK1165Y: get-the-snapshot
---

Oh, how we have yearned for the shipping room! We're back with our first snapshot release of the season, bringing you a big bundle of features from our third game drop of the year. Test the copper golem and copper chest for a tidier, livelier base, and watch your helper oxidize and turn into a statue, complete with adorable, redstone signal-emitting poses. Build functional decor using the brand-new shelves and try out copper weapons, tools and armor. To top it off, this release also includes copper horse armor and oxidizing lightning rods, in addition to a slew of bug fixes and technical changes.

Happy mining!

## New Features

- Added Copper Chest
- Added Copper Golem
- Added Copper Golem Statue Block
- Added Copper Equipment
- Added Shelf

### Copper Chest

- Copper Chests is a new type of chest that has waxed and oxidized variants
- Copper Chests oxidizes over time and can be waxed like other Copper blocks
- Copper Chests can be crafted using a Chest and Copper Ingots

### Copper Golem

- Copper Golem is a new mob which can be spawned by placing a Jack o'Lantern or Carved Pumpkin on top of a Copper block
- Copper Golem oxidize over time and can be waxed like Copper blocks
- If the Copper Golem has fully oxidized and is not waxed it will turn into a Copper Golem Statue Block
  - When turned into a Copper Golem Statue the Copper Golem will drop any item it may be holding
  - A Copper Golem turned into a Copper Golem Statue will keep its name if named with a Name Tag
- Copper Golem can help with sorting items into Chests
- Interacting with the Copper Golem with an empty hand will make it drop its carried item

#### Copper Golem Item Sorting

- If the Copper Golem is not holding an item, it will look for nearby Copper Chests to try to pick up an item
  - The Copper Golem will look in any oxidized and waxed Copper Chest variant to pick up items
  - It can pick up at most 16 items in a stack at a time
  - Any item in a Copper Chest can be picked up
- If the Copper Golem is holding an item, it will look for nearby Chests to try to place the item in
  - The Copper Golem will look in Chests and Trapped Chests to try to place items
  - It can place an item in a Chest if it's empty, or if it contains the same type of item that it is holding in its hand
- The Copper Golem will visit at most 10 Chests or Copper Chests in sequence to try to pick up or place an item
- If no matching chest is found the Copper Golem will idle for 7 seconds before trying again
- The search area for chests from the Copper Golem's position is horizontally 32 blocks and vertically 8 blocks

### Copper Golem Statue Block

- The Copper Golem Statue Block is a new type of decorative block which has waxed and oxidized variants
- The Copper Golem Statue Block oxidizes over time and can be waxed like Copper blocks
- The pose of the block can be changed by interacting with it
- If the Copper Golem Statue Block has no oxidation when interacted with using an Axe the block will turn into a Copper Golem
- Each pose emits a Redstone comparator signal

### Lightning Rod

- Lightning Rods now oxidize like other Copper Blocks and the Lightning Rod on the Copper Golem

### Copper Equipment

- Added Copper Nugget
- Added Copper armor
  - Added Copper Helmet, Copper Chestplate, Copper Leggings and Copper Boots
  - Copper armor has higher durability than leather and gold
  - Copper armor has slightly less enchantability than iron
- Added Copper tools and weapons
  - Added Copper Axe, Copper Hoe, Copper Pickaxe, Copper Shovel and Copper Sword
  - Copper tools and weapons do the same amount of damage as stone, but have higher durability
  - Copper tools work faster and last longer than stone
  - Copper tools have higher enchantability than diamond, but slightly less than iron
- Copper equipment can be crafted using Copper Ingots
- Copper equipment can be repaired with Copper Ingots
- Copper equipment turns into a Copper Nugget when smelted
- Added Copper Horse Armor
  - Has the same loot table and chance of generating as Iron Horse Armor
  - Armor toughness: 4

### Shelf

- The Shelf is a new type of decorative block which comes in the following variants:
  - Oak
  - Spruce
  - Birch
  - Jungle
  - Acacia
  - Dark Oak
  - Mangrove
  - Cherry
  - Pale Oak
  - Bamboo
  - Crimson
  - Warped
- The Shelf can be crafted from six matching blocks of any Stripped Log, Stripped Stem or Block of Stripped Bamboo, filling the top and bottom row
  - This recipe produces 6 Shelves
- The Shelf can store up to 3 item stacks:
  - Interacting with any of the 3 slots on its front swaps the player's main hand item with the content of that slot
  - The Shelf displays all items it contains in front of it, similar to an Item Frame
- While a Shelf is powered by Redstone, its front texture changes to reflect that it's powered; when placed next to each other, up to 3 powered Shelves will connect
  - Interacting with a single powered Shelf swaps all its contents with the 3 rightmost items in the player's hotbar
  - Interacting with two connected Shelves swaps their contents with the 6 rightmost items in the player's hotbar
  - Interacting with three connected Shelves swaps their contents with all items in the player's hotbar
  - It does not matter which of the connected Shelves the player interacts with

### Accessibility

- The "Attack/Destroy" and "Use Item/Place Block" keybinds are now toggleable, meaning they can be set to either "Hold" or "Toggle" in the Controls screen
- Added "Invert Mouse X" option to the Mouse Settings screen, which inverts the mouse x-axis
- Added "Sprint Window" option to the Controls screen, which represents the time window in ticks where double-tapping the forward key activates sprint

## Changes

- Monster Spawn Eggs now have a tooltip warning when the difficulty is set to Peaceful
  - The mob no longer spawns for one tick when an attempt is made to use the Spawn Egg
- The debug screen was reworked to be less cluttered and more configurable
- Changes to world loading and the "Spawn Chunks"
- A dimension that has any player activity, forceloaded chunks, active portals, or Ender Pearls in flight will be considered "active" and will keep processing chunks and entities
  - Previously, this would only apply if a player was in the dimension or a chunk was forceloaded

### World Loading and Spawn Chunks

- The concept of fixed "Spawn Chunks" has been removed
- The game will ensure that the following chunks are fully loaded before the player joins or the server starts, in the same way as spawn chunks formerly were:
  - Chunks loaded by the forceload command
  - Chunks active due to portal activity
  - Ender Pearls thrown in Singleplayer (Singleplayer only)
  - The small area of chunks around the player (Singleplayer only)
  - Chunks required to assign the global world spawn (World creation only)
- The world loading screen now shows the chunks that the player is about to be placed into, rather than chunks loaded around world spawn
- The loading screen additionally now includes a progress bar
  - This progress bar accounts for all kinds of chunk loading as mentioned above

> **Developer’s Note:** *Spawn chunks incur a memory and performance cost for all players and have outlived their initial technical purpose of keeping the spawn area ready for players to quickly join into.*
>
> *However, we also want to recognize that spawn chunks have enabled a multitude of clever contraptions and farms throughout the years, so simply removing them without having other mechanics in the game enable these designs was never an option.*
>
> *We believe that the niche held by spawn chunks has now been filled by alternative methods of chunk loading, such as using portals or Ender pearls, particularly with the changes in this snapshot to how the game loads these chunks before the world starts ticking.*

### Sounds

- Happy Ghast is now audible from 64 blocks
- Sounds for chests now plays at a lower volume
- The volume at which a sound is played at now respects the sound source volume value
- The "Voice/Speech" sound source has been rephrased to "Narrator/Voice"

### UI

#### Debug Screen

- The debug screen is accessible by pressing F3, as before
- It can now be accessed from everywhere in the game, not only when in a game world
- It now displays less information by default
- Added a new Debug Options screen which can be opened by pressing F3 + F5
  - It can be used to configure which debug information should be displayed
  - For each item you can choose if it should be turned off, visible when the debug screen (F3) is open, or it should always be visible, even when the debug screen is closed
  - Some debug features that were previously available, like chunk border rendering or entity hitbox rendering, can now be toggled through this debug options screen
  - Some debug features that were not previously available to the community, like Octree visualization, are now accessible through the debug options screen
  - The state of the debug options screen is saved between the launches of the game
  - The debug options screen has the following preset profiles:
    - Default resets everything to the default state
    - Performance shows simple performance metrics, including the FPS meter always visible on screen

> **Developer's Note**: *Previously the information gathering every frame to render the F3 screen had a significant performance cost. So opening the screen to check you FPS noticeably dropped the FPS. Now checking your FPS in Performance profile should not affect game performance.*

### Accessibility

- A button leading to the Controls screen has been added to the Accessibility Settings screen

  - The "Auto-Jump" option, as well as the "Sneak" and "Sprint" toggles have been removed from the Accessibility Settings screen

- The "Show Subtitles" option has been rephrased to "Closed Captions" to more accurately describe what it does

- Dye Colors now have updated icons

  - The goal with these is to enhance visual cohesion across the dye set while maintaining distinct shapes to support colorblind accessibility

### Performance Improvements

- Entity rendering order was improved for significantly better performance
  - You’ll notice much smoother gameplay in areas with lots of mobs, like mob farms
  - FPS won’t improve much if most of your lag comes from things other than entities, like playing with high render distance while not being near many mobs

> **Developer's Note**: *This change is quite big, and we would not be surprised if we introduced some ordering issues with this. For example, some part of some mob rendering too early or too late and is not visible or is visually broken. Please play around with this and report the bugs you encounter!*

## Technical Changes

- Pack versions now have minor versions
- The Data Pack version is now 82.0
- The Resource Pack version is now 65.0

### Pack Formats

- The pack versions for data packs and resource packs now have minor versions
  - A minor version increment of the game's pack version is backwards-compatible, meaning all packs made for previous iterations of the same major version will keep working
- Packs can set compatibility requirements on minor versions in case they rely on resources introduced in a minor version

#### Pack Metadata

The pack.mcmeta format has been updated:

- The supported_formats field has been removed
  - If your pack declares support for a pack version with the previous format (data pack \< 82, resource pack \< 65), it is still required
  - Otherwise, it is not allowed and must be removed
- The pack_format field is now optional
  - If your pack declares support for a pack version with the previous format (data pack \< 82, resource pack \< 65), it is still required
- Added required field min_format - specifies the minimum version supported
  - A full version is specified as a list of two integers, e.g \[74, 1\]
  - Specifying a single integer is interpreted as that major version, e.g. 74 is the same thing as \[74, 0\]
  - Specifying a list of a single integer is interpreted the same as specifying that integer alone
- Added required field max_format - specified the maximum version supported
  - A full version is specified as a list of two integers, e.g \[74, 1\]
  - Specifying a single integer is interpreted as any minor version, i.e. the minor version is 0x7fffffff
  - Specifying a list of a single integer is interpreted the same as specifying that integer alone
- For overlay entries:
  - The formats field has been removed
    - If your pack includes any overlay range that includes a pack version with the previous format (data pack \< 82, resource pack \< 65), it is still required for all overlay definitions
    - Otherwise, it is not allowed and must be removed
  - Added required field min_format and max_format with the same formats the fields above with the same name for the pack section

## Data Pack Version 82.0

### Commands

- The summon command now fails when trying to summon monsters while the difficulty is set to Peaceful

### Game Rules

- Removed spawnChunkRadius game rule

### Data Components

#### blocks_attacks Item Component

- If the damage reduced in an attack is 0, for example by angle threshold not matching, the item can no longer get disabled in the attack, nor cause knockback due to blocking

### Loot Tables

- Added minecraft:entity_interact loot table type which takes the following parameters:
  - target_entity, the entity being interacted with
  - interacting_entity, the optional entity that is interacting with the target_entity
  - tool, the tool used to interact with target_entity
- Added minecraft:block_interact loot table type which takes the following parameters:
  - block_state, the block state of the block entity being interacted with
  - block_entity, the optional block entity being interacted with
  - interacting_entity, the optional entity that is interacting with the block_state
  - tool, the optional tool used to interact with block_state
- Fields that specify a target entity in a loot table, such as entity_properties.entity, can additionally target the target_entity and interacting_entity parameter types
- Added charged_creeper/root loot table for drops when an entity is killed by a Charged Creeper
  - This loot table dispatches on the mob that was killed, to the following loot tables:
    - charged_creeper/piglin
    - charged_creeper/creeper
    - charged_creeper/skeleton
    - charged_creeper/wither_skeleton
    - charged_creeper/zombie
  - Once any mob killed drops an item from this loot table, other mobs killed by the same Creeper will not drop from this loot table
- Added brush/armadillo loot table for drops when an Armadillo is brushed
- Added gameplay/turtle_grow loot table for drops when a Turtle grows into an adult
- Added harvest/beehive loot table for drops when a Beehive or Bee Nest is harvested using Shears
- Added harvest/cave_vine loot table for drops when a Cave Vine with Glowberries is harvested by interacting with it
- Added carve/pumpkin loot table for drops when a Pumpkin is carved using Shears

### World Generation

- The initial_density_without_jaggedness field in noise_settings definitions has been replaced with a preliminary_surface_level field
  - initial_density_without_jaggedness was a 3D density function that was used to determine an approximate surface level by scanning for the first point with a density greater than 0.390625
  - preliminary_surface_level is a 2D density function that should produce the y-level of the approximate surface
  - The minecraft:find_top_surface density function can be used to replicate the previous scanning

#### Density Functions

##### Added minecraft:find_top_surface

- Approximates the topmost surface of a given density function
- It scans from an upper bound to a lower bound to find the point at which the density changes from negative to positive
  - The upper bound should be as close to the actual surface for best performance
  - The upper bound should never be lower than the actual surface

Fields:

- density - density function to approximate the surface of
- upper_bound - 2D density function providing the highest possible y-value
- lower_bound - integer, lowest possible y-value
- cell_height - positive integer defining the grid resolution on which to scan

##### Added minecraft:invert

- Resolves to 1/argument

Fields:

- argument - density function

#### Jigsaw Structures

- The max_distance_from_center field may now specify a different restriction on the vertical axis from horizontal
  - This can be specified by an object with fields:
    - horizontal - required integer between 1 and 128
    - vertical - optional integer between 1 and 4096 (default: 4096)
    - e.g: "max_distance_from_center": { "horizontal": 20, "vertical": 500 }
  - The previous format of a single inline value specifying both horizontal and vertical distance is still supported

### Tags

#### Block Tags

- Added \#copper_chests - all Copper Chest blocks
- Added \#copper - all Copper blocks
- Added \#incorrect_for_copper_tool - all blocks which will not drop items with a copper tool
- Added \#copper_golem_statues - all Copper Golem Statue blocks

#### Item Tags

- Added \#copper_chests - all Copper Chest block items
- Added \#copper - all Copper block items
- Added \#copper_tool_materials - all copper tool materials
- Added \#repairs_copper_armor - all items which repair copper armor
- Added \#copper_golem_statues - all Copper Golem Statue block items

## Resource Pack Version 65.0

### Block Sprites

- Added new block sprites:
  - copper
  - copper_left
  - copper_right
  - exposed_copper
  - exposed_copper_left
  - exposed_copper_right
  - weathered_copper
  - weathered_copper_left
  - weathered_copper_right
  - oxidized_copper
  - oxidized_copper_left
  - oxidized_copper_right
  - acacia_shelf
  - bamboo_shelf
  - birch_shelf
  - cherry_shelf
  - crimson_shelf
  - dark_oak_shelf
  - jungle_shelf
  - mangrove_shelf
  - oak_shelf
  - pale_oak_shelf
  - spruce_shelf
  - warped_shelf

### Entity Sprites

- Added new entity sprites:
  - copper_golem
  - exposed_copper_golem
  - weathered_copper_golem
  - oxidized_copper_golem
  - copper_golem_eyes
  - exposed_copper_golem_eyes
  - weathered_copper_golem_eyes
  - oxidized_copper_golem_eyes

### Item Sprites

- Added new item sprites:
  - copper_axe
  - copper_boots
  - copper_chestplate
  - copper_golem_spawn_egg
  - copper_helmet
  - copper_hoe
  - copper_leggings
  - copper_nugget
  - copper_pickaxe
  - copper_shovel
  - copper_sword

#### Sound Events

- Added new sound events:
  - block.copper_chest.open
  - block.copper_chest.close
  - block.copper_chest_weathered.open
  - block.copper_chest_weathered.close
  - block.copper_chest_oxidized.open
  - block.copper_chest_oxidized.close
  - entity.copper_golem.step
  - entity.copper_golem.hurt
  - entity.copper_golem.death
  - entity.copper_golem.spin
  - entity.copper_golem_weathered.step
  - entity.copper_golem_weathered.hurt
  - entity.copper_golem_weathered.death
  - entity.copper_golem_weathered.spin
  - entity.copper_golem_oxidized.step
  - entity.copper_golem_oxidized.hurt
  - entity.copper_golem_oxidized.death
  - entity.copper_golem_oxidized.spin
  - item.armor.equip_copper
  - entity.copper_golem.spawn
  - entity.copper_golem.no_item_get
  - entity.copper_golem.no_item_not_get
  - entity.copper_golem.item_drop
  - entity.copper_golem.item_no_drop
  - entity.copper_golem_become_statue
  - block.copper_golem_statue.break
  - block.copper_golem_statue.place
  - block.copper_golem_statue.hit
  - block.copper_golem_statue.fall
  - block.copper_golem_statue.step
  - block.shelf.activate
  - block.shelf.deactivate
  - block.shelf.multi_swap
  - block.shelf.place_item
  - block.shelf.single_swap

### Shaders & Post-process Effects

> **Developer's Note**: *Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future.*

#### Changes to Full Screen Passes

- The following vertex shaders have been removed, and replaced by core/screenquad.vsh:
  - core/blit_screen.vsh
  - post/blit.vsh
  - post/blur.vsh
  - post/invert.vsh
  - post/sobel.vsh
  - post/screenquad.vsh
- Vertex shaders for post-processing effects, as well as lightmap generation and full screen blits are no longer are passed the Position attribute, and instead must assign vertex coordinates by gl_VertexID
- These passes furthermore are only executed with 3 vertices, instead of a full quad

 

## Fixed bugs in 25w31a

- [MC-46634](https://bugs.mojang.com/browse/MC-46634) - Thunder volume is not affected by weather volume settings
- [MC-73881](https://bugs.mojang.com/browse/MC-73881) - Summoning monsters in peaceful difficulty spawns monster for 1 tick
- [MC-89142](https://bugs.mojang.com/browse/MC-89142) - Changing jump key to "Enter" let player jump after completing chat line
- [MC-94610](https://bugs.mojang.com/browse/MC-94610) - Missing loot table entries for mob heads from charged creepers
- [MC-98200](https://bugs.mojang.com/browse/MC-98200) - All sound sliders except master are ignored by high-volume /playsound
- [MC-183776](https://bugs.mojang.com/browse/MC-183776) - After switching game modes using F3+F4, you need to press F3 twice to toggle the debug screen
- [MC-192907](https://bugs.mojang.com/browse/MC-192907) - The F3 debug menu cannot be toggled while chat is open
- [MC-196443](https://bugs.mojang.com/browse/MC-196443) - When reducedDebugInfo is true, hitting F3+B and F3+G would still tell the player in chat that they are being toggled, despite nothing happening
- [MC-197247](https://bugs.mojang.com/browse/MC-197247) - Using F3+D to clear pending lines keeps the previous delay for a new message
- [MC-203401](https://bugs.mojang.com/browse/MC-203401) - Double-tapping forward button to sprint cannot be disabled/reconfigured
- [MC-220842](https://bugs.mojang.com/browse/MC-220842) - Opening game mode switcher while spectating a mob with shader effect toggles the effect
- [MC-234479](https://bugs.mojang.com/browse/MC-234479) - You can invite the same player multiple times to your realm even if they've already received an invitation or have already joined it
- [MC-235780](https://bugs.mojang.com/browse/MC-235780) - The beacon GUI incorrectly displays the "Beacon" tooltip when the mouse cursor is held over the "Done" or "Cancel" buttons
- [MC-237016](https://bugs.mojang.com/browse/MC-237016) - The chat delay function continues to print messages despite the game being paused
- [MC-237843](https://bugs.mojang.com/browse/MC-237843) - Players can be idle kicked whilst viewing the end credits
- [MC-259692](https://bugs.mojang.com/browse/MC-259692) - Sneaking and sprinting states are activated or toggled unexpectedly when releasing their input keys while an interface was just previously closed
- [MC-259935](https://bugs.mojang.com/browse/MC-259935) - It can snow even when biome precipitation is set to NONE
- [MC-260822](https://bugs.mojang.com/browse/MC-260822) - The "Done" and "Cancel" buttons within the beacon GUI no longer display tooltips when the mouse cursor is held over them
- [MC-261387](https://bugs.mojang.com/browse/MC-261387) - Redundant block_predicate_filter check in mangrove tree placement
- [MC-262000](https://bugs.mojang.com/browse/MC-262000) - Unused texture: misc/white.png
- [MC-263597](https://bugs.mojang.com/browse/MC-263597) - The ender dragon's respawning noise cannot be turned down by the Hostile Mobs volume slider
- [MC-269838](https://bugs.mojang.com/browse/MC-269838) - Pumpkin seeds drop from sheared pumpkins is hardcoded
- [MC-269839](https://bugs.mojang.com/browse/MC-269839) - Honeycomb drop from sheared bee nests and beehives is hardcoded
- [MC-270918](https://bugs.mojang.com/browse/MC-270918) - Loot tables for mob heads are missing copy_components loot function for custom_name
- [MC-275244](https://bugs.mojang.com/browse/MC-275244) - Setting "width_smoothness" in file configured_carver to 0 causes the game to freeze or crash
- [MC-275432](https://bugs.mojang.com/browse/MC-275432) - Subtitles are difficult to see within screens
- [MC-276568](https://bugs.mojang.com/browse/MC-276568) - Mipmapped versions of the armor trims atlas are generated
- [MC-276629](https://bugs.mojang.com/browse/MC-276629) - Glow berries drop from cave vines appears to be hardcoded
- [MC-276759](https://bugs.mojang.com/browse/MC-276759) - Scute drop from brushing armadillos is hardcoded
- [MC-277447](https://bugs.mojang.com/browse/MC-277447) - Minecraft generates mipmapped textures for chests, but does not use them
- [MC-277450](https://bugs.mojang.com/browse/MC-277450) - Minecraft generates mipmapped textures for shulker boxes, but does not use them
- [MC-277470](https://bugs.mojang.com/browse/MC-277470) - Minecraft generates mipmapped textures for beds, but does not use them
- [MC-277471](https://bugs.mojang.com/browse/MC-277471) - Minecraft generates mipmapped textures for signs, but does not use them
- [MC-277473](https://bugs.mojang.com/browse/MC-277473) - Minecraft generates mipmapped textures for decorated pots, but does not use them
- [MC-277481](https://bugs.mojang.com/browse/MC-277481) - Minecraft generates mipmapped textures for banners, but does not use them
- [MC-277483](https://bugs.mojang.com/browse/MC-277483) - Minecraft generates mipmapped textures for shields, but does not use them
- [MC-277770](https://bugs.mojang.com/browse/MC-277770) - Processor type block_age always modifies slabs property "type" to bottom
- [MC-278965](https://bugs.mojang.com/browse/MC-278965) - Cherry Grove is not part of the \#stronghold_biased_to tag
- [MC-279793](https://bugs.mojang.com/browse/MC-279793) - Mounting horses, donkeys, mules, zombie horses, skeleton horses, and camels no longer forces you to face forward
- [MC-289348](https://bugs.mojang.com/browse/MC-289348) - Ender pearls stop loading chunks in The End after relog, if there are no players in that dimension
- [MC-297593](https://bugs.mojang.com/browse/MC-297593) - Cauldrons now apply the effect of the substance they're filled with when contacted from the underside
- [MC-298274](https://bugs.mojang.com/browse/MC-298274) - Certain invalid commands give "see below for error" with no additional information
- [MC-298732](https://bugs.mojang.com/browse/MC-298732) - The cursor is no longer shown at the end of lines that aren't the final one
- [MC-298805](https://bugs.mojang.com/browse/MC-298805) - Axes disable shields even when the shield does not block the attack
- [MC-298883](https://bugs.mojang.com/browse/MC-298883) - The active world slot is not highlighted when selected via TAB navigation in Realms
- [MC-299450](https://bugs.mojang.com/browse/MC-299450) - You can no longer double-click to select characters in the book and quill interface
- [MC-299451](https://bugs.mojang.com/browse/MC-299451) - Pages in book and quills are no longer automatically focused when switching pages
- [MC-299566](https://bugs.mojang.com/browse/MC-299566) - The cursor in the book and quill interface is positioned too far to the left
- [MC-299628](https://bugs.mojang.com/browse/MC-299628) - Mounted players/mobs trigger sculk sensors on world load
- [MC-299782](https://bugs.mojang.com/browse/MC-299782) - Zombie villagers saved in jigsaw structures forget their biome variant and profession upon world generation
- [MC-299896](https://bugs.mojang.com/browse/MC-299896) - You can switch the worlds of expired realms to empty slots, which misleadingly prompts world creation despite no active realms subscription
- [MC-300021](https://bugs.mojang.com/browse/MC-300021) - Some elements of the villager interface are now rendered above the cursor item

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/b966ccab7666a9f0c8c955f022bda8c778830b99/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!
