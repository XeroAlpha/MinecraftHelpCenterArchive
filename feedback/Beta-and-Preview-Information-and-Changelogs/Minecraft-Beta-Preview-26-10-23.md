---
title: Minecraft Beta & Preview - 26.10.23
date: 2026-02-11T16:43:07Z
updated: 2026-02-11T17:05:55Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43440116088589-Minecraft-Beta-Preview-26-10-23
hash:
  h_01KEVVCRJYJ96D2TDS3PPZKW57: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-drop-1-2026: drop-1-2026
  user-content-baby-mobs: baby-mobs
  user-content-golden-dandelion: golden-dandelion
  user-content-accessibility-features: accessibility-features
  user-content-blocks: blocks
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-persona: character-creator
  user-content-realms: realms
  user-content-ui: ui
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  h_01KH6S02D54Z6GE4HKB982ATM0: blocks-1
  h_01KH6S02D5JDFVM9G3D7HS8AY3: commerce-experiences
  user-content-editor: editor
  h_01KH6S02D5ZZWQNKAQGQ13KMQM: graphical-1
  user-content-item: item
  user-content-json-schema: json-schema
  user-content-rendering: rendering
  h_01KH6S02D5KB9BQWG2PWPFFX9Y: user-interface-1
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01KH6S02D5H5XSVZHPYDVFY4TA: api-1
  user-content-ddui: ddui
  user-content-server-ui-ddui: server-ui-ddui
  h_01KH6S02D64GWJ2PA44H2TGJK0: graphical-2
---

**Posted:** 11 February 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- This update will be rolling out to the various platforms as they become available, so please allow time for the update to reach you.

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/43440130268301" alt="MCV_Feb11_Bedrock_3_HuskChickenJockey_1280x720.jpg" />
</figure>

\
Uh-oh! Our undead and hostile baby mobs have a new scary strategy: looking even more adorable! The baby zombie, husk, zombie villager, piglin, zombified piglin, and the gurgle are storming testing looking just as deceivingly innocent and huggable as our baby villagers. Will we fall for this fun-sized yet fatal trick? As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/) , and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/) .

# Features and Bug Fixes[](https://feedback.minecraft.net/hc/en-us/articles/features-and-bug-fixes)

## Drop 1 2026[](https://feedback.minecraft.net/hc/en-us/articles/drop-1-2026)

### Baby Mobs[](https://feedback.minecraft.net/hc/en-us/articles/baby-mobs)

- Updated the models and textures of the following baby mobs:
  - Piglin
  - Villager
  - Zombie Villager
  - Zombified Piglin
  - Zombie
  - Husk
  - Drowned
- Fixed the Baby Chicken's warm variant texture
  - Updated the texture's stripes to be symmetrical on both sides
- Fixes brown baby Rabbit's texture
  - The texture of the feet were fixed
