---
title: "Minecraft: Java Edition - Snapshot 23w07a"
date: 2023-02-15T16:17:17Z
updated: 2025-03-12T11:12:49Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/13137448106125-Minecraft-Java-Edition-Snapshot-23w07a
hash:
  execute-on-with-interactions: execute-onwith-interactions
---

This week we're bringing you the Sniffer, Archaeology, and the Cherry Blossom biome as experimental features for the 1.20 update.

Changes for the 1.19.4 release include Interaction Entities, and updates to jukeboxes and horse breeding.

Happy brushing!

# CHANGES

- Jukeboxes have changed to be at parity with Bedrock
- Horse breeding has been updated
- Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens

## RECIPE UNLOCKING

- The Crafting Table recipe is unlocked immediately on creating a new world
- The Crossbow recipe is no longer unlocked by sticks
- The Soul Campfire recipe is no longer unlocked by sticks

## JUKEBOX

- While playing a music disc, it will emit a redstone signal of 15
- Droppers and hoppers can now interact with it

## HORSES

- When breeding horses and the like, the babies' speed, jump height and health are no longer biased toward the average
- This change is intended to make horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots

# TECHNICAL CHANGES

- The vanilla resource pack en_us language file is now sorted alphanumerically by key
- A new recipe serializer crafting_decorated_pot has been added for the new Decorated Pot recipe
- Added show_notification field to recipes
  - Accepts a boolean which determines if a notification is shown when unlocking this recipe
  - defaults to true if isn't specified

## INTERACTION ENTITIES

A new type of entity that records attacks ("left clicks") and interactions ("right clicks"). Interactions are invisible and of a custom size.

Fields:

- width: Width of the entity's bounding box (default 1)
- height: Height of the entity's bounding box (default 1)
- attack: Records the last attack action on the entity
- interaction: Records the last interaction action on the entity
- response: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default false)

### ACTION FORMAT

When an action is stored, it always has two fields:

- player: The UUID (in standard integer array format) of the player performing the action
- timestamp: The timestamp of the game tick when the event happened (stored as a long)

### ADVANCEMENT TRIGGERS

- Interacting with an Interaction entity triggers player_interacted_with_entity
- Attacking an Interaction entity triggers player_hurt_entity

### EXECUTE ON WITH INTERACTIONS

The Interaction entity targets the player who last interacted with it. That makes the following possible:

- execute on attacker: execute as the last player who attacked the entity
- execute on target: execute as the last player who interacted with the entity

# EXPERIMENTAL FEATURES

- Added Sniffer mob
- Added a Cherry Grove biome
- Added Archaeology

## SNIFFER

- Sniffer Mob now available as an experimental feature
  - The Sniffer is the mob vote winner of Minecraft Live 2022 and the first "ancient" mob added to the game
  - Sniffers cannot be tempted or tamed
  - Sniffers are passive friendly mobs
  - Sniffers sniff in the air and occasionally dig for seeds
- Torchflower now available as an experimental feature
  - The Torchflower seed can be planted on farmland and grows into a flower
  - The seed can be used to breed two Sniffers
  - The full-grown flower can be harvested and replanted but can also be crafted into a dye

## CHERRY GROVE BIOME

- Added a new Cherry Grove biome, with pretty cherry blossom trees
- You can find it in the mountains, like Meadows

### PINK PETALS BLOCK

- Added a new Pink Petals block with lots of pink flowers on the ground

### CHERRY WOOD SET

- Added a new Cherry wood set, with all the corresponding wooden things you can make from it. You need to have the Update 1.20 experimental features enabled to see it in game.

## ARCHAEOLOGY

### THE BRUSH

- The brush is a craftable item you can use to brush things

### SUSPICIOUS SAND

- Desert Temples and Desert Wells now contain Suspicious Sand. This fragile block is hard to spot and easy to destroy, so be careful!
- Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

### POTTERY SHARDS

- Pottery Shards have pictures on them
- They cannot be crafted and are only found by brushing Suspicious Sand

### DECORATED POTS

- Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
- You can also use Brick items instead of Pottery Shards in the Decorated Pot recipe
  - The sides that were made from Brick items will not have pictures
- Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
  - Or hit it with your fist to pick up the pot without breaking it

# FIXED BUGS IN SNAPSHOT 23W07A

