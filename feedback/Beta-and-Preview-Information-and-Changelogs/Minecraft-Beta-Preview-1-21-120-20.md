---
title: Minecraft Beta & Preview - 1.21.120.20
date: 2025-09-02T15:12:21Z
updated: 2025-09-04T07:59:04Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/39262266489613-Minecraft-Beta-Preview-1-21-120-20
hash:
  h_01K3K8XAYKJHD6RM07CWY8KETX: posted3-september-2025
  h_01K2FF7AMKD9PX52E26Z5CS1BW: information-on-minecraft-preview-and-beta
  h_01K47YGJ74NG3J7Y1Q56557PQX: features-and-bug-fixes
  h_01K47YGJ74D1N240ASS3FDC3SH: blocks
  h_01K47YGJ76E25CY7E3Q5J1J4PN: shelf
  h_01K47YGJ78FD5RR3VKAT3DXH9E: commands
  h_01K47YGJ79EETTXWNZS3FJ628C: gameplay
  h_01K47YGJ7AFEDNDFKQGANFTZH5: general
  h_01K47YGJ7A942KT7NQZEM4CJQ0: graphical
  h_01K47YGJ7ECJ0F0M4H1HQTR2ES: items
  h_01K47YGJ7EPF7S6Q0J79ZHXE74: mobs
  h_01K47YGJ7GTADSF1RCBJBP8ZNM: sounds
  h_01K47YGJ7H0K3CR7BGC1T954ZB: user-interface
  h_01K47YGJ7NPG1MM3M06WERXBSD: world-generation
  h_01K47YGJ7NNQW6Y4DXZ0K9XZNA: technical-updates
  h_01K47YGJ7N7W2B6J1CEAEBZSDQ: api
  h_01K47YGJ7RWJD57KZBX76HNV34: blocks-1
  h_01K47YGJ7STE7C2Y91FEK2WG9R: components
  h_01K47YGJ7SW6K2WQ7SGCZFM43P: editor
  h_01K47YGJ7VXQHZHC03BJ9ZDH72: item-components
  h_01K47YGJ7V8XPDNJNZEPDDHQE5: items-1
  h_01K47YGJ7WDZXW9JPHDVBJQ7GY: molang
  h_01K47YGJ83MRM18ZA2NNFK2BZP: experimental-technical-updates
  h_01K47YGJ83TCXN3R60WCDBZAEG: api-1
  h_01K47YGJ8424B5NJM8NJJAFYHZ: biomes
  h_01K47YGJ8557JKY75CS2A80EZV: molang-1
  h_01K47YGJ85FK8ZQPNR7AJQCCWE: blocks-2
  h_01K47YGJ86CV0SVWXQTQSC1ZWZ: editor-1
  h_01K47YGJ86K7S57BHXM3FDZ24R: graphical-1
---

#### **Posted:** 3 September 2025

**NOTE:** This week's Preview version may be delayed on Windows. We apologize for the inconvenience and are working to resolve the issue. (Update: The update should now be available to all expected platforms as normal - thanks for your patience!)

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/39262266483853" alt="r21u12_1.jpg" />
</figure>

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes

## Blocks

