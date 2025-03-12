---
title: Minecraft Java Edition - Snapshot 20W18A
date: 2020-04-29T15:58:57Z
updated: 2025-03-12T11:15:03Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360042479372-Minecraft-Java-Edition-Snapshot-20W18A
---

29 April 2020

*Comparison between 1.15.2 and snapshot 20w18a pictures can be found on minecraft.net*

In this snapshot we've made some changes to redstone wire and fixed a bunch of bugs.

**CHANGES IN 20W18A**

- Redstone wire changes
- The target block now conducts redstone signals

**REDSTONE WIRE**

The blockstate, rendering and behavior of redstone wire are more in line with each other. Redstone will provide power to blocks on all sides it shows a visual connection to, and not do so on those sides without a visual connection.

- A single redstone wire is now represented as a cross.
- A wire on top of a block, which is redirected from below, will power the sides it is redirected to now. E.g. a fence gate above the redirecting wire will be powered.
- Wires that redirect upwards to wires on non-conductive blocks used to only be redirected visually. Now this redirection applies to their behavior as well.
- A wire that is redirected to go over a block will now always provide power to the block. This is most noticeable when the wire has signal strength 1.

**TECHNICAL CHANGES IN 20W18A**

- Added a enable-status option to the server.properties file which if set to false will suppress replies to status requests from clients. This makes the server appear offline in the multiplayer screen
- Added control over how much entity data a server sends to clients
- Advancement system changes

**ENTITY BROADCASTING**

It is now possible to control at what range the server sends data about entities to clients.

- Added an entity-broadcast-range-percentage server property controlling how close entities need to be before being sent to clients. Higher values means entities are visible further away from players but cause more network traffic. Specifies percentage of default value, so for example 50 specifies half of the default range.

**ADVANCEMENTS**

- Added player check to every trigger (except impossible)
- Entity checks in triggers can now use loot table condition syntax

**EXTENDED ENTITY CHECKS**

Entity checks in triggers can now use loot table condition syntax.

Old notation:

{  
  "trigger": "minecraft:player_killed_entity",  
  "conditions": {  
    "entity": {  
      "type": "minecraft:blaze"  
    }  
  }  
}

is now equivalent to:

{  
  "trigger": "minecraft:player_killed_entity",  
  "conditions": {  
    "entity": \[  
     {  
        "condition": "minecraft:entity_properties",  
        "predicate": {  
          "type": "minecraft:blaze"  
        },  
        "entity": "this"  
      }  
    \]  
  }  
}

**Note 1**: Like in loot tables, all conditions in top level array must be met for whole condition to trigger.

**Note 2**: To access new functionality, top level element must be JSON array. JSON object are interpreted as old notation.

Full list of extended triggers:

- New field player in every trigger
- bred_animals - parent, partner, child
- channeled_lightning - victims
- cured_zombie_villager - zombie, villager
- fishing_rod_hooked - entity
- killed_by_crossbow - victims
- player_killed_entity - entity
- entity_killed_player - entity
- player_hurt_entity - entity
- summoned_entity - entity
- tame_animal - entity
- target_hit - projectile
- villager_trade - villager

**MISCELLANEOUS TRIGGER CHANGES**

- Due to addition of player, existing contents of location, slept_in_bed, hero_of_the_village, voluntary_exile can now be placed in location field instead of top-level object. Old syntax is still supported, but depreciated.

**FIXED BUGS IN 20W18A**

