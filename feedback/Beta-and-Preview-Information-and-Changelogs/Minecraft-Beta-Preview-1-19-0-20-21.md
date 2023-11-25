---
title: Minecraft Beta & Preview - 1.19.0.20/21
date: 2022-04-06T12:58:43Z
updated: 2022-04-06T16:26:55Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/5341080072333-Minecraft-Beta-Preview-1-19-0-20-21
---

**Posted:** April 6, 2022

## **Information on the Minecraft Preview and Beta: **

-   Preview Version: 1.19.0.21 \| Beta Version: 1.19.0.20
-   While the version numbers between Preview and Beta are different, there is no difference in game content
-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see [ms/JoinMCBeta](https://aka.ms/JoinMCBeta)for detailed instructions 

![beta19_1_16x9.jpg](https://feedback.minecraft.net/hc/article_attachments/5343190699661/beta19_1_16x9.jpg)

 

What? Where? When? Why? I might be slightly dizzy, but I'm doing my best to muddy the waters in preparation for the grand introduction of the most bemired biome to date. You might have guessed it -- in this week's Bedrock beta, we're heading to the murky marvel that is the mangrove swamp biome.

In addition to this new biome, you'll find features like the mud block and mangrove tree as well as its wood types included in this beta. As always, it would mean the world to us (well, parts of it anyway) to hear [your thoughts through feedback](https://aka.ms/MinecraftBetaFeedback). As we're now approaching the final state of some features, you won\'t have to enable them in the experimental toggle in order to test them out this time!

Here\'s a list of what is new in this week\'s Beta! As always please search and report any bugs you may find at [bugs.mojang.com](http://bugs.mojang.com/).

# **Features and Bug Fixes**

## **Wild Update Features**

-   Wild Update features no longer require the experimental toggle to be enabled
-   Added new Wild Update splash screen texts
-   Added new Wild Update loading screen tips

# **Mangrove Swamp Biome**

-   Added Mangrove Swamp biome
-   Added Mangrove Tree feature
-   Added Mangrove Propagule base functionality
-   Added Mangrove Roots and Muddy Mangrove Roots
-   Added all the new Mangrove Wood Types

## **Mud**

-   Added Mud related block recipes
-   Implemented Mud walking/sinking

## **Mud Block**

-   Added base Mud block functionality
-   Added Mud block sounds
-   Added Mud block renewability

## **Mud Brick Blocks**

-   Added Mud Brick block
-   Added Mud Brick sounds
-   Added Mud Brick Slab/Stair/Wall blocks

## **Packed Mud**

-   Added Packed Mud block

## **Allay**

-   Allay can now be leashed if it is already holding an item ([MCPE-153068](https://bugs.mojang.com/browse/MCPE-153068))
-   Allay can now be named by a Name Tag if it is already holding an item ([MCPE-153079](https://bugs.mojang.com/browse/MCPE-153079))
-   Allays now have initial sounds
-   Allay now move slower when not attempting to follow its owner, and will only start following its owner from a further distance than before

## **Frog**

-   Frogs no longer croak while they are eating mobs

## **Gameplay**

-   Fixed a bug where Wardens temporarily could miss noticing vibrations, and Allays could miss noticing that Note Blocks were being played
-   Stop Warden from getting angry at itself and inanimate mobs
-   The Darkness effect now has a black distance fog, similar to how the Blindness effect works
-   Parrots now imitate the Warden
-   The Warden has a new angry listening sound
-   The Warden now has updated sounds and custom death and hurt sounds
-   Allow Warden to preserve anger level towards despawned entities
-   Fixed eroded Badlands biome placement error that caused it to fragment

## **Sculk Sensor**

-   Sculk Sensors can now detect a wider range of vibrations
-   Sculk Sensors can now detect players sneaking on top of them
-   Sculk Sensors cannot detect players shooting an arrow while sneaking anymore
-   Sculk Sensors can now detect players falling in Lava
-   Sculk Sensors can now detect players sneaking in Water ([MCPE-117244](https://bugs.mojang.com/browse/MCPE-117244))
-   Sculk Sensors can now detect landing projectiles
-   Sculk Sensors can now detect containers being opened or closed ([MCPE-135140](https://bugs.mojang.com/browse/MCPE-135140))
-   Sculk Sensors can now detect Candles being placed, lit, or unlit ([MCPE-141453](https://bugs.mojang.com/browse/MCPE-141453))
-   Sculk Sensors can now detect players eating food or drinking potions ([MCPE-135114](https://bugs.mojang.com/browse/MCPE-135114))
-   Sculk Sensors can now detect Goat Horns being played
-   Sculk Sensors can now detect Big Dripleaves changing their state ([MCPE-153115](https://bugs.mojang.com/browse/MCPE-153115))

## **Accessibility Features**

-   There is now a Darkness effect strength slider in Settings that adjusts how dark the screen can get during the effect

## **Graphical**

-   Fixed a texture bug in the Warden\'s bioluminescent texture where the right arm\'s bottom face didn't have bioluminescent colors ([MCPE-153664](https://bugs.mojang.com/browse/MCPE-153664))
-   Updated fog JSON schema to allow distance fog settings to use negative value as \'fog_start\'. Allowing nearby blocks to also be tinted with fog color
-   Added adjustable fog effect that can expand or shrink over time. Users will get the sense of eyes adjusting when going into water

## **Mobile Touch Controls**

-   Block highlights will no longer stay if players lift their block breaking finger off the screen while still using a second finger to move around with non-classic touch controls
-   Fixed issue where Boats were not controllable with new touch controls ([MCPE-152984](https://bugs.mojang.com/browse/MCPE-152984))
-   Fixed issue where players were not able to descend while on top of Scaffolding ([MCPE-152989](https://bugs.mojang.com/browse/MCPE-152989))
-   Removed inversion of movement when in front facing third-person camera ([MCPE-153168](https://bugs.mojang.com/browse/MCPE-153168))

## **General**

-   Fixed a bug causing the Parrot\'s head to always face the player while riding the player
-   Fixed bug causing player to take fall damage after getting into a Bed while falling ([MCPE-153122](https://bugs.mojang.com/browse/MCPE-153122))
-   Fixed bug causing baby Llamas to fire llama spit from above their head ([MCPE-144948](https://bugs.mojang.com/browse/MCPE-144948))
-   Fixed a crash when loading a Behavior Pack with non-JSON object in entity components, component_groups, and \"add\"/\"remove\" events ([MCPE-151377](https://bugs.mojang.com/browse/MCPE-151377)) ([MCPE-151380](https://bugs.mojang.com/browse/MCPE-151380))
-   Fences and Walls no longer connect to Bells ([MCPE-152757](https://bugs.mojang.com/browse/MCPE-152757))

## **Graphical**

-   Fixed a bug where the Trident, Bow, Spyglass, Crossbow, and Shield would not be visible when held by an Allay ([MCPE-152965](https://bugs.mojang.com/browse/MCPE-152965))
-   Fixed a bug where the Trident, Bow, Spyglass and Crossbow would not render when picked up by a Fox ([MCPE-135346](https://bugs.mojang.com/browse/MCPE-135346))
-   Mirrored the Spider\'s left legs ([MCPE-152927](https://bugs.mojang.com/browse/MCPE-152927))
-   Mirrored the Wolf\'s left ear and left legs ([MCPE-152931](https://bugs.mojang.com/browse/MCPE-152931))
-   Fixed a bug where the Brewing Stand\'s arms textures did not touch the base ([MCPE-152932](https://bugs.mojang.com/browse/MCPE-152932))
-   Moved the Brewing Stand\'s base UVs and updated the base texture
-   Fixed the Brewing Stand\'s arms rotation

### **Updated Block Textures**

-   Created a better transition between the End Portal Frame side texture and the End Stone ([MCPE-152930](https://bugs.mojang.com/browse/MCPE-152930))
-   Removed unused pixels in the End Rod texture ([MCPE-152929](https://bugs.mojang.com/browse/MCPE-152929))
-   Updated the Mycelium\'s side texture to match other dirt-based textures ([MCPE-152928](https://bugs.mojang.com/browse/MCPE-152928))

## **Graphics**

-   Fixed a bug where End Crystal beams would point far above their target blocks
-   Fixed a bug causing z-fighting to occur on bottom of player's head while wearing a Skull ([MCPE-149125](https://bugs.mojang.com/browse/MCPE-149125))

## **Mobile Controls**

-   Fixed issue where the Invert Y Axis setting was not working correctly with touch controls

### **Wandering Trader**

-   The Wandering Trader no longer opens or closes doors ([MCPE-113452](https://bugs.mojang.com/browse/MCPE-113452))
-   The Wandering Trader now randomly moves around ([MCPE-45756](https://bugs.mojang.com/browse/MCPE-45756))
-   The Wandering Trader now matches Java Edition\'s drinking sounds ([MCPE-47057](https://bugs.mojang.com/browse/MCPE-47057))
-   The Wandering Trader now has disappear/reappear sound effects when gaining/losing Invisibility
-   The Wandering Trader can now be named with a Name Tag (this will not prevent it from despawning)

## **Stability and Performance**

-   Cleaned up leftover biome/block/light memory when leaving a world
-   Fixed a crash that could occur when lightning hits a Lightning Rod in certain scenarios

## **User Interface**

-   Added appropriate messaging when there is no internet connection on Xbox devices

## **Vanilla Parity**

### **Villagers**

-   Villagers will no longer begin sleeping while riding something near a Bed

# **Technical Updates**

## **General**

-   Volume instances are now stored in the world, persisting between play sessions
-   Limit path strings and loc ID strings in data-driven blocks to 256 characters
-   Limit the length of crafting tag strings in CraftingTableComponent to 64 characters
-   Limit the number of elements in the material_instancesfield of the BlockMaterialInstancesComponent to 64
-   Limit the number of elements in the conditionsand block_filter fields of the BlockPlacementFieldComponent to 64
-   Updated documentation for originand size fields of the minecraft:block_collision and minecraft:aim_collision components

## **Item Components**

-   Added new data-driven Item component minecraft:chargeable- Allows the item to be charged (like Apples or Bows) when the use action button is held on_complete - Trigger executed when the items use duration has been completed

## **Commands**

-   Reload command will now discover new function and script files

## **Dedicated Server**

-   Enable Windows Dedicated Server console to read UTF-16 encoded unicode input ([BDS-3791](https://bugs.mojang.com/browse/BDS-3791))

## **Actors**

-   Added in check to prevent an actor that is a passenger from being ridden by the vehicle it is on preventing an infinite loop looking for the root vehicle ([MCPE-133774](https://bugs.mojang.com/browse/MCPE-133774))

## **AI Goals**

-   Exposed new data parameter \"can_sleep_while_riding\" for \"minecraft.behavior.sleep\". If set to false, the goal will not start if the mob is riding

## **Commands**

-   The \'/spreadplayers\' command will now avoid more hazardous locations

## **Gameplay**

-   Fixed crashing issue on some Marketplace worlds

## **General**

-   Actor properties can now be applied to player entities. Updated network protocol version to support this ([MCPE-129628](https://bugs.mojang.com/browse/MCPE-129628))

## **Mobs**

-   Entities that use KnockbackRoarGoal can once again properly use entity filters to determine damage

## **Molang**

-   Fixed a crash in query.variant related to thrown potions and invalid potion IDs

# **Experimental Features**

## **GameTest Framework**

-   Fixed Date.now() to no longer truncate to a 32-bit integer

**mojang-gametest module**: Test

-   Added function rotateVector- Rotates a vector relative to the GameTest structure rotation

**mojang-minecraft module**

-   New property on Player: onScreenDisplay : ScreenDisplay - exposes a new interface to trigger on screen content
-   ScreenDisplay Type
    -   setTitle(title : String, options? : TitleDisplayOptions) - cause a title to show up on the player\'s HUD, optionally specifying the subtitle and fade in, stay and fade out times
    -   clearTitle() - clear title and subtitle
    -   updateSubtitle(subtitle : String) - update the subtitle (but not the title)
    -   setActionBar(text : String) - set the action bar text
-   TitleDisplayOptions object
    -   subtitle? : String - optional subtitle
    -   fadeInSeconds : Int - number of seconds to fade in new title and subtitle
    -   staySeconds : Int - number of seconds to have the title and subtitle stay on screen
    -   fadeOutSeconds : Int - number of seconds to fade out title and subtitle

Support of dynamic properties that script can use to persist data per-World or per-Entity.  Note that properties must be registered using the propertyRegistry in the new WorldInitialize event

-   DynamicPropertiesDefinition
    -   Added function defineNumber(identifier: string): void- Defines a dynamic number property
    -   Added function defineString(identifier: string, maxLength: number): void- Defines a dynamic string property
    -   Added function defineBoolean(identifier: string): void- Defines a dynamic boolean property
    -   Added event worldInitialize(worldInitializeEvent: WorldInitializeEvent)- Fires during world load and contains the property registry used for declaring dynamic properties
-   PropertyRegistry
    -   Added function registerEntityTypeDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition, entityType: EntityType)- Registers dynamic property definitions for the given EntityType
    -   Added function registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition)- Registers property definitions for the world\
        \
-   World object/Entity object additions:
    -   Added function setDynamicProperty(identifier: string, value: boolean \| string \| number)- Adds a dynamic property to the world/entity
    -   Added function getDynamicProperty(identifier: string): boolean \| string \| number- Gets a dynamic property from the world/entity if it exists, otherwise returns undefined
    -   Added function removeDynamicProperty(identifier: string): boolean- Removes a dynamic property value from the world/entity\
        \
-   New events:
    -   Added event events.projectileHit- Fires when a projectile hits a Block or Entity
    -   Added event events.itemStartUseOn- Sent when the player first interacts with a block
    -   Added event events.itemStopUseOn- Sent when fire if the block is successfully interacted with and the block has changed - such as when grass is turned to a path with a Shovel
    -   Added event events.itemStartCharge-- Sent when the player first starts using a charging/animated item
    -   Added event events.itemCompleteCharge- Sent when the item has completed its charge action
    -   Added event events.itemReleaseCharge- Sent when the user has finished using the item and released the build action
    -   Added event events.itemStopCharge- Sent either when the player has finished an items use cycle or when the player has released the use action with the item
    -   ItemStartUseOnEvent Added read only property buildBlockLocation- The result build block position. Useful for determining where a block was placed
    -   Added member player?: Playerto the LeverActivate event - The player that activated the lever
