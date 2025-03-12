---
title: "Minecraft: Java Edition - Snapshot 24w21b"
date: 2024-06-10T11:18:52Z
updated: 2025-03-12T10:43:12Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/27439697297421-Minecraft-Java-Edition-Snapshot-24w21b
hash:
  h_01J00XXRN0795MEWHQMNJNCMX1: fixed-bugs-in-24w21b
  h_01J00XXRN1FT1V9V3VDQ59GKDF: changes
  h_01J00XXRN21ND324YKQDQM7Q2Y: vault
  h_01J00XXRN23H6ES99VRS7MG7K3: trial-chambers
  h_01J00XXRN2396Z5KJXWHCFWYPS: animal-panic
  h_01J00XXRN2X9ZH657AYSMA9GXQ: server-links
  h_01J00XXRN2XAKQ4V4PKASA810D: disconnection-screen-improvements
  h_01J00XXRN284DX6VPDWBJ02MJ2: technical-changes
  h_01J00XXRN22RB1P5661A1JGZ2T: gamerules
  h_01J00XXRN28JRARNBVH3TYJ4K0: server-links-1
  h_01J00XXRN2QZHVPJK3J20PWEFZ: custom-server-crash-report-details
  h_01J00XXRN2W5T1EQCJDV354J25: data-pack-version-45
  h_01J00XXRN2JB46GQ9DKK2SSRFT: jukebox-songs
  h_01J00XXRN2ZF4HDY7EY52JZHFR: jukebox_playableitem-component
  h_01J00XXRN2H412YAAGYRN7GTXG: attributes
  h_01J00XXRN2DB98KRJVQ45FAZ8D: attributecommand
  h_01J00XXRN2ESCEYZNDHJ9SXZ5M: item-stack-attribute-modifiers
  h_01J00XXRN2N8RDTGXYA1W6QFZR: entity-attributes
  h_01J00XXRN28T67BHH1ETW6AKPD: enchantments
  h_01J00XXRN2B3R7ZMW8GTSZEHF6: attribute-effects
  h_01J00XXRN242SKM4GW41KT1M5Y: entity-effect-types
  h_01J00XXRN2Y68GWH95DGY1P4FR: damage_item
  h_01J00XXRN2RTS14C56TFESB66W: hit-block-parameters
  h_01J00XXRN219PCQ4T6S8X0HW1M: effect-components
  h_01J00XXRN248B906C561TMB45K: tags
  h_01J00XXRN203Q8CN6W4W5BKCMF: directory-renames
  h_01J00XXRN2P5B5X0JGBRQZM9B8: item-tags
  h_01J00XXRN22DYSMXB45DM246WS: block-tags
  h_01J00XXRN278EP6GPSWR45QGYH: damage-type-tags
  h_01J00XXRN2C7XWT292BKV55RKN: predicates
  h_01J00XXRN2K08WMSJY8GYAG6HY: jukebox-playable-predicate
  h_01J00XXRN2DMKZ99ARD8EFY3CA: player-predicate
  h_01J00XXRN2PQ2PG6JC3N8NST0P: commands
  h_01J00XXRN2FQ56XJRFDDY85FGA: resource-pack-version-34
  h_01J00XXRN234FP4XCKXY7CD1XY: shaders
  h_01J00XXRN2277D903GF8NDH26N: fixed-bugs-in-24w21a
  h_01J00XXRN3CJW3PTKTZZKGGHPK: get-the-snapshot
---

This week we're bringing a Snapshot you can vibe out to! This time around we're bringing data-driven jukeboxes, a new gamerule, and a bunch of fixes.

Happy vibing!

**Update**: We are now releasing snapshot 24w21b to fix a frequent crash which happened when Zombies spawned in areas of high local difficulty.

## FIXED BUGS IN 24W21B

