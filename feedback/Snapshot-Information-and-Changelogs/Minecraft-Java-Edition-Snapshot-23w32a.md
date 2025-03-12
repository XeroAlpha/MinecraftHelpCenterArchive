---
title: "Minecraft: Java Edition - Snapshot 23w32a"
date: 2023-08-30T12:37:42Z
updated: 2025-03-12T11:12:30Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/19021208991885-Minecraft-Java-Edition-Snapshot-23w32a
hash:
  h_01H9375TM2V3JBZYV8Y33J92Z8: changes
  h_01H9375TM26VG3TQ6VCHH7ZZMH: vibrations
  h_01H9375TM2JCD0928FAW20EVT4: technical-changes
  h_01H9375TM29F8TZJABRT44WCME: resource-pack-version-17
  h_01H9375TM23ETDKWKEQGXDPTBG: data-pack-version-17
  h_01H9375TM2WNZW5BF96SGGYVFG: mob-effect-storage-changes
  h_01H9375TM2951DRFXK09QM726W: mob-effect-instance
  h_01H9375TM246CAGZ0873S7GVWZ: items
  h_01H9375TM2P3CX51PPQFMZD874: potionlingering_potionsplash_potiontipped_arrow
  h_01H9375TM3P7DCNQFVQ435BKPC: suspicous_stew
  h_01H9375TM323PBND3860QZVF2N: entities
  h_01H9375TM3WZJYV1GTZ8QZAN19: mooshroom
  h_01H9375TM3YVB9TF4MKPE7JPEE: area_effect_cloud
  h_01H9375TM3VNBGTVNQYQPNKZKM: arrow
  h_01H9375TM3A97KWFYWFSCPEF31: players-armor-stands-and-mobs
  h_01H9375TM3KF9X7GSQ82MM5FBY: block-entities
  h_01H9375TM3V3X3JEY1SVQH0E3Y: beacon
  h_01H9375TM3DQGT39A5AGK1Z3S6: loot-tables
  h_01H9375TM34N51SE85ZR1MC014: network-optimizations
  h_01H9375TM3CWKKXDMEPS9NKSR9: secure-chat
  h_01H9375TM3647JF4TRP08299B5: fixed-bugs-in-snapshot-23w32a
  h_01H9375TM3QQHVK5R2YQ12S3YP: get-the-snapshot
---

Hello! This very technical snapshot contains vibration changes, data pack and resource pack changes, some network optimizations, new debug tools, and a some bug fixes. Enjoy!

# CHANGES

- Changes to vibration mechanic

## VIBRATIONS

- Vibrations no longer risk being lost on simulation distance limit
- Unequipping items emits a new unequip vibration of frequency 4
- Chiseled Bookshelves emit a block_change vibration of frequency 11 when receiving books from Hoppers
- Turtle Eggs cracking emit a block_change vibration of frequency 11
- Turtle Eggs hatching emit a block_destroy vibration of frequency 12
- Using Bone Meal emits an item_interact_finish vibration of frequency 3
- Fire being doused by Water Potion emits a block_destroy vibration of frequency 12
- Evokers evoking Vexes or Fangs emit an entity_place vibration of frequency 14
- Carrots being eaten by Rabbits emit a block_change vibration of frequency 11
- Sweet Berries being eaten by Foxes emit a block_change vibration of frequency 11
- Camels eating Cactus emit an eat vibration of frequency 8

# TECHNICAL CHANGES

