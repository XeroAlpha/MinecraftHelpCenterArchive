---
title: "Minecraft - Caves & Cliffs: Part II - 1.18.0 (Bedrock)"
date: 2021-11-21T21:16:54Z
updated: 2021-12-01T16:58:51Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4414284658701-Minecraft-Caves-Cliffs-Part-II-1-18-0-Bedrock
---

**Posted:** November 30, 2021

The day has arrived and Minecraft Caves & Cliffs: Part II has officially released to the world! It is, indeed, a very special day when we all get to boot up our devices and see a new update ready to download and play. It represents years of hard work from both our team of developers, as well as the community's continued passion for creating endless worlds in Minecraft. The update is available on all Bedrock platforms right now and we can't wait for you to jump in and experience one of the biggest updates in Minecraft's history. Here's a bit of what to expect when you load into the game today:

- Increased the world height and depth, adding 50% more vertical space to build and explore
- New cave generation to explore below your existing worlds
- New cave and mountain biomes like Lush Caves and Jagged Peaks
- Drastically updated and improved biome, cave, and ore generation
- Added several new music tracks to enjoy during gameplay
- Fixed over 70 bugs, issues, and parity changes

There are the highlights. Jump in and start playing now, or if you want to see the full list of changes, read on!

Please search for any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/) and let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/).

