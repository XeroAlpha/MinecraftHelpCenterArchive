---
title: Minecraft Beta & Preview - 1.21.130.26
date: 2025-11-04T11:41:08Z
updated: 2025-11-04T13:51:31Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/40853509126541-Minecraft-Beta-Preview-1-21-130-26
hash:
  h_01K8QTR1XS3YFZ0WYMV02D4BXR: information-on-minecraft-preview-and-beta
  h_01K97AQ6M0GG2M7TYX26GCFV2N: features-and-bug-fixes
  h_01K97AQ6M0TPFRFEF5T2EQH936: mounts-of-mayhem
  h_01K97AQ6M0NE3RA1QBK0GVZJMC: camel-husk
  h_01K97AQ6M5V2BB6V21VGN65PZ3: coral-zombie-nautilus
  h_01K97AQ6M7XVETTPFV08QNPF63: mount-improvements
  h_01K97AQ6M8QE18RABQ0F73FQSV: nautilus
  h_01K97AQ6MD0QP2W52D472BW9PS: parched
  h_01K97AQ6MG88EA9CS0HBT1ZCBK: spear
  h_01K97AQ6MMWC37VPVJC4219YEP: zombie-horse
  h_01K97AQ6MSX4P6DRBNCA6A0ATY: zombie-nautilus
  h_01K97AQ6MWY284JY7CH94RNQBV: character-creator
  h_01K97AQ6MWA4EMGZHCEGQB840N: commands
  h_01K97AQ6MXYHF53M6VMCDKNT91: gameplay
  h_01K97AQ6MXRQGGVAA0XKT1TZ5Y: graphical
  h_01K97AQ6N1TPV3P65RG3B2WTM2: input
  h_01K97AQ6N4DR9N5CJEREPAAWK3: mobs
  h_01K97AQ6NCAZY4H6XWGGZRFCT7: realms
  h_01K97AQ6NC3NPGEXRQ05MXYAST: stability-and-performance
  h_01K97AQ6NEQJ6NV3VCF7Y9HRZN: user-interface
  h_01K97AQ6NP4MSWHEYPY3PDXSJ7: technical-updates
  h_01K97AQ6NPCDHV4ESG5KQJV37T: ai-goals
  h_01K97AQ6NTNRWMRD5VVJ5E8SB0: api
  h_01K97AQ6NV0A7X9MARV49WZC8W: biomes
  h_01K97AQ6NVY0JJFX8CY8QH13DQ: blocks
  h_01K97AQ6NXMG04AXRKBF2R6W7F: components
  h_01K97AQ6NZE3A4P40NG0YN3DG9: editor
  h_01K97AQ6P7ACKKJWNE6QFKC1WR: entity-components
  h_01K97AQ6P8FZKHXY3DXKE6K2VJ: general
  h_01K97AQ6P96BDT54AVZ3RQFDQ1: mobs-1
  h_01K97AQ6PAFSTVV52NJKPE4DDH: network-protocol
  h_01K97AQ6PAM0WBFK72NZAJKW3H: experimental-technical-updates
  h_01K97AQ6PAYA6E26Q6BMF3V6Y0: api-1
  h_01K97AQ6PEPPSK6AH6KSYJ7RXR: blocks-1
  h_01K97AQ6PFDCK0AFWRWKVCX9PD: editor-1
---

**Posted:** 4 November 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/40853493423629" alt="Netherite Horse Armor" />
</figure>

Our final set of features for Mounts of Mayhem brings the game's strongest armor tier to your favorite mount – with Netherite horse armor! As well as making your steed more stylish, Netherite horse armor will also make them sturdier, perfect for all those mounted challenges. Test this feature today in Bedrock beta and preview! And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes

## Mounts of Mayhem

### Camel Husk

- Husk and Parched riders no longer look for a new mount after being dismounted
- Camel Husk now has the correct hitbox when spawned
- Camel Husk now spawns in the desert
- Camel Husk no longer dismounts passengers when entering water, mirroring the behavior of the regular Camel
- Camel husk ambient sounds now play at a slightly lower volume

### Coral Zombie Nautilus

- New Zombie Nautilus variant
- Spawns in Warm Oceans, replacing the normal Zombie Nautilus
- Visual variant, functions identically to the normal Zombie Nautilus

### Mount Improvements

- Added Netherite Horse Armor
  - Can be crafted at a Smithing Table using a Diamond Horse Armor, a Netherite Ingot, and a Netherite Upgrade
  - Provides 19 armor points

