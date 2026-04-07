---
title: Minecraft Java Edition - 26.2 Snapshot 1
date: 2026-04-07T14:49:53Z
updated: 2026-04-07T14:50:21Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44898619266317-Minecraft-Java-Edition-26-2-Snapshot-1
hash:
  h_01KNM6PAHNREA7YYANAKC8A1AV: new-features
  h_01KNM6PAHPYYJ6RFQYE4XHPYXY: sulfur-cube-mob
  h_01KNM6PAHS4EKHXC5HGGC3DMCZ: sulfur-cube-archetypes
  h_01KNM6PAJ0XEM9V15S7DJGK2C8: cinnabar-and-sulfur-block-sets
  h_01KNM6PAJ1SQ55G4FVHNEQ36HD: sulfur-caves-biome
  h_01KNM6PAJ2PXVHQQYBBHAKQ8JG: potent-sulfur
  h_01KNM6PAJ350BTAJ7BXGFNV6XX: sulfur-spring
  h_01KNM6PAJ5782GYM1SWD0Z4QC2: vulkan-support
  h_01KNM6PAJ8MMJF9KCRA3Y1GXE2: graphics-api-video-setting
  h_01KNM6PAJBJPN3VZZYY2MG8HPM: changes
  h_01KNM6PAJERYWVR6P91Q17CEDR: minor-tweaks-to-blocks-items-and-entities
  h_01KNM6PAJGWFDG5N0EVYTVAK0J: sounds
  h_01KNM6PAJGNNCZDFZZZD4MSAS7: technical-changes
  h_01KNM6PAJKQCXYCY96WEP8HP53: data-pack-version-1012
  h_01KNM6PAK1SMNT93CMDATQ7VBN: commands
  h_01KNM6PAK20A8XDSTRCB9Y5YVD: attributes
  h_01KNM6PAK2Z4SKZJ2256D3R6DB: addedminecraftbounciness
  h_01KNM6PAK6JJZJYQKDWTWWAE9C: addedminecraftfriction_modifier
  h_01KNM6PAKDC9TK3C19GKKY0E13: addedminecraftair_drag_modifier
  h_01KNM6PAKK0XWYCWQ8XR9VNYP6: updated-the-minimum-value-ofminecraftknockback_resistance
  h_01KNM6PAKMBHV7KCT49EGVR2ZB: data-components
  h_01KNM6PAKM5YTVE1QWRQCZ6J0K: addedminecraftsulfur_cube_content
  h_01KNM6PAKPGXXA6CQZG8PMWMRN: world-generation
  h_01KNM6PAKPASP8GBTYSM749WW9: dripstone-features
  h_01KNM6PAMDY0JNRYGH96AS1HTG: addednoise_gradientsurface-rule
  h_01KNM6PAMEZPZCRNDEV6NSW6N1: addedsequencefeature-type
  h_01KNM6PAMFVXTV17GRTBWGJMWY: addedtemplatefeature-type
  h_01KNM6PAMH2XKXCEPCTNYCFZ25: dimension-types
  h_01KNM6PAMHKJZMZK0EX2BC63BJ: configured-features
  h_01KNM6PAMHSC6E1BJMD5CSB78Y: minecraftgeode
  h_01KNM6PAMKA3EQQSGV5QAYK1MX: minecraftroot_system
  h_01KNM6PAMK37AFEKS2M8ST7QXH: minecraftvegetation_patch
  h_01KNM6PAMMF4NW8YG3PHJQT31K: minecraftwaterlogged_vegetation_patch
  h_01KNM6PAMMW37WNNG9KCB4M9ME: structure-processors
  h_01KNM6PAMM7KKYAF1X9Q3W4W8B: minecraftprotected_blocks
  h_01KNM6PAMNWAPM9GQKAH14VV3G: tags
  h_01KNM6PAMN494YE403D729XN5T: block-tags
  h_01KNM6PAMP6CP030TWWVK7F4X5: item-tags
  h_01KNM6PAMV4WCREG1YEEY0XE72: entity-tags
  h_01KNM6PAMWFWCF71CWJK88Z1G6: game-events
  h_01KNM6PAMWDJQQ72EFW8MQEJHE: addedminecraftbounce
  h_01KNM6PAMW92020JYRMX3VPYBZ: particles
  h_01KNM6PAMWF989QVD6K335Z0HT: resource-pack-version-85
  h_01KNM6PAMXQQ2RTQX4AZCB91QY: block-sprites
  h_01KNM6PAMZKRYG9G2GW5H6R0JB: item-sprites
  h_01KNM6PAMZFEWTJDNM856BK8YG: entity-textures
  h_01KNM6PAN0NK83Q60M7PMMAW5Z: sounds-1
  h_01KNM6PAN68F3Z89M6DQ0M0B5H: shaders--post-process-effects
  h_01KNM6PAN83HZ3AYWS8X7KXPFD: fixed-bugs-in-262-snapshot-1
  h_01KNM6PANGDBCQ12NZPZN84VN2: get-the-snapshot
