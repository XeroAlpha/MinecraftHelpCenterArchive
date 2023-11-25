---
title: "Minecraft: Java Edition - Snapshot 19W13B"
date: 2019-03-27T17:12:49Z
updated: 2019-03-29T14:29:10Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360025595772-Minecraft-Java-Edition-Snapshot-19W13B
---

29 March 2019

# CHANGES IN 19W13B

-   Revamped trading UI
-   Ringing bells now reveals all nearby mobs that can appear in raids
-   Fixed bugs

# FIXED BUGS IN 19W13B

-   [MC-121282](https://bugs.mojang.com/browse/MC-121282) - Server icons erased on loading multiplayer menu
-   [MC-139017](https://bugs.mojang.com/browse/MC-139017) - Rain goes through blocks when upgrading world from older versions
-   [MC-139273](https://bugs.mojang.com/browse/MC-139273) - Destroying sugar cane from bottom doesn\'t destroy the sugar canes one at a time
-   [MC-139506](https://bugs.mojang.com/browse/MC-139506) - Lanterns can be duplicated with pistons
-   [MC-139763](https://bugs.mojang.com/browse/MC-139763) - Client logs warning \"Ignoring chunk since it\'s not in the view range\" while moving in world
-   [MC-141598](https://bugs.mojang.com/browse/MC-141598) - Chunks won\'t load in LAN world if the host isn\'t nearby
-   [MC-142192](https://bugs.mojang.com/browse/MC-142192) - Pistons can conduct redstone signal while retracting
-   [MC-145638](https://bugs.mojang.com/browse/MC-145638) - Minecarts defy gravity
-   [MC-145687](https://bugs.mojang.com/browse/MC-145687) - Banner patterns are inconsistently named
-   [MC-145696](https://bugs.mojang.com/browse/MC-145696) - \"Globe\" shield is broken
-   [MC-145790](https://bugs.mojang.com/browse/MC-145790) - Missing Translations: The \"block.minecraft.banner.globe./colour/\" banners are missing their translation
-   [MC-145813](https://bugs.mojang.com/browse/MC-145813) - Chunks past a certain point (multiplayer cache?) fail to load when client render distance is less than server view distance.
-   [MC-145869](https://bugs.mojang.com/browse/MC-145869) - The discount price overlaps the second item
-   [MC-146070](https://bugs.mojang.com/browse/MC-146070) - Bossbar notch opacity messed up when more than one bossbar is active
-   [MC-146080](https://bugs.mojang.com/browse/MC-146080) - Quartz Block Texture
-   [MC-146202](https://bugs.mojang.com/browse/MC-146202) - Detector rail duplication
-   [MC-146432](https://bugs.mojang.com/browse/MC-146432) - Moving glass hurts entities
-   [MC-146777](https://bugs.mojang.com/browse/MC-146777) - You can\'t unselect resource packs
-   [MC-146778](https://bugs.mojang.com/browse/MC-146778) - World completely stops loading/generating
-   [MC-146783](https://bugs.mojang.com/browse/MC-146783) - Ticking entity crash (villager)
-   [MC-146790](https://bugs.mojang.com/browse/MC-146790) - Mob spawners no longer spawn mobs in air blocks
-   [MC-146795](https://bugs.mojang.com/browse/MC-146795) - Crash when creating buffet world

# CHANGES IN 19W13A

-   Accessibility button is now available on the title screen
-   Accessibility and narration improvements
-   Raid tweaks
-   Bugfixes

## RAIDS

Raids now follow a set pattern based on difficulty to determine the exact number of groups that will spawn as part of the raid: Easy - 3 Normal - 5 Hard - 7

If you or your fellow village mates brought more than one level of Bad Omen into the village during the raid or at the initial trigger of the raid, then you will experience a bonus wave equivalent to the final base wave you would normally see for your difficulty. Ex: Bad Omen levels 2-5 would experience 4 waves on easy, where the fourth wave is the same as the third.

### BAD OMEN:

You can now get up to Bad Omen 5, and you only get 1 Bad Omen at a time from killing a captain. Each person that brings Bad Omen into the village will increase the Bad Omen level of the raid on that village up to Bad Omen 5. A higher level of bad omen means a higher chance that the enemies you face will have enchanted weapons.

### HERO OF THE VILLAGE:

You now get an effect called Hero of the Village after successfully defending your village from a raid! The level of this effect that you get is equivalent to the Bad Omen level of the village that was raided. This effect will last for \~2 in game days and will give you great discounts on trades, with the discount dependent on the level of the effect. Villagers will also show their gratitude, so look out for your new fans in the village after you save them!

### BELL CHANGES:

If the bell is rung, villagers will run into a random nearby home and hide for a short time.

### OTHER CHANGES:

-   All Illagers can now open doors, but Vindicators will still chop them down if they feel like it
-   All raid waves have been rebalanced, with certain waves more heavy on specific mobs than other waves and the earlier waves being significantly less easy than the later waves.
-   Evokers will spawn in waves 5-7, as opposed to just in the final wave before
-   Raiders are much better at going door-to-door now, and seek to be constantly moving during raids, always looking into houses to try and find villagers
-   Villagers now sweat all the time during raids, not just when you try to trade with them
-   Also you can trade with villagers during raids again!

# FIXED BUGS IN 19W13A

-   [MC-132313](https://bugs.mojang.com/browse/MC-132313) - Buttons and levers can be placed on the bottom of hoppers
-   [MC-137467](https://bugs.mojang.com/browse/MC-137467) - Ender dragon does not spawn if render distance is set to 10 or below
-   [MC-139376](https://bugs.mojang.com/browse/MC-139376) - Crash when putting spaces and clicking on \"Done\" in the jigsaw GUI
-   [MC-139798](https://bugs.mojang.com/browse/MC-139798) - Bad Omen disappears upon entering villages in spectator mode
-   [MC-141009](https://bugs.mojang.com/browse/MC-141009) - Clicking \"done\" on a Jigsaw disconnects client on dedicated server
-   [MC-141358](https://bugs.mojang.com/browse/MC-141358) - Tridents have the SoundEvent tag, but don\'t use it
-   [MC-145758](https://bugs.mojang.com/browse/MC-145758) - Villagers constantly breeding but don\'t produce baby villagers
-   [MC-146282](https://bugs.mojang.com/browse/MC-146282) - Entering Command Block UI Causes All Music to Stop
-   [MC-146346](https://bugs.mojang.com/browse/MC-146346) - Backup world file saved without .zip
-   [MC-146350](https://bugs.mojang.com/browse/MC-146350) - Splash water bottles do not put out fires
-   [MC-146353](https://bugs.mojang.com/browse/MC-146353) - Structure integrity does not work, RNG runs for all blocks at once
-   [MC-146359](https://bugs.mojang.com/browse/MC-146359) - Crash whilst rendering overlay
-   [MC-146360](https://bugs.mojang.com/browse/MC-146360) - Exiting bed always puts the player or villager in blocks
-   [MC-146367](https://bugs.mojang.com/browse/MC-146367) - Hostile mobs spawning on glass
-   [MC-146377](https://bugs.mojang.com/browse/MC-146377) - Beacon UI is nonresponsive and doesn\'t allow you to change the beacon effect
-   [MC-146380](https://bugs.mojang.com/browse/MC-146380) - After sleeping in a bed, the player always spawns on top of it if there are no blocks next to it
-   [MC-146381](https://bugs.mojang.com/browse/MC-146381) - Sleeping in a bed always resets the player\'s spawn point to the world spawn point
-   [MC-146387](https://bugs.mojang.com/browse/MC-146387) - Monsters spawning on leaves during night time
-   [MC-146454](https://bugs.mojang.com/browse/MC-146454) - Eating food no longer plays the burp sound
-   [MC-146470](https://bugs.mojang.com/browse/MC-146470) - Entities in forceloaded or world spawn chunks cannot be selected
-   [MC-146594](https://bugs.mojang.com/browse/MC-146594) - Villager babies don\'t have biome-specific skin
-   [MC-146707](https://bugs.mojang.com/browse/MC-146707) - Splash text in main menu changes every time you resize the Minecraft window

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the \"Launch Options\" tab.

Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/c63080e9349640fda5820bbe48cacc623c99c496/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
