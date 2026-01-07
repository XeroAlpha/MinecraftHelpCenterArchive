---
title: Minecraft Java Edition - 26.1 Snapshot 2
date: 2026-01-07T15:23:05Z
updated: 2026-01-07T15:23:29Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/42480249808653-Minecraft-Java-Edition-26-1-Snapshot-2
hash:
  h_01KECGV2NVKEDEWGR3K09KDP59: changes
  h_01KECGV2NXJW4KNVAJ57DVCDQF: baby-mobs
  h_01KECGV2P276S5QBXZ2T3EXRT7: default-jvm-options
  h_01KECGV2P4Z4T2D6GZRKD4SGGN: technical-changes
  h_01KECGV2P5R43YCYXTJPZAQV92: data-pack-version-96
  h_01KECGV2P6C9ST2Z8ZPWDA034X: entity-data
  h_01KECGV2P7PXT8SZJV62G469TC: item-tags
  h_01KECGV2P8XGQ3VF8CCE993KKJ: resource-pack-version-77
  h_01KECGV2P8185NRV0PEHEQP814: entity-textures
  h_01KECGV2QC09VB61VPKAM9FBVS: sounds
  h_01KECGV2QFVBX75YJCT00VFA8W: fixed-bugs-in-261-snapshot-2
  h_01KECGV2QHJD2HBQ470QNNNMZS: get-the-snapshot
---

We're back from vacation and the lights are back on in the shipping room! In this very first Snapshot of the new year, we're bringing you the first features from our cutest game drop yet! Befriend floofier wolf pups, kittens, piglets, calves, lambs, baby chickens, baby ocelots, and rabbits; craft name tags, and hear heart-melting mob sounds!

Happy mining!

## Changes

- Name Tags are now craftable and can be crafted with 1 Paper and 1 of any Metal Nugget
- Zombie Horses no longer panic when hurt
- Tweaked default JVM options
- Added new baby sounds for Wolf, Cat and Pig
- Revamped the visuals of several baby mobs
- The programmer art rabbit textures have been removed following the re-modelling of the rabbit

### Baby Mobs

- Updated the models and textures of the following baby mobs:
  - Cow
  - Sheep
  - Pig
  - Cat
  - Ocelot
  - Mooshroom
  - Wolf
  - Chicken
    - Tweaked the bounding box to align with the new model
  - Rabbit
    - Both adult and baby Rabbits also received new animations
    - Tweaked the bounding box to align with the new model
- Armor on baby Wolves and saddles on baby Pigs will no longer render

### Default JVM Options

- The game now allocates 4 GB of RAM by default (up from 2 GB)
- Garbage collection has been changed from G1GC to ZGC for compatible devices

