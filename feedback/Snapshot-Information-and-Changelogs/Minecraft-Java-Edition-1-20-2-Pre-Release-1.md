---
title: "Minecraft: Java Edition - 1.20.2 Pre-Release 1 "
date: 2023-09-05T14:40:54Z
updated: 2023-09-05T14:44:14Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19208108934925-Minecraft-Java-Edition-1-20-2-Pre-Release-1-
---

Are you prepared for Pre-release 1 of 1.20.2? Moving into pre-releases means that, moving forward, you won't see any significant changes besides bug fixes and tweaks until the next snapshot cycle. It also means that we will be releasing more frequently than just Wednesdays, so keep your eyes peeled! However, Pre-release 1 brings new changes to the 'Villager Trade Rebalance' experiment, updates to Recipe Book search, command changes, and a new game rule!

Happy crafting!

# CHANGES

- The Recipe Book search has been updated with the following changes:
  - The search will only match the beginning of any word in the item's name
    - For example, searching for "tor" will still show Torch and Redstone Torch but not Daylight Detector anymore
  - All recipes, including those that have not been unlocked, will now show up in search results
  - This will enable experienced players to find the recipes they are looking for (even if it hasn't been unlocked yet) without overwhelming new players
- Updated structure icons on explorer maps sold by Cartographers
- When villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic

# TECHNICAL CHANGES

- The data pack version is now 18
- Client options are now sent during the configuration network phase when joining a server

## DATA PACK VERSION 18

This data pack version removes the recently introduced execute if function and return run functionality. Flaws with those commands (see bugs [MC-264595](https://bugs.mojang.com/browse/MC-264595), [MC-264699](https://bugs.mojang.com/browse/MC-264699) and [MC-264710](https://bugs.mojang.com/browse/MC-264710)) require some substantial changes to fix, which we do not want to make close to a release.

These commands will instead be reintroduced early in the next snapshot series when we can take the time to iterate on and test them together with pack makers.

- Removed execute if\|unless function command form
- Removed return run command form
- Numbers used as macro arguments are now always inserted without suffixes, regardless of numeric type
- Added game rule enderPearlsVanishOnDeath, controlling whether thrown ender pearls vanish when the player that threw them dies (default true)

# EXPERIMENTAL FEATURES

## VILLAGER TRADE REBALANCE PART 2

This pre-release updates the Villager Trade Rebalance experiment. This experiment has no effect on normal worlds. If you want to try these changes, you must turn on the Feature Toggle in the Experiments Menu when creating a new world. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change! We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them.We appreciate your feedback on these changes. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts! We have been following the discussions about the previous Librarian and Wandering Trader updates and look forward to seeing the conversation continue.

### CARTOGRAPHER

Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance.

Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village.

Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map.

![1.20.2-pre1-cartographer.png](https://feedback.minecraft.net/hc/article_attachments/19208177138829)

### ARMORER

The Armorer's trades have been updated with many changes.

The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds.

Early-game players will find Armorers useful as a great source of iron armor, Shields and Emeralds.

Other changes include:

- Most master-level Armorers buy Iron Blocks (and pay very well for them)
- Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers
- The Savanna Armorer sells cursed diamond armor at reduced prices
- The Taiga Armorer can swap one piece of diamond armor for another

![1.20.2-pre1-armorer.png](https://feedback.minecraft.net/hc/article_attachments/19208235267469)

### STRUCTURE LOOT

Certain Enchanted Books now have a high chance of generating in some structures:

- Ancient Cities: Mending
- Mineshafts: Efficiency (I to V)
- Pillager Outposts: Quick Charge (I to III)
- Desert Temples: Unbreaking (I to III)
- Jungle Temples: Unbreaking (I to III)

# FIXED BUGS IN 1.20.2 PRE-RELEASE 1

- [MC-70127](https://bugs.mojang.com/browse/MC-70127) - Some block state changes aren't communicated to clients
- [MC-72721](https://bugs.mojang.com/browse/MC-72721) - Chat messages show after death independent of chat setting
- [MC-103800](https://bugs.mojang.com/browse/MC-103800) - Sometimes armor stands won't update their visual rotation
- [MC-119873](https://bugs.mojang.com/browse/MC-119873) - The text used for the credits button within the title screen is untranslatable
- [MC-154827](https://bugs.mojang.com/browse/MC-154827) - Typo in splash text "Verlet intregration!"
- [MC-177172](https://bugs.mojang.com/browse/MC-177172) - Dash in villager/trader UI is hardcoded / untranslatable
- [MC-248778](https://bugs.mojang.com/browse/MC-248778) - The item count symbol within shulker box tooltips is untranslatable
- [MC-248833](https://bugs.mojang.com/browse/MC-248833) - The parentheses used before and after the warning label within the language menu are untranslatable
- [MC-248844](https://bugs.mojang.com/browse/MC-248844) - The page indicator symbol within the recipe book GUI is untranslatable
- [MC-248846](https://bugs.mojang.com/browse/MC-248846) - The colon used within the death screen to show the player's score is untranslatable
- [MC-249355](https://bugs.mojang.com/browse/MC-249355) - The hyphen used within the statistics menu to show a null value is untranslatable
- [MC-252295](https://bugs.mojang.com/browse/MC-252295) - The word "whilst" within several death messages isn't spelled in American English
- [MC-252298](https://bugs.mojang.com/browse/MC-252298) - Death messages relating to the Thorns enchantment don't contain conjunctions where appropriate
- [MC-252316](https://bugs.mojang.com/browse/MC-252316) - The word "burnt" within some death messages isn't spelled in American English
- [MC-253241](https://bugs.mojang.com/browse/MC-253241) - The player count indicator symbol within the multiplayer menu is untranslatable
- [MC-253269](https://bugs.mojang.com/browse/MC-253269) - The advancement progress indicator symbol within the advancements menu is untranslatable
- [MC-253270](https://bugs.mojang.com/browse/MC-253270) - The hyphen used within boss bars for raids is untranslatable
- [MC-253278](https://bugs.mojang.com/browse/MC-253278) - The percentage symbol used within the level loading screen to show the loading progress of the world is untranslatable
- [MC-253281](https://bugs.mojang.com/browse/MC-253281) - Text within filled map tooltips when advanced tooltips are hidden is untranslatable
- [MC-253283](https://bugs.mojang.com/browse/MC-253283) - The percentage and chunk indicator symbols used within the optimize world menu are untranslatable
- [MC-253638](https://bugs.mojang.com/browse/MC-253638) - The symbols used within shulker box tooltips to show random loot table contents are untranslatable
- [MC-255418](https://bugs.mojang.com/browse/MC-255418) - Vertical redstone dust placed against dropper/dispenser/hopper doesn't visually disappear when the dust above is removed
- [MC-256777](https://bugs.mojang.com/browse/MC-256777) - The two characters used within the tab list to show players' health are untranslatable
- [MC-260819](https://bugs.mojang.com/browse/MC-260819) - The "death.attack.message_too_long" string is missing an article before the word "stripped"
- [MC-263133](https://bugs.mojang.com/browse/MC-263133) - Inconsistent word usage in Out of Memory screen
- [MC-264233](https://bugs.mojang.com/browse/MC-264233) - Player is shown as Anonymous after dying and respawning
- [MC-264574](https://bugs.mojang.com/browse/MC-264574) - symlink does not work for root world folder
- [MC-264615](https://bugs.mojang.com/browse/MC-264615) - It takes several seconds for the absorption effect icon to display after obtaining the effect
- [MC-264656](https://bugs.mojang.com/browse/MC-264656) - Regular golden apples don't increase the number of gold hearts if you previously ate an enchanted golden apple and then took damage
- [MC-264657](https://bugs.mojang.com/browse/MC-264657) - Absorption gold heart refilling is determined by whether the low level and the high level have the same hideParticles parameter
- [MC-264658](https://bugs.mojang.com/browse/MC-264658) - Only integer numeric data type can be used in macro
- [MC-264809](https://bugs.mojang.com/browse/MC-264809) - Redstone comparators cause redstone dust connection issue
- [MC-265053](https://bugs.mojang.com/browse/MC-265053) - Programmer Art lapis lazuli outline texture in enchanting table UI incorrectly uses the old formatting
- [MC-265060](https://bugs.mojang.com/browse/MC-265060) - Missing sprite for error in Loom GUI (loom.png)
- [MC-265126](https://bugs.mojang.com/browse/MC-265126) - 'requirements' field can no longer be skipped in advancements
- [MC-265151](https://bugs.mojang.com/browse/MC-265151) - The "(Unknown)" string that's displayed when being banned from a server for an unknown reason is untranslatable
- [MC-265209](https://bugs.mojang.com/browse/MC-265209) - Switching to protocol "CONFIGURATION" causes race condition
- [MC-265213](https://bugs.mojang.com/browse/MC-265213) - The chat message from the /random command says "between 1 and 6" instead of "1 to 6"

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7fa1c9c59238ee98696da880d361d96c728dd9ea/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
