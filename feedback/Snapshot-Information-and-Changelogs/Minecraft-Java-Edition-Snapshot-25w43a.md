---
title: Minecraft Java Edition - Snapshot 25w43a
date: 2025-10-21T15:56:15Z
updated: 2025-10-21T15:57:58Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/40503851982093-Minecraft-Java-Edition-Snapshot-25w43a
hash:
  h_01K83QRWHPMKGJ8RQ9P8PDFASS: new-features
  h_01K83QRWHP1Y8BEE3HPCG32QN9: spear-weapon
  h_01K83QRWHPZ8DZGVAC0PM4PE9A: lunge-enchantment
  h_01K83QRWHPSN2Q284TCQ7X0M96: changes
  h_01K83QRWHPPBJJVEV1GTBAPE6Y: technical-changes
  h_01K83QRWHPPHS7G285RKW6ZDTW: data-pack-version-910
  h_01K83QRWHPP4WPP41ENMXJTVFH: commands
  h_01K83QRWHPWZ14ABXGGAB3JJDC: changes-toworldborder
  h_01K83QRWHPH0STERA9DNSJDGPQ: loot-functions
  h_01K83QRWHPMV8ZMSNVW2JWA3TD: minecraftfiltered
  h_01K83QRWHPDFNFEJ7EE5Z7CT7Y: minecraftdiscard
  h_01K83QRWHP9AEDXAHNT5T1ZR91: enchantments
  h_01K83QRWHPHS9HDWAJZC6A5S25: enchantment-entity-effects
  h_01K83QRWHPRXVVQC9R5G20GTDT: resource-pack-version-710
  h_01K83QRWHPCWHP0C2FH7527TRF: textures
  h_01K83QRWHPYFKRWP86R47CNVM5: sounds
  h_01K83QRWHP5F2XPBKSH0KPZP2P: fixed-bugs-in-25w43a
  h_01K83QRWHPWCYGHG6J2T554KG1: get-the-snapshot
---

In today's snapshot we've got some changes to the spear and its unique Lunge enchantment! Spears will now deal more damage with the charge attack, and using the charge attack provides some visual feedback, so you'll know when you've landed your target! The Lunge enchantment is also getting some changes – instead of consuming weapon durability, the Lunge enchantment will consume hunger points based on the enchantment's level. So pack those potatoes before you charge into the fray!

Happy mining!

## New Features

### Spear Weapon

- Spears now deal more damage through charge attacks dealt by players, but also mobs
- The Spear model is now slightly larger
- Spears provide visual feedback when they hit a target in the charge attack

#### Lunge Enchantment

- Using Lunge no longer causes durability damage to the Spear
- Using Lunge now consumes hunger points by exhausting the player, similar to sprinting or jumping
  - Level 1 Lunge consumes 3 hunger points, level 2 consumes 4 hunger points, and level 3 consumes 5 hunger points
  - Lunge can only be used if the player has at least 6 hunger points in their hunger bar

## Changes

- The Nautilus and Zombie Nautilus can no longer be placed in boats

## Technical Changes

- The Data Pack version is now 91.0
- The Resource Pack version is now 71.0

## Data Pack Version 91.0

- World Border interpolation is now dependent on game ticks instead of real time
  - This means the World Border will no longer move when the game is paused
  - It will also respect any changes made by the /tick command
- Changed loot function filtered to allow running modification when predicate fails
- Added discard loot function

### Commands

#### Changes to worldborder

- The time argument is now given in ticks instead of seconds

### Loot Functions

#### minecraft:filtered

- Field modifier has been replaced with two fields:
  - on_pass - function or a list of functions to run when item_filter predicate passes
  - on_fail - function or a list of functions to run when item_filter predicate fails

#### minecraft:discard

- Replaces any item stack with empty one
- No fields

### Enchantments

#### Enchantment Entity Effects

- minecraft:apply_exhaustion: applies exhaustion to the targeted entity
  - amount - Level-Based Value indicating the amount of exhaustion to apply
  - effective only on players

## Resource Pack Version 71.0

### Textures

- darkened_cutout_mipmap field of the texture section of \*.mcmeta files has been replaced by a new field mipmap_strategy with the following supported values:
  - mean averages both color and alpha between groups of four pixels for the current mipmap level to generate the next mipmap level pixel. This was and stays the default strategy for most solid or translucent full block textures
  - dark_cutout is similar to mean, but blends colors in a way that makes the pixels bordering cutout pixels darker. This was and stays the strategy for leaves and Mangrove Roots. It simulates dark interior of the blocks
  - cutout is a new strategy that always generates a mipmap based on the original texture instead of the previous mipmap. Used for most cutout blocks that became mipmapped in this version
  - strict_cutout is a modification of cutout that uses stricter alpha cutoff value leading to the textures using this value disappearing at higher mipmap levels. Is used for flowers and similar blocks to avoid artifacts
  - auto is the default value and will make the game to pick mean for textures that do not contain fully transparent pixels and cutout for those that do
