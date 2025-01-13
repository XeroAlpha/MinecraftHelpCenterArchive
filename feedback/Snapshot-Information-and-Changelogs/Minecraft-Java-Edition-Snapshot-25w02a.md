---
title: Minecraft Java Edition - Snapshot 25w02a
date: 2025-01-08T15:27:29Z
updated: 2025-01-13T12:06:31Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/33310041339789-Minecraft-Java-Edition-Snapshot-25w02a
hash:
  h_01JH38AJP37ET68M1C3TE4DJZ7: new-features
  h_01JH38AJP4Y1WH2M16AEQRAB0E: leaves-block-particles
  h_01JH38AJP44TMWYP44NM034Q88: pig-variants
  h_01JH38AJP4K0BE889WDBBZ6XGP: wildflowers
  h_01JH38AJP4BGEJ1EHAEXM1E48J: leaf-litter
  h_01JH38AJP4CKCEJQ008AQRD8MV: changes
  h_01JH38AJP4VVG2ZEBJSDDW9DN3: garden-awakens-changes
  h_01JH38AJP4B6S18JD8MB301WG0: lodestone-changes
  h_01JH38AJP4H2S3DYG1FHEKD2RQ: technical-changes
  h_01JH38AJP4FRW7BRD3CP1P56ZC: data-pack-version-62
  h_01JH38AJP46PMZ39303056Y1N4: commands
  h_01JH38AJP4AN2FRT6C6H1YRH45: text-component-data-format
  h_01JH38AJP4MQ4QGBF9W88FMP92: hover-events
  h_01JH38AJP483SEPPS2C22SV0ZG: click-events
  h_01JH38AJP4C256C9F1M9AH95MC: tags
  h_01JH38AJP483H0200FXJGY0V7P: block-tags
  h_01JH38AJP4BCZMYNJ6QM1PJ9N9: item-tags
  h_01JH38AJP4BCRB0R96494SJX27: biome-tags
  h_01JH38AJP44BTG4CFB9T73NP4P: entity-data
  h_01JH38AJP4R3YQ5J3DRYWM8C28: pig-variants-1
  h_01JH38AJP4K62HS21D3WBFMCTQ: recipes
  h_01JH38AJP44MNP56A5D8G8ENXS: crafting_transmuterecipe-type
  h_01JH38AJP4BFYCYAW4GV91EPVR: item-components
  h_01JH38AJP4MG7SRKBE9KTT8TNR: newweaponcomponent
  h_01JH38AJP46EK27G5CD14YJCF8: newpotion_duration_scalecomponent
  h_01JH38AJP45MCPRPS5ZGKM0RMB: toolcomponent
  h_01JH38AJP5C7RKWNQFWD554Y1N: resource-pack-version-47
  h_01JH38AJP561WF6ZXP6A607E8S: new-and-updated-pig-textures
  h_01JH38AJP5D16AS6CHJ8M8YR7G: fixed-bugs-in-25w02a
  h_01JH38AJP563DTDD6Q92H3ZXGZ: get-the-snapshot
---

It's the first snapshot Wednesday of 2025, and we have some fun new features to kick off the new year. This snapshot adds new ambient features to the game, including wildflowers, leaf litter, and falling leaves. Pigs are getting two new variants: you may venture into the colder biomes to find the cold pig, or head for sunnier spots to meet its counterpart – the warm pig! Lodestones are also becoming easier to craft, making them more accessible in the early game. Now you'll only need an iron ingot with your chiseled stone bricks.

 

## New Features

- Added new falling leaves particles to Leave blocks without particles
- Added cold and warm variants for the Pig
- Added Wildflowers block
- Added Leaf Litter block

### Leaves block particles

- All Leaves blocks now have chance of spawning falling leaf particles
- These blocks are affected by this change:
  - Oak Leaves
  - Jungle Leaves
  - Acacia Leaves
  - Dark Oak Leaves
  - Spruce Leaves
  - Mangrove Leaves
  - Birch Leaves
  - Azalea Leaves
  - Flowering Azalea Leaves

### Pig Variants

- New Pig variants have been added, the variant is determined by the biome they spawn in
- Temperate Pig - The Pig we are all familiar with
  - Spawns by default where the cold and warm Pig variants do not spawn
- Cold Pig - A variant that spawns in the following biomes:
  - Old Growth Pine Taiga
  - Old Growth Spruce Taiga
  - Taiga
  - Snowy Taiga
  - Windswept Hills
  - Windswept Gravelly Hills
  - Windswept Forest
