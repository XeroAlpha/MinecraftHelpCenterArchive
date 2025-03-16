---
title: Minecraft Java Edition - Snapshot 24w44a
date: 2024-10-30T14:13:49Z
updated: 2024-10-30T14:13:56Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/31477609902477-Minecraft-Java-Edition-Snapshot-24w44a
hash:
  h_01JBEW8GS1G5ACE1PSQ554ZPYB: new-features
  h_01JBEW8GS1ZDMCBQSND8ZX7MTR: added-eyeblossoms
  h_01JBEW8GS1JB8PD0EWWVMHEGA1: added-resin-clump-block-of-resin-resin-brick-and-a-family-of-resin-bricks-blocks
  h_01JBEW8GS1HPRFX5NEX351R413: changes
  h_01JBEW8GS1EW11BQXJK2P8KH7P: required-tools-for-drops
  h_01JBEW8GS1XSRPMZMMJSME1DEH: pale-garden
  h_01JBEW8GS1GYT2KGQHNYY48FAN: creaking-heart
  h_01JBEW8GS2Z5E5WS99GYNBN024: pale-oak-tree
  h_01JBEW8GS2RS45X375BSVG1FTJ: pale-moss-block
  h_01JBEW8GS2JA8A9WR6827W1C8B: pale-hanging-moss
  h_01JBEW8GS257YRHPW1S2TNTF8D: creaking-mob
  h_01JBEW8GS2A8M3Y98E8C3GCJED: technical-changes
  h_01JBEW8GS2DM8MG74S63PJ7N69: data-pack-version-58
  h_01JBEW8GS2DFJXRCNCC1K5DGXM: commands
  h_01JBEW8GS2PN98RV143Q0SPJKK: attributecommand
  h_01JBEW8GS2F7ZQFBQ05Y3GK605: tnt-minecart-data
  h_01JBEW8GS2XM0P5YSPWSNFRNZ5: text-components
  h_01JBEW8GS2SMGST13MMWBJ5JBQ: resource-pack-version-43
  h_01JBEW8GS2D3Z1VRGSGQCVX0SZ: gui-sprites
  h_01JBEW8GS30TVXN64Y750B8SYS: fixed-bugs-in-24w44a
  h_01JBEW8GS4KMK00V2CHSHX5EGF: get-the-snapshot
---

We're back in the shipping room to serve you the first snapshot release for Minecraft: Java Edition 1.21.4! It's coming in hot with some new pale goodies in the form of Eyeblossoms and Resin, two new additions to the Pale Garden biome. You'll also find that leaves will now fall from the Pale Oak trees in said biome, something we hope will crank up the eerie atmosphere even further. In addition to that, this release is also bringing a collection of technical updates and bug fixes.

Happy mining!

 

## New Features

The winter_drop is no longer an experiment.

### Added Eyeblossoms

Eyeblossoms are new flowers that generate in the Pale Garden biome. Unique features:

- They exist in two variants: Closed and Open Eyeblossom
- Eyeblossoms transition between the two variants based on the time of day
  - During the night, Eyeblossoms will become Open
  - During the day, they will become Closed
  - In dimensions that do not have a day/night cycle, they will remain as-is
  - When transitioning, flowers will emit a particle effect
- Eyeblossoms planted on the ground will communicate with each other, helping each other to open or close
- Open Eyeblossoms have glowing eyes during the night
- Eyeblossoms can be obtained by bonemealing the grass in the Pale Garden biome
- Bees get poisoned when they touch Eyeblossoms
- Bees can be tempted by Eyeblossoms, but they get poisoned on player interaction instead of typical breeding/growing behaviour
- Suspicious Stew made from Eyeblossom will have Blindness or Nausea effect depending on the variant
- Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
- Wandering Trader can sell Open Eyeblossoms

### Added Resin Clump, Block of Resin, Resin Brick, and a family of Resin Bricks blocks

