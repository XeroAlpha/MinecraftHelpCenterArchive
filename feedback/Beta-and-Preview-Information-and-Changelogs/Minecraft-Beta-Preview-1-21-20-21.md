---
title: Minecraft Beta & Preview - 1.21.20.21
date: 2024-06-27T09:55:37Z
updated: 2024-06-27T16:15:11Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27935763028237-Minecraft-Beta-Preview-1-21-20-21
hash:
  h_01J1D6N39S0VSPTCF8M0KPDW0C: notethis-weeks-update-may-may-be-delayed-on-windows-1011-we-apologize-for-the-inconvenience-and-are-working-to-resolve-the-issue
  h_01J1CNFD7YA1FG1FTC8K6AADRB: features-and-bug-fixes
  h_01J1CNFD7Y8P6Z07QAHHGME0M1: banners
  h_01J1CNFD7YM8W3XKZSEW2NFCWD: blocks
  h_01J1CNFD7YXEEXQKGTHCMKADDQ: gameplay
  h_01J1CNFD7YF43766WMZBY50DF6: realms
  h_01J1CNFD7Y59M3KER2XSBS5DP3: updated-realms-tab
  h_01J1CNFD7Y0D9G9XY9WXPFR8DR: sound
  h_01J1CNFD7Y4HJ0JARAXH1VTN6P: music
  h_01J1CNFD7YGK9ZTCRX2PRZBTWZ: structure-block
  h_01J1CNFD7YEERKTD1GV131A6T6: user-interface
  h_01J1CNFD7YDS90J4YH1XMBH5XV: vanilla-parity
  h_01J1CNFD7Y0HDMDFKNSMZ8ZSV3: technical-updates
  h_01J1CNFD7YFEZCJVEBCJG0N7F6: add-ons-and-script-engine
  h_01J1CNFD7Y3XEM3B3NXGHZBZ9H: ai-goals
  h_01J1CNFD7YFFYKG6ZN17FZAH1D: api
  h_01J1CNFD7Y96CC3YAA2YC7ANKE: blocks-1
  h_01J1CNFD7YDX21WY2NQ87R3930: editor
  h_01J1CNFD7Z8T7VVP03QSXH073D: general
  h_01J1CNFD7Z1WE2A3SEV1Y3TK2A: graphical
  h_01J1CNFD7ZXKVQYGJTK7JHMMXS: technical-experimental-features
  h_01J1CNFD7ZCGXD49VMKQF7YMVG: api-1
  h_01J1CNFD7ZEW50GJDPNMW5QWQ0: graphical-1
  h_01J1CNFD7ZJEYE733F21B1PQK0: blocks-2
---

**Posted:** 27 June 2024

