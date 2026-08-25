---
title: Minecraft Java Edition - 26.3 Snapshot 10
date: 2026-08-25T14:05:12Z
updated: 2026-08-25T14:05:24Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48394701938573-Minecraft-Java-Edition-26-3-Snapshot-10
hash:
  h_01M0WKPSPD3HRG7JFYCMBSD45S: new-features
  h_01M0WKPSPDTGVEM8Q96RW1YV5K: realms
  h_01M0WKPSPFXCGBP7VJW2A6R1FH: changes
  h_01M0WKPSPGS5MN43AAQBS1PD3M: minor-tweaks-to-blocks-items-and-entities
  h_01M0WKPSPG2K15K8JHS8C8DNEQ: explorer-maps
  h_01M0WKPSPJE30GZZBC95MAWSDM: accessibility
  h_01M0WKPSPJQBZ933H0REAMV93Y: technical-changes
  h_01M0WKPSPMC9YCKQT9CCSMBFEZ: data-pack-version-118
  h_01M0WKPSPNDRSSG2YRNGGJCZ45: commands
  h_01M0WKPSPNSESCY10GYDX3B3S4: addedcompute
  h_01M0WKPSPVKZ3T9VNH0T6QK1PP: changes-todata
  h_01M0WKPSPXEK6DQRCEDAHC1WE0: data-components
  h_01M0WKPSPXRZFYDZPMQNHWDP5R: changedminecraftconsumable
  h_01M0WKPSPZ9E52GGTW0RB66BA5: updatedminecraftblock_transformer
  h_01M0WKPSPZ5TEMXG9KND0RMA7S: changedminecraftattack_animationandminecraftinteract_animation
  h_01M0WKPSQ0JVS31GM9E7MWJVPH: loot-tables
  h_01M0WKPSQ06YZ208KSEDP6XAK6: loot-table-types
  h_01M0WKPSQ05NQVG9B5KXT21JXY: addedminecraftcommand_compute_default
  h_01M0WKPSQ1487ZJD96CXZEVPVN: addedminecraftcommand_compute_position
  h_01M0WKPSQ2BNQT9YEABAFQB42H: addedminecraftcommand_compute_entity
  h_01M0WKPSQ3D83PVQCMDTH1Y1VM: loot-functions
  h_01M0WKPSQ3PDXXHHY27CDDT165: changedminecraftset_loot_table
  h_01M0WKPSQ4WBWFNY3F18H7GWH2: block-transformers
  h_01M0WKPSQF8PWPXFX1EZWMG90T: world-generation
  h_01M0WKPSQFNNDJ4VEM0FKPQFYH: noise-settings
  h_01M0WKPSQHDRR9SGJT8Z5J2ZYX: material-rules
  h_01M0WKPSQHGTK0PBB1DQCG1P7D: addedminecraftore_vein
  h_01M0WKPSQM4B3XJQ5AJ2CKRY0A: changedminecraftnoise
  h_01M0WKPSQNCJFJ4PAGV2N56TNH: removedminecraftshifted_noise
  h_01M0WKPSQPFKWFVJ4ZJRC9T2AQ: updatedminecraftinterpolated
  h_01M0WKPSQP7R2HAEG67QHV4RFD: updatedminecraftcacherenamed-fromminecraftcache_once
  h_01M0WKPSQPT4G9Y00HAZ4RA0MR: removedminecraftcache_2dminecraftcache_all_in_cell-andminecraftflat_cache
  h_01M0WKPSQQM8X72BYMV6835TNV: tags
  h_01M0WKPSQQVSYAYWCQ6KW1EFGM: block-tags
  h_01M0WKPSQQ0V1F61RHAQJFRRR3: structure-tags
  h_01M0WKPSQSXED2AMKA97QKPBNX: fluid-tags
  h_01M0WKPSQS0WFVZMA79F9VZHWB: resource-pack-version-97
  h_01M0WKPSQTSP0X9F02F3JM36Y7: item-sprites
  h_01M0WKPSQT0NFAN92DVZKFECY4: ui-sprites
  h_01M0WKPSQVCMCRTT73KP1DQRPR: fixed-bugs-in-263-snapshot-10
  h_01M0WKPSR7CGJ01FKPMP9KJY85: get-the-snapshot
