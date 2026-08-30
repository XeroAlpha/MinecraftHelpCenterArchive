---
title: Minecraft Beta & Preview - 26.50.24
date: 2026-08-05T13:39:29Z
updated: 2026-08-05T13:40:37Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/47907593889677-Minecraft-Beta-Preview-26-50-24
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  h_01KZ92ETCVSQ3J5P9APJGZN1AA: drop-3-2026-fixes-and-features
  h_01KZ92ETCWFHEB27FTT6NV5VEY: abandoned-camp
  h_01KZ92ETCX55JSHG441S940Q50: blocks
  h_01KZ92ETD09NW33E7G1DCGHWTC: cushion
  h_01KZ92ETD9KCMNGMHXXV9735YG: items
  h_01KZ92ETDAF2NQZVN7Q41PXJW5: straw-bed
  h_01KZ92ETDEQE9G69JRS7TZDFPS: features-and-bug-fixes
  h_01KZ92ETDE8RNZ9BME0HXFCZ58: blocks-1
  h_01KZ92ETDFVTX9AKA0DRX22NSB: gameplay
  h_01KZ92ETDJKSAFX3P110MS1HT5: graphical
  h_01KZ92ETDMJ3P2SE7J97PQST24: mobs
  h_01KZ92ETDPYFG41EC0DJF0WTPV: character-creator
  h_01KZ92ETDQF3FPMPN66FCCC2SN: realms
  h_01KZ92ETDSND4EXR01CXQA89P1: stability-and-performance
  h_01KZ92ETDWAMHY10NK7D7BQ4DB: user-interface
  h_01KZ92ETE0AJ7YD3Z07A8HWGKE: technical-updates
  h_01KZ92ETE1YKCGF0XJXCAD88H6: ai-goals
  h_01KZ92ETE1J29V1DGWB73E6TNN: api
  h_01KZ92ETEBBDXFD3DDV8DQ3GGF: structure-files
  h_01KZ92ETEE49BPVEEAYXBVSEGF: block-components
  h_01KZ92ETEE5XJNH2D17XSQ98DT: thin-fences-and-trip-wire
  h_01KZ92ETEF2SSSHTP70A5WTA8S: blocks-2
  h_01KZ92ETEJ1KCVK66QQ3ZHMA42: commands
  h_01KZ92ETEJD3F2VFSWS12297B6: dedicated-server
  h_01KZ92ETEMCJ4ZX7VJ6ECE4MCJ: editor
  h_01KZ92ETEQKYX8T6J5VK1DPR8F: entity-components
  h_01KZ92ETETFTDBQDK91T22HA28: sounds
  h_01KZ92ETEYNG6NQBEPP82GEK29: user-interface-1
  h_01KZ92ETEY8PMR546S4EGM5NCY: experimental-technical-updates
  h_01KZ92ETEY10P80W3N376XSEDJ: api-1
  h_01KZ92ETF6A93WF7DJVDM770G3: blockutilitytasks
  h_01KZ92ETF63NAJD7WS1NNDPZE8: features
  h_01KZ92ETF79Z335J2H80805G31: graphical-1
---

**Posted:** 5 August 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/47907593887501" alt="Minecraft Preview features improved maps and concrete stairs and slabs" />
</figure>

Step up your building and exploring with the final features entering testing for our third game drop of 2026! You can now discover different maps with an improved look in abandoned camps leading to more structures in the Overworld - so check the chests! You can also craft and build with concrete stairs and slabs in any of the 16 colors.

For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

## Drop 3 2026 Fixes and Features

### Abandoned Camp

- Chests in Abandoned Camps now contain Explorer Maps that lead to Ancient City, Mineshaft, Desert Pyramid, Warm Ocean Ruins, and other Biome variants of Abandoned Camps

### Blocks

- Added Concrete Stairs and Concrete Slabs in all 16 colors
- Poplar Leaves can now be smelted into Leaf Litter ([MCPE-240019](https://bugs.mojang.com/browse/MCPE-240019))

### Cushion

- Players are no longer moved into the ground when the Cushion they are sitting on is destroyed because its supporting block was removed ([MCPE-240467](https://bugs.mojang.com/browse/MCPE-240467)) ([MCPE-240504](https://bugs.mojang.com/browse/MCPE-240504))
- The Cushion now breaks when the block below is replaced with a liquid ([MCPE-240849](https://bugs.mojang.com/browse/MCPE-240849))
- Breaking a named Cushion no longer drops the default item
- Name Tag is now displayed on the Cushion ([MCPE-240730](https://bugs.mojang.com/browse/MCPE-240730))
- Cushions now pop into an item when pushed by blocks
- Cushions now play breaking particles and a breaking sound when the block supporting them is destroyed ([MCPE-240731](https://bugs.mojang.com/browse/MCPE-240731))

### Items

- All remaining Poplar items are now listed between the Mangrove and Cherry items in the Creative inventory

### Straw Bed

- The sleeping camera is no longer positioned too high above the player when sleeping in a Straw Bed
- Fixed the Straw Bed texture so it no longer contains floating pixels or extra pixels that are never visible in-game
- Fixed the Straw Bed MERS texture so it no longer renders a single overly shiny pixel ([MCPE-240483](https://bugs.mojang.com/browse/MCPE-240483))

## Features and Bug Fixes

### Blocks

- Restored the growth speed of Sulfur Spikes and Pointed Dripstone after a recent change accidentally made them grow 25 times faster

### Gameplay

- Player Map icon now shows rotation even while outside of the map bounds
- Explorer Maps now have new item icons to better indicate where they lead
- Fixed Totem activation not synchronizing health when final health equals the original value
- Fixed an issue where players and mobs could load in a world at (0,0,0) and lose all their items after reloading world

### Graphical

- In-game models and textures now load correctly when the network connection changes while joining a world ([MCPE-234954](https://bugs.mojang.com/browse/MCPE-234954))
- Fixed bug with item in hand jittering with temporal anti-aliasing upscaling enabled

### Mobs

- Fixed a bug where Spiders and Cave Spiders would occasionally be slowed by Web blocks
- Fixed an issue where mobs and players could reload with an inconsistent movement speed

### Character Creator

- Skins can now have names consisting entirely of numbers

### Realms

- Fixed realm role actions not showing correctly for certain roles
- Friend profiles now have a Realm-specific join button when the Realm is available

### Stability and Performance

- Fixed a crash that could occur while retrieving network addresses on Android
- Fix CPU usage increasing after idling on the pause screen or controller disconnected screen ([MCPE-235086](https://bugs.mojang.com/browse/MCPE-235086))
- Fixed some particles that crashed the game when ran as commands ([MCPE-184162](https://bugs.mojang.com/browse/MCPE-184162))

### User Interface

- Updated the Chat Settings UI to increase readability of the Chat Color and My Mentions Color dropdowns
- Fixed an issue that prevented TNT and Stonecutters from being crafted using quick crafting in the Recipe Book ([MCPE-240038](https://bugs.mojang.com/browse/MCPE-240038))
- Fixes 'out of space' error displaying when attempting to download large items regardless of available space
- Fixed issue where setting the Cheats toggle to OFF during world creation would not reset cheats to default values
- Added wishlist pagination with gamepad bumper navigation
- Added dynamic wishlist grid row sizing for marketplace wishlist cards
- Improved inventory item tooltips
  - Let us know what you think [here](https://aka.ms/mc-updatedbedrocktooltips)

## Technical Updates

### AI Goals

- Made the schema for minecraft:behavior.follow_mob stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.50 and newer

### API

- Entity.teleport now throws an Error when the entity has passengers and the target dimension is different from the entity's current dimension. Passengers must be dismounted before teleporting to another dimension. Current solution is scoped to fix current game breaking interruptions with future improvements backlogged.
- Tamed pets no longer attempt to follow their owner when the owner travels to or from a custom dimension
- Fixing 'scale' property on DebugShape when used with DebugCone, DebugEllipsoid, DebugPyramid, and DebugCylinder.
- 'rotation' property of DebugShape now applies to DebugLine, DebugArrow, DebugCircle, DebugSphere, and DebugBox.
- World now exposes a soundDefinitionRegistry property that returns a SoundDefinitionRegistry for querying registered server sound definitions
- Added SoundDefinitionRegistry with a getDefinitions() method that returns the registered SoundDefinition entries and accepts an optional SoundDefinitionFilter
- Added SoundDefinition with a soundEventId property, a durationInfo property, a musicInfo property, and a tags property
- Added SoundDefinitionDurationInfo with a duration property
- Added SoundDefinitionMusicInfo with genres, moods, artist, and title properties
- Added SoundDefinitionFilter with minDuration, maxDuration, genres, moods, artists, titles, and tags properties
- Player.playSound now accepts a SoundDefinition in addition to a sound event id

#### Structure Files

- Added version 2 of the structure (.mcstructure) file format
  - The block_indices arrays are now stored as NBT IntArrayTags instead of a ListTag containing one IntTag per block, which significantly reduces the time and memory needed to save and load structures
  - The second block_indices array is now optional in version 2 structure (.mcstructure) files, and is left out when nothing is stored in the extra block layer, making those files ~50% smaller
  - Version 1 structures still load correctly, and are upgraded to version 2 the next time they are saved

### Block Components

#### Thin Fences and Trip Wire

- Vanilla glass panes, iron bars, copper bars, and trip wire blocks now expose minecraft:connection_north, minecraft:connection_east, minecraft:connection_south, and minecraft:connection_west block states reflecting which cardinal neighbors they connect to
- For new worlds (base game version 1.26.50 and later), thin-fence and trip-wire connection-state changes now trigger neighbor block updates for parity with Java Edition; existing worlds keep the prior client-only update behavior

### Blocks

- Extended /fill command behaviour with multi-blocks to Scripting fill block APIs, such as Dimension.fillBlocks
- The block component minecraft:block_entity no longer requires the experimental toggle from format version 1.26.20 onward.
- Removed minecraft:block_entity component restrictions for multi-blocks, each part will have its own block entity by design

### Commands

- Added the serveridentity command, which lets dedicated-server operators save, delete, and check the status of the server identity key

### Dedicated Server

- NetherNet is now the default transport used by dedicated servers
- Windows dedicated servers, including EDU, now use the correct application data directory for Bedrock and Education
- Added a dedicated server option to unpack optimized creator packs into loose files

### Editor

- The Texel Size slider is now disabled when using Soft Shadows in Vibrant Visuals, as this setting has no effect on soft shadow rendering
- Fixed a bug that caused UI to not load on player join when the server load is high
- Added color-aware Custom Mesh Tool placement so creators can place imported colored meshes as matched block groups from the Color Block List
- Added a Render Clouds setting to the Editor World View panel
- Added addHeader API to ISubPanePropertyItem to create a custom sub pane header with an optional prebaked multiselect checkbox, an overflow menu, and a dynamic region of icon buttons and color pickers
- Added buildSubPaneViewControl API to ISubPanePropertyItem to sort, filter, and manage a list of header sub panes
- Added tags option to ISubPanePropertyItemOptions for filtering sub panes through a parent sub pane view control

### Entity Components

- Made the minecraft:instant_despawn component schema stricter for entity JSON at format version 1.26.50 and later
- Added the minecraft:can_stand_on_powder_snow component for entity definitions with a format version of 1.26.50 and later
  - Entities with this component can stand on top of Powder Snow
  - The lightweight type family no longer grants this behavior to entity definitions using format version 1.26.50 or later
  - Entity definitions using an older format version that include the lightweight type family are automatically upgraded to include this component
  - The vanilla Endermite, Fox, Rabbit, and Silverfish entity definitions no longer include the lightweight type family
- Added the minecraft:block_movement_slowdown_immunity entity component
  - When set, the entity is immune to movement slowdown from the specified blocks

### Sounds

- Released minecaft:sound block component out of experimental
  - it can be used to assign a set of sounds to block and its permutations similar to sound field in blocks.json
  - blocks.json overrides values of minecraft:sound component, including values in all permutations

{\
    "format_version": "1.26.20",\
    "minecraft:block": {\
        "description": {\
            "identifier": "test:test_block",\
            "states": {\
                "custom:int": \[0, 1, 2\]\
            }\
        },\
        "permutations": \[\
            {\
                "condition": "query.block_state('custom:int') == 1",\
                "components": {\
                "minecraft:sound": {\
                    "sound": "glass"\
                }\
                }\
            },\
                    {\
                "condition": "query.block_state('custom:int') == 2",\
                "components": {\
                "minecraft:sound": {\
                    "sound": "metal"\
                }\
                }\
            },\
        \],\
        "components": {\
            "minecraft:sound": {\
                "sound": "snow"\
            }\
        }\
    }\
}\

### User Interface

- Fixed screens visited not mounting if another global route action happened while the screen was unmounting

## Experimental Technical Updates

### API

- Added new tech and support for using scripting to interface with the VS Code debugger live diagnostics:
  - Added class DiagnosticsManager to access the new debugger diagnostics tech.
  - Added class DiagnosticsTab, used to represent a tab view in the debugger live diagnostics page.
  - Added class DiagnosticsView, used to represent a single display view within a tab.
  - Added class DiagnosticsStat for representing data to be used with the live diagnostics.
  - Added class DiagnosticsError for diagnostics related errors.
- Added WorldClock class to @minecraft/server in beta
  - Has properties for name, time, and isPaused to retrieve state of the world clock
- Added WorldClockRegistry class to @minecraft/server in beta
  - Has a registerClock function to allow registrations of new world clocks during startup
- Added WorldClockRegistrationError class to @minecraft/server in beta. This is thrown by WorldClockRegistry.registerClock when registration of a world clock fails
- Added WorldClockReloadNewWorldClockError class to @minecraft/server in beta. This is thrown when trying to register a new world clock after reloading scripts
- Added WorldClockInvalidRegistryError class to @minecraft/server in beta. This is thrown when trying to register world clocks outside of the BeforeStartupEvent
- Added WorldClockNotFoundError class to @minecraft/server in beta. This is thrown by World.getClock when a world clock does not exist
- Added WorldClockRegistry to BeforeStartupEvent in beta
- Added getClock function to the World class in beta

#### BlockUtilityTasks

- Added the optional directionMask parameter to floodSearch for restricting traversal directions

### Features

- Add scripting API to query Points of Interest (POI) in the current dimension

### Graphical

- Fixed Book and Quill's lighting value when on a Lectern when Block Light Quality is set to Volumetric Lights or above
  - Fixed an issue that caused the brightness of some point lights to oscillate
