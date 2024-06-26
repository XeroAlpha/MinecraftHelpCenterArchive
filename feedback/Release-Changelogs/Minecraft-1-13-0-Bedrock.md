---
title: Minecraft - 1.13.0 (Bedrock)
date: 2019-10-28T15:17:58Z
updated: 2019-10-29T16:05:38Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360035247792-Minecraft-1-13-0-Bedrock
---

**Posted:** October 29, 2019

**New Features:**

- **Foxes!**
  - Keep your chickens safe and your belongings close, otherwise you’ll find them dead or gone - especially come nightfall. Foxes are more active at night and seek shade to sleep during the day. However, if you’re patient enough to feed two of them Sweet Berries, you can end up with a trusty one!
- **Brown Mooshroom**
  - Transforms whenever a red Mooshroom is struck by lightning
  - Feed them flowers and use a bowl to harvest Suspicious Stew!
- **Suspicious Stew**
  - Craft stew with different flowers to grant different potion effects for a short period of time
  - Share the suspiciousness with your friends and see how they like Suspicious Stew!
- **Wither Rose**
  - A new, scary looking flower that is planted wherever a living entity dies to the Wither
  - Might be useful when crafting Suspicious Stew?
- **Item Frames can now be placed on the floor and ceiling!**
- **Added abandoned villages**
- **Added a celebration event that occurs if Pillagers successfully raid a village**
- **New Note Block instruments**
  - Make some sweet new jams by placing certain blocks under Note Blocks!
  - Discover the new instruments with Glowstone, Haybale, Block of Emerald, Pumpkin, Soul Sand, Block of Iron, Bone Block, Wool, Packed Ice, Clay, and Block of Gold
- **Added five dead coral types**
- **Added the Light Block for mapmakers**
  - Supports auxiliary data from 0 to 15 for light level
  - Light blocks are supported via /give, /fill, and /setblock
  - The invisible End Rod (variant 6) is now automatically updated to the new Light Block
- **Added new in-game chat settings to improve accessibility**
- **Added game credits**
  - A way to see all the lovely people that work on the game!
  - The credits can be viewed after defeating the Ender Dragon, and also through a new button found in the Settings menu

**Character Creator:**

