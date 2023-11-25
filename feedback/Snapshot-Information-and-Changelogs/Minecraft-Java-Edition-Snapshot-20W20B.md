---
title: Minecraft Java Edition - Snapshot 20W20B
date: 2020-05-13T23:59:05Z
updated: 2020-05-14T10:48:20Z
categories: Snapshot Information and Changelogs
tags:
  - java
  - 20W20A
link: https://feedback.minecraft.net/hc/en-us/articles/360043132532-Minecraft-Java-Edition-Snapshot-20W20B
---

14 May 2020

# FIXED BUG IN 20W20B

-   [MC-183769](https://bugs.mojang.com/browse/MC-183769) - NPE in server initialization

13 May 2020

This week we are releasing a bit of a smaller snapshot. However, if you\'re into switching game modes and completing advancements, this is right up your alley!

# NEW FEATURES IN IN 20W20A

-   Added new Game Mode Switcher debug menu
-   Added new Nether Advancements

## GAME MODE SWITCHER

New F3 debug feature which allows you to switch game modes with traditional \"tabbing\" functionality.

-   Hold F3 and tap F4 to open the menu
-   Tapping F4 will cycle the game mode, or you can use the mouse
-   Release F3 to apply
-   Your last game mode is remembered and will be the first selected option, so you can quickly toggle between two game modes with a single press of F3 + F4!

### F3 + N (TOGGLE SPECTATOR)

A small change has been made to this debug combination.

-   By default, using this key would return to Creative after toggling from Spectator. It now will toggle back to the previous game mode you had
-   As an example, if you were in Survival, then toggled to Spectator and back, you would be set back to Survival

## NEW ADVANCEMENTS

-   Hidden in the Depths unlocks when obtaining Ancient Debris
-   Cover Me in Debris unlocks when obtaining full Netherite armor
-   Country Lode, Take Me Home unlocks when using a Compass on a Lodestone
-   Who Is Cutting Onions? unlocks when obtaining Crying Obsidian
-   Not Quite \"Nine\" Lives unlocks when setting a Respawn Anchor to the maximum
-   This Boat Has Legs unlocks when riding a Strider with a Fungus on a Stick
-   Hot Tourist Destinations unlocks when visiting all Biomes in the Nether
-   Those Were the Days unlocks when entering a Bastion Remnant
-   War Pigs unlocks when looting a chest in a Bastion Remnant
-   Oh Shiny unlocks when distracting an angry Piglin with gold

# CHANGES IN 20W20A

-   The Bullseye advancement now unlocks when hitting the bullseye of a target block from at least 30 meters away
-   The Serious Dedication advancement is now awarded for obtaining a Netherite Hoe
-   Obtaining Blackstone now also counts for the Stone Age advancement
-   Breeding Striders now counts for \`The Parrots and the Bats\` and is now required for Two by Two

# TECHNICAL CHANGES IN 20W20A

-   Shulkers with NoAI can now be summoned with rotation.
-   Added thrown_item_picked_up_by_entity advancement trigger
-   Added player_generates_container_loot advancement trigger
-   Added item_used_on_block advancement trigger
-   Removed safely_harvest_honey advancement trigger

## ADVANCEMENTS

### THROWN_ITEM_PICKED_UP_BY_ENTITY TRIGGER TYPE

Properties:

-   item matches the thrown item which was picked up
-   entity matches the entity which picked up the item

### PLAYER_GENERATES_CONTAINER_LOOT TRIGGER TYPE

Properties:

loot_table matches the resource location of the generated loot table

### ITEM_USED_ON_BLOCK TRIGGER TYPE

Properties:

-   location matches the location at the center of the block the item was used on
-   item matches the item used on the block

## MISCELLANEOUS TRIGGER CHANGES

-   location got a new propertysmokey which checks if the location is closely above a campfire
-   entity_properties got new properties vehicle and targetedEntity which match the vehicle or the entity targeted by a mob

# FIXED BUGS IN 20W20A

-   [MC-118234](https://bugs.mojang.com/browse/MC-118234) - Advancement 'Not Today, Thank You' can be triggered by non-arrow projectiles
-   [MC-173207](https://bugs.mojang.com/browse/MC-173207) - Bullseye advancement can be made when using a non-arrow projectile, even though the description explicitly mentions arrows
-   [MC-173756](https://bugs.mojang.com/browse/MC-173756) - Ice Bucket Challenge advancement can be obtained by collecting obsidian from bartering
-   [MC-175992](https://bugs.mojang.com/browse/MC-175992) - Striders are not part of the "Two by Two" advancement challenge
-   [MC-179481](https://bugs.mojang.com/browse/MC-179481) - Structure block offset can't be bigger than 32
-   [MC-182967](https://bugs.mojang.com/browse/MC-182967) - Throwing ender pearl whilst mounted doesn't teleport you

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/f06a943eb107494688b4447b97514af6d7311623/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
