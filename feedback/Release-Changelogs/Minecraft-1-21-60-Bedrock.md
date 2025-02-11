---
title: Minecraft - 1.21.60 (Bedrock)
date: 2025-02-04T15:54:34Z
updated: 2025-02-11T15:49:32Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/34034576387469-Minecraft-1-21-60-Bedrock
hash:
  user-content-experimental-features: experimental-features
  user-content-pig-variants: pig-variants
  user-content-'cold-biomes': cold-biomes
  user-content-'warm-biomes': warm-biomes
  user-content-'temperate-biomes': temperate-biomes
  user-content-new-leaf-particles: new-leaf-particles
  user-content-lodestone-changes: lodestone-changes
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-accessibility: accessibility
  user-content-achievements: achievements
  user-content-audio: audio
  user-content-biomes: biomes
  user-content-blocks: blocks
  user-content-copper-bulb: copper-bulb
  user-content-gameplay: gameplay
  user-content-pause-feature: pause-feature
  user-content-general: general
  user-content-graphical: graphical
  user-content-items: items
  user-content-loot-tables: loot-tables
  user-content-mobs: mobs
  user-content-magma-cube: magma-cube
  user-content-breeding: breeding
  user-content-realms: realms
  user-content-recipes: recipes
  user-content-user-interface: user-interface
  user-content-play-screen: play-screen
  user-content-vanilla-parity: vanilla-parity
  h_01JKGJYTBVCYVCW3FRM1R2132B: biomes-1
  h_01JKGJYTBVAXQMCTWC8HQETETZ: blocks-1
  h_01JKGJYTBV990GEFRHD3FV5Q9J: items-1
  h_01JKGJYTBV1BG3YA9H929K5P5W: mobs-1
  user-content-sounds: sounds
  user-content-spawner: spawner
  user-content-world-generation: world-generation
  user-content-structures: structures
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-api: api
  h_01JKGJYTBWX9KGSEYGQCBHGREX: biomes-2
  h_01JKGJYTBWC3BRXPNVW5G1EBYD: blocks-2
  user-content-creator: cameras
  user-content-commands: commands
  user-content-components: components
  user-content-collisions: collisions
  user-content-dedicated-server: dedicated-server
  user-content-editor: editor
  user-content-entities: entities
  user-content-entity-components: entity-components
  user-content-entity-filters: entity-filters
  user-content-fog: fog
  h_01JKGJYTBW1WF247S87WDGZ6K0: gameplay-1
  h_01JKGJYTBWX58TC5TTG7S3E7YB: graphical-1
  h_01JKGJYTBWK0871YE8P2QXXBS5: items-2
  user-content-network-protocol: network-protocol
  user-content-scripting: scripting
  h_01JKGJYTBXEQT463PAP4GVBW4Y: sounds-1
  user-content-stability-and-performance: stability-and-performance
  user-content-technical-experimental-updates: technical-experimental-updates
  user-content-aim-assist: aim-assist
  h_01JKGJYTBXT8Z1TEKRSBJTFFQ6: api-1
  h_01JKGJYTBXFA4H7ZR74FA55BF7: commands-1
  01JKRPWQZN5Z857C376NBGQ56Q: cameras-1
  01JKRPST0FJ4WTXEARTWDTM6F7: creator
  h_01JKGJYTBX4BART2ZRS64S2J5T: components-1
  user-content-molang: molang
  user-content-scripting-api: scripting-api
  h_01JKGJYTBYVWH578ZZ8C241HGX: stability-and-performance-1
  h_01JKGJYTBYG8496KN334H7G861: user-interface-1
---

**Posted:** 11 February 2025

![21u6.jpg](https://feedback.minecraft.net/hc/article_attachments/34084607899021)

Hold on tight, because this changelog is quite a pig deal! Not only do have we fixed a bunch of bugs, there are also several features available in the experimental toggle. Meet the two new pig variants trotting into the Overworld, make leaves fall from trees, and get a simpler recipe for the lodestone so you can find your way back home more easily. Just enable the Drop 1 2025 experimental toggle to test these out!

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).

# Experimental Features

