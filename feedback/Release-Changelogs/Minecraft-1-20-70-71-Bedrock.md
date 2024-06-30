---
title: Minecraft - 1.20.70/71 (Bedrock)
date: 2024-03-07T21:24:47Z
updated: 2024-03-12T15:51:27Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/24797348001037-Minecraft-1-20-70-71-Bedrock
---

**Posted:** March 12, 2024

A new update for Minecraft is available now, bringing several changes, fixes, and experimental features! Check out the highlights from this release:

- Wolves now have double the amount of health than they used to
- Experimental: Upcoming 1.21 features, including the Bogged, Wind Charge, and Vault

![patchnotes_r20u7.png](https://feedback.minecraft.net/hc/article_attachments/24797416418701)

**NOTE:** Some platforms may see this update as version 1.20.70, though the two versions are fully compatible in multiplayer.

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).**<u>  
  
</u>**

**Vanilla Parity:**

**Mobs**

- Wolves can now withstand the same amount of damage as in Java Edition ([MCPE-177613](https://bugs.mojang.com/browse/MCPE-177613))
  - Rather than halving all damage dealt to tamed Wolves by entities other than Players or Arrows, as currently done in Java Edition, the maximum health of tamed Wolves has been increased from 20 to 40
  - Pre-existing tamed Wolves will need to be fed to reach the new maximum health
  - To ensure the healing rate remains consistent, the health restored by feeding Wolves has been doubled
  - Java Edition will be adjusted to match the new Bedrock Edition implementation  
      

**Experimental Features:**

**Wind Charge**

- Become the Breeze! Using a Wind Charge will fire off a Wind Charge projectile similar to the Breeze's
- A Wind Charge fired by a player will grant 10% more knockback than a Breeze's
- Just like the projectile fired by the Breeze, Wind Charges fired by the player also deal damage if they hit an entity directly
- The Breeze drops between 4-6 Wind Charges when killed
- Wind Charges have a max stack size of 64
- There is half a second cooldown after each use
- Wind Charges can be fired from a dispenser
- Players that launch themselves with a Wind Charge only accumulate fall damage below the y-level of where they collided with the wind burst

**Bogged**

- A new variant of Skeletons that shoot poisonous arrows
  - They're faster to take down with 16 health instead of 20 health
  - They attack at a slower interval of 3.5 seconds instead of 2 seconds
- Has a chance to drop Arrows of Poison when killed by players
- These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
  - Can also be found spawning from Trial Spawners in some Trial Chambers

**Vault**

- A block that holds locked treasure and loot - find the right key to eject its rewards
  - Found throughout Trial Chambers, containing the structures' most valuable loot
  - Vaults in Trial Chambers require a Trial Key to be unlocked
- Can be unlocked by an unlimited amount of players
  - After a player has unlocked a Vault, they cannot unlock that Vault again
  - If a player has not unlocked that Vault before, an orange stream of particles will flow from the player to the Vault when nearby
- Has a keyhole that will be open or closed depending on the players nearby
  - If any nearby player has not unlocked that Vault, the keyhole will be open
  - If all nearby players have unlocked that Vault, the keyhole will be closed
- Within its cage, it will cycle through and display items which are possible to eject from its loot table
- The rewards it ejects are randomized from its loot table each time it is unlocked
- Vaults currently reuse the same loot table that reward chests previously used in the Trial Chambers
  - This loot table is temporary and will be completely revised as development continues
- Cannot be crafted or obtained in Survival mode, and does not drop anything when mined
- Explosion-resistant and cannot be moved

**Wolf**

- The collars of tamed Wolves have been increased in size, making them visible not only from the front but also from other angles  
    

**Fixes and Changes:**

**Performance / Stability**

- Fixed a bug that could cause the loading screen to get stuck for some time around 40% ([MCPE-175550](https://bugs.mojang.com/browse/MCPE-175550))
- Fixed an issue where the game could softlock while displaying the "Loading resource packs" modal
- Fixed an issue that could cause the game to freeze when changing languages on some platforms

**Gameplay**

- Upward player motion will now reset fall distance, allowing Riptide Tridents to break a fall ([MCPE-126454](https://bugs.mojang.com/browse/MCPE-126454))
- Players can now bridge blocks over water ([MCPE-163165](https://bugs.mojang.com/browse/MCPE-163165))
- Fixed sky light not being updated properly when big gaps of air were present between the ceiling and the floor
- Fixed a bug that could sometimes prevent the Stronghold portal room from being generated ([MCPE-19426](https://bugs.mojang.com/browse/MCPE-19426))
- Fixed players not unlocking “The Beginning” trophy on PlayStation for defeating a Wither, even if they were close enough to the Wither

**Mobs**

- When fed, baby mobs now emit both sound and particles
- All sounds emitted by Phantoms are now audible even when the player is facing away ([MCPE-133125](https://bugs.mojang.com/browse/MCPE-133125))
- All sounds emitted by Wardens are now audible even when the player is facing away ([MCPE-159481](https://bugs.mojang.com/browse/MCPE-159481))

**Blocks**

- Double Slabs can once again be created when stacking two of the same Slabs together ([MCPE-179187](https://bugs.mojang.com/browse/MCPE-179187))
- Sweet Berry Bush Sapling now slows down players when walked through ([MCPE-46152](https://bugs.mojang.com/browse/MCPE-46152))
- Cave Vines without Glow Berries no longer drop a Glow Berry when Silk Touched ([MCPE-151348](https://bugs.mojang.com/browse/MCPE-151348))
- Blue and Black Candle Cakes now display and drop the correct type of Candle ([MCPE-162868](https://bugs.mojang.com/browse/MCPE-162868))
- Patternless Banners taken from the Creative mode inventory will no longer reset when first placed ([MCPE-178327](https://bugs.mojang.com/browse/MCPE-178327))
- Tall Flowers are no longer affected by Fortune enchantment ([MCPE-18880](https://bugs.mojang.com/browse/MCPE-18880))
- Large Ferns now have a chance of dropping Wheat Seeds ([MCPE-126947](https://bugs.mojang.com/browse/MCPE-126947))
- Tweaked the loot drop distributions for Fortune enchantment of Melon, Redstone Ore, Glowstone, and Nether Wart to better match Java Edition
- Fixed a bug that made it so players could not place multiple items while moving, such as Boats or Fireworks ([MCPE-178063](https://bugs.mojang.com/browse/MCPE-178063), [MCPE-178077](https://bugs.mojang.com/browse/MCPE-178077))

<!-- -->

- - As a result of this fix, we've had to revert the fix for Slabs and Stairs being placed inconsistently while continuously building ([MCPE-54855](https://bugs.mojang.com/browse/MCPE-54855)). We'll work to reintroduce a fix for this in an upcoming update

<!-- -->

- In Realms, removing an item from an Item Frame while in Creative mode no longer destroys the Item Frame ([REALMS-10464](https://bugs.mojang.com/browse/REALMS-10464))
- In Realms, removing a book from a Lectern while in Creative mode no longer destroys the Lectern ([REALMS-10536](https://bugs.mojang.com/browse/REALMS-10536))
- Lots of blocks now play appropriate sounds when entities fall onto them. The blocks are as follows: ([MCPE-176939](https://bugs.mojang.com/browse/MCPE-176939))
  - Amethyst Block
  - Amethyst Cluster variants
  - Ancient Debris Block
  - Anvil Block
  - Azalea Block
  - Azalea Leaves
  - Bamboo Block
  - Bamboo Wood
  - Basalt Block
  - Big Dripleaf
  - Bone Block
  - Calcite Block
  - Candle
  - Cave Vines
  - Chain Block
  - Cherry Leaves
  - Cherry Wood
  - Chiseled Bookshelf
  - Copper Block variants
  - Coral Block
  - Crimson Nylium Block
  - Deepslate Block
  - Deepslate Bricks
  - Dripstone Block
  - Frog Spawn
  - Froglight
  - Glass Block
  - Grass Block
  - Gravel Block
  - Hanging Roots
  - Hanging Sign
  - Honey Block
  - Ladder Block
  - Lantern Block
  - Lodestone Block
  - Mangrove Roots
  - Moss Block
  - Moss Carpet
  - Mud Block
  - Mud Bricks
  - Muddy Mangrove Roots
  - Nether Brick Block
  - Nether Gold Ore Block
  - Nether Sprouts
  - Nether Wart
  - Nether Wart
  - Netherite Block
  - Netherrack Block
  - Packed Mud
  - Pink Petals
  - Pointed Dripstone
  - Powder Snow
  - Rooted Dirt
  - Sand Block
  - Scaffolding Block
  - Sculk Catalyst
  - Sculk Sensor
  - Sculk Shrieker
  - Sculk Vein
  - Shroomlight Block
  - Slime Block
  - Snow Block
  - Soul Sand Block
  - Soul Soil Block
  - Spore Blossom
  - Stone Block
  - Suspicious Gravel
  - Suspicious Sand
  - Tuff Block
  - Turtle Egg Block
  - Vine Block
  - Warped Nylium Block
  - Warped Wart
  - Wood Blocks
  - Wool Block

**Items**

- Updated the Globe pattern on Shields to match Java Edition ([MCPE-169595](https://bugs.mojang.com/browse/MCPE-169595))
- In Realms, attempting destruction of one Sea Turtle Egg on a stack of more than one in Creative mode no longer destroys two at once ([REALMS-10477](https://bugs.mojang.com/browse/REALMS-10477))
- Spawn Eggs are now called "\[Mob\] Spawn Egg" instead of "Spawns \[Mob\]" so that players can more easily search for them in the Creative mode inventory
- End Portal Frame has been moved to Nature category in the Creative mode inventory

**Touch Controls**

- Players can no longer customize touch controls while on the death screen ([MCPE-178037](https://bugs.mojang.com/browse/MCPE-178037))

**Graphical**

- Added 4K resolution support for Xbox Series consoles

**Realms**

- Updated the Realms Plus landing page to make it more clear how Realms subscriptions work
- On Realms, chunks will no longer stay loaded in The End unless a player is in the area ([REALMS-11358](https://bugs.mojang.com/browse/REALMS-11358), [REALMS-11290](https://bugs.mojang.com/browse/REALMS-11290))
- Fixed a bug where text in the Realms Subscription landing page was slightly truncated

**Android**

- Storage location will switch to External automatically on fresh installs if storage permission is granted via app settings prior to launching the game on devices running Android 12 or older ([MCPE-177269](https://bugs.mojang.com/browse/MCPE-177269))
- Certain files and directories will be generated in external storage on next launch when setting storage location to External via in-game settings on devices running Android 12 or older ([MCPE-176675](https://bugs.mojang.com/browse/MCPE-176675))

**User Interface**

- Fixed chat messages initially rendering below the screen after sending them ([MCPE-178905](https://bugs.mojang.com/browse/MCPE-178905))
- The updated Death Screen is now enabled by default, even when resource packs are applied to a world
- Updated the design of the report a friend warning modal and the report limit warning modal
- Fixed a bug that caused cleared text to reappear in the inventory search bar ([MCPE-174590](https://bugs.mojang.com/browse/MCPE-174590))
- Fixed text-to-speech narration for main panel text and Realm Feed button on Realm Slots Screen  
    

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.20.70 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddonPacks)

**General**

- Implemented a fix for the “One Block Skyblock” Marketplace map generating flat world in the distance on the client if the map was uploaded on Realms
  - Clients connected to a dedicated server or Realms will no longer improperly generate LevelChunks on the client if one of the following is true:
    - The map is a flat world
    - It's a Marketplace map
  - This overrides server.properties setting client-side-chunk-generation-enabled for dedicated servers
- Removed *ItemFrameDropItemPacket*

**Commands**

- Added "has_property" filter for entity target selector that allows for targeting based on the type and value of properties
- The /damage command no longer contains the damage type 'suicide'. It is replaced with 'self_destruct' ([MCPE-174865](https://bugs.mojang.com/browse/MCPE-174865))
- The Command Block's interface will now remove the last error message after successfully compiling a command ([MCPE-114029](https://bugs.mojang.com/browse/MCPE-114029))

**Add-Ons and Script Engine**

- Blocks using the "minecraft:material_instances" component with "render_method" = "alpha_test_single_sided" display properly when in the player's hand

**Blocks**

- Fixed 'minecraft:geometry.full_block' faces not rotating to match transform component
- Fixed 'minecraft:geometry.full_block' blocks not culling faces against some vanilla blocks
- “leaves” block is now split into unique names, “oak_leaves”, “spruce_leaves”, “birch_leaves, and ”jungle_leaves”
- “leaves2” block is now split into “acacia_leaves” and “dark_oak_leaves”
  - Commands will still work with “leaves” and “leaves2”, but only new leaves names will be suggested in the command prompt
- The “minecraft:grass” block has been renamed to “minecraft:grass_block”, the old name is still understood from commands and data
- “double_wooden_slab” block is now split into unique instances "acacia_double_slab", "birch_double_slab", "dark_oak_double_slab", "jungle_double_slab", "oak_double_slab", "spruce_double_slab"
  - Commands will still work with “double_wooden_slab”, however, “double_wooden_slab” block will not be suggested
- “wooden_slab” block is now split into unique instances “oak_slab”, “spruce_slab”, “birch_slab”, “jungle_slab”, “acacia_slab”, “dark_oak_slab”
  - Commands will still work with “wooden_slab”, however, “wooden_slab” block will not be suggested
- "wood" block is now split into unique instances: "oak_wood", "spruce_wood", "birch_wood", "jungle_wood", "acacia_wood", "dark_oak_wood", "stripped_oak_wood", "stripped_spruce_wood", "stripped_birch_wood", "stripped_jungle_wood", "stripped_acacia_wood", and "stripped_dark_oak_wood"

**Components**

- The “entity_sensor” component’s “range” field now supports two values, the first one for horizontal range and the second one for vertical range
  - This requires a “format_version” of 1.20.70 or higher
- The "damage_sensor" component's "damage_modifier" and "damage_multiplier" fields are now properly considered during damage immunity calculations, so that damage adjusted to be lesser or equal to the highest damage received during an entity's immunity period will be accurately ignored
  - This requires a world version of 1.20.70 or higher

**Entity Filters**

- Added new entity filter “was_last_hurt_by”, which checks if the subject is the last player or mob to have recently attack the entity

**Items**

- Custom armor attachables can now be trimmed with vanilla trims, and modified vanilla patterns can be applied to custom armor attachables and items
  - Vanilla trim textures can be overridden via the attachable component
  - Vanilla trims can be applied to custom geo armor via the attachable component
  - Modified vanilla trim patterns (to fit the new geo armor) can be applied via the attachable component
  - Armor trim patterns on custom armor requires the 1.20.60+ format version for the attachable and item

**Molang**

- Released *is_attached* and *query.has_player_rider* from experimental
- Removed experimental Molang queries *get_ride* and *query.get_riders*
- Deprecated the Molang Features experimental toggle
- Released Molang *scoreboard* for use with behavior packs from experimental (resource packs will return 0)
- Removed experimental Molang queries
  - biome_has_any_tag
  - biome_has_all_tags
  - self
  - target
  - client_input_type
  - get_nearby_entities
  - get_nearby_entities_except_self
- Added new Molang APIs that give read access to rider body and head rotations
  - rider_body_x_rotation(riderIndex) =\> float
  - rider_body_y_rotation(riderIndex) =\> float
  - rider_head_x_rotation(riderIndex) =\> float
  - rider_head_y_rotation(riderIndex,clampRotation?) =\> float
  - ride_body_x_rotation =\> float
  - ride_body_y_rotation =\> float
  - ride_head_x_rotation =\> float
  - ride_head_y_rotation(clampRotation?) =\> float
- *surface_particle_color*, *query.surface_particle_texture_coordinate*, and *query.surface_particle_texture_size* are now versioned with 1.20.70 to allow the three queries to see Leaf blocks as the surface texture below the block. Molang versions lower than 1.20.70 will continue to not see the Leaf block below them
- This change takes effect for Molang queries in packs that have a manifest.json min_engine_version of 1.20.70 or higher.

**NBT Parsing**

- Loading of NBT data is now more restrictive. Negative-length arrays, invalid tag ids, and not enough bytes in a payload are now all treated as errors which will prevent a tag loading where before those conditions were sometimes ignored

**Spawn Rules**

- “minecraft:spawns_on_block_filter” now supports block descriptors
- “minecraft:spawns_on_block_prevented_filter” now supports block descriptors
- “minecraft:spawns_above_block_filter” now supports block descriptors

**API**

- Added *ScriptGameRules* and *gameRules* for accessing and modifying game rules
- Fixed the timing of *PlayerInteractWithEntityAfterEvent* and *PlayerInteractWithBlockAfterEvent*
- Added *setGameMode* and *Player.getGameMode* to *beta* for changing the player's GameMode
- Added events *PlayerGameModeChangeAfterEvent*, *PlayerGameModeChangeBeforeEvent* with signals *afterEvents.playerGameModeChange* and *world.beforeEvents.playerGameModeChange* to *beta*
- Added *GameRuleChangeAfterEvent*, *GameRule* and *afterEvents.gameRuleChange* for responding to GameRules changes
- Fixed *getBlockFromRay* returning false positive collisions with water when already submerged

**Character Creator**

- Added a new model to contain the character creator animation logic
- Updated the logic that was done to trigger updating the binds when the animation states have been updated, so we do not run into issues with the binds updating every frame causing a major framerate hit  
    

**Experimental Technical Updates:**

**API**

- Entity Components
  - Added *EntityTypeFamilyComponent* with functions *getTypeFamilies(): string\[\]* and *hasTypeFamily(typeFamily: string): boolean*
- Item
  - Moved *ItemFoodComponent* from *beta* to *1.9.0*
  - Added function *matches(itemName: string, states?: Record\<string, boolean \| number \| string\>): boolean*
- Removed class *BlockVolumeUtils*. Moving utility functions onto *BlockVolumeBase*and *BlockVolume*
- Added class *BlockVolumeBase*. Is the base class from which block volumes will extend
- BlockVolume
  - **Breaking Change:**Converted *BlockVolume* from an interface to a class, which extends *BlockVolumeBase*
- *@minecraft/server.Entity.playAnimation*
  - Moved Entity.playAnimation from *beta* to *stable*
- Moved enum *BlockPistonState* from *beta* to *1.9.0*
- Moved class *BlockPistonComponent* from *beta to 1.9.0*
- Moved class *PistonActivateAfterEvent* from *beta* to *1.9.0*
- Moved class *PistonActivateAfterEventSignal* from *beta to 1.9.0*
- ItemComponents
  - Added *isCooldownCategory(cooldownCategory: string) : boolean* to *ItemCooldownComponent*
  - Added *getCooldownTimeRemaining(player: Player) : number* to *ItemCooldownComponent*
  - Added *MinecraftCooldownCategoryTypes* to *@minecraft/vanilla-data*
    - Added *getHiddenHudElements(): HudElements\[\]*
    - Added *isForcedHidden(hudElement: HudElements): Boolean*
    - Added *resetHudElements(): void*
    - Added *setHudVisibility(visible: HudVisibility, hudElements?: HudElements\[\]): void*
    - Added *hideAllExcept(hudElements?: HudElements\[\])*
  - Added interface *BlockFilter*. Used to include / exclude blocks by tag, type and permutation
  - BlockRaycastOptions
    - Added optional member *BlockFilter*
    - Updated *getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit \| undefined* to throw if the BlockFilter include / exclude types cannot be resolved inside *BlockRaycastOptions*
    - Moved *ItemDurabilityComponent* from *beta* to *1.9.0*
  - Debug Utilities
    - Started publishing the debug utilities type information
    - Added a *disableWatchdog* method that lets you disable and enable the scripting watchdog in your scripts
    - Added function *playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void* - Plays a sound at a specified location for all players in the dimension
    - Moved *getAllStates* API from *beta* to *stable*
      - *clearJob(jobId: number)* - Will now clear iterations in the current tick as well as any scheduled for future ticks. Previously would only clear iterations in future ticks
    - @minecraft/server.WeatherChangeAfterEvent
      - Moved *WeatherChangeAfterEvent* from *beta* to *stable*
      - Moved *setOnFire* from *beta* to *1.9.0*
      - Moved *extinguishFire* from *beta* to *1.9.0*
    - Moved *EntityOnFireComponent* from *beta* to *1.9.0*
      - Moved *getEquipmentSlot* from *beta* to *1.9.0*
    - Moved *BlockStateType* from *beta* to *1.9.0*
    - Moved *BlockStates* from *beta* to *1.9.0*
    - Moved *BlockSignComponent* from *beta* to *1.9.0*
    - Moved *DyeColor* from *beta* to *1.9.0*
    - Moved *SignSide* from *beta* to *1.9.0*
    - Moved *ContainerSlot* from *beta* to *1.9.0*
    - Moved *InvalidContainerSlotError* from *beta* to *1.9.0*
      - Moved *getSlot* from *beta* to *1.9.0*
    - Moved *EffectTypes* from *beta* to *1.9.0*
    - Moved *RawText* from *beta* to *1.9.0*
    - Moved *createExplosion* from *beta* to *1.9.0*
    - Moved *ExplosionOptions* from *beta* to *1.9.0*
    - Moved *DimensionType* from *beta* to *1.9.0*
    - Moved *DimensionTypes* from *beta* to *1.9.0*
    - Moved *setDynamicProperty* from *beta* to *1.9.0*
    - Moved *getDynamicProperty* from *beta* to *1.9.0*
    - Moved *getDynamicPropertyIds* from *beta* to *1.9.0*
    - Moved *getDynamicPropertyTotalByteCount* from *beta* to *1.9.0*
    - Moved *clearDynamicProperties* from *beta* to *1.9.0*
    - Added *structureManager* - A *StructureManager* instance that allows you to create, load and place structures in the world
    - StructureManager
      - Added function *createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): StructureTemplate* - Creates a new empty structure
      - Added function *createFromWorld(identifier: string, dimension: Dimension, blockVolume: BlockVolume, options?: StructureCreateOptions): StructureTemplate* - Creates a new structure from blocks in the world
      - Added function *delete(structure: string \| StructureTemplate): boolean* - Deletes the structure
      - Added function *get(identifier: string): StructureTemplate \| undefined* - Gets the structure with the specified identifier
      - Added function *place(structure: string \| StructureTemplate, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions)* - Places a structure in the world
    - StructureTemplate
      - Added read-only property *id: string*- Returns the name of the structure
      - Moved *effectAdd* from *beta* to *1.9.0*
    - Fixed a bug where item dynamic properties could sometimes be applied to items with a stack size greater than 1
      - Removing function *triggerEvent()*
    - WorldBeforeEvents
      - Removing property *itemDefinitionEvent*
    - WorldAfterEvents
      - Removing property *itemDefinitionEvent*
      - Moved *explosion* from *beta* to *1.9.0*
    - WorldBeforeEvents
      - Moved *explosion* from *beta* to *1.9.0*

**Dimension**

- *getEntities* now only returns the entities within the dimension that's being queried
