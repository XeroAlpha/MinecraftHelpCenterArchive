---
title: Minecraft Beta & Preview - 1.21.0.24
date: 2024-05-01T10:41:30Z
updated: 2024-05-02T09:37:38Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/26354480452109-Minecraft-Beta-Preview-1-21-0-24
hash:
  h_01HWT2XHEF1ADQHSP2HEBYTZEA: features-and-bug-fixes
  h_01HWT2XHEF2DZ8VT5YW38ZGWYE: new-music
  h_01HWT2XHEFNMVHCQYQXBD3S7FJ: paintings
  h_01HWT2XHEF819ATJE2566784CQ: air-bubbles
  h_01HWT2XHEFF7HDH72YKQHGJ07N: blocks
  h_01HWT2XHEFVZ9ZZBQVRE5C5S08: copper-doors-and-trapdoors
  h_01HWT2XHEFT0ZDJWX6DTSGMHPS: wind-charge
  h_01HWT2XHEFYP1XRJ19G4Q0R5GH: game-tips
  h_01HWT2XHEF2PF5DT2148B8JSJY: main-menu-cube-map
  h_01HWT2XHEFH69RJBP0JKBEP527: gameplay
  h_01HWT2XHEFWPHKYDRQRFA38MRQ: mace
  h_01HWT2XHEFK56HC1CTKRD6CDFJ: mob-effects
  h_01HWT2XHEF72J2908QXX3AB5KW: mobs
  h_01HWT2XHEF86BKSAMWFAZJKKRT: ominous-trial-spawner
  h_01HWT2XHEFKBEFB15X7P4RNQGS: ominous-trials
  h_01HWT2XHEF71123P2ZCQP14EEY: character-creator
  h_01HWT2XHEFM0QW22SK1B6BNA7E: trial-chambers
  h_01HWT2XHEF1PT1KGQJ7XAWR1ZK: trial-spawner
  h_01HWT2XHEF7SP1B3Y5Q9X1X1NP: user-interface
  h_01HWT2XHEFCG5RBTVH6YK6MPZM: technical-updates
  h_01HWT2XHEF43EES1TNATYZK5DA: add-ons-and-script-engine
  h_01HWT2XHEFPN4JXW8CGXZYJN2N: api
  h_01HWT2XHEGY12BFG7AFCBPK73P: editor
  h_01HWT2XHEG3JN4QEFK3VG3M5GG: general
  h_01HWT2XHEGSYD04G4R9MQCX4QB: items
  h_01HWT2XHEG1DT8HJZ8X1YC0T58: technical-experimental-updates
  h_01HWT2XHEGNE7EMQXGA0MH2S5A: api-1
---

