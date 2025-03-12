---
title: Minecraft Beta & Preview - 1.21.80.20
date: 2025-03-10T11:29:17Z
updated: 2025-03-12T17:46:14Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34870603664909-Minecraft-Beta-Preview-1-21-80-20
hash:
  h_01JP2XB35DP49Q99H197XE8CB9: experimental-features
  h_01JP2XB35DKX4V7N0J964SQWHG: locator-bar
  h_01JP2XB35DW8EN2V4VAGSXNTG8: known-issues
  h_01JP2XB35D1BRRY603Y8WN7EEF: features-and-bug-fixes
  h_01JP2XB35D64A0W7HMN674NH1Y: blocks
  h_01JP2XB35D4QKNEFNKB250F3KA: gameplay
  h_01JP2XB35D8CMJFE0K82PE51RF: items
  h_01JP2XB35D59H40BE89J6K05XS: mobs
  h_01JP2XB35DEZPTXTDF07JBVZXD: sound
  h_01JP2XB35DBRS8HYG2QHYG5R8X: stability-and-performance
  h_01JP2XB35E657P23WBZP4KJRRY: user-interface
  h_01JP2XB35EEBAS400SD0C6B155: vanilla-parity
  h_01JP2XB35EM2YH18C3X0XVR9YV: general
  h_01JP2XB35EYCFJJ80AMX51Q36T: items-1
  h_01JP2XB35ESZ2HJ0WZDV10RM12: mobs-1
  h_01JP2XB35EWE6JT4H7R4H7WQV3: structures
  h_01JP2XB35E31QVFGSHYZ41D8YV: woodland-mansion
  h_01JP2XB35E6S752H5D9PC36AJD: technical-updates
  h_01JP2XB35EAGREBAPTJMM8Z39G: api
  h_01JP2XB35ERX1NTQ1S1EEHWMFZ: molang
  h_01JP2XB35EYRXB6H90CN7XHR2Q: biomes
  h_01JP2XB35EVF0N1P403QY87AX3: bug
  h_01JP2XB35E0RGJGA97FKBDC7V7: components
  h_01JP2XB35EDA3F4CH0N4GMDYJ6: editor
  h_01JP2XB35FVBS21YWCGNZNVWRH: general-1
  h_01JP2XB35FYV95XZDEK9E4YBKR: goals
  h_01JP2XB35FJEY9C84QBVQNEPR3: marketplace
  h_01JP2XB35FWE5E1CWRQ3CYQJQW: network-protocol
  h_01JP2XB35FXJD1FSSR3SJ31A3H: structures-1
  h_01JP2XB35FG46Z9QEQ11CWSG70: technical-experimental-updates
  h_01JP2XB35FRB4QDGYCQ3FPSSJS: api-1
  h_01JP2XB35FTK48CNJE7KZYEEM8: minecraftserver-200-beta
  h_01JP2XB35FE2KYP9EHZWD8QXXR: minecraftserver-ui-200-beta
  h_01JP2XB35FT860SJFNXQ99TS4Z: graphical
  h_01JP2XB35FJPR1M4T9VWYVPB9N: technical-experimental
---

