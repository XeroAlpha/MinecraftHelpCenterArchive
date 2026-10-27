---
title: Minecraft Java Edition - 26.4 Snapshot 6
date: 2026-10-27T15:09:27Z
updated: 2026-10-27T15:09:53Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49936802465805-Minecraft-Java-Edition-26-4-Snapshot-6
hash:
  h_01M5YYBD384DQJGHEFB846326P: new-features
  h_01M5YYBD3A1X59HEER5JH2ABGG: snow-bricks
  h_01M5YYBD3DQKQND0W44HS29F9D: cold-sulfur-cube-archetype
  h_01M5YYBD3EP2FV7X94HAA1CFZY: changes
  h_01M5YYBD3FX1J0CA8YPX95F7QE: minor-tweaks-to-blocks-items-and-entities
  h_01M5YYBD3FSW00V7WN02203VBC: sounds
  h_01M5YYBD3HYFX4MNXTXD87FWEV: default-jvm-options
  h_01M5YYBD3HZC06T6PA7BS75E7H: technical-changes
  h_01M5YYBD3JEG07TQ16F010RCNV: data-pack-version-1251
  h_01M5YYBD3JY7H8TMYD5W6G5GBJ: sulfur-cube-archetypes
  h_01M5YYBD3M4SDVMKWVEN8SP5MT: world-generation
  h_01M5YYBD3NRMY3NZ38MS77ZJAV: density-functions
  h_01M5YYBD3NC94435GK4WKY4ZCN: changed-gradient
  h_01M5YYBD3QH3AQDC0KXET74EZ3: added-domain_warp
  h_01M5YYBD3WXH3EVW746NFV2HBZ: structure-pool-elements
  h_01M5YYBD3WFKTP8E3BKXKABQEH: added-optional-corner_constraint-field
  h_01M5YYBD46DP4QAJG3XED172TH: tags
  h_01M5YYBD46W8Y19M9BF62PCE13: fluid-tags
  h_01M5YYBD47VH99W8RR48P1K9VE: item-tags
  h_01M5YYBD47ZHETE7EB6YXHS3YB: entity-type-tags
  h_01M5YYBD47MZW2R1PN3W18RBGG: resource-pack-version-1010
  h_01M5YYBD48H591107FSERZ18B0: block-sprites
  h_01M5YYBD495CX47KJ0VQM88YZY: sounds-1
  h_01M5YYBD49DJ6P3GEAMMYXT2XS: block-models
  h_01M5YYBD4ANWSZWRM1P6J508MK: fixed-bugs-in-264-snapshot-6
  h_01M5YYBD4KNJJMYK7M2518FPPW: get-the-snapshot
---

**Published:** 10/27/26

It's getting chilly in here! This week's 26.4 Snapshot 6 brings snow bricks, a new set of building blocks for anyone who wants their builds to look even cooler ;) We're also adding a new archetype to the Sulfur Cube family: the Cold Sulfur Cube. It's a frosty little friend that knows a thing or two about ice.

Stay cool and happy building!

## New Features

- Added Snow Bricks
- Added new Cold Sulfur Cube archetype

### Snow Bricks

- Snow Bricks can be crafted from 2x2 Snow Blocks
- Snow Bricks have a Slab, Stair, and Wall variant
- A Stonecutter cannot be used to craft Snow Brick Slabs, Stairs, and Walls
- Snow Bricks belong to the Fast Sliding Sulfur Cube archetype
- Snow Bricks only drop themselves if mined with a Shovel

### Cold Sulfur Cube Archetype

- A new Sulfur Cube archetype that belongs to the special archetype category
- It has the same properties as the Fast Sliding archetype, but floats and replaces water below it with a disk of Frosted Ice when it moves, similar to the Frost Walker enchantment
- Air blocks above the water block are required for Frosted Ice placement
- Will only place Frosted Ice if the Sulfur Cube starts its movement while it is on ground
- Used when the Sulfur Cube absorbs a Blue Ice block

## Changes

- Changed the default JVM options
- Mobs falling through lava may take slightly less fall damage in some cases

### Minor Tweaks to Blocks, Items and Entities

- All Packed Ice Brick variants will now require a pickaxe to be mined in order to drop themselves
- Brittle Ice will no longer crack when a Stray is standing on top of it

### Sounds

- Added ambient sounds to Ice Crystals
  - An Ice crystal block has a chance of playing an ambient sound if it has a block of packed ice below

### Default JVM Options