- Attacking a Creaking will cause its Creaking Heart to exude 2 to 3 Resin Clumps
- Resin Clump spawns on the sides of Pale Oak Logs that are close, and are connected to the Creaking Heart
- Creaking Heart is on cooldown and cannot produce more Resin Clumps for 5 seconds after an attack
- Resin Clump can be used as a material for armor trimming
- Block of Resin is a storage block for Resin Clumps
- Resin Clumps can be smelted into Resin Brick items
- Resin Brick items can be crafted into Resin Bricks, Resin Brick Slabs, Resin Brick Stairs, Resin Brick Walls, and then Chiseled Resin Bricks
- Resin Clump and Resin Block does not require a tool and are mined instantly
- The proper tool for Resin Bricks family of blocks is a pickaxe
- Wandering Trader can sell Resin Clumps
- Resin Clumps can be found in the Woodland Mansion chest loot

## Changes

- The panorama has been updated
- Sword is no longer efficient to break Moss Carpet. The proper tool for Moss Carpet remains the Hoe
- Bees are now withered on player interactions with Wither Roses instead of typical breeding/growing behavior

### Required tools for drops

> **Developer's Note**: *We made it so any block that drops when its support is broken will also drop when mined with any tool. It seemed unfair that breaking a block directly could destroy it if it was possible to obtain it with any tool just by breaking the block below!*

- The following blocks that require support now always drop when broken with any tool: Bell, Lantern, Soul Lantern, all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate
- The Brewing Stand now drops when broken with any tool
- The Ender Chest now drops Obsidian when broken with an incorrect tool, instead of dropping nothing

### Pale Garden

- Pale Garden has no music and if a player enters the biome while music is playing, the music will fade out

### Creaking Heart

- Creaking Heart can be obtained by using a Silk Touch enchanted tool
- Creaking Heart can be crafted with a Resin Block and Pale Oak Logs
- Naturally placed Creaking Hearts drop 20-24 experience when broken by a player, with or without silk touch
- Breaking a Creaking Heart block will drop a 1-3 Resin Clumps, and it is affected by Fortune enchantment

### Pale Oak Tree

- Pale Oak Leaves have a chance to spawn leaf particles if exposed on the bottom side
- Player grown Pale Oak trees grow without any decorations
- Naturally generated Pale Oak trees have Pale Hanging Moss hanging from the foliage, Pale Moss patches on the ground, and Creaking Heart blocks can generate in them
- Wanderer Trader can sell Pale Oak Saplings

### Pale Moss Block

- Wanderer Trader can sell a Pale Moss Block

### Pale Hanging Moss

- Pale Hanging Moss breaks instantly when mined
- Pale Hanging Moss requires shears or silk touch tools to be obtained
- Wanderer Trader can sell Pale Hanging Moss

### Creaking mob

- Creaking melee attacks deal 3 points of damage (1.5 hearts)
- Illagers are scared of Creaking and will run away from them

The following changes apply for naturally spawning Creaking:

- Creaking reacts only to damage caused by mobs and projectiles, by swaying in place
- Creaking ignores Cactus, Sweet Berry Bushes and Powder Snow damage and can now walk through/over them
- Creaking has a twitching animation
- Is fire-resistant
- Creaking Heart decides to remove or replace the connected Creaking when:
  - It turns day
  - The Creaking is too far away from the Creaking Heart
  - A player intersects with the Creaking for a few seconds

## Technical Changes

- The Data Pack version is now 58
- The Resource Pack version is now 43
- Removed the winter_drop feature flag and built-in data pack

## Data Pack Version 58

- trail particle has a new required field: duration
  - Indicates, in ticks, how long the particle will take to fly from the start to the target
- simple_block feature type has a new optional field: schedule_tick
  - If set to true, the block will be scheduled to tick
- biome effects have a new format for music using a weighted list
  - The list can be empty indicating no music should play in this biome
- biome effects have a new optional field: music_volume
  - The game will smoothly transition between the current music volume and the new volume when entering the biome

```
  "music": [
    {
      "data": {
        "max_delay": 24000,
        "min_delay": 12000,
        "replace_current_music": false,
        "sound": "minecraft:music.overworld.forest"
      },
      "weight": 1
    }
  ],
  "music_volume": 1.0,

```

