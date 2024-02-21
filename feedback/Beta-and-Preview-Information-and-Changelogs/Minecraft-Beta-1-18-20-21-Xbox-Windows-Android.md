---
title: Minecraft Beta - 1.18.20.21 (Xbox / Windows / Android)
date: 2022-01-27T15:54:04Z
updated: 2022-01-27T16:45:34Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4423151445901-Minecraft-Beta-1-18-20-21-Xbox-Windows-Android
---

**Posted:** 27 January 2022

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work-in-progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox, Windows, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

 

![Create_New_World.png](https://feedback.minecraft.net/hc/article_attachments/4423164039309/Create_New_World.png)

 

Here's a list of what is new in this week's Beta! We're excited to show off the shiny new Create New World screen too, which will be optionally available for some of our beta players. We would love to hear your feedback on it in [this post](http://aka.ms/MCCreateNewWorldUI)! And as always please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/).

 

# **Experimental Features**

## **Frog**

- Frogs now jump more frequently
- Frog Eggs renamed to Frog Spawn
- The time for Frog Spawn to hatch into Tadpoles has been increased
- Tadpole hitbox is now larger
- Frog Spawn has a new texture
- Frogs in Meadow biomes are now of the temperate variant

## **Animation Tweaks**

- Tweaked Frog's jump and tongue animations
- Cleaned up the animation, entity and controller files
- Changed *water* and swim animations from linear to smooth

# **Non-Experimental Features and Bug Fixes**

**Create New World**

- The *Create New World*screen has been given a new design that is now available for some players. We would love to hear your feedback on it in [this post](http://aka.ms/MCCreateNewWorldUI)!

## **Vanilla Parity**

- Worlds can now be created with 64-bit seeds (-9223372036854775808 to 9223372036854775807) and those can be copied between Bedrock and Java to produce the same world ([MCPE-144994](https://bugs.mojang.com/browse/MCPE-144994)) ([MCPE-148168](https://bugs.mojang.com/browse/MCPE-148168))
- Non-numeric seed UI inputs now produce the same seeds as Java Edition
- Player's arm no longer twitches while charging a bow ([MCPE-148486](https://bugs.mojang.com/browse/MCPE-148486))
- Falling blocks have full-block hitbox again
- Fixed an error where Journeymen Clerics would offer Glowstone Dust instead of Glowstone Blocks ([MCPE-57524](https://bugs.mojang.com/browse/MCPE-57524))
- Untamed Wolves can now be leashed ([MCPE-82050](https://bugs.mojang.com/browse/MCPE-82050))

## **Blocks**

- TNT blocks now correctly move in a random X/Z direction once lit
- Fixed an issue with resource drops occasionally remaining black after breaking and placing a block quickly in its place
- Top Snow no longer clips with the block beneath when falling

## **Commands**

- Added the "hasitem" filter for target selector of entities. This allows the player to target entities based on the items that have in their inventory or are wearing

## **Gameplay**

- Fixed Fangs from the Illager spells not being spawnable in blocks with no bounding boxes
- Water and Lava Buckets can now be used on underwater blocks cohabitating with water, such as Light Blocks or Big Dripleaves ([MCPE-148392](https://bugs.mojang.com/browse/MCPE-148392))
- Players in Visitor Mode can no longer break Paintings and Minecarts ([MCPE-132869](https://bugs.mojang.com/browse/MCPE-132869))
- Teleporting vertically beyond the visibility distance now loads the terrain correctly ([MCPE-150021](https://bugs.mojang.com/browse/MCPE-150021))
- Improved accuracy of damage calculations
- Fixed an issue where interacting with the Bell while holding a chargeable item would not continuously ring it ([MCPE-56968](https://bugs.mojang.com/browse/MCPE-56968))
- Fixed a bug where the player could switch to gliding when riding in certain scenarios ([MCPE-147904](https://bugs.mojang.com/browse/MCPE-147904))

## **Mobs**

- Mobs are now able to path over Azalea blocks ([MCPE-129373](https://bugs.mojang.com/browse/MCPE-129373))
- Mobs are now able to path over Dripleaf blocks and properly pathfind on top of them, when not fully tilted 
- Mobs are now able to path over Pointed Dripstone blocks and properly pathfind on top of them ([MCPE-133270](https://bugs.mojang.com/browse/MCPE-133270))
- Mobs can now move properly on top of solid partial blocks, like Bells, Brewing Stands, and Enchanting Tables
- Mobs can now jump from high enough solid partial blocks to full ones at a higher position 
- Mobs can now jump over fences if they are standing on an adjacent slab or on another block high enough
- Mobs can now move through less than half-block tall Top Snow even when the ceiling, if any, is as tall as the mobs themselves ([MCPE-148355](https://bugs.mojang.com/browse/MCPE-148355))
- Mobs can now move through Coral and Coral Fans, as they do not consider them as solid obstacles anymore ([MCPE-128687](https://bugs.mojang.com/browse/MCPE-128687))
- Fixed an issue where players could not access a Villager's trades while holding a spawn egg ([MCPE-76153](https://bugs.mojang.com/browse/MCPE-76153))
- Fixed an issue where Witches spawned during Village raids could despawn during the raid ([MCPE-149883](https://bugs.mojang.com/browse/MCPE-149883))
- Cod, Salmon, Pufferfish, Tropical Fish, and Dolphins once again spawn in deep variants of ocean biomes ([MCPE-150191](https://bugs.mojang.com/browse/MCPE-150191))

## **Stability and Performance**

- Fixed a crash that could occur upon leaving the Zooming menu in the Dressing Room

## **User Interface**

- Default tabs changed to "Craftable" on left side and to "Crafting" on right side of the Pocket UI inventory screen
- Removed the question mark button on the Pocket UI inventory screen
- Items requiring 3x3 recipes are no longer shown when the Crafting Table is not used
- Players can now use auto-move to take off or equip armor in Crafting Table's menu while in Pocket UI ([MCPE-148970](https://bugs.mojang.com/browse/MCPE-148970))
- Updated generic controller face button icons on mobile
- Control + Backspace will now erase the whole word before the caret
- Control + Delete will now erase the whole word after the caret
- Control + Left Arrow will now move the caret to the beginning of the word before the caret
- Control + Right Arrow will now move the caret to the beginning of the next word after the caret

### **Villagers**

- Updated Villager trade tables for Armorer, Cleric, Fisherman, Shepherd, Toolsmith, and Weaponsmith to match Java Edition
- Fixed an issue where Villagers did not hold the item they would trade when presented with Emeralds by the player ([MCPE-150303](https://bugs.mojang.com/browse/MCPE-150303))
- Villagers no longer avoid Zombified Piglins ([MCPE-94102](https://bugs.mojang.com/browse/MCPE-94102))
- Villagers no longer share Seeds and Beetroot Seeds

# **Technical Updates**

- A world with "StorageVersion" 8 or lower will be increased to 9 and have its "RandomSeed" upgraded from using only the lower 32 bits of a 64-bit number to using the full 64-bit range while still representing the same number. This is only relevant for negative 32-bit seeds, which need a sign bit extension

## **Additional Modding Capabilities Experiment/JavaScript APIs **

**Important!** In this release and starting with this beta, we are removing the Additional Modding Capabilities experiment.  This experiment contained experimental JavaScript APIs launched in 2018 – and with this removal, JavaScript within worlds associated with this API will no longer function.  GameTest Framework – a separate JavaScript API – should not be impacted, nor should behavior pack/resource pack type add-ons more broadly. You can read more about this [via this article](https://aka.ms/mcamc).

## ** Commands**

- Added '/tickingarea' command preload overload
- Entities must now be loaded for an area to be considered fully loaded and ticking

## **Molang**

- Molang expressions inside animation scripts for actor resource definition (pre_animation and initialize) that contain capital letters are properly evaluated now with format_version 1.18.20 or higher

## **User Interface**

- The loading progress screen now shows when loading ticking areas marked for preload

# **Experimental Technical Updates**

## **Commands**

- Added a new '/volumearea ' command to create, remove, and list volumes in the world

## **GameTest Framework**

New Module! We added a **mojang-minecraft-ui** module with API structures for creating simple dialog boxes:

- Added ActionFormData/ModalFormData/MessageFormData types in the mojang-minecraft-ui namespace. More documentation on the new namespace will be showing up on [the Minecraft Creator documentation site](https://aka.ms/buildwithminecraft).

mojang-minecraft module updates:

- World
  - Updated property directionto blockFace in world.events.beforeItemUseOn and world.events.itemUseOn
    - Added event World.event.beforeDataDrivenEntityTriggerEvent - Fires before the data driven trigger is applied
    - Added event World.event.dataDrivenEntityTriggerEvent - Fires after the data driven trigger is applied
    - For the above events, each accept an optional EntityDataDrivenTriggerEventOptions
  - (Breaking Change) property entityremoved
  - Added property entities: Entity\[\] - If specified, will restrict to just the specified entities
  - Changed return type of function getPlayersto PlayerIterator  
      
- EntityDataDrivenTriggerEventOptions
  - Inherited from EntityEventOptions
  - property eventTypes: string\[\] - If specified, will restrict to events with the specified name (I.E minecraft:ageable_grow_up)
  - (Inherited) property entities: Entity\[\] - If specified, will restrict to just the specified entities
  - (Inherited) property entityTypes: string\[\] - If specified, will restrict to entities with the specified type (I.E minecraft:creeper)  
      
- DefinitionModifier
  - read only property componentGroupsToAdd: string\[\] - List of component groups that will be added as part of this modifier
  - read only property componentGroupsToRemove: string\[\] - List of component groups that will be removed as part of this modifier
  - property triggers: Trigger\[\] - List of triggers that will fire as part of this modifier  
      
- Trigger
  - property eventName: string - Event name of the trigger  
      
- DataDrivenEntityTriggerEvent
  - read only property entity: Entity - Entity that the event triggered on
  - read only property id: string - name of the event  
      
- BeforeDataDrivenEntityTriggerEvent
  - read only property entity: Entity - Entity that the event triggered on
  - read only property id: string - name of the event
  - property modifiers: DefinitionModifier\[\] - List of modifiers that will be applied when the event triggers
  - property cancel: bool - If true, the event will not be triggered  
      
- EnchantmentType
  - Added EnchantmentType class
  - Read-only property id: string - The name of the enchantment type
  - Read-only property maxLevel: int - The maximum level this type of enchantment can have  
      
- EnchantmentInstance
  - Added EnchantmentInstance class. This represents a binding of an EnchantmentType and level that can be added to an item
  - Constructor EnchantmentInstance(type: EnchantmentType, level : int)
  - Read-only property type: EnchantmentType - The enchantment type of this instance
  - Property level: int - The level of this enchantment instance  
      
- EnchantmentSlot
  - Added EnchantmentSlot enum. This enum represents the item slot or type that an enchantment can be applied to  
      
- EnchantmentList
  - Added EnchantmentList class. This class represents a collection of enchantments that can be applied to an item
  - Constructor EnchantmentList(slot : EnchantSlot)
  - Read-only property slot: EnchantSlot - The item slot/type that this collection is to be applied to
  - Read-only property allEnchantments: EnchantmentInstance\[\] - All enchantments as part of this enchantment collection
  - Method canAddEnchantment(instance : EnchantmentInstance): bool - Returns whether or not the provided EnchantmentInstance can be added to this collection
  - Method addEnchantment(instance : EnchantmentInstance): bool - Attempts to add the enchantment to this collection. Returns true if successful
  - Method removeEnchantment(type : EnchantmentType)- Removes an EnchantmentInstance with type type from this collection if present
  - Method hasEnchantment(type : EnchantmentType): int - If this collection has an EnchantmentInstance with type type, returns the level of the enchantment. Returns 0 if not present  
      
- ItemEnchantmentComponent
  - Added ItemEnchantmentComponent Item component class.  
    \|
- ItemStack
  - Property enchantments: EnchantmentList - Gets a copy of the current set of enchantments on this ItemStack. Or allows the user to set the EnchantmentList for the ItemStack
  - Method removeAllEnchantments- Removes any enchantments that might be present on this ItemStack
  - Added function setLore(loreList: string\[\]): void- Sets the lore text for the item
  - Added function getLore(): string\[\]- Gets the lore text for the item
