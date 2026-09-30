---
title: Minecraft Beta & Preview - 26.60.29
date: 2026-09-30T15:13:25Z
updated: 2026-09-30T15:53:43Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49274834093453-Minecraft-Beta-Preview-26-60-29
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
  h_01M3SDX12ECBJFNXHSVB8CSKM1: experimental-features
  h_01M3SDX12EV9FQ221A80NX0W6H: drop-4-of-2026
  h_01M3SDX12FDQZGDMWCZ879T6G1: biomes
  h_01M3SDX12NQJAT08R41D43MFX5: blocks
  h_01M3SDX12SWG2K94KZY49QYXZE: freezing-mob-effect
  h_01M3SDX12VTHNEKY0R6SN67CDA: frostbite
  h_01M3SDX12Z56D25BG4QY43N4B4: ice-ball
  h_01M3SDX130AQRE3TA4220Q0WYH: sounds
  h_01M3SDX130QE47DH32BVSDYZ6B: features-and-bug-fixes
  h_01M3SDX130Z81YJFDHCKKAP6BX: accessibility
  h_01M3SDX1306SV50N6AW0ADJYV1: blocks-1
  h_01M3SDX131X8SSTDNATMGGT4NE: cushion
  h_01M3SDX1313ACSM0Q2D4XWHNZD: gameplay
  h_01M3SDX1322WPXDK82NHJJXXPR: graphical
  h_01M3SDX134K5AZ75JXR5KYNNWJ: mobs
  h_01M3SDX134E2X1HJSGVNGX2588: character-creator
  h_01M3SDX134CE8RKN0DM70QZPFD: realms
  h_01M3SDX135306K83PF1Q0MDRCQ: realms-hub
  h_01M3SDX136AXDKJ0M7T89X2VC3: sounds-1
  h_01M3SDX137EJSPX2QQMJ95QSAQ: stability-and-performance
  h_01M3SDX1372JCB4D238D3FK64D: user-interface
  h_01M3SDX13B53EM89WFFPAF1V2X: technical-updates
  h_01M3SDX13BT3C7R7N4ZN5YAYDV: commands
  h_01M3SDX13H8YK56K6P0D2RV3DA: editor
  h_01M3SDX13H3RC6Z52ZMMTMKGSK: mcstructure-files
  h_01M3SDX13KV9A9ZXB2ZW9F9VAA: api
  h_01M3SDX13WKGMRZRC4R8N6QQCT: pack-settings
  h_01M3SDX13W0SA6QFDXJ2J3SSTZ: block-components
  h_01M3SDX13WYSY990AJ4JVKYS88: redstone-dust
  h_01M3SDX13XKE6K9X7TTRC96AQE: editor-1
  h_01M3SDX13ZKFPKYPBGBKDEFZEA: features
  h_01M3SDX140JQEEFXFF1K5KM8GV: stability-and-performance-1
  h_01M3SDX140NT3A9N2JSP2TQMK0: user-interface-1
  h_01M3SDX140MVG7AE7XRFW5P0E2: experimental-technical-updates
  h_01M3SDX1418806KG5FBNWQET22: api-1
  h_01M3SDX144XV83PWAK8JEDX985: blocks-2
---

**Posted:**30 September 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

<figure class="wysiwyg-image">
<img src="https://feedback.minecraft.net/hc/article_attachments/49274836737805" alt="An Ice Cave in Minecraft Preview" />
</figure>

 

