---
title: Minecraft - 1.20.60 (Bedrock)
date: 2024-02-05T20:01:43Z
updated: 2024-02-06T21:12:02Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23875745708557-Minecraft-1-20-60-Bedrock
---

**Posted:** February 6, 2024

A new update for Minecraft is available now, bringing several changes, fixes, and experimental features! Check out the highlights from this release:

- Fixes to a whole bunch of bugs and parity changes
- Experimental features from the upcoming 1.21 update, including Trial Chambers and the Breeze
- Experimental Armadillo and Wolf Armor

![r20u6_patchnotes.png](https://feedback.minecraft.net/hc/article_attachments/23875857874061)

**NOTE:** This update will appear on Nintendo Switch and Dedicated Servers as version 1.20.61 and all other platforms as 1.20.60. The contents of the update are the same.

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).  
  

**Vanilla Parity**

- Nether Gold Ore can now drop up to 6 Gold Nuggets (previously 5) when mined with an unenchanted tool, or up to 24 with Fortune Level 3 (previously 20)
- Lapis Lazuli Ore can now drop up to 9 Lapis Lazuli (previously 8) when mined with an unenchanted tool, or up to 36 with Fortune Level 3 (previously 32)
- Campfire now correctly drops 2 Charcoal instead of 4 when destroyed by the player ([MCPE-159894](https://bugs.mojang.com/browse/MCPE-159894))
- Music Disc name text now has the same color as enchanted items ([MCPE-109471](https://bugs.mojang.com/browse/MCPE-109471))
- Trail Ruins will now be placed in the same location and configuration as Java Edition ([MCPE-169988](https://bugs.mojang.com/browse/MCPE-169988))  
    

**Experimental Features**

**Breeze**

- The Breeze is a cunning, hostile mob that can spawn via Trial Spawner in some rooms within Trial Chambers
- The Breeze moves primarily by leaping around a target, sometimes jumping quite long distances
- An aggressive adversary, the Breeze shoots volatile wind energy in the form of wind charge projectiles at its target
- Wind charges deal a small amount of damage when colliding directly with an entity
- After colliding with an entity or a block, wind charge projectiles produce a wind burst, which knocks back entities in the area by several blocks
- Wind bursts also have the effect of 'activating' certain blocks:
  - Non-Iron Doors and Trapdoors are flipped
  - Fence Gates are flipped
  - Buttons are pressed
  - Levers are flipped
  - Bells are rung and swung
  - Lit Candles (both standalone and on cake) are extinguished
- Wind bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal

**Trial Spawner**

- Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion and can have variable levels of challenge in multiplayer
- The challenge level will increase for each new player a Trial Spawner notices nearby
  - Challenge level will not decrease until it is reset during a Trial Spawner's cooldown
- Unlike normal spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level
  - It can only spawn a mob at positions that are within line of sight
  - It can spawn a mob regardless of any light level requirement the mob has
  - Spawned mobs are persistent
- Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level
  - After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes during which it will no longer spawn mobs
- Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers
- Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch
- When placed in Creative, Trial Spawners have no mob type set by default
  - The mob type can be set by interacting with it while holding a Spawn Egg
- Creative and Spectator players cannot be detected or noticed by Trial Spawners

**Trial Chambers**

- Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges during the mid-game
  - Trial Chambers are made out of a variety of Copper and Tuff blocks and can be found in different sizes from large to small
  - Trial Chambers are a relatively common find throughout the Deepslate layer of the underground
- The layout of each Trial Chamber is procedurally generated, and can include traps, reward chests and a variety of combat spaces
  - Supply chests can be found between different rooms, and give you blocks and items which help you navigate your trials
  - Reward chests are guarded by challenges in each room, and can be a source of enchanted books and equipment
  - The loot found in reward chests are still being iterated, and are absolutely not final
- Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:
  - Melee
    - Zombie
    - Husk
    - Slime
  - Small Melee
    - Spider
    - Cave Spider
    - Baby Zombie
    - Silverfish
  - Ranged
    - Skeleton
    - Stray
  - Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber
    - For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons
    - The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes

**Trial Key**

- An item that can only be obtained from Trial Spawners
- Trial Keys do not currently have any functionality

**Armadillo**

- Added the Armadillo
- The Armadillo is a neutral mob
- Drops Armadillo Scutes periodically
- Drops Armadillo Scutes when brushed
- Spawns in Savannas
- Favorite food is Spider Eyes
- When an Armadillo detects a threat, it rolls up
  - Threats are:
    - Players who are sprinting
    - Players on a mount or in a vehicle
    - Undead mobs
  - It does not roll up if it is fleeing, in water, in the air, or if being led
  - When an Armadillo is rolled up it does not walk, cannot eat, and will not be tempted by food
  - It continues to scan for threats, and if there are no threats detected for 3 seconds, it will unroll

**Armadillo Scutes**

- Can be used to craft Wolf Armor
- Dropped by Armadillos
- Dispensers can be used to brush Armadillo Scutes off Armadillos

**Wolf Armor**

- Using Wolf Armor on an adult tamed Wolf will equip the armor on the Wolf
  - Only a Wolf's owner can put Wolf Armor on their tamed Wolf, and with this in mind, Dispensers cannot put Wolf Armor on Wolves
- Using Shears on a Wolf that is wearing armor will make it drop the armor
  - Only a Wolf's owner can shear a Wolf Armor from it, and with this in mind, Dispensers cannot remove Wolf Armor from Wolves
- Wolf Armor gives the same protection as Diamond Horse Armor
- If a Wolf dies while wearing armor, it will drop the armor  
    

**Fixes and Changes**

**Performance / Stability**

- Fixed a variety of crashes that could occur during gameplay
- Fixed a rare crash that could occur with the “Seven Seas” achievement
- Fixed a crash that could occur when players placed or destroyed any block and then selected Save & Quit with Ray Tracing enabled
- Fixed a crash that could occur in the Play menu whilst looking at Realms
- Fixed a bug that could cause infinite loading while joining a Realm

**General**

- Added more informative error messaging in case world exports fail due to external OS issues ([MCPE-41898](https://bugs.mojang.com/browse/MCPE-41898))
- Improved delay between 100% loaded and when the main menu appears on console platforms
- The "You Need A Mint" achievement can now only be unlocked by collecting Dragon's Breath ([MCPE-177409](https://bugs.mojang.com/browse/MCPE-177409))

**Gameplay**

- Fixed certain cases that caused players to take unexpected fall damage when performing interactions at specific heights like 62 ([MCPE-168518](https://bugs.mojang.com/browse/MCPE-168518))
- Reintroduced a fix for players sometimes taking unexpected fall damage while building blocks while standing on them ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140))
- Fixed some cases where players could take unexpected fall damage near ledges that they were visibly not falling off of ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140))
- Fixed the issue that prevented the inventory from being navigated when using only a keyboard on mobile
- Fixed the issue prevented stack splitting from being used when using a keyboard in touch mode
- Fixed an issue that could inflict unexpected fall damage in certain cases when building blocks while moving ([MCPE-120140](https://bugs.mojang.com/browse/MCPE-120140), [MCPE-175791](https://bugs.mojang.com/browse/MCPE-175791))
- Players no longer fall through the block they stand on when switching to Spectator Mode and back ([MCPE-170522](https://bugs.mojang.com/browse/MCPE-170522))
- Players are no longer slowed down if they touch the ground while flying in Creative mode ([MCPE-176365](https://bugs.mojang.com/browse/MCPE-176365))
- If the game is closed while changing dimensions, players will no longer be placed in unexpected positions when re-entering the world ([MCPE-173386](https://bugs.mojang.com/browse/MCPE-173386))

**Mobs**

- Horses, Donkeys, and Mules now take fall damage when controlled by a player, except for worlds targeting base game versions before 1.20.60 ([MCPE-107031](https://bugs.mojang.com/browse/MCPE-107031))
- Fixed an issue that made Boats clip through blocks when placed
- Fixed some Villagers not having their skins match their professions ([MCPE-105457](https://bugs.mojang.com/browse/MCPE-105457))
- The scattering of Experience Orbs released while fishing has been reduced ([MCPE-170540](https://bugs.mojang.com/browse/MCPE-170540))
- Experience Orbs no longer collide with mobs ([MCPE-87711](https://bugs.mojang.com/browse/MCPE-87711))
- Zoglins can no longer spawn in Peaceful difficulty and will despawn if the difficulty is switched to Peaceful ([MCPE-79480](https://bugs.mojang.com/browse/MCPE-79480))
- Bees no longer take damage when moving through Sweet Berry Bushes ([MCPE-114689](https://bugs.mojang.com/browse/MCPE-114689))
- Wolves can now spawn on both Snow and Top Snow within Grove biomes ([MCPE-147656](https://bugs.mojang.com/browse/MCPE-147656))

**Blocks**

- Container blocks triggered with Redstone (e.g. Hopper, Dispenser) can now be interacted with consistently when powered by a fast Redstone clock
- Frosted Ice blocks no longer leave water in the world when mined with a Silk Touch tool
- Turtle Egg, Frogspawn, Coral, and Coral Fan no longer spawn double the particles when mined
- Beehive and Bee Nest can no longer be Silk Touched by an Enchanted Book with Silk Touch
- Destroying a Bed through the bottom block now properly clears the spawn point
- Ice, Packed Ice, Frosted Ice and Top Snow now send vibrations when mined
- Pistons pushing, pulling, or destroying blocks no longer risk teleporting surrounding players towards the world's origin ([MCPE-175206](https://bugs.mojang.com/browse/MCPE-175206))
- Villagers who were mistakenly assigned to the same Bed or workstation as others will now actively seek out a new Bed or workstation ([MCPE-176528](https://bugs.mojang.com/browse/MCPE-176528))
- Pufferfish no longer inflate and deflate repeatedly when a player is at a specific distance from them
- Mobs that have partial blocks (e.g. Trapdoors, Slabs, etc.) specified as part of their list of blocks to avoid in their Navigation Component should now avoid them properly
- The limitations on which blocks can be replaced by Dark Oak and Acacia trees now also apply to their branches, not just their trunks ([MCPE-177484](https://bugs.mojang.com/browse/MCPE-177484))
- Top Snow placed at generation time now also covers Tall Grass and flowers ([MCPE-142321](https://bugs.mojang.com/browse/MCPE-142321))
- Wither Roses now damage mobs every 0.5 seconds, instead of every 2 seconds ([MCPE-55878](https://bugs.mojang.com/browse/MCPE-55878))
- Containers being cloned no longer keep their container screens open or cause crashes
- Fixed pixel shading on the Double Chest and Double Trapped Chest lids ([MCPE-169495](https://bugs.mojang.com/browse/MCPE-169495))

**Items**

- Fixed issue where eating an Apple would not slow down player movement ([MCPE-176556](https://bugs.mojang.com/browse/MCPE-176556))
- Renamed "Scute" to "Turtle Scute"
- Players can now consume Suspicious Stew even when their hunger bar is full ([MCPE-122491](https://bugs.mojang.com/browse/MCPE-122491))
- Banner items of identical colors now consistently stack together, whether or not they have previously been placed in the world as blocks ([MCPE-43391](https://bugs.mojang.com/browse/MCPE-43391))

**Touch Controls**

- Fixed a bug where the hotbar disappeared when exiting out of the customize touch controls screen with a non-touch controller input

**Graphical**

- Fixed incorrect block lighting after exiting water with the "Improved Input Response" option enabled ([MCPE-175727](https://bugs.mojang.com/browse/MCPE-175727))

**User Interface**

- The loading screen now displays three categories of tips based on player progression
- Added an unread post count indicator to the Realms Feed button on the Play screen and slots screen
- A bug making the "technical details" button on resource packs not leading to the technical details screen has been fixed
- Fixed a bug where certain chat messages would briefly be incorrectly shown on the new death screen
- In horizontal split screen, the second player can now navigate to the profile screen and both players can now see each others' character changes
- Fixed a bug that kept the previewed item on the paper doll even after navigating back using the sidebar in Character Creator
- Fixed Beacon UI buttons going outside the window on smaller resolutions ([MCPE-173649](https://bugs.mojang.com/browse/MCPE-173649))
- Items from the inventory have the durability bar adjusted so it matches the one from the hotbar ([MCPE-128532](https://bugs.mojang.com/browse/MCPE-128532))
- Adjusted cost text in the Pocket Anvil UI to match the classic version ([MCPE-101740](https://bugs.mojang.com/browse/MCPE-101740))
- Updated the information about Conduits in the Encyclopedia ([MCPE-65038](https://bugs.mojang.com/browse/MCPE-65038))
- Added Netherite as a block type in the Encyclopedia’s Beacon tab ([MCPE-175929](https://bugs.mojang.com/browse/MCPE-175929))
- Last highlighted button will not get pressed when the window regains focus anymore ([MCPE-170377](https://bugs.mojang.com/browse/MCPE-170377))
- Not enough storage space on Nintendo Switch now has a clearer message about the platform only allowing for 2GB of storage per user account ([MCPE-36670](https://bugs.mojang.com/browse/MCPE-36670))  
    

**Technical Updates**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.20.60 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddonPacks)

**General**

- Decorated Pots now support the use of loot tables
- Renamed *json*to *water_splash_manual.json* in *resource_packs\vanilla\particles* ([MCPE-176784](https://bugs.mojang.com/browse/MCPE-176784))
- Require *block_id* for each block in the *StartGamePacket* blockProperties
- Send "material" for vanilla data-driven blocks in the StartGamePacket blockProperties. "block_id" is also moved to the "vanilla_block_data" object
- Containers being cloned over no longer keep their container screens open and no longer cause crashes
- Changing the *brightness_gamma* value for blocks now darkens the block correctly ([MCPE-167836](https://bugs.mojang.com/browse/MCPE-167836))
- Added a "drop_item_slot" field to the "interact" component, which allows to specify an inventory slot to remove and drop items from
- "behavior.breed" now interrupts navigation on stop for content using engine version 1.20.60 or higher
- Updated listed values for the Vanilla "orientation" block state in documentation to no longer be boolean values

**Commands**

- */me* */say* */title* */tell*
  - Reduced max length for output message to 512 characters
- */kill*
  - Reduced max length for reason message to 512 characters

**Add-Ons and Script Engine**

- Added a *Project Through Liquid*property to the 3D Block Cursor
- Added a *CursorPropertiesChangeAfterEvent* to notify Editor script when the cursor properties are changed
- Wandering Traders can now correctly display custom entity spawn eggs in their trade menus ([MCPE-170184](https://bugs.mojang.com/browse/MCPE-170184))
- The "minecraft:geometry.full_block" identifier for the "minecraft:geometry" block component has been added
  - The "minecraft:geometry.full_block" identifier provides a centered 1x1x1 cube geometry
  - When combined with a *material_instances* component with "render_layer": "opaque", it enables rendering-only capabilities previously included in the "minecraft:unit_cube" component including:
    - Occludes both vanilla and custom neighboring full blocks
    - Culls faces that neighbor vanilla and custom neighboring full blocks to improve rendering performance
  - Added content error logging to help creators identify content that hits or exceeds the state bit/permutation count per block ([MCPE-177045](https://bugs.mojang.com/browse/MCPE-177045))

**Biomes**

- Biome JSON files no longer support inheriting fields from other Biome JSON files. If this affects any content those files should be updated by manually copying the desired JSON text
- Biome tags in JSON files are now specified under a "minecraft:tags" component, in a "tags" array, rather than as loose JSON objects, for files with a format_version of *1.20.60* or higher

**Blocks**

- Added the ability for data-driven blocks to remove faces in the geometry when abutting a full and opaque block. A new field has been added to the Block Geometry Component, which references a new Culling .json file (found in the resource pack block_culling directory) that sets up culling rules for the tessellated geometry

**Items**

- Unrecognized fields in component item JSON will now give a warning to the content log in format versions *1.20.60* and higher

**Components**

- The "entity_sensor" component now supports multiple "subsensors":
- "event", "require_all", "minimum_count", "maximum_count", "range" and "event_filter" are now individually configurable fields of each subsensor
- Subsensors also have a new "cooldown" field, which defines how often each subsensor should sense for entities
- All these changes require a "format_version" of *1.20.60* or higher
- The "interact" component now supports the additional "entity_act" value for the "vibration" field

**Entity Components**

- Entity event response *run_command* has been renamed to *queue_command* and has been released out of experimental. Commands run via *queue_command* may be deferred until the next tick. If the entity is removed before the command is run, the command will not execute. Content using *run_command* under experimental will still work for now but the experimental feature is now considered deprecated
- Added an "interact_filters" field to the "ageable" component, which allows to specify conditions on when the actor can be fed
- "behavior.follow_parent" now interrupts navigation on stop for content using engine version *1.20.60* or higher

**Entity Filters**

- Added new entity filter "is_panicking", which checks if the entity is executing "behavior.panic"
- Added new entity filter "is_sprinting", which checks if the entity is sprinting

**Entity Event Responses**

- Added the "emit_vibration" entity event response, which allows the entity to emit a vibration having the entity itself as its source
  - The "vibration" field allows to specify the vibration to be emitted
  - The allowed values are "shear", "entity_act", and "entity_interact"

**Molang**

- Improved the context of content logs when an evaluated Molang expressions results in an error
- Released Molang queries from experimental
  - *is_cooldown_type*
  - *cooldown_time*
  - *cooldown_time_remaining*
  - *relative_block_has_any_tag*
  - *relative_block_has_all_tags*
  - *block_neighbor_has_any_tag*
  - *block_neighbor_has_all_tags*
  - *block_has_any_tag*
  - *block_has_all_tags*
  - *bone_orientation_trs*
  - *bone_orientation_matrix*
- Added content errors that state *remaining_durability*and *query.max_durability* are only to be used with Item contexts

**API**

- Added Biome Registry biome names and *StructureFeatureType* enum to vanilla metadata generation
- Made the display name parameter optional in *Scoreboard addObjective*
- Released *DataDrivenEntityTriggerAfterEvent* from *beta* to *1.8.0*
- Released *DataDrivenEntityTriggerAfterEventSignal* from *beta* to *1.8.0*
- Released *DataDrivenEntityTriggerAfterEventSignalOptions* from *beta* to *1.8.0*
- Released *DefinitionModifier* from *beta* to *1.8.0*
- Released *dataDrivenEntityTrigger* from *beta* to *1.8.0*
- Moved *EffectAddBeforeEvent*from *beta* to *1.8.0*
- Moved *EffectAddAfterEvent*from *beta* to *1.8.0*
- Moved *EffectAddAfterEvent*from *beta* to *1.8.0*
- *M*oved *getTags*from *beta* to *1.8.0*
- Moved *hasTag*from *beta* to *1.8.0*
- *RGBA* interface now inherits from *RGB*
- Changed *itemStack*in *ItemReleaseUseAfterEvent* to be optional
- Released *DataDrivenEntityTriggerAfterEvent* from *beta* to *1.8.0*
- Released *DataDrivenEntityTriggerAfterEventSignal* from *beta* to *1.8.0*
- Released *DataDrivenEntityTriggerAfterEventSignalOptions* from *beta* to *1.8.0*
- Released *DefinitionModifier* from *beta* to *1.8.0*
- Released *dataDrivenEntityTriggerEvent* from *beta* to *1.8.0*
- Improved error messages for "Unsupported or out of bounds value." errors to include the bounds
- Types
  - Moved *BlockType*from *beta* to *1.8.0*
  - Moved *FluidType*from *beta* to *1.8.0*
- Changed "Unsupported or out of bounds value.." errors to use *ArgumentOutOfBoundsError* Error type
- *setWeather* method argument duration now uses *ArgumentOutOfBoundsError* Error type  
    

**Experimental Technical Updates**

**Commands**

- The health bar of mounted rideable mobs is now properly displayed ([MCPE-177696](https://bugs.mojang.com/browse/MCPE-177696))
- Execute command now fails when comparing unloaded blocks ([MCPE-177195](https://bugs.mojang.com/browse/MCPE-177195))
- Added a new command that will hide and reset HUD elements visibility
  - /hud hide \<hud element\>
  - /hud reset \<hud element\>
  - The HUD elements available are:
    - paperdoll
    - armor
    - tooltips
    - touch_controls
    - crosshair
    - hotbar
    - health
    - progress_bar
    - hunger
    - air_bubbles
    - horse_health
    - all
  - To use the command, turn on the Upcoming Creator Features toggle

**API**

- PlayerPlaceBlockBeforeEvent
  - Removed *itemStack: ItemStack*from event
  - Added *readonly permutationBeingPlaced: BlockPermutation*to event
  - Updating *createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions)*to return a boolean. True if the explosion is successful and false if the explosion is unsuccessful or is cancelled
- Class Player
- Added method *spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;*
- Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error
- Updated *SimulatedPlayer* so it can continuously build
- Updated *SimulatedPlayer* so it can Move and look in different directions
- ChatSendAfter & ChatSendBeforeEvent
  - Changed *message* and *sender* to read-only properties
  - Removed *setTargets*, *getTargets*, *sendToTargets*and replaced with an optional player list property *targets*
- Class ItemDurabilityComponent
  - Renamed *unbreaking* to *unbreakingEnchantmentLevel*
  - Renamed *getDamageRange* to *getDamageChanceRange*
- EntityTypes
  - Changed *getAll*return type from *EntityTypeIterator* to *EntityType\[\]*
- EntityEquippableComponent
  - Fixed an issue where functions *getEquipment* and *getEquipmentSlot* could not be called within "before" event handlers
- Fixed a bug where an ItemStack could not be stacked after clearing its lore
- Added method *eatItem(itemStack: ItemStack): void;*
- BlockSignComponent
  - Changed signature of function *setWaxed*to *setWaxed(waxed: boolean)*
  - Removed event/property *pistonActivate*
- Added enum *BlockPistonState export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting" }*
- Class BlockPistonComponent
  - Removed property *isExpanded*
  - Removed property *isExpanding*
  - Removed property *isRetracted*
  - Removed property *isRetracting*
  - Added property *readonly state: BlockPistonState*
  - Changed function *getAttachedBlocks*to return type *Block\[\]*
  - Added function *getAttachedBlocksLocations(): Vector3\[\]*
- Removed class *PistonActivateBeforeEvent*
- Removed class *PistonActivateBeforeEventSignal*
- Moved *NavigationResult*from *@minecraft/server* to *@minecraft/server-gametest*
- Updated function *addEffect* to return the added effect (or undefined if it failed)
  - This change is in beta and does not affect the currently released versions of this function
- Added item dynamic properties
  - Added function *clearDynamicProperties(): void* - Removes all dynamic properties from the item stack
  - Added function *getDynamicProperty(identifier: string): boolean \| number \| string \| Vector3 \| undefined* - Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined
  - Added function *getDynamicPropertyIds(): string\[\]* - Returns an array of all dynamic property identifiers on the item stack
  - Added function *getDynamicPropertyTotalByteCount(): number* - Returns the total byte count of all dynamic properties on the item stack
  - Added function *setDynamicProperty(identifier: string, value?: boolean \| number \| string \| Vector3): void* - Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed
  - Added function *clearDynamicProperties(): void* - Removes all dynamic properties from the item stack
  - Added function *getDynamicProperty(identifier: string): boolean \| number \| string \| Vector3 \| undefined* - Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined
  - Added function *getDynamicPropertyIds(): string\[\]* - Returns an array of all dynamic property identifiers on the item stack
  - Added function *getDynamicPropertyTotalByteCount(): number* - Returns the total byte count of all dynamic properties on the item stack
  - Added function *setDynamicProperty(identifier: string, value?: boolean \| number \| string \| Vector3): void* - Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed
- Added class *EntityProjectileComponent*. This component is used to shoot a projectile entity and modify its properties
- Added interface *ProjectileShootOptions*. This interface is used with function *shoot*to optionally modify the accuracy of the projectile when shot
- *PropertyOutOfBoundsError*
  - Added a new *PropertyOutOfBoundsError* that throws when a property that is bounded is set out of bounds
- *ContainerSlot* APIs now throw an *InvalidContainerSlotError* if the container slot is invalid, or if a property is set on an empty slot
- Property *typeId* no longer returns undefined for empty slots, but instead throws an *InvalidContainerSlotError*
- Added function *hasItem* - Returns whether the slot contains an item
- Added function *getCanPlaceOn* - Returns an array of block identifiers that the item can be placed on
- Added function *getCanDestroy* - Returns an array of block identifiers that the item can destroy when used
- *runJob()* and *system.clearJob()*
  - Added *runJob* and *clearJob* for optimizing long running tasks using JavaScript generators. *runJob* takes a generator function and returns a *jobId*. See documentation for usage examples
- *@minecraft/server.BlockPermutation*
  - Moved *getState* and *withStates* APIs from *beta* to *stable*

**Scripting**

- Fixed issue where *ActionFormData* buttons could not be clicked if there were more than 255 buttons in the form
- The "minecraft:unit_cube" block component has been deprecated. Using it in content marked 1.20.60 and beyond will provide a content error
  - Using content marked prior to 1.20.60 will have their "minecraft:unit_cube" block component upgraded to a "minecraft:geometry" block component with a "minecraft:geometry.full_block" identifier, but will maintain backwards compatibility with all behaviors
- Added *ScriptBiomeTypes*and *ScriptBiomeType* to allow Scripting API to enumerate the BiomeRegistry
- Added a *findClosestBiome*function to *Dimension* to find the closest biome of a specified type, to a given position in the world
- The block component "minecraft:random_ticking" is now functional again

**Molang**

- Changed cooldown query slot IDs to be required for container slots with more than one index, logging content errors if not provided
  - *cooldown_time(slotName,slotId)*
  - *cooldown_time_remaining(slotName,slotId)*
  - *is_cooldown_type(cooldownName,slotName,slotId)*
