---
title: Minecraft Java Edition - 26.3 Snapshot 3
date: 2026-07-07T14:16:06Z
updated: 2026-07-07T14:16:25Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/47197422514061-Minecraft-Java-Edition-26-3-Snapshot-3
hash:
  h_01KWYEGGCAWGEWCD575K6F79KP: new-features
  h_01KWYEGGCBDYBQSGNXGV01H82D: cushion
  h_01KWYEGGCCMNY9KRVD1WE408EQ: cushion-placement-rules
  h_01KWYEGGCCGGSTA67Y9CB25JYM: straw-bed
  h_01KWYEGGCD6D28ES16HM57DQX2: technical-changes
  h_01KWYEGGCE5RKQX8SPYZWSXNM0: data-pack-version-1100
  h_01KWYEGGCE1ZK7VVB0ZZ61PVTV: commands
  h_01KWYEGGCEH923P78182T96VVD: addedposteffect
  h_01KWYEGGCH9F1MB1Q6TGP2XKV7: changes-toplace
  h_01KWYEGGCHSJ411MH67JGXADYK: environment-attributes
  h_01KWYEGGCHM9HWZ485E2RAWH1N: changedminecraftgameplaybed_rule
  h_01KWYEGGCKA05PDPPV5DA5A02G: addedminecraftgameplaystraw_bed_rule
  h_01KWYEGGCKCFY96HF8VPKD85B9: data-components
  h_01KWYEGGCK45780HFKB1PEG05W: updatedminecraftblock_transformer
  h_01KWYEGGCMCPRDGNH10SS1VX1C: addedminecraftcompostable
  h_01KWYEGGCNF8P85NAD9TYY9NYM: loot-tables
  h_01KWYEGGCNW9WB3HFBW1BRBQRK: predicates
  h_01KWYEGGCN20Z5Z9FSDRK8XWRK: added-vanilla-predicates
  h_01KWYEGGCPEPAC6V7E2EAKN3B6: potion-predicates
  h_01KWYEGGCWVXFAQHVF4NCKAEVY: number-providers
  h_01KWYEGGCXXSNANZVVHKT1KZE3: added-vanilla-number-providers
  h_01KWYEGGCZZGRJEQXZF3V3RKM6: addedminecraftnumber_dispatchertype
  h_01KWYEGGD2EVTYBK5002WBJ2GD: addedminecraftconditional_valuetype
  h_01KWYEGGD4PG0QTQKS6TF0Z3F2: addedminecraftweighted_list
  h_01KWYEGGD5E9HC6RE2D9JY844R: recipes
  h_01KWYEGGD50T0DQM3M96PY5KMD: potion-brewing-recipes
  h_01KWYEGGD8TCZZRYNNQW5EVYNP: world-generation
  h_01KWYEGGD8HS9P52ZCKMYWDGGE: features
  h_01KWYEGGD9JQM05MQS7DFJHN6Y: changedminecraftcoral_clawandminecraftcoral_tree
  h_01KWYEGGDA30VR0PNPY01JE3A7: placement-modifiers
  h_01KWYEGGDAVMEN18XPMFYQK6Y2: addedminecraftcuboid
  h_01KWYEGGDBW683W5DX2EAR2NKN: addedminecraftrandom_chance
  h_01KWYEGGDBBXC04HDZKQPP2S2M: block-state-providers
  h_01KWYEGGDBR8CX92K8M4F78852: updatedminecraftcopy_properties_provider
  h_01KWYEGGDCE8BM3ARNWJZX4433: addedminecraftrandom_block_provider
  h_01KWYEGGDCMY7129CD7J6YTKTS: changedminecraftrotated_block_provider
  h_01KWYEGGDDH1N4W481J3KX1TWE: rule-tests
  h_01KWYEGGDEMPNB080K58DZX413: addedminecraftany_of
  h_01KWYEGGDE553XZMN0T92K28HM: addedminecraftnot
  h_01KWYEGGDFR0C28J9Q4T0Y9W5K: tags
  h_01KWYEGGDF7SE5QN7EBETNXDT8: block-tags
  h_01KWYEGGDGH9BPJC68PNZPGAPE: item-tags
  h_01KWYEGGDH824F08FJ4J2VHV83: structure-tags
  h_01KWYEGGDHARTYV7VXCW3KG668: resource-pack-version-910
  h_01KWYEGGDHSKAY2G6Y3Y5MKTDG: block-sprites
  h_01KWYEGGDHJ0ZABY1FSP65CZ65: sounds
  h_01KWYEGGDKXBCE6AT07WJZ46GS: item-models
  h_01KWYEGGDN8WCBRDHCCMYBJJT2: shaders--post-process-effects
  h_01KWYEGGDNBYWZ8F3Y63W2DACF: always-on-post-effect-support
  h_01KWYEGGDNYBD03JHE3QQ9QQ4A: fixed-bugs-in-263-snapshot-3
  h_01KWYEGGE2HYAMW2PPS6CRF2WN: get-the-snapshot
