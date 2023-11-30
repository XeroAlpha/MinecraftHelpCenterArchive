---
title: Minecraft Beta & Preview - 1.19.30.20
date: 2022-08-04T12:29:51Z
updated: 2022-08-04T15:46:03Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/8175535399181-Minecraft-Beta-Preview-1-19-30-20
---

**Posted:** 4th August 2022

## **Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions 

![beta19U3_1_16x9.png](https://feedback.minecraft.net/hc/article_attachments/8175529065357/beta19U3_1_16x9.png)

Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at [bugs.mojang.com](https://bugs.mojang.com/) and send us [your feedback](https://aka.ms/MinecraftBetaFeedback).

# **Vanilla Parity**

**General**

- Endermen no longer get angry at Creative players ([MCPE-42977](https://bugs.mojang.com/browse/MCPE-42977))
- Modified the fireball entity's collision box to match Java Edition
- The Enchanting Table now produces a sound when enchanting an item
- Amethyst blocks no longer produce sound when jumping off of them

### **Deep Dark**

- Increased Sculk Shrieker and Sculk Sensor generation rates in Deep Dark and Ancient Cities to better match Java Edition ([MCPE-153525](https://bugs.mojang.com/browse/MCPE-153525))

### **Melon Block**

- Fixed the bottom texture of the Melon block to match the top texture ([MCPE-31035](https://bugs.mojang.com/browse/MCPE-31035))

### **Mobs**

- Modified the Cat's head position while sitting to match Java Edition ([MCPE-46668](https://bugs.mojang.com/browse/MCPE-46668))

### **User Interface**

- The item stack popup animation will now only play when a new item is added to the stack ([MCPE-23995](https://bugs.mojang.com/browse/MCPE-23995))
- If a Villager has a Nametag, it is now displayed along with their trade tier ([MCPE-152644](https://bugs.mojang.com/browse/MCPE-152644))

### **Spectator Mode (Experimental)**

- Endermen no longer become angry at players in Spectator Mode ([MCPE-156742](https://bugs.mojang.com/browse/MCPE-156742))
- Players in Spectator Mode can no longer interact with Sculk Sensors by swimming in water or lava ([MCPE-153879](https://bugs.mojang.com/browse/MCPE-153879))
- Players switching into Spectator Mode will unhook any fish hooks attached to them
- Players in Spectator mode can no longer be pushed by explosions ([MCPE-156687](https://bugs.mojang.com/browse/MCPE-156687))
- Powder Snow no longer emits particles when spectators move through it ([MCPE-153876](https://bugs.mojang.com/browse/MCPE-153876))
- Big Dripleaf no longer tilts when touched by players in Spectator Mode ([MCPE-156686](https://bugs.mojang.com/browse/MCPE-156686))
- Players in Spectator Mode now keep their inventories and equipped items on death ([MCPE-156681](https://bugs.mojang.com/browse/MCPE-156681))
- Spectators can no longer attract mob's attention when holding their favorite food ([MCPE-153882](https://bugs.mojang.com/browse/MCPE-153882))
- The /testfor command can now target spectators ([MCPE-158042](https://bugs.mojang.com/browse/MCPE-158042))
- The Spectator game mode can no longer be entered via the /gamemode 6command, only via /gamemode spectator
- Spectators using touch controls can no longer break Boats and Minecarts ([MCPE-158307](https://bugs.mojang.com/browse/MCPE-158307))
- Pufferfish no longer react to nearby spectators

# **Features and Bug Fixes**

## **Blocks**

- Mud Brick Slab can now be placed as a top slab via commands ([MCPE-157852](https://bugs.mojang.com/browse/MCPE-157852))

## **Gameplay**

- Piston's animation when extending and retracting is now smooth ([MCPE-155987](https://bugs.mojang.com/browse/MCPE-155987))

### **Border Block**

- Border blocks should now prevent passage at all heights

## **Items**

- Mangrove, Crimson, and Warped Planks can now be used to repair Shields ([MCPE-158940](https://bugs.mojang.com/browse/MCPE-158940))

## **Marketplace**

- The "Cannot connect to Marketplace” error will no longer be erroneously read by the Text-To-Speech reader

## **Mobs**

- Fixed a bug causing Leads to break with Allays after the owner player changes dimensions ([MCPE-158955](https://bugs.mojang.com/browse/MCPE-158955))

### **Goat**

- The Goat's ram animation was modified to slowly lower their head when preparing to ram ([MCPE-129477](https://bugs.mojang.com/browse/MCPE-129477))

### **Villagers**

- Fixed a bug that rarely caused the Villager's bounding box to become desynced with the server when sleeping

## **Dedicated Server**

- Added server property ‘disable-custom-skins’ to block untrusted skins on a server wide level

## **Stability and Performance**

- Fixed a bug causing an occasional crash when loading players in beds

## **User Interface**

- Fixed a UI bug where enchanted leather items would have parts of the texture not displaying the glint animation ([MCPE-98929](https://bugs.mojang.com/browse/MCPE-98929))
- Added new disconnection error messages to better highlight the area in which the disconnection occurred

## **Villages**

- Raid bar no longer becomes stuck after breaking Beds to cancel a raid ([MCPE-152851](https://bugs.mojang.com/browse/MCPE-152851))

# **Technical Updates**

## **Actor Properties**

- Numerical actor properties (float and integer) will now always clamp their values into the range of values specified

## **Add-Ons and Script Engine**

- *minecraft:instant_despawn* no longer affects players

## **Commands**

- Command selector now gets the same position for the player that the command origin player position gets

## **Marketplace**

- Fixed a bug where the text-to-speech feature would read the entire "My Content" page, both highlighted and non-highlighted items

# **Experimental Features**

## **Commands**

- The "/execute if block" command now displays integer values for block positions ([MCPE-156285](https://bugs.mojang.com/browse/MCPE-156285))

## **GameTest Framework**

- Vector
  - Fixed a bug where *function* length would return undefined
  - Added function *lengthSquared*- Returns the squared length of the vector
  - Added *stackOverflow* as a possible *WatchdogTerminateReason *for the *beforeWatchdogTerminate *event
- IRawMessage - Interface object representing a message
  - rawtext : (string \| IRawMessage)\[\] - (optional) A list of text objects used to build a message
  - text : string - (optional) A string containing plain text to display directly. Only valid when used as a sub member in a parent *rawtext* or *with* member
  - translate : string - (optional) String representing a translation identifier to translate text in the player's selected language
  - with : (string \| IRawMessage)\[\] - (optional) A list of text object arguments used to fill values in the *translate* text. Ignored when *translate* is not present
  - say(string \| IRawMessage) - Used to broadcast a message to all players
  - tell(string \| IRawMessage) - Send a message to a player
- Fixed a bug where Dynamic Properties would not persist when using worlds hosted on Bedrock Dedicated Server or Realms
- Pack dependencies on native modules can be declared using the module name without the need to specify a UUID, using the “module_name” attribute. The module name matches the import statement (e.g., “mojang-minecraft”)
- Removed mojang-gametest module version 0.1.0; packs using "mojang-gametest" specific APIs must be updated to use GameTest version 1.0.0-beta
- The "mojang-gametest" module 1.0.0-beta requires "mojang-minecraft" module 1.0.0-beta

## **General**

- Removed usage of *minecraft:unwalkable* block component and added block creative group and category to the block description
