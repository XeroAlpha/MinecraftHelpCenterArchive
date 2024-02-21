---
title: "Minecraft: Java Edition Snapshot - 23w43a"
date: 2023-10-25T15:09:28Z
updated: 2023-10-25T15:09:32Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20707371679117-Minecraft-Java-Edition-Snapshot-23w43a
hash:
  h_01HDKP3HB8TK7GX1GW86GQZ9RD: experimental-features
  h_01HDKP3HB8SKQPGWX2ZZWPB173: copper-family
  h_01HDKP3HB89BM9M9HQKXW81QH5: chiseled-copper
  h_01HDKP3HB8YSEPYHQF3BYQ5W3D: copper-grate
  h_01HDKP3HB88PYBPS75VA3RG25J: copper-bulb
  h_01HDKP3HB84S7HBW1ZSASWA8P4: copper-doors-and-trapdoors
  h_01HDKP3HB8YWZY65TA93V44EDR: tuff-family
  h_01HDKP3HB8KGVPND0ZX8T3GHKX: changes
  h_01HDKP3HB8ZJ55W2DK8PCTNXCM: bat
  h_01HDKP3HB84JAEJACFB6WW1SD3: technical-changes
  h_01HDKP3HB9G780HPC67M38H4RD: data-pack-version-22
  h_01HDKP3HB9ZXN5MMMXQGHDR4AA: tickcommand
  h_01HDKP3HB9VS63K1DCPGXQTW6Y: jigsaw-selection--placement-priority
  h_01HDKP3HB9EP3CAVGGP7EYEYPE: resource-pack-version-20
  h_01HDKP3HB9KZ7VGBKZ2PQCMAQ4: fixed-bugs-in-snapshot-23w43a
  h_01HDKP3HB90DWX72AM9M1MN50T: get-the-snapshot
---

In this week's snapshot we're extending the Update 1.21 experiment with ALL the new blocks! And how about a bat makeover just in time for spooky fall? Happy crafting!

## EXPERIMENTAL FEATURES

### COPPER FAMILY

- The Copper family of blocks has been expanded, including:
  - Chiseled Copper
  - Copper Grate
  - Copper Bulb
  - Copper Door
  - Copper Trapdoor
  - Oxidized and waxed variants of all of the above

#### CHISELED COPPER

- Crafted with 2 Cut Copper Slabs of a shared oxidation level
- Can be crafted in the Stonecutter

#### COPPER GRATE

- A new type of decorative block unique to the Copper family
- Crafted with 4 Copper Blocks of a shared oxidation level
  - Can be crafted in the Stonecutter
- Properties:
  - Transparent and allows light to pass through
  - Mobs cannot suffocate inside them
  - Cannot conduct redstone
  - Hostile mobs cannot naturally spawn on them

#### COPPER BULB

- A light-emitting block that can toggle its light emission through redstone pulses
- Oxidizes like other Copper blocks, and emits less light the more oxidized they are
  - Copper Bulb: Light level 15
  - Exposed Copper Bulb: Light level 12
  - Weathered Copper Bulb: Light level 8
  - Oxidized Copper Bulb: Light level 4
- When placed, its light is off by default
  - While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a redstone pulse
  - Copper Bulb light will stay on even when the redstone source is removed until it receives another redstone pulse to toggle it off
- A redstone crystal will glow in the center of Copper Bulbs while it is powered by a redstone signal
- Comparators will read a signal strength of 15 if the Copper Bulb's light is on
- Does not conduct redstone power
- Can craft 4 Copper Bulbs with:
  - 3 Copper Blocks of a shared oxidation level
  - 1 Blaze Rod
  - 1 Redstone Dust

#### COPPER DOORS AND TRAPDOORS

- Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
- Works like wooden doors in that they can be opened and closed with interaction as well as redstone
- Crafted with Copper Blocks of a shared oxidation level

### TUFF FAMILY

