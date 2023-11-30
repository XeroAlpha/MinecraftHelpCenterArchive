---
title: Minecraft Beta & Preview - 1.20.40.21
date: 2023-09-12T17:31:51Z
updated: 2023-09-12T17:35:57Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19424781869837-Minecraft-Beta-Preview-1-20-40-21
---

**Posted:** 13 September 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![r20u4-2_patchnotes.png](https://feedback.minecraft.net/hc/article_attachments/19424855494797)

Here’s a list of what’s new in this weeks Minecraft Preview and Beta! As always, we really want to hear your thoughts on these experiments, so please send your feedback and ideas to [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).  
  

# Experimental Features

## Villager Trade Rebalancing

- The seven new Explorer Maps from Cartographers can now also point to structures in already explored chunks  
    

# Features and Bug Fixes

## Performance / Stability

- Fixed a crash that could occur when running in the Archold room in the Spellrune marketplace map

## Vanilla Parity

- Changes to water splash sounds ([MCPE-174524](https://bugs.mojang.com/browse/MCPE-174524))
  - The ambient sounds for entering exiting water is now played only when actor is submerged below eye-level in water, matching Java Edition
  - The splash sound for entering water has been updated to match Java Edition
- The boss bar on the HUD is now same color as Java Edition ([MCPE-43591](https://bugs.mojang.com/browse/MCPE-43591))
- Camels can no longer dash while in Lava or Water
- Iron Golems no longer spawn naturally in 2-block-high spaces where they would start suffocating ([MCPE-173006](https://bugs.mojang.com/browse/MCPE-173006))

## Gameplay

- Players are no longer affected by arrow effects if the arrow is blocked ([MCPE-52904](https://bugs.mojang.com/browse/MCPE-52904))
- Villages in the End and Nether are no longer saved to the Overworld ([MCPE-85954](https://bugs.mojang.com/browse/MCPE-85954))

## Items

- Buckets can once again remove water from waterlogged blocks, unless fully submerged ([MCPE-174529](https://bugs.mojang.com/browse/MCPE-174529))

## Touch Controls

- Added a sprint button for Camels when "sprint using the joystick" option is turned off ([MCPE-172674](https://bugs.mojang.com/browse/MCPE-172674))
- Fixed Sneak button partially blocking the D-Pad Up button when using touch controls ([MCPE-38566](https://bugs.mojang.com/browse/MCPE-38566))  
    

# Technical Updates

## Add-Ons and Script Engine

- "minecraft:transformation" now prevents blocks from being transformed past the 30x30x30 pixel limit and "minecraft:unit_cube" from being translated or scaled. Invalid block will instead display the "update" block ([MCPE-173799](https://bugs.mojang.com/browse/MCPE-173799))

## API

- Released *World.getMoonPhase*, *MoonPhase*, and *MoonPhaseCount* v1.6.0  
    

# Experimental Technical Updates

## Graphical

- Fixed an issue where particles were not consistently lit while in the Deferred Technical Preview

## Items

- Deprecated "minecraft:weapon" component starting in version 1.20.40
- Deprecated "minecraft:on_use" component starting in version 1.20.40
- Deprecated "minecraft:on_use_on" component starting in version 1.20.40