- [MC-16533](https://bugs.mojang.com/browse/MC-16533) - Horse Breeding never exceeds egg/spawn horse attributes
- [MC-64522](https://bugs.mojang.com/browse/MC-64522) - Server shows as "Old" in server list while starting
- [MC-84633](https://bugs.mojang.com/browse/MC-84633) - Resource packs: ambientocclusion flag only respects topmost parent
- [MC-134448](https://bugs.mojang.com/browse/MC-134448) - Drowned animation glitch
- [MC-181412](https://bugs.mojang.com/browse/MC-181412) - Removing a jukebox with a command while it's playing a music disc won't stop playing the music disc
- [MC-194080](https://bugs.mojang.com/browse/MC-194080) - Elytra model stutters by flying and turning
- [MC-209409](https://bugs.mojang.com/browse/MC-209409) - Sitting cats sink in water
- [MC-226729](https://bugs.mojang.com/browse/MC-226729) - Memory leakage problem in native operations
- [MC-248249](https://bugs.mojang.com/browse/MC-248249) - minecraft:forest_rock feature does not work correctly when used with /place
- [MC-256465](https://bugs.mojang.com/browse/MC-256465) - Baby camels can enter boats despite adult camels not being able to
- [MC-257282](https://bugs.mojang.com/browse/MC-257282) - Allays sometimes have a several-second delay before deciding to follow the player
- [MC-258457](https://bugs.mojang.com/browse/MC-258457) - Resource Pack won't load if it contains reference to non-existing particles
- [MC-258459](https://bugs.mojang.com/browse/MC-258459) - Invalid forced resource pack can cause infinite reload loop on client
- [MC-258580](https://bugs.mojang.com/browse/MC-258580) - Player is kicked from a server for flying in death screen when dying on a Horse or Camel
- [MC-258624](https://bugs.mojang.com/browse/MC-258624) - The Title Screen Warning menu doesn't disappear after the player respawns
- [MC-258697](https://bugs.mojang.com/browse/MC-258697) - Invalid translation of "translationKey=narration.suggestion" in command block GUI
- [MC-258902](https://bugs.mojang.com/browse/MC-258902) - Opening a lectern on Adventure mode and closing it causes inventory desyncs
- [MC-258907](https://bugs.mojang.com/browse/MC-258907) - Advancement trigger "player_interacted_with_entity" doesn't work with "area_effect_cloud" entity when used "glass_bottle" item on it
- [MC-259107](https://bugs.mojang.com/browse/MC-259107) - Opening the crafting recipe book selects the recipe that appears under the mouse cursor
- [MC-259218](https://bugs.mojang.com/browse/MC-259218) - Onboarding isn't resumed after restarting Minecraft
- [MC-259240](https://bugs.mojang.com/browse/MC-259240) - The game crashes when navigating with arrow keys after changing key binds
- [MC-259241](https://bugs.mojang.com/browse/MC-259241) - Turtles can spawn inside each other causing them to get stuck and play constant sounds
- [MC-259489](https://bugs.mojang.com/browse/MC-259489) - Experimental "disabled items" can still be suggested as fuel by the recipe book
- [MC-259573](https://bugs.mojang.com/browse/MC-259573) - Blast Protection does not reduce explosion knockback in creative game mode
- [MC-259675](https://bugs.mojang.com/browse/MC-259675) - Capes occasionally jitter when moving and adjusting your rotation
- [MC-259691](https://bugs.mojang.com/browse/MC-259691) - Drowned that are swimming render outside of their hitboxes when looking up or down
- [MC-259729](https://bugs.mojang.com/browse/MC-259729) - "Falling Block" can appear in death messages
- [MC-259796](https://bugs.mojang.com/browse/MC-259796) - Creeper does not flash white and expand before exploding
- [MC-259797](https://bugs.mojang.com/browse/MC-259797) - Z-fighting occurs on the bottom of boots
- [MC-259805](https://bugs.mojang.com/browse/MC-259805) - Players cannot dismount when riding item_display, block_display and text_display using the ride command
- [MC-259808](https://bugs.mojang.com/browse/MC-259808) - Allay wing animation skips frames/loops incorrectly as of 23w06a
- [MC-259816](https://bugs.mojang.com/browse/MC-259816) - Odd behavior when an item_display, block_display, or text_display entity mounts another entity
- [MC-259819](https://bugs.mojang.com/browse/MC-259819) - Z-fighting on the text of text displays
- [MC-259999](https://bugs.mojang.com/browse/MC-259999) - Entities mounted on display entities do not visually update until after resync

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/b919e6e1683a4b6f37f2717c7841e88e306bdc94/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
