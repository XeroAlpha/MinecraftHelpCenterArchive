---
title: "Minecraft: Bedrock Edition 1.21.50 - The Garden Awakens"
date: 2024-12-02T15:16:35Z
updated: 2025-01-15T14:50:18Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/32344904160397-Minecraft-Bedrock-Edition-1-21-50-The-Garden-Awakens
hash:
  01JE62DDHH40W6YXG27A2NE1CH: mobs-1
  01JE62DDHJ1AT1DGP6B2ECMEMS: audio-1
  01JE62DDHMEQ069VPTK9D4QPZM: general-1
  01JE62DDHNDK317Y5CQN62NX0D: realms-1
  01JE62DDHNGBZANT14T3AM8C2K: stability-and-performance-1
  01JE62DDHSAF3EGYB8P8T5S1GF: user-interface-1
---

**Posted:** 3 December 2024

Shh! I'm writing this changelog from behind a pale oak tree - and I have to be *very quiet* because the Garden Awakens drop is finally here - and creakings are spawning in pale gardens all across the Overworld! The Garden Awakens brings with it an eerie biome - the pale garden - which is carpeted in moss, filled with pale oak trees, and home to a unique flower called an eyeblossom. It also brings a watchful hostile mob, the creaking, as well as the secret to defeating (and spawning) it - the creaking heart! Facing up to a creaking will also earn you resin clumps - another new block you can craft into resin bricks, or use to trim your armor. Was that everything? Oh! And we've also made some bug fixes. Now, let me see if I can back away slowly without this creaking spotting me...

 

