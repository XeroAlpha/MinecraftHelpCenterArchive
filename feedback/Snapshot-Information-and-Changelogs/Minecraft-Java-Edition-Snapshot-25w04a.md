---
title: Minecraft Java Edition - Snapshot 25w04a
date: 2025-01-22T14:31:26Z
updated: 2025-01-22T14:34:33Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/33685490447373-Minecraft-Java-Edition-Snapshot-25w04a
hash:
  h_01JJ76NKJAQ0TV0PH8CB190EC8: new-features
  h_01JJ76NKJAEJ7V3X0A68C035VG: changes
  h_01JJ76NKJAX357YHE7C1E9V5XH: technical-changes
  h_01JJ76NKJAQEGYEXX1HB4XMAN2: data-pack-versions-64
  h_01JJ76NKJA113DK2RG7B2FK20H: commands
  h_01JJ76NKJAG139G1SXV82N8N02: snbt-changes
  h_01JJ76NKJANX4MWXVXZ4W04CWG: tags
  h_01JJ76NKJAQANCAJX1XHAYSMEC: entity-tags
  h_01JJ76NKJASC921TRDYBNMR7CT: damage-type-tags
  h_01JJ76NKJA1GR9NMG8EK57GTH1: cat-variant-tags
  h_01JJ76NKJAHTTRHYJP8VSWZT62: uniform-variant-selection
  h_01JJ76NKJAKTHPJPQB3NT3T0RP: spawn-conditions
  h_01JJ76NKJA4BJAQFCW8TQA93KJ: minecraftbiome
  h_01JJ76NKJA2R7CVGXS3AHEF8JG: minecraftmoon_brightness
  h_01JJ76NKJANWMW1WKJHCZNV9WV: minecraftstructures
  h_01JJ76NKJBC2ZXRDANQ1YW1YPK: wolf-variants
  h_01JJ76NKJBCE62FV18DB8NVKYA: pig-variants
  h_01JJ76NKJBRDWBV0K8QGR9SAGV: cat-variants
  h_01JJ76NKJB26DBPNMD16B3GT9G: frog-variants
  h_01JJ76NKJBMYW3CG488ZBWYSB1: item-components
  h_01JJ76NKJBNWJSGM8QCD7YT365: newweaponcomponent
  h_01JJ76NKJBVM8D5W4QTX5QVBKN: newblocks_attackscomponent
  h_01JJ76NKJBAYB1KA1JRSAD1SC8: newbreak_soundcomponent
  h_01JJ76NKJB0S762H78EGRZSC0Q: newprovides_banner_patternscomponent
  h_01JJ76NKJBSAD7NJFE5ES7NTQX: newprovides_trim_materialcomponent
  h_01JJ76NKJB5KQ81P521PTTHBCN: entity-components
  h_01JJ76NKJB62J7A99Y1KD8PX6V: newtooltip_displaycomponent
  h_01JJ76NKJB824EHWD09QC2RC51: removedhide_additional_tooltipcomponent
  h_01JJ76NKJBRCSKS6X4JKJKAKEY: removedhide_tooltipcomponent
  h_01JJ76NKJBHDBGRYC9P3DZ7Z88: attribute_modifierscomponent
  h_01JJ76NKJBZ0B8B37XRXFS8X4E: dyed_colorcomponent
  h_01JJ76NKJB373KPB5DE1C11HRF: can_place_onandcan_breakcomponents
  h_01JJ76NKJB86E9V53ZCHMPXFQM: enchantmentsandstored_enchantmentscomponents
  h_01JJ76NKJBT4VCRA4MQQ3FQER2: jukebox_playablecomponent
  h_01JJ76NKJBCB51QW5VHZXXV2EW: trimcomponent
  h_01JJ76NKJBZX4KPYQZVTSPYDEQ: unbreakablecomponent
  h_01JJ76NKJB579WED92YQM07F92: particles
  h_01JJ76NKJBCZH0P9NHV8H4X5AC: recipes
  h_01JJ76NKJBRWG67HD2WVGSFQE0: smithing_transformrecipe-type
  h_01JJ76NKJBSJ8TZV8ATT5Y3DAS: smihing_trimrecipe-type
  h_01JJ76NKJBMZFEJJJ10371H6TK: trim-patterns-and-trim-materials
  h_01JJ76NKJB4BAKRB2C4JC7HR9B: loot-functions
  h_01JJ76NKJBCFFTTFEESPTQ3565: toggle_tooltips
  h_01JJ76NKJB4MR6QSPA098FZCKQ: resource-pack-version-49
  h_01JJ76NKJBDJ2WS8FNNFK61RXC: item-models
  h_01JJ76NKJBBQ5FBJKYZWH3T1KY: minecraftcomponentselect-property
  h_01JJ76NKJB3QYAW4MJE2F30DV6: minecraftcomponentboolean-property
  h_01JJ76NKJBBTW67FGHN1EZX60Y: atlas
  h_01JJ76NKJBPQS199KGR91T6BPM: minecraftpaletted_permutationssprite-source
  h_01JJ76NKJB4JVR0W3FX43JKCN4: fixed-bugs-in-25w04a
  h_01JJ76NKJC22BA37DVKP5AQYPW: get-the-snapshot
