---
title: Minecraft Beta & Preview - 1.20.10.23
date: 2023-06-14T14:06:49Z
updated: 2023-06-14T17:13:00Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/16744110942349-Minecraft-Beta-Preview-1-20-10-23
---

**Posted:** 14 June 2023

**Information on the Minecraft Preview and Beta:**

-   These work-in-progress versions can be unstable and may not be representative of final version quality
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot of a villager in a forest, with a fallen birch tree with a mushroom on it. There is also a camel in the background, leashed to a fence, with a campfire and some barrels nearby.](https://feedback.minecraft.net/hc/article_attachments/16744150904333)

A new Minecraft Preview and Beta update is here, more tweaks and changes to improve your gameplay experience! Please continue to send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/), they are much appreciated! Here's an overview of what's in the update:

# **Experimental Features**

## **Recipe Unlocking**

-   We tested having a notification that informed you about new ways of creating recipes you've already unlocked. It didn't feel helpful. Do you know how many ways there are to make sticks?! Yeah, a lot. We are removing this version of the unlocking notification
-   Spectator mode is for spectating. Not unlocking recipes! With this fix recipes won't unlock when you're in spectator mode ([MCPE-171073](https://bugs.mojang.com/browse/MCPE-171073))
-   Unlocking a new recipe no longer sets the inventory toggle option to be \"All\". The craftable toggle will now reliably stay the way you left it

## **Sneak and Crawl**

-   Fixed an issue that caused players to automatically sneak while on ladders ([MCPE-166569](https://bugs.mojang.com/browse/MCPE-166569))
-   Fixed a bug that caused the player to get stuck at the top of a ladder when sneaking ([MCPE-171022](https://bugs.mojang.com/browse/MCPE-171022))
-   Crawling head rotation no longer follows camera rotation directly ([MCPE-170838](https://bugs.mojang.com/browse/MCPE-170838))
-   Fixed an issue where Swift Sneak did not increase Crawling speed ([MCPE-170885](https://bugs.mojang.com/browse/MCPE-170885))
-   Fixed an issue where legacy Crawling was not working correctly with the Sneak and Crawl toggle turned off
-   Fixed an issue where mobs did not have the correct collision box when spawning ([MCPE-170983](https://bugs.mojang.com/browse/MCPE-170983))
-   Short Sneaking has now been 'de-experimentified' and is available during normal gameplay
-   Crawling animation is no longer triggered while gliding below blocks ([MCPE-170889](https://bugs.mojang.com/browse/MCPE-170889))
-   Players can now be forced into sneak/crawl state while flying

# **Features and Bug Fixes**

## **General**

-   Fixed player capes not properly flapping when moving forward but looking sideways (fixed for real this time!) ([MCPE-153446](https://bugs.mojang.com/browse/MCPE-153446))
-   Reduce cases where players might see \'Unable to connect\' errors due to \'Expired Auth from Discovery\' ([MCPE-170814](https://bugs.mojang.com/browse/MCPE-170814))
-   Fixed issues with unresponsive or laggy input when using Mouse together with a Controller ([MCPE-167447](https://bugs.mojang.com/browse/MCPE-167447))

## **Mouse Input**

-   Improved handling of simultaneous mouse clicks, triggering each individual associated action/response

## **Accessibility**

-   Text-to-speech narrator will now say \"Slash button\" when hovering over the \"/\" button in the chat screen
-   Default chat duration now set to 10 seconds while default toast notification duration remains at 3 seconds
-   Text-to-speech Narrator now reads item names when selecting items in the hotbar

## **Actors**

-   Fixed an issue where it was not possible to switch mounts without first manually dismounting ([MCPE-170894](https://bugs.mojang.com/browse/MCPE-170894))

## **Blocks**

-   Pumpkin, Carved Pumpkin and Lit Pumpkin \"minecraft:cardinal_direction\" state string is now accepted during a world update
-   Mushrooms are now able to spawn on fallen tree trunks ([MCPE-138333](https://bugs.mojang.com/browse/MCPE-138333))
-   Conduit now has the correct lighting when placed on ground ([MCPE-169732](https://bugs.mojang.com/browse/MCPE-169732))

## **Gameplay**

-   Recipe for crafting barrels with sticks is removed ([MCPE-170848](https://bugs.mojang.com/browse/MCPE-170848))
-   Entities no longer continue to freeze without Powder Snow if there is a Powder Snow block near the west & north side ([MCPE-169453](https://bugs.mojang.com/browse/MCPE-169453))

## **Chiseled Bookshelf**

-   The correct sound effect is now played when removing an enchanted Book from Chiseled Bookshelf ([MCPE-168119](https://bugs.mojang.com/browse/MCPE-168119))
-   Chiseled Bookshelf slot interactions are now symmetrical ([MCPE-164801](https://bugs.mojang.com/browse/MCPE-164801))

## **Boat**

-   Boats retain the ability to carry passengers when upgraded to Trails and Tales ([MCPE-169772](https://bugs.mojang.com/browse/MCPE-169772))
    -   Boats that were affected by this bug can once again carry passengers

## **User Interface**

-   Cursor no longer snaps to a random inventory slot using a controller ([MCPE-171203](https://bugs.mojang.com/browse/MCPE-171203))
-   Horse and Donkey jump bar, and camel dash bar, now scale properly to experience bar ([MCPE-156444](https://bugs.mojang.com/browse/MCPE-156444))

## **Commands**

-   */time query*command will now return the correct day and time of day when the absolute time is negative

# **Technical Updates**

## **Dedicated Server**

-   Fixed invalid entries in allowlist.json causing crash ([BDS-18133](https://bugs.mojang.com/browse/BDS-18133))

## **Add-Ons and Script Engine**

-   Actually fixed the bug that caused player capes to stop flapping when moving forward but looking sideways in the query.cape_flap_amount by switching the rotation used from the player\'s looking rotation to the player\'s body rotation ([MCPE-153446](https://bugs.mojang.com/browse/MCPE-153446))
-   Observer blocks use state \"minecraft:facing_direction\" instead of \"facing_direction\". \"minecraft:facing_direction\" uses string values (\"down\", \"up\", \"north\", \"south\", \"east\", \"west\")

## **Entities**

-   Custom entities are no longer restricted to overriding Vanilla entities released before 1.20. All Vanilla entities can be used in the \"identifier\" or \"runtime_identifier\" field, including Camel and Sniffer.

## **Items**

-   Released the \"minecraft:shooter\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"minecraft:throwable\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"minecraft:projectile\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"minecraft:can_destroy_in_creative\" item component out of experimental in json formats 1.20.10 and higher
-   Released the \"minecraft:hover_text_color\" item component out of experimental in json formats 1.20.10 and higher

## **Editor**

The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Learn [how to use](https://aka.ms/LearnEditor) the Editor and join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum, post bugs, view more detailed release notes. Tag us on social channels with #BedrockEditor.

-   Fixed a bug where error messages related to initial script loading were not being displayed in the log panel
-   /scriptEvent command can now be used in the editor without the need to enable the Beta APIs experiments
-   Fixed a bug where the viewport scaling was not working correctly on devices that use D3D11

# **Experimental Technical Updates**

## **API**

-   Dynamic Property identifiers are now limited to 1024 characters.
-   Removed MinecraftEffectTypes defined in *\@minecraft/server. See \@minecraft/vanilla-data NPM package for an equivalent.*

*Moved several APIs to stable 1.3.0:*

-   Moving *tryTeleport(location: Vector3, duration: number, options: ScriptTeleportOptions)* to *1.3.0*
-   Moving *teleport(location: Vector3, options: ScriptTeleportOptions)* to *1.3.0*
-   Moved function *getComponent* to *1.3.0*
-   Moved world event *PlayerJoinAfterEvent* to *1.3.0*
-   Moved world event *PlayerLeaveAfterEvent* to *1.3.0*
-   Moved world event *PlayerSpawnAfterEvent* to *1.3.0*
-   Moved EntityComponent *EntityHealableComponent* to *1.3.0*
-   Moved EntityComponent *EntityHealthComponent* to *1.3.0*
-   Moved class *FeedItem* to *1.3.0*
-   Moved class *FeedItemEffect* to *1.3.0*
-   Moving *addEffect(effectType: string \| EffectType, duration: number, options: EntityEffectOptions)* to *1.3.0*
-   Moved *getEffect(effectType: string \| EffectType)* to *1.3.0*
-   Moved *getEffects* to *1.3.0*
-   Moved *removeEffect(effectType: string \| EffectType)* to *1.3.0*
-   AfterEvents
    -   Moving *ButtonPushEvent* to *1.3.0*
    -   Moving *LeverActivateEvent* to *1.3.0*
-   Moved function *spawnEntity* to *1.3.0*
-   Moved function *spawnItem* to *1.3.0*

*Spawn Point Updates:*

-   Removed function *clearSpawn*
-   Removed property *spawnDimension*
-   Added function *getSpawnPoint: DimensionLocation \| undefined*- Returns the player\'s spawn point
-   Added function *setSpawnPoint(spawnPoint?: DimensionLocation): void*- Sets the player\'s spawn point, or clears it if *spawnPoint* is *undefined*
-   Renamed function *getDefaultSpawnPosition* to *getDefaultSpawnLocation*
-   Renamed function *setDefaultSpawn* to *setDefaultSpawnLocation*
-   DimensionLocation
    -   Added new interface *DimensionLocation*- Represents a location in a dimension
-   Added *hasParticipant* function to *ScoreboardObjective*.
-   The following functions in *ScoreboardObjective* can now accept *Entity* or *string* types as *participants*:
    -   *getScore*
    -   *setScore*
    -   *removeParticipant*
-   Removed *getScore*, *setScore* from *ScoreboardIdentity* and *Scoreboard*.

Removed the *removeFromObjective* function from *ScoreboardIdentity*.

-   Fixed bug where scoreboard values would not be updated on the client when updated from script.
-   Raycasting
    -   Changed function *getBlockFromRay*
        -   Changed return type from *Block* to *BlockRaycastHit \| undefined*
    -   Changed function *getEntitiesFromRay*
        -   Changed return type from *Entity\[\]* to *EntityRaycastHit\[\]*
    -   Changed function *getBlockFromViewDirection*
        -   Changed return type from *Block* to *BlockRaycastHit \| undefined*
    -   Changed function *getEntitiesFromViewDirection*
        -   Changed return type from *Entity\[\]* to *EntityRaycastHit\[\]*
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
    -   Added helper function *isValid* to several classes in order to check if the object is valid. This can safely be used on any handle to a native object before accessing or using the object, to ensure the underlying object still exists and is valid to use.
        -   Block (checks the block is a valid position in bounds and the containing chunk is loaded & ticking)
        -   Container (checks the relevent container inventory exists and is valid)
        -   Effect (checks the owning entity is valid and the effect exists on that entity)
        -   ScreenDisplay (checks the owning player is valid)
        -   ScoreboardObjective (checks the objective entry exists and is attached to a valid scoreboard)
        -   Entity (checks that the entity exists in the world. Will return true if the entity is dead)
            -   Player
            -   SimulatedPlayer (Note simulated players do not automatically get removed from the world, so *isValid* will return true long after they are dead)
        -   ContainerSlot (checks the item context is valid: Container exists in the world, such as the owning entity, and the slot is within the container bounds)
            -   Already existed as a readonly property, changed to a method for consistency
        -   Component
            -   EntityAttributeComponent (checks the owning entity is valid and the attribute exists on the entity)
            -   BlockLiquidContainerComponent (checks block exists and is a valid cauldron type)
                -   Added read only method *isValidLiquid* which checks if the liquid in the cauldron matches the component in question (EG. BlockLavaContainerComponent checks for lava liquid)
            -   EntityComponent (checks the owning entity exists)
            -   ItemComponent (checks the owning item exists)

```{=html}
<!-- -->
```
-   World
-   Renamed *getTime* to *getTimeOfDay*.
-   Renamed *setTime* to *setTimeOfDay*.
-   *setTimeOfDay* now accepts a *TimeOfDay* enum as an argument.
-   The *timeOfDay* argument for *setTime* must now be within 0-23999 (inclusive).
-   Added *getDay*

Updated the following enums\' values to be PascalCase instead of camelCase:

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
-   *WeatherType *

## **Experimental Cameras**

-   Camera preset JSON now supports an optional bool \'player_effects\' value which causes game rendering to use player effect state (for example night vision) when this preset is active. Added the \"example:example_player_effects\" preset to demonstrate this
-   Camera command can now take a \'facing\' option instead of a \'rot\' option with a target entity or position specified
-   Fixed custom cameras to not use the \'inside block\' effect when player head is inside a block ([MCPE-170206](https://bugs.mojang.com/browse/MCPE-170206))

## **Items**

-   Deprecate \"minecraft:render_offsets\" component in json formats 1.20.10 and higher
-   Changed charging action behavior in \"minecraft:shooter\" to match Vanilla crossbow Changed shooting behavior for a charged \"minecraft:shooter\" with an empty inventory/offhand to successfully shoot the charged ammunition
