---
title: Minecraft Java Edition - 26.4 Snapshot 3
date: 2026-10-06T14:36:48Z
updated: 2026-10-06T14:39:44Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49412490179853-Minecraft-Java-Edition-26-4-Snapshot-3
hash:
  h_01M48T7505QS8J9GJ643Y8GTDS: new-features
  h_01M48T75070FFY42BT2RV319X3: ice-caves
  h_01M48T7508QQX4GYKH45DDZ6Y3: ice-crystal
  h_01M48T7508Y9046GMZRHJMKN2K: icicle
  h_01M48T750A27YZA1T27AMBGMFA: frostbite
  h_01M48T750AZ7GD48ZE0GEGPYZ8: freezing-mob-effect
  h_01M48T750CZ2ZETF6CPKXQ5NZM: ice-ball
  h_01M48T750C4XNJR9VRZ99R6R05: changes
  h_01M48T750CEHX7CXZGA3T47906: minor-tweaks-to-blocks-items-and-entities
  h_01M48T750D5228SM41R3T1R3N3: ui
  h_01M48T750E518XWRV86H5EBS8P: friends
  h_01M48T750GZKDPACF3XPNHKKPC: player-options
  h_01M48T750HYG9EWNXPXPH7SXXG: other-players
  h_01M48T750J6WH7521WHQV91S6Y: player-reporting
  h_01M48T750K4GJQQE7D642TKCBG: debug-overlay
  h_01M48T750MD55ZX2M0Z7B0TAYK: technical-changes
  h_01M48T750MJTR4HWRJVVJXHWXF: data-pack-versions-1220-through-1230
  h_01M48T750MHGG3YE1PVRS9YTCM: world-generation
  h_01M48T750MSYQ551316G6RD2RG: features
  h_01M48T750NJQS5VZ6S733TKHK8: changed-minecraftspeleothem_cluster
  h_01M48T750PDZYXFYK3JBAWTGXJ: changed-minecraftlarge_dripstone-renamed-from-minecraftlarge_speleothem
  h_01M48T750PYSPQ2YYQDKKREDFH: noise-settings
  h_01M48T750QB1JEWBS8RHCY6NTF: feature-placements
  h_01M48T750TEB7JCDEHWTVRB3PK: block-sound-sets
  h_01M48T750WAACZYV1168SNBC4Y: tags
  h_01M48T750WJ60H3ARMCQH0FY2N: block-tags
  h_01M48T750Y3Y7J7MF9XWNZ11YP: item-tags
  h_01M48T750ZJ0GADRMB30HVMDS2: biome-tags
  h_01M48T750ZP7M7Y1BQCF89BTE2: block-sound-set-tags
  h_01M48T750Z1TAN52N4T086VQM3: particles
  h_01M48T75109MW7QESJXADMAKPK: added-minecraftfreezing
  h_01M48T7510PF340YFD6J2D6AM4: resource-pack-versions-980-through-1000
  h_01M48T7510ZEY510WJC0BA8A8Z: block-sprites
  h_01M48T75121WPFA86XQ85RETDP: item-sprites
  h_01M48T7513V988FKZQZXJJY23J: ui-sprites
  h_01M48T7515S73A413JP3FCWYQ1: entity-textures
  h_01M48T7516YGXH433TQP2X36FP: sounds
  h_01M48T75199BEN36KKH74A19RA: particles-1
  h_01M48T75193ZB8FRS2597HDHJX: item-models
  h_01M48T751APQKNKRYMN6572NK0: block-models
  h_01M48T751A5DA1TCFX5JZC4ZYN: fixed-bugs-in-264-snapshot-3
  h_01M48T751E42DE8VG4NXRR3A50: get-the-snapshot
---

**Published 10/6/26**

\
\
Brr! Does it feel colder all of a sudden? Minecraft LIVE revealed the first look at our next game drop – and it's frosty. Explore ice caves filled with glittering icicles and ice crystals, plus meet a not-so-chill new hostile mob! This frozen zombie variant is well adapted to colder conditions and can freeze players with its attacks. We're super excited to hear what you think about the new features. Make sure to visit our feedback site at https://aka.ms/mc-gamedrop_winter26 and leave your thoughts!

