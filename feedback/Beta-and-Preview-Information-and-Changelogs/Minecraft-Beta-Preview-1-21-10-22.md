---
title: Minecraft Beta & Preview - 1.21.10.22
date: 2024-06-01T08:54:48Z
updated: 2024-06-05T15:07:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27211188359949-Minecraft-Beta-Preview-1-21-10-22
hash:
  h_01HZME3QDXX3B3F8AXW90SPPBP: features-and-bug-fixes
  h_01HZME3QDX30W6WD3EH6ACE766: add-ons
  h_01HZME3QDXN0F337DQ6WR1G7G5: crafter
  h_01HZME3QDXMRXR1VDKDDANGPWR: blocks
  h_01HZME3QDX2K6HMYQGXE9KQKEJ: customizable-controls
  h_01HZME3QDXQP3JDAJWN3SYR1EM: wind-charge
  h_01HZME3QDXWSDST2FQDV56J39Q: game-tips
  h_01HZME3QDXZ6G1NQ7J41XTJJQ5: gameplay
  h_01HZME3QDXD1DVC8PVZZ020EV2: general
  h_01HZME3QDX8DD608SVD42V7XHP: items
  h_01HZME3QDXSA8F6Y5GN9JGAQ3C: banner-patterns
  h_01HZME3QDX42BBRAYHWD87T7A2: projectiles
  h_01HZME3QDXXKTZ02PG2WY2J0AH: realms
  h_01HZME3QDX03P52PY6E7WMH9BQ: stability-and-performance
  h_01HZME3QDXX8MSB70V636YE1GZ: user-interface
  h_01HZME3QDYFAP63XXE639YX6FV: vanilla-parity
  h_01HZME3QDYDBRGWXYVSSFGV7M5: vault
  h_01HZME4T884J16RYP7MVG91ABY: technical-updates
  h_01HZME4T88VPCF4SZMZAFS9TRN: add-ons-and-script-engine
  h_01HZME4T885QYRV8V7P66RWW2T: api
  h_01HZME4T88K9W3G97YN8A22K9Z: camera
  h_01HZME4T885GXNP632FF6YVG20: editor
  h_01HZME4T88NMTC71KWS4GSGT48: entity-components
  h_01HZME4T88R7HVTY1W0GX6FEXS: general-1
  h_01HZME4T88M2Q39GVK5D6CSHN8: items-1
  h_01HZME4T89R1RWE0R2M34N9284: realms-1
  h_01HZME4T893C8N7A7NN730CQNE: experimental-technical-features
  h_01HZME4T89X3YD533RN4YP8GGA: api-1
  h_01HZME4T898GCBXJBF5FWVTNBC: graphical
  h_01HZME4T890G1Q5AYABGQFNV3R: stability-and-performance-1
---

**Posted:** 5 June 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

