---
title: "Minecraft: Java Edition Snapshot - 23w31a"
date: 2023-08-17T13:59:05Z
updated: 2025-02-27T13:42:06Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/18619031671821-Minecraft-Java-Edition-Snapshot-23w31a
hash:
  01H81WP00H69K74RVYDZ4SGG2H: changes
  01H81WP00HPQBRW4W4WJD85P9N: diamond-ore-distribution
  01H81WP00HV3NSP5YJE91GJ5Y3: technical-changes
  01H81WP00HB7YPXXCZARH3HMJA: command-history
  01H81WP00HZJ68EFEW1R3CNK7Y: chunk-sending-optimization
  01H81WP00HBGMWV4A0341YTC17: multi-version-packs
  01H81WP00H414406S4SF6AG1ES: pack-metadata
  01H81WP00HK065B1Q26GNY26GJ: overlays
  01H81WP00H0HNSY9AYCJPZJA4P: network-protocol
  01H81WP00JPNEHXK7YTYKCXJD6: serverproperties
  01H81WP00J61Y9QABBWNSHTKKR: symbolic-link-validation
  01H81WP00J97SBKC5E5DQN4G4B: telemetry
  01H81WP00JJ5D6TJ6PGXFZCQNC: resource-pack-version-16
  01H81WP00JHG3CV5BK2WAG3C4W: gui-sprite-sheet
  01H81WP00J5F9EJQTBQZK50KQP: gui-sprite-mcmeta
  01H81WP00JXSK3K19X8HM0PAKN: data-pack-version-16
  01H81WP00JRQT88EMM27MH5VF2: commands
  01H81WP00JCM55R0YR9TD43XVS: random
  01H81WP00JSCAD60RT95BNC7N6: execute-if-function
  01H81WP00J2FH456GEKQ47SR8S: matching
  01H81WP00JKMXGBKSGKEVA6PA4: return-run
  01H81WP00JM92RXA8D8TQ6RSBE: functions
  01H81WP00JHNEW905527Q9FEC5: macros
  01H81WP00JCEH6X6RS2MJ4MEPC: calling-function-macros
  01H81WP00JC1NABZSMHRDPAG0Z: performance-considerations
  01H81WP00JHJDKR4WXG1B0H8PT: display-entity-interpolation
  01H81WP00JE8W84G0B6TZ5F8C4: attributes
  01H81WP00J07S9T4VRH3VNQ8W8: game-events
  01H81WP00J5HM7D27VYD9YXK84: tags
  01H81WP00JCD0ZX9FSVGRK6Z4X: fixed-bugs-in-snapshot-23w31a
  01H81WP00KMJM2PG41GT54SEM5: get-the-snapshot
---

I was personally quite convinced that the game was already perfect, but it seems that our developers disagree.

We are now releasing the first snapshot for Minecraft 1.20.2!

This snapshot brings changes to Diamond Ore generation, the ability to waterlog Barriers, and a change to Villager curing. It also brings a new Experimental Toggle that updates Villager trading, which we are eager to hear your feedback on. As well as a big batch of bug fixes, you will find a whole lot of technical features and changes in this snapshot, including new commands, function macros, persistent command history, network performance improvements, and much more.

Happy mining!

# NEW EXPERIMENTAL FEATURES IN 23W31A

## VILLAGER TRADE REBALANCE

This snapshot introduces a new experimental Feature Toggle that updates the Wandering Trader and Librarian trades. You must turn on this Feature Toggle in the Experiments Menu when creating a new world if you want to test the new trades. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

As this is an experiment, we would really appreciate your feedback as work continues and to help us decide on the future direction for Villager trades. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts!

### LIBRARIAN CHANGES

Before these changes, players could get any village enchantment from any Librarian. A novice Librarian could sell the best enchantment in the game! For some players, this felt too random and made trading feel overpowered when compared to using the Enchanting Table or searching for Enchanted Books in structures.

