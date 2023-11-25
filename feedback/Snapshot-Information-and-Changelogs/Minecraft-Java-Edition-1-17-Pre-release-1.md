---
title: "Minecraft: Java Edition - 1.17 Pre-release 1 "
date: 2021-05-27T13:32:22Z
updated: 2021-06-01T18:34:44Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360062011311-Minecraft-Java-Edition-1-17-Pre-release-1-
---

The first 1.17 pre-release is here!

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases doesn\'t follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out!

Additionally, based on feedback from the community, we have decided to include candles in part 1 of Caves & Cliffs again. Candles will become available in Bedrock shortly after the release of part 1.

# NEW FEATURES IN 1.17 PRE-RELEASE 1

-   Added new advancements

## ADVANCEMENTS

-   Added "Whatever Floats Your Goat!" for floating in a boat with a goat
-   Added "Wax on" for applying wax to a Copper block!
-   Added "Wax off" for scraping wax off a Copper block!
-   Added "The Cutest Predator" for catching an axolotl in a bucket!
-   Added "The Healing Power of Friendship!" for teaming up with an axolotl and winning a fight
-   Added "Glow and Behold" for making a sign glow
-   Added "Light as a Rabbit" for waking on powder snow with leather boots
-   Added "Surge Protector!" for having a lightning strike a lightning rod near a villager without setting the area on fire
-   Added "Is it a Bird?" for looking at a parrot through a spyglass
-   Added "Is it a Balloon?" for looking at a ghast through a spyglass
-   Added "Is it a Plane?" for looking at a dragon through a spyglass

# CHANGES IN 1.17 PRE-RELEASE 1

-   Candles have been added back to the creative inventory
-   Recipes for crafting and dying candles are once again available
-   Candles now have a different texture when lit
-   Glowing text on signs now has an outer glow, making text in dark colours more visible in the dark
-   Holding down the space bar now increases the scroll speed in the credits

# THE CAVES & CLIFFS PREVIEW

