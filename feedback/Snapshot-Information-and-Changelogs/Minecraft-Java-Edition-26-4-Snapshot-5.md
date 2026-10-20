---
title: Minecraft Java Edition - 26.4 Snapshot 5
date: 2026-10-20T14:21:45Z
updated: 2026-10-20T14:24:58Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49759185020173-Minecraft-Java-Edition-26-4-Snapshot-5
hash:
  h_01M5CTXXJGST6DF965DW3NH6A7: new-features
  h_01M5CTXXJGAH6BD87ER35DDVXB: packed-ice-bricks
  h_01M5CTXXJH3JKK9H9J0X2ASYAZ: advancements
  h_01M5CTXXJHWM870EKT51AGJ8W1: changes
  h_01M5CTXXJJZ79EKHFDYK373KEZ: sounds
  h_01M5CTXXJJSR15WWKBMNGXM8K4: video-settings
  h_01M5CTXXJJH25TFAA0K3Q64BNB: prefer-dxgi-present-video-setting
  h_01M5CTXXJKV7V522J89F3WN9QR: technical-changes
  h_01M5CTXXJKQM044NJE1H0V57AG: network-protocol
  h_01M5CTXXJK5GKPK6HFSVWV7FZ7: modified-login-protocol
  h_01M5CTXXJMGG33N1A3DSAJB5VY: data-pack-version-1250
  h_01M5CTXXJMGH8X04GVQMDV5FTZ: data-components
  h_01M5CTXXJMB1DHFCFV2AQ7Y3B5: minecraftconsumable
  h_01M5CTXXJM343TR05N6BWJ8DV4: minecraftequippable
  h_01M5CTXXJN2QP44F81E1RY7Y6F: world-generation
  h_01M5CTXXJNWAK37ZFM2TXFVS2A: features
  h_01M5CTXXJNYT3X2FPZ3NMRA1HX: changed-ore-and-scattered_ore
  h_01M5CTXXJNHJD4KSFGP3R3GF4D: density-functions
  h_01M5CTXXJNE84FN3SQ7CT4M6KX: changed-upscale-renamed-from-interpolated
  h_01M5CTXXJTD80GS4J2YYCG4W9E: tags
  h_01M5CTXXJTGAXR9TGN1TEPRK89: biome-tags
  h_01M5CTXXJT0EM632T2N4YHHC46: entity-type-tags
  h_01M5CTXXJVXGZYV2PNVCE1JBES: resource-pack-version-1002
  h_01M5CTXXJVBDCW77RFQYG6FDW4: block-sprites
  h_01M5CTXXJW8601DCHBSHYAMRVW: fixed-bugs-in-264-snapshot-5
  h_01M5CTXXK0AYJK0MRYGNG7C94H: get-the-snapshot
---

**Published** 10/20/26

\
This week's snapshot comes packed with a bunch of new things for you to try out! In 26.4 Snapshot 5, we're introducing Packed Ice Bricks, including a bunch of variants, and YES, they work in the Stonecutter! We've also got a frosty new advancement for anyone who decides to fight ice with ice and take out a Frostbite with an Ice Ball.

Happy Mining!

## New Features

- Added Packed Ice Bricks

### Packed Ice Bricks

- Packed Ice Bricks can be crafted from 2x2 Packed Ice
- Packed Ice Bricks have a Slab, Stair, Wall, and Chiseled variant
- Packed Ice Brick Slabs, Stairs, Walls, as well as Chiseled Packed Ice can also be crafted using a Stonecutter
- Packed Ice Bricks and Chiseled Packed Ice belong to the Fast Sliding Sulfur Cube archetype

### Advancements

- Added new "What Goes Around Comes Around" Adventure advancement for killing a Frostbite with an Ice Ball

## Changes

- Mobs can now break Decorated Pots, Chorus Flowers and Speleothem blocks with projectiles in an adventure mode world, unless the mob_griefing gamerule is set to false

### Sounds

- Added ambient sounds to regular Ice block
  - When an Ice block is surrounded by at least 8 Ice blocks in all horizontal directions (east, west, north, and south), with one Air block above and one Water block below, it has a chance to emit a sound

