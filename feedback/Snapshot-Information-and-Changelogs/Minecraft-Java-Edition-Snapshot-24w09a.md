---
title: "Minecraft: Java Edition - Snapshot 24w09a "
date: 2024-02-28T15:56:46Z
updated: 2024-02-28T15:59:58Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/24531969592077-Minecraft-Java-Edition-Snapshot-24w09a
---

Hello! Here is a slightly bigger than usual snapshot with a lot of technical changes, refreshed UI, another iteration of Wolf Armor, and tweaks to new features.

Since the initial release of the Wolf Armor, we have been working on improving it to increase its protection, usability and add customization. For protection there is a new approach to armor, which considers the player's need to quickly see the state of the armor without using UI elements, and the ability to act quickly to help their pet wolf if needed. Please try it out and let us know what you think over at the feedback site: [Let's talk about Wolf Armor!](https://aka.ms/wolfarmorfeedback)

**EXPERIMENTAL FEATURES**

**BOGGED**

- The Bogged drops 2 mushrooms (either both red/brown or one of each) when sheared
- Updated Bogged texture and model

**WIND CHARGE**

- Removed randomness from the radius of both Breeze- and player-shot Wind Charges

**VAULT**

- Additional changes to the Vault texture to even further distinguish from Trial Spawners

**CHANGES**

- Changes to Wolf Armor
- The game's UI has been updated with a fresher look
- Ctrl+Picking a renamed block (such as a Chest) in Creative Mode will now give a renamed item

**WOLF ARMOR**

- The Wolf Armor will protect the wolf from most damage sources until the armor loses all durability and breaks
- Wolf Armor shows signs of increased breakage as durability goes down
- Players can repair the Wolf Armor with Armadillo Scutes while it is equipped on the Wolf
- Wolf armor can be dyed in similar fashion to Leather Armor
- The Wolf's owner can now repair Wolf Armor on a Wolf

**UI**

The UI has been updated to sport a fresher look and to be more consistent when it comes to the layout of different UI elements, all while retaining the essence and feel of the old screens.

As always, we're eager to hear your thoughts and opinions on further improvements or changes. Let us know what you think over at the [dedicated feedback site](https://aka.ms/JavaUIFeedback).

- The menu background dirt texture has been replaced by a darkened background
  - The dirt texture has been moved to the build-in Programmer Art Resource Pack
  - Outside the game, the menu Panorama is displayed across all screen
  - In the game, the world will be visible across all screens
  - Paired with the darkened background is a blur
    - The strength of the blur can be configured in Accessibility Settings
    - In-game screens such as containers and books are not affected by these changes
- Screen elements such as titles and buttons are positioned more consistently across different screens
- The Player and World Backups screens in Realms have been updated
- Lists now have clearer borders at the top and bottom
- After defeating the Ender Dragon and entering the End Portal, the End Poem and credits are now displayed with a background based on the animated End Portal effect

**TECHNICAL CHANGES**

- The Data Pack version is now 33
- The Resource Pack version is now 28
- playsound command can now be used without specifying the player (assuming @s) and without specifying the mixer (assuming master)
- In single player, when errors occur during loading or saving of chunks a warning will be shown in a toast
- Trying join a single player world with less than 64 MB free disk space will show a warning screen
  - Additionally, a warning toast will be shown periodically while in game

**DATA PACK VERSION 33**

- Added minecraft:bypasses_wolf_armor for damage sources that can not be absorbed by Wolf Armor
- Loot table entry with id loot_table now also accepts inline loot tables
- Unstructured NBT data attached to stacks of items (tag field) has been replaced with structured 'components'

**LOOT TABLES**

Loot table entry loot_table (which returns all items from provided nested loot table) now has the following syntax:

- value - can be either:
  - namespaced id - reference to another named loot table
  - full loot table (same format as in standalone file)

**ITEM STACK COMPONENTS**

We are making some large changes to how Item Stack-specific properties are stored and represented in this snapshot, replacing the current NBT 'tag' with structured components.

This change has been made in order to:

- Improve performance in cases where the game needs to frequently look up some property of an item (e.g. Armor Trims rendering every frame)
- Validate item properties at load time, enabling easier identification of invalid data in commands and data packs
  - This should avoid any 'silent' breakages in commands specifying custom item data for any potential future format changes
- Continue to evolve the game to enable the creation of dynamic content

We understand that this is a significant breaking change for many datapacks and custom maps which will require significant effort to upgrade.

We do however believe that this builds critical foundations for future extensibility. We have taken care to ship these changes all at once, with the hope that this avoids future incremental changes requiring many small updates to packs.

The current NBT 'tag' has existed for quite some time, and we are aware that a lot of clever techniques have been developed with this for commands and data packs.

Although we have made our best effort to identify these cases, some of these techniques rely on undocumented or undefined behavior with certain tag configurations.

We want to ensure that no functionality is lost without a suitable alternative, but due to the undocumented nature of these techniques, we have very likely not caught everything!

We hope to address any regressions over the remaining course of this snapshot cycle.

With such a large change, we deeply value your feedback! You can share your thoughts on these changes over at the feedback site: [Let's talk about Item Stack Components!](https://aka.ms/ItemStackComponentsFeedback).

- Unstructured NBT data attached to stacks of items (tag field) has been replaced with structured 'components'
  - This data is parsed and validated when the item is loaded
  - This should improve performance in certain scenarios (e.g. Armor Trim rendering) when item data was frequently compared or requested and parsed
  - Custom data can still be stored in the minecraft:custom_data component
- Item types (e.g. minecraft:stick) hold a set of default components on an item that individual item stacks can override
- The format of serialized items and items in data packs has been updated for consistency and to support components
- Item syntax in commands has been updated to support components
- When advanced tooltips are enabled (F3+H), the number of components will be displayed instead of number of tags
- Default component values for items are now listed in items.json generated in reports directory
- The ignoreTags field on villager trades has been removed and replaced by a component predicate on damage
- Block definitions are now added to blocks.json report (note: those definitions are not used yet and present only for informational purposes)
- If the key_item field of Vault block is not present, the Vault cannot be unlocked

**MINECRAFT:CUSTOM_DATA**

- Can be used for custom data storage on an item
- Can be accessed with pre-existing tag syntax ({...}) in commands
  - In predicates (e.g. /clear), will be partially matched as currently
- When upgrading a world, any non-game data in the item tag will be moved into here
- Format: object with any fields
  - e.g. custom_data={some:'data'}

**MINECRAFT:DAMAGE**

- The amount of durability removed from an item
- If removed, the item will not be damageable
- Replaces Damage tag
- Format: non-negative integer
  - e.g. damage=12
- For damageable items, has an implicit default value of: 0

**MINECRAFT:REPAIR_COST**

- The additional experience cost required to modify an item in an Anvil
- Replaces RepairCost tag
- Format: non-negative integer
  - e.g. repair_cost=12
- If not set, has an implicit default value of: 0

**MINECRAFT:UNBREAKABLE**

- If set, the item will not lose any durability when used
- Replaces Unbreakable boolean tag
- Format: object with fields
  - show_in_tooltip: boolean (default: true)
    - If true, an 'Unbreakable' line will be included in the tooltip
    - Replaces 3rd bit of HideFlags tag
  - e.g. unbreakable={}, unbreakable={show_in_tooltip:false}

**MINECRAFT:ENCHANTMENTS**

- Stores a list of enchantments and their levels on an item
- Replaces Enchantments tag
- Format: object with fields
  - levels: object of enchantment (id string) to level (integer \[0; 255\])
  - show_in_tooltip: boolean (default: true)
    - If false, no enchantments will be shown in the item tooltip
    - Replaces 1st bit of HideFlags tag
  - e.g. enchantments={levels:{'minecraft:protection':2},show_in_tooltip:false}
- If not set, has an implicit default value of: {levels:{}}

**MINECRAFT:STORED_ENCHANTMENTS**

- Stores list of enchantments and their levels for an Enchanted Book
- The effects provided by enchantments do not apply from this component
- Replaces StoredEnchantments tag on Enchanted Books
- Format: same as minecraft:enchantments
  - show_in_tooltip value replaces 6th bit of HideFlags tag
- On Enchanted Books, has an implicit default value of: {levels:{}}

**MINECRAFT:CUSTOM_NAME**

- Custom name override for an item
- Replaces display.Name tag
- Format: JSON chat component string
  - e.g. custom_name='{"text": "This item is renamed!", "color": "red"}'

**MINECRAFT:LORE**

- Additional lines to include in an item's tooltip
- Replaces display.Lore tag
- Format: list of JSON chat component strings (max: 64 entries)
  - e.g. lore=\['{"text": "The cake is a lie!"}'\]
- If not set, has an implicit default value of: \[\]

**MINECRAFT:CAN_BREAK**

- Controls which blocks a player in Adventure mode can break with this item
- Replaces CanDestroy tag
  - These were previously stored as flat strings, but now use the more flexible block predicate format already used in loot tables and advancements
- Format: object with fields
  - predicates: list of block predicates
    - blocks: block, list of blocks, or hash-prefixed block tag
    - nbt: block entity NBT to match
    - state: map of state property key to values to match
  - show_in_tooltip: boolean (default: true)
    - Replaces 4th bit of HideFlags tag
  - e.g. can_break={predicates:{blocks:'minecraft:furnace',state:{facing:'north'}}
  - Alternatively, can be represented by a single block predicate
    - e.g. can_break={blocks:'minecraft:stone'}

**MINECRAFT:CAN_PLACE_ON**

- Controls which blocks a player in Adventure mode can place on with this item
- Replaces CanPlaceOn tag
- Format: object with fields
  - predicates: list of block predicates
    - Same as can_break.predicates
  - show_in_tooltip: boolean (default: true)
    - Replaces 5th bit of HideFlags tag
  - e.g. can_place_on={predicates:{blocks:'minecraft:furnace',state:{facing:'north'}}
  - Alternatively, can be represented by a single block predicate
    - e.g. can_place_on={blocks:'minecraft:stone'}

**MINECRAFT:DYED_COLOR**

- Represents a color applied to a dyeable item (\#minecraft:dyeable tag)
- Replaces display.color tag
- Format: object with fields
  - rgb: integer, RGB value
  - show_in_tooltip: boolean (default: true)
    - Replaces 7th bit of HideFlags tag
  - e.g. dyed_color={rgb:16711680}

**MINECRAFT:ATTRIBUTE_MODIFIERS**

- Holds attribute modifiers applied to any item
- Replaces AttributeModifiers tag
- Format: object with fields (default: {modifiers:\[\]})
  - modifiers: list of attribute modifiers
    - type: attribute id
      - Replaces AttributeName
    - slot: one of:
      - any (default)
      - hand: either in main or offhand (new)
      - armor: any armor slot (new)
      - mainhand
      - offhand
      - head
      - chest
      - legs
      - feet
      - Modifiers will only apply when the item is equipped in the specified slot
      - Replaces Slot
    - uuid: uuid, uniquely represents this modifier
      - Only one modifier can exist with the same id
      - Replaces UUID
    - name: string, human-readable name
      - Replaces Name
    - amount: double, number of units to modify this attribute (controlled by operation)
      - Replaces Amount
    - operation: one of:
      - add_value (was 0): Adds amount to the attribute
      - add_multiplied_base (was 1): Adds amount \* base value to the attribute
      - add_multiplied_total (was 2): Adds amount \* total value (from all previous modifiers) to the attribute
      - Replaces Operation with integer ids
  - show_in_tooltip: boolean (default: true)
    - Replaces 2nd bit of HideFlags tag
  - e.g. attribute_modifiers={modifiers:\[type:'minecraft:generic.scale',uuid:\[1,2,3,4\],name:'Big!',amount:1.0,operation:'add_multiplied_base'\]}
- If not set, has an implicit default value based on the item type's default attributes (e.g. attack damage for weapons)

**MINECRAFT:CHARGED_PROJECTILES**

- Holds all projectiles that have been loaded into a Crossbow
- If not present, the Crossbow is not charged
- Replaces Charged and ChargedProjectiles tags
- Format: list of item stacks
  - e.g. charged_projectiles=\[{id:'minecraft:arrow'}\]
  - No longer restricted to 3 entries

**MINECRAFT:INTANGIBLE_PROJECTILE**

- Marks that a projectile item would be intangible when fired (i.e. can only be picked up by a creative mode player)
- Only set when items are inside a Crossbow's charged_projectiles component
- Format: empty object
  - e.g. intangible_projectile={}

**MINECRAFT:BUNDLE_CONTENTS**

- Holds all items stored inside of a Bundle
- If removed, items cannot be added to the Bundle
- Replaces Items tag
- Format: list of item stacks
  - e.g. bundle_contents=\[{id:'minecraft:poisonous_potato'}\]
- On Bundles, has an implicit default value of: \[\]

**MINECRAFT:MAP_COLOR**

- Represents the tint of the decorations on the Filled Map item
- Replaces display.MapColor tag
- Format: integer, RGB value
  - e.g. map_color=16711680
- On Filled Maps, has an implicit default value of: 4603950

**MINECRAFT:MAP_DECORATIONS**

- Holds a list of markers to be placed on a Filled Map (used for Explorer Maps)
- Replaces Decorations tag
- Format: map of unique decoration id to decorations
  - type: one of:
    - player (was 0)
    - frame (was 1)
    - red_marker (was 2)
    - blue_marker (was 3)
    - target_x (was 4)
    - target_point (was 5)
    - player_off_map (was 6)
    - player_off_limits (was 7)
    - mansion (was 8)
    - monument (was 9)
    - banner_white (was 10)
    - banner_orange (was 11)
    - banner_magenta (was 12)
    - banner_light_blue (was 13)
    - banner_yellow (was 14)
    - banner_lime (was 15)
    - banner_pink (was 16)
    - banner_gray (was 17)
    - banner_light_gray (was 18)
    - banner_cyan (was 19)
    - banner_purple (was 20)
    - banner_blue (was 21)
    - banner_brown (was 22)
    - banner_green (was 23)
    - banner_red (was 24)
    - banner_black (was 25)
    - red_x (was 26)
    - village_desert (was 27)
    - village_plains (was 28)
    - village_savanna (was 29)
    - village_snowy (was 30)
    - village_taiga (was 31)
    - jungle_temple (was 32)
    - swamp_hut (was 33)
    - Replaces type byte with numeric ids
  - x: double, world coordinate
  - z: double, world coordinate
  - rotation: float, clockwise rotation from north in degrees
    - Replaces rot double
  - e.g. map_decorations={'Some marker':{type:'target_x',x:123.0,z:-45.0,rotation:0.0f}}
- On Filled Maps, has an implicit default value of: {}

**MINECRAFT:MAP_ID**

- References the shared map state holding map contents and markers for a Filled Map
- Replaces map tag
- Format: integer id
  - e.g. map_id=1

**MINECRAFT:CUSTOM_MODEL_DATA**

- Can be used to replace the models of items by selecting for the minecraft:custom_model_data property in the item model
- Replaces CustomModelData tag
- Format: integer value
  - e.g. custom_model_data=43

**MINECRAFT:POTION_CONTENTS**

- Holds the contents of a potion (Potion, Splash Potion, Lingering Potion), or potion applied to an item (Tipped Arrow)
- Replaces Potion, CustomPotionColor, and custom_potion_effects tags
- Format: object with fields
  - potion: potion id (optional)
    - The potion type in this item: the item will inherit all effects from this
  - custom_color: integer, RGB value (optional)
    - Overrides the visual color of the potion
  - custom_effects: list of effect instances (default: \[\])
    - Additional list of custom effects that this item should apply, that may not be representable by an existing potion
  - e.g. potion_contents={potion:'minecraft:invisibility',custom_color:16711680}
- On Potion or Tipped Arrow items, has an implicit default value of: {}

**MINECRAFT:WRITABLE_BOOK_CONTENTS**

- Holds the contents in a Book and Quill
- Replaces pages and filtered_pages tags
  - The pages list maps directly, with {text:'...'} wrapping
  - filtered_pages are pulled by index keys into the relevant page entry under the filtered field
- Format: object with fields
  - pages: list of either:
    - object with fields
      - text: string, page plain text contents
      - filtered: string, filtered page contents (optional)
        - If specified, players with chat filter enabled will see this page instead of text
    - or: string, page plain text contents
  - e.g. writable_book_contents={pages:\[{text:'Hello world!'}\]}
- On Book and Quill, has an implicit default value of: {pages:\[\]}

**MINECRAFT:WRITTEN_BOOK_CONTENTS**

- Holds the contents and metadata of a Written Book
- Replaces pages, filtered_pages, title, filtered_title, author, generation, and resolved tags
- Format: object with fields
  - pages: list
    - Same format as writable_book_contents pages, except uses JSON chat component strings which can be formatted
  - title: filtered string (same format as pages)
  - author: string, player name
  - generation: integer \[0; 2\]
    - The number of times this book has been copied (0 = original)
  - resolved: boolean
    - true if the chat components in this book have already been resolved (entity selectors, scores substituted)
    - If false, will be resolved when opened by a player
  - e.g. written_book_contents={pages:\[{text:'Hello world!'}\],title:{text:'A delightful read'},author:'Herobrine',generation:1,resolved:true}

**MINECRAFT:TRIM**

- Holds the trims applied to an item
  - Presence of the component is no longer restricted by the \#minecraft:trimmable_armor tag (although, this tag is still used for recipes)
- Replaces Trim tag of the same format
- Format: object with fields
  - pattern: pattern id (or inline pattern)
  - material: material id (or inline material)
  - show_in_tooltip: boolean (default: true)
    - Replaces 8th bit of HideFlags tag
  - e.g. trim={pattern:'minecraft:silence',material:'minecraft:redstone'}

**MINECRAFT:SUSPICIOUS_STEW**

- Holds the effects that will be applied when consuming Suspicious Stew
- Replaces effects tag of the same format
- Format: list of effect objects with fields
  - id: effect id
  - duration: integer, tick count (default: 160)
  - e.g. suspicious_stew=\[{id:'minecraft:poison'}\]
- On Suspicious Stew, has an implicit default value of: \[\]

**MINECRAFT:HIDE_ADDITIONAL_TOOLTIP**

- If present, disables 'additional' tooltip part which comes from the item type
- Replaces 6th bit of HideFlags tag
- Format: empty object
  - e.g. hide_additional_tooltip={}

**MINECRAFT:DEBUG_STICK_STATE**

- Stores the selected block state properties used by a Debug Stick
- Replaces DebugProperty tag
- Format: map of block id to block property name
  - e.g. debug_stick_state={'minecraft:turtle_egg':'eggs','minecraft:furnace':'facing'}
- On Debug Stick, has an implicit default value of: {}

**MINECRAFT:ENTITY_DATA**

- Stores unstructured NBT data to apply to an entity when using an item that spawns an entity, such as a Spawn Egg or Armor Stand
- Replaces previous EntityTag tag, with same behavior
- Format: object with fields
  - Must contain an id field with the entity type
  - Any additional fields will be merged into the entity when spawned
  - e.g. entity_data={id:'minecraft:pig',Health:1.0f}

**MINECRAFT:BUCKET_ENTITY_DATA**

- Stores unstructured NBT data to apply to an entity when placed from a bucket
- Replaces NoAI, Silent, NoGravity, Glowing, Invulnerable, Health, Age, Variant, HuntingCooldown, and BucketVariantTag tags
- Format: object with fields
  - Can contain any of the above listed fields, which will be applied to the entity when placed
  - e.g. bucket_entity_data={NoAI:1,Age:43}
- On bucketed mob items, has an implicit default value of: {}

**MINECRAFT:INSTRUMENT**

- Holds the instrument type used by a Goat Horn
- Replaces instrument tag of same format
- Format: instrument id
  - e.g. instrument='minecraft:ponder_goat_horn'

**MINECRAFT:RECIPES**

- List of recipes that should be unlocked when using the Knowledge Book item
- Replaces Recipes tag of same format
- Format: list of recipe ids
  - e.g. recipes=\['minecraft:acacia_boat','minecraft:anvil'\]
- On Knowledge Book, has an implicit default value of: \[\]

**MINECRAFT:LODESTONE_TARGET**

- If present, specifies the target Lodestone that a Compass should point towards
- Replaces LodestonePos, LodestoneDimension, and LodestoneTracked tags
- Format: object with fields
  - pos: integer array of x, y, and z
  - dimension: dimension id
  - tracked: boolean (default: true)
    - If true, when the Lodestone at the target position is removed, the component will be removed
  - e.g. lodestone_target={pos:\[13,64,-43\],dimension:'minecraft:the_nether'}

**MINECRAFT:FIREWORK_EXPLOSION**

- Stores the explosion crafted in a Firework Star
- Replaces Explosion.Type, Explosion.Colors, Explosion.FadeColors, Explosion.Trail, and Explosion.Flicker tags
- Format: object with fields
  - shape: one of
    - small_ball (was 0)
    - large_ball (was 1)
    - star (was 2)
    - creeper (was 3)
    - burst (was 4)
    - Replaces Type numeric ids
  - colors: integer array, RGB values (default: \[\])
    - List of initial particle colors, randomly selected from
  - fade_colors: integer array, RGB values (default: \[\])
    - List of particle colors to fade to, randomly selected from
  - has_trail: boolean (default: false)
  - has_twinkle: boolean (default: false)
    - Renamed from Flicker tag
  - e.g. firework_explosion={shape:'large_ball',colors:\[16711680\],has_trail:true}

**MINECRAFT:FIREWORKS**

- Stores all explosions crafted into a Firework Rocket, as well as flight duration
- Replaces Fireworks.Explosions and Fireworks.Flight tags
- Format: object with fields
  - explosions: list of explosions
    - Same format as minecraft:firework_explosion component
  - flight_duration: byte, number of gunpowder in this rocket
  - e.g. fireworks={explosions:\[{shape:'large_ball',colors:\[16711680\],has_trail:true}\],flight_duration:2}
- On Firework Rocket, has an implicit default value of: {explosions:\[\],flight_duration:1}

**MINECRAFT:PROFILE**

- Controls the skin displayed on a Player Head
- Copied to Player Head block when placed
- Replaces SkullOwner tag
- If only a name is specified, will be resolved into the corresponding player ID and skin data
- Format: object with fields
  - name: string, player profile name
  - id: uuid, player profile id (optional)
  - properties: list of properties (optional)
    - name: string, property name (e.g. textures)
    - value: string (base64 encoded texture data)
    - signature: string (optional)
  - e.g. profile={name:'MHF_Sheep'}

**MINECRAFT:NOTE_BLOCK_SOUND**

- Controls the sound played by a Player Head when placed on a Note Block
- Copied to Player Head block when placed
- Replaces BlockEntityTag.note_block_sound tag
- Format: sound event id
  - e.g. note_block_sound='minecraft:ambient.cave'

**MINECRAFT:BASE_COLOR**

- Stores the base color for a Shield
- Replaces BlockEntityTag.Base tag
- Format: one of
  - white (was 0)
  - orange (was 1)
  - magenta (was 2)
  - light_blue (was 3)
  - yellow (was 4)
  - lime (was 5)
  - pink (was 6)
  - gray (was 7)
  - light_gray (was 8)
  - cyan (was 9)
  - purple (was 10)
  - blue (was 11)
  - brown (was 12)
  - green (was 13)
  - red (was 14)
  - black (was 15)
  - e.g. base_color='magenta'

**MINECRAFT:BANNER_PATTERNS**

- Stores the additional patterns applied to a Banner or Shield
- Copied to Banner block when placed
- Replaces BlockEntityTag.Patterns tag
- Format: list of banner patterns
  - pattern: banner pattern registry id
    - Replaces short banner pattern code in Patterns\[\].Pattern
  - color: dye color name
    - Replaces integer dye color id in Patterns\[\].Color
  - e.g. banner_patterns=\[{pattern:'minecraft:stripe_top',color:'red'}\]
- On Banners and Shields, has an implicit default value of: \[\]

**MINECRAFT:POT_DECORATIONS**

- Stores the Sherds applied to each side of a Decorated Pot
- Copied to Decorated Pot block when placed
- Replaces BlockEntityTag.sherds tag of same format
- Format: list of sherd item ids
  - e.g. \['arms_up_pottery_sherd','angler_pottery_sherd','danger_pottery_sherd','shelter_pottery_sherd'\]
- On Decorated Pots, has an implicit default value of: \['minecraft:brick','minecraft:brick','minecraft:brick','minecraft:brick'\]

**MINECRAFT:CONTAINER**

- Holds the contents of Shulker Boxes in item form
- Copied to Shulker Box block when placed
- Replaces BlockEntityTag.Items tag
- Format: list of slots
  - slot: integer \[0; 255\], representing a slot in the container
  - item: item stack
  - e.g. container=\[{slot:7,item:{id:'diamond_pickaxe',components:{'minecraft:unbreakable':{}}}}\]
- On Shulker Boxes, has an implicit default value of: \[\]

**MINECRAFT:BEES**

- Holds the bees inside a Beehive or Bee Nest
- Copied to Beehive or Bee Nest block when placed
- Replaces BlockEntityTag.Bees tag
- Format: list of bees
  - entity_data: map of string to string
    - id: entity id
    - The remainder tags merged into the Bee when spawned
  - ticks_in_hive: integer
  - min_ticks_in_hive: integer
  - e.g: bees=\[{entity_data:{id='minecraft:bee'},ticks_in_hive:3,min_ticks_in_hive:10}\]
- On Beehive and Bee Nest, has an implicit default value of: \[\]

**MINECRAFT:LOCK**

- Holds the lock state of a container-like block
  - An item with a custom name of the same value must be used to open this container
- Copied to container block when placed
- Replaces BlockEntityTag.Lock tag
- Format: string value, representing the key
  - e.g: lock='hunter2'

**MINECRAFT:CONTAINER_LOOT**

- Holds the unresolved loot table and seed of a container-like block
- Copied to container block when placed
- Replaces BlockEntityTag.LootTable and BlockEntityTag.LootTableSeed tags
- Format: object with fields
  - loot_table: loot table id
  - seed: long, pseudorandom seed to resolve the loot table with (optional)
    - If not specified, or 0, the seed will be picked randomly when the loot table is evaluated
  - e.g. container_loot={loot_table:'minecraft:chests/buried_treasure',seed:123}

**MINECRAFT:BLOCK_ENTITY_DATA**

- Stores unstructured NBT data to apply to a block entity when placing a block such as a Chest or Furnace
- Replaces previous BlockEntityTag tag, with same behavior
- Any block entity data moved into a dedicated item component is removed from this tag
- This tag only works for Command Blocks, Lecterns, Signs, and Spawners if the player is an operator
- Format: object with fields
  - Must contain an id field with the block entity type
  - Any additional fields will be merged into the block entity when placed
  - e.g. block_entity_data={id:'minecraft:chest',Items:\[{Slot:1,item:'minecraft:diamond'}\]}

**MINECRAFT:BLOCK_STATE**

- Holds block state properties to apply when placing a block
- Replaces BlockStateTag tag
- Format: map of property key to property value
  - e.g: block_state={eggs:'10'}

**MINECRAFT:ENCHANTMENT_GLINT_OVERRIDE**

- Overrides the enchantment glint effect on an item
- Can be used in the same way that an invalid Enchantments tag would previously behave to add a glint
- Format: boolean
  - If true, an item without an enchantment glint will display a glint
  - If false, an item with a glint will not display this glint (either from enchantments or intrinsic properties of the item)
  - e.g: enchantment_glint_override=true

**COMMANDS**

- Commands such as /give, /item, /loot, and /clear have updated item syntax
- Components can now be specified after the item name in square brackets
  - Components are assigned with an = (e.g. wooden_pickaxe\[damage=23\])
  - Components are comma-separated (e.g. netherite_hoe\[damage=5,repair_cost=2\])
- Component types will be autocompleted, but values themselves will not
- Values will however be validated, and the command will fail to parse if the component is improperly specified
  - e.g. /give @s wooden_pickaxe\[damage=-34\] is not valid
- The pre-existing NBT syntax ({...}) is rewired to set or match the minecraft:custom_data component
  - e.g. /give @s stick{foo:'bar'} is equivalent to /give @s stick\[custom_data={foo:'bar'}\]
  - If both \[...\] and {...} are specified, \[...\] must be ordered before {...}
- Item predicate arguments (in /clear) have new semantics with respect to matching components and custom data
  - Every specified component must be present on the target item, and have an exactly equal parsed value
  - Components with defaults (e.g. damage=0 by default) will be assumed to exist on the target item if not specified
    - As such, /clear @s diamond_pickaxe\[damage=0\] will match only undamaged Diamond Pickaxes
    - On the other hand, /clear @s diamond_pickaxe will match any Diamond Pickaxe, irrespective of damage
  - Exact matching of component values applies even for the minecraft:custom_data component
  - However, using the {...} custom data syntax will use pre-existing NBT partial match behaviour
    - This requires that all tags specified in the predicate are present on the target item, but additional ones may be ignored
    - Lists in the target must contain all items specified in the predicate, but additional may be present and order is ignored
- Modifier operations in the /attribute command have been renamed:
  - add -\> add_value
  - multiply_base -\> add_multiplied_base
  - multiply -\> add_multiplied_total

**ITEM STACK FORMAT**

- Along with format changes due to components, the structures of item stacks on disk and in data packs have been updated for consistency
- Previous id (string) and Count (byte) fields have been replaced with id (namespaced string) and count (integer) fields
  - This format is additionally applied to the icon field in advancements, items in chat component hover events, and the result field in smelting recipes (result and count are no longer inlined)
- The count field is optional (defaults to 1), and no longer stored if default
  - Stack size is now limited to the maximum stack size of the item
- The tag field has been removed, and any remaining contents will end up in the minecraft:custom_data component when upgrading
- A new components field stores all components attached to an item
  - Format: map of component id to component value (varies by component id)
    - e.g. {..., components: {'minecraft:damage': 12}}
    - Components with a ! prefix (e.g. "!minecraft:damage": {}) will cause this component to be removed
  - Components equal to their default value will not be stored
- The item stack format no longer represents empty stacks (air item, or count 0)
  - Instead, in places that support it, the field should be ommitted
  - In some cases, such as lists of stacks (e.g. HandItems in living entities), an empty map ({}) is used to represent empty stacks

**OTHER FORMAT CHANGES**

- Tipped Arrows no longer store their applied potion effects
  - This is instead fetched from their held item
- Area Effect Clouds now store potions in the same format as the minecraft:potion_contents component in a potion_contents field:
  - Potion -\> potion_contents.potion
  - Color -\> potion_contents.custom_color
  - effects -\> potion_contents.custom_effects
- Banners now store applied patterns in the same format as the minecraft:banner_patterns component in a patterns field:
  - Patterns\[\].Pattern (string short id) -\> patterns\[\].pattern (string pattern registry id)
  - Patterns\[\].Color (integer dye id) -\> patterns\[\].color (string dye name)
- Beehive format has also been updated:
  - Bees\[\].EntityData -\> bees\[\].entity_data
  - Bees\[\].TicksInHive -\> bees\[\].ticks_in_hive
  - Bees\[\].MinOccupationTicks -\> bees\[\].min_ticks_in_hive
  - FlowerPos -\> flower_pos
- Villager Trades can be configured to accept only undamaged items by selecting for 'minecraft:damage': 0
  - By default, if no components are specified, any item will be accepted (similar to components field in item predicates)

**LOOT ITEM FUNCTIONS**

- Added minecraft:set_components function
  - Adds or replaces the given component on the input item
  - conditions: list of conditions (default: \[\]):
    - Conditions to check before applying the function
  - components: map of component id to component value (format varied by id)
    - Components with a ! prefix (e.g. "!minecraft:damage": {}) will cause this component to be removed
- Added minecraft:copy_components function
  - Copies components from a specified source onto an item
  - This is now used in the Vanilla pack in place of the minecraft:copy_name and minecraft:copy_nbt functions
  - conditions: list of conditions (default: \[\]):
    - Conditions to check before applying the function
  - source: source type to pull from
    - Currently, can only and must be "block_entity"
  - components: list of component ids to copy
- minecraft:set_nbt and minecraft:copy_nbt functions have been renamed to minecraft:set_custom_data and minecraft:copy_custom_data respectively
  - These now apply to the minecraft:custom_data component of the target item
- minecraft:set_attributes function has been updated
  - The modifier slot field now supports any, armor, and hand values
  - The modifier operation values have been renamed:
    - addition -\> add_value
    - multiply_base -\> add_multiplied_base
    - multiply_total -\> add_multiplied_total

**PREDICATE FORMATS IN LOOT TABLES & ADVANCEMENTS**

- Item predicate format has been updated:
  - tag field has been removed
  - items field now supports a single entry, hash-prefixed item tag, or list of items
  - potion -\> potions, and supports a single entry, hash-prefixed potion tag, or list of potions
  - nbt predicate has been renamed to custom_data and now matches minecraft:custom_data component
  - A new optional components field matches exact components
    - All specified components must be present an exactly equal on the target item, but additional components may be ignored
    - Components with defaults will be assumed to exist on the target item if not specified
    - Format: map of component id to component value (varies by component id)
      - e.g. "components": { "minecraft:damage": 0 } will match only undamaged items
- Block predicate format has been updated:
  - tag field has been removed
  - blocks field now supports a single entry, hash-prefixed block tag, or list of blocks
- Fluid predicate format has been updated:
  - tag field has been removed
  - fluid -\> fluids, and supports a single entry, hash-prefixed fluid tag, or list of fluids
- Entity predicate format has been updated:
  - type field now supports a single entry, hash-prefixed entity type tag, or list of entity types
- Location predicate format has been updated:
  - biome -\> biomes, and supports a single entry, hash-prefixed biome tag, or list of biomes
  - structure -\> structures, and supports a single entry, hash-prefixed structure tag, or list of structures

**ENCHANTMENTS**

- Projectile weapon Enchantments like infinity, multishot and piercing now work on both Crossbows and Bows, if placed onto the alternative weapon using data manipulation or a change to the enchantable/\* tags)

**RESOURCE PACK VERSION 27**

- Added additional textures to support colored layers of Wolf Armor for the wolf model and Wolf Armor item:
  - textures/entity/wolf/wolf_armor_overlay.png
  - textures/item/wolf_armor_overlay.png
- Wolf Armor item texture, textures/item/wolf_armor.png, has been raise by 2px to create space for the durability bar
- Added three semi-transparent textures for the cracks to show on the Wolf Armor layer:
  - textures/entity/wolf/wolf_armor_crackiness_low.png
  - textures/entity/wolf/wolf_armor_crackiness_medium.png
  - textures/entity/wolf/wolf_armor_crackiness_high.png

**RESOURCE PACK VERSION 28**

- The options_background and the light_dirt_background textures have been removed
  - Instead, menu_background is used as the background of screens, while menu_list_background is used for the background of lists
- Lists now use the header_separator and footer_separator textures at the top and bottom, respectively
- The following textures have been updated: footer_separator, header_separator
- The following sprites have been updated: widget\tab, widget\tab_highlighted, widget\tab_selected, widget\tab_selected_highlighted
- The widget\scroller_background sprite has been added
- The following textures in Realms have been removed: changes, changes_highlighted, restore, restore_highlighted, make_operator_highlighted, remove_operator_highlighted, remove_player_highlighted

**FIXED BUGS IN SNAPSHOT 24W09A**

- [MC-118890](https://bugs.mojang.com/browse/MC-118890) - Tipped arrows stuck in the ground never lose their effect
- [MC-195572](https://bugs.mojang.com/browse/MC-195572) - The fog from lava is much denser when having the Fire Resistance effect active compared to Bedrock Edition
- [MC-226775](https://bugs.mojang.com/browse/MC-226775) - Extinguishing candle shows inaccurate subtitle
- [MC-251042](https://bugs.mojang.com/browse/MC-251042) - Third-party warning buttons are not positioned well in non-English languages
- [MC-257119](https://bugs.mojang.com/browse/MC-257119) - Lodestone Compass does not stack after dropping and destroying the Lodestone
- [MC-259284](https://bugs.mojang.com/browse/MC-259284) - Severe performance issues with inventories with lots of data
- [MC-267451](https://bugs.mojang.com/browse/MC-267451) - Items named with an anvil on 1.20.4 don't stack with items named prior
- [MC-267500](https://bugs.mojang.com/browse/MC-267500) - Attribute modifier on an item with the first and/or last 2 integers of the UUID being 0 are non-functional
- [MC-267975](https://bugs.mojang.com/browse/MC-267975) - The realms player list is rendered larger than its visual size
- [MC-267976](https://bugs.mojang.com/browse/MC-267976) - The scroll bar in the realms player list can no longer be dragged using the mouse cursor
- [MC-268011](https://bugs.mojang.com/browse/MC-268011) - Hoppers leak the last world they sucked item on
- [MC-268022](https://bugs.mojang.com/browse/MC-268022) - Elements within the list in the "Experimental feature requirements" menu cannot be selected via the mouse cursor
- [MC-268236](https://bugs.mojang.com/browse/MC-268236) - Search field in the social interactions menu not focused by default
- [MC-268350](https://bugs.mojang.com/browse/MC-268350) - Wind Charges never despawn
- [MC-268580](https://bugs.mojang.com/browse/MC-268580) - Chiseled bookshelf model is not deterministic in data generation
- [MC-268710](https://bugs.mojang.com/browse/MC-268710) - The fall damage reduction for the Wind Charge is not working
- [MC-268778](https://bugs.mojang.com/browse/MC-268778) - Baby armadillos shouldn't drop scutes when brushed

**GET THE SNAPSHOT**

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7c70922198a2d18e0252c315b55623b822b4e910/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
