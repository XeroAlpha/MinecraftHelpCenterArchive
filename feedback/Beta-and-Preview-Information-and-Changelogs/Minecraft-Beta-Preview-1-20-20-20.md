---
title: Minecraft Beta & Preview - 1.20.20.20
date: 2023-06-28T13:45:01Z
updated: 2023-06-28T14:13:05Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/17151426531085-Minecraft-Beta-Preview-1-20-20-20
---

**Posted:** 28 June 2023

**Information on the Minecraft Preview and Beta:**

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot featuring a wandering trader and llamas, and a baby goat. The trader is standing on some stacked snow layers, and there are some decorated posts and a cherry sapling in an item frame in the scene.](https://feedback.minecraft.net/hc/article_attachments/17151441004173)

It's time for a new Minecraft Preview and Beta! Here's a list of the fixes and features in this update. Please continue to send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/), and have fun!

# **Experimental Features**

## **Recipe Unlocking**

-   Command line auto-complete has been added for recipe unlocking. Useful when you want to see what recipes you can unlock. ([MCPE-171086](https://bugs.mojang.com/browse/MCPE-171086))
-   The order of command inputs was changed to be the same as on Java Edition. ([MCPE-171098](https://bugs.mojang.com/browse/MCPE-171098))
-   You'll get a confirmations message when unlocking recipes with a command. It'll inform you if the command worked\...or not. ([MCPE-171065](https://bugs.mojang.com/browse/MCPE-171065))
-   Notification sound updated on Bedrock. Thanks for the feedback! You told us the Java *swoosh* sound was better for the unlocking notification. And you are right. So, we changed it. ([MCPE-171116](https://bugs.mojang.com/browse/MCPE-171116))
-   The duration of recipe notifications is now calculated based on how many recipes got unlocked

# **Features and Bug Fixes**

## **Blocks**

-   Fixed a bug that caused players to not be able to crawl under Slabs when standing on Top Snow ([MCPE-170994](https://bugs.mojang.com/browse/MCPE-170994))
-   Top Snow is now in parity with Java Edition and each layer has a different height

## **Audio**

-   Missing Thorns damage sound has been added, and is played when appropriate ([MCPE-37335](https://bugs.mojang.com/browse/MCPE-37335))
-   Anvils now emit the proper sounds when broken, stepped on, fallen onto, etc. ([MCPE-33286](https://bugs.mojang.com/browse/MCPE-33286))
-   Skeletons and Drowned now play sounds when firing Arrows and Tridents, respectively ([MCPE-50609](https://bugs.mojang.com/browse/MCPE-50609)) 
-   Trident Channeling sound is now played when entities are hit ([MCPE-43402](https://bugs.mojang.com/browse/MCPE-43402))
-   Empty Maps now emit the appropriate sound when players draw them 
-   Nether Portals now emit the Glass breaking sound when their Obsidian frame is broken ([MCPE-94722](https://bugs.mojang.com/browse/MCPE-94722))
-   Loyalty Tridents returning to players now play their sound at the player\'s position ([MCPE-43831](https://bugs.mojang.com/browse/MCPE-43831))
-   Big Dripleaf Blocks now play the correct sound when their tilt is reset ([MCPE-123488](https://bugs.mojang.com/browse/MCPE-123488))
-   Conduits now play their deactivation sound when deactivated ([MCPE-128117](https://bugs.mojang.com/browse/MCPE-128117))
-   Respawn Anchor Blocks now correctly play their ambient sounds ([MCPE-136484](https://bugs.mojang.com/browse/MCPE-136484)) 

## **Parity**

-   Falling blocks will now break when falling onto a boat
-   Wandering Trader now also trades Cherry Saplings ([MCPE-171521](https://bugs.mojang.com/browse/MCPE-171521))
-   Updated the camera interpolation rate when crawling to match Java Edition ([MCPE-170841](https://bugs.mojang.com/browse/MCPE-170841)) 

## **Commands**

-   Entities no longer disappear when they are teleported to saved chunks near the edge of the player\'s render distance

## **Gameplay**

-   The third-person camera will no longer clip through terrain when near Water or Lava
-   Fixed Creative Mode players not being ignited when standing in fire 
-   The player no longer gets forced into sneak or crawl in Spectator Mode ([MCPE-170907](https://bugs.mojang.com/browse/MCPE-170907))
-   The player now gets forced out of sneak/crawl when riding ([MCPE-170870](https://bugs.mojang.com/browse/MCPE-170870))
-   The player no longer gets forced into sneak or crawl during the Riptide animation
-   Players should no longer accidentally trigger crawling when they shouldn\'t
-   Fixed some scenarios where crawling was not correctly being triggered on the server ([MCPE-171225](https://bugs.mojang.com/browse/MCPE-171225))
-   Entering flight mode in Creative Mode will now correctly cancel Elytra gliding ([MCPE-171797](https://bugs.mojang.com/browse/MCPE-171797)) 
-   Fixed a crash when entering a world with a corrupted saved chunk ([MCPE-164634](https://bugs.mojang.com/browse/MCPE-164634))
-   Pick Blocking a Decorated Pot will now produce the correct hover hint in the inventory ([MCPE-171800](https://bugs.mojang.com/browse/MCPE-171800))

## **Graphical**

-   Transparent blocks viewed through an End Portal will no longer be visible nor flicker ([MCPE-162061](https://bugs.mojang.com/browse/MCPE-162061)) 
-   Fixed bottom face of portal effect so its color and transparency match the other faces
-   Cherry Leaf blocks will now generate particle effects at a relatively large distance based on system performance

## **Items**

-   Suspicious Stew no longer shows up in the Creative inventory (a recent unintended change caused it to appear there)

## **Mobs**

-   Fixed an issue with gliding with Elytra and switching to Creative flight ([MCPE-171797](https://bugs.mojang.com/browse/MCPE-171797))
-   Villagers killed by players no longer drop items held in their hands
-   Zombified Villagers now show correct professions when infected ([MCPE-80924](https://bugs.mojang.com/browse/MCPE-80924))

## **Mobile Touch Control Settings**

-   Changed Joystick Visibility option to a dropdown menu 
-   Changed Sneak option to a dropdown menu 

## **User Interface**

-   Moved \"Sync Old Worlds\" button to the Settings/Storage screen

## **Input**

-   Improved mouse input to be more responsive when used on Xbox ([MCPE-163671](https://bugs.mojang.com/browse/MCPE-163671))

# **Technical Updates**

## **Add-Ons and Script Engine**

-   Render controllers without textures will now result in a content error and be ignored
-   Added support for the \"*allow_random_seed*\" option in world template manifests
-   AmethystCluster blocks use state \"*minecraft:block_face*\" instead of \"*facing_direction*\". \"*minecraft:block_face*\" uses string values (\"down\", \"up\", \"north\", \"south\", \"east\", \"west\") 
-   Slab blocks use state \"*minecraft:vertical_half*\" instead of \"*top_slot_bit*\". \"*minecraft:vertical_half*\" uses string values (\"bottom\", \"top\") 

## **Editor**

The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Learn [how to use](https://aka.ms/LearnEditor) the Editor and join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum, post bugs, view more detailed release notes. Tag us on social channels with **#BedrockEditor.**

This week marks the release of **v0.4: The Editor API Update!** While still in early development, we've released it with the following support:

-   Editor Extensions [overview article](https://learn.microsoft.com/en-us/minecraft/creator/documents/editorextensionsintroduction) and [API reference documentation](https://aka.ms/EditorAPI) on learn.microsoft.com
-   [Starter Kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit): Contains the compiler tools and various libraries required to get started making Editor Extensions
-   [Samples](https://github.com/Mojang/minecraft-editor-extension-samples) created by our team to jump-start your own Extension creations

Additional fixes this week to the general Editor experience:

-   Fixed a bug where number slider thumbs in the tool panes were extending beyond the boundaries of the pane.
-   Fixed a bug where clicking on the selected tool in the tool rail was not re-opening the closed tool pane.
-   Fixed an issue where structure void, light, and barrier blocks were only visible when the player was holding them -- now they're always visible in the Editor.
-   Fixed a bug that caused the player\'s body to not rotate in third-person view when the simulation is paused.
-   Improved logging and moved operation chat notifications to the log panel.
-   Fixed selection gizmo visibility when there is no active selection. Previously, when there was no selection volume, selection arrow gizmos were being rendered at the world origin (0,0,0).
-   The selected theme will now be correctly applied to external links in the Help tab of the Quick Start panel.
-   Removed the non-functional hamburger menu button from the Quick Panel tabs.

## **Items**

-   Released the \"*minecraft:hand_equipped*\" item component out of experimental in json formats 1.20.20 and higher 
-   Deprecate \"*minecraft:creative_category*\" component in json formats 1.20.20 and higher 
-   Creative group and command visibility can now be set in the \"description\" field in json formats 1.20.20 and higher 
-   Renamed the \"*minecraft:foil*\" item component to \"*minecraft:glint*\" and released it out of experimental in json formats 1.20.20 and higher 
-   Changed fire enchant duration used on projectiles from a *ShooterItemComponent* to match vanilla behavior 
-   Released the \"*minecraft:use_duration*\" item component out of experimental in json formats 1.20.20 and higher 
-   Released the \"*minecraft:stacked_by_data*\" item component out of experimental in json formats 1.20.20 and higher 

## **Networking**

-   Linux dedicated server: Ubuntu 20.04 LTS (Focal Fossa) is now the minimum supported version of Ubuntu. Ubuntu 18.04 LTS is no longer supported 

## **Sounds**

-   Sound definitions now accept both float and integer values for *min_distance* and *max_distance* - please set sound_definitions.json \"*format_version*\" parameter equal to or greater than 1.20.20 to use this functionality ([MCPE-154378](https://bugs.mojang.com/browse/MCPE-154378))

# **Experimental Technical Features**

## **API**

-   Converted \"*set_block_property*\" to \"*set_block_state*\" for custom blocks
-   Added *defineVector*to *DynamicPropertiesDefinition* 
-   *EntityEquipmentInventoryComponent*
    -   Implemented slot validation for *setEquipment*, which now returns a boolean indicating whether the item can be equipped to the specified slot
    -   *EntityEquipmentInventoryComponent*is currently limited to Players only. However, we hope to reintroduce this component for mobs in a future update
        -   Moved *getDay* to *1.4.0*
        -   Moved *getTimeOfDay* to *1.4.0*
        -   Moved *setTimeOfDay(timeOfDay: number \| TimeOfDay)* to *1.4.0*
        -   Moved *getAbsoluteTime* to *1.4.0*
        -   Moved *setAbsoluteTime(absoluteTime: number)* to *1.4.0*
    -   Moved *TimeOfDay* to *1.4.0*
        -   Added length restrictions to *setLore*- Up to 20 lines with up to 50 characters per line
        -   Moved function *setLore*to *1.4.0*
        -   Moved function *getLore*to *1.4.0*
        -   Moved class *SystemAfterEvents*to *1.4.0*
        -   Moved class *ScriptEventCommandMessageAfterEvent*to *1.4.0*
    -   Moved player *onScreenDisplay* to *1.4.0*
    -   Moved *titleDisplayOptions* to *1.4.0*
    -   Moved *screenDisplay* to *1.4.0*

## **Commands**

-   Released command */scriptevent* out of experimental

## **Items**

-   Fixed issue where items with the \"*minecraft:wearable*\" component would be duplicating when equipping by using the item ([MCPE-159736](https://bugs.mojang.com/browse/MCPE-159736)) 
-   Items with the \"*minecraft:wearable*\" component in non-weapon slots can no longer be stacked ([MCPE-159736](https://bugs.mojang.com/browse/MCPE-159736)) 
-   Removed the \"*minecraft:ignores_permission*\" component 
-   Removed the \"*minecraft:mirrored_art*\" component 
-   Moved the \"*protection*\" field from \"*minecraft:armor*\" component to \"*minecraft:wearable*\" component in json formats 1.20.20 and higher 
-   Deprecate \"*minecraft:armor*\" component in json formats 1.20.20 and higher 
-   Removed nonfunctional and redundant slot options from \"*minecraft:wearable*\" component, ie. mainhand, hotbar, inventory, enderchest, and equippable
-   Items with the \"*minecraft:wearable*\" component using the \"*weapon.offhand*\" slot will no longer equip when item is used in hotbar
-   Equipping custom wearable items trigger generic equip sound
-   Custom items with \"*minecraft:wearable*\" component can now be equipped by clicking and dragging in inventory or shift-clicking

## **User Interface**

-   Display a message when the players presses the camera perspective change button but a particular perspective is already set via the camera command
