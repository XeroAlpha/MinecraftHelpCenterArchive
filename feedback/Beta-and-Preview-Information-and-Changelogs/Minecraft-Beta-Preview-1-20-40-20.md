---
title: Minecraft Beta & Preview - 1.20.40.20
date: 2023-09-06T13:20:52Z
updated: 2023-09-07T15:41:59Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/19244682051341-Minecraft-Beta-Preview-1-20-40-20
hash:
  h_01H9QCWRGC7NSXFY3CFG8KQX3H: experimental-features
  h_01H9QCWRGC2MEFKER6NTFNYN0F: villager-trade-rebalancing-part-2
  h_01H9QCZBYYWARZWB0TNGG8C9WM: features-and-bug-fixes
  h_01H9QCZT9HGCK007D4YQMSGQ5F: accessibility
  h_01H9QD21XE1NG9SRMNEM3Y2NFS: audio
  h_01H9QD21XEJ9PJBW4T9ZV9P5V1: gameplay
  h_01H9QD21XFWF3WWKY245TFPESF: general
  h_01H9QD21XFSX71RN0A6H2F6E0A: graphical
  h_01H9QD21XFA8QK6H26Y0KQHHT4: mobs
  h_01H9QD21XFEAPW8BAQP5XFJDRH: vanilla-parity
  h_01H9QD21XFS1GS9CEY9ZDQBAK1: user-interface
  h_01H9QD21XFQRPB88VTWWA0SH9R: technical-updates
  h_01H9QD21XF05WF7AQ53RXDCE0K: add-ons-and-script-engine
  h_01H9QD21XFM43QZ0CYYVZY9WXY: commands
  h_01H9QD21XFSF222MJHYC8ZFRDR: components
  h_01H9QD21XF58NMJJK55V3GFKTE: molang
  h_01H9QD21XF97HF2TMFNKEQ6M5X: trade-tables
  h_01H9QD21XF674ZEY6WPMTJ6F9T: experimental-technical-updates
  h_01H9QD21XF54EHNCS5S1R7KHQV: script-api
  h_01H9QD3AADYNNJ1RBVP5KS6X2E: graphical-1
  h_01H9QD3AAE23Q6DNCA327550GN: stability-and-performance
  h_01H9QD3AAEF8R54HX9CEA4KN8B: user-interface-1
---

**Posted:** 7 September 2023

**Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions.

