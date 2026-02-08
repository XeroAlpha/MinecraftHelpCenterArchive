---
title: "Minecraft: Bedrock Edition 1.21.40 - Bundles of Bravery"
date: 2024-10-21T11:02:38Z
updated: 2024-10-21T15:52:10Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31222183227149-Minecraft-Bedrock-Edition-1-21-40-Bundles-of-Bravery
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-hardcore-mode: hardcore-mode
  user-content-bundles: bundles
  user-content-accessibility-features: accessibility-features
  user-content-android: android
  user-content-blocks: blocks-2
  user-content-commands: commands-1
  user-content-creative-inventory-changes: creative-inventory-changes
  user-content-gameplay: gameplay
  user-content-general: general-1
  user-content-graphical: graphical-1
  user-content-%3Ca-name%3D%22accordian%22%3Ehardcore-mode%3C%2Fa%3E: hardcore-mode-1
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-vr-%2F-mr: vr--mr
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine-1
  user-content-api: api-1
  user-content-camera: camera
  user-content-components: components
  user-content-entities: entities
  user-content-entity-components: entity-components
  user-content-entity-event-responses: entity-event-responses
  user-content-feature: feature
  user-content-items: items
  user-content-molang: molang-1
  user-content-resource-and-behavior-packs: resource-and-behavior-packs-1
  user-content-stability-and-performance: stability-and-performance
  user-content-trading: trading
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-cameras: cameras
  user-content-scripting: scripting
---

**Posted:** 22 October 2024

