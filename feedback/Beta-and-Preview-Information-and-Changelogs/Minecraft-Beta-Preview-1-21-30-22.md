---
title: Minecraft Beta & Preview - 1.21.30.22
date: 2024-08-07T15:31:19Z
updated: 2024-08-07T16:17:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/29067342985101-Minecraft-Beta-Preview-1-21-30-22
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-commands: commands
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-vanilla-parity: vanilla-parity
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-editor: editor
  01J4PQ72ZJJQHZTW0VC2S013SR: graphical-2
  user-content-resource-and-behavior-packs: resource-and-behavior-packs
  user-content-experimental-features: experimental-features
  01J4PQ72ZJ90TMXPV0GQB1SCDB: api-1
---

**Posted:** 7 August 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Realistic waves depicted in the Deferred Technical Rendering in Minecraft](https://feedback.minecraft.net/hc/article_attachments/29067350121485)

Here’s what’s new in this week’s Preview and Beta:

# Features and Bug Fixes

## Blocks

- "sponge" block is now split into unique instances: "sponge" and "wet_sponge"
- Colored Torch block instances,"colored_torch_rg" and "colored_torch_bp", are now split into unique instances "colored_torch_red", "colored_torch_green", "colored_torch_blue", and "colored_torch_purple" 
- Added new experimental field "item_specific_speeds" to "minecraft:destructible_by_mining" block component 

## Commands

- Added `all` parameter to `/reload` command. This causes players to quit the world and rejoin, as well as reloading all behavior and resource packs

## Gameplay

- Fixed the collision shape for Trial Spawners; it is now the same size as an ordinary block ([MCPE-178305](https://bugs.mojang.com/browse/MCPE-178305)) 
- Added a new death message for when players are defeated by a Mace smash attack 

## Graphical

- Renamed the maximum framerate slider "Framerate Limit" and added a tooltip to better describe its purpose

## Vanilla Parity

- Enchantments which only have one possible level no longer display their level "I" in their name 
- The names of many items and blocks were brought to parity with Java Edition. The following list details the old names to the left, and the new names to the right: ([MCPE-101388](https://bugs.mojang.com/browse/MCPE-101388)) 
  - Book & Quill -\> Book and Quill
  - Chain Helmet -\> Chainmail Helmet
  - Chain Chestplate -\> Chainmail Chestplate
  - Chain Leggings -\> Chainmail Leggings
  - Chain Boots -\> Chainmail Boots
  - Enchanted Apple -\> Enchanted Golden Apple
  - Cooked Beef -\> Steak
  - Melon -\> Melon Slice
  - Glistering Melon -\> Glistering Melon Slice
  - Milk -\> Milk Bucket
  - Seeds -\> Wheat Seeds
  - Snow -\> Snow Block
  - Top Snow -\> Snow
  - Grass -\> Short Grass
  - Double Tallgrass -\> Tall Grass
  - Sugar Canes -\> Sugar Cane
  - Clay Block -\> Clay
  - Clay -\> Clay Ball
  - Sea Turtle Spawn Egg -\> Turtle Spawn Egg
  - Sea Turtle Egg -\> Turtle Egg
  - Brick Block -\> Bricks
  - Nether Brick Block -\> Nether Bricks
  - Red Nether Brick -\> Red Nether Bricks
  - Prismarine Bricks Slab -\> Prismarine Brick Slab
  - Stone Bricks Slab -\> Stone Brick Slab
  - Bricks Slab -\> Brick Slab
  - Infested Stone Brick -\> Infested Stone Bricks
  - Daylight Sensor -\> Daylight Detector
  - Enchantment Table -\> Enchanting Table
  - Weighted Pressure Plate (Heavy) -\> Heavy Weighted Pressure Plate
  - Weighted Pressure Plate (Light) -\> Light Weighted Pressure Plate
  - Slightly Damaged Anvil -\> Chipped Anvil
  - Very Damaged Anvil -\> Damaged Anvil
  - Head -\> Player Head
  - Light Block -\> Light
- The name of the Stone Mason villager profession has been renamed to Mason to match Java Edition
- Mooshrooms now spawn at light level 9 and above ([MCPE-66830](https://bugs.mojang.com/browse/MCPE-66830))

## User Interface

- Added a button in the game menu to take a screenshot. You can view your screenshots in the screenshot gallery on your profile page
  - We'd love to hear your feedback and suggestions on this feature! You can send us your feedback here: [aka.ms/MCBedrockScreenshots](https://aka.ms/MCBedrockScreenshots) 

# Technical Updates

## API

- Fixed an issue where @minecraft/server-ui version 1.3.0 was not accessible

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor**. Learn [how to use](https://learn.microsoft.com/en-us/minecraft/creator/documents/editoroverview?view=minecraft-bedrock-stable)  the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions)  forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit)  and [samples](https://github.com/Mojang/minecraft-editor-extension-samples) .

Updates this week:

- Added `Water` dropdown inside the `Deferred Lighting Settings` panel.
- Added `Export` pane inside the file menu to allow customizing world settings before exporting to file.
- Updated Brush Tool with additional features and improved performance.
  - Added `Single Block` brush shape to allow more fine grain editing.
  - Added `Masking Mode` to customize how brushes interact with the world.
    - `Replace` will create a list of blocks that will be replaced when brushing. Blocks not in this list will not be impacted.
    - `Mask` will create a list of blocks that will be masked/ignored when brushing. Only blocks not in the list will be impacted.
- Added `IRootPropertyPane` and `ISubPanePropertyItem` interfaces to improve property pane API usability 
  - Renamed `createPropertyPane` and `removePropertyPane` functions for `IPropertyPane` to `createSubPane` and `removeSubPane`.
  - Added action button support for root property pane header.
  - Added visual customization support for sub panes.
- Added Ruler tool for measuring distances with new client widget framework.
- Added constraint on the weight value in a Block palette item. Valid values are in the range \[1,100\]. 
- Added missing Widget binding export 

## Graphical

- Fixed a bug that caused moon to appear darker ([MCPE-172971](https://bugs.mojang.com/browse/MCPE-172971))
- Fixed bug where culling rules for data driven blocks did not rotate with the transformation component 

## Resource and Behavior Packs

- The player's "helmet_layer_visible" variable is now based on the result of the `has_head_gear` Molang query and the player and persona render controller's part visibility for the helmet layer no longer checks for the existence of head gear. This fixes attachable scripts setting the "helmet_layer_visible" to 1.0 to now properly work and maintains a fix that prevents persona hair and head gear from clipping outside of mob and Pumpkin heads  ([MCPE-183058](https://bugs.mojang.com/browse/MCPE-183058))

# Experimental Features

## API

- ItemUseOnBeforeEvent
  - Added property `readonly isFirstEvent: boolean` to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button
- ItemUseOnAfterEvent
  - Added property `readonly isFirstEvent: boolean` to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button

## Graphical

- Added the ability to data-drive water parameters in the Deferred Technical Preview. See the updated Creator portal for more information 
- Added a new feature to the Deferred Technical Preview: realistic waves! This new feature must be opted into via a resource pack and will not be enabled by default. See the updated Creator portal for more information
- Added water controls to the Editor's Deferred Graphics Settings
