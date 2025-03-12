---
title: Minecraft Java Edition - Snapshot 25w06a
date: 2025-02-05T17:24:57Z
updated: 2025-03-12T10:05:08Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/34065446883725-Minecraft-Java-Edition-Snapshot-25w06a
hash:
  h_01JKBJ6RFE4FBHPK46SC2M8YBJ: new-features
  h_01JKBJ6RFEK4C22DS6GM94PEAG: farm-animal-variants
  h_01JKBJ6RFEABNTS025E4X409NV: short-and-tall-dry-grass
  h_01JKBJ6RFEMFYK85WEHERPEEZ6: cactus-flower
  h_01JKBJ6RFEMTWAS8J2CGMM9J90: changes
  h_01JKBJ6RFEZ4D277XPSYTQQFD6: firefly-bush
  h_01JKBJ6RFEXC0TF87Y65QB7QY8: technical-changes
  h_01JKBJ6RFE9FYADAJ6CBN242C8: data-pack-version-66
  h_01JKBJ6RFEW2GPF34VE41GTHCA: game-rule
  h_01JKBJ6RFEVMF5E67NQTRDV594: allowfireticksawayfromplayer
  h_01JKBJ6RFFJ1EV8XX3ADQ4T7Q4: block-tags
  h_01JKBJ6RFF9N4919ANYERHGP75: item-tags
  h_01JKBJ6RFFP1SRTJHTVWQE4JSW: entity-data
  h_01JKBJ6RFF5HDJ0FJGAGFZVM0Q: chicken-variants
  h_01JKBJ6RFFCDC8GRKTQMZ9XCXK: resource-pack-version-51
  h_01JKBJ6RFF8ZZZJPPSVPZ4W76P: new-and-updated-chicken-textures
  h_01JKBJ6RFFEGFGZ00J1PRNPYJP: fixed-bugs-in-25w06a
  h_01JKBJ6RFFZ2EPHQK8V7FZ6XY5: get-the-snapshot
---

This week we have been contemplating existential questions like "What came first; the cold chicken or the blue egg?". It's time for the cold chicken and the warm chicken to make their way into snapshot 25w06a together with their respective colorful egg. In addition, pink cactus flowers and dry grass will now decorate deserts and badlands.

## New Features

- Added Warm and Cold Chicken variants
- Added Short Dry Grass and Tall Dry Grass
- Added Cactus Flower block which can grow on Cactus blocks

### Farm Animal variants

- Warm and cold variants have been added for Chicken
- Existing Chicken variant has been renamed to temperate
- The variant is determined by the biome they spawn in
- Warm and cold biomes are the same for all animals with variants (i.e. Chicken, Pig, Cow)
- Two new Egg items have been added for the warm and cold Chicken variants
  - Blue Egg - The Egg that is laid by and can hatch cold Chicken variant
  - Brown Egg - The Egg that is laid by and can hatch warm Chicken variant
- Already existing Egg is laid by and can hatch temperate Chicken variant

### Short and Tall Dry Grass

- Added two new types of grass: Short Dry Grass and Tall Dry Grass
- Both are one block high, which makes Tall Dry Grass differ from Tall Grass which is two blocks high
- Both generate in the Desert and Badlands
- Both can be placed on types of Sand, Terracotta and Dirt blocks like the Dead Bush
- Both can be bone mealed
  - Using Bone Meal on Short Dry Grass grows it into a Tall Dry Grass
  - Using Bone Meal on Tall Dry Grass places a neighbouring Short Dry Grass next to the block if possible
- Both can be used in the Composter
- Sheep can eat both to regrow its wool
- Both can be used as fuel for smelting

### Cactus Flower

- Cactus Flower is a new type of flower which has a chance of generating on cactuses in Deserts and Badlands
- Cactus Flower can be placed on Cactus blocks or any block which has center support at the top of the block
- Cactus Flowers have a chance of growing on Cactus blocks
  - If a Cactus is one or two blocks high the Cactus Flower has a 10% chance to grow instead of the Cactus getting higher
  - If a Cactus is three blocks or higher the Cactus Flower has a 25% chance to grow
  - Cactus Flowers will only grow if they have space on all four sides
- Cactus Flowers can be used in the Composter
- A Cactus Flower can be used to craft 1 Pink Dye

## Changes

- Any block in the simulation distance of a player or loaded by another source of chunk loading (such as Ender Pearls) may now receive random ticks, instead of just 8 chunks around players
  - For example: if a chunk is loaded by an Ender Pearl or is in the spawn chunks, crops are able to grow, Ice can melt, Snow can fall, and a Cauldron can be filled by rain
  - Mob spawning, Lava spreading fire, and Lightning strikes still occur in the previous radius of 8 chunks around players
