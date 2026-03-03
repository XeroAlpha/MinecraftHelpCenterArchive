---
title: Minecraft Java Edition - 26.1 Snapshot 11
date: 2026-03-03T15:23:10Z
updated: 2026-03-03T15:23:27Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43969216227213-Minecraft-Java-Edition-26-1-Snapshot-11
hash:
  h_01KJT4P6YN9M2V73G95YG57QC5: known-issue
  h_01KJT4P6YNQQGEZ1CT049WY1TB: changes
  h_01KJT4P6YSF0Z7A78C5FDASJ59: trades
  h_01KJT4P6YTS5NR34A4882BSNA0: sounds
  h_01KJT4P6YT5NS05AD1B70T2S6R: technical-changes
  h_01KJT4P6YV986Z2WVGDR55RH1M: data-pack-version-100
  h_01KJT4P6YVQ6XPA7NTTCPYHNHY: pig-sound-variants
  h_01KJT4P6YWV9A0JWHCTXPQWNXE: game-test-environments
  h_01KJT4P6YW33HEEZ2MT31Z86BP: addedtimeline_attributesdefinitions-to-set-any-number-of-timelines
  h_01KJT4P6YXV0CYYK6W6F0PGV5R: block-states
  h_01KJT4P6YZE3R7Y8R1K49FEMW5: loot-tables
  h_01KJT4P6YZGKKEF5TEJPKK3SE8: world-generation
  h_01KJT4P6Z2575MV5FGFQFRS3E2: tags
  h_01KJT4P6Z2HTDTPBF6WYD3NMWT: block-tags
  h_01KJT4P6Z3QQAK28KPH31R00D7: resource-pack-version-83
  h_01KJT4P6Z3BVQ42AY6K6EJK1BK: sounds-1
  h_01KJT4P6Z52XR8EHJMNKE4PT01: item-models
  h_01KJT4P6ZBMS7YS6JXZWZMQZ83: minecraftbellspecial-model-type
  h_01KJT4P6ZB4Z8K672MR4EH1K1H: minecraftbookspecial-model-type
  h_01KJT4P6ZEGFFXJ0G026BA9SRP: minecraftbedspecial-model-type
  h_01KJT4P6ZF3K97ARFMYHG09RVH: minecraftbannerspecial-model-type
  h_01KJT4P6ZGWKPWFJ84EFEN6Q77: minecraftchestspecial-model-type
  h_01KJT4P6ZH1N8659NXKSQE0PYZ: minecrafthanging_signspecial-model-type
  h_01KJT4P6ZJ4GVG5H0VS29NVNQ6: minecraftstanding_signspecial-model-type
  h_01KJT4P6ZK7NVJNWGM37NM6KKT: minecraftshulker_boxspecial-model-type
  h_01KJT4P6ZK3EQ80T4HW4MQQ1Q8: block-state-rendering
  h_01KJT4P6ZQ5YTP4DK5FF3QNEJ3: fixed-bugs-in-261-snapshot-11
  h_01KJT4P6ZYW21BXXFHCJF17E7S: get-the-snapshot
---

Tuesday rolls around once more! We're back in the shipping room for another 26.1 snapshot and like a wise man once said, this one goes to 11. This week spells polish and finishing touches on our upcoming game drop features, technical changes, as well as bug fixes.

Happy mining!

## Known Issue

- If you minimize the game while in Fullscreen mode (by pressing Alt + Tab, for example) you can not maximize it again

## Changes

- Fixed adult and baby Rabbit textures to be consistent with the other new textures
- Pig sound variants now has sound for eating
- Baby Goats now rotate their head when ramming
- Baby Hoglin's mane now appears on both sides of the body texture
- Fixed texture on the back of the baby Panda's head

### Trades

- The Master Librarian no longer offers Name Tags
- The Master Librarian will now offer Red Candles and Yellow Candles for the price of three Emeralds
- The Wandering Trader will now offer Name Tags for the price of one Emerald

### Sounds

- Updated the trumpet note block sound assets

## Technical Changes

- The Data Pack version is now 100
- The Resource Pack version is now 83

