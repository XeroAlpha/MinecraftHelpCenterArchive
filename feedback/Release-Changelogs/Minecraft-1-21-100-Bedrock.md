---
title: Minecraft - 1.21.100 (Bedrock)
date: 2025-08-05T14:27:43Z
updated: 2025-08-05T15:43:06Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38581287884557-Minecraft-1-21-100-Bedrock
hash:
  h_01K1X9YQVF7VBVA9ZRB680RKQK: experimental-game-drop-features
  h_01K1X9YQVFH2MNXCV8XQ1YSQQM: copper-golem
  h_01K1X9YQVHW5VVW71M2M8HJWY2: copper-golem-item-sorting
  h_01K1X9YQVPWJ82SQHT38AS9V9J: copper-chest
  h_01K1X9YQVQPQVS9X68K3YFF4JR: copper-tools
  h_01K1X9YQVSJ6K5HR9Z1XQWH3WY: copper-armor
  h_01K1X9YQVVB94S2G501KTKTKJG: new-copper-items
  h_01K1X9YQVW3GJ11SSBZHJP5GPW: features-and-bug-fixes
  h_01K1X9YQVW9KYZF1NNDEQG080R: accessibility-features
  h_01K1X9YQVXBXZ5J7XKWS62FM80: biomes
  h_01K1X9YQWCMWPKBT6X945CNKZM: blocks
  h_01K1X9YQWGQX4211PWMQYYQVVV: character-creator
  h_01K1X9YQWHQC4VEXVS26CBXJDY: gameplay
  h_01K1X9YQWNJAM1VKTH2HNSBC6Y: graphical
  h_01K1X9YQX0385V0JDT3YVYRJ4R: mobs
  h_01K1X9YQXD8939W6CKJZXTZZMS: sounds
  h_01K1X9YQXEK5N5ETJ2MP8WZX5S: stability-and-performance
  h_01K1X9YQXFY7ZV5SKTYAGQA0YH: user-interface
  h_01K1X9YQXN72FWP4PW7AEM0FH9: vanilla-parity
  h_01K1X9YQXNKWRNP9KDWCEXB8EJ: technical-updates
  h_01K1X9YQXNZEAABY7S90ZN7MTW: ai-goals
  h_01K1X9YQY3ZPE31BE36TACEQPX: add-ons-and-script-engine
  h_01K1X9YQY4ZFTVY551SXV1J149: api
  h_01K1X9YQYNQPQXG4835NHQXMWJ: audio
  h_01K1X9YQYPE7EHDY87RZHS6VGJ: biomes-1
  h_01K1X9YQYPH5DAG58MCPEDMHXY: blocks-1
  h_01K1X9YQYRGSAZJSPD7AJH2VZY: block-components
  h_01K1X9YQYSGDNBM262G1C20R5V: blocks-2
  h_01K1X9YQYTXP7C9AKB8CGQEPAB: commands
  h_01K1X9YQYVCW2K0VHVSCFA1R2N: components
  h_01K1X9YQYW2ZCCGBWCYJXYNMYQ: creator-camera
  h_01K1X9YQYXDNMQSWAPWTBQ7MM8: editor
  h_01K1X9YQZ3WGHJ71NCN3H2GFJA: entity-components
  h_01K1X9YQZ51F0JXYYQJ50NQ83P: graphical-1
  h_01K1X9YQZ6Q9C45EJTDPXS9GJJ: items
  h_01K1X9YQZ6T18FEGVWBESJH644: jigsaw
  h_01K1X9YQZ7YWWDPV1NTXMW9CFY: molang
  h_01K1X9YQZ8PJMGR7BJ8JHAAE2A: textures
  h_01K1X9YQZ9V3RAY7A53RNGNTT9: user-interface-1
  h_01K1X9YQZARETT9H4SFWVHVX4Q: mobs-1
  h_01K1X9YQZBT1WEY3RZMTHAJGDH: experimental-technical-updates
  h_01K1X9YQZCWBHS9MKR0MFHQ3E7: world-generation
  h_01K1X9YQZD332C7447HF98QVG0: api-1
  h_01K1X9YQZR7783KQQVEGQC8YDV: biomes-2
  h_01K1X9YQZS43TRZ17FB3N9WMRT: commands-1
  h_01K1X9YQZTMGTPCPHTT0HV2ZG1: gameplay-1
  h_01K1X9YQZVKSDF38AQDM28YES4: jigsaw-1
  h_01K1X9YQZVX6A6ZEHE9B7TVPZT: scripting
  h_01K1X9YQZW73N4B953SV6Z0T6H: ui
---

**Posted:** 5 August 2025

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/38581287877645" alt="R21U10_VV_1080p.jpg" />
</figure>

