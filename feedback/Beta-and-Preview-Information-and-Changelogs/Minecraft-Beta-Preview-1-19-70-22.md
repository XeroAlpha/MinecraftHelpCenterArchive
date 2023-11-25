---
title: Minecraft Beta & Preview - 1.19.70.22
date: 2023-02-08T14:58:17Z
updated: 2023-02-08T15:21:29Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/12940778804877-Minecraft-Beta-Preview-1-19-70-22
---

**Posted:** 8 February, 2023

**NOTE:** This week\'s Android Beta version may be delayed. We apologize for the inconvenience and are working to resolve the issue.

**Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot of a village with mobs.](https://feedback.minecraft.net/hc/article_attachments/12940611585293)

 

Here\'s a list of what is new in this week\'s Minecraft Preview and Beta! We are still working on the tech needed to add Armor Trims to the Bedrock Edition Beta and Preview. We will let you know as soon as they are ready so you can experiment with them. Keep your eyes on [Minecraft.net](https://minecraft.net/) for the latest updates!

As always, you can send us all your feedback and ideas at [aka.ms/MC120Feedback](https://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](https://bugs.mojang.com/).

 

# **Experimental Features**

## **Blocks**

-   Removed black lines along the edges of Bamboo Fences and Bamboo Fence Gates ([MCPE-163360](https://bugs.mojang.com/browse/MCPE-163360))
-   Importing experimental blocks into a non-experimental world using the Structure Block will now correctly place unknown blocks, which are not interactable

## **Camel**

-   Camels can once again overcome obstacles as high as one block and a half ([MCPE-166452](https://bugs.mojang.com/browse/MCPE-166452))

## **User Interface**

-   Mangrove and Bamboo Hanging Signs are now placed correctly in the Creative Inventory ([MCPE-163340](https://bugs.mojang.com/browse/MCPE-163340))

# **Features and Bug Fixes**

### **Vanilla Parity**

-   Impact sounds of projectiles on Amethyst blocks and clusters are now audible
-   Dead Bush will now drop Sticks when broken with any tool except Shears, even those with the Silk Touch enchantment. Vines will drop nothing in the same situation ([MCPE-163246](https://bugs.mojang.com/browse/MCPE-163246))
-   Bells no longer break when a block is placed underneath or above them ([MCPE-166742](https://bugs.mojang.com/browse/MCPE-166742))

### **Spectator Mode**

-   Phasing through blocks in third person view no longer makes the camera zoom in and out towards the player's head ([MCPE-160467](https://bugs.mojang.com/browse/MCPE-160467))
-   End Gateways can no longer be used in Spectator Mode ([MCPE-165689](https://bugs.mojang.com/browse/MCPE-165689))

## **Gameplay**

-   Redstone source can now power a single block from different sides at the same time ([MCPE-163651](https://bugs.mojang.com/browse/MCPE-163651))
-   Players are no longer able to begin flying if they have no space to stand up ([MCPE-166413](https://bugs.mojang.com/browse/MCPE-166413))
-   Players can now fall off of an edge while sneaking if not holding the sneak button

### **Blocks**

-   Composter now always consumes an item when becoming full ([MCPE-162020](https://bugs.mojang.com/browse/MCPE-162020))

### **Mobs**

-   Witches will drink a Fire Resistance Potion when standing on a Campfire

## **Items**

-   Crossbow now shakes while charging arrows ([MCPE-152952](https://bugs.mojang.com/browse/MCPE-152952))
-   Loot table conditions are no longer ignored in-game when used inside functions ([MCPE-164582](https://bugs.mojang.com/browse/MCPE-164582))
-   Spawn eggs for Snow Golem, Wither, and Trader Llama now appear correctly in the inventory and hotbar

## **Marketplace**

-   Added a new \'Marketplace\' icon to the Marketplace screen sidebar

## **User Interface**

-   Carrots now display the proper name in item tooltips when used in *can_place_on* and *can_destroy* item components ([MCPE-160838](https://bugs.mojang.com/browse/MCPE-160838))
-   Tweaked the keyboard interaction on Android devices for text input fields

## **Commands**

-   Summon command no longer causes some entities to be spawned in at an angle

# **Technical Updates**

## **Entity Properties**

-   Fixed an issue where Entity Property value changes could be discarded if done by events fired as part of removal of active behaviors caused by other events

# **Experimental Technical Features**

## **API**

Replaced general *setVelocity* call with methods to apply impulses to entities:

-   Added function *clearVelocity(): void*- Sets the current velocity of the Entity to zero
-   Added function *applyImpulse(vector: Vector3): void*- Applies impulse vector to the current velocity of the Entity
-   Added *function applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void*- Applies knockback to the Entity in specified direction based on vertical and horizontal strength
-   Removed function *setVelocity*

General changes to more consistently use methods when working with simple data-only objects vs. properties:

-   BeforeExplosionEvent
    -   Added function *getImpactedBlocks(): Vector3\[\]*- Gets the blocks locations that are impacted the by the explosion
    -   Added function *setImpactedBlocks(blocks: Vector3\[\]): void*- Sets the blocks locations that are impacted the by the explosion
    -   Removed property *impactedBlocks*
-   BeforeItemUseOnEvent
    -   Added function *getBlockLocation(): Vector3*- Gets the location of the block being impacted
    -   Removed property *blockLocation*
-   BlockInventoryComponent
    -   Removed property *location*
-   BlockLavaContainerComponent
    -   Removed property *location*
-   BlockPistonComponent
    -   Added function *getAttachedBlocks(): Vector3\[\]*- Gets the blocks locations that are impacted by the activation of this piston
    -   Removed property *attachedBlocks*
    -   Removed property *location*
-   BlockPotionContainerComponent
    -   Removed property *location*
-   BlockRecordPlayerComponent
    -   Removed property *location*
-   BlockSignComponent
    -   Removed property *location*
-   BlockSnowContainerComponent
    -   Removed property *location*
-   BlockWaterContainerComponent
    -   Removed property *location*
    -   Added function *getHeadLocation(): Vector3*- Gets the head location of the Entity
    -   Removed property *headLocation*
-   ExplosionEvent
    -   Added function *getImpactedBlocks(): Vector3\[\]*- Gets the blocks locations that are impacted the by the explosion
    -   Removed property *impactedBlocks*
-   ItemStartUseOnEvent
    -   Added function *getBlockLocation(): Vector3*- Gets the location of the block being impacted
    -   Added function *getBuildBlockLocation(): Vector3*- Gets the location of the resulting build block
    -   Removed property *blockLocation*
    -   Removed property *buildBlockLocation*
-   ItemStopUseOnEvent
    -   Added function *getBlockLocation(): Vector3*- Gets the location of the block being impacted
    -   Removed property *blockLocation*
-   ItemUseOnEvent
    -   Added function *getBlockLocation(): Vector3*- Gets the location of the block being impacted
    -   Removed property *blockLocation*
-   NavigationResult
    -   Added function *getPath(): Vector3\[\]*- Gets the locations of the blocks that comprise the navigation route
    -   Removed property *path*
-   Player
    -   Added function *getHeadLocation(): Vector3*- Gets the head location of the Player
    -   Removed property*headLocation*

ItemStack API improvements:

-   Added read-only property *getMaxAmount: number*- Returns the maximum stack size for the item
-   Added read-only property *isStackable: bool*- Returns whether the item is stackable
-   Added function *isStackableWith(itemStack: ItemStack): bool*- Returns whether the item can be stacked with the given item
-   Added read-only *property type: ItemType*- Returns the type of the item
-   Added function *clone(): ItemStack*- Returns a copy of the item stack
-   Added property *keepOnDeath: bool*- Sets whether the item is kept on death
-   Added property *lockMode: ItemLockMode*- Sets whether the item can be moved or dropped
-   Added function *setCanPlaceOn(blockIdentifiers?: string\[\])*- Sets which blocks the item can be placed on
-   Added function *setCanDestroy(blockIdentifiers?: string\[\])*- Sets which blocks this item can destroy