## Data Pack Version 100

### Pig Sound Variants

Eating sound customization is now supported through the new field eat_sound big variant sound sets

### Game Test Environments

#### Added timeline_attributes definitions to set any number of timelines

- timelines: A list of timelines to set

### Block States

- rotation property in default block state of Banners and Signs has been changed from 0 to 8

> **Developer's Note**: Default block state is used in very few contexts, most notably /setblock without any properties. This change was done to align default orientation of those blocks with other ones (like Skulls or Dispensers)

### Loot Tables

- Removed Name Tag from Ancient Cities and Woodland Mansions

### World Generation

- Block state providers now have a new type called rule_based_state_provider
  - This was previously a separately parsed type but is now instead a sub-type of block state providers
  - They can now be used in any other feature configurations as a block state provider and are no longer unique to the disk feature
  - Format:
    - fallback - An optional block state provider
    - rules - A list of rules
      - if_true - A block predicate that checks the block position before providing the block
      - then - A block state provider

### Tags

#### Block Tags

- Added #prevents_nearby_leaf_decay which defines what block types prevent leaf blocks from decaying within a taxicab distance of 6 blocks

## Resource Pack Version 83

- Item model format now supports transformation for individual sub-models

### Sounds

- Added new sound events for the Pig:
  - entity.baby_pig.eat
  - entity.pig_mini.eat
  - entity.pig_big.eat
  - entity.pig.eat

### Item Models

- The minecraft:model, minecraft:special, minecraft:range_dispatch, minecraft:composite, minecraft:select, minecraft:condition item model types now have transformation fields
  - Those fields have the same format as the transformation field on the minecraft:display entity, i.e. either an array of 16 numbers representing a matrix or structure with decomposed translation, scale and rotation info
  - For types with children (minecraft:range_dispatch, minecraft:composite, minecraft:select, minecraft:condition), the transformation will be composed with the transformation of the children, except for minecraft:bundle/selected_item
  - Model transformations will be applied AFTER item display transformations (i.e. display section in model files)
- The transformations for some special item models (types referenced by the minecraft:special item model) have been extracted to item models itself
  - Affected special model types:
    - minecraft:bed
    - minecraft:banner
    - minecraft:conduit
    - minecraft:copper_colem_statue
    - minecraft:head
    - minecraft:player_head
    - minecraft:shulker_box
    - minecraft:shield
    - minecraft:trident
    - minecraft:standing_sign
    - minecraft:hanging_sign

#### minecraft:bell Special Model Type

- New special model type that renders the animated part of a Bell block
- No fields

#### minecraft:book Special Model Type

- New special model type that renders a book that normally is a part of Enchanting Table and Lectern
- Fields:
  - open_angle - angle (in degrees) between book cover and book centerline (0 means closed, 90 means open flat)
  - page1, page2 - the positions of two pages inside the book
    - 0.0 means the page is in the leftmost position, 1.0 means the page in the rightmost position

#### minecraft:bed Special Model Type

- The model now renders only one half of the Bed
- To render both halves, use a minecraft:composite model
- New fields:
  - part - one of: head, foot

#### minecraft:banner Special Model Type

- New field:
  - attachment - selects a model to be used, one of wall, ground, default: ground

#### minecraft:chest Special Model Type

- New field:
  - chest_type - selects a model to be used, one of single, left, right, default: single

#### minecraft:hanging_sign Special Model Type

- New field:
  - attachment - selects a model to be used, one of wall, ceiling, ceiling_middle, default: ceiling_middle

#### minecraft:standing_sign Special Model Type

- New field:
  - attachment - selects a model to be used, one of wall, ground, default: ground

#### minecraft:shulker_box Special Model Type

= Removed the orientation field

### Block State Rendering