- Warm Pig - A variant that spawns in the following biomes:
  - Savanna
  - Savanna Plateau
  - Windswept Savanna
  - Jungle
  - Sparse Jungle
  - Bamboo Jungle
  - Eroded Badlands
  - Wooded Badlands
  - Badlands
- When bred by a player, a baby Pig variant will not be chosen by the current biome, but instead randomly selected from one of the parents' variants

### Wildflowers

- Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
- Wildflowers can have different amounts of flowers in one block space
  - Up to four Wildflowers can be placed in the same block space
  - Placing a Wildflower into an already placed Wildflowers block increases the amount of flowers
  - Using Bone Meal on Wildflowers will produce more Wildflowers
- Wildflowers can be placed in four orientations
- Wildflowers can be crafted into Yellow Dye

### Leaf Litter

- Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
- Leaf Litter can have different amounts of leaves in one block space
  - Up to four Leaf Litter pieces can be placed in the same block space
  - Placing a Leaf Litter into an already placed Leaf Litter block increases the amount of leaves
- Leaf Litter can be placed in four orientations
- Leaf Litter can be created by smelting any type of Leaves block
- Leaf Litter can be used as fuel for smelting
- Leaf Litter has unique block sounds

## Changes

- Lodestones have a new crafting recipe and can now be found in Ruined Portals
- Added new break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates
- Zombified Piglins now need to be killed by a Player to drop the Player-specific loot
  - This makes them consistent with all other mobs in the game
- Chunks loaded by a portal will now be re-loaded again automatically when the world is reopened
- Farm animals can now spawn in Badlands
- Short Grass now generates slightly sparser in Meadows
- The volume of the narrator is now affected by the game's configured volume in the 'Voice' category
- Uploading a world to Realms will now enable Command Blocks by default
- It is now possible to upload Hardcore singleplayer worlds to Realms
- Bubble columns produce less particles and sounds when entities that are unaffected by them are inside them
- If the game detects that the last startup did not complete normally, the fullscreen option will now be reset

### Garden Awakens Changes

- Pale Garden biome now occupies more space that was previously taken by Dark Forest
- Woodland Mansions can now generate in Pale Garden biome
- Pale Oak Leaves and Pale Oak Saplings have an updated map color
- Creakings can now be named using Name Tags
  - Named Creaking will persist through the day
    - However, it will still be torn down if stuck with a player or if it is too far from its Heart
  - Named Creakings are still resistant to all damage, and can communicate with their Hearts via particles
- Creaking Hearts correctly placed between Logs have a new dormant texture during the day
  - Dormant Creaking Hearts cannot spawn new Creakings and Resin
- Transition between the awake and dormant states for Creaking Hearts and transition of Eye Blossoms is now based on the fixed day time
  - All these behaviors are no longer affected by weather or dimension brightness

### Lodestone Changes

- The Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Bricks
- Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether

## Technical Changes

- The Data Pack version is now 62
- The Resource Pack version is now 47

## Data Pack Version 62

- Changes to commands
- Updated data format of Text Components
- structure_block in the load mode has now a new option: Strict Placement
  - If set to true, the blocks in the placed structure will not trigger block updates, block entity side effects, or shape updates
- The Owner field of tamed animals is no longer restricted to referencing Players
- Updated data format of equipment drop chances in entity data
- Added data-driven registry for pig variants
- Added pig entity sub-predicate for matching pig variants

### Commands

- Text Components in commands such as /tellraw or /title are now specified with SNBT instead of JSON
- Text Style in the /scoreboard command when specifying the styled number format is also now specified with SNBT instead of JSON
- The behavior of setblock and fill commands have changed in how they handle block entity data:
  - If the block entity data is not specified, and the existing block has data, the block entity data will be preserved
  - If the block entity data is specified, the block entity data will be set to the specified value
  - To clear the block entity data explicitly, you must now specify the block entity data as {}
  - The operation is now successful if either the block state changed or the block entity data changed
- fill, clone, setblock and place template accept a new option: strict
  - If specified, the command will place blocks as-is without triggering block updates and shape updates
