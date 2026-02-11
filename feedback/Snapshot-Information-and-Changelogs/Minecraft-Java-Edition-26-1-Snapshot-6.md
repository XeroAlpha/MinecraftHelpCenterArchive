---
title: Minecraft Java Edition - 26.1 Snapshot 6
date: 2026-02-11T12:28:56Z
updated: 2026-02-11T12:29:05Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43431470235021-Minecraft-Java-Edition-26-1-Snapshot-6
hash:
  h_01KH6ASH1T6AJ7QX3YKNWTYT6S: changes
  h_01KH6ASH1X1JRRETEQNTKQNY3J: baby-mobs
  h_01KH6ASH2242PSNV09G4KJ92A8: ui
  h_01KH6ASH24SAFJ4C3XHGPC8SPA: technical-changes
  h_01KH6ASH2463WJD39K8KWCECMG: data-pack-version-99
  h_01KH6ASH24ADGTEGXW2MHSB373: world-storage
  h_01KH6ASH2G4GDDDGX3E9R44CFT: changes-to-leveldat
  h_01KH6ASH2YTC4VNA9HD6230QMG: world-generation
  h_01KH6ASH34NZ8NN15WD47HZP3P: dimension-types
  h_01KH6ASH3436CWG15B853B7GD2: tags
  h_01KH6ASH35T1508315726MT1G6: block-tags
  h_01KH6ASH37FAGC38DD3DJZKADS: item-tags
  h_01KH6ASH383036WB2J7MEATS2H: resource-pack-version-80
  h_01KH6ASH3994JFF1AN29PPBBJ1: entity-textures
  h_01KH6ASH3DA05CQWBDN4BXQ38T: shaders--post-process-effects
  h_01KH6ASH3EQ9JEHZACK3V9BSGB: fixed-bugs-in-261-snapshot-6
  h_01KH6ASH3J5NMDKH8PZ3SREEM6: get-the-snapshot
---

Beware! A pack of seven floofy and feral baby mobs have taken over the snapshot! These tiny foxes, polar bears, bees, llamas, armadillos, and goats might have snuggly new looks, but might not all be cuddle-friendly (or tamable!). From the icy tundra to the sandy deserts – few biomes are safe from their cuteness!

And on the technical front: This week's release is bringing some major changes to the world data format, so make sure to read through the full changelog below before upgrading your worlds.

Happy mining!

 

## Changes

- Revamped the visuals of more baby mobs
- Baby Polar Bears no longer attack Foxes
- Baby Axolotls now have a play dead animation
- Fixed the baby chicken's wings and the warm chicken's stripes

### Baby Mobs

- Updated the models and textures of the following baby mobs:
  - Bee
  - Fox
  - Goat
  - Camel
  - Armadillo
  - Polar Bear
  - Llama
- Saddles on baby Camels will no longer render
- Camel Husk no longer has a baby model

### UI

- Along with large changes to the world data format in this release, worlds that need to be upgraded will now show Upgrade and Play instead of Play Selected World and the Edit World and Re-Create World buttons are disabled until the world has been upgraded
  - A new screen has been added to show upgrading progress

> **Developer's Note**: *Due to additional risk when upgrading a world, we will be forcing a backup when you load your world for the first time in this snapshot cycle. After upgrading, you will not be able to load your world in an older version at all.*

## Technical Changes

- The Data Pack version is now 99
- The Resource Pack version is now 80

## Data Pack Version 99

### World Storage

- All default dimensions are now stored in the dimensions subfolder
  - Data for the Overworld has been moved from the root folder to dimensions/minecraft/overworld
    - This includes the region, entities, and poi folders, as well as related files out of data
  - Data for the Nether has been moved from DIM-1 to dimensions/minecraft/the_nether
  - Data for the End has been moved from DIM1 to dimensions/minecraft/the_end
  - The top level data folder is now only for data shared across dimensions instead of also for the Overworld
- Player storage has been moved to the players subdirectory
  - advancements -\> players/advancements
  - playerdata -\> players/data
  - stats -\> players/stats
- The world resource pack (resources.zip) has been moved to the resourcepacks subdirectory
- Data saved in the data folder is now namespaced
  - This means that all that data will now be stored in a namespace subfolder in the corresponding data folder
    - All existing vanilla data files have been moved accordingly
    - Example: data/scoreboard.dat -\> data/minecraft/scoreboard.dat
  - Command storage is now stored in namespace subfolders instead of having a namespace suffix
    - Example: data/command_storage_foo.dat -\> data/foo/command_storage.dat
  - chunks.dat has been renamed to chunk_tickets.dat
  - Data for maps is now stored in the data/minecraft/maps subfolder
    - Map index files have been renamed to only the number
      - Example: map_1.dat -\> 1.dat
    - idcounts.dat has been renamed to last_id.dat
  - There is no more raids_end.dat special case
    - The End now uses raids.dat as well