*Clonk! Clonk! Clonk!* If you thought that’s the sound of a copper golem trying jazzercise, think again. It’s actually us digging deeper into experimental features only to discover that the Overworld is flat. Hang on, that’s not right either? But the Flat World presets in Bedrock now include the Void too! Throw in a number of bug fixes and how you can set your spawn point in the End, and you’ve got yourself our latest Bedrock release. Happy ~~clonking~~ mining!

## Experimental Game Drop Features

To try out upcoming features, enable the Experimental Features toggle in your world settings. These features are still in development and may cause your world to crash, break, or become incompatible with future updates.

### Copper Golem

Copper golems are handy, organization-loving companions that’ll bring your base to life! Summoned with copper and carved pumpkins, the copper golem removes items you leave in copper chests, and sorts them based on the item type into chests around your base!

- Copper Golem will drop between 1 and 3 Copper Ingots when killed
- Copper Golem can help with sorting items into Chests

#### Copper Golem Item Sorting

- If the Copper Golem is not holding an item, it will look for nearby Copper Chests to try to pick up an item
- The Copper Golem will look in any oxidized and waxed Copper Chest variant to pick up items
- It can pick up max 16 items in a stack at the time
- Any item in a Copper Chest can be picked up
- If the Copper Golem is holding an item, it will look for nearby Chests to try to place the item in
- The Copper Golem will look in Chests and Trapped Chests to try to place items -
- It can place an item in a Chest if it's empty, or if it contains the same type of item it is holding in its hand
- The Copper Golem will visit max 10 Chests or Copper Chests in sequence to try to pick up or place an item
- If no matching chest is found the Copper Golem will idle for 7 seconds before trying again
- The search area for chests from the Copper Golem's position is horizontally 32 blocks and vertically 8 blocks

### Copper Chest

Copper chests are a new block! Summon a copper golem to get your first copper chest, which you can leave to oxidize, or keep pristine with wax. Drop items into a copper chest, and then sit back and relax as your copper golem sorts them into normal chests around your base!

- Copper Chest is a new type of chest that has waxed and oxidized variants
- Copper Chests oxidize over time and can be waxed like other Copper blocks
- Copper Chests can be crafted using a Chest and Copper Ingots

### Copper Tools

What comes between stone and iron? Now the answer is: copper! Craft tools, weapons, and armor from copper, giving this early-game ore more uses than ever before. Unlike copper blocks, these items won't oxidize, but like all copper blocks - they will look beautiful!

- Copper tools and weapons are crafted and repaired using copper ingots. They do the same amount of damage as stone but have higher durability. Copper tools work faster than stone tools, but they are slower than their iron counterparts. Copper tools have higher enchantability than diamond, but slightly less than iron.
- Copper Axe
- Copper Hoe
- Copper Pickaxe
- Copper Shovel
- Copper Sword

### Copper Armor

- Copper armor has higher durability than leather but less than iron. Copper armor enchantability sits slightly lower than with iron.
- Copper Helmet
- Copper Chestplate
- Copper Leggings
- Copper Boots

### New Copper Items

- Copper equipment turns into Copper Nuggets when smelted.

## Features and Bug Fixes

### Accessibility Features

- Added screen narrator enumeration to UI buttons when adding a new server
- Sugar Cane clusters will now become slightly transparent when the camera passes through them

### Biomes

