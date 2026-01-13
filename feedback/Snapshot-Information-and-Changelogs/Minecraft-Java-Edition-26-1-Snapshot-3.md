---
title: Minecraft Java Edition - 26.1 Snapshot 3
date: 2026-01-13T15:05:20Z
updated: 2026-01-13T15:05:26Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/42636283994637-Minecraft-Java-Edition-26-1-Snapshot-3
hash:
  h_01KEVY73KSMKNX0NFSY21JCXAH: changes
  h_01KEVY73KTBTN902KPS0EQ298C: minor-tweaks-to-blocks-items-and-entities
  h_01KEVY73KTPKGQENS4R0PEVV0R: ui
  h_01KEVY73KTHYPGQ7EN0NHX8BKN: debug-screen
  h_01KEVY73KXJ5TDGE9FSNHETK2J: game-rules
  h_01KEVY73KYA0CERYZ4XS0MHM1H: world-options
  h_01KEVY73KZWAAASXVJM6CWRX9V: technical-changes
  h_01KEVY73KZ71QPD2NFAKXHHK7A: data-pack-version-97
  h_01KEVY73M18WXAPVPJK1GMQFTG: world-clocks
  h_01KEVY73M3623GMWDHFV8J0CAE: timelines
  h_01KEVY73M7Q91KY17K5K4V7FQW: time-markers
  h_01KEVY73M85TDS5R8765ZHPGF1: built-in-uses-of-time-markers
  h_01KEVY73M9G47SN00GT8ND5PGK: commands
  h_01KEVY73M9AYG46HX2W3NKZYD6: changes-toswing
  h_01KEVY73MBXK3HFRRFX23BT5QN: changes-totime
  h_01KEVY73MG1APJ61SRWT1CT8DP: game-test-environments
  h_01KEVY73MG2JRCDQMPMFRPFAXR: replacedtime_of_daywithclock_time
  h_01KEVY73MHWB9XECJ768XNQA5G: predicates
  h_01KEVY73MHWSQ4KHNGN263JEXV: minecrafttime_checkloot-predicate
  h_01KEVY73MJ7J52GMN35PMH02XH: recipes
  h_01KEVY73MM8JB43QY63B675DGX: world-generation
  h_01KEVY73MMRZN2G8QXY56XB0WR: dimension-types
  h_01KEVY73MNS5E48NQ96J31M3Q2: tags
  h_01KEVY73MNXGV3RHC7JSVYT236: block-tags
  h_01KEVY73N6ZPPWRZ4JCYE9971E: fluid-tags
  h_01KEVY73N71PQQ9J6MYSR3YMWE: resource-pack-version-78
  h_01KEVY73N8VGF68Q161YMB8KAE: fixed-bugs-in-261-snapshot-3
  h_01KEVY73NA5MSRAAC18P9X77G8: get-the-snapshot
---

We're back in action with another Snapshot! In this week's release we're making it possible to access game rules from the in-game pause screen, through the new world options button. On the data pack side of things, we're introducing a new concept of world clocks, which is an expansion of the work we did on timelines last year. For more information about world clocks and more, browse the full changelog below.

Happy mining!

 

## Changes

- Additional tweaks to JVM configuration

### Minor Tweaks to Blocks, Items and Entities

- The Tripwire texture is now rendered as alpha cutout instead of transparent

### UI

#### Debug Screen

- A day_count debug entry has been split from local_difficulty

#### Game Rules

- The Game Rules screen is now accessible in-game through a new World Options screen in the pause menu
- A search bar has been added to the top of the Game Rules screen, both in-game and in the world creation menu

#### World Options

The difficulty button in the pause menu has been replaced with a button leading to a new screen - World Options.

- The World Options screen contains the difficulty button as well as a button for changing Game Rules
- The Game Rules screen is available for all operators and otherwise disabled

## Technical Changes

- The Data Pack version is now 97
- The Resource Pack version is now 78

## Data Pack Version 97

- Added new block tags
- Added new fluid tags
- Changed format of time command to work with World Clocks and Timelines
- Updated time_check condition to specify a World Clock

### World Clocks

World Clocks contain an internal time that increases every tick. They can be defined in data packs under the world_clock registry (i.e. found under data/\<namespace\>/world_clock/\<id\>.json)

- World Clocks can be paused or resumed, and the time of the clock can be changed or queried from the time command
- Format: object with no fields

### Timelines

- Added a clock field: a World Clock ID, specifies which World Clock the timeline is tied to
  - This field is required, but to match previous behavior the minecraft:overworld clock can be used
