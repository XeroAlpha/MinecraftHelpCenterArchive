---
title: Minecraft Java Edition - Snapshot 25w09a
date: 2025-02-27T11:48:13Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/34593421146637-Minecraft-Java-Edition-Snapshot-25w09a
hash:
  h_01JN3KNAY8C1AAXHQFMV1XDK49: new-features
  h_01JN3KNAY8MZ18HF36R4T80J0N: fallen-trees
  h_01JN3KNAY9HYQQMFXC4X256YB2: changes
  h_01JN3KNAY9M92Z5X8SGE7AJ2N0: leaf-litter
  h_01JN3KNAY983A48X8AJAFZD69Y: firefly-bush
  h_01JN3KNAY9D873DKQ661CN8DYZ: technical-changes
  h_01JN3KNAY98EV9PXF59E7JCKAE: data-pack-version-69
  h_01JN3KNAY9CF8JG4FK254AFYGR: commands
  h_01JN3KNAY9T5CF4YHC1YSQCPHJ: entity-data
  h_01JN3KNAY9TM1NBMPRFW6QJ95Q: area_effect_cloud
  h_01JN3KNAY9C2AJDD8YY1EQB8JP: creeper
  h_01JN3KNAY9ATVC2251GPD46DN5: dolphin
  h_01JN3KNAY95HW3R1E8XXKVABN8: ender_dragon
  h_01JN3KNAY9RQGX5VVEDQEXWW5K: falling_block
  h_01JN3KNAY9THXNHPPW6F92A36W: firework_rocket
  h_01JN3KNAY9GE4VMGMMYQJXGN7B: fox
  h_01JN3KNAY9Z7ZYHAC080RSY4SZ: ghast
  h_01JN3KNAY90C3NVR6009EKV8T1: goat
  h_01JN3KNAY9D7NKHH0B61CPJHCY: interaction
  h_01JN3KNAY9F8482FP561MQE9DW: item
  h_01JN3KNAYA4JM0VSF9K5X7NHXE: item_frameandglow_item_frame
  h_01JN3KNAYARXCCPXVMYGGB15Q5: primed_tnt
  h_01JN3KNAYAXJKPADW2S7YTR8M6: shulker
  h_01JN3KNAYAA00DZRRVB4SZ732B: skeleton
  h_01JN3KNAYAM4Y2DSQ11ZYQKXPA: spectral_arrow
  h_01JN3KNAYAF0DS71K78QJW1Z4Z: snow_golem
  h_01JN3KNAYAP2Q1HMDT7DZ4EGVX: tnt_minecart
  h_01JN3KNAYA9DRK3BXCC21MMG0D: trader_llama
  h_01JN3KNAYA84YR3EH5WNJ8XTBD: villager
  h_01JN3KNAYA2MEF6H5AGW0Q09NY: wandering_trader
  h_01JN3KNAYANJ5QQ7613YGRKVHV: zombie
  h_01JN3KNAYAV8T65356NB48B8KJ: zombie_villager
  h_01JN3KNAYA2GV44E1TM5Q0Q1AD: arrowspectral_arrowtrident
  h_01JN3KNAYA98AV4Z7T2679W5AD: dragon_fireballwind_chargebreeze_wind_chargewither_skullsmall_fireball-andlarge_fireball
  h_01JN3KNAYA5DH6ATVEQB5R9SAF: small_fireballandlarge_fireball
  h_01JN3KNAYA2RA0CCA96GH9NQ84: block_displayitem_display-andtext_display
  h_01JN3KNAYA20W8R3QJA6QSA0YZ: block-entity-data
  h_01JN3KNAYA4X60P2BM52S18SSC: campfire
  h_01JN3KNAYB6MTSYAH6X48D094F: chiseled_bookshelf
  h_01JN3KNAYBHG13PW72RD1BGSEJ: hopper
  h_01JN3KNAYBMMCCCWPMYYT2MDEQ: jigsaw
  h_01JN3KNAYBK8SNMZ0GXN7XBE9C: sculk_shrieker
  h_01JN3KNAYBX0JRNKWYEND6R6Q7: structure_block
  h_01JN3KNAYB7BK79V4Q7Z5X63BQ: nbt-changes
  h_01JN3KNAYBFJSSBJYRV7AR4Z5E: snbt-changes
  h_01JN3KNAYBR5PG53XJHEXJ3FV5: number-format
  h_01JN3KNAYB20DFG7RB3XFW7V16: strings
  h_01JN3KNAYB2PHQSJBWQ65WWYCT: number-arrays
  h_01JN3KNAYBQBR215K7M1JC5P82: lists
  h_01JN3KNAYB1K09YQD06ANTRAFW: compounds
  h_01JN3KNAYB3252NJN1B11H1STJ: fixed-bugs-in-25w09a
  h_01JN3KNAYBAYZJJE22MJCDA42W: get-the-snapshot
