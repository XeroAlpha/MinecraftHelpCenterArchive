---
title: "Minecraft: Java Edition - Snapshot 24w12a"
date: 2024-03-20T16:19:02Z
updated: 2025-03-12T10:44:51Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/25179169128205-Minecraft-Java-Edition-Snapshot-24w12a
hash:
  h_01HSEAGEKE4V8WM6HK7J6FQJRP: experimental-features
  h_01HSEAGEKE7JYBZ4AP6CDPB0GX: trial-chambers
  h_01HSEAGEKETMC9H76GC7713KWG: trial-chambers-explorer-map
  h_01HSEAGEKEQEHDVKXK4YJM5J3M: heavy-core
  h_01HSEAGEKEXF0KVHYC7TW4TB9H: advancements
  h_01HSEAGEKE11KS9ZCRQB4J54VG: technical-changes
  h_01HSEAGEKEA50NWNZSXMBY3G8F: data-pack-version-36
  h_01HSEAGEKFAHKP2H7XC9C00G8Q: wolf_variantdefinitions
  h_01HSEAGEKFHSYPGJN4Z84SV7V0: commands
  h_01HSEAGEKF642MAK6GNVQ97EMY: inline-loot-values
  h_01HSEAGEKFXHVF9R12XDZKAA37: loot-tables
  h_01HSEAGEKF7PF9S82X2WPYY0N1: storagenumber-provider
  h_01HSEAGEKFZ0ERA73BRSAZF7QY: set_lorefunction
  h_01HSEAGEKFXSCGXSV5T424SZ9D: set_written_book_pagesfunction
  h_01HSEAGEKFV1CBKERF9YK0YMGN: toggle_tooltipsloot-function
  h_01HSEAGEKFB9HEEWAGHGC15BP3: functions
  h_01HSEAGEKFJA0B5X7HGZSKW1RZ: item-predicate-argument
  h_01HSEAGEKF7MSM8F8QX0NQ8ZS9: predicates
  h_01HSEAGEKF84JBPV2YN8J9ZM0E: item-sub-predicates
  h_01HSEAGEKGV06C1GCB4EB5TV6V: entity-sub-predicates
  h_01HSEAGEKGPEFJ7M71ZYYVPBRZ: wolf
  h_01HSEAGEKGWM4WYTR8FD5WXWW1: catfrogpainting
  h_01HSEAGEKGHDY6HCJ29CQT0YKQ: new-item-stack-components
  h_01HSEAGEKGWQ3ARB24ADZJWQQA: minecraftfood
  h_01HSEAGEKGBD7BKHDHYPEKXA97: minecraftmax_stack_size
  h_01HSEAGEKG1V96T6DTHPJMJXF7: minecraftmax_damage
  h_01HSEAGEKGS3W004NK0A6M748V: minecraftfire_resistant
  h_01HSEAGEKG5HDJAC4Y9J7QWSYF: minecraftrarity
  h_01HSEAGEKGHCRW9576W2614GTC: minecrafttool
  h_01HSEAGEKG0TGK7WVYJYVWJM7R: hide_tooltip
  h_01HSEAGEKG7C7V05D9AC860SDW: new-tags
  h_01HSEAGEKHDRPKYHFH7YCQK1SE: resource-pack-version-30
  h_01HSEAGEKHDMBQ5G8PA7RGWQVZ: fixed-bugs-in-24w12a
  h_01HSEAGEKHKHW8CS6C71PCVQJF: get-the-snapshot
---

Here's snapshot 24w12a with new advancements and several tweaks.

Happy Mining!

## EXPERIMENTAL FEATURES

### TRIAL CHAMBERS

Trial Chambers now generate slightly more rarely and a bit more spaced out from each other

### TRIAL CHAMBERS EXPLORER MAP

- Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for an Explorer Map pointing to a nearby Trial Chamber

### HEAVY CORE

- Can now be waterlogged
- Survives lava flows
- Most efficient tool is now the pickaxe
- Adjusted destroy time and explosion resistance

### ADVANCEMENTS

- Added the following advancements:
  - Minecraft: Trial(s) Edition - Step foot in a Trial Chamber
  - Under Lock & Key - Unlock a Vault using a Trial Key
  - \[Challenge - 40 exp\] Blowback - Kill a Breeze with a deflected Wind Charge
  - Who Needs Rockets? - Use a Wind Charge to launch yourself upward at least 8 blocks
  - Crafters Crafting Crafters - Be near a Crafter when it crafts a Crafter
  - Lighten Up - Scrape a Copper Bulb with an Axe to make it brighter
  - Over-Overkill - Deal 50 hearts of damage in a single hit using the Mace

## TECHNICAL CHANGES

