---
title: Minecraft Java Edition - 26.3 Snapshot 2
date: 2026-06-30T14:01:20Z
updated: 2026-06-30T14:01:38Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/47030118645389-Minecraft-Java-Edition-26-3-Snapshot-2
hash:
  h_01KWCDASN94C894AW8WDREE3M4: known-issues
  h_01KWCDASNAA99WTYBKXTMXRCJG: changes
  h_01KWCDASNB4A71PGRRBQ3B1A3Z: minor-tweaks-to-blocks-items-and-entities
  h_01KWCDASNBTWFCP3C2RVE5YES1: order-independent-transparency-oit
  h_01KWCDASNGVY0WG3QSS2FVB9WR: technical-changes
  h_01KWCDASNHGCW86WGP3JJR9EQW: server-properties
  h_01KWCDASNK69163KVQ4FHEG27W: data-pack-versions-1090
  h_01KWCDASNKWF2F1J2X9PJXNCSD: data-components
  h_01KWCDASNK7BVWKV601ZRX81DK: addedminecraftblock_transformer
  h_01KWCDASP0VT0R9QV688ZAK1P1: loot-tables
  h_01KWCDASP041RR1Y0TCGSE2CH1: world-generation
  h_01KWCDASP1XQ4NS7SGHG2DTSNM: features
  h_01KWCDASP1W5TD9PVYEDV1W96A: addedminecraftcopy_properties_providerblock-state-provider
  h_01KWCDASP1HSQ63CMMNCCPET8W: changedminecraftstepped_column_clusterfeature-type
  h_01KWCDASP40HR9HCMVBCTYX3JK: changedminecraftsingle_block_pillarfeature-type
  h_01KWCDASP6MR0BR6DSZB17D34Q: changedminecraftrandom_neighbor_spreadfeature-type
  h_01KWCDASP8Z3XDQX0JG9NRFD5J: addedminecraftoverlayfeature-type
  h_01KWCDASP86VRRFBR8NFQNNJJ1: addedminecraftprojected_random_patchy_squarefeature-type
  h_01KWCDASPASQ8XMGBDFY9NVJ8J: placement-modifiers
  h_01KWCDASPAHCWG1Q9DJ7GW82QM: changedminecraftoffsetplacement-modifier
  h_01KWCDASPB8VVT00Z9WYGEMSCS: noise-settings
  h_01KWCDASPB9Y2N84N6XHCA49S8: spawn-target
  h_01KWCDASPD10N2HJG0BJXRDTTJ: block-predicates
  h_01KWCDASPD49TEDJKNA39XXN35: addedminecraftheight_range
  h_01KWCDASPEZBW730PGJH43RZDT: vertical-anchors
  h_01KWCDASPEPYR23YWHKG68PPD2: carvers
  h_01KWCDASPENJARRVPHFXZ0FZKY: updatedminecraftcavecarver-type
  h_01KWCDASPJ7V6JHV7EKKNAYSFB: updatedminecraftcanyoncarver-type
  h_01KWCDASPKHJXPCZR70C5P8BSS: removedminecraftnether_cavecarver-type
  h_01KWCDASPMY20HKDP2RNFQVTVC: int-providers
  h_01KWCDASPMZNYYJSH4CYBW7GTD: addedminecraftvery_biased_to_bottomint-provider-type
  h_01KWCDASPN3MEQN63FA33682RE: block-tags
  h_01KWCDASPNTXDD1A41TDC68H1X: item-tags
  h_01KWCDASPNMXZ7C3YKBSDW30S7: resource-pack-version-900
  h_01KWCDASPP502J0TA069WCFTV4: particles
  h_01KWCDASPPEJQQ6N2RKJNX147F: shaders--post-process-effects
  h_01KWCDASPPZVDHZN9FQRCP78HP: order-independent-transparency-oit-related-shader-changes
  h_01KWCDASPZJS3DT5T7ASCYX554: fixed-bugs-in-263-snapshot-2
  h_01KWCDASQ7CMF7AD14TBJBKZK5: get-the-snapshot
