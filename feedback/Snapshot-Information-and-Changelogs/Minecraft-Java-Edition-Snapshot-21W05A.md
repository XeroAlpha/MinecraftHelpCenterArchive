---
title: "Minecraft: Java Edition - Snapshot 21W05A"
date: 2021-02-03T18:11:03Z
updated: 2021-02-03T18:11:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360056039212-Minecraft-Java-Edition-Snapshot-21W05A
---

In today's snapshot, we're adding a few new blocks that you, later on, will see in the lush caves! They're perhaps not as lush as Jens' hair, but close enough.

# NEW FEATURES IN 21W05A

- Azalea bushes as well as flowering azaela bushes!
- Added cave vines and glow berries!
- Added drip leaves!
- Added decorative blocks for the upcoming lush caves: hanging roots and rooted dirt!
- Added moss!
- Added spore blossom!

## CAVE VINES AND GLOW BERRIES

- Cave vines grow down from the ceiling, like weeping vines
- When they grow they have a chance of producing glow berries
- Glow berries are a natural light source as well as a food source
- Foxes eat glow berries
- Use glow berries to plant new cave vines
- Bonemealing a cave vine will create glow berries

## DRIPLEAF

- Small dripleaf needs moisture, so it grows on clay or underwater
- Small dripleaf grow into big dripleaf when bonemealed
- Big dripleaf grows taller when bonemealed
- If you stand on a big dripleaf, it will tilt after a while and you will fall off
- You can crouch or jump to prevent a big dripleaf from tilting
- A tilted big drip leaf till tilt up again after a while
- The big dripleaf will break when hit by a projectile
- The wandering trader will sometimes sell small dripleaf plants

## MOSS

- Two new decorative blocks: moss block and moss carpet
- Moss carpet can be crafted from moss blocks

## SPORE BLOSSOM

- A beautiful large flower placed on ceilings
- Particles drip from it

# CHANGES IN 21W05A

- The stonecutter can be used to craft the different copper block variants
- The stages of copper oxidization are now called “Copper Block”, “Exposed Copper Block”, “Weathered Copper Block” and “Oxidized Copper Block” in sequence of least to most oxidized
- Drowned now have a chance of dropping a copper ingot, they no longer drop gold ingots
- Added new sculk sensor events
- Changes to powder snow

## SCULK SENSOR CHANGES

Added the following game events that the Sculk Sensor reacts to, along with corresponding frequency value:

|                                          |                 |
|------------------------------------------|-----------------|
| Vibration Types                          | Frequency Value |
| Minecart Moving, Ring Bell, Block Change | 6               |
| Drinking Finish, Prime Fuse              | 7               |
| Mob Interact                             | 8               |
| Equip, Shear, Ravager Roar               | 9               |
| Entity Place                             | 12              |
| Entity Killed                            | 13              |
| Shulker Close                            | 14              |
| Shulker Open                             | 15              |

- Block Change is for when player or dispenser action has changed a block. Example: cake slice being eaten
- Mob Interact is for specific mob interaction events that cause vibrations
- Prime Fuse is for both TNT and Creepers

## POWDER SNOW CHANGES

- Flaming arrows now get extinguished when they collide with powder snow
- Skeletons now convert to strays when frozen
- Powder snow is now pushable by pistons and sticky pistons
- Foxes can now walk on top of powder snow without falling in

# TECHNICAL CHANGES IN 21W05A

- Improved performance when using many overrides on an item model
- Copper oxidization is now a random tick effect and thus affected by the randomTickSpeed game rule

# FIXED BUGS IN 21W05A