---

Tuesday? Pfft. It's snapshot day! Today's snapshot introduces two brand-new features coming to 26.3: perfect for anyone that loves to camp in comfort. The cushion, coming in 16 color variants, finally brings the ability to sit down around a campfire. To go along with it, the straw bed brings the comfort of sleep (without the worry of losing your spawn point) to any adventure!

In addition, this snapshot brings many technical improvements: from custom brewing recipes to new ways to create and apply post-processing effects!

Happy cozy crafting!

## New Features

- Added Cushion
- Added Straw Bed
- Added Gothic language support to the game

### Cushion

- The Cushion is an item that the player can place in the world and interact with to sit on
- Can be crafted in 16 colored variants
- Cushions are crafted using 3 Wool Slabs of the same color

#### Cushion Placement Rules

- A Cushion can be placed on any flat surface
- Cushions always align horizontally to the grid, but vertically sit on top of the supporting surface
- Cushions cannot move
- Cushions break if the supporting block is removed
- Cushions do not have collision and can overlap with other objects (except other Cushions)

### Straw Bed

- The Straw Bed is a new type of Bed which can be used to sleep through the night without setting your spawnpoint
- It can only be used once and will be destroyed after use
- It cannot be used in the Nether or The End and will be destroyed if you try to sleep on it there
- It is crafted using 3 Hay Bales and will give you 4 Straw Beds
- There's a new statistic in the Statistics window for amount of times slept in a Straw Bed

## Technical Changes

- The Data Pack version is now 110.0
- The Resource Pack version is now 91.0

## Data Pack Version 110.0

### Commands

#### Added posteffect

- Allows adding or removing "post effects" to players
- These are postprocessing shaders that are applied to the player's screen, after the game has finished normal rendering
- Post effects exist on the client (in resource packs), not the server – the server cannot know if one will actually apply
- Post effects themselves were already part of the resource pack format, but only a few hardcoded ones were available to use

> **Developer's Note**: *This now makes custom shaders fully available to use from resource packs, but please be aware that shaders are still subject to be changed at-will, and the features involved (the command, post effects, or shaders) may be redesigned in the future.*

Syntax:

- /posteffect add \<player\> \<posteffect\> - adds the post effect to the player, if it doesn't already exist
- /posteffect clear \<player\> - removes all post effects from the player, if any exist
- /posteffect list \<target\> - lists all post effects applied to the player, if any exist
- /posteffect remove \<player\> \<posteffect\> - removes the post effect from the player, if it exists

#### Changes to place

- The feature sub-command now allows in-line definition of the Feature

### Environment Attributes

#### Changed minecraft:gameplay/bed_rule

- Field explodes has been renamed to destroy_on_use
- Added destroy_on_leave - optional boolean, if true, the Bed will be destroyed when leaving it
  - If omitted, defaults to false

#### Added minecraft:gameplay/straw_bed_rule

- Same format as minecraft:gameplay/bed_rule, but used for the Straw Bed

### Data Components

#### Updated minecraft:block_transformer

- Added optional boolean field update_from_neighbors. This controls if the transformed block should update based on neighboring blocks
  - Defaults to true

#### Added minecraft:compostable

- Represents the ability to compost an item and how it adds layers to the composter
- Format: object with fields
  - layers - namespaced ID pointing to an element of the minecraft:number_provider registry

### Loot Tables

- Multiple block loot tables now reference predicates for checking if a tool has Silk Touch and is Shears instead of inlining a copy of those checks

### Predicates

#### Added vanilla predicates

New entries added to previously empty minecraft:predicate:

- minecraft:tool/can_silk_touch
- minecraft:tool/can_shear

#### Potion Predicates

The minecraft:potion_contents Data Component Predicate has been changed to allow matching on specific potion effects.

The previous predicate format used a list of potion types, the new format allows for more refined matching.

The following fields can be used in any combination, all are optional:

- potions - A list of potion types or a potion tag to match
- effects - A Collection Predicate of mob_effects predicates to match
  - The Collection Predicate format is as follows:
  - contains - A list of mob_effects predicates to match
  - count - A list of options for matching a specific number of mob effect predicates, which follow the same format as minecraft:effects entity sub-predicate\`
    - test - The mob_effects predicate to match
    - count - The number of matches required, or with min and max will match a range of counts
  - size - Require the mob effects list to have a specific size, or with min and max will match a range of sizes

The mob_effects predicate format is a mapping of effect types to properties of that effect. All fields are optional, only provided fields will be used for matching:

``` auto
    {
        "minecraft: <effect type>": {
          "duration": <integer bounds representing a duration in ticks>,
          "amplifier": <integer bounds>,
          "ambient: true/false,
          "visible": true/false
        }
    )
```

Here is an example of matching on several different effects and criteria:

``` auto
      "effects": {
        "minecraft:jump_boost": {
          "duration": 3600,
          "amplifier": 5,
          "ambient: true,
          "visible": true
        },
        "minecraft:speed": {
          "duration": {
            "min": 360,
            "max": "3600
          },
          "amplifier: {
            "min": 2
          }
        },
        "minecraft:resistance": {}
      }
```

All criteria are optional.

### Number Providers

- Added a minecraft:number_provider registry

#### Added vanilla number providers

- minecraft:compostable/low
  - returns 1 if the minecraft:block_state context parameter is an empty composter, otherwise has a 30% chance of returning 1
- minecraft:compostable/low_medium
  - returns 1 if the minecraft:block_state context parameter is an empty composter, otherwise has a 50% chance of returning 1
- minecraft:compostable/medium
  - returns 1 if the minecraft:block_state context parameter is an empty composter, otherwise has a 65% chance of returning 1
- minecraft:compostable/medium_high
  - returns 1 if the minecraft:block_state context parameter is an empty composter, otherwise has a 85% chance of returning 1
- minecraft:compostable/always_add_one
  - always returns 1

#### Added minecraft:number_dispatcher type

- Returns the first case which fulfills its condition or the default if none do
- Fields:
  - cases - a list of cases in the order that the dispatcher will try to execute them
    - Fields:
      - condition - a minecraft:predicate
      - number_provider - a minecraft:number_provider which is executed if the condition is fulfilled
  - default - an optional minecraft:number_provider
    - Defaults to a constant 0 if omitted

#### Added minecraft:conditional_value type

- Returns the value from on_true if its condition or on_false if not
- Fields:
  - conditions - a minecraft:predicate
  - on_true - a minecraft:number_provider which is executed if its condition is fulfilled
  - on_false - an optional minecraft:number_provider
    - Defaults to a constant 0 if omitted

#### Added minecraft:weighted_list

- Returns a value from a distribution of weighted number providers
- Fields:
  - distribution - a list of objects with the following fields
    - Fields:
      - data - a minecraft:number_provider
      - weight - a positive integer

### Recipes

#### Potion Brewing Recipes

Potion brewing recipes are now data-driven. New recipes can be added via datapacks, and vanilla recipes may be modified. Brewing recipes use the minecraft:brewing type.

The main contents are:

- input - A potion ingredient with a required item field and an optional potion_contents field using a minecraft:potion_contents Data Component Predicate
- reagent - A potion ingredient with a required item field and an optional potion_contents field using a minecraft:potion_contents Data Component Predicate
- output - item stack, the resulting item

Here is an example of a vanilla recipe:

``` auto
{
  "type": "minecraft:brewing",
  "input": {
    "item": "minecraft:potion",
    "potion_contents": {
      "potion": "minecraft:water"
    }
  },
  "output": {
    "components": {
      "minecraft:potion_contents": {
        "potion": "minecraft:awkward"
      }
    },
    "id": "minecraft:potion"
  },
  "reagent": {
    "item": "minecraft:nether_wart"
  }
}
```

Any items may be used in any of the 3 slots, for example:

``` auto
{
  "type": "minecraft:brewing",
  "input": { "item": "minecraft:bucket" },
  "output": { "id": "minecraft:sulfur_cube_bucket" },
  "reagent": { "item": "minecraft:potent_sulfur" }
}
```

### World Generation

#### Features

- Removed feature types:
  - minecraft:coral_mushroom
  - minecraft:kelp
  - minecraft:seagrass
  - minecraft:sea_pickle

> **Developer's Note**: *These feature types are no longer needed, since the features they previously hardcoded are now implemented with other, more configurable functionality.*

##### Changed minecraft:coral_claw and minecraft:coral_tree

- Added field feature, a Placed Feature that is used to place at every desired block position

#### Placement Modifiers

##### Added minecraft:cuboid

Repeats a feature in a cuboid shape.

Added fields:

- xz_size: Int provider between 1 and 16 representing the size of the cuboid along x and z axes
- y_size: Int provider between 1 and 16 representing the size of the cuboid along the y axis
- include_interior: Optional boolean (default true) for whether to place interior blocks of the cuboid
- include_edges: Optional boolean (default true) for whether to place edge blocks of the cuboid
  - Setting this to false generates a somewhat "rounded" cuboid

##### Added minecraft:random_chance

Gates the feature being placed behind a random chance.

Format:

- chance: Float value between 0 and 1 representing the chance that the feature gets placed

#### Block State Providers

##### Updated minecraft:copy_properties_provider

- Renamed field source_block_state_provider to source

##### Added minecraft:random_block_provider

Returns the default block state for a randomly chosen block.

Format:

- blocks: Block ID, list of Block IDs or hash-prefixed Block Tag, specifying the set of blocks to randomly pick from

##### Changed minecraft:rotated_block_provider

Now works on any block with axis or facing properties.

Format:

- Changed field state: Now a Block State Provider
- Added field direction: Optional field describing the direction to set
  - If omitted, a random direction is chosen

#### Rule Tests

These are the predicates used by ore Features (targets\[\].target), and rule Structure Processors (rules\[\].input_predicate and rules\[\].location_predicate).

##### Added minecraft:any_of

- This checks a list of Rule Tests for whether any of them returns true for the same block
- Format: object with fields:
  - rules - list of Rule Tests, the rules to test the block against

##### Added minecraft:not

- This checks a Rule Test for whether it returns false for a given block
- Format: object with fields:
  - rule - Rule Test, the rule to test the block against

### Tags

#### Block Tags

- Added #sculk_growth_inhibitors for blocks which keep Sculk from spreading when more than 2 are in the 8x2x8 area around it
- Added #cats_can_sit_on - Blocks which Cats can randomly sit on
- Added #cats_can_lie_on - Blocks which Cats can randomly lie on
- Added #speeds_up_zombie_villager_curing - Blocks which can increase Zombie Villager curing time if placed nearby
- Added #villagers_can_sleep_on_bed - Bed blocks which Villagers can sleep on
- Added #villager_babies_can_jump_on_bed - Bed blocks which Villager kids can jump on
- Added #height_specific_ore_replaceables - contains all blocks which Ore Features will turn into Stone Ores if found above y-level 0 and into Deepslate Ores if found below y-level 8

#### Item Tags

- \#dowses_campfires has been renamed to #douses_campfires

#### Structure Tags

- Added #abandoned_camp for all variants of Abandoned Camps

## Resource Pack Version 91.0

### Block Sprites

- Added new Block textures:
  - block/straw_bed.png
  - block/straw_bed_particle.png

### Sounds

- Added new sound events:
  - block.straw_bed.break
  - block.straw_bed.break_leave
  - block.straw_bed.step
  - block.straw_bed.place
  - block.straw_bed.hit
  - block.straw_bed.fall
  - block.poplar_leaves.break
  - block.poplar_leaves.fall
  - block.poplar_leaves.place
  - block.poplar_leaves.step
  - block.poplar_leaves.hit
  - block.red_shrub.break
  - block.red_shrub.place
  - entity.cushion.break
  - entity.cushion.place
  - entity.cushion.get_up
  - entity.cushion.sit

### Item Models

- Added optional shade_direction_override to block model elements
  - Accepted values are cardinal directions (down, up, north, south, west, east)
  - When set, this overrides directional shading for the element regardless of face orientation
- Removed shade from block model elements
  - Use shade_direction_override: "up" to get the previous shade: false behavior

### Shaders & Post-process Effects

#### Always-on Post Effect Support

- A resource pack can now define a minecraft:end_of_frame post effect
- It will be applied before other post effects, including the ones enabled by the new posteffect command
- This post effect is always on as long as the resource pack is loaded, and cannot be controlled by the posteffect command
- As usual with resource pack resources, in case of multiple packs defining this effect, the one from the last resource pack in the list will apply

## Fixed bugs in 26.3 Snapshot 3

- [MC-51859](https://bugs.mojang.com/browse/MC-51859) - The line spacing of text within all hover tooltips is larger between the first and second lines
- [MC-112580](https://bugs.mojang.com/browse/MC-112580) - Structure blocks' GUI does not pause the game in singleplayer
- [MC-112744](https://bugs.mojang.com/browse/MC-112744) - The Team NBT tag only exists for living entities
- [MC-174958](https://bugs.mojang.com/browse/MC-174958) - /gamerule succeeds when the value is not changed
- [MC-175180](https://bugs.mojang.com/browse/MC-175180) - The Silent NBT tag still doesn't make some entities fully silent
- [MC-224528](https://bugs.mojang.com/browse/MC-224528) - Two splash texts use curly single quotes (’) instead of apostrophes (')
- [MC-229831](https://bugs.mojang.com/browse/MC-229831) - Enchanting tables' GUI has three pixels in the top-right corner that shouldn't be there
- [MC-239401](https://bugs.mojang.com/browse/MC-239401) - items/light.png never appears in-game; is pointlessly referenced by other game assets
- [MC-254353](https://bugs.mojang.com/browse/MC-254353) - A packet to remove the score is always broadcast when a score is reset
- [MC-254661](https://bugs.mojang.com/browse/MC-254661) - /schedule clear requires a namespace in its function argument
- [MC-256073](https://bugs.mojang.com/browse/MC-256073) - Miscolored pixel in tab_inventory.png
- [MC-256096](https://bugs.mojang.com/browse/MC-256096) - Some entities on a team can harm teammates that walk into them when friendly fire is disabled
- [MC-256097](https://bugs.mojang.com/browse/MC-256097) - Some entities on a team can harm their teammates when they explode when friendly fire is disabled
- [MC-259583](https://bugs.mojang.com/browse/MC-259583) - Brewing with a single bottle of dragon's breath does not return a glass bottle afterward
- [MC-267902](https://bugs.mojang.com/browse/MC-267902) - The failure message of /random when the specified range is too large states an incorrect maximum for the range
- [MC-271297](https://bugs.mojang.com/browse/MC-271297) - /fillbiome doesn't fail when no changes are made
- [MC-273327](https://bugs.mojang.com/browse/MC-273327) - The #convertable_to_mud block tag misspells "convertible" as "convertable"
- [MC-275532](https://bugs.mojang.com/browse/MC-275532) - The abbreviation "fps" is inconsistently capitalized across strings
- [MC-279185](https://bugs.mojang.com/browse/MC-279185) - The "selectWorld.load_folder_access" string is missing an article before the word "folder"
- [MC-279819](https://bugs.mojang.com/browse/MC-279819) - The mining speed factor of Mining Fatigue is inconsistent at level 3
- [MC-293615](https://bugs.mojang.com/browse/MC-293615) - Tooltip formatting of "Items x number" is inconsistent across different types of items
- [MC-301804](https://bugs.mojang.com/browse/MC-301804) - Test blocks' GUI does not pause the game in singleplayer
- [MC-305707](https://bugs.mojang.com/browse/MC-305707) - /time reports success when no changes are made
- [MC-307616](https://bugs.mojang.com/browse/MC-307616) - Typo in a log message in ActiveProfiler: "aprox"
- [MC-307618](https://bugs.mojang.com/browse/MC-307618) - Typo in a log message in SoundEngine: "disapeared"
- [MC-307648](https://bugs.mojang.com/browse/MC-307648) - "non-heap" is misspelled as "non-head" in the system details section of crash reports
- [MC-307660](https://bugs.mojang.com/browse/MC-307660) - Typo in a log message in GameRenderer: "coudln't"
- [MC-307709](https://bugs.mojang.com/browse/MC-307709) - The texture of upward facing sulfur spikes' merged tip has a single wrong pixel at the very top
- [MC-308460](https://bugs.mojang.com/browse/MC-308460) - Some of the stems in wildflowers and pink petals render brighter
- [MC-308851](https://bugs.mojang.com/browse/MC-308851) - The chat_restriction.disabled_by_profile.action string is improperly capitalized
- [MC-309021](https://bugs.mojang.com/browse/MC-309021) - Poplar leaves' closed captions display as raw translation keys
- [MC-309024](https://bugs.mojang.com/browse/MC-309024) - death.attack.sulfurCubeHot.item displays as a raw translation key
- [MC-309033](https://bugs.mojang.com/browse/MC-309033) - The campsite_flower_forest_1 abandoned camp structure has stripes of orange wool under it
- [MC-309034](https://bugs.mojang.com/browse/MC-309034) - The tent_windswept_forest_8 abandoned camp structure contains a dropped stack of bone meal
- [MC-309054](https://bugs.mojang.com/browse/MC-309054) - The item texture of poplar hanging signs is inconsistent with other hanging signs
- [MC-309058](https://bugs.mojang.com/browse/MC-309058) - The tent_flower_forest_4 abandoned camp structure contains a dropped birch log
- [MC-309090](https://bugs.mojang.com/browse/MC-309090) - Certain entities on shelf mushrooms make a sound every tick
- [MC-309122](https://bugs.mojang.com/browse/MC-309122) - Abandoned camps can generate in areas of wooded badlands with no trees nor grass
- [MC-309155](https://bugs.mojang.com/browse/MC-309155) - Shelf mushrooms and red shrubs do not have unique sounds, unlike in Bedrock Edition
- [MC-309208](https://bugs.mojang.com/browse/MC-309208) - The poplar wood set is inconsistently placed in the Creative mode inventory
- [MC-309261](https://bugs.mojang.com/browse/MC-309261) - Incorrect calculation in the poplar trunk placer
- [MC-309308](https://bugs.mojang.com/browse/MC-309308) - Several abandoned camp structures contain persistent leaves
- [MC-309324](https://bugs.mojang.com/browse/MC-309324) - Ores don't generate in blobs of andesite, diorite, or granite below Y=0
- [MC-309350](https://bugs.mojang.com/browse/MC-309350) - Shelf mushrooms generated with fallen trees replace water
- [MC-309392](https://bugs.mojang.com/browse/MC-309392) - The lighting on entities and block entities is not rendered correctly and appears too dark or too bright on certain sides
- [MC-309395](https://bugs.mojang.com/browse/MC-309395) - The texture of the top halves of poplar doors is missing a pixel on the second hinge
- [MC-309397](https://bugs.mojang.com/browse/MC-309397) - The game renderer corrupts when toggling off fullscreen or resizing the window with the Vulkan rendering backend
- [MC-309399](https://bugs.mojang.com/browse/MC-309399) - The game output console logs "Ignoring chat session from due to missing Services public key” when loading into a world
- [MC-309400](https://bugs.mojang.com/browse/MC-309400) - The glowing effect on entities stays in place when cleared
- [MC-309403](https://bugs.mojang.com/browse/MC-309403) - Having an item with the block_transformer component with a rule_based_state_provider locks the player out of that world
- [MC-309408](https://bugs.mojang.com/browse/MC-309408) - The item tag that controls which items can douse campfires is misspelled as #dowses_campfires
- [MC-309412](https://bugs.mojang.com/browse/MC-309412) - Block items ignore the block_transformer component
- [MC-309420](https://bugs.mojang.com/browse/MC-309420) - The random_neighbor_spread feature has a field misspelled as "xy_offset"
- [MC-309432](https://bugs.mojang.com/browse/MC-309432) - Worlds render entirely magenta on macOS with the Vulkan rendering backend
- [MC-309433](https://bugs.mojang.com/browse/MC-309433) - Drowned can consume or use certain items
- [MC-309435](https://bugs.mojang.com/browse/MC-309435) - Drowned no longer chase after players correctly
- [MC-309441](https://bugs.mojang.com/browse/MC-309441) - Projectiles lose their can_break ability after reloading the world
- [MC-309445](https://bugs.mojang.com/browse/MC-309445) - The game renderer can corrupt when toggling fullscreen or opening an inventory with the OpenGL rendering backend
- [MC-309467](https://bugs.mojang.com/browse/MC-309467) - Player reporting is unavailable
- [MC-309471](https://bugs.mojang.com/browse/MC-309471) - Cannot see other players' skins
- [MC-309518](https://bugs.mojang.com/browse/MC-309518) - Can't scrape oxidation or wax off of copper doors

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/6cd1e711f62dc45497df6f390a9e83ba6191be41/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
