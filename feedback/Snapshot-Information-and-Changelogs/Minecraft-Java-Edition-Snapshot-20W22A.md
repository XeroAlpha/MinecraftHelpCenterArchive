---
title: Minecraft Java Edition - Snapshot 20W22A
date: 2020-06-10T18:01:42Z
updated: 2025-03-12T11:15:02Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360044790271-Minecraft-Java-Edition-Snapshot-20W22A
---

29 May 2020

# EXPERIMENTAL RENDERING CHANGES

We've included some experimental changes to graphics rendering in this snapshot, which **might** reveal some issues on a small number of older graphics cards.

If do you find any new graphical bugs then please report them to the [bug tracker](https://bugs.mojang.com/projects/MC/summary) with the make and model of your graphics card as well as which operating system you are using

# NEW FEATURES IN 20W22A

- Piglins now sometimes dance in celebration of a completed hunt

# CHANGES IN 20W22A

- Villager workstation logic changes
- Bells can be hung from the underside of more blocks
- When a villager that was traded with is struck by lightning, the witch it converts to will no longer despawn
- Players can no longer mount another entity when the crouch key is held down

## VILLAGER WORKSTATION LOGIC

- Villagers no longer try to work at the same workstation
- The most experienced nearby villager for the profession corresponding to the workstation you add will get the workstation
- Villagers now have to walk to and reach the workstation before they can acquire the profession/work there
- Villagers can no longer claim workstations/professions during raids or night time.
- Villagers will check and make sure their workstation is valid at all times of day as long as they are within 16 blocks of their workstation.

# TECHNICAL CHANGES IN 20W22A

- Added shader support for accessing depth buffer
- Renderer now uses per-pixel blending layers for some transparent elements
- Slightly changed datapack loading to prevent custom datapacks from crashing
- Cached repeated block type lookups and collisions during pathfinding for increased performance
- Minor optimizations in collision detection
- Top-level element in predicate file can now be array (all contents will be ANDed)

## DATAPACK LOADING

- If datapack reload fails, changes will not be applied and the game will continue using previous data
- If existing datapacks prevent world from loading, the game will give option to load world in safe mode, which loads only vanilla datapack
- Changes to datapack list are stored only after successful reload 
- Added --safeMode option to server to load only with vanilla datapack
- Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded

# FIXED BUGS IN 20W22A

- [MC-667](https://bugs.mojang.com/browse/MC-667) - Lily pads can be placed intersecting entities
- [MC-4065](https://bugs.mojang.com/browse/MC-4065) - Messages/commands sent while in a bed won’t be remembered in sent history
- [MC-112131](https://bugs.mojang.com/browse/MC-112131) - Intersecting dungeons: spawner replaced by cobblestone
- [MC-118594](https://bugs.mojang.com/browse/MC-118594) - Removal of Log4J2Plugins.dat causing a slowdown of 3 secs on startup while it has to rescan all classes
- [MC-120805](https://bugs.mojang.com/browse/MC-120805) - Pig rotation is wrong when you see a player riding them with carrot on a stick
- [MC-124812](https://bugs.mojang.com/browse/MC-124812) - Endermen holding a block can despawn
- [MC-125006](https://bugs.mojang.com/browse/MC-125006) - Stronghold and dungeon generate over each other
- [MC-134755](https://bugs.mojang.com/browse/MC-134755) - All short mobs drown just below the surface of water
- [MC-143443](https://bugs.mojang.com/browse/MC-143443) - Redstone dust block states don’t update properly if the wire is broken by a piston
- [MC-148893](https://bugs.mojang.com/browse/MC-148893) - Fox spawners do not render the fox inside of the block
- [MC-150806](https://bugs.mojang.com/browse/MC-150806) - Multiple villagers are attached to the same profession block
- [MC-153787](https://bugs.mojang.com/browse/MC-153787) - Zombie Reinforcements can spawn on glass
- [MC-156161](https://bugs.mojang.com/browse/MC-156161) - Some chest loot is randomized across the same seed, unlike before 1.14
- [MC-156866](https://bugs.mojang.com/browse/MC-156866) - Villagers level from Apprentice to Journeyman with less experience than shown by XP bar
- [MC-157303](https://bugs.mojang.com/browse/MC-157303) - Villagers wake up and seek a new “home” (bed) while living in a 2 high house
- [MC-157436](https://bugs.mojang.com/browse/MC-157436) - Player position is constantly reset when clicking with a sword or a trident onto the ground in creative mode
- [MC-162340](https://bugs.mojang.com/browse/MC-162340) - World border is rendered behind transparent blocks
- [MC-162665](https://bugs.mojang.com/browse/MC-162665) - Food does not drop from a campfire when it is put out with a shovel/water bottle
- [MC-163910](https://bugs.mojang.com/browse/MC-163910) - Hand animation sometimes plays for a second time with high ping
- [MC-164233](https://bugs.mojang.com/browse/MC-164233) - “Skilled” villagers without job site do not get precedence over unemployed villagers
- [MC-165549](https://bugs.mojang.com/browse/MC-165549) - Arm swing animation is still played when drinking an item
- [MC-166135](https://bugs.mojang.com/browse/MC-166135) - Bees inside a nest/hive don’t grow up or get their breeding timer reset
- [MC-167039](https://bugs.mojang.com/browse/MC-167039) - Right-clicking on a spawner with the same mob spawn egg as in spawner plays hand animation
- [MC-169891](https://bugs.mojang.com/browse/MC-169891) - Zombie Reinforcements can spawn in regardless if light level is higher than 9 in nether (hard difficulty)
- [MC-171515](https://bugs.mojang.com/browse/MC-171515) - Semi-transparent items don’t render properly in front of semi-transparent blocks
- [MC-171553](https://bugs.mojang.com/browse/MC-171553) - Basalt can generate inside Nether fortresses
- [MC-172079](https://bugs.mojang.com/browse/MC-172079) - The /clear command output doesn’t count items in the inventory crafting grid
- [MC-172142](https://bugs.mojang.com/browse/MC-172142) - Items are invisible while being picked up
- [MC-172197](https://bugs.mojang.com/browse/MC-172197) - Nylium is not dropping netherrack when it is broken by pickaxe
- [MC-172272](https://bugs.mojang.com/browse/MC-172272) - /clear removes all items from crafting grid regardless of item type
- [MC-172479](https://bugs.mojang.com/browse/MC-172479) - Hoglins immediately attack invisible players
- [MC-172980](https://bugs.mojang.com/browse/MC-172980) - Light does not propagate across chunk borders properly
- [MC-173032](https://bugs.mojang.com/browse/MC-173032) - Fossils can overwrite the stronghold end portal
- [MC-173063](https://bugs.mojang.com/browse/MC-173063) - Redstone wire doesn’t update connections going up or down when being placed by commands
- [MC-173197](https://bugs.mojang.com/browse/MC-173197) - Zombified Piglin does not hold its arms upwards like a zombie
- [MC-173404](https://bugs.mojang.com/browse/MC-173404) - Desync when mounting an entity while sneaking
- [MC-173552](https://bugs.mojang.com/browse/MC-173552) - Nether Fossil support islands are sometimes cut off at chunk borders
- [MC-174307](https://bugs.mojang.com/browse/MC-174307) - Nether fossil stops basalt pillar
- [MC-174325](https://bugs.mojang.com/browse/MC-174325) - Mushrooms or Nether fungi can replace the stem of large nether fungi (trees)
- [MC-174692](https://bugs.mojang.com/browse/MC-174692) - Shroomlights, wart blocks and vines can overwrite the stem of large Nether fungi
- [MC-174932](https://bugs.mojang.com/browse/MC-174932) - Right-to-left text appears left-to-right after game start until language is changed
- [MC-175553](https://bugs.mojang.com/browse/MC-175553) - Piglins don’t drop their inventories when converted to zombified piglins
- [MC-176020](https://bugs.mojang.com/browse/MC-176020) - If a player is riding a strider, other players can not see the animation of the strider
- [MC-176051](https://bugs.mojang.com/browse/MC-176051) - Glowstone in the offhand sets spawn point and charges respawn anchor at the same time
- [MC-176147](https://bugs.mojang.com/browse/MC-176147) - Basalt randomly gets cut off
- [MC-176628](https://bugs.mojang.com/browse/MC-176628) - Frost Walker protects player from fire
- [MC-177150](https://bugs.mojang.com/browse/MC-177150) - Ticking entity java.lang.IllegalStateException: Tag minecraft:fire used before it was bound
- [MC-177265](https://bugs.mojang.com/browse/MC-177265) - Piglin and Zombified Piglin right arm/leg/loincloth textures are identical to the left ones
- [MC-177626](https://bugs.mojang.com/browse/MC-177626) - Spruce generation is broken
- [MC-177870](https://bugs.mojang.com/browse/MC-177870) - Soul campfire doesn’t deal twice the amount of damage as normal campfire
- [MC-177888](https://bugs.mojang.com/browse/MC-177888) - Blackstone can’t be used to repair stone tools and weapons using an anvil
- [MC-177962](https://bugs.mojang.com/browse/MC-177962) - Giant fungi can replace waterlogged blocks when growing
- [MC-177970](https://bugs.mojang.com/browse/MC-177970) - Player can occasionally be forced into crawling in one block tall spaces
- [MC-178003](https://bugs.mojang.com/browse/MC-178003) - Fossils can generate inside of desert temples
- [MC-178441](https://bugs.mojang.com/browse/MC-178441) - Endermen don’t avoid the wither’s skull projectiles
- [MC-179020](https://bugs.mojang.com/browse/MC-179020) - Jigsaw blocks do not disappear post-gen when structure is spawned using the ‘Generate’ action from an initial jigsaw
- [MC-179890](https://bugs.mojang.com/browse/MC-179890) - Fire stops ticking forever if gamerule doFireTick is set to false once
- [MC-179909](https://bugs.mojang.com/browse/MC-179909) - 2x2 trees sometimes fail to grow, but if they grow, they always grow on the surface
- [MC-180098](https://bugs.mojang.com/browse/MC-180098) - Farmer villagers’ farming behavior is broken
- [MC-180771](https://bugs.mojang.com/browse/MC-180771) - Observer not updating when tree grows leaves in front of it
- [MC-180877](https://bugs.mojang.com/browse/MC-180877) - Fire does not spread from netherack to other blocks
- [MC-181108](https://bugs.mojang.com/browse/MC-181108) - Right-to-left text is displayed left-to-right at all times
- [MC-181464](https://bugs.mojang.com/browse/MC-181464) - When a piglin picks up a shield the gear equip sound is infinitely spammed
- [MC-181529](https://bugs.mojang.com/browse/MC-181529) - Ctrl + Pick Block no longer copies skull / head NBT data properly
- [MC-181555](https://bugs.mojang.com/browse/MC-181555) - When replacing a snow layer with a grass block, podzol or mycelium, the block has the “snowy=true” blockstate
- [MC-182666](https://bugs.mojang.com/browse/MC-182666) - Parity issue: Piglins do not have a dancing animation when celebrating their victory
- [MC-182888](https://bugs.mojang.com/browse/MC-182888) - Compasses and clocks work like normal in villager trading GUI
- [MC-182919](https://bugs.mojang.com/browse/MC-182919) - Horse armour stops rendering if you equip the horse with a saddle by right-clicking
- [MC-182967](https://bugs.mojang.com/browse/MC-182967) - Throwing ender pearl whilst mounted doesn’t teleport you
- [MC-183275](https://bugs.mojang.com/browse/MC-183275) - Basalt pillars end above the lava in Java Edition but inside of the lava in Bedrock Edition
- [MC-183374](https://bugs.mojang.com/browse/MC-183374) - Text on signs stops rendering while still in view
- [MC-183496](https://bugs.mojang.com/browse/MC-183496) - Enchantment glint doesn’t render in boat interior
- [MC-183718](https://bugs.mojang.com/browse/MC-183718) - Stronghold end portal can be overwritten by ocean ruins
- [MC-183808](https://bugs.mojang.com/browse/MC-183808) - “Bee Our Guest” advancement does not trigger when harvesting honey from bee nests
- [MC-183860](https://bugs.mojang.com/browse/MC-183860) - Zombie villager converted from villager gets PersistenceRequired depending on whether attacking zombie had it
- [MC-184482](https://bugs.mojang.com/browse/MC-184482) - End Gateways don’t generate after defeating the ender dragon
- [MC-184609](https://bugs.mojang.com/browse/MC-184609) - Text renders in the wrong order
- [MC-184619](https://bugs.mojang.com/browse/MC-184619) - Piglins riding on other entities float
- [MC-184629](https://bugs.mojang.com/browse/MC-184629) - Piglins riding on hoglins or other piglins automatically dismount them
- [MC-184730](https://bugs.mojang.com/browse/MC-184730) - \[Crash\] “java.lang.NullPointerException: mouseClicked event handler” - Some Superflat presets crash immediately when trying to generate them
- [MC-184740](https://bugs.mojang.com/browse/MC-184740) - Structures generated in previous versions are not recognised as valid structures, causing mobs not to spawn
- [MC-184778](https://bugs.mojang.com/browse/MC-184778) - Redstone dust can be toggled between cross and dot in adventure mode
- [MC-184936](https://bugs.mojang.com/browse/MC-184936) - Old Minecraft logo in the end poem/credits
- [MC-185156](https://bugs.mojang.com/browse/MC-185156) - Worldgen settings are not validated and can cause crashes

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c4a62eb36917aaa06dc8e20a2a35264d5fda123b/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
