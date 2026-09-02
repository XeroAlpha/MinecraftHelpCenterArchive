---
title: Minecraft Beta & Preview - 26.60.21
date: 2026-09-02T12:27:48Z
updated: 2026-09-02T15:47:54Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48602411551629-Minecraft-Beta-Preview-26-60-21
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 2 September 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/48608100484877" alt="r26u6_1.jpg" />
</figure>

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Abandoned Camp

- Camps in the Swamp no longer contain a Mycelium block

- The Abandoned Camp no longer contains singular Coarse Dirt blocks

## Accessibility

- Screen narration now correctly announces the position of navigation controls in the Realms Timeline tab

- Fixed closed captions for baby turtles and baby polar bears so they display "Baby Turtle" and "Baby Polar Bear" instead of the adult subtitle

- Fixed multiple narration enumeration problems within modals

- Updated order and descriptions of text background opacity options in Accessibility tab

## Biomes

- Lush Caves now generate instead of Dripstone Caves or Sulfur Caves in very humid regions

## Blocks

- Snow now produces vibrations when placed ([MCPE-115444](https://bugs.mojang.com/browse/MCPE-115444))

- Updating Shelf Mushroom textures to match Java, removes hidden faces from texture

## Commands

- Fixed an issue where players are kicked when using a command with 'no entity' selectors into the message. ([MCPE-241436](https://bugs.mojang.com/browse/MCPE-241436)) Sample commands fixed:

  - `/kick <ClientNickname> @a[name=nonexistent_player]`
  - `/tell <ClientNickname> @a[tag=nonexistent_tag]`

- Fixed an issue where some blocks did not have correct Redstone functionality after being replaced by /fill or /setblock ([MCPE-240207](https://bugs.mojang.com/browse/MCPE-240207))

- Fixed an issue where a Piston's arm could get stuck in the neighbouring block when replaced by /fill or /setblock

## Cushion

- Moved down the player by two pixels when sitting on a Cushion ([MCPE-240499](https://bugs.mojang.com/browse/MCPE-240499))

## Gameplay

- Large fireball no longer ignites targets on hit ([MCPE-186607](https://bugs.mojang.com/browse/MCPE-186607))

- Bonus Chests now generate correctly in Water World and Snowy Kingdom flat world presets ([MCPE-223639](https://bugs.mojang.com/browse/MCPE-223639)) ([MCPE-224162](https://bugs.mojang.com/browse/MCPE-224162))

- When placing a Bundle in a Double Chest, the contents will no longer randomly disappear ([MCPE-188043](https://bugs.mojang.com/browse/MCPE-188043))

- Grown up baby Horses can no longer pass through two blocks high and one block wide corridors ([MCPE-238139](https://bugs.mojang.com/browse/MCPE-238139))

- Players now take fall damage when landing on a solid block at the boundary of a water block

- Villagers no longer become unresponsive when player interacts with them while opening the inventory menu ([MCPE-138181](https://bugs.mojang.com/browse/MCPE-138181))

- Reduced the lag spike that could happen when opening an Abandoned Camp chest for the first time ([MCPE-310693](https://bugs.mojang.com/browse/MCPE-310693))

- The following Explorer Maps have been renamed to have more consistent naming

  - Ocean Explorer Map -\> Ocean Monument Map
  - Swamp Explorer Map -\> Swamp Hut Map
  - Trial Explorer Map -\> Buried Trial Chambers Map
  - Woodland Explorer Map -\> Woodland Mansion Map
  - Jungle Explorer Map -\> Jungle Pyramid Map

- Blocks pushed by Pistons now push or damage entities based on whether the entity can be pushed by blocks, matching the behavior of Pistons themselves

- Shulkers are now pushed by Pistons and by blocks that Pistons move, matching Java Edition

- A Wind Burst enchanted Mace no longer launches the player up in the air when hitting non-living entities such as Boats, Minecarts, and Cushions

- Untipped Arrows no longer bounce off entities when their damage is fully absorbed or mitigated ([MCPE-241191](https://bugs.mojang.com/browse/MCPE-241191))

## Graphical

- Fixed the block selection outline not appearing when aiming at a block with a mob standing on top of it ([MCPE-172630](https://bugs.mojang.com/browse/MCPE-172630))

- Fixed a bug which caused aliasing artifacts on Beds and Signs when colored block lighting is enabled.

- Fixed instability when Block Light Quality is set to Volumetric Lights on PS4 and Android

- Added warning for going above the 'visual' graphics level render distance for Vibrant Visuals

- Shulkers no longer have comfort dithering applied as they are a stationary (block-like) mob

## Items

- Fixed issue where ice bombs (Education Feature) did not produce ice when thrown on water

## Marketplace

- Fixed marketplace updates not completing and progress screen not closing automatically

## Mobs

- The Drowned model now more closely matches Java Edition

- Helmets equipped by Drowned are now visible ([MCPE-153500](https://bugs.mojang.com/browse/MCPE-153500))

- Fix a rare issue where a healing a mob could result in its death

## Realms

- Fixed realm world name wrapping too much on member-view worlds tab

- Updated Realms purchase terms to include required automatic renewal notice on Switch

- Updated the Realms Plus subscription expired screen with the new user interface

- Realms subscriptions that were purchased but not linked to a Realm can now be recovered from the plan picker and purchase screens, showing the correct price and guiding the player through completing their Realm

- Added support for opening a specific Realm from a Realms Play deep link

### Realms Hub

- Added active packs to world slot view in realms hub for owners/admins

## User Interface

- Updated Poplar Hanging sign's GUI to match Java and other hanging signs

- Focus now follows a pack to its new position when it is reordered, instead of moving somewhere unrelated

- Added extended Latin, Cyrillic and Greek characters to the bitmap font. Character size increased to 8x12px. Languages that use these characters will no longer be displayed in a mix of fonts in the menus.

  - Let us know what you think [here](https://aka.ms/mc-updatedfontspreview)

- Fixed an issue where a friend's world could appear more than once in the Play menu when the friend was signed in to multiple online services

- Fixed button icons in the player profile menu briefly flash when entering the screen or switching tabs

- Price information on Marketplace offers will still be visible on items temporarily owned through Marketplace pass

- Old Worlds synchronization can now be accessed using a gamepad in Ore UI Storage Settings

- Vibrant Visuals content is no longer shown in the Marketplace Pass tab on unsupported devices

- The side panel of the report player screen is now scrollable, so the mute player option is no longer cut off on short screens or at large UI scales

- The pack list now scrolls while an active pack is being carried, so packs can be reordered past the visible area ([MCPE-160072](https://bugs.mojang.com/browse/MCPE-160072))

- Fixed a bug that caused an active pack being reordered with a controller to jump to the wrong position when the pack list was scrolled mid-drag

- Fixed issue where disabled buttons would appear clickable when narration is on

- Improved error messaging when joining Featured Experiences and Creator Experiences to make it more clear why a connection failed

- Subscription plan picker buttons now show when a free trial is available

- Removed the Change User button from the main menu on Xbox consoles

# Technical Updates

## AI Components

- Made schemas for the following components stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

  - `minecraft:movement.basic`
  - `minecraft:movement.sway`
  - `minecraft:movement.skip`
  - `minecraft:movement.generic`
  - `minecraft:movement.amphibious`
  - `minecraft:movement.fly`
  - `minecraft:movement.hover`
  - `minecraft:movement.dolphin`
  - `minecraft:movement.glide`
  - `minecraft:pushable_by_block` Made schema for the `minecraft:movement.jump` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer. Float Range field `jump_delay` now only accepts an object with `min` and `max` values. Other formats will fail to parse

## API

- Released `@minecraft/server` version 2.11.0

- Added `@minecraft/server` version 2.12.0-beta

- Releasing `TextPrimitive.lineGapHeight` from beta to 2.11.0.

- Released `Dimension.spawnXp` from beta to scripts version `2.11.0`

### DDUI

- Released tooltip support at DDUI custom forms at `@minecraft/server-ui` v2.3.0
  - Interface `DropdownOptions` added field `tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;`.
  - Interface `SliderOptions` added field `tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;`.
  - Interface `TextFieldOptions` added field `tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;`.
  - Interface `TextOptions` added field `tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;`.
  - Interface `ToggleOptions` added field `tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;`.
- Released button icon support to `@minecraft/server-ui` v2.3.0, including `ButtonOptions.imageDetails`, `ImageDetails`, `MessageBoxButtonOptions`, `MessageBox.button1WithOptions`, and `MessageBox.button2WithOptions`.

### WorldSoundOptions

- Released the `isBroadcast` property to the stable API. When `true`, `Dimension.playSound` plays the sound as a server-managed broadcast that stays synchronized across listening players within the boradcast range

## Block Components

### Chorus Plant

- Chorus plant blocks now expose the `minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`, `minecraft:connection_up`, and `minecraft:connection_down` block states reflecting which adjacent chorus plants and chorus flowers they connect to

### Fire

- Fire blocks now expose the `minecraft:connection_north`, `minecraft:connection_east`, `minecraft:connection_south`, `minecraft:connection_west`, and `minecraft:connection_up` block states reflecting the flammable blocks around them

### Redstone Dust

- Redstone dust blocks now expose the `redstone_north`, `redstone_east`, `redstone_south`, and `redstone_west` block states (`none`, `side`, `up`) reflecting how the dust connects to its neighbors

## Commands

- Fixed listd command sometimes reporting one way ping, it now reports round trip ping time.

## Debugger

- Fixing live diagnostics display for 'ticking' chunks not being gathered correctly.

## Editor

- Fixed a bug in the Vibrant Visuals Color Grading pane where the Midtones, Highlights, Shadows, and Temperature tooltips showed the parent Color Grading description instead of their own

- Jigsaw Collections are no longer silently lost when their files cannot be written to disk, and a warning is now shown when a Jigsaw Collection cannot be fully saved or loaded

- A Jigsaw Collection that failed to load completely is no longer saved back over the complete files on disk

- Fixed a crash in the Editor Jigsaw pane when loading template pool files that contain JSON comments or trailing commas

- Fixed a crash that could occur when pressing Preview Jigsaw in the Jigsaw tool

- Fixed an Assert caused by the Mouse and a Grabbed Gizmo becoming disconnected

- Added support for Shift = (+) and - shortcuts to add and remove nodes in Vibrant Visuals graphs

- Fixed two potential crashes when an Editor Player enters an End Portal

### Block Picker

- Fixed Double Slab blocks displaying the same name as their single slab variants, making them indistinguishable from each other and impossible to find by name

### Jigsaw

- Fixed empty Jigsaw Collections being deleted when leaving and rejoining a Project

- Fixed deleted Jigsaw Collections re-appearing after leaving and rejoining a Project

- Fixed the Structure assigned to a Jigsaw Piece not being saved until another action was taken, causing it to be lost when switching Collections

### Logging

- Added an optional `alert` flag to `LogProperties` which overrides whether a message raises the Editor error state, flashing the viewport and opening the log panel. When unset the default applies, which is to raise it for errors only

- Added a matching `alert` flag to `IPlayerLoggerProperties` so Editor extensions using `session.log` can reach it

## Entity Components

- Made schemas for the following components stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

  - `minecraft:strength`
  - `minecraft:teleport` Made schema for the `minecraft:economy_trade_table` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer. Int Range fields `cured_discount` and `max_cured_discount` now only accept an object with `min` and `max` values. Other formats will fail to parse.

- Made schema for the `minecraft:buoyant` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

  - `movement_type` now only accepts `none`, `waves`, or `bobbing`; other values are invalid
  - `liquid_blocks` entries must be non-empty block identifiers or valid block descriptor objects; invalid descriptor combinations are rejected

- Made schema for the `minecraft:healable` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

  - `items` entries must now be objects; item identifier strings are no longer valid entries
  - `effects` within an `items` entry must now be an array of effect objects; a single effect object is no longer valid

- Made schema for `minecraft:timer` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.50 and newer.

  - `time` field now takes an object with `min` and `max` fields

## Items

- Starting with version 1.26.60, loot tables using `"format_version": "1.26.60"` or later will continue applying loot functions after an item's count is set to 0. Subsequent functions, including `set_count`, can restore the count, while the item's identity and data are preserved. ([MCPE-238796](https://bugs.mojang.com/browse/MCPE-238796))

  - Loot tables can opt into this behavior with:

    ```
    {
      "format_version": "1.26.60",
      "pools": []
    }
    ```

## Stability and Performance

- Changed approach to measuring memory consumption on Android. The new method captures additional graphics and code memory. As a result it may display higher values in Preview builds; actual memory usage is unchanged.

- Memory measurement on Switch now includes code memory, which will cause higher values to be displayed in preview builds. Actual memory usage is unaffected.

- Performance improvements for memory allocation on GDK platforms, particularly Xbox One

- Fixed a crash that could occur when leaving or losing connection to a world as the loading screen finished

## User Interface

- Development resource and behavior packs are now refreshed when managing packs for a world, and take precedence over other copies when their version is equal or newer

# Experimental Technical Updates

## API

- Custom restart time set in `WorldClockOnRestartBeforeEvent` now properly overrides Overworld clock

- Changes `LevelStorage.saveHold()` to return a `Promise<void>` which resolves when the hold has finished processing in `@minecraft/server-admin` in `beta`

- Changes `LevelStorage.saveQuery()` to return a `Promise<LevelStorageQuerySnapshotFile[]>` which resolves when the query has finished processing in `@minecraft/server-admin` in `beta`

- Changes `LevelStorage.saveResume()` to return a `Promise<void>` which resolves when the resume has finished processing in `@minecraft/server-admin` in `beta`

- Added `class PlayerCraftRecipeAfterEvent` to `beta`

- Added `class PlayerCraftRecipeAfterEventSignal` to `beta`

- Added `interface PlayerCraftRecipeEventOptions` to `beta`

- Added `property WorldAfterEvents.playerCraftRecipe` to `beta`

- Added `class BlockRecipeCraftingComponent` to `beta` for accessing the slots/recipe relating to player crafting UIs (currently only `minecraft:stonecutter_block`)

- Added `class RecipeCraftingContext` to `beta`

- Added `class InvalidRecipeError` to `beta`

### Server-ui

- Released version 2.3.0 of `@minecraft/server-ui`.
- Added 2.4.0 beta of `@minecraft/server-ui`.

## Custom Dimensions

- Added the `minecraft:clouds` component, letting custom dimensions configure the height at which clouds render. No component means clouds do not render.

## Graphical

- Fixed a bug where ghost lights would exist when rapidly removing point light blocks
- Introduced new metrics when deciding point light importance
- Improved light ranking when deciding point light importance
- Introduced score easing during point light ranking
