---
title: Minecraft Beta & Preview - 1.21.40.22
date: 2024-09-18T13:35:17Z
updated: 2024-09-18T13:47:03Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30356048742413-Minecraft-Beta-Preview-1-21-40-22
---

**Posted:** 18th September 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta ](https://aka.ms/JoinMCBeta)for detailed instructions

![p21U4_3_opt2.jpg](https://feedback.minecraft.net/hc/article_attachments/30356044598541)

It's time for a new Minecraft Preview and Beta! You'll be excited to know that bundles can now be dyed; enable the bundles experiment to test this out!  We’d love your feedback as always, so please let us know what you think at <https://aka.ms/mcbundlesfeedback>, and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

# Experimental Features

## Items

- The Bundle can now be dyed 16 different colors using Dyes

# Features and Bug Fixes

## Android

- Fixed double input when using analog triggers on certain gamepads ([MCPE-175113](https://bugs.mojang.com/browse/MCPE-175113))

## Gameplay

- Players getting killed by the Mace's Smash Attack now get the correct death message ([MCPE-185952](https://bugs.mojang.com/browse/MCPE-185952))
- Fixed an issue that could prevent the player from respawning correctly ([MCPE-186324](https://bugs.mojang.com/browse/MCPE-186324))
- TNT explosions no longer reset momentum of other falling Primed TNTs. This should fix any issues that were occurring with TNT cannons ([MCPE-181055](https://bugs.mojang.com/browse/MCPE-181055))

## Mob

- The Breeze can no longer jump away from a player if it is on top of a Honey Block ([MCPE-176991](https://bugs.mojang.com/browse/MCPE-176991))
- Zombified Piglins spawned by a Nether Portal now have 15-second cooldown before it can use the Portal

## Mobs

- Jump Boost now increases how high a Breeze can jump ([MCPE-176922](https://bugs.mojang.com/browse/MCPE-176922))
- Fixed issue with Minecarts stopping unexpectedly and then only being pushable in one direction ([MCPE-185643](https://bugs.mojang.com/browse/MCPE-185643))
- Updated the rules under which Bats spawn in the world:
  - Bats can now spawn at any height, provided the area is covered and sufficiently dark
  - Bats must spawn on one of the following blocks: Stone, Granite, Diorite, Andesite, Tuff, or Deepslate
  - As a result, Bats may now happen to spawn above the surface

## Realms

- Added a new Realm Event. Can you find out what it is?

## User Interface

- Single-tap to destroy now works with joystick/crosshair controls in Creative mode, without causing blocks to glitch ([MCPE-181789](https://bugs.mojang.com/browse/MCPE-181789))
- Fixed a bug where Realms invite links could overflow past their text boxes
- Items no longer get stuck in crafting grid after dropping an identical item from the recipe screen ([MCPE-73593](https://bugs.mojang.com/browse/MCPE-73593))
- Fixed an issue where the new Bed screen wouldn't be narrated fully in certain scenarios (Preview only)
- Fixed a bug where the experimental Bed screen was missing an overlay when screen animations were disabled (Preview only) ([MCPE-184090](https://bugs.mojang.com/browse/MCPE-184090))
- Take From Bundle functionality now takes precedence over Clear Hotbar when an item in a Bundle is selected using gamepad ([MCPE-186359](https://bugs.mojang.com/browse/MCPE-186359))
- Inventory screen no longer shows item categories in tooltips unless the recipe book search screen is actually visible ([MCPE-128464](https://bugs.mojang.com/browse/MCPE-128464))
- When using the Swap Jump and Sneak option with touch controls, sneak button no longer flickers when you press close to it ([MCPE-159557](https://bugs.mojang.com/browse/MCPE-159557))

## Vanilla Parity

- Identical Lodestone Compass items now stack up to 64, matching Java Edition ([MCPE-109595](https://bugs.mojang.com/browse/MCPE-109595))

# Technical Updates

## API

- Fixed some cases when the `entityRemove` World event would sometimes not be triggered
- Moved `getRedstonePower` from `beta` to `1.15.0`

## Blocks

- Updated the Jigsaw Block
  - Fixed a bug where block data would not be saved when pressing "Done" ([MCPE-181405](https://bugs.mojang.com/browse/MCPE-181405))
  - Updated the Jigsaw Block UI
  - Added Selection Priority and Placement Priority fields

## Camera

- The `minecraft:follow_orbit` preset is no longer behind the experimental toggle

## Components

- Moved the "minecraft:redstone_conductivity" component out of the Upcoming Creator Features experiment for format_versions 1.21.30 and above

## Entity Components

- The "behavior.jump_around_target" can no longer be used by an Entity on top of a Honey Block ([MCPE-176991](https://bugs.mojang.com/browse/MCPE-176991))
- Jump Boost now increases how high an Entity can jump when using "behavior.jump_around_target" ([MCPE-176922](https://bugs.mojang.com/browse/MCPE-176922))
- Wind Charges now use the `minecraft:explode` component instead of `minecraft:wind_burst`.
- Expanded `minecraft:explode` with the following new fields:
  - `damage_scaling`: A scale factor applied to the explosion's damage to entities. A value of 0 prevents the explosion from dealing any damage. Negative values cause the explosion to heal entities instead
  - `toggles_blocks`: If true, the explosion will toggle blocks in the explosion radius
  - `knockback_scaling`: A scale factor applied to the knockback force caused by the explosion
  - `particle_effect`: The name of the particle effect to use. The accepted strings are `wind_burst` or `breeze_wind_burst`. All other inputs will use the default explosion particles
  - `sound_effect`: The name of the sound effect played when the explosion triggers
  - `negates_fall_damage`: Defines whether the explosion should apply fall damage negation to Players above the point of collision
  - `allow_underwater`: If true, the explosion will affect blocks and entities underwater

## Graphical

- Starting with base game version 1.21.40, built-in biomes_client.json files will no longer be loaded. That file from other packs will continue to be loaded. Water and fog settings are now in individual client_biome.json files in resource packs. When both biomes_client.json and the individual client_biome.json file specify competing values, the loaded biomes_client.json from creator content will have priority

## Blocks

- Fixed a bug where old block IDs were incorrectly overwriting data of new block IDs from blocks.json format_version 1.21.20 or higher ([MCPE-186255](https://bugs.mojang.com/browse/MCPE-186255))
- Updated references to old block names in behavior pack color recipe files
- Updated references to old block names in behavior pack feature files
- Updated references to old block names in biome definition files

# Technical Experimental Updates

## Add-Ons and Script Engine

- Add support for custom items with the "minecraft:block_placer" item component to use the referenced "block" as the icon for the item
  - If the "minecraft:icon" component is specified, it will override the "block" icon
  - Requires the "Upcoming Creator Features" toggle. Must use item json version `1.21.40` or higher

## API

- Moved `PlayerInteractWithBlockBeforeEvent` and `PlayerInteractWithBlockAfterEvent` from `beta` to `1.15.0`
- Moved `PlayerInteractWithEntityBeforeEvent` and `PlayerInteractWithEntityAfterEvent` from `beta` to `1.15.0`
- Added enum `PlatformType` export enum PlatformType { Console = 'Console', Desktop = 'Desktop', Mobile = 'Mobile', } Class `ScriptClientSystemInfo`
  - Added field `platformType`
  - Added field `maxRenderDistance`

## Camera

- Added camera relative movement to the "New Third Person Presets" experimental toggle
  - Camera relative movement is enabled on any camera that inherits from `minecraft:follow_orbit` and sets `align_camera_and_target_forward` to `false`

## Graphical

- Updated some JSON schemas for Deferred Technical Preview resource packs. Creators must update their packs to the new format. Documentation on the Creator Learning Portal will be updated accordingly
  - Split up the contents of `lighting/global.json` into 3 files: `lighting/global.json`, `point_lights/global.json` and `pbr/global.json`. They contain directional lights + emissive desaturation, point light colors and MERS fallbacks respectively
  - The schema for `lighting/global.json` is now wrapped in a new `"minecraft:lighting_settings"` object and also requires a `"description"` object with an `"identifier"` string to act as a unique name for your settings. The `"format_version"` field has also been modified to require a string as opposed to an array of integers, and must use a version of `"1.21.40"`
  - The filepath for atmospheric scattering files has been relocated to `atmospherics/atmospherics.json`
  - The schema for `atmospherics/atmospherics.json` is now wrapped in a new `"minecraft:atmosphere_settings"` object and also requires a `"description"` object with an `"identifier"` string to act as a unique name for your settings. It also requires a `"format_version"` string, which must be a version of `"1.21.40"`
  - The schema for `color_grading/color_grading.json` now requires a `"format_version"` string, which must be a version of `"1.21.40"`
  - The schema for `water/water.json` now requires a `"format_version"` string, which must be a version of `"1.21.40"`

``` json
"lighting/global.json"
{
    "minecraft:lighting_settings": {
        "format_version": "1.21.40",
        "description": {
            "identifier": string
        },
        "directional_lights": {
            "sun": {
                "illuminance": float,
                "color": RGB color
            },
            "moon": {
                "illuminance": float,
                "color": RGB color
            },
            "orbital_offset_degrees": float
        },
        "emissive": {
            "desaturation": float
        }
    }
}
"point_lights/global.json"
{
    "minecraft:point_light_settings": {
        "format_version": "1.21.40",
        "colors": {
            "minecraft:block_name": RGB color,
            ...
        }
    }
}
"pbr/global.json"
{
    "minecraft:pbr_fallback_settings": {
        "format_version": "1.21.40",
        "blocks": {
            "global_metalness_emissive_roughness_subsurface": RGBA color
        },
        "actors": {
            "global_metalness_emissive_roughness_subsurface": RGBA color
        },
        "particles": {
            "global_metalness_emissive_roughness_subsurface": RGBA color
        },
        "items": {
            "global_metalness_emissive_roughness_subsurface": RGBA color
        }
    }
}
"atmospherics/atmospherics.json"
{
    "minecraft:atmosphere_settings": {
        "format_version": "1.21.40",
        "description": {
            "identifier": string
        },
        ...
    }
}
"color_grading/color_grading.json"
{
    "minecraft:color_grading_settings": {
        "format_version": "1.21.40",
        "description": {
            "identifier": string
        },
        ...
    }
}
"water/water.json"
{
    "minecraft:water_settings": {
        "format_version": "1.21.40",
        "description": {
            "identifier": string
        },
        ...
    }
}
```

## Molang

Added `query.client_max_render_distance`. It returns the max render distance in chunks of the current client. Available on the Client (Resource Packs) only
