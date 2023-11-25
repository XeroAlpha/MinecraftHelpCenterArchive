---
title: "Minecraft: Java Edition - Snapshot 18W22C"
date: 2018-05-29T16:01:36Z
updated: 2018-09-17T16:27:29Z
categories: Snapshot Information and Changelogs
tags:
  - java
  - snapshot
  - 18W22A
link: https://feedback.minecraft.net/hc/en-us/articles/360004333711-Minecraft-Java-Edition-Snapshot-18W22C
---

# CHANGES IN 18W22C

-   F3 debug overlay now shows the fluid you\'re looking at, separately from blocks
-   Tab completing coordinates will now complete each part separately
-   Bug fixes!

# CHANGES IN 18W22B

-   Performance improvements with animated textures
-   Bark is now rotatable
-   Allow tab-completing usernames in regular chat again
-   All command feedback messages are now translatable

# CHANGES IN 18W22A

-   Fixed a really old bug
-   Blocks on chunk borders should now behave correctly when upgrading a world from 1.12.2
-   Performance improvements
-   Fixed a couple of crashes

## FIXED BUGS IN 18W22C

-   [MC-130483](https://bugs.mojang.com/browse/MC-130483) - Difficulty filling up buckets
-   [MC-130481](https://bugs.mojang.com/browse/MC-130481) - Missing translation string command.context.failed
-   [MC-129625](https://bugs.mojang.com/browse/MC-129625) - Sea grass changes to air pockets when upgrading from 18w16a to 18w20a+
-   [MC-129254](https://bugs.mojang.com/browse/MC-129254) - Game crashes when hovering over an item with unknown block tag(s) in the CanDestroy and CanPlaceOn NBT
-   [MC-128860](https://bugs.mojang.com/browse/MC-128860) - Water source block gets destroyed when water flows on top of it
-   [MC-124833](https://bugs.mojang.com/browse/MC-124833) - Item frames duplicate items when broken by a player in the same tick as a piston
-   [MC-124686](https://bugs.mojang.com/browse/MC-124686) - teleport\'s rotational arguments use sender\'s rotation rather than context\'s rotation
-   [MC-122592](https://bugs.mojang.com/browse/MC-122592) - Coordinate tab-completion doesn\'t complete all 3 axes separately

## FIXED BUGS IN 18W22B

-   [MC-130424](https://bugs.mojang.com/browse/MC-130424) - Stack overflow after opening a 18w21b world in 18w22a
-   [MC-129358](https://bugs.mojang.com/browse/MC-129358) - Flowing water acts like air
-   [MC-128276](https://bugs.mojang.com/browse/MC-128276) - Water is not tinted next to glass
-   [MC-127142](https://bugs.mojang.com/browse/MC-127142) - Failed to create block entity DUMMY (path of location: minecraft:DUMMY)
-   [MC-125862](https://bugs.mojang.com/browse/MC-125862) - Command error messages are hardcoded
-   [MC-124312](https://bugs.mojang.com/browse/MC-124312) - Snow layers on grass blocks don\'t make grass snowy unless manually placed
-   [MC-122626](https://bugs.mojang.com/browse/MC-122626) - Unable to tab-complete player names outside of commands

## FIXED BUGS IN 18W22A

-   [MC-1809](https://bugs.mojang.com/browse/MC-1809) - Some trees generate with leaves too far from logs
-   [MC-121823](https://bugs.mojang.com/browse/MC-121823) - Using \"destroy\" command on containers does not drop stored contents
-   [MC-121900](https://bugs.mojang.com/browse/MC-121900) - Player data output does not show SelectedItem and is invalid in a data path
-   [MC-122153](https://bugs.mojang.com/browse/MC-122153) - /gamemode does not provide success message
-   [MC-122455](https://bugs.mojang.com/browse/MC-122455) - Disappearing Carpets
-   [MC-122787](https://bugs.mojang.com/browse/MC-122787) - Rails placed to the east or south of curved rails break existing connections
-   [MC-123064](https://bugs.mojang.com/browse/MC-123064) - No error message when saving a structure containing uppercase or other invalid characters
-   [MC-124281](https://bugs.mojang.com/browse/MC-124281) - White dot on the creamy horse\'s tail
-   [MC-124357](https://bugs.mojang.com/browse/MC-124357) - Green pixels on iron horse armor
-   [MC-124833](https://bugs.mojang.com/browse/MC-124833) - Item duplication
-   [MC-125745](https://bugs.mojang.com/browse/MC-125745) - Sniper duel advancement can be achieved with trident
-   [MC-125986](https://bugs.mojang.com/browse/MC-125986) - Rails adjacent to chunk borders update if world is loaded in snapshot
-   [MC-126118](https://bugs.mojang.com/browse/MC-126118) - The fish mobs are missing their translation strings
-   [MC-127156](https://bugs.mojang.com/browse/MC-127156) - Ocelots and parrots don\'t spawn naturally
-   [MC-127386](https://bugs.mojang.com/browse/MC-127386) - Right clicking on villager with its spawn egg opens trade menu
-   [MC-128276](https://bugs.mojang.com/browse/MC-128276) - Water is not tinted next to glass
-   [MC-128393](https://bugs.mojang.com/browse/MC-128393) - Conduit connects to iron bars and glass panes
-   [MC-128472](https://bugs.mojang.com/browse/MC-128472) - When swimming, the player can stand up even though there is a block above
-   [MC-128509](https://bugs.mojang.com/browse/MC-128509) - X-axis portals break when upgrading from 1.12.2 when certain blocks are above/near them
-   [MC-128512](https://bugs.mojang.com/browse/MC-128512) - Certain blocks on chunk borders cause many blocks in the same chunk to be updated when upgrading from 1.12.2
-   [MC-129645](https://bugs.mojang.com/browse/MC-129645) - Particles of downwards bubble columns are not centered
-   [MC-129712](https://bugs.mojang.com/browse/MC-129712) - Team Prefix and Suffix reset after restarting world
-   [MC-130015](https://bugs.mojang.com/browse/MC-130015) - Tropical fish bucket contains inconsistent dark pixel
-   [MC-130197](https://bugs.mojang.com/browse/MC-130197) - Over a 1000 dolphins spawning in a range of 100 blocks at a certain height
-   [MC-130242](https://bugs.mojang.com/browse/MC-130242) - Having an id tag in the tag tag of spawn eggs overwrites the spawned entity\'s id

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the \"Launch Options\" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/mc/game/18w22c/server/d66173b86e26e6835e36c63eb2828652186a4698/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
