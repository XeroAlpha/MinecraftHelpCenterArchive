---
title: Minecraft Beta - 1.16.200.57 (Xbox One/Windows 10/Android)
date: 2020-11-24T16:58:55Z
updated: 2020-11-24T16:59:11Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360052476232-Minecraft-Beta-1-16-200-57-Xbox-One-Windows-10-Android-
---

**Posted:** 24 November 2020

PLEASE READ before participating in the Minecraft Beta:

-   Joining the beta will replace your game with a work in progress version of Minecraft
-   You will not have access to Realms and will not be able to join non-beta players while you\'re previewing the beta
-   Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
-   Beta builds can be unstable and are not representative of final version quality
-   The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

## Bug Fixes

**Performance and Stability** 

-   Improved terrain building speed when flying with Elytra ([MCPE-85614](https://bugs.mojang.com/browse/MCPE-85614))  
-   Fixed a bug that would crash the game when using the crafting table on Creative mode  
-   Fixed an issue with a runaway block ticking queue that occurred on a looping data-driven block that changed itself to a different permutation. The bug could cause memory issues, increase load and save times, as well as stalling the game periodically 

**Technical Changes ** 

-   Reduced content warning spam with data-driven block geometry  
-   A fix for dedicated server that copies the experimental toggle state to LevelSettings while initializing the server instance to make sure it uses the values specified in the loading world 
-   Fixed data-driven blocks to shrink UVs the same was as actors to prevent UV bleeding
