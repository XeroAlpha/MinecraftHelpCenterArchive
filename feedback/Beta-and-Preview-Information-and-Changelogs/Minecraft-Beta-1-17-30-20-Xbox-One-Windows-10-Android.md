---
title: Minecraft Beta - 1.17.30.20 (Xbox One/Windows 10/Android)
date: 2021-08-04T13:43:02Z
updated: 2021-08-04T15:44:55Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - beta_changelog
  - caves&cliffs
link: https://feedback.minecraft.net/hc/en-us/articles/4406445924237-Minecraft-Beta-1-17-30-20-Xbox-One-Windows-10-Android-
---

**Posted:** 4 August 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Screen_Shot_07-28-21_at_11.24_AM.JPG](https://feedback.minecraft.net/hc/article_attachments/4406445864461/Screen_Shot_07-28-21_at_11.24_AM.JPG)

 

We have another Bedrock Beta update today, and we've fixed a bunch of bugs!  

Please send us your feedback in the threads at <https://aka.ms/CavesCliffsFeedback>, and search and report any new bugs you may encounter at [https://bugs.mojang.com](https://bugs.mojang.com/).  

 

# **Features and Bug Fixes**

## **Stability and Performance**

- Fixed several crashes that could occur during gameplay
- Fixed a crash that could sometimes occur when downloading large Marketplace worlds

## **Accessibility**

- Text to Speech now correctly reads item names in the inventory
- Inventory grid slots are no longer double counted for Text to Speech focus controls

## **Gameplay**

- Light blocks are now visible when holding another, and also show brightness value ([MCPE-123249](https://bugs.mojang.com/browse/MCPE-123249))
- Fixed Light Block not being removed when left-clicking it while holding a Light Block ([MCPE-123258](https://bugs.mojang.com/browse/MCPE-123258))
- Fixed Light Block brightness not being adjustable when right-clicking it ([MCPE-123387](https://bugs.mojang.com/browse/MCPE-123387))
- Fixed Light Block hitbox issue ([MCPE-135277](https://bugs.mojang.com/browse/MCPE-135277))
- Fixed Barrier Block being destructible whilst not holding a Barrier Block
- Boats now disappear from inventory correctly after placing it on water in Survival mode ([MCPE-136445](https://bugs.mojang.com/browse/MCPE-136445))

## **User Interface**

- Text to Speech for chat setting once again correctly narrates chat messages ([MCPE-129901](https://bugs.mojang.com/browse/MCPE-129901))
- Sidebar strings are now localized properly when a new language is loaded or the current language changes
- Updated the Achievements button and moved from the Profile screen to the Main Menu and Pause screens
- Enabled new achievements screens for VR (not including PSVR)

## **Vanilla Parity**

- Eating Chorus Fruit while gliding no longer deals fall damage to the player ([MCPE-112621](https://bugs.mojang.com/browse/MCPE-112621))
- Fixed an animation parity issue with Skeletons not using both arms to hold their Bows ([MCPE-670](https://bugs.mojang.com/browse/MCPE-670))

## **Mobs**

- Fixed an issue where mobs would sometimes render with incorrect geometry when viewed from the Structure Block preview window ([MCPE-95183](https://bugs.mojang.com/browse/MCPE-95183))
- Experimental Features: Wither can now be spawned on negative heights ([MCPE-125270](https://bugs.mojang.com/browse/MCPE-125270))
- Ghasts no longer spawn in less than 5x4x5 area ([MCPE-133687](https://bugs.mojang.com/browse/MCPE-133687))
- Magma Cubes no longer spawn in less than 3x3x2 area ([MCPE-46540](https://bugs.mojang.com/browse/MCPE-46540))
- Medium Magma Cubes now have a larger hitbox ([MCPE-132159](https://bugs.mojang.com/browse/MCPE-132159))
- Shulker boxes now remain in Dispensers when dispensed at world limit ([MCPE-130085](https://bugs.mojang.com/browse/MCPE-130085))

## **Blocks**

- Unicode font now correctly highlights on Signs with glowing text ([MCPE-130072](https://bugs.mojang.com/browse/MCPE-130072))
- Waterlogged blocks no longer occasionally turn into ghost blocks ([MCPE-136537](https://bugs.mojang.com/browse/MCPE-136537))
- Pumpkins placed facing South, East, or West now can now be used to trade with Villagers if they were mined with Silk Touch tools ([MCPE-105540](https://bugs.mojang.com/browse/MCPE-105540))
- More Candles can no longer be added to Candles placed without any support block ([MCPE-130810](https://bugs.mojang.com/browse/MCPE-130810))

## **Graphical**

- Sky no longer renders through walls of a large enclosed area when using fog

# **Technical Updates**

## **EDU / Chemistry**

- New chemistry material reductions can be defined in the JSON files
- Chalkboards now appear consistently when being placed

## **Commands**

- The '/clone' command now copies signal strength for Levers and Redstone Dust
- The '/structure' command can now specify a \<to: x y z\> position argument with y below 0 as long as it is equal or above the minimum height for that dimension
- Added functionality for Intellisense options: "d" and "default" in the gamemode command selector
- Minecart with Command Block can now use the self selector (@s) in its commands to target itself ([MCPE-60126](https://bugs.mojang.com/browse/MCPE-60126))
- The "/time set" command now sets the correct time and day when specifying a time above 24000 or below the current time (e.g. "/time set 0" sets the day to 0, "/time set 28000" sets the day to 1), and "/time" can now set or add to a negative world time ([MCPE-43394](https://bugs.mojang.com/browse/MCPE-43394))

## **Items**

- Updated documentation formatting for item components
- Using water buckets to collect fish has been version locked to prevent breaking old world templates

## **Mob**

- Fixed the ability to add launch point positional offset for projectiles spawned with the 'spawn_entity' component
- Fixed the ability to add angular offset to launch vector for projectiles spawned with the 'spawn_entity' component
- Fixed offset not working for projectiles summoned through an interaction
- Fixed projectile 'angleoffset' value only reflected if shooter is riding another entity
- Fixed rotation of projectile launchpoint around a mob when projectile offset specified

## **Molang**

- Fixed 'query.item_remaining_use_duration' having improperly scaled or inverted results (This is to fix a Versioned Change as of engine version 1.17.30)
- Added 'query.facing_target_to_range_attack', which returns whether or not the queried actor's 'minecraft:behavior.ranged_attack' goal is currently running

## **Molang Documentation**

- Improved Molang documentation related to experiments
  - Experimental queries and language expressions now list which experiment(s) they require to be available
- Versioned Changes are now detailed in the documentation, starting with the 'query.item_remaining_use_duration' fix
