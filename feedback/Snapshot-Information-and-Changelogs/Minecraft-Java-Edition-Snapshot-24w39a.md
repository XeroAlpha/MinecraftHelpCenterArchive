---
title: Minecraft Java Edition - Snapshot 24w39a
date: 2024-09-25T14:15:27Z
updated: 2024-09-25T14:15:31Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30552601445389-Minecraft-Java-Edition-Snapshot-24w39a
hash:
  h_01J8MREXBTMYJQ33MABR3VJV5D: new-features
  h_01J8MREXBTC41QF46F1MNKKQ1B: changes
  h_01J8MREXBTJJEH3ZVHBNZNFK9F: technical-changes
  h_01J8MREXBTRQE4S51FDQZ78G8W: data-pack-version-55
  h_01J8MREXBTF0FGTPN8DD6N68AR: boat-split
  h_01J8MREXBT2CT44XE7003JPT01: container-locks
  h_01J8MREXBTHW48WFN2PADMSRRQ: tags
  h_01J8MREXBTWC81W14NTG4ZPHMM: item-tags
  h_01J8MREXBTY39QZSYQN34ZN83A: predicates
  h_01J8MREXBTDSGACTFHFS09VCJ7: fixed-bugs-in-24w39a
  h_01J8MREXBTQN4BQKRYHYJ7MYBJ: get-the-snapshot
---

Happy Wednesday miners! With this snapshot we're now bundling Bundles into the game for real - Bundles are no longer experimental!

Happy mining!

 

## New Features

- Bundles are no longer experimental

## Changes

- Updated slot highlight in the UI so Item texture has better visibility
  - The previous textures have been added to Programmer Art resource pack
- Equipping a Carved Pumpkin on your head now removes the player marker from other players' maps

## Technical Changes

- The Data Pack version is now 55
- Removed the bundle feature flag and built-in datapack

## Data Pack Version 55

- boat and chest_boat entity types have been split into separate types, one per existing variant

### Boat split

- Variants of boats and chest boats now have separate entity type instead of Type field
- Removed entites:
  - minecraft:boat
  - minecraft:chest_boat
- New entities:
  - Boat without chest:
    - Type=oak -\> minecraft:oak_boat
    - Type=spruce -\> minecraft:spruce_boat
    - Type=birch -\> minecraft:birch_boat
    - Type=jungle -\> minecraft:jungle_boat
    - Type=acacia -\> minecraft:acacia_boat
    - Type=cherry -\> minecraft:cherry_boat
    - Type=dark_oak -\> minecraft:dark_oak_boat
    - Type=mangrove -\> minecraft:mangrove_boat
    - Type=bamboo -\> minecraft:bamboo_raft
  - Boat with chest:
    - Type=oak -\> minecraft:oak_chest_boat
    - Type=spruce -\> minecraft:spruce_chest_boat
    - Type=birch -\> minecraft:birch_chest_boat
    - Type=jungle -\> minecraft:jungle_chest_boat
    - Type=acacia -\> minecraft:acacia_chest_boat
    - Type=cherry -\> minecraft:cherry_chest_boat
    - Type=dark_oak -\> minecraft:dark_oak_chest_boat
    - Type=mangrove -\> minecraft:mangrove_chest_boat
    - Type=bamboo -\> minecraft:bamboo_chest_raft

### Container Locks

- The Lock field of containers has been renamed to lock and is now an item predicate
  - Any items which match the predicate can open the container
- The lock data component is now also an item predicate

### Tags

#### Item Tags

- map_invisibility_equipment: Items that can be equipped to hide the player marker on other players maps

### Predicates

- minecraft:boat entity sub-predicate has been removed, since boats no longer have variants

## Fixed bugs in 24w39a

- [MC-219083](https://bugs.mojang.com/browse/MC-219083) - Hunger client/server desync when natural regeneration is off in peaceful mode
- [MC-275216](https://bugs.mojang.com/browse/MC-275216) - Bowl is consumed when feeding a rabbit stew to a wolf
- [MC-275544](https://bugs.mojang.com/browse/MC-275544) - Drowned do not summon reinforcements anymore
- [MC-276341](https://bugs.mojang.com/browse/MC-276341) - The time how long you remain on fire no longer increases while being in the fire
- [MC-276426](https://bugs.mojang.com/browse/MC-276426) - Slimes or magma cubes spawned by splitting synchronize inherited status effects
- [MC-276588](https://bugs.mojang.com/browse/MC-276588) - Boat with chest inventory names no longer are suffixed with 'with Chest'
- [MC-276598](https://bugs.mojang.com/browse/MC-276598) - The slot_highlight_front texture renders incorrectly behind with missing recipe items
- [MC-276610](https://bugs.mojang.com/browse/MC-276610) - Ender pearl interaction with bubble columns is broken
- [MC-276611](https://bugs.mojang.com/browse/MC-276611) - Converted mobs do not keep CanBreakDoors tag
- [MC-276615](https://bugs.mojang.com/browse/MC-276615) - Cured Zombie Villagers keep CanPickUpLoot:0b
- [MC-276638](https://bugs.mojang.com/browse/MC-276638) - The server console or LAN game output spammed with "PLAYER moved too quickly!" after a player dies and respawns
- [MC-276646](https://bugs.mojang.com/browse/MC-276646) - Unique Horse Armor sound event is no longer used
- [MC-276674](https://bugs.mojang.com/browse/MC-276674) - Entities with emissive eyes aren't properly affected by fog of any kind
- [MC-276707](https://bugs.mojang.com/browse/MC-276707) - Underwater fireballs constantly play fire extinguishing sound
- [MC-276724](https://bugs.mojang.com/browse/MC-276724) - Arrows and potions resist upward flowing bubble columns
- [MC-276727](https://bugs.mojang.com/browse/MC-276727) - Projectiles are choppy while moving after hitting blocks or entities
- [MC-276807](https://bugs.mojang.com/browse/MC-276807) - All blocks and entities flicker at night or at lower light levels than 15
- [MC-276817](https://bugs.mojang.com/browse/MC-276817) - Teleport command offsets are applied incorrectly
- [MC-276843](https://bugs.mojang.com/browse/MC-276843) - Touching an end portal while in spectator mode teleports the player when they exit spectator mode
- [MC-276919](https://bugs.mojang.com/browse/MC-276919) - /tp teleports twice the relative distance if there's a block on the teleport point

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/31bc8a4f3c73e3873f4a0d42e7c65a7ae43cc44a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