---

We've safely made it to 26.3 Snapshot 10! This week, the Dappled Forest panorama has made its way to the main menu, bringing cozy fall vibes every time you launch the game. This snapshot also includes a variety of technical changes and improvements, so dig in!

Happy mining!

## New Features

### Realms

- Added a new Realms introduction screen showcasing Realms key features
  - Accessible from the "Add Realm" button
  - Automatically shown when entering Realms if a trial is available

## Changes

- The Main Menu now has an updated background panorama showing the new Dappled Forest biome with an Abandoned Camp
- Changed the Adventure Mode icon in the Game Mode Switcher to the Buried Treasure Map
- Improvements to performance when trying to locate structures
- Reverted recent changes to Drowned behavior and animations from this release cycle

### Minor Tweaks to Blocks, Items and Entities

- Enchantments now apply to items being damaged from protecting an Undead mob from the sun
- Teleporting randomly after eating a Chorus Fruit now shows particles into the direction of the teleportation

### Explorer Maps

- The following Explorer Maps have been renamed to have more consistent naming
  - Ocean Monument Explore Map -\> Ocean Monument Map
  - Swamp Hut Explorer Map -\> Swamp Hut Map
  - Trial Chambers Explorer Map -\> Buried Trial Chambers Map
  - Woodland Mansion Explorer Map -\> Woodland Mansion Map
  - Jungle Pyramid Explorer Map -\> Jungle Pyramid Map

### Accessibility

- Subtitles now point to the most recent sound in range

## Technical Changes

- The Data Pack version is now 118.0
- The Resource Pack version is now 97.0
- The none swing animation type has been readded
  - This affects the /swing command as well as the minecraft:attack_animation and minecraft:interact_animation components

## Data Pack Version 118

### Commands

#### Added compute

- Evaluates minecraft:number_provider in various contexts
- In all contexts origin is set to current command context position, while this entity is set to @s

Syntax:

- /compute \<target\> \<provider\> \[\<scale\>\|integer\], where:
  - \<target\> - one of:
    - default - runs provider in minecraft:command_compute_default context, where only common arguments (position and this entity) are available
    - block \<pos\> - runs provider in minecraft:command_compute_position context, where block state and block position are set based on block at position \<pos\>
    - entity \<entity selector\> - runs provider in minecraft:command_compute_entity context, where target_entity is set to selector result
  - \<provider\> - either an element of minecraft:number_provider registry or inline value
  - \<scale\> - optional scale value, defaults to 1.0
    - Final result will be multiplied by \<scale\> and rounded towards negative infinity
  - integer - optional marker to use integer mode
    - Due to truncation between intermediate steps this mode is not equivalent to float mode even if scale is 1.0

#### Changes to data

- Added new source to /data modify ... append\|insert\|merge\|prepend\|set called compute
- New source will evaluate a minecraft:number_provider and then provide the result either as an integer or a float tag
- Syntax: compute \<target\> \<provider\> \[integer\], where the syntax of target, provider and integer is the same as in /compute function
- Example: /data modify storage foo bar set compute entity @n\[type=minecraft:armor_stand\] {type:score,target:{type:context,target:target_entity},score:baz}

### Data Components

#### Changed minecraft:consumable

- Added a new optional field to the teleport_randomly consume effect:
  - directional_particles - boolean, whether to show a particle trail into the direction of the teleportation
    - If not present, defaults to true

#### Updated minecraft:block_transformer

- Contents have been moved to a separate registry
- Component must now always refer to minecraft:block_transformer registry - existing inline components are removed

#### Changed minecraft:attack_animation and minecraft:interact_animation

