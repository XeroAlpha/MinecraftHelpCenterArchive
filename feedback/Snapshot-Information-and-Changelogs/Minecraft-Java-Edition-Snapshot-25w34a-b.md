---
title: Minecraft Java Edition - Snapshot 25w34a+b
date: 2025-08-26T08:05:09Z
updated: 2025-09-09T11:13:43Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/39092387123469-Minecraft-Java-Edition-Snapshot-25w34a-b
hash:
  h_01K4Q2RD7FB63A36NYR71D6B04: fixed-bugs-in-25w34b
  h_01K4Q2RD7FN2J5FV5AM2Y4RCNG: new-features
  h_01K4Q2RD7F54Y3QJ0T37BF3FQC: server-code-of-conduct
  h_01K4Q2RD7FGFZAEWV621ZEZ6VS: server-setup
  h_01K4Q2RD7FP8YYA44V1FBD4N8B: changes
  h_01K4Q2RD7FY2G4CXC3JZYN01A9: the-end-light-flashes
  h_01K4Q2RD7F3ZK05BF8KZW0SK7J: minor-tweaks-to-blocks-items-and-entities
  h_01K4Q2RD7FX7ZGJNC8HV2DW73J: sounds
  h_01K4Q2RD7FTZ017K09AEVFS8WT: technical-changes
  h_01K4Q2RD7F28PZ5Q4AEAZAHM9Q: data-pack-version-840
  h_01K4Q2RD7FDC4TFZHWJ8ZRBG4V: block-states
  h_01K4Q2RD7F5JP95PFN2XYS4Q4Z: commands
  h_01K4Q2RD7FB4J12N25GXZPX7KR: addedfetchprofile
  h_01K4Q2RD7FQ9DNRJPW8FC44AYQ: data-components
  h_01K4Q2RD7FSMY38TR3BXK1SRFQ: modifiedminecraftprofile
  h_01K4Q2RD7FF64FMQVYKRZ5MB29: block-entity-data
  h_01K4Q2RD7FD6EH0Y5QXR3YTWSZ: modifiedminecraftskull
  h_01K4Q2RD7FDF1KBD48ABJS8FSA: text-components
  h_01K3JPDEH1D62DPT9WE8BF44JK: fixed-bugs-in-25w34a
  h_01K3JPDEHGFPZFQT6XB74727B3: get-the-snapshot
---

This week it's time for a smaller snapshot with a new main menu panorama, code of conducts for servers and much tinkering and fixing with our new friends, the Copper Golems. Happy mining!

> **Developer's Note**: *The rendering changes introduced in 25w31a for entities are now expanded to affect block entities and items. Please report any issues you encounter in these areas.*

**Update**: We have now released Snapshot 25w34b to fix some connectivity errors with Realms.

## Fixed bugs in 25w34b

