---
title: Minecraft Beta & Preview - 26.50.22
date: 2026-07-28T14:42:59Z
updated: 2026-07-28T15:54:10Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/47702557761805-Minecraft-Beta-Preview-26-50-22
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  h_01KYMJTZRAKQ9YC75H5184216K: drop-3-2026-features
  h_01KYMJTZRBC5TRW3VGXDDRP1JD: abandoned-camp
  h_01KYMJTZRD7M1WNCH60PTJNC0Q: blocks
  h_01KYMJTZRF877BHF0PSNJCF10A: cushion
  h_01KYMJTZRGYPNQNSPX71H0KTS3: items
  h_01KYMJTZRH6PAJ2SFF0EHYAQZV: features-and-bug-fixes
  h_01KYMJTZRHREYWKRJRMTNP8HT2: gameplay
  h_01KYMJTZRKSGCMM2SST7A3C137: graphics
  h_01KYMJTZRM95S6W3S67R4Y0Y8Z: items-1
  h_01KYMJTZRND9AY5ZAXCQ4WFSY7: mobs
  h_01KYMJTZRP8AHJ0A9K2RTW2Y32: realms
  h_01KYMJTZRRX87XNG2CBC48VGRY: stability-and-performance
  h_01KYMJTZRT1YTCSBNNE8N4M892: user-interface
  h_01KYMJTZS06871QGWMR8VX27ZC: storage
  h_01KYMJTZS08X0VVY3AE5BB54DN: technical-updates
  h_01KYMJTZS040F79AW6X4GXWS57: ai-components
  h_01KYMJTZS1GTXEF4NGADB1RWH8: ai-goals
  h_01KYMJTZS3HE14RVDCV5WT9DZP: api
  h_01KYMJTZSB9WA3GB4F7E8A3QSF: ddui
  h_01KYMJTZSCBYM6JKFC0D2E5X3M: loot-tables
  h_01KYMJTZSDABSDGS1WW27GA7A7: example
  h_01KYMJTZSEBR1KRAXV71XR6GYT: script-debugger
  h_01KYMJTZSFDHK4R0KACZ0MK4MH: blocks-1
  h_01KYMJTZSFXJWTX3WNQNAC2PQ2: fences
  h_01KYMJTZSGM9WN357HWY75DPY6: stairs
  h_01KYMJTZSGX5VFKHC1TRBAV8XT: camera
  h_01KYMJTZSJ23HPDEFJR3DNKQC5: editor
  h_01KYMJTZSNDNY18WJ82BBERYGF: entity-components
  h_01KYMJTZT6BNGNNATYA06NREQA: graphical
  h_01KYMJTZT6RAJQ3DBQT6KQXVCA: mobs-1
  h_01KYMJTZT6QE9ZC5CG2ABTK7CN: molang
  h_01KYMJTZT6QGWH3JC11K62J4C3: stability-and-performance-1
  h_01KYMJTZT7C2JZNHG40R1EXKQ1: experimental-technical-updates
  h_01KYMJTZT71PG27CEYXB921FHX: api-1
  h_01KYMJTZT9NDH2BDCHTXS7YX88: chatsendbeforeevent
  h_01KYMJTZT978NS5Y3Z7VEV2KQV: ddui-1
---

**Posted:** 28 July 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/47702557757453" alt="dappled_preview_1.jpg" />
</figure>

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

## Drop 3 2026 Features

- Removed the experimental toggle for Drop 3 2026 features and made them available by default

### Abandoned Camp

