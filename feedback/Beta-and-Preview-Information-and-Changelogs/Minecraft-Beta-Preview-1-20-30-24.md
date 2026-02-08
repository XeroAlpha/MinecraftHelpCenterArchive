---
title: Minecraft Beta & Preview - 1.20.30.24
date: 2023-08-23T14:12:15Z
updated: 2023-08-23T14:13:55Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/18794896918157-Minecraft-Beta-Preview-1-20-30-24
---

**Posted:** 23 August 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot of a mountain with trees and a cave.](https://feedback.minecraft.net/hc/article_attachments/18794941329549)

It’s time for a new Minecraft Preview and Beta. Here’s a list of what’s new this week. Please continue to send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/), and have fun!

**Experimental Trade Changes**\
Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change!  We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We still need your feedback to help us improve and decide, so please continue to let us know what you think of the new trades, what you like and dislike, and what suggestions you have at [aka.ms/VillagerTradingFeedback](http://aka.ms/VillagerTradingFeedback).

# **Features and Bug Fixes**

## **User Interface**

- Fixed feedback button behavior in the new Play Screen not linking to the feedback page
- New death screen now has partial support (color, static obfuscation) for "Formatting Codes" 

## **Audio**

- Player entities now play the appropriate sounds when entering/exiting water ([MCPE-132511](https://bugs.mojang.com/browse/MCPE-132511)) 

## **Blocks**

- Fixed a problem where blocks' rendering was not updating unless the player jumped ([MCPE-173706](https://bugs.mojang.com/browse/MCPE-173706)) 
- Tripwire Hooks no longer have delayed deactivation towards the south and west ([MCPE-174011](https://bugs.mojang.com/browse/MCPE-174011)) 
- Concrete Powder blocks are now the correct color for worlds imported from previous versions 

## **Gameplay**

- Camera commands that are sent in the same tick are no longer ignored ([MCPE-173524](https://bugs.mojang.com/browse/MCPE-173524)) 
- Nametags are no longer completely invisible while sneaking with the player still visible ([MCPE-168789](https://bugs.mojang.com/browse/MCPE-168789))

## **Mobs**

- The following mobs will now set their target on fire if the mob is on fire when attacking: Drowned, Husk, Zombie, and Zombified Villager ([MCPE-77746](https://bugs.mojang.com/browse/MCPE-77746)) 

## **Education Features**

- Dolphins now rise properly when Balloons are attached 
- Camels and Sniffers can now have Balloons attached

## **User Interface**

- Fixed various pixel scaling issues on the HUD screen
- The game menu gamepad shortcut on the new death screen now works correctly 
- Added three new user-friendly disconnection error messages and improved two others 

# **Technical Updates**

## **API**

- Changed *scoreboardIdentity* to be valid even after the entity has been killed 

## **Items**

- Fixed an issue where content errors for items at the latest format version would appear for other items 

## **Mobs**

- Exposed new data parameter "can_spread_on_fire" for the "minecraft:behavior.melee_attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire ([MCPE-77746](https://bugs.mojang.com/browse/MCPE-77746)) 

# **Experimental Technical Features**

## **API**

- World Events
  - Renamed *BlockBreakAfterEvent* to *PlayerBreakBlockAfterEvent*
    - Added *readonly itemStackAfterBreak?: ItemStack* (undefined if empty hand)
    - Added *readonly itemStackBeforeBreak?: ItemStack* (undefined if empty hand)
  - Renamed *BlockBreakAfterEventSignal* to *PlayerBreakBlockAfterEventSignal*
    - *subscribe* function now takes *options?: BlockEventOptions*
  - Added *PlayerBreakBlockBeforeEvent* with the following members
    - *cancel: boolean*, cancels event from happening
    - *itemStack?: ItemStack*, the item stack in use by the player (undefined if empty hand)
    - *readonly player: Player*, the player breaking the block
  - Added *PlayerBreakBlockBeforeEventSignal*
  - Renamed *BlockPlaceAfterEvent* to *PlayerPlaceBlockAfterEvent*
  - Renamed *BlockPlaceAfterEventSignal* to *PlayerPlaceBlockAfterEventSignal*
    - *subscribe* function now takes *options?: BlockEventOptions*
  - Added *PlayerPlaceBlockBeforeEvent* with the following members
    - *cancel: boolean*, cancels event from happening
    - *readonly face: Direction*, the face the block is being placed on
    - *readonly faceLocation: Vector3*, the location on the face the block was placed on
    - *itemStack: ItemStack*, the item stack being used to place the block
    - *readonly player: Player*, the player placing the block
  - Added *PlayerPlaceBlockBeforeEventSignal*
  - Modified *WorldAfterEvents*
    - Renamed *blockBreak* to *playerBreakBlock*
    - Renamed *blockPlace* to *playerPlaceBlock*
  - Modified *WorldBeforeEvents*
    - Added *playerBreakBlock*
    - Added *playerPlaceBlock*
  - Added *BlockEventOptions* with the following members
    - *blockTypes?: string\[\]*, names of blocks to be filtered against
    - *permutations?: BlockPermutation\[\]*, specific block permutations to be filtered against
  - Added class *EntityLoadAfterEvent*
    - New field *entity: Entity*
    - Added class *EntityLoadAfterEventSignal*
  - Class *EntitySpawnAfterEvent*
    - Added property *readonly cause: EntityInitializationCause*\_
  - Class *WorldAfterEvents*
    - Added property *readonly entityLoad: EntityLoadAfterEventSignal*
  - Added enum *EntityInitializationCause*

## **Graphical**

- Disabling Beautiful Skies or Smooth Lighting no longer affects visuals while using Deferred or Ray Tracing in the Deferred Technical Preview
- Moved Smooth Lighting and Beautiful Skies buttons to only appear in the Simple and Fancy graphics menus in the Deferred Technical Preview
- Bloom option removed from Simple, Fancy, and Ray Tracing menus in the Deferred Technical Preview