---

In this week's snapshot, we are bringing a long-awaited feature into parity as fallen trees are making their debut in Java Edition. Additionally, firefly bushes can now generate in mangrove swamps and rarely in badlands.

On the technical side, SNBT syntax in commands has been expanded and improved, including fixing bugs related to SNBT text components preventing escapes from working.

## New Features

- Added fallen trees to be in parity with Bedrock Edition

### Fallen Trees

- Fallen trees are a new decorative variant of trees
- Fallen trees come in four different wood type variants:
  - Oak
  - Birch
  - Jungle
  - Spruce
- Birch fallen trees can come in a shorter version or a longer version
- Some fallen trees can be decorated with mushroom or vines
- Fallen trees can be found in all biomes where their standing tree variant grow, except the following:
  - Meadow
  - Bamboo Jungle
  - River
  - Grove
  - Flower Forest has fallen birch trees but not fallen oak trees

## Changes

### Leaf Litter

- Leaf Litter is now replaceable by other blocks

### Firefly Bush

- The Firefly Bush can now generate near water in Mangrove Swamps and Badlands (very rarely), like other biomes with water

## Technical Changes

- The Data Pack version is now 69
- New command line argument --renderDebugLabels is available for the client
  - Adds debug labels to relevant OpenGL objects, making debugging rendering easier for developers

## Data Pack Version 69

- Object notation used in commands for NBT, text components and inline predicates (a.k.a. SNBT) has been extended

### Commands

- /data can now create and modify heterogeneous lists transparently

### Entity Data

- The FallFlying field will no longer be preserved if removed
- The Health and Air fields now default to their respective maximum value if not specified

#### area_effect_cloud

- The Duration field now defaults to -1 if not specified
- If the Duration field is -1, the Area Effect Cloud will never run out
- This means that an Area Effect Cloud summoned with no duration specified will no longer immediately disappear

#### creeper

- The Fuse field now defaults to 30 if not specified
- The ExplosionRadius field now defaults to 3 if not specified

#### dolphin

- The Moistness field now defaults to 2400 if not specified

#### ender_dragon

- The DragonDeathTime field now defaults to 0 if not specified

#### falling_block

- The HurtEntities field now defaults to false if not specified (or true if BlockState is anvil)
- The FallHurtAmount field now defaults to 0 if not specified
- The FallHurtMax field now defaults to 40 if not specified
- The DropItem field now defaults to true if not specified
- The TileEntityData field will no longer be preserved if removed

#### firework_rocket

- The ShotAtAngle field now defaults to false if not specified

#### fox

- The Trusted field now defaults to empty if not specified (and will no longer be merged with the previous state if modified by /data)

#### ghast

- The ExplosionPower field now defaults to 1 if not specified

#### goat

- The HasLeftHorn and HasRightHorn fields now default to true if not specified

#### interaction

- The width and height fields now default to 1 if not specified

#### item

- The Health field now defaults to 5 if not specified
- The PickupDelay field now defaults to 0 if not specified
- The Age field now defaults to 0 if not specified
- The Owner and Thrower fields will no longer be preserved when removed

#### item_frame and glow_item_frame

- The ItemDropChance field now defaults to 1.0 if not specified

#### primed_tnt

- The fuse field now defaults to 80 if not specified
- The explosion_power field now defaults to 4 if not specified

#### shulker

- The Color field now defaults to 16 (no color) if not specified

#### skeleton

- The StrayConversionTime field will no longer be preserved when removed

#### spectral_arrow

- The Duration field now defaults to 200 if not specified

#### snow_golem

- The Pumpkin field now defaults to true if not specified

#### tnt_minecart

- The fuse field now defaults to 80 if not specified
- The explosion_power field now defaults to 4 if not specified
- The explosion_speed_factor field now defaults to 1 if not specified

