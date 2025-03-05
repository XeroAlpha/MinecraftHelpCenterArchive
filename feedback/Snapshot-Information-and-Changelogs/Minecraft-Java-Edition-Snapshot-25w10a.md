---
title: Minecraft Java Edition - Snapshot 25w10a
date: 2025-03-05T15:00:36Z
updated: 2025-03-05T15:02:13Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34748417697293-Minecraft-Java-Edition-Snapshot-25w10a
hash:
  h_01JNKD1SKZRX0MAC8WKZ0571KA: changes
  h_01JNKD1SKZR7CKWZ229NJVYRSQ: technical-changes
  h_01JNKD1SKZDQZ1GWW8Q0MTPWH2: data-pack-version-70
  h_01JNKD1SKZTPZ0KJVH6C9FH6H6: entity-data
  h_01JNKD1SKZFCF7HWC7YECCJWDC: entity-predicates
  h_01JNKD1SKZMAC3R45SAB613X9G: block-predicates
  h_01JNKD1SKZ28QVEMJRQ0VTA7A9: snbt-format
  h_01JNKD1SKZ6PWGMV1GTRHD6TPH: tntexplodesgame-rule
  h_01JNKD1SKZFVMPGV62QCP4WY6G: resource-pack-version-54
  h_01JNKD1SKZDSED65D3SMS9HJ73: fixed-bugs-in-25w10a
  h_01JNKD1SKZEHGWCM1C20YPMV8A: get-the-snapshot
---

It's time for a new Minecraft snapshot! We've got some more under-the-hood updates including a tntExplodes game rule previously found in Bedrock edition, new features in SNBT syntax, and allowing all entities to store custom data. We also have some more bug fixes coming your way.

You can now also enjoy a new main menu background, happy mining!

## Changes

- The Sheep wool texture has been tweaked to remove the stark line at the back
- Blocks that are broken by a Piston now play their breaking sound
- Updated the menu panorama for the first Game Drop of the year
- The textures of Test Blocks and Test Instance Blocks have been updated
- Cactus Flowers can now be placed on Farmland

## Technical Changes

- The Data Pack version is now 70
- The Resource Pack version is now 54

## Data Pack Version 70

- All entities can now store custom data
- Unified format and functionality of predicates for components on Entities and Block Entities
- New operations for SNBT
- Added new tntExplodes Game Rule
- Added \#flowers item tag - corresponding item tag for the already existing \#flowers block tag

### Entity Data

- Custom data (previously present only on Marker) is now available on all entities
  - It's exposed as a minecraft:custom_data component, so it can be set by spawning items and matched by predicates
  - The component is currently stored in a field called data, which will be changed in the future when more proper storage for entity components is introduced
  - It's stored only if it's non-empty

### Entity Predicates

- A new optional field has been added to entity predicates: predicates
  - Its functionality and format is identical to the field predicates on item predicates, but they operate on entity components
    - When present, predicates will match partial contents of entity components

### Block Predicates

- New optional fields have been added to block predicates: components and predicates
- Their functionality and format are identical to the fields components and predicates on item predicates, but they operate on block entity components (when present)
  - When present, components will match exact contents of block entity components
  - When present, predicates will match partial contents of block entity components

### SNBT Format

- To simplify input of data and macro use, SNBT now also supports following operations:
  - bool(arg) - converts argment to boolean
    - if argument is a boolean value, returns value directly
    - if argument is a number value, returns true if it is non-zero
  - uuid(str) - converts string representation of UUID to integer array
- Implicit infinite float values (like 1e1000) are now rejected

### tntExplodes Game Rule

- When false, TNT will not explode and cannot be primed
- Default value: true

## Resource Pack Version 54

- "Global" uniforms may now be defined in any shader, and the game will attempt to fill it
  - Currently, these are: ModelViewMat, ProjMat, TextureMat, ScreenSize, ColorModulator, Light0_Direction,  
    Light1_Direction, GlintAlpha, FogStart, FogEnd, FogColor, FogShape, LineWidth, GameTime, ModelOffset
  - The type of the uniform must match what it would normally be, or it'll be undefined behavior

## Fixed bugs in 25w10a

- [MC-269386](https://bugs.mojang.com/browse/MC-269386) - Flow Pottery Sherd is not in the correct spot in the creative inventory
- [MC-270043](https://bugs.mojang.com/browse/MC-270043) - Reduced armor glint applies to tridents
- [MC-279920](https://bugs.mojang.com/browse/MC-279920) - Beacons play the deactivation sound every game tick while on the death screen
- [MC-279967](https://bugs.mojang.com/browse/MC-279967) - Temperate cows have strange mapping/harsh borders because of the leg texture becoming mirrored
- [MC-279993](https://bugs.mojang.com/browse/MC-279993) - Baby cows' heads are incorrectly positioned
- [MC-280050](https://bugs.mojang.com/browse/MC-280050) - The mule saddle texture is missing in the Programmer Art resource pack
- [MC-280061](https://bugs.mojang.com/browse/MC-280061) - Test instance block has flipped lighting direction
- [MC-280063](https://bugs.mojang.com/browse/MC-280063) - crafting_transmute recipes don't give an output if the output stack has the same count as the stack in the crafting grid
- [MC-280106](https://bugs.mojang.com/browse/MC-280106) - Cactus flowers cannot be held by endermen
- [MC-280109](https://bugs.mojang.com/browse/MC-280109) - Leash all frog variants advancement is not deterministic in data generation
- [MC-280113](https://bugs.mojang.com/browse/MC-280113) - Shears no longer consume durability when used on insta-mined blocks
- [MC-280143](https://bugs.mojang.com/browse/MC-280143) - Monster spawner and trial spawner tooltip no longer displays the "Interact with Spawn Egg" hint
- [MC-280159](https://bugs.mojang.com/browse/MC-280159) - New cow model does not match Bedrock Edition
- [MC-280242](https://bugs.mojang.com/browse/MC-280242) - Not all ambient sounds have been moved to the "Ambient/Environment" category
- [MC-280244](https://bugs.mojang.com/browse/MC-280244) - Temperate cow model in Java does not have its new horn placement from Bedrock Edition
- [MC-280285](https://bugs.mojang.com/browse/MC-280285) - Some game events can crash the game when attempting to create vibration resonance with an amethyst block
- [MC-280315](https://bugs.mojang.com/browse/MC-280315) - Crash when listing suggestions with invalid Unicode escapes
- [MC-280325](https://bugs.mojang.com/browse/MC-280325) - The player hand flickers in first-person mode
- [MC-280337](https://bugs.mojang.com/browse/MC-280337) - Slimes freeze the game
- [MC-280360](https://bugs.mojang.com/browse/MC-280360) - The game stops updating frames while loading chunks
- [MC-280379](https://bugs.mojang.com/browse/MC-280379) - Frozen screen when entering any UI or after a few minutes of playing
- [MC-280383](https://bugs.mojang.com/browse/MC-280383) - Items in inventories sometimes do not render
- [MC-280423](https://bugs.mojang.com/browse/MC-280423) - Block textures flicker randomly
- [MC-280439](https://bugs.mojang.com/browse/MC-280439) - Values out of bounds for float and double parse successfully in SNBT resulting in storing the value Infinity

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/0177c3a044813dc7d10b43b14b7f47224bd43067/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