---

We're back with the second snapshot for 26.3! This week brings a new rendering option designed to improve transparency handling in Minecraft Java. We've also optimized certain mob behaviors when players aren't nearby, made a few gameplay adjustments, including technical changes and fixes.

Happy mining!

## Known Issues

- When using Vulkan on Mac the world will not render, instead showing a pink screen
- The lighting on entities is not correct, rendering e.g. the top side too dark

## Changes

- Persistent mobs' random walk/swim behaviors will now deactivate when players are not nearby, in the same way as non-persistent mobs
- Replaced current "Improved Transparency" approach with a new order-independent transparency algorithm which is expected to be much better at solving translucency issues
- When using a Shield together with a Hoe or a Shovel, raising the Shield will take precedence over tilling and pathmaking

### Minor Tweaks to Blocks, Items and Entities

- Drowned with Tridents will now use a melee attack if the player is within 3 blocks of them

### Order-independent transparency (OIT)

- Generally, translucent surfaces need to be rendered back-to-front to avoid visual issues
  - In order to do so, the translucent geometry has to be sorted before rendering
  - This is very expensive and even with perfect sorting of individual triangles, intersecting triangles are not possible to render correctly
- Before this snapshot, the "Improved Transparency" video setting attempted to mitigate translucency-related visual issues
  - It did this by rendering different types of translucent objects (entities, particles, water, etc.) to different textures that were later combined to create the final image
  - This allowed us to fix some of the issues with some performance impact
  - However, it introduced some other less noticeable issues
- The "Improved Transparency" video setting will now instead enable a new order-independent transparency algorithm (which we will refer to as OIT)
  - This makes it possible to render translucent objects in any order without sorting
  - It fixes all existing major translucency-related visual issues (such as certain objects disappearing when viewed through translucent objects)
  - However, the algorithm is an approximation, and so it introduces some new minor visual artifacts (such as the color of clouds being somewhat incorrect when viewed through multiple layers of translucent surfaces)
- We expect OIT to have a higher performance impact than the previous implementation of "Improved Transparency"
- When "Improved Transparency" is turned off, the behavior hasn't meaningfully changed and the game will still prioritize performance over correctness while sorting geometry as necessary

> **Developer's Note**: *Special thanks to Rubén Osorio López, Jozufozu, and the Minecraft modding community in general for sharing the information that helped us to deliver this.*

## Technical Changes

- The Data Pack version is now 109.0
- The Resource Pack version is now 90.0
- The definition field from the blocks.json data generation report has been removed

### Server Properties

- The white-list property is now true by default

## Data Pack Versions 109.0

### Data Components

#### Added minecraft:block_transformer

- This component allows items to transform a block into another block on player interaction
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
    - If not present, defaults to 1

### Loot Tables

- Added till/rooted_dirt loot table for drops when Rooted Dirt is tilled with a hoe

### World Generation

- Cave Air is no longer generated in Nether caves

#### Features

##### Added minecraft:copy_properties_provider Block State Provider

Copies common Block State properties from the Block at the evaluated position to the resulting state Format: object with fields:

- block_state_provider: Block State Provider, provides the Block State which the copied properties are copied on top of
  - Only properties common between both the source and the target blocks will be copied

##### Changed minecraft:stepped_column_cluster Feature Type

Renamed from minecraft:basalt_columns. Now exposes more control over the feature functionality.

Format changes:

- Added field block: Block state provider for which block to place
- Added field can_replace: Block predicate for which blocks can be replaced by the column
- Added field continue_through: Block predicate for which pre-existing blocks to accept as part of a column
- Added field cannot_place_on: Block ID, list of block IDs or hash-prefixed block tag ID representing which blocks are avoided when starting placement
- Renamed field reach to column_reach
- Added field column_count: int provider (between 1 and 150) - the number of columns to generate
- Added field cluster_reach: int provider (between 0 and 13) - the size of the square to attempt to generate columns in
  - The effective reach is also limited by height