With the new rules, Librarians from different biomes sell different enchantments, and each village biome has one enchantment that is only sold by master Librarians.

Players will have to work towards getting the best trades instead of relying on random chance. We hope this makes Librarian trading more interesting and skillful, while also revealing some clues about their history of each village type through the enchantments that are sold there.

- Librarians from different biomes now sell different Enchanted Books
- Each village biome has one special enchantment that is only available from Master Librarians with full XP
- This means that players must visit all seven village biomes to get the full set of villager enchantments
- There are two secret village biomes where villages do not generate
  - A player must build these villages to access their trades!
- Some enchantments have been removed from village trading and must be found in other ways

### WANDERING TRADER CHANGES

Some players felt that the Wandering Trader had unfair prices and didn't sell many useful items. We have lowered their prices, added more trades and increased the amounts available. The Wandering Trader will also now buy useful items from players, so it's possible to help them on their journey by giving them supplies even if you don't feel like buying anything.

- Wandering Traders now have lower prices and have a higher amount of each item in stock
- Wandering Traders now sell Logs
- Wandering Traders can now buy many items, instead of only selling

# CHANGES

- Diamond Ore is now generated more frequently in the Deepslate layers of the Overworld
- Curing a Zombie Villager now only gives a big discount the first time
  - There is no longer a bonus discount for reinfecting and curing the same Villager multiple times
- Barrier blocks can now be waterlogged by players in Creative mode
  - Water cannot be placed in them or taken out by non-direct interactions such as Dispensers
- Players will no longer be able to crouch while riding vehicles
- Chorus Flower no longer provides support for hanging or standing blocks

## DIAMOND ORE DISTRIBUTION

