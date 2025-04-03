---
title: Minecraft Beta & Preview - 1.21.80.25
date: 2025-04-03T14:14:58Z
updated: 2025-04-03T15:48:39Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/35553766599437-Minecraft-Beta-Preview-1-21-80-25
hash:
  h_01JQXZZDWMGQ2ZBXPQRX0KZY4D: experimental-features
  h_01JQXZZDWM6ZFHAJK1PGYPCMZC: game-drop-2-2025-experiments
  h_01JQXZZDWMPRE51CA66B54QCMR: blocks
  h_01JQXZZDWMH58VVXN1KHX84ZKY: dried-ghast
  h_01JQXZZDWM2PZEYHQHZXZ0TAC3: mobs
  h_01JQXZZDWM0Q35J5Y2YDP2EGF7: ghastling
  h_01JQXZZDWM7NVN43X306B5R54Q: happy-ghast
  h_01JQXZZDWMBRS53Y8ZJWNXZX3X: ghast
  h_01JQXZZDWM9J3KKGXKFJCQSJER: items
  h_01JQXZZDWMESFNB66K00KCDW01: harness
  h_01JQXZZDWMVZ7D25DJT0M4XRJN: commands
  h_01JQXZZDWMJ7B9GJBA0WVTSC98: vibrant-visuals
  h_01JQXZZDWM8RYBV63VF9TA7DSW: known-issues
  h_01JQXZZDWMB47P09JPKC0TRPA3: features-and-bug-fixes
  h_01JQXZZDWMBSXN766M3AD9BX3H: character-creator
  h_01JQXZZDWM220FJWE48H2DTCKA: blocks-1
  h_01JQXZZDWM23F64CNM0YW0XXW6: editor
  h_01JQXZZDWMPZ8QTAP605JR5GY0: gameplay
  h_01JQXZZDWM6HMNC481PS5QVHVP: general
  h_01JQXZZDWMEJZSHVVTNQAKTNVQ: mobs-1
  h_01JQXZZDWMNNNFSSY03WTWYK2V: music
  h_01JQXZZDWMVBQCE4VBE537XTWV: recipes
  h_01JQXZZDWMYPAAHMKJ6MC5E6X6: vanilla-parity
  h_01JQXZZDWM0525YJ1J885TS9Z9: items-1
  h_01JQXZZDWM39YW69NTP2NNK6ZT: technical-updates
  h_01JQXZZDWM8J907BJN712XMGHC: api
  h_01JQXZZDWMA9MC3MPV9PQMQ0PX: biomes
  h_01JQXZZDWM50HB75PH71K3X6E4: blocks-2
  h_01JQXZZDWNXKXKN651DMZNX1X6: components
  h_01JQXZZDWN1Y7Y3DRX2KCNJGFJ: editor-1
  h_01JQXZZDWNCHB0VWZEHE269BC3: entity-filters
  h_01JQXZZDWNEYSXQ1DD752KX9RW: graphical
  h_01JQXZZDWNXAZNFGTG40TRW5KQ: items-2
  h_01JQXZZDWNMZ8EFKW4JAWF024Q: molang
  h_01JQXZZDWNP7H0K66JZP3JT34R: technical-experimental-updates
  h_01JQXZZDWNFX82VD1XC85S39H8: api-1
  h_01JQXZZDWNP94FX1JNCCZJSWGM: minecraftserver-200-beta
  h_01JQXZZDWNDW6D10KCY72ZVMC8: mincraftserver-admin
  h_01JQXZZDWNBZP0NKCD7V7TW56H: blocks-3
  h_01JQXZZDWNT6GWF2A4HRSR2TDQ: cameras
  h_01JQXZZDWNQVEJZD020W4P2EB4: experiments
  h_01JQXZZDWN0K6HWNFV726WK4X3: graphical-1
  h_01JQXZZDWN3AHGEERKP1XXH054: items-3