- Fixed baby turtle texture colors
- Fixed Baby Turtle mers ([MCPE-235767](https://bugs.mojang.com/browse/MCPE-235767))
- There is now a decicated model for all humanoid babies armor
- All humanoid baby mobs no longer scale down the item held in their hands

### Golden Dandelion[](https://feedback.minecraft.net/hc/en-us/articles/golden-dandelion)

- Bone Meal can no longer be used on Golden Dandelion
- Golden Dandelion can now be used to craft Suspicious Stew
- Golden Dandelion can now be crafted into Yellow Dye
- Placed Golden Dandelion can now be picked up by Endermen
- Golden Dandelion can now be picked up by mobs who can pick up items
- Golden Dandelion can now be used to distract Piglins

## Accessibility Features[](https://feedback.minecraft.net/hc/en-us/articles/accessibility-features)

- Added a key binding for Describe, a feature that will let you know through text and TTS what block or mob you have in front of you
  - Available for keyboard and controller inputs

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Added Note Block trumpet instrument for Block of Copper, Cut Copper and Chiseled Copper

## Graphical[](https://feedback.minecraft.net/hc/en-us/articles/graphical)

- Fixed a bug where some light source blocks held in hand would appear unlit when near other light source blocks in Vibrant Visuals
- Added static local lighting support for more entities and items, including pistons, moving blocks, signs, beds and chests in Vibrant Visuals
- Fixed UI icons not showing at the lowest GUI scale setting ([MCPE-234762](https://bugs.mojang.com/browse/MCPE-234762))

## Mobs[](https://feedback.minecraft.net/hc/en-us/articles/mobs)

- Fixed an issue causing villagers to occasionally appear lying on the ground rather than in their bed while sleeping ([MCPE-119736](https://bugs.mojang.com/browse/MCPE-119736))
- Fixed the texture of the Baby British Short Hair variant of the Baby Cat mob
- Fixes the baby pig texture colors
- Updated adult Horse's blackdot markings to match the new baby Horse markings

## Character Creator[](https://feedback.minecraft.net/hc/en-us/articles/persona)

- Skins will be correctly shown to other players when switching to a Classic skin and then back to a custom appearance
- While playing in a multiplayer world, users will no longer be randomly messaged about other users updating their appearances when no change was actually made

## Realms[](https://feedback.minecraft.net/hc/en-us/articles/realms)

- Added a trailing space to the Server Region localized string
- The information dropdown for Realm saves now displays the correct version format
- Fix text is unreadable on "Your realm is ready" screen on large UI
- Fixing the download world button for realms not present on old UI
- Input legend no longer cuts off end of timeline opted out members
- Remove disabled simulation distance slider from Ore-UI Realms Edit World

## UI[](https://feedback.minecraft.net/hc/en-us/articles/ui)

- Fixed back button not working after exiting friend's profile ([MCPE-232736](https://bugs.mojang.com/browse/MCPE-232736))
- Add support for more mouse cursor types to Ore UI on Windows

## User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Fixed double item trades overlapping in Trader Screen Pocket UI. ([MCPE-235009](https://bugs.mojang.com/browse/MCPE-235009))
- Updated headers in pocket UI inventory
- Hardcore worlds in the Play screen will now display the number of days played if the "show days played" gamerule is enabled

# Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/technical-updates)

## AI Goals[](https://feedback.minecraft.net/hc/en-us/articles/ai-goals)

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 26.10 and newer
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

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- Include built in math functions in generated metadata for molang
- Fixed a bug where `isValid` could return false for a valid `SimulatedPlayer` after it had been spawned
- Changed `resultItem` on `EntityDefinitionFeedItem` and `FeedItem` to be of type `string | undefined`
- Released `resultItem` on `EntityDefinitionFeedItem` and `FeedItem` from beta to `v2.6.0`
- Released `EntityItemDropAfterEvent` from `beta` to `v2.6.0`
- Released `EntityItemDropAfterEventSignal` from `beta` to `v2.6.0`
- Released `EntityItemDropEventOptions` from `beta` to `v2.6.0` 
- Released `WorldAfterEvents.entityItemDrop` from `beta` to `v2.6.0`

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Added Block trait `minecraft:multi_block` behind **'Upcoming Creator Features'** experiment
  - Used to define a block composed of multiple block parts. A multi block treats all individual parts as a single block, like Door blocks
  - The selection box can be extended for the size of the multi block, by setting `"minecraft:selection_box"` to true and the trait will update it based on the parts total and geoemtry size
  - The trait combines the AABBs from the `"minecraft:selection_box"` for each part.
    - So if this is in the components section: `"minecraft:selection_box": {"origin": [-8, 0, 5], "size": [16, 16, 3] }`
    - Then each part will have an AABB of `16x16x3` and when the player looks at the multi block the outline AABB will be a combined `16x16x9`(in world space)
  - Enables new state `minecraft:multi_block_part`
  - Required `direction` property used to define which direction the block parts are placed from 0 to N. Valid values are limited to `"up"` and `"down"`
  - Optional `part_count` property used to initialize state `minecraft:multi_block_part`, valid value range is \[2, 4\]
  - Command inspection & api support will be coming in an upcoming preview\
    Example:

``` auto
{
    "format_version": "26.0",
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

- We have an experiment active in preview that may utilize the modern parsing pipeline. There are some breaking changes that may affect loading of block json with format version 26.10. If you are unable to load a custom block json, please take a look at the following changes, that may affect you, if the experiment is active on your build. The list is not exhaustive so please report any unknown issues with loading custom blocks.
  - Name space constraints have been tweaked but everything permitted before should still be valid.
    - This can affect the identifiers used for the block, states and menu category groups.
  - `"placement_direction"` trait, validation change: Duplicate values will now be rejected in `"enabled_states"`.
    - The rotation offset does not have a 0.5 tolerance anymore.
    - Input value is converted to the closest 90 degree value.
    - The value must be in the range 0 to 360 inclusive.
    - `"blocks_to_corner_with"` now requires `"minecraft:corner_and_cardinal_direction"` to be one of the `"enabled_states"` for the `"placement_direction"` trait.
  - `"placement_position"` trait, validation change: Duplicate values will now be rejected in `"enabled_states"`.
  - `"menu_category"`, validation change: An empty "group" value is not allowed.
    - The "group" field can either exist with a non-empty value or not exist at all.
    - `"category"` is now a required field, when using `"menu_category"`. This is strictly enforced now.
  - `"minecraft:flower_pottable"`, validation change: It is restricted outside of root components object.
  - `"minecraft:geometry"`, validation change: The constraint on `"culling_shape"` identifier is strictly enforced now.
    - When using the `minecraft` namespace, the only currently available culling shape identifiers are : `"minecraft:empty"` or `"minecraft:unit_cube"`.
    - When using no namespaces or a custom one, the names must start and end with an alpha-numeric character.
  - `"minecraft:light_dampening"` and `"minecraft:light_emission"`, validation change: They now strictly enforce the value to be between 0 and 15 inclusive.
  - `"minecraft:map_color"` will only work with object notation in preview.
    - The array notation support will be added for release.
  - There is a breaking change to how tags are defined.
    - As of version 26.10, tags cannot freely live as top level entities in the components array.
    - They must live in the `"minecraft:tags"` component, which accepts an array of tags of the format :
      - `"minecraft:tags": ["minecraft:crop", "custom:custom_tag"]`.
    - The values must have the format `"namespace:tag_name"`.
    - They no longer need to be prefixed with `tag:`

## Commerce Experiences[](https://feedback.minecraft.net/hc/en-us/articles/commerce-experiences)

- Updated the assert message when the file download size is zero, and stop retry if the size is zero and there is a network error. ([MCPE-235141](https://bugs.mojang.com/browse/MCPE-235141))
- Fixed an issue with images for the Marketplace Pass and Realms FAQs pages being excessively large

## Editor[](https://feedback.minecraft.net/hc/en-us/articles/editor)

- Fixed a bug that entities can't spawn in the center of the cursor position for Summon Tool
- Updated Jigsaw Tool UX
  - Converted Jigsaw Tool UI from dropdown-based to CollectionTree component (pools displayed as folders with pieces as entries)
  - Added localized error logging when jigsaw files can't be saved (file locked by another program)
  - Moved checkboxes (Reuse Seed, Skip Validation) into a wrapping row layout
  - Updated Jigsaw UI strings
- Farm generator now places crop block on tilled dirt and not water blocks
- Fixed a bug where most double slab blocks were missing from the Block Picker menu, preventing users from adding them to the Hotbar or using them in Brush Block filters
- Large volume trim operations now do not freeze the UI screen and keyboard/mouse
- Fixed a bug where players were unable to create a selection volume using the Enter key in Marquee mode
- Fixed the /structure load command placing structures at a different position in Editor mode compared to Test World
- Fixed a bug where exporting a world did not display the file path in the Log Panel
- Added `IListPaneViewControlPane` API for list pane to create a view control with `buildViewControl` function
  - When the view control is set to visible, it will be displayed at the bottom of the root pane

## Graphical[](https://feedback.minecraft.net/hc/en-us/articles/graphical)

- Fixed gamma encoding of sun, moon, weather, and end sky in Vibrant Visuals mode

## Item[](https://feedback.minecraft.net/hc/en-us/articles/item)

- The minecraft:block_placer item component has a new boolean field "aligned_placement" ([MCPE-234686](https://bugs.mojang.com/browse/MCPE-234686))
  - When true, block placement through this item will be aligned while holding the interaction button down
  - It is defaulted to false
  - It is supported from format version 26.0 onward

## JSON Schema[](https://feedback.minecraft.net/hc/en-us/articles/json-schema)

- Updating the `canopy_decorator`schema to support placing several blocks in a row as a decorator.\
  New schema includes `decoration_blocks_sequence` as a list of blocks and a count per block to be placed.\
  This aims to replace `decoration_block` and `num_steps`, however the old format is still supported but if both are give the new one is prioritised.\
  Example of new format:

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

## Rendering[](https://feedback.minecraft.net/hc/en-us/articles/rendering)

- Armor attachables for Players now use a new render controller called `controller.render.armor.player`

## User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Changed screen narration to not read the Marketplace Pass banner

# Experimental Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/experimental-technical-updates)

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- `Observable` is a new class that fires change events when the data it is wrapping changes
  - `CustomForm` and `MessageBox` use these to sync data between the client and the server and you can use observables to get notifications if data changes
  - Localizable messages can be provided by using the interface `UIRawMessage`.

### DDUI[](https://feedback.minecraft.net/hc/en-us/articles/ddui)

- Fixed scroll bar for message box
  - It was showing all the time, now it is only rendered when needed

### Server-UI DDUI[](https://feedback.minecraft.net/hc/en-us/articles/server-ui-ddui)

- Renamed interface `LabelOptions` to `TextOptions`.
- Class `CustomForm`.
  - Added method `label(text: Observable<string> | string | UIRawMessage, options?: TextOptions): CustomForm`.
- Class `MessageBox`.
  - Removed method `title(text: Observable<string> | string | UIRawMessage): MessageBox`.
  - Added parameter `title` to static method `create`:
    - `static create(player: Player, title: Observable<string> | string | UIRawMessage): MessageBox`.

## Graphical[](https://feedback.minecraft.net/hc/en-us/articles/graphical)

- Removed the legacy format for specifying light colors in the "Render Dragon for Creators" experiment
  -  `point_lights/global.json` will no longer be loaded
  - Creators should migrate to the newer format of `local_lighting/local_lighting.json`
