---
title: "Minecraft: Java Edition - 1.19.4"
date: 2023-03-14T16:13:27Z
updated: 2023-03-14T16:13:30Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/13987663727757-Minecraft-Java-Edition-1-19-4
---

We\'re now releasing 1.19.4 for Minecraft: Java Edition. This release comes with improvements to horse breeding and jukeboxes, new visuals for potions, new accessibility features and many new technical capabilities like the damage and ride commands and display and interaction entities.

The update_1_20 experiment has also been updated with a first look at the Sniffer, Archaeology, Armor Trims and Cherry Grove features.

# CHANGES

-   Updated Horse Breeding
-   Jukeboxes have changed to be at parity with Bedrock
-   Interacting with armor or elytra items in-hand will now swap them with equipped gear
-   The camera tilt when hurt is now based on the direction of incoming damage
-   Potions colors have been adjusted to make different types of potions more distinguishable
-   Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
-   Enchantment glint on items and armor is now more subtle
-   Armor Stands now preserve custom names when placed and broken
-   Vexes now use a separate charging animation when empty-handed
-   Tweaks to recipe unlocking to make discovering vital crafting recipes easier for new players
-   Updated the Create New World screen
-   New accessibility options and improvements
-   Updated the Realms screen to be more in line with the Singleplayer and Multiplayer screens
-   Added a notification system for Realms to tell you about important information about your Realm
-   Added \"Credits & Attribution\" button in the Options menu

## HORSES, DONKEYS AND LLAMAS

The speed, jump height and health of a baby is now a variation of the average of the parents\' attributes, rather than being biased towards the average possible value.

This change makes horse breeding a viable way of getting great horses, if a player starts with good parents and puts in enough time and Golden Carrots.

## JUKEBOX

-   Emits a note particle above it while playing a music disc
-   While playing a music disc, it will emit a redstone signal of 15
-   Droppers and hoppers can now interact with it

## CREATIVE MENU

-   Added painting variants to the creative menu
-   Paintings with a pre-defined variant will now display the author and title in the item description when hovered over

## RECIPE UNLOCKING

-   The Crafting Table recipe is unlocked immediately on creating a new world
-   The Crossbow recipe is no longer unlocked by sticks
-   The Soul Campfire recipe is no longer unlocked by sticks

## UPDATED CREATE NEW WORLD SCREEN

-   The screen is now organized into three tabs
    -   The Game-Tab allows to set the world name, Gamemode, Difficulty and whether to allow cheats
    -   The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
    -   The More-Tab provides access to the Game Rules and DataPack Selection Screen
-   Tabs can be switched with the keyboard by pressing Ctrl+Tab and Ctrl+Shift+Tab
-   Specific tabs can also be navigated to by pressing Ctrl+Tab Number
    -   For example, Ctrl+2 navigates to the second tab
-   Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen
-   Added a screen to easily enable/disable experimental features
    -   The screen can always be found under the More-tab
    -   In snapshots, a shortcut button can be found under the Game-tab

## ACCESSIBILITY

-   Added an accessibility onboarding screen for players launching the game for the first time
-   Auto-Jump is now off by default
-   Added arrow key navigation
-   Added high contrast resource pack
-   The resource pack screen is now keyboard-navigatable
-   Changed how tooltips in the menu UI are positioned so buttons are still readable
-   Added a tooltip in the key binds screen that specifies which key binds are conflicting
-   Added a \"Damage Tilt\" accessibility option that controls the amount the camera shakes when being hurt
-   Added two new options in the accessibility menu for adjusting the speed and transparency of enchantment glints
-   Added a \"Notification Time\" accessibility option that changes how long notifications such as unlocked recipes, advancements, subtitles and selected item names are visible for

### ARROW KEY NAVIGATION

-   Menu screens can now be navigated by using the arrow keys
-   When navigating with arrow keys, sliders need to be activated by pressing Enter or Space to start changing the value

### HIGH CONTRAST RESOURCE PACK

-   Added a built-in resource pack that enhances the contrast of UI elements
-   Added a new option in the Accessibility menu that enables the high contrast resource pack
-   This only affects the menu UIs for now, but we'll be looking to bring this to gameplay UIs in the future as well

