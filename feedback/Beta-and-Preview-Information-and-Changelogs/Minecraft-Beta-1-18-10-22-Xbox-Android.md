---
title: Minecraft Beta - 1.18.10.22 (Xbox / Android)
date: 2021-12-09T15:59:09Z
updated: 2021-12-09T21:37:57Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4416062048397-Minecraft-Beta-1-18-10-22-Xbox-Android
---

**Posted:** 9 December 2021

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work-in-progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- This beta is available only on Xbox and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Snowy Minecraft Village](https://feedback.minecraft.net/hc/article_attachments/4416078376333/Screen_Shot_12-09-21_at_12.28_PM.JPG)

 

It's time for another Bedrock Beta! As always, we really appreciate all the feedback you send to [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback) and please report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/). As we often do, we have a handful of small Vanilla Parity bugs in this week's beta. If you would like to tell us what other small parity fixes and features you would like to see added to the game, please let us know in this player survey, which will be open for the next few days: <https://aka.ms/MCParitySurvey>

 

# **Features and Bug Fixes**

## **Blocks**

- Worlds with inconsistent layers of bedrock between Y=1 and Y=4, inclusive, (such as those where non-bedrock has generated or been placed in those layers) now correctly and consistently replace bedrock with deepslate. ([MCPE-149251](https://bugs.mojang.com/browse/MCPE-149251))
- Light Blocks can now be placed on other Light Blocks while sneaking ([MCPE-137744](https://bugs.mojang.com/browse/MCPE-137744))

## **Gameplay**

- Fixed a crash that could occur when trading Maps with Cartographer Villagers ([MCPE-142388](https://bugs.mojang.com/browse/MCPE-142388))
- Fixed food giving effects 20 times too long ([MCPE-148553](https://bugs.mojang.com/browse/MCPE-148553))
- Fixed Honey Bottles not removing poison effect
- Fixed players not teleporting after eating Chorus Fruit
- Players’ viewing direction will no longer snap when facing South in a Boat ([MCPE-148460](https://bugs.mojang.com/browse/MCPE-148460))
- When a player dies, the camera now tilts to the right instead of the left ([MCPE-148604](https://bugs.mojang.com/browse/MCPE-148604))
- Lava hitbox no longer extends beyond lava

## **Graphical**

- Updated Dirt Path side texture ([MCPE-148568](https://bugs.mojang.com/browse/MCPE-148568))
- Changed 'door_oak' texture filename back to 'door_wood' ([MCPE-148502](https://bugs.mojang.com/browse/MCPE-148502))
- Reversed Parrot head and wing bottom textures ([MCPE-148573](https://bugs.mojang.com/browse/MCPE-148573))
- Moved Beetroot and Melon Seed textures 1 pixel row down to match Java Edition ([MCPE-148561](https://bugs.mojang.com/browse/MCPE-148561))
- Removed unused pixels in Cocoa Beans stage 0 and stage 1 textures to match Java Edition
- Updated Smooth Stone texture in Armor Stand base ([MCPE-148565](https://bugs.mojang.com/browse/MCPE-148565))
- Removed horizontal lines in Oak and Iron upper Door textures ([MCPE-148566](https://bugs.mojang.com/browse/MCPE-148566))
- Removed hood in Witch, Evoker, and Vindicator textures to match Java Edition
- Changed alpha values of Red and Blue Stained Glass textures to match Java Edition (Vanilla Parity)
- Fixed the hammer icon's color palette on the Anvil screen ([MCPE-148575](https://bugs.mojang.com/browse/MCPE-148575))
- Updated Dark Oak Planks on the Cartography table textures ([MCPE-148562](https://bugs.mojang.com/browse/MCPE-148562))
- Updated Spruce Planks on the Barrel bottom texture 
- Updated Planks on the Lectern base texture ([MCPE-148567](https://bugs.mojang.com/browse/MCPE-148567))
- Fixed highlight inconsistencies in Gold and Diamond Armor textures ([MCPE-148591](https://bugs.mojang.com/browse/MCPE-148591))
- Removed wandering pixel in the Carrot stage 3 texture ([MCPE-148563](https://bugs.mojang.com/browse/MCPE-148563))
- Centered the back texture of Axolotls ([MCPE-148571](https://bugs.mojang.com/browse/MCPE-148571))
- Updated Glass Pane top to match the new texture on Java Edition ([MCPE-148572](https://bugs.mojang.com/browse/MCPE-148572))
- Fixed the top texture of Dark Oak Logs ([MCPE-148577](https://bugs.mojang.com/browse/MCPE-148577))
- Updated Stripped Dark Oak side texture to match the new texture on Java Edition ([MCPE-148576](https://bugs.mojang.com/browse/MCPE-148576))
- Fixed a bug where End Crystal beams would stop rendering when an End Crystal is out of the players sight ([MCPE-149159](https://bugs.mojang.com/browse/MCPE-149159))
- Fixed an issue with Drowned textures on some devices with RenderDragon not correctly discarding alpha/transparent pixels

## **Mobs**

- Slimes are once again aggressive towards Snow Golems ([MCPE-146651](https://bugs.mojang.com/browse/MCPE-146651))

## **User Interface**

- Fixed the player visual on the inventory screen while gliding. It was previously off-center and could hide elements of the interface
- The "Invite to Game" button on the pause screen now disables correctly when a server is full

# **Technical Updates**

## **General**

- Reduced the number of network packets sent with the subchunk request system and packet optimizations

## **Graphics**

- Testing RenderDragon on all Android devices

## **Items**

- Added 9 new shapeless recipe JSON files, replacing hard-coded Smithing Table crafting recipes

## **Molang**

- Add non-experimental is_name_any, is_item_name_any, and is_owner_identifier_any queries
- Fixed relative_block_has_all_tags block_neighbor_has_all_tags and biome_has_all_tags queries to require all tags rather than just any tags
- Fixed nested conditional (ternary) operator parsing to go right-to-left instead of left-to-right
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.18.10 or higher
  - Previously nested conditional expressions like A?B:C?D:Ewould evaluate as (A?B:C)?D:E, now they evaluate as A?B:(C?D:E)

# **Experimental Features** 

## **GameTest Framework**

              Added new entity query capabilities in the form of new methods on Dimension and World.

- World object
  - Replaced function getPlayers : Player\[\] with function getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players in the dimension. Optionally, options can be used to filter the result
  - Added optional argument to events.addEffect. This argument will limit the callback to only fire for specific entities (see EntityEventOptions)
- Dimension object
  - Added function getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players. Optionally, options can be used to filter the result
  - Added function getEntities(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all entities in the dimension. Optionally, options can be used to filter the result
- EntityQueryOptions
  - Added class EntityQueryOptions- Provides additional filtering options when calling getEntities and getPlayers
- EntityQueryScoreOptions
  - Added class EntityQueryScoreOptions- Used with EntityQueryOptions to provide scoreboard filtering
- EntityEventOptions
  - Used to filter events that fire on entities to restrict the callback to only certain ones.
  - Property entity: Entity\[\] - If specified, will restrict to just this entity
  - Property entityTypes: string\[\] - If specified, will restrict to entities with the specified type (e.g., minecraft:creeper)
