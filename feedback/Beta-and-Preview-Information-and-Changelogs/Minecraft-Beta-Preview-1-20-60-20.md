---
title: Minecraft Beta & Preview - 1.20.60.20
date: 2023-11-15T13:32:02Z
updated: 2023-11-15T14:01:43Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/21354522496525-Minecraft-Beta-Preview-1-20-60-20
hash:
  h_01HBVR6KM8JCTEG8SDY8V3WBB3: information-on-the-minecraft-preview-and-beta
  h_01HF9MJ4D5YFF3YRSZWW1APM8J: experimental-features
  h_01HF9MJ4D5BVJPB5YM3R62GHVQ: added-breeze-mob
  h_01HF9MJ4D59P55V7MCYWH2G560: known-parity-breaks
  h_01HF9MJ4D5EV6H641ZJQ1M9HJ7: trial-spawner
  h_01HF9MJ4D5DDVK0G0TMJBKFBZN: trial-chambers
  h_01HF9MJ4D6YW6MSA7803B2222S: known-issues
  h_01HF9MJ4D6RC7F221RS2A1V8FP: trial-key
  h_01HF9MJ4D6C480T18CDMYMMBN2: crafter
  h_01HF9MJ4D6XBF7ZSWC6ZXGK4DN: tuff-bricks
  h_01HF9MJ4D6Q49D2JVGK6ZA0BD4: features-and-bug-fixes
  h_01HF9MJ4D6WB1QA47T1S93K2BP: boat
  h_01HF9MJ4D6F6TXJJKX5SFKM9ED: gameplay
  h_01HF9MJ4D61FBN4Z2VSFG863H0: general
  h_01HF9MJ4D6RDG67YJPHAQZ3DN9: character-creator
  h_01HF9MJ4D6T4JSHA522M3PSKF4: how-to-play-section
  h_01HF9MJ4D65QEAA96ZQMZPC4ZH: items
  h_01HF9MJ4D626X577N3MWS93QCB: realms
  h_01HF9MJ4D6792WHM0F4PWJ7HBX: user-interface
  h_01HF9MJ4D66FZSXJ1EH77B4Z40: technical-updates
  h_01HF9MJ4D6SKC1SGRY5ZS9VTT7: api
  h_01HF9MJ4D6Z02QCKVE9ZCF4BP7: editor
  h_01HF9MJ4D6E87GPSGBTP9PSPGD: entity-components
  h_01HF9MJ4D6E3JNGDC40KVRHMHD: items-1
  h_01HF9MJ4D6J21MQ39THNYX068V: loot-tables
  h_01HF9MJ4D61TTYN4E5WP0ZJH62: experimental-technical-features
  h_01HF9MJ4D64BH36X3MYH4MNEC3: graphical
  h_01HF9MJ4D6HE3EM96X5HREN2SX: api-1
---

