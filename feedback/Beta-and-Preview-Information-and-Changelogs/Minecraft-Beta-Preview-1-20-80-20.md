---
title: Minecraft Beta & Preview - 1.20.80.20
date: 2024-02-27T21:03:06Z
updated: 2024-02-29T16:59:31Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/24509955193229-Minecraft-Beta-Preview-1-20-80-20
hash:
  h_01HQSPSHHCPXMEFPRX1KW1CZGR: experimental-features
  h_01HQSPSHHCF0QBS5RPTHTXSW1R: vault
  h_01HQSPSHHCZ7FNT1BXQ22BCCX9: trial-chambers
  h_01HQSPSHHCSB81QE441P4P1M8C: coming-soon-hardcore-mode
  01HQTWSQVF9W23M0A63RBXJBW9: features-and-bug-fixes
  h_01HQSPSHHCPZ30ZMHC5TE91QVJ: wolf-armor
  h_01HQSPSHHC62AQPE16850YFP1A: wolves
  h_01HQSPSHHCCFP3ANEQSBAYE4ZD: armadillo
  h_01HQSPSHHCQABC4A3W0CZW236S: blocks
  h_01HQSPSHHCVVASWD9A46SVC3B3: gameplay
  h_01HQSPSHHCCY1R9S0YVTKW42YE: realms-stories
  h_01HQSPSHHDESNM5WV6CTSH7P9N: user-interface
  h_01HQSPSHHD7CET4AV34GCEPG7Z: technical-updates
  h_01HQSPSHHD3JVE61YHXDF66QB0: api
  h_01HQSPSHHDHAH7QEFQCP4G3VNT: blocks-1
  h_01HQSPSHHDDBG80PED3GXA1161: cameras
  h_01HQSPSHHD7WBP99WJX4F7KRFG: components
  h_01HQSPSHHDNQZ4HXEDHY85WWTT: editor
  h_01HQSPSHHDXWM2AP0Z6FYDXRW9: entity-filters
  h_01HQSPSHHD74N5HWFC1N4JXFSS: molang
  h_01HQSPSHHDX72PTWFJQ2YQ8RBT: stability-and-performance
  h_01HQSPSHHDK9YBBEJNNZMRE8WF: experimental-technical-updates
  h_01HQSPSHHD4Y509Q0238JE1RDF: blocks-2
  h_01HQSPSHHDZGGCE7FDCE69575K: commands
  h_01HQSPSHHD56839ABXJDQ7BFVK: graphical
  h_01HQSPSHHDS9F8RD202A4RCEB0: api-1
---

