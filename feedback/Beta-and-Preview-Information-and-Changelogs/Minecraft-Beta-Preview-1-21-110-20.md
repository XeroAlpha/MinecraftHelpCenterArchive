---
title: Minecraft Beta & Preview - 1.21.110.20
date: 2025-07-22T11:12:27Z
updated: 2025-07-22T15:56:02Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38234446024333-Minecraft-Beta-Preview-1-21-110-20
hash:
  h_01K0S8Q97RZSJQMRJ6Z6SEXZJV: experimental-features
  h_01K0S8Q97RG0M1MDJA27FSCQTX: features-and-bug-fixes
  h_01K0S8Q97RGEVZYCMJQP2Y5KEV: shelf
  h_01K0S8Q97XHYCTVTE8F8CG2ZKW: copper-golem
  h_01K0S8Q982EMVPRHDWDTD3WYY0: copper-golem-statue-block
  h_01K0S8Q983NKFAMMBXNM6MWEFF: accessibility
  h_01K0S8Q9834JVTDVRF9TTH5QRY: blocks
  h_01K0S8Q984CRN9SYZRXPYAYN6Q: copper-chest
  h_01K0S8Q984N466W6D9R63GXRBZ: copper-equipment
  h_01K0S8Q985Z2XHMFA7X4XCHJNS: editor
  h_01K0S8Q985H7D4CHN0B7VJKTYH: gameplay
  h_01K0S8Q986EPEN01C1FDP6K8NT: general
  h_01K0S8Q9864WYJM1DB98VJ345Z: graphical
  h_01K0S8Q98A5MYCDY8T549D8CGJ: mobs
  user-content-realms: realms
  h_01K0S8Q98BWAZ8PS6AD1VM2G77: user-interface
  h_01K0S8Q98CC2CX843FV7AP3S36: technical-updates
  h_01K0S8Q98CGFKVVDDTJ1NSPYMN: add-ons-and-script-engine
  h_01K0S8Q98CWAHJWG78S2TG5S94: api
  h_01K0S8Q98CZM4FCES2AA7878GV: ""
  h_01K0S8Q98E18J3QW0Y9BAEJZWV: biomes
  h_01K0S8Q98FSJ8M7CCHYQHBXTVZ: blocks-1
  h_01K0S8Q98GRWD8BNX9XHMRNMR5: components
  h_01K0S8Q98J4PSNE82QWBN3EN30: editor-1
  h_01K0S8Q98K7DVSRR24J42T8PTJ: entity-components
  h_01K0S8Q98MGZ27QDKDC8PBH4Z1: entity-event-responses
  h_01K0S8Q98NH3G18MH3RK2124VE: gameplay-1
  h_01K0S8Q98NDPADNYT8P0RD4SCY: graphical-1
  h_01K0S8Q98N1TBMPDBJSHY4VV3V: items
  h_01K0S8Q98QQ0SWMKZHKM6QYQJR: experimental-technical-updates
  h_01K0S8Q98QF1VXZ9ETJQ01J1DT: api-1
  h_01K0S8Q98Q7JVK81QHPA0PNF27: "-1"
  h_01K0S8Q98RGRNZ4PZY5CMYRYPZ: "-2"
  h_01K0S8Q98R6BQW6SY0HYVE4AJ3: "-3"
  h_01K0S8Q98S1ZKQBQ9HNANMGGF7: biomes-1
  h_01K0SAPKBVR4P4PCP8QHR47117: graphics
---

**Posted:** 22 July 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/38234446022797" alt="Copper statues in a village setting. There are shelves with items can be seen also." />
</figure>

Test more features from our third game drop! Copper golems turn into statues when fully oxidized, striking a random pose! Interact with the statue to change its pose or reanimate it by scraping off the patina. When connected to a redstone comparator, each statue pose emits a distinct signal, creating exciting engineering opportunities... Don't forget to try out shelves, which display up to three items that you can easily swap into and out of your inventory. Power adjacent shelves with redstone to connect them and swap out multiple items in your hotbar. Out now in Bedrock beta & preview and coming soon to Java snapshot!

And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

