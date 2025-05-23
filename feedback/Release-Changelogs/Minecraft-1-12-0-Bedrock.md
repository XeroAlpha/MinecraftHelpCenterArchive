---
title: Minecraft - 1.12.0 (Bedrock)
date: 2019-07-08T23:06:34Z
updated: 2019-07-09T15:18:22Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360030428752-Minecraft-1-12-0-Bedrock
hash:
  script-engine-updates-currently-available-on-windows-10-with-experimental-gameplay-enabled: script-engine-updatescurrently-available-on-windows-10-with-experimental-gameplay-enabled
---

# **Posted:** July 9, 2019

# **Changes:**

- Increased the frequency and volume of the ambient mob sounds made during raids, to make them easier to locate
- Added new Wandering Trader sounds ([MCPE-41191](https://bugs.mojang.com/browse/MCPE-41191))
- Updated the main menu splash text
- Updated the default main menu panorama from Aquatic to Village & Pillage
- The "Store" button on the main menu has been renamed to "Marketplace"
- Realm owners can now set relevant permissions for players invited to their Realm
  - Default settings can be set for all new members entering a Realm
  - The owner can set permissions for an invited player to either visitor, member or operator
  - When resetting a world, or uploading a new world, already set permissions stay in place

# **Fixes:**

- **Crashes**
  - Fixed several crashes that could occur during gameplay
  - Fixed a crash that could occur when launching the game on some Windows 10 devices
  - Fixed a crash that could occur when certain interactive blocks are loading in when joining a Realm (e.g. beds, chests, furnaces)
  - Fixed a crash that could occur when switching players on Xbox One
  - Fixed a crash that could occur when engaging in a fight with an Elder Guardian in an Ocean Monument
  - Fixed a crash that could occur when loading the game
  - Fixed a crash that could occur when throwing an Egg or Snowball ([MCPE-40435](https://bugs.mojang.com/browse/MCPE-40435))
  - Fixed a crash that could occur when trading with a Villager
  - Fixed a crash that could occur when throwing a trident with Loyalty enchantment
  - Fixed a crash that could occur on Nintendo Switch when the game was saving or loading ([MCPE-45862](https://bugs.mojang.com/browse/MCPE-45862))
  - Fixed a crash on Nintendo Switch that could occur when suspending and resuming the game
  - Fixed a crash that could occur when exiting the game
  - Fixed a crash that could occur when signing into Xbox Live
  - Fixed a crash that could occur when choosing a skin on first launch of the game
  - Fixed a Marketplace issue that could result in the game getting stuck or crashing when loading in items
  - Fixed a crash that could occur when the game was checking for previously downloaded content

<!-- -->

- **Performance**
  - Made further performance improvements when opening inventory screens ([MCPE-27167](https://bugs.mojang.com/browse/MCPE-27167))
  - Made several performance improvements related to various UI screens and interactions
  - Significantly reduced bandwidth usage by allowing the client to reuse chunks it has already seen
  - Improved chunk loading performance in multiplayer
  - Improved performance around new villages and villager job sites
  - Several other performance improvements, included some related to mob AI pathfinding
  - Frosted ice blocks no longer drops performance while they’re melting ([MCPE-39698](https://bugs.mojang.com/browse/MCPE-39698))
  - Endermen teleporting particles no longer cause consistent performance drops, especially during boss fights
  - Reduced the amount of memory required to load textures
  - Cached resource packs no longer decrease performance on Nintendo Switch ([MCPE-36976](https://bugs.mojang.com/browse/MCPE-36976))

<!-- -->

- **General**
  - Removed an unnecessary Xbox Live sign-in notification
  - Fixed an issue where consuming the last item in a stack to unlock an achievement could cause the achievement not to unlock
  - The Haggler achievement once again unlocks when requirements are met
  - The Zombie Doctor achievement now unlocks when curing a zombie villager ([MCPE-46271](https://bugs.mojang.com/browse/MCPE-46271))
  - Marketplace resource packs are now immediately applied after downloading in the world edit menu ([MCPE-33121](https://bugs.mojang.com/browse/MCPE-33121))
  - Player permissions now apply correctly when more than one operator tries to adjust them
  - Made improvements to roaming skins, which should apply correctly after reloading or reinstalling the game and signing in
  - Custom skins are now applied correctly without needing to restart the game to see them (On compatible platforms) ([MCPE-37926](https://bugs.mojang.com/browse/MCPE-37926), [MCPE-45476](https://bugs.mojang.com/browse/MCPE-45476))
  - Skins equipped from the ‘Recent’ section are once again applied when selected
  - World settings now sync correctly between different Xbox One devices
  - Resource packs are now applied correctly after downloading through the world or global settings
  - Newly purchased Realms are now always visible after finalizing the purchase
  - Fixed an issue that would show an error message when attempting to renew a Realm subscription on Xbox One ([REALMS-1686](https://bugs.mojang.com/browse/REALMS-1686))

<!-- -->

- **Gameplay**
  - Fixed several related issues with End Gateway portals. These should now teleport the player to the correct safe location when used ([MCPE-19699](https://bugs.mojang.com/browse/MCPE-19699), [MCPE-43176](https://bugs.mojang.com/browse/MCPE-43176), [MCPE-43177](https://bugs.mojang.com/browse/MCPE-43177))
  - Villager trading now properly takes away items from the second slot, when applicable ([MCPE-45506](https://bugs.mojang.com/browse/MCPE-45506))
  - Only players who fought in a raid now receive the Hero of the Village effect in Realms
  - The Bad Omen effect is now only received when killing an Illager Captain, not when dealing non-fatal damage with a bow or potion
  - Players no longer see through the world when clipping into blocks after leaving a boat ([MCPE-42593](https://bugs.mojang.com/browse/MCPE-42593))
  - You can now interact with blocks while holding a charged crossbow on touch devices
  - Players no longer clip through walls when transitioning from swimming to standing in water
  - Players that are being healed can now still be knocked back by TNT. Did I say that right?
  - Arrows that are shot into blocks keep their position when reloading the world
  - Area of Effect clouds no longer try to spawn excessive numbers of particles when time of day is changed ([MCPE-39595](https://bugs.mojang.com/browse/MCPE-39595))

<!-- -->

- **Mobs**
  - Corrected the position of leads on Wolves
  - Tamed cats no longer slide around while sitting ([MCPE-44491](https://bugs.mojang.com/browse/MCPE-44491))
  - Fixed the missing Taiga Zombie Villager skin
  - Fixed a z-fighting texture issue on some Villager skins
  - Dyed leather horse armour colour no longer effects other horse armour ([MCPE-43230](https://bugs.mojang.com/browse/MCPE-43230))
  - Vindicators can now path correctly over carpet during raids
  - The Wither no longer plays its spawning animation when reloading a world ([MCPE-32415](https://bugs.mojang.com/browse/MCPE-32415))
  - Mobs will no longer path-find over Brewing Stands
  - Added a sound to indicate when a villager does not want to trade (Like during a raid)
  - Illager Captains now drop banners correctly even if the world is reloaded
  - Mobs will now spawn on double slabs ([MCPE-30765](https://bugs.mojang.com/browse/MCPE-30765))
  - Fixed the sitting model for cats that were previously tamed ocelots ([MCPE-41929](https://bugs.mojang.com/browse/MCPE-41929))
  - Fixed missing zombie villager sounds ([MCPE-43329](https://bugs.mojang.com/browse/MCPE-43329))
  - V2 zombie villagers now have the correct name in death messages instead of a placeholder name ([MCPE-45932](https://bugs.mojang.com/browse/MCPE-45932))
  - Mobs no longer get stuck when pathfinding on ladders ([MCPE-43034](https://bugs.mojang.com/browse/MCPE-43034))
  - Evokers no longer move too fast when moving towards villages in raids
  - Mobs no longer spawn inside leaves during raids
  - Villagers that are actively trading with players will no longer run and hide when the raid bell rings
  - Clerics now correctly pathfind to their job sites
  - Tamed tuxedo cats now use the proper texture ([MCPE-43527](https://bugs.mojang.com/browse/MCPE-43527))
  - Stray cats can no longer claim beds in villages for worlds converted from version 1.10 ([MCPE-44299](https://bugs.mojang.com/browse/MCPE-44299))
  - The ghast spinning model in monster spawners is now the correct size
  - Fixed wandering trader podzol and coral trades
  - Fletchers now trade 16 arrows instead of 5
  - Changed the cost of butcher's cooked rabbit trade
  - Leatherworker's saddle trade is lowered from 10 to 6 emeralds
  - Removed the sand trade from the wandering trader and adjusted the cost of a diamond hoe from tool smith villagers
  - Iron Golems no longer run to the world center after their village is destroyed ([MCPE-45509](https://bugs.mojang.com/browse/MCPE-45509))
  - Villagers without professions now follow regular schedules and will actually sleep, which they deeply need
  - Fixed the creeper model in some Marketplace maps
  - Converting a normal Pillager to a Captain with tag commands now displays the banner correctly

<!-- -->

- **Blocks**
  - Fixed various scenarios where certain blocks couldn't be placed until the game was restarted
  - Frosted ice blocks can now be broken ([MCPE-41256](https://bugs.mojang.com/browse/MCPE-41256))
  - Fixed Sea Grass texture brightness ([MCPE-34795](https://bugs.mojang.com/browse/MCPE-34795))
  - Bamboo leaves are now lighter ([MCPE-42635](https://bugs.mojang.com/browse/MCPE-42635))
  - Flowing lava once again turns into cobblestone when hit by water ([MCPE-43990](https://bugs.mojang.com/browse/MCPE-43990))
  - Red sandstone stairs now have correct textures on all sides ([MCPE-20677](https://bugs.mojang.com/browse/MCPE-20677))
  - Players no longer lose villager job site locations if they replace a job site block that is tied to an experienced villager
  - Village job site blocks now have consistent sound volume levels when used by players
  - Scaffolding can no longer be placed on Conduit blocks
  - The Bell now swings towards a player when it is hit ([MCPE-42469](https://bugs.mojang.com/browse/MCPE-42469))
  - Note Block particles now correctly correspond to the notes played
  - The grindstone now correctly combines and repairs two damaged items
  - Farmland now has the correct side and bottom textures ([MCPE-42746](https://bugs.mojang.com/browse/MCPE-42746))
  - Smokers now have the correct bottom texture ([MCPE-43944](https://bugs.mojang.com/browse/MCPE-43944))
  - Fixed door and trapdoor textures ([MCPE-43173](https://bugs.mojang.com/browse/MCPE-43173))
  - Cocoa beans now break and drop when pushed by pistons ([MCPE-41868](https://bugs.mojang.com/browse/MCPE-41868))
  - Slabs and other non-solid blocks once again prevent grass from growing on dirt ([MCPE-42975](https://bugs.mojang.com/browse/MCPE-42975))
  - Flowing water is no longer left behind after flowing over string ([MCPE-36343](https://bugs.mojang.com/browse/MCPE-36343))
  - Bells now ring when hit with splash and lingering potions
  - Composter growth particles now appear in the correct location
  - Blocks can once again be placed on unlit Redstone Ore ([MCPE-44305](https://bugs.mojang.com/browse/MCPE-44305))
  - Fixed animated textures for flowing lava and water on several texture packs

<!-- -->

- **Items**
  - Efficiency pickaxes now break packed ice at a faster rate ([MCPE-23648](https://bugs.mojang.com/browse/MCPE-23648))
  - Dropped items no longer prevent minecarts from being placed on rails
  - Empty glass bottles now stack correctly when removed from brewing stands ([MCPE-42175](https://bugs.mojang.com/browse/MCPE-42175))
  - Banner patterns can no longer be lost or duplicated when switching them in a loom with a full inventory
  - Using Pick Block on sweet berry bushes now gives the player the correct item ([MCPE-41877](https://bugs.mojang.com/browse/MCPE-41877))
  - Bone meal is now consumed correctly when used on grass
  - Cactus blocks of different growth stages can be smelted into green dye again ([MCPE-42497](https://bugs.mojang.com/browse/MCPE-42497))
  - Stripped birch wood is no longer used to craft acacia planks when playing on Realms ([MCPE-44398](https://bugs.mojang.com/browse/MCPE-44398))
  - Shields no longer appear too bright in item frames ([MCPE-41222](https://bugs.mojang.com/browse/MCPE-41222))
  - Updated the Illager Banner texture ([MCPE-43233](https://bugs.mojang.com/browse/MCPE-43233))
  - Barrels now appear in the proper place of the creative inventory ([MCPE-43946](https://bugs.mojang.com/browse/MCPE-43946))
  - Correct colors of wool are now displayed as a material required to create colored banners in the recipe book
  - The player's arm is no longer displaced in first person view after eating food ([MCPE-40135](https://bugs.mojang.com/browse/MCPE-40135))
  - Tinted spawn eggs are now properly scaled in item frames

<!-- -->

- **World Generation**
  - Fixed a bug on dedicated servers and Realms which could cause the wrong block types to generate in the world
  - Tweaked the number of job sites that generate in villages

<!-- -->

- **User Interface**
  - Updated the glass texture for locked maps in the Cartography Table UI ([MCPE-43314](https://bugs.mojang.com/browse/MCPE-43314))
  - Adjusted the Cartography Table screen to fit Android screens when using Classic UI
  - Pressing the Y button on controller on the Cartography output slot now only crafts the correct amount
  - Added controller tooltips for the Lectern screen
  - The villager trading screen no longer opens and closes if the player is standing too far away
  - Items that are split between slots in the villager trading screen still count as a total trade amount
  - The How to Play button on the Cartography Table now directs to the proper screen
  - Killing a wandering trader's llama can no longer display their inventory screen
  - The screen reader prompt no longer appears every time network settings are adjusted on Nintendo Switch
  - The 'Always Day' toggle now correctly animates and shows the correct setting ([MCPE-43304](https://bugs.mojang.com/browse/MCPE-43304))
  - Dates appear again next to player earned achievements in the Achievements menu
  - The 'Invite to Game' button is no longer enabled on Featured Servers
  - Going back to the Play screen (or Settings screen) will now properly select the previously selected tab when Text to Speech is enabled
  - The "Wheel Turning" button is now only shown once in the Minecraft VR settings
  - Made improvements to the patch notes to make sure the correct ones show up after an update
  - The Marketplace search screen now displays the proper pack icons
  - The 'New' tag will be properly removed from a Marketplace collection once it has been viewed
  - Fixed Marketplace sale items not showing the discount percentage

<!-- -->

- **Commands**
  - Further improvements to performance when using selectors with commands
  - Removed "tile" prefix in the '/give' command ([MCPE-44667](https://bugs.mojang.com/browse/MCPE-44667))
  - Made item names more consistent by removing “tile” from the beginning of some of them
  - Blocks and entities that aren't available in the Creative inventory no longer require the "minecraft" namespace when used as parameters in commands
  - After 'fishing_hook' is killed by command, players can now cast the hook again without having to cast twice
  - Killing a rideable entity no longer respawns its rider when killed in the same tick
  - The 'testforblock' command now works reliably with items renamed in the language files

<!-- -->

- **Add-Ons and Script Engine**
  - The Behavior Pack template once again contains the 'spawn_rules' folder
  - Removing a timer component and adding a new one should no longer have the new timer inherit the old timer's time value
  - Custom underwater mobs can now spawn naturally
  - Custom entities now correctly re-evaluate current target validity
  - 'getBlocks' now returns a 3D array of block objects
  - Fixed a scripting issue that could cause the player to float
  - 'ScriptAttackComponent' and ScriptCollisionBoxComponent' now correctly retrieve updated data
  - Pick Block now works correctly on non-vanilla entities that have been added using Add-Ons ([MCPE-38205](https://bugs.mojang.com/browse/MCPE-38205))
  - Functions ran on a game loop now use an origin which has Game Master permissions, not Owner permissions
    - Added a new constructor parameter to the 'ServerCommandOrigin' so that the Function Manager can create an instance with upgraded permissions
  - Player Position is now reported for the player feet like other mobs
  - Collision Box and Attack components report the correct data now

# **For Map Makers and Add-On Creators:**

- Updated templates for 1.12.0 with new resources, behaviors, documentation, and example packs can be downloaded from [aka.ms/MinecraftAddons](https://aka.ms/MinecraftAddons)
- Created a screen to view content log errors for Behavior and Resource Packs
  - The log screen can be opened using Ctrl + H after enabling in Profile Settings
- Enabled content logging for creators on Bedrock Dedicated Server to debug pack errors
- Mob events can now be toggled using the new '/mobevent' command
- Particle emitters can now trigger slash commands, actor events, and MoLang expressions
- Added the ability to play single animations at any time, overriding an entity's current state-based animation
- Animations and particles can be spawned without being linked to entities using animation timelines
- Sound effects can now be triggered by animation events
- Added auto-complete to the Command Input field for command blocks
- Delay in Ticks for Command Blocks
  - A delay can be added to the command block using the new field, measured in Redstone ticks

<!-- -->

- **Data-Driven Crafting Recipes (Experimental)**
  - Allows custom crafting recipes for shaped crafting, shapeless crafting, and furnaces using Behavior Packs
  - Recipe JSON files have been added to the Behavior Pack template

<!-- -->

- **Add New Simple Item (Experimental)**
  - New "simple" items can be added to the game using Behavior Packs
  - Currently, only a subset of components has been exposed, with more being added in future updates to allow more complex behaviors
  - Some items, such as food, are now data-driven and their JSON files have been added to the Behavior Pack template

<!-- -->

- **Add New Simple Block (Experimental)**
  - New "simple" blocks can be added to the game using Behavior Packs
  - Currently, only a subset of components has been exposed, with more being added in future updates to allow more complex behaviors

<!-- -->

- **New Data-Driven Particles:**
  - Llama Spit
  - Large Explosions
  - Colored Flames
  - Redstone Dust
  - Falling Dust
  - Lava
  - Enchanting Table
  - Conduit

<!-- -->

- **New Data-Driven Animations:**
  - Wolf
  - Fang Attack
  - Arrow
  - Shulker Bullet
  - Bow
  - Water Movement

# **Script Engine Updates:** (Currently available on Windows 10 with Experimental Gameplay enabled)

- **Block API V0**
  - New block events and two new APIs have been included to query for blocks:
  - **APIs**
    - getBlock(Ticking Area, x, y, z)
    - getBlock(Ticking Area, PositionObject)
    - getBlocks(Ticking Area, x min, y min, z min, x max, y max, z max)
    - getBlocks(Ticking Area, Minimum PositionObject, Maximum PositionObject)
  - **Events**
    - block_destruction_started
    - block_destruction_stopped
    - piston_moved_block
    - player_destroyed_block
    - player_placed_block

<!-- -->

- **Item API V0**
  - Basic item related events have been exposed to the Script Engine. This includes:
    - actor_acquired_item
    - actor_carried_item_changed
    - actor_dropped_item
    - actor_use_item
    - actor_equipped_armor

<!-- -->

- **Inventory API V0**
  - Basic inventory events have been exposed to the Script Engine. This includes:
    - inventory_container
    - armor_container
    - hand_container (note that the hand container will get you both the main hand and offhand)
    - hotbar_container

<!-- -->

- **executeCommand API**
  - Allows executing commands with a callback when the command is executed without using events
  - Only usable on Server Scripts

<!-- -->

- **Event Data API**
  - Data is contained in objects passed to callbacks under the data field
  - Custom events need to be registered (registerEvent) before being triggered
