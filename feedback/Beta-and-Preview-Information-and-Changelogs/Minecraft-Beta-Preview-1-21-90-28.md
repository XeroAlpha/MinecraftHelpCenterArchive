---
title: Minecraft Beta & Preview - 1.21.90.28
date: 2025-05-30T20:48:37Z
updated: 2025-06-02T15:57:11Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37035092600205-Minecraft-Beta-Preview-1-21-90-28
hash:
  user-content-features-and-bug-fixes: fixes-and-improvements
  user-content-mobs: mobs
  01JWHFCAAJAJXB00GCRP9797TN: graphical
  user-content-user-interface: user-interface
  user-content-entity-filters: entity-filters
---

**Posted:** 2 June 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Beta & Preview! For the full list of changes and additions, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).

# Fixes and Improvements

## Mobs

- Players riding Happy Ghasts no longer cause nearby Happy Ghasts to stop
  - This prevents players from blocking each other when flying Happy Ghasts too close together
- Ghast model is once again centered around its collision ([MCPE-220606](https://bugs.mojang.com/browse/MCPE-220606))
- Happy Ghast can now be pushed by other mobs even while being ridden, except when made immobile by a player standing on it

## Graphical

- The screen no longer turns bright white upon leaving the End in Vibrant Visuals ([MCPE-220333](https://bugs.mojang.com/browse/MCPE-220333))
- Turned off Vibrant Visuals by default on some console devices (Xbox One, Xbox One S, PlayStation 4)

## User Interface

- Fixed a crash that could occur when viewing the friends drawer

## Entity Filters

- Added the "is_vehicle_family" entity filter, which returns true when the subject entity is riding a vehicle with the specified family