# TECHNICAL CHANGES

-   The data pack version is now 12
-   The resource pack version is now 13
-   Added a group of entities to display items, blocks and text
-   Added entities to detect interactions and attacks
-   Added data-driven damage types
-   Added a damage command for applying damage to entities
-   Added ride command to mount and dismount entities
-   The clone command now supports cloning to and from different dimensions
-   A new string source is now available for the data modify command
-   New execute sub-commands: if dimension, if loaded, on, positioned over, summon
-   Added a new type of atlas configuration source: paletted_permutations
-   Pressing F3+S will now dump contents of dynamic textures (like atlases, maps, etc.) to screenshots/debug/
-   Added fallback fields to translate text components
-   Out-of-bound arguments in translate formats are no longer silently ignored
-   Added the following game events:
    -   entity_dismount with a vibration frequency of 6
    -   entity_mount with a vibration frequency of 7
-   Changed the following game events:
    -   item_interact_finish now has a vibration frequency of 2 instead of 14
-   Removed heldItemTooltips option from options.txt
-   Added a network protocol feature for forcing bundle of packets to be processed within same client tick
-   Added \--pidFile argument to dedicated server command line for printing process id to file
-   The vanilla resource pack en_us language file is now sorted alphanumerically by key
-   Added show_notification field to recipes
    -   Accepts a boolean which determines if a notification is shown when unlocking this recipe
    -   defaults to true if isn\'t specified
-   A new recipe type smithing_transform has been added for the updated Netherite Upgrade recipe
-   A new recipe type smithing_trim has been added for the new Armor Trim recipe
-   A new recipe type crafting_decorated_pot has been added for the new Decorated Pot recipe
-   New registries trim_pattern and trim_material have been added for the armor trim system
-   Smithing table has temporarily two menu types
    -   Old menu without Smithing Template slot has been renamed to legacy_smithing
        -   Will be removed when Armor Trim feature stops being an experimental feature
    -   New menu with Smithing Template slot was added called smithing
-   Added new flag (value 128) to HideFlags NBT field for hiding armor trim item tooltips

## RESOURCE PACK FORMAT

-   The enchantment glint now has two separate texture files: enchanted_glint_entity.png and enchanted_glint_item.png
-   The texture format used to dynamically scale buttons and sliders has been updated to always include fixed 20px borders on the left and right
-   Slider textures are now defined in a separate slider.png file
-   The Create New World screen now uses a separate light_dirt_background.png for its background, unlike other screens

## COMMANDS

### CLONE

The clone command now supports specifying the source and target dimensions.

New syntax:

clone \[from \<sourceDimension\>\] \<begin\> \<end\> \[to \<targetDimension\>\] \<destination\> \...

Parameters:

-   sourceDimension: id of dimension to clone from
-   targetDimension: id of dimension to clone to

### DAMAGE

New command to apply damage to entities.

Syntax:

-   damage \<target\> \<amount\> \[\<damageType\>\] \[at \<location\>\]
-   damage \<target\> \<amount\> \[\<damageType\>\] \[by \<entity\>\] \[from \<cause\>\]

Parameters:

-   target: The entity to damage
-   amount: Amount of damage to inflict
-   damageType: The type of damage to inflict
    -   This determines how the damage affects the entity as well as which death message is displayed
-   entity: The entity inflicting the damage
-   cause: The cause of the damage, in the case of indirect damage
    -   Example: When shot by an Arrow, the entity is the Arrow projectile while cause might be a Skeleton
-   location: The location the damage originated at (when no entity caused the damage)
    -   For instance, location might represent the location of a Bed exploding in the Nether

### DATA

New source available:

-   string \<entity\|block\|storage\> \[path\] \[start\] \[end\] - reads a value as text, resulting in a string value

New arguments:

-   start: Index of first character to include at the start of the string
-   end: Index of the first character to exclude at the end of the string

### EFFECT

-   infinite is now a valid option for effect durations
    -   Infinite effect durations show up as \"∞\" in the player inventory view

### EXECUTE

#### EXECUTE IF\|UNLESS

New conditions available for the execute if\|unless sub-command:

-   execute if\|unless loaded \<pos\> - checks if the position given is fully loaded (in regard to both blocks and entities)
-   execute if\|unless dimension \<dimension\> - checks if the execution is in a matching dimension

Parameters:

-   pos: Block position to check
-   dimension: A dimension id

#### EXECUTE ON

New execute sub-command for selecting entities based on relation to the current executing entity:

-   execute on \<relation\>

Relations:

-   vehicle - the entity that the executing entity is riding
-   passengers - all entities directly riding the executing entity (no sub-passengers)
-   controller - the entity that is controlling the executing entity (for example: first passenger in a boat)
-   owner - the owner of the executing entity, if it is a tameable animal (like cats, wolves or parrots)
-   leasher - the entity leading the executing entity with a leash (might be a leash knot in case of being attached to a fence)
-   target - the attack target for the executing entity
-   attacker - the last entity that damaged the executing entity in the previous 5 seconds
-   origin:
    -   shooter, if the executing entity is a projectile (like Arrow, Fireball, Trident, Firework, Thrown Potion, etc.)
    -   thrower, if the executing entity is an item
    -   source of effect, if the executing entity is an Area Effect Cloud
    -   igniter, if the executing entity is a Primed TNT
    -   summoner, if the executing entity is Evoker Fangs or a Vex

If the relation is not applicable to the executing entity or there are no entities matching it, the selector returns zero elements.

#### EXECUTE POSITIONED OVER

New execute sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap.

Syntax:

-   execute positioned over \<heightmap\>

##### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

-   world_surface: Any non-air block
-   motion_blocking: Any motion blocking material (e.g. ignores flowers and grass)
-   motion_blocking_no_leaves: Any non-leaf motion blocking material
-   ocean_floor: Any non-fluid motion blocking material

#### EXECUTE SUMMON

New execute sub-command for summoning a new entity and binding the context (\@s) to it. Meant to simplify entity setup and reduce the need for raw NBT editing.

Syntax:

-   execute summon \<entity id\>

### FILLBIOME

-   The amount of network data transmitted when using the fillbiome command has been optimized

## TITLE

-   All time arguments to title times are now time durations and work with t, s and d suffixes

### WEATHER

-   The duration of the weather change now matches the game\'s regular weather cycle if not specified
-   The duration parameter is now a time duration in ticks and works with t, s and d suffixes
    -   To retain existing functionality, you need to add an s suffix to pre-existing commands

### RIDE

New command to allow entities to start or stop riding other entities.

Syntax:

-   ride \<target\> mount \<vehicle\>
    -   Makes a single target mount a single vehicle
    -   The command will fail if:
        -   vehicle is a player
        -   target is already riding a vehicle
        -   target and vehicle are the same entity
        -   vehicle is already a passenger (direct or indirect) of target
-   ride \<target\> dismount
    -   Dismounts target from any vehicle it is riding
    -   Fails if target is not riding anything

## DAMAGE TYPES

Damage Types are a new registry that can be extended through data packs. A Damage Type determines how damage is handledby the game. This includes which attributes the damage has as well as which death message is used when an entity diesdue to that type of damage.

Example:

    {
      "exhaustion": 0.1,
      "message_id": "arrow",
      "scaling": "when_caused_by_living_non_player"
    }

Fields:

-   message_id: The message id used for deaths caused by this damage type
    -   Will be combined with other string fragments to form a translation key
-   exhaustion: The amount of hunger exhaustion caused by this damage type
-   scaling: Whether this damage type scales with difficulty levels. Possible values:
    -   never: Damage is always the same
    -   always: Damage always scales with difficulty
    -   when_caused_by_living_non_player: Damage scales with difficulty if it was caused by a living entity who is not a player
-   effects: Optional field controlling how damage manifests when inflicted on players. Possible values:
    -   hurt (default): the default hurt sound
    -   thorns: Thorns hurt sound
    -   drowning: Drowning sound
    -   burning: A single tick of burning sound
    -   poking: Berry bush poke sound
    -   freezing: Freeze tick sound
-   death_message_type: Optional field that controls if special death message variants are used. Possible values:
    -   default (default): No special death message logic is applied
    -   fall_variants: Show a variant of fall damage death instead of a regular death message, e.g. death.fell.assist.item
    -   intentional_game_design: Show the intentional game design message instead of a regular death message

