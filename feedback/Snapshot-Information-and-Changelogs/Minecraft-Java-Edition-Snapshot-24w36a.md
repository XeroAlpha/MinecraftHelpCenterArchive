---
title: Minecraft Java Edition - Snapshot 24w36a
date: 2024-09-04T15:22:33Z
updated: 2024-09-04T15:22:38Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/29941004144525-Minecraft-Java-Edition-Snapshot-24w36a
hash:
  h_01J6YSY8S69PKWCVJSWH2MJQQK: known-issues
  h_01J6YSY8S6VTYDZ8M7CCTDDTQ7: experimental-features
  h_01J6YSY8S6BQTCA3E036ZEPADG: bundles
  h_01J6YSY8S6TPHW23EY4QGQVPSB: changes
  h_01J6YSY8S6ARG0CAPE8NSR2EY6: technical-changes
  h_01J6YSY8S68D0Z6FSCDBB4QN7E: data-pack-version-52
  h_01J6YSY8S6DKETB7WFXDXEZH1V: tags
  h_01J6YSY8S6FKT9RFNBG9ZACCBE: block-tags
  h_01J6YSY8S6SDGKXKDGB0TXWFB7: item-tags
  h_01J6YSY8S6H7TR8N2NY141KJ5S: changed-item-components
  h_01J6YSY8S6CT444218V83SBFEX: minecraftitem_name
  h_01J6YSY8S6RK45H8GM5WGR9ET1: new-item-components
  h_01J6YSY8S6BG23MS7Q3MBK17Q3: minecraftitem_model
  h_01J6YSY8S6MP31JKE6VV8PEQR7: minecraftequippable
  h_01J6YSY8S6GMB1VYG6REP2N70W: minecraftglider
  h_01J6YSY8S642M0X6K76CM93N47: minecrafttooltip_style
  h_01J6YSY8S6QF0C1GBFSEX0H669: predicates
  h_01J6YSY8S6BGRXJVQV4VZ4ZH7N: resource-pack-version-37
  h_01J6YSY8S7TM17VDVM1P2FGSH7: item-models
  h_01J6YSY8S73J5YQNFD4KK9HHYJ: custom-equipment-models
  h_01J6YSY8S74AHS0DZ1HRBDABHG: trims
  h_01J6YSY8S7VCC3CD9V5CT4NTBB: moved-textures
  h_01J6YSY8S8XNSHHAVWWX95P8G0: fixed-bugs-in-24w36a
  h_01J6YSY8S8ZKSMCMFBMR4Z1YCY: get-the-snapshot
---

Hi everyone! In the most exciting Minecraft-related news of the day, we have a new movi- I mean snapshot coming your way! This week we are adding support for custom equipment with Data Packs and Resource Packs. We have also tweaked the Bundle so that you can empty a group of items when it's used in the hotbar. And as usual, we have included a bunch of bug fixes!

Happy mining!

## Known Issues

- Ender Pearls will not teleport you to the right location

## Experimental Features

### Bundles

- When a Bundle is used in the hotbar, one group of items is emptied at a time instead of everything being emptied at once

## Changes

- Squid Spawn Eggs now only spawn adult Squids
  - There is a 5% chance of Squids spawned in groups in the wild to be a baby
- When a mob converts from one type to another (ex: Piglin to Zombified Piglin), the health of the converted mob is set to the same percentage of max health as the original mob had before conversion

## Technical Changes

- The Data Pack version is now 52
- Resource Pack version is now 37

## Data Pack Version 52

### Tags

#### Block Tags

- bats_spawnable_on: Blocks that bats can spawn on

#### Item Tags

- Added new tags to control which items can be used to repair various armor sets:
  - repairs_leather_armor
  - repairs_iron_armor
  - repairs_chain_armor
  - repairs_gold_armor
  - repairs_diamond_armor
  - repairs_netherite_armor
  - repairs_turtle_helmet
  - repairs_wolf_armor
- piglin_safe_armor: Items that, when worn by a player, will cause Piglins to not get angry

