---
title: Minecraft Beta & Preview - 1.21.110.23
date: 2025-08-06T13:01:10Z
updated: 2025-08-06T15:32:38Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38609129067789-Minecraft-Beta-Preview-1-21-110-23
hash:
  h_01K1ZQ9Q8V82MR43K4S36368QF: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-copper-decorations: copper-decorations
  user-content-copper-chests: copper-chests
  user-content-copper-golem-statue: copper-golem-statue
  user-content-lightning-rods: lightning-rods
  user-content-mobs: mobs
  user-content-copper-golem: copper-golem
  user-content-general: general
  user-content-user-interface: user-interface
  user-content-accessibility: accessibility
  user-content-technical-updates: technical-updates
  user-content-biomes: biomes
  h_01K1ZQ8P0NQ0WB6T6VCKMMFH5M: blocks-1
  user-content-editor: editor
  user-content-items: items
  h_01K1ZQ8P0NPYNYKF1S6JDNJB7S: mobs-1
  user-content-molang: molang
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-api: api
---

**Posted:** August 6 2025

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! Build with copper torches, lanterns, chains, and bars – and watch them develop that stunning signature patina. For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

 

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/38609560274829" alt="FCD_FallV2BPscreenshots_Copperlanterns+chains_bedrock_Social_1920x1080.jpg" />
</figure>

 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=features-and-bug-fixes)

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=blocks)

