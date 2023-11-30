---
title: Minecraft Beta - 1.18.10.20 (Xbox One/Windows 10/Android)
date: 2021-11-18T12:39:23Z
updated: 2021-11-19T09:46:15Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4413896443021-Minecraft-Beta-1-18-10-20-Xbox-One-Windows-10-Android-
---

**Posted:** November 18, 2021

**PLEASE READ before participating in the Minecraft Beta:**

- Joining the beta will replace your game with a work-in-progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A village in Minecraft with mountains in the background](https://feedback.minecraft.net/hc/article_attachments/4413896394381/beta18U1_1.jpg)

 

It's time for another Bedrock Beta! As always, we really appreciate all the feedback you send to [aka.ms/CavesCliffsFeedback](http://aka.ms/CavesCliffsFeedback) and please report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/).

 

# **Features and Bug Fixes**

## **Gameplay**

- Fixed the food cooldown visual not being semi-transparent on the HUD ([MCPE-55206](https://bugs.mojang.com/browse/MCPE-55206))
- Ruined Portals under Ocean and Swamp biomes are no longer waterlogged and will spawn dry
- Primed TNT will no longer explode when spawned using '/summon' and the TNT Explodes game rule is disabled ([MCPE-49044](https://bugs.mojang.com/browse/MCPE-49044))
- Capped the freezing range of the Frost Walker enchantment to 8 blocks to avoid server unresponsiveness
- Farmer Villagers now do not pick up more than 8 stacks of items ([MCPE-123412](https://bugs.mojang.com/browse/MCPE-123412))
- Offset Maps held in hand relative to the screen's aspect ratio so it always stays close to the screen's edge and remains fully visible
- Fixed Monster Spawners that sometimes stopped spawning mobs when the chunks they were placed in were reloaded ([MCPE-142285](https://bugs.mojang.com/browse/MCPE-142285))
- The 'Iron Belly' achievement can once again be unlocked ([MCPE-146036](https://bugs.mojang.com/browse/MCPE-146036))
- Fixed Structure Blocks infinitely spawning the same entities when loading a structure ([MCPE-137617](https://bugs.mojang.com/browse/MCPE-137617))
- Players can no longer be hurt by their own armor enchantments such as Thorns
- Food once again applies effects when eaten

## **Blocks**

- Water blocks near edges should now flow properly
- Fire can no longer be placed on top of Lightning Rods
- The width of Walls connecting to Candles is now correct ([MCPE-141156](https://bugs.mojang.com/browse/MCPE-141156))
- Improved the animation of falling blocks entities (e.g. Sand and Gravel) ([MCPE-142010](https://bugs.mojang.com/browse/MCPE-142010))
- Big Dripleaf, Amethyst Buds, and Amethyst Clusters no longer break in Structure Blocks
- Amethyst Clusters are now properly destroyed when the supporting block is destroyed ([MCPE-126076](https://bugs.mojang.com/browse/MCPE-126076))
- Copper Blocks and variants now oxidize in the Nether ([MCPE-134954](https://bugs.mojang.com/browse/MCPE-134954))
- Big Dripleaf placement has been restricted to Clay, Grass, Dirt, Farmland, Moss, Rooted Dirt, Podzol, and Mycelium ([MCPE-123392](https://bugs.mojang.com/browse/MCPE-123392))
- Pointed Dripstone can now only be placed on full faces of blocks
- Glow Lichen is now oriented the correct way when placed
- Magma Blocks no longer deal damage when FireDamage gamerule is set to false ([MCPE-99718](https://bugs.mojang.com/browse/MCPE-99718))
- Player can now use emotes on scaffolding ([MCPE-147624](https://bugs.mojang.com/browse/MCPE-147624))
- Players no longer have problems moving after respawning or getting out of bed

## **Mobs**

- Villagers, Rabbits, and Foxes spawned in the Frozen and Jagged Peaks biomes now spawn as their respective snowy variants ([MCPE-119561](https://bugs.mojang.com/browse/MCPE-119561))
- Goats now spawn in the Jagged Peaks and Frozen Peaks biomes ([MCPE-146886](https://bugs.mojang.com/browse/MCPE-146886))

## **Graphical**

- Fixed a camera issue when entering a Bed while still in glide mode ([MCPE-117339](https://bugs.mojang.com/browse/MCPE-117339))
- Fixed lighting bugs when removing light sources after returning to the Overworld from other dimensions ([MCPE-145828](https://bugs.mojang.com/browse/MCPE-145828))
- Updated textures for multiple blocks and items to remove bugs and achieve parity between Bedrock and Java Edition ([MCPE-127539](https://bugs.mojang.com/browse/MCPE-127539))

## **Marketplace**

- Fixed coin purchases not updating displayed coin amount until after relaunching the game

## **User Interface**

- Fixed the Achievements button not being accessible when scrolling up on the Pause Screen
- "Invite to game" and Crown buttons on the Pause Screen now have a white border when focused with custom resolution
- Fixed the height of the scrolling content panel on the Marketplace sidebar navigation to display the scrolling bar for varying device resolutions
- Fixed a redundant " - " beside the player's username is seen after adding them to friends ([MCPE-105464](https://bugs.mojang.com/browse/MCPE-105464))

## **World Generation**

- Fixed Mesa and Frozen Ocean biomes having inconsistent generation on Realms
- The old Bedrock layer between y=0 and y=4 in old chunks is now replaced with Deepslate when upgrading old worlds ([MCPE-147373](https://bugs.mojang.com/browse/MCPE-147373))
- Copper Ore can now generate in Deepslate variant in Dripstone Caves ([MCPE-144800](https://bugs.mojang.com/browse/MCPE-144800))

## **Vanilla Parity**

- Adjusted the "otherside" music disc to give off a Redstone signal of 14 to match Java Edition ([MCPE-145751](https://bugs.mojang.com/browse/MCPE-145751))
- Adjusted the "Pigstep" music disc to give off a Redstone signal of 13 to match Java Edition ([MCPE-74030](https://bugs.mojang.com/browse/MCPE-74030))
- The Bow’s shaking animation now only appears when the Bow is fully drawn ([MCPE-138993](https://bugs.mojang.com/browse/MCPE-138993))

## **Commands**

- The '/effect' command no longer has the redundant argument 'empty' ([MCPE-62903](https://bugs.mojang.com/browse/MCPE-62903))

## **Performance and Stability**

- Added log messages to help identify the cause of the BDS crash ([BDS-12751](https://bugs.mojang.com/browse/BDS-12751))

# **Technical Updates**

## **Add-ons and Scripting**

- Fixed custom food behaviours not being replicated to guest clients

## **Animation**

- Fixed a crash that could occur when an animation controller referenced itself as one of its "animations"

## **Commands**

- The '/spreadplayers' command no longer hangs when given a high spread range ([MCPE-137793](https://bugs.mojang.com/browse/MCPE-137793))
- Fixed a bug that caused performance drops when using the '/tag' command ([MCPE-139609](https://bugs.mojang.com/browse/MCPE-139609))

## **Data-Driven Blocks**

- Updated documentation for BlockExplosionResistance
- Updated documentation for BlockFrictionComponent
- Updated documentation for BlockMaterialInstances
- Updated documentation for BlockBreathabilityComponent
- Updated documentation for CraftingTableComponent
- Updated documentation for BlockLightFilterComponent
- Changed BlockLightDescription JSON name from "minecraft:block_light_absorption" to "Minecraft:block_light_filter" and field name from "block_light_absorption" to "block_light_filter"

## **Data-Driven Entities**

- Fixed many missing "Description" entries in the documentation
- Added AI Goals documentation for "behavior.move_to_liquid" and "behavior.move_to_block"
- Added AI Goals documentation for missing parameters of "behavior.tempt", "behavior.rise_to_liquid_level", and "behavior.random_fly"
- Added Components documentation for missing parameters of "movement.sway"
- Fixed some typos and inconsistencies in the Entities documentation

## **Data-Driven Items**

- Updated documentation for BlockCollisionComponentDescription
- Changed BlockCollisionComponentDescription JSON name from "entity_collision" to "block_collision"
- Updated documentation for FuelItemComponent
- Renamed DamageableItemComponent to DurabilityItemComponent
- Updated documentation for BlockRaycastComponent
- Updated documentation for FoodItemComponent
- Changed SaturationModifier in FoodItemComponent to take a float instead of a string

## **Feature Placement**

- Optimization of geode feature placement. Reduces the compute cost of geode feature placement

## **Mobs**

- The "controlling_seat" field on "minecraft:rideable" now works as intended for both Boats and Horses
- Mobs riding other mobs and pathing towards a target will no longer wiggle back and forth along their path
- Match tool conditions now work on mobs (Experimental)

## **Molang**

- Fixed arrow operator to return 0 if the left side is not a valid entity or item, rather than causing the entire expression to return 0
  - For example, if bis not valid variable.a = variable.b-\>variable.c will now assign 0 to variable.a
  - This is not a Molang Versioned Changebecause no known content is currently using the arrow operator

## **Stability and Performance**

- Fixed a crash that could occur when setting the width or height of a mob's hitbox to a negative value
- Fixed an issue where ticking areas would occasionally skip a tick ([MCPE-119312](https://bugs.mojang.com/browse/MCPE-119312))
- The Content Log History panel is now accessible from the second player in split-screen without crashing the game

# **Experimental Features**

## **Block Components**

- Fixed BlockPartVisibilityComponent for multiplayer by adding network save/load tags ([MCPE-141908](https://bugs.mojang.com/browse/MCPE-141908))

## **GameTest Framework**

There are some important breaking changes in APIs creators should be aware of:

- Renamed mojang-minecraft:Worldobject to mojang-minecraft:world (World still exists but is the type instead of the instance of the world)
  - In practice, this means “World.getDimension” code should now read “world.getDimension”
- Removed mojang-minecraft:Commands- Instead, we are adding runCommand methods on dimension, entity, and player
  - In practice, this means that “Commands.run(“say Hello World”, dimension)” should now read “dimension.runCommand(“say Hello World”)”

Many exciting new API adds, as well:

- mojang-minecraft:ItemStack
  - Item use events:
    - Added event World.event.beforeItemUse - Fires before an item is used. Can be cancelled
    - Added event World.event.itemUse - Fires when an item is used and the before event is not cancelled
    - Added event World.event.beforeItemUseOn - Fires before an item is used on a block. Can be cancelled
    - Added event World.event.itemUseOn - Fires when an item is used on a block and the before event is not cancelled
  - Note that the following definition events only function with data driven items created as part of the Holiday Creator Features experiment:
    - Added event World.event.beforeItemDefinitionEvent - Fires before an Item definition event is processed. Can be cancelled
    - Added event World.event.itemDefinitionEvent - Fires when the Item definition event is processed and the before event is not cancelled
    - Added method triggerEvent(eventName : String) - Triggers an event on the ItemStack if an event with the given eventName, as defined in the Items JSON file
  - mojang-minecraft:Entity
    - Added runCommandmethod to run a command as an entity
    - Added dimensionproperty to get the dimension the entity is in
    - Added function addTag(tag: string): bool- Adds a tag to this entity. Returns true if the tag does not already exist
    - Added function hasTag(tag: string): bool- Returns true if the tag exists on this entity
    - Added function removeTag(tag: string): bool- Removes a tag from this entity. Returns true if the tag was removed
    - Added function getTags(): string\[\] - Returns all tags on this entity
    - Added target property to Entity. targetrepresents the Entity that this Entity is currently targeting, for purposes such as AI targeting
    - Added function getEntitiesFromViewVector(options: EntityRaycastOptions): Entity\[\]\` - Gets all entities that intersects the ray from the entities view vector
    - Added function getBlockFromViewVector(options: BlockRaycastOptions): Block – Gets the first block that intersects the ray from the entities view vector
  - mojang-minecraft:Dimension
    - Added runCommandmethod to run a command in a dimension
    - Added function getEntitiesFromRay(pos: Location, direction: Location, options: EntityRaycastOptions): Entity\[\]- Gets all entities that intersects the ray starting at a location which extends in direction
    - Added function getBlockFromRay(pos: Location, direction: Location, options: BlockRaycastOptions) : Block - Gets the first block that intersects the ray starting at a location which extends in direction
  - mojang-gametest:Test
    - Added getDimensionto get the dimension in which the test is being ran
  - mojang-gametest:ScriptSimulatedPlayer
    - Added function giveItem(itemStack: ItemStack, selectSlot: boolean)
    - Added function setItem(itemStack: ItemStack, selectSlot: boolean, slot: number)
    - GameTestExtensions - Removed function giveItem
