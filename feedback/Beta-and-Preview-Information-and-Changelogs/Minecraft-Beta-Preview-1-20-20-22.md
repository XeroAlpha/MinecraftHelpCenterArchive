---
title: Minecraft Beta & Preview - 1.20.20.22
date: 2023-07-20T14:49:47Z
updated: 2023-08-04T10:31:08Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/17785920851725-Minecraft-Beta-Preview-1-20-20-22
---

**Posted:** 20 July 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot of some rabbits and a polar bear standing on some snow layers, with trees and a waterfall nearby.](https://feedback.minecraft.net/hc/article_attachments/17785909268493)

Here's what's new in this week's Minecraft Preview and Beta! Please continue to send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/), and enjoy the update!

 

# **Features and Bug Fixes**

## **Actors**

- Rabbits, Polar Bears, and items no longer levitate above Top Snow blocks ([MCPE-172381](https://bugs.mojang.com/browse/MCPE-172381), [MCPE-173081](https://bugs.mojang.com/browse/MCPE-173081)) 

## **Blocks**

- Structure Void blocks placed in the world can once again be highlighted and destroyed when holding a Structure Void block ([MCPE-172429](https://bugs.mojang.com/browse/MCPE-172429)) 

## **Gameplay**

- Breath meter now refills when swimming with head above water ([MCPE-170969](https://bugs.mojang.com/browse/MCPE-170969)) 
- The Crawling experimental toggle has been removed and Crawling under 1 block gaps is now fully implemented into the game 

## **Recipe Unlocking**

- You can now enable Recipe Unlocking on the Create New World screen ([MCPE-172956](https://bugs.mojang.com/browse/MCPE-172956))
- The command for unlocking recipes has been updated. The autosuggestion to give a player a recipe now says "player: target" instead of "victim: target" ([MCPE-172402](https://bugs.mojang.com/browse/MCPE-172402)) 

## **Stability and Performance**

- Fixed missing low disk space warning on Xbox 

### **Accessibility**

- The text-to-speech narrator will now read the disconnected message in the game menu when opened without an internet connection 

## **User Interface**

- iOS only: Fixed a bug in multiline text edits where some text was sometimes deleted when typing after repositioning the caret with spacebar ([MCPE-166152](https://bugs.mojang.com/browse/MCPE-166152)) 
- Changed button text from "Manage" to "Cancel" in Options \> Subscriptions 
- Fixed layering issue causing the underground vignette effect to draw on top of the hotbar ([MCPE-159217](https://bugs.mojang.com/browse/MCPE-159217))
- Adding a button on the new death screen to allow player to go to the game menu to change settings, leave the world, and more

# **Technical Updates**

## **General**

- Removed server-authoritative-sound bool from server.properties 
- Exposed *DimensionType* to scripting
- The /camera command no longer requires the experimental cameras toggle 
  - Note: The cameras experiment still contains several example preset JSON files for reference
- Released the "*minecraft:wearable*" item component out of experimental in json formats 1.20.20 and higher
- Exposed the following feature placement rules from behind the data driven biome experimental toggle. This allows creators to attach their custom features to a biome, and to define the rules by which those features are placed
  - minecraft:aggregate_feature
  - minecraft:cave_carver_feature
  - minecraft:fossil_feature
  - minecraft:geode_feature
  - minecraft:growing_plant_feature
  - minecraft:multiface_feature
  - minecraft:nether_cave_carver_feature
  - minecraft:ore_feature
  - minecraft:partially_exposed_blob_feature
  - minecraft:scatter_feature
  - minecraft:search_feature
  - minecraft:sequence_feature
  - minecraft:single_block_feature
  - minecraft:snap_to_surface_feature
  - minecraft:structure_template_feature
  - minecraft:surface_relative_threshold_feature
  - minecraft:tree_feature
  - minecraft:underwater_cave_carver_feature
  - minecraft:vegetation_patch_feature
  - minecraft:weighted_random_feature

## **Items**

- Released the "*minecraft:digger*" item component out of experimental in json formats 1.20.20 and higher 
- Deprecated "*on_dig*" parameters from "*minecraft:digger*" item component in formats 1.20.20 and higher 

# **Experimental Technical Features**

## **API**

- Added camera scripting APIs for the following APIs: 
  - *setCamera()*: to set the camera to a specified preset
  - *fade()*: to start a camera fade
  - *clear()*: to clear the current settings on the camera
- Released Scoreboard API's from beta to V1.4.0
  - Updated *Scoreboard.getObjective*, *getObjectiveAtDisplaySlot*, and *clearObjectiveAtDisplaySlot* to return '\| undefined'
- Removed *MinecraftBlockTypes* defined in *@minecraft/server*
- Moved *ItemUseBeforeEvent* to *1.4.0*
- Moved *ItemUseOnBeforeEvent* to *1.4.0*
- Moved *ItemUseAfterEvent* to *1.4.0*
- Moved *ItemUseOnAfterEvent* to *1.4.0*
- Moved *ItemStartUseOnAfterEvent* to *1.4.0*
- Moved *ItemStopUseAfterEvent* to *1.4.0*
- Moved *ItemStopUseOnAfterEvent* to *1.4.0*
- Moved *ItemCompleteUseAfterEvent* to *1.4.0*
- Moved *ItemReleaseUseAfterEvent* to *1.4.0*
- Moved *ItemStartUseAfterEvent* to *1.4.0*
- Moved *DimensionLocation* to *1.4.0*
- Renamed *PositionInUnloadedChunkError* to *LocationInUnloadedChunkError* and moved it to *1.4.0*
- Renamed *PositionOutOfWorldBoundariesError* to *LocationOutOfWorldBoundariesError* and moved it to *1.4.0*
  - Moved *getSpawnPoint* to *1.4.0*
  - Moved *setSpawnPoint* to *1.4.0*
  - Moved *getDefaultSpawnLocation* to *1.4.0*
  - Moved *setDefaultSpawnLocation* to *1.4.0*
- Released *isValid()* from Beta to *1.4.0* for the following classes:
  - *Block*
  - *Container*
  - *Entity*
  - *Player*
  - *SimulatedPlayer*
- WorldAfterEvents
  - Removed *projectileHit*
  - Added *projectileHitBlock*
  - Added *projectileHitEntity*
- Added class *ProjectileHitBlockAfterEvent* export class:\
  ProjectileHitBlockAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation; }
- Added class *ProjectileHitEntityAfterEvent* export class:\
  ProjectileHitEntityAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation; }
- Fixed a bug where *ContainerSlot* would not work with certain container types ([MCPE-172782)](https://bugs.mojang.com/browse/MCPE-172782)
