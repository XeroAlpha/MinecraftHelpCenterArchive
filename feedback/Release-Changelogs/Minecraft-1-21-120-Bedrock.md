---
title: Minecraft - 1.21.120 (Bedrock)
date: 2025-10-23T15:05:17Z
updated: 2025-10-28T16:44:51Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/40566672351885-Minecraft-1-21-120-Bedrock
hash:
  h_01K85YVZ07SJ9V2WH8R64FDRHM: posted28-october-2025
---

#### **Posted:** 28 October 2025

**Please note:** This update will roll out to various platforms as they become available throughout the day. It may take up to 24 hours to appear for everyone - thank you for your patience!

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/40566686469645" alt="r21u12_1920x1080.jpg" />
</figure>

While you've been having mayhem with mounts, we've been squashing bugs and implementing important fixes! Alongside adding animated lantern textures, the copper golem statues will now glow when placed in a glow item frame, and interacting with the copper golem will make it drop whatever its carrying. We've also done some work on older worlds for PlayStation 5 – which will now load in with the correct terrain and structures, as well as some work to make world generation more flexible for creators. Want to know what else we've been up to? Let's dive into this week's changelog!

# Features and Bug Fixes

## Blocks

- Tadpoles now spawn in the water block below the Frogspawn block ([MCPE-225997](https://bugs.mojang.com/browse/MCPE-225997))

- Fixed an issue with being unable to continue destroying valid blocks in Adventure Mode when they are behind water

- Weathered Copper Bars no longer have pixels that look out of place

- Tilling Coarse Dirt no longer sometimes tills the block twice converting it directly to Farmland

- Copper Lantern and Copper Torch have new textures to make them easier to distinguish from regular Lantern and Torch

- Copper Golem Statue item is no longer offset when dropped ([MCPE-225213](https://bugs.mojang.com/browse/MCPE-225213))

- Copper Lantern textures are now animated ([MCPE-226142](https://bugs.mojang.com/browse/MCPE-226142))

- Soul Fire Lantern textures are now animated ([MCPE-89643](https://bugs.mojang.com/browse/MCPE-89643))

- Interacting with a Shelf while empty-handed in Creative mode no longer produces a sound effect ([MCPE-227586](https://bugs.mojang.com/browse/MCPE-227586))

- The Copper Golem Statue now takes the custom name of the Copper Golem it came from ([MCPE-227714](https://bugs.mojang.com/browse/MCPE-227714))

- Fixed Copper Trapdoor recipe giving an extra Trapdoor ([MCPE-227893](https://bugs.mojang.com/browse/MCPE-227893))

- Double Copper Chest textures' diagonal glint direction now match its single chest counterpart

- Bolts on single and double Copper Chests are now shaded in the same way

- Double and single Copper Chest now has consistent shading

- Weathered Double Copper Chest bottom textures are now consistent with other Double Copper Chests

### Shelf

- Adding or removing Redstone power to or from the Shelf now emits vibrations

- Anvil and Wall Blocks have been repositioned on the Shelf and Item Frame ([MCPE-225309](https://bugs.mojang.com/browse/MCPE-225309))

- When a Player places/removes/swaps an item on an Unpowered Shelf, a vibration of frequency 3 is emitted

- When a Player places/removes an item on a Powered Shelf, a vibration of frequency 3 is emitted

- When a Player swaps item with one on a Powered Shelf, a vibration of frequency 6 is emitted

## Commands

- Fixed an issue where the Damage command would incorrectly report failure when applying damage to an Ender Crystal ([MCPE-191379](https://bugs.mojang.com/browse/MCPE-191379))

- Fixed /locate biome command to no longer direct the player into wrong biome areas ([MCPE-159992](https://bugs.mojang.com/browse/MCPE-159992))

## Gameplay

- Fixed loading of text for Sign blocks from very old worlds

- Mitigated an issue that the player can get pushed to the void after teleporting from end portal. ([REALMS-12993](https://bugs.mojang.com/browse/REALMS-12993))

- Fixed the Shield taking damage when mining with it ([MCPE-190339](https://bugs.mojang.com/browse/MCPE-190339))

- Fixed knockback from projectiles applying even when blocking with the Shield ([MCPE-220733](https://bugs.mojang.com/browse/MCPE-220733))

- Fixed a bug where the contents of a Bundle would get deleted if placed in a container above a Hopper with all slots filled ([MCPE-226250](https://bugs.mojang.com/browse/MCPE-226250))

## General

- Starting a world with a missing Marketplace template will now correctly redownload the template and start the world

- The first person camera will now offset backwards slightly when facing and climbing blocks such as Ladders and Vines

- Marketplace content can now be searched for using Graphics filters for RTX and Vibrant Visuals

## Graphical

- Restored Java parity on how ambient occlusion is computed for partial blocks ([MCPE-226160](https://bugs.mojang.com/browse/MCPE-226160))

- Added TAA upscaling to weather effects like snow

- Fixed enchantment glint animation still playing when the game was paused ([MCPE-190569](https://bugs.mojang.com/browse/MCPE-190569))

- Fixed snowflakes flickering during player movement

- Improved quality of gamma correction on PC and Consoles and fixed the brightness of Creeper textures in the gamma calibration screen in Vibrant Visuals

- Mobs will now become slightly transparent when the camera gets too close or passes through them

- Glass blocks and panes will now become slightly transparent if the camera is very close to them

- Reduced distortion on water surface reflections during the Nausea effect in Vibrant Visuals ([MCPE-220700](https://bugs.mojang.com/browse/MCPE-220700))

- Fixed an issue that caused water surfaces to appear noisy and jittery when water waves were enabled in Vibrant Visuals ([MCPE-221279](https://bugs.mojang.com/browse/MCPE-221279))

- The parameter "sampleWidth" was removed from the water configuration JSON file, and consequently the file has a new format and was upgraded to version 1.21.120

- Fixed an issue where the Copper Golem's eyes did not glow when viewed through water in Vibrant Visuals ([MCPE-226550](https://bugs.mojang.com/browse/MCPE-226550))

- Adjusted rendering settings in Vibrant Visuals

  - Slightly reduced contrast across all biomes
  - Reduced the intensity of temperature-based color grading in certain biomes, such as Desert and Mesa biomes
  - Adjusted the sky color in the End dimension
  - Added unique biome settings for the Roofed Forest biomes

- Fixed a bug that caused lighting to be too bright when the player was underwater in caves in Vibrant Visuals ([MCPE-208089](https://bugs.mojang.com/browse/MCPE-208089))

- Fixed a bug with the "biome blending" system in Vibrant Visuals that caused non-surface biomes to be ignored. Biomes will now blend vertically as well as horizontally, meaning that custom rendering configurations for biomes such as Deep Dark and Lush Caves will now function properly

  - Note that this issue is only fixed for Atmospherics, Color Grading, Lighting, and Tone Mapping, while Water configurations still suffer from the issue

- Fixed the sky appearing black on certain Android devices ([MCPE-222915](https://bugs.mojang.com/browse/MCPE-222915))

- Fixed some missing pixels on the body texture of the Drowned mob ([MCPE-169440](https://bugs.mojang.com/browse/MCPE-169440))

- Fixed the top of the Donkey's ear being the wrong color ([MCPE-166776](https://bugs.mojang.com/browse/MCPE-166776))

- Fixed missing pixels on Copper, Iron, Gold, and Diamond Horse Armor textures

- Inventory empty Chest Armor slot and Brewing Stand empty Bottle background now match the items texture ([MCPE-43234](https://bugs.mojang.com/browse/MCPE-43234))

- Fixed an issue with color grading in Vibrant Visuals that caused the white balance mode to become inverted ([MCPE-228283](https://bugs.mojang.com/browse/MCPE-228283))

- Updated the mers for the Gray, Light Blue, Light Gray, and Green Dye items ([MCPE-226433](https://bugs.mojang.com/browse/MCPE-226433))

- The textures of Chests and Saddles on Llamas, Donkeys, Mules, and Skeleton/Zombie Horses now match between Java and Bedrock ([MCPE-154327](https://bugs.mojang.com/browse/MCPE-154327)) ([MCPE-165390](https://bugs.mojang.com/browse/MCPE-165390))

- When the Vibrant Visuals renderer is enabled, particles now receive correct ambient lighting regardless of whether or not they have the "minecraft:particle_appearance_lighting" component. Particles can be made to glow in Vibrant Visuals by supplying emissive values via MERS uniforms or textures ([MCPE-220830](https://bugs.mojang.com/browse/MCPE-220830))

## Items

- Suspicious Stew is now present in Creative Mode with effect description ([MCPE-51173](https://bugs.mojang.com/browse/MCPE-51173))

- Copper Golem Statue now glows when placed in a Glow Item Frame

- Shields, Decorated Pots, and Maps now glow when placed in a Glow Item Frame ([MCPE-147418](https://bugs.mojang.com/browse/MCPE-147418))

## Mobs

- Chicken Jockeys now drop the Lava Chicken music disc when killed by the player or tamed Wolves

- Copper Golem now drops its carried item when player interacts while holding an item in offhand, or when player has armor equipped ([MCPE-225249](https://bugs.mojang.com/browse/MCPE-225249))

- Copper Golem Statue no longer has cutoff pixels when in the sitting pose ([MCPE-225999](https://bugs.mojang.com/browse/MCPE-225999))

- The Lead now attaches to the body of the Copper Golem instead of the top of its Lightning Rod ([MCPE-227208](https://bugs.mojang.com/browse/MCPE-227208))

- The hitbox of the Copper Golem Statue block is now in parity with Java ([MCPE-225669](https://bugs.mojang.com/browse/MCPE-225669))

- Copper Golems with a flower on their head now drops a Poppy when becoming a statue

- The size of Tadpoles' shadows are now in parity with Java ([MCPE-154318](https://bugs.mojang.com/browse/MCPE-154318))

- Copper Golem Statue no longer renders incorrectly in the UI ([MCPE-225212](https://bugs.mojang.com/browse/MCPE-225212))

- Wither Skeletons can now pick up Copper Swords

- When interacting with a Copper Golem, Scraping and Waxing particles now appear at the Copper Golem's location instead of at the Block location

- The Copper Golem now takes the custom name of the Copper Golem Statue it came from ([MCPE-227714](https://bugs.mojang.com/browse/MCPE-227714))

- Drowned no longer drop Tridents to pick up Nautilus Shells ([MCPE-155739](https://bugs.mojang.com/browse/MCPE-155739))

- Drowned can now spawn with enchanted Tridents

- Parrot imitating hostile mob sounds are now affected by the "Friendly Creatures" volume slider in settings

- Absorption Effect is now cleared immediately when all Golden Hearts are lost from damage ([MCPE-55449](https://bugs.mojang.com/browse/MCPE-55449))

- Drowned right arm and overlay layer no longer intersects with chest ([MCPE-82082](https://bugs.mojang.com/browse/MCPE-82082))

## PlayStation 4

- Shifted download storage to new location. Players may need to redownload Marketplace content

## Sounds

- Copper Chest Opening and Close sounds now use a natural attenuation curve ([MCPE-224011](https://bugs.mojang.com/browse/MCPE-224011))

- Copper Golem Step and Spin sounds now use a natural attenuation curve

- Unique ambient sound effects are now played when the player is underwater ([MCPE-79532](https://bugs.mojang.com/browse/MCPE-79532))

## Stability and Performance

- Improved stability around Hopper Block destruction

- Fixed issue that could cause excess critical hit particles to spawn

- Fixed a bug that caused some world data saved by previous PlayStation 5 releases to be loaded incorrectly, resulting in missing or altered terrain and structures ([MCPE-228500](https://bugs.mojang.com/browse/MCPE-228500))

## User Interface

- Clicking on text fields now places the cursor in the correct spot even for scrolled message boxes ([MCPE-186409](https://bugs.mojang.com/browse/MCPE-186409))

- Keyboard button on the chat screen is now only visible for touch controls ([MCPE-105710](https://bugs.mojang.com/browse/MCPE-105710))

- Fixed a bug that could cause Armor Trims to appear applied to untrimmed armor in the inventory

- Updated the text that is shown when more players are required to sleep to skip to dawn ([MCPE-183832](https://bugs.mojang.com/browse/MCPE-183832))

- Brightness adjustment was renamed to gamma adjustment in Vibrant Visuals

- A "Reset to Defaults" button was added to the gamma adjustment screen in Vibrant Visuals

- The slider widget that controls the Vibrant Visuals gamma value shows the current gamma value, and the center of the slider corresponds to the default value

- Fixed issue where worlds backed by Xbox cloud storage would show a default tile when local data was present but invalid

- Fixed a bug where players could not move items from the Creative inventory to inventory in Pocket UI ([MCPE-226829](https://bugs.mojang.com/browse/MCPE-226829))

- The Game Menu has been updated with a new layout and design

  - Any feedback on this change can be added [here](https://aka.ms/mcgamemenufeedback)

- Copper Chests are no longer sometimes named "Chest" in the chest UI ([MCPE-226332](https://bugs.mojang.com/browse/MCPE-226332))

- Fixed a bug preventing the deletion of Miscellaneous content from the storage management screen ([MCPE-226999](https://bugs.mojang.com/browse/MCPE-226999))

- Fixed a bug where the death screen could be shown for a short while after using a Bed ([MCPE-226081](https://bugs.mojang.com/browse/MCPE-226081))

- Touch Controls: Sneak button now has its proper outline when activating Swap Jump and Sneak. ([MCPE-185069](https://bugs.mojang.com/browse/MCPE-185069))

- Accessibility and Language Settings are now updated with a new layout and design

  - We'd love to hear your thoughts on this [here](https://aka.ms/mcbedrocksettingsfeedback)

- Text to Speech with Device Settings and Improved Input Response toggles are now available from settings screen on Windows ([MCPE-227865](https://bugs.mojang.com/browse/MCPE-227865))

- Items can now be transported to hotbar slots using their corresponding hotkeys ([MCPE-105889](https://bugs.mojang.com/browse/MCPE-105889))

  - Hotbar hotkeys now also work when hovering over output slots ([MCPE-228275](https://bugs.mojang.com/browse/MCPE-228275))

- Fixed a bug where a sound played on certain screens after an invalid navigation with gamepad or keyboard even when Text To Speech was disabled

- The paper doll on the inventory screen should now look at the cursor ([MCPE-227626](https://bugs.mojang.com/browse/MCPE-227626))

- Added a toggle to the Accessibility menu to enable/disable the dithering effect on mobs

- Fixed an issue that prevented playersfrom creating a new world from templates inside the Play Screen ([MCPE-227855](https://bugs.mojang.com/browse/MCPE-227855))

- General Settings have been updated with a new layout and design

  - We'd love to hear your thoughts on these changes at the [feedback site](https://aka.ms/mcbedrocksettingsfeedback)

- Items can now be transported onto hovered empty slots from hotbar slots using their corresponding hotkeys ([MCPE-228289](https://bugs.mojang.com/browse/MCPE-228289))

- Fixed an issue where keyboard input would not register if the game window is unfocused while loading a world ([MCPE-227839](https://bugs.mojang.com/browse/MCPE-227839)) ([MCPE-228288](https://bugs.mojang.com/browse/MCPE-228288))

## World Generation

- Structures no longer build on top of features (e.g. trees) at chunk borders

# Technical Updates

## AI Goals

- Made the schemas for the `minecraft:behavior.dig`, `minecraft:behavior.drink_milk`, `minecraft:behavior.avoid_block`, and `minecraft:behavior.avoid_mob_type` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.21.120 and newer

- Fixed a crash occurring on mobs running the "minecraft:behavior.delayed_attack" AI goal

## API

- Optionally set version property to "beta" to always choose the latest beta version of the module

  - Example from manifest.json:

  ``` auto
  "dependencies": [
  {
    "module_name": "@minecraft/server",
    "version": "beta"
  }
  ```

- Fixed `Player.graphicsMode` not returning the correct graphics mode when a player has switched to Vibrant Visuals

- LootTableManager's loot generation methods now properly recognize tools enchanted with looting

- Moved type `ScriptBiomeType` from `beta` into `2.3.0`

- Moved API `Dimension.getBiome(location: Vector3)` from `beta` into `2.3.0`

- Released `initialRotation` member of `SpawnEntityOptions` to `2.3.0`

- Released `initialPersistence` member of `SpawnEntityOptions` to `2.3.0`

- Fixed an issue with Players phasing through blocks when using `applyImpulse(vector: Vector3): void` ([MCPE-226702](https://bugs.mojang.com/browse/MCPE-226702))

- Releasing the light detection API from experimental to stable

- Removed entity override limit on Player method `setPropertyOverrideForEntity`

- Fixing some scenarios where the additional context information for error messages was inaccurate after previously catching an exception

- Released `setDynamicProperties` method on `Entity`, `ContainerSlot`, `ItemStack` and `World` to `2.3.0`

- Dimension

  - Moved `isChunkLoaded(location: Vector3): boolean` from `beta` to `V2.3.0`

- ContainerRulesError

  - Moved property `reason: ContainerRulesErrorReason` from `beta` to `v2.3.0`

- Moved enum `ContainerRulesErrorReason` from `beta` to `v2.3.0`

- Moved interface `ContainerRules` from `beta` to `v2.3.0`

- Container

  - Moved property `readonly containerRules?: ContainerRules` from `beta` to `v2.3.0`

  - Moved property `readonly weight: number` from `beta` to `v2.3.0`

- Moved class `ItemInventoryComponent` from `beta` to `v2.3.0`

## Biomes

- Fixed an issue where the replacement biomes were not read for client-side chunk generation

## Blocks

- Custom blocks using a non-opaque `render_method` in the `minecraft:material_instances` component that are placed above water will no longer incorrectly cull the top face of the water block

- Removed Upcoming Creator Features toggle requirement from the `minecraft:redstone_producer` component

- Fixed `minecraft:grass_block` rendering in dark forests ([MCPE-228169](https://bugs.mojang.com/browse/MCPE-228169))

- Fixed ambient occlusion for custom blocks displayed in HUD

- Component `minecraft:embedded_visual` no longer requires the "Upcoming Creator Features" toggle

- Component `minecraft:flower_pottable` no longer requires the "Upcoming Creator Features" toggle

- Fixed a crash that occurs when selecting Vibrant Visuals panel settings

- Added boolean field "alpha_masked_tint" to materials in "minecraft:material_instances" component

  - Defaults to false
  - When true, the alpha channel of the texture will be used to multiply the tint to the albedo of the texture
  - Requires "format_version" \>= 1.21.120
  - Requires "Upcoming Creator Features" toggle
  - Requires "tint_method" other than "none"
  - Requires "render_method" to be "opaque"

## Block Components

- Added **"emissive"** field to `minecraft:material_instances` block component with these requirements

  - World must enable **Upcoming Creator Features** experiment for emissive face materials to work
  - Block `format_version` must be greater than or equal to `1.21.120`

- Added `underwater_addition`, `underwater_loop`, and `underwater_mood` fields to `minecraft:ambient_sounds`. They will be played when the audio listener position is inside of water

  - `underwater_addition` and `addition` now take both an `asset` and `chance`, the `chance` determines the chance for the sound to be played
  - Format versions before `1.21.120` will automatically set the underwater versions to the same as the normal ones, and the chance to the previously hardcoded chance of 0.0111

## Block Textures

- Weighted 'variations' block textures no longer require **Upcoming Creator Features** experiment to work on custom blocks

## Commands

- Fixed an issue where we weren't able to use certain non-alphanumeric characters in the `name` field of a score raw text object. ([MCPE-108989](https://bugs.mojang.com/browse/MCPE-108989))

## Components

- The `"all_slots_empty"`, `"any_slot_empty"`, `"has_equipment"` filters now support `"main_hand"` as an equipment location

## Editor

- Added confirmation dialog in Keyboard Settings when resetting, restoring or closing the modal without saved changes

- Fixed a bug that caused lightning bolts to not despawn when entities are paused

- Fixed a bug that caused text to speech narration to read shortcuts incorrectly

- Removed unusable entities from Summon tool list

- Fixed a bug that enables to select volumes using Enter key and Shift+Enter key while in Selection's Freehand Brush Mode

- Added gradient background color on the Color timeline that interpolates between the colors of two adjacent nodes

- Added optional boolean property in Timeline API (renderGradientBackground) that allows the rendering of the background color to be turned off. By default it is ON

- Added a `showAlpha` flag to color timeline so we can hide picker alpha elements conditionally

- Added `IVector2PropertyItem` API for property pane

- Added `IMenuPropertyItem` which represents a hamburger menu button that can support nested submenus

- Fixed a bug that caused scrollbar to pop in/out in the AGFX Graph Color component

- Added a preview thumbnail of a structure is added to the structure list item

- Added undo/redo support for Ruler Tool

- Fixed an issue with client hanging when copy/pasting large structures

- Added an `offset` and `alignment` property to the summon tool so that creators can more easily position entities at specific locations

- Added support for Double Left Click, so the Color Picker and Editable popup open with DLC on the Graph

- Added custom icon support for the checkbox variant of `IBoolPropertyItem` with `checkboxIcon` optional property

- Added a new Scale Tool to resize selection

  - Enabled scaling along X, Y, Z axes individually or uniformly
  - Added Fractional scaling with fractional scale factors; maintained structure shapes during enlargement/shrink
  - Added preview visualization showing the scaled size before applying changes
  - Integrated the tool with undo and redo behaviors
  - Disabled scaling if current volume or resulting volume, whichever is larger, exceeds MAX_ALLOWED_BLOCKS (currently 200,000)

- Added 'orientation' settings which allows the use to decide what orientation the block should be placed

- Added keyboard shortcuts and accompanying tooltips to all pencil 'modes' (mode, draw mode, orientation mode)

- Added error message (log & toast) for when an object cannot be placed to due gameplay rules

- Updated Pencil functionality to have more polish

  - Updated the pencil tool, now when you erase, if you're in face selection mode it will switch to block selection (so you can actually erase things) and then will switch back when you go back to draw mode

- Updated settings/usage to now persists between sessions

- Fixed a bug that caused creating multiple hotbars to error when the hotbar management panel is open

- Fixed a bug that caused dismissing interactive tooltips to not work

- Block picker images' layout is consistent across different window sizes and after exiting a test world

- Fixed Confirm button in hotbar dialog to immediately turn green when typing begins, providing proper visual feedback

- Fixed undo behavior when using 'object' mode

- Added jigsaw support to make the creation of jigsaws less technical and more intuitive

- Added curves into the line tool to make more organic shapes. Curves also work with node weights

- Fixed outdated terminology in Vibrant Visuals Settings panel. Changed 'Deferred Lighting' to 'Vibrant Visuals' in the error messages

- Fixed the issue where the background of hover text clips prematurely

- Fixed a bug where command blocks couldn't use the /structure command in editor projects

- Fixed an issue that was preventing manually entering node value in the textbox (in Edit mode - turned on with double left click) for two dimensional graph

- Fixed a bug where only one player in a multiplayer Editor session can use the Terrain Tool at a time

- Fixed a bug where the Terrain Tool was ignoring Mask and Replace filters

- Fixed a bug that caused unusable buttons to show up in editor pause menu

- The Line tool now has the ability to make curves

- Add axis locking & nudging support to Ruler Tool

## Entity Components

- Added `apply_knockback_to_blocking_targets` property to `impact_damage` in `minecraft:projectile`

## GDK Update on Windows

- Minecraft now runs on the latest GDK (Game Development Kit)
  - This update aligns the game with the standard distribution model on Windows platforms
- File paths have been updated and upon first install load of this version of Minecraft, your existing Minecraft worlds and content will shift to: `%APPDATA%\Minecraft Bedrock`
- If you encounter issues, please report them at [bugs.mojang.com](http://bugs.mojang.com/).

## Graphical

- Fixed an issue for some cases where custom stencil states on entities would cause visual glitches ([MCPE-219845](https://bugs.mojang.com/browse/MCPE-219845))

## Item Components

- Items with the new `minecraft:fire_resistant` item component no longer visually disappear on the client when thrown in fire while persisting on the server, as the property is now synced correctly across both

- Added the new `minecraft:swing_duration` item component, which defines the duration, in seconds, of the item's swing animation when mining or attacking

  - The duration is specified in the component's "value" field
  - Affects visuals only and does not impact attack frequency or gameplay mechanics

- The `minecraft:fire_resistant` item component no longer accepts a direct value assignment and now requires the value to be specified through the "value" field

- Added the `emit_vibrations` field to the `minecraft:use_modifiers` item component, which controls whether an item emits vibrations when it starts or stops being used

## Items

- Starting with format version 1.21.110, when a custom item's menu_category's category is set to "none" (or not specified) the item will be usable in commands ([MCPE-177866](https://bugs.mojang.com/browse/MCPE-177866))

- Fixed issue with rendering custom blocks as "flying items" ([MCPE-180489](https://bugs.mojang.com/browse/MCPE-180489))

## Mobs

- The Dolphin's bubble particle emissions have been updated and are now emitted through its animation controller

## Molang

- Fixed `query.graphics_mode_is_any` not being correct when switching to Vibrant Visuals

- Added 21 new Molang expressions:

  - "math.inverse_lerp(start, end, value)", returns the normalized progress between start and end given value
  - "math.ease_in_quad(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating toward the end
  - "math.ease_out_quad(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating toward the end
  - "math.ease_in_out_quad(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating in the middle, then slowing again at the end
  - "math.ease_in_cubic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating strongly toward the end
  - "math.ease_out_cubic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating strongly toward the end
  - "math.ease_in_out_cubic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating strongly in the middle, then slowing again at the end
  - "math.ease_in_quart(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating rapidly toward the end
  - "math.ease_out_quart(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating rapidly toward the end
  - "math.ease_in_out_quart(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating rapidly in the middle, then slowing again at the end
  - "math.ease_in_quint(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating sharply toward the end
  - "math.ease_out_quint(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating sharply toward the end
  - "math.ease_in_out_quint(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow, accelerating sharply in the middle, then slowing again at the end
  - "math.ease_in_sine(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating smoothly toward the end
  - "math.ease_out_sine(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating smoothly toward the end
  - "math.ease_in_out_sine(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending slow, with smoother change in the middle
  - "math.ease_in_expo(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating very rapidly toward the end
  - "math.ease_out_expo(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating gradually toward the end
  - "math.ease_in_out_expo(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending slow, with very rapid change in the middle
  - "math.ease_in_circ(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting slow and accelerating along a circular curve toward the end
  - "math.ease_out_circ(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting fast and decelerating along a circular curve toward the end
  - "math.ease_in_out_circ(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending slow, with circular acceleration and deceleration in the middle
  - "math.ease_in_bounce(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting with bounce oscillations and settling into the end
  - "math.ease_out_bounce(start, end, 0_to_1)", output goes from start to end via 0_to_1, approaching the end with bounce oscillations that diminish over time
  - "math.ease_in_out_bounce(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting and ending with bounce oscillations, smoother in the middle
  - "math.ease_in_back(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting backward before accelerating into the end
  - "math.ease_out_back(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting past the end before settling into it
  - "math.ease_in_out_back(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting at both start and end, with smoother change in the middle
  - "math.ease_in_elastic(start, end, 0_to_1)", output goes from start to end via 0_to_1, starting with elastic oscillations before accelerating into the end
  - "math.ease_out_elastic(start, end, 0_to_1)", output goes from start to end via 0_to_1, overshooting the end with elastic oscillations before settling
  - "math.ease_in_out_elastic(start, end, 0_to_1)", output goes from start to end via 0_to_1, oscillating elastically at both start and end, with stable change in the middle

- Added `query.base_swing_duration`, which returns the duration of the mob's swing/attack animation, determined by the carried item and unmodified by effects applied on the mob

- Added `query.modified_swing_duration`, which returns the duration of the mob's swing/attack animation, determined by the carried item and modified by effects applied on the mob

## Network

- The following level events now emit particles at the exact specified position instead of at the center of the matching block position:

  - `WaxOn`, `WaxOff`, `Scrape`

## Structures

- Released Data Driven Jigsaw Structures. They can now be used beyond the experimental context

## Structure Blocks

- Fixed Structure Block preview GUI misplacing opaque custom blocks

# Experimental Technical Updates

## API

- Added `Dimension.getGeneratedStructures(location: Vector3)` which can be used to locate the Structures (Pillager Outpost, Mineshaft, etc.) of a given location

- Added `worldAfterEvents.playerUseNameTag` which fires when a Player uses a named NameTag Item on an Entity

- Added `ControlScheme` string enum

- Added method `Player.setControlScheme(controlScheme?: string): void;` to `beta`

- Added method `Player.getControlScheme(): ControlScheme;` to `beta`

- Added the `BlockRedstoneProducerComponent` to beta

  - Added `power` read-only property
  - Added `getStronglyPoweredFace` method
  - Added `getConnectedFaces` method

- Dimension

  - Remove `CompoundBlockVolume` parameter from `fillBlocks` in `beta`

- Loot table discovery API now includes information about Loot Item Conditions

- Added `ControlScheme` string enum

  - Added method `setControlScheme(controlScheme?: string): void;` to `beta`.

  - Added method `getControlScheme(): ControlScheme;` to `beta`

- Added Scripting API for BlockPrecipitationInteractions component

  - This API includes a component class for the BlockPrecipitationInteractions component and the two methods (accumulatesSnow and obstructsRain) of said component

- Loot table discovery API now includes information about Loot Item Conditions

  - Modified method from `setControlScheme(controlScheme?: string): void;` to `setControlScheme(controlScheme?: ControlScheme): void;` in `beta`

- Added the `BlockComponentBlockBreakEvent` Custom Component Event to beta. This event is called when a specific block is broken by either the player or other entity, a block (such as fire or water), or from a script or command that removes or destroys the block.

  - Added `entitySource` read-only property. This contains the entity that caused the block's destruction
  - Added `blockDestructionSource` read-only property. This contains the block that caused the block's destruction
  - Added `brokenBlockPermutation` read-only property. This contains the block permutation this custom component exists on

- Added the ability for the custom creator camera to move on a spline

  - Added method `playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void` to `beta` to play an animation curve. Only works when used on the `minecraft:free` camera preset

  - Added class `CatmullRomSpline` to `beta` to create catmullrom splines for `minecraft:free` camera preset

  - Added class `LinearSpline` to `beta` to create linearly interpolated splines for `minecraft:free` camera preset

  - Added interface `AnimationOptions` to `beta` for creating and playing a spline on the `minecraft:free` camera preset

  - Added interface `ProgressKeyFrame` to `beta` for setting progress key frames on a spline

  - Added interface `RotationKeyFrame` to `beta` for setting rotation key frames on a spline

  - Added interface `SplineAnimation` to `beta` for storing spline key frames

## Commands

- Added `attach_to_entity` and `detach_from_entity` camera commands for `minecraft:fixed_boom` and `minecraft:follow_orbit` presets
  - Accessible under the Experimental Creator Cameras experimental toggle

## Biomes

### Molang

- Added `query.entity_biome_has_any_identifier`, `query.entity_biome_has_any_tags`, and `query.entity_biome_has_all_tags` molang query functions to Upcoming Creator Features

  - These queries only work in resource packs (client-side), and are not supported in behavior packs
  - `entity_biome_has_any_identifier('namespace:biome_name')` takes a list of biome identifiers and checks if any are the specified biome the entity is in
  - `entity_biome_has_any_tags('my_tag_name')` takes a list of biome tags and checks if the biome the entity is in matches any
  - `entity_biome_has_all_tags('my_tag_name')` takes a list of biome tags and checks if the biome the entity is in matches all

## Blocks

- Allow items referencing a pottable block in their `minecraft:block_placer` component to be pottable when `replace_block_item` is true

- Added `minecraft:precipitation_interactions` component

  - This component allows creators to determine whether a block should obstruct precipitations or not. And if it does, whether falling snow should accumulate on the block or not

- Added `getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined` method to `beta`

- Added `getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];` methods to `beta`

- Added `GetBlocksStandingOnOptions` interface

- Added `AABB` interface which defines an axis-aligned bounding box to `beta`

  - Added parameter `center:Vector3` which defines the centerpoint of the box
  - Added parameter `extent:Vector3` which defines the distance from the centerpoint to the edges of the box
  - Added method `Entity.getAABB(): AABB` to `beta`

- Added `unbreakable` property to `ItemDurabilityComponent` in `beta`

- Fixed an issue when inserting items into storage items through the UI. Previously the items inserted could result in gaps in the container stack when it was previously modified through the ItemInventoryComponent API. The storage container now sorts items to remove gaps prior to an item being inserted via the UI

- (Beta) Player method `clearPropertyOverridesForEntity` can now take an Entity or Entity ID as valid arguments

## Graphical

- Deprecated `point_lights/global.json` in favor of a new file and schema, `local_lighting/local_lighting.json`. Creators can still make use of `point_lights/global.json`, but are encouraged to migrate to the new schema

  - Extended per-block local lighting information to include a `light_type` which can be either `static_light` or `point_light`
    - A block will only be considered for point lighting if its `light_type` is set to `point_light`
    - `static_light` is currently unused
  - The `light_color` property is now optional. If unprovided, the block will use a fallback light color instead
  - A sample `local_lighting.json` could look like this: "format_version": "1.21.120", "minecraft:local_light_settings": { "minecraft:torch": { "light_color": "#EFE39D", "light_type": "point_light" }
  - Learn more at <https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization>

- Updated point light tracking to be able to link to custom blocks. Learn how to apply point lights to custom blocks at <https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization>

- The RenderDragon Features for Creators experiment now includes a resource pack that will be automatically loaded when entering a world with the experiment enabled ([MCPE-227624](https://bugs.mojang.com/browse/MCPE-227624))
