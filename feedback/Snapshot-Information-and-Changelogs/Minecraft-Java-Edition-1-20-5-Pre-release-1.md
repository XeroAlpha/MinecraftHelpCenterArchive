---
title: "Minecraft: Java Edition - 1.20.5 Pre-release 1"
date: 2024-04-10T14:14:36Z
updated: 2024-04-10T14:14:52Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/25779328513805-Minecraft-Java-Edition-1-20-5-Pre-release-1
hash:
  h_01HV45P1VR348DHBWSNMKKK74X: experimental-features
  h_01HV45P1VR29660BDETFZHJYVN: trial-chambers
  h_01HV45P1VRP5K6A7GF8ABC80HE: ominous-trials
  h_01HV45P1VR1CCDKAJFFCVJGVND: weaving
  h_01HV45P1VRAYSPA9N43NAMHXGZ: infested
  h_01HV45P1VRB1E6TDTF70BS9Y8F: oozing
  h_01HV45P1VR2FA176SVM6XSQ9D2: advancements
  h_01HV45P1VRW8M3SHMGQJ3CE1DP: new-features-in-1205-pre1
  h_01HV45P1VR8RHFYV2YS8V8VAVY: advancements-1
  h_01HV45P1VRT4ZWVQ7Q8DEBYPW2: changes-in-1205-pre1
  h_01HV45P1VR09C9AT2M1DJ8GC62: technical-changes
  h_01HV45P1VRGF4CV97M43Y5GZ06: data-pack-version-39
  h_01HV45P1VRS3CWVATSN821H5DT: modified-loot-functions
  h_01HV45P1VRXT3KWMZYVZPXRT1X: set_contents
  h_01HV45P1VRE8RDM4P6N5V7MD0R: set_custom_data
  h_01HV45P1VR10WVC7C2FKYGCE4E: new-loot-functions
  h_01HV45P1VR7NX0RW0MGMAANDVF: modify_contents
  h_01HV45P1VRA5RYHVZ2W23HQ472: set_item
  h_01HV45P1VRAT8QE46GWZX2MQR5: filtered
  h_01HV45P1VRZFRYCWGSFF15YQS9: set_custom_model_data
  h_01HV45P1VRNNTDW71JXA9JP2NN: new-item-sub-predicates
  h_01HV45P1VRN5KHNBJRJGW28HHZ: collection-matcher
  h_01HV45P1VS3W1DKZZ8EF8JBBHQ: container
  h_01HV45P1VST15N1KSARTV91G6S: bundle_contents
  h_01HV45P1VSNRDR6VS49R29A7TT: firework_explosion
  h_01HV45P1VS897YR0XW6H0S24JF: fireworks
  h_01HV45P1VS5TG71HESNS3BS4D3: writable_book_content
  h_01HV45P1VSV4WRW754WH5PBE9C: fireworks-1
  h_01HV45P1VSFAEX28FSZBGVNV34: attribute_modifiers
  h_01HV45P1VSYZAA84P97DF8E7PD: trim
  h_01HV45P1VSG3SSTTK511BKKXBV: particle-representation
  h_01HV45P1VSVFGEC8354NYNBZNP: fixed-bugs-in-1205-pre-release-1
  h_01HV45P1VTEKTADRATHM58N4WV: get-the-pre-release
---

It is now time for the first Pre-release of Minecraft 1.20.5, featuring some tweaks to Trial Chambers and Ominous Trials, as well as new advancements, a big set of technical tweaks and changes, and lots of bug fixes.

From now on, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

## EXPERIMENTAL FEATURES

### TRIAL CHAMBERS

- More consistently buried by terrain when found underground
- Remade 'Chamber 6' with variations, and renamed it to 'Assembly'
- Added a new trap dispenser style to chambers
- Fixed various broken jigsaw connections in the corridors
- Chamber Eruption:
  - Stopped Tuff Bricks from spawning in the air
  - Added more lights to quadrants

### OMINOUS TRIALS

- Mobs that can wear equipment will now often spawn with enchanted weapons and armor
  - Armor enchantments include Protection IV, Projectile Protection IV and Fire Protection IV
  - Weapon enchantments include Sharpness I, Knockback I, Power I and Punch I
- Mobs that wear equipment no longer have a chance to drop their equipment on death
- Players are now chosen 50% of the time when an Ominous Trial Spawner chooses which entity to drop projectiles on top of
  - Projectiles now spawn more accurately above chosen entities

