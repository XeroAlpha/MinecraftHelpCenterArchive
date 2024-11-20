---
title: Minecraft Beta & Preview - 1.21.60.20
date: 2024-11-19T11:23:54Z
updated: 2024-11-20T16:35:45Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31998389834637-Minecraft-Beta-Preview-1-21-60-20
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-accessibility: accessibility
  user-content-blocks: blocks
  user-content-copper-bulb: copper-bulb
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-mobs: mobs
  user-content-breeding: breeding
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-biomes: biomes
  01JD50VYJKXC2YAVE0D0G63EE9: blocks-2
  01JD50VYJKRAFCYSXVT95XDQ9B: mobs-1
  user-content-technical-updates: technical-updates
  user-content-api: api
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-entity-filters: entity-filters
  user-content-graphical: graphical
  user-content-items: items
  user-content-sounds: sounds
  user-content-technical-experimental-updates: technical-experimental-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-commands: commands
  01JD50VYJKW731CK0B4E2JT4KV: gameplay-1
  01JD50VYJN8Z56ZKSNR2VZWT5R: components-1
  01JD50VYJN4E7RSF78D86VVZVE: graphical-1
  01JD50VYJMQ74QHPJAEHCHJ9RJ: user-interface-1
---

**Posted:** 20 November 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on the upcoming game drop features at [aka.ms/mcgamedropfeedback](https://aka.ms/mcgamedropfeedback), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)! Here's what's new this week:

# Features and Bug Fixes

## Accessibility

- Added narration in the Realms plan picker screen informing the player they can navigate below the "buy" button to get more information about a given plan

## Blocks

- Slightly improved the collision detection between moving blocks and mobs in some cases 
- Sculk Sensors now detect Resin Clumps being placed by the Creaking Heart ([MCPE-188260](https://bugs.mojang.com/browse/MCPE-188260)) 
- Fixed various plant blocks rendering their faces differently to Java ([MCPE-40646](https://bugs.mojang.com/browse/MCPE-40646))
  - All saplings
  - Short Grass
  - Dead Bush
  - Crimson Roots
  - Warped Roots
  - Poppy
  - Blue Orchid
  - Allium
  - Azure Bluet
  - All Tulips
  - Oxeye Daisy
  - Cornflower
  - Lily of the Valley
  - Dandelion
  - Red and Brown Mushrooms
  - Carrots
  - Wither Rose
  - Open and Closed Eyeblossom
  - Torchflower
  - Sweet Berry Bush
  - Lilac
  - Tall Grass
  - Lage Fern
  - Rose Bush
  - Peony
- Mangrove Leaves no longer display black pixels when held by Players with the "Fancy Leaves" option disabled ([MCPE-156469](https://bugs.mojang.com/browse/MCPE-156469))
- Torchflowers, Pitcher Plants, Open Eyeblossoms and Closed Eyeblossoms now increase the probability of a nearby Sapling growing into a tree with a Beehive

### Copper bulb

- Updated the Exposed Copper Bulb's Lit Powered texture ([MCPE-177105](https://bugs.mojang.com/browse/MCPE-177105)) 

## Gameplay

- Added ability to pause the game in singleplayer worlds when entering the pause screen, the feature can be turned on/off from the Settings in the General section.
  - We'd love to know what you think of this addition, please send us your feedback at [aka.ms/mcbedrockpausefeedback](https://aka.ms/mcbedrockpausefeedback)

## General

- The world spawn point algorithm has been improved, so that locations with good biomes but far from the world's origin are preferred over really bad locations but closer to the origin ([MCPE-120237](https://bugs.mojang.com/browse/MCPE-120237))
- Filter Profanity Toggle. We are introducing a new "Filter Profanity" setting on Windows. When on, all text content including chat will perform as it always has; profanities will be filtered for you and others. When off, most profanities, with the exception of some potentially harmful content, will be unfiltered for you and all others who also have the toggle off. The setting is default on for all players and cannot be changed for child accounts or players not signed in. You can toggle it off in Settings under "General". 

## Mobs

- Creakings now crumble if their Creaking Heart is forcibly deactivated through commands 
- Creakings are now persistent like any other hostile mob, meaning they won’t disappear on save/load ([MCPE-188352](https://bugs.mojang.com/browse/MCPE-188352)) 
- Creaking no longer plays ambient sounds when aggravated, only when idle

### Breeding

- Breeding Sheep with compatible wool colors now gives the Baby Sheep a mixture of the colors ([MCPE-19862](https://bugs.mojang.com/browse/MCPE-19862)) 
- Breeding Wolves now produce offspring with one the parents' collar colors or a mixture of the parents' collar colors if the colors are compatible
- Breeding Cats with compatible collar colors now gives the Baby Cat a collar with a mixture of the colors ([MCPE-188187](https://bugs.mojang.com/browse/MCPE-188187)) 

## Realms

- Player profile pics in Realms Stories will now load in more reliably
- Fixed an issue where users could sometimes not rejoin a Realm they left by using an invite code. 
- Removed unnecessary duplicate calls to the Realms API. 
- At the Realms World Select screen, when a world slot is selected, the focus will change to the Edit World button if is it present, or Activate World if not.
- Added logic to check for Realms trial offer availability on top of the client's trial eligibility before presenting it to players. 

## User Interface

- Disabling Realms Stories badge notifications via the Stories Settings screen now hides badges in the Story Feed as well as the Play Screen
- Touch Controls: The empty space in the center of the D-pad no longer acts as the forward button when flying or swimming ([MCPE-183944](https://bugs.mojang.com/browse/MCPE-183944))
- Fixed Players needed to skip night slider on the Edit World screen to be able to go to 0%
- Changed wording for lowest number required for player sleeping to skip the night.
- In response to player feedback signaling confusion around the meaning of the potion bottle, we've updated the location, labeling and icon usage for Achievements across multiple screens.
- For the achievement % counter, a new book asset replaced the potion bottle and supports multi-tier visual states to celebrate progress, including a delightful animation for 100% completion. 
- Consolidated the fancy graphics toggle and ray tracing toggle into a single Graphics Mode dropdown. Fancy and Ray Tracing mode are equivalent to having the previous Fancy and Ray Tracing toggles enabled, and the Simple mode is equivalent to having neither of the previous toggles enabled.

## Vanilla Parity

### Biomes

- Zombie Villagers that spawn in the Mangrove Swamp biome now have the correct skin applied ([MCPE-158736](https://bugs.mojang.com/browse/MCPE-158736)) 
- Monsters that normally spawn in the Overworld (Zombies, Endermen, Spiders, Creepers, etc., with the exception of Skeletons) can now spawn in the Mangrove Swamp biome ([MCPE-170183](https://bugs.mojang.com/browse/MCPE-170183)) 

### Blocks

- The Lily Pad Block's hitbox has been updated to be in parity with Java ([MCPE-60826](https://bugs.mojang.com/browse/MCPE-60826))
- The Sugar Cane Block's hitbox has been updated to be in parity with Java ([MCPE-60827](https://bugs.mojang.com/browse/MCPE-60827)) 
- TnT Blocks no longer flash with a solid white color when exploding ([MCPE-51809](https://bugs.mojang.com/browse/MCPE-51809)) 
- Candles and Candle Cake Blocks now play ambient sounds properly ([MCPE-130585](https://bugs.mojang.com/browse/MCPE-130585))
- Shears can now be used on Cave Vines, Kelp, Twisting Vines, and Weeping Vines to prevent further growth ([MCPE-141497](https://bugs.mojang.com/browse/MCPE-141497))

### Mobs

- Horses, Skeleton Horses, Zombie Horses, Donkeys, and Mules now play their ambient sounds as intended ([MCPE-178313](https://bugs.mojang.com/browse/MCPE-178313))
- Foxes now periodically play their "mad" sound while defending a player
- Baby Drowneds now move with the same speed as their Zombie and Zombie Villager counterparts ([MCPE-34574](https://bugs.mojang.com/browse/MCPE-34574))
- Gold Swords dropped by Piglins and Zombified Piglins now have randomized durability to match Java ([MCPE-75292](https://bugs.mojang.com/browse/MCPE-75292))
- Axes dropped by Piglin Brutes now have randomized durability to match Java ([MCPE-95543](https://bugs.mojang.com/browse/MCPE-95543)) 
- Creepers no longer flash with a solid white color when exploding ([MCPE-51809](https://bugs.mojang.com/browse/MCPE-51809))
- Neutral Mobs no longer become aggressive when Players or other Mobs throw Lingering Potions with positive effects on them ([MCPE-105343](https://bugs.mojang.com/browse/MCPE-105343))

# Technical Updates

## API

- Updated numeric JavaScript enums now properly handle and support reverse value mappings. 
- Fixed a bug where calling `Player.hideAllExcept` could crash the server.
- InputPermissions
  - Moved the following `InputPermissionCategory` enum values to 1.17.0: `LateralMovement`, `Sneak`, `Jump`, `Mount`, `Dismount`, `MoveForward`, `MoveBackward`, `MoveLeft`, and `MoveRight`
  - Moved the following methods on `PlayerInputPermissions` to 1.17.0:
    - `isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;`
    - `setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;`
- Removed the "compostingChance" available from the ItemStack API. The composting chance for Vanilla items can now be accessed via the singular CompostableItemComponent-\>compostingChance in the Item Component API. 
- Fixed edge cases where `ModalFormData` scrolls to the bottom when UI is opened.

## Blocks

- Removed "Upcoming Creator Feature" toggle requirement for `minecraft:item_visual` component.
- Updated `"minecraft:material_instances"` component
  - Removed **UpcomingCreatorFeatures** experiment requirement for `"abmient_occlusion"` field to be float type 
- Re-added new field `"ambient_occlusion_exponent"` to **blocks.json** file schema in resource packs, replaces broken `"brightness_gamma"` field. ([MCPE-188216](https://bugs.mojang.com/browse/MCPE-188216) , [MCPE-188221](https://bugs.mojang.com/browse/MCPE-188221)) 

## Components

- The Strider now makes use of the minecraft:movement_sound_distance_offset component for its movement sound distance offset

## Editor

- Added Roughen brush to terrain tool
- Added color picker hue gradient selector works for monochromatic values 
- Updated Editor Compass body to toggle between NSEW directions and Axis directions (Z, -Z, X, -X) on click
- Updated block picker to a floating window and made the viewport behind it clearer for middle-click 
- Updated Flatten Brush to a Native Brush, increased maximum Height and Radius
- Updated export and play test pane to now include beds work and required sleeping players as export options 
- Updated hot bar item to open block picker when shortcut key is pressed and block is already selected
- Fixed a number of missing block icon thumbnails for block:// image resource
- Fixed error sound triggered by pressing the number 9 key

## Entity Components

- The "minecraft:breedable" component now has a field that enables the offspring's "minecraft:color" attribute to be a blend of the parents' "minecraft:color"
  - "combine_parent_colors", If a color mutation will not happen, the baby will get a combination of the parents' colors if the colors are compatible. Color combinations follow the rules of DyeItem combinations. If the colors are not compatible the baby will get one of the parents colors chosen randomly
    - Valid values: "true", "false"

## Entity Filters

- Added new entity filter "home_distance", which checks the distance of an entity from its home 
  - Requires the subject entity to have a "minecraft:home" component
  - Returns false if the subject has no home or if the home is in a different dimension
- Added new entity filter "is_bound_to_creaking_heart", which checks if the Creaking Heart that spawned the subject Creaking still exists 

## Graphical

- Improved logic for handling very large textures within atlases. Textures that are guaranteed to overflow the maximum atlas size will now have mips dropped individually rather than forcing the entire atlas to drop mips.

## Items

- Added a content warning to the "minecraft:durability_sensor" item component's "particle_type" when an invalid value is provided 

## Sounds

- Added "base" parameter to block sounds specifying another block sound they should use sounds for if they do not define a sound themselves

# Technical Experimental Updates

## Add-Ons and Script Engine

- Updated Aim Assist, now it can only be used in third person camera perspectives. Switching to a unsupported camera type will disable aim assist

## Commands

- Added support for input glyph replacement for `/me` and `/tell` commands. For example, using input string ":\_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.

## Gameplay

- Added easing between two moving cameras when "Creator Camera: New Third Person Presets" experiment is enabled 

### Components

- Removing a waterlogged custom block using the `minecraft:liquid_detection` component with `stopsLiquidFlowingFromDirection` enabled for all directions now results in flowing water rather than a stagnant block of water. 

## Graphical

- Fixed a bug that caused a black screen on some PowerVR-based Android devices when using the Deferred Technical Preview. Some PowerVR devices are still known to experience issues. 
- Fixed a bug that caused blocks moved by a piston to flicker with the Deferred Technical Preview enabled
- Sub Surface Scattering is now affected by point lights in the Deferred Technical Preview. 
- Fixed a bug where the seams of certain cubemap faces would be visible in sky reflections in the Deferred Technical Preview

## User Interface

- Added a new radio button to allow players to select if they want Deferred Video Settings to favor performance or favor visuals.
- Added support for input glyph replacement for signs, signed books, and NPC dialogs. For example, using input string ":\_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.
