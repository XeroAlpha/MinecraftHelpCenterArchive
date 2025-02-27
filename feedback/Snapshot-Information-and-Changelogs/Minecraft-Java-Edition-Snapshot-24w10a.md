---
title: Minecraft Java Edition - Snapshot 24w10a
date: 2025-02-27T13:21:18Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34596013878157-Minecraft-Java-Edition-Snapshot-24w10a
hash:
  h_01JN3S0NM5TM5BZN56741W0BYT: new-features
  h_01JN3S0NM570MPAZJ14EG7PAYH: wolf-variants
  h_01JN3S0NM5JDF6MCMD69S1ZDCA: changes
  h_01JN3S0NM506V8GD9FVZYATGRC: technical-changes
  h_01JN3S0NM511BEZ9T1PDM9851F: data-pack-version-34
  h_01JN3S0NM57CGE69G9TN56K7TQ: recipes
  h_01JN3S0NM5Z9DE0284K0V240J9: predicates
  h_01JN3S0NM5EWM83DBCM2AXX2WW: slotsentity-sub-predicate
  h_01JN3S0NM5V1B1RMZKZ44SM786: slot-names
  h_01JN3S0NM5A664Z7GT298TABFV: execute-ifunless-items
  h_01JN3S0NM5B2NFS7JSXDF48H8M: banner-patterns
  h_01JN3S0NM5HKQ14RNYAN4NT65A: item-stack-components
  h_01JN3S0NM6SKBJDGA0MY7DQP7Q: fixed-bugs-in-24w10a
  h_01JN3S0NM6CPH0H234QR122S27: get-the-snapshot
---

Woah, another snapshot day of the Wednesday variant! Today we are releasing 24w10a, featuring new Wolf Variants, some new Data Pack features, and lots of bug fixes.

Happy mining!

## New Features

- Added variants of Wolves

### Wolf variants

- New Wolf variants have been added
- The variant is determined by the biome they spawn in
  - Pale Wolf - The familiar Wolf variant that now spawns in the Taiga biome, with a default pack size of 4
  - Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common
  - Ashen Wolf - A variant that spawns in the Snowy Taiga biome
  - Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2 to 4
  - Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2 to 4
  - Rusty Wolf - A variant that spawns in a new location for wolves - the Sparse Jungle biome, in smaller packs of 2 to 4
  - Spotted Wolf - A variant that spawns in a new location for wolves - the Savanna Plateau biome, in larger packs of 4 to 8
  - Striped Wolf - A variant that spawns in a new location for wolves, the Wooded Badlands biome, in larger packs of 4 to 8
  - Snowy Wolf - A variant that spawns in the Grove biome. A rare type, that always walks alone
- Adjusted spawning conditions for Wolves, allowing them to spawn on Coarse Dirt and Podzol blocks

## Changes

- Adjusted passive mobs spawning in Grove biome to only include Rabbits, Foxes and Wolves
- Button tooltips will no longer appear when hovering outside the containing element

## Technical Changes

- The Data Pack version is now 34

## Data Pack Version 34

- Recipe results can now specify component data
- Added new entity predicate field slots, for matching item slots
- Added slot names for ranges, like container.\*
- Added execute if\|unless items to check and count items
- Banner Patterns are now data-driven
- Changes to Item Stack Component formats
- Player Head blocks now store a custom_name tag, which will be copied to and from the item form when broken or placed
- The SkullOwner and ExtraType fields in Player Head blocks have been replaced with a profile field, with the same format as the item component
- For now, the count field on Item Stacks is always stored again, even if 1
  - If the field is missing in data, will still fall back to 1

### Recipes

- Recipe types crafting_shaped, crafting_shapeless, stonecutting and smithing_transform now accept components for the result item stack
- The result field for recipe types smelting, blasting, smoking and campfire_cooking is now an item stack format without a count, which means you'll need to specify an object with an id field
  - This result now also accepts components data

### Predicates

#### slots entity sub-predicate

- New entity field slots allows to check single or multiple slots on any entity
- The field contains a map of slot names (same as ones used in item commands) to item predicate
- For slot ranges, only one slot needs to match for whole entry to pass

Example:

    {
        "condition": "minecraft:entity_properties",
        "entity": "this",
        "predicate": {
            "slots": {
                "container.*": {
                    "items": "dirt"
                }
            }
        }
    }

### Slot names

- Slot names (used in item commands and slots entity predicates) now include slot ranges
- Unless specified, existing commands can still only work on single slots
- New slot names:
  - container.\* - contains container.0 to container.53
  - hotbar.\* - contains hotbar.0 to hotbar.8
  - inventory.\* - contains inventory.0 to inventory.26
  - enderchest.\* - contains enderchest.0 to enderchest.26
  - villager.\* - contains villager.0 to villager.7
  - horse.\* - contains horse.0 to horse.14
  - weapon.\* - contains weapon.mainhand and weapon.offhand
  - armor.\* - contains armor.head, armor.chest, armor.legs, armor.feed, armor.body
  - player.cursor - item held by player on screen
    - Note: this information is not available in creative mode
  - player.crafting.0 - player.crafting.3, player.crafting.\* - player's crafting slots
    - Note: this includes only player's inventory crafting slots. Crafting table (or any other slots on other screens) are not included

#### execute if\|unless items

- execute if\|unless items \<source\> \<slots\> \<item_predicate\> command can be used to count items
  - \<source\> is the same as one used in item command, i.e.
    - block \<x\> \<y\> \<z\>
    - entity \<target\> (selector can return multiple entities)
  - \<slots\> can accept single slot (like container.0) or a range (like container.\*)
  - \<item_predicate\> is the same as item predicate in clear command
- If used alone, it will return total number of items in stacks that match predicates

### Banner Patterns

