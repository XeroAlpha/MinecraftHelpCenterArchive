---
title: Minecraft Beta & Preview - 26.60.28
date: 2026-09-22T15:04:38Z
updated: 2026-09-22T16:05:44Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49076913532557-Minecraft-Beta-Preview-26-60-28
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 22 September 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

**Please note:** There may be a delay on the Android Beta this week. Thank you for your understanding and we apologise for any inconvenience.

# Features and Bug Fixes

## Accessibility Features

- Fixing border focus issues on medium sized realm stories
- Fixing text blocks below What are Realms? section on Realms PDP not being enumerated
- Extra Large UI now returns to the default GUI scale when disabled

## Accounts

- Fixed silent Xbox Live sign-in hanging indefinitely by adding a timeout that surfaces a network error

## Blocks

- Fixed Hoppers and other containers losing their items when replaced using the `/fill` or `/setblock` commands
- Fixed Redstone not visually connecting properly to custom blocks with a Redstone producer component ([MCPE-242204](https://bugs.mojang.com/browse/MCPE-242204))
- Red and Brown Mushrooms now require central block support

## Marketplace

- Fixed a bug where declining to purchase a missing Marketplace pack could leave players stuck in an error loop
- Improved frame time of subcategory piece screens

## Gameplay

- The HUD now correctly shows an effect when a weaker but longer duration effect resumes after a stronger but shorter effect of the same type expires ([MCPE-242400](https://bugs.mojang.com/browse/MCPE-242400))
- When dismounting a Strider the passenger will be dismounted onto a block in the location where the passenger is looking on a block that is not Lava and one block away ([MCPE-175573](https://bugs.mojang.com/browse/MCPE-175573))

## Graphical

- Fixed Character Creator items and custom skin layers, such as outerwear, footwear, leggings, socks, and belts, not being hidden underneath equipped armor
- Corrected detection of cube-map array texture support on older Windows graphics hardware
- Character Creator skins now consistently use the matching level-of-detail texture after changing profiles

## Input

- Improve cursor movement while scrolling

## Mobs

- Fixed an issue where Sheep would get stuck in their grazing animation

## Realms

- Added a flow to the Realms Tab that allows for players to set up Realms for unused subscriptions (dangling entitlements)
- Removed remaining days section from Realms Hub \> Subscription Tab because days can be inconsistent with actual renewal date.

### Realms Hub

- Fixed potential softlock when unblocking player in ore-ui invite members screen
- Changed members search bar to update results as user types

## Stability and Performance

- Fixed a crash that could occur when loading malformed resource archives
- Fixed a crash when trying to render too many hearts on the HUD

## User Interface

- Fixed Show More Button in Classic Skins "Get More" and "Marketplace Pass" lists not hiding after loading all offer list
- Fixed a bug where profile stats loaded indefinitely on the achievements page when accessed through the in-game pause menu ([MCPE-239946](https://bugs.mojang.com/browse/MCPE-239946))
- Returning from a failed server join now preserves navigation back to the Servers tab instead of skipping to the main menu ([MCPE-242417](https://bugs.mojang.com/browse/MCPE-242417))
- Added reusable responsive pagination utilities for Marketplace layouts
- Improved Wishlist pagination and alignment across different screen widths

# Technical Updates

## API

- Fixed issue where onBreak API event would not trigger when a custom block with a filter component loses support and breaks ([MCPE-240755](https://bugs.mojang.com/browse/MCPE-240755))
- Released `EntityIsTamedComponent.tamedToPlayer` and `EntityIsTamedComponent.tamedToPlayerId` from beta to stable in `@minecraft/server` v2.11.0
- Shulker Box items now return a valid `ItemInventoryComponent`.
- Renamed `PoiBlockType.has` to `PoiBlockType.hasTag` in `beta`

### Jigsaw Structures

- Added the optional `on_placed` property to Jigsaw Structure definitions for specifying a callback to run after the structure is placed in the world (A creator exposed interface is still indevelopment)

### Pack Settings

- Multiselect pack settings now render their name above the dropdown selection UI element. The dropdown selection now shows the currently selected elements of the multiselect setting

### SoundInstance

- `setVolume` and `fade` treat volume as a multiplier of the sound definition's volume rather than replacing it
- Fixed `fade` not fading in from silence unless the volume was also set after the call
- Fixed `setVolume` and `fade` being ignored when called before the sound finished loading
- Fixed `fade` jumping to the previous target volume when called again before an earlier fade finished

## Blocks

- `n_way_visual_rotation` states now properly synchronize from host to client in multiplayer worlds
- Restore support for boolean bone visibility fields in geometry component ([MCPE-238524](https://bugs.mojang.com/browse/MCPE-238524))

## Editor

- Fixed a performance issue where adding markers to the minimap caused the frame rate to drop
- Fixed an issue where creating an Editor project with cheats enabled would disable cheats upon loading into the world (and wouldn't persist between sessions when manually re-enabled)
- Added the ability to skip any Tutorial step

### Mobs

- Added missing animations `riding.body` and `baby_zombie_attack_bare_hand` to the legacy `minecraft:zombie_villager` entity
- Fixed a bug where changing the Custom Time value causes the sky to flicker between Day and the custom time.

## Features

- Added dedicated server properties for configuring persistent and transient ticking area limits, including unlimited settings

## Gameplay

- Added dismount mode "look_direction" that dismounts in the looking direction of the passenger to a neighboring block that is not Lava
- Added new server authoritative system "ExitVehicleLookDirectionSystem" to handle the dismount_mode "look_direction"
- The `minecraft:clouds` component in custom dimension JSON now accepts any cloud height across the full -512 to 512 dimension band, instead of being limited to the default Overworld range of -64 to 320 ([MCPE-242282](https://bugs.mojang.com/browse/MCPE-242282))
- Loading a custom dimension JSON file no longer logs a spurious content warning claiming `format_version` is not present in the schema

## JSON UI

- Invalid JSON UI expressions will now emit a content error instead of failing silently.

## Stability and Performance

- Improve performance of split screen on Switch 2

# Experimental Technical Updates

## API

- Added the `minecraft:entity_storage` block component behind `beta`
  - It is only present on blocks defined with a `minecraft:block_entity` component with `entity_storage` set to `true`
  - It provides the methods `store`, `transfer`, `release`, `getEntities` and `size`
  - Up to 4 entities can be stored in a single block
  - Storage and API is compartmentalized per content pack, but the 4 entities limit applies globally

## Blocks

`minecraft:collision_box` will no longer accept single box objects from v1.26.60 onwards in favor of only using arrays. For example, this component...

```
{
  "format_version": "1.26.20",
  "minecraft:block": {
    "description": {
      "identifier": "test:block_v1_26_20",
    },
    "components": {
      "minecraft:collision_box": {
          "origin": [ 0, 0, 0 ],
          "size":  [16, 24, 16]
        }
    }
  }
}
```

... needs to be transformed into this format:

```
{
  "format_version": "1.26.60",
  "minecraft:block": {
    "description": {
      "identifier": "test:block_v1_26_60",
    },
    "components": {
      "minecraft:collision_box": [
        {
          "origin": [ 0, 0, 0 ],
          "size":  [16, 24, 16]
        }
      ]
    }
  }
}
```

- `minecraft:collision_box` now supports min/max coordinates in addition to origin/size with the "Upcoming Creator Features" experiment toggled.
- The engine will upgrade any `origin`/`size` coordinates into `min`/`max` internally.

```
{
  "format_version": "1.26.60",
  "minecraft:block": {
    "description": {
      "identifier": "test:block_v1_26_60"
    },
    "components": {
      "minecraft:collision_box": [
        {
          "min": [ 4, 0, 0 ],
          "max":  [16, 24, 8]
        }
      ]
    }
  }
}
```

- Added a new boolean field `entity_storage` inside the `minecraft:block_entity` component, only supported with `Experimental Upcoming Creator Features` toggled ON

#### Coordinate System Differences

<figure class="wysiwyg-table wysiwyg-table-align-left">
<table style="border-collapse: collapse; margin-bottom: 0.7em;" dir="auto" data-line="172">
<thead dir="auto" data-line="172">
<tr dir="auto" data-line="172">
<th style="text-align: left; padding: 5px 10px;"> </th>
<th style="text-align: left; padding: 5px 10px;">Origin/Size</th>
<th style="text-align: left; padding: 5px 10px;">Min/Max</th>
</tr>
</thead>
<tbody dir="auto" data-line="174">
<tr dir="auto" data-line="174">
<td style="border-color: rgba(255, 255, 255, 0.18); padding: 5px 10px">Reference point <code>[0, 0, 0]</code></td>
<td style="border-color: rgba(255, 255, 255, 0.18); padding: 5px 10px">Bottom-middle on the front of the block</td>
<td style="border-color: rgba(255, 255, 255, 0.18); padding: 5px 10px">Bottom-left corner on the front of the block</td>
</tr>
<tr dir="auto" data-line="175">
<td style="padding: 5px 10px">X and Z coordinate range</td>
<td style="padding: 5px 10px"><code>-8</code> to <code>8</code></td>
<td style="padding: 5px 10px"><code>0</code> to <code>16</code></td>
</tr>
<tr dir="auto" data-line="176">
<td style="padding: 5px 10px">Y coordinate range</td>
<td style="padding: 5px 10px"><code>0</code> to <code>24</code></td>
<td style="padding: 5px 10px"><code>0</code> to <code>24</code></td>
</tr>
<tr dir="auto" data-line="177">
<td style="padding: 5px 10px">X-axis direction</td>
<td style="padding: 5px 10px">Mirrored, follows geometry system</td>
<td style="padding: 5px 10px">Not mirrored, follows voxel shape system</td>
</tr>
</tbody>
</table>
</figure>

#### Manual Conversion

1.  Center `origin` by shifting the original X and Z values by +8.
2.  Add `size` to the adjusted origin, normalize the results, and calculate the `min` and `max` points between both corners.
3.  The last step is to mirror both points on the X axis. a. Take the maximum X value from `min` and subtract it from 16. b. Take the minimum X value from `max` point and subtract it from 16.

```
origin = [-8, 0, -8]
size = [12, 24, 8]
adjustedOrigin = origin + [8, 0, 8] = [0, 0, 0]
tempMin = min(adjustedOrigin, adjustedOrigin + size) = [0, 0, 0]
tempMax = max(adjustedOrigin, adjustedOrigin + size) = [12, 24, 8]
min = [16 - tempMax.x, tempMin.y, tempMin.z] = [4, 0, 0]
max = [16 - tempMin.x, tempMax.y, tempMax.z] = [16, 24, 8]
```

To verify the conversion, check that subtracting `min` from `max` equals the absolute value of the original `size` on each axis.

## Graphical

- Under the RenderDragon Features for Creators Experiment:
  - Improved point light ranking
  - Introduced a system that inversely phases out block lighting when point lights phase in