In this snapshot, we have increased the amount of Diamond Ore found in the deepest parts of the world. Our goal is to make it more rewarding to mine for Diamonds in the Deepslate layers. We want your feedback on this! Please try out your favorite mining technique and let us know how it feels on [this feedback site](https://aka.ms/OreDistributionFeedback).

# TECHNICAL CHANGES

- The resource pack version is now 16
- The data pack version is now 16
- History of used commands is now saved and accessible across worlds
- Optimized the way chunks are sent to clients to allow players with low-bandwidth internet connections to play on multiplayer servers
- Added support for multi-version packs
- Changed network protocol to allow for more data-driven content in the future
- Added new log-ips option to server.properties
- Added validation for symbolic links in datapacks and resource packs
- When hitboxes are displayed through F3+B, entities that have a passenger will display the passenger's attachment point

## COMMAND HISTORY

- The last 50 commands that you sent in chat will be remembered across game sessions
- You can access the command and chat history by pressing up or down arrows in the chat
- Regular chat is only persisted within the same game session (leaving a server or world clears them)
- Recent commands are stored in command_history.txt in the game folder

## CHUNK SENDING OPTIMIZATION

- Chunks are no longer sent over the network to the client in one big continuous batch
- They are instead sent in smaller batches depending on the available bandwidth. This means that:
  - Clients with extremely low-bandwidth connections will not time out while loading the world
  - Clients with low-bandwidth connections can interact with the world while some chunks are still loading
- Only chunks within the client's render distance are now sent

## MULTI-VERSION PACKS

New features have been added to datapacks and resource packs to allow creation of packs that are compatible with multiple versions of game.

### PACK METADATA

- Pack metadata now includes an optional field supported_formats which describes a range for pack formats that this pack supports
  - Examples: 16, \[16,17\], {"min_inclusive": 16, "max_inclusive": 17}
- pack_format field is still required and its format remains unchanged, to allow older game versions to read pack data
  - If supported_formats is present, it must contain the value declared in pack_format
  - Note: since this new information is ignored by older versions of the game, they will always see a "normal", single-version pack, without any extended compatibility

### OVERLAYS

- Packs can now contain overlay directories ("overlays")
- Overlays are sub-packs applied over the "normal" contents of a pack
  - These directories have the same layout as the top-level pack, including the assets and data directories
  - Overlays can be applied if they support the client's pack format
  - Overlays can add and replace files, but not remove them
    - For example, if the overlay foo is applied, the file foo/assets/minecraft/textures/bar.png will replace contents of assets/minecraft/textures/bar.png
  - pack.mcmeta and pack.png are ignored in overlay directories
- New section called overlays have been added to pack metadata
  - It contains an entries field, containing a list of overlays
  - Every overlay entry has two fields:
    - formats - range of supported formats
    - directory - overlay directory (allowed characters: a-z, 0-9, \_ and -)
- Order of application: overlays are stacked from the bottom to top of the list
  - For example, if a pack has two overlays: "entries": \[{"directory":"A", ...}, {"directory":"B", ...}\], the game will first look in B, then A and then in the top pack directory

## NETWORK PROTOCOL

As part of ongoing work towards more data-driven features, the network protocol has been changed to include a new configuration phase.

- Configuration phase automatically starts after login phase (i.e. after client account has been verified) and lasts until the player joins the world (play phase)
- Clients can stay in configuration phase indefinitely - it's up to server to release it to the world
- Servers can also request clients to re-enter the configuration phase after it has entered the play phase
  - Other players will see such clients as disconnected
- Users in configuration phase will not be visible on the player list
- Actions allowed in configuration phase (moved from play phase)
  - Configuration of data-driven registries
  - Configuration of enabled features
- Actions shared between configuration and play phases:
  - Application of server resource packs
  - Update of tags
  - Exchange of custom packets
  - Ping and keep-alive packets
- The server will now negotiate resource pack in the configuration phase
  - This means that the player will no longer be in world when answering prompts and reloading resources

## SERVER.PROPERTIES

- New option: log-ips (default true)
  - When set to false, will prevent player IPs from being included in the log when players join the game

## SYMBOLIC LINK VALIDATION

To improve safety, the game will now also detect symbolic links used inside data- and resource packs.

- This feature expands on symbolic link validation in worlds added in the previous release
- The game will now warn users if a pack added via drag and drop contains disallowed symbolic links
- Packs containing disallowed symbolic links will not be visible in UI and commands
- Additionally, directories and files that are not recognized as packs will no longer be copied via drag and drop
- For a detailed explanation, see this [help article](https://aka.ms/MinecraftSymLinks)

## TELEMETRY

- Added a button to the Telemetry Data Collection Screen that links to the Microsoft Privacy Statement

## RESOURCE PACK VERSION 16

- The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1) tool
- All textures containing multiple sprites in a sheet for GUI have been split into individual sprites under textures/gui/sprites (automated by Slicer tool)
- All textures in the realms namespace have been moved into the minecraft namespace (automated by Slicer tool)
- villager2.png has been renamed to villager.png (automated by Slicer tool)
- icon/trial_available and realm_status/expires_soon GUI sprites are animated with .mcmeta declarations instead of individual sprites (automated by Slicer tool)
- The bundle tooltip background is now drawn as a nine-sliced sprite
- The icons for the Accessibility, Language, Realms News buttons have been split from their underlying button texture
- The Realms Invite button is now drawn as an overlay on the normal button texture
  - The highlighted texture state for this button has been removed
- The highlighted states for Realms invitation number icons have been removed
- The exclamation marks on the notification\more.png have been removed

### GUI SPRITE SHEET

- Sprites used in GUI drawing have been split into individual sprite files instead of larger sprite sheets
  - For example, widgets/button.png and widgets/button_highlighted.png have been split from widgets.png
- Each sprite can now be individually overriden by a resource pack instead of replacing the entire sheet
- Sprites are loaded into the gui atlas from the textures/gui/sprites directory

#### GUI SPRITE .MCMETA

- Any sprite can now be animated using .mcmeta files, similar to other atlases
  - icon/trial_available and realm_status/expires_soon are now animated this way
- Sprites in the gui atlas can now configure scaling behavior through a new gui section in .mcmeta files
  - For example, button textures must be scaled based on how big the button should be
  - The gui section in .mcmeta contains one scaling field:
    - type: one of: stretch (default), tile, or nine_slice
    - When stretch, the sprite will be stretched across the desired space
      - No additional fields need to be defined
    - When tile, the sprite will be repeated across the desired space, starting from the top-left
      - width: number of pixels for this sprite to cover on-screen across its width
      - height: number of pixels for this sprite to cover on-screen across its height
    - When nine_slice, the sprite will be sliced into 4 corners, 4 edges, and 1 center slice, which will be tiled across the desired space
      - width: number of pixels for this sprite to cover on-screen across its width
      - height: number of pixels for this sprite to cover on-screen across its height
      - border: the size in pixels that the border slices should cover on-screen, one of:
        - Constant integer for uniform border size on all sides
        - Object containing left, top, right, and bottom

## DATA PACK VERSION 16

- Gamerule randomTickSpeed now affects the rate of accumulation of snow and ice the same way it affects crops and other blocks affected by random ticking
- Added a random command
- New form of the execute command: execute if function
- New form of the return command: return run
- Added support for function macros
- Changed Display entities post-teleport interpolation
- Added new attribute generic.max_absorption
- Renamed belowName value in display slot argument in scoreboard command to below_name
- Game event changes
- New tags

### COMMANDS

#### RANDOM

A new command for randomizing values and controlling random sequences. The value and roll forms can be used to draw a random value. In the case of roll, the resulting value is also shown in chat for all players.

Syntax:

random value\|roll \<range\> \[\<sequenceId\>\]\
random reset \*\|\<sequenceId\> \[\<seed\>\] \[\<includeWorldSeed\>\] \[\<includeSequenceId\>\]

Parameters:

- range: A range of values to randomize between, inclusively
  - For instance, 1..6 is a regular D6 roll
- sequenceId: The name of a random sequence to sample or reset
- seed: A seed to use for the random sequence after reset
- includeWorldSeed: A boolean \[default: true\] specifying whether to include the world seed when seeding the sequence
  - false means the sequence will evaluate to the same regardless of which world the command is run in
- includeSequenceId: A boolean \[default: true\] specifying whether to include the sequence ID when seeding the sequence
  - false means all sequences will evaluate to the same regardless of which name they have

By default, all sequences are seeded as 0, true, true. Using \* instead of a sequence ID resets all sequences and sets the default parameters.

If no seed is specified, the sequence resets to the default parameters.

Note that random value\|roll \<range\> used without a sequence id is available to non-operator players.

#### EXECUTE IF FUNCTION

A new execute sub-command that runs a function or function tag and matches the return value(s). If a tag is given, all functions run regardless of the results of prior functions. Syntax:

execute if\|unless function \<function\> \<continuation\>

Parameters:

- function: The function or tag to run

##### Matching

The matching of the result value of the function(s) that run:

- At least one of the functions must succeeed for the match to succeed
- A succeessful call is defined as a function that:
  - Uses the return command to return a value
  - The return value is not 0

#### RETURN RUN

A new form of the return command is now available, return run. Syntax:

return run \<command\>

This takes the result value from running the specified command and returns that as the return value of the function. In all other aspects, it works like return with a specified return value.If the given command fails, the return value is 0.

### FUNCTIONS

- A single backslash \\ as the last non-whitespace character of a line now allows a command to be continued on the next line
  - Leading and trailing whitespace of the following line are stripped before appending

#### MACROS

Functions can now contain macro lines, making them Function Macros.

- Any line beginning with \$ (as the first non-space character) marks a macro line
- A macro line also contains one or more substitutions in the form of \$(variable)
- When calling a function macro a compound with data for all argument variables must be provided

##### Calling Function Macros

The function command has new forms:

function \<id\> \<compound\>

function \<id\> with \<data source\> \[\<path\>\]

New Arguments:

- compound: A data compound, enclosed in {}
- data source: A data source specification, like what could already be used for data get
- path: An NBT path specification

Notes:

- The data source and path must specify a compound data entry
- The compound must contain one entry for each variable used in the macro
- More data may be present in the compound and if so is ignored
- Calling a non-macro function with a data compound is silently ignored
- When a macro is called, the values provided are substituted in place of the variable specifications and the resulting commands are executed
- Any syntax errors in the lines resulting from variable substitution result in the entire function call being skipped

##### Performance Considerations

Using a macro means commands must be re-evaulated after variable substitution. This has an extra cost compared to running pre-parsed functions.

Regular commands (non-macro lines) are still pre-parsed. Only commands with variable substitutions in them are parsed when a macro is called and the game will attempt to cache the result of a certain parameter set being used in a call.

This makes repeated calls with the same parameter set cheaper than new calls with different parameters, but an overhead still remains compared to regular functions. Note that only the values references by macro as parameters are included in this cache, so any extra data in the provided compound is ignored.

### DISPLAY ENTITY INTERPOLATION

- Display entities now start updating their client-side position and rotation on the first tick after an update
  - In previous versions, updates were applied in the same tick, causing uneven motion
  - New behavior is now similar to armor stands, mobs and players
- On the server, position and rotation are still updated immediately
- Duration of this interpolation is controlled by the field teleport_duration
  - 0 means that updates are applied immediately
  - 1 means that the display entity will move from current position to the updated one over one tick
  - Higher values spread the movement over multiple ticks
  - Please note that this value is clamped to avoid glitches due to periodic position updates
  - The new value will apply only to position and rotation changes made after it changed
    - That means any current movement will continue unchanged
- Note: behavior while riding remains unchanged from previous versions

### ATTRIBUTES

- Added new attribute generic.max_absorption
  - generic.max_absorption acts similar to generic.max_health, but instead of being the upper bound for Health, it is the upper bound for AbsorptionAmount
  - The mob effect absorption increases generic.max_absorption as well as fills the AbsorptionAmount to the max when applied

### GAME EVENTS

- entity_roar and entity_shake game events have been removed and replaced with entity_action game event

### TAGS

- Added no_knockback damage type tag which causes knockback to not be caused by the damage itself
  - Used in Vanilla for damage that is caused by events, such as explosions, which apply knockback separately
- Added non_controlling_rider to represent entities that don't override their vehicles movement control
- Added concrete_powder block tag for Concrete Powder blocks
- Added camel_sand_step_sound_blocks block tag for blocks that produce entity.camel.step_sand sound

# FIXED BUGS IN SNAPSHOT 23W31A

- [MC-29371](https://bugs.mojang.com/browse/MC-29371) - Several buttons and icons use the old tooltip design upon being hovered over
- [MC-67532](https://bugs.mojang.com/browse/MC-67532) - Bottom 2 rows of pixels in selected hotbar slot texture don't appear in game
- [MC-69387](https://bugs.mojang.com/browse/MC-69387) - The "/item" command cannot replace items within jukeboxes
- [MC-80876](https://bugs.mojang.com/browse/MC-80876) - Entity riding vehicle has always same offset
- [MC-85582](https://bugs.mojang.com/browse/MC-85582) - Entity models in the inventory can render outside the boundaries of the black box
- [MC-93320](https://bugs.mojang.com/browse/MC-93320) - Water freezes even if randomTickSpeed is 0
- [MC-121772](https://bugs.mojang.com/browse/MC-121772) - Can't scroll while holding SHIFT on macOS
- [MC-122296](https://bugs.mojang.com/browse/MC-122296) - Horizontal scrolling does not work on Mac \[Magic Mouse\]
- [MC-122547](https://bugs.mojang.com/browse/MC-122547) - Barriers can produce fall particles
- [MC-140646](https://bugs.mojang.com/browse/MC-140646) - Text fields don't scroll while selecting text with Shift
- [MC-147766](https://bugs.mojang.com/browse/MC-147766) - Shift key stays pressed until press any other key
- [MC-164080](https://bugs.mojang.com/browse/MC-164080) - Entities riding on Ghast are partially or fully inside it
- [MC-181190](https://bugs.mojang.com/browse/MC-181190) - The discount for curing a villager is multiplied if the villager is reinfected and cured again
- [MC-190815](https://bugs.mojang.com/browse/MC-190815) - Shulker boxes don't conduct redstone when open, but don't trigger redstone updates when opened
- [MC-215768](https://bugs.mojang.com/browse/MC-215768) - Sculk sensors do not detect turtles clearing away sand
- [MC-228420](https://bugs.mojang.com/browse/MC-228420) - World not loading / falling through the world when joining a server / travelling between dimensions / respawning
- [MC-230732](https://bugs.mojang.com/browse/MC-230732) - Minecraft local difficulty setting is calculated/displayed wrongly when running a world in a server
- [MC-232840](https://bugs.mojang.com/browse/MC-232840) - Baby zombie legs clip through heads of mobs they are riding
- [MC-242076](https://bugs.mojang.com/browse/MC-242076) - The skeleton of a spider jockey sits "inside" of spider model rather than on top of the spider
- [MC-242092](https://bugs.mojang.com/browse/MC-242092) - Texture map for magma cube (magmacube.png) has unused pixels
- [MC-242395](https://bugs.mojang.com/browse/MC-242395) - Texture map for the blaze (blaze.png) contains unused pixels
- [MC-242396](https://bugs.mojang.com/browse/MC-242396) - Texture map for armor stand (wood.png) contains unused pixels
- [MC-242397](https://bugs.mojang.com/browse/MC-242397) - Texture maps for cow, red & brown mooshroom (red/brown_mooshroom.png & cow.png) contain unused pixels
- [MC-242398](https://bugs.mojang.com/browse/MC-242398) - Texture maps for the sheep and sheep fur (sheep.png & sheep_fur.png) contain unused pixels
- [MC-242591](https://bugs.mojang.com/browse/MC-242591) - Texture maps for the Llama and Trader Llama (white/gray/creamy/brown.png) contain unused pixels
- [MC-242592](https://bugs.mojang.com/browse/MC-242592) - Texture map for the polar bear (polarbear.png) contain unused pixels
- [MC-249109](https://bugs.mojang.com/browse/MC-249109) - Sniffers, frogs, goats, and camels don't panic when attached to leads
- [MC-252231](https://bugs.mojang.com/browse/MC-252231) - Warm Frog texture has inconsistent pixels
- [MC-254100](https://bugs.mojang.com/browse/MC-254100) - Iron golem spawn rate decreased
- [MC-255967](https://bugs.mojang.com/browse/MC-255967) - Old chunks that would have Deep Dark biomes below Y=0 if generated newly doesn't completely generate; only Ancient Cities are spawned
- [MC-256466](https://bugs.mojang.com/browse/MC-256466) - Raft entities are named boats
- [MC-256482](https://bugs.mojang.com/browse/MC-256482) - Sculk sensors are not activated upon camels standing up or sitting down
- [MC-256485](https://bugs.mojang.com/browse/MC-256485) - Camels that spawn within villages can spawn inside blocks
- [MC-256641](https://bugs.mojang.com/browse/MC-256641) - Bamboo fence and fence gate aren't grouped with the other fences and fence gates in the crafting table
- [MC-256675](https://bugs.mojang.com/browse/MC-256675) - Z-fighting occurs between the legs of the camel and the texture of the saddle when it is sitting
- [MC-256690](https://bugs.mojang.com/browse/MC-256690) - Camels attempt to stand up when blocks are placed over them, causing them to take suffocation damage if blocks are at eye level
- [MC-257342](https://bugs.mojang.com/browse/MC-257342) - You get slowed down when riding a camel in a 3 block tall area
- [MC-257431](https://bugs.mojang.com/browse/MC-257431) - Bamboo fence gates utilize the wrong textures
- [MC-257628](https://bugs.mojang.com/browse/MC-257628) - Sculk sensors are not activated upon camels dashing
- [MC-258379](https://bugs.mojang.com/browse/MC-258379) - Parity issue: The locations of camels' ears differ across platforms
- [MC-258620](https://bugs.mojang.com/browse/MC-258620) - Piglins barter every 121 game ticks instead of every 120 game ticks
- [MC-259152](https://bugs.mojang.com/browse/MC-259152) - Player's model displayed in inventory while sneaking differs between the versions
- [MC-259382](https://bugs.mojang.com/browse/MC-259382) - Message "Failed to get element" is logged repeatedly when giving yourself armor with invalid trimming pattern or material
- [MC-259401](https://bugs.mojang.com/browse/MC-259401) - Lapis lazuli icons in enchanting table and smithing table are inconsistent
- [MC-259452](https://bugs.mojang.com/browse/MC-259452) - Baby Camel's laying down/getting up sounds are not sped up
- [MC-259769](https://bugs.mojang.com/browse/MC-259769) - Firework explosions no longer deal knockback to entities
- [MC-259794](https://bugs.mojang.com/browse/MC-259794) - Armor enchanted with curse of binding cannot be swapped via right-clicking in creative mode
- [MC-260054](https://bugs.mojang.com/browse/MC-260054) - Pink Petals hitbox does not adjust to contents
- [MC-260058](https://bugs.mojang.com/browse/MC-260058) - Pick Block does not work properly for blank decorated pots
- [MC-260085](https://bugs.mojang.com/browse/MC-260085) - Particles are created when using a brush on a barrier
- [MC-260096](https://bugs.mojang.com/browse/MC-260096) - Decorated pots don't have creative mode tooltips
- [MC-260485](https://bugs.mojang.com/browse/MC-260485) - The "/item" command cannot remove items within chiseled bookshelves
- [MC-260490](https://bugs.mojang.com/browse/MC-260490) - Passenger's riding position is too low for non-default-sized mobs
- [MC-260604](https://bugs.mojang.com/browse/MC-260604) - Terrible loudness following consecutive use of /fill
- [MC-260675](https://bugs.mojang.com/browse/MC-260675) - Decorated pots render blank on the first frame after being placed
- [MC-260968](https://bugs.mojang.com/browse/MC-260968) - The narrator does not narrate the word "Experimental" in the world selection screen
- [MC-261123](https://bugs.mojang.com/browse/MC-261123) - item_display entity breaks certain mobs' AI when being used as a passenger
- [MC-261182](https://bugs.mojang.com/browse/MC-261182) - Sign color looks different in world and in editing screen
- [MC-261369](https://bugs.mojang.com/browse/MC-261369) - Washed banner does not stack with blank banner
- [MC-261411](https://bugs.mojang.com/browse/MC-261411) - All Smithing Templates share the same translation key
- [MC-261420](https://bugs.mojang.com/browse/MC-261420) - Sculk sensor and calibrated sculk sensor don't detect a witch drinking a potion
- [MC-261427](https://bugs.mojang.com/browse/MC-261427) - Sculk sensors and calibrated sculk sensors don't detect totem of undying activating
- [MC-261440](https://bugs.mojang.com/browse/MC-261440) - Resizing the window makes it so you can't change names in anvils
- [MC-261611](https://bugs.mojang.com/browse/MC-261611) - Placing blocks against a waxed sign does not play the block's placement sound
- [MC-261657](https://bugs.mojang.com/browse/MC-261657) - Sculk sensor range is still spherical, creating different outputs from within a given block
- [MC-261739](https://bugs.mojang.com/browse/MC-261739) - Bamboo raft next to visually half blocks z-fights
- [MC-261965](https://bugs.mojang.com/browse/MC-261965) - The "Glow and Behold!" advancement is granted when interacting with empty signs while holding glow ink sacs, despite no glow ink sacs being consumed
- [MC-262108](https://bugs.mojang.com/browse/MC-262108) - Smithing table GUI issue with custom recipes
- [MC-262132](https://bugs.mojang.com/browse/MC-262132) - Pigstep music disc is in wrong location in the creative menu
- [MC-262295](https://bugs.mojang.com/browse/MC-262295) - Warped and Crimson hanging signs uses their respective plank sounds, despite their stripped stems having unique sounds
- [MC-262436](https://bugs.mojang.com/browse/MC-262436) - Copying a pot in creative does not save NBT data
- [MC-262442](https://bugs.mojang.com/browse/MC-262442) - Camels stand a bit too close to players that are tempting them
- [MC-262613](https://bugs.mojang.com/browse/MC-262613) - Mobs can't control some rideable mobs
- [MC-262615](https://bugs.mojang.com/browse/MC-262615) - Ridden camels need to be equipped with a saddle before they can be moved by mob control which is inconsistent with other rideable mobs
- [MC-262620](https://bugs.mojang.com/browse/MC-262620) - Llamas and trader llamas need to be tamed in order to be ridden by the mob which is inconsistent with other rideable mobs
- [MC-262636](https://bugs.mojang.com/browse/MC-262636) - Mobs with passengers that are slimes or magma cubes can't move and don't function correctly
- [MC-262638](https://bugs.mojang.com/browse/MC-262638) - When a "Size:0" slime and magma cube rides on some mobs the rendering position is too low
- [MC-262720](https://bugs.mojang.com/browse/MC-262720) - One of the pink petals' stems has an incomplete model
- [MC-262751](https://bugs.mojang.com/browse/MC-262751) - Blank decorated pot's NBT depends on method used to obtain it
- [MC-262766](https://bugs.mojang.com/browse/MC-262766) - NBSP is a valid invisible character that can be added into Book titles so that they have blank names
- [MC-262804](https://bugs.mojang.com/browse/MC-262804) - Players' swimming animations are jittery for other players
- [MC-262947](https://bugs.mojang.com/browse/MC-262947) - The "Smithing with Style" advancement doesn't grant experience upon completion
- [MC-263011](https://bugs.mojang.com/browse/MC-263011) - Sniffers can sniff out and follow players from incredibly large distances
- [MC-263049](https://bugs.mojang.com/browse/MC-263049) - Camels indefinitely dash while in lava
- [MC-263126](https://bugs.mojang.com/browse/MC-263126) - Sponges no longer make a sound when absorbing water
- [MC-263200](https://bugs.mojang.com/browse/MC-263200) - Entities riding baby sniffers render too high
- [MC-263283](https://bugs.mojang.com/browse/MC-263283) - Loading a 1.12.2 structure block with signs on 1.20 removes the text
- [MC-263313](https://bugs.mojang.com/browse/MC-263313) - You cannot use the TAB key to initially create a realm
- [MC-263322](https://bugs.mojang.com/browse/MC-263322) - When a camel walks on suspicious sand, the sound produced is "camel steps" instead of "camel sands"
- [MC-263387](https://bugs.mojang.com/browse/MC-263387) - The chat scroll bar no longer renders
- [MC-263430](https://bugs.mojang.com/browse/MC-263430) - Memory leak in TickingTracker
- [MC-263833](https://bugs.mojang.com/browse/MC-263833) - Minecraft is incorrectly assuming it is able to set the window icon on Wayland
- [MC-263879](https://bugs.mojang.com/browse/MC-263879) - Open shulker boxes transmit redstone power
- [MC-264356](https://bugs.mojang.com/browse/MC-264356) - Sniffers attached to a lead will dig in the same spot forever, ignoring "explored positions"
- [MC-264467](https://bugs.mojang.com/browse/MC-264467) - GUI texture "villager2.png" contains unused sections
- [MC-264468](https://bugs.mojang.com/browse/MC-264468) - GUI texture "legacy_smithing.png" still present in game files despite not being used anymore

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/11ef2ae139b0badda80a1ea07c2dd0cf9034a32f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
