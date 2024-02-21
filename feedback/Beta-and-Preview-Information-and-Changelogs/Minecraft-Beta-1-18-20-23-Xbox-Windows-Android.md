---
title: Minecraft Beta - 1.18.20.23 (Xbox / Windows / Android)
date: 2022-02-02T14:48:33Z
updated: 2022-02-04T17:45:56Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4423906361869-Minecraft-Beta-1-18-20-23-Xbox-Windows-Android
---

**Posted:** 2 February 2022

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work-in-progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox, Windows, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![frogspawn.jpg](https://feedback.minecraft.net/hc/article_attachments/4423906675981/frogspawn.jpg)

 

Here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/). Please note - the Minecraft Preview version will receive an update with a slightly different version - for more information please visit [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ).

# **Experimental Features**

## **Frog**

- Frogs now only use jump animation when using Jump Goal
- Frogs are now tempted and bred using Slime Balls
- Tadpole health is now 6
- Adjusted Frog spawning in Swamps, weight 10, herd size 2-5
- JumpToBlockGoal now correctly has the mob jump to small blocks like Lily Pads

## **Frog Spawn**

- Frog Spawn now breaks when pushed by a Piston
- Frog Spawn is now destroyed when the water source beneath it is removed
- Frog Spawn no longer prevented from hatching when a block is underneath it
- Frog Spawn can now be placed on waterlogged blocks
- Frog Spawn can no longer be placed above solid ground or under water with the '/fill' command
- Frog Spawn Block is now destroyed by falling blocks ([MCPE-150781](https://bugs.mojang.com/browse/MCPE-150781))

## **Goat Horn**

- After using Goat Horn, there is now a cooldown period before it can be used again

# **Features and Bug Fixes**

## **Custom Skins**

- Fixed custom skins not saving when leaving the Dressing Room

## **Gameplay**

- Fixed an issue where the Mending enchantment would not always correctly consume XP Orbs to repair ([MCPE-120119](https://bugs.mojang.com/browse/MCPE-120119))

## **Mobs**

- Drowned can no longer spawn where the block light level is above 0 ([MCPE-150148](https://bugs.mojang.com/browse/MCPE-150148)) 

## **User Interface**

- Fixed truncated label (in some languages) above 2x2 crafting grid in Pocket UI inventory screen
- Fixed the Create New World opt-in beta setting not persisting between play sessions

## **Vanilla Parity**

- Cauldrons are now not fillable by Dripstones that are below flowing water

## **Items**

- Custom armor can now be equipped with the "Use" button when different armor is already equipped ([MCPE-125323](https://bugs.mojang.com/browse/MCPE-125323))

# **Technical Updates**

## **Blocks**

- Fixed an issue where projectiles would 'bounce' off of Bells in strange ways ([MCPE-47847](https://bugs.mojang.com/browse/MCPE-47847))

## **Commands**

- The '/tickingarea' command no longer modifies areas from entities with *tick_world* component

## **Molang**

- Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.18.20 or higher
  - For example A && B \|\| Cnow evaluates as (A && B) \|\| C and A \< B == C \> D now evalutes as (A \< B) == (C \> D)

## **Structure Generation and Actor Spawning**

- Fixed duplicate End Crystals spawning on top of End Spikes ([MCPE-147817](https://bugs.mojang.com/browse/MCPE-147817))

## **Experimental**

- Fixed an issue in which actor properties would not always sync from server to client

## **EatMobGoal**

- EatMobGoal is now unable to start when the player is the target

## **GameTest Framework**

- Vector
  - Added function length(): number- Returns the length of this vector
  - Added function normalized(): Vector- Returns this as a normalized vector
  - Added static function distance(a:Vector, b:Vector): number- Returns distance between two vectors
  - Added static function lerp(a:Vector, b:Vector, t: number): Vector- Returns the linear interpolation between a and b using t as the control
  - Added static function slerp(a:Vector, b:Vector, s: number): Vector- Returns the spherical linear interpolation between a and b using s as the control
  - Added static function cross(a:Vector, b:Vector): Vector- Returns the cross product of these two vectors
  - Added static function add(a:Vector, b:Vector): Vector- Returns the addition of these vectors
  - Added static function subtract(a:Vector, b:Vector): Vector- Returns the subtraction of these vectors
  - Added static function multiply(a:Vector, b:Vector): Vector- Returns the component-wise product of these vectors
  - Added static function divide(a:Vector, b:Vector): Vector- Returns the component-wise division of these vectors
  - Added static function multiply(a:Vector, b:number): Vector- Returns the product of this vector and a scalar
  - Added static function divide(a:Vector, b:number): Vector- Returns the division of this vector and a scalar
  - Added static function min(a:Vector, b:Vector): Vector- Returns a vector that is made from the smallest components of two vectors.
  - Added static function max(a:Vector, b:Vector): Vector- Returns a vector that is made from the largest components of two vectors
- World
  - Added function playSound(soundName: String, soundOptions: SoundOptions): void- plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument
- EntityItemComponent
  - Added component EntityItemComponentthat can be used to obtain an ItemStack from an item entity – e.g., getComponent(“item”).itemStack
