---
title: Minecraft Java Edition - 1.21.11 Pre-Release 1
date: 2025-11-21T13:54:29Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/41317767987597-Minecraft-Java-Edition-1-21-11-Pre-Release-1
hash:
  h_01KAKB1K1BC20TMQ45TRS4DMAB: changes
  h_01KAKB1K1B1P44R62MSN1ABPS0: texture-filtering
  h_01KAKB1K1BVMKAD7F8F0YMA8XQ: spear-weapon
  h_01KAKB1K1BPN6VTCHT1PK5DRNV: advancements
  h_01KAKB1K1BGPFZYQSZAAK73V0V: technical-changes
  h_01KAKB1K1BB2VD6XHQ6Z9S0D5F: data-pack-versions-940
  h_01KAKB1K1BT9WK302GZ78Q1RE4: item-components
  h_01KAKB1K1BQNQHNVFCM04NP2CD: addedminecraftattack_range
  h_01KAKB1K1CGNSS2RT22K95AW7R: tags
  h_01KAKB1K1CX4PSGH56TF0WRTWF: item-tags
  h_01KAKB1K1C3B4BDASPYSQKYKM2: resource-pack-versions-750
  h_01KAKB1K1CHTT9QP0H45247T9D: item-sprites
  h_01KAKB1K1C59DR384WZ1M10KH7: textures
  h_01KAKB1K1CQ0GKF6EBP33ZMQVD: entity-textures
  h_01KAKB1K1CKX7MTEESYKY24X7M: sounds
  h_01KAKB1K1CD93N1HTN0NV4C5QS: fixed-bugs-in-12111-pre-release-1
  h_01KAKB1K1C7E8NNSPHYYA6XKC5: get-the-pre-release
---

Today we are shipping the first pre-release of 1.21.11, the Mounts of Mayhem drop. From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Tuesdays, so keep an eye out for the next pre-release.

## Changes

- Added a new graphical option "Texture Filtering"
  - This now controls whether or not Anisotropic Filtering is used
- The heads of the Nautilus and Zombie Nautilus now clip less through their shells

### Texture Filtering

- New option in Video Settings
- Controls the method used to sample textures when they are viewed at an angle or from a distance
- Available values are "None", "RGSS", and "Anisotropic"
- The default depends on your graphics preset and hardware
- "RGSS" (Rotated Grid Super Sampling) is a shader-based filtering method that improves texture clarity at a moderate performance cost
  - This is available on all hardware
- "Anisotropic" is a hardware-based filtering method that provides the best texture clarity
  - The maximum anisotropy may be "2x", "4x", and "8x", controllable by a separate slider
  - If your hardware does not support it, Anisotropic Filtering will do nothing
  - This significantly impacts video memory usage (especially combined with a high mipmap count)

### Spear Weapon

- Golden Spear is considered a preferred weapon by Piglins
- You can now continue to deal damage to the target if you keep charging at it after the initial hit, and mobs can do the same
- Skeleton variants and Drowned can no longer pick up Spears
- Zombified Piglins now also know how to charge with a Spear
- Spears are now placed after Swords in the creative inventory

### Advancements

- The "Mob Kabob" advancement is no longer a challenge advancement

## Technical Changes

- The Data Pack version is now 94.0
- The Resource Pack version is now 75.0

## Data Pack Versions 94.0

### Item Components

- min_reach, max_reach and hitbox_margin have been moved from minecraft:piercing_weapon and minecraft:kinetic_weapon into a new component minecraft:attack_range to allow all melee weapon types to use them

#### Added minecraft:attack_range

- Enables a custom attack range when using the item.
- Overrides the normal entity interaction range for Player.
- Regular melee attack range is computed for Mobs based on the distance of the target hitbox to their hitbox. This component modifies that distance check by adjusting minimum and maximum padding for the attack hitbox.
- Mobs using minecraft:kinetic_weapon will have their attack range applied in the same way it applies to players
- Format: object with fields
  - min_range: float, the minimum distance in blocks from the attacker to the target to be considered valid
    - Default value: 0.0, valid from 0.0 to 64.0
  - max_range: float, the maximum distance in blocks from the attacker to the target to be considered valid
    - Default value: 3.0, valid from 0.0 to 64.0
  - hitbox_margin: float, the margin applied to the target bounding box when checking for valid hitbox collision
    - Default value: 0.3, valid from 0.0 to 1.0
  - mob_factor: float, the multiplier applied to the min_range and max_range when checking for valid distance when item is used by a mob
    - Default value: 1.0, valid from 0.0 to 2.0

