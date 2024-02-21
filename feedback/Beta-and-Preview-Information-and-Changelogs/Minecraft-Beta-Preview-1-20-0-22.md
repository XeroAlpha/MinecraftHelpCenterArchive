---
title: Minecraft Beta & Preview - 1.20.0.22
date: 2023-04-26T13:32:11Z
updated: 2023-04-26T14:58:42Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15239921044109-Minecraft-Beta-Preview-1-20-0-22
hash:
  pitcher-plant-pitcher-crop: pitcher-plant--pitcher-crop
---

**Posted:** 26 April, 2023

**Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality 
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![A Minecraft screenshot of a buried trail ruins site, with various archaeology items around.](https://feedback.minecraft.net/hc/article_attachments/15239777428237)

Greetings, Minecrafters! This week's Minecraft Preview and Beta is here and brings with it a plethora of new and exciting fixes and features. From a set of brand-new music tracks to the introduction of experimental camera commands, there's a lot to test out! We love to hear from you so please send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/)! So, without further ado, let's dive into the details and see what this latest Minecraft Preview has to offer!

# **Known Issues**

- Players are unable to connect to LAN sessions hosted by players on Windows or Xbox

# **Features and Bug Fixes**

## **Music**

- Added the following new music tracks by Aaron Cherof to Cherry Groves, Desert, Jungle, Mesa, and Flower Forest biomes
  - A Familiar Room
  - Bromeliad
  - Crescent Dunes
  - Echo in the Wind

## **Suspicious Blocks**

