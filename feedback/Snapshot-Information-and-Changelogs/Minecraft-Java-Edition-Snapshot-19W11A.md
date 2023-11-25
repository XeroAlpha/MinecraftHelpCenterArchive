---
title: "Minecraft: Java Edition - Snapshot 19W11A"
date: 2019-03-13T15:36:31Z
updated: 2019-03-13T15:37:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360024978852-Minecraft-Java-Edition-Snapshot-19W11A
---

#### **13 March 2019**

# CHANGES IN 19W11A

-   Lots of accessibility improvements!
-   Added a new \"Globe\" banner pattern and item (Currently only accessible from commands or the creative inventory)
-   Trading changes
-   Added recipe for smithing and fletching table
-    TNT and TNT minecart explosions now have 100% drop rate

# ACCESSIBILITY

-   There\'s a new Accessibility menu which provides a useful place for all of our accessibility features to be toggled
-   When the narrator is turned on, buttons will be narrated on focus
-   Most screens allow tab and shift+tab navigation through buttons, edit boxes and other UI elements
-   Most lists allow up/down arrow keys to navigate through them
-   We\'ve added a new option for turning up the background of all transparent text elements, which should help make them more readable for some people

# SMITHING TABLE AND FLETCHING TABLE

-   Smithing table is crafted with 4 planks + 2 iron ingots
-   Fletching table is crafted with 4 planks + 2 flint
-   Villagers use them as a work site
-   We\'ve decided not to add the functionality for these blocks for this update as we want to make sure that they\'re useful for the overall gameplay. We have a great idea for them for the next major themed update\...

# TRADING CHANGES

-   Lots of new trades have been added
-   Villagers now level up in a new way
-   The trading UI is updated (WIP)
-   The trading prices now depend on your reputation and on demand
-   The villagers will restock up to two times per day (if they can work at their work station!)
-   Added visual trading; villagers will display the item they want to trade for your in-hand item

# VILLAGER CHANGES

-   Villagers now have a daily schedule. They will for example go to work and meet up at the village bell
-   Each villager will try to find their own bed and work station
-   Each profession has a specific block that works as a work station for them (e.g. lectern for the librarian and cauldron for the leatherworker)
-   Village detection is now based on beds, job sites and meeting points instead of doors
-   Iron golems will spawn when enough villagers meet

# FIXED BUGS IN 19W11A

