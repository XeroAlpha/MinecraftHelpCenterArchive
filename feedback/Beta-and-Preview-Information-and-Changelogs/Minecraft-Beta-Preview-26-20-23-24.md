---
title: Minecraft Beta & Preview - 26.20.23/24
date: 2026-03-31T08:31:10Z
updated: 2026-03-31T17:07:44Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44725242220429-Minecraft-Beta-Preview-26-20-23-24
hash:
  h_01KJWVNWWSJJ5RPG1AV39PK5W6: information-on-minecraft-preview-and-beta
---

**Posted:** 31 March 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/44725268621069" alt="SulfurCave_1920x1080.jpg" />
</figure>

We're very excited to share some of the first features from our Chaos Cubed drop with you all in this week's changelogs! Now, for those of you who caught Minecraft LIVE, you'll know this drop brings a curious new mob - the sulfur cube - which gains different physical properties based on the block it absorbs. You might also know about this passive mob's home biome, sulfur caves! Found underground and littered with red cinnabar and yellow sulfur blocks, this new cave variant almost feels like a spa with its bubbling pools (caused by potent sulfur). What you might not know is that we've already made a few changes to the textures since Minecraft LIVE, thanks to your feedback! The sulfur cube is cuter than ever with a smattering of freckles (or dots), the block sets have had tweaks to their coloring, the spider on chiseled cinnabar is now clearer, and there are some other tweaks for you to discover. So let's dive in!

# Drop 2 Experimental Features

- **Please note:** These features are still in development and may change. The physics for the Sulfur Cube is still a work in progress, and the directional knockback behavior is not fully implemented yet. Please keep sending us your feedback and bug reports!

## Sulfur Cubes

- Sulfur Cubes are a new mob coming to Minecraft with a curious appetite for... blocks! Found in Sulfur caves, this curious mob transforms depending on which block the player feeds it. Experiment and discover how to send Sulfur Cubes bouncing, sliding, and more!

## Sulfur Springs

- Found across the Overworld, you'll know if you've spotted a Sulfur pool thanks to its Sulfur and Cinnabar blocks - and the noxious gas coming from it! But dig beneath these and you'll discover a Sulfur cave, filled with new blocks to mine and a new mob to meet!

## Potent Sulfur

- Potent Sulfur is a new block you can use to create bubbling hot pools! Place potent Sulfur beneath water and you'll soon spy bubble columns, as well as puffs of noxious gas. Build with caution - noxious gas will trigger nausea in players and nearby mobs!

## Sulfur Caves

- Discover this new cave type, with shallow pools of water and glow lichen. Sulfur caves are filled with yellow blocks of Sulfur, red blocks of Cinnabar, and a curious mob called the Sulfur Cube!

## New Block Sets

- You'll find two new block sets in Sulfur caves - Cinnabar and Sulfur! These new blocks allow you to add rich reds and yellows into your builds, and each comes with its own full block set. Cobble them, craft with them, turn them into stairs or bricks - the choice is yours!

# Features and Bug Fixes

### Gameplay

