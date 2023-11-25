---
title: "Minecraft: Java Edition - 23w16a"
date: 2023-04-20T15:59:23Z
updated: 2023-04-20T15:59:27Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15044886907149-Minecraft-Java-Edition-23w16a
---

In this weeks Snapshot we\'re bringing you tweaks to the Trail Ruins, new command functionality, a new advancement trigger, and more!

Happy mining!

Edit: We have published a fix for a crash issue in this Snapshot. If you are experiencing crashes, please try closing all instances of the game and restarting the Launcher.

# CHANGES

-   All Pottery Shards has been renamed to Pottery Sherds
-   If a vibration is scheduled to be received by a Sculk Sensor or Sculk Shrieker, they will stay queued until all adjacent chunks are loaded and ticking
    -   Prevents vibration resonance setups from breaking when unloading their chunks from a distance
-   The game\'s application icon has been updated
    -   This will be a Grass Block in release versions, and a Dirt Block in snapshot versions
-   Added native support for ARM64 machine architecture on Windows
    -   To try this out, you need to manually specify a native Java Executable in the launcher

<div>

 

</div>

## SNIFFER

-   Sniffers can now be tempted by Torchflower seeds

## TRAIL RUINS

-   Reworked structures based on community feedback
-   Added more structure variants
-   Sand no longer generates within the structures
-   Tweaked the amount of gravel and dirt
-   Tweaked the amount of Suspicious Gravel
-   Split the loot tables for the Suspicious Gravel within the structure. There is now a dedicated loot table for Rare loot items (e.g. Pottery Sherds, Smithing Templates), and a dedicated loot table for more common loot drops (e.g. Stained Glass Pane, Tools, Candles, etc.)
-   Due to these changes you might see errors like Failed to get element ResourceKey\[minecraft:worldgen/processor_list / minecraft:trail_ruins_suspicious_sand\] in an old snapshot world. These are harmless, but existing Trail Ruin structures that was not previously fully loaded might be missing parts of the structure.

# TECHNICAL CHANGES

-   The data pack version is now 14, accounting for item display orientation changes
-   Added a return command
-   Added recipe_crafted advancement trigger

## COMMANDS

### RETURN

The return command can be used to control execution flow inside functions and change their return value. Effects:

-   Remaining separate top-level commands in the currently executing function (if any) are skipped
-   The result value of the function command that triggered the function is changed from the number of commands executed to value
-   The result value of the return command is also value

Syntax:

return \<value\>

Parameters:

-   value: An integer return value

## ADVANCEMENTS

### NEW TRIGGERS

#### RECIPE_CRAFTED

-   Triggered when crafting a recipe
-   Conditions:
    -   recipe_id - the resource location of the recipe crafted
    -   ingredients - an array of predicates for the item stacks used in the recipe
        -   A single item stack can only be used to fulfill one predicate
        -   Each predicate needs to be fulfilled to trigger the advancement. This allows for seperation between recipes that have same identifier but use different ingredients.
        -   This field is optional. When not provided, or left empty, only the recipe_id will dictate the success of the trigger

## TAGS

-   Added villager_plantable_seeds to represent which kind of seeds Villagers can farm
-   Added maintains_farmland to represent which blocks will not cause farmland to be converted into dirt when placed on top of it

## DISPLAY ENTITY

### RENDERING CHANGES

-   item_display items have been rotated 180 degrees around Y axis to better match transformation applied when rendering items on armor stand head and in item frames
    -   For reference, order of transformations applied to model (starting from innermost) is item_transform, rotate Y 180, transformation field, entity orientation (billboard option + Rotation field + Pos field)

# FIXED BUGS IN 23W16A