> **Developer's Note**: *The default memory allocation has been bumped from 2GB to 4GB to make the game run smoother and reduce stutters. Furthermore, with generational ZGC, you should see a more stable framerate – especially when operating memory heavy tasks. If you're running Minecraft on a machine with less than 4GB of RAM – please refer to *[*this help article*](../../help/Performance-Troubleshooting/Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation.md)*. If you want to change the garbage collector – please refer to *[*this help article*](https://help.minecraft.net/hc/en-us/articles/41950300066573-Change-the-Garbage-Collector-for-Minecraft-Java-Edition)*. Third-party launchers may not support these changes.*

## Technical Changes

- The Data Pack version is now 96
- The Resource Pack version is now 77

## Data Pack Version 96

- Wolf sound variants sound events in wolf_sound_variant has been moved into a new field adult_sounds and field baby_sounds was added

### Entity Data

- The current_explosion_impact_pos and current_impulse_context_reset_grace_time fields from Players have been added to all mobs and the Armor Stand
- The ignore_fall_damage_from_current_explosion field on Players has been removed

#### Item Tags

- Added #metal_nuggets - Copper, Iron and Gold Nuggets

## Resource Pack Version 77

### Entity Textures

- Added new entity textures:
  - entity/cat/cat_all_black_baby.png
  - entity/cat/cat_black_baby.png
  - entity/cat/cat_british_shorthair_baby.png
  - entity/cat/cat_calico_baby.png
  - entity/cat/cat_collar_baby.png
  - entity/cat/cat_jellie_baby.png
  - entity/cat/ocelot_baby.png
  - entity/cat/cat_persian_baby.png
  - entity/cat/cat_ragdoll_baby.png
  - entity/cat/cat_red_baby.png
  - entity/cat/cat_siamese_baby.png
  - entity/cat/cat_tabby_baby.png
  - entity/cat/cat_white_baby.png
  - entity/chicken/chicken_cold_baby.png
  - entity/chicken/chicken_temperate_baby.png
  - entity/chicken/chicken_warm_baby.png
  - entity/cow/cow_cold_baby.png
  - entity/cow/cow_temperate_baby.png
  - entity/cow/cow_warm_baby.png
  - entity/cow/mooshroom_brown_baby.png
  - entity/cow/mooshroom_red_baby.png
  - entity/pig/pig_cold_baby.png
  - entity/pig/pig_temperate_baby.png
  - entity/pig/pig_warm_baby.png
  - entity/rabbit/rabbit_black.png
  - entity/rabbit/rabbit_brown.png
  - entity/rabbit/rabbit_caerbannog.png
  - entity/rabbit/rabbit_gold.png
  - entity/rabbit/rabbit_salt.png
  - entity/rabbit/rabbit_toast.png
  - entity/rabbit/rabbit_white.png
  - entity/rabbit/rabbit_white_splotched.png
  - entity/sheep/sheep_baby.png
  - entity/sheep/sheep_wool_baby.png
  - entity/wolf/wolf_angry_baby.png
  - entity/wolf/wolf_ashen_angry_baby.png
  - entity/wolf/wolf_ashen_baby.png
  - entity/wolf/wolf_ashen_tame_baby.png
  - entity/wolf/wolf_baby.png
  - entity/wolf/wolf_black_angry_baby.png
  - entity/wolf/wolf_black_baby.png
  - entity/wolf/wolf_black_tame_baby.png
  - entity/wolf/wolf_chestnut_angry_baby.png
  - entity/wolf/wolf_chestnut_baby.png
  - entity/wolf/wolf_chestnut_tame_baby.png
  - entity/wolf/wolf_collar_baby.png
  - entity/wolf/wolf_rusty_angry_baby.png
  - entity/wolf/wolf_rusty_baby.png
  - entity/wolf/wolf_rusty_tame_baby.png
  - entity/wolf/wolf_snowy_angry_baby.png
  - entity/wolf/wolf_snowy_baby.png
  - entity/wolf/wolf_snowy_tame_baby.png
  - entity/wolf/wolf_spotted_angry_baby.png
  - entity/wolf/wolf_spotted_baby.png
  - entity/wolf/wolf_spotted_tame_baby.png
  - entity/wolf/wolf_striped_angry_baby.png
  - entity/wolf/wolf_striped_baby.png
  - entity/wolf/wolf_striped_tame_baby.png
  - entity/wolf/wolf_tame_baby.png
  - entity/wolf/wolf_woods_angry_baby.png
  - entity/wolf/wolf_woods_baby.png
  - entity/wolf/wolf_woods_tame_baby.png
- Renamed the following entity textures:
  - entity/armorstand/wood.png -\> entity/armorstand/armorstand.png
  - entity/cat/all_black.png -\> entity/cat/cat_all_black.png
  - entity/cat/black.png -\> entity/cat/cat_black.png
  - entity/cat/british_shorthair.png -\> entity/cat/cat_british_shorthair.png
  - entity/cat/calico.png -\> entity/cat/cat_calico.png
  - entity/cat/jellie.png -\> entity/cat/cat_jellie.png
  - entity/cat/persian.png -\> entity/cat/cat_persian.png
  - entity/cat/ragdoll.png -\> entity/cat/cat_ragdoll.png
  - entity/cat/red.png -\> entity/cat/cat_red.png
  - entity/cat/siamese.png -\> entity/cat/cat_siamese.png
  - entity/cat/tabby.png -\> entity/cat/cat_tabby.png
  - entity/cat/white.png -\> entity/cat/cat_white.png
  - entity/chicken/cold_chicken.png -\> entity/chicken/chicken_cold.png
  - entity/chicken/temperate_chicken.png -\> entity/chicken/chicken_temperate.png
  - entity/chicken/warm_chicken.png -\> entity/chicken/chicken_warm.png
  - entity/copper_golem/exposed_copper_golem.png -\> entity/copper_golem/copper_golem_exposed.png
  - entity/copper_golem/exposed_copper_golem_eyes.png -\> entity/copper_golem/copper_golem_eyes_exposed.png
  - entity/copper_golem/oxidized_copper_golem_eyes.png -\> entity/copper_golem/copper_golem_eyes_oxidized.png
  - entity/copper_golem/weathered_copper_golem_eyes.png -\> entity/copper_golem/copper_golem_eyes_weathered.png
  - entity/copper_golem/oxidized_copper_golem.png -\> entity/copper_golem/copper_golem_oxidized.png
  - entity/copper_golem/weathered_copper_golem.png -\> entity/copper_golem/copper_golem_weathered.png
  - entity/cow/cold_cow.png -\> entity/cow/cow_cold.png
  - entity/cow/temperate_cow.png -\> entity/cow/cow_temperate.png
  - entity/cow/warm_cow.png -\> entity/cow/cow_warm.png
  - entity/cow/brown_mooshroom.png -\> entity/cow/mooshroom_brown.png
  - entity/cow/red_mooshroom.png -\> entity/cow/mooshroom_red.png
  - entity/fox/snow_fox.png -\> entity/fox/fox_snow.png
  - entity/fox/snow_fox_sleep.png -\> entity/fox/fox_snow_sleep.png
  - entity/frog/cold_frog.png -\> entity/frog/frog_cold.png
  - entity/frog/temperate_frog.png -\> entity/frog/frog_temperate.png
  - entity/frog/warm_frog.png -\> entity/frog/frog_warm.png
  - entity/llama/brown.png -\> entity/llama/llama_brown.png
  - entity/llama/creamy.png -\> entity/llama/llama_creamy.png
  - entity/llama/gray.png -\> entity/llama/llama_gray.png
  - entity/llama/spit.png -\> entity/llama/llama_spit.png
  - entity/llama/white.png -\> entity/llama/llama_white.png
  - entity/panda/aggressive_panda.png -\> entity/panda/panda_aggressive.png
  - entity/panda/brown_panda.png -\> entity/panda/panda_brown.png
  - entity/panda/lazy_panda.png -\> entity/panda/panda_lazy.png
  - entity/panda/playful_panda.png -\> entity/panda/panda_playful.png
  - entity/panda/weak_panda.png -\> entity/panda/panda_weak.png
  - entity/panda/worried_panda.png -\> entity/panda/panda_worried.png
  - entity/pig/cold_pig.png -\> entity/pig/pig_cold.png
  - entity/pig/temperate_pig.png -\> entity/pig/pig_temperate.png
  - entity/pig/warm_pig.png -\> entity/pig/pig_warm.png
  - entity/projectiles/spectral.png -\> entity/projectiles/arrow_spectral.png
  - entity/projectiles/tipped.png -\> entity/projectiles/arrow_tipped.png
  - entity/turtle/big_sea_turtle.png -\> entity/turtle/turtle.png
- Moved the following entity textures:
  - entity/armadillo.png -\> entity/armadillo/armadillo.png
  - entity/banner_base.png -\> entity/banner/banner_base.png
  - entity/bat.png -\> entity/bat/bat.png
  - entity/beacon_beam.png -\> entity/beacon/beacon_beam.png
  - entity/blaze.png -\> entity/blaze/blaze.png
  - entity/dolphin.png -\> entity/dolphin/dolphin.png
  - entity/enchanting_table_book.png -\> entity/enchantment/enchanting_table_book.png
  - entity/end_gateway_beam.png -\> entity/end_portal/end_gateway_beam.png
  - entity/end_portal.png -\> entity/end_portal/end_portal.png
  - entity/endermite.png -\> entity/endermite/endermite.png
  - entity/experience_orb.png -\> entity/experience/experience_orb.png
  - entity/fishing_hook.png -\> entity/fishing/fishing_hook.png
  - entity/guardian.png -\> entity/guardian/guardian.png
  - entity/guardian_beam.png -\> entity/guardian/guardian_beam.png
  - entity/guardian_elder.png -\> entity/guardian/guardian_elder.png
  - entity/lead_knot.png -\> entity/lead_knot/lead_knot.png
  - entity/minecart.png -\> entity/minecart/minecart.png
  - entity/phantom.png -\> entity/phantom/phantom.png
  - entity/phantom_eyes.png -\> entity/phantom/phantom_eyes.png
  - entity/shield_base.png -\> entity/shield/shield_base.png
  - entity/shield_base_nopattern.png -\> entity/shield/shield_base_nopattern.png
  - entity/silverfish.png -\> entity/silverfish/silverfish.png
  - entity/snow_golem.png -\> entity/snow_golem/snow_golem.png
  - entity/spider_eyes.png -\> entity/spider/spider_eyes.png
  - entity/trident.png -\> entity/trident/trident.png
  - entity/trident_riptide.png -\> entity/trident/trident_riptide.png
  - entity/wandering_trader.png -\> entity/wandering_trader/wandering_trader.png
  - entity/witch.png -\> entity/witch/witch.png

### Sounds

- Added new sound events for the Cat:
  - entity.baby_cat.ambient
  - entity.baby_cat.hiss
  - entity.baby_cat.hurt
  - entity.baby_cat.death
  - entity.baby_cat.eat
  - entity.baby_cat.beg_for_food
  - entity.baby_cat.purr
  - entity.baby_cat.purreow
  - entity.baby_cat.stray_ambient
- Added new sound events for the Pig:
  - entity.baby_pig.ambient
  - entity.baby_pig.hurt
  - entity.baby_pig.death
  - entity.baby_pig.step
- Added new sound events for the Wolf:
  - entity.baby_wolf.ambient
  - entity.baby_wolf.growl
  - entity.baby_wolf.death
  - entity.baby_wolf.hurt
  - entity.baby_wolf.pant
  - entity.baby_wolf.whine
  - entity.baby_wolf.step

## Fixed bugs in 26.1 Snapshot 2

- [MC-302734](https://bugs.mojang.com/browse/MC-302734) - Zombie horses constantly move in and out of water and burn to death
- [MC-304361](https://bugs.mojang.com/browse/MC-304361) - The heads of zombie nautiluses have a massive empty gap on the back
- [MC-304705](https://bugs.mojang.com/browse/MC-304705) - The E value in entity_render_stats in the debug overlay doesn't work
- [MC-304761](https://bugs.mojang.com/browse/MC-304761) - Spears' charge animation takes too long to rotate sideways for slower spears
- [MC-305040](https://bugs.mojang.com/browse/MC-305040) - Nautili spawned as a result of a player breeding two other nautili can despawn
- [MC-305104](https://bugs.mojang.com/browse/MC-305104) - The "Programmer Art" and "High Contrast" resource packs are listed as incompatible
- [MC-305121](https://bugs.mojang.com/browse/MC-305121) - Some expert level mason trades no longer generate
- [MC-305130](https://bugs.mojang.com/browse/MC-305130) - Farmers sell suspicious stews with 20 times the intended duration
- [MC-305131](https://bugs.mojang.com/browse/MC-305131) - Duplicate trade entries in journeyman level shepherd trades
- [MC-305132](https://bugs.mojang.com/browse/MC-305132) - Master level fletchers can now sell tipped arrows of thick, mundane, and awkward potions
- [MC-305164](https://bugs.mojang.com/browse/MC-305164) - Armorers now buy diamonds at expert level instead of journeyman
- [MC-305175](https://bugs.mojang.com/browse/MC-305175) - The Lunge enchantment now works at 6 hunger and above, instead of 7
- [MC-305279](https://bugs.mojang.com/browse/MC-305279) - Expert cleric sells glowstone instead of ender pearl

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/165c30e5076a13848404f41692ff1e0126d0a6f3/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