- The duration field is now a non-negative integer

### Loot Tables

#### Loot Table Types

##### Added minecraft:command_compute_default

- Currently used for /compute default command
- It takes the following parameters:
  - origin, the position at which the command was executed
  - this entity, the @s entity of the command being executed (optional)

##### Added minecraft:command_compute_position

- Currently used for /compute block command
- It takes the following parameters:
  - Everything included in minecraft:command_compute_default
  - block_entity, the block entity of the block at the position given in a command
  - block_state, the current state of the block at the position given in a command

##### Added minecraft:command_compute_entity

- Currently used for /compute entity command
- It takes the following parameters:
  - Everything included in minecraft:command_compute_default
  - target_entity, entity selected by the selector given in a command

### Loot Functions

#### Changed minecraft:set_loot_table

- Removed unused field type
- The tag field, previously known as name, has been renamed to loot_table_id

### Block Transformers

- Added minecraft:block_transformer registry containing rules for transforming a block into another block
- Format: list of objects with fields:
  - block_state_provider - Block State Provider, used to provide the state for the transformed block
    - If the Block State Provider returns no result (as by rule_based_state_provider, for example), the next rule in the list will be attempted
    - The set of Block State Providers are the same as the Block State Providers used in World Generation
  - sound - optional field, Sound Event to play on interaction, e.g. minecraft:item.axe.strip
    - If not present, defaults to play no Sound Event
  - particle - optional field, particles to play on interaction
    - If not present, defaults to none
      - none
      - scrape
      - wax_on
      - wax_off
  - disallowed_faces - optional field, list of Directions specifying which faces on the clicked Block that cannot be interacted with
    - If a disallowed face is interacted with, the next rule in the list will be attempted
    - If not present, defaults to an empty list
    - Values:
      - up
      - down
      - north
      - south
      - east
      - west
  - loot - optional Loot Table, the Loot Table to use for dropping items on a successful transformation, e.g. minecraft:till/rooted_dirt
    - If not present, defaults to using no Loot Table
  - drop_strategy - optional field, configures from where in the Block any loot should drop
    - If not present, defaults to from_middle
    - Values:
      - from_middle - from the middle of the Block
      - clicked_face - from the face interacted with
  - update_from_neighbors - optional Boolean, if the transformed block should update based on neighboring blocks. This allows e.g. fences to connect
    - If not present, defaults to true
  - transform_type - optional field, configures how nearby blocks should be affected by the transformation
    - If not present, defaults to single_block
    - Values:
      - single_block - only affects the Block interacted with
      - copper_chest - if input and output blocks are both copper chests of any weathering state, waxed or unwaxed, this transformation will affect both sides of a double chest
  - consume_on_use - optional Boolean, determines if the item should be consumed or not
    - Only applies to stackable items
    - If not present, defaults to true
  - item_damage_per_use - optional Integer, determines how much damage the item takes with each use
    - Only applies to non-stackable items
    - If not present, defaults to 0
- Default values in vanilla:
  - minecraft:shovel - default value for shovels
  - minecraft:axe - default value for axes
  - minecraft:hoe - default value for hoes

### World Generation

#### Noise Settings

- Renamed preliminary_surface_level to chunk_surface_level
  - This Density Function is no longer implicitly interpolated across the entire chunk
- The ore_veins_enabled field has been removed, and replaced by the minecraft:ore_vein Material Rule
- Removed noise.size_horizontal and noise.size_vertical fields, these are now specified in the interpolated density function
- Added optional debug_functions field - list of objects with fields, Density Function values to show in the chunk_generation_stats debug entry
  - Fields:
    - label - string, label to identify this Density Function
    - function - Density Function, the Density Function to compute and show at the player position
  - If not specified, no density function values will be shown

#### Material Rules

##### Added minecraft:ore_vein

