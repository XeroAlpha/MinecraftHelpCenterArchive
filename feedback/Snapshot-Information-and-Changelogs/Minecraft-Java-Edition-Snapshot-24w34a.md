---
title: Minecraft Java Edition - Snapshot 24w34a
date: 2024-08-21T14:50:03Z
updated: 2024-08-21T14:53:41Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/29460715867277-Minecraft-Java-Edition-Snapshot-24w34a
hash:
  h_01J5B9R55Q6CN57NGCFXWVQ8JY: experimental-features
  h_01J5TP6YRS4B5QX1AGQJ0104EX: bundles
  h_01J5TP6YRS93NK5V0R4NRMFPWS: minecart-improvements
  h_01J5TP6YRSDRMX19SAC3F22XEA: redstone-experiments
  h_01J5TP6YRS8QTVPHQSYQ44KVKE: changes
  h_01J5TP6YRSXMA1AYV2FN0T6A8V: technical-changes
  h_01J5TP6YRSP4ZRD46XT6TE3FZT: data-pack-version-50
  h_01J5TP6YRSWFJRX4PQAKS1DBH5: changed-item-components
  h_01J5TP6YRSSKT5WYP45FHSMPQ0: minecraftfood
  h_01J5TP6YRSP9JPTHKF6ZPJCZC2: new-item-components
  h_01J5TP6YRS7FBPBNPE374PCHR9: minecraftuse_remainder
  h_01J5TP6YRSBEBCH8DVE5CMDJEB: minecraftuse_cooldown
  h_01J5TP6YRTGY83DKF27V5E3DAG: minecraftconsumable
  h_01J5TP6YRTJ1PAH0HFE6N2TR70: resource-pack-versions-36
  h_01J5TP6YRTGCFZM43EG6FWGANY: shaders--post-process-effects
  h_01J5TP6YRTN6MBZ0NGEN44YV5S: shader-program-definitions
  h_01J5TP6YRT7J9PEM1CMJC0MHXX: shader-imports
  h_01J5TP6YRT624RFQXBCNA8C3N4: post-process-effect-definitions
  h_01J5TP6YRT322FXSF071ZKQ9P2: fixed-bugs-in-24w34a
  h_01J5TP6YRT90GC23MAQZH7T56T: get-the-snapshot
---

Hello! Here is the next snapshot for 1.21.2! It contains some much-requested tweaks to experimental features, as well as some technical changes and optimizations.

Happy mining!

 

## Experimental Features

The following changes only apply when their respective Experiment is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

### Bundles

- The Bundle tooltip now fits 3 rows and can aways show at least 8 item types

> **Developer's Note**: *Items fill up a Bundle in rows of four, and when a row is full it is pushed down by the row above. This means there can be empty spaces in the top row.*  
>   
> *In the previous 2020 Bundle experiment, items filled in from the top without leaving any gaps. We changed this behavior because it meant that items moved left and right in the Bundle as new items were added. This made it more difficult for some players to keep track of the order of items and some even reported that the items were moving randomly!*  
>   
> *With only two rows in the tooltip, the behavior of pushing a full row of items further down the Bundle removed half of the visible items, which was too much. We're adding a third row to make the design work better and allow players to see more of the items in their Bundles as they fill up.*

### Minecart Improvements

