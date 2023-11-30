---
title: Minecraft Beta & Preview - 1.19.80.21
date: 2023-03-15T11:53:23Z
updated: 2023-03-15T13:33:28Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/14012352627853-Minecraft-Beta-Preview-1-19-80-21
---

**Posted:** 15 March, 2023

**Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality 
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![A Minecraft screenshot featuring an armor stand with armor trims. The scene is set in a cherry grove with a sniffer in the background.](https://feedback.minecraft.net/hc/article_attachments/14012233762061)

 

The days of your anonymous armor are over, because armor trims are coming to Bedrock as experimental features this week! Templates for the different trims can be found all over the Minecraft world, so stock up on supplies and start searching! Once you get your hands on a template, use the smithing table to dye and apply it to a helmet, leggings, chest plate, or boots. Now you are not only stylish and colourful, but also humble since you no longer need to use words to brag about your adventurous travels! Check out armor trims along with suspicious gravel and other new features that will join Minecraft in the Trails & Tales Update later this year. Don’t forget to send us all your feedback and ideas at [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/)

# **Experimental Features**

## **Armor Trims**

- You can now visually customize your armor with a variety of unique trims at the Smithing Table
- Armor Trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings, and Boots
  - All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
  - To check which trim pattern a piece of armor has, you can hover over it in the inventory
- Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
  - Pillager Outpost
    - Sentry Armor Trim
  - Desert Pyramid
    - Dune Armor Trim
  - Shipwreck
    - Coast Armor Trim
  - Jungle Temple
    - Wild Armor Trim
  - Ocean Monument
    - Tide Armor Trim
  - Ancient City
    - Ward Armor Trim
  - Woodland Mansion
    - Vex Armor Trim
  - Nether Fortress
    - Rib Armor Trim
  - Bastion Remnant
    - Snout Armor Trim
  - Stronghold
    - Eye Armor Trim
  - End City
    - Spire Armor Trim
  - Smithing Templates are found in Chests in their respective structure, except for the Ocean Monument. Instead of finding it in Chests, Elder Guardians sometimes drop a Smithing Template when defeated
  - Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
  - An Armor Trim has two properties: a pattern and a material
    - The pattern is defined by the Smithing Template used to apply the trim, and represents the visual pattern of the trim
    - The material is defined by what ingredient you used to apply the trim, and represents the color of the trim
  - The viable ingredients you can use to define the color of your Armor Trim are the following:
    - Iron
    - Copper
    - Gold
    - Lapis
    - Emerald
    - Diamond
    - Netherite
    - Redstone
    - Amethyst
    - Quartz

## **Blocks**

- The Piglin Head Block's ears now flap when the wearer is Riding a vehicle
- Cherry Stripped Wood can now be crafted from Cherry Stripped Log ([MCPE-168053](https://bugs.mojang.com/browse/MCPE-168053))
- Updated Cherry Leaves & Cherry Sign textures ([MCPE-168059](https://bugs.mojang.com/browse/MCPE-168059))

### **Archaeology feature set:**

- Added the Suspicious Gravel block

## **Mobs**

- Frogs born in the Cherry Grove biome are now the temperate variant instead of the cold variant ([MCPE-168083](https://bugs.mojang.com/browse/MCPE-168083))

## **Netherite Equipment**

- Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
- Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
- This change was made for a variety of reasons:
  - Increases the time players utilize Diamond equipment before Netherite
  - Make Netherite equipment a more significant achievement in the game's progression
  - Adapts Netherite more naturally into the new Smithing Table crafting system

## **Smithing Templates**

- Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
- Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
- Smithing Templates define what type of upgrade you will be making to equipment
  - It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
  - There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
- Smithing Templates are consumed when used to upgrade an item in the Smithing Table
- You can craft a copy of a Smithing Template in the Crafting Table with 7 Diamonds + 1 block of material that the template is made out of + 1 Smithing Template, which will output 2 of the same Smithing Template

# **Features and Bug Fixes**

## **Accessibility Features**

- Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
- Potions have had their colors adjusted to make them more distinguishable from each other
- Decreased the default visibility of the glint on enchanted items, which can now be modified in the Accessibility Settings

## **Blocks**

- "fence" block is now split into unique names, "oak_fence", "acacia_fence", "birch_fence", "dark_oak_fence", "jungle_fence", and "spruce_fence"
- Commands will still work with "fence", but only new fence name will be suggested in the command prompt

## **Gameplay**

- Fixed experience orb position desync after teleport ([MCPE-59584](https://bugs.mojang.com/browse/MCPE-59584))
- Going into lava in third person view no longer causes the camera to turn black ([MCPE-166861](https://bugs.mojang.com/browse/MCPE-166861))
- Fixed an issue where players load incorrect data when loading a local game after connecting to a server or Realm ([MCPE-164765](https://bugs.mojang.com/browse/MCPE-164765))
- Fixed an issue where the player camera height was incorrect with or without the sneak toggle ([MCPE-167559](https://bugs.mojang.com/browse/MCPE-167559))

## **Graphical**

- LevelChunks no longer flicker in The End dimension when Clientside Chunk Generation is enabled

## **User Interface**

- Corrected toggle navigation in Edit World menu while using gamepad or keyboard that were previously skipped
- Updated designs for sign in and sign up screens in preview

## **Vanilla Parity**

- Search bar in Creative inventory screen is now automatically selected while using a keyboard

### **Villagers**

- Villagers will now wake up in a valid position and will not phase though blocks ([MCPE-142544](https://bugs.mojang.com/browse/MCPE-142544))

# **Technical Updates**

## **AI Goals**

- Added "cooldown" field to target descriptors in "minecraft:behavior.nearest_attackable_target" goal

## **Blocks**

- Sponges no longer emit water drop particles underwater ([MCPE-122138](https://bugs.mojang.com/browse/MCPE-122138))

## **Commands**

- For worlds using game version 1.19.80 and above, acquiring a custom spawn egg through a command can only succeed with their full name rather than with an aux value, eg. "/give @s namespace:actor_spawn_egg"
- Removed requirement for blockState argument(s) when using other optional args in /fill /setblock and /clone ([MCPE-167959](https://bugs.mojang.com/browse/MCPE-167959))
- Implemented the "inputpermission" command, which allows for setting the player's camera or movement as enabled or disabled
  - Syntax: /inputpermission set \<target: player\> \<permission: camera \| movement\> \<state: enabled \| disabled\>
- Implemented the "haspermission" target selector, which allows for selection based on player permission levels

## **General**

- For behavior packs using version 1.19.80 and above, recipes no longer accept a Molang query for the item's data field, instead use the item's full name, eg. use { "item": "namespace:actor_spawn_egg" } instead of { "item": "spawn_egg", "data": "query.get_actor_info_id('namespace:actor')" }

# **Experimental Technical Features**

## **Editor**

The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Join our Discussion forum, post bugs, view more detailed release notes, and share your creations on [GitHub.](https://github.com/Mojang/minecraft-editor)

- Custom blocks are now listed in the block selector
- Fixed z-fighting on paste preview over selection volume

## ** Scripting**

- Form promises are now rejected using typed errors, vs. strings as used previously

## **ItemStack**

- Added function *getTags(): string\[\]*- Returns all tags for the item
- Added function *hasTag(tag: string): boolean*- Returns true if the item has the specified tag

### **EntityEquipmentInventoryComponent**

- This component is used to manipulate the equipment of mobs and players. To use it, call *getComponent('equipment_inventory')*
- Added function *getEquipment(equipmentSlot: EquipmentSlot): ItemStack \| undefined-* Returns the item in the given equipment slot
- Added function *getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot*- Returns the container slot for the given equipment slot
- Added function *setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void*- Sets the item in the given equipment slot

### **ItemDurabilityComponent**

- The ItemDurabilityComponent now works with all damageable items, not just custom items
- Removed property *damageRange*
- Setting damage will now throw an exception if it is outside of the range \[0, maxDurability\]

## **GameTest Framework**

- Update specific GameTest exceptions to be thrown as GameTestError error objects
