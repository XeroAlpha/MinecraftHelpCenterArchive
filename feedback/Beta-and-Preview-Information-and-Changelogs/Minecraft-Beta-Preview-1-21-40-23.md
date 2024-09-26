---
title: Minecraft Beta & Preview - 1.21.40.23
date: 2024-09-25T15:56:01Z
updated: 2024-09-26T08:56:01Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30556182663437-Minecraft-Beta-Preview-1-21-40-23
hash:
  h_01J8MYD17GST4R9TGX20PY8NBS: information-on-minecraft-preview-and-beta
  user-content-experimental-features: experimental-features
  user-content-items: items
  user-content-known-issues: known-issues
  user-content-stability-and-performance: stability-and-performance
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-accessibility-features: accessibility-features
  user-content-blocks: blocks
  user-content-commands: commands
  user-content-graphical: graphical
  user-content-trading: trading
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-api: api
  user-content-components: components
  user-content-editor: editor
  user-content-entities: entities
  01J8MY8B19SY1R993MVK1GYXRG: stability-and-performance-1
  user-content-experimental-technical-features: experimental-technical-features
  01J8MY8B19DN1GCD2NMCZ12P72: add-ons-and-script-engine-1
  user-content-cameras: cameras
  01J8MY8B19P51M2W1P8QGJCZWW: graphical-1
---

## **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

 

We're back with another Minecraft Preview and Beta release! As always, please provide any feedback you might have at [feedback.minecraft.net](http://feedback.minecraft.net/)  and report any bugs that you find at [bugs.mojang.com](http://bugs.mojang.com/) .

 

# Experimental Features

## Items

- Bundle icon now matches Java Edition ([MCPE-185519](https://bugs.mojang.com/browse/MCPE-185519) )
- Empty Bundle no longer shows fullness bar when selected ([MCPE-185481](https://bugs.mojang.com/browse/MCPE-185481) )
- Bundle dye recipes are now unlocked when getting dye instead of undyed variant
- The Bundle has been de-experimentified and is now available during normal gameplay
- The "minecraft:bundle_interaction" item component has been de-experimentified
- The "minecraft:bundle_interaction" item component has been de-experimentified

## Known Issues

- Items placed in Bundle cannot be selected or removed on touch

## Stability and Performance

- Worlds created with Experimental Custom Biomes before Caves & Cliffs update will have their Custom Biomes in Chunks replaced with a default Biome (Ocean for Overworld)

# Features and Bug Fixes

## Accessibility Features

- Added text-to-speech voiceover for items in Marketplace Pass Content tab and Realms Content tab

## Blocks

- Fixed a bug where a block could be placed on a Vault block, causing weird block behaviors ([MCPE-186627](https://bugs.mojang.com/browse/MCPE-186627) )
- Updated references to old block names in remaining behavior pack files

## Commands

- Issue where some commands did not recognize certain block or item names has been fixed

## Graphical

- Data driven items are no longer misplaced in screenshots ([MCPE-185132](https://bugs.mojang.com/browse/MCPE-185132) )

## Trading

- Fixed a crash when attempting trades using only the second slot ([MCPE-186676](https://bugs.mojang.com/browse/MCPE-186676) )

## User Interface

- Added support for unread Realms Stories badge notifications on the new Play Screen (Preview Only)
- Non-empty Bundles now have a fullness bar when inside of a Bundle ([MCPE-185457](https://bugs.mojang.com/browse/MCPE-185457) )
- Added the possibility to edit the thumbnail of a world in the new OreUI Edit World screen

# Technical Updates

## Add-Ons and Script Engine

- New Beta options in "minecraft:looked_at" and "minecraft:home" entity components now properly require that "use_beta_features" is specified in the root JSON object

## API

- Fixed a crash that could occur with `getDimension` when called within `onBeforeActorRemove` on an entity that was invalid

## Components

- The "minecraft:damage_sensor" component's "deals_damage" field now supports three values:
  - "yes", received damage is applied to the entity
  - "no", received damage is not applied to the entity
  - "no_but_side_effects_apply", received damage is not applied to the entity, but the side effects of the attack are
    - This means that the attacker's weapon loses durability, enchantment side effects are applied, etc.
  - Pre-existing content will be automatically updated to maintain its original behavior

## Editor

- Added a new air block image to visualize when air blocks are selected in the Editor.
- Updated the block picker modal to better communicate the currently selected block and the block that is replacing it.
- Fixed Navigation Panel action bar icon and missing localization text
- Fixed a bug where certain icon theme colors were not applied correctly

## Entities

- Horse armor now correctly renders on horses when using resource packs with a minimum engine version of 1.17.0 or lower ([MCPE-185316](https://bugs.mojang.com/browse/MCPE-185316) )

## Stability and Performance

- Custom biome ids are now assigned with values starting at 30,000 and are stored in 'BiomeIdsTable' in world data so their id assignments persist for the duration of the world

# Experimental Technical Features

## Add-Ons and Script Engine

- Added "replace_block_item" field to the "minecraft:block_placer" item component. This field allows you to specify that this item should replace the default item created for the data-driven block it places. To use this field, the identifier of the item must match the identifier of the block it places. This field is optional and defaults to false.

## Cameras

- Added horizontal and vertical rotation limits to the Focus Target Camera experimental toggle
- Added "continue_targeting" bool to the Focus Target Camera experimental toggle for tracking entities outside of set rotation limits

## Graphical

- Fixed a bug with point light shadows that would cause circles to appear on nearby surfaces. As a consequence, the edges of point light shadows are now jagged. This will be resolved in a later update.

- Added the ability to data-drive the ambient light in the Deferred Technical Preview. The ambient light is used as the indirect specular contribution when SSR and IBL are not available or when they are insufficient to illuminate metal objects in low light conditions. It is also used as the minimum value that ambient contribution can have, thus avoiding scenes from being completely black if no light sources are present. See updated documentation on the Creator portal for more information.

- Made a breaking schema change to JSON files associated with the Deferred Technical Preview to hoist the `"format_version"` field out to the root level. Documentation on the Creator portal will be updated accordingly. The following files are affected:

  - `"atmospherics/atmospherics.json"`
  - `"color_grading/color_grading.json"`
  - `"lighting/global.json"`
  - `"pbr/global.json"`
  - `"point_lights/global.json"`
  - `"water/water.json"`

For example, the previous schema for `"lighting/global.json"` was:

``` hljs
{
    "minecraft:lighting_settings": {
        "format_version": "1.21.40",
        ...
    }
}
```

But should now be written as:

``` hljs
{
    "format_version": "1.21.40",
    "minecraft:lighting_settings": {
        ...
    }
}
```
