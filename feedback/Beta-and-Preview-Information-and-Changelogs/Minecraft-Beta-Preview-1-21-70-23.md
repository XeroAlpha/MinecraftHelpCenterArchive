---
title: Minecraft Beta & Preview - 1.21.70.23
date: 2025-02-12T17:10:58Z
updated: 2025-02-12T17:24:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34234917741325-Minecraft-Beta-Preview-1-21-70-23
hash:
  user-content-experimental-features: experimental-features
  user-content-cartographer-and-wandering-trader-rebalance: cartographer-and-wandering-trader-rebalance
  user-content-cartographer-trades: cartographer-trades
  user-content-wandering-trader-trades: wandering-trader-trades
  user-content-sheep-wool-color-in-warm-and-cold-biomes: sheep-wool-color-in-warm-and-cold-biomes
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-village-chest-bundles: village-chest-bundles
  user-content-desert-animal-spawning: desert-animal-spawning
  user-content-blocks: blocks
  user-content-bush: bush
  user-content-cactus-flower: cactus-flower
  user-content-firefly-bush: firefly-bush
  user-content-leaf-litter: leaf-litter
  user-content-nether-fungi: nether-fungi
  user-content-short-and-tall-dry-grass: short-and-tall-dry-grass
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-friends-drawer-improvements%5B%5D(https%3A%2F%2Fdev.azure.com%2Fdev-mc%2Fminecraft%2F_wiki%2Fwikis%2Fminecraft.wiki%2F28364%2Fr21u7-2-preview%3Fanchor%3Dfriends-drawer-improvements): friends-drawer-improvements
  user-content-mobs: mobs
  user-content-pause: pause
  user-content-player: player
  user-content-sound: sound
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-components: components
  user-content-dedicated-server: dedicated-server
  user-content-editor: editor
  user-content-entity-event-responses: entity-event-responses
  user-content-entity-events: entity-events
  user-content-entity-filters: entity-filters
  user-content-jigsaw: jigsaw
  h_01JKXHYQ2DJ0ZG6VTZSW96A25F: mobs-1
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-api: api
  user-content-%60%40minecraft%2Fserver%60: ""
  user-content-%60%40minecraft%2Fserver-net%60: "-1"
  user-content-%60%40minecraft%2Fserver-ui%60: "-2"
  user-content-%60%40minecraft%2Fdiagnostics%60: "-3"
  h_01JKXHYQ2DJR98N0G96QY78TNN: blocks-1
  user-content-graphical: graphical
---

