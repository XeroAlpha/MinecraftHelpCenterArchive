---
title: "Minecraft: Java Edition - Snapshot 21w20a"
date: 2021-05-19T16:44:22Z
updated: 2025-03-12T11:13:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360061471771-Minecraft-Java-Edition-Snapshot-21w20a
hash:
  changes-to-the-caves-cliffs-preview: changes-to-the-caves--cliffs-preview
---

Another snapshot is now going out. This time around, we fixed quite a few bugs, and we also introduced some changes to some Caves & Cliffs features, and additionally, we added some extra context for the narrator..

# CHANGES IN 21W20A

- Actually made Geodes rarer this time
- GUI narration now includes position and usage of hovered or focused element
- Tilling Rooted Dirt with a Hoe will now convert it into Dirt, and pop out a Hanging Roots item
- Axolotls will now only play dead when in water
- Llamas no longer spit at players in peaceful mode

# CHANGES TO THE CAVES & CLIFFS PREVIEW

Download the [updated datapack](https://launcher.mojang.com/v1/objects/233aa01c6db99ffcf95594e384e72671ae279ced/CavesAndCliffsPreview.zip).

# TECHNICAL CHANGES IN 21W20A

- Added a new NBT tag for entities - “HasVisualFire” – which will cause any entity with this flag to visually appear on fire, even if they are not actually on fire

# FIXED BUGS IN 21W20A

- [MC-610](https://bugs.mojang.com/browse/MC-610) - Grass / Flowers / Snow are placed incorrectly in newly created chunks
- [MC-102220](https://bugs.mojang.com/browse/MC-102220) - Barrier Blocks are not shown when “Show Invisible Blocks” is selected in Save Structure Blocks
- [MC-149777](https://bugs.mojang.com/browse/MC-149777) - Crash when loading world: java.util.ConcurrentModificationException when using Java 11 or above
- [MC-172304](https://bugs.mojang.com/browse/MC-172304) - Piglins, piglin brutes, hoglins, zoglins and axolotls can attack their own teammates
- [MC-189535](https://bugs.mojang.com/browse/MC-189535) - Catching a fish in a bucket on creative mode doesn’t give player new bucket
- [MC-191338](https://bugs.mojang.com/browse/MC-191338) - Name color for Minecart with Command Block is incorrect
- [MC-192591](https://bugs.mojang.com/browse/MC-192591) - Name color for Structure Void is incorrect
- [MC-198200](https://bugs.mojang.com/browse/MC-198200) - Crash when leaving out processors in a template pool: java.lang.IllegalArgumentException: bound must be positive
- [MC-203712](https://bugs.mojang.com/browse/MC-203712) - Amethyst Geodes cause floating water/lava to generate when intersecting water/lava caves/pools
- [MC-203867](https://bugs.mojang.com/browse/MC-203867) - Amethyst geodes can overwrite bedrock
- [MC-204393](https://bugs.mojang.com/browse/MC-204393) - Lava Cauldron emits redstone signal strength 1 instead of 3
- [MC-204902](https://bugs.mojang.com/browse/MC-204902) - Dirt paths are no longer compatible with the programmer art resource pack
- [MC-205104](https://bugs.mojang.com/browse/MC-205104) - Rideable mobs are not affected by powder snow’s freezing effect while being ridden
- [MC-205120](https://bugs.mojang.com/browse/MC-205120) - Freezing hearts aren’t displayed properly in Programmer Art resource pack
- [MC-205250](https://bugs.mojang.com/browse/MC-205250) - Amethyst geodes can generate in a stronghold and can potentially destroy the end portal frames
- [MC-205680](https://bugs.mojang.com/browse/MC-205680) - minecraft:location_check predicate floating point imprecision
- [MC-206107](https://bugs.mojang.com/browse/MC-206107) - Parrots sitting on shoulders do not freeze in powder snow
- [MC-206131](https://bugs.mojang.com/browse/MC-206131) - Amethyst blocks are transparent / don’t conduct Redstone
- [MC-206601](https://bugs.mojang.com/browse/MC-206601) - Potion particles are showing when looking through spyglass
- [MC-206839](https://bugs.mojang.com/browse/MC-206839) - Pointed dripstones cause extreme durability damage to helmets
- [MC-207324](https://bugs.mojang.com/browse/MC-207324) - Mobs and particles sometimes don’t fully render behind stained or tinted glass
- [MC-207366](https://bugs.mojang.com/browse/MC-207366) - Trying to modify the world height of a world after it’s already been generated gives a null pointer exception
- [MC-208586](https://bugs.mojang.com/browse/MC-208586) - Axolotls get stuck and spin constantly on top of lily pads
- [MC-208589](https://bugs.mojang.com/browse/MC-208589) - Axolotls have a swimming animation (move their body up- and downwards) when on land
- [MC-208601](https://bugs.mojang.com/browse/MC-208601) - Axolotls do not avoid lava when pathfinding
- [MC-208617](https://bugs.mojang.com/browse/MC-208617) - Axolotls sometimes twitch rapidly when adjusting their rotation
- [MC-208641](https://bugs.mojang.com/browse/MC-208641) - Axolotl movement glitch on stairs
- [MC-208649](https://bugs.mojang.com/browse/MC-208649) - Breeding axolotl with a bucket of tropical gives back a bucket instead of a water bucket
- [MC-208654](https://bugs.mojang.com/browse/MC-208654) - Collecting an axolotl with a water bucket in creative mode replaces the original bucket
- [MC-208675](https://bugs.mojang.com/browse/MC-208675) - Axolotls sometimes use walking animation when in shallow water
- [MC-208682](https://bugs.mojang.com/browse/MC-208682) - Axolotls frequently get stuck inside of waterlogged blocks
- [MC-208691](https://bugs.mojang.com/browse/MC-208691) - Axolotls play dead even when they take damage without being attacked by an entity
- [MC-208735](https://bugs.mojang.com/browse/MC-208735) - Axolotls attempt to pathfind towards unreachable water, then start spinning, eventually drying out and dying
- [MC-209324](https://bugs.mojang.com/browse/MC-209324) - Pointed Dripstone can be broken with tridents in spawn protection
- [MC-212125](https://bugs.mojang.com/browse/MC-212125) - Only one glow lichen drops when using shears on multiple in a single block space
- [MC-212531](https://bugs.mojang.com/browse/MC-212531) - Shulkers can rotate their heads up and down
- [MC-212931](https://bugs.mojang.com/browse/MC-212931) - Fire extinguishing sound doesn’t play when mobs are extinguished with rain/water
- [MC-214041](https://bugs.mojang.com/browse/MC-214041) - Mob can’t properly or difficult walk on big dripleaf, when the big dripleaf is 4 blocks or more from the ground
- [MC-214909](https://bugs.mojang.com/browse/MC-214909) - Top half of a small dripleaf can turn into a ghost block when placing it in water while the water is being removed
- [MC-215665](https://bugs.mojang.com/browse/MC-215665) - Amethyst Geodes can overlap with dungeons
- [MC-216214](https://bugs.mojang.com/browse/MC-216214) - netherrack_replace_blobs with water as target crashes the game
- [MC-216980](https://bugs.mojang.com/browse/MC-216980) - Comma splices in two source strings (EN_US)
- [MC-217113](https://bugs.mojang.com/browse/MC-217113) - Foxes spawned inside of powder snow sleeps
- [MC-217608](https://bugs.mojang.com/browse/MC-217608) - The big dripleaf texture is not vertically centered
- [MC-217742](https://bugs.mojang.com/browse/MC-217742) - Campfires and TNT can be lit by players using arrows shot from flame bows in spawn protection
- [MC-219856](https://bugs.mojang.com/browse/MC-219856) - F3 + L isn’t sorted alphabetically in the debug screen
- [MC-219870](https://bugs.mojang.com/browse/MC-219870) - The Mojang loading screen upon start up flashes black
- [MC-220063](https://bugs.mojang.com/browse/MC-220063) - Sweet berries and glow berries sound events are named extremely differently
- [MC-220128](https://bugs.mojang.com/browse/MC-220128) - Parity Issue: Rooted dirt won’t turn into the dirt and drop roots item after tilling with hoe in Java
- [MC-220694](https://bugs.mojang.com/browse/MC-220694) - Name color for knowledge book is incorrect
- [MC-220867](https://bugs.mojang.com/browse/MC-220867) - Fossils can generate through bedrock
- [MC-221566](https://bugs.mojang.com/browse/MC-221566) - Name color for light is incorrect
- [MC-221694](https://bugs.mojang.com/browse/MC-221694) - Strays do not spawn in powder snow
- [MC-221833](https://bugs.mojang.com/browse/MC-221833) - Light blocks are not shown within structure block bounds with Show Invisible Blocks on
- [MC-221863](https://bugs.mojang.com/browse/MC-221863) - Powder Snow can be broken by players on fire in spawn protection
- [MC-221984](https://bugs.mojang.com/browse/MC-221984) - Collecting an axolotl in a bucket and then placing it resets its kill cooldown
- [MC-222002](https://bugs.mojang.com/browse/MC-222002) - Light item displays the wrong level number
- [MC-222116](https://bugs.mojang.com/browse/MC-222116) - Splash water bottles doesn’t extinguish candle cakes
- [MC-222797](https://bugs.mojang.com/browse/MC-222797) - Axolotl can be bred with just tropical fish items, not just bucket ones
- [MC-223322](https://bugs.mojang.com/browse/MC-223322) - Chorus flowers can be broken with projectiles in spawn protection
- [MC-223372](https://bugs.mojang.com/browse/MC-223372) - You can decrease the level of a water or powder snow cauldron, through the use of an entity on fire in spawn protection
- [MC-224320](https://bugs.mojang.com/browse/MC-224320) - minecraft.used:minecraft.potion doesn’t increase when filling a partially filled cauldron with a water bottle
- [MC-224322](https://bugs.mojang.com/browse/MC-224322) - Powder snow can create ghost blocks in creative mode
- [MC-224480](https://bugs.mojang.com/browse/MC-224480) - Powder snow doesn’t melt into water in cauldrons
- [MC-224482](https://bugs.mojang.com/browse/MC-224482) - Superflat presets no longer generate with decorations
- [MC-225078](https://bugs.mojang.com/browse/MC-225078) - Upgrading from 1.12.2 and below will cause items to lose enchantments
- [MC-225253](https://bugs.mojang.com/browse/MC-225253) - Dying in a nether portal softlocks the player on the “You Died!” menu
- [MC-225347](https://bugs.mojang.com/browse/MC-225347) - cave_vines_plant isn’t in \#bee_growables
- [MC-225352](https://bugs.mojang.com/browse/MC-225352) - Geodes have not been made “significantly rarer”
- [MC-225360](https://bugs.mojang.com/browse/MC-225360) - Cannot resolve SRV records: unknown host

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/d0a9151432af384f5f2ca72e8e43422772158d0e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