- Some changes have been made to the way blocks states render in places like Enderman-held blocks, Block Display entities, etc. (but not falling blocks or Pistons)
  - Enchanting Table will now show a closed book on the top of the block
  - Blocks that use special renderers (like Chests, Banners, Skulls) should now respect block state properties:
    - Rendering now respects the rotation and facing properties (where applicable)
    - Beds now only render one half of the model, depending on the part property
    - Copper Golem Statues will now respect the copper_golem_pose property
    - Wall and freestanding Signs, Hanging Sign, Banners and Skulls/Heads will now have separate models
    - Chests now respect part properties (where applicable)
  - Note: in general, all block states should look the same when rendered on a Block Display as they look when placed in world, except:
    - Fluids
    - End Gateway
    - End Portal

## Fixed bugs in 26.1 Snapshot 11

- [MC-199975](https://bugs.mojang.com/browse/MC-199975) - Endermen holding bells or bell block display entities only render the bell frame
- [MC-231663](https://bugs.mojang.com/browse/MC-231663) - Dragon eggs do not check whether there is a block under their destination when teleporting
- [MC-275014](https://bugs.mojang.com/browse/MC-275014) - Weathered and oxidized copper bulbs cast stronger shadows on themselves when lit with smooth lighting enabled
- [MC-301003](https://bugs.mojang.com/browse/MC-301003) - The bell part of bells worn on copper golems' "saddle" is not visible
- [MC-303344](https://bugs.mojang.com/browse/MC-303344) - Tooltips for selected items in dialogs are displayed even when the item isn't being hovered over
- [MC-304683](https://bugs.mojang.com/browse/MC-304683) - Wandering traders don't spawn in single biome snowy plains worlds
- [MC-304796](https://bugs.mojang.com/browse/MC-304796) - Hovering over a disabled slider shows the pointing hand cursor instead of the forbidden cursor
- [MC-305797](https://bugs.mojang.com/browse/MC-305797) - The texture of the warm piglet contains unused pixels
- [MC-305857](https://bugs.mojang.com/browse/MC-305857) - Entity hitboxes now move jaggedly when the game is frozen
- [MC-306082](https://bugs.mojang.com/browse/MC-306082) - The back texture of one of baby woods wolves' legs is inconsistent with the other three legs
- [MC-306110](https://bugs.mojang.com/browse/MC-306110) - The side textures of black, white splotched, killer, and Toast rabbits' heads extend to the bottom of their heads
- [MC-306180](https://bugs.mojang.com/browse/MC-306180) - Hitting a rolled up baby armadillo causes its legs to stick out and z-fight with the shell
- [MC-306190](https://bugs.mojang.com/browse/MC-306190) - The game closes when upgrading a world fails
- [MC-306303](https://bugs.mojang.com/browse/MC-306303) - Plains zombie villagers use the texture of their baby variant
- [MC-306309](https://bugs.mojang.com/browse/MC-306309) - Some new animal sound variants are missing
- [MC-306312](https://bugs.mojang.com/browse/MC-306312) - Some strings introduced in 26.1 Snapshot 7 are grammatically incorrect
- [MC-306466](https://bugs.mojang.com/browse/MC-306466) - The back texture of baby pandas' heads has a black stripe on one of its edges
- [MC-306472](https://bugs.mojang.com/browse/MC-306472) - The texture of chainmail helmets on baby humanoid mobs has no transparent pixels on its top, unlike on adult mobs
- [MC-306483](https://bugs.mojang.com/browse/MC-306483) - Golden dandelions do not prevent baby trader llamas from despawning
- [MC-306520](https://bugs.mojang.com/browse/MC-306520) - Baby donkeys and baby mules are offset from their hitbox, and their tail is offset from their body
- [MC-306607](https://bugs.mojang.com/browse/MC-306607) - Endermen now display the block-holding pose even when empty-handed
- [MC-306608](https://bugs.mojang.com/browse/MC-306608) - Glow item frames now resemble item frames
- [MC-306625](https://bugs.mojang.com/browse/MC-306625) - The "Programmer Art" and "High Contrast" resource packs are listed as incompatible
- [MC-306639](https://bugs.mojang.com/browse/MC-306639) - The worried baby panda's model is broken when hiding its face during a thunderstorm
- [MC-306676](https://bugs.mojang.com/browse/MC-306676) - The bottom texture of snifflets is made up of solid colors

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/075b586f5d15168558250232227d6e65eb5f57b8/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