##### Changed minecraft:single_block_pillar Feature Type

Renamed from minecraft:basalt_pillar. Now exposes more control over the feature functionality.

Format changes:

- Added field block: Block state provider for which block to place
- Added field can_replace: Block predicate for which blocks to replace
- Added field direction: Vertical direction of the pillar - one of up and down
- Added field chance_to_continue: Optional probability between 0 and 1 (default: 1) that the pillar continues another block (assuming can_replace matches)
- Added field cap_feature: Optional Placed Feature placed at the end of the pillar

##### Changed minecraft:random_neighbor_spread Feature Type

Renamed from minecraft:glowstone_blob. Now exposes more control over the feature. Places blocks randomly in an area starting at the origin, each block placing so it has exactly one accepted neighbor.

Format changes:

- Added field block: Block state provider for which block to place
- Added field accepted_neighbors: Block ID, list of Block IDs or hash-prefixed Block Tag for which blocks count as a valid neighbor
- Added field can_replace: Block predicate for which blocks to replace
- Added field attempts: Int provider between 1 and 3000 for how many placements attempts to make
- Added field xz_offset: Int provider between -16 and 16 for what offsets to try along the x and z axes
- Added field y_offset: Int provider between -16 and 16 for what offsets to try along the y axis

##### Added minecraft:overlay Feature Type

Places a set of features in the same location. Note that as opposed to the minecraft:sequence Feature Type, all features are placed regardless of individual placement success.

Format:

- features: Placed Feature ID, non-empty list of Placed Feature IDs or hash-prefixed Placed Feature Tag for the features to place

##### Added minecraft:projected_random_patchy_square Feature Type

Generates a square where each block is randomly placed or not placed with its probability based on the distance from the center of the square, with the center more likely to generate than the edges. Each placed block can be projected downwards if the appropriate conditions are met.

Format:

- block: Block state provider for which block to place
- project_through: Block Predicate for which blocks are considered "empty" and should be projected through
- size: Int provider between 1 and 16 that determines the size of the square as measured from the center to the edge
- max_projection_height: Non-negative integer representing the maximum change in y level from the original height to the placement height for a block in the square

#### Placement Modifiers

##### Changed minecraft:offset Placement Modifier

Renamed from random_offset.

Format:

- Removed fields xz_spread and y_spread
- Added fields x, y, z: Integer providers between -16 and 16 specifiying the axis-specific offset

#### Noise Settings

##### Spawn Target

The spawn_target field has been updated to allow use of any Density Function, instead of just a subset of those defined within the noise_router field.

The suitability of a candidate spawn position is determined by evaluating, in some arbitrary n-dimensional space, the squared Euclidean distance to a set of target hypercubes.

For example, one axis might be temperature and the second erosion - and suitability determined by distance to the square between temperature=0.1, erosion=0.2 and temperature=0.3, erosion=0.5. This would prefer any candidate spawn within those ranges equally, while penalizing candidate spawns very far out of that range.

Format: list of target hypercubes

- Target format: map between Density Function ID and a range on that axis:
  - Range is specified as one of:
    - Float, an exact target value
    - Array of 2 floats, a range of target values in form \[min, max\]
    - An object with fields:
      - min - float, the minimum value of the target range
      - max - float, the maximum value of the target range

#### Block Predicates

##### Added minecraft:height_range

Checks the height of the position against a given range.

Format:

- min_inclusive: Vertical Anchor describing the minimum height required
- max_inclusive: Vertical Anchor describing the maximum height required

#### Vertical Anchors

- Added a new option for Vertical Anchors: relative_to_sea_level - specifies an offset to the sea level of the dimension

#### Carvers

- The worldgen/configured_carver registry has been renamed to worldgen/carver

##### Updated minecraft:cave Carver Type

