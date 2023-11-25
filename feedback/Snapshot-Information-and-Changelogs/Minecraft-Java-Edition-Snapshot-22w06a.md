---
title: "Minecraft: Java Edition - Snapshot 22w06a"
date: 2022-02-10T08:14:32Z
updated: 2022-02-10T08:14:53Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4424961893389-Minecraft-Java-Edition-Snapshot-22w06a
---

Today we\'re happy to share snapshot 22w06a with you. It contains compliance updates for South Korean players and is Totally Teeming with Technical Tag Tastiness.

Happy Mining (in moderation)!

# CHANGES IN 22W06A

If you're playing in South Korea, we added gameplay timers and notices in compliance with gaming laws to help remind players to take occasional breaks from gameplay. For more information, please see [the FAQ.](https://help.minecraft.net/hc/articles/360052763631)

# TECHNICAL CHANGES IN 22W06A

-   Any type present in registries (blocks, items, biomes, etc.) can now have tags

## UNIVERSAL TAGS

-   Tags can now be defined for any registry (blocks, items, biomes, etc. - see registries.json in report)
-   New tags are stored in datapacks under tags directory (same as old ones)
    -   Names of new tag directories are the same as registry names (so /data/\[namespace\]/tags/potion and /data/\[namespace\]/tags/worldgen/biome)
    -   Existing tags (blocks, items, fluids, entity_types, game_events and functions) keep their name (for now)
-   Some fields in worldgen structures that previously only lists of element ids now accept tags
    -   Those entries now accept \[id, \...\], id (shortcut for \[id\]) and #tag
    -   Changed fields are:
        -   feature.glow_lichen configuration: can_be_placed_on
        -   feature.spring_feature configuration: valid_blocks
        -   feature.simple_random_selector configuration: features
        -   block_predicate_type.matching_blocks: blocks
        -   block_predicate_type.matching_fluids: fluids
        -   biome: inner list in features, map value in carvers
        -   biome_source.checkerboard: biomes
-   Some tag fields now require id to be prepended with \# (however they are not yet accepting element list)
    -   dimension_type: infiniburn
    -   feature.geode configuration: blocks.cannot_replace, blocks.invalid_blocks
    -   feature.vegetation_patch, feature.waterlogged_vegetation_patch configuration: replaceable
    -   feature.root_system configuration: root_replaceable
    -   structure_processor.protected_blocks: value

# FIXED BUGS IN 22W06A

-   [MC-105317](https://bugs.mojang.com/browse/MC-105317) - Structure blocks do not rotate entities correctly when loading
-   [MC-239708](https://bugs.mojang.com/browse/MC-239708) - Superflat world "Water World" preset settings are obsolete for the 1.18 update
-   [MC-245937](https://bugs.mojang.com/browse/MC-245937) - Flashing particles when boosting upwards with firework rockets
-   [MC-248106](https://bugs.mojang.com/browse/MC-248106) - Parrot dying while using Riptide enchantment

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/60c757a63f21877f8b053904ac76d04ff3cb76ef/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