- Fixed mouse camera sensitivity being higher than expected on Windows ([MCPE-235748](https://bugs.mojang.com/browse/MCPE-235748))

### Graphical

- Fixed a bug where Bows and Crossbows used by players disappear with Texture Streaming enabled ([MCPE-235735](https://bugs.mojang.com/browse/MCPE-235735))

- Pixelated shadows in Vibrant Visuals no longer experience artifacts on certain Xbox One X and Xbox Series S

### User Interface

- Fixed empty space appearing on screens with text input when using a physical keyboard on iOS

- Fixed several issues with text input on iOS when using a physical keyboard

- Updated the text on the beta feedback popup. ([MCPE-236391](https://bugs.mojang.com/browse/MCPE-236391))

- Add missing closed captions for some baby mobs ([MCPE-237205](https://bugs.mojang.com/browse/MCPE-237205))

## Blocks

- Fixed issue placing leaves on top of leaves after decay ([MCPE-237327](https://bugs.mojang.com/browse/MCPE-237327))

- Using Bone Meal on a Moss Block connected to Polished Diorite, Polished Andesite, or Polished Granite no longer replaces them with a Moss Block , ([MCPE-129262](https://bugs.mojang.com/browse/MCPE-129262)) ([MCPE-189928](https://bugs.mojang.com/browse/MCPE-189928))

## Commands

- `/loot` failing no longer stops the rest of an `/execute` command from continuing ([MCPE-185887](https://bugs.mojang.com/browse/MCPE-185887))

## Gameplay

- Maintain aiming stick capabilities while the small emote screen is visible

- Fixed a bug where Minecarts on the same track would not properly transfer momentum when colliding with each other

## General

Fall damage visual and audio effects for non-player entities are no longer delayed past hitting the ground ([MCPE-237211](https://bugs.mojang.com/browse/MCPE-237211))

## Graphical

- Fixed incorrect variation in block lighting during the slime jump animation in Vibrant Visuals

- Fixed an issue causing co-web blocks to not dither when player camera is nearby. ([MCPE-235972](https://bugs.mojang.com/browse/MCPE-235972))

- Added new version of atmospheric scattering config.

  - New format version is 1.26.20
  - Fields "minecraft:atmosphere_settings" and "minecraft:atmosphere_settings/description" are now required

## GraphicsOverrideParameterPacket

- Changed means of accessing Atmospherics Graphics Overrides to be accessed through getBiomeAtmospherics

## Mobs

- Ravager now destroys Leaf Blocks and Crops when running into them, and no longer destroys Flowers or Plants, which matches the behavior on Java ([MCPE-169375](https://bugs.mojang.com/browse/MCPE-169375))

## Realms

- Fixed crashing issue when going back from Realms Plan Picker screen before it finishes loading.

# Technical Updates

- Fixed custom components not parsing with modern block definition loader ([MCPE-237057](https://bugs.mojang.com/browse/MCPE-237057 "https://bugs.mojang.com/browse/mcpe-237057"))

### User Interface

- Hide get more packs button when a player is unnable to access marketplace

## AI Goals

- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.

  - `minecraft:behavior.pet_sleep_with_owner`
  - `minecraft:behavior.pickup_items`
  - `minecraft:behavior.player_ride_tamed`

## API

- Added beta read-only property `partyInfo` to `Player` that returns a `PartyInfo` object (`{ partyId: string, isLeader: boolean }`) or `undefined` if the player is not in a party

- Adding settings under "Creator" section to configure text filtering debug delay.

- Added `BlockComponentBlockStateChangeEvent` to `BETA`. Custom Block components can subscribe to it.

- Added BETA Boolean property `firstUpdate` to `BlockComponentRedstoneUpdateEvent`

- Moved `function Entity.addItem` from `beta` to `v2.7.0`

- Moved `class InvalidEntityComponentError` from `beta` to `v2.7.0`

## Biomes

- Added `minecraft:subsurface_builder` field to Biome Json API

  - Sub Surface Builders allow specifying a `minecraft:surface_builder` to be applied to biomes located underneath the Overworld's terrain surface. Note, however, that pre-existing surface builder types' processing have not been updated to accommodate the ability to specify them for sub-terrain height ranges, which may lead to unexpected results when using them.

- Added `minecraft:noise_gradient` sub surface builder type, which places continuous bands of blocks according to a noise distribution. This surface builder's processing has been implemented with sub-terrain height ranges in mind.

  - This surface builder has the following parameters:
    - `non_replaceable_blocks`: a list of blocks that the surface builder is not allowed to replace. Leaving this list empty or unspecified will allow the replacement of any (non-air or non-liquid) block type.
    - `gradient_blocks`: a list of block names that will be sampled according to a Perlin noise distribution. Specifying `minecraft:air`-blocks is permitted, and will result in the original block not being replaced, meaning it is possible to adjust the density/intensity of block replacement in the biome using this surface builder type.

## Blocks

- Blocks with a missing menu_category will correctly be accepted again instead of giving the error: "Menu Category should not have an empty value"

## Entity Components

- Fixed a bug where removing the movement controller from an entity entirely did not reset the input velocity given by the controller

  - This would cause entities to keep sliding in the given direction until friction bled the velocity off, even if the entity hit a wall

- Fixed a bug that caused the "minecraft:behavior.delayed_attack" AI behavior to sometimes fail to exit after killing a target

- Added the `minecraft:bounciness` component, which controls how an entity bounces when colliding with surfaces

  - Contains a single field, `value`, defining the bounce strength:
    - 0 results in no bounce
    - 1 results in a perfectly elastic collision with full energy preservation
  - If the component is not present, bounciness defaults to 0
  - Only available if the entity's `format_version` is set to `beta`

- Added the "minecraft:apply_knockback_rules" component which controls how an entity applies knockback to a target

  - "horizontal_power" defines how much the target is hit backwards
  - Defaults to 1.0 if not defined
  - "vertical_power" defines how much the target is hit upwards
  - Defaults to 0.4 if not defined
  - "vertical_velocity_cap" defines the target's maximum vertical upwards velocity after the target's knockback rules have been evaluated
  - Defaults to 0.4 if not defined
  - "check_if_target_is_immersed_in_water" defines whether the target should be fully immersed in water for the knockback rules to apply
  - Defaults to false if not defined

- Not defining this component results in default knockback behavior

- Added the `minecraft:air_drag_modifier` component

  - The higher its value, the more air drag affects an entity:
    - 0.0 means no air drag
    - 1.0 means regular air drag
    - 2.0 means double air drag
  - Only available if the entity's `format_version` is set to `beta`

- The `minecraft:knockback_resistance` component now accepts negative values down to a minimum of -2, resulting in knockback being increased instead of being diminished

## Features

- : refactor `minecraft:behavior.follow_target_captain` to `minecraft:behavior.follow_target_leader`. The following fields have been added to the behavior:

  - `always_look_for_leader` (default: false) If true, the mob will always search for a valid leader to follow if none is found or current leader is not valid anymore
  - `leader_filters` (required) The filters to use when determining if a mob is a suitable leader or not.
  - `search_cooldown` (default: 20) Number of ticks that must pass before a new search is initiated after a target is not found, lost, or becomes invalid.

## Items

- Added tags for Sulfur Cube to make use of for physics determination and absorbing

  - "minecraft:sulfur_cube_archetype_bouncy"
  - "minecraft:sulfur_cube_archetype_regular"
  - "minecraft:sulfur_cube_archetype_slow_flat"
  - "minecraft:sulfur_cube_archetype_fast_flat"
  - "minecraft:sulfur_cube_archetype_light"
  - "minecraft:sulfur_cube_archetype_fast_sliding"
  - "minecraft:sulfur_cube_archetype_slow_sliding"
  - "minecraft:sulfur_cube_archetype_sticky"
  - "minecraft:sulfur_cube_archetype_high_resistance"

## Mobs

- Fixed actor textures not loading properly when applying packs with older min engine version

## Network Protocol

- Packet `UpdateClientOptionsPacket`, added bool `Filter Profanity Change`.

# Experimental Technical Updates

### API

- Added `Dimension.spawnXp` method to spawn experience orbs at a specified location in `@minecraft/server`

## Add-Ons

- Added experimental toggle "Custom Projectiles" which enables improvements around custom projectiles in add-ons without the use of runtime identifiers

  - Adds `isolated_physics` property to `minecraft:projectile` component for easier trajectory control
  - `fire_at_target` goal now applies projectile offsets relative to entity rotation
  - Custom projectiles now:
    - can be reflected
    - update their owner upon launch and reflection
    - no longer collide with their owner on launch
    - apply their offsets on launch
    - remain at their point of impact when using `stick_in_ground`

## API

- Fixed a bug when `attachedTo` on a `ShapePrimitive` or `DebugShape` wouldn't update if the attached entity was unloaded and reloaded.

- Fixed a bug where `DebugText` in `minecraft@debug-utilities` could be invisible.

- Added `maximumRenderDistance` to `DebugShape` in `minecraft@debug-utilities` could be invisible.

- Added Script Entity property `nameplateDepthTested` to `beta`

- Added Script Entity property `nameplateRenderDistance` to `beta`

- Added `EntityHealCause.TotemOfUndying` to `beta`

- Added `minecraft:totem_of_undying` support to entity heal before/after events

- Added `Player.chatNamePrefix` to `beta` - an optional string prepended to the player's name in chat messages

- Added `Player.chatNameSuffix` to `beta` - an optional string appended to the player's name in chat messages

- Added `Player.chatDisplayName` to `beta` - a read-only property returning the composed chat name (chatNamePrefix + name + chatNameSuffix)

- Added `Player.chatMessagePrefix` to `beta` - an optional string prepended to the text of the player's chat messages, useful for applying color/formatting codes

### Data Driven UI

- Class Observable.
  - Added method `getFilteredText`. Gets filtered data from the Observable (only available for strings). -`getFilteredText(this: Observable<T & string>, player: Player): Promise<string | TextFilteringError>;`
- Added enum `TextFilteringError`. An enum representing the errors that can occur during text filtering. This is used at Observable.getFilteredText to provide more context about the filtering process.

## Blocks

### Voxel Shapes

- Added non-unit-cube voxel shapes for 70 Vanilla blocks when the Voxel Shapes experiment is enabled. These shapes improve face culling so that hidden faces between adjacent blocks are correctly removed.

  - Slab shapes (62 blocks)
  - Other shapes (8 blocks): Calibrated Sculk Sensor, End Portal Frame, Powered Comparator, Powered Repeater, Snow Layer, Stonecutter, Unpowered Comparator, Unpowered Repeater

- Fixed Vanilla slab face culling so that the top face of a block directly above or below a slab is now correctly culled against the slab's shape

## Mobs

- Librarians no longer offer Name Tags, and instead offer Red Candles or Yellow Candles on Master Level ([MCPE-237281](https://bugs.mojang.com/browse/MCPE-237281))

## Scripting

- Added scripting method that allows creators to check the snow logging behavior of a block.
