---
title: Minecraft Beta & Preview - 1.21.130.24
date: 2025-10-29T13:31:02Z
updated: 2025-10-29T16:16:34Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/40708241210765-Minecraft-Beta-Preview-1-21-130-24
hash:
  h_01K8QTR1XS3YFZ0WYMV02D4BXR: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-mounts-of-mayhem: mounts-of-mayhem
  h_01K8NP8EMZGGM60272EEEYTDAD: parched
  h_01K8NP8EMZTXGY1BMJY43F0ZXV: camel-husk
  user-content-mount-improvements: mount-improvements
  user-content-nautilus: nautilus
  user-content-spear: spear
  user-content-lunge-enchantment: lunge-enchantment
  user-content-zombie-horse: zombie-horse
  user-content-zombie-nautilus: zombie-nautilus
  user-content-blocks: blocks
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-input: input
  user-content-realms: realms
  user-content-stability-and-performance: stability-and-performance
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  h_01K8QTPV5W4EDP9QT0C3M1PRKP: blocks-1
  user-content-editor: editor
  user-content-entitiy-components: entitiy-components
  user-content-entity-components: entity-components
  h_01K8QTPV5XP7GBXDGMQY1RNQTB: graphical-1
  user-content-molang: molang
  h_01K8QTPV5X1JTNB3NH41HSX60M: mounts-of-mayhem-1
  h_01K8QTPV5XBBKKFRC5DY2Q10FZ: nautilus-1
  user-content-network-protocol: network-protocol
  user-content-scripting: scripting
  user-content-structures: structures
  user-content-ui: ui
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01K8QTPV5X5T17KG60AFQA05PJ: api-1
  h_01K8QTPV5XPSWXXCXQ3W16B5KR: blocks-2
---

**Posted:** 29 October 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/40708262459405" alt="MCV_HOL25_Testing_3_BPS_Feature_Highlights_Camel_Husk_B_VV_1920x1080.jpg" />
</figure>

Today’s testing release brings more mounts – and more mayhem! Meet the camel husk for the first time, an undead passive mob that thrives in the desert. This mob spawns in with not one, but two riders – a husk (usually wielding a spear) and a new desert-dwelling skeleton called the parched.

Luckily, we’ve also implemented swimming for horses, so if you’re not ready to charge into battle against *two* mounted foes, you can now swim away! What do you mean deserts don’t have water? And why are you saying it like *everyone knows that except for me*? Anyway, let’s look at the changelog, shall we!

And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=features-and-bug-fixes)

## Mounts of Mayhem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=mounts-of-mayhem)

### Parched

- New Skeleton variant
- Spawns at 0 light level in Deserts replacing some of the regular Skeletons
- Does not burn in sunlight
- Shoots Arrows of Weakness
- Has a slower rate of fire compared to normal Skeletons, similar to Bogged
- Does not spawn in caves, following the Husk's spawning rules

### Camel Husk

- New undead Camel variant
- Spawns at 0 light level in Deserts
- Does not burn in sunlight
- Spawns with two riders: A Husk wielding a Spear and a Parched
- Does not spawn in caves, following the Husk's spawning rules
- Is hostile if the rider is a hostile mob
- Passive without a rider
- Despawns like other hostile mobs, but becomes persistent when ridden by a Player
- Favorite food is Rabbit Foot
- Cannot be bred
- As a mount they work similar to normal Camels

### Mount improvements[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=mount-improvements)

- Horses, Zombie Horses, Donkeys, Mules, and Camels no longer sink when ridden by players while swimming

### Nautilus[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=nautilus)

- Tamed Nautilus now has the correct death message when dying on land
- Nautilus no longer produce water splashing sounds when they are pushed on dry land
- Nautilus now produce hurt and death sounds when out of water
- Nautilus charge attack cooldown is now 4 seconds
- Increased Nautilus dash speed from 10 blocks/second to 14 blocks/second
- Nautilus now prioritizes breeding over tempting when offered food
- Nautilus charge attack now deals 3 damage

### Spear[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=spear)

