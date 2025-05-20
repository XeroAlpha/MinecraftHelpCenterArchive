---
title: Minecraft Beta & Preview - 1.21.90.26
date: 2025-05-20T15:27:01Z
updated: 2025-05-20T15:56:17Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36757734170125-Minecraft-Beta-Preview-1-21-90-26
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-ambient-weather-sounds: ambient-weather-sounds
  user-content-blocks: blocks
  user-content-commands: commands
  user-content-editor: editor
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-items: items
  user-content-leashing-updates: leashing-updates
  user-content-sounds: sounds
  user-content-mobs: mobs
  user-content-music: music
  user-content-projectiles: projectiles
  user-content-realms: realms
  user-content-saddles-updates: saddles-updates
  user-content-removing-saddles-and-equipment: removing-saddles-and-equipment
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  h_01JVQ4TZZGMKZVRY91FEK4JNNE: mobs-1
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60: ""
  user-content-%60%40minecraft%2Fserver-admin%60: "-1"
  user-content-dedicated-server: dedicated-server
  user-content-graphics%2C-user-interface: graphics-user-interface
  user-content-gui: gui
  user-content-molang: molang
  user-content-experimental-features: experimental-features
  user-content-world-generation: world-generation
  h_01JVQ4TZZHTREBTKP8JFRT39X5: blocks-1
---

**Posted:** 20 May 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

 

It's time for another Beta & Preview! For the full list of changes and additions, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/)  , and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/) .

 

# Features and Bug Fixes

## Ambient Weather Sounds

- the_end_light_flash sound effect now triggers when the light flashes in The End dimension in Vibrant Visuals

## Blocks

- Fixed issue with Dried Ghast Block where replacing a Dried Ghast Block in the same location would keep the random tick of the old, removed block, causing it to age faster than expected
- Beacon now renders from any loaded chunk in worlds versioned 1.21.90 and higher

## Commands

- The camera `default` command will now properly reset third person camera view offset values
- The `/controlscheme` command no longer requires the "Experimental Creator Camera" toggle

## Editor

- Added 'Export' button for Vibrant Visuals Settings pane
- Added a "Save & Exit" option to the Editor File menu
- Added visibility persistence for scripted panes with unique ids
- Added an action bar menu item for Deferred Lighting settings
- Added missing toolips
- Updated Fill to log a warning message (similar to Selection Tool) when attempting to Fill when no lines or points exist in the world
- Updated the Block Picker Modal to use the currently selected block as the new block by default
- Updated the size of the drop down action selector to be a bit wider
- Updated structures list to more clearly indicate which item is selected
- Updated Menu Bar items
- Updated numerous strings for consistency and completeness
- Updated setBrushshapeOffsets to no longer double the distance being offset for brushes
- Update 'RestrictSmartFillToSelection' to false by default
- Updated shortcuts for 'Marquee' mode in Selection tool
  - Left Mouse Button + SHIFT now creates a volume from the previous origin to the mouse click
  - Left Mouse Button + CTRL now adds a new 1x1x1 volume at mouse click
- Updated Pan directions (still has an issue with smoothness)
- Updated Paste Preview to default to 'Face' Target mode instead of 'Block'
- Updated Time of Day and Weather settings to persist when exiting and re-entering a Project
- Updated UI Settings to be consolidated into a single Settings panel and removed its menu item
- Updated clicking "Restore All Defaults" in the Keyboard Settings with changed keybinds no longer crashes the game in some builds
- Updated the Line Tool to support undo/redo
- Fixed a bug where banners did not copy specific colors or patterns, but copy the default color instead
- Fixed a bug where the rotation of added blocks didn't align with selected block for Extrude expand mode
- Fixed flashing selected blocks when selecting different target positions using the smart fill tool
- Fixed a bug that caused Cancel button in Block Picker to not work
- Fixed an exception when switching modes to/from Crosshair
- Fixed Void and Flat world images for create new project
- Removed Disable Achievement screens for Editor