- The Data Pack version is now 36
- The Resource Pack version is now 30
- - Particle entity_effect takes color argument when spawned from command
  - /particle entity_effect \<r\> \<g\> \<b\> \<a\>
  - 4 float values ranging from 0.0 to 1.0 representing RGBA

## DATA PACK VERSION 36

- Added a crafter_recipe_crafted trigger which is triggered when a Crafter ejects a successfully crafted item into the world.
  - \<player\> an entity predicate matching the player who is nearby
  - \<recipe_id\> is the ID of the recipe being crafted
  - \<ingredients\> is a list of item predicates matching the ingredients that form the recipe being crafted
- Added a fall_after_explosion trigger which is triggered when a player begins falling after being knocked upwards by an explosion or wind burst
  - \<player\> an entity predicate matching the player who is falling
  - \<start_position\> a location predicate matching the position the player was at when they were hit by the explosion or burst
  - \<distance\> a distance predicate matching how far the player must be from start_position to cause the trigger to activate
  - \<cause\> an entity predicate matching the entity which caused the explosion or burst to happen
- Added storage loot number provider to access values from command storage
- New Entity Type Tag: sensitive_to_smite - for Entity Types that take extra damage from the Smite Enchantment
- Expanded item predicate syntax used in execute if\|unless items and clear commands
- Removed redundant custom data section ({...}) from item arguments (it's fully replaced by \[custom_data={...}\])
  - To make this transition easier, custom_data item sub-predicate has been changed to allow unquoted SNBT
- Added wolf entity sub-predicate for matching wolf variants
- wolf, cat, frog and painting entity sub-predicates now accept tags and plain lists instead of just single elements
- Changed texture asset paths in wolf_variant to better match other formats
- Command arguments that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions
- Added new item stack components
- Added new loot functions

### WOLF_VARIANT DEFINITIONS

- Field texture has been renamed to wild_texture
- wild_texture, tame_texture and angry_texture no longer require values to be prefixed with textures/ and suffixed with .png

### COMMANDS

#### INLINE LOOT VALUES

Arguments in following commands that previously accepted namespaced ids of loot tables, modifiers and predicates can now also accept inline definitions:

- loot
- item
- execute if predicateValues have same structure as matching JSON files, though they are encoded as SNBT.Example: execute if predicate {condition:weather_check, raining:true}

### LOOT TABLES

#### STORAGE NUMBER PROVIDER

- This number provider is able to access numeric values from command storage directly
- If selected storage does not exist or tag selected by path is not numeric or does not exist, provider returns 0
- Fields:
  - storage - namespaced id of command storage
  - path - NBT path to field

#### SET_LORE FUNCTION

- The replace field has been removed
- Now has mode like set_fireworks and set_written_book_pages

#### SET_WRITTEN_BOOK_PAGES FUNCTION

- pages is now a JSON Object rather than a string containing JSON

#### TOGGLE_TOOLTIPS LOOT FUNCTION

- This function can be used to modify item component tooltip visiblity
- It works by setting fields like show_in_tooltip without changing other values
- Format:
  - toggles - a map of supported item component type to boolean value
- Supported components: trim, dyed_color, enchantments, stored_enchantments, unbreakable, can_break, can_place_on, attribute_modifiers
- Example:
  - {function:"toggle_tooltips","toggles":{"enchantments":false}} will hide enchantments tooltip

#### FUNCTIONS

- Nested lists are no longer supported in function lists

### ITEM PREDICATE ARGUMENT

The item predicate syntax (used in execute if\|unless items and clear commands) has been significantly expanded.

- The general syntax is: \<type\> \[comma-separated list of \<test\>\]
- \<type\> can be one of:
  - item id
  - item tag id prefixed with \#
  - \* to match any item
- \<test\> can have one of 3 forms:
  - \<component_id\>=\<value\> - match exact value of component (same as in previous format)
    - \<value\> is a representation of component value in SNBT format (same as in item give argument)
  - \<component_id\> - check if component exists
  - \<predicate_id\>~\<value\> - check item sub-predicate
    - \<value\> is a representation of item sub-predicate in SNBT format (but otherwise same as one used for advancement and loot table JSON files)
    - Example: \*\[damage~{durability:{min:3}}\] will match any stack with at least 3 uses left
- The special name minecraft:count can be used for matching the stack size
  - count=\<positive int\> will pass only when the stack size equals the given value
  - count~\<int range\> will pass when the stack size is in the specified range
    - Example: \*\[count~{max:2}\] will match any stack with count \<= 2
  - count will always pass
- Any \<test\> entry can be negated by prefixing with !
  - Example: \*\[!count=1\] will match any stack that has count other than 1
- \<test\> elements can be also joined with \| to check multiple alternatives
  - Example: \*\[!damage\|damage=0\] will look for items without damage component or with 0 damage
- The syntax for custom data partial matching ({}) has been removed in favor of using custom_data predicates
  - So stick{a:2} becomes stick\[custom_data~{a:2}\]

### PREDICATES

#### ITEM SUB-PREDICATES

- Predicate minecraft:custom_data now accepts both SNBT data written as a string (existing format) and unflattened tags
  - That means that \*\[custom_data~{a:1}\] and \*\[custom_data~"{a:1}"\] are equivalent
  - Flattened string format has been kept since NBT type information can't be expressed in JSON

#### ENTITY SUB-PREDICATES

##### wolf

New wolf sub-predicate has been added to match wolf variantsFields:

- variant - wolf variant to match (single entry, list of entries or tag)

##### cat, frog, painting

- Field variant now accepts single entries, list of entries or tags

### NEW ITEM STACK COMPONENTS

#### MINECRAFT:FOOD

- When present, this item will behave as if a food (can be eaten)
- Format: object with fields
  - nutrition: non-negative integer, number of food points to restore when eaten
  - saturation_modifier: float, amount of saturation to restore when eaten
  - is_meat: boolean (default: false)
    - If true, can be fed to Wolves
  - can_always_eat: boolean (default: false)
    - If true, this food can be eaten even if not hungry
  - eat_seconds: float (default: 1.6)
    - The number of seconds that it takes to eat this food item
  - effects: list of effects to apply when eaten (default: \[\])
    - effect: effect instance (same format as custom_effects in minecraft:potion_contents component)
    - probability: float between 0 and 1, chance for the effect to be applied (default: 1)
  - e.g: food={nutrition:4,saturation_modifier:0.1}
- On food items, has an implicit default value for that food type

#### MINECRAFT:MAX_STACK_SIZE

- Controls the maximum stacking size of this item
- Format: integer between 1 and 99
  - e.g. max_stack_size=4
- Has an implicit default value according to the item type (usually 64)

#### MINECRAFT:MAX_DAMAGE

- Controls the maximum amount of damage than an item can take
- If not present, the item cannot be damaged
- Format: positive integer
  - e.g. max_damage=123
- Has an implicit default value for damageable items

#### MINECRAFT:FIRE_RESISTANT

- If present, this item will not burn in fire
- Format: empty object
  - e.g. fire_resistant={}
- Has an implicit default value for fire-resistant items such as Netherite

#### MINECRAFT:RARITY

- Controls the color of the item name
- Format: enumerated value, one of:
  - common (default): white name, or aqua when enchanted
  - uncommon: yellow name, or aqua when enchanted
  - rare: aqua name, or light purple when enchanted
  - epic: light purple name
  - e.g. rarity=rare
- Special items such as Golden Apples have an implicit default value

#### MINECRAFT:TOOL

- Controls the behavior of the item as a tool
- Format: object with fields
  - rules: list of rule entries
    - blocks: single block, list of blocks, or \#-prefixed block tag to match
    - speed (optional): float, overrides the mining speed if present and matched
    - correct_for_drops (optional): boolean, overrides whether this tool is considered 'correct' if present and matched
      - true will cause the block to mine at its most efficient speed, and drop items if the targeted block requires that
  - default_mining_speed: float, mining speed to use if no rules match and override mining speed (default: 1.0)
  - damage_per_block: non-negative int, amount of durability to remove each time a block is mined with this tool
  - e.g. tool={rules:\[{blocks:"#mineable/pickaxe",speed:4.0,correct_for_drops:true}\]}
- Vanilla tool items will have an implicit default value based on their tier and tool type

#### HIDE_TOOLTIP

- If present, it will completely hide whole item tooltip (that includes item name)
- Tooltip will be still visible and searchable in creative mode
- Format: empty object

### NEW TAGS

- Added incorrect_for_wooden_tool, incorrect_for_gold_tool, incorrect_for_stone_tool, incorrect_for_iron_tool, incorrect_for_diamond_tool, incorrect_for_netherite_tool block tags
  - These tags combine the existing needs_diamond_tool, needs_iron_tool, and needs_stone_tool tags for each specific tool tier
- Added meat collection item tag
  - This is not used by the game directly, but may be included by other tags
- Added piglin_food, fox_food, cow_food, goat_food, sheep_food, wolf_food, cat_food, horse_food, horse_tempt_items, camel_food, armadillo_food, bee_food, chicken_food, frog_food, hoglin_food, llama_food, llama_tempt_items, ocelot_food, panda_food, pig_food, rabbit_food, strider_food, strider_tempt_items, turtle_food, parrot_food, parrot_poisonous_food item tags to control which items can be fed to or tempt the corresponding mobs
- axolotl_tempt_items has been renamed to axolotl_food

## RESOURCE PACK VERSION 30

- Map decoration icons have been split from the former map_icons.png to use an atlas loaded from the textures/map/decorations/ directory
- The process of upgrading your pack can be assisted by using this automated [Slicer](https://github.com/Mojang/slicer/releases/tag/v1.1.4) tool
- Added trial_chambers map decoration icon

## FIXED BUGS IN 24W12A

- [MC-266467](https://bugs.mojang.com/browse/MC-266467) - Wind charges stutter when flying through the air
- [MC-267747](https://bugs.mojang.com/browse/MC-267747) - Click and hover events don't work when viewing chat while F1 is enabled
- [MC-267933](https://bugs.mojang.com/browse/MC-267933) - Silk Touch and Fortune enchanted books cannot be found in Creative inventory
- [MC-267943](https://bugs.mojang.com/browse/MC-267943) - Anvil exclusive enchantments can be obtained from enchanting tables
- [MC-268068](https://bugs.mojang.com/browse/MC-268068) - Pieces of text in the "Reset World" realm menu can intersect when using some resolutions
- [MC-268171](https://bugs.mojang.com/browse/MC-268171) - Some GUI textures can no longer be transparent in Minecraft
- [MC-268311](https://bugs.mojang.com/browse/MC-268311) - Bane of arthropods enchantment uses \#arthropods tag instead of \#sensitive_to_bane_of_arthropods
- [MC-268312](https://bugs.mojang.com/browse/MC-268312) - Impaling enchantment uses \#aquatic tag instead of \#sensitive_to_impaling
- [MC-268343](https://bugs.mojang.com/browse/MC-268343) - Breeze charge has laggy unnatural flightpaths when punched
- [MC-268510](https://bugs.mojang.com/browse/MC-268510) - Items with "Unbreakable:1b" NBT can no longer have the unbreaking enchant applied
- [MC-268556](https://bugs.mojang.com/browse/MC-268556) - Wind charges go through non-full blocks instead of colliding
- [MC-269083](https://bugs.mojang.com/browse/MC-269083) - Effect background texture in inventory renders translucent pixels as opaque
- [MC-269085](https://bugs.mojang.com/browse/MC-269085) - Experience bar and jump bar render translucent pixels as opaque
- [MC-269169](https://bugs.mojang.com/browse/MC-269169) - Wolf variant not present in advancement criteria
- [MC-269268](https://bugs.mojang.com/browse/MC-269268) - components don't work on the smithing table
- [MC-269280](https://bugs.mojang.com/browse/MC-269280) - The right side of incompatible resource or data packs isn't rendered correctly when the scroll bar is present
- [MC-269299](https://bugs.mojang.com/browse/MC-269299) - The red text within the "Experiments" menu cannot be narrated or selected
- [MC-269336](https://bugs.mojang.com/browse/MC-269336) - Crash with set_enchantments item modifier above level 255
- [MC-269354](https://bugs.mojang.com/browse/MC-269354) - The subtitle for the "minecraft:item.mace.smash_air" sound event displays as a raw translation string
- [MC-269355](https://bugs.mojang.com/browse/MC-269355) - Heavy Core has no required tool
- [MC-269356](https://bugs.mojang.com/browse/MC-269356) - Heavy Core cannot be oriented despite its blockstates suggesting otherwise
- [MC-269361](https://bugs.mojang.com/browse/MC-269361) - Weird Wind Charge behavior when deflecting
- [MC-269373](https://bugs.mojang.com/browse/MC-269373) - /datapack disable doesn't work
- [MC-269393](https://bugs.mojang.com/browse/MC-269393) - Game crashes when wind charge hits entity
- [MC-269401](https://bugs.mojang.com/browse/MC-269401) - The minecraft:set_written_book_pages item modifier is inconsistent with minecraft:set_name and minecraft:set_lore
- [MC-269409](https://bugs.mojang.com/browse/MC-269409) - Unable to execute /particle entity_effect
- [MC-269419](https://bugs.mojang.com/browse/MC-269419) - Heavy Core cannot be waterlogged
- [MC-269422](https://bugs.mojang.com/browse/MC-269422) - Carpet on powder snow no longer negates fall damage
- [MC-269452](https://bugs.mojang.com/browse/MC-269452) - Crash when using item modifier with replace_section mode and very large size field
- [MC-269457](https://bugs.mojang.com/browse/MC-269457) - Crash with set_lore item modifier setting more than 256 lores
- [MC-269513](https://bugs.mojang.com/browse/MC-269513) - Maces can break cobwebs

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/6f036460d361ce1e645bba365a72be2eed35ec01/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
