---
title: "Minecraft: Java Edition - Snapshot 18W16A"
date: 2018-05-23T09:12:03Z
updated: 2018-05-23T18:35:08Z
categories: Snapshot Information and Changelogs
tags:
  - beta
  - java
  - 18W16A
link: https://feedback.minecraft.net/hc/en-us/articles/360004167171-Minecraft-Java-Edition-Snapshot-18W16A
---

We're very close to feature complete, and have now started focusing more on bug fixing & polishing!  
  
**Changes in 18W16A**

- New custom world type: Buffet
- Coral fans now generate naturally
- Drowned can sometimes be found inside ruins
- Turtle helmet will no longer give you particle effects
- Turtle helmet will no longer make you absolutely completely 100% invulnerable
- Blue ice is now ever-so-slightly less slippery than before. Still pretty slippery!
- When water spreads and would later turn into a source block, it now immediately just places a source block
- We changed how we calculate the temperature of ocean biomes, which should result in nicer transitions between oceans
- Mining coral blocks now requires silk touch
- Changed particle effect from the Conduit
- Optimized spawn position finding code
- Technical: there's now a distinction between scheduled ""liquid ticks"" and ""block ticks""
- Technical: there's new block & item tags for coral
- Lots of bug fixes!

  
**Buffet Worlds**  
  
All you can pick!

- As a popular request, we readded a way to play with single biome worlds
- You can check it out when creating a new world by selecting Buffet World as a world type
- As a side bonus, we also threw in another way to generate chunks in there
- Keep an eye on this screen, there might be more things on their way!
- (it's pretty crazy)

  
**Fixed Bugs in 18W16A**  
  

- MC-18903 - Villagers'/ Witchs' right arm doesn't have the texture flipped. (Like zombies/giants/players/zombie pigmen/zombie villagers/Illagers' does.)
- MC-83064 - Accumulated fall damage is not reset when levitation starts
- MC-90591 - Camera instantaneously changes position when elytra is deployed, rather than smoothly
- MC-125251 - Strong Turtle Master potion makes players invincible
- MC-125280 - Bubble columns seem to be pushable by pistons
- MC-125297 - Force-waterlogged blocks don't spread water
- MC-125329 - Sprinting underwater while flying in creative makes player start swimming
- MC-125356 - Turtle Shell potion effect particles are very intrusive
- MC-125460 - Can only pick-block the top part of kelp and can't pick-block 2 block tall sea grass
- MC-125647 - Air time is not clamped at 300 ticks, causing 11th bubble to appear depending on overflow air time
- MC-125671 - Swimming animation can be triggered while on horse
- MC-125770 - Bubble columns are not created when pouring water over magma block
- MC-125895 - Being in bubble column regions makes user drown when touching underwater ceiling
- MC-126086 - Salmon and tropical fish hitbox on land is wrongly positioned
- MC-126104 - Dispenser will not place or use the cod / salmon / puffer fish / tropical fish bucket
- MC-126139 - The fins of dying cod and some tropical fish show z-fighting
- MC-126167 - Puffer fish, salmon, cod, and tropical fish spawn eggs are in incorrect positions in creative inventory
- MC-126304 - Water buckets can catch dying fish
- MC-126485 - Magma block/soulsand does not generate bubbles and currents with only one block of water above
- MC-126923 - Water turning to ice deletes other block occupying same space as water
- MC-126930 - Sponges do not soak up flowing water
- MC-126978 - Sponge is working with lava
- MC-127045 - Duplicating fish is possible with a waterlogged block
- MC-127079 - Lava on top of water doesn't turn water into stone
- MC-127366 - Turtle Shell Water Breathing effect begins counting down as soon as feet touch the water.
- MC-127998 - You cannot place Sea Pickles on top of non solid blocks
- MC-128205 - Drowned drop tridents from both loot table and held items
- MC-128233 - Lava is tinted incorrectly
- MC-128248 - Bottom of the water is not tinted

  
**Get the Snapshot**  
  
To install the snapshot, open up the Minecraft Launcher and enable snapshots in the ""Launch Options"" tab.  
  
**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**  
  
Cross-platform server jar:

- Minecraft server jar

Report bugs here:

- Minecraft issue tracker!