Beyond the frozen depths, we've also made a number of improvements to Friends! The Friends list has received a refreshed design, along with new search and sorting options to make it easier to find, organize, and manage your friends. So grab your friends and explore!

Happy ice-caving!

## New Features

- Added the new Ice Caves Biome
- Added Ice Crystals
- Added Icicles
- Added the Frostbite mob
- Added the Freezing mob effect
- Added the Ice Ball

### Ice Caves

- The Ice Cave is a new cave biome that can generate under the colder biomes in the Overworld
- It consists mainly of Packed Ice and Calcite
- Icicles generate hanging from the ceiling
- Large Icicles made of Packed Ice generate on the ground and hanging from the ceiling
- Patches of Snow occasionally generate on the ground
- Ores generate embedded in pockets of Stone and Deepslate
- Glow Lichen does not generate in this biome
- In addition to the mobs that normally spawn in caves, Strays and Frostbites can also spawn here
- Ice Crystals occasionally generate on the ground

### Ice Crystal

- A new crystal-like block similar to Amethyst Clusters
- Breaks if the support block is removed
- It emits light and can be placed in any direction

### Icicle

- A new speleothem-like block similar to Dripstone and Sulfur Spikes
- Icicles can be found all over the ceiling of ice caves
- Can naturally grow up to 5 blocks long when pointing downward
- Only grows in areas without nearby light sources and outside the Nether
- It can be placed in any direction and has a base, middle and tip variant
- Damages entities when it falls and deals extra damage to entities that land on it
- Pointed blocks break when exposed to nearby light sources or when placed in the Nether

### Frostbite

- The Frostbite is a zombie variant that can throw Ice Balls
- Spawns in cold/icy biomes
- Switches between melee and ranged combat based on target distance and whether they have Ice Balls
- Melee attacks apply Freezing, while ranged attacks throw Ice Balls
- Transforms into a Zombie when underwater for long enough
- Drops Rotten Flesh and Ice Balls
- It can stand on top of Powder Snow
- It is immune to freezing and does not get slowed by the Freezing effect or Powder Snow
- Zombies and Husks transform into Frostbites when inside Powder Snow

### Freezing Mob Effect

- The Freezing effect will cause players to shake and eventually deal damage
- Causes those affected to slowly become frozen as if in Powdered Snow for its duration
- Leather Armor protects from freezing, just like with Powder Snow, but will not keep the effect from being applied and will not remove the effect
- Mobs will take additional damage from Freezing while they are affected by this effect
  - Mobs that are vulnerable to Freezing have a five times multiplier to the damage taken
- Lingering Potion, Splash Potion, and Potion of Freezing can be brewed using Ice Balls
- Arrows of Freezing can be crafted by placing a Lingering Potion of Freezing in the middle of the crafting table surrounded by eight Arrows

### Ice Ball

- Ice Balls are new projectile used by the Frostbite
- They deal a small amount of damage and have knockback
- Deals 4 damage to entities it hits, scaling down with velocity
- Breaks on impact with blocks or entities, creating a particle effect and sound

## Changes

### Minor Tweaks to Blocks, Items and Entities

- Snow can now be placed on Packed Ice
- Snowballs now apply knockback to players

### UI

- Lightmap visualization is now configurable as lightmap_texture in debug options and appears in the Light group
  - Its visibility setting is saved with the debug profile
  - It can now be displayed alongside the FPS and network charts
- The Social Interactions screen has been replaced with the new Other Players screen
- The "Social Interactions" keybind has been renamed to "Other Players"
- The Friends button has received a new icon
- The "Visibility" option has been moved from Online Options into the Friends list
- The icon buttons in the pause menu have been reordered to match the main menu

#### Friends

- Updated the design of the Friends list
- Added searching
  - In the Friends tab, the profile name text box used for sending requests also functions as a search box
  - In the requests tab, a search box appears at the top if you have 15 or more requests
- Added sorting
  - Sort modes can be cycled through by pressing the new sort button
  - The current sort modes are:
    - Sort by who's online - friends who are listed as online appear at the top of the list
    - Sort by alphabetical order - friends are sorted according to the alphabetical order of their names
