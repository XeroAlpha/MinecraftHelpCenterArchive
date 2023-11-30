---
title: "Minecraft: Java Edition - Snapshot 20w49a "
date: 2020-12-02T17:51:44Z
updated: 2020-12-02T17:51:49Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360053198311-Minecraft-Java-Edition-Snapshot-20w49a-
---

Another snapshot is going out, and this one introduces the sculk. They're a bit creepy, but don't let that put you off. Pick up some good vibrations!

# NEW FEATURES IN 20W49A

- Added dripstone caves biome
- Added sculk sensors

## DRIPSTONE CAVES BIOME

This biome doesn’t generate naturally yet since it is designed for the upcoming larger caves. However, if you want to see the biome in the current caves you can create a single-biome world with dripstone caves.

- Contains plenty of pointed dripstone on the floors, ceilings, and small pools of water.
- In some places, you’ll find larger stalagmites, stalactites, and columns built from dripstone blocks.

<div bi-id="c1c1c1c1c1c1m2r3a3" bi-name="c1c1c1c1c1c1m2r3a3">

## SCULK SENSORS

- Introducing the bizarre, tendril-filled world of sculk – prepare for sculk sensors to creep you out with their unique ability to detect vibrations nearby.
- A vibration is anything that causes physical motion; if you are careful, there are some motions that are undetectable to sensors by sneaking.
  - These sneak-friendly vibrations currently include walking, falling to the ground, or throwing/shooting projectiles.
- Sculk sensors will not listen to vibrations that are directly created by other sculk sources.
- When a vibration is detected, a signal is sent from the source location to the sensor at a speed of 1 game tick per block.
  - Other vibrations cannot be detected by a sensor when a signal is already traveling to it.
  - When the signal has arrived, the sensor will be activated for 40 game ticks (approximately 2 seconds).
  - While activated, the sensor cannot detect other vibrations.
- Sculk sensors can detect vibrations in an 8 block radius around it.
- The efficient tool to mine sculk sensors is the hoe.
- They can be waterlogged.

<div bi-id="c1c1c1c1c1c1c1m2r3a3" bi-name="c1c1c1c1c1c1c1m2r3a3">

### REDSTONE EMISSION

- Sculk sensors emit a redstone signal when they are activated.
- The strength of the redstone signal is inversely proportional to the distance the vibration signal traveled.
  - This means that the closer the vibration is, the stronger the Redstone signal is.
  - The output is also scaled based on the sculk sensor’s radius, so it can reach the max redstone signal strength when the vibration is 0 distance away (directly on top of the sensor).

### VIBRATION FREQUENCIES

- Sculk sensors have a unique interaction with comparators.
- Each vibration in the game falls under a certain frequency value, and this value can be measured with a comparator.
- With the right contraption, this allows you to detect when a certain action has occurred nearby.

<div bi-id="c1c1c1c1c1c1c1c1m2r3a3" bi-name="c1c1c1c1c1c1c1c1m2r3a3">

| Vibration Type          | Frequency Value |
|-------------------------|-----------------|
| Step                    | 1               |
| Flap                    | 2               |
| Swim                    | 3               |
| Elytra Free Fall        | 4               |
| Hit Ground              | 5               |
| Splash                  | 6               |
| Wolf Shaking            | 6               |
| Projectile Shoot        | 7               |
| Projectile Land         | 8               |
| Start Eating            | 7               |
| Finish Eating           | 8               |
| Hit Entity              | 9               |
| Add Item To Armor Stand | 9               |
| Open Block              | 11              |
| Close Block             | 10              |
| Switch Block            | 11              |
| Unswitch Block          | 10              |
| Press Block             | 11              |
| Unpress Block           | 10              |
| Attach Block            | 11              |
| Detach Block            | 10              |
| Open Container          | 11              |
| Close Container         | 10              |
| Dispense Failed         | 10              |
| Use Flint And Steel     | 12              |
| Place Block             | 12              |
| Destroy Block           | 13              |
| Place Fluid             | 12              |
| Pickup Fluid            | 13              |
| Cast Fishing Rod        | 15              |
| Reel-In Fishing Rod     | 14              |
| Extend Piston           | 15              |
| Contract Piston         | 14              |
| Explosion               | 15              |
| Lightning Strike        | 15              |

</div>

</div>

</div>

###  WOOL OCCLUSION

- Wool has a special interaction with sculk sensors.
- If a wool block is in the way of a vibration source, the sensor will not be able to detect it.

### TECHNICAL TIDBITS

- Sculk sensors have a cooldown period of 1 tick after being placed or after deactivating.
- During this short cooldown period, it cannot detect vibrations. This is to prevent it from activating itself when a contraption it is powering is being unpowered. Feedback is welcome on this point!

# CHANGES IN 20W49A

- The fullness of a bundle now shows up regardless of whether advanced tooltips are on or off.
- Stalactites and stalagmites merge if the tips are next to each other unless you press shift while placing.

<div bi-id="c2c1c1c1c1c1m2r3a3" bi-name="c2c1c1c1c1c1m2r3a3">

