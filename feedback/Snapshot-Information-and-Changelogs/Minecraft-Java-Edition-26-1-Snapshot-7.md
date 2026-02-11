---
title: Minecraft Java Edition - 26.1 Snapshot 7
date: 2026-02-11T12:30:37Z
updated: 2026-02-11T12:30:44Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43431558569997-Minecraft-Java-Edition-26-1-Snapshot-7
hash:
  h_01KH6AWSSY2SMBWTCPW9P3MHQ4: new-features
  h_01KH6AWST4Q8MAVV89KXCBNXHP: changes
  h_01KH6AWST5WW3QN5PH3G66B9F0: baby-mobs
  h_01KH6AWST99YETVK7C3A8XC9Z2: ui
  h_01KH6AWST9CYT2Z6BBYHCPPMM8: chat
  h_01KH6AWSTA0N19HD7954DYFG8Z: technical-changes
  h_01KH6AWSTC82J4YB87A5H9DXGY: data-pack-version-991
  h_01KH6AWSTC3GP8DNJE98NY4Q44: data-driven-mob-sound-variants
  h_01KH6AWSTCT13EVRC1S2FS5438: cat-sound-variants
  h_01KH6AWSTGT0101TP3FKRBER6W: pig-sound-variants
  h_01KH6AWSTJS3QZAC19QEDTXV4H: cow-sound-variants
  h_01KH6AWSTMBK27GYKQ7S5BANTY: chicken-sound-variants
  h_01KH6AWSTNJGXRZY3NNWNEVP0F: resource-pack-version-81
  h_01KH6AWSTPFAEK5ZN7Z79CGQPJ: block-model-format
  h_01KH6AWSTR4FWMR4J4E7GCFRX2: entity-textures
  h_01KH6AWSTY28TXZ5S1EXN59CGT: sounds
  h_01KH6AWSV368CZC4G0W6W0TF0G: shaders--post-process-effects
  h_01KH6AWSV50PENEHZ8NCYMCBDM: fixed-bugs-in-261-snapshot-7
  h_01KH6AWSVB3DED545S1V9ACTFY: get-the-snapshot
---

Sound the new trumpet note block instrument, it's Tuesday Wednesday! With this week's release, our undead and hostile babies have a new scary strategy: looking even more adorable! The baby zombie, husk, zombie villager, piglin, zombified piglin, and drowned are storming the snapshot looking deceivingly innocent and huggable. Just know you can only truly trust the baby villagers! Oh, we've also added sound variants for some of your favorite adult mobs!

On the technical side of things we are, among other things, making changes to how chunks are rendered, as well as improving support for block translucency in resource packs. For the full list of changes, browse the changelog below!

Happy mining!

## New Features

- Added adult sound variants for the following animals:
  - Cats have a new variant called royal
  - Pigs have new variants called mini and big
  - Cows have a new variant called moody
  - Chickens have a new variant called picky
  - The original sounds of each animal are used for the variant called classic
  - Every one of these animals will have a random sound variant assigned to it from the new variants and the original one
- Added a trumpet instrument for when using a Note Block that is placed on a Copper Block
  - The sound is different based on the oxidation level of the Copper Block
- Golden Dandelion can now be used on Hoglin babies

## Changes

- Revamped the visuals of more baby mobs
- Fixed issue where Baby Axolotl animations were being disrupted by walking animation

### Baby Mobs

- Updated the models and textures of the following baby mobs:
  - Zombie
    - Increased the bounding box of baby Zombie to better fit the new model
  - Husk
    - Increased the bounding box of baby Husk to better fit the new model
  - Drowned
    - Increased the bounding box of baby Drowned to better fit the new model
  - Piglin
    - Increased the bounding box of baby Piglin to better fit the new model
  - Zombified Piglin
    - Increased the bounding box of baby Zombified Piglin to better fit the new model
  - Villager
    - Increased the bounding box of baby Villager to better fit the new model
  - Zombie Villager
    - Increased the bounding box of baby Zombie Villager to better fit the new model

### UI

- Changes to how the chat screen is handled when it's restricted by settings

#### Chat

- The chat screen can now always be opened, even when chatting is restricted by settings
  - When the chat screen is open, specific actions and message types may still be restricted
  - Information about the restrictions (if there are any) is displayed on top of the chat box and above the chat input when the chat screen is open
  - The same information can also be accessed in World Settings screen
- Chat entries from client actions like taking screenshots will now be displayed even when messages from players and servers are restricted
- Changing chat settings will now hide all messages of restricted types and discard any new ones
- The handling of chat messages on a published local server is now more consistent with dedicated servers in regard to chat settings

## Technical Changes

- The Data Pack version is now 99.1
- The Resource Pack version is now 81
- The internals of how chunk geometry data is stored in GPU memory and how they are rendered has been changed

