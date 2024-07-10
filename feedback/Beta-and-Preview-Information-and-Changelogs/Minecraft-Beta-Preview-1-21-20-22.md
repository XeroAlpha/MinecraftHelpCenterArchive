---
title: Minecraft Beta & Preview - 1.21.20.22
date: 2024-07-10T12:02:41Z
updated: 2024-07-10T14:36:39Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/28289283945869-Minecraft-Beta-Preview-1-21-20-22
hash:
  h_01J2EGQQKSK41633S8SD8SVD5M: features-and-bug-fixes
  h_01J2EGQQKSCX0ZTMGP8Q3XDW1M: accessibility
  h_01J2EGQQKSG7EKZDE6B3YPQAAD: blocks
  h_01J2EGQQKTQZKA19B7G74Q7BZZ: game-tips
  h_01J2EGQQKT9TSTXAVN16GZ9CCD: gameplay
  h_01J2EGQQKTS133E0AFCW5QVM1A: split-screen
  h_01J2EGQQKTRM3BCAMCX9CKMVX7: general
  h_01J2EGQQKTA7TYKYGT95EDD9H6: graphical
  h_01J2EGQQKTR918WV1BKNDQ3558: maps
  h_01J2EGQQKTP7ZB9P5DEPW8JFT1: mobs
  h_01J2EGQQKTGSJCBFHTE8QSFDG7: ominous-vault
  h_01J2EGQQKTTJYFJJW9T90ZEYRR: realms-invite-links
  h_01J2EGQQKTN4GCGR0X3AMTFK2M: realms-stories
  h_01J2EGQQKTD7AH81MWENBPRSVK: user-interface
  h_01J2EGQQKTP67EA7F53DK5GQ7M: technical-updates
  h_01J2EGQQKTFWJJNHCMJQE4GBC6: api
  h_01J2EGQQKTZGM02TMDAQ5M67GV: blocks-1
  h_01J2EGQQKTJEJDYEFXFX52CTFE: commands
  h_01J2EGQQKT4D96RT3HB7X37TR1: editor
  h_01J2EGQQKT3Q0HSF2JH1VWFNPN: entity-components
  h_01J2EGQQKTG0ZDAKVE7HVSFTGY: entity-filters
  h_01J2EGQQKT4ZMMMRREPS9ACN59: gameplay-1
  h_01J2EGQQKTN6QETW8PRGGKEFQ2: general-1
  h_01J2EGQQKTZHCMK80FVCP7RMSS: items
  h_01J2EGQQKTK3E3AXK1H4XQ1DK8: technical-experimental-updates
  h_01J2EGQQKTA709524890NB50KJ: api-1
  h_01J2EGQQKT6NP0QXRQFGPVS0M5: graphical-1
---

