---
title: "Minecraft: Java Edition - Snapshot 20W46A"
date: 2020-11-11T16:51:35Z
updated: 2020-11-11T16:51:42Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360051978112-Minecraft-Java-Edition-Snapshot-20W46A
---

The snow is snowier than before.

For today’s snapshot, we’ve changed most of the textures introduced in the previous snapshot. This is simply to test if these textures give a better experience in exploring and building. We’re interested to hear what you think. Keep in mind, that some textures might be reverted or changed again in the future.

# NEW FEATURES IN 20W46A

- Added powder snow

## POWDER SNOW

Snowier snow!

- Powder Snow is a trap block that causes any entity that walks into it to sink in it
- You can pick up and place powder snow with a bucket
- Wear leather boots to prevent yourself from sinking into powder snow blocks
- Leave a cauldron outside in falling snow and it will fill with powder snow

### FREEZING

- Standing in powder snow will slowly freeze an entity
- Once frozen, freeze damage is done every few seconds to the frozen entity
- Each piece of leather armor warn causes an entity to freeze more slowly
- Wearing a full set of leather armor prevents freezing entirely

# CHANGES IN 20W45A

- The range in which a lightning rod attracts lightning has been doubled
- Copper blocks are now crafted from four copper ingots
- Sky color now varies smoothly when moving between different biomes
- Buttons that change value (like Difficulty) can now be controlled with mouse wheel
- Clicking on button that changes value while holding shift key changes to previous value
- “Debug” world type can now be accessed while holding alt key (was shift)

## TEXTURES

Changed a number of the textures for blocks and items introduced in the previous snapshot:

- Cut copper
- Lightning rod
- Calcite
- Amethyst block
- Budding amethyst block
- Tinted glass
- Candle item icons
- Copper ingot item icon
- Amethyst shard item icon
- Bundle item icon

# TECHNICAL CHANGES IN 20W46A

- Removed /replaceitem command
- Added /item command
- Added item modifiers, which reuse loot table functions syntax to describe item modification in /item command
- Data pack version is now 7
- Loot tables can now access scoreboard values by UUID
- Loot table values inside random number generators can now be nested
- Default mode of structure blocks is now Load. Data is now hidden (but can be accessed by clicking mode button while holding alt key)

## ITEM MODIFIERS

The function part of loot tables can now be defined as separate data pack resource in item_modifiers directory.  
Such files can contain a single function (i.e single JSON object) or an array of functions.

## COMMANDS

### ITEM

Modifies item or block inventory.

This command has three forms:

- /item \<target\> replace \<item stack\> \[\<count\>\] - same as old replaceitem
- /item \<target\> modify \<modifier\> - modifies item (without copying).
- /item \<target\> copy \<source\> \[\<modifier\>\] - copies item for source to target(s), optionally applying modifier

Possible sources and targets:

- entity \<selector\> \<slot\>
- block \<x\> \<y\> \<z\> \<slot\>

For example, /item block ~ ~ ~ container.0 copy entity @s enderchest.0 will copy first item from player’s enderchest to first slot of container player is currently standing on.

## LOOT TABLES

### NEW CONDITIONS

#### VALUE_CHECK

Checks range of value.

Parameters:

- value - see “New value providers” section (currently combination of random generators and score)
- range - min/max range

### CHANGED CONDITIONS

#### SCORE

entity parameter has now been replaced with target.  
It can either contain value from old entity field (like this) or be an score holder name in form {"name": "..."}.

### CHANGED FUNCTIONS

#### SET_DAMAGE

This function now has add parameter. If true, change will be relative to current damage. If false, damage will be replaced with current value (default behavior)

#### SET_COUNT

This function now has add parameter. If true, change will be relative to current item count. If false, item count will be replaced with current value (default behavior)

#### COPY_NBT

source parameter can now be set to {"storage": \<namespaced id\>}, to access command storage.

### NEW FUNCTIONS

#### SET_ENCHANTMENTS

Modifies enchantments on item

##### Parameters

- enchantments - map of enchantment id to level value (can be score or random number)
- add - if true, change will be relative to current level. If false, level will be replaced with current value (default behavior)

### NEW VALUE PROVIDERS

Note: value providers can be used in same places as random number generators.

#### SCORE

Returns scaled scoreboard value.

##### Parameters

