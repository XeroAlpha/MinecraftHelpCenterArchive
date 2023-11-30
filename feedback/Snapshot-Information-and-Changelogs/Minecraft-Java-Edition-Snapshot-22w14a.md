---
title: "Minecraft: Java Edition - Snapshot 22w14a "
date: 2022-04-06T16:02:46Z
updated: 2022-09-16T16:33:41Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/5346567775885-Minecraft-Java-Edition-Snapshot-22w14a-
---

Mangrove trees! Warm frogs! Mud blocks! More mangrove trees! Today, we’re happy to bring you the most mud-tastic Java snapshot to date! 

Sure, it might be our only mud-tastic snapshot to date – but the important thing is that our new biome, mangrove swamp, now is available for testing, along with nitty-gritty features like the recovery compass and other, more technical tidbits.

Enjoy!

# NEW FEATURES IN 22W14A

- Added Clay renewability
- Added Mangrove Trees
- Added Mangrove Swamp biome
- Added Soul Shard and Recovery Compass

## CLAY RENEWABILITY

- Placing Mud above a block that has Pointed Dripstone underneath will eventually turn the Mud Block into Clay

## MANGROVE TREES

Introducing a new type of water-adapted tree that spawns propped up on roots

- Have a chance of spawning a Bee Nest
- Grows from Mangrove Propagules

## MANGROVE SWAMP

Muddy! Murky! Magnificent! Welcome to the newest biome - the Mangrove Swamp

- Located in warmer, more humid places where you’d normally find the Swamp biome in Minecraft
- Here you can find Bees and Warm Frogs
- The floor of this biome is coated with a thick layer of Mud, so be sure to pack your best boots
- Have a nice boat ride under and around the larger-than-life roots of mangrove trees

## RECOVERY COMPASS

A new Recovery Compass can be crafted with Soul Shards which can only be found and are unique to Ancient City chests

- Unlike a normal Compass, the Recovery Compass will point to the last place you died
- If you are not in the dimension you last died, or you haven’t died yet in your world, it will randomly spin
- It can be crafted with 1 Compass surrounded by 9 Soul Shards, which can be found in Ancient Cities

# CHANGES IN 22W14A

- The Warden will now get angry at ALL living mobs that bump into it, not just players

# TECHNICAL CHANGES IN 22W14A

- CatType fields on enitites with type minecraft:cat have been replaced with variant, with numeric values being replaced with string ids (so, for example, 5 becomes minecraft:calico)
- Some mutually exclusive tests in entity predicate (player, fishing_hook, lightning_bolt and catType) have been collapsed to type_specific field
- Added item_delivered_to_player advancement trigger
- Added allay_drop_item_on_block advancement trigger

## PREDICATES

### ENTITY PREDICATE

- player, fishing_hook, lightning_bolt and catType fields have been replaced with type_specific
- type_specific has field type (one of player, fishing_hook, lightning_bolt or cat) and same fields as removed fields
- Example:
- Before:

``` has-line-data
 "lightning_bolt": {
   "blocks_set_on_fire": 0
 }
```

- After

``` has-line-data
  "type_specific": {
    "type": "lightning",
    "blocks_set_on_fire": 0
  }
```

- catType has been wrapped to match new format and now uses new cat variant names instead of texture names:

  - Before

  ``` has-line-data
   "catType": "minecraft:textures/entity/cat/british_shorthair.png"
  ```

- After

``` has-line-data
 "type_specific": {
    "type": "cat",
    "variant": "minecraft:british"
 }
```

- New type_specific options:
  - frog has variant field matching frog variant (minecraft:warm, minecraft:temperate or minecraft:cold)
  - slime applies for slimes and magma creams, has size field matching slime size (smallest is 1)

## ADVANCEMENTS

- Removed field location from triggers location, slept_in_bed, hero_of_the_village and voluntary_exile - it was handled exactly the same as player.location

### NEW TRIGGERS

#### ITEM_DELIVERED_TO_PLAYER

- Triggered when an allay delivers an item to a player
- Conditions:
  - player - a player for which this trigger runs

#### ALLAY_DROP_ITEM_ON_BLOCK

- Triggered when an allay drops an item on a block
- Conditions:
  - player - a player for which this trigger runs
  - location - a predicate for the block that the item was dropped on
  - item - a predicate for the item that was dropped

# FIXED BUGS IN 22W14A

