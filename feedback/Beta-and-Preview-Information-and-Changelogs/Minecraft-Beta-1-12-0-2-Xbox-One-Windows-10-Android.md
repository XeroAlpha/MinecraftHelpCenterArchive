---
title: Minecraft Beta - 1.12.0.2 (Xbox One/Windows 10/Android)
date: 2019-04-17T14:28:46Z
updated: 2019-04-17T15:57:35Z
categories: Beta and Preview Information and Changelogs
tags:
  - beta
  - bedrock
  - 1.12.0.02
link: https://feedback.minecraft.net/hc/en-us/articles/360027059411-Minecraft-Beta-1-12-0-2-Xbox-One-Windows-10-Android
---

**17 April 2019**

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see aka.ms/JoinMCBeta for detailed instructions

**Known Issues in this beta that will be fixed in a future update:**

- Mob head geometry - some mobs such as cats and villagers may have misaligned heads when they are sleeping or sitting ([MCPE-44648](https://bugs.mojang.com/browse/MCPE-44648))
-  Tridents and Shields may appear invisible when being held by the player ([MCPE-44647](https://bugs.mojang.com/browse/MCPE-44647))

**New Features:**

- Item instance IDs can now be synchronized between clients and servers
- Added auto complete to command blocks 
- Added spawnRadius gamerule
  - players can specify in their worlds called spawnRadius. The concept was adapted from how Java Edition implemented it. It allows players to specify a number between 0 and 32 to create an allowed area for spawning to take place. So a spawn radius of 27 is a larger circle than a radius of 12. Players then will spawn in a random location in that radius.
- Enabled content logging on Bedrock Dedicated Server 
- Added a delay option to command blocks 
  - A delay can be added to the command block using the new field. The ticks for this delay are Redstone ticks.

**For Map Makers and Add-On Creators:**

- New items can be added using Add-Ons 
- Mob events can now be enabled and disabled in world templates
- Animations and particles can be added without being linked to entities 
- Inventory, armor, and hand containers can be adapted through scripting 
- Sound effects can now be triggered by animation events
- Added new executeCommand to the Scripting API 
- Added Scripting events for interaction with items, for example:
  - Item picked up
  - Item dropped
  - Carried item changed
- Added One-shot animation support, allowing the ability to execute a single animation on an entity 
- Particle emitters can now trigger Scripting Events
- Updated documentation of Actor Events, to document client-side usage of actor events in resource packs
- Add Block components now use JSON schemas 
- Created a screen to view content log errors 
  - The log screen can be opened using Ctrl+H, or by going to Settings→Profile
- Added code to allow static validation scripts to be run locally
- Custom blocks can now be added through Scripting 
  - This is currently still a 'work in progress' feature, and more functionality will be added in future updates.
  - Custom blocks can currently only be added through additional JSON scripting
  - Custom blocks can only be placed with slash commands

<!-- -->

- **Added new Data-Driven Particles:**
  - Llama Spit 
  - Large Explosions 
  - Coloured Flames 
  - Redstone Dust
  - Falling Dust 
  - Lava 
  - Enchanting Table 
  - Conduit 
- **Added new Data Driven Animations:**
  - Wolves 
  - Fang Attack 
  - Arrows 
  - Shulker Bullets 
  - Bows 
  - Water  
- **Updated Documentation to include a Breaking Changes section  **
- **Item API V0**
  - Basic item related events have been exposed to the Scripting API. This includes:
  - actor_acquired_item
  - actor_carried_item_changed
  - actor_dropped_item
  - actor_use_item
  - actor_equipped_armor
- **Inventory API V0**
  - Basic inventory events have been exposed to the Scripting API. This includes:
  - inventory_container
  - armor_container
  - hand_container (note that the hand container will get you both the main hand and offhand)
  - hotbar_container
- **Block API V0**
  - New block events and two new APIs have been included to query for blocks. This includes:
  - APIs
  - getBlock(Ticking Area, x, y, z)
  - getBlock(Ticking Area, PositionObject)
  - getBlocks(Ticking Area, x min, y min, z min, x max, y max, z max)
  - getBlocks(Ticking Area, Minimum PositionObject, Maximum PositionObject)
  - Events
  - block_destruction_started
  - block_destruction_stopped
  - piston_moved_block
  - player_destroyed_block
  - player_placed_block
- **executeCommand API**
  - Allows the Scripting API to get the result of a slash command
- **Event Data API**
  - Allows Creators to create event data, register and pass it to the event function.
- **Updated Demo Packs**

**Fixes:**

- **Crashes/Performance**
  - Fixed several crashes that could occur during gameplay 
  - Improved chunk loading performance in multiplayer 
  - Further improvements to performance when using selectors with commands 
  - Fixed a crash that could occur when switching players on Xbox
  - Cached resource packs no longer cause lag on Nintendo Switch ([MCPE-36976](https://bugs.mojang.com/browse/MCPE-36976))
  - Fixed a crash that could occur when launching the game on some Windows 10 devices 
  - Fixed a crash that could occur when certain interactive blocks (e.g. beds, chests, furnaces) are loading in when joining a Realm. 
  - Fixed a crash that could occur when engaging in a fight with an Elder Guardian in an Ocean Monument 
  - Fixed a crash that could occur when throwing a Trident with Loyalty enchantment 
  - Fixed a crash that could sometimes occur when exiting the game 

<!-- -->

- **General**
  - Player permissions now apply correctly when more than one operator tries to adjust them 
  - Arrows that are shot into blocks keep their position when reloading the world 
  - Area of Effect clouds no longer try to spawn excessive numbers of particles when time of day is changed ([MCPE-39595](https://bugs.mojang.com/browse/MCPE-39595))
  - Marketplace resource packs are now immediately applied after downloading in the world edit menu ([MCPE-33121](https://bugs.mojang.com/browse/MCPE-33121))
  - The 'Always Day' toggle now correctly animates and shows the correct setting ([MCPE-43304](https://bugs.mojang.com/browse/MCPE-43304))
  - Flowing water is no longer left behind after flowing over string ([MCPE-36343](https://bugs.mojang.com/browse/MCPE-36343))
  - After the fishing_hook is killed by command the player can now cast the hook again without having to right click twice 
  - The screen reader prompt no longer appears every time the player adjusts the network settings on Nintendo Switch 
  - Removed an unnecessary Xbox Live sign-in notification

<!-- -->

- **Gameplay**
  - Marketplace offers page can now show more than 25 items 
  - Items that are split between slots in the Villager trade window still count as a total trade amount 
  - Blocks can once again be placed on unlit Redstone Ore ([MCPE-44305](https://bugs.mojang.com/browse/MCPE-44305))
  - World settings now sync correctly between different Xbox devices 
  - Only players who fought in a Raid see and receive the Hero effect in Realms now 
  - Bells now ring when hit with splash and lingering potions 
  - Mob spawners now only spawn mobs if the light level is below 7 ([MCPE-42427](https://bugs.mojang.com/browse/MCPE-42427))
  - Cocoa beans now break and drop when pushed by pistons ([MCPE-41868](https://bugs.mojang.com/browse/MCPE-41868))
  - Fixed several related issues with End Gateway portals. These should now teleport the player to the correct safe location when used ([MCPE-43176](https://bugs.mojang.com/browse/MCPE-43176), [MCPE-43177](https://bugs.mojang.com/browse/MCPE-43177), [MCPE-19699](https://bugs.mojang.com/browse/MCPE-19699))
  - Efficiency Pickaxes now break Packed Ice at a faster rate ([MCPE-23648](https://bugs.mojang.com/browse/MCPE-23648))
  - Players that are being healed can still be knocked back by TNT
  - Villagers now keep their job when cured ([MCPE-42348](https://bugs.mojang.com/browse/MCPE-42348))
  - The Grindstone now correctly combines and repairs two damaged items
  - You can now interact with blocks with a charged crossbow on touch devices 
  - The Bad Omen effect is now only received when killing a Pillager Captain, and not when dealing non-fatal damage with a bow or damage potion 
  - Fixed various scenarios where certain blocks couldn't be placed until the game was restarted 

<!-- -->

- **World Generation**
  - Fixed a bug on Dedicated servers and Realms which could cause the wrong block types to generate 
  - Tweaked the number of job sites in villages

<!-- -->

- **Mobs**
  - Cured Villagers now keep their jobs 
  - Vindicators can now path correctly over carpet during Raids 
  - The Wither no longer plays its spawning animation when reloading a world  ([MCPE-32415](https://bugs.mojang.com/browse/MCPE-32415))
  - Mobs will no longer path-find over Brewing Stands 
  - Added sound to indicate when a Villager does not want to trade (during a Raid, for instance) 
  - Pillager Captains now drop Banners correctly even if the world is reloaded 
  - Mobs will now spawn on double slabs ([MCPE-30765](https://bugs.mojang.com/browse/MCPE-30765))
  - Re-added Zombie Villager sounds 
  - Mobs now longer get stuck when pathfinding on ladders ([MCPE-43034](https://bugs.mojang.com/browse/MCPE-43034))
  - Added new Wandering Trader sounds 
  - Converting a normal Pillager to a Captain with tag commands now displays the banner correctly 
  - Evoker no longer moves too fast in "move to village" goal
  - Villagers that are actively trading with players will no longer run and hide if the raid bell rings 
  - Clerics can now correctly pathfind to their jobsites 

<!-- -->

- **Blocks**
  - Scaffolding can no longer be placed on Conduit blocks (this matches Java now) 
  - The Bell now swings towards a player when it is hit (matching Java) ([MCPE-42469](https://bugs.mojang.com/browse/MCPE-42469))

<!-- -->

- **Items**
  - Dropped items no longer prevent Mine Carts from being placed on Rails 
  - Empty glass bottles will now stack correctly when removed from brewing stands ([MCPE-42175](https://bugs.mojang.com/browse/MCPE-42175))
  - Shields no longer appear too bright in item frames ([MCPE-41222](https://bugs.mojang.com/browse/MCPE-41222))
  - Fixed Sea Grass texture brightness ([MCPE-34795](https://bugs.mojang.com/browse/MCPE-34795))
  - Barrel item is now in proper place in creative inventory ([MCPE-43946](https://bugs.mojang.com/browse/MCPE-43946))

<!-- -->

- **Graphical**
  - Fixed a z-fighting texture issue on some Villager skins 
  - Corrected the position of leads on Wolves 
  - Noteblock particles now correctly correspond to the notes played 
  - Fixed missing Zombie Villager skin 
  - Farmland now has the correct side and bottom texture ([MCPE-42746](https://bugs.mojang.com/browse/MCPE-42746))
  - Fixed door and trapdoor texture issues ([MCPE-43173](https://bugs.mojang.com/browse/MCPE-43173))
  - Dyed leather horse armour colour no longer effects other horse armour ([MCPE-43230](https://bugs.mojang.com/browse/MCPE-43230))

<!-- -->

- **User Interface**
  - Added controller tooltips for Lectern UI
  - Adjusted Cartography UI to fit Android screens when using Classic UI 
  - Villager trading UI no longer opens and closes if the player is standing too far away 
  - Added lectern UI controller tooltip 

<!-- -->

- **Add-Ons and Script Engine**
  - Fixed a scripting bug that could cause the player to float 
  - Pickblock (middle click) now works correctly on non-vanilla entities that have been added using add-ons ([MCPE-38205](https://bugs.mojang.com/browse/MCPE-38205))
  - ScriptAttackComponent and ScriptCollisionBoxComponent now correctly retrieve updated data 
  - Functions ran on a game loop now use an origin which has Game Master permissions, not Owner permissions 
    - Added a new constructor parameter to the ServerCommandOrigin so that the Function Manager can create an instance with upgraded permissions
