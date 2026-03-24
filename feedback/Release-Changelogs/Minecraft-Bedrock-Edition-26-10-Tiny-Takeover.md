---
title: "Minecraft: Bedrock Edition 26.10 - Tiny Takeover"
date: 2026-03-19T10:56:35Z
updated: 2026-03-24T16:41:56Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44418129038733-Minecraft-Bedrock-Edition-26-10-Tiny-Takeover
hash:
  minecraftserver-net: ""
---

**Posted:** 24 March 2026

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/44418166174989" alt="26.10_1920x1080.png" />
</figure>

Ready or not, here comes the Tiny Takeover drop! New versions of baby mobs have stormed Minecraft, causing cuteness overload across biomes and builds. Listen out for heart-melting sounds, craft name tags for your pets, and keep babies forever young with the golden dandelion. The babies are officially on the loose, so get ready to collect, coo over, and create chaos with these tiny rascals!

## Drop 1 2026

## Mobs

- Using a Spawn Egg on the corresponding Mob will now spawn the Baby form of that Mob

- Updated the models and textures of the following Baby Mobs:

  - Cow

    - Tweaked the bounding box of both adult and baby to align with Java Edition and the new model

  - Mooshroom

    - Tweaked the bounding box of both adult and baby to align with Java Edition and the new model

  - Pig

  - Wolf

    - Tweaked the bounding box of both adult and baby to align with Java Edition and the new model

  - Rabbit

    - Both adult and baby Rabbits also received new animations
    - Tweaked the bounding box to align with the new model

  - Cat

    - Tweaked the baby's bounding box to align with the new model

  - Ocelot

  - Chicken

    - Tweaked the bounding box to align with the new model

  - Sheep

  - Axolotl

    - Added new baby-specific animations for the Axolotl

  - Dolphin

  - Donkey

  - Horse

  - Mule

  - Skeleton Horse

  - Zombie Horse

  - Glow Squid

  - Squid

  - Turtle

  - Polar Bear

  - Goat

  - Fox

    - Added new baby-specific animations for the Fox

  - Camel

    - Added new baby-specific animations for the Camel

  - Armadillo

    - Added new baby-specific animations for the Armadillo

  - Llama

    - Trader Llama

  - Bee

  - Piglin

  - Villager

  - Zombie Villager

  - Zombified Piglin

  - Zombie

  - Husk

  - Drowned

  - Panda

  - Strider

  - Hoglin

  - Sniffer

  - Zoglin

## Sounds

- Baby Pigs, Cats, Horses, Cows, Chickens, and Wolves, now have a unique set of sounds

- Pig, Cat, Cow and Chicken now have adult sound variants

- Added Note Block trumpet instrument for Block of Copper, Cut Copper and Chiseled Copper

### Golden Dandelion

- Introduced Golden Dandelion as a new type of flower that can be used to stop baby mobs from aging

  - Can be crafted using a Dandelion and Gold Nuggets

- Enabled the Golden Dandelion effect on the following Baby Mobs:

  - Baby Armadillo
  - Baby Axolotl
  - Baby Bee
  - Baby Camel
  - Baby Cat
  - Baby Chicken
  - Baby Cow
  - Baby Dolphin
  - Baby Donkey
  - Baby Fox
  - Ghastling
  - Baby Hoglin
  - Baby Goat
  - Baby Horse
  - Baby Llama
  - Baby Mooshroom
  - Baby Mule
  - Baby Nautilus
  - Baby Ocelot
  - Baby Panda
  - Baby Pig
  - Baby Polar Bear
  - Baby Rabbit
  - Baby Sheep
  - Baby Sniffer
  - Baby Strider
  - Baby Trader Llama
  - Baby Turtle
  - Baby Wolf
  - Tadpole

- Golden Dandelion can be used to craft Suspicious Stew

- Golden Dandelion can be crafted into Yellow Dye

- Placed Golden Dandelion can be picked up by Endermen

- Golden Dandelion can be picked up by mobs who can pick up items

- Golden Dandelion can be used to distract Piglins

- Golden Dandelion displays green particles when used on a Baby Mob

  - Particles moving downwards indicate that aging is paused
  - Particles moving upwards indicate that age has been reset and is now resumed

- Golden Dandelion plays pause growth and reset growth sounds on use

## Items

- Name Tags are now craftable, using paper and any metal nugget

# Features and Bug Fixes

## Accessibility

- Fixed issue where text to speech doesn't get enabled on launch despite the 'Text To Speech For UI' toggle being enabled

- Added a key binding for Describe, a feature that will let you know through text and TTS what block or mob you have in front of you

  - Available for keyboard and controller inputs