**Posted:** 12 February 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![zukfhnkxdrhvfkdxrhbf.jpg](https://feedback.minecraft.net/hc/article_attachments/34234917737869)

It's time for another Preview and Beta! On this extra wool-some Wednesday, we are introducing new, biome-based spawn rules for differently colored sheep, updated trades for wandering traders and cartographers - and more! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/).

Enjoy!

# Experimental Features

- Fixed Leaf Litter being able to be bonemealed ([MCPE-190253](https://bugs.mojang.com/browse/MCPE-190253))
- Fixed Cactus Flower growth so they only grow if a Cactus Block itself would survive to avoid breaking Cactus Farms
- Aim Assist no longer requires the "Aim Assist" experimental toggle

## Cartographer and Wandering Trader Rebalance

- Integrated the Village Trade Rebalance experiment changes to the Cartographer and Wandering Trader

### Cartographer Trades

- Cartographers now sell 7 new maps which each point to a different village or other structures in a different biome
  - These maps can help players who want to quickly find a specific location.
- Cartographers from different village types will sell a different range of maps and colored banners

![Cartographer trades 2025-02-11.png](https://feedback.minecraft.net/hc/article_attachments/34235397726989)

### Wandering Trader Trades

- The Wandering Trader now has better prices, more trades and sells larger amounts of many items
- They will also now buy basic supplies from players, so it's possible to get some emeralds by helping them prepare for their next journey even if you don't feel like buying anything
- The Wandering Trader will offer to buy two items from this list:
  - Water Bottle
  - Water Bucket
  - Milk Bucket
  - Fermented Spider Eye
  - Baked Potato
  - Hay Bale
- Wandering Traders now have a chance of selling these items (in addition to their previous trades):
  - Logs (Acacia, Birch, Dark Oak, Jungle, Oak, Spruce, Pale Oak or Cherry)
  - Enchanted Iron Pickaxe
  - Potion of Invisibility

![Wandering Trader trades 2025-02-11.png](https://feedback.minecraft.net/hc/article_attachments/34235397728141)

## Sheep wool color in warm and cold biomes

- Sheep have updated rules for which color of wool they have based on which biome they spawn in:
  - Temperate Biomes: (these colors are unchanged from current behavior)
    - Common sheep color is white
    - Uncommon sheep colors are black, gray, light gray and brown
    - There is a rare chance for a pink Sheep to spawn
  - Cold biomes:
    - Common Sheep color is black
    - Uncommon Sheep colors are light gray, light blue, blue and cyan
    - There is a rare chance for a pink Sheep to spawn
  - Warm Biomes:
    - Common Sheep color is brown
    - Uncommon Sheep colors are gray, yellow, orange and red
    - There is a rare chance for a pink Sheep to spawn

# Features and Bug Fixes

## Village Chest Bundles

- Added a 33% chance of finding a Bundle in various Villager chests:
  - Cartrographer
  - Tannery
  - Weaponsmith
  - Desert House
  - Plains House
  - Snowy House
  - Savanna House
  - Taiga House

## Desert Animal Spawning

- Camels will naturally spawn in the Desert

## Blocks

### Bush

- Bushes can now be snowlogged ([MCPE-190294](https://bugs.mojang.com/browse/MCPE-190294))
- Bush can now be replaced by other blocks
- Bush drops itself when broken with Shears or with a tool that is enchanted with Silk Touch, otherwise it drops nothing

### Cactus Flower

- Cactus Flowers can now be placed on Farmland blocks ([MCPE-190391](https://bugs.mojang.com/browse/MCPE-190391))
- Endermenn can no pick up Cactus Flowers

### Firefly Bush

- Firefly Bushes can now be snowlogged ([MCPE-190294](https://bugs.mojang.com/browse/MCPE-190294))
- Tweak Firefly Bush world generation:
  - Lowered chance of them being attempted to be placed by water
  - Reduce patch size when placed to be from 2-5
- The Firefly Bush now has the same bonemealing properties as the Bush block

### Leaf Litter

- Leaf Litter is now replaceable
- Leaf Litter can only be placed on blocks which provide full surface support

### Nether Fungi

- Warped and Crimson Fungi no longer z-fight ([MCPE-190389](https://bugs.mojang.com/browse/MCPE-190389))

### Short and Tall Dry Grass

- Short and Tall Dry Grass are now randomly offset, like regular Short and Tall Grass ([MCPE-190387](https://bugs.mojang.com/browse/MCPE-190387))

## Gameplay

- Players fall momentum is no longer reset after exiting and re-entering the world ([MCPE-188490](https://bugs.mojang.com/browse/MCPE-188490))

## General

- In Server Authoritative movement, when Player is corrected, the movement will not have easing anymore. This is a better feel, as can be seen with upward, repeating, Pistons
- Fixed typos in music definitions and sound definitions that were causing the wrong music to play for soulsand valley, desert mutated, and jungle mutated biomes

### Friends Drawer Improvements

- Players can now also find the Friends Drawer in Create New World, Edit World and your profile, in addition to the Play Screen, Main Menu and Game Menu, in the top right of the screen. We hope this will make it easier to connect and play with your friends! Let us know how you like it, at [aka.ms/mcfriendsdrawerfeedback](https://aka.ms/mcfriendsdrawerfeedback) 

## Mobs

- Fixed Pufferfish attack and inflate logic ([MCPE-149129](https://bugs.mojang.com/browse/MCPE-149129)) ([MCPE-69522](https://bugs.mojang.com/browse/MCPE-69522))
  - Pufferfish no longer only trigger inflate/deflate logic against monsters and players. Now triggers inflate/deflate logic against Axolotls, all non-aquatic mobs, and players
  - Pufferfish no longer only attack players and monsters. Now they attack Axolotls, all non-aquatic mobs, and players that aren't in creative mode
  - Pufferfish no longer only poison players and monsters. Now they poison Axolotls, all non-aquatic mobs excluding undead monsters, and players that aren't in creative mode

## Pause

- Fix so data driven particles pause properly when game is paused ([MCPE-188461](https://bugs.mojang.com/browse/MCPE-188461))

## Player

- Fixed an issue where other players in multiplayer scenarios would sometimes get stuck in their dying animation after respawning
- Player characters no longer rotate sideways when moving forward

## Sound

- Fixed Block breaking sounds not playing ([MCPE-190264](https://bugs.mojang.com/browse/MCPE-190264))

## User Interface

- Hand bobbing no longer occurs while the game is paused ([MCPE-188457](https://bugs.mojang.com/browse/MCPE-188457))
- Minecraft logo misaligned on progress screen
- Touch controls: Fixed a bug where a player could stay moving diagonally after opening a menu ([MCPE-190308](https://bugs.mojang.com/browse/MCPE-190308))
- Keep Inventory is back to being a cheat on all difficulties

# Technical Updates

## Components

- Added validation for asset references in components
  - Content errors will log missing references for the following fields:
    - item references
    - block reference in item component in "minecraft:block_placer"
    - loot table reference in block component "minecraft:loot"
- The "entity_sensor" component's "find_players_only" field now functions correctly, properly restricting searches to Players only and affecting all subsensors

## Dedicated Server

- Exposed two new parameters for dedicated server when in server-auth-with-rewind. These will make the server more strict on player positions. Look in server.properties for more information on what these do
  - server-authoritative-movement-strict default to false and can be set to true. Will affect Player position acceptance
  - server-authoritative-dismount-strict default to false and can be set to true. Will affect Player position when dismounting

## Editor

- Added `IButtonPanePropertyItem` API for customizing button layouts
  - `IPropertyPane.addButtonPane` and `IModalControlPane.addButtonPane` API methods to create button pane items
- Updated the mouse indicator for various tools to no longer linger after the app is suspended and resumed
- Updated the maximum allowed line segments in Line Tool to 40 to address a crash

## Entity Event Responses

- Added the "stop_movement" entity event response, which stops the entity's movement
  - The "stop_vertical_movement" field specifies whether vertical movement should be stopped
  - The "stop_horizontal_movement" field specifies whether horizontal movement should be stopped
  - This response does not stop navigation or prevent future movement
    - If that's the desired outcome, also remove the components responsible for that
- Added the "set_home_position" entity event response, which sets the entity's home position to its current position
  - For this to have any effect, the entity must already have a "minecraft:home" component

## Entity Events

- Added "first_valid" event type, it will evaluate every filter in order and execute the first valid one

## Entity Filters

- The "in_clouds" entity filter now succeeds when an entity's bounding box intersects the cloud layer, rather than only when its bottom is within it

## Jigsaw

- Fixed gaps from appearing between data-driven jigsaw structure pieces.

## Mobs

- Added aquatic family-type for all aquatic mobs
- Normal Minecart is no longer considered a mob

# Experimental Technical Updates

- Removed unused experimental json field peaks_factor from minecraft:mountain_parameters in the behavior pack biome file

## API

### `@minecraft/server`

- Fixed a bug where call methods on `Player.inputInfo`, `Player.inputPermissions`, or `Player.aimAssist` on a player that left and rejoined the world would throw an error.

### `@minecraft/server-net`

- Updated the execution privilege of most APIs to allow them to be called in read-only contexts ("before" events)
- Added new error `InternalHttpRequestError`
  - An error thrown when a platform-level HTTP error occurs. Information provided in this class may be useful for diagnostics purposes but will differ from platform to platform.
- Added new error `MalformedHttpRequestError`
  - An error thrown when a malformed HTTP request is attempted to be sent.

### `@minecraft/server-ui`

- Added method `divider(): ActionFormData;`. It adds a section divider into the form.
- Added method `divider(): ModalFormData;`. It adds a section divider into the form.

### `@minecraft/diagnostics`

- Fixed crash on dedicated server when submitting error reports to Sentry.

## Blocks

- `"minecraft:material_instances"` component has a new experimental boolean field `"isotropic"` for format version **1.21.70** and higher, this field controls rotating the face UVs randomly based on BlockPos

## Graphical

- Fixed the behavior of the Darkness status effect in the Deferred Technical Preview
