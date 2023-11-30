---
title: "Minecraft: Java Edition - 1.19.3"
date: 2022-12-08T08:12:40Z
updated: 2022-12-08T08:12:44Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/11280166737293-Minecraft-Java-Edition-1-19-3
---

We're now releasing 1.19.3 for Minecraft: Java Edition. This release gives the Vex a brand new look as well as containing technical improvements and bug fixes.

# NEW FEATURES IN 1.19.3

- Some experimental features are now available through built-in experimental datapacks
- Added a new "Panorama Scroll Speed" accessibility option
- Added new default skins for offline players
- New wood sounds

## SOUNDS

- Various wood types now have unique sounds when placed, broken, or walked on
  - There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo (when enabled)
- Step sounds can now be heard when walking on Carpets, Lily Pads and Small Amethyst Buds
- Step sounds can now be heard when walking through Nether sprouts, Glow lichen, Crimson Roots and Warped Roots

# CHANGES IN 1.19.3

- Reworked the Creative Inventory tabs
- Added Operator Items Tab option in the Controls menu which is off by default
- The Vex now has a new look
- In the Nether dimension Endermen, Skeletons and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below)
- Changes to block support
- Spawner block changes
- Changes to chat
- Added Draft Player Reports
- Improvements to the Open to LAN screen
- The Realms News button will now show a confirmation screen before opening the link
- Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
  - They are still placed in concentric rings, but their positions in the rings may change by a few degrees
- "Teleport to Team Member" option in spectator menu now only shows up for teams with viable target players
- Changes to tooltips
- The Wild update music has been tweaked to be slightly less loud

## CREATIVE INVENTORY

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

- Blocks and items have been moved into categories that fit them better
- Blocks are now ordered by their material as much as possible
  - For example, all Oak blocks and variants are now next to each other
- Some items can now be found in more than one tab
- Various tabs have been renamed or collapsed into others
- The search tab now lists items sequentially grouped by the other tabs
  - For example, items found in Building Blocks will always appear before items in Redstone Blocks
- A Colored Blocks tab has been added that contains all blocks with 16 color variants
- Petrified Oak Slab has been removed from the Creative Inventory
  - It can still be accessed through commands
- The following missing items have been added to the Creative Inventory:
  - Suspicious Stew
    - The tooltip will show the effect of a stew before it's picked up from the Creative Inventory
    - Only stews with effects available via crafting or Mooshrooms are listed
  - Dragon Egg
  - Ominous Banner
  - Monster Spawner
  - All 3 flight durations of Fireworks
  - Operator-only blocks and items
    - These only appear in the Operator Utilities tab if you have both:
      - Operator Items Tab option in Controls menu set toON
      - The required operator permissions
- Tooltips for all items in Creative Menu outside single-category tabs will show categories where this item can be found
  - Previously this only happened on the search tab

## VEX

- Changes to Vex model and textures
  - The Vex retains its old, now slightly oversized, hitbox to make it easier to fight

## BLOCK SUPPORT

- Fence Gates no longer provide center support beneath them
- When opening, Shulker Boxes will pop off blocks which are attached to opened faces (such as Torches)
  - Blocks that require support cannot be placed on these open faces while the Shulker Box is open

## SPAWNERS

- No longer has a default mob spawn type when placed by a player (previously was the Pig)
- Will not emit fire particles when a mob spawn type has not been defined
- Renamed to Monster Spawner to match Bedrock, and removed purple text color
- Pick-block now works for Spawner blocks
- The mob type is now displayed in the hover description of a Spawner item stack
  - If a mob type has not been defined yet, the hover description will describe how to set it

## ITEMS

- Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem and Wither mobs to Creative mode
  - Ender Dragon and Wither Spawn Eggs will only be available through commands to prevent accidental destruction of player builds
- Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg

## CHAT

- Removed Chat Preview
- Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
- Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
- The Chat Trust Status indicators have been tweaked:
  - The 'Modified' tag will no longer display for server-modified messages where only style has been changed
  - The 'Modified' tag icon and indicator is now dark gray
  - The 'Not Secure' tag is now light gray and does not have an icon
- Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered
- The Chat Reporting screen now shows when the player being reported rejoined chat

## ADDED DRAFT PLAYER REPORTS

Player Reports can now be kept temporarily as a draft while connected to a server.

- When exiting the Player Reporting screen, the report can be either discarded or kept as a draft
  - The draft will always be kept if the screen was forcefully closed (e.g. player dying)
- Draft reports are kept until the player leaves the current server or world
  - When leaving, the player will be prompted to either discard or finish and send the report

## LAN SCREEN

- The screen now allows selecting the port on which to host the LAN world
- The game mode and allow cheats buttons are now initialized with the default values of the world

## TOOLTIPS

- When tabbing through buttons, tooltips are displayed above or below them
- Tooltips displayed when hovering are displayed next to the cursor
- Tooltips from focused buttons (focused by pressing tab) take priority over tooltips from hovered buttons

# TECHNICAL CHANGES IN 1.19.3

- Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
- Command changes
- Added new Telemetry Events
- Added new Game Rules
- Custom Player Head Note Block sounds
- New entity sub-predicate types
- Instances of recipe types that have recipe books now have fieldcategoryto determine placement
- Changes to texture loading and stitching
- Network protocol changes
- Migrated linear algebra types to Java OpenGL Math Library (JOML)
- Blocks carried by Endermen now use loot tables to generate drops when killed

## FEATURE FLAGS

### GENERAL NOTES

- Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
- Game elements controlled by flags are hardcoded
- Feature flags are stored in world

### CONFIGURATION AND DATAPACK CHANGES

- Feature flags are enabled by datapacks
  - New pack metadata section calledfeaturesis added, containing enabled feature flags in list namedenabled
- The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
- Added new fields toserver.propertiesto allow initial selection of packs (works only during world creation)
  - initial-enabled-packs- comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
  - initial-disabled-packs- comma-separated list of packs to not auto-enable
- Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world
- Added new entity sub-predicate types:axolotl,boat,fox,mushroom,painting,rabbit,horse,llama,villager,parrot,tropical_fish

### EFFECTS OF FEATURE FLAGS

#### BLOCKS

- Disabled block ids are not recognized by commands that can create new blocks
- Block items for disabled blocks are disabled
- Disabled blocks won't spawn in structures
- Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
- Players can't interact with disabled blocks

#### ENTITIES

- Disabled entity ids are not recognized by commands that can summon new entities
- Disabled entities will not spawn or load
- Spawn egg items for disabled entities are disabled

#### ITEMS

- Disabled items are hidden from creative menu
- Recipes and loot tables are prevented from creating disabled items
- Disabled item ids are not recognized by commands that can create new items
- Disabled items can't be used for interactions or attacking

## COMMANDS

- New command:fillbiome
- New execute sub-command:execute if\|unless biome
- Improvements to thepublishcommand

### FILLBIOME

Changes biome entries for an area. Note that biomes are not stored per-block, so affected positions may not match input precisely.

Syntax:

fillbiome \<from\> \<to\> \<biome\> \[replace \<filter\>\]

Parameters:

- from: One corner of the area to fill
- to: The other corner of the area to fill
- biome: The biome to set
- filter: A biome or biome tag to replace

### EXECUTE

Execute commands can now be conditional on biomes.

Syntax:

execute if\|unless biome \<pos\> \<biome\>

### PUBLISH

Thepublishcommand has new arguments to enable commands and set the default gamemode.

Syntax:

publish \[allowCommands\] \[gamemode\] \[port\]

## TELEMETRY

This release includes the WorldUnloaded event, a required event, as well as several opt-in events. Diagnostic tracking is a tool that helps us understand what you like about Minecraft, which allows us to make those things better.

The reason that WorldUnloaded, along with[WorldLoaded](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w38a), is a required event is that the information we’re looking at is, well, required. As a part of Xbox, we all need to follow a standard of practice, you can find a detailed description of it[here](https://privacy.microsoft.com/en-us/privacystatement). The parameters for what data we consider to be critical to our work are set by our team at Mojang Studios in alignment with Xbox.

What we want to find out is how fun you think Minecraft is. There are lots of ways to figure that out, like feedback, playtests, experience, and magic. We want to add data to that mix, which is where WorldLoaded and WorldUnloaded come in. WorldLoaded measures when you boot a session up, and WorldUnloaded measures when you shut it down. Together, they will measure how fun Minecraft is, using metrics such as playtime and the game modes that players choose to play. That’s it. All the data we collect, whether it’s required or opt-in, follows GDPR and CCPA best practices to keep your information safe.

The rest of the current telemetry events are opt-in, which means that you can choose whether or not you want to send us additional data. The only players that can’t opt-in are Microsoft child accounts, but everyone can still send in all of their feedback to[feedback.minecraft.net](http://feedback.minecraft.net/).

Just like all the thoughts and comments we get from you on our feedback site, this is something that greatly helps us improve Minecraft. We want to make a game that you want to play, so we want to know what that game needs. Even if it’s more lava.

### TRANSPARENCY

- Added Telemetry Data Collection Screen
  - This screen displays information about the type of data that is sent
  - The level of data sent can be controlled between "Minimal" and "All"
    - "Minimal" sends only the required data
    - "All" sends the required data, as well as optional data
  - The default data level is "Minimal" (only the required data)
- Every telemetry event sent from the client is now logged to disk
  - Old log files are removed after 7 days
  - These can be found under thelogs/telemetrydirectory
    - A shortcut to this directory is available via the "Open My Data" button on the Telemetry Data Collection screen

### REQUIRED EVENTS

- Added WorldUnloaded event
- Removed client Java version from the WorldLoaded event

#### WORLDLOADED & WORLDUNLOADED

Understanding how Minecraft is played allows us to focus game updates and improvements on the areas that are most relevant to players.The data that tells us this includes game mode, client or server modded status, and game version.

WorldLoaded & WorldUnloaded are two paired events that calculate how long the world session has lasted (in seconds and ticks).Data from WorldLoaded is sent when a world is launched, and data from WorldUnloaded is sent when a world is shut down (quitting to title, disconnecting from a server).

### OPTIONAL EVENTS

- Added PerformanceMetrics and WorldLoadTimes events

#### PERFORMANCEMETRICS

Knowing the overall performance profile of Minecraft helps us tune and optimize the game for a wide range of machine specifications and operating systems.

The periodic performance metrics includes data such as frame-rates, rendering performance, memory usage, operating system, and the modded status of the client and server.

Game version is included to help us compare the performance profile for new versions of Minecraft.

#### WORLDLOADTIMES

It’s important for us to understand how long it takes to join a world, and how that changes over time. For example, when we add new features or do larger technical changes, we need to see what impact that had on load times.

This event includes the total time in milliseconds for the world to load, whether this was a new world, as well as game version and platform details.

## GAME RULES

- AddedblockExplosionDropDecay,mobExplosionDropDecayandtntExplosionDropDecaygame rules
  - When set tofalse, all blocks drop loot
  - When set totrue, blocks drop loot randomly depending on how far from the explosion center
  - Defaults tofalsefor tnt, true for block and mob
- AddedsnowAccumulationHeightgame rule
  - When it is snowing, this game rule determines the maximum number of layers can be accumulated in each block
  - Defaults to1
  - Set to0makes no snow form at all
  - Set to8or above lets snow form up to the level of a full block
- AddedwaterSourceConversionandlavaSourceConversiongame rules
  - When set totrue, allows new sources of that fluid to form
  - Defaults totruefor water andfalsefor lava
- AddedglobalSoundEventsgame rule, controlling whether certain gameplay moments are heard by all players regardless of location
  - Defaults totrue

## RECIPES

### CRAFTING BOOK CATEGORIES

- Crafting book categories/tabs can now be controlled by recipe definitions
- Categories available forshaped/shapelessand various special crafting recipes:
  - building
  - redstone
  - equipment
  - misc(default)
- Categories available forsmelting,blasting,smoking,campfire_cooking
  - food
  - blocks
  - misc(default)
- Some crafting books collapse multiple categories into a single tab
- The exact mappings might change in the future

## RESOURCE PACKS

- The Resource Pack version is now 12
- Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
  - The game will no longer try to adapt packs with those versions to the current version
- Game now loads all block models and blockstate definitions in appropriate directories
  - That means that if a pack has invalid model it will prevent pack from loading, even if this model is unused

### TEXTURE LOADING CHANGES

- Context: When the game loads all textures used by block and item models need to be stitched (merged) into a single image, called the "atlas"
  - Individual textures that are stitched onto the atlas are called "sprites"
- To improve loading performance, block and item textures are now loaded before they are processed by block and item models
  - By default, textures not in thetextures/itemandtextures/blockdirectories will no longer be automatically recognized and will fail to load
- Resource packs can now have configuration files, located inatlasesdirectory, that control which images are included in the atlases

#### ATLAS CONFIGURATION FILES

- New directoryatlasesis now present for resource packs
- This directory contains JSON entries for configuring atlases:
  - blocks- textures used by block and item models
  - banner_patterns,beds,chests,shield_patterns,shulker_boxes,signs- used to render some special-case models
  - mob_effects- textures used for effect icons in the UI
  - paintings- textures used for paintings
  - particles- textures used for particles (referenced by thetexturesfield in files within theparticlesdirectory)
- If multiple packs include those files, they are merged by their order within the pack (same as tags in data packs)
- Inside these files is a JSON object with a single list calledsources
  - Every entry insourcesruns in during load, in order of definition, adding or removing new files to the texture list; to be later referenced by block models, particles, etc
- Types of sources:
  - directory- lists all files in a directory and its subdirectories, across all namespaces
    - source- directory in pack to be listed (relative totexturesdirectory)
    - prefix- string to be appended to the sprite name when loaded
  - single- adds a single file
    - resource- location of a resource within the pack (relative totexturesdirectory, implied.pngextension)
    - sprite- sprite name (optional, defaults toresource)
  - filter- removes sprites matching the given pattern
    - namespace,path- patterns (regular expressions, regex) of ids to be removed (only works for entries already in the list)
      - If omitted, any value will be matched
  - unstitch- copies rectangular regions from other images
    - resource- location of a resource within the pack (relative totexturesdirectory, implied.pngextension)
    - divisor_x,divisor_y- used for determining the units used by regions
    - regions- list of regions to copy from the source image
      - sprite- sprite name
      - x,y- coordinates of the top-left corner of the region
      - width,height- size of the region
    - Values such asxare transformed to real image coordinates via dividing by their divisor, and then multiplying by the real image size
- Example: if a pack has a file namedassets/test/textures/fancy/iridium.pngand source is{"type": "directory", "source": "fancy", "prefix": "custom/"}, the texture will be available in models astest:custom/iridium

## CUSTOM PLAYER HEAD NOTE BLOCK SOUNDS

- Player Heads can now contain anote_block_soundfield
  - When present, this determines the sound a note block makes when the head is placed on top of it

## NEW ENTITY SUB-PREDICATE TYPES

- Added new entity sub-predicates for some entity types with variants:
- axolotl
  - variant- values:lucy,wild,gold,cyan,blue
- boat
  - Works for boats, chest boats and rafts
  - variant- values:oak,spruce,birch,jungle,acacia,dark_oak,mangrove,bamboo
- fox
  - variant- values:red,snow
- mooshroom
  - variant- values:red,brown
- painting
  - variant- values: seepainting_variantregistry
- rabbit
  - variant- values:brown,white,black,white_splotched,gold,salt,evil
- horse
  - variant- values:white,creamy,chestnut,brown,black,gray,dark_brown
  - Markings are separate value and not matched
- llama
  - variant- values:creamy,white,brown,gray
- villager
  - variant- values: seevillager_typeregistry
  - Also works for Zombie Villagers
  - Profession and level are separate values and not matched
- parrot
  - variant- values:red_blue,blue,green,yellow_blue,gray
- tropical_fish
  - variant- values:kob,sunstreak,snooper,dasher,brinely,spotty,flopper,stripey,glitter,blockfish,betty,clayfish

## NETWORK PROTOCOL

- The network protocol now supports adding player entities to the world without being added to the 'tab' player list
- Servers can now lazily distribute players' profile public keys along with their first chat packet
- Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
- Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol
- Servers can now lazily distribute players' profile public keys along with their first chat packet
- Profile public keys will now be refreshed without reconnecting
- Clients now reset their chat session on receiving a login packet

# EXPERIMENTAL FEATURES IN 1.19.3

- Some experimental features now need to be enabled to appear in worlds
- Such features are enabled by adding a built-in datapack when creating a world
- Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
- Worlds that are using experimental features will be marked as "Experimental" in world selection list
- Experimental features cannot be toggled for existing worlds

## BUNDLES

- Bundles are now available as an experimental feature

## ADDED CAMEL

Camels are now available when Update 1.20 experimental features are enabled.

- Camels can be equipped with a saddle and ridden by two players
- Camels spawn naturally in Desert Villages
- Camels are tall
  - Most hostile mobs will not be able to reach you when you are on a Camel
  - They can walk over Fences and Walls without a sweat
- Camels are very graceful, but grumpy mobs
  - They randomly sit down
  - While sitting, it is difficult to convince them to move
- Camels can either walk slowly or sprint quickly
- They can also dash forward but will lose stamina for a while when doing so

## BAMBOO WOOD SET

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

- New wood blocks
  - Block of Bamboo
  - Stripped Block of Bamboo
  - Bamboo Planks
  - Bamboo Door
  - Bamboo Trapdoor
  - Bamboo Sign
  - Bamboo Stairs
  - Bamboo Slab
  - Bamboo Fence
  - Bamboo Fence Gate
  - Bamboo Button
  - Bamboo Pressure Plate
- Block of Bamboo can be crafted from 9 Bamboo and can be stipped like other wood logs
- Bamboo Planks crafted from Block of Bamboo yield only 2 planks compared to 4 for wood logs
- Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
  - It can be crafted with 1x2 Bamboo Slabs in a vertical strip
  - You can craft Stair and Slab variants of Bamboo Mosaic
  - Bamboo Mosaic blocks cannot be used as a crafting ingredient where other wooden blocks are used, but they can be used as fuel
- Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
  - They function the same as ordinary boats, but have a unique look to them

## CHISELED BOOKSHELF

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

- Crafted with 6 planks and 3 wooden slabs
- Can store Books, Book and Quills, Written Books, and Enchanted Books
  - Holds up to 6 books
  - Keeps the stories and lore of your world safe
  - These can be added or removed from any slot by targeting the specific slot
- Comparators can detect the last book placed/removed
  - Perfect for hiding secrets in your spooky library
- Works with Hoppers

## HANGING SIGNS

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

- Hanging Signs are a more expensive version of normal Signs
  - Crafted with 2 chains and 6 stripped logs of your preferred wood type
  - Crafting results in 6 Hanging Signs
- Can be hung up in the following ways:
  - Underneath a block that can provide support in the center, like a full block or a fence
  - Attached to the solid side of a block
  - Attached to the side or underneath another Hanging Sign
- Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
  - However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

## MOB HEADS ON NOTE BLOCKS INTERACTION

- When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone

## PIGLIN MOB HEAD

- Piglins will now drop their heads when killed by a charged Creeper
- Placing the Piglin head on a Note Block will play one of the Piglin's ambient sounds
- The Piglin head will flap its ears when powered by Redstone, or when worn by a player while walking

## ADVANCEMENTS

- Breeding Camels now counts for "The Parrots and the Bats" and is now required for "Two by Two"
- Hanging Signs now counts for "Glow and Behold"

# FIXED BUGS IN 1.19.3

Around 200 bugs were fixed in this release. View the[list on the issue tracker](https://bugs.mojang.com/issues/?filter=27487).

# GET THE RELEASE

To install the Release, open up the[Minecraft Launcher](https://www.minecraft.net/download.html)and click play! Make sure your Launcher is set to the "Latest Release” option.

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/c9df48efed58511cdd0213c56b9013a7b5c9ac1f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated[Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the[Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the[official Minecraft Discord](https://discordapp.com/invite/minecraft).