-   [MC-112](https://bugs.mojang.com/browse/MC-112) - Blocks/entities above beds push players out of bed
-   [MC-926](https://bugs.mojang.com/browse/MC-926) - When sleeping on a bed, particle effects are slanted or don\'t appear at all
-   [MC-2376](https://bugs.mojang.com/browse/MC-2376) - Wolves shaking fur dry while dying
-   [MC-13497](https://bugs.mojang.com/browse/MC-13497) - Wither skeletons and zombie pigmen won\'t go through lava to get to enemies, even though they can\'t burn
-   [MC-30845](https://bugs.mojang.com/browse/MC-30845) - Camera is glitching through tall grass, sea grass, and kelp in F5 (third-person) mode
-   [MC-44471](https://bugs.mojang.com/browse/MC-44471) - Difficulty lock appears to be unlocked if switching dimensions
-   [MC-60772](https://bugs.mojang.com/browse/MC-60772) - Draw order of translucent blocks based on head position (not POV)
-   [MC-63070](https://bugs.mojang.com/browse/MC-63070) - Chunks do not render behind the player in F5. Perhaps culling should calculate from camera POV instead of presuming head position.
-   [MC-71256](https://bugs.mojang.com/browse/MC-71256) - Endermen immediately start moving after being looked at instead of freezing and staring back at you
-   [MC-76416](https://bugs.mojang.com/browse/MC-76416) - Player can interact with dying mobs
-   [MC-80658](https://bugs.mojang.com/browse/MC-80658) - Note blocks: Gray color for certain music notes
-   [MC-96932](https://bugs.mojang.com/browse/MC-96932) - Minecart and boat shadows are too small
-   [MC-99255](https://bugs.mojang.com/browse/MC-99255) - Mobs killed by dogs give wrong loot tables
-   [MC-102514](https://bugs.mojang.com/browse/MC-102514) - Moon has orange light
-   [MC-105099](https://bugs.mojang.com/browse/MC-105099) - Slimes & Magma Cubes can still attack players when they are in their death animation
-   [MC-109954](https://bugs.mojang.com/browse/MC-109954) - Saddled pigs / horses still move when in their death animation
-   [MC-114559](https://bugs.mojang.com/browse/MC-114559) - Lightning converts dying mobs
-   [MC-114560](https://bugs.mojang.com/browse/MC-114560) - Dying zombie villager converts to alive villager
-   [MC-127016](https://bugs.mojang.com/browse/MC-127016) - Waterlogged wooden slabs/stairs/fences/scaffoldings can still catch fire
-   [MC-131845](https://bugs.mojang.com/browse/MC-131845) - Scroll bar resets when selecting a language
-   [MC-132351](https://bugs.mojang.com/browse/MC-132351) - Plants don\'t grow when there is block above them
-   [MC-133188](https://bugs.mojang.com/browse/MC-133188) - Cannot climb waterlogged ladders or scaffolds
-   [MC-135157](https://bugs.mojang.com/browse/MC-135157) - Crops cannot be planted by aiming at the side of a block
-   [MC-135902](https://bugs.mojang.com/browse/MC-135902) - Dying zombie converts to alive drowned
-   [MC-137308](https://bugs.mojang.com/browse/MC-137308) - selectWorld.edit.backupFailed has no translation
-   [MC-137471](https://bugs.mojang.com/browse/MC-137471) - New wall types are in Building Blocks creative tab instead of Decoration Blocks like the cobblestone walls
-   [MC-137476](https://bugs.mojang.com/browse/MC-137476) - Acacia Sign and Jungle Sign have inconsistent positioning in creative tab
-   [MC-137672](https://bugs.mojang.com/browse/MC-137672) - Crossbow Item-Lore does not show information about loaded projectile
-   [MC-137725](https://bugs.mojang.com/browse/MC-137725) - Advancements not updated in 1.14 snapshots
-   [MC-137810](https://bugs.mojang.com/browse/MC-137810) - Armor stands are not affected by the piercing enchantment
-   [MC-137874](https://bugs.mojang.com/browse/MC-137874) - Multishot on crossbow: spread of arrows depends on pitch
-   [MC-137917](https://bugs.mojang.com/browse/MC-137917) - Eating or blocking with crossbow in offhand shows both items
-   [MC-138071](https://bugs.mojang.com/browse/MC-138071) - Main thread uses 100% of one CPU core when no users are logged in, busy-waiting over java.lang.Thread::yield, makes it hard to profile properly
-   [MC-138078](https://bugs.mojang.com/browse/MC-138078) - Parrots don\'t imitate pillagers, ravagers and pandas
-   [MC-138285](https://bugs.mojang.com/browse/MC-138285) - Unable to break the chorus fruit flower when shooting with an arrow or trident from directly above
-   [MC-138699](https://bugs.mojang.com/browse/MC-138699) - Fatal game crash - Polar Bear vehicle NPE
-   [MC-138766](https://bugs.mojang.com/browse/MC-138766) - Panda, illager beast, turtle, elder guardian and ghast shadow is small compared to other mobs
-   [MC-139559](https://bugs.mojang.com/browse/MC-139559) - Scaffolding blocks do not notify the player when trying to exceed build limit
-   [MC-139717](https://bugs.mojang.com/browse/MC-139717) - Game hangs while trying to load chunks
-   [MC-140625](https://bugs.mojang.com/browse/MC-140625) - Sweet berry bush cannot replace snow layer, grass, tall grass, fern and large fern unlike other flowers or plants
-   [MC-140651 -](https://bugs.mojang.com/browse/MC-140651) Sweet berry bush cannot be planted when aiming at the side or bottom of a block
-   [MC-141453](https://bugs.mojang.com/browse/MC-141453) - Patrol leader killed by tamed wolf doesn\'t give you the bad omen effect
-   [MC-142082](https://bugs.mojang.com/browse/MC-142082) - Missing generic inventory types
-   [MC-142583](https://bugs.mojang.com/browse/MC-142583) - Side of wall bell texture is missing when next to certain blocks
-   [MC-142635](https://bugs.mojang.com/browse/MC-142635) - Clicking bell in spawn protection without op animates bell but plays no sound
-   [MC-142772](https://bugs.mojang.com/browse/MC-142772) - Arrow hitbox change
-   [MC-142890](https://bugs.mojang.com/browse/MC-142890) - Wolves don\'t attack mobs you damage with a projectile
-   [MC-143420](https://bugs.mojang.com/browse/MC-143420) - Wandering Trader and Trader Llama will spawn when game rule doMobSpawning is false
-   [MC-144017](https://bugs.mojang.com/browse/MC-144017) - You can get the \"Who\'s the pillager now?\" advancement by killing a pillager with a regular bow
-   [MC-144096](https://bugs.mojang.com/browse/MC-144096) - Seventh scaffolding of a scaffolding bridge can not be placed
-   [MC-144098](https://bugs.mojang.com/browse/MC-144098) - Skin not showing up due to IllegalStateException: Image is not allocated
-   [MC-144175](https://bugs.mojang.com/browse/MC-144175) - Scaffolding placement breaks blocks in its way
-   [MC-144527](https://bugs.mojang.com/browse/MC-144527) - Difficulty names aren\'t translated when locking the world difficulty
-   [MC-144574](https://bugs.mojang.com/browse/MC-144574) - Fire charge can light campfires underwater
-   MC-144603 - Block entities in player\'s chunk become stuck when reloading the world
-   [MC-144605](https://bugs.mojang.com/browse/MC-144605) - Minecarts cannot traverse corners
-   [MC-144650](https://bugs.mojang.com/browse/MC-144650) - Animals frequently quit following player
-   [MC-144738](https://bugs.mojang.com/browse/MC-144738) - Tridents go through blocks and appear black
-   [MC-144847](https://bugs.mojang.com/browse/MC-144847) - F3 pie chart spams log with errors
-   [MC-144928](https://bugs.mojang.com/browse/MC-144928) - Endermen don\'t try to avoid fireworks
-   [MC-145110](https://bugs.mojang.com/browse/MC-145110) - Multishot arrows don\'t spread when shot from a pillager
-   [MC-145111](https://bugs.mojang.com/browse/MC-145111) - When a pillager stops fighting while reloading, it will reload forever until it sees another target
-   [MC-145118](https://bugs.mojang.com/browse/MC-145118) - Regular bow can use rockets to fire
-   [MC-145128](https://bugs.mojang.com/browse/MC-145128) - New note block instrument audible range too low
-   [MC-145411](https://bugs.mojang.com/browse/MC-145411) - Skeleton bows don\'t use enchantments
-   [MC-145498](https://bugs.mojang.com/browse/MC-145498) - Dogs attack tamed cats
-   [MC-144784](https://bugs.mojang.com/browse/MC-144784) - Entities are invisible when joining/teleporting to areas outside spawn chunks

 

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://minecraft.net/download) and enable snapshots in the \"Launch Options\" tab.\
\
**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds**.\
\
Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/388221ffa9e8e1576e07f9839eadd2ac7bd51cbb/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft)
