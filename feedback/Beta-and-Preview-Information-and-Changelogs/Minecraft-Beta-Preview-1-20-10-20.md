---
title: Minecraft Beta & Preview - 1.20.10.20
date: 2023-05-25T10:27:13Z
updated: 2023-05-25T15:30:42Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/16116960508813-Minecraft-Beta-Preview-1-20-10-20
---

**Posted:** 25 May 2023

**Information on the Minecraft Preview and Beta:**

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot featuring a player crawling under a cherry wood trapdoor in a cherry grove, with a villager standing near some planted flowers, and a pair of camels.](https://feedback.minecraft.net/hc/article_attachments/16116940626189)

# **Features and Bug Fixes**

## **Accessibility Features**

-   Improved Xbox On-Screen Keyboard experience including better positioning, updating fields with typed input and no more screen dimming while on screen keyboard is open ([MCPE-156575](https://bugs.mojang.com/browse/MCPE-156575))

## **Sneak and Crawl (Experimental)**

-   Added the ability to crawl behind the Short Sneaking and Crawling Experimental toggle
-   Created new player crawling animation
-   Players will now begin crawling when in a 1 block gap, similar to sneaking
-   Crawling is the same speed as sneaking
-   Players will automatically stand up or begin sneaking if they leave the 1 block gap
-   Players will begin swimming if they enter water while crawling, or vice-versa
-   Player\'s model is now centered around their hitbox when swimming ([MCPE-54294](https://bugs.mojang.com/browse/MCPE-54294))
-   Players are no longer able to sneak while riding ([MCPE-170613](https://bugs.mojang.com/browse/MCPE-170613))
-   Players will now always spawn projectiles from the camera position when sneaking, swimming, or gliding
-   Players will now spawn particle effects when eating in the correct position if they are sneaking, swimming, or gliding
-   Loyalty Tridents will always return to the player\'s camera
-   Players will no longer suffocate when short sneaking in certain scenarios
-   Players will no longer suffocate when riding on a Camel in 2 block gaps ([MCPE-166451](https://bugs.mojang.com/browse/MCPE-166451))
-   Players will no longer be pushed slightly when short sneaking is by being pushed by a block ([MCPE-166411](https://bugs.mojang.com/browse/MCPE-166411))
-   Fixed many interactions where being forced into sneaking acted the same as holding the sneak button ([MCPE-170610](https://bugs.mojang.com/browse/MCPE-170610))

## **World Generation**

-   Polished Basalt and Chiseled Deepslate can no longer be replaced by Sculk during world generation
-   Polished Deepslate can now be replaced by Sculk during world generation ([MCPE-160238](https://bugs.mojang.com/browse/MCPE-160238))

## **Villagers**

-   Farmer Villagers will now interact with Torchflower Seeds and Pitcher Pods. They can pick up the seeds and plant them, but they will not harvest the Torchflower or Pitcher Crop ([MCPE-169758](https://bugs.mojang.com/browse/MCPE-169758))

## **Archaeology**

-   Decorated Pots crafted with at least one Sherd now have a hover tooltip displaying the Sherd and Brick ingredients

## **Audio**

-   Camera position is now used for audio system listening and ambient sounds
    -   Previously the player position and rotation were sometimes used for audio listening
    -   This effectively flips audio panning when using \'third person front\' camera perspective

## **Blocks**

-   Players without permission to open/close containers can no longer interact with Chiseled Bookshelves
-   Cauldron water texture is now the correct version ([MCPE-170427](https://bugs.mojang.com/browse/MCPE-170427))
-   Note Block on top of Soul Soil now produces the Harp sound instead of the Snare sound
-   Shovel can no longer mine Packed Mud as fast as Pickaxe ([MCPE-161207](https://bugs.mojang.com/browse/MCPE-161207))
-   Placing blocks on Top Snow and Tall Grass while moving side to side will no longer cause them to stack up continuously ([MCPE-162785](https://bugs.mojang.com/browse/MCPE-162785))

## **Graphical**

-   Fixed issues with highlighted blocks and mob shadows appearing through the Pumpkin head overlay on Switch
-   Rendering of snow or rain is now based on camera position instead of player position
-   Shields no longer flicker when held in both hands on RTX
-   Fixed sleep and camera fade effect not covering the screen until after first-person rendering happens

## **Maps**

-   Fixed black pixels being generated on maps when Client-Side Chunk Generation is enabled

## **Mobs**

-   The sound played when a Camel is dashing is no longer played repeatedly ([MCPE-164064](https://bugs.mojang.com/browse/MCPE-164064))
-   Fixed issue with Jump Boost effect not affecting Magma Cubes ([MCPE-54294](https://bugs.mojang.com/browse/MCPE-54294))

## **User Interface**

-   Added a toggle to all platforms enabling extra-large GUI scaling beyond what the GUI slider allows
-   Changed the Pause Menu disconnection text to be platform agnostic
-   Fixed an issue that caused the inventory to get locked up after auto placing ([MCPE-46795](https://bugs.mojang.com/browse/MCPE-46795))
-   Imported worlds now get their last played date modified to the time they were imported

## **Vanilla Parity**

-   Items dropped by storage entities are now centered inside the nearest block ([MCPE-160189](https://bugs.mojang.com/browse/MCPE-160189))
-   Shovel has been removed from Boat recipe
    -   The Bamboo Raft recipe has not been updated yet
-   Barrel recipe has been modified to use planks instead of Sticks
-   The Cobweb to String recipe has been removed
-   Fixed a bug where Zombie Villager did not drop given item after curing ([MCPE-163670](https://bugs.mojang.com/browse/MCPE-163670))
-   Wild Horses, Mules, and Donkeys can now be tempted using a Golden Apple/Carrot or Enchanted Apple. Llamas will be tempted by a player holding a Hay Bale ([MCPE-140814](https://bugs.mojang.com/browse/MCPE-140814))

## **Vibrations**

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

# **Technical Updates**

## **Add-Ons and Script Engine**

-   Added deprecation error message for the *part_visibility*component (the *bone_visibility* field in the geometry component should be used instead, see block documentation for more information)
-   Fixed an issue where adding a *minecraft:peek*component to a custom entity would cause the game to crash

## **Blocks**

-   Updated the \"minecraft:geometry\" block component to allow bone visibility to be defined with a Molang expression

## **Commands**

-   Executing the \"inputpermission set\" command will now output a message to the chat with the results ([MCPE-168368](https://bugs.mojang.com/browse/MCPE-168368))
-   Executing the \"inputpermission set\" command will now result in an error if it does not affect any players
-   Command positions will now use the current position/rotation when running mcfunctions via execute
-   Fixed issue where some execute commands stopped working on Realms ([MCPE-169974](https://bugs.mojang.com/browse/MCPE-169974))
-   The \"hasitem\" target selector argument now counts items held with the cursor ([MCPE-152002](https://bugs.mojang.com/browse/MCPE-152002))
-   Commands will still work with \"concrete\", but \"concrete\" won\'t be suggested in the command prompt, rather the new names will
    -   \"concrete\" block is now split into unique instances, namely \"white_concrete\", \"orange_concrete\", \"magenta_concrete\", \"light_blue_concrete\", \"yellow_concrete\", \"lime_concrete\", \"pink_concrete\", \"gray_concrete\", \"light_gray_concrete\", \"cyan_concrete\", \"purple_concrete\", \"blue_concrete\", \"brown_concrete\", \"green_concrete\", \"red_concrete\", and \"black_concrete\"
-   Java Parity: Block states in commands will use equals instead of colon in version 1.20.0 and later. For example using the setblock command: /setblock \~ \~ \~ oak_log\[\"pillar_axis\"=\"x\"\] ([MCPE-168056](https://bugs.mojang.com/browse/MCPE-168056))
-   Block states with equals don\'t require a space to show autocomplete options ([MCPE-168056](https://bugs.mojang.com/browse/MCPE-168056))

## **Components**

-   Added a content error when *minecraft:balloonable* is used on *minecraft:player* to prevent issues as this component is not supported in this way ([MCPE-164495](https://bugs.mojang.com/browse/MCPE-164495))

## **Editor**

The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Learn [how to use](https://aka.ms/LearnEditor) the Editor and join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum, post bugs, view more detailed release notes. Tag us on social channels with **#BedrockEditor.**

-   Resolved an issue where the selection cursor was causing the glass block to render invisible
-   Added Log Panel for Tool mode to display log messages. It can be accessed from the *View*menu or by using the *CTRL+H* shortcut
-   Fixed a bug that prevented additional servers to be added from Servers Tab in Editor mode
-   Fixed a bug that caused the gizmo to be hidden in Crosshair Mode

## **Items**

-   Released the *minecraft:cooldown* item component out of experimental in json formats 1.20.10 and higher
-   Released the *minecraft:repairable* item component out of experimental in json formats 1.20.10 and higher

## **Stability and Performance**

-   Invalid JSON objects within the entity component *\"minecraft:behavior.nearest_attackable_target\"* will no longer crash the game ([MCPE-168129](https://bugs.mojang.com/browse/MCPE-168129))

# **Experimental Technical Features**

## **Add-Ons and Script Engine**

-   Camera Presets can now specify *\"listener\":\"player\"* to have the audio system use the player position for audio positioning
    -   Added *\"example:example_player_listener\"* Camera Preset to demonstrate this option

## **Items**

-   Items with the \"minecraft:block_placer\" component will now place blocks with correct orientation

## **API**

-   Dynamic properties can now optionally have default values
-   Increased Dynamic Property registration limits:
    -   Actors: \~1KB -\> 128KB
    -   World: \~10KB -\> 1MB
-   ScreenDisplay
    -   Removed *clearTitle()*- Use *setTitle* with an empty string to clear the title
    -   Updated *fadeInSeconds, staySeconds, fadeOutSeconds*to *fadeInDuration, stayDuration, fadeOutDuration* on TitleDisplayOptions (seconds to ticks)
    -   Updated *setTitle* to reset the times per each new title
    -   Added *RawMessage* support for *setTitle*, *updateSubtitle*, and *setActionBar*
-   Entity additions
    -   Added read-only property *isGliding*- Returns whether the player is gliding with Elytra
    -   Added read-only property *isJumping*- Returns whether the player is using the jump action
    -   Added read-only property *isFlying*- Returns whether the player is flying (e.g. Creative or Spectator mode)
    -   Added read-only property *isSprinting*- Returns whether the entity is sprinting
    -   Added read-only property *isSwimming*- Returns whether the entity is swimming
    -   Added read-only property *isClimbing*- Returns whether the entity is climbing (e.g. Player on a ladder or Spider on a wall)
    -   Added read-only property *isOnGround*- Returns whether the entity is on the ground
    -   Added read-only property *isInWater*- Returns whether the entity is in water
    -   Added read-only property *isFalling*- Returns whether the entity is falling
    -   Added read-only property *fallDistance*- Returns the current fall distance (Used for calculating fall damage)
    -   Added function *fly*- Makes the player fly (e.g. Creative or Spectator mode)
    -   Added function *stopFlying*- Makes the player stop flying (e.g. Creative or Spectator mode)
    -   Added function *glide*- Makes the player glide with Elytra
    -   Added function *stopGliding*- Makes the player stop gliding with Elytra
    -   Added function *swim*- Makes the player swim
    -   Added function *stopSwimming*- Makes the player stop swimming
-   Entity additions (effects)
    -   Updated function *addEffect(effectType: EffectType \| string, duration: number, options?: EntityEffectOptions): void*to return void and to throw if the effect does not exist or the parameters are out of bounds
    -   Updated function *getEffect(effectType: EffectType \| string): Effect \| undefined*to throw if the effect does not exist
    -   Updated function *removeEffect(effectType: EffectType \| string): boolean*to throw if the effect does not exist
-   BlockEvents
    -   Added events *\'PressurePlatePushEvent\'*, *\'PressurePlatePopEvent\'*, *\'TargetBlockHitEvent\'*, and *\'TripWireTripEvent\'*
-   ContainerSlot
    -   Removed function *clone*- Please use function *getItem* instead
-   EntityHealableComponent
    -   Removed *filters: FilterGroup*property
-   EntityAttributeComponent
    -   Added *effectiveMin: number* Returns the minimum possible value for the component
    -   Added *effectiveMax: number* Return the maximum possible value for the component
    -   Renamed *value*property to *defaultValue*
    -   Renamed *current*property to *currentValue*
    -   Renamed *setCurrent*method to *setCurrentValue*
-   Added *EntityHealthChangedAfterEvent*. It is triggered when any health change happens for an Entity

## **Camera**

-   Changed camera command fade color to take integer values from 0 to 255 rather than 0.0 to 1.0 fractional values
-   Camera fade command now enforces fade duration limits; fade in, hold, and fade out must be between 0 and 10 seconds
-   Ensuring camera pitch can only be between -90 and 90 degrees when using the /camera command
-   Fixed an issue where Minecraft Education players could not use the \"/give\" command to give a Camera item

## **Items**

-   Items in format version 1.20.10 and above with the *"minecraft:throwable"* component will trigger Item Use events when thrown
-   Custom items with *\"minecraft:block_placer\"* will no longer place certain blocks in the wrong location
-   Changed *\"minecraft:shooter\"* to only consume ammo when charging the item if *\"charge_on_draw\"* is set \"*true*\"
