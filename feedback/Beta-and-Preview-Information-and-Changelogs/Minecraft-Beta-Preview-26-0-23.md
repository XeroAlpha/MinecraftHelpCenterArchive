---
title: Minecraft Beta & Preview - 26.0.23
date: 2025-12-03T16:52:36Z
updated: 2025-12-04T08:20:18Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/41627058435213-Minecraft-Beta-Preview-26-0-23
hash:
  h_01KBJHNARWP67QWKHC6G2TP5P5: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-new-version-numbering-system: new-version-numbering-system
  user-content-accessibility: accessibility
  user-content-blocks: blocks
  user-content-creator: creator
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-input: input
  user-content-items: items
  user-content-mobs: mobs
  user-content-projectiles: projectiles
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  user-content-biomes: biomes
  h_01KBJHEREVYF5GWJ9YKC590SYD: blocks-1
  user-content-components: components
  user-content-editor: editor
  user-content-entity-components: entity-components
  h_01KBJHEREVGNH2W6Q863215S6S: general-1
  h_01KBJHEREVA0ZN1MXEXJVJ709R: graphical-1
  h_01KBJHEREV8C1QMH467GJ93X9Q: items-1
  user-content-json-schema: json-schema
  user-content-molang: molang
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01KBJHEREVVQ5HGK6XR2SVE7YD: api-1
  h_01KBJHEREVQQE509CQ8FHJQ7Y9: graphical-2
---

**Posted:** 3 December 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions\
   

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

**Note:** *This release will show up as version 26.0.24 on Windows devices.*

\
 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=features-and-bug-fixes)

## New Version Numbering System[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=new-version-numbering-system)

- Going forward, we’ll be numbering our versions based on the year. So, for both Bedrock and Java Edition, version numbers in the year 2026 will begin with ‘26’
- For a deeper look into the changes, check out [aka.ms/MinecraftVersionUpdate](http://aka.ms/MinecraftVersionUpdate)

## Accessibility[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=accessibility)

- Added a setting to show gameplay subtitles

  **Known issue:** *This feature is currently not working as expected and we aim to have it fixed in an upcoming preview release.*

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=blocks)

- Fixed the End gateway portal that teleported the player to the void area ([MCPE-228267](https://bugs.mojang.com/browse/MCPE-228267))

## Creator[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=creator)

- Added command macro support
  - Adds toggle to the Creator Settings screen, which when enabled adds 10 new key mappings to the keyboard/mouse controls settings screen which each have a text input for what command to run when the input is pressed
  - Commands can only be run while in game
  - All re-mappable keys are chords of Alt plus the chosen key
- Added guard to prevent mapping a command macro key to Alt, as Alt is the chord key already

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=gameplay)

- Vindicator now correctly attacks all non-illager mobs when the nametag "Johnny" is applied

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=general)

