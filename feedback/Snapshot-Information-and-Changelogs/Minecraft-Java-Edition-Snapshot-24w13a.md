---
title: "Minecraft: Java Edition - Snapshot 24w13a"
date: 2024-03-27T16:22:48Z
updated: 2024-03-27T16:22:53Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/25388386755725-Minecraft-Java-Edition-Snapshot-24w13a
hash:
  h_01HT0BFWJBPAJZ07GQ41Y1V8EW: experimental-features
  h_01HT0BFWJB2AA6TXJ29D8M40ZV: mace
  h_01HT0BFWJBHCCDJ3YQABY24DJW: breeze--wind-charges
  h_01HT0BFWJBQ4EJDRZYRD26EAAR: ominous-events
  h_01HT0BFWJBEQBYTPHCF31R3T05: ominous-bottle
  h_01HT0BFWJB3TXE0E7VVC656BDH: ominous-trials
  h_01HT0BFWJB09BGSYEF9CMJNDGH: trial-omen
  h_01HT0BFWJBBKEBCAQTAK9QY44R: ominous-trial-spawner
  h_01HT0BFWJBXQ67T8E5F5PB3QN4: ominous-trial-key
  h_01HT0BFWJBV180FHPPX4ACF6B3: ominous-vault
  h_01HT0BFWJBDCPZQ0Y9WSSETHR9: mob-effects
  h_01HT0BFWJCE5EXX96J1KD1FZCH: trial-chambers-loot
  h_01HT0BFWJC148MA7CMW8AZQYJ4: trial-spawner
  h_01HT0BFWJC87ECR56SBSYJK5SJ: trial-chambers
  h_01HT0BFWJC1SBF1HGRPND0DHT1: changes-in-24w13a
  h_01HT0BFWJCC77X23S69HVTEW9P: technical-changes-in-24w13a
  h_01HT0BFWJCV5YRV4X95ESJG20S: chat
  h_01HT0BFWJC0XKCGGM9DHV5KV0R: network-protocol
  h_01HT0BFWJCY2QKX23465BFVF6P: data-pack-version-37
  h_01HT0BFWJCNPPYS4DZJ9MZJ9XV: block-entities
  h_01HT0BFWJC37S8FRXSV9HGTM5G: new-item-stack-components
  h_01HT0BFWJC3647VK1NCAKNGXBJ: minecraftitem_name
  h_01HT0BFWJCXPHREQTF32S6AAJ0: minecraftominous_bottle_amplifier
  h_01HT0BFWJC0YB67WYXK3EHSCA4: loot-functions
  h_01HT0BFWJCSXCE2MYY0B9FSPZN: copy_components
  h_01HT0BFWJC1BCDYTM65YZ8CYQF: set_name
  h_01HT0BFWJC50R7TST7ZKN11XBF: addedset_ominous_bottle_amplifier
  h_01HT0BFWJCXN4QVY12MN4YBKS7: entity-sub-predicates
  h_01HT0BFWJCCTDAFWPACQKWH2G5: raider
  h_01HT0BFWJCKMCW3A4ZVJN8HEXG: resource-pack-version-31
  h_01HT0BFWJC2ERRQSYCA47H30N9: fixed-bugs-in-24w13a
  h_01HT0BFWJCF2GYAJR5RM0B643G: get-the-snapshot
---

This fine Wednesday brings 24w13a, a snapshot containing changes to the Mace, Trial Chambers, and introduces the new Ominous Trials!

You might just be inclined to try out the ominous new features of this snapshot. ...or else? Did I do that right?

Happy mining!

Note: some of the features below will only work in freshly generated Trial Chambers.

## EXPERIMENTAL FEATURES

- Changes to the Mace
- Tweaks to the Breeze and Wind Charges
- Redesigned Bad Omen
- Added Ominous Bottle
- Added 6 new mob effects
- Added Ominous Trial Spawner
- Added Ominous Vault
- Added Ominous Trial Key

### MACE

