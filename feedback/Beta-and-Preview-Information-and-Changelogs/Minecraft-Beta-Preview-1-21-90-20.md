---
title: Minecraft Beta & Preview - 1.21.90.20
date: 2025-04-22T15:40:08Z
updated: 2025-04-23T08:36:05Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36030119254925-Minecraft-Beta-Preview-1-21-90-20
hash:
  user-content-experimental-features: experimental-features
  user-content-user-interface: user-interface
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-leashing-updates: leashing-updates
  user-content-elytra: elytra
  user-content-leash-knots: leash-knots
  user-content-leashing-entities-to-other-entities: leashing-entities-to-other-entities
  user-content-physics: physics
  user-content-rendering: rendering
  user-content-shears: shears
  user-content-graphical: graphical
  user-content-blocks: blocks
  user-content-commands: commands
  user-content-gameplay: gameplay
  user-content-graphics: graphics
  user-content-items: items
  user-content-mobs: mobs
  h_01JSF2958ZDKGAZYVRY6H4YBZ7: user-interface-1
  user-content-vanilla-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60-2.0.0: "200"
  user-content-%60%40minecraft%2Fserver-ui%60-2.0.0: 200-1
  h_01JSF2958ZKCBQ5J0D0NF53T3D: blocks-1
  h_01JSF2958ZA4NKBSJ3WTPS7FCG: commands-1
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-experiments: experiments
  h_01JSF295905J86B8Q9T17ZDG14: items-1
  user-content-molang: molang
  user-content-network-protocol: network-protocol
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JSF29590HNQ5PVY1B3S01GZ8: api-1
  user-content-%60%40minecraft%2Fserver%60-2.1.0-beta: 210-beta
  user-content-%60%40minecraft%2Fdebug-utilities%60-1.0.0-beta: 100-beta
---

**Posted:** 22 April 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![happy ghasts minecraft](https://feedback.minecraft.net/hc/article_attachments/36030898359821)

It's time to unleash another vibrant (see what we did there?) Preview and Beta! Today's release is bringing you new leash mechanics! Now you’ll be able to leash multiple mobs together, and you’ll also be able to leash herds of mobs to boats, chest boats, and even fences. And with the happy ghast in testing already – that means you’ll be able to test leashing a chest boat beneath your happy ghast as you soar through the skies!

For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/)  , and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/) .

 

## Experimental Features

### User Interface

- The Jump and Dash bars no longer take precedence over the Locator Bar while inactive in Creative Mode
- Interaction Button in Creative Mode moved up for Touch devices such that it no longer covers the Locator Bar
- Player Dots on the Locator Bar now show correctly while using split-screen
- The item name tooltip is no longer cut off while the Locator Bar is enabled in Creative Mode
- Player Dots on the Locator Bar now show correctly in third person view while using split-screen

## Features and Bug Fixes

### Leashing Updates

We are expanding the functionality of leads, to make it possible to leash any leashable entity to another leashable entity and by doing so create chains of leashed entities

#### Elytra

- Using a Firework Rocket to boost while flying with an Elytra now causes leashed mobs to unleash

#### Leash Knots

- Entities can now be leashed to a pre-existing Leash Knot by interacting with it
- Players can retrieve entities tied to a Leash Knot by interacting with it
- Shears can now be used to remove Leash Knots

#### Leashing Entities to Other Entities

Any leashable entity can now be leashed to any other leashable entity.

- To leash an entity to another entity, the player must:
  - Have the entity already leashed to themselves
  - Sneak and interact with the target entity while holding the leash
- Leashed entities can now be "stolen" by leashing them again, transferring ownership to the player
- If re-leashing an entity would result in immediate leash snapping due to distance, the re-leashing cannot be done
- To prevent erratic behavior when leashed to each other, llamas that are leashed no longer attempt to form caravans
- A leashed entity cannot be leashed to itself
- Baby mobs can only be leashed one way - to another entity; they cannot have other mobs leashed to them
- Known issue: When two mobs are connected, it results in the lead being rendered with a erroneous y-axis offset and appearing below one of the mobs

#### Physics

All leashable entities now behave more naturally when being pulled.

- When leashed to a Happy Ghast, Horses, Camels, Donkeys, Mules, Boats, Chest Boats, and Sniffers now adjust their position gradually over time, aligning smoothly with their leash holder when suspended mid-air
- In all other cases, entities align to the direction they are being pulled and no longer behave erratically when suspended mid-air
- Mid-air friction now applies to Boats just like any other entity, meaning they can no longer orbit the player or behave excessively bouncily
- The distance at which leashes break has been increased to 12 blocks, except for the Happy Ghast, which has a leash break distance of 16 blocks
- When dragged on the leash, leashed objects will now orient themselves towards the leasher
- The distance between centers of entities bounding boxes, rather than their feet is used to determine the distance between two leashed entities

