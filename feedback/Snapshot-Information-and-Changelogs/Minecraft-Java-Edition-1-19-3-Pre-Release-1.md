---
title: "Minecraft: Java Edition - 1.19.3 Pre-Release 1 "
date: 2022-11-22T16:17:12Z
updated: 2025-03-12T11:12:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/10828563145357-Minecraft-Java-Edition-1-19-3-Pre-Release-1
hash:
  technical-changes-in-1.19.3-pre-release-1: technical-changes-in-1193-pre-release-1
  fillbiome-command: fillbiomecommand
  fixed-bugs-in-1.19.3-pre-release-1: fixed-bugs-in-1193-pre-release-1
---

We’re now releasing the first pre-release for Minecraft 1.19.3. This pre-release fixes a few bugs, contains a few tweaks, and it has some technical changes.

If everything goes as expected, we aim to release this version on December 6th.

Happy mining!

# TECHNICAL CHANGES IN 1.19.3 PRE-RELEASE 1

- Added new entity sub-predicate types: axolotl, boat, fox, mushroom, painting, rabbit, horse, llama, villager, parrot, tropical_fish
- fillbiome command now supports a filtered mode
- Player Heads can now contain a note_block_sound field
  - When present, this determines the sound a note block makes when the head is placed on top of it

### NEW ENTITY SUB-PREDICATE TYPES

- Added new entity sub-predicates for some entity types with variants:
- axolotl
  - variant - values: lucy, wild, gold, cyan, blue
- boat
  - Works for boats, chest boats and rafts
  - variant - values: oak, spruce, birch, jungle, acacia, dark_oak, mangrove, bamboo
- fox
  - variant - values: red, snow
- mooshroom
  - variant - values: red, brown
- painting
  - variant - values: see painting_variant registry
- rabbit
  - variant - values: brown, white, black, white_splotched, gold, salt, evil
- horse
  - variant - values: white, creamy, chestnut, brown, black, gray, dark_brown
  - Markings are separate value and not matched
- llama
  - variant - values: creamy, white, brown, gray
- villager
  - variant - values: see villager_type registry
  - Also works for Zombie Villagers
  - Profession and level are separate values and not matched
- parrot
  - variant - values: red_blue, blue, green, yellow_blue, gray
- tropical_fish
  - variant - values: kob, sunstreak, snooper, dasher, brinely, spotty, flopper, stripey, glitter, blockfish, betty, clayfish

## FILLBIOME COMMAND

Now supports a filtered form. New syntax:

fillbiome \<from\> \<to\> \<biome\> \[replace \<filter\>\]

New parameter:

- filter: A biome or biome tag to replace

# FIXED BUGS IN 1.19.3 PRE-RELEASE 1

- [MC-156663](https://bugs.mojang.com/browse/MC-156663) - Villager pathfinding broken in water
- [MC-177596](https://bugs.mojang.com/browse/MC-177596) - Weaponsmith working subtitle is “Grindstone used” instead of “Weaponsmith works”
- [MC-177676](https://bugs.mojang.com/browse/MC-177676) - Armorer working subtitle is “Blast Furnace crackles” instead of “Armorer works”
- [MC-245697](https://bugs.mojang.com/browse/MC-245697) - Certain mobs can’t get out of water that is at least two blocks deep
- [MC-255133](https://bugs.mojang.com/browse/MC-255133) - Extra copper ore generates in deep dark
- [MC-256481](https://bugs.mojang.com/browse/MC-256481) - minecraft.used:minecraft.BOOK_TYPE doesn’t increase when placing books onto chiseled bookshelves
- [MC-256679](https://bugs.mojang.com/browse/MC-256679) - Axolotls commonly hesitate when avoiding danger and occasionally start pathfinding in dangerous directions
- [MC-256883](https://bugs.mojang.com/browse/MC-256883) - Elements within the game menu are now positioned slightly lower than they were in previous versions
- [MC-257341](https://bugs.mojang.com/browse/MC-257341) - Vex texture does not utilize translucency
- [MC-257349](https://bugs.mojang.com/browse/MC-257349) - Vex does not sit in boats and minecarts properly anymore
- [MC-257368](https://bugs.mojang.com/browse/MC-257368) - Not a valid port error in Open to LAN doesn’t show if port is \<1024
- [MC-257373](https://bugs.mojang.com/browse/MC-257373) - The cursor in the port number text box doesn’t blink
- [MC-257374](https://bugs.mojang.com/browse/MC-257374) - The word “number” isn’t capitalized in “Port number”
- [MC-257386](https://bugs.mojang.com/browse/MC-257386) - Inventory menu has broken textures with Programmer Art enabled
- [MC-257506](https://bugs.mojang.com/browse/MC-257506) - Top and bottom texture of chiseled bookshelf rotates depending on placement
- [MC-257525](https://bugs.mojang.com/browse/MC-257525) - Allay movement AI is broken in 22w42a+ causing them to sometimes spin mid-air
- [MC-257617](https://bugs.mojang.com/browse/MC-257617) - You cannot scroll with the mouse wheel on the telemetry screen after clicking the “Open my data” or “Data collection” button
- [MC-257618](https://bugs.mojang.com/browse/MC-257618) - The word “pair” uses the incorrect verb form within the “telemetry.event.world_loaded.description” string
- [MC-257619](https://bugs.mojang.com/browse/MC-257619) - Baby piglins and zombified piglins take damage when they hit their head on a block
- [MC-257625](https://bugs.mojang.com/browse/MC-257625) - Piglin Head placed on noteblock play the piglin angry sound instead of the piglin ambient sound
- [MC-257648](https://bugs.mojang.com/browse/MC-257648) - The fillbiome command can result in flickering biome colors
- [MC-257658](https://bugs.mojang.com/browse/MC-257658) - Sculk sensors are not activated upon taking books from chiseled bookshelves
- [MC-257663](https://bugs.mojang.com/browse/MC-257663) - The “Hide messages” button in the social interactions menu can now no longer be toggled due to it being executed twice upon being pressed

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/046fee78cd174105cb9b958a8459c0405ab19959/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).  If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