- [MC-272321](https://bugs.mojang.com/browse/MC-272321) - Crash after upgrading snapshot world to 24w21a

## CHANGES

- It seems we cooked a bit too hard with the new Piston sounds last week, which is why we're reverting back to the old sounds again
- Lowered volume of original sounds to address initial feedback of Pistons being too loud
- Pause menu now can include a list of links provided by server
- Improvements to the disconnection screen
- Any member of a Realm can now upgrade a world
- In the Realms main screen, all online players of a Realm are displayed
  - When hovered, a tooltip is shown with each player's head and name

### VAULT

- Added sound effect to help players understand they've already looted a vault

### TRIAL CHAMBERS

- Trial Chambers are less likely to generate in the Deep Dark

### ANIMAL PANIC

- Animals now panic based on the damage caused by predefined Damage Source Types
- The panic lasts for 2 seconds after the damage is dealt. The following damage type tags are used by vanilla animals:
  - panic_environmental_causes: Used by Wolves, Polar Bears (adults) and Pandas
  - panic_causes: Used by all other animals and baby Polar Bears

### SERVER LINKS

- Servers can now provide a list of links to clients
- If client has received any links, a new button called "Server Links..." will show up in pause game screen
  - To make space for that button, "Report Bugs" and "Give Feedback" buttons might be moved into a sub-screen if necessary

### DISCONNECTION SCREEN IMPROVEMENTS

- In some cases client will now store detailed information about disconnection (similar to crash reports)
- When that happens, new "Open Disconnection Report Directory" button will be added to the disconnection screen
- When server provides link for bug reporting, it will be also be added as a button to the disconnection screen

## TECHNICAL CHANGES

- Resource Pack version is now 34
- Data Pack version is now 45
- Server can now provide list of links to client
- Servers can add custom details to crash and disconnection reports

### GAMERULES

- Added new entitiesWithPassengersCanUsePortals gamerule
  - When true, entities with passengers can use Nether Portals, End Portals and End Gateways
  - Defaults to false

### SERVER LINKS

- New clientbound packet server_links is available in configuration and game protocols
- On receival, client will make links available from pause menu
- Link labels can be built-in or custom (i.e. any text)
- Some built-ins also have special fuctionality:
  - report_bug:
    - link will be displayed on disconnection screen, if disconnection was caused by packet handling error
    - link will be included as a comment in disconnection report
- Added bug-report-link to server.properties to allow vanilla server to configure report_bug links
  - If this field is non-empty, server will send that link to clients
  - This field should contain well-formed URL

### CUSTOM SERVER CRASH REPORT DETAILS

- New clientbound packet custom_report_details is available in configuration and game protocols
- This packet contains a list of key-value text entries
- If received, contents of this packet will be added in a separate section to any crash or disconnection report generated during connection to this server

## DATA PACK VERSION 45

- Jukebox songs are now data-driven
- Added new command syntax

### JUKEBOX SONGS

- Added a jukebox song registry which is loaded from data packs
- Path to jukebox song definition is data/\<namespace\>/jukebox_song/\<id\>.json
- Fields in definition:
  - sound_event - sound event that is streamed when played by a Jukebox
  - description - the name of the song that will be displayed in the hover tooltip represented as a Text Component
  - length_in_seconds - length of the song in seconds as a positive float
  - comparator_output - the redstone signal output by a comparator when played in a Jukebox, between 0 and 15
- Added minecraft:jukebox_playable item stack component

#### JUKEBOX_PLAYABLE ITEM COMPONENT

- If set, the item can be inserted into Jukeboxes to play a song
- Format: object with fields
  - song: jukebox song id
    - The song that will be played by the Jukebox when this item stack is inserted
  - show_in_tooltip: boolean (default: true)
    - If false, the name of the song will not be shown in the tooltip
    - This was formerly controlled by the hide_additional_tooltip component on Music Discs
  - e.g. jukebox_playable={song:'minecraft:precipice'}, jukebox_playable={song:'minecraft:precipice', show_in_tooltip:false}

### ATTRIBUTES

- Attribute modifiers no longer have a UUID and name combination
- Instead, attribute modifiers are now uniquely identified by a namespaced ID, similar to other resources
- The ID of a modifier uniquely identifies it in the set of modifiers for a single attribute
  - Using the same ID for different modifiers is allowed as long as the modifiers are for different attributes
- Existing built-in modifiers will be upgraded to new IDs
- Existing custom modifiers will be upgraded to the GUID as an ID in the minecraft namespace

#### ATTRIBUTE COMMAND

- The uuid and name arguments have been replaced with a singular id argument

#### ITEM STACK ATTRIBUTE MODIFIERS

- The uuid and name fields have been removed.
- Attribute Modifiers now have an id (namespaced ID) field
  - This is a unique identifier per attribute for the modifier

#### ENTITY ATTRIBUTES

- Attributes are now stored as attributes
- Attribute format:
  - id, renamed from Name
  - base, renamed from Base
  - modifiers, renamed from Modifiers
    - Now stores modifiers in the same format as modifiers in attribute_modifiers item stack components:
      - id, replaces UUID and Name
      - amount, renamed from Amount
      - operation, renamed from Operation, now a named constant instead of an int:
        - add_value - previously 0
        - add_multiplied_base - previously 1
        - add_multiplied_total - previously 2

### ENCHANTMENTS

#### ATTRIBUTE EFFECTS

Fields:

- name & uuid have been removed, replaced by id
- id: The namespaced ID of the Attribute Modifier to add
  - This will be postfixed with the slot name when the enchanted item is equipped in a slot
  - Must be unique to avoid different Enchantments (or other systems) interfering with each others

#### ENTITY EFFECT TYPES

##### damage_item

The damage is not applied to items held by players in creative mode.

##### Hit Block Parameters

- Entities: this
- Enchantment Level
- Origin
- Block State

#### EFFECT COMPONENTS

- minecraft:hit_block:
  - Condition Context: changed to take a Hit Block Parameter - this is the entity hitting the Block

### TAGS

#### DIRECTORY RENAMES

- Some registry types that used legacy datapack directory names (based on plural name of element) have been renamed to match registry name
- Affected directories:
  - structures -\> structure
  - advancements -\> advancement
  - recipes -\> recipe
  - loot_tables -\> loot_table
  - predicates -\> predicate
  - item_modifiers -\> item_modifier
  - functions -\> function
  - tags/functions -\> tags/function

#### ITEM TAGS

- Removed music_discs item tag

#### BLOCK TAGS

- air: All blocks that resemble air

#### DAMAGE TYPE TAGS

- Removed breeze_immune_to damage type tag
- Added panic_environmental_causes: Damage types that cause panic in aggressive animals that can panic, i.e. mobs that retaliate when attacked
- Added panic_causes: Damage types that cause panic in passive animals, i.e. mobs that run away when attacked

### PREDICATES

#### JUKEBOX PLAYABLE PREDICATE

New item sub-predicate available as jukebox_playable.

- Matcher for jukebox_playable component (like Music Discs)
- Fields:
  - song - optional id, list of ids or tag for jukebox song to be matched

#### PLAYER PREDICATE

- The gamemode field has been changed to accept a list of gamemodes

### COMMANDS

- Added @n entity selector, selecting the nearest entity
  - This functions as @e\[sort=nearest,limit=1\]
  - Additional requirements may still be provided; for example: @n\[type=pig\] will select the closest Pig

## RESOURCE PACK VERSION 34

- Added the block.vault.reject_rewarded_player sound event
- Changes to Shaders

### SHADERS

- The blend block in core shader definitions has been removed, as it was not used
- The position_color_tex shader has been removed, replaced with the pre-existing position_tex_color
- The glint_direct shader has been removed, replaced with the pre-existing glint shader
- The armor_glint shader has been removed, as it was unused

## FIXED BUGS IN 24W21A

- [MC-67](https://bugs.mojang.com/browse/MC-67) - Entities with passengers cannot travel through portals
- [MC-31819](https://bugs.mojang.com/browse/MC-31819) - Hunger saturation depletes on peaceful difficulty
- [MC-116279](https://bugs.mojang.com/browse/MC-116279) - Non-player entities going through Nether portal do not generate portal in Nether if none exists
- [MC-151648](https://bugs.mojang.com/browse/MC-151648) - Non-player entities cannot travel through unlinked nether portals
- [MC-170103](https://bugs.mojang.com/browse/MC-170103) - Untamed wolves only beg for food while being angry and jumping
- [MC-260346](https://bugs.mojang.com/browse/MC-260346) - Custom music discs cut off when vanilla disc would normally end
- [MC-266290](https://bugs.mojang.com/browse/MC-266290) - Double doors do not automatically form between waxed and unwaxed copper doors, even of the same variant
- [MC-266586](https://bugs.mojang.com/browse/MC-266586) - Trial chambers can spawn directly inside the deep dark biome
- [MC-266626](https://bugs.mojang.com/browse/MC-266626) - Breeze doesn't stop attacking the player when it enters on the same team
- [MC-267967](https://bugs.mojang.com/browse/MC-267967) - Breezes ignore the deflects_projectiles entity type tag
- [MC-268438](https://bugs.mojang.com/browse/MC-268438) - Baby armadillos can still eat while rolled up
- [MC-269034](https://bugs.mojang.com/browse/MC-269034) - Wolves no longer teleport while trying to pathfind out of Lava
- [MC-269351](https://bugs.mojang.com/browse/MC-269351) - The Bolt Armor Trim cannot be duplicated with Waxed Copper Block
- [MC-269370](https://bugs.mojang.com/browse/MC-269370) - Sharp lag spike caused by incorrect upper limit on particles created by mace smash attack
- [MC-269460](https://bugs.mojang.com/browse/MC-269460) - Thorns enchantment doesn't work when entities are hit by wind charges
- [MC-269964](https://bugs.mojang.com/browse/MC-269964) - Ominous item spawners are missing an NBT load for spawn_item_after_ticks
- [MC-269988](https://bugs.mojang.com/browse/MC-269988) - New potion effects don't apply their respective behaviors when creeper explodes
- [MC-270024](https://bugs.mojang.com/browse/MC-270024) - When drinking ominous bottles, bad omen of higher levels can be overriden by lower amplifiers
- [MC-270377](https://bugs.mojang.com/browse/MC-270377) - Wind charges can be hit and redirected the moment they are thrown
- [MC-270573](https://bugs.mojang.com/browse/MC-270573) - Mounted entities are immune to wind charge damage
- [MC-270808](https://bugs.mojang.com/browse/MC-270808) - Any item in the armor.body slot protects wolves from taking damage
- [MC-271458](https://bugs.mojang.com/browse/MC-271458) - Channeling tridents no longer summon lightning bolt every time hitting lightning rod under thunderstorm
- [MC-271573](https://bugs.mojang.com/browse/MC-271573) - Attribute Enchantments Don't Behave Properly on Armor
- [MC-271634](https://bugs.mojang.com/browse/MC-271634) - Custom enchantments don't appear in the creative menu
- [MC-271718](https://bugs.mojang.com/browse/MC-271718) - Crash when randomized_int_state_provider is applied to blocks lacking the property
- [MC-271753](https://bugs.mojang.com/browse/MC-271753) - Crash due to overflow inside cost calculation in by_cost_with_difficulty
- [MC-271856](https://bugs.mojang.com/browse/MC-271856) - Crossbows enchanted with Quick Charge do not benefit from its effects when used in the offhand
- [MC-271868](https://bugs.mojang.com/browse/MC-271868) - Frost walker replaces flowing water now
- [MC-271901](https://bugs.mojang.com/browse/MC-271901) - Entity effect "play_sound" Field "pitch" value upper limit is 1.0 instead of 2.0
- [MC-271911](https://bugs.mojang.com/browse/MC-271911) - Frost walker no longer works with void or cave air
- [MC-271914](https://bugs.mojang.com/browse/MC-271914) - Soul speed enchantment doesn't emit particles when the entity is controlled by a player
- [MC-272039](https://bugs.mojang.com/browse/MC-272039) - Soul Speed uses durability in creative mode
- [MC-272042](https://bugs.mojang.com/browse/MC-272042) - If players have max health over 20 and die, when they respawn they will have 20 health instead of their max health
- [MC-272043](https://bugs.mojang.com/browse/MC-272043) - The game crashes when entities die while having the oozing effect
- [MC-272075](https://bugs.mojang.com/browse/MC-272075) - Attempting to step up while controlling entity and moving fast often glitches
- [MC-272084](https://bugs.mojang.com/browse/MC-272084) - Creepers with potion effects no longer create area effect clouds upon exploding
- [MC-272182](https://bugs.mojang.com/browse/MC-272182) - Knowledge Books no longer function properly with a stack size of 1 in survival/adventure mode

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/743d74805b64f83052fe449993f42182f76b129e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