- There is a new experimental toggle for the next game drop update! You will need to enable it in order to test out these features that are in development. We would love to hear your thoughts on these updates, so please leave us your feedback at [aka.ms/mcgamedropfeedback](https://aka.ms/mcgamedropfeedback) and reports any bugs to [bugs.mojang.com](https://bugs.mojang.com/) !

## Pig Variants

- Added two new Pig variants - Warm Pig and Cold Pig!
- These have their own own unique texture and geometry, but not a separate spawn egg
- These will spawn in different biomes, making the biomes feel more distinct from each other:

### 'Cold Biomes'

- These Biomes now spawn the cold variants:
  - Old Growth Pine Taiga
  - Old Growth Spruce Taiga
  - Taiga
  - Snowy Taiga
  - Windswept Hills
  - Windswept Gravelly Hills
  - Windswept Forest

### 'Warm Biomes'

- These Biomes now spawn the warm variants:
  - Savanna
  - Savanna Plateau
  - Windswept Savanna
  - Jungle
  - Sparse Jungle
  - Bamboo Jungle
  - Eroded Badlands
  - Wooded Badlands
  - Badlands

### 'Temperate Biomes'

- These biomes spawn the same pigs as before. There is no change.
  - Forest
  - Flower Forest
  - Birch Forest
  - Old Growth Birch Forest
  - Dark Forest
  - Swamp

## New Leaf Particles

- All Leaves blocks now emit falling leaf particles. These blocks are affected by this change:

  - Oak Leaves
  - Jungle Leaves
  - Acacia Leaves
  - Dark Oak Leaves
  - Spruce Leaves
  - Mangrove Leaves
  - Birch Leaves
  - Azalea Leaves
  - Flowering Azalea Leaves

- Two blocks already emitted falling leaf particles before this update. They will continue to work like they did before:

  - Cherry Leaves
  - Pale Oak Leaves

## Lodestone Changes

- Lodestone is now crafted from 1 Iron Ingot surrounded by 8 Chiseled Stone Blocks
- The crafting recipe unlocks when the player obtains an Iron Ingot or a Lodestone.
- Lodestones can now be found as loot at Ruined Portals in the Overworld or Nether.

# Features and Bug Fixes

## Accessibility

- Added narration in the Realms plan picker screen informing the player they can navigate below the "buy" button to get more information about a given plan.

## Achievements

- The Monster Hunter achievement can now be unlocked by destroying a Creaking Heart while it has a spawned Creaking

## Audio

- Music volume now goes back to normal when exiting the game from a Pale Garden biome ([MCPE-188766](https://bugs.mojang.com/browse/MCPE-188766))

## Biomes

- Pale Gardens now generate more frequently and are overall larger
- Woodland Mansions can now generate in Pale Gardens

## Blocks

- Slightly improved the collision detection between moving blocks and mobs in some cases

- Sculk Sensors now detect Resin Clumps being placed by the Creaking Heart ([MCPE-188260](https://bugs.mojang.com/browse/MCPE-188260))

- Fixed various plant blocks rendering their faces differently to Java ([MCPE-40646](https://bugs.mojang.com/browse/MCPE-40646))

  - All saplings
  - Short Grass
  - Dead Bush
  - Crimson Roots
  - Warped Roots
  - Poppy
  - Blue Orchid
  - Allium
  - Azure Bluet
  - All Tulips
  - Oxeye Daisy
  - Cornflower
  - Lily of the Valley
  - Dandelion
  - Red and Brown Mushrooms
  - Carrots
  - Wither Rose
  - Open and Closed Eyeblossom
  - Torchflower
  - Sweet Berry Bush
  - Lilac
  - Tall Grass
  - Lage Fern
  - Rose Bush
  - Peony

- Mangrove Leaves no longer display black pixels when held by Players with the "Fancy Leaves" option disabled ([MCPE-156469](https://bugs.mojang.com/browse/MCPE-156469))

- Torchflowers, Pitcher Plants, Open Eyeblossoms and Closed Eyeblossoms now increase the probability of a nearby Sapling growing into a tree with a Beehive

- Fixed a crash that could occur when teleporting back into a chunk where a block entity was destroyed ([MCPE-178461](https://bugs.mojang.com/browse/MCPE-178461))

- Lily Pads no longer flicker when seen from afar ([MCPE-91452](https://bugs.mojang.com/browse/MCPE-91452))

- Sunflowers no longer flicker when seen from afar ([MCPE-122695](https://bugs.mojang.com/browse/MCPE-122695)) ([MCPE-102412](https://bugs.mojang.com/browse/MCPE-102412))

- Fence Gate blocks use state "minecraft:cardinal_direction" instead of "minecraft:direction". Uses string values ("north, south, east, west")

- Tall Grass Blocks that are placed when using Bone Meal on Moss Blocks or Pale Moss Blocks no longer render only their bottom half ([MCPE-188789](https://bugs.mojang.com/browse/MCPE-188789))

- Crafter with no BlockActor data no longer produce a crash ([MCPE-188674](https://bugs.mojang.com/browse/MCPE-188674))

- Bone Meal can no longer be used on single Dark Oak or Pale Oak Saplings ([MCPE-187564](https://bugs.mojang.com/browse/MCPE-187564))

- The map color of Pale Oak Leaves and Pale Oak Sapling has been updated to better match their actual in-game color

- The Creaking Heart now has an additional state for when it is in a valid configuration but unable to spawn a Creaking due to it being daytime

- Eyeblossoms now open when the moon starts rising, and close when the moon has completely set

- Big Dripleaf blocks can no longer be placed on top of Pale Moss blocks

- Fixed a crash that could occur when destroying a Creaking Heart

- Fixed rendering issue with grass block under monster spawner block ([MCPE-188809](https://bugs.mojang.com/browse/MCPE-188809))

- A Player can now place blocks on Iron Doors and Iron Trapdoors without having to sneak ([MCPE-19129](https://bugs.mojang.com/browse/MCPE-19129))

- Open and Closed Eyeblossoms no longer appear in the Creative Inventory for worlds that have not been updated to 1.21.50 ([MCPE-189030](https://bugs.mojang.com/browse/MCPE-189030))

- Fixed trigger rate of Redstone powered Droppers and Dispensers ([MCPE-189895](https://bugs.mojang.com/browse/MCPE-189895))

- Water placed on Magma or Soul Sand will now flow again ([MCPE-189889](https://bugs.mojang.com/browse/MCPE-189889))

### Copper bulb

- Updated the Exposed Copper Bulb's Lit Powered texture ([MCPE-177105](https://bugs.mojang.com/browse/MCPE-177105))

## Gameplay

- The second passenger of a boat will no longer have large camera twitches when rotating toward the west direction.

- Fixed a bug where mobs would teleport to a height of 32767 when going to the Overworld from The End ([MCPE-157125](https://bugs.mojang.com/browse/MCPE-157125))

- Fixed issue where players who entered a world while crawling would sometimes take suffocation damage ([MCPE-185676](https://bugs.mojang.com/browse/MCPE-185676))

- Players no longer float above the bed while sleeping

#### Pause Feature

- The pause functionality will only be available in Beta and Preview for the time being. We know you're super excited to be able to pause in Bedrock. However, we need a bit more time to perfect this feature before we can release it to you. Thanks for your patience and understanding as we work to bring you the best possible experience.
  - We'd love to know what you think of this feature, so please continue to test it in Beta and Preview and send us your feedback at [aka.ms/mcbedrockpausefeedback](https://aka.ms/mcbedrockpausefeedback)

## General

- The world spawn point algorithm has been improved, so that locations with good biomes but far from the world's origin are preferred over really bad locations but closer to the origin ([MCPE-120237](https://bugs.mojang.com/browse/MCPE-120237))

- Filter Profanity Toggle. We are introducing a new "Filter Profanity" setting on Windows. When on, all text content including chat will perform as it always has; profanities will be filtered for you and others. When off, most profanities, with the exception of some potentially harmful content, will be unfiltered for you and all others who also have the toggle off. The setting is default on for all players and cannot be changed for child accounts or players not signed in. You can toggle it off in Settings under "General".

- Pistons, Sticky Pistons, Droppers, and Dispensers now show up in the recipe book again when crafting

## Graphical

- The dark edges around the screen at low Y coordinates now fade in gradually rather than appear suddenly ([MCPE-121983](https://bugs.mojang.com/browse/MCPE-121983))

- Added support for 'minecraft:foliage_appearance' and 'minecraft:grass_appearance' components in client_biome JSON files to control color or palette selection for foliage and grass rendering

## Items

- Open Bundle textures updated such that there is no longer a missing string pixel ([MCPE-188355](https://bugs.mojang.com/browse/MCPE-188355))

- Resin Bricks are no longer found in Woodland Mansion chests ([MCPE-188234](https://bugs.mojang.com/browse/MCPE-188234))

- The XP rewarded for smelting Resin Clump into Resin Bricks has been reduced from 0.3 to 0.1

## Loot Tables

- Entity loot tables with a spawn egg that omits the actor ID will no longer drop an invalid spawn egg when destroyed via the minecraft:instant_despawn component.

## Mobs

- Creakings now crumble if their Creaking Heart is forcibly deactivated through commands

- Creakings are now persistent like any other hostile mob, meaning they won't disappear on save/load

- Creaking no longer plays ambient sounds when aggravated, only when idle

- A Creaking's eyes now render even when the Creaking is invisible, provided it has a target ([MCPE-188259](https://bugs.mojang.com/browse/MCPE-188259))

- Creakings spawned from Creaking Hearts now always persist upon reloading the world ([MCPE-188352](https://bugs.mojang.com/browse/MCPE-188352))

- Creaking's eyes now properly flicker when the Creaking Heart which spawned it is destroyed

- Creakings now emit vibrations when swaying after being hit

- Creakings now spawn on Snow Layers ([MCPE-187368](https://bugs.mojang.com/browse/MCPE-187368))

- Creakings spawned by a Creaking Heart can now be nametagged, preventing them from despawning during the day

  - Destroying their Creaking Heart will still cause them to crumble
  - Hitting a nametagged Creaking during the day will result in a particle trail, but no Resin

- The Creaking can now spawn when the moon starts rising, and crumbles when the moon has completely set

- Fixed issue preventing Squid from rotating to match their movement

- Fixed an issue to prevent Enderman from teleporting when riding Boats and Minecarts ([MCPE-31761](https://bugs.mojang.com/browse/MCPE-31761))

### Magma Cube

- The new Magma Cube model and texture are now only used by Resource Packs that explicitly override them, as they have been renamed to differentiate them from the original assets ([MCPE-188547](https://bugs.mojang.com/browse/MCPE-188547))

  - This change is retroactive, starting from version 1.21.50

### Breeding

- Breeding Sheep with compatible wool colors now gives the Baby Sheep a mixture of the colors ([MCPE-19862](https://bugs.mojang.com/browse/MCPE-19862))

- Breeding Wolves now produce offspring with one the parents' collar colors or a mixture of the parents' collar colors if the colors are compatible

- Breeding Cats with compatible collar colors now gives the Baby Cat a collar with a mixture of the colors ([MCPE-188187](https://bugs.mojang.com/browse/MCPE-188187))

## Realms

- Player profile pics in Realms Stories will now load in more reliably

- Fixed an issue where users could sometimes not rejoin a Realm after using an invite code

- On Play Screen Friends Tab hide a Joinable Friends world if it is a realm world and not a joinable Realm

- Fixed an issue where player permissions reverted to the previous state after leaving the Manage Realm tab.

- Fixed issue where game mode appears as Unknown on the Realms Tab of the new play screen even if the realm has a world with a valid game mode

- From new Play screen users can now access Realms Stories of Realms they are a part of even when multiplayer access is disabled in the account's privacy settings

- We recently shipped a couple of service changes behind the scenes (prior to this client update). You may have already experienced them since they have been live for a few weeks now:

  - Persistent game settings: Changes using /gamerule do not persist when a world is unloaded/reloaded ([REALMS-10030](https://bugs.mojang.com/browse/REALMS-10030))

    - We now properly persist game settings updates made in-game via slash commands.

    - Note that there is a bug in the Realms Edit World and in-game pause menu settings screens which causes settings that were adjusted via in-game slash commands to not display properly and also causes changes made in those screens to not save properly. If that happens to you, just run the in-game slash commands again.

    - We are working on a resolution for the UI bug and expect to have it fixed soon.

  - Server hosting region allocation: We are working behind the scenes to improve how Realms are assigned to data center regions. Currently we are only testing these improvements for a subset of players to make sure there are no negative side effects. So far, the change has dramatically reduced network latency, improving the connection of these players to their Realms. We will be sharing a lot more information about this soon when we roll the change out to all Realms. Keep your eyes open!

## Recipes

- Added content error when parsing shaped recipes if none of the keys can be mapped to any of the pattern characters, this fixes a crash when opening the crafting screen with such malformed recipes ([MCPE-178520](https://bugs.mojang.com/browse/MCPE-178520))

## User Interface

- Disabling Realms Stories badge notifications via the Stories Settings screen now hides badges in the Story Feed as well as the Play Screen

- Touch Controls: The empty space in the center of the D-pad no longer acts as the forward button when flying or swimming ([MCPE-183944](https://bugs.mojang.com/browse/MCPE-183944))

- Fixed Players needed to skip night slider on the Edit World screen to be able to go to 0%

- Changed wording for lowest number required for player sleeping to skip the night.

- In response to player feedback signaling confusion around the meaning of the potion bottle, we've updated the location, labeling and icon usage for Achievements across multiple screens.

- For the achievement % counter, a new book asset replaced the potion bottle and supports multi-tier visual states to celebrate progress, including a delightful animation for 100% completion.

- Consolidated the fancy graphics toggle and ray tracing toggle into a single Graphics Mode dropdown. Fancy and Ray Tracing mode are equivalent to having the previous Fancy and Ray Tracing toggles enabled, and the Simple mode is equivalent to having neither of the previous toggles enabled.

- Touch controls: It is now possible to place blocks on top of containers when flying downwards, like on PC. ([MCPE-176407](https://bugs.mojang.com/browse/MCPE-176407))

- Inbox messages with long content are now scrollable with gamepad immediately after entering the screen

- Fixed "An unknown error has occurred" when downloading resource packs under specific circumstances.

- Touch controls: Touch button for Pick Block is now available for both Survival and Creative

- \[PlayStation®5\] 'Enable Screen Reader' accessibility setting is now used to initialize Text-to-Speech during first launch

- Fixed a bug where the game could soft lock in certain scenarios when it was suspended right before the player dying

- Changed wording for enabling/disabling player's sleep skipping the night to "Skip night by sleeping" from "Beds work"

- Add additional debug info regarding Realms features in the general settings screen

- Updated the text on the new bed screen when sleeping to skip the night is disabled

- Fixed an issue which prevented the user from exiting Edit World when choosing Play on Realm button and cancelling the Sign-in process

- It is now possible to scroll through the friends tab with text-to-speech enabled and cross-play disabled

- The achievements disabled crossed bottle icon is now a blocked icon.

- Fixed a bug where incorrect text would be shown on the bed screen ([MCPE-189823](https://bugs.mojang.com/browse/MCPE-189823))

- Added support for input glyph replacement for signs, signed books, and NPC dialogs. For example, using input string ":\_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.

- Added full support and fixes for some input glyph replacement strings. This is to make them work across all the platforms (PC, Consoles, Mobile). These are the values fixed:

  - :\_input_key.forward:
  - :\_input_key.back:
  - :\_input_key.left:
  - :\_input_key.right:
  - :\_input_key.inventory:
  - :\_input_key.use:
  - :\_input_key.chat:
  - :\_input_key.attack:
  - :\_input_key.sprint:

- The icons for these strings are updated in diverse areas of the game that support contextual glyphs, such as: signs, signed books, tags, chat, commands.

- Also, as improvement, replacement of these values depends on the interaction/control mode when using touch as input mode. These modes are Joystick & tap to interact, D-Pad & tap to interact, and Joystick & aim crosshair.

### Play Screen

- We've introduced a brand new Play Screen:
  - Worlds tab - access your saved local and LAN worlds.
  - Realms tab - easily jump into Realms you own or have joined.
  - Servers tab - join multiplayer featured servers from our partners, and add or access your custom servers.
  - Create from template - create from, and rate, your owned templates, discover Minecraft creator made content.
  - Friends - connect with your Minecraft friends (they now live in the top right hand corner of the screen)

These updates are being rolled out incrementally to all platforms except Nintendo Switch, so they might not be available right away.

## Vanilla Parity

- Wheat color is now yellow on a Map instead of green ([MCPE-148982](https://bugs.mojang.com/browse/MCPE-148982))

  - Please note - there is a known issue with this change that means the colour is shown as yellow regardless of growth stage

- Shears can now be used on Cave Vines, Kelp, Twisting Vines, and Weeping Vines to prevent further growth ([MCPE-141497](https://bugs.mojang.com/browse/MCPE-141497))

### Biomes

- Zombie Villagers that spawn in the Mangrove Swamp biome now have the correct skin applied ([MCPE-158736](https://bugs.mojang.com/browse/MCPE-158736))

- Monsters that normally spawn in the Overworld (Zombies, Endermen, Spiders, Creepers, etc., with the exception of Skeletons) can now spawn in the Mangrove Swamp biome [MCPE-170183](https://bugs.mojang.com/browse/MCPE-170183)

- Eyeblossoms and Pale Moss Carpets no longer generate inside Pale Oak Tree trunks

- The vegetation of many Overworld biomes has been updated to more closely match Java Edition and align with the intended look and feel of Minecraft:

  - Overworld (applies to all biomes)

    - Pumpkins now generate in larger patches
    - Dandelions are now alternated with Poppies when generating in flower patches
    - Sugar Canes no longer generate through other blocks

  - Plains

    - Short Grass now generates more frequently and in larger amounts ([MCPE-141364](https://bugs.mojang.com/browse/MCPE-141364))

    - Tall Grass now generates less frequently but in larger patches

    - Flower patches now contain mixed flowers, are larger and generate more frequently

  - Sunflower Plains

    - Sunflowers now generate in more cohesive patches

  - Mushroom Fields

    - Mushrooms now generate in larger patches

  - Savanna

    - Short Grass now generates more frequently and in larger amounts
    - Tall Grass now generates less frequently but in larger patches

  - Flower Forest

    - Trees are now denser
    - Flowers now generate in more cohesive patches

  - Taiga

    - Small Ferns now generate more frequently
    - Large Ferns now generate less frequently
    - Sweet Berry Bushes now generate in larger patches

  - Old Growth Spruce Taiga

    - Mushrooms now generate in larger and more cohesive patches
    - Ferns now generate more frequently
    - Sweet Berry Bushes patches now generate ([MCPE-152452](https://bugs.mojang.com/browse/MCPE-152452))

  - Old Growth Pine Taiga

    - Mushrooms now generate in larger and more cohesive patches
    - Ferns now generate more frequently
    - Sweet Berry Bushes patches now generate ([MCPE-152452](https://bugs.mojang.com/browse/MCPE-152452))

  - Jungle

    - Trees are now denser
    - Big Jungle Trees now generate more frequently
    - Jungle Bushes are now larger
    - Melon patches now generate more frequently

  - Bamboo Jungle

    - Bamboo now generates in larger and denser patches
    - The width of Bamboo is now consistent across the entire plant
    - Trees are now denser
    - Big Jungle Trees now generate more frequently
    - Jungle Bushes are now larger

  - Sparse Jungle

    - Bamboo no longer generates
    - Ferns and Short Grass now generate more frequently
    - Jungle Bushes are now larger
    - Melon patches now generate more frequently

  - Meadow ([MCPE-139903](https://bugs.mojang.com/browse/MCPE-139903)) ([MCPE-141447](https://bugs.mojang.com/browse/MCPE-141447))

    - Short Grass now generates more frequently
    - Tall Grass now generates more frequently
    - Flowers now generate in patches instead of being homogeneously spread across the biome

  - Swamp

    - Blue Orchids now generate more frequently and in larger patches
    - Swamp Oaks now generate slightly more frequently
    - Swamp Oaks no longer generate in direct contact with the ground
    - Lily Pads now generate more frequently

  - Mangrove Swamp

    - Mangroves are now sparser

    - Mangroves now generate over water ([MCPE-153748](https://bugs.mojang.com/browse/MCPE-153748))

    - Lily Pads now generate more frequently

  - Badlands

    - Dead Bushes now generate more frequently

  - Desert

    - Dead Bushes now generate more frequently

  - Oceans (except Frozen Ocean)

    - Kelp now generates more frequently and in denser patches

> **Developer's Note:** *While the exact placement of features like tall grass and flowers may vary between platforms, the overall distribution of these features should remain consistent across larger areas, even if specific chunks differ slightly.*

- Seagrass now generates more frequently, with the amount of tall Seagrass varying by biome ([MCPE-188870](https://bugs.mojang.com/browse/MCPE-188870))

- Kelp can now generate at any depth, leading to increased overall generation ([MCPE-188870](https://bugs.mojang.com/browse/MCPE-188870))

- Mangrove Swamp downfall value now matches that of regular Swamp ([MCPE-156495](https://bugs.mojang.com/browse/MCPE-156495))

- Mangrove Swamp underwater fog now gradually fades out after entering water, as it does in other biomes ([MCPE-158256](https://bugs.mojang.com/browse/MCPE-158256))

- Fossils now generate under Mangrove Swamps, similar to regular Swamps ([MCPE-175680](https://bugs.mojang.com/browse/MCPE-175680))

- Jungle Bushes now use Oak Leaves for foliage, aligning with the intended game aesthetic, despite their Jungle Log trunks ([MCPE-164963](https://bugs.mojang.com/browse/MCPE-164963))

### Blocks

- The Lily Pad Block's hitbox has been updated to be in parity with Java ([MCPE-60826](https://bugs.mojang.com/browse/MCPE-60826))

- The Sugar Cane Block's hitbox has been updated to be in parity with Java ([MCPE-60827](https://bugs.mojang.com/browse/MCPE-60827))

- TnT Blocks no longer flash with a solid white color when exploding ([MCPE-51809](https://bugs.mojang.com/browse/MCPE-51809))

- Candles and Candle Cake Blocks now play ambient sounds properly ([MCPE-130585](https://bugs.mojang.com/browse/MCPE-130585))

- The Pale Oak Leaves no longer appear lighter than on Java ([MCPE-188217](https://bugs.mojang.com/browse/MCPE-188217))

- Renamed Banners no longer lose their custom names when broken, or when washed in cauldrons ([MCPE-36429](https://bugs.mojang.com/browse/MCPE-36429))

- Twisting Vines and Weeping Vines now have an increased chance of dropping as items when broken with Fortune enchanted tools, including a 100% chance when using Fortune III ([MCPE-91033](https://bugs.mojang.com/browse/MCPE-91033))

- Dispensers can now place Shulker Boxes under water ([MCPE-76004](https://bugs.mojang.com/browse/MCPE-76004))

- Sniffer Egg block now only provides center support on top and bottom faces ([MCPE-169520](https://bugs.mojang.com/browse/MCPE-169520))

- Water and Lava no longer remains in the world when placing a Water or Lava Bucket against a Cave Vine with Glow Berries

- Sniffer Egg block no longer provides side support to any block

- Changed the player's hurt sound when walking on a Magma Block to use the fire hurt sound instead of the default sound ([MCPE-125864](https://bugs.mojang.com/browse/MCPE-125864))

### Items

- Suspicious Stews crafted with Tulips now apply the Weakness Effect for 7 seconds when consumed, matching Java ([MCPE-188040](https://bugs.mojang.com/browse/MCPE-188040))

- Suspicious Stews with the Weakness Effect acquired from Shipwrecks and trading with Villagers now apply the Weakness Effect for 7 seconds when consumed.

### Mobs

- Horses, Skeleton Horses, Zombie Horses, Donkeys, and Mules now play their ambient sounds as intended ([MCPE-178313](https://bugs.mojang.com/browse/MCPE-178313))

- Foxes now periodically play their "mad" sound while defending a player

- Baby Drowneds now move with the same speed as their Zombie and Zombie Villager counterparts ([MCPE-34574](https://bugs.mojang.com/browse/MCPE-34574))

- Gold Swords dropped by Piglins and Zombified Piglins now have randomized durability to match Java ([MCPE-75292](https://bugs.mojang.com/browse/MCPE-75292))

- Axes dropped by Piglin Brutes now have randomized durability to match Java ([MCPE-95543](https://bugs.mojang.com/browse/MCPE-95543))

- Creepers no longer flash with a solid white color when exploding ([MCPE-51809](https://bugs.mojang.com/browse/MCPE-51809))

- Neutral Mobs no longer become aggressive when Players or other Mobs throw Lingering Potions with positive effects on them ([MCPE-105343](https://bugs.mojang.com/browse/MCPE-105343))

- Endermen now correctly have a delay before they become hostile when you look at them ([MCPE-23544](https://bugs.mojang.com/browse/MCPE-23544))

### Sounds

- Nether Brick Slab, Red Nether Brick Slab, Nether Brick Wall, Red Nether Brick Wall, Cracked Nether Bricks and Chiseled Nether Bricks now have the same sound as Nether Bricks, matching Java Edition ([MCPE-74879](https://bugs.mojang.com/browse/MCPE-74879))

- Iron Bars, Iron Blocks, Iron Trapdoors, Iron Doors and Heavy Weighted Pressure Plates now make iron sounds when you mine, break, place and walk on them

- Added unique sound effects for Vines, Glow Berry Vines, Weeping Vines, and Twisting Vines ([MCPE-188001](https://bugs.mojang.com/browse/MCPE-188001))

- Wood stripping now plays a wood stripping sound instead of a wood step sound ([MCPE-106552](https://bugs.mojang.com/browse/MCPE-106552))

- Creating a Grass Path now makes a shovel flattening sound instead of a grass step sound ([MCPE-114390](https://bugs.mojang.com/browse/MCPE-114390))

### Spawner

- Zombie Villagers can no longer randomly spawn from a Zombie Mob Spawner, matching Java Edition ([MCPE-91436](https://bugs.mojang.com/browse/MCPE-91436))

## World Generation

- Creaking Hearts now generate more often in naturally generated Pale Oaks ([MCPE-187337](https://bugs.mojang.com/browse/MCPE-187337))

- Ravines now generate more often

- Ravines can once again reach the surface ([MCPE-121708](https://bugs.mojang.com/browse/MCPE-121708))

- Ravines can once again generate on the ocean floor

- Ravines now completely carve through Copper Ore veins and most other underground blocks ([MCPE-181410](https://bugs.mojang.com/browse/MCPE-181410))

- Ravines now properly interact with aquifers, filling with water instead of generating as disconnected segments

- Fixed issue that caused new terrain generation to not match already saved chunks in some Biomes ([MCPE-175332](https://bugs.mojang.com/browse/MCPE-175332))

## Structures

- Some Savanna Villages no longer have a hole where a Dirt Path block should be

# Technical Updates

## Add-Ons and Script Engine

- Added the ability to define the order for the items for the creative inventory & recipe book, called the crafting item catalog, for new items added by packs. New items can either merge with existing groups, create new groups with your own item for the icon, or just become added as loose items without a group. This catalog should be saved as `item_catalog/crafting_item_catalog.json` in your behavior pack

Example:

``` hljs
{
   "format_version": "1.21.60",
   "minecraft:crafting_items_catalog": {
      "categories": [
         {
            // Valid values are construction, equipment, nature, and items
            "category_name": "construction",
            "groups": [
               {
                  // This will add the items to the end of the
                  // existing planks group
                  "group_identifier": {
                     "icon": "minecraft:oak_planks",
                     "name": "minecraft:itemGroup.name.planks"
                  },
                  "items": [
                     "mynamespace:my_planks1",
                     "mynamespace:my_planks2"
                  ]
               },
               {
                  // This will create a new group
                  "group_identifier": {
                     "icon": "mynamespace:my_item",
                     // This is the name of your group which doubles as
                     // the localization string. The namespace is required
                     "name": "mynamespace:my_group_name"
                  },
                  "items": [
                     "mynamespace:my_item"
                  ]
               },
               {
                  // This adds items without being part of a
                  // group as loose items
                  "items": [
                     "mynamespace:my_loose_item"
                  ]
               }
            ]
         }
      ]
   }
}
```

- Item and Block json files now require a namespace for group names in the "menu_category" object.

- Added new Creator toggle setting \`Show Content Log GUI On Error During Load.

  - This setting with make the Content Log GUI automatically open and display after loading into a world and there was either warnings or errors found during the loading process.
  - This setting is disabled in the Editor.

## API

- Updated numeric JavaScript enums now properly handle and support reverse value mappings.

- Fixed a bug where calling `Player.hideAllExcept` could crash the server.

- InputPermissions

  - Moved the following `InputPermissionCategory` enum values to 1.17.0: `LateralMovement`, `Sneak`, `Jump`, `Mount`, `Dismount`, `MoveForward`, `MoveBackward`, `MoveLeft`, and `MoveRight`
  - Moved the following methods on `PlayerInputPermissions` to 1.17.0:
    - `isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;`
    - `setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;`

- Removed the "compostingChance" available from the ItemStack API. The composting chance for Vanilla items can now be accessed via the singular CompostableItemComponent-\>compostingChance in the Item Component API.

- Fixed edge cases where `ModalFormData` scrolls to the bottom when UI is opened.

- Added script bindings to `beta` for the experimental Aim-Assist feature.

  - `class AimAssistCategory`
  - `class AimAssistCategorySettings`
  - `class AimAssistPreset`
  - `class AimAssistPresetSettings`
  - `class AimAssistRegistry`
  - `enum AimAssistTargetMode`
  - `interface PlayerAimAssistSettings`
  - `class PlayerAimAssist`
  - method Player.getAimAssist to modify a player's aim-assist settings
  - method World.getAimAssist to add aim-assist presets and categories.

- Added enum `InvalidArgumentErrorType` that adds extra context to the type of invalid argument error.

- Added property `type` to `InvalidArgumentError` for checking the type of argument error.

- Moved the following methods from `beta` to `1.17.0`:

  - `Block::isWaterlogged`
  - `Block::setWaterlogged`

## Biomes

- Add creature spawn probability JSON component for spawning related experiments

## Blocks

- Removed "Upcoming Creator Feature" toggle requirement for `minecraft:item_visual` component.

- Removed **UpcomingCreatorFeatures** experiment requirement for `"ambient_occlusion"` field to be float type

- Re-added new field `"ambient_occlusion_exponent"` to **blocks.json** file schema in resource packs, replaces broken `"brightness_gamma"` field. ([MCPE-188216](https://bugs.mojang.com/browse/MCPE-188216) , [MCPE-188221](https://bugs.mojang.com/browse/MCPE-188221))

- Fixed issue where legacy data driven block didn't apply the render layer from the material instances component

- Fix spurious content log error: 'trying to override the Geometry component with blocks.json settings for a custom block'

- Door blocks use state `minecraft:cardinal_direction` instead of `minecraft:direction`. Uses string values ("north, south, east, west")

- Removed content log error: 'Block needs both a geometry and material instances component'

## Cameras

- Focus Target Camera is released. Its associated experimental toggle is removed ("Creator Cameras: Focus Target Camera")
- Focus Target Camera has vertical_rotation_limits of \[0.0, 180.0\] by default to reflect world space changes
- Focus Target camera now stops targeting when either \`clear\` from the camera command is used, or when the target is over 64 chunks away from the camera
- Focus Target Camera now displays a command output error when trying to target an entity when not on a free camera or custom camera that inherits from free camera.
- Focus Target Camera \`vertical_rotation_limits\` are now in world space. 0 degrees is straight down, 90 degrees is horizontal and 180 degrees is straight up. The limits for the values are \[0, 180\] inclusive.

## Commands

- Fixed a bug that would cause messages to report double the items that match the criteria when using the clear command with a max count of 0

- the "mine" overload of the /loot command has been moved to outside of Upcoming Creator Features experiments:

- The /kick command now allows use of target selectors on Realms.

- `wsserver` command disabled by default. Enable in General Settings.

- Websocket encryption default enabled for all platforms

- Added support for input glyph replacement for `/me` and `/tell` commands. For example, using input string ":\_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.

## Components

- The Strider now makes use of the minecraft:movement_sound_distance_offset component for its movement sound distance offset

- Added the "minecraft:renders_when_invisible" component, which enables entities to render even when invisible

  - Appropriate rendering behavior can then be specified in the corresponding "minecraft:client_entity"

- Moved the `minecraft:liquid_detection` component out of the Upcoming Creator Features experiment for format_versions 1.21.60 and above

- Expand the `minecraft:breedable` component to allow inheriting properties to child entities

  - Adds the new "property_inheritance" field which takes property name keyed objects
  - The objects in property_inheritance can contain a "mutation_chance" which give the chance it should not inherit from either parent
  - They can also contain the "mutation_values" array of values to select from if mutating and the component has random mutation set

- Added "min_looked_at_duration" field to "minecraft:looked_at" component to specify how long a stare has to be maintained before the target and cooldown logic is set

- The Strider now makes use of the minecraft:movement_sound_distance_offset component for its movement sound distance offset

- Two values on the minecraft:storage_item component have been split off into separate components:

  - max_weight_limit has been moved to the new minecraft:storage_weight_limit component
  - weight_in_storage_item has been moved to the new minecraft:storage_weight_modifier component

- Moved the "minecraft:compostable" item component out of experimental and to Release. Moved the related scripting apis out of Beta to Release

## Collisions

- Entities with no collision box but with the `minecraft:custom_hit_test` component are no longer sometimes unable to be interacted with

## Dedicated Server

- The movement mode authority chosen settings will now be displayed in the command window on dedicated server launch.

## Editor

- Added Roughen brush to terrain tool

- Added a new Workbench tool which allows for quickly changing block states for blocks with modifiable properties (doors, fences, etc)

- Added new Vertical Fly Speed ability.

- Added a night vision setting to the view settings pane. This enables night vision within the editor for the user and is enabled by default.

- Added `ContinuousAction` to supported key binding actions that simulate key repeats at set tick intervals

- Added 'Test World', 'Export', and 'Settings' to the ActionBar

- Added missing image for 'Navigation Panel' in the ActionBar

- Added color picker hue gradient selector works for monochromatic values

- Added right click on action bar items to toggle selector menus

- Added data-driven rendering to editor block images

  - Added block name aliasing for signs
  - Added support for namespace block names for `block://` protocol

- Added a new `BlockTable` UI element to Property Pane API.

- Added an optional CursorPosition property to the CursorPropertiesChangeAfterEvent. Using this new property, developers can track when the block or block face under the mouse cursor changes.

- Updated Editor Compass body to toggle between NSEW directions and Axis directions (Z, -Z, X, -X) on click

- Updated block picker to a floating window and made the viewport behind it clearer for middle-click

- Updated Flatten Brush to a Native Brush, increased maximum Height and Radius

- Updated export and play test pane to now include beds work and required sleeping players as export options

- Updated hot bar item to open block picker when shortcut key is pressed and block is already selected

- Updated daylight cycle and multiplayer options to now be respected in an exported world

- Updated Bedrock Dedicated Server to correctly load an existing Editor project regardless if the `Editor=true` command line argument is used

- Updated Fly Speed Multiplier Global Hotkeys.

  - Q, E, Shift + Q and Shift + E have been added as viewport keyboard shortcuts for increasing and decreasing fly speed

- Updated rotation slider to be an integer

- Updated `/reload` (and the `Reload Scripts` action bar item) to now work in the editor when hosting a session, or connected to a remote session (when only a single player is connected).

- Updated player model to now be fully hidden while in tool mode

- Updated farm generator to use transactions allowing for undo and redo functionality

- Updated the summon tool nudge operation to remain active as long as the key binding is held down.

- Fixed an assert/crash that occurs when changing dimensions

- Fixed an assert/crash when saving world and re-entering a world multiple times

- Fixed a bug that occasionally made panel scrollbars unresponsive.

- Fixed a bug that caused action bar items to change positions when scrollbar is visible

- Fixed a bug where game menus are shown in the tool mode viewport

- Fixed incorrect maximum value for fixed distance mode

- Fixed a bug that caused text field to lose focus when another UI element is hovered

- Fixed a number of missing block icon thumbnails for block:// image resource

- Fixed error sound triggered by pressing the number 9 key

- Fixed block thumbnail images to be centered in hotbar, block picker and lists

## Entities

- Fixed issue where `No more entities` assert failure occurred when flying through biomes during a storm

## Entity Components

- The "minecraft:breedable" component now has a field that enables the offspring's "minecraft:color" attribute to be a blend of the parents' "minecraft:color"

  - "combine_parent_colors", If a color mutation will not happen, the baby will get a combination of the parents' colors if the colors are compatible. Color combinations follow the rules of DyeItem combinations. If the colors are not compatible the baby will get one of the parents colors chosen randomly
    - Valid values: "true", "false"

## Entity Filters

- Added new entity filter "home_distance", which checks the distance of an entity from its home

  - Requires the subject entity to have a "minecraft:home" component
  - Returns false if the subject has no home or if the home is in a different dimension

- Added new entity filter "is_bound_to_creaking_heart", which checks if the Creaking Heart that spawned the subject Creaking still exists

## Fog

- Fixed issue where "inherit_from_prior_fog" field in biomes_client.json was ignored on first content on resource pack stack ([MCPE-187805](https://bugs.mojang.com/browse/MCPE-187805))

## Gameplay

- Fixed a bug where opening a chest while the clone command is spamming could crash the server.

## Graphical

- Improved logic for handling very large textures within atlases. Textures that are guaranteed to overflow the maximum atlas size will now have mips dropped individually rather than forcing the entire atlas to drop mips.

- Single-channel textures in resource packs are now interpreted as grayscale, rather than red. This change does not apply to single-channel UI textures, which were already interpreted as such

- client_biome JSON files now support a "surface_opacity" field in the "minecraft:water_appearance" component

  - This change also restores swampland and warm_ocean surface opacity to what they were until recently when the client_biome JSON files were introduced

## Items

- Added a content warning to the "minecraft:durability_sensor" item component's "particle_type" when an invalid value is provided

- Fixed an issue where non-host clients joining multiplayer sessions would be missing an icon for packs that had duplicate items

- The following legacy item (pre 1.16.100) components are now synced to the client:

  - `minecraft:camera`
  - `minecraft:seed`
  - `minecraft:max_damage`
  - `minecraft:hand_equipped`
  - `minecraft:stacked_by_data`
  - `minecraft:foil`
  - `minecraft:block`
  - `minecraft:use_duration`
  - `minecraft:max_stack_size`

- Removed "Upcoming Creator Feature" toggle requirement for `minecraft:block_placer` item component

- Migrated ItemData from `StartGamePacket` into `ItemRegistryPacket` (renamed from `ItemComponentPacket`)

## Network Protocol

- Added ActorFlags::RENDERS_WHEN_INVISIBLE

## Scripting

- Fixed `Entity.getComponent` and `Entity.getComponents` from crashing when called within `EntityDieAfterEvent` callback.

## Sounds

- Added "base" parameter to block sounds specifying another block sound they should use sounds for if they do not define a sound themselves

## Stability and Performance

- Fixed an issue where optional and required resource packs couldn't be downloaded when joining a multiplayer game if it was cancelled on the first download and join attempt

- Players on Switch should remain signed into their Microsoft Account after putting Minecraft app to sleep and resuming it.

- Removed redundant biome data from chunks and improved World Template generation stability.

- Made changes to add up to 4% CPU performance improvement on Switch

# Technical Experimental Updates

## Aim Assist

- Updated Aim Assist, now it can only be used in third person camera perspectives. Switching to a unsupported camera type will disable aim assist

- Changed aim-assist preset item settings to reference categories by unique namespace Ids globally instead of via name in a 'categories' list.

- Aim assist will no longer get automatically enabled when switch to vanilla third-person-behind camera by default ([MCPE-188005](https://bugs.mojang.com/browse/MCPE-188005))

- Aim assist will now only allow interactions within player's interact distance

- Aim Assist can now properly detect entities have hitbox partially inside detection area

- Block and entity targeting of Aim assist will now apply to touch control modes: 'Joystick & tap to interact' and 'D-Pad & tap to interact'

## API

- Added `scriptEvent` method to `system` object which sends a script event similar to the `/scriptevent` command to beta

- Added `NamespaceNameError` error which validates namespace usage to beta

- Added `NamespaceNameErrorReason` enum which shows the types of issues that namespace validation can run into to beta

- Added new function `collectPluginStats` to `@minecraft/debug-utilities` which will return the types and counts of all active script objects.

  - Removed `/script watchdog exportstats` command, deprecated in favor of script API.

- Added `setDynamicProperties` method to `World`, `Entity`, `ItemStack` and `ContainerSlot`.

- Added enum `LiquidType`.

``` hljs
export enum LiquidType {
    Water = 'Water'
}
```

- Added four new bindings to Script Block API (Beta).

  - `Block::canBeDestroyedByLiquidSpread`
  - `Block::isLiquidBlocking`
  - `Block::liquidSpreadCausesSpawn`
  - `Block::liquidCanFlowFromDirection`

- Added three new bindings to Script Block Permutation API (Beta).

  - `BlockPermutation::canBeDestroyedByLiquidSpread`
  - `BlockPermutation::isLiquidBlocking`
  - `BlockPermutation::liquidSpreadCausesSpawn`

- Fixed bug where `Block.setWaterlogged` would create a water source that does not flow.

- Rename `handleCounts` interface to `HandleCounts` in `@minecraft/debug_utilities` module.

- Fixed `BlockLocationIterator` crash that could happen if the `BlockVolume` that the iterator came from was deleted first.

## Commands

- Place: Entities saved within structures will now be placed unless specified

- Added two subcommands to the `/place` command behind the Upcoming Creator Features Experiment toggle

  - `/place feature`
  - `/place featurerule`

- `RegistrationBuilder.structureLocation` method in @minecraft/server-gametest

  - Added optional argument `structureDimension: DimensionTye | string` to specify which dimension the gametest should spawn in. If not provided, it will default to whichever dimension the test is ran from.

- `system.scriptEvent()` no longer returns `ScriptEventMessageSizeError` but instead an `InvalidArgumentError` for the message size exceeding 2048 characters in size in Beta

- Removed `ScriptEventMessageSizeError` from Beta

- Moved CameraTargetOptions from beta to `v1.16.0`

## Cameras

- Added easing between two moving cameras when "Creator Camera: New Third Person Presets" experiment is enabled
- Added the option to limit yaw rotations on all cameras with an orbit component

## Creator

- Added support for ItemTags in match_tool loot table conditions behind the Upcoming Creator Features Experiment toggle

### Components

- Removing a waterlogged custom block using the `minecraft:liquid_detection` component with `stopsLiquidFlowingFromDirection` enabled for all directions now results in flowing water rather than a stagnant block of water.

## Molang

- Moved `query.last_input_mode_is_any` to stable. It takes one or more arguments ('keyboard_and_mouse', 'touch', 'gamepad', or 'motion_controller'). If the last input used is any of the specified string values, returns 1.0. Otherwise returns 0.0. Available on the Client (Resource Packs) only.
- Moved `query.touch_only_affects_hotbar` to stable. It returns 1.0 if the touch input only affects the touchbar, otherwise returns 0.0. Available on the Client (Resource Packs) only.

## Scripting API

- Moved enum `InputMode` from `beta` to `1.17.0`.
- Moved class `InputInfo` from `beta` to `1.17.0`.
  - Moved property `lastInputModeUsed` from `beta` to `1.17.0`.
  - Moved property `touchOnlyAffectsHotbar` from `beta` to `1.17.0`.
- Class `Player`.
  - Moved property `inputInfo` from `beta` to `1.17.0`.
- Moved class `PlayerInputModeChangeAfterEvent` from `beta` to `1.17.0`.
- Moved class `PlayerInputModeChangeAfterEventSignal` from `beta` to `1.17.0`.
- Class `WorldAfterEvents`.
  - Moved property `playerInputModeChange` from `beta` to `1.17.0`.
- Moved class `InvalidEntityError` from `beta` to `1.17.0`.
- `system.scriptEvent` updated to return a new error for exceeding the message size
- Structure
  - Added `waterlogged: boolean` parameter to `setBlockPermutation`. This can be used to set whether the specified block within a structure is waterlogged.
- Removed `ScriptBlockType.canBeWaterlogged` from Beta - instead, `ScriptBlock.canContainLiquid` or `ScriptBlockPermutation.canContainLiquid` can be used to check if a block can be waterlogged.

## Stability and Performance

- Resolved a crash that could occur when using top_layer_modification in custom jigsaw structures
- Resolved a crash that could occur when entering the nether with a custom jigsaw structure in the nether
- Experimental support for applying a service-driven texture memory budget in low memory situations. When enabled, memory will be conserved by progressively reducing resolution of some textures as usage approaches the budgeted limit.

## User Interface

- Added a new radio button to allow players to select if they want Deferred Video Settings to favor performance or favor visuals.
