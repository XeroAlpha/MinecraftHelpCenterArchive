---
title: Minecraft Java Edition - 1.16 PRE-2
date: 2020-06-10T18:03:19Z
updated: 2020-06-10T18:03:49Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360044790531-Minecraft-Java-Edition-1-16-PRE-2
hash:
  fixed-bugs-in-1.16-pre-release-2: fixed-bugs-in-116-pre-release-2
  new-features-in-1.16-pre-release-1: new-features-in-116-pre-release-1
  changes-in-1.16-pre-release-1: changes-in116-pre-release-1
  technical-changes-in-1.16-pre-release-1: technical-changes-in116-pre-release-1
  fixed-bugs-in-1.16-pre-release-1: fixed-bugs-in116-pre-release-1
---

03 June 2020 (PRE-1), 05 June 2020 (PRE-2)

It's time for 1.16 pre-releases!

Going forward you should mostly see bugs being fixed. Additionally, pre-releases doesn't necessarily tend to our usual cadence of releasing on Wednesdays, so keep an eye out!

**Edit: **We've now released 1.16 pre-release 2, fixing some crashes. Note that worlds opened in 1.16 pre-release 1 are corrupt and will not work in any way in 1.16 pre-release 2 (this includes using the re-create world button). Please restore an older backup or create a brand new world to play in this pre-release.

# FIXED BUGS IN 1.16 PRE-RELEASE 2

