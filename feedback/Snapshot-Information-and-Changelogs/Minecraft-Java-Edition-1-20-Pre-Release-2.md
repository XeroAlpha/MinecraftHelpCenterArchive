---
title: "Minecraft: Java Edition - 1.20 Pre-Release 2 "
date: 2023-05-16T14:30:43Z
updated: 2023-05-16T14:30:46Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15822426341133-Minecraft-Java-Edition-1-20-Pre-Release-2-
---

We are now releasing the second pre-release for Minecraft 1.20. This pre-release contains bug fixes.

Happy Mining!

# TECHNICAL CHANGES

- Game will now display message box on startup if user enabled text-to-speech functionality, but it is not available
- "item": "minecraft:air" can now be used in datapack recipes to denote an ingredient that will match an empty slot.
  - The following recipe types, however, do not allow for an empty ingredient:
    - minecraft:crafting_shaped
    - minecraft:crafting_shapeless
    - minecraft:smelting
    - minecraft:blasting
    - minecraft:smoking
    - minecraft:campfire_cooking
    - minecraft:stonecutting

# FIXED BUGS IN 1.20 PRE-RELEASE 2

- [MC-1310](https://bugs.mojang.com/browse/MC-1310) - Dispensed boats and rafts get stuck inside of dispensers used to place them
- [MC-124327](https://bugs.mojang.com/browse/MC-124327) - Changing the name of an item and then emptying the text field in an anvil doesn't make the rename unavailable, keeps last non-empty name on output item
- [MC-132076](https://bugs.mojang.com/browse/MC-132076) - Lowercase Letters in controls menu + "Not Bound" is missing
- [MC-159633](https://bugs.mojang.com/browse/MC-159633) - Command feedback messages are unnecessarily created during function execution
- [MC-165562](https://bugs.mojang.com/browse/MC-165562) - Command suggestion report "incorrect argument" when cursor is at the start of a node without suggestions
- [MC-175504](https://bugs.mojang.com/browse/MC-175504) - Single quotation marks are not supported in NBT paths
- [MC-220096](https://bugs.mojang.com/browse/MC-220096) - Graphics warning button(s) improperly capitalized
- [MC-224976](https://bugs.mojang.com/browse/MC-224976) - NativeImage.setPixelRGBA throws exception with message getPixelRGBA
- [MC-226344](https://bugs.mojang.com/browse/MC-226344) - Changing the "Owner" tag of a projectile doesn't affect the outcome of the projectile unless the world is reloaded
- [MC-237960](https://bugs.mojang.com/browse/MC-237960) - New potion effect GUI doesn't work when using Programmer Art
- [MC-250197](https://bugs.mojang.com/browse/MC-250197) - Glass bottles are inconsistently referred to throughout some advancement description strings
- [MC-252216](https://bugs.mojang.com/browse/MC-252216) - 65540: Invalid scancode -1 logged in key bind menu when an option is unbound
- [MC-252408](https://bugs.mojang.com/browse/MC-252408) - Chat restriction strings consist of inconsistent concluding punctuation
- [MC-256833](https://bugs.mojang.com/browse/MC-256833) - Ridable entities that can be steered build up fall damage when on climbable blocks
- [MC-257052](https://bugs.mojang.com/browse/MC-257052) - You cannot double-click on languages within the "Language" menu to select them
- [MC-257370](https://bugs.mojang.com/browse/MC-257370) - Buckets of fish are not sorted in the same order as the fish items
- [MC-257512](https://bugs.mojang.com/browse/MC-257512) - Dead tube coral in creative inventory is in wrong order
- [MC-258360](https://bugs.mojang.com/browse/MC-258360) - Horse armor loses its NBT data when equipped on horses via right-clicking
- [MC-258461](https://bugs.mojang.com/browse/MC-258461) - The "Detect structure size and position:" string displayed within the structure block GUI is improperly capitalized
- [MC-260468](https://bugs.mojang.com/browse/MC-260468) - Wither rose is not grouped with other small flowers in the creative inventory
- [MC-260602](https://bugs.mojang.com/browse/MC-260602) - 'data modify from string' index failure does not return 0 for 'execute store success'
- [MC-260711](https://bugs.mojang.com/browse/MC-260711) - Some words within "/datapack list" command feedback messages are always pluralized
- [MC-260712](https://bugs.mojang.com/browse/MC-260712) - Some words within "/scoreboard" command feedback messages are always pluralized
- [MC-260713](https://bugs.mojang.com/browse/MC-260713) - Some words within "/team" command feedback messages are always pluralized
- [MC-260715](https://bugs.mojang.com/browse/MC-260715) - Some words within "/bossbar" command feedback messages are always pluralized
- [MC-260716](https://bugs.mojang.com/browse/MC-260716) - Some words within "/fill", "/fillbiome", and "/clone" command feedback messages are always pluralized
- [MC-261024](https://bugs.mojang.com/browse/MC-261024) - /execute if loaded does not guarantee entities are loaded
- [MC-261080](https://bugs.mojang.com/browse/MC-261080) - Player can fall through scaffolding when loading a world
- [MC-261233](https://bugs.mojang.com/browse/MC-261233) - Minecart movement is not reliably detected by sculk sensors
- [MC-261349](https://bugs.mojang.com/browse/MC-261349) - Chiseled Bookshelf won't rotate when placed as part of a structure
- [MC-261433](https://bugs.mojang.com/browse/MC-261433) - Shield doesn't block TNT explosion
- [MC-261816](https://bugs.mojang.com/browse/MC-261816) - Most two block tall flowers do not block enchanting tables / are part of \#minecraft:replaceable
- [MC-261988](https://bugs.mojang.com/browse/MC-261988) - Inconsistency with Mangrove Roots and Leaves in the Creative Tab
- [MC-262033](https://bugs.mojang.com/browse/MC-262033) - The command block GUI remains open when the said command block is destroyed
- [MC-262106](https://bugs.mojang.com/browse/MC-262106) - Smithing recipe must have template to work
- [MC-262135](https://bugs.mojang.com/browse/MC-262135) - Recipe book GUI is positioned incorrectly
- [MC-262181](https://bugs.mojang.com/browse/MC-262181) - NBSP is a valid invisible character that can be used to rename items to have blank names
- [MC-262213](https://bugs.mojang.com/browse/MC-262213) - Baby sniffer's head is smaller on the first frame of existing
- [MC-262310](https://bugs.mojang.com/browse/MC-262310) - Telemetry description strings consist of inconsistent concluding punctuation
- [MC-262311](https://bugs.mojang.com/browse/MC-262311) - The "telemetry.event.game_load_times.description" string is missing an article before the word "execution"
- [MC-262355](https://bugs.mojang.com/browse/MC-262355) - Death messages for falling from climbable blocks do not work
- [MC-262440](https://bugs.mojang.com/browse/MC-262440) - Sniffers can sniff while in love and pathfinding to their lover
- [MC-262441](https://bugs.mojang.com/browse/MC-262441) - Baby sniffers stand a bit too far away from players that are tempting them
- [MC-262445](https://bugs.mojang.com/browse/MC-262445) - The text cursor no longer renders above text
- [MC-262446](https://bugs.mojang.com/browse/MC-262446) - Text within buttons renders above the semi-transparent black lines at the edges of menus
- [MC-262471](https://bugs.mojang.com/browse/MC-262471) - Random skylight underwater where it shouldn't be, that cuts off at the chunk border
- [MC-262506](https://bugs.mojang.com/browse/MC-262506) - Parts of beds render through the alternative recipe GUI in the recipe book
- [MC-262508](https://bugs.mojang.com/browse/MC-262508) - Torchflower_crop causes the game to crash and locks the world when pollinated by bees
- [MC-262518](https://bugs.mojang.com/browse/MC-262518) - The "mco.configure.world.uninvite.player" string contains an unnecessary space before the question mark
- [MC-262531](https://bugs.mojang.com/browse/MC-262531) - "death.attack.genericKill.player" displays raw translation string (is untranslated)

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/fce02f0ed50b4722f8ec58acef06275b91cde08d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
