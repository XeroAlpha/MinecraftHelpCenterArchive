---
title: Minecraft Beta & Preview - 1.21.0.23
date: 2024-04-22T15:15:59Z
updated: 2024-04-24T15:22:22Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/26100457790093-Minecraft-Beta-Preview-1-21-0-23
hash:
  h_01HW8AJJBAVMT77ZERWX8CQTP7: features-and-bug-fixes
  h_01HW8AJJBAKYK237CQD4ZZTKJJ: trial-explorer-map
  h_01HW8AJJBA7AD8T3BJ6MPVZAVA: blocks
  h_01HW8AJJBAWAQ2EXFH6NZR2NQ3: gameplay
  h_01HW8AJJBAWQBM7MEK9S5D6BCZ: graphical
  h_01HW8AJJBA1J8Z21PP1WM602D4: mace
  h_01HW8AJJBA79DKMQ33FD46GJSP: mob-effects
  h_01HW8AJJBAYPFHVMK3EJW8QC9P: infested
  h_01HW8AJJBAQA9PHGV1A2P8XVFF: weaving
  h_01HW8AJJBAC7YK4DTM29NZ7YVV: ominous-bottle
  h_01HW8AJJBBPM392M1WS1QYJWF9: ominous-trial-spawner
  h_01HW8AJJBBHJ59WAHG2K0GWBV5: portals
  h_01HW8AJJBBH1ZM5ARVAJEFDTYM: sounds
  h_01HW8AJJBB5BD117W4D62T589F: trial-chambers
  h_01HW8AJJBBEM2X7GVDYHZ9M2QE: trial-spawners
  h_01HW8AJJBBQK2DS8PC5E2W5KSK: user-interface
  h_01HW8AJJBBSKHDGKYJWXWPQW0C: vanilla-parity
  h_01HW8AJJBB12QKDXX8M4YRPNJV: mobs
  h_01HW8AJJBBWC4SAM0HCXYJDNDF: vault
  h_01HW8AJJBBJT1PH314WA8G7CT4: wind-charge
  h_01HW8AJJBBTMX2PSY63NX6E9MF: technical-updates
  h_01HW8AJJBBVWWG57GSE956XD27: api
  h_01HW8AJJBBYRH36CEARN3DAGT3: components
  h_01HW8AJJBBG813TVNNXY4NP1NN: editor
  h_01HW8AJJBB4D38NN1DGC6HCVTW: technical-experimental-updates
  h_01HW8AJJBBWHPD7KZ0XHRDPTQX: api-1
  h_01HW8AJJBB1RBAFF8B6PSCNA7P: graphical-1
---

**Posted:** 24 April 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft cartographer villager is standing next to a cartography table in a village, holding a trial chamber map.](https://feedback.minecraft.net/hc/article_attachments/26100457788045)

Here’s a list of what’s new in this week’s Preview and Beta! We’d love your feedback, as always, so please let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/), and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes

## Trial Explorer Map

- The Trial Chambers Map item has been renamed to Trial Explorer Map

## Blocks

