---
title: Minecraft Beta & Preview - 1.21.130.27
date: 2025-11-11T16:26:19Z
updated: 2025-11-11T16:45:17Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/41048727929101-Minecraft-Beta-Preview-1-21-130-27
hash:
  h_01K8QTR1XS3YFZ0WYMV02D4BXR: information-on-minecraft-preview-and-beta
  h_01K9STPN6VRB0SB19Z2XRM33CC: features-and-bug-fixes
  h_01K9STPN6VHJH5KDJM2E6GW7Q3: mounts-of-mayhem
  h_01K9STPN6VDYZFQ7WSP68E958Y: breath-of-the-nautilus
  h_01K9STPN6WCWP5KAMTBYA1G2Q5: camel-husk
  h_01K9STPN7173CP2F0XH59V7M7B: coral-zombie-nautilus
  h_01K9STPN711R78CXXQ1WVFSJ76: nautilus
  h_01K9STPN74RAD4E2CC01R50J48: parched
  h_01K9STPN752YCKJDSYM0X8N4C7: sounds
  h_01K9STPN782JE0HK3B443MJDPV: spear
  h_01K9STPN7DYHH4KVWT35TK42VB: zombie-horse
  h_01K9STPN7ET42H6P1TY7B8R1KA: zombie-nautilus
  h_01K9STPN7FVQ8R305X16D6HWN6: blocks
  h_01K9STPN7S65SWRR6AP68E3NC4: gameplay
  h_01K9STPN7SGJ8YRCTC1R5F61QV: general
  h_01K9STPN7WX73FH03BQPQ860GG: graphical
  h_01K9STPN7XJSXAVVJ8H6CW07TR: input
  h_01K9STPN7Y3T9P49TZCKD1SV3W: items
  h_01K9STPN815F2B2PZ5ES4WJG4V: mobs
  h_01K9STPN82TGMBT1TB1FHZWVZ0: realms
  h_01K9STPN82G7YPWBACN4NQ54MQ: text-input
  h_01K9STPN83EXNJDKK79SRA2Z6C: user-interface
  h_01K9STPN84PE0B8RJ155Z4T5MB: vanilla-parity
  h_01K9STPN84K8X8D711QM6T2DP0: technical-updates
  h_01K9STPN84KX0A78CX4K2FDBSM: user-interface-1
  h_01K9STPN8586QCD5PJ6PM6HMP1: api
  h_01K9STPN7F53BN2ETG0AQ673PN: editor
  h_01K9STPN89GN3MNAEANVQ1S5F8: item-components
  h_01K9STPN8DC62V24XR53DGZ54P: network-protocol
  h_01K9STPN8EQD96B044SCSQB3RK: experimental-technical-updates
  h_01K9STPN8HKVGA43R3EPPY5V6Y: blocks-1
  h_01K9STPN8Q4JKJSQ1KG7CK5JVN: graphical-1
---

**Posted:** 11 November 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes

## Mounts of Mayhem

### Breath of the Nautilus

- Breath of the Nautilus buff effect no longer stops air from replenishing when a player is out of water
- Breath of the Nautilus buff effect no longer stops air from replenishing when a player with the Water Breathing effect is riding a Nautilus
- Breath of the Nautilus buff effect no longer stops air from replenishing when a entity is submerged in lava

### Camel Husk

