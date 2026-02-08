---
title: Minecraft Beta & Preview - 1.20.20.21
date: 2023-07-12T13:38:31Z
updated: 2023-09-29T09:35:56Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/17540689688589-Minecraft-Beta-Preview-1-20-20-21
hash:
  h_01HBG4P6PD67YER1A3KZCBYKRB: features-and-bug-fixes
  h_01HBG4P6PDB4ERR4QTGTXDZ7RV: recipe-book-search
  h_01HBG4P6PD63ADAEPJ5MXPQAK4: recipe-unlocking
  h_01HBG4P6PDE4M82KRN3XHYXJ9T: accessibility-features
  h_01HBG4P6PDGA6PG0TE4QTGW1E1: mobs
  h_01HBG4P6PDPKERN696YMMBJPAB: block-breaking
  h_01HBG4P6PDDFE0AJEMAT34TST3: gameplay
  h_01HBG4P6PDHCPNSEM8QA8TVBT8: graphical
  h_01HBG4P6PDMP5MS44R6WYNFDBR: player
  h_01HBG4P6PD30Z52EYKE47892JB: stability-and-performance
  h_01HBG4P6PDK7SNZ27XTZP2DGVN: storage
  h_01HBG4P6PDBSHCWSV9QNYWSQ2Y: user-interface
  h_01HBG4P6PDDC0X6EZX6SCRG7R9: vibrations
  h_01HBG4P6PDM5DNJYXANGCSJ7KX: technical-updates
  h_01HBG4P6PDX9J7G5N5Y6E9FKM2: add-ons
  h_01HBG4P6PD6R8GWYC7VC0NXR2T: commands
  h_01HBG4P6PDH37PQXARKP23XZ1N: editor
  h_01HBG4P6PDDBQ5GFXSN0AWR8E3: items
  h_01HBG4P6PD7VM84F5WH34ZKM8Z: molang
  h_01HBG4P6PDW3Z0QJ3FZ5CC0YT8: api
  h_01HBG4P6PDZ1BM32S1AZWVQSM7: items-1
  h_01H558MYHH7RM2ZVYE58YYZQB6: block-destroy-time-changes---full-list
  h_01HBG4P6PEW0T7N7EQMR4Z8Y10: ""
  h_01HBG4P6PE14GWXP9DP3VMTA2Y: remaining-parity-breaks
---