- All mipmap levels are once again animated for block animated textures
- Beacon and Redstone dust now support translucent textures

### Sounds

- Added new sound event for the Nautilus:
  - item.underwater_saddle.equip

## Fixed bugs in 25w43a

- [MC-53491](https://bugs.mojang.com/browse/MC-53491) - The world border can change in size when the game is paused
- [MC-302669](https://bugs.mojang.com/browse/MC-302669) - Banners sometimes show incorrect textures when viewed from some angles
- [MC-302675](https://bugs.mojang.com/browse/MC-302675) - Some item frames do not render their item correctly after world upgrade
- [MC-302691](https://bugs.mojang.com/browse/MC-302691) - Held and dropped items sometimes fail to render correctly when banners exist in the world
- [MC-302695](https://bugs.mojang.com/browse/MC-302695) - Can use the game mode switcher while the game is paused, and doing so unpauses the game
- [MC-302719](https://bugs.mojang.com/browse/MC-302719) - Debug key binds text is improperly capitalized
- [MC-302724](https://bugs.mojang.com/browse/MC-302724) - The "debug.entry.overlay" string is improperly capitalized
- [MC-302737](https://bugs.mojang.com/browse/MC-302737) - After using the game mode switcher, you need to press F3 twice to toggle the debug overlay
- [MC-302769](https://bugs.mojang.com/browse/MC-302769) - Several blocks now turn invisible at short distances
- [MC-302790](https://bugs.mojang.com/browse/MC-302790) - The minecraft:apply_impulse effect cannot be used in minecraft:location_changed
- [MC-302849](https://bugs.mojang.com/browse/MC-302849) - Mobs with spears deal too little damage
- [MC-302854](https://bugs.mojang.com/browse/MC-302854) - Glass is less transparent when viewed from far away
- [MC-302872](https://bugs.mojang.com/browse/MC-302872) - Severe color contrast between lava mip levels
- [MC-302887](https://bugs.mojang.com/browse/MC-302887) - Spear charging animation in first person isn’t perfectly mirrored between the main hand and off hand
- [MC-302912](https://bugs.mojang.com/browse/MC-302912) - Zombie nautiluses suffocate out of water, unlike other undead mobs
- [MC-302915](https://bugs.mojang.com/browse/MC-302915) - Mipmapping on cutout textures can cause them to appear larger than they should
- [MC-302963](https://bugs.mojang.com/browse/MC-302963) - Killing a player's mounted nautilus will cause that player to briefly glide upward, unaffected by gravity
- [MC-302984](https://bugs.mojang.com/browse/MC-302984) - Holding a spear in the off hand and attacking an entity adds the spear's attack damage to the attack
- [MC-303032](https://bugs.mojang.com/browse/MC-303032) - Nautiluses can still be controlled normally even when they are babies or untamed
- [MC-303138](https://bugs.mojang.com/browse/MC-303138) - Piglins and hoglins can zombify in the nether
- [MC-303150](https://bugs.mojang.com/browse/MC-303150) - Can't lay in bed during the day even with "can_sleep" set to "always" and "playerSleepPercentage" set to 101+
- [MC-303157](https://bugs.mojang.com/browse/MC-303157) - remove_binomial enchantment effect has a chance of producing out-of-range values
- [MC-303166](https://bugs.mojang.com/browse/MC-303166) - /stopwatch create suggests existing stopwatches
- [MC-303181](https://bugs.mojang.com/browse/MC-303181) - Spears have an attribute modifier for attack_damage for both hands, even though the charge attack does not use it
- [MC-303201](https://bugs.mojang.com/browse/MC-303201) - Zombified piglins attack players in Creative mode
- [MC-303266](https://bugs.mojang.com/browse/MC-303266) - Nautiluses and zombie nautiluses can enter boats
- [MC-303381](https://bugs.mojang.com/browse/MC-303381) - Game crashes when serializing a world spawn point with yaw or pitch values outside of rotation bounds
- [MC-303382](https://bugs.mojang.com/browse/MC-303382) - Player spawn points with rotation values outside of bounds aren't serialized

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/dac322a1091905430e2a6ade129a4915552455d0/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
