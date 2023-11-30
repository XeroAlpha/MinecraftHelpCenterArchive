---
title: Minecraft Beta & Preview - 1.19.70.20
date: 2023-01-26T14:32:12Z
updated: 2023-01-26T17:40:19Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/12571216557709-Minecraft-Beta-Preview-1-19-70-20
---

**Posted:** 26 January, 2023

**NOTE:** This week's Android Beta version may be delayed. We apologize for the inconvenience and are working to resolve the issue.

**Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot of a village, featuring a player in a Steve skin sneaking in a 1.5 block space. ](https://feedback.minecraft.net/hc/article_attachments/12571212293261)

Here's a list of what is new in this week's Minecraft Preview and Beta! Just a note about armor trims: These are available to test out in the latest [Java Edition snapshot](https://www.minecraft.net/en-us/article/minecraft-snapshot-23w04a), but they are not *quite* ready for the Bedrock Edition Beta and Preview just yet, but we will let you know as soon as they are so you can experiment with them, so keep your eyes on [minecraft.net](http://minecraft.net/) for the latest updates!

As always, you can send us all your feedback and ideas at [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

# **Experimental Features**

- Piglin Head Blocks rendered in the hotbar or inventory no longer have the ear overlapping the rest of the head ([MCPE-164605](https://bugs.mojang.com/browse/MCPE-164605))
- Players can now receive damage when falling while riding a Camel

# **Features and Bug Fixes**

## **Player Sneaking**

- Player’s hitbox height now reduces to 1.5 blocks while sneaking
  - Sneaking will automatically be initiated while stuck in a gap of less than 1.8 blocks
  - Sneaking will lower the player camera height respective of these changes
  - Sneaking now requires enough space to stand in order to exit sneaking
  - Players will transition from swimming to sneaking if they are unable to stand up but would be able to sneak
- Known Issues that we hope to have addressed soon:
  - Camera may be obscured when sneaking under blocks in third person view
  - Interacting with certain blocks may not work when sneaking in a gap
  - Jumping off the edge of blocks may not work as expected when sneaking in a gap

## **Vanilla Parity**

- Bells that are connected to multiple blocks no longer drop when one block is broken
- Breeding horses can now produce random variants ([MCPE-129071](https://bugs.mojang.com/browse/MCPE-129071))
- Fixed an issue where dead players prevented other players from skipping night
- Eating and drinking animations will now always be centered, regardless of screen aspect ratio
- Note Block sound attenuation over a distance is now linear ([MCPE-164935](https://bugs.mojang.com/browse/MCPE-164935))

## **Gameplay**

- Players no longer take rapid damage when touching damaging blocks ([MCPE-165347](https://bugs.mojang.com/browse/MCPE-165347))
- Fixed a crash that could occur when entering a 1.7.1.0 world in 1.8 or above ([MCPE-165564](https://bugs.mojang.com/browse/MCPE-165564))
- Projectiles shot while swimming/gliding no longer spawn from above the player's position ([MCPE-31896](https://bugs.mojang.com/browse/MCPE-31896))
- Items dropped while swimming/gliding, manually or on death, no longer spawn from above the player's position ([MCPE-31896](https://bugs.mojang.com/browse/MCPE-31896))
- The player's crosshair now properly mines/interacts with items in front of them while swimming/gliding, rather than 1 block above their position ([MCPE-57257](https://bugs.mojang.com/browse/MCPE-57257))
- Written Books can now be moved in the inventory even when the player has identical Written Books
- Double-clicking on the Furnace output slot will no longer drop the item ([MCPE-165079](https://bugs.mojang.com/browse/MCPE-165079))
- Fixed a bug where Observers would not detect changes due to corrupted data ([MCPE-150506](https://bugs.mojang.com/browse/MCPE-150506))
- Hoppers now pull in items from above them through all blocks that have a lower height than a full block ([MCPE-55824](https://bugs.mojang.com/browse/MCPE-55824))

## **Blocks**

- Destroying Mangrove Log or Mangrove Wood now properly cause leaves to decay
- End Crystals occupying the same space as a block will no longer cause that block to disappear 

## **Graphical**

- Fixed an issue where the "Mine" tooltip was appearing when targeting a block with a Trident in Creative game mode ([MCPE-44846](https://bugs.mojang.com/browse/MCPE-44846))

## **Mobs**

- Parrots will no longer shake while on a player riding a Horse that is turning mid-jump
- Fixed a bug causing global entities (e.g. Ender Dragon and projectiles) to stop rendering when out of normal entity render distance ([MCPE-161136](https://bugs.mojang.com/browse/MCPE-161136))

## **Touch Controls**

- Updated the How to Play screen with info on new touch controls
- Changing input modes from Gamepad to Touch while an item is selected will return the selected to the inventory or drop it
- Fixed an issue on the Furnace screen where double-tapping the output window caused other slots to become unselectable
- Fixed a bug where progressive select was automatically initiated on the first slot when opening a small Chest

## **Mobile**

- When starting a new world in Pocket UI, removed the "Press Open Chat to open chat" message for players with text-to-speech turned off

## **User Interface**

- Ocean Explorer, Woodland Explorer, and Treasure Maps now show the proper icon in the inventory ([MCPE-163464](https://bugs.mojang.com/browse/MCPE-163464))
- Fixed a bug where mouse scrolling on the Friend Options dropdown would not scroll the dropdown contents
- Resolved an issue where graphical elements of the Sign-In/Sign-Up screen could extend beyond the bounds of the dialog container

## **Commands**

- Replaceitem and loot replace block commands no longer place items in Cauldrons ([MCPE-129472](https://bugs.mojang.com/browse/MCPE-129472))
- Rotation in the teleport command is now relative to the executor of the command instead of the target. Old usage of rotations in commands will stay relative to the target mob for backwards compatibility

 

# **Technical Updates**

## **Mobs**

- Tropical Fish spawn rules .json file is now located in the correct folder ([MCPE-165963](https://bugs.mojang.com/browse/MCPE-165963))
- Witch potion drinking and ranged attack behaviour is now defined in its .json file

## **Creative**

- The game will no longer create a content error when Bee spawn eggs are used on a Spawner
- Behavior packs with scripts can now be removed from worlds

# **Experimental Technical Updates**

## **Commands**

- Fixed a crash with deferred command execution when the executing actor is removed before execution

## **API**

- **IMPORTANT BREAKING CHANGE:** The classes *Location*and *BlockLocation* no longer exist in the beta script API. All usages of these classes have been changed to use the *Vector3* interface (that is, { x: 1, y: 2, z: 3} objects).
- Also, note that several changes were made to properties and get/set methods across objects (listed below) to make them more consistent in calling structure.
- ItemStack
  - Item lore can now be cleared by calling *setLore(undefined)* or *setLore(\[\])*
  - Added function *clearLore*- Clears the item lore
- ItemStack
  - Fixed a bug where calling function *getComponent* or *ItemStack.getComponents*would fail on *ItemStacks* returned from *EntityItemComponent.itemStack*
- BeforeChatEvent
  - Renamed function tell to *sendMessage*
- Block
  - Added function *isAir*- Returns if the block is an air block (i.e. empty space)
  - Added function *isLiquid*- Returns if the block is a liquid (e.g., a water block and a lava black are liquid, while an air block and a stone block are not).
  - Added function *isSolid*- Returns if the block is solid (e.g., a cobblestone block and a diamond block are solid, while a ladder block and a fence block are not).
  - The following blocks now have an *inventory* component:
    - Barrel
    - Beacon
    - Blast Furnace
    - Brewing Stand
    - Dispenser
    - Dropper
    - Furnace
    - Hopper
    - Jukebox
    - Lectern
    - Smoker
  - World Events
    - Added event *entityDie*- It is fired when an entity dies.
    - Modified *projectileHit*to be a readOnly property on the Events class
  - Player
    - Added method 'getSpawnPosition' : Gets the spawnPoint position
    - Added property 'spawnDimension' : Gets the spawnPoint dimension
    - Added method 'setSpawn'(spawnPosition : Vec3, spawnDimension : Dimension) : Sets spawnPoint with a position and dimension
    - Added method 'clearSpawn' : Sets the spawnPoint position and dimension to undefined
  - World
    - Renamed function *say*to *sendMessage*
    - Added method 'getDefaultSpawnPosition' : Gets the spawnPoint position
    - Added method 'setDefaultSpawn'(spawnPosition : Vec3) : Sets the spawnPoint position within 'overworld' dimension
  - BeforeChatEvent
    - Added function *getTargets(): Player\[\]*- Gets chat Player targets
    - Added function *setTargets(players: Player\[\])*- Sets chat Player targets
    - Removed property *targets*
  - BeforeDataDrivenEntityTriggerEvent
    - Added function *getModifiers(): DefinitionModifier\[\]*- Gets entity definition modifiers
    - Added function *setModifiers(modifiers: DefinitionModifier\[\])*- Sets entity definition modifiers
    - Removed property *modifiers*
  - BoolBlockProperty
    - Added function *getValidValues(): boolean\[\]*- Gets all valid boolean values for the BoolBlockProperty
    - Removed property *validValues*
  - Converted *BlockHitInformation*to an interface
  - ChatEvent
    - Added function *getTargets(): Player\[\]*- Gets chat Player targets
    - Removed property *targets*
  - Converted *Color*to an interface
  - DataDrivenEntityTriggerEvent
    - Added function *getModifiers(): DefinitionModifier\[\]*- Gets Entity definition modifiers
    - Removed property *modifiers*
  - DefinitionModifier
    - Added function *getComponentGroupsToAdd(): string\[\]*- Gets component groups that will be added with the DefinitionModifier
    - Added function *setComponentGroupsToAdd(newGroups: string\[\]): void*- Sets component groups that will be added with the DefinitionModifier
    - Added function *getComponentGroupsToRemove(): string\[\]*- Gets component groups that will be removed with the DefinitionModifier
    - Added *function setComponentGroupsToRemove(removedGroups: string\[\]): void*- Sets component groups that will be removed with the DefinitionModifier
    - Added function *getTriggers(): Trigger\[\]*- Gets event triggers of the DefinitionModifier
    - Added function *setTriggers(newTriggers: Trigger\[\]): void*- Sets event triggers of the DefinitionModifier
    - Removed property *componentGroupsToAdd*
    - Removed property *componentGroupsToRemove*
    - Removed property *triggers*
  - DirectionBlockProperty
    - Added function *getValidValues(): Direction\[\]*- Gets all valid direction enum values for the DirectionBlockProperty
    - Removed property *validValues*
  - Entity
    - Added function *getViewDirection(): Vector3*- Gets view direction of the Entity
    - Added function *getRotation(): XYRotation*- Gets rotation of the Entity
    - Added function *getVelocity(): Vector*- Gets velocity of the Entity
    - Removed property *viewDirection*
    - Removed property *rotation*
    - Removed property *velocity*
  - EntityAgeableComponent
    - Added function *getDropItems(): string\[\]*- Gets items that drop when entity grows
    - Added function *getFeedItems(): EntityDefinitionFeedItem\[\]*- Gets items that can be fed to the entity
    - Removed property *dropItems*
    - Removed property *feedItems*
  - EntityBreathableComponent
    - Added function *getBreatheBlocks(): BlockPermutation\[\]*- Gets blocks entity can breathe in
    - Added function *getNonBreatheBlocks(): BlockPermutation\[\]*- Gets blocks entity can't breathe in
    - Removed property *breatheBlocks*
    - Removed property *nonBreatheBlocks*
  - EntityHealableComponent
    - Added function *getFeedItems(): FeedItem\[\]*- Gets healing items for the EntityHealableComponent
    - Removed property *items*
  - Converted *EntityHitInformation*to an interface
  - EntityRideableComponent
    - Added function *getFamilyTypes(): string\[\]*- Gets supported rider entity types
    - Added function *getSeats(): Seat\[\]*- Gets rider information for each seat
    - Removed property *familyTypes*
    - Removed property *seats*
  - EntityTameableComponent
    - Added function *getTameItems(): string\[\]*- Gets tame items of the EntityTameableComponent
    - Removed property *tameItems*
  - FeedItem
    - Added function *getEffects(): FeedItemEffect\[\]*- Gets effect of the FeedItem
    - Removed property *effects*
  - IntBlockProperty
    - Added function *getValidValues(): number\[\]*- Gets all valid integer values for the IntBlockProperty
    - Removed property *validValues*
  - ItemDurabilityComponent
    - Added function *getDamageRange(): NumberRange*- Gets the range of numbers that describes the chance of the item losing durability
    - Removed property *damageRange*
  - Converted *NumberRange*to an interface
  - ProjectileHitEvent
    - Added *function getBlockHit(): BlockHitInformation*- Gets block hit information from the ProjectileHitEvent
    - Added function *getEntityHit(): EntityHitInformation*- Gets entity hit information from the ProjectileHitEvent
    - Removed property *blockHit*
    - Removed property *entityHit*
  - StringBlockProperty
    - Added function *getValidValues(): string\[\]*- Gets all valid string values for the StringBlockProperty
    - Removed property *validValues*
