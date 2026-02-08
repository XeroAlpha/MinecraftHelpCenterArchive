---
title: Minecraft Beta & Preview - 1.20.50.22
date: 2023-10-25T10:50:17Z
updated: 2023-10-25T18:38:51Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20699536679309-Minecraft-Beta-Preview-1-20-50-22
hash:
  h_01HBVR6KM8JCTEG8SDY8V3WBB3: information-on-the-minecraft-preview-and-beta
  h_01HDKGHEPQSWMFBJ5HHWZ44QKX: experimental-features
  h_01HDKGHEPQ6HS70Y2G83EPPR5G: copper-block-family
  h_01HDKGHEPQB6J3TZNS5ZE1CH1B: chiseled-copper
  h_01HDKGHEPQCA0580ZXAJTZ0B2Y: copper-grate
  h_01HDKGHEPQP6R769AB0GYSDTE5: copper-bulb
  h_01HDKGHEPQKMNJ3P3486RHJTNB: copper-doors-and-trapdoors
  h_01HDKGHEPQ61MAM0R3HYYM01KV: tuff-block-family
  h_01HDKGHEPQVQ61Q0NNA4BFMXBD: known-issues-for-these-experimental-blocks
  h_01HDKGHEPQKB850C3YT22ZWFF9: features-and-bug-fixes
  h_01HDKGHEPQZJCY13AEFQV845WE: bat
  h_01HDKGHEPQ3TVCFJ2GSDKCH6YZ: blocks
  h_01HDKGHEPQT0KTT3JACTREZH9T: decorated-pots
  h_01HDKGHEPQMW3ST6X45ZT7CD3B: gameplay
  h_01HDKGHEPQBAMSGQK70WJ0JMDH: mobs
  h_01HDKGHEPQM9JCWM6216ZP6CJC: touch-controls
  h_01HDKGHEPQQQWJE7VE5XRJQ09Z: user-interface
  h_01HDKGHEPQN9TYMHPKBGPQBH10: technical-updates
  h_01HDKGHEPQD9DSFGKZ1DTGVHEH: cameras
  h_01HDKGHEPQPXZS1AA61STA86BK: add-ons-and-script-engine
  h_01HDKGHEPQM7FVQAFKK18N5YH7: api
  h_01HDKGHEPQTNKKBT12GXN3HE6A: editor
  h_01HDKGHEPQY725ZSM1D1SEW6VY: graphical
  h_01HDKGHEPQC0N90W0ZNA0WDXHE: items
  h_01HDKGHEPQAV9N482K6TAQPGQX: experimental-technical-features
  h_01HDKGHEPQFN2SGP4Z2JQ7WD31: gametest
  h_01HDKGHEPQBEDFKG7W52CPTTNR: graphical-1
  h_01HDKGHEPRFARAHH67KR29K6QH: script-api
  h_01HDKGHEPRQSTW9WFQFFTKQSES: api-1
---

