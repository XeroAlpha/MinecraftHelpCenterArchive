---
title: Minecraft Beta - 1.17.30.21 (Xbox One/Windows 10/Android)
date: 2021-08-12T15:10:10Z
updated: 2021-08-12T15:48:38Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - beta_changelog
  - caves&cliffs
link: https://feedback.minecraft.net/hc/en-us/articles/4406948851213-Minecraft-Beta-1-17-30-21-Xbox-One-Windows-10-Android
hash:
  user-interface-and-hud: user-interfaceand-hud
  data-driven-blocks---experimental-features: data-driven-blocks--experimental-features
---

**Posted:** 12 August 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

 

![Screen_Shot_08-11-21_at_11.09_AM.JPG](https://feedback.minecraft.net/hc/article_attachments/4406956022669/Screen_Shot_08-11-21_at_11.09_AM.JPG)

 

It's time for another Bedrock Beta update! Please continue to send us your feedback in the threads at <https://aka.ms/CavesCliffsFeedback>, and search and report any new bugs you may encounter at [https://bugs.mojang.com](https://bugs.mojang.com/).  

 

# Features and Bug Fixes 

## Stability and Performance 

- Fixed several crashes that could occur during gameplay 
- Fixed an issue that could cause a crash when downloading large marketplace worlds  
- Fixed an issue that could cause a crash or prevented worlds from being accessed or opened on some Android 11 devices ([MCPE-137652](https://bugs.mojang.com/browse/MCPE-137652)) 

## Vanilla Parity 

- Matched respawn from bed behavior with Java by attempting to avoid placing the player on damage dealing blocks when waking up from a bed 
- Matched respawn from bed behavior with Java by attempting to place the player on the side of the bed they entered from when waking up from a bed ([MCPE-118654](https://bugs.mojang.com/browse/MCPE-118654))  
- Mob spawners no longer emit light (Java parity) 

## Mobs 

- Staying close to Powder Snow doesn't protect undead mobs from burning under sunlight ([MCPE-131005](https://bugs.mojang.com/browse/MCPE-131005))  

## Character Creator 

- Infinite loading no longer appears after selecting the "See pack in store" button within the skin pack description section of the dressing room  

## User Interface and HUD 

- Fixed an issue where the item category text color did not match the item text color if it was changed in resource packs  
- Fixed an issue where patterns in the loom would not display correctly with some texture packs  

# Technical Updates 

## Data Driven Blocks - Experimental Features 

- Adds BlockPartVisibilityComponent  
  - Allows creators to specify Molang conditions for each “bone” listed in the geometry JSON that turn on/off bones based on the block state 
  - Must have experimental toggle on to use 

## Molang 

- Fixed experimental query.bone_orientation_trs to have correct translation Y and scale results  
- Adds experimental block_neighbor_has_any_tags and block_neighbor_has_all_tags MoLang queries  
  - Takes a block relative position and a set of tags 
  - Returns 0/1 
  - Must have experimental toggle on to use 

## Graphics 

- Added DragonFX materials to support rasterized g-buffer prepass of raytracing resources  

## Data Driven Items 

- Updated documentation for DamageableItemComponent  

## Molang 

- Crash will no longer occur when entering a world with a custom resource pack that contains query.armor_color_slot ([MCPE-106437](https://bugs.mojang.com/browse/MCPE-106437))  
- Moved experimental Molang queries (other than those related to Actor Properties) to a new 'Experimental Molang Features' toggle  

## User Interface 

- Fixed controller support when editing NPC dialog  
- Parsing of UI json field "ignored" now throws a content_error if it is invalid
