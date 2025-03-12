---
title: Minecraft Java Edition - Snapshot 20W09A
date: 2020-02-26T19:41:06Z
updated: 2025-03-12T11:15:04Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360040245311-Minecraft-Java-Edition-Snapshot-20W09A
---

26 February 2020

Today is a sad day for Obsidian... It's crying. If you're not into crying, you could always take aim at the new Target that we've added.

# NEW FEATURES IN 20W09A

- Added the Target block!
- Added the new Crying Obsidian block. It's sad and it cries purple energy!

# CHANGES IN 20W09A

- Bartering loot has been restructured to be more appealing to survival players
- Entities now get pushed by flowing lava
- Huge Fungi will now grow only on its matching type of Nylium
- Can now place Warped/Crimson roots and fungi into pots
- Nether wart blocks can be cleared quickly using a hoe
- Warped wart blocks can be cleared quickly using a hoe
- Weeping vines are now climbable
- Biome fog color smoothly blends between biomes. Smooth!
- Changed ambient block lighting in the Nether to be on parity with other editions

## TARGET

Because let’s face it, your aim could use some practice.

- The closer you hit to the center, the larger the Redstone signal!
- Test your skills with a variety of projectiles, including eggs, snowballs, tridents, and more!
- You will need one hay block and four Redstone for this recipe

## ZOMBIFIED PIGLIN

- Zombie Pigmen are now known as Zombiefied Piglins, and they now have ears. Well, at least one ear...

# TECHNICAL CHANGES IN 20W09A

- New particle types: dripping_obsidian_tear, falling_obsidian_tear, landing_obsidian_tear
- Piglins now have an IsImmuneToZombification data value that prevents them from zombifying in the overworld

## BLOCK RENAMES

Some blocks have been renamed. Turns out singular Fungus in the Nether attempted to falsely present itself as many Fungi – very sneaky!

- Crimson Fungi is now called Crimson Fungus
- Warped Fungi is now called Warped Fungus

# FIXED BUGS IN 20W09A