- Updated the name of Describe to Identify Block, a feature that lets you know through text and text to speech (TTS) what block or mob you have in front of you

  - Share your feedback on this feature [here](https://aka.ms/mcbedrockidblockfeedback)

## Achievements

- Fixed the issue preventing some item related achievements from being obtained.

## Blocks

- Stone and Deepslate can now be crafted into their Cobbled variants in the Stonecutter

- Dead bush can be placed on farmland

- Corner stairs next to a stair block of a different type will no longer leak water for worlds of base game version `26.10` or higher ([MCPE-104070)](https://bugs.mojang.com/browse/MCPE-104070))

## Character Creator

- Selected appearance should no longer reset to 3rd appearance at times upon starting up the client

- Skins will be correctly shown to other players when switching to a Classic skin and then back to a Character Creator choice.

- While playing in a multiplayer world, users will no longer be randomly messaged about other users updating their appearances when no change was actually made.

- Fixed an issue that could cause invalid classic skins to be shown as blank skins

## Gameplay

- Cooldowns on custom items now visualize correctly

- Fixed a bug where the Trial Spawner in some cases spawned too many mobs ([MCPE-186092](https://bugs.mojang.com/browse/MCPE-186092))

## Graphical

- Armor trims are now visible again when worn by players or adult mobs ([MCPE-236105](https://bugs.mojang.com/browse/MCPE-236105))

- Added static/colorized block light shading to particles in Vibrant Visuals

- Fixed an issue where some players on PlayStation had vertical sync disabled, causing image tearing

- Items being quickly moved between inventory slots now have the back of their faces rendered too ([MCPE-229843](https://bugs.mojang.com/browse/MCPE-229843))

- Fixed a bug where some light source blocks held in hand would appear unlit when near other light source blocks in Vibrant Visuals.

- Added static local lighting support for more entities and items, including pistons, moving blocks, signs, beds and chests in Vibrant Visuals.

- Fixed UI icons not showing at the lowest GUI scale setting ([MCPE-234762](https://bugs.mojang.com/browse/MCPE-234762))

- Fix player flickering when flying at high speed towards the camera ([MCPE-23451](https://bugs.mojang.com/browse/MCPE-23451))

- Fixed broken or incorrect textures after loading a world ([MCPE-202009](https://bugs.mojang.com/browse/MCPE-202009))

## Input

- Fixed an issue on Windows where the mouse highlight appeared in game when "Show location of pointer when I press the CTRL key" option was enabled in Windows settings. ([MCPE-168787](https://bugs.mojang.com/browse/MCPE-168787))

- Fixed an issue on Windows where the system's ClickLock mouse setting was not recognized. ([MCPE-231488](https://bugs.mojang.com/browse/MCPE-231488))

- Fixed a bug on Windows where the system setting "Scrolling direction" had no effect ([MCPE-232634](https://bugs.mojang.com/browse/MCPE-232634))

## Items

- Combining an Enchanted Shield with an Illager Banner now correctly transfers the enchantments to the crafted Illager Banner Shield ([MCPE-174103](https://bugs.mojang.com/browse/MCPE-174103))

- Bundle and Wolf Armor no longer have larger scale with textures bigger than 16x ([MCPE-225207](https://bugs.mojang.com/browse/MCPE-225207))

- Clocks, Compasses, and Recovery Compasses no longer have a corrupted appearance after turning high resolution texture packs on/off ([MCPE-173775](https://bugs.mojang.com/browse/MCPE-173775))

- Fixed player inventory sometimes not being updated properly when picking up items already held in off-hand ([MCPE-235655](https://bugs.mojang.com/browse/MCPE-235655))

- Name Tags can no longer be bought from Librarians

- Name Tags are added as an Ordinary Trade to Wandering Traders at 1 for 1 Emerald, with a 7% probability and 5 Name Tags in stock

- Name Tags can no longer be obtained from chests in Ancient Cities or Woodland Mansions

- Librarian Villagers on Master level can now trade red or yellow Candles

## Marketplace

- Fixed the inability to download RealismCraft 2.X add-on from "Create from..." menu with active Marketplace Pass subscription ([MCPE-232505](https://bugs.mojang.com/browse/MCPE-232505))

## Mobs

- Copper Golem now properly picks up Spears, Tridents, and Crossbows

- Baby Polar Bear no longer becomes hostile towards the player ([MCPE-173833](https://bugs.mojang.com/browse/MCPE-173833))

- The movement of Boats, Horses, Donkeys, and Mules is now as responsive as it used to be before the release of the Mounts of Mayhem game drop ([MCPE-231719](https://bugs.mojang.com/browse/MCPE-231719))

- Boats' paddle animation no longer glitches when paddling backwards

- Zombie Horses can no longer catch fire while in water ([MCPE-229542](https://bugs.mojang.com/browse/MCPE-229542))

- Ghast's no longer display old face textures while shooting fireballs ([MCPE-218741](https://bugs.mojang.com/browse/MCPE-218741))

- Fixed incorrect allele range syntax for the Panda and Goat

- Zombie Horses no longer flee from sunlight

  - This aligns them with the behavior of regular Zombies

- Baby Skeleton Horses no longer grow up ([MCPE-234733](https://bugs.mojang.com/browse/MCPE-234733))

- Adjusted which blocks Zombie Horses, Skeleton Horses and Camel Husks try to avoid:

  - They try to avoid water
  - They try to avoid dangerous blocks
  - They do not try to avoid rails

- Fixed an issue causing villagers to occasionally appear lying on the ground rather than in their bed while sleeping. ([MCPE-119736](https://bugs.mojang.com/browse/MCPE-119736))

## Movement

- Fixed desync in player position when toggling input permissions ([MCPE-232109](https://bugs.mojang.com/browse/MCPE-232109))

## Music

- Fixed long running sounds such as jukebox music from playing in the menu when leaving a multiplayer world

## Realms

- Added message and logic for error joining a Realm whose owner is banned

- Fixed crash when opening Realms tab with 150+ joined Realms

- Added a trailing space to the Server Region localized string

- The information dropdown for Realm saves now displays the correct version format

- Fix text is unreadable on "Your Realm is ready" screen on large UI

- Fixing the download world button for Realms not present on old UI

- Fixed broken modals shown when client attempts to play on a Realm

- Added Realm purchase success modal, shown when purchase is successful but fetching the Realm fails

## Saves

- Ensure worlds created after signing out are saved to the new Users\Shared directory on Windows.

## Sound

- Baby wolves now correctly play baby variant sounds

## Stability and Performance

- Fixed an issue where Marketplace textures would be cached when re-entering worlds and could potentially degrade performance on some platforms

- Fixed a crash that sometimes happened when players were climbing

- Fixed slow server when loading into a world with too many blocks scheduled for ticking ([MCPE-224638](https://bugs.mojang.com/browse/MCPE-224638))

- Fixed game freezes and large save files when spending time near Lava flow in the Nether ([MCPE-224638](https://bugs.mojang.com/browse/MCPE-224638))

## Switch

- Reduced audio delays when entering a world ([MCPE-177148](https://bugs.mojang.com/browse/MCPE-177148))

## User Interface

- Added a Recipe Book for Furnace, Smoker, and Blast Furnace as an experimental feature. Share your feedback [here](http://aka.ms/mcbedrockfurnacerbfeedback)

- Fixed screen narration reading previously typed chat messages letter by letter when context changed

- Added button enumeration narration to the death screen when text to speech is enabled

- Text input fields now support arrow key navigation between lines and keyboard shortcuts such as Ctrl+V on Android

- Text input fields in Ore UI now support mouse caret positioning and selection on Android

- Improved the chat auto scroll behavior to allow reading older messages while new messages are being sent

- Player is now able to change time using the "Time" button in the chat/command window when "Always Day" option is enabled ([MCPE-226307](https://bugs.mojang.com/browse/MCPE-226307))

- Added new registry keys so the Preview and Retail games don't share each other's previous window size and position ([MCPE-233168](https://bugs.mojang.com/browse/MCPE-233168))

- Fixed the Bed and Death screens fading animations ([MCPE-235024](https://bugs.mojang.com/browse/MCPE-235024))

- Add a few missing characters to the default font. ([MCPE-183866](https://bugs.mojang.com/browse/MCPE-183866))

- Fixed a crash caused by High-Data-Volume text in Books. ([MCPE-235419](https://bugs.mojang.com/browse/MCPE-235419))

- Added an option to disable pausing the game when the application loses focus (Desktop only)

- Fix a bug where the opacity of the pick block button could not be adjusted ([MCPE-191027](https://bugs.mojang.com/browse/MCPE-191027))

- Fixed a bug that caused the "Go to Settings" button from the Skin Type modal to navigate to the JSON UI Settings. ([MCPE-235400](https://bugs.mojang.com/browse/MCPE-235400))

- Updating the inventory and sdl screens to properly reflect purchases made when navigating back to it from a related page.

- Touch controls: updated the interact button design

- Fixed an issue with images for the Marketplace Pass and Realms FAQs pages being excessively large

- Fixed back button not working after exiting friend's profile ([MCPE-232736](https://bugs.mojang.com/browse/MCPE-232736))

- Add support for more mouse cursor types to Ore UI on Windows.

- Fixed double item trades overlapping in Trader Screen Pocket UI. ([MCPE-235009](https://bugs.mojang.com/browse/MCPE-235009))

- Updated headers in pocket UI inventory

- Hardcore worlds in the Play screen will now display the number of days played if the "show days played" gamerule is enabled.

- Updated Servers Tab to display custom servers even if Minecraft provided servers were not found

- Fixed narration for elements outside a scroller

- Fixed characters rotating incorrectly in UI when riding a mob

- Fixed an issue that prevented some Ore UI Keyboard & Mouse settings from being saved when modified while in-game. ([MCPE-235690](https://bugs.mojang.com/browse/MCPE-235690))

- Add experimental toggle to enable the new Furnace Recipe Book

- The "How to play" section has been moved from Settings to the Pause screen

- Made it possible to move the caret position within signs using a mouse or touch ([MCPE-174365](https://bugs.mojang.com/browse/MCPE-174365))

- Unified inventory search in both Creative and Survival gamemodes

- General improvements and bug fixes related to closed captions ([MCPE-233144](https://bugs.mojang.com/browse/MCPE-233144)) ([MCPE-233144](https://bugs.mojang.com/browse/MCPE-233144)) ([MCPE-233116](https://bugs.mojang.com/browse/MCPE-233116))

- Navigation tabs for the new Service-driven Inventory Screen

- Some sign-in errors have new codenames to avoid overlap with codenames for networking errors, sign-in error codenames are no longer localized

- Improvements to closed captions UI ([MCPE-234709](https://bugs.mojang.com/browse/MCPE-234709))

- Fixed scaling values on certain devices ([MCPE-234792](https://bugs.mojang.com/browse/MCPE-234792))

# Technical Updates

## AI Goals

- Migrated `minecraft:behavior.ocelotattack` ('\_' misname is legacy and cannot safely be changed).

- We will fail to load an entity json that has invalid data in versions 1.26.0 and newer.

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.10 and newer. Also unified and updated documentation for the following goals

  - `minecraft:behavior.drop_item_for`
  - `minecraft:behavior.fertilize_farm_block`
  - `minecraft:behavior.harvest_farm_block`
  - `minecraft:behavior.inspect_bookshelf`
  - `minecraft:behavior.lay_egg`

- Float Range field `time_of_day_range` in `minecraft:behavior.drop_item_for` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Field `lay_seconds` in `minecraft:behavior.lay_egg` now only accepts numbers greater than or equal to 0

- Made the schema for `minecraft:behavior.ram_attack` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.10 and newer. Float Range field `cooldown_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made the schema for `minecraft:behavior.celebrate` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.10 and newer. Float Range fields `sound_interval` and `jump_interval` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.10 and newer

  - `minecraft:behavior.celebrate_survive`
  - `minecraft:behavior.random_search_and_dig`
  - `minecraft:behavior.swim_with_entity`
  - `minecraft:behavior.take_flower`
  - `minecraft:behavior.trade_with_player`
  - `minecraft:behavior.teleport_to_owner`
  - `minecraft:behavior.work`
  - `minecraft:behavior.work_composter`

- The following float range fields now only accepts an object with `min` and `max` values. Other formats will fail to parse

  - `fireworks_interval` in `minecraft:behavior.celebrate_survive`
  - `cooldown_range` and `digging_duration_range` in `minecraft:behavior.random_search_and_dig`

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.10 and newer.

  - `minecraft:behavior.move_to_land`
  - `minecraft:behavior.move_to_water`
  - `minecraft:behavior.ocelot_sit_on_block`
  - `minecraft:behavior.raid_garden`
  - `minecraft:behavior.stomp_turtle_egg`

- Made the schema for `minecraft:behavior.offer_flower` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.10 and newer

- Made the schema for `minecraft:behavior.play_dead` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.10 and newer. Int Range field `random_damage_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse

- Made the schema for `minecraft:behavior.play` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.10 and newer

- The `minecraft:behavior.panic` goal has been made more robust in how it calculates an entity's desired path

## API

- Generate JSON metadata for molang queries available in the game

- Released `@minecraft/server` version `2.6.0`

- Added `@minecraft/server` version `2.7.0-beta`

- Released `Block.getComponents` and `Block.hasComponent` into 2.6.0.

- Released `EntityHealBeforeEvent` from `beta` to `v2.6.0`

- Released `EntityHealAfterEvent` from `beta` to `v2.6.0`

- Released `EntityHealCause` from `beta` to `v2.6.0`

- Released `EntityHealSource` from `beta` to `v2.6.0`

- Released `EntityHealEventOptions` from `beta` to `v2.6.0`

- Released `EntityHealBeforeEventSignal` from `beta` to `v2.6.0`

- Released `EntityHealAfterEventSignal` from `beta` to `v2.6.0`

- Released `WorldBeforeEvents.entityHeal` from `beta` to `v2.6.0`

- Released `WorldAfterEvents.entityHeal` from `beta` to `v2.6.0`

- Released `EntityHurtBeforeEvent` from `beta` to `v2.6.0`

- Released `EntityHurtBeforeEventOptions` from `beta` to `v2.6.0`

- Released `EntityHurtBeforeEventSignal` from `beta` to `v2.6.0`

- Released `WorldBeforeEvents.entityHurt` from `beta` to `v2.6.0`

- Released `EntityHurtAfterEventOptions` from `beta` to `v2.6.0`

- Released change of `EntityHurtAfterEventSignal` to use `EntityHurtAfterEventOptions` from `beta` to `v2.6.0`

- Released `EntityItemPickupAfterEvent` from `beta` to `v2.6.0`

- Released `EntityItemPickupBeforeEvent` from `beta` to `v2.6.0`

- Released `EntityItemPickupEventOptions` from `beta` to `v2.6.0`

- Released `ItemFilter` from `beta` to `v2.6.0`

- Released `EntityItemPickupAfterEventSignal` from `beta` to `v2.6.0`

- Released `EntityItemPickupBeforeEventSignal` from `beta` to `v2.6.0`

- Released `WorldAfterEvents.entityItemPickup` from `beta` to `v2.6.0`

- Released `WorldBeforeEvents.entityItemPickup` from `beta` to `v2.6.0`

- Moving `world.getSeed` to `stable`

- Moving `query.get_level_seed_based_fraction` out from behind the `Upcoming Creator Features` toggle

- Adding `isSuperset` parameter to `world.containsBiomes`

- Moving `world.containsBiomes` to `stable`

- Removing `superset` property from `BiomeFilter`

- Moving `ScriptBiomeFilter` to `stable`

- Released `BlockComponentRedstoneUpdateEvent.previousPowerLevel` from `beta` to `v2.6.0`

- Released `property ItemDurabilityComponent.unbreakable` from `beta` to `v2.6.0`

- Include built in math functions in generated metadata for molang

- Fixed a bug where `isValid` could return false for a valid `SimulatedPlayer` after it had been spawned.

- Changed `resultItem` on `EntityDefinitionFeedItem` and `FeedItem` to be of type `string | undefined`.

- Released `resultItem` on `EntityDefinitionFeedItem` and `FeedItem` from beta to V2.6.0.

- Released `EntityItemDropAfterEvent` from `beta` to `v2.6.0`

- Released `EntityItemDropAfterEventSignal` from `beta` to `v2.6.0`

- Released `EntityItemDropEventOptions` from `beta` to `v2.6.0`

- Released `WorldAfterEvents.entityItemDrop` from `beta` to `v2.6.0`

- Released `AimAssistCategory` from `beta` to `v2.6.0`

- Released `AimAssistCategorySettings` from `beta` to `v2.6.0`

- Released `AimAssistPreset` from `beta` to `v2.6.0`

- Released `AimAssistPresetSettings` from `beta` to `v2.6.0`

- Released `AimAssistRegistry` from `beta` to `v2.6.0`

- Released `PlayerAimAssist` from `beta` to `v2.6.0`

- Released `PlayerAimAssistSettings` from `beta` to `v2.6.0`

- Released `AimAssistTargetMode` from `beta` to `v2.6.0`

- Released `World.getAimAssist` from `beta` to `v2.6.0`

- Released `Player.getAimAssist` from `beta` to `v2.6.0`

- Released `BlockComponentEntityEvent` from `beta` to `v2.6.0`

- Fixed localization string for `tile.sticky_piston_arm_collision.name` to `Sticky Piston Arm Collision`.

- Moved interface `TickingAreaOptions` from beta to `V2.6.0`

- Moved class `TickingAreaManager` from beta to `V2.6.0`

- Moved interface `TickingArea` from beta to `V2.6.0`

- Moved error `TickingAreaError` from beta to `V2.6.0`

- Moved enum `TickingAreaErrorReason` from beta to `V2.6.0`

- Camera

  - Released `playAnimation` method from `beta` to `v2.6.0`

  - Released `attachToEntity` method from `beta` to `v2.6.0`

  - Released `EntityAttachPoint` from `beta` to `v2.6.0`

  - Released `CatmullRomSpline` from `beta` to `v2.6.0`

  - Released `LinearSpline` from `beta` to `v2.6.0`

  - Released `AnimationOptions` from `beta` to `v2.6.0`

  - Released `CameraAttachOptions` from `beta` to `v2.6.0`

  - Released `ProgressKeyFrame` from `beta` to `v2.6.0`

  - Released `RotationKeyFrame` from `beta` to `v2.6.0`

  - Released `SplineAnimation` from `beta` to `v2.6.0`

- World

  - Moved property `readonly tickingAreaManager: TickingAreaManager` from beta to `V2.6.0`

### `@minecraft/server-net`

Added addional error types for HTTP requests:

- `HttpRequestBodyTooLargeError` - Request body exceeds configured limit
- `HttpRequestLimitExceededError` - Concurrent request limit reached
- `HttpRequestNotAllowedError` - Request targets a URI not in the allow list
- `HttpsOnlyError` - HTTPS required but non-HTTPS URI provided

## Blocks

- Blocks using the `minecraft:corner_and_cardinal_direction` value of `minecraft:placement_direction` now will correctly form inner corners when there are other stairs next to them ([MCPE-232019](https://bugs.mojang.com/browse/MCPE-232019))

- Fixed rotation issue for blocks in item frames that use `"minecraft:geometry.full_block"` for Json `"format_version" >= 1.26.0` ([MCPE-234715](https://bugs.mojang.com/browse/MCPE-234715))

  - Used to define a block composed of multiple block parts. A multi block treats all individual parts as a single block, like Door blocks
  - The selection box can be extended for the size of the multi block, by setting `"minecraft:selection_box"` to true and the trait will update it based on the parts total and geoemtry size
  - The trait combines the AABBs from the `"minecraft:selection_box"` for each part.
    - So if this is in the components section: `"minecraft:selection_box": {"origin": [-8, 0, 5], "size": [16, 16, 3] }`
    - Then each part will have an AABB of `16x16x3` and when the player looks at the multi block the outline AABB will be a combined `16x16x9`(in world space)
  - Enables new state `minecraft:multi_block_part`
  - Required `direction` property used to define which direction the block parts are placed from 0 to N. Valid values are limited to `"up"` and `"down"`
  - Optional `part_count` property used to initialize state `minecraft:multi_block_part`, valid value range is \[2, 4\]
  - Command inspection & api support will be coming in an upcoming preview Example:

``` auto
{
    "format_version": "1.26.0",
    "minecraft:block": {
        "description": {
            "identifier": "example:triple_block",
            "traits": {
                "minecraft:multi_block": {
                    "enabled_states": [
                        "minecraft:multi_block_part"
                    ],
                    "parts": 3,
                    "direction": "up"
                }
            }
        },
        "components": {
            "minecraft:selection_box": true
        },
        "permutations": [
            {
                "condition": "q.block_state('minecraft:multi_block_part') == 0",
                "components": {
                    "minecraft:geometry": "geometry.triple_block_part_0",
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wood_triple_block_part_0",
                            "render_method": "opaque"
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:multi_block_part') == 1",
                "components": {
                    "minecraft:geometry": "geometry.triple_block_part_1",
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wood_triple_block_part_1",
                            "render_method": "opaque"
                        }
                    }
                }
            },
            {
                "condition": "q.block_state('minecraft:multi_block_part') == 2",
                "components": {
                    "minecraft:geometry": "geometry.triple_block_part_2",
                    "minecraft:material_instances": {
                        "*": {
                            "texture": "wood_triple_block_part_2",
                            "render_method": "alpha_test_single_sided"
                        }
                    }
                }
            }   
        ]
    }
}
```

- Fixed client crash on world load from out of bounds `minecraft:geometry` in the `minecraft:item_visual` component

- Fixed `placement_filter` and `block_placer` components to support placing on liquid blocks when used with `liquid_clipped`

## Character Creator

- Added check for usage of banned skin in model delegate and added case to display default appearance and inform user when banned skin is detected

- Exiting the game after changing your appearance will immediately cache all changes

## Client Entities

- Added "held_item_scale" field to entity.json schema

  - Allows items held by mobs to be scaled by a factor greater than zero
  - Defaults to 1.0

## Commands

- Fixed an issue where the "/reload all" command would not reload packs outside of the development folders. ([MCPE-234722](https://bugs.mojang.com/browse/MCPE-234722))

- Chat command completion on iOS keyboard no longer produces "ō" or "ō" and suggestion, it will properly autocomplete a suggestion ([MCPE-158584](https://bugs.mojang.com/browse/MCPE-158584))

- Fixed `/setblock` and `/fill` commands from placing partial double blocks, like the upper part of a door Block

## Components

- Replaced the "simulate_waves" field of the "minecraft:buoyant" component with the new "movement_type" field

  - The "movement_type" field accepts one of three values:
    - "waves", makes the entity move up and down based on its speed (default value)
    - "bobbing", makes the entity move up and down at a constant pace
    - "none", doesn't do anything
  - The "big_wave_probability" and "big_wave_speed" fields are only used when "movement_type" is set to "waves"

- Added a "can_auto_step_from_liquid" field to the "minecraft:buoyant" component

  - Defines whether the entity can move out of a liquid block to a neighboring solid block if pushed against it

- Blocks with `minecraft:liquid_detection` component containing an empty array will now fail to load and produce a content error. ([MCPE-235481](https://bugs.mojang.com/browse/MCPE-235481))

## Dedicated Server

- Added HTTP configuration capabilities for the `@minecraft/server-net` scripting module on dedicated servers. Server operators can now configure HTTP request limits and restrictions via the `permissions.json` file. All of the configurable options are optional. If not specified, limits for the particular setting will not be enforced. Example config: `.\config\<module_id>\permissions.json`

``` auto
{
  "allowed_modules": [
    ...
    "@minecraft/server-net"
  ],
  "module_permissions": {
    "@minecraft/server-net": {
      "allowed_uris": [
        "https://example.com/",
      ],
      "force_https": true,
      "max_body_bytes": 1048576,
      "max_concurrent_requests": 1,
      "session_headers": {
        "session-data": "abc123"
      }
    }
  }
}
```

## Editor

- Added variant and layout section support for `IListPanePropertyItem` API

- Added `IStringPropertyItem` API will now support multiline string if `multilineHeight` optional property is defined

- Added `hasClearButton` optional API property to `IStringPropertyItemOptions` for modifying clear button visibility

- Added a feature to keep player data on export for any player that had previously played in that world.

- Added an option to creator options to enable or disable editor metrics collection. Those metrics can be viewed in the VSCode live diagnostics view.

- Added an option to the Bedrock Dedicated Server configuration to enable or disable editor metrics collection when running an Editor server

- Updated Selection Tool to displays toast notifications when Quick Actions (Fill, Delete) or Trim Actions (Trim Selection, Remove Air, Hollow) cannot be performed due to no selection or when they result in no changes

- Updated jigsaw tool to save registry when the editor is closed or tool is changed.

- Updated API type `ListPaneSlotLayout` to `ListPaneSlotConfiguration`, and updated `IListPanePropertyItemOptions` property `layout` to `slotConfig`

- Fixed bug that player cannot select any volumes using Enter key while in Line Tool

- Fixed bug that "New from Clipboard" button is inactive outside of Paste Preview tool

- Fixed a bug causing the tutorial dimmer to render misaligned relative to the viewport

- Fixed a bug where the flood tool would not close the modal dialog when block change limit was exceeded.

- Fixed a bug with the Apply Flood keybinding.

- Fixed changing between Crosshair and Tool modes to no longer cause world geometry to get re-created

- Improved performance of Editor in Vibrant Visuals mode by preventing extra deferred rendering call.

- Fixed a bug where players could not use the Enter key in the Terrain tool.

- Added `ICollectionTreePropertyItem` API to display a tree view of nested folders and sequential entries

- Added Vector3 Timeline Control

  - New timeline type for editing Vector3 values over time, complementing existing Number and Color timelines.
  - Nodes are draggable along the X-axis (time) only; Vector3 values can be edited via the node popup by double-clicking a node.
  - Timeline slider displays current time position rather than interpolated values.

- Updated text selection and caret colors for default themes

- The Vibrant Visuals pane can now update globally configured Local Lights properly

- Added structure display name to the dropdowns for jigsaw pieces

- Sorted the jigsaw piece list alphabetically

- Fixed UX to expand correctly when pane is stretched so that you can read dropdowns and labels

- Fixed a bug that entities can't spawn in the center of the cursor position for Summon Tool.

- Updated Jigsaw Tool UX

  - Converted Jigsaw Tool UI from dropdown-based to CollectionTree component (pools displayed as folders with pieces as entries)
  - Added localized error logging when jigsaw files can't be saved (file locked by another program)
  - Moved checkboxes (Reuse Seed, Skip Validation) into a wrapping row layout
  - Updated Jigsaw UI strings

- Farm generator now places crop block on tilled dirt and not water blocks

- Fixed a bug where most double slab blocks were missing from the Block Picker menu, preventing users from adding them to the Hotbar or using them in Brush Block filters.

- Large volume trim operations now do not freeze the UI screen and keyboard/mouse

- Fixed a bug where players were unable to create a selection volume using the Enter key in Marquee mode.

- Fixed the /structure load command placing structures at a different position in Editor mode compared to Test World

- Fixed a bug where exporting a world did not display the file path in the Log Panel

- Added `IListPaneViewControlPane` API for list pane to create a view control with `buildViewControl` function. When the view control is set to visible, it will be displayed at the bottom of the root pane

- Fixed a bug where Brush Settings were displayed incorrectly across all Terrain Modes.

- Added "New Collection..." option to the Jigsaw Editor Collection dropdown, allowing users to create a new collection directly from the dropdown

- Added Tag Container control as Property Pane API

- Added icon property to the Property Pane API for root panes and sub panes, enabling icon display in pane headers.

- Added structure block support for multi blocks

- Added editor brush/pencil erasing support for multi blocks

- Repeater tool now dynamically limits repetition count based on selection size and spacing to prevent offset errors

- Re-enabled 3-point selection and re-added 2-point selection toggle (off by default)

- Fixed click-drag-release issue where it doesn't finalize the 2nd point in the 3-point selection

- Fixed visual inconsistencies for expanders

- Fixed a bug to allow opening .mcproject files now correctly launches the game in Editor mode.

- Removed block masks and filters pane in Elevation terrain mode

- Updated the Editor Landing Page, this will gradually roll out over the next few weeks

- Fixed a bug that prevented graphs from rendering inside the Vibrant Visuals pane

- Fixed a bug where the Brush dropdown should be hidden in Elevation mode for Terrain tool

- Fixed a bug where clearing the name of a stored location in the Navigation panel caused it to alternate between "Location" and "Location {1}" on each edit

- Fixed a bug that caused sliders with invalid ranges to show an error, instead they will get disabled now

- Fixed a bug where the selection volume would not be updated in Marquee mode after deselecting items in the Block Manifest Table

- Jigsaw Editor Collection dropdown no longer automatically opens the New Collection dialog when the tool is first opened

- Canceling the New Collection dialog now correctly reverts the dropdown to no selection

- Add Pool, Export, and Delete buttons are now hidden when no collection is selected

- Collection tree is now hidden when no collection is selected

- Added confirmation dialog when deleting a Jigsaw Collection

- Added validation to prevent generating a Jigsaw when all elements in the starting pool are empty

- Fixed tool names to make them align with existing patterns

- Updating Primitive tool localization for block filter mode and placement progress dialog strings

- Fixed an issue where the Texel Size slider in Vibrant Visuals Shadow settings displayed decimal values instead of integers

- Fixed a bug where the "Spawn at Current Location" checkbox in Test World settings was always treated as enabled, causing the player to always spawn at the Editor camera's location regardless of the checkbox state

- Fixed an issue where switching to the Extrude Tool would remove any active selection volumes

- Fixed Farm Generator's preview displaying one block lower than the actual farm placement position

- Cinematic Tool now supports undo/redo for control point position and rotation changes via the Editor's transaction system

- Added speed dots to the Cinematic Tool to visualize camera travel speed along the spline path

- Cinematic Tool now hides control points, spline, and speed dots during cinematic preview playback

- Cinematic Tool Import JSON button now opens a modal dialog for pasting exported cinematic data

- Cinematic Tool now uses Redistribute Evenly to properly distribute control point times across the total duration

- Cinematic Tool Export JSON button now copies cinematic data to the clipboard for sharing between sessions

- Fixed 'Update' and 'Move to' Camera Point referring to different y levels in the Cinematic Tool

### Scripting

- Added new widget render primitive types to the `@minecraft/server-editor` module:
  - `WidgetComponentRenderPrimitiveTypeCylinder` - Cylinder primitive with elliptical cross-section (radiusX, radiusZ, height)
  - `WidgetComponentRenderPrimitiveTypeCone` - Cone primitive with elliptical base (radiusX, radiusZ, height)
  - `WidgetComponentRenderPrimitiveTypeCuboid` - Cuboid primitive with independent dimensions (lengthX, lengthY, lengthZ)
  - `WidgetComponentRenderPrimitiveTypePyramid` - Pyramid primitive with rectangular base (xWidth, zWidth, height)
  - `WidgetComponentRenderPrimitiveTypeEllipsoid` - Ellipsoid primitive with Vector3 radii
- Added corresponding `PrimitiveType` enum values: `Cylinder`, `Cone`, `Cuboid`, `Pyramid`, `Ellipsoid`
- All new primitives support optional rotation (Vector3) and transparency parameters

### User Interface

- Updated the default Editor UI zoom level from 75% to 100% for improved out-of-box accessibility and readability.
- Users with previously saved preferences are unaffected—their saved zoom level will continue to be restored.

## Entity Components

- Added the ability to pause and reset growth of entities in `minecraft:ageable` using specified items

  - Introduced field `"pause_growth_items"`, which is a list of items that can be fed to the entity to pause growth for baby entities
  - Introduced field `"reset_growth_items"`, which is a list of items that can be fed to the entity to reset growth for baby entities
  - Introduced `ActorDefinitionTrigger` field `"reset_growth"` to trigger an event when aging is reset for baby entities
  - Introduced `ActorDefinitionTrigger` field `"pause_growth"` to trigger an event when aging is paused for baby entities

- A content warning will throw if the amount of experience orbs requested to be spawned in a single tick exceeds the recommended max of 512. It is possible that performance will degrade when a large number of experience orbs are spawned at once.

- Split the `minecraft:pushable` component into two new components:

  - `minecraft:pushable_by_block` is the equivalent of setting `"is_pushable_by_piston": true`
    - If `minecraft:pushable_by_block` exists on the entity then Pistons and Shulker Boxes can attempt to push it
    - Removing `minecraft:pushable_by_block` is the equivalent of setting `"is_pushable_by_piston": false`
  - `minecraft:pushable_by_entity` is the equivalent of setting setting `"is_pushable": true`
    - If `minecraft:pushable_by_entity` exists on the entity then other entities can attempt to push it
    - Removing `minecraft:pushable_by_entity` is the equivalent of setting `"is_pushable": false`
  - The component `minecraft:pushable` will no longer be parsed

## Entity Filters

- Added the "is_tamed" entity filter, telling if the subject entity is tamed ([MCPE-234672](https://bugs.mojang.com/browse/MCPE-234672))

## Features

- Fixed feature loading to allow for sub-directories and any filename, will now only use identifier in JSON.

\##Gameplay

- Camera splines and attach entity APIs are now out of experimental

## General

- Fixed an issue where 'minecraft://?addExternalServer' and other similar URIs might not work when containing URL-encodable characters. (MCPE-232900)

- Upgraded actor JSON resources to Cereal slice 1.26.0 and re-serialized to align with the updated schema.

## Graphical

- The colored block lighting feature is no longer restricted to the Render Dragon Features for Creator Experiment

  - To enable this feature, PBR resource packs must include a local_lighting.json with `static_light` entries. Blocks that do not have a `static_light` and `light_color` specified via a provided resource pack will be treated as non-colored lighting and use the standard uniform light color.
  - See [Local Lights documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization?view=minecraft-bedrock-stable#local-lights) for more information

- Static colored lighting on flowing lava and other blocks no longer appears too dark in Vibrant Visuals.

- Adding `static_light` shading to data driven entities in Vibrant Visuals.

- Added `static_light` shading to more entities and items in Vibrant Visuals.

- Static colored lighting no longer leaks through corners in Vibrant Visuals.

- Adjusted the light attenuation of static colored block lighting to be less intense

- Fixed issue with z-fighting on the Brewing Stand and Stonecutter on PlayStation in certain lighting conditions.

- Custom blocks with ambient occlusion disabled do not have the occasional black vertex issue anymore

- Improve ambient occlusion for blocks using a custom geometry

- Fixed issue that caused the spyglass full screen effect to brighten the scene in Vibrant Visuals.

- Fixed an issue that caused the End Portal to have invisible panels in Vibrant Visuals.

- Removed ESSL_300 shader language support

- Began rollout of a new texture streaming feature available in Preview for some selected devices. Toggling on this feature will reduce the GPU memory for certain textures, especially when multiple Add-Ons or packs are in use.

  - This feature is toggled off by default and can be found in Video Settings.
  - Note that the availability of this toggle for devices may change over subsequent releases.

- Fixed gamma encoding of sun, moon, weather, and end sky in Vibrant Visuals mode.

- Vibrant visuals now correctly support grayscale crushed images in texture sets

- Fixed sky light calculations being applied multiple times per chunk, causing excessive memory usage.

- Static/Colorized block lighting in Vibrant Visuals is no longer restricted to Preview builds

  - Known issue around empty chunks not propagating colors will be fixed in a future update

## Item

- The minecraft:block_placer item component has a new boolean field "aligned_placement" ([MCPE-234686](https://bugs.mojang.com/browse/MCPE-234686))

  - When true, block placement through this item will be aligned while holding the interaction button down
  - It is defaulted to false
  - It is supported from format version 1.26.0 onward

## JSON Schema

- Updating the `canopy_decorator`schema to support placing several blocks in a row as a decorator. New schema includes `decoration_blocks_sequence` as a list of blocks and a count per block to be placed. This aims to replace `decoration_block` and `num_steps`, however the old format is still supported but if both are give the new one is prioritised. Example of new format:

``` auto
 "canopy_decoration" : {
        "decoration_blocks_sequence" : [
          {
            "block": "minecraft:bedrock",
            "count": 1
          },
          {
            "block": "minecraft:dirt",
            "count": [1, 2]
          },
          {
            "block": "minecraft:stone",
            "count": {
              "range_min": 1,
              "range_max": 2
            }
          }
        ],
        "decoration_chance": {
          "numerator": 1,
          "denominator": 4
        },
        "step_direction": "out"
      }
```

## User Interface

- Fixed bug that made buttons at the top of the Marketplace screen difficult to select with controller

# Experimental Technical Updates

## Add-Ons and Script Engine

- Added experimental toggle "Voxel Shapes" which enables the use of voxel shapes on Vanilla and custom blocks

  - Voxel shapes are currently only used for occlusion/culling.
  - Currently, only unit cube Vanilla blocks have a voxel shape associated. With this experiment enabled, custom blocks with a voxel shape will only cull against Vanilla unit cube blocks or other custom blocks with a voxel shape.

## API

- Added minimum, maximum, or both bounds to several APIs.

- Fixed `EntityHurtBeforeEvent.cancel` to not allow some sources of knockback (sprint bonus, enchantment, mace smash, projectiles) when set to true

- Moved `localizationKey` property on `ItemType`, `EntityType`, `BlockType`, and `BlockPermutation` from beta to stable.

- This release introduces new UI capabilities called Data-Driven UI (DDUI). These APIs introduce a new way to create modal forms with new capabilities and an all new look. New modal forms is the first step in our UI journey for creators. Stay tuned for more features in future updates!

  - More information can be found here: [Introduction to the Data-Driven UI (DDUI) Framework](https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui)
  - Known Issues:
    1.  You need to wait a tick between programmatically closing a CustomForm/MessageBox and opening another.
    2.  Showing a CustomForm/MessageBox while UI is already up "queues" the UI to show up instead of failing like the previous form APIs.
    3.  CustomForms will only update after being shown via Observables, you cannot add a new button/dropdown/slider/etc while the form is shown.

- Reload command. Now it closes all the Data Driven UI screens as part of the execution.

- ScriptSetBannerDetailsFunction now includes base color and pattern data.

- Fixed an issue with `DebugBox` where the position was being used as the bottom-left corner, instead of the centre. .

- Fixed an issue with `DebugShape.attachedTo` where the attachment position was unintentionally using the height offset of the entity.

- Game Test

  - When running `/gametest run <test>` on a game tests with an invalid structure, the game test is no longer spawned at the world ceiling.

- Added `dedicatedServer` optional global to `beta` of `server-admin` for accessing dedicated server only APIs

- Added `DedicatedServerUtils` to `beta` of `server-admin` with dedicated server only APIs

- Added `LevelStorage` to `beta` of `server-admin` with dedicated server save state management APIs

- Added `LevelStorageQuerySnapshotFile` to `beta` of `server-admin`

- Added `AllowList` to `beta` of `server-admin` with dedicated server allow list management APIs

- Added `function Entity.addItem` for directly giving items to a mob or player.

- Added `Block.getParts` method behind `beta`. Returns an array of Block parts if the block has the `minecraft:multi_block` trait

- `Observable` is a new class that fires change events when the data it is wrapping changes

  - `CustomForm` and `MessageBox` use these to sync data between the client and the server and you can use observables to get notifications if data changes
  - Localizable messages can be provided by using the interface `UIRawMessage`.

- TickingAreaManager

  - Changed `createTickingArea()` to return `Promise<void>` instead of `Promise<TickingArea>` in beta

- Added `locatorBar` property to beta - Manages the collection of waypoints displayed on this player's locator bar

- Added `Waypoint` class to beta - Base class for waypoints displayed on the player's locator bar

- Added `EntityWaypoint` class to beta - Waypoint that tracks an entity's position

- Added `PlayerWaypoint` class to beta - Waypoint that tracks a player's position with player-specific visibility rules

- Added `LocationWaypoint` class to beta - Waypoint that points to a fixed location in the world

- Added `WaypointTexture` enum to beta - Enum representing different texture icons for waypoints

- Added `WaypointTextureBounds` interface to beta - Defines a texture and distance range for waypoint display

- Added `WaypointTextureSelector` interface to beta - Defines how waypoint textures change based on distance

- Added `EntityVisibilityRules` interface to beta - Controls waypoint visibility based on entity state

- Added `PlayerVisibilityRules` interface to beta - Controls waypoint visibility based on player-specific states

- Added `LocatorBar` class to beta - Manages the collection of waypoints displayed on a player's locator bar

- Added `LocatorBarError` error class to beta - Error thrown when a locator bar operation fails

- Added `LocatorBarErrorReason` enum to beta - Enum representing reasons why locator bar operations fail

- Added `InvalidWaypointError` error class to beta - Error thrown when attempting operations on an invalid waypoint

- Added `InvalidWaypointTextureSelectorError` error class to beta - Error thrown when using WaypointTextureSelector size over limit

### Server-UI DDUI

- Changed Class `CustomForm`
  - Changed return of method `show(): Promise<void>` to `Promise<boolean>` where returning true means it was shown and false means it was not shown.
  - Added `isShowing(): boolean` method.
- Changed Class `MessageBox`
  - Added `isShowing(): boolean` method.
- Changed interface `MessageBoxResult`.
  - Added property `wasShown` which is set to true if the message box was shown to the player.

## Blocks

- Added `culling_shape` field to `minecraft:geometry` component behind the VoxelShapes toggle.

  - The value should be an identifier of a voxel shape and can refer to either a custom voxel shape file, `minecraft:unit_cube`, or `minecraft:empty`.
  - If the VoxelShapes experiment is enabled and a shape is not specified, `minecraft:empty` will be used by default if the block does not use `minecraft:geometry.full_block`.

- Blocks can handle the following entity events in scripting through the "onEntity" handler:

  - Custom named events:
    - "on_home" from "minecraft:behavior.go_home"
    - “on_escape” from "minecraft:behavior.avoid_block"
    - "on_reach" from "minecraft:behavior.move_to_block"
    - "on_place" from "minecraft:behavior.place_block"
    - "on_take" from "minecraft:behavior.take_block"
  - Unlike the current vanilla blocks that handle those events, custom blocks may receive those events up to one tick after they were emitted, depending on how late in the tick the event was emitted.

- Added Block trait `minecraft:multi_block` behind **'Upcoming Creator Features'** experiment

- Added some Json constraints for blocks with trait `minecraft:multi_block`

  - Component `"minecraft:movable"` must be defined and cannot be defined in permutations. Valid values for `"movement_type"` are `"popped"` or `"immovable"`

  - Component `"minecraft:placement_filter"` cannot be defined in permutations

- Added `minecraft:chest_obstruction` component under the Upcoming Creator Features toggle

- It defines how a block placed above a chest or ender_chest should obstruct their opening

  - "obstruction_rule" (Optional): Specifies how the block is evaluated during chest opening if placed above; "shape" is the default when not specified.
    - "always": Will always obstruct a chest from opening.
    - "never" : Will never obstruct a chest from opening.
    - "shape" : Will use the Blocks AABB shape to determine if the chest is obstructed from opening.
  - Blocks prior to 26.10 will behave as expected based on their defined geometry and material instances
  - Example:

``` auto
  "format_version": "26.10",
    "minecraft:block": {
        "description": {
            "identifier": "test:test_block"
        },
        "components": {
            "minecraft:chest_obstruction": {
                "obstruction_rule": "always"
            }
        }
    }
```

### Voxel Shapes

- Fixed voxel shape loading to properly validate custom shape files. ([MCPE-235789](https://bugs.mojang.com/browse/MCPE-235789))

  - Individual boxes must now be within the allowed bounds of (-14, -14, -14) to (30, 30, 30) pixels.
  - At least one box must overlap the base block (0-16 pixels on all axes).
  - Total shape extent cannot exceed 30 pixels (1 block + 14 pixels) on any axis.

- Fixed rare crash on PS5 native due to inconsistency of packet ordering

- Fixed content warnings for unit cube and empty shapes that appear when joining a voxel shape enabled world as a client

## DDUI

- Fixed scroll bar for message box
  - It was showing all the time, now it is only rendered when needed

## Graphical

- Removed the legacy format for specifying light colors in the "Render Dragon for Creators" experiment. `point_lights/global.json` will no longer be loaded. Creators should migrate to the newer format of `local_lighting/local_lighting.json`.

## Mobs

- Updated baby chicken textures, previously they were missing the texture underneath the wings

- Updated the bone hierarchy of Baby Mule and Baby Donkey to match the Baby Horse and Adult Horse hierarchy

- Renamed the bones of Baby Donkey and Baby Mule to match Baby Horse

- Updated the UVs for the rear legs of both Baby Donkey and Baby Mule

- The new Rabbit models and textures are now version sliced

  - Textures are prefixed with `rabbit_`

## User Interface

- Added the correct icon for Party settings ([MCPE-235095](https://bugs.mojang.com/browse/MCPE-235095))

- Changed screen narration to not read the Marketplace Pass banner

## Realms

- Realms Moderate Feed screen has been updated to OreUI

## Rendering

- Armor attachables for Players now use a new render controller called `controller.render.armor.player`

## Server-UI DDUI

- Renamed interface `LabelOptions` to `TextOptions`.
- Class `CustomForm`.
  - Added method `label(text: Observable<string> | string | UIRawMessage, options?: TextOptions): CustomForm`.
- Class `MessageBox`.
  - Removed method `title(text: Observable<string> | string | UIRawMessage): MessageBox`.
  - Added parameter `title` to static method `create`:
    - `static create(player: Player, title: Observable<string> | string | UIRawMessage): MessageBox`.