### WEAVING

- Now more consistently spawns 2-3 cobwebs on death
- Players are now affected by the movement buff through Cobwebs
  - Move through Cobweb with 50% of their normal speed instead of 25%

### INFESTED

- Now has a 10% chance to spawn 1-2 Silverfish instead of 5%
- Silverfish will now spawn at the center of the entity's bounding box and fling out in the direction the entity is facing

### OOZING

- Will only spawn slimes in a given 5x5x5 area up to the max entity cramming count

### ADVANCEMENTS

- Added Revaulting - Unlock an Ominous Vault with an Ominous Trial Key

## NEW FEATURES IN 1.20.5-PRE1

### ADVANCEMENTS

- Added the following advancements:
  - Isn't it Scute? - Get Armadillo Scutes from an Armadillo using a Brush
  - Snip it! - Remove Wolf Armor from a Wolf using Shears
  - Good as New - Repair a damaged Wolf Armor using Armadillo Scutes
  - The Whole Pack - Tame one of each Wolf variant

## CHANGES IN 1.20.5-PRE1

- Added support for Viossa language

## TECHNICAL CHANGES

- The Data Pack version is now 39

## DATA PACK VERSION 39

- Added new item sub-predicates and loot functions
- Added new terrain adaptation type for structures: encapsulate
  - Density will be added all around every piece of a structure
  - Ideal for structures that need to be entirely covered underground
- The page limit in Written Books has been removed
- The combination of max_stack_size and max_damage components is no longer allowed in commands and data pack definitions
- Added a new option body in entity equipment sub-predicate to match the item in the body armor slot of an entity
- The saturation_modifier field on the food component has been replaced with saturation
  - saturation is the exact value added to the player's saturation level
  - In respect to the former saturation_modifier, this is defined by saturation = nutrition \* saturation_modifier \* 2
- Particle representation in commands and area effect clouds has been changed
- Changed optional equipment_loot_table field in the SpawnPotentials of Monster Spawners and spawn_potentials of Trial Spawner configs
  - Now named equipment instead of equipment_loot_table
  - Format: object with fields
    - loot_table - A loot table used to generate the equipment
    - slot_drop_chances - An optional map of equipment slot to specified drop chance
      - Can also be a single value instead of a list to apply to all slots: e.g. slot_drop_chances: 0.0f will apply a chance of 0% to all slots
  - e.g. equipment: {loot_table: "minecraft:equipment/trial_chamber", slot_drop_chances: {"head": 0.0f, "chest": 0.25f, "legs": 1.0f, "feet": 0.25f}}
  - If present, rolled items from the specified loot table will be equipped to the mob that spawns
- Removed Item tag minecraft:tools (overlapping with minecraft:breaks_decorated_pots)
- Added Entity Type tag minecraft:punchable_projectiles for projectiles which should be able to be punched and deflected toward the direction the player is looking
- Added Enchantment tag minecraft:tooltip_order controlling which order Enchantments are listed in tooltips

### MODIFIED LOOT FUNCTIONS

#### SET_CONTENTS

- Unused field type has been removed
- Added new mandatory field component:
  - Describes target component to be filled with items
  - Existing contents will be replaced
  - Allowed values: container, bundle_contents, charged_projectiles
  - bundle_contents and charged_projectiles will ignore empty stacks

#### SET_CUSTOM_DATA

Field tag now accepts both SNBT data written as a string (existing format) and unflattened tags

### NEW LOOT FUNCTIONS

#### MODIFY_CONTENTS

- Apply modifier function to every item inside a component
- If component does not exist, it will not be added
- Fields:
  - conditions- list of conditions to filter this function
  - component - target component
    - Allowed values: container, bundle_contents, charged_projectiles
  - modifier - function or list of functions to be applied to every item inside container

#### SET_ITEM

- Replaces item type of item stack without changing count and components
- Fields:
  - conditions - list of conditions to filter this function
  - item - new item type

#### FILTERED

- Applies sub-function only to items that match item predicate
- Fields:
  - conditions - list of conditions to filter this function
  - item_filter - item predicate used to match items
  - modifier - functions to apply to matching items

#### SET_CUSTOM_MODEL_DATA

- Sets custom_model_data component
- Fields:
  - conditions - list of conditions to filter this function
  - value - integer number provider

### NEW ITEM SUB-PREDICATES

