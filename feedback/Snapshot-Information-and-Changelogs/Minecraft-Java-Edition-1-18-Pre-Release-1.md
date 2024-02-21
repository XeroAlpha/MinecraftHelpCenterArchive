---
title: "Minecraft: Java Edition - 1.18 Pre-Release 1 "
date: 2021-11-11T17:09:56Z
updated: 2021-11-11T17:10:02Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4413339550733-Minecraft-Java-Edition-1-18-Pre-Release-1
hash:
  changes-in-1.18-pre-release-1: changes-in-118-pre-release-1
  technical-changes-in-1.18-pre-release-1: technical-changes-in-118-pre-release-1
  fixed-bugs-in-1.18-pre-release-1: fixed-bugs-in-118-pre-release-1
---

The first 1.18 pre-release is here!  
  
From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

That being said, this pre-release introduces biome blending, which means that you should no longer find harsh borders between new and old terrain. On top of that, we've also reintroduced the Amplified and Large Biome world types.

Happy mining!

# CHANGES IN 1.18 PRE-RELEASE 1

- Amplified and Large biome worlds have been adapted to the new terrain and are now once again available in the Create World screen
- Removed world types “Caves” and “Floating islands” from the world creation screen
- The transition between new and old terrain is less “cliffy”
  - Will surface height blend? Yes
  - Will biomes blend? Yes
  - Will caves blend? Your mileage may vary

# TECHNICAL CHANGES IN 1.18 PRE-RELEASE 1

- --report option in data generator now creates full worldgen reference files instead of just biomes

# FIXED BUGS IN 1.18 PRE-RELEASE 1

- [MC-46584](https://bugs.mojang.com/browse/MC-46584) - Clicking and dragging MOUSE3 (Mouse wheel) over item slots incorrectly attempts to place full stacks in survival
- [MC-53444](https://bugs.mojang.com/browse/MC-53444) - You can get outside of the worldborder by mounting a rideable entity (boat, pig, etc.) outside of it
- [MC-54119](https://bugs.mojang.com/browse/MC-54119) - Can place/take water/lava/lilypads outside worldborder and inside spawn protection
- [MC-62550](https://bugs.mojang.com/browse/MC-62550) - Worldborder not correctly initialized for the End and Nether
- [MC-96535](https://bugs.mojang.com/browse/MC-96535) - Ambient property of potion effects with ShowParticles:0b is not disregarded
- [MC-113425](https://bugs.mojang.com/browse/MC-113425) - Player can interact with entities outside the worldborder
- [MC-117800](https://bugs.mojang.com/browse/MC-117800) - Half bed can be placed outside the worldborder
- [MC-121997](https://bugs.mojang.com/browse/MC-121997) - Every dimension’s world border is operating independently, and doesn’t appear where it actually is
- [MC-131808](https://bugs.mojang.com/browse/MC-131808) - Forests don’t spawn trees near the positive edges, but overstretch bounds on the negative edges
- [MC-136523](https://bugs.mojang.com/browse/MC-136523) - Invisible world border in the end dimension
- [MC-187174](https://bugs.mojang.com/browse/MC-187174) - Worldborder does not take nether coordinates into account
- [MC-206660](https://bugs.mojang.com/browse/MC-206660) - Stalactites don’t fall properly if there are blocks directly below it
- [MC-215139](https://bugs.mojang.com/browse/MC-215139) - Some water in caves will not start flowing
- [MC-219035](https://bugs.mojang.com/browse/MC-219035) - Fossil structures can’t generate in far east and south blocks of a chunk
- [MC-222388](https://bugs.mojang.com/browse/MC-222388) - Acacia trees under y=0 often grow with bare branches
- [MC-229013](https://bugs.mojang.com/browse/MC-229013) - Lava lake decorator config is unused
- [MC-229517](https://bugs.mojang.com/browse/MC-229517) - Conversion sounds for strays & drowned is controlled by Friendly Creatures mixer, not Hostile Creatures
- [MC-231666](https://bugs.mojang.com/browse/MC-231666) - Dragon egg can teleport to outside the world border
- [MC-236610](https://bugs.mojang.com/browse/MC-236610) - Lava lakes generate without stone around
- [MC-236628](https://bugs.mojang.com/browse/MC-236628) - Lava pools cause sand to fall now instead of putting sandstone beneath it
- [MC-236652](https://bugs.mojang.com/browse/MC-236652) - Weather can sometimes be incorrect within a biome
- [MC-236803](https://bugs.mojang.com/browse/MC-236803) - Extremely low amount of pillager spawns in outpost on jagged peaks, groves, snowy slopes & frozen peaks
- [MC-237040](https://bugs.mojang.com/browse/MC-237040) - Falling blocks still sometimes disappear for a moment when landing
- [MC-237598](https://bugs.mojang.com/browse/MC-237598) - Projectiles glitch around in the air when exiting simulation distance
- [MC-237621](https://bugs.mojang.com/browse/MC-237621) - Missing biome definitions in some peak grid cells causes unintended ocean placement
- [MC-237791](https://bugs.mojang.com/browse/MC-237791) - Villager spawn eggs used on grove, frozen peaks, snowy slopes and jagged peaks don’t spawn snowy plains villagers
- [MC-237954](https://bugs.mojang.com/browse/MC-237954) - The “Sound of Music” and “Feels like home” advancements are internally located in the incorrect tab folder
- [MC-238038](https://bugs.mojang.com/browse/MC-238038) - Newly added advancements’ namespace IDs do not match their translation keys
- [MC-238972](https://bugs.mojang.com/browse/MC-238972) - Deserts generate with little or no sandstone
- [MC-239714](https://bugs.mojang.com/browse/MC-239714) - Doing /locate desert_pryamid in a desert superflat world freezes the world
- [MC-239851](https://bugs.mojang.com/browse/MC-239851) - Upgrading old worlds causes leaves to change to surface builder blocks
- [MC-239852](https://bugs.mojang.com/browse/MC-239852) - Lava pools intersecting strongholds can cause end portal frames to be deleted
- [MC-240021](https://bugs.mojang.com/browse/MC-240021) - Cullface arguments in cauldrons are excessive
- [MC-240481](https://bugs.mojang.com/browse/MC-240481) - Deepslate doesn’t generate in the new cave generation under old chunks
- [MC-240482](https://bugs.mojang.com/browse/MC-240482) - There is no bedrock in the overworld in old chunks
- [MC-240495](https://bugs.mojang.com/browse/MC-240495) - Deepslate does not generate below Y=0 in Badlands or Wooded Badlands Biomes
- [MC-240503](https://bugs.mojang.com/browse/MC-240503) - Bedrock doesn\`t generate in Badlands or Wooded Badlands
- [MC-240516](https://bugs.mojang.com/browse/MC-240516) - Noise cave carvers don’t generate below old chunks
- [MC-240531](https://bugs.mojang.com/browse/MC-240531) - Block simulation distance is always 8 chunks regardless of the slider’s value
- [MC-240534](https://bugs.mojang.com/browse/MC-240534) - Clicking a JFR link copies full server-side path to clipboard
- [MC-240631](https://bugs.mojang.com/browse/MC-240631) - Extremely slow End terrain generation
- [MC-240998](https://bugs.mojang.com/browse/MC-240998) - Portals no longer load chunks as non entity processing

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/1c01e11c62ef7ce9b91324b570a1252d07544f18/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
