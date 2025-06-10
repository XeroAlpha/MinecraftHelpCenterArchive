---
title: Minecraft Beta & Preview - 1.21.100.20
date: 2025-06-10T13:28:14Z
updated: 2025-06-10T13:32:44Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37264366737421-Minecraft-Beta-Preview-1-21-100-20
---

**Posted:** 10 June 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Alex standing in a village holding an emerald. There is a Villager nearby, as well as a Llama and an Iron Golem. The sun is rising in the background.](https://feedback.minecraft.net/hc/article_attachments/37264379202317)

It's time for another Beta & Preview! For the full list of changes and additions, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Accessibility Features

- Added screen narrator enumeration to UI buttons when adding a new server

## Blocks

- Leash Knots now immediately disappear when the block supporting them is destroyed ([MCPE-163558](https://bugs.mojang.com/browse/MCPE-163558))

- Leashed mobs can no longer be attached to Walls ([MCPE-187041](https://bugs.mojang.com/browse/MCPE-187041))

## Gameplay

- Emoting players will no longer get stuck in a boat

## General

- Non-player entities transported from the End to the Overworld now correctly arrive at the world spawn ([MCPE-157125](https://bugs.mojang.com/browse/MCPE-157125))

## Graphical

- Fixed a bug where Caustics were not appearing for player hand and held items in First Person view.

- The lead now correctly attaches to the player hand in first person with Vibrant Visuals enabled ([MCPE-217597](https://bugs.mojang.com/browse/MCPE-217597))

- Fixed the Spyglass and fire effects in first person not receiving gamma calibration in Vibrant Visuals

- Fixed a bug that caused Bottle o' Enchanting not to glow when thrown in Vibrant Visuals

- Fixed clusters of Mangrove Root blocks displaying a non-uniform color.

- Fixed Chain blocks not being rendered with PBR properties defined by the texture set.

- Fixed issue that caused Chain blocks to change PBR properties of surrounding blocks.

-  

- Fixed incorrect colors being displayed when render controllers used `is_hurt_color` along with `on_fire_color` ([MCPE-220347](https://bugs.mojang.com/browse/MCPE-220347))

- Fixed render controllers displaying incorrect textures when using identically named `Array.name` values across geometry and texture expressions. ([MCPE-220829](https://bugs.mojang.com/browse/MCPE-220829))

- Fixed flipbook textures not working with variations textures ([MCPE-190531](https://bugs.mojang.com/browse/MCPE-190531))

## Mobs

- Piglin Brutes will now despawn properly on peaceful difficulty ([MCPE-88837](https://bugs.mojang.com/browse/MCPE-88837))

- Fixed a bug where Glow Squid would not act as leash anchor points

- The ambient sound interval for Animals and the Ghast have been adjusted to 6 and 4 seconds, respectively, matching Java

- Fixed bug that caused Happy Ghast to not rotate properly if dismounted while moving vertically

## Character Creator

- Fixed "Choose New Skin" button no longer working after pressing back button on Android. ([MCPE-149587](https://bugs.mojang.com/browse/MCPE-149587))

## Stability and Performance

- Fixed an issue where Xbox cloud saves would grow excessively in size with each save. ([MCPE-197900](https://bugs.mojang.com/browse/MCPE-197900))

- Fixed rare crashes during the app suspension on Xbox

## User Interface

- Fixed the link text for the stacking add-ons banner in Create New World ([MCPE-194268](https://bugs.mojang.com/browse/MCPE-194268))

- Removed trailing spaces from the Tears music disc description ([MCPE-219554](https://bugs.mojang.com/browse/MCPE-219554))

- Recovering "Friends" and "Invite to Game" buttons when a scoreboard is visible ([MCPE-218617](https://bugs.mojang.com/browse/MCPE-218617))

- Fixed an issue when clicking the world image in the world grid layout there was no click sound ([MCPE-217667](https://bugs.mojang.com/browse/MCPE-217667))

- Player Dots on the Locator Bar now move smoothly when strafing near other Players

- Touch Controls: Pick Block button is now available while inside scaffolding or powder snow ([MCPE-190776](https://bugs.mojang.com/browse/MCPE-190776))

- Player Dot on the Locator Bar now stops 1 pixel before the edge of the bar

- Touch Controls: The button to change camera perspective is now also available in Spectator mode ([MCPE-190751](https://bugs.mojang.com/browse/MCPE-190751))

- Fixed a bug which could cause the bed screen to not be removed properly when being disconnected from a server.

- The Owned/Download text now shows on items you own outside of the My Library page

- The Marketplace Pass Chevron will now show on Items that the user owns while on normal Marketplace pages. Not on the Inventory. Owned/Download text moved to the right.

- Updated Marketplace Pass chevron to show on items in the inventory. Moved Download/Owned text to right side.

- The audio default volumes have been updated.

### Audio Settings

- Keep an eye out for some updates to the audio settings screen which will be rolling out soon!
- Audio settings have been refreshed with a brand-new look!
- Each setting now includes a helpful description, making it easier to understand what it does
- Improved interaction with sliders that are now smoother and more responsive than before
- For more information on these changes, head on over to [aka.ms/mcaudiosettingsfeedback](http://aka.ms/mcaudiosettingsfeedback)

## Vanilla Parity

- The spawn point can now be set in The End through a command

- Certain sprites rendered in the world are now scaled and offset to be in parity with Java, and to better match their collider

  - Affects Snowballs, Ender Pearls, Ender Eyes, Experience Bottles, Splash Potions, Lingering Potions, and Ice Bombs (Minecraft Education)

### Biomes

- Trees now generate more sparsely in Groves

- Trees now generate more frequently in Snowy Plains

- Mushrooms now properly generate under trees in Swamps and other biomes where they naturally occur

- Seagrass no longer generates poking through ice in biomes with frozen water surfaces

- Frozen Ocean surface is no longer entirely covered by ice, and now features patches of open water

- Deep Frozen Ocean surface is no longer covered by ice and now consists entirely of open water

- The color of water and underwater fog in Swamps when has been updated to match the intended look of the game ([MCPE-63460](https://bugs.mojang.com/browse/MCPE-63460))

  - This change only impacts Simple and Fancy Graphics, but not Vibrant Visuals

- Mega Pines and Mega Spruces now always generate with Podzol beneath every block of their trunk, instead of appearing suspended over air ([MCPE-140517](https://bugs.mojang.com/browse/MCPE-140517))

- Increased the size of the Podzol patch generated beneath Mega Pines and Mega Spruces

  - This change affects both world generation and trees grown by players

- One-block-deep water puddles now generate in Swamps and Mangrove Swamps ([MCPE-137029](https://bugs.mojang.com/browse/MCPE-137029))

- Grass blocks no longer generate at the bottom of carved terrain in Mushroom Fields biomes ([MCPE-74983](https://bugs.mojang.com/browse/MCPE-74983))

### Mobs

- Increase Squid and Glow Squid height offset, offset them slightly forward and decrease the size of their collision boxes to match Java ([MCPE-114253](https://bugs.mojang.com/browse/MCPE-114253))

# Technical Updates

## Add-Ons and Script Engine

- Custom biome names are no longer implied by their filenames. Biome names are explicitly specified via the "identifier" property under the "description" sub-object of their JSON definition.
- Biome identifiers must now be namespaced (ex: "minecraft:plains"). Client biomes with a format version lower than 1.21.90 will have their identifier automatically prefixed "minecraft:" when loaded if no namespace is already specified.
- Updates biome documentation to match updated biome JSON formatting and requirements.

## API

- Fixed a bug where the `includeLiquidBlocks` property on `BlockRaycastOptions` would not correctly result in hits on liquids if it didn't also reach a solid block afterward.

- Fixing a crash with the DebugDrawer when used too early in the client joining a world (such as inside the `playerSpawn` event).

- The `message` parameter of the `setText` method on `BlockSignComponent` no longer accepts a `RawText` as an option. This option was redundant as it is covered by the existing `RawMessage` option. This affects the `setText` method in all versions. .

- Updated many error strings to use consistent punctuation.

- The properties `minValue` and `maxValue` on the `ArgumentOutOfBoundsError` class are now optional. .

- Updated several APIs to throw `ArgumentOutOfBoundsError` instead of `Error` where appropriate. .

  This affects the following APIs in all versions:

  - `Entity.addEffect` for when the `amplifier` setting is out of bounds (0 - 255) or `duration` setting is out of bounds (1 - 20000000).
  - `Entity.applyImpulse` for when the `vector` parameter is out of bounds (-1000 - 1000 per axis).
  - `ItemStack.setLore` and `ContainerSlot.setLore` for when the `loreList` parameter is out of bounds (0 - 100 max lines, 0 - 1000 max length per line).
  - `ItemStack.setAmount` and `ContainerSlot.setAmount` for when the `amount` parameter is out of bounds (0 - 255).

- Some existing errors that throw `ArgumentOutOfBoundsError` have been updated to use a standardized error message. .

  This affects the following APIs in all versions:

  - `ScreenDisplay.setTitle` for when the `fadeInDuration`, `stayDuration` or `fadeOutDuration` settings are out of bounds (min value of 0).
  - `StructureManager.placeStructure` for when the `integrity` setting is out of bounds (0 - 1).
  - `PlayerAimAssist.setAimAssistSettings` for when the `viewAngle` setting is out of bounds (10 - 90) or `distance` setting is out of bounds (1 - 16).
  - `ItemStack.setNameTag` and `ContainerSlot.setNameTag` for when the `nameTag` parameter length is out of bounds (0 - 255).

- Some existing errors that throw `InvalidArgumentError` have been updated to use a standardized error message. .

  - `CustomSpawnRulesRegistry.registerObstructionCallback` for when the `predicate` parameter is empty or a duplicate.

- Released 'DyeableItemComponent' to stable

## Block Components

- Modified `minecraft:geometry` block component
  - Field `uv_lock` no longer requires **UpcomingCreatorFeatures** experiment to work, Json `format_version` still needs to be \>= `1.19.80`

## Blocks

- Fixed assert "can't add a new vertex field at this point: COLOR" when loading some worlds that contained clusters of mangrove_roots blocks.
- Fixed assert "can't add a new vertex field at this point: TEXCOORD_4" when loading some worlds that contained chain or end_portal blocks.
-  

## Commands

- Empty text for '/say', '/me' and '/tell' commands now return 'Invalid message length' error ([MCPE-185429](https://bugs.mojang.com/browse/MCPE-185429))

- `/locate biome` command now requires that the biome's namespace is specified (ex: `minecraft:plains` instead of just `plains`). Auto-complete suggestions for this command will now include namespaces.

## Components

- Content warnings will log missing entity references in Spawn Rule JSON

- Content warnings will log missing references in Client Biome JSON

- The "minecraft:body_rotation_axis_aligned" component has been renamed to "minecraft:rotation_axis_aligned"

## Creator Camera

- Fixed an issue where projectiles were shot in the wrong direction when using touch controls and custom cameras ([MCPE-201558](https://bugs.mojang.com/browse/MCPE-201558))

## Editor

- Changed Cone and Cylinder Brush Shapes so that the origin is included in radius measurements. Fixed edge cases where values in X and Z dimensions would produce different results.

- Fix a bug that 'Multiplayer' and 'visible to LAN Players' don't effect in export

- Fixes navigation and focus issues in the editor graph, fixed arrow key movement when the graph is locked. Improved handling of clicks outside of the graph

- Fixed a bug where Realms panel was opening in an empty state

- Added ability to specify directional placement of blocks for any brush operation using DirectionalPlacementMode enum and setDirectionalPlacementMode.

- Added ability to toggle that "Ctrl" will either erase or add blocks with the addition of "setInverseEraseMode".

- Removed support for the `SimpleTool` framework API. Tools using this feature must now use IPlayerUISession controls instead.

- Updated component tooltip property to support new TooltipContent type. TooltipContent allows for a custom title to be added to the tooltip.

- Updated default brush shape and sizes for the terrain tool to apply smooth and roughen stronger on first use

## Entity Components

- Made the schema for the `minecraft:tick_world` entity component stricter so that the parsing now refuses out of range values for `radius` and `distance_to_players`

## Gameplay

- Fixed an issue that caused custom music to stay paused after leaving and re-entering the game ([MCPE-219364](https://bugs.mojang.com/browse/MCPE-219364))

## Graphical

- Change cloud quality to player visible option and not a dev only option.

## Jigsaw

- Added `minecraft:blockstate_match` and `minecraft:random_blockstate_match` rules to jigsaw processors.

- Added heightmap projection type `none` and made it the default setting, which instead of performing heightmap calculations uses the starting placement position.

## Mobs

- Allays can no longer be given Leads ([MCPE-186435](https://bugs.mojang.com/browse/MCPE-186435))

- Allays can now be unleashed by interacting with them while not holding any item ([MCPE-159044](https://bugs.mojang.com/browse/MCPE-159044))

## Vanilla Parity

### Biomes

- Icebergs in Frozen Ocean biomes now generate with a shape and frequency that more closely matches Java

# Experimental Technical Updates

### World Generation

- Mixing Terrain matching and Rigid Structures will no longer sink rigid structure 1 block

- Chunks will no longer infinitely load when multiple structures are used within a structure set.

- Can now use `minecraft:empty_pool_element` jigsaw template pools to represent empty elements

## API

- Moved class `PlayerHotbarSelectedSlotChangeAfterEvent` from beta to `2.1.0`.

- Moved class `PlayerHotbarSelectedSlotChangeAfterEventSignal` from beta to `2.1.0`.

- Moved class `PlayerInventoryItemChangeAfterEvent` from beta to `2.1.0`.

- Moved class `PlayerInventoryItemChangeAfterEventSignal` from beta to `2.1.0`.

- Moved interface `HotbarEventOptions` from beta to `2.1.0`.

- Moved interface `InventoryItemEventOptions` from beta to `2.1.0`.

- Moved enum `PlayerInventoryType` from beta to `2.1.0`.

- Class `HotbarEventOptions`.

  - Field `allowedSlots` added bound validation, numbers inside the array must be between 0 and 8.

- Class `InventoryItemEventOptions`.

  - Field `allowedSlots` added bound validation, numbers inside the array must be positive.

- ItemInventoryComponent

  - Bundle UI now renders non-contiguous items added to the container with this API correctly.

- Added class `InvalidItemStackError` to `beta`.

## Commands

- Added the `fov_set` keyword to the `/camera` command for changing the camera's field of view. Enabled with the Experimental Creator Camera toggle

## Experimental

- 'locate structure' command (and similar structure-searching gameplay elements) will now quickly return no result if experimental Custom Biomes have replaced all of the biomes where that structure could appear

## Jigsaw

- `max_distance_from_center` now parses horizontal and vertical values separately in an object while supporting horizontal only with parsing as a constant, the vertical value is now optional and defaults to having no limit.

## Scripting

- Added support for text to speech for tooltips at Server-UI forms.

## UI

- Added support for navigation using keyboard and gamepad for tooltips at settings. Also, to be showed always inside the visible area. Mobile resolutions were having issues with this.
