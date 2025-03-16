---
title: Minecraft Java Edition - Snapshot 25w03a
date: 2025-01-15T14:53:43Z
updated: 2025-01-15T17:54:55Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/33498789985037-Minecraft-Java-Edition-Snapshot-25w03a
hash:
  h_01JHN75D2PXP4JPRHNTERR8EXJ: changes
  h_01JHN75D2PP95SMSS5W7N84DBG: technical-changes
  h_01JHN75D2PFCKFV65CGT8KJEKP: game-test-main
  h_01JHN75D2PRK7EQKPPG1Y99Q7S: data-pack-versions-63
  h_01JHN75D2P8YTQ0VVRFPMA7QRE: game-tests
  h_01JHN75D2P6XERB6J1AVVH37P3: test-instances
  h_01JHN75D2P1PFRF4JGHJ7EGCK6: function-tests
  h_01JHN75D2PSTNYB5A0T2S0D3T8: block-based-tests
  h_01JHN75D2PZEY34KN8QK9HYHSF: test-environments
  h_01JHN75D2PA8TZR1V6K1PNHZHE: test-blocks
  h_01JHN75D2PY906JB0TPGKPDWMT: thetestcommand
  h_01JHN75D2P796VTXPNBKPWQ8R5: test-clear
  h_01JHN75D2PBHJFPFMY3QRKV7NP: test-create
  h_01JHN75D2PSY0C777XE84S69J4: test-locate
  h_01JHN75D2P869NYHJQYDPMWA7N: test-reset
  h_01JHN75D2PWTZ08YEP5RJD95W8: test-pos
  h_01JHN75D2PRAQCDBAME53SW1XX: test-run
  h_01JHN75D2P26Z1QR1GTKCHSM29: test-stop
  h_01JHN75D2PAHD2DPE6NME35R61: test-verify
  h_01JHN75D2P0RHA6ASGZNTSW602: test-instance-blocks
  h_01JHN75D2PEMAS2SPJDEXDP5P8: using-the-game-test-framework-from-code
  h_01JHN75D2Q9HPBJ15Z2H67JMY4: commands
  h_01JHN75D2QR0WV0HVJTZ0R09Y9: text-component-data-format
  h_01JHN75D2QXVZYMMDNVXXD3FVP: hover-events
  h_01JHN75D2QJ79W6Q089S2GGC3S: tags
  h_01JHN75D2QHRFDZDPA8RMS5WKQ: entity-tags
  h_01JHN75D2QDM0KCJ8RHAH3SX85: entity-data
  h_01JHN75D2Q1S0QDQKREZCVQT90: item-components
  h_01JHN75D2QWHY7HTR8GAW55XJ8: weaponcomponent
  h_01JHN75D2Q5F4A81K914RHFKJR: equippablecomponent
  h_01JHN75D2QAXY95NR5RS03N64N: entity-variant-components
  h_01JHN75D2QFMZPYH9FF9HP86J6: predicates
  h_01JHN75D2QPJE27QWCBXW84WRZ: entity-predicates
  h_01JHN75D2QE0YMY9MF474ZQ1RW: resource-pack-version-48
  h_01JHN75D2QFZ07Z4QCVBAFZVSA: equipment-assets
  h_01JHN75D2QZYWJ7RQ12W8WCSKJ: item-models
  h_01JHN75D2QJH4VZQP703GCET3Z: minecraftcomponentselect-property
  h_01JHN75D2Q3C0TR38R8H4ZAWMQ: fixed-bugs-in-25w03a
  h_01JHN75D2QN6165WSFY2XPY2JD: get-the-snapshot
---

This week's snapshot comes with a huge update to game tests! The game tests system is now accessible through data packs with the new test command. You can now run block based tests with the new test block or set up even more versatile test from code in mods.

Happy testing!

## Changes

- Leaf Litter can be used in the Composter
- Saddles equipped onto Pigs or Striders will now maintain properties such as custom name when dropped

## Technical Changes

- The Data Pack version is now 63
- The Resource Pack version is now 48
- New entry point net.minecraft.gametest.Main is present in the server jar
  - Automatically starts a server and runs all available game tests