- Added a new explosive particle effect when executing a smash attack with the Mace to really show the player's power
- Increased the power and range of the knockback effect from a smash attack
- Introduced an even stronger knockback when falling for more than 5 blocks before attacking
- When successfully striking a target, all vertical momentum will be reset in addition to negating any accumulated fall distance
- The baseline additional damage dealt by the Mace smash attack has been slightly reduced to 3 (1.5 hearts) per fallen block
- These existing enchantments can now be applied to the Mace:
  - Mending
  - Unbreaking
  - Smite
  - Bane of Arthropods
  - Fire Aspect
  - Curse of Vanishing
- Three new enchantments have been introduced that are unique to the Mace:
  - Density:
    - Common Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
    - Has 5 levels
    - Maces enchanted with Density do more damage per fallen block per Density level
      - Damage dealt per fallen block is increased by 1 per level of Density
  - Breach:
    - Rare Enchantment, accessible in the Enchanting Table and on Enchanted Books in loot
    - Has 4 levels
    - Maces enchanted with Breach reduce the effectiveness of armor on the target
      - The effectiveness of the armor is reduced by 15% per Breach level
  - Wind Burst:
    - Unique enchantment which can only be found in Ominous Vaults
    - Has 3 levels
    - Maces enchanted with Wind Burst will emit a Wind Burst upon hitting an enemy, launching the attacker upward and enabling the linking of smash attacks one after the other
    - Each level will bounce the attacker higher up in the air

### BREEZE & WIND CHARGES

- The Breeze now avoids jumping into dangerous blocks or air
- Wind Charges no longer collide with End Crystals

### OMINOUS EVENTS

- Bad Omen has been expanded to give access to an optional experience in Trial Chambers
- These optional experiences accessed through Bad Omen are now known as Ominous Events
  - They are more challenging than usual, and are designed to shake up the experience in unique ways
  - Illager Raids are an example of an existing Ominous Event
- Bad Omen is getting some changes with this redesign:
  - It has a new, shadowy icon and a sound for being applied to the player
  - It no longer triggers a Raid directly when entering a village
    - Instead, it will transform into a Raid Omen variant with a duration of 30 seconds
    - Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
    - Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting
  - It is no longer given to players that defeat a Raid Captain outside a Raid
    - Instead, players can gain access to Bad Omen by consuming a new Ominous Bottle

#### OMINOUS BOTTLE

- An item which can be consumed by players to receive the Bad Omen effect for 1 hour and 40 minutes
  - Comes in 5 variations, one for each Bad Omen level
  - The bottle breaks when consumed
  - Can be stacked to 64
- Can be found uncommonly in any Vaults that are unlocked with Trial Keys, and is dropped by Raid Captains when defeated outside a Raid

### OMINOUS TRIALS

- A new Ominous Event that can be accessed by exploring a Trial Chamber with Bad Omen
- This event will have players facing more powerful Trial Spawners if they dare!

#### TRIAL OMEN

- A variant that Bad Omen can transform into
  - This occurs when the player is within detection range of a Trial Spawner that is not Ominous
  - The Trial Omen has a duration of 15 minutes multiplied by the transformed Bad Omen's level
- Players that have Trial Omen are surrounded by ominous particles

#### OMINOUS TRIAL SPAWNER

- A more powerful active phase of the Trial Spawner with unique challenges and rewards
  - Provides a more challenging experience that advanced players can opt into for better rewards
- If a Trial Spawner detects a player that has the Trial Omen effect, the spawner will become Ominous if:
  - It is not in cooldown
  - Or, it is in cooldown but was not Ominous during its last activation
    - Making it Ominous this way will bypass the cooldown
- While active, it will:
  - Glow blue instead of orange
  - Emit soul flames instead of normal flames
  - Very commonly spawns mobs with equipment if they can wear it
    - The equipment these mobs wear have armor trims applied from the Trial Chambers
    - Known issue: these mobs can currently drop their equipment on death, but they will not in the future
  - Periodically spawn potions and projectiles on top of unsuspecting players and mobs
    - Based on their location, spawners in an area will select a random set of projectiles to spawn
    - These projectiles will always include a single type of Lingering Potion from a set of possible effects
