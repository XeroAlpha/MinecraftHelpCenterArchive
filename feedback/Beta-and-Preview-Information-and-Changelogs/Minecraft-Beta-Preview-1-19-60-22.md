---
title: Minecraft Beta & Preview - 1.19.60.22
date: 2022-12-01T14:44:06Z
updated: 2022-12-01T16:33:23Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/11062311640333-Minecraft-Beta-Preview-1-19-60-22
---

**Posted:** 1 December, 2022

**NOTE:**This week\'s Preview version is not available on iOS. We apologize for the inconvenience and are working to resolve the issue.

**Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot featuring chiseled bookshelves, a saddled camel, and mob heads on note blocks.](https://feedback.minecraft.net/hc/article_attachments/11061416160141)

Here\'s a list of what is new in this week\'s Minecraft Preview and Beta! Remember to send us all your feedback at [aka.ms/MC120Feedback](https://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).\
\

# **Experimental Features**

## **Bamboo Wood Types**

-   Bamboo Planks and Slabs can now be used in all recipes that take Planks of any wood type ([MCPE-163365](https://bugs.mojang.com/browse/MCPE-163365), [MCPE-163367](https://bugs.mojang.com/browse/MCPE-163367))
-   Bamboo Mosaic (Planks and slabs) cannot be used as a general Wood Plank in crafting recipes
-   Renamed "Stripped Block of Bamboo" to "Block of Stripped Bamboo", as it was incorrectly named
-   Block of Bamboo and Block of Stripped Bamboo are now correctly classified as \"Woods\" in the Creative inventory, instead of as \"Logs\"
-   Updated Block of Bamboo and Block of Stripped Bamboo textures, as their lighting was inconsistent with other blocks

## **Camel**

-   Using a Saddle on an adult Camel now results in it being properly equipped ([MCPE-163333](https://bugs.mojang.com/browse/MCPE-163333))
-   Dispensers can now equip Saddles to tamed Camels

## **Gameplay**

-   Player sound slider now correctly adjusts step and fall sounds for Bamboo blocks, Hanging Signs, Nether Wood types, and Chiseled Bookshelves
-   Block sound slider now correctly adjusts sounds for Chiseled Bookshelf ([MCPE-164700](https://bugs.mojang.com/browse/MCPE-164700))
-   Lowered sound volume for Ender Dragon when placed on a Note Block
-   Jukebox slider now correctly adjusts sound level for Mob heads placed on Note Block

### **Chiseled Bookshelf**

-   Books can now be removed and added to specific slots on the Chiseled Bookshelf
-   You can now remove a Book from the Chiseled Bookshelf while holding a Book in your hand

# **Features and Bug Fixes**

## **Gameplay**

-   Fixed an issue where players could fall out of moving blocks when pushed upwards ([MCPE-163725](https://bugs.mojang.com/browse/MCPE-163725))
-   Fixed an issue where night was being incorrectly skipped if the last player in a game is in the Nether or End
-   A player entering the Nether or End will now trigger a night skip if all players left in Overworld are sleeping
-   Fixed a bug where dropping an item and sleeping at the same time would cause the server to hang ([MCPE-162989](https://bugs.mojang.com/browse/MCPE-162989))
-   Orbs spawned within the same block will merge and combine XP values until orb limit is reached ([REALMS-10706](https://bugs.mojang.com/browse/REALMS-10706))

## **General**

-   Fixed an issue where text fields would not regain focus after being deselected with a gamepad ([MCPE-153842](https://bugs.mojang.com/browse/MCPE-153842))
-   Fixed an issue where user interface elements on the Achievements screen and the new Create New World screen didn\'t properly trigger sound effects ([MCPE-163722](https://bugs.mojang.com/browse/MCPE-163722))

## **Items**

-   Fixed an issue that prevented some Tripwire Hooks from being valid when trading with a Fletcher Villager ([MCPE-108195](https://bugs.mojang.com/browse/MCPE-108195))

## **Mobile Controls**

-   Fixed a bug where players couldn't interact with the toast notifications in Joystick and Crosshair touch controls

## **Mobs**

-   Fixed the Vex being incorrectly lit in dark surroundings
-   Fixed the Vex texture disparity between Bedrock and Java ([MCPE-164227](https://bugs.mojang.com/browse/MCPE-164227))
-   Endermen, Skeletons, and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below) in the Nether ([MCPE-163701](https://bugs.mojang.com/browse/MCPE-163701))

## **Player**

-   Fixed a bug causing players' hitboxes and nameplates to be unaligned when rejoining a world after dying and returning to menu without respawning ([MCPE-162630](https://bugs.mojang.com/browse/MCPE-162630))

## **Touch Controls**

-   The inventory tab will now reset their hover state if the player uses the second input method and hover on another tab

## **Vanilla Parity**

### **Mobs**

-   Using a Saddle on a tamed Horse, Donkey, or Mule now results in it being equipped ([MCPE-83815](https://bugs.mojang.com/browse/MCPE-83815))
-   Using Horse Armor on an unarmored, tamed Horse now results in it being equipped ([MCPE-163336](https://bugs.mojang.com/browse/MCPE-163336))
-   Using a Carpet on a tamed Llama now results in it being equipped ([MCPE-163336](https://bugs.mojang.com/browse/MCPE-163336))
-   Dispensers can now equip Saddles and Horse Armors to tamed Horses
-   Dispensers can now equip Saddles and Chests to tamed Mules and Donkeys
-   Dispensers can now equip Carpets and Chests to tamed Llamas
-   Dispensers can now equip Saddles to Pigs and Striders
-   Shears in a Dispenser will now only shear one Sheep at a time
-   Shears in a Dispenser will now shear Snow Golems and Mooshrooms

### **Wandering Trader**

-   The Wandering Trader will no longer have a chance to offer duplicate Seed trades ([MCPE-161780](https://bugs.mojang.com/browse/MCPE-161780))

### **User Interface**

-   Fixed text to speech enumeration for the worlds in play screen, select language in settings screen, select controls in settings screen, and friends in invite friends screen when there are a large number of items in the list

# **Technical Updates**

## **Components**

-   Added \"inventory\" as a possible \"domain\" value for the \"has_equipment\" filter, which allows to check for items stored in the actor\'s inventory
-   Added an \"equip_item_slot\" field to the \"interact\" component
    -   If set, an item held by the player will be equipped to the specified slot upon successful interaction
    -   If an item is already present in the specified slot, it will be moved to the player\'s inventory
    -   Equipping an item removes it from the player\'s inventory, unless the player is in Creative Mode

# **Technical Experimental Features**

 

## **API**

-   Block
    -   Added function *getRedstonePower(): number*- Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined
-   Added /scriptevent command as part of the Beta APIs experiment. This is what will trigger system.events.scriptEventReceive events (see below)\
    \
    -   Usage: /scriptevent \<messsageId: string\> \[message: ???\]
    -   messageId must be namespaced, use of the minecraft namespace is invalid (e.g. \"/scriptevent give:coal\", \"/scriptevent my_scripts:spawn_sheep\")
    -   message is optional, with a max length of 256 characters\
        \
-   events.scriptEventReceive
    -   Added system event *events.scriptEventReceive*
    -   Added read-only property *id: String-* The namespaced ID of the event
    -   Added read-only property message: String- The content of the message the event was sent with
    -   Added read-only property *sourceBlock: Block*- The command block that triggered/executed the command call if applicable, otherwise undefined
    -   Added read-only property *sourceEntity: Entity*- The player/entity that executed the command call if applicable, otherwise undefined
    -   Added read-only property *initiator: Entity*- The player that caused an NPC to execute the command call if applicable, otherwise undefined
    -   Added read-only property *sourceType: MessageSourceType*- The type of source the event was triggered by
    -   *subscribe()*can filter by valid namespace string using the *ScriptEventMessageFilterOptions* class\
        \
-   ScriptEventMessageFilterOptions
    -   Added *ScriptEventMessageFilterOptions* class
    -   Added property *namespaces: string\[\]*- An array of namespaces to filter on
-   Simulated Player
    -   Added property *isSprinting*- Used to get or set if the sprinting state of the simulated player is set to true

## **General**

-   Ensure Block Permutation Conditions cannot have side effects (i.e. \'math.random\', \'math.random_integer\', and variable assignment)