- Tadpoles now spawn in the water block below the Frogspawn block ([MCPE-225997](https://bugs.mojang.com/browse/MCPE-225997))
- Fixed an issue with being unable to continue destroying valid blocks in Adventure Mode when they are behind water

### Shelf

- Adding or removing Redstone power to or from the Shelf now emits vibrations
- Anvil and Wall Blocks have been repositioned on the Shelf and Item Frame ([MCPE-225309](https://bugs.mojang.com/browse/MCPE-225309))
- When a Player places/removes/swaps an item on an Unpowered Shelf a vibration of frequency 3 is emitted
- When a Player places/removes an item on a Powered Shelf a vibration of frequency 3 is emitted
- When a Player swaps item with one on a Powered Shelf a vibration of frequency 6 is emitted

## Commands

- Fixed an issue where the Damage Command would incorrectly report failure when applying damage to an Ender Crystal ([MCPE-191379](https://bugs.mojang.com/browse/MCPE-191379))
- Fixed /locate biome command to no longer direct the player into wrong biome areas ([MCPE-159992](https://bugs.mojang.com/browse/MCPE-159992))

## Gameplay

- Fixed loading of text for Sign blocks from very old worlds

## General

- Starting a world with a missing Marketplace template will now correctly redownload the template and start the world
- The first person camera will now offset backwards slightly when facing and climbing blocks such as Ladders and Vines

## Graphical

- Restored Java parity on how ambient occlusion is computed for partial blocks ([MCPE-226160](https://bugs.mojang.com/browse/MCPE-226160))
- Added TAA upscaling to weather effects like snow
- Fixed enchantment glint animation still playing when the game was paused ([MCPE-190569](https://bugs.mojang.com/browse/MCPE-190569))
- Fixed snowflakes flickering during player movement
- Improved quality of gamma correction on PC and Consoles and fixed the brightness of Creeper textures in the gamma calibration screen in Vibrant Visuals
- Mobs will now become slightly transparent when the camera gets too close or passes through them

## Items

- Suspicious Stew is now present in Creative Mode with effect description ([MCPE-51173](https://bugs.mojang.com/browse/MCPE-51173))

## Mobs

- Chicken Jockeys now drop the Lava Chicken music disc when killed by the player or tamed Wolves
- Copper Golem now drops its carried item when player interacts while holding an item in offhand, or when player has armor equipped ([MCPE-225249](https://bugs.mojang.com/browse/MCPE-225249))
- Copper Golem Statue no longer has cut off pixels when in the sitting pose ([MCPE-225999](https://bugs.mojang.com/browse/MCPE-225999))

## Sounds

- Copper Chest Opening and Close sounds now use a natural attenuation curve ([MCPE-224011](https://bugs.mojang.com/browse/MCPE-224011))
- Copper Golem Step and Spin sounds now use a natural attenuation curve

## User Interface

- Clicking on text fields now places the cursor in the correct spot even for scrolled message boxes ([MCPE-186409](https://bugs.mojang.com/browse/MCPE-186409))
- Keyboard button on the chat screen is now only visible for touch controls ([MCPE-105710](https://bugs.mojang.com/browse/MCPE-105710))
- Fixed a bug that could cause Armor Trims to appear applied to untrimmed armor in the inventory
- Updated the text that is shown when more players are required to sleep to skip to dawn ([MCPE-183832](https://bugs.mojang.com/browse/MCPE-183832))
- Brightness adjustment was renamed to gamma adjustment in Vibrant Visuals
- A "Reset to Defaults" button was added to the gamma adjustment screen in Vibrant Visuals
- The slider widget that controls the Vibrant Visuals gamma value shows the current gamma value, and the center of the slider corresponds to the default value
- Fixed issue where worlds backed by Xbox cloud storage would show a default tile when local data was present but invalid
- Fixed a bug where players could not move items from creative inventory to inventory in Pocket UI ([MCPE-226829](https://bugs.mojang.com/browse/MCPE-226829))

## World Generation

- Structures no longer build on top of features (e.g. trees) at chunk borders

# Technical Updates

## API

Optionally set version property to "beta" to always choose the latest beta version of the module. Example from manifest.json:

``` language-auto
"dependencies": [
{
  "module_name": "@minecraft/server",
  "version": "beta"
}
```

- Fixed Player.graphicsMode not returning the correct graphics mode when a player has switched to Vibrant Visuals
- LootTableManager's loot generation methods now properly recognize tools enchanted with looting
- Moved type ScriptBiomeType from beta into 2.3.0
- Moved API Dimension.getBiome(location: Vector3) from beta into 2.3.0

## Blocks

- Custom blocks using a non-opaque render_method in the minecraft:material_instances component that are placed above water will no longer incorrectly cull the top face of the water block

## Components

- The "all_slots_empty", "any_slot_empty", "has_equipment" filters now support "main_hand" as an equipment location

## Editor

- Added confirmation dialog in Keyboard Settings when resetting, restoring or closing the modal without saved changes
- Fixed a bug that caused lightning bolts to not despawn when entities are paused
- Fixed a bug that caused text to speech narration to read shortcuts incorrectly
- Removed unusable entities from Summon tool list
- Fixed a bug that enables to select volumes using Enter key and Shift+Enter key while in Selection's Freehand Brush Mode
- Added gradient background color on the Color timeline that interpolates between the colors of two adjacent nodes
- Added optional boolean property in Timeline API (renderGradientBackground) that allows the rendering of the background color to be turned off. By default it is ON

## Item Components

- Items with the new "minecraft:fire_resistant" item component no longer visually disappear on the client when thrown in fire while persisting on the server, as the property is now synced correctly across both

## Items

- Starting with format version 1.21.110, when a custom item's menu_category's category is set to "none" (or not specified) the item will be usable in commands ([MCPE-177866](https://bugs.mojang.com/browse/MCPE-177866))
- Fixed issue with rendering custom blocks as "flying items" ([MCPE-180489](https://bugs.mojang.com/browse/MCPE-180489))

## Molang

- Fixed query.graphics_mode_is_any not being correct when switching to Vibrant Visuals
- Added 21 new Molang expressions:
  - "math.inverse_lerp(start, end, value)", returns the normalized progress between start and end given value
  - "math.ease_in_quad(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating toward the end
  - "math.ease_out_quad(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating toward the end
  - "math.ease_in_out_quad(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating in the middle, then slowing again at the end
  - "math.ease_in_cubic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating strongly toward the end
  - "math.ease_out_cubic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating strongly toward the end
  - "math.ease_in_out_cubic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating strongly in the middle, then slowing again at the end
  - "math.ease_in_quart(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating rapidly toward the end
  - "math.ease_out_quart(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating rapidly toward the end
  - "math.ease_in_out_quart(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating rapidly in the middle, then slowing again at the end
  - "math.ease_in_quint(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating sharply toward the end
  - "math.ease_out_quint(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating sharply toward the end
  - "math.ease_in_out_quint(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating sharply in the middle, then slowing again at the end
  - "math.ease_in_sine(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating smoothly toward the end
  - "math.ease_out_sine(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating smoothly toward the end
  - "math.ease_in_out_sine(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending slow, with smoother change in the middle
  - "math.ease_in_expo(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating very rapidly toward the end
  - "math.ease_out_expo(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating gradually toward the end
  - "math.ease_in_out_expo(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending slow, with very rapid change in the middle
  - "math.ease_in_circ(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating along a circular curve toward the end
  - "math.ease_out_circ(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating along a circular curve toward the end
  - "math.ease_in_out_circ(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending slow, with circular acceleration and deceleration in the middle
  - "math.ease_in_bounce(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting with bounce oscillations and settling into the end
  - "math.ease_out_bounce(start, end, 0_to_1)", output goes from start to end via 0_to_1, approaching the end with bounce oscillations that diminish over time
  - "math.ease_in_out_bounce(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending with bounce oscillations, smoother in the middle
  - "math.ease_in_back(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting backward before accelerating into the end
  - "math.ease_out_back(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting past the end before settling into it
  - "math.ease_in_out_back(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting at both start and end, with smoother change in the middle
  - "math.ease_in_elastic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting with elastic oscillations before accelerating into the end
  - "math.ease_out_elastic(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting the end with elastic oscillations before settling
  - "math.ease_in_out_elastic(start, end, 0_to_1)", output goes from start to end via 0_to_1, oscillating elastically at both start and end, with stable change in the middle

# Experimental Technical Updates

## API

- Added Dimension.getGeneratedStructures(location: Vector3) which can be used to locate the Structures (Pillager Outpost, Mineshaft, etc.) of a given location
- Added worldAfterEvents.playerUseNameTag which fires when a Player uses a named NameTag Item on an Entity
- Added ControlScheme string enum
- Added method Player.setControlScheme(controlScheme?: string): void; to beta
- Added method Player.getControlScheme(): ControlScheme; to beta

## Biomes

### Molang

- Added 'query.entity_biome_has_any_identifier', 'query.entity_biome_has_any_tags', and 'query.entity_biome_has_all_tags' molang query functions to UpcomingCreatorFeatures
  - These queries only work in resource packs(client-side), and are not supported in behavior packs
  - "entity_biome_has_any_identifier('namespace:biome_name')" takes a list of biome identifiers and checks if any are the specified biome the entity is in
  - "entity_biome_has_any_tags('my_tag_name')" takes a list of biome tags and checks if the biome the entity is in matches any
  - "entity_biome_has_all_tags('my_tag_name')" takes a list of biome tags and checks if the biome the entity is in matches all

## Blocks

- Allow items referencing a pottable block in their "minecraft:block_placer" component to be pottable when "replace_block_item" is true

## Editor

- Added an offset and alignment property to the summon tool so that creators can more easily position entities at specific locations

## Graphical

- Deprecated point_lights/global.json in favor of a new file and schema, local_lighting/local_lighting.json. Creators can still make use of point_lights/global.json, but are encouraged to migrate to the new schema
  - Extended per-block local lighting information to include a light_type which can be either static_light or point_light
    - A block will only be considered for point lighting if its light_type is set to point_light
    - static_light is currently unused
  - The light_color property is now optional. If unprovided, the block will use a fallback light color instead
  - A sample local_lighting.json could look like this: "format_version": "1.21.120", "minecraft:local_light_settings": { "minecraft:torch": { "light_color": "#EFE39D", "light_type": "point_light" }
- Learn more at <https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization>
