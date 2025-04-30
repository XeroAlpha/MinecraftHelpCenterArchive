---
title: Minecraft Java Edition - Snapshot 25w18a
date: 2025-04-30T07:56:12Z
updated: 2025-04-30T07:56:15Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/36234996347661-Minecraft-Java-Edition-Snapshot-25w18a
hash:
  h_01JT2V2D9XZ8BGS7E1S43EJ7Q9: changes
  h_01JT2V2D9X7XSKSBV31XQZXXSR: splash-potions
  h_01JT2V2D9XY189SCVXR616GJ2R: technical-changes
  h_01JT2V2D9X29QPDJEXB7DAX7N0: data-pack-version-75
  h_01JT2V2D9X2ZEMGPDHEX4P81KW: entity-data
  h_01JT2V2D9XNB1ZJR88B3771CKQ: entity-tags
  h_01JT2V2D9XB9JXMACG3D2R1MG9: resource-pack-version-59
  h_01JT2V2D9X7FQHE7V1B11SHAHR: ui-sprites
  h_01JT2V2D9XC53VDGQ0557Q5V9G: font
  h_01JT2V2D9XSHQ5PJ3R3FX57HQ8: unifont
  h_01JT2V2D9X9F2P28456XFHQ8CD: unihexfont-provider
  h_01JT2V2D9XM89VM62VTW8KZVMD: fixed-bugs-in-25w18a
  h_01JT2V2D9XRT3D3C89Z04J33ZS: get-the-snapshot
---

Leads have become a hot commodity in the recent snapshots and this week they are getting an updated recipe, making it much easier to craft leads for all your leashing needs. The dried ghast is also getting a new recipe, based on soul sand and ghast tears. We have updated Unifont to 16.0.03 and this time we included glyphs from Unifont's Private Use Areas. That means creators will now be able to use scripts in the Under-ConScript Unicode Registry like Tengwar or Sitelen Pona.

## Changes

- Splash Potions effect strength is now based on the distance of the hitboxes
- The Slime Ball in the Lead recipe has been replaced with a String
- Piglins can now give Dried Ghast Blocks when bartered with
- The recipe for the Dried Ghast Block has been updated to now require a Soul Sand Block rather than a Bone Block

### Splash Potions

- Splash Potions distance to affected entities now depends on the closest distance between the entity hitbox and the splash potion hitbox where it landed
  - This means that if an entity is hit directly by the splash potion, it will receive the full effect of the potion
  - If the entities are grouped together, they will receive the same effect strength

## Technical Changes

- The Data Pack version is now 75
- The Resource Pack version is now 59
- All JSON files (in worlds, packs, configuration, etc.) are now parsed in strict mode

## Data Pack Version 75

### Entity Data

- Added home_pos and home_radius fields to all mobs
  - Mobs with set home position will limit their pathfinding to stay within the indicated area
  - Some mobs, like Bats, Slimes, Magma Cubes, Phantoms and Ender Dragons may ignore it
  - Interacting with leashes or riding may change the home position of the mob

#### Entity Tags

- Updated \#followable_friendly_mobs to include the Happy Ghast

## Resource Pack Version 59

- Updated Unifont to 16.0.03

### UI Sprites

- The hud/locator_bar_arrow_up and hud/locator_bar_arrow_down sprites are now animated with a standard animation definition in the corresponding .mcmeta files

### Font

#### Unifont

- Updated Unifont to 16.0.03
- Added previously omitted Unifont glyphs for Private Use Areas
  - Those glyphs are loaded as a separate sub-font minecraft:include/unifont_pua and are not included in any normally used font
  - Characters in those areas are managed by Under-CSUR (Under-ConScript Unicode Registry), which adds various scripts not present in official Unicode set, like Tengwar or Sitelen Pona

#### unihex Font Provider

- Field size_overrides is now optional (defaults to empty list)

## Fixed bugs in 25w18a

- [MC-200925](https://bugs.mojang.com/browse/MC-200925) - Ghasts are not affected by potions thrown on their head
- [MC-262268](https://bugs.mojang.com/browse/MC-262268) - Keyboard navigation does not work in the book and quill GUI
- [MC-264431](https://bugs.mojang.com/browse/MC-264431) - \#minecraft:sand tag has two minecraft:suspicious_sand
- [MC-278459](https://bugs.mojang.com/browse/MC-278459) - unifont.json contains trailing comma
- [MC-279284](https://bugs.mojang.com/browse/MC-279284) - Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks
- [MC-279875](https://bugs.mojang.com/browse/MC-279875) - Cannot diagonally climb slab through suspended scaffolding
- [MC-280281](https://bugs.mojang.com/browse/MC-280281) - Fishing bobbers rapidly jitter when attached to entities that are moving
- [MC-280502](https://bugs.mojang.com/browse/MC-280502) - Translation key snbt.parser.undescore_not_allowed has a typo
- [MC-295879](https://bugs.mojang.com/browse/MC-295879) - Sprint-hitting boats and then getting in them causes the boat to fall through the block underneath
- [MC-295914](https://bugs.mojang.com/browse/MC-295914) - Loot table files accept invalid JSON
- [MC-296354](https://bugs.mojang.com/browse/MC-296354) - Happy ghasts aren’t affected by potions thrown on their heads
- [MC-296784](https://bugs.mojang.com/browse/MC-296784) - The "Welcome to Minecraft" screen is missing its fade out
- [MC-296866](https://bugs.mojang.com/browse/MC-296866) - Predicates of particular namespaces failed to be accessed on /execute
- [MC-296898](https://bugs.mojang.com/browse/MC-296898) - Happy ghasts' home slightly drift over time
- [MC-297112](https://bugs.mojang.com/browse/MC-297112) - You cannot use CTRL+NUM to navigate to tabs within the configure realms menu
- [MC-297114](https://bugs.mojang.com/browse/MC-297114) - The realms menu incorrectly claims that realms are expiring soon
- [MC-297115](https://bugs.mojang.com/browse/MC-297115) - The “This is a Snapshot Realm…” box no longer renders with a black background
- [MC-297184](https://bugs.mojang.com/browse/MC-297184) - 'Realms' is lowercase in mco.errorMessage.realmsService.configurationError.

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/e69d69f1817f6c52f6ad2ca73ee1ef8a6903e560/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