- All fields previously under the config field have been inlined to the top-level
- Added count field - non-negative Int Provider, the number of Cave tunnels to create from a seed chunk
- Renamed yScale to room_vertical_radius_multiplier
- Added optional start_vertical_radius_multiplier field - Float Provider, acts as a multiplier for the vertical radius of the first segment in each tunnel
  - If not specified, defaults to 1.0
- Added thickness field - non-negative Float Provider, acts as a multiplier for the radius of carved tunnels
- Added optional weird_thickness_bias field - Boolean
  - If true, thickness will be multiplied by, with a 10% chance: random(0, 1) \* random(0, 3) + 1
  - If not specified, defaults to false
- Removed replaceable field, carvers will replace any block (excluding features)
- Removed lava_level field, fluids are now always selected by the aquifer or sea_level configuration in the dimension
- Removed debug_settings field

##### Updated minecraft:canyon Carver Type

- All fields previously under the config field have been inlined to the top-level
- Renamed and moved yScale to shape.y_scale
- Removed replaceable field, carvers will replace any block (excluding features)
- Removed lava_level field, fluids are now always selected by the aquifer or sea_level configuration in the dimension
- Removed debug_settings field

##### Removed minecraft:nether_cave Carver Type

- Replaced by minecraft:cave Carver Type

### Int Providers

#### Added minecraft:very_biased_to_bottom Int Provider Type

Picks a random value in the provided range, with a quadratic bias towards the minimum value.

Format: object with fields:

- min_inclusive - Integer, the minimum selected value (inclusive)
- max_inclusive - Integer, the maximum selected value (inclusive)

#### Block Tags

- Added #turns_into_dirt_path - contains all blocks that turn into Dirt Path blocks when a Shovel is used for pathmaking
- Removed #overworld_carver_replaceables and #nether_carver_replaceables

#### Item Tags

- Added #dowses_campfires - items that can dowse a lit Campfire block

## Resource Pack Version 90.0

- The texture of the Shelf Mushroom has been updated

### Particles

- Added new Particle textures:
  - shelf_mushroom_particle.png

### Shaders & Post-process Effects

> **Developer's Note**: *Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future.*

#### Order-independent Transparency (OIT)-related Shader Changes

- Added new shaders to support order-independent transparency:
  - core/oit_composite.fsh
  - include/oit.glsl
  - include/oit_add_transmittance.glsl
  - include/oit_common.glsl
  - include/oit_depth_bounds.glsl
  - include/oit_depth_sample.glsl
  - include/oit_sample.glsl
- Extracted the texture sampling logic from core/terrain.fsh into include/texture_sampling.glsl
- Renamed the following core shaders:
  - core/rendertype_clouds.vsh -\> core/clouds.vsh
  - core/rendertype_clouds.fsh -\> core/clouds.fsh
  - core/rendertype_world_border.vsh -\> core/world_border.vsh
  - core/rendertype_world_border.fsh -\> core/world_border.fsh
- Updated core shaders to support order-independent transparency
  - Introduced new defines:
    - OIT - A boolean indicating if OIT is enabled
    - OIT_DEPTH_BOUNDS - A boolean indicating if the depth bounds pass is being executed
    - OIT_TRANSMITTANCE - A boolean indicating if the transmittance pass is being executed
    - OIT_ACCUMULATE - A boolean indicating if the accumulate pass is being executed
    - OIT_ALPHA_ONLY - A boolean indicating if either the depth bounds or transmittance pass is being executed
    - OIT_ADDITIVE - A boolean indicating that the OIT algorithm should emulate additive blending for the executing pipeline
    - OIT_OPAQUE_PARTS_THRESHOLD - A float determining above which alpha threshold a fragment should be considered solid and not go through OIT
    - WAVELET_RANK - An integer internal to the OIT algorithm
    - COEFF_COUNT - An integer internal to the OIT algorithm
    - COEFF_ATTACHMENT_COUNT - An integer internal to the OIT algorithm
    - B3D_IS_ZERO_TO_ONE - A boolean indicating if the current rendering backend uses the depth range of \[0, 1\], it is available globally to all shaders independently of the OIT setting
    - Affected shaders:
      - core/block.fsh
      - core/block.vsh
      - core/clouds.fsh
      - core/clouds.vsh
      - core/entity.fsh
      - core/entity.vsh
      - core/item.fsh
      - core/item.vsh
      - core/particle.fsh
      - core/position_color.fsh
      - core/rendertype_beacon_beam.fsh
      - core/rendertype_clouds.fsh
      - core/rendertype_crumbling.fsh
      - core/rendertype_entity_shadow.fsh
      - core/rendertype_lightning.fsh
      - core/rendertype_lines.fsh
      - core/rendertype_world_border.fsh
      - core/terrain.fsh
      - core/terrain.vsh
      - core/text.fsh
      - core/text_background.fsh
      - core/world_border.fsh
      - core/world_border.vsh