- Becoming Ominous will despawn any existing mobs it spawned and reset its challenge
  - It will stay Ominous until it has been defeated and its cooldown has finished
- When defeated, it will eject a different set of loot to normal Trial Spawners

#### OMINOUS TRIAL KEY

- A new variant of the Trial Key which can only be obtained by defeating an Ominous Trial Spawner
- They can be used to unlock Ominous Vaults

#### OMINOUS VAULT

- A variant of Vaults that have a different texture and emit soul flames instead of normal flames
- These can be found throughout the Trial Chambers in harder to find places and require an Ominous Trial Key to unlock
  - These Vaults hold a more valuable set of rewards than the standard Vaults unlocked by Trial Keys

### MOB EFFECTS

- The following effects have been added:
  - Wind Charged
    - Affected entities will emit a wind burst upon death
    - Brewed with an Awkward Potion and a Breeze Rod
  - Weaving
    - Affected entities will spread Cobweb blocks upon death
    - Non-player entities with this effect can walk through Cobweb at normal speeds
    - Brewed with an Awkward Potion and a Cobweb block
  - Oozing
    - Affected entities will spawn two Slimes upon death
    - Brewed with an Awkward Potion and a Slime Block
  - Infested
    - Affected entities have a 5% chance to spawn 1-2 Silverfish when hurt
    - Brewed with an Awkward Potion and a Stone block
- These effects can be encountered while taking on an Ominous Trial Spawner
- Some mobs are immune to these effects
  - Slimes are immune to Oozing
  - Silverfish are immune to Infested

### TRIAL CHAMBERS LOOT

- The loot found within Trial Chamber Vaults has been adjusted
- Standard Vaults will give slightly less items of high quality, but also include the following changes:
  - Ominous Bottle I - II can be found
  - Flow Banner Pattern, Flow Armor Trim Smithing Template, and Heavy Core can no longer be obtained
    - Guster Banner Pattern and Bolt Armor Trim Smithing Template remain exclusive to standard Vaults
    - In Heavy Core's place, standard Vaults will instead have a very rare chance of providing a Trident
- Ominous Vaults can provide some particularly valuable items, to mention a few:
  - Ominous Bottle III - V
  - Enchanted Golden Apple
  - Flow Banner Pattern and Flow Armor Trim Smithing Template
  - Wind Burst, Breach and Density Enchantments for the Mace
  - Heavy Core
- The loot ejected from Trial Spawners have been adjusted
  - It now has a focus on providing higher quality food more often to make replenishing between fights more safe
- Ominous Trial Keys have a 30% chance of ejecting from a defeated Ominous Trial Spawner, replacing the usual 50% chance to eject Trial Keys

### TRIAL SPAWNER

- All spawners now increase the amount of mobs present at once by 0.5 for each additional player, down from 2
- Baby Zombie spawners now only have 2 mobs present at once for its baseline, down from 3 mobs
- Can now only activate when a player is in line of sight

### TRIAL CHAMBERS

- Remade chamber_5 with variations, and renamed it to eruption
- Reduced amount of Trial Spawners in corridors
- Updated layout and placements of Vaults
- Placed Ominous Vaults in chambers, intersections, at the ends of corridors
- Corridors will no longer generate endlessly
- Added an atrium to the corridors
- Made various layout changes in intersections and corridors

Known issues:

- Corner quadrants in slanted may still fail to generate correctly

## CHANGES IN 24W13A

- Added unique sounds for Cobwebs

## TECHNICAL CHANGES IN 24W13A

- The Data Pack version is now 37
- The Resource Pack version is now 31
- Client chat state is now preserved by default when entering configuration phase
- Changes to chat network protocol

### CHAT

