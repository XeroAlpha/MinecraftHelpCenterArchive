---
title: Minecraft Java Edition - 26.2 Snapshot 6
date: 2026-05-05T15:24:20Z
updated: 2026-05-05T15:25:50Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45614712154509-Minecraft-Java-Edition-26-2-Snapshot-6
hash:
  h_01KQWBTFHVYHREPBBD8NHK9DH2: new-features
  h_01KQWBTFHXRA2KAHSNM90RV0AN: sulfur-cube-mob
  h_01KQWBTFHXNEQANV5D33ENRERF: sulfur-cube-archetypes
  h_01KQWBTFHZMA2SWRY18BF1AT0Q: advancements
  h_01KQWBTFJ0B0R13MKJPC66MZWW: changes
  h_01KQWBTFJ0K65D6T9E46B9Y60D: sulfur-caves-biome
  h_01KQWBTFJ1RJCWDK9JGAM9KKX7: potent-sulfur
  h_01KQWBTFJ1VN6V6FDWE4XJ4BT6: sounds
  h_01KQWBTFJ2PED9D2AW1263JDXH: technical-changes
  h_01KQWBTFJ2FWRZG2XMW7BN7KP3: data-pack-version-1050
  h_01KQWBTFJ7YNCVR7JF8XAANEHX: world-generation
  h_01KQWBTFJ7NEDQ6JWZ7NFJXP87: surface-rules
  h_01KQWBTFJ8H99PM2TPREEN04Q1: changednoise_thresholdsurface-rule-condition
  h_01KQWBTFJ9NXVGNWKP19Q629JX: removednoise_gradientsurface-rule
  h_01KQWBTFJ9KS0NM3AVH5N6C90G: configured-features
  h_01KQWBTFJ9PHRS0PQ21BW487AJ: addedminecraftweighted_random_selectorfeature-type
  h_01KQWBTFJAC7J1ZPS3KXAZ5AEA: changes-tominecraftlarge_dripstone
  h_01KQWBTFJBNRQAB1HZSNS3THZ2: changes-tominecraftroot_system
  h_01KQWBTFJC4WYWP4EAE17E4FCD: structure-processors
  h_01KQWBTFJCEFQ99A1VND06VW2E: changedminecraftblock_rotstructure-processor
  h_01KQWBTFJD8QRDWC0M4NGXNV4Q: tags
  h_01KQWBTFJDDCV6WVZXTVX9F8BR: item-tags
  h_01KQWBTFJEW1JT7MJQXW607BKY: fixed-bugs-in-262-snapshot-6
  h_01KQWBTFJTFNJGA993TCBTFC1H: get-the-snapshot
---

Test the final features from Chaos Cubed in 26.2 snapshot 6! Feed magma to sulfur cubes and watch them heat up – but don't touch them unless it's for science! A new potential effect makes sulfur cubes slow, heavy and bouncy, but what block causes it? It's up to you to find out! Finally, check out the new look of sulfur springs.

Happy Mining!

## New Features

- New Sulfur Cube archetypes: Slow Bouncy and Hot
- Added Gallo language support to the game
- Added Uzbek language support to the game
- Added Võro language support to the game

### Sulfur Cube mob

- Added new Slow Bouncy and Hot archetypes to the Sulfur Cube

#### Sulfur Cube archetypes

- There is a new archetype:
  - Slow Bouncy: slow speed, high bounciness, medium friction and medium air drag
    - It is buoyant
    - Used when absorbing stone blocks
- There is also a new special archetype:
  - Hot: same properties as Regular, but damages entities on contact like Magma Blocks do
    - Used when absorbing Magma Blocks

### Advancements

- Added new "Uh Oh" Husbandry advancement for having a Sulfur Cube absorb a TNT block

## Changes

### Sulfur Caves biome

- Redesigned all surface Sulfur Springs features
- The Sulfur Caves biome is less likely to generate underneath Oceans, Hills or Mountains
- Sulfur Caves no longer generate with bands of Tuff and Granite

> **Developer's Note:** *Thanks to player feedback we've decided to revert tuff and granite blocks generating in sulfur caves, in favor of generating more sulfur to increase the chances of pools spawning. Sulfur spikes remain unaffected.*

### Potent Sulfur