- [MC-7424](https://bugs.mojang.com/browse/MC-7424) - Fall damage death messages don’t show block player fall from correctly (ladders, vines, water)
- [MC-102319](https://bugs.mojang.com/browse/MC-102319) - Nether portal trigger and travel sounds are not assigned to any sound category
- [MC-137554](https://bugs.mojang.com/browse/MC-137554) - Shearing sound is in “friendly creatures” sound category
- [MC-147601](https://bugs.mojang.com/browse/MC-147601) - Purpur pillar block top texture hasn’t changed to a new texture
- [MC-148869](https://bugs.mojang.com/browse/MC-148869) - Player can clip through the ground when exiting a minecart or a boat
- [MC-166246](https://bugs.mojang.com/browse/MC-166246) - Skeleton horses cannot be leashed
- [MC-170273](https://bugs.mojang.com/browse/MC-170273) - Diamond Swords use the wrong pallet
- [MC-170274](https://bugs.mojang.com/browse/MC-170274) - Pickaxe textures are inconsistent
- [MC-170556](https://bugs.mojang.com/browse/MC-170556) - Hoe textures are inconsistent
- [MC-170815](https://bugs.mojang.com/browse/MC-170815) - Soul sand valley fossils generate duplicated / stacked
- [MC-170833](https://bugs.mojang.com/browse/MC-170833) - Crimson Fungi and Warped Fungi cannot be placed in flower pots
- [MC-170835](https://bugs.mojang.com/browse/MC-170835) - Nether large fungi do not kill nylium underneath them
- [MC-170842](https://bugs.mojang.com/browse/MC-170842) - Potted plant models still missing bottom due to faulty uv
- [MC-170844](https://bugs.mojang.com/browse/MC-170844) - Nether sprouts don’t break without supporting block
- [MC-170890](https://bugs.mojang.com/browse/MC-170890) - You can get normal fire on soul soil
- [MC-170897](https://bugs.mojang.com/browse/MC-170897) - Fossils in soulsand valleys can be generated in the air
- [MC-170904](https://bugs.mojang.com/browse/MC-170904) - When viewed in 3rd person mode, the cape renders incorrectly when sneaking while wearing a chest plate
- [MC-170915](https://bugs.mojang.com/browse/MC-170915) - Hoglins have inconsistent texture
- [MC-170932](https://bugs.mojang.com/browse/MC-170932) - Cave generator won’t cut through crimson_nylium and warped_nylium, leading to lots of floating nylium
- [MC-170954](https://bugs.mojang.com/browse/MC-170954) - Lava spreads blue fire at invalid locations
- [MC-170961](https://bugs.mojang.com/browse/MC-170961) - Mining speeds for breaking crimson & warped doors, trapdoors, fences, signs, stairs and slabs aren’t faster with an axe
- [MC-170968](https://bugs.mojang.com/browse/MC-170968) - Crimson and Warped trees / fungi replace certain blocks when growing
- [MC-170986](https://bugs.mojang.com/browse/MC-170986) - Lava fire spread creates normal fire on soul soil
- [MC-171025](https://bugs.mojang.com/browse/MC-171025) - Netherite items aren’t pushed in flowing lava
- [MC-171048](https://bugs.mojang.com/browse/MC-171048) - HugeFungiConfiguration has an unused planted field
- [MC-171077](https://bugs.mojang.com/browse/MC-171077) - Soul Fire can be setblock on air, while normal Fire can’t
- [MC-171245](https://bugs.mojang.com/browse/MC-171245) - Warped and Crimson signs cannot be crafted
- [MC-171448](https://bugs.mojang.com/browse/MC-171448) - The top textures of stripped stems don’t match the normal stem top textures
- [MC-171491](https://bugs.mojang.com/browse/MC-171491) - Fossils spawn floating in the sky in buffet worlds
- [MC-171548](https://bugs.mojang.com/browse/MC-171548) - Soul Soil is not mined quicker with a shovel
- [MC-171731](https://bugs.mojang.com/browse/MC-171731) - Huge Fungi Generate on the Lowest Nylium Block
- [MC-172084](https://bugs.mojang.com/browse/MC-172084) - Soul Sand and Soul Soil have no sounds
- [MC-172090](https://bugs.mojang.com/browse/MC-172090) - Piglins would rather hold a golden item instead of a crossbow
- [MC-172096](https://bugs.mojang.com/browse/MC-172096) - Baby hoglins and baby piglins don’t seem to play with each other
- [MC-172112](https://bugs.mojang.com/browse/MC-172112) - Hoglin walking sound is subtitled as “Hoglin dies” instead of “Footsteps”
- [MC-172151](https://bugs.mojang.com/browse/MC-172151) - Dark oak saplings are called “Jukebox/Note Blocks” in English (United Kingdom)
- [MC-172242](https://bugs.mojang.com/browse/MC-172242) - Left handed piglins don’t look at gold ingots in their right hand
- [MC-172356](https://bugs.mojang.com/browse/MC-172356) - Piglin admiring held gold ingot drops it when killed
- [MC-172363](https://bugs.mojang.com/browse/MC-172363) - Piglins aren’t attracted to certain golden items
- [MC-172434](https://bugs.mojang.com/browse/MC-172434) - Baby piglins don’t sound high pitched when zombified
- [MC-172486](https://bugs.mojang.com/browse/MC-172486) - Piglins drop two shields when killed while holding one in their offhand
- [MC-172516](https://bugs.mojang.com/browse/MC-172516) - Piglin/hoglin become Persistant when within 16 blocks of a player, causing massive lag due to piling up entites
- [MC-172580](https://bugs.mojang.com/browse/MC-172580) - Piglin can no longer pick up items when equipped with a shield

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/6f1e5ae00b938bbe15560b7174be7a3b4c78c450/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
