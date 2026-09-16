---
title: Minecraft Beta & Preview - 26.60.24
date: 2026-09-16T14:19:14Z
updated: 2026-09-16T15:51:50Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48940953884173-Minecraft-Beta-Preview-26-60-24
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  commerce-experiences: dressing-room
  entity-components-1: entity-components
---

**Posted:** 16 September 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

**Please note:** Due to unexpected build issues, the Preview will not be available on iOS or PlayStation this week. Thank you for your understanding and we apologise for any inconvenience.

# Features and Bug Fixes

## Accessibility

- Screen narration now pauses between each bullet point in Realms Plan Picker details
- Progress bars now have a minimum of 3:1 non-text contrast ratio against the default menu background

## Blocks

- When placing blocks at the height limit the game no longer spams error messages

## Dressing Room

- Imported custom skins are no longer reset to a default skin after relaunching the game ([MCPE-241720](https://bugs.mojang.com/browse/MCPE-241720))

## Gameplay

- Fixed camera height when sleeping in a Straw Bed ([MCPE-240511](https://bugs.mojang.com/browse/MCPE-240511))

## Graphical

- Fix resource packs and fog command not affecting fog start and end distance when the Ender Dragon  is dead or far away. The fog start and end are still overridden when the Dragon is alive and nearby. ([MCPE-239959](https://bugs.mojang.com/browse/MCPE-239959))
- Fade in sky when night vision and blindness are both active
- Fix texture of Minecarts with Hopppers in ray-traced graphics ([MCPE-240625](https://bugs.mojang.com/browse/MCPE-240625))

## Input

- Fixed an issue for Switch where wireless controllers would not be usable on the world selection screen after leaving a world ([MCPE-241768](https://bugs.mojang.com/browse/MCPE-241768))

## Mobs

- Armor Stands now correctly reject invalid equipment swaps and swap equipped items directly with items held by players
- Tamed baby mobs can now be healed by feeding them food when they are damaged ([MCPE-239455](https://bugs.mojang.com/browse/MCPE-239455))

## Realms

- It's now faster to add members with search from the Members screen.
- The Members screen now shows 'Recommended' friends.
- Added applied packs list to Realms hub world tab for player view
- Updated admin log invite player action text
- Added player list loading modal to roles and permissions screen
- Fixed issue where user could see themselves as admin in the members list but their actions wouldn't update until leaving and re-entering realm hub

## Stability and Performance

- Reduced stutter associated with mobs and items across multiple play sessions ([MCPE-241707](https://bugs.mojang.com/browse/MCPE-241707))
- Fixed a crash that could occur when loading a world containing large, densely connected structures of blocks such as fences, glass panes, iron bars, or walls ([MCPE-242312](https://bugs.mojang.com/browse/MCPE-242312))
- Improved stability for Nintendo Switch devices connected to a network

## User Interface

- Improves screen reader context readout when exiting text fields
- Fixed missing label narration for toggles, sliders, input binding and button panels in Settings
- Tag Panel in PDP Description now enabled even for items that don't have Subgenre or PlayerCount (Addons, Skins, Textures)
- Graphics mode buttons remain responsive after switching to Vibrant Visuals and adjusting brightness
- Fixed Arcana glyphs not appearing in Enchanting Table slots
- The Gift button no longer appears for free, unobtainable, or default content ([MCPE-242293](https://bugs.mojang.com/browse/MCPE-242293))
- Fixed unreadable text in resource packs using legacy custom bitmap fonts, including The Ultimate Survival World ([MCPE-242277](https://bugs.mojang.com/browse/MCPE-242277))
- The Inbox now finishes loading when categories arrive after the page opens
- Vietnamese and Lao combining marks now render without extra spacing or unwanted dotted circles

# Technical Updates

## AI Components

- Made schemas for `minecraft:rideable` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.
  - `seats` field has changed to only accept an array format
- Made schemas for the following components stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.
  - `minecraft:dash_action`
  - `minecraft:rail_movement`
  - `minecraft:scale_by_age`

## API

- Released `SoundInstance.setVolume`, `SoundInstance.setPitch`, `SoundInstance.fade`, `SoundInstance.seekTo`, `SoundInstance.pause`, and `SoundInstance.resume` from beta to scripts version `2.11.0`
- Released the `loopCount` option on `PlayerSoundOptions` and `WorldSoundOptions` from beta to scripts version `2.11.0`
- Infinitely-looping sounds (`loopCount: -1`) stop automatically when the last `SoundInstance` reference is dropped; retain the handle to keep the sound playing
- Released server sound definitions from beta with format version `1.26.60`
- The field `trunk_width` in `mega_trunk` now accepts int ranges, making it possible to configure trees to have varying thicknesses. Old configurations are still supported and will give the same behavior as previously
- Examples: `"trunk_width": [2, 3]`, `"trunk_width" : { "range_min": 2, "range_max": 3}`

### WidgetComponentGizmo

- Added `WidgetComponentGizmo.rotation`, which exposes the gizmo's rotation rings as a `WidgetGizmoRotation`
- Added rotation configuration on `WidgetGizmoRotation`: the enabled rotation axes, the rotation origin offset, a preferred ring radius, and a visual-only step
- Added rotation lifecycle events through `WidgetGizmoRotation.setStateChangeEvent`, which report grabbed, moved, released, and cancelled rotations in degrees with their source widget and component

\##Blocks

- `minecraft:collision_box` will no longer accept single box objects from v1.26.60 onwards in favor of only using arrays. For example, this component...

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

## Editor

- Fixed the Uniform Length slider for Cuboid primitives to stop at the maximum placeable size
- Fixed a bug that cause UI navigation and narration to not work for scripted panels
- Added a rotation ring to Paste Preview Compose mode, which rotates the preview in 90 degree steps
- Recentered Paste Preview when entering Compose mode and moved Position controls into Placement Settings
- Added a rotation ring to Selection Move mode, which rotates the selection contents in 90 degree steps
- Added rotation rings to the Custom Mesh and Shape tools, which rotate the preview freely on the X, Y and Z axes
- Adding the first keyframe in the Cinematic tool now creates a whole camera seeded with four keyframes, and deleting keyframes that would leave fewer than four now offers to delete the camera instead
- Duplicated keyframes now land on the nearest free timestamp instead of stacking on the source keyframe's time
- Fixed keyframe widgets and spline preview dots being placed outside the world height limits
- Selecting a keyframe in the timeline now highlights the matching keyframe in the world, and the selection is kept when the widgets are rebuilt

## Entity Components

- Made schema for `minecraft:shareables` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer
  - `items` now only accepts an array format
- Made the schema for the `minecraft:trail` component stricter when parsing; entity JSON with invalid data will fail to load in versions 1.26.60 and newer
- Added new fields to the `minecraft:trail` component in versions 1.26.60 and newer:
  - `replaceable_blocks`: A list of block descriptors for blocks that the trail can replace. Defaults to only replacing air when omitted.
  - `radius`: The radius of the horizontal square of blocks placed by the trail, centered on `spawn_offset`. Accepts values from `-1` to `16`; `-1` uses the legacy four-corner placement behavior.
  - `force_replace_matched_blocks`: When `true`, replaces blocks matching `replaceable_blocks` even when normal block placement rules would prevent placement. Defaults to `false`.

## Item Components

### minecraft:durability_sensor

- `sound_event` now accepts the name of any sound event defined in `sound_definitions.json`, in addition to the built-in sound event names, starting with format version `1.26.50` and no longer requires the Upcoming Creator Features experiment

### minecraft:swing_sounds

- `attack_miss`, `attack_hit`, and `attack_critical_hit` now accept the name of any sound event defined in `sound_definitions.json`, in addition to the built-in sound event names, starting with format version `1.26.50` and no longer requires the Upcoming Creator Features experiment

### minecraft:use_modifiers

- `start_sound` now accepts the name of any sound event defined in `sound_definitions.json`, in addition to the built-in sound event names, starting with format version `1.26.50` and no longer requires the Upcoming Creator Features experiment

## User Interface

- Bitmap fonts can now configure ASCII glyph cell height and vertical offset in an optional JSON file beside their first ASCII atlas, using `ascii_character_height` and `ascii_character_y_offset`
- Setting `ascii_extended` to `true` in the atlas metadata selects extended character mapping and defaults the glyph height to 12 and vertical offset to -3; explicit height and offset values override these defaults
- Bitmap font textures without layout metadata in the same resource pack retain their legacy glyph layout and character mapping instead of inheriting vanilla's extended font metadata ([MCPE-242277](https://bugs.mojang.com/browse/MCPE-242277))

# Experimental Technical Updates

## API

- Added property `hiddenFrom` to `DebugShape` and `PrimitiveShape`.
- Added property `defaultVisibleToAll` to `DebugShape` and `PrimitiveShape`.

### DDUI

Added support for multi button row at message box in beta. Button layout could be vertical or horizontal.

- New interface `MessageBoxOptions`.
  - Field `showHorizontalButtons: boolean;`. Sets the desired layout for the buttons, true for horizontal, false for vertical. Default value is false.
- Class `MessageBox`.
  - New constructor optional parameter `options?: MessageBoxOptions`. '
  - New method `button3WithOptions(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: MessageBoxButtonOptions): MessageBox`. Allows to add a third button to the message box.

## Blocks

- Introducing a new block event that custom components can listen to, `onNamedTick`
  - A block can schedule a named tick with `Block.scheduleNamedTick`, which takes a name and tick delay as parameters.
  - A block can check if at least one named tick is already scheduled with `Block.hasScheduledNamedTick`, which takes a name as sole parameter.
  - A block can remove all scheduled named ticks matching a name with `removeScheduledNamedTick`, which takes a name as sole parameter.
  - When handling the event from `onNamedTick`, `BlockComponentNamedTickEvent.isName` can be leveraged to filter out events based on their name.
  - Named ticks are grouped by content packs, two content packs can schedule the same named tick, but `BlockComponentNamedTickEvent.isName` will return differently based on the content pack calling the method.
  - Up to 4 named ticks can be scheduled at a given time on the same block position.
  - The name of a scheduled named tick cannot be longer than 31 characters.
  - Changing the block at a position wipes its scheduled named ticks.
  - Changing the permutation at a position does not wipe its scheduled named ticks.
  - The named tick API is behind beta.

## Graphical

- Fixed a bug where point lights would not cast shadows in the Nether or deep underground
