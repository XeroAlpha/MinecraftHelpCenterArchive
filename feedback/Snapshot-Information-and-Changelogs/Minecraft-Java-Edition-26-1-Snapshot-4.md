---
title: Minecraft Java Edition - 26.1 Snapshot 4
date: 2026-01-26T15:59:07Z
updated: 2026-01-26T15:59:16Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/42975985491981-Minecraft-Java-Edition-26-1-Snapshot-4
hash:
  h_01KFXGENNF0BCQNWKP93NJDQ8D: new-features
  h_01KFXGENNGAK6SE2Q50VGN77ZR: changes
  h_01KFXGENNH56YAG8792818YRRE: baby-mobs
  h_01KFXGENNQ5P5W9ZG5VNRPG1XR: technical-changes
  h_01KFXGENNRJRW4ZEABYW7BZQ5C: data-pack-version-971
  h_01KFXGENNTRW7QA2NZWR6VASJD: world-clocks
  h_01KFXGENNVMP33RSYAEJC8DCYT: tags
  h_01KFXGENNV5T7HESFCYC5HRAB0: block-tags
  h_01KFXGENNXAS220FZWV5ZE0TPZ: resource-pack-version-781
  h_01KFXGENNX5FGA7DP0R1XV82DX: entity-textures
  h_01KFXGENP2SXMTBDCSBQ1FQNXR: fixed-bugs-in-261-snapshot-4
  h_01KFXGENP9Z56H2PATZX1YZ48T: get-the-snapshot
---

Earlier today we pranced into the shipping room in order to bring you the fourth snapshot of 26.1, featuring an equestrian batch of game drop cuteness. With this week's release, baby mounts are getting an adorable makeover! Donkeys. Mules. Every single horse variant. All of these tiny cuties are galloping into the Overworld looking tinier and cuter than ever!

Happy mining!

 

## New Features

- Added new baby sounds for Horse

## Changes

- Revamped the visuals of more baby mobs
- Baby chicken wing texture has been updated/fixed

### Baby Mobs

- Updated the models and textures of the following baby mobs:
  - Horse
    - Increased the bounding box of baby Horses to better fit the new model
  - Donkey
  - Mule
  - Zombie Horse
    - Increased the bounding box of baby Zombie Horses to better fit the new model
    - Can only be spawned in Creative mode or by using commands
  - Skeleton Horse
    - Increased the bounding box of baby Skeleton Horses to better fit the new model
    - Can only be spawned in Creative mode or by using commands

## Technical Changes

- The Data Pack version is now 97.1
- The Resource Pack version is now 78.1

## Data Pack Version 97.1

- Villager and Piglin inventory slots can now only be accessed using mob.inventory.\*. villager.\* and piglin.\* has been removed

### World Clocks

- Added minecraft:the_end world clock to The End dimension
  - It now controls the sky flashes in The End

### Tags

#### Block Tags

- Added the following tags which determine which blocks a category of vegetation can be placed on and survive
  - \#supports_stem_fruit
  - \#supports_pumpkin_stem_fruit
  - \#supports_melon_stem_fruit

## Resource Pack Version 78.1

### Entity Textures

- Added new entity textures:
  - entity/horse/donkey_baby.png
  - entity/horse/horse_black_baby.png
  - entity/horse/horse_brown_baby.png
  - entity/horse/horse_chestnut_baby.png
  - entity/horse/horse_creamy_baby.png
  - entity/horse/horse_darkbrown_baby.png
  - entity/horse/horse_gray_baby.png
  - entity/horse/horse_blackdots_baby.png
  - entity/horse/horse_markings_white_baby.png
  - entity/horse/horse_markings_whitedots_baby.png
  - entity/horse/horse_markings_whitefield_baby.png
  - entity/horse/horse_skeleton_baby.png
  - entity/horse/horse_white_baby.png
  - entity/horse/horse_zombie_baby.png
  - entity/horse/mule_baby.png
- Added new sound events for the Horse:
  - entity.baby_horse.ambient
  - entity.baby_horse.hurt
  - entity.baby_horse.death
  - entity.baby_horse.angry
  - entity.baby_horse.eat
  - entity.baby_horse.fall
  - entity.baby_horse.land
  - entity.baby_horse.step
  - entity.baby_horse.breathe

## Fixed bugs in 26.1 Snapshot 4

- [MC-131745](https://bugs.mojang.com/browse/MC-131745) - Shipwrecks sometimes generate split into different variants at chunk boundaries
- [MC-298136](https://bugs.mojang.com/browse/MC-298136) - The aura of beacon beams now always renders behind block entities
- [MC-302635](https://bugs.mojang.com/browse/MC-302635) - Semi-transparent blocks render in front of solid blocks when viewed through semi-transparent blocks being pushed by a piston
- [MC-305134](https://bugs.mojang.com/browse/MC-305134) - "villager.*" and "piglin.*" can both test both villagers' and piglins' inventories
- [MC-305510](https://bugs.mojang.com/browse/MC-305510) - The top texture of stripped spruce logs is now inconsistent with Bedrock Edition
- [MC-305632](https://bugs.mojang.com/browse/MC-305632) - The minimum prices for enchanted books traded by librarians are inconsistent with the established price calculation formula
- [MC-305674](https://bugs.mojang.com/browse/MC-305674) - You can sell water bottles to wandering traders up to 12 times, instead of 2
- [MC-305675](https://bugs.mojang.com/browse/MC-305675) - Even when "Villager Trade Rebalance" is enabled, master armorers still sell diamond armor without buying diamonds
- [MC-305676](https://bugs.mojang.com/browse/MC-305676) - When "Villager Trade Rebalance" is enabled, master desert armorers sell diamond leggings for 4 diamonds instead of 3 diamonds
- [MC-305677](https://bugs.mojang.com/browse/MC-305677) - When "Villager Trade Rebalance" is enabled, master savanna armorers sell diamond chestplates for 6 emeralds and 2 diamonds instead of 8 emeralds and 3 diamonds
- [MC-305691](https://bugs.mojang.com/browse/MC-305691) - Villagers have insomnia
- [MC-305695](https://bugs.mojang.com/browse/MC-305695) - Piglins spawned from spawn eggs now immediately hunt
- [MC-305699](https://bugs.mojang.com/browse/MC-305699) - Piglins in groups fail to initiate hoglin hunting behavior
- [MC-305700](https://bugs.mojang.com/browse/MC-305700) - Hoglins and zoglins no longer attack
- [MC-305708](https://bugs.mojang.com/browse/MC-305708) - Sugar cane can no longer be placed on red sand
- [MC-305711](https://bugs.mojang.com/browse/MC-305711) - Wardens spawned from spawn eggs now immediately burrow into the ground
- [MC-305719](https://bugs.mojang.com/browse/MC-305719) - Iron golems now spawn in abundance
- [MC-305743](https://bugs.mojang.com/browse/MC-305743) - When the "Villager Trade Rebalance" experiment is enabled, novice armorers sell iron boots for 5 iron ingots
- [MC-305744](https://bugs.mojang.com/browse/MC-305744) - When the "Villager Trade Rebalance" experiment is enabled, apprentice armorers sell iron helmets instead of iron leggings or chestplates
- [MC-305747](https://bugs.mojang.com/browse/MC-305747) - When the "Villager Trade Rebalance" experiment is enabled, journeyman armorers sell chainmail chestplates instead of bells
- [MC-305767](https://bugs.mojang.com/browse/MC-305767) - Melons and pumpkins now grow only on farmland

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/5b42d78a1619f4e1e537bbcd1f38b1b58c01bc56/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
