---
title: Minecraft - 1.20.10 (Bedrock)
date: 2023-07-06T17:15:13Z
updated: 2023-07-12T14:50:02Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/17381681401357-Minecraft-1-20-10-Bedrock-
---

**Posted:** July 11, 2023

A new Minecraft update is ready to play! Since releasing the Trails & Tales update, the team has been hard at work on even more improvements to the game. Here are just a few of the highlights:

-   Players can now sneak under 1.5 block gaps
-   Shovels are no longer needed to craft Boats
-   Many more actions now emit vibrations detected by Sculk Sensors
-   Fixes to over 50 community-reported issues

**NOTE:** This update will appear as version 1.20.11 on Xbox

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).

![patchnotes_r20u1.png](https://feedback.minecraft.net/hc/article_attachments/17381830429709){width="420" height="236"}

**Vanilla Parity**

**Short Sneaking**

-   Player's hitbox height now reduces to 1.5 blocks while sneaking
    -   Sneaking will automatically be initiated while stuck in a gap of less than 1.8 blocks
    -   Sneaking will lower the player camera height respective of these changes
    -   Sneaking now requires enough space to stand in order to exit sneaking
    -   Players will transition from swimming to sneaking if they are unable to stand up but would be able to sneak
-   Players are no longer able to sneak while riding ([MCPE-170613](https://bugs.mojang.com/browse/MCPE-170613))
-   Players will no longer suffocate when short sneaking in certain scenarios
-   Players will no longer suffocate when riding on a Camel in 2 block gaps ([MCPE-166451](https://bugs.mojang.com/browse/MCPE-166451)) 
-   Players will no longer be pushed slightly when short sneaking is by being pushed by a block ([MCPE-166411](https://bugs.mojang.com/browse/MCPE-166411))
-   Fixed many interactions where being forced into sneaking acted the same as holding the sneak button ([MCPE-170610](https://bugs.mojang.com/browse/MCPE-170610))

**Other Changes**

-   Items dropped by storage entities are now centered inside the nearest block ([MCPE-160189](https://bugs.mojang.com/browse/MCPE-160189))
-   Shovel has been removed from Boat recipe
-   Barrel recipe has been modified to use Planks instead of Sticks
-   The Cobweb to String recipe has been removed
-   Fixed a bug where Zombie Villager did not drop given item after curing ([MCPE-163670](https://bugs.mojang.com/browse/MCPE-163670))

**Experimental Features**

**Crawling**

-   Added the ability to crawl behind the Short Sneaking and Crawling Experimental toggle
-   Created new player crawling animation
-   Players will now begin crawling when in a 1 block gap, similar to sneaking
-   Crawling is the same speed as sneaking
-   Players will automatically stand up or begin sneaking if they leave the 1 block gap
-   Players will begin swimming if they enter water while crawling, or vice-versa
-   Player\'s model is now centered around their hitbox when swimming ([MCPE-122663](https://bugs.mojang.com/browse/MCPE-122663))
-   Players will now always spawn projectiles from the camera position when sneaking, swimming, or gliding
-   Players will now spawn particle effects when eating in the correct position if they are sneaking, swimming, or gliding
-   Loyalty Tridents will always return to the player\'s camera
-   Players will no longer be stuck inside Cauldrons or Composters when crawling inside with a Trapdoor ([MCPE-170836](https://bugs.mojang.com/browse/MCPE-170836))
-   The paper doll will now show up properly when crawling
-   Fixed an issue where gliding or swimming could sometimes give the player an incorrect bounding box ([MCPE-170882](https://bugs.mojang.com/browse/MCPE-170882))

**Recipe Unlocking**

-   Recipe unlocking -- now in Bedrock!
    -   Added recipe unlocking as an experiment
    -   Collect materials to unlock relevant recipes
    -   A notification will tell you when you\'ve found a new crafting material
    -   Picking up an item teaches you how to craft that item. Great for when a friend gives you a tool you haven't crafted before
    -   We'd love to hear what you think of this feature, so please send us your feedback at [aka.ms/MCRecipeUnlocks](https://aka.ms/MCRecipeUnlocks)\
        \

**Fixes and Changes**

**General**

-   Fixed the \"Communication Error\" message appearing when leaving a Local Network game as the host on Nintendo Switch
-   Reduce cases where players might see \'Unable to connect\' errors due to \'Expired Auth from Discovery\' ([MCPE-170814](https://bugs.mojang.com/browse/MCPE-170814))

**Gameplay**

-   Camera position is now used for audio system listening and ambient sounds
    -   Previously the player position and rotation were sometimes used for audio listening
    -   This effectively flips audio panning when using \'third person front\' camera perspective

**Mobs**

-   Farmer Villagers will now interact with Torchflower Seeds and Pitcher Pods. They can pick up the seeds and plant them, but they will not harvest the Torchflower or Pitcher Crop ([MCPE-169758](https://bugs.mojang.com/browse/MCPE-169758))
-   The sound played when a Camel is dashing is no longer played repeatedly ([MCPE-164064](https://bugs.mojang.com/browse/MCPE-164064))
-   Fixed issue with Jump Boost effect not affecting Magma Cubes ([MCPE-54294](https://bugs.mojang.com/browse/MCPE-54294))
-   Fixed Boats on Ice disappearing when Client-Side Chunk-Generation was enabled ([MCPE-169313](https://bugs.mojang.com/browse/MCPE-169313))
-   Mobs are back to normal despawn rate during night ([MCPE-170208](https://bugs.mojang.com/browse/MCPE-170208))
-   Camels now play a walking animation when taking damage while standing still ([MCPE-166566](https://bugs.mojang.com/browse/MCPE-166566))
-   Sniffer can no longer dig up seeds in the air
-   Mobs no longer continue to freeze without Powder Snow if there is a Powder Snow block near the west and north side ([MCPE-169453](https://bugs.mojang.com/browse/MCPE-169453))

**Blocks**

-   Polished Basalt and Chiseled Deepslate can no longer be replaced by Sculk during world generation
-   Polished Deepslate can now be replaced by Sculk during world generation ([MCPE-160238](https://bugs.mojang.com/browse/MCPE-160238))
-   Decorated Pots crafted with at least one Sherd now have a hover tooltip displaying the Sherd and Brick ingredients
-   Players without permission to open/close containers can no longer interact with Chiseled Bookshelves
-   The correct sound effect is now played when removing an enchanted Book from Chiseled Bookshelf ([MCPE-168119](https://bugs.mojang.com/browse/MCPE-168119))
-   Chiseled Bookshelf slot interactions are now symmetrical ([MCPE-164801](https://bugs.mojang.com/browse/MCPE-164801))
-   Cauldron water texture is now the correct version ([MCPE-170427](https://bugs.mojang.com/browse/MCPE-170427))
-   Note Block on top of Soul Soil now produces the Harp sound instead of the Snare sound
-   Shovel can no longer mine Packed Mud as fast as Pickaxe ([MCPE-161207](https://bugs.mojang.com/browse/MCPE-161207))
-   Placing blocks on Top Snow and Tall Grass while moving side to side will no longer cause them to stack up continuously ([MCPE-162785](https://bugs.mojang.com/browse/MCPE-162785))
-   Suspicious Gravel and Suspicious Sand blocks now display correctly on Maps
-   Mushrooms are now able to spawn on fallen tree trunks ([MCPE-138333](https://bugs.mojang.com/browse/MCPE-138333))
-   Conduit now has the correct lighting when placed on ground ([MCPE-169732](https://bugs.mojang.com/browse/MCPE-169732))

**Items**

-   Fixed black pixels being generated on maps when Client-Side Chunk Generation was enabled
-   Shield no longer clips inside the Armor Stand model while in the riposte pose

**Sculk Vibrations**

-   Placing, rotating, or removing an item in an Item Frame or in a Glow Item Frame now emits vibrations ([MCPE-166741](https://bugs.mojang.com/browse/MCPE-166741))
-   Charging a Respawn Anchor now emits vibrations ([MCPE-157409](https://bugs.mojang.com/browse/MCPE-157409))
-   Scraping or applying wax to blocks of the Copper block set now emits vibrations
-   Switching a Daylight Detector to an Inverted Daylight Detector, or vice-versa, now emits vibrations
-   Adding food to a Campfire now emits vibrations
-   Adding or removing a Music Disc to a Jukebox now emits vibrations
-   Mud turning into Clay now emits vibrations
-   Harvesting Sweet Berries now emits vibrations
-   Placing an Eye of Ender in an End Portal Frame now emits vibrations ([MCPE-155372](https://bugs.mojang.com/browse/MCPE-155372))
-   Bees now emit vibrations when entering or exiting a Beehive or a Bee Nest ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Interacting with a Composter now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Attaching or detaching a Lead from a Fence now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Attaching or detaching a Lead from a mob now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Dying a Sheep now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Picking Glow Berries now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Farmland turning into Dirt now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Using a Spawn Egg on a Monster Spawner now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Silverfish merging with blocks now emit vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Using a Hoe on Rooted Dirt now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Using a Shovel to create Dirt Paths now emits vibrations ([MCPE-156199](https://bugs.mojang.com/browse/MCPE-156199))
-   Placing a Door now emits vibrations
-   Planting seeds in Farmland now emits vibrations

**Realms**

-   Updated the contrast ratio of the close button in realms feed menu
-   Updated the contrast ratio of the New Post header banner
-   An error message is now shown when attempting to upload a cross-platform restricted world to Realms, instead of uploading a corrupted world
-   The focus indicator no longer auto selects the Find Friend button when the Members tab is selected

**Accessibility**

-   Improved the Xbox on-screen keyboard experience, including better positioning, updating fields with typed input, and no more screen dimming while on screen keyboard is open ([MCPE-156575](https://bugs.mojang.com/browse/MCPE-156575))
-   Added a toggle to all platforms enabling extra-large GUI scaling beyond what the GUI slider allows
-   Text-to-speech now reads item names when selecting items in the hotbar

**User Interface**

-   Added support for detecting Brazilian Portuguese as the preferred system language on Nintendo Switch
-   Horse and Donkey jump bar, and camel dash bar, now scale properly to the experience bar ([MCPE-156444](https://bugs.mojang.com/browse/MCPE-156444))
-   Changed the Pause Menu disconnection text to be platform agnostic
-   Fixed an issue that caused the inventory to get locked up after auto placing ([MCPE-46795](https://bugs.mojang.com/browse/MCPE-46795))
-   Imported worlds now get their last played date modified to the time they were imported
-   Reordered the gamepad tooltips for UI screens so that the buttons align with the same side as a controller

**Mouse Input**

-   Default chat duration is now set to 10 seconds while default toast notification duration remains at 3 seconds
-   Improved handling of simultaneous mouse clicks, triggering each individual associated action/response
-   Fixed issues with unresponsive or laggy input when using mouse together with a controller ([MCPE-167447](https://bugs.mojang.com/browse/MCPE-167447))
-   Text-to-speech now reads \"Slash button\" when hovering over the \"/\" button in the chat screen

**Graphical**

-   Fixed issues with highlighted blocks and mob shadows appearing through the Pumpkin head overlay on Switch
-   Rendering of snow or rain is now based on camera position instead of player position
-   Shields no longer flicker when held in both hands on RTX
-   Fixed sleep and camera fade effect not covering the screen until after first-person rendering happens
-   Underwater and fog effects are now based on camera position rather than player position
-   Fancy Leaves setting is now applied immediately and will no longer cause x-ray effect ([MCPE-123608](https://bugs.mojang.com/browse/MCPE-123608))
-   Fixed player capes not properly flapping when moving forward but looking sideways (fixed for real this time!) ([MCPE-153446](https://bugs.mojang.com/browse/MCPE-153446))\
    \

**Technical Updates**

**Updated Add-On Template Packs**

-   Updated Add-On templates for 1.20.10 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddonPacks)

**Dedicated Server**

-   **Note for Linux users:** Ubuntu 18.04 LTS (Bionic Beaver) will reach End of Standard Support in 2023. Accordingly, the Linux Minecraft Dedicated Server will also raise its minimum target Ubuntu version to 20.04 LTS (Focal Fossa) in a later 1.20 update (exact release to be determined). Minecraft server operators using Ubuntu are encouraged to prepare for this transition by updating their deployments to 20.04 LTS as soon as possible.
-   Fixed invalid entries in allowlist.json causing a crash ([BDS-18133](https://bugs.mojang.com/browse/BDS-18133))

**Stability and Performance**

-   Invalid JSON objects within the entity component *\"minecraft:behavior.nearest_attackable_target\"* will no longer crash the game ([MCPE-168129](https://bugs.mojang.com/browse/MCPE-168129))
-   Fixed a crash that could occur when running the *"go_and_give_items_to_noteblock"* goal
-   Fixed a crash that could occur when attempting to change a mob's scale while it was colliding with blocks ([MCPE-170645](https://bugs.mojang.com/browse/MCPE-170645))

**Add-Ons and Script Engine**

-   Added deprecation error message for the *part_visibility* component (the *bone_visibility* field in the geometry component should be used instead, see block documentation for more information)
-   Fixed an issue where adding a *minecraft:peek* component to a custom entity would cause the game to crash

**Commands**

-   */time query* command will now return the correct day and time of day when the absolute time is negative
-   Executing the \"*inputpermission set*\" command will now output a message to the chat with the results ([MCPE-168368](https://bugs.mojang.com/browse/MCPE-168368))
-   Executing the \"*inputpermission set*\" command will now result in an error if it does not affect any players
-   Command positions will now use the current position/rotation when running mcfunctions via execute
-   Fixed issue where some execute commands stopped working on Realms ([MCPE-169974](https://bugs.mojang.com/browse/MCPE-169974)) 
-   The \"*hasitem*\" target selector argument now counts items held with the cursor ([MCPE-152002](https://bugs.mojang.com/browse/MCPE-152002))
-   Commands will still work with \"concrete\", but \"concrete\" won\'t be suggested in the command prompt, rather the new names will
    -   \"concrete\" block is now split into unique instances, namely \"white_concrete\", \"orange_concrete\", \"magenta_concrete\", \"light_blue_concrete\", \"yellow_concrete\", \"lime_concrete\", \"pink_concrete\", \"gray_concrete\", \"light_gray_concrete\", \"cyan_concrete\", \"purple_concrete\", \"blue_concrete\", \"brown_concrete\", \"green_concrete\", \"red_concrete\", and \"black_concrete\"
-   Java Parity: Block states in commands will use equals instead of colon in version 1.20.0 and later. For example using the setblock command: /setblock \~ \~ \~ oak_log\[\"pillar_axis\"=\"x\"\] ([MCPE-168056](https://bugs.mojang.com/browse/MCPE-168056))
-   Block states with equals don\'t require a space to show autocomplete options ([MCPE-168056](https://bugs.mojang.com/browse/MCPE-168056))

**Components**

-   Added a content error when *minecraft:balloonable* is used on *minecraft:player* to prevent issues as this component is not supported in this way ([MCPE-164495](https://bugs.mojang.com/browse/MCPE-164495))

**Entities**

-   Custom entities are no longer restricted to overriding Vanilla entities released before 1.20. All Vanilla entities can be used in the \"*identifier*\" or \"*runtime_identifier*\" field, including Camel and Sniffer

**Blocks**

-   Updated the \"*minecraft:geometry*\" block component to allow bone visibility to be defined with a Molang expression
-   Changed *minecraft:block* JSON schema so what was previously called \"*properties*\" is now called \"*states*\". This change takes effect for files where format_version is 1.20.10 or higher. Previous content is unaffected

**Items**

-   Released the *minecraft:cooldown* item component out of experimental in json formats 1.20.10 and higher
-   Released the *minecraft:repairable* item component out of experimental in json formats 1.20.10 and higher
-   Items with the *\"minecraft:block_placer\"* component will now place blocks with correct orientation
-   Released the *\"minecraft:max_stack_size\"* item component out of experimental in json formats 1.20.10 and higher
-   Custom items with *\"minecraft:block_placer\"* will no longer place certain blocks in the wrong location
-   Released the *\"minecraft:block_placer\"* item component out of experimental in json formats 1.20.10 and higher
-   Released the *\"minecraft:record\"* item component out of experimental in json formats 1.20.10 and higher
-   Released the \"*minecraft:can_destroy_in_creative*\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"*minecraft:hover_text_color*\" item component out of experimental in json formats 1.20.10 and higher\
    \

**Experimental Technical Features**

**Add-Ons and Script Engine**

-   Camera Presets can now specify *\"listener\":\"player\"* to have the audio system use the player position for audio positioning
    -   Added *\"example:example_player_listener\"* Camera Preset to demonstrate this option
-   Actually fixed the bug that caused player capes to stop flapping when moving forward but looking sideways in the *query.cape_flap_amount* by switching the rotation used from the player\'s looking rotation to the player\'s body rotation ([MCPE-153446](https://bugs.mojang.com/browse/MCPE-153446))
-   Observer blocks use state \"*minecraft:facing_direction*\" instead of \"*facing_direction*\". \"*minecraft:facing_direction*\" uses string values (\"down\", \"up\", \"north\", \"south\", \"east\", \"west\")

**API**

-   Dynamic properties can now optionally have default values
-   Increased Dynamic Property registration limits:
    -   Actors: \~1KB -\> 128KB
    -   World: \~10KB -\> 1MB
-   ScreenDisplay
    -   Removed *clearTitle()*- Use *setTitle* with an empty string to clear the title
    -   Updated *fadeInSeconds, staySeconds, fadeOutSeconds* to *fadeInDuration, stayDuration, fadeOutDuration* on TitleDisplayOptions (seconds to ticks)
    -   Updated *setTitle* to reset the times per each new title
    -   Added *RawMessage* support for *setTitle*, *updateSubtitle*, and *setActionBar*
-   Entity additions
    -   Added read-only property *isGliding* - Returns whether the player is gliding with Elytra
    -   Added read-only property *isJumping* - Returns whether the player is using the jump action
    -   Added read-only property *isFlying* - Returns whether the player is flying (e.g. Creative or Spectator mode)
    -   Added read-only property *isSprinting* - Returns whether the entity is sprinting
    -   Added read-only property *isSwimming* - Returns whether the entity is swimming
    -   Added read-only property *isClimbing* - Returns whether the entity is climbing (e.g. Player on a ladder or Spider on a wall)
    -   Added read-only property *isOnGround* - Returns whether the entity is on the ground
    -   Added read-only property *isInWater* - Returns whether the entity is in water
    -   Added read-only property *isFalling* - Returns whether the entity is falling
    -   Added read-only property *fallDistance* - Returns the current fall distance (Used for calculating fall damage)
    -   Added function *fly* - Makes the player fly (e.g. Creative or Spectator mode)
    -   Added function *stopFlying* - Makes the player stop flying (e.g. Creative or Spectator mode)
    -   Added function *glide* - Makes the player glide with Elytra
    -   Added function *stopGliding* - Makes the player stop gliding with Elytra
    -   Added function *swim* - Makes the player swim
    -   Added function *stopSwimming* - Makes the player stop swimming
-   Entity additions (effects)
    -   Updated function *addEffect(effectType: EffectType \| string, duration: number, options?: EntityEffectOptions): void* to return void and to throw if the effect does not exist or the parameters are out of bounds
    -   Updated function *getEffect(effectType: EffectType \| string): Effect \| undefined* to throw if the effect does not exist
    -   Updated function *removeEffect(effectType: EffectType \| string): boolean* to throw if the effect does not exist
-   BlockEvents
    -   Added events *\'PressurePlatePushEvent\'*, *\'PressurePlatePopEvent\'*, *\'TargetBlockHitEvent\'*, and *\'TripWireTripEvent\'*
-   ContainerSlot
    -   Removed function *clone* - Please use function *getItem* instead
-   EntityHealableComponent
    -   Removed *filters: FilterGroup* property
-   EntityAttributeComponent
    -   Added *effectiveMin: number* property. Returns the minimum possible value for the component
    -   Added *effectiveMax: number* property. Return the maximum possible value for the component
    -   Renamed *value* property to *defaultValue*
    -   Renamed *current* property to *currentValue*
    -   Renamed *setCurrent* method to *setCurrentValue*
-   Added *EntityHealthChangedAfterEvent*. It is triggered when any health change happens for an Entity
-   System
    -   Replaced *system.events* with *system.beforeEvents* and *system.afterEvents*
    -   Renamed event *beforeWatchdogTerminate* to *watchdogTerminate* and moved it to *system.beforeEvents*
    -   Moved *scriptEventReceive* to *system.afterEvents*
-   MessageReceiveAfterEvent
    -   Removed property *sourceType*
-   ScriptEventSource
    -   Replaced enum *MessageSourceType* with a new enum *ScriptEventSource*
-   ScriptEventCommandMessageAfterEvent
    -   Changed property *sourceType* from *MessageSourceType* to *ScriptEventSource*
    -   Increased maximum message length from 256 to 2048 characters
-   Dynamic Property identifiers are now limited to 1024 characters
-   Removed *MinecraftEffectTypes* defined in *\@minecraft/server. See \@minecraft/vanilla-data NPM package for an equivalent*
-   *Moved several APIs to stable 1.30:*
    -   Moving *tryTeleport(location: Vector3, duration: number, options: ScriptTeleportOptions)* to *1.3.0*
    -   Moving *teleport(location: Vector3, options: ScriptTeleportOptions)* to *1.3.0*
    -   Moved function *getComponent* to *1.3.0*
    -   Moved world event *PlayerJoinAfterEvent* to *1.3.0*
    -   Moved world event *PlayerLeaveAfterEvent* to *1.3.0*
    -   Moved world event *PlayerSpawnAfterEvent* to *1.3.0*
    -   Moved EntityComponent *EntityHealableComponent* to *1.3.0*
    -   Moved EntityComponent *EntityHealthComponent* to *1.3.0*
    -   Moved class *FeedItem* to *1.3.0*
    -   Moved class *FeedItemEffect* to *1.3.0*
    -   Moving *addEffect(effectType: string \| EffectType, duration: number, options: EntityEffectOptions)* to *1.3.0*
    -   Moved *getEffect(effectType: string \| EffectType)* to *1.3.0*
    -   Moved *getEffects()* to *1.3.0*
    -   Moved *removeEffect(effectType: string \| EffectType)* to *1.3.0*
    -   AfterEvents
        -   Moving *ButtonPushEvent* to *1.3.0*
        -   Moving *LeverActivateEvent* to *1.3.0*
    -   Moved function *spawnEntity* to *1.3.0*
    -   Moved function *spawnItem* to *1.3.0*
-   *Spawn Point Updates:*
    -   Removed function *clearSpawn*
    -   Removed property *spawnDimension*
    -   Added function *getSpawnPoint(): DimensionLocation \| undefined* - Returns the player\'s spawn point
    -   Added function *setSpawnPoint(spawnPoint?: DimensionLocation): void* - Sets the player\'s spawn point, or clears it if *spawnPoint* is *undefined*
    -   Renamed function *getDefaultSpawnPosition* to *getDefaultSpawnLocation*
    -   Renamed function *setDefaultSpawn* to *setDefaultSpawnLocation*
-   DimensionLocation
    -   Added new interface *DimensionLocation* - Represents a location in a dimension
-   Added *hasParticipant* function to *ScoreboardObjective*.
-   The following functions in *ScoreboardObjective* can now accept *Entity* or *string* types as *participants*:
    -   *getScore*
    -   *setScore*
    -   *removeParticipant*
-   Removed *getScore*, *setScore* from *ScoreboardIdentity* and *Scoreboard*
-   Removed the *removeFromObjective* function from *ScoreboardIdentity*
-   Fixed bug where scoreboard values would not be updated on the client when updated from script
-   Raycasting
    -   Changed function *Dimension.getBlockFromRay*
        -   Changed return type from *Block* to *BlockRaycastHit \| undefined*
    -   Changed function *Dimension.getEntitiesFromRay*
        -   Changed return type from *Entity\[\]* to *EntityRaycastHit\[\]*
    -   Changed function *Entity.getBlockFromViewDirection*
        -   Changed return type from *Block* to *BlockRaycastHit \| undefined*
    -   Changed function *Entity.getEntitiesFromViewDirection*
        -   Changed return type from *Entity\[\]* to *EntityRaycastHit\[\]*
    -   Added interface *BlockRaycastHit*
    -   Added interface *EntityRaycastHit*
-   Renamed leverActivate after event to leverAction
    -   Removed class *EntityHitAfterEvent*.
    -   Added class *EntityHitBlockAfterEvent*
    -   Added class *EntityHitEntityAfterEvent*
    -   Class *WorldAfterEvents*
        -   Removed property *entityHit*
        -   Added property *entityHitBlock*
        -   Added property *entityHitEntity*
-   Added helper function *isValid()* to several classes in order to check if the object is valid. This can safely be used on any handle to a native object before accessing or using the object, to ensure the underlying object still exists and is valid to use
    -   Block (checks the block is a valid position in bounds and the containing chunk is loaded & ticking)
    -   Container (checks the relevent container inventory exists and is valid)
    -   Effect (checks the owning entity is valid and the effect exists on that entity)
    -   ScreenDisplay (checks the owning player is valid)
    -   ScoreboardObjective (checks the objective entry exists and is attached to a valid scoreboard)
    -   Entity (checks that the entity exists in the world. Will return true if the entity is dead)
        -   Player
        -   SimulatedPlayer (Note simulated players do not automatically get removed from the world, so *isValid* will return true long after they are dead)
    -   ContainerSlot (checks the item context is valid: Container exists in the world, such as the owning entity, and the slot is within the container bounds)
        -   Already existed as a read-only property, changed to a method for consistency
-   Component
    -   EntityAttributeComponent (checks the owning entity is valid and the attribute exists on the entity)
    -   BlockLiquidContainerComponent (checks block exists and is a valid cauldron type)
        -   Added read only method *isValidLiquid* which checks if the liquid in the cauldron matches the component in question (EG. BlockLavaContainerComponent checks for lava liquid)
    -   EntityComponent (checks the owning entity exists)
    -   ItemComponent (checks the owning item exists)
-   World
    -   Renamed *getTime* to *getTimeOfDay*
    -   Renamed *setTime* to *setTimeOfDay*
    -   *setTimeOfDay* now accepts a *TimeOfDay* enum as an argument
    -   The *timeOfDay* argument for *setTime* must now be within 0-23999 (inclusive)
    -   Added *getDay* function
-   Updated the following enums\' values to be PascalCase instead of camelCase:
    -   *ClipboardMirrorAxis*
    -   *ClipboardRotation*
    -   *HttpRequestMethod*
    -   *FormCancelationReason*
    -   *Direction*
    -   *DisplaySlotId*
    -   *EntityLifetimeState*
    -   *FluidType*
    -   *ObjectiveSortOrder*
    -   *ScoreboardIdentityType*
    -   *ScriptEventSource*
    -   *SignSide*
    -   *WatchdogTerminateReason*
    -   *WeatherType*

**Camera**

-   Changed camera command fade color to take integer values from 0 to 255 rather than 0.0 to 1.0 fractional values
-   Camera fade command now enforces fade duration limits; fade in, hold, and fade out must be between 0 and 10 seconds
-   Ensuring camera pitch can only be between -90 and 90 degrees when using the /camera command
-   Camera preset JSON now supports an optional bool \'*player_effects*\' value which causes game rendering to use player effect state (for example night vision) when this preset is active. Added the \"*example:example_player_effects*\" preset to demonstrate this
-   Camera command can now take a \'facing\' option instead of a \'rot\' option with a target entity or position specified
-   Fixed custom cameras to not use the \'inside block\' effect when player head is inside a block ([MCPE-170206](https://bugs.mojang.com/browse/MCPE-170206))
-   Limit free cam JSON to not pitch camera beyond plus or minus 90 degrees
-   Fixed /*camerashake* command to shake camera without also shaking player
-   Rendering of experimental *minecraft:free* camera no longer affected by player state like night vision

**Items**

-   Items in format version 1.20.10 and above with the *"minecraft:throwable"* component will trigger Item Use events when thrown
-   Custom items with *\"minecraft:block_placer\"* will no longer place certain blocks in the wrong location
-   Changed *\"minecraft:shooter\"* to only consume ammo when charging the item if *\"charge_on_draw\"* is set \"*true*\"
-   Items with the \"*minecraft:block_placer*\" component will now place blocks with correct orientation
-   Deprecated \"*minecraft:render_offsets*\" component in json formats 1.20.10 and higher
-   Changed charging action behavior in \"*minecraft:shooter*\" to match Vanilla crossbow
-   Changed shooting behavior for a charged \"*minecraft:shooter*\" with an empty inventory/offhand to successfully shoot the charged ammunition
-   Released the \"*minecraft:shooter*\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"*minecraft:throwable*\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"*minecraft:projectile*\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"*minecraft:can_destroy_in_creative*\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"*minecraft:hover_text_color*\" item component out of experimental in json formats 1.20.10 and higher