- The wielder's base attack damage now contributes to damage dealt by Spears
- The Spears item group in the Creative Inventory is now labeled as "Spears" instead of "Spear" ([MCPE-229430](https://bugs.mojang.com/browse/MCPE-229430))
- Updated the Netherite Spear item icon to better match the colors of its in-game model ([MCPE-229512](https://bugs.mojang.com/browse/MCPE-229512))
- Renamed the `minecraft:spear` item tag to `minecraft:is_spear`, matching similar tool tags ([MCPE-229715](https://bugs.mojang.com/browse/MCPE-229715))
- Slightly increased the post-attack cooldown of some Spears, to align with Java Edition and balance the now more accessible Lunge Enchantment
- Tweaked the reflectiveness of Spears when Vibrant Visuals is enabled

#### Lunge Enchantment[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=lunge-enchantment)

- Reduced the number of hunger points consumed by using Lunge across all Enchantment levels
  - Level 1 Lunge now consumes 1 hunger point, level 2 consumes 2 points, and level 3 consumes 3 points (from 4, 5, and 6)
- Added a durability cost of 1 for using Lunge across all Enchantment levels

### Zombie Horse[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=zombie-horse)

- Fix missing hint text for dismounting the Zombie Horse
- Fixed a bug where Zombie Horses would not spawn in Ice Plains
- Fixed a bug where the Zombie Horse feeding sound effect would not obey the Friendly Mob Audio setting
- Zombie Horse now uses Horse feeding sound effect
- Zombie Horses now avoid areas with sunlight
- Zombie Horses now flee sunlight instead of running around wildly in a panic

### Zombie Nautilus[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=zombie-nautilus)

- Tamed Zombie Nautilus now has the correct death message when dying on land
- Zombie Nautilus no longer produce water splashing sounds when they are pushed on dry land
- Zombie Nautilus now produce hurt and death sounds when out of water
- Zombie Nautilus charge attack cooldown is now 4 seconds
- Increased Nautilus dash speed from 10 blocks/second to 14 blocks/second
- Zombie Nautilus now produce eating sounds when they are fed
- Zombie Nautilus audio category is now set to neutral
- Zombie Nautilus will now attack nearby Pufferfish
- Zombie Nautilus will now attack if provoked
- Zombie Nautilus charge attack now deals 3 damage
- An armored Zombie Nautilus will no longer burn in sunlight ([MCPE-229448](https://bugs.mojang.com/browse/MCPE-229448))

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=blocks)

- Custom blocks will no longer be overly bright when flying between two inventory slots

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=gameplay)

- Fixed bug preventing players from growing Pink Petals, Wildflowers, or Leaf Litter by targeting side of a block[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=gameplay-%23-accessibility-features-%23-vanilla-parity)

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=general)

- Reenabled missing music for several biomes

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=graphical)

- Fixed a bug where the fade command would fade to black instead of the specified color when Vibrant Visuals is enabled. Also fixed certain effects such as fire and the Spyglass overlay rendering in front of the fade effect ([MCPE-223049](https://bugs.mojang.com/browse/MCPE-223049))
- Fixed snowflakes flickering during player movement
- The partial transparency applied to mobs when close to the camera now also applies to players

## Input[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=input)

- Automatically selects the Chat screen text field on opening for Windows when using Keyboard and Mouse, enabling text input as soon as screen opens ([MCPE-229046](https://bugs.mojang.com/browse/MCPE-229046))
- Fixed a bug on Windows where disabling the system setting "Scroll inactive windows when hovering over them" had no effect ([MCPE-229088](https://bugs.mojang.com/browse/MCPE-229088))

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=realms)

- Realms Manage Feed is now located within Realms Stories instead of Realms Settings

## Stability and Performance[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=stability-and-performance)

- If syncing world from cloud fails on Xbox, automatically attempt to join the local copy

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=user-interface)

- Fixed the Social drawer lacking a border when opened in-game ([MCPE-227007](https://bugs.mojang.com/browse/MCPE-227007))
- Fixed a bug where the text to speech settings incorrectly auto enabled when starting a world
- Added an Ore UI version of the video settings tab
- Fixed the Social drawer lacking a border when opened within a world ([MCPE-227007](https://bugs.mojang.com/browse/MCPE-227007))
- Fixed a bug that caused dialogues with bold text to appear truncated in certain DLC maps
- Added the Damage Tilt slider to Video settings, controlling how much the screen tilts when the player takes damage, in parity with Java

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=technical-updates)

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=ai-goals)

- Added two new fields to `behavior.float` to enable more control of floating and how long the vehicle can be underwater before dismounting its passengers
  - `chance_per_tick_to_float`: The chance per tick to cause an upward impulse
  - `time_under_water_to_dismount_passengers`: Time in seconds that a floating vehicles head can be underwater before it causes its passengers to dismount

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=api)

- Moved Loot Table Discovery APIs from beta into `2.4.0`
- Released class BlockRedstoneProducerComponent from `beta` to `v2.4.0`
- Released class InvalidBlockComponentError from `beta` to `v2.4.0`
- Released `LiquidSettings` from `beta` to `v2.4.0`
- JigsawPlaceOptions
  - Moved `liquidSettings?: LiquidSettings` from `beta` to `v2.4.0`
- JigsawStructurePlaceOptions
  - Moved `liquidSettings?: LiquidSettings` from `beta` to `v2.4.0`

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=blocks)

- Fixed `minecraft:redstone_producer` component not properly updating redstone signal for custom blocks on block state change ([MCPE-229570](https://bugs.mojang.com/browse/MCPE-229570))

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=editor)

- Added cursor setting to Farm Generator tool; player can place the farm at a position with the target mode
- Adds a new EditorTagContainer UI component with accompanying modal for adding tags. Swapped theme color mapping for SecondaryActive and SecondaryDefault

## Entitiy Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=entitiy-components)

- Upgraded the `minecraft:addrider` entity component, allowing it to take an array of riders
  - Description:
    - Allows a rideable mob to spawn with one or more riders
  - Fields:
    - "riders": Array of riders to add to the entity, with the mandatory field `entity_type` and optional field `spawn_event`
  - `riders` Fields:
    - `entity_type`: The type of mob to spawn
    - `spawn_event`: An optional event to spawn with the mob
  - Requirements:
    - The mob must have a `minecraft:rideable` entity component
    - The array of `riders` must be no longer than `minecraft:rideable` has `seat_count`

## Entity Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=entity-components)

- Added new boolean field `can_dehydrate` to `minecraft:breathable`. The field defaults to false to preserve previous breathable behaviour. When set to true, entities that only breathe water will take dehydration damage when out of water
- Renamed the `minecraft:body_rotation_locked_to_vehicle` component to `minecraft:rotation_locked_to_vehicle`
  - The component now aligns both the entity’s body rotation and its overall rotation with that of its mounted vehicle
- Added a `lunge` field to the `minecraft:exhaustion_values` component
  - Defines the amount of exhaustion applied when triggering the lunge enchantment, multiplied by the enchantment level

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=graphical)

- Fixed black bars appears at the bottom of the screen when launching the game in fullscreen mode ([MCPE-227955](https://bugs.mojang.com/browse/MCPE-227955))

## Molang[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=molang)

- Added Pack Settings Molang queries
- `query.get_pack_setting('ns:slider_name')` the value of a slider
- `query.is_pack_setting_enabled('ns:toggle_name')` check if toggle is enabled
- `query.is_pack_setting_selected('ns:dropdown_name', 'dropdown_option_name')` if a dropdown option is selected

## Mounts of Mayhem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=mounts-of-mayhem)

### Nautilus[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=nautilus)

- Nautilus now uses the 'animal' population control category instead of 'monster' in its spawn rules ([MCPE-229447](https://bugs.mojang.com/browse/MCPE-229447))

## Network Protocol[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=network-protocol)

- Added new Level Sound Event `imitate.camel_husk`
- Added new Level Sound Event `imitate.parched`
- Renamed `ActorFlags::BODY_ROTATION_LOCKED_TO_VEHICLE` to `ActorFlags::ROTATION_LOCKED_TO_VEHICLE`

## Scripting[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=scripting)

- Breakpoints that are checked by MC and considered invalid will appear disabled in VSCode
- Fix bug causing breakpoints to miss under certain conditions

## Structures[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=structures)

- Fixed rotation and mirroring of Vine blocks during structure placement

## UI[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=ui)

- String multiplication in UI expressions is now limited exclusively to `%.<number>s`

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=api)

- Fixed issue in preview where `world.afterEvents.playerBreakBlock` was providing an invalid block position ([MCPE-229538](https://bugs.mojang.com/browse/MCPE-229538))
- Sends global dynamic property values to the Minecraft debugger's Live Diagnostics when attached
- Added `EntitySwingSource` for providing context of player swings to `beta`
- Added `PlayerSwingStartAfterEvent.swingSource` to `beta`
- Added `PlayerSwingEventOptions.swingSource` to `beta`

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30749/R21U13-3-Preview?anchor=blocks)

- Added new state `minecraft:corner_and_cardinal_direction` to the `minecraft:placement_direction` block trait which enables the `minecraft:corner` with values `none`, `inner_left`, `inner_right`, `outer_left`, and `outer_right` to provide similar behavior to how stairs in Vanilla work
  - When this is set, you can use the field `blocks_to_corner_with` to decide the criteria with an array of block descriptors to determine what blocks to form a corner with
  - The default behavior for this field is to corner with the same block name
  - This all requires the Beta APIs toggle to be enabled on a world and the `use_beta_features` flag on your block

``` auto
  "format_version": "1.21.130",
  "use_beta_features": true,
  "minecraft:block": {
    "description": {
      "identifier": "custom:custom_block",
      "traits": {
        "minecraft:placement_position": {
          "enabled_states": ["minecraft:vertical_half"]
        "minecraft:placement_direction": {
          "enabled_states": ["minecraft:corner_and_cardinal_direction"],
          "blocks_to_corner_with": [{"tags": "q.any_tag('minecraft:cornerable_stairs')"}]
      }
  }
```

- With the Beta APIs toggle on, Vanilla Stairs have the tag `minecraft:cornerable_stairs` available, and can corner with custom blocks with the same tag if the block also uses `minecraft:cardinal_direction` block states