- [MC-207289](https://bugs.mojang.com/browse/MC-207289) - Sculk sensor wool occlusion has directional bias
- [MC-207635](https://bugs.mojang.com/browse/MC-207635) - Sculk sensors react differently to wool occlusion depending on the global direction.
- [MC-249075](https://bugs.mojang.com/browse/MC-249075) - Sculk shrieker isn’t grouped with other sculk related blocks in the decorations tab of creative inventory
- [MC-249122](https://bugs.mojang.com/browse/MC-249122) - block.sculk_catalyst.bloom has no subtitle
- [MC-249254](https://bugs.mojang.com/browse/MC-249254) - Frogs eating named slimes or magma cubes isn’t logged in console
- [MC-249384](https://bugs.mojang.com/browse/MC-249384) - Warden can create Light, barriers or structure voids particles when digging
- [MC-249386](https://bugs.mojang.com/browse/MC-249386) - The entity shadows of wardens are too small in relation to the size of their models
- [MC-249387](https://bugs.mojang.com/browse/MC-249387) - Warden’s digging sound is the same as its emerging sound
- [MC-249400](https://bugs.mojang.com/browse/MC-249400) - The vertical movement of wardens when they’re in liquids is too sensitive
- [MC-249401](https://bugs.mojang.com/browse/MC-249401) - Warden spawn egg isn’t alphabetized correctly
- [MC-249415](https://bugs.mojang.com/browse/MC-249415) - Wardens won’t pathfind through lava even though they’re immune to it
- [MC-249422](https://bugs.mojang.com/browse/MC-249422) - Some subtitles relating to the warden don’t contain possessive apostrophes where appropriate
- [MC-249426](https://bugs.mojang.com/browse/MC-249426) - Angered wardens play the “warden takes notice angrily” sound when hit in survival on top of their hurt sound
- [MC-249430](https://bugs.mojang.com/browse/MC-249430) - Wardens remember players in creative mode
- [MC-249434](https://bugs.mojang.com/browse/MC-249434) - The warden indefinitely roars when attacked by multiple entities
- [MC-249445](https://bugs.mojang.com/browse/MC-249445) - Activated sculk shriekers fail to summon the warden when broken
- [MC-249447](https://bugs.mojang.com/browse/MC-249447) - Activated sculk shriekers fail to summon the warden if you run away
- [MC-249451](https://bugs.mojang.com/browse/MC-249451) - Warden doesn’t appear in spawner
- [MC-249455](https://bugs.mojang.com/browse/MC-249455) - “Not a string” appears in log when serializing angered Warden
- [MC-249473](https://bugs.mojang.com/browse/MC-249473) - Some Warden sounds play in Peaceful difficulty
- [MC-249476](https://bugs.mojang.com/browse/MC-249476) - Warden can spawn in water
- [MC-249479](https://bugs.mojang.com/browse/MC-249479) - Wardens will attack their teammates
- [MC-249499](https://bugs.mojang.com/browse/MC-249499) - Warden summoned with ‘Silent’ tag still plays heartbeat sounds
- [MC-249504](https://bugs.mojang.com/browse/MC-249504) - The sounds of wardens groaning angrily aren’t controlled by the “Hostile Creatures” sound slider
- [MC-249509](https://bugs.mojang.com/browse/MC-249509) - Warden is invisible for a split second when spawned in by spawner or spawn egg
- [MC-249517](https://bugs.mojang.com/browse/MC-249517) - Warden doesn’t detect non-player mobs colliding with them
- [MC-249526](https://bugs.mojang.com/browse/MC-249526) - Sculk shriekers are not activated when the player is riding something
- [MC-249530](https://bugs.mojang.com/browse/MC-249530) - Warden’s hitbox shows up in peaceful difficulty
- [MC-249531](https://bugs.mojang.com/browse/MC-249531) - Warden indefinitely roars when the attack target is invulnerable
- [MC-249646](https://bugs.mojang.com/browse/MC-249646) - The warden sniffs excessively after killing a mob
- [MC-249659](https://bugs.mojang.com/browse/MC-249659) - Sculk Catalyst and Sculk Veins only drop when broken by Silk Touch hoe
- [MC-249664](https://bugs.mojang.com/browse/MC-249664) - Warden despawns when far away
- [MC-249674](https://bugs.mojang.com/browse/MC-249674) - Wardens forget their targets on world reload
- [MC-249712](https://bugs.mojang.com/browse/MC-249712) - Server hangs and game stops responding when loading a chunk containing a structure with an allay
- [MC-249714](https://bugs.mojang.com/browse/MC-249714) - Z-fighting can be seen on the wings of allays during their death animation
- [MC-249720](https://bugs.mojang.com/browse/MC-249720) - Allay’s wings are not attached to its body
- [MC-249727](https://bugs.mojang.com/browse/MC-249727) - Wardens stop sensing vibrations after world reload
- [MC-249728](https://bugs.mojang.com/browse/MC-249728) - Lava can generate in ancient cities and burn wool/make structures fly
- [MC-249729](https://bugs.mojang.com/browse/MC-249729) - Z-fighting can be seen on the underside of allays’ heads
- [MC-249751](https://bugs.mojang.com/browse/MC-249751) - Warden UV overlapping
- [MC-249758](https://bugs.mojang.com/browse/MC-249758) - Z-fighting can be seen when the arms of allays intersect their bodies
- [MC-249761](https://bugs.mojang.com/browse/MC-249761) - Trapdoor of Ice Box in Ancient Cities is by default open
- [MC-249764](https://bugs.mojang.com/browse/MC-249764) - Second lamp in the centres of ancient cities is missing its sculk sensor
- [MC-249768](https://bugs.mojang.com/browse/MC-249768) - entrance_path_5 can never generate
- [MC-249769](https://bugs.mojang.com/browse/MC-249769) - Unused structures in ancient cities
- [MC-249780](https://bugs.mojang.com/browse/MC-249780) - Blocks that require support can generate floating in ancient cities
- [MC-249785](https://bugs.mojang.com/browse/MC-249785) - Warden can be pushed when emerging and digging
- [MC-249800](https://bugs.mojang.com/browse/MC-249800) - Eating doesn’t activate redstone door in the Ancient City center
- [MC-249816](https://bugs.mojang.com/browse/MC-249816) - Wardens hitbox doesn’t adjust when emerging and digging

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/cf4f3a6492c0a84e2e852fe0ea714080923ab6ad/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