![An armorer villager standing in a doorway. Also seen in the village are other villagers, an iron golem, and a cat. There are dropped emeralds on the floor near a chest.](https://feedback.minecraft.net/hc/article_attachments/19244724805773)

Oh! I wasn’t expecting to see you here, I was trying to find my base! Instead I seem to have stumbled upon this Preview; which includes tweaks to help directionally-challenged explorers, as well as parity adjustments, gameplay fixes, and audio tweaks (stray cats now make a sound when begging for food!) Cartographers in villages will now sell seven new maps too, as experiments to rebalance villager trading continue, making it easier to find villages and other structures. This will come in handy when exploring, as certain Enchanted Books are *also* more likely to spawn in certain structures. Soon I everything I own will be Unbreakable! Just as soon as I re-find my base… As always, we really want to hear your thoughts on these experiments, so please send your feedback and ideas to [aka.ms/MC120Feedback](http://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

# Experimental Features

## Villager Trade Rebalancing Part 2

This pre-release updates the Villager Trade Rebalance experiment. This experiment has no effect on normal worlds. If you want to try these changes, you must turn on the Feature Toggle in the Experiments Menu when creating a new world.

Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change! We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We appreciate your feedback on these changes. Visit [this link](https://aka.ms/VillagerTradingFeedback) to share your thoughts! We have been following the discussions about the previous Librarian and Wandering Trader updates and look forward to seeing the conversation continue.

**Cartographer**

Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance.

Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village.

![cartographer.png](https://feedback.minecraft.net/hc/article_attachments/19276192204301)

Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map.

**Armorer**

The Armorer's trades have been updated with many changes.

The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds.

Early-game players will find Armorers useful as a great source of iron armor, Shields, and Emeralds.

Other changes include:

- Most master-level Armorers buy Iron Blocks (and pay very well for them)
- Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers
- The Savanna Armorer sells cursed diamond armor at reduced prices
- The Taiga Armorer can swap one piece of diamond armor for another

![armorer.png](https://feedback.minecraft.net/hc/article_attachments/19276175921549)

**Structure Loot**

Certain Enchanted Books now have a high chance of generating in some structures:

- Ancient Cities: Mending
- Mineshafts: Efficiency (I to V)
- Pillager Outposts: Quick Charge (I to III)
- Desert Temples: Unbreaking (I to III)
- Jungle Temples: Unbreaking (I to III)

# Features and Bug Fixes

## Accessibility

- Fixed an issue where text to speech did not say how to open chat or emotes
- Text-to-speech message for popup title/description is now played properly

## Audio

- Guardians and Elder Guardians make flopping sounds again when on land ([MCPE-26929](https://bugs.mojang.com/browse/MCPE-26929))
- Wither Skeletons now have their own unique sounds
- Updated the sound that’s played when Wither Skeleton Skulls are placed on top of Note Blocks
- The sound for picking up items is now played when using the ‘/give’ command
- Stray Cats now play a sound when begging for food
- Changes to Bottles ([MCPE-157918](https://bugs.mojang.com/browse/MCPE-157918))
  - Bottles now emit sounds when filling from Water Blocks
  - Pouring water or potions from a Glass Bottle into a Cauldron emits the appropriate sound
  - Filling a Glass Bottle with Water or Potion from a Cauldron now emits the appropriate sound
  - Drinking from a Glass Bottle now emits the appropriate sound

## Gameplay

- Sculk Block no longer drops XP when mined with Silk Touch
- Zombie Villager curing time is now randomized between 3 and 5 minutes, to match Java Edition
- Fixed an issue where moving slowly on Soul Sand would sometimes cause the player to not receive the Soul Speed movement speed ([MCPE-173155](https://bugs.mojang.com/browse/MCPE-173155))
- Players can no longer sometimes clip through blocks when flying in Creative Mode and spamming the sneak button ([MCPE-172785](https://bugs.mojang.com/browse/MCPE-172785))
- Players can no longer sometimes clip through blocks when gliding with Elytra into blocks ([MCPE-73307](https://bugs.mojang.com/browse/MCPE-73307))
- Buckets can no longer pick up liquids for a few ticks after they've been placed ([MCPE-100598](https://bugs.mojang.com/browse/MCPE-100598))
  - This should help make placing and retrieving liquid in a quick succession far more consistent as well as help players that are using a water bucket to quickly avoid fall damage
- Falling from a great height while in a Boat no longer deals fall damage ([MCPE-152753](https://bugs.mojang.com/browse/MCPE-152753))
- Fall damage is now absorbed by the entity that lands on the ground when mounted and passed on to passengers if the mount dies

## General

- Diagonal Banner patterns no longer get inverted when applied to a Shield ([MCPE-169577](https://bugs.mojang.com/browse/MCPE-169577))
- Updated structure icons on Explorer Maps sold by Cartographers
- Chest blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\] 
- Trapped Chest blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- Ender Chest blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]
- Stonecutter blocks use state "minecraft:cardinal_direction" instead of "facing_direction", this state uses string values \["south", "west", "north", and "east"\] instead of \[0, 1, 2, 3, 5, 6\]

## Graphical

- Equipped enchanted armor now has an overall weaker glint, however its intensity more noticeably increases and decreases over time

## Mobs

- Mobs no longer receive fall damage when falling into a 1 block deep water pool ([MCPE-173094](https://bugs.mojang.com/browse/MCPE-173094))
- Rabbits can once again eat partially and fully grown Carrot crops ([MCPE-131980](https://bugs.mojang.com/browse/MCPE-131980))

## Vanilla Parity

- Sheep that have been sheared previously and have since grown back wool will now drop wool on death ([MCPE-99972](https://bugs.mojang.com/browse/MCPE-99972))
- Fox can now pick up items that can be equipped ([MCPE-173898](https://bugs.mojang.com/browse/MCPE-173898))
- Closing the inventory of Boat, Raft, or Minecart with Chest now emits vibrations
- Cartographers no longer offer exploration maps as a trade item when not in the overworld
- Zombified Villagers now have the correct biome overlays ([MCPE-172377](https://bugs.mojang.com/browse/MCPE-172377))
- Changed the default value of the Respawn Radius in the Advanced Settings to 10

## User Interface

- Clicking off the game window will not unselect a friend. This will also not add a new invite for the currently selected friend when the game window is selected once more
- Smithing Table no longer shows double overlapping tooltips for some slots ([MCPE-168369](https://bugs.mojang.com/browse/MCPE-168369))
- Item names no longer overlaps with the absorption health bar ([MCPE-152131](https://bugs.mojang.com/browse/MCPE-152131))
- Item names no longer overlaps with the mount health bar ([MCPE-152130](https://bugs.mojang.com/browse/MCPE-152130))
- Item names no longer overlaps with the oxygen bar ([MCPE-152129](https://bugs.mojang.com/browse/MCPE-152129))
- Updated Brewing Stand interface to always stay within its background when scaled ([MCPE-154385](https://bugs.mojang.com/browse/MCPE-154385))
- Fix a bug where the tooltip for the v-sync setting was showing without being hovered

# Technical Updates

## Add-Ons and Script Engine

- Changed the names of the *CameraSetOptions* options to not include the word 'Script'

## Commands

- Re-entering a world no longer breaks command autocomplete after a command using "@e\[type=item\]" was used ([MCPE-164734](https://bugs.mojang.com/browse/MCPE-164734))
- The /damage command with the "override" cause now causes damage through post hit invulnerability ([MCPE-160290](https://bugs.mojang.com/browse/MCPE-160290))
- The recipe command color has been changed to white instead of blue ([MCPE-173362](https://bugs.mojang.com/browse/MCPE-173362))

## Components

- Added a content error when attempting to load a damage sensor with an invalid "cause" value 
- Allow single value parsing for "minecraft:icon" item component
- The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using “minecraft:dash”

## Molang

- Molang updated to version 1.20.40 which replaces "block_property" and "has_block_property" with "block_state" and "has_block_state"
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.20.40 or higher

## Trade Tables

- Trade items now have a "filters" property to determine if a trade should be considered 
- Trade items no longer support the "biome" property to check villager biome types, the "is_mark_variant" filter can be used in the "filters" property instead to check the villager biome type

# Experimental Technical Updates

## Script API

- Added the *chat(message: string)* method
- Changed *get* to return *ItemType \| undefined*
- Changed *source* on *ItemDefinitionTriggeredAfterEvent* to be optional
- Added the following methods to *Player*
  - *above(steps?: number): Block \| undefined;*
  - *below(steps?: number): Block \| undefined;*
  - *north(steps?: number): Block \| undefined;*
  - *east(steps?: number): Block \| undefined;*
  - *south(steps?: number): Block \| undefined;*
  - *west(steps?: number): Block \| undefined;*
  - *offset(offset: Vector3): Block \| undefined;*
  - *center(): Vector3;*
  - *bottomCenter(): Vector3;*
  - Made getItemStack function return ItemStack or undefined
- BlockStates
  - Made get function return BlockStateType or undefined
- Updated *ExplosionAfterEvent* and *ExplosionBeforeEvent*
  - *getUpdatedBlocks()* will now return *Block\[\]*
  - *setUpdatesBlocks(blocks: Block\[\])* now takes in a *Block\[\]*
- Added the following methods to *Player* playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;
- Dynamic Properties
  - Property registration is no longer required and *propertyRegistry* has been removed from the *worldInitialize* event
  - Removed limits on the count and size of properties that can set on an entity or the world
  - Default values have been removed. *getProperty* will now always return undefined for unset properties
  - String dynamic property values are now restricted to a length of 32767 bytes
- Dynamic Properties
  - Removed function *removeDynamicProperty* - Please use *setDynamicProperty* with a value of *undefined* to remove a property
  - Added function *getDynamicPropertyIds* - Returns an array of all dynamic property ids on an entity/world used by the behavior pack
  - Added function *getDynamicPropertyTotalByteCount* - Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack
  - Added function *clearDynamicProperties* - Removes all dynamic properties added by this behavior pack from an entity/world
- Dynamic Properties
  - Dynamic property numbers are now stored with double precision (64 bits)
- Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events
- Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta 

## Graphical

- Soul Torches are now treated as point lights in the Deferred Technical Preview 
- Allow data-driving of point lights and their colors for any block via resource packs in the Deferred Technical Preview

## Stability and Performance

- Improved chunk rendering performance in Deferred Technical Preview 

## User Interface

- Fixed a bug where "PBR" was not included in HUD while in level using Deferred Technical Preview
