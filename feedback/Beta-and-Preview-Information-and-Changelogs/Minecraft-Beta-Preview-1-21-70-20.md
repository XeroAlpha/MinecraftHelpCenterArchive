---
title: Minecraft Beta & Preview - 1.21.70.20
date: 2025-01-29T11:11:19Z
updated: 2025-01-30T16:47:02Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/33873681034637-Minecraft-Beta-Preview-1-21-70-20
hash:
  user-content-experimental-features: experimental-features
  user-content-blocks: blocks
  user-content-bush: bush
  user-content-firefly-bush: firefly-bush
  user-content-cow-variants: cow-variants
  user-content-leaf-litter: leaf-litter
  user-content-wildflowers: wildflowers
  user-content-new-ambient-sounds-for-desert-and-badlands: new-ambient-sounds-for-desert-and-badlands
  user-content-features-and-bug-fixes: features-and-bug-fixes
  h_01JJVYXSS6X77NBAFX708S5C1Z: blocks-1
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-mobs: mobs
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-vanilla-parity: vanilla-parity
  user-content-biomes: biomes
  h_01JJVYXSS6R3SWK9JPGFYWKXRR: mobs-1
  user-content-technical-updates: technical-updates
  user-content-api---scripting: api---scripting
  user-content-%40minecraft%2Fserver-1.18.0: minecraftserver-1180
  h_01JJVYXSS6X3GDWJFV2AXA31CR: biomes-1
  h_01JJVYXSS623HRYY7315ZPJ3P0: blocks-2
  user-content-components: components
  h_01JJVYXSS6ZN8336WA97KAT5MJ: components-1
  user-content-editor: editor
  user-content-entities: entities
  user-content-jigsaw: jigsaw
  user-content-json-events: json-events
  user-content-sounds: sounds
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01JJVYXSS6DESCT2FAY4ZFMXK7: api---scripting-1
  user-content-%40minecraft%2Fserver-2.0.0-beta: minecraftserver-200-beta
  user-content-api---molang: api---molang
  user-content-graphical: graphical
  user-content-stability-and-performance: stability-and-performance
---