- Banner Patterns will now be loaded into a dynamic registry from data packs (data/\<namespace\>/banner_pattern/\<id\>)
  - These entries have two fields:
    - asset_id (namespaced string) is used to resolve texture locations
      - e.g. custom:pattern resolves to assets/custom/textures/entity/banner/pattern.png, assets/custom/textures/entity/shield/pattern.png
    - translation_key (string) is a translation key prefix
      - e.g. block.minecraft.banner.custom.pattern resolves to block.minecraft.banner.custom.pattern.\<dye color\>

### Item Stack Components

- The minecraft:profile component no longer requires the name field to be present
- Some additional Item Stack Components now support alternative, simple definitions:
  - minecraft:profile can be defined as string player name (e.g. profile="jeb\_")
  - minecraft:dyed_color can be defined as an integer rgb color (e.g. dyed_color=16711680)
  - minecraft:attribute_modifiers can be defined as a direct list of modifiers (e.g. attribute_modifiers=\[{type:'generic.scale',uuid:\[1,2,3,4\],name:'Big!',amount:1.0,operation:'add_multiplied_base'}\])
  - minecraft:potion_contents can be defined as a single potion id (e.g. potion_contents="invisibility")
  - minecraft:enchantments and minecraft:stored_enchantments can be defined as an inline map of enchantment id to level (e.g. enchantments={sharpness:1})
  - These are only an alternative for defining the values, they will always be stored in their full formats
- All container blocks now use the minecraft:container component when in item form, not just Shulker Boxes
- The minecraft:lodestone_target component has been renamed to minecraft:lodestone_tracker
  - The pos and dimension fields have been moved into a target object
  - The target field is optional, and if not present, the compass will spin
- The maximum number of lore and fireworks entries has been raised to 256

## Fixed bugs in 24w10a

- [MC-140397](https://bugs.mojang.com/browse/MC-140397) - When combining two enchanted unbreakable items, the result will be two stacked items
- [MC-157133](https://bugs.mojang.com/browse/MC-157133) - Enchanted books with curses can be stacked using a grindstone
- [MC-174496](https://bugs.mojang.com/browse/MC-174496) - Player heads lose their name after being placed
- [MC-217084](https://bugs.mojang.com/browse/MC-217084) - Player head NBT "ExtraType" is no longer saved but doesn't use DataFixerUpper upgrade path
- [MC-268392](https://bugs.mojang.com/browse/MC-268392) - Setting gravity attribute to 0.0 kicks player for flying
- [MC-268462](https://bugs.mojang.com/browse/MC-268462) - Saturation suspicious stew now grants 7 seconds of effect instead of 7 ticks
- [MC-268800](https://bugs.mojang.com/browse/MC-268800) - All tools have 4 attack damage, and 1.6 attack speed
- [MC-268801](https://bugs.mojang.com/browse/MC-268801) - Shulker boxes in saved hotbars inconsistently update to item components
- [MC-268813](https://bugs.mojang.com/browse/MC-268813) - Crash when spawning item with can_break/can_place_on component containing unknown/invalid tag
- [MC-268824](https://bugs.mojang.com/browse/MC-268824) - Disenchanted books from grindstone don't stack with books that were in the inventory
- [MC-268830](https://bugs.mojang.com/browse/MC-268830) - Effect Particles appear when specifying no particles using /effect command
- [MC-268834](https://bugs.mojang.com/browse/MC-268834) - Vault texture is inconsistent
- [MC-268842](https://bugs.mojang.com/browse/MC-268842) - Crash when saving world with painting
- [MC-268845](https://bugs.mojang.com/browse/MC-268845) - Items with can_break/can_place_on components update every time the inventory is changed in creative mode
- [MC-268850](https://bugs.mojang.com/browse/MC-268850) - Attribute Modifier: Not updated when switching items in hotbar
- [MC-268851](https://bugs.mojang.com/browse/MC-268851) - Crossbows don't make a firing sound
- [MC-268853](https://bugs.mojang.com/browse/MC-268853) - Unable to load paintings for any variants
- [MC-268856](https://bugs.mojang.com/browse/MC-268856) - Loading shulker box/bundle with a single 'invalid' item in it renders the whole component invalid
- [MC-268864](https://bugs.mojang.com/browse/MC-268864) - An item modifier with a duplicate item stack component prevents the entire data pack from (re)loading, rather than ignoring that one specific item modifier
- [MC-268877](https://bugs.mojang.com/browse/MC-268877) - Beehives/bee nests in inventory lose honey level after converting to 24w09a
- [MC-268879](https://bugs.mojang.com/browse/MC-268879) - Having a high damage value breaks and crashes the game
- [MC-268897](https://bugs.mojang.com/browse/MC-268897) - Cannot select entities who have any itemstack with the count being 1.
- [MC-268904](https://bugs.mojang.com/browse/MC-268904) - Suspicious stew not giving effects
- [MC-268921](https://bugs.mojang.com/browse/MC-268921) - Arrows lose particles after unloading world
- [MC-268971](https://bugs.mojang.com/browse/MC-268971) - Lodestone compass stops being a lodestone compass after breaking its tracked lodestone
- [MC-269005](https://bugs.mojang.com/browse/MC-269005) - Player heads from previous versions cause game crash and/or are converted incorrectly
- [MC-269062](https://bugs.mojang.com/browse/MC-269062) - Bundles with "Bundle Contents" component removed return after right clicking
- [MC-269066](https://bugs.mojang.com/browse/MC-269066) - Item modifier cannot remove custom_name
- [MC-269091](https://bugs.mojang.com/browse/MC-269091) - AttributeModifiers NBT with missing fields is not upgraded correctly to components

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/9f8e96ebe4db0323653111b28df63f66395cb19d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