### Tags

#### Item Tags

- Updated \#piglin_preferred_weapons to include Golden Spears

## Resource Pack Versions 75.0

- Textures for the Leather Horse Armor item and equipment asset have been split into a tinted base layer and an overlay layer

### Item Sprites

- Added new item sprites:
  - item/leather_horse_armor_overlay

### Textures

- texture section of \*.mcmeta files has a new alpha_cutoff_bias field that controls alpha bias for cutout textures
  - Technically there is no limit for this value, it can be negative as well, but it does not make sense to set this higher than 1.0 or lower than -1.0 since the texture will become either fully opaque or fully transparent
  - Default value for this field is 0.0, and it can be increased for textures that can become too transparent/thin at distance, or decreased if it's too "opaque"
  - It's recommended to increment or decrease this value in fine granuality for finding the sweet spot. As an example, 0.1 is used for kelp textures in order to prevent them being fully trasparent at distance
  - Only used for lower mips of cutout textures, does not change the alpha of first mip level, and has no effect on other textures

### Entity Textures

- Added new entity textures:
  - entity/equipment/horse_body/leather_overlay.png

### Sounds

- Updated Swim Sounds for Nautilus, Baby Nautilus, and Zombie Nautilus
- Removed sound event that is no longer used:
  - item.underwater_saddle.equip
- Added new sound events for the Nautilus:
  - entity.baby_nautilus.ambient_land
  - entity.baby_nautilus.death_land
  - entity.baby_nautilus.hurt_land
  - entity.nautilus.ambient_land
  - entity.nautilus.dash_land
  - entity.nautilus.dash_ready_land
  - entity.nautilus.death_land
  - entity.nautilus.hurt_land
  - entity.zombie_nautilus.ambient_land
  - entity.zombie_nautilus.dash_land
  - entity.zombie_nautilus.dash_ready_land
  - entity.zombie_nautilus.death_land
  - entity.zombie_nautilus.hurt_land

## Fixed bugs in 1.21.11 Pre-Release 1