- [MC-300911](https://bugs.mojang.com/browse/MC-300911) - Glowing item & block displays no longer glow

## New Features

- Servers can now have an in-game Code of Conduct

### Server Code of Conduct

When connecting to a server, a Code of Conduct screen can now be shown.

- Accepting the Code of Conduct is required to play on the server
- A checkbox is available for not showing the same Code of Conduct in the future
  - If the Code of Conduct changes, it will be shown again

#### Server Setup

- A new boolean field has been added to server.properties called enable-code-of-conduct
  - Setting it to true will make the server look for code of conduct files in the codeofconduct subfolder in the same folder as server.properties
  - Each file in the folder should have the form \<language_code\>.txt
    - The language shown will attempt to match the player's language
    - If it doesn't exist, the en_us code of conduct will be used
    - If that also doesn't exist, an arbitrary available entry is used

## Changes

- The main menu now has an updated background panorama showing Copper Golems in a Village

### The End Light Flashes

- The sound effect produced by a flash now has a higher delay
- The "Hide Lightning Flashes" accessibility setting has been renamed to "Hide Sky Flashes" and now also disables the End Flashes
  - When the flash is disabled by the setting the world will not be lit by the flash, but the flash source will still be visible in the sky and the sound effect will still play

### Minor Tweaks to Blocks, Items and Entities

- The eyes of the Copper Golem are now invisible as well when splashed with Potion of Invisibility
- Copper Golem's hitbox has been tweaked
  - The hitbox is now 0.6 blocks in width to be able to path-find through open doors
  - The hitbox is now 1.01 blocks in height to not get stuck in certain blocks

### Sounds

- Copper Golem & Copper Chests are now audible from up to 12 blocks away
- The copper sorting sounds have been tweaked to be quieter

## Technical Changes

- The Data Pack version is now 84.0
- The Resource Pack version is now 66.0

## Data Pack Version 84.0

- Player profiles in data components and block entities no longer resolve automatically
- Added fetchprofile command for downloading player profiles

### Block States

- Removed align_items_to_bottom block state property from Shelf block
  - It has been replaced with an equally named boolean field on the Shelf block entity
  - Shelves created with this property set in the last snapshot will reset back to the default value (false)

### Commands

#### Added fetchprofile

- New command that has been added to fetch the contents of a player profile from Minecraft servers
- Since the operation might take some time, it works asynchronously
  - Results will be printed only when operation finishes, but the game will keep running unpaused
- After successful completion, a message will be printed that lets users copy the contents of a fully resolved minecraft:profile component or /give @s minecraft:player_head with said component
- Since the result is not known at the time of execution, this command always returns 1

Syntax:

- fetchprofile name \<player name\> - resolves profile by name (case-insensitive)
- fetchprofile id \<uuid\> - resolves profile by id

### Data Components

#### Modified minecraft:profile

- Previously contents of this component would permanently change when profile was resolved, i.e. downloaded from Minecraft service
- To avoid issues with this unexpected change, the resolved value is no longer stored and contents of the profile will always remain unchanged
- That means this component has now two behaviors:
  - Static: when it has properties field or when both name and id are present or when both are missing
    - In this state, profile will always render as-is
    - If properties field is missing, a default skin will be used (selected based on id, same as in offline mode)
    - That means skin will be frozen at the moment of component creation
    - This option is preferred for decorational uses
  - Dynamic: when it has either name or id (but not both)
    - When an item containing this profile is rendered on the client side, the profile will be resolved to most recent value
    - This means that this item will always render with current skin of targeted player
      - Note: if a player changes skin while game is running, change will not be visible unless clients restart
    - Resolution might happen with a delay, during which item will render with a default skin
    - Profile name will replace item name only when it's present
      - Items with just id will show default name
    - Items will dynamic profiles be distinguished from static ones with label in tooltip
- Items stack based on exact contents, so even if a dynamic component is eventually resolved to the same profile as a static one, they won't stack together
- Player heads in older maps that have not been loaded in never versions yet will usually be converted to dynamic contents

### Block Entity Data

#### Modified minecraft:skull

- profile field has been changed to match minecraft:profile component
  - That means that it also becomes immutable and is resolved only when necessary

### Text components

- Bold and italics styles are ignored when drawing sprites

 

## Fixed bugs in 25w34a

- [MC-383](https://bugs.mojang.com/browse/MC-383) - In the world selection screen, world names/versions/timestamps can overflow the list to the right
- [MC-36783](https://bugs.mojang.com/browse/MC-36783) - Item frames/Glow item frames don't change their hitbox if they contain a map
- [MC-59413](https://bugs.mojang.com/browse/MC-59413) - Water and lava can drip from barriers
- [MC-147784](https://bugs.mojang.com/browse/MC-147784) - Fletching table flashes crafting table's GUI for about a second upon right-clicking it in spectator mode
- [MC-259673](https://bugs.mojang.com/browse/MC-259673) - Tab selection works differently in world creation and statistics screens
- [MC-260591](https://bugs.mojang.com/browse/MC-260591) - 'execute on origin' and 'execute on owner' fail to find the targeted entity when it is in a separate dimension
- [MC-260920](https://bugs.mojang.com/browse/MC-260920) - Statistics screen columns are not accessible through keyboard navigation
- [MC-265290](https://bugs.mojang.com/browse/MC-265290) - Elements within the command block interface are not selected in order when using the TAB key
- [MC-270190](https://bugs.mojang.com/browse/MC-270190) - Hovering over banner patterns in the loom UI does not display tooltips
- [MC-270669](https://bugs.mojang.com/browse/MC-270669) - Incorrect argument order in translation key argument.block.property.novalue
- [MC-272584](https://bugs.mojang.com/browse/MC-272584) - Fireballs redirected by explosions caused by player owned entities no longer carry player ownership
- [MC-276931](https://bugs.mojang.com/browse/MC-276931) - Enchanted books have the wrong rarity
- [MC-296789](https://bugs.mojang.com/browse/MC-296789) - The color of text within the test instance block interface is inconsistent with other similar interfaces
- [MC-297496](https://bugs.mojang.com/browse/MC-297496) - Text inside the middle of the java realms information box completely disappears when selected
- [MC-298605](https://bugs.mojang.com/browse/MC-298605) - When creating a Water World superflat world, the player spawns at the bottom of the sea
- [MC-299067](https://bugs.mojang.com/browse/MC-299067) - Arrows can lose ownership on disconnection in multiplayer
- [MC-299115](https://bugs.mojang.com/browse/MC-299115) - Arrows lose their owner tag when deflected while the owner is offline
- [MC-300045](https://bugs.mojang.com/browse/MC-300045) - The hand animation plays when right-clicking copper golems
- [MC-300046](https://bugs.mojang.com/browse/MC-300046) - The copper golem statue models in the inventory are partly cut off at the top
- [MC-300048](https://bugs.mojang.com/browse/MC-300048) - Copper golem statue item entities are rendered too large
- [MC-300066](https://bugs.mojang.com/browse/MC-300066) - The Ender Dragon Spawn Egg has the "Disabled in Peaceful" note despite being able to spawn in Peaceful mode
- [MC-300082](https://bugs.mojang.com/browse/MC-300082) - Copper golems with the “NoAI” tag can adjust their rotation and spin
- [MC-300083](https://bugs.mojang.com/browse/MC-300083) - Copper golems with the “Silent” tag can still produce some sounds
- [MC-300085](https://bugs.mojang.com/browse/MC-300085) - Copper golem statues' poses are off-centered
- [MC-300130](https://bugs.mojang.com/browse/MC-300130) - The "commands.summon.failed.peaceful" string doesn’t pluralize the word "Monster"
- [MC-300134](https://bugs.mojang.com/browse/MC-300134) - Copper Golem Spawn Egg isn't alphabetized in the creative inventory
- [MC-300213](https://bugs.mojang.com/browse/MC-300213) - Copper golems' hitbox is too large to fit through open single doors
- [MC-300222](https://bugs.mojang.com/browse/MC-300222) - Upon exiting the gamemode switcher (F3+F4) or debug options menu (F3+F5) while viewing the credits, the player does not resume viewing the credits and instead remains in the end in a phantom state until they relog
- [MC-300245](https://bugs.mojang.com/browse/MC-300245) - Any double chests variant doesnt play any sound when a copper golem interacts with the right part of the chest specifically
- [MC-300249](https://bugs.mojang.com/browse/MC-300249) - Copper golem statue block outline is above the top of the block below
- [MC-300365](https://bugs.mojang.com/browse/MC-300365) - Copper golems inconsistently activate trapped chests
- [MC-300406](https://bugs.mojang.com/browse/MC-300406) - Updating open copper chests causes the chests to remain open
- [MC-300441](https://bugs.mojang.com/browse/MC-300441) - Nether ambient sounds continue playing after leaving the Nether
- [MC-300475](https://bugs.mojang.com/browse/MC-300475) - The Glowing outline now appears black on the fur model parts of invisible sheep
- [MC-300480](https://bugs.mojang.com/browse/MC-300480) - Worn copper golem statues are incorrectly rotated
- [MC-300695](https://bugs.mojang.com/browse/MC-300695) - The sprint toggle state is now reset when viewing any screen
- [MC-300718](https://bugs.mojang.com/browse/MC-300718) - Player doesn't re-sneak automatically if they were sneaking before opening a GUI with Sneak Toggle set
- [MC-300796](https://bugs.mojang.com/browse/MC-300796) - Harvesting from sweet berry bushes can drop more sweet berries than before
- [MC-300804](https://bugs.mojang.com/browse/MC-300804) - The Glowing outline is now always white on invisible entities that aren't the player, unless the player is in the same team
- [MC-300825](https://bugs.mojang.com/browse/MC-300825) - Entities with NaN motion cause clients to be kicked and softlocked
- [MC-300839](https://bugs.mojang.com/browse/MC-300839) - Disc sounds can be heard in another dimension
- [MC-300846](https://bugs.mojang.com/browse/MC-300846) - The /rotate command doubles the target entity's motion each time it is run
- [MC-300856](https://bugs.mojang.com/browse/MC-300856) - I-beam cursor in book signing screen has wrong color
- [MC-300888](https://bugs.mojang.com/browse/MC-300888) - pack.mcmeta no longer supports versions below 16 in the supported_formats field
- [MC-300968](https://bugs.mojang.com/browse/MC-300968) - Flying state is not saved when reloading world
- [MC-300970](https://bugs.mojang.com/browse/MC-300970) - Missing sound for event: minecraft:entity.copper_golem.shear
- [MC-300972](https://bugs.mojang.com/browse/MC-300972) - End light flashes sound can be heard while looking at the credits
- [MC-300975](https://bugs.mojang.com/browse/MC-300975) - Copper golems wear banners backwards
- [MC-300983](https://bugs.mojang.com/browse/MC-300983) - The speed field in ExplosionParticleInfo codec is misspelled as "speec"
- [MC-300995](https://bugs.mojang.com/browse/MC-300995) - Game crashes when changing the F3 menu during world disconnection
- [MC-301004](https://bugs.mojang.com/browse/MC-301004) - Normal guardians are no longer able to enter boats
- [MC-301030](https://bugs.mojang.com/browse/MC-301030) - Frosted ice now melts in the End
- [MC-301032](https://bugs.mojang.com/browse/MC-301032) - Bees in the End now hide in their hive when it's raining in the Overworld

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/29d04ae8f7b701c55de6ca1547cc558409ea5368/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

 

\
