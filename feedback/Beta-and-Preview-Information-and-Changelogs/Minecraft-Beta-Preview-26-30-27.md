---
title: Minecraft Beta & Preview - 26.30.27
date: 2026-05-06T10:51:25Z
updated: 2026-05-06T12:50:48Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/45637355669645-Minecraft-Beta-Preview-26-30-27
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 6 May 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/45639840594445" alt="Alex is dropping a sulfur cube with a magma block onto some hostile mobs.png" />
</figure>

Test the final features from Chaos Cubed in Bedrock beta & preview! Feed magma to sulfur cubes, see a new look for sulfur springs, and figure out what block makes sulfur cubes slow and heavy but bouncy! And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Chaos Cubed Features and Fixes

## Sulfur Caves

- Water fog in Sulfur Caves is now green instead of blue ([MCPE-237762](https://bugs.mojang.com/browse/MCPE-237762))
- The block graident of the Sulfur Caves has been updated to no longer contain Tuff and Granite blocks

> **Developer's Note:** *Thanks to player feedback we've decided to revert tuff and granite blocks generating in sulfur caves, in favor of generating more sulfur to increase the chances of pools spawning. Sulfur spikes remain unaffected.*

- The Sulfur Caves' placement in the world have been tweaked somewhat
  - The Biome is less likely to be placed underneath Oceans
  - The Biome is less likely to be placed in hilly/mountainous terrain
- Potent Sulfur generated inside Sulfur Springs is no longer stuck in an inert state, but instead produces Noxious Gas and erupts periodically
- Updated the look of Sulfur Springs to make them larger and more fleshed out:
  - Size has been significantly increased
  - Shape and block composition has been made more varied
  - Tuff now randomly generates around them
- Sulfur Spring generation has been constrained to flatter terrain

## Blocks

- Leads can no longer be attached to Sulfur Walls and Cinnabar Walls

- Chiseled Sulfur and Chiseled Cinnabar can now be crafted from slabs

- Sulfur and Cinnabar stone set now has a blast radius of 6 instead of 3

## Potent Sulfur

- Potent Sulfur now emits a vibration of frequency 10 when it starts erupting
- Potent Sulfur now emits a vibration of frequency 9 when it stops erupting

## Sulfur Cube

- Sulfur Cube Spawn Egg will now spawn a Sulfur Cube baby if used on another Sulfur Cube
- Added unique hit and push sounds for the explosive ball archetype
- Sulfur Cubes can now be affected by Oozing
- When a Magma Block is absorbed, the Sulfur Cube now deals damage to entities that touch it
  - Does not cause nearby entities to become hostile toward the Sulfur Cube
  - Does not set entities on fire
- Added a new Slow Bouncy archetype for the Sulfur Cube, which bounces slower with higher knockback resistance
  - Stone-type blocks now give the Slow Bouncy archetype instead of the Regular archetype
  - The Regular archetype now only contains dirt-type blocks and Concrete Powder

## Sounds

- Updated noxious gas sounds
- Small sulfur cube now have it´s own sound event for when landing after a jump
- Added unique sounds for the archetype called Hot
- Updated sound assets for Sulfur spring:

# Features and Bug Fixes

## Accessibility

- Fixed a bug where animations always generated closed captions regardless of distance ([MCPE-238088](https://bugs.mojang.com/browse/MCPE-238088))

## Character Creator

- Improved character load time on the main menu

## Gameplay

- Fixed Experience Orbs spawning at an incorrect position after killing a Bee, Phantom, or Vex ([MCPE-61885](https://bugs.mojang.com/browse/MCPE-61885)) ([MCPE-49418](https://bugs.mojang.com/browse/MCPE-49418))
- Bees now follow players holding Chorus Flowers or Spore Blossoms
- Bees can now be bred and aged by Chorus Flowers and Spore Blossoms
- Fixed a bug where trees growing next to Spore Blossoms and Chorus Flowers did not have a chance to generate beehives.
- Fixed an issue where dimensions with large sections of air blocks could degrade performance during initial load
- Fixed a bug where vehicles with a non-zero `lock_rider_rotation` value would continuously rotate when a player was riding them without giving any movement input

## General

- Connections from players with names that could interfere with game functions are now rejected ([MCPE-233682](https://bugs.mojang.com/browse/MCPE-233682))
- Fixed an issue where players could not join another player's game session when launching the game from an external invitation
- Dedicated servers now have the allow list enabled by default in the server.properties, and will display a warning on server startup if the allow list is enabled but contains no entries

## Graphical

- Fixed bug with the sky cubemap and volumetrics not updating after teleport in Vibrant Visuals.
- Fixed incorrect tile border seam for tiles with heightmaps in Vibrant Visuals.
- Fixed Snow Golem heads being sometimes incorrectly lit in Vibrant Visuals
- Fixed an issue where emissive parts of Eyeblossom and Firefly Bush were affected by Dithering. ([MCPE-225919](https://bugs.mojang.com/browse/MCPE-225919))
- Fixed issue causing textures to appear broken when Ray Tracing is enabled.
- Fixed issue causing name tags to not appear when Ray Tracing is enabled.
- Fixed a bug where Boats and Chest Boats would visually fill with water when the player was seated inside them near the water surface

## Input

- Fixed a crash that can occur when prompted about extra Joy-Con controllers that are connected

## Items

- Accurately throwing Enderpearls no longer teleport Players into or through blocks ([MCPE-100180](https://bugs.mojang.com/browse/MCPE-100180))

## Mobs

- Fixed an issue where mob audio could switch to underwater sound variants while the mob was still above the visible water surface

## Realms

- Added information surrounding resource packs download progress to join Realm progress message
- Fixed number of online players not showing on choose realm screen

### Realms Hub

- "No Members Found" empty state no longer briefly shows up before loading members in the Realms Hub Members tab

## Stability and Performance

- Fixed a crash that could occur when loading recipes with invalid result counts from behavior packs during server initialization
- Fixed a crash that could occur on world exit or join when texture streaming is enabled

## User Interface

- Furnace recipe book was moved from experiments to the common game
- Fixed Fullscreen mode to remember which screen it was last on.
- Added a new color formatting code (§w) for the shade of blue used by party chat
- Added Wishlist grid component to display marketplace wishlist items with responsive column layout
- Fixed a bug that could cause the game to freeze when loading a world with a specific resource pack applied ([MCPE-237537](https://bugs.mojang.com/browse/MCPE-237537))

# Technical Updates

## AI Goals

- Made the schema for `minecraft:behavior.hurt_by_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.owner_hurt_by_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.owner_hurt_target` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.wither_target_highest_damage` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:wither_target_highest_damage` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.random_look_around` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer. Int Range field `look_time` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made the schema for `minecraft:behavior.random_look_around_and_sit` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.door_interact` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.break_door` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer
- Made the schema for `minecraft:behavior.open_door` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.30 and newer

## API

- Fixed issue where SimulatedPlayers do not spawn with properties defined in player.json.
- Fixed `Dimension.containsBlock()` returning incorrect results when using exclude filters on a `BlockVolume` smaller than 16x16x16

### Data-driven UI (DDUI)

We have significantly updated the implementation of DDUI as we prepare for stabalization. Please test the latest changes in this week's preview and let us know if you're seeing any issue.

- Replaced Observable with ObservableString, ObservableNumber, ObservableUIRawMessage, and ObservableBoolean.
  - Instead of using `Observable.create` you should now use the constructor, i.e. `new ObservableString("hello!")`
- Renamed `DropdownItem` to `DropdownItemData`
- Changed values of `DataDrivenScreenClosedReason`:
  - `UserClose` -\> `ClientClosed`
  - `ServerClose` -\> `ServerClosed`
  - `UserBusy` is unchanged

## Blocks

- Released the `culling_shape` field in the `minecraft:geometry` component from behind the VoxelShapes experiment. Non-unit-cube culling shapes for vanilla blocks (e.g. fences, bells, slabs) still require the experiment.
- Releasing the snow logging behavior for Block Precipitation Interaction component out of experimental. The feature requires version 1.21.120+

## Editor

- Added `IPaneManager` to `IPlayerUISession` for creating panes, `createPropertyPane` function will be deprecated
- Added `IIntroductionPane` API to support creating user education content to be displayed in a floating window
- Added `IContentBadgeManager` API for managing content badges that will highlight UI controls. Content badges could be restored or dismissed from settings panel
- Added `contentBadgeId` to `IRootPropertyPaneOptions` API for highlighting `infoTooltip` button, it will persist until tooltip is displayed. Content badges can also be added to action bar items with `IActionBarItemCreationParams`.
- Added `RootPaneLocation.Bottom` to display scripted root panes in a bottom drawer panel
- Added `sortIndex` for menu API to organize them within the submenu
- Fixed a bug where stairs/torches/doors in a structure faced the wrong direction when applying Mirror X/Z in the PastePreview tool.
- The Paste Preview Tool remembers your current clipboard's changed origin
- Fixed the Publish to Realms help link so it stays available when a Bedrock Editor user does not have an active Realms subscription

## Entity

- Released `execute_event_on_home_block` entity event response out of experimental

## Events

- Added `EntityStartSneakingAfterEvent` and `EntityStartSneakingAfterEventSignal` to beta.

## Features

- Adding a new feature type `height_difference_filter_feature`

  - This feature is meant to be used as a filter to filter away positions based on height differences close to the placed feature
  - Example usage to allow Pink Petals to only place close to cliffs:

  ``` auto
  {
    "format_version": "1.26.30",
    "minecraft:height_difference_filter_feature": {
      "description": {
        "identifier": "minecraft:pink_petals_near_cliff_feature"
      },
      "places_feature": "minecraft:pink_petals_feature",
      "min_required_negative_height_diff": 5,
      "search_radius": 5
    }
  }
  ```

  - `min_required_upward_height_diff` Specifies the minimum height difference required upwards
  - `min_required_downward_height_diff` Specifies the minimum height difference required downwards
  - `max_allowed_upward_height_diff` Specifies the maximum height difference allowed upwards
  - `max_allowed_downward_height_diff` Specifies the maximum height difference allowed downwards
  - `search_radius` specifies the length in each cardinal direction the filter will check for blocks against the given differences
  - `places_feature` specifies what feature should be placed when filter succeeds

- Added an `only_check_intersection_for_motion_blocking_blocks` field to the `block_intersection` constraint of `minecraft:structure_template_feature`
  - When `true`, only motion-blocking blocks within the structure are checked for intersections against the `block_allowlist`
  - When `false`, all blocks in the structure except empty ones are checked for intersections, including air
  - Defaults to `true`, preserving existing behavior
  - Motion-blocking blocks are full blocks that block motion

- Added a `ground_level` field to `minecraft:structure_template_feature`
  - Specifies which Y coordinate of the structure is considered its ground level
  - Used as a vertical offset during placement and determines which layer of the structure is checked by the `leveled` and `grounded` constraints
  - All non-air blocks at this level define positions where the `leveled` and `grounded` constraints are checked
  - If the value exceeds the structure's height, it is clamped to the maximum valid value and a content warning is emitted
  - Defaults to `0`

- Added a new `leveled` option to the `constraints` field of `minecraft:structure_template_feature`
  - When specified, ensures the structure's ground level is placed on mostly flat terrain
  - Includes a `max_steepness` field that defines the maximum allowed height difference between the placement position and terrain samples taken at the structure's ground level
    - A valid terrain sample consists of a solid block with a non-solid block above it
    - Defaults to `2`

## Gameplay

- Fixed a bug where the loot table `match_tool` condition could match when blocks were broken or mobs were killed with an empty hand ([MCPE-188723](https://bugs.mojang.com/browse/MCPE-188723))

## Items

- The "minecraft:wearable" component no longer overrides the "minecraft:max_stack_size" component when both are present on a custom item ([MCPE-176931](https://bugs.mojang.com/browse/MCPE-176931))

## Mobs

- Fixed actor textures not loading properly when applying packs with older min engine version

## Scripting

- Releasing isSnowLoggable method in ScriptBlockPrecipitationComponent from beta to 2.8.0.
- LootItem scripting class now returns correct values for Name field on custom items and blocks ([MCPE-238050](https://bugs.mojang.com/browse/MCPE-238050))
- LootPool scripting class now returns correct values for Rolls and Bonus Rolls fields. ([MCPE-238055](https://bugs.mojang.com/browse/MCPE-238055)) ([MCPE-238056](https://bugs.mojang.com/browse/MCPE-238056))

## Sound

- Correct subtitle is now showing when Sulfur Cube is jumping around

# Experimental Technical Updates

## API

- Added new shape classes to `@minecraft/debug-utilities` library:
  - `DebugCone`, `DebugCylinder`, `DebugPyramid`, `DebugEllipsoid`

## Blocks

- Added the `lava_flammable` field to the `minecraft:flammable` component
  - Supported values are `always` and `never` (default)
  - When set to `always`, the block is considered when lava attempts to spread fire after adjacent block updates, while still respecting normal fire placement rules
  - When set to `never`, the block is excluded from that check
  - Requires Experimental Upcoming Creator Features

### Voxel Shapes

- Added occlusion voxel shapes for wall-mounted skull blocks when the Voxel Shapes experiment is enabled
- These shapes improve face culling so that hidden faces of custom blocks are correctly removed when a skull block is attached
  - Wall-mounted skull shapes (6 blocks): Creeper Head, Dragon Head, Player Head, Skeleton Skull, Wither Skeleton Skull, Zombie Head
  - Wall-mounted Piglin shape (1 block): Piglin Head

## Custom Dimensions

- Fixed Custom Dimension height range to match Overworld defaults

## General

- Added "owner_launch_immunity_ticks" field to the projectile component