- [MC-11211](https://bugs.mojang.com/browse/MC-11211) - Unable to perform many right click actions when targeting the top face of blocks placed at y=255
- [MC-111381](https://bugs.mojang.com/browse/MC-111381) - Rendering rotations for shulkers are set in onInitialSpawn method
- [MC-143904](https://bugs.mojang.com/browse/MC-143904) - Adding a non-rail block to the “rails” block tag will crash the game when placing a minecart on it
- [MC-147255](https://bugs.mojang.com/browse/MC-147255) - Beds in the overworld will explode if in a nether wastes biome
- [MC-162385](https://bugs.mojang.com/browse/MC-162385) - The background of the title text does not fade with the text
- [MC-166269](https://bugs.mojang.com/browse/MC-166269) - Wet wolves become black for an instant after shaking off water
- [MC-166296](https://bugs.mojang.com/browse/MC-166296) - Mobs picking up and equipping items does not play the equipping sound
- [MC-170840](https://bugs.mojang.com/browse/MC-170840) - Broken spawn rates in soul sand valleys and warped forests
- [MC-170944](https://bugs.mojang.com/browse/MC-170944) - /locatebiome messages do not fit for all biome names
- [MC-171523](https://bugs.mojang.com/browse/MC-171523) - Inconsistent strings for warped and crimson wall signs
- [MC-172172](https://bugs.mojang.com/browse/MC-172172) - Adult piglins spin around while following the player
- [MC-172253](https://bugs.mojang.com/browse/MC-172253) - Equip sound doesn’t play when Piglins equip items
- [MC-173067](https://bugs.mojang.com/browse/MC-173067) - NullPointerException when a structure containing a campfire is placed during world generation
- [MC-173198](https://bugs.mojang.com/browse/MC-173198) - Target blocks are transparent and do not transfer redstone signals
- [MC-173385](https://bugs.mojang.com/browse/MC-173385) - New Nether lighting system doesn’t affect fluids, entity-like blocks (chests, etc.) and entities
- [MC-173747](https://bugs.mojang.com/browse/MC-173747) - Armor enchantment glint doesn’t render
- [MC-174573](https://bugs.mojang.com/browse/MC-174573) - Nether vines can drop multiple copies with fortune (free duplication)
- [MC-174593](https://bugs.mojang.com/browse/MC-174593) - Inconsistent pluralisation in “fell off a scaffolding”
- [MC-174811](https://bugs.mojang.com/browse/MC-174811) - Zombified piglins are able to spawn on top of nether wart blocks
- [MC-175107](https://bugs.mojang.com/browse/MC-175107) - It’s possible to get Bad Omen VI in Survival mode
- [MC-175740](https://bugs.mojang.com/browse/MC-175740) - Game crashes when dispenser is used on non-beehive block in \#beehives tag
- [MC-175741](https://bugs.mojang.com/browse/MC-175741) - Game crashes when a cat attempts to sleep in a non-bed in the \#beds tag
- [MC-176028](https://bugs.mojang.com/browse/MC-176028) - Striders can spawn in stacks of three or more
- [MC-176032](https://bugs.mojang.com/browse/MC-176032) - Striders can float
- [MC-176054](https://bugs.mojang.com/browse/MC-176054) - Baby strider passengers float / passenger offset is too high
- [MC-176135](https://bugs.mojang.com/browse/MC-176135) - Striders riding other entities are not cold
- [MC-176203](https://bugs.mojang.com/browse/MC-176203) - Striders with Levitation walking on Lava don’t levitate
- [MC-176459](https://bugs.mojang.com/browse/MC-176459) - Baby striders can spawn with saddles
- [MC-176468](https://bugs.mojang.com/browse/MC-176468) - Adult striders can spawn with saddles
- [MC-177105](https://bugs.mojang.com/browse/MC-177105) - Piglins, hoglins, zoglins and villagers look at their target’s feet instead of its head
- [MC-177127](https://bugs.mojang.com/browse/MC-177127) - Unnecessary exclamation point in subtitle “End Portal opens!”
- [MC-177173](https://bugs.mojang.com/browse/MC-177173) - Baby Zoglin age status value is not stored in the NBT tag.
- [MC-177561](https://bugs.mojang.com/browse/MC-177561) - Compasses used on the top of lodestone at y=255 do not break when the lodestone is destroyed
- [MC-177771](https://bugs.mojang.com/browse/MC-177771) - “death.attack.fireworks.item” displays raw translation string (is untranslated)
- [MC-177790](https://bugs.mojang.com/browse/MC-177790) - Piglin Banners are named block.minecraft.banner.piglin.\[\<colour\>\]
- [MC-177794](https://bugs.mojang.com/browse/MC-177794) - Globe Banner Pattern is not required to add the globe to a banner
- [MC-177816](https://bugs.mojang.com/browse/MC-177816) - Failed to access/delete level should be “world”
- [MC-177911](https://bugs.mojang.com/browse/MC-177911) - Cave generator doesn’t cut through blackstone
- [MC-177951](https://bugs.mojang.com/browse/MC-177951) - Game crashes when fire starters are used on a non-campfire in the \#campfires tag
- [MC-177976](https://bugs.mojang.com/browse/MC-177976) - Baby piglins can pick up soul campfires
- [MC-178013](https://bugs.mojang.com/browse/MC-178013) - Zombified Piglins riding striders can despawn, leaving saddled striders
- [MC-178129](https://bugs.mojang.com/browse/MC-178129) - Entity conversion subtitles use inconsistent tenses
- [MC-178336](https://bugs.mojang.com/browse/MC-178336) - The message “You have no home bed or respawn anchor, or it was obstructed” doesn’t make it clear that your respawn anchor might have been depleted
- [MC-178817](https://bugs.mojang.com/browse/MC-178817) - “Chain Blocks” don’t have a “waterlogged” state
- [MC-178943](https://bugs.mojang.com/browse/MC-178943) - Piglins/hoglins spawned in bastion remnants can outrun players
- [MC-178949](https://bugs.mojang.com/browse/MC-178949) - Bastion Remnants cannot be generated in in superflat worlds
- [MC-179839](https://bugs.mojang.com/browse/MC-179839) - Chat text renders behind the armor bar
- [MC-179841](https://bugs.mojang.com/browse/MC-179841) - Game crashes when you optimize your world
- [MC-179845](https://bugs.mojang.com/browse/MC-179845) - Rain falls through any blocks in some spots
- [MC-179847](https://bugs.mojang.com/browse/MC-179847) - Hoglins and Piglins spin around
- [MC-179850](https://bugs.mojang.com/browse/MC-179850) - There is no difference between Entity Distance 100% and 500%
- [MC-179858](https://bugs.mojang.com/browse/MC-179858) - Maps show stone-like pattern despite it not being there
- [MC-179863](https://bugs.mojang.com/browse/MC-179863) - Setting attribute minecraft:generic.max_health value to 0 or lower causes an infinite death loop after dying
- [MC-179866](https://bugs.mojang.com/browse/MC-179866) - In some spots, it is raining even if it should be snowing
- [MC-179868](https://bugs.mojang.com/browse/MC-179868) - Crash when going to a previous page of writable books
- [MC-179883](https://bugs.mojang.com/browse/MC-179883) - Raw JSON text duplicates components in “extra” in entity names
- [MC-179886](https://bugs.mojang.com/browse/MC-179886) - Play button overlay doesn’t appear in worldsave selection GUI
- [MC-179905](https://bugs.mojang.com/browse/MC-179905) - Caption of game rule screen is missing
- [MC-179952](https://bugs.mojang.com/browse/MC-179952) - Height map data doesn’t get converted
- [MC-179954](https://bugs.mojang.com/browse/MC-179954) - Keybindings are not correctly inserted into the demo info box text
- [MC-180030](https://bugs.mojang.com/browse/MC-180030) - Adult hoglins zombified into an adult zoglin deals the same damage as a baby
- [MC-180100](https://bugs.mojang.com/browse/MC-180100) - Rain particles appear black under certain conditions
- [MC-180110](https://bugs.mojang.com/browse/MC-180110) - Underline and strikethrough in JSON text don’t always render correctly
- [MC-180125](https://bugs.mojang.com/browse/MC-180125) - Incorrect font spacing on non-BMP characters
- [MC-180135](https://bugs.mojang.com/browse/MC-180135) - Empty chat messages are not displayed
- [MC-180138](https://bugs.mojang.com/browse/MC-180138) - Long messages in chat no longer have hanging indention
- [MC-180246](https://bugs.mojang.com/browse/MC-180246) - The “r” in “Game rules” is not capitalized
- [MC-180248](https://bugs.mojang.com/browse/MC-180248) - The “g” in “Upgrade gear” is not capitalized
- [MC-180299](https://bugs.mojang.com/browse/MC-180299) - “Elytra” in “Disable Elytra movement check” is inconsistently capitalized
- [MC-180353](https://bugs.mojang.com/browse/MC-180353) - Chat background renders in front of the Debug Menu but chat text renders behind it
- [MC-181296](https://bugs.mojang.com/browse/MC-181296) - Panorama has wrong overlay when using Programmer Art

**GET THE SNAPSHOT**

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/4d84832bdc7f62aa96b0d5d5a73b1272e8c474b5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
