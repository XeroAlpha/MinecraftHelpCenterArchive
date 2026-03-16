---
title: Minecraft Beta & Preview - 26.20.20
date: 2026-03-10T14:21:56Z
updated: 2026-03-16T14:51:04Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44164962819725-Minecraft-Beta-Preview-26-20-20
hash:
  h_01KJWVNWWSJJ5RPG1AV39PK5W6: information-on-minecraft-preview-and-beta
  h_01KKC1YQSJ3BWN4H1589EDA7KX: features-and-bug-fixes
---

**Posted:** 10 March 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

 

# Features and Bug Fixes

## Achievements

- Fixed the Time Played stat briefly showing "-1 hours" on the Achievements screen while loading ([MCPE-230285](https://bugs.mojang.com/browse/MCPE-230285))

## Blocks

- Grass Blocks can now spawn Tall Grass when bone mealed

## Gameplay

- Fixed knockback effect to behave more like Java edition ([MCPE-190868](https://bugs.mojang.com/browse/MCPE-190868))
- Fixed an issue that caused players camera to rotate while interacting with blocks when using Full Keyboard Mode ([MCPE-235656](https://bugs.mojang.com/browse/MCPE-235656))

## Graphical

- Fixed an issue where Spyglass and Carved Pumpkin overlay were not being hidden while taking a screenshot in Vibrant Visuals. ([MCPE-219934](https://bugs.mojang.com/browse/MCPE-219934))
- Fixed a bug where MERS textures were visible on the front of shields with banner patterns in Vibrant Visuals. ([MCPE-235081](https://bugs.mojang.com/browse/MCPE-235081))
- Fixed a bug where emissive, metalness, and roughness values would not be loaded properly when switching to the Ray Traced graphics mode while in a world.
- Added Sky Flashing effect in The End for Fancy graphics mode.
- Added Vibrant Visuals support for all Shelf blocks

## Items

- Baby Mobs no longer show green growth particles when being fed while their growth is stopped by a Golden Dandelion
- The Torch recipe is now unlocked by acquiring a Stick, Coal, Charcoal, or a Pickaxe of any type

## Mobs

- Added Vibrant Visual support for Nautilus Armors
- Baby Squid hitbox correctly bounds the mob
- Baby Turtle now has swimming animations
- Baby Glow Squid hitbox correctly bounds the mob
- Baby Striders are no longer floating above ground ([MCPE-236393](https://bugs.mojang.com/browse/MCPE-236393))
- Villagers move at correct speed when moving to workstations ([MCPE-236656](https://bugs.mojang.com/browse/MCPE-236656))
- Fixed Baby Zombie Piglin snout texture to be front facing
- Fixed adult Rabbit textures which had a line under their head
- Got rid of extra pixels in Warm Baby Pig texture
- Fixed Baby Hoglin's crest texture so its on both sides
- Updates the Brown Baby Panda texture to be more consistant with the other's
- Got rid of the dark stripe on the back of the Baby Panda's heads
- Fixed underside texture of Baby Goat and Baby Snifflet to be consistant with the adults. Fixed back of Baby Dolphin's head which had inconsistent pixels
- Updated the top of the Chainmail Baby Armor Helmet to match the adult's
- Mobs now correctly bounce after making contact with Slime Blocks and Beds, instead of bouncing mid-air before impact
- Mobs now emit a vibration of frequency 2 when bouncing on Beds and Slime Blocks

## Realms

- Fixed an issue where the save world modal would remain active after use.
- Fixed 'Create on Realms' button in the create new world screen
- Removed subscriptions tabs from in-game Realms settings

## Sounds

- Adult Pigs and Baby Pig now have eating sounds
- Trumpet note block instrument is now added to all Copper variants

## User Interface

- Fixed PS4/5 store logo not appearing after navigating to the sidebar pages

# Technical Updates

## AI Goals

- Made the schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer
  - `minecraft:behavior.hide`
  - `minecraft:behavior.mingle`
  - `minecraft:behavior.move_to_poi`
  - `minecraft:behavior.move_to_village`
  - `minecraft:behavior.sleep`
  - `minecraft:behavior.stroll_towards_village`
- Made the schema for `minecraft:behavior.equip_item` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for `minecraft:behavior.move_outdoors` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made the schema for `minecraft:behavior.move_indoors` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.20 and newer
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.20 and newer.
  - `minecraft:behavior.admire_item`
  - `minecraft:behavior.barter`
  - `minecraft:behavior.eat_carried_item`
- The `sound_interval` float range field in `minecraft:behavior.admire_item` now only accepts an object with `min` and `max` values. Other formats will fail to parse

## API

- Released `@minecraft/server` version 2.7.0.
- Added `@minecraft/server` version 2.8.0-beta.
- Released `AimAssistCategory` from `beta` to `v2.6.0`
- Released `AimAssistCategorySettings` from `beta` to `v2.6.0`
- Released `AimAssistPreset` from `beta` to `v2.6.0`
- Released `AimAssistPresetSettings` from `beta` to `v2.6.0`
- Released `AimAssistRegistry` from `beta` to `v2.6.0`
- Released `PlayerAimAssist` from `beta` to `v2.6.0`
- Released `PlayerAimAssistSettings` from `beta` to `v2.6.0`
- Released `AimAssistTargetMode` from `beta` to `v2.6.0`
- Released `World.getAimAssist` from `beta` to `v2.6.0`
- Released `Player.getAimAssist` from `beta` to `v2.6.0`
- A new field `embed_in_surface` has been added to the schema of `snap_to_surface_feature`, which allows specifying whether the snapped feature should be embedded in the located surface. Defaults to `false`

## Blocks

- Fixed issue causing items with item lock component to be put in decorated pots ([MCPE-184636](https://bugs.mojang.com/browse/MCPE-184636))
- For `format_version` \>= **1.26.20** the component `minecraft:redstone_producer` cannot be defined in the **permutations** array without defining it in the base **components** object as well ([MCPE-234647](https://bugs.mojang.com/browse/MCPE-234647))
- Removed the warning message if the optional property `strongly_powered_face` of component `minecraft:redstone_producer` is not defined ([MCPE-234635](https://bugs.mojang.com/browse/MCPE-234635))
- Custom block with an icon item will now correctly display the icon in setblock command. ([MCPE-235787](https://bugs.mojang.com/browse/MCPE-235787))
- Fixed `"minecraft:placement_filter"` for blocks with trait `minecraft:multi_block`
- If no value is given for the "texture" field in "minecraft:destruction_particles", the "down" or "\*" texture will be used from "minecraft:material_instances" instead of the dirt texture. ([MCPE-234708](https://bugs.mojang.com/browse/MCPE-234708))
- Fixed custom blocks with the 'minecraft:tick' component ticking more than expected when placed via a structure ([MCPE-236362](https://bugs.mojang.com/browse/MCPE-236362))
- Fixed minecraft:block_placer component's replace_block_item property. The block will now properly use the overridden block item. ([MCPE-236314](https://bugs.mojang.com/browse/MCPE-236314))
- Fixed y-offset for 'flower_pottable' blocks in flower pots to match vanilla for versions `1.26.20+` ([MCPE-234585](https://bugs.mojang.com/browse/MCPE-234585))
- We are fully enabling the block schema parsing update that was tested during `1.26.10` previews. These changes will be shipping as part of `1.26.20` and start with this first preview.
- The custom block json api has the following changes that will affect loading of block json with format version `1.26.20` and up.
  - **General**
    - Namespace constraints have been tweaked but everything permitted before should still be valid.
      - This can affect the identifiers used for the block, states and menu category groups.
  - **Block Traits**
    - "`placement_direction`" trait, validation change: The rotation offset does not accept a 0.5 tolerance anymore.
      - Input value must be a multiple of 90.0
      - The value must be in the range 0.0 to 360.0 inclusive.
    - "`blocks_to_corner_with`" now requires "`minecraft:corner_and_cardinal_direction`" to be one of the "`enabled_states`" for the "`placement_direction`" trait.
  - **Category**
    - "`menu_category`", validation change: An empty "`group`" value is not allowed.
    - The "`group`" field can either exist with a non-empty value or not exist at all.
    - "`category`" is now a required field, when using "`menu_category`". This is strictly enforced now.
  - **Components**
    - "`minecraft:flower_pottable`", validation change: It is restricted outside of root components object.
    - "`minecraft:geometry`", validation change: The constraint on "`culling_shape`" identifier is strictly enforced now.
      - When using the minecraft namespace, the only currently available culling shape identifiers are : "`minecraft:empty`" or "`minecraft:unit_cube`".
      - When using no namespaces or a custom one, the names must start and end with an alpha-numeric character.
    - "`minecraft:light_dampening`" and "`minecraft:light_emission`", validation change: They now strictly enforce the value to be between 0 and 15 inclusive.
    - There is a breaking change to how tags are defined.
      - As of version `1.26.20`, tags cannot freely live as top level entities in the components array.
      - They must live inside the "`minecraft:tags`" component, which accepts an array of tags of the format :
        - "`minecraft:tags`": `["minecraft:crop", "custom:custom_tag"]`.
      - The values must have the format "`<namespace>:<tag_name>`".
      - They no longer need to be prefixed with `tag:`

## Commands

- Fixed issue where player could still auto-jump after using the /inputPermissions command to disable jumping ([MCPE-235573](https://bugs.mojang.com/browse/MCPE-235573))

## Components

- Fixed issue with mob projectile accuracy going negative on higher difficulty settings
- Fixed bug in "minecraft:interact" where combining "drop_item_slot" and "equip_item_slot" would not equip the given item
- The "minecraft:damage_sensor" component's "deals_damage" field now supports an additional value:
  - "no_but_entity_effects_apply":
    - Damage is not applied to the entity
    - Knockback and enchantments are applied
    - The attacker's weapon is used as normal
    - The entity does not flash red
- Descriptions for custom blocks with `minecraft:display_name` now return correct values ([MCPE-236308](https://bugs.mojang.com/browse/MCPE-236308))

## Editor

- Fixed a bug in Terrain Flatten mode where adjusting the brush height made the brush harder to use
- Changed default X and Z axis mirror keybindings for Paste Preview to use SHIFT + CTRL modifiers
- Changed default axis lock keybinding for Ruler tool to use SHIFT + CTRL modifiers
- Added unbound keybindings for core panels
- Fixed a bug where can't undo/redo the operations of deselect and replace blocks from manifest table in Marquee and Freehand mode.
- Fixed Vector3 Timeline bug to avoid time values beyond neighboring nodes' time bounds in the edit popup
- Added optional drag and drop support for `ICollectionTreePropertyItem` API entries
- Added `location` to `IRootPropertyPaneOptions` to display root panes over the viewport instead of within a drawer
- Added view control pane API support for `ICollectionTreePropertyItem`
- The Local Lights and Shadow configurations in the Vibrant Visuals pane no longer has a non functioning plus button and is disabled

## Entity Components

- The behavior of the `minecraft:friction_modifier` component now matches its description
  - The higher its value, the more friction affects an entity:
    - 0.0 means no friction
    - 1.0 means regular friction
    - 2.0 means double friction
  - The component now affects ground friction only, and no longer partially affects air or liquid drag
  - The legacy incorrect behavior can be re-enabled by adding the `minecraft:uses_legacy_friction` component
    - This component is automatically added to all entities with a format version lower than 1.26.20, to ensure their behavior stays unaltered
  - The component now properly works on players, and on other client-predicted entities
- Added the `minecraft:uses_uniform_air_drag` component
  - When present, air drag is applied uniformly on both the vertical and horizontal axes, instead of being biased toward horizontal movement
- Added the "minecraft:on_equipment_changed" component, which allows executing entitiy events when items are equipped or unequipped in specific equipment slots
  - Contains a "slots" field with a list of entries, each with:
    - "slot", the equipment slot to monitor
    - "on_equip", event to fire when a non-empty item is placed in the slot
    - "on_unequip", event to fire when the slot is cleared
  - When equipment changes, the first matching slot entry is used
  - Does not apply to "minecraft:inventory" slots, use "minecraft:equippable" instead

## EntityFilters

- Added "has_equipment_block_tag" entity filter
- Added "has_same_equipment_in_slot_as" entity filter

## Features

- Added a boolean "rotate_around_center" field to the "minecraft:structure_template_feature" feature
  - When set to "true", it rotates the structure around its center when placing it in the world
  - Defaults to "false" if omitted

## Items

- Items that have their "item_lock" mode set to either "lock_in_inventory" or "lock_in_slot" can no longer be placed in shelf blocks ([MCPE-230341](https://bugs.mojang.com/browse/MCPE-230341))
- Fixed pickblock overriding items in hotbar with item_lock ([MCPE-152556](https://bugs.mojang.com/browse/MCPE-152556))

## Mobs

- Fixed a bug where the summon_cap for custom entities was ignored ([MCPE-153307](https://bugs.mojang.com/browse/MCPE-153307))

## Scripting

- Values returned by `localizationKey` on `Block`, `BlockPermutation`, and `BlockType` will now correctly respect `minecraft:display_name` keys for custom blocks.([MCPE-235802](https://bugs.mojang.com/browse/MCPE-235802))

## Stability and Performance

- Fixed crash loading level with incomplete explorer map ([MCPE-226793](https://bugs.mojang.com/browse/MCPE-226793))
- Improved sign-in speed on most platforms by triggering authentication earlier during game startup

## User Interface

- Fixed a bug where entering custom settings of a behavior pack screen disables the pack.

## World Generation

- Can now use `minecraft:feature_pool_element` in Jigsaw Structure Template Pools in order to place Features
- `feature`s can now connect to a Jigsaw Block with any Target Name, rather than only `minecraft:bottom`

# Experimental Technical Updates

## API

- Adjusted `GameTest` to no longer run call backs from methods such as `succeedWhen` and `failIf` after the test has already completed.
- Changed `color` property of `DebugShape` (in @minecraft/debug-utilities) from `RGB` to `RGBA`.
- Added `depthTest` property to `DebugText` (in @minecraft/debug-utilities).
- Added `backgroundColorOverride` property to `DebugText` (in @minecraft/debug-utilities).
- Added `useRotation` property to `DebugText` (in @minecraft/debug-utilities).
- Added `kickPlayer()` to the `@minecraft/server-admin` module in beta
- Added new tech to support 3D world text objects and rendering to `@minecraft/server`.
  - Added new beta `PrimitiveShapesManager` class used to add and remove text primitives to the world.
  - Added new beta `PrimitiveShape` base class used to repesent 3D shape objects in the world.
  - Added new beta `TextPrimitive` class used to render 3D text shape objects in the world.
  - Added new beta `primitiveShapesManager` property to `World`.
- Added localization support to `DebugText`.
  - `DebugText` constructor changed allow using either `RawMessage` or string for the text paramter.
  - `DebugText.text` changed to be a readonly property.
  - `DebugText.setText` method added which allows using either `RawMessage` or string.
  - `DebugText.rawText` readonly property added to get the text if `RawMessage` is used via `setText`.
- Changes to error types in @minecraft/server-net in beta
  - HttpRequestBodyTooLargeError has been renamed to RequestBodyTooLargeError
  - HttpRequestNotAllowedError has been renamed to UriNotAllowedError
  - HttpsOnlyError has been renamed to TLSOnlyError
  - MalformedHttpRequestError has been renamed to MalformedUriError
- @minecraft/server-net configuration module permissions parameter 'force_https' has been renamed to 'force_tls'
- Added `interface ContainerAccessSource` to `beta`
- Added `interface ContainerAccessSourceFilter` to `beta`
- Added `class EntityContainerClosedAfterEvent` to `beta`
- Added `class EntityContainerClosedAfterEventSignal` to `beta`
- Added `class EntityContainerOpenedAfterEvent` to `beta`
- Added `class EntityContainerOpenedAfterEventSignal` to `beta`
- Added `interface EntityContainerAccessEventOptions` to `beta`
- Added `class BlockContainerClosedAfterEvent` to `beta`
- Added `class BlockContainerClosedAfterEventSignal` to `beta`
- Added `class BlockContainerOpenedAfterEvent` to `beta`
- Added `class BlockContainerOpenedAfterEventSignal` to `beta`
- Added `interface BlockContainerAccessEventOptions` to `beta`
- Added `StructureManager.getPackStructureIds` to `beta`.
- Added `EntityEnderInventoryComponent` for accessing a player's EnderChest container contents to `beta`

### DDUI

Added support for localization for dropdown items.

- Changed interface `DropdownItem`
  - Changed type for `description` from `string` to `UIRawMessage | string`
    - New Signature: `description?: UIRawMessage | string`
    - Old Signature: `description?: string`
  - Changed type for `label` from `string` to `UIRawMessage | string`
    - New Signature: `label: UIRawMessage | string`
    - Old Signature: `label: string`
- Fixed issue where text input areas are covered by the virtual keyboard at some platforms like Android.
- Fix for players getting stuck when DDUI screen is open and server crashes.
- Fixed buttons getting clipped when in a focused state.
- Fixed an issue where showing forms (CustomForm or MessageBox) back to back resulted in the second form not showing

## Graphical

- Added new version for the water configuration JSON file.
  - new format version is "1.26.20".
  - fields "minecraft:water_settings" and "minecraft:water_settings/description" are now required.
- Removed point lights visually fading out once past a certain distance from the camera
