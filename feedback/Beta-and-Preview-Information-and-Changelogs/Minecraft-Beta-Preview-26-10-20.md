---
title: Minecraft Beta & Preview - 26.10.20
date: 2026-01-27T14:24:50Z
updated: 2026-01-27T16:58:41Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43005760577293-Minecraft-Beta-Preview-26-10-20
hash:
  h_01KEVVCRJYJ96D2TDS3PPZKW57: information-on-minecraft-preview-and-beta
  h_01KFZYV245J5XDKYVYD8KKE26T: features-and-bug-fixes
  minecraftserver-net: ""
---

**Posted:** 27 January 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- This update will be rolling out to the various platforms as they become available, so please allow time for the update to reach you.

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/43005760571917" alt="Baby Turtles First Steps" />
</figure>

Making big waves this week for looking adorably tiny are new baby versions of the axolotl, dolphin, turtle, squid, and glow squid. Baby mounts are also getting an adorable makeover! Donkeys. Mules. Every single horse variant. All of these tiny cuties are galloping into the Overworld looking tinier and cuter than ever! The only question remains: can you handle the cuteness? 

And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Drop 1 2026

### Mobs

- Updated the models and textures of the following Baby Mobs:
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

### Baby Mobs

- Applied pack versioning to the new baby mobs. ([MCPE-234734](https://bugs.mojang.com/browse/MCPE-234734 "https://bugs.mojang.com/browse/mcpe-234734"), [MCPE-234744](https://bugs.mojang.com/browse/MCPE-234744 "https://bugs.mojang.com/browse/mcpe-234744"), [MCPE-234784](https://bugs.mojang.com/browse/MCPE-234784 "https://bugs.mojang.com/browse/mcpe-234784"), [MCPE-234785](https://bugs.mojang.com/browse/MCPE-234785 "https://bugs.mojang.com/browse/mcpe-234785"))
  - This fixes issues related to custom resource packs interacting with the baby mobs.
- Updated MERS of the baby tamed Wolf

## Achievements

- Fixed the issue preventing some item related achievements from being obtained.

### Sounds

- Baby horse and baby Chicken now have custom sounds

## Gameplay

- Cooldowns on custom items now visualize correctly

## Input

- Fixed an issue on Windows where the mouse highlight appeared in game when "Show location of pointer when I press the CTRL key" option was enabled in Windows settings. ([MCPE-168787](https://bugs.mojang.com/browse/MCPE-168787))
- Fixed an issue on Windows where the system's ClickLock mouse setting was not recognized. ([MCPE-231488](https://bugs.mojang.com/browse/MCPE-231488))

## Items

- Combining an Enchanted Shield with an Illager Banner now correctly transfers the enchantments to the crafted Illager Banner Shield ([MCPE-174103](https://bugs.mojang.com/browse/MCPE-174103))

## Mobs

- Baby Polar Bear no longer becomes hostile towards the player ([MCPE-173833](https://bugs.mojang.com/browse/MCPE-173833))
- The movement of Boats, Horses, Donkeys, and Mules is now as responsive as it used to be before the release of the Mounts of Mayhem game drop ([MCPE-231719](https://bugs.mojang.com/browse/MCPE-231719))
- Boats' paddle animation no longer glitches when paddling backwards
- Zombie Horses can no longer catch fire while in water ([MCPE-229542](https://bugs.mojang.com/browse/MCPE-229542))
- Added missing texture for the tamed woods version of the new baby Wolf
- Ghast's no longer display old face textures while shooting fireballs ([MCPE-218741](https://bugs.mojang.com/browse/MCPE-218741))
- Fixed incorrect allele range syntax for the Panda and Goat

## Character Creator

- Selected appearance should no longer reset to 3rd appearance at times upon starting up the client

## Realms

- Added message and logic for error joining realm whose owner is banned.

## Saves

- Ensure worlds created after signing out are saved to the new Users\Shared directory on Windows.

## Sound

- Baby wolves now correctly play baby variant sounds

## Stability and Performance

- Fixed an issue where marketplace textures would be cached when re-entering worlds and could potentially degrade performance on some platforms

## Switch

- Reduce audio delays when entering a world ([MCPE-177148](https://bugs.mojang.com/browse/MCPE-177148))

## User Interface

- Fixed screen narration reading previously typed chat messages letter by letter when context changed
- Added button enumeration narration to the death screen when text to speech is enabled
- Text input fields now support arrow key navigation between lines and keyboard shortcuts such as Ctrl+V on Android
- Text input fields in Ore UI now support mouse caret positioning and selection on Android
- Improved chat auto scroll behavior to allow reading older messages during high frequency chat
- Player is now able to change time using the "Time" button in the chat/command window when "Always Day" option is enabled ([MCPE-226307](https://bugs.mojang.com/browse/MCPE-226307))
- Added new registry keys so the Preview and Retail games don't share each other's previous window size and position ([MCPE-233168](https://bugs.mojang.com/browse/MCPE-233168))
- Fixed the Bed and Death screens fading animations ([MCPE-235024](https://bugs.mojang.com/browse/MCPE-235024))

# Technical Updates

## AI Goals

- Migrated "minecraft:behavior.ocelotattack" ('\_' misname is legacy and cannot safely be changed).
- We will fail to load an entity json that has invalid data in versions 1.26.0 and newer.
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.10 and newer. Also unified and updated documentation for the following goals
  - `minecraft:behavior.drop_item_for`
  - `minecraft:behavior.fertilize_farm_block`
  - `minecraft:behavior.harvest_farm_block`
  - `minecraft:behavior.inspect_bookshelf`
  - `minecraft:behavior.lay_egg`
- Float Range field `time_of_day_range` in `minecraft:behavior.drop_item_for` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Field `lay_seconds` in `minecraft:behavior.lay_egg` now only accepts numbers greater than or equal to 0

## API

- Generate JSON metadata for molang queries available in the game
- Released `@minecraft/server` version 2.6.0
- Added `@minecraft/server` version 2.7.0-beta
- Released `Block.getComponents` and `Block.hasComponent` into 2.6.0.
- Released `EntityHealBeforeEvent` from `beta` to `v2.6.0`
- Released `EntityHealAfterEvent` from `beta` to `v2.6.0`
- Released `EntityHealCause` from `beta` to `v2.6.0`
- Released `EntityHealSource` from `beta` to `v2.6.0`
- Released `EntityHealEventOptions` from `beta` to `v2.6.0`
- Released `EntityHealBeforeEventSignal` from `beta` to `v2.6.0`
- Released `EntityHealAfterEventSignal` from `beta` to `v2.6.0`
- Released `WorldBeforeEvents.entityHeal` from `beta` to `v2.6.0`
- Released `WorldAfterEvents.entityHeal` from `beta` to `v2.6.0`
- Released `EntityHurtBeforeEvent` from `beta` to `v2.6.0`
- Released `EntityHurtBeforeEventOptions` from `beta` to `v2.6.0`
- Released `EntityHurtBeforeEventSignal` from `beta` to `v2.6.0`
- Released `WorldBeforeEvents.entityHurt` from `beta` to `v2.6.0`
- Released `EntityHurtAfterEventOptions` from `beta` to `v2.6.0`
- Released change of `EntityHurtAfterEventSignal` to use `EntityHurtAfterEventOptions` from `beta` to `v2.6.0`
- Released `EntityItemPickupAfterEvent` from `beta` to `v2.6.0`
- Released `EntityItemPickupBeforeEvent` from `beta` to `v2.6.0`
- Released `EntityItemPickupEventOptions` from `beta` to `v2.6.0`
- Released `ItemFilter` from `beta` to `v2.6.0`
- Released `EntityItemPickupAfterEventSignal` from `beta` to `v2.6.0`
- Released `EntityItemPickupBeforeEventSignal` from `beta` to `v2.6.0`
- Released `WorldAfterEvents.entityItemPickup` from `beta` to `v2.6.0`
- Released `WorldBeforeEvents.entityItemPickup` from `beta` to `v2.6.0`
- Moving `world.getSeed` to `stable`
- Moving `query.get_level_seed_based_fraction` out from behind the `Upcoming Creator Features` toggle

### `@minecraft/server-net`

Added addional error types for HTTP requests:

- `HttpRequestBodyTooLargeError` - Request body exceeds configured limit
- `HttpRequestLimitExceededError` - Concurrent request limit reached
- `HttpRequestNotAllowedError` - Request targets a URI not in the allow list
- `HttpsOnlyError` - HTTPS required but non-HTTPS URI provided

## Blocks

- Blocks using the `minecraft:corner_and_cardinal_direction` value of `minecraft:placement_direction` now will correctly form inner corners when there are other stairs next to them ([MCPE-232019](https://bugs.mojang.com/browse/MCPE-232019))
- Fixed rotation issue for blocks in item frames that use `"minecraft:geometry.full_block"` for Json `"format_version" >= 1.26.0` ([MCPE-234715](https://bugs.mojang.com/browse/MCPE-234715))

## Commands

- Fixed an issue where the "/reload all" command would not reload packs outside of the development folders. ([MCPE-234722](https://bugs.mojang.com/browse/MCPE-234722))

## Components

- Replaced the "simulate_waves" field of the "minecraft:buoyant" component with the new "movement_type" field
  - The "movement_type" field accepts one of three values:
    - "waves", makes the entity move up and down based on its speed (default value)
    - "bobbing", makes the entity move up and down at a constant pace
    - "none", doesn't do anything
  - The "big_wave_probability" and "big_wave_speed" fields are only used when "movement_type" is set to "waves"
- Added a "can_auto_step_from_liquid" field to the "minecraft:buoyant" component
  - Defines whether the entity can move out of a liquid block to a neighboring solid block if pushed against it

## Dedicated Server

- Added HTTP configuration capabilities for the `@minecraft/server-net` scripting module on dedicated servers. Server operators can now configure HTTP request limits and restrictions via the `permissions.json` file. All of the configurable options are optional. If not specified, limits for the particular setting will not be enforced. Example config: `.\config\<module_id>\permissions.json`

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

- Added variant and layout section support for `IListPanePropertyItem` API
- Added `IStringPropertyItem` API will now support multiline string if `multilineHeight` optional property is defined
- Added `hasClearButton` optional API property to `IStringPropertyItemOptions` for modifying clear button visibility
- Added a feature to keep player data on export for any player that had previously played in that world.
- Added an option to creator options to enable or disable editor metrics collection. Those metrics can be viewed in the VSCode live diagnostics view.
- Added an option to the Bedrock Dedicated Server configuration to enable or disable editor metrics collection when running an Editor server
- Updated Selection Tool to displays toast notifications when Quick Actions (Fill, Delete) or Trim Actions (Trim Selection, Remove Air, Hollow) cannot be performed due to no selection or when they result in no changes
- Updated jigsaw tool to save registry when the editor is closed or tool is changed.
- Updated API type `ListPaneSlotLayout` to `ListPaneSlotConfiguration`, and updated `IListPanePropertyItemOptions` property `layout` to `slotConfig`
- Fixed bug that player cannot select any volumes using Enter key while in Line Tool
- Fixed bug that "New from Clipboard" button is inactive outside of Paste Preview tool
- Fixed a bug causing the tutorial dimmer to render misaligned relative to the viewport
- Fixed a bug where the flood tool would not close the modal dialog when block change limit was exceeded.
- Fixed a bug with the Apply Flood keybinding.
- Fixed changing between Crosshair and Tool modes to no longer cause world geometry to get re-created
- Improved performance of Editor in Vibrant Visuals mode by preventing extra deferred rendering call.

## Features

- Fixed feature loading to allow for sub-directories and any filename, will now only use identifier in JSON.

## General

Fixed an issue where 'minecraft://?addExternalServer' and other similar URIs might not work when containing URL-encodable characters. ([MCPE-232900](https://bugs.mojang.com/browse/MCPE-232900))

## Graphical

- The colored block lighting feature is no longer restricted to the Render Dragon Features for Creator Experiment
  - To enable this feature, PBR resource packs must include a local_lighting.json with `static_light` entries. Blocks that do not have a `static_light` and `light_color` specified via a provided resource pack will be treated as non-colored lighting and use the standard uniform light color.
  - See [Local Lights documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization?view=minecraft-bedrock-stable#local-lights) for more information
- Static colored lighting on flowing lava and other blocks no longer appears too dark in Vibrant Visuals.
- Adding `static_light` shading to data driven entities in Vibrant Visuals.
- Added `static_light` shading to more entities and items in Vibrant Visuals.
- Static colored lighting no longer leaks through corners in Vibrant Visuals.
- Adjusted the light attenuation of static colored block lighting to be less intense
- Fixed issue with z-fighting on the Brewing Stand and Stonecutter on PlayStation in certain lighting conditions.
- Custom blocks with ambient occlusion disabled do not have the occasional black vertex issue anymore
- Improve ambient occlusion for blocks using a custom geometry
- Items being quickly moved between inventory slots now have the back of their faces rendered too ([MCPE-229843](https://bugs.mojang.com/browse/MCPE-229843))
- Fixed issue that caused the spyglass full screen effect to brighten the scene in Vibrant Visuals.
- Fixed an issue that caused the End Portal to have invisible panels in Vibrant Visuals.
- Removed ESSL_300 shader language support

## Movement

- Fixed desync in player position when toggling input permissions ([MCPE-232109](https://bugs.mojang.com/browse/MCPE-232109))

## Music

- Fixed long running sounds such as jukebox music from playing in the menu when leaving a multiplayer world

## User Interface

- Fixed bug that made buttons at the top of the Marketplace screen difficult to select with controller

# Experimental Technical Updates

## Add-Ons and Script Engine

- Added experimental toggle "Voxel Shapes" which enables the use of voxel shapes on Vanilla and custom blocks
  - Voxel shapes are currently only used for occlusion/culling.
  - Currently, only unit cube Vanilla blocks have a voxel shape associated. With this experiment enabled, custom blocks with a voxel shape will only cull against Vanilla unit cube blocks or other custom blocks with a voxel shape.

## API

- Added minimum, maximum, or both bounds to several APIs.
- Fixed `EntityHurtBeforeEvent.cancel` to not allow some sources of knockback (sprint bonus, enchantment, mace smash, projectiles) when set to true
- API metadata now list any bounds, minimum value, or maximum value if applicable on interfaces and class methods and properties.
- Moved `localizationKey` property on `ItemType`, `EntityType`, `BlockType`, and `BlockPermutation` from beta to stable.

## Blocks

- Added `culling_shape` field to `minecraft:geometry` component behind the VoxelShapes toggle.
  - The value should be an identifier of a voxel shape and can refer to either a custom voxel shape file, `minecraft:unit_cube`, or `minecraft:empty`.
  - If the VoxelShapes experiment is enabled and a shape is not specified, `minecraft:empty` will be used by default if the block does not use `minecraft:geometry.full_block`.
- Blocks can handle the following entity events in scripting through the "onEntity" handler:
  - Custom named events:
    - "on_home" from "minecraft:behavior.go_home"
    - “on_escape” from "minecraft:behavior.avoid_block"
    - "on_reach" from "minecraft:behavior.move_to_block"
    - "on_place" from "minecraft:behavior.place_block"
    - "on_take" from "minecraft:behavior.take_block"
  - Unlike the current vanilla blocks that handle those events, custom blocks may receive those events up to one tick after they were emitted, depending on how late in the tick the event was emitted.

## Mobs

- Updated baby chicken textures, previously they were missing the texture underneath the wings
- Updated the bone hierarchy of Baby Mule and Baby Donkey to match the Baby Horse and Adult Horse hierarchy
- Renamed the bones of Baby Donkey and Baby Mule to match Baby Horse
- Updated the UVs for the rear legs of both Baby Donkey and Baby Mule
- The new Rabbit models and textures are now version sliced
  - Textures are prefixed with `rabbit_`