- Geyser eruptions emit game events at the beginning and at the end of the eruption that can be detected by Sculk Sensors

### Sounds

- Updated eruption sounds for Sulfur Spring

## Technical Changes

## Data Pack Version 105.0

- Added minecraft:sulfur_cube_archetype registry entries:
  - hot
  - slow_bouncy
- Entry format for minecraft:sulfur_cube_archetype registry has been updated:
  - explosion_fuse has been replaced by explosion: an optional field, if present, the Sulfur Cube of this archetype will explode:
    - fuse: positive integer, the fuse time when ignited
    - power: non-negative integer, the explosion power
    - causes_fire: boolean, whether the explosion causes fire
  - Added contact_damage: an optional field, if present, the Sulfur Cube of this archetype will deal damage to entities when they come in contact with it
    - amount: non-negative float, amount of damage dealt
    - damage_type: damage type
    - attribute_to_source: boolean indicating if the damage is attributed to the Sulfur Cube
  - Added knockback_modifiers: a field that contains various modifier fileds for the Sulfur Cubes knockback magnitude and direction
    - horizontal_power: float that represenst the horizontal power of the knockback
    - vertical_power: float that represenst the vertical power of the knockback
- Removed the HurtByTimestamp tag from Living Entities, ticks_since_last_hurt_by_mob should be used instead

### World Generation

#### Surface Rules

##### Changed noise_threshold Surface Rule Condition

- Added new is_3d field - boolean, true if the noise should be evaluated in 3D
  - If not specified, defaults to false

##### Removed noise_gradient Surface Rule

- Can be replaced with noise_threshold

#### Configured Features

##### Added minecraft:weighted_random_selector Feature Type

Randomly selects one of the given features to generate based on their weights.

Format: object with fields:

- features - list of Placed Features and their weights

##### Changes to minecraft:large_dripstone

- The maximum allowed value for column_radius has been reduced from 19 to 16 to prevent features from reaching beyond neighboring chunks
- Wind offset is now clamped to ensure the full dripstone (radius + wind) stays within neighboring chunk bounds

##### Changes to minecraft:root_system

- New field level_test_distance indicating how far away from the origin the root system will check the existing terrain
- New field max_level_deviation indicating how far the ground level can deviate from the original ground level at these test positions

#### Structure Processors

##### Changed minecraft:block_rot Structure Processor

- Now evaluates the block state produced by previous block processors in the chain, instead of always using the original block defined in the structure
  - The first processor in the chain still always evaluates against the original structure-defined block

### Tags

#### Item Tags

- Added the following tags for items that can be placed inside a Sulfur Cube to determine its archetype:
  - \#sulfur_cube_archetype/hot
  - \#sulfur_cube_archetype/slow_bouncy

## Fixed bugs in 26.2 Snapshot 6

