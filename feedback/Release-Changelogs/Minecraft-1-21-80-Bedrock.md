---
title: Minecraft - 1.21.80 (Bedrock)
date: 2025-04-30T10:28:12Z
updated: 2025-05-06T16:12:59Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36236281562637-Minecraft-1-21-80-Bedrock
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  minecraftserver-1190: "1190"
  minecraftserver-200-beta: 200-beta
  minecraftserver-ui-200-beta: 200-beta-1
  minecraftserver-200-beta-1: 200-beta-2
  minecraftserver-admin: ""
  minecraftserver-ui-200-beta-1: 200-beta-3
  added-new-container-apis: added-newapis
---

**Posted:** 6 May 2025

![Steve standing in world created with the snowy kingdom flat world preset, with a few blocks placed nearby, including a bed and a crafting table. There are rabbits nearby, as well as a polar bear and some slimes. ](https://feedback.minecraft.net/hc/article_attachments/36236269270285)

Have you ever looked out across the Overworld and just wished it was… flatter? Well, good news! Flat world presets are now available in Bedrock Edition! Whether you prefer to build on a clean slate or have an aversion to pointy landscapes, now you can have your pick of several exciting in-game presets, from Classic Flat to Water World. If that wasn't enough, there's also tons of bug fixes and some exciting features waiting behind the experimental toggle.

# Features and Bug Fixes

## Flat World Presets

- In the Advanced tab of the Create New World screen, enable Flat World to access flat world presets

  - Classic Flat
  - Tunnelers' Dream
  - Water World
  - Overworld
  - Snowy Kingdom
  - Bottomless Pit
  - Desert
  - Redstone Ready

## Accessibility

- Fixed an issue where Text To Speech wasn't working on Android Fire Tablet devices

## Audio Fixes

- Fixed an issue where all sound in Windows stops working after 40-41% loading ([MCPE-175138](https://bugs.mojang.com/browse/MCPE-175138))

- Music and sounds will no longer play once the save and exit button is pressed ([MCPE-190632](https://bugs.mojang.com/browse/MCPE-190632))

- Fixed Wolf spawning sounds not using the appropriate sound variants ([MCPE-190576](https://bugs.mojang.com/browse/MCPE-190576))

- Fixed credits music not playing if entering credits from the settings menu while game is paused. ([MCPE-190625](https://bugs.mojang.com/browse/MCPE-190625))

## Ambient Block Sounds

- The ambient sounds for Sand block, Dead Bush block and Terracotta block can now play ([MCPE-194677](https://bugs.mojang.com/browse/MCPE-194677))

## Blocks

- Sapling "age_bit" no longer regresses after an unsuccessful growth attempt, preventing nearby Observers from activating incorrectly ([MCPE-190286](https://bugs.mojang.com/browse/MCPE-190286))

- Fix ambient occlusion issue for non 1x1x1 blocks

  - When a block around any of these smaller non 1x1x1 blocks is broken, the AO computation is correctly applied to the face in the direction of that broken block. Previously the wrong face could be seen getting lightened/darkened.
  - A list of blocks affected: stairs, walls, gates, buttons, cakes, plates, fences, anvil, grindstone, hopper, bell, lectern, eggs, brewing stand

- Flowers now have the same random offset range and values as Java

- Bamboo, Hanging Roots, Mangrove Propagule, and Nether Sprouts now have the same random offset range and values as Java Edition

- Coral Fans and Coral Plants now have the same random offset range and values as Java Edition

- Double tall plants, like sunflowers, now have the same random offset range and values as Java Edition

- Pointed Dripstone, Tall Grass, and Dry Grass now have the same random offset range and values as Java Edition

- Basalt can be created if the soul soil is placed last after the lava and blue ice are already in place again ([MCPE-194008](https://bugs.mojang.com/browse/MCPE-194008))

## Bundles

- Empty open Bundle icon now renders correctly when Bundles are tapped with Touch Controls

## Character Creator

- Fixed an issue that caused the wrong sized player model to show when using custom skins ([MCPE-189739](https://bugs.mojang.com/browse/MCPE-189739))

## Gameplay

- Players will no longer pass through Blocks placed around x or z coordinates that are a power of 2. (Example 256, 512, 1024 ...) ([MCPE-173843](https://bugs.mojang.com/browse/MCPE-173843))

- Removed access to Virtual and Mixed Reality gameplay.

- Fixed server client desync issue during portal travel on Realms ([MCPE-188731](https://bugs.mojang.com/browse/MCPE-188731))

- Added 'music_definition' field to 'minecraft:biome_music' component in client_biome json files to control the music played in the biome. The default music will be determined by the dimension if the biome_music component or music_definition property is left off. An empty string can be used if the biome is intended to be silent

- Fixed an issue where the player would momentarily lay under or beside a Bed when going to sleep

- Deepslate Redstone Ore once again lights up after interacting with it ([MCPE-191381](https://bugs.mojang.com/browse/MCPE-191381))

- Deepslate Redstone Ore no longer stays infinitely lit up after interacting with it ([MCPE-136864](https://bugs.mojang.com/browse/MCPE-136864))

- When respawning from death while gliding or swimming players will now have the correct collision ([MCPE-189554](https://bugs.mojang.com/browse/MCPE-189554))

- Fixed a bug that a player can sprint in water faster than swimming

- Changed Elytra so that while gliding, using a firework will only be used as a boost even if placed on a block

- Fixed an issue where using a Firework with Elytra in another block like Sugar Cane would result in rubberbanding ([MCPE-191595](https://bugs.mojang.com/browse/MCPE-191595))

- Trail ruins now generate at the same location in Mutated Birch Forests between Java and Bedrock on the same world seed

## General

- Enabled *Filter Profanity* toggle on PlayStation, Nintendo, and Xbox platforms.

## Items

- Fixed a bug where most usable items could not be used while targeting a Mob Spawner ([MCPE-58999](https://bugs.mojang.com/browse/MCPE-58999))

- Mangrove Roots can now be used as fuel in Furnaces ([MCPE-155605](https://bugs.mojang.com/browse/MCPE-155605))

- Fixed an issue where adding items to a slot in a Chest while it is being updated by a Hopper might remove the items ([MCPE-166390](https://bugs.mojang.com/browse/MCPE-166390))

## Mobs

- Fixed a bug where named Slimes and Magma Cubes lose their names when splitting ([MCPE-14975](https://bugs.mojang.com/browse/MCPE-14975))

- Creakings no longer despawn on world reload ([MCPE-190845](https://bugs.mojang.com/browse/MCPE-190845))

- Parrots can now imitate Phantoms, Zoglins, Guardians, Ravagers, Pillagers, and Blazes ([MCPE-164404](https://bugs.mojang.com/browse/MCPE-164404))

- Wither Skeletons and Zombified Piglins can now walk in lava ([MCPE-46806](https://bugs.mojang.com/browse/MCPE-46806))

- Farm animal spawn eggs used in the Mangrove Swamp biome will now spawn the same variants of Chicken, Cow, and Pig as seen in the Java Edition ([MCPE-190750](https://bugs.mojang.com/browse/MCPE-190750))

- Mobs no longer have difficulty inflicting recurring hits when very close to non-moving players ([MCPE-189535](https://bugs.mojang.com/browse/MCPE-189535))

- Camels no longer spawn in spaces that are too small for them ([MCPE-190700](https://bugs.mojang.com/browse/MCPE-190700))

- Farmer villagers no longer occasionally get stuck when collecting grown crops ([MCPE-166344](https://bugs.mojang.com/browse/MCPE-166344))

- Fixed Evoker legs not moving when walking ([MCPE-191193](https://bugs.mojang.com/browse/MCPE-191193))

## Realms

- Fixed a crash when clicking several times while trying to upload a world to an inactive Realm slot
- Realms Server Hosting Region Preference Selection:
  - Added a new "Advanced" tab to the Realms settings screen where Realm owners can select which datacenter region they would like to host their Realm in
    - Options include a list of regions, or allowing the Realms service to automatically select the best region for the Realm owner or the first player to join the Realm in a given session
    - Note that this selection is a preference only and due to server capacity, your Realm may be hosted in a different region than selected and in that case, the next closest region to your preference will be selected
  - Added a message during joining a Realm to indicate which server region your Realm is assigned to for that session
  - For more information on Realms regional server hosting, read this detailed article: [Improved Realms Regional Support \| Minecraft](https://www.minecraft.net/en-us/article/improved-realms-regional-support)

## Recipes

- Fixed a bug where players could still craft unknown recipes when dolimitedcrafting game rule was enabled ([MCPE-186699](https://bugs.mojang.com/browse/MCPE-186699))

## Stability and Performance

- Fixed a bug that occasionally caused an error when creating a Realm on an empty slot

- Fixed a crash that could sometimes occur when certain foliage textures fail to load

- Fixed an issue that caused a crash while generating chunks

- Fixed bugs causing marketplace addon content to sometimes not load in a world

## User Interface

- Fixed a bug that could prevent Minecraft from loading the main menu, after cancelling a server transfer request from another server. ([MCPE-189096](https://bugs.mojang.com/browse/MCPE-189096))

- Potion of Slowness IV (standard, splash, lingering) is no longer separated from other slowness potions in Creative Menu ([MCPE-101923](https://bugs.mojang.com/browse/MCPE-101923))

- Touch Controls: Updated icons for Dismount and Jump buttons (when mounted) to be clearer and consistent between the touch control schemes ([MCPE-184403](https://bugs.mojang.com/browse/MCPE-184403))

- Suspending/minimizing the game with Screen Animations disabled no longer resets the world seed in the Create New World screen. ([MCPE-188975](https://bugs.mojang.com/browse/MCPE-188975))

- Touch Controls: Spectators can now also customize controls ([MCPE-184704](https://bugs.mojang.com/browse/MCPE-184704))

- Touch Controls: Fixed a bug that could cause issues when customizing touch controls during the death animation in Hardcore mode ([MCPE-186584](https://bugs.mojang.com/browse/MCPE-186584))

- Added modal to handle Not Enough Disc Space error in Edit World screen, Resource Packs tab

- Fixed "Download all missing packs" button not working under specific conditions

- Fixed a bug where the bed screen would display the wrong message when sleeping during a thunderstorm ([MCPE-190178](https://bugs.mojang.com/browse/MCPE-190178))

- Stopped main menu background rotation when entering new player flow

- Stopped main menu background rotation and logo text movement when the "screen animations" option is disabled.

- Worlds are no longer missing from the Storage menu

- Bundle tooltip no longer sometimes renders as if having a different amount of items

- Adding "Manage Storage" button if download fails due to lack of space with instructions on what needs to be cleared out.

- Adding "Clear Download Cache" button to storage for clearing files that got stuck due to a downloading error.

- Auto clearing the download cache on startup if it detects that it is running out of space.

- Fixed an issue which prevented the escape keyboard shortcut from working in certain scenarios on the death screen

- Bundle slot selection using gamepad right stick no longer skips slots when playing in split screen

- Stacks are now correctly splitting across slots when moving cursor and holding the left mouse button to split a stack evenly across slots

- Updated the friends drawer status to tell if a friend is playing in the same world as you

- Bundle UI now correctly disappears when interacting with Inventory tabs in Pocket UI

- Fixed a bug where the game would be unresponsive for a short while after leaving the bed screen.

## Vanilla Parity

### General

- Add magic crit particles for enchanted weapons, to better match the Java edition ([MCPE-18704](https://bugs.mojang.com/browse/MCPE-18704))

### Items

- Cut Sandstone Slabs can now be crafted in the Stonecutter using Cut Sandstone ([MCPE-42734](https://bugs.mojang.com/browse/MCPE-42734))

- Cut Red Sandstone Slabs can now be crafted in the Stonecutter using Cut Red Sandstone ([MCPE-42734](https://bugs.mojang.com/browse/MCPE-42734))

- Totem of Undying now gives the same 45 second regeneration as Java ([MCPE-90716](https://bugs.mojang.com/browse/MCPE-90716))

- Shears now consume durability when used on Beehives and Bee Nests with full Honey level ([MCPE-63995](https://bugs.mojang.com/browse/MCPE-63995))

- Shields now take durability damage from explosions ([MCPE-121484](https://bugs.mojang.com/browse/MCPE-121484))

### Mobs

- The maximum amount of Raw Rabbits dropped from Rabbits is now increased by 1 for each level of Looting ([MCPE-47125](https://bugs.mojang.com/browse/MCPE-47125))

### Structures

#### Woodland Mansion

- Iron Axe with Efficiency I now always generates in a Chest inside Woodland Mansion's tree-chopping room ([MCPE-109048](https://bugs.mojang.com/browse/MCPE-109048))

# Experimental Features

## Game Drop 2 2025 Experiments

- Enable the "Drop 2 2025" experimental toggle to test out these new features!

## Blocks

### Dried Ghast

- Can be found in the Nether in Nether Fossil structures
- Can be crafted with 1 Bone block and 8 Ghast Tears
- When waterlogged it undergoes 3 states over about 20 minutes until it spawns a Ghastling mob
- Makes sounds and shows particles depending on state
- If mined during the waterlogging, it will revert to its "dry" state regardless of what state it has reached during waterlogging
- Will revert states back to its initial "dry" state when it is taken away from being waterlogged, using the same time scale

## Mobs

### Ghastling

Ghastling is a young version of the Happy Ghast mob.

- Spawns from a Dried Ghast block that has continuously been waterlogged for about 20 minutes.
- After spawning, the Ghastling will try and follow:

1.  Players within a 16-block radius *or*
2.  An adult, non-aquatic passive mob (and some neutral mobs) within a 16-block radius  
    If no player or suitable mob is close around the Ghastling will idle around within 32 blocks from its home position (where it spawned or last was interacted with).

- Can be tempted and fed using Snowballs
- Will grow up into a Happy Ghast after about 20 minutes (or faster if fed Snowballs)
- Can be summoned using the command: "/summon happy_ghast ~ ~ ~ ~ ~ minecraft:spawn_baby"

### Happy Ghast

The Happy Ghast is a new flying mount that can carry up to four players.

- Spawns from a Ghastling after about 20 minutes (or faster if Ghastling is fed Snowballs)
- Can be equipped with a harness and then be mounted by up to 4 players
- Tempted by Snowballs and Harness. Harness tempting only works if the Happy Ghast is unharnessed
- Has no panic behavior when taking damage
- Cannot be bred
- Slowly regenerates health, with regeneration speeding up during rain, snow or when flying at the same height as clouds are rendered
- The first player that mounts the Happy Ghast will control it, sitting in front of the Happy Ghast, just above its face
- When a player mounts, the goggles on the Happy Ghast go down to cover its eyes, indicating that it now can be controlled
- Other players who mount after the pilot is mounted, are placed in slots on each side of the Happy Ghast, starting clockwise from the "pilot" player
- Pressing crouch button dismounts the player on top of the Happy Ghast
- If the Happy Ghast detects players on top of it, it then ceases all movement and aligns to the closest cardinal horizontal direction
- This happens regardless of it having a harness equipped or not
- 3rd person camera is moved back when player is mounted on the Happy Ghast
- When there are no players mounted or walking on the Happy Ghast, the goggles go up and the Happy Ghast starts to roam around the home position
- If players dismount midair, the Happy Ghast will descend towards the ground before it resumes roaming
- Cannot enter boats
- Idles around within 64 blocks from its home position (where it spawned or last was interacted with)
- If wearing a harness, the Happy Ghast idles closer to the home position (within 32 blocks).
- The Happy Ghast will try to stay close to blocks when roaming on its own
- **Known Issue:** The Happy Ghast's health is currently set to 40 when it should be 20. We will be addressing this as soon as possible!

### Ghast

- Updated Ghast texture

## Items

### Harness

Harness is a new item that can be equipped on a Happy Ghast to allow players to ride it.

- Crafted out of 3 leather, 2 glass blocks and 1 wool block, the harness will have the same color as the wool block used when crafting
- Can be re-dyed
- Can only be equipped on a Happy Ghast
- Allows up to 4 players to mount the Happy Ghast
- Can be removed from the Happy Ghast using Shears but only when no players are mounted

## Commands

- Added the Game Rule command `locatorBar` to enable or disable the Locator Bar feature

## Vibrant Visuals

The features, lighting, effects, and assets are still in development, so expect things to change and improve over time as we continue to iterate.

Supported devices include Xbox Series X\|S, Xbox One, PlayStation 4, PlayStation 5, Android, iOS, and PC.

- Android: Adreno 640, Mali-G68, Mali-G77, or Xclipse 530 or higher
- iOS: A12 or M1 or higher
- PC: Running Minecraft on DX12

Our team is hard at work testing Vibrant Visuals on even more Minecraft: Bedrock Edition devices, and we hope to be able to update this list of supported devices in the future.

To use Vibrant Visuals in a World, you must enable the "Vibrant Visuals" toggle in the Experimental tab in the Create New World or Edit World screens. This will expose Vibrant Visuals as an option in the in-game Video settings Graphics Mode dropdown, which can then be selected alongside the other existing rendering modes.

Presets for choosing between "Favor Visuals" and "Favor Performance" are available in the Video Settings. Specific feature and visual settings can also be adjusted by expanding "Vibrant Visuals Options".

Splitscreen is not supported with Vibrant Visuals and the game will switch to Fancy or Simple rendering if multiple players are joined locally.

Marketplace Add-Ons, Skins, and Persona items will work with Vibrant Visuals, however, Worlds and Texture Packs are not compatible with the new mode at this time.

### Known Issues

- Some visual corruptions may exist on certain Android devices, particularly with Mali GPUs
- Surfaces deeper than eight blocks underwater are dark
- Light may leak into underground areas or shadows may pop in and out, especially near cave entrances
- Textures may turn pink after suspend and resume, opening Settings, or exiting world
- Metallic surfaces might appear with some visual bugs in certain conditions
- Emissive surfaces might not glow or appear white in certain conditions

You can report any issues at [bugs.mojang.com](https://bugs.mojang.com/) and please send us your feedback at [aka.ms/mcvibrantvisualsfeedback](https://aka.ms/mcvibrantvisualsfeedback)

## Locator Bar

- The Locator Bar is a new UI element on the Player HUD that displays the direction of other Players in the World.

- When the Locator Bar Experiment is enabled and there are multiple Players in a World, the Locator Bar will appear on-screen for each Player, replacing the Experience Bar. The Player Level number will still be visible as before above the Locator Bar.

- The Locator Bar will display colored indicators when the camera is facing within 120 degrees towards another Player. If another Player is 30 degrees above or below the camera's viewport (the screen) an up or down arrow will be displayed.

- Crouching will hide the Player, preventing their indicator from appearing on the Locator Bar of other Players.

- Players in Spectator Mode are not visible on the Locator Bar.

- A Mob Head or a Carved Pumpkin will similarly hide Players from the Locator Bar when worn in the head slot.

- Using a Potion of Invisibility will also hide players from the Locator Bar.

> **Developer's note:** When the Locator Bar moves out of experimental, we plan on making it a feature that Players can toggle on and off.

- Player Dots on the Locator Bar now show correctly regardless of Simulation Distance

- Dots are now shown representing Players in Spectator Mode to other Players also in Spectator Mode on the Locator Bar

## Known Issues

- The Locator Bar has the following known issue, so we recommend testing it with a Simulation Distance of 4 chunks
  - If the Simulation Distance is set to greater than 4 chunks then the Locator Bar may not show players in between 4 chunks and the Simulation Distance

# Technical Updates

## API

- Fixed an issue with BlockPermutation::withState in outdated scripts that prevented some states from being set correctly on a number of blocks

  - Affected blocks include any which have had their directional or placement states recently changed
  - Scripts created after these blocks were changed may need to be updated to avoid unintended behavior

- Moved the following Player methods from `beta` to `v1.18.0`

  - `setPropertyOverrideForEntity`
  - `removePropertyOverrideForEntity`
  - `clearPropertyOverridesForEntity`

- Moved `enum Difficulty` from `beta` to `v1.19.0`

- World

  - Move `getDifficulty(): Difficulty` from `beta` to `v1.19.0`

  - Move `setDifficulty(difficulty: Difficulty): void` from `beta` to `v1.19.0`

- Moved the following Player methods from `beta` to `v1.19.0`

- Renamed `BoundingBox` to `BlockBoundingBox` and released from `beta` to `v1.19.0`.

- Renamed `BoundingBoxUtils` to `BlockBoundingBoxUtils`.

- Moved `dimension.placeFeature` and `dimension.placeFeatureRule` from `beta` to `v1.19.0`

### `@minecraft/server` 1.19.0

- Moved methods `StructureManager.placeJigsaw` and `StructureManager.placeJigsawStructure` from `beta` to `1.19.0`.

- Moved interface `JigsawPlaceOptions` from `beta` to `1.19.0`.

- Moved interface `JigsawStructurePlaceOptions` from `beta` to `1.19.0`.

- Moved error class `PlaceJigsawError` from `beta` to `1.19.0`.

### `@minecraft/server` 2.0.0-beta

- Coroutines (promises) are now flushed in early execution to allow async imports to interact with early execution APIs like Custom Components and Custom Commands.

- Added support for custom command enums.

- Added `Enum` type to `CustomCommandParamType`

- `spawnEntity` method of `Dimension` no longer supports using a spawn event inside the `identifier` parameter. `SpawnEntityOptions` interface now has an optional string member `spawnEvent?: string` for specifying a spawn event to be sent to the entity when it is spawned. Please update any existing usages of spawn events inside `identifier` to instead use this new `spawnEvent` option. For example: `spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", {x:0, y:0, z:0})` should become `spawnEntity("minecraft:horse", {x:0, y:0, z:0}, {spawnEvent: 'minecraft:ageable_grow_up'})`

- `EntityGroundOffsetComponent` has been remove.

- `Block` method `getComponent` will return `BlockCustomComponentInstance` for custom components registered with `BlockComponentRegistry` in `2.0.0`.

### `@minecraft/server-ui` 2.0.0-beta

- Class `ModalFormResponse`
  - Changed type for `formValues` property from `(boolean | number | string)[]` to `(boolean | number | string | undefined)[]`.

    - New Signature: `formValues?: (boolean | number | string | undefined)[]`.
    - Old Signature: `formValues?: (boolean | number | string)[]`.

  - `formValues` array now contains entries for all the elements provided by the request. It means that labels, headers, and dividers are considered into the response with an `undefined` value.

### Molang

- `query.graphics_mode_is_any` no longer requires the Upcoming Creator Features experiment

## Biomes

- Moved Vanilla biome JSON files from an internal folder to the appropriate Vanilla behavior packs

- Removed remainder of support for unused "minecraft:consolidated_features" and "minecraft:legacy_world_generation_rules" JSON components

## Blocks

- Blocks using the `minecraft:block_placer` component now can get added as loose items in the creative inventory and recipe book again

- From 1.21.80 onward, when using a minecraft:geometry component or minecraft:material_instances component, you must include both

- New render_method type available for minecraft:material_instances. They are meant to support the same behavior of block turning opaque in the far rendering like Leaves in contrast to other disappearing like Bamboo Stalk.

  - "render_method": "blend_to_opaque"
  - "render_method": "alpha_test_to_opaque"
  - "render_method": "alpha_test_single_sided_to_opaque"

- The field "tint_method" in the "minecraft:map_color" component no longer requires the "upcoming creator features" toggle

- The field "tint_method" in the "minecraft:destruction_particles" component no longer requires the "upcoming creator features" toggle

- The field "tint_method" in the "minecraft:material_instances" component no longer requires the "upcoming creator features" toggle

- Block using the minecraft:destruction_particles component will now correctly be sent to player connecting to a host.

## Block Components

- Removed UpcomingCreatorFeatures experiment requirement for field `"isotropic"` in `"minecraft:material_instances"` component

- Fixed isotropic textures in `"minecraft:material_instances"` being squashed and stretched for non-square faces

## Commands

- Released `/place structure` and `/place jigsaw` out of the `Data-Driven Jigsaw Structures` experiment

## Components

- The "minecraft:rideable" component now has three new additional fields:

  - "dismount_mode" defines where riders are placed when dismounting the entity:
    - "default", riders are placed on a valid ground position around the entity, or at the center of the entity's collision box if none is found
    - "on_top_center", riders are placed at the center of the top of the entity's collision box
  - "on_rider_enter_event", defines the event to execute on the owner entity when an entity starts riding it
  - "on_rider_exit_event", defines the event to execute on the owner entity when an entity stops riding it

- Content errors will log missing texture references in the "minecraft:icon" item component

- The "minecraft:rideable" component's Seat definition now has two additional fields:

  - "third_person_camera_radius" can be used to set a different camera radius when in third person or third person front camera. The value needs to be in the range \[1.0, 64.0\]. Value 0.0 is ignored.
  - "camera_relax_distance_smoothing" adds springiness to the camera movement when the camera moves back to its radius after being pushed closer to the player by and obstacle. A higher value means a stiffer spring. The value needs to be in the range \[1.0, 32.0\]. Value 0.0 is ignored.

- The "minecraft:leashable" component now support multiple presets:

  - A list of presets can be defined in the new "presets" field
  - Each preset determines how the entity behaves when leashed to another entity
  - A preset is selected when the entity is leashed and remains active until it is leashed to something else
  - The first preset whose "filter" conditions are met will be applied
  - If no presets match, a default configuration is used instead
  - The following fields are now part of each preset:
    - "filter": Defines the condition that selects this preset out of all the presets upon leashing
    - "soft_distance": Distance at which the spring effect begins
    - "hard_distance": Distance at which the leash stiffens
    - "max_distance": Distance at which the leash breaks
    - "can_be_stolen": Determines if a player can steal the leashed entity using a Lead

- Added validation for block asset references in components

  - Content errors will log missing block references for the following components:
    - item component "minecraft:digger"
    - item component "minecraft:entity_placer"
    - item component "minecraft:block_placer"
    - spawn rules component "minecraft:spawns_on_block_filter"
    - spawn rules component "minecraft:spawns_on_block_prevented_filter"
    - spawn rules component "minecraft:spawns_above_block_filter"

- "can_be_stolen" has been moved from "presets" back to being a direct sub-field of the "minecraft:leashable" component

- Content errors will log missing entity references in the "minecraft:entity_placer" and "minecraft:projectile" item components

## Documentation

- Include biome and client_biome JSON files in generated documentation

- Fixed a bug where incorrect Json errors would appear for valid item texture references

- Introduced a "drop_item_y_offset" parameter to the "minecraft:interact" component

  - Defines a custom y-axis offset for when an item is dropped
  - Requires "drop_item_slot" to be specified

- The "minecraft:leashable" component's "on_unleash" trigger triggers on the leash breaking with format version 1.21.80 and later

  - The old behavior is still available to opt in to by setting "on_unleash_interact_only" to true

## Editor

We are excited to announce Editor v0.9.5! To learn more about Editor and its multiblock world editing capabilities, check out the documents [HERE](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/?view=minecraft-bedrock-stable), or learn how to build an Editor Extension [HERE](https://github.com/Mojang/minecraft-editor)

### Feature Highlights in Editor v0.9.5

#### Selection Updates

The selection experience in Editor has been completely revamped! Enjoy a new, widget-based system with click-and-drag Marquee selection, undo/redo support, and updated keyboard shortcuts for faster, more precise editing. We've also added two new Trim Actions—Trim and Remove Air—to help refine your selections down to just the blocks you need. Plus, the new Magic Select mode lets you quickly grab non-air blocks above a selected point, making it easier than ever to work with structures. Give these tools a try and level up your building flow!

#### New Tutorial System

We added a new tutorial flow accessible from the Help menu. It's designed to help new users quickly get up to speed with how to use Editor and its core features.

### Full Editor Changelogs

- Selection system has been completely overhauled and now leverage client widgets

  - Selection Marquee now support click and drag to select
  - Selection Marquee still supports opposing corner mode using CTRL key
  - Marquee and Freehand selection now support undo and redo
  - Widgets colors are integrated with the theme manager
  - Updates to keyboard shortcuts:
    - Keyboard control for selection volumes now supports keyboard repeat
    - (Marquee) SHIFT+Click create multiple volumes
    - (Freehand) SHIFT+CTRL removes brush voxels from selection
    - (Freehand) SHIFT adds brush voxels to existing selection
    - ALT+Arrow keys move the selection volume (Marquee & Freehand)
    - CTRL+Arrow keys resize the selection volume (Marquee only)
    - ENTER selects a volume
    - SHIFT+ENTER selects an additional volume
    - CTRL+S enters selection mode. CTRL+S again (while in selection mode) cycles between Marquee and Freehand

- Added a new toggle group for `Trim Actions`

- Added 2 new trim actions `Trim` (shrink the selection bounding volume to include only the specified non-air blocks) and `Remove Air`(remove all air blocks (and specified blocks) from the selection to create a new selection containing only the specified blocks)

- Added "Magic Select" to selection modes. This mode allows users to quickly select non-air blocks at and above a selected block. This is extremely useful when working with structures. The current implementation is prototype and only has an 8-block search radius, upwards from the point of click. Holding SHIFT while clicking will make the selection additive to any existing selections

- Added an indicator to the 3D Block Cursor to show the face that the mouse is pointing at

- Added a new tutorial flow which can be activated from Help menu.

- Added a new `RelativeVolumeListBlockVolume` volume type for Editor use to replace `CompoundBlockVolume`

- Added a new Client Widget `Bounding Box` and `Volume Outline` components

- Added keyboard repeat to cursor controls

- Added visualization to Smart Fill tool

- Added visualization to Extrude tool

- Added visualization to Line tool

- Added fields 'Spawn Position', 'Time of Day' and 'Weather' in a new section of initial play settings.

- Added feedback UI to show the progress and result.

- Added a 'Custom Mapping' subpane to the Workbench extension which adds the ability to add mappings for custom block properties

- Added global keybind for activating Workbench

- Added a tool mode key shortcut for Reload operation, it will be unbound by default

- Added a new `editorConstants` object to the player context. This provides access to a number of constant values and methods that are commonly used across Editor (both in TypeScript and Native code)

- Added game rules to Export: Limited Crafting, Show Death Message, Show Item Tags, Command Block Output, Send Command Feedback, Max Command Chain Length, Fire Damage, Freeze Damage, Fall Damage, Drowning Damage, Insomnia, Show Border Effect, Function Command Limit

- Added a missing string when there is an empty slot in the Realms Slot dropdown

- Added unbound keybindings for Trim and Remove Air from Selection

- Adding an animation on the viewport and opening the log panel when an error is logged.

- Updated performance on Smart Fill & Extrude

- Updated brush shape settings to be local to the modal tool and specific configuration of that tool

  - Removed `registerBrushShape` from `BrushShapeManager` API, only core brushes will be supported for core tools.

- Updated icon for `delete` inside the selection tool.

- Updated naming of color setters and getters in the Widget system to use the same terminology (Outline for borders, Hull for fills, Highlight for specialized borders)

- Updated the Structure Panel to have the ability to create a new Structure from an existing selection

- Updated the Structure Panel to allow the editing of the origin field

- Updated editing fields for structures in the structure panel to allow saving while a field is being edited

- Updated the brush volume max sizes so that they don't exceed our max voxel count for selection operations

- Updated core modal tool ordering in the tool rail

- Removed deprecated property pane API

- Removed `CompoundBlockVolume` usage in Editor Script APIss

- Fixed a bug that prevented theme to be changed to Redstone from UI Settings

- Fixed a bug that caused Keyboard Settings buttons to be misaligned in certain resolutions

- Fixed a bug where visualizations beyond 100x100x100 in the Repeater tool would appear

- Fixed Crash on exit editor when selection volume is visible

- Fixed the brush visualization reset when jumping from matches to no matches (artifacts of the old match state were left attached to the visualization)

- Fixed Publish to Realms bug by cleaning up local world copy that's created during publish process

- Fixed a bug where passing a complex volume with non-contiguous voxels was copying only the contents of the bounding rectangle to the clipboard. Only the specified voxels should have been copied. This now allows us to create structures where air and structure voids are stripped out

- Fixed an issue with Freehand select near or outside of dimension bounds that could cause selection to become unusable

- Fixed issues with selection volumes being able to translate or resize past world bounds. This also fixes using large brush shapes with freehand selection (and magic select) close to a world boundary

- Fixed a bug that caused Extrude Axis options to be incorrect for Pyramid brush shape

- Fixed an issue related to files and folders being permanently deleted when deleting structures in the structure panel

- Fixed a bug where moving a structure to the clipboard while in Paste Preview (with no actual active clipboard) did not update the clipboard client widget

- Fixed some bugs around freehand selection with very large volumes

- Fixed a bug where a number of script widget errors would fire when entering The Nether as the startup dimension at Editor open

- Fixed a bug that caused mouse cursor to be released when changing to Crosshair mode

## Entity Filters

- Added new entity filter "has_equipment_tag", works like "has_equipment" but takes an item tag instead of an item name

## General

- Updated the client side biome component 'minecraft:water_appearance' field 'surface_color' to be optional. Added a content error that fires if the component is empty.

## Goals

- `minecraft:behavior.float_wander` has been updated with new fields:

  - `navigate_around_surface`: enables the usage of a new algorithm to find random positions to navigate to. The new algorithm aims to find random positions in the vicinity of solid (i.e. non-Air and non-liquid) blocks, and if that fails will fall back to finding a random position in the vicinity of the current dimension's surface level.
  - `additional_collision_buffer`: makes sure there are no blocks present in an inflated area around the target position.
  - `allow_navigating_through_liquids`: allow the mob to have target positions inside liquids
  - `surface_xz_dist`: the distance in the horizontal directions to look for nearby surfaces. Only valid when `navigate_around_surface` is true.
  - `surface_y_dist`: the distance in the vertical directions to look for nearby surfaces. Only valid when `navigate_around_surface` is true.

- `minecraft:behavior.follow_mob` has been updated with the following new fields

  - `use_home_position_restriction`: If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. If false, it will choose target position without considering home restrictions.
  - `preferred_actor_type`: The type of actor to prefer following. If left unspecified, a random actor among those in range will be chosen.
  - `filters`: If non-empty, provides criteria for filtering which nearby Mobs can be followed. If empty default criteria will be used, which will exclude Players, Squid variants, Fish variants, Tadpoles, Dolphins, and mobs of the same type as the owner of the Goal.

- Added fields to "minecraft:behavior.tempt" goal

  - The "stop_distance" field specifies a custom distance for when the tempted mob should stop moving towards the player
  - The "on_start" field specifies the event to trigger when the goal starts
  - The "on_end" field specifies the event to trigger when the goal ends

- Added "minecraft:behavior.float_tempt" goal, which allows a tempted mob to move in a line towards the player

  - This goal is a variant of the "minecraft:behavior.tempt" goal and shares the same fields
  - Requires the mob to be in a floating state (e.g. use the "minecraft:navigation.float" component)

## Graphical

- Added support for multiple locators for use with leashes for rendering multiple ropes between two entities.
  - "multi_lead_n":
    - where n = {1, 2, 3, 4} defines locators when the entity is leashed to a different entity.
    - Used if and only if it has a corresponding "multi_lead_hold_n" and the number n is equal on the two entites.

  - "multi_lead_hold_n"
    - Where n = {1, 2, 3, 4} defines locators where the entity is leashing a different entity.
    - Used if and only if it has a corresponding "multi_lead_n" and the number n is equal on the two entites.

  - "lead"
    - is set to origin if it is not defined in the geo.

  - "lead_hold"
    - is set to origin if it is not defined in the geo.

  - Re-enabled local exposure on all platforms in Vibrant Visuals mode.

  - Fixed an issue that caused candles, chiseled bookshelves and dried kelp blocks not to use PBR textures in Vibrant Visuals mode and Raytracing mode ([MCPE-132021](https://bugs.mojang.com/browse/MCPE-132021))

  - Stained glass now renders with correct colors when using Vibrant Visuals.

## Items

- Bundles' open icons are now specified via `IconItemComponent`. This addresses the issue where a missing texture would appear for an opened custom Bundle. Bundle icon paths have also now be separated into unique keys in `item_texture.json`.

## Marketplace

- Upon reading encrypted files on Xbox we would sometimes lose the last byte, causing some files to become invalid and fail to load.

## Mobs

- Spawn Eggs from Custom Mobs from Behavior Packs now show up again in the spawn eggs group ([MCPE-190620](https://bugs.mojang.com/browse/MCPE-190620))

## Molang

- Added the "query.leashed_entity_count" Molang query, which allows querying how many entities have the given entity as their leash holder

- Added 'query.has_any_leashed_entity_of_type' which takes a list of entity identities and checks if the actor has any of the listed entities leashed. Available on both the client and the server.

  - Usage: "query.has_any_leashed_entity_of_type( 'minecraft:sheep', 'minecraft:creeper' )"

## Network Protocol

- Added ActorFlags::DOES_SERVER_AUTH_ONLY_DISMOUNT

## Stability and Performance

- Make friends drawer and play screen more performant using a cached view.

- Fixed a crash caused by buffer overrun in the data driven renderer when multiple values wrote to overlay color

- Fixed null pointer de-referencing crash in chunk rendering

## Structures

- Fixed mirroring of door blocks when part of a structure that is being placed.

- Exposed new fields to data driven jigsaw structures: start_height, dimensional_padding, pool_aliases, max_distance_from_center

- made height_map_projection optional and changed anchor to start_jigsaw_name

## User Interface

- Fixed a bug where worlds set to Creative would be created with cheats turned on

# Technical Experimental Updates

- Removed unused experimental json field minecraft:nether_surface in the behavior pack biome file

## API

- `EntityMarkVariantComponent` has been changed to read-only in version 2.0 beta

### `@minecraft/server` 2.0.0-beta

- `EntityPushThroughComponent` has been changed to read-only.

- `resetHudElements` method on `ScreenDisplay` has been renamed to `resetHudElementsVisibility`.

- `ItemStack` methods `getComponent` and `getComponents` will return `ItemCustomComponentInstance` for custom components registered with `ItemComponentRegistry`.

- `ItemStack` method `hasComponent` will return true for custom components registered with `ItemComponentRegistry`.

- `EntitySkinIdComponent` has been changed to read-only in version 2.0 beta

- Added property `localizationKey` to `Entity`, `Block`, and `ItemStack` which returns the key used for finding the localized names of these objects

- Added `CustomCommandOrigin` to custom command script callback.

- Added `CustomCommandSource` enum.

- Renamed `CustomCommandPermissionLevel` to `CommandPermissionLevel`.

- Renamed `CustomCommandParamType.Position` to `CustomCommandParamType.Location`

- `BlockCustomComponent` now take an optional `CustomComponentParameters` object for Custom Components V2 experiment as a second argument to event callbacks in 2.0.0-beta

- `CustomComponentParameters` added to 2.0.0-beta

  - `params` property added to `CustomComponentparameters` to 2.0.0-beta

- `ItemCustomComponent` now take an optional `CustomComponentParameters` object for Custom Components V2 experiment as a second argument to event callbacks in 2.0.0-beta

- `EntityFrictionModifierComponent` has been changed to read-only in version 2.0.0-beta

### `@minecraft/server-admin`

- Added `AsyncPlayerJoinBeforeEvent`
  - Added `beforeEvents.asyncPlayerJoin`, `AsyncPlayerJoinBeforeEvent`, and `AsyncPlayerJoinBeforeEventSignal` to allow creators to delay players joining the world.
  - `AsyncPlayerJoinBeforeEventSignal.subscribe` is different than other events because the callback it accepts returns a promise. Once the promise is resolved, the player will join the world, or if the promise is rejected the player will be disconnected without joining the server. The player will be at the loading screen while the promise is pending.

### `@minecraft/server-ui` 2.0.0-beta

- Class `ModalFormData`.
  - Changed function `dropdown`.
    - Removed parameter `defaultValueIndex?: number`.
    - Added parameter `dropdownOptions?: ModalFormDataDropdownOptions`.
  - Changed function `slider`.
    - Removed parameter `valueStep: number,`.
    - Removed parameter `defaultValue?: number`.
    - Added parameter `sliderOptions?: ModalFormDataSliderOptions`.
  - Changed function `textField`.
    - Removed parameter `defaultValue?: minecraftserver.RawMessage | string`.
    - Added parameter `textFieldOptions?: ModalFormDataTextFieldOptions`.
  - Changed function `toggle`.
    - Removed parameter `defaultValue?: boolean`.
    - Added parameter `toggleOptions?: ModalFormDataToggleOptions`.
- Added interface `ModalFormDataDropdownOptions`:

``` code-line
export interface ModalFormDataDropdownOptions {
    defaultValueIndex?: number;
    tooltip?: minecraftserver.RawMessage | string;
}
```

- Added interface `ModalFormDataSliderOptions`:

``` code-line
export interface ModalFormDataSliderOptions {
    defaultValue?: number;
    tooltip?: minecraftserver.RawMessage | string;
    valueStep?: number;
}
```

- Added interface `ModalFormDataTextFieldOptions`:

``` code-line
export interface ModalFormDataTextFieldOptions {
    defaultValue?: string;
    tooltip?: minecraftserver.RawMessage | string;
}
```

- Added interface `ModalFormDataToggleOptions`:

``` code-line
export interface ModalFormDataToggleOptions {
    defaultValue?: boolean;
    tooltip?: minecraftserver.RawMessage | string;
}
```

#### Added new `Container` APIs:

- `contains(ItemStack)`: Attempts to find an instance of an item inside the container
- `firstEmptySlot()`: Finds the index of the first empty slot inside the container
- `firstItem()`: Finds the index of the first item inside the container
- `find(ItemStack)`: Find the index of the first instance of an item inside the container
- `reverseFind(ItemStack)`: Find the index of the last instance of an item inside the container

#### Custom Commands

Added support for custom commands authored in script. The new `CustomCommandRegistry` is provided when listening to `ModuleStartupEvent`. More APIs in the area will come in the coming weeks.

Additional types added:

- `CustomCommandRegistry`
- `CustomCommandPermissionLevel`
- `CustomCommandParamType`
- `CustomCommandResult` and `CustomCommandStatus`
- `CustomCommandParameter`

## Blocks

- Always add a missing Destruction Particles component to blocks that have a Material Instances component, using the "down" material as reference

  - The "texture" field in "minecraft:destruction_particles" is now optional; if not provided or empty, it will be populated from the Material Instances component

- When Custom Components V2 experiment is enabled, `minecraft:custom_components` component is deprecated in 1.21.80 and higher format versions

- When Custom Components V2 experiment is enabled, custom components are flattened inline with other components and allow parameters in 1.21.80 and higher format versions. Example:

``` code-line
"components": {
    "example_namespace:example_component": {
        "someParam": 3,
        "anotherParam": "test"
    }
}
```

- New field "condition" added to the culling rules schema. It provides more control over which neighbor blocks will trigger a face or part to be culled.

  - The supported values are "default", "same_culling_layer", "same_block" and "same_block_permutation".
    - "default" will pass the condition if the neighbor block is full and opaque
      - All conditions are an extension of "default", meaning a full and opaque neighbor will always be a passing condition, before the extended "same\_\*" condition is checked
    - "same_culling_layer" will pass the condition if the neighbor block shares the same "culling_layer" as the block being occluded, defined in the geometry component
      - If either of the culling layers being compared is "minecraft:culling_layer.undefined", the condition will never pass
    - "same_block" will pass the condition if the neighbor block has the same identifier
    - "same_block_permutation" will pass the condition if the neighbor block has the same identifier and is the exact same permutation
  - Additionally, the feature is currently only usable behind the "upcoming creator features" toggle.

- New field "culling_layer" added to the block's geometry component. It allows different blocks to be grouped together when using the "same_culling_layer" condition in a culling rules file.

  - When using the minecraft namespace, the only allowed culling layer identifiers are : "minecraft:culling_layer.undefined" or "minecraft:culling_layer.leaves".
  - Additionally, the feature is currently only usable behind the "upcoming creator features" toggle.

## Bug

- Fixed rotation of Jigsaw sections when `Data-Driven Jigsaw Structures` is enabled.

## Cameras

- Changed approach for the easing between moving targets under the Experimental Creator Camera Features toggle

## Commands

- Added the `/controlscheme` command for switching control schemes when the Experimental Creator Camera toggle is enabled

## Experiments

- Added Custom Components V2 experiment

## Gameplay

- Added 'minecraft:replace_biomes' component to allow for custom biomes to replace portions of vanilla biomes. To use, add to custom biome files in behavior packs

  - Known issues: Mob spawning on custom blocks is not working, removing an add-on with a custom biome will cause issues, a total replacement of all biomes will cause the locate structure command to lag

## Items

- When Custom Components V2 experiment is enabled, `minecraft:custom_components` component is deprecated in 1.21.80 and higher format versions
- When Custom Components V2 experiment is enabled, custom components are flattened inline with other components and allow parameters in 1.21.80 and higher format versions. Example:

``` code-line
"components": {
    "example_namespace:example_component": {
        "someParam": 3,
        "anotherParam": "test"
    }
}
```
