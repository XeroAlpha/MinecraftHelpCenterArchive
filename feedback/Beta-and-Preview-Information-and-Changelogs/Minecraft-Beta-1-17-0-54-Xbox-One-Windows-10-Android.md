---
title: Minecraft Beta - 1.17.0.54 (Xbox One/Windows 10/Android)
date: 2021-05-06T15:23:36Z
updated: 2021-05-06T16:08:16Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360060922491-Minecraft-Beta-1-17-0-54-Xbox-One-Windows-10-Android-
---

**Posted:** May 06, 2021

**PLEASE READ before participating in the Minecraft Beta: **

-   Joining the beta will replace your game with a work in progress version of Minecraft 
-   You will not have access to Realms and will not be able to join non-beta players while you\'re previewing the beta
-   Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them 
-   Beta builds can be unstable and are not representative of final version quality 
-   The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It\'s time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at [aka.ms/CavesCliffsFeedback](https://aka.ms/CavesCliffsFeedback), and search and reports any new bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

 

![img_874.JPG](https://feedback.minecraft.net/hc/article_attachments/360094726072/img_874.JPG){width="503" height="311"}

 

## Caves & Cliffs - Experimental Features

-   Minecarts with Chests can also appear in Mineshafts at -y
-   Strongholds will be more hidden in larger caves
-   Fixed a bug where Shulkers would not teleport below y=0 ([MCPE-121810](https://bugs.mojang.com/browse/MCPE-121810))

## Caves & Cliffs - Non-Experimental

### Axolotl

-   Axolotl can no longer move on its own while playing dead ([MCPE-124128](https://bugs.mojang.com/browse/MCPE-124128))
-   Axolotls no longer play dead on land

### Powder Snow

-   Dispensers can now dispense a Powder Snow Block using a Powder Snow Bucket
-   Skeletons no longer freeze when standing inside of Powder Snow, and will transform into strays after 45 seconds ([MCPE-116781](https://bugs.mojang.com/browse/MCPE-116781))
-   Mobs can now pathfind properly on top of Powder Snow ([MCPE-118214](https://bugs.mojang.com/browse/MCPE-118214))
-   Vanilla Parity: Powder Snow can no longer support Scaffolding ([MCPE-120947](https://bugs.mojang.com/browse/MCPE-120947))
-   Vanilla Parity: Mining time of Powder Snow Block now matches mining time in Java Edition
-   Players can no longer Jump on top of Powder Snow to avoid sinking ([MCPE-112023](https://bugs.mojang.com/browse/MCPE-112023))

### Azalea Leaf

-   Azalea and Flowering Azalea leaves now drop themself when mined with Silk Touch tools

### Caves and Cliffs

-   Infested variants of Deepslate can be found in Extreme Hills biome
-   Block of Copper is now crafted with 9 Copper Ingots
-   Block of Copper can be crafted down into 9 Copper Ingots
-   Copper Ore and Deepslate Copper now drop 2-3 Raw Copper
-   Raw Iron, Copper, and Gold item textures have been updated
-   Block of Raw Iron, Copper, and Gold textures have been updated
-   Compass and Clock textures have been updated

### Spore Blossom

-   Spore Blossom no longer survives in water

### Copper

-   Copper now has correct graphical and sound effects when waxing/dewaxing ([MCPE-121827](https://bugs.mojang.com/browse/MCPE-121827))
-   Underside of leaves now render correctly when placed on top of Copper Slabs

### Glow Squid

-   Squid and Glow Squid now make a specific sound when they let ink out
-   Old signs no longer glow when being dyed ([MCPE-117835](https://bugs.mojang.com/browse/MCPE-117835))

### Goat

-   Increased chances of getting screamer goat by breeding screamer goat with non-screamer goat

### Items

-   Fixed an issue where first person offhand items were rendered when zooming in with the Spyglass ([MCPE-125825](https://bugs.mojang.com/browse/MCPE-125825))

### Pointed Dripstone

-   Stalactites now drip water a bit more often when filling Cauldrons

### Raw Gold

-   Piglins now admire Block of Raw Gold
-   Piglins now admire Raw Gold

### Rooted Dirt

-   Tiling Rooted Dirt turns does no longer instantly turn it into Farmland block

### Spyglass

-   Spyglass is now part of the \"Equipment\" category in the Creative inventory ([MCPE-126079](https://bugs.mojang.com/browse/MCPE-126079))

### Vanilla Parity

-   Falling blocks now break when landing on Shulkers

### User Interface

-   Fixed controller cursor sensitivity scaling ([MCPE-33868](https://bugs.mojang.com/browse/MCPE-33868))
-   Fixed a bug preventing users from reassigning key \'E\' in \"Keyboard & Mouse\" settings ([MCPE-124224](https://bugs.mojang.com/browse/MCPE-124224))

### Commands

-   Fixed issue where Minecart with Command Block was not affected by the \'CommandBlocksEnabled\' gamerule ([MCPE-93666](https://bugs.mojang.com/browse/MCPE-93666))

### Multiplayer

-   The \'/kick\' command works properly if cheats and command blocks are disabled, and it no longer uses target selectors

# Technical Updates

### New Experimental Feature: Volumes! 

-   Create volumes in your world: simply create a \"volumes\" folder in a saved world, and put json files in there - 1 json file per volume. More information can be found on the beta behaviour pack documentation 
-   Currently, you can attach a fog - minecraft or your own custom fog - to a volume. When the player enters the volume, the fog will take effect 

General

-   Added AddVolumeEntityPacket that contains information of a volume entity including its net ID and NBT containing information about the volume\'s definition and components, which will be added to the client\'s registry
-   Added RemoveVolumeEntityPacket that contains a volume entity\'s net ID to remove it from the client\'s registry

### Mobs

-   Added a new optional flag \"use_simplified_breeding\" to \"minecraft:genetics\" component. When this flag is set to true, the offspring never inherits hidden alleles of parents as main alleles and main as hidden. This allows to implement simple breeding logic easier

### GameTest Framework

-   Components
    -   \[Removed\] function setColor(color : Number)
    -   property value : Number - Gets or sets the color of the entity

-   -   Added additional component interfaces. movement, navigation, healable, breathable, ageable, and tameable components can be referenced via entity.getComponent(componentName : string).
    -   minecraft:color

-   Container - New interface for interacting with entity containers. Can be referenced via entity.getComponent(\"inventory\").container

-   -   function setItem(slot : Number, itemStack : ItemStack) - Adds itemStack to the container at the given slot
    -   function getItem(slot : Number) : ItemStack - Gets the itemStack at the given slot
    -   function addItem(itemStack : ItemStack) - Adds the given itemStack to the first available slot of the container
    -   function transferItem(fromSlot : Number, toSlot : Number, toContainer : Container) - Transfers an ItemStack from fromSlot of the container to toSlot of toContainer
    -   function swapItems(slot : Number, otherSlot : Number, otherContainer : Container) - Swaps ItemStacks between slot of the container and otherSlot of otherContainer
    -   function worldLocation(relativeLocation : BlockLocation) - Transforms the coordinates of given GameTest location to its corresponding world location
    -   function relativeLocation(worldLocation : BlockLocation) - Transforms the coordinates of given world location to its corresponding GameTest location
