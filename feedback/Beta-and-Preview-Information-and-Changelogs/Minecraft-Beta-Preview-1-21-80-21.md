---
title: Minecraft Beta & Preview - 1.21.80.21
date: 2025-03-18T15:39:14Z
updated: 2025-03-18T15:39:25Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/35112373785869-Minecraft-Beta-Preview-1-21-80-21
hash:
  user-content-experimental-features: experimental-features
  user-content-user-interface: user-interface
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-mobs: mobs
  h_01JPMY47QAXCKP9J3NQ20RC3KG: user-interface-1
  user-content-technical-updates: technical-updates
  user-content-api: api
  h_01JPMY47QA1J708SDNMN1KFYBV: blocks-1
  user-content-components: components
  user-content-editor: editor
  h_01JPMY47QA9T08Y6W8H3JWKPAV: mobs-1
  user-content-molang: molang
  user-content-stability-and-performance: stability-and-performance
  user-content-technical-experimental-updates: technical-experimental-updates
  h_01JPMY47QBJK5C7SQMNEWTAZMK: api-1
  h_01JPMY47QBHQ8YZTXQBSBP6Q8G: blocks-2
  user-content-graphical: graphical
---

**Posted:** 18 March 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

## Experimental Features

### User Interface

- Player Dots on the Locator Bar now show correctly regardless of Simulation Distance

## Features and Bug Fixes

- Due to unexpected codebase issues identified during Preview, we have reverted a recent change that caused "invincible pet" mobs to despawn ([MCPE-188731](https://bugs.mojang.com/browse/MCPE-190466))

  - Mobs in worlds opened during Preview may have despawned, but players updating to the upcoming 1.21.70 release should be unaffected
  - As always, remember to keep backups of your worlds before major updates

- Removed access to Virtual and Mixed Reality gameplay

### Blocks

- Fix ambient occlusion issue for non 1x1x1 blocks
  - When a block around any of these smaller non 1x1x1 blocks is broken, the AO computation is correctly applied to the face in the direction of that broken block. Previously the wrong face could be seen getting lightened/darkened.
  - A list of blocks affected: stairs, walls, gates, buttons, cakes, plates, fences, anvil, grindstone, hopper, bell, lectern, eggs, brewing stand

### Gameplay

- Fixed server client desync issue during portal travel on Realms ([MCPE-188731](https://bugs.mojang.com/browse/MCPE-188731))
- Added 'music_definition' field to 'minecraft:biome_music' component in client_biome json files to control the music played in the biome. The default music will be determined by the dimension if the biome_music component or music_definition property is left off. An empty string can be used if the biome is intended to be silent

### Mobs

- Farm animal spawn eggs used in the Mangrove Swamp biome will now spawn the same variants of Chicken, Cow, and Pig as seen in the Java Edition ([MCPE-190750](https://bugs.mojang.com/browse/MCPE-190750))

### User Interface

- Worlds are no longer missing from the Storage menu
- Bundle tooltip no longer sometimes renders as if having a different amount of items
- Adding "Manage Storage" button if download fails due to lack of space with instructions on what needs to be cleared out
- Adding "Clear Download Cache" button to storage for clearing files that got stuck due to a downloading error
- Auto clearing the download cache on startup if it detects that it is running out of space

## Technical Updates

### API

- Moved the following Player methods from `beta` to `v1.18.0`
  - `setPropertyOverrideForEntity`
  - `removePropertyOverrideForEntity`
  - `clearPropertyOverridesForEntity`

### Blocks

- Blocks using the `minecraft:block_placer` component now can get added as loose items in the creative inventory and recipe book again

### Components

- Content errors will log missing texture references in the "minecraft:icon" item component
- The "minecraft:rideable" component's Seat definition now has two additional fields:
  - "third_person_camera_radius" can be used to set a different camera radius when in third person or third person front camera. The value needs to be in the range \[1.0, 64.0\]. Value 0.0 is ignored
  - "camera_relax_distance_smoothing" adds springiness to the camera movement when the camera moves back to its radius after being pushed closer to the player by and obstacle. A higher value means a stiffer spring. The value needs to be in the range \[1.0, 32.0\]. Value 0.0 is ignored
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

### Editor

- Added a new toggle group for `Trim Actions`
- Added 2 new trim actions `Trim` (shrink the selection bounding volume to include only the specified non-air blocks) and `Remove Air`(remove all air blocks (and specified blocks) from the selection to create a new selection containing only the specified blocks)
- Added a new `editorConstants` object to the player context. This provides access to a number of constant values and methods that are commonly used across Editor (both in TypeScript and Native code)
- Added game rules to Export: Limited Crafting, Show Death Message, Show Item Tags, Command Block Output, Send Command Feedback, Max Command Chain Length, Fire Damage, Freeze Damage, Fall Damage, Drowning Damage, Insomnia, Show Border Effect, Function Command Limit
- Fixed a bug where visualizations beyond 100x100x100 in the Repeater tool would appear
- Fixed Crash on exit editor when selection volume is visible
- Fixed the brush visualization reset when jumping from matches to no matches (artifacts of the old match state were left attached to the visualization)

### Mobs

- Spawn Eggs from Custom Mobs from Behavior Packs now show up again in the spawn eggs group ([MCPE-190620](https://bugs.mojang.com/browse/MCPE-190620))

### Molang

- Added the "query.leashed_entity_count" Molang query, which allows querying how many entities have the given entity as their leash holder

### Stability and Performance

- Make friends drawer and play screen more performant using a cached view.

## Technical Experimental Updates

### API

- `EntityMarkVariantComponent` has been changed to read-only in version 2.0 beta

### Blocks

- Block using the minecraft:destruction_particles component will now correctly be sent to player connecting to a host
- Always add a missing Destruction Particles component to blocks that have a Material Instances component, using the "down" material as reference
  - The "texture" field in "minecraft:destruction_particles" is now optional; if not provided or empty, it will be populated from the Material Instances component

### Graphical

- Enforced minimum Android and iOS requirements for devices running the Deferred Technical Preview for maintained performance, stability, and visuals moving forward. For Android, a Adreno 640, Mali-G68, Mali-G77, or Xclipse 530 GPU or higher is required. On iOS devices, an A12 or M1 or higher device is required
- Disabled local exposure on all platforms while we investigate a bug that can cause massive visual corruption in the Deferred Technical Preview. We will re-enable the technology in a future update once the issue has been resolved
- Fixed a bug that caused the Editor to crash when the Deferred Technical Preview was enabled
