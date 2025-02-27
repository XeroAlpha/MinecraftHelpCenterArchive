---
title: "Minecraft: Java Edition - 1.18.2"
date: 2022-02-28T14:07:36Z
updated: 2025-02-27T11:50:38Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4531177623437-Minecraft-Java-Edition-1-18-2
hash:
  h_01JN3KW5DTV7PB9KAZ5SGQGXMG: changes-in-1182
  h_01JN3KW5DTN1SASH80DHBDVWD2: technical-changes-in-1182
  h_01JN3KW5DT62E5V4D0PM12MAG6: placefeaturecommand
  h_01JN3KW5DT6K5R8SPBSQG3B3A7: configurable-caves
  h_01JN3KW5DT6K81BZA1ZJWGA9XF: configured-structures-and-structure-sets
  h_01JN3KW5DTR6WHTNMFG4B9ZNTG: universal-tags
  h_01JN3KWDNGJYDXK8A6WMN5B6VE: fixed-bugs-in-1182
  h_01JN3KW5DT2376C8GZ60QTA83A: get-the-release
---

We're now releasing 1.18.2 for Minecraft: Java Edition. This release adds universal tags and the placefeature command. It also introduces the possibility for experimental data packs to customize cave generation and to add new custom structures to worlds.

Additionally, this version contains compliance updates for South Korean players.

Enjoy!

# CHANGES IN 1.18.2

- Users running Minecraft in a 32-bit environment will receive a warning in the main menu about the upcoming end of 32-bit environment support
- If you’re playing in South Korea, we added gameplay timers and notices in compliance with gaming laws to help remind players to take occasional breaks from gameplay
- A seed of the number zero is no longer handled as a special case
- Any spaces before/after an inputted seed will now be trimmed
- Dolphins will now more accurately pick the closest structure regardless of type
- Ender chests are no longer gift wrapped around Christmas

# TECHNICAL CHANGES IN 1.18.2

