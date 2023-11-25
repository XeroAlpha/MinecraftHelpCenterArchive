---
title: "Minecraft: Java Edition - Snapshot 23w14a"
date: 2023-04-05T14:36:31Z
updated: 2023-04-05T14:36:34Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/14594878948237-Minecraft-Java-Edition-Snapshot-23w14a
---

We are now releasing Snapshot 23w14a, containing changes to Sculk blocks and Enchanting Tables, a new Quick Play functionality, an updated logo for Java Edition, a new main menu panorama, and lots of bug fixes!

Happy mining!

# CHANGES

-   Changes to Sculk blocks
-   Replaceable blocks no longer block the connection between Enchanting Tables and Bookshelves
-   In the Desert Temple, the new room has more of its roof collapsed and one block of Suspicious Sand is always visible in the top layer
-   Updated the Minecraft: Java Edition logo
-   The main menu background is now a Trails & Tales panorama

## SCULK SHRIEKER

-   Waterlogging them will now silence their shriek sounds
-   Added to the Redstone Blocks tab in the creative menu

## SCULK SENSOR

-   For both normal and calibrated Sculk Sensors, the following changes have been made:
    -   Default redstone output has been modified to be more reliable for distance calculations
    -   Now strongly powers the block they are placed on

## CALIBRATED SCULK SENSOR

-   Has an active cooldown of 1 second instead of 2 seconds
-   Detects vibrations up to 16 blocks away instead of 8 blocks
-   Accepts signals into the calibration input side more consistently with other Redstone components
    -   For example, signals can now be received through a block

# TECHNICAL CHANGES

-   Signs with click commands can now be interacted with even if the Sign is not waxed
    -   Signs with non-text chat components can no longer be edited
-   Added new loot table function called reference
-   Added support for Quick Play
-   Removed the server & port arguments as their functionality has been replaced by Quick Play
-   Changes to tags
-   The resource pack version is now 14
    -   Updated the sprite layout of minecraft.png
    -   Removed the overriding minecraft.png from the Programmer Art resource pack
    -   Updated the sprite layout of invite_icon.png

## LOOT TABLES

### REFERENCE

New function reference allows functions to call sub-functions (similar to reference condition).Fields:

-   name - location of function to call

## QUICK PLAY

-   Added support for four new command line arguments that allow the game to be launched directly into a world
-   quickPlayPath takes a specified path for logging (relative to the run directory)
    -   If a path is provided the following will be logged upon joining a world:
        -   type: is either singleplayer, multiplayer, or realms
        -   identifier: represents the world you want to join
            -   For singleplayer, the folder name of the world
            -   For multiplayer, the IP address of the server
            -   For realms, the Realms ID
        -   port: represents the server port and is only logged for multiplayer
        -   name: The name of the world
        -   gamemode: The gamemode of the world
        -   lastPlayedTime: The time you joined the world
    -   Example:
        -   \--quickPlayPath \"quickPlay/log.json\" will resolve into .minecraft/quickPlay/log.json
-   quickPlaySingleplayer, quickPlayMultiplayer and quickPlayRealms all take their respective identifier
    -   If one of these arguments is provided, the game will try to launch directly into the given world
    -   Examples:
        -   \--quickPlaySingleplayer \"New World\"
        -   \--quickPlayMultiplayer \"localhost:25565\"
        -   \--quickPlayRealms \"1234\"

## TAGS

-   Added replaceable_by_trees, to better express blocks that are replaced when the tree grows through them
-   Removed replaceable_plants since it was only used as a subset of the blocks for the tag above, and not as universally
-   Added sword_efficient, to represent blocks that are broken slightly faster by a sword than normal

# FIXED BUGS IN 23W14A

