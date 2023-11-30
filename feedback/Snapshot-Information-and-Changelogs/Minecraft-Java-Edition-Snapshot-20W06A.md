---
title: Minecraft Java Edition - Snapshot 20W06A
date: 2020-02-05T16:51:55Z
categories: Snapshot Information and Changelogs
tags:
  - nether update
link: https://feedback.minecraft.net/hc/en-us/articles/360039129472-Minecraft-Java-Edition-Snapshot-20W06A
---

5 February 2020

The first snapshot for 1.16, the "Nether Update" is here, and we're very excited to share it with you! This snapshot contains new biomes, blocks, and a fancy new ore called "ancient debris".

# FEATURES IN 20W06A

- Added new Nether blocks!
- Knockback resistance is now a scale instead of a probability
- Added Crimson Forest biome to the Nether
- Added Hoglins – they don’t do much yet, but they have cute flappy ears!
- Patrols no longer spawn when the player is close to any village
- Added Netherite!
- Added Soulsand Valley biome to the Nether
- Walls do not have gaps anymore when stacked vertically
- Added Warped Forest biome to the Nether

## BLOCKS

Many new block types have been added!

- Two new wood-like materials – Crimson Stems and Warped Stems
- Basalt blocks – you can find them as pillars but they can be placed in any direction
- New ground surface blocks: Crimson Nylium and Warped Nylium
- New vegetation: Nether Sprouts, Crimson Roots and Warped Roots
- Two types of Fungi: Crimson and Warped – try using bone meal to grow them!
- Warped Wart blocks
- Weeping Vines that grow from the bottom of a block downwards!
- A new natural light source: Shroomlights
- Added Soul Soil! Whenever fire burns on Soul Soil, it burns with a blue flame!
- Soul Soil can be used to craft Soul Torches – and those can be crafted into Soul Lanterns!
- Using bone meal on Netherrack can now spread Nylium

## CRIMSON FOREST

Crimson Forests can now be found in the Nether!

- Crimson nylium carpets the cave floor with all kinds of strange new vegetation
- Huge Crimson Fungi make up the “trees” of this forest, with Shroomlights lighting up the forest floor
- Weeping Vines grow from the cave ceilings and fungi
- Hoglins wander these forests
- Crimson spores swirl through the air

## NETHERITE

- A new high-level material found in the Nether. Use it to upgrade your diamond gear!

### HOW TO MAKE NETHERITE

- Mine Ancient Debris in the lower depths of the Nether. At own risk. No insurance coverage for that
- Refine it into Netherite Scrap in a Furnace (although that’s kind of slow so you might want a Blast Furnace)
- Combine 4 Nether Scrap with 4 Gold Ingots in a crafting table to make a Netherite Ingot

### NETHERITE EFFECTS

- Netherite items float in lava so you don’t lose all your gear after that unplanned lava bath
- Netherite items have higher enchantment value than diamond (but not as high as gold)
- Netherite tools work faster and last longer than diamond
- Netherite weapons do more damage than diamond
- Netherite armor have higher toughness and durability than diamond
- Netherite armor gives you knockback resistance, so you barely get knocked back at all when hit by arrows and such
- ...and it looks cool!

## SOULSAND VALLEY

Soulsand Valleys can now be found in the Nether!

- An open space made mostly of Soul Sand and Soul Soil
- Basalt pillars span from floor to ceiling
- Fossil remains of unknown creatures from the past litter the valley
- Ash falls through the air
- A light blue glow envelopes the valley
- Beware of Skeletons here!

## SOUNDS

- Ghasts sounds are now heard at a shorter range
- Updated block sounds for Bone Blocks, Netherrack, Soul Sand, Netherwart, Nether Bricks and Quartz Ore

## WARPED FOREST

Warped Forests can now be found in the Nether!

- Warped nylium carpets the cave floor with all kinds of strange new vegetation
- Huge Warped Fungi make up the “trees” of this forest, with Shroomlights lighting up the forest floor
- A dark blue fog covers the forest
- Warped spores swirl through the air
- The Warped Forests are strange, but also the least hostile place of Nether