- Client chat state (on-screen messages and chat input history) is now preserved by client when entering and exiting configuration phase
- Message signature chain handling remains unchanged - going into configuration phase starts new session
- If client has message delay configured, pending messages will be delivered immediately before leaving world
- Server can clear chat state by sending reset_chat packet in configuration phase

### NETWORK PROTOCOL

- The minecraft:chat_command_signed packet has been split from minecraft:chat_command
  - Commands that do not accept any signed arguments will use the unsigned packet, and will not pass any 'last seen' chat updates

## DATA PACK VERSION 37

- Added new loot table type minecraft:equipment
  - Has required parameters of this_entity and origin
    - this_entity : the mob that is about to be given equipment
    - origin : the position of the mob
- Added optional equipment_loot_table to the spawn data present in the SpawnPotentials of Monster Spawners and spawn_potentials of Trial Spawner configs
  - If present, rolled items from the specified loot table will be equipped to the mob that spawns
- Modified copy_components and set_name loot function arguments
- Added new set_ominous_bottle_amplifier loot function
- Added new item components
- Non-default components on item stacks are now stored when block entity is placed
- Int and float providers used in worldgen definitions are no longer wrapped in an extra value field next to type
  - For example, {"type":"minecraft:uniform","value":{"min_inclusive":0.0,"max_inclusive":1.0}} becomes {"type":"minecraft:uniform","min_inclusive":0.0,"max_inclusive":1.0}
- New Damage Type Tag: minecraft:is_player_attack for attacks performed by the player
- New Entity Type Tags:
  - immune_to_oozing For entities that cannot receive the Oozing mob effect
  - immune_to_infested For entities that cannot receive the Infested mob effect
- Added raider sub entity predicate

### BLOCK ENTITIES

Non-default components on item stacks containing block items are now stored on block entities when placed

- Component removals from defaults are currently not preserved
- Placing and breaking non-block entity blocks remains unchanged - nothing is preserved
- Does not automatically cause preserved components to be restored on drops - this requires addition of copy_components function to loot table
- Components are stored in field called components
  - Some components (like custom_name) are still handled by legacy serialization, which means they might not be present in there
  - Contains map of component id to component value

### NEW ITEM STACK COMPONENTS

#### MINECRAFT:ITEM_NAME

- When present, replaces default item name with contained chat component
- Differences from custom_name:
  - item_name can't be changed or removed in anvil
  - item_name is not styled with italics when displayed to player
  - item_name does not show labels where applicable (for example: banner markers, names in item frames)

#### MINECRAFT:OMINOUS_BOTTLE_AMPLIFIER

- Controls the amplifier amount for an Ominous Bottle's bad omen effect
- Format: integer between 0 and 4
  - e.g. ominous_bottle_amplifier=3

### LOOT FUNCTIONS

#### COPY_COMPONENTS

Removed field components and replaced it with:

- include - optional list of data components to be copied from source
  - if omitted, all components present are included
- exclude - optional list of data components to be excluded from copying
  - if omitted, defaults to empty
- Only components that are included (explicitly or implicitly) but not excluded will be copied

#### SET_NAME

Added optional field target to specify which name should be set

- Values:
  - custom_name - sets custom_name component (default)
  - item_name - sets item_name component

#### ADDED SET_OMINOUS_BOTTLE_AMPLIFIER

Sets the ominous_bottle_amplifier component on the target item according to a number provider.

- conditions: list of conditions to filter this function
- amplifier: a number provider used to generate the ominous_bottle_amplifier component

#### ENTITY SUB-PREDICATES

##### raider

New raider sub-predicate has been added to match raidersFields:

- has_raid - Match whether the raider is in an active raid
- is_captain - Match whether the raider is a captain

## RESOURCE PACK VERSION 31

- Added the following particle types:
  - infested
  - item_cobweb
  - small_gust
  - raid_omen
  - trial_omen
  - trial_spawner_detection_ominous
  - ominous_spawning