---

It's time for another snapshot! To kick things off, we are reverting the fixes for [MC-271065](https://bugs.mojang.com/browse/MC-271065) and [MC-152728](https://bugs.mojang.com/browse/MC-152728).

This week's snapshot also comes with a whole slew of datapack updates, including new components and item model capabilities. If you like to play around with datapacks, you will definitely find something fun in this update!

As always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/) and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)! Here's what's new this week:

## New Features

- Added language support for Kyrgyz

## Changes

- Reverted fixes:

  - [MC-271065](https://bugs.mojang.com/browse/MC-271065) - Diagonal movement is not normalized when crouching or using certain items
  - [MC-152728](https://bugs.mojang.com/browse/MC-152728) - The player continues sprinting when performing actions that slow them down

  > **Developer's Note**: *After consideration, we have decided to revert both fixed bugs. While we do want to revisit these mechanics in the future, it's clear that these recent fixes alone didn't quite hit the mark and caused too many negative side-effects for parkour, speedbridging, and movement in general*

- Crossbows will now show all charged projectiles in their tooltip instead of just the first
  - All charged projectiles will also add their entire tooltip as a subsection, instead of only Fireworks

- All container items with stored contents, such as a Chest picked with Ctrl+Pick Block, will now list the first 4 items in their tooltip just like Shulker Boxes

## Technical Changes

- The Data Pack version is now 64
- The Resource Pack version is now 49

## Data Pack Versions 64

- The potion entity type has been split into splash_potion and lingering_potion
- Filled Maps without any map_id component no longer show an 'Unknown Map' tooltip (invalid IDs will still produce this tooltip)
- Trim pattern and trim material items are no longer specified in the trim registries, but instead in the recipes and items respectively
- Field background in advancement definition no longer contains textures/ prefix and .png suffix
- Changes to entity variant definitions
  - Cat and Frog variants are now data-driven
  - Added uniform way to define variant selection rules

### Commands

- SNBT literals now accept heterogenous lists

### SNBT changes

- SNBT (textual representation of NBT-like data) has been expanded to accept heterogenous lists, i.e. ones where elements are not of the same type
- NBT format is not changed
  - If SNBT command argument transforms value to NBT (like arguments of /data or /summon), lists might be transformed to bypass NBT constraints
  - Example transform: \['a', {'b':3}\] is stored as \[{'':'a'},{'b':3}\]
  - This transform is not reversed by /data

> **Developer's Note**: *Internally, in new code we read and write data in both JSON and NBT formats. This change makes sure that we don't have to worry about NBT limitations when it comes to lists. We have chosen to not expand NBT itself to avoid breaking existing external tools.*

### Tags

#### Entity Tags

- Added \#can_wear_horse_armor - entity that can hold horse armor in their body slot

#### Damage Type Tags

- Renamed \#bypasses_shield to \#bypasses_blocking

#### Cat Variant Tags

- Removed \#default_spawns and \#full_moon_spawns

### Uniform variant selection

- Variants that have spawn rules now use uniform approach for selecting
- Selection process:
  - Every variant field spawn_conditions that contain a list of entries
  - Every entry has a condition and an integer priority
  - Conditions for all variants for given entity type are evaluated for position where entity is being spawned
  - Entries with priority lower than maximum priority of remaining entries are removed
  - Game randomly picks one entry out of remaining ones
  - If no conditions are remaining, variant remains unchanged from default
- Entry format:
  - priority - integer
  - condition - optional structure
    - Fields:
      - type - see below for values
      - Additional fields dependent on type
    - If field is not present, condition is always true

#### Spawn conditions

##### minecraft:biome

- Checks if entity is spawning in specific biomes
- Fields:
  - biomes - single entry, list or a tag describing biomes

##### minecraft:moon_brightness

- Checks if current moon brightness is within certain range
- Fields:
  - range - floating point range (a single number or an object like {"min": 1, "max": 2})

##### minecraft:structures

- Checks if entity is spawning in specific structures
- Fields:
  - structures - single entry, list or a tag describing structures

### Wolf Variants

- Fields angry_texture, tame_texture and wild_texture have been grouped in field assets and renamed to angry, tame and wild
- Added field spawn_conditions described in uniform variant selection above

### Pig Variants

- texture and biome fields are replaced with asset_id and spawn_conditions respectively
- Fields in file:
  - asset_id - namespaced id for this variant asset, resolves to assets/\<namespace\>/textures/\<path\>.png
  - spawn_conditions - field described in uniform variant selection above

### Cat variants

- Cat variants can be data-driven by adding entries to data/\<namespace\>/cat_variant/\<id\>.json
- This feature is experimental
- Fields in file:
  - asset_id - namespaced id for this variant asset, resolves to assets/\<namespace\>/textures/\<path\>.png
  - spawn_conditions - field described in uniform variant selection above

### Frog variants

- Frog variants can be data-driven by adding entries to data/\<namespace\>/frog_variant/\<id\>.json
- This feature is experimental
- Fields in file:
  - asset_id - namespaced id for this variant asset, resolves to assets/\<namespace\>/textures/\<path\>.png
  - spawn_conditions - field described in uniform variant selection above

### Item Components

#### New weapon component

- can_disable_blocking field is replaced with disable_blocking_for_seconds
  - disable_blocking_for_seconds - non-negative float (default: 0)
    - If non-zero, will disable a blocking Shield on successful attack for the specified amount of seconds

#### New blocks_attacks component

- When present, this item can be used like a Shield to block attacks to the holding player
- Format: object with fields:
  - block_delay_seconds - non-negative float (default: 0)
    - The number of seconds that right-click must be held before successfully blocking attacks
  - disable_cooldown_scale - non-negative float (default: 1)
    - Multiplier applied to the number of seconds that the item will be on cooldown for when attacked by a disabling attack (disable_blocking_for_seconds on the weapon component)
    - If 0, this item can never be disabled by attacks
  - damage_reductions - list of object with fields (optional)
    - Controls how much damage should be blocked in a given attack
    - If not specified, all damage is blocked
    - Each entry in the list contributes an amount of damage to be blocked, optionally filtered by damage type
    - Each entry adds to blocked damage, determined by clamp(base + factor \* dealt_damage, 0, dealt_damage)
    - The final damage applied in the attack to the entity is determined by dealt_damage - clamp(blocked_damage, 0, dealt_damage)
    - Entry format:
      - type - damage type id, list of damage type ids, or hash-prefixed damage type tag (optional)
        - This entry will only contribute to the blocked damage if the dealt damage type matches this field
        - If not specified, any damage type will be accepted
      - base - float
        - Constant amount of damage to be blocked
      - factor - float
        - Fraction of the dealt damage that should be blocked
  - item_damage - object with fields (optional)
    - Controls how much damage should be applied to the item from a given attack
    - If not specified, a point of durability is removed for every point of damage dealt
    - The final damage applied to the item is determined by: floor(base + factor \* dealt_damage)
    - The final value may be negative, causing the item to be repaired
    - Format:
      - threshold - non-negative float
        - The minimum amount of damage dealt by the attack before item damage is applied to the item
      - base - float
        - Constant amount of damage applied to the item, if threshold is passed
      - factor - float
        - Fraction of the dealt damage that should be applied to the item, if threshold is passed
  - block_sound - sound event (optional)
    - If specified, this sound will be played when an attack is successfully blocked
  - disable_sound - sound event (optional)
    - If specified, this sound will be played when the item goes on its disabled cooldown due to an attack

#### New break_sound component

- When present, this sound will be played when the item runs out of durability and breaks
- If not present, no sound will be played on break
- This component is present by default on every item type
- Format: sound event
  - e.g. break_sound='item.wolf_armor.break'

#### New provides_banner_patterns component

- When present, this item can be placed in the pattern slot of a Loom
- Format: hash-prefixed banner pattern tag
  - e.g. provides_banner_patterns='#minecraft:pattern_item/globe'

#### New provides_trim_material component

- When present, this item will provide the specified trim material when used in a trimming recipe
- Note that to be used in the built-in smithing recipes, the item must also be in the \#trim_material tag
- As such, the trim material registry definition no longer specifies an item
- Format: trim material id
  - e.g. provides_trim_material='minecraft:iron'

#### Entity components

- Some existing components are now also transferred from spawning item to spawned entity:
  - minecraft:custom_name - any entity
  - minecraft:potion_contents - Lingering Potion to Area Effect Cloud
  - minecraft:potion_duration_scale - Lingering Potion to Area Effect Cloud

#### New tooltip_display component

- This component allows the tooltips provided specifically by any given item component to be surpressed
- This replaces the previous show_in_tooltip fields, hide_additional_tooltip and hide_tooltip components
- Format: object with fields:
  - hide_tooltip - boolean (default: false)
    - If true, the item will have no tooltip when hovered
  - hidden_components - list of item component ids (default: \[\])
    - The tooltips provided by any component in this list will be hidden
    - If that component provides no tooltip, it will have no effect

#### Removed hide_additional_tooltip Component

- Replaced by use of the tooltip_display component and hidden_components field
- The following components previously covered by the hide_additional_tooltip component may need to be hidden:
  - minecraft:banner_patterns
  - minecraft:bees
  - minecraft:block_entity_data
    - Specifically, Mob Spawner and Trial Spawner block entity data will display the configured mob
  - minecraft:block_state
    - Specifically, the honey_level property will be displayed in the tooltip for any item with this specified
  - minecraft:bundle_contents
  - minecraft:charged_projectiles
  - minecraft:container
  - minecraft:container_loot
  - minecraft:firework_explosion
  - minecraft:fireworks
  - minecraft:instrument
  - minecraft:map_id
  - minecraft:painting/variant
  - minecraft:pot_decorations
  - minecraft:potion_contents
  - minecraft:tropical_fish/pattern
  - minecraft:written_book_content
- This additionally means that tooltips from the above listed components are no longer restricted to specific item types
- Note: for existing items in a world with the hide_additional_tooltip component, any of the above listed components also present on the same item will be added to the list to hide in tooltip_display

#### Removed hide_tooltip Component

- Replaced by use of the tooltip_display component and hide_tooltip field

#### attribute_modifiers Component

- Removed show_in_tooltip field, replaced by tooltip_display component
- This component now always uses its simplified form, with the modifiers field inlined to top-level
  - e.g. attribute_modifiers={modifiers:\[...\]} -\> attributes_modifiers=\[...\]

#### dyed_color Component

- Removed show_in_tooltip field, replaced by tooltip_display component
- This component now always uses its simplified form, with the rgb field inlined to top-level
  - e.g. dyed_color={rgb:12345} -\> dyed_color=12345
- The specified color now supports the RGB array format
  - e.g. dyed_color=\[0.5, 1.0, 0.2\]

#### can_place_on and can_break Components

- Removed show_in_tooltip field, replaced by tooltip_display component
- The predicates field has been inlined to top-level, and supports either a single element or list
  - e.g. can_place_on={predicates:\[{blocks:'stone'},{blocks:'dirt'}\]} -\> can_place_on=\[{blocks:'stone'},{blocks:'dirt'}\]
  - or: can_place_on={predicates:\[{blocks:'stone'}\]} -\> can_place_on={blocks:'stone'}

#### enchantments and stored_enchantments Components

- Removed show_in_tooltip field, replaced by tooltip_display component
- These components now always use their simplified form, with the levels field inlined to top-level
  - e.g. enchantments={levels:{sharpness:2}} -\> enchantments={sharpness:2}

#### jukebox_playable Component

- Removed show_in_tooltip field, replaced by tooltip_display component

#### trim Component

- Removed show_in_tooltip field, replaced by tooltip_display component

#### unbreakable Component

- Removed show_in_tooltip field, replaced by tooltip_display component

### Particles

- The particle type tinted_leaves now has a parameter:
  - color: Tint color, specified either as packed int or list of 4 floats

### Recipes

#### smithing_transform Recipe Type

- The base ingredient field is no longer optional
  - Previously, if no base ingredient was given, the recipe would parse but never be useable

#### smihing_trim Recipe Type

- The base, template, and addition ingredient fields are no longer optional
  - Previously, if these ingredients were not given, the recipe would parse but never be useable
- Added new pattern field, controlling which trim pattern will be applied in the recipe
  - As such, the trim pattern registry definition no longer specifies the item
  - Format: trim pattern id
  - e.g. "pattern": "minecraft:bolt"

### Trim Patterns and Trim Materials

- The registry definitions for trim patterns and trim materials no longer include an item field
- Instead, this mapping in patterns and materials is defined by the recipe and item components respectively

### Loot Functions

#### toggle_tooltips

- Now supports any component id in the toggles map
- Any component specified will be toggled in the tooltip_display component

## Resource Pack Version 49

### Item Models

#### minecraft:component Select Property

- If the selected value comes from a registry and the current datapacks does not provide it, the entry will be silently ignored
- In previous snapshot, unrecognized elements caused the whole item model to be ignored

#### minecraft:component Boolean Property

- New conditional model property has been added to condition item model: component
- Uses component predicates (like ones used in item predicates) to match item components
  - However, instead of encoding them as a map of \<predicate type\>:\<predicate value\>, a single predicate is encoded in two fields
- Fields:
  - predicate - type of component predicate (member of minecraft:data_component_predicate_type registry)
  - value - predicate-specific value

### Atlas

#### minecraft:paletted_permutations sprite source

- New field:
  - separator - optional string (default: \_) - value to be used when joining texture and permutation names to produce sprite name

## Fixed bugs in 25w04a

- [MC-98271](https://bugs.mojang.com/browse/MC-98271) - The sound of blocking with a shield is only hearable by other players (not the person blocking)
- [MC-165421](https://bugs.mojang.com/browse/MC-165421) - Bubble columns have the opposite effect on wind charges
- [MC-165461](https://bugs.mojang.com/browse/MC-165461) - Crossbow loading animation stops after loading, even when still holding down right click
- [MC-255756](https://bugs.mojang.com/browse/MC-255756) - When the shield is broken between players, the attacking side has no shield breaking sound
- [MC-276061](https://bugs.mojang.com/browse/MC-276061) - Decorated pot sherds don't visually update until relog when replacing with blank pot
- [MC-278400](https://bugs.mojang.com/browse/MC-278400) - Arrows and tridents move after hitting a block in flowing lava
- [MC-279217](https://bugs.mojang.com/browse/MC-279217) - Arrows and tridents constantly spin after hitting a block in flowing lava
- [MC-279218](https://bugs.mojang.com/browse/MC-279218) - The minecraft:enchant.thorns.hit sound does not play when mobs or players are killed by the Thorns enchantment
- [MC-279225](https://bugs.mojang.com/browse/MC-279225) - Players jitter and land slightly too high up when landing on powder snow while wearing leather boots
- [MC-279232](https://bugs.mojang.com/browse/MC-279232) - SNBT text components prevent mixing text styles in lists
- [MC-279389](https://bugs.mojang.com/browse/MC-279389) - The minecraft:entity.arrow.hit_player sound is played when player is hit by an arrow shot by himself
- [MC-279454](https://bugs.mojang.com/browse/MC-279454) - hide_additional_tooltip no longer hides author and generation on written books
- [MC-279480](https://bugs.mojang.com/browse/MC-279480) - The "test_instance_block.reset_success" string incorrectly spells the word "succeeded" as "succeded"
- [MC-279481](https://bugs.mojang.com/browse/MC-279481) - Leaf litter no longer generates in forests or wooded badlands
- [MC-279482](https://bugs.mojang.com/browse/MC-279482) - Elements within the test block and test instance block menus are not selected in order when using the TAB key
- [MC-279483](https://bugs.mojang.com/browse/MC-279483) - Test blocks set to start mode show the "Message:" text despite no text field being present
- [MC-279485](https://bugs.mojang.com/browse/MC-279485) - Test block and test instance block menus have blurred backgrounds
- [MC-279486](https://bugs.mojang.com/browse/MC-279486) - Some strings displayed within the test instance block interface are untranslatable
- [MC-279487](https://bugs.mojang.com/browse/MC-279487) - The "Test Instance ID" and "Test Structure Size" text within the test instance block interface are positioned too far to the right
- [MC-279488](https://bugs.mojang.com/browse/MC-279488) - Leaf litter generates very sparsely in Dark Forests
- [MC-279489](https://bugs.mojang.com/browse/MC-279489) - An unexpected error occurs when attempting to create tests with large sizes
- [MC-279490](https://bugs.mojang.com/browse/MC-279490) - No command feedback messages are displayed when attempting to reset tests that don't exist
- [MC-279491](https://bugs.mojang.com/browse/MC-279491) - The "commands.test.no_tests" raw translation key is displayed when using "/test run..." commands in situations where no tests exist
- [MC-279492](https://bugs.mojang.com/browse/MC-279492) - An unexpected error occurs when attempting to locate tests that don't exist
- [MC-279493](https://bugs.mojang.com/browse/MC-279493) - No command feedback messages are displayed when using the "/test create" command
- [MC-279498](https://bugs.mojang.com/browse/MC-279498) - Test blocks and test instance blocks aren't part of the "#minecraft:dragon_immune" or "#minecraft:wither_immune" tags
- [MC-279502](https://bugs.mojang.com/browse/MC-279502) - Axolotl variants are no longer saved when bucketing
- [MC-279504](https://bugs.mojang.com/browse/MC-279504) - "minecraft:enchantments" component does not work on the select property of Item Models
- [MC-279505](https://bugs.mojang.com/browse/MC-279505) - Horse-esque mobs that disallow horse armor still show an non-interactive slot
- [MC-279511](https://bugs.mojang.com/browse/MC-279511) - Using "minecraft:always_pass" while the player is inside the test zone breaks the world
- [MC-279518](https://bugs.mojang.com/browse/MC-279518) - Test environment accepts minecraft:raining instead of minecraft:weather
- [MC-279519](https://bugs.mojang.com/browse/MC-279519) - Some words within some test command strings are always pluralized
- [MC-279522](https://bugs.mojang.com/browse/MC-279522) - GameTest entrypoint doesn't load zip datapacks
- [MC-279527](https://bugs.mojang.com/browse/MC-279527) - GameTest entrypoint doesn't load custom tests from datapacks
- [MC-279538](https://bugs.mojang.com/browse/MC-279538) - The key name of the test instances field that represents the namespaced ID of the test environment is different from the changelog
- [MC-279539](https://bugs.mojang.com/browse/MC-279539) - Villager variant is not applied to spawned zombie villagers
- [MC-279553](https://bugs.mojang.com/browse/MC-279553) - Players using items no longer turn their body in the moving direction while moving diagonally
- [MC-279570](https://bugs.mojang.com/browse/MC-279570) - Some piston operations don't send neighbor updates
- [MC-279573](https://bugs.mojang.com/browse/MC-279573) - The "test_instance_block.error.no_test" string is missing the word "no"
- [MC-279588](https://bugs.mojang.com/browse/MC-279588) - Test instance field typo 'sky_accesss'
- [MC-279599](https://bugs.mojang.com/browse/MC-279599) - /test pos is offset by one on the y and z axis
- [MC-279601](https://bugs.mojang.com/browse/MC-279601) - "test.error.expected_entity_at_pos" translation is missing
- [MC-279646](https://bugs.mojang.com/browse/MC-279646) - Toggling fullscreen with F11 does not visually update the fullscreen option in the video settings menu
- [MC-279653](https://bugs.mojang.com/browse/MC-279653) - Block Entity Data desynchronizes after subsequent setblock commands

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/e003d151668a0eff64c1191972707655e341f8f5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
