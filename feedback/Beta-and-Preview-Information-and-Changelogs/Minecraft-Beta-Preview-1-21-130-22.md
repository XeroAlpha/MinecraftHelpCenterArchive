---
title: Minecraft Beta & Preview - 1.21.130.22
date: 2025-10-22T12:44:55Z
updated: 2025-10-22T15:45:38Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/40528922585613-Minecraft-Beta-Preview-1-21-130-22
hash:
  h_01K85YVZ07SJ9V2WH8R64FDRHM: posted22-october-2025
  h_01K85YVSJ1F09WGKHE5V1HD32N: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-mounts-of-mayhem: mounts-of-mayhem
  user-content-nautilus: nautilus
  user-content-spear: spear
  user-content-zombie-horse: zombie-horse
  user-content-zombie-nautilus: zombie-nautilus
  user-content-general: general
  user-content-mobs: mobs
  user-content-character-creator: character-creator
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  user-content-ai-goals: ai-goals
  user-content-api: api
  user-content-biomes: biomes
  user-content-block-rendering: block-rendering
  user-content-block-components: block-components
  user-content-editor: editor
  user-content-entity-components: entity-components
  user-content-items: items
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01K85Z6WN9JE1020DGMG7EBQMY: api-1
  user-content-api-infra: api-infra
  user-content-blocks: blocks
---

#### **Posted:** 22 October 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions\
   

It's time for another Preview and Beta release featuring our upcoming game drop, Mounts of Mayhem! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

 

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=features-and-bug-fixes)

## Mounts of Mayhem[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=mounts-of-mayhem)

### Nautilus[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=nautilus)

- When a Nautilus is fed a bucket of fish, the item will turn into a Water Bucket
- A tamed Nautilus will now be tempted by all fish
  - This includes buckets of fish
- A tamed Nautilus can now eat all fish
  - This includes buckets of fish

### Spear[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=spear)

- Zombies and Piglins can now use the Spear for attacking

> **Developer's Note:** *In an upcoming Preview release, the spear's lunge enchantment will consume hunger points instead of causing durability damage, mirroring the change in* [*Java Snapshot 25w43a*](../Snapshot-Information-and-Changelogs/Minecraft-Java-Edition-Snapshot-25w43a.md)*.*

### \
Zombie Horse[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=zombie-horse)

