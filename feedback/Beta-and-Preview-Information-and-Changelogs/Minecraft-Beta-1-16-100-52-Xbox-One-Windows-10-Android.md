---
title: Minecraft Beta - 1.16.100.52 (Xbox One/Windows 10/Android)
date: 2020-08-19T15:32:29Z
updated: 2020-08-19T16:05:33Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360048306131-Minecraft-Beta-1-16-100-52-Xbox-One-Windows-10-Android
---

**19 August 2020**

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

**Vanilla Parity**

- Brewing Stand can now be crafted with Blackstone ([MCPE-90465](https://bugs.mojang.com/browse/MCPE-90465))
- Players can now spawn farmland with the /give command and pick it with Pick Block ([MCPE-25691)](https://bugs.mojang.com/browse/MCPE-25691)
- Cod and Salmon killed by fire damage now drop cooked fish ([MCPE-30693](https://bugs.mojang.com/browse/MCPE-30693)) 

**Performance and Stability**

- Fixed a crash that occurred when entering a game with specific texture packs enabled 
- Adding tags to the Ender Dragon will no longer crash the game when reloading the world ([MCPE-89076](https://bugs.mojang.com/browse/MCPE-89076)) 

**Blocks**

- Fence gates now align with Blackstone Walls ([MCPE-78002](https://bugs.mojang.com/browse/MCPE-78002)) 
- Placing blocks on Crimson Roots and Warped Roots will now properly remove the roots ([MCPE-81521](https://bugs.mojang.com/browse/MCPE-81521)) 
- Target blocks no longer power additional blocks above them ([MCPE-85455](https://bugs.mojang.com/browse/MCPE-85455)) 
- Cocoa Beans can now be placed on and survive on all jungle wood variants ([MCPE-46638](https://bugs.mojang.com/browse/MCPE-46638)) 

**Experience Orb**

- The Experience Orb now ignores world lighting, allowing it to always be at max brightness ([MCPE-67448](https://bugs.mojang.com/browse/MCPE-67448)) 

**Items**

- Dropped items no longer float too low to the ground 
- Dragon Egg now always drops when it is destroyed by an explosion ([MCPE-52632](https://bugs.mojang.com/browse/MCPE-52632)) 

**Mobs**

- Mobs in lava were not able to find a path out. This fix makes it so they can enter a lava block if they are already in lava 
- Pathfinding will now account for "minecraft:scale'" component 
- Updated BrewingStand, ButtonBlock, ChestBlock, EnderChestBlock, SlabBlock, and SoulSandBlockblock types to allow path-finding and navigation ([MCPE-47075](https://bugs.mojang.com/browse/MCPE-47075)) 

**Technical Updates**

- Updated Actor Properties. Two fields that were invalid and appeared in some vanilla content will now give a content error. The field "value" on "minecraft:can_fly" and the property "minecraft:foot_size" should simply be removed from any entity files 
- Make boat use the Buoyancy Component. Added two new components, the inside_block_notifiercomponent, which fires specified events when the actor enters or exits specified blocks, and the out_of_control component, which sets a corresponding actor flag, in order to make this possible 
- Added error checks to parsing of minecraft shareables items. Displays content log if item name is invalid or the array is empty 
- Attempting to load a custom material that is not defined no longer causes a crash. A proper content error is now thrown 
- Exposed new data parameters to control the behavior of Drop Item For Goal. This includes: "seconds_before_pickup", "cooldown", "minimum_teleport_distance", "max_head_look_at_height", "teleport_offset", and "entity_types". Check out the new Actor component documentation! 
- Exposed new data parameters to control the behavior of Harvest Farm Block Goal, including "max_seconds_before_search", "search_cooldown_max_seconds", and "seconds_until_new_task". Check out the new Actor component documentation! 

**Aseprite**

- The UI now supports using aseprite JSON files for animations, which allows more advanced animations than simple flip books

**Commands**

- Added a new /structure command that allows to save and load structures without having to use structure blocks 
- Added /playanimation command which allows you to run a one-off animation. It assumes all variables have been setup correctly for the animation to run
- Added /ride command which allows you to make entities ride other entities, stop entities from riding, make rides evict their riders, or summon rides or riders

**Format Version Checks**

- Updated the format_versionfield in geometry, particles, and animation files to behave as entity behavior files do. That is, you no longer need to specify a specific version for it to be accepted, instead you can just specify the version of the release you are targeting

**SetBannerDetailsFunction**

- Now supports customizing non-Illager banners
- Up to 6 patterns and colors can be specified

**Accepted banner types**

- "default"
- "illager_captain"

**Accepted color values**

- "black"
- "red"
- "green"
- "brown"
- "blue"
- "purple"
- "cyan"
- "silver"
- "gray"
- "pink"
- "lime"
- "yellow"
- "light_blue"
- "magenta"
- "orange"
- "white"

**Accepted pattern values**

- "base"
- "border"
- "bricks"
- "circle"
- "creeper"
- "cross"
- "curly_border"
- "diagonal_left"
- "diagonal_right"
- "diagonal_up_left"
- "diagonal_up_right"
- "flower"
- "gradient"
- "gradient_up"
- "half_horizontal"
- "half_horizontal_bottom"
- "half_vertical"
- "half_vertical_right"
- "mojang"
- "piglin"
- "rhombus"
- "skull"
- "small_stripes"
- "square_bottom_left"
- "square_bottom_right"
- "square_top_left"
- "square_top_right"
- "straight_cross"
- "stripe_bottom"
- "stripe_center"
- "stripe_downleft"
- "stripe_downright"
- "stripe_left"
- "stripe_middle"
- "stripe_right"
- "stripe_top"
- "triangle_bottom"
- "triangle_top"
- "triangles_bottom"
- "triangles_top"

**Possible input**

"function": "set_banner_details","type": "default","base_color": "blue","patterns": \[  {    "pattern": "flower",    "color": "white"  },  {    "pattern": "triangle_bottom",    "color": "brown"  }\]