---

**Posted:** 3 April 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Minecraft with Vibrant Visuals enabled. A happy ghast with a harness is hovering near a village with a nether portal. There is a dried ghast placed near the portal.](https://feedback.minecraft.net/hc/article_attachments/35553750005005)

Are you ready to take your first test flight on a happy ghast? This week's preview and beta just doesn't include the exciting features revealed at Minecraft LIVE – the happy ghast, ghastling, dried ghast and ghast harness, but it *also* includes the first testing version of Vibrant Visuals! Venture to the Nether to find your first dried ghast, raise it with love (and snowballs) and then soar through the skies atop your happy ghast! What's more, toggle our exciting visual refresh Vibrant Visuals on and you'll be able to see how water glitters and shadows move from way up high!

And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).

## Experimental Features

### Game Drop 2 2025 Experiments

- Enable the "Drop 2 2025" experimental toggle to test out these new features!

### Blocks

#### Dried Ghast

- Can be found in the Nether in Nether Fossil structures
- Can be crafted with 1 bone block and 8 ghast tears
- When waterlogged it undergoes 3 states over about 20 minutes until it spawns a Ghastling mob
- Makes sounds and shows particles depending on state
- If mined during the waterlogging, it will revert to its "dry" state regardless of what state it has reached during waterlogging
- Will revert states back to its initial "dry" state when it is taken away from being waterlogged, using the same time scale

### Mobs

#### Ghastling

Ghastling is a young version of the Happy Ghast mob.

- Spawns from a Dried Ghast block that has continuously been waterlogged for about 20 minutes.
- After spawning, the Ghastling will try and follow:

1.  Players within a 16-block radius *or*
2.  An adult, non-aquatic passive mob (and some neutral mobs) within a 16-block radius  
    If no player or suitable mob is close around the Ghastling will idle around within 32 blocks from its home position (where it spawned or last was interacted with).

- Can be tempted and fed using Snowballs
- Will grow up into a Happy Ghast after about 20 minutes (or faster if fed Snowballs)
- Can be summoned using the command: "/summon happy_ghast ~ ~ ~ ~ ~ minecraft:spawn_baby"

#### Happy Ghast

The Happy Ghast is a new flying mount that can carry up to four players.

- Spawns from a Ghastling after about 20 minutes (or faster if Ghastling is fed Snowballs)
- Can be equipped with a harness and then be mounted by up to 4 players
- Tempted by Snowballs and Harness. Harness tempting only works if the Happy Ghast is unharnessed
- Has no panic behavior when taking damage
- Cannot be bred
- Slowly regenerates health, with regeneration speeding up during rain, snow or when flying at the same height as clouds are rendered
- The first player that mounts the Happy Ghast will control it, sitting in front of the Happy Ghast, just above its face
- When a player mounts, the goggles on the Happy Ghast go down to cover its eyes, indicating that it now can be controlled
- Other players who mount after the pilot is mounted, are placed in slots on each side of the Happy Ghast, starting clockwise from the "pilot" player
- Pressing crouch button dismounts the player on top of the Happy Ghast
- If the Happy Ghast detects players on top of it, it then ceases all movement and aligns to the closest cardinal horizontal direction
- This happens regardless of it having a harness equipped or not
- 3rd person camera is moved back when player is mounted on the Happy Ghast
- When there are no players mounted or walking on the Happy Ghast, the goggles go up and the Happy Ghast starts to roam around the home position
- If players dismount midair, the Happy Ghast will descend towards the ground before it resumes roaming
- Cannot enter boats
- Idles around within 64 blocks from its home position (where it spawned or last was interacted with)
- If wearing a harness, the Happy Ghast idles closer to the home position (within 32 blocks).
- The Happy Ghast will try to stay close to blocks when roaming on its own
- **Known Issue:** The Happy Ghast's health is currently set to 40 when it should be 20. We will be addressing this as soon as possible!

