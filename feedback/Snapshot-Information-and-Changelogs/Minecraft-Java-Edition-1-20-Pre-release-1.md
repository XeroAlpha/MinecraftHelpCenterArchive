---
title: "Minecraft: Java Edition - 1.20 Pre-release 1"
date: 2023-05-10T14:15:29Z
updated: 2023-05-10T14:15:33Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15649443624973-Minecraft-Java-Edition-1-20-Pre-release-1
---

It is now time for the first Pre-release for Minecraft 1.20: The Trails and Tales update!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

# CHANGES

- Colored Wool, Carpets and Beds can now be dyed to any other color

# TECHNICAL CHANGES

- Added new damage types: outside_border and generic_kill
- Random sequences for loot tables are now deterministic
- Changes in server.properties encoding
- string data sources for the data command now accept negative boundaries, which are interpreted as index counted from the end of the string

## DAMAGE TYPES

- Players outside the world border are now hurt by the damage type outside_border instead of in_wall
- Forcibly removing an entity using i.e. the /kill command now uses damage type generic_kill instead of out_of_world

## LOOT TABLE RANDOM SEQUENCES

The game now uses named random sequences to deterministically produce loot for loot tables. Each random sequence produces a unique sequence based on the world seed and sequence ID, which means a loot table will produce the same results when ran with the same parameters in the same world.

The ID of the random sequence to use for a loot table is specified in a new field called random_sequence.

## SERVER.PROPERTIES

- File is now read in UTF-8 initially, with previous encoding (ISO 8859-1/Latin 1) as a fallback
- File is now written with UTF-8 encoding

# FIXED BUGS IN 1.20 PRE-RELEASE 1

- [MC-180](https://bugs.mojang.com/browse/MC-180) - When reaching the other side of a nether portal the animation plays forever until stepped out of
- [MC-2215](https://bugs.mojang.com/browse/MC-2215) - Encoding errors in server.properties
- [MC-18060](https://bugs.mojang.com/browse/MC-18060) - Several realms strings are untranslatable
- [MC-35078](https://bugs.mojang.com/browse/MC-35078) - Breaking animation is one frame off
- [MC-123081](https://bugs.mojang.com/browse/MC-123081) - Placing an end crystal when entering The End prevents Ender Dragon from spawning
- [MC-146582](https://bugs.mojang.com/browse/MC-146582) - When entering spectator mode while standing on the ground, the player moves down by 0.19051 blocks, which makes you fall down
- [MC-195781](https://bugs.mojang.com/browse/MC-195781) - The "Include entities:" string displayed within the structure block GUI is improperly capitalized
- [MC-195825](https://bugs.mojang.com/browse/MC-195825) - "datapacks" string is inconsistent with "data pack" string in "datapackFailure.title" text
- [MC-198202](https://bugs.mojang.com/browse/MC-198202) - Options background texture does not match dirt texture
- [MC-203039](https://bugs.mojang.com/browse/MC-203039) - Incorrect use of colon in options.hideMatchedNames.tooltip
- [MC-206548](https://bugs.mojang.com/browse/MC-206548) - Leash knot subtitles are not properly capitalized
- [MC-226454](https://bugs.mojang.com/browse/MC-226454) - The "Light as a Rabbit" advancement description has no space after the ellipsis
- [MC-236606](https://bugs.mojang.com/browse/MC-236606) - Lightning bolt related string lacks capitalization
- [MC-241736](https://bugs.mojang.com/browse/MC-241736) - Company names are still inconsistent and partly misspelled in the credits
- [MC-250571](https://bugs.mojang.com/browse/MC-250571) - Gamerule description strings within the world creation menu consist of inconsistent concluding punctuation
- [MC-256424](https://bugs.mojang.com/browse/MC-256424) - Game mode is sometimes referred to as "gamemode"
- [MC-257336](https://bugs.mojang.com/browse/MC-257336) - Some chiseled bookshelf interaction subtitles are improperly capitalized
- [MC-262006](https://bugs.mojang.com/browse/MC-262006) - Melon and Pumpkin are in the default '#maintains_farmland' tag despite not maintain farmland
- [MC-262208](https://bugs.mojang.com/browse/MC-262208) - In the credits, "Lionbridge" is misspelt in one place (no "g")
- [MC-262253](https://bugs.mojang.com/browse/MC-262253) - Music composers not listed in credits
- [MC-262265](https://bugs.mojang.com/browse/MC-262265) - Changing resource pack that overrides a font crashes JVM
- [MC-262296](https://bugs.mojang.com/browse/MC-262296) - Rabbits are no longer affected by jump boost
- [MC-262300](https://bugs.mojang.com/browse/MC-262300) - Menu text is now rendered in front of the Mojang Studios loading screen fade animation
- [MC-262304](https://bugs.mojang.com/browse/MC-262304) - The stepping_on predicate condition does not correctly succeed on trapdoors
- [MC-262308](https://bugs.mojang.com/browse/MC-262308) - Entities do not stick to honey blocks pushed by pistons if their center isn't over the honey block
- [MC-262313](https://bugs.mojang.com/browse/MC-262313) - Nether won't load in upgraded worlds
- [MC-262317](https://bugs.mojang.com/browse/MC-262317) - Items don't respect properties of the block they are supported on
- [MC-262351](https://bugs.mojang.com/browse/MC-262351) - Worldgen deadlock caused by supporting block checks
- [MC-262363](https://bugs.mojang.com/browse/MC-262363) - Player can still gain a normal jump off of a honey block with precise timing
- [MC-262424](https://bugs.mojang.com/browse/MC-262424) - Sprinting particles on the edges of blocks are still incorrect

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/95ac4bf3d2f4ae57687493f5232d3f58334b85d2/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