- [MC-248758](https://bugs.mojang.com/browse/MC-248758) - Logged Error: Detected setBlock in a far chunk
- [MC-302554](https://bugs.mojang.com/browse/MC-302554) - Glowing falling blocks no longer show the glowing outline
- [MC-305239](https://bugs.mojang.com/browse/MC-305239) - Growing world borders reset to their starting size upon reopening the world
- [MC-306778](https://bugs.mojang.com/browse/MC-306778) - The fog color no longer transitions smoothly when the weather changes at night while under the Night Vision effect
- [MC-307043](https://bugs.mojang.com/browse/MC-307043) - Applying a freeze effect while damaging a mob causes an incorrect value for ticks_since_last_hurt_by_mob
- [MC-307281](https://bugs.mojang.com/browse/MC-307281) - /item replace cannot place items in sulfur cubes' body slot
- [MC-307297](https://bugs.mojang.com/browse/MC-307297) - Sulfur cubes shake from freezing when inside powder snow despite not being able to freeze
- [MC-307310](https://bugs.mojang.com/browse/MC-307310) - Potent sulfur can generate outside of water
- [MC-307323](https://bugs.mojang.com/browse/MC-307323) - Sulfur caves can generate on the surface
- [MC-307351](https://bugs.mojang.com/browse/MC-307351) - Dispenser arrows cannot push sulfur cubes
- [MC-307397](https://bugs.mojang.com/browse/MC-307397) - Mace effects do not apply when hitting sulfur cubes
- [MC-307407](https://bugs.mojang.com/browse/MC-307407) - Vertical velocity after bouncing does not take drag into consideration
- [MC-307424](https://bugs.mojang.com/browse/MC-307424) - Chiseled cinnabar and sulfur are listed incorrectly in the Creative mode inventory
- [MC-307482](https://bugs.mojang.com/browse/MC-307482) - Sulfur cubes with an absorbed block don't inherit any status effects from tipped arrows
- [MC-307517](https://bugs.mojang.com/browse/MC-307517) - Beacon beams render in front of nether fog
- [MC-307544](https://bugs.mojang.com/browse/MC-307544) - Sulfur spikes have an inaccurate map color
- [MC-307560](https://bugs.mojang.com/browse/MC-307560) - Wandering traders are unable to sell sulfur spikes
- [MC-307584](https://bugs.mojang.com/browse/MC-307584) - The border around the selected pack in the resource/data pack menu disappears when pressing Enter
- [MC-307667](https://bugs.mojang.com/browse/MC-307667) - Dispensers can equip small sulfur cubes
- [MC-307673](https://bugs.mojang.com/browse/MC-307673) - Sulfur caves appear much smaller due to their tuff border
- [MC-307674](https://bugs.mojang.com/browse/MC-307674) - Knockback does nothing to sulfur cubes if they have a block inside
- [MC-307684](https://bugs.mojang.com/browse/MC-307684) - Named sulfur cubes can despawn after being picked up with a bucket and replaced
- [MC-307774](https://bugs.mojang.com/browse/MC-307774) - The bool(arg) SNBT operation returns false for some non-zero number values
- [MC-307777](https://bugs.mojang.com/browse/MC-307777) - The patterns on banners are now invisible under some circumstances
- [MC-307778](https://bugs.mojang.com/browse/MC-307778) - Priming sulfur cubes with absorbed TNT does not play the hand use animation
- [MC-307779](https://bugs.mojang.com/browse/MC-307779) - Potent sulfur no longer causes noxious gas to appear upon world generation
- [MC-307780](https://bugs.mojang.com/browse/MC-307780) - The server crashes when the management server is enabled
- [MC-307782](https://bugs.mojang.com/browse/MC-307782) - Sulfur spring geysers can push players in Creative mode who are flying
- [MC-307783](https://bugs.mojang.com/browse/MC-307783) - Lines are drawn between leashed entities in view
- [MC-307784](https://bugs.mojang.com/browse/MC-307784) - Structure block rotation buttons aren't disabled correctly
- [MC-307785](https://bugs.mojang.com/browse/MC-307785) - Geysers do not emit a game event when erupting
- [MC-307797](https://bugs.mojang.com/browse/MC-307797) - Dying to a sulfur cube doesn't increase the player's killed_by:sulfur_cube statistic
- [MC-307802](https://bugs.mojang.com/browse/MC-307802) - The player's arm swings when attempting to interact with a sulfur cube with ignited TNT inside
- [MC-307803](https://bugs.mojang.com/browse/MC-307803) - The game crashes when a sulfur cube with an archetype that has explosion_fuse set to a value lower than 4 is primed by an explosion
- [MC-307821](https://bugs.mojang.com/browse/MC-307821) - The glowing effect is now always white on the frame part of bell block displays
- [MC-307824](https://bugs.mojang.com/browse/MC-307824) - Attempting to light a sulfur cube with TNT inside while TNT explosions are disabled does not display a message
- [MC-307825](https://bugs.mojang.com/browse/MC-307825) - Disabling TNT explosions does not prevent already primed TNT sulfur cubes from exploding
- [MC-307829](https://bugs.mojang.com/browse/MC-307829) - Sulfur cubes with TNT absorbed still explode with the game rule mob_griefing set to false
- [MC-307837](https://bugs.mojang.com/browse/MC-307837) - Igniters deplete when used on TNT sulfur cubes while TNT explosions are disabled
- [MC-307854](https://bugs.mojang.com/browse/MC-307854) - Weapons enchanted with Fire Aspect don't ignite TNT sulfur cubes
- [MC-307864](https://bugs.mojang.com/browse/MC-307864) - Small sulfur cubes become large client-side when fed a slimeball after restarting their aging

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/8bdae5a048cd361668da1df06e81c4e590a36064/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