General rules of component predicates:

- Unless otherwise specified, a field in predicate with the same name as a field in component that matches (i.e. has the same name as predicate) will match that field value
- Those fields will usually have the same type as in the components, but will be optional.
- Exceptions:
  - List fields will be replaced with collection matchers (see below)
  - Integer and float fields will be replaced with ranges
  - Registry ids will be replaced with a type that accepts id, list of ids or a tag

#### COLLECTION MATCHER

Collection matcher is a shared part of predicate used for matching collections.Every instance of this matcher will have same fields with same functionality, with only difference being type of matched elementFields:

- size - integer range to match against collection size
- contains - a list of element predicates
  - All conditions must match for predicate to pass
  - Not all elements in tested container have to be matched
  - Elements can be in any order
  - Single element can match multiple predicates
  - Examples (when matching item stacks):
    - {contents:\[{item:diamond}\]} - will match when there is at least one diamond item
    - {contents:\[{item:diamond}, {item:dirt}\]} - will match when there is at least one diamond item and at least one dirt item
- count - a list of matchers on element counts
  - Entry fields:
    - test - element matcher
    - count - optional integer range to check against number of elements passing test
  - Examples (when matching item stacks):
    - {count:\[{count:3,test:{items:diamond}}\]}} will match only when there are exactly 3 stacks of diamonds (no matter the stack size)

#### CONTAINER

- Matcher for container component (like shulker box)
- Fields:
  - items - optional collection matcher
    - Note: empty items are ignored. That means container~{items:{size:3}} will only pass if there are exactly 3 non-empty stacks in container

### BUNDLE_CONTENTS

- Matcher for bundle_contents component
- Fields:
  - items - optional collection matcher

### FIREWORK_EXPLOSION

- Matcher for firework_explosion component
- Fields
  - shape - optional matcher for shape, same values as shape field in minecraft:firework_explosion component
  - has_trail - optional boolean
  - has_twinkle - optional boolean

### FIREWORKS

- Matcher for fireworks component
- Fields:
  - explosions - optional collection matcher for firework_explosion predicates
  - flight_duration - optional integer range check for flight duration
- Example: minecraft:fireworks~{explosions:{contains:\[{shape:small_ball}\]}}\] - matches if firework has at least one explosion with small_ball shape

### WRITABLE_BOOK_CONTENT

- Matcher for writable_book_content component
- Fields
  - pages - optional collection matcher for strings (matching only unfiltered contents of page)

### FIREWORKS

- Matcher for written_book_content component
- Fields
  - pages - optional collection matcher for chat components (matching only unfiltered contents of page)
  - author - optional string value
  - title - optional string value (matching only value)
  - generation - optional integer range check for generation
  - resolved - optional boolean

### ATTRIBUTE_MODIFIERS

- Matcher for attribute_modifiers component
- Fields:
  - modifiers - optional collection matcher for following entries with following fields:
    - attribute - optional id, list of ids or tag for attribute to be matched
    - id - optional UUID
    - name - optional string
    - amount - optional double range check
    - operation - optional operation type (same values as operation field from attribute_modifiers component)
    - slot - optional applicable slot type (same values as slot field from attribute_modifiers component)

### TRIM

- Matcher for trim component
- Fields:
  - material - optional id, list of ids or tag for material to be matched
  - pattern - optional id, list of ids or tag for pattern to be matched

### PARTICLE REPRESENTATION

