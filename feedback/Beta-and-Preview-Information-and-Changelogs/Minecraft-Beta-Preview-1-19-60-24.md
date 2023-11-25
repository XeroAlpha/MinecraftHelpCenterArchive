---
title: Minecraft Beta & Preview - 1.19.60.24
date: 2022-12-14T15:58:59Z
updated: 2022-12-15T10:15:07Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/11448661481229-Minecraft-Beta-Preview-1-19-60-24
---

**Posted:** 14 December, 2022

**Note:** This Preview/Beta will be the last one of 2022, and we will resume them again in 2023!

**Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot featuring horses in a fenced area, a leashed camel, and a vex and an allay in boats.](https://feedback.minecraft.net/hc/article_attachments/11448528540045)

Here\'s a list of what is new in this week\'s Minecraft Preview and Beta! Remember to send us all your feedback at [aka.ms/MC120Feedback](https://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

In last week's preview, we included a bugfix for campfires which triggered some conversations about their use and design. Firstly: thank you for all your feedback! We have focused on parity for new features the past couple of years and we are committed to ensure that new features mainly act the same for all our players regardless of platform. For campfires, which is an older feature, it was never intended that they would set mobs and players on fire -- that behavior was a bug in Bedrock Edition.

We understand that some clever designs were built around this bugged mechanic, but after careful consideration, we have decided to stick with its original design intent, similar to how a torch would work. A torch doesn\'t hurt entities that come in contact with it. A campfire on the other hand, will cause the player to take damage as if they are standing on a magma block.

We want to reassure you that this decision was discussed with our gameplay team ahead of the fix being made, and we're grateful for your support!

# **Experimental Features**

## **Blocks**

-   Chiseled Bookshelf now fills when player is dropping Books into the connected Hopper or Dropper ([MCPE-164023](https://bugs.mojang.com/browse/MCPE-164023))

# **Features and Bug Fixes**

## **Gameplay**

-   Slimes and Magma Cubes no longer spawn in spaces that are 2 blocks tall or less ([MCPE-46540](https://bugs.mojang.com/browse/MCPE-46540))

### **Raids**

-   Raids now trigger properly when the player with bad omen enters a village while riding/gliding ([MCPE-152774](https://bugs.mojang.com/browse/MCPE-152774))

## **Items**

-   Fixed item degradation when rapidly attacking mobs ([MCPE-157150](https://bugs.mojang.com/browse/MCPE-157150))

### **Hopper**

-   Hoppers will no longer fail to collect items when trying to pull in multiple item types ([MCPE-38963](https://bugs.mojang.com/browse/MCPE-38963))

## **Mobs**

### **Horse**

-   Horses can no longer be pushed over Fences with Carpets on top ([MCPE-164717](https://bugs.mojang.com/browse/MCPE-164717))

### **Vex**

-   Vexes\' hitboxes are now vertically centered with their models
-   The Vex now uses a separate charging animation when empty-handed ([MCPE-164490](https://bugs.mojang.com/browse/MCPE-164490))
-   Vexes now render offhand items

### **Vex & Allay**

-   Vex & Allay now sit properly in Boats and Minecarts ([MCPE-164441](https://bugs.mojang.com/browse/MCPE-164441))

## **Touch**

-   Fixed a bug that prevented items from moving indirectly between Creative Mode inventory and players\' extended inventory in Pocket UI

## **Touch Controls**

-   Fixed a problem where the touch d-pad\'s forward button was not functional when holding the strafe left/right button

## **User Interface**

-   Feedback button on the main menu will now prompt the player with a modal before redirecting to their web browser

# **Technical Updates**

## **Commands**

-   Removed the unintended ability to set the *with*property of a raw text JSON object to an array of JSON objects

## **Mobs**

-   The \"minecraft:variable_max_auto_step\" component has a new property \"controlled_value\"
    -   This property will override \"base_value\" when a mob with \"minecraft:input_ground_controlled\" is being controlled by the player
    -   The \"jump_prevented_value\" will have precedence over both other values

# **Experimental Technical Features**

## **API**

-   Added method *getEffects*which returns an array of all active effects on the entity

## **Commands**

-   Fixed a bug where the \@initiator selector would not work with the Upcoming Creator Features experiment enabled ([MCPE-164727](https://bugs.mojang.com/browse/MCPE-164727))
-   As a preview of upcoming potential changes to how commands run, new experimental functionality within the Upcoming Creator Features experiment causes all behavior pack animation events to run at the end of the current tick