**Posted:** 1 May 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft village house, with villagers and an iron golem nearby. There is a new painting on the wall that has been placed by a player, as well as a jukebox and three new music discs in item frames on the ground.](https://feedback.minecraft.net/hc/article_attachments/26354493414925)

It's time for yet another exciting Minecraft: Bedrock Edition Beta and Preview update! This week you will discover the artistic delights of 15 new paintings that have been added to the game, created by artist [Kristoffer Zetterstrand](https://www.minecraft.net/en-us/article/painting-overworld). In addition, there are three new music discs and nine new background music tracks being added to the game! I'm going to waste no time in building a new art gallery wing to display these fantastic additions, and the new music tracks will set the atmosphere perfectly. As always, we want to hear your thoughts about how the [*Tricky Trials*](https://www.minecraft.net/en-us/article/1-21-update-officially-named-tricky-trials) update is shaping up at [feedback.minecraft.net](https://feedback.minecraft.net/), and please report any bugs you find to [bugs.mojang.com](https://bugs.mojang.com/)!

# Features and Bug Fixes

## New Music

- Added 3 new music discs
- Aaron Cherof - Precipice can be found rarely in standard Vaults
  - Has a comparator output of 13 when played in a Jukebox
- Lena Raine - Creator can be found rarely in Ominous Vaults
  - Has a comparator output of 12 when played in a Jukebox
- Lena Raine - Creator (Music Box) can be found rarely in Decorated Pots broken in Trial Chambers
  - Has a comparator output of 11 when played in a Jukebox
- Added 9 new background music tracks which will play in the menu and in the following biomes: Badlands, Cherry Grove, Deep Dark, Dripstone Caves, Flower Forest, Grove, Jagged Peaks, Lush Caves, Snowy Slopes, Stony Peaks

<!-- -->

- - *deeper*
  - *eld_unknown*
  - *endless*
  - *featherfall*
  - *komorebi*
  - *pokopoko*
  - *puzzlebox*
  - *watcher*
  - *yakusoku*

## Paintings

- Added fifteen new paintings by artist Kristoffer Zetterstrand:
  - *backyard*
  - *bouquet*
  - *cavebird*
  - *changing*
  - *cotan*
  - *endboss*
  - *fern*
  - *finding*
  - *lowmist*
  - *orb*
  - *owlemons*
  - *passage*
  - *pond*
  - *sunflowers*
  - *tides*

## Air bubbles

- Oxygen bar now disappears immediately when switching to Creative mode underwater ([MCPE-57025](https://bugs.mojang.com/browse/MCPE-57025))
- Added an empty state for air bubbles along with a wobble when the player is drowning
- Added a popping sound when bubbles pop on the oxygen bar

## Blocks

- Crafters now show the correct particle when broken
- All Tuff blocks now use Tuff sounds instead of generic Stone sounds. Tuff luck, stone. ([MCPE-176362](https://bugs.mojang.com/browse/MCPE-176362))
- Tuff Wall, Polished Tuff Wall, and Tuff Brick Wall blocks are no longer invisible on Maps
- Tuff Slabs, Polished Tuff Slabs, and Tuff Brick Slabs are no longer invisible on Maps ([MCPE-180190](https://bugs.mojang.com/browse/MCPE-180190))
- Tuff Brick Slab and Polished Tuff Slab now have the correct explosion resistances
- Polished Tuff Slab and Tuff Brick Slab now have the same breaking times as other Tuff blocks, and cannot be destroyed instantly anymore ([MCPE-176434](https://bugs.mojang.com/browse/MCPE-176434))

## Copper Doors and Trapdoors

- Copper Doors and Trapdoors are now crafted from Copper Ingots instead of Copper Blocks
- Only Copper Doors and Copper Trapdoors can now be crafted, other variants are no longer craftable

## Wind Charge

- Wind Charges no longer damage the Ender Dragon when it is perching ([MCPE-180485](https://bugs.mojang.com/browse/MCPE-180485))
- The Wind Burst enchantment is no longer obtainable from Villager trading ([MCPE-180764](https://bugs.mojang.com/browse/MCPE-180764))
- Player-shot Wind Charges' burst sound is no longer affected by the 'Hostile Creatures' sound setting
- Exiting water using Wind Charge now properly reduces fall damage according to Wind Charge logic ([MCPE-178894](https://bugs.mojang.com/browse/MCPE-178894))

## Game Tips

- Improved game tip interruption handling. Different kinds of interruptions can now be tracked separately
- Added interruption for when player is in lava
- Added interruption when input mode is switched
- Added interruption when mobs are nearby
- Changed base timing for camera game tip to 15 seconds
- Changed base timing for movement game tip to 30 seconds
- Changed base timing for break block game tip to 2 minutes
- Changed base timing in survival for place block game tip to 5 minutes
- Deactivated swimming game tip for touch devices

## Main Menu Cube Map

- Added new Cubemap background for 1.21

## Gameplay

- Tridents no longer damage the Ender Dragon when it is perching ([MCPE-37112](https://bugs.mojang.com/browse/MCPE-37112))
- The ‘Castaway’ achievement can now be reliably unlocked ([MCPE-118433](https://bugs.mojang.com/browse/MCPE-118433))

## Mace

- Mace smash attack no longer creates dirt particles when hitting a target whose center is in the air
- Raised Mace durability from 250 to 500
- Reduced Mace base damage to 5
- Reduced Density damage per level per block to 0.5
- Mace Smash attack damage now has a fall off:
  - First 3 blocks fallen give 4 damage per block
  - Next 5 blocks fallen give 2 damage per block
  - Any block fallen after that give 1 damage per block
- Density and Breach are now incompatible with each other and the other damage enchantments (Smite and Bane of Arthropods)

## Mob Effects

- Wind Charged and Infested Mob Effects now have correct names in respective potions and arrows ([MCPE-180271](https://bugs.mojang.com/browse/MCPE-180271))
- Mobs under the Infested status effect no longer spawn Silverfish when blocking damage with a Shield

## Mobs

- The Bogged now properly retaliates against other mobs when attacked ([MCPE-178902](https://bugs.mojang.com/browse/MCPE-178902))
- Players now correctly receive fall damage when launched by a Wind Charge thrown by a Breeze ([MCPE-179379](https://bugs.mojang.com/browse/MCPE-179379))
- The Breeze can now pathfind close to fire

## Ominous Trial Spawner

- Now correctly ejects Ominous Trial Keys instead of Trial Keys
- Mobs spawned with equipment specified by the Trial Spawner no longer have a chance to drop that equipment upon death
- Mobs that can wear equipment will now often spawn with enchanted weapons and armor
  - Armor enchantments include Protection IV, Projectile Protection IV, and Fire Protection IV
  - Weapon enchantments include Sharpness I, Knockback I, Power I, and Punch I
- Ominous Trial Spawners with mobs that are unable to wear equipment now spawn double the total mob count over the course of the challenge
  - These spawners will also have an additional simultaneous mob out at once

## Ominous Trials

- Removed Bottle o' Enchantment from possible projectiles in Ominous Trials

## Character Creator

- Fixed Character Creator hair and headwear clipping through worn Pumpkins and Mob Heads ([MCPE-128908](https://bugs.mojang.com/browse/MCPE-128908))

## Trial Chambers

- Decorated Pots in Trial Chambers will now drop less types of items to ease inventory management
- Spider spawners have been moved to the "melee" category
- Slime spawners have been moved to the "small melee" category
- Adjusted drop chance of Precipice Music Disc
- Removed TNT trap in Eruption
- Made seams match in corridors
- Added new entrance variations
- Fixed various broken or incorrect jigsaw data
- Added empty Chests to chamber entrances

## Trial Spawner

- Trial Spawner now honors the *doMobSpawn*game rule
- Ominous Trial Spawner does not spawn Potions and Projectiles when there are no Survival Players in its range
- The rewards that Trial Spawners and Ominous Trial Spawners eject is now in parity with Java Edition
- Projectiles spawned by Ominous Trial Spawner can no longer spawn inside solid blocks

## User Interface

- Caret now is placed at the end of the text when navigating to previously sent messages/commands with an external keyboard on mobile devices ([MCPE-178574](https://bugs.mojang.com/browse/MCPE-178574))

# Technical Updates

## Add-Ons and Script Engine

- Changed Biome documentation to generate with a different system, which will cause the layout and order of those documentation elements to change

## API

- Moved *entity*from *beta* to *1.11.0*
- Moved *EntityTameMountComponent*and method *tame* from *beta* to *1.11.0*
- Moved EntityAddRiderComponent from *beta* to *1.11.0*
- Moved Seat from *beta* to *1.11.0*
- Moved EntityRidingComponent from *beta* to *1.11.0*

## Editor

- Added *addTable* API
- Fixed GIF asset support for *addImage* API
- Fixed a bug where the viewport did not scale properly with changes in UI or font scaling
- Resolved tooltip positioning and content size issues

## General

- The Free camera experiment has been deprecated and the toggle removed as this feature has shipped. Future improvements to the free camera preset will be found in new experimental toggles as those capabilities become available. Samples can be found in the document for the camera command.

## Items

- Fixed a bug where, if a block and item are registered with the same identifier, the block returns a null item when 'picked'

# Technical Experimental Updates

## API

- Fixed issue where block with custom components could not have a block placed onto them without crouching
- Added new interface *VectorXZ*
- Added method *getTopmostBlock*which will perform a raycast from the top of the world downwards, trying to find the first solid block
- Added method *getBlockAbove*which will perform a raycast from a given position, trying to find the first solid block above
- Added method *getBlockBelow*which will perform a raycast from a given position, trying to find the first solid block below