#### trader_llama

- The DespawnDelay field now defaults to 47999

#### villager

- The FoodLevel and Xp fields now default to 0 if not specified
- The ConversionTime field will no longer be preserved when removed

#### wandering_trader

- The DespawnDelay field now defaults to 0 if not specified

#### zombie

- The DrownedConversionTime field will no longer be preserved when removed

#### zombie_villager

- The Xp field now defaults to 0 if not specified
- The ConversionTime field will no longer be preserved when removed

#### arrow, spectral_arrow, trident

- The damage field now defaults to 2 if not specified

#### dragon_fireball, wind_charge, breeze_wind_charge, wither_skull, small_fireball, and large_fireball

- The acceleration_power field now defaults to 0.1 if not specified

#### small_fireball and large_fireball

- The ExplosionPower field now defaults to 1 if not specified

#### block_display, item_display, and text_display

- The interpolation_duration, teleport_duration, and start_interpolation fields now default to 0 if not specified
- The view_range field now defaults to 1 if not specified
- The shadow_radius field now defaults to 0 if not specified
- The shadow_strength field now defaults to 1 if not specified
- The width and height fields now default to 0 if not specified

### Block Entity Data

#### campfire

- The CookingTimes and CookingTotalTimes fields will no longer be preserved when removed

#### chiseled_bookshelf

- The last_interacted_slot field now defaults to -1 if not specified

#### hopper

- The TransferCooldown field now default to -1 if not specified

#### jigsaw

- The name, target, and pool fields now default to minecraft:empty if not specified
- The final_state field now defaults to minecraft:air if not specified

#### sculk_shrieker

- The warning_level field now defaults to 0 if not specified

#### structure_block

- The ignoreEntities and showboundingbox fields now default to true if not specified
- The posY field now defaults to 1 if not specified

### NBT Changes

- Any interface with NBT data within the game (SNBT representation, /data) now supports heterogeneous lists, i.e. ones where elements are not of the same type
  - Inserting or replacing into a list of a different type with /data will no longer give an error
  - Inserting into an array type (e.g. \[I;1,2,3\]) is still type-restricted
  - This means that the 'wrapper' objects previously used to represent heterogeneous lists will no longer be observable by in-game means
- /data can no longer traverse paths with an empty key (e.g. /data get ... foo.''.bar)
- The NBT file format is unchanged:
  - Heterogeneous lists are transformed before storage to bypass NBT constraints
  - Example transform: \['a', {'b':3}\] is stored as \[{'':'a'},{'b':3}\]
  - Existing external tools will still be able to read NBT files as before, but heterogeneous lists will be displayed in the transformed form
- No data produced by the game has changed: objects such as Text Components were already producing heterogeneous lists in this form
- Note: these wrapper objects may never be observed in-game, they are only relevant to developers working with the NBT file or network format directly

### SNBT Changes

- The text format for describing object-like data in commands (like NBT, text components, predicates, etc.) has been extended

#### Number Format

- Either whole or fraction parts of a float number can be omitted
  - Examples: .1 and 1. are valid now
- Float numbers now use E notation
  - Example: both 1.2e3 and 1.2E3, 1.2E+3, 12000e-1 are now a valid way to represent 1200.0
- Integer numbers can now be prefixed with 0x to represent hexadecimal numbers and 0b to represent binary numbers
  - Example: 0xbad (equal to 2989), 0xCAFE (equal to 51966), 0b101 (equal to 5)
- Integer numbers now can't start with 0
  - Normally it would mean number is in base-8, but we are restricting it to avoid accidental use
- Numbers can now contain \_ character between sequences of digits (but not at the start or the end of sequence)
  - Example: 0b10_01, 0xAB_CD, 1_2.3_4\_\_5f, 1_2e3_4
- NaN, Inf or hexadecimal float representation are NOT supported
- Type suffixes have been extended:
  - Integer type suffixes (b or B - byte, s or S - short, i or I - integer, l or L) can now be prefixed with s (signed) or u unsigned
  - New suffixes only affect valid range when parsing - values are still stored as signed
    - Example: 240ub is equal to -16sb, while 240sb does not parse
  - When a suffix is used without u or s, it defaults to signed for decimal numbers and unsigned for binary and hexadecimal numbers
  - Note: since b is also a valid hexadecimal digit, byte sized hexadecimal values can only be written with a signed suffix, like 0x11ub or 0x11sb