### **NOTE: **This week's update may may be delayed on Windows 10/11. We apologize for the inconvenience and are working to resolve the issue.

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft village with ice plains in the background](https://feedback.minecraft.net/hc/article_attachments/27935763024781)

Greetings, dear readers! This week, we begin the 1.21.20.21 Betas and Previews, and we know that many of you who follow the update versions closely will be expecting a retail update soon. However, after careful consideration we have decided that we will be skipping the 1.21.10 update. Instead, we will focus on 1.21.20 to prioritize more quality and stability improvements. But fear not – all of the tweaks from recent Betas and Previews won't be lost! They will also be included in 1.21.20, and we will be assessing and addressing critical bugs in hotfixes as we did with 1.21.1. Thank you for your patience and understanding, and please keep sending us your feedback and bug reports. We really appreciate your input!

Here’s the list for what’s new this week:  
  

# Features and Bug Fixes

## Banners

- Mirrored the back side of Skull, Guster, and Flow banner textures ([MCPE-179894](https://bugs.mojang.com/browse/MCPE-179894))

## Blocks

- Fixed an issue with the Quartz Slab's texture ([MCPE-182604](https://bugs.mojang.com/browse/MCPE-182604))
- Texture overrides that intended to target all block variants no longer only override the default variant
- "light_block" block is now split into unique instances: "light_block_0", "light_block_1", "light_block_2", "light_block_3", "light_block_4", "light_block_5", "light_block_6", "light_block_7", "light_block_8", "light_block_9", "light_block_10", "light_block_11", "light_block_12", "light_block_13", "light_block_14" and "light_block_15"
- The "minecraft:yellow_flower" block has been renamed to "minecraft:dandelion", the old name is still understood from commands and data
- "sandstone" block is now split into unique instances "sandstone", "chiseled_sandstone", "cut_sandstone" and "smooth_sandstone"
  - "smooth_sandstone" destroy time changed from 0.8 to 2.0, and explosion resistance from 0.8 to 6.0

## Gameplay

- Fixed issue with Trial Spawners not ejecting loot in older worlds ([MCPE-182758](https://bugs.mojang.com/browse/MCPE-182758))
- Mobs spawned by Ominous Trial Spawners now drop items they picked up ([MCPE-182630](https://bugs.mojang.com/browse/MCPE-182630))
- Area Effect Clouds no longer shrink when entered by entities immune to the effect
- Fixed a recipe bug where "chiseled_sandstone" and "cut_sandstone" sandstone variants could be used in a furnace to craft "smooth_sandstone". It can now only accept normal "sandstone" and no other types of sandstone
- Fixed Vanilla recipes involving "red_sandstone_slab" as an ingredient or result item, they would incorrectly use "red_sandstone" instead
  - "red_sandstone_slab" can now be crafted again with 3 horizontal "red_sandstone:0"
  - "red_sandstone_slab" can now be crafted again with 3 horizontal "red_sandstone:1"
  - "red_sandstone:1" can now be crafted again with 2 vertical "red_sandstone_slab"
- Fixed a bug where the Breeze could get stuck in one place when beneath a roof of blocks while attacking
- Wind Charges thrown by Players no longer have a chance of dealing more than 1 damage per hit
- Jumping no longer overrides any previous greater upward velocity, and therefore doesn't cancel momentum from a Wind Burst explosion when both happen at the same time
- Using Trident with Riptide enchantment now correctly cancels fall damage reduction from Wind Charge
- Fixed a bug where the fall damage protection from a Wind Charge incorrectly prevented fall damage when landing a second time

## Realms

- Players are no longer kicked from the Realm if the owner enters and exits the Realms Settings screen without modifying packs while multiple Add-Ons are applied
- Navigating away from the Realms Stories Story Feed tab upon reading the first page of stories will remove the unread stories badge as the user has seen the most recent posts.
- Fixed a bug where brand new Realm Events wouldn't display properly the first time the Story Feed is opened.
- Fixed a bug that locks players on an infinite loop after cancelling the process of joining a recently claimed Preview Realm

 

## Updated Realms Tab

We’ve introduced a brand-new Realms tab. It is found in the New Play Screen, but unfortunately there is an issue with actually joining a Realm this way! (Sorry!) You will have to switch to the old UI in order to join Realms in the Preview - we hope to have this issue resolved as soon as possible.

Here’s what you can expect showing up over next couple of previews:

- List of Realms: Easily view all the Realms you own or have joined.
- Start Playing: Launch your Realm directly from this screen.
- Online Player Count: See how many players are currently online in each Realm.
- Realm Management: Take control of your owned Realms by editing worlds and managing subscriptions.
- Add or Join Realms: Explore new Realms by adding or joining them.
- Realm Stories: View Realm stories.

We’ll continue improving the Realms tab in future releases. Please send us your feedback at [aka.ms/realmstabfeedback](https://aka.ms/realmstabfeedback)

## Sound

- Crafter craft and fail sounds now have a random pitch offset
- Crafter fail sound now has a max distance of 3 blocks instead of 5
- Copper Bulb break, place and hit sounds are now pitched differently
- Copper Grate break, place and hit sounds are now pitched differently)
- Copper Grate step sounds play at a lower volume
- Copper door's "open" sound is now pitched differently
- Trial Spawner break and place sounds are now pitched differently
- Vault break and place sounds are now pitched differently
- Break, place and hit sounds now pitch differently for Tuff, Tuff Bricks, and Polished Tuff Blocks

## Music

- "Echo in the Wind" now plays in Lush Caves biome ([MCPE-182278](https://bugs.mojang.com/browse/MCPE-182278))
- "5", "Otherside", "Relic", "Creator", "Creator (Music Box)" & "Precipice" are now assigned to the Jukebox / Noteblock slider ([MCPE-169933](https://bugs.mojang.com/browse/MCPE-169933))

## Structure Block

- Fixed issue where player ID was not being saved on structure blocks when saving and exiting the level ([MCPE-149183](https://bugs.mojang.com/browse/MCPE-149183))
- From versions 1.21.20, the player ID given to tamed mobs loaded from a structure block will always be the original owner's ID

## User Interface

- The water breathing effect icon and timer no longer flicker while wearing the Turtle Helmet ([MCPE-142173](https://bugs.mojang.com/browse/MCPE-142173))
- Enabled the new version of the Bed Screen. The user can opt-in or opt-out using a feature toggle under Settings-Video Tab. (Preview only)

## Vanilla Parity

- Naturally spawned Mushroom stems no longer drop Mushrooms when mined ([MCPE-71123](https://bugs.mojang.com/browse/MCPE-71123))
- The chance of dropping Mushrooms (max of 2) from Brown and Red Mushroom Block was increased to match Java, from 10% per Mushroom to 11.11%
- Pufferfish now gives Nausea I effect instead of Nausea II when consumed. ([MCPE-98458](https://bugs.mojang.com/browse/MCPE-98458))
- Zoglins now play angry sounds when chasing the player or mobs ([MCPE-95523](https://bugs.mojang.com/browse/MCPE-95523))
- Bees now start taking drowning damage after one second when underwater ([MCPE-114688](https://bugs.mojang.com/browse/MCPE-114688))
- Crafting with Oxidized Cut Copper in Stonecutter now yields two slabs instead of one ([MCPE-136077](https://bugs.mojang.com/browse/MCPE-136077))
- Crafting Quartz Bricks from Blocks of Quartz now yield 4 Quartz Bricks instead of 1 ([MCPE-69281](https://bugs.mojang.com/browse/MCPE-69281))

# Technical Updates

## Add-Ons and Script Engine

- Fixed a bug where having an Add-On applied to a dedicated server would force players to download all resource packs applied to that server in order to join. Note: If you downloaded unwanted packs as a result of this issue, you may have to delete them locally from your device to avoid having them apply when joining a world ([MCPE-180344](https://bugs.mojang.com/browse/MCPE-180344))
- Updated the "minecraft:geometry" block component to validate whether geometries fit within the 30/16 unit bounds and have at least 1/16 of their length within the unit cube on each axis. This validation occurs for all geometry components on all blocks using json version 1.21.0 or later. ([MCPE-178607](https://bugs.mojang.com/browse/MCPE-178607))

## AI Goals

- Exposed "minecraft:behavior.swim_up_for_breath" AI goal component which allows a mob to try to move to a location where it can breathe air once it is close to running out of its breathable supply. In Vanilla, this is used by the Dolphin. Any custom content built off of the Vanilla dolphin at or above version 1.21.20 will need to manually add this component to enable this AI behavior.

## API

- EntityLeashableComponent
  - Moved class *EntityLeashableComponent* from beta to *1.13.0*

## Blocks

- "infested_stone" and its derivatives now have their block sound defined ([MCPE-182290](https://bugs.mojang.com/browse/MCPE-182290))

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.** 

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples). 

Updates this week:

- Added settings panel to modify atmospheric, global illumination, and color grading settings for deferred lighting (requires deferred lighting resource pack and settings to be enabled)
  - Known issue: shadows are cast from the UI elements. You can toggle crosshair mode via CTRL+TAB as a workaround
  - Known issue: paste preview (CTRL+SHIFT+V) does not render properly when deferred lighting is enabled.

![editorPicture1.png](https://feedback.minecraft.net/hc/article_attachments/27938232806029)

- Added *Input Mappings* action bar item that opens a modal displaying all available key bindings and input contexts.
  - Key bindings can be reconfigured using the shortcut field, which detects key presses to set the binding. Pending changes will highlight the text until saved or cleared. Closing the modal reverts any pending changes.
  - Right-clicking on a selected shortcut field clears the binding, or clear button next to the field can be used.
  - Added a toggle for exclusive (*None* in API) key actions to support advanced input scenarios.
  - Modified bindings can be restored by clicking restore buttons for the binding, active context, and all modified bindings.
  - Saved bindings are accessible across different editor projects.

![editorPicture2.png](https://feedback.minecraft.net/hc/article_attachments/27938262668685)

- Extended game options to include more export options as well as applying options to export level data
- Added an optional *KeyBindingInfo* argument to the key binding registration API functions to assign additional information to shortcuts.
- Added new *BlockList* UI element to Property Pane API.
- Added *inputContextId* and *inputContextLabel* optional properties to *ModalToolCreationParameters* API to represent user defined modal tool identifiers for modal tools.
- Added interface *KeyBinding* and modified key binding registration API methods to take this object.
- Dropdown menus will attempt to open in the opposite direction when they extend beyond the window bounds.
- Added *variant: ColorPickerVariant* optional property to *IPropertyItemOptionsColorPicker* API to support different types of color picker property items. Changed the default variant to respect the pane layout. Moved gradient selector for *Default* and *Inline* variants to a popup, accessible by clicking the selected color box.
- Updated set of entities that appear within the Editor picker
- Updated set of blocks that appear within the Editor picker
- Introduced a new filter "is_navigating" that checks to see if the entity is currently pathfinding. This requires a "minecraft:navigation" component

## General

- Updated schema documentation for Filter Groups

## Graphical

- 2 Channel textures in resource packs are now properly supported. When loaded they will always use the first channel to represent all three color channels and the second channel for alpha (I.E A normal texture would be *(R, G, B, A)* where a 2 channel texture will always be treated as *(R, R, R, A)*)
- Fixed bug where culling rules for data driven blocks did not rotate with the transformation component

# Technical Experimental Features

## API

- EntityBreathableComponent
  - Changed function *setAirSupply(value: number): void* to property *airSupply: number* in beta
  - Added property *readonly canBreathe: boolean* to beta
- Added *isHardcore* to *1.14.0 beta*.

## Graphical

- Custom skyboxes are now supported in Deferred Technical Preview ([MCPE-174200](https://bugs.mojang.com/browse/MCPE-174200))
- Fixed a bug where blank white thumbnails were being generated for worlds with the Deferred Technical Preview enabled ([MCPE-178373](https://bugs.mojang.com/browse/MCPE-178373))
- Fixed a bug where certain objects from the world would be visible through the gamma calibration menu in the Deferred Technical Preview
- The extension EXT_texture_cube_map_array is now required to run Deferred Technical Preview on Android devices that support GLES 3.1. Some devices will lose support, however most devices should be unaffected

## Blocks

- Added "item_display_transforms" control to the block geometry file. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside minecraft:geometry, and requires format_version 1.21.20
  - Default values example:
    - "item_display_transforms": {  
      "gui" : {  
                      "translation": \[0, 0, 0\],  
                      "rotation": \[30, 225, 0\],  
                      "scale": \[0.625, 0.625, 0.625\]  
        },  
        "firstperson_righthand": {  
                      "translation": \[0, 0, 0\],  
                      "rotation": \[0, 45, 0\],  
                      "scale": \[0.4, 0.4, 0.4\]  
        },  
        "firstperson_lefthand": {  
          "translation": \[0, 0, 0\],  
          "rotation": \[0, -135, 0\],  
          "scale": \[0.4, 0.4, 0.4\]  
        },  
        "thirdperson_righthand": {  
          "translation": \[0, 2.5, 0\],  
          "rotation": \[75, 45, 0\],  
          "scale": \[0.375, 0.375, 0.375\]  
        },  
        "thirdperson_lefthand": {  
          "translation": \[0, 2.5, 0\],  
          "rotation": \[75, 45, 0\],  
          "scale": \[0.375, 0.375, 0.375\]  
        },  
        "ground": {  
          "translation": \[0, 3.0, 0\],  
          "rotation": \[0, 0, 0\],  
          "scale": \[0.25, 0.25, 0.25\]  
        },  
        "fixed": {  
          "translation": \[0, 0, 0\],  
          "rotation": \[0, 0, 0\],  
          "scale": \[0.5, 0.5, 0.5\]  
        },  
        "head": {  
          "translation": \[0, 0, 0\],  
          "rotation": \[0, 0, 0\],  
          "scale": \[1, 1, 1\]  
        }  
      }