Please note that the experimental features behind this toggle are not aimed at any future release at this time. Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on this [feedback page](https://aka.ms/fbcarts).

- Minecarts no longer forcefully snap to the center of a block when landing on a rail
  - Minecarts snap to corners along the diagonal, and snaps after being pushed by a Piston
  - This allows for Piston bolts and similar contraptions
- Dispensers are allowed to stack Minecarts again
- Minecarts now more easily come to rest at opposing slopes
- Minecarts no longer tilt during a short fall, or when they are falling straight down
- Minecarts are now placed (or dispensed) with the correct rotation straight away when put on rails
  - They are also placed with the correct rotation onto slopes
- Minecarts no longer phase through blocks on slopes when going up or down, they collide instead

### Redstone Experiments

Please note that the experimental features behind this toggle are not aimed at any future release at this time.  
Instead, this is a place for us to try out changes and gather feedback.

We are excited to hear what you think about these changes: please share your feedback on the [feedpack page](https://aka.ms/fbredstone).

> **Developer's Note**: *The removal of excessive neighbor updates around wire affects the behavior of Quasi-Connectivity based contraptions. We plan to address these issues at a later point.*

- Redstone wire updates now have a left-first preference
  - That means if there is a fork in a wire and the distance on both sides is the same, the left side will be updated first
  - This removes most of the random behavior
  - The remaining edge cases which are still random are situations where wire gets powered from above or below without enough context

## Changes

The following changes apply to the game regardless of which experiments are turned on.

- Projectiles such as Arrows, Tridents and Fishing Bobbers now bounce on the world border if hit
- Framerate has been improved when using higher render distances
  - Significantly reduced the performance impact when turning the camera
- The recipe book now repeats the last selected recipe when a "selected" key is pressed (space or either enter key)
- Items which convert to another item after consumption will no longer do so in Creative
  - For example, a Honey Bottle will no longer add a Glass Bottle to your inventory when consumed in Creative

## Technical Changes

- The Data Pack version is now 50
- Resource Pack version is now 36

## Data Pack Version 50

### Changed Item Components

#### minecraft:food

- The food component has been changed to become a data container which only holds the food stats applied when the item is consumed
  - This component no longer gives it the ability to be consumed, and can be done instead with the new consumable component
- Format: object with fields
  - nutrition The amount of nutrition applied when consumed
  - saturation The amount of saturation applied when consumed
  - can_always_eat Whether it can be consumed even when the user is not hungry

### New Item Components

#### minecraft:use_remainder

- If present, will replace the item with a remainder item if its stack count has decreased after use
  - If the item has a stack count higher than 0 after use, the remainder item will be added to the inventory instead
  - If the inventory is full when trying to add a remainder item to it, it will be dropped on the ground instead
- Format: single value as an item stack
  - e.g. use_remainder={id:'minecraft:stick', count:1}

#### minecraft:use_cooldown

- If present, this item will apply a cooldown to all items of the same type when it has been used
- Format: object with fields
  - seconds: Positive float representing the amount of seconds the cooldown will take place for
  - cooldown_group: Optional namespaced id representing the cooldown group
    - If present, this item will be part of a cooldown group and no longer share cooldowns with its base item type
    - Instead, cooldowns applied to this item will only be shared with any other items that are part of the same cooldown group
  - e.g. use_cooldown={seconds:1.5, cooldown_group:"minecraft:custom_weapon"}

#### minecraft:consumable

- If present, this item can be consumed on use
  - If food, potion_contents, ominous_bottle_amplifier or suspicious_stew_contents are also present on this item, consuming this will apply the stats and effects of those components
- Format: object with fields
  - consume_seconds: Non-negative float, the amount of seconds it takes for a player to consume the item
    - Default value: 1.6
  - animation: The animation used during consumption of the item
    - Default value: eat
    - Accepted values:
      - none
      - eat
      - drink
      - block
      - bow
      - spear
      - crossbow
      - spyglass
      - toot_horn
      - brush
  - sound: Sound event, the sound used during and on completion of the item's consumption
    - Default value: entity.generic.eat
  - has_consume_particles: Boolean, whether consumption particles are emitted while consuming this item
    - Default value: true
  - on_consume_effects: An optional list of side effects which take place as a result of consuming this item
    - There are currently 5 valid consume effects
    - minecraft:apply_effects
      - effects: A list of status effect instances applied once consumed
      - probability: Float, the probability the above effects will be applied once consumed
        - Default value: 1.0
    - minecraft:remove_effects
      - effects: A set of status effects removed once consumed, as either a tag or list of ids
    - minecraft:clear_all_effects
      - Clears all status effects of the consumer
    - minecraft:teleport_randomly
      - diameter: Positive float, the diameter that the consumer will be teleported within
        - Default value: 16.0
    - minecraft:play_sound
      - sound: Sound event, played once consumed
  - e.g. consumable={consume_seconds:3.0, animation:'eat', sound:'entity.generic.eat', has_consume_particles:true, on_consume_effects:\[{type:'minecraft:clear_all_effects'}\]}

## Resource Pack Versions 36

### Shaders & Post-process Effects

> **Developer's Note**: *Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future.*

- Shader program configurations can now specify preprocessor define directives to apply to their linked shaders
  - Many shader implementations have been merged by making use of this
- The format of core shader and post-processing shader configurations have been consolidated
- The rendertype_entity_glint_direct shader has been removed (replaced by rendertype_entity_glint)
- The rendertype_entity_translucent_cull shader has been removed (replaced by rendertype_item_entity_translucent_cull)

#### Shader Program Definitions

- Program definitions for post-processing effects (assets/\<namespace\>/shaders/program/\<name\>.json) have been made consistent with core shader definitions (assets/\<namespace\>/shaders/core/\<name\>.json)
  - The blend field has been removed, as it had no use
  - The attributes field has been removed, instead the Position attribute will always be bound
  - The provided uniforms have been consolidated with those provided to core shaders
    - Time has been renamed to GameTime
- The vertex and fragment shader references in program definitions (including post-processing effects) are now namespaced shader ids
  - A vertex shader \<namespace\>:\<path\> will resolve to assets/\<namespace\>/shaders/\<path\>.vsh
  - A fragment shader \<namespace\>:\<path\> will resolve to assets/\<namespace\>/shaders/\<path\>.fsh
- Shader source files are no longer required to be in the shaders/core subdirectory, this only exists for organization
- Added defines field to program definitions (object with fields)
  - Allows GLSL define directives to be injected into the shader source, which can be referenced in the shader
  - values (map of string to string)
    - Will be injected as \#define \<key\> \<value\> at the top of the file
  - flags (list of strings)
    - Will be injected as \#define \<key\> at the top of the file

#### Shader Imports

- The \#moj_import directive now supports namespaced includes with absolute paths
  - For example, \#moj_import \<minecraft:fog.glsl\> will import assets/minecraft/shaders/include/fog.glsl
- Relative imports are not namespaced and behave as before

#### Post-process Effect Definitions

- Post-processing effect configuration has been moved out of the assets/\<namespace\>/shaders/post directory to just assets/\<namespace\>/post_effect
- Vertex and fragment shaders used by these effects have been moved from assets/\<namespace\>/shaders/program to assets/\<namespace\>/shaders/post
- name has been renamed to program, and is now a namespaced id of a shader program configuration
  - \<namespace\>:\<path\> will resolve to assets/\<namespace\>/shaders/\<path\>.json

## Fixed bugs in 24w34a

- [MC-73178](https://bugs.mojang.com/browse/MC-73178) - Villagers' "CanPickUpLoot" tag cannot be set to zero
- [MC-144327](https://bugs.mojang.com/browse/MC-144327) - The bottom face texture of a blaze's rods is the same as their top face texture
- [MC-191431](https://bugs.mojang.com/browse/MC-191431) - Player spectator head is invisible / does not render in the inventory after switching to "Fabulous!"
- [MC-269376](https://bugs.mojang.com/browse/MC-269376) - Breeze fires wind charge from center of hitbox
- [MC-269715](https://bugs.mojang.com/browse/MC-269715) - Food won't be eaten when the component food.eat_seconds is less than 0.05
- [MC-272643](https://bugs.mojang.com/browse/MC-272643) - Items containing using_converts_to cannot be stacked with the original items after restarting the world.
- [MC-273629](https://bugs.mojang.com/browse/MC-273629) - Adding effects with an effects_changed advancement causes a packet error (ConcurrentModificationException) if it was triggered by Milk
- [MC-275203](https://bugs.mojang.com/browse/MC-275203) - Minecarts always spawn facing east/west and move upward slightly when being placed on rails
- [MC-275209](https://bugs.mojang.com/browse/MC-275209) - It's impossible to put water in a cauldron underwater
- [MC-275210](https://bugs.mojang.com/browse/MC-275210) - Minecarts can phase through blocks when travelling diagonally upwards
- [MC-275211](https://bugs.mojang.com/browse/MC-275211) - The enchantment glint isn't visible on dropped items
- [MC-275213](https://bugs.mojang.com/browse/MC-275213) - Hand animation still plays when trying to put lava or powder snow in an underwater cauldron
- [MC-275218](https://bugs.mojang.com/browse/MC-275218) - "Minecart rolls" sound does not play when on tracks after de-railing then re-railing
- [MC-275219](https://bugs.mojang.com/browse/MC-275219) - Hand animation still plays in creative when trying to use minecarts inside each other on the same rail
- [MC-275221](https://bugs.mojang.com/browse/MC-275221) - Baby polar bear model is messed up in 24w33a
- [MC-275224](https://bugs.mojang.com/browse/MC-275224) - Minecart items desync when using them on a rail with a minecart above it
- [MC-275226](https://bugs.mojang.com/browse/MC-275226) - Enchantment glint is not visible on items held by player and mobs in third person
- [MC-275229](https://bugs.mojang.com/browse/MC-275229) - Minecarts behave strangely on bubble columns
- [MC-275230](https://bugs.mojang.com/browse/MC-275230) - The game crashes when opening the inventory while in spectator mode
- [MC-275232](https://bugs.mojang.com/browse/MC-275232) - The mining fatigue animation appears too close
- [MC-275237](https://bugs.mojang.com/browse/MC-275237) - Cannot rename written book in an anvil
- [MC-275241](https://bugs.mojang.com/browse/MC-275241) - Minecarts continue to produce sound for a short while after being stopped
- [MC-275246](https://bugs.mojang.com/browse/MC-275246) - Crash after attempting to move item from off-hand in Creative inventory
- [MC-275248](https://bugs.mojang.com/browse/MC-275248) - Torches no longer have bottom faces
- [MC-275249](https://bugs.mojang.com/browse/MC-275249) - "FOV Effects" slider incorrectly modifying zoom values on the spyglass
- [MC-275252](https://bugs.mojang.com/browse/MC-275252) - Player head angle when crawling is now strange
- [MC-275270](https://bugs.mojang.com/browse/MC-275270) - Minecart not oriented correctly when placed on a sloped unpowered powered rail
- [MC-275271](https://bugs.mojang.com/browse/MC-275271) - Crash after attempting to move item to hotbar slot in Creative inventory
- [MC-275273](https://bugs.mojang.com/browse/MC-275273) - Baby mooshroom uses wrong scale
- [MC-275277](https://bugs.mojang.com/browse/MC-275277) - Trial chambers' encounter_4 trap often does not hit the player
- [MC-275289](https://bugs.mojang.com/browse/MC-275289) - There are empty chests in some chambers even after 24w33a
- [MC-275293](https://bugs.mojang.com/browse/MC-275293) - Internal exception when picking blocks not in hotbar but in inventory in Survival mode
- [MC-275296](https://bugs.mojang.com/browse/MC-275296) - Emissive textures are not emissive in the player's hand
- [MC-275297](https://bugs.mojang.com/browse/MC-275297) - Failing selectors and fake players in "score" selector result in an unexpected error
- [MC-275307](https://bugs.mojang.com/browse/MC-275307) - Hand doesn't show up when switching from Spectator mode
- [MC-275310](https://bugs.mojang.com/browse/MC-275310) - Cannot enchant armor in enchanting table
- [MC-275319](https://bugs.mojang.com/browse/MC-275319) - End crystals in 24w33a appear to be slightly smaller than in previous versions
- [MC-275328](https://bugs.mojang.com/browse/MC-275328) - Enchantment glint is not visible on items in item frames
- [MC-275329](https://bugs.mojang.com/browse/MC-275329) - As of 24w33a zombie villagers no longer raise their arms to attack
- [MC-275332](https://bugs.mojang.com/browse/MC-275332) - The rotation of a wall/ceiling lever and buttons does not affect the update order of wire in Redstone Experiment
- [MC-275343](https://bugs.mojang.com/browse/MC-275343) - Projectiles stuck in the world border can float in the air if the border size is changed
- [MC-275361](https://bugs.mojang.com/browse/MC-275361) - Baby zombie variant arms disconnect from their body when attacking
- [MC-275397](https://bugs.mojang.com/browse/MC-275397) - Redstone dust doesn't update properly
- [MC-275436](https://bugs.mojang.com/browse/MC-275436) - Cannot enchant books in enchanting table
- [MC-275467](https://bugs.mojang.com/browse/MC-275467) - Minecarts can launch you hundreds of thousands of blocks upwards if you derail inside cobwebs or powdered snow
- [MC-275473](https://bugs.mojang.com/browse/MC-275473) - Slim model's arms are now lower than the torso by 0.5 pixels
- [MC-275479](https://bugs.mojang.com/browse/MC-275479) - Dispensers cannot place minecarts onto rails if there is a minecart one block away
- [MC-275482](https://bugs.mojang.com/browse/MC-275482) - Minecarts do not pick up mobs like they used to
- [MC-275486](https://bugs.mojang.com/browse/MC-275486) - Enchantable data component doesn't work with items that only have enchantments through a data pack
- [MC-275498](https://bugs.mojang.com/browse/MC-275498) - Clocks, compasses and recovery compasses don't function in item frames
- [MC-275554](https://bugs.mojang.com/browse/MC-275554) - Minecarts between two downward slopes will shake violently and never settle
- [MC-275566](https://bugs.mojang.com/browse/MC-275566) - Game crash when trying to open various GUIs with Fabulous graphics
- [MC-275569](https://bugs.mojang.com/browse/MC-275569) - Outer layer of the skin shows when disabled until you go into third person

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/ff16e26392a5ced7cfe52ffdc5461cd646b9b65d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
