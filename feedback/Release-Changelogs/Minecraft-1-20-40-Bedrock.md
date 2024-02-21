---
title: Minecraft - 1.20.40 (Bedrock)
date: 2023-10-23T16:00:24Z
updated: 2023-10-24T16:49:17Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20637099144333-Minecraft-1-20-40-Bedrock
hash:
  h_01HDENPFC5H3N4YE6VDTEK4JZA: vanilla-parity
  h_01HDENPFC5GFVYW20NGGVX7SXQ: experimental-features
  h_01HDENPFC5NSX7140DRQ4VP00H: fixes-and-changes
  h_01HDENPFC5FYTGYKNQR8VE5C8H: technical-updates
  h_01HDENPFC7X0GNQ0BTN7K901HB: experimental-technical-updates
---

**Posted:** October 24, 2023

A new update has been released, bringing several changes to the game! Here are the highlights:

- Experimental: Rebalanced several Villager trades
- Updated and improved several in-game sounds
- Tweaked the splash sounds when entering and leaving water
- Buckets can no longer pick up liquids for a few ticks after they've been placed

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).**  
  
**

# **Vanilla Parity**

**Gameplay**

- Changed the default value of the Respawn Radius in the Advanced Settings to 10
- Falling from a great height while in a Boat no longer deals fall damage ([MCPE-152753](https://bugs.mojang.com/browse/MCPE-152753))
- Fall damage is now absorbed by the entity that lands on the ground when mounted and passed on to passengers if the mount dies
- Goat Horns can now be heard up to 256 blocks away ([MCPE-153254](https://bugs.mojang.com/browse/MCPE-153254))
- Tweaked the boss bar HUD color ([MCPE-43591](https://bugs.mojang.com/browse/MCPE-43591))
- Flowing Lava and Water mixing mechanics now match Java Edition ([MCPE-41103](https://bugs.mojang.com/browse/MCPE-41103))
- Closing the inventory of Boat, Raft, or Minecart with Chest now emits vibrations

**Mobs**

- Zombified Villager curing time is now randomized between 3 and 5 minutes, to match Java Edition
- Zombified Villagers now have the correct biome overlays ([MCPE-172377](https://bugs.mojang.com/browse/MCPE-172377))
- Witches now target players within a 16 block distance
- Sheep that have been sheared previously and have since grown back wool will now drop wool on death ([MCPE-99972](https://bugs.mojang.com/browse/MCPE-99972))
- Camels can no longer dash while in Lava or Water
- Iron Golems no longer spawn naturally in 2-block-high spaces where they would start suffocating ([MCPE-173006](https://bugs.mojang.com/browse/MCPE-173006))
- Iron Golems and Snow Golems now have a crumbling-like particle effect when they are created
- Cartographers no longer offer exploration maps as a trade item when not in the overworld

**Audio**

- Guardians and Elder Guardians now make flopping sounds when on land ([MCPE-26929](https://bugs.mojang.com/browse/MCPE-26929))
- Wither Skeletons now have their own unique sounds ([MCPE-174857](https://bugs.mojang.com/browse/MCPE-174857))
- Updated the sound that’s played when Wither Skeleton Skulls are placed on top of Note Blocks
- The sound for picking up items is now played when using the ‘/give’ command
- Stray Cats now play a sound when begging for food
- Changes to Bottles ([MCPE-157918](https://bugs.mojang.com/browse/MCPE-157918))
  - Bottles now emit sounds when filling from Water Blocks
  - Pouring water or potions from a Glass Bottle into a Cauldron emits the appropriate sound
  - Filling a Glass Bottle with Water or Potion from a Cauldron now emits the appropriate sound
  - Drinking from a Glass Bottle now emits the appropriate sound
- Changes to water splash sounds ([MCPE-174524](https://bugs.mojang.com/browse/MCPE-174524))
  - The ambient sounds for entering exiting water is now played only when actor is submerged below eye-level in water, matching Java Edition
  - The splash sound for entering water has been updated to match Java Edition  
      

# **Experimental Features**

**Villager Trade Rebalancing**

This experiment has no effect on normal worlds. If you want to try these changes, you must turn on the Feature Toggle in the Experiments Menu when creating a new world.

Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change! We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, **these changes are not yet final** and they will stay as experimental features while we continue to work on them. We appreciate your feedback on these changes. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts! We have been following the discussions about the previous Librarian and Wandering Trader updates and look forward to seeing the conversation continue.  
  

**Cartographer**

Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance.

Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village.

![villager-trades-1.png](https://feedback.minecraft.net/hc/article_attachments/20640447666829)

Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map.  
  

**Armorer**

The Armorer's trades have been updated with many changes.

The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds.

Early-game players will find Armorers useful as a great source of iron armor, Shields, and Emeralds.

Other changes include:

- Most master-level Armorers buy Iron Blocks (and pay very well for them)
- Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers
- The Savanna Armorer sells cursed diamond armor at reduced prices
- The Taiga Armorer can swap one piece of diamond armor for another

![villager-trades-2.png](https://feedback.minecraft.net/hc/article_attachments/20640430907149)  
  

**Structure Loot**

Certain Enchanted Books now have a high chance of generating in some structures:

- Ancient Cities: Mending
- Mineshafts: Efficiency (I to V)
- Pillager Outposts: Quick Charge (I to III)
- Desert Temples: Unbreaking (I to III)
- Jungle Temples: Unbreaking (I to III)  
    

# **Fixes and Changes**

**Performance / Stability**

- Fixed several crashes that could occur during gameplay
- Fixed a crash that could occur when running in the Archold room in the Spellrune Marketplace map
- Fixed a crash related to tessellation of water blocks
- Fixed an issue where the game would lock up if a mob would move on a block with 0 friction ([MCPE-173073](https://bugs.mojang.com/browse/MCPE-173073))

**Gameplay**

- Players are no longer affected by Arrow effects if the Arrow is blocked ([MCPE-52904](https://bugs.mojang.com/browse/MCPE-52904))
- Villages in the End and Nether are no longer saved to the Overworld ([MCPE-85954](https://bugs.mojang.com/browse/MCPE-85954))
- Players can no longer sometimes clip through blocks when gliding with Elytra into blocks ([MCPE-73307](https://bugs.mojang.com/browse/MCPE-73307))
- Buckets can no longer pick up liquids for a few ticks after they've been placed ([MCPE-100598](https://bugs.mojang.com/browse/MCPE-100598))
  - This should help make placing and retrieving liquid in a quick succession far more consistent as well as help players that are using a water bucket to quickly avoid fall damage
- Fixed an issue where moving slowly on Soul Sand would sometimes cause the player to not receive the Soul Speed movement speed ([MCPE-173155](https://bugs.mojang.com/browse/MCPE-173155))
- Players can no longer sometimes clip through blocks when flying in Creative Mode and spamming the sneak button ([MCPE-172785](https://bugs.mojang.com/browse/MCPE-172785))

**Mobs**

- Fixed a bug where the Sniffer ended digging as soon as item was created, not at the end of the specified dig duration
- Camels no longer appear to slide when walking ([MCPE-169666](https://bugs.mojang.com/browse/MCPE-169666))
- Camels no longer move their legs when standing still ([MCPE-172846](https://bugs.mojang.com/browse/MCPE-172846))
- Camels no longer dash indefinitely when in Lava ([MCPE-172369](https://bugs.mojang.com/browse/MCPE-172369))
- Mobs no longer receive fall damage when falling into a 1 block deep water pool ([MCPE-173094](https://bugs.mojang.com/browse/MCPE-173094))
- Rabbits can once again eat partially and fully grown Carrot crops ([MCPE-131980](https://bugs.mojang.com/browse/MCPE-131980))

**Blocks**

- Fixed a bug where the wrong side of Signs would sometimes be edited ([MCPE-169067](https://bugs.mojang.com/browse/MCPE-169067))
- Fixed an extremely rare bug (~0.000003% chance) that could cause Item Frames to not drop their item when hit or destroyed
- Third person camera no longer phases through the lower part of Cauldron ([MCPE-173010](https://bugs.mojang.com/browse/MCPE-173010))
- Falling in Powder Snow no longer causes any damage, no matter the height fallen from ([MCPE-174859](https://bugs.mojang.com/browse/MCPE-174859))
- Lightweight mobs and entities wearing Leather Boots once again sink into the top layer of Powder Snow when falling from a height of more than two and a half blocks
- Sculk Block no longer drops XP when mined with Silk Touch ([MCPE-174656](https://bugs.mojang.com/browse/MCPE-174656))

**Items**

- Diagonal Banner patterns no longer get inverted when applied to a Shield ([MCPE-169577](https://bugs.mojang.com/browse/MCPE-169577))
- Placing invalid items into offhand slot will no longer cause them to drop
- Warped Fungus on a Stick is no longer held backwards in first person view ([MCPE-169765](https://bugs.mojang.com/browse/MCPE-169765))
- Updated structure icons on Explorer Maps sold by Cartographers

**Accessibility**

- Fixed an issue where text-to-speech did not say how to open chat or use emotes
- Text-to-speech message for popup title/description is now played properly

**User Interface**

- Added a sprint button for Camels when "sprint using the joystick" option is turned off ([MCPE-172674](https://bugs.mojang.com/browse/MCPE-172674))
- Fixed Sneak button partially blocking the D-Pad Up button when using touch controls ([MCPE-38566](https://bugs.mojang.com/browse/MCPE-38566))
- Smithing Table no longer shows double overlapping tooltips for some slots ([MCPE-168369](https://bugs.mojang.com/browse/MCPE-168369))
- Item names no longer overlaps with the absorption health bar ([MCPE-152131](https://bugs.mojang.com/browse/MCPE-152131))
- Item names no longer overlaps with the mount health bar ([MCPE-152130](https://bugs.mojang.com/browse/MCPE-152130))
- Item names no longer overlaps with the oxygen bar ([MCPE-152129](https://bugs.mojang.com/browse/MCPE-152129))
- Updated Brewing Stand interface to always stay within its background when scaled ([MCPE-154385](https://bugs.mojang.com/browse/MCPE-154385))
- Improved disconnect message when trying to join a Realm when not a member
- Autocompleting text now moves the caret to end of the line

**Graphical**

- Equipped enchanted armor now has an overall weaker glint, however its intensity more noticeably increases and decreases over time
- Random lights no longer appear in the world without a source ([MCPE-169001](https://bugs.mojang.com/browse/MCPE-169001))
- Splash particles are now emitted at an actor's waist instead of above their head  
    

# **Technical Updates**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.20.40 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddonPacks)

**Stability and Performance**

- The Sounds definition file sound_definitions.json will no longer crash the game if the wrong json type is used for a specific sound definition ([MCPE-168913](https://bugs.mojang.com/browse/MCPE-168913))

**Commands**

- Re-entering a world no longer breaks command autocomplete after a command using "@e\[type=item\]" was used ([MCPE-164734](https://bugs.mojang.com/browse/MCPE-164734))
- The /damage command with the "override" cause now causes damage through post hit invulnerability ([MCPE-160290](https://bugs.mojang.com/browse/MCPE-160290))
- The recipe command color has been changed to white instead of blue ([MCPE-173362](https://bugs.mojang.com/browse/MCPE-173362))

**Mobs**

- Added a new “*query.is_in_lava*” Query Function to Molang, to know if a mob is currently in Lava

**Molang**

- Molang updated to version 1.20.40 which replaces "block_property" and "has_block_property" with "block_state" and "has_block_state"
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.20.40 or higher

**Trade Tables**

- Trade items now have a "filters" property to determine if a trade should be considered
- Trade items no longer support the "biome" property to check villager biome types, the "is_mark_variant" filter can be used in the "filters" property instead to check the villager biome type

**API**

- Released *World.getMoonPhase*, *MoonPhase*, and *MoonPhaseCount* v1.6.0
- Camera APIs moved from *beta* to *1.6.0*
  - Camera 
    - setCamera
    - fade
    - clear
  - EasingType
  - CameraSetRotationOptions
  - CameraSetFacingOptions
  - CameraSetPostionOptions
  - CameraDefaultOptions
  - CameraSetLocationOptions
- Changed the names of the *CameraSetOptions* options to not include the word 'Script'
- Released Entity.is\* APIs from *beta* to *1.6.0*
  - *isSleeping*
  - *isSneaking*
  - *isSprinting*
  - *isSwimming*
  - *isClimbing*
  - *isOnGround*
  - *isInWater*
  - *isFalling*
- Released Player level & XP APIs from *beta* to *1.6.0*
  - *addLevels*
  - *addExperience*
  - *level*
  - *getTotalXP*
  - *xpEarnedAtCurrentLevel*
  - *totalXpNeededForNextLevel*
  - *resetLevel*
- Released Player.is\* APIs from *beta* to *1.6.0*
  - *isEmoting*
  - *isGliding*
  - *isJumping*
  - *isFlying*
- Updated all methods besides show on *ActionFormData*, *MessageFormData*, and *ModalFormData* to be callable in read-only mode
- *BlockInventoryComponent*
  - container member variable now correctly reflects it can be a Container or undefined
- Fixed a versioning bug preventing @minecraft/server-ui module from working with @minecraft/server above version *1.2.0*
- *WeatherType* moved to *1.6.0*
  - Moved function *setWeather* to *1.6.0*
  - Moved event/property *entityRemove* from *beta* to *1.6.0*
  - Moved event/property *entityRemove* from *beta* to *1.6.0*
- Moved class *EntityRemovedAfterEvent* from *beta* to *1.6.0*
- Moved class *EntityRemoveAfterEventSignal* from *beta* to *1.6.0*
- Moved class *EntityRemovedBeforeEvent* from *beta* to *1.6.0*
- Moved class *EntityRemoveBeforeEventSignal* from *beta* to *1.6.0*
  - Moved event/property *entityLoad* from *beta* to *1.6.0*
- Moved class *EntityLoadAfterEvent* from *beta* to *1.6.0*
- Moved class *EntityLoadAfterEventSignal* from *beta* to *1.6.0*
  - Moved event/property *entitySpawn* from *beta* to *1.6.0*
- Moved enum *EntityInitializationCause* from *beta* to *1.6.0*
- Moved class *EntitySpawnAfterEvent* from *beta* to *1.6.0*
- Moved class *EntitySpawnAfterEventSignal* from *beta* to *1.6.0*
  - Moved event/property *playerBreakBlock* from *beta* to *1.6.0*
  - Moved event/property *playerBreakBlock* from *beta* to *1.6.0*
- Moved class *PlayerBreakBlockAfterEvent* from *beta* to *1.6.0*
- Moved class *PlayerBreakBlockAfterEventSignal* from *beta* to *1.6.0*
- Moved class *PlayerBreakBlockBeforeEvent* from *beta* to *1.6.0*
- Moved class *PlayerBreakBlockBeforeEventSignal* from *beta* to *1.6.0*
  - Moved event/property *playerPlaceBlock* from *beta* to *1.6.0*
- Moved class *PlayerPlaceBlockAfterEvent* from *beta* to *1.6.0*
- Moved class *PlayerPlaceBlockAfterEventSignal* from *beta* to *1.6.0*
- Moved class *BlockEventSignalOptions* from *beta* to *1.6.0*
  - Move *isAir(): boolean* from *beta* to *1.6.0*
  - Move *isLiquid(): boolean* from *beta* to *1.6.0*
  - Moved *amount* from *beta* to *1.6.0*
  - Moved *keepOnDeath: boolean* from *beta* to *1.6.0*
  - Moved *lockMode: ItemLockMode* from *beta* to *1.6.0*
  - Moved *nameTag?: string* from *beta* to *1.6.0*
  - Moved *clone(): ItemStack *from *beta* to *1.6.0*
  - Moved *getTags(): string\[\]* from *beta* to *1.6.0*
  - Moved *hasTag(tag: string): boolean* from *beta* to *1.6.0*
  - Moved *setCanDestroy(blockIdentifiers?: string\[\]): void* from *beta* to *1.6.0*
  - Moved *getCanDestroy(): string\[\]* from *beta* to *1.6.0*
  - Moved *setCanPlaceOn(blockIdentifiers?: string\[\]): void* from *beta* to *1.6.0*
  - Moved *getCanPlaceOn(): string\[\]* from *beta* to *1.6.0*
  - Moved function *getProperty* to *1.6.0*
  - Moved function *resetProperty* to *1.6.0*
  - Moved function *setProperty* to *1.6.0*
- Moved *getRotation* from *beta* to *1.6.0*
- Move *setRotation* from *beta* to *1.6.0*
- Released *PlayerDimensionChangeAfterEvent* from *beta* to *1.6.0*

**Blocks**

- "minecraft:transformation" now prevents blocks from being transformed past the 30x30x30 pixel limit and "minecraft:unit_cube" from being translated or scaled. Invalid block will instead display the "update" block ([MCPE-173799](https://bugs.mojang.com/browse/MCPE-173799))
- Chest blocks, Trapped Chest blocks, Ender Chest blocks, and Stonecutter blocks now use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]

**Items**

- Added a content error when attempting to load a damage sensor with an invalid "cause" value
- Allow single value parsing for "minecraft:icon" item component
- The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using “minecraft:dash”
- Deprecated "minecraft:weapon" component starting in version 1.20.40
- Deprecated "minecraft:on_use" component starting in version 1.20.40
- Deprecated "minecraft:on_use_on" component starting in version 1.20.40

**Entity Components**

- Unlocked “behavior.random_search_and_dig” for creators to use
- "target_blocks" field added. List of blocks that the mob can dig on. Default if "target_blocks" isn't added is Dirt, Grass, Podzol, Dirt with Roots, Moss, Mud, and Muddy Mangrove Roots
- "item_table" field added. Path to a loot table that specifies what the mob can dig up. "item_table" takes precedence over "items"
- Content errors added if the behavior has trouble reading or finding "item_table" and if unable to get an item from "items"
- 'on_item_found' event now fires on item found AND digging finished. Before the event firing caused the digging to stop early
- The “*behavior.random_look_around_and_sit*” now has the field “*continue_sitting_on_reload*” exposed for Creators to use. This is how the Camel stays sitting on reload
- “*behavior.is_scenting*” renamed to generic “*behavior.timer_flag_1*” and released to creators
- “*behavior.is_rising*” renamed to generic “*behavior.timer_flag_2*” and released to creators
- “*behavior.is_feeling_happy*” renamed to generic “*behavior.timer_flag_3*” and released to creators
- “*behavior.timer_flag 1*”: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. *query.timer_flag_1* will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise
- “*behavior.timer_flag 2*”: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. *query.timer_flag_2* will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise
- “*behavior.timer_flag 3*”: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. *query.timer_flag_3* will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise  
    

# **Experimental Technical Updates**

**Script API**

- Added function *getWeather*
- Added the *chat(message: string)* method
- Changed *ItemTypes.get* to return *ItemType \| undefined*
- Changed *source* on *ItemDefinitionTriggeredAfterEvent* to be optional
- Added the following methods to *Player*
  - *above(steps?: number): Block \| undefined;*
  - *below(steps?: number): Block \| undefined;*
  - *north(steps?: number): Block \| undefined;*
  - *east(steps?: number): Block \| undefined;*
  - *south(steps?: number): Block \| undefined;*
  - *west(steps?: number): Block \| undefined;*
  - *offset(offset: Vector3): Block \| undefined;*
  - *center(): Vector3;*
  - *bottomCenter(): Vector3;*
  - Made getItemStack function return ItemStack or undefined
- BlockStates
  - Made get function return BlockStateType or undefined
- getSculkSpreader
  - Made *getSculkSpreader* return SculkSpreader or undefined
- Updated *ExplosionAfterEvent* and *ExplosionBeforeEvent*
  - *getUpdatedBlocks()* will now return *Block\[\]*
  - *setUpdatesBlocks(blocks: Block\[\])* now takes in a *Block\[\]*
- Added the following methods to *Player* playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;
- Dynamic Properties
  - Property registration is no longer required and *propertyRegistry* has been removed from the *worldInitialize* event
  - Removed limits on the count and size of properties that can set on an entity or the world
  - Default values have been removed. *getProperty* will now always return undefined for unset properties
  - String dynamic property values are now restricted to a length of 32767 bytes
- Dynamic Properties
  - Removed function *removeDynamicProperty* - Please use *setDynamicProperty* with a value of *undefined* to remove a property
  - Added function *getDynamicPropertyIds* - Returns an array of all dynamic property ids on an entity/world used by the behavior pack
  - Added function *getDynamicPropertyTotalByteCount* - Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack
  - Added function *clearDynamicProperties* - Removes all dynamic properties added by this behavior pack from an entity/world
- Dynamic Properties
  - Dynamic property numbers are now stored with double precision (64 bits)
- Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events
- Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta
- Added *matches* function called on an entity, which takes in *EntityQueryOptions* and returns true if the entity matches and false otherwise
- Added *PlayerLeaveBeforeEvent* - This event fires when a player leaves the server, before the Player object is removed
