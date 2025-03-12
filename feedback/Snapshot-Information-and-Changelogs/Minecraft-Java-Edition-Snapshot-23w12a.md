---
title: "Minecraft: Java Edition - Snapshot 23w12a"
date: 2023-03-22T16:18:34Z
updated: 2025-03-12T11:12:48Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/14213887055885-Minecraft-Java-Edition-Snapshot-23w12a
---

Well hello fellow Minecraft lovers! It is time for the first snapshot for 1.20.We know we promised no more major features, so how did we end up with such a big snapshot? You thought the trails were over? NO! In snapshot 23w12a we have even more tales to tell! Our devs apparently could not resist throwing in a few extra additions. Enjoy!

# NEW FEATURES

- All features and changes from the "Update 1.20" experimental pack are now part of the game
- Vibration resonance functionality has been added to Blocks of Amethyst
- Added the Calibrated Sculk Sensor block
- Added Suspicious Gravel, more Archaeology sites, and new Pottery Shards
- Added 5 new armor trims
- Signs have improved customization options
- Added Sniffer Egg
- Added Pitcher Plant

## VIBRATION RESONANCE

- Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
  - If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
- This behaviour is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

## CALIBRATED SCULK SENSORS

- A new variant of Sculk Sensors which allows you to filter vibrations based on their frequency level
- They are not found naturally and can only be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
- One side of the Calibrated Sculk Sensor can receive a redstone signal as input
  - The strength of that redstone signal is the only vibration frequency the Sculk Sensor will listen to

## ARCHAEOLOGY

- Added Suspicious Gravel block
  - It has the same characteristics as Suspicious Sand
- Added Suspicious Gravel to Cold Ocean Ruins
- Added Suspicious Sand to Warm Ocean Ruins
  - Sniffer Eggs can be found here
- Added the Trail Ruins, a buried structure from a lost culture
  - Four Armor trims can be found here
- Added 16 Pottery Shards (so there are now 20 Pottery Shards in total)
  - These have been distributed between the 5 Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins

## ARMOR TRIMS

New armor trim Smithing Templates have been added to the following structures:

- Trail Ruins
  - Wayfinder Armor Trim
  - Raiser Armor Trim
  - Shaper Armor Trim
  - Host Armor Trim
- Ancient City
  - Silence Armor Trim

## SIGNS

- Sign text can now be edited after being placed in the world
  - This can be done by interacting with the Sign
- Both sides of the Sign can now have separate text and colors, allowing for further customization options
  - By default, a Sign will prompt you to input the front side's text when placed
  - To apply text to the back-side, you must walk to the other side and interact with that face to edit it
- Signs can now also be waxed with Honeycomb, preventing any further edits to its text
  - Click commands on Signs can only be invoked when the Sign is waxed
  - If a Sign with a click command is not waxed, interacting with it will not invoke the command and instead open up the edit screen as usual

## SNIFFER EGG

- Can be found in the Suspicious Sand of Warm Ocean Ruins
- When two Sniffers breed they do not immediately spawn a Snifflet; instead, a Sniffer Egg is dropped
- Hatching
  - When placed on Moss, the Egg will hatch after approximately 10 minutes
  - On all other blocks, it will hatch in approximately 20 minutes

## PITCHER PLANT

- The Sniffer can now occasionally Sniff up a Pitcher Pod item
  - This Pod, when planted in Farmland, grows into a Pitcher Crop, which has five growth stages
  - Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant

# CHANGES

- Vibration frequencies of many actions in the game have been tweaked
- Wither effect particle color has been adjusted to make it more distinguishable
- Potion of Slow Falling color has been adjusted to make it more distinguishable
- Step sounds can now combine for blocks walked through and stepped on

## VIBRATION FREQUENCIES

In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference. The following are category descriptions for each frequency and the expected events that they correspond to:

1.  Movement in any medium (land, water and air)
2.  Landing on any surface (land or water)
3.  Item interactions
4.  Gliding with an elytra or unique mob actions (Ravager roar, Wolf shaking, etc)
5.  Dismounting a mob or equipping gear
6.  Mounting a mob or interacting with a mob
7.  Mobs and players getting damaged
8.  Consuming items (drinking and eating)
9.  Blocks 'deactivating' (door close, chest close, button unpress, etc)
10. Blocks 'activating' (door open, chest open, button press, etc)
11. Blocks changing (cauldron water level rising, adding food to campfire, etc)
12. Blocks being destroyed
13. Blocks being placed
14. Mobs and players teleporting or spawning
15. Mobs and players dying or an explosion

