---
title: "Minecraft: Java Edition - Snapshot 22w13a"
date: 2022-03-31T16:38:05Z
updated: 2022-03-31T16:38:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/5203304085517-Minecraft-Java-Edition-Snapshot-22w13a
---

**Allay**, the mob that nobody is really sure how to pronounce, is now entering the latest Minecraft: Java Edition snapshot. Along with our new shiny blue friend, we've added the **ancient cities**, which have seen some pretty drastic changes since the experimental snapshot a few weeks ago, so make sure you check them out. 

Happy mining!

# NEW FEATURES IN 22W13A

- Added Allay mob
- Added Ancient Cities

## ALLAY

- Allays will collect all the surrounding items that match the item they are holding
- Allays will like a player who hands them an item and will bring the items they collect to their liked player
- If the Allay hears a noteblock play, that noteblock becomes the Allay’s favorite noteblock for 30 seconds. The Allay will stay near that noteblock for that duration and bring its collected items to the noteblock instead of to the player
- Interacting with an Allay with an empty hand will remove the item the Allay is holding
- Allays can be found in Pillager Outposts and Woodland Mansions

## ANCIENT CITY

Wander the halls of these long-abandoned structures in the Deep Dark depths to uncover some relics long forgotten.

- Ancient City structures spawn in the Deep Dark biome
- In chests, guarded by sculk sensors and shriekers, you can find the new Swift Sneaking enchantment
- You can also find a new mysterious block called Reinforced Deepslate here, which cannot be obtained in Survival
- Mobs cannot spawn in Ancient Cities

### DIFFERENCES COMPARED TO THE EXPERIMENTAL DEEP DARK SNAPSHOT

- Many adjustments have been made to Ancient Cities, with new and tweaked structures
- Loot tables have been adjusted for Ancient Cities, including a separate loot table for the “ice box” structures

# CHANGES IN 22W13A

- The recipes for minecart with chest/furnace/tnt/hopper are now shapeless
- When broken each minecart variant drops itself as an item, instead of splitting into two items (such as chest and minecart)
- Only wool and wool carpets now block the sounds coming from noteblocks

# TECHNICAL CHANGES IN 22W13A

- Added kill_mob_near_sculk_catalyst advancement trigger
- Sculk shrieker block state changes
- Renamed some game events

## ADVANCEMENTS

### NEW TRIGGERS

#### KILL_MOB_NEAR_SCULK_CATALYST

- Triggered when a player kills an entity next to Sculk Catalyst
- Conditions:
  - player - a player for which this trigger runs
  - entity - a predicate for the entity that was killed
  - killing_blow - a predicate for how the entity was killed

## SCULK SHRIEKER

- Added can_summon blockstate to the Sculk Shrieker that determines whether a Shrieker can summon a Warden or not
- Shriekers placed via worldgen will have can_summon set to true
- When a Shrieker is placed or generated via Sculk spread, can_summon is set to false

## GAME EVENTS

Some game events have been renamed, with some of those changes to make them more gramatically consistent:

- drinking_finish -\> drink
- entity_killed -\> entity_die
- entity_damaged -\> entity_damage
- elytra_free_fall -\> elytra_glide
- mob_interact -\> entity_interact
- ravager_roar -\> entity_roar
- wolf_shaking -\> entity_shake

The following events have been collapsed into block_activate and block_deactivate:

- block_press
- block_unpress
- block_switch
- block_unswitch

Other miscellaneous changes to game events:

- ring_bell has been removed and replaced with block_change
- Both shulker_open and shulker_close have been removed in favour of using container_open and container_close
- fishing_rod_cast and fishing_rod_reel_in have been renamed to item_interact_start and item_interact_finish
- Added ignore_vibrations_on_occluding_block game event tag with subsequent logic
- entity_interact should be dispatched more often when interacting with various mobs

# FIXED BUGS IN 22W13A

- [MC-249103](https://bugs.mojang.com/browse/MC-249103) - Z-fighting can be seen on the underside of frogs’ feet
- [MC-249110](https://bugs.mojang.com/browse/MC-249110) - Z-fighting textures inside the frog’s mouth
- [MC-249115](https://bugs.mojang.com/browse/MC-249115) - Frogs spawn with wrong color in some biomes
- [MC-249132](https://bugs.mojang.com/browse/MC-249132) - Frogs are not required to be bred for the Two by Two advancement
- [MC-249349](https://bugs.mojang.com/browse/MC-249349) - Dispensing a Bucket of Tadpole dispenses the item, instead of water with a tadpole
- [MC-249380](https://bugs.mojang.com/browse/MC-249380) - The locks of chests within chest boats are positioned slightly too high
- [MC-249382](https://bugs.mojang.com/browse/MC-249382) - Boats with chest do not drop items contained in chest when destroyed in Creative
- [MC-249389](https://bugs.mojang.com/browse/MC-249389) - GUI Scale is a slider instead of a button
- [MC-249392](https://bugs.mojang.com/browse/MC-249392) - Options have missing or untranslated names
- [MC-249397](https://bugs.mojang.com/browse/MC-249397) - Bottom face of Warden’s right arm missing in ‘warden_bioluminescent_layer’ texture
- [MC-249398](https://bugs.mojang.com/browse/MC-249398) - Game crash regarding warden
- [MC-249404](https://bugs.mojang.com/browse/MC-249404) - Boats with Chest aren’t grouped in the recipe book
- [MC-249405](https://bugs.mojang.com/browse/MC-249405) - chatScale option defaults to 0.0 instead of 1.0, causing chat to disappear
- [MC-249409](https://bugs.mojang.com/browse/MC-249409) - Furnaces, blast furnaces and smokers don’t cook without fuel in the bottom slot, even if they are already fired up
- [MC-249474](https://bugs.mojang.com/browse/MC-249474) - Four-legged mobs do not sit correctly in a boat with a chest
- [MC-249642](https://bugs.mojang.com/browse/MC-249642) - Wardens can’t pass over rails

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/7c8afca77bb9a73d31cdc70f2f68b4119d581455/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
