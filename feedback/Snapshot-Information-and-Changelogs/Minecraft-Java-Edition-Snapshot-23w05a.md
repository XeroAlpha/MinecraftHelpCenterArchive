---
title: "Minecraft: Java Edition - Snapshot 23w05a"
date: 2023-02-01T15:56:46Z
updated: 2025-03-12T11:12:50Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/12744145957901-Minecraft-Java-Edition-Snapshot-23w05a
hash:
  trim-patterns-materials: trim-patterns--materials
---

In this snapshot we've tweaked the armor trim feature and redefined the Create New World user experience flow.

Happy world creating!

# CHANGES

- Updated the Create New World screen
- Interacting with armor or elytra items in-hand will now swap them with equipped gear
- The enchantment glint has been further tweaked to be slower and less visible, but also have more contrast in some intervals

## ACCESSIBILITY

- Changed how tooltips in the menu UI are positioned so buttons are still readable
- Added two new options in the Accessibility menu for adjusting the speed and transparency of enchantment glints

## UPDATED CREATE NEW WORLD SCREEN

- The screen is now organized into three tabs
  - The Game-Tab allows to set the world name, Gamemode, Difficultly and whether to allow cheats
  - The World-Tab allows to set the World-Type and Seed, and to toggle the generation of structures and the bonus chest
  - The More-Tab provides access to the Game Rules and DataPack Selection Screen
- Removed the Import Settings button and the corresponding Export Settings button in the Edit World Screen

# TECHNICAL CHANGES

## TRIM PATTERNS & MATERIALS

- The following data is now also defined by a trim material:
  - override_armor_materialswhich is an optional map of armor material to overriden color palette
    - Map key is the armor material that this trim material wants to override with a different color palette
    - Map value is the name of the color palette that will be used when this trim material is applied to an armor piece with the corresponding armor material
- The following data is no longer defined by a trim material:
  - incompatible_armor_material

## COMMANDS

### EFFECT

- infiniteis now a valid option for effect durations
  - Infinite effect durations show up as "∞" in the player inventory view

# EXPERIMENTAL FEATURES

- Armor trims can now be applied to leather armor
- Armor can now have trims of the same material it is made out of
  - For example, a Golden Chestplate with a Golden Armor Trim is now possible
- The texture of the Dune armor trim has been tweaked so that the symbol on the chestplate is moved up a few pixels
- Loot tables for smithing templates have been adjusted

## LOOT TABLES FOR SMITHING TEMPLATES

- The following common armor trims now always generate 2 templates in a chest when found:
  - Dune
  - Coast
  - Wild
  - Sentry
- This is to give new players a chance to understand that smithing templates are consumed when used
- Netherite Upgrade smithing templates have been made twice as common
  - While we do want Netherite upgrading to be more challenging, we felt the previous rates did not encourage further exploration after finding the first Netherite Upgrade template
- 1 Eye Armor Trim is now guaranteed in every Stronghold library chest
  - This is so even in the most unlucky worlds, this armor trim can still be found
- Woodland Mansions now have a greatly increased chance of generating the Vex Armor Trim smithing template
  - Woodland Mansions already have very few chests that utilize loot tables - in unlucky generations, none at all. It was too rare to find one of these trims, and we want the challenge of getting the Vex Armor Trim to be more about finding a Woodland Mansion to begin with
- Across the board, smithing templates have been made slightly more common
  - Due to the method of crafting copies of templates, we want the process of discovering another template in a structure to feel like the player has just saved 7 diamonds. If the templates are too rare, this situation does not happen as much, meaning players will not be encouraged to explore more structures

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html)and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/98cfa3f8f9aef61e1298c9cfd62f6eeaf8abe206/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
