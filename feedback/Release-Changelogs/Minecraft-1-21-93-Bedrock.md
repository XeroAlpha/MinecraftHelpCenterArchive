---
title: Minecraft - 1.21.93/94 (Bedrock)
date: 2025-07-03T16:56:48Z
updated: 2025-07-14T16:06:48Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37810171798029-Minecraft-1-21-93-94-Bedrock
hash:
  user-content-bug-fixes-and-features: bug-fixes-and-features
  user-content-general: general
  user-content-graphical: graphical
  user-content-mobs: mobs
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-api: api
---

**Update: **14 July 2025

Another small hotfix (1.21.94) is being rolled out.

- Fixed an issue that caused entities in some Marketplace packs to revert to their vanilla behaviors

**Posted:** 3 July 2025

A new update has been released to address a few issues with the 1.21.90 release.

# Bug Fixes and Features

## General

- Fixed a bug causing packs in world templates to disappear ([MCPE-222906](https://bugs.mojang.com/browse/MCPE-222906))
- Added music disc "Lava Chicken" by Hyper Potions
  - Drops when defeating a baby Zombie riding a Chicken (Chicken Jockey)
- Split-screen players on PlayStation and Switch can now access their player data (e.g. inventory) created in 1.21.80 and earlier ([MCPE-222048](https://bugs.mojang.com/browse/MCPE-222048))

## Graphical

- Slightly reduced the emissive intensity of Torches, Redstone Torches, Soul Torches, and Soul Lanterns in Vibrant Visuals ([MCPE-222020](https://bugs.mojang.com/browse/MCPE-222020))
- Fixed `parent_setup` not running with the correct context, which caused animation issues in some packs
- Glowing text on Signs no longer gets overly bright when looked at directly in Vibrant Visuals

## Mobs

- Fixed performance degradation when a Happy Ghast is leashed close to the ground ([MCPE-222147](https://bugs.mojang.com/browse/MCPE-222147))
- Air friction is now only applied to Boats when they are leashed ([MCPE-222298](https://bugs.mojang.com/browse/MCPE-222298))
  - Boats are still prevented from orbiting the player when leashed
  - Boats once again retain momentum when moving off ledges

## User Interface

- Fixed issue where the player was not able to move the camera while using the interact buttons on touch devices ([MCPE-220353](https://bugs.mojang.com/browse/MCPE-220353))

# Technical Updates

## API

- Added a new condition `passenger_of_entity` that allows checking which vehicle entity type is being ridden by the damaged entity that is dropping loot
  - Like `damaged_by_entity`, allows specifying an `entity_type` field to check against when deciding which entry in a loot table to select
- Added a new condition `is_baby` that allows checking if the entity that is dropping loot is a `baby`