## COMBINATION STEP SOUNDS

- Combines two different step sounds
- Occurs for carpets, snow, nether sprouts, as well as warped and crimson roots
  - The top-most block you are walking on is played as normal
  - The block underneath is played at a lower volume and pitch

## ARMOR TRIMS

- The Dune Armor Trim now has a brand-new pattern and Smithing Template icon
- The Dune Armor Trim's old pattern is now used by the Sentry Armor Trim
  - A new icon has been made for the Sentry Armor Trim Smithing Template to fit this pattern
- The Sentry Armor Trim's old pattern is now used by the new Shaper Armor Trim

# TECHNICAL CHANGES

- The data pack version is now 13, accounting for sign data format changes
- Added a capped rule structure processor that limits the number of replaced blocks for a structure piece to a configured maximum
- Configuring block entity fields in a rule processor rule is now delegated to a referenced block_entity_modifier instead of the previously fixed output_nbt configuration
- Game events have changed vibration frequency and some have been removed
- Tweaked display entity interpolation
- Removed update_1_20 feature flag and built-in datapack - features are no longer experimental

## STRUCTURE POST-PROCESSORS

### CAPPED POST-PROCESSOR

- A capped post-processor has been added which can limit how many blocks a delegated post-processor randomly transform in a structure
- This can be used to configure a structure piece to have an exact amount of specific blocks, instead of using random distribution
- The capped post-processor has following required parameters:
  - delegate A post-processor which performs the actual block transformation
  - limit Maximum amount of blocks that the delegated post-processor can transform
    - The blocks inside a structure are all randomly passed to the delegated post-processor until it has transformed the limited amount
    - Either constant or random number generator sampled during post-processing

### RULE POST-PROCESSOR BLOCK ENTITY CONFIGURATION

- Previously a rule could specify an optional fixed output_nbt which would be added to the processed output block entity
- This field has now been changed to reference a block_entity_modifier
- Existing block_entity_modifier's are:
  - passthrough Retains existing fields on the block entity
    - This is the default if no block_entity_modifier is specified
  - append_static Similar to previous output_nbt this provides fixed fields to add to the block entity
    - A minor change is that this modifier appends configured fields to the processed block instead of replacing existing fields
  - clear Removes any existing fields on the block entity
  - append_loot Appends a loot table and seed to the block entity through required parameter:
    - loot_table Referenced loot table to add to block entity as LootTable field
    - Field LootTableSeed is also added to the block entity using random seeded by block position

## GAME EVENTS

- piston_contract game event has been removed in favor of block_deactivate
- piston_extend and dispense_fail game events have been removed in favor of block_activate
- Many game events have new vibration frequencies:
  - 1: step, swim, flap
  - 2: projectile_land, hit_ground, splash
  - 3: item_interact_finish, projectile_shoot, instrument_play
  - 4: entity_roar, entity_shake, elytra_glide
  - 5: entity_dismount, equip
  - 6: entity_mount, entity_interact, shear
  - 7: entity_damage
  - 8: drink, eat
  - 9: container_close, block_close, block_deactivate, block_detach
  - 10: container_open, block_open, block_activate, block_attach, prime_fuse, note_block_play
  - 11: block_change
  - 12: block_destroy, fluid_pickup
  - 13: block_place, fluid_place
  - 14: entity_place, lightning_strike, teleport
  - 15: entity_die, explode

## TAGS

### STEP SOUNDS

- The blocks that can produce a combination of step sounds is controlled by combination_step_sound_blocks

## DISPLAY ENTITY

### INTERPOLATION CHANGES

- Previous values are always discarded if interpolation_duration is 0
- Made sure that render properties are applied at the same time (so block_state is applied at the same time as transformation, i.e. at next tick after receiving update)
- Entities are not rendered unless initial data is received. That means display entities might not show on the first tick.
- Note: due to how game handles updates, changes to entities made after summoning might be delivered to clients with later tick

# FIXED BUGS IN SNAPSHOT 23W12A

