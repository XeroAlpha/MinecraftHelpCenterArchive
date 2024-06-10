---
title: "Minecraft: Java Edition - Snapshot 24w19b"
date: 2024-06-10T11:16:37Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27439656840589-Minecraft-Java-Edition-Snapshot-24w19b
hash:
  h_01J00XSJGKV09DH3FK2XA1V19E: fixed-bugs-in-24w19b
  h_01J00XSJGK92CMRXRS221747NM: mace-changes-from-24w18a
  h_01J00XSJGK2Z8BHBPFJ8RM3DT8: changes
  h_01J00XSJGKC4HCCH0TB4QMBBJ4: sounds
  h_01J00XSJGKJAWYBJ2YKZ8EC61F: chunk-loading-improvements
  h_01J00XSJGK37PNHK6ZR5S6QEY8: technical-changes
  h_01J00XSJGKH1V57AD51F6NXT7G: data-pack-version-43
  h_01J00XSJGK4BD5K4TV8EH4NBVY: enchantments
  h_01J00XSJGK1RG5DVZXDYT3F61D: entity-effect-types
  h_01J00XSJGK54QE5SWNWG5B762K: tags
  h_01J00XSJGKR14PAF78973AWRBW: directory-renames
  h_01J00XSJGKWW8EXSQMVTWCVJ01: block-tags
  h_01J00XSJGKP6WRPGKRW4GS956X: damage-type-predicate
  h_01J00XSJGKD5S6JD36Y41ZH8QX: fixed-bugs-in-24w19a
  h_01J00XSJGKC4PMDGPRNNMB09AP: ""
  h_01J00XSJGKFN4JFFZ3TA0AV4XE: get-the-snapshot
---

Update: Oh wow, we never could have guessed you all were so violent! Here's a 24w19b, fixing a crash when a Villager died.

The weekend is right around the corner, and what better way to celebrate that fact than by bringing you a serving of Snapshot Friday? This one rounds off the week by introducing performance improvements to chunk loading, alongside the usual assortment of technical improvements and bug fixes.

On another note, last week's Snapshot introduced some changes to the Mace that went undocumented in the 24w18a changelog. That was a whoopsie on our end, and to clear up any confusion we've decided to add those changes to this changelog in addition to updating the previous one. We're sorry about that!

Happy mining!

## FIXED BUGS IN 24W19B

