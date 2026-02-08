---
title: Minecraft Beta & Preview - 1.21.30.23
date: 2024-08-15T10:51:50Z
updated: 2024-08-15T14:51:30Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/29288258913293-Minecraft-Beta-Preview-1-21-30-23
hash:
  user-content-experimental-features: experimental-features
  user-content-bundles: bundles
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-items: items
  user-content-mobs: mobs
  user-content-sounds: sounds
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  01J5AT7F7112FKRS80B4BZ24QZ: blocks-2
  user-content-editor: editor
  01J5AT7F72HK9EYMEJYBFD733N: items-1
  user-content-trade-tables: trade-tables
  user-content-experimental-technical-updates: experimental-technical-updates
  01J5AT7F747HTZ1P0K2PG1P7HM: api-1
  user-content-graphical: graphical
---

**Posted:** 15 August 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at[aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see[aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)for detailed instructions

![A Jungle Temple with a panda outside eating bamboo. There is a bundle in an item frame on the wall in an item frame. Nearby, there is also a small redstone setup using a sea lantern](https://feedback.minecraft.net/hc/article_attachments/29288233240717)

This week’s preview is *very exciting*. Why? Because parrots can finally imitate Endermites! Wait, sorry, that wasn’t the big news. I mean – because bundles are now available for testing in pre-release versions of Minecraft: Bedrock Edition! Bundles are an item that let you store stacks of other items together, which helps you maximize your inventory space. You can even store bundles in bundles! And once you’ve stuffed your bundle with bundles of other bundles, you can now use new tooltip to choose which item or stack of items to extract. As always, we’d love your feedback on bundles (and on parrots imitating Endermites, if you’d like), so please let us know what you think at [aka.ms/mcbundlesfeedback](https://aka.ms/mcbundlesfeedback), and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

# Experimental Features

## Bundles

A Bundle is an item that lets you stack different blocks or items together in the same inventory slot. Different items normally don’t stack together, so you can end up wasting space by only having a few items in each slot. A Bundle lets you pack those items together so there is no wasted space.

- Bundles are an experimental feature - to use them, you must turn on the Bundle experiment when creating a new world
- A Bundle is an item that can pack different items together into the same stack
- A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types
- You can insert items into a Bundle directly in the inventory
- Bundles have a tooltip that shows the items inside
  - If a Bundle has less than 8 item types inside, the tooltip will show all of them
  - Otherwise, the tooltip will show the top two rows of items and the others will be hidden below
- You can select any of the visible items to pull out of the Bundle
  - Use the scroll wheel on mouse, the right stick on a game controller, or tap on a touch device

> **Developer's Note:** *In the original Bundle experiment, you could only pick the top item. We got a lot of feedback that players wanted more flexibility when taking items out. To address this we put a submenu inside the Bundle, which has never been done before in Minecraft!*

- When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle
- When holding a Bundle in hand, you can empty it onto the ground
- The Bundle is crafted with one String above one Leather

> **Developer's Note:** *The original prototype for Bundles was much more expensive to craft and used Rabbit Hide, which is only available in certain biomes, so the player had to explore to get their first Bundle. In this version we've made it cheaper and something that you can craft at home in almost any biome. We want it to be easy to get Bundles in a new world so you can use it in your early adventures.*

- Known issues:
  - The Bundle recipe may not appear as a suggested crafting item, but can still be crafted
  - When moving items on touch devices, the wrong item icon may appear briefly

# Features and Bug Fixes

## Blocks

- "tnt" block is now split into unique instances: "tnt" and "underwater_tnt" 
- Parsing blocks.json now produces a Content Error if its format_version is greater or equal than the block names it overrides
- The following block names are now considered outdated in "blocks.json" from format_version 1.21.30 onward ([MCPE-100267](https://bugs.mojang.com/browse/MCPE-100267))
  - `minecraft:carpet`
  - `minecraft:colored_torch_bp`
  - `minecraft:colored_torch_rg`
  - `minecraft:concrete`
  - `minecraft:concrete_powder`
  - `minecraft:coral`
  - `minecraft:coral_block`
  - `minecraft:coral_fan`
  - `minecraft:coral_fan_dead`
  - `minecraft:coral_fan_hang`
  - `minecraft:coral_fan_hang2`
  - `minecraft:coral_fan_hang3`
  - `minecraft:double_plant`
  - `minecraft:double_stone_block_slab`
  - `minecraft:double_stone_block_slab2`
  - `minecraft:double_stone_block_slab3`
  - `minecraft:double_stone_block_slab4`
  - `minecraft:double_wooden_slab`
  - `minecraft:fence`
  - `minecraft:hard_stained_glass`
  - `minecraft:hard_stained_glass_pane`
  - `minecraft:leaves`
  - `minecraft:leaves2`
  - `minecraft:light_block`
  - `minecraft:log`
  - `minecraft:log2`
  - `minecraft:monster_egg`
  - `minecraft:planks`
  - `minecraft:red_flower`
  - `minecraft:sapling`
  - `minecraft:shulker_box`
  - `minecraft:stained_glass`
  - `minecraft:stained_glass_pane`
  - `minecraft:stone_block_slab`
  - `minecraft:stone_block_slab2`
  - `minecraft:stone_block_slab3`
  - `minecraft:stone_block_slab4`
  - `minecraft:stonebrick`
  - `minecraft:tallgrass`
  - `minecraft:terracotta`
  - `minecraft:wood`
  - `minecraft:wooden_slab`
  - `minecraft:wool`
- "chemistry_table" has been split into 4 unique instances: "compound_creator", "material_reducer", "element_constructor", and "lab_table" 
  - Requires the Education Edition toggle

## Gameplay

- Fixed an issue where End Gateway Portals could teleport some players incorrectly ([MCPE-66061](https://bugs.mojang.com/browse/MCPE-66061)) 
- The '/camera set' command will now run in the correct order when an existing camera interpolation is running ([MCPE-183986](https://bugs.mojang.com/browse/MCPE-183986)) 

## General

- Adding input glyph support in the name tags displayed over the entities

## Items

- Fixed block items turning into an incorrect variant when importing worlds older than 1.5.0 ([MCPE-181944](https://bugs.mojang.com/browse/MCPE-181944)) 
- EDU: Fixed Material Reducer recipes not working with some flattened blocks such as Andesite or Terracotta

## Mobs

- The Breeze no longer has a minimum distance required to attack a target ([MCPE-183011](https://bugs.mojang.com/browse/MCPE-183011)) 
- Parrots can now imitate Endermites
- Parrots now imitate Drowned ([MCPE-46302](https://bugs.mojang.com/browse/MCPE-46302))

## Sounds

- Basalt Deltas now have a moody ambient sound again

## User Interface

- Renamed the "All worlds" tab to "Worlds" in OreUI Play screen (Preview only) 
- The hardcore heart displayed on worlds in the new Play screen now animates when world is hovered (Preview only)
- Beacon title text is no longer different from the other containers in Pocket UI ([MCPE-176186](https://bugs.mojang.com/browse/MCPE-176186)) 
- Fixed a bug where crafting category tabs would not be visible in Pocket UI after hiding the recipe book in Classic UI ([MCPE-183825](https://bugs.mojang.com/browse/MCPE-183825)) 
- The arrow from the Stonecutter screen is now visible all the time, just like in the other similar screens ([MCPE-160236](https://bugs.mojang.com/browse/MCPE-160236))
- Fixed an issue where items durability and storage bar was incorrect size and placement on certain screens
- Added hotkeys to take screenshots in game on controller and keyboard. On mouse/keyboard: F2. On controller: LB+RB, L1+R1, L Button+R Button

## Vanilla Parity

- Fixed Mushroom Farms in Woodland Mansions that incorrectly spawned Dirt instead of Coarse Dirt 
- The following blocks have been brought to parity with Java Edition for Redstone power: 
  - minecraft:mangrove_roots -\> now powered ([MCPE-153838](https://bugs.mojang.com/browse/MCPE-153838))
  - minecraft:beacon -\> no longer powered
  - minecraft:tnt -\> no longer powered
  - minecraft:sea_lantern -\> no longer powered ([MCPE-79271](https://bugs.mojang.com/browse/MCPE-79271))
- When mining Top Snow with a Silk Touch enchanted Shovel, Top Snow is now dropped in an amount corresponding to the number of layers of the block ([MCPE-59729](https://bugs.mojang.com/browse/MCPE-59729))\
  - If there are 8 layers, a Snow Block will be dropped instead

# Technical Updates

## AI Goals

- Removed the `minecraft:behavior.peek` AI goal component that was never used

## API

- Changes to iterators to make them properly store their own state, be simplified and better handle common usages
- Fixed the `next` method for iterable objects
- The following APIs have been shipped out of experimental: `PlayerCursorInventoryComponent` API, Target Selector for Actor Properties APIs, and the Block Record Player Component APIs

## Blocks

- The "item_display_transforms" field in block geometries no longer requires the "Upcoming Creator Features" toggle 

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with**\#BedrockEditor**. Learn [how to use](https://learn.microsoft.com/en-us/minecraft/creator/documents/editoroverview?view=minecraft-bedrock-stable) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

This week we're releasing Editor V0.7! This release was jam packed with tons of few features:

- Paste Preview
- Deferred Lighting Settings
- Custom Input Mapping
- Entity Transactions
- Attach Debugger
- Client Widget System
- Export Pane
- Brush Tool + masking support
- Ruler Tool
- Structure Manager
- Navigation Panel
- Simple Tool Wrapper
- Updated Property Pane API
- Action Bar API

Checkout the full changelog with demos at the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) page.

Updates this week:

- Added Navigation Panel which adds a mini-map to teleport around your world and add labels for key points 
- Added Structure Panel action bar item for managing structures stored in the project. 
  - Added Editor Structure Manager API to interface with it 
- Added Hardcore mode as an option in the export pane 
- Added `getSelectedToolId` and `setSelectedToolId` functions to `IModalToolContainer` API
- Fixed a bug where Editor operations could exhaust all available ticking areas causing all future operations to fail 
- Fixed a bug where sometimes `IModalTool.onModalToolActivation` API event was called in the wrong order 
- Fixed a bug which could sometimes cause brush masks to fail to load

## Items

- Item data versioned 1.16.100+ can now be overridden by item data versioned 1.16.100+ higher in the pack stack 
- Enables Creators to override 1.16.100+ data driven Vanilla items with 1.16.100+ data
- Added "minecraft:storage_item" item component to allow an item to store data of the dynamic container associated with it 
  - This component requires that the Bundles toggle is enabled
  - A dynamic container is a container for storing items that is linked to an item instead of a block or an entity
  - To use this component the item must have "minecraft:max_stack_size" set to 1
  - The "max_slots" field (1 to 64) defines the number of slots of the dynamic container
  - The "max_weight_limit" field defines the maximum allowed sum of the weight of the items in all slots of the dynamic container
    - Items that stack to 64 weigh 1 each, those that stack to 16 weigh 4 each and unstackable items weigh 64
  - The "allow_nested_storage_items" field allows for other items with a "minecraft:storage_item" component to be put inside it
  - The "weight_in_storage_item" (0 to 64) defines the additional weight the item adds when inside another storage item
    - A value of 0 means that this item is not allowed inside another storage item
  - The "banned_items" field defines the items that are not allowed in the item's dynamic container
  - The "allowed_items" field defines the items that are exclusively allowed in the item's dynamic container
    - If empty all items are allowed in the item's dynamic container
- Added "minecraft:bundle_interaction" item component to enable bundle-specific interaction scheme and tooltip 
  - This component requires that the Bundles toggle is enabled
  - To use this component the item must have a "minecraft:storage_item" component defined
  - The "minecraft:bundle_interaction" component interacts with the container created by the "minecraft:storage_item" component
  - The "num_viewable_slots" field (1 to 64) defines the maximum number of item stacks accessible from the top of the bundle, while other slots are hidden
  - Textures named \[item_name\]\_open_front and \[item_name\]\_open_back must be added to textures/textures_list.json

## Trade Tables

- The Trade Table files are now versioned 
  - TradeTier's "total_exp_required" is a required member from version 1.21.30
  - TradeTier's "groups" is a required member from version 1.21.30
  - TradeItem's quantity "min" cannot be lower than "max" from version 1.21.30

# Experimental Technical Updates

## API

- Moved class `PlayerCursorInventoryComponent` from `beta` to `1.14.0`

## Blocks

- Fixed an issue with 'minecraft:redstone_conductivity' support for custom blocks  

## Graphical

- Fixed night vision potions having no effect in Deferred Technical Preview 
- Fishing lines are now rendered correctly in first person when the FOV setting has been changed in Deferred Technical Preview.
