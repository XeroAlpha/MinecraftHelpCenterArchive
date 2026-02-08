---
title: Minecraft Beta & Preview - 1.20.80.23
date: 2024-03-19T23:03:50Z
updated: 2024-03-19T23:34:48Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/25158280856461-Minecraft-Beta-Preview-1-20-80-23
hash:
  h_01HSCF8GSGJVGVZKYF6G2M6XGD: add-friends
  01HSCFD79KX9CVCK77XRGCBHWC: general
  01HSCFDC5W4Y5DFCBFSN2CE42R: gameplay
  01HSCFDGJYD1ZN3Y31BR4R19FV: armadillo
  01HSCFDMKVBRDJ4JZWXZDK2ESX: wolf
  01HSCFDYVWHBH0J713BHXX2V53: wolf-armor
  01HSCFE3CA9B0JZDYFSZRYQZBZ: user-interface
  01HSCFE78CHP5H97VEEEDAPYH0: realms
  01HSCFEXX3S9SZSTKCXG105886: general-1
  01HSCFGMY9JAYEDE6R4K1V2PT8: commands
  01HSCFGTDEGJC449BPEBEB4AEM: add-ons-and-script-engine
  01HSCFH208MKW4RZ6D53KVWNBT: entity-components
  01HSCFHAAZYW51SHCX97XCXQ85: recipes
  01HSCFHDF7PWRMDVWXC5XTE447: blocks
  01HSCFHY4AWGJAN9P5EXQ4C1MD: editor
  01HSCFJE99CJMSB722PQVY5SVX: general-2
  01HSCFMZNMZP6NKNMR2WNQQNNM: blocks-1
  01HSCFN4HBGS6A54NNDZFNJN8A: entity-components-1
  01HSCFN97KH59T44W7S4AHY3DX: items
---

**Posted:** March 20, 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

