---
title: Minecraft Beta & Preview - 1.21.90.23
date: 2025-05-07T12:45:03Z
updated: 2025-05-08T10:09:45Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36415388784909-Minecraft-Beta-Preview-1-21-90-23
hash:
  h_01JTNCEECNCKS6Z5W3ZBSBS3MW: ""
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-bundles: bundles
  user-content-editor: editor
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-sounds: sounds
  user-content-splash-potions: splash-potions
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  h_01JTNCA7JSJHGA4ENYG25P4TJ4: sounds-1
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60-2.0.0: "200"
  user-content-%60%40minecraft%2Fserver-ui%60: "-1"
  h_01JTNCA7JSZ8W07HW28GYM7RKC: blocks-1
  user-content-components: components
  h_01JTNCA7JS6XPN32EX9YFKM877: editor-1
  user-content-goals: goals
  user-content-items: items
  user-content-rendering-%26-animation: rendering--animation
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JTNCA7JTYQ5H4F4QB4693DBY: api-1
  user-content-%60%40minecraft%2Fserver%60-2.0.0-beta: -210-beta
  user-content-%60%40minecraft%2Fdebug-utilities%60: "-2"
  h_01JTNCA7JT7C3M2YR43P6JK2VQ: blocks-2
  h_01JTNCA7JTGGASG9JCJ05Y325E: editor-2
  user-content-experimental: experimental
  h_01JTNCA7JTHH1R6NXTDA0C2DH2: gameplay-1
  h_01JTNCA7JTV5Z0Q6Z57BVW31F3: user-interface-1
---

