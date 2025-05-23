---
title: Minecraft - 1.10.0 (Bedrock)
date: 2019-03-15T04:56:24Z
updated: 2019-03-19T17:01:15Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360025059512-Minecraft-1-10-0-Bedrock
---

19 March 2019  
  

**Highlights from the 1.10 Update:**

- Shields have arrived!
- New features including the Texture Update, crossbows, lanterns, and the loom
- Many experimental features coming in the Village & Pillage Update (1.11)
- The ability to create new entities using Add-Ons
- Several gameplay tweaks
- Hundreds of bug fixes

**New Features:**

- **Shields! Shields! Shields!**
  - A long-requested community feature has made its way to Minecraft
  - Shields can be used to block enemy attacks
  - Sneaking activates the shield when equipped in either hand

<!-- -->

- **Texture Update**
  - Many items, blocks, and more have fresh new textures!
  - More updates to textures and tweaks will be arriving in the upcoming 1.11 update

<!-- -->

- **Crossbow weapon with new enchantments**
  - Multishot
  - Piercing
  - Quick Charge

<!-- -->

- **New Wood blocks and Stripped Wood blocks**
  - Known to many players as Bark blocks
  - Existing wood blocks have been renamed to Logs and Stripped Logs

<!-- -->

- **Lantern**
  - A new light source that can be placed above or below blocks

<!-- -->

- **Lectern**
  - Place a Book and Quill or Written Book on the lectern, which will allow multiple players to read it together
  - A Book and Quill can be read, but not edited when placed on a lectern
  - Redstone functionality will come in a later update

<!-- -->

- **Loom**
  - A much easier method to create banners!
  - The Loom only uses one dye to apply a pattern. It can also use Banner Patterns to apply special patterns
  - Banner Patterns can be crafted using Paper and various items
  - Pressing the help button links to the relevant How to Play section for more information

<!-- -->

- **Jellie**
  - Winner of the community cat contest!
  - A new cat variant that can be found in villages

<!-- -->

- **Pillagers**
  - A new illager mob that engages players and villagers with ranged attacks
  - In the 1.10 update, pillagers are only available in Creative Mode
  - Further functionality and spawning in Survival Mode will be released in the 1.11 update

<!-- -->

- **New Achievement: Fruit on the Loom**
  - Make a banner using a Enchanted Apple Stencil (20G)

**Current Experimental Features:**

(Work in progress features that are only available when Experimental Gameplay is enabled in world settings)

- **New Villages**
  - Many new building types and enhanced village generation
  - Villagers have new clothing to indicate their level, profession, and biome
  - Villagers can now take on a new profession when near a job site block
  - Villagers now have their own schedules throughout the day
  - Villagers now mingle together around bells in a village
  - Villagers now sleep in beds
  - Improved villager pathfinding
  - Added Mason and Nitwit villagers
  - Villagers will attempt to find a door when it rains during the day, but will navigate to their bed at night
  - Villagers now have a visual based trading system and will hold up an item they wish to trade if the player is holding something they want
  - Zombie Villagers now have biome-specific and profession skin layers
  - Bells may spawn in villages, with more functionality coming in a future update

<!-- -->