- Tuff has been expanded to have its own family of blocks, including:
  - Stair, Slab, Wall and Chiseled variants
  - Tuff Bricks with Stair, Slab, Wall and Chiseled variants
  - Polished Tuff with Stair, Slab and Wall variants
- All Tuff variants can be crafted in the Stonecutter

## CHANGES

- The Bat now has a new look
- Thrown Ender Pearls produce a teleportation sound on impact
- Small tweaks to the Telemetry Data Collection screen

### BAT

- The Bat has an updated model, animations and texture

## TECHNICAL CHANGES

- The Data Pack version is now 22
- The Resource Pack version is now 20

## DATA PACK VERSION 22

- Added tick command
- Added two new input fields for Selection Priority and Placement Priority in the Jigsaw block edit screen
- Added item to minecraft:arrow and minecraft:spectral_arrow, this is the item that will be picked up
- Renamed Trident to item in minecraft:trident

### TICK COMMAND

Added a new tick command. This is an adminstative and debugging command that allowsto control the ticking flow and measure the performance of the game.The command requires elevated permissions (admins and above) and so it is not by default available in command blocks and datapacks.

Syntax:

tick query - outputs the current target ticking rate, with information about the tick times performance.

tick rate \<rate\> - sets a custom target ticking rate to the specified value. The value must be greater than 1.0and lower than 10000.0. Setting a very low tick rate can cause the game to feel unresponsive andsetting too high tick rate for your system can causethe game to crash as the game now assumes, it is constantly falling behind the ticking target. Please use tick queryor \<F3\> + 2 (Integrated server only) debug screen to measure the performance of the game and adjust the tick rate accordingly.Setting a tick target lower than the default 20.0 will also cause the players to be simulatedat a lower rate (including player movement and input controls), whilesetting a higher tick rate will cause the players to be simulated at the default rate of 20 ticks per second to maintainthe expected responsiveness of the game, but can cause artifacts in entities interpolation.

tick freeze - freezes all gameplay elements, except for players and any entity a player is riding.This is useful for debugging and isolating issues with the game allowing the player to move around freely and inspect the world.

tick step \<time\> - Only works when the game is frozen. It runs the game for the specified number of ticks and then freezes the game again.This allows to step through the game a set amount of ticks at a time.

tick step stop - stops the current stepping process, and re-freezes the game.

tick unfreeze - unfreezes the game and resumes all gameplay elements.

tick sprint \<time\> - runs the game while ignoring the set ticking target rate (meaning that the game will runas fast as possible) for the specified number of ticks. At the end of the sprint, the game will resumethe previous ticking target and display performance information about the tick times while sprinting. Thisis especially useful for testing gameplay elements that are time dependent, such as redstone contraptions,or mob behaviour in isolated environments that allow for much faster simulation.

tick sprint stop - stops the current tick sprint, and resumes the previous ticking target.

### JIGSAW SELECTION & PLACEMENT PRIORITY

- Selection Priority
  - When the parent piece is being processed for connections, this controls the order in which this Jigsaw block attempts to connect to its target piece
  - Jigsaws will be processed in descending priority order and randomly within the same priority
- Placement Priority
  - When this Jigsaw block connects to a piece, this is the order in which that piece is processed for connections in the wider structure
  - Pieces will be processed in descending priority order with the default insertion order breaking ties within the same priority
- This functionality has been added to support the ability for Jigsaw structures to generate branches in a depth-first order, as well as give finer control over ordering of connections
- All existing Jigsaw blocks will default their Selection and Placement Priority to 0, resulting in the same behaviour as before these two configurable values were introduced

## RESOURCE PACK VERSION 20

