---
title: Minecraft Beta & Preview - 1.21.60.23
date: 2024-12-04T12:34:32Z
updated: 2024-12-04T16:40:22Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/32412964700813-Minecraft-Beta-Preview-1-21-60-23
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-magma-cube: magma-cube
  user-content-stability-and-performance: stability-and-performance
  user-content-user-interface: user-interface
  user-content-trial-mode: trial-mode
  user-content-vanilla-parity: vanilla-parity
  user-content-biomes: biomes
  01JE8SHP20QPCKK2SKG21B1PW5: blocks-1
  user-content-items: items
  user-content-sounds: sounds
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-commands: commands
  user-content-components: components
  user-content-editor: editor
  user-content-network-protocol: network-protocol
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-aim-assist: aim-assist
  user-content-api: api
  01JE8SHP23DFCXJPV6VF9NG4WY: commands-1
  user-content-creator: creator
  user-content-gameplay: gameplay
  01JE8SHP20NXTJ41KABXQ95J9E: graphical-1
  user-content-molang: molang
  user-content-scripting-api: scripting-api
  01JE8SHP20J3TT79HNJV9JQAA3: stability-and-performance-1
---

**Posted:** 4 December 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta ](https://aka.ms/JoinMCBeta)for detailed instructions

![A pillager outpost with with allays nearby](https://feedback.minecraft.net/hc/article_attachments/32412943720973)

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/) , and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/)  ! Here's what's new this week:

# Features and Bug Fixes

## Blocks

