---
title: Minecraft Beta & Preview - 1.20.60.23
date: 2023-12-13T12:57:23Z
updated: 2023-12-13T14:50:22Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/22307322045197-Minecraft-Beta-Preview-1-20-60-23
---

**Posted:** 13 December 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![r20u6_4.jpg](https://feedback.minecraft.net/hc/article_attachments/22309433054349)

I love adventuring in Minecraft. Exploring biomes! Mining stuff! I reckon my pet wolf would love it too, but I’m much too much of an overprotective digital dog parent to let them outside the base. Until today! Because not only is the armadillo coming to pre-release versions of Minecraft: Bedrock Edition Preview and Beta (check out its adorable rolling up animation!) but wolf armor is coming, too. Meet the first iteration of the cautious armadillo, a neutral, savanna-dwelling mob that loves spider’s eyes, and rolls up whenever it feels threatened. Armadillos also drop a scute that can be used to craft wolf armor, which currently gives your four-legged friend roughly as much protection as diamond horse armor. Snazzy *and* safer! As always, we’d love your feedback on the armadillo and wolf armor, so please let us know what you think [here](https://aka.ms/MinecraftArmadilloFeedback), and report any bugs (spider’s eyes not included) at [bugs.mojang.com](https://bugs.mojang.com/). Now if you’ll excuse me, me and my furry friend are off to test the limits of how worried I can be about a cute collection of pixels!

# Experimental Features

## Armadillo

- Added the Armadillo
- The Armadillo is a neutral mob
- Drops Armadillo Scutes periodically
- Drops Armadillo Scutes when brushed
- Spawns in Savannas
- Favorite food is Spider Eyes
- When an Armadillo detects a threat, it rolls up
  - Threats are:
    - Players who are sprinting
    - Players on a mount or in a vehicle
    - Undead mobs
  - It does not roll up if it is fleeing, in water, in the air, or if being led
  - When an Armadillo is rolled up it does not walk, cannot eat, and will not be tempted by food
  - It continues to scan for threats, and if there are no threats detected for 3 seconds, it will unroll

## Armadillo Scutes

- Can be used to craft Wolf Armor
- Dropped by Armadillos
- Dispensers can be used to brush Armadillo Scutes off Armadillos

## Wolf Armor

- Using Wolf Armor on an adult tamed Wolf will equip the armor on the Wolf
  - Only a Wolf's owner can put Wolf Armor on their tamed Wolf, and with this in mind, Dispensers cannot put Wolf Armor on Wolves
- Using Shears on a Wolf that is wearing armor will make it drop the armor
  - Only a Wolf's owner can shear a Wolf Armor from it, and with this in mind, Dispensers cannot remove Wolf Armor from Wolves
- Wolf Armor gives the same protection as Diamond Horse Armor
- If a Wolf dies while wearing armor, it will drop the armor

## Blocks

- Exposed, Weathered, and Oxidized Copper Bulbs in Trial Chambers are now waxed ([MCPE-176949](https://bugs.mojang.com/browse/MCPE-176949))
- Trial Spawner randomizes the loot table only once each combat, for all players

## Copper Grate

- Fixed an issue with Waxed Copper Grate transparency ([MCPE-177171](https://bugs.mojang.com/browse/MCPE-177171))

## Breeze

- Breeze wind and wind charge rendering have been tweaked

## Commands

- Added a new command that will hide and reset HUD elements visibility.
  - /hud hide \<hud element\>
  - /hud reset \<hud element\>

The HUD elements available are:

- paperdoll
- armor
- tooltips
- touch_controls
- crosshair
- hotbar
- health
- progress_bar
- hunger
- air_bubbles
- horse_health
- all
- To use the command, turn on the Upcoming Creator Features toggle.

# Features and Bug Fixes

## Gameplay

- Fixed a crash occurrence when switching between dimensions frequently ([MCPE-166934](https://bugs.mojang.com/browse/MCPE-166934))
- Fixed certain cases that caused players to take unexpected fall damage when performing interactions at specific heights like 62 ([MCPE-168518](https://bugs.mojang.com/browse/MCPE-168518))
- Reintroduced a fix for players sometimes taking unexpected fall damage while building blocks while standing on them ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140))
- Fixed some cases where players could take unexpected fall damage near ledges that they were visibly not falling off of ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140))

## Mobs

- Fixed an issue where mobs, such as Zombies, were unable to pick up full stacks of items from the ground

## Graphical

- Added 4k resolution support for Xbox Series consoles

## User Interface

- The friends drawer in the new Play screen now allows joining a friend’s world with a join button. Please send us your feedback on this new feature here!

## Updated Edit World Screen

The latest Bedrock Preview introduces a new way of editing your worlds in a new redesigned experience. Some features are not supported yet, but we wanted to give you an early look at what we’re building. An updated Edit World experience will gradually be rolled out to players starting today.

![edit_world_sharp.png](https://feedback.minecraft.net/hc/article_attachments/22310475920269)

Changes: Edit World is being updated with improved navigation, more descriptions, and a new look and feel that matches the new Create New World Screen. It’ll be rolled out gradually across Android, iOS, Windows, and Xbox in the following days. We’re still working on some things, like support for other platforms, and some minor bugs and improvements. We need some more time to work on these features in order to provide the best possible experience. We would love to hear what you think! Share your feedback on the Feedback Site and put “Edit World” in the title so we can find it.

## Realms

- Introduced Realms Stories, a new social hub for your Realm
  - Realms Stories features include:
    - The Story Feed – lets you share your greatest gameplay moments with your fellow Realm members
    - The Timeline – lets you see when other members are playing on the Realm
    - The Members tab – shows a list of all Realm members and their permission levels
  - Please note that Realms Stories will not be accessible the first time you launch 1.20.60.23. To use Realms Stories, launch the game, close it, and then launch it again.
  - You can find more details about this feature on the feedback site, where we also hope you will share your thoughts about the feature.
  - Known issues:
    - The Story Feed won't update with new stories posted by other users until you exit Realms Stories and come back
    - Users that have been invited to the Realm but have not yet joined, and prior members who were in the Realm but have since left, will show up in the Members tab
    - Notifying owners about stories/comments doesn't work
    - Clicking the 'Manage Members' button as a Realm owner can result in a hang
    - Comments may not always appear properly
    - Screen-reader narration isn't finished
    - Realm members don't see themselves in the Members tab 

# Technical Updates

## Add-Ons and Script Engine

- The "minecraft:geometry.full_block" identifier for the "minecraft:geometry" block component has been added
  - The "minecraft:geometry.full_block" identifier provides a centered 1x1x1 cube geometry
  - When combined with a *material_instances* component with "render_layer": "opaque", it enables rendering-only capabilities previously included in the "minecraft:unit_cube" component including:
    - Occludes both vanilla and custom neighboring full blocks
    - Culls faces that neighbor vanilla and custom neighboring full blocks to improve rendering performance
- Add content error logging to help creators identify content that hits or exceeds the state bit/permutation count per block ([MCPE-177045](https://bugs.mojang.com/browse/MCPE-177045))

## General

- Updated listed values for the Vanilla "orientation" block state in documentation

## API

- Added Biome Registry biome names and *StructureFeatureType* enum to vanilla metadata generation

## Components

- Added an "interact_filters" field to the "ageable" component, which allows to specify conditions on when the actor can be fed

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) discussion forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Default block for BlockType in Selection tool is now 'grass'.
- Scripted property panes will now be scrollable once they reach a certain height.
- Editor Playtest pane now supports setting time of day and weather when testing levels, as well as minor tweaks to the layout. Time in the Playtest pane supports either Minecraft time (0-23999) or 24hr time (00:00-23:59). 
- Added new bindings and support for scripts to be able to push a TypeScript object as a payload on to the transaction stack, and register a set of handler functions which will receive the payload when the transaction system receives an undo or redo event
- A Navigation record system has been added to Editor. View the GitHub release notes for more details on features and functionality. 
- Added an export for stringFromExtension so that it can be used in both internal and external Creator extensions
- A new line tool is added to the Editor. View the GitHub release notes for more details on features and functionality. 
- Editor UI now scales according to the screen resolution rather than the game window size.
- Property options in the play/test pane retain their values when the game reloads. 

This week we are officially closing the v0.4.X semantic iterations and considering our work towards v0.5 done. View release notes in GitHub for additional details and an aggregate summary of all v0.4.X iteration updates.

## Molang

- Released Molang queries from experimental
  - *query.is_cooldown_type*
  - *query.cooldown_time*
  - *query.cooldown_time_remaining*
  - *query.relative_block_has_any_tag*
  - *query.relative_block_has_all_tags*
  - *query.block_neighbor_has_any_tag*
  - *query.block_neighbor_has_all_tags*
  - *query.block_has_any_tag*
  - *query.block_has_all_tags*
  - *query.bone_orientation_trs*
  - *query.bone_orientation_matrix* 

# Experimental Technical Features

## Add-Ons and Script Engine

- The "minecraft:unit_cube" block component has been deprecated. Using it in content marked 1.20.60 and beyond will provide a content error
  - Using content marked prior to 1.20.60 will have their "minecraft:unit_cube" block component upgraded to a "minecraft:geometry" block component with a "minecraft:geometry.full_block" identifier, but will maintain backwards compatibility with all behaviors

## API

- Updated function *addEffect* to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.

- Added item dynamic properties

- - Added function *clearDynamicProperties(): void* - Removes all dynamic properties from the item stack
  - Added function *getDynamicProperty(identifier: string): boolean \| number \| string \| Vector3 \| undefined* - Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined
  - Added function *getDynamicPropertyIds(): string\[\]* - Returns an array of all dynamic property identifiers on the item stack
  - Added function *getDynamicPropertyTotalByteCount(): number* - Returns the total byte count of all dynamic properties on the item stack
  - Added function *setDynamicProperty(identifier: string, value?: boolean \| number \| string \| Vector3): void* - Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed
  - Added function *clearDynamicProperties(): void* - Removes all dynamic properties from the item stack
  - Added function *getDynamicProperty(identifier: string): boolean \| number \| string \| Vector3 \| undefined* - Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined
  - Added function *getDynamicPropertyIds(): string\[\]* - Returns an array of all dynamic property identifiers on the item stack
  - Added function *getDynamicPropertyTotalByteCount(): number* - Returns the total byte count of all dynamic properties on the item stack
  - Added function *setDynamicProperty(identifier: string, value?: boolean \| number \| string \| Vector3): void* - Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed

- Added class *EntityProjectileComponent*. This component is used to shoot a projectile entity and modify its properties

- Added interface *ProjectileShootOptions*. This interface is used with function *EntityProjectileComponent.shoot* to optionally modify the accuracy of the projectile when shot

## Molang

- Changed cooldown query slot IDs to be required for container slots with more than one index, logging content errors if not provided
  - *query.cooldown_time(slotName,slotId)*
  - *query.cooldown_time_remaining(slotName,slotId)*
  - *query.is_cooldown_type(cooldownName,slotName,slotId)*

## Graphical

- The player's body will now cast a shadow in first person mode in the Deferred Technical Preview. Note that some held items will still not cast shadows
- The loading screen will no longer turn black on Android when entering a PBR-capable world with the Deferred Technical Preview enabled
- Hoppers in Minecarts no longer exhibit ghosting artifacts during camera motion when the Deferred Technical Preview is enabled
- The game no longer crashes when exiting a world with the Deferred Technical Preview enabled