- Format: object with fields:
  - ore_block - Block State, the ore block to place
  - raw_ore_block - Block State, the raw ore block to place
  - filler_block - Block State, the filler block to place
  - raw_ore_chance - float between 0 and 1, the probability for a raw_ore_block to be placed instead of an ore_block
  - density - Density Function, the probability between 0 and 1 for the ore vein to replace a block
    - If 0 or lower, no block will be replaced
  - richness - Density Function, the probability between 0 and 1 for ore_block or raw_ore_block to be placed (as opposed to filler_block)
    - If 0 or lower, all blocks will be filler_block
    - If 1 or greater, no blocks will be filler_block
  - filler_gap - Density Function, acts as an override to richness: if positive, filler_block will always be placed

##### Changed minecraft:noise

The following fields have been introduced:

- shift_x - optional Density Function, a domain warp to apply on x
  - If not specified, no warping will be applied (equivalent to 0)
- shift_y - optional Density Function, a domain warp to apply on y
  - If not specified, no warping will be applied (equivalent to 0)
- shift_z - optional Density Function, a domain warp to apply on z
  - If not specified, no warping will be applied (equivalent to 0)

##### Removed minecraft:shifted_noise

- Replaced by minecraft:noise

##### Updated minecraft:interpolated

Added fields:

- cell_size_xz - positive int, size in blocks of the interpolation grid cells on the XZ axes
- cell_size_y - positive int, size in blocks of the interpolation grid cells on the Y axis

##### Updated minecraft:cache (renamed from minecraft:cache_once)

- No format change

##### Removed minecraft:cache_2d, minecraft:cache_all_in_cell, and minecraft:flat_cache

- May be replaced with minecraft:cache
- minecraft:slice may be used to always pick Y=0, as formerly handled by minecraft:flat_cache

### Tags

#### Block Tags

- Added #nether_portal_frame - blocks that can be used to create a Nether Portal
- Added #conduit_effect_block - blocks that can be used to build a Conduit

#### Structure Tags

- Renamed #on_woodland_explorer_maps to #on_woodland_mansion_maps
- Renamed #on_ocean_explorer_maps to #on_ocean_monument_maps
- Renamed #on_jungle_explorer_maps to #on_jungle_pyramid_maps
- Renamed #on_swamp_explorer_maps to #on_swamp_hut_maps
- Renamed #on_trial_explorer_map to #on_buried_trial_chambers_map

#### Fluid Tags

- Added #axolotl_try_find_liquid for all liquids Axolotls are trying to find
- Added #dolphin_try_find_liquid for all liquids Dolphins are trying to find
- Added #frog_try_find_land_near_liquid for all liquids Frogs are trying to find land near to
- Added #entity_floatable for all fluids that make entities float

## Resource Pack Version 97

### Item Sprites

- Renamed item/trial_chamber_map.png to item/buried_trial_chambers_map.png
- Renamed item/jungle_temple_map.png to item/jungle_pyramid_map.png

### UI Sprites

- Added new UI textures:
  - gui/realms/friends.png
  - gui/realms/minigames.png
  - gui/realms/private_server.png
  - gui/sprites/widget/realms_button.png
  - gui/sprites/widget/realms_button_disabled.png
  - gui/sprites/widget/realms_button_highlighted.png

## Fixed bugs in 26.3 Snapshot 10

