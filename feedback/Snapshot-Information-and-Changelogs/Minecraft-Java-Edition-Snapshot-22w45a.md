---
title: "Minecraft: Java Edition - Snapshot 22w45a"
date: 2022-11-09T15:14:42Z
updated: 2025-03-12T11:12:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/10505527148173-Minecraft-Java-Edition-Snapshot-22w45a
---

Minecraft Snapshot 22w45a is now out and about. This snapshot introduces the [new default skins](https://www.minecraft.net/article/introducing-new-default-skins) for offline players, bamboo blocks, and a visual refresh for the Vex. On top of that, there’s some additional creative inventory tweaks.

Happy mining!

# NEW FEATURES IN 22W45A

- Added new default skins for offline players
- Added Block of Bamboo and Stripped Block of Bamboo
  - Block of Bamboo can be crafted from 9 Bamboo and can be stripped like other wood logs
  - Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs

# CHANGES IN 22W45A

- The Vex now has a new look
- The Wild update music has been tweaked to be slightly less loud
- When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
  - Blocks that require support cannot be placed on these open faces while the Shulker Box is open
- “Teleport to Team Member” option in spectator menu now only shows up for teams with viable target players
- Added Operator Items Tab option in the Controls menu which is off by default
- Creative Inventory changes

## VEX

- Changes to Vex model and textures
  - The Vex retains a slightly oversized hitbox to make it easier to fight

## CREATIVE INVENTORY CHANGES

- Operator-only items now appear in a new Operator Utilities tab if you have both:
  - Operator Items Tab option in Controls menu set to ON
  - The required operator permissions
  - The tab is hidden if operator permissions are lost while inventory is open
  - Now also includes Structure Blocks and all light levels of Light Blocks
- Added a Colored Blocks tab
  - Contains all blocks with 16 color variants
  - Moved all colored blocks from Building Blocks tab to this tab instead to make that tab less sizeable
- Consumables tab has been renamed to Food & Drinks tab to have a more straightforward name
- Crafting tab has been renamed to Ingredients tab since not all items are used in crafting
- Reordered
  - Natural Blocks
    - More consistency between types for the top section
    - Moved eggs to be between seeds and single-block plants
    - Placed climbable plants above double-block plants
  - Food & Drinks
    - Cooked versions of raw food are now right next to each other
  - Redstone Blocks
    - Less cluttered
    - Higher importance items up the top
    - Removed variants of Doors, Trapdoors, Buttons and Boats that don’t have any functional difference
  - Ingredients
    - Placed Lapis in the same order as ore blocks
- Moved
  - Bottle o’ Experience from the Tools & Utilities tab to the Ingredients tab next to enchanting books
- Added
  - All axes to the Combat tab (they still remain in the Tools & Utilities tab as well)
  - All possible Suspicious Stews to the Consumables tab
    - The tooltip will show the effect of a stew before it’s picked up from the Creative Inventory
    - Only stews with effects available via crafting or Mooshrooms are listed
  - Pressure Plates and Buttons of each type to the Building Blocks tab
  - Almost all lighting blocks to the top of the Functional Blocks tab
  - All 3 flight durations of Fireworks to Tools & Utilities tab, and the Combat tab next to Crossbow
  - Eye of Ender next to End Portal Frame block in Functional tab for better ease of use
- Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
  - Previously this only happened on the search tab

# TECHNICAL CHANGES IN 22W45A

- The /publish command has new arguments to enable commands and set the default gamemode
  - New syntax: /publish \[allowCommands\] \[gamemode\] \[port\]
- Changes to the Open to LAN screen
  - The screen now allows selecting the port on which to host the LAN world
  - The game mode and allow cheats buttons are now initialized with the default values of the world
- The Resource Pack version is now 12

# FIXED BUGS IN 22W45A

- [MC-80032](https://bugs.mojang.com/browse/MC-80032) - Horses can suffocate when going through nether portals
- [MC-118140](https://bugs.mojang.com/browse/MC-118140) - Result map tooltip when zooming out a map shows previous zoom value instead of new one
- [MC-127110](https://bugs.mojang.com/browse/MC-127110) - You can’t empty water buckets into waterlogged blocks
- [MC-177523](https://bugs.mojang.com/browse/MC-177523) - Enderman angry/screaming sound event subtitled identically to idle sound
- [MC-193360](https://bugs.mojang.com/browse/MC-193360) - Inconsistent eye level between piglins or zombified piglins and piglin brutes
- [MC-200000](https://bugs.mojang.com/browse/MC-200000) - Merchant trade select packet (C2S) does not check for negative indices
- [MC-235414](https://bugs.mojang.com/browse/MC-235414) - Player desynchronization with Nether Portals
- [MC-244550](https://bugs.mojang.com/browse/MC-244550) - Empty Tags match Empty Slots in Shaped Recipes
- [MC-255370](https://bugs.mojang.com/browse/MC-255370) - Chat hover & click events are offset if “Line Spacing” chat setting is used
- [MC-255743](https://bugs.mojang.com/browse/MC-255743) - Bees’ path finding system may cause performance issues
- [MC-256461](https://bugs.mojang.com/browse/MC-256461) - Camel’s back of neck is visible during the sit down animation
- [MC-256511](https://bugs.mojang.com/browse/MC-256511) - Non-controlling passengers can make camels dash
- [MC-256516](https://bugs.mojang.com/browse/MC-256516) - Inconsistent textures with jungle hanging signs
- [MC-256532](https://bugs.mojang.com/browse/MC-256532) - Sounds for Bamboo, Crimson and Warped hanging signs use the generic wood sound
- [MC-256616](https://bugs.mojang.com/browse/MC-256616) - Weighted pressure plates make incorrect sounds
- [MC-256674](https://bugs.mojang.com/browse/MC-256674) - FileAlreadyExistsException if the resourcepacks directory is a symbolic link
- [MC-256765](https://bugs.mojang.com/browse/MC-256765) - References to chat reporting in singleplayer
- [MC-256854](https://bugs.mojang.com/browse/MC-256854) - Error in any model file causes resource reload fail now
- [MC-256884](https://bugs.mojang.com/browse/MC-256884) - Mobs don’t shoot correctly from crossbows
- [MC-256885](https://bugs.mojang.com/browse/MC-256885) - The word “messages” within the “gui.chatSelection.fold” string is always pluralized
- [MC-256888](https://bugs.mojang.com/browse/MC-256888) - New network protocols prevent logging into offline servers
- [MC-256903](https://bugs.mojang.com/browse/MC-256903) - Lodestone compass’s enchantment glint is scaled incorrectly
- [MC-256917](https://bugs.mojang.com/browse/MC-256917) - Death message from explosions by TNT and TNT minecarts that are not the cause of a player or another mob has changed
- [MC-256951](https://bugs.mojang.com/browse/MC-256951) - TNT Minecarts don’t record what caused its explosion
- [MC-256961](https://bugs.mojang.com/browse/MC-256961) - Multishot shoots projectiles backwards
- [MC-256990](https://bugs.mojang.com/browse/MC-256990) - Superflat Worlds can use Disabled Blocks as part of their layers
- [MC-257102](https://bugs.mojang.com/browse/MC-257102) - Missing Structure Block in creative tab
- [MC-257104](https://bugs.mojang.com/browse/MC-257104) - “Lava” in gamerule.lavaSourceConversion is misspelled as “Lave”
- [MC-257118](https://bugs.mojang.com/browse/MC-257118) - Buttons are placed different than pressure plates in Creative Inventory
- [MC-257234](https://bugs.mojang.com/browse/MC-257234) - Applying bone meal to warped or crimson fungus crashes client on multiplayer

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/d98f05500b14a8884b85e71be9fa1ef0d261029a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).  If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