- [MC-157727](https://bugs.mojang.com/browse/MC-157727) - The small cube in honey/slime blocks isn't displayed in inventory
- [MC-165221](https://bugs.mojang.com/browse/MC-165221) - 3D Modeled Potions are not rendered correctly in the "GUI Display"
- [MC-197241](https://bugs.mojang.com/browse/MC-197241) - Players can change the color of a wolf's collar even if they're not its owner
- [MC-201647](https://bugs.mojang.com/browse/MC-201647) - Entity riding an entity can cause location/coordinate desync
- [MC-256488](https://bugs.mojang.com/browse/MC-256488) - Bamboo Raft and Raft with Chest models float above ground
- [MC-256551](https://bugs.mojang.com/browse/MC-256551) - Baby camels have a visible inventory
- [MC-256585](https://bugs.mojang.com/browse/MC-256585) - Z-fighting occurs on the text of hanging signs
- [MC-259201](https://bugs.mojang.com/browse/MC-259201) - The tops and bottoms of donkeys' ears are miscolored
- [MC-259879](https://bugs.mojang.com/browse/MC-259879) - Display entities with a rather large shadow_radius value can cause performance issues
- [MC-260020](https://bugs.mojang.com/browse/MC-260020) - Reloading the world resets the Brown Mooshroom's given flower
- [MC-260043](https://bugs.mojang.com/browse/MC-260043) - Decorated Pots don't play breaking sound in creative mode
- [MC-260047](https://bugs.mojang.com/browse/MC-260047) - Decorated pots from the creative inventory and new blank decorated pots with no NBT will match their texture to the last decorated pot you crafted
- [MC-260053](https://bugs.mojang.com/browse/MC-260053) - When rotating a decorated pot with the debug stick, it will spawn a decorated pot item
- [MC-260061](https://bugs.mojang.com/browse/MC-260061) - Sniffer's ears and head z-fight
- [MC-260069](https://bugs.mojang.com/browse/MC-260069) - Growing cherry trees inside each other causes their leaves to decay
- [MC-260240](https://bugs.mojang.com/browse/MC-260240) - Sniffers that are in love sometimes don't attempt to approach one another to breed
- [MC-260251](https://bugs.mojang.com/browse/MC-260251) - The walking animations of sniffers don't change in relation to their movement speed
- [MC-260282](https://bugs.mojang.com/browse/MC-260282) - Sniffers can sniff out and follow players in spectator mode
- [MC-260296](https://bugs.mojang.com/browse/MC-260296) - Pink petal block models are not optimized
- [MC-260317](https://bugs.mojang.com/browse/MC-260317) - Sniffers try to sniff out obstructed blocks they can't reach
- [MC-260320](https://bugs.mojang.com/browse/MC-260320) - Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
- [MC-260326](https://bugs.mojang.com/browse/MC-260326) - Dying sniffers continue to dig
- [MC-260409](https://bugs.mojang.com/browse/MC-260409) - Cherry Grove biome is not in the \#is_overworld biome tag
- [MC-260503](https://bugs.mojang.com/browse/MC-260503) - Sniffers refuse to dig into soil with a non-solid block on top
- [MC-260632](https://bugs.mojang.com/browse/MC-260632) - Riding an entity that is far away causes client/server desync
- [MC-260678](https://bugs.mojang.com/browse/MC-260678) - Potion of Invisibility looks too similar to the Potion of Slow Falling
- [MC-260750](https://bugs.mojang.com/browse/MC-260750) - Magma blocks use unnecessary random ticking for an outdated feature, causing performance issues
- [MC-260757](https://bugs.mojang.com/browse/MC-260757) - Updating a large amount of Iron Bars causes the game to hang in-game or during the Saving world screen
- [MC-260777](https://bugs.mojang.com/browse/MC-260777) - Sniffers ignore some dangerous blocks while sniffing and pathfinding resulting in them being damaged
- [MC-260778](https://bugs.mojang.com/browse/MC-260778) - Sniffer tries to sniff out blocks outside the world border
- [MC-260779](https://bugs.mojang.com/browse/MC-260779) - Sniffers can dig into blocks outside the world border
- [MC-260839](https://bugs.mojang.com/browse/MC-260839) - Mobs can replace weapons held in their main hand with armor
- [MC-260885](https://bugs.mojang.com/browse/MC-260885) - Display entities summoned with initial transformation interpolate incorrectly from default transformation during next transformation
- [MC-260897](https://bugs.mojang.com/browse/MC-260897) - Display entity's previous state of interpolation doesn't work as expected

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/92fdef90109e534d47e378124ab86e2d6d7b3a42/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
