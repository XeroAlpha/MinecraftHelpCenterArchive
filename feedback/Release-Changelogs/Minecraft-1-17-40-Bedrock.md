---
title: Minecraft - 1.17.40 (Bedrock)
date: 2021-10-14T17:17:21Z
updated: 2021-10-21T22:25:04Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4411311573133-Minecraft-1-17-40-Bedrock
---

**Posted:** October 19, 2021

The 1.17.40 update has arrived! This release brings new bug fixes to the game, as well as some new experimental features.

Please search for any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/) and let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/).

![mceclip0.png](https://feedback.minecraft.net/hc/article_attachments/4411312077069/mceclip0.png)

**Experimental Features:**

**Reminder:** We are still tweaking world generation and features may change. Please remember to **make regular backup copies** of your favourite worlds!

Please keep in mind that these features are work in progress, still under in development, and subject to change. If you activate them, your world might crash, break, or not work with future updates. Experimental features cannot be turned off after world creation.

For more information, please see the article about enabling experimental features at [aka.ms/MCExperimentalFeatures](https://aka.ms/MCExperimentalFeatures).

- Added new world/cave generation when upgrading saved chunks below "Y=0" using the Caves & Cliffs experimental toggle
  - Chunks previously upgraded with Bedrock underneath will not see this change
  - For more information, please see our [FAQ](https://aka.ms/ccworldupgrade)! We'd love to hear your feedback about it at [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback)
- Added a new mountain biome: Stony Peaks!
  - This is a variant of lofty/snow-capped peaks that uses stone and gravel instead of snow and ice, and is used to avoid temperature clashes such as a snow-capped peak sticking up from a jungle 
- Corrected vegetation in Mountain Meadows
- Dripstone Clusters can now only be found in the Dripstone biome
- Dripstone features now only generate in Dripstone biome
- Mountain biomes now have correct feature places to match the Java Edition side-snapshot
- Infested Stone can be found under new mountains
- Tweaked ore distribution to match the Java Edition side-snapshot
- Clouds are now at Y level 192
- Tweaked biome placement, river size, and terrain shapes for a better overworld experience 
- Tweaked mob spawning in mountain and cave biomes to match the Java Edition side-snapshot 
- Trees in swamps can now generate slightly deeper when in water
- Deepslate now generates at lower depths ([MCPE-125117](https://bugs.mojang.com/browse/MCPE-125117))
- Dripstone features now generate at Deepslate depths
- The placement logic of Small Dripstone feature has been refactored so frequency is similar but exact positions will differ
- Copper Ore now generates up to y=96 instead of y=64 ([MCPE-125233](https://bugs.mojang.com/browse/MCPE-125233))
- Flat worlds with the Caves & Cliffs experimental toggle enabled will properly upgrade to use the new dimension heights
- Upgrades older flat worlds to the new extended heights available with the Caves & Cliffs experimental toggle
- New flat worlds using the Caves & Cliffs experimental toggle will generate starting at "y=-64"
- Maps now correctly show the colors of blocks below a Y level of zero ([MCPE-136638](https://bugs.mojang.com/browse/MCPE-136638))
- Vines now generate in Lush Caves instead of generating above the surface ([MCPE-125800](https://bugs.mojang.com/browse/MCPE-125800))
- Vines can now grow down below zero height
- Villages now generate in the style of the biome they are located in ([MCPE-136939](https://bugs.mojang.com/browse/MCPE-136939))

**Changes:**

- New achievements screens are now available on Windows 10 ARM-based PCs

**Fixes:**

**Performance / Stability**

- Fixed a crash that could occur when using Character Creator
- Fixed a softlock that could occur when on the Realms world slots screen and the internet connection was lost

**General**

- Fixed an issue causing Marketplace downloads on Nintendo Switch to fail after entering and leaving a world
- World settings are now carried over on to Realms when replacing worlds

**Gameplay**

- Fixed a most unfortunate issue that caused players to be set on fire upon changing dimensions if there was Lava underneath the Nether Portal ([MCPE-28765](https://bugs.mojang.com/browse/MCPE-28765))
- Improved world visibility culling for underground situations to eliminate seeing sky at the end of tunnels/stairs ([MCPE-128372](https://bugs.mojang.com/browse/MCPE-128372))
- Players can no longer eat food at full hunger in Survival mode ([MCPE-60807](https://bugs.mojang.com/browse/MCPE-60807))
- Amethyst geodes are now much less likely to generate in Strongholds, and if they do they will not destroy End Portals ([MCPE-129861](https://bugs.mojang.com/browse/MCPE-129861), [MCPE-128799](https://bugs.mojang.com/browse/MCPE-128799))
- Dungeons are no longer misplaced or missing outside of the Caves & Cliffs experimental toggle ([MCPE-121708](https://bugs.mojang.com/browse/MCPE-121708))
- Vanilla Parity: Players are now able to activate Elytra gliding while moving upward ([MCPE-59580](https://bugs.mojang.com/browse/MCPE-59580))

**Mobs**

- Tropical Fish no longer lose their colors upon grabbing them with a Water Bucket and then releasing them ([MCPE-137158](https://bugs.mojang.com/browse/MCPE-137158))
- Bees now spawn properly in the world ([MCPE-132195](https://bugs.mojang.com/browse/MCPE-132195))
- Mobs no longer casually stroll into open flames ([MCPE-23835](https://bugs.mojang.com/browse/MCPE-23835))
- Villagers can no longer spam doors open and closed ([MCPE-28055](https://bugs.mojang.com/browse/MCPE-28055))
- Cartographers now more consistently give new maps on all platforms
- Improved mob pathing around partial blocks ([MCPE-127381](https://bugs.mojang.com/browse/MCPE-127381))
- Armor no longer renders on Pillagers and Vindicators, but the mobs are still granted armor effects ([MCPE-74242](https://bugs.mojang.com/browse/MCPE-74242))
- Fixed an issue with mob rendering that caused Vindicator Axes to be visible even when they're not attacking on older Resource Packs ([MCPE-123229](https://bugs.mojang.com/browse/MCPE-123229))
- More mobs will now spawn underground in the Overworld
- Fixed failure to render Leads when attached to mobs out of view ([MCPE-63931](https://bugs.mojang.com/browse/MCPE-63931))
- Iron Golems now spawn only on solid blocks ([MCPE-140145](https://bugs.mojang.com/browse/MCPE-140145))

**Blocks**

- Falling Stalactites are now offset properly to avoid interacting with entities outside their intended hitbox ([MCPE-132772](https://bugs.mojang.com/browse/MCPE-132772))
- Beehives now generate in the world facing South
- Trapdoors now rotate correctly when loaded from a Structure Block([MCPE-66933](https://bugs.mojang.com/browse/MCPE-66933))
- Powder Snow no longer disappears when looking at it from a distance ([MCPE-127565](https://bugs.mojang.com/browse/MCPE-127565))
- Sea Grass no longer spawns under Lily Pads during world generation to avoid breaking them
- Holding Top Snow in hand while hovering over Grass Blocks no longer causes incorrect behavior ([MCPE-140659](https://bugs.mojang.com/browse/MCPE-140659), [MCPE-140660](https://bugs.mojang.com/browse/MCPE-140660))

**User Interface**

- Riding an animal now displays the correct button prompt when playing with non-touch controls
- Using Dye on Signs that contain formatted color text will now overwrite the formatted color text
- Fixed text on Signs losing their formatting when new lines or word-wrapping are encountered. Formatting will now persist until the reset code or an overriding code is found. This is not retroactive and previously created Signs will not be changed
- Altered the message that is displayed when players change skins in-game ([MCPE-92772](https://bugs.mojang.com/browse/MCPE-92772))
- Fixed an issue where the D-pad and directional keys could not be used to navigate in certain parts of the user interface ([MCPE-132826](https://bugs.mojang.com/browse/MCPE-132826))
- Fixed an issue where an error message could be shown after suspending the game on the Achievements screens with Screen Animations disabled ([MCPE-132269](https://bugs.mojang.com/browse/MCPE-132269))
- Fixed an issue where an obscure game rule was added to Settings ([MCPE-139025](https://bugs.mojang.com/browse/MCPE-139025))
- The sign in text on the main menu no longer overlaps the Marketplace button
- Added space between tab title and the word 'Tab' for text-to-speech on Settings screen
- Added a "More Info" button to the sign in error screen

**Realms**

- All changes to settings made on new worlds before creation are now transferred to the world after creation
- Enabled ‘server authoritative block breaking’ on Realms
  - This change should address the issue with blocks sometimes reappearing after they have been broken ([MCPE-48914](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbugs.mojang.com%2Fbrowse%2FMCPE-48914&data=04%7C01%7CMatt.Gartzke%40microsoft.com%7C6c1b1a9f8587421176e008d994e0be3d%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637704515311692075%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=1Ymh3gJpFh7lKIUBPoE0%2FyACg3OU17vMnJsLlRm%2F9y8%3D&reserved=0))

**Character Creator**

- In Character Creator, tweaked color tint for the default Steve skin to match default Steve ([MCPE-120818](https://bugs.mojang.com/browse/MCPE-120818))
- Back appearance pieces will no longer cover the left and right arrows in the profile screen
- Sidebar no longer opens upon expanding any of the classic skin packs in the Dressing Room
- Improved the navigation flow for Character Creator so that it always switches to the selected Character Creator profile ([MCPE-139022](https://bugs.mojang.com/browse/MCPE-139022))
- Skins that are equipped from Marketplace while in-game now apply to the player’s character

**Commands**

- Education Edition items are no longer shown as an option when using @e\[type=\] ([MCPE-78363](https://bugs.mojang.com/browse/MCPE-78363))
- Command Blocks with 'Needs Redstone' and a non-zero 'Delay in Ticks' will now execute only if they remain powered for the delay duration ([MCPE-74281](https://bugs.mojang.com/browse/MCPE-74281))
- Fixed alignment of the sidebar display from the '/scoreboard' command when text length changes
- Fixed the ability to summon experience orbs via the '/summon' command ([MCPE-130835](https://bugs.mojang.com/browse/MCPE-130835))**  **

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.17.40 are available for download with new resources, behaviors, and documentation
  - Resource Pack Template: [aka.ms/ResourcePackTemplate](https://aka.ms/ResourcePackTemplate)
  - Behavior Pack Template (Includes documentation): [aka.ms/BehaviorPackTemplate](https://aka.ms/BehaviorPackTemplate)

**Fixes**

- Fixed display only entity destruction in chunk discard scenarios
- Fixed a bug that caused animations to be restarted when changing render controllers

**Data-Driven Blocks** 

- Updated documentation for the Block Rotation component
- Updated documentation for 'BlockExplosionResistance'
- Added required toggles to documentation and to content error for block components

**Graphical**

- Added a content error for using a material but not providing the required number of textures to the render controller

**Molang** 

- Fixed 'item_remaining_use_duration'having improperly scaled or inverted results (This fix is a Versioned Change as of engine version 1.17.30)
- Add new compile errors for expressions like 'text' + 3, which were previously ignored (This is a Versioned Change as of engine version 1.17.40)
- Molang expressions that contain capital letters are properly evaluated now
- 'query.get_equipped_item_name' will now recognize Sea Lanterns ([MCPE-67893](https://bugs.mojang.com/browse/MCPE-67893))
- Added new compile errors for expressions like 1 + (9 10), which were previously ignored (This is a Versioned Change as of engine version 1.17.40)

**GameTest Framework (Experimental)** 

- Renamed method 'succeedWhenBlockTypePresent' to 'succeedWhenBlockPresent'
- Fixed a bug where property id would return "Unknown" for custom entities ([MCPE-137786](https://bugs.mojang.com/browse/MCPE-137786))
- Identifier strings returned from property id now include the item's namespace
- Updated the GameTest Framework interface and added a new SimulatedPlayer capability:
  - Added 'SimulatedPlayer'class to GameTest. This class enables GameTest to simulate a variety of player behaviors such as movement, using items, and interacting with blocks and entities. See the [GameTest API](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest) reference documentation for more details
    - Added function spawnSimulatedPlayer(blockLocation: BlockLocation, name: string): SimulatedPlayer
    - Added function   
      removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void
  - mojang-gametest.Test type
    - Changed signature of function assertEntityInstancePresent(entity: Entity, blockLocation: BlockLocation, isPresent: boolean = true)
  - mojang-minecraft components
    - Component 'inventory'now works with Player inventories

**GameTestSequence** 

- Removed method 'thenWaitWithDelay'
- Added method 'thenWaitAfter(delayTicks: number, callback: () =\> undefined)'- After a delay, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution

**Player** 

- Fixed a bug where the location property would return an incorrect height for players
- Added property 'id'

**Block** 

- Replaced method 'getLocation' with property 'location'
- Replaced method getPermutation with property 'permutation'
- Replaced method 'getType' with property 'type'
- Replaced methods 'isWaterlogged' and 'setWaterlogged' with property 'isWaterlogged'
- Replaced method 'getBlockData' with property 'permutation'
- Replaced method 'isEmpty' with property 'isEmpty'
- Removed property 'canBeWaterlogged'

**BlockType**

- Replaced method 'getName' with property 'id'
- Replaced method 'canBeWaterlogged' with property 'canBeWaterlogged'

**BlockPermutation**

- Replaced method 'getType' with property 'type'