- Clicking on a player's icon in the Friends list now opens their Player Options
- Removed "Remove Friend" button
  - This functionality is now accessible through Player Options instead

#### Player Options

Player Options is a new screen accessible through both the Friends list and Other Players.

- It contains per-player social actions previously spread across the Friends list and Social Interactions
- These actions are:
  - Sending or canceling a friend request
  - Accepting or declining a friend request
  - Muting a player
  - Reporting a player
- Muting a player hides their chat messages until the next time you start the game
- Blocking players is managed through Other Players

#### Other Players

Other Players is a new menu which has been added to replace Social Interactions.

- Other Players is only available when playing on a world open to multiplayer
  - This includes:
    - Playing in singleplayer worlds open to LAN
    - Playing on dedicated servers
    - Playing on Realms
  - It can be opened by pressing the "Other Players" icon button in the pause menu
  - It can also be opened from in-game using the "Other Players" key ('P' by default)
- It lists the players currently online in the world you are in
- It lists players who are not online anymore, but may still be of interest:
  - Players who were just online but left
  - Players who recently sent messages in the chat
- Clicking on a player's icon in the list opens their Player Options

#### Player Reporting

- Redesigned the save/discard draft confirmation screen
- Player reports saved as drafts no longer prompt you to discard them upon exiting a world if they can be continued later
  - Chat reports can never be continued
  - Name reports can be continued if the reported player is in your Friends list
  - Skin reports can be continued if the reported player is in your Friends list
- Pressing "Quit Game" in the main menu will now give a warning if you have an unsent draft report that would be lost

#### Debug Overlay

- A new chunk_section_status shows the rendering status of chunks around you. This will impact performance at high view distances.
- The chunk load overlay has been split off from visualize_chunks_on_server and into a new chunk_load_status

## Technical Changes

- The Data Pack version is now 123.0
- The Resource Pack version is now 100.0

## Data Pack Versions 122.0 through 123.0

### World Generation

#### Features

##### Changed minecraft:speleothem_cluster

- Added placement_options - a field that contains various settings for the placement of the Speleothem cluster:
  - placement_mode - represented by an enum that is one of floor_and_ceiling, floor_only, ceiling_only
  - base_block_transformer - sets a state on the base block of the Speleothem block
    - none - the regular base block state used in Sulfur Spikes and Dripstone Spikes
    - set_attached - the state of the base block of the Icicle when it is attached to a surface
  - allow_water_placement - boolean indicating whether the Speleothem can be placed in water or not

##### Changed minecraft:large_dripstone (renamed from minecraft:large_speleothem)

- Added field base_block - Block State Provider, the block to build the large dripstone out of

#### Noise Settings

- Added new Noises:
  - ice_cave_gradient

#### Feature Placements

- Added the following Ore Placements:
  - ice_cave_ore_coal_upper
  - ice_cave_ore_coal_lower
  - ice_cave_ore_copper
  - ice_cave_ore_diamond
  - ice_cave_ore_diamond_medium
  - ice_cave_ore_diamond_large
  - ice_cave_ore_diamond_buried
  - ice_cave_ore_iron_upper
  - ice_cave_ore_iron_middle
  - ice_cave_ore_iron_small
  - ice_cave_ore_gold
  - ice_cave_ore_gold_lower
  - ice_cave_ore_lapis
  - ice_cave_ore_lapis_buried
  - ice_cave_ore_redstone
  - ice_cave_ore_redstone_lower
  - ice_cave_ore_andesite_upper
  - ice_cave_ore_andesite_lower
  - ice_cave_ore_diorite_upper
  - ice_cave_ore_diorite_lower
  - ice_cave_ore_gravel
- These are all identical to their non-ice-cave counterparts, only that they place a patch of stone or deepslate (depending on y-level) before placing the ore itself
  - They can replace Ice and Calcite as well

### Block Sound Sets

Added minecraft:block_sound_set registry containing definitions for sounds produced by different categories of blocks.

Format: object with fields:

- volume - a float between 0.00001 and 10.0, the relative volume at which all sounds will be played
  - If not present, defaults to 1.0