#### Ghast

- Updated Ghast texture

### Items

#### Harness

Harness is a new item that can be equipped on a Happy Ghast to allow players to ride it.

- Crafted out of 3 leather, 2 glass blocks and 1 wool block, the harness will have the same color as the wool block used when crafting
- Can be re-dyed
- Can only be equipped on a Happy Ghast
- Allows up to 4 players to mount the Happy Ghast
- Can be removed from the Happy Ghast using Shears but only when no players are mounted

### Commands

- Added the Game Rule command locatorBar to enable or disable the Locator Bar feature

### Vibrant Visuals

This week in the Minecraft: Bedrock Beta and Preview update we're excited to share the first look at Vibrant Visuals. The features, lighting, effects, and assets are still in development, so expect things to change and improve over time as we continue to iterate. Read more about the update on the blog here: [minecraft.net/article/take-a-vibrant-test-flight](https://www.minecraft.net/article/take-a-vibrant-test-flight).

Supported devices for this Preview and Beta include Xbox Series X\|S, Xbox One, PlayStation 4, PlayStation 5, Android, iOS, and PC.

- Android: Adreno 640, Mali-G68, Mali-G77, or Xclipse 530 or higher
- iOS: A12 or M1 or higher
- PC: Running Minecraft on DX12

Our team is hard at work testing Vibrant Visuals on even more Minecraft: Bedrock Edition devices, and we hope to be able to update this list of supported devices in the future.

To use Vibrant Visuals in a World, you must enable the "Vibrant Visuals" toggle in the Experimental tab in the Create New World or Edit World screens. This will expose Vibrant Visuals as an option in the in-game Video settings Graphics Mode dropdown, which can then be selected alongside the other existing rendering modes.

Presets for choosing between "Favor Visuals" and "Favor Performance" are available in the Video Settings. Specific feature and visual settings can also be adjusted by expanding "Vibrant Visuals Options".

Splitscreen is not supported with Vibrant Visuals and the game will switch to Fancy or Simple rendering if multiple players are joined locally.

Marketplace Add-Ons, Skins, and Persona items will work with Vibrant Visuals, however, Worlds and Texture Packs are not compatible with the new mode at this time.

#### Known Issues

- Some visual corruptions may exist on certain Android devices, particularly with Mali GPUs
- Surfaces deeper than eight blocks underwater are dark
- Light may leak into underground areas or shadows may pop in and out, especially near cave entrances
- Textures may turn pink after suspend and resume, opening Settings, or exiting world
- Metallic surfaces might appear with some visual bugs in certain conditions
- Emissive surfaces might not glow or appear white in certain conditions

