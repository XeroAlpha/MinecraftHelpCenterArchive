---
title: Minecraft Beta & Preview - 26.10.21
date: 2026-02-03T12:18:25Z
updated: 2026-02-03T14:43:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43201150724877-Minecraft-Beta-Preview-26-10-21
hash:
  h_01KEVVCRJYJ96D2TDS3PPZKW57: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-drop-1-2026: drop-1-2026
  user-content-golden-dandelion: golden-dandelion
  user-content-baby-mobs: baby-mobs
  user-content-accessibility: accessibility
  user-content-crash: crash
  user-content-graphical: graphical
  user-content-items: items
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-commands: commands
  user-content-character-creator: character-creator
  user-content-ai-goals: ai-goals
  user-content-blocks: blocks
  user-content-editor: editor
  user-content-scripting: scripting
  h_01KGHP5FZMYKVEQ448Y9F2D9PJ: user-interface-1
  user-content-entity-components: entity-components
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01KGHP5FZM87TJSBXP3TZSYRDC: api-1
  h_01KGHP5FZMCWSMJG50VBCFFCJD: user-interface-2
---

**Posted:** 3 February 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- This update will be rolling out to the various platforms as they become available, so please allow time for the update to reach you.  
   

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/43201157394957" alt="kareuhfkdjzhfaxlskjd.jpeg" />
</figure>

  
Beware! Seven floofy and feral baby mobs with deceivingly snuggly new looks are on the loose in testing. From the icy tundra to the sandy deserts – few biomes are safe from their cuteness! Plus, test the golden dandelion, too! As always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).  
 

# Features and Bug Fixes[](https://feedback.minecraft.net/hc/en-us/articles/features-and-bug-fixes)

## Drop 1 2026[](https://feedback.minecraft.net/hc/en-us/articles/drop-1-2026)

### Golden Dandelion[](https://feedback.minecraft.net/hc/en-us/articles/golden-dandelion)

- Introduced Golden Dandelion as a new type of flower that can be used to stop baby mobs from aging
  - Can be crafted using a Dandelion and Gold Nuggets
- Enabled the Golden Dandelion effect on the following Baby Mobs:
  - Baby Armadillo
  - Baby Axolotl
  - Baby Bee
  - Baby Camel
  - Baby Cat
  - Baby Chicken
  - Baby Cow
  - Baby Dolphin
  - Baby Donkey
  - Baby Fox
  - Ghastling
  - Baby Hoglin
  - Baby Goat
  - Baby Horse
  - Baby Llama
  - Baby Mooshroom
  - Baby Mule
  - Baby Nautilus
  - Baby Ocelot
  - Baby Panda
  - Baby Pig
  - Baby Polar Bear
  - Baby Rabbit
  - Baby Sheep
  - Baby Sniffer
  - Baby Strider
  - Baby Trader Llama
  - Baby Turtle
  - Baby Wolf
  - Tadpole
- Known issues:
  - On-use particles and sounds are currently not implemented
  - Golden Dandelion can't be used to craft Suspicious Stew
  - Golden Dandelion can't be used to craft Yellow Dye
  - Can't be picked up by mobs who can pick up items, including Endermen
  - Can't be used to distract Piglins

### Baby Mobs[](https://feedback.minecraft.net/hc/en-us/articles/baby-mobs)

Added the following updated baby mobs!

- Polar Bear
- Goat
- Fox
  - Added new baby-specific animations for the Fox
- Camel
  - Added new baby-specific animations for the Camel
- Armadillo
  - Added new baby-specific animations for the Armadillo
- Llama
  - Trader Llama
- Bee

## Accessibility[](https://feedback.minecraft.net/hc/en-us/articles/accessibility)

- Fixed issue where text to speech doesn't get enabled on launch despite the 'Text To Speech For UI' toggle being enabled

## Crash[](https://feedback.minecraft.net/hc/en-us/articles/crash)

- Fixed a crash that sometimes happened when players were climbing

## Graphical[](https://feedback.minecraft.net/hc/en-us/articles/graphical)