**Posted:** 15 November 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A darkened Trial Chamber with Breeze mobs and Skeletons around the Trial Spawners](https://feedback.minecraft.net/hc/article_attachments/21355297216269)

What do trial chambers, trial spawners, and the breeze all have in common? As well as all being features of the 1.21 update, they’re all coming to testing for Minecraft: Bedrock Edition Beta and Preview *today*! As a lover of chaos and an avid explorer of the unexplored, I can’t wait to *leap* into this preview and see who can jump the furthest, me (no elytra allowed) or the breeze: a mischievous hostile mob which attacks using the power of wind! Venture down sprawling copper-bulb filled corridors, step through doorways into the unknown, and test yourself (pun intended!) against the trial spawner, a cunning device which spews out a number of mobs based on the size of your party. As always, we’d love your feedback on these features, so please send us your thoughts [here](https://aka.ms/Minecraft121Feedback) and report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)!

# Experimental Features

## Added Breeze mob

- The Breeze is a cunning, hostile mob that can spawn via Trial Spawner in some rooms within the Trial Chambers
- The Breeze moves primarily by leaping around the target, sometimes jumping quite long distances
- An aggressive adversary, the Breeze shoots volatile wind energy in the form of wind charge projectiles at its target
- Wind charges deal a small amount of damage when colliding directly with an entity
- After colliding with an entity or a block, wind charge projectiles produce a wind burst, which knocks back entities in the area by several blocks
- Wind bursts also have the effect of 'activating' certain blocks:
  - Non-Iron Doors and Trapdoors are flipped
  - Fence Gates are flipped
  - Buttons are pressed
  - Levers are flipped
  - Bells are rung and swung
  - Lit Candles (both standalone and on cake) are extinguished
- Wind bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

## Known Parity Breaks

- Breeze does not have any non-jump movement during combat
- Breeze does not deflect projectiles
- Breeze does not avoid trapdoors

## Trial Spawner

- Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion and can have variable levels of challenge in multiplayer
- The challenge level will increase for each new player a Trial Spawner notices nearby
  - Challenge level will not decrease until it is reset during a Trial Spawner's cooldown
- Unlike normal spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
  - It can only spawn a mob at positions that are within line of sight
  - It can spawn a mob regardless of any light level requirement the mob has
  - Spawned mobs are persistent
- Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
  - After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes during which it will no longer spawn mobs
- Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
- Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
- When placed in Creative, Trial Spawners have no mob type set by default
  - The mob type can be set by interacting with it while holding a Spawn Egg
- Creative and Spectator players cannot be detected or noticed by Trial Spawners

## Trial Chambers

- Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges during the mid-game
  - Trial Chambers are made out of a variety of Copper and Tuff blocks and can be found in different sizes from large to small
  - Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
- The layout of each Trial Chamber is procedurally generated, and can include traps, reward chests and a variety of combat spaces
  - Supply chests can be found between different rooms, and give you blocks and items which help you navigate your trials
  - Reward chests are guarded by challenges in each room, and can be a source of enchanted books and equipment
  - The loot found in reward chests are still being iterated, and are absolutely not final
- Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
  - Melee
    - Zombie
    - Husk
    - Slime
  - Small Melee
    - Spider
    - Cave Spider
    - Baby Zombie
    - Silverfish
  - Ranged
    - Skeleton
    - Stray
- Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
  - For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
  - The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes

## Known issues

- The corridors sometimes end with a dead end
- Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber
- Loot tables can contain wrong items or wrong quantities of items

## Trial Key

- An item that can only be obtained from Trial Spawners
- Trial Keys do not currently have any functionality

## Crafter

- Updated Crafter textures

## Tuff Bricks

- Updated Tuff Bricks texture

# Features and Bug Fixes

## Boat

- Fixed an issue that made Boats clip through blocks when placed

## Gameplay

- Container blocks triggered with Redstone (e.g. hopper, dispenser) can now be interacted with consistently when powered by a fast Redstone clock
- Fixed an issue that could inflict unexpected fall damage in certain cases when building blocks while moving ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140), [MCPE-175791](https://bugs.mojang.com/browse/MCPE-175791))
- Players no longer fall through the block they stand on when switching to Spectator mode and back ([MCPE-170522](https://bugs.mojang.com/browse/MCPE-170522))

## General

- Added more informative error messaging in case world exports fails due to external OS issue ([MCPE-41898](https://bugs.mojang.com/browse/MCPE-41898))
- Improved delay between 100% Loaded and when main menu appears on console platforms

## Character Creator

- In horizontal split screen, second player can now navigate to the profile screen, and both players can now see each others' character changes

## ‘How To Play’ Section

- Updated the information about Conduits in the How to Play section ([MCPE-65038](https://bugs.mojang.com/browse/MCPE-65038))
- Added Netherite as a block type in the Encyclopedia Beacon tab ([MCPE-175929](https://bugs.mojang.com/browse/MCPE-175929))

## Items

- Fixed issue where eating an Apple does not slow down player movement ([MCPE-176556](https://bugs.mojang.com/browse/MCPE-176556))

## Realms

- Increased the maximum render distance in Preview on Realms to 20 chunks. We will be collecting data and feedback on the change to determine what render distance increase we can bring to normal Realms. Please share your feedback with us on the feedback discord server or on the [feedback site](https://feedback.minecraft.net/hc/en-us/community/posts/21353469341581).
- Add an unread post count indicator to the Feed button on the play screen and slots screen

## User Interface

- Fixed a bug where certain chat messages would briefly be incorrectly shown on the new death screen

# Technical Updates

## API

- Changed *itemStack* in *ItemReleaseUseAfterEvent* to be optional
- Released DataDrivenEntityTriggerAfterEvent from *beta* to *1.8.0*
- Released DataDrivenEntityTriggerAfterEventSignal from *beta* to *1.8.0*
- Released DataDrivenEntityTriggerAfterEventSignalOptions from *beta* to *1.8.0*
- Released DefinitionModifier from *beta* to *1.8.0*
- Released WorldAfterEvents.dataDrivenEntityTriggerEvent from *beta* to *1.8.0*
- Improved error messages for "Unsupported or out of bounds value." errors to include the bounds

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [**how to use**](https://aka.ms/LearnEditor) the Editor, join the [**GitHub Discussion**](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [**starter kit**](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [**samples**](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Fixed editor screen freeze bug caused by CTRL+TAB shortcut. 
- New API! Simulation paused state is now available for editor scripting via the editor global object's simulation property. 
- Menu items now have a checked property, of type boolean \| undefined. If the value is defined, the menu will show a checkmark if the value is true.
- Added an \`all\` optional parameter to the \`/reload\` slash command when running in Editor mode which enables a full warm reload of the entire Editor. 

## Entity Components

- Entity event response run_command has been renamed to queue_command and has been released out of experimental. Commands run via queue_command may be deferred until the next tick. If the entity is removed before the command is run, the command will not execute. Content using run_command under experimental will still work for now but the experimental feature is now considered deprecated

## Items

- Unrecognized fields in component item jsons will now give a warning to the content log in format versions 1.20.60 and higher

## Loot Tables

- Decorated Pots now support the use of loot tables

# Experimental Technical Features

## Graphical

- Improved performance by fixing a GPU resource allocation bug that resulted in constant reallocations every frame in the Deferred Technical Preview

## API

- PlayerPlaceBlockBeforeEvent
  - Removed *itemStack: ItemStack* from event
  - Added *readonly permutationBeingPlaced: BlockPermutation* to event
  - Updating *createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions)* to return a boolean. True if the explosion is successful and false if the explosion is unsuccessful or is cancelled.
- Class Player
- Added method *spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;*.
