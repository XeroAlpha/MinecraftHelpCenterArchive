---
title: " Minecraft Beta & Preview - 1.20.70.20"
date: 2024-01-23T17:59:03Z
updated: 2024-01-29T14:05:58Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/23458154786829--Minecraft-Beta-Preview-1-20-70-20
hash:
  h_01HMVQTXE88KHK7GCZ0RZ6TQGV: information-on-the-minecraft-preview-and-beta
  01HMW3S38BV0C72S6VQE358KVE: experimental-features
  h_01HMVQTXE8FM6TZ13KZGS4PESQ: armadillo
  h_01HMVQTXE8347Y88Z1F4BWBD6J: polished-tuff
  h_01HMVQTXE81N2HBC9QJB5DD7SY: graphical
  h_01HMVQTXE8F6AA4C0RMVGCTX75: breeze
  h_01HMVQTXE87A3PZPYY5NEB1W5M: wolf
  h_01HMVQTXE8B55S3VAT24TY1T39: wolf-armor
  h_01HMVQTXE8ANACA8D0YA1613A4: api
  h_01HMVQTXE8V95EXT20KTTEPZF1: features-and-bug-fixes
  h_01HMVQTXE8H6T4V5ASTENJ652X: android
  h_01HMVQTXE8WEGJWJK1HB9ZDNNK: blocks
  h_01HMVQTXE9X00V1F7CNRVV9T1C: commands
  h_01HMVQTXE9KCNA7JS0CVH5SNDQ: touch-controls
  h_01HMVQTXE9K290HDYH1X8V7WQP: gameplay
  h_01HMVQTXE9099708PE31VQBP5M: realms
  h_01HMVQTXE92BMAB0PYM3P4D2G8: shield-globe-pattern
  h_01HMVR17WV1T2ZYY23NXGASKTR: block-sounds
  h_01HMVQTXE9S066F18ECRTSPNR6: realms-text-to-speech
  h_01HMVQTXE9RFAKXSNM93EDX9CB: user-interface
  h_01HMVQTXE96P87B3X246W9FV8H: vanilla-parity
  h_01HMVQTXE99HHXSAFH9K0CMR2A: mobs
  h_01HMVQTXE9JSQNMV9TJK6PTVTG: technical-updates
  h_01HMVQTXE95XBBJJECDQFSY2DR: api-1
  h_01HMVQTXE9166X9VRG7419V3ZJ: components
  h_01HMVQTXE9S2EZSP0T130M9A5P: editor
  h_01HMVQTXE9X3Z7SXXX4DK6DRJQ: entity-filters
  h_01HMVQTXE9613GYZBEKKTQT93T: molang
  h_01HMVQTXE9E124TXJGHKMT3PRY: nbt-parsing
  h_01HMVQTXE9RC27Q49VCM6V1R5B: preview-realms
  h_01HMVQTXE9KQ4HVC4J7S1XS8ES: spawn-rules
---

**Posted:** 24 January, 2024

# **Information on the Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![u7-1 preview.png](https://feedback.minecraft.net/hc/article_attachments/23458261139725)