Brr! Does it feel colder all of a sudden? Minecraft LIVE revealed the first look at our next game drop – and it’s frosty. Explore ice caves filled with glittering icicles and ice crystals, plus meet a not-so-chill new hostile mob! The Frostbite is well adapted to colder conditions and can freeze players with its attacks. And as always, we’re keen to get your feedback on these new features at [aka.ms/mc-gamedrop_winter26](https://aka.ms/mc-gamedrop_winter26), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

## Experimental Features

### Drop 4 of 2026

#### Biomes

- The Ice Cave is a new cave biome that generates under the colder biomes in the Overworld. It consists mainly of Packed Ice and Calcite
  - Features terrain composed primarily of Packed Ice and Calcite
  - Icicles generate hanging from the ceiling
  - Large icicles made of Packed Ice generate on the ground and hanging from the ceiling
  - Patches of Snow occasionally generates on the ground
  - Ores generate embedded in pockets of Stone and Deepslate
  - Dirt and Granite do not generate in this biome
  - Glow Lichen does not generate in this biome
  - In addition to the mobs that normally spawn in caves, Strays and Frostbites can also spawn here
  - Ice Crystals occasionally generate on the ground
  - Ice Caves appear under biomes with low temperature

#### Blocks

- Ice Crystals are the only light source found in Ice Caves, as there is no Glow Lichen there. They can generate naturally on top of Packed Ice blocks
  - A new crystal-like block similar to Amethyst Clusters
  - Breaks if the support block is removed
  - It emits light and can be placed in any direction
  - Known issue: Ice Crystals are currently smaller than intended
- Icicles can be found all over the ceiling of ice caves. They generate under blocks of packed ice. If light levels are high enough, there is a chance they will drop and cause damage to anyone or anything unlucky enough to be hit by it
  - A new speleothem-like block similar to Dripstone and Sulfur Spikes
  - Can naturally grow up to 5 blocks long when pointing downward
  - Only grows in areas without nearby light sources and outside the Nether
  - Damages entities when it falls and deals extra damage to entities that land on it
  - Breaks when exposed to nearby light sources or while in the Nether, except for its base block

#### Freezing Mob Effect

- The Freezing Effect will cause players to shake, reduce their jump height, and eventually deal damage
  - Causes those affected to slowly become frozen as if in Powdered Snow for its duration
  - Leather Armor will keep them from becoming freezing, just like with Powder Snow, but will not keep the effect from being applied and will not remove the effect
  - Mobs will take additional damage from Freezing while they are affected by the mob effect
    - Mobs that are vulnerable to freezing have a five times multiplier to the damage taken
  - Lingering Potion, Splashing Potion, and Potion of Freezing can be brewed using Ice Balls
  - Arrow of Freezing can be crafted by dipping Arrows into a Cauldron filled with Potion of Freezing

#### Frostbite

- The Frostbite is a zombie variant that can throw ice balls. However, what they really like is to get close to you and use melee attacks that cause the Freezing Effect
  - A new Zombie variant
  - Spawns in cold/icy biomes
  - Switches between melee and ranged combat based on target distance and whether they have Ice Balls; melee attacks apply Freezing, while ranged attacks throw Ice Balls
  - Uses Zombie-style melee animations and dedicated Ice Ball throwing animations for both adult and baby variants
  - Transforms into a Zombie when underwater for long enough
  - Drops Rotten Flesh and Ice Balls
  - It can stand on top of Powder Snow
  - It is immune to freezing and does not get slowed by the Freezing effect or Powder Snow
  - Zombies and Husks now transform into Frostbites when inside Powder Snow

#### Ice Ball

- Ice balls are the projectile weapon of choice for the Frostbite. They deal a small amount of damage and have knockback
  - A new projectile that can be thrown by the Frostbite
  - Deals 4 damage to entities it hits, scaling down with velocity
  - Breaks on impact with blocks or entities, creating a particle effect and sound

#### Sounds

- Added custom sounds for Ice block

## Features and Bug Fixes

### Accessibility

- Fixed a bug on Android where the Disclosure pop-up couldn't be interacted with.

### Blocks

- Fixed Redstone dust not rendering the climb up the side of a block when the same wire also steps down to another wire on the opposite side

### Cushion

- Cushions in unloaded chunks no longer disappear when the chunk reloads ([MCPE-241970](https://bugs.mojang.com/browse/MCPE-241970))

### Gameplay

- Players can no longer duplicate items by holding an item and walking into a dropped stack of the same item while the inventory is full
- Added dedicated server settings to observe or enforce entity attack request compatibility and targeted-actor range

### Graphical

- The size of The End flash in Fancy graphics mode now more closely matches Java Edition.
- Fixed UI elements appearing in world preview images when using Vibrant Visuals on Nintendo Switch 2 ([MCPE-241596](https://bugs.mojang.com/browse/MCPE-241596))
- Fixed some inventory items appearing invisible with non-default Display Brightness and anti-aliasing set to 1 ([MCPE-241108](https://bugs.mojang.com/browse/MCPE-241108))
- Fixed bug where distance fog was overly bright when rendered in front of a water surface.
- Automatic upscaling now uses the closest supported resolution rounded down when switching to the Custom graphics settings, and Custom mode displays a notice that automatic resolution is only valid for presets

### Mobs

- Fixed a bug where split Slimes would have their parent's properties

### Character Creator

- Skin info panel now displays on unpurchased skins

### Realms

- Major improvements have been made to world download speed and reliability. Upload improvements coming next week!

#### Realms Hub

- Added a help guide for Realm owners and admins

### Sounds

- Fixed an issue where sounds could become out of sync after the game was paused and resumed

### Stability and Performance

- Players no longer become stuck on the "Generating World" loading screen when attempting to pause during dimension transfer
- Fix crash when holding an invalid photo
- Fixed an issue where joining a friend's world while already in a world could incorrectly load newer Vanilla resources when the friend's world used an older template
- Fixed issue with infinitely growing string values in level data.

### User Interface

- Updated main menu with a refreshed layout, improved performance through a rebuilt UI system and an updated first-time accessibility setup experience. More main menu updates are on the way, including new ways to jump back into your worlds and discover new Minecraft experiences. These updates are being rolled out incrementally, so they might not be available right away.
  - Let us know what you think [here](https://aka.ms/mc-updatedbdmainmenu)
- Improve initial loading time for out-of-game Ore UI screens ([MCPE-180677](https://bugs.mojang.com/browse/MCPE-180677))
- The Marketplace Wishlist now updates immediately after items are added, removed, or purchased, instead of showing the previous contents until the game is restarted
- Fixed "unkown" typos in error message strings with "unknown" ([MCPE-242276](https://bugs.mojang.com/browse/MCPE-242276))
- First-use onboarding now starts the selected multiplayer world while the player's Persona appearance is still loading
- Adds 'Marketplace Storage' bar to the storage menu on devices with separate World and Marketplace storage directories , 1656224
- Added missing and fixed incorrect closed captions
  - Cod, Pufferfish, Salmon, and Tropical Fish have the correct closed caption when killed
  - Pufferfish, Salmon, Tropical Fish, and Elder Guardians have the correct closed caption when hurt
  - Pufferfish, Salmon, Tropical Fish, Tadpole, and Elder Guardian have the correct closed caption when flopping
  - Elder Guardian has the correct closed caption when flapping on land
  - Comparators, Tripwires, and Dispensers now have the correct closed captions when emitting their clicking sounds
  - Dispensers now have the correct closed captions when failing to dispense an item
  - Slime mobs now have the correct closed caption when killed and summoned
  - Eggs, Eyes of Ender, Ender Pearls, Fishing hooks, potions, Snowballs, and other throwables now have the correct closed captions when thrown
  - Creeper now has the correct closed caption when primed
- Support for new Audio category in Marketplace
- Adding new icon for Creators navigation button in Marketplace

## Technical Updates

### Commands

- Removed the Creator World Clocks Features experiment
- /time of commands no longer require the Creator World Clocks Features experiment
- New /time commands no longer require the Creator World Clocks Features experiment
  - /time set \<TimeMarker\> (next\|previous\|stay)
  - /time pause
  - /time resume
  - /time query time
- Add new /time of sub-command for modifying world clocks
  - /time of \<clock\> add \<time\> - Adds time to the clock. Cannot result in a negative time
  - /time of \<clock\> set \<time\> - Sets the clock to the specified time. Cannot be set to negative.
  - /time of \<clock\> set \<timemarker\> (next\|previous\|stay) - Sets the clock to the occurrence of the time marker. Cannot result in a negative time
  - /time of \<clock\> pause - Pauses the clock
  - /time of \<clock\> resume - Resumes the clock
  - /time of \<clock\> query time - Outputs the clock's current time
- Added new overloads to the /time command for more control of the Overworld clock
  - /time pause - Pauses the Overworld clock
  - /time resume - Resumes the Overworld clock
  - /time query time - Outputs the Overworld clock's current time
- Replaced /time set \<TimeSpec\> with /time set \<TimeMarker\> (next\|previous\|stay)
  - Sets the Overworld clock to the occurrence of the time marker. By default this is next and works the same as the old TimeSpec variation

### Editor

- Fixed a bug that caused a lag spike when changing the mouse cursor icon

### .mcstructure Files

- Version 2 structure (.mcstructure) files can now use zlib compression to reduce file size
  - Added a root-level NBT integer tag, compression, with 0 for no compression and 1 for zlib compression; existing files without this tag continue to load as uncompressed structures
  - When compression is 1, the entire structure compound is serialized as NBT and stored as a zlib-compressed NBT byte array; other root-level metadata remains uncompressed
  - Structures exported from the game will now use this compression.

### API

- Being shown a player-scoped TextPrimitive or a CustomForm no longer corrupts a locator bar on next player joins
- Released WorldClockRegistry from beta to v2.11.0 in @minecraft/server
- Released WorldClock from beta to v2.11.0 in @minecraft/server
- Released TimeMarker from beta to v2.11.0 in @minecraft/server
- Released WorldClockRegistrationOptions from beta to v2.11.0 in @minecraft/server
- Released TimeMarkerOptions from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnTimeModifiedAfterEvent from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnTimeModifiedAfterEventSignal from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnPausedAfterEvent from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnPausedAfterEventSignal from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnResumedAfterEvent from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnResumedAfterEventSignal from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnTimeMarkerAfterEvent from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnTimeMarkerAfterEventSignal from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnRestartBeforeEvent from beta to v2.11.0 in @minecraft/server
- Released WorldClockOnRestartBeforeEventSignal from beta to v2.11.0 in @minecraft/server
- Released WorldClockEventOptions from beta to v2.11.0 in @minecraft/server
- Released WorldClockTimeMarkerEventOptions from beta to v2.11.0 in @minecraft/server
- Released WorldClockRegistrationError from beta to v2.11.0 in @minecraft/server
- Released WorldClockReloadNewWorldClockError from beta to v2.11.0 in @minecraft/server
- Released WorldClockReloadTimeMarkerError from beta to v2.11.0 in @minecraft/server
- Released WorldClockInvalidRegistryError from beta to v2.11.0 in @minecraft/server
- Released WorldClockNotFoundError from beta to v2.11.0 in @minecraft/server
- Released WorldClockTimeMarkerNotFoundError from beta to v2.11.0 in @minecraft/server
- Released WorldClockAddTimeMarkerError from beta to v2.11.0 in @minecraft/server
- Released WorldClockRemoveMinecraftTimeMarkerError from beta to v2.11.0 in @minecraft/server
- Released WorldClockInvalidTimeMarkerError from beta to v2.11.0 in @minecraft/server
- Released WorldClockRewindError from beta to v2.11.0 in @minecraft/server
- Released StartupEvent.worldClockRegistry from beta to v2.11.0 in @minecraft/server
- Released World.getClock from beta to v2.11.0 in @minecraft/server

#### Pack Settings

- The multiselect pack settings type now can take an optional field "selection_text" which when set will display the text in the selection dropdown of the multiselect in the pack settings UI. When not set, the currently selected items will be shown instead.

### Block Components

#### Redstone Dust

- Redstone dust placed with a command or the Script API now keeps the redstone_north, redstone_east, redstone_south, and redstone_west states it was given, until a block update recalculates them from its surroundings ([MCPE-242340](https://bugs.mojang.com/browse/MCPE-242340))

### Editor

- Editor location pointers, map markers, and ruler markers no longer take damage, flash red, or get knocked back when attacked
- Added a Delete Flood Widget button to the Flood tool panel
- The Clear Content Badges and Restore New Content Badges buttons now announce their labels when UI text-to-speech is enabled
- Fixed block icons turning pink and the editor becoming stuck on "Refreshing graphics, please wait..." after changing the graphics mode, such as toggling Vibrant Visuals
- Fixed sign blocks in the block palette showing a plank texture instead of the sign, which made every wood type look alike
- Fixed icons for custom blocks with slashes in their identifiers
- Editor block icons rendered through GeometryAtlas now display animated block textures
- Fixed Vibrant Visuals biome controls not refreshing after a graphics mode change
- Fixed block picker color swatches and color matching not updating when block color capture finishes after Editor initialization
- Fixed a bug that caused Block Picker list items to be misaligned
- Text will no longer change the mouse cursor to a pointer on hover
- Removed ExportManager and PlaytestManager APIs, same functionality will be part of core editor UI

### Features

- Replacement rules on Ore Features no longer get silently skipped if the may_replace field is omitted.

### Stability and Performance

- Hardened JSON parsing across resource loading and processing with iterative parsing and a maximum document size of 128 MB.

### User Interface

- Added messages that explain why matchmaking queues are canceled

## Experimental Technical Updates

### API

- Added the world.beforeEvents.playerItemAttackEntity event in beta to let scripts cancel an attack initiated through a player item interaction before it causes authoritative attack effects
- Added class BlockRecipeProcessingComponent to beta for accessing recipe processing inputs and output (initially supporting the crafter block)
- Added beta Script API access to the minecraft:vibration_properties block component, including methods to read whether vibrations can be dampened or occluded
- Added class PlayerCursorItemGrabAfterEventSignal to beta
- Added class PlayerCursorItemGrabAfterEvent to beta
- Added class PlayerCursorItemReleaseAfterEventSignal to beta
- Added class PlayerCursorItemReleaseAfterEvent to beta
- Added property WorldAfterEvents.playerCursorItemGrab to beta
- Added property WorldAfterEvents.playerCursorItemRelease to beta

### Blocks

- Added an optional title field to container in the minecraft:block_entity block component, accepting literal text or localization keys of 1 to 256 characters with Upcoming Creator Features enabled; omitting the field leaves the container heading blank
- Data-driven container titles now stay on one line and truncate with ... when needed in Classic and Pocket UI, including after localization
- Added the experimental minecraft:enchantment_power_transmitter block component, which defines whether a block can transmit enchantment power. If set to true and a block with this component is placed in the 1 block gap between an enchantment table and a bookshelf, the enchantment table will remain powered by the bookshelf
- Requires format version 1.26.60 and the Upcoming Creator Features experiment
- Added the experimental minecraft:vibration_properties block component, which defines whether a custom block dampens or occludes vibrations through the dampen_vibrations and occlude_vibrations properties
  - Requires format version 1.26.60 and the Upcoming Creator Features experiment
- Added the experimental minecraft:neighbor_change block component, which lets creators configure which neighboring block changes trigger the neighbor change after event for block custom components. Requires format version 1.26.60 and Upcoming Creator Features

{\
    "format_version": "1.26.60",\
    "minecraft:block": {\
        "description": {\
            "identifier": "demo:neighbor_listener_all"\
        },\
        "components": {\
            "minecraft:neighbor_change": {\
                "neighbor_directions": \["all"\] // "up", "down", "north", "west", "east", "south" also acceptable\
            },\
            "demo:neighbor_change_listener": {}\
        }\
    }\
}\

- Added the beta onNeighborChanged event for custom block components
  - Use minecraft:neighbor_change.neighbor_directions to choose which neighboring directions trigger the event.
  - Call BlockComponentNeighborChangedAfterEvent.getChanges to get the neighboring block changes.
  - For each tick, the game queues one event for each listening block with neighbor changes. Changes from different ticks create separate events, even if delivery is delayed.
  - Each chunk queues at most 4,096 events and delivers at most 100 events per tick. New events are dropped while the queue is full.
  - BlockComponentNeighborChangedAfterEvent.getChanges returns one NeighborChange for each direction that changed during the tick.
  - If one direction changes more than once during a tick, previousPermutation contains the permutation before the first change and blockPermutation contains the permutation after the last change. Intermediate permutations are not included.
  - NeighborChange.direction points from the listening block to the neighbor that changed.
  - BlockComponentNeighborChangedAfterEvent.block is a live handle to the listening block. The permutations returned by getChanges are snapshots of the changed neighbor.
  - If the block does not have minecraft:neighbor_change, changes from all neighboring directions can trigger the event.