#### Strings

- Quoted strings can now use escape sequences beyond ', " and \\:
  - Unicode escapes:
    - \x - two digit escape, like \x42
    - \u - four digit escape, like \u2603
    - \U - eight digit escape, like \U00002603
    - \N{\<name\>} - named Unicode character, like \N{Snowman}
  - Built-in escape sequences:
    - \b - backspace, Unicode \x08
    - \s - space, Unicode \x20
    - \t - horizontal tab, Unicode \x09
    - \n - linefeed, Unicode \u0a
    - \f - form feed, Unicode \u0c
    - \r - carriage return, Unicode \u0d
- Unquoted strings now can't start with 0-9, ., +, - to avoid accidental collision with numbers

#### Number Arrays

- Values in arrays (\[B;\], \[I;\], \[L;\]) without a suffix are now assumed to have suffix matching the type of the array
  - Example: \[B;1,2\] is equivalent to \[B; 1b, 2b\]
- Arrays can now also accept types smaller than the array type
  - Example: \[I;1b,2s,3\] is valid and equivalent to \[I;1i,2i,3i\]

#### Lists

- Lists now accept trailing commas
  - Example: \[1,2,\] is valid and equivalent to \[1,2\]
  - Only one trailing comma is allowed, and it must come after a valid element - both \[,\] and \[1,,\] are invalid

#### Compounds

- Compounds (maps) now accept trailing commas
  - Example: {a:b,}
  - Only one trailing comma is allowed, and it must come after a valid key-value pair - both {,} and {a:b,,} are invalid

## Fixed bugs in 25w09a

- [MC-168262](https://bugs.mojang.com/browse/MC-168262) - Dead bushes cannot be placed on farmland
- [MC-236100](https://bugs.mojang.com/browse/MC-236100) - End crystal beam appears to be black
- [MC-276861](https://bugs.mojang.com/browse/MC-276861) - The player can sometimes teleport through blocked end portals when moving very fast
- [MC-279229](https://bugs.mojang.com/browse/MC-279229) - SNBT text components prevent \n and \t from working
- [MC-279236](https://bugs.mojang.com/browse/MC-279236) - Flying into water with an elytra puts the player into an erroneous state
- [MC-279250](https://bugs.mojang.com/browse/MC-279250) - SNBT text components prevent unicode escapes from working
- [MC-279252](https://bugs.mojang.com/browse/MC-279252) - Changing a single line of a sign with /data is no longer possible in some situations
- [MC-279278](https://bugs.mojang.com/browse/MC-279278) - Strafing twice in rapid succession while walking forward causes player to sprint
- [MC-279928](https://bugs.mojang.com/browse/MC-279928) - Beacon beam clips into beacon block when far enough away
- [MC-279932](https://bugs.mojang.com/browse/MC-279932) - Beacon beam disappears and reappears when approaching it
- [MC-279942](https://bugs.mojang.com/browse/MC-279942) - Beacon beam can render over fog when outside render distance
- [MC-279947](https://bugs.mojang.com/browse/MC-279947) - Snout of the new cow model is offset vertically by 0.1 pixels
- [MC-280022](https://bugs.mojang.com/browse/MC-280022) - Players can be lit by lava while stepping onto solid blocks next to it
- [MC-280033](https://bugs.mojang.com/browse/MC-280033) - Beacon beams render beyond client render distance
- [MC-280121](https://bugs.mojang.com/browse/MC-280121) - Leaf litter can be placed on walls and fences
- [MC-280123](https://bugs.mojang.com/browse/MC-280123) - Short dry grass and tall dry grass aren't randomly offset, unlike similar blocks
- [MC-280155](https://bugs.mojang.com/browse/MC-280155) - Random ticks can cause entity build-up in lazy chunks
- [MC-280170](https://bugs.mojang.com/browse/MC-280170) - Goats can no longer ram armor stands unless the game rule mobGriefing is set to false
- [MC-280211](https://bugs.mojang.com/browse/MC-280211) - End crystal beams cause OpenGL errors with glDebugVerbosity set to 3

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/baab122c7652b302621f7befd5be40abef9b9b7c/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