### Video Settings

#### "Prefer DXGI Present" Video Setting

- This is a new option to attempt to use DirectX to present the game
- This only exists on Windows, and not all hardware supports it
- The default is off, and we consider this option "experimental" - it may not work for everyone
- With DXGI enabled, you *may* see improvements with IME support, Variable Refresh Rate support, and faster alt-tabbing whilst in fullscreen mode

## Technical Changes

- The Data Pack version is now 125.0
- The Resource Pack version is now 100.2

### Network Protocol

#### Modified Login Protocol

- Encryption and compression must now be explicitly applied by the server by sending one of two packets that carry connection options
  - The client must acknowledge the change with a matching packet
  - Every packet sent and received by the client after the acknowledgement will use the new settings
  - Previously changes were applied immediately on both sides, which might've lead to malformed packets
- Packets that can carry options:
  - minecraft:login_finished (clientbound) and minecraft:login_acknowledged (serverbound)
  - minecraft:apply_options (clientbound) and minecraft:options_applied (serverbound)

## Data Pack Version 125.0

### Data Components

#### minecraft:consumable

- The sound field is now fully optional (defaulted to minecraft:entity.generic.eat before)

#### minecraft:equippable

- The equip_sound field is now fully optional (defaulted to minecraft:item.armor.equip_generic)
- The shearing_sound field is now fully optional (defaulted to minecraft:item.shears.snip)

### World Generation

#### Features

##### Changed ore and scattered_ore

- Blocks discarded due to air exposure will no longer fall through to the next replacement rule

#### Density Functions

##### Changed upscale (renamed from interpolated)

Samples the input function at a reduced resolution, and upscales on each axis with the specified modes. Modes that require more samples will generally perform worse. Upscaling is performed by axis in order: Z, X, then Y.

Format: object with fields:

- input - Density Function, the input function to sample
- x, y, z - object with fields, the configuration for this axis
  - mode - one of: nearest_neighbor, interpolate_linear, interpolate_cosine, interpolate_cubic, b_spline_cubic, the mode to use
    - nearest_neighbor
      - 1 sample per axis
      - Value is discontinuous across cell boundaries, gradient is always 0
      - Values at cell vertices always equal the cell value
    - interpolate_linear
      - 2 samples per axis
      - Value is continuous, gradient is constant within a cell but discontinuous across cell boundaries
      - Values at cell vertices always equal the cell value
    - interpolate_cosine
      - 2 samples per axis
      - Value and gradient are continuous
      - Gradient is 0 at cell boundaries
      - Values at cell vertices always equal the cell value
    - interpolate_cubic
      - 4 samples per axis
      - Value and gradient are continuous
      - Values at cell vertices always equal the cell value
    - b_spline_cubic
      - 4 samples per axis
      - Value and gradient are continuous
      - Values at cell vertices do not necessarily equal the cell value
  - cell_size - integer between 1 and 64, the size of each upscaling cell

### Tags

#### Biome Tags

- Added \#spawns_ice_variants_underground to describe all biomes which allow the spawning of cold variants without requiring sky access
- Renamed spawns_strays_without_powder_snow to spawns_cold_variants_underground

#### Entity Type Tags

- Replaced the \#ignores_poison_and_regen tag with separate \#immune_to_poison and \#immune_to_regeneration tags
- Renamed the \#freeze_immune_entity_types tag to \#immune_to_freezing
- Added \#immune_to_wither for mobs that are immune to the wither effect
- Added \#immune_to_weakness for mobs that are immune to the weakness effect

## Resource Pack Version 100.2

### Block Sprites

- Added new Block textures:
  - block/chiseled_packed_ice.png
  - block/packed_ice_bricks.png

## Fixed bugs in 26.4 Snapshot 5