- Item blocks with minecraft:block_entity_data component will now set block entity data only if id tag matches type of placed block entity
  - Additionally, a warning will be added to item tooltip if placing such item might directly or indirectly lead to command execution with high permission level

### Commands

- Suggestions will now be shown for attribute modifier IDs existing on the target in the attribute command

#### attribute Command

New subcommand to reset the base value of an attribute to its default value for the target entity. If the attribute does not exist on the entity, the command will fail.

Syntax:

```
attribute <target> <attribute> base reset 

```

Parameters:

- target: The entity to update the attribute for
- attribute: The attribute ID to update

### TNT Minecart Data

- The TNTFuse field of TNT Minecarts has been renamed to fuse
- Addeded optional field explosion_speed_factor that controls the amount of added damage depending on the speed of the Minecart
  - Default value: 1.0

### Text Components

Added optional shadow_color style field to Text Components, which overrides the shadow properties of text.

- Format:
  - A packed integer ARGB value (e.g. -1)
  - An array of RGBA values (e.g. \[1, 1, 1, 1\])
- If specified as 0, the shadow will never be displayed for this text
- If specified as a non-zero value, the shadow will always be displayed with this color

## Resource Pack Version 43

- Added the following new block models and textures:
  - chiseled_resin_bricks
  - closed_eyeblossom
  - open_eyeblossom
    - Additionally uses open_eyeblossom_emissive texture layer
  - resin_block
  - resin_bricks
  - resin_clump
- Added the following non-top-level block models:
  - cross_emissive
  - flower_pot_cross_emissive
- Added the following new item models and textures:
  - resin_brick
  - resin_clump
- Added new Armor Trim color palette: trims/color_palettes/resin
- Updates to GUI sprites
- The UV mapping of the Magma Cube texture has been updated

### GUI Sprites

- The toast/system sprite layout has been updated to use standard nine-slicing functionality
- The toast/tutorial sprite will now be scaled for taller toasts, and as such has nine-slice scaling in the default Resource Pack
- The advancements/box_obtained and advancements/box_unobtained GUI sprites are now configured to scale with nine-slicing
- Empty slot sprites, such as those for the armor slots in the inventory, have been renamed and moved from items into the gui/sprites/container/slot directory
  - empty_armor_slot_helmet -\> helmet
  - empty_armor_slot_chestplate -\> chestplate
  - empty_armor_slot_leggings -\> leggings
  - empty_armor_slot_boots -\> boots
  - empty_slot_sword -\> sword
  - empty_slot_pickaxe -\> pickaxe
  - empty_slot_axe -\> axe
  - empty_slot_shovel -\> shovel
  - empty_slot_hoe -\> hoe
  - empty_slot_smithing_template_armor_trim -\> smithing_template_armor_trim
  - empty_slot_smithing_template_netherite -\> smithing_template_netherite
  - empty_slot_amethyst_shard -\> amethyst_shard
  - empty_slot_diamond -\> diamond
  - empty_slot_emerald -\> emerald
  - empty_slot_ingot -\> ingot
  - empty_slot_lapis_lazuli -\> lapis_lazuli
  - empty_slot_quartz -\> quartz
  - empty_slot_redstone_dust -\> redstone_dust
- The empty slot sprites in the Loom have been split from their background and moved:
  - container/loom/banner_slot -\> container/slot/banner
  - container/loom/pattern_slot -\> container/slot/banner_pattern
  - container/loom/dye_slot -\> container/slot/dye
- The empty slot sprites in the Brewing Stand have been split from the container background:
  - container/slot/brewing_fuel
  - container/slot/potion
- The empty slot sprites in the Horse/Llama inventories have been split from their background, cropped, and moved:
  - container/horse/armor_slot -\> container/slot/horse_armor
  - container/horse/llama_armor_slot -\> container/slot/llama_armor
  - container/horse/saddle_slot -\> container/slot/saddle

## Fixed bugs in 24w44a

