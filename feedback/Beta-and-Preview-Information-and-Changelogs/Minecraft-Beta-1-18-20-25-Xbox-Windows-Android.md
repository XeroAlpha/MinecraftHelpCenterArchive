---
title: Minecraft Beta - 1.18.20.25 (Xbox / Windows / Android)
date: 2022-02-09T15:48:46Z
updated: 2022-02-10T10:17:06Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4424787358221-Minecraft-Beta-1-18-20-25-Xbox-Windows-Android-
---

**Posted:** 9 February 2022

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work-in-progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- Minecraft Preview players may receive a slightly different version number, but the fixes and features here should be the same. More information can be found here: [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ).

![froglight_beta.jpg](https://feedback.minecraft.net/hc/article_attachments/4424787313677/froglight_beta.jpg)

 

It's time for another update, and here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/).

**Please Note:** The Preview version will remain on 1.18.20.24 for enrolled Xbox players until the next beta and preview update.

# **Experimental Features**

## **Frog Spawn**

- Frog Spawn is no longer invisible when seen from below
- Frogs and Turtles can now be tempted vertically

## **Froglight**

- Froglight blocks are no longer randomly rotated, and have gained new textures ([MCPE-151514](https://bugs.mojang.com/browse/MCPE-151514))

## **Goat Horn**

- A sound now plays when a Horn breaks off a Goat
- An animation is now shown when using the Goat Horn in both 1st and 3rd person views ([MCPE-104158](https://bugs.mojang.com/browse/MCPE-104158))  
    

# **Non-Experimental Features and Bug Fixes**

## **Gameplay**

- Removed water from the extra-block when placing an Amethyst cluster ([MCPE-148394](https://bugs.mojang.com/browse/MCPE-148394))
- Reverted fix for Coral Fan pathing
  - Please note - This revert is a temporary change while we consider the feedback given by players, and overall gameplay balance
- Tweaked hunger depletion rate to better match Java Edition ([MCPE-56031](https://bugs.mojang.com/browse/MCPE-56031))
  - Players can now properly lose hunger when sprinting or swimming
  - Players lose significantly less hunger when jumping
  - Exhaustion rates can now be tweaked in Behaviour Packs

## **Mobs**

- Fixed an issue where entities were not protected from fire damage by Fire Resistance effect
- Mobs that are riding a boat, for example, can no longer use JumpToBlockGoal ([MCPE-150750](https://bugs.mojang.com/browse/MCPE-150750))

## **User Interface**

- Crouch (sneak) state is now reset when player dies to avoid getting stuck in crouch state after respawning
- The Resource Packs tab in the new Create New World screen is now available

## **Vanilla Parity**

### **Villagers**

- Fishermen Boat trades now change wood type based on Villager biome type
- Clerics now offer Glowstone instead of Glowstone Dust
- Weaponsmith enchanted Iron Sword trade moved to Novice
- Armorer Diamond trade moved to Journeyman

## **Commands**

- Using /playanimation command now updates paper doll and inventory character ([MCPE-137353](https://bugs.mojang.com/browse/MCPE-137353))

# **Technical Updates**

## **Add-Ons and Script Engine**

- Using biome-specific vanilla fog settings as default when overriding fog settings

## **Commands**

- Title commands fired before a client was done joining will now show instead of being ignored

## **Graphical**

- Fixed a case where ray tracing resources would be destroyed prematurely on level exit from an RTX-enabled world

**Experimental Technical**

- Volume definitions are now stored and read from Behavior Packs instead of being part of the level directory

## **GameTest Framework**

- BlockInventoryComponent
  - Fixed accessing items in a double chest crashing/being inconsistent
- Added nameTagproperty
- Added idproperty
- Added MinecraftDimensionTypeswith constants for built-in dimension IDs
- Added spawnItemto spawn an ItemStack in the dimension
- Exposed the following components for Entities:
  - minecraft:can_climb
  - minecraft:can_fly
  - minecraft:can_power_jump
  - minecraft:fire_immune
  - minecraft:floats_in_liquid
  - minecraft:is_dyable
  - minecraft:is_baby
  - minecraft:is_charged
  - minecraft:is_chested
  - minecraft:is_hidden_when_invisible
  - minecraft:is_ignited
  - minecraft:is_illager_captain
  - minecraft:is_saddled
  - minecraft:is_shaking
  - minecraft:is_sheared
  - minecraft:is_stackable
  - minecraft:is_stunned
  - minecraft:is_tamed
  - minecraft:wants_jockey