You can report any issues at [bugs.mojang.com](https://bugs.mojang.com/) and please send us your feedback at [aka.ms/mcvibrantvisualsfeedback](https://aka.ms/mcvibrantvisualsfeedback)

## Features and Bug Fixes

#### Character Creator

- Fixed an issue that caused the wrong sized player model to show when using custom skins ([MCPE-189739](https://bugs.mojang.com/browse/MCPE-189739))

### Blocks

- Flowers now have the same random offset range and values as Java

- Bamboo, Hanging Roots, Mangrove Propagule, and Nether Sprouts now have the same random offset range and values as Java Edition

- Coral Fans and Coral Plants now have the same random offset range and values as Java Edition

- Double tall plants, like sunflowers, now have the same random offset range and values as Java Edition

- Pointed Dripstone, Tall Grass, and Dry Grass now have the same random offset range and values as Java Edition

### Editor

- Editing fields for structures in the structure panel allows saving while a field is being edited

### Gameplay

- Fixed a bug that a player can sprint in water faster than swimming

### General

- Enable *Filter Profanity* toggle on Playstation platforms.

### Mobs

- Farmer villagers no longer occasionally get stuck when collecting grown crops ([MCPE-166344](https://bugs.mojang.com/browse/MCPE-166344))

### Music

- Fixed credits music not playing if entering credits from the settings menu while game is paused. ([MCPE-190625](https://bugs.mojang.com/browse/MCPE-190625))

### Recipes

- Fixed a bug where players could still craft unknown recipes when dolimitedcrafting gamerule was on ([MCPE-186699](https://bugs.mojang.com/browse/MCPE-186699))

### Vanilla Parity

#### Items

- Shields now take durability damage from explosions ([MCPE-121484](https://bugs.mojang.com/browse/MCPE-121484))

## Technical Updates

### API

- Moved enum Difficulty from beta to v1.19.0

- World

  - Move getDifficulty(): Difficulty from beta to v1.19.0

  - Move setDifficulty(difficulty: Difficulty): void from beta to v1.19.0

- Moved the following Player methods from beta to v1.19.0

- Renamed BoundingBox to BlockBoundingBox and released from beta to v1.19.0.

- Renamed BoundingBoxUtils to BlockBoundingBoxUtils.

- Moved dimension.placeFeature and dimension.placeFeatureRule from beta to v1.19.0

### Biomes

- Removed remainder of support for unused "minecraft:consolidated_features" and "minecraft:legacy_world_generation_rules" JSON components

### Blocks

- New render_method type available for minecraft:material_instances. They are meant to support the same behavior of block turning opaque in the far rendering like Leaves in contrast to other disappearing like Bamboo Stalk.

  - "render_method": "blend_to_opaque"
  - "render_method": "alpha_test_to_opaque"
  - "render_method": "alpha_test_single_sided_to_opaque"

- The field "tint_method" in the "minecraft:map_color" component no longer requires the "upcoming creator features" toggle

- The field "tint_method" in the "minecraft:destruction_particles" component no longer requires the "upcoming creator features" toggle

- The field "tint_method" in the "minecraft:material_instances" component no longer requires the "upcoming creator features" toggle

### Components

- Fixed a bug where incorrect Json errors would appear for valid item texture references

- Introduced a "drop_item_y_offset" parameter to the "minecraft:interact" component

  - Defines a custom y-axis offset for when an item is dropped
  - Requires "drop_item_slot" to be specified

- The "minecraft:leashable" component's "on_unleash" trigger triggers on the leash breaking with format version 1.21.80 and later

  - The old behavior is still available to opt in to by setting "on_unleash_interact_only" to true

### Editor

- Added unbound keybindings for Trim and Remove Air from Selection

- Fixed an issue with Freehand select near or outside of dimension bounds that could cause selection to become unusable

- Fixed issues with selection volumes being able to translate or resize past world bounds. This also fixes using large brush shapes with freehand selection (and magic select) close to a world boundary

- Fixed a bug that caused Extrude Axis options to be incorrect for Pyramid brush shape

- Fixed an issue related to files and folders being permanently deleted when deleting structures in the structure panel

### Entity Filters

- Added new entity filter "has_equipment_tag", works like "has_equipment" but takes an item tag instead of an item name

### Graphical

- Added support for multiple locators for use with leashes for rendering multiple ropes between two entities.
  - "multi_lead_n":
    - where n = {1, 2, 3, 4} defines locators when the entity is leashed to a different entity.
    - Used if and only if it has a corresponding "multi_lead_hold_n" and the number n is equal on the two entites.
  - "multi_lead_hold_n"
    - Where n = {1, 2, 3, 4} defines locators where the entity is leashing a different entity.
    - Used if and only if it has a corresponding "multi_lead_n" and the number n is equal on the two entites.
  - "lead"
    - is set to origin if it is not defined in the geo.
  - "lead_hold"
    - is set to origin if it is not defined in the geo.

### Items

- Bundles' open icons are now specified via IconItemComponent. This addresses the issue where a missing texture would appear for an opened custom Bundle. Bundle icon paths have also now be separated into unique keys in item_texture.json.

### Molang

- Added 'query.has_any_leashed_entity_of_type' which takes a list of entity identities and checks if the actor has any of the listed entities leashed. Available on both the client and the server.
  - Usage: "query.has_any_leashed_entity_of_type( 'minecraft:sheep', 'minecraft:creeper' )"

## Technical Experimental Updates

### API

#### @minecraft/server 2.0.0-beta

- Added CustomCommandOrigin to custom command script callback.
- Added CustomCommandSource enum.
- Renamed CustomCommandPermissionLevel to CommandPermissionLevel.
- Renamed CustomCommandParamType.Position to CustomCommandParamType.Location
- BlockCustomComponent now take an optional CustomComponentParameters object for Custom Components V2 experiment as a second argument to event callbacks in 2.0.0-beta
- CustomComponentParameters added to 2.0.0-beta
  - params property added to CustomComponentparameters to 2.0.0-beta
- ItemCustomComponent now take an optional CustomComponentParameters object for Custom Components V2 experiment as a second argument to event callbacks in 2.0.0-beta
- EntityFrictionModifierComponent has been changed to read-only in version 2.0.0-beta

#### @mincraft/server-admin

- Added AsyncPlayerJoinBeforeEvent
  - Added beforeEvents.asyncPlayerJoin, AsyncPlayerJoinBeforeEvent, and AsyncPlayerJoinBeforeEventSignal to allow creators to delay players joining the world.
  - AsyncPlayerJoinBeforeEventSignal.subscribe is different than other events because the callback it accepts returns a promise. Once the promise is resolved, the player will join the world, or if the promise is rejected the player will be disconnected without joining the server. The player will be at the loading screen while the promise is pending.

### Blocks

- When Custom Components V2 experiment is enabled, minecraft:custom_components component is deprecated in 1.21.80 and higher format versions
- When Custom Components V2 experiment is enabled, custom components are flattened inline with other components and allow parameters in 1.21.80 and higher format versions. Example:

<!-- -->

    "components": {
        "example_namespace:example_component": {
            "someParam": 3,
            "anotherParam": "test"
        }
    }

### Cameras

- Changed approach for the easing between moving targets under the Experimental Creator Camera Features toggle

### Experiments

- Added Custom Components V2 experiment

### Graphical

- Added a new lighting model for clouds in the Deferred Technical Preview. The lighting parameters can not be configured at this time.

- Increased the range of cloud rendering in the Deferred Technical Preview.

- Added pixelated reflections to the Deferred Technical Preview. This new effect will cause reflections to align to the texel grid of textures in the world.

- Added pixelated shadows to the Deferred Technical Preview.  
  This new effect can be controlled with the new shadows JSON schema, "shadows/global.json". This file adds new settings that control the style of shadows in the game. Available parameters are "shadow_stlye", which can be "soft_shadows" or "blocky_shadows", and "texel_size". "soft_shadows" are the default style, while "blocky_shadows" results in shadows that are pixelated in appearance. When "blocky_shadows" are enabled, "texel_size" controls the size of the pixelation effect. "texel_size" should be equivalent to the block texture size in order to achieve a one to one mapping between the pixels in a texture and the pixelated effect created by enabling "blocky_shadows", but this is not required. An example version of what "shadows/global.json" could look like is as follows:

<!-- -->

    {
      "format_version": "1.21.80",
      "minecraft:shadow_settings": {
        "shadow_style": "blocky_shadows",
        "texel_size": 16
      }
    }

### Items

- When Custom Components V2 experiment is enabled, minecraft:custom_components component is deprecated in 1.21.80 and higher format versions
- When Custom Components V2 experiment is enabled, custom components are flattened inline with other components and allow parameters in 1.21.80 and higher format versions. Example:

<!-- -->

    "components": {
        "example_namespace:example_component": {
            "someParam": 3,
            "anotherParam": "test"
        }
    }
