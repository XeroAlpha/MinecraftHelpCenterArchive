---
title: Minecraft Beta & Preview - 1.21.0.21
date: 2024-04-10T10:41:22Z
updated: 2024-04-10T14:40:31Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/25773976236557-Minecraft-Beta-Preview-1-21-0-21
hash:
  h_01HV3T479W2WWJH2BEM5D50F14: experimental-features
  h_01HV3T479WHX4Z35N25TJ94RMW: mace
  h_01HV3T479WSJM4QGHBBYJT65TJ: mob-effects
  h_01HV3T479WENRBKWACGPAQP40V: paintings
  h_01HV3T479WC399AVK29730BCX7: trial-chambers
  h_01HV3T479WKTY80MP664YK8CPM: trial-spawner
  h_01HV3T479WT78P6AQ9NXAH8QQR: features-and-bug-fixes
  h_01HV3T479WKN5GDQJAF4DPK98V: blocks
  h_01HV3T479WCTZG85RR7EET16KH: edu-toggle
  h_01HV3T479WKQSZ4BG3QB16REPW: gameplay
  h_01HV3T479WZZRF6BVZM1VBPMRS: hardcore-mode-preview-only
  h_01HV3T479WC7MFNKRQXG7HMJDB: mobs
  h_01HV3T479W3W2C29TYK6N3XX4K: realms
  h_01HV3T479W904MZP6BV7TZ29Y9: accessibility-features
  h_01HV3T479WSN5H5616SKHGZ85M: user-interface
  h_01HV3T479WZ5MBCZF6TSZ0CWZ9: technical-updates
  h_01HV3T479WHYT1HY6A3T1QS5QF: add-ons-and-script-engine
  h_01HV3T479WGX9AZVG1EGSMZ4AB: blocks-1
  h_01HV3T479W768FMRWMVDHJ6EJ8: documentation
  h_01HV3T479WXVHK53CHKSDJ39X6: editor
  h_01HV3T479X5YR5527ZD6RSZ0JF: experimental-technical-updates
  h_01HV3T479XE9VKMVGQH5KZTXQG: api
  h_01HV3T479X4Z09RX4HD3MQZ802: graphical
---

**Posted:** 10 April 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![r21_2_preview.jpg](https://feedback.minecraft.net/hc/article_attachments/25773976235149)

We always talk about squashing bugs in our changelogs, but this week we’re doing it with an enchanted mace for *extra* squashing power! Test out the Density, Breach, and Wind Burst enchantments, which are all unique to the mace, and see which fits your combat style the best. Just mind you don’t smash any of the walls of your base, because you might want to decorate them with another feature included in this testing release – five new Minecraft paintings. From blocky baroque stills to even blockier landscapes, this changelog has more ways to decorate your base *and* more ways to smash it all to pieces. Let’s dive in!

Here’s a list of what’s new in this week’s Preview and Beta! We’d love your feedback, as always, so please let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/), and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

# Experimental Features

## Mace

- The Mace now has three brand new Enchantments available for use! 
  - **Wind Burst** generates a burst of wind when successfully striking enemies, launching the wielder in the air!
  - **Density** makes the already heavy Mace EVEN HEAVIER, adding additional heft to its Smash Attack!
  - **Breach** allows the Mace to bypass a portion of an enemy's Armor, striking fear into the hearts of even the most protected enemies!
- Added a new explosive particle effect when executing a smash attack with the Mace to really show the player's power when using it! 
- Known issues: Particles appear grey in water and on some leaves. Particles appear when target is hit in the air.

## Mob Effects

- Added Raid Omen 
  - Instead of triggering a Raid directly, Bad Omen will transform into a Raid Omen variant with a duration of 30 seconds
  - Once the Raid Omen expires, a Raid will start at the location the player gained the Raid Omen
  - Like any other effect, players can drink a Bucket of Milk to clear the Raid Omen to prevent the Raid from starting
- Added activation sounds to Bad Omen, Trial Omen, and Raid Omen

## Paintings

- Added five new paintings by artist Sarah Boeving:
  - *Baroque*
  - *Humble*
  - *Meditative*
  - *Prairie Ride*
  - *Unpacked*

## Trial Chambers