- Particle options in commands and in fields like Particles in Area Effect clouds now use the same representation as worldgen files (like existing biomes' ambient particle settings)
- For example, command /particle minecraft:dust 1.0 0.0 0.0 2.0 ... becomes /particle minecraft:dust{color:\[1.0, 0.0, 0.0\], scale:2.0} ...
- The syntax for particles without extra options (like minecraft:villager) remains unchanged
- Changes to block particles (minecraft:block, minecraft:block_marker, minecraft:falling_dust, minecraft:dust_pillar) options:
  - Field value has been renamed to block_state
  - Field block_state now also accepts plain block name to represent default block state
  - Example transformations:
    - minecraft:block minecraft:redstone_lamp\[lit=true\] -\> minecraft:block{block_state: {Name: "minecraft:redstone_lamp", Properties: {lit: "true"}}}
    - minecraft:block minecraft:diamond_block -\> minecraft:block{block_state: "minecraft:diamond_block"}
- Changes to minecraft:item options:
  - Field value has been renamed to item
  - Field item now also accepts plain item name to represent item stack with default components
  - count field is now ignored
  - Example transformations:
    - minecraft:item minecraft:dirt -\> minecraft:item{item: {id: "minecraft:dirt"}}
    - minecraft:item minecraft:dirt -\> minecraft:item{item: "minecraft:dirt"}
- Changes to dust_color_transition options:
  - Field fromColor has been renamed to from_color
  - Field toColor has been renamed to to_color
  - Example transformation: dust_color_transition 1.0 0.0 0.0 0.5 0.0 1.0 0.5 -\> dust_color_transition{from_color: \[1.0f, 0.0f, 0.0f\], scale: 0.5f, to_color: \[0.0f, 1.0f, 0.5f\]}
- Changes to entity_effect options:
  - Field value has been renamed to color
  - Field color now also accepts list of floats representing RGBA color

## FIXED BUGS IN 1.20.5 PRE-RELEASE 1

- [MC-165435](https://bugs.mojang.com/browse/MC-165435) - Can't trigger flying mode in creative while standing in the middle of 2×2 magma block bubble column
- [MC-188497](https://bugs.mojang.com/browse/MC-188497) - AngerTime and AngryAt cannot be set on summon
- [MC-207353](https://bugs.mojang.com/browse/MC-207353) - Ghast fireballs and wind charges can't be redirected in melee if the attack does 0 damage
- [MC-263315](https://bugs.mojang.com/browse/MC-263315) - Attack Target of hoglins/zoglins can't be detected by /execute on target
- [MC-264456](https://bugs.mojang.com/browse/MC-264456) - Entity targeted by frogs and axolotls can't be detected by /execute on target
- [MC-265390](https://bugs.mojang.com/browse/MC-265390) - Forceload Command provides wrong output
- [MC-267934](https://bugs.mojang.com/browse/MC-267934) - Sending ClientboundTransferPacket followed by disconnect just kicks the player
- [MC-268000](https://bugs.mojang.com/browse/MC-268000) - The client crashes when using /give to give players a skull
- [MC-268346](https://bugs.mojang.com/browse/MC-268346) - Jump can be used with generic.jump_strength set to 0 resulting in a speed boost
- [MC-268947](https://bugs.mojang.com/browse/MC-268947) - Flying cannot be initiated reliably when the minecraft:generic.gravity attribute is increased
- [MC-269191](https://bugs.mojang.com/browse/MC-269191) - Old villagers can't trade
- [MC-269192](https://bugs.mojang.com/browse/MC-269192) - Breeze is not affected by the 'execute on target' command
- [MC-269266](https://bugs.mojang.com/browse/MC-269266) - Area effect cloud particles from creeper explosions are incorrectly tinted
- [MC-269320](https://bugs.mojang.com/browse/MC-269320) - Books with more than 100 pages get cut off when upgraded
- [MC-269357](https://bugs.mojang.com/browse/MC-269357) - Flow and guster banner pattern descriptions display as raw translation strings
- [MC-269366](https://bugs.mojang.com/browse/MC-269366) - Mace doesn't break Decorated Pots unlike other tools
- [MC-269496](https://bugs.mojang.com/browse/MC-269496) - You don't get any damage if you fight against the breeze in a minecart or in a boat
- [MC-269501](https://bugs.mojang.com/browse/MC-269501) - The text above the hotbar has no background, even when the "Text Background" setting is "Everywhere" in spectator mode
- [MC-269508](https://bugs.mojang.com/browse/MC-269508) - Player keeps vertical momentum when jumping when landing on the ground from sonic boom
- [MC-269609](https://bugs.mojang.com/browse/MC-269609) - Wind charges can harm the ender dragon while it perches atop the end portal, unlike arrows and tridents.
- [MC-269610](https://bugs.mojang.com/browse/MC-269610) - Wind charges have the capability to harm the wither when it has reached half health or less
- [MC-269680](https://bugs.mojang.com/browse/MC-269680) - Game crashes when trying to save after modifying item stack to have a max_stack_size below its current stack size
- [MC-269707](https://bugs.mojang.com/browse/MC-269707) - Brewing stand slots have artificial maximum stack size of 64
- [MC-269765](https://bugs.mojang.com/browse/MC-269765) - Mace damage does not reset after a hit while still falling
- [MC-269933](https://bugs.mojang.com/browse/MC-269933) - limit_count item modifier can create overstacked items
- [MC-269947](https://bugs.mojang.com/browse/MC-269947) - Clicking spam with Mace causes very high damage
- [MC-269948](https://bugs.mojang.com/browse/MC-269948) - The subtitle for the "minecraft:event.mob_effect.raid_omen" sound event displays as a raw translation string
- [MC-269949](https://bugs.mojang.com/browse/MC-269949) - New "Raid Omen" effect texture is using Programmer Art Evoker as base
- [MC-269954](https://bugs.mojang.com/browse/MC-269954) - Striking non-living entities with a mace enchanted with Wind Burst propels the player upward, even when they are flying
- [MC-269955](https://bugs.mojang.com/browse/MC-269955) - When flying in creative mode, hitting ender dragons with a mace enchanted with Wind Burst pushes the player upward, unlike when attacking other mobs
- [MC-269959](https://bugs.mojang.com/browse/MC-269959) - "Not a list" printed to console when loading into a world
- [MC-269961](https://bugs.mojang.com/browse/MC-269961) - Non-player entities with the Weaving effect can't walk through Cobweb at normal speeds
- [MC-269963](https://bugs.mojang.com/browse/MC-269963) - Bad Omen is not removed when experimental features are disabled
- [MC-269974](https://bugs.mojang.com/browse/MC-269974) - Mobs with the weaving effect, when dying, are unable to replace replaceable blocks with cobwebs
- [MC-269976](https://bugs.mojang.com/browse/MC-269976) - Wind Burst book available from villager trading
- [MC-269977](https://bugs.mojang.com/browse/MC-269977) - Wind Burst enchantment is obtainable in Enchanting Table
- [MC-269980](https://bugs.mojang.com/browse/MC-269980) - Wind Burst enchantment triggers from normal attacks rather than smash attacks
- [MC-269993](https://bugs.mojang.com/browse/MC-269993) - Hitting wind charges using mace with Wind Burst creates very high upwards momentum
- [MC-269999](https://bugs.mojang.com/browse/MC-269999) - Potions of Infestation, Oozing and Weaving can be obtained without experimental features enabled
- [MC-270001](https://bugs.mojang.com/browse/MC-270001) - The particle 'minecraft:item minecraft:air' crashes the client
- [MC-270004](https://bugs.mojang.com/browse/MC-270004) - Giving yourself an item with a Wind Burst enchantment level higher than 3, then hitting certain entities crashes the game
- [MC-270005](https://bugs.mojang.com/browse/MC-270005) - Mace smash attack can be done multiple times from a single fall
- [MC-270009](https://bugs.mojang.com/browse/MC-270009) - Entities with the infested effect can spawn silverfish without actually being hurt
- [MC-270048](https://bugs.mojang.com/browse/MC-270048) - Vault textures are inconsistent
- [MC-270060](https://bugs.mojang.com/browse/MC-270060) - The glowing parts of trial spawner textures are inconsistent
- [MC-270094](https://bugs.mojang.com/browse/MC-270094) - Fletcher sells new tipped arrows without experimental features enabled
- [MC-270099](https://bugs.mojang.com/browse/MC-270099) - Killing a mob with Weaving effect places cobwebs even if mobGriefing is disabled
- [MC-270119](https://bugs.mojang.com/browse/MC-270119) - The contents slot for the /item command does not function with shot arrows, tridents, and fireballs
- [MC-270125](https://bugs.mojang.com/browse/MC-270125) - Wind Burst can be obtained from chest and fishing loot
- [MC-270158](https://bugs.mojang.com/browse/MC-270158) - Wind Burst activates while mace is on cooldown
- [MC-270161](https://bugs.mojang.com/browse/MC-270161) - Wind burst enchantment is significantly stronger on vehicle entities
- [MC-270201](https://bugs.mojang.com/browse/MC-270201) - Fishing rod line does not account for the scale attribute in third-person
- [MC-270236](https://bugs.mojang.com/browse/MC-270236) - area_effect_cloud and lingering potions causing potion_contents.custom_color to be slightly transparent
- [MC-270412](https://bugs.mojang.com/browse/MC-270412) - Wind charge item crash on non-experimental worlds.
- [MC-270475](https://bugs.mojang.com/browse/MC-270475) - Container component slot -1 crash

## GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/018c4aa3b1dcd5ac4487456de062072de750f729/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
