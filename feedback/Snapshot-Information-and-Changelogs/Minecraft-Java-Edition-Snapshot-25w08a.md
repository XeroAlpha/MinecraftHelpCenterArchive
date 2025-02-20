---
title: Minecraft Java Edition - Snapshot 25w08a
date: 2025-02-20T10:45:27Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34425486125325-Minecraft-Java-Edition-Snapshot-25w08a
hash:
  h_01JMHF4Q3ZBG9K047ZGKMTPGJN: new-features
  h_01JMHF4Q3Z697QD6VM05CJRMF3: farm-animal-variants
  h_01JMHF4Q3ZMND5KX2EQACH220X: sheep-wool-color-in-warm-and-cold-biomes
  h_01JMHF4Q3ZN9K0ZKCPNTZH3HVQ: leaf-litter
  h_01JMHF4Q3Z8N278YPGT9NS0FKZ: spawn-egg-visuals-overhaul
  h_01JMHF4Q3Z2NHVGB5FZBQRBDKP: wolf-sounds-variants
  h_01JMHF4Q40XX51BH9S2YPAV6BT: changes
  h_01JMHF4Q40CG13GJQPXEPG0ZKF: technical-changes
  h_01JMHF4Q40THG1F3XDD76P0AXE: data-pack-version-68
  h_01JMHF4Q402EWT19E5957DQJAW: wolf-sound-variants
  h_01JMHF4Q40W2CY0CXD2GXT49XH: item-components
  h_01JMHF4Q40640XK2G4CBNTS9RF: blocks_attackscomponent
  h_01JMHF4Q405VH9GRQPM6R7Z46J: entity-components
  h_01JMHF4Q40241Z5AC0JZ7AEX2J: resource-pack-version-53
  h_01JMHF4Q40YHQN56T8HJJT91DB: updated-textures-for-spawn-eggs
  h_01JMHF4Q40A6PNEJPCKMVFT58B: equipment-assets
  h_01JMHF4Q40CCRTXGHF1FATRA09: new-and-updated-wolf-sound-variants
  h_01JMHF4Q40F6SRJHDN4XV3H8PG: fixed-bugs-in-25w08a
  h_01JMHF4Q40KD73RGB7T7ESR4B9: get-the-snapshot
---

We're adding some new, fun and cute features in this week's snapshot. Spawn eggs just got cuter with new textures looking more like the mobs they spawn. Wolves are becoming even more unique with their own individual sounds. When a wolf spawns, it will get one of seven personalities, unrelated to their variant or biome. From cute to grumpy, each wolf will bark, growl, pant, whine, and express themselves in their own unique way. To top it all off, leaf litter will now look even better with new colors and we have made some tweaks to what color of sheep spawns in different biomes.

Have fun exploring!

## New Features

- Added new sound variants for Wolves
- Overhauled the visuals of each Spawn Egg to improve readability and accessibility

### Farm Animal variants

#### Sheep wool color in warm and cold biomes

- Reverted the change from last week that allowed Blue, Light Blue, Cyan, Yellow, Orange and Red Sheep to spawn naturally in different biomes
- Black Sheep will still be the most common type to spawn in cold biomes, and Brown Sheep will be the most common type in warm biomes
- Pink Sheep will still be very rare and able to spawn anywhere where Sheep can spawn
- Uncommon Sheep colors in Cold Biomes are gray, light gray, white and brown
- Uncommon Sheep colors in Warm Biomes are gray, light gray, white and black

### Leaf Litter

- Leaf Litter is tinted based on which biome it's in

### Spawn Egg visuals overhaul

- Each Spawn Egg now has their own unique visual which captures the personality and character of the mob it spawns
- Each egg visual varies in shape to reflect the in-world size of the mob it spawns
  - For example, smaller mobs tend to have a smaller Spawn Egg

### Wolf Sounds Variants

- Added 6 new Wolf sound variants with unique ambient, hurt, death, growl, whine, and pant sounds
  - The new sounds are part of variants that are called big, cute, puglin, angry, grumpy and sad
  - The original Wolf sounds now are used for the variant called classic
  - Every Wolf will have a random sound variant assigned to it from the 6 new variants and the original one
  - The sound variant is not related to the texture variant

## Changes

- Sheep's wool undercoat is now also colored when dyed, matching existing behaviour in Bedrock Edition
- Sheep can now eat Fern blocks to match Bedrock Edition

## Technical Changes

- The Data Pack version is now 68
- The Resource Pack version is now 53

## Data Pack Version 68

- Added data driven sound variants for Wolves
- Biome effects has a new field dry_foliage_color that defines the color used for tinting blocks using dry foliage tinting

### Wolf Sound Variants

- Wolf sound variants can be data-driven by adding entries to data/\<namespace\>/wolf_sound_variant/\<id\>.json
- The file contains the following fields which correspond to sound events to use for the specific behaviour:
  - ambient_sound
  - death_sound
  - growl_sound
  - hurt_sound
  - pant_sound
  - whine_sound

### Item Components

#### blocks_attacks component

- If the blocked damage has no position, the compared angle will be assumed to be the maximum 180 for horizontal_blocking_angle field of damage_reductions

#### Entity components

- New component
  - wolf/sound_variant - namespaced id from wolf_sound_variant registry

## Resource Pack Version 53

- Added possibility to tint blocks based on a dry foliage color map
- Updated textures for Spawn Eggs
- New and updated sounds for Wolf sound variants
- Added colormap texture for tinting dry foliage tinted blocks
- Name of sheep_fur texture has been renamed to sheep_wool
- Sheep now has a separate texture for its wool undercoat, which is dynamically recolored in-game
  - The name of this undercoat texture is sheep_wool_undercoat

### Updated textures for Spawn Eggs

- New textures have been added for all Spawn Eggs
- Removed spawn_egg.png and spawn_egg_overlay.png

### Equipment Assets

- Equipment layers configured to be dyeable will now show if the dyed_color component is present on the item, even if the item is not in the \#dyeable tag

### New and updated Wolf sound variants

- Sound files for the classic Wolf sounds have been moved into classic folder for the Wolf sound files
- Removed unused howl sound
- Added sounds for the new Wolf sound variants: big, cute, puglin, angry, grumpy and sad

## Fixed bugs in 25w08a

- [MC-177522](https://bugs.mojang.com/browse/MC-177522) - Wolf barking and whining sounds are subtitled as "Wolf pants"
- [MC-280182](https://bugs.mojang.com/browse/MC-280182) - Shields can block some environmental damage sources
- [MC-280230](https://bugs.mojang.com/browse/MC-280230) - DeathLootTable field is incorrectly named DeathLoothTable

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/a813292f7680fa8e2c3514d9a55773badcee2dc9/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