A new Minecraft Preview has begun to roll out! This week we’re introducing a variety of improvements, like Exploration Maps to find Trial Chambers. Your continued feedback is really helping shape the 1.21 update! Please let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/) and report any bugs you find on [bugs.mojang.com](https://bugs.mojang.com/).

![trial-chamber-locator-map.png](https://feedback.minecraft.net/hc/article_attachments/25159011168269)

**Experimental Features:**

**Trial Chambers Exploration Map**

- Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for a Locator Map pointing to a nearby Trial Chamber

## **Add Friends **

**Enhancements to finding friends in Bedrock Preview!**

In the latest Bedrock preview we improved the way you connect with players in Minecraft! To help you follow & friend players we added multiple features including:

- Lists of recommended and suggested friends
- Improved search to give partial results while you are typing
- Ability to share your profile information through a QR code or a share link
- A handy button that copies your Gamertag to the clipboard

Access this new screen from the Play menu:

- In the new UI, click “Search for Players” from the Friends Drawer
- In the old UI, click “Add Friends” from the Friends tab

Please try out these new features and let us know what you think at [aka.ms/mcaddfriendsfeedback](https://aka.ms/mcaddfriendsfeedback)!\
\

**Features and Bug Fixes:**

## **General**

- Fixed an issue preventing iOS devices from auto-locking and going to sleep when idle after the player leaves any world ([MCPE-179214](https://bugs.mojang.com/browse/MCPE-179214))

## **Gameplay**

- Camera now changes to third person view on death screen ([MCPE-179365](https://bugs.mojang.com/browse/MCPE-179365))
- Holding the jump button while swimming underwater no longer results in a player drowning while appearing to be swimming at water’s surface ([MCPE-170969](https://bugs.mojang.com/browse/MCPE-170969))
- Holding the jump button while swimming horizontally (not upwards) at or near water’s surface will keep the player swimming at the surface at a height where breathing is possible ([MCPE-170969](https://bugs.mojang.com/browse/MCPE-170969))

## **Armadillo**

- Armadillos no longer rotate to look at the player shortly after rolling up

## **Wolf**

- Wolf variants spawned using the “/summon” command can now be tamed ([MCPE-179414](https://bugs.mojang.com/browse/MCPE-179414))
- The rules for selecting certain Wolf variants when spawned using a Spawn Egg or the “/summon” command have been broadened:
  - Rusty Wolf is now selected in all Jungle biomes, as defined by the biome tag “minecraft:jungle”
  - Spotted Wolf is now selected in all Savanna biomes, as defined by the biome tag “minecraft:savanna”
  - Striped Wolf is now selected in all Badlands biomes, as defined by the biome tag “minecraft:mesa”

## **Wolf Armor**

- Wolf Armor now renders correctly when placed in Item Frames ([MCPE-179564](https://bugs.mojang.com/browse/MCPE-179564))

## **User Interface**

- Fixed the new “You Died!” screen to be available when the Education Edition toggle is enabled ([MCPE-168125](https://bugs.mojang.com/browse/MCPE-168125))
- The updated “You Died!” screen is no longer experimental. Thank you for all of the feedback you have sent in about this updated feature!

## **Realms**

- Guest users in split-screen multiplayer will no longer trigger Realm Events
- Fixed an issue where enabling Realms Stories required a restart (Preview Only)
- Players can now see themselves in the ‘Recently Played’ section of Realms Stories, if they have played recently
- Other bug fixes and stability updates\
  \

**Technical Updates:**

## **General**

- Fixed an issue where the primary user login was not resolved before launching the world when performing a protocol launch using *connect?localLevelId=* *or* *connect?localWorld=* ([MCL-24096](https://bugs.mojang.com/browse/MCL-24096))
- Fixed a bug that prevented custom features in behavior packs from loading
- Fixed a crash during the load process of localization strings

## **Commands**

- Moved the /hud command out of Upcoming Creator Features experimental toggle.

## **Add-Ons and Script Engine**

- Blocks using custom tags in the “crafting_tags” field of their custom blocks with a “minecraft:crafting_table” component now support custom unlockable recipes ([MCPE-175555](https://bugs.mojang.com/browse/MCPE-175555))
  - This fixed a bug where some recipes did not show up when recipe unlocking was on

## **Entity Components**

- Added the “minecraft:body_rotation_blocked” component, which prevents an entity from visually rotating their body to match their own facing direction
- The durations and cooldowns of “behavior.timer_flag_1,” “behavior.timer_flag_2,” and “behavior.timer_flag_3” are now correctly randomized on both start and stop, rather than only on spawn

## **Recipes**

- Added *assume_symmetry* boolean property for Shaped Recipes to allow for symmetrical shaped recipes with different outputs

## **Blocks**

- “red_flower” block is now split into unique instances: “poppy”, “blue_orchid”, “allium”, “azure_bluet”, “red_tulip”, “orange_tulip”, “white_tulip”, “pink_tulip”, “oxeye_daisy”, “cornflower”, and “lily_of_the_valley”
- “coral_fan_dead” block is now split into unique instances: “dead_tube_coral_fan”, “dead_brain_coral_fan”, “dead_bubble_coral_fan”, “dead_fire_coral_fan” and “dead_horn_coral_fan”\
  \

**Experimental Technical Updates:**

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Improvements this week:

- Hovering over tool rail will now expand modal tool drawer if it’s not locked
- Updated Quick Start panel information

## **General**

- Added an optional *SpawnEntityOptions* with a boolean *initialPersistence* field to the *spawnEntity(…)* function to support persistent entities in Editor tooling
- *StructureManager.place* now places rotated structures the same way as the /structure command ([MCPE-179447](https://bugs.mojang.com/browse/MCPE-179447))
- Moved *getItemStack(amount?: number, withData?: boolean): ItemStack \| undefined* from *beta* to *1.10.0*
- Moved *getItemStack(amount?: number): ItemStack \| undefined* from *beta* to *1.10.0*
- EntityAgeableComponent
  - Added property *transformToItem* to *beta*
- EntityDefinitionFeedItem
  - Updated property *item* to return name with namespace in *beta*
- Moved *EntityTypeFamilyComponent* from *beta* to *1.10.0*
- Added *BlockComponentTickEvent* for *beta*
  - Added ‘onTick’
- Added *BlockComponentEntityFallOnEvent* for *beta*
  - Added ‘onEntityFallOn’
- Added *BlockComponentPlayerPlaceBeforeEvent* for *beta*
  - Added ‘beforeOnPlayerPlace’
- Added *BlockComponentPlayerInteractEvent* for *beta*
  - Added ‘onPlayerInteract’
- Added *BlockComponentPlayerDestroyEvent* for *beta*
  - Added ‘onPlayerDestroy’
- Added *BlockComponentOnPlaceEvent* for *beta*
  - Added ‘onPlace’
- Added *ItemComponentRegistry* for *beta*
- Added *ItemCustomComponent* for *beta*
- Added *ItemComponentUseEvent* for *beta*
  - Moved *structureManager* from *beta* to *1.10.0*
- Structure Manager
  - Moved *createEmpty* from *beta* to *1.10.0*
  - Moved *delete* from *beta* to *1.10.0*
  - Moved *get* from *beta* to *1.10.0*
  - Moved *place* from *beta* to *1.10.0*
  - Moved *id* from *beta* to *1.10.0*
  - Moved *getBlockPermutation* from *beta* to *1.10.0*
  - Moved *getIsWaterlogged* from *beta* to *1.10.0*
  - Moved *isValid* from *beta* to *1.10.0*
- Moved *StructureSaveMode* from *beta* to *1.10.0*
- Moved *StructureRotation* from *beta* to *1.10.0*
- Moved *StructureAnimationMode* from *beta* to *1.10.0*
- Moved *StructureMirrorAxis* from *beta* to *1.10.0*
- Removed *StructureReadOptions*
- Moved *StructureCreateOptions* from *beta* to *1.10.0*
- Moved *StructurePlaceOptions* from *beta* to *1.10.0*
- Moved *InvalidStructureError* from *beta* to *1.10.0*

## **Blocks**

- Added ‘minecraft:entity_fall_on’ block component behind the Beta API experiment
- Added ‘minecraft:tick’ block component behind the Beta API experiment

## **Entity Components**

- Added property *passengerMaxWidth* to *EntityRideableComponent*
- Added property *seatRotation* to *Seat*

## **Items**

- Added ‘minecraft:custom_components’ item component under the Beta APIs feature flag