- The replace option in the fill command is no longer terminal, and can be followed with additional options
- New syntax for commands to use the new strict option, and more flexible use of replace:
  - fill \<from\> \<to\> \<block\> keep
  - fill \<from\> \<to\> \<block\> \[replace \<filter\>\]? \[strict\|destroy\|hollow\|outline\]?
  - clone \[from \<sourceDimension\>\]? \<begin\> \<end\> \[to \<targetDimension\>\]? \<destination\> \[strict\]? \[\[replace\|masked\|filtered \<filter\>\] \[force\|move\|normal\]?\]?
  - setblock \<pos\> \<block\> \[destroy\|keep\|replace\|strict\]?
  - place template \<template\> \[\<pos\> \[\<rotation\> \[\<mirror\> \[\<integrity\> \[\<seed\> \[strict\]?\]?\]?\]?\]?\]?

### Text Component Data Format

- Text Components are no longer stored as JSON wrapped by a string
- The format itself is the same as before, but inlined directly into the outer structure
- For example, the item component minecraft:custom_name="{"text":"Renamed item"}" will become minecraft:custom_name={text:'Renamed item'}
- This includes Text Components passed as arguments to commands such as /tellraw or /title
  - For example, /tellraw @s ""text":"Hello world"" may become /tellraw @s {text:'Hello world'}
- Note: in the case where Text Components are embedded in NBT, no distinction exists between boolean and integer types
  - To pass boolean arguments to translations, you must use the string form
- For Text Components with the nbt type and interpret set to true, Text Components will be parsed from the given NBT directly rather than converting to string and parsing as JSON
- The format of hover and click events has been updated

#### Hover Events

- The hoverEvent field has been renamed to hover_event
- The legacy value field (which was parsed from a rendered text component) is no longer supported
- For the show_text action:
  - contents field has been renamed to text
  - e.g. {action:'show_text',contents:'Hello world'} becomes {action:'show_text',text:'Hello world'}
- For the show_item action:
  - The contents field has been inlined
  - e.g. {action:'show_item',contents:{id:'minecraft:stick',count:2}} becomes {action:'show_item',id:'minecraft:stick',count:2}
  - If contents was specified only as an item id, it is replaced with the full format and inlined
  - e.g. {action:'show_item',contents:'minecraft:stick'} becomes {action:'show_item',id:'minecraft:stick'}
- For the show_entity action:
  - The contents field has been inlined
  - The id field has been renamed to uuid
  - The type field has been renamed to id
  - e.g. {action:'show_entity',contents:{id:\[I;0,0,0,0\],type:'minecraft:pig'}} becomes {action:'show_entity',uuid:\[I;0,0,0,0\],id:'minecraft:pig'}

#### Click Events

- The clickEvent field has been renamed to click_event
- For the open_url action:
  - The value field has been renamed to url
  - The click event will no longer parse if not a valid URI with either https:// or http:// schemes, instead of simply not working
  - e.g. {action:'open_url',value:'https://minecraft.net'} becomes {action:'open_url',url:'https://minecraft.net'}
- For the run_command action:
  - The value field has been renamed to command
  - The click event will no longer parse if the command contains disallowed characters, instead of simply not working
  - It is no longer required that the specified command field has a / prefix
  - e.g. {action:'run_command',value:'/say Hi'} becomes {action:'run_command',command:'/say Hi'}
- For the suggest_command action:
  - The value field has been renamed to command
  - The click event will no longer parse if the command contains disallowed characters, instead of simply not working
  - e.g. {action:'suggest_command',value:'/help'} becomes {action:'suggest_command',command:'/help'}
- For the change_page action:
  - The value field has been renamed to page
  - The page value now requires a positive integer instead of a string
  - e.g. {action:'change_page',value:'1'} becomes {action:'change_page',page:1}
- The copy_to_clipboard format is unchanged

### Tags

#### Block Tags

- Added \#replaceable_by_mushrooms - exhaustive list of all bocks that can be replaced as a mushroom is placed or grows
- Added \#sword_instantly_mines - blocks that are instantly mined by Swords

#### Item Tags

- Added \#book_cloning_target - item that can be crafted together with a Written Book to clone it

#### Biome Tags

- Added \#spawns_cold_variant_farm_animals - all biomes where cold variant of farm animals spawn
- Added \#spawns_warm_variant_farm_animals - all biomes where warm variants of farm animals spawn

### Entity Data