- Pick block now works on all variations of LightBlock, light_block_0 through light_block_15 ([MCPE-135298](https://bugs.mojang.com/browse/MCPE-135298))
- Added "oak_planks", "spruce_planks", "birch_planks", "jungle_planks", "acacia_planks", and "dark_oak_planks" definitions to blocks.json ([MCPE-177977](https://bugs.mojang.com/browse/MCPE-177977))
- Added "mossy_stone_brick_double_slab", "smooth_quartz_double_slab", "normal_stone_double_slab", "cut_sandstone_double_slab", and "cut_red_sandstone_double_slab" definitions to blocks.json
- Shelf comparator signal now works from the back of the Shelf in all orientations ([MCPE-225226](https://bugs.mojang.com/browse/MCPE-225226))
- Interacting with an unpowered Shelf while in Creative Mode now replaces the Shelf item with the Player's selected item instead of swapping them
- Items on the Shelf have been repositioned to sit on the Shelf

### Copper Decorations[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=copper-decorations)

- Added Copper Torch
  - A green variant of the Torch crafted from a Copper Nugget, Coal, and Stick
  - Functionally identical to the Torch
- Added Copper Bars
  - Functions like the existing Iron Bars block
  - Made from copper and oxidizes over time
- Added Copper Chain
  - Functions like the existing Chain block (now renamed to Iron Chain)
  - Made from copper and oxidizes over time
- Added Copper Lantern
  - Crafted similarly to a regular Lantern but uses Copper and a Copper Torch
  - The lantern itself oxidizes, changing its look as it ages
  - Functionally identical to the Lantern

### Copper Chests[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=copper-chests)

- Fixed the Copper Chests playing default sounds when walking, jumping and landing on them ([MCPE-223737](https://bugs.mojang.com/browse/MCPE-223737))

### Copper Golem Statue[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=copper-golem-statue)

- Fixed the pose of the statue not always updating in multiplayer and split screen
- The statue is now popped when pushed by a piston like other non-full cube decorative blocks
- Fixed the statue not being able to be waterlogged ([MCPE-225241](https://bugs.mojang.com/browse/MCPE-225241))

### Lightning Rods[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=lightning-rods)

- Fixed only unoxidized Lightning Rods emitting a Redstone signal when struck by lightning
- All Lightning Rods now flash white when hit by lightning like in Java

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=mobs)

- Fixed Wolf Armor only appearing visually after they take damage not when equipped ([MCPE-225471](https://bugs.mojang.com/browse/MCPE-225471 "https://bugs.mojang.com/browse/mcpe-225471"))
- Foxes now consider Honey Bottle to be a food item and will prioritize picking it up the same way it does other food items

### Copper Golem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=copper-golem)

- The Copper Golem will now only count blocks towards its maximum of searching if it could have actually made a path to it ([MCPE-223837](https://bugs.mojang.com/browse/MCPE-223837))
- When leashed the Copper Golem will no longer try and transport items
- Fixed not being able to leash Copper Golems to other entities
- Fixed position when sitting in boats
- Fixed the Copper Golem cloning its item when turning into a statue ([MCPE-225251](https://bugs.mojang.com/browse/MCPE-225251))
- Fixed the Copper Golem attempting to pathfind to any block below a floating Copper Chest that is too far for it to open
- Fixed the Copper Golem sometimes placing two statues when it turns into a statue ([MCPE-225259](https://bugs.mojang.com/browse/MCPE-225259))
- Reduce the collision box so the Copper Golem can fit through doors properly like other mobs
- Fixed the step4 sound file being called step4\_ so never actually playing ([MCPE-223857](https://bugs.mojang.com/browse/MCPE-223857))

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=general)

- Improved blending around frozen river chunks ([MCPE-189996](https://bugs.mojang.com/browse/MCPE-189996))

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=user-interface)

- Using the /hud command to hide touch controls now correctly hides all touch buttons. ([MCPE-184856](https://bugs.mojang.com/browse/MCPE-184856))
- Action bar messages now have a text shadow. ([MCPE-186346](https://bugs.mojang.com/browse/MCPE-186346))
- The /hud command to hide the progress bar now also hides the horse and camel bars, and also the locator bar. ([MCPE-184858](https://bugs.mojang.com/browse/MCPE-184858))

## Accessibility[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=accessibility)

- Text to Speech support has been added to all dressing room pages

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=technical-updates)

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=biomes)

- Pre Caves and cliffs components "minecraft:overworld_generation_rules" and "minecraft:multinoise_generation_rules" do nothing with biome generation and will return a content error when used in custom biomes

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=blocks)

- Custom blocks were never intended to support multiple different render_method in the material_instance component. This scenario will now give a content warning to let creators know. ([MCPE-190430](https://bugs.mojang.com/browse/MCPE-190430))

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=editor)

- Added in EditorStructure's missing display name field for Scripting
- Added support for toast messages display
  - This specific task adds a new option in the Settings panel called 'Show Toast Notifications'
  - When this checkbox is checked, the Info and Warning messages will be shown as toast messages
- Added a new value 'ShowToastNotifications' in the enumeration 'GraphicsSettingsProperty'
- Fix a bug so origin value set in the Structure Panel is now reflected in Paste Preview
- Fixed a bug that caused origin and size values set in the Structure Panel not to propagate to the Editor Structure's metadata
- Fixed a bug that caused horizontal sub pane to have broken layout for some property items
- Fixed a bug that caused some paused entities to be deformed
- Fixed a bug where the Locate tool failed to find distant biomes
- Updated Locate tool to use a combo box for biome selection
- Fixed a bug where the line tool failed to fill long lines or lines far from the player
- Fixed a bug that caused hidden gizmo widget to appear on creation

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=items)

- Fixed bug where custom Items' menu_category is_hidden_in_commands value was not sent to client and the items would show up in commands' autocomplete when they shouldn't
- All items that can be eaten now have the tag `minecraft:is_food`, except `glow_berries`

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=mobs)

- The `minecraft:shareables` component now also accepts item entries specifying item tags to name all items tagged as that to become shareable with the given settings

- Foxes now use the `minecraft:is_food` tag instead of listing all foods manually, except `glow_berries` which is still listed manually

- Fixed a bug where the `minecraft:shareables` component would mix attributes of duplicated entries in its `items` list

  - E.g. the `priority` would be taken from the first duplicated element and the `max_amount` from the last, now the first "matching" entry will fully shadow those coming after it
  - Consider this `items` list in a `minecraft:shareables` using the new `tag` functionality:

  ``` auto
  "items": [  
    { "item": "minecraft:apple", "priority": 1, "max_amount": 2 },
    { "item": "minecraft:is_food", "priority": 0, "max_amount": 1 }]  
  ```

  - Previously \`minecraft:apple\` would have had \`priority\` 1 but \`max_amount\` 1 instead of 2, now it will correctly use all data from that first item apple entry

## Molang[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=molang)

- Renamed "query.is_cooldown_type" to "query.is_cooldown_category", to better reflect what it does

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30116/R21U11-3-Preview?anchor=api)

- Adds methods `setAfterBatchMethod` and `setBeforeBatchMethod` to `GameTest`, which can be used to add methods that will be run before and after test batches
- Added methods to Block scripting API that allows creators to get the total light level and the sky light level at a specific position
- Removed `PotionModifierType` from `beta`
- Removed `PotionOptions` from `beta`
- Renamed `PotionLiquidType` to `PotionDeliveryType` in `beta`
- Added `InvalidPotionDeliveryTypeError` and `InvalidPotionEffectTypeError` errors to `beta`
- Potions
  - Added `resolve(potionEffectType: PotionEffectType | T, potionDeliveryType: PotionDeliveryType | U): ItemStack` method to `beta`
    - This replaces the `createPotion(options: PotionOptions): ItemStack` that was removed from `ItemStack`.
  - Removed `getPotionModifierType(potionModifierId: string): PotionModifierType | undefined` from `beta`
  - Added `getAllDeliveryTypes(): PotionDeliveryType[]` method to `beta`
    - This returns all the potion delivery types.
  - Added `getAllEffectTypes(): PotionEffectType[]` method to `beta`
    - This returns all the potion effect types.
  - Renamed `getPotionEffectType` to `getEffectType` in `beta`
  - Renamed `getPotionLiquidType` to `getDeliveryType` in `beta`
- ItemPotionComponent
  - Removed `readonly potionLiquidType: PotionLiquidType` property in `beta`
  - Renamed `readonly potionLiquidType: PotionLiquidType` property to `readonly potionDeliveryType: PotionDeliveryType` in `beta`
- PotionEffectType
  - Added `readonly durationTicks?: number` property to `beta`
    - This is the number of ticks the effect will last for. Undefined means the effect does not expire
  - Removed `static createPotion(options: PotionOptions): ItemStack` method from `beta`
    - This was replaced by `Potions.resolve`.
