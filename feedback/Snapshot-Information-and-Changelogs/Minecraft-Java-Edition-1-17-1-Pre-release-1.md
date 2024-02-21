---
title: "Minecraft: Java Edition - 1.17.1 Pre-release 1 "
date: 2021-06-18T13:23:38Z
updated: 2021-06-18T13:24:16Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4403307412365-Minecraft-Java-Edition-1-17-1-Pre-release-1
hash:
  changes-in-1.17.1-pre-release-1: changes-in-1171-pre-release-1
  the-caves-cliffs-preview: the-caves--cliffs-preview
  technical-changes-in-1.17.1-pre-release-1: technical-changes-in-1171-pre-release-1
  fixed-bugs-in-1.17.1-pre-release-1: fixed-bugs-in-1171-pre-release-1
---

Happy Friday! The first pre-release for 1.17.1 is now available for download. This pre-release introduces a few changes to some gameplay mechanics, and it also fixes a bunch of bugs.

# CHANGES IN 1.17.1 PRE-RELEASE 1

- Blue axolotls can now only be obtained through breeding
- Non-screaming goats now have a rare chance to produce a screaming goat when bred
- Status effects on goats now also apply when the goat is jumping or ramming
- Raised the drop rate for copper ingots from Drowned to 11% + 2% per level of looting
- Powder snow now fills cauldrons 2 times faster than before (still pretty slowly, though!)
- Zombies, Zombie Villagers, Husks and Drowned will no longer pick up glow ink sacs

# THE CAVES & CLIFFS PREVIEW

Download the [updated datapack](https://launcher.mojang.com/v1/objects/622bf0fd298e1e164ecd05d866045ed5941283cf/CavesAndCliffsPreview.zip).

# TECHNICAL CHANGES IN 1.17.1 PRE-RELEASE 1

- In case of DNS-based redirection, the client will send the hostname actually used to connect (this restores the pre-1.17 behaviour)

# FIXED BUGS IN 1.17.1 PRE-RELEASE 1

- [MC-123654](https://bugs.mojang.com/browse/MC-123654) - Sun, moon, and/or clouds are not showing if render distance is below 4
- [MC-131290](https://bugs.mojang.com/browse/MC-131290) - Enchantments are saved as shorts, but are loaded as and function with integer values
- [MC-156155](https://bugs.mojang.com/browse/MC-156155) - Turkish lira sign (₺) appears as □ in the game
- [MC-194736](https://bugs.mojang.com/browse/MC-194736) - Duplicate text mapping for U+00B7
- [MC-196999](https://bugs.mojang.com/browse/MC-196999) - U+1FEC is wrong in Minecraft’s font
- [MC-213986](https://bugs.mojang.com/browse/MC-213986) - Pistons and dispensers can be used to create ghost blocks using powder snow
- [MC-219018](https://bugs.mojang.com/browse/MC-219018) - Ghost items can be created using /item (server doesn’t update client inventory correctly)
- [MC-223350](https://bugs.mojang.com/browse/MC-223350) - Loaded chunks sometimes don’t render until the player moves their head slightly
- [MC-225816](https://bugs.mojang.com/browse/MC-225816) - Hanging Roots appear large when an item entity
- [MC-226461](https://bugs.mojang.com/browse/MC-226461) - Logs can be replaced with stone near lava pools
- [MC-226948](https://bugs.mojang.com/browse/MC-226948) - Withers are now affected by potion effects
- [MC-227387](https://bugs.mojang.com/browse/MC-227387) - World gen datapacks will likely crash or softlock the game
- [MC-227435](https://bugs.mojang.com/browse/MC-227435) - Lag when placing heads of non-existent players when on servers
- [MC-227483](https://bugs.mojang.com/browse/MC-227483) - root_system feature config’s codec uses a wrong field
- [MC-227520](https://bugs.mojang.com/browse/MC-227520) - Overworld Fossils always generate at bedrock level
- [MC-227557](https://bugs.mojang.com/browse/MC-227557) - End portal texture appears stretched after world conversion
- [MC-227618](https://bugs.mojang.com/browse/MC-227618) - Small dripleaf is consumed without being placed when used on tall seagrass
- [MC-227651](https://bugs.mojang.com/browse/MC-227651) - Group for lapis lazuli ore smelting and blasting recipes is misspelled
- [MC-227821](https://bugs.mojang.com/browse/MC-227821) - Client crash when trying to create/edit realm immediately after deleting previous one
- [MC-227891](https://bugs.mojang.com/browse/MC-227891) - Ender pearls despawn when player logs out of a server
- [MC-228219](https://bugs.mojang.com/browse/MC-228219) - Thrown ender pearls disappear upon entering the exit end portal
- [MC-228343](https://bugs.mojang.com/browse/MC-228343) - java.lang.NullPointerException when random_selector default feature isn’t found
- [MC-228430](https://bugs.mojang.com/browse/MC-228430) - Very long loading pause while booting the game (“Failed to add PDH Counter”, caused by oshi)
- [MC-228828](https://bugs.mojang.com/browse/MC-228828) - Specifying the --server parameter when starting the game, causes the game to crash
- [MC-229299](https://bugs.mojang.com/browse/MC-229299) - Blue axolotls can spawn naturally

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/42dfafdd31a1e6edfe59c79ea0e109fede1c8071/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
