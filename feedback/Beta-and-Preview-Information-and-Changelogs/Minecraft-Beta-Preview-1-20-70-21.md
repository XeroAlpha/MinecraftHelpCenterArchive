---
title: Minecraft Beta & Preview - 1.20.70.21
date: 2024-01-31T17:10:20Z
updated: 2024-02-05T09:32:43Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23693972754957-Minecraft-Beta-Preview-1-20-70-21
hash:
  h_01HNG7NYQBZ0YBS3K63A5FSGFH: information-on-the-minecraft-preview-and-beta
  h_01HNG81NVW9R87QKR59K2XD2QT: experimental-features
  h_01HNG81NVX0ENFC0DES9PA8SSD: vault
  h_01HNG81NVX9FFFNRTRZGSKWPS9: armadillo
  h_01HNG81NVXSXWFSKW6SPBPW10V: breeze
  h_01HNG81NVX3H7CWCVN30DBGRQV: features-and-bug-fixes
  h_01HNG81NVXDA3MTS9GJM8JKDSP: commands
  h_01HNG81NVX63EYC9PC16F3JNZQ: items
  h_01HNG81NVXSKZ51CJ4QYXCHHKG: marketplace
  h_01HNG81NVX100280Q8QMD0JP9X: mobs
  h_01HNG81NVX6F1JWDGBBZHTZBGA: realms
  h_01HNG81NVXH8CWE2VYYJ1CBQKK: technical-updates
  h_01HNG81NVXZ77198QWE3JDQ5EC: blocks
  h_01HNG81NVXV1EVQCQ3JM101RPG: components
  h_01HNG81NVX3VTWDAZN0SJRFTWB: editor
  h_01HNG81NVXSVBQDXC3KYGEHYWR: entity-filters
  h_01HNG81NVXVHCGRWCZ2VADTGGJ: items-1
  h_01HNG81NVX82VJ9Q29A4H0SACV: molang
  h_01HNG81NVXFB16VFR51QH4ERJJ: stability-and-performance
  h_01HNG81NVXH80JP3QA0TS46E68: experimental-technical-updates
  h_01HNG81NVX6JDQ9NDSM42A0F98: api
  h_01HNG81NVX6AA0FKS7GR1HBEEP: dimension
  h_01HNG81NVXM2HTN0FW63ZZR0FZ: graphical
---

