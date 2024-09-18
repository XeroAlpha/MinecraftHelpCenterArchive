---
title: Minecraft - 1.21.30 (Bedrock)
date: 2024-09-13T09:05:48Z
updated: 2024-09-18T12:17:29Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30220110283533-Minecraft-1-21-30-Bedrock
hash:
  user-content-experimental-features: experimental-features
  user-content-bundles: bundles
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-crafting: crafting
  user-content-full-keyboard-gameplay: full-keyboard-gameplay
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-how-to-play: how-to-play
  user-content-items: items
  user-content-mobs: mobs
  user-content-multiplayer: multiplayer
  h_01J80A4BVDRX35QT3T13812AJ7: playstationvr-
  user-content-rarity: rarity
  user-content-common: common
  user-content-epic: epic
  user-content-rare: rare
  user-content-uncommon: uncommon
  user-content-realms: realms
  user-content-sounds: sounds
  user-content-stability-and-performance: stability-and-performance
  user-content-touch-controls: touch-controls
  user-content-trial-chambers: trial-chambers
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-api: api
  01J800M2GJ8P0Y0S3RA635XQ88: blocks-2
  user-content-entity-components: entity-components
  01J800M2GK4KADHC2MCH7BAZN1: general-1
  01J800M2GMG532694ZX3ZXFK3S: graphical-1
  01J800M2GM4J5NWYYW0PJNMR81: items-1
  user-content-trade-tables: trade-tables
  user-content-loot-tables: loot-tables
  user-content-resource-and-behavior-packs: resource-and-behavior-packs
  01J800M2GPAA01JSQ9FZ9MF3GX: sounds-1
  user-content-structures: structures
  user-content-experimental-technical-updates: experimental-technical-updates
  01J800M2GR6XMZSK33BTJQ1C5S: add-ons-and-script-engine-1
  01J800M2GRR086JNH1S6YB2SM5: api-1
  user-content-camera: camera
---

**Posted:** 17 September 2024

![Kai is trading with a smith villager in a snowy biome](https://feedback.minecraft.net/hc/article_attachments/30220110281741)

In this week’s changelog, villagers can finally sleep soundly, foxes are getting a parity change, and we’ve got bundles of information about – bundles, which are now available as an experimental feature for all Bedrock players! Villagers will no longer make idle sounds when sleeping (they’re asleep, after all!) and adorable foxes across the Overworld will be waking up with the same amount of health (10!) as their Java counterparts. If that wasn’t enough we’ve also implemented some bug fixes, made parity changes, and more.

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).

# Experimental Features

## Bundles

A Bundle is an item that lets you stack different blocks or items together in the same inventory slot. Different items normally don’t stack together, so you can end up wasting space by only having a few items in each slot. A Bundle lets you pack those items together so there is no wasted space.

- Bundles are an experimental feature - to use them, you must turn on the Bundle experiment when creating a new world

  - Please note: Bundles are still being polished in the Preview and Betas with bug fixes and tweaks, so you might spot some slight differences in this experimental version!

- A Bundle is an item that can pack different items together into the same stack

- A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types

- You can insert items into a Bundle directly in the inventory

- Bundles have a tooltip that shows the items inside

  - The tooltip fits 3 rows and can always show at least 8 item types

- You can select any of the visible items to pull out of the Bundle

  - Use the scroll wheel on mouse, the right stick on a game controller, or tap on a touch device

- When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle

- When holding a Bundle in hand, you can empty it onto the ground

  - In the latest Beta & Preview version, when a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once

- The Bundle is crafted with one String above one Leather

- Bundle recipe is now unlocked by obtaining Leather or String

- **Known Issues:**

  - When moving items on touch devices, the wrong item icon may appear briefly
  - Bundles put in Decorated Pots, given to an Allay, or moved through Hoppers and Droppers may lose their contents

# Features and Bug Fixes

## Blocks