- score - scoreboard name
- target - same as target in score predicate
- scale - scaling factor (float)

## DATA PACKS

Changes to data packs for version 7:

- Removal of /replaceitem (replaced with /item replace)
- score loot table condition: entity parameter has been replaced with target

# RESOURCE PACKS

Changes to resource packs for version 7:

- Drowned texture mirroring has changed (see MC-174685)
- slots for the game mode selector are now 26 pixels instead of 25

# FIXED BUGS IN 20W46A

- [MC-2490](https://bugs.mojang.com/browse/MC-2490) - TNT animation ends at 80 ticks, ignores fuse length changes
- [MC-53518](https://bugs.mojang.com/browse/MC-53518) - Endermen don’t attack endermites spawned using spawn eggs or /summon
- [MC-80468](https://bugs.mojang.com/browse/MC-80468) - Inconsistency between block names
- [MC-99259](https://bugs.mojang.com/browse/MC-99259) - As of 1.9, the wither health bar doesn’t go up during spawn
- [MC-110903](https://bugs.mojang.com/browse/MC-110903) - Cannot remove horse saddle using /replaceitem
- [MC-143821](https://bugs.mojang.com/browse/MC-143821) - Using empty map in creative mode can create additional map with ID 0
- [MC-147729](https://bugs.mojang.com/browse/MC-147729) - Crafting via the recipe book can delete items if picking up items while crafting
- [MC-162910](https://bugs.mojang.com/browse/MC-162910) - Additional map is created when using an empty map in Creative in a newly created world
- [MC-182954](https://bugs.mojang.com/browse/MC-182954) - “block.minecraft.banner.base.\<color\>” displays raw translation string (is untranslated)
- [MC-183771](https://bugs.mojang.com/browse/MC-183771) - Gamemode switcher icons in the F3+F4 menu are not centered
- [MC-183917](https://bugs.mojang.com/browse/MC-183917) - Min and max are both required in entity_scores condition
- [MC-185605](https://bugs.mojang.com/browse/MC-185605) - Kelp generates on top of Magma Blocks
- [MC-188448](https://bugs.mojang.com/browse/MC-188448) - Food pops off of campfire when extinguished
- [MC-189482](https://bugs.mojang.com/browse/MC-189482) - LAN World screen buttons are selected in the wrong order when using Tab
- [MC-196425](https://bugs.mojang.com/browse/MC-196425) - “Off” is not completely capitalized for the Distortion Effects and FOV Effects sliders, which is inconsistent with other sliders
- [MC-197276](https://bugs.mojang.com/browse/MC-197276) - Pufferfish gives poison IV instead of II
- [MC-198514](https://bugs.mojang.com/browse/MC-198514) - Creating a superflat world with nothing but air crashes the game
- [MC-198725](https://bugs.mojang.com/browse/MC-198725) - Crash when clicking “Presets” after setting the superflat preset with a non-existent biome
- [MC-203562](https://bugs.mojang.com/browse/MC-203562) - Shulker boxes animate when shulkers do
- [MC-203574](https://bugs.mojang.com/browse/MC-203574) - Decorations don’t generate in the Nether
- [MC-203621](https://bugs.mojang.com/browse/MC-203621) - Unable to pick up experience orbs
- [MC-203622](https://bugs.mojang.com/browse/MC-203622) - Arm when using Spyglass aligned wrong on Multiplayer
- [MC-203631](https://bugs.mojang.com/browse/MC-203631) - Amethyst buds do not drop themselves with silk touch
- [MC-203643](https://bugs.mojang.com/browse/MC-203643) - Command modified bundle has a bigger progress bar than a slot
- [MC-203644](https://bugs.mojang.com/browse/MC-203644) - Cats & Ocelots are missing one of their legs
- [MC-203646](https://bugs.mojang.com/browse/MC-203646) - Some mobs won’t despawn when switched to peaceful
- [MC-203648](https://bugs.mojang.com/browse/MC-203648) - The armour stand model floats above its base
- [MC-203746](https://bugs.mojang.com/browse/MC-203746) - Levitation particles go on forever when killed by a levitating creeper
- [MC-203880](https://bugs.mojang.com/browse/MC-203880) - Floating creepers / creeper with no AI

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/373675677cc57b9294a187a4d0ecab6f340d4189/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