- Structures saved by Structure Blocks have been moved from generated/namespace/structures to generated/namespace/structure

#### Changes to level.dat

- The Player tag has been replaced with a singleplayer_uuid tag, referencing the player data file to use
- Difficulty-related settings have been moved into a difficulty_settings tag
  - Difficulty is renamed to difficulty and is now a string instead of an integer
    - Allowed values:
      - peaceful
      - easy
      - normal
      - hard
  - DifficultyLocked is renamed to locked
- Data for the Ender Dragon fight has been moved out to the data folder
  - It can now be found at dimensions/minecraft/the_end/data/minecraft/ender_dragon_fight.dat
  - The Ender Dragon fight can be activated in other dimensions, see the Dimension Types section below
  - Data changes:
    - NeedsStateScanning has been renamed to needs_state_scanning
    - DragonKilled has been renamed to dragon_killed
    - PreviouslyKilled has been renamed to previously_killed
    - IsRespawning has been replaced by respawn_stage
      - Allowed values:
        - start
        - preparing_to_summon_pillars
        - summoning_pillars
        - summoning_dragon
        - end
    - Dragon has been renamed to dragon_uuid
    - ExitPortalLocation has been renamed to exit_portal_location
    - Gateways has been renamed to gateways
    - Added respawn_time - the time that has elapsed since the current stage of the respawn sequence started
    - Added respawn_crystals - a list of UUIDs for the end crystals used to trigger the respawn sequence
- Wandering Trader data has been moved out to the data folder
  - It can now be found at data/minecraft/wandering_trader.dat
  - Data changes:
    - WanderingTraderId has been removed
    - WanderingTraderSpawnChance has been renamed to spawn_chance
    - WanderingTraderSpawnDelay has been renamed to spawn_delay
- CustomBossEvents has been moved to the data folder
  - It can now be found at data/minecraft/custom_boss_events.dat
- Weather-related data has been moved to the data folder
  - It can now be found at data/minecraft/weather.dat
  - Data changes:
    - clearWeatherTime has been renamed to clear_weather_time
    - rainTime has been renamed to rain_time
    - thunderTime has been renamed to thunder_time
- ScheduledEvents has been moved out to the data folder
  - It can now be found at data/minecraft/scheduled_events.dat
  - Data changes:
    - Name has been renamed to id
    - TriggerTime has been renamed to trigger_time
    - Callback has been renamed to callback
      - Type has been renamed to type
      - Name has been renamed to id
- game_rules has been moved out to the data folder
  - It can now be found at data/minecraft/game_rules.dat
- WorldGenSettings has been moved out to the data folder
  - It can now be found at data/minecraft/world_gen_settings.dat
  - Data changes:
    - generate_features has been renamed to generate_structures
- world_clocks has been moved out to the data folder
  - It can now be found at data/minecraft/world_clocks.dat

### World Generation

- Rule-based block state providers have changed so that their fallback is optional and can be empty
  - In such cases that an empty fallback is invoked, features that use them will not place anything
  - Current configuration that uses a rule-based block state provider is the state_provider in the disk feature
- forest_rock feature has been renamed to block_blob
- block_blob feature configuration has changed to support the following parameters:
  - state The block the rock is made out of
  - can_place_on A block predicate that defines which blocks the rock can be placed on
- ice_spike feature has been renamed to spike
- spike feature configuration now supports the following parameters:
  - state The block the spike is made out of
  - can_place_on A block predicate that defines which blocks the spike can be placed on
  - can_replace A block predicate that defines which blocks the spike can replace
- huge_red_mushroom and huge_brown_mushroom feature configurations have a new parameter:
  - can_place_on A block predicate that defines which blocks the huge mushroom can be placed on
- alter_ground tree decorator configuration has changed so that provider is now a rule-based block state provider
- tree feature configuration has replaced the force_dirt and dirt_provider parameters with a single below_trunk_provider rule-based block state provider:
  - Format:
    - fallback - An optional block state provider
    - rules - A list of rules
      - if_true - A block predicate that checks the block position before providing the block
      - then - A block state provider

  - Default value:

    ``` auto
    "below_trunk_provider": {
        "rules": [
            {
                "if_true": {
                    "type": "minecraft:not",
                    "predicate": {
                        "type": "minecraft:matching_block_tag",
                        "tag": "minecraft:cannot_replace_below_tree_trunk"
                    }
                },
                "then": {
                    "type": "minecraft:simple_state_provider",
                    "state": {
                        "Name": "minecraft:dirt"
                    }
                }
            }
        ]
    }
    ```

  - Any trees that previously used force_dirt have a below_trunk_provider that always provides a dirt block instead

#### Dimension Types

- has_ender_dragon_fight: boolean
  - Controls whether it is possible for an Ender Dragon fight to exist in the dimension

