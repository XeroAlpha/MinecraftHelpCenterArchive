---
title: Minecraft Beta & Preview - 26.0.25
date: 2025-12-10T15:53:31Z
updated: 2025-12-10T15:57:25Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/41819389887373-Minecraft-Beta-Preview-26-0-25
hash:
  h_01KC4FA71D0ER6E2868CAHC5BW: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-accessibility: accessibility
  user-content-blocks: blocks
  user-content-editor: editor
  user-content-graphical: graphical
  user-content-input: input
  user-content-items: items
  user-content-mobs: mobs
  user-content-party-system: party-system
  user-content-realms: realms
  user-content-stability-and-performance: stability-and-performance
  user-content-storage: storage
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-biomes: biomes
  h_01KC4FFDSCBKS1TSYH66F2MT8F: blocks-1
  user-content-general: general
  user-content-network-protocol: network-protocol
  h_01KC4FFDSCDS3GYN6DVEJCGXZN: stability-and-performance-1
  h_01KC4FFDSC8ZWS6CCYJWRH9QJG: user-interface-1
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01KC4FFDSCJAMCHCZB0Q2PT8S8: api-1
  h_01KC4FFDSCTFBBDA0JW3VAQMYT: blocks-2
---

**Posted:** 10 December 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/) , and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/) .

This is the final Minecraft Preview release of 2025, but we'll be back in early January with new Preview updates!

  
 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=features-and-bug-fixes)

## Accessibility[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=accessibility)

- Gameplay subtitles (closed captions) should now function as expected
  - To provide feedback on the closed captions feature, please do so over at <http://aka.ms/mcclosedcaptionsfeedback>

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=blocks)

- Bamboo Stalks no longer pop in as obviously, from a distance they have no transparency instead (like Sugar Cane and Cactus) unless on Simple graphics

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=editor)

- Fixed a bug that caused Selection/quick-move mode to get into a bad state if you tried to use "enter" to make a selection while in Quick Move mode
- Fixed an issue where opening the Vibrant Visuals pane and selecting a setting would not display the selected setting
- Fixed an issue when Quick Move was used on a large brush selection, the client would freeze and crash
- Fixed Vibrant Visual mode in the Editor not rendering water correctly

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=graphical)

- Fixed a bug that would sometimes allow sunlight to shine through walls, e.g. near cave entrances, in Vibrant Visuals mode

## Input[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=input)

