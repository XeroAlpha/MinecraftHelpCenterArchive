---
title: Minecraft Beta & Preview - 1.20.60.25
date: 2024-01-10T14:20:32Z
updated: 2024-01-10T14:44:44Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23082413763341-Minecraft-Beta-Preview-1-20-60-25
---

**Posted:** 10 January 2024

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft scene of a trial chamber, with a breeze, a zoglin, a wolf wearing armour, and some ocelots in the background.](https://feedback.minecraft.net/hc/article_attachments/23082748746637)

Here’s a list of what’s new in the latest Minecraft Preview and Beta. As always, we love to hear your feedback, so please let us know what you think [here](https://aka.ms/MinecraftArmadilloFeedback), and report any bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

# **Experimental Features**

## **Trial Spawner**

- If the Trial Spawner has less than two seconds remaining to spawn a mob when detecting a player, the spawn delay is set to two seconds

## **Breeze**

- The Breeze now reflects all projectiles
- The Breeze now reflects projectiles back toward the shooting entity, with a 40-degree spread
- The pixels at the bottom of the Breeze's torso rods now match with their surrounding colors

# **Features and Bug Fixes**

## **Blocks**

- Banner items of identical colors now consistently stack together, whether or not they have previously been placed in the world as blocks ([MCPE-43391](https://bugs.mojang.com/browse/MCPE-43391))
- Wither Roses now damage mobs every 0.5 seconds, instead of every 2 seconds ([MCPE-55878](https://bugs.mojang.com/browse/MCPE-55878)) 
- Containers being cloned no longer keep their container screens open or cause crashes

## **Double Chest & Double Trapped Chest**

- Fixed pixel shading on the Double Chest and Double Trapped Chest lids ([MCPE-169495](https://bugs.mojang.com/browse/MCPE-169495)) 

## **General**

- The "You Need A Mint" achievement can now only be unlocked by collecting Dragon's Breath ([MCPE-177409](https://bugs.mojang.com/browse/MCPE-177409)) 

## **Items**

- Players can now consume Suspicious Stew even when their hunger bar is full ([MCPE-122491](https://bugs.mojang.com/browse/MCPE-122491)) 

## **Mobs**

- The scattering of Experience Orbs released while fishing has been reduced ([MCPE-170540](https://bugs.mojang.com/browse/MCPE-170540)) 
- Zoglins can no longer spawn in Peaceful difficulty and will despawn if the difficulty is switched to Peaceful ([MCPE-79480](https://bugs.mojang.com/browse/MCPE-79480))
- Experience Orbs no longer collide with mobs ([MCPE-87711](https://bugs.mojang.com/browse/MCPE-87711)) 
- Sweet Berry Bushes no longer damage Bees moving through them ([MCPE-114689](https://bugs.mojang.com/browse/MCPE-114689)) 
- Wolves can now spawn on both Snow and Top Snow within Grove biomes ([MCPE-147656](https://bugs.mojang.com/browse/MCPE-147656)) 

## **Stability and Performance**

- Fixed a bug that could cause infinite loading while joining a Realm

## **World Generation**

- The limitations on which blocks can be replaced by Dark Oak and Acacia trees now also apply to their branches, not just their trunks
- Top Snow placed at generation time now also covers Tall Grass and flowers ([MCPE-142321](https://bugs.mojang.com/browse/MCPE-142321))  

# **Technical Updates**

## **API**

- Changed "Unsupported or out of bounds value.." errors to use *ArgumentOutOfBoundsError *Error type 

## **Blocks**

- Added the ability for data-driven blocks to remove faces in the geometry when abutting a full and opaque block. A new field has been added to the Block Geometry Component, which references a new Culling .json file (found in the resource pack block_culling directory) that sets up culling rules for the tessellated geometry 

## **Dimension API**

- *setWeather *method argument duration now uses *ArgumentOutOfBoundsError *Error type

## **Editor**

The Editor and its [corresponding API](https://aka.ms/EditorAPI) are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor**.

Learn [how to use](https://www.aka.ms/LearnEditor) the Editor, join the [GitHub Discussion forum](https://github.com/Mojang/minecraft-editor/discussions) to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Update this week:

- Fixed a bug where submenu items were incorrectly added to the root level upon refreshing the editor screen

# **Experimental Technical Updates**

## **API**

- *PropertyOutOfBoundsError*
  - Added a new *PropertyOutOfBoundsError *that throws when a property that is bounded is set out of bounds
- *ContainerSlot *APIs now throw an *InvalidContainerSlotError *if the container slot is invalid, or if a property is set on an empty slot
- Property *typeId *no longer returns undefined for empty slots, but instead throws an *InvalidContainerSlotError*
- Added function *hasItem *- Returns whether the slot contains an item
- Added function *getCanPlaceOn *- Returns an array of block identifiers that the item can be placed on
- Added function *getCanDestroy *- Returns an array of block identifiers that the item can destroy when used

## **Commands**

- Healthbar of mounted rideable mobs is now properly displayed ([MCPE-177696](https://bugs.mojang.com/browse/MCPE-177696))
- Execute command now fails when comparing unloaded blocks ([MCPE-177195](https://bugs.mojang.com/browse/MCPE-177195))
- Hud command now works as expected – the /hud command allows creators to show/hide each element individually as well as show/hide all. Hiding one element no longer hides 'all' elements.

## **Graphical**

- Fixed an issue causing caves to appear illuminated by the sun (aka “Light Leaking”) in the Deferred Technical Preview
- Volumetric fog is no longer affected by sunlight in enclosed spaces in the Deferred Technical Preview 

 

<div style="box-sizing: border-box; color: #000000; font-family: ' Segoe UI VSS (Regular)' , ' Segoe UI' , -apple-system, BlinkMacSystemFont, Roboto, ' Helvetica Neue' , Helvetica, Ubuntu, Arial, sans-serif, ' Apple Color Emoji' , ' Segoe UI Emoji' , ' Segoe UI Symbol' font-size:14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">

<div style="box-sizing: border-box;">

 

</div>

</div>