### Tags

#### Block Tags

- Split apart \#dirt into multiple block tags
  - \#dirt now only contains Dirt, Coarse Dirt and Rooted Dirt
  - \#mud contains Mud and Muddy Mangrove Roots
  - \#moss_blocks contains Moss Block and Pale Moss Block
  - \#grass_blocks contains Grass Block, Mycelium and Podzol
- Added \#substrate_overworld which contains \#dirt, \#mud, \#moss_blocks and \#grass_blocks
  - This is used as a collection for world generation conditions
- Added the following tags which define which ground blocks beneath an applicable tree or bamboo can be replaced with podzol:
  - \#beneath_tree_podzol_replaceable
  - \#beneath_bamboo_podzol_replaceable
- Added \#cannot_replace_below_tree_trunk which contains \#dirt, \#mud, \#moss_blocks and podzol
- Added the following tags defining which blocks their feature can be placed on
  - \#forest_rock_can_place_on
  - \#huge_brown_mushroom_can_place_on
  - \#huge_red_mushroom_can_place_on
- Added \#ice_spike_replaceable defining which blocks an Ice Spike feature can replace

#### Item Tags

- Added the following tags which mirror their block tag contents:
  - \#mud
  - \#moss_blocks
  - \#grass_blocks

## Resource Pack Version 80

- Added sound event for baby chicken step

### Entity Textures

- Added new entity textures:
  - entity/bee/bee_baby.png
  - entity/bee/bee_baby.png
  - entity/bee/bee_angry_baby.png
  - entity/bee/bee_nectar_baby.png
  - entity/bee/bee_angry_nectar_baby.png
  - entity/fox/fox_baby.png
  - entity/fox/fox_snow_baby.png
  - entity/fox/fox_sleep_baby.png
  - entity/fox/fox_snow_sleep_baby.png
  - entity/camel/camel_baby.png
  - entity/goat/goat_baby.png
  - entity/armadillo/armadillo_baby.png
  - entity/bear/polarbear_baby.png
  - entity/llama/llama_creamy_baby.png
  - entity/llama/llama_white_baby.png
  - entity/llama/llama_brown_baby.png
  - entity/llama/llama_gray_baby.png
  - entity/equipment/llama_body/trader_llama_baby.png

### Shaders & Post-process Effects

- The core/rendertype_item_entity_translucent_cull shaders have been removed in favor of core/entity
- The core/rendertype_entity_alpha and core/rendertype_entity_decal shaders have been replaced by a DISSOLVE flag implemented by core/entity
- Rendering of items (in UI and in the world) has been split from the core/entity into new core/item shaders

## Fixed bugs in 26.1 Snapshot 6

- [MC-134573](https://bugs.mojang.com/browse/MC-134573) - The game freezes while doing a world backup
- [MC-259032](https://bugs.mojang.com/browse/MC-259032) - /data produces a positive result for low negative numbers
- [MC-264187](https://bugs.mojang.com/browse/MC-264187) - Spawners with their light limits set to ranges that don't include 15 don't spawn mobs under the night sky
- [MC-273228](https://bugs.mojang.com/browse/MC-273228) - Crash when generating water lakes using a custom worldgen datapack
- [MC-303403](https://bugs.mojang.com/browse/MC-303403) - Hanging sign block displays render dark and above other blocks and mobs
- [MC-305580](https://bugs.mojang.com/browse/MC-305580) - Baby zombie horses, skeleton horses and camel husks grow into adults, unlike other baby undead mobs
- [MC-305598](https://bugs.mojang.com/browse/MC-305598) - The "wolf_baby_angry4" sound (angry puppy sound) ends abruptly
- [MC-305813](https://bugs.mojang.com/browse/MC-305813) - The game crashes due to an integer overflow when loading a level with a large number of days
- [MC-305887](https://bugs.mojang.com/browse/MC-305887) - The eating sound for baby horses is noticeably too low-pitched
- [MC-305923](https://bugs.mojang.com/browse/MC-305923) - Bubble columns delete waterlogged blocks that intersect them
- [MC-305988](https://bugs.mojang.com/browse/MC-305988) - Golden dandelions can't be fed to tadpoles
- [MC-306022](https://bugs.mojang.com/browse/MC-306022) - Golden dandelions work on tamed baby skeleton horses and zombie horses
- [MC-306035](https://bugs.mojang.com/browse/MC-306035) - The "Birthday Song" advancement is no longer being granted
- [MC-306057](https://bugs.mojang.com/browse/MC-306057) - The AgeLocked NBT tag isn't saved when picking up a baby axolotl in a bucket
- [MC-306123](https://bugs.mojang.com/browse/MC-306123) - Wolves still try to attack players even in Peaceful difficulty

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/944a97169c234da76b16df7e504bf47c3aba3da0/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