Today marks the launch of our third game drop: Bundles of Bravery! Featuring space-saving bundles and the hardest Survival mode out there (Hardcore mode!) this drop is all about embarking on a new adventure, collecting everything you can along the way, and definitely *not* dying. Given Hardcore mode brings hardcore stakes, we really can’t recommend backing up your Hardcore worlds enough – especially if you’ll be playing the new drop on low internet speeds (Read more about these bugs [here](#hardcore-mode-1)!). If that wasn’t enough stuff to stuff into a changelog, we’ve also fixed over 140 bugs, increased the spawn rate for bats above ground (because they’re cute, and more players should see them) and made a heap of technical changes for creators. Goodness, that was a lot, wasn’t it! Perhaps I should’ve stuffed it all into a bundle?

![Ari is walking through a snowy village holding a bundle, and wearing an iron chest plate with armour trims](https://feedback.minecraft.net/hc/article_attachments/31222207626381)

# Features and Bug Fixes

## Hardcore Mode

A new game mode for Bedrock Edition!

- You can't turn off Hardcore mode after creating this world
- The game is locked to the highest difficulty
- There are no second chances. If you die, it's game over!
- Upon death, you can only respawn as a spectator. You can still explore your world and watch others, but you’ll no longer be able to interact or rebuild

> ***Developer's Note:** We’re confident that Hardcore mode will run smoothly for most Bedrock players, but we’re still working on quashing some smaller bugs. Two of these impact multiplayer gameplay – one related to low internet speeds, and another when replacing a Creative mode Realm with a Hardcore mode world. While we develop a fix for these final bugs, we recommend all players regularly back up their worlds and check below for more detailed information on factors that might trigger them.*

## Bundles

A Bundle is an item that lets you stack different blocks or items together in the same inventory slot. Different items normally don’t stack together, so you can end up wasting space by only having a few items in each slot. A Bundle lets you pack those items together so there is no wasted space.

- A Bundle is an item that can pack different items together into the same stack
- A Bundle only fits one stack (usually 64 items) but it can be a mixture of many different item types
- You can insert items into a Bundle directly in the inventory
- Bundles have a tooltip that shows the items inside
  - If a Bundle has less than 12 item types inside, the tooltip will show all of them
  - Otherwise, the tooltip will show the top three rows of items and the others will be hidden below
- You can select any of the visible items to pull out of the Bundle
  - Use the scroll wheel on mouse, the right stick on a game controller, or tap on a touch device
- When selecting an item to remove, the Bundle icon shows that item poking out of the Bundle
- When holding a Bundle in hand, you can empty it onto the ground
- The Bundle is crafted with one String above one Leather

> **Developer's Note:** *The original prototype for Bundles was much more expensive to craft and used Rabbit Hide, which is only available in certain biomes, so the player had to explore to get their first Bundle. In this version we've made it cheaper and something that you can craft at home in almost any biome. We want it to be easy to get Bundles in a new world so you can use it in your early adventures.*

## Accessibility Features

- Re-implemented the left handed mode on touch devices for accessing the inventory from the hotbar ([MCPE-179608](https://bugs.mojang.com/browse/MCPE-179608))
- Added text-to-speech voiceover for items in Marketplace Pass Content tab and Realms Content tab 

## Android

- Fixed double input when using analog triggers on certain gamepads ([MCPE-175113](https://bugs.mojang.com/browse/MCPE-175113))

## Blocks

- Vines placed with commands are now visible ([MCPE-131854](https://bugs.mojang.com/browse/MCPE-131854))
- "mushroom_stem" is now its own block and is no longer a variant of "red_mushroom_block" and "brown_mushroom_block"
- "skull" has been split into 7 unique instances: "skeleton_skull", "wither_skeleton_skull", "zombie_head", "player_head", "creeper_head", "dragon_head", "piglin_head"
- Mob Spawner step sounds and hit sounds now play at their intended volume
- Trial Spawner hit sounds now play at their intended volume
- Fixed an issue with shipwrecks only generating lower-slabs. (This fix will not alter already generated shipwrecks) ([MCPE-186235](https://bugs.mojang.com/browse/MCPE-186235))
- Updated references to old block names in behavior pack wood recipe files
- Updated references to old block names in remaining behavior pack recipe files
- Fixed a bug where a block could be placed on a Vault block, causing weird block behaviors ([MCPE-186627](https://bugs.mojang.com/browse/MCPE-186627))
- Updated references to old block names in remaining behavior pack files

## Commands

- Game rule ShowRecipeMessages is no longer considered a cheat ([MCPE-177299](https://bugs.mojang.com/browse/MCPE-177299))
- Added the 'entity_offset' parameter to the camera command
- Issue where some commands did not recognize certain block or item names has been fixed 

## Creative Inventory Changes

> **Developer's Note**: Items and blocks in the creative inventory have been reorganized, with the goal of making overall sorting more intuitive.

- Trial Chamber items
  - Trial Keys were moved to be next to Ominous Trial Keys, very ominous ([MCPE-180280](https://bugs.mojang.com/browse/MCPE-180280))
  - Ominous Bottles were moved next to the existing Potions and were made into its own "Ominous Bottle" group ([MCPE-180278](https://bugs.mojang.com/browse/MCPE-180278))
- Stone group in the Nature tab
  - Stone was moved into the Stone group, finally ([MCPE-116364](https://bugs.mojang.com/browse/MCPE-116364))
  - Stone is now the front block of the Stone group
  - Basalt and Smooth Basalt were moved into the Stone group
  - Tuff and Polished Tuff were moved into the Stone group ([MCPE-176383](https://bugs.mojang.com/browse/MCPE-176383))
- Decorative Stone in the Construction tab
  - Smooth Stone was moved into Decorative Stone
  - Tuff Brick, Chiseled Tuff, and Chiseled Tuff Bricks were moved from the Nature Category to Decorative Stone in the Construction Category
  - Prismarine Bricks were moved from the Decorative Stone group, now they are next to Prismarine and Dark Prismarine
- Copper family etc. ([MCPE-176384](https://bugs.mojang.com/browse/MCPE-176384))
  - Reordered Raw Iron, Raw Copper, Raw Gold to Raw Copper, Raw Iron, Raw Gold
  - The Copper, Iron, and Gold blocks were moved to match the Raw versions ordering
  - The Copper Doors were moved to all the other Doors
  - The Copper Trapdoors were moved to the group with all the other Trapdoors, this is not a trap
  - Copper Blocks and Copper Grates are now sorted by Block type then by Oxidation level, instead of Oxidation level then Block type
- Tuff family
  - Tuff Stairs, Tuff Slabs, Tuff Walls, and their polished versions were moved from the Nature tab to the Construction Tab into their respective groups
- Other blocks
  - Bricks are now placed before the Slabs group
    - This change only affects Bricks made from Clay and not all the brick blocks
  - Chiseled Nether Bricks and Cracked Nether Bricks were moved next to the Nether Brick Block and Red Nether Brick
  - Quartz Bricks placed next to the other Quartz blocks
  - Rooted Dirt is now next to the other Dirt blocks
  - Many Dirt blocks and Grass variants were shuffled around to match Java Edition
  - Gravel is now ordered after the Stone group and is next to Sand and Red Sand
  - Clay was moved from the Construction Category to the Nature Category, placed next to the Mud Block

## Gameplay

- Wind Charges can't be hit and redirected shortly after throwing them
- Interacting with a Bed now sets it as the respawn point regardless of nearby enemies ([MCPE-152134](https://bugs.mojang.com/browse/MCPE-152134))
- Hardcore mode is now fully released. This mode locks player's game mode to Survival, locks difficulty to hard, and disables cheats. Players only have one life in Hardcore mode, if you die, you cannot respawn, only spectate
- Players hitting the edge of the generated world will keep their velocity. Example: While flying with the Elytra, the player will stay floating instead of losing all speed instantly
- Fixed a bug where Oozing, Weaving, and Wind Charged effects did not apply on player's death ([MCPE-180640](https://bugs.mojang.com/browse/MCPE-180640))
- Mobs can now perform Mace Smash attacks
- Players getting killed by the Mace's Smash Attack now get the correct death message ([MCPE-185952](https://bugs.mojang.com/browse/MCPE-185952))
- Fixed an issue that could prevent the player from respawning correctly ([MCPE-186324](https://bugs.mojang.com/browse/MCPE-186324))
- TNT explosions no longer reset momentum of other falling Primed TNTs. This should fix any issues that were occurring with TNT cannons ([MCPE-181055](https://bugs.mojang.com/browse/MCPE-181055))

## General

- Removed some Keyboard key bindings from Settings that should only exist in Minecraft Education: Control Tips, Code Builder, and Immersive Reader
- Added Minecraft for PlayStation®5, an enhanced version of the game for PlayStation®5 users that better utilizes the hardware for smoother performance

## Graphical

- Addressed an issue where the game would show pink on iOS when using Large Zoom ([MCPE-174398](https://bugs.mojang.com/browse/MCPE-174398)) ([MCPE-185373](https://bugs.mojang.com/browse/MCPE-185373))
- Data driven items are no longer misplaced in screenshots ([MCPE-185132](https://bugs.mojang.com/browse/MCPE-185132))

## [Hardcore Mode](#hardcore-mode-1)

Here are some of the bugs that we've fixed that could be especially troubling when playing in Hardcore mode!

- Fixed an issue where End Gateway Portals could teleport some players incorrectly ([MCPE-66061](https://bugs.mojang.com/browse/MCPE-66061))
- Fixed a bug that could sometimes cause the player to get pushed when pillaring up ([REALMS-9874](https://bugs.mojang.com/browse/REALMS-9874))
- Fixed issues with taking random fall damage ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140) , [MCPE-136406](https://bugs.mojang.com/browse/MCPE-136406))

**Known Issues:** These are some of the issues that may rarely occur, and may be worse when playing on a world with a slow connection

- Rain/snow sometimes does not visually match the actual weather ([MCPE-131325](https://bugs.mojang.com/browse/MCPE-131325))
- Blocks sometimes disappear when placed ([MCPE-112420](https://bugs.mojang.com/browse/MCPE-112420))

**Known Realms Issue:**

- Replacing an existing Realms Creative world with a Hardcore world, or vice versa, may corrupt some world settings for the newly-uploaded world. It is safest to only replace a Survival mode world with a Hardcore mode world to avoid this issue.

## Mobs

- Polar bear now drops Cooked Fish when killed by fire or lava ([MCPE-122488](https://bugs.mojang.com/browse/MCPE-122488))
- Pillager's 'celebrate3' sound now works ([MCPE-121058](https://bugs.mojang.com/browse/MCPE-121058))
- Wolves, Cats, and Parrots trying to catch up to their owner now seamlessly resume navigation after teleporting to them
- Wolves, Cats, and Parrots now teleport to their owner when panicking and far enough away
- Wolves now teleport to their owner when in a fight and far enough away, preventing them from being left behind ([MCPE-151765](https://bugs.mojang.com/browse/MCPE-151765))
- Piglins will no longer pick up and admire Powered Rail items ([MCPE-91187](https://bugs.mojang.com/browse/MCPE-91187))
- Wither Skeleton step sounds now play at their intended volume ([MCPE-185913](https://bugs.mojang.com/browse/MCPE-185913))
- Carved Pumpkin and Skull now rotates with Bogged's head when worn ([MCPE-178959](https://bugs.mojang.com/browse/MCPE-178959)) 
- The Breeze can no longer jump away from a player if it is on top of a Honey Block ([MCPE-176991](https://bugs.mojang.com/browse/MCPE-176991)) 
- Zombified Piglins spawned by a Nether Portal now have 15-second cooldown before it can use the Portal 
- Jump Boost now increases how high a Breeze can jump ([MCPE-176922](https://bugs.mojang.com/browse/MCPE-176922))
- Fixed issue with Minecarts stopping unexpectedly and then only being pushable in one direction ([MCPE-185643](https://bugs.mojang.com/browse/MCPE-185643))
- Updated the rules under which Bats spawn in the world:
  - Bats can now spawn at any height, provided the area is covered and sufficiently dark
  - Bats must spawn on one of the following blocks: Stone, Granite, Diorite, Andesite, Tuff, or Deepslate
  - As a result, Bats may now happen to spawn above the surface

## Realms

- Added two new Realm Events. Can you discover them?
- Fixed a bug that would prevent activation of addon for a Realm via Marketplace

## User Interface

- Hint about dismounting an entity no longer appears when changing dimensions and re-entering the world ([MCPE-182876](https://bugs.mojang.com/browse/MCPE-182876))

- Armor HUD now updates properly when the player's equipped armor breaks ([MCPE-103592](https://bugs.mojang.com/browse/MCPE-103592)) 

- Fixed a bug where the close button subpanel in the Stonecutter panel was empty instead of hidden while using controller

- Added a new message to explain when a Marketplace Template is not available on a specific platform

- Aligned the hunger and health bars with the experience bar in Classic UI on mobile devices ([MCPE-177192](https://bugs.mojang.com/browse/MCPE-177192))

- Air bubbles now line up properly with hunger bar ([MCPE-185268](https://bugs.mojang.com/browse/MCPE-185268))

- Position of player paper doll in the UI is now consistent between Classic and Pocket UI settings ([MCPE-57498](https://bugs.mojang.com/browse/MCPE-57498))

- Potions with percentage-based effects now show the percentage sign correctly on their tooltips (on mobile devices) ([MCPE-28531](https://bugs.mojang.com/browse/MCPE-28531))

- When dying by the thorns of a Guardian, the death message now reads "'Player' was killed trying to hurt 'Mob'" ([MCPE-114752](https://bugs.mojang.com/browse/MCPE-114752))

- Chat messages no longer overlap with one pixel ([MCPE-119761](https://bugs.mojang.com/browse/MCPE-119761))

- Item text no longer jumps up when looking at a non-interactable entity ([MCPE-161140](https://bugs.mojang.com/browse/MCPE-161140)) 

- Close and help button visuals for Smithing Table and Loom changed to match visuals for Cartography Table ([MCPE-166008](https://bugs.mojang.com/browse/MCPE-166008)) 

- "Hide Controller Hints" now properly hides all control hints in the Villager trading menu ([MCPE-167134](https://bugs.mojang.com/browse/MCPE-167134))

- Fixed a bug where the incorrect message would be shown on the experimental bed screen for certain values of the playerssleepingpercentage game rule ([MCPE-183431](https://bugs.mojang.com/browse/MCPE-183431))

- Single-tap to destroy now works with joystick/crosshair controls in Creative mode, without causing blocks to glitch ([MCPE-181789](https://bugs.mojang.com/browse/MCPE-181789))

- Fixed a bug where Realms invite links could overflow past their text boxes

- Items no longer get stuck in crafting grid after dropping an identical item from the recipe screen ([MCPE-73593](https://bugs.mojang.com/browse/MCPE-73593))

- Take From Bundle functionality now takes precedence over Clear Hotbar when an item in a Bundle is selected using gamepad ([MCPE-186359](https://bugs.mojang.com/browse/MCPE-186359))

- Inventory screen no longer shows item categories in tooltips unless the recipe book search screen is actually visible ([MCPE-128464](https://bugs.mojang.com/browse/MCPE-128464))

- When using the Swap Jump and Sneak option with touch controls, sneak button no longer flickers when you press close to it ([MCPE-159557](https://bugs.mojang.com/browse/MCPE-159557))

- Non-empty Bundles now have a fullness bar when inside of a Bundle ([MCPE-185457](https://bugs.mojang.com/browse/MCPE-185457)) 

- Added the possibility to edit the thumbnail of a world in the new OreUI Edit World screen

## Vanilla Parity

- Creepers now drop a Music Disc upon being killed by a Bogged ([MCPE-179008](https://bugs.mojang.com/browse/MCPE-179008))
- Bogged now drops Poison Arrows when killed by Mobs tamed by a Player
- Dyeing Sheep and collars on Cats and Dogs now plays the dyeing sound as in Java Edition ([MCPE-150684](https://bugs.mojang.com/browse/MCPE-150684))
- Mushroom Stems used on the Composter have had their fill chance adjusted from 85% to 65% 
- The all-sided pore mushroom block has been removed from the creative inventory
- Enchanted Golden Apples now give Regeneration II instead of Regeneration V, matching Java Edition ([MCPE-103061](https://bugs.mojang.com/browse/MCPE-103061))
- Added infinite duration option to Effect command. `/effect <player: target> <effect: Effect> infinite [amplifier: int] [hideParticles: Boolean]`
- Added specific effect removal option to Effect command. `/effect <player: target> clear <effect: Effect>` 
- Placing Cocoa Beans now plays a sound ([MCPE-49126](https://bugs.mojang.com/browse/MCPE-49126)) 
- Beehive and Bee Nest can no longer be used as fuel in Furnaces ([MCPE-128393](https://bugs.mojang.com/browse/MCPE-128393)) 
- Identical Lodestone Compass items now stack up to 64, matching Java Edition ([MCPE-109595](https://bugs.mojang.com/browse/MCPE-109595))

## VR / MR

- Our ability to support VR/MR devices has come to an end, and will no longer be supported in updates after March of 2025, when you will receive your final update. After you receive the final update, you will still receive updates on your PC and be able to play without a VR/MR device. From this point on you can keep building in your worlds, and your Marketplace purchases (including Minecoins) will continue to be available on a non-VR/MR graphics device such as a computer monitor. You will no longer be able to use your VR/MR device with Minecraft as it will no longer be supported in the latest updates.

# Technical Updates

## Add-Ons and Script Engine

- Fixed a bug where using "bone_visibility" for a block geometry would cause the "item_display_transforms" not to be applied properly ([MCPE-185868](https://bugs.mojang.com/browse/MCPE-185868))
- Fixed issue which prevented the new 1.21.30 trade table format from loading in-game 
- New Beta options in "minecraft:looked_at" and "minecraft:home" entity components now properly require that "use_beta_features" is specified in the root JSON object 

## API

- Fixed method `ItemStack.getComponents` from returning components that are unsupported in the current `@minecraft/server` version

- Fixed issue where invalid ModalFormData would never reject or resolve its promise ([MCPE-178148](https://bugs.mojang.com/browse/MCPE-178148)) 

- `BlockLiquidContainerComponents` API (water, lava, potion, snow) have been removed from beta 

- `BlockFluidContainerComponent` API has been added to beta, replacing the `BlockLiquidContainerComponents`

- Fixed some cases when the `entityRemove` World event would sometimes not be triggered 

- Fixed a crash that could occur with `getDimension` when called within `onBeforeActorRemove` on an entity that was invalid 

- Moved `getRedstonePower` from `beta` to `1.15.0` 

- Moved `isHardcore` from beta to 1.15.0

- Moved `EntityBreathableComponent` from `beta` to `1.15.0`

- Moved `breathesAir` from `beta` to `1.15.0`

- Moved `breathesLava` from `beta` to `1.15.0`

- Moved `breathesSolids` from `beta` to `1.15.0`

- Moved `breathesWater` from `beta` to `1.15.0`

- Moved `generatesBubbles` from `beta` to `1.15.0`

- Moved `inhaleTime` from `beta` to `1.15.0`

- Moved `suffocateTime` from `beta` to `1.15.0`

- Moved `totalSupply` from `beta` to `1.15.0`

- Moved `componentId` from `beta` to `1.15.0`

- Moved `getBreatheBlocks()` from `beta` to `1.15.0`

- Moved `getNonBreatheBlocks()` from `beta` to `1.15.0`

- Moved class `BlockLocationIterator` from `beta` to `1.15.0`

- Moved class `InvalidIteratorError` from `beta` to `1.15.0` 

- Moved property `BlockVolumeBase.getBlockLocationIterator` from `beta` to `1.15.0` 

- Moved enum `BlockVolumeIntersection` from `beta` to `1.15.0` 

- Moved class `BlockVolume` from `beta` to `1.15.0` 

- Added the `DyeableItemComponent` to `beta` 

- Moved `PlayerInteractWithBlockBeforeEvent` and `PlayerInteractWithBlockAfterEvent` from `beta` to `1.15.0` 

- Moved `PlayerInteractWithEntityBeforeEvent` and `PlayerInteractWithEntityAfterEvent` from `beta` to `1.15.0` 

## Blocks

- Added content warning when "carried_textures" or "blockshape" are incorrectly written in blocks.json
- Updated the Jigsaw Block
  - Fixed a bug where block data would not be saved when pressing "Done" ([MCPE-181405](https://bugs.mojang.com/browse/MCPE-181405))
  - Updated the Jigsaw Block UI
  - Added Selection Priority and Placement Priority fields

## Camera

- The `minecraft:follow_orbit` preset is no longer behind the experimental toggle 

## Commands

- Added new overloads for the `schedule` command which allows you to clear a queued function 
  - `/schedule clear <function name>` - Clears all queued functions matching the given name
  - `/schedule on_area_loaded clear function <function name>` - Clears all queued functions that are scheduled as `on_area_load` by name
  - `/schedule on_area_loaded clear tickingarea <tickingarea name> [function name]` - Clears all queued functions that are scheduled as `on_area_load` by ticking area name (and optionally also checks function name too)

## Components

- The "restriction_type" field has been added to the "minecraft:home" component, allowing to define how an entity is restricted to its home position:
  - Its values are:
    - "none", which poses no restriction
    - "random_movement", which restricts randomized movement around the home position
    - "all_movement", which restricts any kind of movement around the home position
  - The "all_movement" value is currently in \[Beta\] and is planned to be fully released at a later date
  - Entities that have moved too far from their home will always be able to move closer to it if prompted
  - The radius of the restriction is still specified with "restriction_radius"
  - Entities with a format version prior to 1.21.40 will be upgraded to use the new field in a way that preserves their existing behavior
- Added the "minecraft:dimension_bound" component, which prevents entities from changing dimension through portals 
  - In Vanilla content, this is used by the Ender Dragon, the Fishing Hook, and some projectiles
- Added the "minecraft:transient" component, entities with this component will never be saved. In Vanilla content, this is currently used for the Fishing Hook
- Renamed the "minecraft:lookat" component to "minecraft:looked_at" to better reflect its functionality
  - Its "look_event" field was also renamed to "looked_at_event"
  - Its "look_cooldown" field was also renamed to "looked_at_cooldown"
- Expanded the "minecraft:looked_at" component functionality with the addition of six new \[Beta\] fields: 
  - "find_players_only" restricts the search for entities looking at the owner entity to Players only, ensuring that the closest Player satisfying the specified "filters" is selected
  - "look_at_locations" defines the parts of the owner entity that are targeted for being looked at
    - For these parts, a line-of-sight check is performed to ensure no blocks obstruct the view
    - Supported values are "head", "body", and "feet"
  - "not_looked_at_event" specifies the event to trigger when no suitable entity is looking at the owner entity
  - "field_of_view" defines the width of the field of view, in degrees, for entities looking at the owner entity:
    - If "scale_fov_by_distance" is set to true, this value corresponds to the field of view at a distance of one block between the entities
  - "scale_fov_by_distance" determines if the field of view narrows as the distance between the owner entity and the entity looking at it increases
    - This ensures that the width of the view cone at the owner entity position remains relatively constant, regardless of distance
  - "line_of_sight_obstruction_type" defines which block shape is considered when checking for line-of-sight obstructions
    - Supported values are "outline," "collision," and "collision_for_camera"
  - Moreover, "set_target" now supports three different values:
    - "never", looking entities are never set as targets, but events are emitted
    - "once_and_stop_scanning", the first detected looking entity is set as target, but scanning and event emission is suspended if and until the owner entity has a target
    - \[Beta\] "once_and_keep_scanning", the first detected looking entity is set as target, but scanning and event emission continues
  - All these fields are planned to be taken out of \[Beta\] and fully released at a later date
- Moved the "minecraft:redstone_conductivity" component out of the Upcoming Creator Features experiment for format_versions 1.21.30 and above 
- The "minecraft:damage_sensor" component's "deals_damage" field now supports three values: 
  - "yes", received damage is applied to the entity
  - "no", received damage is not applied to the entity
  - "no_but_side_effects_apply", received damage is not applied to the entity, but the side effects of the attack are
    - This means that the attacker's weapon loses durability, enchantment side effects are applied, etc.
  - Pre-existing content will be automatically updated to maintain its original behavior
- Removed support for the "allow_invulnerable" field from the "minecraft:looked_at component" 
  - This field never had any functionality, so this change won't affect pre-existing or future content in any way
  - The field will be ignored for any content with a format version lower than 1.21.40
  - A content error will be emitted for any content with a format version equal to or higher than 1.21.40 that still uses this field

## Entities

- Horse armor now correctly renders on horses when using resource packs with a minimum engine version of 1.17.0 or lower ([MCPE-185316](https://bugs.mojang.com/browse/MCPE-185316))

## Entity Components

- "behavior.fire_at_target" is no longer usable if it is missing a projectile definition and will now throw a content error if so

## Entity Event Responses

- Added the "execute_event_on_home_block" entity event response, which allows the entity to execute an event on the block at its home position
  - The "event" field allows to specify the event to execute
  - For this to work properly, the entity must have a "minecraft:home" component with a set home position
- Added the "reset_target" entity event response, which allows an entity to reset its target 
- The "behavior.jump_around_target" can no longer be used by an Entity on top of a Honey Block ([MCPE-176991](https://bugs.mojang.com/browse/MCPE-176991)) 
- Jump Boost now increases how high an Entity can jump when using "behavior.jump_around_target" ([MCPE-176922](https://bugs.mojang.com/browse/MCPE-176922))
- Wind Charges now use the `minecraft:explode` component instead of `minecraft:wind_burst`
- Expanded `minecraft:explode` with the following new fields:
  - `damage_scaling`: A scale factor applied to the explosion's damage to entities. A value of 0 prevents the explosion from dealing any damage. Negative values cause the explosion to heal entities instead
  - `toggles_blocks`: If true, the explosion will toggle blocks in the explosion radius
  - `knockback_scaling`: A scale factor applied to the knockback force caused by the explosion
  - `particle_effect`: The name of the particle effect to use. The accepted strings are `wind_burst` or `breeze_wind_burst`. All other inputs will use the default explosion particles
  - `sound_effect`: The name of the sound effect played when the explosion triggers
  - `negates_fall_damage`: Defines whether the explosion should apply fall damage negation to Players above the point of collision
  - `allow_underwater`: If true, the explosion will affect blocks and entities underwater

## Feature

- Using unsupported feature placement in "pregeneration_pass" will now throw a content error instead of crash

## General

- Made the following changes to 'minecraft:single_block_feature'
  - 'places_block' now supports a list of weighted block specifiers
  - New 'randomize_rotation' property
  - New 'may_not_attach_to' placement conditions
  - Added 'diagonal' as a new option for 'may_attach_to' conditions
  - File format version increased to 1.21.40

## Graphical

- Fixed bug where the tessellation of Redstone dust does not match the powered state of the dust for the following blocks: 
  - minecraft:\*\_slab
  - minecraft:chain
  - minecraft:chorus_flower
  - minecraft:chorus_plant
  - minecraft:farmland
  - minecraft:grass_path
  - minecraft:heavy_core
  - minecraft:jigsaw
  - minecraft:sea_lantern
  - minecraft:sniffer_egg
  - minecraft:structure_block
- Add new the_end.client_biome.json as the first new type of file to contain per-biome rendering and audio settings in resource packs 
- Starting with base game version 1.21.40, built-in biomes_client.json files will no longer be loaded. That file from other packs will continue to be loaded. Water and fog settings are now in individual client_biome.json files in resource packs. When both biomes_client.json and the individual client_biome.json file specify competing values, the loaded biomes_client.json from creator content will have priority

## Blocks

- Fixed a bug where old block IDs were incorrectly overwriting data of new block IDs from blocks.json format_version 1.21.20 or higher ([MCPE-186255](https://bugs.mojang.com/browse/MCPE-186255)) 
- Updated references to old block names in behavior pack color recipe files 
- Updated references to old block names in behavior pack feature files
- Updated references to old block names in biome definition files

## Items

- The `"minecraft:item"` object is parsed with a strict loader from 1.21.40
  - Numbers and booleans are no longer interchangeable in the JSON input
  - Floating point numbers are no longer accepted where an integer is expected

## Molang

- Molang queries "wing_flap_position" and "wing_flap_speed" now work for the Chicken 

## Resource and Behavior Packs

- Built-in packs now include archive files for improved load performance on some platforms 

## Stability and Performance

- Increased the size of biome ids in saved chunk data from 8 bit to 16 bit values 
- Fixed a bug where extremely fast moving entities would cause the game to crash. Entities can now no longer move more than 16 blocks in a single tick. (For reference, an entity with Speed 255 will move ~11 blocks in a single tick.)
- Game will no longer crash when loading a world near an End City
- Worlds created with Experimental Custom Biomes before Caves & Cliffs update will have their Custom Biomes in Chunks replaced with a default Biome (Ocean for Overworld)
- Custom biome ids are now assigned with values starting at 30,000 and are stored in 'BiomeIdsTable' in world data so their id assignments persist for the duration of the world 
- Made a change on Nintendo Switch which may help neighboring chunks to load quicker when player has maximum framerate set ([MCPE-120971](https://bugs.mojang.com/browse/MCPE-120971))

## Resource and Behavior Packs

- Fixed an issue where packs were not downloaded or applied when joining a server that had CDN enabled
- Fixed an issue where user choice for downloading/applying resource packs during server join was ignored when CDN is enabled on the server

## Trading

- Fixed an issue where trades with negative 'max_use' values could not be traded

# Experimental Technical Updates

## Add-Ons and Script Engine

- Add support for custom items with the "minecraft:block_placer" item component to use the referenced "block" as the icon for the item
  - If the "minecraft:icon" component is specified, it will override the "block" icon
  - Requires the "Upcoming Creator Features" toggle. Must use item json version `1.21.40` or higher
- Added "replace_block_item" field to the "minecraft:block_placer" item component. This field allows you to specify that this item should replace the default item created for the data-driven block it places. To use this field, the identifier of the item must match the identifier of the block it places. This field is optional and defaults to false. 

## API

- Added enum `PlatformType`\
  export enum PlatformType {\
  Console = 'Console',\
  Desktop = 'Desktop',\
  Mobile = 'Mobile',\
  }\
  Class `ScriptClientSystemInfo`
  - Added field `platformType`
  - Added field `maxRenderDistance`

## Cameras

- Fixed an issue where `rider_rotation_lock` of `minecraft:rideable` had no effect when using the `minecraft:follow_orbit` camera
- Added `minecraft:camera_attach_to_player` to `minecraft:follow_orbit` 
- Added `align_target_and_camera_forward` option to the camera preset behavior pack JSON which can be used when the third person camera preset experiment is enabled 
- 3rd person camera experiment - The radius property of the creator cameras is now constrained to a value between 0.1 and 100
- Third person boom camera will now reset to the starting rotation values specified in json when the 'default' parameter is passed in the camera command
- Added camera relative movement to the "New Third Person Presets" experimental toggle 
  - Camera relative movement is enabled on any camera that inherits from `minecraft:follow_orbit` and sets `align_camera_and_target_forward` to `false`
- Added horizontal and vertical rotation limits to the Focus Target Camera experimental toggle 
- Added "continue_targeting" bool to the Focus Target Camera experimental toggle for tracking entities outside of set rotation limits 

## Molang

- Adding under upcoming creator features:
  - `query.client_memory_tier`. Returns a number representing the client RAM memory tier, 0 = 'Undetermined', 1 = 'SuperLow', 2 = 'Low', 3 = 'Mid', 4 = 'High', or 5 = 'SuperHigh'. Available on the Client (Resource Packs) only
  - `query.server_memory_tier`. Returns a number representing the server RAM memory tier, 0 = 'Undetermined', 1 = 'SuperLow', 2 = 'Low', 3 = 'Mid', 4 = 'High', or 5 = 'SuperHigh'. Available on the server side (Behavior Packs) only

## Scripting

- Added enum `MemoryTier`

``` hljs
    export enum MemoryTier {
        Undetermined = 0,
        SuperLow = 1,
        Low = 2,
        Mid = 3,
        High = 4,
        SuperHigh = 5
    }
```

- Added base class `SystemInfo`
  - Field `MemoryTier`
- Added class `ClientSystemInfo`.
  - Field `MemoryTier`
- Class `Player`
  - Added property `clientSystemInfo`
- Class `System`
  - Added property `serverSystemInfo`