- Fix player flickering when flying at high speed towards the camera ([MCPE-23451](https://bugs.mojang.com/browse/MCPE-23451))
- Began rollout of a new texture streaming feature available in Preview for some selected devices
  - Toggling on this feature will reduce the GPU memory for certain textures, especially when multiple add-ons or packs are in use
  - This feature is toggled off by default and can be found in Video Settings
  - Note that the availability of this toggle for devices may change over subsequent releases

## Items[](https://feedback.minecraft.net/hc/en-us/articles/items)

- Bundle and Wolf Armor no longer have larger scale with textures bigger than 16x ([MCPE-225207](https://bugs.mojang.com/browse/MCPE-225207))

## Mobs[](https://feedback.minecraft.net/hc/en-us/articles/mobs)

- Mooshroom head mushroom is now correctly placed on top of the Mooshroom's head ([MCPE-234684](https://bugs.mojang.com/browse/MCPE-234684))
- Baby Polar Bear now attacks Foxes ([MCPE-48072](https://bugs.mojang.com/browse/MCPE-48072))
- Zombie Horses no longer flee from sunlight
  - This aligns them with the behavior of regular Zombies
- Baby Skeleton Horses no longer grow up ([MCPE-234733](https://bugs.mojang.com/browse/MCPE-234733))
- Adjusted which blocks Zombie Horses, Skeleton Horses and Camel Husks try to avoid:
  - They try to avoid water
  - They try to avoid dangerous blocks
  - They do not try to avoid rails

## Realms[](https://feedback.minecraft.net/hc/en-us/articles/realms)

- Fixed crash when opening Realms tab with 150+ joined realms

## User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Add a few missing characters to the default font ([MCPE-183866](https://bugs.mojang.com/browse/MCPE-183866))
- Fixed a crash caused by High-Data-Volume text in Books ([MCPE-235419](https://bugs.mojang.com/browse/MCPE-235419))
- Added an option to disable pausing the game when the application loses focus (desktop only)
- Fix a bug where the opacity of the pick block button could not be adjusted ([MCPE-191027](https://bugs.mojang.com/browse/MCPE-191027))
- Fixed a bug that caused the "Go to Settings" button from the Skin Type modal to navigate to the JSON UI Settings ([MCPE-235400](https://bugs.mojang.com/browse/MCPE-235400))
- Updating the inventory and SDL screens to properly reflect purchases made when navigating back to it from a related page
- Updated the interact button design for touch controls

# Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/technical-updates)

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- Adding `isSuperset` parameter to `world.containsBiomes`
- Moving `world.containsBiomes` to `stable`
- Removing `superset` property from `BiomeFilter`
- Moving `ScriptBiomeFilter` to `stable`
- Released `BlockComponentRedstoneUpdateEvent.previousPowerLevel` from `beta` to `v2.6.0`
- Released `property ItemDurabilityComponent.unbreakable` from `beta` to `v2.6.0`

## Commands[](https://feedback.minecraft.net/hc/en-us/articles/commands)

- Chat command completion on iOS keyboard no longer produces "ō" or "ō" and suggestion, it will properly autocomplete a suggestion ([MCPE-158584](https://bugs.mojang.com/browse/MCPE-158584))

## Character Creator[](https://feedback.minecraft.net/hc/en-us/articles/character-creator)

- Added check for usage of banned skin in persona delegate and added case to display default appearance and inform user when banned skin is detected
- Exiting the game after changing your appearance will immediately cache all changes

## AI Goals[](https://feedback.minecraft.net/hc/en-us/articles/ai-goals)

- Made the schema for `minecraft:behavior.ram_attack` stricter when parsing, now will fail to load an entity json that has invalid data in versions 26.10 and newer
- Float Range field `cooldown_range` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made the schema for `minecraft:behavior.celebrate` stricter when parsing, now will fail to load an entity json that has invalid data in versions 26.10 and newer
- Float Range fields `sound_interval` and `jump_interval` now only accepts an object with `min` and `max` values
  - Other formats will fail to parse

## Blocks[](https://feedback.minecraft.net/hc/en-us/articles/blocks)

- Fixed client crash on world load from out of bounds `minecraft:geometry` in the `minecraft:item_visual` component

## Editor[](https://feedback.minecraft.net/hc/en-us/articles/editor)

- Fixed a bug where players could not use the Enter key in the Terrain tool
- Added `ICollectionTreePropertyItem` API to display a tree view of nested folders and sequential entries
- Added Vector3 Timeline Control
  - New timeline type for editing Vector3 values over time, complementing existing Number and Color timelines
  - Nodes are draggable along the X-axis (time) only; Vector3 values can be edited via the node popup by double-clicking a node
  - Timeline slider displays current time position rather than interpolated values
- Updated text selection and caret colors for default themes
- The Vibrant Visuals pane can now update globally configured Local Lights properly
- Added structure display name to the dropdowns for jigsaw pieces
- Sorted the jigsaw piece list alphabetically
- Fixed UX to expand correctly when pane is stretched so that you can read dropdowns and labels

### Scripting[](https://feedback.minecraft.net/hc/en-us/articles/scripting)

- Added new widget render primitive types to the `@minecraft/server-editor` module:
  - `WidgetComponentRenderPrimitiveTypeCylinder` - Cylinder primitive with elliptical cross-section (radiusX, radiusZ, height)
  - `WidgetComponentRenderPrimitiveTypeCone` - Cone primitive with elliptical base (radiusX, radiusZ, height)
  - `WidgetComponentRenderPrimitiveTypeCuboid` - Cuboid primitive with independent dimensions (lengthX, lengthY, lengthZ)
  - `WidgetComponentRenderPrimitiveTypePyramid` - Pyramid primitive with rectangular base (xWidth, zWidth, height)
  - `WidgetComponentRenderPrimitiveTypeEllipsoid` - Ellipsoid primitive with Vector3 radii
- Added corresponding `PrimitiveType` enum values: `Cylinder`, `Cone`, `Cuboid`, `Pyramid`, `Ellipsoid`
- All new primitives support optional rotation (Vector3) and transparency parameters

### User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Updated the default Editor UI zoom level from 75% to 100% for improved out-of-box accessibility and readability
- Users with previously saved preferences are unaffected—their saved zoom level will continue to be restored

## Entity Components[](https://feedback.minecraft.net/hc/en-us/articles/entity-components)

- Added the ability to pause and reset growth of entities in `minecraft:ageable` using specified items
  - Introduced field `"pause_growth_items"`, which is a list of items that can be fed to the entity to pause growth for baby entities
  - Introduced field `"reset_growth_items"`, which is a list of items that can be fed to the entity to reset growth for baby entities
  - Introduced `ActorDefinitionTrigger` field `"reset_growth"` to trigger an event when aging is reset for baby entities
  - Introduced `ActorDefinitionTrigger` field `"pause_growth"` to trigger an event when aging is paused for baby entities

# Experimental Technical Updates[](https://feedback.minecraft.net/hc/en-us/articles/experimental-technical-updates)

## API[](https://feedback.minecraft.net/hc/en-us/articles/api)

- This release introduces new UI capabilities called Data-Driven UI (DDUI)
  - These APIs introduce a new way to create modal forms with new capabilities and an all new look
  - New modal forms is the first step in our UI journey for creators, stay tuned for more features in future updates!
    - More information can be found here: [Introduction to the Data-Driven UI (DDUI) Framework](https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui)
    - Known Issues:
      1.  You need to wait a tick between programmatically closing a CustomForm/MessageBox and opening another.
      2.  Showing a CustomForm/MessageBox while UI is already up "queues" the UI to show up instead of failing like the previous form APIs.
      3.  CustomForms will only update after being shown via Observables, you cannot add a new button/dropdown/slider/etc while the form is shown.
- Reload command now closes all the Data Driven UI screens as part of the execution
- ScriptSetBannerDetailsFunction now includes base color and pattern data
- Fixed an issue with `DebugBox` where the position was being used as the bottom-left corner, instead of the centre
- Fixed an issue with `DebugShape.attachedTo` where the attachment position was unintentionally using the height offset of the entity

## User Interface[](https://feedback.minecraft.net/hc/en-us/articles/user-interface)

- Added the correct icon for Party settings ([MCPE-235095](https://bugs.mojang.com/browse/MCPE-235095))