- [MC-12829](https://bugs.mojang.com/browse/MC-12829) - Flying through climbable blocks in creative mode slows you down
- [MC-16132](https://bugs.mojang.com/browse/MC-16132) - Cave carvers don't cut through snow blocks
- [MC-49071](https://bugs.mojang.com/browse/MC-49071) - The title of written books is not displayed in item frames unless renamed with anvils
- [MC-50614](https://bugs.mojang.com/browse/MC-50614) - Villager trading window is not closed when villager leaves interaction range
- [MC-55347](https://bugs.mojang.com/browse/MC-55347) - Title with long duration shows in other world
- [MC-59308](https://bugs.mojang.com/browse/MC-59308) - Dark/pale oak leaves sometimes do not generate centered on the tree
- [MC-71990](https://bugs.mojang.com/browse/MC-71990) - The 'Hat' layer of a player skin is not shown in the tab list under certain conditions
- [MC-72846](https://bugs.mojang.com/browse/MC-72846) - Altering the time of day using commands is delayed
- [MC-74408](https://bugs.mojang.com/browse/MC-74408) - The brewing stand GUI does not have container sprites for the fuel and potion output slots
- [MC-86153](https://bugs.mojang.com/browse/MC-86153) - Ctrl Pick Block gives new item even if picked item already exists in inventory
- [MC-111516](https://bugs.mojang.com/browse/MC-111516) - Player flickers/turns invisible when flying at high speeds
- [MC-134002](https://bugs.mojang.com/browse/MC-134002) - Blocks at y=-64 don't render on a map
- [MC-152728](https://bugs.mojang.com/browse/MC-152728) - The player continues sprinting when performing actions that slow them down
- [MC-158205](https://bugs.mojang.com/browse/MC-158205) - Ender Dragon doesn't take damage from melee attacks unless hit a certain way
- [MC-166614](https://bugs.mojang.com/browse/MC-166614) - Advancements menu doesn't render titles fully when they're longer than roughly 30 characters
- [MC-191096](https://bugs.mojang.com/browse/MC-191096) - Fences and walls can no longer be placed in invalid block states by using /setblock or /fill
- [MC-191698](https://bugs.mojang.com/browse/MC-191698) - Cannot set "shape" block state of stairs with /setblock
- [MC-192498](https://bugs.mojang.com/browse/MC-192498) - /fill and /setblock cannot set different directional block states of several blocks, such as glass panes and iron bars
- [MC-192791](https://bugs.mojang.com/browse/MC-192791) - Doors' block states cannot be set if another door half exists
- [MC-192956](https://bugs.mojang.com/browse/MC-192956) - Cannot setblock chest type other than single without other adjacent chest
- [MC-192959](https://bugs.mojang.com/browse/MC-192959) - Cannot setblock a directional state on redstone wire nor tripwire
- [MC-203146](https://bugs.mojang.com/browse/MC-203146) - No subtitle for item.crossbow.loading_middle
- [MC-225367](https://bugs.mojang.com/browse/MC-225367) - Magma Cube's layers UV mapping overlaps
- [MC-255254](https://bugs.mojang.com/browse/MC-255254) - Use /setblock can't place snowy grass block
- [MC-256822](https://bugs.mojang.com/browse/MC-256822) - Advancement description text cuts words in weird places if title is too short
- [MC-264541](https://bugs.mojang.com/browse/MC-264541) - Nine_sliced sprite glitch
- [MC-265033](https://bugs.mojang.com/browse/MC-265033) - Slots with item outline textures behave inconsistently when items are placed inside of these slots
- [MC-265637](https://bugs.mojang.com/browse/MC-265637) - /execute on origin doesn't work on Area Effect Cloud's owner after rejoining
- [MC-266019](https://bugs.mojang.com/browse/MC-266019) - Large bold text can have gaps in the middle of characters
- [MC-267095](https://bugs.mojang.com/browse/MC-267095) - Nether Brick block texture misalignment
- [MC-267730](https://bugs.mojang.com/browse/MC-267730) - Text wall when trying to join a server
- [MC-267878](https://bugs.mojang.com/browse/MC-267878) - Tutorial hint for movement may not fit all the required text if controls are changed
- [MC-268364](https://bugs.mojang.com/browse/MC-268364) - Wind Charges don't ignite TNT minecarts
- [MC-268522](https://bugs.mojang.com/browse/MC-268522) - The last language option is not deselected if you reach the bottom of the list and exit the menu
- [MC-268822](https://bugs.mojang.com/browse/MC-268822) - There are no shadows on text displayed within the singleplayer, multiplayer, and realms list menus
- [MC-271218](https://bugs.mojang.com/browse/MC-271218) - Empty Offers:{} NBT doesn't disable trades anymore
- [MC-272062](https://bugs.mojang.com/browse/MC-272062) - Dimension padding doesn't affect the start piece
- [MC-272105](https://bugs.mojang.com/browse/MC-272105) - Decorated Pot is missing the "contents" implicit data component type
- [MC-275917](https://bugs.mojang.com/browse/MC-275917) - Consumable blocking animation is broken in first person
- [MC-276123](https://bugs.mojang.com/browse/MC-276123) - Display entity shadow_radius updates for all display entities
- [MC-276389](https://bugs.mojang.com/browse/MC-276389) - The "Can hold a mixed stack of items" text within bundle tooltips doesn't have a shadow
- [MC-276794](https://bugs.mojang.com/browse/MC-276794) - There are no shadows on text displayed within the social interactions list menu
- [MC-276799](https://bugs.mojang.com/browse/MC-276799) - There are no shadows on text displayed within the superflat customization or preset lists
- [MC-276969](https://bugs.mojang.com/browse/MC-276969) - TNT Minecarts with explosion_power set to 0 can still break blocks
- [MC-277066](https://bugs.mojang.com/browse/MC-277066) - Creakings do not show particles leading to the creaking heart if Particles are set to Minimal
- [MC-277072](https://bugs.mojang.com/browse/MC-277072) - You can use bone meal on pale moss carpets in situations where nothing grows
- [MC-277076](https://bugs.mojang.com/browse/MC-277076) - Pale hanging moss doesn't have an assigned tool
- [MC-277094](https://bugs.mojang.com/browse/MC-277094) - Pale oak hanging sign uses a totally different palette to the rest of the wood set
- [MC-277101](https://bugs.mojang.com/browse/MC-277101) - Destroying a creaking heart with player-activated TNT does not grant the Monster Hunter advancement
- [MC-277113](https://bugs.mojang.com/browse/MC-277113) - Pale oak sign item and block texture is inconsistent with the other signs
- [MC-277115](https://bugs.mojang.com/browse/MC-277115) - Creaking mob can spawn inside block
- [MC-277123](https://bugs.mojang.com/browse/MC-277123) - You can get soft locked if a creaking falls in a hole with you
- [MC-277129](https://bugs.mojang.com/browse/MC-277129) - The Creaking "slides" on the ground when not aggro towards the player
- [MC-277134](https://bugs.mojang.com/browse/MC-277134) - Pale chest boat item is incorrect
- [MC-277145](https://bugs.mojang.com/browse/MC-277145) - The 2 brightest pixel colors on pale oak boat items are wrong
- [MC-277164](https://bugs.mojang.com/browse/MC-277164) - Music plays in the pale garden
- [MC-277202](https://bugs.mojang.com/browse/MC-277202) - Differences in the highlight effect of empty slot outlines in the GUI
- [MC-277213](https://bugs.mojang.com/browse/MC-277213) - Subtitles for cave sounds, creaking heart idle sounds, and pale hanging moss idle sounds are identical but are shown separately
- [MC-277214](https://bugs.mojang.com/browse/MC-277214) - The sound event associated with the "Creaking sees player" subtitle doesn't exist
- [MC-277268](https://bugs.mojang.com/browse/MC-277268) - Pufferfish have no hit delay on creakings; they make a loud buzzing noise constantly
- [MC-277271](https://bugs.mojang.com/browse/MC-277271) - Sniffers can't dig into pale moss
- [MC-277275](https://bugs.mojang.com/browse/MC-277275) - Crash upon loading chunks when teleporting
- [MC-277305](https://bugs.mojang.com/browse/MC-277305) - Creakings are able to be pushed around by entities and players when standing on soul sand and mud
- [MC-277363](https://bugs.mojang.com/browse/MC-277363) - Creakings cannot rotate their heads independently from their bodies
- [MC-277368](https://bugs.mojang.com/browse/MC-277368) - The "message(s) selected" text within the "Select Chat Messages to Report" menu is positioned too close to the header separator
- [MC-277373](https://bugs.mojang.com/browse/MC-277373) - There are no shadows on text used to display the names of categories within the key binds menu
- [MC-277374](https://bugs.mojang.com/browse/MC-277374) - There are no shadows on text used to display the names of lists within the resource pack and data pack menus
- [MC-277387](https://bugs.mojang.com/browse/MC-277387) - Evokers run away from creakings faster than other illagers
- [MC-277408](https://bugs.mojang.com/browse/MC-277408) - There are no shadows on text used to display the description of report categories within the "Select Report Category" menu
- [MC-277440](https://bugs.mojang.com/browse/MC-277440) - There are no shadows on text used to display the speed at which a world is being uploaded within the realms menu
- [MC-277441](https://bugs.mojang.com/browse/MC-277441) - There are no shadows on text used to display the start date and time left of your realm subscription within the realms menu
- [MC-277443](https://bugs.mojang.com/browse/MC-277443) - There are no shadows on text displayed when connecting to realms
- [MC-277444](https://bugs.mojang.com/browse/MC-277444) - There are no shadows on text used to display the names of text boxes within the realms settings menu
- [MC-277477](https://bugs.mojang.com/browse/MC-277477) - There are no shadows on text used to display the description of advancements within the advancements menu
- [MC-277478](https://bugs.mojang.com/browse/MC-277478) - The "Layer Material" and "Height" text within the "Superflat Customization" menu is positioned too close to the header separator
- [MC-277479](https://bugs.mojang.com/browse/MC-277479) - There are no shadows on text used to display the names of game rules within the game rules menu
- [MC-277480](https://bugs.mojang.com/browse/MC-277480) - There are no shadows on placeholder text displayed within the "Please describe what happened" box within the reporting menu
- [MC-277510](https://bugs.mojang.com/browse/MC-277510) - When grass or mycelium grows under powder snow the grass is not snowy
- [MC-277549](https://bugs.mojang.com/browse/MC-277549) - Arrows summoned with custom motion don't render correctly
- [MC-277557](https://bugs.mojang.com/browse/MC-277557) - Creaking Heart has inconsistent and miscolored pixels
- [MC-277617](https://bugs.mojang.com/browse/MC-277617) - The base damage of the Power enchantment was reduced in 1.21
- [MC-277651](https://bugs.mojang.com/browse/MC-277651) - Arrows and tridents glitch when in an explosion or wind charge burst
- [MC-277657](https://bugs.mojang.com/browse/MC-277657) - Arrows are not correctly affected by rising bubble columns
- [MC-277658](https://bugs.mojang.com/browse/MC-277658) - Tridents glitch up and down in rising bubble columns
- [MC-277682](https://bugs.mojang.com/browse/MC-277682) - Arrows and tridents glitch after shooting/throwing them onto magma/soul sand blocks underwater
- [MC-277742](https://bugs.mojang.com/browse/MC-277742) - Creakings activate for a brief moment when switching from Creative to Spectator mode
- [MC-277754](https://bugs.mojang.com/browse/MC-277754) - Chunks on the corner of the rendering distance are not synchronized between client and server for the terrain
- [MC-277776](https://bugs.mojang.com/browse/MC-277776) - Baby cats and ocelots size is changed
- [MC-277815](https://bugs.mojang.com/browse/MC-277815) - Creakings on a team can still be observed and stopped by teammate players
- [MC-277833](https://bugs.mojang.com/browse/MC-277833) - Creakings can attack players in the same team as them
- [MC-277871](https://bugs.mojang.com/browse/MC-277871) - Creaking Hearts do not have a unique place sound

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/5d233307681e1b46dfd4fba4f022c1cac2b58e60/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
