---
title: Minecraft Beta & Preview - 1.20.0.21
date: 2023-04-19T15:23:45Z
updated: 2023-04-20T08:32:16Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/14998295276941-Minecraft-Beta-Preview-1-20-0-21
---

**Posted:** 19 April, 2023

**Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality 
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![A Minecraft screenshot featuring a villager and a sniffer standing in front of a cave near a cherry grove](https://feedback.minecraft.net/hc/article_attachments/14998197233421)

 

Here’s a run down of what’s new in this week’s Minecraft Preview and Beta! As always, don’t forget to send us all your feedback and ideas at [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

# **Features and Bug Fixes**

## **Experimental Toggle**

- All Trails & Tales content has now been “de-experimentified” and is available during normal gameplay
- Removed the Next Major Update toggle, since it has no active experimental content

## **Accessibility Features**

- The four Creative Inventory tabs now have their names read out by text-to-speech

## **Blocks**

- Suspicious Sand and Suspicious Gravel now play their respective sounds when brushing them has completed ([MCPE-168805](https://bugs.mojang.com/browse/MCPE-168805))

## **Decorated Pot**

- Decorated Pot faces now use the top rows of pixels ([MCPE-168834](https://bugs.mojang.com/browse/MCPE-168834))

## **Pitcher Crop**

- The Pitcher Crop hitbox will now change in size according to its age ([MCPE-169534](https://bugs.mojang.com/browse/MCPE-169534))

## **Pitcher Crop Block**

- Pitcher Crop block now uses bottom texture ([MCPE-169490](https://bugs.mojang.com/browse/MCPE-169490))

## **Calibrated Sculk Sensor**

- Calibrated Sculk Sensors now power the block below them when active
- Calibrated Sculk Sensors now have an active cooldown of 1 second instead of 2 seconds ([MCPE-169531](https://bugs.mojang.com/browse/MCPE-169531))
- Calibrated Sculk Sensors now detect vibrations up to 16 blocks away instead of 8 blocks ([MCPE-169532](https://bugs.mojang.com/browse/MCPE-169532))

## **Gameplay**

- Fixed fall damage accumulating when player jumps on roofed Soul Sand Bubble Column

## **Graphical**

- The Decorated Pot now respects the lighting conditions when held in hand or dropped ([MCPE-167191](https://bugs.mojang.com/browse/MCPE-167191))
- Conduit block now respects the lighting conditions when held in hand or dropped

## **Signs**

- A sound is now played when trying to interact with a waxed Sign ([MCPE-168807](https://bugs.mojang.com/browse/MCPE-168807))
- It is no longer possible to use Ink Sac, Glow Ink Sac, or Dyes if the text that would be changed is empty ([MCPE-133778](https://bugs.mojang.com/browse/MCPE-133778))
- Interacting with an unwaxed Sign while holding an item that cannot be used on the sign now opens the sign for editing
- Interacting with a Sign while holding certain item no longer also trigger the item's specific action in addition to opening the Sign for editing ([MCPE-168838](https://bugs.mojang.com/browse/MCPE-168838))
  - Examples of items that caused this are: Brush, Armor, Fishing Rod, Book & Quill, Goat Horn, Empty Map
- When using gamepad or touch input, correct tooltips are now shown if interacting with the Sign is possible
- When editing the text of a Sign the text color now matches the dye of the sign ([MCPE-168818](https://bugs.mojang.com/browse/MCPE-168818))
- It is now possible to attach a hanging sign to another without sneaking

## **Sniffer**

- Fixed the Sniffer's head Z-fighting with their body ([MCPE-169423](https://bugs.mojang.com/browse/MCPE-169423))

## **Sculk Sensor**

- Sculk Sensors now power the block below them when active

## **Sculk Shrieker**

- Waterlogging a Sculk Shrieker will now silence its shriek sounds ([MCPE-169563](https://bugs.mojang.com/browse/MCPE-169563))

## **User Interface**

- Marketplace and Dressing Room cycle buttons now show navigation chevron when using a controller and controller hints are disabled ([MCPE-147711](https://bugs.mojang.com/browse/MCPE-147711))
- Fixed the multiplayer toggle in the Create New World screen sometimes wasn't greyed out even though the setting would have no effect
- Coordinates are now shown on the new death screen if the "Show Coordinates" setting is enabled

## **Vanilla Parity**

- Top and bottom Door textures now rotate correctly when opened and closed for worlds versioned from 1.20 onward ([MCPE-152926](https://bugs.mojang.com/browse/MCPE-152926))

## **Vibration Frequencies**

- In preparation for the Calibrated Sculk Sensor, vibration frequencies have been greatly simplified to prevent unwanted interference
- The following are category descriptions for each frequency and the expected events that they correspond to:
  1.  Movement in any medium (land, liquid or air)
  2.  Landing on any surface (land or liquid)
  3.  Item interactions
  4.  Gliding with an Elytra or unique mob actions (Ravager roaring, Wolf shaking, etc.)
  5.  Equipping gear
  6.  Interacting with a mob
  7.  Mobs and players getting damaged
  8.  Consuming items (drinking and eating)
  9.  Blocks 'deactivating' (Door closing, Chest closing, Button unpressing, etc.)
  10. Blocks 'activating' (Door opening, Chest opening, Button being pressed, etc.)
  11. Blocks changing (Cauldron water level rising, adding food to a Campfire, etc.)
  12. Blocks being destroyed
  13. Blocks being placed
  14. Mobs and players spawning
  15. Mobs and players dying or an explosion

# **Technical Updates**

## **Editor**

- Fixed bug where Editor could be accessed during a regular gameplay session

## **General**

- Fix "get_equipped_item_name" Molang query not being able to return the old name of some flattened items, eg. red_wool to wool

## **Entities**

- Introduced new entity filters "all_slots_empty" and "any_slot_empty" to allow searching for empty item slots in a designated equipment location ([MCPE-153909](https://bugs.mojang.com/browse/MCPE-153909))

## **Graphical**

- Fixed a crash when enabling ray tracing in ray tracing compatible content that was loaded into with ray tracing turned off ([MCPE-168894](https://bugs.mojang.com/browse/MCPE-168894))

## **Items**

- Custom items with 'minecraft:durability' and 'minecraft:repairable' can be combined to repair them without requiring a custom item entry

## **Recipes**

- Fixed incorrect content warnings for recipes that use the same blocks but with different data ([MCPE-168717](https://bugs.mojang.com/browse/MCPE-168717))

## **Components**

- Attribute "speed_multiplier" in the "minecraft:boostable" component is now being parsed correctly from json file. Old behavior is maintained for "format_version" lower than 1.20 with 1.35 value rather than what the json file specifies ([MCPE-164424](https://bugs.mojang.com/browse/MCPE-164424))

# **Experimental Technical Features**

## **Add-Ons**

- Added "minecraft:facing_direction" state to the "minecraft:placement_direction" block trait.
  - "minecraft:facing_direction" is a six value integer state (down, up, south, west, north, east)
  - Can enable and access this state on blocks through the "minecraft:placement_direction" trait
  - Can access the "minecraft:cardinal_direction" state on blocks that apply the "minecraft:placement_direction" trait in block_property Molang queries and set_block_property EventResponses
- Pumpkin blocks use state "minecraft:cardinal_direction" instead of "direction"

## **API**

- Fixed a bug where modified equipment and container slots were not being synced to clients
- *@minecraft/server*
  - Renamed *BlockProperties*to *BlockStates*
  - Renamed *getAllProperties*to *BlockPermutation.getAllStates*
  - Renamed *getProperty*to *BlockPermutation.getState*
