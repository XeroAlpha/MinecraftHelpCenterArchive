---
title: "Minecraft: Java Edition - Snapshot 23w13a"
date: 2023-03-29T14:35:57Z
updated: 2023-03-29T14:36:01Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/14408892823309-Minecraft-Java-Edition-Snapshot-23w13a
---

In this week's snapshot 23w13a we're following up on all the new things in last week's snapshot with a big round of bug fixes. Happy mining!

# CHANGES

- GUI can be scaled on the Video Settings screen by holding Ctrl and scrolling the mouse wheel

# FIXED BUGS IN SNAPSHOT 23W13A

- [MC-159637](https://bugs.mojang.com/browse/MC-159637) - Mobs with passengers have broken movements
- [MC-230916](https://bugs.mojang.com/browse/MC-230916) - "Potted Flowering Azalea Bush Plant" uses the wrong texture
- [MC-256503](https://bugs.mojang.com/browse/MC-256503) - Camel can swim sitting down
- [MC-256506](https://bugs.mojang.com/browse/MC-256506) - Camels riding entities get permanently stuck in dash mode
- [MC-257246](https://bugs.mojang.com/browse/MC-257246) - Horses do not make step_wood sounds when walking on Nether wood, cherry wood, bamboo wood, or stems
- [MC-257268](https://bugs.mojang.com/browse/MC-257268) - The dashing animations of camels sometimes aren't displayed for other players
- [MC-259364](https://bugs.mojang.com/browse/MC-259364) - The "item.minecraft.smithing_template.netherite_upgrade.base_slot_description" string is missing a serial comma
- [MC-260075](https://bugs.mojang.com/browse/MC-260075) - Player holds brush by ferrule in third person
- [MC-260086](https://bugs.mojang.com/browse/MC-260086) - Entities riding sniffers are positioned too low down
- [MC-260090](https://bugs.mojang.com/browse/MC-260090) - Sniffers ignore the "minecraft:generic.movement_speed" attribute
- [MC-260093](https://bugs.mojang.com/browse/MC-260093) - Particles spawned by brushes in the left hand move in the wrong direction
- [MC-260146](https://bugs.mojang.com/browse/MC-260146) - Pink petals are not next to other flowers in the creative inventory
- [MC-260238](https://bugs.mojang.com/browse/MC-260238) - Sniffer digging particles are produced slightly too high up
- [MC-260252](https://bugs.mojang.com/browse/MC-260252) - Sniffer walking animation is broken when walking on ice
- [MC-260320](https://bugs.mojang.com/browse/MC-260320) - Parity Issue: Snifflets (Baby Sniffers) have an inconsistent model with Bedrock
- [MC-260435](https://bugs.mojang.com/browse/MC-260435) - Sniffers don't play their walking animation when moving through cobwebs
- [MC-260454](https://bugs.mojang.com/browse/MC-260454) - Decorated pots are translated off-center when displayed on head
- [MC-260465](https://bugs.mojang.com/browse/MC-260465) - The torchflower crop still has an age 2 blockstate that looks like the regular torchflower
- [MC-260693](https://bugs.mojang.com/browse/MC-260693) - potted_torchflower is still not part of the \#flower_pots block tag
- [MC-260834](https://bugs.mojang.com/browse/MC-260834) - "Alpha" can play during gameplay
- [MC-260898](https://bugs.mojang.com/browse/MC-260898) - Brushes can be used through entities
- [MC-260974](https://bugs.mojang.com/browse/MC-260974) - Aggressive mobs can't control "vehicle" mobs
- [MC-261170](https://bugs.mojang.com/browse/MC-261170) - Sniffer egg faces aren't culled when covered by blocks
- [MC-261181](https://bugs.mojang.com/browse/MC-261181) - The "Glow and Behold!" advancement is granted when interacting with waxed signs while holding glow ink sacs
- [MC-261190](https://bugs.mojang.com/browse/MC-261190) - Signs no longer resolve JSON text components
- [MC-261191](https://bugs.mojang.com/browse/MC-261191) - Pitcher plants aren't part of the \#minecraft:flowers or \#minecraft:tall_flowers block tags
- [MC-261193](https://bugs.mojang.com/browse/MC-261193) - Calibrated sculk sensor placed by commands is waterlogged by default
- [MC-261201](https://bugs.mojang.com/browse/MC-261201) - Pitcher plant can be replaced by the use of placed blocks, which is not consistent with other tall flowers
- [MC-261204](https://bugs.mojang.com/browse/MC-261204) - When is farmland broken under a pitcher crop, the crop doesn't get broken
- [MC-261205](https://bugs.mojang.com/browse/MC-261205) - Using bone meal on pitcher pod (crop) advances several growth stages at once
- [MC-261206](https://bugs.mojang.com/browse/MC-261206) - "A Seedy Place" advancement not granted when planting Pitcher Pods
- [MC-261213](https://bugs.mojang.com/browse/MC-261213) - Sniffer eggs can be destroyed by fluids which is different from turtle eggs
- [MC-261223](https://bugs.mojang.com/browse/MC-261223) - Editing a hanging sign with a right click doesn't work while holding a placeable object
- [MC-261224](https://bugs.mojang.com/browse/MC-261224) - Editing sign from an angle (or the side) will edit the back instead of the front
- [MC-261229](https://bugs.mojang.com/browse/MC-261229) - Crashes and Chunk Resetting involving Suspicious Sand with Loot Tables updating from 1.19.4
- [MC-261232](https://bugs.mojang.com/browse/MC-261232) - Texture minecraft:block/sniffer_egg_slightly_cracked with size 40x32 limits mip level from 4 to 3
- [MC-261237](https://bugs.mojang.com/browse/MC-261237) - Using bone meal on upper pitcher crop doesn't advance the age of the lower half
- [MC-261241](https://bugs.mojang.com/browse/MC-261241) - Saddle equips sound plays twice when equipping a saddle on a camel
- [MC-261243](https://bugs.mojang.com/browse/MC-261243) - Pitcher Crop isn't part of the \#crops tag
- [MC-261262](https://bugs.mojang.com/browse/MC-261262) - Raiser and Wayfinder smithing templates are offset by one pixel
- [MC-261264](https://bugs.mojang.com/browse/MC-261264) - The advancement "Two by Two" is no longer obtainable due to the change to sniffer's breeding
- [MC-261275](https://bugs.mojang.com/browse/MC-261275) - Sniffers drop moss blocks when killed

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/701767d4d07aad992e3e2875ae5d1485cebf66e0/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