- Vertically retracting waterlogged blocks with a Piston no longer creates "ghost water" on the client ([MCPE-144222](https://bugs.mojang.com/browse/MCPE-144222))

- "purpur_block" block is now split into unique instances "purpur_block", and "purpur_pillar"; the previously unused chiseled and smooth purpur blocks were renamed to "deprecated_purpur_block_1" and "deprecated_purpur_block_2" for backwards compatibility, but are hidden from creative inventory and commands

- "structure_void" has had its block state removed and "air" variants will be converted to the base block

- Added new vanilla block and item tags to support vanilla item tier level destruction speeds for data driven blocks

- All Logs, Stripped Logs, Woods, and Stripped Woods are now treated consistently across various scenarios:

  - Flying mobs that can land on trees will now recognize these blocks as suitable landing positions
  - Parrots will now prefer these blocks as landing spots
  - Previously, these behaviors applied to only a subset of these blocks

- Kelp can no longer be placed on any type of Fence, instead of just a subset of them

- Seagrass can no longer be placed on any type of Fence, instead of just a subset of them

- Turtle Eggs can no longer be placed on any type of Fence, instead of just a subset of them

- "cobblestone_wall" block is now split into unique instances "cobblestone_wall", "mossy_cobblestone_wall", "granite_wall", "diorite_wall", "andesite_wall", "sandstone_wall", "brick_wall", "stone_brick_wall", "mossy_stone_brick_wall", "nether_brick_wall", "end_stone_brick_wall", "prismarine_wall", "red_sandstone_wall" and "red_nether_brick_wall" 

- "granite_wall", "diorite_wall", "andesite_wall", "stone_brick_wall", "mossy_stone_brick_wall" and "prismarine_wall" now have a destruction time of 1.5

- "sandstone_wall" and "red_sandstone_wall" now have a destruction time of 0.8

- "end_stone_brick_wall" now has a destruction time of 3.0

- "sponge" block is now split into unique instances: "sponge" and "wet_sponge" 

- Colored Torch block instances, "colored_torch_rg" and "colored_torch_bp", are now split into unique instances "colored_torch_red", "colored_torch_green", "colored_torch_blue", and "colored_torch_purple" 

## Crafting

- When crafting a Firework, adding or removing items from the grid will update the output item appropriately ([MCPE-183455](https://bugs.mojang.com/browse/MCPE-183455))

## Full Keyboard Gameplay

- Added Q and E as left and right click equivalents in JSON UI menus (including inventory menus) when playing in Full Keyboard Gameplay mode.

## Gameplay

- Now Ominous bottle with lower level can still apply Bad Omen effect of lower level, if player had one active before 
- Boats will no longer disappear while sliding on Ice ([MCPE-180432](https://bugs.mojang.com/browse/MCPE-180432)) 
- Fixed a crash that could occur when opening a Lectern while a Sticky Piston was moving it. The Lectern now closes the book screen when moved ([MCPE-183508](https://bugs.mojang.com/browse/MCPE-183508)) 
- Dismounting a vehicle no longer puts the player inside the ground on some platforms ([MCPE-184363](https://bugs.mojang.com/browse/MCPE-184363)) ([MCPE-182448](https://bugs.mojang.com/browse/MCPE-182448))
- Fixed the collision shape for Trial Spawners; it is now the same size as an ordinary block ([MCPE-178305](https://bugs.mojang.com/browse/MCPE-178305)) 
- Added a new death message for when players are defeated by a Mace smash attack 
- Fixed an issue where End Gateway Portal would teleport some players near their End Portal ([MCPE-66061](https://bugs.mojang.com/browse/MCPE-66061))
- The '/camera set' command will now run in the correct order when an existing camera interpolation is running ([MCPE-183986](https://bugs.mojang.com/browse/MCPE-183986))

## General

- Fixed a bug that caused placeholder textures to appear after minimizing and then restoring the game window 
- Adding input glyph support in the name tags displayed over the entities

## Graphical

- Fixed an issue where Banners were rendered before other transparent objects regardless of their positions ([MCPE-130262](https://bugs.mojang.com/browse/MCPE-130262))
- Renamed the maximum framerate slider "Framerate Limit" and added a tooltip to better describe its purpose

## How to Play

- Added line break ability for How to Play topic labels instead of having it add "..." when the line gets too long

## Items

- Each Banner Pattern item now includes their pattern type in their name instead of as a subtitle ([MCPE-182508](https://bugs.mojang.com/browse/MCPE-182508)) 
- Smithing Template items are now named after their template type instead of the generic "Smithing Template" name 
  - They instead specify that they are a Smithing Template through a subtitle in the hover text
- Unique item textures have been given to each Banner Pattern item to better distinguish between each other
- Illager Banner has been renamed to Ominous Banner to match Java Edition
- Fixed block items turning into an incorrect variant when importing worlds older than 1.5.0 ([MCPE-181944](https://bugs.mojang.com/browse/MCPE-181944))
- EDU: Fixed Material Reducer recipes not working with some flattened blocks such as Andesite or Terracotta

## Mobs

- Fixed custom entity's name not appearing correctly in death messages ([MCPE-158447](https://bugs.mojang.com/browse/MCPE-158447)) 
- The Breeze no longer has a minimum distance required to attack a target ([MCPE-183011](https://bugs.mojang.com/browse/MCPE-183011)) 
- Parrot can now imitate Endermite 
- Parrots now imitate Drowned ([MCPE-46302](https://bugs.mojang.com/browse/MCPE-46302)) 

## Multiplayer

- Fixed an issue where the invite screen in-game would not show the correct substatus 

## PlayStation®VR ** **

- Our ability to support PlayStation®VR  has come to an end, and will no longer be supported in updates after March of 2025. After you receive the final update, you will still receive updates on your PlayStation® and be able to play without PlayStation®VR. From this point on you can keep building in your worlds, and your Marketplace purchases (including Tokens) will continue to be available. You will no longer be able to use your PlayStation®VR with Minecraft as it will no longer be supported in the latest updates.

## Rarity

- Various items and blocks have had their assigned rarities changed ([MCPE-182414](https://bugs.mojang.com/browse/MCPE-182414))
  - Once these rarity changes come to Java Edition in a future snapshot, all item and block rarities will be in parity across both platforms
- Rarity is a set of categories which determine the color used to display the name of an item or block
  - It has no gameplay impact, but is used to signal how difficult something is to obtain
  - By default, unless specified otherwise, all items and blocks have a rarity of Common which displays their name in the color white
- We have re-evaluated the rarity of all items and blocks in the game to more accurately reflect the current challenge of obtaining them, given the following guidelines:
  - Items and blocks become more rare depending on the following factors:
    - The chance of finding it in a loot table, including mob drops
    - The amount of travelling required to obtain it
    - The difficulty of any obstacle which must be overcome to obtain it
    - The possible amount of that item or block which exists in the world
  - Any item or block which can be crafted must inherit the highest rarity of its crafting ingredients
    - For example, a Mace has an Epic rarity because one of its ingredients (the Heavy Core) has an Epic rarity
    - Likewise, any crafted item which has only Common crafting ingredients must also be Common
- The lists below detail the items and blocks which have changed to that rarity category

### Common

- End Crystal
- Golden Apple

### Epic

- Elytra
- Dragon Head
- Silence Armor Trim

### Rare

- Enchanted Golden Apple
  - Enchanted Golden Apples have become more common in recent years due to being accessible in both Ancient Cities and Trial Chambers, warranting a demotion to Rare instead of Epic
- Trident
  - We recently increased Trident's rarity up to Epic from Common, but after re-evaluating we felt that it was easier to obtain than other items in the Epic category such as Heavy Cores or Elytra
- Nether Star
- Ward Armor Trim
- Eye Armor Trim
- Vex Armor Trim
- Spire Armor Trim
- Wither Skeleton Skull
- Skull Charge Banner Pattern
  - Now that Wither Skeleton Skulls are Rare, these banner patterns should be Rare as well
- Thing Banner Pattern
  - Now that Enchanted Golden Apples are Rare, these banner patterns should be Rare as well
- The following Music Discs:
  - Pigstep
  - otherside
  - Creator

### Uncommon

- Sniffer Egg
- Chainmail Helmet
- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Recovery Compass
- Disc Fragment 5
- Nautilus Shell
- Echo Shard
- Goat Horns
- Pottery Sherds
- Ominous Bottles
- Ominous Banner
- Netherite Upgrade
- Sentry Armor Trim
- Dune Armor Trim
- Coast Armor Trim
- Wild Armor Trim
- Tide Armor Trim
- Snout Armor Trim
- Rib Armor Trim
- Wayfinder Armor Trim
- Shaper Armor Trim
- Raiser Armor Trim
- Host Armor Trim
- Flow Armor Trim
- Bolt Armor Trim
- The following Music Discs:
  - 13
  - Cat
  - Blocks
  - Chirp
  - Creator (Music Box)
  - Far
  - Mall
  - Mellohi
  - Stal
  - Strad
  - Ward
  - 11
  - Wait
  - Relic
  - 5
  - Precipice

## Realms

- Realms Stories content is no longer cropped when scrolling
- Text no longer overlaps screenshots in Realms Stories on Galaxy Z Flip devices on any UI size
- Gamepad legend no longer overlaps with UI elements when choosing a preview realm to create a world on
- In split screen mode, the subscriptions tab of the settings menu is now only shown to the primary player
- Realm ID is now displayed in the debug text for preview/beta builds while connected to a Realm or while on associated screens
- The Realms backup list now displays the date that the backup was created, instead of the age of the backup

## Sounds

- Sculk charge particles now have sound
- Wither Skeleton now has its own "step" sound ([MCPE-174857](https://bugs.mojang.com/browse/MCPE-174857))
- Basalt Deltas now has a moody ambient sound again

## Stability and Performance

- Fixed a crash that could occur when loading texture data ([MCPE-184728](https://bugs.mojang.com/browse/MCPE-184728))

## Touch Controls

- Improved new d-pad for touch controls. It is now more compact, includes back strafing buttons and a slightly extended zone outside where camera input is not received in order to prevent unexpected camera movement. When customizing controls, the diagonal buttons are visible as well.
- Fixes bug where the hide hud command would not hide the dpad touch control

## Trial Chambers

- Replaced the empty chests at the entrance of chamber with a Hopper and Barrel to better show the players that these are meant for disposal and inventory management!

## User Interface

- Fixed a softlock that could occur when purchasing subscriptions 
- Fixed a bug where the 'Drink' interaction prompt was not displayed when the player was holding an Ominous Bottle 
- Fixed a bug where player health would be rounded down instead of rounded up, causing the HUD to sometimes only show empty health icons ([MCPE-183157](https://bugs.mojang.com/browse/MCPE-183157)) 
- The chat output's scroll position keeps its position after the game screen re-gains focus 
- Shortened the URL for signing in on another device to [microsoft.com/link](http://microsoft.com/link)
- Added a button in the game menu to take a screenshot. You can view your screenshots in the screenshot gallery on your profile page 
  - We'd love to hear your feedback and suggestions on this feature! You can send us your feedback here: [aka.ms/MCBedrockScreenshots](https://aka.ms/MCBedrockScreenshots) 
- Beacon title text is no longer different from the other containers in Pocket UI ([MCPE-176186](https://bugs.mojang.com/browse/MCPE-176186)) 
- Fixed a bug where crafting category tabs would not be visible in Pocket UI after hiding the recipe book in Classic UI ([MCPE-183825](https://bugs.mojang.com/browse/MCPE-183825))
- The arrow from the Stonecutter screen is now visible all the time, just like in the other similar screens ([MCPE-160236](https://bugs.mojang.com/browse/MCPE-160236))
- Fixed an issue where items durability and storage bar was incorrect size and placement on certain screens
- Added hotkeys to take screenshots in game on controller and keyboard. On mouse/keyboard: F2. On controller: LB+RB, L1+R1, L Button+R Button
- The icons for the effects will now change size depending on the GUI scale ([MCPE-180238](https://bugs.mojang.com/browse/MCPE-180238)) 
- Fixed an issue where the world seed template button may be missing in the Create New World screen 

## Vanilla Parity

- Snow Golems with Fire Resistance no longer take damage in warm biomes ([MCPE-94448](https://bugs.mojang.com/browse/MCPE-94448)) 
- Uncarved pumpkin blocks can no longer be used to create Snow Golems and Iron Golems ([MCPE-33801](https://bugs.mojang.com/browse/MCPE-33801))
- When an item is enchanted, their rarity status is now increased depending on their base rarity 
  - If the base rarity of an item is Common or Uncommon, it will become Rare when enchanted
  - If the base rarity of an item is Rare, it will become Epic when enchanted
  - If the base rarity of an item is Epic, it will stay Epic when enchanted
- Entities falling into water now make the same splashing sound as in Java Edition ([MCPE-44120](https://bugs.mojang.com/browse/MCPE-44120)) 
- Fixed a bug where a standalone Scaffolding block could not be placed on top of a Structure Block ([MCPE-169818](https://bugs.mojang.com/browse/MCPE-169818))
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
- Fixed Mushroom Farms in Woodland Mansions that incorrectly spawned Dirt instead of Coarse Dirt 
- The following blocks have been brought to parity with Java Edition for Redstone power: 
  - minecraft:mangrove_roots -\> now powered ([MCPE-153838](https://bugs.mojang.com/browse/MCPE-153838))
  - minecraft:beacon -\> no longer powered
  - minecraft:tnt -\> no longer powered
  - minecraft:sea_lantern -\> no longer powered ([MCPE-79271](https://bugs.mojang.com/browse/MCPE-79271))
- When mining Top Snow with a Silk Touch enchanted Shovel, Top Snow is now dropped in an amount corresponding to the number of layers of the block ([MCPE-59729](https://bugs.mojang.com/browse/MCPE-59729)) 
  - If there are 8 layers, a Snow Block will be dropped instead
- Players can now craft two Cyan Dye from one Pitcher Plant ([MCPE-171061](https://bugs.mojang.com/browse/MCPE-171061))
- Foxes now have 10 health ([MCPE-48233](https://bugs.mojang.com/browse/MCPE-48233))
- Villagers no longer make idle sounds when sleeping

# Technical Updates

## AI Goals

- Removed the `minecraft:behavior.peek` AI goal component that was never used 

## Add-Ons and Script Engine

- Removed deprecated behavior pack download related code from packets in the world join flow 
- Fixed a bug where all custom blocks were rotated 180 degrees in the UI
- The default for the "gui" "item_display_transforms" "rotation" field is `[30, 45, 0]` instead of `[30, 225, 0]`
  - "item_display_transforms": {  
    "gui" : {  
    "translation": \[0, 0, 0\],  
    "rotation": \[30, 45, 0\],  
    "scale": \[0.625, 0.625, 0.625\],  
    "rotation_pivot" : \[0, 0, 0\],  
    "scale_pivot" : \[0, 0, 0\],  
    "fit_to_frame" : true  
    }  
    }

## API

- Fixed the `isEmoting` method on `Player` ([MCPE-180083](https://bugs.mojang.com/browse/MCPE-180083))
- Released class `BlockRecordPlayerComponent` from `beta` to `1.14.0`
  - Released `UIManager` class from Beta to `1.3.0`
  - Released `closeAllForms` method on `UIManager` from Beta to `1.3.0`
- `@minecraft/server`
  - Released `playerEmote` World after event from Beta to `1.14.0` 
- Released `EntityQueryPropertyOptions` from `beta` to `1.14.0`
- Moved `EntityStrengthComponent` from `beta` to `1.13.0` 
- Fixed an issue where @minecraft/server-ui version 1.3.0 was not accessible
- Changes to iterators to make them properly store their own state, be simplified and better handle common usages
- Fixed the `next` method for iterable objects
- Moved Target Selector for Actor Properties APIs from beta to 1.14.0

## Blocks

- Fixed `minecraft:repeating_command_block` to not execute when changing to `needs redstone` from `automatic` 
- The "item_display_transforms" field in block geometries no longer requires the "Upcoming Creator Features" toggle
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
- Added new experimental field "item_specific_speeds" to "minecraft:destructible_by_mining" block componentCommands

<!-- -->

- The `/locate structure` command output now displays the identifier of the found structure instead of its name
- Added `all` parameter to `/reload` command. This causes players to quit the world and rejoin, as well as reloading all behavior and resource packs

## Entity Components

- "behavior.fire_at_target" is no longer restricted to Vanilla content 
  - This goal allows an entity to attack by firing a shot with a delay
- "behavior.jump_around_target" is no longer restricted to Vanilla content
  - This goal allows an entity to jump over and around a target
- "behavior.move_around_target" is no longer restricted to Vanilla content
  - This goal allows an entity to move around a target

## General

- Updated Feature Rules auto-generated documentation

## Graphical

- Fixed a bug that caused moon to appear darker ([MCPE-172971](https://bugs.mojang.com/browse/MCPE-172971)) 
- Fixed a bug where culling rules for data driven blocks did not rotate with the transformation component 

## Items

- Added a content error for if an icon can't be found with `icon_name` from `minecraft:icon` in 1.10 data
- Fixed an issue where item components would not initialize on remote clients 
- Added "minecraft:rarity" item component which allows specifying the rarity of an item 
  - It has a single field "value" which accepts the following values:
    - "common"
    - "uncommon"
    - "rare"
    - "epic"
  - Can also be written as an inlined value like so: "minecraft:rarity": "uncommon"
  - The rarity of the item will determine which color it uses for its name
    - If the item has a "minecraft:hover_text_color" component specified, that hover text color will take priority and be used instead of the rarity color
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
- The minecraft:dyeable component is now exposed to creators

## Trade Tables

- The Trade Table files are now versioned
  - TradeTier's "total_exp_required" is a required member from version 1.21.30
  - TradeTier's "groups" is a required member from version 1.21.30
  - TradeItem's quantity "min" cannot be lower than "max" from version 1.21.30

## Loot Tables

- Added "set_potion" item function for loot tables which can set the potion type of compatible items with a potion id
  - It has a single field "id" which accepts the following potion id values:
    - "water"
    - "mundane"
    - "long_mundane"
    - "thick"
    - "awkward"
    - "nightvision"
    - "long_nightvision"
    - "invisibility"
    - "long_invisibility"
    - "leaping"
    - "long_leaping"
    - "strong_leaping"
    - "fire_resistance"
    - "long_fire_resistance"
    - "swiftness"
    - "long_swiftness"
    - "strong_swiftness"
    - "slowness"
    - "long_slowness"
    - "strong_slowness"
    - "water_breathing"
    - "long_water_breathing"
    - "healing"
    - "strong_healing"
    - "harming"
    - "strong_harming"
    - "poison"
    - "long_poison"
    - "strong_poison"
    - "regeneration"
    - "long_regeneration"
    - "strong_regeneration"
    - "strength"
    - "long_strength"
    - "strong_strength"
    - "weakness"
    - "long_weakness"
    - "wither"
    - "turtle_master"
    - "long_turtle_master"
    - "strong_turtle_master"
    - "slow_falling"
    - "long_slow_falling"
    - "wind_charged"
    - "weaving"
    - "oozing"
    - "infested"
  - The following types of items are compatible with the "set_potion" function:
    - Potion
    - Lingering Potion
    - Splash Potion
    - Arrow

## Resource and Behavior Packs

- The player's "helmet_layer_visible" variable is now based on the result of the `has_head_gear` Molang query and the player and persona render controller's part visibility for the helmet layer no longer checks for the existence of head gear. This fixes attachable scripts setting the "helmet_layer_visible" to 1.0 to now properly work and maintains a fix that prevents persona hair and head gear from clipping outside of mob and Pumpkin heads ([MCPE-183058](https://bugs.mojang.com/browse/MCPE-183058)) 

## Sounds

- Specifying an invalid sound event in a sounds.json file will now trigger a content error 

## Structures

- Fixed `minecraft:structure_block` debug bounding box rendering when clients initially load server worlds containing one 

# Experimental Technical Updates

## Add-Ons and Script Engine

- Added "item_display_transforms" control to the block geometry file. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside the minecraft:geometry json object and requires geometry format_version 1.21.0 and the "Upcoming Creator Features" toggle
  - Default values example:
    - "item_display_transforms": {  
      "gui" : {  
      "translation": \[0, 0, 0\],  
      "rotation": \[30, 225, 0\],  
      "scale": \[0.625, 0.625, 0.625\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\],  
      "fit_to_frame" : true  
      },  
      "firstperson_righthand": {  
      "translation": \[0, 0, 0\],  
      "rotation": \[0, 45, 0\],  
      "scale": \[0.4, 0.4, 0.4\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      },  
      "firstperson_lefthand": {  
      "translation": \[0, 0, 0\],  
      "rotation": \[0, -135, 0\],  
      "scale": \[0.4, 0.4, 0.4\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      },  
      "thirdperson_righthand": {  
      "translation": \[0, 2.5, 0\],  
      "rotation": \[75, 45, 0\],  
      "scale": \[0.375, 0.375, 0.375\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      },  
      "thirdperson_lefthand": {  
      "translation": \[0, 2.5, 0\],  
      "rotation": \[75, 45, 0\],  
      "scale": \[0.375, 0.375, 0.375\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      },  
      "ground": {  
      "translation": \[0, 3.0, 0\],  
      "rotation": \[0, 0, 0\],  
      "scale": \[0.25, 0.25, 0.25\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      },  
      "fixed": {  
      "translation": \[0, 0, 0\],  
      "rotation": \[0, 0, 0\],  
      "scale": \[0.5, 0.5, 0.5\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      },  
      "head": {  
      "translation": \[0, 0, 0\],  
      "rotation": \[0, 0, 0\],  
      "scale": \[1, 1, 1\],  
      "rotation_pivot" : \[0, 0, 0\],  
      "scale_pivot" : \[0, 0, 0\]  
      }  
      }

## API

- PlayerInteractWithBlockBeforeEvent
  - Added property `readonly isFirstEvent: boolean` to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button
- PlayerInteractWithBlockAfterEvent
  - Added property `readonly beforeItemStack?: ItemStack` to beta. This is the item the player was selecting before the interaction succeeded
  - Added property `readonly isFirstEvent: boolean` to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button
  - This after event will no longer always trigger on an empty hand. The interaction with the block needs to be successful for it to trigger the after event.
- PlayerInteractWithEntityAfterEvent
  - Added property `readonly beforeItemStack?: ItemStack` to beta. This is the item the player was selecting before the interaction succeeded
  - Cancelling the before event will now no longer trigger the after event
  - This event will now only be triggered on a successful interaction
- ItemUseOnBeforeEvent
  - Added property `readonly isFirstEvent: boolean` to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button
- ItemUseOnAfterEvent
  - Added property `readonly isFirstEvent: boolean` to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button
- Moved class `PlayerCursorInventoryComponent` from `beta` to `1.14.0`

## Blocks

- Fixed an issue with 'minecraft:redstone_conductivity' support for custom blocks ([MCPE-178339](https://bugs.mojang.com/browse/MCPE-178339)) 

## Camera

- Exposed the entity offset so the user can change the camera's pivot point from the entity's center for third person boom cameras 
- Focus Target Camera: Added rotation_speed in the free camera preset JSON to control the speed of rotation for targeting an entity. This value will be a float that represents degrees turned per second 
- Focus Target Camera: Added snap_to_target bool in the free camera preset JSON to enable snapping to the target entity on the first tick
