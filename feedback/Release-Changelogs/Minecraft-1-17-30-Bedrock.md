---
title: Minecraft - 1.17.30 (Bedrock)
date: 2021-09-15T16:31:25Z
updated: 2021-09-21T15:45:08Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4409292961677-Minecraft-1-17-30-Bedrock-
---

**Posted:** September 21, 2021

It's time for the Minecraft 1.17.30 update! The team has been working hard on bug fixes and changes to the Caves & Cliffs: Part I experience. Those who are feeling adventurous can even check out experimental world generation to discover the highest peaks and deepest caves. Read all about it below!

Please search for any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/) and let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/).

![mceclip0.png](https://feedback.minecraft.net/hc/article_attachments/4409294239117/mceclip0.png)

**New Features:**

**Respawn Blocks Explode Game Rule**

- Added the "Respawn Blocks Explode" game rule, which can be used to prevent Respawn Anchors and Beds from exploding ([MCPE-76687](https://bugs.mojang.com/browse/MCPE-76687))

**Structure Block: Corner Mode**

- Corner Mode is used with the Detect button in Save Mode to define the area to save. It will only detect Corner Blocks with the same name as the structure being saved  
    

**Experimental Features:**

More experimental features from Caves & Cliffs: Part II are available in this update and can be enabled on the world creation screen!

Please keep in mind that these features are work in progress, still under in development, and subject to change. If you activate them, your world might crash, break, or not work with future updates. Experimental features cannot be turned off after world creation.

For more information, please see the article about enabling experimental features at [aka.ms/MCExperimentalFeatures](https://aka.ms/MCExperimentalFeatures).

**Monster Spawning**

- Monsters now only spawn in complete darkness
- This change is being made to balance the player's ability to light up the new larger caves and make them safe from monster spawning
- Note that this change only affects block-light and not sky light
- Please send us your feedback on this change at [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback)!

**Multi Noise World Generation**

- New and improved terrain and biome generation algorithm that creates more natural terrain and biome transitions
- Improved surface decoration that detects the difference between when blocks are generated underwater and underground
- Introduces large ore veins to world generation adding more strategy to mining
- Introduces noodle caves to world generation, creating small pathways between bigger caves
- Introduces the possibility of dry cave entrances that make it easier to access the new noise caves
- Introduces a new algorithm that finds suitable spawn positions closer to origin
- Added logic to save and load SubChunks by absolute Y index to support data-driven dimension height ranges  
    

**Changes:**

- Updated the Achievements button and moved from the Profile screen to the Main Menu and Pause screens  
    

**Fixes:**

**Performance / Stability**

- Optimised pasting Unicode text into Book & Quill ([MCPE-119651](https://bugs.mojang.com/browse/MCPE-119651))
- Fixed a crash that could occur when crafting a Crafting Table with Gameplay Tips enabled
- Fixed a crash that could occur after disconnecting from the internet while playing in an online session as the client on iOS
- Fixed a crash that could sometimes occur when downloading large Marketplace worlds

**Gameplay**

- Worlds with the Caves & Cliffs experimental toggle enabled are now more likely to have the same default world spawn position as worlds without the experiment using the same seed ([MCPE-127708](https://bugs.mojang.com/browse/MCPE-127708))
- Matched respawn from Bed behavior with Java Edition by attempting to avoid placing players on damage dealing blocks when waking up and attempting to place players on the side of the bed they entered from ([MCPE-118654](https://bugs.mojang.com/browse/MCPE-118654))
- Nether Portals placed between chunks no longer break when leaving the Nether ([MCPE-74333](https://bugs.mojang.com/browse/MCPE-74333))
- Damaging buff effects no longer bypass absorption hearts ([MCPE-62360](https://bugs.mojang.com/browse/MCPE-62360))
- Enchanting Table's enchantment probability is now weighted ([MCPE-101588](https://bugs.mojang.com/browse/MCPE-101588))
- Fixed incorrect position when dismounting at a negative world height ([MCPE-136622](https://bugs.mojang.com/browse/MCPE-136622))
- Abandoned villages are now far rarer, more closely matching the Java Edition ([MCPE-71769](https://bugs.mojang.com/browse/MCPE-71769))
- Fixed emissive light propagation in ray tracing mode by increasing irradiance cache sample size ([MCPE-135157](https://bugs.mojang.com/browse/MCPE-135157))
- Fall damage is no longer applied when falling into Scaffolding ([MCPE-108459](https://bugs.mojang.com/browse/MCPE-108459))

**Mobs**

- Cartographers will now only give maps to undiscovered monuments ([MCPE-29375](https://bugs.mojang.com/browse/MCPE-29375))
- Tweaked Iron Golem spawning logic to better match Java Edition
- Axolotls now spawn only when there is stone up to 10 blocks under them, and not inside bubble columns
- Collecting Fish or Axolotl with a Bucket no longer immediately releases them ([MCPE-44320](https://bugs.mojang.com/browse/MCPE-44320))
- Armor Stands now drop equipped items when destroyed by fire or lava ([MCPE-94603](https://bugs.mojang.com/browse/MCPE-94603))
- Limited the maximum number of Phantom mobs that can spawn ([MCPE-106557](https://bugs.mojang.com/browse/MCPE-106557))
- Goats now play their "impact 3" sound ([MCPE-127757](https://bugs.mojang.com/browse/MCPE-127757))
- Grown up Goats no longer lose their Horns when reloading a world
- Baby Goats no longer have horns ([MCPE-123253](https://bugs.mojang.com/browse/MCPE-123253))
- Fixed an animation parity issue with Skeletons not using both arms to hold their Bows ([MCPE-670](https://bugs.mojang.com/browse/MCPE-670))
- Undead mobs standing near Powder Snow now burn normally ([MCPE-131005](https://bugs.mojang.com/browse/MCPE-131005))
- Powder Snow above undead mobs now prevents burning effect
- Multiple Shulkers are no longer able to spawn in the same position from spawn eggs or End City generation ([MCPE-43972](https://bugs.mojang.com/browse/MCPE-43972))
- Mobs can now pathfind correctly when standing on Amethyst Buds ([MCPE-130010](https://bugs.mojang.com/browse/MCPE-130010))
- Lightning no longer randomly strikes mobs that are under blocks ([MCPE-121688](https://bugs.mojang.com/browse/MCPE-121688))
- Fixed mobs sometimes rendering with incorrect geometry when viewed from the Structure Block preview window ([MCPE-95183](https://bugs.mojang.com/browse/MCPE-95183))
- Experimental Features: Wither can now be spawned at negative heights ([MCPE-125270](https://bugs.mojang.com/browse/MCPE-125270))
- Ghasts no longer spawn in less than 5x4x5 areas ([MCPE-133687](https://bugs.mojang.com/browse/MCPE-133687))
- Magma Cubes no longer spawn in less than 3x3x2 areas ([MCPE-46540](https://bugs.mojang.com/browse/MCPE-46540))
- Medium Magma Cubes now have a larger hitbox ([MCPE-132159](https://bugs.mojang.com/browse/MCPE-132159))
- The Thorns enchantment now does Knockback to mobs ([MCPE-56212](https://bugs.mojang.com/browse/MCPE-56212))

**Blocks**

- Cave Vines can now be pollinated by Bees ([MCPE-127821](https://bugs.mojang.com/browse/MCPE-127821))
- Enchantment Tables now emit light level 7 ([MCPE-130868](https://bugs.mojang.com/browse/MCPE-130868))
- The falling position of Pointed Dripstone is no longer slightly offset ([MCPE-119548](https://bugs.mojang.com/browse/MCPE-119548))
- Disabled biome tinting for Spruce and Birch Leaves ([MCPE-128996](https://bugs.mojang.com/browse/MCPE-128996))
- Bubble Columns are now placed properly when loaded with a Structure Block ([MCPE-97027](https://bugs.mojang.com/browse/MCPE-97027))
- Vanilla Parity: Using Bone Meal on Moss Blocks now also replaces Tuff blocks ([MCPE-125922](https://bugs.mojang.com/browse/MCPE-125922))
- Grass and water block tint colors are no longer slightly randomized with noise
- Fixed Light Block not being displayed correctly when being held ([MCPE-123249](https://bugs.mojang.com/browse/MCPE-123249))
- Weeping and Twisting Vines now grow correctly after the player breaks them ([MCPE-90932](https://bugs.mojang.com/browse/MCPE-90932))
- Minecart with Chest will now copy over its chest contents when advanced pick blocked
- Crimson Roots now have a small chance of growing on Warped Nylium blocks when using Bone Meal ([MCPE-83616](https://bugs.mojang.com/browse/MCPE-83616))
- Candle now drops when Candle Cake is pushed by a Piston ([MCPE-130594](https://bugs.mojang.com/browse/MCPE-130594))
- Renamed Structure Blocks will no longer have the incorrect data mode on creation ([MCPE-41625](https://bugs.mojang.com/browse/MCPE-41625))
- Unicode font now correctly highlights on Signs with glowing text ([MCPE-130072](https://bugs.mojang.com/browse/MCPE-130072))
- Pumpkins placed facing South, East, or West now can now be used to trade with Villagers if they were mined with Silk Touch tools ([MCPE-105540](https://bugs.mojang.com/browse/MCPE-105540))
- More Candles can no longer be added to Candles placed without any support block ([MCPE-130810](https://bugs.mojang.com/browse/MCPE-130810))
- Shulker Boxes now remain in Dispensers when dispensed at world height limit ([MCPE-130085](https://bugs.mojang.com/browse/MCPE-130085))
- Monster Spawners no longer emit light
- Powder Snow can now be collected with a Dispenser ([MCPE-127564](https://bugs.mojang.com/browse/MCPE-127564))
- Target Blocks now conduct Redstone signals ([MCPE-75034](https://bugs.mojang.com/browse/MCPE-75034))
- Fixed text from signs drawing on maps on ray tracing enabled hardware
- Amethyst Cluster and Amethyst Bud can no longer be placed on Grass Path blocks
- Corrected "Deepslate Lapis Lazuli Ore" name from "Deepslate Lapis Ore" ([MCPE-123605](https://bugs.mojang.com/browse/MCPE-123605))
- Fixed Bed display if the foot of the Bed is in a brighter area than the head ([MCPE-123592](https://bugs.mojang.com/browse/MCPE-123592))
- Fixed Large Chest display so the brightest end of the Chest is chosen to light the whole Chest
- Dispensers now remove bubble columns when removing water ([MCPE-56462](https://bugs.mojang.com/browse/MCPE-56462))
- Sea Pickles now change light depending on being in underwater or not ([MCPE-131642](https://bugs.mojang.com/browse/MCPE-131642))
- Snow layers are now melted by light from torches, etc. ([MCPE-131272](https://bugs.mojang.com/browse/MCPE-131272))
- Vanilla Parity: Falling gravity blocks will no longer break when landing on certain blocks  ([MCPE-20109](https://bugs.mojang.com/browse/MCPE-20109))
- Half of the Enchantment Table book doesn't render dark anymore ([MCPE-106627](https://bugs.mojang.com/browse/MCPE-106627))
- Blocks moved by a Piston no longer appear white while moving ([MCPE-66250](https://bugs.mojang.com/browse/MCPE-66250))
- Spore Blossoms no longer have a randomly offset hitbox ([MCPE-121658](https://bugs.mojang.com/browse/MCPE-121658))
- Measurements of hitbox of Spore Blossoms now match Java Edition
- Moss Block and Moss Carpet now break when moved by Pistons and Sticky Pistons can no longer pull them ([MCPE-121751](https://bugs.mojang.com/browse/MCPE-121751), [MCPE-122004](https://bugs.mojang.com/browse/MCPE-122004))
- Water dripping from Pointed Dripstone can no longer fill Cauldrons with Potions. Sorry, we knew it was fun but too overpowered! ([MCPE-131180](https://bugs.mojang.com/browse/MCPE-131180))
- Fixed an issue causing Slime and Honey Block movement slowdown to not be fully applied to players
- Light Blocks are once again visible while holding one and properly show their brightness value ([MCPE-123249](https://bugs.mojang.com/browse/MCPE-123249))
- Fixed Light Blocks not being removed when destroying them while holding a Light Block ([MCPE-123258](https://bugs.mojang.com/browse/MCPE-123258))
- Fixed Light Block brightness not being adjustable when interacting with it ([MCPE-123387](https://bugs.mojang.com/browse/MCPE-123387))
- Fixed Barrier Blocks being destructible while not holding a Barrier Block

**Items**

- Shulker Boxes now drop their contents when destroyed as an item ([MCPE-129470](https://bugs.mojang.com/browse/MCPE-129470), [MCPE-87877](https://bugs.mojang.com/browse/MCPE-87877))
- Bows and Tridents are now held more similarly to Java Edition ([MCPE-126717](https://bugs.mojang.com/browse/MCPE-126717), [MCPE-44418](https://bugs.mojang.com/browse/MCPE-44418))
- Eating Chorus Fruit while gliding no longer deals fall damage to the player ([MCPE-112621](https://bugs.mojang.com/browse/MCPE-112621))
- Swords now break Bamboo in a single swing ([MCPE-64013](https://bugs.mojang.com/browse/MCPE-64013))
- Fixed a bug that could cause the Trident, Shield, and Crossbow to render incorrectly when an additional player is connected over the internet using a Marketplace skin ([MCPE-118358](https://bugs.mojang.com/browse/MCPE-118358))
- Fixed a bug which could cause the Spyglass to appear as if it's being thrown when using a custom skin ([MCPE-127498](https://bugs.mojang.com/browse/MCPE-127498))
- Using a Powder Snow Bucket on a Cauldron filled with Powder Snow no longer creates a new Powder Snow block ([MCPE-131177](https://bugs.mojang.com/browse/MCPE-131177))
- Clock and Compass items no longer function in the Recipe Book ([MCPE-36354](https://bugs.mojang.com/browse/MCPE-36354))
- Lava Buckets can now be emptied into a Cauldron filled with Lava
- Fixed offhand Shields clipping into players’ arms while in third-person perspective ([MCPE-122672](https://bugs.mojang.com/browse/MCPE-122672))
- Holding a Shield in Marketplace maps no longer shows a content error
- Made projectile items move more smoothly when far from players ([MCPE-101102](https://bugs.mojang.com/browse/MCPE-101102))
- Strong/Long/Splash/Lingering Potions can now be placed in the Brewing Stand manually ([MCPE-86636](https://bugs.mojang.com/browse/MCPE-86636))
- Soul Speed Boots can now be unequipped properly after losing durability ([MCPE-106367](https://bugs.mojang.com/browse/MCPE-106367))
- Diamond Pickaxes found in Hoglin Stable chests are now enchanted ([MCPE-129750](https://bugs.mojang.com/browse/MCPE-129750))
- Fixed held items not disappearing visually to other players after a player dies when the Keep Inventory game rule is enabled ([MCPE-64235](https://bugs.mojang.com/browse/MCPE-64235))
- Shears now correctly cut Vines and Glow Lichen faster ([MCPE-123139](https://bugs.mojang.com/browse/MCPE-123139))
- Campfires and Soul Campfires now stack in the inventory ([MCPE-67890](https://bugs.mojang.com/browse/MCPE-67890))

**Audio**

- Amethyst walking sounds are now affected by the "Player" volume slider
- Deepslate walking sounds are now affected by the "Player" volume slider
- Moss Block walking sounds are now affected by the "Player" volume slider
- Sounds of moving in/on Powder Snow are now affected by the "Player" volume slider
- Jumping and landing on blocks have now their sounds affected by the "Player" volume slider ([MCPE-116135](https://bugs.mojang.com/browse/MCPE-116135))
- Dripstone drip sounds are now affected by the "Block" volume slider
- Block interaction "click" sounds are now affected by the "Blocks" volume slider ([MCPE-104983](https://bugs.mojang.com/browse/MCPE-104983))
- Turtle Eggs no longer produce the Bone Meal sound when placed on Sand ([MCPE-127189](https://bugs.mojang.com/browse/MCPE-127189))
- Swapped the toggle sounds for Levers so they are now parity with Java Edition ([MCPE-30379](https://bugs.mojang.com/browse/MCPE-30379))
- Using a Water Bucket on a fully filled Cauldron now produces the correct sound ([MCPE-131177](https://bugs.mojang.com/browse/MCPE-131177))

**Accessibility**

- Text to Speech chat setting once again correctly narrates chat messages ([MCPE-129901](https://bugs.mojang.com/browse/MCPE-129901))
- Text to Speech now correctly reads item names in the inventory
- Inventory grid slots are no longer double counted for Text to Speech focus controls

**User Interface**

- Fixed the hotbar being misaligned with XP bar by 1 pixel ([MCPE-46975](https://bugs.mojang.com/browse/MCPE-46975))
- The hotbar is no longer too dark when anti-aliasing is increased ([MCPE-54213](https://bugs.mojang.com/browse/MCPE-54213))
- The crosshair no longer flickers during multiplayer sessions ([MCPE-123918](https://bugs.mojang.com/browse/MCPE-123918))
- Using the touch interface, holding the output slot on the Stonecutter or Loom will now rapidly craft items ([MCPE-128423](https://bugs.mojang.com/browse/MCPE-128423))
- Fixed an incorrect popup when attempting to activate a pack with a missing dependency ([MCPE-130978](https://bugs.mojang.com/browse/MCPE-130978))
- Fixed translation issues for some keys containing upper case letters
- Replaced loading bars with new loading spinner in the Marketplace
- Recipe Book crafting estimates no longer differ from the actual results
- Cursor items no longer count towards recipe ingredient in Recipe Book
- The selected recipe in the Recipe Book is now deselected when the player runs out of ingredients
- Non-craftable recipes no longer displayed in Recipe Book when search mechanism is used
- Nether blocks now appear in the crafting grid if any other ingredient is unavailable
- Fixed a wireless network connection error message that appeared when players were connected via a wired network
- Fixed various spelling errors in Character Creator
- Hover of widget buttons were showing corrupted appearance before full load was complete
- Fixed a legibility issue with some Japanese font characters
- Riding an animal now displays the correct tooltip term when played on a non-touch screen
- Experimental warning message is no longer displayed inconsistently when loading beta worlds
- A debug string is no longer shown for how to open chat ([MCPE-128955](https://bugs.mojang.com/browse/MCPE-128955))
- Fixed an issue where the item category text color did not match the item text color if it was changed in Resource Packs
- Fixed an issue where patterns in the Loom would not display correctly with some texture packs
- The emote wheel no longer appears when pressing Ctrl+B in-game ([MCPE-125246](https://bugs.mojang.com/browse/MCPE-125246))
- Fixed Input Method Editor (IME) not working after suspending the game on Windows 10 ([MCPE-59722](https://bugs.mojang.com/browse/MCPE-59722))
- Added a new sidebar to some Marketplace and Dressing Room related screens to help better improve the experience of navigating these areas
- There is now an item transferring animation when deselecting a recipe
- Sidebar text is now localized properly when a new language is loaded or the current language changes
- Fixed a bug that could cause the Sign In button to appear behind the Marketplace button
- Fixed the Noto Sans Smooth font on Windows and Xbox platforms with the Japanese locale to address legibility and usage of correct characters
- Fixed "CR" characters incorrectly appearing at the end of lines for some display languages
- Enabled new achievements screens for VR (not including PS VR)
- Placing a Sign on Rooted Dirt now correctly opens the text editor ([MCPE-129280](https://bugs.mojang.com/browse/MCPE-129280))
- The Sign In dialog is no longer shown on a split-screen game to anyone other than the primary player on PlayStation 4
- Fixed tamed Wolves being transparent on the Structure Block screen

**Realms**

- Improved responsiveness of Realms menus, particularly on Nintendo Switch
- The "Download World" button is now visible for worlds on expired Realms
- 2 player Realms no longer count against the 10 player realm limit
- Realms reset button will now navigate to the loading screen while reset is happening
- The Realms Slots screen will now open faster and have a loading dialog if it takes a long time
- The Realms Backup page now only shows the most recent 1100 Realms backups to prevent text overlap issues ([REALMS-8425](https://bugs.mojang.com/browse/REALMS-8425))
- Switching the active world slot in Realms no longer spams the "Fetching World Info" prompt
- Renaming a Realm now takes effect immediately while playing
- Fixed some issues with being unable to kick players via the user interface or the '/kick' command
- The text on the Realms Plus trial button on the play screen no longer changes when hovered
- Pressing the View Privacy Policy button now opens properly on Nintendo Switch

**Commands**

- Fixed a crash that could occur if a structure was placed with a command in an unloaded area, and that structure was deleted
- Teleporting a mob between dimensions no longer causes the mob to despawn ([MCPE-127414](https://bugs.mojang.com/browse/MCPE-127414))
- Loading a structure with the '/structure' command now displays the correct output messages ([MCPE-132813](https://bugs.mojang.com/browse/MCPE-132813))  
    

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.17.30 are available for download with new resources, behaviors, and documentation
  - Resource Pack Template: [aka.ms/ResourcePackTemplate](https://aka.ms/ResourcePackTemplate)
  - Behavior Pack Template (Includes documentation): [aka.ms/BehaviorPackTemplate](https://aka.ms/BehaviorPackTemplate)

**Gameplay**

- Data-driven blocks can now be added to the Creative menu
- New chemistry material reductions for Education Edition can now be defined in the JSON files
- "potion.prefix" and "potion.*.postfix"* potion string resources have been renamed to *"potion.*.name"
- Potion name string resources have been changed so there are separate "Splash" and "Lingering" string resources
- The old style of using "potion.prefix" and "potion.\*.postfix" is still supported
- UI bind objects can now utilize the 'ignore' field
- Attachables that are visible in first person view will no longer render backwards

**Fixes**

- Fixed a bug where an entity might fail to initialize its tag component
- Sky no longer renders through walls of a large enclosed area when using fog
- Updated documentation formatting for item components and how they work within Resource Packs and Behavior Packs
- Using Water Buckets to collect fish has been version locked to prevent breaking old world templates
- Fixed controller support when editing NPC dialog ([MCPE-135175](https://bugs.mojang.com/browse/MCPE-135175))
- 'behavior.knockback_roar' now has a vertical and horizontal strength value
- Adjusted padding for HD Textures in mipmaps level 1 in texture atlas to fix texture bleeding
- Killing a custom mob with an unknown loot table entry type will no longer cause a crash, and will now throw a content error ([MCPE-129006](https://bugs.mojang.com/browse/MCPE-129006))
- Rabbit with initialEvent specified now scales properly to adult rabbit size ([MCPE-76643](https://bugs.mojang.com/browse/MCPE-76643))
- Similar to the spawns_on_block_filter, the spawns_above_block_filter specifies a list of blocks and a distance. The mob can then spawn only if the nearest block within the specified distance below the desired spawnpoint is in that list (water and air not included). "minecraft:spawns_above_block_filter": { "blocks": "minecraft:stone", "distance": 10 }
- Improved documentation for 'DamageableItemComponent'
- Fixed the ability to add launch point positional offset for projectiles spawned with the 'spawn_entity' component
- Fixed the ability to add angular offset to launch vector for projectiles spawned with the 'spawn_entity' component
- Fixed offset not working for projectiles summoned through an interaction
- Fixed projectile 'angleoffset' value only reflected if shooter is riding another entity
- Fixed rotation of projectile launch point around a mob when projectile offset specified
- Parsing of UI json field "ignored" now throws a content error if it is invalid
- Fixed movement prediction interpolating with invalid data in even more scenarios ([MCPE-108568](https://bugs.mojang.com/browse/MCPE-108568))
- Removed the "replace" element from 'sound_definitions.json' for being ambiguous in its usage (and was never used) ([MCPE-99304](https://bugs.mojang.com/browse/MCPE-99304))

**Commands**

- Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms
- Animations and events defined in Behavior Packs can now run commands that require cheats without the player enabling cheats (such as setting certain rules with the '/gamerule' command)
- Target selectors ry and rym now support wrapping around north
- The '/particle' command position argument is now optional ([MCPE-128379](https://bugs.mojang.com/browse/MCPE-128379))
- The '/particle' command will now output on success ([MCPE-80348](https://bugs.mojang.com/browse/MCPE-80348))
- The '/particle' command no longer shows an error when run successfully through '/execute' ([MCPE-129001](https://bugs.mojang.com/browse/MCPE-129001))
- The '/clone' command now copies signal strength for Levers and Redstone Dust
- The '/structure' command can now specify a \<to: x y z\> position argument with y below 0 as long as it is equal or above the minimum height for that dimension
- Added functionality for Intellisense options: "d" and "default" in the gamemode command selector ([MCPE-92198](https://bugs.mojang.com/browse/MCPE-92198))
- Minecart with Command Block can now use the self selector (@s) in its commands to target itself ([MCPE-60126](https://bugs.mojang.com/browse/MCPE-60126))
- The "/time set" command now sets the correct time and day when specifying a time above 24000 or below the current time (e.g. "/time set 0" sets the day to 0, "/time set 28000" sets the day to 1), and "/time" can now set or add to a negative world time ([MCPE-43394](https://bugs.mojang.com/browse/MCPE-43394))
- The '/spawnpoint' command can now be used while the player is sleeping and outputs success when setting to the player's existing spawnpoint ([MCPE-106720](https://bugs.mojang.com/browse/MCPE-106720))
- The camera shake command no longer shakes every player's screen when "@s" is used as the selector ([MCPE-120383](https://bugs.mojang.com/browse/MCPE-120383))

**GameTest Framework (Experimental)** 

- Renamed module "Minecraft" to "mojang-minecraft"
- Renamed module "GameTest" to "mojang-gametest"
- GameTest (now mojang-gametest)
  - Added helper method spawnAtLocation(location : Location) : Entity - Spawns an entity at the given Location
  - Added helper method walkToLocation(mob : Entity, location : Location, speedModifier : number) - Commands an entity to move to the given Location
  - Added method assertCanReachLocation(mob : Entity, location : BlockLocation, bool canReach) - Asserts that the given mob can reach the target block location
  - Renamed helper method worldLocation(location : BlockLocation) to worldBlockLocation(location : BlockLocation)
  - Renamed helper method relativeLocation(location : BlockLocation) to relativeBlockLocation(location : BlockLocation)
  - Added helper method worldLocation(relativeLocation : Location) : Location - From a Location with coordinates relative to the GameTest structure block, returns a new Location with coordinates relative to the world
  - Added helper method relativeLocation(worldLocation : Location) : Location - From a Location, returns a new Location with coordinates relative to the current GameTest structure block
  - Added helper method spawnWithoutBehaviorsAtLocation(entityIdentifier : string, location : Location) : Entity - Spawns an entity at a location without any AI behaviors
  - Added helper method rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the GameTest structure rotation
  - Added helper method getTestDirection() : Direction - Returns the direction the GameTest is facing based on its structure rotation
  - Renamed function assertBlockTypePresent to assertBlockPresent
  - Renamed function assertEntityData to assertEntityState
  - Removed function assertBlockTypeNotPresent (added boolean isPresent to assertBlockPresent instead)
  - Removed function assertEntityNotPresent (added boolean to assertEntityPresent instead)
  - Removed function assertEntityNotPresentInArea (added boolean to assertEntityPresentInArea instead)
  - Removed function assertEntityNotTouching (added boolean to assertEntityTouching)
  - Removed function succeedWhenEntityNotPresent (added boolean to succeedWhenEntityPresent)
  - Modified signature of function assertBlockState(blockLocation: BlockLocation, callback: (Block) =\> boolean)
  - Modified signature of function assertBlockPresent(blockType: BlockType, blockLocation: BlockLocation, isPresent: boolean)
  - Modified signature of function assertEntityPresent(entityTypeIdentifier: string, blockLocation: BlockLocation, isPresent: boolean)
  - Modified signature of function assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean)
  - Modified signature of function assertEntityTouching(entityTypeIdentifier: string, location: Location, isTouching: boolean)
  - Modified signature of function succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location, isPresent: boolean)
- Minecraft (now mojang-minecraft)
  - Renamed BlockTypes class to MinecraftBlockTypes
  - Renamed Effects class to MinecraftEffectTypes
  - Renamed Items class to MinecraftItemTypes
- Events
  - Added event World.events.beforeExplosion - Fires before an explosion occurs
  - Added event World.events.explosion - Fires when an explosion occurs
  - Added event World.events.explodeBlock - Fires when a block breaks due to an explosion
  - Added event World.event.beforeActivatePiston - Fires before a piston is activated
  - Added event World.event.activatePiston - Fires when a piston is activated
  - Added read-only property currentTick to tick event - Returns the current server tick
  - Renamed event createEntity to entityCreate
  - Renamed event addEffect to effectAdd
  - Renamed event activatePiston to pistonActivate
  - Renamed event beforeActivatePiston to beforePistonActivate
  - Renamed event explodeBlock to blockExplode
  - Renamed event changeWeather to weatherChange
- Block
  - Added method getDimension() : Dimension
- Added BlockPistonComponent

**Molang**

- Added experimental queries for item cooldowns: 'query.is_cooldown_type', 'query.cooldown_time', and 'query.cooldown_time_remaining'
- Updated many Molang content errors to specify which operator or query was involved
- 'min_engine_version' from Resource Pack and Behavior Pack manifests is now passed into Molang expression parsing. This allows for future breaking changes tied to a specific engine version
- Added 'BlockPartVisibilityComponent'
  - Allows creators to specify Molang conditions for each “bone” listed in the geometry JSON that turn on/off bones based on the block state
  - Must have the Experimental toggle enabled to use
- Fixed experimental 'query.bone_orientation_trs' to have correct translation Y and scale results
- Added experimental 'block_neighbor_has_any_tags' and 'block_neighbor_has_all_tags' Molang queries
  - Takes a block relative position and a set of tags
  - Returns 0/1
  - Must have the Experimental toggle enabled to use
- Fixed a crash that could occur when entering a world with a custom Resource Pack that contained 'query.armor_color_slot' ([MCPE-106437](https://bugs.mojang.com/browse/MCPE-106437))
- Fixed 'query.item_remaining_use_duration' having improperly scaled or inverted results (This is to fix a Versioned Change as of engine version 1.17.30)
- Added 'query.facing_target_to_range_attack', which returns whether or not the queried actor's 'minecraft:behavior.ranged_attack' goal is currently running
- Moved experimental Molang queries (other than those related to Actor Properties) to a new 'Experimental Molang Features' toggle
- Improved Molang documentation related to experiments
  - Experimental queries and language expressions now list which experiment(s) they require to be available
- Versioned Changes are now detailed in the documentation, starting with the 'query.item_remaining_use_duration' fix