- [MC-276382](https://bugs.mojang.com/browse/MC-276382) - Leather horse armor leggings & helmet parts are untextured
- [MC-299136](https://bugs.mojang.com/browse/MC-299136) - Hyper Potions (Ian Tsuchiura) is not mentioned in the credits and splash texts
- [MC-302209](https://bugs.mojang.com/browse/MC-302209) - Debug renderers stop working when changing dimensions
- [MC-302677](https://bugs.mojang.com/browse/MC-302677) - The attack indicator does not respect spears' reach
- [MC-302836](https://bugs.mojang.com/browse/MC-302836) - The texture of zombie horses' heads is not symmetrical
- [MC-302840](https://bugs.mojang.com/browse/MC-302840) - The saddle texture on zombie horses is missing some parts
- [MC-302882](https://bugs.mojang.com/browse/MC-302882) - Piglins do not perform charge attacks when holding spears, unlike in Bedrock Edition
- [MC-302900](https://bugs.mojang.com/browse/MC-302900) - Spears' reach overrides the player's entity interaction range
- [MC-303052](https://bugs.mojang.com/browse/MC-303052) - Cobwebs and sweet berry bushes prevent players from lunging using spears
- [MC-303174](https://bugs.mojang.com/browse/MC-303174) - Nautilus shell drop chance from nautiluses is unaffected by Looting
- [MC-303467](https://bugs.mojang.com/browse/MC-303467) - Zombified piglins that spawn holding golden spears and can pick up loot swap their spear for any other item
- [MC-303476](https://bugs.mojang.com/browse/MC-303476) - Dashing on a nautilus plays an underwater sound even on land
- [MC-303524](https://bugs.mojang.com/browse/MC-303524) - Piglins that spawn holding a golden spear swap their spear with any golden item
- [MC-303657](https://bugs.mojang.com/browse/MC-303657) - Camel husks only sink when ridden
- [MC-303664](https://bugs.mojang.com/browse/MC-303664) - Black outlines render on flat-textured blocks when mipmap levels are disabled
- [MC-303812](https://bugs.mojang.com/browse/MC-303812) - Zombies that spawn holding spears and can pick up loot swap their spear for any other item
- [MC-303838](https://bugs.mojang.com/browse/MC-303838) - The rain overlay renders in the end while the ender dragon fog is present
- [MC-303846](https://bugs.mojang.com/browse/MC-303846) - /gamerule does not accept full resource locations of game rules
- [MC-303919](https://bugs.mojang.com/browse/MC-303919) - Lunge wastes durability and hunger by using it while on a ladder
- [MC-303942](https://bugs.mojang.com/browse/MC-303942) - The Mob Kabob advancement doesn't reward the player with experience
- [MC-303950](https://bugs.mojang.com/browse/MC-303950) - Velocity no longer properly increases spear damage
- [MC-304029](https://bugs.mojang.com/browse/MC-304029) - Undead mobs no longer burn in sunlight in biomes without rain while it's raining
- [MC-304042](https://bugs.mojang.com/browse/MC-304042) - You can get the Mob Kabob advancement by hitting an ender dragon five times in a row with the same charge attack
- [MC-304058](https://bugs.mojang.com/browse/MC-304058) - Lower fog_end_distance environment attribute values cause rain to drastically increase fog effect
- [MC-304095](https://bugs.mojang.com/browse/MC-304095) - Holding a spear prevents attack interactions with interaction entities
- [MC-304116](https://bugs.mojang.com/browse/MC-304116) - Entities and block entities do not fade correctly when the chunk fade setting is active
- [MC-304127](https://bugs.mojang.com/browse/MC-304127) - The float ranges of Cubic Bézier curve arguments don't match the changelog
- [MC-304163](https://bugs.mojang.com/browse/MC-304163) - Shift-left-clicking an entity's name with advanced tooltips enabled no longer inserts the entity's UUID in the chat
- [MC-304170](https://bugs.mojang.com/browse/MC-304170) - Setting the "Music Toast" option to "Pause Menu and Toast" while music is disabled shows a music toast
- [MC-304190](https://bugs.mojang.com/browse/MC-304190) - Fish buckets have a dysfunctional consumable component now
- [MC-304191](https://bugs.mojang.com/browse/MC-304191) - Foxes can now eat fish buckets, deleting the bucket and skipping special effects
- [MC-304196](https://bugs.mojang.com/browse/MC-304196) - The recipe for waxed chiseled copper made from waxed copper slabs now yields two items instead of one
- [MC-304212](https://bugs.mojang.com/browse/MC-304212) - Zombie nautiluses being ridden by mobs can still be leashed, unlike zombie horses and camel husks

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/1087f90b4d73209318d87aa8deecfaae24861004/server.jar)

As we are [preparing to remove obfuscation from Java Edition](https://www.minecraft.net/en-us/article/removing-obfuscation-in-java-edition), you can also get a non-obfuscated experimental version of this snapshot using the Minecraft Launcher:

- [Download this zip file](https://piston-data.mojang.com/v1/objects/f98a0c053a8246cce12f8f29f2ba4ce00872fd53/1_21_11-pre1_unobfuscated.zip)
- Unpack the folder into your "versions" folder of your local Minecraft application data folder
- Start (or restart) the Launcher
- Create a new launch installation and select the "unobfuscated 1.21.11 Pre-Release 1_unobfuscated" version
- Start the game and the remaining files will be downloaded

An unobfuscated server jar can be found here:

- [Unobfuscated server jar](https://piston-data.mojang.com/v1/objects/ffd25fe7eb268ec94a70ca0a672cadf7f62d20c9/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