- The game now automatically sets its Java heap size based on your system's RAM, using up to 25% with a maximum of 4 GB

## Technical Changes

- The Data Pack version is now 125.1
- The Resource Pack version is now 101.0

## Data Pack Version 125.1

### Sulfur Cube Archetypes

- Added new location_based_effects field - an optional list of location-based effects
  - The format for each entry is exactly the same as a location-based enchantment effect
  - Level-based values in this definition will always be evaluated with level 1

### World Generation

#### Density Functions

##### Changed gradient

- The from_coordinate and to_coordinate fields now additionally accept a Vertical Anchor, as long as axis is y

##### Added domain_warp

Samples an input function by applying an offset to each sampled coordinate.

Note: if the offsets change rapidly by large amount, performance may degrade significantly. This function should be used sparingly.

Format: object with fields:

- input - Density Function, the input function to sample
- offset_x - Density Function, the offset to apply to sampled X coordinates
  - The result is implicitly truncated to an integer
  - If not specified, defaults to: 0.0
- offset_y - Density Function, the offset to apply to sampled Y coordinates
  - The result is implicitly truncated to an integer
  - If not specified, defaults to: 0.0
- offset_z - Density Function, the offset to apply to sampled Z coordinates
  - The result is implicitly truncated to an integer
  - If not specified, defaults to: 0.0

At least one of offset_x, offset_y, or offset_z must be specified.

#### Structure Pool Elements

##### Added optional corner_constraint Field

Limits the placement of a structure pool element this by sampling a Density Function at the corners of its bounding box.

Format: list of objects with fields:

- density_function - the Density Function to sample at the bounding box' corner
- acceptable_density - inclusive range of doubles, a corner's sampled density within this range counts as "inside"
- padding - integer between 0 and 8, the padding of the bounding box before sampling its corners
  - If not present, defaults to 0
- corners - one of all, top, or bottom, which corners to check
  - If not present, defaults to all
- required_corners - range between 1 and 8, the number of corners that must be inside acceptable_density for the check to pass

### Tags

#### Fluid Tags

- Added \#swimmable for fluids that players can swim in

#### Item Tags

- Added \#sulfur_cube_archetype/cold - items that can be placed inside the Sulfur Cube that turns it into a Cold Sulfur Cube archetype

#### Entity Type Tags

- Added \#swimming - entity types that are considered swimming in water
- Added \#flying - entity types that are considered flying

## Resource Pack Version 101.0

### Block Sprites

- Added new Block textures:
  - block/snow_bricks.png

### Sounds

- Added new sound events:
  - block.ice_crystal.ambient

### Block Models

- Removed Block Models:
  - block/cube_top

## Fixed bugs in 26.4 Snapshot 6

