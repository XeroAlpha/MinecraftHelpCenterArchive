---
title: "Minecraft: Java Edition - 1.16.2"
date: 2020-08-11T18:43:19Z
updated: 2025-02-07T12:31:57Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360047630831-Minecraft-Java-Edition-1-16-2
hash:
  h_01JKG691S65YRYSYZW7GFMAJ1M: features
  h_01JKG691S6BH7R1KM1BRSPGJ6N: accessibility
  h_01JKG691S6W6GTSD63GCEQM57X: chat-delay
  h_01JKG691S65PNW1PRNB5Q85AQT: bastion-remnants
  h_01JKG691S7G6DJHB4ABGXRN0RC: blocks
  h_01JKG691S7TPZ44JPD396WVE0C: items
  h_01JKG691S7YEDE2M28KVR87MPX: mobs
  h_01JKG691S7KWNXDN1M2MT4BBN5: piglins
  h_01JKG691S72WPGXPP5ZGYPV7TD: piglin-brute
  h_01JKG691S7K95MWJGXSGVDKD95: respawn-block-positions
  h_01JKG691S738DABAJWSYXFP4PR: villagers
  h_01JKG691S7DP5WZJHRT3D1KXG3: technical
  h_01JKG691S7S67VSA5VW4HKDQD7: commands
  h_01JKG691S7V7KD8J980P15SBWR: execute
  h_01JKG691S7HMZNGBRSSGMF2ZW8: spawnpoint--setworldspawn
  h_01JKG691S74ZMVXF5SP2Q9SE7X: customized-world-generation
  h_01JKG691S777GJ472WP5BBQA6V: dedicated-server-packet-limit
  h_01JKG691S7H783D5FVBZ8FGHS2: pack-selection-screens
  h_01JKG691S78FKSY6MJDKFY7EM5: pack-version
  h_01JKG691S77J5W695VQZ65YB1X: tags
  h_01JKG691S73K7G5W6FWZZRY2BZ: optional-entries
  h_01JKG691S7AEPPP4DB0C7S1F5S: bugs
  h_01JKG691S7QH8SBVMMMFJBF8VE: get-the-release
---

11 August 2020

