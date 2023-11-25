---
title: Minecraft Beta - 1.16.0.66 (Xbox One/Windows 10/Android)
date: 2020-06-04T15:35:11Z
updated: 2020-07-24T19:18:33Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360044492151-Minecraft-Beta-1-16-0-66-Xbox-One-Windows-10-Android-
---

**PLEASE READ before participating in the Minecraft Beta:**

-   Joining the beta will replace your game with a work in progress version of Minecraft
-   You will not have access to Realms and will not be able to join non-beta players while you\'re previewing the beta
-   Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
-   Beta builds can be unstable and are not representative of final version quality
-   The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

# Fixes

**Performance and Stability**

-   Fixed several crashes that could occur during gameplay
-   Fixed a crash that could occur when attempting to create world with the Tropical City Resort mash-up pack
-   Fixed an issue that could cause a delay on start up when trying to open certain worlds

**General**

-   Fixed an issue with projectiles being destroyed prematurely if they didn\'t deal damage. This is now optional with the addition of 2 new flags to the projectile 

**Gameplay**

-   Fixed an issue that could cause chests to generate without loot [MCPE-69003](https://bugs.mojang.com/browse/MCPE-69003) 

**Graphical**

-   Fixed rendering issues while riding a mount

**Add-Ons and Scripting**

-   Fixed an issue that could occur when the movement component is removed, meaning that a mob\'s speed has to ramp up from 0 again
-   Changes to components: *set_last_hurt_requires_damage* and *destroy_on_hit_requires_damage*. Each defaulting to true to respect old behavior, but can now be set to false if it is desired to have a projectile that is destroyed even when it doesn\'t deal damage

**Commands**

-   Added new overload for /replaceitem with an option for destroy (the old behavior) or keep (the command will return an error if an item occupies that slot)
-   Fixed a bug where a mob wouldn\'t delete its goal if all goals were trying to be removed
-   Fixed spamming of particles, sounds, and events for looped, non-zero-length animations with timelines
-   Fixed a syntax error issue when running the /xp command with levels
-   Fixed an issue with "A Nightmare in Candyland" map which was no longer teleporting players correctly