#### Rendering

- Boats and large leashable mobs that cannot fit in a Boat (Horses, Donkeys, Mules, Camels, and Sniffers) when leashed to a Happy Ghast are rendered with four leashes instead of one
- In this configuration, the Happy Ghast also features a custom rope layer wrapping around it

#### Shears

- Shears can now be used on leashed entities to unleash them, removing both incoming and outgoing leash connections
- Players cannot cut other players' leashes
- Dispensers can now use shears to unleash leashed entities

### Graphical

- Made Vibrant Visuals the default graphics mode for supported devices.
- Added the ability to data-drive some of the Vibrant Visuals / Deferred Graphics related settings per biome. Creators can provide multiple versions of atmospherics, color grading, lighting and/or water configurations as long as each has a unique `identifier` and file name. The reserved JSON names for each group of settings (e.g., lighting/global.json) will continue to function as before. Creators can utilize the `minecraft:atmosphere_identifier`, `minecraft:color_grading_identifier`, `minecraft:lighting_identifier`, and `minecraft:water_identifier` in Client Biome JSONs to connect particular rendering settings to a given biome. Note that certain parameters, such as tone mapping operators, caustics and wave simulation on/off cannot be customized per biome at this time. Parameters will be spatially blended as players move between biomes. See updated Creator Documentation for more details.
- Increased back-scattering of light underwater in Vibrant Visuals
- Cloud shadows no longer pop in and out of view when looking around using Vibrant Visuals on Android devices
- Fixed a bug where directional lighting cut out 8 blocks under the water surface while using Vibrant Visuals
- Painting now renders with correct PBR properties, shadows and illumination when using Vibrant Visuals
- Added MERS texture support for Signs in Vibrant Visuals
- Added new texture assets for a variety of trims, particles, spawn eggs, water and the dark oak boat in Vibrant Visuals
- Updated the appearance of metals for a variety of block textures in Vibrant Visuals
- Updated the Cave Vines, Chorus Flower, Pumpkin, Fire Fly Bush and a variety of other plant textures in Vibrant Visuals
- Updated the Bee, Dolphin, Ghast, Pig Saddle and Strider textures in Vibrant Visuals

### Blocks

