---
title: Minecraft Beta & Preview - 1.20.40.22
date: 2023-09-19T20:35:32Z
updated: 2023-09-19T20:55:28Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19648957981965-Minecraft-Beta-Preview-1-20-40-22
---

**Posted:** 20 September 2023

**Information on the Minecraft Preview and Beta:**

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![screenshot_1.20.40.22.png](https://feedback.minecraft.net/hc/article_attachments/19649108664589){width="464" height="261"}

Here's a list of what's new in this week\'s Minecraft Preview and Beta! As always, we really want to hear your thoughts on these experiments, so please send your feedback and ideas to [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

 

# **Features and Bug Fixes**

## **Blocks**

-   Fixed a bug where the wrong side of Signs would sometimes be edited ([MCPE-169067](https://bugs.mojang.com/browse/MCPE-169067))
-   Fixed an extremely rare bug (\~0.000003% chance) that could cause Item Frames to not drop their item when hit or destroyed

## **Education Toggle**

-   Fixed a bug where closing the game while having the Portfolio open resulted in a crash

## **Game Rules**

-   Changed the default game rule value of Respawn Radius to 10

## **Gameplay**

-   Goat Horns can now be heard up to 256 blocks away ([MCPE-153254](https://bugs.mojang.com/browse/MCPE-153254))

## **Mobs**

-   Camels no longer appear to slide when walking ([MCPE-169666](https://bugs.mojang.com/browse/MCPE-169666))
-   Camels no longer move their legs when standing still ([MCPE-172846](https://bugs.mojang.com/browse/MCPE-172846))
-   Camels no longer dash indefinitely when in Lava ([MCPE-172369](https://bugs.mojang.com/browse/MCPE-172369))

## **User Interface**

-   Autocompleting text now moves the caret to end of the line

## **Vanilla Parity**

-   Iron Golems and Snow Golems now have a crumbling-like particle effect when they are created
-   Flowing Lava and Water mixing mechanics now match Java Edition ([MCPE-41103](https://bugs.mojang.com/browse/MCPE-41103))
-   Witches now target players within a 16 block distance\
    \

# **Technical Updates**

## **API**

-   Camera APIs moved from beta to 1.6.0
    -   Released Entity.is\* API's from 'beta' to '1.6.0'
        -   *isSleeping*
        -   *isSneaking*
        -   *isSprinting*
        -   *isSwimming*
        -   *isClimbing*
        -   *isOnGround*
        -   *isInWater*
        -   *isFalling*
    -   Released Player level & XP APIs from 'beta' to '1.6.0'
        -   *addLevels*
        -   *addExperience*
        -   *level*
        -   *getTotalXP*
        -   *xpEarnedAtCurrentLevel*
        -   *totalXpNeededForNextLevel*
        -   *resetLevel*
    -   Released Player.is\* API's from 'beta' to '1.6.0'
        -   *isEmoting*
        -   *isGliding*
        -   *isJumping*
        -   *isFlying*
    -   Updated all methods besides show on ActionFormData, MessageFormData, and ModalFormData to be callable in read-only mode
    -   BlockInventoryComponent
        -   container member variable now correctly reflects it can be a Container or undefined
    -   Fixed a versioning bug preventing \@minecraft/server-ui module from working with \@minecraft/server above version 1.2.0
    -   WeatherType moved to 1.6.0
        -   Moved function *setWeather* to 1.6.0
        -   Moved event/property *entityRemove* from beta to 1.6.0
        -   Moved event/property *entityRemove* from beta to 1.6.0
    -   Moved class EntityRemovedAfterEvent from beta to 1.6.0
    -   Moved class EntityRemoveAfterEventSignal from beta to 1.6.0
    -   Moved class EntityRemovedBeforeEvent from beta to 1.6.0
    -   Moved class EntityRemoveBeforeEventSignal from beta to 1.6.0
        -   Moved event/property *entityLoad* from beta to 1.6.0
    -   Moved class EntityLoadAfterEvent from beta to 1.6.0
    -   Moved class EntityLoadAfterEventSignal from beta to 1.6.0
        -   Moved event/property *entitySpawn* from beta to 1.6.0
    -   Moved enum EntityInitializationCause from beta to 1.6.0
    -   Moved class EntitySpawnAfterEvent from beta to 1.6.0
    -   Moved class EntitySpawnAfterEventSignal from beta to 1.6.0
        -   Moved event/property *playerBreakBlock* from beta to 1.6.0
        -   Moved event/property *playerBreakBlock* from beta to 1.6.0
    -   Moved class PlayerBreakBlockAfterEvent from beta to 1.6.0
    -   Moved class PlayerBreakBlockAfterEventSignal from beta to 1.6.0
    -   Moved class PlayerBreakBlockBeforeEvent from beta to 1.6.0
    -   Moved class PlayerBreakBlockBeforeEventSignal from beta to 1.6.0
        -   Moved event/property *playerPlaceBlock* from beta to 1.6.0
    -   Moved class PlayerPlaceBlockAfterEvent from beta to 1.6.0
    -   Moved class PlayerPlaceBlockAfterEventSignal from beta to 1.6.0
    -   Moved class BlockEventSignalOptions from beta to 1.6.0
        -   Move *isAir(): boolean* from beta to 1.6.0
        -   Move *isLiquid(): boolean* from beta to 1.6.0
        -   Moved *amount* from beta to 1.6.0
        -   Moved *keepOnDeath: boolean* from beta to 1.6.0
        -   Moved *lockMode: ItemLockMode* from beta to 1.6.0
        -   Moved *nameTag?: string* from beta to 1.6.0
        -   Moved *clone(): ItemStack* from beta to 1.6.0
        -   Moved *getTags(): string\[\]* from beta to 1.6.0
        -   Moved *hasTag(tag: string): boolean* from beta to 1.6.0
        -   Moved *setCanDestroy(blockIdentifiers?: string\[\]): void* from beta to 1.6.0
        -   Moved *getCanDestroy(): string\[\]* from beta to 1.6.0
        -   Moved *setCanPlaceOn(blockIdentifiers?: string\[\]): void* from beta to 1.6.0
        -   Moved *getCanPlaceOn(): string\[\]* from beta to 1.6.0
        -   Moved function *getProperty* to 1.6.0
        -   Moved function *resetProperty* to 1.6.0
        -   Moved function *setProperty* to 1.6.0

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

**Introducing this week**\...the *first* iteration towards our v0.5: Edit/Test Lite release! Here's the need-to-know -- read more in the [GitHub Release 0.4.5 notes](https://github.com/Mojang/minecraft-editor/discussions/categories/announcements):

-   Full round-trip edit \--\> (play)test experience within the context of the Editor
-   Customize your world conditions for testing
-   Changes you make in the test session will not be saved
-   Marketplace and persona are disabled in the test experience, which is also standard within the Editor
-   Available in single-player (*for now* 😊)

Additional fixes this week:

-   Fixed a bug in the Selection tool where the Y axis of the Vector3 origin exceeded the dimension height range
-   Fixed a bug where blocks couldn't be placed in the last block placed location after an undo

## **Entity Components**

-   The "behavior.random_look_around_and_sit" now has the field "continue_sitting_on_reload" exposed for Creators to use. This is how the Camel stays sitting on reload
-   "behavior.is_scenting" renamed to generic "behavior.timer_flag_1" and released to creators
-   "behavior.is_rising" renamed to generic "behavior.timer_flag_2" and released to creators
-   "behavior.is_feeling_happy" renamed to generic "behavior.timer_flag_3" and released to creators
-   "behavior.timer_flag 1": Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_1 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise
-   "behavior.timer_flag 2": Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_2 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise
-   "behavior.timer_flag 3": Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer_flag_3 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise

## **Mobs**

-   Added a new "query.is_in_lava" Query Function to Molang, to know if a mob is currently in Lava

## **Stability and Performance**

-   The Sounds definition file sound_definitions.json will no longer crash the game if the wrong json type is used for a specific sound definition ([MCPE-168913](https://bugs.mojang.com/browse/MCPE-168913))\
    \

# **Experimental Technical**

## **API**

-   Added function *getWeather*

## **Stability and Performance**

-   Fixed a crash on certain Android devices (e.g. Mali GPUs) while loading into worlds with the Deferred Technical Preview enabled ([MCPE-173934](https://bugs.mojang.com/browse/MCPE-173934))
-   Disabled the Deferred Technical Preview on some Android devices that don't support our current requirements for compute shaders (GL_MAX_COMPUTE_WORK_GROUP_INVOCATIONS \>= 256)