- [MC-187350](https://bugs.mojang.com/browse/MC-187350) - Game randomly crashes / IllegalStateException: POI never registered
- [MC-187352](https://bugs.mojang.com/browse/MC-187352) - Loading a world created in 1.16-pre1 always ask for confirmation
- [MC-187353](https://bugs.mojang.com/browse/MC-187353) - Crash when loading some worlds: IllegalStateException: Lock is no longer valid
- [MC-187358](https://bugs.mojang.com/browse/MC-187358) - Worlds generated in 1.16-pre1 do not have their world generation settings saved correctly, causing chunk errors
- [MC-187364](https://bugs.mojang.com/browse/MC-187364) - Disabling and enabling dimension datapack disables nether and end
- [MC-187408](https://bugs.mojang.com/browse/MC-187408) - Game crashing with Nether portals - java.lang.NullPointerException: Ticking player

# NEW FEATURES IN 1.16 PRE-RELEASE 1

- Added new “Fabulous” graphics option - uses per-pixel blending layers for some transparent elements

# CHANGES IN 1.16 PRE-RELEASE 1

- You can now milk Cows and Mooshrooms in creative mode
- You can now get stew from Mooshrooms in creative mode
- When you use an empty bucket on water in creative mode, you now get a bucket of water. If you have a bucket of water in your inventory already, no additional water buckets will be added when you use your empty bucket on water.
- When any villager is struck by lightning, the witch it is converted to will no longer despawn
- Added gamerule universalAnger (disabled by default), which makes angered neutral mobs attack any nearby player, not just the player that angered them. Works best if you disable forgiveDeadPlayers.
- Added gamerule forgiveDeadPlayers (enabled by default), which makes angered neutral mobs stop being angry when the targeted player dies nearby.
- Zombified piglins no longer attack innocent bystanders (unless you enable gamerule universalAnger)
- Zombified piglins stop being angry if the targeted player dies nearby (unless you disable gamerule forgiveDeadPlayers)

# TECHNICAL CHANGES IN 1.16 PRE-RELEASE 1

- Smithing recipes can now be added or changed through data packs
- Game will now detect critical datapack issues, like missing required tags and prevent world from being loaded
- World generation customization can now be added in data packs## World Customization

## DATA PACK SELECTION

- Data packs can now be selected before world is created
- “Copy world” option will also copy data packs present in source world

## PACK SELECTION SCREEN

- Packs can now be dropped directly on data and resource pack selection screens
- Dropped files and directories will be copied to appropriate places

## SMITHING RECIPES

There’s now a smithing recipe type. Recipes of this type are used in the smithing table to upgrade one item type into another type, maintaining tags.

- base - Ingredient specifying an item to be upgraded.
- addition - Ingredient specifying valid items to trigger the upgrade.
- result - Item specifying the resulting type of the upgraded item

## WORLD CUSTOMIZATION

- Data packs can now contain dimension_type and dimension folders with world generation and dimension settings

# FIXED BUGS IN 1.16 PRE-RELEASE 1

- [MC-4520](https://bugs.mojang.com/browse/MC-4520) - Aggressive neutral mobs become neutral when the world is reloaded
- [MC-9856](https://bugs.mojang.com/browse/MC-9856) - you cannot pick up buckets of water/lava in creative mode
- [MC-36322](https://bugs.mojang.com/browse/MC-36322) - Unable to milk cows in creative
- [MC-64623](https://bugs.mojang.com/browse/MC-64623) - Lightning bolts cannot be targeted by selectors
- [MC-69032](https://bugs.mojang.com/browse/MC-69032) - When a mob hits a zombified piglin, and that mob dies, the zombified piglins attack you
- [MC-90969](https://bugs.mojang.com/browse/MC-90969) - Cannot get mushroom stew from mooshrooms / milk from cows in creative mode
- [MC-106968](https://bugs.mojang.com/browse/MC-106968) - Snow golems aren’t damaged by splash or lingering water bottles
- [MC-127004](https://bugs.mojang.com/browse/MC-127004) - Waterlogged blocks cause z-fighting when looking at them from a distance
- [MC-138675](https://bugs.mojang.com/browse/MC-138675) - Wither skulls inflict the Wither effect on players in Creative mode
- [MC-138713](https://bugs.mojang.com/browse/MC-138713) - “Two by Two” advancement does not require donkeys or mules
- [MC-158906](https://bugs.mojang.com/browse/MC-158906) - After sleeping in a bed, players aren’t positioned in the center of a block
- [MC-159500](https://bugs.mojang.com/browse/MC-159500) - Hostile mobs attacking bees also cause the bees to attack players
- [MC-161969](https://bugs.mojang.com/browse/MC-161969) - Casting issue: Adding ender eyes to end portal frames at high distances causes particles to lose precision
- [MC-163950](https://bugs.mojang.com/browse/MC-163950) - Ice bordering water causes z-fighting issues from a distance
- [MC-164692](https://bugs.mojang.com/browse/MC-164692) - Entering a boat does not play the hand animation
- [MC-165669](https://bugs.mojang.com/browse/MC-165669) - Hand animation is playing when you’re aiming at a block through the mob and use the spawn egg
- [MC-165734](https://bugs.mojang.com/browse/MC-165734) - Minecarts with furnace still display a hand animation with incompatible items when not on a rail
- [MC-166188](https://bugs.mojang.com/browse/MC-166188) - Bees still hitting player after death
- [MC-166524](https://bugs.mojang.com/browse/MC-166524) - Trying to dye a sheep with the same color as sheep displays hand animation
- [MC-167042](https://bugs.mojang.com/browse/MC-167042) - Casting issue: Campfire embers are generated at a point that loses precision at high coordinates
- [MC-167044](https://bugs.mojang.com/browse/MC-167044) - Casting issue: Enchanting table book does not open for the player at high distances in some cases
- [MC-167046](https://bugs.mojang.com/browse/MC-167046) - Casting issue: Lava ember particles and lava popping sounds lose precision on creation at high coordinates
- [MC-167047](https://bugs.mojang.com/browse/MC-167047) - Casting issue: TNT blocks ignited by other explosions lose precision at high coordinates
- [MC-167091](https://bugs.mojang.com/browse/MC-167091) - Casting issue: Water particles dripping from leaves lose precision at high coordinates
- [MC-167195](https://bugs.mojang.com/browse/MC-167195) - Bees anger towards players in survival when killed in one hit
- [MC-167971](https://bugs.mojang.com/browse/MC-167971) - Casting issue: Particles emitted by redstone repeaters lose precision at high coordinates
- [MC-168675](https://bugs.mojang.com/browse/MC-168675) - Settings that update after closing the video settings menu don’t if you change the fullscreen setting
- [MC-170872](https://bugs.mojang.com/browse/MC-170872) - Casting issue: Nether biome particles suffer from precision loss
- [MC-170944](https://bugs.mojang.com/browse/MC-170944) - /locatebiome messages do not fit for all biome names
- [MC-171035](https://bugs.mojang.com/browse/MC-171035) - Casting issue: Particles from falling rain lose precision at high coordinates
- [MC-171037](https://bugs.mojang.com/browse/MC-171037) - Casting issue: smoke produced by lava during rain loses precision at high coordinates
- [MC-171663](https://bugs.mojang.com/browse/MC-171663) - Right-clicking on unemployed villagers sometimes cause hand animation to stop after a villager has a profession
- [MC-171683](https://bugs.mojang.com/browse/MC-171683) - Crimson and warped doors can’t have transparent textures
- [MC-172259](https://bugs.mojang.com/browse/MC-172259) - Baby Hoglin/Zoglin have their head slightly above their neck, it seems that their head is partly floating
- [MC-172531](https://bugs.mojang.com/browse/MC-172531) - Small mobs get stuck in fence corners
- [MC-172610](https://bugs.mojang.com/browse/MC-172610) - When not aiming at a block through a ridable mob while using a spawn egg on it, the player starts riding the mob and a baby mob is spawned
- [MC-174815](https://bugs.mojang.com/browse/MC-174815) - Piglins don’t automatically attack withers
- [MC-175028](https://bugs.mojang.com/browse/MC-175028) - Sometimes hoglins don’t avoid warped fungus
- [MC-175215](https://bugs.mojang.com/browse/MC-175215) - Respawn anchors destroy blocks when detonated underwater
- [MC-175409](https://bugs.mojang.com/browse/MC-175409) - Soul speed “effect” stays when you levitate/fly off of soul sand or soul soil
- [MC-175476](https://bugs.mojang.com/browse/MC-175476) - Respawn anchor doesn’t cull block faces
- [MC-175911](https://bugs.mojang.com/browse/MC-175911) - Soul Speed lasts after leaving soul blocks
- [MC-176041](https://bugs.mojang.com/browse/MC-176041) - Using a spawn egg on a strider while aiming at lava spawns both a baby and an adult strider
- [MC-176188](https://bugs.mojang.com/browse/MC-176188) - Striders are not damaged by splash or lingering water bottles
- [MC-176225](https://bugs.mojang.com/browse/MC-176225) - Accelerating a baby strider’s growth does not display hand animation
- [MC-176470](https://bugs.mojang.com/browse/MC-176470) - Respawning in the nether does not de-aggro zombified piglins
- [MC-176637](https://bugs.mojang.com/browse/MC-176637) - Closing game during Mojang load screen causes NullPointerException
- [MC-176640](https://bugs.mojang.com/browse/MC-176640) - You can set your spawn point inside dangerous blocks
- [MC-178567](https://bugs.mojang.com/browse/MC-178567) - Shearing sheep does not display hand animation again
- [MC-178618](https://bugs.mojang.com/browse/MC-178618) - Feeding a flower to a brown mooshroom does not perform hand animation
- [MC-178961](https://bugs.mojang.com/browse/MC-178961) - /loot … fish … command no longer has any functionality
- [MC-179561](https://bugs.mojang.com/browse/MC-179561) - Retreating baby hoglins sometimes won’t pathfind to the opposite direction of the player
- [MC-180111](https://bugs.mojang.com/browse/MC-180111) - Hoglins angered for reasons other than being attacked by the player ignore placed repellents.
- [MC-180922](https://bugs.mojang.com/browse/MC-180922) - Right clicking a mob with a spawn egg to spawn the baby variant doesn’t play the hand swing animation when not aiming at a block through the mob
- [MC-182308](https://bugs.mojang.com/browse/MC-182308) - Chicken jockeys cannot despawn
- [MC-182748](https://bugs.mojang.com/browse/MC-182748) - Casting issue: Redstone dust particles are generated at the wrong positions at high coordinates
- [MC-182883](https://bugs.mojang.com/browse/MC-182883) - Parity issue: Baby hoglins don’t follow adult hoglins
- [MC-183766](https://bugs.mojang.com/browse/MC-183766) - Who Is Cutting Onions Improperly Capitalized
- [MC-183767](https://bugs.mojang.com/browse/MC-183767) - Incorrect filename for “Serious Dedication” advancement in vanilla data pack
- [MC-183792](https://bugs.mojang.com/browse/MC-183792) - piglin_loved item tag has unnecessary items
- [MC-183821](https://bugs.mojang.com/browse/MC-183821) - “Game Mode Switcher” bottom hint text isn’t centered
- [MC-183825](https://bugs.mojang.com/browse/MC-183825) - New nether challenges don’t grant experience points
- [MC-183893](https://bugs.mojang.com/browse/MC-183893) - Gold nugget isn’t under \#piglin_loved
- [MC-184679](https://bugs.mojang.com/browse/MC-184679) - Using custom world generation, temperature is written wrong
- [MC-184947](https://bugs.mojang.com/browse/MC-184947) - Carriage return symbol can be seen when importing or exporting world generation settings to or from certain worlds
- [MC-185095](https://bugs.mojang.com/browse/MC-185095) - “thrown_item_picked_up_by_entity” advancement trigger does not work for players
- [MC-185377](https://bugs.mojang.com/browse/MC-185377) - Bone mealing kelp creates a large field of particles, rather than only within the kelp’s block space
- [MC-185480](https://bugs.mojang.com/browse/MC-185480) - Casting issue: Smoke particles emitted by campfires during rain form at the wrong positions at high coordinates
- [MC-186062](https://bugs.mojang.com/browse/MC-186062) - Warning “Could not find uniform named InSize in the specified shader program.” when loading resources
- [MC-186064](https://bugs.mojang.com/browse/MC-186064) - Clouds render in front of everything for some users
- [MC-186067](https://bugs.mojang.com/browse/MC-186067) - Some structures’ loot chests do not contain any items
- [MC-186071](https://bugs.mojang.com/browse/MC-186071) - Clouds are visible and don’t render correctly when they are turned off
- [MC-186074](https://bugs.mojang.com/browse/MC-186074) - Particles render in the wrong order with transparent blocks when using certain graphics cards
- [MC-186075](https://bugs.mojang.com/browse/MC-186075) - GPU usage in latest snapshot significantly higher than before, causing lag or crash for some users
- [MC-186080](https://bugs.mojang.com/browse/MC-186080) - Entities, block entities, and items are rendered black on some graphics cards
- [MC-186088](https://bugs.mojang.com/browse/MC-186088) - Block hitboxes once again cause semi-transparent blocks not to render behind them
- [MC-186089](https://bugs.mojang.com/browse/MC-186089) - Functions load before entity tags do, causing loading errors.
- [MC-186101](https://bugs.mojang.com/browse/MC-186101) - Some commands in functions cause a NullPointerException
- [MC-186108](https://bugs.mojang.com/browse/MC-186108) - Enchantment glint does not render on dropped/thrown items
- [MC-186109](https://bugs.mojang.com/browse/MC-186109) - You can use multiplayer commands on a singleplayer world
- [MC-186124](https://bugs.mojang.com/browse/MC-186124) - Lightning bolt doesn’t render
- [MC-186204](https://bugs.mojang.com/browse/MC-186204) - Items render in front of other entities, transparent blocks, and blocks with special renderers
- [MC-186253](https://bugs.mojang.com/browse/MC-186253) - Held translucent blocks make the water, clouds, particles, and placed translucent blocks behind them invisible in third person mode.
- [MC-186274](https://bugs.mojang.com/browse/MC-186274) - Purple light from Ender Dragon’s Death doesn’t appear
- [MC-186284](https://bugs.mojang.com/browse/MC-186284) - Player’s point of view is upside down in 20w22a
- [MC-186314](https://bugs.mojang.com/browse/MC-186314) - Villagers become fixated on potential job site
- [MC-186335](https://bugs.mojang.com/browse/MC-186335) - Bees age calculation inside hive/nest is broken
- [MC-186455](https://bugs.mojang.com/browse/MC-186455) - Persistent villagers without experience can despawn after converting to a witch
- [MC-186464](https://bugs.mojang.com/browse/MC-186464) - Enabled data packs still show up in the “/datapack enable” list
- [MC-186478](https://bugs.mojang.com/browse/MC-186478) - Tag minecraft:tick doesn’t work when joining a world
- [MC-186480](https://bugs.mojang.com/browse/MC-186480) - Inner parts of slime blocks and honey blocks disappear again while the block is moved by a piston
- [MC-186600](https://bugs.mojang.com/browse/MC-186600) - Nether gold ore is gray on a map
- [MC-186696](https://bugs.mojang.com/browse/MC-186696) - Totem of Undying causes red or blue tint in the screen when in F5 mode

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/8daeb71269eb164097d7d7ab1fa93fc93ab125c3/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!
