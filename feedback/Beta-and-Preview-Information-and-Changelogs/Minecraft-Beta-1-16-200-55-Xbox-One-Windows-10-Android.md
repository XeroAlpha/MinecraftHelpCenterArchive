---
title: Minecraft Beta - 1.16.200.55 (Xbox One/Windows 10/Android)
date: 2020-11-10T16:11:24Z
updated: 2020-11-11T17:08:06Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - beta_changelog
link: https://feedback.minecraft.net/hc/en-us/articles/360051928792-Minecraft-Beta-1-16-200-55-Xbox-One-Windows-10-Android
---

**Posted:** 11 November 2020

PLEASE READ before participating in the Minecraft Beta:

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

## Bug Fixes

### General

- Fixed a bug that caused mobs such as Pillagers to hide away from sunlight
- Fixed an issue where some mobile devices would lose audio after suspend and resume ([MCPE-101027](https://bugs.mojang.com/browse/MCPE-101027))
- Fixed a bug that caused Vertical Knockback to be too weak
- Fixed an issue in RTX when flying around would stutter and have poor frame rate ([MCPE-103532](https://bugs.mojang.com/browse/MCPE-103532))
- Added UI start up screen to inform players if they are on outdated graphics drivers

### Technical Changes

- Fix so that old command versions use the previous position instead of current one
  - Fixed issue where 'query.cardinal_block_face_placed_on' no longer worked with 'on_player_placing'
- Changed texture atlas padding size from 0 to 1 when disabling mipmap
- Fixed issue of blocks listed in the "minecraft:block_placer" component wouldn't work correctly

### MoLang

- Geometry, Material, and Texture variable names can once again contain dots