## Gameplay

- Fixed a bug where entities that should not be moving were moving slightly

## General

- Reenabling Overworld Chunk Blending which was disabled in the last preview

## Graphical

- Customized atmospherics, color grading, fog and lighting for the End, the Nether, the Overworld dimensions and a variety of biomes in Vibrant Visuals
  - Some issues exist with atmospherics in End and Nether dimensions.
- Recalibrated all emissive values in MERS textures in Vibrant Visuals
- Update shadow configurations for "Favors Performance" targets on all Xbox platforms in Vibrant Visuals mode
- Update Volumetric configs for "Prefers Performance" targets on Xbox One and Xbox One X in Vibrant Visuals mode
- Reduced ghosting of waterfalls from camera movement when volumetric fog is enabled in Vibrant Visuals. ([MCPE-204062](https://bugs.mojang.com/browse/MCPE/issues/MCPE-204062))
- Reduced the intensity and speed of the caustics animation in Vibrant Visuals
- The Night Vision effect now brightens the scene more consistantly across brightness settings with Vibrant Visuals enabled ([MCPE-201809](https://bugs.mojang.com/browse/MCPE-201809))
- Volumetric fog no longer becomes suddenly bright when the player moves towards a block light in Vibrant Visuals ([MCPE-201984](https://bugs.mojang.com/browse/MCPE-201984))
- The back faces of transparent items held in hand, like stained glass, are no longer visible in Vibrant Visuals
- Clouds no longer have a pink or yellow tint, during sunrise and sunset respectively, in Vibrant Visuals
- Fixed an issue where the screen would render black on Xclipse GPUs running Android 15 with Vibrant Visuals ([MCPE-203972](https://bugs.mojang.com/browse/MCPE/issues/MCPE-203972))
- Increased emissive intensity and adjusted tone mapping parameters in Vibrant Visuals
- Added henyey_greenstein_g settings to the fog json files.
  - New section `henyey_greenstein_g` allows specifying value for both `air` and `water`
  - Example:

``` hljs
{
    "format_version": "1.21.90",  
    "minecraft:fog_settings": {
        "description": {
            "identifier": "minecraft:test_henyey_greenstein_g"
        },
        "volumetric": {
            "henyey_greenstein_g": {
                "air": {
                    "henyey_greenstein_g": 0.5
                }
            }
        }
    }
}
```

- Updated the clouds texture

- Items equiped in off-hand will no longer be displaced when the game is paused. ([MCPE-190716](https://bugs.mojang.com/browse/MCPE-190716))

- Fix inconsistent cloud rendering during split-screen gameplay ([MCPE-188934](https://bugs.mojang.com/browse/MCPE-188934))

- Fixed an issue with `0` being incorrectly discarded on the `g` and `a` values of `on_fire_color` inside render controllers. This caused entities like the Ghast's fireballs to be tinted green. ([MCPE-218297](https://bugs.mojang.com/browse/MCPE-218297))

## Items

- The size of the Blaze and Breeze spawn eggs has been reduced to better match the mobs’ in-game size ([MCPE-217634](https://bugs.mojang.com/browse/MCPE-217634))
- Fixed inconsistent pixels on the Pale Oak Boat and Pale Oak Boat with Chest items to match other boat items
- The Green Harness item no longer uses the Gray Harness texture when Vibrant Visuals is enabled

## Leashing Updates

### Sounds

- Leashing, unleashing, collecting leashed mobs, and leashing mobs to other mobs now play custom sounds
- Fence knots now play a sound when destroyed, either by being punched or when all their leashed entities are gone ([MCPE-68841](https://bugs.mojang.com/browse/MCPE-68841))

## Mobs

- The visual size of the Happy Ghast has been slightly reduced to prevent z-fighting with water and other adjacent blocks
  - This change is purely visual and does not affect the Happy Ghast's collision
- Happy Ghast and Ghastlings no longer z-fight with adjacent blocks
- Mobs and players no longer float above their rides ([MCPE-172657](https://bugs.mojang.com/browse/MCPE-172657))
- Mobs' and players' legs are now positioned more horizontally when riding, reducing clipping into the ridden entity
- Ghastlings are no longer rotated sideways when riding Boats or Chest Boats
- Happy Ghast and Ghast shadows are no longer cast on their tentacles when Fancy Graphics are enabled
- Ropes wrapping a Happy Ghast are now rendered when certain entities are attached to it and it is harnessed
- Cows and Mooshrooms no longer render with four ropes when leashed to a Happy Ghast
- The size of a harnessed Happy Ghast (including the harness) now matches that of an unharnessed one ([MCPE-218740](https://bugs.mojang.com/browse/MCPE-218740))
- Happy Ghast now immediately loses its ability to collide with entities upon death
- Ghasts can no longer spawn in areas that are too small, preventing suffocation on spawn
- The Wandering Trader now properly hold leashes between its hands ([MCPE-219598](https://bugs.mojang.com/browse/MCPE-219598))
- The Ghastling model is now slightly smaller than before and closer in size to its collision box, though the two still differ
  - The model is intentionally smaller than the collision to prevent z-fighting
  - This is intentionally not in parity with Java, which doesn't require this workaround
- Spiders and Cave Spiders can once again spawn with a Stray rider in cold biomes ([MCPE-89549](https://bugs.mojang.com/browse/MCPE-89549))
- Spiders and Cave Spiders can once again spawn with a Wither Skeleton rider in the Nether ([MCPE-89549](https://bugs.mojang.com/browse/MCPE-89549))
- Horses, Donkeys, and Mules can now be fed carrots to heal, grow, and improve their temper
- Large entities attached by a Leash to the Happy Ghast now properly render with four leashes when using simple graphics

## Music

- Music will now fade normally when leaving a world if game pause is disabled. ([MCPE-212932](https://bugs.mojang.com/browse/MCPE-212932))

## Projectiles

- Projectiles now have a tolerance margin that changes over time ([MCPE-201608](https://bugs.mojang.com/browse/MCPE-201608))
  - Previously, all projectiles had a fixed 0.3 blocks tolerance margin added to the collision
  - Now, all projectiles start with no margin for the first two ticks of their flight
  - After that, the target margin will expand by 0.05 blocks per tick until it reaches the target margin of 0.3 blocks
  - This allows for more precise collision on targets close to the shooting player or entity, while still allowing for some collision leeway for targets further away

## Realms

- Realm owners can now choose to require members to opt into the Timeline in order to play on the Realm
  - To turn this feature on, go to Realms Stories --\> Settings and enable "Require opt in to Timeline"
    - The feature can be turned on and off at will
  - While the feature is on, Realm members who have not opted in will remain members of the Realm, but will not be able to play until they opt in
    - If a Realm member who previously opted in chooses to opt out, they will not be able to play on the Realm until they opt in again
  - Realm owners will be able to play on the Realm regardless of whether they have opted in

## Saddles Updates

### Removing Saddles and Equipment

- Removing saddles, horse armor, harnesses, and carpets using shears now plays custom sounds

## User Interface

- Player Dots on the Locator Bar now move smoothly when there is a large distance between Players ([MCPE-217551](https://bugs.mojang.com/browse/MCPE-217551))
- The Player Dot now correctly decreases to the smallest size for the stationary Player when another Player moves linearly away from them
- The animated up and down arrows on the Locator Bar have been repositioned to be closer to the Player Dot
- Closing an Anvil or an Enchanting Table now results in the Experience Bar being shown for 5 seconds instead of the Locator Bar
- Fixed an issue where some on-screen UI elements would let the user interact with the world under them
- While using the "Joystick & tap to interact" touch mode, the "Joystick Visibility Option" is now forced into "Visible Joystick" while using the player_relative_strafe or camera_relative_strafe control scheme
- Storage settings page is now scrollable ([MCPE-187962](https://bugs.mojang.com/browse/MCPE-187962))
- Fixed a bug where keyboard button hints would be shown on the death screen ([MCPE-218652](https://bugs.mojang.com/browse/MCPE-218652))

## Vanilla Parity

### Mobs

- Boats are now able to be pulled out of water using a lead

# Technical Updates

## API

### `@minecraft/server`

- Added `localizationKey` read only property to `Dimension`, which is the key for localization of a dimension's name used in language files.
- Added `EntityHungerComponent`, `EntitySaturationComponent`, `EntityExhaustionComponent` that allows read and write access to Hunger, Saturation, and Exhaustion values on `player` objects
- Added `totalArmor` and `totalToughness` read only properties to `EntityEquippableComponent`
- `BlockMovableComponent` APIs have been added to beta
  - `BlockMovableComponent::movementType`
  - `BlockMovableComponent::stickyType`
- Renamed `CameraEaseOptions` to just `EaseOptions` to for `V2.0` scripting
- Fixed a bug where the `includeLiquidBlocks` property on `BlockRaycastOptions` would not correctly result in hits on Flowing water  
  This affects the following API methods in all versions:
  - `entity.getBlockFromViewDirection`, `dimension.getBlockFromRay`,
  - `dimension.getBlockBelow` & `dimension.getBlockAbove`.
- Improved the naming used for the `name` property of several custom error classes
- Block custom component event `beforeOnPlayerPlace` is now called when an item using `replace_block_item` is set to true for V2.0.0 and higher custom components
  - In 2.0.0, when using `setCurrentValue` of an `EntityAttributeComponent`, the desired value is checked against the `effectiveMin` and `effectiveMax`. If the value is out of bounds, an error is thrown.
- Enabled `Player.applyImpulse` and `Player.clearVelocity` in `beta`, which no longer throw errors

### `@minecraft/server-admin`

- Updated `transferPlayer` to support NetherNet transfers. It now takes either a hostname/port combination or a NetherNet ID.

## Dedicated Server

- Exposed a new parameter for dedicated server to disallow usage of Vibrant Visuals while connected

## Graphics, User Interface

- Add warning pop-up for some android devices when switching to vibrant visuals graphics mode
- Added a toggle to Video Settings to enable In Game Graphics Mode Switching. Enabling In Game Graphics Mode Switching may impact texture quality

## GUI

- Fixed a crash when adding or changing priority of resource packs in the Create New World screen

## Molang

- Added the query.is_riding_any_entity_of_type Molang query, which checks whether an entity is riding another entity of any specified type

# Experimental Features

## World Generation

- Terrain Matching Jigsaw Template pools will no longer create floating islands
- Namespaces can now be used in Template Pool element location and Jigsaw Block identifiers

## Blocks

- Added `minecraft:movable` component under the Upcoming Creator Features toggle. This allows for blocks to configure how they should react when moved by a piston
  - "movement_type" (Required): Specifies how the block should react when moved by a piston
    - "push_pull": Will allow a block to be pushed by a piston/sticky piston and pulled by a sticky piston (e.g. Grass)
    - "push": Will allow a block to be pushed by a piston/sticky piston (e.g. Glazed Terra Cotta)
    - "immovable": Will not allow a block to be pushed or pulled by a piston/sticky piston (e.g. Bedrock)
    - "popped": Will pop a block when pushed by a piston/sticky piston (e.g. Leaves)
  - "sticky" (Optional): Specifies how the block should handle adjacent blocks when moved by a piston
    - "none": Default. Will not add any additional behavior
    - "same": Will move adjacent blocks along with it when moved by a piston. It will not move different blocks with "sticky": "same" (e.g. A Honey Block can move another Honey Block but not a Slime Block.)
      - NOTE: This field only works when used with "movement_type": "push_pull"  
        "format_version": "1.21.90",  
        "minecraft:movable": {  
        "movement_type": "push_pull",  
        "sticky": "same"