**Posted:** 12 July 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![A Minecraft screenshot of a villager sleeping in a bed, in a room with a furnace and a chest. There is a pickaxe and a block of cobble deepslate placed in item frames.](https://feedback.minecraft.net/hc/article_attachments/17540657849869)

 

It’s time for a new Minecraft Preview and Beta! Here’s a list of the fixes and features in this update. Please continue to send us your [feedback](https://aka.ms/MC120Feedback) and [bug reports](https://bugs.mojang.com/), and have fun!

# **Features and Bug Fixes**

## **Recipe Book Search**

- The recipe book search has been updated when playing in Survival, with the following changes:
  - The search will only match the beginning of any word in the item's name. For example, searching for "tor" will now show **Tor**ch and Redstone **Tor**ch but not Daylight Detec**tor**)
  - Search will now work better together with the Recipe Unlocking system - recipes that haven't been unlocked will show up in search results.
- This change will enable experienced players to find items they are looking for (even if it hasn't been unlocked yet) while not overwhelming new players with recipes they aren't yet ready for.
- These changes are planned for both Bedrock and Java Edition, but they are still being tweaked and we definitely want to hear your feedback! Send us your thoughts at [aka.ms/MinecraftRecipeSearch](https://aka.ms/MinecraftRecipeSearch)

## **Recipe Unlocking**

- Recipe Unlocking is no longer an Experimental Feature, but can still be turned on and off per world
  - Known issue: The recipe unlock option toggle is missing from the Create New World screen, but can be found and enabled in the Edit World screen after a world has been created. We hope to have this issue addressed soon!
- ‘Recipe unlocked’ message is no longer visible on the pause menu ([MCPE-171112](https://bugs.mojang.com/browse/MCPE-171112))
- Stained Glass Pane recipe now gets unlocked when obtaining any dyes ([MCPE-171118](https://bugs.mojang.com/browse/MCPE-171118))
- Recipes unlocked notification now fit text in different languages and no longer bleed out of the screen ([MCPE-171141](https://bugs.mojang.com/browse/MCPE-171141))

## **Accessibility Features**

- Fixed an issue where screen narration would read Recipe Book folder items as the first item in the folder
- Screen narration now informs the user immediately after they change sliders and toggles

## **Mobs**

- Camels now play the same stepping sound when walking on Red Sand, Suspicious Sand, and Concrete Powder Blocks as they do when walking on regular Sand ([MCPE-163497](https://bugs.mojang.com/browse/MCPE-163497))

## **Block Breaking**

- We have adjusted the breaking times of 188 blocks to match Java Edition and our intended design. Some blocks couldn't be changed yet for technical reasons and Obsidian was left unchanged because we're still deciding what breaking speed it should have. Bringing more blocks to parity makes it easier for our team to keep both versions up to date. We also hope it will be easier for the community to make and share guides that work for all players on all platforms. 
  - The full list of block breaking times and changes can be found at the end of this changelog [here](#block-destroy-time-changes---full-list)

## **Gameplay**

- Added the playerssleepingpercentage gamerule ([MCPE-114425](https://bugs.mojang.com/browse/MCPE-114425)) 
  - A zero or a negative value will only require one player to sleep to skip the night
  - When set to over 100, the night cannot be skipped
- Fixed held Map not being centered when playing on narrow aspect ratio screens
- It is once again possible to use Bone Meal underwater on Sand, Dirt, Gravel, and Clay ([MCPE-171383](https://bugs.mojang.com/browse/MCPE-171383))
- Fixed an issue where beginning to swim while hitting the sneak button could cause the sneak button to be held down until swimming ends ([MCPE-130070](https://bugs.mojang.com/browse/MCPE-130070))
- Potions are no longer thrown backwards when looking up ([MCPE-138995](https://bugs.mojang.com/browse/MCPE-138995))
- Campfires within Trail Ruins are no longer lit by default ([MCPE-170033](https://bugs.mojang.com/browse/MCPE-170033))
- Pink Petals can now be fertilized by Dispensers ([MCPE-171560](https://bugs.mojang.com/browse/MCPE-171560))
- Shulker Boxes mined without a Pickaxe no longer take a long time to mine
- Falling blocks now break and drop their item when falling on a Cocoa Bean
- Projectiles now sink into Top Snow just like mobs do

## **Graphical**

- Fixed screen fade when sleeping in a Bed to no longer go fully opaque ([MCPE-171461](https://bugs.mojang.com/browse/MCPE-171461))
- Name Tag rendering logic is now based on camera position rather than player position

## **Player**

- Fixed an issue where players would disappear temporarily when joining a game for the first time

## **Stability and Performance**

- Added alerts for iOS users who have run out of disk space
- Fixed crash in blocks JSON loading on iOS
- Fixed a crash that could occur when the game lost focus while entering a world

## **Storage**

- Addressed ‘Out of Storage’ errors and texture corruption on Xbox in large worlds ([MCPE-163050](https://bugs.mojang.com/browse/MCPE-163050))

## **User Interface**

- The Lapis Lazuli icon in the Enchantment Table now matches the one in the Smithing Table screen
- Large enchant labels in the Enchantment Table screen are no longer blocked by overlayed items in the inventory ([MCPE-154428](https://bugs.mojang.com/browse/MCPE-154428))

## **Vibrations**

- Sculk Sensors and Sculk Shriekers no longer risk losing vibrations when receiving them around the simulation distance limit
- Vibrations are no longer produced when stopping the use of items while sneaking ([MCPE-171524](https://bugs.mojang.com/browse/MCPE-171524))
- Wardens now detect items hitting the ground ([MCPE-160889](https://bugs.mojang.com/browse/MCPE-160889))
- Sculk Sensors now send a signal to Sculk Shriekers when detecting items hitting the ground ([MCPE-161165](https://bugs.mojang.com/browse/MCPE-161165))

# **Technical Updates**

- Updated Aux-Value to Block-State table in the documentation to account for data upgrade since inception
- Added server-authoritative-sound bool to server.properties
- Removed MinecraftEntityTypes from @minecraft/server and replaced with version from @minecraft/vanilla-data
- Exposed MoonPhase and World.getMoonPhase to script

## **Add-Ons**

- Display a warning message when camera perspective option is changed in the settings menu but a camera command is active
- Move PlacementDirection ("*minecraft:placement_direction*") and PlacementPosition ("*minecraft:placement_position*") block traits out of experimental. These traits can be used for blocks with "*format_version*" \>= "1.20.20"

## **Commands**

- Fixed issue where the controllers right/left d-pad autocompletes commands when the text box wasn’t selected, which also selected different UI elements on the screen
- "stained_glass" block is now split into unique instances, namely "white_stained_glass", "orange_stained_glass", "magenta_stained_glass", "light_blue_stained_glass", "yellow_stained_glass", "lime_stained_glass", "pink_stained_glass", "gray_stained_glass", "light_gray_stained_glass", "cyan_stained_glass", "purple_stained_glass", "blue_stained_glass", "brown_stained_glass", "green_stained_glass", "red_stained_glass", and "black_stained_glass"
  - Commands will still work with "stained_glass", but "stained_glass" won't be suggested in the command prompt, rather the new names will
- "stained_glass_pane" block is now split into unique instances, namely "white_stained_glass_pane", "orange_stained_glass_pane", "magenta_stained_glass_pane", "light_blue_stained_glass_pane", "yellow_stained_glass_pane", "lime_stained_glass_pane", "pink_stained_glass_pane", "gray_stained_glass_pane", "light_gray_stained_glass_pane", "cyan_stained_glass_pane", "purple_stained_glass_pane", "blue_stained_glass_pane", "brown_stained_glass_pane", "green_stained_glass_pane", "red_stained_glass_pane", and "black_stained_glass_pane"
  - Commands will still work with "stained_glass_pane", but "stained_glass_pane" won't be suggested in the command prompt, rather the new names will

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Fixes this week:

- Fixed a bug where Tool mode UI failed to refresh upon executing the /reload command
- Number input fields will now adjust valid number values to the closest limit if they fall outside of the defined range
- Fixed an issue where UI text was exceeding the boundaries of panes and containers, resulting in improper alignment and visual inconsistencies.
- Selection volumes and gizmos can now be seen through blocks

## **Items**

- "*minecraft:entity_placer*" will now content error when invalid blocks are named in the "*use_on*" and "*dispense_on*" lists
- Released the "*minecraft:use_animation*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:allow_off_hand*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:should_despawn*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:liquid_clipped*" item component out of experimental in json formats 1.20.20 and higher
- Released the "*minecraft:damage*" item component out of experimental in json formats 1.20.20 and higher

## **Molang**

- Renamed *block_property* and has_block\_*property* to *block_state* and *has_block_state*
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.20.20 or higher

**Experimental Features**

- Added *Scoreboard.addScore* and improved *Scoreboard.setScore* to return the updated score

## **API**

Moved the following APIs from beta to stable:

 

- Moved *Direction* to *1.4.0*
- Moved *EntityDamageSource* to *1.4.0*
- Moved *EntityDieAfterEvent* to *1.4.0*
- Moved *EntityEventOptions* to *1.4.0*
- Moved *EntityHitBlockAfterEvent* to *1.4.0*
- Moved *EntityHitEntityAfterEvent* to *1.4.0*
- Moved *EntityHurtAfterEvent* to *1.4.0*
- Moved *EntityHealthChangedAfterEvent* to *1.4.0*
- Moved *Dimension.getBlockFromRay* method to *1.4.0*
- Moved *Dimension.getEntitiesFromRay* method to *1.4.0*
- Moved *Entity.getBlockFromViewDirection* method to *1.4.0*
- Moved *Entity.getEntitiesFromViewDirection* method to *1.4.0*
- Moved *BlockRaycastHit* to *1.4.0*
- Moved *BlockRaycastOptions* to *1.4.0*
- Moved *EntityRaycastHit* to *1.4.0*
- Moved *EntityRaycastOptions* to *1.4.0*
- Moved *PressurePlatePushEvent* to *1.4.0*
- Moved *PressurePlatePopEvent* to *1.4.0*
- Moved *TripWireTripEvent* to *1.4.0*
- Moved *TargetBlockHitEvent* to *1.4.0*
  - Made property *id* accessible even if entity is not valid
  - Made property *typeId* accessible even if entity is not valid
  - Changed item event *source* properties from type *Entity* to *Player*

## **Items**

- Removed the "*minecraft:animates_in_toolbar*" component
- Removed the "*minecraft:explodable*" component
- Extra damage hover text now appears on all component items that have an applied sharpness enchantment
- The "*minecraft:shooter*" component now supports the Quick Charge enchantment with "*minecraft:enchantable*" when "*charge_on_draw*" is true
- Added support for efficiency enchantment for data driven items using the "*minecraft:digger*" component
- Remove nonfunctional entity slot options from "*minecraft:wearable*" component, ie. saddle, entity armor, and chest.
- Custom items with "*minecraft:wearable*" component auto-equip when dropped from a dispenser, matching parity with Vanilla armor items

 

## **Block Destroy Time Changes - Full List**

| **Bedrock ID** | **Bedrock Name** | **Destroy Time** | **Explosion Resistance** |
|----|----|:--:|:--:|
| activator_rail | Activator Rail | 0.5 → 0.7 | 0.5 → 0.7 |
| ancient_debris | Ancient Debris |   | 720 → 1200 |
| andesite_stairs | Andesite Stairs | 2 → 1.5 |   |
| bamboo | Bamboo | 2 → 1 | 2 → 1 |
| bamboo_block | Block of Bamboo |   | 3 → 2 |
| bamboo_sapling | Bamboo Shoot | 0 → 1 | 0 → 1 |
| bee_nest | Bee Nest |   | 2.7 → 0.3 |
| beehive | Beehive |   | 5.4 → 0.6 |
| bell | Bell | 1 → 5 | 3 → 5 |
| big_dripleaf | Big Dripleaf | 0 → 0.1 | 0 → 0.1 |
| campfire | Campfire | 5 → 2 | 5 → 2 |
| chain | Chain |   | 3 → 6 |
| chiseled_deepslate | Chiseled Deepslate |   | 3.6 → 6 |
| cobbled_deepslate | Cobbled Deepslate |   | 3.6 → 6 |
| cobbled_deepslate_double_slab | Cobbled Deepslate Slab (Double) |   | 3.6 → 6 |
| cobbled_deepslate_slab | Cobbled Deepslate Slab |   | 3.6 → 6 |
| cobbled_deepslate_stairs | Cobbled Deepslate Stairs |   | 3.6 → 6 |
| cobbled_deepslate_wall | Cobbled Deepslate Wall |   | 3.6 → 6 |
| composter | Composter | 2 → 0.6 | 2 → 0.6 |
| copper_block | Block of Copper |   | 3.6 → 6 |
| copper_ore | Copper Ore |   | 1.8 → 3 |
| coral_block | Coral Block (10 blocks) | 7 → 1.5 | 0.9 → 6 |
| coral_fan | Coral Fan (5 blocks) |   | 0.9 → 0 |
| coral_fan_dead | Dead Coral Fan (5 blocks) |   | 0.9 → 0 |
| coral_fan_hang | Coral Wall Fan (2 blocks) |   | 0.9 → 0 |
| coral_fan_hang2 | Coral Wall Fan (2 blocks) |   | 0.9 → 0 |
| coral_fan_hang3 | Coral Wall Fan (1 block) |   | 0.9 → 0 |
| cracked_deepslate_bricks | Cracked Deepslate Bricks |   | 3.6 → 6 |
| cracked_deepslate_tiles | Cracked Deepslate Tiles |   | 3.6 → 6 |
| crimson_hyphae | Crimson Hyphae | 0.3 → 2 | 0.3 → 2 |
| crimson_stem | Crimson Stem |   | 0.3 → 2 |
| cut_copper | Cut Copper |   | 3.6 → 6 |
| cut_copper_slab | Cut Copper Slab |   | 3.6 → 6 |
| cut_copper_stairs | Cut Copper Stairs |   | 3.6 → 6 |
| deepslate | Deepslate |   | 3.6 → 6 |
| deepslate_brick_double_slab | Deepslate Brick Slab (Double) |   | 3.6 → 6 |
| deepslate_brick_slab | Deepslate Brick Slab |   | 3.6 → 6 |
| deepslate_brick_stairs | Deepslate Brick Stairs |   | 3.6 → 6 |
| deepslate_brick_wall | Deepslate Brick Wall |   | 3.6 → 6 |
| deepslate_bricks | Deepslate Bricks |   | 3.6 → 6 |
| deepslate_coal_ore | Deepslate Coal Ore |   | 1.8 → 3 |
| deepslate_copper_ore | Deepslate Copper Ore |   | 1.8 → 3 |
| deepslate_diamond_ore | Deepslate Diamond Ore |   | 1.8 → 3 |
| deepslate_gold_ore | Deepslate Gold Ore |   | 1.8 → 3 |
| deepslate_iron_ore | Deepslate Iron Ore |   | 1.8 → 3 |
| deepslate_lapis_ore | Deepslate Lapis Lazuli Ore |   | 1.8 → 3 |
| deepslate_redstone_ore | Deepslate Redstone Ore |   | 1.8 → 3 |
| deepslate_tile_double_slab | Deepslate Tile Slab (Double) |   | 3.6 → 6 |
| deepslate_tile_slab | Deepslate Tile Slab |   | 3.6 → 6 |
| deepslate_tile_stairs | Deepslate Tile Stairs |   | 3.6 → 6 |
| deepslate_tile_wall | Deepslate Tile Wall |   | 3.6 → 6 |
| deepslate_tiles | Deepslate Tiles |   | 3.6 → 6 |
| diorite_stairs | Diorite Stairs | 2 → 1.5 |   |
| double_cut_copper_slab | Cut Copper Slab (Double) |   | 3.6 → 6 |
| dragon_egg | Dragon Egg |   | 3 → 9 |
| dried_kelp_block | Dried Kelp Block |   | 0.5 → 2.5 |
| end_brick_stairs | End Stone Brick Stairs | 2 → 3 | 6 → 9 |
| end_bricks | End Stone Bricks | 0.8 → 3 | 0.8 → 9 |
| exposed_cut_copper_slab | Exposed Cut Copper Slab |   | 3.6 → 6 |
| exposed_copper | Exposed Copper |   | 3.6 → 6 |
| exposed_cut_copper | Exposed Cut Copper |   | 3.6 → 6 |
| exposed_cut_copper_stairs | Exposed Cut Copper Stairs |   | 3.6 → 6 |
| exposed_double_cut_copper_slab | Exposed Cut Copper Slab (Double) |   | 3.6 → 6 |
| granite_stairs | Granite Stairs | 2 → 1.5 |   |
| infested_deepslate | Infested Deepslate |   | 1.8 → 0.75 |
| jukebox | Jukebox | 0.8 → 2 | 0.8 → 6 |
| lantern | Lantern | 5 → 3.5 | 5 → 3.5 |
| lectern | Lectern | 2 → 2.5 | 2 → 2.5 |
| light_block | Light Block |   | 3600000 → 3600000.8 |
| light_gray_candle | Light Gray Candle | 0 → 0.1 | 0 → 0.1 |
| lightning_rod | Lightning Rod |   | 3.6 → 6 |
| lodestone | Lodestone | 2 → 3.5 | 2 → 3.5 |
| magma | Magma Block |   | 1.5 → 0.5 |
| monster_egg | Infested blocks (5 blocks, missing Infested Cobblestone) |   | 1.8 → 0.75 |
| mossy_stone_brick_stairs | Mossy Stone Brick Stairs | 2 → 1.5 |   |
| mud_bricks | Mud Bricks | 2 → 1.5 | 2 → 3 |
| mud_brick_slab | Mud Brick Slab | 2 → 1.5 | 6 → 3 |
| mud_brick_double_slab | Mud Brick Slab (Double) | 2 → 1.5 | 6 → 3 |
| mud_brick_stairs | Mud Brick Stairs | 2 → 1.5 | 6 → 3 |
| mud_brick_wall | Mud Brick Wall | 2 → 1.5 | 6 → 3 |
| netherite_block | Block of Netherite |   | 720 → 1200 |
| oxidized_cut_copper | Oxidized Cut Copper |   | 3.6 → 6 |
| oxidized_cut_copper_slab | Oxidized Cut Copper Slab |   | 3.6 → 6 |
| oxidized_cut_copper_stairs | Oxidized Cut Copper Stairs |   | 3.6 → 6 |
| oxidized_copper | Oxidized Copper |   | 3.6 → 6 |
| oxidized_double_cut_copper_slab | Oxidized Cut Copper Slab (Double) |   | 3.6 → 6 |
| piston | Piston | 0.5 → 1.5 | 0.5 → 1.5 |
| piston_arm_collision | Piston Head (Normal) | 0.5 → 1.5 | 0.5 → 1.5 |
| pointed_dripstone | Pointed Dripstone |   | 1.8 → 3 |
| polished_andesite_stairs | Polished Andesite Stairs | 2 → 1.5 |   |
| polished_blackstone | Polished Blackstone | 1.5 → 2 |   |
| polished_blackstone_stairs | Polished Blackstone Stairs | 1.5 → 2 |   |
| polished_blackstone_wall | Polished Blackstone Wall | 1.5 → 2 |   |
| polished_deepslate | Polished Deepslate |   | 3.6 → 6 |
| polished_deepslate_double_slab | Polished Deepslate Slab (Double) |   | 3.6 → 6 |
| polished_deepslate_slab | Polished Deepslate Slab |   | 3.6 → 6 |
| polished_deepslate_stairs | Polished Deepslate Stairs |   | 3.6 → 6 |
| polished_deepslate_wall | Polished Deepslate Wall |   | 3.6 → 6 |
| polished_diorite_stairs | Polished Diorite Stairs | 2 → 1.5 |   |
| polished_granite_stairs | Polished Granite Stairs | 2 → 1.5 |   |
| reinforced_deepslate | Reinforced Deepslate |   | 720 → 1200 |
| respawn_anchor | Respawn Anchor |   | 720 → 1200 |
| scaffolding | Scaffolding | 0.6 → 0 | 0.9 → 0 |
| sculk | Sculk | 0.6 → 0.2 | 0.6 → 0.2 |
| sculk_catalyst | Sculk Catalyst |   | 1.8 → 3 |
| sculk_shrieker | Sculk Shrieker |   | 1.8 → 3 |
| shulker_box | Shulker Box (16 blocks) | 2.5 → 2 | 2.5 → 2 |
| smooth_quartz_stairs | Smooth Quartz Stairs | 0.8 → 2 | 0.8 → 6 |
| smooth_stone | Smooth Stone | 1.5 → 2 |   |
| sniffer_egg | Sniffer Egg | 0.4 → 0.5 | 0.4 → 0.5 |
| soul_campfire | Soul Campfire | 5 → 2 | 5 → 2 |
| soul_lantern | Soul Lantern | 5 → 3.5 | 5 → 3.5 |
| soul_soil | Soul Soil | 1 → 0.5 | 1 → 0.5 |
| sticky_piston | Sticky Piston | 0.5 → 1.5 | 0.5 → 1.5 |
| sticky_piston_arm_collision | Piston Head (Sticky) | 0.5 → 1.5 | 0.5 → 1.5 |
| stripped_bamboo_block | Block of Stripped Bamboo |   | 3 → 2 |
| stripped_crimson_hyphae | Stripped Crimson Hyphae | 0.3 → 2 | 0.3 → 2 |
| stripped_crimson_stem | Stripped Crimson Stem |   | 0.3 → 2 |
| stripped_warped_hyphae | Stripped Warped Hyphae | 0.3 → 2 | 0.3 → 2 |
| stripped_warped_stem | Stripped Warped Stem |   | 0.3 → 2 |
| sweet_berry_bush | Sweet Berry Bush | 0.2 → 0 | 0.2 → 0 |
| turtle_egg | Turtle Egg | 0.4 → 0.5 | 0.4 → 0.5 |
| undyed_shulker_box | Shulker Box | 2.5 → 2 | 2.5 → 2 |
| warped_hyphae | Warped Hyphae | 0.3 → 2 | 0.3 → 2 |
| warped_stem | Warped Stem |   | 0.3 → 2 |
| waxed_cut_copper | Waxed Cut Copper |   | 3.6 → 6 |
| waxed_cut_copper_slab | Waxed Cut Copper Slab |   | 3.6 → 6 |
| waxed_cut_copper_stairs | Waxed Cut Copper Stairs |   | 3.6 → 6 |
| waxed_copper | Waxed Block of Copper |   | 3.6 → 6 |
| waxed_double_cut_copper_slab | Waxed Cut Copper Slab (Double) |   | 3.6 → 6 |
| waxed_exposed_copper | Waxed Exposed Copper |   | 3.6 → 6 |
| waxed_exposed_cut_copper | Waxed Exposed Cut Copper |   | 3.6 → 6 |
| waxed_exposed_cut_copper_slab | Waxed Exposed Cut Copper Slab |   | 3.6 → 6 |
| waxed_exposed_cut_copper_stairs | Waxed Exposed Cut Copper Stairs |   | 3.6 → 6 |
| waxed_exposed_double_cut_copper_slab | Waxed Exposed Cut Copper Slab (Double) |   | 3.6 → 6 |
| waxed_oxidized_copper | Waxed Oxidized Copper |   | 3.6 → 6 |
| waxed_oxidized_cut_copper | Waxed Oxidized Cut Copper |   | 3.6 → 6 |
| waxed_oxidized_cut_copper_stairs | Waxed Oxidized Cut Copper Stairs |   | 3.6 → 6 |
| waxed_oxidized_cut_copper_slab | Waxed Oxidized Cut Copper Slab |   | 3.6 → 6 |
| waxed_oxidized_double_cut_copper_slab | Waxed Oxidized Cut Copper Slab (Double) |   | 3.6 → 6 |
| waxed_weathered_cut_copper | Waxed Weathered Cut Copper |   | 3.6 → 6 |
| waxed_weathered_cut_copper_slab | Waxed Weathered Cut Copper Slab |   | 3.6 → 6 |
| waxed_weathered_cut_copper_stairs | Waxed Weathered Cut Copper Stairs |   | 3.6 → 6 |
| waxed_weathered_copper | Waxed Weathered Copper |   | 3.6 → 6 |
| waxed_weathered_double_cut_copper_slab | Waxed Weathered Cut Copper Slab (Double) |   | 3.6 → 6 |
| weathered_copper | Weathered Copper |   | 3.6 → 6 |
| weathered_cut_copper | Weathered Cut Copper |   | 3.6 → 6 |
| weathered_cut_copper_slab | Weathered Cut Copper Slab |   | 3.6 → 6 |
| weathered_cut_copper_stairs | Weathered Cut Copper Stairs |   | 3.6 → 6 |
| weathered_double_cut_copper_slab | Weathered Cut Copper Slab (Double) |   | 3.6 → 6 |

##  

## **Remaining Parity Breaks**[](#_msocom_1)

**DT - destroy time**\
**ER - explosion resistance**

| **Bedrock ID** | **Bedrock name** | **DT Bedrock** | **DT Java** | **ER Bedrock** | **ER Java** |
|----|----|:--:|:--:|:--:|:--:|
| cobblestone_wall | Granite Wall | 2 | 1.5 |   |   |
| cobblestone_wall | Sandstone Wall | 2 | 0.8 | 6 | 0.8 |
| cobblestone_wall | Prismarine Wall | 2 | 1.5 |   |   |
| cobblestone_wall | Diorite Wall | 2 | 1.5 |   |   |
| cobblestone_wall | Andesite Wall | 2 | 1.5 |   |   |
| cobblestone_wall | End Stone Brick Wall | 2 | 3 | 6 | 9 |
| cobblestone_wall | Stone Brick Wall | 2 | 1.5 |   |   |
| cobblestone_wall | Mossy Stone Brick Wall | 2 | 1.5 |   |   |
| cobblestone_wall | Red Sandstone Wall | 2 | 0.8 | 6 | 0.8 |
| stone_block_slab2 | Prismarine Brick Slab | 2 | 1.5 |   |   |
| stone_block_slab2 | Dark Prismarine Slab | 2 | 1.5 |   |   |
| stone_block_slab2 | Prismarine Slab | 2 | 1.5 |   |   |
| double_stone_block_slab2 | Prismarine Brick Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab2 | Dark Prismarine Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab2 | Prismarine Slab (Double) | 2 | 1.5 |   |   |
| stone_block_slab3 | Andesite Slab | 2 | 1.5 |   |   |
| stone_block_slab3 | End Stone Brick Slab | 2 | 3 | 6 | 9 |
| stone_block_slab3 | Polished Andesite Slab | 2 | 1.5 |   |   |
| stone_block_slab3 | Polished Diorite Slab | 2 | 1.5 |   |   |
| stone_block_slab3 | Granite Slab | 2 | 1.5 |   |   |
| stone_block_slab3 | Diorite Slab | 2 | 1.5 |   |   |
| stone_block_slab3 | Polished Granite Slab | 2 | 1.5 |   |   |
| double_stone_block_slab3 | Andesite Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab3 | End Stone Brick Slab (Double) | 2 | 3 | 6 | 9 |
| double_stone_block_slab3 | Polished Andesite Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab3 | Polished Diorite Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab3 | Granite Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab3 | Diorite Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab3 | Polished Granite Slab (Double) | 2 | 1.5 |   |   |
| stone_block_slab4 | Mossy Stone Brick Slab (Double) | 2 | 1.5 |   |   |
| double_stone_block_slab4 | Mossy Stone Brick Slab (Double) | 2 | 1.5 |   |   |
| crying_obsidian | Crying Obsidian | 35 | 50 |   |   |
| monster_egg | Infested Cobblestone | 0.75 | 1 |   |   |
| obsidian | Obsidian | 35 | 50 |   |   |
| quartz_block | Smooth Quartz | 0.8 | 2 | 0.8 | 6 |
| red_sandstone | Smooth Red Sandstone | 0.8 | 2 | 0.8 | 6 |
| sandstone | Smooth Sandstone | 0.8 | 2 | 0.8 | 6 |