- Trial Chambers are now more consistently buried by terrain when found underground 

## Trial Spawner

- Ominous Trial Spawners now show a preview of the item that is about to be dropped 

# Features and Bug Fixes

## Blocks

- "coral_block" block is now split into unique instances: "tube_coral_block", "brain_coral_block", "bubble_coral_block", "fire_coral_block", "horn_coral_block", "dead_tube_coral_block", "dead_brain_coral_block", "dead_bubble_coral_block", "dead_fire_coral_block" and "dead_horn_coral_block" 

## EDU Toggle

- Chemistry items now appear in the creative inventory when the Education edition toggle is on 

## Gameplay

- Fixed a crash that could occur when teleporting to a region where a Piston is pushing a Chest ([MCPE-179440](https://bugs.mojang.com/browse/MCPE-179440))
- Fixed a crash that could occur when the player begins losing air 

## Hardcore Mode (Preview Only)

- The death screen now shows “Spectate World” option when playing in Hardcore Mode ([MCPE-180287](https://bugs.mojang.com/browse/MCPE-180287))

## Mobs

- Armadillos no longer repeatedly roll and unroll when receiving damage from blocks ([MCPE-180142](https://bugs.mojang.com/browse/MCPE-180142)) 

## Realms

- Fixed several instances of periods being narrated as 'dot' on the Realms Stories 'Opt In' screen (Preview only) 

## Accessibility Features

- Added text-to-speech support for member search results in the Realms Stories Member tab (Preview Only) 
- The Realms Stories Opt In screen now enumerates its active buttons with text-to-speech on (Preview Only)

## User Interface

- Added slide-off persistence to new d-pad touch control scheme 
- Changes positioning and scale of default new touch d-pad control scheme. Also allows for moving the dpad closer to the hotbar when customizing touch controls. 
- Made the jump and ascend in water button overlap so now the player can stay above water more easily ([MCPE-179689](https://bugs.mojang.com/browse/MCPE-179689)) 
- Fix a bug that prevented navigating to previously sent messages with a keyboard on Xbox ([MCPE-174648](https://bugs.mojang.com/browse/MCPE-174648))

# Technical Updates

## Add-Ons and Script Engine

- Fixed some places in documentation generation where elements were accidentally overwritten. This caused a minor amount of documentation to appear or move in the Animations, Blocks, Entities, and Particles files 

## Blocks

- Updated block geometry to allow uv rotations
  - This allows you to rotate the specified uv rect in 90 degree increments before applying it to a block face
  - Supported from *minecraft:geometry*format version 1.21.0 and up 
- Added pivot for scale in the Block Transformation Component
- Added pivot for rotation in the Block Transformation Component 

## Documentation

- Documentation for version v1.13.0 of "Decoration Features" is now up to date

## Editor

Editor is now in v0.6 with the following new features:

- New Panel Layout – panels can be toggled, resized, and support auto-hide
- Widget Framework – editor extensions can now use custom entities and animations to mark information within the world
- Global Block Hotbar + Picker – customize and swap between your most common blocks to build even faster
- Brush Shape Framework – use our resizable brush shapes to quickly modify the world or add your own with editor extensions
- Summon Tool – quickly create, move, rotate, and delete entities
- Line Tool – build parkour maps, bridges, roads with our new line tool
- Improved performance, bug fixes, and many more!

See the full changelog for our v0.6 release on the [Editor GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) page!

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

# Experimental Technical Updates

## API

- get will now handle items whose names have changed so that scripts referencing old names will still work as intended 
- Added ItemComponentUseOnEvent for beta
- Moved *typeId*and *Block.matches* from beta to stable 
- Update JavaScript engine
  - BigInt support
  - hasOwn
  - Array findLast and at
  - Miscellaneous bug fixes
- *@minecraft/server.BlockType*
  - Moved *id*API from beta to stable v1.11.0
- *@minecraft/server.BlockTypes*
  - Moved BlockTypes API from beta to stable v1.11.0
  - Moved *type*API from beta to stable v1.11.0
- *@minecraft/server.Block*
  - Moved *type*API from beta to stable v1.11.0

## Graphical

- Fixed heightmap textures not rendering correctly in the Deferred Technical Preview
