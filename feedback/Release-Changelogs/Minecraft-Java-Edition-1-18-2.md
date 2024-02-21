---
title: "Minecraft: Java Edition - 1.18.2 "
date: 2022-02-28T14:07:36Z
updated: 2022-02-28T14:07:39Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4531177623437-Minecraft-Java-Edition-1-18-2
hash:
  changes-in-1.18.2: changes-in-1182
  technical-changes-in-1.18.2: technical-changes-in-1182
  placefeature-command: placefeaturecommand
  fixed-bugs-in-1.18.2: fixed-bugs-in-1182
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

# FIXED BUGS IN 1.18.2

<div>

In addition to crashes and other stability improvements, around 100 player-reported bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=26771).

</div>

# GET THE RELEASE

​To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play!

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar)

Report bugs here:

- [Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/summary)

Want to give feedback?

- Head over to our [feedback website](https://feedback.minecraft.net/) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
