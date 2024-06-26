---
title: Minecraft - Village & Pillage - 1.11.0 (Bedrock)
date: 2019-04-22T15:25:19Z
updated: 2019-04-23T15:55:54Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360026977492-Minecraft-Village-Pillage-1-11-0-Bedrock
---

Posted April 23, 2019

**Village:**

- **Updated Villages**
  - Many new building types and enhanced village generation
  - Biome specific architecture for plains, desert, savannah, and taiga

<!-- -->

- **New Villagers**
  - Villagers have new clothing to indicate their level, profession, and biome
  - Added Mason and Nitwit villagers
  - Villagers now sleep in beds
  - Villagers now visit their job sites during the day and go home at night
  - Greatly improved villager pathfinding
  - Villagers in existing worlds will convert to new villagers (if they are not part of a template world)
  - Zombie Villagers now have biome-specific and profession skin layers

<!-- -->

- **Village Job Sites**
  - Villagers can now take on a new profession when near a job site block
  - While villagers claim these sites, they also have functions for players
  - **Cartography Table **- Provides an easier way to copy and enlarge maps. Maps can be locked by using glass panes
  - **Grindstone** - Used to repair weapons and tools, plus disenchanting
  - **Barrel** - Stores items like a chest but can still be opened with blocks on top of it
  - **Smoker** - Cooks food much faster than a furnace
  - **Blast Furnace** - Faster ore smelting
  - **Composter** - Adding enough crops will produce bone meal
  - **Stonecutter** - Easy crafting for stone and cobblestone items
  - **Smithing Table and Fletching Table** - Functionality coming in a later update

<!-- -->

- **Villager Trading**
  - Added brand new villager trades (169044)
  - Villagers now have a visual based trading system and will hold up an item they wish to trade if the player is holding something they want
  - When villagers make trades, they gain experience. When they gain enough experience, they level up. Leveling up unlocks new trades
  - Villagers will resupply their trades when arriving at their job site (172559)

<!-- -->

- **Wandering Trader**
  - A villager mob that will appear at a village's gathering site periodically and stays for a period of 2-3 game days
  - This trader offers items from a wide variety of different biomes, random dyes, and other rare materials
  - Accompanied on their journey by two fancy llamas!

<!-- -->

- **Bells**
  - When rung, all villagers will run into their houses
  - Bells ring when players interact with them or are powered by redstone  
      

**Pillage:**

- **Pillager Outposts**
  - The new tower hangout for pillagers that generate in the same biomes as villages
  - Pillagers will respawn around the tower
  - Clear them out and score some loot!
- **Illager Captain**
  - Can be found holding a banner in pillager outposts
  - The player that kills a captain will be given the Bad Omen effect
- **Raids**
  - When a player enters a village with Bad Omen, a raid will be triggered
  - Pillager enemies will attack a village in waves
  - Players that successfully defend a village from a raid will receive the Hero of the Village effect, giving a steep discount on trades with villagers
- **Ravager**
  - A powerful, new enemy mob found in illager patrols and during village raids
  - When running, it can destroy some blocks like crops so watch out!
  - Can be ridden into battle by illagers
- **Pillager Patrols**
  - Groups of illagers, pillagers, and ravagers can be found patrolling the overworld

**New Features:**

- **Campfire**
  - A new light source to cozy up your village
  - Works great as a fireplace in a home, with no fire spread to worry about
  - Throw some food on it and become a campfire cooking pro!

<!-- -->

- **Sweet Berries**
  - A new source of food
  - Sweet Berry Bushes can be found in Taiga biomes
  - Watch out for thorns!

<!-- -->

- **Bamboo Jungle**
  - Bamboo is now generated in Jungles and more densely in the new Bamboo Jungle biome

<!-- -->

- **New Achievements**
  - Plethora of Cats - Befriend twenty stray cats (20G)
  - Kill the Beast! - Defeat a Ravager (30G)
  - Buy Low, Sell High - Trade for the best possible price (50G)
  - Disenchanted - Use a Grindstone to get experience from an enchanted item (20G)
  - We're being attacked - Trigger a Pillager Raid (20G)
  - Sound the Alarm! - Ring the bell with a hostile enemy in the village (20G)
  - I've got a bad feeling about this - Kill a Pillager Captain (20G)

<!-- -->

- **Roaming Skin Choice**
  - When choosing a skin from a skin pack, the selected skin will now be selected automatically on other Bedrock devices using the same account
  - Some skin packs may not be eligible for roaming selection

<!-- -->

- **Accessibility Features**
  - Text to Speech can now be enabled to read in-game chat
  - UI Screen Reader can be enabled to say the name of interface controls and their current state
  - Accessibility features can be enabled in Settings  
      

**Changes:**

- **Note on World Generation:** In order to deliver the coolest generated villages possible, some world seeds may have villages generate in different areas than they used to before this update
- A fresh new batch of seeds are now available in the Seed Picker when creating a new world
- Added even more new textures to blocks and items, including stained glass
- Increased the amount of scaffolding that can be placed out from its initial support
- Changes to the way cats spawn in villages:
  - Cats now respawn based on number of beds in the village
  - The number of cats = 1/4 the number of beds
  - Cat total caps at 10 cats per village
