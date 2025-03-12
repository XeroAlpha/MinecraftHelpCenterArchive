---
title: "Minecraft: Java Edition - Snapshot 22w46a"
date: 2022-11-18T08:47:41Z
updated: 2025-03-12T11:12:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/10722895337229-Minecraft-Java-Edition-Snapshot-22w46a
---

We are now releasing snapshot 22w46a for Minecraft 1.19.3 with[playable mob sounds](https://www.minecraft.net/article/playable-mob-sounds-coming-minecraft-1-20)added as an experimental feature, changes to the spawning of Nether mobs, improvements for telemetry data and several technical improvements.

Happy mining!

# NEW EXPERIMENTAL FEATURES IN 22W46A

- Books in Chiseled Bookshelf can be added or removed from any slot by targeting the specific slot

## MOB HEADS ON NOTE BLOCKS INTERACTION

- When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

## PIGLIN MOB HEAD

- Piglins will now drop their heads when killed by a charged Creeper
- Placing the Piglin head on a Noteblock will play one of the Piglin’s ambient sounds
- The Piglin head will flap its ears when powered by redstone, or when worn by a player while walking

# CHANGES IN 22W46A

- In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
  - This is intended to nerf certain portal-based mob farms
  - We welcome feedback on this
- Added new top textures for Block of Bamboo and Block of Stripped Bamboo
- Bamboo Plank texture has been tweaked to match the same tiling pattern as other plank variants

## CREATIVE INVENTORY CHANGES

- Reordered Redstone tab based on feedback
- Added Rails to the Tools & Utilities tab next to Minecarts

# TECHNICAL CHANGES IN 22W46A

- Blocks carried by Endermen now use loot tables to generate drops when killed
- Changes to texture loading and stitching
- Translation files and pack.mcmeta are now including non-ASCII characters (encoded as UTF-8) directly instead of using escape sequences
- Added new Telemetry Events

## TELEMETRY

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with[WorldLoaded](https://www.minecraft.net/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it[here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to [feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

### TELEMETRY TRANSPARENCY

- Added Telemetry Data Collection Screen
  - This screen displays information about the type of data that is sent
  - The level of data sent can be controlled between “Minimal” and “All”
    - “Minimal” sends only the required data
    - “All” sends the required data, as well as optional data
  - The default data level is “Minimal” (only the required data)
- Every telemetry event sent from the client is now logged to disk
  - Old log files are removed after 7 days
  - These can be found under the logs/telemetry directory
    - A shortcut to this directory is available via the “Open My Data” button on the Telemetry Data Collection screen

### REQUIRED TELEMETRY EVENTS

- AddedWorldUnloadedevent
- Removed client Java version from theWorldLoadedevent

#### WORLDLOADED&WORLDUNLOADED

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players.  
The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded&WorldUnloadedare two paired events that calculate how long the world session has lasted (in seconds and ticks).  
Data fromWorldLoadedis sent when a world is launched, and data fromWorldUnloadedis sent when a world is shut down (quitting to title, disconnecting from a server).

### OPTIONAL TELEMETRY EVENTS

- AddedPerformanceMetricsandWorldLoadTimesevents

#### PERFORMANCEMETRICS

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

#### WORLDLOADTIMES

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

### TEXTURE LOADING CHANGES

- Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the “atlas”
  - Individual textures that are stitched onto the atlas are called “sprites”
- To improve loading performance, block and item textures are now loaded before they are processed by block and item models
  - By default, textures not in the textures/item and textures/block directories will no longer be automatically recognized and will fail to load
- Resource packs can now have configuration files, located in theatlases directory, that control which images are included in the atlases

#### ATLAS CONFIGURATION FILES

- New directory atlases is now present for resource packs
- This directory contains JSON entries for configuring atlases:
  - blocks - textures used by block and item models
  - banner_patterns, beds, chests, shield_patterns, shulker_boxes, signs - used to render some special-case models
  - mob_effects - textures used for effect icons in the UI
  - paintings - textures used for paintings
  - particles - textures used for particles (referenced by the textures field in files within the particles directory)
- If multiple packs include those files, they are merged by their order within the pack (same as tags in data packs)
- Inside these files is a JSON object with a single list called sources
  - Every entry in sources runs in during load, in order of definition, adding or removing new files to the texture list; to be later referenced by block models, particles, etc
- Types of sources:
  - directory - lists all files in a directory and its subdirectories, across all namespaces
    - source - directory in pack to be listed (relative to textures directory)
    - prefix - string to be appended to the sprite name when loaded
  - single - adds a single file
    - resource - location of a resource within the pack (relative to textures directory, implied .png extension)
    - sprite - sprite name (optional, defaults to resource)
  - filter - removes sprites matching the given pattern
    - namespace, path - patterns (regular expressions, regex) of ids to be removed (only works for entries already in the list)
      - If omitted, any value will be matched
  - unstitch - copies rectangular regions from other images
    - resource - location of a resource within the pack (relative to textures directory, implied .png extension)
    - divisor_x, divisor_y - used for determining the units used by regions
    - regions - list of regions to copy from the source image
      - sprite - sprite name
      - x, y - coordinates of the top-left corner of the region
      - width, height - size of the region
    - Values such as x are transformed to real image coordinates via dividing by their divisor, and then multiplying by the real image size
- Example: if a pack has a file named assets/test/textures/fancy/iridium.png and source is {"type": "directory", "source": "fancy", "prefix": "custom/"}, the texture will be available in models as test:custom/iridium

## COMMANDS

- New command: fillbiome
- New execute sub-command: execute if\|unless biome

### FILLBIOME

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

fillbiome \<from\> \<to\> \<biome\>

Parameters:

- from: One corner of the area to fill
- to: The other corner of the area to fill
- biome: The biome to set

### EXECUTE

Execute commands can now be conditional on biomes.

Syntax: execute if\|unless biome \<pos\> \<biome\>

# FIXED BUGS IN 22W46A

- [MC-121865](https://bugs.mojang.com/browse/MC-121865) - High potion effect durations being displayed as : is misleading
- [MC-147605](https://bugs.mojang.com/browse/MC-147605) - Text cursors can exist in multiple fields
- [MC-151412](https://bugs.mojang.com/browse/MC-151412) - “Edit Server Info” window does not focus “Server Name” text field automatically
- [MC-187539](https://bugs.mojang.com/browse/MC-187539) - “tick” function tag runs before “load” instead of the other way around
- [MC-205563](https://bugs.mojang.com/browse/MC-205563) - Endermen holding powder snow drop a powder snow bucket when killed
- [MC-209621](https://bugs.mojang.com/browse/MC-209621) - Endermen holding potted plants do not drop the pot nor the plant
- [MC-221722](https://bugs.mojang.com/browse/MC-221722) - Squids use the new texture when using Programmer Art
- [MC-222099](https://bugs.mojang.com/browse/MC-222099) - Endermen holding candle cakes do not drop the candle or the cake upon being killed
- [MC-233042](https://bugs.mojang.com/browse/MC-233042) - Server Address field isn’t focused when Direct Connection menu is opened
- [MC-234029](https://bugs.mojang.com/browse/MC-234029) - You cannot hold any key to rapidly navigate between elements quickly after opening the inventory
- [MC-234161](https://bugs.mojang.com/browse/MC-234161) - You cannot hold the TAB key to navigate between buttons quickly in the “Optimize World” menu
- [MC-234240](https://bugs.mojang.com/browse/MC-234240) - You cannot hold the TAB key to navigate between buttons quickly in the “Superflat Customization” menu
- [MC-234408](https://bugs.mojang.com/browse/MC-234408) - You cannot hold the TAB key to navigate between buttons quickly in the “Reset world” realms menu
- [MC-234409](https://bugs.mojang.com/browse/MC-234409) - You cannot hold any key to rapidly execute the same function in the “World options” realms menu
- [MC-234572](https://bugs.mojang.com/browse/MC-234572) - You cannot hold the TAB key to navigate between buttons quickly in the “Delete Server” menu
- [MC-234621](https://bugs.mojang.com/browse/MC-234621) - You cannot hold the TAB key to navigate between buttons quickly in the “remove player” realms menu
- [MC-234782](https://bugs.mojang.com/browse/MC-234782) - You cannot hold the TAB key to navigate between buttons quickly in the “Close realm” realms menu
- [MC-234846](https://bugs.mojang.com/browse/MC-234846) - You cannot hold the TAB key to navigate between buttons quickly in the “switch world” realms menu
- [MC-234904](https://bugs.mojang.com/browse/MC-234904) - You cannot hold the TAB key to navigate between buttons quickly in the “Data Packs” menu
- [MC-248926](https://bugs.mojang.com/browse/MC-248926) - Setting “spectatorsGenerateChunks” to false and relogging freezes the game on the Loading Terrain screen
- [MC-249059](https://bugs.mojang.com/browse/MC-249059) - Loading terrain screen cannot close before 2 seconds have passed
- [MC-250262](https://bugs.mojang.com/browse/MC-250262) - Players sometimes get stuck on the “Loading terrain…” screen after switching dimensions whilst dead
- [MC-256308](https://bugs.mojang.com/browse/MC-256308) - “limit” selector parameter with “arbitrary” sorting does not stop searching early
- [MC-256472](https://bugs.mojang.com/browse/MC-256472) - Camels aren’t required for the “Two by Two” advancement
- [MC-256509](https://bugs.mojang.com/browse/MC-256509) - Heads and Skulls are placed backwards
- [MC-256510](https://bugs.mojang.com/browse/MC-256510) - Using a glow ink sac on a hanging sign does not grant the advancement “Glow and Behold!”
- [MC-256669](https://bugs.mojang.com/browse/MC-256669) - Crafting recipe for bamboo hanging signs is unlocked by having any stripped log
- [MC-256878](https://bugs.mojang.com/browse/MC-256878) - You cannot hold the TAB key to navigate between buttons quickly in the “Edit draft chat report” menu
- [MC-256882](https://bugs.mojang.com/browse/MC-256882) - Bats fly in the perched position and vertical movement is not smooth
- [MC-256935](https://bugs.mojang.com/browse/MC-256935) - Long player names within the “Select Chat Messages to Report” menu can extend past the scroll bar
- [MC-256993](https://bugs.mojang.com/browse/MC-256993) - End crystal knockback bug
- [MC-257073](https://bugs.mojang.com/browse/MC-257073) - You cannot hold the TAB key to navigate between buttons quickly in the “Experimental Features Warning” menu
- [MC-257105](https://bugs.mojang.com/browse/MC-257105) - The walking animation of frogs and camels doesn’t play when they are moving slowly
- [MC-257113](https://bugs.mojang.com/browse/MC-257113) - Ender dragon, wither, snow golem and iron golem spawn eggs from before 1.13 do not convert properly
- [MC-257114](https://bugs.mojang.com/browse/MC-257114) - Incoherency: A random seed is already generated on the “Create New World” seed text field screen despite the “Leave blank for a random seed” label
- [MC-257188](https://bugs.mojang.com/browse/MC-257188) - You aren’t prompted that your draft reports will be discarded upon disconnecting from worlds by using the “Title Screen” button within the death screen
- [MC-257266](https://bugs.mojang.com/browse/MC-257266) - Entities sink or fall through snow when it accumulates while the “snowAccumulationHeight” gamerule is set to any value greater than 1
- [MC-257329](https://bugs.mojang.com/browse/MC-257329) - Right-hand side tabs in the creative inventory are misaligned
- [MC-257334](https://bugs.mojang.com/browse/MC-257334) - Stacked items do not show creative inventory tab label
- [MC-257354](https://bugs.mojang.com/browse/MC-257354) - Messages sent by the hosts of LAN worlds are now considered unverified and cannot be reported
- [MC-257355](https://bugs.mojang.com/browse/MC-257355) - The “Social Interactions” menu now falsely claims that there are no reportable messages for given players
- [MC-257378](https://bugs.mojang.com/browse/MC-257378) - Villagers and piglins can’t open or close doors
- [MC-257386](https://bugs.mojang.com/browse/MC-257386) - Inventory menu has broken textures with Programmer Art enabled
- [MC-257401](https://bugs.mojang.com/browse/MC-257401) - Frog walk animation speeds up greatly when tempted by food or chasing slimes
- [MC-257410](https://bugs.mojang.com/browse/MC-257410) - “Game Menu” on the pause menu is clickable

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/302ae4acba96e733fdbe144ebe2ba575b2bbf969/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).  If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