- Personalize your character in a number of ways, including body size and shape, limb replacement and tweaking of eyes, mouth, hairstyles and colors, facial hair, and skin tones
- More than 100 items will be available for free. There will also be a range of custom accessories, created by the Minecraft team, available for purchase
- Traditional custom skins can still be imported as before, on Windows 10 and mobile, using the following steps: *Profile \> Edit Character \> Classic Skins tab \> Owned \> Import \> Choose New Skin*
- For even more details, check out the [Character Creator FAQ](https://feedback.minecraft.net/hc/articles/360033693171)

**Experimental Gameplay:**

(Work in progress features that are only available when Experimental Gameplay is enabled in world settings)

- New and improved Structure Blocks
  - Structure Blocks give creators the ability to copy and save out sections of their world into structures. Saved structures can then be pasted back into the world
  - To get a Structure Block, you must use the ‘/give’ command
  - When a structure is being loaded in, it can also be mirrored or rotated
  - Structure Void blocks can be placed in an area to not copy air into the target area
  - See How to Play in the game for more details and tips!

**Fixes:**

- **Crashes**
  - Fixed several crashes that could occur during gameplay
  - Fixed a crash that could occur while navigating menus
  - Fixed a crash that could occur when trying to create new world or when joining a multiplayer game
  - Fixed a crash that could occur when a player left a multiplayer game
  - Fixed a crash that could occur when signing into a Microsoft account
  - Fixed a crash that could occur when switching profiles on Xbox One
  - Fixed a crash that could occur when launching the game on Xbox One
  - Fixed a crash that could occur when typing certain characters onto a sign
  - Fixed a crash that could occur when exploring world templates
  - Fixed a crash that could occur when choosing certain skins
  - Fixed a crash that could occur when breaking a block underneath a Detector Rail
  - Fixed a crash that could occur when creating a new world using some Marketplace packs
  - Fixed a crash that could occur when exiting the game on Windows 10
  - Fixed a crash that could sometimes occur when approaching world spawn ([MCPE-46686](https://bugs.mojang.com/browse/MCPE-46686))
  - Fixed a crashing issue on iOS when relaunching the game with a global resource pack applied
  - Fixed a crash that occurred when accepting the storage permission on Android
  - Fixed a crash that could occur when resuming the game on Oculus Rift
  - Fixed a crash that could occur when launching the game on Oculus Rift
  - Fixed a crash that occurred when typing certain characters into chat ([MCPE-44419](https://bugs.mojang.com/browse/MCPE-44419))
  - Fixed a crash that could occur if a split-screen player left the game while an execute command targeted them in a function
  - Fixed a crash that could occur after a player left the game on 3 or 4 player split-screen on the "Wildlife: Jungle" map
  - Fixed a crash that could occur when leaving and rejoining a world whilst an adult panda is eating bamboo
  - Fixed a freezing issue that could occur when resuming the game on Windows 10 Mobile
  - Fixed a crashing issue that affected certain worlds when approaching spawn ([MCPE-46686](https://bugs.mojang.com/browse/MCPE-46686))
  - Fixed a crash that could occur after changing the File Storage location on Android devices
  - Fixed a crash that could occur on low and mid-end Android devices
  - Fixed a crash that could occur when trying to double-tap on an item on the Beacon screen
  - Fixed a crash that could occur while downloading multiple Marketplace items at the same time on some iOS devices
  - Fixed a crash related to cached resources

<!-- -->

- **Performance**
  - Improved world launch time by optimizing network and resource tasks
  - Improved performance when opening the inventory
  - Several performance improvements regarding block rendering
  - Fixed a drop in performance when flying with Elytra in The End
  - Optimized terrain light calculation
  - Optimized grass growth block ticking

<!-- -->

- **General**
  - The "We are being attacked!" and "I've got a bad feeling about this" achievements can once again be unlocked ([MCPE-45060](https://bugs.mojang.com/browse/MCPE-45060))
  - The "Renewable Energy" achievement is once again unlockable ([MCPE-39661](https://bugs.mojang.com/browse/MCPE-39661))
  - The "Where have you been?" achievement now unlocks correctly on Android
  - Maps are now drawn more quickly when exploring, meaning the "Map Room" achievement now unlocks more consistently ([MCPE-27720](https://bugs.mojang.com/browse/MCPE-27720))
  - Fixed some instances of skin selections not saving and reverting to Alex or Steve ([MCPE-32089](https://bugs.mojang.com/browse/MCPE-32089))
  - Fixed the "Multiplayer Restricted Skin!" error message that would pop up when trying to join a world before the skin had loaded in ([MCPE-48494](https://bugs.mojang.com/browse/MCPE-48494))
  - The world loading screen now closes once an acceptable amount of chunks have loaded ([MCPE-44815](https://bugs.mojang.com/browse/MCPE-44815))
  - Fixed issues related to unloaded chunks that could appear in Realms and local worlds ([REALMS-1553](https://bugs.mojang.com/browse/REALMS-1553))
  - Partially fixed an issue that caused global resources not to be applied after relaunching the game
  - Minecraft on iOS will no longer show the "Do you want to Close Minecraft" pop-up since iOS doesn't support that app behavior
  - Added a new option in Accessibility settings that to auto-enable Text to Speech when the platform has it enabled. This prevents the screen reader from unexpectedly being enabled each time game is restarted ([MCPE-43306](https://bugs.mojang.com/browse/MCPE-43306))
  - Fixed various Text to Speech issues
  - Players can now switch between user accounts on Xbox One without restarting the game
  - Fixed the messaging when trying to import a world template created in a newer version
  - Fixed a controller issue when docking the Nintendo Switch

<!-- -->

- **Gameplay**
  - Players in water are now knocked back by TNT explosions
  - Split-screen players that join a world will now spawn in the correct safe place and no longer spawn in the void
  - Fixed an issue that could cause some worlds to become corrupted during gameplay ([MCPE-50496](https://bugs.mojang.com/browse/MCPE-50496))
  - Players now properly receive stored XP from Furnaces ([MCPE-47324](https://bugs.mojang.com/browse/MCPE-47324))
  - Eating when using a Nether Portal no longer causes players to teleport to random locations. Weird interdimensional eating problems! ([MCPE-39147](https://bugs.mojang.com/browse/MCPE-39147))
  - The player can once again open the inventory correctly while sitting in a Boat
  - Using Bone Meal on a flower now generates more flowers of that type around it, rather than just Dandelions and Poppies ([MCPE-7979](https://bugs.mojang.com/browse/MCPE-7979))
  - The player now correctly receives the Bad Omen effect whenever the Illager Captain dies in combat with the player
  - Fixed an issue with block updates on a waterlogged block triggering a Redstone update in the same chunk
  - Fire Charges launched from Dispensers will now ignite Minecarts with TNT
  - The damage sound is no longer heard when a player falls or lands in Creative mode ([MCPE-515](https://bugs.mojang.com/browse/MCPE-515))
  - Corrected player sprint/swim state when exiting water
  - Fixed pitch issue with camera that caused player to walk backwards when looking straight up
  - Players can now teleport on top of non-full or transparent blocks when eating a Chorus Fruit
  - The camera will now rotate correctly when in third-person view
  - The player no longer keeps on rowing when opening the inventory during boat rides ([MCPE-36522](https://bugs.mojang.com/browse/MCPE-36522))
  - Arrows hitting players underwater no longer play multiple hit sounds
  - Lightning from Channelling Tridents now affect more than a single mob in a small area ([MCPE-44393](https://bugs.mojang.com/browse/MCPE-44393))
  - Lightning now strikes less frequently ([MCPE-38768](https://bugs.mojang.com/browse/MCPE-38768))
  - Arrows now destroy Armor Stands properly ([MCPE-47785](https://bugs.mojang.com/browse/MCPE-47785))
  - Fixed an issue that prevented players from moving while sneaking on top of Shulkers and Boats ([MCPE-44644](https://bugs.mojang.com/browse/MCPE-44644))
  - Area of effect clouds such as Lingering Potions now work correctly if world is set to 'Always Day' ([MCPE-39595](https://bugs.mojang.com/browse/MCPE-39595))

<!-- -->

- **World Generation**
  - Chests that generate in Desert Temples now face the correct direction ([MCPE-37393](https://bugs.mojang.com/browse/MCPE-37393))

<!-- -->

- **Mobs**
  - Tweaked Drowned despawning rules to help prevent too many being present in the world ([MCPE-34032](https://bugs.mojang.com/browse/MCPE-34032))
    - Drowned will now despawn if the following conditions are met: The player is at least 54 blocks away, the Drowned has not performed any actions in at least 30 seconds, and it is daytime
  - Iron Golems are no longer knocked back by explosions ([MCPE-43662](https://bugs.mojang.com/browse/MCPE-43662))
  - Fixed the sitting position for baby zombie jockeys
  - Fixed the death animation of spiders ([MCPE-41417](https://bugs.mojang.com/browse/MCPE-41417))
  - The Wither once again has its blue shield!
  - Lazy pandas no longer float above the ground when lying on their backs ([MCPE-43164](https://bugs.mojang.com/browse/MCPE-43164))
  - Baby pigs now turn into baby Zombie Pigmen when struck by lightning ([MCPE-38134](https://bugs.mojang.com/browse/MCPE-38134))
  - Pillagers now spawn around Pillager Outposts more frequently ([MCPE-43396](https://bugs.mojang.com/browse/MCPE-43396))
  - Fixed player alignment to beds when sleeping
  - Zombies can no longer break Iron Doors ([MCPE-43725](https://bugs.mojang.com/browse/MCPE-43725))
  - Zombies once again spawn in caves ([MCPE-52743](https://bugs.mojang.com/browse/MCPE-52743))
  - Village mobs (Such as Iron Golems and cats) can no longer spawn inside of blocks ([MCPE-44442](https://bugs.mojang.com/browse/MCPE-44442), [MCPE-41886](https://bugs.mojang.com/browse/MCPE-41886))
  - Ravagers can now pathfind through water
  - Cured Zombie Villagers now keep their trade level
  - Jockeys no longer get stuck trying to move to unreachable mounts
  - Cod, salmon, tropical fish, and pufferfish now drop XP when killed
  - Mobs will no longer break Turtle Eggs when mob griefing is disabled ([MCPE-36245](https://bugs.mojang.com/browse/MCPE-36245))
  - Mobs can now pathfind correctly through waterlogged blocks ([MCPE-37005](https://bugs.mojang.com/browse/MCPE-37005))
  - Mobs can now pathfind correctly on unlit campfires
  - Mobs once again drop armor and equipment as loot ([MCPE-48891](https://bugs.mojang.com/browse/MCPE-48891))
  - Mobs no longer drop fully repaired weapons as loot ([MCPE-45953](https://bugs.mojang.com/browse/MCPE-45953))
  - Leads now connect to mobs at the correct position
  - Mobs no longer attempt to path find over 1.5 block high obstacles ([MCPE-45256](https://bugs.mojang.com/browse/MCPE-45256))
  - Villagers will now all go to sleep correctly at night
  - Creepers no longer lose aggro when line of sight is broken briefly
  - Zombies no longer get stuck on doors
  - Mobs standing on slabs are no longer immune to sunlight damage after reloading the world ([MCPE-32822](https://bugs.mojang.com/browse/MCPE-32822))
  - Witches can no longer spawn in 1.8 high gaps ([MCPE-45935](https://bugs.mojang.com/browse/MCPE-45935))
  - Animal breeding cooldowns no longer reset after reloading the world
  - Endermen holding Red Sand no longer drop regular Sand when killed ([MCPE-25926](https://bugs.mojang.com/browse/MCPE-25926))
  - Endermen are correctly affected by the Invisibility effect, when applied ([MCPE-44492](https://bugs.mojang.com/browse/MCPE-44492))
  - Fixed the held sword position for Vex mobs
  - Entity hit and collision boxes no longer exist during mob death animations ([MCPE-9999](https://bugs.mojang.com/browse/MCPE-9999))
  - Wither Skeletons are no longer affected by the Wither effect ([MCPE-46317](https://bugs.mojang.com/browse/MCPE-46317))
  - Mobs and entities are no longer slowed when walking one block above ice ([MCPE-13852](https://bugs.mojang.com/browse/MCPE-13852))
  - Baby zombies are now able to ride Zombie Pigmen ([MCPE-20163](https://bugs.mojang.com/browse/MCPE-20163))
  - Increased the speed that Phantoms' wings flap ([MCPE-42935](https://bugs.mojang.com/browse/MCPE-42935))
  - Drowned on land now attack based on brightness levels rather than time of day
  - Dolphins once again follow players in boats
  - Nether Portals now spawn Zombie Pigmen on Easy difficulty ([MCPE-45934](https://bugs.mojang.com/browse/MCPE-45934))
  - Fixed Creeper farms by adjusting mob height spawning logic ([MCPE-45935](https://bugs.mojang.com/browse/MCPE-45935))
  - Strays and skeletons now show enchanted bows when held
  - Villagers now show angry particles when hit by a player, even if they haven't been traded with yet ([MCPE-29700](https://bugs.mojang.com/browse/MCPE-29700))
  - Parrots can now be picked in Creative mode using pick block
  - Mobs now attack the player correctly while standing on Soul Sand
  - Villagers now close doors that have been opened by a player or Redstone ([MCPE-21946](https://bugs.mojang.com/browse/MCPE-21946))
  - Villager trade levels now match Java Edition with 5 profession level badges ([MCPE-43206](https://bugs.mojang.com/browse/MCPE-43206))
  - Farmers now correctly harvest crops when their inventory is not full ([MCPE-47166](https://bugs.mojang.com/browse/MCPE-47166))
  - Villagers now hide more consistently during a Raid
  - Fixed the "Toast" rabbit easter egg ([MCPE-44510](https://bugs.mojang.com/browse/MCPE-44510))
  - Updated Mason trades
  - Fixed a Cartographer trade so it now requires 11 glass panes instead of 10

<!-- -->

- **Blocks**
  - Beacons now play the correct ambient sound ([MCPE-34413](https://bugs.mojang.com/browse/MCPE-34413))
  - TNT no longer falls through blocks when lit ([MCPE-41313](https://bugs.mojang.com/browse/MCPE-41313))
  - Lava now correctly affects mobs that come into contact with it. Usually this means death ([MCPE-45531](https://bugs.mojang.com/browse/MCPE-45531))
  - Standing in a cauldron of lava now deals the correct amount of damage to players. It usually means death, as well ([MCPE-39356](https://bugs.mojang.com/browse/MCPE-39356))
  - Falling snow can no longer replace other blocks ([MCPE-44613](https://bugs.mojang.com/browse/MCPE-44613))
  - Using pick block on lit Redstone now gives the player the correct block ([MCPE-43450](https://bugs.mojang.com/browse/MCPE-43450))
  - Frosted Ice no longer causes performance issues when it is waiting to melt underground ([MCPE-39698](https://bugs.mojang.com/browse/MCPE-39698))
  - Leaves collected with Silk Touch now stack correctly with other leaves of the same type ([MCPE-32347](https://bugs.mojang.com/browse/MCPE-32347))
  - Shulker Boxes can no longer be placed in the same space as the player ([MCPE-39674](https://bugs.mojang.com/browse/MCPE-39674))
  - Wood blocks now have proper directional placement ([MCPE-43367](https://bugs.mojang.com/browse/MCPE-43367))
  - Jukeboxes now stop playing music after being broken ([MCPE-47587](https://bugs.mojang.com/browse/MCPE-47587))
  - Furnaces now play all applicable sounds at the correct pitch ([MCPE-43915](https://bugs.mojang.com/browse/MCPE-43915))
  - The Beacon block can now suffocate players and mobs like other opaque blocks (For example, when being clipped into when using a minecart)
  - Hoppers now pick up items from above correctly ([MCPE-31393](https://bugs.mojang.com/browse/MCPE-31393))
  - Pistons now have the correct textures when placed in any direction ([MCPE-38053](https://bugs.mojang.com/browse/MCPE-38053))
  - Granite, diorite, and andesite can no longer be smelted into smooth stone ([MCPE-45914](https://bugs.mojang.com/browse/MCPE-45914))
  - Explosions no longer destroy and drop End Gateway blocks ([MCPE-47174](https://bugs.mojang.com/browse/MCPE-47174))
  - Sneaking on Redstone ore no longer triggers glow
  - Anvils now take damage correctly after use
  - Water being dispensed from a dispenser no longer breaks End Portals and Gateways
  - Dispensers now place Boats correctly
  - Falling snow layers no longer breaks blocks in Redstone contraptions ([MCPE-49773](https://bugs.mojang.com/browse/MCPE-49773))
  - Barrier Blocks no longer stop grass growth ([MCPE-41262](https://bugs.mojang.com/browse/MCPE-41262))
  - Farmland blocks once again prevent grass growing underneath
  - Breaking an extended piston in Creative mode no longer drops an item ([MCPE-10853](https://bugs.mojang.com/browse/MCPE-10853))
  - TNT can now be crafted from red sand, in addition to plain old regular sand
  - Campfires can be doused with splash water potions only, to match Java Edition
  - Coarse Dirt is no longer replaced with dirt when a tree is grown on top ([MCPE-26215](https://bugs.mojang.com/browse/MCPE-26215))
  - Invisible bedrock no longer emits stone particles when fallen on

<!-- -->

- **Items**
  - Turtle Egg items now have the same 2D texture as Java Edition
  - Buttons no longer appear rotated in the hotbar ([MCPE-11365](https://bugs.mojang.com/browse/MCPE-11365), [MCPE-42584](https://bugs.mojang.com/browse/MCPE-42584))
  - The durability bar for shields now updates correctly when sustaining damage ([MCPE-44788](https://bugs.mojang.com/browse/MCPE-44788))
  - Locked maps now have a unique inventory icon
  - Enchanted books with three or more enchantments no longer always have Feather Falling IV and/or Blast Protection IV ([MCPE-41944](https://bugs.mojang.com/browse/MCPE-41944))
  - Items that have been smelted can now be crafted and stacked correctly for use in furnaces, stone cutters, etc. ([MCPE-47907](https://bugs.mojang.com/browse/MCPE-47907), [MCPE-48421](https://bugs.mojang.com/browse/MCPE-48421), [MCPE-47684](https://bugs.mojang.com/browse/MCPE-47684))
  - Arrows will cause sand and gravel to fall again ([MCPE-18257](https://bugs.mojang.com/browse/MCPE-18257))
  - Splash water bottles once again deal damage to Blazes and Endermen ([MCPE-42589](https://bugs.mojang.com/browse/MCPE-42589))
  - Fixed Trident position issues when being held and thrown
  - Fixed Riptide Tridents not propelling players forward correctly
  - Loyalty Tridents now return to the correct player after bouncing off a Shield ([MCPE-44225](https://bugs.mojang.com/browse/MCPE-44225))
  - Equipment on Armor Stands now renders correctly if the armor stand is affected by the Invisibility effect ([MCPE-39779](https://bugs.mojang.com/browse/MCPE-39779))
  - The LT controller button can once again be used to quickly equip or replace armor ([MCPE-35579](https://bugs.mojang.com/browse/MCPE-35579))
  - Players are now able to use items like fishing rods while aiming at nearby mobs
  - Nether Wart now has a chance to drop more items when broken with Fortune tools ([MCPE-31107](https://bugs.mojang.com/browse/MCPE-31107))
  - Fire Aspect swords no longer set Creative players on fire ([MCPE-14036](https://bugs.mojang.com/browse/MCPE-14036))
  - Drinking sound for milk and potions now plays correctly ([MCPE-38340](https://bugs.mojang.com/browse/MCPE-38340))
  - Trapdoor items now have the correct inventory textures ([MCPE-44214](https://bugs.mojang.com/browse/MCPE-44214))
  - Six-sided wood block variants can now be smelted or used as furnace fuel ([MCPE-47170](https://bugs.mojang.com/browse/MCPE-47170))
  - Damaged Elytra now have their own texture ([MCPE-47758](https://bugs.mojang.com/browse/MCPE-47758))
  - Fixed an issue that prevented certain items not being suggested in the recipe book correctly
  - Items cooked on the campfire now stack together correctly ([MCPE-47684](https://bugs.mojang.com/browse/MCPE-47684))
  - Fixed the default recipe for beds
  - Players no longer lose items when moving stacks of items into a Cartography Table
  - Changed how the bell item is held in the player's hand, so that it is held like an item rather than a weapon ([MCPE-43638](https://bugs.mojang.com/browse/MCPE-43638))

<!-- -->

- **Graphical**
  - Fixed an issue that could cause the home screen to show black corrupted textures after resuming the game on Android ([MCPE-39031](https://bugs.mojang.com/browse/MCPE-39031))
  - The player model is now visible again while sleeping on a bed
  - Boat paddling animation now matches Java Edition and resynchronizes when paddling stops
  - Fixed an issue with water not rendering correctly on some servers ([MCPE-46813](https://bugs.mojang.com/browse/MCPE-46813))
  - Fix an issue that caused block entities (such as beds) to not render after suspending and resuming the game
  - Arrows now render correctly when held by Armor Stands
  - Armor Stands and players can again wear helmets with secondary layers
  - Fixed Elytra position for skins that don’t use the standard humanoid model
  - Fixed some graphical errors when launching the game on Oculus Rift
  - Flowers no longer become invisible in flower pots ([MCPE-40806](https://bugs.mojang.com/browse/MCPE-40806))
  - Players no longer show the flying animation when using scaffolding while Elytra are equipped
  - Improved the texture for the stonecutter with non-fancy graphics ([MCPE-42487](https://bugs.mojang.com/browse/MCPE-42487))
  - Tweaked first-person hand attack animations
  - Multiple blocks no longer change color to black when moved by pistons
  - Tweaked the position of the shield when held in the off-hand to fix a minor texture clipping issue
  - Fixed hand animation when switching to empty hand from held item

<!-- -->

- **User Interface**
  - Accessibility color and contrast fixes and tweaks for dropdowns, buttons and the Play screen
  - The Text to Speech narrator now works correctly with punctuation in text boxes
  - Players using touch screens can no longer break blocks when using touch-and-hold to use a fishing rod
  - Chat instructions no longer appear on screen every time the player travels through a portal ([MCPE-45073](https://bugs.mojang.com/browse/MCPE-45073))
  - Removed duplicate and overlapping progress bars
  - Fixed the safe screen area prompt not appearing, when necessary, on certain devices
  - Keyboard inputs now work correctly when the game loads out of window focus
  - Fixed the "Open Chat" message for touch screen devices
  - Flight controls will no longer show when sleeping in a bed in creative ([MCPE-44928](https://bugs.mojang.com/browse/MCPE-44928))
  - Fixed the inventory screens of some blocks not appearing on the first attempt after the block's state has changed, like Hoppers and Dispensers
  - The wither's health bar no longer disappears during the fight if the player moves away ([MCPE-40881](https://bugs.mojang.com/browse/MCPE-40881))
  - Using 'Place All' (Y) on the Cartography Table output slot now only crafts as many of the shown result possible
  - Joining a Realm through the 'Joinable Friends' list no longer shows world info ([MCPE-47731](https://bugs.mojang.com/browse/MCPE-47731))
  - The background tint of the player coordinates is now consistent with the chat background ([MCPE-43791](https://bugs.mojang.com/browse/MCPE-43791))
  - Tweaked the controller cursor position when auto-crafting with a full inventory
  - Obfuscated text once again works with the smooth font chat setting
  - Fixed duplicated 'Sign In' messages that were overlapping
  - The correct Marketplace Inventory items are now shown when switching between players
  - Global resource packs in Settings will now update to the new chosen language
  - Updated the How to Play section so that it specifies that carved pumpkins should be used as protection from Endermen
  - Updated the How to Play section about repairing Elytra, which now describes using Phantom Membranes to repair them instead of leather ([MCPE-41608](https://bugs.mojang.com/browse/MCPE-41608))
  - Updated the How to Play section regarding Raids
  - Updated the How to Play section regarding Host and Player Options ([MCPE-28976](https://bugs.mojang.com/browse/MCPE-28976))
  - Updated the How to Play section about taming cats ([MCPE-43490](https://bugs.mojang.com/browse/MCPE-43490))

<!-- -->

- **Commands**
  - Execute detect command now uses local coordinates correctly ([MCPE-29942](https://bugs.mojang.com/browse/MCPE-29942))
    - Modified 'CommandPosition' so that an optional offset can be specified to move the rotation point in case of a local coordinate
    - Fixed the 'ExecuteCommand' detect option to correctly use an entity rather than a position so that it can use the entity orientation to calculate camera relative offsets
  - Using '/spreadplayers' no longer permanently loads distant chunks
  - Powered rails placed using '/fill' now work correctly when powered by Redstone
  - Using '/setblock' on a piston base no longer leaves an invisible piston arm
  - Cloned active mob spawners now have an animated mob when placed ([MCPE-23106](https://bugs.mojang.com/browse/MCPE-23106))
  - The '/clear' command once again works correctly with damageable items
  - Running the "/clear" command message now shows correct amount of items removed ([MCPE-34750](https://bugs.mojang.com/browse/MCPE-34750))
  - Carpet is now removed correctly when using the '/clear' command
  - Using '/clear @p item' now clears correctly auxiliary values
  - Pistons with data values 6 and 7 can no longer be placed using slash commands ([MCPE-21558](https://bugs.mojang.com/browse/MCPE-21558))
  - Players can no longer use the '/spawnpoint' command in the Nether
  - Using the command '@s\[type=...\]' will now work correctly ([MCPE-49766](https://bugs.mojang.com/browse/MCPE-49766))
  - Fixed an error message that occurred when using the '/help' command

<!-- -->

- **Add-Ons and Script Engine**
  - Fixed MoLang scripting errors that were being logged for older content
  - Endermen with modified behaviors can now be shot and damaged with projectiles
  - Loading packs with lots of custom items now works correctly
  - Custom rideable entities now show the correct action hint when added
  - Fixed the positioning of particles that were only showing correctly when centered on screen
  - The 'timer' component once again functions on vanilla projectiles
  - Fixed an issue with the 'must_see_forget_duration' component not working
  - Fixed humanoid eating animation
  - Fixed the 'scale' component failing to scale certain entities
  - Running the 'tick_world' component now removes ticking areas correctly and consistently
  - Added stone slab aliases to allow backwards compatibility on Add-On packs
  - The 'spawn_entity' component is now executed when an entity is being ridden
  - Ghasts no longer keep looking at players if the behavior component has been removed
  - Fixed minecart rider rotation not being updated correctly in some packs
  - Particle UVs no longer include lines of textures next to the selected UV
  - Custom entities using 'nearest_attackable_target' now re-evaluate current target validity
  - Fixed mini bows rendering on all mobs other than players in scripting packs
  - The 'has_equipment' filter now works correctly with damageable items
  - Fixed a scripting error that would appear when shooting arrows from a dispenser
  - When a global resource pack is deleted, it will now remove itself from the active stack

**For Map Makers and Add-On Creators:**

- Updated templates for 1.13.0 with new resources, behaviors, documentation, and example packs can be downloaded from [aka.ms/MinecraftAddons](https://aka.ms/MinecraftAddons)

- **New Data-Driven Objects for Add-Ons**
  - Brewing stand potion recipes are now data-driven
  - Arrow shake animation ([MCPE-40744](https://bugs.mojang.com/browse/MCPE-40744))
  - Item breaking particles
  - Data-driven environment damage for entities
  - Added 'push' component that determines whether an entity can be pushed
  - Added 'persistent' component that determines whether an entity should be persistent in the game world
  - Turtle Lightning interactions are now data-driven
  - Pufferfish puffed states are now data-driven
  - Guardian/Elder Guardian animation and rendering
    - Fixed unparented geometry on pre-1.8 guardians
    - Elder Guardian spike animation
  - Fishing hook
  - Horse models and animations
  - Snow Golem trail behavior
  - Dragon Breath particles
  - Sparkler particles (Education)
  - Balloons (Education)

- **Script Engine**

  - Actor Definition Events can now be triggered from scripts
  - Scripting logs can now be opened and viewed while the game is running
  - Added new scripting Actor tags
  - Added 'container' scripting component for blocks
  - Added 'projectile_hit' scripting event
  - Added 'entity_hurt' scripting event
  - Added 'entity_sneak' scripting event
  - Added 'entity_attack' scripting event
  - Added 'block_exploded' scripting event

- Added new feature rules data that implements existing biome decoration through JSON

  - Final infrastructure changes required to support fully data-driven features. Rules themselves must be provided in a behavior pack with Experimental Gameplay enabled

- Significantly increased the maximum 'spawnRadius' distance

- Levers now have their own block state

- Changed Breathable, RideTick, and Transformation systems to use ViewedEntityContext

- All pillar blocks now have their own block state instead of using some values of the direction block state. This allows mirror and rotating with structure blocks

<!-- -->

- **Changes to Pack Manifests**
  - **Summary**
    - As of 1.13, we have made some changes to the pack manifest with a new format version of "2". We recommend that any new packs or world templates that you create use format version of 2 from now on. With this new format, there are a few additional changes to be aware of, detailed below
  - **All Pack Types**
    - The 'name' field in the header is now required for all pieces of content
  - **World Templates**
    - The 'lock_template_options' field is now required. This Boolean field determines whether the world options for your template should be locked to default values when a player creates a world from the template. They can still choose to unlock and modify the options, but will be warned that doing so could affect gameplay
    - The 'base_game_version' field is required (see below for more info)
    - The 'min_engine_version' field should no longer be used as it isn't parsed on world templates and produces a warning on import
  - **Resource and Behavior Packs**
    - The 'min_engine_version' field is now required. This affects how the game interprets some of the assets loaded from Resource and Behavior Packs. We recommend using the latest available version of the game for this field (e.g. '\[1, 13, 0\]') to ensure your pack works correctly
  - **Base Game Version Field**
    - For this field, we recommend using the value "\*". This will ensure that anyone using your content in their Minecraft worlds will always get the latest base game (Vanilla) content when an update is available.
    - In the case that your content relies on specific base game behavior, you can use this field to specify a base game version, starting with 1.13. If you choose to do this, you should omit the third octet; for example, if the version of the game you are targeting is '\[1, 14, 2\]', you would specify a version of '\[1, 14, 0\]'). If you specify a version this way, any worlds using your custom content will not get new base game content when it becomes available in future releases, which could help prevent unwanted changes to behavior in your content caused by updates to the base game. However, we still recommend using the "\*" value to ensure players can continue to enjoy your content in their Minecraft worlds long-term while also receiving updates to the base game