Here’s a list of what’s new in the latest Minecraft Preview and Beta. As always, we love to hear your feedback, so please let us know what you think [here](https://aka.ms/MinecraftArmadilloFeedback), and report any bugs you may encounter at [bugs.mojang.com](https://bugs.mojang.com/).  
  

# **Experimental Features:**

## **Armadillo**

- The textures for the Armadillo, Armadillo Spawn Egg, and Armadillo Scute have been updated
- Armadillos now have a reduced vertical range when scanning for potential threats
- Armadillos can now also be found in Badlands biome variations
- Armadillos now scare away Spiders and Cave Spiders, but only when they are not rolled up
- Armadillos now float better and create more splash particles when in Water
- Baby Armadillos now catch up to their parents a bit faster
- The Armadillo’s roll-up behavior has been enhanced to bolster its defensive capabilities:
  - Armadillos are now more resistant to damage when rolled up
  - Armadillos now roll up when attacked by a player or a mob, instead of panicking
  - Armadillos now keep track of the last player who hit them, regarding them as a threat for 20 seconds

## **Polished Tuff**

- Polished Tuff now plays its fall sound when entities fall onto it ([MCPE-176939](https://bugs.mojang.com/browse/MCPE-176939))

## **Graphical**

- Fixed items not showing in the inventory when held in hand in the Deferred Technical Preview ([MCPE-177578](https://bugs.mojang.com/browse/MCPE-177578))
- Fixed more occurrences of “light leaking” in the Deferred Technical Preview ([MCPE-177189](https://bugs.mojang.com/browse/MCPE-177189))
- Fixed lighting artifacts that could occur after suspending/resuming on Android in the Deferred Technical Preview
- Items held by players now cast shadows when in third-person in the Deferred Technical Preview
- Items held by mobs now cast shadows in the Deferred Technical Preview
- Fixed banner staffs not rendering while equipped in hand in the Deferred Technical Preview
- Improved point light color blending in the Deferred Technical Preview
- Fixed point lights behind the camera popping in and out in the Deferred Technical Preview

## **Breeze**

- Updated the model, texture, and animation of the Wind Charge projectile to give it a more dynamic look and feel

## **Wolf**

- The collars of tamed Wolves have been increased in size, making them visible not only from the front but also from other angles

## **Wolf Armor**

- The textures for the Wolf Armor and the Wolf Armor item have been updated

## **API**

- ItemComponents
  - Added *isCooldownCategory(cooldownCategory: string) : boolean* to *ItemCooldownComponent*
  - Added *getCooldownTimeRemaining(player: Player) : number* to *ItemCooldownComponent*
  - Added *MinecraftCooldownCategoryTypes* to *@minecraft/vanilla-data*
    - Added *getHiddenHudElements(): HudElements\[\]*
    - Added *isForcedHidden(hudElement: HudElements): Boolean*
    - Added *resetHudElements(): void*
    - Added *setHudVisibility(visible: HudVisibility, hudElements?: HudElements\[\]): void*
    - Added *hideAllExcept(hudElements?: HudElements\[\])*
  - Added interface *BlockFilter*. Used to include / exclude blocks by tag, type and permutation
  - BlockRaycastOptions
    - Added optional member *BlockFilter*
    - Updated *getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit \| undefined* to throw if the BlockFilter include / exclude types cannot be resolved inside *BlockRaycastOptions*
    - Moved *ItemDurabilityComponent* from *beta* to *1.9.0*
  - Debug Utilities
    - Started publishing the debug utilities type information
    - Added a *disableWatchdog* method that lets you disable and enable the scripting watchdog in your scripts
    - Added function *playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void* - Plays a sound at a specified location for all players in the dimension
    - Moved *getAllStates* API from *beta* to *stable*
      - *clearJob(jobId: number)* - Will now clear iterations in the current tick as well as any scheduled for future ticks. Previously would only clear iterations in future ticks
    - @minecraft/server.WeatherChangeAfterEvent
      - Moved *WeatherChangeAfterEvent* from *beta* to *stable*
      - Moved *setOnFire* from *beta* to *1.9.0*
      - Moved *extinguishFire* from *beta* to *1.9.0*
    - Moved *EntityOnFireComponent* from *beta* to *1.9.0*
      - Moved *getEquipmentSlot* from *beta* to *1.9.0*
    - Moved *BlockStateType* from *beta* to *1.9.0*
    - Moved *BlockStates* from *beta* to *1.9.0*
    - Moved *BlockSignComponent* from *beta* to *1.9.0*
    - Moved *DyeColor* from *beta* to *1.9.0*
    - Moved *SignSide* from *beta* to *1.9.0*
    - Moved *ContainerSlot* from *beta* to *1.9.0*
    - Moved *InvalidContainerSlotError* from *beta* to *1.9.0*
      - Moved *getSlot* from *beta* to *1.9.0*
    - Moved *EffectTypes* from *beta* to *1.9.0*
    - Moved *RawText* from *beta* to *1.9.0*
      - Moved *createExplosion* from *beta* to *1.9.0*
    - Moved *ExplosionOptions* from *beta* to *1.9.0*
    - Moved *DimensionType* from *beta* to *1.9.0*
    - Moved *DimensionTypes* from *beta* to *1.9.0  
        *

# **Features and Bug Fixes:**

## **Android**

- Storage location will switch to External automatically on fresh installs if storage permission is granted via app settings prior to launching the game on devices running Android 12 or older ([MCPE-177269](https://bugs.mojang.com/browse/MCPE-177269))
- Certain files and directories will be generated in external storage on next launch when setting storage location to External via in-game settings on devices running Android 12 or older ([MCPE-176675](https://bugs.mojang.com/browse/MCPE-176675))

## **Blocks**

- Fixed a bug that made it so players could not place multiple items while moving, such as Boats or Fireworks ([MCPE-178063](https://bugs.mojang.com/browse/MCPE-178063), [MCPE-178077](https://bugs.mojang.com/browse/MCPE-178077))
  - As a result of this fix, we've had to revert the fix for Slabs and Stairs being placed inconsistently while continuously building ([MCPE-54855](https://bugs.mojang.com/browse/MCPE-54855)). We'll work to reintroduce a fix for this in an upcoming update
- In Realms, removing an item from an Item Frame while in Creative no longer destroys the Item Frame ([REALMS-10464](https://bugs.mojang.com/browse/REALMS-10464))
- In Realms, removing a book from a Lectern while in Creative no longer destroys the Lectern ([REALMS-10536](https://bugs.mojang.com/browse/REALMS-10536))
- “leaves” block is now split into unique names, “oak_leaves”, “spruce_leaves”, “birch_leaves, and”jungle_leaves”
- “leaves2” block is now split into “acacia_leaves” and “dark_oak_leaves”
  - Commands will still work with “leaves” and “leaves2”, but only new leaves names will be suggested in the command prompt
- The “minecraft:grass” block has been renamed to “minecraft:grass_block”, the old name is still understood from commands and data
- “double_wooden_slab” block is now split into unique instances “double_oak_slab”, “double_spruce_slab”, “double_birch_slab”, “double_jungle_slab”, “double_acacia_slab”, “double_dark_oak_slab”
  - Commands will still work with “double_wooden_slab”, however, “double_wooden_slab” block will not be suggested
- “wooden_slab” block is now split into unique instances “oak_slab”, “spruce_slab”, “birch_slab”, “jungle_slab”, “acacia_slab”, “dark_oak_slab”
  - Commands will still work with “wooden_slab”, however, “wooden_slab” block will not be suggested

## **Commands**

- “has_property” filter added for target selector of entities. This will allow the user to target entities based on the properties that they have or not have

## **Touch Controls**

- Players can no longer enter customize touch controls when dead ([MCPE-178037](https://bugs.mojang.com/browse/MCPE-178037))

## **Gameplay**

- Sweet Berry Bush Sapling now slows down players when walked through ([MCPE-46152](https://bugs.mojang.com/browse/MCPE-46152))
- Fixed skylight not being updated properly when big gap of air were present between the ceiling and the floor
- Players can now bridge blocks over water ([MCPE-163165](https://bugs.mojang.com/browse/MCPE-163165))
- Upwards player motion will now reset fall distance, allowing Riptide Tridents to break a fall ([MCPE-126454](https://bugs.mojang.com/browse/MCPE-126454))

## **Realms**

- Fixed deleting the last story on a Realms Stories Feed page not redirecting you back to the previous page
- Realms Stories no longer requires the game to restart after the feature is released
- Updated the Realms Plus landing page to make it more clear how Realms subscriptions work

## **Shield Globe Pattern**

- Updated the Globe pattern on shields to match Java Edition ([MCPE-169595](https://bugs.mojang.com/browse/MCPE-169595))

## **Block Sounds**

- Lots of blocks now play appropriate sounds when entities fall onto them. The blocks are as follows: ([MCPE-176939](https://bugs.mojang.com/browse/MCPE-176939))
  - Amethyst Block
  - Amethyst Cluster variants
  - Ancient Debris Block
  - Anvil Block
  - Azalea Block
  - Azalea Leaves
  - Bamboo Block
  - Bamboo Wood
  - Basalt Block
  - Big Dripleaf
  - Bone Block
  - Calcite Block
  - Candle
  - Cave Vines
  - Chain Block
  - Cherry Leaves
  - Cherry Wood
  - Chiseled Bookshelf
  - Copper Block variants
  - Coral Block
  - Crimson Nylium Block
  - Deepslate Block
  - Deepslate Bricks
  - Dripstone Block
  - Frog Spawn
  - Froglight
  - Glass Block
  - Grass Block
  - Gravel Block
  - Hanging Roots
  - Hanging Sign
  - Honey Block
  - Ladder Block
  - Lantern Block
  - Lodestone Block
  - Mangrove Roots
  - Moss Block
  - Moss Carpet
  - Mud Block
  - Mud Bricks
  - Muddy Mangrove Roots
  - Nether Brick Block
  - Nether Gold Ore Block
  - Nether Sprouts
  - Nether Wart
  - Nether Wart
  - Netherite Block
  - Netherrack Block
  - Packed Mud
  - Pink Petals
  - Pointed Dripstone
  - Powder Snow
  - Rooted Dirt
  - Sand Block
  - Scaffolding Block
  - Sculk Catalyst
  - Sculk Sensor
  - Sculk Shrieker
  - Sculk Vein
  - Shroomlight Block
  - Slime Block
  - Snow Block
  - Soul Sand Block
  - Soul Soil Block
  - Spore Blossom
  - Stone Block
  - Suspicious Gravel
  - Suspicious Sand
  - Tuff Block
  - Turtle Egg Block
  - Vine Block
  - Warped Nylium Block
  - Warped Wart
  - Wood Blocks
  - Wool Block

## **Realms Text-to-Speech**

- The text-to-speech narrator will now read the filter dropdown menu in the members tab when collapsed
- The text-to-speech narrator will now read the sort dropdown menu in the members tab when collapsed
- Fixed narration for main panel text and Realm Feed button on Realm Slots screen
- Added full narration for timestamps in stories and comments
- Removed double narration from the Opt Out button in the Realms settings menu

## **User Interface**

- Update design of the report a friend warning modal and the report limit warning modal
- Fixed a bug that caused cleared text to reappear in the inventory search bar ([MCPE-174590](https://bugs.mojang.com/browse/MCPE-174590))  
    

# **Vanilla Parity:**

## **Mobs**

- Wolves can now withstand the same amount of damage as in Java Edition ([MCPE-177613](https://bugs.mojang.com/browse/MCPE-177613))
  - Rather than halving all damage dealt to tamed Wolves by entities other than Players or Arrows, as currently done in Java Edition, the maximum health of tamed Wolves has been increased from 20 to 40
  - Pre-existing tamed Wolves will need to be fed to reach the new maximum health
  - To ensure the healing rate remains consistent, the health restored by feeding Wolves has been doubled
  - Java Edition will be adjusted to match the new Bedrock Edition implementation  
      

# **Technical Updates:**

## **API**

- Added *ScriptGameRules* and *gameRules* for accessing & modifying game rules

## **Components**

- The “entity_sensor” component’s “range” field now supports two values, the first one for horizontal range and the second one for vertical range
- This requires a “format_version” of 1.20.70 or higher

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- The PropertyPane.addDropdown function now returns an IDropdownPropertyItem that can be used to call the new “updateDropdownItems” to change the Dropdown items in an existing Dropdown and optionally set a new currently-selected index. “updateDropdownItems” calls the corresponding “onChange” function but passes -1 in for the oldValue because the list is changing entries
- Added Cursor delta relative to Player position and the name of the block at the cursor position to the Player position status bar entry
- Vector3 panes now have a default “minX/Y/Z” of “MIN_SAFE_INTEGER”, allowing negative values to be used
  - The player will now correctly spawn at the current location when the “Spawn at current location” option is checked in the test world property pane
- Viewport in the editor is no longer incorrectly offset while in a world with deferred graphics enabled

## **Entity Filters**

- Added new entity filter “was_last_hurt_by”, which checks if the subject is the last player or mob to have recently attack the entity

## **Molang**

- Removed experimental Molang queries
  - biome_has_any_tag
  - biome_has_all_tags
  - self
  - target
  - client_input_type
  - get_nearby_entities
  - get_nearby_entities_except_self
- Added new Molang API’s that give read access to rider body and head rotations
  - rider_body_x_rotation(riderIndex) =\> float
  - rider_body_y_rotation(riderIndex) =\> float
  - rider_head_x_rotation(riderIndex) =\> float
  - rider_head_y_rotation(riderIndex,clampRotation?) =\> float
  - ride_body_x_rotation =\> float
  - ride_body_y_rotation =\> float
  - ride_head_x_rotation =\> float
  - ride_head_y_rotation(clampRotation?) =\> float

## **NBT Parsing**

- Loading of NBT data is now more restrictive. Negative-length arrays, invalid tag ids, and not enough bytes in a payload are now all treated as errors which will prevent a tag loading where before those conditions were sometimes ignored

## **Preview Realms**

- Fixed a bug where pressing the back button at the Choose a Subscription screen would cause the “Preview Realms couldn’t load” message under some circumstances

## **Spawn Rules**

- “minecraft:spawns_on_block_filter” now supports block descriptors
- “minecraft:spawns_on_block_prevented_filter” now supports block descriptors
- “minecraft:spawns_above_block_filter” now supports block descriptors
