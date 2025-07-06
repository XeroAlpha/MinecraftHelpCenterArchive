---
title: Minecraft Beta & Preview - 1.21.100.23
date: 2025-07-01T10:27:10Z
updated: 2025-07-01T14:01:31Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/37741189879821-Minecraft-Beta-Preview-1-21-100-23
hash:
  h_01JZ33YKZDKJX2ZN17RC3Q5V9F: experimental-game-drop-features
  h_01JZ33YKZDSN2QJQSG9NHMXJS3: copper-golem
  h_01JZ33YKZERB5KB7EMFKD3DZGG: copper-golem-item-sorting
  h_01JZ33YKZHTMH4VHT14C63BDQC: copper-chest
  h_01JZ33YKZH3C42V7DJMEPT9SN8: copper-tools
  h_01JZ33YKZKTC26BNX1WHFANDHE: copper-armor
  h_01JZ33YKZMGK586DCVS7B4JR8M: new-copper-items
  h_01JZ33YKZN547N29S111R50DHM: features-and-bug-fixes
  h_01JZ33YKZNETK9HD8WXZ6W8ZM3: gameplay
  h_01JZ33YKZNM3BPAD4NCRSYBJFZ: graphical
  h_01JZ33YKZPV8TFEM4H4CHAZ9JP: items
  h_01JZ33YKZPKCEPM7TB6HT1Z84B: mobs
  h_01JZ33YKZVFT6VSXFX7EE75Z3Y: user-interface
  h_01JZ33YKZVF0DN89GPJGTEZ1JZ: vanilla-parity
  h_01JZ33YKZWW7WXJWWR1H1BGY1Y: technical-updates
  h_01JZ33YKZWRE1CEMQREYD3Z0BR: add-ons-and-script-engine
  h_01JZ33YKZWN700D0AJXMMVHMT4: ai-goals
  h_01JZ33YM05BHKFM434ZXD5YDAA: api
  h_01JZ33YM06S93HQ29AKBNP7WF0: audio
  h_01JZ33YM06ACQT6E4Q4E2CKZ9S: blocks
  h_01JZ33YM07QYKTP0WHDKRPWDWZ: editor
  h_01JZ33YM086WDQ2SSV268906Q2: experimental-technical-updates
  h_01JZ33YM08YHEQ6KVEEKA07KE0: api-1
---

**Posted:** 1 July 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

**![Minecraft Preview](https://feedback.minecraft.net/hc/article_attachments/37745495612813)**

Test the first features of our third game drop – the copper golem and copper chests! This player-made mob will not only make your base feel lively, but it'll become your companion, helping you sort the items you place into copper chests into other chests around your base! When you summon a copper golem, you'll also get a new item – the copper chest. Pop the haul from your latest expedition in the copper chest, and then sit back and watch as your new buddy helps sort those items into all the other chests in your base! You can also test copper tools, items, and weapons now in Bedrock beta and preview! Coming in the future to Java snapshot.

And as always, we're keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

## Experimental Game Drop Features

To try out upcoming features, enable the Experimental Features toggle in your world settings. These features are still in development and may cause your world to crash, break, or become incompatible with future updates.

### Copper Golem

Copper golems are handy, organization-loving companions that'll bring your base to life! Summoned with copper and carved pumpkins, the copper golem removes items you leave in copper chests, and sorts them based on the item type into chests around your base!

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

- Copper equipment turns into Copper Nuggets when smelted

## Features and Bug Fixes

### Gameplay

- Hotbar can always be hit in any touch device. The detection area matches the texture even if you have customise controls enabled

### Graphical

- Fixed faces of non-full blocks (eg. Cakes or Trapdoors) having an unnatural ambient occlusion applied to them in some neighboring blocks configurations
- Glowing text on Signs no longer gets overly bright when looked at directly in Vibrant Visuals
- Fixed parent_setup not running with the correct context

### Items

- Fixed an issue where custom armor disabled knockback on some platforms

### Mobs

- Fixed a bug that caused Happy Ghast to occasionally suffocate when faced against a wall ([MCPE-221320](https://bugs.mojang.com/browse/MCPE-221320))
- Boats no longer play step sounds when on the ground ([MCPE-51638](https://bugs.mojang.com/browse/MCPE-51638))
- Air friction is now only applied to Boats when they are leashed ([MCPE-222298](https://bugs.mojang.com/browse/MCPE-222298))
  - Boats are still prevented from orbiting the player when leashed
  - Boats once again retain momentum when moving off ledges
- Fixed a bug where the Happy Ghast riding sound would sometimes play in the loading screen
- Fixed a bug where both Ghast and Happy Ghast ambient sounds would not be audible further than 16 blocks away from the player ([MCPE-298575](https://bugs.mojang.com/browse/MCPE-298575))
  - Ghast ambient sound is now audible within 80 blocks
  - Happy Ghast ambient sound is now audible within 64 blocks
- Updated the way leashed mobs interact with vehicles
  - Leashed mobs can now be pulled into Boats, Minecarts, and other rideable entities if the leash is slackened when close to those entities
  - Leashed mobs will now automatically dismount their vehicle if the leash is stretched far enough
  - These changes will come to Java Edition at a later date

### User Interface

- We've made some adjustments to the spacing of items in the settings menus in this update. Work is still ongoing, and we plan to make further refinements in future updates!

### Vanilla Parity

- Added The Void as a flatworld preset

## Technical Updates

### Add-Ons and Script Engine

- Biomes client settings now look up settings based on the biome's full name, including its namespace. Vanilla biomes will fall back on their name without a namespace if an exact match is not found before falling back on default settings (for example, "minecraft:plains" will match itself, then "plains" if no setting was found)

### AI Goals

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

### API

- Added new error class UnsupportedFunctionalityError which is thrown for certain cases where a particular functionality such as a method, or part of a method based on the parameters, is not supported. An example is calling the Entity method remove on a player
- Added new error class EntitySpawnError which is thrown when an entity fails to spawn via the spawnEntity method on Dimension
- Updated many methods to throw custom errors to provide better context and information of the problem that occurred

### Audio

- Fixed a bug where "ambient" sounds played by a flying mob would have the volume set to 0.2 by default ([MCPE-298575](https://bugs.mojang.com/browse/MCPE-298575))

### Blocks

- Blocks with improperly configured textures will now show additional content errors
- Released the particle count field for the block destruction particles component out of experimental

### Editor

- Added a gizmo to the Entity Summon Tool to allow for more exact placement
- Added arbitrary rotation for brush shapes
- Fixed a bug that caused recently used block list of Block Picker to not display correctly
- Added a new "Pencil" tool that allows to easily add (or remove) individual blocks

## Experimental Technical Updates

### API

- Moved type EntityHungerComponent, EntitySaturationComponent, EntityExhaustionComponent from beta into 2.1.0
- Moved EntityEquippableComponent properties totalArmor and totalToughness from beta into 2.1.0
- Class ModalFormDataTextFieldOptions.
  - Field defaultValue type changed from string to minecraftserver.RawMessage \| string
- Fixed choppiness in Player.applyImpulse and Player.clearVelocity for beta
- Added setFov with CameraFovOptions parameter. This can be used to modify the FOV of the current camera
  - Added class LootTableManager to beta, which allows for generation of loot from entities and blocks
- Added easing options for clearing a custom FOV. Clearing without valid easing values will instantly clear the custom FOV value