> **Developer's Note**: *If you experience any visual bugs, performance degradation or crashes, please report it to us on our *[*bug tracker*](https://bugs.mojang.com/)*.*

## Data Pack Version 99.1

- Added data-driven registry for sound variants for Pig, Cat, Cow and Chicken

### Data-driven Mob Sound Variants

### Cat Sound Variants

- Cat sound variants can be data-driven by adding entries to data//cat_sound_variant/.json
- The file contains two sound sets defining adult_sounds and baby_sounds
- Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
  - ambient_sound
  - stray_ambient_sound
  - hiss_sound
  - hurt_sound
  - death_sound
  - eat_sound
  - beg_for_food_sound
  - purr_sound
  - purreow_sound

### Pig Sound Variants

- Pig sound variants can be data-driven by adding entries to data//pig_sound_variant/.json
- The file contains two sound sets defining adult_sounds and baby_sounds
- Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
  - ambient_sound
  - hurt_sound
  - death_sound
  - step_sound

### Cow Sound Variants

- Cow sound variants can be data-driven by adding entries to data//cow_sound_variant/.json
- Each sound variant contains the following fields which correspond to sound events to use for the specific behaviour:
  - ambient_sound
  - hurt_sound
  - death_sound
  - step_sound

### Chicken Sound Variants

- Cow sound variants can be data-driven by adding entries to data//chicken_sound_variant/.json
- The file contains two sound sets defining adult_sounds and baby_sounds
- Each sound set contains the following fields which correspond to sound events to use for the specific behaviour:
  - ambient_sound
  - hurt_sound
  - death_sound
  - step_sound

## Resource Pack Version 81

- Updated mule_baby.png and donkey_baby.png to fit model properly

### Block Model Format

- Any block model can now support cutout or translucent (partially transparent pixels) textures
  - Whether a quad is rendered in the cutout or translucent render pass is determined by the contents of its assigned sprite
    - Any sprite with translucent (partially transparent) pixels will be assigned to the "translucent" pass
    - Any sprite with fully transparent pixels will be assigned to the "cutout" pass
    - All other sprites are assigned to the "solid" pass
  - Note: the assigned render pass also implies rendering order: all solid geometry is rendered before all cutout geometry, which is rendered before all translucent geometry
- The format of the textures map has been updated:
  - Non-string entries will now be rejected, instead of interpreted as strings
  - Alongside the previous inline sprite ID form, entries can now be defined as an object with fields:
    - sprite - the sprite ID
    - force_translucent - optional boolean, true if any geometry with this texture should be forced into the "translucent" pass
      - This is useful for example for blocks that don't have any translucent pixels, but use the mean mipmap strategy
      - Default: false

### Entity Textures

- Added new entity textures:
  - entity/villager/villager_baby.png
  - entity/villager/baby/desert.png
  - entity/villager/baby/jungle.png
  - entity/villager/baby/plains.png
  - entity/villager/baby/savanna.png
  - entity/villager/baby/snow.png
  - entity/villager/baby/swamp.png
  - entity/villager/baby/taiga.png
  - entity/zombie/drowned_baby.png
  - entity/zombie/drowned_outer_layer_baby.png
  - entity/zombie/husk_baby.png
  - entity/zombie/zombie_baby.png
  - entity/zombie_villager/zombie_villager_baby.png
  - entity/zombie_villager/baby/desert.png
  - entity/zombie_villager/baby/jungle.png
  - entity/zombie_villager/baby/plains.png
  - entity/zombie_villager/baby/savanna.png
  - entity/zombie_villager/baby/snow.png
  - entity/zombie_villager/baby/swamp.png
  - entity/zombie_villager/baby/taiga.png
  - entity/piglin/piglin_baby.png
  - entity/piglin/zombiefied_piglin_baby.png
  - entity/equipment/humanoid_baby/chainmail.png
  - entity/equipment/humanoid_baby/copper.png
  - entity/equipment/humanoid_baby/diamond.png
  - entity/equipment/humanoid_baby/gold.png
  - entity/equipment/humanoid_baby/iron.png
  - entity/equipment/humanoid_baby/leather_overlay.png
  - entity/equipment/humanoid_baby/leather.png
  - entity/equipment/humanoid_baby/netherite.png
  - entity/equipment/humanoid_baby/turtle_scute.png

### Sounds

- Added new sound variants: one for adult Cat, adult Chicken, adult Cow and two for adult Pig
- Added new sound events for the Cat:
  - entity.cat_royal.ambient
  - entity.cat_royal.hiss
  - entity.cat_royal.hurt
  - entity.cat_royal.death
  - entity.cat_royal.eat
  - entity.cat_royal.beg_for_food
  - entity.cat_royal.purr
  - entity.cat_royal.purreow
  - entity.cat_royal.stray_ambient
