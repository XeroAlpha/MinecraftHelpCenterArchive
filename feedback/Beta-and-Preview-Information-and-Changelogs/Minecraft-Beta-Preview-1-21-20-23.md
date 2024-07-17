---
title: Minecraft Beta & Preview - 1.21.20.23
date: 2024-07-17T08:58:16Z
updated: 2024-07-17T14:29:39Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/28486285876237-Minecraft-Beta-Preview-1-21-20-23
hash:
  h_01J2ZYHMGZAEFTYY526V9FH6EQ: features-and-bug-fixes
  h_01J2ZYHMH07NTTGQZPGZ01ZQYJ: accessibility
  h_01J2ZYHMH06R17WKPXTQD4T4PM: blocks
  h_01J2ZYHMH008CQ0CHFWVE9Q6TC: game-tips
  h_01J2ZYHMH0W3TFR5ZXT3VA19HG: gameplay
  h_01J2ZYHMH0443C147D4FMAE244: text-input
  h_01J2ZYHMH0TR9JCXWAD0KKHZZH: user-interface
  h_01J2ZYHMH0W6232JJAFC6KMMEF: user-interface-gameplay
  h_01J2ZYHMH0NPYD1ER4ZGV8HXDY: vanilla-parity
  h_01J2ZYHMH03HG0M6HB4Y7NSX3F: technical-updates
  h_01J2ZYHMH0YQQ1XG8Z4M107PK8: editor
  h_01J2ZYHMH02QJQTP6Y0A1DTE2A: entity-components
  h_01J2ZYHMH04QC968S4MRM39D6C: general
  h_01J2ZYHMH0W1GV8H6EXQFN4YER: technical-experimental-updates
  h_01J2ZYHMH0S16G1HV2Q901CKW1: creator-camera---focus-target
---

**Posted:** 17 July 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A villager standing near a decorated pot made with fishing sherds, and there is a leashed spruce boat on an icy lake. There is a village in the background.](https://feedback.minecraft.net/hc/article_attachments/28486269122061)

There’s a new Minecraft Preview and Beta rolling out, with more tweaks and bug fixes! Here’s a list of what’s new this week:

# Features and Bug Fixes

## Accessibility

- Fixed an issue where Apple Pencil was not recognized as a valid input method ([MCPE-158895](https://bugs.mojang.com/browse/MCPE-158895)) 

## Blocks

- "light_block_0" and its derivatives now have their block sound defined ([MCPE-183449](https://bugs.mojang.com/browse/MCPE-183449)) 

## Game Tips

- The Swim game tip can now only appears when not breathing in water 

## Gameplay

- Fixed an instance where input could stop working as expected when using Touch Controls and Custom Cameras 

## Text Input

- Fixed an issue where content of the previously used text field was carried over to Signs on Xbox ([MCPE-182645](https://bugs.mojang.com/browse/MCPE-182645)) 

## User Interface

- The chat quick access history no longer stores duplicate chat entries

## User Interface Gameplay

- Fixed flickering item icon when quick moving a stack to non-empty stacks 

## Vanilla Parity

- Leads now attach to the front of Boats, instead of to their center ([MCPE-182145](https://bugs.mojang.com/browse/MCPE-182145))

# Technical Updates

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.** 

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples). 

Updates this week:

- Updated block hotbar to have non-air defaults
- Added persistence for the default hotbar 
- Added "ExtensionContext.settings.theme" which will represent the In-World UI Theme
  - This feature currently has three functions: *resolveColorKey(string): Color*, *setCurrentTheme(string): void*, and *getThemeList(): string\[\]*
  - There is a single "minecraft:default" theme
  - Future work will add the ability to create, modify, and delete custom themes but the default themes will not be modifiable
- Updated subset of PropertyPane API to use IObservable pattern.
  - Added an alternative Property Pane *addVector3*API that leverages type safe *IObservable* Observables can be created using *makeObservable* API 
    - Added interfaces *IVector3PropertyItem*and *IVector3PropertyItemOptions* for the new property item
    - Renamed function to create property bag Vector3 to *addVector3_deprecated*
  - Added an alternative Property Pane *addBool*API that leverages type safe *IObservableProp* value API 
    - Added interfaces *IBoolPropertyItem*and *IBoolPropertyItemOptions* for the new property item
    - Renamed function to create property bag bool item to *addBool_deprecated*
  - Converted Property Pane addText API to use *IObservableProp*
  - Added interfaces *IButtonPropertyItem*and *IButtonPropertyItemOptions* for the button property item 
    - IPropertyPane *addButton*API can now take a plain function
    - Removed *ButtonVariant*type, and added *ButtonPropertyItemVariant* enum API
  - Renamed *EDITOR_PANE_PROPERTY_ITEM_TYPE*enum API to *PropertyItemType*
  - Converted property pane *addImage*API to support *IObservable*. It will also be possible to use custom image formats like icon and block with *ImageResourceData* as value 
    - Added *onClick*function and *alignment* property to *IImagePropertyItemOptions* API

## Entity Components

- Improved "behavior.follow_owner" teleportation logic: 
  - Entities now seamlessly resume navigation after teleporting to their owner
  - Added the "post_teleport_distance" field, allowing to specify how far from its owner an entity will be placed after teleporting
    - If no value is specified, "stop_distance" increased by one will be used
  - These changes only affect entities with format version of 1.21.20 or above

## General

- Removed the "Holiday Creator Features" experiment. Content that uses the experimental features may no longer function correctly. Please check out Custom Components which replicates most of the functionality: <https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents> 

# Technical Experimental Updates

## Creator Camera - Focus Target

- Focus target experiment is now available, more functionality to come in future releases
- A new camera command has been added to target entities and keep them in center screen 
  - Includes option to add an offset from the center of the entity
  - Includes option to remove the target