- pitch - a float between 0.00001 and 2.0, the relative pitch at which all sounds will be played
  - If not present, defaults to 1.0
- break_sound - Sound Event, the sound that will be played when the block gets broken
- step_sound - Sound Event, the sound that will be played when an entity walks on top of the block
- place_sound - Sound Event, the sound that will be played when the block gets placed
- hit_sound - Sound Event, the sound that will be played while the block is being destroyed
- fall_sound - Sound Event, the sound that will be played when an entity falls onto the block
- All sound fields are optional

### Tags

#### Block Tags

- Added block tag ice_cave_ore_replaceables to describe all blocks which are allowed to be replaced by ores within Ice Caves (in addition to stone_ore_replaceables, height_specific_ore_replaceables and deepslate_ore_replaceables)
- Added block tag melts_icicle_above to describe all blocks causing Icicles directly above to melt
- Added block tag large_icicle_replaceable to describe all blocks which are allowed to be replaced by Large Icicles within the Ice Caves biome
- Added several block tags to affect how mobs pathfind:
  - \#pathfinding/avoid_in_air - blocks to be avoided while flying, either due to danger our potential to get stuck
  - \#pathfinding/damage_cautious - blocks that will damage entities that walk through them, but are not considered dangerous enough to avoid entirely
  - \#pathfinding/damaging - blocks that will damage entities that walk through them
  - \#pathfinding/drop_down - blocks that can be dropped down through
  - \#pathfinding/leaves - blocks that are considered leaves
  - \#pathfinding/open - blocks that are considered completely open to walk through
  - \#pathfinding/powder_snow - blocks that are considered powder snow
  - \#pathfinding/rails - blocks that are considered rails
  - \#pathfinding/sticky - blocks that are considered sticky, causing slowed movement and inability to jump

#### Item Tags

- Added \#frostbite_preferred_weapons for items picked up and used by the Frostbite
- Added \#knocks_back_players_even_with_zero_damage for items which shall apply knockback even if they do 0 damage
- Added \#sheep_wool_dyes - items that can be used to dye a Sheep's wool
  - The color will be taken from the minecraft:dye component of the used item stack

#### Biome Tags

- Added \#spawns_strays_without_powder_snow to describe all biomes which allow the spawning of strays without requiring powder snow on the surface above them

#### Block Sound Set Tags

- Added \#sounds_wooden - block sound sets which when stepped on cause Horses to produce a galloping sound

### Particles

- Removed particle type minecraft:item_snowball

#### Added minecraft:freezing

- Emitted by Entities which are affected by the Freezing mob effect
- Has no fields

## Resource Pack Versions 98.0 through 100.0

### Block Sprites

- Added new Block texture:
  - block/ice_crystal.png
- Added new Block textures:
  - block/ice_crystal.png
  - block/icicle_down_base.png
  - block/icicle_down_frustum.png
  - block/icicle_down_middle.png
  - block/icicle_down_tip.png
  - block/icicle_down_tip_merge.png
  - block/icicle_side.png
  - block/icicle_top.png

### Item Sprites

- Added new Item texture:
  - item/ice_crystal.png
- Added new Item texture:
  - item/frostbite_spawn_egg.png
  - item/ice_ball.png
  - item/ice_crystal.png
  - item/icicle.png

### UI Sprites

- Added new UI textures:
  - mob_effect/freezing.png
  - friends/background_light.png
  - friends/presence_all.png
  - friends/presence_limited.png
  - friends/presence_none.png
  - friends/profile.png
  - friends/profile_highlighted.png
  - friends/sort_alphabetical.png
  - friends/sort_presence.png
  - friends/tab_selected.png
  - pause_menu/other_players.png
- The following textures have been renamed:
  - friends/button.png -\> friends/tab.png
  - friends/button_highlighted.png -\> friends/tab_highlighted.png
  - friends/loading.png -\> widget/loading.png
  - pause_menu/social_interactions.png -\> pause_menu/feedback.png
- The following textures have been removed:
  - friends/button_disabled.png
  - friends/remove.png
  - pause_menu/player_reporting.png
  - toast/social_interactions.png

### Entity Textures