-   [MC-162253](https://bugs.mojang.com/browse/MC-162253) - Lag spike when crossing certain chunk borders
-   [MC-169498](https://bugs.mojang.com/browse/MC-169498) - Empty top subchunks don\'t update skylight in some cases
-   [MC-170010](https://bugs.mojang.com/browse/MC-170010) - Sky-lightmaps not properly initialized
-   [MC-170012](https://bugs.mojang.com/browse/MC-170012) - Lightmaps are missing for initial skylight
-   [MC-199752](https://bugs.mojang.com/browse/MC-199752) - Polished Blackstone Button takes longer to break than other buttons
-   [MC-207251](https://bugs.mojang.com/browse/MC-207251) - Sculk sensors and shriekers do not work correctly when cloned, generated on superflat worlds or placed with custom structures
-   [MC-249450](https://bugs.mojang.com/browse/MC-249450) - Sculk shriekers placed with NBT don\'t receive signals from nearby sculk sensors
-   [MC-252786](https://bugs.mojang.com/browse/MC-252786) - SculkSensorBlockEntity and SculkShriekerBlockEntity leak VibrationListeners on update
-   [MC-254410](https://bugs.mojang.com/browse/MC-254410) - /setidletimeout set to a timer longer than 35791 disconnects idle player immediately
-   [MC-257178](https://bugs.mojang.com/browse/MC-257178) - Chiseled Bookshelf redstone behavior is inconsistent
-   [MC-260038](https://bugs.mojang.com/browse/MC-260038) - Sniffer does not have smooth animation transitions for some of its animations, like sniffing
-   [MC-260219](https://bugs.mojang.com/browse/MC-260219) - Sniffer eating sounds aren\'t played when feeding them the last item of torchflower seeds within a stack
-   [MC-260221](https://bugs.mojang.com/browse/MC-260221) - Sniffers can still dig when floated by levitation status effect
-   [MC-260237](https://bugs.mojang.com/browse/MC-260237) - Sniffers can sniff while panicking
-   [MC-260466](https://bugs.mojang.com/browse/MC-260466) - Torchflower doesn\'t maintain farmland used to grow it
-   [MC-260849](https://bugs.mojang.com/browse/MC-260849) - Sniffer can\'t get into minecart
-   [MC-261214](https://bugs.mojang.com/browse/MC-261214) - Amethyst in calibrated sculk sensor is shaded and not stretched
-   [MC-261286](https://bugs.mojang.com/browse/MC-261286) - Walking near liquids causes stone footstep sounds to play
-   [MC-261515](https://bugs.mojang.com/browse/MC-261515) - You can\'t brush blocks if a dropped item is between you and the block
-   [MC-261605](https://bugs.mojang.com/browse/MC-261605) - Splash text sometimes covers several letters of \"Java Edition\"
-   [MC-261608](https://bugs.mojang.com/browse/MC-261608) - Sculk sensors and calibrated sculk sensors lack a cooldown state
-   [MC-261620](https://bugs.mojang.com/browse/MC-261620) - Crash when modifying age property of a pitcher crop
-   [MC-261625](https://bugs.mojang.com/browse/MC-261625) - \"Programmer Art\" and \"High contrast\" built-in Resource Packs are incompatible
-   [MC-261643](https://bugs.mojang.com/browse/MC-261643) - Villagers can\'t plant torchflower seeds or pitcher plant pods, despite picking them up
-   [MC-261646](https://bugs.mojang.com/browse/MC-261646) - Subtitle for Sniffers laying eggs is \"Chicken plops\"
-   [MC-261740](https://bugs.mojang.com/browse/MC-261740) - Feeding a Sniffer while it is digging causes it to lay motionless for a while then dig again with no animation
-   [MC-261746](https://bugs.mojang.com/browse/MC-261746) - Incorrect sound event ID spelling for \"block.sniffer.egg_crack\" and \"block.sniffer.egg_hatch\"
-   [MC-261804](https://bugs.mojang.com/browse/MC-261804) - Expired Key preventing players from logging in on servers
-   [MC-261857](https://bugs.mojang.com/browse/MC-261857) - Using the \"/setblock\", \"/fill\", or \"/clone\" commands to create little amounts of blocks in completely isolated areas causes large client-side stutters

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://www.minecraft.net/editor.html/en-us/article/v1/objects/4a8487f877eb4f3506978fb85faf41a08b570398/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

-   For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you\'re feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
