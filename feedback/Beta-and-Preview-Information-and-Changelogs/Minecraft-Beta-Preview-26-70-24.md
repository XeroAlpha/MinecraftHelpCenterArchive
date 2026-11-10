---
title: Minecraft Beta & Preview - 26.70.24
date: 2026-11-10T16:11:15Z
updated: 2026-11-10T16:18:17Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/50285693907213-Minecraft-Beta-Preview-26-70-24
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 10 November 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

 

# Drop 4 of 2026 Features

## Blocks

- Sitting in a Boat no longer cracks Brittle Ice ([MCPE-243674](https://bugs.mojang.com/browse/MCPE-243674))
- Blocks from the Calcite block set are now correctly located after their Sulfur counterparts in the Creative inventory
- Blocks from the Packed Ice Bricks block set are now correctly located after their Mud Bricks counterparts in the Creative inventory
- Blocks from the Calcite, Packed Ice Bricks, and Snow Bricks block sets now drop fewer items when blown up by non-TNT explosions, like other blocks

## Freezing Mob Effect

- Changed the rotation of Freezing particles to match Java Edition

## Ice Ball

- Ice Balls thrown by players no longer deal critical damage

## Items

- The in-world holding position of Icicles now matches Pointed Dripstone and Sulfur Spike ([MCPE-243607](https://bugs.mojang.com/browse/MCPE-243607))
- The "Flurry" music disc title is now capitalized in its tooltip

## Mobs

- Fixed a bug where Frostbites had an unnatural attack animation when holding a Trident ([MCPE-244035](https://bugs.mojang.com/browse/MCPE-244035))

# Features and Bug Fixes

## Accessibility Features

- Closed Captions now properly update direction on already displayed captions ([MCPE-235492](https://bugs.mojang.com/browse/MCPE-235492))
- Changed the screen narration on the search input boxes on the marketplace and owned template screens so that they'd match other text input boxes
- Jumping and Landing on blocks now display the appropriate closed caption for all block types ([MCPE-240896](https://bugs.mojang.com/browse/MCPE-240896)) ([MCPE-241916](https://bugs.mojang.com/browse/MCPE-241916))

## Blocks

- Leaves will now correctly occlude the face facing Chiseled Packed Ice, Packed Ice Bricks and Snow Bricks
- Blocks from the Cinnabar and Sulfur block sets are now correctly located with the other stone blocks in the Creative inventory
- Resin Brick Stairs and Resin Brick Slabs are now located after their Snow Bricks counterparts in the Creative inventory
- Fixed a bug where some slabs played the wrong sound and displayed the wrong subtitle when merged into a double slab , ([MCPE-79659](https://bugs.mojang.com/browse/MCPE-79659)) ([MCPE-155381](https://bugs.mojang.com/browse/MCPE-155381))
- Shelf Mushrooms and Red Shrubs now drop fewer items when blown up by non-TNT explosions, like other blocks
- Players can now place blocks against Cauldrons without sneaking ([MCPE-44850](https://bugs.mojang.com/browse/MCPE-44850))
- Eating, charging Bows, and other normal item use can proceed while aiming at a Cauldron ([MCPE-117305](https://bugs.mojang.com/browse/MCPE-117305))
- Fixed Repeating Command Blocks from executing an additional time when changing to 'Needs Redstone' from 'Always Active' ([MCPE-179510](https://bugs.mojang.com/browse/MCPE-179510))
- Chiseled Soulshale can now be obtained and placed with commands ([MCPE-244132](https://bugs.mojang.com/browse/MCPE-244132))
- Chiseled Soulshale no longer requires a Pickaxe to drop

## Gameplay

### Invisible Armor

- Added an Invisible Armor world setting
  - Enable Invisible Armor from the world settings for an existing world or the Advanced tab when creating a new world
  - Once enabled, use the eye button in the inventory to show or hide equipped armor
  - Hidden armor will temporarily become visible for 5 seconds after taking damage
  - Elytra, mob heads and carved pumpkins always remain visible
- Added the `invisibleArmor` game rule command
- Let us know what you think [here](https://feedback.minecraft.net/hc/en-us/community/posts/50194680762765-Let-s-Talk-About-Invisible-Armor-Option)

## Graphical

- Redstone torches now render transparent texture areas correctly with ray tracing enabled ([MCPE-230978](https://bugs.mojang.com/browse/MCPE-230978))
- Maps and photos held in the main hand now use one hand in first person when the offhand is occupied, keeping the offhand item visible
- Vibrant Visuals is now available on more Android devices, including devices with Mali Ultra GPUs. ([MCPE-231503](https://bugs.mojang.com/browse/MCPE-231503))

## Input

- Fixed issue with "Swap Off-hand" control mapping not working ([MCPE-244122](https://bugs.mojang.com/browse/MCPE-244122))

## Mobs

- All undead mobs are now immune to freezing from both Powder Snow and the Freezing status effect
- Tridents now render correctly when held by Zombies, Zombie Villagers, and Husks ([MCPE-123207](https://bugs.mojang.com/browse/MCPE-123207))

## Nintendo Switch 2

- Added support for Joy-Con Mouse Mode
- Added a new Joy-Con Mouse Mode setting page to support customization

## Sounds

- Fixed sound events that were controlled by the wrong audio slider to now have the correct one ([MCPE-243737](https://bugs.mojang.com/browse/MCPE-243737)) ([MCPE-243908](https://bugs.mojang.com/browse/MCPE-243908))
- Ice ball now plays a break sound ([MCPE-243377](https://bugs.mojang.com/browse/MCPE-243377))
- Music discs and tracked broadcast sounds now continue playing for split screen players who remain in range when another local player leaves range, disconnects, or changes dimension
- Frostbites and Snow Golems now show the correct closed captions when throwing projectiles (MC-312762)
- Nether Brick Double Slabs and Red Nether Brick Double Slabs now use the same sound as Nether Bricks ([MCPE-188847](https://bugs.mojang.com/browse/MCPE-188847))

## Stability and Performance

- Fixed crashes when completing data migration from Nintendo Switch to Nintendo Switch 2
- Fixed an issue that could cause the game to get stuck at 73% during startup on Windows ([MCPE-243914](https://bugs.mojang.com/browse/MCPE-243914))
- Fixed a crash that could occur when loading resource packs with invalid lighting keyframes
- Client-to-server traffic now flushes queued packets before adding another packet would exceed the server's decompression limit
- Fixed a rare crash during world generation in the Nether of the Bastion Remnant structure

## Structures

- Fixed trees not generating in some of the Abandoned Camp structures

## User Interface

- Fixed a bug that caused the Dressing Room paper doll to never render when the selected skin was not yet valid on the first update
- Activating the Music Features Add-On no longer incorrectly displays the achievements-disabled warning
- Minecoin balances now refresh after purchasing a Marketplace gift without delaying the purchase confirmation
- Persona item thumbnails now retain their square proportions on the gift purchase confirmation and completion screens
- Reduced the spacing between Chinese, Japanese, and Korean characters to make text look more natural ([MCPE-242673](https://bugs.mojang.com/browse/MCPE-242673))
- The gift button for classic skin packs in the Dressing Room is now shown only when gifting is enabled and supported for the selected offer
- Players now see a disconnect error instead of remaining on the loading screen when incoming network data is corrupt or exceeds the decompression limit
- Long translated gift button labels in the Marketplace now display an ellipsis instead of being cut off mid-letter
- Cheats are no longer reset to defaults when setting the cheats toggle to OFF, preventing issue of resetting cheat settings when duplicating a world
- Updated the default world preview image, with a new seed and new coordinates. The image is shown with or without Vibrant Visuals, reflecting the video settings.
- Renamed the Music Features Add-On to Music on the Move Add-On and updated its pack description

### Marketplace

- The gifting friends screen now displays the correct number of daily gifts remaining, with a minimum of zero
- Updated the Create From Marketplace Pass screen

# Technical Updates

## AI Goals

### Timer Actor Flag Goals

- Added `trigger_on_end_when_interrupted` to timer actor flag goals which determines whether the `on_end` events run when another goal interrupts this goal before its duration elapses

## API

- Fixed a server crash when a command run through `Dimension.runCommand` or `Entity.runCommand`
- Fixed behavior packs with an explicit `@minecraft/common` or `@minecraft/server-graphics` dependency being rejected on Realms and dedicated servers with default configurations
- Improved various scripting error messages to include better context such as function name, argument name etc.
- Released `class PlayerCursorItemGrabAfterEvent` from `beta` to `v2.12.0`
- Released `class PlayerCursorItemGrabAfterEventSignal` from `beta` to `v2.12.0`
- Released `class PlayerCursorItemReleaseAfterEvent` from `beta` to `v2.12.0`
- Released `class PlayerCursorItemReleaseAfterEventSignal` from `beta` to `v2.12.0`
- Released `property WorldAfterEvents.playerCursorItemGrab` from `beta` to `v2.12.0`
- Released `property WorldAfterEvents.playerCursorItemRelease` from `beta` to `v2.12.0`
- Released `class BlockRecipeProcessingComponent` from `beta` to `V2.12.0`
- Released `class BlockRecipeCraftingComponent` from `beta` to `V2.12.0`
- Released `class RecipeCraftingContext` from `beta` to `V2.12.0`
- Released `class InvalidRecipeError` from `beta` to `V2.12.0`
- Moved the recipe crafting event APIs from `beta` to `v2.12.0`
  - `class PlayerCraftRecipeAfterEvent`
  - `class PlayerCraftRecipeAfterEventSignal`
  - `interface PlayerCraftRecipeEventOptions`
  - `property WorldAfterEvents.playerCraftRecipe`

## Editor

- Fixed a bug where the "\[" and "\]" keybindings were not working on the Editor Landing Page
- Fixed a scripting error that was being thrown while loading Marketplace worlds in Editor
- Added the Guide Planes panel for placing horizontal and vertical guide planes that help with precise cursor placement, even in the sky or in a void
  - Open it from the View menu or add it to the Action Bar
  - Add a plane from the "Add Guide Plane" dropdown, then move it with the gizmo or the position field
  - Each plane can be renamed, recolored, tagged, hidden, or teleported to from its entry in the panel
  - Press Ctrl+; to show or hide all guide planes
- Added world annotations to Editor, letting creators mark locations with text, drawings, or comments to document builds and share feedback
  - Use the annotation tool to create text, drawing, and comment annotations at world locations, and edit their content, appearance, and tags
  - Annotations can be viewed in playtest worlds
  - Use the Comment item in the Creative inventory to place comment annotations; these can be edited during gameplay, and playtest changes are migrated back to project worlds
  - Manage annotations from the management pane by filtering and sorting them, changing visibility, editing tags in bulk, deleting or teleporting to annotations, and exporting notes as text or CSV
- Added axis locking and CursorPrecisionMode for point-based visualization and positioning to the 3D Cursor API

## Entities

- Added the modifiable Beta-only field to an entity's description field `clear_behaviors_on_component_changes` to opt into clearing a mob's existing AI components when any component changes occur; it defaults to `false` for Beta documents
  - For Mobs using the Beta documents, AI goals no longer rebuild all goals after detecting a Mob has had component changes and instead only remove affected goals that are replaced or added, preserving existing goals

## Item Components

### minecraft:projectile

- `minimum_critical_power` now defaults to `-1` for item format versions 1.26.70 and later
  - Negative values disable critical hits
  - Items using earlier format versions keep the previous default of `0`

## Molang

- Starting with version 1.26.70, holding a Trident with a target no longer sets `variable.is_brandishing_spear` for non-player mobs other than Drowned
- Starting with version 1.26.70, the Trident's third-person throwing pose follows the holder's `variable.is_brandishing_spear` instead of whether the holder has a target
  - The holder's client entity must declare `variable.is_brandishing_spear` as `public` for the Trident to read it

## Stability and Performance

- Fix a crash when loading 2-dimensional biome chunk data with invalid values

## User Interface

- Fixed custom block items not being horizontally centered in larger inventory slots, such as the Pocket UI Creative menu and inventory hotbar, when they are not resized to fit the slot (for example with `"item_display_transforms" -> "gui" -> "fit_to_frame": false`)
- Changing tabs in dressing room now resets the scene stack
- Activation Button Label update for Resource Packs to be more generic.

# Experimental Technical Updates

## Actor

- Passenger of block will stop being passenger when the behavior pack is removed from the world

## API

- Added beta script API access to the `minecraft:climbable` block component, which has the following properties
  - `canClimb` returns whether a block can be climbed
  - `canHoldPositionWhileSneaking` returns if a player can hold their position on this block when sneaking
- Added `class VirtualContainer` to `beta`, a container that only exists in memory and can be shown to players as a chest style screen
- Added `property VirtualContainer.title` and `method VirtualContainer.getViewers` to `beta`
- Added `method VirtualContainer.open` and `method VirtualContainer.close` to `beta` for showing a virtual container to a player and closing it again
- Added `class VirtualContainerOpenError` and `enum VirtualContainerOpenErrorReason` to `beta`, thrown by `VirtualContainer.open` when the screen request can't be sent to a player
- Added `class VirtualContainerManager` and `property World.virtualContainerManager` to `beta` for creating virtual containers
- Added `interface VirtualContainerOptions` to `beta`
- Added `class VirtualContainerItemChangeAfterEvent`, `class VirtualContainerItemChangeAfterEventSignal` and `property WorldAfterEvents.virtualContainerItemChange` to `beta`
- Added `class VirtualContainerCloseAfterEvent`, `class VirtualContainerCloseAfterEventSignal`, `enum VirtualContainerCloseReason` and `property WorldAfterEvents.virtualContainerClose` to `beta`
- Added `interface VirtualContainerEventOptions` to `beta` for subscribing to virtual container events of specific containers only
- Added shulker box support to `ItemInventoryComponent` in `beta`
- In `beta`, `Dimension.playSound` now attaches sounds to an entity when the entity is passed as the location, making playback follow the entity; entity-attached sounds cannot currently be broadcast
- Added the beta method `setContext`/`getContexts` in `@minecraft/diagnostics`, which sets a named Sentry context of string, number, and boolean values that is attached to captured events.

## Blocks

- Added the experimental `minecraft:climbable` block component, which defines the climbable properties of a block. It has two boolean fields
  - `can_climb` when set to true, allows an entity to climb this block when its feet share the same position as the block
  - `can_hold_position_while_sneaking` when set to true, allows a player to hold their position on this block if sneaking when their feet share the same position as the block - In the case of `can_climb` set to false and `can_hold_position_while_sneaking` set to true, the block may not be climbed or descended, but a player can stop their fall by sneaking while their feet occupy the same position as the block
  - Requires format version beta and Upcoming Creator Features experiment
