---
title: "Minecraft: Java Edition - 1.21 Pre-Release 3"
date: 2024-06-10T11:21:35Z
updated: 2025-02-27T12:46:29Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27439757853709-Minecraft-Java-Edition-1-21-Pre-Release-3
hash:
  h_01J00Y38P6NSVWFQNSQMBKAB6J: changes
  h_01J00Y38P6QHF9ZRNFZ9QDEWEQ: wind-burst
  h_01J00Y38P6178SY97B1XCNYT8C: technical-changes
  h_01J00Y38P62HA62P8PNTQH0DJE: data-pack-version-48
  h_01J00Y38P6ZD80XBDF2Q1PSQC3: fixed-bugs-in-121-pre-release-3
  h_01J00Y38P6MQVPEAC2RRTS50RT: get-the-pre-release
---

The third pre-release for 1.21 is now available and it comes with even more bugfixes!

Additionally, we introduced some intentional but undocumented changes to the Wind Burst Enchantment in Pre-Release 1 last week. To remedy this, we're including those changes in this changelog instead.

Happy mining!

## CHANGES

### WIND BURST

- Following changes were introduced in Pre-Release 1; The Wind Burst enchantment now bounces the player 7 blocks up per enchantment level
  - With great power comes great responsibility - and risk! At level 3, the enchantment will bounce the player 21 blocks up which *doing some quick maths* will hurt quite a bit when hitting the ground again
  - In other words, make sure you have a target locked in (or other means of mitigating the fall damage) before making contact with the ground again

## TECHNICAL CHANGES

- Data Pack version is now 48

## DATA PACK VERSION 48

- replace_disc entity effect type is renamed to replace_disk

## FIXED BUGS IN 1.21 PRE-RELEASE 3

- [MC-252817](https://bugs.mojang.com/browse/MC-252817) - Placing a map into an item frame and removing it does not remove the green player marker
- [MC-267988](https://bugs.mojang.com/browse/MC-267988) - Tamed entities ignore their "LookAtPlayerGoal" distance and look in the direction of their owners from any distance when being stood up
- [MC-272194](https://bugs.mojang.com/browse/MC-272194) - Empty Attribute Modifiers lost during upgrade
- [MC-272565](https://bugs.mojang.com/browse/MC-272565) - Hanging leashed boats gain excessive upward momentum
- [MC-272577](https://bugs.mojang.com/browse/MC-272577) - Summoning any entity with rotation causes it to be rotated incorrectly
- [MC-272582](https://bugs.mojang.com/browse/MC-272582) - Mip-mapping not properly applied to moss carpet
- [MC-272661](https://bugs.mojang.com/browse/MC-272661) - Entities have incorrect rotations after loading or reloading a world
- [MC-272670](https://bugs.mojang.com/browse/MC-272670) - Crash while saving entity NBT - Cannot encode empty ItemStack
- [MC-272772](https://bugs.mojang.com/browse/MC-272772) - Leashed Boats' leashes disappear upon rejoining world
- [MC-272789](https://bugs.mojang.com/browse/MC-272789) - Leashing a boat to a fence which already has a lead attached to it removes the existing lead rather than attaching the new one
- [MC-272798](https://bugs.mojang.com/browse/MC-272798) - Teleporting a leashed boat (with chest) or raft (with chest) to another dimension makes a ghost lead
- [MC-272809](https://bugs.mojang.com/browse/MC-272809) - Placed boats/rafts no longer face the same direction as the player
- [MC-272814](https://bugs.mojang.com/browse/MC-272814) - Entering an end gateway does not consistently grant the Remote Getaway advancement
- [MC-272827](https://bugs.mojang.com/browse/MC-272827) - Unleashing boats leashed to fences via Use Item/Place Block drops the lead in Creative mode
- [MC-272843](https://bugs.mojang.com/browse/MC-272843) - Stepping up blocks while falling on the side of them can sometimes allow players to climb to normally unreachable heights
- [MC-272854](https://bugs.mojang.com/browse/MC-272854) - Crash when entity is leashed by non-LivingEntity
- [MC-272870](https://bugs.mojang.com/browse/MC-272870) - /execute on leasher does not work for leashed boats
- [MC-272879](https://bugs.mojang.com/browse/MC-272879) - Entering an End portal makes you face the entering direction rather than always facing west
- [MC-272886](https://bugs.mojang.com/browse/MC-272886) - Maces incorrectly cause damage to the player
- [MC-272901](https://bugs.mojang.com/browse/MC-272901) - Boats & Rafts with Chests cannot be leashed if they have a passenger

## GET THE PRE-RELEASE

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/96266e18a95faa1c785ac852315e886d0e8bb174/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
