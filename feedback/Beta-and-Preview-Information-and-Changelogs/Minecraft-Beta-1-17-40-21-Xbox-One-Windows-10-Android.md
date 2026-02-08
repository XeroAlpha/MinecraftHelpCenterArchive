---
title: Minecraft Beta - 1.17.40.21 (Xbox One/Windows 10/Android)
date: 2021-09-22T13:38:49Z
updated: 2021-09-22T15:50:37Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4409802760717-Minecraft-Beta-1-17-40-21-Xbox-One-Windows-10-Android
---

**Posted:** 22 September 2021

**PLEASE READ before participating in the Minecraft Beta: **

- Joining the beta will replace your game with a work in progress version of Minecraft 
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
- Beta builds can be unstable and are not representative of final version quality 
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![bedrock-beta17U4-2-header.jpg](https://feedback.minecraft.net/hc/article_attachments/4409786741005/bedrock-beta17U4-2-header.jpg)

 

Hello? Hello? Can anyone hear me? I’m in a newly generated cave and, I’m not saying I’m lost, but I most certainly don’t know how to find my way out. I know I followed a copper ore vein that was deeper than usual and all of a sudden, I’m below one of my saved chunks and here we are. While I try to dig myself out, please enjoy this week’s Bedrock Beta update and send us your feedback at [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback) and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).  And if the rest of the Bedrock team asks where I am, just tell them I’m stuck in traffic. They will never let me live this down…

# **Experimental Features**

- Added new world/cave generation when upgrading saved chunks below Y=0 using the Caves and Cliffs experimental toggle
  - Chunks previously upgraded with Bedrock underneath will not see this change
  - For more information, please see our [FAQ](https://aka.ms/ccworldupgrade)! We'd love to hear your feedback about it at [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback)

#### **Flat World Generation**

- Upgrades older flat worlds to the new extended heights available with the Caves & Cliffs experimental toggle
- New flat worlds using the Caves & Cliffs experimental toggle will generate starting at "y=-64"

## **Gameplay**

- Fixed an issue in beta builds where flying above the world limit (255 for non-Caves & Cliffs experimental, 319 for Caves & Cliffs experimental) would be prohibited ([MCPE-141360](https://bugs.mojang.com/browse/MCPE-141360))

### **Copper Ore**

- Copper Ore now generates up to y=96 instead of y=64 ([MCPE-125233](https://bugs.mojang.com/browse/MCPE-125233))

# **Non-Experimental Features and Bug Fixes**

## **General**

- Holding Top Snow in hand while hovering over Grass Blocks no longer causes incorrect behavior ([MCPE-140659](https://bugs.mojang.com/browse/MCPE-140659)) ([MCPE-140660](https://bugs.mojang.com/browse/MCPE-140660))
- Bee Nests now generate correctly in the world ([MCPE-141324](https://bugs.mojang.com/browse/MCPE-141324)) ([MCPE-132195](https://bugs.mojang.com/browse/MCPE-132195))
- Non-fireproof mobs now avoid pathing through fire ([MCPE-23835](https://bugs.mojang.com/browse/MCPE-23835))

## **Gameplay**

- Vanilla Parity: Players are now able to activate Elytra gliding while moving upward ([MCPE-59580](https://bugs.mojang.com/browse/MCPE-59580))
- Using Dye on Signs that contain formatted color text will overwrite the formatted color text

## **World Generation**

- Fossils are now much less likely to generate in, and destroy, structures
- Dungeons are no longer misplaced or missing outside of the Caves & Cliffs experimental toggle ([MCPE-121708](https://bugs.mojang.com/browse/MCPE-121708))

## **Mobs**

- Iron Golem now spawns only on solid blocks ([MCPE-140145](https://bugs.mojang.com/browse/MCPE-140145))
- Wielded weapons now render properly on Pillagers and Vindicators ([MCPE-141321](https://bugs.mojang.com/browse/MCPE-141321))

## **User Interface**

- Riding an animal now displays the correct button prompt when playing with non-touch controls

## **Character Creator**

- Back appearance pieces will no longer cover the left and right arrows in the profile screen
- Fixed featured items in the profile screen not opening the featured catalog in the Dressing Room
- Fixed default clothes changing color if another item’s color was edited previously
- Sidebar options can now be selected in expanded view after navigating back from previously selected sidebar option while using controller
- Sidebar no longer opens upon expanding any of the classic skin packs in the Dressing Room
- Improved the navigation flow for Character Creator so that it always switches to the selected Character Creator profile ([MCPE-139022](https://bugs.mojang.com/browse/MCPE-139022))
- Skins that are equipped from Marketplace while in-game now apply to character

 

# **Technical Updates**

## **Animation**

- Fixed a bug that caused animations to be restarted when changing render controllers

## **Graphical**

- Fixed text on Signs losing their formatting when new lines or word-wrapping are encountered. Formatting will now persist until the reset code or an overriding code is found. This is not retroactive and previously created Signs will not be changed

## **Graphics**

- As part of continued testing, removed RenderDragon engine on Android devices (ARMv7)

## **Molang**

- Molang expressions that contain capital letters are properly evaluated now
- 'query.get_equipped_item_name' will now recognize Sea Lantern ([MCPE-67893](https://bugs.mojang.com/browse/MCPE-67893))
- Add new compile errors for expressions like 1 + (9 10), which were previously ignored (This is a Versioned Change as of engine version 1.17.40)

## **GameTest Framework (Experimental)**

- Updated the GameTest Framework interface and added a new SimulatedPlayer capability:
  - Added 'SimulatedPlayer'class to GameTest. This class enables GameTest to simulate a variety of player behaviors such as movement, using items, and interacting with blocks and entities. See the [GameTest API](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest) reference documentation for more details.
    - Added function spawnSimulatedPlayer(blockLocation: BlockLocation, name: string): SimulatedPlayer
    - Added function \
      removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void
  - mojang-gametest.Test type
    - Changed signature of function assertEntityInstancePresent(entity: Entity, blockLocation: BlockLocation, isPresent: boolean = true)
  - mojang-minecraft components
    - Component inventorynow works with Player inventories