- [MC-25976](https://bugs.mojang.com/browse/MC-25976) - Blocks broken by flowing fluids do not produce particles or make breaking sounds
- [MC-170550](https://bugs.mojang.com/browse/MC-170550) - The snowy_shepherds_house_1 village structure never generates
- [MC-270793](https://bugs.mojang.com/browse/MC-270793) - Mobs with multiple entity type tags corresponding to effect immunity only respect one
- [MC-308621](https://bugs.mojang.com/browse/MC-308621) - Race condition in the dedicated server's compression setup
- [MC-312316](https://bugs.mojang.com/browse/MC-312316) - Creakings still try to attack players after they switch to Creative mode
- [MC-312360](https://bugs.mojang.com/browse/MC-312360) - Paintings break outside the world border
- [MC-312377](https://bugs.mojang.com/browse/MC-312377) - The bottom face of icicles on the floor is rotated 180 degrees
- [MC-312386](https://bugs.mojang.com/browse/MC-312386) - The \#spawns_strays_without_powder_snow biome tag's name makes no sense
- [MC-312404](https://bugs.mojang.com/browse/MC-312404) - Frostbites can naturally spawn in normal caves under cold biomes, unlike strays
- [MC-312431](https://bugs.mojang.com/browse/MC-312431) - Red and brown mushrooms now spread incorrectly
- [MC-312496](https://bugs.mojang.com/browse/MC-312496) - Icicle models use the deprecated shade field
- [MC-312497](https://bugs.mojang.com/browse/MC-312497) - Template models for icicles are not prefixed with template\_
- [MC-312563](https://bugs.mojang.com/browse/MC-312563) - The icicle in the Creative mode inventory is placed in the wrong spot
- [MC-312587](https://bugs.mojang.com/browse/MC-312587) - The game crashes when trying to render the hidden tooltips of music discs in jukebox playlists
- [MC-312612](https://bugs.mojang.com/browse/MC-312612) - Jukeboxes can pull from double chests if a single chest was turned into a double chest after being placed
- [MC-312613](https://bugs.mojang.com/browse/MC-312613) - Jukeboxes don't pull discs from single chests that are created by breaking a double chest
- [MC-312621](https://bugs.mojang.com/browse/MC-312621) - Zombies, husks, drowned, strays, and frostbites are now affected by Poison and Regeneration
- [MC-312630](https://bugs.mojang.com/browse/MC-312630) - Ruined portals don't generate in ice caves
- [MC-312631](https://bugs.mojang.com/browse/MC-312631) - Ice caves are not part of the \#stronghold_biased_to biome tag
- [MC-312640](https://bugs.mojang.com/browse/MC-312640) - Any mouse button can be used to select entries in the statistics menu
- [MC-312641](https://bugs.mojang.com/browse/MC-312641) - Any mouse button can be used to open links on the death screen
- [MC-312642](https://bugs.mojang.com/browse/MC-312642) - Pointed dripstone below flowing lava drips water instead of lava
- [MC-312644](https://bugs.mojang.com/browse/MC-312644) - Dispensers filling glass bottles don't play the bottle filling sound
- [MC-312645](https://bugs.mojang.com/browse/MC-312645) - Dispensers equipping chests on donkeys, mules or llamas don't play the chest equipping sound
- [MC-312652](https://bugs.mojang.com/browse/MC-312652) - Flint and steel and fire charges don't make a sound when igniting sulfur cubes holding TNT
- [MC-312654](https://bugs.mojang.com/browse/MC-312654) - Dispensers consume the durability of flint and steel and play their clicking sound despite there being nothing to ignite
- [MC-312669](https://bugs.mojang.com/browse/MC-312669) - Any mouse button can be used to close the friends and other players menus when clicking outside of them
- [MC-312693](https://bugs.mojang.com/browse/MC-312693) - Projectiles shot by mobs can no longer break decorated pots, chorus flowers, pointed dripstone, sulfur spikes, or icicles
- [MC-312715](https://bugs.mojang.com/browse/MC-312715) - The game crashes when a jukebox in a playlist has a negative playlist_position value
- [MC-312717](https://bugs.mojang.com/browse/MC-312717) - Mobs can spawn on honey blocks

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/ed041232700614aeaaf72a6ea88b7f58ca3f8e4a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
