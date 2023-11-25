---
title: Minecraft Beta & Preview - 1.20.10.21
date: 2023-06-01T13:33:37Z
updated: 2023-06-01T14:28:05Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/16314419988493-Minecraft-Beta-Preview-1-20-10-21
---

**Posted:** 1 June 2023

**Information on the Minecraft Preview and Beta:**

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot featuring a villager standing beside a crafting table. There is an armour stand in the background, with a camel nearby, too.](https://feedback.minecraft.net/hc/article_attachments/16316195911949)

A new Minecraft Preview and Beta update is here, more tweaks and changes to improve your gameplay experience! Please continue to send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/)! Here's an overview of what's in the update:

![New recipe unlocked!](https://feedback.minecraft.net/hc/article_attachments/16316164692237){width="65%"}

# **Experimental Features**

## **Recipe Unlocking**

-   Recipe unlocking -- now in Bedrock!
    -   Added recipe unlocking as an experiment
    -   Collect materials to unlock relevant recipes
    -   A notification will tell you when you\'ve found a new crafting material
    -   Picking up an item teaches you how to craft that item. Great for when a friend gives you a tool you haven't crafted before
    -   We'd love to hear what you think of this feature, so please send us your feedback at [aka.ms/MCRecipeUnlocks](https://aka.ms/MCRecipeUnlocks)

## **Sneak and Crawl**

-   Players will no longer be stuck inside Cauldrons or Composters when crawling inside with a Trapdoor ([MCPE-170836](https://bugs.mojang.com/browse/MCPE-170836)) 
-   The paperdoll will now show up properly when crawling 
-   Fixed an issue where gliding or swimming could sometimes give the player an incorrect bounding box ([MCPE-170882](https://bugs.mojang.com/browse/MCPE-170882))

# **Features and Bug Fixes**

## **Gameplay**

-   Suspicious Gravel and Suspicious Sand blocks now display correctly on maps
-   Fixed a crash that could occur when placing an End Crystal in The End ([MCPE-170858](https://bugs.mojang.com/browse/MCPE-170858)) 
-   Shield no longer clips inside the Armor Stand model while in the riposte pose
-   Fixed Boats on Ice disappearing when Client-Side Chunk-Generation was enabled ([MCPE-169313](https://bugs.mojang.com/browse/MCPE-169313)) 

## **Graphical**

-   Underwater and fog effects are now based on camera position rather than player position 
-   Fixed an issue that allowed FOV to affect appearance of first-person hands and Spyglass frame ([MCPE-170832](https://bugs.mojang.com/browse/MCPE-170832))
-   Fancy Leaves setting is now applied immediately and will no longer cause x-ray effect ([MCPE-123608](https://bugs.mojang.com/browse/MCPE-123608))

## **Mobs**

-   Mobs are back to normal despawn rate during night ([MCPE-170208](https://bugs.mojang.com/browse/MCPE-170208))
-   Camels now play a walking animation when taking damage while standing still ([MCPE-166566](https://bugs.mojang.com/browse/MCPE-166566)) 
-   Sniffer can no longer dig up seeds in the air

## **User Interface**

-   Reordered the gamepad tooltips for UI screens so that the buttons align with the same side as a controller

## **Vanilla Parity**

-   Updated Bamboo Raft recipe to not include Shovel as an ingredient ([MCPE-170896](https://bugs.mojang.com/browse/MCPE-170896))

# **Technical Updates**

## **General**

-   Converted *\"properties\"* to *\"states\"* for custom blocks
-   Fix a crash that could happen when running the *"go_and_give_items_to_noteblock"* goal 
-   Fixed a crash that could occur when attempting to change a mob's scale while it was colliding with blocks ([MCPE-170645](https://bugs.mojang.com/browse/MCPE-170645))

## **Dedicated Server** 

-   **Note for Linux users:** Ubuntu 18.04 LTS (Bionic Beaver) will reach End of Standard Support in 2023. Accordingly, the Linux Minecraft Dedicated Server will also raise its minimum target Ubuntu version to 20.04 LTS (Focal Fossa) in a later R20 update (exact release to be determined). Minecraft server operators using Ubuntu are encouraged to prepare for this transition by updating their deployments to 20.04 LTS as soon as possible. 

## **Items**

-   Items with the *\"minecraft:block_placer\"* component will now place blocks with correct orientation 
-   Released the *\"minecraft:max_stack_size\"* item component out of experimental in json formats 1.20.10 and higher
-   Custom items with *\"minecraft:block_placer\"* will no longer place certain blocks in the wrong location 
-   Released the *\"minecraft:block_placer\"* item component out of experimental in json formats 1.20.10 and higher
-   Released the *\"minecraft:record\"* item component out of experimental in json formats 1.20.10 and higher

# **Experimental Technical Features**

## **API**

-   System
    -   Replaced *events*with *system.beforeEvents* and *system.afterEvents*.
    -   Renamed event *beforeWatchdogTerminate*to *watchdogTerminate* and moved it to *beforeEvents*
    -   Moved *scriptEventReceive*to *afterEvents*
-   MessageReceiveAfterEvent
    -   Removed property *sourceType*
-   ScriptEventSource
    -   Replaced enum *MessageSourceType*with a new enum *ScriptEventSource*
-   ScriptEventCommandMessageAfterEvent
    -   Changed property *sourceType*from *MessageSourceType* to *ScriptEventSource*
    -   Increased maximum message length from 256 to 2048 characters

## **Camera**

-   Limit free cam JSON to not pitch camera beyond plus or minus 90 degrees
-   Fixed /*camerashake* command to shake camera without also shaking player
-   Rendering of experimental minecraft:free camera no longer affected by player state like night vision