- Fixed a bug on Windows where scrolling could cause the camera to move ([MCPE-230921](https://bugs.mojang.com/browse/MCPE-230921))

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=items)

- Diamond Horse Armor now provides 2 points of toughness, while Golden Horse Armor provides none ([MCPE-232700](https://bugs.mojang.com/browse/MCPE-232700))

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=mobs)

- Creaking attack animation is no longer cut short ([MCPE-187288](https://bugs.mojang.com/browse/MCPE-187288))
- The Water Breathing effect now prevents the Nautilus from suffocating outside of water, consistent with its behavior for other aquatic mobs ([MCPE-232061](https://bugs.mojang.com/browse/MCPE-232061))
- Drowned can now control the Zombie Nautilus they ride, allowing them to actively chase their target ([MCPE-232370](https://bugs.mojang.com/browse/MCPE-232370))
- The Baby Zombie Horse can no longer be ridden
- The Baby Zombie Horse can no longer be equipped with a Saddle or Horse Armor
- The following undead mobs will no longer panic when hit
  - Camel Husks
  - Skeleton Horses
  - Zombie Horses

## Party System[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=party-system)

- The new Party System is available in the social drawer for Preview! Create a party with your friends and follow the party leader from world to world
  - Please give us your feedback at [aka.ms/MinecraftPartyFeedback](https://aka.ms/MinecraftPartyFeedback)
  - The Party System is currently only on some devices and will be coming to more over time

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=realms)

- The description and storage bar labels under the "Free up space" popup dialog are now treated as two separate objects for narration instead of one
- For the Realms Edit World screen, the description of the Reset and Replace confirmation modals have been updated

## Stability and Performance[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=stability-and-performance)

- Fixed a bug where some low memory Android devices would crash at startup

## Storage[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=storage)

- Fixed an issue on Windows where the `resource_packs` and `behavior_packs` folders weren't migrated to the new file directory ([MCPE-230229](https://bugs.mojang.com/browse/MCPE-230229))
- Temporary files on Windows will now write to `%LocalAppData%\\Temp\\Minecraft Bedrock Preview` and `%LocalAppData%\\Temp\\Minecraft Bedrock` respectively ([MCPE-232633](https://bugs.mojang.com/browse/MCPE-232633))

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=user-interface)

- Changed Settings button on the Game Menu back to being a text button
- Newly bred and mounted baby Horses, Mules, and Donkeys now show the correct number of hearts when fully grown ([MCPE-165899](https://bugs.mojang.com/browse/MCPE-165899))
- Fixed a misleading message shown when trying to sleep in a Bed ([MCPE-184973](https://bugs.mojang.com/browse/MCPE-184973))
- Fixed a typo in the Minecoins section of Encyclopedia ([MCPE-227680](https://bugs.mojang.com/browse/MCPE-227680))
- Fixed text inconsistency in the Navigation section of Encyclopedia ([MCPE-228203](https://bugs.mojang.com/browse/MCPE-228203))
- Fixed typos in the Worlds section in Encyclopedia ([MCPE-229652](https://bugs.mojang.com/browse/MCPE-229652))

## Vanilla Parity[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=vanilla-parity)

- The outline color of an active effect now changes if an ambient effect is replaced by an identical non-ambient effect, or vice versa ([MCPE-230918](https://bugs.mojang.com/browse/MCPE-230918))
- Changed the updating logic for Mob Effects to be more aligned with Java Edition

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=api)

- Added `getComponents` to `Block` into beta
- Added `hasComponent` to `Block` into beta

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=biomes)

- Enabled the Biome Replacement feature in the Nether
  - Using Biome Replacement for Overworld and Nether for the same Biome is discouraged but not prohibited
  - Biome Replacement in Nether can only be used with `minecraft:surface_builder` of types: `minecraft:overworld`, `minecraft:frozen_ocean`, `minecraft:capped`, `minecraft:the_end`

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=blocks)

- Released the component `minecraft:connection_rule` from experimental for block format versions 26.0 or higher
- Released the component `minecraft:support` from experimental for block format versions 26.0 or higher
- The block component `minecraft:leashable` can be used with format_version 26.0 and higher without the "Upcoming Creator Features" toggle

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=general)

- Fixed an issue where development resource packs enabled globally would not reload when leaving and re-entering a world or using the `/reload all` command ([MCPE-232054](https://bugs.mojang.com/browse/MCPE-232054))
- Added `minecraft:village_type` biome component that determines the type of the village in the biome

## Network Protocol[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=network-protocol)

- `ActorDamageCause` modified: deprecated `ActorDamageCause::Dehydration`

## Stability and Performance[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=stability-and-performance)

- Fixed a bug that was causing crashes when using the NPC component

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=user-interface)

- Added `default_size_scales_to_ratio` Boolean to image controls so that a size of "default" will resize to maintain the texture's aspect ratio

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=api)

- Added the privilege with which a closure will be called to API metadata
  - Adding `World.seed` as a property to expose the world seed to `beta`
- Added before & after script events for when an entity picks up an item in the world
  - Added class `EntityItemPickupAfterEvent` to `beta`
  - Added class `EntityItemPickupBeforeEvent` to `beta`
  - Added class `EntityItemPickupAfterEventSignal` to `beta`
  - Added class `EntityItemPickupBeforeEventSignal` to `beta`
  - Added interface `EntityItemPickupEventOptions` to `beta`
  - Added interface `ItemFilter` to `beta`
  - Added property `WorldAfterEvents.entityItemPickup` to `beta`
  - Added property `WorldBeforeEvents.entityItemPickup` to `beta`

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31165/R26U0-2-Preview?anchor=blocks)

- Blocks can handle the entity `execute_event_on_home_block` event via custom components in scripting, being beta features

``` auto
system.beforeEvents.startup.subscribe(init => {
        init.blockComponentRegistry.registerCustomComponent('sample:my_custom_block_component', {
            onEntity: (e: BlockComponentEntityEvent) => {
                if (e.name !== "sample:my_entity_named_event") return;
                const block = e.block;
                const source = e.entitySource;
                ...
            },
        });
    });
```
