---
title: Minecraft - 1.19.30 (Bedrock)
date: 2022-09-19T15:24:40Z
updated: 2022-10-04T13:53:08Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/9272494067469-Minecraft-1-19-30-Bedrock-
---

We\'re excited to share Bedrock version 1.19.30 with you all! If any of you were worried about eating the bowl along with your stew, worry not: you can keep your bowl now.

As always, we appreciate all your help and input, please report any new bugs at [bugs.mojang.com](http://bugs.mojang.com/) and leave your feedback [feedback.minecraft.net](http://feedback.minecraft.net/).\
\

**Vanilla Parity:**

**Gameplay**

-   Modified the Fireball entity\'s collision box to match Java Edition
-   The Enchanting Table now produces a sound when enchanting an item
-   Amethyst blocks no longer produce sound when jumping off them
-   Fixed the bottom texture of the Melon block to match the top texture ([MCPE-31035](https://bugs.mojang.com/browse/MCPE-31035))
-   The item stack popup animation will now only play when a new item is added to the stack ([MCPE-23995](https://bugs.mojang.com/browse/MCPE-23995))
-   Fixed an issue where Light Blocks would be removed when placing an Armor stand over them ([MCPE-151856](https://bugs.mojang.com/browse/MCPE-151856))
-   Changed some structures names in the /locate command to have underscores, like in Java Edition (e.g. ancientcity -\> ancient_city); the old names will still work but will not show up in the autocomplete
-   Fixed an issue where Boats with Chests would not drop the Chest\'s contents when destroyed by the /kill command ([MCPE-160186](https://bugs.mojang.com/browse/MCPE-160186))
-   Eating a Stew will now leave the empty Bowl in the slot it was eaten from ([MCPE-56367](https://bugs.mojang.com/browse/MCPE-56367))
-   Drinking a Potion will now leave the empty Glass Bottle in the slot you drank it from rather than the first empty inventory slot ([MCPE-26436](https://bugs.mojang.com/browse/MCPE-26436))
-   Oak and Mangrove Fence Gates are now flammable ([MCPE-160098](https://bugs.mojang.com/browse/MCPE-160098))

**Mobs**

-   Fixed Hoglin and Zoglin hitbox size and hit range to match Java Edition ([MCPE-65424](https://bugs.mojang.com/browse/MCPE-65424))
-   Increased Sculk Shrieker and Sculk Sensor generation rates in Deep Dark and Ancient Cities to better match Java Edition ([MCPE-153525](https://bugs.mojang.com/browse/MCPE-153525))
-   Modified the Cat\'s head position while sitting to match Java Edition ([MCPE-46668](https://bugs.mojang.com/browse/MCPE-46668))
-   If a Villager has a Nametag, it is now displayed along with their trade tier ([MCPE-152644](https://bugs.mojang.com/browse/MCPE-152644))

**Spectator Mode (Experimental)**

-   Capes are no longer rendered while in Spectator Mode ([MCPE-156929](https://bugs.mojang.com/browse/MCPE-156929))
-   Spectator players in Lava Cauldrons no longer display the burning animation ([MCPE-160331](https://bugs.mojang.com/browse/MCPE-160331))
-   Players in Spectator Mode are no longer affected by the Powder Snow fog effect ([MCPE-156683](https://bugs.mojang.com/browse/MCPE-156683))
-   Sadly, any leashed animals will not follow spectators anymore ([MCPE-157065](https://bugs.mojang.com/browse/MCPE-157065))
-   Players in Spectator Mode no longer emit particles while sprinting ([MCPE-160397](https://bugs.mojang.com/browse/MCPE-160397))
-   Spectator players with status effects applied no longer emit particles ([MCPE-160398](https://bugs.mojang.com/browse/MCPE-160398))
-   Endermen no longer become angry at players in Spectator Mode ([MCPE-156742](https://bugs.mojang.com/browse/MCPE-156742))
-   Players in Spectator Mode can no longer interact with Sculk Sensors by swimming in water or lava ([MCPE-153879](https://bugs.mojang.com/browse/MCPE-153879))
-   Players switching into Spectator Mode will unhook any fishhooks attached to them
-   Players in Spectator mode can no longer be pushed by explosions ([MCPE-156687](https://bugs.mojang.com/browse/MCPE-156687))
-   Powder Snow no longer emits particles when spectators move through it ([MCPE-153876](https://bugs.mojang.com/browse/MCPE-153876))
-   Big Dripleaf no longer tilts when touched by players in Spectator Mode ([MCPE-156686](https://bugs.mojang.com/browse/MCPE-156686))
-   Players in Spectator Mode now keep their inventories and equipped items on death ([MCPE-156681](https://bugs.mojang.com/browse/MCPE-156681))
-   Spectators can no longer attract mob\'s attention when holding their favorite food ([MCPE-153882](https://bugs.mojang.com/browse/MCPE-153882))
-   The /testfor command can now target spectators ([MCPE-158042](https://bugs.mojang.com/browse/MCPE-158042))
-   The Spectator game mode can no longer be entered via the /gamemode 6 command, only via /gamemode spectator
-   Spectators using touch controls can no longer break Boats and Minecarts ([MCPE-158307](https://bugs.mojang.com/browse/MCPE-158307))
-   Parrots sitting on a player\'s shoulder now hop off when entering Spectator Mode
-   Animals and mobs with *follow_owner* behaviour no longer follow Spectators
-   Animals and mobs with *find_mount* behaviour no longer try to mount Spectators
-   Spectator Mode players won\'t have cold feet and now the Frost Walker enchant does not affect water
-   Pufferfish no longer react to nearby spectators

**Fixes:**

**Performance/Stability**

-   Fixed a bug that rarely caused the Villager\'s bounding box to become desynced with the server when sleeping
-   Fixed a bug causing an occasional crash when loading players in beds
-   The game no longer crashes when browsing Marketplace
-   Fixed a crash that could occur when resuming the game on Xbox
-   Fixed a bug where deleting cloud synced worlds would not delete the cloud version of the world when the player deletes the world locally
-   Fixed PlayStation 4 audio stuttering issues while framerate is low ([MCPE-158902](https://bugs.mojang.com/browse/MCPE-158902))
-   Fixed a crashing issue related to undyed Shulkers
-   Most common Marketplace connection issues will now automatically resolve themselves when conditions improve without needing to restart Minecraft ([MCPE-155025](https://bugs.mojang.com/browse/MCPE-155025))
-   Fixed performance issues when Striders are being ridden by baby Striders ([MCPE-146478](https://bugs.mojang.com/browse/MCPE-146478))
-   Fixed a crash that would occur on some devices when loading in worlds with texture packs applied ([MCPE-160800](https://bugs.mojang.com/browse/MCPE-160800))
-   Fixed a crash when uploading a world with no name using \"Play on Realm\" button

**Gameplay**

-   Music is now included in the mobile app and no longer has to be downloaded from Marketplace
-   Fixed issue where player would see inside of Top Snow when diving into it while wearing Elytra
-   Fireballs can no longer travel through portals to prevent an issue where they could become permanently stuck ([MCPE-160938](https://bugs.mojang.com/browse/MCPE-160938))
-   Pressing the Ctrl and Alt keys together will no longer make the Alt key get stuck down

**Mobs**

-   Endermen no longer get angry at Creative players ([MCPE-42977](https://bugs.mojang.com/browse/MCPE-42977))
-   Fixed a bug causing Leads to break with Allays after the owner player changes dimensions ([MCPE-158955](https://bugs.mojang.com/browse/MCPE-158955))
-   The Goat\'s ram animation was modified to slowly lower their head when preparing to ram ([MCPE-129477](https://bugs.mojang.com/browse/MCPE-129477))
-   Reduced the Enderman\'s teleport range to 32x32x32 to ensure that it cannot despawn itself by teleporting ([MCPE-152268](https://bugs.mojang.com/browse/MCPE-152268))
-   Allays and Bees should no longer get stuck on Lanterns or other low hanging objects ([MCPE-155777](https://bugs.mojang.com/browse/MCPE-155777))
-   EDU Toggle: NPC names default to only being displayed while looking at them

**Blocks**

-   Mud Brick Slab can now be placed as a top slab via commands ([MCPE-157852](https://bugs.mojang.com/browse/MCPE-157852))
-   Banners now spawn correctly in newly generated structures ([MCPE-160696](https://bugs.mojang.com/browse/MCPE-160696))
-   Coral Fans now look identical when placed facing North, West, East, and South ([MCPE-125311](https://bugs.mojang.com/browse/MCPE-125311))
-   White Glazed Terracotta is no longer missing from the Creative Mode inventory and is once again accessible through commands
-   Seagrass and Kelp are no longer classified as Coral Decorations in the Creative Mode inventory ([MCPE-44034](https://bugs.mojang.com/browse/MCPE-44034))
-   Fixed a bug where some blocks that require a supporting block (for example Carpet or crops) did not appear on Maps when placed on a non-full block or above an air block ([MCPE-159713](https://bugs.mojang.com/browse/MCPE-159713))
-   Iron Bars are no longer missing from the Creative Mode inventory and are once again accessible through commands ([MCPE-160253](https://bugs.mojang.com/browse/MCPE-160253))
-   Piston\'s animation when extending and retracting is now smooth ([MCPE-155987](https://bugs.mojang.com/browse/MCPE-155987))
-   It is no longer possible to get an aged Sapling in the inventory by block-picking

**Items**

-   Fixed dropped items getting stuck at the edge of flowing water ([MCPE-157167](https://bugs.mojang.com/browse/MCPE-157167))
-   When on fire, the fire overlay no longer clips through held items ([MCPE-147776](https://bugs.mojang.com/browse/MCPE-147776))
-   Mangrove, Crimson, and Warped Planks can now be used to repair Shields ([MCPE-158940](https://bugs.mojang.com/browse/MCPE-158940))
-   Fixed a regression where an undamaged tool, such as Pickaxe, when name changed on an Anvil, would fail to work correctly when used for the first time ([MCPE-152637](https://bugs.mojang.com/browse/MCPE-152637))

**User Interface**

-   Fixed a bug where the name tag background was slightly offset ([MCPE-160254](https://bugs.mojang.com/browse/MCPE-160254))
-   Fixed a UI bug where enchanted leather items would have parts of the texture not displaying the glint animation ([MCPE-98929](https://bugs.mojang.com/browse/MCPE-98929))
-   Added new disconnection error messages to better highlight the area in which the disconnection occurred
-   Character Creator offers in Marketplace will no longer lose their thumbnail images upon exiting the Dressing Room
-   Added a Retry button to the Xbox cloud sync prompt
-   Item stacks now are merged together after assigned tick threshold
-   Added a missing settings button on packs in the updated Create New World screen
-   Added a new disconnection error message - \"Unable to connect, please restart your client\"
-   Fixed an issue causing messages with non-unicode characters to have incorrect spacing
-   NPC names now default to only being displayed while looking at them
-   The arrow within the crafting Pocket UI now fits appropriately without any clipping issues
-   The \"Cannot connect to Marketplace" error will no longer be erroneously read by the Text-To-Speech reader
-   Raid bar no longer becomes stuck after breaking Beds to cancel a raid ([MCPE-152851](https://bugs.mojang.com/browse/MCPE-152851))

**Mobile Touch Controls**

-   Under Settings \> (Controls) \> Touch there is a new toggle entitled, Enable New Touch Controls Schemes. When toggled ON, a new Interaction Model dropdown menu will appear, allowing players to use our new Touch scheme, our new Crosshair scheme, or the original Classic scheme.

**Graphical**

-   Player textures and UI elements should no longer turn pink after playing for an extended period time on highly populated servers ([MCPE-105487](https://bugs.mojang.com/browse/MCPE-105487))

-   Fixed an issue where certain water textures with waterlogged blocks displayed the wrong texture ([MCPE-156281](https://bugs.mojang.com/browse/MCPE-156281))

-   <div>

    <div>

    Fixed an issue with flowing Lava and Water textures not animating on some iOS devices

    </div>

    </div>

-   Sky in The End dimension will no longer look like static upon entry while it is raining in the Overworld ([MCPE-148843](https://bugs.mojang.com/browse/MCPE-148843))\
    \

**Technical Updates:**

**Updated Add-On Template Packs**

-   Updated Add-On templates for 1.19.30 with new resources, behaviors, and documentation, are available to download at [aka.ms/MCAddonPacks\
    ](https://aka.ms/MCAddOnPacks)

**Copy Coordinates**

-   Added keyboard shortcuts that allow players to copy either their current coordinates or the coordinates of a block
    -   Control + Alt + C is the default for copying current coordinates
    -   Control + Alt + X is the default for copying coordinates of selected block
    -   Needs the \"Enable Copy Coordinate UI\" enabled in Creator settings

**General**

-   Numerical actor properties (float and integer) will now always clamp their values into the range of values specified
-   *minecraft:instant_despawn* no longer affects players
-   Command selector now gets the same position for the player that the command origin player position gets
-   Fixed a bug where the text-to-speech feature would read the entire \"My Content\" page, both highlighted and non-highlighted items
-   Non-Parrot mobs on a player\'s shoulder will now adjust their position when the player crouches ([MCPE-153996](https://bugs.mojang.com/browse/MCPE-153996))
-   Enables creators to add geometry up to 0.875 units outside of the regular block unit cube on any one side
-   Fixed a bug where some custom items (from Creator Features packs), after being used, were duplicated upon player\'s death ([MCPE-128897](https://bugs.mojang.com/browse/MCPE-128897))
-   Added server property 'disable-custom-skins' to block untrusted skins on a server wide level
-   Text to Speech no longer ignores the volume setting on startup
-   Clarified the documentation for *equipment_count* to indicate it only counts equipped armor, and how to query for held items ([MCPE-136134](https://bugs.mojang.com/browse/MCPE-136134))
-   Limit which queries can be used in Actor Property-related Molang expressions. Property defaults can only use query.had_component_group and *set_property* can only use *property* and *query.has_property*
-   *BlockDisplayNameComponent* will no longer append \'tile.\' and \'.name\' to given display names and in turn, will display their given raw strings if no appropriate localization can be found

**Commands**

-   Added a paste button to the Command Block screen

-   Added a waterlog field to the */structure* command and the load tab of Structure Blocks to allow players to properly waterlog a structure when it\'s being placed under water

-   The \"/execute at\" command now properly executes filters from the specified \'at\' position ([MCPE-156283](https://bugs.mojang.com/browse/MCPE-156283))

-   The \"/execute if block\" command now displays integer values for block positions ([MCPE-156285](https://bugs.mojang.com/browse/MCPE-156285))

-   <div>

    <div>

    Fixed a bug where a \"%\" was prepended to player names in the chat output of \"/scoreboard players reset\" ([MCPE-151389](https://bugs.mojang.com/browse/MCPE-151389))

    </div>

    </div>

-   <div>

    <div>

    Attempting to kill a player in Creative Mode using the \"/kill\" command now displays a message informing the player that it cannot be done ([MCPE-16732](https://bugs.mojang.com/browse/MCPE-16732))

    </div>

    </div>

**GameTest Framework**

-   Fixed a bug where function length would return undefined
-   Added function lengthSquared - Returns the squared length of the vector
-   Added stackOverflow as a possible WatchdogTerminateReason for the beforeWatchdogTerminate event
-   IRawMessage - Interface object representing a message
-   rawtext : (string \| IRawMessage)\[\] - (optional) A list of text objects used to build a message
-   text : string - (optional) A string containing plain text to display directly. Only valid when used as a sub member in a parent rawtext or with member
-   translate : string - (optional) String representing a translation identifier to translate text in the player\'s selected language
-   with : (string \| IRawMessage)\[\] - (optional) A list of text object arguments used to fill values in the translate text. Ignored when translate is not present
-   say(string \| IRawMessage) - Used to broadcast a message to all players
-   tell(string \| IRawMessage) - Send a message to a player
-   Fixed a bug where Dynamic Properties would not persist when using worlds hosted on Bedrock Dedicated Server or Realms
-   Pack dependencies on native modules can be declared using the module name without the need to specify a UUID, using the "module_name" attribute. The module name matches the import statement (e.g., "mojang-minecraft")
-   Removed mojang-gametest module version 0.1.0; packs using \"mojang-gametest\" specific APIs must be updated to use GameTest version 1.0.0-beta
-   The \"mojang-gametest\" module 1.0.0-beta requires \"mojang-minecraft\" module 1.0.0-beta
-   Removed usage of minecraft:unwalkable block component and added block creative group and category to the block description
-   setVelocity will now throw an exception when called on player types
-   Renamed class Items to ItemTypes
-   Add a content error when default or set_property expressions include side-effects, such as Molang variable assignment
-   Commands
    -   Added new sub-command */script watchdog exportstats* - Exports a file containing memory usage and object handle statistics
    -   Can now switch hotbar slots while targeting a block while in a Boat ([MCPE-156814](https://bugs.mojang.com/browse/MCPE-156814))
    -   The \'/execute at\' and \'/execute as\' commands will now execute at the correct relative rotation ([MCPE-156277](https://bugs.mojang.com/browse/MCPE-156277))
    -   \'/execute at \@e run kill \@e\' no longer crashes the game when there are items on the ground
    -   Added chat output when entities are skipped by \"/ride summon_ride no_ride_change\" ([MCPE-129486](https://bugs.mojang.com/browse/MCPE-129486))
    -   Added function getAll(): ItemTypeIterator - Returns an iterator of all available item types
-   Memory Watchdog
    -   script-watchdog-memory-warning - Produces a content log warning when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the warning. (default = 100)
    -   script-watchdog-memory-limit - Saves and shuts down the world when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the limit. (default = 250)
    -   Increased slow code warning threshold from 2 ms to 6 ms
