---
title: "Minecraft: Java Edition - Snapshot 21w42a"
date: 2021-10-21T06:59:14Z
updated: 2021-10-21T06:59:18Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4411754678157-Minecraft-Java-Edition-Snapshot-21w42a
---

It\'s time for a musical snapshot! We\'re now introducing new music for Caves & Cliffs: Part II. This time around we have a bunch of new tracks composed by the talented Lena Raine and Kumi Tanioka. These tracks are also available on [Spotify](https://open.spotify.com/album/7yQIrNTf3pBu0FdyAJqTqb?si=CC31NZyIQrOl-MNVCNYYkQ) for you to listen to, and they will soon be available on other services such as Apple Music and YouTube as well. 

This snapshot also includes a few additional tweaks, bug fixes, and performance improvements.

**We still highly recommend backing up your world before loading it in this snapshot.**

# NEW FEATURES IN 21W42A

-   New music has been added to the game
-   Added world autosave indicator for single-player worlds

## MUSIC

-   Added new music by Lena Raine and Kumi Tanioka to the Overworld (when playing in survival mode) and to the main menu
-   Added a new music disc from Lena Raine titled 'Otherside'. This can be found on rare occasions in Stronghold corridor chests or much more rarely in Dungeon chests.

# CHANGES IN 21W42A

-   World spawn selection algorithm has been reworked, now spawns player according to climate parameters
-   World generation tweaks

## WORLD GENERATION

-   Lava springs can generate in mountains and snowy terrain
-   Water springs don't generate higher than y 192, and are slightly less common
-   Badlands gold generates higher up

# TECHNICAL CHANGES IN 21W42A

-   Replaced light and barrier particles with block_marker

## PARTICLES

### BLOCK_MARKER

-   Renders with texture declared in particle slot for model assigned to configured block state
-   Summoned with same syntax as block particle (i.e. block_marker wheat\[age=2\])

# FIXED BUGS IN 21W42A

-   [MC-129912](https://bugs.mojang.com/browse/MC-129912) - Player no longer spawned at highest level at world spawn
-   [MC-132347](https://bugs.mojang.com/browse/MC-132347) - Spawning inside icebergs
-   [MC-214288](https://bugs.mojang.com/browse/MC-214288) - Player does not spawn on the surface of the world when min_y is greater than 0
-   [MC-233771](https://bugs.mojang.com/browse/MC-233771) - Parity issue: Light blocks do not display their light level when shown via a held light block item
-   [MC-236837](https://bugs.mojang.com/browse/MC-236837) - The player can occasionally spawn underground when loading into a new world
-   [MC-238582](https://bugs.mojang.com/browse/MC-238582) - Beaches generate between desert and ocean
-   [MC-238900](https://bugs.mojang.com/browse/MC-238900) - Values of 'Infinity' in noise settings in default worldgen

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/cf518e2c80fdaef443d68d50d1ac23a72a0a7d85/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