**Posted:** 10 July 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot taken with the updated water and reflections in the Deferred Technical Preview](https://feedback.minecraft.net/hc/article_attachments/28289283931661)

There’s a new Minecraft Preview and Beta rolling out, with more tweaks and bug fixes! Here’s a list of what’s new this week:

# Features and Bug Fixes

## Accessibility

- Fixed an issue where Screen Narration would not describe how to accept a game invitation on Android and iOS 
- Text to speech for UI now reads the how to play screens by hovering over, tapping on or navigating to the respective headers and paragraphs

## Blocks

- Trapdoors and Fence Gates no longer push players or mobs when activated by Redstone 
- Added VanillaBlockTag "one_way_collidable" that can be used to emulate the one way collision of Doors, Trapdoors, and Fence Gates that don't push out a mob when inside their collision box 
- The Rooted Dirt block now has unique sounds, to better match the Java Edition ([MCPE-121664](https://bugs.mojang.com/browse/MCPE-121664)) 
- Copper Door's "open" sound is now pitched differently 
- A damaged Anvil block may now spawn in Trail Ruins, as it would in Java Edition 
- "anvil" block is now split into unique instances: "anvil", "chipped_anvil", "damaged_anvil", "deprecated_anvil"
- "quartz_block" is now split into unique instances "quartz_block", "chiseled_quartz_block", "quartz_pillar", and "smooth_quartz"
- Smooth Quartz has had its destroy-time adjusted to match Java Edition ([MCPE-101893](https://bugs.mojang.com/browse/MCPE-101893)) 
- Pillar Quartz Block has been renamed to Quartz Pillar 
- "red_sandstone" block is now split into unique instances "red_sandstone", "chiseled_red_sandstone", "cut_red_sandstone", and "smooth_red_sandstone" 
  - "smooth_red_sandstone" destroy time changed from 0.8 to 2.0
- "dirt" block is now split into unique instances: "dirt" and "coarse_dirt" 
- "sand" block is now split into unique instances "sand" and "red_sand"

## Game Tips

- Added a game tip that informs players on touch devices that they are sneaking in order to avoid having new players stuck in crouch
- Added some minor tip interruption improvements for existing game tips

## Gameplay

- Fixed Torch item icon being temporarily misplaced when transferring it between the inventory and the hotbar when quick-moved ([MCPE-180913](https://bugs.mojang.com/browse/MCPE-180913))
- Mounts and vehicles are no longer given a slight velocity during a dismount

## Split Screen

- Fixed mob animations not playing when mobs were unloaded in split screen

## General

- Fixed an issue so that Marketplace content is properly imported before you create or start a world
- Legacy worlds no longer have chunks at the edge of the world that don't render

## Graphical

- Fixed fog JSON validation to allow for max_density_height and zero_density_height values to range from (-64,320)

## Maps

- Fixed an issue where structure icons or other map decorations were not visible at map edges on maps with unlimited tracking, such as Trial Explorer Maps ([MCPE-182681](https://bugs.mojang.com/browse/MCPE-182681))

## Mobs

- Bogged no longer levitates when riding a Boat, Raft, or Minecart ([MCPE-178876](https://bugs.mojang.com/browse/MCPE-178876))

## Ominous Vault

- Rare loot now has 80% chance of dropping from Ominous Vaults ([MCPE-180654](https://bugs.mojang.com/browse/MCPE-180654))

## Realms Invite Links

We are making some changes to how Realms invite links work to make it easier than ever to invite your friends and to keep your Realm safe from unwanted joiners:

- You can now create up to 5 invite links per Realm
- Invite links can be enabled or disabled at will, or set to have an expiration date in the future
- Invite links can be deleted entirely
- Newly created invite links codes will be 15 characters long (increased from 11)
- Existing Preview Realms will keep their existing invite links, but all new Preview Realms will start with 0 invite links by default moving forward

**Realms Bug Fixes**

- Fixed issues with the Realms button sticking around when it shouldn't or not showing up when it should
- Fixed a bug that locked players on an infinite loop after cancelling the process of joining a recently claimed preview Realm
- Fixed a bug where players with a freshly installed Minecraft needed to restart before being able to see Realms Stories

## Realms Stories

- Cleaned up the disabled Realms Stories button interface on the pause screen when playing as a second user in split screen

## User Interface

- Removed an unnecessary warning from 2 Player realms subscription
- Fix so that pressing "Join Realm" on the new Play screen does not lead into an empty void 
- The new Bedtime screen now cancels sleeping when pressing the escape keyboard button ([MCPE-183434](https://bugs.mojang.com/browse/MCPE-183434)) 

# Technical Updates

## API

- Fixed a crash with *getTags* method on *Item Stack* when called on the Air Block Item
- Dimension
  - Released method *getTopmostBlock* from *beta* to *1.13.0*
  - Released interface *VectorXZ* from *beta* to *1.13.0*

## Blocks

- The "blocks.json" files found in resource packs are now versioned
  - Overriding the block "stone" with a format_version of 1.20.50 or higher will assume the texture data in terrain_texture.json is flattened and not using an array
  - Overriding the block "prismarine" with a format_version of 1.21.10 or higher will assume the texture data in terrain_texture.json is flattened and not using an array
  - Overriding the block "anvil", "quartz_block", "red_sandstone", "sand" and "sandstone" with a format_version of 1.21.20 or higher will assume the texture data in terrain_texture.json is flattened and not using an array
- "infested_stone" and its derivatives now have their block sound defined ([MCPE-182290](https://bugs.mojang.com/browse/MCPE-182290)) 

## Commands

- The /locate structure command now uses namespaced structure names. Structure names provided without a namespace will assume the “minecraft” namespace ([MCPE-151807)](https://bugs.mojang.com/browse/MCPE-151807)

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.** 

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples). 

Updates this week:

- Updated set of blocks + entities that appear within the Editor picker
- Added 'Attach Debugger' ActionBarItem shortcut for attaching to the scripting debugger 
- Implemented single entity transaction payload for entity delete/create 
- Implemented Undo/Redo of single entity creation and deletion
- Added *isFloat* to support floating point values in *addNumber* Editor Property Pane API 
- Added copy to clipboard button to log panel messages
- Added localized field names into the Deferred Lighting property editor dropdown
- Added Global Illumination settings to the Deferred Lighting property editor
- Fixed bug that caused visual artifacts when enabling Deferred Lighting in Editor
- Removed fallback display text properties from API in favor of single localized property. 
  - Added *label*property to *IDropdownItem* API, removed *displayAltText* and *displayStringId* properties
  - Added *label*property to *IMenuCreationParams* API, removed *name* and *displayStringId* properties
  - Added *title*property to *IPropertyItemOptions* and *IPropertyItem* APIs, removed *titleAltText* and *titleStringId* properties
  - Added *title* and *tooltip* properties to *ModalToolCreationParameters* API, removed *titleAltText*, *titleStringId*, *tooltipAltText* and *tooltipStringId* properties

## Entity Components

- Added the "behavior.teleport_to_owner" goal, which allows an entity to teleport to its owner 
  - This goal is designed for emergency situations where "behavior.follow_owner" could be too slow or too low priority
  - The "filters" field allows defining the conditions for teleportation using entity filters
  - The "cooldown" field allows defining how often the entity should attempt to teleport
- *minecraft:behavior.move_away_from_target* has been renamed to *minecraft:behavior.move_around_target* to better describe what the goal does, since it can be used both for moving away from the target, but also to move towards a random position around the target

## Entity Filters

- Added new entity filter "owner_distance", which checks the distance of an entity from its owner 

## Gameplay

- Modified *ItemUseInventoryTransaction* packet by adding *Trigger Type*. This new value tells us if the packet is sent from a direct player input or the simulation tick from the button being held down

## General

- Entities that fail to load due to missing content will now be preserved inside the level. These entities will re-appear when the missing content becomes available (I.E Removing and re-applying an Add-On)

## Items

- Using 'minecraft:wearable' with slot set to 'slot.weapon.offhand' in combination with 'minecraft:allow_off_hand' set to false will now cause a content error

# Technical Experimental Updates

## API

- Camera
  - Added \`CameraFixedBoomOptions\` to the options for the \`setCamera\` function in beta.

CameraFixedBoomOptions

- New interface added to beta
- Allows you to customize \`minecraft:follow_orbit\` cameras only when the third person camera presets toggle is enabled.
- Introduces \`viewOffset?: Vector2\`. This property allows you to change the offset of the camera relative to the player to create an over the shoulder effect.

## Graphical

- Extended TextureSet capabilities to support Items in the Deferred Technical Preview. See updated documentation on the Creator portal for details. 
- Added the new bio-optical lighting model for water in the Deferred Technical Preview. The ability to customize and data-drive water will be made available in future updates
  - Known issue: there is a volumetrics boundary 8 blocks below the water surface that creates a harsh lighting transition when the camera passes through it.
  - Known issue: waterfalls or thin bodies of water can be difficult to see.
- Added Screen Space Reflections to the Deferred Technical Preview. These reflections are included as part of the Reflections quality slider in the Deferred graphics settings menu. On mobile devices, screen space reflections are only available when running at Ultra settings. See updated documentation on the Creator portal for details.
- Fixed a bug on iOS that resulted in undefined graphics behaviour (such as no point lights or washed-out lighting) in the Deferred Technical Preview. 
- Fixed a gamma-correction bug that caused the textures of Candles, Glass, Ice, Honey, Slime, Beacons, Cauldrons and portals to be overly bright in the Deferred Technical Preview