## WORLD GENERATION

- The old Nether biome is now called Nether Wastes
- Made shipwrecks and ocean ruins a bit less common, so you get more excited when you find one!

# TECHNICAL CHANGES IN 20W06A

- Added a locatebiome command

## COMMANDS

### LOCATEBIOME

New command that locates a specified biome. Useful in creative mode when you’re  
looking for a specific biome and don’t want to fly around randomly searching for it.  
Syntax: locatebiome \<biome\>  
Parameters:

- biome - The id of the biome to find

## PARTICLES

- New particle types: ash, crimson_spore, soul_fire_flame and warped_spore

## RENDERING

- Nailed Entity shadows to the ground.

# FIXED BUGS IN 20W06A

- [MC-17431](https://bugs.mojang.com/browse/MC-17431) - Shift-clicking stacked items with a data tag into the enchanting table GUI removes data tags from the moved item
- [MC-45619](https://bugs.mojang.com/browse/MC-45619) - Water, Signs, Vines, Torches etc. in the same block as item frame break item frame’s redstone signal
- [MC-52178](https://bugs.mojang.com/browse/MC-52178) - Cape doesn’t move down while sneaking / Cape detaches from body while sneaking
- [MC-59363](https://bugs.mojang.com/browse/MC-59363) - Items in item frames are deleted if both mouse buttons are used simultaneously
- [MC-82235](https://bugs.mojang.com/browse/MC-82235) - Baby pigs turn into adult zombie pigmen when struck by lightning
- [MC-92889](https://bugs.mojang.com/browse/MC-92889) - Mending doesn’t always consume experience if the player wears items with mending that are already fully repaired
- [MC-93198](https://bugs.mojang.com/browse/MC-93198) - Throwing potions / throwable projectiles causes both hands to bob up and down
- [MC-93631](https://bugs.mojang.com/browse/MC-93631) - Pistons pop off blocks attached to their back when retracting
- [MC-96436](https://bugs.mojang.com/browse/MC-96436) - Eggs/snowballs/xp-bottles break instantly when thrown while riding a horse
- [MC-97958](https://bugs.mojang.com/browse/MC-97958) - Small slime has no jump or squish sound
- [MC-103655](https://bugs.mojang.com/browse/MC-103655) - Cats don’t stand up when using right click on them while they’re sitting on chests or beds
- [MC-109370](https://bugs.mojang.com/browse/MC-109370) - Bottom face of column blocks are rotated 180 degrees
- [MC-109844](https://bugs.mojang.com/browse/MC-109844) - en_us.json contains unused strings
- [MC-109850](https://bugs.mojang.com/browse/MC-109850) - Redstone wire doesn’t have a bottom texture
- [MC-112630](https://bugs.mojang.com/browse/MC-112630) - Carrot on a stick cannot be broken
- [MC-113381](https://bugs.mojang.com/browse/MC-113381) - Falling dust particles of anvil and concrete powder blocks are black
- [MC-120335](https://bugs.mojang.com/browse/MC-120335) - Flower pot bottom texture is not rendered because of incorrect “uv” values in the model file
- [MC-131440](https://bugs.mojang.com/browse/MC-131440) - The message for trying to sleep at the wrong time implies that you can only sleep at night during a thunderstorm
- [MC-131770](https://bugs.mojang.com/browse/MC-131770) - Rain particles appear one block below the water or lava surface
- [MC-132607](https://bugs.mojang.com/browse/MC-132607) - Splitting slimes and magma cubes do not copy NoAI value
- [MC-134162](https://bugs.mojang.com/browse/MC-134162) - Item entities can break turtle eggs
- [MC-136868](https://bugs.mojang.com/browse/MC-136868) - Ignited TNT, arrow or trident turns black when it falls on soul sand or snow layers
- [MC-138600](https://bugs.mojang.com/browse/MC-138600) - Cats don’t bring gifts if they have already decided to sit on your bed
- [MC-140544](https://bugs.mojang.com/browse/MC-140544) - Pickaxes don’t speed up piston breaking
- [MC-148474](https://bugs.mojang.com/browse/MC-148474) - Sloped powered detector rails break when pushed or pulled by a piston
- [MC-149052](https://bugs.mojang.com/browse/MC-149052) - Stonecutter recipe list doesn’t show item tooltips
- [MC-149776](https://bugs.mojang.com/browse/MC-149776) - Cartography Table requires string for the recipe to show up in the recipe book
- [MC-150020](https://bugs.mojang.com/browse/MC-150020) - Composter is in the “Miscellaneous” category instead of “Decoration” like the other workstation blocks
- [MC-154867](https://bugs.mojang.com/browse/MC-154867) - Tamed cats remain sitting if the world is reloaded while the cat is sitting on a chest
- [MC-158807](https://bugs.mojang.com/browse/MC-158807) - You can remove cursed enchantments on items by repairing them in inventory
- [MC-159300](https://bugs.mojang.com/browse/MC-159300) - Villagers that have been infected by a zombie can despawn, even if they have been traded with
- [MC-159773](https://bugs.mojang.com/browse/MC-159773) - Shulkers can teleport to non-solid faces, and don’t teleport to some solid faces
- [MC-159918](https://bugs.mojang.com/browse/MC-159918) - Foxes don’t run from polar bears
- [MC-159963](https://bugs.mojang.com/browse/MC-159963) - Minecarts can break turtle eggs
- [MC-160897](https://bugs.mojang.com/browse/MC-160897) - Dropping an item using the drop key displays the hand animation but dropping items from within the inventory does not
- [MC-160902](https://bugs.mojang.com/browse/MC-160902) - Arm swings when right-clicking on full minecart
- [MC-161156](https://bugs.mojang.com/browse/MC-161156) - Silverfish and endermites appear black on soul sand
- [MC-161259](https://bugs.mojang.com/browse/MC-161259) - Using the carrot on a stick while riding a pig plays no hand animation
- [MC-162881](https://bugs.mojang.com/browse/MC-162881) - Composter doesn’t display particles when being fed composting items through a hopper
- [MC-163286](https://bugs.mojang.com/browse/MC-163286) - /setblock ~ ~ ~ air destroy does not destroy liquids
- [MC-164184](https://bugs.mojang.com/browse/MC-164184) - Breaking a shulker box with contents in Creative mode drops the block at an incorrect location
- [MC-164948](https://bugs.mojang.com/browse/MC-164948) - Entity shadow renders through transparent blocks
- [MC-167077](https://bugs.mojang.com/browse/MC-167077) - Foxes sleep on top of honey blocks, even in broad daylight
- [MC-167512](https://bugs.mojang.com/browse/MC-167512) - Glass in the hand is rendered differently depending on the “Clouds” setting
- [MC-167989](https://bugs.mojang.com/browse/MC-167989) - Spawn point is not set when monsters are nearby
- [MC-168540](https://bugs.mojang.com/browse/MC-168540) - Threads created by net.minecraft.Util.backgroundExecutor() have misleading names
- [MC-168772](https://bugs.mojang.com/browse/MC-168772) - Experience orbs can crush turtle eggs
- [MC-169679](https://bugs.mojang.com/browse/MC-169679) - Composters do not make sounds when fed by hoppers
- [MC-169692](https://bugs.mojang.com/browse/MC-169692) - Entity shadow floats slightly above the ground
- [MC-169832](https://bugs.mojang.com/browse/MC-169832) - Transparent item models have inconsistent rendering when a glowing entity is present
- [MC-170128](https://bugs.mojang.com/browse/MC-170128) - Cannot build an EntityType without a datafixer due to an IllegalArgumentException

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/9b74998642553efe0e4d1aa079dc737b3e4cdc13/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