- Fixed a crash that could occur when teleporting back into a chunk where a block entity was destroyed ([MCPE-178461](https://bugs.mojang.com/browse/MCPE-178461)) 
- Lily Pads no longer flicker when seen from afar ([MCPE-91452](https://bugs.mojang.com/browse/MCPE-91452)) 
- Sunflowers no longer flicker when seen from afar ([MCPE-122695](https://bugs.mojang.com/browse/MCPE-122695)) ([MCPE-102412](https://bugs.mojang.com/browse/MCPE-102412))
- Fence Gate blocks use state "minecraft:cardinal_direction" instead of "minecraft:direction". Uses string values ("north, south, east, west") 

## Graphical

- The dark edges around the screen at low Y coordinates now fade in gradually rather than appear suddenly ([MCPE-121983](https://bugs.mojang.com/browse/MCPE-121983)) 

## Mobs

- A Creaking's eyes now render even when the Creaking is invisible, provided it has a target ([MCPE-188259](https://bugs.mojang.com/browse/MCPE-188259))

### Magma Cube

- The new Magma Cube model and texture are now only used by Resource Packs that explicitly override them, as they have been renamed to differentiate them from the original assets ([MCPE-188547](https://bugs.mojang.com/browse/MCPE-188547))
  - This change is retroactive, starting from version 1.21.50

## Stability and Performance

- Fixed an issue where optional and required resource packs couldn't be downloaded when joining a multiplayer game if it was cancelled on the first download and join attempt 

## User Interface

- Touch controls: It is now possible to place blocks on top of containers when flying downwards, like on PC. ([MCPE-176407](https://bugs.mojang.com/browse/MCPE-176407)) 
- Inbox messages with long content are now scrollable with gamepad immediately after entering the screen 
- Fixed "An unknown error has occurred" when downloading resource packs under specific circumstances.
- Touch controls: Touch button for Pick Block is now available for both Survival and Creative 

### Trial Mode

- Removed the Sign In, Profile, Inbox and Gathering buttons from the Start Menu in Trial Mode
- Removed the Profile button from the Pause Menu in Trial Mode\
  \

## Vanilla Parity

### Biomes

- Eyeblossoms and Pale Moss Carpets no longer generate inside Pale Oak Tree trunks
- The vegetation of many Overworld biomes has been updated to more closely match Java Edition and align with the intended look and feel of Minecraft:
  - Overworld (applies to all biomes)
    - Pumpkins now generate in larger patches
    - Dandelions are now alternated with Poppies when generating in flower patches
    - Sugar Canes no longer generate through other blocks
  - Plains
    - Short Grass now generates more frequently and in larger amounts ([MCPE-141364](https://bugs.mojang.com/browse/MCPE-141364)) 
    - Tall Grass now generates less frequently but in larger patches
    - Flower patches now contain mixed flowers, are larger and generate more frequently
  - Sunflower Plains
    - Sunflowers now generate in more cohesive patches
  - Mushroom Fields
    - Mushrooms now generate in larger patches
  - Savanna
    - Short Grass now generates more frequently and in larger amounts
    - Tall Grass now generates less frequently but in larger patches
  - Flower Forest
    - Trees are now denser
    - Flowers now generate in more cohesive patches
  - Taiga
    - Small Ferns now generate more frequently
    - Large Ferns now generate less frequently
    - Sweet Berry Bushes now generate in larger patches
  - Old Growth Spruce Taiga
    - Mushrooms now generate in larger and more cohesive patches
    - Ferns now generate more frequently
    - Sweet Berry Bushes patches now generate ([MCPE-152452](https://bugs.mojang.com/browse/MCPE-152452))
  - Old Growth Pine Taiga
    - Mushrooms now generate in larger and more cohesive patches
    - Ferns now generate more frequently
    - Sweet Berry Bushes patches now generate ([MCPE-152452](https://bugs.mojang.com/browse/MCPE-152452)) 
  - Jungle
    - Trees are now denser
    - Big Jungle Trees now generate more frequently
    - Jungle Bushes are now larger
    - Melon patches now generate more frequently
  - Bamboo Jungle
    - Bamboo now generates in larger and denser patches
    - The width of Bamboo is now consistent across the entire plant
    - Trees are now denser
    - Big Jungle Trees now generate more frequently
    - Jungle Bushes are now larger
  - Sparse Jungle
    - Bamboo no longer generates
    - Ferns and Short Grass now generate more frequently
    - Jungle Bushes are now larger
    - Melon patches now generate more frequently
  - Meadow ([MCPE-139903](https://bugs.mojang.com/browse/MCPE-139903)) ([MCPE-141447](https://bugs.mojang.com/browse/MCPE-141447))
    - Short Grass now generates more frequently
    - Tall Grass now generates more frequently
    - Flowers now generate in patches instead of being homogeneously spread across the biome
  - Swamp
    - Blue Orchids now generate more frequently and in larger patches
    - Swamp Oaks now generate slightly more frequently
    - Swamp Oaks no longer generate in direct contact with the ground
    - Lily Pads now generate more frequently
  - Mangrove Swamp
    - Mangroves are now sparser
    - Mangroves now generate over water ([MCPE-153748](https://bugs.mojang.com/browse/MCPE-153748))
    - Lily Pads now generate more frequently
  - Badlands
    - Dead Bushes now generate more frequently
  - Desert
    - Dead Bushes now generate more frequently
  - Oceans (except Frozen Ocean)
    - Kelp now generates more frequently and in denser patches

### Blocks

- The Pale Oak Leaves no longer appear lighter than on Java ([MCPE-188217](https://bugs.mojang.com/browse/MCPE-188217))
- Renamed Banners no longer lose their custom names when broken, or when washed in cauldrons ([MCPE-36429](https://bugs.mojang.com/browse/MCPE-36429))
- Twisting Vines and Weeping Vines now have an increased chance of dropping as items when broken with Fortune enchanted tools, including a 100% chance when using Fortune III ([MCPE-91033](https://bugs.mojang.com/browse/MCPE-91033))
- Dispensers can now place Shulker Boxes under water ([MCPE-76004](https://bugs.mojang.com/browse/MCPE-76004))

### Items

- Suspicious Stews crafted with Tulips now apply the Weakness Effect for 7 seconds when consumed, matching Java ([MCPE-188040](https://bugs.mojang.com/browse/MCPE-188040))
- Suspicious Stews with the Weakness Effect acquired from Shipwrecks and trading with Villagers now apply the Weakness Effect for 7 seconds when consumed.

### Sounds

- Nether Brick Slab, Red Nether Brick Slab, Nether Brick Wall, Red Nether Brick Wall, Cracked Nether Bricks and Chiseled Nether Bricks now have the same sound as Nether Bricks, matching Java Edition ([MCPE-74879](https://bugs.mojang.com/browse/MCPE-74879))

# Technical Updates

## Add-Ons and Script Engine

- Added the ability to define the order for the items for the creative inventory & recipe book, called the crafting item catalog, for new items added by packs. New items can either merge with existing groups, create new groups with your own item for the icon, or just become added as loose items without a group. This catalog should be saved as `item_catalog/crafting_item_catalog.json` in your behavior pack\
  Example:

``` hljs
{
   "format_version": "1.21.60",
   "minecraft:crafting_items_catalog": {
      "categories": [
         {
            // Valid values are construction, equipment, nature, and items
            "category_name": "construction",
            "groups": [
               {
                  // This will add the items to the end of the
                  // existing planks group
                  "group_identifier": {
                     "icon": "minecraft:oak_planks",
                     "name": "minecraft:itemGroup.name.planks"
                  },
                  "items": [
                     "mynamespace:my_planks1",
                     "mynamespace:my_planks2"
                  ]
               },
               {
                  // This will create a new group
                  "group_identifier": {
                     "icon": "mynamespace:my_item",
                     // This is the name of your group which doubles as
                     // the localization string. The namespace is required
                     "name": "mynamespace:my_group_name"
                  },
                  "items": [
                     "mynamespace:my_item"
                  ]
               },
               {
                  // This adds items without being part of a
                  // group as loose items
                  "items": [
                     "mynamespace:my_loose_item"
                  ]
               }
            ]
         }
      ]
   }
}
```

- Item and Block json files now require a namespace for group names in the "menu_category" object. 
- Added new Creator toggle setting \`Show Content Log GUI On Error During Load.
  - This setting with make the Content Log GUI automatically open and display after loading into a world and there was either warnings or errors found during the loading process.
  - This setting is disabled in the Editor.

## Commands

- Fixed a bug that would cause messages to report double the items that match the criteria when using the clear command with a max count of 0 
- the "mine" overload of the /loot command has been moved to outside of Upcoming Creator Features experiments:
- The /kick command now allows use of target selectors on Realms

## Components

- Added the "minecraft:renders_when_invisible" component, which enables entities to render even when invisible
  - Appropriate rendering behavior can then be specified in the corresponding "minecraft:client_entity"

## Editor

- Daylight cycle and multiplayer options are now respected in an exported world
- Bedrock Dedicated Server would not correctly load an existing Editor project unless the `Editor=true` command line argument was used - resulting in connected Editor clients missing windows.
- Fly Speed Multiplier Global Hotkeys
  - Q, E, Shift + Q and Shift + E have been added as viewport keyboard shortcuts for increasing and decreasing fly speed
- `/reload` (and the `Reload Scripts` action bar item) should now work in the editor when hosting a session, or connected to a remote session (when only a single player is connected).

## Network Protocol

- Added ActorFlags::RENDERS_WHEN_INVISIBLE

# Experimental Technical Updates

## Aim Assist

- Changed aim-assist preset item settings to reference categories by unique namespace Ids globally instead of via name in a 'categories' list

## API

- Moved the following methods from `beta` to `1.17.0`:
  - `Block::isWaterlogged`
  - `Block::setWaterlogged`
- Added `scriptEvent` method to `system` object which sends a script event similar to the `/scriptevent` command to beta
- Added `NamespaceNameError` error which validates namespace usage to beta
- Added `NamespaceNameErrorReason` enum which shows the types of issues that namespace validation can run into to beta
- Added new function `collectPluginStats` to `@minecraft/debug-utilities` which will return the types and counts of all active script objects.
  - Removed `/script watchdog exportstats` command, deprecated in favor of script API.
- Added `setDynamicProperties` method to `World`, `Entity`, `ItemStack` and `ContainerSlot`
- Added enum `LiquidType`

``` hljs
export enum LiquidType {
    Water = 'Water'
}
```

- Added four new bindings to Script Block API (Beta)
  - `Block::canBeDestroyedByLiquidSpread`
  - `Block::isLiquidBlocking`
  - `Block::liquidSpreadCausesSpawn`
  - `Block::liquidCanFlowFromDirection`
- Added three new bindings to Script Block Permutation API (Beta)
  - `BlockPermutation::canBeDestroyedByLiquidSpread`
  - `BlockPermutation::isLiquidBlocking`
  - `BlockPermutation::liquidSpreadCausesSpawn`
- Fixed bug where `Block.setWaterlogged` would create a water source that does not flow. 

## Commands

- Place: Entities saved within structures will now be placed unless specified 
- Added two subcommands to the `/place` command behind the Upcoming Creator Features Experiment toggle 
  - `/place feature`
  - `/place featurerule`

## Creator

- Added support for ItemTags in match_tool loot table conditions behind the Upcoming Creator Features Experiment toggle

## Gameplay

- Added the option to limit yaw rotations on all cameras with an orbit component

## Graphical

- Add bilinear upscaling option.
- Enabled the Deferred Technical Preview for PlayStation 5 and PlayStation 4 in Preview. See the [Getting Started with Deferred Lighting](https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable)  article for more information
  - A known issue on PlayStation 4 may cause some entities or items to be invisible when turning on or toggling the Deferred Technical Preview.

## Molang

- Moved `query.last_input_mode_is_any` to stable. It takes one or more arguments ('keyboard_and_mouse', 'touch', 'gamepad', or 'motion_controller'). If the last input used is any of the specified string values, returns 1.0. Otherwise returns 0.0. Available on the Client (Resource Packs) only.
- Moved `query.touch_only_affects_hotbar` to stable. It returns 1.0 if the touch input only affects the touchbar, otherwise returns 0.0. Available on the Client (Resource Packs) only.

## Scripting API

- Moved enum `InputMode` from `beta` to `1.17.0`.
- Moved class `InputInfo` from `beta` to `1.17.0`.
  - Moved property `lastInputModeUsed` from `beta` to `1.17.0`.
  - Moved property `touchOnlyAffectsHotbar` from `beta` to `1.17.0`.
- Class `Player`.
  - Moved property `inputInfo` from `beta` to `1.17.0`.
- Moved class `PlayerInputModeChangeAfterEvent` from `beta` to `1.17.0`.
- Moved class `PlayerInputModeChangeAfterEventSignal` from `beta` to `1.17.0`.
- Class `WorldAfterEvents`.
  - Moved property `playerInputModeChange` from `beta` to `1.17.0`.
- Moved class `InvalidEntityError` from `beta` to `1.17.0`.

## Stability and Performance

- Resolved a crash that could occur when using top_layer_modification in custom jigsaw structures
- Resolved a crash that could occur when entering the nether with a custom jigsaw structure in the nether
