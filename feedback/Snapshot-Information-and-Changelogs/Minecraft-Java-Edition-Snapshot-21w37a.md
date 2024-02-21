---
title: "Minecraft: Java Edition - Snapshot 21w37a"
date: 2021-09-15T16:53:13Z
updated: 2021-09-15T16:54:03Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4409293520269-Minecraft-Java-Edition-Snapshot-21w37a
hash:
  set_contents-set_loot_table: set_contentsset_loot_table
---

Marvellous mountains and colossal caves, this snapshot has it all! Today we're bringing the Overworld revamp to regular snapshots. If you've been playing or checking out the experimental snapshots that we've been releasing, you should be familiar with what you're seeing. If not, you're in for a treat! 

Since we're extending the world height, and there are quite a few under-the-hood changes, we've been keeping an eye on how the game is running, and there are still improvements to be made. However, we would still appreciate it if you would be able to take [this survey](https://aka.ms/MCPerfPoll) so that we can understand how you perceive the performance of this snapshot.

It should also be noted that there is currently no upgrade path for existing worlds in this snapshot. This means that you can only create new worlds in this snapshot, and not play on any of your existing worlds. We're working on this and you should be able to play on your existing worlds in an upcoming snapshot not too far in the future.

All of this said, we hope that you have a great time checking out these new additions. Watch your feet so that you don't fall into a *very *deep hole, and make sure you don't get punted off a mountain by a goat that's just minding its own business.

Happy mining!

# NEW FEATURES IN 21W37A

- Added noise caves and aquifers
- Added Dripstone Caves underground biome
- Added Grove biome
- Added Lofty peaks biome
- Added Lush Caves underground biome
- Added Meadow biome
- Added Snowcapped peaks biome
- Added Snowy slopes biome
- Added Stony peaks biome
- New ore distribution and large ore veins
- Overworld build and generation limits have been expanded

## BLOCKS

- Enchanting Tables now emit a low amount of light
- Using shears on the tip of a Cave Vine, Twisting Vine, Weeping Wine or Kelp now causes it to stop growing

## DRIPSTONE CAVES BIOME

- Contains plenty of Pointed Dripstone and Dripstone Block on the floors and ceilings, and small pools of water
- In some places, you’ll find larger stalagmites, stalactites, and columns built from Dripstone Blocks
- Contains extra copper ore

## GROVE

- Snowy terrain with big spruce trees and powder snow traps. Might want to wear leather boots!
- Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops.
- Spawns wolfs, rabbits, and foxes.

## LARGE ORE VEINS

- Ore veins are large, rare, snake-like underground ore formations
- Copper veins form between y 0 and y 50 and are mixed with Granite
- Iron veins form below y -60 and y -8 and are mixed with Tuff

## LOFTY PEAKS

- Dramatic jagged mountain peaks with snow and stone
- Spawns goats

## LUSH CAVES BIOME

- Moss covers the floors and ceilings
- Spore Blossoms grow from the ceiling and drip particles
- Contains Clay pools with Dripleaf plants growing out of them
- Contains Azalea Bushes and Flowering Azalea Bushes
- The Azalea Tree loves to have its roots in Lush Caves, so if you find an Azalea Tree (either overground or in a cave) you know there is a Lush Cave beneath you
- Cave Vines with Glow Berries grow from the ceiling and light up the caves

## MEADOW BIOME

- Large grassy and flowery biome that tends to generate high up on plateaus or next to large mountain ranges.
- Sometimes contains a lone tall oak or birch tree, often with a bee nest.
- Think Sound of Music!
- Spawns donkeys, rabbits, and sheep.

## MOB SPAWNING

- Monsters now only spawn in places where the light from blocks is 0 (skylight still prevents spawning like before)
- Fixed an issue where players in multiplayer can face more or far fewer enemies than intended, particularly when other players are flying

## NEW ORE DISTRIBUTION

- Changed ore generation to match the new world height, and to add more strategy to mining.
- There is no longer a single y level that is best for all ores, you need to make tradeoffs.
- Iron ore generates below y 72, with a strong bias towards y 16.
- Iron ore also generates above 112, with more iron ore as you go higher.
- Copper ore generates between y 0 and y 96, with a strong bias towards y 48.
- Copper ore generates in larger amounts in the dripstone caves biome.
- Lapis lazuli generates below y 64, with a strong bias towards y 0. However, Lapis below y -32 or above y 32 cannot generate exposed to air. It will either be buried or inside water.
- Coal generates above y 0, with a strong bias towards y 96 and above.
- Coal has reduced air exposure, so you will find more coal buried or underwater than exposed to air.
- Gold generates below y 32, with a strong bias towards y -16.
- Extra gold can (still) be found in badlands biomes.
- Redstone ore generates below y 16. Redstone ore generation gradually increases as you go below y -32 and further down.
- Diamond generates below y 16, with more diamond the lower you go.
- Diamonds have reduced air exposure, so you will find more diamonds buried or underwater than exposed to air.

## NOISE CAVES AND AQUIFERS

- Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes!  
  Noise caves come in three flavors:
  - Cheese caves. Like the holes in swiss cheese. These often form caverns of various size
  - Spaghetti caves. Long squiggly tunnels, sometimes wide like tagliatelle
  - Noodle caves. Thinner, squigglier, and more claustrophobic variant of spaghetti caves
- No, they aren’t loud. The “noise” part of noise caves is a technical term and has nothing to do with sound
- The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems
- As with carvers, when noise caves intersect the surface they form cave entrances
- An aquifer is an area with local water level, independent of sea level.  
  Aquifers are used during world generation to generate bodies of water inside noise caves.  
  This sometimes results in large underground lakes! They can also form inside mountains and on the surface.
- Aquifers below y0 will sometimes be lava aquifers instead of water aquifers
- Magma Blocks sometimes generates at the bottom of underground bodies of water
- Underwater cave carvers and underwater canyons have been removed, since aquifers are used to generate water in caves instead

## OPTIONS

- Added an accessibility option to stop the sky flashing during thunderstorms
- Added an option to specify the audio device used by the game
- Added “Toggle Sprint” and “Toggle Sneak” to the Controls settings
- Moved Keybinds out to their own settings screen, accessible from Controls

## SNOWCAPPED PEAKS

- Smooth mountain peaks with ice and snow
- Spawns goats and yeti. No actually just goats.

## SNOWY SLOPES

- Very snowy terrain that can hide powder snow traps. Might want to wear leather boots!
- Tends to generate on high-altitude terrain beneath mountain peaks or on hilltops.
- Spawns rabbits and goats.

## STONY PEAKS

- Stony mountain peaks that may be jagged or smooth
- Spawns goats
- Contains strips of calcite sometimes

## WORLD GENERATION

- Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks
- Underground features, structures, and caves generate all the way down to y-64
- Exception: Diorite and Granite and Andesite and Dirt don’t generate below y0
- Tweaked size and positioning of Diorite, Andesite & Granite generation
- Dripstone clusters can no longer be found in normal caves, only in dripstone caves biome
- Starting from y0 and below deepslate gradually replaces all stone
- Deepslate blobs no longer generate above y0
- The terrain shape and elevation varies dramatically, independently from biomes. For example, forests and deserts could form up on a hill without needing a special biome just for that
- Less diorite/granite/andesite generates above y 60
- Strips of gravel can generate in stony shores
- Swamp trees can grow in water 2 blocks deep (instead of just 1 block deep)

# CHANGES IN 21W37A

- Illagers (Vindicator, Pillager, Evoker) no longer attack baby villagers
- Axolotls now only spawn in lush caves
- Axolotls now have their own, separate, mob cap
- Raised the cloud level from 128 to 192

# TECHNICAL CHANGES IN 21W37A

- Replaced the clientbound chunk update network packet with another one which additionally contains light update data. A separate light update packet still exists and is sent when a light update happens without chunk update.
- View distance now causes chunks to load cylindrically around players instead of in a square
- Information about the world generation noise is now displayed on the debug screen
- Added illageralt, rune-like font from Minecraft Dungeons (currently only usable via commands)
- Added startup option --jfrProfile and command jfr to start profiling with Java FlightRecorder as well as a few custom events.
- Loot table functions set_contents and set_loot_table now require type field with valid block entity type
- Worlds last saved before Minecraft 1.2 (“pre-anvil”) no longer can be opened directly
- Data pack format has been increased to 8
- New video setting “Priority updates”.
- Removed length limits for scoreboard, score holder and team names
- Mob spawners can now override light checks for spawning

## JFR PROFILING

### CUSTOM EVENTS

- minecraft.ServerTickTime: sampling event exposing average server tick times at one second intervals
- minecraft.ChunkGeneration: time taken to generate individual chunk stages
- minecraft.PacketRead \| minecraft.PacketSent: network traffic
- minecraft.WorldLoadFinishedEvent: initial world loading duration

### ENDING A PROFILING RUN

The run will then be stopped either by:

- shutting down the JVM
- jfr stop in-game command
- jcmd CLI tool

### OVERVIEW

Java Flight Recorder (<https://openjdk.java.net/jeps/328>) is the internal JVM profiling tool bundled with the Java Runtime to analyze performance and runtime characteristics. It’s a useful tool for exposing internal JVM performance metrics as well as custom metrics that can be monitored or analyzed using any stock Java profiler or monitoring agents.

### REPORTS

A summary JSON report is written both to the log file and in the debug folder accompanied by a .jfr recording ready to be analyzed in i.e JMC <https://github.com/openjdk/jmc> or any other profiler tool supporting the format.

### STARTING A PROFILING RUN

A profiling run can be started using any of the following alternatives:

- --jfrProfile startup flag when starting a Minecraft server or client
- jfr start in-game command
- Regular Java CLI tools such as jcmd

## LOOT TABLES

### CHANGED FUNCTIONS

#### SET_CONTENTS, SET_LOOT_TABLE

Added new mandatory field type. This type will be written into BlockEntityTag.id, to make sure this tag can be correctly migrated between versions

## OLD WORLD CONVERSION

- Worlds last saved before Minecraft 1.2 (“pre-anvil”) now require conversion in a previous version of a game to be able to be opened
- Conversion works best in versions 1.6.4 and before - worlds opened for the first time in later versions will have incorrect biome information

## PRIORITY UPDATE SETTING

- This setting determines which chunks sections are updated synchronously during a single frame.
- The most conservative option “nearby” corresponds to the state before the update.
- The new options “by player” and “none” significantly reduce stutters when placing or removing blocks (especially light sources), but can potentially cause rare visually noticeable delays in world updates.

## SPAWNER DATA CHANGES

- Spawners now support the custom_spawn_rules NBT in the SpawnData field and the SpawnPotentials list
- custom_spawn_rules currently may contain fields block_light_limit and sky_light_limit - both are integer ranges with fields min_inclusive and max_inclusive
- To make SpawnPotentials format similar to other weighted lists, structure was changed to {weight: \<int\>, data: \<previous contents without 'Weight', 'Entity' renamed to 'entity'\>}
- To accommodate that change, previous contents of SpawnData were moved to SpawnData.entity (making format of that field same as elements of SpawnPotentials.data)

Example:

``` has-line-data
SpawnData: {
    entity: {
        id: "minecraft:cow"
    },
    custom_spawn_rules: {
          sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
    },
}
SpawnPotentials: [
  {
    data: {
      custom_spawn_rules: {
          block_light_limit: {min_inclusive: 0, max_inclusive: 15}
      },
      entity: {id: "minecraft:pig"},
    },
    weight: 2
  },
  {
    data: {
      custom_spawn_rules: {
          block_light_limit: {min_inclusive: 5, max_inclusive: 10},
          sky_light_limit: {min_inclusive: 10, max_inclusive: 15}
      },
      entity: {id: "minecraft:panda"}
    },
    weight: 1
  }
]
```

# FIXED BUGS IN 21W37A

- [MC-29274](https://bugs.mojang.com/browse/MC-29274) - Withers will not pursue players in survival mode unless attacked
- [MC-30560](https://bugs.mojang.com/browse/MC-30560) - River through Eroded Badlands biome generates floating rock formations at water surface
- [MC-54545](https://bugs.mojang.com/browse/MC-54545) - Client render distance doesn’t adjust to server render distance if they are different, causing faulty chunk loading
- [MC-65628](https://bugs.mojang.com/browse/MC-65628) - Desert pyramids generate underground when using amplified or custom terrain
- [MC-123277](https://bugs.mojang.com/browse/MC-123277) - Too long scoreboard objectives and team names are not detected when commands are parsed
- [MC-129266](https://bugs.mojang.com/browse/MC-129266) - Jagged ocean transitions and slower biome generation
- [MC-138801](https://bugs.mojang.com/browse/MC-138801) - The interactions between a biome and another biome and its variants are inconsistent
- [MC-140690](https://bugs.mojang.com/browse/MC-140690) - Giant Spruce Taiga Hills has no difference with Giant Spruce Taiga
- [MC-159025](https://bugs.mojang.com/browse/MC-159025) - Drowned do not spawn in warm ocean biomes
- [MC-160710](https://bugs.mojang.com/browse/MC-160710) - Chat messages written while sleeping are deleted after waking up
- [MC-166423](https://bugs.mojang.com/browse/MC-166423) - Splash water bottles don’t damage endermen
- [MC-182362](https://bugs.mojang.com/browse/MC-182362) - Score callbacks with a too long name break callback chain
- [MC-202376](https://bugs.mojang.com/browse/MC-202376) - Rabbits, instead of spawning on snow blocks, spawn on snow layers
- [MC-208601](https://bugs.mojang.com/browse/MC-208601) - Axolotls do not avoid danger when pathfinding
- [MC-212113](https://bugs.mojang.com/browse/MC-212113) - Glow Lichen can spawn underwater whilst not in a cave.
- [MC-213779](https://bugs.mojang.com/browse/MC-213779) - FPS drops when looking up in a tall world (4064 blocks)
- [MC-214783](https://bugs.mojang.com/browse/MC-214783) - Oceans generate with stone floors
- [MC-214797](https://bugs.mojang.com/browse/MC-214797) - Pointed dripstone can generate floating at transitions between local water levels
- [MC-214799](https://bugs.mojang.com/browse/MC-214799) - Aquifiers sometimes create air pockets
- [MC-214864](https://bugs.mojang.com/browse/MC-214864) - Hard edges when new caves generate near surface
- [MC-214989](https://bugs.mojang.com/browse/MC-214989) - Isolated floating mineshaft platform
- [MC-215296](https://bugs.mojang.com/browse/MC-215296) - Mineshafts often don’t generate in floating island worlds
- [MC-215876](https://bugs.mojang.com/browse/MC-215876) - Dirt can generate below y=0 from mineshafts
- [MC-216784](https://bugs.mojang.com/browse/MC-216784) - Ruined Portals don’t generate below y=0
- [MC-216952](https://bugs.mojang.com/browse/MC-216952) - Some chunks interrupting with cave systems filled with blocks
- [MC-216967](https://bugs.mojang.com/browse/MC-216967) - Kelp & Seagrass can generate in aquifers
- [MC-217465](https://bugs.mojang.com/browse/MC-217465) - Unnatural shape looking like a chunk border but appears to be completely unrelated to chunk borders
- [MC-217509](https://bugs.mojang.com/browse/MC-217509) - Inefficient generation of aquifers, noise caves and ore veins
- [MC-219774](https://bugs.mojang.com/browse/MC-219774) - Magma blocks generate everywhere underwater in 21w10a
- [MC-219946](https://bugs.mojang.com/browse/MC-219946) - Weird flat sections of terrain
- [MC-221777](https://bugs.mojang.com/browse/MC-221777) - Horses donkeys, mules, llamas, and trader llamas do not follow players holding food
- [MC-221815](https://bugs.mojang.com/browse/MC-221815) - Flat roofs in underwater caves
- [MC-221917](https://bugs.mojang.com/browse/MC-221917) - Dripstone, pointed dripstone, and cave magma generate in oceans
- [MC-222051](https://bugs.mojang.com/browse/MC-222051) - Iron Ore generation was not increased in 21w13a
- [MC-222379](https://bugs.mojang.com/browse/MC-222379) - Magma can spawn under air in underwater caves
- [MC-223044](https://bugs.mojang.com/browse/MC-223044) - Floating Water can generate in ravines
- [MC-223051](https://bugs.mojang.com/browse/MC-223051) - Dripstone can generate in surface lakes
- [MC-223148](https://bugs.mojang.com/browse/MC-223148) - Extended height message goes behind the scrolling bar
- [MC-226184](https://bugs.mojang.com/browse/MC-226184) - Axolotls pathfinding to water can sometimes fall in wide holes
- [MC-227244](https://bugs.mojang.com/browse/MC-227244) - Ore blocks from ore veins float in underwater magma ravines
- [MC-230343](https://bugs.mojang.com/browse/MC-230343) - Parity issue: enchanting tables do not emit a light level of 7
- [MC-231721](https://bugs.mojang.com/browse/MC-231721) - Dinnerbone Animals do not look at food correctly.
- [MC-231863](https://bugs.mojang.com/browse/MC-231863) - Game crashes when trying to access the realms settings

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/de695215d83f1f6ec5a19847f6178b84cfde7a26/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