- Trees now generate more sparsely in Groves
- Trees now generate more frequently in Snowy Plains
- Mushrooms now properly generate under trees in Swamps and other biomes where they naturally occur
- Seagrass no longer generates poking through ice in biomes with frozen water surfaces
- Frozen Ocean surface is no longer entirely covered by ice, and now features patches of open water
- Deep Frozen Ocean surface is no longer covered by ice and now consists entirely of open water
- The color of water and underwater fog in Swamps when has been updated to match the intended look of the game ([MCPE-63460](https://bugs.mojang.com/browse/MCPE-63460))
  - This change only impacts Simple and Fancy Graphics, but not Vibrant Visuals
- Mega Pines and Mega Spruces now always generate with Podzol beneath every block of their trunk, instead of appearing suspended over air ([MCPE-140517](https://bugs.mojang.com/browse/MCPE-140517))
- Increased the size of the Podzol patch generated beneath Mega Pines and Mega Spruces
  - This change affects both world generation and trees grown by players
- One-block-deep water puddles now generate in Swamps and Mangrove Swamps ([MCPE-137029](https://bugs.mojang.com/browse/MCPE-137029))
- Grass blocks no longer generate at the bottom of carved terrain in Mushroom Fields biomes ([MCPE-74983](https://bugs.mojang.com/browse/MCPE-74983))
- Icebergs in Frozen Ocean biomes now generate with a shape and frequency that more closely matches Java

### Blocks

- Leash Knots now immediately disappear when the block supporting them is destroyed ([MCPE-163558](https://bugs.mojang.com/browse/MCPE-163558))
- Leashed mobs can no longer be attached to Walls ([MCPE-187041](https://bugs.mojang.com/browse/MCPE-187041))
- Fixed bug where an Enchanted Book with Fire Aspect could be used to light Campfires, Candles, and activate TNT ([MCPE-100021](https://bugs.mojang.com/browse/MCPE-100021))
- Fixed bug where a Chest could end up in a corrupted state by being paired when pushed by a Piston ([MCPE-224452](https://bugs.mojang.com/browse/MCPE-224452))

### Character Creator

- Fixed "Choose New Skin" button no longer working after pressing back button on Android. ([MCPE-149587](https://bugs.mojang.com/browse/MCPE-149587))

### Gameplay

- Emoting players will no longer get stuck in a boat
- Hotbar can always be hit in any touch device. The detection area matches the texture even if you have customise controls enabled
- Fixed an issue that caused custom music to stay paused after leaving and re-entering the game ([MCPE-219364](https://bugs.mojang.com/browse/MCPE-219364))
- The block breaking animation will now stop when opening the Pause Menu ([MCPE-191029](https://bugs.mojang.com/browse/MCPE-191029))
- Quickly swapping the selected item slot after a Riptide Trident uses will not rewind the player position anymore ([MCPE-190952](https://bugs.mojang.com/browse/MCPE-190952))
- Non-player entities transported from the End to the Overworld now correctly arrive at the world spawn ([MCPE-157125](https://bugs.mojang.com/browse/MCPE-157125))
- The spawn point can now be set in The End through a command

### Graphical

- Weather events now affect the scene illumination and the color of clouds and sky in Vibrant Visuals
- Fixed a bug where Caustics were not appearing for player hand and held items in First Person view.
- The lead now correctly attaches to the player hand in first person with Vibrant Visuals enabled ([MCPE-217597](https://bugs.mojang.com/browse/MCPE-217597))
- Fixed the Spyglass and fire effects in first person not receiving gamma calibration in Vibrant Visuals
- Fixed a bug that caused Bottle o' Enchanting not to glow when thrown in Vibrant Visuals
- Fixed clusters of Mangrove Root blocks displaying a non-uniform color.
- Fixed Chain blocks not being rendered with PBR properties defined by the texture set.
- Fixed issue that caused Chain blocks to change PBR properties of surrounding blocks.
- 
- Fixed incorrect colors being displayed when render controllers used is_hurt_color along with on_fire_color ([MCPE-220347](https://bugs.mojang.com/browse/MCPE-220347))
- Fixed render controllers displaying incorrect textures when using identically named Array.name values across geometry and texture expressions. ([MCPE-220829](https://bugs.mojang.com/browse/MCPE-220829))
- Fixed flipbook textures not working with variations textures ([MCPE-190531](https://bugs.mojang.com/browse/MCPE-190531))
- Fixed faces of non-full blocks (eg. Cakes or Trapdoors) having an unnatural ambient occlusion applied to them in some neighboring blocks configurations
- Fixed an issue where custom animations would be incorrect in first person with Vibrant Visuals enabled
- Items dropped in first person view appear slightly higher, without affecting the actual item position
- Moved the graphics mode and render distance options to the top of video settings for convenience
- Fixed an issue where certain blocks did not show a highlight when they were interactable, if outline selection was disabled ([MCPE-180453](https://bugs.mojang.com/browse/MCPE-180453))
- Adjusted default rendering position for players holding leads if a lead_hold locator is not defined on the model, such that the lead does not render out of the player's forehead ([MCPE-96298](https://bugs.mojang.com/browse/MCPE-96298))
- Fixed the animation of End Crystal healing beams in Vibrant Visuals ([MCPE-208094](https://bugs.mojang.com/browse/MCPE-208094))
- Fixed the animation of Beacon beams in Vibrant Visuals ([MCPE-220579](https://bugs.mojang.com/browse/MCPE-220579))
- Increased thickness in Vibrant Visuals mode of the fishing line, so that it does not disappear when TAA is selected
- Reduced the alpha value from 60% to 25% for hurt color overlay on entities to aid in accessibility
- Added option to change cloud quality in settings
- Updated Reflections configurations for "Favor Performance" presets on Xbox platforms with Vibrant Visuals
- Certain sprites rendered in the world are now scaled and offset to be in parity with Java, and to better match their collider
  - Affects Snowballs, Ender Pearls, Ender Eyes, Experience Bottles, Splash Potions, Lingering Potions, and Ice Bombs (Minecraft Education)

### Mobs

- Piglin Brutes will now despawn properly on peaceful difficulty ([MCPE-88837](https://bugs.mojang.com/browse/MCPE-88837))
- Fixed a bug where Glow Squid would not act as leash anchor points
- The ambient sound interval for Animals and the Ghast have been adjusted to 6 and 4 seconds, respectively, matching Java
- Fixed bug that caused Happy Ghast to not rotate properly if dismounted while moving vertically
- Happy Ghast now drops 1-3 experience orbs when killed by a player
- Starting in 1.21.100, we’re gradually enabling engine changes to mob death behavior. This refactor shouldn’t affect gameplay but we’ll monitor for any death-related bugs.
- Boats no longer play step sounds when on the ground ([MCPE-51638](https://bugs.mojang.com/browse/MCPE-51638))
- Fixed a bug where the Happy Ghast riding sound would sometimes play in the loading screen
- Fixed a bug where both Ghast and Happy Ghast ambient sounds would not be audible further than 16 blocks away from the player ([MCPE-298575](https://bugs.mojang.com/browse/MCPE-298575))
  - Ghast ambient sound is now audible within 80 blocks
  - Happy Ghast ambient sound is now audible within 64 blocks
- Updated the way leashed mobs interact with vehicles
  - Leashed mobs can now be pulled into Boats, Minecarts, and other rideable entities if the leash is slackened when close to those entities ([MCPE-157907](https://bugs.mojang.com/browse/MCPE-157907))
  - Leashed mobs will now automatically dismount their vehicle if the leash is stretched far enough
  - These changes will come to Java Edition at a later date
- Increased Squid and Glow Squid height offset, to offset them slightly forward and decrease the size of their collision boxes to match Java ([MCPE-114253](https://bugs.mojang.com/browse/MCPE-114253))
- Leads can no longer be used on untamed Wolves that have been angered ([MCPE-178947](https://bugs.mojang.com/browse/MCPE-178947))
- Allays can no longer be given Leads ([MCPE-186435](https://bugs.mojang.com/browse/MCPE-186435))
- Allays can now be unleashed by interacting with them while not holding any item ([MCPE-159044](https://bugs.mojang.com/browse/MCPE-159044))
- Fixed a bug where Foxes could not pick up non-stackable items ([MCPE-178487](https://bugs.mojang.com/browse/MCPE-178487))
- Fixed bug where Foxes would wear picked up armor instead of holding it ([MCPE-153135](https://bugs.mojang.com/browse/MCPE-153135))
- Bogged can now spawn as Spider Jockeys in Swamps and Mangrove Swamps ([MCPE-221119](https://bugs.mojang.com/browse/MCPE-221119))

### Sounds

- Increased volume of Happy Ghast ride sound
- Leashes will now emit their breaking sound from the location of the leash holder, rather than the actor being leashed

### Stability and Performance

- Fixed an issue where Xbox cloud saves would grow excessively in size with each save. ([MCPE-197900](https://bugs.mojang.com/browse/MCPE-197900))
- Fixed rare crashes during the app suspension on Xbox

### User Interface

- Fixed the link text for the stacking add-ons banner in Create New World ([MCPE-194268](https://bugs.mojang.com/browse/MCPE-194268))
- Removed trailing spaces from the Tears music disc description ([MCPE-219554](https://bugs.mojang.com/browse/MCPE-219554))
- Recovering "Friends" and "Invite to Game" buttons when a scoreboard is visible ([MCPE-218617](https://bugs.mojang.com/browse/MCPE-218617))
- Fixed an issue when clicking the world image in the world grid layout there was no click sound ([MCPE-217667](https://bugs.mojang.com/browse/MCPE-217667))
- Player Dots on the Locator Bar now move smoothly when strafing near other Players
- Touch Controls: Pick Block button is now available while inside Scaffolding or Powder Snow ([MCPE-190776](https://bugs.mojang.com/browse/MCPE-190776))
- Player Dot on the Locator Bar now stops 1 pixel before the edge of the bar
- Touch Controls: The button to change camera perspective is now also available in Spectator mode ([MCPE-190751](https://bugs.mojang.com/browse/MCPE-190751))
- Fixed a bug which could cause the bed screen to not be removed properly when being disconnected from a server.
- The Owned/Download text now shows on items you own outside of the My Library page
- The Marketplace Pass Chevron will now show on Items that the user owns while on normal Marketplace pages. Not on the Inventory. Owned/Download text moved to the right.
- Updated Marketplace Pass chevron to show on items in the inventory. Moved Download/Owned text to right side.
- The audio default volumes have been updated.
- We’ve made some adjustments to the spacing of items in the settings menus in this update. Work is still ongoing, and we plan to make further refinements in future updates!
- When using a Lead on an entity the "Attach" prompt is now translated ([MCPE-219627](https://bugs.mojang.com/browse/MCPE-219627))

### Vanilla Parity

- Added The Void as a flatworld preset

## Technical Updates

### AI Goals

- Added the minecraft:behavior.take_block AI goal, allows an entity to take blocks from the world with the following options:
  - blocks: Array of block descriptors that the entity can take, if empty can take any block
  - can_take: Entity filters for when the entity can use the goal
  - on_take: Trigger ran if the entity does take a block
  - xz_range: XZ range from which the entity will try and take blocks from
  - y_range: Y range from which the entity will try and take blocks from
  - chance: Chance each tick to try and take a block
  - affected_by_griefing_rule: If the goal is affected by the mob griefing game rule
  - requires_line_of_sight: If the entity requires line of sight on the block it tries to take
- Removed the minecraft:behavior.enderman_take_block AI goal, it upgrades to the above goal
- Added the minecraft:behavior.place_block AI goal, allows an entity to place blocks in the world with the following options:
  - placeable_carried_blocks: Array of block descriptors that the entity can place if its carried item, if empty can place any block from its carried item
  - randomly_placeable_blocks: Array of weighted block descriptors that the entity can randomly place, if empty the entity will try to place the block in its carried item instead
  - can_place: Entity filters for when the entity can use the goal
  - on_place: Trigger ran if the entity does place a block
  - xz_range: X range from which the entity will try and place blocks in
  - y_range: Y range from which the entity will try and place blocks in
  - chance: Chance each tick to try and place a block
  - affected_by_griefing_rule: If the goal is affected by the mob griefing game rule
- Removed the minecraft:behavior.enderman_leave_block AI goal, it upgrades to the above goal
- Added the minecraft:behavior.transport_items AI goal, allows a mob to transport items from and to containers
  - Description:
    - If the mob is not carrying an item it will try to find a container matching source_container_types and will attempt to take an item from the first non-empty slot. It will take the largest of max_stack_size and the size of the stack in that slot. If the container is empty or it does not find a match it will remember this container as visited and search for the next container from which to pick up an item. If it fails to find an unvisited container from which to pick up items it will disable the goal for idle_cooldown seconds and reset what containers it has visited. Once it has picked up an item it resets what containers it has visited.
    - If the mob is carrying an item it will try to find a container matching destination_container_types and attempt to put its carried item in it. It will put as much of the carried item as possible into the container. If it is still carrying an item (the container is full) it will remember the container as visited and try to find the next container to put items in. If it fails to find an unvisited container in which to put items it will disable the goal for idle_cooldown seconds and reset what containers it has visited. Once it has stored items and is empty handed again it resets what containers it has visited.
    - If at any point the target container becomes an invalid target (the block could be removed or a chest could have a cat sit on it for example), the mob will mark the position as visited and move to the next target.
  - Fields:
    - source_container_types: A list of block descriptors that should be a container type to get items from. Default is any container
    - destination_container_types: A list of block descriptors that should be a container type to put items in. Default is any container
    - max_stack_size: The maximum stack size that the mob will try to take from a container. Default is 16
    - interaction_time: The amount of time spent interacting with the containers in seconds. Default is 3.0
    - allow_simultaneous_interaction: Whether the entity is allowed to simultaneously interact with a container that another non-player entity is already interacting with. Default is false
    - search_strategy: Whether to select the nearest valid container or a random valid container in range. valid values are "nearest" or "random" (default).
    - search_distance: The maximum horizontal and vertical distance at which to find containers for taking or placing items. Default \[62, 32\]
    - max_visited_containers: The maximum number of containers the mob will visit before resetting. 0 is unlimited and default is 16
    - initial_cooldown: Time, in seconds, the mob will wait after spawning or after its available goals have changed (e.g. due to a component group update). Default is 0
    - idle_cooldown: When the mob cannot find a valid container to interact with, the goal will be disabled for this amount of time in seconds. Default is 20
    - place_strategy: governs which container contents the goal is allowed to add to:
      - "with_matching": Only allows placing item in a container already having stack(s) of item.
      - "with_matching_or_empty": Like the above, but additionally allows placement in empty containers.
      - "any": Puts no restriction, allows placement of item in container as long as there is space. This is the default behavior.
    - allowed_items: A list of item descriptors that are the only items the mob is allowed to transport. If non-empty disallowed_items must be empty. Default is empty (all items allowed)
    - disallowed_items: A list of item descriptors that are the mob is not allowed to transport. If non-empty allowed_items must be empty. Default is empty (no items disallowed)
  - Requirements and limitations:
    - Initially the component requires the 2025 Drop 3 experiment to be enabled but it will be generally available in a later update
    - A navigation component is needed to enable the mob to navigate to the container. E.g. minecraft:navigation.walk
    - At the moment Chests, Copper Chests, Barrels, and Shulker Boxes are the only supported containers

### Add-Ons and Script Engine

- Custom biome names are no longer implied by their filenames. Biome names are explicitly specified via the "identifier" property under the "description" sub-object of their JSON definition.
- Biome identifiers must now be namespaced (ex: "minecraft:plains"). Client biomes with a format version lower than 1.21.90 will have their identifier automatically prefixed "minecraft:" when loaded if no namespace is already specified.
- Updates biome documentation to match updated biome JSON formatting and requirements.
- Biomes client settings now look up settings based on the biome's full name, including its namespace. Vanilla biomes will fall back on their name without a namespace if an exact match is not found before falling back on default settings (for example, "minecraft:plains" will match itself, then "plains" if no setting was found)

### API

- Moved custom commands from beta to 2.1.0.

- Moved Player command permissions from beta to 2.1.0.

- Fixed a bug where the includeLiquidBlocks property on BlockRaycastOptions would not correctly result in hits on liquids if it didn't also reach a solid block afterward.

- Fixing a crash with the DebugDrawer when used too early in the client joining a world (such as inside the playerSpawn event).

- The message parameter of the setText method on BlockSignComponent no longer accepts a RawText as an option. This option was redundant as it is covered by the existing RawMessage option. This affects the setText method in all versions. .

- Updated many error strings to use consistent punctuation.

- The properties minValue and maxValue on the ArgumentOutOfBoundsError class are now optional. .

- Updated several APIs to throw ArgumentOutOfBoundsError instead of Error where appropriate. .

  This affects the following APIs in all versions:

  - Entity.addEffect for when the amplifier setting is out of bounds (0 - 255) or duration setting is out of bounds (1 - 20000000).
  - Entity.applyImpulse for when the vector parameter is out of bounds (-1000 - 1000 per axis).
  - ItemStack.setLore and ContainerSlot.setLore for when the loreList parameter is out of bounds (0 - 100 max lines, 0 - 1000 max length per line).
  - ItemStack.setAmount and ContainerSlot.setAmount for when the amount parameter is out of bounds (0 - 255).

- Some existing errors that throw ArgumentOutOfBoundsError have been updated to use a standardized error message. .

  This affects the following APIs in all versions:

  - ScreenDisplay.setTitle for when the fadeInDuration, stayDuration or fadeOutDuration settings are out of bounds (min value of 0).
  - StructureManager.placeStructure for when the integrity setting is out of bounds (0 - 1).
  - PlayerAimAssist.setAimAssistSettings for when the viewAngle setting is out of bounds (10 - 90) or distance setting is out of bounds (1 - 16).
  - ItemStack.setNameTag and ContainerSlot.setNameTag for when the nameTag parameter length is out of bounds (0 - 255).

- Some existing errors that throw InvalidArgumentError have been updated to use a standardized error message. .
  - CustomSpawnRulesRegistry.registerObstructionCallback for when the predicate parameter is empty or a duplicate.

- Released 'DyeableItemComponent' to stable

- Moved enum MovementType from beta to v2.0.0

- Moved enum StickyType from beta to v2.0.0

- Moved class BlockMovableComponent from beta to v2.0.0

- Moved localizationKey property on Block, Entity, Dimension, and ItemStack from beta into 2.1.0

- Moved Container methods contains, firstEmptySlot, firstItem, find, and findLast from beta into 2.1.0

- Added new error class UnsupportedFunctionalityError which is thrown for certain cases where a particular functionality such as a method, or part of a method based on the parameters, is not supported. An example is calling the Entity method remove on a player

- Added new error class EntitySpawnError which is thrown when an entity fails to spawn via the spawnEntity method on Dimension

- Updated many methods to throw custom errors to provide better context and information of the problem that occurred

### Audio

- Fixed a bug where "ambient" sounds played by a flying mob would have the volume set to 0.2 by default ([MCPE-298575](https://bugs.mojang.com/browse/MCPE-298575))

### Biomes

- Updated "minecraft:grass_appearance" component with "grass_is_shaded" variable if true it adds a shading effect to the grass as if there was a roof.

### Blocks

- "alpha_test_to_opaque", "alpha_test_single_sided_to_opaque", and "blend_to_opaque" will now shift to "opaque" in the distance again when used as render method in minecraft:material_instances
- Removed Upcoming Creator Features toggle requirement from Movable Component.
- Released the component minecraft:random_offset from experimental for block format versions 1.21.100 or higher
- Fix incorrect destruction particles on blocks that do not have a "minecraft:destruction_particles" component on the base block json definition, it will now fall back to the "minecraft:material_instances" component's definition for that permutation like it used to
- Fixed a crash related to reading incorrect or corrupt json data for animated blocks. Instead we now trigger a content error and prevent the block from animating.
- Blocks with improperly configured textures will now show additional content errors
- Released the particle count field for the block destruction particles component out of experimental

### Block Components

- Modified minecraft:geometry block component
  - Field uv_lock no longer requires **Upcoming Creator Features** experiment to work. JSON format_version still needs to be \>= 1.21.90

### Blocks

- Fixed assert "can't add a new vertex field at this point: COLOR" when loading some worlds that contained clusters of mangrove_roots blocks.
- Fixed assert "can't add a new vertex field at this point: TEXCOORD_4" when loading some worlds that contained chain or end_portal blocks.
- 

### Commands

- Empty text for '/say', '/me' and '/tell' commands now return 'Invalid message length' error ([MCPE-185429](https://bugs.mojang.com/browse/MCPE-185429))
- /locate biome command now requires that the biome's namespace is specified (ex: minecraft:plains instead of just plains). Auto-complete suggestions for this command will now include namespaces.
- Added @n target selector which returns the single closest entity.

### Components

- Content warnings will log missing entity references in Spawn Rule JSON
- Content warnings will log missing references in Client Biome JSON
- The "minecraft:body_rotation_axis_aligned" component has been renamed to "minecraft:rotation_axis_aligned"
- Content warnings will log missing references in Jigsaw Structure, Processor List, Template Pool, and Structure Sets JSON

### Creator Camera

- Fixed an issue where projectiles were shot in the wrong direction when using touch controls and custom cameras ([MCPE-201558](https://bugs.mojang.com/browse/MCPE-201558))

### Editor

- Added ability to specify directional placement of blocks for any brush operation using DirectionalPlacementMode enum and setDirectionalPlacementMode.
- Added ability to toggle that "Ctrl" will either erase or add blocks with the addition of "setInverseEraseMode".
- Added tooltips for all actions with keybindings in Editor
- Added an optional image field to tooltips for modal tools and property pane components.
- Added 'Mute Music' and 'Mute Game Sounds' toggles to Editor settings pane.
- Added the ability to drag a structure item from the Structure panel to the viewport. This updates the clipboard and activates the paste preview
- Added a gizmo to the Entity Summon Tool to allow for more exact placement
- Added arbitrary rotation for brush shapes
- Added a new "Pencil" tool that allows to easily add (or remove) individual blocks
- Removed support for the SimpleTool framework API. Tools using this feature must now use IPlayerUISession controls instead.
- Updated default brush shape and sizes for the terrain tool to apply smooth and roughen stronger on first use
- Updated Cone and Cylinder Brush Shapes so that the origin is included in radius measurements. Fixed edge cases where values in X and Z dimensions would produce different results.
- Updated component tooltip property to support new TooltipContent type. TooltipContent allows for a custom title to be added to the tooltip.
- Updated Editor Scripting Structure Manager to use Editor's structure repository instead of the level's
- Updated cursor control keybinding to cycle through all cursor control modes
- Updated brush mask keybinding to cycle through all the brush mask modes
- Updated the /structure command in an Editor Project to use the Editor Structure repository instead of the level's
- Fixed a bug where Realms panel was opening in an empty state
- Fixed a bug where 'Multiplayer' and 'visible to LAN Players' didn't export
- Fixed navigation and focus issues in the Editor graph, fixed arrow key movement when the graph is locked. Improved handling of clicks outside of the graph
- Fixed misaligned icons and image artifacts for block imaged after entering and returning from a test world
- Fixed a bug that caused recently used block list of Block Picker to not display correctly

### Entity Components

- Made the schema for the minecraft:tick_world entity component stricter so that the parsing now refuses out of range values for radius and distance_to_players
- Added a "can_wear_armor" field to the "minecraft:equip_item" entity component that specifies if equipped armor should be added to the armor slot or hand slot ([MCPE-153135](https://bugs.mojang.com/browse/MCPE-153135))

### Graphical

- Caustics textures with incorrect dimensions will no longer be loaded; a content error will be issued and the default caustics texture will be used instead
- Fixed parent_setup not running with the correct context

### Items

- Fixed an issue where custom armor disabled knockback on some platforms

### Jigsaw

- Added minecraft:blockstate_match and minecraft:random_blockstate_match rules to jigsaw processors.
- Added heightmap projection type none and made it the default setting, which instead of performing heightmap calculations uses the starting placement position.

### Molang

- query.is_carrying_block is now usable by all entities, not just Enderman
- query.is_carrying_block returns 1.0 if the entity is carrying any block, including air

### Textures

- Modified Json parsing of "variations" texture objects in **terrain_texture.json** files
  - weight field clamped to minimum value of 0.05
  - weight field clamped to maximum value of 1000000

### User Interface

- Fixed a bug where the death screen could be shown while the player was alive when certain gamepad buttons where pressed at the same time
- Added preview sounds for the new audio tab

#### Mobs

- Endermen can now pick up all block types they are able to in Java Edition
- The block carried by an Enderman can now be set via commands, similar to Foxes and Allays; it will then attempt to place that block as normal ([MCPE-164355](https://bugs.mojang.com/browse/MCPE-164355))
- Fixed an issue where Endermen could take blocks without having line of sight to them
- Fixed Endermen placing blocks in locations or states where they normally shouldn’t ([MCPE-162613](https://bugs.mojang.com/browse/MCPE-162613))

## Experimental Technical Updates

#### World Generation

- Mixing Terrain matching and Rigid Structures will no longer sink rigid structure 1 block
- Chunks will no longer infinitely load when multiple structures are used within a structure set.
- Can now use minecraft:empty_pool_element jigsaw template pools to represent empty elements

### API

- Moved class PlayerHotbarSelectedSlotChangeAfterEvent from beta to 2.1.0.
- Moved class PlayerHotbarSelectedSlotChangeAfterEventSignal from beta to 2.1.0.
- Moved class PlayerInventoryItemChangeAfterEvent from beta to 2.1.0.
- Moved class PlayerInventoryItemChangeAfterEventSignal from beta to 2.1.0.
- Moved interface HotbarEventOptions from beta to 2.1.0.
- Moved interface InventoryItemEventOptions from beta to 2.1.0.
- Moved enum PlayerInventoryType from beta to 2.1.0.
- Class HotbarEventOptions.
  - Field allowedSlots added bound validation, numbers inside the array must be between 0 and 8.
- Class InventoryItemEventOptions.
  - Field allowedSlots added bound validation, numbers inside the array must be positive.
- ItemInventoryComponent
  - Bundle UI now renders non-contiguous items added to the container with this API correctly.
- Removed minecraft:destruction_particles's block API from beta . It was determined to not release this server side script to stable due to it's reliance on client driven functionality.
- Added class InvalidItemStackError to beta.
- Added runOnFinish method to GameTest which runs after the test is completed, regardless if it passed, failed, or timed out
- Added class ItemBookComponent to beta for interfacing with minecraft:writable_book and minecraft:written_book to change their contents and sign them.
- Added class BookError and class BookPageContentError to beta.
- Moved type EntityHungerComponent, EntitySaturationComponent, EntityExhaustionComponent from beta into 2.1.0
- Moved EntityEquippableComponent properties totalArmor and totalToughness from beta into 2.1.0
- Class ModalFormDataTextFieldOptions.
  - Field defaultValue type changed from string to minecraftserver.RawMessage \| string
- Fixed choppiness in Player.applyImpulse and Player.clearVelocity for beta
- Added setFov with CameraFovOptions parameter. This can be used to modify the FOV of the current camera
  - Added class LootTableManager to beta, which allows for generation of loot from entities and blocks
- Added easing options for clearing a custom FOV. Clearing without valid easing values will instantly clear the custom FOV value

### Biomes

- Adding a new server side biome component surface_builder that will combine the components surface_parameters, frozen_ocean_surface, mesa_surface, swamp_surface, capped_surface, and the_end_surface into one component. Each biome can only use one builder type. The component can be used for world generation settings such as foundation material and sea floor depth.
- Added "minecraft:humidity" component with "is_humid" this forces a biome to either always be humid or never humid. Humidity effects the spread chance, and spread rate of fire in the biome.
- Added 'minecraft:partially_frozen' This component will impact the temperature in a frozen biome, causing some areas to not be frozen. Ex: patchy ice, patchy snow.

### Commands

- Added the fov_set keyword to the /camera command for changing the camera's field of view. Enabled with the Experimental Creator Camera toggle
- 'locate structure' command (and similar structure-searching gameplay elements) will now quickly return no result if experimental Custom Biomes have replaced all of the biomes where that structure could appear

### Gameplay

- When loading a chunk that used a removed custom biome, the removed biome is now replaced with the dimension's default biome, which is Ocean in the overworld

### Jigsaw

- max_distance_from_center now parses horizontal and vertical values separately in an object while supporting horizontal only with parsing as a constant, the vertical value is now optional and defaults to having no limit.
- Changed structure definitions folder from worldgen/jigsaw_structures to worldgen/structures.

### Scripting

Added support for text to speech for tooltips at Server-UI forms.

### UI

Added support for navigation using keyboard and gamepad for tooltips at settings. Also, to be showed always inside the visible area. Mobile resolutions were having issues with this.
