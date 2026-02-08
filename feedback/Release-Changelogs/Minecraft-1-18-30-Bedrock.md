---
title: Minecraft - 1.18.30 (Bedrock)
date: 2022-04-13T18:55:17Z
updated: 2022-04-19T15:45:03Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/5520890863245-Minecraft-1-18-30-Bedrock
---

**Posted:** April 19, 2022

A new update is now available for Minecraft, featuring a swath of new improvements:

- An updated *Create New World* experience will gradually be rolled out to players starting today
- Worlds can now be created with 64-bit seeds
- Many changes to improve damage and hunger calculations
- New Experimental Features to try like the Deep Dark and Warden
- Too many bug fixes and quality of life improvements to list!

Please continue to upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/). Happy crafting!

![village.png](https://feedback.minecraft.net/hc/article_attachments/5521364040461/village.png)\
\

**Changes:**

**Updated *Create New World* Experience**

Create New World is being updated with improved navigation, more descriptions, and a new look and feel. It’ll be rolled out gradually across Android, iOS, Windows, and Xbox starting today.

![Create_New_World.png](https://feedback.minecraft.net/hc/article_attachments/5522357974541/Create_New_World.png)

We’re still working on some things, like support for other platforms, screen narration, the trial version of the game, and the Japanese language. We need some more time to work on these features in order to provide the best possible experience.

We would love to hear what you think! Share your feedback on [the Feedback Site](https://feedback.minecraft.net/hc/en-us/community/topics/360000280611-User-Interface-Input-Methods-and-Menu-Options) and put “Create New World” in the title so we can find it.\
\

**Realms World Storage**

- We are cleaning up expired Realms that have been collecting dust. Realms that have been canceled for more than 18 months will be deleted. Find out more at [aka.ms/expired-realms-update](https://aka.ms/expired-realms-update)

**RenderDragon**

- The new Minecraft Bedrock rendering engine, RenderDragon, is now live on Android, iOS, Switch, and Windows 10 UWP x86 builds! Consolidating onto our new graphics engine will allow us to continue investing in future performance and stability improvements, as well as exciting new features for Minecraft!
- This technical update shouldn't impact gameplay or experience, but if you run into any new issues, please file feedback so the team can investigate\
  \

**Vanilla Parity:**

**World Generation**

- Worlds can now be created with 64-bit seeds (-9223372036854775808 to 9223372036854775807). These seeds can be used between Bedrock Edition and Java Edition to produce the same world ([MCPE-144994](https://bugs.mojang.com/browse/MCPE-144994), [MCPE-148168](https://bugs.mojang.com/browse/MCPE-148168))
- Non-numeric seed UI inputs now produce the same seeds as Java Edition
- Acacia Trees now grow Leaves on every branch below Y = 0 ([MCPE-151386](https://bugs.mojang.com/browse/MCPE-151386))

**Gameplay**

- Tweaked hunger depletion rate to better match Java Edition ([MCPE-56031](https://bugs.mojang.com/browse/MCPE-56031))
  - Players can now properly lose hunger when sprinting or swimming
  - Players lose significantly less hunger when jumping
  - Exhaustion rates can now be tweaked in Behavior Packs
- Players flying in Creative mode are no longer pushed by liquid current ([MCPE-84592](https://bugs.mojang.com/browse/MCPE-84592))

**Mobs**

- Shulkers now have a chance to spawn another Shulker when hit by a Shulker projectile ([MCPE-104826](https://bugs.mojang.com/browse/MCPE-104826))
- When a mob picks up an item, the item can now be seen slightly "pulled" towards the mob right as it picks it up. This matches the behavior of Java Edition
- Drowned can no longer spawn where the block light level is above 0 ([MCPE-150148](https://bugs.mojang.com/browse/MCPE-150148))
- Bees no longer become angry when Beehives are destroyed by Silk Touch ([MCPE-83550](https://bugs.mojang.com/browse/MCPE-83550))
- Untamed Wolves can now be leashed ([MCPE-82050](https://bugs.mojang.com/browse/MCPE-82050))
- Mobs can no longer spawn on Campfires ([MCPE-152770](https://bugs.mojang.com/browse/MCPE-152770))
- The Ravager now targets and attacks the Wandering Trader ([MCPE-44606](https://bugs.mojang.com/browse/MCPE-44606))
- Mobs spawned from a Dispenser are now persistent ([MCPE-110521](https://bugs.mojang.com/browse/MCPE-110521))

**Blocks**

- Falling blocks once again have full-block hitbox
- Changed block tick rates for Cactus, Chorus Flower, Crops, Grass, Pointed Dripstone, and Saplings to match Java Edition ([MCPE-145612](https://bugs.mojang.com/browse/MCPE-145612))
- Cauldrons now only fill with water and lava by Dripstones that are below water and lava source blocks
- TNT blocks now correctly move in a random X/Z direction once lit
- Glow Lichen no longer generates hanging in the air inside Strongholds ([MCPE-123448](https://bugs.mojang.com/browse/MCPE-123448))
- Glow Lichen now correctly checks for the face of the block they are attached to be a full block
- Glow Lichen can now be attached to Leaves
- Blocks such as Glow Lichen, Torches, and Redstone can no longer be placed on or attached to Brewing Stands
- Blocks such as Glow Lichen, Torches, and Redstone can now be placed on or attached to Trapdoors, depending on their state
- Azaleas and Lily Pads are now broken by flowing water ([MCPE-152040](https://bugs.mojang.com/browse/MCPE-152040))

**Items**

- The player's arm no longer twitches while charging a bow ([MCPE-148486](https://bugs.mojang.com/browse/MCPE-148486))
- Nether Brick, Iron/Gold Nuggets, Red/Brown Mushroom Blocks, and Chorus Plant/Flower Blocks can no longer be used as fuel in Furnaces ([MCPE-114216](https://bugs.mojang.com/browse/MCPE-114216))
- Water and Lava Buckets can now be used on waterlogged blocks, such as Light Blocks or Big Dripleaves ([MCPE-148392](https://bugs.mojang.com/browse/MCPE-148392))

**Combat and Damage**

- Improved accuracy of damage calculations
- Fixed some issues where damage invulnerability wasn't being applied properly
- The camera now shakes the same way it does in Java Edition when the player receives damage ([MCPE-118510](https://bugs.mojang.com/browse/MCPE-118510))
- Fixed an issue where the Protection enchantments mitigated too much damage. This has been changed to match Java Edition ([MCPE-113191](https://bugs.mojang.com/browse/MCPE-113191))
- Absorption Hearts no longer stay yellow while under the Wither effect ([MCPE-131852](https://bugs.mojang.com/browse/MCPE-131852))
- Added armor toughness
- Diamond Armor and Netherite Armor now have a toughness value of 2 and 3 respectively
- Tweaked armor reduction calculation to account for toughness
- Netherite Armor will now reduce more damage than Diamond Armor
- Lowered the amount of knockback resistance granted by Netherite Armor ([MCPE-109408](https://bugs.mojang.com/browse/MCPE-109408))
- Punching deals less damage now, to better match the Java Edition ([MCPE-152713](https://bugs.mojang.com/browse/MCPE-152713))
- Damage is now calculated more accurately by properly calculating and storing partial damage for larger damage
- Mobs across higher and lower difficulties had their damage adjusted slightly accordingly
- Mobs with knockback resistance (e.g. Ravager or Zoglin) now receive less knockback when hit by an Iron Golem
- Armor and protection reduction calculations have been made more accurate
- Dragon's Breath attack now properly deals damage ([MCPE-94317](https://bugs.mojang.com/browse/MCPE-94317))
- Protection Enchantment now properly works on most damage types ([MCPE-40651](https://bugs.mojang.com/browse/MCPE-40651))
- Landing on a Stalagmite is now properly considered fall damage ([MCPE-151192](https://bugs.mojang.com/browse/MCPE-151192))
- Blaze Fireball will deal knockback on impact ([MCPE-82421](https://bugs.mojang.com/browse/MCPE-82421))
- Blaze fireballs, Fang attack damage, and Shulker bullets now deal consistent damage across all difficulties
- Small Magma Cubes do slightly more damage, from 2 to 3 on normal
- Spiders deal slightly less damage, from 3 to 2 on normal ([MCPE-94878](https://bugs.mojang.com/browse/MCPE-94878))
- Baby Zoglins deal slightly less damage, from 1 to 0.5 on normal
- Baby Hoglins now attack players for 0.5 damage on normal ([MCPE-152577](https://bugs.mojang.com/browse/MCPE-152577))
- Skeleton melee attack does slightly less damage, from 3 to 2 on normal
- Wolves deal slightly more damage, from 3 to 4 on normal
- Fixed an issue that was causing entities to not be protected from fire damage by the Fire Resistance effect
- Fixed a desync issue that could sometimes cause health to regenerate only visually

**Villagers**

- Updated Villager trade tables for Armorer, Cleric, Fisherman, Shepherd, Toolsmith, and Weaponsmith to match Java Edition
  - Fishermen Boat trades now change wood type based on Villager biome type
  - Clerics now offer Glowstone instead of Glowstone Dust
  - Weaponsmith enchanted Iron Sword trade moved to Novice
  - Armorer Diamond trade moved to Journeyman
- Villagers no longer share Seeds and Beetroot Seeds
- Cartographers now always unlock Woodland Explorer Map trade ([MCPE-152725](https://bugs.mojang.com/browse/MCPE-152725))
- Fixed an error where Journeymen Clerics would offer Glowstone Dust instead of Glowstone Blocks ([MCPE-57524](https://bugs.mojang.com/browse/MCPE-57524))
- Farmer Villagers can now use Bone Meal on crops and can turn excess Seeds into Bone Meal at their Composter ([MCPE-74079](https://bugs.mojang.com/browse/MCPE-74079))\
  \

**Experimental Features:**

**Reminder:** Remember to **make regular backup copies** of your favorite worlds before enabling experimental features!

Please keep in mind that these features are work in progress, still under in development, and subject to change. If you activate them, your world might crash, break, or not work with future updates. Experimental features cannot be turned off after world creation.

For more information, please see the article about enabling experimental features at [aka.ms/MCExperimentalFeatures](https://aka.ms/MCExperimentalFeatures).

**Deep Dark Biome**

- Dimly lit and eerie, the Deep Dark is sure to strike fear into the hearts of even the bravest players

**Ancient Cities**

- Wander the halls of these long-abandoned structures in the Deep Dark depths to uncover relics long forgotten

**Warden**

- The horror of the Deep Dark! A creature with no eyes, roughly resembling the Sculk that can be found throughout the Deep Dark, the Warden is an unstoppable force of nature that inhabits this biome

**Sculk Blocks**

- A new variety of blocks that can be found in the Deep Dark

**Darkness Effect**

- A new mob effect unique to the Warden and Sculk Shrieker, which will afflict players with the effect when nearby
- Lowers the gamma down at an equivalent of “Moody” while having this effect

**Allay**

- Allays will collect all the surrounding items that match the item they are holding
- Allays will like a player who hands them an item and will bring the items they collect to their liked player

**Boat with Chest**

- Function similarly to Minecart Chests, but in Boats instead, so you can take a journey on the water and carry your things with you

**Goat Horn**

- Dropped when a Goat with at least one horn rams these blocks: Stone, Packed ice, Iron Ore, Copper Ore, Emerald Ore, or any kind of wood log from the Overworld

**Axe Changes**

- Attacks with Axes towards a raised Shield will disable the Shield for 5 seconds

**Spectator Mode**

- This update contains early functionality for Spectator Mode – a much-wanted feature we're adding to Minecraft: Bedrock Edition. This will launch after the upcoming 1.19 update has shipped, but we’ll be testing it further in upcoming Betas and Previews. We recommend not relying on this in-development feature, which was not meant to be included in the release. We won't be accepting bug reports related to Spectator Mode until our first iteration is released, as the feature is likely to change during development.\
  \

**Known Issues:**

- Teleporting entities into unloaded chunks removes them from the world. This will be fixed in an upcoming update
- Players are unable to invert the camera Y-axis when playing with touch controls. This will be fixed in an upcoming update\
  \

**Fixes:**

**Performance / Stability**

- Fixed a crash that could occur during gameplay
- Fixed a crash that could occur when uploading corrupted worlds to Realms
- Fixed a crash that could occur upon leaving the Zooming menu in the Dressing Room
- Fixed a crash that could occur when hovering over the search bar in the crafting menu when playing with a controller
- Fixed a crash that could occur on Android devices when suspending or resuming the app
- Fixed a crash that could occur when stopping a Bedrock Dedicated Server ([BDS-16742](https://bugs.mojang.com/browse/BDS-16742))

**Gameplay**

- Fixed an issue where the Mending enchantment would not always correctly consume XP Orbs to repair ([MCPE-120119](https://bugs.mojang.com/browse/MCPE-120119))
- Players in Visitor Mode can no longer break Paintings and Minecarts ([MCPE-132869](https://bugs.mojang.com/browse/MCPE-132869))
- Teleporting vertically beyond the visibility distance now loads terrain correctly ([MCPE-150021](https://bugs.mojang.com/browse/MCPE-150021))
- Fixed a bug where the player could switch to gliding when riding in certain scenarios ([MCPE-147904](https://bugs.mojang.com/browse/MCPE-147904))
- Crouch (sneak) state is now reset when player dies to avoid getting stuck in crouch state after respawning
- The player's position when rejoining a world will remain the same if they quit while in lava ([MCPE-124219](https://bugs.mojang.com/browse/MCPE-124219))
- Players can now fly down through Ladders and other climbable blocks such as Vines in Creative mode without stopping ([MCPE-82480](https://bugs.mojang.com/browse/MCPE-82480))
- Fixed a Furnace exploit where items could be duplicated if the output slot was selected ([MCPE-152411](https://bugs.mojang.com/browse/MCPE-152411))
- Fire that existed before the Fire Tick game rule is enabled will continue to spread again ([MCPE-140396](https://bugs.mojang.com/browse/MCPE-140396))
- Vertical field of view is no longer halved in horizontal split screen, making items such as Book & Quill easier to view when playing in split screen
- Fixed tick range check excluding chunks that were actually in range

**World Generation**

- Fixed duplicate End Crystals spawning on top of End Spikes ([MCPE-147817](https://bugs.mojang.com/browse/MCPE-147817))
- Improved surrounding terrain for structures such as Villages during world generation ([MCPE-145659](https://bugs.mojang.com/browse/MCPE-145659))
- Fixed underwater lava lakes not turned into Obsidian during world generation ([MCPE-128022](https://bugs.mojang.com/browse/MCPE-128022))

**Mobs**

- Villagers no longer avoid Zombified Piglins ([MCPE-94102](https://bugs.mojang.com/browse/MCPE-94102))
- Fixed an issue where Villagers did not hold the item they would trade when presented with Emeralds by the player ([MCPE-150303](https://bugs.mojang.com/browse/MCPE-150303))
- Mobs are now able to path over Azalea blocks ([MCPE-129373](https://bugs.mojang.com/browse/MCPE-129373))
- Mobs are now able to path over Dripleaf blocks and properly pathfind on top of them, when not fully tilted
- Mobs are now able to path over Pointed Dripstone blocks and properly pathfind on top of them ([MCPE-133270](https://bugs.mojang.com/browse/MCPE-133270))
- Mobs can now move properly on top of solid partial blocks, like Bells, Brewing Stands, and Enchanting Tables
- Mobs can now jump from high enough solid partial blocks to full ones at a higher position
- Mobs can now jump over fences if they are standing on an adjacent slab or on another block high enough
- Mobs can now move through less than half-block tall Top Snow even when the ceiling, if any, is as tall as the mobs themselves ([MCPE-148355](https://bugs.mojang.com/browse/MCPE-148355))
- Fixed a bug in the Glow Squid's texture where the glow map in the alpha channel was incorrect, causing patches of non-glowing texture to be seen ([MCPE-117507](https://bugs.mojang.com/browse/MCPE-117507))
- Fixed an issue where players could not access a Villager's trades while holding a spawn egg ([MCPE-76153](https://bugs.mojang.com/browse/MCPE-76153))
- Fixed an issue where Witches spawned during Village raids could despawn during the raid ([MCPE-149883](https://bugs.mojang.com/browse/MCPE-149883))
- Cod, Salmon, Pufferfish, Tropical Fish, and Dolphins once again spawn in deep variants of ocean biomes ([MCPE-150191](https://bugs.mojang.com/browse/MCPE-150191))
- Fixed Fangs from Evoker spells not being spawnable in blocks with no bounding boxes
- Changed the spawning logic for Iron Golems and Cats to make it easier for them to spawn in roofed areas, like underground villages ([MCPE-142292](https://bugs.mojang.com/browse/MCPE-142292))
- Fixed an issue where some large mobs in Marketplace maps could get stuck
- Shulkers no longer like to occupy the same block as another Shulker ([MCPE-43972](https://bugs.mojang.com/browse/MCPE-43972))
- Shulkers now prioritize attaching to neighboring block faces before trying to teleport away
- Shulkers now stay attached to the current attached blockface if it is valid, instead of switching to upright position

**Blocks**

- Fixed a lighting bug where light level 1 incorrectly dropped to 0 when placing blocks in light level 1 with multiple light sources ([MCPE-151266](https://bugs.mojang.com/browse/MCPE-151266))
- TNT no longer disappears when ignited with the 'TNT Explodes' game rule disabled and the 'Fire Spreads' game rule enabled ([MCPE-82485](https://bugs.mojang.com/browse/MCPE-82485))
- Gravity affected blocks now fall on Top Snow when placed above it instead of hovering over it ([MCPE-151407](https://bugs.mojang.com/browse/MCPE-151407))
- Fixed an issue with resource drops occasionally remaining black after breaking and placing a block quickly in its place
- Top Snow no longer clips with the block beneath when falling
- Fixed an issue where interacting with the Bell while holding a chargeable item would not continuously ring it ([MCPE-56968](https://bugs.mojang.com/browse/MCPE-56968))
- Fixed an issue where projectiles would 'bounce' off of Bells in strange ways ([MCPE-47847](https://bugs.mojang.com/browse/MCPE-47847))
- Removed water from the extra-block when placing an Amethyst cluster ([MCPE-148394](https://bugs.mojang.com/browse/MCPE-148394))
- Scaffolding can no longer be placed without support on y=0 ([MCPE-150765](https://bugs.mojang.com/browse/MCPE-150765))
- Observers placed facing Double Chests no longer send out a Redstone pulse when reloading/re-entering a chunk
- Save Structure Blocks now correctly detect Corner Structure Blocks at negative Y levels ([MCPE-151511](https://bugs.mojang.com/browse/MCPE-151511))
- Breaking a layer of snow placed in the same block as a flower no longer destroys the flower ([MCPE-151512](https://bugs.mojang.com/browse/MCPE-151512))

**Items**

- Custom armor can now be equipped with the "Use" button when different armor is already equipped ([MCPE-125323](https://bugs.mojang.com/browse/MCPE-125323))

**Graphical**

- Fixed an issue that caused some emotes to have unintended rotations when near the end of their animation ([MCPE-134328](https://bugs.mojang.com/browse/MCPE-134328))
- Fixed a case where ray tracing resources would be destroyed prematurely on level exit from an RTX-enabled world
- Fixed the stage 3 carrot texture not showing up in-game, due to an incorrect filename ([MCPE-152175](https://bugs.mojang.com/browse/MCPE-152175))
- Fixed a bug where the Shield blocking animation stopped playing smoothly after blocking once ([MCPE-149838](https://bugs.mojang.com/browse/MCPE-149838))
- Fixed the crosshair disappearing when Outline Selection for blocks is disabled
- Players that are on fire now render fire in front of the player on the inventory screen regardless of in-game camera perspective ([MCPE-147777](https://bugs.mojang.com/browse/MCPE-147777))
- Fixed a highlight effect on Leather Armor appearing on paper dolls when using higher anti-aliasing ([MCPE-75321](https://bugs.mojang.com/browse/MCPE-75321))

**User Interface**

- Added an option in Video Settings to toggle anti-aliasing on the Nintendo Switch ([MCPE-123352](https://bugs.mojang.com/browse/MCPE-123352))
- Fixed the loading screen when suspending and resuming the game while playing split-screen on Nintendo Switch
- Increased line spacing on the "Realms Plus subscription has expired" screen
- Chat changes:
  - Control + Backspace will now erase the whole word before the caret
  - Control + Delete will now erase the whole word after the caret
  - Control + Left Arrow will now move the caret to the beginning of the word before the caret
  - Control + Right Arrow will now move the caret to the beginning of the next word after the caret
- When first opening the inventory screen in Pocket UI, we now default to the "Craftable" tab on the left-hand side, and the crafting grid on the right-hand side
- Removed the question mark button on the Pocket UI inventory screen
- Accessing the recipe book from the Inventory screen now only shows items that can be crafted from that screen's 2x2 crafting grid
- Players can now use auto-move to equip or unequip armor in Crafting Table's menu while in Pocket UI ([MCPE-148970](https://bugs.mojang.com/browse/MCPE-148970))
- Updated generic controller face button icons on mobile devices
- Fixed a bug where the label above the inventory screen crafting grid in Pocket UI would get truncated in some languages
- Fixed an issue in Pocket UI where items could be dropped unintentionally in blocks with custom UIs, and resized those screens to allow for dropping items on the sides instead
- Improved contrast on multiple UI elements
- Fixed an issue with the screen reader looping on the Play screen when you had a Realms invite
- Download popup no longer flickers when closed
- Added warning popup on Marketplace pages when attempting to equip skin pack skin while character creator item is equipped
- Fixed issue where info and buttons did not appear for downloaded skin packs ([MCPE-152216](https://bugs.mojang.com/browse/MCPE-152216))\
  \

**Technical Updates:**

**Updated Add-On Template Packs**

- Updated Add-On templates for 1.18.30 with new resources, behaviors, and documentation, are available to download at [aka.ms/MCAddonPacks](https://aka.ms/MCAddOnPacks)

**RenderDragon**

- With the release of RenderDragon for Android, iOS, Nintendo Switch, and Win10 UWP x86, HAL will no longer be available on these platforms. We know the community has found ways to build shaders on top of HAL and with this change, these shaders will no longer function. We understand that this is a valuable feature for players and the creator community, and we are working on how we may be able to deliver this sort of creative capability to players and creators in an officially supported way. While we have nothing to share right now, look out for more details in the future.

**Additional Modding Capabilities Experiment/JavaScript APIs**

- **Important!** In this release, we are removing the Additional Modding Capabilities experiment. This experiment contained experimental JavaScript APIs launched in 2018 – and with this removal, JavaScript within worlds associated with this API will no longer function. GameTest Framework – a separate JavaScript API – should not be impacted, nor should behavior pack/resource pack type add-ons more broadly.
- You can read more about this [via this article](https://aka.ms/mcamc).

**Changes**

- A world with "StorageVersion" 8 or lower will be increased to 9 and have its "RandomSeed" upgraded from using only the lower 32 bits of a 64-bit number to using the full 64-bit range while still representing the same number. This is only relevant for negative 32-bit seeds, which need a sign bit extension
- The world loading screen now shows progress when loading ticking areas marked for preload
- Experimental: Volume definitions are now stored and read from Behavior Packs instead of being part of the level directory
- Experimental: Added an optional "mob_amount" parameter to the Damage Event Response that specifies a unique damage amount when used by mobs
- Due to engine limitations, "minecraft:geometry" data used for blocks with the Holiday Creator Features experimental toggle are now restricted to only allow geometry in the \[0,0,0\] to \[15,15,15\] space. Any blocks loaded from Behavior Packs that exceed this limit will render as the info_update block and show a content error in the log
- The Interact component now has two new fields, GiveItem and TakeItem, specifying if it is possible to give/take items from an entities main hand slot. Taking the item also drops the inventory of the mob
- Removed *preventsjumping*component from data-driven blocks
- Removed *BlockImmovable*, *BlockBreakOnPush*, and *BlockOnlyPistonPush* components from data-driven blocks
- Limited the number of elements in the *crafting_tags*field of *CraftingTableComponent* to 64

**Fixes**

- Biome-specific fog settings can once again be defined
- Fixed actor definition identifiers not being recognized if the item or block name contains "."
- Mobs that are riding a boat, for example, can no longer use JumpToBlockGoal ([MCPE-150750](https://bugs.mojang.com/browse/MCPE-150750))
- Custom mobs with a format version lower than 1.18.20 and using the *minecraft:behavior.knockback_roar*component will parse like before if it contains an extra field that the engine didn't expect
- Fixed an issue in the Knockback goal where the incorrect owner was being passed into the filter evaluate function
- Weapon events are now correctly applied when the weapons are used by mobs ([MCPE-118692](https://bugs.mojang.com/browse/MCPE-118692))
- JumpToBlock behavior is now correctly affected by JumpBoost mob effect ([MCPE-137432](https://bugs.mojang.com/browse/MCPE-137432))
- Fixed a case where experimental BlockCollisionComponents did not allow partial specification
- Rotation when riding a mob that has a locked rotation will no longer unexpectedly snap to one side when that mob is rotating

**Commands**

- Fixed an issue that would cause commands to affect players in all dimensions ([MCPE-152218](https://bugs.mojang.com/browse/MCPE-152218))
- Added the "hasitem" filter for target selector of entities. This allows the player to target entities based on the items that have in their inventory or are wearing
- Added '/tickingarea' command preload overload
- The '/tickingarea' command no longer modifies areas from entities with the *tick_world* component
- Entities must now be loaded for an area to be considered fully loaded and ticking
- Added a new '/volumearea ' command to create, remove, and list volumes in the world
- Using '/playanimation' command now properly plays animations on the paper doll and inventory character ([MCPE-137353](https://bugs.mojang.com/browse/MCPE-137353))
- Correct error output is now displayed when attempting to use the '/loot' spawn command when passing in the position of an unloaded area and there is 0 loot to drop
- Added '/loot ' command insert loot and insert kill overload

**AI Goals**

- Exposed new data parameter "calculate_new_path_radius" for GoHomeGoal. This is for specifying a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home
- Added Knockback Height Cap value to KnockbackRoarGoal

**WebSocket**

- JSON format for events sent from websocket server and Code Builder APIs updated to hierarchical JSON format instead of flat format
- Less useful properties removed with block and item IDs moved to newer name-based format instead of numerical format
- Agent-based commands in websockets moved to new "action:agent" format, and all commands are now queued and include unique ids to correlate responses
- Any future breaking changes to websocket and Code Builder APIs will now result in the "protocolVersion" being incremented

**Molang**

- Molang expressions inside animation scripts for actor resource definition (pre_animation and initialize) that contain capital letters are properly evaluated now with format_version 1.18.20 or higher
- Clarified documentation for query.is_item_name_any that the slot index is required when there is more than one slot, i.e. the hotbar
- Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.18.20 or higher
  - For example, *A && B \|\| C*now evaluates as *(A && B) \|\| C* and *A \< B == C \> D *now evaluates as *(A \< B) == (C \> D)*

**GameTest Framework (Experimental)**

New Module! We added a **mojang-minecraft-ui** module with API structures for creating simple dialog boxes:

- *Added* *ActionFormData/ModalFormData/MessageFormData* types in the mojang-minecraft-ui namespace. Documentation is available on [the Minecraft Creator documentation site](https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui).
- Removed 'Minecraft' and 'GameTest' imports; please use 'mojang-minecraft' and 'mojang-gametest'

**mojang-minecraft module updates:**

- World
  - Changed return type of function *getPlayersto PlayerIterator*
  - Added function *playSound(soundName: String, soundOptions: SoundOptions): void*- plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument
  - Added *queueMusic(trackName : string, musicOptions : MusicOptions)*
  - Added *playMusic(trackName : string, musicOptions : MusicOptions)*
  - Added *stopMusic()*
  - Added MusicOptions JS class with *volume,* *fadeSeconds* and *loop* properties\
    \
- Dimension
  - Added *id*property
  - Added *MinecraftDimensionTypes*with constants for built-in dimension IDs
  - Added *spawnItem*to spawn an ItemStack in the dimension\
    \
- Player
  - Added function *playSound(soundID : String, soundOptions : SoundOptions)* - Plays a sound for a player, cannot be heard by entities other than that specific player\
    \
- Events
  - Updated property *direction*to *blockFace* in world.events.beforeItemUseOn and world.events.itemUseOn
  - Added event *beforeDataDrivenEntityTriggerEvent* - Fires before the data driven trigger is applied
  - Added event *dataDrivenEntityTriggerEvent* - Fires after the data driven trigger is applied
  - Added *event entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)* - Fires when an entity or block is hit by another entity
  - Added event *entityHurt(entityHurtEvent: EntityHurtEvent, options?: EntityEventOptions)*- Fires when an entity takes damage
  - Added event *leverActivate* - fires when a lever is toggled
  - BlockExplodeEvent - Removed property destroyedBlockPermutation\
    \
- DefinitionModifier - Added
  - read only property *componentGroupsToAdd: string\[\]* - List of component groups that will be added as part of this modifier
  - read only property *componentGroupsToRemove: string\[\]* - List of component groups that will be removed as part of this modifier
  - property *triggers: Trigger\[\]* - List of triggers that will fire as part of this modifier\
    \
- Trigger - Added
  - property *eventName: string* - Event name of the trigger\
    \
- DataDrivenEntityTriggerEvent - Added
  - read only property *entity: Entity* - Entity that the event triggered on
  - read only property *id: string* - name of the event\
    \
- BeforeDataDrivenEntityTriggerEvent - Added
  - read only property *entity: Entity* - Entity that the event triggered on
  - read only property *id: string* - name of the event
  - property *modifiers: DefinitionModifier\[\]* - List of modifiers that will be applied when the event triggers
  - *property cancel: bool* - If true, the event will not be triggered\
    \
- EntityDataDrivenTriggerEventOptions - Added and inherited from EntityEventOptions
  - property *eventTypes: string\[\]* - If specified, will restrict to events with the specified name (i.e., *minecraft:ageable_grow_up*)\
    \
- EntityType
  - Added read-only property *id: string*- The identifier for the entity type\
    \
- EntityTypes
  - Added function *get(identifier: string): EntityType*- Returns the corresponding EntityType for the given identifier
  - Added function *getAll(): EntityTypeIterator*- Returns an iterator containing all registered entity types\
    \
- MinecraftEntityTypes
  - Provides EntityType constants for each standard Minecraft entity type\
    \
- EnchantmentType - Added
  - Read-only property i*d: string* - The name of the enchantment type
  - Read-only property *maxLevel: int* - The maximum level this type of enchantment can have\
    \
- EnchantentInstance - Added
  - *Constructor EnchantmentInstance(type: EnchantmentType, level : int)*
  - Read-only property *type: EnchantmentType* - The enchantment type of this instance
  - Property *level: int* - The level of this enchantment instance\
    \
- EnchantmentSlot - Added
  - Represents the item slot or type that an enchantment can be applied to\
    \
- EnchantmentList - Added
  - Represents a collection of enchantments that can be applied to an item
  - Constructor *EnchantmentList(slot : EnchantSlot)*
  - Read-only property *slot: EnchantSlot* - The item slot/type that this collection is applied to
  - Read-only property *allEnchantments: EnchantmentInstance\[\]* - All enchantments as part of this enchantment collection
  - Method *canAddEnchantment(instance : EnchantmentInstance): bool* - Returns whether or not the provided EnchantmentInstance can be added to this collection
  - Method *addEnchantment(instance : EnchantmentInstance): bool* - Attempts to add the enchantment to this collection. Returns true if successful
  - Method *removeEnchantment(type : EnchantmentType)*- Removes an EnchantmentInstance with type type from this collection if present
  - Method *hasEnchantment(type : EnchantmentType): int* - If this collection has an EnchantmentInstance with type type, returns the level of the enchantment. Returns 0 if not present\
    \
- ItemStack
  - Added function *setLore(loreList: string\[\]): void*- Sets the lore text for the item
  - Added function *getLore(): string\[\]*- Gets the lore text for the item
  - Added *nameTag*property\
    \
- ItemEnchantmentComponent - Added
  - Property *enchantments: EnchantmentList* - Gets a copy of the current set of enchantments on this ItemStack. Or allows the user to set the EnchantmentList for the ItemStack
  - Method *removeAllEnchantments*- Removes any enchantments that might be present on this ItemStack\
    \
- Vector - Added numerous new helper functions
  - Added function *length(): number*- Returns the length of this vector
  - Added function *normalized(): Vector*- Returns this as a normalized vector
  - Added static function *distance(a:Vector, b:Vector): number*- Returns distance between two vectors
  - Added static function *lerp(a:Vector, b:Vector, t: number): Vector*- Returns the linear interpolation between a and b using t as the control
  - Added static function *slerp(a:Vector, b:Vector, s: number): Vector*- Returns the spherical linear interpolation between a and b using s as the control
  - Added static function *cross(a:Vector, b:Vector): Vector*- Returns the cross product of these two vectors
  - Added static function *add(a:Vector, b:Vector): Vector*- Returns the addition of these vectors
  - Added static function *subtract(a:Vector, b:Vector): Vector*- Returns the subtraction of these vectors
  - Added static function *multiply(a:Vector, b:Vector): Vector*- Returns the component-wise product of these vectors
  - Added static function *divide(a:Vector, b:Vector): Vector*- Returns the component-wise division of these vectors
  - Added static function *multiply(a:Vector, b:number): Vector*- Returns the product of this vector and a scalar
  - Added static function *divide(a:Vector, b:number): Vector*- Returns the division of this vector and a scalar
  - Added static *function min(a:Vector, b:Vector): Vector*- Returns a vector that is made from the smallest components of two vectors.
  - Added static function *max(a:Vector, b:Vector): Vector*- Returns a vector that is made from the largest components of two vectors\
    \
- EntityItemComponent
  - Added component *EntityItemComponent*that can be used to obtain an ItemStack from an item entity – e.g., *getComponent(“item”).itemStack\
    \*
- BlockInventoryComponent
  - Fixed accessing items in a double chest crashing/being inconsistent\
    \
- Exposed the following components for Entities:
  - *minecraft:can_climb*
  - *minecraft:can_fly*
  - *minecraft:can_power_jump*
  - *minecraft:fire_immune*
  - *minecraft:floats_in_liquid*
  - *minecraft:is_dyable*
  - *minecraft:is_baby*
  - *minecraft:is_charged*
  - *minecraft:is_chested*
  - *minecraft:is_hidden_when_invisible*
  - *minecraft:is_ignited*
  - *minecraft:is_illager_captain*
  - *minecraft:is_saddled*
  - *minecraft:is_shaking*
  - *minecraft:is_sheared*
  - *minecraft:is_stackable*
  - *minecraft:is_stunned*
  - *minecraft:is_tamed*
  - *minecraft:wants_jockey*
  - *minecraft:variant*
  - *minecraft:skin_id*
  - *minecraft:mark_variant*
  - *minecraft:friction_modifier*
  - *minecraft:ground_offset*
  - *minecraft:scale*
  - *minecraft:push_through*

**mojang-gametest module:**

- Removed *radius*argument from command */gametest clearall*
- Modified the behavior of function *attack()*to make the simulated player swing even when no target is found
