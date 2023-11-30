---
title: Minecraft Beta & Preview - 1.20.60.21
date: 2023-11-28T19:24:04Z
updated: 2023-11-30T18:12:18Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/21754158247437-Minecraft-Beta-Preview-1-20-60-21
---

**Posted:** 29 November 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Picture1.jpg](https://feedback.minecraft.net/hc/article_attachments/21754860127885)

We have another exciting Minecraft Beta and Preview update, with lots of tweaks and fixes that we think you’re going to love! As always, we’d want to hear your feedback on these features, so please send us your thoughts and suggestions [here](https://aka.ms/Minecraft121Feedback) and report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)!

**NOTE:** This version is now available on Android devices as well! Thanks for your patience.

# Experimental Features

## Chiseled Copper

- Chiseled Copper and their variants can now be crafted in the Stonecutter with Cut Copper ([MCPE-176595](https://bugs.mojang.com/browse/MCPE-176595))

## Copper Grate

- Copper Grates and their variants can now be waterlogged ([MCPE-176379](https://bugs.mojang.com/browse/MCPE-176379))
- Copper Grate doesn't turn into Waxed Copper anymore when being waxed ([MCPE-176373](https://bugs.mojang.com/browse/MCPE-176373))

# Features and Bug Fixes

## Blocks

- Frosted Ice blocks no longer leave water in the world when mined with a Silk Touch tool
- Turtle Egg, Frogspawn, Coral, and Coral Fan no longer spawn double the particles when mined
- Beehive and Bee Nest can no longer be silk touched by an Enchanted Book with Silk Touch
- Destroying a Bed through the bottom block now properly clears the spawn point
- Ice, Packed Ice, Frosted Ice and Top Snow now send vibrations when mined
- Campfire now correctly drops 2 Charcoal instead of 4 when destroyed by the player ([MCPE-159894](https://bugs.mojang.com/browse/MCPE-159894))

## Customizable Touch Controls

- Fixes a bug where the hotbar disappeared if you exited out of the customize touch controls screen with a non-touch controller input

## Gameplay

- Slabs and Stairs should no longer randomly start placing on the bottom when continuously building ([MCPE-54855](https://bugs.mojang.com/browse/MCPE-54855))
- Horses, Donkeys, and Mules now take fall damage when controlled by a player, except for worlds targeting base game versions before 1.20.60 ([MCPE-107031](https://bugs.mojang.com/browse/MCPE-107031))

## Vanilla Parity

- Nether Gold Ore can now drop up to 6 Gold Nuggets (previously 5) when mined with an unenchanted tool, or up to 24 with Fortune Level 3 (previously 20)
- Lapis Lazuli Ore can now drop up to 9 Lapis Lazuli (previously 8) when mined with an unenchanted tool, or up to 36 with Fortune Level 3 (previously 32)

## Graphical

- Fixed incorrect block lighting after exiting water with the "Improved Input Response" option enabled ([MCPE-175727](https://bugs.mojang.com/browse/MCPE-175727))

## Input

- Fixed the issue that prevented the inventory from being navigated when using only a keyboard on mobile
- Fixed the issue prevented stack splitting from being used when using a keyboard in touch mode

## User Interface

- A bug making the "technical details" button on resource packs not leading to the technical details screen has been fixed
- Fixed Beacon UI buttons going outside the window on smaller resolutions ([MCPE-173649](https://bugs.mojang.com/browse/MCPE-173649))
- Items from the inventory have the durability bar adjusted so it matches the one from the hotbar ([MCPE-128532](https://bugs.mojang.com/browse/MCPE-128532))
- Adjusted cost text in the Pocket Anvil UI to match the classic version ([MCPE-101740](https://bugs.mojang.com/browse/MCPE-101740))
- Music Disc name text now has the same color as enchanted items ([MCPE-109471](https://bugs.mojang.com/browse/MCPE-109471))
- Added the first iteration of the new Friends drawer feature (Online/offline friends as a list, Add friends button renamed Search for players, you have no friends empty state and improved text to speech)

## Loading Screen

- The loading screen now displays 3 categories of tips based on player progression  
    

# Technical Updates

## Add-Ons and Script Engine

- Added a *Project Through Liquid*property to the 3D Block Cursor
- Added a *CursorPropertiesChangeAfterEvent*to notify Editor script when the cursor properties are changed
- Wandering Traders can now correctly display custom entity spawn eggs in their trade menus ([MCPE-170184](https://bugs.mojang.com/browse/MCPE-170184))

## AI Goals

- "behavior.breed" now interrupts navigation on stop for content using engine version 1.20.60 or higher

## API

- Released *DataDrivenEntityTriggerAfterEvent* from *beta *to *1.8.0*
- Released *DataDrivenEntityTriggerAfterEventSignal* from *beta *to *1.8.0*
- Released *DataDrivenEntityTriggerAfterEventSignalOptions* from *beta* to *1.8.0*
- Released *DefinitionModifier* from *beta *to *1.8.0*
- Released *WorldAfterEvents*.dataDrivenEntityTrigger from *beta *to *1.8.0*
- Moved *EffectAddBeforeEvent *from *beta *to *1.8.0*
- Moved *EffectAddAfterEvent *from *beta *to *1.8.0*
- Moved *EffectAddAfterEvent *from *beta* to *1.8.0*
- Moved *getTags *from *beta *to *1.8.0*
- Moved *hasTag *from *beta *to *1.8.0*
- *RGBA* interface now inherits from *RGB*

## Biomes

- Biome JSON files no longer support inheriting fields from other Biome JSON files. If this affects any content those files should be updated by manually copying the desired JSON text

## Components

- The "entity_sensor" component now supports multiple "subsensors":
- "event", "require_all", "minimum_count", "maximum_count", "range" and "event_filter" are now individually configurable fields of each subsensor
- Subsensors also have a new "cooldown" field, which defines how often each subsensor should sense for entities
- All these changes require a "format_version" of 1.20.60 or higher

## Editor

- Fix in *CompoundBlockVolumeIterator* that removes the addition of an extra block location in certain *CompoundBlockVolume* configurations
- Update Pause Actors in world options menu using stateful menus
- Added tool grouping support to Tool Rail
- Added *toolGroupId*property to *ExtensionOptionalParameters* API for organizing tools created in an extension
- Added *name*, *description*, *notes*and *defaultToolGroupId* properties to *Extension* API
- Added *extensionInfo: Extension*property to *ExtensionContext* API and removed *extensionName* property

## Entity Filters

- Added new entity filter "is_panicking", which checks if the entity is executing "behavior.panic"
- Added new entity filter "is_sprinting", which checks if the entity is sprinting

## General

- Renamed *json* to *water_splash_manual.json* in *resource_packs\vanilla\particles* ([MCPE-176784](https://bugs.mojang.com/browse/MCPE-176784))

## Molang

- Improved the context of content logs when an evaluated Molang expressions results in an error

## Performance and Stability

- Require block_id for each block in the StartGamePacket blockProperties

# Experimental Technical Features

## ![Picture2.jpg](https://feedback.minecraft.net/hc/article_attachments/21755225955725)

## Graphical

- Fixed texture z-fighting issues in Deferred Technical Preview
- Added Volumetric Fog and Light Shafts to the Deferred Technical Preview. This new feature works by approximating the scattering that occurs as light rays travel through the air, resulting in more realistic fog and a greater sense of scene depth. It also plugs into existing data-driving capabilities in Resource Packs for fog and volumes, so that Creators can customize the look and feel of fog under a variety of conditions; see the updated [Getting Started with Deferred Lighting](https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable) article on the Minecraft Creator Portal for more information

## API

- Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error
- Updated *SimulatedPlayer* so it can continuously build
- Updated *SimulatedPlayer* so it can Move and look in different directions
- ChatSendAfter & ChatSendBeforeEvent
  - Changed *message *and *sender *to readonly properties
  - Removed *setTargets*, *getTargets*, *sendToTargets *and replaced with an optional player list property *targets*
- Class ItemDurabilityComponent
  - Renamed *unbreaking* to *unbreakingEnchantmentLevel*
  - Renmaed *getDamageRange* to *getDamageChanceRange*
- EntityTypes
  - Changed *getAll *return type from *EntityTypeIterator *to *EntityType\[\]*
- EntityEquippableComponent
  - Fixed an issue where functions *getEquipment* and *getEquipmentSlot* could not be called within "before" event handlers
- Fixed a bug where an ItemStack could not be stacked after clearing its lore
