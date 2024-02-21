---
title: Minecraft Beta - 1.16.100.56 (Xbox One/Windows 10/Android)
date: 2020-09-17T09:26:14Z
updated: 2020-09-18T14:02:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360049825031-Minecraft-Beta-1-16-100-56-Xbox-One-Windows-10-Android
hash:
  technical-changes: technicalchanges
---

**Posted:** 17 September 2020

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

In this week's beta we've fixed several important issues, and we've also included some technical changes that content creators will find useful!  Please remember to keep sending us your bug reports at [bugs.mojang.com](https://bugs.mojang.com/browse/MCPE)!

# **Bug Fixes**

**Performance and Stability** 

- Fixed several crashes that could occur during gameplay  
- Fixed a crash on startup on Xbox One  

**Achievement Screen** 

- Time played now displays correctly on the achievement screen ([MCPE-66331](https://bugs.mojang.com/browse/MCPE-66331))  
- Allow navigating the focus to the summary by pressing left on the gamepad when narration is enabled  
- Updated input legends for achievement list and achievement reward  
- "Screen" is now narrated when opening an achievement detail screen  
- Fixed how we calculate how many rewards a player has  
- Show the achievements, even after a timeout, when the data has been fetched  
- Don't play click sounds when using a mouse button that is not primary  
- Fix issue where the scrollbar would appear even when there is no content to scroll  
- Added acceleration to focus navigation while using a gamepad  
- Fixed focus persistency while switching from the All tab  
- Fixed support for the mouse "back button" to go back from the achievements screen  
- Fixed support for the Escape button to go back from the achievements screen  
- Fixed an issue where the Input Legend for a Tab would be "open" even when the Tab was already selected  

**General** 

- Fixed text-to-speech not reading the messages on various screens  
- Fixed maps not being in the list of items when using the /clear command  
- Fixed sign-in button becoming unresponsive after backing out of sign-in prompt screen 

**Gameplay** 

- Cobblestone is now shown as the default ingredient for stone tools ([MCPE-71843](https://bugs.mojang.com/browse/MCPE-71843))  
- Reduced and reintroduced linear attenuation for raid horn sound ([MCPE-85593](https://bugs.mojang.com/browse/MCPE-85593))  
- The correct sounds are now played for breaking and placing item frames ([MCPE-98901](https://bugs.mojang.com/browse/MCPE-98901))  

# **Technical Changes** 

**Record Item Component** 

- Items can now be made records to play music in Jukeboxes  

**Component Variables** 

- sound_event A string value corresponding to a sound event in the game code. This string must be one these for music to play: "13", "cat", "blocks", "chirp", "far", "mall", "mellohi", "stal", "strad", "ward", "11", "wait", "pigstep" 
- duration A float value that determines how long particles are spawned from the JukeBox Block, should approximately match length of sound event 
- comparator_signal An integer value that represents the strength of the analogue signal, used by the Comparator Block 

**Examples** 

When added to JukeBox Block this will play the sound clip of "record.chirp" 

- Example 1: "minecraft:record": { "sound_event": "chirp", "duration": 185.0, "comparator_signal": 4 } 

**Item Names** 

- Renamed items to be consistent with the list of Java items found [here](https://minecraft.gamepedia.com/Java_Edition_data_value#Items)  
- Added new BlockRaycastComponent that can override the AABB used for outlines and raycasting  ) 
- Added new BlockCollisionComponent that can override the AABB used for entity collision ) 
- Added new BlockPropertyComponent that can replace the blockProperties : Unwalkable, Infiniburn, PreventsJumping, Immovable, BreakOnPush, OnlyPistonPush and BreaksWhenHitByArrow  
- Added new BlockQueuedTickingComponent that triggers events for a block on a range of time set by the creator  
- Added new BlockRandomTickingComponent that triggers events for a block randomly  
- Added a Rotation Component that allows a block to rotate The component only allows axis-aligned rotations  
- Adds the base implementation of the CraftingTableComponent  
  - Allows the creation of custom crafting tables 
  - Currently only supports 3x3 grids 

**Add-Ons and Script Engine** 

Added 'minecraft:placement\_filter' component which allows you to set conditions for where this block can be placed This component will also kick in whenever neighboring blocks change and pop it's loot if it is no longer in a valid location 

- Added serialization to Block Descriptor  
- Added static anyMatch functions to BlockDescriptor to compare a list of BlockDescriptors against: Block\*, BlockLegacy, or BlockDescriptor  

<!-- -->

- Added a function to compare two BlockDescriptors. This covers: matching blocks, any tag of either descriptor match, block states with matching permutations  
- Changed the BlockDescriptor BlockLegacy member variable to a Block\* so we can set the block states during deferred block resolution and get the block with the states set  
- Removed all the existing Block\* json parsing  
- Added unit tests to verify parsing and serializing block descriptors  
- Added unit tests to verify comparing a BlockDescriptors against each other  

<!-- -->

- Added unit tests to verify getting a block from BlockDescriptor with the states set  

**DataDrivenBlockEvents** 

- Adds support for parsing and performing the following event responses: 
  - Added the set_block_at_pos event response  
  - Spawn Loot  
  - Set Block  
- Added support for the on_interact trigger component  
  - Added support for the on_player_placing trigger component  
  - Also added MoLang queries for cardinal_block_face_placed_on and cardinal_player_facing for getting placement context 

**DataDrivenBlockModels** 

- Added the first pass of the new data driven block tessellation pipeline 
- Added the "minecraft:geometry" component to allow using a block model for rendering  
- Added the "minecraft:unit\_cube" component to allow using a default unit cube for rendering. Unit cubes get some extra effects like ambient occlusion and face removal  
- Added the "minecraft:material\_instances" component to allow mapping faces and material_instances in a geometry file to an actual material  

**DataDrivenBlockModels - SmoothLighting** 

- Fixed smooth lighting and ambient occlusion with new data driven blocks  

**Schema** 

- Split allowed_blocks into use_on and dispense_on 
- use_on specifies what blocks an entity placer item is allowed to be used on, omit to allow all blocks 
- dispense_on specifies what blocks an entity placer item is allowed to be dispensed on, omit to allow all blocks 

**ExecuteCommand** 

- Added support to item json events for the execute_command keyword. It supports both a string and string array format, where the string is the command intended to run. Commands are compiled at load time and executed after add/remove_mob_effect and teleport actions, but before other triggers for events. Commands will be segmented in sequence and randomize nodes as expected.  

**Items** 

- Created RepairableItemComponent that data-drives how an item is repaired in game. Data is structured as follows in the item JSON file: 

<!-- -->

    { 
    "format_version": "1.16.100", 
    "minecraft:item": { 
    ... 
        "minecraft:repairable": { 
          "repair_items": [ 
            { 
              "items": [ "minecraft:item" ], 
              "repair_amount": "query.max_damage * 0.25" 
            }, 
            { 
              "items": [ "minecraft:item", "minecraft:item2" ], 
              "repair_amount": "context.other->query.remaining_health + 0.05 * context.other->query.max_damage" 
            }, 
            { 
              "items": [ "minecraft:item3" ], 
              "on_repaired": { 
                "event": "repaired", 
                "target": "self" 
              } 
            } 
          ] 
        } 
      }, 
      "events": { 
        "repaired": { 
          "transform_item": { 
            "transform": "item_name" 
          } 
        } 
      } 
    } 
    } 

**RunCommand** 

- Added support to entity json events for the run_command keyword alongside the current add and remove keywords. It supports both a string and string array format, where the string is the command intended to run. Commands will be run after component groups have been added and removed, and will be segmented in sequence and randomize nodes as expected. 

Updated the following components to parse and use BlockDescriptor instead of Block\*  

- BlockBreakSensorComponent 
- BlockListEventMap 
- BreathableComponent 
- BreedableComponent 
- BuoyancyComponent 
- EntityPlacerItemComponent 
- PreferredPathComponent 
- SeedItemComponentLegacy 

Updated the following features to parse and use BlockDescriptor instead of Block\*  

- NoSurfaceOreFeature 
- OreFeature 
- SingleBlockFeature 

Updated the following goal definitions to parse and use BlockDescriptor instead of Block\*  

- GoalDefinition 
- RaidGardenGoal 
- VanillaGoalDefinition 

Updated the following surfaces code to parse and use BlockDescriptor instead of Block\*  

- MesaSurfaceAttributes 
- SurfaceMaterialAdjustmentAttributes 
- SurfaceMaterialAttributes 

Updated the following tests to reflect the changes from updating code to use BlockDescriptors  

- BuoyancyComponentServerTests 
- FeatureHelperTests 
- NoSurfaceOreFeatureTests 
- OreFeatureTests 
- SingleBlockFeatureTests 

Updated the following trees to parse and use BlockDescriptor instead of Block\*  

- AcaciaTreeCanopy 
- AcaciaTreeTrunk 
- FallenTreeTrunk 
- FancyTreeCanopy 
- FancyTreeTrunk 
- MegaPineTreeCanopy 
- MegaTreeCanopy 
- MegaTreeTrunk 
- PineTreeCanopy 
- RoofedTreeCanopy 
- SimpleTreeCanopy 
- SimpleTreeTrunk 
- SpruceTreeCanopy 
- TreeHelper