- Dried Ghast block's rarity is now common, matching its ingredients
- Crimson and Warped Roots cannot be lit on fire or burn anymore ([MCPE-80066](https://bugs.mojang.com/browse/MCPE-80066))
- Non-waterlogged Dried Ghast blocks now only play ambient sounds when on top of a Soul Sand or a Soul Soil block
- Fixed issue where jungle leaves did not become transparent when setting all leaf types to be transparent. ([MCPE-110630](https://bugs.mojang.com/browse/MCPE-110630))

### Commands

- Fixed a bug where players could hear sounds played with `/playsound` even if they were in a different dimension than the one the sound was played in ([MCPE-184566](https://bugs.mojang.com/browse/MCPE-184566))

### Gameplay

- Fixed crash that would sometimes occur when using command blocks

### Graphics

- Item bobbing will no longer stagger when the amount of days is high. ([MCPE-190647](https://bugs.mojang.com/browse/MCPE-190647))
- Entering pause while breaking a block will reset the breaking animation. ([MCPE-191029](https://bugs.mojang.com/browse/MCPE-191029))

### Items

- The Trident is now grouped with other tools/weapons in the Creative inventory ([MCPE-181002](https://bugs.mojang.com/browse/MCPE-181002))

### Mobs

- Happy Ghast now turns more smoothly
- Players mounted on the Happy Ghast no longer appear invisible to other players when the Happy Ghast is immobile
- Players mounted on the Happy Ghast no longer have their hitbox displaced when the Happy Ghast is immobile
- Happy Ghast no longer becomes a platform when a Player is standing next to it
- Fixed bug where piloted Happy Ghast could be moved while non-riding players were standing on it
- Mobs will no longer push the Happy Ghast when it is controlled by a player ([MCPE-201851](https://bugs.mojang.com/browse/MCPE-201851))
- Fixed a bug where Happy Ghast would keep looking at you after no longer being tempted
- Ghastlings now grow up to become a Happy Ghast after 20 minutes instead of after 400 minutes ([MCPE-212378](https://bugs.mojang.com/browse/MCPE-212378))
- Piglin Brutes will now despawn properly on peaceful difficulty ([MCPE-88837](https://bugs.mojang.com/browse/MCPE-88837))

### User Interface

- Cursor position now correctly updates when pressing down on L3 or D-pad while hovering a bundle ([MCPE-189314](https://bugs.mojang.com/browse/MCPE-189314))
- Bundle tooltip no longer overlaps with item tooltips when quickly interacting with empty inventory slots on touch devices ([MCPE-187171](https://bugs.mojang.com/browse/MCPE-187171))
- Bundle UI now correctly disappears when switching Inventory tabs with controller input
- New items and blocks related to the Happy Ghast no longer have a trailing space in their names ([MCPE-199213](https://bugs.mojang.com/browse/MCPE-199213))
- Tapping on the Bundles Tooltip on Touch devices no longer interacts with the UI behind it
- The Text Background Opacity accessibility setting now also affects hotbar tooltips, chat message backgrounds, and leaderboard displays. ([MCPE-79331](https://bugs.mojang.com/browse/MCPE-79331))
- Fixed an issue where only changing the access of PlayStation friends to your world would not be saved when exiting the menu
- To maintain feature parity with the flatworld presets in the Java Edition, the Snowy Kingdom flatworld preset has been updated to use a snow layer instead of a snow block ([MCPE-194367](https://bugs.mojang.com/browse/MCPE-194367))

### Vanilla Parity

- Harness goggles will now always be down as long as the harnessed Happy Ghast has at least one mounted Player

## Technical Updates

### API

### `@minecraft/server` 2.0.0

`@minecraft/server` 2.0.0 is now released, `2.1.0-beta` is the new beta version for `@minecraft/server`.  
See <https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingv2.0.0overview>  for more details on 2.0.0.

- Added integer overflow detection in `ScoreboardObjective.addScore`. Original value will be retained when overflow is detected.
- `NamespaceNameError` now has better error information and the `name` property value will now be set to "NamespaceNameError".
- `BlockComponentPlayerDestroyEvent` renamed to `BlockComponentPlayerBreakEvent`
- `PlayerPlaceBlockBeforeEvent`    
    - `permutationBeingPlaced` renamed to `permutationToPlace`
- `BlockCustomComponent`    
    - `onPlayerDestroy` renamed to `onPlayerBreak`
- Added `lookAt` method on `Entity`
- Added `customComponentParameters: CustomComponentParameters` to `ItemCustomComponentInstance`
- Added `customComponentParameters: CustomComponentParameters` to `BlockCustomComponentInstance`
- Custom components V2 now support assigning string, array, object, bool, or number
- `GameMode` enum member names changed  
    - `survival` renamed to `Survival`    
    - `creative` renamed to `Creative`    
    - `adventure` renamed to `Adventure`    
    - `spectator` renamed to `Spectator`

### `@minecraft/server-ui` 2.0.0

`@minecraft/server-ui` 2.0.0 is now released, `2.1.0-beta` is the new beta version for `@minecraft/server-ui`.

### Blocks

- Add a parameter to the culling rules schema to disable culling against full and opaque blocks
  - "condition" field is now optional.
  - removed "default" as a value for "condition" field in the culling rules schema.
  - added new optional "cull_against_full_and_opaque" boolean field in the culling rules schema.
    - if not specified, it will be set to true
    - if set to "false" culling against full and opaque blocks will not be considered
- When custom components v2 experiment is enabled, custom components can be assigned string, array, object, bool, or number

``` hljs
"components": {  
    "example_namespace:example_component": "foo",
    "example_namespace:example_component2": 4,
    "example_namespace:example_component3": [        "hello",        "world"    ],
    "example_namespace:example_component4": true,
    "example_namespace:example_component5": {        "stuff": 4    },}  
```

- Custom components v2 experiment no longer required to use custom components v2
- Custom components v2 is available in JSON versions 1.21.90 and higher
- "minecraft:custom_components" deprecated in 1.21.90
- The "minecraft:material_instances" component will no longer produce a content error if the "\*" material is missing

### Commands

- Added integer overflow detection in `/scoreboard players operation` for +=, -=, \*=, /= and %=. Original value will be retained when overflow is detected.

### Components

- Fixed incorrect warnings for using valid older block ids with "minecraft:block_placer" component
- Added the `"minecraft:remove_in_peaceful"` component:
  - Determines whether an entity should despawn on "Peaceful" difficulty
- Content warnings will log missing texture references for "minecraft:material_instances" block component
- Added the "minecraft:leashable_to" component:
  - Allows players to leash entities to the owner entity, retrieve those already leashed, or free them using shears
  - Players can leash entities to the owner entity by sneaking and interacting while having entities leashed to themselves
  - The "can_retrieve_from" field determines whether players can retrieve entities leashed to the owner entity
- Added new fields to the "minecraft:leashable" component:
  - "can_be_cut": Determines whether players can cut both incoming and outgoing leashes by using shears on the entity
  - "spring_type": A "presets" subfield that defines the type of spring-like force pulling the entity toward its leash holder
    - Available values:
      - "bouncy": Simulates a highly elastic spring that never reaches equilibrium if the leashed entity is suspended mid-air
      - "dampened": Simulates a dampened spring attached to the front of the leashed entity’s collision that reaches equilibrium if the entity is suspended mid-air and aligns with its movement direction.
      - "quad_dampened": Simulates four dampened springs connected to the center of each side of the entity's collision that reaches equilibrium if the entity is suspended mid-air and gradually aligns with the leash holder over time
  - "rotation_adjustment": A "presets" subfield that adjusts the rotation at which the entity reaches equilibrium

### Editor

- Adding a toggle to the Smart Fill tool to allow the user to select if operations should be limited to the selected blocks only
- Added 'Show Locator Bar' to export/Upload To Realms options
- Added exported world file path to the log panel after successful world export
- Updated movement controls for Tool mode
  - Changed default up/down keys to E and Q, Shift and Space are no longer defaults
  - Changed cursor settings mouse mode toggle shortcut from C to T key
  - Mouse Scroll now zooms toward the cursor. Updated fixed cursor mode offset to use Shift + Scroll
  - Added middle-click drag to pan in the XZ plane
  - Added Z and C keys to orbit around the existing block cursor
  - Added SHIFT+Z and SHIFT+C keys to orbit around the existing selection
- Updated Action Bar items to open automatically once added to Action Bar list
- Updated the default UI scale changed to 75% for resolutions that support it. Resolutions that do not support it use a default of 100%.
- Updated Download from Realms to provide the user with the directory the world was downloaded to.
- Updated Workbench tool to enable block modification outside of selection.
- Updated Freehand Selection carve mode so that if there's already a freehand selection, user can just hold CTRL to remove blocks without resetting it. Previously, this required SHIFT & CTRL to be held together
- Fixed a bug to ensure the Terrain Tool's indicator appears after mouse click
- Fixed a bug where a player could incorrectly load another player's hotbar setting in a multiplayer session after re-entering a game
- Fixed a bug that was causing property pane item additions to not update properly on the UI
  - Whenever a property item or sub-pane is added, the parent pane is automatically notified and refreshed.
  - Introduced optional `beginConstruct` and `endConstruct` functions in the IPropertyPane API to delay notifications until the entire pane is constructed. This improves performance by reducing unnecessary notifications.
- Fixed a bug where modals with large text couldn't scroll
- Fixed a bug causing the grapple camera transition to stutter

### Entity Components

- Added "minecraft:body_rotation_always_follows_head" entity component
  - Ensures the entity's body is always aligned with the head
  - Does not override the "minecraft:body_rotation_blocked" component

### Experiments

- Custom Components v2 experiment removed. Custom Components v2 is enabled when using `@minecraft/server` version `2.0.0` and above.

### Items

- When using Custom Components v2, custom components can be assigned string, array, object, bool, or number

``` hljs
"components": {  
"example_namespace:example_component": "foo",    
"example_namespace:example_component2": 4,    
"example_namespace:example_component3": [        "hello",        "world"    ],    
"example_namespace:example_component4": true,    
"example_namespace:example_component5": {        "stuff": 4    },}  
```

- Custom components v2 experiment no longer required to use custom components v2
- Custom components v2 is available in JSON versions 1.21.90 and higher
- "minecraft:custom_components" deprecated in 1.21.90

### Molang

- Fixed query.health in resource packs to return 0 for the Wither once it has died

### Network Protocol

- Added ActorFlags::BODY_ROTATION_ALWAYS_FOLLOWS_HEAD

## Experimental Technical Updates

### API

### `@minecraft/server` 2.1.0-beta

- Custom Command registration will create an alias from the command name without the namespace.    
    - If the name has already been claimed, then the alias will not be created and a content log warning will appear.
- Removed unused classes: `EntityIterator`, `EntityTypeIterator`, `FilterGroup`, and `PlayerIterator`
- Added class `PlayerHotbarSelectedSlotChangeAfterEvent`. This will be triggered every time the hotbar slot changes.
- Added enum `PlayerInventoryType`.
- Added class `PlayerInventoryItemChangeAfterEvent`. This will be triggered every time an item changes in the player's inventory. This includes the 27 inventory slots and 9 for hotbar.
- Updated class `Container`  
    - `reverseFind` has been renamed to `findLast`.    
    - `contains` now returns undefined if it fails to find the item.    
    - `firstEmptySlot` now returns undefined if it fails to find an empty slot.    
    - `firstItem` now returns undefined if it fails to find the item.    
    - `find` now returns undefined if it fails to find the item.    
    - `reverseFind`now returns undefined if it fails to find the item.
- Added `stopSound` and `stopAllSounds` to `Dimension` and `Player`

### `@minecraft/debug-utilities` 1.0.0-beta

- Added new Debug Drawing feature  
    - Added new classes: `DebugArrow`, `DebugBox`, `DebugCircle`, `DebugDrawer`, `DebugLine`, `DebugShape`, `DebugSphere`, `DebugText`.    
    - Added new global object for accessing and using this new feature: `debugDrawer: DebugDrawer`.