- [MC-127491](https://bugs.mojang.com/browse/MC-127491) - Drowned, zombie villagers and zombified piglins have the DrownedConversionTime and InWaterTime tags
- [MC-269319](https://bugs.mojang.com/browse/MC-269319) - Bringing the camera close to the player in third-person view underwater disables the water overlay and zoom effect
- [MC-308361](https://bugs.mojang.com/browse/MC-308361) - Small sulfur cubes that split from bucketed sulfur cubes can despawn
- [MC-311992](https://bugs.mojang.com/browse/MC-311992) - The code used to join a Realm is inconsistently referred to as both an "Invite Code" and a "Join Code"
- [MC-311994](https://bugs.mojang.com/browse/MC-311994) - Delayed block breaking completes early or stalls
- [MC-312016](https://bugs.mojang.com/browse/MC-312016) - The water overlay does not render when the player's head is against a block above them
- [MC-312270](https://bugs.mojang.com/browse/MC-312270) - The game crashes when trying to open the inventory while spectating a mob
- [MC-312384](https://bugs.mojang.com/browse/MC-312384) - Standing in fire or lava while under the effect of Freezing spams the fire extinguishing sound
- [MC-312450](https://bugs.mojang.com/browse/MC-312450) - Jumping right before breaking a block makes the block reappear for a short amount of time
- [MC-312489](https://bugs.mojang.com/browse/MC-312489) - The "How Did We Get Here?" advancement doesn't require the Freezing effect
- [MC-312490](https://bugs.mojang.com/browse/MC-312490) - The "A Furious Cocktail" advancement doesn't require the Freezing effect
- [MC-312501](https://bugs.mojang.com/browse/MC-312501) - The multiplayer.other_players.not_available string is missing a verb and is improperly capitalized
- [MC-312529](https://bugs.mojang.com/browse/MC-312529) - The gui.player_options.unfriend.confirm string refers to the friends list as "your Friends", unlike similar strings
- [MC-312530](https://bugs.mojang.com/browse/MC-312530) - The options.hideMatchedNames.tooltip string refers to muted players as "hidden players", unlike similar strings
- [MC-312531](https://bugs.mojang.com/browse/MC-312531) - The gui.abuseReport.discard.draft.overwrite string uses the words "report draft" instead of "draft report", unlike similar strings
- [MC-312532](https://bugs.mojang.com/browse/MC-312532) - Zombie villagers spawn as their plains variant in ice caves instead of the snowy one
- [MC-312533](https://bugs.mojang.com/browse/MC-312533) - The gui.abuseReport.draft.restart string uses the verb "Start" instead of "Create", unlike similar strings
- [MC-312574](https://bugs.mojang.com/browse/MC-312574) - Entities can crack and destroy brittle ice when the mob_griefing game rule is set to false
- [MC-312576](https://bugs.mojang.com/browse/MC-312576) - Brittle ice can be cracked and destroyed by players inside spawn protection
- [MC-312579](https://bugs.mojang.com/browse/MC-312579) - The game crashes when opening the inventory while a below_name scoreboard objective is active
- [MC-312584](https://bugs.mojang.com/browse/MC-312584) - The chat messages report button claims chat is disabled or blocked when reporting friends from the title screen
- [MC-312589](https://bugs.mojang.com/browse/MC-312589) - Frostbites, zombie villagers and zombified piglins have the FrostbiteConversionTime tag
- [MC-312592](https://bugs.mojang.com/browse/MC-312592) - Gravel blobs generate in a different order than before, causing feature order cycles in data packs
- [MC-312606](https://bugs.mojang.com/browse/MC-312606) - Sculk sensors are activated upon jukeboxes automatically switching discs in playlists
- [MC-312610](https://bugs.mojang.com/browse/MC-312610) - Shulkers do not crack brittle ice when standing on it
- [MC-312624](https://bugs.mojang.com/browse/MC-312624) - Lily pads cannot be placed on brittle ice
- [MC-312625](https://bugs.mojang.com/browse/MC-312625) - Iron golems summoned by villagers can spawn on brittle ice
- [MC-312629](https://bugs.mojang.com/browse/MC-312629) - Ice caves generate gravel, diorite, and andesite blobs twice
- [MC-312632](https://bugs.mojang.com/browse/MC-312632) - Icicles and sulfur spikes are not part of the \#dangerous_for_teleportation block tag, unlike pointed dripstone
- [MC-312638](https://bugs.mojang.com/browse/MC-312638) - Music discs ejected from jukeboxes with chests above them spawn inside the chests
- [MC-312639](https://bugs.mojang.com/browse/MC-312639) - Opening a screen while in a world automatically focuses a button if the tab or any of the arrow keys was used previously
- [MC-312651](https://bugs.mojang.com/browse/MC-312651) - The bottom face of a jukebox uses its new texture when the "Programmer Art" resource pack is enabled
- [MC-312665](https://bugs.mojang.com/browse/MC-312665) - The game crashes in the pause menu when the music toast is on and a music track cannot be played
- [MC-312678](https://bugs.mojang.com/browse/MC-312678) - Spruce wall hanging signs use the oak map color on maps
- [MC-312682](https://bugs.mojang.com/browse/MC-312682) - Lava can start fires next to crimson and warped shelves
- [MC-312775](https://bugs.mojang.com/browse/MC-312775) - UI elements from screens behind popups can be hovered over with the mouse cursor
- [MC-312778](https://bugs.mojang.com/browse/MC-312778) - Red and brown mushrooms can visually float on top of walls that have the up block state property set to false
- [MC-312780](https://bugs.mojang.com/browse/MC-312780) - Oak, birch, spruce, and jungle trees no longer convert the block below their trunks into dirt
- [MC-312783](https://bugs.mojang.com/browse/MC-312783) - Consumable and equippable items lose their default sounds after upgrading worlds
- [MC-312801](https://bugs.mojang.com/browse/MC-312801) - Magma cubes stop being visible at a shorter distance than slimes and sulfur cubes of the same size
- [MC-312804](https://bugs.mojang.com/browse/MC-312804) - Some villager trades still unexpectedly differ from 1.21.11

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/a022ed5cfa7e7f8a52c91b21ecf5a976b5a516f9/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
