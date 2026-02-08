---
title: Minecraft - 1.19.80 (Bedrock)
date: 2023-04-24T13:54:17Z
updated: 2023-04-27T12:57:09Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15171804661005-Minecraft-1-19-80-Bedrock
---

**Posted:** April 26, 2023

It’s time for a new quality-of-life update containing a variety of changes, fixes, and experimental features! Let’s jump into the highlights:

- Fixed multiple crashes that could occur during gameplay
- Added settings to adjust item enchantment glint strength and speed
- Take an early look at cherry blossom trees, armor trims, and more with experimental features
- Fixes to over 40 community-reported issues

Please continue to upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).

 

![A Minecraft screenshot](https://feedback.minecraft.net/hc/article_attachments/15171770242573)

 

# **Experimental Features:**

Even more experimental features are available in this update that are coming in the [**Trails & Tales**](https://www.minecraft.net/en-us/article/the-trails---tales-update) update!

As these features are still incomplete, in development, and considered a work in progress, be sure to backup your worlds before enabling experimental features. The features can be enabled by turning on the “Next Major Update” toggle in world settings.\
\

## **Player Sneaking**

- The ability to sneak under 1.5 block gaps is now behind the “Short Sneak” toggle. Enable the toggle to continue to test out the feature while we continue polishing it
- Player’s hitbox height now reduces to 1.5 blocks while sneaking
  - Sneaking will automatically be initiated while stuck in a gap of less than 1.8 blocks
  - Sneaking will lower the player camera height respective of these changes
  - Sneaking now requires enough space to stand in order to exit sneaking state
  - Players will transition from swimming to sneaking if they are unable to stand up but would be able to sneak

## **Cherry Grove**

- Introducing the Cherry Grove biome, with pretty Cherry Blossom trees. You can find it in the mountains, like Meadows
- It has a new flower, Pink Petals, as ground cover, which can be crafted into Pink Dye
- Pigs, Rabbits, Sheep, and Bees spawn there
- Comes with a new wood set for the Cherry Blossom trees

## **Archaeology**

- Added the Trail Ruins, a buried structure from a lost culture
- Added Suspicious Gravel block, which has the same characteristics as Suspicious Sand
- Added Suspicious Sand to Warm Ocean Ruins
- Added Suspicious Gravel to Cold Ocean Ruins
- Added 16 new Pottery Shards (Now 20 Pottery Shards in total)
  - These have been distributed between the five Archaeology sites: Desert Wells, Desert Temples, Cold Ocean Ruins, Warm Ocean Ruins, and Trail Ruins

## **Armor Trims**

- You can now visually customize your armor with a variety of unique trims at the Smithing Table
- Armor Trims are purely visual with no gameplay benefits, and can only be applied to Helmets, Chestplates, Leggings, and Boots
  - All trim patterns are visually the same on an armor's item icon, but the color will still change based on the trim material
  - To check which trim pattern a piece of armor has, you can hover over it in the inventory
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

## **Smithing Templates**

- Smithing Tables have been redesigned into a workstation for physical equipment upgrades and modifications
- Alongside slots for combining a piece of equipment and materials, there is now a required slot for an item type called Smithing Templates
- Smithing Templates define what type of upgrade you will be making to equipment
  - It specifies both what type of items you can upgrade, and which ingredients are valid to customize the upgrade
  - There are currently two categories of Smithing Templates: Armor Trim and Netherite Upgrade
- Armor Trim Smithing Templates can be found all throughout the world, and each of the following structures contain their own unique Smithing Template:
  - Pillager Outpost: Sentry Armor Trim
  - Desert Pyramid: Dune Armor Trim
  - Shipwreck: Coast Armor Trim
  - Jungle Temple: Wild Armor Trim
  - Ocean Monument: Tide Armor Trim
  - Ancient City: Ward Armor Trim
  - Woodland Mansion: Vex Armor Trim
  - Nether Fortress: Rib Armor Trim
  - Bastion Remnant: Snout Armor Trim
  - Stronghold: Eye Armor Trim
  - End City: Spire Armor Trim
  - Trail Ruins: Wayfinder Armor Trim, Raiser Armor Trim, Shaper Armor Trim, Host Armor Trim
  - Ancient City: Silence Armor Trim
- Smithing Templates are found in Chests in their respective structure, except for the Ocean Monument. Instead of finding it in Chests, Elder Guardians sometimes drop a Smithing Template when defeated
- Some Armor Trim Smithing Templates are rarer than others, so be on the lookout for them to impress your friends!
- Smithing Templates are consumed when used to upgrade an item in the Smithing Table
- You can craft a copy of a Smithing Template in the Crafting Table with 7 Diamonds + 1 block of material that the template is made out of + 1 Smithing Template, which will output 2 of the same Smithing Template

## **Netherite Equipment**

- Netherite equipment crafting now also requires a Netherite Upgrade Smithing Template
- Netherite Upgrade Smithing Templates can be found randomly in all Bastion Remnant chests, and there is a guarantee of 2 in every Treasure Room Bastion Remnant
- This change was made for a variety of reasons:
  - Increases the time players utilize Diamond equipment before Netherite
  - Make Netherite equipment a more significant achievement in the game's progression
  - Adapts Netherite more naturally into the new Smithing Table crafting system

## **Calibrated Sculk Sensors**

- A new variant of Sculk Sensors which allows you to filter vibrations based on their frequency level. They are not found naturally and can only be crafted
- They can be crafted with 1 Sculk Sensor and 3 Amethyst Shards in the Crafting Table
- One side of the Calibrated Sculk Sensor can receive a Redstone signal as input
  - The strength of that Redstone signal is the only vibration frequency the Sculk Sensor will listen to

## **Vibration Resonance**

- Blocks of Amethyst have a new behavior when placed adjacent to Sculk Sensors
- If that Sculk Sensor receives a vibration, the Block of Amethyst will re-emit its frequency as a separate vibration at its location
- This behaviour is called Vibration Resonance, and allows players to move vibration frequencies across long distances without having to recreate the vibration naturally

## **Sign Improvements**

- Signs have improved customization options
- Sign text can now be edited after being placed in the world
  - This can be done by interacting with the Sign
- Both sides of the Sign can now have separate text and colors, allowing for further customization options
  - By default, a Sign will prompt you to input the front side's text when placed
  - To apply text to the back-side, you must walk to the other side and interact with that face to edit it
- Signs can now also be waxed with Honeycomb, preventing any further edits to its text

## **Vanilla Parity:**

- Renamed and enchanted weapons are now displayed in respawn and chat windows with color when a player is killed by an entity using it ([MCPE-162679](https://bugs.mojang.com/browse/MCPE-162679))
- Weighted Pressure Plates now produce the same sound as in Java Edition ([MCPE-164912](https://bugs.mojang.com/browse/MCPE-164912))
- Removed the character limit for scoreboard objective names and objective display names ([MCPE-165064](https://bugs.mojang.com/browse/MCPE-165064))
- Melons and Pumpkins can now grow onto Mud, Podzol, Rooted Dirt, and Muddy Mangrove Roots
- Nylium blocks are now grouped with Netherrack in the Creative inventory ([MCPE-163587](https://bugs.mojang.com/browse/MCPE-163587))
- Armor Stands now vanish with no sound effects when killed with the /kill command ([MCPE-159136](https://bugs.mojang.com/browse/MCPE-159136))
- Slightly decreased Panda collision box to match Java Edition
- Slightly increased Polar Bear collision box to match Java Edition
- Shipwreck supply chests are no longer missing Moss Block as loot ([MCPE-168376](https://bugs.mojang.com/browse/MCPE-168376))
- Mobs will once again take damage when standing on an incomplete block next to a Campfire ([MCPE-167479](https://bugs.mojang.com/browse/MCPE-167479))\
  \

# **Fixes and Changes:**

## **Stability and Performance**

- Fixed several crashes that could occur during gameplay
- Fixed a bug where invalid Banner Patterns were causing players in render distance to crash
- Fixed a bug where Command Blocks could cause actors within a level chunk to freeze
- Fixed a crash that could occur when opening the My Packs tab with a broken pack ([MCPE-165806](https://bugs.mojang.com/browse/MCPE-165806))

## **Gameplay**

- Fixed the player moving in the wrong direction after exiting a container screen while using a gamepad ([MCPE-121565](https://bugs.mojang.com/browse/MCPE-121565))
- Players can no longer sneak while flying ([MCPE-166834](https://bugs.mojang.com/browse/MCPE-166834))
- The player’s camera no longer appears inside blocks when sprint and swim are held ([MCPE-166565](https://bugs.mojang.com/browse/MCPE-166565))
- Fixed animation transition between swimming and walking ([MCPE-166769](https://bugs.mojang.com/browse/MCPE-166769))
- The Health Boost effect will no longer fully replenish the player's health after the effect runs out ([MCPE-165434](https://bugs.mojang.com/browse/MCPE-165434))
- Fixed ambient cave sounds to no longer play when the player enters or loads into The End ([MCPE-141493](https://bugs.mojang.com/browse/MCPE-141493))

## **Mobs**

- Mobs can now enter a Boat only if they are smaller than the Boat itself
- Villagers will now generate green particles when a successful trade is completed
- Mobs no longer play the player eat sound when fed breeding materials
- Turtles can now enter Boats and Boats with Chest ([MCPE-65719](https://bugs.mojang.com/browse/MCPE-65719))
- Hoglins, Polar Bears, and Spiders can no longer enter Boats and Boats with Chest ([MCPE-161197](https://bugs.mojang.com/browse/MCPE-161197))
- Fixed experience orb position desync after teleport ([MCPE-59584](https://bugs.mojang.com/browse/MCPE-59584))
- Villagers will now wake up in a valid position and will not phase though blocks ([MCPE-142544](https://bugs.mojang.com/browse/MCPE-142544))

## **Blocks**

- Mangrove, Bamboo, and Polished Blackstone buttons are no longer visible on maps
- Flowers are once again displayed immediately when placed inside a Flower Pot
- Nether Portals can now replace blocks other than just air when being generated. This includes blocks such as Grass and Snow layers ([MCPE-162272](https://bugs.mojang.com/browse/MCPE-162272))
- Light Blocks can no longer have their light levels changed in Survival or Adventure modes ([MCPE-138868](https://bugs.mojang.com/browse/MCPE-138868))
- Campfire sounds are now louder and clearer ([MCPE-122296](https://bugs.mojang.com/browse/MCPE-122296))
- Sponges no longer emit water drop particles underwater ([MCPE-122138](https://bugs.mojang.com/browse/MCPE-122138))
- Fixed an issue where colored wool became white wool after been loaded from worlds prior to 1.17 ([MCPE-168684](https://bugs.mojang.com/browse/MCPE-168684))

## **Items**

- Potions no longer have an enchantment glint, due to it obscuring the color of the potion contents
- Cooking Chorus Fruit in a Furnace will now generate experience ([MCPE-68127](https://bugs.mojang.com/browse/MCPE-68127))

## **Accessibility**

- A glint strength slider that adjusts how transparent the visual glint is on enchanted items has been added to the Accessibility Settings
- A glint speed slider that adjusts how fast the visual glint shimmers across enchanted items has been added to the Accessibility Settings
- Focus indicator is now automatically visible on menu items while using a keyboard
- Text-to-speech no longer reads previously selected items after moving to new one
- Text-to-speech no longer gets stuck on reading accessibility tab while the user switches between different tabs

## **User Interface**

- Added a header and title for the inventory tab in inventory screen while using Pocket UI
- Updated look of sign in and sign up screens
- Increased the spacing between headers in the Settings screen to increase readability
- Touchpad scrolling now matches the operating system's scroll direction
- Feedback button on the pause menu will now prompt the user with a modal before redirecting to the browser
- Corrected toggle navigation in Edit World menu while using gamepad or keyboard that were previously skipped

## **Graphical**

- Halved the default visibility of the glint on enchanted items, which can now be modified in the Accessibility Settings ([MCPE-167814](https://bugs.mojang.com/browse/MCPE-167814))
- Fixed an issue where unnecessary black boxes appeared in VR while around partial blocks
- Fixed the issue where multiple light sources (such as Torches) were incorrectly emitting white light in RTX ([MCPE-166947](https://bugs.mojang.com/browse/MCPE-166947))
- Boots do not z-fight anymore when worn by a player
- The "leg" and "belt" parts of Leggings do not z-fight anymore when worn by a player
- Capes no longer flash red when getting damaged ([MCPE-105347](https://bugs.mojang.com/browse/MCPE-105347))
- Fixed a visible gap in Hopper model ([MCPE-55122](https://bugs.mojang.com/browse/MCPE-55122))
- Fixed alignment of the output slot of Crafting Table ([MCPE-143255](https://bugs.mojang.com/browse/MCPE-143255))
- Going into lava in third person view no longer causes the camera to turn black ([MCPE-166861](https://bugs.mojang.com/browse/MCPE-166861))

## **Marketplace**

- A Wishlist has been added to select players for testing so that players can save things to purchase at a later time
- This feature is still in testing and, for now, will only be available for select players
- Look for this icon in Marketplace:

![Marketplace wishlist icon](https://feedback.minecraft.net/hc/article_attachments/15171820706317)

## **Realms**

- Fixed an issue that prevented players on PlayStation 5 from purchasing a Realms Plus trial
- Added the ability for members to update the Realm server version, meaning that the Realm owner will not need to log on to update
- Added D-pad navigation in the Realms feed screen popup
- Added keyboard navigation in the Realms feed screen popup
- Fixed a bug where players would be stuck if they added a resource pack to an expired Realm and clicked the exit button
- Fixed a bug where content packs applied to a world in a Realm slot were applied to another world in another slot in the same Realm
- Fixed a bug where content packs applied to a world is unintentionally unapplied when joining a world
- Fixed an extra Cancel button displaying on mobile file download dialog
- Added a link to Microsoft Privacy Statement in the world upload dialog

## **Touch Controls**

- Added new touch and hold Stack Splitting for precision selection of the items in a single slot
- Fixed an issue where items could get stuck in the Crafting Table when using touch input
- If the player is underwater and Auto-Jump is enabled, as they approach a block that is 1 level higher than the current level, they will rise. This also allows auto-jumping out of water onto land\
  \

# **Technical Updates:**

## **Updated Add-On Template Packs**

- Updated Add-On templates for 19.80 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks\
  ](https://aka.ms/MCAddOnPacks)

## **General**

- For behavior packs using version 1.19.80 and above, recipes no longer accept a Molang query for the item's data field, instead use the item's full name, eg. use { "item": "namespace:actor_spawn_egg" } instead of { "item": "spawn_egg", "data": "query.get_actor_info_id('namespace:actor')" }
- Fixed an issue that caused the InteractComponent to not work correctly while sneaking ([MCPE-168449](https://bugs.mojang.com/browse/MCPE-168449))

## **Commands**

- The /execute command now displays an appropriate error message when there is an error in the second or subsequent subcommand target selector ([MCPE-164304](https://bugs.mojang.com/browse/MCPE-164304))
- Provide auto-complete support for block states
- Added two new overloads to the summon command:
  - /summon \[spawnPos : x y z\] facing \<position: x y z\> \[spawnEvent: string\] \[nametag: string\]
  - /summon \[spawnPos : x y z\] facing \<lookAtEntity: target\> \[spawnEvent: string\] \[nametag: string\]
- Fixed an issue where the paste button in the Command Block UI would remember extra presses from failed pastes ([MCPE-163705](https://bugs.mojang.com/browse/MCPE-163705))
- For worlds using game version 1.19.80 and above, acquiring a custom spawn egg through a command can only succeed with their full name rather than with an aux value, eg. "/give @s namespace:actor_spawn_egg"
- "fence" block is now split into unique names, "oak_fence", "acacia_fence", "birch_fence", "dark_oak_fence", "jungle_fence", and "spruce_fence"
- Commands will still work with "fence", but only new fence name will be suggested in the command prompt
- Removed requirement for blockState argument(s) when using other optional args in /fill /setblock and /clone ([MCPE-167959](https://bugs.mojang.com/browse/MCPE-167959))
- Implemented the "inputpermission" command, which allows for setting the player's camera or movement as enabled or disabled
  - Syntax: /inputpermission set \<target: player\> \<permission: camera \| movement\> \<state: enabled \| disabled\>
- Implemented the "haspermission" target selector, which allows for selection based on player permission levels

## **Game Events**

- *item_interact_finish* game event now has a vibration frequency of 2 instead of 14
- *item_interact_start* is no longer considered a detectable vibration
- Reeling a fishing rod now emits *projectile_shoot* vibration

## **Data-Driven Components**

- Added "lose_target" field to projectile data to specify if an entity should unselect its target after shooting the projectile
- Added a new Transformation component for blocks to support rotation, scaling and translation. The component can be added to the whole block, and/or to individual block permutations. Eg.

"minecraft:transformation": {\
                "translation": \[0.0, 0.1, -0.1\],\
                "scale": \[0.5, 1, 1.5\],\
      "rotation": \[90, 180, 0\]\
}

- Transformed geometries still have the same restrictions that non-transformed geometries have, eg. a maximum size of 30/16 units

## **Add-Ons and Script Engine**

- Chance information types used in tree feature JSONs for some trunks and foliage now allow 0 as the chance (values like 0.0001 were allowed, but not 0)
- Form promises are now rejected using typed errors, vs. strings as used previously

## **Entity Filters**

- Created new entity filter "is_raider" to determine if subject is part of a raid

## **AI Goals**

- Added "cooldown" field to target descriptors in "minecraft:behavior.nearest_attackable_target" goal

## **Blocks**

- Deprecated *minecraft:part_visibility* block component
- Added *bone_visibility* behavior to *minecraft:geometry* block component

## **ItemStack**

- Added function *getTags(): string\[\]* - Returns all tags for the item
- Added function *hasTag(tag: string): boolean* - Returns true if the item has the specified tag

## **EntityEquipmentInventoryComponent**

- This component is used to manipulate the equipment of mobs and players. To use it, call *getComponent('equipment_inventory')*
- Added function *getEquipment(equipmentSlot: EquipmentSlot): ItemStack \| undefined* *-* Returns the item in the given equipment slot
- Added function *getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot* - Returns the container slot for the given equipment slot
- Added function *setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void* - Sets the item in the given equipment slot

## **ItemDurabilityComponent**

- The ItemDurabilityComponent now works with all damageable items, not just custom items
- Removed property *damageRange*
- Setting damage will now throw an exception if it is outside of the range \[0, maxDurability\]

## **Marketplace**

- In the map WDW Magic Kingdom, the carts on the Big Thunder Mountain, Snow White and the Seven Dwarves, and Space Mountain rides now properly align with the invisible Minecart they are attached to

## **Servers**

- Blocks can now optionally (via a setting in StartGamePacket) use a hashed value for their network IDs. This hashed value is independent of all other blocks and remains stable across future releases

## **GameTest Framework**

- Updated specific GameTest exceptions to be thrown as GameTestError error objects
- Added two new commands:
  - /gametest stopall - Used to manually stop all tests while they are running
  - /gametest runsetuntilfail - Used to run a set of tests but will automatically stop if any of the tests fail

## **API (Experimental)**

- Updated versions to add new APIs to stable:
  - Added version 1.1.0 of @minecraft/server
  - Added version 1.2.0-beta of @minecraft/server
  - Removed version 1.1.0-beta of @minecraft/server
  - Moved the following to @minecraft/server stable (1.1.0)
    - system.runTimeout
    - system.runInterval
    - system.clearRun
    - system.currentTick
    - Vector3
    - BlockPermutation  (only a subset of functionality)
    - Block
    - Dimension.getBlock
    - World.sendMessage
    - Player.sendMessage
    - Entity.dimension
    - Entity.typeId
    - Entity.getVelocity()
    - Entity.location
    - Entity.getHeadLocation()
    - Entity.nameTag
    - Entity.id
    - Entity.getViewDirection()
    - Dimension.getEntities
    - Dimension.getEntitiesAtBlockLocation
    - Dimension.getPlayers
    - EntityQueryOptions
    - EntityQueryScoreOptions
    - GameType
    - World.getPlayers
  - Minecraft runtime errors are now fired as JavaScript Error objects instead of strings
  - Fixed a number of base class inheritance issues and added several new base classes to certain class types
  - /reload works if a script pack references a client resource pack
  - Fixed a bug where the *BeforeItemUseOnEvent* function *getBlockLocation* would return undefined ([MCPE-166945](https://bugs.mojang.com/browse/MCPE-166945))
  - The *BeforeItemUseOnEvent* class now inherits from *ItemUseOnEvent*
  - Fixed a bug where *sendMessage* would fail when the message contains Unicode quotation marks
  - Signs
    - Added *setText* to set the text on a sign with a regular string, a *RawMessage*, or a *RawText*
    - Added *getText* to get the string on a sign, will return undefined if *setText* was called with a *RawMessage* or a *RawText*
    - Added *getRawText* to get the *RawText* on a sign, will return undefined if *setText* was called with a string
    - Added *getTextDyeColor* and *setTextDyeColor* to read/write the dye of the sign text
  - Dyes
    - Added *DyeColor* enum
  - sendMessage
    - *rawtext* is now *RawMessage\[\]* instead of *(string \| RawMessage)\[\]*
  - RawMessage
    - *rawtext* property on *RawMessage* is no longer *(string \| RawMessage)\[\]* and is instead *RawMessage\[\]*
  - RawText
    - Added a *RawText* class for reading *RawMessage* like on Signs
  - Riding
    - Added *getRiders* to *EntityRideableComponent* which returns an array of all the entities currently riding this entity
    - Added *EntityRidingComponent* - this component is only on entities that are currently riding on another entity
      - Has an *entityRidingOn* property that returns the entity this entity is currently riding on
    - Added function *getEntity(id: string): Entity \| undefined* - Gets an entity. Returns undefined for entities that don't exist or aren't loaded
  - Dimension
    - getEntities
      - Modified return type to *Entity\[\]*
      - Modified parameter name *getEntities* to *options*
      - New signature: *getEntities(options?: EntityQueryOptions): Entity\[\]*
    - getPlayers
      - Modified return type to *Player\[\]*
      - Modified parameter name *getPlayers* to *options*
      - New signature: *getPlayers(options?: EntityQueryOptions): Player\[\];*
    - @minecraft/server-ui
      - When building forms, all read-only user-facing strings (e.g., text labels, dropdown options etc.) now accept *RawMessage* This affects the following classes:
        - *ActionFormData*
        - *ModalFormData*
        - *MessageFormData*
      - Added function *getItemStack(amount?: number, withData?: boolean): ItemStack* - Gets an item stack of the block. Returns undefined for blocks that don't have a corresponding item (e.g. air)
    - BlockPermutation
      - Added function *getItemStack(amount?: number): ItemStack* – Creates an item stack of the block permutation. Returns undefined for blocks that don't have a corresponding item (e.g. air)
      - Removed data *property*
    - BlockComponent
      - Added read-only property *block* - Gets the block that the component is attached to
    - Renamed *IEntityComponent* to *EntityComponent*
    - Container
      - Replaced classes\
        *BlockInventoryComponentContainer*, *InventoryComponentContainer*, and *PlayerInventoryComponentContainer* with *Container*
      - function *addItem* now returns the remainder of the added item stack if the container is full, else *undefined*
      - function *transferItem* no longer takes a destination slot and will now place the given item in the first available slot. The function now returns the remainder of the item stack if the container is full, else *undefined*
      - Added function *moveItem(fromSlot: number, toSlot: number, toContainer: Container): void* - Moves an item from one container to another, replacing any item in the destination slot
      - Function *swapItems* can now swap empty slots
      - Removed function *clearItem* - Please *use* *setItem(undefined)* instead
    - Signs
      - Fixed an issue where text set on Signs using *setText* wasn't reflected on Signs on the client until the Sign was reloaded
      - *getComponent('minecraft:sign')* now works with Hanging Signs
