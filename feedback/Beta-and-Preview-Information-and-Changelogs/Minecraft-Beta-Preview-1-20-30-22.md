---
title: Minecraft Beta & Preview - 1.20.30.22
date: 2023-08-17T14:05:41Z
updated: 2023-08-17T14:18:03Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/18619357250701-Minecraft-Beta-Preview-1-20-30-22
---

**Posted:** 17 August 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot of a calibrated sculk sensor and redstone powering a redstone lamp. The scene is set in a cherry grove at night.](https://feedback.minecraft.net/hc/article_attachments/18619365356813)

We have some more fixes and tweaks ready for you in this week’s Minecraft Preview. Please report and upvote any bugs you encounter at* *[bugs.mojang.com](http://bugs.mojang.com/), and enjoy the update!

**Update on 1.20.20**  
Thank you to all who participated in the 1.20.20.xx Minecraft Preview and Betas! We have a lot of exciting fixes and features prepared, but aren't quite ready to release these to everyone just yet. So, we are continuing with the 1.20.30.xx Preview and Betas, and when we are ready we'll have a combined update that is slightly larger than usual. If you want to read more about what is lined up you can read through all of the recent changelogs [here](https://feedback.minecraft.net/hc/en-us/sections/360001185332). Thank you for your patience!

# **Features and Bug Fixes**

## **Updated Play Screen**

**![A screenshot of the updated Play screens in Minecraft](https://feedback.minecraft.net/hc/article_attachments/18619725686029)**

- The Play screen is being updated with improved navigation, responsive worlds components, and a new look and feel.
- The Friends tab and Realms tab are now separated, for clearer feature separation
- The Create New World flow and Create From Template flow are also separated for a clearer path into the game
- The work on the Play screen is still in progress since a couple of features are missing, but we would love to hear your feedback at [aka.ms/MinecraftPlayScreens](https://aka.ms/MinecraftPlayScreens)

## **Blocks**

- Calibrated Sculk Sensor's amethyst crystal now lights up alongside the rest of the block during its active phase ([MCPE-168813](https://bugs.mojang.com/browse/MCPE-168813)) ([MCPE-169953](https://bugs.mojang.com/browse/MCPE-169953))
- Hanging Signs placed with commands now have the proper hitbox ([MCPE-163456](https://bugs.mojang.com/browse/MCPE-163456))
- "stained_hardened_clay" block is now split into unique instances, namely "white_terracotta", "orange_terracotta", "magenta_terracotta", "light_blue_terracotta", "yellow_terracotta", "lime_terracotta", "pink_terracotta", "gray_terracotta", "light_gray_terracotta", "cyan_terracotta", "purple_terracotta", "blue_terracotta", "brown_terracotta", "green_terracotta", "red_terracotta", and "black_terracotta"
  - Commands will still work with "stained_hardened_clay", but "stained_hardened_clay" won't be suggested in the command prompt, rather the new names will
- Third person camera no longer phases through the lower part of Composter ([MCPE-171213](https://bugs.mojang.com/browse/MCPE-171213)) 

## **Stability and Performance**

- Fixed a Bedrock Dedicated Servers memory leak while loading chunks ([BDS-17527](https://bugs.mojang.com/browse/BDS-17527)) 

## **User Interface**

- Fixed ZL/ZR icons for Joy-Con and Switch Pro controller on Android
- Caret can be re-positioned in textfield by taps or mouse clicks ([MCPE-131572](https://bugs.mojang.com/browse/MCPE-131572))
- The “Pause menu” has been renamed to “Game menu” in the user interface
- Fixed layering issue causing the underground vignette effect to draw on top of all other HUD elements ([MCPE-159217](https://bugs.mojang.com/browse/MCPE-159217))

## **Text-To-Speech**

- Text-to-speech narrator will now read out the instruction text as well as the confirm button in the Safe Area menu 

## **Commands**

- Blocks that had an alias prior to being flattened can now be properly referenced in commands 

## **Game rules**

- Changed "recipes unlock" game rule to be enabled by default. This means that recipe unlocking will be enabled by default when creating a new world but it can still be toggled off in the Advanced Settings. Existing worlds are not affected by this change. 

## **Gameplay**

- Crossbow loses durability when shooting, not when drawn ([MCPE-46490](https://bugs.mojang.com/browse/MCPE-46490)) 

# **Technical Updates**

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels withed **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Fixes this week:

- Minor updates to the Reload button to Tool mode for reloading scripts and refreshing the UI
- IPropertyPane
  - Added property *collapsed* to check if the pane is expanded or collapsed
  - Added functions *collapse* and *expand* to control *collapsed* state

## **Items**

- Released the "minecraft:food" item component out of experimental in json formats 1.20.30 and higher 
- Added "minecraft:interact_button" item component to enable and set text on the interact button in json formats 1.20.30 and above 

 

# **Experimental Technical Features**

## **API**

- Fixed issue where prototype properties are not possible to redefine using *defineProperty* ([MCPE-174073](https://bugs.mojang.com/browse/MCPE-174073)) 
- ItemStack
  - Added *getCanPlaceOn()* and *getCanDestroy()*
  - Added upper maximum limit of 255 to *amount* property - will throw if exceeds
- Entity
  - Added function *getProperty(identifier: string): boolean \| number \| string \| undefined*- Gets an Entity Property
  - Added function *setProperty(identifier: string, value: boolean \| number \| string): void*- Sets an Entity Property during the next tick
  - Added function *resetProperty(identifier: string): boolean \| number \| string;*- Resets an Entity Property to its default value during the next tick and returns the default value
- beforeEvents
  - Added event/property *removeEvent*
- afterEvents
  - Renamed event/property *removedEvent* to *removeEvent*
- Class *EntityRemovedAfterEvent*
  - Renamed field *removedEntity* to *removedEntityId*: *removedEntityId: string*
  - Added field *typeId: string*
- Added class *EntityRemovedBeforeEvent*
  - Added field *removedEntity: Entity*
- Moved *EquipmentSlot* to *5.0* and changed enum values to uppercase
- Moved *EntityEquippableComponent* to *5.0*
- Scoreboard
  - *setObjectiveAtDisplaySlot* return type now correctly set to *ScoreboardObjective* or undefined
- ScoreboardIdentity
  - *getEntity* return type now correctly set to Entity or undefined
- *setWeather* API can now take an optional duration parameter to set the weather duration
- Added read-only property *heightRange: NumberRange*- Gets min/max dimension height limits.
- Adding Player.isSleeping and Player.isEmoting 

## **Graphical**

- Fixed lighting of items in hand in the Deferred Technical Preview 
- Optimization and fixes for point light contributions
