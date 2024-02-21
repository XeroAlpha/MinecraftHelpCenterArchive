---
title: Minecraft - 1.19.40 (Bedrock)
date: 2022-10-24T16:09:12Z
updated: 2022-10-25T16:27:53Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/10108618123405-Minecraft-1-19-40-Bedrock
---

A new update is available for Minecraft, bringing a variety of gameplay improvements, vanilla parity changes, and bug fixes.

As always, we appreciate all your help and input, please report any new bugs at [bugs.mojang.com](http://bugs.mojang.com/) and leave your feedback [feedback.minecraft.net](http://feedback.minecraft.net/).

![Picture1.png](https://feedback.minecraft.net/hc/article_attachments/10108565241357)

**Vanilla Parity:**

**General**

- Getting killed by a renamed weapon now produces a death message with the item name
- Getting killed by a mob with a renamed weapon now produces a death message with the item name ([MCPE-162055](https://bugs.mojang.com/browse/MCPE-162055))
- The Roofed Forest, Savanna Mutated, and Birch Forest biomes use the correct grass colors ([MCPE-34936](https://bugs.mojang.com/browse/MCPE-34936))
- Mobs no longer spawn within the bounds of an Ancient City ([MCPE-153524](https://bugs.mojang.com/browse/MCPE-153524))
- Sweet Berries can now be planted on Farmland ([MCPE-99632](https://bugs.mojang.com/browse/MCPE-99632))
- Changed bubble column strength to match Java Edition ([MCPE-158858](https://bugs.mojang.com/browse/MCPE-158858))
- Scaffolds now burn at a more correct rate, 1/4 of an item ([MCPE-42949](https://bugs.mojang.com/browse/MCPE-42949))
- Wither Skeletons can now spawn inside of Wither Roses ([MCPE-110127](https://bugs.mojang.com/browse/MCPE-110127))
- Decreased the amount of hunger used while swimming to match Java Edition ([MCPE-154452](https://bugs.mojang.com/browse/MCPE-154452))

**Mobs**

- Ravagers can now be hurt by Evoker Fangs
- Increased Ravager collision box size to match Java Edition ([MCPE-142171](https://bugs.mojang.com/browse/MCPE-142171), [MCPE-45531](https://bugs.mojang.com/browse/MCPE-45531))
- Increased Ravager speed to match Java Edition ([MCPE-48145](https://bugs.mojang.com/browse/MCPE-48145))
- Librarian Villagers can now offer Enchanted Books with Curse of Vanishing and Curse of Binding ([MCPE-84906](https://bugs.mojang.com/browse/MCPE-84906))

**Blocks**

- Players swimming above Mud will not have their screen covered ([MCPE-153737](https://bugs.mojang.com/browse/MCPE-153737))
- Projectiles landing on Mud will not repeatedly shake ([MCPE-153744](https://bugs.mojang.com/browse/MCPE-153744))
- Amphibious mobs no longer have trouble pathfinding around Mud Blocks ([MCPE-153961](https://bugs.mojang.com/browse/MCPE-153961))

**Spectator Mode (Experimental)**

- Spectators no longer drop XP orbs when killed ([MCPE-160245](https://bugs.mojang.com/browse/MCPE-160245))
- Spectators no longer reset their player level when killed
- Water fog is no longer removed for players in Spectator Mode ([MCPE-161105](https://bugs.mojang.com/browse/MCPE-161105))
- Spectator players no longer play sounds when entering/exiting bubble columns ([MCPE-161536](https://bugs.mojang.com/browse/MCPE-161536))
- Shulker bullets no longer follow Spectators ([MCPE-162069](https://bugs.mojang.com/browse/MCPE-162069))
- Spectators are now invisible to normal players
- If a player is in Spectator Mode and other non-spectating players are present on the server, the spectating player won't affect mob despawning anymore
- If there are only spectating players on the server, mob despawning is now put on hold**  
    
  **

**Fixes:**

**Performance/Stability**

- Fixed a crash when using spawn eggs in peaceful worlds on PlayStation 4 Edition
- Fixed a crash that could occur when an animated structure was loading from a Structure Block and the player left a dimension via portal ([MCPE-132561](https://bugs.mojang.com/browse/MCPE-132561))
- Fixed a bug which caused the game to crash when loading an Arrow with an unrecognized data value ([MCPE-157983](https://bugs.mojang.com/browse/MCPE-157983))
- Fixed a potential crash source in explosions
- Fixed a crash that could occur when leaving a split screen session
- Fixed an issue with Marketplace bundle prices not showing as free after purchasing
- Added a Clear Cache button in Storage Settings for all platforms. This button clears contents of Marketplace folders (but not worlds) and might help alleviate issues downloading content ([MCPE-54531](https://bugs.mojang.com/browse/MCPE-54531))
- Fixed an issue where Wither effect damage would be reduced by armor ([MCPE-159407](https://bugs.mojang.com/browse/MCPE-159407))

**Gameplay**

- Keyboard players can now sprint when moving diagonally ([MCPE-144702](https://bugs.mojang.com/browse/MCPE-144702))
- Grove biome is now classified as "cold" and Villagers spawned there will be the snow variant ([MCPE-147834](https://bugs.mojang.com/browse/MCPE-147834))
- Fixed fall damage accumulating while the player is in a Trapdoor block at the top of a bubble column ([MCPE-158858](https://bugs.mojang.com/browse/MCPE-158858))
- Fixed an issue causing player to move in the wrong direction after turning using VR snap camera movement ([MCPE-152443](https://bugs.mojang.com/browse/MCPE-152443))

**Mobs**

- Baby Villagers will again accept flowers from Iron Golems
- Guardians are no longer able to float in the air ([MCPE-33641](https://bugs.mojang.com/browse/MCPE-33641))
- Enabled tamed mobs that follow the player to follow the player through End Portals
- Fixed an issue where Drowned could change held items when attacking ([MCPE-40288](https://bugs.mojang.com/browse/MCPE-40288))
- Fixed a bug where mobs with a long hit range could hit players through walls ([MCPE-55790](https://bugs.mojang.com/browse/MCPE-55790))
- Fixed a bug which caused Boats to disappear when pushed through a portal ([MCPE-161563](https://bugs.mojang.com/browse/MCPE-161563))
- When a mob is a passenger in a Boat, neither the Boat nor the mob are allowed to change dimension ([MCPE-154919](https://bugs.mojang.com/browse/MCPE-154919))
- NPCs can now have no name, hiding the nametag above their head

**Blocks**

- Falling blocks no longer break when landing on double Slabs ([MCPE-159921](https://bugs.mojang.com/browse/MCPE-159921))
- Huge Fungus stems no longer replace partial blocks when growing from Nylium ([MCPE-65661](https://bugs.mojang.com/browse/MCPE-65661))
- Water texture on some waterlogged blocks no longer renders too bright when placed under other blocks ([MCPE-76949](https://bugs.mojang.com/browse/MCPE-76949))
- Fixed an issue which caused Redstone to output the wrong signal strength in certain configurations ([MCPE-81981](https://bugs.mojang.com/browse/MCPE-81981))
- Fixed several issues related to Sticky Pistons being used near world build limits ([MCPE-96088](https://bugs.mojang.com/browse/MCPE-96088))
- Breaking the block below a Snow-covered Flower now makes the Flower drop instead of the Snow Layer ([MCPE-61609](https://bugs.mojang.com/browse/MCPE-61609))
- Fixed Beacon block suddenly disappearing when seen from a distance
- The book of an Enchanting Table now properly faces a nearby player ([MCPE-29924](https://bugs.mojang.com/browse/MCPE-29924))
- Temporarily reverted the changes to Dirt Path and Farmland collision changes, as well as Soul Sand and Mud blocks sinking while we iron out some bugs

**Items**

- Reverted the change that caused Arrows and Tridents to stop moving ([MCPE-162085](https://bugs.mojang.com/browse/MCPE-162085))

**Graphical**

- Fixed an issue with screen position on Android devices ([MCPE-159703](https://bugs.mojang.com/browse/MCPE-159703))

**User Interface**

- Removed the “Clear Account Sign in Data” button from the Settings menu from non-Switch platforms, as it is only intended to function on Nintendo Switch ([MCPE-129704](https://bugs.mojang.com/browse/MCPE-129704))
- Fixed a bug where usernames could be above max size ([MCPE-152884](https://bugs.mojang.com/browse/MCPE-152884))
- To make finding the right thing in Settings easier, the Profile screen has been split into two new sections: General and Account
- Ensured proper text-to-speech support for the revamped death screen
- Fixed a bug where achievements would be disabled for some world templates
- Fixed a bug in Pocket UI where items could be dropped in the dark-grey areas around the item grid in the Crafting Table screen
- Fixed a bug in Pocket UI where items could be dropped in the dark-grey areas around the item grid in the inventories for the Horse, Mule, Donkey, and Llama
- Fixed a bug where the death screen message was visible when the Show Death Message game rule was set to false
- Fixed an issue where players couldn't drag/drop or select items from the equipment page
- Changed the color of the text descriptions for the 'Darkness Effect Strength' and 'Notification Duration' accessibility options to a lighter shade to make them more readable ([MCPE-162047](https://bugs.mojang.com/browse/MCPE-162047))
- Fixed a bug where death messages were sometimes too long to fit on screen ([MCPE-156550](https://bugs.mojang.com/browse/MCPE-156550))
- Fixed the crafting screen search string not saving correctly
- Fixed an issue with the durability bar missing on inventory screens on Xbox ([MCPE-162063](https://bugs.mojang.com/browse/MCPE-162063))
- Fixed a bug where the sign in button on Create New World didn't work on some platforms
- The copy coordinates gamepad tooltip now uses the correct icon depending on the platform ([MCPE-162654](https://bugs.mojang.com/browse/MCPE-162654))

**Realms**

- Shortened text when uploading worlds and add-ons so it fits in the dialog
- Fixed a problem where custom add-on packs could not be applied properly in Realms settings, as well as fixed a crash during pack uploading ([REALMS-10655](https://bugs.mojang.com/browse/REALMS-10655))
- Unlocalized text no longer appears when connecting to a Realm with an outdated client

**Mobile Touch Controls**

- Fixed a bug where items could not be removed from the hotbar by moving them onto other items in Creative Inventory on mobile devices
- Fixed an issue where the stack splitting progress bar was not aligned on touch mode
- Adjusted layout of the touch toolbar and status effect icons based on user feedback
- Fixed a bug that prevented scrolling through the Village trade list on mobile devices
- When the auto-jumping feature is enabled, the player will now automatically jump out of water when moving toward a block on land
- In Creative Mode while using touch input with Action Buttons off, the delay for breaking the first block has been increased to 800 milliseconds. This reduces the chance of breaking a block by accident
- Added support for dragging and dropping with touch gestures in the inventory
- Double tapping 'descend' now toggles off flight in Joystick touch control modes
- Updated the positioning of status effects for Pocket UI
- The inventory button for touch devices is now reset to its default appearance after closing the inventory
- Fixed an issue where players couldn't swap unstackable items with touch controls
- Improved the images for the three control schemes in the touch settings menu  
    

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.19.40 with new resources, behaviors, and documentation, are available to download at [aka.ms/MCAddonPacks  
  ](https://aka.ms/MCAddOnPacks)

**Custom Block Geometry**

- We have released custom block geometry in this version of Minecraft. This means that anyone can make a custom block with their own custom geometry and textures WITHOUT turning on the Holiday Creator Features experimental toggle in settings
- For more information and a list of documentation and tutorials, visit the [Custom Block Geometry article on minecraft.net](https://www.minecraft.net/en-us/creator/article/custom-block-geometry-release)

**General**

- Fixed a crash that could occur when using the *hasItem* selector and specifying a negative value for the item's data ([MCPE-152314](https://bugs.mojang.com/browse/MCPE-152314))
- Implemented the *has_property*, *int_property*, *bool_property*, *float_property*, and *enum_property* actor behavior filters
- Added flag *is_hidden_in_commands*in *menu_category* to control whether or not a block can be used in commands
- Release BlockGeometryComponent out of experimental in JSON formats 1.19.40 and higher
- Release BlockMaterialInstancesComponent out of experimental in JSON formats 1.19.40 and higher
- Renamed *minecraft:block_light_filter*component to *minecraft:light_dampening*
- Renamed experiment GameTest Frameworkto Beta APIs
- The now-renamed Beta APIsexperiment is still needed to access all beta APIs, including core Minecraft APIs and GameTest APIs
- Fixed a bug where *EntityHurtEvent*would not fire on player death
- Entity
  - Updated *target*property to be read-only
  - Fixed an issue where UI forms would not mark their *cancelled* field correctly
- Converted EntityQueryScoreOptions to an interface
- Converted EntityRaycastOptions to an interface
- Converted ExplosionOptions to an interface
- Converted MusicOptions to an interface
- Converted SoundOptions to an interface
- Removed built-in GameTest Behavior Packs

**Commands**

- Implemented the "/execute facing" and "/execute facing entity" commands
- Implemented the "/execute align" command
- Fixed a problem with teleports appearing to fly the target to the new location instead of being instant
- Added the 'replace block' overload to the /loot command
- Implemented the "/execute rotated " and "/execute rotated as" commands
- Added the ability to set a custom block with a specific custom block property using the /setblockcommand
- Copying a bubble column with the /clone command no longer results in invisible water ([MCPE-153903](https://bugs.mojang.com/browse/MCPE-153903))
- Added new overload to the /summon command that adds rotation arguments
  - New overload is /summon \[ spawnPos : x y z\] \[yRot: float\] \[xRot: float\] \[spawnEvent: string\] \[nametag: string\]
- Previous overload '/summon \[ spawnPos : x y z\] \[spawnEvent: string\] \[nametag: string\]'
- Temporarily disabled the rotation for the /summon command while a bug is worked on
- Fixed a rotation issue when a Command Block executes 'execute facing' and 'execute rotated' ([MCPE-162256](https://bugs.mojang.com/browse/MCPE-162256))
- Implemented the '/execute in' command
- Implemented the ‘/execute anchored \<eyes\|feet\>’ command

**Data-Driven Blocks**

- *minecraft:direction* is no longer exposed as a data-driven blockProperty. Blocks throw a content error when the "minecraft" namespace is used

**Data-Driven Items**

- Added support for recipes to use item tags directly instead of item names
  - Added new item tags
  - Converted several recipes from code into their own recipe files
  - Added several recipes using the new tags to override many old, item specific recipes (these still exist for backwards compatibility):
    - barrel, beehive, bookshelf, bowl, brewing_stand, campfire, cartography_table, chest, composter, crafting_table, daylight_detector, fire_charge, fletching_table, furnace, grindstone, jukebox, lectern, loom, noteblock, painting, piston, shield, smithing_table, smoker, soul_campfire, soul_torch, stick, stone_axe, stone_hoe, stone_pickaxe, stone_shovel, stone_sword, torch, tripwire_hook, wooden_axe, wooden_hoe, wooden_pickaxe, wooden_shovel, wooden_sword
  - Custom Items, tags, and block tags now work correctly with the *minecraft:digger* component ([MCPE-155786](https://bugs.mojang.com/browse/MCPE-155786))

**Actors**

- Implemented new *is_baby* actor filter that returns true when the subject entity is a baby
- Fixed "bool_property" filters that didn't specify a "value"

**AI Goals**

- Fixed an issue with Iron Golems that prevented mobs with the *minecraft:take_flower* AI behavior to use the goal
- Exposed new data parameters for the *minecraft:play* AI behavior to specify such things as the duration the goal stays active, the chance to start the goal, the range to search for a friend, and the follow distance to stay within when playing with a friend

**Entity Documentation**

- Removed experimental markers for The Wild Update entity behaviors and components
- Added documentation for *minecraft:heartbeat*
- Fixed and updated documentation for entity events

**API**

- Events
  - Removed event tick- called each tick
- System
  - Added system.run() - to queue a callback to run next tick, re-queue each tick to get behavior similar to tick event
- Block
  - Renamed property *id*to *typeId*
- BlockComponent
  - Renamed property *id*to *typeId*
- Entity
  - Renamed property *id*to *typeId*
  - Added read-only property id: string- Returns a unique identifier for the entity. This identifier remains consistent across world loads
- EntityComponent
  - Renamed property *id*to *typeId*
- ItemComponent
  - Renamed property *id*to *typeId*
- ItemStack
  - Renamed property *id*to *typeId*

**GameTest Framework (Experimental)**

***There has been a major breaking change to experimental JavaScript APIs:***

All script modules have been renamed to follow a new convention.

- *mojang-gametest*-\> *@minecraft/server-gametest *
- *mojang-minecraft*-\> *@minecraft/server*
- *mojang-minecraft-ui*-\> *@minecraft/server-ui*
- *mojang-minecraft-server-admin*-\> *@minecraft/server-admin*
- *mojang-net*-\> *@minecraft/server-net*

For example, rather than using:

import \* as mc from “mojang-minecraft”;

Use:

import \* as mc from “@minecraft/server”;  
  

Use of script eval() and Function() must be explicitly enabled in  manifest.json 

To do this, set script_eval in capabilities array.

"capabilities": \[  "script_eval"\]

- Root path for imports has changed; scripts/ prefix are no longer allowed.
- For imports, use import "./source.js" or import "source.js"
- Deprecated use of import "scripts/source.js"