- Zombie Husks that spawn riding a Camel Husk now have a 50% chance of dropping a Rabbit Foot
- The Camel Husk can no longer be leashed while being ridden by a hostile mob
- The Camel Husk can no longer enter a panicked state while it is being ridden
- Looting enchantment now correctly works on Camel Husks
- Camel Husks no longer pull in Husks and Parched as passengers after they have been dismounted ([MCPE-230284](https://bugs.mojang.com/browse/MCPE-230284))
- Camel Husk now has the correct spawn category, matching Java ([MCPE-230851](https://bugs.mojang.com/browse/MCPE-230851))
- Camel Husk now has the correct sounds for Camel Husk sit, Camel Husk stand and Camel Husk dash ([MCPE-230845](https://bugs.mojang.com/browse/MCPE-230845))

### Coral Zombie Nautilus

- Coral Zombie Nautilus now actually replaces the normal Zombie Nautilus in Warm Oceans

### Nautilus

- Reduced clipping between the Nautilus's head and shell
- Nautilus' Hurt sound outside of water is no longer replaced by the Player Hurt sound
- Nautilus can now spawn in Peaceful difficulty ([MCPE-230064](https://bugs.mojang.com/browse/MCPE-230064))
- A Nautilus can now only spawn between Y-Level 38 and 58 ([MCPE-230074](https://bugs.mojang.com/browse/MCPE-230074))

### Parched

- Parched now deals a base damage amount of 1 heart instead of 1.5, matching Java
- Parched now has the same vertical offsets in vehicles as other Skeleton variants
- The Parched's geometry has been tweaked to fix some visual bugs
- Parched now have a chance of spawning riding Spiders and Cave Spiders in deserts, instead of regular Skeletons ([MCPE-230231](https://bugs.mojang.com/browse/MCPE-230231))

### Sounds

- Fixed unsaddle sound not playing for the Nautilus and the Zombie Nautilus ([MCPE-229446](https://bugs.mojang.com/browse/MCPE-229446))
- Fixed armor equip sound not playing for the Zombie Nautilus ([MCPE-229446](https://bugs.mojang.com/browse/MCPE-229446))
- Fixed armor unequip sound not playing for the Zombie Nautilus ([MCPE-229446](https://bugs.mojang.com/browse/MCPE-229446))
- Added custom Saddle sound for the Nautilus and the Zombie Nautilus

### Spear

- Piglins now correctly hold Spears in their left hand while inspecting them ([MCPE-229490](https://bugs.mojang.com/browse/MCPE-229490))
- Fixed the Unbreaking enchantment not working on Spears ([MCPE-229499](https://bugs.mojang.com/browse/MCPE-229499))
- Fixed merging enchanted Spears on the Anvil not working ([MCPE-229778](https://bugs.mojang.com/browse/MCPE-229778))
- Spear use sound no longer has a chance of playing twice ([MCPE-229442](https://bugs.mojang.com/browse/MCPE-229442))
- Increased the angle at which the Spear is rotated around its axis when jabbing or during the later stages of charging ([MCPE-229439](https://bugs.mojang.com/browse/MCPE-229439))
- The shaking of a Zombie's arms when holding a Spear is now mirrored, matching Java Edition ([MCPE-229863](https://bugs.mojang.com/browse/MCPE-229863))
- Zombie Villagers can now pick up and use Spears
- Piglins will now be able to pick up and use all Spears with the same priority as Swords of the same tier
- Spears now play hit sounds and trigger attack animations when charging at Armor Stands
- Enchantment effects are once again applied only when the player’s and target’s speeds are sufficient for the spear to deal damage
- Spears now correctly attack in the tapped direction when jabbing with touch controls
- Spears no longer prevent interaction with blocks when using touch controls ([MCPE-229888](https://bugs.mojang.com/browse/MCPE-229888))
- Spear attack range is now correctly applied, providing an effective maximum reach of 4.5 blocks ([MCPE-229475](https://bugs.mojang.com/browse/MCPE-229475))
- Spear attack range is now increased by 3 blocks in Creative Mode, matching the behavior of other weapons

### Zombie Horse

- Zombie Horse head texture is now symmetrical
- Zombie Horses will no longer panic from fire tick damage as that would cause them to sometimes move back into sunlight which set them on fire to begin with
  - They will still panic from being set ablaze
- Reduced the range of speed the Zombie Horse can spawn with
- Zombie Horse Saddle textures now match other Horse Saddles

### Zombie Nautilus

- Reduced clipping between the Zombie Nautilus's head and shell
- Zombie Nautilus' Hurt Sound outside of water is no longer replaced by the Player Hurt Sound

## Blocks

- Hanging roots can now be waterlogged ([MCPE-128957](https://bugs.mojang.com/browse/MCPE-128957))

## Gameplay

- Custom items tagged with `minecraft::is_shovel` now build paths on all blocks the Shovel does
- Hoppers can no longer stack multiple bottles in one slot inside a Brewing Stand ([MCPE-228374](https://bugs.mojang.com/browse/MCPE-228374))
- Fixed clipping in the third-person swimming animation ([MCPE-229452](https://bugs.mojang.com/browse/MCPE-229452))

## General

- Lime Dye no longer awards the "You Need a Mint" achievement

- Copper tools can now award the "MOAR tools" achievement when crafted

- Fixed an issue where signing in at the exact wrong time would make many online features unable to load for 5 minutes

- Added splash text "One does not simply walk to the Far Lands"

  > **Developer's Note:** *This statement was proven false on October 4, 2025.*

## Graphical

- Fixed Mooshroom's mushrooms and armor on mobs not being affected by "Enable Dithering" setting ([MCPE-228281](https://bugs.mojang.com/browse/MCPE-228281)) ([MCPE-228296](https://bugs.mojang.com/browse/MCPE-228296))
- Fixed a regression where Torches and Lanterns weren't emitting point lights in raytracing-enabled worlds

## Input

- Fixed an issue where Xbox controllers connected to ROG Xbox Ally did not work while built-in controller was active ([MCPE-184251](https://bugs.mojang.com/browse/MCPE-184251)) ([MCPE-180470](https://bugs.mojang.com/browse/MCPE-180470))
- Fixed a bug on Windows where the mouse cursor moved in the background during gameplay ([MCPE-230832](https://bugs.mojang.com/browse/MCPE-230832))

## Items

- Spawn Eggs are now sorted thematically in the Creative Inventory, according to the following categories:
  - Overworld
    - Farm Animals
    - Mounts
    - Pets
    - Wild Animals
    - Aquatic
    - Miscellaneous
    - Golems
    - Villagers
    - Undead
    - Spiders
    - Monsters
    - Illagers
  - Nether
  - The End
- Tools and weapons now lose durability when used to attack Armor Stands, just like they do when damaging other entities such as Minecarts, Paintings, Boats, or Leash Knots

## Mobs

- It is no longer possible for two mobs to mount each other simultaneously

## Realms

- Navigate players back to either the start screen or the settings screen when they confirm the message about not being able to connect to a network
- Present players with the option to play using mobile data or to change their game settings if mobile data is disabled when attempting to join a newly purchased Realm

## Text Input

- Fixed IME input when application lost and regained focus (switching from the app and back while editing)

## User Interface

- Fixed a crash when using hotbar hotkeys while hovering over the Stonecutter preview interface ([MCPE-230558](https://bugs.mojang.com/browse/MCPE-230558))
- Open windows such as inventory, trading, or chat, will now close when you are hurt by a mob
  - Windows will not close repeatedly if you are attacked multiple times in quick succession

## Vanilla Parity

- Crimson Roots and Crimson Fungus now generate in the Warped Forest biome ([MCPE-83616](https://bugs.mojang.com/browse/MCPE-83616))

# Technical Updates

## User Interface

- Added `resolve_ancestor_scope` boolean to view bindings as a way to bind to an ancestor that matches the `source_control_name`

## API

- Moved class `Potions` from `beta` to `V2.4.0`
- Moved component `ItemPotionComponent` from `beta` to `V2.4.0`
- Moved class `PotionDeliveryType` from `beta` to `V2.4.0`
- Moved class `PotionEffectType` from `beta` to `V2.4.0`
- Moved error `InvalidPotionDeliveryTypeError` from `beta` to `V2.4.0`
- Moved error `InvalidPotionEffectTypeError` from `beta` to `V2.4.0`
- Player method `clearPropertyOverridesForEntity` can now take an Entity or Entity ID as valid arguments in `v1.19.0`

## Editor

- Added Generate Manifest button to Selection Tool
  - Added Deselect and Replace operations to Selection Tool block manifest - allows removing or replacing specific block types from the selection
- Added "Paint" key bind for pencil in keyboard settings
- Added filtering options in the Structure panel. Filtering can be by structure display name or Structure tags
- Added Jigsaw block editing to the block inspector
- Added bypass validation warning screen to generate jigsaw workflow
- Added localized message and sub message support for logging APIs
- Added new Raise and Lower Elevation modes for Terrain Tool
  - Ability to adjust brush falloff
  - Ability to specify how many terrain layers to clone or preserve when raising/lowering
  - Ability to adjust the brush radius
  - Added ability to hold the SHIFT key to lock the brush XZ coordinates in place while painting
- Added Layout Instance baking (bake individual instances and added to export world and playtest) so that layouts are converted from holograms to actual blocks (Only works for Overworld at the moment)
  - Added Mirror/Rotation to layout templates
  - Added Mirror/Rotation to layout instances
  - Added Mirror and Rotation properties to instance Editor
  - Note: Only Overworld is supported for layout baking at the moment. The Nether and End will be supported in a future update
- Updated the selection limit for Selection, Paste Preview, Line, Pencil, Brush, Smartfill, Terrain, Workbench, Ruler, Block inspector, Scale, Farm generator tools to match the video render distance setting
- Updated UI and added multiplayer behaviors in Navigation Pane
  - Stored Locations are shared across all creators in the project and synced for new joiners
  - Implemented edit functionality for name, coordinates, and color of Stored Locations
  - Added select/deselect-all and delete option with confirmation modal; deletion affects all users
  - Introduced a new panel listing all creators in the project with color indicators
  - Added teleportation feature to jump to any other creator
- Updated Quick Move functionality
  - Changed switching to Quick Move mode binding from M to N
  - Changed default keybinding for moving with the arrow keys with Alt+Shift+arrow
  - Both previous changes remove keybinding conflicts with other Selection mode shortcuts
  - Made it so the gizmo arm won't disappear after you use it
  - Made the preview more transparent
  - You cannot enter quick move now if there is no selection
  - Fixed a bug where if you went from quick move to a selection (creation) mode that wasn't the last you used the selection state would get messed up. Now it correctly will clear the selection
- Fixed structure panel UI performance for projects containing a large number of structures
- Fixed an issue where selecting certain Vibrant Visual settings caused an error
- Fixed brush applying masked blocks incorrectly after switching dimensions
- Fixed unhandled extrude tool error when it's being applied out of world bounds
- Fixed a critical crash and several logic issues in the Ruler Tool when using axis locks and editing start/end points

## Item Components

- Added the `creative_reach` field to `minecraft:kinetic_weapon` item component
  - Defines the reach used when the user is in Creative Mode
  - Defaults to `reach` if unspecified
- Added the `creative_reach` field to `minecraft:piercing_weapon` item component
  - Defines the reach used when the user is in Creative Mode
  - Defaults to `reach` if unspecified
- Added the `start_sound` field to the `minecraft:use_modifiers` item component
  - Defines the sound to play when starting using the item

## Network Protocol

- `LevelSoundEventPacket` modified: added `LevelSoundEvent::SpearUse` and `LevelSoundEvent::WoodenSpearUse`

# Experimental Technical Updates

\##API

- Added `BlockComponentRedstoneUpdateEvent`, which can be subscribed by custom block components
- Added `onRedstoneUpdate` custom component subscription in `beta` with the following conditions
  - Block has `minecraft:redstone_consumer` component, otherwise CONTENT_ERROR is thrown
  - Subscription is not queued if the `BlockComponentRedstoneUpdateEvent.powerLevel` is less than `minecraft:redstone_consumer` field `min_power`\
    Here is an example of a custom component json and the subscription script:

``` auto
{
    "format_version": "1.21.130",
    "minecraft:block": {
        "description": {
            "identifier": "test:custom_block"
        },
        "components": {
            "minecraft:redstone_consumer": {
                "min_power": 10,
                "propogates_power": true
            },
            "test:custom_component": {}
        }
    }
}
```

``` auto
import { system } from '@minecraft/server-wrapper';
system.beforeEvents.startup.subscribe(init => {
    init.blockComponentRegistry.registerCustomComponent("test:custom_component", {
        onRedstoneUpdate: _ => {
            //insert logic here
        }
    });
});
```

## Blocks

- We now will mirror the `minecraft:corner` block state when used within a structure
- Added `minecraft:redstone_consumer` component behind the `Upcoming Creator Features` experiment. A component describing how a block can consume and potentially propogate a redstone signal
  - Contains optional field `min_power` which defines the minimum value for incoming signal stregth. If signal strength is greater than or equal to this value then the `onRedstoneUpdate` event is sent to Scripts. Defaults to 0 meaning event is always emitted

  - Contains optional field `propogates_power` a Boolean to control whether a signal can pass through this block or not, defaults to false

  - This component is currently not available for block permutations

  - Example:

    ``` auto
    {
        "format_version": "1.21.130",
        "minecraft:block": {
            "description": {
                "identifier": "test:custom_consumer_block"
            },
            "components": {
                "minecraft:redstone_consumer": {
                    "min_power": 5,
                    "propogates_power": true
                }
            }
        }
    }
    ```
- Modified `minecraft:material_instances` block component
  - Removed redundant experimental field `shaded` formerly named `emissive`
  - Same effect can be achieved with existing fields, example below

``` auto
"minecraft:material_instances" : {
    "*": {
        "texture": "my_texture",
        "render_method": "opaque",
        "face_dimming": false,
        "ambient_occlusion", false
    }
}
```

- Added `minecraft:leashable` block component, which allows custom blocks to receive a lead attachment, including an offset field to change the position of the leash knot. Currently only available with "Upcoming Creator Features" enabled

## Graphical

- Fixed an error where Marketplace content containing local_lighting.json could spam content errors ([MCPE-1498487](https://bugs.mojang.com/browse/MCPE-1498487))
- Added Colored Static Block Lighting under the Render Dragon Features for Creators toggle
  - Feature is only available in Previews and using Vibrant Visuals in worlds which the experiment toggle is active
    - Temporarily disabled on Android and PlayStation due to technical issues
  - Static lights can be defined in `local_lighting.json` using `"light_type": "static_light"`
  - Blocks with the `"point_light"` `light_type` will also receive colored static lighting
  - Static lighting follows Minecraft lighting rules and respects the `minecraft:light_emission` and `minecraft:light_dampening` block components
  - Static lighting is additive/accumulated, so overlapping lights of different colors will cause lighting to get brighter
    - Overlapping lights of the same type (i.e. same color and `light_emission`) will not cause lighting to get brighter
  - Static lighting is not affected by stained glass or other translucent blocks
  - The static lighting experimental feature is under development and may look or behave different as development progresses
  - Learn more at https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization
