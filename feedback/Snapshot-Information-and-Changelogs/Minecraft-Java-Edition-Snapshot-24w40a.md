---
title: Minecraft Java Edition - Snapshot 24w40a
date: 2024-10-02T15:49:50Z
updated: 2025-03-04T15:18:57Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/30738932967053-Minecraft-Java-Edition-Snapshot-24w40a
hash:
  h_01J96Y7BXTRMZY93YKC1WSFDMJ: experimental-features
  h_01J96Y7BXTSXM35HZGFEVYKXRP: winter-drop
  h_01J96Y7BXTS16HMZ4WAXQ8648V: pale-garden
  h_01J997YGZJTSE65Y1490D87ZRA: pale-oak-tree
  h_01J96Y7BXTX0Y6PP1WA74PZGX9: pale-moss-block
  h_01J96Y7BXTJZDX1DSFD0XGAEF7: pale-moss-carpet
  h_01J96Y7BXTZD2SN4XD5CDX75ZW: pale-hanging-moss
  h_01J96Y7BXTJY19VT3FB416PBFM: creaking-mob
  h_01J96Y7BXTWBAZVWMEEZ7F0QE4: creaking-heart
  h_01J96Y7BXT41769RKJBF6XGYN3: new-system-for-pale-garden-ambient-sounds
  h_01J96Y7BXTBTGJGS823X1ANTT1: changes
  h_01J96Y7BXT9E16H61N59SH7AND: realms
  h_01J96Y7BXTEKZH5QJAS2HNWGPD: technical-changes
  h_01J96Y7BXT045FHZGZR9X1CWM8: data-pack-version-56
  h_01J96Y7BXTG946HEQD2BH1T0H4: commands
  h_01J96Y7BXT9ZVCQYVCP35ZDPQE: rotatecommand
  h_01J96Y7BXTG7B07QEJJ5SS8C68: enchantment-effects
  h_01J96Y7BXT0NN65QVMCF29X64M: tags
  h_01J96Y7BXT6KAR9QB9BHP24HS7: item-tags
  h_01J96Y7BXTRKM11DT13FS0KJWB: particles
  h_01J96Y7BXTJVXARWW03CCZJRQ6: resource-pack-version-40
  h_01J96Y7BXTKC2NE5PTQQJVX15Q: fixed-bugs-in-24w40a
  h_01J96Y7BXTM3N0QSQCASB4GWJG: get-the-snapshot
---

Hello!

In this week's snapshot we are adding a new experiment which will allow you to experience the Pale Garden, a new eerie biome filled with Pale Oak Trees and Hanging Moss. Beware of its sole inhabitant, the Creaking, and don't blink!

Happy Exploring!

## Experimental Features

The experimental feature with the Pale Garden biome can be enabled by turning the "Winter Drop" experiment on. You can do this in the Experiments screen while creating the world. These experiments have no effect unless enabled. You can find more information about Feature Toggles [here](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition).

We would love to hear your feedback on the new Pale Garden biome and the hostile mob the Creaking.

Creaking feedback thread: <https://aka.ms/mccreakingfeedback>

Pale garden feedback thread: <https://aka.ms/mcpalegardenfeedback>

## Winter Drop

- Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak woodset

- Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

### Pale Garden

Pale Garden is a biome variation of Dark Forest. Unique features:

- Pale Oaks generate here

- Pale Moss blocks/carpet generate on the ground here

- Hanging Pale Moss generate hanging from the foliage of Pale Oaks

- Animal mobs do not spawn naturally in Pale Gardens

- New biome specific ambient sounds

- Creaking Heart block can generate in Pale Oaks

### Pale Oak Tree

- Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees

- Pale Oaks logs can be crafted into the Pale Oak woodset:

  - Door

  - Fence

  - Fence Gate

  - Plank

  - Sign

  - Hanging Sign

  - Slab

  - Stairs

  - Trapdoor

  - Wood

  - Stripped Log

  - Stripped Wood

  - Button

  - Pressure Plate

  - Boat

  - Boat with Chest

### Pale Moss Block

Pale Moss block generates naturally in the Pale Garden biome

### Pale Moss Carpet

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

- When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it

- Pale Moss Carpet can be bonemealed to grow to full on all solid faces of any block that borders it

### Pale Hanging Moss

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

- Pale Hanging Moss does not grow randomly, but can be bonemealed to grow down

### Creaking mob

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

- An activated Creaking will not move if a player is looking at it

- Creaking is invulnerable to damage

- Creaking has Fire Resistance

- When hit, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to

- When the Creaking Heart block the Creaking is connected to is destroyed, the Creaking is removed

- Is not affected by light levels but spawns and despawns based on day/night cycle

- Creaking cannot enter Boats

- Creaking spawned from a Creaking Heart can not go through portals

- The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart
  - Creaking summoned from a Creaking Spawn Egg or commands will persist through day and night, and, loads and saves
  - Is Fire Resistant
  - Takes damage from attacks and other damage sources
  -  Has one point of health (half a heart)

- Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be summoned with commands. It can only exist as a part of the Creaking Heart block

- Player wearing a carved pumpkin on their head can look at Creaking without it freezing in place

### Creaking Heart

A Creaking Heart is a “living” block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is nighttime, and it is placed between two correctly aligned Pale Oak log blocks.

- Is active during night and dormant during day

- Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player

- When Creaking Heart block is destroyed, the connected Creaking is removed

