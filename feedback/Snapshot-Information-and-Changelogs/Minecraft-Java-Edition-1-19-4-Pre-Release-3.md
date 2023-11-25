---
title: "Minecraft: Java Edition - 1.19.4 Pre-Release 3"
date: 2023-03-01T15:18:52Z
updated: 2023-03-01T15:18:55Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/13572953374349-Minecraft-Java-Edition-1-19-4-Pre-Release-3
---

We\'ve now released 1.19.4 pre-release 3.

# CHANGES IN 1.19.4 PRE-RELEASE 3

-   Potions have had their colors adjusted to make them more distinguishable from each other

# TECHNICAL CHANGES IN 1.19.4 PRE-RELEASE 3

-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to screenshots/debug/

# EXPERIMENTAL FEATURE CHANGES IN 1.19.4 PRE-RELEASE 3

## POTTERY SHARDS

-   Updated the textures of the Archer Pottery Shard based on community feedback

# FIXED BUGS IN 1.19.4 PRE-RELEASE 3

-   [MC-148458](https://bugs.mojang.com/browse/MC-148458) - Ridable mobs aren't knocked back upon death
-   [MC-250486](https://bugs.mojang.com/browse/MC-250486) - Error saving GUI scale option when toggling fullscreen while fullscreen resolution is changed
-   [MC-258561](https://bugs.mojang.com/browse/MC-258561) - Endermen teleport away instead of taking damage from end crystal, TNT and wither skull explosions
-   [MC-259666](https://bugs.mojang.com/browse/MC-259666) - Reloading a resource pack that has a custom texture atlas for a second time causes severe FPS lag on the client
-   [MC-260277](https://bugs.mojang.com/browse/MC-260277) - potted_cherry_sapling and potted_torchflower not part of #flower_pots block tag
-   [MC-260451](https://bugs.mojang.com/browse/MC-260451) - Inventory character with semi-transparent outer skin layer not rendered correctly when looking right
-   [MC-260456](https://bugs.mojang.com/browse/MC-260456) - Certain potions are still indistinguishable by color
-   [MC-260470](https://bugs.mojang.com/browse/MC-260470) - Endermen can't dodge arrows fired from a dispenser
-   [MC-260474](https://bugs.mojang.com/browse/MC-260474) - Players and mobs are no longer affected by knockback upon death
-   [MC-260501](https://bugs.mojang.com/browse/MC-260501) - Cannot delete previous snapshot world in launcher
-   [MC-260579](https://bugs.mojang.com/browse/MC-260579) - Crash when a guardian deals damage to itself after removing thorns from avoids_guardian_thorns
-   [MC-260605](https://bugs.mojang.com/browse/MC-260605) - Repeating command block summoning piglins/villagers causes memory usage to constantly increase
-   [MC-260627](https://bugs.mojang.com/browse/MC-260627) - Dolphins with passengers either accelerate to ludicrous speed or are immobilized completely

# TECHNICAL CHANGES IN 1.19.4 PRE-RELEASE 2

## MOB BEHAVIOR

-   Only mobs in the dismounts_underwater entity tag will now force the rider to dismount when underwater

# CHANGES FOR EXPERIMENTAL FEATURES IN 1.19.4 PRE-RELEASE 2

## CHERRY BIOME AND WOOD SET

-   Updated the texture for Pink Petals
-   Updated textures for the Cherry Door, Cherry Sapling, and Cherry Boat with Chest

## DECORATED POT

-   Updated the neck of the Decorated Pot model
    -   With the former pot we decided to make the pot's neck clip with blocks, so it would be extra flexible to build with
    -   However, this had some Z-fighting issues where 2 objects are in the same exact position and cause flickering
    -   This is prevented with the new and more complex block model

# FIXED BUGS IN 1.19.4 PRE-RELEASE 2

-   [MC-137552](https://bugs.mojang.com/browse/MC-137552) - Loaded crossbows look unloaded in item frames and when dropped on the ground
-   [MC-229293](https://bugs.mojang.com/browse/MC-229293) - Casting issue: Broken blocks drop items in the wrong position at high distances
-   [MC-259208](https://bugs.mojang.com/browse/MC-259208) - Zombie riding chicken or skeleton riding spider not considered controllers by /execute on controller command
-   [MC-259609](https://bugs.mojang.com/browse/MC-259609) - Tooltips from selected buttons and sliders don't disappear when expected
-   [MC-259831](https://bugs.mojang.com/browse/MC-259831) - UI Buttons break certain resource packs as of 23w06a
-   [MC-259839](https://bugs.mojang.com/browse/MC-259839) - Duplicated "minecraft:freeze" in damage_type tag "bypasses_armor"
-   [MC-259885](https://bugs.mojang.com/browse/MC-259885) - Upon entering the credits screen while in F1 mode, the Minecraft: Java Edition logo does not display correctly
-   [MC-259961](https://bugs.mojang.com/browse/MC-259961) - item_display does not take some nbt tags into account
-   [MC-259979](https://bugs.mojang.com/browse/MC-259979) - Striders and blazes do not take five times the damage when using /damage with freeze type
-   [MC-260208](https://bugs.mojang.com/browse/MC-260208) - Display entities in spawn chunks with interpolation_duration greater than 0 visually reset to default transformation on rejoin
-   [MC-260268](https://bugs.mojang.com/browse/MC-260268) - Can't scroll using arrows in "Telemetry Data Collection" screen
-   [MC-260324](https://bugs.mojang.com/browse/MC-260324) - Cherry Boat with Chest item texture has a misplaced pixel
-   [MC-260335](https://bugs.mojang.com/browse/MC-260335) - Clicking with an item that is out of stock in the villager trading menu with sufficient payment will allow purchase of the item regardless
-   [MC-260364](https://bugs.mojang.com/browse/MC-260364) - Cherry Door inconsistent item texture
-   [MC-260427](https://bugs.mojang.com/browse/MC-260427) - Button text is visible outside menus
-   [MC-260434](https://bugs.mojang.com/browse/MC-260434) - There is no "Will be saved in..." text in the new world creation menu
-   [MC-260436](https://bugs.mojang.com/browse/MC-260436) - Item Tags in 1.19.4-pre1 have extra entries
-   [MC-260438](https://bugs.mojang.com/browse/MC-260438) - Items are not rendered in the bundle UI
-   [MC-260443](https://bugs.mojang.com/browse/MC-260443) - Loading a snapshot 23w07a experimental world says it can be opened in "safe mode" and clicking "safe mode" does nothing
-   [MC-260445](https://bugs.mojang.com/browse/MC-260445) - Player can climb up one block while riding a boat or raft
-   [MC-260461](https://bugs.mojang.com/browse/MC-260461) - Water mobs cannot be ridden in water

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/cedc29f7e4927bfe58c96e67495a73c7333c75cd/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

-   For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