- [MC-102881](https://bugs.mojang.com/browse/MC-102881) - Shulkers do not emit any particles when teleporting
- [MC-245030](https://bugs.mojang.com/browse/MC-245030) - The "Bee buzzes" closed caption only appears when a bee buzzes for the first time
- [MC-254547](https://bugs.mojang.com/browse/MC-254547) - Villagers do not level up when exiting the world immediately after filling their experience bar
- [MC-258347](https://bugs.mojang.com/browse/MC-258347) - Endermen no longer create an extra trail of particles when teleporting
- [MC-265423](https://bugs.mojang.com/browse/MC-265423) - When villagers acquire enough experience to level up more than once, they only gain a single level
- [MC-268145](https://bugs.mojang.com/browse/MC-268145) - cache_once density functions don't work
- [MC-279586](https://bugs.mojang.com/browse/MC-279586) - Closed captions continue to fade when their sound plays again from farther away, causing visual delays in the overlay
- [MC-296368](https://bugs.mojang.com/browse/MC-296368) - The entity.happy_ghast.riding sound event displays no closed caption
- [MC-303360](https://bugs.mojang.com/browse/MC-303360) - Flat-cached shifted noise density functions are recalculated for every Y level
- [MC-306012](https://bugs.mojang.com/browse/MC-306012) - Armadillos can escape fenced areas when at the edge of the simulation distance
- [MC-306778](https://bugs.mojang.com/browse/MC-306778) - The fog color no longer transitions smoothly when the weather changes at night while under the Night Vision effect
- [MC-309872](https://bugs.mojang.com/browse/MC-309872) - The system freezes when pressing the Windows key with the "Exclusive Fullscreen" option enabled
- [MC-310139](https://bugs.mojang.com/browse/MC-310139) - Mob spawning checks for biomes incorrectly at biome borders
- [MC-310181](https://bugs.mojang.com/browse/MC-310181) - The commands.setworldspawn.failure.not_overworld string lowercases the dimension name "Overworld"
- [MC-310182](https://bugs.mojang.com/browse/MC-310182) - Some descriptive tooltip strings lack a period, unlike similar strings
- [MC-310184](https://bugs.mojang.com/browse/MC-310184) - The commands.bossbar.set.max.unchanged string abbreviates "maximum" to "max", unlike similar strings
- [MC-310186](https://bugs.mojang.com/browse/MC-310186) - The options.languageWarning string lacks a period, unlike similar strings
- [MC-310187](https://bugs.mojang.com/browse/MC-310187) - The commands.bossbar.get.visible.visible string uses "shown" instead of "visible", unlike similar strings
- [MC-310188](https://bugs.mojang.com/browse/MC-310188) - Some /tag list success strings always pluralize the word "tags"
- [MC-310233](https://bugs.mojang.com/browse/MC-310233) - Some strings that contain percentages have spaces before the percentage sign, unlike similar strings
- [MC-310236](https://bugs.mojang.com/browse/MC-310236) - Some strings use an ampersand instead of the word "and", unlike similar strings
- [MC-310544](https://bugs.mojang.com/browse/MC-310544) - Changing the difficulty in singleplayer now requires commands to be enabled
- [MC-310568](https://bugs.mojang.com/browse/MC-310568) - Significant performance regression on Intel dGPUs with the OpenGL rendering backend
- [MC-310634](https://bugs.mojang.com/browse/MC-310634) - The birch tree in the campsite_old_growth_birch_forest_4 abandoned camp structure never generates
- [MC-310635](https://bugs.mojang.com/browse/MC-310635) - /item override and /item fill with a contents slot source targeting the charged_projectiles component freezes the server for several seconds
- [MC-310665](https://bugs.mojang.com/browse/MC-310665) - The llama decoration texture of black carpets contains a stray transparent pixel
- [MC-310676](https://bugs.mojang.com/browse/MC-310676) - The savanna_lamp_post_01 village structure contains a trailing closing square bracket in the jigsaw block's NBT
- [MC-310693](https://bugs.mojang.com/browse/MC-310693) - The game sometimes freezes when attempting to open chests in abandoned camps that contain maps
- [MC-310719](https://bugs.mojang.com/browse/MC-310719) - copyTextureToBuffer binds depth textures as a color attachment with the OpenGL rendering backend
- [MC-310738](https://bugs.mojang.com/browse/MC-310738) - The names of exploration maps are inconsistent
- [MC-310776](https://bugs.mojang.com/browse/MC-310776) - The filled_map.jungle_temple string refers to jungle pyramids as "jungle temples"
- [MC-310784](https://bugs.mojang.com/browse/MC-310784) - Water flickers a lot when viewed from above on some systems
- [MC-310832](https://bugs.mojang.com/browse/MC-310832) - The clear region uses mip 0 dimensions while attaching a different mip level
- [MC-310886](https://bugs.mojang.com/browse/MC-310886) - test_instance.description.dimension displays as a raw translation key
- [MC-310941](https://bugs.mojang.com/browse/MC-310941) - No closed caption is produced by the sound played when riding a nautilus
- [MC-310971](https://bugs.mojang.com/browse/MC-310971) - Shelf mushrooms block saplings from growing
- [MC-310994](https://bugs.mojang.com/browse/MC-310994) - The tooltip for the "Allow Commands" button in the World Options screen doesn't appear after pressing it
- [MC-310995](https://bugs.mojang.com/browse/MC-310995) - Changing the difficulty using commands does not update its corresponding button in the World Options screen
- [MC-310996](https://bugs.mojang.com/browse/MC-310996) - Changing the default game mode does not update its corresponding button in the World Options screen
- [MC-311000](https://bugs.mojang.com/browse/MC-311000) - Toggling the "Allow Commands" option in the World Options menu no longer enables/disables other buttons right away
- [MC-311017](https://bugs.mojang.com/browse/MC-311017) - The glowing outline is inconsistent when wearing enchanted armor compared to unenchanted armor
- [MC-311022](https://bugs.mojang.com/browse/MC-311022) - Equipping boots with Soul Speed as they are broken allows the player to keep their attributes indefinitely
- [MC-311038](https://bugs.mojang.com/browse/MC-311038) - Local coordinates produce inaccurate results compared to previous versions
- [MC-311044](https://bugs.mojang.com/browse/MC-311044) - Straw beds Z-fight when placed in invisible item frames
- [MC-311064](https://bugs.mojang.com/browse/MC-311064) - Cows and Horses only Spawn in a unexplored chunk once
- [MC-311077](https://bugs.mojang.com/browse/MC-311077) - Players can forcibly change their game mode to Survival from the World Options menu after dying in hardcore worlds
- [MC-311093](https://bugs.mojang.com/browse/MC-311093) - Villagers still don't immediately level up when their experience bar is filled
- [MC-311094](https://bugs.mojang.com/browse/MC-311094) - Villager discounts do not apply until the trading window is closed and reopened
- [MC-311115](https://bugs.mojang.com/browse/MC-311115) - invulnerable_time is not retained when a mob converts to another mob, even though Invulnerable is
- [MC-311116](https://bugs.mojang.com/browse/MC-311116) - The name of trial explorer maps does not start with "buried", unlike ancient city & mineshaft maps
- [MC-311148](https://bugs.mojang.com/browse/MC-311148) - Shooting arrows at endermen riding vehicles does not play the arrow hitting sound
- [MC-311151](https://bugs.mojang.com/browse/MC-311151) - The block texture of poplar hanging signs is still inconsistent with the GUI texture
- [MC-311153](https://bugs.mojang.com/browse/MC-311153) - Endermen riding boats/minecarts aren't set on fire by flaming arrows
- [MC-311154](https://bugs.mojang.com/browse/MC-311154) - Arrows pass through endermen riding vehicles
- [MC-311162](https://bugs.mojang.com/browse/MC-311162) - Spectral arrows don't apply Glowing to endermen riding vehicles
- [MC-311164](https://bugs.mojang.com/browse/MC-311164) - Tipped arrows don't apply effects to endermen riding vehicles
- [MC-311188](https://bugs.mojang.com/browse/MC-311188) - Tridents pass through endermen riding vehicles
- [MC-311235](https://bugs.mojang.com/browse/MC-311235) - Upgrading a world from the 1.21.11 world format can cause data from other worlds to get saved inside it
- [MC-311273](https://bugs.mojang.com/browse/MC-311273) - The type field in the set_loot_table item modifier type conflicts with the type field that specifies the item modifier type

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/82cf54c229336e243fbf50d9f2a6a49734731d0d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
