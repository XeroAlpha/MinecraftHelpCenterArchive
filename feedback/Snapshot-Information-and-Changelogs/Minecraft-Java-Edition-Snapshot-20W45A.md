---
title: "Minecraft: Java Edition - Snapshot 20W45A"
date: 2020-11-04T19:05:32Z
updated: 2020-11-04T19:05:43Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360051653692-Minecraft-Java-Edition-Snapshot-20W45A
---

Good things come to those who wait, and we've believe you've waited long enough. The first Caves & Cliffs snapshot is finally here and ready to enter the Java Edition of Minecraft! We hope that you're as excited about this as we are, because this snapshot brings you a variety of features, some changes to existing features, and a few technical changes. All of it is listed in this blog post, and we can't wait to see you experiment with it all.

Happy mining!

# NEW FEATURES IN 20W45A

- Added bundles!
- Added candle!
- Added lava cauldron!
- Added copper!
- Added amethyst!
- Added lightning rod!
- Added spyglass!
- Added tinted glass!
- A shulker hitting a shulker with a shulker bullet can make a new shulker.

## AMETHYST

### AMETHYST BLOCKS

- Amethyst comes in block form inside the geodes in two ways: block of amethyst and budding amethyst.
- All types of Amethyst blocks (clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile – go make some music!

### AMETHYST CLUSTERS

- Amethyst clusters grow from budding amethyst, which can be found inside geodes.
- Clusters have four growth stages: small amethyst bud, medium amethyst bud, large amethyst bud, and amethyst cluster.
- Clusters can only grow when they are placed on budding amethyst blocks.
- Fully-grown amethyst clusters drop four amethyst shards (or more with Fortune) when an iron pickaxe or higher is used, and drop nothing otherwise when broken.
- Clusters can be silk touched at any stage.

### AMETHYST GEODES

- These huge geodes can be found anywhere underground in the Overworld.
- Amethyst geodes have an outer layer of a new stone called tuff.
- Amethyst geodes have a second layer of another new block called calcite.
- Amethyst geodes have an inner layer of various amethyst blocks.

### AMETHYST SHARDS

- Amethyst clusters drop four amethyst shards (or more with Fortune).

### BUDDING AMETHYS

- On any side of a budding amethyst block where there is air or a water source block, a small amethyst bud will eventually grow.
- Amethyst Buds can only grow when attached to budding amethyst and will grow until they become amethyst clusters.

## BUNDLES

- Bundles are items that hold other items.
- A bundle can hold a mixture of items, but only one stack’s worth. For example, a bundle could fit:
  - 64 dirt
  - 32 dirt + 32 stone
  - 32 dirt + 8 ender pearls
  - One of every color of wool, concrete, carpet and terracotta (64 blocks in total)
  - Or one diamond helmet
- Use right-click to put an item into a bundle.
- Right-click a bundle to empty it.
- Wrap a present in a bundle and give it to your friend!

## CANDLES

- Candles come in all 16 colors + one uncolored variant.
- Up to four can be placed in one block.
- Candles allow you to properly wish someone a happy birthday.
- Waterloggable! (But you cannot light them underwater, silly).
- Wish anybody a happy birthday with a candle cake!

## CAULDRONS

- Cauldrons can now be filled with buckets of lava!
- Filled lava cauldrons give off a redstone signal of strength 1.

## COPPER

### COPPER BLOCKS

- Craft nine copper ingots to a copper block.
- Craft cut copper, cut copper stairs and cut copper slabs.
- Use honeycomb to craft waxed copper blocks.

### COPPER ORE

- Copper ore can be found in ore blobs across Overworld, similar to iron and coal (this is not the final generation for copper…)
- Smelt copper ore to get a copper ingot.

### LIGHTNING ROD

- The lightning rod is crafted from three copper ingots.
- Keep your builds safe (well, as long as the closest area around the lightning rod is fireproof) during thunderstorms!
- The lightning rod will protect an area of 4 \* 16 blocks around it from the, sometimes devastating, lightning strikes!
- Lightning rods give off a redstone signal when struck by lightning

### OXIDATION

- Copper will oxidize over time
- There are for stages: copper, lightly weathered copper, semi-weathered copper, and weathered copper.
- It takes 50-82 Minecraft days (in loaded chunks) for a copper block to oxidize one stage.
- Waxed copper blocks will not oxidize.
- You can wax any oxidation stage – how lovely that means you can keep that pretty lightly weathered copper block in it’s lightly weathered stage forever!

## SPYGLASS

- You can use your spyglass to see faraway things.
- Pretend to be a sea captain, or catch your neighbor in the act as they dye your sheep lime green.
- The spyglass is crafted from two copper ingots and one amethyst shard.

## TINTED GLASS

- Tinted glass is a type of glass that does not allow light to pass through.
- Tinted glass is crafted by putting a glass block in the middle of four amethyst shards.
- Tinted glass can be obtained without silk touch; it does not shatter like normal glass.

# CHANGES IN 20W45A

- Experience orbs now sometimes merge when in large quantities to improve performance. This does not change the rate at which the player can absorb them – it simply limits the amount of separate orbs floating around in the world. Orbs that merge will gain the lifetime of the most recently created one.
- Particles now appear when pistons break blocks.
- Simple firework rockets with one gunpowder can now be crafted using the recipe book.
- Dirt paths (formerly grass path) can now be made by using a shovel on dirt, podzol, mycelium, or course dirt (as well as grass).
- Minecarts and rails work in water.

## MINECARTS

Minecarts and rails work in water

- All rails can be waterlogged (works with a dispenser & water bucket too).
- Flowing water doesn’t break rails.
- Minecarts can pass through water, but get slowed down more than usual.

# TECHNICAL CHANGES IN 20W45A

- Entities are now saved separately from terrain chunks.
- Added loot table function set_banner_pattern
- Pack format in version.json has been split into data and resource versions
- Servers can now require custom resource packs to be accepted

## CUSTOM SERVER RESOURCE PACKS

A dedicated server can enforce custom resource packs by setting require-resource-pack in server.properties. When this option is used, players will be prompted for a response and will be disconnected if they decline the required pack.

## ENTITY STORAGE

Entities have been extracted from main (terrain) chunks and are now stored in a separate entities directory (similar to POI storage).  
Those new files are still region files with NBT.

## LOOT TABLES

### NEW FUNCTIONS

#### SET_BANNER_PATTERN

Sets tags needed for banner patterns.  
Parameters:

- patterns - list of pattern objects:
  - pattern - name of pattern (square_bottom_left, bricks, etc.)
  - color - name of color (light_gray, etc.)
- append - if true, new elements will be appended to existing ones instead of replacing

# FIXED BUGS IN 20W45A

- [MC-98219](https://bugs.mojang.com/browse/MC-98219) - Experience orbs follow dead players
- [MC-108469](https://bugs.mojang.com/browse/MC-108469) - Chunk-wise entity lists often don’t get updated correctly (Entities disappear)
- [MC-112147](https://bugs.mojang.com/browse/MC-112147) - Lava burning items or XP orbs sound muted when “Friendly Creatures” slider is turned off
- [MC-127201](https://bugs.mojang.com/browse/MC-127201) - /replaceitem makes quite an obnoxious sound, which is not heard by the person whose items are being replaced.
- [MC-127692](https://bugs.mojang.com/browse/MC-127692) - Experience build up in furnace when using a hopper which can cause severe lag
- [MC-130449](https://bugs.mojang.com/browse/MC-130449) - Cartographer villager freezes or crashes the game when unlocking explorer maps
- [MC-130584](https://bugs.mojang.com/browse/MC-130584) - When a structure loads, water sources in the structure spread into waterloggable blocks
- [MC-133691](https://bugs.mojang.com/browse/MC-133691) - Blocks can’t be placed normally on a full cauldron
- [MC-135552](https://bugs.mojang.com/browse/MC-135552) - Dead Entities are saved to chunk
- [MC-136497](https://bugs.mojang.com/browse/MC-136497) - XP orbs causing severe lag
- [MC-141034](https://bugs.mojang.com/browse/MC-141034) - taiga_fisher_cottage_1 is filled with water
- [MC-169900](https://bugs.mojang.com/browse/MC-169900) - Incorrect jigsaw setting in snowy_small_house_8
- [MC-169945](https://bugs.mojang.com/browse/MC-169945) - Skeletons don’t burn in minecarts while being exposed to daylight
- [MC-171852](https://bugs.mojang.com/browse/MC-171852) - Putting item in a spectator’s hand plays sound “Gear equips” for other players
- [MC-174685](https://bugs.mojang.com/browse/MC-174685) - Drowned arm texture is reversed by the model
- [MC-175959](https://bugs.mojang.com/browse/MC-175959) - One door is open in taiga_shepherds_house_1
- [MC-177622](https://bugs.mojang.com/browse/MC-177622) - One log in taiga_butcher_shop_1 seems to be misrotated - causing the side roof to look asymmetrical
- [MC-177624](https://bugs.mojang.com/browse/MC-177624) - Entrance in snowy_medium_house_2 is asymmetrical
- [MC-181889](https://bugs.mojang.com/browse/MC-181889) - Equipping sound plays when mobs picking up non-armor items
- [MC-185357](https://bugs.mojang.com/browse/MC-185357) - Removing a plant from a flower pot still plays generic armor equipping sound/shows Gear equips in subtitles
- [MC-185359](https://bugs.mojang.com/browse/MC-185359) - Using a bucket in Survival mode still plays generic armor equipping sound/shows Gear equips in subtitles
- [MC-185360](https://bugs.mojang.com/browse/MC-185360) - Milking a mooshroom for stew still plays armor equip sound/shows Gear equips subtitle
- [MC-189565](https://bugs.mojang.com/browse/MC-189565) - Some entities do not render inside of spawners and producing error log spam in console, potentially causing lag
- [MC-190896](https://bugs.mojang.com/browse/MC-190896) - Lag when opening a shipwreck chest containing buried treasure map
- [MC-192594](https://bugs.mojang.com/browse/MC-192594) - plains_stable_1 misplaced blocks
- [MC-192629](https://bugs.mojang.com/browse/MC-192629) - plains_stable_2 misplaced blocks
- [MC-192876](https://bugs.mojang.com/browse/MC-192876) - Misplaced trapdoor on taiga_decoration_6
- [MC-192879](https://bugs.mojang.com/browse/MC-192879) - Wall incorrectly placed on certain taiga houses
- [MC-192930](https://bugs.mojang.com/browse/MC-192930) - Zombies picking up items play the gear equipping sound and subtitle
- [MC-193071](https://bugs.mojang.com/browse/MC-193071) - Eating food items that return empty containers still play gear equipping sound
- [MC-195125](https://bugs.mojang.com/browse/MC-195125) - plains_animal_pen_1 misplaced block
- [MC-195126](https://bugs.mojang.com/browse/MC-195126) - plains_animal_pen_3 misplaced blocks
- [MC-195351](https://bugs.mojang.com/browse/MC-195351) - Comparator in compare mode can schedule unneeded tileticks
- [MC-196542](https://bugs.mojang.com/browse/MC-196542) - Small cleanup for skylight propagation code
- [MC-197009](https://bugs.mojang.com/browse/MC-197009) - Referencing empty item tag in recipe can crash client
- [MC-197140](https://bugs.mojang.com/browse/MC-197140) - Jack o’Lantern doesn’t come after Carved Pumpkin in Creative Inventory
- [MC-197179](https://bugs.mojang.com/browse/MC-197179) - Baby piglins that pick up leather don’t despawn, cluttering the Nether with unnecessary baby piglins
- [MC-197524](https://bugs.mojang.com/browse/MC-197524) - Border chunks do not enforce neighbors to be loaded, causing light updates to get stuck
- [MC-198129](https://bugs.mojang.com/browse/MC-198129) - ReplaceBlobsFeature changed from 1.16.1 to 1.16.2, affecting Basalt Delta generation
- [MC-198414](https://bugs.mojang.com/browse/MC-198414) - if the angle in /spawnpoint is set to ±infinity, and the player dies, it will kick the player, and upon rejoin will crash the game
- [MC-198807](https://bugs.mojang.com/browse/MC-198807) - Making piglins and piglin brutes angry at certain entities (like dropped items) crashes the game
- [MC-202246](https://bugs.mojang.com/browse/MC-202246) - Drowned navigation causes memory leak/performance degredation

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/043ec38297d0ec58abd6f636bc92f5664a8ccecb/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
