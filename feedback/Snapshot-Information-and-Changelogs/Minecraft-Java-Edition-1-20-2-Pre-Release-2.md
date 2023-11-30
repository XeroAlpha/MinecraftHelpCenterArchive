---
title: "Minecraft: Java Edition - 1.20.2 Pre-Release 2 "
date: 2023-09-08T09:55:04Z
updated: 2023-09-08T09:55:11Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19307683945101-Minecraft-Java-Edition-1-20-2-Pre-Release-2-
---

We've now released 1.20.2 Pre-release 2.

# RECIPE BOOK SEARCH REVERT

We received a lot of great feedback on the changes to the Recipe Book search in the last pre-release, as well as a number of bugs. As we do not have time to address this feedback so close to release, we have reverted the change for now, but we may look into this again at a later time.

# TECHNICAL CHANGES IN 1.20.2 PRE-RELEASE 2

- The resource pack version is now 18 accounting for the new icons in last pre-release

# FIXED BUGS IN 1.20.2 PRE-RELEASE 2

- [MC-109346](https://bugs.mojang.com/browse/MC-109346) - Newly rendered players always look south until they move their head
- [MC-206182](https://bugs.mojang.com/browse/MC-206182) - Cannot tab out of console text field of command block
- [MC-235762](https://bugs.mojang.com/browse/MC-235762) - Screenshots wider than 16384 pixels causes a crash / java.lang.OutOfMemoryError: Out of stack space
- [MC-249702](https://bugs.mojang.com/browse/MC-249702) - Server crash: java.lang.NullPointerException: Cannot invoke "com.google.gson.JsonArray.iterator()" because "\$\$1" is null
- [MC-261119](https://bugs.mojang.com/browse/MC-261119) - Accessibility button in the Welcome screen needs its own string
- [MC-262754](https://bugs.mojang.com/browse/MC-262754) - Change in AbstractScrollWidget breaks MultiLineEditBox click-to-move-cursor behaviour
- [MC-264759](https://bugs.mojang.com/browse/MC-264759) - Narrator narrates incorrect tab action in command block suggestions
- [MC-265237](https://bugs.mojang.com/browse/MC-265237) - Recipe book search no longer finds anything containing non-English characters
- [MC-265241](https://bugs.mojang.com/browse/MC-265241) - Recipe book search no longer finds relevant items in languages where compound words are not separated
- [MC-265243](https://bugs.mojang.com/browse/MC-265243) - Uncraftable variants of a craftable recipe are shown as craftable now
- [MC-265244](https://bugs.mojang.com/browse/MC-265244) - Macro arguments entered as floats are converted to scientific notation
- [MC-265245](https://bugs.mojang.com/browse/MC-265245) - Crafting book search doesn't find anything when a space is included in the search
- [MC-265253](https://bugs.mojang.com/browse/MC-265253) - Fullscreen Resolution value is untranslatable
- [MC-265260](https://bugs.mojang.com/browse/MC-265260) - Boats and rafts when placed turn south
- [MC-265262](https://bugs.mojang.com/browse/MC-265262) - Revoked recipes remain in the recipe book until relogging
- [MC-265263](https://bugs.mojang.com/browse/MC-265263) - Ender Pearl vanishes client side when enderPearlsVanishOnDeath is false
- [MC-265264](https://bugs.mojang.com/browse/MC-265264) - trade_rebalance tags are not in the trade_rebalance pack
- [MC-265276](https://bugs.mojang.com/browse/MC-265276) - Fire under naturally generated end crystals does not always emit light correctly
- [MC-265280](https://bugs.mojang.com/browse/MC-265280) - Mobs sometimes become invisible when you join a singleplayer world

# CHANGES IN 1.20.2 PRE-RELEASE 1

- The Recipe Book search has been updated with the following changes:
  - The search will only match the beginning of any word in the item's name
    - For example, searching for "tor" will still show Torch and Redstone Torch but not Daylight Detector anymore
  - All recipes, including those that have not been unlocked, will now show up in search results
  - This will enable experienced players to find the recipes they are looking for (even if it hasn't been unlocked yet) without overwhelming new players
- Updated structure icons on explorer maps sold by Cartographers
- When villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/cf5d9b2461898afd589274349989be704084a8dd/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
