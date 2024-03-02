---
title: "Minecraft: Java Edition - Snapshot 21w10a"
date: 2021-03-10T16:07:04Z
updated: 2021-03-10T16:07:11Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360057761252-Minecraft-Java-Edition-Snapshot-21w10a
---

A truly fabulous snapshot enters the arena! This snapshot brings fundamental changes to our rendering pipeline with the introduction of the *brand new *tech that is OpenGL Core 3.2. On top of that, we're finally introducing the Lush Caves biome. However, as with the Dripstone Caves, this is only available through creating a custom world. 

There's an important note about this snapshot for those of you with older computers: With the introduction of OpenGL Core 3.2 there is a chance Minecraft Java will no longer run on computers that do not meet the [minimum system requirements](https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-). Computers that meet the [minimum system requirements](https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements-) should not be affected.

# NEW FEATURES IN 21W10A

- Added Lush Caves underground biome!
- Added Cracked Deepslate Bricks and Cracked Deepslate Tiles
- There is now an Infested variant of Deepslate found in the underground
- While they will not generate in the world by default, Deepslate versions of copper, emerald and coal ores have been added for use by creators of maps and data packs

## LUSH CAVES BIOME

The Lush Caves underground biome now exists for use in single-biome worlds. It does not yet generate in other world types.

- Moss covers the floors and ceilings
- Spore Blossoms grow from the ceiling and drip particles
- Contains clay pools with Dripleaf Plants grow out of them
- Contains Azalea Bushes and Flowering Azalea Bushes
- The Azalea Tree loves to have its roots in lush caves, so if you find an Azalea Tree (either overground or in a cave) you know there is a Lush Cave beneath you
- Cave Vines with Glow Berries grow from the ceiling and light up the caves

# CHANGES IN 21W10A

- Cobbled Deepslate can now be smelted into Deepslate
- Deepslate can now be placed along any axis
- Lightning rods can now be waterlogged
- Fossils in the deepest part of the underground generate with Deepslate Diamond Ore instead of Coal Ore
- The textures of Deepslate and some of the ores have been updated

