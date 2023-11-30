---
title: Minecraft - 1.19.60 (Bedrock)
date: 2023-01-31T17:57:30Z
updated: 2023-02-08T09:29:15Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/12708273043341-Minecraft-1-19-60-Bedrock-
---

**Posted: **February 7, 2023

It's time for a new update to Minecraft Bedrock Edition! This time, we're focusing on quality of life improvements with quite a few fixes to the game, including over 70 bugs reported by the community. There's also a nice amount of Vanilla parity tweaks and some new experimental features to test out! For the tech savvy players and creators, we have quite a few improvements on the technical side as well. Dive into the full changelog below for the full scoop and happy crafting!  
  

**Vanilla Parity:**

**Mobs**

- Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem, and Wither mobs, which can be obtained using commands
- Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg
- Vex hitboxes are now vertically centered with their models
- Vex and Allay now sit properly in Boats and Minecarts ([MCPE-164441](https://bugs.mojang.com/browse/MCPE-164441))
- Fixed Vex texture disparity between Bedrock and Java ([MCPE-164227](https://bugs.mojang.com/browse/MCPE-164227))
- Slimes and Magma Cubes no longer spawn in spaces that are 2 blocks tall or less ([MCPE-46540](https://bugs.mojang.com/browse/MCPE-46540))
- Glow Squid now emit particles when spawned outside of water
- Using a Saddle on a tamed Horse, Donkey, or Mule now results in it being equipped ([MCPE-83815](https://bugs.mojang.com/browse/MCPE-83815))
- Using Horse Armor on an unarmored, tamed Horse now results in it being equipped ([MCPE-163336](https://bugs.mojang.com/browse/MCPE-163336))
- Using a Carpet on a tamed Llama now results in it being equipped ([MCPE-163336](https://bugs.mojang.com/browse/MCPE-163336))
- Dispensers can now equip Saddles and Horse Armors to tamed Horses
- Dispensers can now equip Saddles and Chests to tamed Mules and Donkeys
- Dispensers can now equip Carpets and Chests to tamed Llamas
- Dispensers can now equip Saddles to Pigs and Striders
- Shears in a Dispenser now only shear one Sheep at a time
- Shears in a Dispenser can now shear Snow Golems and Mooshrooms
- The Wandering Trader no longer has a chance to offer duplicate Seed trades ([MCPE-161780](https://bugs.mojang.com/browse/MCPE-161780))
- Endermen, Skeletons, and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below) in the Nether ([MCPE-163701](https://bugs.mojang.com/browse/MCPE-163701))
- Updated the Skeleton/Zombie Horse's and Donkey/Mule's saddle and chest textures
- Villagers will now ensure that rain can pass through the block above them before launching Fireworks when celebrating after a raid victory ([MCPE-152386](https://bugs.mojang.com/browse/MCPE-152386))
- Axolotls no longer tick their dry out timer when unloaded ([MCPE-131041](https://bugs.mojang.com/browse/MCPE-131041))
- Husks can now fit in a two blocks high space and baby Husks in a one-high space ([MCPE-105369](https://bugs.mojang.com/browse/MCPE-105369))
- All mobs are now able to path through Wither Roses ([MCPE-159212](https://bugs.mojang.com/browse/MCPE-159212))

**Blocks**

- Crimson and Warped block sets now have a unique set of sounds
- Campfires do not set players and mobs on fire anymore, but still inflict damage ([MCPE-98931)](https://bugs.mojang.com/browse/MCPE-98931)
- Campfires do not destroy Minecarts and Boats anymore ([MCPE-109489](https://bugs.mojang.com/browse/MCPE-109489))
- Bamboo plant placement now behaves the same way as Java Edition; it will no longer grow by clicking on the side of a Bamboo plant with a Bamboo item in-hand ([MCPE-99587](https://bugs.mojang.com/browse/MCPE-99587))
- Bamboo sapling no longer replaces double plants when placed ([MCPE-99806](https://bugs.mojang.com/browse/MCPE-99806))
- Pumpkins and Melons can now grow on Mycelium and Moss blocks ([MCPE-125932](https://bugs.mojang.com/browse/MCPE-125932))
- The Sculk Shrieker block's shriek sound can now be heard at the longer distance of 32 blocks ([MCPE-163989](https://bugs.mojang.com/browse/MCPE-163989))
- Respawn Anchor no longer retains its charges if mined with Silk Touch or picked ([MCPE-145682](https://bugs.mojang.com/browse/MCPE-145682))
- Beacon effect particles are now transparent ([MCPE-17679](https://bugs.mojang.com/browse/MCPE-17679))
- Conduit effect particles are now transparent ([MCPE-93728](https://bugs.mojang.com/browse/MCPE-93728))
- Redstone Dust now emits a sound when placed on the ground ([MCPE-65423](https://bugs.mojang.com/browse/MCPE-65423))
- Wooden Doors, Iron Doors, Wooden Trapdoors, Iron Trapdoors and Fence Gates now use the same opening and closing sounds as Java Edition
- Updated Pressure Plates to have different sound pitches based on their behaviour to match Java Edition
- Added a unique click sound for Wooden Buttons to match Java Edition
- Changed Frogspawn map color to match Java Edition ([MCPE-159715](https://bugs.mojang.com/browse/MCPE-159715))
- Change Bed block map colors to match Java Edition ([MCPE-40709](https://bugs.mojang.com/browse/MCPE-40709))
- Changed various blocks’ Map colors to appear correctly match Java Edition ([MCPE-19228](https://bugs.mojang.com/browse/MCPE-19228))  
    

**Experimental Features:**

- In addition to experimental features added in [19.50](./Minecraft-1-19-50-Bedrock.md), several new experimental features are now playable from the upcoming 1.20 update!
- Enable the “Next Major Update” toggle in world settings to enable this content
- These features are a work in progress and are still in active development. The design and functionality of these features will likely change before they’re released
- **Please remember:** Worlds that have used experimental toggles will always be flagged as “Experimental”. We recommend keeping these experimental worlds as separate copies from your main saves. More information can be found in [this article](https://feedback.minecraft.net/hc/en-us/articles/4403610710797)

**Mob Heads on Note Blocks**

- When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone!

**Piglin Mob Head**

- Piglins will now drop their heads when killed by a charged Creeper!
- Placing the Piglin Head on a Note Block will play one of the Piglin's ambient sounds
- The Piglin Head will flap its ears when powered by Redstone on worn by a player!

**Bamboo**

- Added Block of Bamboo, which can be crafted from 9 Bamboo
- Added Stripped Block of Bamboo, which can be obtained by using an Axe on a Block of Bamboo
- Both Block of Bamboo and Stripped Block of Bamboo can be crafted into 2 Bamboo Planks  
    

**Fixes:**

**Stability and Performance**

- Fixed a potential crash when gliding through an End Gateway
- The game no longer crashes when killing an entity with invalid conditions, functions, or pools entries in its loot table ([MCPE-164623](https://bugs.mojang.com/browse/MCPE-164623))
- Fixed multiple crashes that could occur when players died while affected with Withering
- Fixed a crash on Xbox when the Edit World Button on the Select World Screen had quick successive selections
- Fixed a bug that caused players to desync from multiplayer games if they saved and quit after dying and rejoining a game ([MCPE-162630](https://bugs.mojang.com/browse/MCPE-162630))

**Gameplay**

- Fixed a bug causing players’ hitboxes and nameplates to be unaligned when rejoining a world after dying and returning to menu without respawning ([MCPE-162630](https://bugs.mojang.com/browse/MCPE-162630))
- Raids now trigger properly when the player with bad omen enters a village while riding/gliding ([MCPE-152774](https://bugs.mojang.com/browse/MCPE-152774))
- Fixed an issue where players could fall out of moving blocks when pushed upwards ([MCPE-163725](https://bugs.mojang.com/browse/MCPE-163725))
- Fixed an issue where night was being incorrectly skipped if the last player in a game was in the Nether or End
- A player entering the Nether or End will now trigger a night skip if all players left in Overworld are sleeping
- Fixed a bug where dropping an item and sleeping at the same time would cause the server to hang ([MCPE-162989](https://bugs.mojang.com/browse/MCPE-162989))
- Orbs spawned within the same block will merge and combine XP values until orb limit is reached

**Mobs**

- Entities no longer disappear when sent through End Gateways ([MCPE-164985](https://bugs.mojang.com/browse/MCPE-164985))
- Ravagers are now able to attack when standing on various partial blocks like Mud ([MCPE-162483](https://bugs.mojang.com/browse/MCPE-162483))
- Vex now use a separate charging animation when empty-handed ([MCPE-164490](https://bugs.mojang.com/browse/MCPE-164490))
- Vex now render offhand items
- Fixed the Vex being incorrectly lit in dark surroundings
- Players can no longer see through terrain by riding a Horse, Mule, or Donkey at the edge of a 2-block-tall space
- Villagers will now take damage from lightning bolts on Peaceful difficulty, like other mobs
- Tropical Fish no longer use surface density limit when spawning underground ([MCPE-157485](https://bugs.mojang.com/browse/MCPE-157485))
- Evokers now play a ‘sit’ animation when riding a mount or vehicle ([MCPE-43778](https://bugs.mojang.com/browse/MCPE-43778))

**Blocks**

- Entities no longer get pushed out by Doors activated by Redstone signals ([MCPE-158971](https://bugs.mojang.com/browse/MCPE-158971))
- Using the Pick Block functionality on Fern and Grass now selects the correct item in the inventory instead of the first one between them
- Using the Pick Block functionality on Acacia Leaves and Dark Oak Leaves now selects the correct item in the inventory instead of the first one between them
- Hoppers no longer fail to collect items when trying to pull in multiple item types ([MCPE-38963](https://bugs.mojang.com/browse/MCPE-38963))
- Prevent Pistons from re-creating moving blocks that were destroyed mid-move
- Blocks that require supporting blocks now appear properly on a Map when placed on partial blocks or above air ([MCPE-159713](https://bugs.mojang.com/browse/MCPE-159713))
- Scaffolding now displays particles and produces vibrations when the block under it is destroyed ([MCPE-163738](https://bugs.mojang.com/browse/MCPE-163738))
- Stone Walls are now placed correctly in a line when continuously placing them
- Levers now produce the same sound effect as Stone Buttons ([MCPE-163335](https://bugs.mojang.com/browse/MCPE-163335))

**Items**

- Fixed item degradation when rapidly attacking mobs ([MCPE-157150](https://bugs.mojang.com/browse/MCPE-157150))
- Fixed an issue that prevented some Tripwire Hooks from being valid trades when trading with a Fletcher Villager ([MCPE-108195](https://bugs.mojang.com/browse/MCPE-108195))
- Ender Pearls will no longer teleport a sleeping player ([MCPE-161189](https://bugs.mojang.com/browse/MCPE-161189))

**Touch Controls**

- Fixed a bug that prevented items from moving indirectly between Creative Mode inventory and players' extended inventory in Pocket UI ([MCPE-164479](https://bugs.mojang.com/browse/MCPE-164479))
- Fixed a problem where the touch d-pad's forward button was not functional when holding the strafe left/right button ([MCPE-155199](https://bugs.mojang.com/browse/MCPE-155199))
- The inventory tab will now reset its hover state if the player uses a second input method and hover on another tab
- Fixed a bug where players couldn’t interact with toast notifications in Joystick and Crosshair touch controls
- The pressing direction of the build button in touch controls will now be visually clicked down instead of up when being pressed ([MCPE-162026](https://bugs.mojang.com/browse/MCPE-162026))
- Fixed an issue where players could not remove items by clicking on the inventory items in Classic profile ([MCPE-162124](https://bugs.mojang.com/browse/MCPE-162124))
- The touch focus circle has been reactivated with the new touch controls (not in Crosshair mode)
- Resolved an issue that pressing the inventory button could interact with the world instead of opening the inventory on some devices ([MCPE-154499](https://bugs.mojang.com/browse/MCPE-154499))
- Fixed an issue that players couldn’t scroll the inventory screen when one row was appearing off-screen ([MCPE-159870](https://bugs.mojang.com/browse/MCPE-159870))
- Added several levels of intervals for repeat crafting when holding on the crafted items
- Removed the camera movement delay when the player swiped from the attack and build buttons in crosshair mode
- Fixed inventory screen touch interactions not working properly on Nintendo Switch
- The correct tip for dismounting Boats and Minecarts now appears when not using classic touch controls
- Toast notifications can now be swiped away on touch devices in-game
- Touch Control settings section is no longer visible on Xbox

**Graphical**

- Highlight selection no longer highlights the entire card for transparent objects like saplings
- V-sync settings are now properly configured in options (non-ARM devices) ([MCPE-110006](https://bugs.mojang.com/browse/MCPE-110006))

**Accessibility**

- The new Create New World screen is now available for text to speech users. We'd be happy to receive your feedback on it here: [aka.ms/cnwnarration](https://aka.ms/cnwnarration)
- Fixed text to speech enumeration for world on the Play screen, select language in settings screen, select controls in settings screen, and friends in invite friends screen when there are a large number of items in the list

**User Interface**

- Fixed a bug where the mouse cursor was visible and is no longer usable to control the player camera on the HUD screen after exiting the menu screen with a touch while moving the mouse around
- Fixed text being slightly off-centered to the left for Furnace, Blast Furnace, and Smoker screens ([MCPE-151597](https://bugs.mojang.com/browse/MCPE-151597))
- Feedback button on the main menu will now prompt the player with a modal before redirecting to their web browser
- Fixed an issue where text fields would not regain focus after being deselected with a gamepad ([MCPE-153842](https://bugs.mojang.com/browse/MCPE-153842))
- Text fields are no longer deselected with second click on them once they are selected
- Fixed an issue where user interface elements on the Achievements screen and the new Create New World screen didn't properly trigger sound effects ([MCPE-163722](https://bugs.mojang.com/browse/MCPE-163722))
- Added a missing error screen that displays when attempting to create a world with too little available disk space
- Fixed the quality of the Mojang Studios logo loading screen on Xbox ([MCPE-163036](https://bugs.mojang.com/browse/MCPE-163036))
- Removed extra space around the "open chat" message that appears when entering a world ([MCPE-162700](https://bugs.mojang.com/browse/MCPE-162700))
- Fixed an issue that caused the Wandering Trader's trade window to show a profession ([MCPE-162576](https://bugs.mojang.com/browse/MCPE-162576))
- Resource packs will now be applied to the world after navigating to another screen before creation
- Fixed an issue where some resource packs prompted an error after being downloaded

**Android**

- The screen will no longer automatically turn off while a world is loaded when playing on Android devices
- Updated splash screen to be consistent between Android 12+ devices and older devices ([MCPE-151413](https://bugs.mojang.com/browse/MCPE-151413))
- Fixed controller input sometimes getting stuck when a controller was disconnected on Android devices
- The UI no longer flickers on Android when the on-screen keyboard appears ([MCPE-142356](https://bugs.mojang.com/browse/MCPE-142356))

**Realms**

- New Realm button on the two player Realm info screen now activates correctly
- Added a highlight to Realms terms and agreements checkbox when the UI is hovered
- Redirect players back to the world selection screen if they choose to leave on the Download Resource Packs prompt
- Fixed a bug where the option "Require players to accept resource packs to join" did not reflect the actual state ([REALMS-10799](https://bugs.mojang.com/browse/REALMS-10799))
- Fixed erroneously showing previously applied packs on Realms settings screen after a Realm reset
- Updated error message for failing to join an owned Realms server that is out of date. New messaging now describes the issue and provides steps to resolve issue  
    

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for1.19.60 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks  
  ](https://aka.ms/MCAddOnPacks)

**Performance / Stability**

- Fixed a crash that could occur when teleporting players to other dimensions using commands ([MCPE-164940](https://bugs.mojang.com/browse/MCPE-164940))
- Fixed a crash that could occur when using the “instant_despawn” component
- Fixed a crash that could occur when loading actors

**General**

- Added a content error for the condition that custom blocks with permutations or properties fail to load in non-experimental worlds for JSON formats 1.19.60 and onwards
- Ensure Block Permutation Conditions cannot have side effects (i.e. 'math.random', 'math.random_integer', and variable assignment)
- Released *BlockSelectionBoxComponent* outside of experimental toggle in json formats 1.19.60 and higher
- Released *BlockDisplayNameComponent* outside of experimental toggle in json formats 1.19.60 and higher
- Ensure Block Permutation Conditions can only use *'query.block_property'* Molang Query
- Fixed albedo color arrays in texture sets for custom blocks ([MCPE-163622](https://bugs.mojang.com/browse/MCPE-163622))

**Recipes**

- Renamed and converted all Smithing Table recipes to use the newly introduced “minecraft:recipe_smithing_transform” recipe format

**Particles**

- Updated particles documentation with descriptions of new materials and included example particles in the example resource pack

**Commands**

- Executing the ‘/say’ command via the new execute syntax now displays the entity’s name that produced the message ([MCPE-161450](https://bugs.mojang.com/browse/MCPE-161450))
- When teleporting a group of leashed mobs using "/tp @e" a far enough distance away to unleash them, all mobs now get properly unleashed ([MCPE-159617](https://bugs.mojang.com/browse/MCPE-159617))
- Fixed a bug causing players to not wake up when teleported while sleeping ([MCPE-162346](https://bugs.mojang.com/browse/MCPE-162346))
- Running ‘/execute if\|unless score’ on a player that doesn’t have a score set will now return false ([MCPE-156279](https://bugs.mojang.com/browse/MCPE-156279))
- ‘/execute if\|unless score’ no longer accepts selectors that can return multiple entities (ie. @e, @a)

**Commands (Experimental)**

- Fixed a bug where the @initiator selector would not work with the Upcoming Creator Features experiment enabled ([MCPE-164727](https://bugs.mojang.com/browse/MCPE-164727))

**Components**

- Released *BlockPlacementFilterComponent* outside of experimental toggle in JSON formats 1.19.60 and higher
- Expanded "minecraft:shooter" component to define multiple projectiles that can specify different projectile definitions and condition filters
- Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack
- Projectiles that teleport their owner will no longer do so while their owner is sleeping ([MCPE-161189](https://bugs.mojang.com/browse/MCPE-161189))
- Added "inventory" as a possible "domain" value for the "has_equipment" filter, which allows to check for items stored in the actor's inventory
- Added an "equip_item_slot" field to the "interact" component
  - If set, an item held by the player will be equipped to the specified slot upon successful interaction
  - If an item is already present in the specified slot, it will be moved to the player's inventory
  - Equipping an item removes it from the player's inventory, unless the player is in Creative Mode
- Players now respond correctly to speed changes using the *minecraft:movement* component

**Actor Filters**

- Created new actor filters "on_fire", "on_hot_block", "target_distance", and "actor_health"

**AI Goals**

- The "celebrate_survive" AI behavior will now consider the highest rain passable block in addition to sky visibility before firing Fireworks
- The "move_outdoors" AI behavior will now consider the highest rain passable block in addition to sky visibility when searching for a place to consider as being outdoors
- Exposed new data parameters for the "trade_with_player" AI behavior to specify such things as the conditions that need to be met for the goal to start and the max distance the mob can be from its trading player before exiting the goal

**Particle Effects**

- Fixed a bug causing particles with collision and "expire_on_contact" to not expire when collided
- Added support for mixed color blending on particle effects

**Molang**

- Added new Molang *query.is_local_player* to allow detection of the current player
- Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.19.60 or higher

**API (Experimental)**

**Entities/Players/SimulatedPlayer: Fire, levels, experience, and more**

- Entity
  - Added method *setOnFire(seconds: number, useEffects?: boolean = true): boolean)*which sets an entity on fire (if it is not in water or rain)
  - Added method *extinguishFire(useEffects?: boolean = true): void* which extinguishes the fire
  - If an entity is on fire, you can call *getComponent('minecraft:onfire')*on it, which returns an object of type *EntityOnFireComponent*, which has a property *onFireTicksRemaining*
  - Fixed a bug where *viewDirection*would return the direction from the previous tick
  - Fixed a bug where *getEntitiesFromViewDirection*would use the direction from the previous tick
  - Fixed a bug where *getBlockFromViewDirection*would use the direction from the previous tick
  - Fixed a bug where *headLocation*would return the location from the previous tick
  - Fixed a bug where the *getEffect* method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)
  - Added method *getEffects*which returns an array of all active effects on the entity
- EntityHealthComponent
  - Fixed a bug where health could be modified on dead entities ([MCPE-130687](https://bugs.mojang.com/browse/MCPE-130687))
- Player
  - Added function *addLevels(amount: number): number* - Adds/Removes level to/from the player and returns the current level of the player
  - Added function *addExperience(amount: number): number* - Adds/Removes experience to/from the player and returns the current experience of the player
  - Added function *resetLevel(): void* - Resets the level of the player
  - Added function *getTotalXp(): number* - Gets the total experience of the player
  - Added read-only property *level* - Gets the level of the player
  - Added read-only property *xpEarnedAtCurrentLevel* - Gets the experience earned at the current level of the player
  - Added read-only property *totalXpNeededForNextLevel* - Gets the total experience required for the current level of the player
- Simulated Player
  - Added property *isSprinting*- Used to get or set if the sprinting state of the simulated player is set to true
- Added function *respawn()*- Respawns the SimulatedPlayer if it's dead
- Added function *disconnect()*- Removes the SimulatedPlayer from the world

**Blocks & Redstone**

- Added function *getRedstonePower(): number*- Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined

**Fill Block APIs**

- Added function *dimension.fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation \| BlockType, options?: BlockFillOptions): number*
  - Fills an area between *begin* and *end* with block of type *block*. Returns number of blocks placed
- Added new interface *BlockFillOptions* with member *matchingBlock?: BlockPermutation \| BlockType*
  - Used with *fillBlocks* to apply additional options, such as only filling blocks matching *matchingBlock*

**Command to script message passing**

- Added the '/scriptevent' command as part of the Beta APIs experiment. This is what will trigger *events.scriptEventReceive* events (see below)
  - Usage: /scriptevent \<messsageId: string\> \[message: ???\]
  - messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my_scripts:spawn_sheep")
  - message is optional, with a max length of 256 characters
- events.scriptEventReceive
  - Added system event *events.scriptEventReceive*
  - Added read-only property *id: String-* The namespaced ID of the event
  - Added read-only property message: String- The content of the message the event was sent with
  - Added read-only property *sourceBlock: Block*- The command block that triggered/executed the command call if applicable, otherwise undefined
  - Added read-only property *sourceEntity: Entity*- The player/entity that executed the command call if applicable, otherwise undefined
  - Added read-only property *initiator: Entity*- The player that caused an NPC to execute the command call if applicable, otherwise undefined
  - Added read-only property *sourceType: MessageSourceType*- The type of source the event was triggered by
  - *subscribe()*can filter by valid namespace string using the *ScriptEventMessageFilterOptions* class
- ScriptEventMessageFilterOptions
  - Added *ScriptEventMessageFilterOptions* class
  - Added property *namespaces: string\[\]*- An array of namespaces to filter on

**Item Stacks**

- ContainerSlot
  - Added class *ContainerSlot*- Used to directly manipulate items stored within a container
  - Renamed entity property *viewVector*to *viewDirection* and now returns Vector3
  - Renamed entity function g*etEntitiesFromViewVector*to *getEntitiesFromViewDirection*
  - Renamed entity function *getBlockFromViewVector*to *getBlockFromViewDirection*
- Container
  - Added function *getSlot(slot: number): ContainerSlot*- Returns the slot at the given container slot index
  - Added function *clearItem(slot: number): void*- Clears the item at the given slot index
  - Added function *clearAll(): void*- Clears all items in the container
  - Made the *itemStack*argument of function *setItem* optional - If not provided, the slot is cleared
  - Added event *events.playerSpawn*- Fires when a player spawns in the world
  - Renamed event *events.entityCreate*to *world.events.entitySpawn*. This event no longer fires for players

**Refactored and Improved Player events**

- PlayerJoinEvent
  - Added read-only property *playerId*- The unique ID of the player that joined the world
  - Added read-only property *playerName*- The name of the player that joined the world
  - Removed property *player*
- PlayerLeaveEvent
  - Added read-only property *playerId*- The unique ID of the player that left the world

**Say/Tell/sendMessage APIs**

- Renamed *IRawMessage* to *RawMessage* for naming consistency
- RawMessage
  - Changed the signature of property withfrom *(string\[\] \| RawMessage)\[\]?*  to *(string\[\] \| RawMessage)?*

**Scoreboard get/set value APIs**

- Scoreboard
  - Added *setScore(ScoreboardObjective, ScoreboardIdentity, Number)*
  - Added *getScore(ScoreboardObjective, ScoreboardIdentity)*
- ScoreboardObjective
  - Added *setScore(ScoreboardIdentity, Number)*
  - Added *getScore(ScoreboardIdentity)*
  - Added *removeParticipant(ScoreboardIdentity)*
- ScoreboardIdentity
  - Added *setScore(ScoreboardObjective, Number)*
  - Added *getScore(ScoreboardObjective)*
  - Added *removeFromObjective(ScoreboardObjective)*

**EntityHurtEvent updates**

- Added read-only property *damageSource: EntityDamageSource* - Gets information about the damage source
- EntityDamageSource
  - Added property *cause: EntityDamageCause* - Gets the damage cause
  - Added property *damagingEntity?: Entity* - Gets the damaging Entity
  - Added property *damagingProjectile?: Entity* - Gets the damaging projectile Entity
  - Added function *applyDamage(amount: number, source?: EntityDamageSource): boolean* - Applies damage to the Entity and returns the result of the operation