- The resource pack version is now 17
- A bug involving hunger icons was fixed in the slicer tool released with last snapshot. Here is [the new version](https://github.com/Mojang/slicer/releases/tag/v1.1.1)
- The data pack version is now 17
- Optimized networking to improve the experience on low bandwidth connections

## RESOURCE PACK VERSION 17

- The text field background is now a nine-sliced sprite at widget/text_field and widget/text_field_highlighted
- The scroll bar in lists and text fields is now a nine-sliced sprite at widget/scroller

## DATA PACK VERSION 17

- Changed mob effect storage on items, entities and block entities

### MOB EFFECT STORAGE CHANGES

- Game no longer uses numeric values when storing mob effects to world (so, for example, 4 becomes minecraft:mining_fatigue)
- Various mob effect fields have been renamed for consistency with new structures

#### MOB EFFECT INSTANCE

This structure is used in many places, so changes are described separately.

- Id -\> id, also changed from number to string id
- Ambient -\> ambient
- Amplifier -\> amplifier
- Duration -\> duration
- ShowParticles -\> show_particles
- ShowIcon -\> show_icon
- HiddenEffect -\> hidden_effect, also since it's mob effect instance, changes apply recursively
- FactorCalculationData -\> factor_calculation_data

#### ITEMS

##### potion, lingering_potion, splash_potion, tipped_arrow

- CustomPotionEffects -\> custom_potion_effects, contents tranformed as a list of mob effect instances

##### suspicous_stew

- Effects -\> effects, for each entry:
  - EffectId -\> id, also changed from number to string id
  - EffectDuration -\> duration

#### ENTITIES

##### mooshroom

- Removed EffectId and EffectDuration
- Added stew_effects with the same format as suspicious_stew.effects tag (i.e. list of effect id and duration)

##### area_effect_cloud

- Effects -\> effects, contents tranformed as a list of mob effect instances

##### arrow

- CustomPotionEffects -\> custom_potion_effects, contents tranformed as a list of mob effect instances

##### Players, Armor Stands and mobs

- ActiveEffects -\> active_effects, contents tranformed as a list of mob effect instances

#### BLOCK ENTITIES

##### beacon

- Primary -\> primary_effect, also changed from number to string id
- Secondary -\> secondary_effect, also changed from number to string id

### LOOT TABLES

- Added sequence loot function
  - Contains 1 field:
    - functions: an array of sub-functions to run in sequence
  - Can also be declared as an inline array with out a type
    - This matches the existing behavior where loot function JSON files can be declared as an array of composite functions
- all_of predicates in loot tables can now be declared implicitly as an inline array without a type
  - This similarly matches the existing behavior where loot predicate JSON files can be declared as an array of sub-predicates

## NETWORK OPTIMIZATIONS

- Gameplay packets are now packed into bigger TCP-packets to reduce overhead from TCP-headers, significantly reducing network usage
- Opening the debug screen with CTRL + F3 will now show charts for ping and received network traffic

## SECURE CHAT

- Clients will no longer disconnect themselves when receiving an invalid chat message
  - A placeholder message will instead be shown in chat

# FIXED BUGS IN SNAPSHOT 23W32A

- [MC-135339](https://bugs.mojang.com/browse/MC-135339) - Host's skin is not visible to other players in a LAN world if the host has not opened any world before
- [MC-177110](https://bugs.mojang.com/browse/MC-177110) - Mob stepping sounds are inconsistently subtitled
- [MC-253137](https://bugs.mojang.com/browse/MC-253137) - The game output console is logged with errors regarding missing signatures from property textures when joining LAN worlds
- [MC-259982](https://bugs.mojang.com/browse/MC-259982) - Wild and eye armor trims display "floating" pixels when applied on the chainmail helmet
- [MC-262591](https://bugs.mojang.com/browse/MC-262591) - Camels emit mob interaction vibrations instead of item consumption vibrations when eating cactus
- [MC-263338](https://bugs.mojang.com/browse/MC-263338) - Armor Trim texture overhangs Turtle Helmet shape
- [MC-264092](https://bugs.mojang.com/browse/MC-264092) - Functions execute commands out of order when containing /say
- [MC-264260](https://bugs.mojang.com/browse/MC-264260) - Furnace GUI is displayed incorrectly when modifying block data
- [MC-264548](https://bugs.mojang.com/browse/MC-264548) - A strange error appears in the log file with Minecraft 23w31a
- [MC-264557](https://bugs.mojang.com/browse/MC-264557) - The file names for the food full and half sprites for both normal and hunger are backwards
- [MC-264565](https://bugs.mojang.com/browse/MC-264565) - "bundle" folder in the sprites directory with only an mcmeta file
- [MC-264576](https://bugs.mojang.com/browse/MC-264576) - Bossbar gets visually stretched instead of cut off
- [MC-264610](https://bugs.mojang.com/browse/MC-264610) - The game hangs if "border" in button.png.mcmeta is changed to half of "width" or greater and you try to open the Game Menu
- [MC-264664](https://bugs.mojang.com/browse/MC-264664) - High contrast slider indicators in menus missing
- [MC-264687](https://bugs.mojang.com/browse/MC-264687) - The capes and skins of the hosts of LAN worlds don't render for other players
- [MC-264689](https://bugs.mojang.com/browse/MC-264689) - High Contrast resource pack makes extra pixels appear at a full bossbar

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/bfe1a408d8d809b206369fceab0e8a883226d0a6/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
