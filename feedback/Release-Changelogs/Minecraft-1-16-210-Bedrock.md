---
title: Minecraft - 1.16.210 (Bedrock)
date: 2021-03-09T15:05:28Z
updated: 2021-03-09T16:46:12Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360057677072-Minecraft-1-16-210-Bedrock
---

**Posted: **March 9, 2021

Another Minecraft update is upon us! New ambient sounds have been added to the Nether, making the dimension feel even more hostile. In addition to bug fixes, many that were reported by players, we’ve included some new tools for map makers and add-on creators.

Please report any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/) and post feedback to [feedback.minecraft.net](https://feedback.minecraft.net/).  
  

**Vanilla Parity Changes and Fixes:**

- Players now experience ambient sounds in the Nether ([MCPE-74756](https://bugs.mojang.com/browse/MCPE-74756))
  - Mobile players need to update the Minecraft Original Music Pack via the Marketplace to hear these new sounds
- Using bone meal in warm ocean biomes now only generates sea grass, coral, and coral fans ([MCPE-100085](https://bugs.mojang.com/browse/MCPE-100085))   
    

**Changes:**

- Added F11 as a keyboard shortcut for Full Screen mode
- Added text-to-speech volume slider in Audio Settings
- **Android Devices**
  - Our ability to support Android devices on KitKat OS or below is coming to an end. For more information, please see our [help article](https://help.minecraft.net/hc/en-us/articles/360045863292-What-are-the-Device-Requirements-to-run-Minecraft-)
  - Players running this KitKat OS or below are not able to purchase a Realm from that device  
      

**Known Issues:**

- Please be assured that we are still working on the issue that is causing some players to get stuck on the red loading screen on PS4 - to help us investigate this further, the game will now detect if it has failed to load correctly after 30 minutes, which will help us to diagnose and rectify the problem ([MCPE-84790](https://bugs.mojang.com/browse/MCPE-84790))
- Player may be unable to change back from Local Network to Online Network on Nintendo Switch due to infinite loading
- Players are unable to see and join LAN sessions on Xbox without on Xbox Live Gold subscription
- The chest inventory menu is not visible when a chest is placed close to wall on PS VR ([MCPE-109860](https://bugs.mojang.com/browse/MCPE-109860))
- There are are no animations when using items and punching at the air when playing on mobile devices  
    

**Fixes:**

**Performance / Stability**

- Fixed a number of crashes that could occur during gameplay
- Fixed a crash that could occur when opening the achievements screen when the Anti-Aliasing setting was set to 1 ([MCPE-110164](https://bugs.mojang.com/browse/MCPE-110164))
- Fixed a crash that could occur when loading '.mcstructure' files into the world that include entities ([MCPE-63387](https://bugs.mojang.com/browse/MCPE-63387))
- Teleporting away from a structure animation no longer causes the game to crash
- Fixed a crash that could occur when leaving a world
- Fixed a crashing issue related to corrupted biomes during world load for various Marketplace worlds
- Fixed a crash that could occur when using Code Connection ([MCPE-113355](https://bugs.mojang.com/browse/MCPE-113355))

**General**

- Players are once again able to join servers when the server has view-distance set to 4 or less ([BDS-8855](https://bugs.mojang.com/browse/BDS-8855))
- Split-screen characters are now stored in memory and re-joining the game will keep the character that the player had ([MCPE-58640](https://bugs.mojang.com/browse/MCPE-58640))
- Brought back capability to rejoin a server after it has been suspended and resumed
- Sign in failures now have a more helpful error message and provide error codes
- Clicking "Download Template" when missing required templates of an existing world now correctly downloads the required templates
- Resolved an issue where, in certain cases, a world could not be properly synced to the cloud (Xbox only). If you are having trouble syncing worlds, please try opening the world on the original Xbox, save/quit, then wait a few moments while the world is re-synced into the cloud
- Fixed an issue where crafting a bed with the recipe book unlocked the "Change of Sheets" trophy

**Gameplay**

- Fixed players taking fall damage when opening Shulker Boxes ([MCPE-105490](https://bugs.mojang.com/browse/MCPE-105490))
- Players will no longer dismount into liquids (lava or water) from rideables such as boats
- In all worlds created with the same seed, the same chest will now always generate the same content in the same order ([MCPE-72432](https://bugs.mojang.com/browse/MCPE-72432))

**Mobs**

- All mobs that use a melee attack have had their ability to hit targets above and below them restored
  - The target still must be within melee attack distance to be hit
  - This only affects world versions greater than or equal to 1.16.210
- Fixed a bug where parrots could fly upwards indefinitely
- Fixed an issue that was causing the Ender Dragon animation to appear jittery ([MCPE-105892](https://bugs.mojang.com/browse/MCPE-105892))
- Added new logic for mobs dismounting rideables
  - This also introduces a more fine-grained entity height check allowing different dismount places for entities of different heights
- Fixed a bug where foxes wouldn't knock off and eat sweet berries ([MCPE-70790](https://bugs.mojang.com/browse/MCPE-70790))
- Fixed a bug that allowed players to place custom spawn eggs by default in Adventure mode
- Minecarts now properly update their effects (looping sound, player coordinates) when the minecart is not being rendered for the rider ([MCPE-104044](https://bugs.mojang.com/browse/MCPE-104044))

**Blocks**

- Mining crimson hyphae with Silk Touch now returns a placeable block
- Fix for certain Marketplace worlds having incorrect block data when played on Realms and multiplayer between mobile and PC
- Fixed dried kelp block bottom and carried textures so the rope pixels are aligned ([MCPE-35476](https://bugs.mojang.com/browse/MCPE-35476))
- Fixed an issue where snow accumulated in lines with certain simulation distances ([MCPE-73468](https://bugs.mojang.com/browse/MCPE-73468))
- TNT submerged in water will once again launch players in Survival mode ([MCPE-47047](https://bugs.mojang.com/browse/MCPE-47047))

**Items**

- Ink Sacs obtained from the Wandering Trader can now be used for crafting and can be stacked ([MCPE-101087](https://bugs.mojang.com/browse/MCPE-101087))
- Redstone Dust is now displayed as "Redstone Dust" instead of "Redstone"
- Nether Brick now gives XP from being smelted ([MCPE-100030](https://bugs.mojang.com/browse/MCPE-100030))

**Graphical**

- Fixed an issue with screen resolution which could flicker when resizing a window ([MCPE-69721](https://bugs.mojang.com/browse/MCPE-69721))
- Fixed an issue with maps rendering over transparent objects when attached to item frames when using ray tracing
- Reduced ghosting of fish when viewed through the water with DLSS enabled

**Accessibility**

- Fixed the screen reader not reading the title on the Permissions screen
- Emote wheel now supports the screen reader on Android and iOS devices
- Keyboard inputs can now adjust slider settings when the cursor is outside the UI frame
- Fixed a bug where the screen reader did not read the permission toggles' titles on the Permissions Screen
- The screen reader now reads Whisper and Announcement messages
- The screen reader now informs the player when the "Chat Settings" menu has been opened
- The screen reader now properly reads Edit/Create character button text for each character on the profile screen
- The screen reader now announces the names of the A/B Button Swap and X/Y Button Swap options correctly
- Fixed an issue where the screen reader would intermittently fail to announce some button names

**User Interface**

- Command blocks no longer censor numbers ([MCPE-106296](https://bugs.mojang.com/browse/MCPE-106296))
- Improved the smoothness of menu transition animations ([MCPE-41772](https://bugs.mojang.com/browse/MCPE-41772))
- A warning now appears when attempting to move a locked item in and from containers
- Updated outdated loading screen tips ([MCPE-98977](https://bugs.mojang.com/browse/MCPE-98977), [MCPE-102293](https://bugs.mojang.com/browse/MCPE-102293))
- Added more helpful Video Settings messages for ray tracing on supported and non-supported platforms
- Golden Apple and Enchanted Apple now have colored hotbar text when selecting them ([MCPE-64427](https://bugs.mojang.com/browse/MCPE-64427))
- Tool and armor recipes now display the selected item background when selected in the recipe list
- Wireframe of a structure block in the Overworld will no longer render in Nether and The End ([MCPE-75231](https://bugs.mojang.com/browse/MCPE-75231))
- Audio sliders now always highlight when hovered over with a mouse
- The durability bar is now visible when holding items with decreased durability in a window ([MCPE-105893](https://bugs.mojang.com/browse/MCPE-105893))
- Fixed an issue where achievement names and descriptions would not be translated, independent of language selection ([MCPE-85813](https://bugs.mojang.com/browse/MCPE-85813))
- The online status of cross-platform friends' shown on the invite screen will now update when a change has been detected ([MCPE-70004](https://bugs.mojang.com/browse/MCPE-70004))
- Fixed an issue that prevented achievement rewards from showing correctly after changing the language setting
- Owned and purchasable skins no longer get mixed into different categories while offline
- Emote title no longer shows previously previewed emote upon re-entering the emotes tab. Emotes!
- Updated the in-game links to the proper support pages
- Fixed Skin Preview navigation when using a controller
- Fixed missing Incompatible button on the Marketplace Inventory screen
- Fixed some interface issues with scrolling and clearing store filters
- Raised the time limit for selecting whether to download a resource pack on connect from 5 seconds to 5 minutes
- The in-game invite screen will now refresh when you return to it from the add members screen

**Achievement Screen**

- The new Achievement screens are now enabled by default (Except in VR, on PS4, or on touch devices with narration enabled)
- Removed the input legend of the Achievement page Summary panel when narration is enabled
- Fixed an issue where the scrollbar could be hidden behind the input legend
- Fixed achievement details page getting its content hidden behind the Input legend
- Updated size of achievement reward frame
- Updated frame art for locked achievements

**Commands** 

- Teleport command now correctly aligns your rotation with the destination entity ([MCPE-35979](https://bugs.mojang.com/browse/MCPE-35979))
- Selector argument options can again be seen and auto-completed correctly after specifying one ([MCPE-59794](https://bugs.mojang.com/browse/MCPE-59794))
- Spawn events now show as suggestions for the '/summon' command ([MCPE-101112](https://bugs.mojang.com/browse/MCPE-101112))
- 'SendCommandFeedback' no longer prevents display of outgoing messages ([MCPE-95217](https://bugs.mojang.com/browse/MCPE-95217))
- Multiple '/tickingarea add' or '/tickingarea remove' commands performed during the same tick will no longer result in inaccurate messages about the number of ticking areas in use
- Players can no longer overrun the maximum number of standalone ticking areas in use by adding them all in the same tick
- Added stop action to the '/screenshake' command
- Score values on the scoreboard now align to the right of the table ([MCPE-64973](https://bugs.mojang.com/browse/MCPE-64973))
- The '/setblock' command now supports setting the connected state for Soul Lanterns ([MCPE-89609](https://bugs.mojang.com/browse/MCPE-89609))
- The '/setblock' command now supports setting the rotation state for the chain block ([MCPE-105912](https://bugs.mojang.com/browse/MCPE-105912))
- Fixed an issue that preventing player interaction after using the '/clone' command on a double chest block ([MCPE-109119](https://bugs.mojang.com/browse/MCPE-109119))
- Using the '/clone' command to clone a block of the same type is no longer treated as a failed operation ([MCPE-83352](https://bugs.mojang.com/browse/MCPE-83352))  
    

**For Map Makers and Add-On Creators:**

**Updated Template Packs  **

- Updated templates for 1.16.210 with new resources, behaviors, and documentation are available for download
  - Resource Pack Template: [aka.ms/resourcepacktemplate](https://aka.ms/resourcepacktemplate)
  - Behavior Pack Template (Includes documentation): [aka.ms/behaviorpacktemplate](https://aka.ms/behaviorpacktemplate)
- Added the "fogs" folder to the Resource Pack template
- Added Fog documentation

**Fixes**

- Horses, Donkeys, Mules, Skeleton Horses, and Zombie Horses can now properly be given custom names, and identified using their respective "runtime_identifier"
- Improved performance for actors using 'TemptGoal'
- Zombie villagers spawned from zombie spawners on Marketplace worlds that were created after version 1.11 now correctly spawn as V2 zombie villagers. When cured, they will now correctly turn into V2 villagers
- Fixed upgrade path for 'format_version' 1.13.0 boats to be properly upgraded to 1.16.100, which resolves a bug where boats templated worlds with a version lower than 1.16.100 had no gravity
- Documentation for Bedrock Server Commands has been updated to show the correct commands for permission reloading and listing ([BDS-2341](https://bugs.mojang.com/browse/BDS-2341))
- Structure blocks no longer auto-save data when structure name text box is deselected ([MCPE-101055](https://bugs.mojang.com/browse/MCPE-101055))
- Entities that use material state "Blending" now render correctly behind transparent parts
- The scoreboard data of an entity is no longer removed if the entity is being teleported to an unloaded area of the world
- Custom blocks now can only drop default state when broken, even with Silk Touch

**Technical **

- Structures can now be deleted from the saved structure list using the new '/structure delete \<name\>' command
- Added new slash command options for '/setblock', '/fill', and '/clone' commands for passing in a list of block states to set on the block being spawned
- A boolean parameter called "ignore_game_mode" has been added for the block event response "decrement_stack", set to false by default. Thus "decrement_stack" no longer decreases the item stack when playing in Creative by default
- Changing 'RideableComponent' property "rotate_rider_by" to function for custom mobs
- 'SetBlock' and 'SetBlockAtPos' events now support custom block states ([MCPE-104747](https://bugs.mojang.com/browse/MCPE-104747))
- Attachable items created in 1.16.2 and before will not render for their player in first person. Attachable items created after 1.16.2 will render for their player in first person unless they are armor

**GameTest Framework**

- GameTest is server-side test automation tool that is based on pairing test code with test structures. You can trigger the tests via the '/gametest' command once you have enabled the "Enable GameTest Framework" experimental toggle for a world
- NOTE: GameTest is not functional on console platforms

**Custom Biomes and Blocks**

- Disabled loading of entities in custom biome features
- Fixed UVs of data-driven blocks to not be slightly shrunk, which caused texel warping
- Fixed data-driven blocks being pushed by pistons not working correctly

**Render Offsets Component**

- Simple items, like swords or pickaxes, can have an optional offset applied to them to modify the way they are rendered. Note this component should not be added to an attachable item
- Component Variables:
  - main_hand - An optional object storing optional transform data for 'first_person' and 'third_person' for the player's right hand
  - off_hand - An optional object storing optional transform data for 'first_person' and 'third_person' for the player's left hand
  - first_person - An optional object storing 3 vectors 'position', 'rotation', 'scale' used to build the first person matrix
  - third_person - An optional object storing 3 vectors 'position', 'rotation', 'scale' used to build the third person matrix

**Bedrock Dedicated Server**

- On server side, added protection from semicolon usage in server-name parameter in 'server.properties' config file. If semicolon symbol(s) are used by the user in server-name parameter then any semicolon(s) will be removed to provide correct client-server interactions. Additional comments are added to 'server.properties', which are not allow to use semicolon symbol(s) in server-name parameter
- On server side, added protection from semicolon and symbols illegal for file name usage in level-name parameter in 'server.properties' config file. If semicolon or symbols illegal for file name are used by user in level-name parameter then those symbols will be removed to provide correct client-server interactions and correct level-name parameter usage on server side. Additional comments are added to 'server.properties', which are not allow semicolon or symbols illegal for file name usage in level-name parameter
- On client side, added additional verification and correction for Unconnected Pong packet data to prevent incorrect server parameters parsing and inability of the client to connect to the server as result of that. Unit-tests are added for parsing, additional verification and correction of Unconnected Pong packet data ([BDS-6825](https://bugs.mojang.com/browse/BDS-6825))
