---
title: "Minecraft: Java Edition - 1.21 Pre-Release 1"
date: 2024-06-10T11:20:03Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27439766144013-Minecraft-Java-Edition-1-21-Pre-Release-1
hash:
  h_01J00Y0AMTX1CKBT2ND25C6SPB: new-features
  h_01J00Y0AMTMXKG2KSR18WZYSDH: ominous-trial-spawner
  h_01J00Y0AMTS8HW11Y3SE5MYZSP: changes
  h_01J00Y0AMTSKVFRPTP7FHA2MZV: technical-changes
  h_01J00Y0AMTACR0T1ABT97XQGWT: server-links
  h_01J00Y0AMTQF8TDZ616W66CJ01: data-pack-versions-42-through-46
  h_01J00Y0AMTGBKVPM0MHGMXV3SP: enchantments
  h_01J00Y0AMT6DR086MD7FP6ZM5C: level-based-values
  h_01J00Y0AMT1A2GN79885DX2VJZ: lookup
  h_01J00Y0AMTTWZHKPSEWSBEPCPA: effect-conditions
  h_01J00Y0AMTYNNBDACXYH2T8ZK6: tags
  h_01J00Y0AMTQT30TDGWP1V5ZC2E: block-tags
  h_01J00Y0AMTEJV6ZZE3MMSNHTWJ: loot-tables
  h_01J00Y0AMTK225E7TYWERE7B8Q: conditions
  h_01J00Y0AMTMHG7SGPV4DZ3700K: random_chance_with_enchanted_bonus
  h_01J00Y0AMT06JP0CNFDMB063V6: structures
  h_01J00Y0AMTQANVJZWN857DSM0P: fixed-bugs-in-121-pre-release-1
  h_01J00Y0AMT3XX3SKXHKNAVTMZF: get-the-pre-release
---

We're bringing you the first Pre-Release of 1.21 with leashable boats, portal-able Ender Pearls and bug fixes!

With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

Happy portaling! ;)

## NEW FEATURES

### OMINOUS TRIAL SPAWNER

- Mobs removed by a Trial Spawner converting to Ominous state now drop any items they previously picked up from the ground

## CHANGES

- Mace attack speed has been changed to 0.6
- Doors of different materials can now form a double door
- Ender Pearls that are thrown through portals can now teleport players to a different dimension than the one they are currently in
- It is now possible to ride entities such as Horses or Minecarts through portals
  - When riding entities through portals, the delay before teleporting is not applied

## TECHNICAL CHANGES

- Data Pack version is now 46
- Removed the entitiesWithPassengersCanUsePortals gamerule that was introduced last snapshot. Entity with passengers being able to use portals is now the default behavior.
- Report data generator now includes information about network packets
- The game will now store reports from failed chunks' loads and saves in the debug directory

### SERVER LINKS

- There are some generic-use link names, like "Support" or "Website", without any special functionality

## DATA PACK VERSIONS 42 THROUGH 46

- Added new configurable fields to jigsaw structures and single_pool_element types

### ENCHANTMENTS

#### LEVEL-BASED VALUES

##### lookup

A Level-Based Value type that maps a list of values to specific levels, and applies a fallback if the level is greater than the number of values supplied. Fields:

- values - A list of values indexed by level - 1 to apply, if present
- fallback - A fallback Level-Based Value to apply if the level is greater than the size of values

#### EFFECT CONDITIONS

Unlike with loot tables, all effect conditions need to be inline objects and cannot be references.

### TAGS

#### BLOCK TAGS

- fire_aspect_lightable has been removed
  - With this snapshot, we are temporarily removing the functionality of lighting blocks on fire using the Fire Aspect enchantment, as we want to refine it further. This functionality will be reintroduced in a later release.

### LOOT TABLES

#### CONDITIONS

##### random_chance_with_enchanted_bonus

- chance: field has been removed
- unenchanted_chance: new field for the chance for an unenchanted item
- enchanted_chance: new field for the chance for an enchanted item - a Level-Based Value

### STRUCTURES

- Added liquid_settings field to structures of type minecraft:jigsaw. Possible values:
  - apply_waterlogging: If any waterloggable block overlaps with existing water, it will become waterlogged
  - ignore_waterlogging: Will not waterlog any waterloggable blocks that overlap existing water
  - Default value is apply_waterlogging
- Added optional field override_liquid_settings to single_pool_element element type
  - Same possible values as the liquid_settings in jigsaw structures
  - Overrides the inherited liquid settings from the parent jigsaw structure while generating this pool element

## FIXED BUGS IN 1.21 PRE-RELEASE 1

