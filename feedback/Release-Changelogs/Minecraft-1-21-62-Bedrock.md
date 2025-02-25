---
title: Minecraft - 1.21.62 (Bedrock)
date: 2025-02-25T16:42:04Z
updated: 2025-02-25T16:42:38Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34543756347021-Minecraft-1-21-62-Bedrock
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-gameplay: gameplay
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-dedicated-server: dedicated-server
  h_01JMYZNX4VREM39DDERR8RNPKA: gameplay-1
---

**Posted:** 25 February 2025

A new update has been released to address a few issues with the 1.21.60 release. This update will be rolling out to the various platforms as they become available throughout the day - thank you for your patience!

# Features and Bug Fixes

## Gameplay

- Fixed an issue where attacking a mob while sprint jumping would remove all player momentum ([MCPE-189501](https://bugs.mojang.com/browse/MCPE-189501)) 
- Fixed an issue where laggy players fighting would occasionally not be able to hit each other ([MCPE-190552](https://bugs.mojang.com/browse/MCPE-190552)) 
- Fixed an issue where Player's collision box would sometimes be incorrect after using a bed ([MCPE-190604](https://bugs.mojang.com/browse/MCPE-190604))

## User Interface

- Trying to craft a Bundle while holding a Bundle with a Bundle inside of it now correctly crafts a Bundle instead of only consuming ingredients ([MCPE-190550](https://bugs.mojang.com/browse/MCPE-190550)) 
- Fixed an issue that could preventing joining a Realm through the Friends drawer 

# Technical Updates

## Dedicated Server

- Exposed a new parameter for dedicated server when in server-auth-with-rewind. This will make the server more strict on entity interactions. Look in server.properties for more information on what these do
  - server-authoritative-entity-interactions-strict default to false and can be set to true. Will affect Entity interaction acceptance.

## Gameplay

- Command Block hover name is now shown in GUI messages generated from commands ([MCPE-190606](https://bugs.mojang.com/browse/MCPE-190606))
