---
title: "Minecraft: Java Edition - Snapshot 23w04a"
date: 2023-01-24T16:07:15Z
updated: 2025-03-12T11:12:50Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/12514780107661-Minecraft-Java-Edition-Snapshot-23w04a
hash:
  trim-patterns-materials: trim-patterns--materials
---

Tuesday is the new Wednesday, did you know? Here is snapshot 23w04a with a new experimental Armor Trim Smithing feature in the Update_1_20 experimental pack.

Happy trimming!

# CHANGES

- Enchantment glint on items and armor is now more subtle

# EXPERIMENTAL FEATURES

- Added a new armor trimming system to visually customize your armor
- Added Smithing Template items
- Redesigned the Smithing Table
- Changed how Netherite equipment is crafted

## SMITHING TEMPLATES

- Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
- Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
- Smithing Templates define what type of upgrade you will be making to equipment
  - It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
  - There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
- Smithing Templates are consumed when used to upgrade an item in the Smithing Table
- You can craft a copy of a Smithing Template in the Crafting Table with 7 diamonds + 1 block of material that the template is made out of + 1 smithing template, which will output 2 of the same Smithing Template

## NETHERITE EQUIPMENT

- Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
- Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
- This change was made for a variety of reasons:
  - Increase the time players utilize Diamond equipment before Netherite
  - Make Netherite equipment a more significant achievement in the game's progression
  - Adapt Netherite more naturally into the new Smithing Table crafting system

## ARMOR TRIMS

- You can now visually customize your armor with a variety of unique trims at the Smithing Table
  - All armor is viable for trims except for leather armor
- Armor trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings and Boots
  - All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
  - To check which trim pattern a piece of armor has, you can hover over it in the inventory
- Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
  - Pillager Outpost
    - Sentry Armor Trim
  - Desert Pyramid
    - Dune Armor Trim
  - Shipwreck
    - Coast Armor Trim
  - Jungle Temple
    - Wild Armor Trim
  - Ocean Monument
    - Tide Armor Trim
  - Ancient City
    - Ward Armor Trim
  - Woodland Mansion
    - Vex Armor Trim
  - Nether Fortress
    - Rib Armor Trim
  - Bastion Remnant
    - Snout Armor Trim
  - Stronghold
    - Eye Armor Trim
  - End City
    - Spire Armor Trim
- Smithing Templates are found in chests in their respective structure, except for the Ocean Monument. Instead of finding it in chests, Elder Guardians sometimes drop a Smithing Template upon death
- Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
- An armor trim has two properties: a pattern and a material
  - The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
  - The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
- The viable ingredients you can use to define the color of your armor trim are the following:
  - Iron
  - Copper
  - Gold
  - Lapis
  - Emerald
  - Diamond
  - Netherite
  - Redstone
  - Amethyst
  - Quartz
- Armor cannot have the same material it is made of applied to it as a trim
  - For example, a Golden Chestplate cannot have a Golden Armor Trim

# TECHNICAL CHANGES

- Added a new type of atlas configuration source:paletted_permutations

- Armor Stands now preserve custom names when placed and broken

- A new registrytrim_patternhas been added for the armor trim system

- A new recipe serializersmithing_transformhas been added for the updated Netherite Upgrade recipe

- A new recipe serializersmithing_trimhas been added for the new Armor Trim recipe

- Smithing table has temporarily two menu types

  - Old menu without Smithing Template slot has been renamed tolegacy_smithing
    - Will be removed when Armor Trim feature stops being an experimental feature
  - New menu with Smithing Template slot was added calledsmithing

- Added new flag (value 128) toHideFlagsNBT field for hiding armor trim item tooltips

## PALETTED PERMUTATIONS