Damage type tags control many aspects of how damage from different sources are interpreted.

## PREDICATES

### DAMAGE TYPE PREDICATES

The following fields have been removed from damage type predicates: is_projectile, is_explosion, bypasses_armor,bypasses_invulnerability, bypasses_magic, is_fire, is_magic, is_lightning.

A new tags array has been added, with the predicate matching if all entries match. Each entry has two fields:

-   id: The ID of a damage type tag
-   expected: Whether the damage is expected to have or not have the tag for the predicate to match

## GAME RULES

-   Added commandModificationBlockLimit, controlling the maximum number of blocks changed in one execution of clone, fill and fillbiome
-   Added doVinesSpread game rule, determining if vines will spread to nearby blocks
    -   Defaults to true

## TEXT COMPONENTS

Added an optional fallback field to translate text components.

-   The new field is a string that will be used in place of translation if it is missing
-   If fallback is missing, the old behavior (i.e. using the key itself as the translation) is preserved

## DISPLAY ENTITIES

Three new entities have been added for flexible display of items, blocks and text

-   Those entities, similarily to marker, don\'t tick and have no collisions or physics
-   Models render at entity position, with normal rotation around X and Y axis (so it can be controlled by teleport commands), but also with additional arbitrary model transform

### COMMON DATA TYPES

Tag contents for display entities include some new data types with a complex structure. Any form can be used for modifying data, but only one form is used for saving.

#### TRANSFORMATIONS

Arbitrary affine transform.

-   Matrix form: array of 16 numbers, describing row-major matrix
-   Decomposed form (used for saving): object with following fields:
    -   translation - 3d vector
    -   left_rotation, right_rotation - rotation
    -   scale - 3d vector
    -   Transforms are composed in order translation, left_rotation, scale, right_rotation

#### ROTATIONS

-   Quaternion form (used for saving): array of 4 numbers, describing components (x, y, z, w)
-   Axis-angle form: object with following fields:
    -   axis - unit 3d vector
    -   angle - in radians

### INTERPOLATION

Some properties of display entities can be interpolated. That means that clients will see gradual changes over time instead of instantaneous jumps.

Display entities keep track of current and previous values of interpolated values:

-   All properties marked as \"interpolated\" are part of a single interpolation set
-   Any update to interpolated property will cause all values of interpolation set to be saved as \"current\"
    -   Data command executions that do not change value of property (even if it\'s present in NBT) do not count as updates
    -   Updates are synchronized to clients at most once per tick, so multiple updates within command will still count as a single update
-   The last values generated before an update are saved as \"previous\"
-   If interpolation is enabled, the entity will transition between \"previous\" and \"current\" values over interpolation_duration ticks
-   Interpolation can be started by writing to the start_interpolation field (this field is not normally present in NBT)
    -   The value in this field is a delay in ticks between client receiving the update and interpolation start
    -   A value of 0 ticks means that interpolation will start in next client tick after receiving the update
    -   Positive values increase this delay further
-   Interpolation will end (entity fully in \"current\" state) in start_interpolation + interpolation_duration ticks after receiving the update
-   The interpolation target can be updated without setting start_interpolation, but it will still behave as if it was started at the moment of the last update to start_interpolation
    -   That means that if the value is updated, but more than interpolation_duration ticks have passed since last start_interpolation update, the entity will immediately jump to new values

### COMMON PROPERTIES

All display entity types have the following fields:

-   transformation - the transformation applied to model (after normal entity orientation). Defaults to identity. Interpolated
-   billboard - option to control if entity should pivot to face player when rendered:
    -   fixed - no rotation (default)
    -   vertical - entity can pivot around its vertical axis
    -   horizontal - entity can pivot around its horizontal axis
    -   center - entity can pivot around its center point
-   brightness - if present, overrides light values used for rendering. Omitted by default (which means rendering uses values from entity position). Object has two fields:
    -   sky - value of skylight, 0..15
    -   block - value of block light, 0..15
-   view_range - maximum view range of this entity. Actual distance depends on client-side render distance and entity distance scalling. Default value 1.0 (roughly the same as fireball)
-   shadow_radius - size of shadow. Defaults to 0 (no shadow). Interpolated
-   shadow_strength - strength of the shadow. Controls the opacity of the shadow as a function of distance to block below. Defaults to 1. Interpolated
-   width, height - describe size of culling bounding box
    -   Bounding box spans vertically y to y+height and horizontally width/2 in all directions from entity position
    -   If either field is set to 0, culling is disabled
    -   Both default to 0
-   glow_color_override - override glow border color. Defaults to -1 (use team color). Alpha component is ignored

### ITEM_DISPLAY

Displays a single item stack.

-   Stack can be changed with commands by setting slot container.0

Fields:

-   item - item stack to display. Same format as in inventory (example: {id: \"minecraft:dirt\", Count: 1})
-   item_display - describes item model transform applied to item (as defined in display section in model JSON)
    -   Values: none (default), thirdperson_lefthand, thirdperson_righthand, firstperson_lefthand, firstperson_righthand, head, gui, ground, fixed

### BLOCK_DISPLAY

Displays a block state.

-   Does not display all block entities, even if they would normally be created on block placement (like chests)

Fields:

-   block_state - block state to display. Same format as item held by endermen (example {Name:\"minecraft:dirt\"})

### TEXT_DISPLAY

Displays a text component.

Fields:

-   text - text to display. Components are resolved with the context of the display entity
-   line_width - line width used to split lines (note: new lines can be also added with \\n characters). Defaults to 200
-   text_opacity - opacity (alpha component) of rendered text. Defaults to 255. Interpolated
-   background - color of background. Includes alpha channel. Defaults to 0x40000000. Interpolated
-   default_background - if true, rendering uses default text background color (same as in chat). Defaults to false
-   shadow - whether the text should be displayed with a shadow. Defaults to false
-   see_through - whether the text should be visible through blocks. Defaults to false
-   alignment - how the text should be aligned
    -   Values: center (default), left, right

Note: text display backgrounds uses new shader types rendertype_text_background and rendertype_text_background_see_through.

## INTERACTION ENTITIES

A new type of entity that records attacks (\"left clicks\") and interactions (\"right clicks\"). Interactions are invisible and of a custom size.

Fields:

-   width: Width of the entity\'s bounding box (default 1)
-   height: Height of the entity\'s bounding box (default 1)
-   attack: Records the last attack action on the entity
-   interaction: Records the last interaction action on the entity
-   response: Boolean specifying if interacting should trigger a response (arm swing, sound effects, etc - default false)

### ACTION FORMAT

When an action is stored, it always has two fields:

-   player: The UUID (in standard integer array format) of the player performing the action
-   timestamp: The timestamp of the game tick when the event happened (stored as a long)

### ADVANCEMENT TRIGGERS

-   Interacting with an Interaction entity triggers player_interacted_with_entity
-   Attacking an Interaction entity triggers player_hurt_entity

### EXECUTE ON WITH INTERACTIONS

The Interaction entity targets the player who last interacted with it. That makes the following possible:

-   execute on attacker: execute as the last player who attacked the entity
-   execute on target: execute as the last player who interacted with the entity

## TAGS

### BLOCK BEHAVIOR

-   Fire burns out faster in certain biomes, and this is now controlled by the increased_fire_burnout biome tag

### MOB SPAWNING

-   The only_allows_snow_and_gold_rabbits biome tag has been renamed to spawns_gold_rabbits to match its behavior
-   White Rabbit variants are now controlled by the spawns_white_rabbits biome tag
-   Fox variants are now controlled by the spawns_snow_foxes biome tag

### MOB BEHAVIOR

-   Snow Golems melting in warm biomes is now controlled by the snow_golem_melts biome tag
-   Only mobs in the dismounts_underwater entity tag will now force the rider to dismount when underwater

## NETWORK PROTOCOL

-   Clients now reset their Secure Chat session state when receiving the login packet

### PACKET BUNDLES

-   Added new delimiter packet to clientbound game protocol
-   All packets between two delimiters are guaranteed to be processed within same tick
-   For security reasons this feature is not supported in the serverbound direction

## PALETTED PERMUTATIONS

-   paletted_permutations is a new type of atlas configuration source used to dynamically generate new textures in memory based on a set of color palettes
-   Color palettes allow you to swap out the colors of a texture without having to supply all files for the variants of a texture in a resource pack
-   This is useful for things like armor trims, where you want to be able to change the color of parts of the armor without having to create a new texture for each color
-   The paletted_permutations source has a set of required parameters:
    -   textures A list of namespaced locations of base textures
        -   These textures will be used to generate variants of them that have been modified by color palettes
    -   palette_key A namespaced location of a color palette key file
        -   A color palette key is used to define the set of key pixel colors we want to swap out with the color palettes defined below
    -   permutations A map of permutations from suffix to a namespaced location of a color palette file
        -   The suffix is appended at the beginning to the resource location of the output variant textures, with a \_ character separating the suffix and the base texture name
        -   The color palette is a texture file with a set of pixels that are used for replacing pixels that match the color palette key in each base texture
        -   The number of pixels in each color palette must be the same as that of the palette_key defined for this source
        -   Key matching is done by comparing the RGB values of each pixel in the palette_key to the RGB values of each pixel in the color palette
        -   The alpha channel is ignored for key matching, but in the resulting texture the alpha channel is multiplied with the color palette\'s alpha channel
        -   Pixels that do not match the palette_key are copied over to the resulting texture as-is
-   After defining a paletted_permutations source, you can then reference those namespaced output textures in other resources in your resource pack

For example, if you have the following paletted_permutations source:

    {
        "type": "paletted_permutations",
        "textures": [
            "minecraft:item/leather_helmet",
            "minecraft:item/leather_chestplate",
            "minecraft:item/leather_leggings",
            "minecraft:item/leather_boots"
        ],
        "palette_key": "minecraft:colormap/color_palettes/leather_armor_color_key",
        "permutations": {
            "red": "minecraft:colormap/color_palettes/red",
            "green": "minecraft:colormap/color_palettes/green",
            "blue": "minecraft:colormap/color_palettes/blue"
        }
    }

You can then reference the resulting textures in other resources like this:

    {
        "textures": {
            "layer0": "minecraft:item/leather_helmet_red",
            "layer1": "minecraft:item/leather_chestplate_green",
            "layer2": "minecraft:item/leather_boots_blue"
        }
    }

## TRIM PATTERNS & MATERIALS

-   Trim patterns and materials for armor are defined by the server through the trim_pattern and trim_material registry respectively
    -   As a result, new trim patterns and materials can be added via data packs
-   These are synchronized to clients when they join the server
    -   However, clients must have an accompanying resource pack to see those registered trim patterns and materials
    -   The paths to these textures are inferred based on the filename of the pattern json, and will try to find the textures within the same namespace as the trim pattern\'s name field
-   The following data is defined by a trim pattern:
    -   asset_id which is a namespaced id used to infer texture locations and localization
    -   template_item which is the id of the smithing template item used to apply the trim pattern
    -   description which is a text component used for displaying the pattern name of an armor trim when hovering an armor itemstack
-   The following data is defined by a trim material:
    -   asset_name which is a string used as a suffix for armor trim texture locations
    -   ingredient which is the id of the ingredient item used to apply the trim material
    -   item_model_index which is a float which defines the item model override each armor item model should target to change their visuals for this material
    -   override_armor_materials which is an optional map of armor material to overridden color palette
        -   Map key is the armor material that this trim material wants to override with a different color palette
        -   Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
    -   description which is a text component used for displaying the material name of an armor trim when hovering an armor item stack
        -   The style defined in this description is applied to the armor trim pattern description as well

# EXPERIMENTAL FEATURES

The following changes only apply when one or more Experiments is turned on, either by activating the corresponding experimental data pack or by turning it on in the Experiments screen while creating the world.

-   Added Smithing Template items
-   Redesigned the Smithing Table
-   Changed how Netherite equipment is crafted
-   Added a new armor trimming system to visually customize your armor
-   Added Sniffer mob and Torchflowers
-   Added the Cherry Grove biome
-   Added Archaeology
-   Mob Heads can now be placed on top of Note Blocks without sneaking

## SMITHING TEMPLATES

-   Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
-   Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
-   Smithing Templates define what type of upgrade you will be making to equipment
    -   It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
    -   There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
-   Smithing Templates are consumed when used to upgrade an item in the Smithing Table
-   You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

## NETHERITE EQUIPMENT

-   Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
-   Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
-   This change was made for a variety of reasons:
    -   Increase the time players utilize Diamond equipment before Netherite
    -   Make Netherite equipment a more significant achievement in the game\'s progression
    -   Adapt Netherite more naturally into the new Smithing Table crafting system

## ARMOR TRIMS

-   You can now visually customize your armor with a variety of unique trims at the Smithing Table
-   Armor trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings and Boots
    -   All trim patterns are visually the same on an armor\'s item icon, but the color will still change based on the trim material
    -   To check which trim pattern a piece of armor has, you can hover over it in the inventory
-   Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
    -   Pillager Outpost: Sentry Armor Trim
    -   Desert Pyramid: Dune Armor Trim
    -   Shipwreck: Coast Armor Trim
    -   Jungle Temple: Wild Armor Trim
    -   Ocean Monument: Tide Armor Trim
    -   Ancient City: Ward Armor Trim
    -   Woodland Mansion: Vex Armor Trim
    -   Nether Fortress: Rib Armor Trim
    -   Bastion Remnant: Snout Armor Trim
    -   Stronghold: Eye Armor Trim
    -   End City: Spire Armor Trim
-   Smithing Templates are found in chests in their respective structure
    -   The Ocean Monument has no chests, Elder Guardians sometimes instead drop a Smithing Template upon death
-   Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
-   An armor trim has two properties: a pattern and a material
    -   The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    -   The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
-   The viable ingredients you can use to define the color of your armor trim are the following:
    -   Iron, Copper, Gold, Lapis, Emerald, Diamond, Netherite, Redstone, Amethyst, Quartz

## SNIFFER

-   The Sniffer is the mob vote winner of Minecraft Live 2022
-   Sniffers cannot be tempted or tamed
-   Sniffers are passive, friendly mobs
-   Sniffers sniff the air and occasionally dig for seeds, which produces a Torchflower Seed
-   Sniffers can be bred by feeding them Torchflower Seeds
-   The Sniffer is currently only available as a Spawn Egg in the creative inventory

## TORCHFLOWERS

-   The Torchflower seed can be planted on farmland and grows into a flower
-   The seed can be used to breed two Sniffers
-   The full-grown flower can be harvested and replanted but can also be crafted into a dye

## CHERRY GROVES

-   Added a new Cherry Grove biome, with pretty cherry blossom trees
    -   The biome can be found in the mountains, in similar places as Meadows
-   Added a new Cherry wood set, with all the corresponding wooden things you can make from it
-   Cherry Leaves have pink particles falling underneath
-   Added a new Pink Petals block with lots of pink flowers on the ground
    -   Each pink petal block can contain up to 4 petals
    -   Using bone meal on it increases the number of petals
    -   Placing a petal on a block increases the number of petals
    -   Mining the block gives you the number of petals in the block

## ARCHAEOLOGY

### THE BRUSH

-   The brush is a craftable item you can use to brush things

### SUSPICIOUS SAND

-   Can be found in Desert Temples and Desert Wells
-   This fragile block is hard to spot and easy to destroy, so be careful!
-   Brushing the Suspicious Sand with a Brush will extract objects that were buried long ago

### POTTERY SHARDS

-   Pottery Shards have pictures on them
-   They cannot be crafted and are only found by brushing Suspicious Sand

### DECORATED POTS

-   Crafting four Pottery Shards together will create a Decorated Pot with a picture on each side
-   Brick items can be used instead of Pottery Shards in the Decorated Pot recipe
    -   The sides that were made from Brick items will not have pictures
-   Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back
    -   Hitting the pot with bare hands, silk touch tools, or any other item, will drop an intact pot instead

# FIXED BUGS IN 1.19.4

Around 150 bugs were fixed in this release. View the [list on the issue tracker](https://bugs.mojang.com/issues/?filter=27608).

# GET THE RELEASE

To install the Release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and click play! Make sure your Launcher is set to the \"Latest Release" option.

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/8f3112a1049751cc472ec13e397eade5336ca7ae/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

-   For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/MC1194Feedback). If you\'re feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
