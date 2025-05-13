---
title: Minecraft Beta & Preview - 1.21.90.25
date: 2025-05-13T12:56:55Z
updated: 2025-05-13T13:11:05Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36568454460173-Minecraft-Beta-Preview-1-21-90-25
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-saddles-updates: saddles-updates
  user-content-crafting-saddles: crafting-saddles
  user-content-loot-table-changes: loot-table-changes
  user-content-removing-saddles-and-equipment: removing-saddles-and-equipment
  user-content-music: music
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-items: items
  user-content-leashing-updates: leashing-updates
  user-content-mobs: mobs
  user-content-sound: sound
  user-content-stability-and-performance: stability-and-performance
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-block-components: block-components
  h_01JV4VFPWNND8HWBQTRQ4V7350: blocks-1
  user-content-camera: camera
  user-content-commands: commands
  user-content-components: components
  user-content-editor: editor
  user-content-entity-filters: entity-filters
  h_01JV4VFPWPGR1766ZNCSV1SF3P: gameplay-1
  h_01JV4VFPWP772QZVNA16FHC69Z: graphical-1
  h_01JV4VFPWP6DTGCK61WQN7VKMG: items-1
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JV4VFPWPGJH6AAYP9QE97Z8Q: api-1
  user-content-%60%40minecraft%2Fdiagnostics%60: ""
  h_01JV4VFPWPGN0Y5F9BDJ9BCJDX: editor-1
  user-content-experimental: experimental
  h_01JV4VFPWPNKJ572XZKFP9VVCX: gameplay-2
---

**Posted:** 13 May 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)