- Decorated Pots made with Pottery Sherds in Trial Chambers are now oriented correctly ([MCPE-180380](https://bugs.mojang.com/browse/MCPE-180380))
- "stone_block_slab" block is now split into unique instances "smooth_stone_slab", "sandstone_slab", "oak_slab", "cobblestone_slab", "brick_slab", "stone_brick_slab", "quartz_slab" and "nether_brick_slab". The id "oak_slab" had already been split from "wooden_slab", as a result, any "stone_block_slab:2" will be turned into the already existing "oak_slab" id 
- Copper Trapdoor now oxidizes with time
- Added missing crafting recipes for the following blocks ([MCPE-176613](https://bugs.mojang.com/browse/MCPE-176613))
  - Exposed Chiseled Copper from Exposed Cut Copper Slab x 2
  - Waxed Chiseled Copper from Waxed Cut Copper Slab x 2

## Gameplay

- Entities affected by Weaving can now move through Cobweb with 50% of their normal speed instead of 25%
- Flower forests now generate all expected flower types ([MCPE-180417](https://bugs.mojang.com/browse/MCPE-180417))
- Fixed issue where Spectator mode would have noclip and flying disabled when returning to a Hardcore world after dying ([MCPE-180279](https://bugs.mojang.com/browse/MCPE-180279))
- Fixed a recipe bug where any type of Stone Slab could be used to craft a Grindstone with Crimson, Mangrove, or Warped Planks. It can now only accept the actual normal Stone Slab, no other type of stones

## Graphical

- Fixed an issue where the Torch icon was vertically centered in the inventory slot ([MCPE-180527](https://bugs.mojang.com/browse/MCPE-180527)) 

## Mace

- Mace can now also be enchanted with Unbreaking, Smite, Fire Aspect, and Bane of Arthropods ([MCPE-179679](https://bugs.mojang.com/browse/MCPE-179679))
- Tweaked the cost of applying the Mace's exclusive enchantments in the Enchanting Table 

## Mob Effects

### Infested

- Silverfish will now spawn at the center of the Infested entity's bounding box and fling out in the direction the entity is facing
- Now has a 10% chance to spawn 1-2 Silverfish instead of 5% 

### Weaving

- Now more consistently spawns 2-3 cobwebs on death 
- No longer places Cobwebs if the "mob griefing" gamerule is turned off 

## Ominous Bottle

- Bad Omen gained by drinking an Ominous Bottle will no longer emit particles around the player 

## Ominous Trial Spawner

- Players are now chosen 50% of the time (instead of mobs) for dropping projectiles on top of 

## Portals

- When using touch controls, Nether Portals can once again be destroyed by destroying the Portal surface 

## Sounds

- Changed the sounds of Bad Omen effect being applied, the Ominous Bottle breaking after use, and when Bad Omen converts into Raid Omen
- Added 4 new ambient cave sounds

## Trial Chambers

- Added new trap dispenser style to chambers
- Fixed various broken jigsaw connections in corridors
- Added new intersection variation
- Remade "Chamber 6", and renamed it to "Assembly"
- Chamber Eruption:
  - Adding missing Water Bucket to the Dispenser
- Added new wall dispenser style

## Trial Spawners

- Trial Spawners now emit Trial Omen particles instead of Sculk Soul particles when becoming Ominous
- Adjusted loot tables for projectiles dropped when in ominous state to match Java Edition 

## User Interface

- Added a new HUD overlay that displays the number of days played in a world. The overlay is enabled with the "Show days played" world setting

## Vanilla Parity

- Splash potions now have the same duration as drinkable potions

## Mobs

- Removed unnecessary "min_engine_version" from the Bogged client_entity json, which broke resource packs ([MCPE-178910](https://bugs.mojang.com/browse/MCPE-178910))
- The Breeze now aims slightly higher when shooting at the player
- Breeze Wind Charge can now hurt mobs in Boats and Minecarts
- The types of damage that can cause a mob to panic have been restricted ([MCPE-167513](https://bugs.mojang.com/browse/MCPE-167513)) 
  - Only the following damage causes now induce panic:
    - "campfire"
    - "entity_attack"
    - "entity_explosion"
    - "fire"
    - "fire_tick"
    - "fireworks"
    - "freezing"
    - "lava"
    - "lightning"
    - "magic"
    - "magma"
    - "projectile"
    - "ram_attack"
    - "sonic_boom"
    - "soul_campfire"
    - "temperature"
    - "wither"
  - Java Edition will also be adjusted to match this new behavior

## Vault

- Updated loot tables of Vaults and Ominous Vaults to match Java Edition ([MCPE-180499](https://bugs.mojang.com/browse/MCPE-180499)) 
- Fixed a bug where Vaults could not be opened with a Trial Key ([MCPE-180291](https://bugs.mojang.com/browse/MCPE-180291))

## Wind Charge

- Fixed an issue with fall damage not being negated when falling onto Slime Blocks or Powder Snow after using a Wind Charge ([MCPE-178878](https://bugs.mojang.com/browse/MCPE-178878)) ([MCPE-178891](https://bugs.mojang.com/browse/MCPE-178891))

# Technical Updates

## API

- Fixed *GameRules* rule property-setters so that changes are propagated to clients
- Moved *startItemCooldown* and *player.getItemCooldown* from *beta* to *1.11.0*
- Released *playSound* from *beta* to *1.11.0*
- *playSound* is now deprecated and will be removed in a future major version. Use *Dimension.playSound* as the alternative
- Released *ListBlockVolume*from *beta* to *1.11.0*
- Released *BlockVolumeBase*from *beta* to *1.11.0*
- Released *BlockLocationIterator*from *beta* to *1.11.0*
- Moved method *getGameMode(): GameMode*from *beta* to *1.11.0*
- Moved method *setGameMode(gameMode?: GameMode): void*from *beta* to *1.11.0*
- Moved member *playerGameModeChange: PlayerGameModeChangeAfterEventSignal*from *beta* to *1.11.0*
- Moved member *playerGameModeChange: PlayerGameModeChangeBeforeEventSignal*from *beta* to *1.11.0*
- Moved class *PlayerGameModeChangeAfterEvent*from *beta* to *1.11.0*
- Moved class *PlayerGameModeChangeAfterEventSignal* from *beta* to *1.11.0*
- Moved class *PlayerGameModeChangeBeforeEvent*from *beta* to *1.11.0*
- Moved class *PlayerGameModeChangeBeforeEventSignal* from *beta* to *1.11.0*
- Added *ItemComponentConsumeEvent* for *beta*
- Change *waitTick(ticks?: number)* to *system.waitTicks(ticks: number);*
- Renamed property *selectedSlot*to *selectedSlotIndex* and moved it from *beta* to *1.11.0*

## Components

- The default values for the "damage_sources" field of "behavior.panic" have been updated
  - For the complete list of the new default values, refer to the "Vanilla Parity" section of the changelog
  - This change only affects entities with a format version of 1.21.0 or higher
- Multiple items with the same custom component will now correctly trigger custom component logic

## Editor

- Selection volumes can no longer be created when they would exceed the world height limits
- When filling up a volume and dragging the volume during the filling operation the filling volume would also change. Now the filling operation happens in the original volume
- Fixed a bug where camera collision caused third-person view to display inside the player's head in Crosshair mode

# Technical Experimental Updates

## API

- EntityTameMountComponent
  - Added method *tameToPlayer*
  - Added properties *isTamed*, *isTamedToPlayer*, *tamedToPlayer*, and *tamedToPlayerId*
- GameRules
  - Added property *showDaysPlayed* to *beta*
- Fixed *PlayerInputPermissions*input-lock category property-setters so that changes are propagated to clients

## Graphical

- Fixed a bug with volumetric fog shading in the Deferred Technical Preview that was causing fog to be much brighter than it should have been. Volumetric fog in the Deferred Technical Preview now matches the look of volumetric fog in RTX much more closely. Fog definitions in resource packs developed for the Deferred Technical Preview will need to be updated after this change. To maintain a similar look, the values for either "max_density" or "scattering" should be increased by a factor of 12.