- **Village Job Sites** (We've added in the basic blocks in Experimental Gameplay, which can be used for decoration for now. Full functionality will be added at a later date)
  - Cartography Table
  - Fletching Table
  - Grindstone
  - Barrel
  - Smithing Table
  - Smoker
  - Blast Furnace
  - Composter
  - Stonecutter

<!-- -->

- **Wandering Trader**
  - A villager mob that will appear at a village's gathering site periodically and stays for a period of 2-3 game days
  - This trader offers items from a wide variety of different biomes, random dyes, and other rare materials
  - Accompanied on their journey by two fancy llamas!

<!-- -->

- **Sweet Berries**
  - A new source of food
  - Sweet Berry Bushes can be found in Taiga biomes
  - Watch out for thorns!

<!-- -->

- **Pillager Outpost**
  - Outposts generate in the same biomes as villages, and Pillagers will respawn around the tower
  - Clear them out and score some loot

<!-- -->

- **Illager Beast**
  - A powerful, new enemy mob
  - Animations and full behavior will be added in the 1.11 update
  - Will be renamed to Ravager in the 1.11 update

<!-- -->

- **Campfire**
  - A new light source to make your villages look extra cozy
  - Works great as a fireplace in a home, with no fire spread!
  - Cooking functionality and smoke particles will be added in a future update

<!-- -->

- **Bamboo Jungle**
  - Bamboo is now generated in Jungles and more densely in the new Bamboo Jungle biome

<!-- -->

- **Minecraft Script Engine**
  - The Minecraft Script Engine uses the JavaScript language
  - Several bug fixes and updates are listed at the end of this changelog
  - Scripts can be written and bundled with Behavior Packs to listen and respond to game events, get and modify data in components that entities have, and affect different parts of the game.
  - See the [Minecraft Wiki](http://aka.ms/minecraftaddons) for reference guides and sample packs
  - This functionality is currently only available on Windows 10 PCs when using Experimental Gameplay

**Changes:**

- Placing a wet sponge in the nether immediately dries it out
- Decaying leaves now have a chance of dropping sticks
- Chorus Fruit Flowers now break when struck by arrows 
- Added Dead Bush as a furnace fuel 
- Rabbit Stew and Beetroot Soup now have shapeless crafting recipes
- Creepers now drop music discs when killed by strays 
- Dispensers with shears can now shear sheep 
- Undyed glass panes and white carpet can now be dyed directly in the crafting table 
- Improvements to Operator status and permission settings, with the added option to enable cheats or not

**For Map Makers and Add-On Creators:**

- Updated templates for 1.10.0 with new resources and behaviors can be downloaded from [aka.ms/minecraftaddons](https://feedback.minecraft.net/hc/en-us/articles/aka.ms/minecraftaddons)
- **New Add-Ons Functionality**
  - New entities can now be created without replacing existing entities. See more information on the [Entity Components Documentation](https://minecraft.gamepedia.com/Bedrock_Edition_entity_components)
  - Particle effects can now be created and edited in resource packs. See the [Particles Documentation](https://minecraft.gamepedia.com/Bedrock_Edition_Particles_Documentation) for more details and examples
  - Animations have been data-driven and can now be created and edited. See the [Animation Documentation](https://minecraft.gamepedia.com/Bedrock_Edition_Animation_Documentation) for more details
- Mob events and behavior can be scheduled using the 'minecraft:scheduler' component 
- Resource packs are now separate from world templates and can be updated independently in existing worlds 
- Added default parenting to the Evoker nose, in line with over villager-derived mobs

**Fixes:**

- **Crashes/Performance**
  - Fixed several crashes that could occur during gameplay 
  - Fixed several crashes that could occur when loading the game 
  - Fixed a crash that could occur when repeatedly attempting to cancel joining a multiplayer game 
  - Fixed a crash that could occur when rejoining the game in The End dimension 
  - Fixed a crash that could occur when entering a portal on some servers 
  - Resource packs that are nested in an extra folder no longer cause the game to crash 
  - Fixed a crash that could occur when adding a resource pack with a missing pack icon 
  - Stacking slabs to make a double slab no longer crashes the game 
  - Fixed a crash that could occur on Xbox One if a player was not signed in correctly 
  - Fixed a crash that could occur when closing a world and reentering it on Xbox One 
  - Fixed a crash that could occur when using a jukebox on Nintendo Switch 
  - Fixed a crash that could occur when downloading or copying a large world on Nintendo Switch 
  - Fixed a crash when trying to launch the marketplace packs "City Cars" and "Mineville Film Studios" on mobile devices 
  - Fixed a crash that could happen after running scripts for a long period of time 
  - Fixed a crash that could occur when loading large world templates 
  - Optimized particles to improve performance 
  - Looping UI animations no longer increase memory usage over time 
  - Removing ticking areas from the game now correctly frees up used memory 
  - Fixed a scripting crash that could occur when using 'SpawnParticleInWorld' events 

<!-- -->

- **General**
  - Fixed another issue that could cause the game to sometimes not load past the Minecraft splash screen on some devices ([MCPE-35078](https://bugs.mojang.com/browse/MCPE-35078))
  - Players are now informed if they are disconnected from Xbox Live when the Xbox One console is resumed from standby
  - Various fixes and improvements to the Marketplace sorting and search results 
  - Fixed an issue on Xbox One that would disable LAN games when the player did not have multiplayer permissions 
  - Fixed a bug with converted worlds on Nintendo Switch that prevented cross-platform multiplayer ([MCPE-34641](https://bugs.mojang.com/browse/MCPE-34641))

<!-- -->

- **Gameplay**
  - Players can once again travel through End gateway portals without suffocating and no longer encounter world loading issues as a result ([MCPE-41533](https://bugs.mojang.com/browse/MCPE-41533), [MCPE-40538](https://bugs.mojang.com/browse/MCPE-40538))
  - Player position is now accurately saved when exiting and rejoining a world
  - Lightning no longer has a downward area of effect when hitting blocks, so will no longer strike mobs sheltering underneath blocks
  - The descend button now works correctly when underwater and using touch controls 
  - Fixed a bug where players could respawn some distance away from their beds ([MCPE-39261](https://bugs.mojang.com/browse/MCPE-39261))
  - Fixed a bug where lava could hurt a player through block corners ([MCPE-37726](https://bugs.mojang.com/browse/MCPE-37726))
  - The re-center button on Minecraft VR has been mapped to Y now instead of X 
  - Players using Oculus Rift can no longer fly in Survival mode after swimming ([MCPE-39833](https://bugs.mojang.com/browse/MCPE-39833))

<!-- -->

- **World Generation**
  - Trapdoors in shipwrecks are now correctly rotated 
  - Snow layers generate around grass and flowers again in snow biomes ([MCPE-38018](https://bugs.mojang.com/browse/MCPE-38018))
  - Strongholds now generate with the correct stair variants again ([MCPE-39380](https://bugs.mojang.com/browse/MCPE-39380))
  - Mutated Birch Forest biomes now generate with extra tall Birch trees again ([MCPE-29698](https://bugs.mojang.com/browse/MCPE-29698))
  - The correct amount of white terracotta now generates in Mesa biomes

<!-- -->

- **Mobs**
  - Reduced the number of Drowned mobs that can spawn in an area ([MCPE-34032](https://bugs.mojang.com/browse/MCPE-34032))
  - Passive mobs now spawn on the correct block types ([MCPE-39727](https://bugs.mojang.com/browse/MCPE-39727))
  - Turtles no longer levitate above the ground 
  - Damage cooldown no longer hinders other mob attacks 
  - Wither skeletons and Vex mobs can now be renamed with nametags ([MCPE-20701](https://bugs.mojang.com/browse/MCPE-20701))
  - Fixed the pathfinding for zombies chasing villagers inside buildings ([MCPE-37424](https://bugs.mojang.com/browse/MCPE-37424))
  - Fixed the Wither's ranged and swoop attacks ([MCPE-39773](https://bugs.mojang.com/browse/MCPE-39773))
  - Skeletons once again attack iron golems 
  - Cats can now be healed by feeding them fish 
  - Cats are no longer tempted by food when they are too far from the player 
  - Fixed an issue with the sword held by the Vex mob 
  - Fixed sleep goal so mobs can get in beds that have blocks on the sides
  - Mobs can no longer destroy paintings if Mob Griefing is disabled ([MCPE-38916](https://bugs.mojang.com/browse/MCPE-38916))

<!-- -->

- **Blocks**
  - Bamboo saplings no longer destroy blocks above them as they grow ([MCPE-39854](https://bugs.mojang.com/browse/MCPE-39854))
  - 'Monster Egg' blocks are now named 'Infested' blocks to match Java Edition 
  - Infested Bricks mined with silk touch now drop as its non-infested variant 
  - It is now possible to climb through snow layers placed on top of scaffolding ([MCPE-39324](https://bugs.mojang.com/browse/MCPE-39324))
  - Hanging banners no longer show as floor standing banner variants ([MCPE-39507](https://bugs.mojang.com/browse/MCPE-39507))
  - Scaffolding no longer gets left hanging unsupported when being placed rapidly ([MCPE-38338](https://bugs.mojang.com/browse/MCPE-38338))
  - Horizontal scaffolding extensions can now be placed over non-solid blocks correctly ([MCPE-39296](https://bugs.mojang.com/browse/MCPE-39296))
  - Fixed a bug where kelp would grow in horizontal flowing water ([MCPE-37155](https://bugs.mojang.com/browse/MCPE-37155))

<!-- -->

- **Items**
  - Items can no longer be duplicated in the crafting grid ([MCPE-40253](https://bugs.mojang.com/browse/MCPE-40253))
  - Fixed an exploit that allowed players to gain unlimited items from the recipe book ([MCPE-41905](https://bugs.mojang.com/browse/MCPE-41905))
  - The new dye types can now be used to dye Shulker mobs ([MCPE-40279](https://bugs.mojang.com/browse/MCPE-40279))**  **

<!-- -->

- **Graphical**
  - Players on split-screen no longer have limited visibility underwater ([MCPE-39539](https://bugs.mojang.com/browse/MCPE-39539))
  - Fixed a bug that could cause missing textures if the player suspended the game while it is still loading 
  - Fixed an issue that could cause lighting issues in chunks when flying around
  - Pandas eating bamboo now show correctly colored food particles ([MCPE-38285](https://bugs.mojang.com/browse/MCPE-38285))
  - Food held by pandas is now sized, positioned, and textured correctly ([MCPE-39061](https://bugs.mojang.com/browse/MCPE-39061))
  - Upside-down Shulkers now have the correct opening animation ([MCPE-40110](https://bugs.mojang.com/browse/MCPE-40110))
  - Graphics no longer become corrupted when disabling Texel Anti-Aliasing on Nintendo Switch ([MCPE-34820](https://bugs.mojang.com/browse/MCPE-34820))
  - Colored beacon beam textures no longer appear compressed 
  - Mobs no longer spawn with heart particles 
  - Weapons held by armor stands are now the correct size ([MCPE-39064](https://bugs.mojang.com/browse/MCPE-39064))
  - Fixed Skeleton melee attack animation 
  - Firework Stars no longer appear black in the Creative inventory 
  - Fixed animations for cow and parrot mobs 
  - Ender dragon attacks now show a particle trail 
  - Cornflowers now render correctly in item frames 
  - Existing armour stands no longer turn white 
  - Fixed the spider leg animation in the Dwarven Mining Company marketplace map 
  - Fixed Wither Skeleton model geometry issue that was affecting some Marketplace content 
  - Fixed the head rotation of Pigmen when non-standard texture packs are used ([MCPE-40629](https://bugs.mojang.com/browse/MCPE-40629))

<!-- -->

- **User Interface**
  - Menu buttons no longer stay highlighted after being selected ([MCPE-37640](https://bugs.mojang.com/browse/MCPE-37640))
  - Worlds no longer show single player only warning message when multiplayer is enabled ([MCPE-39194](https://bugs.mojang.com/browse/MCPE-39194))
  - Texture packs applied to a freshly created world are now displayed in the active list 
  - Global resource packs no longer show in the active packs list if they are not applied to a specific world 
  - The 'Unlock Template World Options' popup no longer has a placeholder message 
  - Fixed an issue with the black and pink missing texture icon that would sometimes appear in the marketplace 
  - Players are prompted to redownload packs if they have been applied to a world but removed from the cache 
  - Players who are disconnected while downloading a multiplayer pack no longer get stuck on the saving world screen 
  - Fixed an issue that could cause the player to get stuck on the 'Converting World' screen if the game is suspended 
  - Enabling 'Touch only affects the hotbar' on Nintendo Switch now works as expected: ([MCPE-38614](https://bugs.mojang.com/browse/MCPE-38614))
    - Controller sensitivity setting (touching the screen no longer interferes with controller movement)​
    - Removed increased build distance in creative including place/mine tooltips​
    - When the last hotbar slot selected, touching the screen no longer switches to 8th slot
  - Fixed the ability to unblock players from Realms on the Members list for pages two and above

<!-- -->

- **Commands**
  - Giving a Cobblestone Wall variant with commands no longer crashes the game ([MCPE-41657](https://bugs.mojang.com/browse/MCPE-41657))
  - Chest minecarts now drop their contents if destroyed with the /kill command 
  - Multiple commands run from Functions now run from the correct point of execution ([MCPE-38983](https://bugs.mojang.com/browse/MCPE-38983), [MCPE-39785](https://bugs.mojang.com/browse/MCPE-39785))
  - Players no longer receive command feedback when cheats are disabled ([MCPE-39590](https://bugs.mojang.com/browse/MCPE-39590))
  - Fixed an issue related to scoreboard not showing the correct entries 
  - Using scoreboard selectors no longer adds extra characters to player names 
  - Scoreboards now work correctly with custom named entities 
  - Scoreboard data is now saved more accurately when exiting a world 
  - Various fixes and improvements to the randomTickSpeed function**  **

<!-- -->

- **Add-Ons / Script Engine**
  - Renamed blocks in resource packs now keep their custom names 
  - Packs missing 'experimental_custom_ui' don't allow loading UI any more 
  - Script queries no longer show error messages when detecting dropped item entities ([MCPE-40437](https://bugs.mojang.com/browse/MCPE-40437))
  - 'minecraft:look_at' component now has consistent naming between scripting and JSON 
  - The scripting event 'entity_created' will now fire correctly 
  - Fixed an issue with the scripting event 'isValidEntity' not working as expected 
  - Fixed the 'damage_sensor' scripting component that was not working as expected 
  - Scripting can now be used to attach particles to mobs correctly 
  - Fixed issue of region filters not working if inside a custom spawn event 
  - Renamed the 'player_attacked_actor' scripting event to 'player_attacked_entity' 
  - Scripting 'isValidEntity' now correctly checks for valid entities only 
  - Fixed incorrect results for 'hasComponent' on some entity components
  - Players without scripting enabled now see an appropriate message if they try and join an incompatible server that has scripting enabled 
  - Updating a player's position with scripting now correctly syncs with the player 
  - Creating actors via script now avoids the spawning logic. This prevents hard coded logic like ocelots spawning along with baby ocelots 
  - Improved the message wording for players who get disconnected due to unsupported scripts 
  - Renamed Views to Actor/Entity Queries
  - Added sound events
  - Added Event Data to 'load_ui' 
    - Custom UIs can now be made like regular in-game UI screens
  - Added 'Global Objects'
  - Refactored JavaScript object registration
  - Added ability to enable and disable scripting error and warning logging

If you missed a previous update, check out [aka.ms/MCChangelogs](https://aka.ms/MCChangelogs) for a full list of updates.