**Please note:** The update is rolling out to each Beta and Preview platform as it becomes available. It might take a little extra time to reach you—thanks for your patience!

# Experimental Features

- We've removed the experimental toggle for game drop features, so you can now enjoy them in normal worlds without flipping any switches. As always, your feedback and bug reports are incredibly valuable, especially during Betas and Previews. Keep them coming!

# Features and Bug Fixes

## Shelf

- The Shelf is a new type of decorative block which comes in the following variants:
  - Oak
  - Spruce
  - Birch
  - Jungle
  - Acacia
  - Dark Oak
  - Mangrove
  - Cherry
  - Pale Oak
  - Bamboo
  - Crimson
  - Warped
- The Shelf can be crafted from six matching blocks of any Stripped Log, Stripped Stem, or Block of Stripped Bamboo, filling the top and bottom row
  - This recipe produces 6 Shelves
- The Shelf can store up to 3 item stacks:
  - Interacting with any of the 3 slots on its front swaps the player's main hand item with the content of that slot
  - The Shelf displays all items it contains in front of it, similar to an Item Frame
- While a Shelf is powered by Redstone, its front texture changes to reflect that it's powered; when placed next to each other, up to 3 powered Shelves will connect
  - Interacting with a single powered Shelf swaps all its contents with the 3 rightmost items in the player's hotbar
  - Interacting with two connected Shelves swaps their contents with the 6 rightmost items in the player's hotbar
  - Interacting with three connected Shelves swaps their contents with all items in the player's hotbar
  - It does not matter which of the connected Shelves the player interacts with

## Copper Golem

