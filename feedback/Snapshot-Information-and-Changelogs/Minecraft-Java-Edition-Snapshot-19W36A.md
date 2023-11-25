---
title: "Minecraft: Java Edition - Snapshot 19W36A"
date: 2019-09-04T19:57:57Z
updated: 2019-09-04T19:58:00Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360032993092-Minecraft-Java-Edition-Snapshot-19W36A
---

4 September 2019

# CHANGES IN 19W36A

-   Obfuscation maps are now published with all future releases of the game
-   Added features found in other Minecraft editions
-   Honey bottles are now less filling
-   Fixed bugs

## MODDING

In an effort to help make modding the game easier, we have decided to publish our game obfuscation maps with all future releases of the game, starting today. This means that anyone who is interested may deobfuscate the game and find their way around the code without needing to spend a few months figuring out what's what. It is our hope that mod authors and mod framework authors use these files to augment their updating processes that they have today. These mappings will always be available, instantly and immediately as part of every newly released version. This does not, however, change the existing restrictions on what you may or may not do with our game code or assets. The links to the obfuscation mappings are included as part of the version manifest json, and may be automatically pulled for any given version.

\
Prefixed to every obfuscation map is the following legal disclaimer:

© 2019 Microsoft Corporation. All rights reserved. This information is provided "as-is" and you bear the risk of using it. This information does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this information for your internal, reference purposes. Microsoft makes no warranties, express or implied, with respect to the information provided here.

## PARITY

Things from other editions of Minecraft have arrived to Java Edition!

-   Trying to sleep in a bed during daytime will now set the player's spawn location to that bed
-   Bells will now ring if powered with a redstone signal
-   The doInsomnia game rule can now be switched off to prevent phantoms from spawning during nighttime
-   The doImmediateRespawn game rule can now be switched on to have players respawn immediately without showing the death screen
-   The drowningDamage, fallDamage and fireDamage game rules can now be used to prevent certain sources of damage
-   Sponges now dry out when placed in the Nether
-   Fireworks dispensed from a dispenser now travel in the direction they were fired

# FIXED BUGS IN 19W36A

-   [MC-117914](https://bugs.mojang.com/browse/MC-117914) - Entities crossing dimensions through nether portal causes tremendous lag
-   [MC-140507](https://bugs.mojang.com/browse/MC-140507) - Overloading a chunk with data will cause it to revert to its old state
-   [MC-158677](https://bugs.mojang.com/browse/MC-158677) - Ender dragon freezes the server if there's no end stone in the end
-   [MC-158978](https://bugs.mojang.com/browse/MC-158978) - "Create New World" button in the world creation menu is enabled after returning from the world customize menu, allowing world names to be left blank
-   [MC-159359](https://bugs.mojang.com/browse/MC-159359) - Dispensers ignore honey level when collecting honey from hives/nests
-   [MC-159370](https://bugs.mojang.com/browse/MC-159370) - Bees suffocate when against a solid block ceiling
-   [MC-159383](https://bugs.mojang.com/browse/MC-159383) - Copying a bee nest/hive with NBT duplicates the bees inside of it as well, causing multiple bees with the same UUID to exist in the same world at the same time
-   [MC-159385](https://bugs.mojang.com/browse/MC-159385) - Bees are not affected by Bane of Arthropods enchantment
-   [MC-159395](https://bugs.mojang.com/browse/MC-159395) - Honey level of bee hives does not increase, as opposed to bee nests
-   [MC-159419](https://bugs.mojang.com/browse/MC-159419) - Custom beehive item can be used to spawn any entity, including command blocks
-   [MC-159424](https://bugs.mojang.com/browse/MC-159424) - Hostile bees will not sting you if you have a flower in your hand
-   [MC-159441](https://bugs.mojang.com/browse/MC-159441) - Bees stay leashed when leaving a bee hive, despite having dropped their lead when entering it, thus duplicating the lead
-   [MC-159508](https://bugs.mojang.com/browse/MC-159508) - Ctrl + Pick block on beehives and nests does not copy their honey levels
-   [MC-159515](https://bugs.mojang.com/browse/MC-159515) - Bees don't sleep at night
-   [MC-159518](https://bugs.mojang.com/browse/MC-159518) - Bees stop their animations when standing still, even when still in the air
-   [MC-159558](https://bugs.mojang.com/browse/MC-159558) - Bees attempt to sting the player even after they've already stung the player
-   [MC-159560](https://bugs.mojang.com/browse/MC-159560) - Semi-transparent pixels on bee textures
-   [MC-159584](https://bugs.mojang.com/browse/MC-159584) - When a bee nest/hive with a bee inside is destroyed on Creative, the bees inside disappear
-   [MC-159743](https://bugs.mojang.com/browse/MC-159743) - Bee textures have inconsistent amounts of nectar
-   [MC-159880](https://bugs.mojang.com/browse/MC-159880) - Bee duplicate passenger entities when entering and leaving hives
-   [MC-160008](https://bugs.mojang.com/browse/MC-160008) - Drinking honey bottles doesn't immediately make sound
-   [MC-160254](https://bugs.mojang.com/browse/MC-160254) - Bees do not pollinate on lilac, rose bush and peony

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/c042fd138ae280b01ce191937ca917666a15be38/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
