---
title: Minecraft Beta & Preview - 1.21.110.22
date: 2025-07-30T13:31:11Z
updated: 2025-07-30T15:48:03Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38434933991821-Minecraft-Beta-Preview-1-21-110-22
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-items: items
  user-content-copper-equipment: copper-equipment
  user-content-blocks: blocks
  user-content-shelf: shelf
  user-content-copper-chests: copper-chests
  user-content-copper-golem-statue: copper-golem-statue
  user-content-painting: painting
  user-content-mobs: mobs
  user-content-copper-golem: copper-golem
  user-content-enderman: enderman
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-commands: commands
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  h_01K1DR64GN3T7FT21CTV7BK0JH: gameplay-1
  user-content-item-components: item-components
  h_01K1DR64GNZP2RZPNZ36NE1TB6: items-1
  user-content-network-protocol: network-protocol
  user-content-character-creator: character-creator
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-biomes: biomes
---

**Posted:** 30 July 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

 

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/38434949376909" alt="r21u11_2_16x9.jpg" />
</figure>

 

It's time for another copper-y Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=features-and-bug-fixes)

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=items)

- Fixed position of Copper Golem spawn egg to be after the Iron Golem spawn egg
- Added Armor and Armor Toughness values to Armor tooltips ([MCPE-152962](https://bugs.mojang.com/browse/MCPE-152962))

### Copper Equipment[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=copper-equipment)

- Added Copper Horse Armor
  - Has the same loot table and chance of generating as Iron Horse Armor
  - Armor toughness: 4

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=blocks)

- Fixed issue with being unable to continue destroying valid blocks in Adventure Mode when they are behind water
- Hoppers and Droppers can now add or remove items to/from the Shelf
- Lightning Rods now oxidize like other Copper Blocks and the Lightning Rod on the Copper Golem

### Shelf[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=shelf)

- Shelves can now be waterlogged
- Shelf storage now affects Comparator's output signal depending on which slots are occupied ([MCPE-225226](https://bugs.mojang.com/browse/MCPE-225226))
  - Each Shelf slot corresponds to 1 bit
  - The signal strength is determined by converting the 3 bits of the slots into a decimal value
  - All slots empty \[000\] means a signal strength of 0
  - Only the first slot occupied \[100\] means a signal strength of 1
  - Only the second slot occupied \[010\] means a signal strength of 2
  - Only the third slot occupied \[001\] means a signal strength of 4
  - All slots occupied \[111\] means a signal strength of 7
  - Known issues:
    - Comparators currently only read shelves that are in specific orientations
    - Comparators cannot read shelves through blocks currently
- Fixed the Shelf place and take item sounds not playing
- Fixed the Shelf power on and off sounds not playing
- Non-solid blocks can no longer be placed on the top, bottom, front or sides of the Shelf
- Crimson and Warped Shelves are no longer flammable ([MCPE-225217](https://bugs.mojang.com/browse/MCPE-225217))
- Contents of Bundles no longer go missing after being placed on a Shelf ([MCPE-225441](https://bugs.mojang.com/browse/MCPE-225441 "https://bugs.mojang.com/browse/mcpe-225441"))
- Powered Shelves now connect even when they are made of different types of wood
- Crimson and Warped Shelves can no longer be used as smelting fuel ([MCPE-225315](https://bugs.mojang.com/browse/MCPE-225315))

### Copper Chests[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=copper-chests)

- Fixed Copper Chest containers being named Chest instead of Copper Chest ([MCPE-223744](https://bugs.mojang.com/browse/MCPE-223744))

### Copper Golem Statue[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=copper-golem-statue)

- Scraping and reviving an unoxidized Copper Golem Statue now damages the Axe
- Added Controller input hint text for using block to change pose

### Painting[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=painting)

- Fixed attempting to place a painting on a block that already has a painting spamming its place sound effect even though it cannot be placed

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=mobs)

### Copper Golem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=copper-golem)

- Fixed the Copper Golem taking fall damage unlike Iron or Snow Golems ([MCPE-223876](https://bugs.mojang.com/browse/MCPE/issues/MCPE-223876))

### Enderman[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=enderman)

- Fixed certain transparent blocks being opaque when held by an Enderman ([MCPE-223011](https://bugs.mojang.com/browse/MCPE/issues/MCPE-223011))

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=gameplay)

- Fixed a bug that caused the facing direction of Command Blocks to differ from all other blocks like Pistons and Dispensers when placed in certain coordinates in the world ([MCPE-62252](https://bugs.mojang.com/browse/MCPE-62252))
- Rider rotation lock now applies to cameras when using camera relative movement

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=general)

- Enabling blending for Legacy Chunks
  - This fixes an issue where blocks were missing from the terrain after loading into the world on some Starter Biomes

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=graphical)

- Colored text on signs no longer appear dark in Vibrant Visuals

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=realms)

- Fixed Realms crash in liquid sensing system

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=user-interface)

- Touch Controls: The Invert Y-Axis setting now works correctly for spectators ([MCPE-179110](https://bugs.mojang.com/browse/MCPE-179110))
- Touch Controls: The Swap Jump And Sneak option no longer changes the position of the swim/fly up buttons ([MCPE-184808](https://bugs.mojang.com/browse/MCPE-184808))
- Resized the "Textures & More" button icon to be in line with the other button icons

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=technical-updates)

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=ai-goals)

- Made the schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.21.110 and newer
  - `minecraft:behavior.roar`
  - `minecraft:behavior.slime_attack`
  - `minecraft:behavior.slime_float`
  - `minecraft:behavior.slime_keep_on_jumping`
  - `minecraft:behavior.slime_random_direction`
  - `minecraft:behavior.sniff`
  - `minecraft:behavior.sonic_boom`
  - `minecraft:behavior.stay_near_noteblock`
  - `minecraft:behavior.swim_idle`
  - `minecraft:behavior.swim_up_for_breath`
  - `minecraft:behavior.swim_wander`
  - `minecraft:behavior.swoop_attack`

## Commands[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=commands)

- Updated /locate biome to support underground biomes
  - Y axis is more accurate to exactly where the biome is

## Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=components)

- Updates to "minecraft:dash_action"
  - Added new field "direction" taking either "entity" or "passenger" as its value. Defaults to "entity"
    - "entity"
      - Behaves like before
    - "passenger"
      - Momentum applied from the dash action will now instead be applied in the view direction of the passenger entity, using the horizontal_momentum as forward momentum and vertical_momentum as upward momentum in the direction of the passenger. Short of it: looking up with horizontal momentum will launch you upwards.
    - Old schemas with format version older than 1.21.110 will automatically receive the "entity" direction

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=editor)

- Added weights to control points on the Line Tool to now linearly transition a Line's thickness from one point to the next
- Added a button on the Structure Panel to let you update an existing selected structure with one from the clipboard
- Added clear button for Vector3 input fields
- Added `IComboBoxPropertyItemEntry` API type for `IComboBoxPropertyItem` entries. Each entry now can support a localized label
- Added a progress modal when toggling vibrant visuals during the graphics mode change
- Updated expand/collapse indicator of drawer panels to be interactive for keyboard only navigation
- Fixed a bug that caused text field clear button to overlap with inner contents
- Fixed block inspector failing silently in unloaded areas
- Fixed the issue where entity type names were not localized for summon tool
- Fixed a bug that caused Export pane data to be incorrect when the reset button is pressed
- Fixed a bug that caused Farm tool settings to reset when another player joins

## Entity Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=entity-components)

- Changed the schema for the `minecraft:experience_reward` entity component so that the `on_bred` and `on_death` members no longer accept arrays; only single Molang expressions are now supported for each member

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=gameplay)

- From 1.21.110 onward, the free camera and fixed boom cameras use `Camera Relative Strafe` as default scheme

## Item Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=item-components)

- Repairing an item using the "minecraft:repairable" item component no longer fails when a stack larger than strictly needed is used as repair material
- Added the new "minecraft:fire_resistant" item component, which determines whether an item is immune to burning when dropped in fire or lava

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=items)

- "poly_mesh" is now documented as a deprecated feature
  - It was already treated as deprecated, but the documentation did not reflect this
- "texture_meshes" is no longer documented as an experimental feature
  - It was already treated as non-experimental, but the documentation did not reflect this

## Network Protocol[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=network-protocol)

- Modified the binary format of PlayerArmorDamagePacket

## Character Creator[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=character-creator)

- Fixed crash when wearing some Character Creator pieces that support custom colorization

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=experimental-technical-updates)

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30027/R21U11-2-Preview?anchor=biomes)

- Fix for custom biomes no longer appearing in game