- The ArmorDropChances, HandDropChances, and body_armor_drop_chance fields have been merged into a drop_chances field
  - Format: map between equipment slot type and chance value
    - Valid equipment slots: head, chest, legs, feet, mainhand, offhand, body
  - If not specified or removed, chances will be assumed as default (0.085f)
  - e.g. drop_chances:{chest:0.1,feet:1.0}
- Drop chances with a default value will no longer be stored, and the drop_chances field is removed entirely if all defaults
- Area Effect Clouds have a new field: potion_duration_scale (float)
  - If not specified, defaults to 1.0
  - The duration of the potion effect applied is scaled by this factor
  - Area Effect Clouds created by Lingering Potions will have a scale of 0.25

### Pig Variants

- Pig variants can be data-driven by adding entries to data/\<namespace\>/pig_variant/\<id\>.json
- This feature is experimental
- Fields in file:
  - model - one of: normal, cold
  - texture - texture id for this variant, resolves to assets/\<namespace\>/textures/\<path\>.png
  - biome - single entry, list or a tag describing biomes in which this variant natually spawns
    - If not specified, this variant will only be selected if no other variant matches the current biome

### Recipes

#### crafting_transmute Recipe Type

- The result field now supports specifying a count and a components patch to apply to the result
- The components patch is applied to the final transmuted item
- The new format is an object with fields:
  - id - item id
  - count - positive integer (default: 1)
  - components - a component patch object (default: empty)
  - e.g. "result": {"id": "minecraft:stick", "count": 3, "components": {"!minecraft:damage": {}, "minecraft:enchantment_glint_override": {}}}
- The field can still be defined as before as an inline item id (e.g. "result": "minecraft:stick")

### Item Components

#### New weapon component

- When present, the 'Item Used' statistic will be incremented for each attack with the item
- The specified amount of damage can be done to the item with each attack
- Format: object with fields:
  - damage_per_attack - non-negative integer (default: 1)
    - The amount to damage the weapon for each attack performed
  - can_disable_blocking - boolean (default: false)
    - If true, will disable a blocking Shield on successful attack
  - e.g. weapon={damage_per_attack:2}

#### New potion_duration_scale component

- When present, for items that have the potion_contents component, the duration of the applied effects will be scaled by this factor
- This also applies to custom_effects in the potion_contents component, unlike the previous hardcoded scaling factor
- If not specified, defaults to 1.0
- Format: non-negative float
  - e.g. potion_duration_scale=0.25

#### tool Component

- Added new optional field: can_destroy_blocks_in_creative (bool)
  - If false, players cannot break blocks while holding this tool in Creative Mode
  - If not specified, defaults to true

## Resource Pack Version 47

- Added textures for new falling leaves particles
- New and updated Pig textures
- Added textures for new Wildflowers block
- Added break, place, step, fall and hit sounds for Iron Blocks, Iron Bars, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates

### New and updated Pig textures

- Added new textures for Pig variants:
  - cold_pig
  - warm_pig
- Changed the size of pig texture

## Fixed bugs in 25w02a