### New system for Pale Garden ambient sounds

Ambient sounds in the Pale Garden biome do not come from the biome settings but are generated by blocks found in the biome

- Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves

- Creaking Heart block emits a set of eerie sounds when it is active during night and surrounded by Logs on all sides

## Changes

- Bundle coloring recipes are now unlocked by Dye rather than uncolored Bundle item

- Shulker Box and Bundle coloring recipes no longer work when trying to apply a Dye to an item of the same color

- Added an accessibility option to make targeted block's outlines more visible

### Realms

- The game mode for the last active world on a Realm will now be visible on the main Realms screen if applicable

## Technical Changes

- The Data Pack version is now 56

- Resource Pack version is now 40

## Data Pack Version 56

- Added new particles: block_crumble and trail

### Commands

- You cannot ride Leash Knots, Lighting Bolts and Fishing Bobbers anymore with ride command
- Added the rotate command

#### rotate Command

New command to rotate entities.

Syntax:

    rotate <target> <rotation>
    rotate <target> facing <facingLocation>
    rotate <target> facing entity <facingTarget> [<facingAnchor>]

Parameters:

- target: The entity to rotate
- rotation: Two rotation values in degrees denoting horizontal and vertial rotation
  - May use relative (~) coordinate notation to specify rotation relative to current context rotation
- facingLocation: The coordinates of a location in the world for the rotated entity to face
- facingTarget: An entity for the rotated entity to face
- facingAnchor: Specifies the anchor of the facingTarget entity to rotate towards - feet or eyes (by default feet)

Note: parameters have the same meaning as in the teleport command.

### Enchantment Effects

- Renamed effect type damage_item to change_item_damage, now also supports negative amounts

### Tags

#### Item Tags

- gaze_disguise_equipment: Items that can be equipped to disguise the player looking for other mobs

### Particles

- added block_crumble particle with the following options:
  - block_state - the block state of the block to crumble
- added trail particle with the following options:
  - color - the color of the trail
  - target - the position of the target for particle to reach

## Resource Pack Version 40

Increased to support the new experimental changes

## Fixed bugs in 24w40a

- [MC-64265](https://bugs.mojang.com/browse/MC-64265) - Teleporting passengers does not dismount them
- [MC-108323](https://bugs.mojang.com/browse/MC-108323) - Underlines in chat and /title command intersect each other, causing an ugly effect when fading
- [MC-185144](https://bugs.mojang.com/browse/MC-185144) - Item durability bar and all items render incorrectly in the villager trade UI
- [MC-272946](https://bugs.mojang.com/browse/MC-272946) - The block outline is nearly invisible for some blocks
- [MC-273848](https://bugs.mojang.com/browse/MC-273848) - Players can spawn underwater again in 1.21
- [MC-275505](https://bugs.mojang.com/browse/MC-275505) - The /tp command forces a mounted entity to dismount
- [MC-275706](https://bugs.mojang.com/browse/MC-275706) - Vanilla clients can't display items with components in recipe book anymore
- [MC-275790](https://bugs.mojang.com/browse/MC-275790) - Non-existent entries in certain tags that are not required causes validation error
- [MC-276005](https://bugs.mojang.com/browse/MC-276005) - The text of sneaking players' name tags is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
- [MC-276330](https://bugs.mojang.com/browse/MC-276330) - Bundles no longer play a sound when being emptied
- [MC-276387](https://bugs.mojang.com/browse/MC-276387) - Bundles can remain in the open state when using hotkeys to move them into different slots
- [MC-276391](https://bugs.mojang.com/browse/MC-276391) - The item durability and bundle fullness bars render incorrectly when held over recipe book elements
- [MC-276440](https://bugs.mojang.com/browse/MC-276440) - Items within bundle tooltips can be unselected by scrolling despite only one item being present
- [MC-276596](https://bugs.mojang.com/browse/MC-276596) - Damageable horse armor with "damage_on_hurt" enabled doesn't take damage when the horse wearing it is hurt
- [MC-276640](https://bugs.mojang.com/browse/MC-276640) - Riding an entity constantly teleported with relative coordinates produces jittery camera movement
- [MC-276651](https://bugs.mojang.com/browse/MC-276651) - damage_item does not repair items when the value is negative
- [MC-276669](https://bugs.mojang.com/browse/MC-276669) - Pausing the game spams "Trying to save removed ender pearl, skipping" to log if ender pearls have landed
- [MC-276806](https://bugs.mojang.com/browse/MC-276806) - The text of name tags behind blocks or entities is rendered completely invisible or barely visible when the "Text Background Opacity" accessibility option is set to high values
- [MC-276876](https://bugs.mojang.com/browse/MC-276876) - Lava cauldrons deal less damage to boats and minecarts than before
- [MC-276947](https://bugs.mojang.com/browse/MC-276947) - Command server output in singleplayer is printed into chat
- [MC-276948](https://bugs.mojang.com/browse/MC-276948) - Split boat entity types have capitalized 'With'
- [MC-276949](https://bugs.mojang.com/browse/MC-276949) - Old boat entity type translation keys are not deprecated
- [MC-276956](https://bugs.mojang.com/browse/MC-276956) - Cannot access registries in container block entity "lock" field
- [MC-276980](https://bugs.mojang.com/browse/MC-276980) - Projectiles on the wall in the water will continue to produce bubble trails

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2e2e224520156be9bc7c76be8158af9825d873d9/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