- Added an optional time_markers field, an optional map between namespaced Time Marker IDs and either an int or a Time Marker object,
  - Format:
    - Non-negative int, the tick that the time marker marks
    - Or object with fields:
      - ticks: int between 0 and period_ticks, the tick that the time marker marks
      - show_in_commands: optional boolean, specifies whether the Time Marker will show up in command suggestions
        - Default: false

#### Time Markers

Time Markers assign a particular name to a specific (optionally repeating) point in time for a specific World Clock. Time Markers replace the previously predetermined names that could be used by /time set, for example day or night.

Time Markers will exist within the context of a specific World Clock. This means that even though the different Time Markers are defined by different Timelines, only one Time Marker can exist with a particular id for a particular World Clock. It also means that two World Clocks can have a Time Marker with the same name.

#### Built-in uses of Time Markers

Some Time Markers are used to drive Vanilla game behavior. Usually, they are configured to not show up in /time commands.

- minecraft:wake_up_from_sleep - the time to advance the dimension's default clock to when players in that dimension wake up after sleeping
- minecraft:roll_village_siege - the time of the dimension's default clock at which the random chance for a Zombie Village siege to occur should be evaluated

### Commands

#### Changes to swing

- Both arguments can now be omitted and will fall back to the following defaults:
  - The entity selector will be @s if omitted
  - Which hand to swing will be mainhand if omitted

#### Changes to time

- The time command is now based on World Clocks
  - A clock can be optionally specified as an input for the time command with time of \<clock\> ...
  - If the clock is not specified (/time ... as before), the default clock for the dimension is used
- The return value (e.g. from /execute store) from the set and add subcommands is now the total elapsed ticks of the clock instead of the current time of day

Syntax:

- time \[of \<clock\>\] set \<time\> - sets the total elapsed ticks of the clock
- time \[of \<clock\>\] set \<timemarker\> - advances the clock forward to the next occurrence of the time marker
  - For the minecraft:overworld clock, the available time markers are: day, noon, night, and midnight
- time \[of \<clock\>\] add \<time\> - adds ticks to the clock, can be a negative or a positive number
- time \[of \<clock\>\] pause - pauses the clock
- time \[of \<clock\>\] resume - resumes the clock
- time \[of \<clock\>\] query \<timeline\> - displays and returns the current number of ticks within the timeline's period
- time \[of \<clock\>\] query \<timeline\> repetitions - displays and returns the number of times the timeline's period has repeated
- time \[of \<clock\>\] query time - displays and returns the total elapsed ticks of the clock
- time query gametime - as before, the total elapsed ticks within the world (unaffected by changes made to clocks using /time)

### Game Test Environments

#### Replaced time_of_day with clock_time

- Added a new required field clock: World Clock ID, the clock within which to set time (from the existing time field)

### Predicates

#### minecraft:time_check Loot Predicate

- Added clock field: a World Clock ID, specifies which World Clock the time check should be done for

### Recipes

- result field should now be more consistent across all recipe types that contain it
  - It will now accept short form (e.g. "minecraft:foo", which is equivalent to {"id":"minecraft:foo", "count": 1})
  - For recipe types smelting, blasting, smoking and campfire_cooking this field now also accepts count field

### World Generation

#### Dimension Types

- Added field:
  - default_clock: optional World Clock ID
    - Specifies the default clock that will be used for the time command.
      - If not specified, the time command will require an explicit clock argument
    - Also specifies the clock to which minecraft:wake_up_from_sleep and minecraft:roll_village_siege time markers apply
      - If not specified, those time markers will never apply in that dimension

### Tags

#### Block Tags