- [MC-9568](https://bugs.mojang.com/browse/MC-9568) - Mobs suffocate / go through blocks when growing up near a solid block
- [MC-130098](https://bugs.mojang.com/browse/MC-130098) - Debug world spawns player at y=2 instead at y=70 where all the blocks are
- [MC-142711](https://bugs.mojang.com/browse/MC-142711) - Baby turtles take damage when pushed against ceiling
- [MC-148432](https://bugs.mojang.com/browse/MC-148432) - Sound spam while in water and lava at the same time
- [MC-149495](https://bugs.mojang.com/browse/MC-149495) - Pufferfish triggers tripwire without colliding with it upon reloading the game
- [MC-152265](https://bugs.mojang.com/browse/MC-152265) - Starting server outputs “unable to resolve BlockEntity for ItemStack” errors
- [MC-153254](https://bugs.mojang.com/browse/MC-153254) - Baby zombies/piglins take damage when pushed against ceiling by bubble columns
- [MC-163673](https://bugs.mojang.com/browse/MC-163673) - Baby husks, piglins, zombies, zombie villagers, and zombified piglins take damage when jumping into a space with a solid block above it
- [MC-186879](https://bugs.mojang.com/browse/MC-186879) - Standing in fire and water spams the extinguish sound
- [MC-191714](https://bugs.mojang.com/browse/MC-191714) - Player is dismounted when standing on farmland while riding a horse/boat while the farmland turns to dirt, causing a desync
- [MC-198432](https://bugs.mojang.com/browse/MC-198432) - Pufferfish phases through blocks after reloading world
- [MC-199356](https://bugs.mojang.com/browse/MC-199356) - chatDelay in options.txt has a space between the colon and the value
- [MC-200906](https://bugs.mojang.com/browse/MC-200906) - Pufferfish hitbox incorrect when reloading world
- [MC-204801](https://bugs.mojang.com/browse/MC-204801) - Large amounts of copper blocks lag the server and causes the worldsave to take forever
- [MC-205079](https://bugs.mojang.com/browse/MC-205079) - Cauldrons don’t fill with powder snow in some biomes
- [MC-205401](https://bugs.mojang.com/browse/MC-205401) - “Fire extinguishes” Sound repeatedly plays when a mob that burns in daylight is in powder snow
- [MC-205477](https://bugs.mojang.com/browse/MC-205477) - Occasional desync when trying to enter/exit a boat while the server is lagging
- [MC-205735](https://bugs.mojang.com/browse/MC-205735) - Baby cows can suffocate on stairs
- [MC-206113](https://bugs.mojang.com/browse/MC-206113) - Powder Snow causes Z-Fighting with Falling Blocks
- [MC-207258](https://bugs.mojang.com/browse/MC-207258) - Sculk sensors do not react to minecarts being driven
- [MC-207261](https://bugs.mojang.com/browse/MC-207261) - Bell ringing event is not considered a vibration
- [MC-207262](https://bugs.mojang.com/browse/MC-207262) - Drinking potions or milk doesn’t cause vibrations even though eating does
- [MC-207263](https://bugs.mojang.com/browse/MC-207263) - Inconsistency: Filling cauldrons with liquids or powder snow is not detected by sculk sensors
- [MC-207277](https://bugs.mojang.com/browse/MC-207277) - Sculk sensor can’t detect setting a fire with fire charge
- [MC-207283](https://bugs.mojang.com/browse/MC-207283) - Extinguishing a campfire is not detected by sculk sensor
- [MC-207300](https://bugs.mojang.com/browse/MC-207300) - Blocks being placed or picked up by an enderman are not detected by sculk sensors
- [MC-207329](https://bugs.mojang.com/browse/MC-207329) - Sculk sensors don’t properly detect eating from other mobs
- [MC-207340](https://bugs.mojang.com/browse/MC-207340) - Sculk sensors do not detect buckets of fish being emptied
- [MC-207358](https://bugs.mojang.com/browse/MC-207358) - Sculk sensors don’t detect shulkers opening and closing
- [MC-207384](https://bugs.mojang.com/browse/MC-207384) - Flame arrows repeatedly trigger sculk sensors
- [MC-207387](https://bugs.mojang.com/browse/MC-207387) - Sculk sensors can sense players sneaking in water when they move, even when they’re not swimming
- [MC-207391](https://bugs.mojang.com/browse/MC-207391) - Sculk sensors don’t detect certain flying mobs
- [MC-207397](https://bugs.mojang.com/browse/MC-207397) - The fire extinguish sound plays every tick when the player is on fire and freezing
- [MC-207407](https://bugs.mojang.com/browse/MC-207407) - Villages will always generate at least on y=0
- [MC-207417](https://bugs.mojang.com/browse/MC-207417) - Directly breaking fire does not alert sculk sensors, but removing its supporting block correctly does
- [MC-207418](https://bugs.mojang.com/browse/MC-207418) - Breaking paintings/item frames/glow item frames does not alert sculk sensors, even though placing them does
- [MC-207445](https://bugs.mojang.com/browse/MC-207445) - Sculk sensor doesn’t detect squids swimming
- [MC-207473](https://bugs.mojang.com/browse/MC-207473) - Sculk sensors do not detect when ghasts shoot
- [MC-207520](https://bugs.mojang.com/browse/MC-207520) - Sculk sensors don’t react to ravager roars
- [MC-207521](https://bugs.mojang.com/browse/MC-207521) - Ocelots and cats can still emit vibrations while sneaking
- [MC-207592](https://bugs.mojang.com/browse/MC-207592) - Shooting bow with flame enchantment while sneaking triggers sculk sensor
- [MC-207600](https://bugs.mojang.com/browse/MC-207600) - Sculk sensor detects wrong sound for fishing rod
- [MC-207670](https://bugs.mojang.com/browse/MC-207670) - Sculk sensors do not detect the placement of boats and minecarts
- [MC-207671](https://bugs.mojang.com/browse/MC-207671) - Sculk sensors do not detect candles being placed into cakes
- [MC-207672](https://bugs.mojang.com/browse/MC-207672) - Sculk sensors do not detect when creepers are set off with flint and steel
- [MC-207673](https://bugs.mojang.com/browse/MC-207673) - Sculk sensors do not detect lighting TNT with flint and steel
- [MC-207674](https://bugs.mojang.com/browse/MC-207674) - Sculk sensors do not detect placing things in flower pots
- [MC-207675](https://bugs.mojang.com/browse/MC-207675) - Sculk sensors do not detect books being placed onto lecterns
- [MC-207677](https://bugs.mojang.com/browse/MC-207677) - Sculk sensors do not detect collecting water with bottles
- [MC-207678](https://bugs.mojang.com/browse/MC-207678) - Sculk sensors do not detect collecting honey bottles
- [MC-207679](https://bugs.mojang.com/browse/MC-207679) - Sculk sensors do not detect the breaking of bee nests and beehives in Creative mode
- [MC-207745](https://bugs.mojang.com/browse/MC-207745) - Sculk sensors do not detect when ender dragons shoot fireballs
- [MC-208193](https://bugs.mojang.com/browse/MC-208193) - Sculk sensors do not detect removing things from flower pots
- [MC-208194](https://bugs.mojang.com/browse/MC-208194) - Sculk sensors do not detect when candle cakes are eaten
- [MC-208477](https://bugs.mojang.com/browse/MC-208477) - Going into a dimension that has height higher than the maximum height crashes the game
- [MC-209361](https://bugs.mojang.com/browse/MC-209361) - Game crashes upon instantly click-replacing the block underneath a bamboo sapling with another bamboo
- [MC-209625](https://bugs.mojang.com/browse/MC-209625) - Baby llamas suffocate when below a solid block while standing on top of a carpet
- [MC-212117](https://bugs.mojang.com/browse/MC-212117) - Placing glow lichen in lava creates waterlogged glow lichen
- [MC-212141](https://bugs.mojang.com/browse/MC-212141) - Shulkers get rotated when upgrading to 21w03a
- [MC-212149](https://bugs.mojang.com/browse/MC-212149) - Shulker is sometimes mis-rotated when player teleports through a nether portal and reloading an active chunk with Shulker
- [MC-212284](https://bugs.mojang.com/browse/MC-212284) - Crammed enitities pushed through blocks when growing to adults
- [MC-212290](https://bugs.mojang.com/browse/MC-212290) - Commands “setblock” and “fill” don’t work at or above height 1024 in some cases
- [MC-212291](https://bugs.mojang.com/browse/MC-212291) - Client can dismount vehicles independently from the server, causing a de-sync
- [MC-212331](https://bugs.mojang.com/browse/MC-212331) - Boats dismount you in the direction the boat is facing instead of the direction of the player
- [MC-212347](https://bugs.mojang.com/browse/MC-212347) - Importing custom world file height is limited to 2047 instead of 2048
- [MC-212422](https://bugs.mojang.com/browse/MC-212422) - Game crashes when generating a world with increased height limit
- [MC-212532](https://bugs.mojang.com/browse/MC-212532) - Shulkers are spawned slightly mis-rotated after a shulker was hit by another shulker’s shulker bullet
- [MC-212537](https://bugs.mojang.com/browse/MC-212537) - Standing near a shulker slightly lifts you when they open
- [MC-212541](https://bugs.mojang.com/browse/MC-212541) - Shulkers are often incorrectly rotated upon generation
- [MC-213512](https://bugs.mojang.com/browse/MC-213512) - Copper blocks are named differently from bedrock edition

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/ff10b6f3bb37799e933ff0c2c300626b78ebfb1d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