[Click here](https://images.ctfassets.net/8y6ykjruobr4/2cKsLkWbJHaWH6auiL8Ebt/9b8925bba9b31f5819c28238df893605/snapshot-21w10a-texture-comparison-full-resolution.jpg) for a full resolution image of changes to ore textures in snapshot 21w10a.

## ORE DISTRIBUTION

Overworld ore generation has been tweaked.

- More emeralds in mountains
- More lapis
- Less copper, gold, and Redstone
- Smaller diamond blobs, but slightly more frequent. Less diamond ore overall though
- Less iron, and it generates lower down
- Reduced air exposure for coal

[Click here](https://images.ctfassets.net/8y6ykjruobr4/7kyVKZjkFUcQG46EalT9eS/cd2fc4a3c2970264b2fed82907a6da76/snapshot-21w10a-ore-distribution-full.jpg) for a full resolution image of changes to ore distribution changes in snapshot 21w10a. 

# TECHNICAL CHANGES IN 21W10A

- The game now runs using OpenGL 3.2 core profile
- The maximum size that slimes can be summoned with is now 128
- The give command can only give up to 100 stacks of items at a time (e.g. 6400 stone or 100 iron swords)

## OPENGL

Rendering is now using OpenGL 3.2 core profile. All fixed function rendering has been replaced with shader based rendering.

### SHADERS

Shaders are now included for all supported render states. Any shader except for the blit shader can also be replaced in resource packs. For now replacing these shaders is not officially supported and the way it works may change in the future.

The current rendering engine uses a system similar to the post processing shader pipeline. There are some differences between both system that cater to the slightly different requirements.  
  

# FIXED BUGS IN 21W10A

- [MC-29318](https://bugs.mojang.com/browse/MC-29318) - Client misses inventory updates while player is manipulating items - causes invisible items
- [MC-84121](https://bugs.mojang.com/browse/MC-84121) - Shape of glow effect is based on mob’s base layer
- [MC-87019](https://bugs.mojang.com/browse/MC-87019) - Only visible slots are updated clientside when you are inside an inventory
- [MC-154094](https://bugs.mojang.com/browse/MC-154094) - Lectern running /clear turns items into ghost items
- [MC-175964](https://bugs.mojang.com/browse/MC-175964) - Setblock command run by book in lectern to clear inventory run in command block causes ghost items
- [MC-201316](https://bugs.mojang.com/browse/MC-201316) - The /give command can create so many items that the game will freeze
- [MC-207818](https://bugs.mojang.com/browse/MC-207818) - Placing a sign from the offhand closes the sign UI immediately
- [MC-208301](https://bugs.mojang.com/browse/MC-208301) - /clear does not properly affect the item on the mouse pointer after crafting it
- [MC-210408](https://bugs.mojang.com/browse/MC-210408) - /spawnpoint allows players to set their spawnpoint to out-of-bounds coordinates, which crashes the game when trying to respawn
- [MC-211666](https://bugs.mojang.com/browse/MC-211666) - Guardians attack invisible axolotls
- [MC-212127](https://bugs.mojang.com/browse/MC-212127) - Normal ink sac and glow ink sac are not grouped in the creative inventory
- [MC-212144](https://bugs.mojang.com/browse/MC-212144) - Subtitles refer to Glow Item Frame as “Item Frame”
- [MC-212168](https://bugs.mojang.com/browse/MC-212168) - Ctrl + Pick Block doesn’t copy block state “lit”
- [MC-212236](https://bugs.mojang.com/browse/MC-212236) - Cannot visually critical-hit a glow squid (No sound/particles)
- [MC-212314](https://bugs.mojang.com/browse/MC-212314) - Glow squid remains dark even if there is a light source block next to it
- [MC-212325](https://bugs.mojang.com/browse/MC-212325) - Glow Squid entity data (potion effects, custom name, …) does not get saved
- [MC-214629](https://bugs.mojang.com/browse/MC-214629) - FOV decreases when underwater regardless of FOV Effects accessibility setting
- [MC-214781](https://bugs.mojang.com/browse/MC-214781) - Lava does not generate at the very bottom of noise caves
- [MC-214784](https://bugs.mojang.com/browse/MC-214784) - Fossils can generate floating in caves
- [MC-214836](https://bugs.mojang.com/browse/MC-214836) - Water caves cause land to be excessively flooded
- [MC-214844](https://bugs.mojang.com/browse/MC-214844) - Bedrock can be exposed to the air at the very bottom of the new caves
- [MC-214970](https://bugs.mojang.com/browse/MC-214970) - Phantoms continously make too much flapping sounds
- [MC-215194](https://bugs.mojang.com/browse/MC-215194) - Structure blocks do not work below y=0
- [MC-215838](https://bugs.mojang.com/browse/MC-215838) - There is currently no way to craft deepslate tiles and deepslate bricks
- [MC-215850](https://bugs.mojang.com/browse/MC-215850) - Deepslate Tile Wall comes before Deepslate Brick Wall but Deepslate Bricks come before Deepslate Tiles in creative inventory
- [MC-215939](https://bugs.mojang.com/browse/MC-215939) - Emerald ore spawns in lower frequencies than it should above y=100
- [MC-216136](https://bugs.mojang.com/browse/MC-216136) - Polished deepslate slab isn’t grouped with the other deepslate slabs in creative inventory
- [MC-216363](https://bugs.mojang.com/browse/MC-216363) - Crash upon replacing soul sand or magma with the other under a tall bubble column using /setblock
- [MC-216735](https://bugs.mojang.com/browse/MC-216735) - Stone Lapis Ore generating in Deepslate
- [MC-216736](https://bugs.mojang.com/browse/MC-216736) - Lava lakes generate exposed in caves
- [MC-216765](https://bugs.mojang.com/browse/MC-216765) - Coal ore can generate below Y=0 when attached to a fossil
- [MC-216817](https://bugs.mojang.com/browse/MC-216817) - Inconsistency: Cobbled deepslate cannot be smelted back into deepslate
- [MC-218139](https://bugs.mojang.com/browse/MC-218139) - Spectator vision bug

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/5998d2c7c15fea04b2541efdcbec4c8cfe5df2a6/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