- The Adventuring Time achievement no longer unlocks after visiting fewer than 17 biomes on PC ([MCPE-156784](https://bugs.mojang.com/browse/MCPE-156784))
- Fixed an issue on Windows where the window reset to a smaller size on reopening, even when a single monitor had sufficient space ([MCPE-228875](https://bugs.mojang.com/browse/MCPE-228875))

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=graphical)

- Fixed a bug where screenshots taken with Ray Traced graphics mode selected did not render accurately
- Fixed an issue where block highlight was not visible when the Outline Selection toggle was turned off in Vibrant Visuals ([MCPE-222491](https://bugs.mojang.com/browse/MCPE/issues/MCPE-222491))
- Fixed an issue where the graphics mode options were changing after game updates ([MCPE-226682](https://bugs.mojang.com/browse/MCPE-226682))
- Fixed water extinction being drawn over fog when the chunk behind it is missing in Vibrant Visuals
- Fixed an issue that caused darker colors in some skins to appear washed out in Vibrant Visuals ([MCPE-206669](https://bugs.mojang.com/browse/MCPE-206669))
- Fixed a bug with the 'Hide Sky Flashes' option causing The End entrance sound to loop
- Fixed note effects on Note Blocks not displaying the correct color in darkness
- Fixed an issue that caused lighting on End Portals to render incorrectly if a resource pack defined a Portal block as a point light in Vibrant Visuals
- Made the fire effect on burning mobs and players dither when the player-camera is nearby
- Fixed the Snow Golem's pumpkin head not being dithered when the toggle is enabled ([MCPE-228082](https://bugs.mojang.com/browse/MCPE-228082) )
- Fixed dithered objects flickering when resolution is set to 50% in Vibrant Visuals ([MCPE-231582](https://bugs.mojang.com/browse/MCPE-231582) )

## Input[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=input)

- Fixed an issue where pressing the Alt key would cause the game to freeze display ([MCPE-230294](https://bugs.mojang.com/browse/MCPE-230294) )
- The on-screen keyboard will now close when typing with a physical keyboard ([MCPE-228584](https://bugs.mojang.com/browse/MCPE-228584) )
- Fixed not being able to type into a text box when hovered ([MCPE-229178](https://bugs.mojang.com/browse/MCPE-229178) )
- Fixed an issue on Windows where the camera would shift slightly after closing the pause menu ([MCPE-227945](https://bugs.mojang.com/browse/MCPE-227945) )

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=items)

- Spears now rotate in the same direction when charging in first and third person view
- Fixed an issue where adding items to a Bundle in a Chest would sometimes not save after leaving the game ([MCPE-187058](https://bugs.mojang.com/browse/MCPE-187058) )
- Diamond and Netherite Horse Armor now provide toughness values of 2 and 3, respectively
- Diamond and Netherite Nautilus Armor now provide toughness values of 2 and 3, respectively
- Horse Armor, Nautilus Armor, and Wolf Armor now display their toughness, armor, and knockback resistance values when greater than 0
- Piglin Spawn Egg and Piglin Brute Spawn Egg are now correctly sorted in alphabetical order ([MCPE-231580](https://bugs.mojang.com/browse/MCPE-231580) )
- Fixed an issue where the map marker was stuck when a Locator Map in an Item Frame was deleted ([MCPE-185362](https://bugs.mojang.com/browse/MCPE-185362) )

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=mobs)

- Wolf shadow and model are now centered ([MCPE-176018](https://bugs.mojang.com/browse/MCPE-176018) )
- The baby variants of Zombies, Zombie Villagers, Drowned, and Husks now drop items when killed ([MCPE-93172](https://bugs.mojang.com/browse/MCPE-93172) )
- The baby variants of Squid and Glow Squid no longer drop items when killed ([MCPE-189551](https://bugs.mojang.com/browse/MCPE-189551) )
- Baby Polar Bears now attacks Foxes ([MCPE-48072](https://bugs.mojang.com/browse/MCPE-48072) )
- Baby Polar Bears no longer becomes hostile towards the player ([MCPE-173833](https://bugs.mojang.com/browse/MCPE-173833) )
- Fixed an issue where Polar Bears recalculated their path to the target twice as often during the stomp attack
- Improved movement logic for Nautili and other underwater mobs
  - They are now less likely to get stuck on block edges
  - When tempted, they navigate around obstacles instead of moving in a straight line toward the player
  - They no longer spin while moving vertically
  - They no longer move excessively slowly when moving vertically
- Mob effect particles can now appear slightly outside of the mob's bounding box
- Tweaked the chance of Zombie Riders spawning with Copper Armor to more closely match Java ([MCPE-229469](https://bugs.mojang.com/browse/MCPE-229469) )
- Tweaked the chance of Husk Riders spawning with Copper Armor to more closely match Java
- Players and baby Drowned no longer float on Nautili when riding them
- Attachable items no longer render when equipped to a Zombie Nautilus via commands
- Drowned, Skeleton, Stray, Bogged and Parched can no longer pick up spears
- Zombies that spawn riding Zombie Horses now have a loot table with an armor chance matching that of regular Zombies ([MCPE-232098](https://bugs.mojang.com/browse/MCPE-232098) )
- Baby Horses, Donkeys, and Mules no longer gradually grow in size as they age, matching Java Edition ([MCPE-121628](https://bugs.mojang.com/browse/MCPE-121628) )
- Fixed a bug where baby Zombie Horses would shrink in size when they grew into adult Zombie Horses
  - They cannot now grow into adult Zombie Horses at all, matching Java Edition
- Nautilus and baby Nautilus now have swim sounds
- Zombie Nautilus now has swim sounds
- Nautilus now has alternative ambient, hurt, and death sounds when on land
- Baby Nautilus now has unique swim sounds, including alternative ambient, hurt, and death sounds when on land
- Zombie Nautilus now has alternative ambient, hurt, and death sounds when on land
- Baby Drowned can now spawn with Tridents
- Adjusted the ratio at which Drowned spawn with Tridents and Fishing Rods, matching Java Edition

## Projectiles[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=projectiles)

- Lingering and Splash Potions now deflect Ghast Fireballs and other deflectable projectiles on hit ([MCPE-191655](https://bugs.mojang.com/browse/MCPE-191655) )

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=realms)

- Fixed "Realm couldn't load" error from occurring after joining a Realm via invite
- Fixed input legends for Realms purchase reconciliation modal
- Fixed issue where narration was not always reading the description for the "Free up space" popup dialog when using a mouse

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=user-interface)

- Cancelling during transfer between servers will no longer softlock players
- You can now change the world name in a new template world without unlocking settings ([MCPE-188434](https://bugs.mojang.com/browse/MCPE-188434) )
- Ambient mob effects in the Mob Effects screen now have a blue outline ([MCPE-230838](https://bugs.mojang.com/browse/MCPE-230838) )
- Fixed various interactions not swinging the player's hand ([MCPE-52105](https://bugs.mojang.com/browse/MCPE-52105) )
  - Leash interactions
  - Bucketing a mob
  - Feeding a mob its taming item
  - Feeding a mob its aging item
  - Feeding a mob its trusting item
  - Feeding a mob its breeding item
  - Feeding a mob its healing item
  - Feeding a mob its bribing item
  - Attaching/removing a Balloon
  - Using a Name Tag on a mob
  - Starting to ride a mob
  - Make a mob sit
  - Giving a mob an item
  - Starting to trade with a mob
  - Opening a mob's inventory
  - Applying dye to a mob
  - Interacting with an Armor Stand
  - Interacting with a Redstone Ore block
  - Interacting with a Beehive or Bee Nest block
  - Curing a Zombie Villager
  - Shearing a mob
  - Milking a Cow or Mooshroom
- Fixed a bug where the Escape key would not open the game menu when on the death screen

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=technical-updates)

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=ai-goals)

- Spawning an entity with `behavior.nearest_attackable_target` no longer shows a content log error ([MCPE-231095](https://bugs.mojang.com/browse/MCPE-231095) )
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.0 and newer
  - `minecraft:behavior.defend_village_target`
  - `minecraft:behavior.nearest_attackable_target`
- Float range field `attack_interval` in `minecraft:behavior.nearest_attackable_target` now only accepts an object with `min` and `max` values. Other formats will fail to parse
- Made the schema for `minecraft:behavior.guardian_attack` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.0 and newer
- Made schemas for the following goals stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.0 and newer
  - `minecraft:behavior.timer_flag_1`
  - `minecraft:behavior.timer_flag_2`
  - `minecraft:behavior.timer_flag_3`
  - `minecraft:behavior.move_towards_dwelling_restriction`
  - `minecraft:behavior.move_towards_home_restriction`
- Float Range fields `cooldown_range` and `duration_range` in \
  `minecraft:behavior.timer_flag_1`, \
  `minecraft:behavior.timer_flag_2`,\
  and `minecraft:behavior.timer_flag_3` \
  now only accepts an object with `min` and `max` values. Other formats will fail to parse

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=api)

- Released `@minecraft/server` version 2.5.0
- Fixed a issue where `getComponents` on `ItemStack` could return an undefined in the array, when used in older scripting versions
- Added missing `BlockComponentTypes` enum values into 2.5.0:
  - `PrecipitationInteractions = 'minecraft:precipitation_interactions'`
  - `RedstoneProducer = 'minecraft:redstone_producer'`
  - `MapColor = 'minecraft:map_color'`
  - `Movable = 'minecraft:movable'`
- Changed `EntityHurtAfterEvent` to send when damage amount is zero
- Released `PlayerSwingStartAfterEvent` from `beta` to `v2.5.0` 
- Released `PlayerSwingEventOptions` from `beta` to `v2.5.0` 
- Released `HeldItemOption` from `beta` to `v2.5.0` 
- Released `EntitySwingSource` from `beta` to `v2.5.0` 
- Released `BlockComponentRedstoneUpdateEvent` from `beta` to `v2.0.0` 
- Released `BlockCustomComponent.onRedstoneUpdate` from `beta` to `v2.0.0` 

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=biomes)

- Biomes without a namespace in biomes_client.json will be applied to worlds below base_game_version 1.21.40 with the default namespace

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=blocks)

- Updated `minecraft:redstone_consumer` renamed field `propogates_power` to `propagates_power` 
- The option `alpha_masked_tint` in `minecraft:material_instances` no longer requires "Upcoming Creator Features"
- Released `minecraft:redstone_consumer` from `experimental` for `format_version >= 1.26.0`[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=blocks)
- Added `use_liquid_clipping` field to the `detection_rules` in `minecraft:liquid_detection` ([MCPE-191655](https://bugs.mojang.com/browse/MCPE-191655) )
  - "true" means the block will use the "collision_box" to visually clip the water
  - "false" ignores liquid clipping, which will render water across the whole block
  - Defaults to true prior to format_version 1.26.0
  - Defaults to false for format_version 1.26.0 and after

## Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=components)

- Fixed bug with `minecraft:behavior.fire_at_target` where the `max_head_rotation_x` and `max_head_rotation_y` were applied inversely

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=editor)

- Added Edit Tags menu item in the structure panel, so tags for one or more checked structures can be edited
- Added modal popup 'Edit Tags' to add new or remove existing tags from the selected structures 
- Added `isActive` property to `IModalTool` to check for the active state
- Added `onSelectedToolChanged` property to `IModalToolContainer` to listen for global modal tool change events
- Added settings persistence for the scripted extensions
- Updated Elevation icons for Terrain Tool
- Updated selected modal tool to toggle off when changing out of Tool mode, then toggle on after returning back
- Fixed a bug where enabling "restrict smart fill to selection" in Smart Fill caused the project to crash and exit for large selection areas
- Fixed a bug where cursor bound widgets triggered state change events while hidden
- Fixed a bug where the game would freeze when using the Terrain Tool's Elevation mode to Lower the terrain near the bottom of the world
- Fixed the cursor distance limit to match the spherical view distance setting

## Entity Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=entity-components)

- Changed the `swing` field to default to true in the `minecraft:interact` component

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=general)

- `minecraft://connect?localLevelId=<level id>` launch protocol requires the level id to be a url encoded value

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=graphical)

- Introduced new parameter `biome_water_color_contribution` to the Vibrant Visuals water effects configuration file. This new parameter controls the contribution of per-biome water colors provided by \*.client_biome.json files.
  - Range: \[0.0, 1.0\]
  - Default value: 0.0

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=items)

- The item component `minecraft:damage` now supports values between 0 and 32767 ([MCPE-180073](https://bugs.mojang.com/browse/MCPE-180073) )

## JSON Schema[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=json-schema)

- Fixed an issue where generated JSON Schemas included superfluous `_array` fields (e.g. `on_bred_array`, `on_death_array`) for certain components such as `experience_reward`

## Molang[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=molang)

- The `pre_animation` and `initialize` fields in `minecraft:client_entity` and `minecraft:attachable\` now properly support `{}` brace scope delimiters across multiple lines
  - This change applies only when using format version 1.26.0 or higher

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=api)

- Added `@minecraft/server` version 2.6.0-beta
- Added `localizationKey` property to `BlockType` and `BlockPermutation`
- Added the `/packstack` command to the command window that allows users to see what packs they have installed and their world template data if one is in use 
- Added `localizationKey` property to `EntityType` 
- Added `localizationKey` property to `ItemType` 
- Added `class EntityHurtBeforeEvent` to `beta` 
- Added `class EntityHurtBeforeEventSignal` to `beta` 
- Added `interface EntityHurtAfterEventOptions` to `beta` 
- Added `interface EntityHurtBeforeEventOptions` to `beta` 
- Added `WorldBeforeEvents.entityHurt` to `beta` 
- Changed `EntityHurtAfterEventSignal` to use `EntityHurtAfterEventOptions` in `beta` 
- Added `enum EntityHealCause` to `beta` 
- Added `class EntityHealSource` to `beta` 
- Added `class EntityHealAfterEvent` to `beta` 
- Added `class EntityHealBeforeEvent` to `beta` 
- Added `class EntityHealBeforeEventSignal` to `beta` 
- Added `class EntityHealAfterEventSignal` to `beta` 
- Added property `WorldAfterEvents.entityHeal` to `beta` 
- Added property `WorldBeforeEvents.entityHeal` to `beta` 
- Added `interface EntityHealEventOptions` to `beta` 
- Added enum `EntityAttachPoint` to `beta` 
- Added interface `CameraAttachOptions` to `beta` 
  - Added method `attachToEntity(attachCameraOptions?: CameraAttachOptions): void` to beta. This can be used to attach third-person camera to an entity
- Added `getTags()` to `BiomeType` in `beta`
- Added `hasTags(tags: string[])` to `BiomeType` in `beta`
- Added `containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter)` to `Dimension` in `beta`
- Added `BiomeFilter` interface to `beta`
- Added the easing type parameter to camera splines API for rotation and position

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/31078/R26U0-1-Preview?anchor=graphical)

- The colors of block lights in the RenderDragon Features for Creators experiment have been slightly adjusted; local_lighting.json colors are expected to be in sRGB space