![The Garden Awakens update in Minecraft](https://feedback.minecraft.net/hc/article_attachments/32375754540429)

# New Features

# Gameplay Drop

- Added Pale Garden Biome, Pale Oak tree, Pale Moss block, Pale Moss carpet, Pale Hanging Moss and Pale Oak wood set
- Added Creaking mob, Creaking Spawn Egg and Creaking Heart block

### Creaking Heart

A Creaking Heart is a "living" block generating in Pale Oak trees, covered on all sides by Pale Oak wood logs. It can spawn a Creaking mob when it is night time, and it is placed between two correctly aligned Pale Oak log blocks.

- Is active during night and dormant during day

- Sends a trail of particles towards the connected Creaking when the Creaking gets hit by the player

- When Creaking Heart block is destroyed, the connected Creaking is removed

- Creaking Heart cannot be moved by Pistons

- Creaking Heart cannot be used as fuel

- Creaking Heart spawning and despawning its Creaking emits vibrations from the Creaking's position

- Naturally generated Creaking Hearts drop 20 to 24 experience, even when collected with Silk Touch

### Creaking Mob

The Creaking mob spawns at night in the Pale Garden biome if there is a Creaking Heart block that has been generated in a Pale Oak tree. Gameplay features:

- An activated Creaking will not move if a player is looking at it

- Creaking is invulnerable to damage

- When hit, a particle trail is shown between the Creaking and the Creaking Heart block it is connected to

- When the Creaking Heart block the Creaking is connected to is destroyed, the Creaking is removed

- Is not affected by light levels but spawns and despawns based on day/night cycle

- Creaking cannot enter Boats

- Creaking spawned from a Creaking Heart cannot go through portals

- The Creaking Spawn Egg will spawn a Creaking mob that is not connected to a Creaking Heart. The Creaking mob will persist through day and night, loads and saves, and will take damage from attacks and other damage sources. It has one point of health (half a heart)

- Creaking summoned from the Creaking Heart cannot be spawned with a spawn egg, nor can it be summoned with commands. It can only exist as a part of the Creaking Heart block

- Player wearing a carved pumpkin on their head can look at Creaking without it freezing in place

- When a Creaking Heart is destroyed, its Creaking will twitch for a few seconds before crumbling

- Creakings spawned by a Creaking Heart will crumble when stuck in a hole with a Player for more than 5 seconds

  - This prevents a potential soft lock, as the invulnerable Creaking would prevent the player from mining or placing any blocks, requiring them to exit and re-enter the world to force the Creaking to despawn

- A Creaking crumbling causes nearby Sculk Catalysts to bloom

  - However, no Sculk will be placed since the Creaking does not drop any XP

- Creaking plays 4 different sway sounds

- Creaking plays new attack sounds

## Eyeblossom

Eyeblossoms are new flowers that generate in the Pale Garden biome. Unique features:

- They exist in two variants: Closed and Open Eyeblossom
- Eyeblossoms transition between the two variants based on the time of day
  - During the night, Eyeblossoms will become Open
  - During the day, they will become Closed
  - In dimensions that do not have a day/night cycle, they will remain as-is
- Eyeblossoms planted on the ground will communicate with each other, helping each other to open or close
- Open Eyeblossoms have glowing eyes during the night
- Eyeblossoms can be obtained by bonemealing the grass in the Pale Garden biome
- Bees get poisoned when they interact with Eyeblossoms
- Suspicious Stew made from Eyeblossom will have Blindness or Nausea effect depending on the variant
- Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively
- Eyeblossoms play sounds when opening and closing
- Open Eyeblossoms emit ambient sounds when placed on a Pale Moss Block
- Open and Closed Eyeblossoms can now be used on Mooshrooms to obtain their respective Suspicious Stews when milking ([MCPE-187754](https://bugs.mojang.com/browse/MCPE-187754))

### New system for Pale Garden ambient sounds

Ambient sounds in the Pale Garden biome do not come from the biome settings but are generated by blocks found in the biome

- Pale Hanging Moss emits subtle atmospheric sounds when it is attached to Pale Oak Logs and Pale Oak Leaves
- Creaking Heart block emits a set of eerie sounds when it is active during night and surrounded by Logs on all sides
- Music volume now gradually lowers to zero when entering a Pale Garden and gradually resumes when leaving it

### Pale Garden

Pale Garden is a biome variation of Dark Forest. Unique features:

- Pale Oak trees generate in this biome

- Pale Moss blocks/carpet generate on the ground here

- Hanging Pale Moss generate hanging from the foliage of Pale Oaks

- Animal mobs do not spawn naturally in Pale Gardens

- Added new biome specific ambient sounds

- Creaking Heart block can generate in Pale Oaks

- Add the Pale Oak Sapling, Eyeblossoms, Pale Moss Block, and Hanging Pale Moss to the Wandering Trader ([MCPE-187456](https://bugs.mojang.com/browse/MCPE-187456))

- The seed picker will be updated with a Pale Garden option - if you want to generate the world you can also try out seed 3515201313347228787

### Pale Hanging Moss

Pale Hanging Moss generates naturally in the Pale Garden biome under the foliage of Pale Oaks

- Pale Hanging Moss does not grow randomly, but can be bone-mealed to grow down

### Pale Moss Block

Pale Moss block generates naturally in the Pale Garden biome

### Pale Moss Carpet

Pale Moss block generates naturally in the Pale Garden biome. Unique features:

- When placed, Pale Moss Carpet grows up to two blocks on the solid faces of any block that borders it
- Pale Moss Carpet can be bone-mealed to grow to full on all solid faces of any block that borders it

### Pale Oak Tree

- Pale Oak Saplings can be composted ([MCPE-187457](https://bugs.mojang.com/browse/MCPE-187457))

- Pale Oak Leaves drop Pale Oak Saplings that can be planted in a 2x2 configuration to grow Pale Oak trees

- Pale Oaks logs can be crafted into the Pale Oak wood set:

  - Door
  - Fence
  - Fence Gate
  - Plank
  - Sign
  - Hanging Sign
  - Slab
  - Stairs
  - Trapdoor
  - Wood
  - Stripped Log
  - Stripped Wood
  - Button
  - Pressure Plate
  - Boat
  - Boat with Chest

## Resin

- Resin Clumps are a new multi-face block:
  - Dropped by the Creaking Heart when it is destroyed
  - Placed around the Creaking Heart when its Creaking is attacked
  - Can be crafted into a Block of Resin
  - Can be hardened into Resin Bricks in a furnace
- Resin Bricks can be crafted into the Resin Brick set:
  - Brick block
  - Stairs
  - Walls
  - Slabs
  - Chiseled Resin Brick block
- Both can be found in Chests in the Woodland Mansion
- Blocks of Resin can be crafted into a Creaking Heart using two Pale Oak Logs
- Resin Brick items can be used as a material for armor trimming

# Features and Bug Fixes

## Accessibility

- Fixed an issue with Haptic feedback on iOS ([MCPE-145524](https://bugs.mojang.com/browse/MCPE-145524))

## Add-Ons

- Joining worlds created from world templates on Realms and dedicated servers no longer prompt the user to download packs for templates they have locally

## Audio

- Sponges and Wet Sponges now play fall, hit, jump, land, break, hit and place sounds ([MCPE-174345](https://bugs.mojang.com/browse/MCPE-174345))

- Sponges now play a sound when absorbing water ([MCPE-173582](https://bugs.mojang.com/browse/MCPE-173582))

## Blocks & Items

> **Developer's Note**: We've fixed several issues where the tool used to mine some blocks didn't affect the drop or mining speed correctly. Related to these changes, any block that drops when its support is broken will also drop when mined with any tool.

- The following blocks now only drop when broken with a pickaxe: Blast Furnace, Cauldron, Dispenser, Dropper, Enchanting Table, Furnace, Hopper, and Smoker ([MCPE-33950](https://bugs.mojang.com/browse/MCPE-33950))

- The following blocks that require support now always drop when broken with any tool: all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate

- Budding Amethyst is now slower to mine with an improper tool

- The following blocks (which always drop) are now mined faster when using the incorrect tool: Bell, Brewing Stand, Crafter, Ender Chest, Lantern, and Soul Lantern. Note that the Ender Chest is considered an 'always drops block' even though the drop is not an Ender Chest ([MCPE-176374](https://bugs.mojang.com/browse/MCPE-176374))

- Swords can now cut Bamboo Saplings instantly, as they do Bamboo

- Axes no longer mine Bamboo Saplings and Moss Carpets faster

- Pickaxes and Shovels no longer mine Bamboo as quickly as Axes

- Maces no longer mine Cobwebs faster than other non-Sword tools

- Heavy Core is now faster to mine with any improper tool

- A Note Block placed above Heavy Core now plays the proper sound

- Crafter now can be mined quickly with any Pickaxe

- If you somehow manage to mine a Dragon Egg, which is almost impossible, it no longer requires a Pickaxe to drop and is equally quick to mine with any tool

- Copper Trapdoors and Copper Bulbs now require a Stone Pickaxe or better for drops and quick mining

- Swords no longer mine all blocks faster than bare hands, instead doing that only for some plant-type blocks that aren't already insta-minable, such as Leaves, Pumpkins, Big Dripleaf, Chorus Flower, Chorus Plant, Cocoa, Glow Lichen, Melon Block, Moss Carpet, and Vines ([MCPE-93323](https://bugs.mojang.com/browse/MCPE-93323))

- Stone Button and Polished Blackstone Button no longer require a Pickaxe to drop, and are now faster to mine with any improper tool ([MCPE-162158](https://bugs.mojang.com/browse/MCPE-162158))

- Updated Heavy Core's item texture

- The following blocks now only drop when broken with a pickaxe: Blast Furnace, Cauldron, Dispenser, Dropper, Enchanting Table, Furnace, Hopper, and Smoker ([MCPE-33950](https://bugs.mojang.com/browse/MCPE-33950))

- The following blocks that require support now always drop when broken with any tool: all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate

- Budding Amethyst is now slower to mine with an improper tool

- The following blocks (which always drop) are now mined faster when using the incorrect tool: Bell, Brewing Stand, Crafter, Ender Chest, Lantern, and Soul Lantern. Note that the Ender Chest is considered an 'always drops block' even though the drop is not an Ender Chest ([MCPE-176374](https://bugs.mojang.com/browse/MCPE-176374))

- Fixed an issue where the color of a Shulker Box was not listed as part of the name ([MCPE-182930](https://bugs.mojang.com/browse/MCPE-182930))

- Grass and Nylium no longer decay to Dirt and Netherrack when below Slime, Honey, Hopper, or Chemical Heat (Education Edition block) ([MCPE-62132](https://bugs.mojang.com/browse/MCPE-62132))

- Grass and Nylium now decay to Dirt and Netherrack when below Observer

- Trial Spawners with a Mob set by a Spawn Egg no longer revert to an empty state when their cooldown ends ([MCPE-185960](https://bugs.mojang.com/browse/MCPE-185960))

- Azalea, Flowering Azalea, Mangrove, Cherry, and Pale Oak Leaves no longer display black pixels from a distance ([MCPE-156469](https://bugs.mojang.com/browse/MCPE-156469))

- Mangrove Leaves now have a dedicated texture for when "Fancy Leaves" is disabled ([MCPE-170516](https://bugs.mojang.com/browse/MCPE-170516))

- The orientation of the Pale Oak Leaves texture is no longer randomized for each block

- Moss Blocks now have a quieter step and land sound ([MCPE-176933](https://bugs.mojang.com/browse/MCPE-176933))

- Decorated Pots no longer activate Observers on world load

- Sculk Sensors now detect Eyeblossoms opening and closing

- Fixed all Skull block variants being turned into skeleton_skull when opening a world-template version locked below 1.21.40 or structures. Please note, this fix will not apply to already overwritten chunks

- Textures for Bricks, Nether Bricks, Red Nether Bricks, Resin Bricks, and related blocks have been updated to be horizontally aligned with all other brick blocks ([MCPE-187806](https://bugs.mojang.com/browse/MCPE-187806))

- Closed Eyeblossoms no longer poison Bees

- The Poison effect from Open Eyeblossoms now also damages Bees while they are within the block, rather than only upon exiting

- Reduced the duration of the Poison effect applied by Open Eyeblossoms

- Adjusted the frequency of ambient sounds emitted by Eyeblossoms, Creaking Hearts, and Pale Hanging Moss to better align with Java

- The effect durations of Suspicious Stew have been adjusted to be the same across versions

- Suspicious Stew from Open Eyeblossom now grants the same Blindness duration as Suspicious Stew from Azure Bluet ([MCPE-187802](https://bugs.mojang.com/browse/MCPE-187802))

## EDU Toggle

- Fixed an issue where content log errors and warnings would appear when loading a world with Education Edition toggle enabled ([MCPE-170791](https://bugs.mojang.com/browse/MCPE-170791))

## Features

- Standardized the blocks that trees can replace when growing, with a few exceptions ([MCPE-187302](https://bugs.mojang.com/browse/MCPE-187302)) ([MCPE-187301](https://bugs.mojang.com/browse/MCPE-187301))

  - All trees can now grow through leaves, with the exception of Cherry trees cannot grow through their own leaves ([MCPE-168029](https://bugs.mojang.com/browse/MCPE-168029))
  - All trees can grow on dirt-like blocks ([MCPE-187739](https://bugs.mojang.com/browse/MCPE-187739))

- Tall Grass generates properly with its top part in the Lush Caves biome ([MCPE-125799](https://bugs.mojang.com/browse/MCPE-125799))

- The following feature types are now unable to place internal-only features

  - `minecraft:aggregate_feature`
  - `minecraft:snap_to_surface_feature`
  - `minecraft:surface_relative_threshold_feature`
  - `minecraft:weighted_random_feature`

## Gameplay

- There is now a warning message when you are prevented from entering an unloaded chunk

- Now the respiration enchantment reduces the chance of taking drowning damage ([MCPE-46922](https://bugs.mojang.com/browse/MCPE-46922))

- Players can no longer earn achievements or trophies after dying and respawning as a spectator in hardcore mode

- Mace damage now scales with distance fallen when it is used by mobs

- ~~Players will keep their inventory after dying on Easy and Peaceful as we're testing ways to adapt our difficulty levels. Your feedback is greatly appreciated on [this page](https://aka.ms/mckeepinventoryfeedback)~~

  - *Please note: We're testing new difficulty levels, so some players will keep their inventory after dying on Easy and Peaceful. If this happens to you, don't worry—it's not a bug.*

- The kill command or any damage greater or equal to the target's current life will now kill it in base game versions below 1.18.20

- Zombified Piglins spawned by Nether Portals now have a 15-second cooldown before they can use the Portal again

- Using an empty Bundle now causes an animation to play in both first and third person

- Second passenger in a Boat or Camel will now also have the warning message when hitting unloaded chunk.

- All projectiles on fire now ignite Minecart with TNT & TNT blocks ([MCPE-183512](https://bugs.mojang.com/browse/MCPE-183512))

- Holding the jump button when falling on a Slime Block no longer cancels the bounce ([MCPE-185354](https://bugs.mojang.com/browse/MCPE-185354))

- Sneaking while landing on a Slime Block no longer causes fall damage

> **Developer's Note:** The intended way to stop bouncing on a Slime Block is now to sneak. Previously players could stop bouncing by holding the jump button, but this was an unintentional oversight that worked since the jump effectively cancelled out the movement from the block. This caused other types of bugs such as when hitting a mob with a Mace with Wind Charge enchantment while holding the jump button. The new player jump behaviour is to always pick the highest between existing vertical velocity and jump velocity.

- Fixed one case where blocks would fail to place if a player would place a block and then change their selected slot before the server handled the block placement. This would reject the block placement because the server didn't expect the slot to change ([MCPE-112420](https://bugs.mojang.com/browse/MCPE-112420))

- Blackstone can now be used to repair stone tools and stone weapons ([MCPE-71859](https://bugs.mojang.com/browse/MCPE-71859))

- Fixed clients sometimes not matching the servers rain/snow weather state ([MCPE-131325](https://bugs.mojang.com/browse/MCPE-131325))

## General

- The world spawn point algorithm has been improved, so that locations with good biomes but far from the world's origin are preferred over really bad locations but closer to the origin ([MCPE-120237](https://bugs.mojang.com/browse/MCPE-120237))

- Player spawn algorithm has been improved so it is more difficult to spawn in water or powder snow. ([MCPE-120237](https://bugs.mojang.com/browse/MCPE-120237))

## Graphical

- Textures with multiple variations will now load PBR texture data. ([MCPE-174191](https://bugs.mojang.com/browse/MCPE-174191))

- Removed the unintended darker tinting of Kelp ([MCPE-169713](https://bugs.mojang.com/browse/MCPE-169713))

- Sky color now gradually transitions when traveling between different biomes, rather than changing abruptly ([MCPE-90625](https://bugs.mojang.com/browse/MCPE-90625))

- Liquids such as still Water and still Lava no longer tessellate incorrectly when Copper Grates cover them ([MCPE-178719](https://bugs.mojang.com/browse/MCPE-178719))

## Mobs

- Evokers and Vindicators no longer attack Pillagers when hit by them ([MCPE-42373](https://bugs.mojang.com/browse/MCPE-42373))

- Breeze now plays the correct idle sound if not on a solid surface ([MCPE-180023](https://bugs.mojang.com/browse/MCPE-180023))

- Feeding Bees Open Eyeblossoms now applies the Poison effect

- Feeding Bees Wither Roses now applies the Wither effect

- Ravagers can now destroy all types of leaf blocks, rather than a limited selection ([MCPE-169375](https://bugs.mojang.com/browse/MCPE-169375))

- Magma Cube model part UVs no longer overlap each other

### Wither

- The spawn and death animations smoothly transition it between a white color overlay and its normal textures ([MCPE-64537](https://bugs.mojang.com/browse/MCPE-64537))

- The Wither will no longer move during its spawning animation ([MCPE-48265](https://bugs.mojang.com/browse/MCPE-48265))

- The Wither's heads now look at their target more consistently ([MCPE-32826](https://bugs.mojang.com/browse/MCPE-32826))

## Realms

- Realms Stories opt-in/opt-out now only applies to the Timeline. Any Realm user can see the Story Feed and Members tab, regardless of whether the user has opted in, and regardless of whether the Realm owner has opted in.

- Users can now share screenshots from the Screenshot Library to Realms Stories

  - Known issue: 'Last played' date on list of Realms fails to populate

- Fixed a bug where new invite links on Realm are shown as Expired after being created on Kindle devices

- Added a loading modal when changing active realms slots to prevent a glitch where multiple Realms Slot Settings Screen are pushed to the stack because of player's button mashing the Edit World button

- Fixed issue where game mode and difficulty were not being preserved after uploading or replacing world in Realms Slot.

- Fixed an issue where players were unable to create a new world on an active Realm

- Fixed bug where loading screens while loading a realm were not showing Realms UI elements.

- Fixed crash on several platforms when navigating back to Realms Stories after inviting a player on the manage members screen

- Fixed bug where player saw "Unable to connect to Realm" error when deleting an expired Realm

- Fixed bug where player was asked to download resource packs that had already been downloaded

- Fixed bug where adding a friend via Find Friends failed to update the Members list until the page refreshed

- Fixed bug where "Remove Member" button was narrated incorrectly

### Realm Events

- Added a new Realm Event related to mobs.

## Sounds

- Adjusted volume & pitch for break, hit, place, fall, step & land sounds for the Amethyst Block

- Wet Sponges now play correct block sounds ([MCPE-187287](https://bugs.mojang.com/browse/MCPE-187287))

- Fall & step sound events for Sponge, Wet Sponge, Creaking Heart, Resin Brick and Resin blocks changed to "player"

## Stability and Performance

- Fixed a crash that could sometimes occur after uploading and joining a Realm

- Fixed an issue where the game would occasionally hang when loading resources

- Improved game loading stability

## Trial Chambers

- Changed contents of chest in end_2 to reference a loot table

## Trial Spawner

- Some Trial Spawners did not have an extra Breeze out at once when Ominous

## User Interface

- Change the order of tabs in the Settings screen

- Fixed a bug where players on the manage members screen are not updated when returning from 'Find friends'

- Improved feedback to user when Realm uploads fail due to naming

- When enabling experiments in world settings (OreUI) we no longer faulty state that it would "Automatically turn on Cheats". ([MCPE-181435](https://bugs.mojang.com/browse/MCPE-181435))

- The item currently selected inside a Bundle is now correctly displayed as part of the Bundle's icon when the Bundle is placed in the inventory or Crafting Table's crafting grid

- The sounds of moving items in or out of a Bundle now originate from the player's location instead of the corner of the block the player is standing on ([MCPE-186619](https://bugs.mojang.com/browse/MCPE-186619))

- Fixed a bug where the world name text would sometimes show up wrong on the pause menu ([MCPE-179702](https://bugs.mojang.com/browse/MCPE-179702))

- Fixed a visual glitch which could occur when navigating between the death screen and game menu.

- Fixed a bug with inventory touch controls where items could not be distributed across existing item stacks of the same item ([MCPE-164543](https://bugs.mojang.com/browse/MCPE-164543))

- Added UI controls for enabling/disabling beds working and the percentage of players sleeping needed to pass the night

- The items "short_grass", "fern", "seagrass" and "vine" are now brighter in the inventory, they used to be incorrectly multiplied by a shade a green ([MCPE-53775](https://bugs.mojang.com/browse/MCPE-53775))

- Hid `Create from template` button and `Import world` button when in Trial mode.

- Tweaked position of paper doll to not overlap with UI bars ([MCPE-186341](https://bugs.mojang.com/browse/MCPE-186341))

- Mobile devices: Going into windowed/split-screen mode no longer overwrites saved positions of customized controls ([MCPE-185964](https://bugs.mojang.com/browse/MCPE-185964))

- Thai font rendering improvements for chat and signs. ([MCPE-166005](https://bugs.mojang.com/browse/MCPE-166005))

- Added missing quickswap animations in GUI for several blocks

- Bundles that are moved under a player's cursor now correctly update their tooltip

- The size of Shield items no longer changes when the item is moved between slots

- Bundles that are moved under a player's cursor now correctly update their tooltip

- It is now possible to collect crafting output with a bundle to add the crafted items to the bundle

- Touch Controls: Fixed a bug where boats were interactable during control customization ([MCPE-184404](https://bugs.mojang.com/browse/MCPE-184404), [MCPE-184406](https://bugs.mojang.com/browse/MCPE-184406))

- Touch controls: in joystick modes, it is now possible to double tap "fly up" to stop flying. ([MCPE-185237](https://bugs.mojang.com/browse/MCPE-185237))

- Touch controls: tapping fly up and fly down in quick succession no longer causes the player to stop flying. ([MCPE-185236](https://bugs.mojang.com/browse/MCPE-185236))

- Tools in the hotbar no longer animate when their durability decrease ([MCPE-186979](https://bugs.mojang.com/browse/MCPE-186979))

- Remove 'X' closing button from the Command Block UI when player is using Gamepad

- A popup now appears showing the item's name when it is selected in a Bundle's tooltip on touch screen devices

- Enabled selecting disabled buttons on the 'join friends' menu while crossplay is turned off

- Dualsense gamepads now have correct tooltip icons on mobile devices

- Fixed spacing on Realms Stories and Timeline pages

- Touch Controls: Fixed a bug where boats were interactable during control customization . ([MCPE-184404](https://bugs.mojang.com/browse/MCPE-184404))

- Fixed a bug where the death screen and new bed screen would sometimes have incorrect textures applied when resource packs were used ([MCPE-178701](https://bugs.mojang.com/browse/MCPE-178701), [MCPE-184050](https://bugs.mojang.com/browse/MCPE-184050))

- Items in a Bundle tooltip now have a gray background

- Touch controls: Fixed a bug where the camera could sometimes get stuck after leaving a boat . ([MCPE-184406](https://bugs.mojang.com/browse/MCPE-184406))

- Bundle tooltip correctly appears after being placed from the cursor

- Gamepad tooltips are now correct when hovering the crafting output in Inventory Screen and Crafting Table Screen with a bundle on the cursor

- Screenshots: Added the ability to Feature and Showcase screenshots for others to see when they visit your Profile. Added ability to set custom world thumbnail from screenshots.

- Using the scroll wheel when hovering a Bundle placed in hotbar with creative inventory search tab active now selects an item in the Bundle

- Fixed a spelling error in an advanced tip for worlds with resource packs

- Fixed a bug where duplicate gamepad input hints would be shown in certain scenarios on the death screen when using multiple input methods

- Migrated JSON UI Trial Mode modal that was shown in Create New World and Edit World to Ore UI

![Players sleeping in a decorated Minecraft house](https://feedback.minecraft.net/hc/article_attachments/32375754544909)

## Updated Sleep Screen

The sleep screen in Minecraft Bedrock Edition has been redesigned.

- Updated the animation to make it feel more sleepy
- Message about the number of players sleeping needed to skip the night has been rewritten
- Button style and layout has been updated
- Chat button is hidden when playing alone
- Leave us your feedback at [aka.ms/mcbedrocksleepscreenfeedback](https://aka.ms/mcbedrocksleepscreenfeedback "https://aka.ms/mcbedrocksleepscreenfeedback")

## Vanilla Parity

- Foxes can now pick up Bundles

- Managing to kill a Wolf, Bee, or Silverfish in one hit no longer angers nearby mobs of the same type

- Managing to kill a Zombified Piglin in one hit no longer angers nearby Zombified Piglins ([MCPE-68327](https://bugs.mojang.com/browse/MCPE-68327 "https://bugs.mojang.com/browse/MCPE-68327"))

### Blocks

- Resin Clumps and Glow Lichen now play their step sound when on top of a block an actor is walking on.

- Head Blocks can now be placed on the side of blocks even if they lack a supporting block below them

- Fixed Glow Lichen playing the Grass sound when stepped on instead of the Vine sound like Java ([MCPE-188087](https://bugs.mojang.com/browse/MCPE-188087 "https://bugs.mojang.com/browse/MCPE-188087"))

### Items

- Chiseled Stone Brick can now be crafted in the Stonecutter using Stone Brick ([MCPE-50057](https://bugs.mojang.com/browse/MCPE-50057 "https://bugs.mojang.com/browse/MCPE-50057"))

- Added two more recipes each for Sandstone Stairs and Red Sandstone Stairs ([MCPE-135605](https://bugs.mojang.com/browse/MCPE-135605 "https://bugs.mojang.com/browse/MCPE-135605"))

  - Chiseled Sandstone and Cut Sandstone can now be used to craft Sandstone Stairs
  - Red Chiseled Sandstone and Red Cut Sandstone can now be used to craft Red Sandstone Stairs

- Purpur Slabs can now be crafted using Purpur Pillars ([MCPE-135606](https://bugs.mojang.com/browse/MCPE-135606 "https://bugs.mojang.com/browse/MCPE-135606"))

### Mobs

- Vexes summoned by an Evoker now start taking damage after 30 to 119 seconds ([MCPE-44454](https://bugs.mojang.com/browse/MCPE-44454 "https://bugs.mojang.com/browse/MCPE-44454"))

# Technical Updates

## Add-Ons and Script Engine

- The \[Beta\] fields in the "minecraft:looked_at" and "minecraft:home" entity components are no longer marked as \[Beta\] and no longer require "use_beta_features" to be specified in the root JSON object

## API

- Added `beforeEvents` object to `@minecraft/server-net` module version `1.0.0-beta` which exposes two events
  - `packetReceive`: This event is called when the game server receives a network packet from a client. If cancelled, the server will silently ignore the packet.
  - `packetSend`: This event is called when the game server sends a network packet to client(s). If cancelled, the packet is dropped and never sent to the recipients
- Added additional optional arguments of name and parentThemeId to addNewTheme(). When a valid parentThemeId has been passed through the function, the newly created theme would inherit all the theme color properties from the parent

## Audio

- Per-biome ambient sounds are now defined in client_biome JSON components

  - This uses the new "minecraft:ambient_sounds" component
  - Named sounds must be defined in "individual_named_sounds" in sounds.json files

## Biomes

- Client biome JSON files now support a "minecraft:biome_music" component with a "volume_multiplier" field which will gradually affect music volume when the audio listener is inside the corresponding biome

  - The gradual volume change will take roughly ten seconds and will linearly increase but exponentially decrease

## Blocks

- Updated `minecraft:destructible_by_mining` component, new field `item_specific_speeds` no longer experimental.

- Removed the following vanilla block tags from experimental

  - "minecraft:diamond_tier_destructible"
  - "minecraft:iron_tier_destructible"
  - "minecraft:is_hatchet_item_destructible"
  - "minecraft:is_hoe_item_destructible"
  - "minecraft:is_mace_item_destructible"
  - "minecraft:is_pickaxe_item_destructible"
  - "minecraft:is_shears_item_destructible"
  - "minecraft:is_shovel_item_destructible"
  - "minecraft:is_sword_item_destructible"
  - "minecraft:netherite_tier_destructible"
  - "minecraft:stone_tier_destructible"

- Renamed vanilla block tag "minecraft:is_hatchet_item_destructible" to "minecraft:is_axe_item_destructible".

- Removed the following vanilla block tags.

  - "minecraft:is_digger_item_destructible"
  - "minecraft:is_tool_item_destructible"
  - "minecraft:gold_tier_destructible"
  - "minecraft:wood_tier_destructible"

- Added the 'minecraft:liquid_detection' component to the Upcoming Creator Features experiment, which controls the basic liquid detection properties of a block, such as liquidlogging, liquid blocking, and being broken or popped by liquid spread. The only liquid currently supported by the component is water.

- Using the "minecraft:block_placer" item component to render the referenced block as the item icon no longer requires the "Upcoming Creator Features" toggle

## Camera

- The camera now rotates the correct way around the X and Y axes when using the /camera command

## Commands

- The "mine" overload was added to the /loot command under the Upcoming Creator Features experiments

- Added delay overload to the `Schedule` command, which allows you to queue a function to be executed after a certain amount of time. Time can be specified with no postfix, postfix 't' to indicate ticks, postfix 's' to indicate seconds, or with the postfix 'd' to indicate days. You can also give the argument 'append' to add your request to the queue no matter what, or 'replace' (which is also the default) to replace all current matching requests with the new one.

  - `/schedule delay add <function> <delay (ticks)> [append|replace]`
  - `/schedule delay clear <function>`

- Translated rawtexts with extra percentage signs in them no longer expand inconsistently for numbered forms ("%%%%1"), compared to non-numbered ones ("%%%%s"). ([MCPE-171001](https://bugs.mojang.com/browse/MCPE-171001 "https://bugs.mojang.com/browse/MCPE-171001"))

- Effect command now properly displays duration as seconds in the displayed message after adding an effect ([MCPE-186963](https://bugs.mojang.com/browse/MCPE-186963 "https://bugs.mojang.com/browse/MCPE-186963"))

## Editor (Beta)

- Editor (Beta) is now available as part of Bedrock
- Editor is an intuitive, visual tool to effortlessly build, refine, and share captivating Minecraft worlds at scale
- To learn how to access Editor and the available tools please visit the [Editor Documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/EditorInstallation?view=minecraft-bedrock-stable "https://learn.microsoft.com/en-us/minecraft/creator/documents/bedrockeditor/EditorInstallation?view=minecraft-bedrock-stable")

## Entity Components

- Added new component 'minecraft:can_attack_ghast'. When added to an entity, it enables that entity to target and attack Ghasts

- 'behavior.summon_entity' now lets creators specify an event to be invoked on the summoned entity immediately after summon ([MCPE-44454](https://bugs.mojang.com/browse/MCPE-44454 "https://bugs.mojang.com/browse/MCPE-44454"))

- Removed the 'minecraft:can_attack_ghast' component and replaced it with a new component 'minecraft:cannot_be_attacked'. When added to an entity it prevents other entities from attacking it unless they fulfill an exception filter, in vanilla it is added to Ghasts, creators can add their entities to the exception filter allowing them to then attack Ghasts

- The "minecraft:looked_at" component's "look_at_locations" field now accepts a list of objects as a parameter, each containing two fields

  - "location", the location of the entity that must be visible
    - Valid values: "head", "body", "feet"
  - "vertical_offset", an optional vertical offset applied to the entity's location

- Added the 'minecraft:ignore_cannot_be_attacked' component and moved the filter from 'minecraft:cannot_be_attacked' to it. This allows content to have custom mobs which bypass the 'cannot_be_attacked' component (for example the one on the Ghast) without requiring a modification of the attacked mob's settings

## Entity Event Responses

- Added the "play_sound" entity event response, which allows the owner entity to emit sounds

  - The "sound" field specifies the sound event to play
  - Sounds are played at the owner entity's position

- The "execute_event_on_home_block" entity event response is now marked as \[Beta\] and requires "use_beta_features" to be specified in the root JSON object

  - The current implementation doesn't fully align with our internal standards, so it will remain unavailable for Creator content until we can develop a more robust technical solution
  - This approach allows us to iterate on the feature without risking backward compatibility

- Added the "emit_particle" entity event response, allowing particles to be emitted at the center of the entity's bounding box

  - The "particle" field allows to specify the type of particle to emit

## General

- Creating a new world from a template that supports random seeds will now clear any stored spawn position from the level data

- Fixed issue that caused the export as template functionality to generate invalid mctemplate UUIDs

## Structures

### Jigsaw

- Dimension padding is now taken into account when placing the start piece of a jigsaw structure

## Molang

- Moved `query.client_memory_tier` to stable.
  - Removed 'Undetermined'. It returns a number representing the client RAM memory tier, 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'. Available on the Client (Resource Packs) only.
- Moved `query.server_memory_tier` to stable.
  - Removed 'Undetermined'. It returns a number representing the server RAM memory tier, 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'. Available on the server side (Behavior Packs) only.
- Moved `query.client_max_render_distance` to stable.

## Network Protocol

- New actor type added: Creaking (146)
- New level events added: ParticleCreakingHeartTrail, ParticleCreakingTeardown
- New level sound events added: ImitateCreaking, CreakingHeartTrail, CreakingHeartSpawn, Activate, Deactivate, Freeze, Unfreeze
- Level event removed: ParticleCreakingTeardown
- New particle type added: CreakingCrumble
- New level sound events added: Open, OpenLong, Close, and CloseLong
- New Particle Type added: EyeblossomOpen
- New Particle Type added: EyeblossomClose
- New particle type added: PaleOakLeaves

## Realms

- Fixed soft-lock UI bug when an expired Realm was deleted

## Recipes

- Added content error when parsing shaped recipes if the pattern contains undefined keys, also fixes crash when opening crafting screen with such malformed recipes ([MCPE-178520](https://bugs.mojang.com/browse/MCPE-178520 "https://bugs.mojang.com/browse/MCPE-178520"))

## Scripting API

- Moved `ClientSystemInfo` from `beta` to `1.16.0`.
- Moved `MemoryTier` from `beta` to `1.16.0`.
- Moved `PlatformType` from `beta` to `1.16.0`.
- Moved `SystemInfo` from `beta` to `1.16.0`.
- Enum `MemoryTier`.
  - Removed `Undetermined` entry.

## Stability and Performance

- Some stats for packs discovered on launch are stored locally to enable faster future launches on some platforms

- The game no longer crashes if a mob attacks with an item that breaks during the attack

## Technical

- Vanilla Trial Spawner NBT `normalConfig` and `ominousConfig` tags values now support references to common configurations as an alternative to inline configuration

# Experimental Technical Updates

## Add-Ons and Script Engine

- Added "canUseBlockAsIcon" bool to the "minecraft:block_placer" item component network data to fix bug where clients did not render the block item correctly.

- Fixed a bug where vanilla items with the "minecraft:block_placer" component had the wrong icon on split-screen clients.

## API

- Add collectRuntimeStats to `@minecraft/debug-utilities` module, exposing script runtime memory usage.
- Added new input permissions that effectively allow creators to enable/disable player inputs including: lateral movement, move forward, move backward, move left, move right, sneak, jump, mount, and dismount.
  - Extended `PlayerInputPermissions` script class to read and write the new input permissions
  - Extended `/inputpermissions` command to use the new input permissions
  - Extended `haspermission` selector to use the new input permissions

## Block Components

- Modified `"ambient_occlusion"` field for `"minecraft:material_instances"` component to be a float value, requires **UpcomingCreatorFeatures** experiment

- BlockComponentTypes

  - Moved `FluidContainer` from `beta` to `1.16.0`

- Moved `BlockFluidContainerComponent` from `beta` to `1.16.0`

- Moved `FluidContainer` from `beta` to `1.16.0`

- Added `initialRotation` optional member to `SpawnEntityOptions` for specifying the initial rotation of the spawned entity in degrees.

- Added new method `lookAt` to `Entity` which sets the rotation of the entity to face the desired target location.

- Added `shutdown` event to `beforeEvents` within the `system` class. This is fired after all players have left and the world is about to shutdown/close.

- Input APIs

  - Added a suite of input APIs that are readable even if the player's input is disabled with input permissions
  - Added `getMovementVector(): Vector2` to `InputInfo` to read raw movement values
  - Added enum `InputButton` with values `Jump` and `Sneak`
  - Added enum `ButtonState` with values `Pressed` and `Released`
  - Added `getButtonState(button: InputButton): ButtonState` to `InputInfo` to read raw player button inputs
  - Added `world.afterEvents.playerButtonInput` event to listen to button change events

- Added access to the composting chance for existing Vanilla items via the ItemStack API

- Added access to the composting chance for items with CompostableItemComponent via the Item Component API

-  

- Fixed an API script processing error that could result in an infinite loop.

- Moved `BlockFillOptions` from beta to `v1.16.0`

- Moved `UnloadedChunksError` from beta to `v1.16.0`

- Fixed bug where `Dimension.fillBlocks` would set blocks outside of the ticking area when `ignoreChunkBoundErrors` was set to true.

- Dimension

  - Moved `containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean` from beta to `v1.16.0`
  - Moved `getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume` from beta to \`v1.16.0
  - Moved `fillBlocks(volume: BlockVolumeBase, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume;` from beta to `v1.16.0`

- ItemUseOnBeforeEvent

  - Move property `readonly isFirstEvent: boolean` from beta to `v1.16.0`

- ItemUseOnAfterEvent

  - Move property `readonly isFirstEvent: boolean` from beta to `v1.16.0`

- CameraFixedBoomOptions

  - Added property `entityOffset?: Vector3`

- Added new `CameraTargetOptions` parameter inside `setCamera` for `beta`. This can be used to modify the `minecraft:free` preset if the Focus Target experimental camera toggle is enabled

## Blocks

- Added "minecraft:item_visual" block component. This component takes nested "minecraft:geometry" and "minecraft:material_instances" components to configure the item representation of a block.
  - "geometry" and "material_instances" fields are required. They utilize the same fields/requirements as "minecraft:geometry" and "minecraft:material_instances" respectively.
  - Block must include "minecraft:geometry" and "minecraft:material_instances" components alongside the "minecraft:item_visual" component.
  - Requires the "Upcoming Creator Features" toggle.
- Cobwebs now obey 'blockshape' and 'textures' properties set in blocks.json. Requires the "Upcoming Creator Features" toggle.
- Cherry Leaves no longer count as custom blocks ([MCPE-180725](https://bugs.mojang.com/browse/MCPE-180725 "https://bugs.mojang.com/browse/MCPE-180725") )

## Camera

- Added experimental toggle "Aim Assist" to allow easy targeting while using custom camera perspectives.

  - Aim Assist currently targets blocks. Entites will be enabled in a future release.

- Aim Assist can be enabled through "/aimassist" command.

  - Aim Assist's targeting behavior (distance, width, and height) can be configured through the settings under "aim_assist" folder using a behavior pack.
  - Aim Assist will highlight the selected target. The highlighting textures are customizable through textures under "textures\ui" folder using a resource pack

- Added the rotation to the camera command for the fixed_boom camera

- Tracking a target using the free camera preset: optional "tracking_radius" float value for setting a listening radius for a target entity

- Added content error when trying to target an entity when not on a free camera.

- Added 'minecraft:fixed_boom' preset to the 'Creator Cameras: New Third Person Presets' experimental toggle

## Component

- Added the "minecraft:compostable" item component to UpcomingCreatorFeatures experimental toggle

  - Items with the minecraft:compostable component are compostable in the composter block. The component has a required field that defines the chance of generating a layer of compost in the composter block when a compostable item is supplied to a composter block.

## Creator Options

- Added section "Device Info Settings".
  - Added option to allow override memory tier used in Scripting and Molang.

## Molang

- Added `query.last_input_mode_is_any`. It takes one or more arguments ('keyboard_and_mouse', 'touch', 'gamepad', or 'motion_controller'). If the last input used is any of the specified string values, returns 1.0. Otherwise returns 0.0. Available on the Client (Resource Packs) only. Added `query.touch_only_affects_hotbar`. It returns 1.0 if the touch input only affects the touchbar, otherwise returns 0.0. Available on the Client (Resource Packs) only.

## Scripting

- Added enum `InputMode`. export enum InputMode { Gamepad = 'Gamepad', KeyboardAndMouse = 'KeyboardAndMouse', MotionController = 'MotionController', Touch = 'Touch', Undetermined = 'Undetermined', }
- Added class `InputInfo`.
  - Field `touchOnlyAffectsHotbar`. Whether the player touch input only affects the touchbar or not.
  - Field `lastInputModeUsed`. The last input mode used by the player.
  - Added field `inputInfo`.
- Added class `PlayerInputModeChangeAfterEvent`.
  - Field `newInputModeUsed`, the new input mode used by the player.
  - Field `player`, the player that had the input mode change.
  - Field `previousInputModeUsed`, the previous input mode used by the player.
- Added class `PlayerInputModeChangeAfterEventSignal`.
- Enum `InputMode`.
  - Removed `Undetermined` entry.
- Class `InputInfo`.
  - Throws `EngineError` instead of `Error` in case of internal error.

### Server UI

- Added support for input glyph replacement for server forms (`ActionFormData`, `MessageFormData`, and `ModalFormData`).

## Structures

- Expose "Data-Driven Jigsaw Structures" experiment toggle to Creators
  - Creators will be able to modify structure generation rules around placement (location and frequency), layout (how structure pieces are placed relative to one another), and customization (how blocks within a structure piece are modified or replaced).
  - There are 4 new JSON files comprising Jigsaw Structure data:
    - Jigsaw Structures: These are structures that can be constructed throughout the world with various structure pieces. The connection block is a jigsaw block.
    - Processors: A processor can add custom behaviors to the structure that affects how it looks.
    - Structure Sets: Structure sets are JSON that indicate where and how a structure is placed throughout the world.
    - Template Pools: A template pool contains the structure pieces that make up a structure.

## User Interface

- Toggle renderer is now a bindable action under Keyboard and Mouse settings menu.

- Added support for input glyph replacement for signed books. For example, using input string ":\_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.