- [MC-271843](https://bugs.mojang.com/browse/MC-271843) - Crash when a villager dies

## MACE CHANGES FROM 24W18A

- Raised Mace durability from 250 to 500
- Reduced Mace base damage to 5
- Lower the Mace attack speed from -2.4 to -3.5
- Reduced Density damage per level per block to 0.5
- Mace Smash attack damage now has a fall off:
  - First 3 blocks fallen give 4 damage per block
  - Next 5 blocks fallen give 2 damage per block
  - Any block fallen after that give 1 damage per block
- Density and Breach are now incompatible with each other and the other damage enchantments (Smite and Bane of Arthropods)

## CHANGES

- Blocks frozen by Frost Walker now emit "Block Placed" vibrations (frequency 13)
- Changes to sounds
- Improved chunk loading performance

### SOUNDS

- Added 4 new cave ambient sounds
- Replaced turn off and turn on sounds for Copper Bulb with one toggle sound

### CHUNK LOADING IMPROVEMENTS

- When reading an already generated chunk from disk, surrounding chunks are no longer unnecessarily loaded
  - This is also visible on the singleplayer world loading screen
- The new system has less memory and CPU overhead

## TECHNICAL CHANGES

- Data Pack version is now 43

## DATA PACK VERSION 43

- The custom_data component can now be specified as an SNBT string to preserve type information in JSON
  - This is the same as is used in the set_custom_data loot function and custom_data predicate
- The food item component has new fields:
  - using_converts_to: item with components (optional)
    - Once consumed, the food item will be replaced with the specified item
    - e.g. food={nutrition:1,saturation:0,using_converts_to:{id:"poisonous_potato",components:{"minecraft:custom_name":'"Wait what?"'}}}
- Registry decorated_pot_patterns has been renamed to decorated_pot_pattern
- Removed legacy tag directory names
- Removed power NBT tag and replaced with acceleration_power tag with a number value that contol the projectiles acceleration (and maximum speed)
  - This change affects the following projectiles; dragon_fireball, large_fireball, small_fireball, fireball, breeze_wind_charge, wind_charge, wither_skull
- New NBT tag dimension_padding for structures
  - ensures that a structure is not generating through the edges of a dimension by adding vertical padding to its bounding box
  - default is 0
  - Trial Chambers have a padding of 10 since they are generated deep underground and sometimes would intersect with Bedrock layer

### ENCHANTMENTS

#### ENTITY EFFECT TYPES

- Added field trigger_game_event for effect types replace_block, replace_disc and set_block_properties
  - Format: Optional Game Event ID for a game event to trigger when a block has been replaced

### TAGS

#### DIRECTORY RENAMES

- Some types that used legacy directory names (based on plural name of element) have been renamed to match registry name
- Affected directories:
  - tags/items -\> tags/item
  - tags/blocks -\> tags/block
  - tags/entity_types -\> tags/entity_type
  - tags/fluids -\> tags/fluid
  - tags/game_events -\> tags/game_event

#### BLOCK TAGS

- fire_aspect_lightable: All blocks that should be possible to light by hitting with Fire Aspect enchanted tools

#### DAMAGE TYPE PREDICATE

- New option: is_direct - optional boolean
  - When present, requires the damage to be direct (true) or indirect (false)
  - Damage is direct when its direct and source entities are the same

## FIXED BUGS IN 24W19A

- [MC-9568](https://bugs.mojang.com/browse/MC-9568) - Mobs suffocate / go through blocks when growing up near a solid block
- [MC-9644](https://bugs.mojang.com/browse/MC-9644) - Launched falling_block entities do not travel through portals
- [MC-14923](https://bugs.mojang.com/browse/MC-14923) - Players can be kicked for spamming in a singleplayer world with cheats disabled
- [MC-16345](https://bugs.mojang.com/browse/MC-16345) - Reducing the player's base max health using /attribute does not always reduce their current health
- [MC-26304](https://bugs.mojang.com/browse/MC-26304) - Brewing stands reset brew cycle when unloaded
- [MC-96198](https://bugs.mojang.com/browse/MC-96198) - Boats / rafts move into blocks when landing in less than one block deep water
- [MC-175619](https://bugs.mojang.com/browse/MC-175619) - Dispenser drops honey bottle unless empty slot is available
- [MC-252846](https://bugs.mojang.com/browse/MC-252846) - Mobs can pass through fences with carpets on top when growing up
- [MC-253791](https://bugs.mojang.com/browse/MC-253791) - Frogs suffocating when growing
- [MC-267947](https://bugs.mojang.com/browse/MC-267947) - Ender pearls can teleport players in spectator mode
- [MC-267951](https://bugs.mojang.com/browse/MC-267951) - The game freezes and eventually crashes when creating a world with the "spawnChunkRadius" gamerule set to high values
- [MC-267981](https://bugs.mojang.com/browse/MC-267981) - The "Trial Spawner crackles" subtitle is only displayed for a split second upon the "minecraft:block.trial_spawner.ambient" sound being played
- [MC-268772](https://bugs.mojang.com/browse/MC-268772) - Fall damage multiplier attribute has unintuitive coloring
- [MC-269318](https://bugs.mojang.com/browse/MC-269318) - Books placed on a lectern in creative mode are consumed
- [MC-269601](https://bugs.mojang.com/browse/MC-269601) - Mace smash attack does not knock back other players when they are not the attacked entity
- [MC-269633](https://bugs.mojang.com/browse/MC-269633) - Placing an oversized filled bucket resets the stack size to 1
- [MC-269642](https://bugs.mojang.com/browse/MC-269642) - Eating an oversized Soup / Stew resets the stack size to 1
- [MC-269674](https://bugs.mojang.com/browse/MC-269674) - Oversized book and quill stacks reset count when signed
- [MC-269685](https://bugs.mojang.com/browse/MC-269685) - Buckets are lost when consuming oversized milk buckets
- [MC-269686](https://bugs.mojang.com/browse/MC-269686) - Oversized music disc stacks can be duplicated with jukeboxes
- [MC-269708](https://bugs.mojang.com/browse/MC-269708) - Dispensers using an oversized stack of Water Bottles resets the stack size to 1
- [MC-269717](https://bugs.mojang.com/browse/MC-269717) - Cauldron deletes overstacked tinted shulker boxes
- [MC-269809](https://bugs.mojang.com/browse/MC-269809) - Feeding an axolotl an oversized tropical fish bucket resets the stack size to 1
- [MC-270296](https://bugs.mojang.com/browse/MC-270296) - Ominous Item Spawner spawns unstackable arrows with potion effects
- [MC-270635](https://bugs.mojang.com/browse/MC-270635) - Trial spawners textures are inconsistent
- [MC-270684](https://bugs.mojang.com/browse/MC-270684) - set_attributes loot function doesn't accept an empty list
- [MC-270687](https://bugs.mojang.com/browse/MC-270687) - Maces enchanted with wind burst don't reliably protect players from fall damage
- [MC-270779](https://bugs.mojang.com/browse/MC-270779) - Getting data with /data command from a block/chest with a large amount of data can cause the game to crash
- [MC-270818](https://bugs.mojang.com/browse/MC-270818) - Data generator items report is not deterministic
- [MC-270926](https://bugs.mojang.com/browse/MC-270926) - "foodSaturationLevel" can be negative
- [MC-270965](https://bugs.mojang.com/browse/MC-270965) - The data type of the "minecraft:custom_data" component of the recipe result will be forcibly modified
- [MC-271001](https://bugs.mojang.com/browse/MC-271001) - Items in a container can be given a count above 99 (to max integer), and can crash the world
- [MC-271005](https://bugs.mojang.com/browse/MC-271005) - Knowledge books with a max stack size over 1 consume all items in the stack when used
- [MC-271026](https://bugs.mojang.com/browse/MC-271026) - Components that set a status effect sometimes lose parts of the data
- [MC-271094](https://bugs.mojang.com/browse/MC-271094) - Entity ID inside EntityTag is ignored when updating a world to 1.20.5
- [MC-271159](https://bugs.mojang.com/browse/MC-271159) - Banner pattern entries without colors are invalidated when upgrading to 1.20.5
- [MC-271170](https://bugs.mojang.com/browse/MC-271170) - Unexpected error when modifying skull's custom name to an invalid value
- [MC-271398](https://bugs.mojang.com/browse/MC-271398) - Crafting ingredients remain in the grid after crafting certain items, causing item duplication
- [MC-271400](https://bugs.mojang.com/browse/MC-271400) - The quick charge enchantment on crossbows no longer increases the crossbow loading speed
- [MC-271402](https://bugs.mojang.com/browse/MC-271402) - Sharpness and mob-specific damage enchantments reduce attack damage instead of increasing it
- [MC-271404](https://bugs.mojang.com/browse/MC-271404) - Breach and Density enchantments aren't mutually exclusive
- [MC-271406](https://bugs.mojang.com/browse/MC-271406) - Blocks reappear when mined instantly
- [MC-271422](https://bugs.mojang.com/browse/MC-271422) - Soul Speed causes your FOV to change whenever you jump
- [MC-271423](https://bugs.mojang.com/browse/MC-271423) - Riptide enchantment does not work properly
- [MC-271427](https://bugs.mojang.com/browse/MC-271427) - Sweep attacks no longer trigger consistently
- [MC-271434](https://bugs.mojang.com/browse/MC-271434) - Campfires knockback the player
- [MC-271435](https://bugs.mojang.com/browse/MC-271435) - Moving while being attacked no longer deals knockback correctly
- [MC-271436](https://bugs.mojang.com/browse/MC-271436) - Mace can no longer be enchanted with Fire Aspect
- [MC-271441](https://bugs.mojang.com/browse/MC-271441) - Fire Protection tooltip is displayed in red text despite being a positive effect
- [MC-271442](https://bugs.mojang.com/browse/MC-271442) - The fire aspect enchantment can change the "lit" states of redstone lamps, redstone torches, copper bulbs, furnaces, smokers, and blast furnaces
- [MC-271444](https://bugs.mojang.com/browse/MC-271444) - The fire aspect enchantment can turn on campfires and candles while underwater
- [MC-271455](https://bugs.mojang.com/browse/MC-271455) - When holding a fire aspect weapon in the mainhand, thrown tridents in the offhand will set mobs on fire
- [MC-271459](https://bugs.mojang.com/browse/MC-271459) - Frost walker deletes waterlogged blocks
- [MC-271461](https://bugs.mojang.com/browse/MC-271461) - Interacting with certain villagers with the villager trade rebalance enabled causes client crash
- [MC-271477](https://bugs.mojang.com/browse/MC-271477) - "projectile_spawned" enchantment effect always activates at 0, 0, 0
- [MC-271484](https://bugs.mojang.com/browse/MC-271484) - Lighting candles and campfires with fire aspect doesn't send vibration to sculk sensors
- [MC-271556](https://bugs.mojang.com/browse/MC-271556) - The drop rate of wither skeleton skulls is lowered by 0.01
- [MC-271565](https://bugs.mojang.com/browse/MC-271565) - The game can crash when upgrading worlds with zombie villagers from before 1.9
- [MC-271632](https://bugs.mojang.com/browse/MC-271632) - Weapon with Bane of Arthropods can only give the target slowness I instead of slowness IV
- [MC-271637](https://bugs.mojang.com/browse/MC-271637) - The enchantment entity effect type "run_command" always runs the command in the overworld
- [MC-271652](https://bugs.mojang.com/browse/MC-271652) - Holding items enchanted with thorns in your hand no longer works as if you were wearing them
- [MC-271710](https://bugs.mojang.com/browse/MC-271710) - Key Binds background is darker than the rest of UI
- [MC-271725](https://bugs.mojang.com/browse/MC-271725) - Enchantment entity effect "apply_mob_effect" never applies an amplifier even if one is defined.
- [MC-271726](https://bugs.mojang.com/browse/MC-271726) - The item.trident.thunder sound can no longer be heard by the player who was struck by a lightning

##  

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/447bfe84875399d44d383de7f534e1cc10bae9a5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
