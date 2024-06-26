---
title: Minecraft Beta - 1.13.0.9 (Xbox One/Windows 10/Android)
date: 2019-08-23T13:47:19Z
updated: 2019-08-27T23:21:42Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360032515012-Minecraft-Beta-1-13-0-9-Xbox-One-Windows-10-Android
---

**PLEASE READ before participating in the Minecraft Beta**:

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

## **New Features:**

- Added Wither Rose
- Added Suspicious Stew
- Item Frames can now be placed on the floor and ceiling! 
- Added the Brown Mooshroom
  - Forged by lightning bolts!
- Added abandoned Villages
- Added the Light Block for mapmakers
  - This supports auxiliary data from 0 to 15 for light level
  - The invisible end rod (variant 6) is now auto-upgraded to the new light block
  - Light blocks are supported via /give, /fill, and /setblock.
- Added successful Village Raid celebration 
- Added game credits
  - These can be viewed after defeating the Ender Dragon, and also through a new button found in the Settings menu
- New note block sounds!
  - Added note block functionality for glowstone, haybale, block of emerald, pumpkin, soul sand, block of Iron, bone block, wool, packed ice, clay, and block of gold** **

## **Changes:**

- Squid can now spawn in rivers!
- Added Dead Coral Plants
- Updated and added new Note Block sounds
- Players are now 1.8 blocks tall ([MCPE-31710](https://bugs.mojang.com/browse/MCPE-31710))
- Villagers can now heal if they have bread in their inventory
- Added a "How to Play" section for Structure Blocks** **

## **For Map Makers and Add-On Creators:**

- **New Data Driven Items:**
  - Turtle Lightning interactions are now data driven
  - Pufferfish puffed states are now data driven 
  - Brewing Stand potion recipes are now data driven 
- Changed Breathable, RideTick, and Transformation systems to use ViewedEntityContext
- Added precompiled header targeting for ScriptAPI 
- Significantly increased the maximum “spawnRadius” distance

## **Fixes:**

- **Crashes/Performance**
  - Fixed several crashes that could occur during gameplay
  - The game no longer appears frozen after starting a world 
  - Improved world loading times 
  - Fixed crash from mismatched components/definitions from legacy actor updating 
  - Fixed a crash that could occur when trying to brew certain potions
  - Optimized terrain light calculation
  - Fixed a crash that could occur on low and mid-end Android devices
  - Fixed crash from missing component definition 
  - Fixed a crash that could sometimes occur after a guest tries to join a game through an invite 
  - The game no longer crashes when a split screen player picks up log blocks 
  - Fixed a crashing issue that affected certain worlds when approaching spawn ([MCPE-46686](https://bugs.mojang.com/browse/MCPE-46686))
  - Fixed a crash that could occur after changing the File Storage location 
  - Running commands from a mine cart with command block no longer crashes the game 
  - Fixed a crash that could sometimes occur when trying to double tap on an item in the Beacon UI 
  - Optimised FPS during gameplay on Xbox One
  - Fixed a crash that would occur when dispensing bone meal onto a one-high flower ([MCPE-50760](https://bugs.mojang.com/browse/MCPE-50760))** **
  - Optimised the time taken to load mobs into the world
  - Fixed a crash that was sometimes occurring on some Android and iOS devices with lower memory

<!-- -->

- **General**
  - The "We are being attacked!" and "I've got a bad feeling about this" achievements can now be unlocked ([MCPE-45060](https://bugs.mojang.com/browse/MCPE-45060))
  - Powered rails placed using /fill should now work correctly when powered by Redstone
  - Fixed a download loop after purchasing certain content packs 
  - Using /setblock on a piston base no longer leaves an invisible piston arm 
  - When you delete a global resource pack, it will now remove itself from the active stack 
  - The info at the top of the global resource pack screen will now fit correctly when using various language settings 
  - Tweaked the "Host and Player Options" section in the "How to Play" guide ([MCPE-28976](https://bugs.mojang.com/browse/MCPE-28976))
  - Cloned active mob spawners now have an animated mob when placed ([MCPE-23106](https://bugs.mojang.com/browse/MCPE-23106))
  - Fixed some instances of skin selections not saving and reverting to Steve or Alex ([MCPE-32089](https://bugs.mojang.com/browse/MCPE-32089))
  - Fixed the "Multiplayer Restricted Skin!" error message that would pops up when trying to join a world before the skin had loaded in ([MCPE-48494](https://bugs.mojang.com/browse/MCPE-48494))
  - Fixed an issue that was causing many small and empty Villages to be created when trying to expand an existing Village 
  - Fixed an infinite loading screen when opening the skin picker
  - Fixed a missing armor layer for "Tiny Footprints" Marketplace pack
  - Updated the "How to Play" section about taming cats ([MCPE-43490](https://bugs.mojang.com/browse/MCPE-43490)) 

<!-- -->

- **Gameplay**
  - Fire aspect swords no longer set Creative players on fire ([MCPE-14036](https://bugs.mojang.com/browse/MCPE-14036))
  - Players can now teleport on top of non-full or transparent blocks when eating a Chorus Fruit 
  - Endermen holding Red Sand no longer drop regular Sand when killed ([MCPE-25926](https://bugs.mojang.com/browse/MCPE-25926))
  - Fixed an issue that prevented the player from moving while sneaking on top of shulkers or boats ([MCPE-44644](https://bugs.mojang.com/browse/MCPE-44644))
  - Killing Cod, Salmon, Tropical Fish, and Pufferfish now drops XP
  - Boat paddling animation now matches Java and resynchronizes when paddling stops
  - Lightning now strikes less frequently ([MCPE-38768](https://bugs.mojang.com/browse/MCPE-38768))
  - The LT controller button can now be used to quickly equip or replace armor
  - Players are now able to use items like fishing rods while aiming at nearby mobs
  - Lightning from channelling trident now affects more than a single mob in a small area
  - The player no longer keeps on rowing when opening the inventory UI during boat rides ([MCPE-36522](https://bugs.mojang.com/browse/MCPE-36522))
  - Arrows now destroy armor stands properly ([MCPE-47785](https://bugs.mojang.com/browse/MCPE-47785))
  - Flowers no longer become invisible in flower pots ([MCPE-40806](https://bugs.mojang.com/browse/MCPE-40806))
  - Sneaking on Redstone Ore no longer triggers glow 
  - Breaking an extended piston in Creative no longer drops an item ([MCPE-37492](https://bugs.mojang.com/browse/MCPE-37492))
  - Drinking sound for milk and potions now plays correctly ([MCPE-38340](https://bugs.mojang.com/browse/MCPE-38340))
  - Mobs now drop armour and tools correctly ([MCPE-48891](https://bugs.mojang.com/browse/MCPE-48891))
  - Nether Wart now has a chance to drop more items when broken with Fortune tools ([MCPE-31107](https://bugs.mojang.com/browse/MCPE-31107))
  - Animal breeding cooldowns no longer reset after reloading the world
  - Explosions other than TNT now deal damage in water
  - Parrots can now be picked in creative using pickblock
  - Dispensers now place boats correctly
  - Anvils now take damage correctly after use 
  - Mobs can now enter into boats and minecarts correctly ([MCPE-48596](https://bugs.mojang.com/browse/MCPE-48596))
  - Buttons are now craftable from the recipe book 
  - Fixed player swimming state when exiting water
  - Area of effect clouds such as lingering potions now work correctly if world is set to 'Always Day' ( [MCPE-39595](https://bugs.mojang.com/browse/MCPE-39595))
  - Water being dispensed from a dispenser no longer breaks end portals and gateways
  - The Beacon block can now suffocate players and mobs like other opaque blocks (when being clipped into when using a minecart, for example)
  - The player respawn location now favours shallow water rather than deep water
  - Multiple Ender Dragons will no longer spawn in the End if the player dies or moves away ([MCPE-37590](https://bugs.mojang.com/browse/MCPE-37590))
  - Hoppers now pick up items from above correctly ([MCPE-31393](https://bugs.mojang.com/browse/MCPE-31393))
  - The Renewable Energy achievement will now unlock correctly ([MCPE-39661](https://bugs.mojang.com/browse/MCPE-39661))
  - Pillagers now spawn around Pillager Outposts more frequently ([MCPE-43396](https://bugs.mojang.com/browse/MCPE-43396))
  - Player movement speed is no longer slowed down after stepping onto a Shulker Box from certain blocks 
  - The "Where have you been?" Achievement now unlocks correctly on Android
  - Placing and breaking blocks from within a boat now works correctly 
  - Mobs no longer drop fully repaired items ([MCPE-45953](https://bugs.mojang.com/browse/MCPE-45953))
  - End Gateway Portals can no longer generate on the main Obsidian platform in the End
  - The locator map marker now points in the correct direction when riding a boat ([MCPE-50512](https://bugs.mojang.com/browse/MCPE-50512))
  - Falling snow layers no longer breaks blocks in Redstone contraptions ([MCPE-49773](https://bugs.mojang.com/browse/MCPE-49773))
  - Players now receive stored XP from furnaces correctly ([MCPE-47324](https://bugs.mojang.com/browse/MCPE-47324))
  - Maps are now drawn more quickly when exploring, meaning the "Map Room" achievement now unlocks more consistently ([MCPE-27720](https://bugs.mojang.com/browse/MCPE-27720)) 

<!-- -->

- **Mobs**
  - Entity hit and collision boxes no longer exist during mob death animations ([MCPE-9999](https://bugs.mojang.com/browse/MCPE-9999))
  - Wither Skeletons are no longer affected by the Wither Effect ([MCPE-46317](https://bugs.mojang.com/browse/MCPE-46317))
  - Foxes now sleep and find cover during thunderstorms
  - Mobs and entities are no longer slowed when walking one block above ice
  - Baby zombies are now able to ride zombie pigmen ([MCPE-20163](https://bugs.mojang.com/browse/MCPE-20163))
  - The Wither no longer runs away from the player after being spawned 
  - Fixed the held sword position for Vex mobs
  - The Phantom wing flapping animation is faster now ([MCPE-42935](https://bugs.mojang.com/browse/MCPE-42935))
  - Endermen are correctly affected by invisibility effect when applied ([MCPE-44492](https://bugs.mojang.com/browse/MCPE-44492))
  - Parrots can now fly over fences and walls
  - Drowned on land now attack based on brightness levels rather than time of day 
  - Mobs standing on slabs are no longer immune to sunlight damage after reloading the world ([MCPE-32822](https://bugs.mojang.com/browse/MCPE-32822))
  - Witches no longer spawn in 1.8 high gaps ([MCPE-45935](https://bugs.mojang.com/browse/MCPE-45935))
  - Cured Zombie Villagers now keep their trade level
  - Zombies no longer become stuck on doors when pathfinding
  - The parrot dancing animation is the correct speed now ([MCPE-48356](https://bugs.mojang.com/browse/MCPE-48356))
  - Jockeys no longer get stuck trying to move to unreachable mounts 

<!-- -->

- **Blocks**
  - Barrier blocks no longer stop grass growth
  - Farmland blocks now prevent grass growing underneath  

<!-- -->

- **Items**
  - Turtle Egg items now have the same 2D icon as Java 
  - Leaves collected with silk touch now stack correctly ([MCPE-32347](https://bugs.mojang.com/browse/MCPE-32347))
  - Trapdoor items now have the correct inventory icon textures ([MCPE-44214](https://bugs.mojang.com/browse/MCPE-44214))
  - Six-sided wood block variants can now be smelted or used as furnace fuel 
  - Grass Path block is no longer missing from the creative inventory
  - Items dropped from breaking blocks underwater now show bubbles
  - Damaged Elytra now have their own texture
  - Fixed an issue that prevented certain items not being suggested in the recipe book correctly 
  - Items cooked on the campfire now stack together correctly ([MCPE-47684](https://bugs.mojang.com/browse/MCPE-47684)) 

<!-- -->

- **Graphical**
  - The paperdoll model now properly reloads animations when the app suspends and resumes 
  - The player model is now visible again while sleeping on a bed 
  - Improved the texture for the stonecutter with non-fancy graphics ([MCPE-42487](https://bugs.mojang.com/browse/MCPE-42487))
  - Fixed shield block animation in third person view
  - Iron bars no longer lose some of their textures when surrounded by other bars ([MCPE-47324](https://bugs.mojang.com/browse/MCPE-47324))
  - Fixed the smooth player sneaking animation ([MCPE-49586](https://bugs.mojang.com/browse/MCPE-49586))
  - The screen now fades to black when sleeping in a bed
  - Leads rendered in the structure block UI will no longer stretch really far away
  - Added correct hue to the Ender Dragon's death animation 

<!-- -->

- **User Interface**
  - Fixed incorrect tooltip text showing for various potions 
  - Keyboard inputs now work correctly when the game loads out of window focus
  - Fixed HUD positioning after sleeping on VR immersive mode 
  - Fixed the "Open Chat" message for touch screen devices 
  - Flight controls will no longer show when sleeping in a bed in creative ([MCPE-44928](https://bugs.mojang.com/browse/MCPE-44928)) 

<!-- -->

- **Commands**
  - Pistons with data values 6 and 7 can no longer be placed using slash commands ([MCPE-21558](https://bugs.mojang.com/browse/MCPE-21558))
  - Using the /clear @p item now clears correctly auxiliary values 
  - Players can no longer use the /spawnpoint command in the Nether dimension
  - Using the /replaceitem command now works correctly with Barrels ([MCPE-48184](https://bugs.mojang.com/browse/MCPE-48184))
  - The /clear command now works correctly with damageable items 
  - Running the "/clear" command message now shows correct amount of items removed ([MCPE-34750](https://bugs.mojang.com/browse/MCPE-34750))
  - Carpet is now removed correctly when using the "/clear" command 

<!-- -->

- **Add-Ons and Script Engine**
  - Fixed the death override event firing twice when leaving world from the death screen
  - Fixed \`minecraft:scale\` component failing to scale certain Actor models
  - Running the "tick_world" component now removes ticking areas correctly and consistently 
  - Fixed double damage events being sent when mobs are hurt by non-magic
  - Behaviour Pack animations now run correctly when set
  - Timer component now works on projectiles
  - "minecraft:spell_effects" no longer trigger a second time incorrectly
  - Fixed player entity components that were not getting added
  - Added stone slab aliases to allow backwards compatibility on Marketplace maps