- Modified existing Abandoned Camps and added more Campsites
- Cushions in Abandoned Camps no longer generate inside other objects ([MCPE-240911](https://bugs.mojang.com/browse/MCPE-240911))

### Blocks

- Poplar Leaves no longer show black pixels while held in hand on Simple graphics with Fancy Leaves enabled
- Shelf Mushrooms are now immediately destroyed when lava flows into them
- Double Wool Slabs can no longer be obtained with commands ([MCPE-240016](https://bugs.mojang.com/browse/MCPE-240016)) ([MCPE-240050](https://bugs.mojang.com/browse/MCPE-240050))

### Cushion

- The Cushion item group is now correctly named "Cushions" in the Creative inventory ([MCPE-240906](https://bugs.mojang.com/browse/MCPE-240906 "https://bugs.mojang.com/browse/mcpe-240906"))

### Items

- Poplar Leaves, Poplar Shelves, Poplar Boats, and Cushions are now ordered consistently in the Creative inventory ([MCPE-240031](https://bugs.mojang.com/browse/MCPE-240031)) ([MCPE-240792](https://bugs.mojang.com/browse/MCPE-240792)) ([MCPE-240464](https://bugs.mojang.com/browse/MCPE-240464))

## Features and Bug Fixes

### Gameplay

- Fixed a bug where damage calculation did not apply correctly to Players falling from certain heights through one block of water
- Fixed an issue that could cause players who died while inside a Nether portal to respawn in the Nether
- Fixed an issue where the same world seed would generate end portals with inconsistent amounts of Eyes of Ender ([MCPE-227980](https://bugs.mojang.com/browse/MCPE-227980))
- Fixed entity teleporting to unexpected location when using the teleport command between dimensions ([MCPE-181173](https://bugs.mojang.com/browse/MCPE-181173))

### Graphics

- Fixed tears in the dithering effect when looking through models in Vibrant Visuals.

### Items

- Projectiles can now only hit the entity that shot them, or entities in the same vehicle hierarchy (such as the shooter's mount), after they have spatially left that hierarchy ([MCPE-240527](https://bugs.mojang.com/browse/MCPE-240527))
  - This prevents players from damaging themselves with lightly charged Arrows

### Mobs

- Armor Stands and Drowned are now harder for hostile mobs to detect while invisible
- Bats now spawn in all Overworld biomes except the Deep Dark

### Realms

- Fix for when the user tries to download a copy of a Realm world after changing settings results in the download never happening
- Fixed height on the members search bar
- Introduced a localized loading spinner to replace the play button on the Realms tab when the client is fetching additional information from services, and a reload button that player can use to reload the tab should the fetch fails
- Fixed the string Core and Plus sometimes are being translated in other languages

### Stability and Performance

- Fixed a crash that could occur when opening Change Control Mode under Touch Settings after deleting a world
- Fixed memory leaks when blocks are moved by a piston outside of simulation distance ([MCPE-238926](https://bugs.mojang.com/browse/MCPE-238926))

### User Interface

- Store the furnaces recipe book preferences after reloading a world ([MCPE-239320](https://bugs.mojang.com/browse/MCPE-239320))
- Fix vertical menu screen reader narration in settings screens
- Fixed the game crashing by pressing Tab repeatedly while dying ([MCPE-239639](https://bugs.mojang.com/browse/MCPE-239639))
- Japanese symbols are no longer displayed with a different font in specific areas of the UI ([MCPE-239802](https://bugs.mojang.com/browse/MCPE-239802))
- Text strings on world tile buttons across My World, My Templates and Servers menus are no longer truncated by ellipses
- Screenshots can now be set as world thumbnails without triggering an assertion
- Fixes cape causing visual discrepancies between the in game model and the model shown in the Dressing Room
- Trusted servers no longer prompt players for confirmation after restarting the client
- Fixed error message display when the Marketplace wishlist fails to load, ensuring players receive appropriate feedback about connectivity and service issues (US-1656572)
- Updated Adjust brightness screen in Settings (in and out of game) to use new Ore UI design and tech.
- Added an empty-state message for Marketplace Wishlist with a Browse Marketplace call to action

#### Storage

- Ported in OreUI the deletion modal used by the Storage list

## Technical Updates

### AI Components

- Made schema for the minecraft:tamemount component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.50 and newer.

### AI Goals

- Added in_range_movement_mode to minecraft:behavior.ranged_attack for format versions 1.26.50 and newer
  - hold_position makes the entity hold its position while within attack range
  - follow_target makes the entity continue moving toward its target while within attack range
- Actor goal minecraft:behavior.ranged_attack now takes a float range for attack_range instead of attack_radius_min and attack_radius for format versions 1.26.50 and newer

### API

- Released class EntityStartSneakingAfterEvent from beta to v2.10.0
- Released class EntityStartSneakingAfterEventSignal from beta to v2.10.0
- Released class EntityStopSneakingAfterEvent from beta to v2.10.0
- Released class EntityStopSneakingAfterEventSignal from beta to v2.10.0
- Released interface EntitySneakingChangedEventOptions from beta to v2.10.0
- Released property WorldAfterEvents.entityStartSneaking from beta to v2.10.0
- Released property WorldAfterEvents.entityStopSneaking from beta to v2.10.0
- Released Player.fogSettings from beta to v2.10.0
- Released class FogSettings from beta to v2.10.0
- Released class FogSettingsError from beta to v2.10.0
- Released class BlockDynamicPropertiesComponent from beta to V2.10.0.
- Released class ItemBlockDynamicPropertiesComponent from beta to V2.10.0.

#### DDUI

- Fixed a bug where hiding a CustomForm and then immediately showing another one would get the response UserBusy. Now it appropriately swaps to the second form.
- Released CustomForm.image and ImageOptions to version 2.2.0 of @minecraft/server-ui

#### Loot Tables

- Added the optional operator field to all loot table conditions, allowing control of whether the condition's result is used directly or negated
  - == and equals apply when the condition evaluates to true
  - != and not apply when the condition evaluates to false
  - Omitting operator preserves the existing behavior and is equivalent to using ==

##### Example

The following condition allows a loot entry to be selected only when the loot context is not in a biome with the plains tag:

{ "condition": "biome_has_tag", "operator": "not", "tag": "plains" }

#### Script Debugger

- Added the script-debugger-listen-address server property; script debugger listen mode now binds to loopback by default, and non-loopback listen addresses require a configured passcode

### Blocks

#### Fences

- Vanilla fence blocks now expose per-direction connection block states (minecraft:connection_north, minecraft:connection_east, minecraft:connection_south, minecraft:connection_west), reflecting which neighbors the fence connects to. Changing a fence's connections now sends block updates to neighboring blocks in worlds using version 1.26.50 and later

#### Stairs

- Vanilla stair blocks now expose a minecraft:corner block state (none, inner_left, inner_right, outer_left, outer_right) reflecting the corner shape formed with adjacent stairs
- For new worlds (base game version 1.26.40 and later), stair corner-state changes now trigger neighbor block updates for parity with Java Edition; existing worlds keep the prior client-only update behavior

### Camera

- Camera presets that inherit from minecraft:follow_orbit no longer reset the player's rotation the first time they are applied, for presets using format version 1.26.50 or later

### Editor

- Updated addUserDefinedOperation API methods to accept separate transaction payloads representing the previous and new operation states
- Removed Header Action API from IRootPropertyPane
- Added optional property for IRootPropertyPane API to disable scrolling
- Fixed a bug where the editing template in Layouts Editor saved in wrong template after changing the selected template in the Layout Template Manager.
- This PR adds a new action: Layouts Managements that implements the new UI for the existing Layout Template. It is behind feature toggle for now.

### Entity Components

- Immunity to the freezing from Powder Snow is no longer hardcoded at runtime and is instead defined by the minecraft:freezing_immune component
  - The following mobs will be upgraded to automatically have this component:
    - "minecraft:creaking"
    - "minecraft:ender_dragon"
    - "minecraft:polar_bear"
    - "minecraft:skeleton"
    - "minecraft:snow_golem"
    - "minecraft:stray"
    - "minecraft:wither"

  - All non-mob entities are implicitly immune

  - Used by defining the component as follows:

    "minecraft:freezing_immune": {}
- The ambient sounds of entities are no longer redefined at runtime and instead respect the conditions defined by minecraft:ambient_sound_interval
  - Previously the ambient sound event name of an entity would be overwritten in these conditions:
    - If its head was in water then it would become ambient.in.water
    - If it was not on the ground then it would become ambient.in.air
    - If it would otherwise play ambient and it was a baby then it would become ambient.baby
  - If any of these conditions were true then it would override any user-defined entry in the event_names parameter of minecraft:ambient_sound_interval
  - Now this will no longer happen and only the event name specified by minecraft:ambient_sound_interval will be used
  - Entities defined in any older version will fall back to the original overriding path as a minecraft:uses_legacy_ambient_sounds component will be added
  - The minecraft:uses_legacy_ambient_sounds is deprecated as users should now specify the indended behavior in minecraft:ambient_sound_interval
  - Vanilla mobs have been upgraded to use this new syntax, which can be preserved as follows:

"minecraft:ambient_sound_interval": { "event_name": "ambient", "event_names": \[ { "condition": "query.head_is_in_water", "event_name": "ambient.in.water" }, { "condition": "!query.is_on_ground", "event_name": "ambient.in.air" }, { "condition": "query.is_baby", "event_name": "ambient.baby" } \], "range": 16.0, "value": 8.0 }

- Deprecated minecraft:projectile_component's owner_launch_immunity_ticks field in favor of a spatial check that determines when the projectile has left its shooter's vehicle hierarchy
  - Projectiles can now only hit the entity that shot them, or entities in the same vehicle hierarchy (such as the shooter's mount), after they have spatially left that hierarchy

\##Features

- A new value, wall, to the field surface has been added to the schema of snap_to_surface_feature, which allows the feature to be snapped to walls as well as ceilings and floors.
- A new field allow_non_air_placement has been added to the schema of snap_to_surface_feature, which allows specifying whether the snapped feature can be snapped through solid blocks.
  - If the snap is started inside a block that is not water or air, this field decides if the feature can snap out of it.
- Renaming the field vertical_search_range to search_range in the schema for snap_to_surface_feature

### Graphical

- "Automatic" upscaling quality now defaults to native resolution when using the Custom graphics preset

### Mobs

- Many mob properties are no longer saved if their values are the default

### Molang

- Added new query query.head_is_in_water which checks if the head of the entity is in water

### Stability and Performance

- Fixed issue where item catalog groups with long names crashed the game ([MCPE-240721](https://bugs.mojang.com/browse/MCPE-240721))

## Experimental Technical Updates

### API

- Changed the following beta APIs in @minecraft/server-admin
  - Changed arguments for AllowList.add() take an AllowListEntryNameInfo and boolean to allow this player to ignore player limits when joining the server.
  - Changed arguments for AllowList.contains() to take an AllowListEntryNameInfo
  - Changed arguments for AllowList.remove() to take an AllowListEntryNameInfo
  - Added property ignoresPlayerLimit to AllowListEntry
  - Added new AllowListEntryNameInfo

#### ChatSendBeforeEvent

- The targets property can now be modified to control which players receive the chat message

#### DDUI

- Fixed input and HUD delay after closing Data Driven UI screens
