---
title: "Minecraft: Java Edition - 1.20.2"
date: 2023-09-21T15:13:30Z
updated: 2023-09-21T15:13:36Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19703470383757-Minecraft-Java-Edition-1-20-2
---

We're now releasing 1.20.2 for Minecraft: Java Edition. This release comes with more diamond ore in the deep regions of the world and changes to mob attack reach as well as optimizations to the game's networking performance enabling smoother online play even on low-bandwidth connections.

This release also includes new features for map makers and pack creators like macro functions, a random command and pack overlays.

With 1.20.2, we are making some important updates to our Player Reporting Tool to better protect the online safety of our players. You will now be able to report player skins and usernames that violate our Community Standards.

The optional Villager Trade Rebalance Experiment also makes its debut in this version with changes to trades in the making that you can try out.

## NEW FEATURES

### PLAYER SKIN & NAME REPORTING

We are making some important updates to our Player Reporting Tool to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single player mode will still be accessible. To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated [FAQ page](https://help.minecraft.net/hc/en-us/articles/7317376541197).

- Player Skins and Names can now be reported in the Social Interactions Screen
- If a skin or name is reported, and found to be violating the [Community Standards](https://www.minecraft.net/community-standards), our team of human moderators can action in a few ways:
  - Ban the skin from being used by any player
  - Ban the name from being used by any player
  - Suspend the player from online play in the case of repeated offences
- When a skin is banned, players with that skin:
  - Will have their skin removed
  - Will be notified when they launch the game
  - Will be automatically assigned one of the default skins
  - Can still play multiplayer and singleplayer
  - Can select a new custom skin at any time
- When a player's name is banned, that player:
  - Will need to choose a new name
  - Will be notified when they launch the game
  - Will not be able to play online until they change their name
  - Can still play singleplayer
- A skin or name that has been banned cannot be used by any player in the future

## CHANGES

- The calculations to determine whether a mob can attack a player or other mobs have been changed
- Diamond Ore is now generated more frequently in the Deepslate layers of the Overworld
- Optimizations to networked play
- Curing a Zombie Villager now only gives a big discount the first time
  - There is no longer a bonus discount for reinfecting and curing the same Villager multiple times
- Sponges and Wet Sponges now have their own custom sounds
- Barrier blocks can now be waterlogged by players in Creative mode
  - Water cannot be placed in them or taken out by non-direct interactions such as Dispensers
- The positions that all entities ride on other entities have been adjusted to make more sense
- Added the "Narrator Hotkey" accessibility option (default on)
  - The narrator can be toggled on and off with Ctrl+B when this is on
- Added "I want to report them" Player Reporting category
- Removed Herobrine

### MOB ATTACK REACH CHANGES

The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.

Here are some situations where the new rules will affect the reach of mobs:

- If a mob is entirely below you, or entirely above you, it will not be able to reach you
- While riding on a medium-sized mob, like a Horse, you will be protected from small mobs, like Baby Zombies
- While riding on a tall mob, like a Camel, you will be protected from standard-size mobs, like Zombies
- Also, Ravagers won't be able to attack you through a few block thick walls anymore
- However, to escape from an Enderman, you need to be at least 3 blocks above the ground, not 1.5 as before
- Mobs will be able to attack you with the bottom of their hitbox, assuming your head is in range
- Builds that trap hostile mobs might need to be adjusted to be safe

This change does not affect the reach of players, and mobs still need to see their target to attack it.

### NETWORKED PLAY

The Multiplayer mode of the game has been optimized to enable more fluid online play. If you have previously experienced disconnections or slow loading into online servers, this version may significantly improve that experience.

- The game world will now show earlier instead of the loading screen while loading into a world on a server
- Clients with extremely low-bandwidth connections will not time out while loading the world
- Clients with low-bandwidth connections can interact with the world while some chunks are still loading

### VIBRATIONS

- Vibrations no longer risk being lost on simulation distance limit
- Using Bone Meal emits an item_interact_finish vibration of frequency 3
- Unequipping items emits a new unequip vibration of frequency 4
- Camels eating Cactus emit an eat vibration of frequency 8
- Carrots being eaten by Rabbits emit a block_change vibration of frequency 11
- Sweet Berries being eaten by Foxes emit a block_change vibration of frequency 11
- Chiseled Bookshelves emit a block_change vibration of frequency 11 when receiving books from Hoppers
- Turtle Eggs cracking emit a block_change vibration of frequency 11
- Turtle Eggs hatching emit a block_destroy vibration of frequency 12
- Fire being doused by Water Potion emits a block_destroy vibration of frequency 12
- Evokers evoking Vexes or Fangs emit an entity_place vibration of frequency 14

### MISCELLANEOUS MINOR TWEAKS

- Chorus Flower no longer provides support for hanging or standing blocks
- Updated structure icons on Explorer Maps sold by Cartographers
- When Villagers unlock new trades, the order of those trades in the UI is now always random instead of sometimes being deterministic
- The sizes of text fields in the user interface are now consisent with the size of buttons

## TECHNICAL CHANGES

- The resource pack version is now 18
- The data pack version is now 18
- History of used commands is now saved and accessible across worlds
- Optimized networking to improve the experience on low bandwidth connections
- Added support for multi-version packs
- Changed network protocol to allow for more data-driven content in the future
- Added new log-ips option to server.properties
- Added validation for symbolic links in datapacks and resource packs
- When hitboxes are displayed through F3+B, entities that have a passenger will display the passenger's attachment point
- The charts on the debug screen can now be toggled with F3+1 (pie chart) and F3+2 (FPS and TPS) instead of holding Shift or Alt while opening the screen
- Pressing F3+3 will now show charts for ping and received network traffic on the debug screen
- The LWJGL library has been upgraded to version 3.3.2
- The default Java version shipped with the game has been upgraded to Microsoft OpenJDK 17.0.8

### COMMAND HISTORY

- The last 50 commands that you sent in chat will be remembered across game sessions
- You can access the command and chat history by pressing up or down arrows in the chat
- Regular chat is only persisted within the same game session (leaving a server or world clears them)
- Recent commands are stored in command_history.txt in the game folder

### NETWORK OPTIMIZATIONS

- Gameplay packets are now packed into bigger TCP packets to reduce overhead from TCP headers, significantly reducing network usage
- Chunks are not sent over the network to the client in one big continuous batch anymore
- Chunks are instead sent in smaller batches depending on the available bandwidth, meaning that:
  - Clients with extremely low-bandwidth connections will not time out while loading the world
  - Clients with low-bandwidth connections can interact with the world while some chunks are still loading
- Only chunks within the client's render distance are now sent

### MULTI-VERSION PACKS

New features have been added to datapacks and resource packs to allow creation of packs that are compatible with multiple versions of game.

#### PACK METADATA

- Pack metadata now includes an optional field supported_formats which describes a range for pack formats that this pack supports
  - Examples: 16, \[16,17\], {"min_inclusive": 16, "max_inclusive": 17}
- pack_format field is still required and its format remains unchanged, to allow older game versions to read pack data
  - If supported_formats is present, it must contain the value declared in pack_format
  - Note: since this new information is ignored by older versions of the game, they will always see a "normal", single-version pack, without any extended compatibility

#### OVERLAYS

- Packs can now contain overlay directories ("overlays")
- Overlays are sub-packs applied over the "normal" contents of a pack
  - These directories have the same layout as the top-level pack, including the assets and data directories
  - Overlays can be applied if they support the client's pack format
  - Overlays can add and replace files, but not remove them
    - For example, if the overlay foo is applied, the file foo/assets/minecraft/textures/bar.png will replace the contents of assets/minecraft/textures/bar.png
  - pack.mcmeta and pack.png are ignored in overlay directories
- New section called overlays have been added to pack metadata
  - It contains an entries field, containing a list of overlays
  - Every overlay entry has two fields:
    - formats - range of supported formats
    - directory - overlay directory (allowed characters: a-z, 0-9, \_ and -)
- Order of application: overlays are stacked from the bottom to top of the list
  - For example, if a pack has two overlays: "entries": \[{"directory":"A", ...}, {"directory":"B", ...}\], the game will first look in B, then A and then in the top pack directory

### SYMBOLIC LINK VALIDATION

To improve safety, the game will now also detect symbolic links used inside data- and resource packs.

- This feature expands on symbolic link validation in worlds added in the previous release
- The game will now warn users if a pack added via drag and drop contains disallowed symbolic links
- Packs containing disallowed symbolic links will not be visible in UI and commands
- Additionally, directories and files that are not recognized as packs will no longer be copied via drag and drop
- For a detailed explanation, see this [help article](https://aka.ms/MinecraftSymLinks)

### NETWORK PROTOCOL

As part of ongoing work towards more data-driven features, the network protocol has been changed to include a new configuration phase.

- Configuration phase automatically starts after login phase (i.e. after client account has been verified) and lasts until the player joins the world (play phase)
- Clients can stay in configuration phase indefinitely - it's up to the server to release it to the world
- Servers can also request clients to re-enter the configuration phase after it has entered the play phase
  - Other players will see such clients as disconnected
- Users in configuration phase will not be visible on the player list
- Actions allowed in configuration phase (moved from play phase):
  - Configuration of data-driven registries
  - Configuration of enabled features
- Actions shared between configuration and play phases:
  - Application of server resource packs
  - Update of tags
  - Exchange of custom packets
  - Ping and keep-alive packets
  - Sending of client options
- The server will now negotiate resource packs in the configuration phase
  - This means that the player will no longer be in the world when answering prompts and reloading resources

#### SECURE CHAT

- Clients will no longer disconnect themselves when receiving an invalid chat message
  - A placeholder message will instead be shown in chat

### SERVER.PROPERTIES

- New option: log-ips (default true)
  - When set to false, will prevent player IPs from being included in the log when players join the game

### TELEMETRY

- Added a button to the Telemetry Data Collection Screen that links to the Microsoft Privacy Statement

## RESOURCE PACK VERSION 16

- The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.2) tool
- All textures containing multiple sprites in a sheet for GUI have been split into individual sprites under textures/gui/sprites (automated by the Slicer tool)
- All textures in the realms namespace have been moved into the minecraft namespace (automated by the Slicer tool)
- villager2.png has been renamed to villager.png (automated by the Slicer tool)
- icon/trial_available and realm_status/expires_soon GUI sprites are animated with .mcmeta declarations instead of individual sprites (automated by the Slicer tool)
- The Bundle tooltip background is now drawn as a nine-sliced sprite
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

- Any sprite used in the GUI can now be animated using .mcmeta files, similar to other atlases
  - icon/trial_available and realm_status/expires_soon are now animated this way
- Sprites in the gui atlas can now configure scaling behavior through a new gui section in .mcmeta files
  - For example, button textures must be scaled based on how big the button should be
  - The gui section in .mcmeta contains one scaling field:
    - type: one of: stretch (default), tile, or nine_slice
    - When stretch, the sprite will be stretched across the desired space
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

## RESOURCE PACK VERSION 17

- The text field background is now a nine-sliced sprite at widget/text_field and widget/text_field_highlighted
- The scroll bar in lists and text fields is now a nine-sliced sprite at widget/scroller

## RESOURCE PACK VERSION 18

- The map_icons.png texture now contains new icons

## DATA PACK VERSION 16

- Gamerule randomTickSpeed now affects the rate of accumulation of Snow and Ice the same way it affects crops and other blocks affected by random ticking
- Added a random command
- Added support for function macros
- Changed Display entities' post-teleport interpolation
- Added new attribute generic.max_absorption
- Renamed belowName value in display slot argument in scoreboard command to below_name
- Game event changes
- New tags

### COMMANDS

#### RANDOM

A new command for randomizing values and controlling random sequences. The value and roll forms can be used to draw a random value. In the case of roll, the resulting value is also shown in chat for all players.

Syntax:

    random value|roll <range> [<sequenceId>]
    random reset *|<sequenceId> [<seed>] [<includeWorldSeed>] [<includeSequenceId>]

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

### FUNCTIONS

- A single backslash \\as the last non-whitespace character of a line now allows a command to be continued on the next line
  - Leading and trailing whitespace of the following line are stripped before appending

#### MACROS

Functions can now contain macro lines, making them Function Macros.

- Any line beginning with \$ (as the first non-space character) marks a macro line
- A macro line also contains one or more substitutions in the form of \$(variable)
- When calling a function macro a compound with data for all argument variables must be provided

##### Calling Function Macros

The function command has new forms:

function \<id\> \<compound\>function \<id\> with \<data source\> \[\<path\>\]

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
  - The new behavior is similar to Armor Stands, mobs and players
- On the server, position and rotation are still updated immediately
- The duration of this interpolation is controlled by the field teleport_duration
  - 0 means that updates are applied immediately
  - 1 means that the Display Entity will move from current position to the updated one over one tick
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

## DATA PACK VERSION 17

- Changed mob effect storage on items, entities and block entities
- Added decal field to armor trim patterns (default: false)
  - If true, the pattern texture will be masked based on the underlying armor

### MOB EFFECT STORAGE CHANGES

- The game no longer uses numeric values when storing mob effects to a world (so, for example, 4 becomes minecraft:mining_fatigue)
- Various mob effect fields have been renamed for consistency with new structures

#### MOB EFFECT INSTANCE

This structure is used in many places, so its changes are described separately.

- Id -\> id, also changed from number to string id
- Ambient -\> ambient
- Amplifier -\> amplifier
- Duration -\> duration
- ShowParticles -\> show_particles
- ShowIcon -\> show_icon
- HiddenEffect -\> hidden_effect, also since it's mob effect instance, changes apply recursively
- FactorCalculationData -\> factor_calculation_data

#### ITEMS

##### potion, lingering_potion, splash_potion, tipped_arrow

- CustomPotionEffects -\> custom_potion_effects, contents tranformed as a list of mob effect instances

##### suspicous_stew

- Effects -\> effects, for each entry:
  - EffectId -\> id, also changed from number to string id
  - EffectDuration -\> duration

#### ENTITIES

##### mooshroom

- Removed EffectId and EffectDuration
- Added stew_effects with the same format as suspicious_stew.effects tag (i.e. list of effect id and duration)

##### area_effect_cloud

- Effects -\> effects, contents tranformed as a list of mob effect instances

##### arrow

- CustomPotionEffects -\> custom_potion_effects, contents tranformed as a list of mob effect instances

##### Players, Armor Stands and mobs

- ActiveEffects -\> active_effects, contents tranformed as a list of mob effect instances

#### BLOCK ENTITIES

beacon

- Primary -\> primary_effect, also changed from number to string id
- Secondary -\> secondary_effect, also changed from number to string id

### LOOT TABLES

- Added sequence loot function
  - Contains 1 field:
    - functions: an array of sub-functions to run in sequence
  - Can also be declared as an inline array without a type
    - This matches the existing behavior where loot function JSON files can be declared as an array of composite functions
- all_of predicates in loot tables can now be declared implicitly as an inline array without a type
  - This similarly matches the existing behavior where loot predicate JSON files can be declared as an array of sub-predicates
- Block or fluid state property matchers in loot conditions no longer accept non-string values
  - Any number or boolean value in a property matcher must be quoted

## DATA PACK VERSION 18

This data pack version removes the execute if function and return run functionality that existed for a time during the development of this version. Flaws with those commands (see bugs [MC-264595](https://bugs.mojang.com/browse/MC-264595), [MC-264699](https://bugs.mojang.com/browse/MC-264699) and [MC-264710](https://bugs.mojang.com/browse/MC-264710)) require some substantial changes to fix, which we do not want to make close to a release.

These commands will instead be reintroduced early in the next snapshot series when we can take the time to iterate on and test them together with pack makers.

- Removed execute if\|unless function command form
- Removed return run command form
- Numbers used as macro arguments are now always inserted without suffixes, regardless of numeric type
- Added game rule enderPearlsVanishOnDeath, controlling whether thrown Ender Pearls vanish when the player that threw them dies (default true, which matches the existing behavior in previous versions)
- Added damage type tag always_kills_armor_stands for damage types that should always fully kill an Armor Stand

## EXPERIMENTAL FEATURES

### VILLAGER TRADE REBALANCE

The Experiments screen when creating a world now has an option to enable the Villager Trade Rebalance. When this option is selected, some Villager trades will change.

This experiment has no effect on normal worlds. You can find more information about Feature Toggles [here](https://www.minecraft.net/article/testing-new-minecraft-features/feature-toggles-java-edition).

#### LIBRARIAN CHANGES

- Librarians from different biomes now sell different Enchanted Books
- Each village biome has one special enchantment that is only available from Master Librarians with full XP
- This means that players must visit all seven village biomes to get the full set of villager enchantments
- There are two secret village biomes where villages do not generate
  - A player must build these villages to access their trades!
- Some enchantments have been removed from village trading and must be found in other ways

#### CARTOGRAPHER CHANGES

- Cartographers can now sell seven new Explorer Maps
  - Five new maps show the way to five different types of village
  - The other two new maps show the way to a Swamp Hut and a Jungle Temple
- Cartographers from different biomes now sell a different range of maps

#### WANDERING TRADER CHANGES

- Wandering Traders now have lower prices and have a higher amount of each item in stock
- Wandering Traders now sell Logs
- Wandering Traders can now buy many items, instead of only selling

#### ARMORER CHANGES

- Armorer from different biomes now sell different Armor with different enchantments
- Buying Diamond Armor now requires a small amount of Diamonds as well as Emeralds
- Many other Armorer trades have been updated

#### STRUCTURE LOOT

Certain Enchanted Books now have a high chance of generating in some structures:

- Ancient Cities: Mending
- Mineshafts: Efficiency (I to V)
- Pillager Outposts: Quick Charge (I to III)
- Desert Temples: Unbreaking (I to III)
- Jungle Temples: Unbreaking (I to III)

## FIXED BUGS IN 1.20.2

Around 200 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27828).

## GET THE RELEASE

To install the Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and click play! Make sure your Launcher is set to the "Latest Release” option.

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/5b868151bd02b41319f54c8d4061b8cae84e665c/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