### Game Test Main

This new entry point automatically starts a server, runs all available game tests and then exits.

Options:

- --help - Shows usage information
- --packs \<path\> - Set a folder of datapacks to include in the world
  - Any zip file or folder with a pack.mcmeta file is included
- --report \<path\> - Exports results in a junit-like XML report at the given path
- --tests \<selection\> - Specify which tests to run with a selection - a wildcard expression matching namespace test instance IDs
  - If omitted, or used with an empty ID, runs all tests
- --universe \<path\> - The path to where the test server world will be created
  - Any existing folder will be replaced
  - Default: gametestserver
- --verify \<boolean\> - Enables test verification
  - Runs the tests specified with test or testNamespace 100 times for each 90 degree rotation step
  - Default: false

Example usage: java -DbundlerMainClass="net.minecraft.gametest.Main" -jar server.jar --packs mytestpacks

## Data Pack Versions 63

- The Game Tests system is now accessible through data packs and for mods
- Entity variants are now set and queried with components
- Added saddle equipment slot, driven by the equippable component - Only mobs that normally support saddles will support riding and rendering of the saddle - Items in the saddle slot can apply attribute modifiers as with other equipment

### Game Tests

The Game Tests system is a new integrated system for testing aspects of the game. Each test is an asset defining some parameters for how the test gets executed, combined with a saved structure file containing a base setup.

Generally, the test framework expects to run tests in a separate superflat world.

#### Test Instances

Test instances are defined in the registry test_instance. They're small assets defining a test to run.

Fields:

- environment: Namespaced ID of the test environment to run this test as part of
- structure: The namespaced ID of the structure to use for the test
- max_ticks: A positive integer representing the maximum number of ticks allowed to pass before the test is considered timed out
- setup_ticks: Optional non-negative integer (default: 0) representing a number of ticks to wait after placing the structure before starting the test
- required: Optional boolean (default true) - whether the test is considered required to pass for the full test suite to pass
- rotation: Optional rotation to apply to the test structure
  - One of none (default), clockwise_90, 180 and counterclockwise_90
- manual_only: Optional boolean (default false), set to true for tests that are not included as part of automated test runs
- sky_access: Whether the test needs clear access to the sky
  - By default (false), tests are enclosed in barrier blocks - if set to true, the top is left open
- max_attempts: Number of attempts to run the test (default 1)
- required_successes: Number of attempts that must succeed for the test to be considered successful (default 1)
- type: The type of test - one of block_based and function

##### Function Tests

Function tests rely on built-in functions to run a test and indicate success or failure. They have one additional field:

- function: The namespaced ID of the Test Function to run

See the "Using the Game Test Framework from Code" changelog section for more information.

##### Block Based Tests

Block based tests use Test Blocks in the test structure to run the test and indicate success or failure.

#### Test Environments

Test Environments are a way to group up tests and give them the right preconditions to run. A Test Environment is an asset in the test_environment registry. Each Test Environment definition has a type field that determines its setup:

- all_of definitions apply the setup from several sub-definitions in the definitions field
- function definitions use mcfunction files as setup and teardown
  - setup: Optional namespaced ID of the mcfunction to use for setup, if any
  - teardown: Optional namespaced ID of the mcfunction to use for teardown, if any
- game_rules: definitions set any number of game rules
  - bool_rules: A list of boolean game rules to set and the value to set
  - int_rules: A list of integer game rules to set and the value to set
  - Each rule is an object with two fields:
    - rule: The exact name of the rule to set
    - value: The value to set
  - Game rules are reset to their default values after the test environment has completed
- weather definitions sets the weather state
  - weather: The weather to set - one of clear, rain and thunder
- time_of_day definitions set a given time of day
  - time: The time of day to set in number of ticks, as a non-negative integer

The game provides a single, empty Test Environment by default: minecraft:default.

#### Test Blocks

The Test Block is a block used for implementing a block-based tests. It has four modes:

- start: Triggers a redstone pulse when the test starts
- log: Logs a message to the log file when powered by redstone
- fail: Fails the test when powered by redstone
- accept: Completes the test when powered by redstone

