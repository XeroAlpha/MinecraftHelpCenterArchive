---
title: "Minecraft: Java Edition - 1.13 Pre-Release"
date: 2018-06-13T20:30:40Z
updated: 2018-10-17T23:06:09Z
categories: Snapshot Information and Changelogs
tags:
  - java
  - 1.13-pre1
  - 1.13-pre2
  - 1.13-pre3
  - 1.13-pre4
  - 1.13-pre5
  - 1.13-pre6
  - 1.13-pre7
  - 1.13-pre8
  - 1.13-pre9
  - 1.13-pre10
link: https://feedback.minecraft.net/hc/en-us/articles/360004784612-Minecraft-Java-Edition-1-13-Pre-Release
---

# CHANGES IN 1.13.2-PRE1

-   Improved performance of upgrading worlds
-   Improved startup time
-   Improved performance of turtle pathfinding
-   Improved mob spawning performance
-   General other performance improvements
-   [MC-134115](https://bugs.mojang.com/browse/MC-134115) - Containers next to chunk borders can lose items when upgrading
-   [MC-91621](https://bugs.mojang.com/browse/MC-91621) - Mobs repetitively despawn and respawn rapidly at high Y coordinates (causing lag)

# CHANGES IN 1.13-PRE1

-   New Update Aquatic title screen
-   Three brand new pieces of music by C418
-   You can now tab-complete in command blocks again
-   Fixed bugs!

# CHANGES IN 1.13-PRE2

-   Title screen should now be more optimised
-   Reverted the bark block changes from the first pre-release
-   Various performance optimisations
-   You can now combine 9 ice to create 1 packed ice
-   Fixed a bunch of bugs

# CHANGES IN 1.13-PRE3

-   Lots and lots of bug fixes!
-   Some optimizations!

# CHANGES IN 1.13-PRE4

-   Updated LWJGL
-   Biome names are now sorted alphabetically in the buffet menu
-   Performance improvements
-   Bugs got fixed!

# CHANGES IN 1.13-PRE5

-   Fixed a nasty crash
-   Renamed a lot of internal IDs to be more consitent with the game
-   Squashed bugs!

# CHANGES IN 1.13-PRE6

-   Changed dolphin treasure finding behaviour to be more on parity with Bedrock
-   Improved fonts
-   Some sounds are now more wet
-   Brought out the bug spray!

# CHANGES IN 1.13-PRE7

-   Fixed outstanding issues with the new improved fonts
-   Maps changed slightly. [Read more about it by clicking here.](https://www.reddit.com/r/Minecraft/comments/8xo1ex/minecraft_113_map_rendering_changes/)
-   Made all waterlogged blocks display the drip animation
-   More bugfixes!

# CHANGES IN 1.13-PRE8

-   Added dead coral fans
-   Changed which blocks show dripping liquids
-   Team names & objective names are now text components, not raw strings
-   More bugfixes!

# CHANGES IN 1.13-PRE9

-   Added a few missing subtitles
-   Improved performance
-   Fixed bugs!

# CHANGES IN 1.13-PRE10

-   Added an \"Optimize World\" button (singleplayer -\> edit world -\> optimize world), which upgrades an entire world from older version to the latest version in one go
-   Improved performance
-   Fixed bugs!

## FIXED BUGS IN 1.13-PRE1

-   [MC-122134](https://bugs.mojang.com/browse/MC-122134) - Tab-completion in command blocks no longer works
-   [MC-122940](https://bugs.mojang.com/browse/MC-122940) - After executing the /reload command, clicking on recipe book recipes does not work
-   [MC-124123](https://bugs.mojang.com/browse/MC-124123) - Crash upon loading world: Non \[a-z0-9/.\_-\] character in path of location: minecraft:Zombie
-   [MC-124972](https://bugs.mojang.com/browse/MC-124972) - Game crashes during the loading world, when creating a superflat world with oceanmonument tag
-   [MC-127142](https://bugs.mojang.com/browse/MC-127142) - Failed to create block entity DUMMY (path of location: minecraft:DUMMY)
-   [MC-129625](https://bugs.mojang.com/browse/MC-129625) - Sea grass changes to air pockets when upgrading from 18w16a to 18w20a+
-   [MC-130463](https://bugs.mojang.com/browse/MC-130463) - Sponges do not absorb bubble columns
-   [MC-130521](https://bugs.mojang.com/browse/MC-130521) - Leaves placed by hand disappear if not touching log or bark after a reload

## FIXED BUGS IN 1.13-PRE2

-   [MC-35856](https://bugs.mojang.com/browse/MC-35856) - Multiple background songs playing at one time / automatic music overlap (not Jukebox music)
-   [MC-102403](https://bugs.mojang.com/browse/MC-102403) - Persistent/unchangeable sounds after (re-)opening a world
-   [MC-121628](https://bugs.mojang.com/browse/MC-121628) - Horse armor textures z-fighting.
-   [MC-121714](https://bugs.mojang.com/browse/MC-121714) - Unable to save screenshots and world icons if the path contains non-ASCII characters
-   [MC-121832](https://bugs.mojang.com/browse/MC-121832) - Z-fighting on skeleton horse texture
-   [MC-122864](https://bugs.mojang.com/browse/MC-122864) - Tamed llamas, donkeys, and mules cannot be named with a name tag
-   [MC-123007](https://bugs.mojang.com/browse/MC-123007) - Z-fighting on zombie horse texture
-   [MC-123366](https://bugs.mojang.com/browse/MC-123366) - Item right click actions don\'t work whilst looking at a block in adventure mode
-   [MC-123811](https://bugs.mojang.com/browse/MC-123811) - Horses (and llamas, etc) show default name as \"HorseChest\"
-   [MC-124364](https://bugs.mojang.com/browse/MC-124364) - Horse skin and armor textures not applied correctly to horse model
-   [MC-125363](https://bugs.mojang.com/browse/MC-125363) - Items fail to remain on surface
-   [MC-125744](https://bugs.mojang.com/browse/MC-125744) - Entity predicates for advancements fail if \"type\" not specified
-   [MC-127099](https://bugs.mojang.com/browse/MC-127099) - Kelp isn\'t completely removed when sponge removes the water
-   [MC-127320](https://bugs.mojang.com/browse/MC-127320) - Drowned do not recognize tridents as weapons they can pick up
-   [MC-127921](https://bugs.mojang.com/browse/MC-127921) - Horses\' health bars interfere with the air bubble bar.
-   [MC-128241](https://bugs.mojang.com/browse/MC-128241) - Dolphins can sit in boats
-   [MC-129262](https://bugs.mojang.com/browse/MC-129262) - Zombie horses don\'t sink in water like other undead mobs
-   [MC-129374](https://bugs.mojang.com/browse/MC-129374) - Crash on 32 bit JVMs: \"Unable to bootstrap datafixers\" due to stack overflow
-   [MC-129500](https://bugs.mojang.com/browse/MC-129500) - Map displays 1 deep water as dry land.
-   [MC-129712](https://bugs.mojang.com/browse/MC-129712) - Team Suffix resets after restarting world
-   [MC-129895](https://bugs.mojang.com/browse/MC-129895) - Concrete powder\'s falling sand entities lose NBT data when upgrading from 1.12.2 to snapshots
-   [MC-130014](https://bugs.mojang.com/browse/MC-130014) - When updating villagers trade carved pumpkin instead of pumpkins
-   [MC-130059](https://bugs.mojang.com/browse/MC-130059) - Bubble column particles (from falling) have missing texture
-   [MC-130145](https://bugs.mojang.com/browse/MC-130145) - Text over the hotbar does not reflect item rarity colours
-   [MC-130200](https://bugs.mojang.com/browse/MC-130200) - Items in saved creative toolbars upgrade improperly from 1.12.2 to 1.13-pre1
-   [MC-130524](https://bugs.mojang.com/browse/MC-130524) - Beds turn invisible when upgrading from 1.11.2 or below
-   [MC-130577](https://bugs.mojang.com/browse/MC-130577) - Armor doesn\'t always line up with Drowned model
-   [MC-130722](https://bugs.mojang.com/browse/MC-130722) - Slime blocks diffuse light
-   [MC-130779](https://bugs.mojang.com/browse/MC-130779) - Title-Screen Lag High GPU Usage
-   [MC-130800](https://bugs.mojang.com/browse/MC-130800) - Normal terracotta disappears from chests when upgrading from 1.12 to 1.13-pre1
-   [MC-130858](https://bugs.mojang.com/browse/MC-130858) - Pistons are no longer transparent
-   [MC-130936](https://bugs.mojang.com/browse/MC-130936) - Carpets on llamas removed when loading 1.12 map
-   [MC-130942](https://bugs.mojang.com/browse/MC-130942) - Errors, warnings and 10 second freeze on loading list of singleplayer worlds
-   [MC-130945](https://bugs.mojang.com/browse/MC-130945) - Command tab completion does not work in command blocks with command suggestions off
-   [MC-131125](https://bugs.mojang.com/browse/MC-131125) - InhabitedTime set to zero after update from 1.12.2 (Local Difficulty)
-   [MC-131155](https://bugs.mojang.com/browse/MC-131155) - Saving structure which has not been saved before logs error \"Couldn\'t load structure\"

## FIXED BUGS IN 1.13-PRE3

-   [MC-131706](https://bugs.mojang.com/browse/MC-131706) - Water doesn\'t destroy carpet
-   [MC-131633](https://bugs.mojang.com/browse/MC-131633) - Mobs get stuck on carpet
-   [MC-131458](https://bugs.mojang.com/browse/MC-131458) - Cobwebs don\'t appear on maps
-   [MC-131419](https://bugs.mojang.com/browse/MC-131419) - Squids, fish, and dolphins don\'t suffocate on land
-   [MC-131416](https://bugs.mojang.com/browse/MC-131416) - Conversion of a 2013 world crashes as of 1.13
-   [MC-131400](https://bugs.mojang.com/browse/MC-131400) - Structure names allow trailing dots for folder names
-   [MC-131343](https://bugs.mojang.com/browse/MC-131343) - Crash when clicking on a recipe in the recipe book without sufficient ingredients
-   [MC-131154](https://bugs.mojang.com/browse/MC-131154) - Resource locations allow empty path pieces
-   [MC-130778](https://bugs.mojang.com/browse/MC-130778) - End return portals don\'t return you to the centre End Island
-   [MC-130690](https://bugs.mojang.com/browse/MC-130690) - EntityTag for spawn eggs is not working
-   [MC-130667](https://bugs.mojang.com/browse/MC-130667) - Flowing water freezes in frozen biomes.
-   [MC-130554](https://bugs.mojang.com/browse/MC-130554) - Waterlogged blocks have a full cube hitbox
-   [MC-130486](https://bugs.mojang.com/browse/MC-130486) - Side of water and lava not rendered besides non-full-height blocks
-   [MC-130475](https://bugs.mojang.com/browse/MC-130475) - Boats immediately sink when placed on water
-   [MC-130374](https://bugs.mojang.com/browse/MC-130374) - vSync turns off in fullscreen mode
-   [MC-130169](https://bugs.mojang.com/browse/MC-130169) - Enchanted items with capitals in enchantment ID cause crash (path of location: minecraft:Cookie)
-   [MC-129526](https://bugs.mojang.com/browse/MC-129526) - Grass and ferns don\'t show up on a map
-   [MC-128558](https://bugs.mojang.com/browse/MC-128558) - Swamp Hills (mutated_swampland) biomes have wrong colored water (light yellow)
-   [MC-128237](https://bugs.mojang.com/browse/MC-128237) - Conduits, kelp, coral (fans), and tall grass have full hitboxes
-   [MC-128071](https://bugs.mojang.com/browse/MC-128071) - Desert rabbits were the wrong color, but now they are missing
-   [MC-127720](https://bugs.mojang.com/browse/MC-127720) - Baby horses have long necks
-   [MC-127326](https://bugs.mojang.com/browse/MC-127326) - Rain splash particles don\'t appear on the surface of the water
-   [MC-127109](https://bugs.mojang.com/browse/MC-127109) - Nether caves under lava oceans don\'t fill up with lava properly
-   [MC-127044](https://bugs.mojang.com/browse/MC-127044) - Waterlogged blocks don\'t move entities if the water in them is flowing
-   [MC-126809](https://bugs.mojang.com/browse/MC-126809) - minecraft:exploration_map loot table function only works on block containers
-   [MC-126138](https://bugs.mojang.com/browse/MC-126138) - No rain sound in ocean
-   [MC-126038](https://bugs.mojang.com/browse/MC-126038) - Observers getting moved in \"on\" state rather than \"off\" state
-   [MC-125644](https://bugs.mojang.com/browse/MC-125644) - Dispenser filled with bone meal cannot create sea grass
-   [MC-124876](https://bugs.mojang.com/browse/MC-124876) - Villagers requesting tools with no damage provided specifically want Damage:0
-   [MC-124325](https://bugs.mojang.com/browse/MC-124325) - Nested /execute commands can only store success/result once
-   [MC-124174](https://bugs.mojang.com/browse/MC-124174) - Game crash when give yourself an item with empty name
-   [MC-124025](https://bugs.mojang.com/browse/MC-124025) - Terracotta, spawn egg and entity statistics are lost on world upgrade
-   [MC-123362](https://bugs.mojang.com/browse/MC-123362) - SuccessCount of command blocks use the \"result\" return value of a command instead of \"success\"
-   [MC-123011](https://bugs.mojang.com/browse/MC-123011) - Scores on scoreboard objectives created with old stats causes scoreboards to not store changes to scoreboard.dat
-   [MC-122498](https://bugs.mojang.com/browse/MC-122498) - Some advancements and recipes are not upgraded when opening world in 17w47+
-   [MC-35856](https://bugs.mojang.com/browse/MC-35856) - Multiple background /title songs playing at one time / automatic music overlap (not Jukebox music)
-   [MC-258](https://bugs.mojang.com/browse/MC-258) - Most text boxes / chat / scroll bars revert when the window changes size, fullscreen mode is toggled, or fullscreened game is tabbed into

## FIXED BUGS IN 1.13-PRE4

-   [MC-36030](https://bugs.mojang.com/browse/MC-36030) - Music playing despite music / jukebox slider set to OFF
-   [MC-121798](https://bugs.mojang.com/browse/MC-121798) - Can only scroll list in superflat preset selection when it is focused
-   [MC-126162](https://bugs.mojang.com/browse/MC-126162) - Waterlogged blocks and bubble columns don\'t absorb explosion damage
-   [MC-126244](https://bugs.mojang.com/browse/MC-126244) - Extreme lag when using the /locate command or when generating explorer maps
-   [MC-126595](https://bugs.mojang.com/browse/MC-126595) - Blue Wither heads are intangible and invincible on the first tick(s?)
-   [MC-128299](https://bugs.mojang.com/browse/MC-128299) - Blocky and fully bright areas appearing underwater
-   [MC-128690](https://bugs.mojang.com/browse/MC-128690) - Water does not flow sideways when there's no block below it
-   [MC-130270](https://bugs.mojang.com/browse/MC-130270) - Iron golem spawning inside blocks
-   [MC-130530](https://bugs.mojang.com/browse/MC-130530) - Water source block gets destroyed from downwards flowing water
-   [MC-131094](https://bugs.mojang.com/browse/MC-131094) - Projectiles ignore collisions for \~1 block after spawned
-   [MC-131462](https://bugs.mojang.com/browse/MC-131462) - Coordinate math error causes structure not to generate and possibly other issues
-   [MC-131768](https://bugs.mojang.com/browse/MC-131768) - Models' predicates are inverted
-   [MC-131773](https://bugs.mojang.com/browse/MC-131773) - Comparators from command blocks no longer output results properly
-   [MC-131805](https://bugs.mojang.com/browse/MC-131805) - Observers pulsing after being moved instantly after triggering
-   [MC-131825](https://bugs.mojang.com/browse/MC-131825) - Enchanted books lose enchantments when upgrading
-   [MC-131849](https://bugs.mojang.com/browse/MC-131849) - Duplication bug

## FIXED BUGS IN 1.13-PRE5

-   [MC-103516](https://bugs.mojang.com/browse/MC-103516) - Spider and chicken jockeys only spawn the additional mob
-   [MC-118372](https://bugs.mojang.com/browse/MC-118372) - Faulty netty-4.1.9.Final release causes players to be kicked from the server
-   [MC-124545](https://bugs.mojang.com/browse/MC-124545) - Malformed JSON as \'name\' value for \'show_entity\' hoverEvent causes crash
-   [MC-124546](https://bugs.mojang.com/browse/MC-124546) - /datapack disable \<pack\> only works in the overworld
-   [MC-125729](https://bugs.mojang.com/browse/MC-125729) - Moving frosted ice preempts melting even under correct conditions
-   [MC-126136](https://bugs.mojang.com/browse/MC-126136) - Inverted tab-suggestions for argument values in entity selectors are suggested even if the typed prefix doesn\'t include an exclamation mark
-   [MC-126144](https://bugs.mojang.com/browse/MC-126144) - Cods suffocate when touching a solid block from below
-   [MC-126373](https://bugs.mojang.com/browse/MC-126373) - Density of nether and overworld ore veins significantly lower in 18w versions
-   [MC-126906](https://bugs.mojang.com/browse/MC-126906) - Buckets cannot be emptied against blocks with the state waterlogged
-   [MC-126915](https://bugs.mojang.com/browse/MC-126915) - Dispenser with empty bucket removes waterlogged blocks instead of drying them out.
-   [MC-129527](https://bugs.mojang.com/browse/MC-129527) - Drowned overlay turns dark blue when wearing enchanted armor
-   [MC-130270](https://bugs.mojang.com/browse/MC-130270) - Iron golem spawning inside blocks
-   [MC-130480](https://bugs.mojang.com/browse/MC-130480) - Input range entry and limits are reversed in error messages
-   [MC-130547](https://bugs.mojang.com/browse/MC-130547) - Objective minecraft.used only ticks up when placing a block from a stack of 2 or more items
-   [MC-131094](https://bugs.mojang.com/browse/MC-131094) - Projectiles ignore collisions for \~1 block after spawned
-   [MC-131599](https://bugs.mojang.com/browse/MC-131599) - Opening player inventory with visible recipe book after using beacon causes crash
-   [MC-132002](https://bugs.mojang.com/browse/MC-132002) - Ender dragon respawns when upgrading from 1.12 to 1.13-pre3
-   [MC-132064](https://bugs.mojang.com/browse/MC-132064) - Swimming state does not end when teleporting / jumping out of water

## FIXED BUGS IN 1.13-PRE6

-   [MC-234](https://bugs.mojang.com/browse/MC-234) - Digging straight down glitches out the breaking animation (Z-fighting)
-   [MC-14502](https://bugs.mojang.com/browse/MC-14502) - Special characters on splash text on title screen rendered wrong
-   [MC-41410](https://bugs.mojang.com/browse/MC-41410) - Random text does not work in unicode
-   [MC-64537](https://bugs.mojang.com/browse/MC-64537) - Gui zooming out when using some languages (unicode)
-   [MC-72943](https://bugs.mojang.com/browse/MC-72943) - Game freeze after closing an \"Open to LAN\" single player world
-   [MC-81876](https://bugs.mojang.com/browse/MC-81876) - Number of characters before line cutoff in chat is not same when unicode mode is enabled and when it is off
-   [MC-91727](https://bugs.mojang.com/browse/MC-91727) - loot table \"spreading large stacks\" will overwrite existing items
-   [MC-92255](https://bugs.mojang.com/browse/MC-92255) - Singleplayer freezes instead of kicking a player
-   [MC-94325](https://bugs.mojang.com/browse/MC-94325) - Shadow of obfuscated text does not match with displayed character
-   [MC-96524](https://bugs.mojang.com/browse/MC-96524) - Language specific letters don\'t look like they should
-   [MC-121798](https://bugs.mojang.com/browse/MC-121798) - Can only scroll list in superflat preset selection when it is focused
-   [MC-121861](https://bugs.mojang.com/browse/MC-121861) - Command argument validation does not work for entity id in /summon
-   [MC-122110](https://bugs.mojang.com/browse/MC-122110) - BufferBuilder not expanding under specific conditions.
-   [MC-122478](https://bugs.mojang.com/browse/MC-122478) - It is possible to create a server in the server list with a blank name and/or IP address
-   [MC-122495](https://bugs.mojang.com/browse/MC-122495) - Cancelling backup screen using ESC opens main menu
-   [MC-122596](https://bugs.mojang.com/browse/MC-122596) - Command autocomplete overrides command history navigation
-   [MC-122597](https://bugs.mojang.com/browse/MC-122597) - \"Preparing spawn area %s%%\" string is hardcoded/not translatable
-   [MC-123078](https://bugs.mojang.com/browse/MC-123078) - Scoreboard ranges don\'t work correctly at extreme values
-   [MC-123087](https://bugs.mojang.com/browse/MC-123087) - Fences, glass panes, iron bars, stairs, and melon/pumpkin stems in structures generate with wrong block state
-   [MC-123236](https://bugs.mojang.com/browse/MC-123236) - Wrong error message when using invalid item in /replaceitem
-   [MC-123325](https://bugs.mojang.com/browse/MC-123325) - You can no longer use damaged items in advancement icons to display different textures
-   [MC-123352](https://bugs.mojang.com/browse/MC-123352) - Interaction error with block and GUI, when shift-clicking them with non-block items
-   [MC-123363](https://bugs.mojang.com/browse/MC-123363) - Occasional crash when changing blocks with a special renderer that uses states
-   [MC-123432](https://bugs.mojang.com/browse/MC-123432) - Snapshots are leaking tile entity data through to world save
-   [MC-124469](https://bugs.mojang.com/browse/MC-124469) - GUI scale size 3 displays as size 2 when Unicode font is forced
-   [MC-124966](https://bugs.mojang.com/browse/MC-124966) - Torches in mineshafts/strongholds are not always attached
-   [MC-125090](https://bugs.mojang.com/browse/MC-125090) - Cartographer doesn\'t unlock woodland mansion and ocean monument map trades
-   [MC-126244](https://bugs.mojang.com/browse/MC-126244) - Extreme lag when using the /locate command or when generating explorer maps
-   [MC-126685](https://bugs.mojang.com/browse/MC-126685) - Bubble columns don\'t update when placing magma blocks or soul sand above them
-   [MC-126708](https://bugs.mojang.com/browse/MC-126708) - Advancement trigger \"bred_animals\" does not trigger for breeding turtles
-   [MC-126769](https://bugs.mojang.com/browse/MC-126769) - Observers detecting updates from redstone on top of them
-   [MC-127822](https://bugs.mojang.com/browse/MC-127822) - Unicode on/off bug with another languages and english letters.
-   [MC-128387](https://bugs.mojang.com/browse/MC-128387) - Dolphins try to pick up items on land
-   [MC-128687](https://bugs.mojang.com/browse/MC-128687) - Picking up lava with an empty bucket would play the water picking up sound.
-   [MC-128736](https://bugs.mojang.com/browse/MC-128736) - Dolphin\'s pectoral (side) fins are flipped over instead of mirrored
-   [MC-129318](https://bugs.mojang.com/browse/MC-129318) - The \"How Did We Get Here?\" advancement does not require Dolphin\'s Grace
-   [MC-130127](https://bugs.mojang.com/browse/MC-130127) - Dolphins generate in large amounts with ocean ruin structures
-   [MC-131019](https://bugs.mojang.com/browse/MC-131019) - Setting and changing data of signs creates unnecessary \"extra\" tags and causes slow downs
-   [MC-131159](https://bugs.mojang.com/browse/MC-131159) - Dolphins spawning in frozen/deep frozen oceans!
-   [MC-131288](https://bugs.mojang.com/browse/MC-131288) - Shulker Box can\'t be opened and disappears when mined
-   [MC-131783](https://bugs.mojang.com/browse/MC-131783) - Crash on breaking 1.12.2 -\> 1.13-pre5 upgraded banner
-   [MC-131903](https://bugs.mojang.com/browse/MC-131903) - Banners not dropping as item when broken after unloading
-   [MC-132050](https://bugs.mojang.com/browse/MC-132050) - Worlds \<= 1.8.9 spam errors on conversion
-   [MC-132113](https://bugs.mojang.com/browse/MC-132113) - 1.13-pre4+ crashes caused by invalid gamepad / controller configuration detected by LWJGL 3.1.6 build 14b
-   [MC-132242](https://bugs.mojang.com/browse/MC-132242) - Upgrading enderman spawn egg causes chunk to regenerate
-   [MC-132252](https://bugs.mojang.com/browse/MC-132252) - Player cannot leave the swimming animation underwater
-   [MC-132254](https://bugs.mojang.com/browse/MC-132254) - Using /effect to give players an effect kicks them from the server
-   [MC-132259](https://bugs.mojang.com/browse/MC-132259) - Poor TPS in latest pre-release
-   [MC-132278](https://bugs.mojang.com/browse/MC-132278) - End Crystal beam is missing texture
-   [MC-132281](https://bugs.mojang.com/browse/MC-132281) - Crash while creating a customized superflat world using capital letters
-   [MC-132292](https://bugs.mojang.com/browse/MC-132292) - Some sound events are no longer playing the expected sound
-   [MC-132311](https://bugs.mojang.com/browse/MC-132311) - Dolphins don\'t save how long they have been out of water
-   [MC-132312](https://bugs.mojang.com/browse/MC-132312) - Using bone meal on anything underwater places sea grass on it
-   [MC-132320](https://bugs.mojang.com/browse/MC-132320) - Entities with new IDs disappear when upgrading
-   [MC-132335](https://bugs.mojang.com/browse/MC-132335) - Shulkers no longer shoot missiles in 1.13-pre5
-   [MC-132375](https://bugs.mojang.com/browse/MC-132375) - Upgrading 1.12.2 world to 1.13-pre5 crashes the game
-   [MC-132443](https://bugs.mojang.com/browse/MC-132443) - Some advancements are not upgraded from 1.12.2 (to 1.13-pre5+)
-   [MC-132448](https://bugs.mojang.com/browse/MC-132448) - Illager and golem statistics are not upgraded properly
-   [MC-132455](https://bugs.mojang.com/browse/MC-132455) - Evoker spawn egg disappears when upgrading from 1.12.2
-   [MC-132579](https://bugs.mojang.com/browse/MC-132579) - Inconsistent font

## FIXED BUGS IN 1.13-PRE7

-   [MC-37557](https://bugs.mojang.com/browse/MC-37557) - Sometimes a minecart sound plays/subtitle shown when loading a world
-   [MC-122596](https://bugs.mojang.com/browse/MC-122596) - Command autocomplete overrides command history navigation
-   [MC-122734](https://bugs.mojang.com/browse/MC-122734) - No particles when bed explodes in the nether
-   [MC-123087](https://bugs.mojang.com/browse/MC-123087) - Fences, glass panes, iron bars, stairs, and melon/pumpkin stems in structures generate with wrong block state
-   [MC-123369](https://bugs.mojang.com/browse/MC-123369) - Trying to recreate world from future version shows no warning and can crash
-   [MC-123769](https://bugs.mojang.com/browse/MC-123769) - Some item tooltips that previously had colors don\'t have colors anymore
-   [MC-123836](https://bugs.mojang.com/browse/MC-123836) - Double blocks aren\'t loaded in structures
-   [MC-123850](https://bugs.mojang.com/browse/MC-123850) - Redstone dust doesn\'t update shape of connecting redstone dust when going up onto transparent blocks
-   [MC-124015](https://bugs.mojang.com/browse/MC-124015) - Red Giant Mushrooms generate with 5 blocks having wrong blockstates, thus showing wrong faces
-   [MC-124126](https://bugs.mojang.com/browse/MC-124126) - You no longer look at the block you are inside of
-   [MC-124915](https://bugs.mojang.com/browse/MC-124915) - /locate and eye of ender find strongholds in invalid places
-   [MC-125090](https://bugs.mojang.com/browse/MC-125090) - Cartographer doesn\'t unlock woodland mansion map trades
-   [MC-125462](https://bugs.mojang.com/browse/MC-125462) - Waterlogged blocks does not decrease light level
-   [MC-125872](https://bugs.mojang.com/browse/MC-125872) - Superflat preset \"The Void\" doesn\'t generate starting platform anymore
-   [MC-125992](https://bugs.mojang.com/browse/MC-125992) - Cave outlines generate in ocean ravines
-   [MC-126704](https://bugs.mojang.com/browse/MC-126704) - X-ray vision
-   [MC-126998](https://bugs.mojang.com/browse/MC-126998) - When their block state changes, waterlogged blocks don\'t remove water they let through
-   [MC-127025](https://bugs.mojang.com/browse/MC-127025) - Waterlogged blocks do not display water drip animation
-   [MC-127093](https://bugs.mojang.com/browse/MC-127093) - Water flowing onto waterlogged blocks spreads outward, rather than stopping
-   [MC-127114](https://bugs.mojang.com/browse/MC-127114) - Water in glass panes and ladders doesn\'t appear in maps
-   [MC-127115](https://bugs.mojang.com/browse/MC-127115) - Visually fully submerged waterlogged blocks don\'t appear as water on maps
-   [MC-127224](https://bugs.mojang.com/browse/MC-127224) - Waterlogged blocks that are not full blocks trigger auto-jump even if it is disabled.
-   [MC-127303](https://bugs.mojang.com/browse/MC-127303) - There are no water sources near the south ceiling of flooded caves and trenches
-   [MC-128257](https://bugs.mojang.com/browse/MC-128257) - Bugged swimming animation while the head is not underwater
-   [MC-128478](https://bugs.mojang.com/browse/MC-128478) - Distance swum statistic uses old \"swimming\" (bobbing on top of water) instead of the new swimming
-   [MC-129388](https://bugs.mojang.com/browse/MC-129388) - Player suffocating when touching a solid block while swimming
-   [MC-129892](https://bugs.mojang.com/browse/MC-129892) - Selector wildcard doesn\'t work in scoreboard operations
-   [MC-130072](https://bugs.mojang.com/browse/MC-130072) - Pufferfish don\'t play the entity.puffer_fish.sting sound when damaging mobs
-   [MC-131352](https://bugs.mojang.com/browse/MC-131352) - Item rarity color / colour overrides first text component\'s colour in the held tooltip (item switching)
-   [MC-131382](https://bugs.mojang.com/browse/MC-131382) - Scoreboard objective name can\'t be updated
-   [MC-132135](https://bugs.mojang.com/browse/MC-132135) - Bad performance of a 1.12.2 world in 1.13
-   [MC-132248](https://bugs.mojang.com/browse/MC-132248) - Server crash on launch using Java 9 or newer
-   [MC-132269](https://bugs.mojang.com/browse/MC-132269) - Blocks invisible on map
-   [MC-132375](https://bugs.mojang.com/browse/MC-132375) - Upgrading 1.12.2 world to 1.13-pre5 crashes the game
-   [MC-132631](https://bugs.mojang.com/browse/MC-132631) - Cannot write in the box in the Superflat presets option
-   [MC-132632](https://bugs.mojang.com/browse/MC-132632) - Can not climb 1 block height if player is in water 5 or more blocks from water source
-   [MC-132654](https://bugs.mojang.com/browse/MC-132654) - F3 + I is missing large amounts of data
-   [MC-132706](https://bugs.mojang.com/browse/MC-132706) - Sticky pistons pull blocks that pop off
-   [MC-132751](https://bugs.mojang.com/browse/MC-132751) - Two chests spawned inside each other
-   [MC-132833](https://bugs.mojang.com/browse/MC-132833) - Opening 1.5.2 world on 1.12.2 works perfectly but bed is transparent.
-   [MC-132974](https://bugs.mojang.com/browse/MC-132974) - Converting 1.12 world to 1.13 spams Chunk file at x,y is missing level data, skipping
-   [MC-132977](https://bugs.mojang.com/browse/MC-132977) - Esc key results in an older world being converted to a newer version during \'Play\' menu sequence
-   [MC-133063](https://bugs.mojang.com/browse/MC-133063) - When trying to connect to an unreachable server Minecraft crashes instead of showing error message
-   [MC-133136](https://bugs.mojang.com/browse/MC-133136) - Crash when launching the game with LWJGL allocation debugging enabled
-   [MC-133139](https://bugs.mojang.com/browse/MC-133139) - The image write callback is never freed, leaking small amounts of memory for each screenshot
-   [MC-133140](https://bugs.mojang.com/browse/MC-133140) - The GL debug message callbacks are never freed, causing memory leak warnings

## FIXED BUGS IN 1.13-PRE8

-   [MC-133325](https://bugs.mojang.com/browse/MC-133325) - Double chests becoming invisible or separating with redstone
-   [MC-133277](https://bugs.mojang.com/browse/MC-133277) - Texts sometimes error if the language is Chinese
-   [MC-133233](https://bugs.mojang.com/browse/MC-133233) - Sticky pistons do not update blocks they cannot pull
-   [MC-133216](https://bugs.mojang.com/browse/MC-133216) - Water dripping from transparent blocks
-   [MC-133214](https://bugs.mojang.com/browse/MC-133214) - Sticky pistons pull glazed teracotta
-   [MC-133157](https://bugs.mojang.com/browse/MC-133157) - Sprinting in shallow water using ctrl will change FOV back and forth
-   [MC-132835](https://bugs.mojang.com/browse/MC-132835) - The right \"tail\" of the capital ß (ẞ) seems to be a few pixels too long.
-   [MC-132695](https://bugs.mojang.com/browse/MC-132695) - Some bold characters have either extra or lack of pixels
-   [MC-132639](https://bugs.mojang.com/browse/MC-132639) - New version of unicode font has some weird characters
-   [MC-132635](https://bugs.mojang.com/browse/MC-132635) - Placing blocks with off-hand while main hand empty not possible
-   [MC-132603](https://bugs.mojang.com/browse/MC-132603) - Bark recipes are not upgraded
-   [MC-132466](https://bugs.mojang.com/browse/MC-132466) - No enum constant bfz - loading and saving 1.12.2 chunks
-   [MC-132174](https://bugs.mojang.com/browse/MC-132174) - Tier 4 beacons will not give regeneration effect
-   [MC-132123](https://bugs.mojang.com/browse/MC-132123) - Lighting for broken block not updated
-   [MC-131327](https://bugs.mojang.com/browse/MC-131327) - Opaque blocks at the top of subchunks (chunk sections) do not increase the world height to the next subchunk
-   [MC-128858](https://bugs.mojang.com/browse/MC-128858) - Distance given by /locate is inaccurate
-   [MC-124955](https://bugs.mojang.com/browse/MC-124955) - Bottoms of large ferns and tall grass are generating in place of regular ferns and grass in taiga biomes
-   [MC-123447](https://bugs.mojang.com/browse/MC-123447) - Skin not visible in spectator mode GUI (since 1.13)
-   [MC-123265](https://bugs.mojang.com/browse/MC-123265) - Spectator mode tooltips not showing
-   [MC-68565](https://bugs.mojang.com/browse/MC-68565) - Monsters spawn at daytime at y=256 and don\'t burn
-   [MC-60995](https://bugs.mojang.com/browse/MC-60995) - Maps inconsistent over restarts

## FIXED BUGS IN 1.13-PRE9

-   [MC-131821](https://bugs.mojang.com/browse/MC-131821) - Cory Scheviak does not appear in credits
-   [MC-131822](https://bugs.mojang.com/browse/MC-131822) - Nondescript / confusing error message when attempting to join servers \<= 1.13-pre2 using \>=1.13-pre3
-   [MC-132652](https://bugs.mojang.com/browse/MC-132652) - Username tab completion on non-empty starting strings is offset
-   [MC-132657](https://bugs.mojang.com/browse/MC-132657) - Username tab completion appears on the left when invoked without a starting string in the middle of the chat entry line
-   [MC-133337](https://bugs.mojang.com/browse/MC-133337) - Crash in org.lwjgl.opengl.GL11.glDrawArrays when opening language settings (caused by Couldn\'t find glyph for character Ʞ (\\ua7b0))
-   [MC-133503](https://bugs.mojang.com/browse/MC-133503) - Control settings from 1.12.2 can get completely lost when upgrading to 1.13

## FIXED BUGS IN 1.13-PRE10

-   [MC-133653](https://bugs.mojang.com/browse/MC-133653) - Game Crash when creating Superflat world (Void), entering the End, or creating floating islands buffet world
-   [MC-133473](https://bugs.mojang.com/browse/MC-133473) - Dead bubble coral fan looks like dead brain coral fan
-   [MC-133467](https://bugs.mojang.com/browse/MC-133467) - Mobs Stuck on Flowing Water
-   [MC-133421](https://bugs.mojang.com/browse/MC-133421) - The lowest level of flowing water doesn\'t move mobs
-   [MC-133408](https://bugs.mojang.com/browse/MC-133408) - Coral fans and dead coral fans never drop as item
-   [MC-128668](https://bugs.mojang.com/browse/MC-128668) - Ocean monuments cut off icebergs
-   [MC-127100](https://bugs.mojang.com/browse/MC-127100) - Water and lava influence the flow direction of each other when touching
-   [MC-125038](https://bugs.mojang.com/browse/MC-125038) - New world generation doesn\'t populate edges of old world
-   [MC-125007](https://bugs.mojang.com/browse/MC-125007) - World fails to generate decorations on seemingly random quarter chunks
-   [MC-122216](https://bugs.mojang.com/browse/MC-122216) - /execute if blocks only returning 1/0 for \"result\"
-   [MC-59729](https://bugs.mojang.com/browse/MC-59729) - /replaceitem doesn\'t work with chest or hopper minecarts

# GET THE PRE-RELEASE

To install the pre-release, open up the [Minecraft Launcher](https://minecraft.net/download)and enable snapshots in the \"Launch Options\" tab.

**Pre-releases can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/mc/game/1.13-pre10/server/2ffcae7a9489d515b0f733430923ef974dffd56b/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
