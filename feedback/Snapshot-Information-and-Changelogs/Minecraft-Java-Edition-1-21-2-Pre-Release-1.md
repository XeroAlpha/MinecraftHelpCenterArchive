---
title: Minecraft Java Edition - 1.21.2 Pre-Release 1
date: 2024-10-09T09:46:02Z
updated: 2024-10-09T09:48:24Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30915452122893-Minecraft-Java-Edition-1-21-2-Pre-Release-1
hash:
  h_01J9RAHNJT34PQSCNS87RJFQX2: experimental-features
  h_01J9RAHNJTZ58PAQ92J1K8P2RC: winter-drop
  h_01J9RAHNJTCAC93NYGNQ6R2972: creaking-mob
  h_01J9RAHNJTX6KHXN0AMCSWECWR: creaking-heart
  h_01J9RAHNJTQ337JCYDVSZ6H0EQ: changes
  h_01J9RAHNJT1QXP1JQ6BS5VMQ4C: technical-changes
  h_01J9RAHNJTX7DB3Z8D64Y3PC4E: data-pack-version-57
  h_01J9RAHNJTMEGZK6THDGPVSC9B: item-components
  h_01J9RAHNJT2BCNT7WNT9G99W50: minecraftequippable
  h_01J9RAHNJT4N51HCT6ETFQ105G: particles
  h_01J9RAHNJTEPVNMM25TWRHQ052: resource-pack-version-41
  h_01J9RAHNJTAJZJ93BQK9MY6NQH: ""
  h_01J9RAHNJT9F80YXW3RD35AQXZ: fixed-bugs-in-1212-pre-release-1
  h_01J9RAHNJT3KE9X54AG7V7WWW1: get-the-pre-release
---

It is now time for the first Pre-release for Minecraft 1.21.2: Bundles of Bravery drop!

Moving into pre-releases means that you won't see any significant changes besides bug fixes and tweaks until the next snapshot cycle. It also means that we will be releasing more frequently than just Wednesdays, so keep an eye out for the next pre-release.

Happy mining!

 

## Experimental Features

### Winter Drop

#### **Creaking mob**

- Creaking will not activate or freeze around players in Creative mode
- Creaking summoned from the Creaking Heart cannot be named with a Nametag

#### **Creaking Heart**

- Comparators attached to the Creaking Heart block will output a signal strength dependent on the distance to the connected Creaking

## Changes

- Tweaked air bubbles UI
  - Added an empty state for air bubbles along with a wobble when the player is drowning
  - Added a popping sound when the bubbles pop in the UI

## Technical Changes

- The Data Pack version is now 57
- Resource Pack version is now 41

## Data Pack Version 57

- Added disablePlayerMovementCheck game rule (default: false) that disables player movement speed restriction
  - This behaves the same as the disableElytraMovementCheck rule, but applies irrespective of flying with Elytra

### Item Components

#### minecraft:equippable

- Added field camera_overlay (optional): namespaced ID of the overlay texture to use when equipped
  - If not specified, no overlay is used
  - The ID will address a texture under the textures/ folder and automatically assumed to be .png
    - For instance, misc/pumpkinblur addresses textures/misc/pumpkinblur.png

### Particles

- Format of color fields in particle options is now more standardized:
  - RGB fields can always be encoded either as a vector of floats (order: \[R,G,B\]) or as a single packed integer (order: RGB)
  - ARGB fields can always be encoded either as a vector of floats (order: \[R,G,B,A\] or as a single packed integer (order: ARGB)
  - Changed fields:
    - minecraft:trail.color (previously accepted only integer)
    - minecraft:dust.color (previously accepted only vector of floats)
    - minecraft:dust_color_transition.from_color (previously accepted only vector of floats)
    - minecraft:dust_color_transition.to_color (previously accepted only vector of floats)

## Resource Pack Version 41

- Added texture and sound for tweaked air bubble UI
  - New texture added for empty air bubble
  - Sound added for when air bubble pops

##  

## Fixed bugs in 1.21.2 Pre-Release 1

- [MC-276360](https://bugs.mojang.com/browse/MC-276360) Repeating command block data is often lost when moving it around in inventory
- [MC-276604](https://bugs.mojang.com/browse/MC-276604) Horse Armor no longer has enchantment glint
- [MC-276815](https://bugs.mojang.com/browse/MC-276815) Dyed bundles are missing the "filled" predicate
- [MC-276965](https://bugs.mojang.com/browse/MC-276965) Post shader ColorModulate uniform not reset properly after spectating spiders
- [MC-276979](https://bugs.mojang.com/browse/MC-276979) Lock field on containers and minecraft:lock data component do not get datafixed correctly when a \\ is present
- [MC-277017](https://bugs.mojang.com/browse/MC-277017) Flaming arrows no longer extinguish when water or powder snow is placed in its location
- [MC-277019](https://bugs.mojang.com/browse/MC-277019) Execute command teleporting across dimensions does not use correct relative coordinates
- [MC-277027](https://bugs.mojang.com/browse/MC-277027) Shapeless recipes accept anything if one of their ingredients is an empty tag
- [MC-277028](https://bugs.mojang.com/browse/MC-277028) Bundles do not empty smoothly
- [MC-277067](https://bugs.mojang.com/browse/MC-277067) The high contrast and programmer art resource packs are displayed as being incompatible
- [MC-277078](https://bugs.mojang.com/browse/MC-277078) Trim advancements use recipe registry key
- [MC-277108](https://bugs.mojang.com/browse/MC-277108) The "below_name" scoreboard display mode renders with dark parts when custom colors are set
- [MC-277111](https://bugs.mojang.com/browse/MC-277111) Wandering traders can sell pale oak saplings even when they're disabled
- [MC-277118](https://bugs.mojang.com/browse/MC-277118) Creakings can spawn with doMobSpawning set to false
- [MC-277131](https://bugs.mojang.com/browse/MC-277131) Pale garden missing from \#minecraft:is_overworld biome tag
- [MC-277141](https://bugs.mojang.com/browse/MC-277141) /rotate command is not restricted to permission level 2
- [MC-277143](https://bugs.mojang.com/browse/MC-277143) Horse armor has damage-related components
- [MC-277144](https://bugs.mojang.com/browse/MC-277144) Furnaces, blast furnaces, and smokers delete all of their contents inside them once reloaded after smelting items
- [MC-277148](https://bugs.mojang.com/browse/MC-277148) Pack filters removing recipes that the player has unlocked causes data pack loading to fail
- [MC-277160](https://bugs.mojang.com/browse/MC-277160) Pale hanging moss is often immediately destroyed when placed using the "/fill" command
- [MC-277163](https://bugs.mojang.com/browse/MC-277163) Map color for pale oak saplings is incorrect
- [MC-277176](https://bugs.mojang.com/browse/MC-277176) Team affixes have dark lines between them and the username in player name tags
- [MC-277215](https://bugs.mojang.com/browse/MC-277215) The game crashes when attempting to accept or reject already accepted or rejected realm invitations
- [MC-277301](https://bugs.mojang.com/browse/MC-277301) The enchantment glint isn't visible on thrown tridents that are enchanted or held in the hand in third person when using Fabulous graphics
- [MC-277302](https://bugs.mojang.com/browse/MC-277302) The enchantment glint isn't visible on shields that are enchanted in third person when using Fabulous graphics

 

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7e6e5da8bb024227ffa0d24cfa3181e6a772bb76/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
