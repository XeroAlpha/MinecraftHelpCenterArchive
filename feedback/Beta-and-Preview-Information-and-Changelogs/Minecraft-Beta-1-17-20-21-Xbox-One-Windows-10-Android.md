---
title: Minecraft Beta - 1.17.20.21 (Xbox One/Windows 10/Android)
date: 2021-06-30T15:18:59Z
updated: 2021-06-30T16:03:25Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4404090095885-Minecraft-Beta-1-17-20-21-Xbox-One-Windows-10-Android-
---

**Posted:** 30 June 2021

**PLEASE READ before participating in the Minecraft Beta: **

-   Joining the beta will replace your game with a work in progress version of Minecraft 
-   You will not have access to Realms and will not be able to join non-beta players while you\'re previewing the beta
-   Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
-   Beta builds can be unstable and are not representative of final version quality 
-   The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It\'s time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at [aka.ms/CavesCliffsFeedback](https://aka.ms/CavesCliffsFeedback), and search and reports any new bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

 

![crystal_16x9.jpg](https://feedback.minecraft.net/hc/article_attachments/4404090082061/crystal_16x9.jpg)

 

## **Features and Bug Fixes** 

**Commands** 

-   Fixed a crash that could occur if a structure was placed with a command in an unloaded area, and that structure was deleted  

**Graphical** 

-   Fixed text from signs drawing on maps when RTX is on  

**Items** 

-   Clock and Compass items no longer function in the Recipe Book ([MCPE-36354](https://bugs.mojang.com/browse/MCPE-36354))  

**Structure Blocks** 

-   Added Corner mode to Structure Blocks, which is used with Save mode\'s Detect button to automatically set the area you want to save  

```{=html}
<!-- -->
```
-   Fixed tamed Wolves being transparent on the Structure Block screen  

## **Technical Updates** 

**GameTest Framework (Experimental)** 

-   Renamed helper method worldLocation(location : BlockLocation) to worldBlockLocation(location : BlockLocation) 
-   Renamed helper method relativeLocation(location : BlockLocation) to relativeBlockLocation(location : BlockLocation) 
-   Added helper method worldLocation(relativeLocation : Location) : Location - From a Location with coordinates relative to the GameTest structure block, returns a new Location with coordinates relative to the world 
-   Added helper method relativeLocation(worldLocation : Location) : Location - From a Location, returns a new Location with coordinates relative to the current GameTest structure block 
-   Added helper method spawnWithoutBehaviorsAtLocation(entityIdentifier : string, location : Location) : Entity - Spawns an entity at a location without any AI behaviors 
-   Added helper method rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the GameTest structure rotation 
-   Added helper method getTestDirection() : Direction - Returns the direction the GameTest is facing based on its structure rotation 

**Commands** 

-   Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms  
-   Commands or structures being placed in a loaded area that is only partially loaded by a ticking area will now be considered loaded if the required chunks are loaded