- Added new Entity textures:
  - entity/zombie/frostbite.png
  - entity/zombie/frostbite_baby.png
  - entity/zombie/frostbite_outer_layer.png

### Sounds

- Added new sound events:
  - entity.frostbite.ambient
  - entity.frostbite.death
  - entity.frostbite.hurt
  - entity.frostbite.step
  - block.ice.break
  - block.ice.fall
  - block.ice.hit
  - block.ice.place
  - block.ice.step
  - block.ice_crystal.break
  - block.ice_crystal.fall
  - block.ice_crystal.hit
  - block.ice_crystal.place
  - block.ice_crystal.step
  - block.icicle.break
  - block.icicle.fall
  - block.icicle.hit
  - block.icicle.place
  - block.icicle.step
  - block.icicle.land
  - entity.ice_ball.break
  - entity.ice_ball.throw

### Particles

- Added new Particle textures:
  - particle/freezing_0.png
  - particle/freezing_1.png
  - particle/freezing_2.png
  - particle/freezing_3.png
  - particle/freezing_4.png
  - particle/freezing_5.png

### Item Models

- Added new Item Models:
  - item/icicle

### Block Models

- Added new Block Models:
  - block/icicle
  - block/icicle_base

## Fixed bugs in 26.4 Snapshot 3

- [MC-212616](https://bugs.mojang.com/browse/MC-212616) - The dye staining sound does not play when dyes are used on tamed wolves or cats
- [MC-303468](https://bugs.mojang.com/browse/MC-303468) - Pets can be teleported to the incorrect coordinates when going through a nether portal
- [MC-306017](https://bugs.mojang.com/browse/MC-306017) - The main arm doesn't swing when making a tamed wolf sit or stand while holding a dye matching its collar color
- [MC-307830](https://bugs.mojang.com/browse/MC-307830) - The game's framerate is limited to 20 fps with the Vulkan rendering backend on some systems
- [MC-308037](https://bugs.mojang.com/browse/MC-308037) - Unselected tabs in the friends menu show white text instead of gray
- [MC-308051](https://bugs.mojang.com/browse/MC-308051) - The icons on several buttons do not adhere to the UI pixel grid
- [MC-308747](https://bugs.mojang.com/browse/MC-308747) - The social interactions button in the game menu is grayed out in LAN worlds with no players
- [MC-308994](https://bugs.mojang.com/browse/MC-308994) - The Chat Restrictions screen does not display Xbox communication settings that affect the chat
- [MC-309896](https://bugs.mojang.com/browse/MC-309896) - The options.allowFriendRequests.tooltip and options.inGameNotification.tooltip strings lack a period, unlike similar strings
- [MC-309906](https://bugs.mojang.com/browse/MC-309906) - The term "Friends List" is inconsistently capitalized across strings
- [MC-310124](https://bugs.mojang.com/browse/MC-310124) - Leaving a menu that was opened using the keyboard doesn't select its button from the previous screen
- [MC-310237](https://bugs.mojang.com/browse/MC-310237) - The gui.friends.error.generic string uses an em dash, unlike similar strings
- [MC-310854](https://bugs.mojang.com/browse/MC-310854) - The buttons in the friends screen have inconsistent outlines
- [MC-311932](https://bugs.mojang.com/browse/MC-311932) - The Caps Lock key can no longer activate sprinting, sneaking, etc. when the control in question is set to "Hold"
- [MC-311963](https://bugs.mojang.com/browse/MC-311963) - The subtitles.block.poplar_leaves.ambient string uses a present participle instead of the present tense, unlike similar strings
- [MC-312120](https://bugs.mojang.com/browse/MC-312120) - Enabling the "Exclusive Fullscreen" option while the game is windowed and then entering non-exclusive fullscreen does not update the "Exclusive Fullscreen" option's button to "OFF"
- [MC-312198](https://bugs.mojang.com/browse/MC-312198) - Almost no small mushrooms generate on mushroom islands anymore
- [MC-312213](https://bugs.mojang.com/browse/MC-312213) - The game crashes when using custom Superflat presets containing air

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2d89c95c030e635387448f332961074ce1adbb4b/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
