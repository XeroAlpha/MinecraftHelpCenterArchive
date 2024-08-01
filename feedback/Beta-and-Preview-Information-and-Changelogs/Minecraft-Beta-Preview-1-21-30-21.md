---
title: Minecraft Beta & Preview - 1.21.30.21
date: 2024-08-01T12:11:38Z
updated: 2024-08-01T16:04:53Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/28896769176845-Minecraft-Beta-Preview-1-21-30-21
hash:
  h_01J475C518A80MW7EV6130D1R6: features-and-bug-fixes
  h_01J475C518YEZRQAFJ4PH2ATXC: blocks
  h_01J475C51807K3D6XQCZS1VECS: crafting
  h_01J475C518WVND80HTAZX6DGCF: full-keyboard-gameplay
  h_01J475C518HPH15E4F1HBDNG54: gameplay
  h_01J475C518G15898PZ5Q1EGEAP: general
  h_01J475C518X4R4M19Z69QQ5TYW: graphical
  h_01J475C518ET5PG3H1XT3T68ZQ: how-to-play
  h_01J475C518QM6N82HQQ38BJ2QR: items
  h_01J475D95T982P8B6FR89Y800V: mobs
  h_01J475D95T2N6M5KM25ESPVXVK: multiplayer
  h_01J475D95TBKNYPN3S7DYACPMF: rarity
  h_01J475D95TM666M23G03APPED3: common
  h_01J475D95TGC4HK47NQGR7NYK3: epic
  h_01J475D95T9GM1B70Z96YP5W2X: rare
  h_01J475D95TTDBREXMBWGAES613: uncommon
  h_01J475D95TTF92R6CPD7WW3HP5: realms
  h_01J475D95TJ36P7V01007C0V4E: touch-controls
  h_01J475D95TZPBJGVYYHF3J2A7P: trial-chambers
  h_01J475D95T66RETEXEF1000JGM: user-interface
  h_01J475D95TD1ZYY96RMG879G5V: vanilla-parity
  h_01J475D95T04B3J96BHYEPX23E: technical-updates
  h_01J475D95TNN5GG8VQBQN9RG87: add-ons-and-script-engine
  h_01J475D95TR653HF46G1M67FF8: api
  h_01J475D95TFEN25041SPHK06ZS: blocks-1
  h_01J475D95TN1GG3A93JP9H7D7N: commands
  h_01J475D95TGKG6DGP2STC7BZCP: editor
  h_01J475D95TRRE38AR9GYYV6CDS: entity-components
  h_01J475D95TZKCNGWBCNG7K1V66: gameplay-1
  h_01J475D95TTYS7XFX72RBG5844: general-1
  h_01J475D95T2N7EG11Z4M9X69WQ: items-1
  h_01J475D95TV5KC6FD39XWEMV39: loot-tables
  h_01J475D95TJEFATRW19Q85DDGX: structures
  h_01J475D95T3EPA350DXZ6DHG2V: experimental-technical-updates
  h_01J475D95T0GMNA6SJ7QRZNE9G: add-ons-and-script-engine-1
  h_01J475D95T8VVBH2ETK3Z4P630: api-1
  h_01J475D95V6F2TXG2WVWXF60CY: graphical-1
---

