---
title: "Minecraft: Java Edition - 1.20 Pre-Release 6"
date: 2023-05-25T16:09:16Z
updated: 2023-05-25T16:09:20Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/16127775677965-Minecraft-Java-Edition-1-20-Pre-Release-6
---

The sixth pre-release of the 1.20 update is here, yet again containing more bug fixes.

Happy mining!

# TECHNICAL CHANGES IN 1.20 PRE-RELEASE 6

- "item": "minecraft:air" can no longer be used in datapack recipes
- Ingredients in array form are now also allowed in smithing_trim and smithing_transform recipes on fields template, base and addition
  - Those fields also allow empty arrays, which signalize that slot needs to be left empty

## LOOT TABLES

### RANDOM SEQUENCES

The ID of the random sequence is now an optional field. If no sequence name is given, loot is drawn using a non-deterministic random source.

# FIXED BUGS IN 1.20 PRE-RELEASE 6

- [MC-237042](https://bugs.mojang.com/browse/MC-237042) - Killing players in the sneaking state that have their sneak option set to "Toggle" in their accessibility settings, results in other players not being able to see them in this state when they respawn
- [MC-241326](https://bugs.mojang.com/browse/MC-241326) - Thomas Guimbretière's name is listed twice and misspelt in the credits
- [MC-260411](https://bugs.mojang.com/browse/MC-260411) - Re-summoned dragons don't spawn end gateways when exiting the world before killing the dragon
- [MC-262340](https://bugs.mojang.com/browse/MC-262340) - Iron Golems can spawn on transparent blocks
- [MC-262575](https://bugs.mojang.com/browse/MC-262575) - Company names are still inconsistent in the credits

# GET THE PRE-RELEASE

Pre-Release are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/c737b7411fc0b60426a9feca83d09d63f4a86f27/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