![patchnotes_cavesandcliffs.jpg](https://feedback.minecraft.net/hc/article_attachments/4414284675853/patchnotes_cavesandcliffs.jpg)

**New Features:**

**Increased World Height and Depth**

- Overworld height and depth for new and existing worlds has been extended to y320 and y-64, opening up more space to explore and build in

**World Blending**

- Players can now update existing worlds to include the new overworld height dimensions and world generation features. See our [World Upgrading FAQ](https://aka.ms/ccworldupgrade) for more details
- The bedrock layer at y0 below saved chunks will be replaced with Deepslate and feature new cave generation underneath
- Biomes and terrain generating across new and existing chunk borders will blend seamlessly, creating natural-looking environmental transitions

**New Terrain and Mountain Generation**

- Terrain shape and elevation is no longer always determined by biome, resulting in new biome placements such as deserts on top of hills
- Mountains are taller than ever and can now generate up to a maximum height of 256 blocks

**New Biomes, 3D Biome Generation, and Biome Distribution**

- Added 3D biomes - cave biomes can now generate directly below surface biomes
- New cave and mountain biomes added, including Jagged Peaks, Meadows, Lush Caves and Dripstone Caves

**New Cave Generation**

- Added noise caves - the three primary types of noise caves are large, open Cheese Caves, wide, tunnelling Spaghetti Caves and the narrow, winding Noodle Caves
- Added aquifers - these create local level bodies of water such as flooded caves or underground lakes

**Ore Distribution and Large Ore Veins**

- Added large ore veins - these long formations stretch through cave systems and contain larger deposits of ore than the clusters usually found underground
- Ore distribution has been adjusted to compensate for the new world height

**Mob Spawning**

- Monsters will now only spawn in complete darkness. Players can spawn-proof dark areas such as caves using light sources

**New Music**

- Added new music by Lena Raine and Kumi Tanioka
- Added a new music disc from Lena Raine titled "otherside". This can be found rarely in Stronghold corridor chests or much more rarely in Dungeon chests
- Mobile players: To hear the new music, you will need to download the updated Minecraft Original Music Pack, available FREE from Marketplace

**New Achievements/Trophies**

- Caves & Cliffs - Free fall from the top of the world (build limit) to the bottom of the world and survive
- Feels Like Home - Take a Strider for a loooong ride on a lava lake in the Overworld
- Sound of Music - Make the Meadows come alive with the sound of music from a jukebox
- Star trader - Trade with a villager at the build height limit

Check out the [FAQ article](https://aka.ms/CCFeaturesFAQ) for a deep dive on the new features in Caves & Cliffs: Part II!

**Changes:**

**Vanilla Experiments**

- Added new "Vanilla Experiments" experimental toggle containing some blocks and items from The Wild Update, coming in 2022
  - Goat Horn
  - Sculk
  - Sculk Vein
  - Sculk Catalyst
  - Sculk Shrieker
  - Sculk Sensor
- Be sure to backup your worlds before enabling experimental toggles and see our [updated FAQ](https://help.minecraft.net/hc/en-us/articles/360059400852-Minecraft-Caves-Cliffs-Update-FAQ) on how to enable Experiments

**"Old" World Type**

- Removed "Old" world type from the world creation screen
- Locked Old worlds to BaseGameVersion 1.17.40
- Existing Old worlds are still playable but will not be updated with 1.18 features
- For more information on Old world changes, please see the [FAQ article](../Beta-and-Preview-Information-and-Changelogs/Old-Worlds-Types-in-Minecraft-Bedrock-Edition-FAQ.md)

**Menu Panorama**

- Added a new main menu panorama showing the beautiful cliffs of the Overworld

**Android External Storage**

- Players with external storage will be migrated to new location at start up, due to storage changes required by Google. You can still play if migration fails by closing the results window
- With external storage being migrated to its new location in preparation for Google's new API requirements, you will now lose your data if you uninstall Minecraft, unless you check the box indicating you want to keep your data. We recommend checking this box if you wish to keep your worlds in the event you choose to reinstall Minecraft
- For more information on storage changes, please see the [FAQ article](https://help.minecraft.net/hc/en-us/articles/4411299967629)

**Known Issues:**

- New world generation in this release is currently incompatible with the 'Creation of Custom Biomes' experimental toggle. Expect worlds with custom biome generation to be potentially unstable and for custom biomes to only exist in currently saved out areas of the world.
- World generation for the Minecraft Overworld has changed entirely with this release. This means old seeds will no longer spawn players in the same positions when playing 1.18. If creators are version locked to an old version of the game, their seeds will generate worlds as they were prior to 1.18.

**Fixes:**

**Performance / Stability**

- Fixed several crashes that could occur during gameplay
- Fixed a crash that could occur when loading certain world chunks ([MCPE-138139](https://bugs.mojang.com/browse/MCPE-138139))
- Fixed a crash that could occur when going through portals with tamed pets ([MCPE-129738](https://bugs.mojang.com/browse/MCPE-129738))
- Optimized the time it takes to place Vines in the Overworld during world generation

**General**

- Replaced the missing "Always Day" option in world settings ([MCPE-137790](https://bugs.mojang.com/browse/MCPE-137790))
- Players with higher than recommended render distance settings are now prompted to change it to the recommended value
- Render distance default and max settings have been updated for better performance, including improvements to the slider in video settings
- A prompt now warns players that they will be taken back to the main menu if they sign-in while in-game
- Increased Realm upload and download timeouts to 15 minutes

**Gameplay**

- Corrected Portal locations when the Portal was moved but the location was not updated ([MCPE-28765](https://bugs.mojang.com/browse/MCPE-28765))
- Hero of the Village effect now applies to all players who helped kill a raider once a raid is defeated, and the effect remains on the players, even if they travel outside the village ([MCPE-53384](https://bugs.mojang.com/browse/MCPE-53384))
- Fixed an issue where terrain could be seen through
- Fixed player hitbox not resetting after gliding with Elytra ([MCPE-109925](https://bugs.mojang.com/browse/MCPE-109925))
- Fixed player flight with Elytra being cancelled when hitting a wall and taking damage ([MCPE-54031](https://bugs.mojang.com/browse/MCPE-54031))

**Mobs**

- Mobs can now path over Trapdoors
- Fixed issues with mobs and entities disappearing from chunks ([MCPE-144208](https://bugs.mojang.com/browse/MCPE-144208))
- Mobs no longer walk through Campfires ([MCPE-142054](https://bugs.mojang.com/browse/MCPE-142054))
- Axolotls now animate correctly when airborne ([MCPE-131322](https://bugs.mojang.com/browse/MCPE-131322))
- Sweet Berry Bushes now damage mobs, with the exception of Foxes ([MCPE-56142](https://bugs.mojang.com/browse/MCPE-56142), [MCPE-140012](https://bugs.mojang.com/browse/MCPE-140012))
- Mobs no longer try to path through Sweet Berry Bushes
- The riding position of Llamas no longer shifts after being tamed ([MCPE-143006](https://bugs.mojang.com/browse/MCPE-143006))
- Raid mobs now despawn after a raid ends, if the player moves too far away
- Vindicators no longer naturally spawn in Illager Patrols
- Lightning bolts no longer have shadows ([MCPE-140689](https://bugs.mojang.com/browse/MCPE-140689))
- Fish now attempt to avoid Axolotls
- Magma Cubes are now correctly aggressive towards Iron Golems and Slimes are no longer aggressive towards Snow Golems ([MCPE-51162](https://bugs.mojang.com/browse/MCPE-51162))
- Phantoms should now be able to free themselves after getting stuck when trying to pathfind into mountains ([MCPE-119773](https://bugs.mojang.com/browse/MCPE-119773))
- Villagers will keep following their schedules in worlds that have been ticking for a very long time, and when game time is negative ([MCPE-98361](https://bugs.mojang.com/browse/MCPE-98361))
- Education Edition: NPCs no longer have idle sounds ([MCPE-141856](https://bugs.mojang.com/browse/MCPE-141856))

**Blocks**

- Breaking a block below fire no longer creates an invisible fire block when the 'doFireTick' gamerule is disabled ([MCPE-101371](https://bugs.mojang.com/browse/MCPE-101371))
- Players can once again continuously place water, lava, and Powder Snow by holding down the 'Place' button ([MCPE-139671](https://bugs.mojang.com/browse/MCPE-139671))
- Light blocks no longer support blocks that need support, e.g. Beds and Paintings ([MCPE-144311](https://bugs.mojang.com/browse/MCPE-144311))
- Light blocks will now survive a TNT or Creeper explosion
- All ground vegetation can now be placed on Mycelium ([MCPE-125928](https://bugs.mojang.com/browse/MCPE-125928))
- Fixed shallow water turning brighter when aimed at while holding a Small Drip Leaf ([MCPE-123373](https://bugs.mojang.com/browse/MCPE-123373))
- Tall flowers will now drop only one item when broken by water placed in the upper half of the flower ([MCPE-142799](https://bugs.mojang.com/browse/MCPE-142799))
- Campfires no longer drop only one Charcoal when broken by a Piston or an explosion, instead dropping two units as expected ([MCPE-139467](https://bugs.mojang.com/browse/MCPE-139467))
- In the Stonecutter, a Block of Copper can now be crafted into four Cut Copper ([MCPE-144067](https://bugs.mojang.com/browse/MCPE-144067))
- Copper Ore now drops 2-5 (from 2-3) Raw Copper items ([MCPE-144071](https://bugs.mojang.com/browse/MCPE-144071))
- Nether Sprouts can once again generate when using Bone Meal on Warped Nylium ([MCPE-139672](https://bugs.mojang.com/browse/MCPE-139672))
- Snow Grass Block and all types of Snow blocks now use similar colors ([MCPE-57022](https://bugs.mojang.com/browse/MCPE-57022))
- Fixed Leaf Blocks not remaining transparent when surrounded by partial blocks such as Buttons or Slabs ([MCPE-139213](https://bugs.mojang.com/browse/MCPE-139213), [MCPE-53731](https://bugs.mojang.com/browse/MCPE-53731))
- Fixed face culling of blocks placed below Leaf blocks, fixing an x-ray effect

**Items**

- Adjusted the smoothness of movement for Primed TNT, Lingering Potions, Splash Potions, and Bottle o' Enchanting when far from players ([MCPE-101102](https://bugs.mojang.com/browse/MCPE-101102))
- Fire Charges are no longer consumed when used on lit Candles, Candle Cakes, Campfires, activated Nether Portals, or on other blocks that are already on fire
- Multiple Education Edition items no longer show the "craftingScreen.tab.none" tooltip ([MCPE-102444](https://bugs.mojang.com/browse/MCPE-102444))
- Ender Pearls can no longer generate as Glow Sticks in Woodland Mansion chests ([MCPE-137440](https://bugs.mojang.com/browse/MCPE-137440))

**Accessibility**

- Added missing screen reader on the "Controller lost connection" prompt

**Graphical**

- The Carved Pumpkin enchantment glint now only covers the item instead of the entire slot
- Fixed a bug that could occur on older worlds where looking up in a Minecart would display the inside of the Minecart, blocking the player's view
- Updated item rendering so enchanted are no longer be invisible in the Nether ([MCPE-116880](https://bugs.mojang.com/browse/MCPE-116880))
- Fixed a visual glitch where taking a plant from a Flower Pot would result in the plant still being rendered ([MCPE-143661](https://bugs.mojang.com/browse/MCPE-143661))
- Water drips now trigger splash effects
- Shield blocking animation now plays smoothly ([MCPE-125951](https://bugs.mojang.com/browse/MCPE-125951))

**User Interface**

- Fixed Java Edition parity while lying in bed in multiplayer game. A message will now show how many players are lying in bed while waiting for all players to fall asleep
- Updated the "out of storage" message with additional clarity when a device is out of storage for saving new worlds
- The raid boss bar color has changed from purple to red, matching Java Edition ([MCPE-46047](https://bugs.mojang.com/browse/MCPE-46047))
- Raid boss bars now decrease whenever a raider takes damage
- Structure Blocks can now be saved and loaded properly within current dimension height limits ([MCPE-122643](https://bugs.mojang.com/browse/MCPE-122643))
- All setting changes made to a new world are carried over when creating it on a new Realm
- Renamed some occurrences of "level" in the user interface to the more accurate "world"
- The store update prompt no longer appears for no internet connection or session start failure
- Improved the error messaging in the Play screen when Microsoft Account permissions are set to block multiplayer
- Fixed an issue where searching for non-existent content brought up the incorrect "1 result" message
- Fixed overlapping text on Marketplace offerings occurring on 4:3 resolution screens
- Fixed the rendering of the icons in text, making the colors not appear distorted

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.18.0 with new resources, behaviors, and documentation, are available to download at [aka.ms/MCAddOnPacks](https://aka.ms/MCAddOnPacks)

**Fixes**

- Players are disconnected if server and client have different Runtime Block IDs
- Fixed a rendering error that could occur when attempting to render a Vanilla mob in a base game version prior to the version that mob was introduced through JSON files
- Most content errors and warnings will now only display once per world ([MCPE-135153](https://bugs.mojang.com/browse/MCPE-135153))
- Improved performance in 'RangedAttackGoal' for mobs that do not move
- Fixed mobs' default summonability when not specified in JSON
- Fixed a versioning error with animation controllers that was causing the wrong schema to be utilized on Marketplace worlds with an animation controller version 1.8.0

**Commands**

- The '/clone' command has been updated to properly check for overlapping source and destinations areas no longer allowing for a 1 block depth overlap on each axis. This can continue to be overridden via the force clone option

**GameTest Framework  **

- New Item API updates: ItemStack
  - Exposed interfaces for accessing script-enabled ItemComponents on ItemStack. Note that these item components only work in conjunction with custom items defined via the Holiday Creator Features experiment
  - hasComponent(componentId: string) - returns true if the ItemStack has the component \[componentId\] attached to it
  - getComponent(componentId: string) - returns a handle to the component attached to this ItemStack. Returns an undefined handle if the component does not exist or if the component is yet to be exposed to script
  - getComponents() - returns an array of all attached script-enabled components on this ItemStack
- Script Enabled Item Components
  - minecraft:food
    - Read-only property nutrition - number that describes how much nutrition this food item gives the player when eaten
    - Read-only property saturationModifier - number that is the saturation modifier used to apply the saturation buff when eaten
    - Read-only property canAlwaysEat - if true the player can always eat this item (even when not hungry)
    - Read-only property usingConvertsTo - string name of the Item this will be converted to when eaten. If empty, the item will not convert to anything else
  - minecraft:durability
    - Read-only property maxDurability - the number amount of damage this item can take before breaking
    - Read-only property damageRange - a NumberRange describing the chance of the item losing durability
    - Property damage - gets or sets the current damage on the ItemStack
  - getDamageChance(unbreaking: number = 0) - gets the maximum chance that this item would be damaged using the damageRange property if given an unbreaking level. Incoming unbreaking parameter must be greater than 0
- Added deltaTime read only property to TickEvent which represents the time between the last Level tick in seconds

**Molang**

- Fixed content error when Molang expression has no tokens to only fire when 'min_engine_version' is 1.17.40 or higher
