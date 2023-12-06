---
title: Minecraft Beta & Preview - 1.20.60.22
date: 2023-12-06T14:07:39Z
updated: 2023-12-06T14:13:34Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/21999492368781-Minecraft-Beta-Preview-1-20-60-22
---

**Posted:** 6 December 2023

## **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A breeze mob next to a trial spawner, in a trial chamber](https://feedback.minecraft.net/hc/article_attachments/21999475600269)

 

We have another Minecraft Beta and Preview update, with more tweaks and fixes! As always, we’d want to hear your feedback on these features, so please send us your thoughts and suggestions [here](https://aka.ms/Minecraft121Feedback) and report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)!

# **Experimental Features**

## **Copper Door**

- Updated Copper Door textures, including oxidized variations
- Copper Doors and Trapdoors have now correct breaking time and blast resistance 

## **Breeze**

- Breeze ground particles now stop playing when they're riding other entities
- Separated the Breeze diffuse and emissive textures

# **Features and Bug Fixes**

## **Blocks**

- Containers being cloned over no longer keep their container screens open and no longer cause crashes

## **General**

- Fixed a rare crash that could occur with the “Seven Seas” achievement

## **Character Creator**

- Fixed a bug that kept the previewed item on the paper doll even after navigating back using the sidebar
- All unowned and owned emotes should now be discoverable within the emotes section of Dressing Room 

## **User Interface**

- Last highlighted button will not get pressed when the window regains focus anymore ([MCPE-170377](https://bugs.mojang.com/browse/MCPE-170377)) 
- The Friends drawer on the Play screen now makes sounds when opened and closed 

# **Technical Updates**

## **API**

- Made the display name parameter optional in Scoreboard *addObjective*

## **Blocks**

- Changing the *brightness_gamma* value for blocks now darkens the block correctly ([MCPE-167836](https://bugs.mojang.com/browse/MCPE-167836))

## **Components**

- Added a "drop_item_slot" field to the "interact" component, which allows to specify an inventory slot to remove and drop items from

## **Editor**

- Tool Test World was moved from toolrail and is now under menu World Options

## **Graphical**

- Fixed a crash that could occur when players placed or destroyed any block and then Save & Quit with Ray Tracing enabled

## **Stability and Performance**

- Send "material" for vanilla data-driven blocks in the StartGamePacket blockProperties. "block_id" is also moved to the "vanilla_block_data" object

# **Experimental Technical Updates**

## **API**

- Added method *eatItem(itemStack: ItemStack): void;.*
- BlockSignComponent
  - Changed signature of function *setWaxed* to *setWaxed(waxed: boolean)*
  - Removed event/property *pistonActivate*
- Added enum BlockPistonState export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting" }
- Class BlockPistonComponent
  - Removed property isExpanded
  - Removed property isExpanding
  - Removed property isRetracted
  - Removed property isRetracting
  - Added property *readonly state: BlockPistonState*
  - Changed function *getAttachedBlocks* to *return type Block\[\]*
  - Added function *getAttachedBlocksLocations(): Vector3\[\]*
- Removed class *PistonActivateBeforeEvent*
- Removed class *PistonActivateBeforeEventSignal*
- Types
  - Moved BlockType from *beta *to *1.8.0*
  - Moved FluidType from *beta* to *1.8.0*
- Moved *NavigationResult *from *@minecraft/server* to *@minecraft/server-gametest*

## **Graphical**

- Adjusted the falloff of point light sources (e.g., torches, lanterns, etc...) to use a square, Manhattan-based distance metric in the Deferred Technical Preview.
- Tinted ambient light color with point light color for better multi-colored lighting over large distances in the Deferred Technical Preview

## **Scripting**

- Fixed issue where *ActionFormData* buttons could not be clicked if there were more than 255 buttons in the form