- Added the following sound events:
  - block.cobweb.break
  - block.cobweb.step
  - block.cobweb.place
  - block.cobweb.hit
  - block.cobweb.fall
  - block.trial_spawner.about_to_spawn_item
  - block.trial_spawner.spawn_item
  - block.trial_spawner.spawn_item_begin
  - block.trial_spawner.charge_activate
  - block.trial_spawner.ambient_charged
  - item.ominous_bottle.dispose
  - event.mob_effect.bad_omen
  - event.mob_effect.trial_omen
  - event.mob_effect.raid_omen
- Added textures for the following blocks and items:
  - Ominous Vault
  - Ominous Trial Spawner
  - Ominous Bottle
- Updated textures for normal Vault block
- Added the following mob effect icon textures:
  - infested
  - oozing
  - weaving
  - wind_charged
  - raid_omen
  - trial_omen
  - bad_omen_121
- Added new models for Ominous state of Vault block

## FIXED BUGS IN 24W13A

- [MC-123804](https://bugs.mojang.com/browse/MC-123804) - Explorer map and Ominous banner names appear in item frames, draw in italics, and can be removed with an anvil
- [MC-148057](https://bugs.mojang.com/browse/MC-148057) - Ominous banners generated in outposts show the pattern list
- [MC-166361](https://bugs.mojang.com/browse/MC-166361) - GUI scale does not visually update when the option is changed using the keyboard and without the mouse
- [MC-178410](https://bugs.mojang.com/browse/MC-178410) - Banners don't support the HideFlags tag when placed down as blocks
- [MC-268578](https://bugs.mojang.com/browse/MC-268578) - Bogged mob sits wrong in boats
- [MC-268627](https://bugs.mojang.com/browse/MC-268627) - Slime spawns are incorrect
- [MC-268716](https://bugs.mojang.com/browse/MC-268716) - Magma Cubes spawn even if there's only 2 blocks in height
- [MC-268882](https://bugs.mojang.com/browse/MC-268882) - Same Enchantments in an item components crashes the game
- [MC-268893](https://bugs.mojang.com/browse/MC-268893) - Comparators require a block update to function properly, and droppers/observers receive false state changes
- [MC-269015](https://bugs.mojang.com/browse/MC-269015) - Wind charges can destroy end crystals
- [MC-269143](https://bugs.mojang.com/browse/MC-269143) - Attribute modifiers cannot exclusively target the "body" slot
- [MC-269342](https://bugs.mojang.com/browse/MC-269342) - The experimental features details menu is rendered incorrectly after resizing the game window
- [MC-269371](https://bugs.mojang.com/browse/MC-269371) - If the 'GUI Scale' option is on 'Auto', and if you try to scale it down using CTRL + mouse wheel, it shows as '-1'
- [MC-269387](https://bugs.mojang.com/browse/MC-269387) - Mace sounds use the neutral sound category
- [MC-269388](https://bugs.mojang.com/browse/MC-269388) - Mace falling damage increase is applied while using an elytra
- [MC-269427](https://bugs.mojang.com/browse/MC-269427) - Lingering potion particles are tinted black instead of the potion's color
- [MC-269628](https://bugs.mojang.com/browse/MC-269628) - Heavy cores delete water when placed into it
- [MC-269635](https://bugs.mojang.com/browse/MC-269635) - The game crashes when attempting to eat lily pads or frogspawn
- [MC-269643](https://bugs.mojang.com/browse/MC-269643) - Waterlogged heavy core does not update water flow correctly
- [MC-269649](https://bugs.mojang.com/browse/MC-269649) - Who Needs Rockets advancement is granted after launching yourself up 8 blocks instead of 7 blocks
- [MC-269656](https://bugs.mojang.com/browse/MC-269656) - Feeding parrots poison while holding mace grants Over-Overkill challenge
- [MC-269659](https://bugs.mojang.com/browse/MC-269659) - Parrots can now be fed carrots to kill them instead of cookies
- [MC-269670](https://bugs.mojang.com/browse/MC-269670) - Game crash when giving bundle with hide tooltip

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2fd2113b7b81cc78cb4a76939a6c11840d57036d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
