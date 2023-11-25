---
title: Minecraft Beta - 1.17.10.22 (Xbox One/Windows 10/Android)
date: 2021-06-09T13:28:27Z
updated: 2021-06-09T15:59:12Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - beta_changelog
  - caves&cliffs
link: https://feedback.minecraft.net/hc/en-us/articles/4402696446989-Minecraft-Beta-1-17-10-22-Xbox-One-Windows-10-Android-
---

**Posted:** June 9, 2021

**PLEASE READ before participating in the Minecraft Beta: **

-   Joining the beta will replace your game with a work in progress version of Minecraft 
-   You will not have access to Realms and will not be able to join non-beta players while you\'re previewing the beta
-   Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
-   Beta builds can be unstable and are not representative of final version quality 
-   The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It\'s time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at [aka.ms/CavesCliffsFeedback](https://aka.ms/CavesCliffsFeedback), and search and reports any new bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

![candles_1170x500.jpg](https://feedback.minecraft.net/hc/article_attachments/4402703422477/candles_1170x500.jpg)

 

 

# **Features and Bug Fixes**

## **Candles**

-   Candles are now available in the game!
-   Can be placed in clusters up to four and lit using Flint & Steel
-   Try putting one on a Cake and make a wish!
-   Candles can be crafted using a Honeycomb and String
-   Combine with dye on a crafting grid to craft different colored Candles

## **Gameplay**

-   Falling Anvils and Stalactites now deal damage to mobs when landing in liquid
-   Fixed a bug where players going through Cobwebs would take fall damage before hitting the ground ([MCPE-121550](https://bugs.mojang.com/browse/MCPE-121550))
-   Descending through Powder Snow with touch controls now uses the same button as descending through Scaffolding
-   Vanilla Parity: Empty Buckets can no longer be used to collect Fish

## **Mobs**

-   Axolotls now only spawn in complete darkness
-   Iron Golems and Evokers are no longer sometimes aggressive on Peaceful difficulty ([MCPE-47012](https://bugs.mojang.com/browse/MCPE-47012))
-   Glow Squid now darkens to match the surrounding light level when hurt ([MCPE-121754](https://bugs.mojang.com/browse/MCPE-121754))
-   When Goats are performing a ram attack, mobs will no longer retaliate against the Goats ([MCPE-129619](https://bugs.mojang.com/browse/MCPE-129619))
-   Fixed a warning that could appear in splitscreen when encountering Guardians

## **Character Creator**

-   Featured item thumbnails now remain within the featured items window
-   The \"Choose New Skin\" button now shows up even when there is no imported custom skin ([MCPE-128971](https://bugs.mojang.com/browse/MCPE-128971))
-   The \"Choose New Skin\" button no longer disappears after selecting the slim custom option
-   Fixed an issue that was causing the player\'s head to not animate properly with emotes ([MCPE-126902](https://bugs.mojang.com/browse/MCPE-126902))

## **Known Issues**

-   Using a fire charge to light objects (such as candles) may cause a crash

 

# **Technical Updates**

## **MoLang**

-   Fixed experimental \'query.target\' to work on client-side queries

## **Data Driven Blocks**

-   Updated documentation for \'BlockUnwalkableComponent\'

## **General**

-   Players will now be given a content error when custom recipes are invalid
-   Renamed \"minecraft:scaffolding_climber\" to \"minecraft:block_climber\", it now processes climbing both Scaffolding and Powder Snow

## **NPC Dialogue**

-   Content creators can now create multi-page dialogues with branching narrative for NPCs using the \'/dialogue\' command and dialogue JSON files

 

## **GameTest Framework (Experimental)**

### **Events**

-   Renamed \'World.event.weatherChanged\' to \'World.event.changeWeather\'
-   Added event \'World.event.addEffect\' - Fires when an effect is applied to an entity.
-   Added event \'World.event.createEntity\' - Fires when an entity is added to the world.
-   Removed function \'World.addEventListener\'
-   Changed function \'getDuration()\' to property \'duration\'
-   Changed function \'getAmplifier()\' to property \'amplifier\'
-   Added property \'displayName\' - Gets the display name of the effect