**Posted:** 11 March 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![Players in a cherry blossom biome, showing up on the new locator bar feature](https://feedback.minecraft.net/hc/article_attachments/34919849738765)

Now that all of the features for the first game drop of 2025 are in testing, we thought we'd get started on our next game drop, starting with… the Player Locator bar! If your friends are always wandering off in multiplayer, this new bar will help you track them down! This bar replaces the XP bar in multiplayer mode and indicates other players' location using colorful icons. If you're a stealth player who likes to surprise your friends, then you can stay off your friends' radars by sneaking, disguising yourself, or by drinking a potion of Invisibility. Test the locator bar now in Bedrock Preview and Beta, and don't forget to send in your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/)! You can also report any bugs at [bugs.mojang.com](https://bugs.mojang.com/). The Player Locator bar is coming to Java snapshot soon.

## Experimental Features

### Locator Bar

The Locator Bar is a new UI element on the Player HUD that displays the direction of other Players in the World.

When the Locator Bar Experiment is enabled and there are multiple Players in a World, the Locator Bar will appear on-screen for each Player, replacing the Experience Bar. The Player Level number will still be visible as before above the Locator Bar.

The Locator Bar will display colored indicators when the camera is facing within 120 degrees towards another Player. If another Player is 30 degrees above or below the camera's viewport (the screen) an up or down arrow will be displayed.

Crouching will hide the Player, preventing their indicator from appearing on the Locator Bar of other Players.

Players in Spectator Mode are not visible on the Locator Bar.

A Mob Head or a Carved Pumpkin will similarly hide Players from the Locator Bar when worn in the head slot.

Using a Potion of Invisibility will also hide players from the Locator Bar.

> **Developer's note:** When the Locator Bar moves out of experimental, we plan on making it a feature that Players can toggle on and off.

#### Known Issues

- The Locator Bar has the following known issue, so we recommend testing it with a Simulation Distance of 4 chunks
  - If the Simulation Distance is set to greater than 4 chunks then the Locator Bar may not show players in between 4 chunks and the Simulation Distance

## Features and Bug Fixes

### Blocks

- Sapling "age_bit" no longer regresses after an unsuccessful growth attempt, preventing nearby Observers from activating incorrectly ([MCPE-190286](https://bugs.mojang.com/browse/MCPE-190286))

### Gameplay

- Players will no longer pass through Blocks placed around x or z coordinates that are a power of 2. (Example 256, 512, 1024 ...) ([MCPE-173843](https://bugs.mojang.com/browse/MCPE-173843))

### Items

- Fixed a bug where most usable items could not be used while targeting a Mob Spawner ([MCPE-58999](https://bugs.mojang.com/browse/MCPE-58999))

- Mangrove Roots can now be used as fuel in Furnaces ([MCPE-155605](https://bugs.mojang.com/browse/MCPE-155605))

- Fixed an issue where adding items to a slot in a Chest while it is being updated by a Hopper might remove the items ([MCPE-166390](https://bugs.mojang.com/browse/MCPE-166390))

### Mobs

- Fixed a bug where named Slimes and Magma Cubes lose their names when splitting ([MCPE-14975](https://bugs.mojang.com/browse/MCPE-14975))

- Creakings no longer despawn on world reload ([MCPE-190845](https://bugs.mojang.com/browse/MCPE-190845))

- Parrots can now imitate Phantoms, Zoglins, Guardians, Ravagers, Pillagers, and Blazes ([MCPE-164404](https://bugs.mojang.com/browse/MCPE-164404))

- Wither Skeletons and Zombified Piglins can now walk in lava ([MCPE-46806](https://bugs.mojang.com/browse/MCPE-46806))

### Sound

- Fixed an issue where all sound in Windows stops working after 40-41% loading ([MCPE-175138](https://bugs.mojang.com/browse/MCPE-175138))

### Stability and Performance

- Fixed a bug that occasionally caused an error when creating a Realm on an empty slot

- Fixed a crash that could sometimes occur when certain foliage textures fail to load

### User Interface

- Fixed a bug that could prevent Minecraft from loading the main menu, after cancelling a server transfer request from another server. ([MCPE-189096](https://bugs.mojang.com/browse/MCPE-189096))

- Potion of Slowness IV (standard, splash, lingering) is no longer separated from other slowness potions in Creative Menu ([MCPE-101923](https://bugs.mojang.com/browse/MCPE-101923))

- Touch Controls: Updated icons for Dismount and Jump buttons (when mounted) to be clearer and consistent between the touch control schemes ([MCPE-184403](https://bugs.mojang.com/browse/MCPE-184403))

- Suspending/minimizing the game with Screen Animations disabled no longer resets the world seed in the Create New World screen. ([MCPE-188975](https://bugs.mojang.com/browse/MCPE-188975))

- Touch Controls: Spectators can now also customize controls ([MCPE-184704](https://bugs.mojang.com/browse/MCPE-184704))

- Touch Controls: Fixed a bug that could cause issues when customizing touch controls during the death animation in Hardcore mode ([MCPE-186584](https://bugs.mojang.com/browse/MCPE-186584))

- Added modal to handle Not Enough Disc Space error in Edit World screen, Resource Packs tab

- Fixed "Download all missing packs" button not working under specific conditions

- Fixed a bug where the bed screen would display the wrong message when sleeping during a thunderstorm ([MCPE-190178](https://bugs.mojang.com/browse/MCPE-190178))

- Stopped main menu background rotation when entering new player flow

- Stopped main menu background rotation and logo text movement when the "screen animations" option is disabled.

### Vanilla Parity

#### General

- Add magic crit particles for enchanted weapons, to better match the Java edition ([MCPE-18704](https://bugs.mojang.com/browse/MCPE-18704))

#### Items

- Cut Sandstone Slabs can now be crafted in the Stonecutter using Cut Sandstone ([MCPE-42734](https://bugs.mojang.com/browse/MCPE-42734))

- Cut Red Sandstone Slabs can now be crafted in the Stonecutter using Cut Red Sandstone ([MCPE-42734](https://bugs.mojang.com/browse/MCPE-42734))

- Totem of Undying now gives the same 45 second regeneration as Java ([MCPE-90716](https://bugs.mojang.com/browse/MCPE-90716))

- Shears now consume durability when used on Beehives and Bee Nests with full Honey level ([MCPE-63995](https://bugs.mojang.com/browse/MCPE-63995))

#### Mobs

- The maximum amount of Raw Rabbits dropped from Rabbits is now increased by 1 for each level of Looting ([MCPE-47125](https://bugs.mojang.com/browse/MCPE-47125))

#### Structures

##### Woodland Mansion

- Iron Axe with Efficiency I now always generates in a Chest inside Woodland Mansion's tree-chopping room ([MCPE-109048](https://bugs.mojang.com/browse/MCPE-109048))

## Technical Updates

### API

- Fixed an issue with BlockPermutation::withState in outdated scripts that prevented some states from being set correctly on a number of blocks

  - Affected blocks include any which have had their directional or placement states recently changed
  - Scripts created after these blocks were changed may need to be updated to avoid unintended behavior

#### Molang

- query.graphics_mode_is_any no longer requires the Upcoming Creator Features experiment

### Biomes

- Moved Vanilla biome JSON files from an internal folder to the appropriate Vanilla behavior packs

### Bug

- Fixed rotation of Jigsaw sections when Data-Driven Jigsaw Structures is enabled.

### Components

- The "minecraft:rideable" component now has three new additional fields:

  - "dismount_mode" defines where riders are placed when dismounting the entity:
    - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found
    - "on_top_center", riders are placed at the center of the top of the entity's collision box
  - "on_rider_enter_event", defines the event to execute on the owner entity when an entity starts riding it
  - "on_rider_exit_event", defines the event to execute on the owner entity when an entity stops riding it

### Editor

- Selection system has been completely overhauled and now leverage client widgets
  - Selection Marquee now support click and drag to select
  - Selection Marquee still supports opposing corner mode using CTRL key
  - Marquee and Freehand selection now support undo and redo
  - Widgets colors are integrated with the theme manager
  - Updates to keyboard shortcuts:
    - Keyboard control for selection volumes now supports keyboard repeat
    - (Marquee) SHIFT+Click create multiple volumes
    - (Freehand) SHIFT+CTRL removes brush voxels from selection
    - (Freehand) SHIFT adds brush voxels to existing selection
    - ALT+Arrow keys move the selection volume (Marquee & Freehand)
    - CTRL+Arrow keys resize the selection volume (Marquee only)
    - ENTER selects a volume
    - SHIFT+ENTER selects an additional volume
    - CTRL+S enters selection mode. CTRL+S again (while in selection mode) cycles between Marquee and Freehand
- Added a new RelativeVolumeListBlockVolume volume type for Editor use to replace CompoundBlockVolume
- Added a new Client Widget Bounding Box and Volume Outline components
- Added keyboard repeat to cursor controls
- Added visualization to Smart Fill tool
- Added visualization to Extrude tool
- Added visualization to Line tool
- Added fields 'Spawn Position', 'Time of Day' and 'Weather' in a new section of initial play settings.
- Added feedback UI to show the progress and result.
- Added a 'Custom Mapping' subpane to the Workbench extension which adds the ability to add mappings for custom block properties
- Added global keybind for activating Workbench
- Added a tool mode key shortcut for Reload operation, it will be unbound by default
- Improved performance on Smart Fill & Extrude
- Updated brush shape settings to be local to the modal tool and specific configuration of that tool
  - Removed registerBrushShape from BrushShapeManager API, only core brushes will be supported for core tools.
- Updated icon for delete inside the selection tool.
- Updated naming of color setters and getters in the Widget system to use the same terminology (Outline for borders, Hull for fills, Highlight for specialized borders)
- Fixed a bug that prevented theme to be changed to Redstone from UI Settings
- Fixed a bug that caused Keyboard Settings buttons to be misaligned in certain resolutions
- Removed deprecated property pane API
- Removed CompoundBlockVolume usage in Editor Script APIss

### General

- Updated the client side biome component 'minecraft:water_appearance' field 'surface_color' to be optional. Added a content error that fires if the component is empty.

### Goals

- minecraft:behavior.float_wander has been updated with new fields:

  - navigate_around_surface: enables the usage of a new algorithm to find random positions to navigate to. The new algorithm aims to find random positions in the vicinity of solid (i.e. non-Air and non-liquid) blocks, and if that fails will fall back to finding a random position in the vicinity of the current dimension's surface level.
  - additional_collision_buffer: makes sure there are no blocks present in an inflated area around the target position.
  - allow_navigating_through_liquids: allow the mob to have target positions inside liquids
  - surface_xz_dist: the distance in the horizontal directions to look for nearby surfaces. Only valid when navigate_around_surface is true.
  - surface_y_dist: the distance in the vertical directions to look for nearby surfaces. Only valid when navigate_around_surface is true.

- minecraft:behavior.follow_mob has been updated with the following new fields

  - use_home_position_restriction: If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. If false, it will choose target position without considering home restrictions.
  - preferred_actor_type: The type of actor to prefer following. If left unspecified, a random actor among those in range will be chosen.
  - filters: If non-empty, provides criteria for filtering which nearby Mobs can be followed. If empty default criteria will be used, which will exclude Players, Squid variants, Fish variants, Tadpoles, Dolphins, and mobs of the same type as the owner of the Goal.

### Marketplace

- Upon reading encrypted files on Xbox we would sometimes lose the last byte, causing some files to become invalid and fail to load.

### Network Protocol

- Added ActorFlags::DOES_SERVER_AUTH_ONLY_DISMOUNT

### Structures

- Fixed mirroring of door blocks when part of a structure that is being placed.

## Technical Experimental Updates

### API

#### @minecraft/server 2.0.0-beta

- EntityPushThroughComponent has been changed to read-only.

- resetHudElements method on ScreenDisplay has been renamed to resetHudElementsVisibility.

- ItemStack methods getComponent and getComponents will return ItemCustomComponentInstance for custom components registered with ItemComponentRegistry.

- ItemStack method hasComponent will return true for custom components registered with ItemComponentRegistry.

#### @minecraft/server-ui 2.0.0-beta

- Class ModalFormData.
  - Changed function dropdown.
    - Removed parameter defaultValueIndex?: number.
    - Added parameter dropdownOptions?: ModalFormDataDropdownOptions.
  - Changed function slider.
    - Removed parameter valueStep: number,.
    - Removed parameter defaultValue?: number.
    - Added parameter sliderOptions?: ModalFormDataSliderOptions.
  - Changed function textField.
    - Removed parameter defaultValue?: minecraftserver.RawMessage \| string.
    - Added parameter textFieldOptions?: ModalFormDataTextFieldOptions.
  - Changed function toggle.
    - Removed parameter defaultValue?: boolean.
    - Added parameter toggleOptions?: ModalFormDataToggleOptions.
- Added interface ModalFormDataDropdownOptions:

<!-- -->

    export interface ModalFormDataDropdownOptions {
        defaultValueIndex?: number;
        tooltip?: minecraftserver.RawMessage | string;
    }

- Added interface ModalFormDataSliderOptions:

<!-- -->

    export interface ModalFormDataSliderOptions {
        defaultValue?: number;
        tooltip?: minecraftserver.RawMessage | string;
        valueStep?: number;
    }

- Added interface ModalFormDataTextFieldOptions:

<!-- -->

    export interface ModalFormDataTextFieldOptions {
        defaultValue?: string;
        tooltip?: minecraftserver.RawMessage | string;
    }

- Added interface ModalFormDataToggleOptions:

<!-- -->

    export interface ModalFormDataToggleOptions {
        defaultValue?: boolean;
        tooltip?: minecraftserver.RawMessage | string;
    }

### Graphical

- Added caustics to bodies of water in the Deferred Technical Preview. This new feature is enabled by default, and can be further controlled by resource packs. See updated Deferred Water documentation on the Creator portal for more information.
- Modified exposure to preserve details in scenes with high contrast in lighting (i.e., local exposure).
- Improved the lighting handoff between the sun and moon at sunrise and sunset in the Deferred Technical Preview.
- Made some slight adjustments to volumetric fog density, the sky probe strength and the emissive brightness of the sun and moon sprites in the Deferred Technical Preview.
- Introduced new 'Off' option to the Point Light Quality slider to fully disable analytical point light evaluation in the Deferred Technical Preview.

### Technical Experimental

- Removed unused experimental json field minecraft:nether_surface in the behavior pack biome file