Ever since the [Nether Update](https://www.minecraft.net/en-us/article/nether-update-java), the Piglins have seen players sneaking in and having a peek in their chests – well, no more! With 1.16.2, we’re introducing the Piglin Brute – a Piglin so focused on guarding the Bastion Remnants' chests that even gold can’t distract them.

# FEATURES

## ACCESSIBILITY

Two new accessibility settings have been added to help with visual comfort.

- Distortion effects such as nausea and the Nether portal overlay can now be reduced
- At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
- Field of view effects, shown after speed modifiers are applied, can now be reduced

### CHAT DELAY

- Chat delay has been added to the Chat Settings screen
- Pressing F3+D now clears the pending chat messages

## BASTION REMNANTS

- Tweaked the Bastion Remnant chest loot
- Chests in Bastion Remnants are now more likely to be positioned on top of gilded blackstone

## BLOCKS

- Brewing stands can now be crafted with blackstone
- Lanterns and Soul Lanterns can now be waterlogged
- Crimson and warped fungus can now be placed on mycelium
- Chains can now be placed in all orientations

## ITEMS

- Tools are now sorted based on material in the creative inventory
- Totems of undying now give the fire resistance status effect for 40 seconds when activated

## MOBS

- Endermen will no longer place their held block onto bedrock blocks
- Zoglins can now be leashed
- When a Zombified Piglin is spawned riding a Strider, it will now be holding a Warped Fungus on a Stick

## PIGLINS

- Added Piglin Brutes!
- Piglins now become angry with players who open or destroy a Chest Minecart
- Tweaked bartering loot

### PIGLIN BRUTE

- Piglin Brutes are stronger versions of Piglins that live in bastions and protect the treasures there
- Unlike the their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren’t afraid of anything
- Piglin Brutes attack players on sight, no matter how they are dressed
- Piglin Brutes wield axes and don’t need any armor, because they’re just that tough

## RESPAWN BLOCK POSITIONS

- Modified how respawn positions are chosen for beds and respawn anchors
- Respawn anchors will prioritize cardinal directions over corners
- Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
- Respawning players will now face the block that they respawned at
- Placing players onto dangerous blocks is now avoided when possible

## VILLAGERS

- Villagers now emit green particles when joining a village, setting a home bed, or acquiring a job site / profession
- Villagers now lose their job sites when changing dimension

# TECHNICAL

- Custom worlds now support custom biomes
- Sign edit screen will now intialize from existing sign text (should have no noticeable impact on vanilla)
- Small improvements to data and resource pack selection screens
- Tags can now have optional entries

## COMMANDS

### EXECUTE

- execute in now respects dimension scaling

### SPAWNPOINT & SETWORLDSPAWN

Added an angle parameter for setting the default facing angle of a respawning player\
Syntax: spawnpoint \[\<targets\>\] \[\<pos\>\] \[\<angle\>\]\
Syntax: setworldspawn \[\<pos\>\] \[\<angle\>\]\
New parameters:

- angle - Floating point angle in degrees. Supports the relative ~ modifier

## CUSTOMIZED WORLD GENERATION

- Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (namespace/\<type\>/resource.json)
- There is now experimental support for a worldgen folder in data packs
- worldgen/biome can contain biome definitions
- worldgen/configured_carver can contain definitions for world carver settings
- worldgen/configured_feature can contain definitions for feature placements
- worldgen/configured_structure_feature can contain definitions for structure placements
- worldgen/configured_surface_builder can contain definitions for surfaces
- worldgen/noise_settings can now contain noise configurations
- worldgen/processor_list can contain sets of block processors
- worldgen/template_pool can contain pool definitions for jigsaw structures
- Custom biomes can now be used in the single biome/caves/floating islands world types (add the data pack containing the biome first)
- Custom biomes can now be used in custom dimension generators

## DEDICATED SERVER PACKET LIMIT

- Dedicated servers can now kick clients that consistently send too many packets within a second
- Controlled with the rate-limit settings in server.properties
- The default rate limit of 0 means “no limit”

## PACK SELECTION SCREENS

- While screen is open, it will automatically update when pack directory contents change
- Both pack selection screen will now display contents of pack.png as pack icon

## PACK VERSION

- Resource pack version raised to 6

## TAGS

### OPTIONAL ENTRIES

Entries in tags can now be marked as optional. Failure to resolve optional entries does not prevent the whole tag from loading.\
Example:

{\
  "replace": false,\
  "values": \[\
    "#minecraft:beds", // existing syntax\
    { "id":"#missing:tag", "required": false }, // optional sub-tag entry\
    "minecraft:anvil", // existing syntax\
    { "id":"minecraft:stone_button", "required": true }, // new syntax for required tags\
    { "id":"missing:block", "required": false } // optional single-element entry\
  \]\
}

# BUGS

- [MC-1058](https://bugs.mojang.com/browse/MC-1058) - A dragon head is invisible if the entity wearing it is not in view
- [MC-2404](https://bugs.mojang.com/browse/MC-2404) - Stepping down while sneaking allows falling off of blocks
- [MC-34661](https://bugs.mojang.com/browse/MC-34661) - Thorns enchantment causes double armor decay
- [MC-35765](https://bugs.mojang.com/browse/MC-35765) - Viewing text in Right-to-Left language while in another language renders backwards and non-connected
- [MC-49476](https://bugs.mojang.com/browse/MC-49476) - NBT "HideFlags" does not hide "Dyed" on leather armor
- [MC-57869](https://bugs.mojang.com/browse/MC-57869) - Some item tooltips use § for coloring, rendering them incorrect in right-to-left languages
- [MC-65953](https://bugs.mojang.com/browse/MC-65953) - Tags IsBaby and IsVillager can't be changed from true to false with /entitydata
- [MC-68487](https://bugs.mojang.com/browse/MC-68487) - Player heads of the same player always have the same skin texture, even if the saved texture data is different
- [MC-69876](https://bugs.mojang.com/browse/MC-69876) - Pistons at Y=1 do not push downwards / at Y=254 do not push upwards
- [MC-73884](https://bugs.mojang.com/browse/MC-73884) - Throwable projectiles get destroyed at contact with non solid blocks
- [MC-80032](https://bugs.mojang.com/browse/MC-80032) - Horses can suffocate when going through nether portals
- [MC-93024](https://bugs.mojang.com/browse/MC-93024) - Bow From Skeleton Traps enchanted twice with the same enchantment
- [MC-96007](https://bugs.mojang.com/browse/MC-96007) - Arrows, trident, projectiles, splash and lingering potions can't be teleported from directly above the end portal, end gateway and nether portal
- [MC-97507](https://bugs.mojang.com/browse/MC-97507) - Using item which modifies the held item shows "Gear equips" subtitle
- [MC-102967](https://bugs.mojang.com/browse/MC-102967) - Shulker bullets can't teleport through a nether or end portal
- [MC-105248](https://bugs.mojang.com/browse/MC-105248) - Wet wolves become nearly black in dark areas
- [MC-107529](https://bugs.mojang.com/browse/MC-107529) - Marker:1b Armor Stands render themself and their equipment dark if inside solid blocks
- [MC-111702](https://bugs.mojang.com/browse/MC-111702) - Memory leak with complex json text while chat is open
- [MC-116857](https://bugs.mojang.com/browse/MC-116857) - Advancement descriptions use unnecessary capitalization on generic resource names
- [MC-121098](https://bugs.mojang.com/browse/MC-121098) - Entering a tall portal that takes you to a short portal from the top causes you to take suffocation damage
- [MC-124320](https://bugs.mojang.com/browse/MC-124320) - Endermen can pick up and place snowless snowy grass blocks
- [MC-124365](https://bugs.mojang.com/browse/MC-124365) - Exiting world does not release file handle to zipped datapack / resourcepack
- [MC-125758](https://bugs.mojang.com/browse/MC-125758) - Bubble column does not affect egg, snowball, ender pearl, splash potion, lingering potion, fireball and shulker bullet
- [MC-130558](https://bugs.mojang.com/browse/MC-130558) - Item frames cannot be emptied if gamerule doEntityDrops is set to false
- [MC-134084](https://bugs.mojang.com/browse/MC-134084) - If gamerule sendCommandFeedback is disabled, /msg or /tell don't display the message to the sender
- [MC-136553](https://bugs.mojang.com/browse/MC-136553) - Dyes in creative inventory are in reverse order
- [MC-145691](https://bugs.mojang.com/browse/MC-145691) - Binding "Open/Close Inventory" to Tab only opens inventory
- [MC-148447](https://bugs.mojang.com/browse/MC-148447) - Villagers often get stuck while trying to go through a door at the same time
- [MC-149060](https://bugs.mojang.com/browse/MC-149060) - Villagers "spam" doors by opening and closing them really fast
- [MC-150417](https://bugs.mojang.com/browse/MC-150417) - Some items get stuck in soul sand when there is liquid above the soul sand
- [MC-152037](https://bugs.mojang.com/browse/MC-152037) - Powered, activator and detector rails are deleted when pushed/pulled onto a block they cannot be placed on
- [MC-153195](https://bugs.mojang.com/browse/MC-153195) - Mobs can drop items with duplicate enchantments
- [MC-153230](https://bugs.mojang.com/browse/MC-153230) - Players in spectator mode can stop minecarts
- [MC-157774](https://bugs.mojang.com/browse/MC-157774) - Bouncing off side of blocks while creative flying
- [MC-158735](https://bugs.mojang.com/browse/MC-158735) - Pillagers without crossbows hold their arm up, in a way that may be offensive to some people
- [MC-158767](https://bugs.mojang.com/browse/MC-158767) - Sleeping beside lava wakes player in lava
- [MC-158987](https://bugs.mojang.com/browse/MC-158987) - Raid still continues after a villager turns into a witch
- [MC-160723](https://bugs.mojang.com/browse/MC-160723) - Bamboo crouch sliding off
- [MC-163767](https://bugs.mojang.com/browse/MC-163767) - Villagers get ejected from a minecart when converted to a zombie villager
- [MC-166718](https://bugs.mojang.com/browse/MC-166718) - Mobs no longer suffocate inside of soul sand, farmland or grass paths
- [MC-167045](https://bugs.mojang.com/browse/MC-167045) - Banners are rendered too dark in the inventory
- [MC-167756](https://bugs.mojang.com/browse/MC-167756) - Wolf is rendered too dark when not directly affected by skylight
- [MC-169203](https://bugs.mojang.com/browse/MC-169203) - Sloped redstone type rail not dropping item when pushed by piston to a spot without adjacent block
- [MC-170628](https://bugs.mojang.com/browse/MC-170628) - UserCache with X user entries writes the same file X times to disk on server startup
- [MC-171363](https://bugs.mojang.com/browse/MC-171363) - Nether forest biomes: Large fungi and small plants only generate on the topmost layer of nylium, leaving all lower layers devoid of flora
- [MC-171739](https://bugs.mojang.com/browse/MC-171739) - Weeping and twisting vines, bamboo, and kelp can be replaced by "saplings" by breaking and placing the block at the same time
- [MC-172221](https://bugs.mojang.com/browse/MC-172221) - Hoglins, zoglins, ravagers, iron golems, and polar bears won't walk down a block if they are partially walking on air
- [MC-173526](https://bugs.mojang.com/browse/MC-173526) - All Minecarts can survive in lava
- [MC-174469](https://bugs.mojang.com/browse/MC-174469) - Soul Speed does not work when jumping
- [MC-174479](https://bugs.mojang.com/browse/MC-174479) - Cannot place sea pickles on soul sand
- [MC-174520](https://bugs.mojang.com/browse/MC-174520) - Soul particle texture is incorrect for the first frame
- [MC-174574](https://bugs.mojang.com/browse/MC-174574) - Soul speed doesn't work when slabs and blocks of similar height are placed above the soul sand block
- [MC-174762](https://bugs.mojang.com/browse/MC-174762) - Villager iron golem respawn timer is reset when the chunk is reloaded
- [MC-175334](https://bugs.mojang.com/browse/MC-175334) - Villagers take longer to get a job the more workstations are nearby
- [MC-176015](https://bugs.mojang.com/browse/MC-176015) - Strider suffocates when player is saddled on and looking up with Warped Fungus on a Stick
- [MC-176034](https://bugs.mojang.com/browse/MC-176034) - You can walk on striders
- [MC-176491](https://bugs.mojang.com/browse/MC-176491) - Nylium randomly catches fire from lava and burns infinitely
- [MC-176753](https://bugs.mojang.com/browse/MC-176753) - Piglins stand around dropped golden items if their "CanPickUpLoot" tag is set to "0b"
- [MC-176778](https://bugs.mojang.com/browse/MC-176778) - Camera is reset when a block reappears due to high server latency
- [MC-176836](https://bugs.mojang.com/browse/MC-176836) - Unarmed vindicators raise their arm in offensive way when attacking
- [MC-177651](https://bugs.mojang.com/browse/MC-177651) - Despite being cold outside of lava, striders don't care about staying in lava
- [MC-177684](https://bugs.mojang.com/browse/MC-177684) - Cocoa beans, bone meal and lapis between dyes in creative inventory
- [MC-177733](https://bugs.mojang.com/browse/MC-177733) - Powered & Activator Rail Dupe
- [MC-178061](https://bugs.mojang.com/browse/MC-178061) - Chat Delay option doesn't exist in Chat settings
- [MC-178729](https://bugs.mojang.com/browse/MC-178729) - Inconsistency: Red and brown mushrooms can't be grown into huge mushrooms on nylium, while they can on all other "grass" blocks
- [MC-179369](https://bugs.mojang.com/browse/MC-179369) - Wandering Traders are always invisible in the Nether and the End
- [MC-180350](https://bugs.mojang.com/browse/MC-180350) - Long pack names and world descriptions don't stop with "..." in some menus
- [MC-180447](https://bugs.mojang.com/browse/MC-180447) - Game crash when placing player head down
- [MC-181204](https://bugs.mojang.com/browse/MC-181204) - doDaylightCycle button slightly incorrectly labeled
- [MC-181233](https://bugs.mojang.com/browse/MC-181233) - Mobs cannot spawn on wooden trapdoors, but can on iron and nether fungus trapdoors
- [MC-181925](https://bugs.mojang.com/browse/MC-181925) - Unarmed vexes raise their arms in an offensive way when attacking
- [MC-182330](https://bugs.mojang.com/browse/MC-182330) - Crossbow-wielding piglins behave weirdly when they try to pursue invisible players
- [MC-182430](https://bugs.mojang.com/browse/MC-182430) - Piglins continuously try and fail to pick up gold ingots if they can't reach them
- [MC-182652](https://bugs.mojang.com/browse/MC-182652) - Ruined portals don't always spawn with chest
- [MC-182868](https://bugs.mojang.com/browse/MC-182868) - Rail updates are 4-5x times laggier since 1.14 if the rail is on top of a non-full cube
- [MC-183663](https://bugs.mojang.com/browse/MC-183663) - Farmer villagers don't compost correctly
- [MC-183743](https://bugs.mojang.com/browse/MC-183743) - Iron golem overpopulation
- [MC-185019](https://bugs.mojang.com/browse/MC-185019) - Worldgen settings with empty structures parameter generates all structures extremely frequent
- [MC-185274](https://bugs.mojang.com/browse/MC-185274) - Subtitles are still showing ''Gear equips'' when eating in snapshot 20w21a or newer.
- [MC-185490](https://bugs.mojang.com/browse/MC-185490) - Separated trader llamas on leads cause server performance (tps) issues
- [MC-185684](https://bugs.mojang.com/browse/MC-185684) - Enderman can teleport when hit in cases where they previously would not teleport
- [MC-185925](https://bugs.mojang.com/browse/MC-185925) - Casting issue: Mineral vein generation uses 32-bit floats, leading to precision loss and potential crashes
- [MC-186627](https://bugs.mojang.com/browse/MC-186627) - Undead mobs do not burn in daylight in custom dimensions
- [MC-187112](https://bugs.mojang.com/browse/MC-187112) - Extra space in "Keep Jigsaws" button in jigsaw block
- [MC-187126](https://bugs.mojang.com/browse/MC-187126) - Jigsaw block UI is not closed when pressing "Generate"
- [MC-187129](https://bugs.mojang.com/browse/MC-187129) - Jigsaw blocks do not generate the correct structure until "Done" is pressed and the UI is reopened
- [MC-187344](https://bugs.mojang.com/browse/MC-187344) - Fast graphics tooltip has incorrect 'tree-leaves' spelling
- [MC-187357](https://bugs.mojang.com/browse/MC-187357) - Strongholds will not generate in floating_islands or caves preset
- [MC-187379](https://bugs.mojang.com/browse/MC-187379) - Text for pack.incompatible.confirm.new makes no sense
- [MC-187380](https://bugs.mojang.com/browse/MC-187380) - Incorrect grammar in en_us translation of pack.dropConfirm
- [MC-187398](https://bugs.mojang.com/browse/MC-187398) - Smithing table and stonecutter recipes are not unlocked when used
- [MC-187598](https://bugs.mojang.com/browse/MC-187598) - Block hitboxes still cause semi-transparent blocks not to render behind them in lower than "Fabulous" gfx settings
- [MC-187904](https://bugs.mojang.com/browse/MC-187904) - Data packs cannot replace settings of vanilla dimensions during world creation
- [MC-188389](https://bugs.mojang.com/browse/MC-188389) - Several minor errors in datapackFailure.title
- [MC-188390](https://bugs.mojang.com/browse/MC-188390) - Comma splices in four strings
- [MC-188392](https://bugs.mojang.com/browse/MC-188392) - Death message for getting shot by a skull is not grammatically correct in all situations
- [MC-188459](https://bugs.mojang.com/browse/MC-188459) - Potted cactus still missing cullface argument for top
- [MC-188473](https://bugs.mojang.com/browse/MC-188473) - Resource pack screen no longer updates when adding or removing resource packs
- [MC-188534](https://bugs.mojang.com/browse/MC-188534) - Potted cactus missing bottom face
- [MC-188621](https://bugs.mojang.com/browse/MC-188621) - Mojang "Production Manager" credit is indented further than other credits
- [MC-188880](https://bugs.mojang.com/browse/MC-188880) - Baby zombified piglins riding on chickens aren't positioned properly
- [MC-188969](https://bugs.mojang.com/browse/MC-188969) - Having a suspicious stew in inventory prevents all types of suspicious stew from going into your inventory when milking brown mooshroom
- [MC-189414](https://bugs.mojang.com/browse/MC-189414) - Smithing table doesn't calculate amount of output items correctly
- [MC-189736](https://bugs.mojang.com/browse/MC-189736) - "distance" within predicate no longer works
- [MC-189769](https://bugs.mojang.com/browse/MC-189769) - Fungi can grow through fire
- [MC-189788](https://bugs.mojang.com/browse/MC-189788) - Certain mobs in boats sometimes take drowning damage while the boat is moving
- [MC-189797](https://bugs.mojang.com/browse/MC-189797) - Hoglins, Zoglins, melee Piglins, and Piglin Brutes do not properly attack invisible entities within normal range
- [MC-189909](https://bugs.mojang.com/browse/MC-189909) - player_interacted_with_entity does not trigger if there is only one item and the item gets consumed
- [MC-189918](https://bugs.mojang.com/browse/MC-189918) - Multiplayer warning uses "Mojang" instead of "Mojang Studios"
- [MC-190021](https://bugs.mojang.com/browse/MC-190021) - Trying to mount a pig or strider while sneaking plays hand animation
- [MC-190098](https://bugs.mojang.com/browse/MC-190098) - Structure size and offset still limited to 32 for dedicated servers
- [MC-190102](https://bugs.mojang.com/browse/MC-190102) - Some UI strings are not consistently capitalized
- [MC-190103](https://bugs.mojang.com/browse/MC-190103) - Crash when using a nether portal: java.lang.IndexOutOfBoundsException: fromIndex \< 0: -2368549
- [MC-190266](https://bugs.mojang.com/browse/MC-190266) - Players and other entities can catch on fire after logging on while riding a Strider in lava
- [MC-190274](https://bugs.mojang.com/browse/MC-190274) - Collecting liquids in bottles on Creative mode is inconsistent with the new creative bucket mechanics
- [MC-190288](https://bugs.mojang.com/browse/MC-190288) - Fabulous and Fancy graphics tooltips have missing commas
- [MC-190552](https://bugs.mojang.com/browse/MC-190552) - Demo mode resets position and inventory upon launch
- [MC-190559](https://bugs.mojang.com/browse/MC-190559) - Baby striders don't die when it's raining and they are in lava
- [MC-190849](https://bugs.mojang.com/browse/MC-190849) - Slime blocks can only push entities 5 blocks high instead of 6 blocks high as in 1.15.2
- [MC-190852](https://bugs.mojang.com/browse/MC-190852) - Advancement announcement message has switched brackets for right-to-left languages
- [MC-190856](https://bugs.mojang.com/browse/MC-190856) - '/list uuids' shows parentheses incorrectly for right-to-left languages
- [MC-190859](https://bugs.mojang.com/browse/MC-190859) - floating_islands or caves buffet worlds no longer generate strongholds and ender eyes do not locate previously generated strongholds after upgrading to 1.16
- [MC-190860](https://bugs.mojang.com/browse/MC-190860) - '/' (slash) in chat and command block shows legacy formatting symbol for right-to-left languages
- [MC-190875](https://bugs.mojang.com/browse/MC-190875) - Creating a custom superflat world with a structure that cannot generate in a given biome, then running /locate on that structure, softlocks the game
- [MC-190891](https://bugs.mojang.com/browse/MC-190891) - Certain redstone circuits causing lag
- [MC-190892](https://bugs.mojang.com/browse/MC-190892) - Brackets in potion effects are reversed in right-to-left languages
- [MC-191031](https://bugs.mojang.com/browse/MC-191031) - Players in spectator mode can interact with boats
- [MC-191168](https://bugs.mojang.com/browse/MC-191168) - Piglins that convert into Zombified Piglins while sitting on a minecart sometimes sink into blocks
- [MC-191388](https://bugs.mojang.com/browse/MC-191388) - "No key position_predicate in MapLike" console spam
- [MC-191441](https://bugs.mojang.com/browse/MC-191441) - Right-to-left text is rendered bottom-up in some cases
- [MC-191467](https://bugs.mojang.com/browse/MC-191467) - Resource packs screen not updated during runtime when packs are dropped in the folder
- [MC-191501](https://bugs.mojang.com/browse/MC-191501) - Opening a world from earlier 1.14 releases in 1.16 causes villagers to vanish
- [MC-191562](https://bugs.mojang.com/browse/MC-191562) - "Cancel" button overlaps "Done" button when uploading a world to Realms, making users unable to upload world
- [MC-191571](https://bugs.mojang.com/browse/MC-191571) - Switched square brackets for right-to-left languages
- [MC-191579](https://bugs.mojang.com/browse/MC-191579) - Book signing GUI has broken formatting for right-to-left languages
- [MC-191623](https://bugs.mojang.com/browse/MC-191623) - Ender dragon battle music does not stop after ender dragon has been defeated
- [MC-191656](https://bugs.mojang.com/browse/MC-191656) - Right-to-left languages don't perform as expected in creative search menu
- [MC-191915](https://bugs.mojang.com/browse/MC-191915) - While in a boat the elytra does not show as enchanted
- [MC-191947](https://bugs.mojang.com/browse/MC-191947) - Entities that tick in nether portal for one gametick don't get sent to the nether
- [MC-191953](https://bugs.mojang.com/browse/MC-191953) - End Gateway occasionally fails to teleport player to/from the End Islands
- [MC-192021](https://bugs.mojang.com/browse/MC-192021) - Enchantment Glint effect on transparent blocks not properly rendered on Fabulous graphic
- [MC-192032](https://bugs.mojang.com/browse/MC-192032) - Villagers don't always try to claim the closest workstation and are sometimes focussed on a non-existent one or one out of their reach
- [MC-192136](https://bugs.mojang.com/browse/MC-192136) - Lava damage works differently than in previous versions
- [MC-192236](https://bugs.mojang.com/browse/MC-192236) - Endermen can place blocks on top of item frames on the floor
- [MC-192296](https://bugs.mojang.com/browse/MC-192296) - Spider Jockey from a spawner minecart crashes with"java.lang.IllegalStateException: Entity is already tracked"
- [MC-192306](https://bugs.mojang.com/browse/MC-192306) - Crimson and warped slabs use incorrect colors on maps
- [MC-192371](https://bugs.mojang.com/browse/MC-192371) - Paintings in the same block space pop off when chunk loads
- [MC-192845](https://bugs.mojang.com/browse/MC-192845) - Block Event Lag in 1.16 is excessive
- [MC-192894](https://bugs.mojang.com/browse/MC-192894) - Transparency layers lose their auxiliary depth buffer ID when resized
- [MC-193213](https://bugs.mojang.com/browse/MC-193213) - Leads are positioned incorrectly on players and Wandering Traders
- [MC-193276](https://bugs.mojang.com/browse/MC-193276) - Player floats slightly above strider while riding it
- [MC-193339](https://bugs.mojang.com/browse/MC-193339) - NullPointerException during shutdown when rcon enabled with no password
- [MC-195062](https://bugs.mojang.com/browse/MC-195062) - Raids often will not end in defeat when all villagers are dead if there are job sites in the village
- [MC-195544](https://bugs.mojang.com/browse/MC-195544) - Game crashes after killing a mob that is being ridden by a guardian which is being ridden by a wither skeleton
- [MC-195851](https://bugs.mojang.com/browse/MC-195851) - "Hat" layer on helmets detaches from Piglins' heads while bartering
- [MC-196245](https://bugs.mojang.com/browse/MC-196245) - Charged creeper does not always drop skull if zombie variants are nearby
- [MC-196473](https://bugs.mojang.com/browse/MC-196473) - Pufferfish gives Nausea II instead of the maximum of Nausea I
- [MC-196737](https://bugs.mojang.com/browse/MC-196737) - Shift does not work on lanterns
- [MC-197049](https://bugs.mojang.com/browse/MC-197049) - Pending messages are saved after relogging, while normal messages are not
- [MC-197053](https://bugs.mojang.com/browse/MC-197053) - Pressing F3+D clears the pending lines message, but doesn't clear the pending messages
- [MC-197275](https://bugs.mojang.com/browse/MC-197275) - Due to changes to walls, "pack_format: 5" is not cross-compatible between 1.15 and 1.16

# GET THE RELEASE

​To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play! Make sure your Launcher is set to the "Latest Release" option.

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c5f6fb23c3876461d46ec380421e42b289789530/server.jar)

Report bugs here:

- [Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/summary)
