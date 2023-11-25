---
title: Minecraft Java Edition - Snapshot 20W12A
date: 2020-03-20T00:30:13Z
updated: 2020-03-20T00:30:17Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360040792132-Minecraft-Java-Edition-Snapshot-20W12A
---

**18 March 2020**

# NEW FEATURES IN 20W12A

-   Added the respawn anchor that can set your respawn point in the Nether. Use while holding Glowstone to charge to a maximum of four charges - each respawn depletes one charge
-   Added polished basalt! Smelt your basalt to make it clean and shiny!
-   Warped and crimson nylium can now be bonemealed to get more of the strange new vegetation
-   Hoes are now the appropriate tool for sponges and wet sponges

# CHANGES IN 20W12A

-   When fishing, treasure loot can now only be obtained by fishing in open waters
-   Reduced the maximum distance a bee can wander away from its home hive when randomly wandering to around 22 blocks
-   Nether gold ore can now be mined with any type of pickaxe and drops a few gold nuggets
-   Parrots imitate hostile mobs less often
-   Parrots do not randomly imitate hostile mobs when gamemode is on peaceful
-   New mood detection algorithm for cave sounds

# TECHNICAL CHANGES IN 20W12A

-   The spawnpoint command now supports being run in any dimension

## UUIDS IN NBT

UUIDs stored in NBT are now represented as an array of four integers.

Example: {UUID:\[I;1498693494,1027158888,1898994005,860320107\]}

Along with that a couple of fields have been renamed:

-   OwnerUUID of tamed animals, area effect clouds, evoker fangs and projectiles is now simply Owner
-   TrustedUUIDs of foxes is now Trusted
-   target_uuid of conduits is now Target

## LOOT TABLES

### ENTITY PREDICATE

-   Added fishing_hook sub-predicate

#### FISHING HOOK

-   Check properties of the fishing hook

#### PARAMETER

-   in_open_water - Matches whether the fishing location is open water fishing or not. A fishing location is considered to be open water if there are no blocks above water and no solid underwater blocks around, all water blocks are source blocks and there are no bubble columns.

# FIXED BUGS IN 20W12A