- [MC-7697](https://bugs.mojang.com/browse/MC-7697) - Tridents or arrows shot through lava sometimes don't catch fire
- [MC-55800](https://bugs.mojang.com/browse/MC-55800) - Successful "/fill air destroy" commands give error message and return 0 for result/success
- [MC-56653](https://bugs.mojang.com/browse/MC-56653) - Zombified Piglins drop XP and rare drops if killed by anything while in angered state
- [MC-90212](https://bugs.mojang.com/browse/MC-90212) - You cannot hang on to climbable blocks while gliding with elytra
- [MC-93185](https://bugs.mojang.com/browse/MC-93185) - The exit portal in the end generates at highest block at 0 0 which can make it generate incomplete
- [MC-97244](https://bugs.mojang.com/browse/MC-97244) - The "minecraft:enchant.thorns.hit" sound event doesn't play when non-player entities are damaged by the thorns enchantment
- [MC-113878](https://bugs.mojang.com/browse/MC-113878) - Attribute modifiers description for chest is misleading / "When on body" instead of "When on chest"
- [MC-118053](https://bugs.mojang.com/browse/MC-118053) - Wolves with the Owner of a non-player are spawned sitting
- [MC-118092](https://bugs.mojang.com/browse/MC-118092) - Crafting recipe unlock toast says "New Recipes Unlocked!" even when only one recipe was unlocked
- [MC-118470](https://bugs.mojang.com/browse/MC-118470) - Narrator plays at full volume when volume is off
- [MC-128079](https://bugs.mojang.com/browse/MC-128079) - Statistic for using shears doesn't increase when mining certain blocks
- [MC-135192](https://bugs.mojang.com/browse/MC-135192) - Boats are immediately sunken if there is a string on the surface of the water
- [MC-141297](https://bugs.mojang.com/browse/MC-141297) - You cannot set lit state of redstone torches using setblock, debug stick and BlockStateTag, to be to opposite of the situation it would be in
- [MC-165421](https://bugs.mojang.com/browse/MC-165421) - Bubble columns have the opposite effect on tridents and wind charges
- [MC-167125](https://bugs.mojang.com/browse/MC-167125) - Rounding error on fall damage
- [MC-183329](https://bugs.mojang.com/browse/MC-183329) - Nether portal teleport overlay does not show up if the player has the nausea effect
- [MC-183623](https://bugs.mojang.com/browse/MC-183623) - Hardcore worlds in the world menu have a comma after the red exclamation mark
- [MC-184681](https://bugs.mojang.com/browse/MC-184681) - Customized worlds still say "Buffet world customization" since 20w21a
- [MC-202226](https://bugs.mojang.com/browse/MC-202226) - /recipe give or take for one recipe says "recipes"
- [MC-220672](https://bugs.mojang.com/browse/MC-220672) - Inconsistent pluralization in customize world preset heading source string
- [MC-222876](https://bugs.mojang.com/browse/MC-222876) - "Buffet world customization" is incorrectly capitalized
- [MC-226772](https://bugs.mojang.com/browse/MC-226772) - Shulker box opening / closing subtitle shows "Shulker"
- [MC-241951](https://bugs.mojang.com/browse/MC-241951) - Player momentum on X and Z axis are cancelled separately at low values
- [MC-248099](https://bugs.mojang.com/browse/MC-248099) - Mob pathfinding breaks after falling into water accidentally while walking
- [MC-253721](https://bugs.mojang.com/browse/MC-253721) - Wrong logs when running /op @a
- [MC-260440](https://bugs.mojang.com/browse/MC-260440) - Players can no longer activate swimming mode in water while flying with elytra
- [MC-261385](https://bugs.mojang.com/browse/MC-261385) - Bubble columns act differently at the surface depending on non-air blocks
- [MC-262928](https://bugs.mojang.com/browse/MC-262928) - The "minecraft:entity.player.hurt" sound is no longer played when players receive thorns damage from guardians or elder guardians
- [MC-262939](https://bugs.mojang.com/browse/MC-262939) - Changing dimensions or respawning with nausea effect active displays nether portal overlay
- [MC-265514](https://bugs.mojang.com/browse/MC-265514) - HRTF stuck on even when directional audio is set to off in update 1.20.2
- [MC-267221](https://bugs.mojang.com/browse/MC-267221) - "value" within "change_page" clickEvent json looks for a string instead of an integer
- [MC-267323](https://bugs.mojang.com/browse/MC-267323) - Items fields with old boolean JSON formatting are cleared upon world update
- [MC-270220](https://bugs.mojang.com/browse/MC-270220) - Granting all advancements results in prolonged, disruptive and loud audio spam
- [MC-271065](https://bugs.mojang.com/browse/MC-271065) - Diagonal movement is not normalized when crouching or using certain items
- [MC-272790](https://bugs.mojang.com/browse/MC-272790) - Shulker boxes and other blocks in the end exit portal when it changes state are not dropped as items
- [MC-273338](https://bugs.mojang.com/browse/MC-273338) - Flying boat glitch using string and rising bubble columns
- [MC-274187](https://bugs.mojang.com/browse/MC-274187) - The sweeping attack from a sword enchanted with Fire Aspect can ignite other players with PVP disabled
- [MC-275994](https://bugs.mojang.com/browse/MC-275994) - Having the pie chart open while the window is unfocused spams the logs
- [MC-277403](https://bugs.mojang.com/browse/MC-277403) - Flaming arrows and tridents still don't extinguish when water is placed in their location
- [MC-277537](https://bugs.mojang.com/browse/MC-277537) - Pale moss carpets sometimes generate disjointed
- [MC-277780](https://bugs.mojang.com/browse/MC-277780) - Minecraft resaves all maps with every autosave even after the 1st patch
- [MC-277807](https://bugs.mojang.com/browse/MC-277807) - Teleporting the player's mount causes rotation de-sync, previously did not
- [MC-277865](https://bugs.mojang.com/browse/MC-277865) - The animation of boats in bubble columns breaks when over a certain "Time" in level.dat
- [MC-277922](https://bugs.mojang.com/browse/MC-277922) - Boats in 1 block high downward bubble column will continue to rock back and forth
- [MC-278040](https://bugs.mojang.com/browse/MC-278040) - Creaking swim pathfinding breaks after being submerged
- [MC-278096](https://bugs.mojang.com/browse/MC-278096) - "Fabulous!" graphics and clouds disabled causes all particles to linger in frame buffer for one frame
- [MC-278164](https://bugs.mojang.com/browse/MC-278164) - Click sound is played twice when you click a setting button and there's a slider under the mouse in the next screen
- [MC-278204](https://bugs.mojang.com/browse/MC-278204) - Blaze fireballs now cause TNT minecarts to explode instantly
- [MC-278249](https://bugs.mojang.com/browse/MC-278249) - Experience orb positions desync severely and abruptly correct themselves
- [MC-278375](https://bugs.mojang.com/browse/MC-278375) - Feeding wheat or hay bale to llama or trader llama with maximum Temper causes item stack to be desynced
- [MC-278376](https://bugs.mojang.com/browse/MC-278376) - Arrows and tridents act weirdly in one block deep bubble columns
- [MC-278422](https://bugs.mojang.com/browse/MC-278422) - Reloading the world after removing Owner tag from a sitting tamed wolf with /data remove makes the wolf moving and sitting at the same time
- [MC-278493](https://bugs.mojang.com/browse/MC-278493) - Tamed wolves which are angry at creakings remain angry when said creakings despawn
- [MC-278502](https://bugs.mojang.com/browse/MC-278502) - Weeping and twisting vines disconnect
- [MC-278552](https://bugs.mojang.com/browse/MC-278552) - minecraft:entity.player.big_fall no longer plays the sound when falling from great height
- [MC-278585](https://bugs.mojang.com/browse/MC-278585) - Players can get stuck when landing on the edge of powder snow
- [MC-278591](https://bugs.mojang.com/browse/MC-278591) - Ender dragon spawn egg is no longer given when using pick block on the ender dragon entity
- [MC-278615](https://bugs.mojang.com/browse/MC-278615) - Reinforcement zombified piglins are angry at you even if you killed the "caller" in one hit
- [MC-278621](https://bugs.mojang.com/browse/MC-278621) - Client/server desync when placing powder snow while landing in it
- [MC-278627](https://bugs.mojang.com/browse/MC-278627) - Players wearing leather boots will take fall damage when landing on the edge of powder snow
- [MC-278634](https://bugs.mojang.com/browse/MC-278634) - Trying to /setblock a 'waterlogged=true' state on (glow_lichen, resin_clump, sculk_vein, etc.) produces an error
- [MC-278659](https://bugs.mojang.com/browse/MC-278659) - Attacking a natural stationary creaking does not trigger sculk sensors
- [MC-278683](https://bugs.mojang.com/browse/MC-278683) - Mobs spawned from spawners or /summon never drop their equipment
- [MC-278708](https://bugs.mojang.com/browse/MC-278708) - Throwing ender pearls while mounted only dismounts you, without teleporting
- [MC-278728](https://bugs.mojang.com/browse/MC-278728) - smithing_transform recipes can't set an item's components back to default
- [MC-278733](https://bugs.mojang.com/browse/MC-278733) - Breaking a double resin brick slab block only returns a single slab
- [MC-278734](https://bugs.mojang.com/browse/MC-278734) - Sheep's heads stutter when they look up or down
- [MC-278755](https://bugs.mojang.com/browse/MC-278755) - Teleporting far away while riding an entity softlocks the game
- [MC-278801](https://bugs.mojang.com/browse/MC-278801) - The closed eyeblossom to gray dye recipe is not grouped with the other gray dye recipe
- [MC-278841](https://bugs.mojang.com/browse/MC-278841) - Powder snow no longer slows down the player falling from a high place
- [MC-279145](https://bugs.mojang.com/browse/MC-279145) - Shulker bullets are no longer affected by bubble columns
- [MC-279152](https://bugs.mojang.com/browse/MC-279152) - Shulker bullets can't teleport through nether or end portals, end gateways

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/d9bf4ff75df54a19c19cb4fbc37f020a734904e5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