- The tooltip displayed when attempting to mount an untamed Zombie Horse has been changed from "Ride" to "Mount"
- Zombie Horse now has the correct spawn category of "monster" ([MCPE-229451](https://bugs.mojang.com/browse/MCPE-229451))

### Zombie Nautilus[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=zombie-nautilus)

- An untamed Zombie Nautilus can now be tempted by Pufferfish and Bucket of Pufferfish
- When a Zombie Nautilus is fed a Bucket of Fish, the item will turn into a Water Bucket
- A tamed Zombie Nautilus will now be tempted by all fish
  - This includes buckets of fish
- A tamed Zombie Nautilus can now eat all fish
  - This includes buckets of fish
- Zombie Nautilus no longer suffocates out of water

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=general)

- Resolved an issue on Windows where shared worlds (those available to all players) did not load resource or behavior packs ([MCPE-228607](https://bugs.mojang.com/browse/MCPE-228607))

## Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=mobs)

- Camels now take fall damage starting 4 blocks higher when walking or dashing ([MCPE-171996](https://bugs.mojang.com/browse/MCPE-171996))
- Phantoms can no longer drown ([MCPE-101541](https://bugs.mojang.com/browse/MCPE-101541))

## Character Creator[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=character-creator)

- Users will no longer be prevented from loading into a world due to the Invalid Platform Skin error

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=realms)

- Fixed controller focus being cut off for the top of the Realms Timeline Opted-Out members list

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=user-interface)

- Fixed issue with rendering custom blocks as "flying items" and with quick move animation ([MCPE-180489](https://bugs.mojang.com/browse/MCPE-180489))
- Text input in certain inputs such as Book and Quill, will now prevent new lines if it will push text out of the input window
- Fix suggested commands in chat misplaced when resizing window ([MCPE-147816](https://bugs.mojang.com/browse/MCPE-147816))

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=technical-updates)

## AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=ai-goals)

- Added the "minecraft:behavior.use_kinetic_weapon" AI goal
  - Description:
    - Allows a mob to make use of items with a "minecraft:kinetic_weapon" item component
    - The mob will approach the target before using the weapon and charging with it
    - If the target gets too close, the mob will retreat and reposition before charging again
    - Once all "max_duration"s in the item's "minecraft:kinetic_weapon" component have elapsed, the mob goes on cooldown and retreats before approaching again
  - Fields:
    - "approach_distance": The distance to the target within which the mob begins using its kinetic weapon
    - "reposition_distance": The distance the mob retreats to once the target is closer than the midpoint of the item's "minecraft:kinetic_weapon" component's minimum and maximum "reach"
    - "reposition_speed_multiplier": Multiplier applied to the mob's movement speed while repositioning
    - "cooldown_distance": The distance the mob retreats to after all of the item's "minecraft:kinetic_weapon" component's "max_duration" values have elapsed
    - "cooldown_speed_multiplier": Multiplier applied to the mob's movement speed while on cooldown
    - "weapon_reach_multiplier": Multiplier applied to the item's "minecraft:kinetic_weapon" component's "reach"
    - "weapon_min_speed_multiplier": Multiplier applied to each "min_speed" and "min_relative_speed" condition in the item's "minecraft:kinetic_weapon" component
    - "min_path_time": Minimum base time, in seconds, before recalculating a new attack path to the target (before increases are applied)
    - "max_path_time": Maximum base time, in seconds, before recalculating a new attack path to the target (before increases are applied)
    - "path_fail_time_increase": Time, in seconds, added to the attack path recalculation interval when the mob cannot move along the current path
    - "inner_boundary_time_increase": Time, in seconds, added to the attack path recalculation interval when the target is beyond "path_inner_boundary"
    - "outer_boundary_time_increase": Time, in seconds, added to the attack path recalculation interval when the target is beyond "path_outer_boundary"
    - "path_inner_boundary": Distance at which to increase attack path recalculation by "inner_boundary_time_increase"
    - "path_outer_boundary": Distance at which to increase attack path recalculation by "outer_boundary_time_increase"
    - "speed_multiplier": Multiplier applied to the mob's movement speed when moving toward its target
    - "require_complete_path": Specifies whether a full navigation path from the mob to the target is required
    - "track_target": Allows the mob to track its target even if it lacks a hard-coded sensing component
    - "cooldown_time": Cooldown time, in seconds, between consecutive attacks
    - "melee_fov": Field of view, in degrees, used by the hard-coded sensing component to detect a valid attack target
    - "x_max_rotation": Maximum rotation, in degrees, on the X-axis while the mob is trying to look at its target
    - "y_max_head_rotation": Maximum rotation, in degrees, on the Y-axis while the mob is trying to look at its target
    - "random_stop_interval": Defines a 1-in-N chance for the mob to stop its current attack, where N equals "random_stop_interval"
    - "attack_once": Allows the mob to perform this melee attack behavior only once during its lifetime
  - Requirements:
    - The mob must have an item with the "minecraft:kinetic_weapon" item component
    - Must otherwise fulfill the same conditions as other melee attack goals
- "minecraft:behavior.melee_box_attack", "minecraft:behavior.delayed_attack", "minecraft:behavior.melee_attack" and "minecraft:behavior.stomp_attack" now correctly apply their "path_inner_boundary" field

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=api)

- Added new module `@minecraft/server-graphics` to change graphics and rendering settings. The current set of APIs are associated with Atmospheric Scattering parameters in Vibrant Visuals
- The /clone command now fires onBreak beta API event for custom blocks overridden at source destination

## Biomes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=biomes)

- The client side Molang queries `query.entity_biome_has_all_tags`, `query.entity_biome_has_any_tags`, and `query.entity_biome_has_any_identifier` no longer need the UpcomingCreatorFeatures toggle to be used

## Block Rendering[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=block-rendering)

- Fixed custom blocks rendered in Structure Block GUI

## Block Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=block-components)

- The option "alpha_masked_tint" in "minecraft:material_instances" is going back to requiring "Upcoming Creator Features" with the next preview
- Modified "minecraft:material_instances" block component
  - Field `emissive` renamed to `shaded` to better describe what the field does
  - Default value of `shaded` now **true**, when false the material ignores face_dimming and ambient occlusion
- Modified component `"minecraft:material_instances"`
  - Released field `"shaded"` formerly called `"emissive"` from experimental

## Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=editor)

- Fixed a bug that updated the rotation range to (-360~360) for Summon tool and Brush tool
- Updated the settings for UI Settings, Tutorial, Keyboard and Graphics mode, users need to manually save these settings
- Added new `IModalDialog` API to create scripted dialog windows. They can be registered from `IModalDialogManager`, and then activated like core dialogs
- Added new selection tool utility "Quick Move" mode that allows you to easily move the contents of a selection in any one direction. Can also specify a specific destination.

## Entity Components[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=entity-components)

- Added new field `protection_slot` to `minecraft:burns_in_daylight`, which allows specifying an equipment slot that should provide protection from burning in daylight
  - Valid values are "slot.weapon.offhand", "slot.armor.head", "slot.armor.chest", "slot.armor.legs", "slot.armor.feet", and "slot.armor.body"
  - Leaving this field unspecified will default to having the Head armor slot provide protection from burning in daylight 
- In the "minecraft:ageable" and "minecraft:breedable" components, the "transform_to_item" field has been renamed to "result_item"
  - This field is now defined for each item entry in each component's "items" list, enabling item-specific transformations on use
- Added "result_item" field to the items in the "minecraft:healable" and "minecraft:tameable" components
  - This field is defined for each item entry in the "items" list
  - On a successful interaction, the consumed item is replaced with this item

## Items[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=items)

- Fix issue with rendering custom blocks as "flying items" ([MCPE-180489](https://bugs.mojang.com/browse/MCPE-180489))

# Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=experimental-technical-updates)

## API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=api)

- Debug Drawing
  - Fixed a bug where `timeLeft` would cause the `DebugShape` to be removed immediately
  - Fixed a bug where the arrow head of the `DebugArrow` would look incorrect at certain rotations

## API Infra[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=api-infra)

- Modernized AvailableCommandsPacket serialization. Added these constraints:
  - Chained Subcommand Data / Name max size set to 512 characters
  - Commands / Name max size set to 512 characters
  - Commands / Description max size set to 1000 characters
  - Commands / Chained Subcommand Indexes max size set to 250 elements
  - Commands / Overloads max size set to 250 elements
  - Constraints / Constraint Indices max size set to 250 elements

## Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30620/R21U13-2-Preview?anchor=blocks)

- Added component `minecraft:connection_rule` behind the Upcoming Creator Features toggle which allows custom blocks to define whether other blocks with connection behavior - such as fences, walls, bars, and glass panes - can try to create a connection
- Added VanillaBlockTag `minecraft:has_fence_connections` that can be used to identify a custom block as a block that creates connections like a fence; this tag is required to create connections between custom and Vanilla fences
- The component and tag can be used along with the `minecraft:connection` block trait to make a custom fence that creates connections like a Vanilla fence. The following is an example of how they fit into the JSON of a custom fence block:

``` auto
{
    "format_version": "1.21.130",
    "minecraft:block": {
        "description": {
            "identifier": "test:my_fence",
            "traits": {
                "minecraft:connection": {
                    "enabled_states": ["minecraft:cardinal_connections"]
                }
            }
        },
        "components": {
            "tag:minecraft:has_fence_connections": {},
            "minecraft:connection_rule": {
                "accepts_connections_from": "only_fences"
            }
        }
    }
}
```