- bat.png has been updated for the new Bat model
- Added block models, items models and block state definitions for the following blocks:
  - chiseled_copper, exposed_chiseled_copper, weathered_chiseled_copper, oxidized_chiseled_copper
  - copper_grate, expxosed_copper_grate, weathered_copper_grate, oxidized_copper_grate
  - copper_bulb, exposed_copper_bulb, weathered_copper_bulb, oxidized_copper_bulb
  - copper_door, exposed_copper_door, weathered_copper_door, oxidized_copper_door
  - copper_trapdoor, exposed_copper_trapdoor, weathered_copper_trapdoor, oxidized_copper_trapdoor
  - tuff_stairs
  - tuff_slab
  - tuff_wall
  - chiseled_tuff
  - polished_tuff
  - polished_tuff_stairs
  - polished_tuff_slab
  - polished_tuff_wall
  - tuff_bricks
  - tuff_brick_stairs
  - tuff_brick_slab
  - tuff_brick_wall
  - chiseled_tuff_bricks
- Added unique sprites for the following blocks:
  - chiseled_copper, exposed_chiseled_copper, weathered_chiseled_copper, oxidized_chiseled_copper
  - copper_grate, expxosed_copper_grate, weathered_copper_grate, oxidized_copper_grate
  - copper_bulb, exposed_copper_bulb, weathered_copper_bulb, oxidized_copper_bulb
  - copper_door, exposed_copper_door, weathered_copper_door, oxidized_copper_door
  - copper_trapdoor, exposed_copper_trapdoor, weathered_copper_trapdoor, oxidized_copper_trapdoor
  - chiseled_tuff
  - polished_tuff
  - tuff_bricks
  - chiseled_tuff_bricks

## FIXED BUGS IN SNAPSHOT 23W43A

- [MC-1981](https://bugs.mojang.com/browse/MC-1981) - All arrow types lose their name/NBT data when shot and picked up
- [MC-257786](https://bugs.mojang.com/browse/MC-257786) - The game takes a long time to process players leaving realms groups or accepting or declining realms invitations
- [MC-263263](https://bugs.mojang.com/browse/MC-263263) - The operator buttons intersect the scroll bar within the realms player menu
- [MC-263272](https://bugs.mojang.com/browse/MC-263272) - You cannot click on an area to set a value within the spawn protection slider in the realms world options menu
- [MC-263309](https://bugs.mojang.com/browse/MC-263309) - You can configure your realm before it has been created by using the TAB key
- [MC-265872](https://bugs.mojang.com/browse/MC-265872) - The word "available" is misspelled as "availible" within the "recover_world.no_fallback" string
- [MC-265874](https://bugs.mojang.com/browse/MC-265874) - Right-clicking and keyboard input can disable or enable slots in the crafter
- [MC-265880](https://bugs.mojang.com/browse/MC-265880) - The subtitle for Crafters crafting something uses inconsistent tense
- [MC-265884](https://bugs.mojang.com/browse/MC-265884) - The word "occurred" is misspelled as "occured" within the "recover_world.message" string
- [MC-265885](https://bugs.mojang.com/browse/MC-265885) - Extra space in the word "cannot" in selectWorld.incompatible.description
- [MC-265886](https://bugs.mojang.com/browse/MC-265886) - The built-in update_1_21 pack contains duplicate files from the vanilla pack
- [MC-265891](https://bugs.mojang.com/browse/MC-265891) - Placing items into the crafter output slot deletes them
- [MC-265896](https://bugs.mojang.com/browse/MC-265896) - Additional lines appear on the crafter's face when it crafts
- [MC-265899](https://bugs.mojang.com/browse/MC-265899) - The translation for "gamerule.commandModificationBlockLimit" is in title case instead of sentence case
- [MC-265901](https://bugs.mojang.com/browse/MC-265901) - Comparator sometimes doesn't update when crafting with the Crafter
- [MC-265938](https://bugs.mojang.com/browse/MC-265938) - Elements within the list in the "Changes From Last Backup" realms menu cannot be selected via the mouse cursor
- [MC-265939](https://bugs.mojang.com/browse/MC-265939) - The "No pending invites!" text within the realms invitation menu cannot be narrated or selected
- [MC-265961](https://bugs.mojang.com/browse/MC-265961) - Inconsistent pixels near light on the crafter's side

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/135f89e56c2d83d9ef0f7915f0cdf1047737d51a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