- Lecterns now emit a redstone signal when turning pages
- Darkened portions of the game's menus to provide stronger contrast for accessibility  
    

**Fixes:**

- **Crashes/Performance**
  - Improved the performance when opening the player inventory with the crafting recipes open ([MCPE-41772](https://bugs.mojang.com/browse/MCPE-41772), [MCPE-41166](https://bugs.mojang.com/browse/MCPE-41166), [MCPE-27167](https://bugs.mojang.com/browse/MCPE-27167))
  - Fixed several crashes that could occur during gameplay
  - Fixed a crash that occurred when using invalid characters on signs ([MCPE-41671](https://bugs.mojang.com/browse/MCPE-41671))
  - Fixed a crash that could occur when enabling Texel Anti-Aliasing
  - Fixed a crash that could occur when spawning a Vile Spider from the MINECON Add-On pack
  - Fixed a crash that could occur on Bedrock Dedicated Server
  - Using pick block on a nether portal no longer causes the game to crash ([MCPE-41735](https://bugs.mojang.com/browse/MCPE-41735))
  - Giving the player a cobblestone wall variant no longer crashes the game ([MCPE-41657](https://bugs.mojang.com/browse/MCPE-41657))
  - Fixed a crash that could occur when selecting Save & Quit on Nintendo Switch
  - Fixed a crash that could occur when signing in or out of Xbox Live on Xbox One
  - Fixed a crash that could occur when resuming gameplay while connected to a server
  - Fixed a crash that could occur when replacing a world with an unsynced world
- **General**
  - Windows 10 players with Minecraft installed on a different drive no longer get an error message saying that they are out of storage space, unless they are truly out of space ([MCPE-32501](https://bugs.mojang.com/browse/MCPE-32501))
  - The Treasure Hunter Achievement can now be unlocked when using a treasure map in the off-hand slot ([MCPE-33382](https://bugs.mojang.com/browse/MCPE-33382))
  - Global resource packs will now stay applied if you revisit the settings screen after restarting the game, then restarting the game
  - Disabling the Multiplayer Game setting will now apply when the world is packaged as a world template
  - Players on Xbox are no longer prompted to sign into Xbox Live if they have already done so
  - Made further improvements to world saving, to prevent worlds becoming disappearing from the world list
  - Players can view skin selection menu when offline on Nintendo Switch without receiving the internet connection message
  - Nintendo Switch payers can now select the Super Mario skins from the expanded skin pack list while in game
  - Fixed an issue with renewing Realms on Windows 10 ([REALMS-1319](https://bugs.mojang.com/browse/REALMS-1319))
- **Gameplay**
  - Players no longer float around beds while sleeping ([MCPE-41344](https://bugs.mojang.com/browse/MCPE-41344))
  - Players can now climb vines and ladders using the jump button again ([MCPE-40535](https://bugs.mojang.com/browse/MCPE-40535))
  - Fixed players falling through blocks at around 65K blocks on the X or Z axes ([MCPE-39299](https://bugs.mojang.com/browse/MCPE-39299))
  - Players using VR Controllers no longer fly after swimming ([MCPE-39833](https://bugs.mojang.com/browse/MCPE-39833))
  - Players can no longer suffocate in the ground while spawning into the world ([MCPE-42310](https://bugs.mojang.com/browse/MCPE-42310))
  - TNT now knocks back healing players
- **World Generation**
  - Fixed mineshaft generation - no longer generate in a giant cluster and should more closely resemble those found in the Java Edition ([MCPE-28485](https://bugs.mojang.com/browse/MCPE-28485))
  - Mesa Plateau biomes now generate more like those in the Java Edition
- **Mobs**
  - Villagers will actually follow proper etiquette and close doors behind them ([MCPE-41170](https://bugs.mojang.com/browse/MCPE-41170))
  - Mobs can now path their way through waterlogged blocks, such as seagrass ([MCPE-37005](https://bugs.mojang.com/browse/MCPE-37005))
  - Underwater mobs no longer spawn on land ([MCPE-40783](https://bugs.mojang.com/browse/MCPE-40783))
  - Panda eating animation is now faster. Om nom nom! ([MCPE-40743](https://bugs.mojang.com/browse/MCPE-40743))
  - Shulkers now have a chance to drop more shulker shells when killed with looting  ([MCPE-39893](https://bugs.mojang.com/browse/MCPE-39893))
  - Vindicators no longer become passive when renamed ([MCPE-27927](https://bugs.mojang.com/browse/MCPE-27927))
  - Guardians no longer spawn outside water ([MCPE-39941](https://bugs.mojang.com/browse/MCPE-39941))
  - Pandas no longer roll into dangerous blocks
  - Creepers can now spawn in a 1.8 high space, like under trapdoors ([MCPE-24120](https://bugs.mojang.com/browse/MCPE-24120))
  - Skeletons once again turn before shooting
  - Skeleton horses spawned in from earlier versions can be ridden once again ([MCPE-40857](https://bugs.mojang.com/browse/MCPE-40857))
  - Tamed cats now lay on their sides when sleeping on a bed ([MCPE-40726](https://bugs.mojang.com/browse/MCPE-40726))
  - Mobs now rotate correctly after exiting boats ([MCPE-41341](https://bugs.mojang.com/browse/MCPE-41341))
  - Farmer villagers no longer produce infinite amounts of bread ([MCPE-33608](https://bugs.mojang.com/browse/MCPE-33608))
  - Drowned converted from zombies will now attack players
  - Villagers no longer get stuck on lanterns
  - Reduced the range of drowned attacking the nearest player
- **Blocks**
  - Fixed particles not appearing while mining blocks
  - Seagrass can no longer delete blocks above it as it grows ([MCPE-43617](https://bugs.mojang.com/browse/MCPE-43617))
  - XP can now be stored for auto smelters using furnaces, blast furnaces, and smokers
  - Coral plants and sea grass now break when a supporting block is removed
  - Smooth and Chiselled Quartz blocks no longer have directional placement ([MCPE-39074](https://bugs.mojang.com/browse/MCPE-39074))
  - Scaffolding placed over the void now supports the player ([MCPE-38064](https://bugs.mojang.com/browse/MCPE-38064))
  - Using Ctrl + Pick block no longer creates a new bed with extra data attached ([MCPE-42494](https://bugs.mojang.com/browse/MCPE-42494))
  - Surrounded leaves are now the correct color
- **Items**
  - Banners can once again be copied in the crafting grid ([MCPE-42534](https://bugs.mojang.com/browse/MCPE-42534))
  - Fixed some items having invisible bits when placed in item frames ([MCPE-42415](https://bugs.mojang.com/browse/MCPE-42415))
  - Maps once again show underwater terrain differences ([MCPE-40740](https://bugs.mojang.com/browse/MCPE-40740))
  - Smelting stone into smooth stone now gives XP ([MCPE-41551](https://bugs.mojang.com/browse/MCPE-41551))
  - The fishing bobber now floats slightly higher in water ([MCPE-32976](https://bugs.mojang.com/browse/MCPE-32976))
  - Silk touch tools now work correctly right up to their very last use ([MCPE-41789](https://bugs.mojang.com/browse/MCPE-41789))
  - Renamed Firework Stars and Firework Rockets now display their new names
  - Fixed an item duplication issue that involved sticky pistons
  - Leather horse armour is now properly coloured ([MCPE-40124](https://bugs.mojang.com/browse/MCPE-40124))
  - Banners no longer render as wall variants when held ([MCPE-41228](https://bugs.mojang.com/browse/MCPE-41228))
  - Shields held in the off-hand are no longer upside-down ([MCPE-41221](https://bugs.mojang.com/browse/MCPE-41221))
  - Creative players no longer get additional buckets when collecting water or lava ([MCPE-37070](https://bugs.mojang.com/browse/MCPE-37070))
  - Renaming items using an anvil no longer increases the prior work penalty ([MCPE-36931](https://bugs.mojang.com/browse/MCPE-36931))
  - Signs can now be used as fuel in furnaces ([MCPE-35740](https://bugs.mojang.com/browse/MCPE-35740))
  - Chorus fruit now plays the teleport sound after eating it
- **User Interface**
  - Fixed signs not having a text limit, leading to performance issues ([MCPE-42647](https://bugs.mojang.com/browse/MCPE-42647))
  - Items can now be split if they are spread in a crafting grid on touch devices
  - The on-screen keyboard no longer obscures text entry when writing in a book on Xbox One
  - The outline of the saddle item on the horse inventory screen now matches the new saddle texture
  - Fixed the lack of controller tooltip for interacting with the lectern
  - Global resource reset message now appears if the load screen is taking too long on some devices ([MCPE-39045](https://bugs.mojang.com/browse/MCPE-39045))
  - Ratings button for server consumables now shows 'Rate this pack!' instead of the purchase button
- **Commands**
  - Fixed performance issues when using selectors with commands
  - The 'replaceitem' command now takes selector arguments into account when replacing items in the offhand slot
  - Fixed command suggestion icons offset ([MCPE-41169](https://bugs.mojang.com/browse/MCPE-41169))
  - Different cauldron types will no longer overwrite each other in the player's inventory when using the give command
  - End portal blocks no longer drop as items when destroyed using the 'setblock' command ([MCPE-42991](https://bugs.mojang.com/browse/MCPE-42991))
- **Add-Ons and Script Engine**
  - Fixed pivot point changes to Endermen made with Add-Ons
  - A component group is now correctly removed on second activation of 'minecraft:damage_sensor'
  - Target selectors are no longer case-specific
  - Scoreboard scores are no longer saved earlier than other information when exiting a world
  - Leash positions now use vanilla positions if not specified in the pack
  - Renamed blocks in resource packs now keep their custom names
  - Fixed baby Zombie Pigman sword scale with Add-Ons