- Added new sound events for the Pig:
  - entity.pig_mini.ambient
  - entity.pig_mini.hurt
  - entity.pig_mini.death
  - entity.pig_big.ambient
  - entity.pig_big.hurt
  - entity.pig_big.death
- Added new sound events for the Chicken:
  - entity.chicken_picky.ambient
  - entity.chicken_picky.death
  - entity.chicken_picky.hurt
  - entity.chicken_picky.step
- Added new sound events for the Cow:
  - entity.cow_moody.ambient
  - entity.cow_moody.death
  - entity.cow_moody.hurt
  - entity.cow_moody.step
- Added new sound events for the trumpet instrument:
  - block.note_block.trumpet
  - block.note_block.trumpet_exposed
  - block.note_block.trumpet_oxidized
  - block.note_block.trumpet_weathered

### Shaders & Post-process Effects

> **Developer's Note**: *Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future.*

- The block.vsh and terrain.vsh no longer receive the Normal vertex attribute

## Fixed bugs in 26.1 Snapshot 7

- [MC-13187](https://bugs.mojang.com/browse/MC-13187) - Water in water cauldrons is not transparent
- [MC-257362](https://bugs.mojang.com/browse/MC-257362) - Particles from breaking frogspawn are transparent
- [MC-263488](https://bugs.mojang.com/browse/MC-263488) - The item texture of pink petals has a misplaced transparent pixel
- [MC-299730](https://bugs.mojang.com/browse/MC-299730) - Dumping textures while using a TTF font crashes the game
- [MC-305492](https://bugs.mojang.com/browse/MC-305492) - Baby wolves have visible z-fighting
- [MC-305501](https://bugs.mojang.com/browse/MC-305501) - Baby wolves render their collar incorrectly all over their body
- [MC-305515](https://bugs.mojang.com/browse/MC-305515) - Rabbits float when panicking
- [MC-305545](https://bugs.mojang.com/browse/MC-305545) - The "wolf_baby" and "wolf_tame_baby" textures are identical
- [MC-305580](https://bugs.mojang.com/browse/MC-305580) - Baby zombie horses and baby skeleton horses grow into adults, unlike other baby undead mobs
- [MC-305583](https://bugs.mojang.com/browse/MC-305583) - The right side of the texture of British shorthair kittens overlaps the back of the head
- [MC-305591](https://bugs.mojang.com/browse/MC-305591) - The texture of temperate piglets uses the wrong color for a part of their body
- [MC-305644](https://bugs.mojang.com/browse/MC-305644) - Piglet heads are off-center
- [MC-305984](https://bugs.mojang.com/browse/MC-305984) - The legs of baby donkeys and baby mules extend into the ground by one pixel, mapped to an irregular texture area
- [MC-305986](https://bugs.mojang.com/browse/MC-305986) - “subtitles.entity.baby_chicken.hurt” displays as a raw translation key
- [MC-305999](https://bugs.mojang.com/browse/MC-305999) - Entities in any light level besides 0 render fully bright
- [MC-306008](https://bugs.mojang.com/browse/MC-306008) - Baby horse legs are not connected to the body correctly when it rears up
- [MC-306034](https://bugs.mojang.com/browse/MC-306034) - "subtitles.entity.baby_horse.land" displays as a raw translation key
- [MC-306097](https://bugs.mojang.com/browse/MC-306097) - Golden dandelions don't make mobs persistent
- [MC-306136](https://bugs.mojang.com/browse/MC-306136) - Baby pandas float in the air when fed bamboo after being fed golden dandelions
- [MC-306137](https://bugs.mojang.com/browse/MC-306137) - Players can feed baby pandas after feeding them golden dandelions
- [MC-306157](https://bugs.mojang.com/browse/MC-306157) - Getting the average water color of blocks takes up about half of the chunk render compile times
- [MC-306161](https://bugs.mojang.com/browse/MC-306161) - The color of baby turtles' front legs is inconsistent with the back legs
- [MC-306172](https://bugs.mojang.com/browse/MC-306172) - Golden dandelions don't work on baby hoglins
- [MC-306185](https://bugs.mojang.com/browse/MC-306185) - The podzol patches in the Old Growth Pine Taiga and Old Growth Spruce Taiga biomes are now generated incorrectly
- [MC-306195](https://bugs.mojang.com/browse/MC-306195) - Camel husks with the "Age" tag set below -24000 use their removed baby variant's hitbox size and animation speed
- [MC-306201](https://bugs.mojang.com/browse/MC-306201) - Baby turtles' legs now z-fight
- [MC-306207](https://bugs.mojang.com/browse/MC-306207) - The world upgrade tooltips in the world selection screen appear with any world after selecting a world that needs to be upgraded
- [MC-306222](https://bugs.mojang.com/browse/MC-306222) - Some strings introduced in 26.1 Snapshot 6 are grammatically incorrect

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/d3b86d840aa59a7512b6a028d40762cf6e492eeb/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
