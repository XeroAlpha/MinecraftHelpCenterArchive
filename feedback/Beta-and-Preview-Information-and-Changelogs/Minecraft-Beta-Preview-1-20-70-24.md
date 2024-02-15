---
title: Minecraft Beta & Preview - 1.20.70.24
date: 2024-02-15T12:37:44Z
updated: 2024-02-15T18:45:50Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/24139781551117-Minecraft-Beta-Preview-1-20-70-24
---

**Posted:** 15 February 2024

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

*![Kai is in a Mangrove swamp using wind charges against a Bogged mob. They are battling near an overworld portal ruin.](https://feedback.minecraft.net/hc/article_attachments/24141679587853)*

*Whoosh*! Did you hear that? No, it wasn’t the sound of a poison arrow (more on *that* later) – it was the wind charge, which is coming to Bedrock Edition preview and betas TODAY. The wind charge is an item that lets you harness some of the breeze’s powers – like being able to leap extra high, and shoot gusts of wind at your enemies to deal impact damage *and* knockback. Dropped by defeated breezes, I’m going to use my wind charge to jump straight to: the bogged! The bogged is a new hostile mob that can spawn in the trial chambers, and attacks with poison-tipped arrow. The bogged might be slightly weaker than their skeleton cousins, but what they lack in speed, they make up for in damage! Face up against the bogged, test the new wind charge and more in today’s preview and beta for Minecraft: Bedrock Edition.

Here’s a list of what’s new. As always, we love to hear your feedback, so please let us know what you think [here](https://aka.ms/mcvaultsfeedback), and report any bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).

# Experimental Features

## Wind Charge

- Become the Breeze! Using a Wind Charge will fire off a Wind Charge projectile similar to the Breeze's
- A Wind Charge fired by a player will grant 10% more knockback than a Breeze's
- Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
- The Breeze drops between 4-6 Wind Charges when killed
- Wind Charges have a max stack size of 64
- There is half a second cooldown after each use
- Wind Charges can be fired from a dispenser
- Players that launch themselves with a Wind Charge only accumulate fall damage below the y-level of where they collided with the wind burst

## Bogged

- A new variant of Skeletons that shoot poisonous arrows
  - They're faster to take down with 16 health instead of 20 health
  - They attack at a slower interval of 3.5 seconds instead of 2 seconds
- Has a chance to drop Arrows of Poison when killed by players
- These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
  - Can also be found spawning from Trial Spawners in some Trial Chambers

## Breeze

- Added missing translation string for the Wind Charge projectile ([MCPE-176968](https://bugs.mojang.com/browse/MCPE-176968))
- The Breeze now takes damage when being hit by Wind Charge projectiles

## Trial Chambers

- Trial Chambers now generate at the same world locations as Java Edition

## Bug Fixes

- Skeletons, Zombies, Husks, Spiders, Cave Spiders, and Strays retaliate against attacks from each other again ([MCPE-178560](https://bugs.mojang.com/browse/MCPE-178560))
  - Additionally, they properly refrain from retaliating when struck by Wind Charges fired by the Breeze

# Features and Bug Fixes

## Blocks

- Patternless Banners taken from the Creative Inventory will no longer reset when first placed ([MCPE-178327](https://bugs.mojang.com/browse/MCPE-178327))
- Tall Flowers are no longer affected by Fortune ([MCPE-18880](https://bugs.mojang.com/browse/MCPE-18880))
- Large Ferns now have a chance of dropping Wheat Seeds ([MCPE-126947](https://bugs.mojang.com/browse/MCPE-126947))
- Tweaked the loot drop distributions for Fortune enchantment of Melon, Redstone Ore, Glowstone, and Nether Wart to better match Java Edition

## Commands

- The Command Block's interface will now remove the last error message after successfully compiling a command ([MCPE-114029](https://bugs.mojang.com/browse/MCPE-114029))

## Game Tips

- Added gradual rollout of contextual beginner game tips

## Realms

- Fixed random crashes when accessing Realms stories after triggering Realms events due to a race condition between adding new story status entries and Clubs feed sorting
- Added new loading screen tips for Realms Stories
  - Known issue: New tips do not work on Android Beta
- Changed the Realms Stories Privacy and Online Safety modal on Xbox platforms to display a QR code instead of a link

## Stability and Performance

- Fixed an issue that could cause the game to freeze when changing languages on some platforms

## User Interface

- The new death screen is now enabled when resource packs are applied to a world (Preview only)
- Fixed an issue where the game could softlock while displaying the "Loading resource packs" modal

# Technical Updates

## Add-Ons and Script Engine

- Blocks using the "minecraft:material_instances" component with "render_method" = "alpha_test_single_sided" display properly when in the player's hand

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Fixed incorrect negative sign in Cursor Delta display in the status bar
- Added a 'border: true\|false' option to the Editor remote pane TextComponent
- Added a text component to the Information section in the Playtest dialog
- Created a "blockPalette" service in the Extension Context that contains "getSelectedBlockType" and "setSelectedBlockType". This will be used to store the block type that is going to be painted to the world. The Selection, Cube Brush, and Line tools have been updated to use this service!
- Added a stateful menu to toggle Overworld weather in World Options.

## Marketplace Server Driven Layouts (SDL)

- Added the ability for SDL screens to have non scrollable layouts
- Added the ability for layouts to contain vertical fill padding
- Fixed vertical fill objects not working in vertical factories within the user interface

## Character Creator

- Added a new model to contain the character creator animation logic
- Updated the logic that was done to trigger updating the binds when the animation states have been updated, so we do not run into issues with the binds updating every frame causing a major framerate hit

## Stability and Performance

- Implemented a fix for the “One Block Skyblock” Marketplace map generating flat world in the distance on the client if the map was uploaded on Realms
  - Clients connected to a dedicated server or Realms will no longer improperly generate LevelChunks on the client if one of the following is true:
    - The map is a flat world
    - It's a Marketplace map
  - This overrides server.properties setting client-side-chunk-generation-enabled for dedicated servers

# Experimental Technical Updates

## API

- Moved *setDynamicProperty* from *beta* to 1.9.0
- Moved *getDynamicProperty* from *beta* to 1.9.0
- Moved *getDynamicPropertyIds* from *beta* to 1.9.0
- Moved *getDynamicPropertyTotalByteCount* from *beta* to 1.9.0
- Moved *clearDynamicProperties* from *beta* to 1.9.0
- Added *structureManager* - A *StructureManager* instance that allows you to create, load and place structures in the world
- StructureManager
  - Added function *createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): StructureTemplate* - Creates a new empty structure
  - Added function *createFromWorld(identifier: string, dimension: Dimension, blockVolume: BlockVolume, options?: StructureCreateOptions): StructureTemplate* - Creates a new structure from blocks in the world
  - Added function *delete(structure: string \| StructureTemplate): boolean* - Deletes the structure
  - Added function *get(identifier: string): StructureTemplate \| undefined* - Gets the structure with the specified identifier
  - Added function *place(structure: string \| StructureTemplate, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions)* - Places a structure in the world
- StructureTemplate
  - Added read-only property *id: string* - Returns the name of the structure
  - Moved *effectAdd* from *beta* to 1.9.0