### Nautilus

- Nautilus doesn't produce dash attack sound when spawned and attacked on land
- Zombie Nautilus now also plays their hurt sound when taking damage on land ([MCPE-229436](https://bugs.mojang.com/browse/MCPE-229436))
- Breath of the Nautilus is now considered an ambient mob effect
- Using Shears on a Nautilus will now first remove its armor and then its saddle
- Baby Nautilus no longer has a gap in its model ([MCPE-229792](https://bugs.mojang.com/browse/MCPE-229792))
- Added an inventory screen to the Nautilus ([MCPE-229431](https://bugs.mojang.com/browse/MCPE-229431))
- Fixed a visual issue in the Nautilus model that caused the top part of the shell to protrude

### Parched

- Parched now take freezing damage while in snow
- Parched will no longer be affected by the Weakness status effect
- Fixed the Parched being able to hit the Husk driver when riding a Camel Husk
- Fixed the Parched being able to hit the Camel Husk it is riding
- Creepers now drop a music disc when killed by a Parched

### Spear

- Wooden Spear attacks now always play their sound effect ([MCPE-229453](https://bugs.mojang.com/browse/MCPE-229453))
- Animals defeated in one hit by the charge attack of a Spear with the Fire Aspect enchantment will now correctly drop cooked food
- The Spear now has dedicated attack and interaction prompt when playing with a controller
- The Spear's lunge attack can now be used in Creative mode regardless of hunger
- Zombies, Husks, Piglins, and Zombified Piglins wielding a Spear now properly charge and retreat while mounted

### Zombie Horse

- Zombie Horses can now be leashed when they are untamed, but not when mounted by a Zombie
- Old Zombie Horses will now properly upgrade with new components
- Wild Zombie Horses will now become unleashable if a zombie mounts them
- Zombie Horse's Spawn Egg now matches the color tint of the Zombie Horse ([MCPE-230280](https://bugs.mojang.com/browse/MCPE-230280))
- Zombie riders no longer look for a new mount after being dismounted
- Zombie Horses now spawn less frequently on Peaceful difficulty

### Zombie Nautilus

- Zombie Nautilus doesn't produce dash attack sound when spawned and attacked on land
- Breath of the Nautilus is now considered an ambient mob effect
- Added an inventory screen to the Zombie Nautilus ([MCPE-229431](https://bugs.mojang.com/browse/MCPE-229431))
- Fixed a visual issue in the Zombie Nautilus model that caused the top part of the shell to protrude

## Character Creator

- Fixed an issue where remote player skins would sometimes change to a default skin when they moved in and out of render range ([MCPE-222444](https://bugs.mojang.com/browse/MCPE-222444))

## Commands

- The clone command will no longer clone extra blocks sharing a position with a filtered out block ([MCPE-179847](https://bugs.mojang.com/browse/MCPE-179847))

## Gameplay

- Legacy tree features now respect biome borders ([MCPE-168996](https://bugs.mojang.com/browse/MCPE-168996))

## Graphical

- Fixed water being rendered opaque
- Fixed an issue where blocks moved by Pistons are too dark
- Added Kelp Block to the list of blocks affected by dithering when near the player camera
- Fixed blocks flashing yellow when pushed with a Piston with Vibrant Visuals enabled
- Reduced flickering and fixed incorrect reflections on low roughness materials with height maps in Vibrant Visuals
- Fixed damage particles sometimes rendering as black with vanilla renderer
- Fixed archaeology items sometimes rendering as nearly black
- Light absorption in water has been changed from 2 to 1 units, to match Java Edition

## Input

- On-Screen Keyboard will no longer appear over the chat box when docked; Input screens, such as signs, will no longer close when switching between different input modes ([MCPE-228584](https://bugs.mojang.com/browse/MCPE-228584))
- Fixed a bug on Windows where resuming the game with the Task Manager opened caused the cursor to stutter at the center of the screen ([MCPE-229549](https://bugs.mojang.com/browse/MCPE-229549))
- Fixed a bug on Windows where the game widgets would interact with the cursor when another window was focused ([MCPE-229548](https://bugs.mojang.com/browse/MCPE-229548))
- Fixed a bug on Windows where the camera snapped to a random direction after closing the GUI and clicking any mouse button ([MCPE-229848](https://bugs.mojang.com/browse/MCPE-229848))

## Mobs

- Wolf shadow and model are now centered ([MCPE-176018](https://bugs.mojang.com/browse/MCPE-176018))
- Fixed some Goat sounds not being controlled by the Friendly Mobs slider ([MCPE-178232](https://bugs.mojang.com/browse/MCPE-178232))
- Piglins will no longer scream with enthusiasm while admiring gold [MCPE-229509](https://bugs.mojang.com/browse/MCPE/issues/MCPE-229509)
  - They will instead do a courteous grunt of acknowledgement
  - Very polite, just like on Java
- Only Baby Zombie jockeys and Baby Husk jockeys can ride the following mobs:
  - Adult Chickens
  - Untamed Ocelots
  - Untamed Cats
  - Untamed Wolves
  - Adult Zombies
  - Adult Husks
  - Adult Zombified Villagers
  - Adult Zombified Piglins
  - Cows
  - Adult unsaddled Pigs
  - Sheep
  - Adult untamed Horses
  - Adult untamed Donkeys
  - Adult untamed Mules
  - Adult Skeleton Horses
  - Adult Zombie Horses
  - Mooshrooms
  - Spiders that were not spawned as jockey mounts
  - Cave Spiders that were not spawned as jockey mounts
- Zombies and Husks that have been spawned as their rider configuration can only ride Zombie Horses and Camel Husks, respectively
- Dolphins no longer spawn in the Cold Ocean or Deep Cold Ocean biomes

## Realms

- Fixed an issue where players could get temporarily stuck when adding members to a newly purchased Realm

## Stability and Performance

- Improved loading times when exiting worlds
- Improved loading times when using the /reload all command
- Fixed a crash from using a Data Driven Renderer
- Improved loading times when re-entering similar worlds
- Improved loading times when transferring between servers

## User Interface

- Added a new joystick for touch controls when using the control schemes 'player_relative_strafe' or 'camera_relative_strafe'
  - The new joystick is only available with "Joystick & tap to interact" and "Joystick & aim crosshair"
  - Players who are using "D-Pad & tap to interact" when entering into one of the two control schemes will be put into "Joystick & tap to interact" and then returned to "D-Pad & tap to interact" after they stop using one of the two control schemes
- Added missing options to the new Accessibility settings page ([MCPE-228101](https://bugs.mojang.com/browse/MCPE-228101))
- Accessibility option "Enable Open Chat Message" has been renamed to "Chat Instructions on Join"
- Implemented the same HUD icon for ambient mob effects as Java (like the ones applied by Beacons, Conduits, or Breath of the Nautilus)
- Fixed ambient mob effects constantly flashing like they are timing out
- All items now show the Hit attack prompt when aiming at a Mob
- Items with dedicated interaction prompts now show when aiming at a Mob if there is no other special Mob interaction prompt
- Camel Husks are now the appropriate size in their Pocket UI screen
- Fixed a bug where holding up on the D-Pad would not continuously scroll in menus ([MCPE-226509](https://bugs.mojang.com/browse/MCPE-226509))
- Fixed an issue where the paste button on some screens would paste text twice ([MCPE-228233](https://bugs.mojang.com/browse/MCPE-228233))
- Title bar of game on PC will now respect Windows dark mode ([MCPE-227846](https://bugs.mojang.com/browse/MCPE-227846))
- Fixed issue where game icon doesn't show on taskbar and title bar on Windows ([MCPE-227849](https://bugs.mojang.com/browse/MCPE-227849))
- The mob's inventory panel is now hidden for all unchested mobs in the default UI

# Technical Updates

## AI Goals

- Added a new field to behavior.nearest_attackable_target to enable a probability of target being chosen by behavior.nearest_attackable_target goal
  - target_acquisition_probability: Probability (0.0 to 1.0) that a entity will accept a found target
  - The default value unless specified is 1.0
- Modified behavior.nearest_attackable_target's attack_interval field to support a range of value instead
  - range_min: Minimum time in seconds before the entity searches for a attack target, can now be set to other values than just 0
  - range_max: Maximum time in seconds before the entity searches for a attack target
- Added the "hijack_mount_navigation" field to the "minecraft:behavior.use_kinetic_weapon" AI goal
  - Allows a mob to override its mount’s navigation behavior with the one defined by this goal
  - Requires the mount to be running the "minecraft:behavior.mount_pathing" goal, whose default behavior will be ignored

## API

- Fixing an issue in new worlds where calling world.getDimension, before a player has spawned, could result in a different spawn location than intended ([MCPE-228041](https://bugs.mojang.com/browse/MCPE-228041))
- Released BlockComponentBlockBreakEvent from beta to v2.4.0
- /structure and /place commands and StructureManager API Place function now trigger onBreak beta API event for custom blocks when overidden

## Biomes

- Fixed biome replacement component ([MCPE-229476](https://bugs.mojang.com/browse/MCPE-229476))

## Blocks

- Moved the Block Precipitations Interactions component from experimental to stable
- Fixed "ambient_occlusion" field in "minecraft:material_instances" block component
- "minecraft:collision_box" height is extended to 24 when using a format version of 1.21.130 or higher and the Upcoming Creator Features toggle is enabled
- "minecraft:collision_box" now supports arrays of boxes when using a format version of 1.21.130 or higher and the Upcoming Creator Features toggle is enabled

## Components

- Added is_controlling_passenger_family entity filter to check if the passenger controlling a mount is of the specified family
- Added has_item_with_component entity filter to check if the entity has equipped an item with the designated component name

## Editor

- Added support for Jigsaw blocks to Block Inspector tool
- Editor will attempt to load jigsaw files from Behavior Packs if they do not conflict with an existing Jigsaw collection name
- Fixed a bug that the previews position of repeater tool were displaced from the intended position
- Fixed a bug that prevented the action bar selection menu from closing when pressing the Escape key
- Moved the brush shapes rotation settings into Rotation sub pane
- Added Tag management section in the Structure details panel, where tags can be added and removed
- Fixed a bug that caused the default deleted hotbar to be re-added after re-entering a session
- Fixed a bug that caused some cursor and brush tooltips to show incorrect key bindings
- Fixed a bug that auto-save the keyboard binding after reset and reset all to the default
- Fixed a bug that caused mob effects shortcut to not work in crosshair mode
- Fixed a bug that caused tutorial message window and dimmer overlay to be misaligned
- Added shrinkToIcon API property for IButtonPropertyItem creation options
- Added maxVisibleEntries API property for IDropdownPropertyItem to modify menu size
- Added enabled API property for IToggleGroupPropertyItemEntry
- Changed ButtonPropertyItemVariant API enum to ButtonVariant

## Entity Components

- Added the ambient field to minecraft:mob_effect component
  - Causes the effect to render with the ambient effect background
  - Causes the effect to not pulse for timing out

## General

- Added file name to the assertion message for "MERS uniforms is being set more than once" to make future debugging easier

## Mobs

- Fixed content warning that incorrectly occurred for format_version field in entity json in versions before 1.8.0
- Lowered the min_engine_version of the latest zombie_pigman.entity.json slice back to 1.8.0, allowing it to be overridden by existing third-party content ([MCPE-229868](https://bugs.mojang.com/browse/MCPE-229868))

## Network Protocol

- Added Ambient bool field to MobEffectPacket, defines if the effect is considered ambient (like the ones applied by Beacons or Conduits)

# Experimental Technical Updates

## API

- Fixed an issue where DebugShape objects were not cleaned up properly after running /reload
- Fixed an issue where DebugText would not be affected by the scale property
- World
  - Added property readonly tickingAreaManager: TickingAreaManager to beta
- Added class TickingAreaManager to beta. This manager is used to add, remove or query temporary ticking areas to a dimension
  - These ticking areas are limited by a fixed amount of ticking chunks per pack independent of the command limits
- Added interface TickingArea to beta. This provides information about a specific ticking area
- Added interface TickingAreaOptions to beta. Options to create a ticking area using the TickingAreaManager
- Added class TickingAreaError to beta
- Added enum TickingAreaErrorReason to beta
  - Enum for the reason that a TickingAreaError was thrown

## Blocks

- Blocks using minecraft:placement_direction Block Trait with the minecraft:corner_and_cardinal_direction had the inner_left/outer_left and inner_right/outer_right states backwards when a block was facing south or west
- Made blocks that use the minecraft:placement_position block trait with the state minecraft:vertical_half and minecraft:placement_direction with the state minecraft:corner_and_cardinal_direction update the corner state immediately instead of happening a tick later

## Editor

- Initial experimental support for "Prefabs" in the Editor
  - This feature is highly experimental, has some issues, is guaranteed to change and is not yet documented
  - Do not use in production projects
- Added a "Prefab Template Manager" to help create, edit and delete prefab templates
- Added a "Prefab Instance Editor" to allow placement of prefabs in the scene, and edit the properties of the instance