- If the Copper Golem has fully oxidized it will turn into a Copper Golem Statue Block
- When turned into a Copper Golem Statue block, it will freeze in a random pose
- When turned into a Copper Golem Statue the Copper Golem will drop any item it may be holding
- A Copper Golem turned into a Copper Golem Statue will keep its name if named with a Name Tag
- Interacting with the Copper Golem with an empty hand will drop its carried item
- Copper Golem now interacts with Trapped Chests ([MCPE-223758](https://bugs.mojang.com/browse/MCPE-223758))
- Unwaxing or scraping the Copper Golem using an Axe now affects the durability of the Axe
- Copper Golem saved by Totem of Undying no longer becomes passive ([MCPE-223746](https://bugs.mojang.com/browse/MCPE-223746))
- Copper Golem no longer continues Chest interaction animation while panicking ([MCPE-223764](https://bugs.mojang.com/browse/MCPE-223764))
- Copper Golem now sorts differently named items of the same type together
- Copper Golem now sorts the same item together even when durability is different ([MCPE-223755](https://bugs.mojang.com/browse/MCPE-223755))
- Copper Golem now sorts Bundles of the same color together ([MCPE-223833](https://bugs.mojang.com/browse/MCPE-223833))
- Copper Golem Chest interaction sounds now match the animation more closely
- The Copper Golem now turns its head when looking at the player

## Copper Golem Statue Block

- Copper Golem Statue Block is a new type of decorative block which has waxed and oxidized variants
- Copper Golem Statue Block oxidizes over time and can be waxed like Copper blocks
- The pose of the block can be changed by interacting with it
- If the Copper Golem Statue Block has no oxidation when interacted with using an Axe, the block will turn into a Copper Golem again
- When connected to a Redstone Comparator, the Copper Golem Statue Block emits a Redstone signal based on its current pose

## Accessibility

- Dye Colors now have updated icons
  - The goal with these is to enhance visual cohesion across the dye set while maintaining distinct shapes to support colorblind accessibility

## Blocks

- Some blocks that could catch fire with Flint and Steel, like the top Stone Slab or Wood Stair, will now also catch fire during fire explosion, such as those from Fireballs
- Glass Blocks will now catch fire with Flint and Steel or fire explosion
- Fixed a bug where placing water from a Water Bucket onto a block containing another block (e.g. Button or Lever) would not allow the user to remove that water block afterwards. ([MCPE-218044](https://bugs.mojang.com/browse/MCPE-218044))

### Copper Chest

- Copper Chest lid now has a copper texture ([MCPE-223790](https://bugs.mojang.com/browse/MCPE-223790))
- Double Copper Chests now have their groove at the front ([MCPE-223825](https://bugs.mojang.com/browse/MCPE-223825))

## Copper Equipment

- Hostile Monsters now have a chance to spawn with Copper Armor equipped
- Hostile Monsters can pick up and use Copper Weapons and Armor

## Editor

- Editor Structures are now exported under the /structures folder in the world's directory when an Editor world is exported

## Gameplay

- Entities are no longer placed halfway outside of a nether portal after traveling through the portal ([MCPE-189106](https://bugs.mojang.com/browse/MCPE-189106))
- Fixed an issue where the player sleeping animation would start before the player climbed into bed
- Camera command no longer leads to crash when using the in_out_back method ([MCPE-223147](https://bugs.mojang.com/browse/MCPE-223147))

## General

- Fixed grass color in swamps that is too green in Preview builds ([MCPE-223910](https://bugs.mojang.com/browse/MCPE-223910))
- Fixed Paintings from breaking when joining a multiplayer game in low-latency scenarios ([MCPE-181306](https://bugs.mojang.com/browse/MCPE-181306))

## Graphical

- Update Volumetric Fog configs for PC to have more consistent steps in performance impact, while also maximizing image quality for cost
- Added support for Subsurface Scattering on particle textures
- Fixed rain and snow lighting up far above the light source in Vibrant Visuals
- Fixed the issue where the Nether Portal fullscreen effect appeared black in Vibrant Visuals ([MCPE-221341](https://bugs.mojang.com/browse/MCPE-221341))
- Updated max render distance to 28 on PC for Vibrant Visuals
- Fixed lack of illumination in some particles emitted by breaking blocks ([MCPE-218184](https://bugs.mojang.com/browse/MCPE-218184))
- Increased thickness on Block Selection wireframe to make it more visible in Vibrant Visuals especially with TAAU enabled
- Fixed an issue causing Chests to appear desaturated while held in hand in Vibrant Visuals
- Fixed an issue causing attachables such as Bows to appear desaturated in Vibrant Visuals
- Fixed bug where Vanilla Mob Flame textures are missing
- Progress of Leaves turning white in snow is now correctly set when entering a world, and this color change now works correctly in Custom Biomes
- Fixed unlit Candles not casting shadows
- Fixed unlit Cake Candles not casting shadows
- Fixed Glass Block depth issues with Candles
- Fixed water depth buffer issues with Cake Candles
- Fixed infinite duration blindness effect visuals

## Mobs

- Wolves no longer start shaking off water if they are already shaking off water

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/29953/R21U11-1-Preview?anchor=realms)

- New Edit World page available to try
  - To access, click "Settings" on the Realms tab to go to the Slots page. Then, select a world and click "Edit World." There will be a button at the top of the page that you can click to try the new design
  - You can flip back and forth between the old and new designs as much as you want
  - Resource and behavior packs will still have to be configured in the old design for now

## User Interface

- The RTX and Marketplace Pass icon will no longer show up on the same item
- The RTX Chevron will now show up correctly on the Marketplace search screen

<!-- -->

- Fixed an issue where the Featured Server details would randomly scroll up ([MCPE-181924](https://bugs.mojang.com/browse/MCPE-181924))
- Recipe Book can no longer show duplicate icons if user has Recipe Book hidden when acquiring new recipes
- Fixed Marketplace pass chevron priority on hero row items
- Fixed Blade row missing Marketplace pass chevron

# Technical Updates

## Add-Ons and Script Engine

- Moved the properties "ash", "red_spores", "blue_spores", and "white_ash" from the "minecraft:climate" biome component to the new client biome component "minecraft:precipitation"

## API

### `@minecraft/server`

- Added @minecraft/server version 2.3.0-beta
- Added @minecraft/server version 2.2.0
- Enabled `Player.applyImpulse` and `Player.clearVelocity`
- class `AimAssistRegistry`
  - Added readonly property `DefaultCategoryId`
- Updated `System.sendScriptEvent` to be able to be called in "before" events

## Biomes

- Added content errors in server side biome components that were missing them to more easily identify issues and how to fix them

## Blocks

- Fixed a bug that caused default editor movement speed to initialize incorrectly
- Custom block geometry no longer produces a warning when fully contained within the first or last 1/16ths of the unit cube volume in any axis
  - A warning is still produced if the geometry doesn't have at least one corner overlapping the unit cube volume, not counting its boundary

## Components

- Content warnings will log missing references in Jigsaw Structure, Processor List, Template Pool, and Structure Sets JSON
- Content warnings will log missing references in Camera Preset, Camera List, Aim Assist Preset, and Aim Assist Categories JSON
- Content warnings will log missing item references in Crafting Items Catalog JSON
- Changes to 'minecraft:input_air_controlled'
  - Renamed to 'minecraft:free_camera_controlled'
  - Removed upward movement behaviour when holding the jump action from this component
- Added new component 'minecraft:vertical_movement_action'
  - Adds the functionality of upward or downward movement when holding the jump action
  - This component is automatically added to any entity that uses the old 'minecraft:input_air_controlled' with format version 1.21.100 or older
- Updates to "minecraft:dash"
  - Renamed to "minecraft:dash_action" to improve clarity

## Editor

- Fixed a bug where the selection highlight used the wrong color after changing the theme
- Fixed a bug that caused keybinding text to be narrated incorrectly
- Updated `tooltip` API property of `IToggleGroupPropertyItemEntry` to take `BasicTooltipContent`

## Entity Components

- Fixed the documentation of `minecraft:on_death` claiming the component only works on the Ender Dragon, it works on all entities
- Added `slot.weapon.mainhand` and `slot.weapon.offhand` as valid slots for `minecraft:interact` component operations

## Entity Event Responses

- Added the `drop_item` entity event response, which allows an entity to drop its item in a given slot

## Gameplay

- Fixed an issue where the player behaved incorrectly with the `fixed boom` camera when using the `locked_player_relative_strafe` control scheme. Player movement is now consistent with the free camera in this scenario

## Graphical

- Changed defaults for color grading contrast and saturation fields to 1. Previously the defaults were 1.2 and 1.05 respectively

## Items

- Setting the "minecraft:use_modifiers" component's "movement_modifier" field to 1.0 now allows using the item while sprinting, and starting to sprint while using the item
- "poly_mesh" is no longer treated or documented as an experimental feature
- "texture_meshes" is no longer treated or documented as an experimental feature
- The "scale" field can now adjust the depth of "texture_meshes", since its value is no longer ignored
- Added the "use_pixel_depth" option to "texture_meshes" to control how geometry depth relates to texture resolution
  - If set to "true", the geometry will have a depth of one pixel (in entity space, not texture space)
    - This causes textures with a resolution different from 16x16 to appear stretched
  - If set to "false", the geometry will be built from perfectly cubic voxels, regardless of the texture's aspect ratio
  - Defaults to "true" to ensure backward compatibility

# Experimental Technical Updates

## API

### `@minecraft/server-gametest`

- `GameTest` objects will now throw a `GameTestCompletedError` if accessed after completion for support functions or during clean up for test based functions

### `@minecraft/server`

- Added methods to Dimension scripting API that allows creators to get the total light level and the sky light level at a specific position

### `@minecraft/diagnostics`

- Added method `captureException` to `Sentry` which allows capturing of exceptions that are gracefully caught with a `try/catch` block
- Renamed enum `SentryBreadcrumbLevel` to `SentryEventLevel`
- Updated methods on `Sentry` to be callable in all contexts, including read-only (before events)

## Biomes

- Removing support for loading custom biomes for base game versions 1.21.100 and below
- Adding `max_puddle_depth_below_sea_level` to the `surface_builder` biome component for the `swamp` builder type. The component will set the search depth for how far below sea level to search for a surface to add a puddle
- Removing the 1.20.60 format version for server side biome JSON files. All server side biome JSON files should be version 1.21.110 or higher
- Updating the server side biome file format version to be 1.21.110

## Graphics

- Fixed Candles not casting point light shadows