- Added the following tags which determine which blocks a category of vegetation can be placed on and survive
  - \#supports_vegetation which provides support to the following blocks:
    - Bush
    - Short Grass
    - Tall Grass
    - Fern
    - Large Fern
    - Pitcher Plant
    - Sunflower
    - Lilac
    - Rose Bush
    - Peony
    - Eyeblossom
    - Firefly Bush
    - Pink Petals
    - Wildflowers
    - Dandelion
    - Torchflower
    - Poppy
    - Blue Orchid
    - Allium
    - Azure Bluet
    - Red Tulip
    - Orange Tulip
    - White Tulip
    - Pink Tulip
    - Oxeye Daisy
    - Cornflower
    - Sweet Berry Bush
    - Oak Sapling
    - Spruce Sapling
    - Birch Sapling
    - Jungle Sapling
    - Acacia Sapling
    - Cherry Sapling
    - Dark Oak Sapling
    - Pale Oak Sapling
  - \#supports_crops which provides support to the following crops at all growth stages:
    - Wheat
    - Carrot
    - Potato
    - Beetroot
    - Torchflower Crop
    - Pitcher Plant Crop
  - \#supports_stem_crops
  - \#supports_pumpkin_stem
  - \#supports_melon_stem
  - \#supports_sugar_cane
  - \#supports_sugar_cane_adjacently
    - Which blocks satisfy adjacency support requirements for Sugar Cane
  - \#supports_cactus
  - \#supports_chorus_plant
  - \#supports_chorus_flower
  - \#supports_nether_sprouts
  - \#supports_azalea
  - \#supports_warped_fungus
  - \#supports_crimson_fungus
  - \#supports_mangrove_propagule
  - \#supports_hanging_mangrove_propagule
  - \#supports_nether_wart
  - \#supports_warped_roots
  - \#supports_crimson_roots
  - \#supports_wither_rose
  - \#supports_cocoa
  - \#supports_lily_pad
  - \#supports_frogspawn
    - Empty by default
  - \#support_override_cactus_flower
    - Cactus Flowers can be placed on blocks in this tag even if they do not have a sturdy top face
- Added the following tags which determine which blocks are not able to support specific categories of vegetation
  - \#cannot_support_seagrass
  - \#cannot_support_kelp
- Renamed the following tags for consistency:
  - \#dry_vegetation_may_place_on -\> #supports_dry_vegetation
  - \#bamboo_plantable_on -\> #supports_bamboo
  - \#small_dripleaf_placeable -\> #supports_small_dripleaf
  - \#big_dripleaf_placeable -\> #supports_big_dripleaf
  - \#mushroom_grow_block -\> #overrides_mushroom_light_requirement
    - Mushrooms cannot survive without a light level below 13 if not in the above tag
  - \#snow_layer_can_survive_on -\> #support_override_snow_layer
    - Snow layers can be placed on blocks in this tag even if they do not have a top full face
  - \#snow_layer_cannot_survive_on -\> #cannot_support_snow_layer
- Added #grows_crops which defines which blocks beneath allow the following crops to grow:
  - Wheat
  - Carrot
  - Potato
  - Beetroot
  - Torchflower Crop
  - Pitcher Plant Crop
  - Pumpkin Stem
  - Melon Stem
- Added the following tags to define which blocks can start particular types of Bubble Columns
  - \#enables_bubble_column_drag_down
    - Magma Block by default
  - \#enables_bubble_column_push_up
    - Soul Sand by default

#### Fluid Tags

- Added tags to determine which fluids can support the following blocks:
  - \#supports_lily_pad
  - \#supports_frogspawn
- Added #supports_sugar_cane_adjacently
  - Which fluids satisfy adjacency support requirements for Sugar Cane
- Added #bubble_columns_can_occupy fluid tag to define which fluids a bubble column can occupy with water as default

## Resource Pack Version 78

- The Tripwire texture is now rendered as alpha cutout instead of transparent

## Fixed bugs in 26.1 Snapshot 3

- [MC-297536](https://bugs.mojang.com/browse/MC-297536) - Z-fighting occurs on the debug crosshair
- [MC-299992](https://bugs.mojang.com/browse/MC-299992) - Unexpected behavior when giving or testing for an item with certain components manually specified as their default values
- [MC-305105](https://bugs.mojang.com/browse/MC-305105) - The spear in an entity's main hand gets animated when their off hand arm is swung using /swing
- [MC-305156](https://bugs.mojang.com/browse/MC-305156) - Dialog elements are not displayed until the UI is refreshed
- [MC-305251](https://bugs.mojang.com/browse/MC-305251) - Breezes are aggressive toward every mob
- [MC-305261](https://bugs.mojang.com/browse/MC-305261) - The enchant_with_levels and enchant_randomly functions can crash the game
- [MC-305292](https://bugs.mojang.com/browse/MC-305292) - Copper chests use the Christmas present texture
- [MC-305459](https://bugs.mojang.com/browse/MC-305459) - Villagers spawned from spawn eggs use the biome at the world origin (0, 0, 0) for their variant
- [MC-305540](https://bugs.mojang.com/browse/MC-305540) - Wandering traders sell pumpkins instead of kelp for 3 emeralds
- [MC-305577](https://bugs.mojang.com/browse/MC-305577) - Piglins no longer flee from greater numbers of hoglins

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/430ae0858fe2663346745a7be773cebc68a79e31/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