- [MC-902](https://bugs.mojang.com/browse/MC-902) - The end obsidian platform resets every time entities go through the end portal, which can cause blocks to be deleted
- [MC-50612](https://bugs.mojang.com/browse/MC-50612) - Command blocks do not update when you place them near any source of power
- [MC-97087](https://bugs.mojang.com/browse/MC-97087) - Attributes won't work in main hand if they were in offhand
- [MC-114566](https://bugs.mojang.com/browse/MC-114566) - Can't teleport back to the central island with End Gateway Portal on outer End islands
- [MC-148741](https://bugs.mojang.com/browse/MC-148741) - Selection boxes in some screens are misaligned in comparison with their text
- [MC-160140](https://bugs.mojang.com/browse/MC-160140) - Shulker boxes on the obsidian platform are destroyed and do not drop when a player enters the End
- [MC-169698](https://bugs.mojang.com/browse/MC-169698) - Blocks within igloo basements can generate waterlogged when generating in close proximity to water
- [MC-170907](https://bugs.mojang.com/browse/MC-170907) - Network position deltas are processed relative to a wrong point
- [MC-172031](https://bugs.mojang.com/browse/MC-172031) - Throwing an ender pearl into a Nether or End portal often has no effect
- [MC-191591](https://bugs.mojang.com/browse/MC-191591) - Saddles lose their NBT data when equipped on horses, zombie horses, skeleton horses, mules or donkeys via right-clicking
- [MC-265583](https://bugs.mojang.com/browse/MC-265583) - Incorrect pluralization for skin customization strings for pants
- [MC-265818](https://bugs.mojang.com/browse/MC-265818) - The "gamerule.doVinesSpread.description" string consists of grammatically incorrect word usage
- [MC-266140](https://bugs.mojang.com/browse/MC-266140) - The "Open link" button within the realms menu is improperly capitalized
- [MC-266471](https://bugs.mojang.com/browse/MC-266471) - Trial chambers can intersect aquifers, causing some blocks inside the structure to be waterlogged
- [MC-267050](https://bugs.mojang.com/browse/MC-267050) - Chat disabled strings are missing verbs
- [MC-267071](https://bugs.mojang.com/browse/MC-267071) - The word "packs" within the "download.pack.failed" string is always pluralized
- [MC-267474](https://bugs.mojang.com/browse/MC-267474) - Strings referencing the player's off hand are inconsistently spelled
- [MC-267954](https://bugs.mojang.com/browse/MC-267954) - World upgrade and downgrade realms strings are improperly capitalized
- [MC-268023](https://bugs.mojang.com/browse/MC-268023) - The "selectWorld.experimental.details.title" string displayed within the experimental features details menu is improperly capitalized
- [MC-268185](https://bugs.mojang.com/browse/MC-268185) - Copper grates in trial chambers are waterlogged
- [MC-269921](https://bugs.mojang.com/browse/MC-269921) - Wind charges can be thrown though corners
- [MC-270181](https://bugs.mojang.com/browse/MC-270181) - Wind charges go through an entity if it is close to a player
- [MC-270572](https://bugs.mojang.com/browse/MC-270572) - Programmer Art resource pack duplicates some GUI texture files
- [MC-270649](https://bugs.mojang.com/browse/MC-270649) - The width of challenge advancements header is calculated in relation to the slash formatting of progress counter, causing overlap in some languages
- [MC-270795](https://bugs.mojang.com/browse/MC-270795) - Mobs despawned by Ominous Trial Spawners can delete picked up items
- [MC-270821](https://bugs.mojang.com/browse/MC-270821) - Regular Trial Spawners spawn the first mob with Ominous Trial equipment if they were last active as Ominous
- [MC-270981](https://bugs.mojang.com/browse/MC-270981) - View Bobbing toggle is not available in Accessibility Settings
- [MC-271870](https://bugs.mojang.com/browse/MC-271870) - random_chance_with_looting function base value is for enchantment level 1
- [MC-271897](https://bugs.mojang.com/browse/MC-271897) - End Portal makes items disappear
- [MC-271929](https://bugs.mojang.com/browse/MC-271929) - Applying multiple layers of "using_converts_to" will produce ghost items
- [MC-271971](https://bugs.mojang.com/browse/MC-271971) - Wind Charges sometimes don't prevent fall damage
- [MC-272014](https://bugs.mojang.com/browse/MC-272014) - Ender Dragon death animation is broken since 20w22a (and broken again in 20w45a)
- [MC-272038](https://bugs.mojang.com/browse/MC-272038) - The error "Can't access registry ResourceKey\[minecraft:root / minecraft:game_event\]" is sometimes in the log file
- [MC-272053](https://bugs.mojang.com/browse/MC-272053) - The "armor_effectiveness" effect does not work with projectiles or indirect damage
- [MC-272073](https://bugs.mojang.com/browse/MC-272073) - Item displays with billboard and rotation values create major visual bug
- [MC-272079](https://bugs.mojang.com/browse/MC-272079) - Medium/small Slimes and magma cube's attack reach is too short
- [MC-272198](https://bugs.mojang.com/browse/MC-272198) - Shulkers' models sometimes appear offset upon end city generation
- [MC-272253](https://bugs.mojang.com/browse/MC-272253) - The strength of the riptide enchantment is increased when holding tridents enchanted with riptide in both hands
- [MC-272258](https://bugs.mojang.com/browse/MC-272258) - block.portal.travel sound now plays when teleporting to a different dimension using commands
- [MC-272264](https://bugs.mojang.com/browse/MC-272264) - Narrator button in Accessibility Settings doesn't update upon pressing Ctrl+B
- [MC-272267](https://bugs.mojang.com/browse/MC-272267) - "Changes the blurriness of menu background" lacks punctuation
- [MC-272279](https://bugs.mojang.com/browse/MC-272279) - Resource packs containing TrueType fonts fail to load on x64 macOS systems
- [MC-272308](https://bugs.mojang.com/browse/MC-272308) - Axolots can be attached to new leads when being already leashed
- [MC-272311](https://bugs.mojang.com/browse/MC-272311) - The enchantment glint sometimes doesn't render in interfaces and first person
- [MC-272313](https://bugs.mojang.com/browse/MC-272313) - The game crashes when attempting to open the realms menu
- [MC-272315](https://bugs.mojang.com/browse/MC-272315) - Serial comma is missing from the entitiesWithPassengersCanUsePortals game rule description
- [MC-272322](https://bugs.mojang.com/browse/MC-272322) - When you are riding an entity through portals, you and the entity may teleport to the wrong place
- [MC-272328](https://bugs.mojang.com/browse/MC-272328) - entitiesWithPassengersCanUsePortals game rule description is missing the proper term capitalization
- [MC-272329](https://bugs.mojang.com/browse/MC-272329) - Riding an entity into portals may cause the game to softlock
- [MC-272333](https://bugs.mojang.com/browse/MC-272333) - The gamerule spawnRadius doesn't work anymore on respawn (always respawn at the same place)
- [MC-272339](https://bugs.mojang.com/browse/MC-272339) - Holding crossbows in both hands stacks quick charge
- [MC-272342](https://bugs.mojang.com/browse/MC-272342) - Typo in mining fatigue attribute ID 'minecraft:effect.minining_fatigue'
- [MC-272343](https://bugs.mojang.com/browse/MC-272343) - Ender pearls don't work when riding an entity
- [MC-272344](https://bugs.mojang.com/browse/MC-272344) - When teleported by an ender pearl, the "portal noise fades" sound is played
- [MC-272347](https://bugs.mojang.com/browse/MC-272347) - Upgrading from before 24w21a doesn't update structures saved by structure blocks
- [MC-272355](https://bugs.mojang.com/browse/MC-272355) - Ellipsis text is stringified within NBT text formatter list truncation
- [MC-272361](https://bugs.mojang.com/browse/MC-272361) - Minecarts and Passengers offset from block when riding through portals
- [MC-272364](https://bugs.mojang.com/browse/MC-272364) - Players spawn one block above the obsidian platform when entering an end portal
- [MC-272365](https://bugs.mojang.com/browse/MC-272365) - Inventory Images of All Banners are Completely White
- [MC-272369](https://bugs.mojang.com/browse/MC-272369) - Can respawn in a solid block with default spawnpoint
- [MC-272374](https://bugs.mojang.com/browse/MC-272374) - 24w21b will not upgrade attribute_modifiers from previous versions
- [MC-272399](https://bugs.mojang.com/browse/MC-272399) - Primed TNT entities can't go through an End portal anymore
- [MC-272400](https://bugs.mojang.com/browse/MC-272400) - Shield in Inventory with Banner Shows as White
- [MC-272403](https://bugs.mojang.com/browse/MC-272403) - Portal linking chunk loading changes
- [MC-272406](https://bugs.mojang.com/browse/MC-272406) - Crash when zombie tries to spawn second reinforcement
- [MC-272408](https://bugs.mojang.com/browse/MC-272408) - set_attributes item modifier can add the same attribute modifier twice
- [MC-272424](https://bugs.mojang.com/browse/MC-272424) - Chunks occasionally have large dark areas in the sky
- [MC-272427](https://bugs.mojang.com/browse/MC-272427) - Flame, power, punch, and piercing enchantments no longer work on the last use of the item
- [MC-272430](https://bugs.mojang.com/browse/MC-272430) - Breaking a Carrot/Warped Fungus on a Stick gives a damaged Fishing Rod
- [MC-272438](https://bugs.mojang.com/browse/MC-272438) - End crystal entities can't go through an End portal anymore
- [MC-272442](https://bugs.mojang.com/browse/MC-272442) - Comparator output of jukebox no longer persists on music disc finish
- [MC-272445](https://bugs.mojang.com/browse/MC-272445) - Command blocks made from Ctrl + Pick Block do not activate on first try
- [MC-272469](https://bugs.mojang.com/browse/MC-272469) - When the wind charge, fireball or shulker bullet is in the lava, it will continue to make a high-loudness noise
- [MC-272490](https://bugs.mojang.com/browse/MC-272490) - @n can select dying entities, unlike @e
- [MC-272515](https://bugs.mojang.com/browse/MC-272515) - Component-Modified Saddles get their components wiped when dispensed onto a horse, mule, or camel.

## GET THE PRE-RELEASE

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/57e59ee5d8bc6ce664a7d76de45f8df9c110381f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