# TECHNICAL CHANGES IN 20W49A

- A new game event system has been implemented to support Sculk Sensors detecting vibrations.
- World height-related values are now exposed for customized worlds.
- Removed the max-build-height server setting.
- Added occludes_vibration_signals block tag. Anything in this tag will occlude vibrations, and inherits wool tag entries by default.
- New particle types: vibration and dust_color_transition
- A new game event system has been implemented to support Sculk Sensors detecting vibrations.

<div bi-id="c1c2c1c1c1c1c1m2r3a3" bi-name="c1c2c1c1c1c1c1m2r3a3">

## GAME EVENTS

This system has been developed to identify when certain in-world actions are happening in nearby chunks, particularly so the new sculk sensor can detect these events as vibrations.

The following is a list of the initial game events:

- `minecraft:step`
- `minecraft:swim`
- `minecraft:flap`
- `minecraft:elytra_free_fall`
- `minecraft:hit_ground`
- `minecraft:splash`
- `minecraft:projectile_shoot`
- `minecraft:projectile_land`
- `minecraft:entity_hit`
- `minecraft:block_place`
- `minecraft:block_destroy`
- `minecraft:fluid_place`
- `minecraft:fluid_pickup`
- `minecraft:block_open`
- `minecraft:block_close`
- `minecraft:block_switch`
- `minecraft:block_unswitch`
- `minecraft:block_attach`
- `minecraft:block_detach`
- `minecraft:block_press`
- `minecraft:block_unpress`
- `minecraft:container_open`
- `minecraft:container_close`
- `minecraft:explode`
- `minecraft:armor_stand_add_item`
- `minecraft:wolf_shaking`
- `minecraft:dispense_fail`
- `minecraft:fishing_rod_cast`
- `minecraft:fishing_rod_reel_in`
- `minecraft:piston_extend`
- `minecraft:piston_contract`
- `minecraft:flint_and_steel_use`
- `minecraft:eating_start`
- `minecraft:eating_finish`
- `minecraft:lightning_strike`

<div bi-id="c1c1c2c1c1c1c1c1m2r3a3" bi-name="c1c1c2c1c1c1c1c1m2r3a3">

### TAGS

There are also game event tags that come with this and can be modified by data packs. They can be found under `data/minecraft/tags/game_events`.

- `vibrations` Determines which game events are considered vibrations by the Sculk Sensor. Currently, all added game events are in this tag by default.
- `ignore_vibrations_stepping_carefully` Which game events should be ignored by the Sculk Sensor when the source of the event is sneaking.

The following game events are in `ignore_vibrations_stepping_carefully` by default:

- `minecraft:step`
- `minecraft:hit_ground`
- `minecraft:projectile_shoot`

</div>

</div>

# FIXED BUGS IN 20W49A

- MC-18880 - The Absorption effect has no texture for poison/wither hearts (appears empty instead)
- MC-201840 - Optional function tags sometimes don’t run even when the tag exists
- MC-203797 - Placing or removing a block over the void causes a DecoderException on servers
- MC-204314 - Double copper slabs only drop a single slab when mined
- MC-205043 - Absorption hearts appear broken when taking freezing damage
- MC-205096 - Hardcore hearts lose all color when player is taking freeze damage
- MC-205391 - Waxing cut copper doesn’t prevent it from oxidising
- MC-205629 - Unused sign cache when rendering signs
- MC-206553 - Pointed Dripstone creates water particles in the Nether
- MC-206563 - Pointed dripstone is not connected to the player’s hand
- MC-206578 - Large pillars of stalactites don’t fall when the block above is removed
- MC-206583 - Cauldrons below stalactites at least 2 blocks tall won’t fill up
- MC-206591 - Setting any floating block to a pointed dripstone, causes the replaced block to drop as an item
- MC-206594 - Large stalactites falling occasionally don’t drop all of their pointed dripstone items
- MC-206599 - Pointed dripstone can be placed atop each other, even if a player would be inside the hitbox of the lower dripstone
- MC-206606 - Frustum stage of stalactites negates fall damage
- MC-206613 - Pointed Dripstone duplicates when the block it was attached to is removed
- MC-206615 - Pointed dripstone’s hitbox can extend further than a block, causing nearby stalactites to not be able to fall
- MC-206642 - Stalactites destroy items they fall on, however stalagmites don’t
- MC-206643 - When a dripstone’s hitbox extends into the space of another block, the area that extends into said block cannot be targeted
- MC-206669 - Inconsistency between dripstone and non-mob entities
- MC-206682 - Floating dripstone tips are sometimes left behind from large dripstone pillars
- MC-206691 - Pointed dripstone replaces items with pointed dripstone items
- MC-206711 - Coding error at net.minecraft.world.entity.Entity.resetPos()
- MC-206790 - Waterlogged dripstone does not update
- MC-206878 - Pointed dripstone attached to a piston is not removed as the piston extends

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/2fc0afe1fd31ca872761efbd2a7f635db234b359/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

</div>