Here’s what’s new in the latest Minecraft: Bedrock Edition Beta and Preview update! Please keep sending in any suggestions you have at [feedback.minecraft.net](https://feedback.minecraft.net/), and please report and upvote any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/)!\
\

# **Features and Bug Fixes**

## Add-Ons

- Fixed a bug where items from certain Add-ons could appear without textures or names when joining Realms

## Crafter

- Fixed a bug that caused Crafter to be audible from more than five blocks distance

## Blocks

- Doors of different materials will now be able to form a double door
- The Heavy Core Block is properly scaled in the inventory ([MCPE-179656](https://bugs.mojang.com/browse/MCPE-179656))
- The Heavy Core Block is now positioned correctly in Item Frames ([MCPE-181155](https://bugs.mojang.com/browse/MCPE-181155))
- The Bell Block no longer rings twice when hit with a Wind Charge Projectile
- “double_stone_block_slab2” block is now split into unique instances “red_sandstone_double_slab”, “purpur_double_slab”, “prismarine_double_slab”, “dark_prismarine_double_slab”, “prismarine_brick_double_slab”, “mossy_cobblestone_double_slab”, “smooth_sandstone_double_slab” and “red_nether_brick_double_slab”
- “prismarine_double_slab”, “dark_prismarine_double_slab” and “prismarine_brick_double_slab” now have a destruction time of 1.5
- Fixed Ancient City entrance using a single Deepslate tile slab instead of a double slab
- “double_stone_block_slab3” block is now split into unique instances “end_stone_brick_double_slab”, “smooth_red_sandstone_double_slab”, “polished_andesite_double_slab”, “andesite_double_slab”, “diorite_double_slab”, “polished_diorite_double_slab”, “granite_double_slab” and “polished_granite_double_slab”
- “end_stone_brick_double_slab” now has a destruction time of 3.0
- “andesite_double_slab”, “polished_andesite_double_slab”, “diorite_double_slab”, “polished_diorite_double_slab”, “granite_double_slab” and “polished_granite_double_slab” now have a destruction time of 1.5
- “double_stone_block_slab4” block is now split into unique instances “mossy_stone_brick_double_slab”, “smooth_quartz_double_slab”, “normal_stone_double_slab”, “cut_sandstone_double_slab” and “cut_red_sandstone_double_slab”
- “mossy_stone_brick_double_slab” now has a destruction time of 1.5
- “prismarine” block is now split into unique instances “prismarine”, “dark_prismarine” and “prismarine_bricks”

## Customizable Controls

- Buttons can now slide completely to the right when customizing controls on iOS
- When customizing touch controls, the safe zones on the left and right side are now ignored

## Wind Charge

- The Wind Charge model now correctly renders within its bounding box
- Increased player-fired wind charge speed by 50%, bringing it into parity with Java Edition

## Game Tips

- Added emote game tip. The tip appears when there are remote players close to the player and the player has spent at least 30 seconds with other players in the world

## Gameplay

- Players will not receive damage when in the world load or dimension transfer loading screen ([MCPE-42310](https://bugs.mojang.com/browse/MCPE-42310))
- Players no longer momentarily go into a crawl for a single tick when moving towards a Bed with a 1.5 unit gap above it ([MCPE-178370](https://bugs.mojang.com/browse/MCPE-178370), [MCPE-180810](https://bugs.mojang.com/browse/MCPE-180810))

## General

- Tweaked the way the dismount position is calculated to better align with moving Vehicles. This could result in minor differences when dismounting fast vehicles

## Items

- The rarity color of Trident, Mace, and Heavy Core have been changed to the Epic color (magenta)

## Banner Patterns

- Added rarity coloring in the tooltips of Creeper Charge, Skull Charge, Thing, Snout, Flow, and Guster Banner Patterns

## Projectiles

- The Wind Charge Projectile shot by the Breeze no longer toggles blocks when Mob Griefing is disabled in Settings ([MCPE-181211](https://bugs.mojang.com/browse/MCPE-181211))

## Realms

- Fixed a bug where a user could not create a new realm via the “Free Beta/Preview Realm Available” button in the Worlds tab due to an infinite loading screen and non-functioning “Create Preview/Beta Realm” button
- Added a new reporting flow that lets players add more context and information about why the report is being made

## Stability and Performance

- Fixed an issue on Amazon devices where game would occasionally crash when joining a world

## User Interface

- Fixed a bug where the wrong text could be shown on the death screen while using Hardcore mode in split screen

## Vanilla Parity

- Drowned now spawn individually in rivers instead of in groups of two
- Drowned now spawn in aquifers in dripstone caves ([MCPE-144066](https://bugs.mojang.com/browse/MCPE-144066))

## Vault

- Added sound effect to help players understand that they have already looted this Vault\
  \

# **Technical Updates**

## Add-Ons and Script Engine

- Deprecated Entity Permutations
  - Permutations can no longer be parsed and applied to entities via their JSON file under the flag permutations
- Deprecated Volume and /volumearea command
- Entity Aliases is deprecated when a format_version of 1.21.10 or higher is specified

## API

- Released *WorldInitializeBeforeEvent* from *beta* to *1.12.0*
- Released *WorldInitializeBeforeEventSignal* from *beta* to *1.12.0*
- Custom Components
  - Released *ItemComponentRegistry* from *beta* to *1.12.0*
  - Released *ItemCustomComponent* from *beta* to *1.12.0*
  - Released *ItemComponentBeforeDurabilityDamageEvent* from *beta* to *1.12.0*
  - Released *ItemComponentCompleteUseEvent* from *beta* to *1.12.0*
  - Released *ItemComponentConsumeEvent* from *beta* to *1.12.0*
  - Released *ItemComponentHitEntityEvent* from *beta* to *1.12.0*
  - Released *ItemComponentMineBlockEvent* from *beta* to *1.12.0*
  - Released *ItemComponentUseEvent* from *beta* to *1.12.0*
  - Released *ItemComponentUseOnEvent* from *beta* to *1.12.0*
- Moved *EntityTameableComponent* from *beta* to *1.12.0* with properties *getTameItems*, *isTamed*, *probability*, *tamedToPlayer*, *tamedToPlayerId* and function *tame*
- Moved *EntityAgeableComponent* from *beta* to *1.12.0* with properties *duration*, *growUp*, *transformToItem* and function *getDropItems*, *getFeedItems*, *EntityDefinitionFeedItem*, *Trigger*
- Enable the server-net module to be usable in local editor extensions

## Camera

- Added the view offset to the 3<sup>rd</sup> person camera for the experimental *follow_orbit* preset
  - The view offset is anchored to a pivot point at the center of the screen. When applied to the follow_orbit preset, the player is shifted to be at a distance from center specified by the the offset.
  - The range for this offset is -100 to 100
  - This can be set by both commands and JSON
    - /camera @s set minecraft:follow_orbit view_offset viewX viewY
  - A new learning portal article detailing the 3<sup>rd</sup> person camera, including JSON syntax, will be published soon.
- Added starting radius and rotation to the *follow_orbit* and 3<sup>rd</sup> person boom camera presets
  - The starting radius (distance from player) is fixed right now at 10 blocks from the player position.
  - The starting rotation (pitch and yaw) are fixed right now at 45X and 45Y.
  - The follow orbit camera is the only preset available, the 3<sup>rd</sup> person boom preset will be coming in a future release.
- Exposed radius component to behavior packs to be overwritten by creator cameras. Also added ‘minecraft:third_person’ and ‘minecraft:third_person_front’ to the allow list of presets that can be inherited from
  - This allows you to make a 3<sup>rd</sup> person camera based on the vanilla 3<sup>rd</sup> person cameras but with a variable radius.\
    The radius (distance from player) is not limited but render distance and other constraints still exist.
  - This does ***not*** allow modifications to the vanilla cameras.

## Editor

- Removed Keybinding for ‘D’ from Paste Preview which blocked movement right. Fixed Distance mode can be selected using the side-panel
- Fixed missing CTRL+X key binding in Editor
- Expanded the Block Palette Service API to allow management of Block Palettes and Block Palette Items
- Added radial drag to number input fields, allowing value changes with mouse drag movement
- Introduced a new script brush manager method *getBrushVolume* which, given a set of brush pipeline operations, builds an absolute compound block volume for the brush
- Fixed bug where small movements in the brush tool caused incorrect cursor tracking

## Entity Components

- Added a *wind_burst_on_hit* subcomponent for Projectiles which creates a wind burst upon collision with an entity or block before being removed from the world
- Wind Charges no longer burst when removed by command

## General

- “minecraft:scatter_feature” now has a “distribution” field like “minecraft:feature_rules” to define the scattering settings. Features now use schema version “1.21.10”
- [Learning portal documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/featuresreference/examples/features/minecraftscatter_feature?view=minecraft-bedrock-stable) on this feature will be updated with the full release

## Items

- Released *minecraft:custom_components* item component out of experimental in json formats 1.21.10 and higher
- Introduced “slot.armor.body” as an extra armor slot for entities, like horses, limited to a single armor item but needing the effects of a full armor set
- Introduced the “minecraft:damage_absorption” item component, enabling items to absorb damage intended for their wearer
  - The “absorbable_causes” field allows to specify which damage causes to absorb
  - Absorbed damage depletes the item’s durability, and surplus damage is ignored
  - Requires equipping the item in an armor slot for damage to be absorbed
  - When multiple damage absorbing items are equipped, a suitable one is selected at random to absorb incoming damage
- Introduced the “minecraft:durability_sensor” item component, enabling items to emit sounds and particles when damage causes them to lose durability
  - The “durability_thresholds” field allows to define a list of both durability thresholds and the effects to emit when they are met
  - When the item receives enough damage to meet multiple thresholds at the same time, only the one corresponding to the lowest durability is considered
- Learning portal documents on these features and how to use them are being written and will be available soon

## Realms

- Fixed a bug that prevented two back-to-back error screens when the client was out of date and a Realm had a pending update\
  \

# **Experimental Technical Features**

## API

- Added *playerEmote* which fires after a player uses an emote
- Block Custom Components
  - Use of the ‘onTick’ event requires the block has the ‘minecraft:tick’ component to configure how the block ticks
  - Blocks that are world generated, and have the ‘minecraft:tick’ component, will now tick

## Graphical

- Added a Brightness / Gamma calibration screen for Deferred Technical Preview
  - The calibration screen can be found under Deferred Graphics Settings within the Video settings menu

## Stability and Performance

- Fixed a crash when enabling the Deferred Technical Preview experiment on Android devices with an Arm Mali GPU