- Fire will no longer burn or spread if no player is within 8 chunks
- Tooltips for Fireworks and Crossbows now show a compact form of multiple repeated stars or projectiles that are identical

### Firefly Bush

Conditions for The Firefly Bush playing ambient sounds have changed. It now plays when all of the following conditions are met:

- It's night
- Firefly Bush not blocked from above by any collidable block (except Leaves)

## Technical Changes

- The Data Pack version is now 66
- The Resource Pack version is now 51

## Data Pack Version 66

- Added new allowFireTicksAwayFromPlayer Game Rule

### Game Rule

#### allowFireTicksAwayFromPlayer

- When true, Fire and Lava ticks can occur ouside of an 8 chunk range of a player
- Default value: false

### Block Tags

- \#dead_bush_may_place_on has been renamed to \#dry_vegetation_may_place_on
- Added \#edible_for_sheep - blocks that can be eaten by Sheep to regrow their Wool

### Item Tags

- Added \#eggs - all variants of the Egg item

### Entity Data

- The armor and off-hand equipment of Players is now also stored in the equipment field (although items written into the Inventory using armor and off-hand slot numbers still work)

### Chicken Variants

- Chicken variants can be data-driven by adding entries to data/\<namespace\>/chicken_variant/\<id\>.json
- This feature is experimental
- Fields in file:
  - model - one of: normal, cold
  - asset_id - namespaced id for this variant asset, resolves to assets/\<namespace\>/textures/\<path\>.png
  - spawn_conditions - field described in uniform variant selection above

## Resource Pack Version 51

- New and updated Chicken textures
- Added textures for new Blue Egg and Brown Egg items
- Added textures for new Cactus Flower block
- Added textures for new Short Dry Grass and Tall Dry Grass blocks

### New and updated Chicken textures

- Added new textures for Chicken variants:
  - cold_chicken
  - warm_chicken
- Texture chicken has been renamed to temperate_chicken
- The temperate_chicken texture has been moved to a new folder:
  - entity/chicken.png -\> entity/chicken/temperate_chicken.png

## Fixed bugs in 25w06a

- [MC-157196](https://bugs.mojang.com/browse/MC-157196) - Tamed animals cannot be added to a team
- [MC-186241](https://bugs.mojang.com/browse/MC-186241) - World border faces are rendered incorrectly with "Fabulous!" graphics
- [MC-279205](https://bugs.mojang.com/browse/MC-279205) - Leaf litter map color is incorrect
- [MC-279207](https://bugs.mojang.com/browse/MC-279207) - Leaf Litter can only be placed on dirt-like blocks
- [MC-279223](https://bugs.mojang.com/browse/MC-279223) - Country Lode Take Me Home Advancement can be completed in the overworld but is still listed as a Nether advancement
- [MC-279235](https://bugs.mojang.com/browse/MC-279235) - Certain farm animals are not spawned as their cold variant in some cold biomes due to an incomplete tag
- [MC-279242](https://bugs.mojang.com/browse/MC-279242) - Kelp, twisting vines, weeping vines, and cave vines can no longer be stacked above or below one another by placing
- [MC-279261](https://bugs.mojang.com/browse/MC-279261) - Making a mob its own owner causes persistent crashes
- [MC-279279](https://bugs.mojang.com/browse/MC-279279) - Dismounting places player in same space as mount
- [MC-279292](https://bugs.mojang.com/browse/MC-279292) - Pigs spawn as temperate in desert villages
- [MC-279309](https://bugs.mojang.com/browse/MC-279309) - Wildflowers item has a misplaced transparent pixel
- [MC-279464](https://bugs.mojang.com/browse/MC-279464) - Fire placed with /setblock doesn't tick/burn out
- [MC-279719](https://bugs.mojang.com/browse/MC-279719) - Tooltip description for saddle attribute modifier slot is not translated
- [MC-279912](https://bugs.mojang.com/browse/MC-279912) - You can use bone meal on bushes in situations where nothing grows
- [MC-279914](https://bugs.mojang.com/browse/MC-279914) - The hitboxes of bushes don't reach the ground and are too wide compared to other similar blocks
- [MC-279924](https://bugs.mojang.com/browse/MC-279924) - Bushes cannot be replaced by trees or mushrooms
- [MC-279933](https://bugs.mojang.com/browse/MC-279933) - Firefly bushes cannot be replaced by trees or mushrooms
- [MC-279950](https://bugs.mojang.com/browse/MC-279950) - Modifying command data storage throws an error
- [MC-279972](https://bugs.mojang.com/browse/MC-279972) - Using /setblock & /fill with fluids of levels at a non-full-block no longer updates the fluid

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/f26930e08de4a4d8a0c6b6492b97bb51e63a369d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