-   [MC-3328](https://bugs.mojang.com/browse/MC-3328) - Dismounting an entity places riding entity / player half block too high
-   [MC-64242](https://bugs.mojang.com/browse/MC-64242) - Silent tag is not working for some entities
-   [MC-100342](https://bugs.mojang.com/browse/MC-100342) - Several Non-Ticking blocks are marked as ticking forcing the growth-algorithm to check chunks needlessly
-   [MC-113809](https://bugs.mojang.com/browse/MC-113809) - Chorus Flower plant, Bamboo, Sugarcane, Cactus and other plants grow instantly when supporting block is replaced with same block type
-   [MC-114000](https://bugs.mojang.com/browse/MC-114000) - Mouse click in cat hissing sounds
-   [MC-122128](https://bugs.mojang.com/browse/MC-122128) - Recipe book resets itself to closed state after death
-   [MC-129137](https://bugs.mojang.com/browse/MC-129137) - Parrots imitating hostile mobs in peaceful is not that peaceful
-   [MC-130137](https://bugs.mojang.com/browse/MC-130137) - Grass and mycelium don't decay underwater
-   [MC-140545](https://bugs.mojang.com/browse/MC-140545) - Pathfinding prefers North (negative Z) direction
-   [MC-148936](https://bugs.mojang.com/browse/MC-148936) - Parrot summoned with negative Age has smaller hitbox
-   [MC-149375](https://bugs.mojang.com/browse/MC-149375) - Camera can be positioned inside of snow layers
-   [MC-160959](https://bugs.mojang.com/browse/MC-160959) - Clicking onto a bed in daytime doesn't grant the advancement "Sweet Dreams"
-   [MC-161754](https://bugs.mojang.com/browse/MC-161754) - Item duplication with chested donkeys, mules and llamas
-   [MC-163918](https://bugs.mojang.com/browse/MC-163918) - Bees not animating their pollen gathering
-   [MC-166980](https://bugs.mojang.com/browse/MC-166980) - Bees become stuck wandering to the north-west after completing a task, or randomly in large numbers
-   [MC-168384](https://bugs.mojang.com/browse/MC-168384) - NBT-Tag "Silent:1b" doesn't work for bees.
-   [MC-169965](https://bugs.mojang.com/browse/MC-169965) - Potion effect timers for higher levels can remain at 0:00 after the higher level has run out if multiple levels of the same effect were applied in descending order
-   [MC-170584](https://bugs.mojang.com/browse/MC-170584) - Structure taiga_meeting_point_2 from zombie villages has 1 misrotated log
-   [MC-170591](https://bugs.mojang.com/browse/MC-170591) - Misrotated floor blocks in desert_tool_smith_1 basement
-   [MC-170773](https://bugs.mojang.com/browse/MC-170773) - Recipe book and filtering craftable do not stay open for blast furnace and smoker when (re)loading the world
-   [MC-170940](https://bugs.mojang.com/browse/MC-170940) - Netherite ingot recipes are not grouped
-   [MC-171133](https://bugs.mojang.com/browse/MC-171133) - Camera can be positioned inside of soul sand
-   [MC-172188](https://bugs.mojang.com/browse/MC-172188) - Hoglins are not required by 'Two by Two' advancement
-   [MC-172690](https://bugs.mojang.com/browse/MC-172690) - Smelting netherite scraps doesn't provide the right amount of experience
-   [MC-172820](https://bugs.mojang.com/browse/MC-172820) - Piglins can turn into adult chicken jockeys in the overworld
-   [MC-173199](https://bugs.mojang.com/browse/MC-173199) - Fossils in the nether cause caves / floating islands to generate and can break through the nether roof
-   [MC-173220](https://bugs.mojang.com/browse/MC-173220) - Dismounting passenger moves to a nearby block when ridden entity dies
-   [MC-173420](https://bugs.mojang.com/browse/MC-173420) - Sign crafting recipes of various wood types are not grouped
-   [MC-173487](https://bugs.mojang.com/browse/MC-173487) - Falling out of water death message still does not seem to appear
-   [MC-173552](https://bugs.mojang.com/browse/MC-173552) - Nether Fossile support islands cut off at chunk borders
-   [MC-173791](https://bugs.mojang.com/browse/MC-173791) - Mobs dismount vehicles only in front of the boat, even if there is danger ahead
-   [MC-173828](https://bugs.mojang.com/browse/MC-173828) - Village church entrance does not generate correctly
-   [MC-173832](https://bugs.mojang.com/browse/MC-173832) - Crimson and Warped Hyphae and Stripped Hyphae are switched in Creative inventory
-   [MC-173837](https://bugs.mojang.com/browse/MC-173837) - Removing fire and soul fire with shears will reduce the shears' durability
-   [MC-174049](https://bugs.mojang.com/browse/MC-174049) - Fireworks shot from a crossbow do not explode instantly when hitting a solid block
-   [MC-174071](https://bugs.mojang.com/browse/MC-174071) - Roof of savanna_mason_1 is cut off
-   [MC-174072](https://bugs.mojang.com/browse/MC-174072) - Structure savanna_temple_2 contains one misrotated block
-   [MC-174073](https://bugs.mojang.com/browse/MC-174073) - Two misrotated blocks in savanna_small_house_5
-   [MC-174075](https://bugs.mojang.com/browse/MC-174075) - Misrotated block in savanna_butchers_shop_1
-   [MC-174076](https://bugs.mojang.com/browse/MC-174076) - Inconsistent rotation of logs under windows in savanna_small_house_4
-   [MC-174077](https://bugs.mojang.com/browse/MC-174077) - Structure snowy_library_1 no longer has snow under the roof
-   [MC-174078](https://bugs.mojang.com/browse/MC-174078) - Three misrotated blocks in snowy_armorer_house_2
-   [MC-174079](https://bugs.mojang.com/browse/MC-174079) - Misrotated block at snowy_weapon_smith_1
-   [MC-174082](https://bugs.mojang.com/browse/MC-174082) - Three misrotated blocks in snowy_small_house_2
-   [MC-174083](https://bugs.mojang.com/browse/MC-174083) - Three misrotated blocks in snowy_butchers_shop_1
-   [MC-174174](https://bugs.mojang.com/browse/MC-174174) - Arrow animation stuck on loop when a flame bow is used to detonate TNT
-   [MC-174234](https://bugs.mojang.com/browse/MC-174234) - Village structure snowy_masons_house_1 has two misrotated blocks
-   [MC-174258](https://bugs.mojang.com/browse/MC-174258) - Fixed item frames do not take void damage
-   [MC-174391](https://bugs.mojang.com/browse/MC-174391) - Several misrotated blocks at snowy_medium_house_2
-   [MC-174429](https://bugs.mojang.com/browse/MC-174429) - Chorus flowers remove arrow and trident velocity
-   [MC-174464](https://bugs.mojang.com/browse/MC-174464) - Soul speed decreases durability on boots in creative mode
-   [MC-174466](https://bugs.mojang.com/browse/MC-174466) - Soul speed particles are generated in spectator mode
-   [MC-174467](https://bugs.mojang.com/browse/MC-174467) - Placing fire on soul sand does not place soul fire
-   [MC-174476](https://bugs.mojang.com/browse/MC-174476) - Soul fire torch is in the piglin_repellents item tag twice
-   [MC-174480](https://bugs.mojang.com/browse/MC-174480) - Piglins are not attracted to Nether gold ore
-   [MC-174489](https://bugs.mojang.com/browse/MC-174489) - Shroomlight preferred tool is now both Axe and Hoe
-   [MC-174502](https://bugs.mojang.com/browse/MC-174502) - Soul Speed 3 on Soul Soil in water keeps and increases player momentum
-   [MC-174513](https://bugs.mojang.com/browse/MC-174513) - Soul Speed Enchanted Books from bartering with piglins do not work in an anvil
-   [MC-174522](https://bugs.mojang.com/browse/MC-174522) - Soul Speed doesn't break boots
-   [MC-174690](https://bugs.mojang.com/browse/MC-174690) - Soul speed enchantment books can be found in chests
-   [MC-174785](https://bugs.mojang.com/browse/MC-174785) - Mining speed of crimson and warped wall signs is not affected by an axe

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/3d9657a172415a163e25096942f5a4d110b984a0/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
