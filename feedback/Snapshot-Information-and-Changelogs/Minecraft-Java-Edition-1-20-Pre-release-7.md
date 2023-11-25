---
title: "Minecraft: Java Edition - 1.20 Pre-release 7"
date: 2023-05-29T14:50:25Z
updated: 2023-05-29T14:50:29Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/16224502352141-Minecraft-Java-Edition-1-20-Pre-release-7
---

Pre-release 7 for Minecraft 1.20 is now available in the Minecraft Launcher. This pre-release adds validation of symbolic links and fixes a bug.

## CHANGES

To improve safety, the game will now detect symbolic links used inside world directory.For a detailed explanation, check our [help article](https://aka.ms/MinecraftSymLinks).

-   If the target of a symbolic link is not on the user-configured allow-list, the game will not proceed with loading the world
    -   Note: world directory itself can still be linked
-   The list of allowed symbolic link targets is stored in file allowed_symlinks.txt in client or server top directory
-   The file consists of entries (one per line) with following formats allowed:
    -   Lines starting with \# are comments and are ignored
    -   \[type\]pattern, where type can be glob, regex or prefix
        -   prefix matches start of path with given pattern (so for /test paths /test, /test/ and /test/foo.txt would match)
        -   regex matches regular expression against whole path
        -   glob uses OS-specific path matching mechanism (for example \*.txt would usually match files with txt extension)
        -   Note: paths will use OS-specific separators
    -   pattern, which uses default prefix type

# FIXED BUG IN 1.20 PRE-RELEASE 7

-   [MC-257778](https://bugs.mojang.com/browse/MC-257778) - Bamboo Mosaic Slabs and Stairs are not in the #slabs and #stairs block and item tags

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/ed6ddd61aeb1f529ef626fae9bcb0a5f51491f71/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

-   For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you\'re feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