**Posted:** 30 January 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
  - **Please note:** The update will take slightly longer to become available on iOS this week. Thank you for your patience!
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![r21u7_1.jpg](https://feedback.minecraft.net/hc/article_attachments/33873681032077)

Ah, there you are! I'm writing this changelog on the go because there's no time to waste. Plenty of new features from the next game drop go into testing *checks watch* right this second! I made us an itinerary so we can get exploring right away:

First, I suggest we hike to a chilly biome to befriend the ever-so fluffy cold cow before we trek to the sandy biomes where our auburn warm cow is kicking up dust. There, you better listen out for howling wind and other ambient desert sounds! Oh, and if you like satisfying sounds, let's make a pitstop where there's crunchy leaf litter! Perhaps pick some new wildflowers to bring home too? Then as night falls, we head towards water for the grand finale: the mesmerizing firefly bush with its dancing particles glimmering in the dark. And here I thought nothing could outshine my bug fixes!

# Experimental Features

## Blocks

- Added Leaf Litter block

- Short Grass now generates slightly sparser in Meadows

- Added Wildflowers block

### Bush

- The Bush is a new type of decorative block that can be found in small patches in the following biomes:
  - Plains
  - Windswept Hills
  - Windswept Gravelly Hills
  - Windswept Forest
  - River
  - Forest
  - Birch Forest
  - Old Growth Birch Forest
- The Bush can be used in the Composter
- Using Bone Meal on a Bush places a neighbouring Bush next to the Bush if possible

### Firefly Bush

- Added the Firefly Bush block
  - Spawns Firefly particles that fly around it when the player is near
  - Illuminates the area around it
- Using Bone Meal on a Firefly Bush drops a Firefly Bush block
- Firefly Bushes are found naturally in clumps next to water in the Overworld
- In Swamp biomes they can be found anywhere and are twice as likely to be found next to water

### Cow Variants

- Added two new Cow variants - Warm Cow and Cold Cow!
- These have their own own unique texture and geometry, but not a separate spawn egg
- They spawn in the same biomes as the Warm, Cold, and Temperate Pigs

### Leaf Litter

- Leaf Litter is a new type of decorative block which can be found in the Forests, Dark Forests and Wooded Badlands
- Leaf Litter can have different amounts of leaves in one block space
  - Up to four Leaf Litter pieces can be placed in the same block space
  - Placing a Leaf Litter into an already placed Leaf Litter block increases the amount of leaves
- Leaf Litter can be placed in four orientations
- Leaf Litter can be created by smelting any type of Leaves block
- Leaf Litter can be used as fuel for smelting
- Leaf Litter has unique block sounds

### Wildflowers

- Wildflowers are a new type of flower which grow in Birch Forests, Old Growth Birch Forests and Meadows
  - Using Bone Meal on Grass Blocks in these biomes can grow Wildflowers
- Wildflowers can have different amounts of flowers in one block space
  - Up to four Wildflowers can be placed in the same block space
  - Placing Wildflowers into an already placed Wildflowers block increases the amount of flowers
  - Using Bone Meal on Wildflowers will produce more Wildflowers
- Wildflowers can be placed in four orientations
- Wildflowers can be crafted into Yellow Dye

### New Ambient Sounds for Desert and Badlands

- Sand, Red Sand and Terracotta of any color have a chance of playing ambient sounds when surrounded by any one of them on at least 3 sides 8 blocks away
  - `block.sand.ambient` can be played in any biome
  - `block.sand.ambient.attached` only plays when in Desert or Badlands biomes
- Dead Bush blocks have a chance of playing ambient sounds when placed on top of two blocks that are any color of Terracotta, Sand or Red Sand blocks in any biome

# Features and Bug Fixes

## Blocks

- Placing a block in liquid, and then placing another block next to your first block in liquid will no longer replace your second placed block for a moment causing you to fall into the liquid

- Structure Blocks no longer briefly change textures when placed ([MCPE-185531](https://bugs.mojang.com/browse/MCPE-185531))

- Sea Pickles can now be placed on any block with center support ([MCPE-116152](https://bugs.mojang.com/browse/MCPE-116152))

- Barrier blocks will no longer prevent chunks rendering behind them ([MCPE-153515](https://bugs.mojang.com/browse/MCPE-153515))

## Gameplay

- Fixed a mismatch between server and client when continuously building that caused orientation sensitive blocks to sometimes change to the wrong block

## General

- Fixed a crash that would occur on Xbox if you pressed "Cancel" in the Xbox UI when converting a world or importing a world from Retail to Preview

- In Server Authoritative movement, when Players receive a movement correction it will use the current Player speed instead of a generic one, this should give a better experience.

- In Server Authoritative movement, when Players receive a downward movement correction it will now use gravity acceleration, this should give a better experience.

## Mobs

- Foxes now take damage from lava, and not only fire ([MCPE-56926](https://bugs.mojang.com/browse/MCPE-56926))

## Realms

- Fix Random Tick Speed and Respawn Radius settings resetting to default values ([REALMS-11759](https://bugs.mojang.com/browse/REALMS-11759))

- Fix "Reset Random Tick Speed" button not working when editing an existing world on Realms

## User Interface

- Bundle tooltip no longer flickers for players beyond the first when playing in split screen

- Adjusted Minecoin purchase screen UI to not show stray pixels. Fixed overlapping issue on PS4.

- Replacing items with the `lock_in_inventory` component with items from the creative inventory using touch input now fails gracefully and produces a warning message.

- Align rideable entity inventory transparent background with other screens\
  ([MCPE-189224](https://bugs.mojang.com/browse/MCPE-189224))

- Fixed problem with moving items from creative inventory to player inventory on pocket ui. ([MCPE-185361](https://bugs.mojang.com/browse/MCPE-185361))

## Vanilla Parity

- Beacon rendering is no longer limited by the player's vertical distance from it ([MCPE-25228](https://bugs.mojang.com/browse/MCPE-25228))

### Biomes

- Fixed an issue where Dark Forests were missing trees along their northern borders with other biomes

- Updated the tree composition in Dark Forests to match Java Edition, increasing the number of Dark Oak Trees and reducing the prevalence of other tree types

### Mobs

- Donkeys now spawn in Savannas
- Donkeys now spawn in Plains in groups of 1-3 instead of 2-6\
  ([MCPE-118688](https://bugs.mojang.com/browse/MCPE-118688))

# Technical Updates

## API - Scripting

- Unhandled rejected promises in scripting now include callstacks when logged.

### @minecraft/server 1.18.0

- Renamed `system.scriptEvent` to `system.sendScriptEvent`

- Moved `NamespaceNameErrorReason` from beta to @minecraft/server 1.18.0

- Moved `system.sendScriptEvent` from beta to @minecraft/server 1.18.0

- Moved `NamespaceNameError` from beta to @minecraft/server 1.18.0

- Released `InputInfo.getButtonState`, `InputButton`, and `ButtonState` to @minecraft/server 1.18.0

- Released `InputInfo.getMovementVector` to @minecraft/server 1.18.0

- Released `PlayerButtonInputAfterEvent`, `AfterEvents.playerButtonInput` and `InputEventOptions` to @minecraft/server 1.18.0

- Several APIs have been given the Readonly permission, which allows them to now be called inside Before Event callbacks.

  - All methods for `BlockVolume`.
  - All methods for `Vector`.

- Changed `spawnEntity` method on `Dimension` to now take a variant of either a string or `EntityType`.

- Added `placeFeature` and `placeFeatureRule` APIs to the `Dimension` class

- Added `isValid` property to the Camera class.

## Biomes

- Fix client_biome loading so grass_appearance and foliage_appearance settings are added if not specified when format_version is lower than 1.21.60 ([MCPE-189816](https://bugs.mojang.com/browse/MCPE-189816))

## Blocks

- `water` and `lava` no longer will turn into `flowing_water` or `flowing_lava` when neighbor updates happen. `water` and `lava` now will respond to queued ticks without needing to change into another block

- The minecraft:map_color component underwent a schema change

  - It is now a JSON object with two fields "color" and "tint_method".
  - "color" is a required string field expecting an HEX representation of the RGB, prefixed with a \# character.
  - "tint_method" is a string field that multiplies the color with a predefined tint. Supported values are "none, "default_foliage", "birch_foliage", "evergreen_foliage", "grass" and "water".
  - the old schema format is still supported for convenience.\
    Examples:
    ``` hljs
    "minecraft:map_color": {
      "color": "#ABCDEF",
      "tint_method": "grass"
    }
    ```

    or
    ``` hljs
    "minecraft:map_color": {
      "color": "#ABCDEF"
    }
    ```

    or
    ``` hljs
    "minecraft:map_color": "#ABCDEF"
    ```

### Components

- Added the 'minecraft:replaceable' component which determines if a new block can replace the existing block at a particular position. If the component is not added to a block it is not replaceable.

## Components

- Multiple components that used effect durations can now be set to "infinite" including:

  - "minecraft:attack": "effect_duration"
  - "minecraft:healable": "duration" in the "effects" list
  - "minecraft:mob_effect": "effect_time"
  - "minecraft:projectile": "durationeasy", "durationnormal", and "durationhard" can now all use "infinite"
  - "minecraft:food": "duration" in the "effects" list
  - "minecraft:spell_effects": "duration" in the "add_effects" list
  - "minecraft:combat_regeneration": "regeneration_duration"

## Editor

- Shulker box's textures are fixed in Block picker and lists

- Fixed a bug that excluded some blocks from block picker list with partial text search

- Block picker search text field will have UI focus when modal opens

- Line Tool: Left Click no longer clears the line if two points already exist. Left Click now behaves the same as Shift + Left Click and always adds points to the existing line.

- Added cursor support for selecting invisible blocks when the Show Invisible Blocks setting is enabled

- Added `IPropertyPane.addProgressIndicator` API function to display a spinner or a progress bar property item

- Added `ImageAnimationData` API type to represent a sprite sheet animation for images

- Added `iconAnimation: ImageAnimationData` property to `IActionBarItemCreationParams` API

- Added `IPropertyPane.addLink` API function to create link buttons in panes.

- Added `system.isEditorWorld` property into @minecraft/server in beta

- Now using minecraft/server 2.0.0-beta, see API section for more details on 2.0.0-beta.

  - `registerEditorExtension` can be called in Early Execution.

## Entities

- Fixed issue where `No more entities` assert failure occurred when flying through biomes during a storm

## Jigsaw

- Fixed `world_surface` type of `heightmap_projection` in `minecraft:jigsaw` to generate on top of water and leaf blocks.

## JSON Events

- The parameter "duration" in the "add_mob_effect" event can now be set to "infinite"

## Sounds

- Added support for entity sound variants

  - Entity sounds now have a "variants" field which defines sound variants based on the runtime entity
  - Variants has a "key" field reading a Molang expression returning a string to select sound variant (eg: querying an enum entity property).
  - Variants has a "map" field which contains key-value pairs of a variant identifier and the sound events it overrides.
  - When playing a sound for an entity we first try to calculate their variant and see if that variant overrides the sound event, if not we play the sound form the base entity. If that fails we fall back to the existing logic of running from "defaults".\
    Example:\
    Given a mob with the following property

``` hljs
"minecraft:emotional_state": {
  "type": "enum",
  "values": [ "neutral", "angry", "happy", "sad" ],
  "default": "neutral",
  "client_sync": true
}
```

Sound variants can be played by querying the property:

``` hljs
{
  "entity_sounds": {
    "entities": {
      "test_mob": {
        "volume": 1.0,
        "pitch": 1.0,
        // The base sounds for various events
        "events": {
          "ambient": "mob.test_mob.ambient",
          "death": "mob.test_mob.death",
          "step": {
            "sound": "mob.test_mob.step",
            "volume": 0.8,
            "pitch": 1.0
          },
          "attack": "mob.test_mob.attack"
        },
        "variants": {
            // Key returning the enum string for variants, can use any Molang expression resulting in a string
            "key": "query.property('minecraft:emotional_state')",
            "map": {
              // If a resulting variant key is not handled here then it will use the base sounds
              "neutral": {
                "volume": 1.0,
                "pitch": 1.0,
                "events": {
                  // If an event is not handled in a variant then it will use the base sound
                  "death": "mob.test_mob.death.netural"
                }
              },
              "angry": {
                "volume": 1.0,
                "pitch": 1.0,
                "events": {
                  // Variants can override different events than other variants
                  "death": "mob.test_mob.death.angry",
                  "ambient": "mob.test_mob.ambient.angry"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# Experimental Technical Updates

## API - Scripting

### @minecraft/server 2.0.0-beta

The beta for `@minecraft/server` has been updated to 2.0.0-beta. This signifies that breaking changes have occurred, largely related to script execution timing. Version 1.X will continue to function as-is.

Visit our [documentation portal](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/)  for more information in the near future.

- Added new privilege `EarlyExecution`

  - 2.0.0-beta and higher now executes with the early execution privilege, scripting below 2.0.0-beta will continue to execute without early execution
  - All after and before event signals` `subscribe`and`unsubscribe\` methods can now be called in early execution
  - The following `System` methods can now be called in early execution
    - `clearJob`
    - `clearRun`
    - `run`
    - `runInterval`
    - `runJob`
    - `runTimeout`
    - `waitTicks`
  - `BlockComponentRegistry` method `registerCustomComponent` can now be called in early execution
  - `ItemComponentRegistry` method `registerCustomComponent` can now be called in early execution

- Added `startup` property to `SystemBeforeEvents`

- Added `StartupEvent`

- Added `StartupEventSignal`

- `WorldAfterEvents` renamed property `worldInitialize` to `worldLoad`

- `WorldBeforeEvents` removed property `worldInitialize`

- `WorldInitializeAfterEvent` renamed to `WorldLoadAfterEvent`

- `WorldInitializeAfterEventSignal` renamed to `WorldLoadAfterEventSignal`

- Removed `WorldInitializeBeforeEvent`

- Removed `WorldInitializeBeforeEventSignal`

- Removed `Dimension.runCommandAsync` as most commands did not actually run asynchronously. If you are looking to run a function asynchronously, please investigate using Jobs via `System.runJob`.

- `EntityComponent.getEntity` method throws if the underlying entity is invalid (instead of return undefined previously).

- `EntityInventoryComponent.container`property throws if the underlying entity is invalid (instead of return undefined previously).

- `isValid` methods on various classes have been changed to read only properties

- `getComponents`, `getComponent` and `hasComponent` now throw if the Entity is invalid

- `applyKnockback` method now takes a VectorXZ parameter for the knockback horizontal force (which includes the strength/magnitude), as well as a vertical strength parameter. To convert from V1, you should normalize your previous direction vector and multiply it by the old horizontal strength value. Vertical strength is the same as before.

- EffectType

  - `getName` method now always returns the `minecraft:` namespace prefix along with the name

- Effect

  - `typeId` property now always returns the `minecraft:` namespace prefix along with the name

- `minecraft:air` item has been removed (it is still a valid block)

- Promises are now flushed along with after events and system tasks

- `system.waitTicks()` now can accept an argument bounds of 0 minimum to run this tick

- Added a `GraphicsMode` enum and `Player.graphicsMode` to query a player's current graphics mode on the server.

- Added `system.isEditorWorld` property into @minecraft/server in beta

- BlockLocationIterator

  - Added `isValid(): boolean` method to beta. This method checks if the iterator as been invalidated by modifying the underlining block volume.

- `BlockMapColorComponent` API has been added to beta

- `TintMethod` enum has been added to beta

- Early execution changes in version @minecraft/server 2.0.0-beta

  - The following `RegistrationBuilder` methods can now be called in early execution
    - `batch`
    - `maxAttempts`
    - `maxTicks`
    - `padding`
    - `required`
    - `requiredSuccessfulAttempts`
    - `rotateTest`
    - `setupTicks`
    - `structureName`
    - `tag`
  - `register` function can now be called in early execution
  - `registerAsync` function can now be called in early execution

## API - Molang

- Added `query.graphics_mode_is_any` to Molang which accepts any of the following parameters: `simple`, `fancy`, `deferred`, `raytraced`. These parameters are all graphics modes that are available in the settings menu.

## Graphical

- Added a new version (`1.21.70`) for the lighting JSON schema in the Deferred Technical Preview. This new version adds support for controlling the intensity of sky light, which affects both the contribution of legacy sky lighting as well as sky reflections. See updated documentation on the Learning Portal for more details.

  - This object snippet can be added to `lighting/global.json` under the `minecraft:lighting_settings` object to control the sky intensity

``` hljs
"sky": {
    "intensity": 1.0 // Float value between [0.1 - 1.0]
}
```

- Improved the quality of screen space reflections, specifically cases where holes would appear in reflections at certain angles in the Deferred Technical Preview.
- Fixed a bug with water surface rendering that caused specular highlights to be much lower than they should have been in the Deferred Technical Preview.

## Stability and Performance

- Resolve crash when changing point light shadow settings under Deferred Graphical Settings
