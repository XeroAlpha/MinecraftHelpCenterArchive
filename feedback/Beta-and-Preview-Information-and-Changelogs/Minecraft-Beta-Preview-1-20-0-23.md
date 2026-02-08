---
title: Minecraft Beta & Preview - 1.20.0.23
date: 2023-05-02T18:24:39Z
updated: 2023-05-03T16:16:28Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/15421902578701-Minecraft-Beta-Preview-1-20-0-23
---

**Posted:** May 3, 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![preview_20-4.png](https://feedback.minecraft.net/hc/article_attachments/15421963180301)

It’s time for another Minecraft Preview, and this week we have quite a few changes and improvements to Trails & Tales features! We love to hear from you so please send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/)! Take a look at the full list of changes below!\
\

**Features and Bug Fixes:**

**Accessibility**

- Screen reader now properly reads description in popping window after disabling “Require Encrypted Websockets”
- Screen reader now properly reads description in popping window after disabling “Allow mobile data for online play”

**Amethyst Resonance**

- Blocks of Amethyst placed above or below Sculk Sensors or Calibrated Sculk Sensors now also resonate vibrations ([MCPE-169562](https://bugs.mojang.com/browse/MCPE-169562))

**Audio**

- Generic Brush sounds are now audible ([MCPE-168805](https://bugs.mojang.com/browse/MCPE-168805))

**Blocks**

- Sculk Sensors, Calibrated Sculk Sensors, and Sculk Shriekers will no longer lose in-flight vibrations when leaving the world
- Fixed an issue where the Calibrated Sculk Sensor tendrils were not lighting uniformly
- Fixed custom textures that override vanilla blocks with aux metadata as a list of textures

**Pitcher Plant**

- Bone Meal now can’t be used on a Pitcher Plant to duplicate the flower ([MCPE-169492](https://bugs.mojang.com/browse/MCPE-169492))
- Breaking Pitcher Plants with Fortune enchanted tools will now not drop more than one flower

**Sniffer Egg**

- Sniffer Egg now uses a custom cracking sound instead of the one for Turtle Eggs ([MCPE-169497](https://bugs.mojang.com/browse/MCPE-169497))
- Sniffer Egg no longer gets destroyed by fluid water or lava ([MCPE-169491](https://bugs.mojang.com/browse/MCPE-169491))
- Sniffer Egg can now be placed in water and lava

**Torchflower**

- Bone Meal now can’t be used on Torchflowers to spawn other flowers
- Using Bone Meal on a Torchflower Crop will now always make it grow one stage

**Calibrated Sculk Sensor**

- Calibrated Sculk Sensor now effectively filters vibration frequencies when powered by any power-emitting redstone component ([MCPE-168885](https://bugs.mojang.com/browse/MCPE-168885), [MCPE-169530](https://bugs.mojang.com/browse/MCPE-169530))

**Experience Orbs**

- Experience Orbs now merge when spawned with the summon command ([MCPE-167247](https://bugs.mojang.com/browse/MCPE-167247))

**Gameplay**

- Banner Shields now take the same Shield from the Grindstone as Java Edition ([MCPE-169540](https://bugs.mojang.com/browse/MCPE-169540))
- Third-person camera no longer creates a black pane when short sneaking under a 1.5 block gap ([MCPE-166581](https://bugs.mojang.com/browse/MCPE-166581))

**Brush**

- Brushes no longer crash the game upon breaking ([MCPE-169654](https://bugs.mojang.com/browse/MCPE-169654))

**Music**

- Relic Music Disk is now included in the loot table for Trail Ruins ([MCPE-169929](https://bugs.mojang.com/browse/MCPE-169929))

**General**

- Splitscreen players are no longer disconnected when one leaves ([MCPE-168695](https://bugs.mojang.com/browse/MCPE-168695))
- Added Planting the Past achievement
- Added Careful Restoration achievement

**Graphical**

- Screen fade effect when sleeping or using camera fade command will no longer appear when a picture is taken

**Sniffer**

- Fixed the Sniffer’s head and ears z-fighting ([MCPE-169423](https://bugs.mojang.com/browse/MCPE-169423))

**Sculk Sensor Phases**

- Sculk Sensors and Calibrated Sculk Sensors now play their “power off” sound at the end of the Cooldown phase instead of the Active phase

**Touch Controls**

- Fixed issues with keyboard navigation on some menu screens on iOS and Android

**User Interface**

- Animations in ‘Welcome to Minecraft’ modals are no longer rendered upside down on Android ([MCPE-169522](https://bugs.mojang.com/browse/MCPE-169522))
- Button sounds will no longer sometimes occur when clicking a disabled button ([MCPE-141124](https://bugs.mojang.com/browse/MCPE-141124))
- Fixed capitalization in title of Behavior Pack message modal ([MCPE-156331](https://bugs.mojang.com/browse/MCPE-156331))
- Fixed a bug where respawning in VR sometimes softlocks the player in the death screen
- Added new Cubemap background
  - View now rotates clockwise and is tilted down unless a global resource pack replaces the cubemap background
- Text shadowboxes now have the correct opacity on interactable block screens

**Vanilla Parity**

- Distinct green particles are now emitted by the player under effect of Hero of the Village status effect\
  \

**Technical Updates:**

**Dedicated Server**

Content logs now show in dedicated server console window with a configurable log level using these new server properties:

- content-log-level - Sets the minimum level for content logs to output. Allowed values: “verbose”, “info”, “warning”, “error”. Default: info
  - Note: This log level also affects content logs written to disk when using content-log-file-enabled=true
- content-log-console-output-enabled - Enables or disables content log output to the console window. Default: info

**Entities**

- Custom entities with internal-only components or AI goals will fail to load in game
- Custom entities are restricted to overriding Vanilla entities released before 1.20. Invalid entities used in the “identifier” or “runtime_identifier” field will result in content errors

**Items**

- Released the “minecraft:display_name” item component out of experimental in json formats 1.20.0 and higher
- Released the “minecraft:durability” item component out of experimental in json formats 1.20.0 and higher
- Released the “minecraft:fuel” item component out of experimental in json formats 1.20.0 and higher
- Released the “minecraft:entity_placer” item component out of experimental in json formats 1.20.0 and higher
- Released the “minecraft:icon” item component out of experimental in json formats 1.20.0 and higher

**User Interface**

- Fixed a graphical issue where a gamepad icon would display over another screen

**Accessibility**

- Added new “Chat Message Duration” accessibility setting to change how long chat messages remain on screen (3 seconds by default)
- Renamed “Notification Duration” to “Toast Notification Duration” and fixed an issue were the setting had no affect on how long toasts remained on display\
  \

**Experimental Technical Features:**

**Add-Ons and Script Engine**

- Added PlacementPosition (“minecraft:placement_position”) BlockTrait block trait
  - Adds states “minecraft:block_face” and/or “minecraft: vertical_half”
  - “minecraft:block_face” is a six value string state ("down", "up", "north", "south", "east", "west") that contains info on which block face the player clicked on when the block was placed
  - “minecraft:vertical_half” is a 2 value string state ("bottom", "top") with info on whether the block was placed in the lower or upper half of the block position
  - Both of these states are set when the block is placed (onPlayerPlace)

**API**

- Moving getComponent(componentId: string): EntityComponent \| undefined method to 1.2.0
- Moving getComponents(): EntityComponent\[\] method to 1.2.0
- Moving hasComponent(componentId: string): boolean method to 1.2.0
- Moving EntityComponent class to 1.2.0
- Moving EntityBaseMovementComponent class to 1.2.0:
  - Moving readonly maxTurn: number property to 1.2.0
  - Moving the following additional EntityBaseMovementComponent subclasses to 1.2.0:
    - EntityMovementAmphibiousComponent
    - EntityMovementBasicComponent
    - EntityMovementFlyComponent
    - EntityMovementGenericComponent
    - EntityMovementHoverComponent
    - EntityMovementJumpComponent
    - EntityMovementSkipComponent
- Renamed EntityIsDyableComponent class to EntityIsDyeableComponent and moved to 1.2.0
- Moving the following additional EntityComponent subclasses to 1.2.0:
  - EntityCanClimbComponent
  - EntityCanFlyComponent
  - EntityCanPowerJumpComponent
  - EntityColorComponent
  - EntityFireImmuneComponent
  - EntityFloatsInLiquidComponent
  - EntityFlyingSpeedComponent
  - EntityFrictionModifierComponent
  - EntityGroundOffsetComponent
  - EntityIsBabyComponent
  - EntityIsChargedComponent
  - EntityIsChestedComponent
  - EntityIsHiddenWhenInvisibleComponent
  - EntityIsIgnitedComponent
  - EntityIsIllagerCaptainComponent
  - EntityIsSaddledComponent
  - EntityIsShakingComponent
  - EntityIsShearedComponent
  - EntityIsStackableComponent
  - EntityIsStunnedComponent
  - EntityIsTamedComponent
  - EntityMarkVariantComponent
  - EntityPushThroughComponent
  - EntityScaleComponent
  - EntitySkinIdComponent
  - EntityVariantComponent
  - EntityWantsJockeyComponent
- Added class EffectTypes
  - Added function get(identifier: string): EffectType - Returns the effect type if it exists
  - Added function getAll(): EffectType\[\] - Returns all of the effects
- Updated class Effect
  - Updated duration property. Is the duration of the effect in ticks
  - Added property typeId. Returns the effect’s type id
- Added interface EntityEffectOptions { amplifier?: number, showParticles?: boolean }
  - Added function removeEffect(effectType: EffectType \| string): boolean - Removes an effect from an Entity. Returns false if the effect is not found or does not exist
  - Updated function getEffect(effectType: EffectType \| string): Effect \| undefined - Gets the effect if it exists on the entity. Otherwise returns undefined
  - Updated function addEffect(effectType: EffectType \| string, duration: number, options?: EntityEffectOptions): boolean - Adds an effect to the Entity. Returns false if the effect cannot be added ( the effect does not exist, the duration is negative)
- Items using the minimum duration for the “minecraft:fuel” component now work in the Blast Furnace and Smoker

**Items**

- Items with the ‘minecraft:throwable’ component now trigger the ‘throw’ sound effect when used

**Scripting**

- After Events
  - All non-before events have been moved from world.events to world.afterEvents
  - events has been removed from the world object
  - After events do not execute immediately, instead they are deferred until a later point in the tick when they are flushed. It is guaranteed that all events fired in a tick are flushed within a tick