**Posted:** 1 August 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A screenshot of the tree canopy in Minecraft, where the sunlight bleeds through the leaves due to the Deferred Technical Preview feature that adds Sub Surface Scattering.](https://feedback.minecraft.net/hc/article_attachments/28896805992461)

There’s a new Minecraft Preview and Beta rolling out, bringing fixes to disappearing boats, heat-resistant snow golems, and more! For those of you wondering about bundles – our developers are still working hard on bringing bundles into Preview and Beta, so keep your eyes peeled on future changelogs for updates!

Here’s what’s new in this week’s Preview and Beta:

# Features and Bug Fixes

## Blocks

- Vertically retracting waterlogged blocks with a Piston no longer creates "ghost water" on the client ([MCPE-144222](https://bugs.mojang.com/browse/MCPE-144222))
- "purpur_block" block is now split into unique instances "purpur_block", and "purpur_pillar"; the previously unused chiseled and smooth purpur blocks were renamed to "deprecated_purpur_block_1" and "deprecated_purpur_block_2" for backwards compatibility, but are hidden from creative inventory and commands
- "structure_void" has had its block state removed and "air" variants will be converted to the base block
- Added new vanilla block and item tags to support vanilla item tier level destruction speeds for data driven blocks
- All Logs, Stripped Logs, Woods, and Stripped Woods are now treated consistently across various scenarios:
  - Flying mobs that can land on trees will now recognize these blocks as suitable landing positions
  - Parrots will now prefer these blocks as landing spots
  - Previously, these behaviors applied to only a subset of these blocks
- Kelp can no longer be placed on any type of Fence, instead of just a subset of them
- Seagrass can no longer be placed on any type of Fence, instead of just a subset of them
- Turtle Eggs can no longer be placed on any type of Fence, instead of just a subset of them
- "cobblestone_wall" block is now split into unique instances "cobblestone_wall", "mossy_cobblestone_wall", "granite_wall", "diorite_wall", "andesite_wall", "sandstone_wall", "brick_wall", "stone_brick_wall", "mossy_stone_brick_wall", "nether_brick_wall", "end_stone_brick_wall", "prismarine_wall", "red_sandstone_wall" and "red_nether_brick_wall" ()
- "granite_wall", "diorite_wall", "andesite_wall", "stone_brick_wall", "mossy_stone_brick_wall" and "prismarine_wall" now have a destruction time of 1.5
- "sandstone_wall" and "red_sandstone_wall" now have a destruction time of 0.8
- "end_stone_brick_wall" now has a destruction time of 3.0

## Crafting

- When crafting a Firework, adding or removing items from the grid will update the output item appropriately ([MCPE-183455](https://bugs.mojang.com/browse/MCPE-183455))

## Full Keyboard Gameplay

- Added Q and E as left and right click equivalents in JSON UI menus (including inventory menus) when playing in Full Keyboard Gameplay mode

## Gameplay

- The Bad Omen effect can now be reset by drinking an Ominous Bottle of any level
- Boats will no longer disappear while sliding on Ice ([MCPE-180432](https://bugs.mojang.com/browse/MCPE-180432))
- Fixed a crash that could occur when opening a Lectern while a Sticky Piston was moving it. The Lectern now closes the book screen when moved ([MCPE-183508](https://bugs.mojang.com/browse/MCPE-183508))
- Dismounting a vehicle no longer puts the player inside the ground on some platforms ([MCPE-184363](https://bugs.mojang.com/browse/MCPE-184363), [MCPE-182448](https://bugs.mojang.com/browse/MCPE-182448))

## General

- Fixed a bug that caused placeholder textures to appear after minimizing and then restoring the game window

## Graphical

- Fixed an issue where Banners were rendered before other transparent objects regardless of their positions ([MCPE-130262](https://bugs.mojang.com/browse/MCPE-130262))

## How to Play

- Added line break ability for How to Play topic labels instead of having it add "..." when the line got too long

## Items

- Each Banner Pattern item now includes their pattern type in their name instead of as a subtitle ([MCPE-182508](https://bugs.mojang.com/browse/MCPE-182508))
- Smithing Template items are now named after their template type instead of the generic "Smithing Template" name
  - They instead specify that they are a Smithing Template through a subtitle in the hover text
- Unique item textures have been given to each Banner Pattern item to better distinguish between each other
- Illager Banner has been renamed to Ominous Banner to match Java Edition

 

![The Minecraft creative inventory, showing a search for banner. The updated banner pattern pattern items can be seen.](https://feedback.minecraft.net/hc/article_attachments/28902005618957)

## Mobs

- Fixed custom entity's name not appearing correctly in death messages ([MCPE-158447](https://bugs.mojang.com/browse/MCPE-158447))

## Multiplayer

- Fixed an issue where the invite screen in-game would not show the correct substatus

## Rarity

- Various items and blocks have had their assigned rarities changed ([MCPE-182414](https://bugs.mojang.com/browse/MCPE-182414))
  - Once these rarity changes come to Java Edition in a future snapshot, all item and block rarities will be in parity across both platforms
- Rarity is a set of categories which determine the color used to display the name of an item or block
  - It has no gameplay impact, but is used to signal how difficult something is to obtain
  - By default, unless specified otherwise, all items and blocks have a rarity of Common which displays their name in the color white
- We have re-evaluated the rarity of all items and blocks in the game to more accurately reflect the current challenge of obtaining them, given the following guidelines:
  - Items and blocks become rarer depending on the following factors:
    - The chance of finding it in a loot table, including mob drops
    - The amount of travelling required to obtain it
    - The difficulty of any obstacle which must be overcome to obtain it
    - The possible amount of that item or block which exists in the world
  - Any item or block which can be crafted must inherit the highest rarity of its crafting ingredients
    - For example, a Mace has an Epic rarity because one of its ingredients (the Heavy Core) has an Epic rarity
    - Likewise, any crafted item which has only Common crafting ingredients must also be Common
  - The lists below detail the items and blocks which have changed to that rarity category

### Common

- End Crystal
- Golden Apple

### Epic

- Elytra
- Dragon Head
- Silence Armor Trim

### Rare

- Enchanted Golden Apple
  - Enchanted Golden Apples have become more common in recent years due to being accessible in both Ancient Cities and Trial Chambers, warranting a demotion to Rare instead of Epic
- Trident
  - We recently increased Trident's rarity up to Epic from Common, but after re-evaluating we felt that it was easier to obtain than other items in the Epic category such as Heavy Cores or Elytra
- Nether Star
- Ward Armor Trim
- Eye Armor Trim
- Vex Armor Trim
- Spire Armor Trim
- Wither Skeleton Skull
- Skull Charge Banner Pattern
  - Now that Wither Skeleton Skulls are Rare, these banner patterns should be Rare as well
- Thing Banner Pattern
  - Now that Enchanted Golden Apples are Rare, these banner patterns should be Rare as well
- The following Music Discs:
  - Pigstep
  - otherside
  - Creator

### Uncommon

- Sniffer Egg
- Chainmail Helmet
- Chainmail Chestplate
- Chainmail Leggings
- Chainmail Boots
- Recovery Compass
- Disc Fragment 5
- Nautilus Shell
- Echo Shard
- Goat Horns
- Pottery Sherds
- Ominous Bottles
- Ominous Banner
- Netherite Upgrade
- Sentry Armor Trim
- Dune Armor Trim
- Coast Armor Trim
- Wild Armor Trim
- Tide Armor Trim
- Snout Armor Trim
- Rib Armor Trim
- Wayfinder Armor Trim
- Shaper Armor Trim
- Raiser Armor Trim
- Host Armor Trim
- Flow Armor Trim
- Bolt Armor Trim
- The following Music Discs:
  - 13
  - Cat
  - Blocks
  - Chirp
  - Creator (Music Box)
  - Far
  - Mall
  - Mellohi
  - Stal
  - Strad
  - Ward
  - 11
  - Wait
  - Relic
  - 5
  - Precipice

## Realms

- Fixed an issue that was preventing RealismCraft and some other packs from working on Realms. This was a service-side fix that is live in both Preview and the latest full release ([REALMS-11913](https://bugs.mojang.com/browse/REALMS-11913), [REALMS-11916](https://bugs.mojang.com/browse/REALMS-11916))
- Realms Stories content is no longer cropped when scrolling
- Text no longer overlaps screenshots in Realms Stories on Galaxy Z Flip devices on any UI size
- Gamepad legend no longer overlaps with UI elements when choosing a Preview Realm to create a world on
- In split screen mode, only show the subscriptions tab for the primary player
- Realm ID is now displayed in the debug text for preview/beta builds while connected to a Realm or while on associated screens.

## Touch Controls

- Improved new d-pad for touch controls. It is now more compact, includes back strafing buttons, and a slightly extended zone outside where camera input is not received in order to prevent unexpected camera movement. When customizing controls, the diagonal buttons are visible as well
- Fixed a bug where the hide hud command would not hide the d-pad touch control ([MCPE-184157](https://bugs.mojang.com/browse/MCPE-184157))

## Trial Chambers

- Added new variations to the hallways, including "Encounters": Short challenges leading to a larger chamber.
- Beds in intersections now have their colors randomized. ([MCPE-180424](https://bugs.mojang.com/browse/MCPE-180424))  
- Replaced the empty chests at the entrance of chamber with a Hopper and Barrel to better show the players that these are meant for disposal and inventory managment!
- Fixed multiple trial chamber templates have missing or incorrect block ([MCPE-176952](https://bugs.mojang.com/browse/MCPE-176952))
- Fixed inaccessible traps can generate behind walls in Trial Chamber ([MCPE-180912](https://bugs.mojang.com/browse/MCPE-180912))
- Some slime trial spawners in trial chambers won't spawn slimes without player intervention
- Fixed Ominous Vault may fail to generate in Pedestal and chamber_1/2

 

## User Interface

- Fixed a softlock that could occur when purchasing subscriptions
- Fixed a bug where the 'Drink' interaction prompt was not displayed when the player was holding an Ominous Bottle
- Fixed a bug where player health would be rounded down instead of rounded up, causing the HUD to sometimes only show empty health icons ([MCPE-183157](https://bugs.mojang.com/browse/MCPE-183157))
- The chat output's scroll position keeps its position after the game screen re-gains focus
- Shortened the URL for signing in on another device to microsoft.com/link

## Vanilla Parity

- Entities falling into water now make the same splashing sound as in Java Edition ([MCPE-44120](https://bugs.mojang.com/browse/MCPE-44120))
- Fixed a bug where a standalone Scaffolding block could not be placed on top of a Structure Block ([MCPE-169818](https://bugs.mojang.com/browse/MCPE-169818))
- Snow Golems with Fire Resistance no longer take damage in warm biomes ([MCPE-94448](https://bugs.mojang.com/browse/MCPE-94448))
- Uncarved Pumpkin blocks can no longer be used to create Snow Golems and Iron Golems ([MCPE-33801](https://bugs.mojang.com/browse/MCPE-33801))
- When an item is enchanted, their rarity status is now increased depending on their base rarity
  - If the base rarity of an item is Common or Uncommon, it will become Rare when enchanted
  - If the base rarity of an item is Rare, it will become Epic when enchanted
  - If the base rarity of an item is Epic, it will stay Epic when enchanted

# Technical Updates

## Add-Ons and Script Engine

- Removed deprecated behavior pack download related code from packets in the world join flow

## API

- Released @minecraft/server version 1.3.0
  - Note: This can still change while in Preview
- Added @minecraft/server version 1.4.0-beta
- Fixing isEmoting method on Player ([MCPE-180083](https://bugs.mojang.com/browse/MCPE-180083))
- Released playerEmoteWorld after event from Beta to 1.14.0
- Released class BlockRecordPlayerComponent from beta to 1.14.0
- Released UIManagerclass from Beta to 1.3.0
- Released EntityQueryPropertyOptions from beta to 1.14.0 
- Moved EntityStrengthComponent from beta to 1.13.0 

## Blocks

- Fixed `minecraft:repeating_command_block` to not execute when changing to `needs redstone` from `automatic`.
- Added the 'minecraft:redstone_conductivity' component which controls the basic Redstone properties of a custom block

## Commands

- The /locate structure command output now displays the identifier of the found structure instead of its name

## Editor

- Revamped Client Widget System
  - Refactored the Client Widget system to use components for base widget functionality
  - Added Editor Client Renderer Helper Service to aid with Editor in-world widget rendering
  - Changed Gizmo movement to be completely free moving and snap to grid on release
  - Added new widget components for Entities, Text, Gizmos, Height Guide, and basic Render Primitives
- Additional updates to the PropertyPane API
  - Removed IPropertyPane addBlockPicker and addEntityPicker methods in favor of addComboBox API that leverages type safe IObservableProp\<string\> value
    - Added interfaces IComboBoxPropertyItem and IComboBoxPropertyItemOptions
    - Combo box supports different data types for additional validation with ComboBoxPropertyItemDataType. Entity and Block types work similarly to the old component, Custom type allows user defined list and it's the default
  - Added an alternative Property Pane addNumberAPI that leverages type safe IObservableProp\<number\> value API
    - Added interfaces INumberPropertyItemand INumberPropertyItemOptions for the new property item
    - Renamed function to create property bag number item to addNumber_deprecated
  - Updated theme colors for input fields, and center aligned number input field values
  - Added an alternative Property Pane addDropdownAPI that leverages type safe IObservableProp\<number\> value
    - Added interfaces IDropdownPropertyItem, IDropdownPropertyItemOptions and IDropdownPropertyItemEntry for the new property item. Each dropdown entry now supports imageData?: ImageResourceData property to render an image
    - Renamed function to create property bag number item to addDropdown_deprecated
  - Fixed theming and content alignment issues for the dropdown UI elements
  - Added an alternative Property Pane addColorPicker API that leverages type safe IObservableProp\<RGBA\> value API
    - Added interfaces IColorPickerPropertyItemand IColorPickerPropertyItemOptions for the new property item
    - Renamed function to create property bag color picker item to addColorPicker_deprecated
  - Added an alternative Property Pane addString API that leverages type safe IObservableProp\<string\> value API
    - Added interfaces IStringPropertyItemand IStringPropertyItemOptions for the new property item
    - Renamed function to create property bag string item to addString_deprecated
  - Fixed missing Summon Tool icon
  - Added the following functions to "ExtensionContext.settings.theme": addNewTheme(name: string): void, deleteTheme(name: string): void, getCurrentTheme(): string, and updateThemeColor(name: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void. These functions will throw if "minecraft:default" or any other built-in theme is passed to them. updateThemeColor and deleteTheme will also throw if the theme does not exist
  - Added block image support to block picker modal
  - Fixed a bug where typing certain characters in the block or entity picker caused an error
  - Added validation to prevent adding already existing block in a probability palette item
  - Added the following functions to "ExtensionContext.settings.theme": addNewTheme(name: string): void, deleteTheme(name: string): void, getCurrentTheme(): string, and updateThemeColor(name: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void. These functions will throw if "minecraft:default" or any other built-in theme is passed to them. updateThemeColor and deleteTheme will also throw if the theme does not exist.

## Entity Components

- "behavior.fire_at_target" is no longer restricted to Vanilla content
  - This goal allows an entity to attack by firing a shot with a delay
- "behavior.jump_around_target" is no longer restricted to Vanilla content
  - This goal allows an entity to jump over and around a target
- "behavior.move_around_target" is no longer restricted to Vanilla content
  - This goal allows an entity to move around a target

## Gameplay

- Exposed the entity offset so the user can change the camera's pivot point from the entity's center for third person boom cameras

## General

- Updated Feature Rules documentation
- Added GUI Log Level option to the Creator section of settings which changes which level of content logs are displayed on-screen when content logs are enabled

## Items

- Adds a content error for if an icon can't be found with icon_namefrom minecraft:icon in 1.10 data
- Fixed an issue where item components would not initialize on remote clients ()
- Added "minecraft:rarity" item component which allows specifying the rarity of an item
  - It has a single field "value" which accepts the following values:
    - "common"
    - "uncommon"
    - "rare"
    - "epic"
  - Can also be written as an inlined value like so: "minecraft:rarity": "uncommon"
  - The rarity of the item will determine which color it uses for its name
    - If the item has a "minecraft:hover_text_color" component specified, that hover text color will take priority and be used instead of the rarity color

## Loot Tables

- Added "set_potion" item function for loot tables which can set the potion type of compatible items with a potion id
  - It has a single field "id" which accepts the following potion id values:
    - "water"
    - "mundane"
    - "long_mundane"
    - "thick"
    - "awkward"
    - "nightvision"
    - "long_nightvision"
    - "invisibility"
    - "long_invisibility"
    - "leaping"
    - "long_leaping"
    - "strong_leaping"
    - "fire_resistance"
    - "long_fire_resistance"
    - "swiftness"
    - "long_swiftness"
    - "strong_swiftness"
    - "slowness"
    - "long_slowness"
    - "strong_slowness"
    - "water_breathing"
    - "long_water_breathing"
    - "healing"
    - "strong_healing"
    - "harming"
    - "strong_harming"
    - "poison"
    - "long_poison"
    - "strong_poison"
    - "regeneration"
    - "long_regeneration"
    - "strong_regeneration"
    - "strength"
    - "long_strength"
    - "strong_strength"
    - "weakness"
    - "long_weakness"
    - "wither"
    - "turtle_master"
    - "long_turtle_master"
    - "strong_turtle_master"
    - "slow_falling"
    - "long_slow_falling"
    - "wind_charged"
    - "weaving"
    - "oozing"
    - "infested"
  - The following types of items are compatible with the "set_potion" function:
    - Potion
    - Lingering Potion
    - Splash Potion
    - Arrow

## Structures

- Fixed minecraft:structure_blockdebug bounding box rendering when clients initially load server worlds containing one

# Experimental Technical Updates

## Add-Ons and Script Engine

- Added "item_display_transforms" control to the block geometry file. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside the minecraft:geometry json object and requires geometry format_version 1.21.0 and the "Upcoming Creator Features" toggle
  - Default values example:
    - "item_display_transforms": { "gui" : { "translation": \[0, 0, 0\], "rotation": \[30, 225, 0\], "scale": \[0.625, 0.625, 0.625\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\], "fit_to_frame" : true }, "firstperson_righthand": { "translation": \[0, 0, 0\], "rotation": \[0, 45, 0\], "scale": \[0.4, 0.4, 0.4\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] }, "firstperson_lefthand": { "translation": \[0, 0, 0\], "rotation": \[0, -135, 0\], "scale": \[0.4, 0.4, 0.4\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] }, "thirdperson_righthand": { "translation": \[0, 2.5, 0\], "rotation": \[75, 45, 0\], "scale": \[0.375, 0.375, 0.375\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] }, "thirdperson_lefthand": { "translation": \[0, 2.5, 0\], "rotation": \[75, 45, 0\], "scale": \[0.375, 0.375, 0.375\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] }, "ground": { "translation": \[0, 3.0, 0\], "rotation": \[0, 0, 0\], "scale": \[0.25, 0.25, 0.25\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] }, "fixed": { "translation": \[0, 0, 0\], "rotation": \[0, 0, 0\], "scale": \[0.5, 0.5, 0.5\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] }, "head": { "translation": \[0, 0, 0\], "rotation": \[0, 0, 0\], "scale": \[1, 1, 1\], "rotation_pivot" : \[0, 0, 0\], "scale_pivot" : \[0, 0, 0\] } }

## API

- PlayerInteractWithBlockBeforeEvent
  - Added property readonly isFirstEvent: booleanto beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button
- PlayerInteractWithBlockAfterEvent
  - Added property readonly beforeItemStack?: ItemStack to beta. This is the item the player was selecting before the interaction succeeded
  - Added property readonly isFirstEvent: boolean to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button
  - This after event will no longer always trigger on an empty hand. The interaction with the block needs to be successful for it to trigger the after event
- PlayerInteractWithEntityAfterEvent
  - Added property readonly beforeItemStack?: ItemStack to beta. This is the item the player was selecting before the interaction succeeded
  - Cancelling the before event will now no longer trigger the after event
  - This event will now only be triggered on a successful interaction

## Graphical

- Fixed a variety of issues on the Mali device family of Android, most notably the "striped shadows" bug, in the Deferred Technical Preview ([MCPE-175207](https://bugs.mojang.com/browse/MCPE-175207))
- Removed an incorrect offset when interpolating keyframe values for the sun illuminance and sun color. Keyframe values for sun illuminance and sun color are now consistent with other time-based keyframe values. Creators will need to shift any sun illuminance and color keyframes by 0.5. Documentation on the Creator portal has been updated accordingly
- Added the ability to data-drive Sub Surface Scattering via Texture Sets in the Deferred Technical Preview. This effect allows light to penetrate the surface of objects up to a certain amount, similar to wax, leaves or skin. The default sub surface effect previously on leaves has been removed in favor of packs providing their own textures. Creators can use "metalness_emissive_roughness_subsurface"instead of "metalness_emissive_roughness" in their texture set JSONs to activate the effect on specific blocks, mobs, etc... Sub surface values are pulled from the alpha channel of the supplied texture. See updated documentation on the Creator portal for more information
  - Note that this new field is only available in texture set JSONs with a format version of "1.21.30"
- Changed the color grading JSON schema for the Deferred Technical Preview to now require explicit enabling of highlight and shadow specific color grading settings. See updated documentation on the Creator portal for more information
- Added highlight and shadow color grading controls to the Editor's Deferred Graphics Settings
- Added the ability to data-drive emissive desaturation in the Deferred Technical Preview. See updated documentation on the Creator portal for more information
- Added support for enchanted items in the Deferred Technical Preview
- Reduced the smudging or “ghosting” artifacts that would occur when swinging the item in the player’s hand with Upscaling enabled in the Deferred Technical Preview
- Fixed a variety of issues that caused certain objects to not cast shadows from point lights, and modified point light sources such that their geometry can no longer cast shadows in the Deferred Technical Preview
