---
title: Minecraft Java Edition - Snapshot 24w38a
date: 2024-09-18T16:38:25Z
updated: 2024-09-18T16:38:30Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30362841904269-Minecraft-Java-Edition-Snapshot-24w38a
hash:
  h_01J82ZSBR7Q0Q7YVPQT6GDZ79Q: experimental-features
  h_01J82ZSBR7BN0R7VZ3HHZVXT9Z: bundles
  h_01J82ZSBR7W9AA6QS0XFZ5SERV: changes
  h_01J82ZSBR7C4TPRWND755WVF51: realms
  h_01J82ZSBR76SZFJY7B6EMJ0HDN: hardcore-mode
  h_01J82ZSBR7KN26YZ4VP59YDFC4: technical-changes
  h_01J82ZSBR7G6MNB92FCXGS9WVK: data-pack-versions-54
  h_01J82ZSBR70Q729V3ZS3HRCBTN: new-item-component
  h_01J82ZSBR713HAWJWR83CWHXK1: crafting_transmuterecipe-type
  h_01J82ZSBR7KFPPBAGPVEWW1ZC6: resource-pack-versions-39
  h_01J82ZSBR7D3KR7F80ZGNSCEBQ: fixed-bugs-in-24w38a
  h_01J82ZSBR8VV3BKD44SZSTX3PN: get-the-snapshot
---

Hey! This snapshot brings you dyable Bundles in the Bundles experiment and fully-featured world creation for Realms, including Hardcore mode.

Happy dyeing!  
  

## Experimental Features

### Bundles

- The Bundle can be dyed 16 different colors using Dyes

## Changes

- Shulker Box coloring recipes are now shown in the recipe book
- Updated the world creation screen for Realms
- Enabled hardcore mode for Realms
- Throwing items out of your inventory very quickly in creative mode is now throttled

### Realms

- Now uses the normal, fully featured world creation screen
  - Enables game rule customization
  - Enables datapack customization

#### Hardcore mode

Hardcore mode is now available in Realms and is accessible by creating a new world or recreating an existing one

 

## Technical Changes

- The Data Pack version is now 54
- Resource Pack version is now 39
- Temporary option for ignoring connection errors on client side (strictErrorHandling) has been removed

## Data Pack Versions 54

- Introduced new Item tag bundles which includes all Bundle Items

### New Item Component

#### crafting_transmute recipe type

- New crafting recipe type has been introduced: crafting_transmute
- When matched, output will copy the input item stack, changing the item type but preserving all stack components
- This completely replaces crafting_special_shulkerboxcoloring
- Fields:
  - category - crafting book category, one of building, redstone, equipment, misc
  - group - optional string
  - input - ingredient for item to copy
  - material - additional ingredient to use
  - result - item type to use for output

## Resource Pack Versions 39

- Bundle models and textures have 16 colored variants
- The models and UV mapping related to the Torch and blocks containing Redstone Torch have been updated
  - The "inverted" model now uses 6 separate faces creating the same effect as a model with a negative size
  - Updated the UV layout for the inverted model

## Fixed bugs in 24w38a

- [MC-13246](https://bugs.mojang.com/browse/MC-13246) - On certain enchanted items, the Anvil will display a "too expensive" message before attempting to repair, combine, or rename them
- [MC-134626](https://bugs.mojang.com/browse/MC-134626) - Squids/glow squids bounce up and down in bubble columns, teleporting high up in the air
- [MC-164258](https://bugs.mojang.com/browse/MC-164258) - Recipe book search field is not selected when clicking on the search icon
- [MC-169660](https://bugs.mojang.com/browse/MC-169660) - /teleport without can change the entity's rotation
- [MC-204050](https://bugs.mojang.com/browse/MC-204050) - Subtitle for shooting amethyst blocks is "Block breaking"
- [MC-216016](https://bugs.mojang.com/browse/MC-216016) - Launching fireworks into a crystal sound block will make the breaking noise
- [MC-225060](https://bugs.mojang.com/browse/MC-225060) - Burning entity sound repeats every tick
- [MC-228070](https://bugs.mojang.com/browse/MC-228070) - Name tags rendered in blocks have letters brighter depending on your angle
- [MC-275347](https://bugs.mojang.com/browse/MC-275347) - Minecart with Furnace does not travel correctly over curves
- [MC-275413](https://bugs.mojang.com/browse/MC-275413) - Squids and glow squids are not affected by the thrust of the bubble column
- [MC-276292](https://bugs.mojang.com/browse/MC-276292) - Shift-clicking the "Destroy Item" slot in the creative inventory deletes the items server-side but not client-side, causing a desync
- [MC-276372](https://bugs.mojang.com/browse/MC-276372) - Player drops 2 items from the hotbar at once when the Survival Inventory tab is not selected
- [MC-276373](https://bugs.mojang.com/browse/MC-276373) - Items dropped from the hotbar are sometimes lost when the Survival Inventory tab is not selected
- [MC-276428](https://bugs.mojang.com/browse/MC-276428) - Player cannot drink honey bottles when they're not hungry
- [MC-276459](https://bugs.mojang.com/browse/MC-276459) - Item display rotation wrapping does not interpolate cleanly
- [MC-276539](https://bugs.mojang.com/browse/MC-276539) - Name tags and text displays render brighter in dark areas when behind blocks or entities
- [MC-276573](https://bugs.mojang.com/browse/MC-276573) - Spruce boat item translation key misspells "minecaft"
- [MC-276603](https://bugs.mojang.com/browse/MC-276603) - No High Norwegian language option
- [MC-276621](https://bugs.mojang.com/browse/MC-276621) - Game crashes when opening inventory that renders entity with both Invisibility and Glowing effects
- [MC-276640](https://bugs.mojang.com/browse/MC-276640) - Riding an entity constantly teleported with relative coordinates produces jittery camera movement
- [MC-276704](https://bugs.mojang.com/browse/MC-276704) - Not using a selector in a tp command breaks rotation from a completely different tp command
- [MC-276722](https://bugs.mojang.com/browse/MC-276722) - Teleporting to your current position every tick sometimes doesn't let you move properly

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/b87bfc3763d88a1364b8ac30fe6f2ac3550948f8/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