-   [MC-2474](https://bugs.mojang.com/browse/MC-2474) - Transparent blocks placed between bookshelves and enchanting tables negate bonuses received from bookshelves
-   [MC-138358](https://bugs.mojang.com/browse/MC-138358) - Levers on top of item frames Z-fighting with blocks in item frames
-   [MC-155084](https://bugs.mojang.com/browse/MC-155084) - Horses\' armor, reins, and bridles experience z-fighting
-   [MC-165773](https://bugs.mojang.com/browse/MC-165773) - /execute run does not cause syntax error when arguments are missing
-   [MC-176309](https://bugs.mojang.com/browse/MC-176309) - Illusioner has a few misplaced pixels left in their texture
-   [MC-203399](https://bugs.mojang.com/browse/MC-203399) - Hoppers use the side texture on the bottom
-   [MC-203406](https://bugs.mojang.com/browse/MC-203406) - Kelp and seagrass models appear to reference biome tints despite not using any
-   [MC-212271](https://bugs.mojang.com/browse/MC-212271) - Glow squid and squid show Z-fighting
-   [MC-224433](https://bugs.mojang.com/browse/MC-224433) - Clouds texture contains semi-transparent background
-   [MC-230792](https://bugs.mojang.com/browse/MC-230792) - Cat\'s tail shows Z-Fighting
-   [MC-237556](https://bugs.mojang.com/browse/MC-237556) - Legs of black cat model are white at the top
-   [MC-241314](https://bugs.mojang.com/browse/MC-241314) - Filled cauldrons\' bottom faces are still culled when they should not be
-   [MC-246459](https://bugs.mojang.com/browse/MC-246459) - Drowned have some transparent pixels within their inner body texture
-   [MC-249514](https://bugs.mojang.com/browse/MC-249514) - Button UV appears to be upside-down
-   [MC-251536](https://bugs.mojang.com/browse/MC-251536) - Desert zombie villager feet still mismatch the sides of the feet
-   [MC-251537](https://bugs.mojang.com/browse/MC-251537) - Desert (zombie) villager has solid-color on inner of arm, unlike other villagers
-   [MC-251538](https://bugs.mojang.com/browse/MC-251538) - Desert villager missing some pixels for the sandals
-   [MC-252099](https://bugs.mojang.com/browse/MC-252099) - Incorrect texture mapping in potted mangrove propagule (mirror effect)
-   [MC-254588](https://bugs.mojang.com/browse/MC-254588) - Miscolored pixel on slowness effect icon
-   [MC-256419](https://bugs.mojang.com/browse/MC-256419) - Incomplete commands run through aliases don\'t produce errors
-   [MC-256540](https://bugs.mojang.com/browse/MC-256540) - The top texture of the camel\'s front left leg contains some redundant gray pixels
-   [MC-258939](https://bugs.mojang.com/browse/MC-258939) - Non-atomic cached state can cause multithreaded crashes
-   [MC-259873](https://bugs.mojang.com/browse/MC-259873) - Skeleton/Zombie Horse\'s chests are outdated
-   [MC-260036](https://bugs.mojang.com/browse/MC-260036) - Can\'t plant cactus and sugar cane on suspicious sand
-   [MC-260042](https://bugs.mojang.com/browse/MC-260042) - Cannot waterlog a decorated pot by using a water bucket or dispenser
-   [MC-260105](https://bugs.mojang.com/browse/MC-260105) - The name tags of sniffers are partly inside their models
-   [MC-260152](https://bugs.mojang.com/browse/MC-260152) - Sculk sensors are not activated by sniffers digging
-   [MC-260202](https://bugs.mojang.com/browse/MC-260202) - The sound of using the brush isn\'t affected by blocks
-   [MC-260237](https://bugs.mojang.com/browse/MC-260237) - Sniffers can sniff while panicking
-   [MC-260240](https://bugs.mojang.com/browse/MC-260240) - Sniffers that are in love sometimes don\'t attempt to approach one another to breed
-   [MC-260347](https://bugs.mojang.com/browse/MC-260347) - Falling suspicious sand does not break when reopening the world
-   [MC-260348](https://bugs.mojang.com/browse/MC-260348) - Sniffers will never dig in normal mud despite being a \"sniffer_diggable\" block
-   [MC-260401](https://bugs.mojang.com/browse/MC-260401) - When Brush is broken in offhand, the broken Particle is the Item in mainhand
-   [MC-260459](https://bugs.mojang.com/browse/MC-260459) - Baby sniffers don\'t sound high pitched when sniffing
-   [MC-260467](https://bugs.mojang.com/browse/MC-260467) - Torchflower is not grouped with other small flowers in the creative inventory
-   [MC-260478](https://bugs.mojang.com/browse/MC-260478) - Torchflower crop hitboxes don\'t change in size according to their age
-   [MC-260527](https://bugs.mojang.com/browse/MC-260527) - The coordinates of the sniffer \"minecraft:sniffer_explored_positions\" tag do not check the dimension
-   [MC-260778](https://bugs.mojang.com/browse/MC-260778) - Sniffer tries to sniff out blocks outside the world border
-   [MC-260779](https://bugs.mojang.com/browse/MC-260779) - Sniffers can dig into blocks outside the world border
-   [MC-260810](https://bugs.mojang.com/browse/MC-260810) - Villagers can\'t pick up torchflower seeds, despite being able to farm torchflowers
-   [MC-261167](https://bugs.mojang.com/browse/MC-261167) - Suspicious gravel does not have an assigned tool
-   [MC-261171](https://bugs.mojang.com/browse/MC-261171) - You can\'t plant bamboo on suspicious gravel
-   [MC-261172](https://bugs.mojang.com/browse/MC-261172) - Pitcher crop hitboxes don\'t change in size according to their age
-   [MC-261174](https://bugs.mojang.com/browse/MC-261174) - Suspicious gravel is not part of the #overworld_carver_replaceables tag, causing carvers to not cut through it
-   [MC-261176](https://bugs.mojang.com/browse/MC-261176) - Pitchers don\'t maintain the farmland used to grow it
-   [MC-261179](https://bugs.mojang.com/browse/MC-261179) - Attempting to interact with a waxed sign plays a sound but displays no subtitle
-   [MC-261183](https://bugs.mojang.com/browse/MC-261183) - Sniffer egg sound events are listed under \"entity\" instead of \"block\"
-   [MC-261186](https://bugs.mojang.com/browse/MC-261186) - Entities don\'t recognize sniffer eggs as obstacles when pathfinding
-   [MC-261187](https://bugs.mojang.com/browse/MC-261187) - Entities will often spin while pathfinding on top of sniffer eggs
-   [MC-261189](https://bugs.mojang.com/browse/MC-261189) - Inconsistent naming of block states for sniffer and turtle eggs

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/cb67d34c44013759bca77085ae42e3a7b37f265d/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

-   For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you\'re feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
