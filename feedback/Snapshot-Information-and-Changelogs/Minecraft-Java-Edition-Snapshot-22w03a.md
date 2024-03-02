---
title: "Minecraft: Java Edition - Snapshot 22w03a"
date: 2022-01-26T14:47:34Z
updated: 2022-01-26T14:47:38Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4423007627405-Minecraft-Java-Edition-Snapshot-22w03a
hash:
  changes-in-22w03a: changes-in22w03a
  technical-changes-in-22w03a: technical-changes-in22w03a
---

Happy New Year!  It's time for the first snapshot of 2022 to hit the shelves. This snapshot series will be leading up to the release of 1.18.2. With this release we aim to address a few issues before moving on and starting with the Wild Update snapshots.

This snapshot contains tweaks to the world seed input and adds a new placefeature command. On top of that, it also fixes a bunch of bugs.

Happy mining!

# CHANGES IN 22W03A

- A seed of the number zero is no longer handled as a special case
- Any spaces before/after an inputted seed will now be trimmed
- Ender chests are no longer gift wrapped around Christmas

# TECHNICAL CHANGES IN 22W03A

- The locate command now uses a namespaced id parameter
- Added command: placefeature

  
placefeature

New command that places a configured feature at a given location. Syntax: placefeature \<id\> \[pos\]

Parameters:

- id: The namespaced id of a configured feature to place
- pos: The position to use as the origin for the feature placement (if omitted, ~ ~ ~ is used)

# FIXED BUGS IN 22W03A

- [MC-83938](https://bugs.mojang.com/browse/MC-83938) - Standing on entities with solid collision boxes (shulkers, boats) kicks you for flying
- [MC-98727](https://bugs.mojang.com/browse/MC-98727) - Server: Entering a boat/minecart/horse while going upwards from jumping causes a kick for flying
- [MC-111082](https://bugs.mojang.com/browse/MC-111082) - Riding a boat with NoGravity on a server without flight enabled causes kick for flying
- [MC-126772](https://bugs.mojang.com/browse/MC-126772) - Underwater fog doesn’t hide edge of chunks correctly at low render distances
- [MC-135989](https://bugs.mojang.com/browse/MC-135989) - Kicked for flying using trident with Riptide enchantment
- [MC-167763](https://bugs.mojang.com/browse/MC-167763) - Blindness does not work underwater for certain graphics cards
- [MC-185545](https://bugs.mojang.com/browse/MC-185545) - Knockback Resistance on players is still affected by chance
- [MC-185695](https://bugs.mojang.com/browse/MC-185695) - Twisting vines don’t reliably protect the player from fall damage
- [MC-205232](https://bugs.mojang.com/browse/MC-205232) - Player can see farther in powder snow with blindness effect
- [MC-223834](https://bugs.mojang.com/browse/MC-223834) - Pointed dripstone can form below some non-full (non-solid) blocks
- [MC-226359](https://bugs.mojang.com/browse/MC-226359) - The Zero-Width Non-Joiner shows as a “ZWNJ” box
- [MC-229313](https://bugs.mojang.com/browse/MC-229313) - Some blocks that negate fall damage don’t reliably protect mobs at certain heights
- [MC-230905](https://bugs.mojang.com/browse/MC-230905) - Sky background is visible on certain reduced fog situations
- [MC-233599](https://bugs.mojang.com/browse/MC-233599) - /spreadplayers command does not allow for negative “under” values
- [MC-235574](https://bugs.mojang.com/browse/MC-235574) - Game crashes when replacing a block with a wall with blockstate up:false
- [MC-236693](https://bugs.mojang.com/browse/MC-236693) - “Done” button in controls submenu is very low
- [MC-237262](https://bugs.mojang.com/browse/MC-237262) - Crash report and tick profiling causes “Failed to find module info for \_” spam to log
- [MC-238114](https://bugs.mojang.com/browse/MC-238114) - Meadow trees can spawn without bee nests
- [MC-238866](https://bugs.mojang.com/browse/MC-238866) - Snow / powder snow can generate underwater
- [MC-239031](https://bugs.mojang.com/browse/MC-239031) - Glitchy chunk rendering persists since 21w41a
- [MC-239436](https://bugs.mojang.com/browse/MC-239436) - Broken culling in very long caves
- [MC-240559](https://bugs.mojang.com/browse/MC-240559) - JFR JSON report’s bytesPerSecond is incorrectly calculated
- [MC-241152](https://bugs.mojang.com/browse/MC-241152) - Powder snow is part of \#goat_spawnable_on block tag / Goats can spawn on powder snow
- [MC-241205](https://bugs.mojang.com/browse/MC-241205) - Sandstone generates 2-5 layers instead of 3-8 layers
- [MC-242010](https://bugs.mojang.com/browse/MC-242010) - Snow Blocks, Powder Snow aren’t a part of \#azalea_root_replaceable / Rooted dirt can’t replace Snow Blocks & Powder Snow
- [MC-242331](https://bugs.mojang.com/browse/MC-242331) - Entities are displayed faster than chunks
- [MC-242543](https://bugs.mojang.com/browse/MC-242543) - Suffocation always uses the entity head center position for predicate and collision box
- [MC-242709](https://bugs.mojang.com/browse/MC-242709) - Pointed dripstone clusters create holes in the ground when generating in aquifers
- [MC-243015](https://bugs.mojang.com/browse/MC-243015) - Falling blocks at chunk generation cause tons of entities and (client-side) lag
- [MC-243196](https://bugs.mojang.com/browse/MC-243196) - Driver view angle resets when another player enters or exits boat
- [MC-243245](https://bugs.mojang.com/browse/MC-243245) - Unable to select “What is Realms?” button using Tab
- [MC-243489](https://bugs.mojang.com/browse/MC-243489) - Console spam: Skipping update for removed player
- [MC-243619](https://bugs.mojang.com/browse/MC-243619) - Raid waves can spawn outside of simulation distance
- [MC-244164](https://bugs.mojang.com/browse/MC-244164) - Upgrade to 1.18 makes chests invisible and empty
- [MC-244174](https://bugs.mojang.com/browse/MC-244174) - Fog effect for void, blindness, water, lava & powder snow is cylindrical
- [MC-245345](https://bugs.mojang.com/browse/MC-245345) - Crash when reloading chunks
- [MC-245347](https://bugs.mojang.com/browse/MC-245347) - Flying with an elytra and colliding with floating flowing water sometimes doesn’t reset fall damage
- [MC-245406](https://bugs.mojang.com/browse/MC-245406) - Memory leak leading to crashes when loading pre-1.18 chunks
- [MC-245416](https://bugs.mojang.com/browse/MC-245416) - Baby turtles suffocate on soul sand
- [MC-246445](https://bugs.mojang.com/browse/MC-246445) - Game crashes when dispenser with shears is used on non-beehive block in \#beehives tag
- [MC-246449](https://bugs.mojang.com/browse/MC-246449) - Game crashes when villager tries to open non-door in \#wooden_doors tag
- [MC-246464](https://bugs.mojang.com/browse/MC-246464) - Game crashes when dispensing a bone meal in a warm ocean and there is a block with no facing block state in \#wall_corals
- [MC-247415](https://bugs.mojang.com/browse/MC-247415) - Game crashes if coral related block tags are empty during coral reef generation

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/686320be073916ae97b1ad78d22627809491dfc2/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