Download the [updated datapack](https://launcher.mojang.com/v1/objects/e0738fc94f08362fe2eff71f5bd46288d6647e21/CavesAndCliffsPreview.zip).

# TECHNICAL CHANGES IN 1.17 PRE-RELEASE 1

-   Added started_riding, lightning_strike and using_item advancement triggers
-   Added source condition to effects_changed trigger
-   Added lightning_bolt sub-predicate
-   Added passenger, stepping_on and lightning_bolt properties to entity predicate
-   Added looking_at condition to player sub-predicate
-   Expanded item field on item predicate to items
-   Expanded block field on block predicate to blocks
-   Added F3+L shortcut to generate and persist performance metrics from in-game
    -   F3+L on single-player worlds will also include reports for the integrated server
-   Removed debug report command (use perf start/stop for server performance measurement)
-   perf start/stop command on dedicated servers will now generate and persist server performance metrics

## ADVANCEMENTS

### NEW TRIGGERS

#### STARTED_RIDING

-   Triggered when player starts riding a vehicle or entity starts riding vehicle currently ridden by player
-   Conditions:
    -   player - either a player that started riding or one of boat passengers

#### LIGHTNING_STRIKE

-   Triggered when lightning finishes (i.e. entity disappears)
-   Triggers for any player on the server
-   Conditions
    -   player - player for which this trigger runs
    -   lightning - predicate for lightning entity
    -   bystander - predicate for one of the entities in a certain area around strike not hurt by it

#### USING_ITEM

-   Triggered for every tick of using items (like crossbows, spyglass, fishing rods, etc)
-   Conditions
    -   player - players that uses item
    -   item - item being used

### CHANGED TRIGGERS

#### EFFECTS_CHANGED

-   Added source triggers that matches entity that triggered the change
-   Might be empty when:
    -   there is no entity (for example, effect gained from a beacon)
    -   the effect is self-applied
    -   effect is removed

### CHANGED PREDICATES

#### ITEM PREDICATE

-   item field expended to items, now accepting an array of item types

#### BLOCK PREDICATE

-   block field expended to blocks, now accepting an array of block types

#### ENTITY PREDICATE

-   passenger - new sub-predicate for passenger directly riding this vehicle (if present, must match one or more)
-   stepping_on - location predicate for block entity is currently standing on
-   lightning_bolt - sub-predicate valid only for lightning bolt entity

#### PLAYER PREDICATE

-   looking_at - entity currently viewed by player
    -   uses the same line-of-sight rules as attacking mobs
    -   actual detection radius might be changed in future

### LIGHTNING BOLT

-   blocks_set_on_fire - range check for of blocks set on fire by this entity
-   entity_struck - predicate for entities struck by this lightning (if present, must match one or more)

## PERFORMANCE METRICS REPORTING

These will be saved to a zip file in debug/profiling/\<yyyy-MM-dd_HH.mm.ss-\[levelname\]-\[version\]\>.zip and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format, and names are susceptible to change between versions. Our plan is to continue iterating on which metrics to capture.

### CLIENT F3+L SHORTCUT

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

Pressing F3+L before the 10 second limit will end the recording early.

This shortcut is always available to clients, even on multi-player servers where it will record client-side performance.

### DEDICATED SERVER PERF START/STOP COMMAND

perf start will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes and other more detailed stats.

perf stop before the 10-second limit will end the recording early.

# FIXED BUGS IN 1.17 PRE-RELEASE 1

-   [MC-19690](https://bugs.mojang.com/browse/MC-19690) - Reducing maxHealth / max_health can cause fake death
-   [MC-65587](https://bugs.mojang.com/browse/MC-65587) - Lag spike while loading player head textures/player skins
-   [MC-104897](https://bugs.mojang.com/browse/MC-104897) - End crystals placed on exit portals generated before 1.9 do not respawn the ender dragon
-   [MC-117708](https://bugs.mojang.com/browse/MC-117708) - Credits background jitters
-   [MC-118757](https://bugs.mojang.com/browse/MC-118757) - Increasing Game State Rain Level values make the game increasingly laggier and distorts UI
-   [MC-148809](https://bugs.mojang.com/browse/MC-148809) - Structure block data length limited to 12
-   [MC-163945](https://bugs.mojang.com/browse/MC-163945) - Intersecting structures can create corrupted block entities (spawner / chest)
-   [MC-189336](https://bugs.mojang.com/browse/MC-189336) - Shifting around servers in the server list crashes the game (ArrayIndexOutOfBoundsException)
-   [MC-192889](https://bugs.mojang.com/browse/MC-192889) - When placing certain heads or putting them in entities' head slot the game stutters
-   [MC-197942](https://bugs.mojang.com/browse/MC-197942) - Leaves change to stone near Lava Pool (Recurrence of MC-48340)
-   [MC-198957](https://bugs.mojang.com/browse/MC-198957) - End Portal Frames change to Stone near Lava Pool
-   [MC-202249](https://bugs.mojang.com/browse/MC-202249) - Angering passive mobs in new nether chunks very far away from previously generated chunks, then entering a nether portal causes server to completely freeze
-   [MC-203131](https://bugs.mojang.com/browse/MC-203131) - Setting the weight in Template Pool to high values will lag world and can cause out of memory error.
-   [MC-203558](https://bugs.mojang.com/browse/MC-203558) - Lighting a candle is sometimes delayed
-   [MC-203661](https://bugs.mojang.com/browse/MC-203661) - Flowing liquids look very dark through tinted glass
-   [MC-203704](https://bugs.mojang.com/browse/MC-203704) - Candles don't show flame animations when particles are set to "Minimal"
-   [MC-204649](https://bugs.mojang.com/browse/MC-204649) - Amethyst blocks don't make chime sounds when walked on by certain mobs
-   [MC-205035](https://bugs.mojang.com/browse/MC-205035) - Powder Snow Bucket is not grouped with Snowball or buckets in creative inventory
-   [MC-208604](https://bugs.mojang.com/browse/MC-208604) - While the mainhand is empty and there's a loaded crossbow in the offhand, the mainhand will appear invisible
-   [MC-209819](https://bugs.mojang.com/browse/MC-209819) - Server crash when pathfinding to player that is teleporting away
-   [MC-211601](https://bugs.mojang.com/browse/MC-211601) - Entities are loaded after scheduled ticks are processed causing detector rails, pressure plates, etc. to turn off
-   [MC-212142](https://bugs.mojang.com/browse/MC-212142) - Applying glow ink on signs doesn't render the text bright without also having applied a custom color
-   [MC-212146](https://bugs.mojang.com/browse/MC-212146) - Glow lichen can generate floating inside underground structures
-   [MC-212207](https://bugs.mojang.com/browse/MC-212207) - Geodes generating inside icebergs
-   [MC-213062](https://bugs.mojang.com/browse/MC-213062) - A ruined portal generated in an end portal
-   [MC-213799](https://bugs.mojang.com/browse/MC-213799) - Dripleaf isn't properly held in the player's hand
-   [MC-214057](https://bugs.mojang.com/browse/MC-214057) - Entities no longer showing flame animation when in water/lava at the same time
-   [MC-214636](https://bugs.mojang.com/browse/MC-214636) - Small dripleaf leafs can overlap each other and cause z-fighting
-   [MC-214684](https://bugs.mojang.com/browse/MC-214684) - Azaleas cannot be placed in flower pots
-   [MC-216276](https://bugs.mojang.com/browse/MC-216276) - Lava pools break bedrock with custom world generation
-   [MC-218112](https://bugs.mojang.com/browse/MC-218112) - SynchedEntityData is using locks incorrectly
-   [MC-218831](https://bugs.mojang.com/browse/MC-218831) - Lots of missing shaders in the game assets
-   [MC-218972](https://bugs.mojang.com/browse/MC-218972) - The glowing effect outline omits parts of entities if the entity is invisible
-   [MC-219762](https://bugs.mojang.com/browse/MC-219762) - More performant noise blending algorithm in BlendedNoise
-   [MC-221554](https://bugs.mojang.com/browse/MC-221554) - When searching, the goat spawn egg appears in the middle of the different boat types
-   [MC-221820](https://bugs.mojang.com/browse/MC-221820) - Inconsistency: Enderman is able to pick up flowering azalea, while unable to hold normal azalea bush.
-   [MC-223021](https://bugs.mojang.com/browse/MC-223021) - glShaderSource fails on some AMD drivers resulting in a crash on 1.17
-   [MC-223843](https://bugs.mojang.com/browse/MC-223843) - Mycelium inside enderman_holdable.json twice
-   [MC-224159](https://bugs.mojang.com/browse/MC-224159) - Absorbtion hearts don't have the wither heart effect
-   [MC-224445](https://bugs.mojang.com/browse/MC-224445) - Reloading resource packs with fabulous graphics causes screen to become black, after a few times causes crash for AMD drivers
-   [MC-224778](https://bugs.mojang.com/browse/MC-224778) - Game crashes when there is a block with no facing block state in #wall_corals and a warm ocean tries to generate
-   [MC-224861](https://bugs.mojang.com/browse/MC-224861) - Falling blocks disappear for a moment when landing
-   [MC-224862](https://bugs.mojang.com/browse/MC-224862) - Azalea and Flowering Azaleas can take bone meal despite being on clay
-   [MC-225010](https://bugs.mojang.com/browse/MC-225010) - Closing the inventory in creative mode while having an item on the cursor turns it into a ghost item
-   [MC-225129](https://bugs.mojang.com/browse/MC-225129) - Players do not despawn until they respawn
-   [MC-225193](https://bugs.mojang.com/browse/MC-225193) - Goats will attempt to ram entities that are outside of the world border
-   [MC-225315](https://bugs.mojang.com/browse/MC-225315) - Selected text on signs blinks
-   [MC-225404](https://bugs.mojang.com/browse/MC-225404) - The axe is still an appropriate tool for moss carpets
-   [MC-225722](https://bugs.mojang.com/browse/MC-225722) - java.lang.IllegalArgumentException: bound must be positive
-   [MC-225773](https://bugs.mojang.com/browse/MC-225773) - Axolotls can make ambient noises when they're playing dead
-   [MC-225843](https://bugs.mojang.com/browse/MC-225843) - Snow layers can still generate floating over lakes
-   [MC-225850](https://bugs.mojang.com/browse/MC-225850) - Grass, tall grass, flower, double flower, fern, large fern and tree can generate on sand or gravel
-   [MC-225853](https://bugs.mojang.com/browse/MC-225853) - Minecraft sometimes crashes when trying to start 21w20a for the first time
-   [MC-225895](https://bugs.mojang.com/browse/MC-225895) - Floating grass can still generate above lava lakes
-   [MC-225916](https://bugs.mojang.com/browse/MC-225916) - Non-waxed oxidized copper blocks don't require at least stone tier to be mined
-   [MC-225919](https://bugs.mojang.com/browse/MC-225919) - Coal Ore from fossils can generate through bedrock
-   [MC-225929](https://bugs.mojang.com/browse/MC-225929) - Item statistic sorting not functioning
-   [MC-225978](https://bugs.mojang.com/browse/MC-225978) - Non-waxed weathered copper blocks appear twice in needs_stone_tool.json
-   [MC-226192](https://bugs.mojang.com/browse/MC-226192) - Crash upon attempting to create a new scoreboard objective: java.lang.NullPointerException: Cannot invoke "String.toLowerCase(java.util.Locale)" because "â˜ƒ" is null

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the \"Installations\" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/80a01a1178bcfb67b42636df3a9cdd275f3cc4d4/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