**Posted:** 31 January 2024

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft scene of a trial chamber. There is a vault block in the front, with a trial key beside it. In the background are two breeze mobs.](https://feedback.minecraft.net/hc/article_attachments/23693972746253)

In this week’s Bedrock Preview and Beta we’re bringing you three things I am *particularly* excited about. Grudge-bearing armadillos! (Now they’ll *remember* who hit them last and view that player as a threat.)  Breeze vs. iron golem battles! (The one we’ve all been waiting for) And finally a brand new block: the vault! The vault is especially exciting for those who like playing multiplayer, as it makes it far more rewarding for everyone in your party – literally. That’s because the vault (unlike chests) can be unlocked and looted by multiple players (although *only once per player*). So no more crying over empty chests! Now you only need to cry if you accidentally hit an armadillo – because they’ll remember. For 10 whole seconds!

Here’s a list of what’s new. As always, we love to hear your feedback, so please let us know what you think [here](https://aka.ms/mcvaultsfeedback), and report any bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

# Experimental Features

## Vault

- A block that holds locked treasure and loot - find the right key to eject its rewards
  - Found throughout Trial Chambers, containing the structures' most valuable loot
  - Vaults in Trial Chambers require a Trial Key to be unlocked
- Can be unlocked by an unlimited amount of players
  - After a player has unlocked a Vault, they cannot unlock that Vault again
  - If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
- Has a keyhole that will be open or closed depending on the players nearby
  - If any nearby player has not unlocked that Vault, the keyhole will be open
  - If all nearby players have unlocked that Vault, the keyhole will be closed
- Within its cage, it will cycle through and display items which are possible to eject from its loot table
- The rewards it ejects are randomized from its loot table each time it is unlocked
- Vaults currently reuse the same loot table that reward chests previously used in the Trial Chambers
  - This loot table is temporary and will be completely revised as development continues
- Cannot be crafted or obtained in Survival mode, and does not drop anything when mined
- Explosion-resistant and cannot be moved

## Armadillo

- All sounds emitted by Armadillos are now audible even when the player is facing away 
  - Armadillos now keeps track of the last player who hit them, regarding them as a threat for 10 seconds
- Hurt sounds emitted by rolled-up Armadillos have been updated 

## Breeze

- Breeze is now aggressive toward Iron Golems, in addition to players
- Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, and Slimes
  - The above mobs don't retaliate when hurt by the Breeze's Wind Charge projectile
- Fixed the Breeze's run particles to pick up particle color/texture from Leaf blocks if that's the block immediately below the Breeze

# Features and Bug Fixes

## Commands

- Added "has_property" filter for entity target selector that allows for targeting based on the type and value of properties
- The /damage command no longer contains the damage type 'suicide'. It is replaced with 'self_destruct' ([MCPE-174865](https://bugs.mojang.com/browse/MCPE-174865))

## Items

- In Realms, attempting destruction of one Sea Turtle Egg on a stack of more than one in Creative no longer destroys two at once ([REALMS-10477](https://bugs.mojang.com/browse/REALMS-10477))
- Spawn Eggs are now called "\[Mob\] Spawn Egg" instead of "Spawns \[Mob\]" so that players can more easily search for them in the Creative inventory

## Marketplace

- Fixed a bug that could cause the loading screen to get stuck for some time at 41% ([MCPE-175550](https://bugs.mojang.com/browse/MCPE-175550)) 

## Mobs

- When fed, baby mobs now emit both sound and particles 
- All sounds emitted by Phantoms are now audible even when the player is facing away ([MCPE-133125](https://bugs.mojang.com/browse/MCPE-133125))
- All sounds emitted by Wardens are now audible even when the player is facing away ([MCPE-159481](https://bugs.mojang.com/browse/MCPE-159481))

## Realms

- Added a new story type called "Realm Events". These new stories are automatically posted to the feed when interesting events happen on your Realm. The more you play, the more you'll find.
- Fixed an issue with time stamps on Stories being centered instead of displaying in the top right corner.
- Fixed a crash caused by Realms Stories pagination.
- Fixed a crash that could occur when using a gamepad to go back from the Members tab in Realms Stories 
- Fixed issue with time blocks not rendering correctly after changing the time zone on PlayStation.
- Fixed an issue with the screen reader narrating unavailable Realms pages.
- Fixed an issue where GUI scaling being turned off caused most of Realms Plus PDP text to be missing.
- Fixed an issue where user would get an error message incorrectly displaying on the "Choose a Preview Realm" screen after they had backed out of the "Choose a Subscription" screen.

# Technical Updates

## Blocks

- "double_wooden_slab" block is now split into unique instances "oak_double_slab", "spruce_double_slab", "birch_double_slab", "jungle_double_slab", "acacia_double_slab", "dark_oak_double_slab"
  - This requires a "format_version" of 1.20.70 or higher

## Components

- "damage_sensor" component's "damage_modifier" and "damage_multiplier" fields are now properly considered during damage immunity calculations, so that damage adjusted to be lesser or equal to the highest damage received during an entity's immunity period will be accurately ignored ([MCPE-167651](https://bugs.mojang.com/browse/MCPE-167651))
  - This requires a world version of 1.20.70 or higher

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Fixes this week:

- Fixed a bug where the reload modal failed to appear when pressing the button with multiple connected players

## Entity Filters

- Added new entity filter "was_last_hurt_by", which checks if the subject is the last player or mob to have recently attacked the entity

## Items

- Custom armor attachables can now be trimmed with vanilla trims, and modified vanilla patterns can be applied to custom armor attachables and items  
  - Vanilla trim textures can be overridden via the attachable component
  - Vanilla trims can be applied to custom geo armor via the attachable component
  - Modified vanilla trim patterns (to fit the new geo armor) can be applied via the attachable component
  - Armor trim patterns on custom armor requires the 1.20.60+ format version for the attachable and item

## Molang

- *surface_particle_color*, *query.surface_particle_texture_coordinate*, and *query.surface_particle_texture_size* are now versioned with 1.20.70 to allow the three queries to see leaf blocks as the surface texture below the block. Molang versions lower than 1.20.70 will continue to not see the leaf block below them
- This change takes effect for Molang queries in packs that have a manifest.json min_engine_version of 1.20.70 or higher.

## Stability and Performance

- Removed *ItemFrameDropItemPacket* 

# Experimental Technical Updates

## API

- Entity Components
  - Added *EntityTypeFamilyComponent*with functions *getTypeFamilies(): string\[\]* and *hasTypeFamily(typeFamily: string): boolean*
- Item
  - Moved *ItemFoodComponent*from *beta* to *1.9.0*
  - Added function *matches(itemName: string, states?: Record\<string, boolean \| number \| string\>): boolean*
- Removed class *BlockVolumeUtils*. Moving utility functions onto *BlockVolumeBase*and *BlockVolume*
- Added class *BlockVolumeBase*. Is the base class from which block volumes will extend
- BlockVolume
  - **Breaking Change** Converted *BlockVolume* from an interface to a class which extends *BlockVolumeBase*
- *@minecraft/server.Entity.playAnimation*
  - Moved Entity.playAnimation from *beta* to *stable*
- Moved enum *BlockPistonState*from *beta* to *1.9.0*
- Moved class *BlockPistonComponent*from *beta to 1.9.0*
- Moved class *PistonActivateAfterEvent*from *beta* to *1.9.0*
- Moved class *PistonActivateAfterEventSignal*from *beta to 1.9.0*

## Dimension

- *Dimension.getEntities* now only returns the entities within the dimension that's being queried

## Graphical

- Enabled the Deferred Technical Preview for iOS devices
- Added Point Light Shadows to the Deferred Technical Preview. This new feature allows light sources such as torches and lanterns to cast shadows
  - Note that depending on your current Shadows Quality setting, this feature may be disabled by default. A new label and tooltip have been added to the Deferred Graphics section in Video Settings to indicate if point light shadows are currently on/off.
  - Some instability may arise when using this new feature in tandem with "Ultra" settings for other features. If you experience crashes, then lowering some visual settings may help alleviate the issue until it is resolved.
- Fixed the lighting of the Allay in Deferred Technical Preview