Block-based tests are required to have at least one start block and one accept block in the structure.

#### The test Command

The test command is a new command used to create and run tests.

Syntax:

    test clearall [<radius>]
    test clearthat
    test clearthese

    test create <test> [<width>] [<height> <depth>]

    test locate <selector>

    test resetclosest
    test reseetthese
    test resetthat

    test pos [<variable>]

    test run <selector> [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runclosest [<numberOfTimes>] [<untilFailed>]
    test runfailed [<numberOfTimes>] [<untilFailed>] [<rotationSteps>] [<testsPerRow>]
    test runmultiple <selector> [<amount>]
    test runthat [<numberOfTimes>] [<untilFailed>]
    test runthese [<numberOfTimes>] [<untilFailed>]

    test stop

    test verify <tests>

Parameters:

- radius: The radius to clear tests within
- test: The namespaced ID of a test
- selector: A wildcard-enabled selector for test IDs
  - Supports \* and ? for matching namespaced IDs
  - If namespace is not supplied, defaults to minecraft
  - Examples:
    - \*:\* - matches all IDs
    - \* - matches everything in the minecraft namespace
    - custom:folder/\*\_test\_? - matches IDs in the folder folder of the custom namespace, with a prefix followed by \_test\_ followed by a single valid character
- width: The width of the test structure - if omitted, 5 is used
- height: The height of the test structure - if omitted, the width is used
- depth: The depth of the test structure - if omitted, the width is used
- variable: The variable name to include in the copied code snippet
- numberOfTimes: The number of times to repeat each test - if omitted, 1 is ued
- untilFailed: Boolean (default false) noting that the test should be stopped as soon as one iteration fails
- rotationSteps: Number of extra 90 degree steps to apply to the test - if omitted, 0 is used
- testsPerRow: Number of tests to place per row in a grid layout - if omitted, 8 is used

##### test clear\*

These subcommands clear the structures and blocks associated with the selected tests.

##### test create

This subcommand creates a test setup in the current location for the given test, preparing for a structure of the given size. This gives a starting point for creating the structure for the test.

##### test locate

Attempts to locate the given test. Note that only loaded chunks are searched.

##### test reset\*

These subcommands reset the structures for the selected tests, removing any surrounding barriers and placing the structure in from scatch.

##### test pos

Shows the local coordinates to the block pointed at in the test. If the optional variable name is specified, this variable name is used in a code fragment obtained by clicking on the coordinates in the output message.

##### test run\*

Runs one or more tests. If multiple tests are run at once, they are placed in a grid and run in parallel, although only up to a certain limit. Beyond that limit, tests are run in rounds where each round completes before any tests from the next round are started.

For each test, loads the given structure and runs the associated test. Each test location will have a beacon beam showcasing the test status.

- Gray beacon = in progress
- Red = fail (required test)
- Orange = fail (optional test)
- Green = success

If a test fails, the error is shown on a lectern book and an overlay.

Note that Game Tests are designed to run on standard superflat worlds. The area around each test is replaced with stone when it runs, and the running test is encased in barrier blocks.

##### test stop

This stops all running tests. Note that gameplay events triggered by tests may still remain.

##### test verify\*

Verifies one or more tests by running multiple instances of the same test.

#### Test Instance Blocks

To run a test in a world, a Test Instance Block is used. This type of block represents the test as placed in the world and is used to interact with that test, to save the structure, reset or run the test.

Using the test command to run or create a test will also place a Test Instance Block to control that test.

#### Using the Game Test Framework from Code

The Game Test Framework can also be used from code in a more versatile manner than block-based tests. For this to work, you need to mod the game to add your test functions to the test_function registry (Registries.TEST_FUNCTION).

Hook into some startup method (pre-registry bootstrap) to add your loader - call TestFunctionLoader.registerLoader() with an implementation of TestFunctionLoader. Your implementation can then use the provided register consumer to register test functions with their namespaced IDs. This namespaced ID can then be referenced in a function type Test Instance.

A test function is a Consumer\<GameTestHelper\>, using that GameTestHelper instance to manipulate the world and make assertions about the state of the resulting world.

The helper can be used to summon mobs, set blocks, query for blocks and entities and assert the state of the test. Most GameTestHelper methods take test-local coordinates, which you can also find using /test pos.

Example code that might go along with a test structure with a locked hopper containing a cod, pointed into a furnace:

    public void furnace_smelts_item(final GameTestHelper helper) {
        helper.setBlock(0, 4, 0, Blocks.AIR);
        helper.succeedWhen(() -> helper.assertContainerContainsSingle(new BlockPos(0, 0, 0), Items.COOKED_COD));
    }

More complicated setups will often use helper.startSequence() to model sequences of events that must happen.

As opposed to block-based tests, function tests failing will often produce more helpful error messages including the location of whatever failed and what was expected at that location.

### Commands

- The horse.saddle item slot has been renamed to saddle, and now supports any entity that can equip a Saddle

### Text Component Data Format

#### Hover Events

- For the show_text action:
  - text field has been renamed to value

### Tags

#### Entity Tags

- Added \#can_equip_saddle - entities that can be equipped with a Saddle
  - Note: this does not mean that the Saddle will function, just that it can be equipped into the saddle slot

### Entity Data

- The ArmorItems, HandItems, and body_armor_item fields have been merged into an equipment field
  - Format: map between equipment slot type and item stack
    - Valid equipment slots: head, chest, legs, feet, mainhand, offhand, body, saddle
  - If not specified or removed, the entity will have no equipment
  - e.g. equipment:{chest:{id:'minecraft:diamond_chestplate'}}
  - This affects all mobs and Armor Stands, but Players are unaffected
- The data format of saddles has been unified between mobs such as Horses and Pigs, becoming a new kind of equipment slot (and stored in the equipment.saddle field)
  - This is a pure rename from the previous SaddleItem in Horse-like mobs
  - This also replaces the boolean Saddle flag from Pigs and Striders
  - The Saddle dropping on death is now affected by the drop_chances field, as with other equipment slots
- The FallDistance field has been changed from float to double and is now called fall_distance

### Item Components

#### weapon component

- damage_per_attack field was renamed to item_damage_per_attack

#### equippable Component

- Can now apply to saddle slot
- Any mob can now have equipment added in the body slot as long as the component allows it (allowed_entities)
- Added new optional field: equip_on_interact (boolean)
  - If true, players can equip this item onto a target mob by right-clicking it (as long as this item can be equipped on the target at all)
  - The item will not be equipped if the target already has an item in the relevant slot
  - If not specified, defaults to false

#### Entity variant components

- Entities now have a set of components for configuring variants and other aspects of apperance
- If those components are present on spawning item (like spawn eggs, mob buckets, minecraft:painting, minecraft:item_frame), they will be applied to new entity
- Components are currently not restored when spawn egg is picked from existing entity
- New components:
  - villager/variant - one of desert, jungle, plains, savanna, snow, swamp, taiga
  - wolf/variant - namespaced id from wolf_variant registry
  - wolf/collar - one of 16 dye colors
  - fox/variant - one of red, snow
  - salmon/size - one of small, medium, large
  - parrot/variant - one of red_blue, blue, green, yellow_blue, gray
  - tropical_fish/pattern - one of kob, sunstreak, snooper, dasher, brinely, spotty, flopper, stripey, glitter, blockfish, betty, clayfish
  - tropical_fish/base_color - one of 16 dye colors
  - tropical_fish/pattern_color - one of 16 dye colors
  - mooshroom/variant - one of red, brown
  - rabbit/variant - one of brown, white, black, white_splotched, gold, salt, evil
  - pig/variant - namespaced id from pig_variant registry
  - frog/variant - namespaced id from frog_variant registry
  - horse/variant - one of white, creamy, chestnut, brown, black, gray, dark_brown
  - painting/variant - namespaced id from painting_variant registry
  - llama/variant - one of creamy, white, brown, gray
  - axolotl/variant - one of lucy, wild, gold, cyan, blue
  - cat/variant - namespaced id from cat_variant registry
  - cat/collar - one of 16 dye colors
  - sheep/color - one of 16 dye colors
  - shulker/color - one of 16 dye colors
- Mob buckets and paintings available in creative menu will now use new variants instead of minecraft:entity_data component
- Custom tooltips for Bucket of Tropical Fish and Painting items are now based on new components instead of minecraft:bucket_entity_data and minecraft:entity_data

### Predicates

#### Entity predicates

- New optional field has been added to entity predicate: components
  - When present, predicate will match contents of entity components (similarily to field components on item predicate that works on item stacks)
  - Format: map of component type key to matching component values
- Following entity sub-predicates have been removed and replaced with combination of components predicate and variant entity components:
  - minecraft:axolotl
  - minecraft:fox
  - minecraft:mooshroom
  - minecraft:rabbit
  - minecraft:horse
  - minecraft:llama
  - minecraft:villager
  - minecraft:parrot
  - minecraft:salmon
  - minecraft:tropical_fish
  - minecraft:painting
  - minecraft:cat
  - minecraft:frog
  - minecraft:wolf
  - minecraft:pig
- Field color has been removed from minecraft:sheep sub-predicate

## Resource Pack Version 48

- Added new equipment asset layer type for Pigs and Striders, and moved saddle textures
- Changed the size of pig_saddle texture

### Equipment Assets

- Equipment assets may now define new layer types:
  - pig_saddle - equipment layer for Pig saddles
  - strider_saddle - equipment layer for Strider saddles
  - camel_saddle - equipment layer for Camel saddles
  - horse_saddle - equipment layer for Horse saddles
  - donkey_saddle - equipment layer for Donkey saddles
  - mule_saddle - equipment layer for Mule saddles
  - skeleton_horse_saddle - equipment layer for Skeleton Horse saddles
  - zombie_horse_saddle - equipment layer for Zombie Horse saddles
- The following textures have been moved to support the use of equipment assets for saddles:
  - entity/pig/pig_saddle.png -\> entity/equipment/pig_saddle/saddle.png
  - entity/strider/strider_saddle.png -\> entity/equipment/strider_saddle/saddle.png
- The following textures have been split from their base entity texture to support the use of equipment assets for saddles:
  - entity/camel/camel.png -\> entity/equipment/camel_saddle/saddle.png
  - entity/horse/horse\_\<variant\>.png -\> entity/equipment/horse_saddle/saddle.png
  - entity/horse/donkey.png -\> entity/equipment/donkey_saddle/saddle.png
  - entity/horse/mule.png -\> entity/equipment/mule_saddle/saddle.png
  - entity/horse/horse_skeleton.png -\> entity/equipment/skeleton_horse_saddle/saddle.png
  - entity/horse/horse_zombie.png -\> entity/equipment/zombie_horse_saddle/saddle.png

### Item Models

#### minecraft:component Select Property

- New data source has been added to select item model: component
- Returns value of component on item, if any
- Fields:
  - component - namespaced ID of component type
- Possible values: depends on component type
  - Example: if component is set to minecraft:wolf/collar, list of cases will accept dye colors, like lime

## Fixed bugs in 25w03a

- [MC-13738](https://bugs.mojang.com/browse/MC-13738) - Invisible saddle when using invisibility potion on a horse, donkey or mule
- [MC-80243](https://bugs.mojang.com/browse/MC-80243) - Saddles don't apply attribute modifiers when worn by entities
- [MC-189525](https://bugs.mojang.com/browse/MC-189525) - Armored entities from pre-1.9 worlds upgrade to dual wielding armor
- [MC-190000](https://bugs.mojang.com/browse/MC-190000) - Saddles equipped on horses cannot be replaced without removing them first
- [MC-256469](https://bugs.mojang.com/browse/MC-256469) - Invisible camels don't show their saddles
- [MC-266912](https://bugs.mojang.com/browse/MC-266912) - Saddle equipping sounds aren't played when saddles are equipped on horses, donkeys, mules, or camels shortly after the said entity is summoned
- [MC-269637](https://bugs.mojang.com/browse/MC-269637) - Horses can wear multiple saddles but not multiple horse armor
- [MC-270192](https://bugs.mojang.com/browse/MC-270192) - The saddles of some entities stay visible through their death animation
- [MC-270197](https://bugs.mojang.com/browse/MC-270197) - The saddle on pigs and striders stays visible through their death animation
- [MC-272100](https://bugs.mojang.com/browse/MC-272100) - Unused palette pixels in horse textures (horse\_\[brown/chestnut/creamy/white\].png)
- [MC-272790](https://bugs.mojang.com/browse/MC-272790) - Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
- [MC-274258](https://bugs.mojang.com/browse/MC-274258) - All horse textures contain an unused chest bag texture
- [MC-278673](https://bugs.mojang.com/browse/MC-278673) - The x-rotation of /teleport is limited to ±90 degrees relative to the entity's original angle
- [MC-279208](https://bugs.mojang.com/browse/MC-279208) - Players can no longer begin sprinting when pressing a sideways movement key first
- [MC-279211](https://bugs.mojang.com/browse/MC-279211) - Shulker boxes both keep and drop their contents upon being broken via certain methods causing item duplication
- [MC-279213](https://bugs.mojang.com/browse/MC-279213) - Mushroom Blocks can't replace Leaf Litter
- [MC-279221](https://bugs.mojang.com/browse/MC-279221) - Leaf Litter replaces leaves in world gen
- [MC-279224](https://bugs.mojang.com/browse/MC-279224) - Using bone meal in meadows doesn't generate wildflowers
- [MC-279226](https://bugs.mojang.com/browse/MC-279226) - Experience orbs of any value all render as the smallest value
- [MC-279233](https://bugs.mojang.com/browse/MC-279233) - Shulker boxes drop their contents when broken
- [MC-279234](https://bugs.mojang.com/browse/MC-279234) - The minecraft:entity.generic.extinguish_fire sound does not play when the fire on an entity is extinguished
- [MC-279238](https://bugs.mojang.com/browse/MC-279238) - Dying to a minecart with TNT ignited by a blaze fireball doesn't count as the blaze's kill
- [MC-279239](https://bugs.mojang.com/browse/MC-279239) - The motion of primed TNT is choppy and jittery
- [MC-279245](https://bugs.mojang.com/browse/MC-279245) - Most hostile mobs aren't spawning even under the right conditions
- [MC-279248](https://bugs.mojang.com/browse/MC-279248) - Lava collision is too high
- [MC-279281](https://bugs.mojang.com/browse/MC-279281) - Fall damage occurs from jumping from 2 blocks up
- [MC-279282](https://bugs.mojang.com/browse/MC-279282) - Parrots with non-player owner UUID cause crash upon spawning
- [MC-279285](https://bugs.mojang.com/browse/MC-279285) - Experience orbs abruptly accelerate towards the ground very fast
- [MC-279301](https://bugs.mojang.com/browse/MC-279301) - Player dies by falling from 22.00001 blocks instead of 23 blocks
- [MC-279313](https://bugs.mojang.com/browse/MC-279313) - The motion of item entities is choppy and jittery under certain circumstances
- [MC-279314](https://bugs.mojang.com/browse/MC-279314) - Projectiles twitch up and down slightly while flying through the air
- [MC-279316](https://bugs.mojang.com/browse/MC-279316) - The motion of fishing bobbers is choppy and jittery
- [MC-279339](https://bugs.mojang.com/browse/MC-279339) - Update order for sloped rails is incorrect
- [MC-279340](https://bugs.mojang.com/browse/MC-279340) - Baby polar bears are too small
- [MC-279345](https://bugs.mojang.com/browse/MC-279345) - Pink petals and Wildflowers can no longer be grown by bone meal
- [MC-279357](https://bugs.mojang.com/browse/MC-279357) - Player can fall off edges while sneaking
- [MC-279434](https://bugs.mojang.com/browse/MC-279434) - Standing on powder snow and fire at the same time spams the fire extinguish sound
- [MC-279459](https://bugs.mojang.com/browse/MC-279459) - /setblock and other fills don't properly update block entities

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/e003d151668a0eff64c1191972707655e341f8f5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