- paletted_permutationsis a new type of atlas configuration source used to dynamically generate new textures in memory based on a set of color palettes
- Color palettes allow you to swap out the colors of a texture without having to supply all files for the variants of a texture in a resource pack
- This is useful for things like armor trims, where you want to be able to change the color of parts of the armor without having to create a new texture for each color
- Thepaletted_permutationssource has a set of required parameters:
  - texturesA list of namespaced locations of base textures
    - These textures will be used to generate variants of them that have been modified by color palettes
  - palette_keyA namespaced location of a color palette key file
    - A color palette key is used to define the set of key pixel colors we want to swap out with the color palettes defined below
  - permutationsA map of permutations from suffix to a namespaced location of a color palette file
    - The suffix is appended at the beginning to the resource location of the output variant textures, with a\_character separating the suffix and the base texture name
    - The color palette is a texture file with a set of pixels that are used for replacing pixels that match the color palette key in each base texture
    - The number of pixels in each color palette must be the same as that of thepalette_keydefined for this source
    - Key matching is done by comparing the RGB values of each pixel in thepalette_keyto the RGB values of each pixel in the color palette
    - Alpha channel is ignored for key matching, but in the resulting texture the alpha channel is multiplied with the color palette's alpha channel
    - Pixels that do not match thepalette_keyare copied over to the resulting texture as-is
- After defining apaletted_permutationssource, you can then reference those namespaced output textures in other resources in your resource pack
  - For example, if you have the followingpaletted_permutationssource:

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

  - You can then reference the resulting textures in other resources like this:

        {
            "textures": {
                "layer0": "minecraft:item/leather_helmet_red",
                "layer1": "minecraft:item/leather_chestplate_green",
                "layer2": "minecraft:item/leather_boots_blue"
            }
        }

## TRIM PATTERNS & MATERIALS

- Trim patterns and materials for armor are defined by the server through thetrim_patternandtrim_materialregistry respectively
  - As a result, new trim patterns and materials can be added via data packs
- These are synchronized to clients when they join the server
  - However, clients must have an accompanying resource pack to see those registered trim patterns and materials
  - The paths to these textures are inferred based on the filename of the pattern json, and will try to find the textures within the same namespace as the trim pattern'snamefield
- The following data is defined by a trim pattern:
  - asset_idwhich is a namespaced id used to infer texture locations and localization
  - template_itemwhich is the id of the smithing template item used to apply the trim pattern
  - descriptionwhich is a text component used for displaying the pattern name of an armor trim when hovering an armor itemstack
- The following data is defined by a trim material:
  - asset_namewhich is a string used as a suffix for armor trim texture locations
  - ingredientwhich is the id of the ingredient item used to apply the trim material
  - item_model_indexwhich is a float which defines the item model override each armor item model should target to change their visuals for this material
  - incompatible_armor_materialwhich is an optional id of the armor material this trim material cannot be applied to
  - descriptionwhich is a text component used for displaying the material name of an armor trim when hovering an armor itemstack
    - The style defined in this description is applied to the armor trim patterndescriptionas well

## COMMANDS

- New relation available forexecute on:origin:
  - shooter, if the executing entity is a projectile (like arrow, fireball, trident, firework, thrown potion, etc.)
  - thrower, if the executing entity is an item
  - source of effect, if the executing entity is an area effect cloud
  - igniter, if the executing entity is a primed tnt
  - summoner, if the executing entity is evoker fangs or a vex

# FIXED BUGS IN 23W04A

- [MC-198809](https://bugs.mojang.com/browse/MC-198809)- Blast Protection does not reduce explosion knockback except at very high levels
- [MC-259189](https://bugs.mojang.com/browse/MC-259189)- "Narrator: Not Available" isn't grayed out on accessibility splash
- [MC-259204](https://bugs.mojang.com/browse/MC-259204)- All goat horns display as Ponder goat horns and play the Ponder instrument
- [MC-259211](https://bugs.mojang.com/browse/MC-259211)- You cannot select incompatible resource packs within the resource packs menu via keyboard navigation

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html)and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2f31a8584ec1e70abd2d8b22d976feb52a6a3e31/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