**Posted:** February 29, 2024  
  

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![patchnotes_u8-1.png](https://feedback.minecraft.net/hc/article_attachments/24554985642253)

There’s so much packed into this week’s preview and beta release that I need a code to remember it all. What about “wolf armor-dillos”? Because in this week’s preview and beta, you’ll not only find updated wolf armor (it’s stronger! and repairable! and awesome!) you’ll be able to dye it any color you want. If that wasn’t enough, the armadillo has been de-experimentified (definitely a word) and we’ve taken the first steps towards working on something exciting (more on that below). Was that everything? Maybe I should’ve made a list, instead of a code. Anyway! As always, we want to hear your thoughts and feedback, so please let us know what you think [here](https://feedback.minecraft.net/), and report any bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).  
  

**Known Issue:** Players are unable to connect to Preview Realms on Xbox One and PlayStation 4 in this version.  
  

# Experimental Features

## Vault

- Vault hit sound pitch corrected to match Java Edition
- Updated Vault visuals

## Trial Chambers

- Trial Chambers will now be placed in the same location and configuration as Java Edition

## Coming Soon: Hardcore Mode

We're excited to say we're working on Hardcore mode for Bedrock Edition, and we hope it'll be ready for testing sometime in the Spring. Hardcore mode is a subcategory of Survival, where you only get one life, and no chance to respawn. Not only that, in Hardcore mode the difficulty is locked to the highest setting!

With such high stakes, we want to ensure we get Hardcore mode right before releasing it into the retail version of Bedrock Edition, so once it goes into testing it’ll stay in Preview until we’re confident the experience is smooth for both players and creators. You’ll be able to help us test Hardcore mode by submitting bugs at [bugs.mojang.com](https://bugs.mojang.com/) and giving us your feedback on [Discord](https://discord.com/invite/minecraft) or at [feedback.minecraft.net](http://feedback.minecraft.net/)!

We're also happy to announce, when we are ready, Hardcore mode will be available in Realms for both Java and Bedrock.  
  

# Features and Bug Fixes

## Wolf Armor

Since the initial release of the Wolf Armor, we have been working on improving it to increase its protection, usability and add customization. For protection there is a new approach to armor, which considers the player’s need to quickly see the state of the armor without using UI elements, and the ability to act quickly to help their pet Wolf if needed.

- Wolf Armor has been de-experimentified and is now available during normal gameplay
- Wolf Armor can now be dyed
- Wolf Armor now acts as a shield, absorbing most damage directed to the Wolf:
  - The Wolf Armor now has 64 durability
  - More cracks appear on the Wolf Armor as it takes more damage
  - If the Wolf Armor is dealt damage beyond 0 durability, it will break
  - But no worries, the Wolf Armor can now be repaired by using Armadillo Scutes on a sitting Wolf
- **Known Issue:**
  - Wolves wearing Wolf Armor don’t trigger post-damage invulnerability, resulting in the Wolf Armor being rapidly destroyed by continuous sources of damage, such as lava, Slimes, and Magma Cubes

## Wolves

- The collars of tamed Wolves are now properly shaded ([MCPE-178351](https://bugs.mojang.com/browse/MCPE-178351))
- Wolves’ tails are now correctly positioned when sitting ([MCPE-31121](https://bugs.mojang.com/browse/MCPE-31121))

## Armadillo

- The Armadillo has been de-experimentified and is now available during normal gameplay
- Breeding cooldown is no longer reset after roll-up
- Spiders and Cave Spiders now fear Armadillos even when experiments are turned on ([MCPE-178887](https://bugs.mojang.com/browse/MCPE-178887))

## Blocks

- Sweet Berry Bush now drops up to 6 Sweet Berries when mined using a Fortune enchanted tool ([MCPE-172622](https://bugs.mojang.com/browse/MCPE-172622))
- Fully grown Cocoa Pods now consistently drop 3 Cocoa Beans
- Double Slabs can once again be created when stacking two of the same Slabs together ([MCPE-179187](https://bugs.mojang.com/browse/MCPE-179187))

## Gameplay

- Fixed vertical position of tamed mobs from the clients/guests perspective after they teleport to their owner ([MCPE-139168](https://bugs.mojang.com/browse/MCPE-139168))
- Horses and Boats no longer slide to unexpected previous locations upon mounting or dismounting

## Realms Stories

- Fixed an issue where the Realms Stories button would lose focus on the play screen
- The Members and Timeline tabs are now limited to rendering at most 300 Realm players, to avoid performance issues on large Realms. All players will still be searchable in the Members tab
- When adding a new story, the text box is no longer cleared when the player leaves the Add Story screen. Essentially, players can save a draft of their Story
- When posting a Realm Story, the player’s avatar will only have the Online badge if they’re currently playing in a game hosted by a Realm
- Fixed the Realms Stories ‘Opt In’ screen sometimes appearing visually broken
- Fixed a bug where selecting the same screenshot again would de-select the screenshot instead of just keeping the selected one
- Added screen reader narration to Realms Stories ‘Opt In’ screen
- Added info button to Timeline tab
- Updated description text of certain Realms Stories settings
- Added unread story indicator on Story Feed tab
- Added a Realms Stories page to How to Play section of Minecraft

## User Interface

- The feedback button has been moved from Main Menu to the Settings screen under the General tab with label “Help Center”
- Added a toggle for enabling/disabling game tips and a button for restarting them in the Settings under the General section
- Increased the time interval for showing a standard loading tip
- Add “Import Retail Worlds” button to the Settings/Storage screen
- Increased range for the “move up” button, such that you can now slide off slowly to the near buttons without stopping the movement ([MCPE-178399](https://bugs.mojang.com/browse/MCPE-178399))
- Worlds imported in the new Play screen now has a space before the “(imported)” suffix (Preview only)
- On touch devices, when items are swapped the icons now move in the correct direction
- Custom Decorated Pots and dyed Banners are now rendered correctly in Crafter output slot
- On touch devices, the selected item now has a blue background on all screens
- Flying item animation is no longer missing in touch-screen versions of Beacon, Cartography, and Smithing Table screens  
    

# Technical Updates

## API

- Removed *EntityHealableComponent.filters* as they currently have no backing implementation
- Fixing some component *isValid *methods where they didn’t properly return false in cases where the component had been removed from the Entity.
- Added *PaletteColor *enum to *beta *for use with *ItemColorComponent/ItemColor2Component*
- Added *ItemColor2Component *to *beta *for reading *minecraft:color2*
- Setting a dynamic property with a key larger than 32kb now will result in an exception

## Blocks

- “sapling” block is now split into unique instances: “oak_sapling”, “spruce_sapling”, “birch_sapling”, “jungle_sapling”, “acacia_sapling” and “dark_oak_sapling”.
- “coral_fan” block is now split into unique instances: “tube_coral_fan”, “brain_coral_fan”, “bubble_coral_fan”, “fire_coral_fan” and “horn_coral_fan”

## Cameras

- Added the “extend_player_rendering” camera component which allows for players (and any entities they are connected to through riding and leashes) to be rendered even if they are beyond the max entity render distance
- Added “extend_player_rendering” component to the “minecraft:free” camera
  - This component is intended to be an enhancement and improvement to current functionality and as such will be “set to true” by default
  - Setting this component to false will remove the added rendering capability. Documentation will be undated prior to release
- The server now sends chunks and actors around the camera to the client if that information already exists on the server even when the camera is placed far away from the player

## Components

- The “interact” component’s fields “equip_item_slot” and “drop_item_slot” now support both armor and inventory slots:
  - Armor slots are specified as ‘slot.armor.head’, ‘slot.armor.chest’, ‘slot.armor.legs’, and ‘slot.armor.feet’
  - Inventory slots are specified as positive numbers, now expressed as strings
  - This change requires a world version of 1.20.80 or higher
- Added “repair_entity_item” field to the “interact” component, which allows to repair an item in one of the entity’s inventory or armor slots

## Editor

- Added support for addImage to property pane
- Added icon property to IPropertyItemOptionsButton API to display icons in buttons
- Added the concept of WidgetManager and CustomWidget - allowing the server to instantiate in-world widgets which should facilitate manipulation of world tools. We currently only support CustomWidgets (which are server driven Custom Entities)
- Adjusted default editor UI scale to optimize screen space

## Entity Filters

- Added new entity filter “is_sitting”, which checks if the entity is sitting
- Added new entity filter “has_damaged_equipment”, which checks if the entity has a certain damaged piece of equipment in the specified slot

## Molang

- Added new query “query.armor_slot_damage”, which returns the damage value of the armor item in the specified slot

## Stability and Performance

- Removed *FilterTextPacket*  
    

# Experimental Technical Updates

## Blocks

- Added ‘minecraft:custom_components’ block component under the Beta APIs feature flag

## Commands

- Fixed /hud command so that changes only effect the targeted player(s)

## Graphical

- Partially fixed full block shapes (e.g. Redstone Lamps, Froglights, Glowstone, etc.) that are marked as point lights in resource packs in the Deferred Technical Preview. They can still be turned into point lights, but will not have occlusion/shadows
- Added a dedicated quality slider for Point Light Shadows in the Deferred Video Settings menu
- Added a new feature to the lighting model in the Deferred Technical Preview: Sub Surface Scattering. This effect approximates rays of light passing through translucent surfaces. For now, this feature is limited to only affect Leaves
- Increased the contrast and saturation of the world in the Deferred Technical Preview

## API

- Block Custom Components – see [https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents ](https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents)
  - Added *BlockComponentStepOnEvent *for *beta*
  - Added *BlockRegistry *for *beta*
  - Added *WorldInitializeBeforeEvent*
  - Added *BlockCustomComponent*
- Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command
- Added class *ListBlockVolume *which extends *BaseBlockVolume *- A volume that stores multiple block locations
- Structure
  - Renamed class *StructureTemplate *to *Structure*
  - Added read-only property *size: Vector3* - Returns the size of the structure in blocks
  - Added function *getBlockPermutation(location: Vector3): BlockPermutation \| undefined;* - Returns the block permutation at the given location within the structure
  - Added function *isValid(): boolean* - Returns false if the structure has been deleted
  - Added function *getIsWaterlogged(location: Vector3): boolean;* - Returns whether the block at the given location is waterlogged
