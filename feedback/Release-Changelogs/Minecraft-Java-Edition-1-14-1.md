---
title: "Minecraft: Java Edition - 1.14.1"
date: 2019-05-13T14:21:44Z
updated: 2025-02-27T12:41:47Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360028025252-Minecraft-Java-Edition-1-14-1
hash:
  h_01JN3PN3TBY7V9KKJTW5QW0D9V: changes-in-1141
  h_01JN3PN3TBS1Z34E98SKHWVQSF: fixed-bugs-in-1141
  h_01JN3PN3TB1T2SZSR7CVJXXXEA: get-the-release
---

13 May 2019

Today we're releasing 1.14.1, a small release that addresses some issues left over from 1.14. We do plan on releasing a 1.14.2 to address further issues whilst we work on the next major update, 1.15.  
  
Happy mining!

# CHANGES IN 1.14.1

- Fixed bugs
- Performance improvements
- Arrows on fire can now light campfires

# FIXED BUGS IN 1.14.1

- [MC-151057](https://bugs.mojang.com/browse/MC-151057) - Redstone components sometimes don't get updated properly
- [MC-150847](https://bugs.mojang.com/browse/MC-150847) - Can load crossbow with air
- [MC-150785](https://bugs.mojang.com/browse/MC-150785) - Villagers and iron golems count towards the passive mob cap
- [MC-150218](https://bugs.mojang.com/browse/MC-150218) - Spawning algorithm stops at chunk borders

<!-- -->

- [MC-44793](https://bugs.mojang.com/browse/MC-44793) - Tamed wolf can't sit on slime blocks

- [MC-126946](https://bugs.mojang.com/browse/MC-126946) - Execution order is reversed when calling a function in some cases

- [MC-128441](https://bugs.mojang.com/browse/MC-128441) - /tp uses context dimension rather than destination entity's dimension

- [MC-128565](https://bugs.mojang.com/browse/MC-128565) - Function tag ordering is inconsistent across reloads and does not respect datapack ordering

- [MC-131014](https://bugs.mojang.com/browse/MC-131014) - Observers and block states not updated by tree growth

- [MC-136442](https://bugs.mojang.com/browse/MC-136442) - Blocks of giant mushrooms don't send block updates after growing

- [MC-140317](https://bugs.mojang.com/browse/MC-140317) - Ladder in village house doesn't reach the floor

- [MC-142817](https://bugs.mojang.com/browse/MC-142817) - Mobs try to pathfind through corners

- [MC-143699](https://bugs.mojang.com/browse/MC-143699) - Trader llamas won't despawn

- [MC-144904](https://bugs.mojang.com/browse/MC-144904) - Enderman can teleport to the void

- [MC-145097](https://bugs.mojang.com/browse/MC-145097) - Leather horse armor is higher in inventory slot

- [MC-145265](https://bugs.mojang.com/browse/MC-145265) - Night is not skipped when all but one players on a server are sleeping, and the remaining player leaves the server

- [MC-145744](https://bugs.mojang.com/browse/MC-145744) - Villager AI (POI detection) pegs CPU at 100%, causes lag in 19w13a

- [MC-145862](https://bugs.mojang.com/browse/MC-145862) - Villagers try to sleep in occupied beds

- [MC-146674](https://bugs.mojang.com/browse/MC-146674) - Missing Jigsaw Blocks for Beds in some Village Structures

- [MC-146811](https://bugs.mojang.com/browse/MC-146811) - Enderman AI causing HIGH ms tick lag

- [MC-146935](https://bugs.mojang.com/browse/MC-146935) - Crafting table uses outdated plank texture

- [MC-147013](https://bugs.mojang.com/browse/MC-147013) - Villagers can get hit by their own firework

- [MC-147022](https://bugs.mojang.com/browse/MC-147022) - Many village houses are inadequately lit

- [MC-147212](https://bugs.mojang.com/browse/MC-147212) - Iron golems can spawn in spaces less than three blocks high and get stuck

- [MC-147479](https://bugs.mojang.com/browse/MC-147479) - Villagers continue to shake their head after they found a workstation

- [MC-147578](https://bugs.mojang.com/browse/MC-147578) - Beacon NBT "Levels" is missing

- [MC-147590](https://bugs.mojang.com/browse/MC-147590) - Missing floor block in village/desert/houses/desert_medium_house_1

- [MC-147643](https://bugs.mojang.com/browse/MC-147643) - Villagers don't sleep in beds

- [MC-147676](https://bugs.mojang.com/browse/MC-147676) - The event.raid.horn sound effect cannot always be heard whilst in a village

- [MC-147819](https://bugs.mojang.com/browse/MC-147819) - Custom villager with large trades has scroll bar that goes outside GUI screen

- [MC-147880](https://bugs.mojang.com/browse/MC-147880) - Pillager Outposts don't generate in snowy biomes

- [MC-147890](https://bugs.mojang.com/browse/MC-147890) - Hostile mobs are not spawning

- [MC-148165](https://bugs.mojang.com/browse/MC-148165) - Bow with Flame Enchantment does not Activate TNT when Hit on the Top

- [MC-148179](https://bugs.mojang.com/browse/MC-148179) - Ender dragon fly in circles after shooting projectile at her and never comes down to the portal

- [MC-148454](https://bugs.mojang.com/browse/MC-148454) - Villager trade GUI shows incorrect price when a discount is applied on servers

- [MC-148476](https://bugs.mojang.com/browse/MC-148476) - Books still have an NBT tag (RepairCost of 0) after removal of enchantments using Grindstone

- [MC-148529](https://bugs.mojang.com/browse/MC-148529) - Name of enchanted book is lost after removing its enchantments in a grindstone

- [MC-148567](https://bugs.mojang.com/browse/MC-148567) - taiga_animal_pen_1 water trough has water recessed 1 block beneath trapdoors

- [MC-148580](https://bugs.mojang.com/browse/MC-148580) - Server lighting still broken in 1.14 pre-4

- [MC-148624](https://bugs.mojang.com/browse/MC-148624) - The banner on the Pillager Outpost structure is incorrectly named

- [MC-148830](https://bugs.mojang.com/browse/MC-148830) - Game crashed while loading chunks

- [MC-149040](https://bugs.mojang.com/browse/MC-149040) - Iron ore texture has four miscoloured pixels

- [MC-149178](https://bugs.mojang.com/browse/MC-149178) - Chunk rendering is extremely slow and random in 1.14

- [MC-149209](https://bugs.mojang.com/browse/MC-149209) - Cats jitter when sitting on slime blocks

- [MC-149278](https://bugs.mojang.com/browse/MC-149278) - Wolf AI can cause extremely severe lag spikes when in combat with a distant mob

- [MC-149420](https://bugs.mojang.com/browse/MC-149420) - Hostile mobs not despawning at 128+ blocks

- [MC-149576](https://bugs.mojang.com/browse/MC-149576) - Villagers won't sleep in their beds

- [MC-149835](https://bugs.mojang.com/browse/MC-149835) - Villagers can find a job, but can't lose the job

# GET THE RELEASE

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play!

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/ed76d597a44c5266be2a7fcd77a8270f1f0bc118/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