![Efe is holding shears, ready to use them on some animals that are wearing saddles. ](https://feedback.minecraft.net/hc/article_attachments/36568467227917)

Test more features from our second drop of 2025 in Bedrock! Travel smoothly with craftable saddles and six new tracks – one of which you can only find on a music disc dropped by a ghast! Yes, the sad, fiery one. Try these features out today!

**Important Notice:** The Beta will not be available on Android this week due to a recently discovered bug. However, the new features will be available for testing at a later date. Thank you for your patience!

# Features and Bug Fixes

## Saddles Updates

- We are making Saddles craftable and generally making it easier to remove them from mobs by using Shears. We have also added Leather to some loot tables instead of Saddles.

### Crafting Saddles

- Saddles can now be crafted with 3 Leather and 1 Iron Ingot
- Recipe popup happens when a player picks up their first Leather

### Loot Table Changes

Some loot tables have had Saddles removed from them and replaced with 1-5 Leather:

- Monster Room chests
- Ancient City chests
- Desert Pyramid chests
- Jungle Pyramid chests
- Stronghold altar chests

### Removing Saddles and Equipment

- Saddles, Horse Armor, harnesses and Carpets can now be removed from the mobs they can be equipped on by using Shears
- Saddles, Horse Armor, Harnesses, and Carpets cannot be removed by using Shears while the mob has a rider
- Saddles, Horse Armor, Harnesses, and Carpets cannot be removed by using Shears while the player is sneaking
- Saddles cannot be removed from Ravagers using Shears
- Dispensers with Shears cannot remove Saddles, Horse Armor, Harnesses or Carpets equipped on mobs

## Music

- Added the following new music tracks by Amos Roddy to Cherry Groves, Forest, Desert, Grove, and Lush Cave Biomes:
  - Below and Above
  - Broken Clocks
  - Fireflies
  - Lilypad
  - O's Piano
- Added a new Music Disc with the track "Tears" by Amos Roddy
- The Ghast now drops the "Tears" Music Disc when killed by a Fireball deflected by a Player

## Blocks

- Fixed Sculk Vein block looking small and elongated when held or in an item frame
- Dried Ghast Block will now block flowing water instead of popping

## Gameplay

- Repositioned the teleporting point when using an End Gateway to not be too close to a cliff edge, if possible ([MCPE-174465](https://bugs.mojang.com/browse/MCPE-174465))

## Graphical

- Fixed locators for leashing mobs being offset ([MCPE-217604](https://bugs.mojang.com/browse/MCPE-217604))
- Changed shadows in Vibrant Visuals so that they cast further at sunrise and sunset. Prior to this change, shadows were clamped at a 30 degree angle relative to the horizon. This clamp has now been reduced to 10 degrees. This also improves an issue where specular highlights, light rays and volumetric fog were not properly occluded when the sun or moon was behind a mountain at a low angle.
- Added temperature grading settings to the color grading json files for Vibrant Visuals. Schemas must specify a format version of `1.21.90` to access this new setting.
  - New `temperature` object added to `color_grading`
  - `enabled` set to `true` or `false` controls if temperature grading is enabled
  - `type` set to either `white_balance` or `color_temperature` controls the type of grading applied
    - `white_balance` uses the temperature value to adjust the camera's white point. Lower temperature values will cause the scene to appear more blue.
    - `color_temperature` is the inverse of the white balance operation. Lower temperature values will cause the scene to appear more red.
  - `temperature` sets the temperature in kelvin
  - Example:
    ``` hljs
    ...
    "color_grading": {
        "temperature": {
            "enabled": true,
            "type": "color_temperature",
            "temperature": 6500.0
        }
    }
    ...
    ```
- Fixed water not being rendered on the opposite side of clouds in Vibrant Visuals ([MCPE-203239](https://bugs.mojang.com/browse/MCPE-203239))

## Items

- Now the Mooshroom Spawn Egg uses its own colors and no longer has two pixels that are the same as the Cow Spawn Egg texture

- Spore Blossoms destroyed by water are now dropped as items ([MCPE-127677](https://bugs.mojang.com/browse/MCPE-127677))

## Leashing Updates

- Attaching a leashed entity to another entity and using Shears to cut leashes now take precedence over other interactions
  - Example: Attempting to shear a leashed Sheep will now un-leash it instead of shearing it
- Leash break distance is now calculated between the centers of the two entities' collision boxes, aligning with the rest of the leash physics calculations

## Mobs

- Now the Cold Cow variant has the correct mirroring of its horn texture
- Happy Ghast no longer spins rapidly when leashed to a fence with a Lead ([MCPE-216786](https://bugs.mojang.com/browse/MCPE-216786))
- Flying mobs no longer make footstep sounds when moving close to the ground
- Happy Ghasts will now correctly detect players on a different mount on top of them
- Happy Ghast detection of players now extend 1 block outwards from themselves in x,z direction and 2 blocks above them

## Sound

- Updated Dried Ghast block sounds for step, place and fall from wood-sounds to custom sounds. Changed the ambient and break sound to sound less alive. Removed the hit-sound and sound event for that since it breaks immediately.
- Sound files for breaking and placing Grass blocks are now slightly louder

## Stability and Performance

- Fix a crash in split-screen mode when a player would destroy a chest or book an other player had open
- Fixed an issue where a resource pack error could be encountered when transfering between servers that use different versions of the same resource pack
- Fixed an issue where downloading server resources would infinitely hang if another device requested to download the same resources at the same time

## User Interface

- The "Game is paused" text from the pause screen will no longer go out of bounds. ([MCPE-217394](https://bugs.mojang.com/browse/MCPE-217394))
- Hotbar tooltip text now has a drop shadow, to make the text more readable against bright backgrounds ([MCPE-217870](https://bugs.mojang.com/browse/MCPE-217870))
- Fixed the issue where adjusting the brightness in the Vibrant Visuals setting caused the Creeper face icons to inaccurately reflect their expected shades, and where the brightness of the Creeper face icons were affected by the in-game environment. ([MCPE-199256](https://bugs.mojang.com/browse/MCPE-199256))
- The Text Background Opacity accessibility setting now defaults to 60% opacity
- The vertical angle upon which the Locator Bar arrow icons become visible now corresponds to the player's FOV setting

## Vanilla Parity

- Fix blocks in Minecarts not being lit properly
- Nether Fossils have been tweaked to have a placement frequency more closely aligned with Java ([MCPE-74632](https://bugs.mojang.com/browse/MCPE-74632))

# Technical Updates

## API

- Added a new condition `damaged_by_entity` that allows checking which entity type applied damage to an entity that is dropping loot.
  - Similar to the `killed_by_entity` and `entity_killed` conditions, allows specifying an `entity_type` field to check against when deciding which entry in a loot table to select.

## Block Components

- UV locking will not be supported for geometry using Box UVs if the box sides are not equal, in other words the box has non square UVs. Geometry with per-face UVs and non square faces will be supported.
- UV locking will not be supported if Block Json `format_version` is less than **1.19.80**.

## Blocks

- Fixing a crash that could occur when a block's textures are configured to point to an empty atlas entry
- testforblock ignores block states (JIRA ([MCPE-194284](https://bugs.mojang.com/browse/MCPE-194284))
  - Fixing bug introduced in 1.21.70 where the testforblock command no longer recognizes block states (E.g. \["button_pressed_bit" = true\] would always return true regardless of button state)
- "culling_layer" field in the block's geometry component has been moved out of experimental
- "condition" field in "rules" for culling has been moved out of experimental

## Camera

- Unlocked over the shoulder is now unlocked by using the camera_relative control scheme with the follow_orbit preset

## Commands

- Attempting to run extremely long commands will no longer cause a disconnection error. Instead the command will simply fail. ([MCPE-177722](https://bugs.mojang.com/browse/MCPE-177722))

## Components

- Content warnings will log missing block and biome references in Biome JSON
- Fixed incorrect content warnings for missing block textures in "minecraft:material_instances" component.
- The "minecraft:interact" component's "spawn_items" field now has a "y_offset" subfield, which allows to adjust the vertical spawn position of items

## Editor

- Added various tooltips to the Editor menu items.
- Added `IPropertyPane.addProxyPane` API function to display an existing sub pane within another pane
- Updated Editor to no longer no longer default projects to vibrant visuals graphics mode. It can be toggled on from Deferred Rendering Settings
- Updated Paste Preview keyboard shortcuts
  - Past Preview is now initiated using CTRL+V global key sequence
  - CTRL+V in paste preview mode places the current previewed clipboard selection into the world
  - SHIFT+CTRL+V will immediately paste the clipboard selection into the world, previously global CTRL+V key sequence
- Fixed a bug where FlattenBrush, BrushPainter, SmoothRoughen and SelectionModeFreehand tools threw an assert when a painting action was in progress
- Fixed a bug where the Tutorial Movement stage didn't wait for pan and look actions to complete
- Fixed a bug that caused brush paint to not end when the Tutorial stage changes
- Fixed a bug that caused Contiguous Selection Settings in Extrude tool pane to not show

## Entity Filters

- Added the new is_riding_self (entity filter
  - Returns true if the subject entity is riding the calling entity on which the filter is used

## Gameplay

- Fixed issue with the player_relative control scheme that made it really hard to travel directly forward or directly backwards
- Fixed an issue where the player's head would sometimes jitter when using certain control schemes

## Graphical

- Particles rendered without the "minecraft:particle_appareance_lighting" component are now renderered as expected in Vibrant Visuals
- Removed ';' debug feature for toggling graphics modes

## Items

- Extended "minecraft:wearable" item component to allow hiding Players' locations, similar to Mob Heads and the Carved Pumpkin
  - The new "hides_player_location" boolean field defines whether Players are hidden on the Locator Bar and Locator Maps when eqipped in the appropriate wearable slot, defined by the "slot" field
  - The default value of "hides_player_location" is false
  - All "minecraft:wearable" item components defined previously will have the value of "hides_player_location" default to false

# Experimental Technical Updates

## API

### `@minecraft/diagnostics`

- Updated `SentryOptions` properties:
  - `dsn`: Updated to allow the usage of `SecretString`, allowing for secrets from `@minecraft/server-admin` to be used to initialize Sentry.
  - (new) `maxBreadcrumbs`: The maximum number of breadcrumbs to store and report per error event to Sentry. Default is 20, supported values range from 0 (no breadcrumbs) to 100.
  - (new) `sampleRate`: A number between 0 and 1 that indicates the percentage of events that should be sent to Sentry. For example, a value of 0.5 means that 50% of events will be sent. Default is 1 (100% of events). 0 means no events will be sent.
  - (new) `debug`: When set to true, additional content logging from the Sentry system will be enabled. Defaults to false.

## Editor

- Clipboard origin incorrectly shows fractional origin values when clipboard item has even sizes
- Remove the Marquee Selection info panel when in freehand/magic select mode
- Disable Point Lights in Vibrant Visuals settings when Deferred Technical Preview is disabled
- Added Numeric & Color Timeline graphs to Vibrant Visuals Settings
- Added support for localized help and tool tips into the schema
- Fixed a bug with structure data validation so that it doesn't try to test all the sibling rules against the property it's looking for (this was resulting in lots of reported errors in the water properties, but they weren't actually errors)

## Experimental

- Deprecated `align_target_and_camera_forward`. Use `control_scheme` to switch between control schemes instead.

## Gameplay

- Fixed the camera_relative_strafe control scheme
