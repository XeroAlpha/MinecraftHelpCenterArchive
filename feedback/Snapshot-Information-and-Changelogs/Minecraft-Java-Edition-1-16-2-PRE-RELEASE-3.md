---
title: Minecraft Java Edition - 1.16.2 PRE-RELEASE 3
date: 2020-08-05T16:27:56Z
updated: 2020-08-06T17:14:20Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360046958592-Minecraft-Java-Edition-1-16-2-PRE-RELEASE-3
---

6 August 2020

**Edit: **We\'ve now released 1.16.2 pre-release 3, fixing some stability issues.

# FIXED BUGS IN 1.16.2 PRE-RELEASE 3

-   MC-105248 - Wet wolves become nearly black in dark areas
-   MC-107529 - Marker:1 Armor Stands render themself and their equipment dark if inside solid blocks
-   MC-167756 - Wolf is rendered too dark when not directly affected by skylight
-   MC-191388 - "No key position_predicate in MapLike" console spam
-   MC-197053 - Pressing F3+D clears the pending lines message, but doesn't clear the pending messages
-   MC-197152 - Ghost Blocks can be generated in some piston setups
-   MC-197218 - Piston arm appears twice during retraction in some mechanisms

5 August 2020

We have now brought out the second pre-release for Minecraft 1.16.2, in which another round of bugs has been squished!

# CHANGES IN 1.16.2 PRE-RELEASE 2

-   Crimson and Warped Roots no longer require shears when mined

# TECHNICAL CHANGES IN 1.16.2 PRE-RELEASE 2

## EXECUTE COMMAND

-   `execute in` now respects dimension scaling

# FIXED BUGS IN 1.16.2 PRE-RELEASE 2

-   MC-69876 - Pistons at Y=1 do not push downwards / at Y=254 do not push upwards
-   MC-124320 - Endermen can pick up and place snowless snowy grass blocks
-   MC-130558 - Item frames cannot be emptied if gamerule doEntityDrops is set to false
-   MC-134084 - If gamerule sendCommandFeedback is disabled, /msg or /tell don't display the message to the sender
-   MC-136553 - Dyes in creative inventory are in reverse order
-   MC-152037 - Powered, activator, and detector rails are deleted when pushed/pulled onto a block they cannot be placed on
-   MC-187357 - Strongholds will not generate in floating_islands or caves preset
-   MC-189736 - "distance" within predicate no longer works
-   MC-190552 - Demo mode resets position and inventory upon launch
-   MC-190859 - floating_islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
-   MC-192136 - Lava damage works differently than in previous versions
-   MC-192236 - Endermen can place blocks on top of item frames on the floor
-   MC-192371 - Paintings in the same block space pop off when chunk loads
-   MC-192845 - Block Event Lag in 1.16 is excessive
-   MC-194217 - Lava sets Nether vegetation on fire despite it being fire resistant
-   MC-194867 - Minecarts come out the wrong side of a Nether portal and lose momentum when coming back to the Overworld
-   MC-194953 - Custom Biomes are not useable in Predicates
-   MC-195803 - Mob kill statistics are formatted in reverse: "N killed you \<mob\> times"
-   MC-195851 - "Hat" layer on helmets detaches from Piglins' heads while bartering
-   MC-196245 - Charged Creeper does not always drop skull if zombie variants are nearby
-   MC-196441 - Stonecutter/Smithing Table recipes are not given after crafting a stack of more than one
-   MC-196469 - F1 hides the nausea green tint
-   MC-196473 - Pufferfish gives Nausea II instead of the maximum of Nausea I
-   MC-196653 - Creating multiple datapack dimensions that reference the same dimension_type string causes "unregistered dimension" crash
-   MC-196743 - Custom/modified biomes don't work in the Overworld

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the \"Installations\" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/d2cae287324631b2b4bfa609dd01c63cd6d4b78d/server.jar)

Report bugs here:

-   Minecraft issue tracker!
