---
title: Minecraft Beta & Preview - 1.20.50.21
date: 2023-10-18T11:36:55Z
updated: 2023-10-18T15:19:07Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20490119155981-Minecraft-Beta-Preview-1-20-50-21
hash:
  h_01HBVR6KM8JCTEG8SDY8V3WBB3: information-on-the-minecraft-preview-and-beta
  h_01HD17VBQ35H2GA0AHH7G9GP4G: experimental-features
  h_01HD195DNF84FCVMVN2C58C4SN: crafter
  h_01HD17VBQ3KVH9FRQF428NR2DD: features-and-bug-fixes
  h_01HD17VBQ3J7ZQ896HNZ455F1K: blocks
  h_01HD17VBQ36ESYZW46RBQRY435: decorated-pots
  h_01HD17VBQ3Z1GZZPGC01EBH28M: mobs
  h_01HD17VBQ3EQ88G16QDHK93GB1: technical-updates
  h_01HD17VBQ3S98TPC5WCBND66VK: api
  h_01HD17VBQ39JDZ496ZH9QJY54B: general
  h_01HD17VBQ303C7Q5GJKHRK7BNQ: experimental-technical-features
  h_01HD1957J6RQ59AGCD7V74ASQ5: graphical
  01HD1951020Z4NHSYG2R7XCY8C: api-1
---

**Posted:** 18 October 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see aka.ms/JoinMCBeta for detailed instructions

![A Minecraft screenshot of the crafter in action.](https://feedback.minecraft.net/hc/article_attachments/20490157834381)

I am feeling particularly crafty today. Is it because I spent the morning scribbling cunning redstone plans on post-it notes? Or could it be **because the crafter is available for experimental testing in today’s Preview?** Revealed at Minecraft Live on October 15, the crafter uses redstone for automated crafting. Pick a recipe, add stacks of ingredients, supply a redstone pulse, and *tada!* In just a few ticks, your auto-crafted item will *pop* out into the Minecraft world. This is one of the first 1.21 features going into testing, and we’d really like your feedback to help us *craft* this into its final iteration. Send your feedback [here](https://aka.ms/Minecraft121Feedback) and report bugs at [bugs.mojang.com](https://bugs.mojang.com/)!

*(Please note: This Preview and Beta will be rolling out to players around 09:00PDT)*

# Experimental Features

## **Crafter**

- Added the Crafter block to the game 
- Crafter can be crafted with Redstone Dust, Iron Ingots, Crafting Table, and Dropper
- Crafter uses distinct particles when crafting
- Crafter has distinct sounds for crafting and failing 
- Crafter has a blast resistance of 3.5
- A Comparator connected to a Crafter now outputs a signal that is equal to the amount of non-empty slots plus disabled slots
- Moving items into crafter from Hopper or Dropper distributes them evenly instead of first filling the first stack 
- Powering the Crafter with Redstone signal makes it craft and output the item

# Features and Bug Fixes

## Blocks

- Horizontal End Rod hitboxes are now rotated correctly ([MCPE-171597](https://bugs.mojang.com/browse/MCPE-171597))

## Decorated Pots

- Inverted the direction in which Decorated Pots wobble when unsuccessfully interacted with

## Mobs

- Mobs that grow up to be adults and are too large to fit inside Boats will now jump out ([MCPE-171870)](https://bugs.mojang.com/browse/MCPE-171870)

# Technical Updates

## API

- Events
  - Moved *PlayerInteractWithBlockAfterEvent* from *beta* to *1.7.0*
  - Moved *PlayerInteractWithBlockBeforeEvent* from *beta* to *1.7.0*
  - Moved *PlayerInteractWithEntityAfterEvent* from *beta* to *1.7.0*
  - Moved *PlayerInteractWithEntityBeforeEvent* from *beta* to *1.7.0*

## General

- Fixed an issue with upgrading loaded values that have multiple string names

# Experimental Technical Features

## **Graphical**

- Enhanced the bloom pipeline to utilize HDR scene information to more naturally emphasize bright pixels in the Deferred Technical Preview
- Fixed an issue where shadows from non-existent mobs would be rendered in the Deferred Technical Preview 
- Fixed a crash that could occur when switching Dimensions in the Deferred Technical Preview 

## API

- Moved *PlayerLeaveBeforeEvent* from *beta* to *1.7.0*
- Moved *NumberRange* interface to *minecraft/common*
  - Moved *heightRange: NumberRange* from *beta* to *1.7.0*
  - Moved *matches* from *beta* to *1.7.0*
  - Moved function *clearDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyIds* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyTotalByteCount* from *beta* to *1.7.0*
  - Moved function *setDynamicProperty* from *beta* to *1.7.0*
  - Moved function *clearDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicProperties* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyIds* from *beta* to *1.7.0*
  - Moved function *getDynamicPropertyTotalByteCount* from *beta* to *1.7.0*
  - Moved function *setDynamicProperty* from *beta* to *1.7.0*
- TicksPerSecond
  - Moved from beta to *1.7.0*
  - Moved *offset* from *beta* to *1.7.0*
  - Moved *above* from *beta* to *1.7.0*
  - Moved *below* from *beta* to *1.7.0*
  - Moved *north* from *beta* to *1.7.0*
  - Moved *east* from *beta* to *1.7.0*
  - Moved *south* from *beta* to *1.7.0*
  - Moved *west* from *beta* to *1.7.0*
  - Moved *center* from *beta* to *1.7.0*
  - Moved *bottomCenter* from *beta* to *1.7.0*
