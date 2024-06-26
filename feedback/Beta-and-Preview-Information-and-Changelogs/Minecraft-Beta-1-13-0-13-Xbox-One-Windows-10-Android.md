---
title: Minecraft Beta - 1.13.0.13 (Xbox One/Windows 10/Android)
date: 2019-09-12T15:20:23Z
updated: 2019-09-12T16:31:23Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360033322932-Minecraft-Beta-1-13-0-13-Xbox-One-Windows-10-Android
---

**PLEASE READ before participating in the Minecraft Beta**:

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

**Known Issues in this beta:**

- There is a known issue with importing custom skins in this beta, but we intend to get them working again fully in the next beta for Windows 10 and mobile devices** **

**Fixes:**

- **Crashes/Performance**
  - Fixed several crashes that could occur during gameplay
  - Improved performance with animation optimisations

<!-- -->

- - The game no longer crashes while typing out the execute command
  - Devices with lower available memory now support the new Note Block sounds 
  - Fixed a crash that could sometimes occur when a player leaves a multiplayer game 
  - Fixed a crash that could occur if a player tried to open chat just as they were leaving a multiplayer game (250587)
  - Light blocks with invalid auxiliary values no longer cause the game to crash ([MCPE-51191](https://bugs.mojang.com/browse/MCPE-51191))
  - Improved chunk loading performance when flying** **

<!-- -->

- **General**
  - Added a new prompt to suggest that a player adjusts the screen safe zone, if necessary 
  - Fixed an issue where the main menu UI would not load in for some beta players on Xbox One ([MCPE-50344](https://bugs.mojang.com/browse/MCPE-50344))
  - Buried treasure chests can no longer spawn inside Village structures
  - Fixed an issue that could cause some worlds to become corrupted during gameplay ([MCPE-50496](https://bugs.mojang.com/browse/MCPE-50496))

<!-- -->

- **Gameplay**
  - Jumping while swimming in a 1-block high tunnel no longer causes player to get stuck 
  - The player can once again open the inventory correctly when sitting in a boat 
  - Parity: Releasing sneak on the edge of a block will no longer make the player fall
  - Nearby players on locator maps are no longer shown as a blank square
  - Arrows hitting players underwater no longer play multiple hit sounds
  - Achievements related to eating food are now unlocking correctly again
  - Items can be repaired using their base materials on an Anvil again ([MCPE-51180](https://bugs.mojang.com/browse/MCPE-51180))

<!-- -->

- **Mobs**
  - Farmers now correctly harvest crops when their inventory is not full ([MCPE-47166](https://bugs.mojang.com/browse/MCPE-47166))
  - Turtles and Tropical Fish no longer drift downwards and swim at the bottom of the sea 
  - Villagers now hide more consistently during a raid ** **

<!-- -->

- **User Interface**
  - Fixed the spacing between "Feedback" and "Save & Quit" buttons in the pause menu  

<!-- -->

- **Graphical**
  - Fixed the position of Parrots sitting on the player's shoulder 

<!-- -->

- **Commands**
  - Using the command '@s\[type=...\]' will now work correctly ([MCPE-49766](https://bugs.mojang.com/browse/MCPE-49766))
  - Obfuscated text now works with the smooth font chat setting

<!-- -->

- **Add-Ons and Script Engine**
  - Using "lock_rider_rotation" now works correctly on players 
  - Using "yaw_speed" calculation now works correctly
  - Custom entities now get proper death messages **  **

**For Map Makers and Add-On Creators:**

**Changes to the Pack Manifest  
Summary**

- As of 1.13, we have made some changes to the pack manifest with a new format version of "2". We recommend that any new packs or world templates that you create use format version of 2 from now on. With this new format, there are a few additional changes to be aware of, detailed below. 

**List of Format Version 2 Manifest Requirements**

**All Pack Types**

- The 'name' field in the header is now required for all pieces of content.

**World Templates**

- The 'lock_template_options' field is now required. This Boolean field determines whether or not the world options for your template should be locked to default values when a player creates a world from the template. They can still choose to unlock and modify the options, but will be warned that doing so could affect gameplay.
- The 'base_game_version' field is required (see below for more info).
- The 'min_engine_version' field should no longer be used as it isn't parsed on world templates and produces a warning on import. 

**Resource and Behavior Packs**

- The 'min_engine_version' field is now required. This affects how the game interprets some of the assets loaded from Resource and Behavior Packs. We recommend using the latest available version of the game for this field (e.g. '\[1, 13, 0\]') to ensure your pack works correctly. 

**Base Game Version Field**

- For this field, we recommend using the value "\*". This will ensure that anyone using your content in their Minecraft worlds will always get the latest base game (vanilla) content when an update is available.   
  In the case that your content relies on specific base game behavior, you can use this field to specify a base game version, starting with 1.13. If you choose to do this, you should omit the third octet; for example, if the version of the game you are targeting is '\[1, 14, 2\]', you would specify a version of '\[1, 14, 0\]'). If you specify a version this way, any worlds using your custom content will not get new base game content when it becomes available in future releases, which could help prevent unwanted changes to behavior in your content caused by updates to the base game. However, we still recommend using the “\*” value to ensure players can continue to enjoy your content in their Minecraft worlds long-term while also receiving updates to the base game.
