---
title: Minecraft Beta & Preview - 1.21.120.22
date: 2025-09-16T12:14:03Z
updated: 2025-09-23T14:26:26Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/39606021304589-Minecraft-Beta-Preview-1-21-120-22
hash:
  h_01K4QGGX0VZTA2K57049601A6D: posted16-september-2025
  h_01K4QGH0NC3AWYN35PD4ZSPGX6: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-end-gateway-portal: end-gateway-portal
  user-content-blocks: blocks
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-copper-golem: copper-golem
  user-content-stability-and-performance: stability-and-performance
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-editor: editor
  user-content-general: general
  user-content-item-components: item-components
  user-content-molang: molang
  user-content-network: network
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01K59HP2HWD1YHT5YC9W7B2VN7: api-1
  h_01K59HP2HW5SDQA02NCWECSB4S: blocks-1
---

#### **Posted:** 16 September 2025

**NOTE:** While we roll out the GDK update on Minecraft Preview for Windows, some players will remain on Preview version 1.21.120.20. This will affect Realms and multiplayer compatibility with newer Preview versions. We will continue to roll the update out to more Preview players on Windows in the coming days. Thanks for your patience!

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=features-and-bug-fixes)

### End Gateway Portal[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=end-gateway-portal)

- Mitigated an issue that the player can get pushed to the void after teleporting from end portal. ([REALMS-12993](https://bugs.mojang.com/browse/REALMS-12993))

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=blocks)

- Copper Lantern textures are now animated ([MCPE-226142](https://bugs.mojang.com/browse/MCPE-226142))
- Soul Fire Lantern textures are now animated ([MCPE-89643](https://bugs.mojang.com/browse/MCPE-89643))
- Interacting with a Shelf while empty-handed in Creative mode no longer produces a sound effect ([MCPE-227586](https://bugs.mojang.com/browse/MCPE-227586))

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=graphical)

- Fixed an issue where the Copper Golem's eyes did not glow when viewed through water in Vibrant Visuals ([MCPE-226550](https://bugs.mojang.com/browse/MCPE-226550))
- Adjusted rendering settings in Vibrant Visuals
  - Slightly reduced contrast across all biomes
  - Reduced the intensity of temperature-based color grading in certain biomes, such as Desert and Mesa biomes
  - Adjusted the sky color in the End dimension
  - Added unique biome settings for the Roofed Forest biomes

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=mobs)

- Copper Golem Statue no longer renders incorrectly in the UI ([MCPE-225212](https://bugs.mojang.com/browse/MCPE-225212))
- Wither skeleton can now pick up copper swords

### Copper Golem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=copper-golem)

- When interacting with a Copper Golem, Scraping and Waxing particles now appear at the Copper Golem's location instead of at the Block location

## Stability and Performance[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=stability-and-performance)

- Improved stability around Hopper Block destruction

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=user-interface)

- Touch Controls: Sneak button now has its proper outline when activating Swap Jump and Sneak. ([MCPE-185069](https://bugs.mojang.com/browse/MCPE-185069))
- Accessibility and Language Settings are now updated with a new layout and design
  - We’d love to hear your thoughts on this [here](https://aka.ms/mcbedrocksettingsfeedback)
- Text to Speech with Device Settings and Improved Input Response toggles are now available from settings screen on Windows ([MCPE-227865](https://bugs.mojang.com/browse/MCPE-227865))

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=api)

- Released `initialRotation` member of `SpawnEntityOptions` to 2.3.0
- Released `initialPersistence` member of `SpawnEntityOptions` to 2.3.0
- Fixed an issue with Players phasing through blocks when using `applyImpulse(vector: Vector3): void`. ([MCPE-226702](https://bugs.mojang.com/browse/MCPE-226702))
- Releasing the light detection API from experimental to stable.
- Removed entity override limit on Player method `setPropertyOverrideForEntity`

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=editor)

- A preview thumbnail of a structure is added to the structure list item
- Undo/redo support for Ruler Tool
- Fix an issue with client hanging when copy/pasting large structures

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=general)

- Corrected the aim assist command error message that did not properly explain why it failed for the first person camera ([MCPE-226651](https://bugs.mojang.com/browse/MCPE-226651))
- Network changes may result in better download speeds on Windows devices 

## Item Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=item-components)

- Added the new "minecraft:swing_duration" item component, which defines the duration, in seconds, of the item's swing animation when mining or attacking
  - The duration is specified in the component's "value" field
  - Affects visuals only and does not impact attack frequency or gameplay mechanics
- The "minecraft:fire_resistant" item component no longer accepts a direct value assignment and now requires the value to be specified through the "value" field

## Molang[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=molang)

- Added "query.base_swing_duration", which returns the duration of the mob's swing/attack animation, determined by the carried item and unmodified by effects applied on the mob
- Added "query.modified_swing_duration", which returns the duration of the mob's swing/attack animation, determined by the carried item and modified by effects applied on the mob

## Network[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=network)

- The following level events now emit particles at the exact specified position instead of at the center of the matching block position:
  - `WaxOn`, `WaxOff`, `Scrape`

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=api)

- Added `Control Scheme` string enum.
  - Added method `setControlScheme(controlScheme?: string): void;` to `beta`.
  - Added method `getControlScheme(): ControlScheme;` to `beta`.
- Added Scripting API for BlockPrecipitationInteractions component.
  - This api includes a component class for the BlockPrecipitationInteractions component and the two methods (accumulatesSnow and obstructsRain) of said component.
- Loot table discovery API now includes information about Loot Item Conditions
  - Modified method from `setControlScheme(controlScheme?: string): void;` to `setControlScheme(controlScheme?: ControlScheme): void;` in `beta`. 

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30407/R21U12-3-Preview?anchor=blocks)

- Added minecraft:precipitation_interactions component.
  - This component allows creators to determine whether a block should obstruct precipitations or not. And if it does, whether falling snow should accumulate on the block or not.