- Added command: placefeature
- The locate command now uses a namespaced id parameter
- The locate command parameter is now a configured structure rather than a structure type. For instance, you can now use /locate village_desert or /locate shipwreck_beached
- locate and locatebiome commands now support tags (prefix with \# to distinguish from normal ids)
- It is now possible to add custom structures in experimental datapacks
- A lot of the cave generation is now configurable through experimental datapacks
- Any type present in registries (blocks, items, biomes, etc.) can now have tags
- The datapack version is now 9

## PLACEFEATURE COMMAND

New command that places a configured feature at a given location. Syntax: placefeature \<id\> \[pos\]  
Parameters:

- id: The namespaced id of a configured feature to place
- pos: The position to use as the origin for the feature placement (if omitted, ~ ~ ~ is used)

## CONFIGURABLE CAVES

- A new registry was added for Density functions (caves are created by combining those together)
- Noise settings got a new field noise_router (and lost a couple of flags), see worldgen/noise_settings folder in the worldgen report
- Noise router wires data-driven parts of the cave generation with the rest of the code

## CONFIGURED STRUCTURES AND STRUCTURE SETS

The game now generates and stores data-driven configured structures.

- Experimental datapacks can add new structure sets
- The feature field in location predicates now references a configured feature
- The exploration_map loot table function destination field is now a configured feature tag id
- The exploration_map loot table function no longer automatically sets the display name of the map

## UNIVERSAL TAGS

- Tags can now be defined for any registry (blocks, items, biomes, etc. - see registries.json in report)
- New tags are stored in datapacks under tags directory (same as old ones)
  - Names of new tag directories are the same as registry names (so /data/\[namespace\]/tags/potion and /data/\[namespace\]/tags/worldgen/biome)
  - Existing tags (blocks, items, fluids, entity_types, game_events and functions) keep their name (for now)
- Some fields in worldgen structures that previously accepted only lists of element ids now accept tags
  - Those entries now accept \[id, ...\], id (shortcut for \[id\]) and \#tag
  - Changed fields are:
    - feature.glow_lichen configuration: can_be_placed_on
    - feature.spring_feature configuration: valid_blocks
    - feature.simple_random_selector configuration: features
    - block_predicate_type.matching_blocks: blocks
    - block_predicate_type.matching_fluids: fluids
    - biome: inner list in features, map value in carvers
    - biome_source.checkerboard: biomes
- Some tag fields now require id to be prepended with # (however they are not yet accepting element list)
  - dimension_type: infiniburn
  - feature.geode configration: blocks.cannot_replace, blocks.invalid_blocks
  - feature.vegetation_patch, feature.waterlogged_vegetation_patch configuration: replaceable
  - feature.root_system configuration: root_replaceable
  - structure_processor.protected_blocks: value

## Fixed bugs in 1.18.2

- [MC-3524](https://bugs.mojang.com/browse/MC-3524) - Structure related mobs do not spawn in flat type world generation
- [MC-4533](https://bugs.mojang.com/browse/MC-4533) - Water graphical glitch when connecting diagonally
- [MC-9232](https://bugs.mojang.com/browse/MC-9232) - When loading a world, the held item from the previously loaded world is briefly visible
- [MC-53850](https://bugs.mojang.com/browse/MC-53850) - Invulnerable item entities and experience orbs are removed client-side when they take damage
- [MC-56037](https://bugs.mojang.com/browse/MC-56037) - Killing falling_block entity: texture disappears while falling but the block is still there
- [MC-70848](https://bugs.mojang.com/browse/MC-70848) - Water looks like it flows up
- [MC-72248](https://bugs.mojang.com/browse/MC-72248) - Falling sand creates invisible blocks
- [MC-83938](https://bugs.mojang.com/browse/MC-83938) - Standing on entities with solid collision boxes (shulkers, boats) kicks you for flying
- [MC-94025](https://bugs.mojang.com/browse/MC-94025) - A world with seed 0 cannot be copied using the "Re-Create" option
- [MC-98727](https://bugs.mojang.com/browse/MC-98727) - Server: Entering a boat/minecart/horse while going upwards from jumping causes a kick for flying
- [MC-105317](https://bugs.mojang.com/browse/MC-105317) - Structure blocks do not rotate entities correctly when loading
- [MC-111082](https://bugs.mojang.com/browse/MC-111082) - Riding a boat with NoGravity on a server without flight enabled causes kick for flying
- [MC-126772](https://bugs.mojang.com/browse/MC-126772) - Underwater fog doesn't hide edge of chunks correctly at low render distances
- [MC-129652](https://bugs.mojang.com/browse/MC-129652) - Long names of backed up worlds are cut off in toasts
- [MC-133703](https://bugs.mojang.com/browse/MC-133703) - Right hand shown for one tick after joining world, ignoring handedness
- [MC-135989](https://bugs.mojang.com/browse/MC-135989) - Kicked for flying using trident with Riptide enchantment
- [MC-138717](https://bugs.mojang.com/browse/MC-138717) - /locate command does not locate certain structures in Superflat
- [MC-142590](https://bugs.mojang.com/browse/MC-142590) - StackOverflowError when using /stop with player logged in
- [MC-146854](https://bugs.mojang.com/browse/MC-146854) - Player movement favors x axis when in a corner
- [MC-156309](https://bugs.mojang.com/browse/MC-156309) - TNT entities dont properly collide with blocks , when being fires in X direction
- [MC-158696](https://bugs.mojang.com/browse/MC-158696) - Armor stand with a falling block creates ghost block.
- [MC-159952](https://bugs.mojang.com/browse/MC-159952) - Camera is shifting when trying to move against a block while in a corner when "Bobbing" is turned on
- [MC-165974](https://bugs.mojang.com/browse/MC-165974) - Game pushes east/west you when jump from the inside corner
- [MC-167763](https://bugs.mojang.com/browse/MC-167763) - Blindness does not work underwater for certain graphics cards
- [MC-170545](https://bugs.mojang.com/browse/MC-170545) - macOS: Crash upon entering fullscreen
- [MC-179315](https://bugs.mojang.com/browse/MC-179315) - Ruined portals never generate in superflat worlds by default
- [MC-184549](https://bugs.mojang.com/browse/MC-184549) - Fallling blocks visually jump up when falling through cobweb
- [MC-185545](https://bugs.mojang.com/browse/MC-185545) - Knockback Resistance on players is still affected by chance
- [MC-185695](https://bugs.mojang.com/browse/MC-185695) - Twisting vines don't reliably protect the player from fall damage
- [MC-187549](https://bugs.mojang.com/browse/MC-187549) - Horizontal velocity is not reset on +/- Z axis in 1.15.2+ when colliding with a wall
- [MC-187911](https://bugs.mojang.com/browse/MC-187911) - minecraft:endcity structure has no underscore while end_city_treasure does
- [MC-188086](https://bugs.mojang.com/browse/MC-188086) - Decorations and amethyst geodes get cut off on full chunk boundaries upon relog
- [MC-191765](https://bugs.mojang.com/browse/MC-191765) - Chat closes after death when gamerule doImmediateRespawn is true
- [MC-192361](https://bugs.mojang.com/browse/MC-192361) - /locate stronghold does not locate stronghold in Superflat worlds despite them generating
- [MC-193709](https://bugs.mojang.com/browse/MC-193709) - When looking exactly to the positive X direction you don't take kinetic damage when gliding with an elytra against a wall
- [MC-195692](https://bugs.mojang.com/browse/MC-195692) - Structure 'End City' and configured structure in vanilla end 'End City' use inconsistent identifiers
- [MC-197128](https://bugs.mojang.com/browse/MC-197128) - If a custom biome uses multiple configured structure features of the same type, only one of them can generate
- [MC-205232](https://bugs.mojang.com/browse/MC-205232) - Player can see farther in powder snow with blindness effect
- [MC-210612](https://bugs.mojang.com/browse/MC-210612) - Strongholds do not generate in certain customized worlds despite /locate saying otherwise
- [MC-214138](https://bugs.mojang.com/browse/MC-214138) - Placing block after jumping from an enchantment table causes desync
- [MC-214289](https://bugs.mojang.com/browse/MC-214289) - Pointed dripstone can replace blocks when generating
- [MC-216004](https://bugs.mojang.com/browse/MC-216004) - Wood pillars from mineshafts are generating on pointed dripstones
- [MC-216589](https://bugs.mojang.com/browse/MC-216589) - Abandoned Mineshafts don't delete dripstone in certain situations
- [MC-218739](https://bugs.mojang.com/browse/MC-218739) - Glow berries and glow lichen generation does not cause light updates across chunk borders
- [MC-221312](https://bugs.mojang.com/browse/MC-221312) - Decorations can occasionally replace logs that support mineshafts when generating
- [MC-223834](https://bugs.mojang.com/browse/MC-223834) - Pointed dripstone can form below some non-full (non-solid) blocks
- [MC-226359](https://bugs.mojang.com/browse/MC-226359) - The Zero-Width Non-Joiner shows as a "ZWNJ" box
- [MC-227358](https://bugs.mojang.com/browse/MC-227358) - Baby goats do not avoid powder snow on the same y level as them
- [MC-227995](https://bugs.mojang.com/browse/MC-227995) - Goats can't pathfind through open doors
- [MC-229313](https://bugs.mojang.com/browse/MC-229313) - Some blocks that negate fall damage don't reliably protect mobs at certain heights
- [MC-229966](https://bugs.mojang.com/browse/MC-229966) - java.lang.NullPointerException when referencing an invalid template pool in start_pool
- [MC-230905](https://bugs.mojang.com/browse/MC-230905) - Sky background is visible on certain reduced fog situations
- [MC-232290](https://bugs.mojang.com/browse/MC-232290) - Foxes will lay down in powder snow and not try to escape even when taking damage
- [MC-232822](https://bugs.mojang.com/browse/MC-232822) - Various structures not generating in superflat worlds
- [MC-233599](https://bugs.mojang.com/browse/MC-233599) - /spreadplayers command does not allow for negative "under" values
- [MC-234390](https://bugs.mojang.com/browse/MC-234390) - The minecraft:ui.button.click sound isn't played when clicking on the credits button in the main menu
- [MC-235574](https://bugs.mojang.com/browse/MC-235574) - Game crashes when replacing a block with a wall with blockstate up:false
- [MC-236693](https://bugs.mojang.com/browse/MC-236693) - "Done" button in controls submenu is very low
- [MC-236775](https://bugs.mojang.com/browse/MC-236775) - Biome Selector is disordered in other languages
- [MC-237110](https://bugs.mojang.com/browse/MC-237110) - Grass blocks can generate underwater
- [MC-237262](https://bugs.mojang.com/browse/MC-237262) - Crash report and tick profiling causes "Failed to find module info for \_" spam to log
- [MC-238114](https://bugs.mojang.com/browse/MC-238114) - Meadow trees can spawn without bee nests
- [MC-238696](https://bugs.mojang.com/browse/MC-238696) - Using '/locate stronghold' or throwing an eye of ender in the superflat, will be able to find the stronghold that do not actually exist
- [MC-238866](https://bugs.mojang.com/browse/MC-238866) - Snow / powder snow can generate underwater
- [MC-238977](https://bugs.mojang.com/browse/MC-238977) - Glow squids spawn in villager farms and wells in superflat worlds
- [MC-239031](https://bugs.mojang.com/browse/MC-239031) - Glitchy chunk rendering persists since 21w41a
- [MC-239436](https://bugs.mojang.com/browse/MC-239436) - Broken culling in very long caves
- [MC-239708](https://bugs.mojang.com/browse/MC-239708) - Superflat world "Water World" preset settings are obsolete for the 1.18 update
- [MC-240559](https://bugs.mojang.com/browse/MC-240559) - JFR JSON report's bytesPerSecond is incorrectly calculated
- [MC-241152](https://bugs.mojang.com/browse/MC-241152) - Powder snow is part of \#goat_spawnable_on block tag / Goats can spawn on powder snow
- [MC-241205](https://bugs.mojang.com/browse/MC-241205) - Sandstone generates 2-5 layers instead of 3-8 layers
- [MC-241232](https://bugs.mojang.com/browse/MC-241232) - Pointed dripstone doesn't properly maintain its shape when falling directly over a block
- [MC-241288](https://bugs.mojang.com/browse/MC-241288) - Support for custom structures has been removed
- [MC-242010](https://bugs.mojang.com/browse/MC-242010) - Snow Blocks, Powder Snow aren't a part of \#azalea_root_replaceable / Rooted dirt can't replace Snow Blocks & Powder Snow
- [MC-242331](https://bugs.mojang.com/browse/MC-242331) - Entities are displayed faster than chunks
- [MC-242543](https://bugs.mojang.com/browse/MC-242543) - Suffocation always uses the entity head center position for predicate and collision box
- [MC-242709](https://bugs.mojang.com/browse/MC-242709) - Pointed dripstone clusters create holes in the ground when generating in aquifers
- [MC-243015](https://bugs.mojang.com/browse/MC-243015) - Falling blocks at chunk generation cause tons of entities and (client-side) lag
- [MC-243152](https://bugs.mojang.com/browse/MC-243152) - Slimes spawn in "Redstone Ready" superflat worlds
- [MC-243190](https://bugs.mojang.com/browse/MC-243190) - Rooted dirt can replace cave vines
- [MC-243196](https://bugs.mojang.com/browse/MC-243196) - Driver view angle resets when another player enters or exits boat
- [MC-243245](https://bugs.mojang.com/browse/MC-243245) - Unable to select "What is Realms?" button using Tab
- [MC-243489](https://bugs.mojang.com/browse/MC-243489) - Console spam: Skipping update for removed player
- [MC-243619](https://bugs.mojang.com/browse/MC-243619) - Raid waves can spawn outside of simulation distance
- [MC-243766](https://bugs.mojang.com/browse/MC-243766) - Unable to put focus on "Copyright Mojang AB. Do not distribute" using Tab key
- [MC-244137](https://bugs.mojang.com/browse/MC-244137) - The option "level-seed" is not present in server.properties by default
- [MC-244164](https://bugs.mojang.com/browse/MC-244164) - Upgrade to 1.18 makes chests invisible and empty
- [MC-244174](https://bugs.mojang.com/browse/MC-244174) - Fog effect for void, blindness, water, lava & powder snow is cylindrical
- [MC-244682](https://bugs.mojang.com/browse/MC-244682) - Some custom dimensions settings can cause the server to stop running, but not crash
- [MC-244683](https://bugs.mojang.com/browse/MC-244683) - Tropical Fish in lush caves spawn in bubble columns
- [MC-244772](https://bugs.mojang.com/browse/MC-244772) - Can't double click to join a realm
- [MC-245345](https://bugs.mojang.com/browse/MC-245345) - Crash when reloading chunks
- [MC-245347](https://bugs.mojang.com/browse/MC-245347) - Flying with an elytra and colliding with floating flowing water sometimes doesn't reset fall damage
- [MC-245406](https://bugs.mojang.com/browse/MC-245406) - Memory leak leading to crashes when loading pre-1.18 chunks
- [MC-245416](https://bugs.mojang.com/browse/MC-245416) - Baby turtles suffocate on soul sand
- [MC-245772](https://bugs.mojang.com/browse/MC-245772) - Outdated chests' loot tables get deleted when updating to 1.18.1
- [MC-245817](https://bugs.mojang.com/browse/MC-245817) - Server constantly writes to disk at about 500kB/s
- [MC-245850](https://bugs.mojang.com/browse/MC-245850) - Buttons in the multiplayer warning menu are not selected in order when using the TAB key
- [MC-245857](https://bugs.mojang.com/browse/MC-245857) - Enchanting table registers block diagonally above the bookshelves as blocking said bookshelf
- [MC-245910](https://bugs.mojang.com/browse/MC-245910) - Campfires and hoppers cause constant chunk saving
- [MC-245925](https://bugs.mojang.com/browse/MC-245925) - Falling block visual glitch when dying with doImmediateRespawn
- [MC-245937](https://bugs.mojang.com/browse/MC-245937) - Flashing particles when boosting upwards with firework rockets
- [MC-246445](https://bugs.mojang.com/browse/MC-246445) - Game crashes when dispenser with shears is used on non-beehive block in \#beehives tag
- [MC-246449](https://bugs.mojang.com/browse/MC-246449) - Game crashes when villager tries to open non-door in \#wooden_doors tag
- [MC-246464](https://bugs.mojang.com/browse/MC-246464) - Game crashes when dispensing a bone meal in a warm ocean and there is a block with no facing block state in \#wall_corals
- [MC-246465](https://bugs.mojang.com/browse/MC-246465) - Lava can burn, damage, and destroy entities client-side and lead to de-sync
- [MC-247415](https://bugs.mojang.com/browse/MC-247415) - Game crashes if coral related block tags are empty during coral reef generation
- [MC-247636](https://bugs.mojang.com/browse/MC-247636) - Deleting a world no longer logs that a world is being deleted
- [MC-247871](https://bugs.mojang.com/browse/MC-247871) - Cannot invoke "com.mojang.datafixers.util.Either.left()" because "\$\$6" is null
- [MC-248095](https://bugs.mojang.com/browse/MC-248095) - Active repeating command blocks stop running after world conversion to 1.18
- [MC-248106](https://bugs.mojang.com/browse/MC-248106) - Parrot dying while using Riptide enchantment
- [MC-248163](https://bugs.mojang.com/browse/MC-248163) - Horrible server performance since changes to auto-saving in 1.18-pre6
- [MC-248225](https://bugs.mojang.com/browse/MC-248225) - Incorrect BlockPos getSquaredDistance() calculation
- [MC-248316](https://bugs.mojang.com/browse/MC-248316) - Minecraft server 1.18.1 crashes with OutOfMemoryError: Java heap space

 

# GET THE RELEASE

​To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play!

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar)

Report bugs here:

- [Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/summary)

Want to give feedback?

- Head over to our [feedback website](https://feedback.minecraft.net/) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