### Changed Item Components

#### minecraft:item_name

This component is now always present on every item

### New Item Components

#### minecraft:item_model

- Controls item model
- Present on every item
- Format: namespaced id
  - namespace:id will reference model /assets/\<namespace\>/models/item/\<id\>

#### minecraft:equippable

- If present, this item can be equipped by players in the selected slot
- When right-clicking with an item with this component, it will be swapped into the appropriate slot
- Format: object with fields
  - slot: one of head, chest, legs, feet, body, mainhand, or offhand
  - equip_sound (optional): Sound event to play when the item is equipped
    - If not specified, the default armor equip sound will be played
  - model (optional): namespaced ID of the equipment model to use when equipped
    - These model definitions are loaded from Resource Packs
    - If not specified, will fall back to rendering as the item itself when in the head slot (or no rendering if not applicable)
  - allowed_entities (optional): Entity ID, Entity Tag, or list of Entity IDs to limit which entities can equip this item
    - If not specified, any entity (that can wear this kind of equipment) is allowed to equip this item
  - dispensable: boolean (default: true), whether the item can be equipped by using a Dispenser
    - If the item type has special dispenser behavior, this will have no effect
  - e.g. equippable={slot:'chest',equip_sound:'item.armor.equip_chain'}

#### minecraft:glider

- If present, this item will allow players to glide (as with Elytra) when equipped
- Format: empty object
  - e.g. glider={}

#### minecraft:tooltip_style

- If present, this item can use custom sprites for its tooltip background and frame
- Format: namespaced ID for a tooltip style
  - A tooltip style of namespace:path will use sprites with IDs:
    - \<namespace\>:tooltip/\<path\>\_background and \<namespace\>:tooltip/\<path\>\_frame
  - e.g. tooltip_style='minecraft:special_sword'

### Predicates

- Added a new field in the Player sub-predicate, input, that can be used to detect which movement keys the player is pressing
- If specified the predicate matches with the corresponding keybind that the player is pressing; it supports detecting the following input:
  - forward : boolean (optional)
  - backward : boolean (optional)
  - left : boolean (optional)
  - right : boolean (optional)
  - jump : boolean (optional)
  - sneak : boolean (optional)
  - sprint : boolean (optional)

## Resource Pack Version 37

- Introduced equipment models
- Textures for entity equipment have been moved and renamed
- The tooltip background and frame may now be customized by replacing sprites:
  - tooltip/background: The background of the tooltip
  - tooltip/frame: The frame appearing around the tooltip
  - Items with a custom tooltip_style component will use sprites with IDs:
    - \<namespace\>:tooltip/\<path\>\_background and \<namespace\>:tooltip/\<path\>\_frame
- The nine_slice GUI sprite scaling mode has a new optional boolean property: stretch_inner
  - If true, the inner parts of the texture (i.e. not the corners) will be stretched instead of tiled
  - If not specified, defaults to false as before

### Item Models

- All item models can now use the broken property in model overrides that was previously limited to just Elytra
  - This will have a value of 1 if the item has 1 durability left, or 0 otherwise

### Custom Equipment Models

The appearance of equipment when equipped by players or certain mobs can now be customized by defining 'equipment models' in the Resource Pack.

- Equipment model definitions are loaded from assets/\<namespace\>/models/equipment/\<path\>.json
  - These can then be referenced by the equippable component with a model id of namespace:path
- The model definition is an object with fields: wolf_body, horse_body, llama_body, humanoid, humanoid_leggings, wings
  - All fields are optional, and can be used to specify a list of layers for the given model layer type
  - Each field contains list of layer objects:
    - texture: namespaced texture location for this layer
      - namespace:path will resolve to assets/\<namespace\>/textures/entity/equipment/\<layer_type\>/\<path\>.png
    - dyeable: object with fields (optional), specifying how this layer behaves when dyed (in the dyeable item tag, and has dyed_color component)
      - color_when_undyed: rgb color int (optional)
      - If specified, this layer will be tinted by the color contained in the dyed_color component
        - If the item is not dyeable or not dyed, it will be tinted based on the color specified by color_when_undyed
        - If color_when_undyed is not specified and the item is not dyed, the layer will be hidden
    - use_player_texture: boolean (default: false), true if this layer texture should be overridden by a texture given by the player
      - Only used for wings layers, which will override with the player's custom Elytra texture

A model definition specifying both player and horse armor layers might look like:

    {
      "layers": {
        "horse_body": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid": [
          { "texture": "minecraft:iron" }
        ],
        "humanoid_leggings": [
          { "texture": "minecraft:iron" }
        ]
      }
    }

### Trims

- All equippable items with an equipment model defined support rendering trims, based on the trim component
- Trim textures will be loaded from the appropriate folder in the textures/trims/entity directory
  - For example, armor with wolf_body layers will fetch trims from textures/trims/entity/wolf_body

### Moved Textures

- All equipment-related textures have been moved to subfolders of the textures/entity/equipment directory
  - Player armor textures have been moved to textures/entity/equipment/humanoid and textures/entity/equipment/humanoid_leggings
    - \<material\>\_layer_1 textures have been renamed to \<material\>, and moved into the humanoid subdirectory
    - \<material\>\_layer_2 textures have been renamed to \<material\>, and moved into the humanoid_leggings subdirectory
    - leather_layer_1_overlay and leather_layer_2_overlay textures have been renamed to leather_overlay in their respective subdirectories
  - wolf_armor and wolf_armor_overlay textures have moved to textures/entity/equipment/wolf_body/ and have been renamed to armadillo_scute and armadillo_scute_overlay respectively
  - turtle_layer_1 has been renamed to turtle_scute
  - Llama decor textures have been moved to textures/entity/equipment/llama_body
  - Horse armor textures have been moved to textures/entity/equipment/horse_body
  - The Elytra texture has been moved to textures/entity/equipment/wings/elytra
- Armor trim textures have also been moved to match the folder structure of the regular equipment textures
  - Textures in textures/trims/models/armor have been divided between textures/trims/entity/humanoid and textures/trims/entity/humanoid_leggings
  - For leggings textures, the \_leggings suffix is dropped

## Fixed bugs in 24w36a

- [MC-16829](https://bugs.mojang.com/browse/MC-16829) - The horse armor model does not show the enchantment glint effect
- [MC-38022](https://bugs.mojang.com/browse/MC-38022) - Order of rendering translucent block faces fails to update with camera position
- [MC-88967](https://bugs.mojang.com/browse/MC-88967) - Most NBT tags are not kept when a mob converts to another mob
- [MC-92875](https://bugs.mojang.com/browse/MC-92875) - Collisionless blocks ignore entities with high velocity
- [MC-135898](https://bugs.mojang.com/browse/MC-135898) - Teams are not retained when a mob converts to another mob
- [MC-196556](https://bugs.mojang.com/browse/MC-196556) - When projectiles (such as arrows and tridents) move too fast, they can't be teleported by portals and end gateways
- [MC-196964](https://bugs.mojang.com/browse/MC-196964) - Fall damage is reset when an entity converts to another entity
- [MC-230317](https://bugs.mojang.com/browse/MC-230317) - Lead disappears when mooshroom cow is sheared
- [MC-250924](https://bugs.mojang.com/browse/MC-250924) - Goat horns are missing sounds
- [MC-259936](https://bugs.mojang.com/browse/MC-259936) - Equipping armor in hand via right-click equips entire stack
- [MC-261666](https://bugs.mojang.com/browse/MC-261666) - Armor given to Villagers is lost when they convert to Zombie Villagers
- [MC-270842](https://bugs.mojang.com/browse/MC-270842) - Scores are not kept when a mob converts to another mob
- [MC-271826](https://bugs.mojang.com/browse/MC-271826) - Armor default attribute modifier component can't be removed
- [MC-275011](https://bugs.mojang.com/browse/MC-275011) - Instant mine does not work when standing inside of cobwebs
- [MC-275228](https://bugs.mojang.com/browse/MC-275228) - You can duplicate items in your creative hotbar
- [MC-275239](https://bugs.mojang.com/browse/MC-275239) - Item duplication while a screen is opened (Creative Mode)
- [MC-275298](https://bugs.mojang.com/browse/MC-275298) - Blocks with special collision behavior have a larger detection range than previously
- [MC-275299](https://bugs.mojang.com/browse/MC-275299) - Crafting using Ctrl + Drop key crafts the incorrect amount of items
- [MC-275344](https://bugs.mojang.com/browse/MC-275344) - Sweet Berry Bushes deal damage inconsistently
- [MC-275345](https://bugs.mojang.com/browse/MC-275345) - Inventory bug that causes items to be constantly shuffled
- [MC-275416](https://bugs.mojang.com/browse/MC-275416) - Baby squid or baby glow squid produces ink particles that are too far away from itself
- [MC-275418](https://bugs.mojang.com/browse/MC-275418) - Feeding baby dolphins won't speed up their growth
- [MC-275437](https://bugs.mojang.com/browse/MC-275437) - Fast moving entities freeze the server which causes watchdog crash
- [MC-275445](https://bugs.mojang.com/browse/MC-275445) - Specifying the size of a target in post effect shaders fails
- [MC-275450](https://bugs.mojang.com/browse/MC-275450) - Player Motion data no longer updates while riding another entity
- [MC-275455](https://bugs.mojang.com/browse/MC-275455) - Player motion is no longer retained on relative teleportation
- [MC-275462](https://bugs.mojang.com/browse/MC-275462) - Bats can spawn in unusual places, such as in woodland mansions and beneath trees
- [MC-275497](https://bugs.mojang.com/browse/MC-275497) - The repairable data component does not exist in armor items by default
- [MC-275537](https://bugs.mojang.com/browse/MC-275537) - Sliding down honey blocks is slower than in previous versions
- [MC-275622](https://bugs.mojang.com/browse/MC-275622) - Minecarts with TNT are more volatile than in previous releases
- [MC-275624](https://bugs.mojang.com/browse/MC-275624) - Redstone wire with custom model unexpectedly appears green
- [MC-275638](https://bugs.mojang.com/browse/MC-275638) - It is still possible to go through portals without being teleported when going quickly enough by throwing riptide tridents
- [MC-275642](https://bugs.mojang.com/browse/MC-275642) - Baby dolphins do not spawn naturally
- [MC-275655](https://bugs.mojang.com/browse/MC-275655) - Entity rotation does not visually update when using the teleport command until the world is reloaded
- [MC-275745](https://bugs.mojang.com/browse/MC-275745) - A scoreboard objective with display mode below_name renders right behind the player's name
- [MC-275767](https://bugs.mojang.com/browse/MC-275767) - Camera is shaky when riding an entity that is being constantly teleported
- [MC-275770](https://bugs.mojang.com/browse/MC-275770) - Guardian beam attacks stay yellow and do not shift colors anymore
- [MC-276027](https://bugs.mojang.com/browse/MC-276027) - Chestplates and Boots on Armor Stands render the helmet overlay texture
- [MC-276030](https://bugs.mojang.com/browse/MC-276030) - The blue highlighted text background for signs is gone
- [MC-276064](https://bugs.mojang.com/browse/MC-276064) - Tall grass generated from bone mealing a grass block will delete the 2nd block above it
- [MC-276122](https://bugs.mojang.com/browse/MC-276122) - Soul sand and magma block bubble columns don't move the player vertically in creative mode when not flying
- [MC-276132](https://bugs.mojang.com/browse/MC-276132) - Translucency sorting seems to be slightly broken
- [MC-276179](https://bugs.mojang.com/browse/MC-276179) - Zombie villagers don't raise their arms to attack again
- [MC-276204](https://bugs.mojang.com/browse/MC-276204) - Dolphins and axolotls keep trying to swim into the seabed

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/30663a50aaf407751ae9e704758364ed9433206d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
