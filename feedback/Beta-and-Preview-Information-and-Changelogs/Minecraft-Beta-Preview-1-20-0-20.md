---
title: Minecraft Beta & Preview - 1.20.0.20
date: 2023-04-12T08:44:56Z
updated: 2023-04-13T07:26:26Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/14770046776205-Minecraft-Beta-Preview-1-20-0-20
---

**Posted:** 12 April, 2023

**Information on the Minecraft Preview and Beta: **

-   These work-in-progress versions can be unstable and may not be representative of final version quality 
-   Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
-   The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

![A Minecraft screenshot featuring armor stands holding shields wit banner patterns applied, and wearing trimmed armor. There is also a sniffer egg and a pitcher plant in the scene, and a cherry grove biome in the background.](https://feedback.minecraft.net/hc/article_attachments/14770044847245)

Do you tend to play Minecraft by spawning in and *thwacking* the first hostile mob you see? Then I have good news for you! You can now protect yourself in style with a new feature: the customizable shield. This parity feature not only brings shield banner customization to Minecraft: Bedrock Edition, but gives you a *very* fashionable (if somewhat flammable) defence tool. Just combine your shield with your favorite banner, and away you go. There are also new potions colors (ooo, distinguishable!), new sniffer breeding mechanics (ooo eggs!) and even a brand-new seed for your newly de-experimentified sniffer friends to seek out: the pitcher pod! As always, don't forget to send us all your feedback and ideas at [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

# **Experimental Features**

## **Accessibility Features**

-   Potions, Tipped Arrows, and mob effects have had their colors adjusted to make them more distinguishable from each other ([MCPE-168357](https://bugs.mojang.com/browse/MCPE-168357))

## **Archaeology**

-   Miner Pottery Shards can now be found as loot when brushing Suspicious Sand blocks in Desert Pyramids ([MCPE-168921](https://bugs.mojang.com/browse/MCPE-168921))
-   Shelter Pottery Shard now has the correct display string ([MCPE-168836](https://bugs.mojang.com/browse/MCPE-168836))

## **Brush**

-   Brushes can now be enchanted with Mending, Unbreaking, and Curse of Vanishing ([MCPE-167264](https://bugs.mojang.com/browse/MCPE-167264))
-   The Brush now displays a tooltip when aimed at Suspicious Blocks on touch devices
-   Brushing other non-Suspicious blocks will now produce a generic brushing sound
-   The Brush is now dealt damage upon brushing brushable blocks. No damage is taken when breaking blocks ([MCPE-167263](https://bugs.mojang.com/browse/MCPE-167263))
-   Use of a Brush will no longer be interrupted if clicking the left mouse button while brushing (holding right mouse button) ([MCPE-167226](https://bugs.mojang.com/browse/MCPE-167226))

## **Bamboo Woodset**

-   Aligned the flammability of the Bamboo woodset to match the other woodsets ([MCPE-163416](https://bugs.mojang.com/browse/MCPE-163416))

## **Blocks**

-   Suspicious Sand and Suspicious Gravel do not drop anymore when falling on top of Daylight Sensors, Signs, Banners, Mob Heads, Conduits, or Campfires ([MCPE-167163](https://bugs.mojang.com/browse/MCPE-167163))
-   Rules for placing blocks on top of Decorated Pots are now aligned between Java and Bedrock ([MCPE-168041](https://bugs.mojang.com/browse/MCPE-168041))
    -   Decorated Pots no longer provide full support on their top face, meaning Scaffolding, Redstone Dust, Redstone Repeaters, Redstone Comparators, Levers, Glow Lichen, Sculk Veins, Pointed Dripstone, and Door Blocks can no longer be placed on top of them
    -   Bells can only be placed on full faces of blocks
    -   Rails can now only be placed on full faces of blocks
    -   Amethyst Cluster blocks can only be placed on full faces of blocks
    -   Button blocks can only be placed on full faces of blocks
    -   Top Snow can only be placed on full faces of blocks
    -   Corals can only be placed on full faces of blocks
    -   Sea Pickles can now be placed on top of Decorated Pots
-   Suspicious Sand and Suspicious Gravel do not drop anymore when falling on top of Sculk Sensors or Calibrated Sculk Sensors

## **Cherry Grove**

-   Cherry Grove biome can no longer generate with invisible Double Tallgrass blocks above Pink Petals ([MCPE-168829](https://bugs.mojang.com/browse/MCPE-168829))
-   Dandelions no longer generate in the Cherry Grove biome ([MCPE-168075](https://bugs.mojang.com/browse/MCPE-168075))

## **Hanging Signs**

-   Decreased the maximum number of characters allowed in Hanging Signs, while increasing their font size ([MCPE-163337](https://bugs.mojang.com/browse/MCPE-163337))
-   Arrows no longer get stuck shaking violently at the bottom of Hanging Signs ([MCPE-164249](https://bugs.mojang.com/browse/MCPE-164249))
-   Hanging Signs and other blocks can now be attached to Anvil (bottom), Chorus Flower (bottom), Mob Spawner (sides, and bottom), Grindstone (bottom when the Grindstone is hanging), Daylight Sensor (bottom), and Turtle Egg (bottom). Hanging Signs and other blocks can no longer be attached to the side of Dirt Path and Farm Land ([MCPE-164632](https://bugs.mojang.com/browse/MCPE-164632))
-   Hanging Signs attached to the bottoms of Decorated Pots now attach with a v-shaped chain to the Pot ([MCPE-168047](https://bugs.mojang.com/browse/MCPE-168047))
-   Increased the volume of sounds emitted by Hanging Signs ([MCPE-163554](https://bugs.mojang.com/browse/MCPE-163554))
-   Crimson, Warped, and Bamboo Hanging Signs now have custom sounds to match their wood type ([MCPE-164246](https://bugs.mojang.com/browse/MCPE-164246))
-   The UI background for Signs and Hanging Signs now always matches the material they are made of ([MCPE-168817](https://bugs.mojang.com/browse/MCPE-168817))

## **Armor Trims**

-   Untrimmed armor pieces now render correctly in-hand and in the world when carrying an equivalent armor piece with trim
-   When swapping a trimmed armor piece with an equivalent piece without trims, both items now render correctly in the HUD hotbar
-   When swapping a trimmed armor piece with an equivalent piece without trims, both items now render correctly in UI-slots

## **Camel**

-   Camels now straighten their heads after sitting down, instead of looking up or down ([MCPE-163501](https://bugs.mojang.com/browse/MCPE-163501))
-   Camels\' heads no longer clip into passengers when looking up ([MCPE-164719](https://bugs.mojang.com/browse/MCPE-164719))
-   The Camel\'s dash bar is now displayed in Pocket UI as well ([MCPE-163475](https://bugs.mojang.com/browse/MCPE-163475))
-   Camel\'s dismount hint is now properly localized ([MCPE-166505](https://bugs.mojang.com/browse/MCPE-166505))

## **Boats**

-   Mobs are now correctly positioned above the surface of Bamboo Rafts when riding them

# **Features and Bug Fixes**

## **Shield Customization**

-   A top Vanilla Parity feature request! A Shield can now be combined with a Banner to apply its pattern on it
    -   The banner is consumed on use
    -   A Shield can be combined with a Banner only if no pattern was previously applied

## **Sniffer**

-   The Sniffer and the Torchflower has now been "de-experimentified" and is available during normal gameplay
    -   Removed the Sniffer Experimental toggle, since it has no active experimental content
-   Sniffer Egg now available
    -   When two Sniffers breed, they do not immediately spawn a Snifflet; instead, a Sniffer egg is dropped
    -   Hatching
        -   When placed on Moss, the egg will hatch after approximately 10 minutes
        -   On all other blocks, it will hatch in approximately 20 minutes

## **Pitcher Plant**

-   The Sniffer can now occasionally sniff up a Pitcher Pod item
    -   This pod, when planted in Farmland, grows into a Pitcher Crop, which has five growth stages
    -   Once fully grown, the Pitcher Crop can be harvested, yielding a two-block-tall Pitcher Plant

## **Torchflower**

-   Torchflowers placed by players now have visual random locations in their blocks, aligning with their hitboxes ([MCPE-167176](https://bugs.mojang.com/browse/MCPE-167176))
-   Torchflower Seeds can now be used in the Composter ([MCPE-167200](https://bugs.mojang.com/browse/MCPE-167200))
-   Torchflower grown from seeds now has a hitbox that matches the model ([MCPE-167177](https://bugs.mojang.com/browse/MCPE-167177))
-   Bees now pollinate Torchflowers and Torchflowers can now be used to tempt and breed Bees ([MCPE-167220](https://bugs.mojang.com/browse/MCPE-167220))
-   Using Pick Block on a fully grown Torchflower planted on Farmland now gives a Torchflower instead of Torchflower Seeds ([MCPE-167217](https://bugs.mojang.com/browse/MCPE-167217))
-   Suspicious Stew can now be crafted with Torchflower ([MCPE-167977](https://bugs.mojang.com/browse/MCPE-167977))
-   Chickens and Parrots can now eat Torchflower Seeds ([MCPE-167975](https://bugs.mojang.com/browse/MCPE-167975))
    -   Torchflower Seeds can now be used to tame Parrots
    -   Torchflower Seeds can now be used to tempt and breed Chickens

## **Vanilla Parity**

-   Woodland Mansion\'s entrance now uses Cobblestone Slabs ([MCPE-169038](https://bugs.mojang.com/browse/MCPE-169038))
-   Iron Bars and Glass Panes now can connect to Pistons ([MCPE-64745](https://bugs.mojang.com/browse/MCPE-64745))
-   Dead Bush can now be placed on Grass Blocks and Moss Blocks ([MCPE-125931](https://bugs.mojang.com/browse/MCPE-125931))
-   The map color for Black Terracotta now matches Java Edition ([MCPE-166791](https://bugs.mojang.com/browse/MCPE-166791))

## **Accessibility**

-   Screen reader now describes function of \"delete world\" button in storage menu
-   Tweaked the contrast of the text inside of header for list of Worlds in Storage Settings menu

## **Gameplay**

-   Fixed an issue where a Piston could become invisible in rare cases
-   Players no longer take fall damage when falling through water at high speeds ([MCPE-152485](https://bugs.mojang.com/browse/MCPE-152485))
-   Players no longer fall through Farmland Blocks after jumping on them
-   Players no longer fall through Mud Blocks or Farmland Blocks if they are standing on the block as it becomes a complete block ([MCPE-164677](https://bugs.mojang.com/browse/MCPE-164677))
-   Fixed an issue where placing blocks while sneaking on an interactable block was not working as intended with client authoritative movement ([MCPE-168280](https://bugs.mojang.com/browse/MCPE-168280))
-   Fixed an issue where an Armor Stands pose would not change when right clicked while the player has sneak held and flying ([MCPE-168548](https://bugs.mojang.com/browse/MCPE-168548))
-   Weighted Pressure Plates now update their signal strength immediately when multiple items are placed on top ([MCPE-156773](https://bugs.mojang.com/browse/MCPE-156773))

## **Blocks**

-   Wooden Logs generated in Woodland Mansions now have the correct facing ([MCPE-168387](https://bugs.mojang.com/browse/MCPE-168387))
-   Removed redundant lava_cauldron block ([MCPE-39974](https://bugs.mojang.com/browse/MCPE-39974))
-   The sounds emitted by players and mobs stepping, falling, jumping, or landing on top of Sculk Sensors are now affected by the \"Players\" sound slider

## **Player**

-   After choosing the Main Menu option on the death screen, the player hitbox will be the correct size when returning to that world ([MCPE-167045](https://bugs.mojang.com/browse/MCPE-167045))

## **General**

-   Fixed an issue where a locally hosted dedicated server was not found by clients on the same machine
-   Fixed a bug that caused player capes to stop flapping when moving forward and looking sideways ([MCPE-153446](https://bugs.mojang.com/browse/MCPE-153446))
-   Sugar Cane no longer generates air pocket when generated underwater ([MCPE-161096](https://bugs.mojang.com/browse/MCPE-161096))
-   Added *spawn_item_event* event to *minecraft:spawn_entity* This event is called when an item is spawned
-   Added a progress handler when loading into a world that will wait up to a total of 15 seconds for the primary users appearance to load
-   Lowered the time it takes to start up and load into the start screen
-   Added a new splash text to celebrate Render Dragon launching everywhere

## **Graphical**

-   Fixed an issue in RTX where underwater light shafts from the moon would originate from the opposite angle of the moon sprite ([MCPE-118898](https://bugs.mojang.com/browse/MCPE-118898))

## **Item Rendering**

-   Broken and unbroken Elytra now render in-hand, in the world, and in Item Frames with the correct icon ([MCPE-19700](https://bugs.mojang.com/browse/MCPE-19700))

## **Mobs**

-   Ghasts now shoot fireballs out of their mouth instead of at eye level ([MCPE-35202](https://bugs.mojang.com/browse/MCPE-35202))
-   Boots do not z-fight anymore when worn by humanoid mobs and Armor Stands
-   The \"leg\" and \"belt\" parts of Leggings do not z-fight anymore when worn by humanoid mobs and Armor Stands

## **Multiplayer**

-   iOS now requests Local Network access in order to find games on the local network

## **User Interface**

-   Loading animation for adding friends is now the correct size ([MCPE-159261](https://bugs.mojang.com/browse/MCPE-159261))
-   The block type icon now appears in the Command Block UI screen ([MCPE-159970](https://bugs.mojang.com/browse/MCPE-159970))
-   Don\'t show retry cloud sync prompt when encountering an out of space error ([MCPE-162455](https://bugs.mojang.com/browse/MCPE-162455))
-   Screen UI now always has a focus in control when using a controller
-   Fixed a bug where the crosshair could be visible on the new death screen
-   Fixed a bug where text formatting codes would be shown on the new death screen
-   Fix bug where respawning in VR sometimes softlocked the player on the death screen
-   Changed the overlay color on the new death screen in full VR
-   Added a new camera effect on the new death screen
-   Doubled the resolution of the world thumbnails
-   Changed the world tag to no longer display \"-experimental\" on worlds that only use the Holiday Creator Features experiment

# **Technical Updates**

## **Editor**

-   Removed additional deprecated blocks and updated to sort blocks alphabetically
-   Fixed Molang animation pausing in Editor for Guardian mobs
-   Fixed Editor player dying in Tool Mode
-   Fixed disabled command execution for /execute and command block
-   Closed emoting and achievement loopholes in Editor

## **Commands**

-   When typing a slash command, auto-complete no longer suggests block-states that are already part of the typed command ([MCPE-168055](https://bugs.mojang.com/browse/MCPE-168055))
-   Improved performance when preparing commands, most noticeable when opening the command window for the first time in a world, but also when loading Command Blocks for old command versions
-   Commands will still work with \"carpet\", but only new carpet name will be suggested in the command prompt
    -   \"carpet\" block is now split into unique variants of 16 colors, namely \"white_carpet\", \"orange_carpet\", \"magenta_carpet\", \"light_blue_carpet\", \"yellow_carpet\", \"lime_carpet\", \"pink_carpet\", \"gray_carpet\", \"light_gray_carpet\", \"cyan_carpet\", \"purple_carpet\", \"blue_carpet\", \"brown_carpet\", \"green_carpet\", \"red_carpet\", \"black_carpet\"
-   Commands will still work with \"log\", but \"log\" won\'t be suggested in the command prompt, rather the new names will
    -   \"log\" was split into unique instances, namely \"oak_log\", \"spruce_log\", \"birch_log\" and \"jungle_log\"
    -   \"log2\" was split into unique instances, namely \"acacia_log\" and \"dark_oak_log\"
-   Commands will still work with \"coral\", but \"coral\" won\'t be suggested in the command prompt, rather the new names will
    -   \"coral\" was split into unique instances, namely \"tube_coral\", \"brain_coral\", \"bubble_coral\", \"fire_coral\", \"horn_coral\", \"dead_tube_coral\", \"dead_brain_coral\", \"dead_bubble_coral\", \"dead_fire_coral\" and \"dead_horn_coral\"

## **Add-Ons**

-   Fixed a bug that caused player capes to stop flapping when moving forward but looking sideways in the *cape_flap_amount* by switching the rotation used from the player\'s looking rotation to the player\'s body rotation ([MCPE-153446](https://bugs.mojang.com/browse/MCPE-153446))

## **General**

-   Custom items using JSON formats 1.16.100 and formats past 1.17.0 can be loaded without the Holiday Creator Feature toggle if there are no Holiday components used
-   The *minecraft:friction* component is no longer ignored when calculating ground friction

## **Items**

-   Any item use, like using a Brush or Spyglass or eating an Apple now send item interact events that cause vibrations picked up by Sculk Sensors and Wardens
-   Items with the Entity Placer item component will now successfully create the actor on air blocks if the *\"dispense_on\"* field is empty
-   Items with the Entity Placer item component can now be used on a Mob Spawner to change the Spawner\'s actor spawn type. The item must have a format version of at least 1.19.80
-   Removed the non-functional *\'on_repaired\'* parameter from the *\'minecraft:repairable\'* item component

## **Molang**

-   Fixed a crash affecting some Marketplace packs preventing them from loading
    -   There is now a limit on the amount of nested sub-expressions each Molang expression can have

# **Experimental Technical Updates**

## **Add-Ons and Script Engine**

-   Added experimental support for BlockTraits in block JSON. BlockTraits are a shortcut for creators to add Vanilla BlockStates and setter functions to data-driven blocks
    -   Can parse PlacementDirection (\"minecraft:placement_direction\") BlockTrait (adds the \"minecraft:cardinal_direction\" BlockState and onPlayerPlace setter function)
    -   Can access the \"minecraft:cardinal_direction\" state on blocks that apply the \"placement_direction\" trait in block_property Molang queries and set_block_property EventResponses
    -   Note: Use of BlockTraits in JSON is currently behind the \"Upcoming Creator Features\" toggle

## **Scripting**

-   System Events
    -   Further separation of events into distinct before\* and after\* handling, with some restrictions on the execution of state updates in a before event:
    -   All before events moved from *events* into *world.beforeEvents* property. The \"before\" prefix has been removed. Functions that alter world state are prohibited in before event callbacks. Read-only methods and properties are allowed. Set methods are limited to the event object itself. Any use of restricted methods and properties will throw an exception.
    -   For example, *events.beforeWatchdogTerminate* is now considered a \"before\" event. Functions that alter world state are prohibited in before event callbacks. Read-only methods and properties are allowed. Set methods are limited to the event object itself. Any use of restricted methods and properties will throw an exception
    -   For example, *events.scriptEventReceived* is now considered an \"after\" event. After event callbacks are executed in a deferred manner. Using */scriptEvent something* will queue script to execute at a later point
-   Renamed Scripting Events
    -   Before Events renamed to *\*BeforeEvent* and event signals renamed to *\*BeforeEventSignal*
        -   Example: *BeforeItemUseEvent* renamed to *ItemUseBeforeEvent* and *BeforeItemUseEventSignal* renamed to *ItemUseBeforeEventSignal*
    -   Other events renamed to *\*AfterEvent* and event signals renamed to *\*AfterEventSignal*
        -   Example: *WeatherChangedEvent* renamed to *WeatherChangedAfterEvent* and *WeatherChangedEventSignal* renamed to *WeatherChangedAfterEventSignal*
    -   *chat* event renamed to *chatSend*
        -   *events.beforeChat* renamed to *world.events.beforeChatSend*
        -   *events.chat* renamed to *world.events.chatSend*
        -   *BeforeChatEvent* renamed to *ChatSendBeforeEvent*
        -   *BeforeChatEventSignal* renamed to *ChatSendBeforeEventSignal*
        -   *ChatEvent* renamed to *ChatSendAfterEvent*
        -   *ChatEventSignal* renamed to *ChatSendAfterEventSignal*
    -   Fixed a bug where *resolve()* would fail to resolve custom block properties
    -   Renamed *scoreboard* to *Entity.scoreboardIdentity*
    -   Item Events
        -   The *ItemStartUseOnEvent* now only fires for the first block that is interacted with when performing a build action
        -   The *ItemUseOnEvent* now only fires if the item is successfully used on a block
        -   *ItemUseOnEvent* property *blockLocation: Vec3* has been changed to *block: Block*
        -   *ItemStartUseOnEvent* property *blockLocation: Vec3* has been changed to *block: Block*
        -   *ItemStopUseOnEvent* property *blockLocation: Vec3* has been changed to *block: Block*
        -   *ProjectileHitEvent* property *faceLocation: Vec2* has been changed to *faceLocation: Vec3* - This position is relative to the bottom north-west corner of the block
        -   *ItemUseOnEvent* property *faceLocation: Vec2* has been changed to *faceLocation: Vec3* - This position is relative to the bottom north-west corner of the block
    -   Entity
        -   Added interface *teleportOptions {dimension?: Dimension, rotation?: Vector2, keepVelocity?: boolean, facingLocation?: Vector3, checkForBlocks?: boolean}*
        -   Added interface *Vector2 {x: number, y: number}*
        -   Added function *tryTeleport(location: Vector3, teleportOptions?: teleportOptions) : boolean* - Attempts to teleport the entity and returns false if the entity is unable to teleport safely (blocks surrounding teleport location or unloaded chunk)
        -   Changed function *teleport* to *teleport(location: Vector3, teleportOptions?: teleportOptions) : void* - Teleports an entity
    -   *Changed function setRotation to setRotation(rotation: Vector2) : void* - Sets the entity\'s rotation
    -   Changed function *getRotation* to *getRotation() : Vector2* - Gets the entity\'s rotation
    -   Updated function *addTag(tag: string): boolean* - The tag must be less than 256 characters
    -   Updated method *kill* to return boolean instead of void. If return value is true, entity can be killed, otherwise false
    -   Added interface *EntityApplyDamageOptions*. Additional options about the source of damage to use as input in *applyDamage*
    -   Added interface *EntityApplyDamageByProjectileOptions*. Additional options about the source of damage to use as input in *applyDamage* in case of projectile damage
        -   Updated method *applyDamage*. Renamed parameter *source* to *options*. Parameter type also changed from *EntityDamageSource* to *EntityApplyDamageOptions \| EntityApplyDamageByProjectileOptions*
    -   SimulatedPlayer
        -   Changed function *getHeadRotation* to *getHeadRotation() : Vector2* - Gets the simulated players head rotation
    -   *TitleDisplayOptions* will now accept floating point values
    -   Added new *WorldSoundOptions* and *PlayerSoundOptions* interface types for use with the *playSound* and *player.playSound* respectively
        -   *playSound* now requires a *location* argument
        -   When calling *playMusic* and *queueMusic*, an error will now be thrown if *volume* is less than *0.0*
        -   When calling *playMusic* and *queueMusic*, an error will now be thrown if *fade* is less than *0.0*
        -   When calling *playSound*, an error will now be thrown if *pitch* is less than *0.01*
        -   When calling *playSound*, an error will now be thrown if *volume* is less than *0.0*
        -   When calling *playSound*, an error will now be thrown if *pitch* is less than *0.01*
        -   When calling *playSound*, an error will now be thrown if *volume* is less than *0.0*
    -   Removed \"dye_powder\" item component
    -   Entity objects now persist across dimension changes and chunk reloading. This means that if you have a reference to an invalid Entity, it will become usable once the Entity has been transferred or reloaded. You can check whether an Entity is loaded or unloaded by reading its *lifetimeState* property
    -   Added read-only property *lifetimeState* - Returns the lifetime state of the Entity. Valid values include \"loaded\" and unloaded\"
    -   ItemDefinitionTriggeredEvent
        -   Renamed property *item* to *itemStack*
    -   ItemStartUseOnEvent
        -   Renamed property *item* to *itemStack*
        -   Replaced function *getBlockLocation* with read-only *property* *blockLocation: Vector3*
        -   Removed function *getBuildBlockLocation*
    -   ItemStopUseOnEvent
        -   Renamed property *item* to *itemStack*
        -   Replaced function *getBlockLocation* with read-only *property* *blockLocation: Vector3*
    -   ItemUseEvent
        -   Renamed property *item* to *itemStack*
    -   ItemUseOnEvent
        -   Renamed property *item* to *itemStack*
        -   Replaced function *getBlockLocation* with read-only property *blockLocation: Vector3*
        -   Replaced properties *faceLocationX* and *faceLocation* with read-only property *faceLocation: Vector2*
    -   BlockHitInformation
        -   Replaced properties *faceLocationX* and *faceLocation* with read-only property *faceLocation: Vector2*