**Posted:** 7 May 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![r21U9_3_nether_enderman.jpg](https://feedback.minecraft.net/hc/article_attachments/36415388782733)

  
It's time for another Beta & Preview! For the full list of changes and additions, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

####  

# Features and Bug Fixes

## Blocks

- Harness is no longer invisible on a Happy Ghast when equipped by a Dispenser

## Bundles

- Empty open Bundle icon now renders correctly when Bundles are tapped with Touch Controls

## Editor

- Marking read only structures for deletion along with editable ones no longer disables the delete button
- Saving a large structure from a selection on the Structure Panel no longer makes the game unresponsive

## Gameplay

- Fixed projectiles not being fired in the correct direction when using custom cameras and touch input
- Fixed issue where sprint jump attacking would sometimes remove all of the player's momentum ([MCPE-189501](https://bugs.mojang.com/browse/MCPE-189501))
- Fixed stop sprinting while swimming when the player hits blocks ([MCPE-201832](https://bugs.mojang.com/browse/MCPE-201832))
- Using a custom equippable block item in creative mode will no longer duplicate the item and equip it; it will simply place the block in the world

## Graphical

- Updated a variety of MERS textures in Vibrant Visuals
  - Made Glass Blocks more reflective
  - Tweaked metallics on Cauldrons and Ancient Debris
  - Tweaked emissives on Eyeblossom
  - Fixed an issue with Leather armor having a stripe of emissive across the texture
  - Added emissive to the Ender Crystal Block to match item icon
  - Added MERS textures for Happy Ghast and Harnesses
  - Adjusted the Glow Lichen block emissive
- Fixed a z-fighting issue between water and leaf blocks in Vibrant Visuals
- Fixed an issue where Vibrant Visuals would sometimes apply to worlds that do not correctly support it
- Improved Snell's window effect when looking up from underwater in Vibrant Visuals
- Particles using the "particles_blend" material now render correctly in Vibrant Visuals ([MCPE-217768](https://bugs.mojang.com/browse/MCPE-217768))
- Fixed Enderman held blocks not being shaded correctly in Vibrant Visuals
- Reflections no longer cut out abruptly on the left side of screen while moving the camera in Vibrant Visuals ([MCPE-201679](https://bugs.mojang.com/browse/MCPE-201679))
- Reflections no longer flicker aggressively on water with higher FOV settings in Vibrant Visuals ([MCPE-206924](https://bugs.mojang.com/browse/MCPE-206924))
- Clouds no longer contain cracks when viewed up close in Vibrant Visuals ([MCPE-212409](https://bugs.mojang.com/browse/MCPE-212409))
- The End flash is now visible again in the End in Vibrant Visuals
- Fixed an issue with moving blocks (e.g. blocks held by Endermen, TNT inside of minecarts) not casting shadows in Vibrant Visuals
- Fixed an issue where textures would turn pink when opening settings or suspending the game in Vibrant Visuals ([MCPE-200698](https://bugs.mojang.com/browse/MCPE/issues/MCPE-200698))

## Mobs

- Fixed a crash happening on PS5 when loading a world with leashed entities
- Fixed bug where Ghasts could not move while shooting fireballs ([MCPE-201849](https://bugs.mojang.com/browse/MCPE-201849))
- Slimes and Magma Cubes no longer jump twice when finding or losing their targets ([MCPE-114701](https://bugs.mojang.com/browse/MCPE-114701))
- Fixed a bug where Magma Cubes and Slimes could still damage players briefly after dying ([MCPE-166394](https://bugs.mojang.com/browse/MCPE-166394))

## Sounds

- Fixed a bug where Parrots imitating a Drowned used Zombie sounds
- Fixed a bug where Parrots imitating a Wither Skeleton used Skeleton sounds ([MCPE-174857](https://bugs.mojang.com/browse/MCPE-174857))

## Splash Potions

- The effect radius of Splash Potions is now calculated based on the distance to the bounding box of the target instead of their position ([MCPE-201604](https://bugs.mojang.com/browse/MCPE-201604))

## User Interface

- The Locator Bar has been de-experimentified and is now available in non-experimental worlds
- Splitting an item stack using touch controls and moving it to a bundle now transfers the selected amount ([MCPE-188353](https://bugs.mojang.com/browse/MCPE-188353))
- The Text Background Opacity accessibility setting now also affects hotbar tooltips and leaderboard displays. ([MCPE-79331](https://bugs.mojang.com/browse/MCPE-79331))
- Chat background opacity can now be controlled with a new accessibility setting

## Vanilla Parity

### Sounds

- Parrots now imitate nearby monsters less frequently ([MCPE-80319](https://bugs.mojang.com/browse/MCPE-80319))

# Technical Updates

## API

### `@minecraft/server` 2.0.0

- Released `getBlockBelow` and `getBlockAbove` on `Dimension` to 2.0.0.
- Changed `players` property on `PlayAnimationOptions` to an array of Player objects, instead of string names in 2.0.0.
- Changed the following APIs to use the local coordinates on a unit cube rather than the world coordinates for 2.0.0. JIRA: ([MCPE-216825](https://bugs.mojang.com/browse/MCPE-216825))  
    - Example: The location `{ x: 123.123, y: -22.44, z: -400.678 }` will now be `{ x: 0.123, y: 0.44, z: 0.678 }`    
    - `BlockRaycastHit.faceLocation`    
    - `BlockHitInformation.faceLocation`    
    - `BlockComponentPlayerInteractEvent.faceLocation`    
    - `PlayerPlaceBlockBeforeEvent.faceLocation`    
    - `ItemUseOnAfterEvent.faceLocation`    
    - `ItemComponentUseOnEvent.faceLocation`    
    - `PlayerInteractWithBlockAfterEvent.faceLocation`    
    - `PlayerInteractWithBlockBeforeEvent.faceLocation`
- Released error `ContainerRulesError` to `2.0.0`
- Removed `CameraDefaultOptions` for `V2.0`
  - Added `setDefaultCamera(cameraPreset: string, easeOptions?: CameraEaseOptions): void` to `V2.0`. This will replace passing the `CameraDefaultOptions` into the `Camera.setCamera` function. Will also now reset the position and rotation of third-person cameras back to the values defined in the JSON

### `@minecraft/server-ui`

- Fixed bug where sliders move super fast when using gamepad. Added a timeout to avoid this problem.

## Blocks

- Fixed crash when blocks that specify non-existent textures as carried_textures are held in hand

## Components

- Added validation for asset references in particle effect Json
  - texture reference in "basic_render_parameters"
  - block references in "minecraft:particle_expire_if_in_blocks"
  - block references in "minecraft:particle_expire_if_not_in_blocks"

## Editor

- Added Block Inspector "Reset Block Data" button to reset the block states to all defaults
- Added a hollow trim action to selection. This converts the current selection volume to a new volume which represents all of the fully obscured non-air blocks (i.e. generate a selection which represents the inside of any shape inside the current selection)
- Added Color Timeline API (IColorTimelinePropertyItem). The Color Timeline uses one dimensional graph to represent color interpolation over time
- Added Number Timeline API (INumberTimelinePropertyItem). The Number Timeline uses two dimensional graph to represent linear interpolation between two nodes over time  
  The two new APIs can be used in the Editor AGFX settings
- Added ability to specify a tooltip to the editor menu items
- Added ability to append an icon to the editor menu action items
- Added optional property `uniqueId` in `IPropertyPaneOptions` API to create panes with unique identifiers
- Updated Line Tool Functionality
  - Updated UI, added tooltip labels and quick action buttons
  - Ability to make lines with multiple points/segments instead of just one line between two points
  - Ability to adjust thickness (weights) of the lines
  - Ability to nudge lines in any direction by 1 block
  - Ability to convert current lines into a selection volume (clears all lines after)
  - Most Line Tool actions now undo/redo-able
  - Ability to select all/none points so they can all be moved at once
  - Line algorithm dropdown now updates live and applies to all (and new) points
  - Line Tool Mouse Controls
    - Left-click to create a 'connected' control point (creates a line segment between the previous point and the new point)
    - Ctrl+Left-click to create a separated, 'disconnected' control point (no line segment is created between the previous point and the new point)
  - Line Tool Hotkeys
    - Nudge Selected Points (Ctrl+Shift + Up/Down/Left/Right/PgUp/PgDown)
    - Convert to Selection (Alt+S)
    - Toggle Select All (Ctrl+A)
    - Fill (Ctrl+F)
    - Delete Blocks (ie., Fill with Air) (Del)
    - Clear All Points (Ctrl+Backspace)
    - Clear Selected Points (Ctrl+Shift+Backspace)
    - Increase/decrease Horizontal Line Thickness (Shift + Left/Right)
    - Increase/decrease Vertical Line Thickness (Shift + Up/Down)
    - Increase/decrease Uniform Line Thickness (when Uniform is enabled) (Shift + Left/Right/Up/Down)
- Updated BlockLine implementation (now BlockShapes)
- Updated water parameters to be available and modified in the Deferred Lighting Settings window again
- Fixes begin transaction error when selecting a selection point outside the maximum volume size
- Updated Block Inspector "Refresh Block Data" button logic to update the pane with the current block state
- Fix a bug where a player could incorrectly load another player's hotbar setting in a multiplayer session after re-entering a game
- Fixing bug where the ladder could be interacted with using the workbench tool
- Fixed a bug where the export directory location was incorrect in the log panel
- Fixed a bug that caused `show` function of `IRootPropertyPane` to not display the panel
- Fixed a bug where the Export Pane weather cycle setting was being set incorrectly

## Goals

- "minecraft:rideable" component's "dismount_mode" is now correctly applied when passengers are forced to dismount by the "minecraft:behavior.float" goal

## Items

- Fix for incorrect normals and/or crashes when holding certain items in hand with Vibrant Visuals enabled

## Rendering & Animation

- Fixed an issue where entities are rendering and animating twice.

# Experimental Technical Updates

## API

- Updated error messaging when imports can't be found
- Removed content warning when a custom component was registered without closures for custom components V2
  - This allows 'data-only' components to be registered in script and added to blocks and items that only contain parameters without functionality

### `@minecraft/server` 2.1.0-beta

- Added enum `ContainerRulesErrorReason` to `beta`. Contains the reasons that `ContainerRulesError` can fail
- Added interface `ContainerRules` to `beta`. Contains rules that if broken on container operations will throw a `ContainerRulesError`
- `Container`
  - Added optional property `readonly containerRules?: ContainerRules` to `beta`. If the rules of the container are broken will throw a `ContainerRulesError`
  - Added property `readonly weight: number` to `beta`. The total weight of all `ItemStacks` in the container
- `ItemStack`
  - Added property `readonly weight: number` to `beta`. The total weight all the items in the `ItemStack`
- Added class `ItemInventoryComponent` to `beta`. This component will be on all items that contain a `minecraft:storage_item` component and will allow access to its container

### `@minecraft/debug-utilities`

- Fixed a crash with the Debug Drawing system after using the /reload command.
- Fixed an issue where Debug Drawing primitives wouldn't be visible after using the /reload command.
- Fixed an issue where Debug Drawing primitives wouldn't be visible for new players joining the world.

## Blocks

- Added `minecraft:random_offset` component under the Upcoming Creator Features toggle. This allows for blocks to randomly offset like foliage does in the Vanilla game  
  Example:

``` hljs
{  
    "format_version": "1.21.80",
    "minecraft:block": {
       "description": {
          "identifier": "test:test_block"
       },
       "components": {
          "minecraft:collision_box": {
             "origin": [-4.0, 4.0, -4.0],
             "size": [8, 8, 8]
          },
          "minecraft:random_offset": {
             "x": {
                // This is the range of possible values we can pick from
                "range": {
                   "min": -4,
                   "max": 4
                },
                // This is the equally spaced steps across the given range 
                // Provide 0 for all possible values in the range
                "steps": 16
             },
             "y": {
                "range": {
                   "min": -4,
                   "max": 4
                },
                "steps": 16
             },
             "z": {
                "range": {
                   "min": -4,
                   "max": 4
                },
                "steps": 16
             }
          }
       }
    }
```

## Editor

- Client Widgets (Entity Components) no longer assert when going into the game menu while in Editor

## Experimental

- The `/controlscheme` command no longer requires the "Experimental Creator Camera" toggle
  - The `camera_relative_strafe` control scheme remains experimental and still requires the toggle

## Gameplay

- Fixed the minecraft:follow_orbit camera not having the correct control scheme in its allow list

## User Interface

- The touch screen d-pad control now shows the correct buttons when using camera relative control schemes