- Removed the old transparency post chain:
  - post_effect/transparency.json
  - shaders/post/transparency.fsh

## Fixed bugs in 26.3 Snapshot 2

- [MC-161885](https://bugs.mojang.com/browse/MC-161885) - Many transparent things do not render behind slimes
- [MC-161898](https://bugs.mojang.com/browse/MC-161898) - Transparent particles make other particles invisible
- [MC-161926](https://bugs.mojang.com/browse/MC-161926) - The block breaking animation is more transparent when mining ice or stained glass
- [MC-168653](https://bugs.mojang.com/browse/MC-168653) - Mobs, particles, clouds, water and transparent blocks don't render behind the transparent parts of shulker bullets
- [MC-190203](https://bugs.mojang.com/browse/MC-190203) - Transparent and specially rendered blocks, entities, clouds, water and particles don't render behind wind charges, and charged creeper, wither and breeze armor
- [MC-202197](https://bugs.mojang.com/browse/MC-202197) - Entities' name tag background is rendered behind transparent things
- [MC-210584](https://bugs.mojang.com/browse/MC-210584) - Semi-transparent textures on an item that doesn't have it by default doesn't render water behind it
- [MC-223559](https://bugs.mojang.com/browse/MC-223559) - Transparent blocks, particles, and clouds are not rendered behind semi-transparent marker armor stands
- [MC-229405](https://bugs.mojang.com/browse/MC-229405) - The inside of boats blocks the rendering of most translucent objects with the "Improved Transparency" option enabled
- [MC-252369](https://bugs.mojang.com/browse/MC-252369) - Data packs can fail to load due to a feature cycle when one does not exist
- [MC-259812](https://bugs.mojang.com/browse/MC-259812) - Block and item displays, beds, clouds, signs, shulker boxes, and semi-transparent blocks and entities don't render behind text displays
- [MC-265743](https://bugs.mojang.com/browse/MC-265743) - Entities, block entities, clouds and semi-transparent blocks are always rendered in front of text displays with see_through enabled
- [MC-271069](https://bugs.mojang.com/browse/MC-271069) - Item entities appear to fly towards the player when picked up by a dolphin that isn't being rendered
- [MC-275111](https://bugs.mojang.com/browse/MC-275111) - Two animals in a boat look sideways instead of at the player when lured
- [MC-295678](https://bugs.mojang.com/browse/MC-295678) - Translucent blocks above water flicker when crossing chunk borders
- [MC-296006](https://bugs.mojang.com/browse/MC-296006) - Entities do not face the player correctly whilst in a boat
- [MC-298659](https://bugs.mojang.com/browse/MC-298659) - Translucent blocks and some entities render above text displays with see_through enabled
- [MC-303626](https://bugs.mojang.com/browse/MC-303626) - Block hitboxes, particles, semi-transparent blocks and non-block items render behind entity hitboxes with the "Improved Transparency" option enabled
- [MC-305422](https://bugs.mojang.com/browse/MC-305422) - Players can sometimes get kicked due to a waypoint packet the client fails to handle
- [MC-306127](https://bugs.mojang.com/browse/MC-306127) - Block outlines are no longer visible behind translucent items
- [MC-306156](https://bugs.mojang.com/browse/MC-306156) - Breezes, slimes and players between translucent blocks or fluids appear behind them if "Improved Transparency" is enabled
- [MC-306231](https://bugs.mojang.com/browse/MC-306231) - Boats are filled with water when viewed through translucent blocks with the "Improved Transparency" option enabled
- [MC-306318](https://bugs.mojang.com/browse/MC-306318) - Translucent items render through the head of players with a translucent item equipped on their head with "Improved Transparency" enabled
- [MC-307285](https://bugs.mojang.com/browse/MC-307285) - Translucent blocks don't render behind sulfur cubes
- [MC-307345](https://bugs.mojang.com/browse/MC-307345) - The smoke particles produced by potent sulfur do not render behind stained glass
- [MC-307902](https://bugs.mojang.com/browse/MC-307902) - Partially transparent blocks inside sulfur cubes don't render correctly
- [MC-308798](https://bugs.mojang.com/browse/MC-308798) - Dolphins take much longer to pick up items
- [MC-309022](https://bugs.mojang.com/browse/MC-309022) - Shelf mushrooms generate facing the wrong direction
- [MC-309027](https://bugs.mojang.com/browse/MC-309027) - The success message of /teleport with coordinates specified reports that it affected 0 entities
- [MC-309043](https://bugs.mojang.com/browse/MC-309043) - Carpets can no longer be crafted
- [MC-309056](https://bugs.mojang.com/browse/MC-309056) - Poplar saplings are not destroyed by water
- [MC-309067](https://bugs.mojang.com/browse/MC-309067) - Wool slabs and stairs cannot be used as fuel
- [MC-309075](https://bugs.mojang.com/browse/MC-309075) - Using bone meal on a shelf mushroom a player is standing on causes them to pass through it
- [MC-309081](https://bugs.mojang.com/browse/MC-309081) - Decorated pots and chorus flowers can be destroyed by projectiles in Adventure mode
- [MC-309082](https://bugs.mojang.com/browse/MC-309082) - Wandering traders do not sell poplar logs
- [MC-309084](https://bugs.mojang.com/browse/MC-309084) - Shelf mushrooms' model sticks out of the slot in the hotbar
- [MC-309105](https://bugs.mojang.com/browse/MC-309105) - Wool stairs and slabs are not broken faster when using shears
- [MC-309117](https://bugs.mojang.com/browse/MC-309117) - Grass in dappled forests and poplar leaves appear green on maps
- [MC-309123](https://bugs.mojang.com/browse/MC-309123) - The block breaking particles of shelf mushrooms are not displayed correctly
- [MC-309133](https://bugs.mojang.com/browse/MC-309133) - The front texture of poplar signs is inconsistent with the front textures of other signs
- [MC-309136](https://bugs.mojang.com/browse/MC-309136) - The collision box of shelf mushrooms is too large
- [MC-309173](https://bugs.mojang.com/browse/MC-309173) - The item model of shelf mushrooms displays the large shelf mushroom block model, even though the item places small ones
- [MC-309184](https://bugs.mojang.com/browse/MC-309184) - Specifying multiple features of type no_op in a data pack prevents the world from loading
- [MC-309205](https://bugs.mojang.com/browse/MC-309205) - Poplar saplings cannot be used as fuel
- [MC-309206](https://bugs.mojang.com/browse/MC-309206) - Cobwebs are not destroyed by water
- [MC-309275](https://bugs.mojang.com/browse/MC-309275) - The texture of the top halves of poplar doors has three miscolored pixels
- [MC-309302](https://bugs.mojang.com/browse/MC-309302) - Poplar saplings are not in #sapling
- [MC-309330](https://bugs.mojang.com/browse/MC-309330) - The item texture of poplar doors doesn't have any hinges unlike the item textures of other doors

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/a6e2ae24c95dc838456927661a82434d26936d2f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