- Sugar Cane, Cactus, and Dead Bush can now be placed on Suspicious Sand ([MCPE-169142](https://bugs.mojang.com/browse/MCPE-169142)) ([MCPE-169141](https://bugs.mojang.com/browse/MCPE-169141))
- Bamboo can now be placed on Suspicious Sand and Gravel ([MCPE-169142](https://bugs.mojang.com/browse/MCPE-169142)) ([MCPE-169141](https://bugs.mojang.com/browse/MCPE-169141))
- Sugar Cane and Bamboo can now be placed on Moss Block

## **Archaeology**

- Adding Sniffer Eggs to loot in warm ocean ruin for suspicious blocks
- Trail Ruins no longer generate partially exposed ([MCPE-168869](https://bugs.mojang.com/browse/MCPE-168869))
- The loot tables for Suspicious Gravel inside Trail Ruins no longer have duplicate entries for Bricks ([MCPE-168856](https://bugs.mojang.com/browse/MCPE-168856))
- Added a new music disc which can be acquired by brushing suspicious blocks in Trail Ruins. When put in a Jukebox, Relic by Aaron Cherof is played
- Reworked Trail Ruins structures based on community feedback
- Added more structure variants
- Sand no longer generates within the structures
- Tweaked the amount of Gravel and Dirt that generates within the structures
- Tweaked the amount of Suspicious Gravel that generates within the structures
- Split the loot tables for the Suspicious Gravel within the structure. There is now a dedicated loot table for Rare loot items (e.g. Pottery Sherds, Smithing Templates), and a dedicated loot table for more common loot drops (e.g. Tinted Glass Pane, Tools, Candles, etc.).
- Renamed 'Pottery Shards' to 'Pottery Sherds'

## **Pitcher Plant & Pitcher Crop**

- Fixed an issue where the plant textures appeared darker
- Crafting dye from Pitcher Plant now results in two dyes instead of one ([MCPE-169498](https://bugs.mojang.com/browse/MCPE-169498))

## **Torchflower**

- Brown Mooshrooms can now eat Torchflowers ([MCPE-169607](https://bugs.mojang.com/browse/MCPE-169607))

## **Sniffer**

- Sniffer can now be tempted by Torchflower Seeds
- Sniffer now rather breeds than search and dig for items or be tempted
- Sniffer now creates particles while digging ([MCPE-167193](https://bugs.mojang.com/browse/MCPE-167193))
- Sniffer can no longer search and dig in water
- Made Sniffer walk cycle smoother
- Sniffer Egg emits particles only when placed on Moss block to demonstrate faster hatching

## **Gameplay**

- Flying is no longer disabled when flying under Stairs ([MCPE-168999](https://bugs.mojang.com/browse/MCPE-168999))
- Bees no longer make the player eating sound when eating ([MCPE-169567](https://bugs.mojang.com/browse/MCPE-169567))

## **User Interface**

- Added new Trails & Tales Update splash screen texts
- Coordinates will not show up on the new death screen when the "Show Coordinates" setting is enabled
  - The new "You Died!" screen is still in an experimental phase and for now we are removing the coordinates from it while we review the feedback we've had. Please continue to send us you thoughts and feedback [here](https://aka.ms/MinecraftPDScreen)!
- Added new Trails & Tales Update loading screen tips
- Added exclamation marks to certain splash texts that were missing to match Java Edition ([MCPE-165962](https://bugs.mojang.com/browse/MCPE-165962))
- The tooltip for dismounting Camels has been updated to match the one for other rideable mobs

## **Items**

- Moved Raiser Armor Trim Smithing Template's icon one pixel to the right ([MCPE-168934](https://bugs.mojang.com/browse/MCPE-168934))
- Moved Wayfinder Armor Trim Smithing Template's icon one pixel to the right ([MCPE-168934](https://bugs.mojang.com/browse/MCPE-168934))
- Fixed a bug where in some situations an item in an item frame would be too small ([MCPE-163399](https://bugs.mojang.com/browse/MCPE-163399))

## **Sculk Sensor Phases**

- Sculk Sensors and Calibrated Sculk Sensors now have three phases: Inactive, Active, and Cooldown
- The default phase is Inactive
  - This phase lasts indefinitely until the block receives a vibration
  - During this phase, the block is able to listen to nearby vibrations until one has been scheduled
- When a scheduled vibration is received, the block switches to the Active phase
  - This phase lasts 30 game ticks for Sculk Sensors, and 10 game ticks for Calibrated Sculk Sensors
  - During this phase, the block stops listening to nearby vibrations, wiggles its tendrils, and emits a Redstone signal and light
- After the Active phase has finished, the block switches to a Cooldown phase
  - This phase lasts for 10 game ticks
  - During this phase, the block keeps wiggling its tendrils, but no longer emits a Redstone signal nor light
  - Finally, once this phase is finished, the block will switch back to the Inactive phase
- Previously, these phases had different timings:
  - The Active phase lasted 40 game ticks for Sculk Sensors and 20 game ticks for Calibrated Sculk Sensors
  - There was no Cooldown phase
- These phase timings were tweaked so that it is less common for activated contraptions to recursively activate the Sculk Sensor that powered them

# **Technical Updates**

## **Add-Ons and Script Engine**

- Pumpkin blocks use the string type state "minecraft:cardinal_direction" instead of the int type "direction" state

## **Commands**

- Has item command selector now correctly detects whether or not an actor has a filled Map or Firework Star in their inventory
- The "inputpermission" command now has a description displayed in the command dialogue preview

## **Bedrock Editor**

- Fixed a bug where the default command permission level of the client differed from what was displayed in a multiplayer session
- Tool mode movement will now use the vanilla keyboard controls instead of hardcoded W/A/S/D/Space/Shift keys. Movement bindings can now be customized from the settings menu, but some keys might not be available if they are being used by other editor actions

## **Items**

- Custom items with 'minecraft:record' show the correct sound description in hover text and on playing in a Jukebox

 

# **Experimental Technical Features**

 

## **Add-Ons**

- Changed "minecraft:cardinal_direction" and "minecraft:facing_direction" states from int to string type.
  - "minecraft:cardinal_direction" has four values \["north", "south", "east", "west"\]
  - "minecraft:facing_direction" has six values \["down", "up", "north", "south", "east", "west"\]
- Added a new experimental Cameras toggle to allow for custom camera perspectives
- Removed "knockback_resistance" item component

## **API**

- New APIs moved from beta to stable @minecraft/server 1.2.0:
  - Moving *applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions \| EntityApplyDamageOptions): boolean*to *2.0*
  - Moving *kill(): boolean*to *2.0*
  - Moving *EntityApplyDamageOptions*to *2.0*
  - Moving *EntityApplyDamageByProjectileOptions*to *2.0*
  - Moving *EntityDamageCause*to *2.0*
  - Moving *addTag(tag: string)*to *2.0*
  - Moving *removeTag(tag: string)*to *2.0*
  - Moving *hasTag(tag: string)*to *2.0*
  - Moving *getTags()*to *2.0*
  - Moved *Container*and *BlockInventoryComponent* and *EntityInventoryComponent* to *2.0*
  - Moved Music APIs from beta to stable
  - Moved Sound APIs from beta to stable
  - Moved *ModalFormData*, *MessageFormData*, and *ActionFormData*to *0.0*
  - Fixed bug in response of *MessageFormResponse*where *selection* was inverted from which button was selected. *button1* now refers to the left button and results in a *selection* of 0 and *button2* now refers to the right button and results in a *selection* of 1
  - Moved *ItemStack*constructor and getter APIs to *2.0*
  - Moved *EntityItemComponent*, *ItemComponent*, *ItemType*and *ItemLockMode* to *2.0*
  - Moving *applyImpulse(vector: Vector3): void*to *2.0*
  - Moving *applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void*to *2.0*
  - Moving *clearVelocity(): void*to *2.0*
  - Moved *runCommand*from beta to *2.0*
- Enchantments
  - Removed MinecraftEnchantmentTypes class. Use MinecraftEnchantmentTypes from @minecraft/vanilla-data module for minecraft version specific information.
  - Added support for "strings" in all Enchantment methods for specifying the enchantment type
- *source*on *ExplosionBeforeEvent* is now an optional property because explosions may not have a source
- Tameable Component
  - Removed unimplemented *tameEvent*from *TameableComponent*
- Updated API to better handle operations outside of loaded and ticking areas
- PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore
- PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range
- Dimension
  - getBlock now returns an optional Block to reflect it might return 'undefined' if asking for a block at an unloaded chunk
- Signs
  - Added optional *SignSide*parameter to functions *setText*, *getText*, *getRawText*, *setTextDyeColor*, and *getTextDyeColor* on *BlockSignComponent* to support getting and setting text and colors on both sides of signs.
  - Added *isWaxed*property to *BlockSignComponent* indicating whether players can edit the sign or not.
  - Added *setWaxed*method to *BlockSignComponent* to block players from editing the sign.
- *runCommand*and *runCommandAsync* on *Dimension* and *Entity* can now fail with a *CommandError*
  - *runCommand*can throw a *CommandError* exception
  - *runCommandAsync*will pass a *CommandError* into the reject handler

## **Commands**

- Added /camera command as part of the experimental Cameras toggle
  - This command can switch to custom camera perspectives or fade the screen
- Use */help camera* to get a full list of options