**Posted:** 25 October 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![The new copper and tuff blocks in the Minecraft Preview. There are some redstone builds in the scene, and a bat in the foreground sporting a new look](https://feedback.minecraft.net/hc/article_attachments/20699846496141)

It’s October in Sweden, and the leaves outside are changing from green to orange faster than copper can oxidize! I could spend this whole changelog waxing lyrical about the new decorative blocks coming to experimental testing this week, but instead how about I tell you to look out for the copper trapdoor, copper door, copper grate, and chiseled copper block! All of these can be waxed, chiseled, and scraped to your heart’s content, so you can color co-ordinate with pumpkins *or* creepers. Also coming to testing is a new set of tuff blocks (finally, tuff stairs!) and, a new bat texture! As ever, we’d love your feedback on these new features. Send us your thoughts [here](https://aka.ms/Minecraft121Feedback) and report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)!

*(**Please note:** Thanks for your patience! This Preview and Beta has now started rolling out.)\
\*

# Experimental Features

## Copper Block Family

- The Copper family of blocks has been expanded, including:
  - Chiseled Copper
  - Copper Grate
  - Copper Bulb
  - Copper Door
  - Copper Trapdoor
  - Oxidized and waxed variants of all the above

## Chiseled Copper

- Crafted with 2 Cut Copper Slabs of a shared oxidation level
- Can be crafted in the Stonecutter

## Copper Grate

- A new type of decorative block unique to the Copper family
- Crafted with 4 Copper Blocks of a shared oxidation level
  - Can be crafted in the Stonecutter
- Properties:
  - Transparent and allows light to pass through
  - Mobs cannot suffocate inside them
  - Cannot conduct Redstone
  - Hostile mobs cannot naturally spawn on them

## Copper Bulb

- A light-emitting block that can toggle its light emission through Redstone pulses
- Oxidizes like other Copper blocks, and emits less light the more oxidized they are
  - Copper Bulb: Light level 15
  - Exposed Copper Bulb: Light level 12
  - Weathered Copper Bulb: Light level 8
  - Oxidized Copper Bulb: Light level 4
- When placed, its light is off by default
  - While the Copper Bulb is unpowered, it will toggle its light on or off when it receives a Redstone pulse
  - Copper Bulb light will stay on even when the Redstone source is removed until it receives another Redstone pulse to toggle it off
- A Redstone crystal will glow in the center of Copper Bulbs while it is powered by a Redstone signal
- Comparators will read a signal strength of 15 if the Copper Bulb's light is on
- Does not conduct Redstone power
- Can craft 4 Copper Bulbs with:
  - 3 Copper Blocks of a shared oxidation level
  - 1 Blaze Rod
  - 1 Redstone Dust

## Copper Doors and Trapdoors

- Copper variants of Doors and Trapdoors that can oxidize over time and be waxed
- Works like wooden Doors in that they can be opened and closed with interaction as well as Redstone
- Crafted with Copper Blocks of a shared oxidation level

## Tuff Block Family

- Tuff has been expanded to have its own family of blocks, including:
  - Stair, Slab, Wall, and Chiseled variants
  - Tuff Bricks with Stair, Slab, Wall, and Chiseled variants
  - Polished Tuff with Stair, Slab, and Wall variants
- All Tuff variants can be crafted in the Stonecutter

## Known Issues for these Experimental Blocks:

- Waxed Copper Grate - can be crafted on the Crafting Table with Honeycomb, but crafting directly from Waxed Copper Blocks isn't working for the Crafting Table or Stonecutter
- Chiseled Copper - can't be crafted via the Crafting Table
- Waxed Chiseled Copper - can be crafted on the Crafting Table with Honeycomb, but crafting directly from Waxed Copper Blocks isn't working for the Crafting Table or Stonecutter
- Tuff Blocks - can't be crafted via the Crafting Table but can via the Stonecutter

# Features and Bug Fixes

- Known issue in this update: Creative Flight speed is greatly reduced after touching the ground

## Bat

- The Bat now has a new look, thanks to an updated model, animations, and texture

## Blocks

- A Sticky Piston pulling a retracting Sticky Piston that is pulling a player and another block no longer crashes the game ([MCPE-175790](https://bugs.mojang.com/browse/MCPE-175790))
- Chorus Flowers can now be destroyed by any projectile, which will no longer disappear after impact 

## Decorated Pots

- The sounds emitted by Decorated Pots breaking have been made "smashier" 

## Gameplay

- Fixed an issue where players couldn't block with a shield after releasing to use an item that had left their inventory ([MCPE-171346](https://bugs.mojang.com/browse/MCPE-171346)) 

## Mobs

- Leads will no longer break if a leashed mob is not in the same chunk as the leash holder upon reloading a world ([MCPE-157182](https://bugs.mojang.com/browse/MCPE-157182))
- Mobs on fire no longer spread fire to their target when holding something in their main hand 
- The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions. 
  - The mobs affected by this change are Axolotl, Bee, Blaze, Cave Spider, Dolphin, Drowned, Enderman, Endermite, Fox, Hoglin, Husk, Iron Golem, Panda, Piglin, Piglin Brute, Pillager, Silverfish, Skeleton, Spider, Stray, Vindicator, Warden, Wither Skeleton, Wolf, Zoglin, Zombie, Zombie Pigman, and Zombie Villager
  - The new reach calculation is the attacking mob's bounding box extended by 0.8 blocks horizontally. If this extended box overlaps the target's bounding box, then the attack can reach
  - This change does not affect the reach of players

## Touch Controls

- Fixed an issue where the player could enter touch control customization without having touch controls ([MCPE-175530](https://bugs.mojang.com/browse/MCPE-175530)) 

## User Interface

- The loading screen now displays 3 categories of tips based on player progression

# Technical Updates

## Cameras

- Added a content warning for when the camera is placed outside of the player's chunk radius 

## Add-Ons and Script Engine

- Added a *Clear* button to the content log screen

## API

- Added initial NPC support to scripting with the *EntityNpcComponent*

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Added API class SettingsManager which will contain settings categories as properties.
  - Added property settings: SettingsManager to ExtensionContext API.
- Added API class GraphicsSettings with get, getAll, set and setAll functions to manage graphics settings properties.
- Added API enum GraphicsSettingsProperty and type GraphicsSettingsPropertyTypeMap for available graphics settings properties.
- Updated Grapple “Quick Teleport” functionality to use Camera API. Grapple to fast teleport to a target block using “G.” Grapple to frame up a Selection using “F.”

## Graphical

- When a particle emitter is added to an entity but particles simulate in world, particles now correctly collide with the world

## Items

- Renamed "minecraft:use_duration" to "minecraft:use_modifiers" and added a "movement_modifier" parameter in json format versions 1.20.50 and higher 
- Deprecated "minecraft:chargeable" in json format versions 1.20.50 and higher. Use "minecraft:use_modifiers" instead for "movement_modifier" behavior

# Experimental Technical Features

## Gametest

- *SimulatedPlayer*
  - *stopUsingItem* now returns the item that was being used

## Graphical

- Fixed heightmaps appearing inverted in the deferred technical preview 

## Script API

- Fixed *@minecraft/server-ui* forms not correctly rendering player scoreboard information when embedded in rawtext

## API

- Fixed *target* property to be of type *Entity* or *undefined* as the entity may not have a target 
- EntityHitInformation
  - Fixed *entity* property to be of type *Entity* or *undefined* as the entity may be undefined 
- EntityInventoryComponent
  - *container* member variable now correctly reflects it can be a Container or undefined 
  - *entity* member variable now correctly reflects it can be a Entity or undefined 
- *ItemStartUseOnAfterEvent*
  - *itemStack* is now optional
- *ItemStopUseAfterEvent*
  - *itemStack* is now optional
