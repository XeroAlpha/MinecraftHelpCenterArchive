---
title: Minecraft Beta - 1.18.20.27 (Xbox / Windows / Android)
date: 2022-02-17T15:23:18Z
updated: 2022-02-17T16:45:57Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4438936661517-Minecraft-Beta-1-18-20-27-Xbox-Windows-Android
---

**Posted:** 17 February 2022

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work-in-progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions
- Minecraft Preview players may receive a slightly different version number, but the fixes and features here should be the same. More information can be found here: [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ).

![carrots_bees.jpg](https://feedback.minecraft.net/hc/article_attachments/4438927740429/carrots_bees.jpg)

 

It's time for another update, and here's a list of what is new in this week's Beta! As always please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/).

 

## **Minecraft Preview:**

- Minecraft Preview players on Windows and iOS can now join each other's games!

## **Known Issues:**

- We are aware that some Android devices may experience a crash when creating a world. This will only happen once at most, after which you can create worlds as usual.

# **Features and Bug Fixes**

## **Gameplay**

- Fixed actor definition identifiers not being recognized if the item or block name contains "."
- Damage is now calculated more accurately, we now properly calculate and store partial damage for larger damage
- Mobs across higher and lower difficulties have their damage adjusted slightly accordingly
- Armor and protection reduction calculations have been made more accurate
- Dragon's breath attack now properly deals damage ([MCPE-94317](https://bugs.mojang.com/browse/MCPE-94317))
- The player's position when rejoining a world will remain the same if they quit while in lava ([MCPE-82480](https://bugs.mojang.com/browse/MCPE-82480))
- Players can now fly down through ladders and other climbable blocks such as vines in creative without stopping ([MCPE-82480)](https://bugs.mojang.com/browse/MCPE-82480)
- Fixed a bug where shield blocking animation stops playing smoothly after blocking once ([MCPE-149838](https://bugs.mojang.com/browse/MCPE-149838))

## **Graphical**

- Fixed a bug where "carrots_stage_3" texture filename was incorrect and did not show up in-game ([MCPE-152175](https://bugs.mojang.com/browse/MCPE-152175))

## **Mobs**

- Bees no longer become angry when Beehives are destroyed by Silk Touch ([MCPE-83550](https://bugs.mojang.com/browse/MCPE-83550))
- Blaze fireballs, Fang attack damage, and Shulker bullets now deal consistent damage across all difficulties
- Small Magma Cubes do slightly more damage, from 2 to 3 on normal
- Spiders deal slightly less damage, from 3 to 2 on normal ([MCPE-94878)](https://bugs.mojang.com/browse/MCPE-94878)
- Baby Zoglins deal slightly less damage, from 1 to 0.5 on normal
- Skeleton melee attack does slightly less damage, from 3 to 2 on normal
- Wolves deal slightly more damage, from 3 to 4 on normal
- Baby Hoglins no longer attack players
- Cows, Pigs, Chickens, and Sheep no longer spawn in cold taiga biomes

## **User Interface**

- Buttons in touch controls no longer get stuck in pressed state when players go outside of the button area ([MCPE-151921](https://bugs.mojang.com/browse/MCPE-151921))
- Fixed an issue where text would display incorrectly on certain Android devices in the new UI ([MCPE-151916](https://bugs.mojang.com/browse/MCPE-151916))
- Fixed a crashing issue that could occur when hovering over the search bar in the crafting menu when playing with a controller

## **Marketplace**

- Coin Purchase Screen now includes “Coin Starter Bundles” for purchase on some platforms
- Game no longer hangs/crashes when clicking "View More"
- Marketplace tags now fit in description section
- Download popup no longer flickers when closed
- Client now supports multiple player count tags in Marketplace pages
- Added warning popup on Marketplace pages when attempting to equip skin pack skin while character creator item is equipped

## **Character Creator**

- Fixed an issue that caused some emotes to have unintended rotations when near the end of their animation ([MCPE-134328](https://bugs.mojang.com/browse/MCPE-134328))

# **Technical Updates**

## **AI Goals**

- Exposed new data parameter "calculate_new_path_radius" for the Go Home Goal. This is for specifying a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home
- Added Knockback Height Cap value to Knockback Roar Goal

## **Animation**

- Fixed a bug where timeline events at 0.0 would sometimes not run in looping animations

## **Mobs**

- Fixed command block failing to summon mob in Extreme Speed Runner Marketplace map

# **Technical Experimental Features**

- Due to engine limitations, "minecraft:geometry" data used for blocks with the Holiday Creator Features experimental toggle are now restricted to only allow geometry in the \[0,0,0\] to \[15,15,15\] space. Any blocks loaded from behavior packs that exceed this limit will render as the info_update block and show a content error in the log.

\
**GameTest Framework**
----------------------

- Exposed the following components for Actors. Each of these has a valueproperty that contains the data of the component.
  - minecraft:variant
  - minecraft:skin_id
  - minecraft:mark_variant
  - minecraft:friction_modifier
  - minecraft:ground_offset
  - minecraft:scale
  - minecraft:push_through

**mojang-gametest module:**

- Removed radiusargument from command /gametest clearall
- Modified the behavior of function attack()to make the simulated player swing even when no target is found

**mojang-minecraft module:**

- Added event entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)- Fires when an entity or block is hit by another entity
- function playSound(soundID : String, soundOptions : SoundOptions) - plays a sound for a player, cannot be heard by entities other than that specific player\
  \

## **Interact Component**

- Now have two new fields, GiveItem and TakeItem, specifying if it is possible to give/take items from an entities main hand slot. Taking the item also drops the inventory of the mob

## **Items**

- Weapon events are correctly applied when the Weapons are used by Mobs ([MCPE-118692](https://bugs.mojang.com/browse/MCPE-118692))
