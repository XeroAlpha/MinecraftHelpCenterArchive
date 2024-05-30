---
title: Minecraft Beta & Preview - 1.21.10.21
date: 2024-05-29T13:04:47Z
updated: 2024-05-30T13:06:54Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27128575309325-Minecraft-Beta-Preview-1-21-10-21
hash:
  h_01HZ272Z67Q4H3CQ806FP5VD12: features-and-bug-fixes
  h_01HZ272Z67XMTJ9QK1H9EB15G3: character-creator
  h_01HZ272Z67SFACG4RW1AEEDAHG: customizable-controls
  h_01HZ272Z67KMVNK62KYYVVSGK6: game-tips
  h_01HZ272Z6736KD2JTS68EW7CJ7: gameplay
  h_01HZ272Z67YZYG3RHQY1YEAV2D: loading-tips
  h_01HZ272Z671B6BDGB62RXS8AXK: preview-realms
  h_01HZ272Z67M9JT5D7Y4209FR63: stability-and-performance
  h_01HZ272Z67988PVMGPT32V7TBV: structure-blocks
  h_01HZ272Z67P0FYXSR1GF9X2NH0: user-interface
  h_01HZ272Z67VK72H6X2F9GWQ0B1: technical-updates
  h_01HZ272Z67SFYD15WNZ4M1VFN8: biomes
  h_01HZ272Z67XCMK9CAFX3WQX2QE: blocks
  h_01HZ272Z672T12GB1W8J06MAJW: editor
  h_01HZ272Z67126DCR5B0388HS2Q: technical-experimental-updates
  h_01HZ272Z67XYHQ1VHWYWAJ167X: api
---

**Posted:** 29 May 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A savanna village with a villager, an iron golem, a cat, and an armadillo in the background](https://feedback.minecraft.net/hc/article_attachments/27128575303309)

Here’s what’s new in the latest Minecraft: Bedrock Edition Beta and Preview update! Please keep sending in any suggestions you have at [feedback.minecraft.net](https://feedback.minecraft.net/), and please report and upvote any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/)!

We have a few known issues in this Preview and Beta that we aim to have addressed as quickly as possible:

- New Preview Realms cannot be created through the Worlds tab
- Players do not receive damage from suffocation
- Game invites do not pop up on iOS
- Invite only and Visible to LAN Players toggles are missing from the Multiplayer settings some platforms

 

# Features and Bug Fixes

## Character Creator

- Updated the Dressing Room category names for "Headwear", "Outerwear", and "Footwear"

## Customizable controls

- Customized controls no longer revert after player stops flight ([MCPE-180234](https://bugs.mojang.com/browse/MCPE-180234)) 
- The control customization screen is now automatically exited when input mode is switched to something other than touch controls 
- The paper doll can now be shown in the HUD when customizable controls is enabled ([MCPE-176334](https://bugs.mojang.com/browse/MCPE-176334))
- Customized control button sizes remain stable when going up or down Scaffolding or Ladders ([MCPE-178820](https://bugs.mojang.com/browse/MCPE-178820)) 

## Game Tips

- Added chat game tip. The tip appears when there are remote players in a world or if cheats are enabled
  - If the chat game tip can be shown for a player, the open chat instructions posted in the chat are removed

## Gameplay

- Fixed Wolf Armor breaking not emitting enough Scute particles ([MCPE-179664](https://bugs.mojang.com/browse/MCPE-179664)) 
- Mounted entities are no longer immune to Wind Charge projectile damage
- Banners are once again obtainable via the recipe book ([MCPE-179650](https://bugs.mojang.com/browse/MCPE-179650)) 
- Tweaked the way the dismount position is calculated to better align with moving vehicles. This could result in minor differences when dismounting fast vehicles

## Loading Tips

- Added animated title to the loading tips dialog

## Preview Realms

- A local World can now be uploaded to a Preview Realm World through the Edit World screen, similar to a non-Preview Realm
- Typing into the search box on the Realms Stories Members tab no longer overrides the filter options 
- Fixed a crash that could occur when viewing Realms Stories on a busy Realm
- New lines are no longer removed from Realms Stories posts that are displayed in the story feed 

## Stability and Performance

- Fixed item and block corruption when converting worlds from legacy Console Edition 

## Structure Blocks

- Fixed the Help button link in the Structure Block’s menu ([MCPE-179672](https://bugs.mojang.com/browse/MCPE-179672)) 

## User Interface

- Refreshed assets for Achievements screen: all achievements unlocked illustration, no achievement unlocked illustration, and the GamerScore icon
- Added a button for exiting the world from the death screen when in Hardcore mode (Preview only) 
- Fixed a bug that caused half-absorption hearts not be rendered ([MCPE-181245](https://bugs.mojang.com/browse/MCPE-181245))

# Technical Updates

## Biomes

- Biome components "minecraft:forced_features" and "minecraft:ignore_automatic_features" are now deprecated 

## Blocks

- Restored the back-side texture of the Sunflower to be leafy green ([MCPE-181275](https://bugs.mojang.com/browse/MCPE-181275)) 
- "coral_fan_hang" block is now split into unique instances "tube_coral_wall_fan", "brain_coral_wall_fan", "dead_tube_coral_wall_fan", and "dead_brain_coral_wall_fan" 
- "coral_fan_hang2" block is now split into unique instances "bubble_coral_wall_fan", "fire_coral_wall_fan", "dead_bubble_coral_wall_fan", and "dead_fire_coral_wall_fan" 
- "coral_fan_hang3" block is now split into unique instances "horn_coral_wall_fan" and "dead_horn_coral_wall_fan"
- "stone_block_slab4" block is now split into unique instances "mossy_stone_brick_slab", "smooth_quartz_slab", "normal_stone_slab", "cut_sandstone_slab" and "cut_red_sandstone_slab" 
- "mossy_stone_brick_slab" now has a destruction time of 1.5

## Editor

- Do not show Hardcore mode option when creating an editor project 
- Updated Selection, Brush, Line, Paste, Delete, Fill tool to load bounds before applying changes
- Added *IActionBar* API to manage scripted *IActionBarItem*
- Added property *actionBar: IActionBar* to *IPlayerUISession* API which represents quick action items in the action bar selector UI
- Added *addColorPicker* method to *IPropertyPane* API to display a color picker property pane item for modifying *RGBA* values 

# Technical Experimental Updates

## API

- EntityBreathableComponent
  - Changed function *setAirSupply(value: number): void* to property *airSupply: number* in *beta*
  - Added property *readonly canBreathe: boolean* to *beta*
- EntityComponent
  - Moved class *EntityMovementComponent* from *beta* to *1.12.0*
  - Moved class *EntityLavaMovementComponent* from *beta* to *1.12.0*
  - Moved class *EntityMovementGlideComponent* from *beta* to *1.12.0*
  - Moved class *EntityMovementSwayComponent* from *beta* to *1.12.0*
  - Moved class *EntityUnderwaterMovementComponent* from *beta* to *1.12.0* 
- Added class *PlayerCursorInventoryComponent* which adds read-only access to the players cursor inventory and the ability to clear it