---

We are back in the shipping room once more with a jam-packed snapshot Tuesday!

Test the first features from our next drop, Chaos Cubed! Scour the Overworld for sulfur springs and then dig down to discover what lies below. Meet the sulfur cube – a curious new mob with a transformative appetite for blocks. Experiment by feeding it different blocks and test how the sulfur cube reacts, explore its home in the sulfur caves, mine for new cinnabar and sulfur blocks, and more.

And that's not all! With today's release we are also bringing Vulkan support into snapshot testing. This is a major step towards bringing Vibrant Visuals to Java Edition, as previously mentioned in this article: [Another step towards Vibrant Visuals](https://www.minecraft.net/en-us/article/another-step-towards-vibrant-visuals-for-java-edition). Players will be able to toggle between OpenGL and Vulkan during the testing period, and we will stay in the testing period until we're confident that the Vulkan implementation is stable, performant and ready.

The default option for this snapshot will be to use Vulkan if supported, but this may change in the future as we receive more feedback.

Happy mining!

## New Features

- Added support for rendering the game through Vulkan
- Added new option "Graphics API" in Video Settings

### Sulfur Cube mob

- Added the Sulfur Cube mob
- Spawns in the new Sulfur caves biome
- When a Player interacts with it while holding a block, the Sulfur Cube will absorb the block and disable its AI
- With a block inside, a Player can also interact with the Sulfur Cube while holding Shears to shear the block. This enables its AI
- The Sulfur Cube will follow a Player holding a block it can absorb
- The Sulfur Cube can also look for block items nearby and move towards them to absorb them
- When killed, the Sulfur Cube splits into two smaller Sulfur Cubes
- The small Sulfur Cubes can be tempted and fed with Slime Balls to grow them into large Sulfur Cubes
- With a block inside, the Sulfur Cube will not take any fall or Player damage and will become a physical object that players can interact with by punching and pushing
- With a block inside, it will assume one of the archetypes (listed below) and change its physical properties to match the block it absorbs
- A large Sulfur Cube can be picked up using an empty bucket
- Dispensers can now equip and swap blocks inside a Sulfur Cube, as well as shear it with Shears to remove the block it is holding
- Dispensers can spawn a Sulfur Cube from a Bucket of Sulfur Cube.

#### Sulfur Cube archetypes

- Each archetype is characterized by the speed of the ball when hit, how bouncy it is when colliding with blocks and collidable entities, as well as its ground friction, air drag and if it floats in liquids
- There are the following archetypes:
  - Regular: medium speed, medium bounciness, medium ground friction and low air drag
    - It is buoyant
    - Used when absorbing stone and mineral blocks
  - Bouncy: fast speed, high bounciness, medium ground friction and low air drag
    - It is buoyant
    - Used when absorbing wooden blocks
  - Slow Flat: slow speed, low bounciness, medium ground friction and medium air drag
    - Used when absorbing metal blocks
  - Fast Flat: fast speed, low bounciness, medium ground friction and low air drag
    - Used when absorbing organic blocks
  - Light: slow speed, high bounciness, medium ground friction and high air drag
    - It is buoyant
    - Used when absorbing all wool blocks
  - Fast Sliding: fast speed, no bounciness, low ground friction and low air drag
    - Used when absorbing icy blocks
  - Slow Sliding: slow speed, no bounciness, low ground friction and low air drag
    - Used when absorbing shroom blocks
- There are also two special archetypes:
  - High Resistance: very slow, low drag with low bounce with high friction
    - Used when absorbing Soul Sand and Soul Soil
  - Sticky: same properties as a golf ball, but sticks with extremely high ground friction and no bounce to simulate stickiness
    - Used when absorbing Honeycomb Block

### Cinnabar and Sulfur block sets

- Added Cinnabar and Sulfur stone block sets
- Each of them has the Polished and the Bricks variants
- Each variant has its Slabs, Stairs and Walls blocks
- Added Chiseled Cinnabar and Chiseled Sulfur blocks

### Sulfur caves biome

- Added sulfur caves undeground biome
- Now generate naturally underground and inside hills or mountains
- The sulfur caves biome has bands of sulfur and cinnabar
- Spawns the new Sulfur Cube mob as well as Cave Spiders
- Generates with Sulfur Pools which contain Potent Sulfur

### Potent Sulfur

- Is a new block that generates naturally in water pools inside the sulfur caves biome
- Produces bubbles which rise up to 4 water source blocks above it
- When placed underneath up to 4 water source blocks, it generates a cloud of nausea-causing gas on the water surface
  - This cloud spreads across adjacent water with a maximum radius of 3 blocks
- Can be crafted from 9 Sulfur blocks
- The Potent Sulfur Block can be crafted into 4 Sulfur Blocks

### Sulfur Spring

- Is a new feature which generates naturally above the sulfur cave biome
- Consists of Sulfur, Potent Sulfur and Magma Blocks
- Sulfur Springs come in 4 different size variants:
  - Small
  - Medium
  - Large
  - Extra Large

### Vulkan Support

- As [previously announced](https://www.minecraft.net/article/another-step-towards-vibrant-visuals-for-java-edition), we intend to switch the game from OpenGL to Vulkan
- Vulkan is not supported by older hardware or drivers - OpenGL will be used as a fallback on those cases
  - The current requirement is Vulkan 1.2 with dynamic rendering and push descriptors, but this requirement may increase or decrease over time
- This is currently an experimental rendering backend, and may not be as performant or stable. Please report any bugs you find with it to [our bug tracker](https://bugs.mojang.com/)!
- Under Vulkan, we will prefer your **dedicated graphics card** over any integrated graphics, which is a change from OpenGL
- You can see which backend is being used in your F3 debug overlay (in the system_specs section)
- On MacOS, we use MoltenVK to translate Vulkan to Metal

### "Graphics API" Video Setting

- This is a new option available in the "Video Settings"
- There are three values: **Default**, **Prefer Vulkan** and **Prefer OpenGL**
- "Default" may be changed at our discretion, and we recommend this for all users unless you experience issues and need to change
  - Currently, it is the same as "Prefer Vulkan"
- "Prefer Vulkan" will attempt to render using Vulkan, but fall back to OpenGL if it doesn't work
- "Prefer OpenGL" will attempt to render using OpenGL, but fall back to Vulkan if it doesn't work

## Changes

- Fixed baby Hoglin's and Zoglin's left ear texture so it's properly mirrored

### Minor Tweaks to Blocks, Items and Entities

- When an entity bounces off of a block or other collidable entity, it emits a vibration of frequency 2

> **Developer's Note**: *We have tweaked how Beds and Slime Blocks restitute entity velocity after collisions. For instance, when air drag is removed via the entity attribute, Slime Blocks will now correctly bounce Mobs indefinitely. This may affect player perception of the bounciness of Beds and Slime Blocks.*

### Sounds

Added block sounds for Sulfur, Potent Sulfur and Cinnabar Added mob sounds for Sulfur Cube and Small Sulfur Cube

## Technical Changes

- The Data Pack version is now 101.2
- The Resource Pack version is now 85
- Profiling the game with Tracy (launching with --tracy) now includes GPU timings
- Rendering now uses a reversed depth buffer, which helps with Z-fighting on most hardware

## Data Pack Version 101.2

- Added minecraft:sulfur_cube_archetype registry with the following values:
  - regular
  - bouncy
  - slow_flat
  - fast_flat
  - light
  - fast_sliding
  - slow_sliding
  - high_resistance
  - sticky
- Entry format: Object with fields:
  - items: item tag that contains all items that can be fed to Sulfur Cubes of this archetype
  - buoyant: boolean indicating if the Sulfur Cube of this archetype floats in liquids
  - attribute_modifiers: a list of objects with fields:
    - attribute: attribute to modify
    - id: unique identifier for the modifier
    - amount: amount to modify the attribute by
    - operation: how to modify the attribute, one of add_value, add_multiplied_base and add_multiplied_total

### Commands

- When granting or revoking several advancements, the command output will now report how many advancements changed state across all players
- When granting or revoking advancements or a criterion on several players, the command output will now report the number of players that any change applied to

### Attributes

#### Added minecraft:bounciness

- Determines what portion of the velocity is restituted after the entity collides with blocks and collidable entities
- When landing on bouncy blocks, like Beds and Slime Blocks, the higher bounciness (of the block or the entity) is applied
- Accepts values between 0.0 and 1.0
- Default value: 0.0 - no velocity is restituted
- Maximum value: 1.0 - full velocity is restituted, collisions with blocks and collidable entities will have no effect on lowering the velocity

#### Added minecraft:friction_modifier

- Determines how much ground friction is applied to the entity with regards to the block it is on
- Accepts values between 0.0 and 2048.0
- Default value: 1.0 - friction of blocks is not modified
- Minimum value: 0.0 - friction of blocks is reduced to zero
- Values higher than 1.0 increase the friction applied to the entity from the blocks it is on

#### Added minecraft:air_drag_modifier

- Determines how much drag is applied to an entity while in the air
- Accepts values between 0.0 and 2048.0
- Default value: 1.0 - the entity uses existing drag when moving in the air
- Minimum value: 0.0 - no drag is applied to the entity
- Values higher than 1.0 increase the drag applied to the entity when moving through the air

#### Updated the minimum value of minecraft:knockback_resistance

``` auto
- The minimum value was changed from `0.0` to `-2.0`
```

### Data Components

#### Added minecraft:sulfur_cube_content

- Represents the item that is absorbed by the Sulfur Cube
- Format: item that is absorbed by the Sulfur Cube
  - e.g. minecraft:sulfur_cube_content=green_wool

### World Generation

#### Dripstone Features

- Renamed Feature Type pointed_dripstone to speleothem
  - Added field base_block - Block State, describes the block forming the base of the Speleothem
  - Added field pointed_block - Block State, describes the block creating the columns of the Speleothem
  - Added field replaceable_blocks - Block ID, list of Block IDs, or hash-prefixed Block Tag describing which blocks this feature can generate on
  - Renamed field chance_of_taller_dripstone to chance_of_taller_generation
- Renamed Feature Type dripstone_cluster to speleothem_cluster
  - Added field base_block - Block State, describes the block forming the base of the Speleothem
  - Added field pointed_block - Block State, describes the block creating the columns of the Speleothem
  - Added field replaceable_blocks - Block ID, list of Block IDs, or hash-prefixed Block Tag describing which blocks this feature can generate on
  - Renamed field dripstone_block_layer_thickness to speleothem_block_layer_thickness
  - Renamed field chance_of_dripstone_column_at_max_distance_from_center to chance_of_speleothem_at_max_distance_from_center
  - Renamed field max_distance_from_edge_affecting_chance_of_dripstone_column to max_distance_from_edge_affecting_chance_of_speleothem
- Adjusted Feature Type large_dripstone
  - Added field replaceable_blocks - Block ID, list of Block IDs, or hash-prefixed Block Tag describing which blocks this feature can generate on

#### Added noise_gradient Surface Rule

Replaces blocks based on the specified noise and gradient list.

Format: object with fields:

- noise - noise id, the noise to sample
- gradient - non-empty list of objects with fields, the list to sample based on the noise value:
  - state (optional) - the block state to select at this index
    - If this field is not defined, the surface rule will not replace any block when sampling this entry

#### Added sequence Feature Type

Generates a list of Placed Features in order. If any feature in the list is not placed, the following features will also be skipped.

Format: object with fields:

- features - list of Placed Features or hash-prefixed Placed Feature tag, the features to generate

#### Added template Feature Type

Places one template randomly chosen from the given Weighted List of Identifiers. By default, the template will be spawned randomly rotated, centered around the origin.

Format: object with fields:

- templates - Weighted List of structure template entries. Each structure template entry is composed of an Identifier and a list of rotations to randomly choose from
  - id - The template Identifier
  - rotations - Optional list of rotations to choose from and apply to this template if it is picked
    - Allowed values: none, clockwise_90, 180, counterclockwise_90
    - If not specified, defaults to all allowed values

#### Dimension Types

- The field infiniburn now also accepts an ID and a list of IDs in addition to a tag

#### Configured Features

##### minecraft:geode

- The fields cannot_replace and invalid_blocks in blocks section of feature configuration now also accept an ID and a list of IDs in addition to a tag

##### minecraft:root_system

The field root_replaceable in the feature configuration now also accepts an ID or a list of IDs in addition to a tag

##### minecraft:vegetation_patch

- The field replaceable in the feature configuration now also accepts an ID and or a list of IDs in addition to a tag

##### minecraft:waterlogged_vegetation_patch

- The field replaceable in the feature configuration now also accepts an ID and or a list of IDs in addition to a tag

#### Structure Processors

##### minecraft:protected_blocks

- The field value now also accepts an ID or a list of IDs in addition to a tag

### Tags

#### Block Tags

- Added #suppresses_bounce - all blocks that suppress the bounciness of entities when colliding with them
- Added #glazed_terracotta, #concrete blocks collection tags
- \#concrete_powder collection tag has been renamed to #concrete_powders
- Added #shears_extreme_breaking_speed for blocks that can be broken with shears with speed 15
- Added #shears_major_breaking_speed for blocks that can be broken with shears with speed 5
- Added #shears_minor_breaking_speed for blocks that can be broken with shears with speed 2

#### Item Tags

- Added #glazed_terracotta, #concrete, and #concrete_powders items collection tags
- Added #sulfur_cube_food - all items that can be fed to small Sulfur Cube
- Added #sulfur_cube_swallowable - all items that can be placed inside a large Sulfur Cube
- Added the following tags for items that can be placed inside a Sulfur Cube to determine its archetype:
  - \#sulfur_cube_archetype/regular
  - \#sulfur_cube_archetype/bouncy
  - \#sulfur_cube_archetype/slow_flat
  - \#sulfur_cube_archetype/fast_flat
  - \#sulfur_cube_archetype/light
  - \#sulfur_cube_archetype/fast_sliding
  - \#sulfur_cube_archetype/slow_sliding
  - \#sulfur_cube_archetype/high_resistance
  - \#sulfur_cube_archetype/sticky

#### Entity Tags

- minecraft:sulfur_cube is added to non_controlling_rider
- Added minecraft:sulfur_cube_with_block_immune_to for all damage types that Sulfur Cubes are immune to when having a block absorbed
- Updated not_scary_for_pufferfish to include the Sulfur Cube

### Game Events

#### Added minecraft:bounce

- Emitted when an entity collides with a block or a collidable entity with non-zero bounciness
- Has a vibration frequency of 2

### Particles

- Added sulfur_cube_goo - particles showing on a Sulfur Cube mob when hopping around

## Resource Pack Version 85

### Block Sprites

- Added new Block textures:
  - block/chiseled_cinnabar.png
  - block/chiseled_sulfur.png
  - block/cinnabar.png
  - block/cinnabar_bricks.png
  - block/polished_cinnabar.png
  - block/polished_sulfur.png
  - block/potent_sulfur.png
  - block/sulfur.png
  - block/sulfur_bricks.png

### Item Sprites

- Added new Item sprites:
  - item/sulfur_cube_bucket.png

### Entity Textures

- Added new Entity textures:
  - entity/sulfur_cube/sulfur_cube_outer.png
  - entity/sulfur_cube/sulfur_cube_inner.png

### Sounds

- Added sounds for Sulfur Block:
  - block.sulfur.break
  - block.sulfur.hit
  - block.sulfur.place
  - block.sulfur.step
  - block.sulfur.fall
- Added sounds for Potent Sulfur Block:
  - block.potent_sulfur.break
  - block.potent_sulfur.hit
  - block.potent_sulfur.place
  - block.potent_sulfur.step
  - block.potent_sulfur.fall
  - block.potent_sulfur.noxious_gas
- Added sounds for Cinnabar Block:
  - block.cinnabar.break
  - block.cinnabar.hit
  - block.cinnabar.place
  - block.cinnabar.step
  - block.cinnabar.fall
- Added sounds for Sulfur Cube:
  - entity.sulfur_cube.jump
  - entity.sulfur_cube.squish
  - entity.sulfur_cube.hurt
  - entity.sulfur_cube.death
  - entity.sulfur_cube.absorb
  - entity.sulfur_cube.eject
  - entity.sulfur_cube.bounce
  - entity.sulfur_cube.hit
  - entity.sulfur_cube.push
- Added sounds for Small Sulfur Cube:
  - entity.small_sulfur_cube.jump
  - entity.small_sulfur_cube.squish
  - entity.small_sulfur_cube.hurt
  - entity.small_sulfur_cube.death

### Shaders & Post-process Effects

- The core/rendertype_text, core/rendertype_text_see_through, core/rendertype_text_intensity, core/rendertype_text_intensity_see_through, core/rendertype_text_background, and core/rendertype_text_background_see_through shaders have been replaced by core/text and core/text_background
  - Variants are now controlled by shader defines: IS_GUI, IS_SEE_THROUGH, and IS_GRAYSCALE

## Fixed bugs in 26.2 Snapshot 1

- [MC-236770](https://bugs.mojang.com/browse/MC-236770) - The "Ambient" and "Axolotl" mob caps both display as "A" in the debug overlay
- [MC-252814](https://bugs.mojang.com/browse/MC-252814) - The clamp density function takes a direct input and doesn't allow a reference
- [MC-269520](https://bugs.mojang.com/browse/MC-269520) - The game freezes when using /locate in a world without structures enabled
- [MC-269786](https://bugs.mojang.com/browse/MC-269786) - "ID" is not capitalized in some strings
- [MC-277395](https://bugs.mojang.com/browse/MC-277395) - The "options.screenEffectScale.tooltip" string displayed when holding your mouse cursor over the "Distortion Effects" slider is improperly capitalized
- [MC-277396](https://bugs.mojang.com/browse/MC-277396) - Strings referencing nether portals are inconsistently capitalized
- [MC-279122](https://bugs.mojang.com/browse/MC-279122) - Some strings that contain the abbreviation "id" are improperly capitalized
- [MC-279125](https://bugs.mojang.com/browse/MC-279125) - Some "/locate" strings are missing articles before the word "reasonable"
- [MC-279126](https://bugs.mojang.com/browse/MC-279126) - The "mco.configure.world.restore.download.question.line1" string incorrectly spells the word "singleplayer" as "single player"
- [MC-279137](https://bugs.mojang.com/browse/MC-279137) - The "options.directionalAudio.on.tooltip" string is missing a hyphen between the words "HRTF" and "compatible"
- [MC-279138](https://bugs.mojang.com/browse/MC-279138) - The "command.failed" string is missing a conjunction
- [MC-279154](https://bugs.mojang.com/browse/MC-279154) - The "advancements.story.enter_the_nether.description" string is missing a serial comma
- [MC-279156](https://bugs.mojang.com/browse/MC-279156) - The titles within some player reporting and punishment menus are improperly capitalized
- [MC-279158](https://bugs.mojang.com/browse/MC-279158) - The "I know what I'm doing!" button is improperly capitalized
- [MC-279182](https://bugs.mojang.com/browse/MC-279182) - Strings used to describe water and lava conversion game rules are missing commas
- [MC-279183](https://bugs.mojang.com/browse/MC-279183) - The "options.allowServerListing.tooltip" string is missing a comma
- [MC-279184](https://bugs.mojang.com/browse/MC-279184) - The "datapackFailure.title" string is missing an article and always pluralizes the word "pack"
- [MC-279186](https://bugs.mojang.com/browse/MC-279186) - The "build.tooHigh" string is missing an article before the word "Height"
- [MC-279189](https://bugs.mojang.com/browse/MC-279189) - The "mco.configure.world.leave.question.line1" string is missing a comma
- [MC-302488](https://bugs.mojang.com/browse/MC-302488) - Strings that contain the term "Safe Mode" are inconsistently capitalized
- [MC-302628](https://bugs.mojang.com/browse/MC-302628) - Dolphins don't dismount minecarts when passing over activator rails
- [MC-304113](https://bugs.mojang.com/browse/MC-304113) - Underwater fog is not applied correctly at low render distances
- [MC-304873](https://bugs.mojang.com/browse/MC-304873) - The "options.textureFiltering.rgss.tooltip" string is missing a hyphen between the words "shader" and "based"
- [MC-304874](https://bugs.mojang.com/browse/MC-304874) - The "options.textureFiltering.anisotropic.tooltip" string is missing a hyphen between the words "hardware" and "based"
- [MC-305467](https://bugs.mojang.com/browse/MC-305467) - The ender dragon's death animation effects render in front of worn armor
- [MC-306064](https://bugs.mojang.com/browse/MC-306064) - Mobs can be forced to look like they're dying while they aren't by using commands
- [MC-306399](https://bugs.mojang.com/browse/MC-306399) - The Spectator mode 'Teleport to Player' action only updates the list of valid targets after the Spectator menu is hidden
- [MC-306890](https://bugs.mojang.com/browse/MC-306890) - Campfires cause bees to work much more slowly
- [MC-306903](https://bugs.mojang.com/browse/MC-306903) - Cubic Bézier easing functions sometimes produce wrong values
- [MC-306946](https://bugs.mojang.com/browse/MC-306946) - The block light transition from level 1 to 0 under the night sky is not smooth when Smooth Lighting is enabled

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/3a540367d1b89155e253556ac855031da4ba090a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
