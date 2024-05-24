---
title: Minecraft Beta & Preview - 1.21.10.20
date: 2024-05-21T12:59:47Z
updated: 2024-05-24T09:32:37Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/26899699762061-Minecraft-Beta-Preview-1-21-10-20
hash:
  h_01HYDM41B624607MHH5CAT6SPK: features-and-bug-fixes
  h_01HYDM41B6G9E2DRHDR1PR7WCM: trial-spawner
  h_01HYDM41B6Y7J3EHGBZQWQGCXS: commands
  h_01HYDM41B6P6N422QQ57JS1328: game-tips
  h_01HYDM41B6Y8WEZSZKAGHZ4BJ8: gameplay
  h_01HYDM41B6XYNEZMDKNW9NARGN: items
  h_01HYDM41B6BGWJE38HGQ9BQ6CQ: marketplace
  h_01HYDM41B62QWVXTTSD5G36JZP: mobs
  h_01HYDM41B631V68S5D0YENYYZD: petrified-oak-slab
  h_01HYDM41B7FNW5G89MQJ4F0J7P: projectiles
  h_01HYDM41B7JEETJNKKRVXHFFXC: realms
  h_01HYDM41B7G9ZV6FH34JJG4JZF: trial-chambers
  h_01HYDM41B7GZSC6C4V9D4MCGHQ: user-interface
  h_01HYDM41B7H98EWW0ER308DA1A: vault
  h_01HYDM41B7D9BSEMYP4F0KAB8Z: technical-updates
  h_01HYDM41B70ZVBN058FQH6YPZ6: add-ons-and-script-engine
  h_01HYDM41B72DX0E1MDFFBNMDV2: api
  h_01HYDM41B7A0942PFNG5DEJYGS: blocks
  h_01HYDM41B7R36W819FJY6DB6VH: editor
  h_01HYDM41B7B3C1GBEAS7ADXGB9: entities
  h_01HYDM41B7PFVC0PDQB4WM2VPK: general
  h_01HYDM41B7TZT5KWPAT1HF93AA: graphical
  h_01HYDM41B7SB3Y2F9WYM3P68Q6: items-1
  h_01HYDM41B7B8E3SJHCXD35JG4W: molang
  h_01HYDM41B73M68A5XM6EGVQDJG: technical-experimental-updates
  h_01HYDM41B715NZSCYPPCB9XQGG: api-1
  h_01HYDM41B76T8445T8QKZB0YYK: components
  h_01HYDM41B7PGX8RP8A429QF5X6: general-1
  h_01HYDM41B7SD3FENM4PHTTQKCD: graphical-1
---

**Posted:** 22 May 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A portal ruins on the edge of a jungle biome, with a jungle temple up on the hill](https://feedback.minecraft.net/hc/article_attachments/26900163666957)

Here’s what’s new in the latest Minecraft: Bedrock Edition Beta and Preview update! Please keep sending in any suggestions you have at [feedback.minecraft.net](https://feedback.minecraft.net/), and please report and upvote any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/)!

# Features and Bug Fixes

## Trial Spawner

- Fixed some Trial Spawner texture inconsistencies ([MCPE-181455](https://bugs.mojang.com/browse/MCPE-181455))

## Commands

- Music will no longer be stopped by the '/stopsound' command

## Game Tips

- Added a swim tip for touch devices
- How to move is now taught to players on touch devices with the D-pad control scheme 

Sometimes it’s not a good time to learn new game play skills. For example, opening your inventory is not a relevant skill when you just discovered that the floor is lava. So here are some additional constraints for when game tips don’t show up:

-  The swim game tip only shows up when you are in water
- The break block tip is the most relevant tip when you're freezing in powder snow. Other tips won't show up
- When there are hostile mobs nearby you can still learn skills that will help you run away (movement, jumping and camera movement) but other tips won’t bother you

## Gameplay

- Slabs and Stairs should no longer randomly start placing on the bottom when continuously building ([MCPE-54855](https://bugs.mojang.com/browse/MCPE-54855)) 
- Fixed a bug that caused the environment within a chunk to noticeably change when thousands of blocks away from spawn ([REALMS-11625](https://bugs.mojang.com/browse/REALMS-11625)) 
- Particles generated when breaking Leaves will now match the color of the destroyed leaves ([MCPE-179726](https://bugs.mojang.com/browse/MCPE-179726))
- Locator Maps will now only render head and head attachments ([MCPE-61891](https://bugs.mojang.com/browse/MCPE-61891)) 
- The sound emitted when a player walks on a Heavy Core Block is now controlled by the appropriate slider in the audio preferences

## Items

- Breeze Rods now render correctly in third-person view ([MCPE-179661](https://bugs.mojang.com/browse/MCPE-179661))
- The Mace no longer breaks Cobwebs and Bamboo as fast as Swords and other sharp items ([MCPE-179754](https://bugs.mojang.com/browse/MCPE-179754))
- The Fishing Rod hook no longer sticks to actors that have the Projectile Reflection component ([MCPE-180337](https://bugs.mojang.com/browse/MCPE-180337))
- The Mace's Smash Attack no longer knocks back Mobs that have been tamed by the Player wielding the Mace ([MCPE-180962](https://bugs.mojang.com/browse/MCPE-180962))
- Attacking an entity with a Mace enchanted with the Wind Burst enchantment no longer negates fall damage ([MCPE-181496](https://bugs.mojang.com/browse/MCPE-181496))

## Marketplace

- Fixed a number of bugs related to downloading content getting stuck, including errors related to: "Downloads all stuck at 0%" and broken content updates ([MCPE-177684](https://bugs.mojang.com/browse/MCPE-177684))

## Mobs

- The Bogged's underwater melee attack no longer applies a Slowness effect to the victim ([MCPE-178884](https://bugs.mojang.com/browse/MCPE-178884))
- Parrot now correctly imitates the Bogged when nearby
- Witches now always drop 4-8 Redstone Dust on death
  - This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust

## Petrified Oak Slab

- The Oak-Slab-looking variation of "stone_block_slab" (aux value 2) is now flattened into its own new block "minecraft:petrified_oak_slab" ([MCPE-180964](https://bugs.mojang.com/browse/MCPE-180964)) 
  - Will behave like other Stone Slabs, eg. cannot be destroyed by fire, but will look like an ordinary oak slab
  - "minecraft:petrified_oak_slab" can only be obtained and placed through commands
- The Oak-Slab-looking variation of "double_stone_block_slab" (aux value 2) is now flattened into its own new block "minecraft:petrified_oak_double_slab" ([MCPE-180964](https://bugs.mojang.com/browse/MCPE-180964))
  - Will behave like other stone double slabs, eg. cannot be destroyed by fire, but will look like an ordinary oak double slab
  - "minecraft:petrified_oak_double_slab" can only be placed through commands

## Projectiles

- The Wind Charge Projectile can now be summoned via the /summon command ([MCPE-178937](https://bugs.mojang.com/browse/MCPE-178937)) 

## Realms

- All items on the Realms purchase screens are now focusable and can be navigated through using a gamepad input 
- Removed an extra "the" in Realms section of Minecraft Encyclopedia 

## Trial Chambers

- Trial Chambers now generate far less frequently in the Deep Dark biome

## User Interface

- We have been testing our fixed dpad-tweaks in Preview for a few weeks and are looking for your feedback here: <https://aka.ms/newdpadfeedback>
- When Regeneration effect is active, hearts on the HUD no longer move too fast ([MCPE-180864](https://bugs.mojang.com/browse/MCPE-180864)) 
- Shift-clicking inventory items no longer causes the item stack count to briefly appear above the stack
- Interacting with a block outside of a players reach no longer causes the block interface to briefly appear 
- Added new visual elements to Hardcore mode in Create New World and new Edit World, and a sound effect when toggling Hardcore mode on or off (Preview only)
- Items no longer render in front of stack size number when being quick moved ([MCPE-180712](https://bugs.mojang.com/browse/MCPE-180712)) 
- Number on a stack of items no longer overlaps with item hover text in Villager's trade menu ([MCPE-181338](https://bugs.mojang.com/browse/MCPE-181338)) 
- Item no longer moves slightly in slot after being quick moved to Anvil ([MCPE-180275](https://bugs.mojang.com/browse/MCPE-180275)) 
- Items no longer stay selected on touch devices when switching between Creative inventory tabs ([MCPE-173506](https://bugs.mojang.com/browse/MCPE-173506))
- Items can now be removed from the off-hand slot and crafting grids by tapping on other items in Creative inventory on mobile devices ([MCPE-168757](https://bugs.mojang.com/browse/MCPE-168757)) 

## Vault

- Loot ejected from Vaults in Trial Chambers are now dependent on level, position and player seed 

# Technical Updates

## Add-Ons and Script Engine

- Added a content error when ‘snow_accumulation’ array in a biome JSON has the minimum value set higher than the maximum value
- Fixed Camera sometimes having a visible easing motion after a non-eased camera set command ([MCPE-181364](https://bugs.mojang.com/browse/MCPE-181364)) 
- Fixed an issue that caused sideloaded .mcpack files to fail to apply when uploading to Realms 

## API

- Fixed a bug that prevented *get* and *StructureManager.place* from loading structures stored in the root of the structures directory 
- *MinecraftItemTypes* no longer contains old item names 
- Fixed bug that caused the game to crash when executing a run command from the *runCommand()* and *Dimension.runCommandAsync()* scripting APIs
- Potions 
  - Added class *Potions* which contains helpers for retrieving handles to potion associated types
  - Added class *PotionEffectType* which is a potion effect type handle associated with *MinecraftPotionEffectTypes*
  - Added class *PotionModifierType* which is a potion modifier type handle associated with *MinecraftPotionModifierTypes*
  - Added class *PotionLiquidType* which is a potion type handle associated with *MinecraftPotionLiquidTypes*
  - Added class *ItemPotionComponent* which can be obtained from a valid potion *ItemStack*
  - Added interface *PotionOptions* for use in *createPotion*
  - Added function *createPotion* for creating valid potion items
- Vanilla-Data 
  - Added enum *MinecraftPotionLiquidTypes* containing potion liquid IDs
  - Added enum *MinecraftPotionEffectTypes* containing potion effect IDs
  - Added enum *MinecraftPotionModifierTypes* containing potion modifier IDs
- BlockExplodeAfterEvent 
  - Released *BlockExplodeAfterEvent* from *beta* to *1.12.0*
  - Released *BlockExplodeAfterEventSignal* from *beta* to *1.12.0*
  - Released *blockExplode* from *beta* to *1.12.0*
- Released *ItemTypes* from *beta* to *1.12.0*
- Released *InputPermissionCategory* from *beta* to *1.12.0*
- Released *PlayerInputPermissions* and *inputPermissions* from *beta* to *1.12.0*
- Released *PlayerInputPermissionCategoryChangeAfterEvent* and *afterEvents.playerInputPermissionCategoryChanged* from *beta* to *1.12.0*
- Added bound check for *setCurrentValue*. The provided value will be clamped to the range of this attribute
- GameRules 
  - Released *ShowDaysPlayed* from *beta* to *1.12.0*
  - Released *showDaysPlayed* from *beta* to *1.12.0*
- EnchantmentTypes 
  - Released *getAll(): EnchantmentType\[\]* from *beta* to *1.12.0*
- EntityRaycastOptions
  - Released *ignoreBlockCollision* from *beta* to *1.12.0*
  - Released *includeLiquidBlocks* from *beta* to *1.12.0*
  - Released *includePassableBlocks* from *beta* to *1.12.0*
  - Released *hitBlockPermutation* member of *EntityHitBlockAfterEvent* from *beta* to *1.12.0*
- Released *beta* version of *addEffect* method on *Entity* to *3.0*, which adds a return type for the newly created effect (or undefined if no effect was added) 

## Blocks

- Fixed a bug where interacting, while sneaking, with Command, Jigsaw, and Structure blocks could cause the UI to open/close multiple times
- The Scaffolding block no longer flickers when moving at far distances ([MCPE-120910](https://bugs.mojang.com/browse/MCPE-120910))
- Top Snow/snow_layer block now falls when placed using the /setblock command 
- "double_stone_block_slab" block is now split into unique instances "smooth_stone_double_slab", "sandstone_double_slab", "oak_double_slab", "cobblestone_double_slab", "brick_double_slab", "stone_brick_double_slab", "quartz_double_slab", and "nether_brick_double_slab"
  - The id "oak_double_slab" had already been split from "double_wooden_slab", as a result, any "double_stone_block_slab:2" will be turned into the already existing "oak_double_slab" id. 
- "monster_egg" block is now split into unique instances: "infested_stone", "infested_cobblestone", "infested_stone_bricks", "infested_mossy_stone_bricks", "infested_cracked_stone_bricks", and "infested_chiseled_stone_bricks" 
- "infested_cobblestone" block destroy time has been changed to match Java Edition
- "stonebrick" block is now split into unique instances: "stone_bricks", "mossy_stone_bricks", "cracked_stone_bricks", and "chiseled_stone_bricks" 
- "Smooth Stone Bricks" block can no longer be obtained through commands and existing "Smooth Stone Bricks" will be converted to "Stone Bricks"
- "stone_block_slab3" block is now split into unique instances "end_stone_brick_slab", "smooth_red_sandstone_slab", "polished_andesite_slab", "andesite_slab", "diorite_slab", "polished_diorite_slab", "granite_slab" and "polished_granite_slab"
- "prismarine_slab", "dark_prismarine_slab", "prismarine_brick_slab", "andesite_slab", "polished_andesite_slab", "diorite_slab", "polished_diorite_slab", "granite_slab" and "polished_granite_slab" now have a destruction time of 1.5
- "end_stone_brick_slab" now has a destruction time of 3.0
- "stone_block_slab2" block is now split into unique instances "red_sandstone_slab", "purpur_slab", "prismarine_slab", "dark_prismarine_slab", "prismarine_brick_slab", "mossy_cobblestone_slab", "smooth_sandstone_slab", and "red_nether_brick_slab"

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **\#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

Updates this week:

- Added a new Paste Preview tool which supports preview visualization of the clipboard contents and enables rotate and mirror. Additional functionality has also been added to keyboard bindings
  - SHIFT+CTRL+V - Activate Paste Preview Mode (if there's content in the clipboard)
  - CTRL+C - Copy Selection to Clipboard
  - CTRL+V - Immediate paste to cursor position (no preview)
  - Arrows/Pg UP/Pg DN - manually nudge the 3D block cursor in a camera relative direction
  - CTRL + Arrows/Pg UP/Pg DN - Manually nudge the pivot location inside the bounds of the clipboard item, in a camera relative direction
  - SHIFT+CTRL + Arrows/Pg UP/Pg DN - Manually nudge the placement offset, in a camera relative direction
  - CTRL+D or ESC - Deselect Preview Mode
  - Left Mouse Click, ENTER or CTRL+F - Place paste preview in the world at the 3D block cursor position
  - CTRL + Mouse Click - Remove blocks in the shape of the clipboard item (Note: Current implementation will only use the bounding box... complex shape removal is still in development)
  - B - Cursor Block Mode
  - F - Cursor Adjacent (Face) Mode
  - R - Rotate Cycle CW (0, 90, 180, 270) around Y axis at pivot location
  - SHIFT+R - Rotate Cycle CCW (270, 180, 90, 0) around Y at pivot location
  - X - Mirror X Axis around pivot
  - Z - Mirror Z Axis around pivot
  - C - Toggle Cursor Control Mode between "Keyboard & Mouse" or "Keyboard Only"
  - D - Change Cursor Control mode to "Fixed Distance"
  - Scroll Wheel - Adjust Fixed Cursor distance (only when Fixed distance is enabled)
- Fixed a bug where clicking repeatedly on the "Uniform" checkbox in brush tool settings could cause a crash 
- Add *enabled* property to *IMenu* and *IMenuCreationParams*
- Added customization and pagination support for the Action bar. Action selector can be opened from plus button to add new items or from bottom right arrow of existing items to modify them 
- Updated documentation for SimpleTool classes
- Snow layer now falls when placed with a brush

## Entities

- Armor equipped to the second slot of "minecraft:equippable" is now applied to "slot.armor.body" instead of "slot.armor.torso"
  - To retrieve information about it, "query.armor_texture_slot", "query.armor_color_slot" and "query.armor_damage_slot" should now be used with a value of 4
  - This change only affects entities with a format version equal to or greater than *21.10*

## General

- Updated documentation for Feature Rules' schema 

## Graphical

- Level screenshot thumbnails now support RTX and Deferred Technical Preview worlds
- Particle Emitters that use the "minecraft:particle_appearance_lighting" component now use the correct light level instead of the world's origin light level

## Items

- Trimmed custom armor item icons now appear correctly when their icon texture name includes a namespace or does not match the item name
- \[BETA\] Introduced "slot.armor.body" as an extra armor slot for entities like Horses, limited to a single armor item but needing the effects of a full armor set 
  - "slot.armor.body" is supported by:
    - Commands (even if no suitable item is currently available for manipulation)
    - "minecraft:attachable"
    - "minecraft:interact"
    - "query.armor_texture_slot" (with value 4)
    - "query.armor_color_slot" (with value 4)
    - "query.armor_damage_slot" (with value 4)
    - "query.equipment_count"
    - "has_equipment" entity filter (with domain "body")
    - "all_slots_empty" entity filter (with domain "body")
    - "any_slot_empty" entity filter (with domain "body")
  - "slot.armor.body" is not supported by:
    - "minecraft:wearable"
  - Future adjustments may alter how items equipped to "slot.armor.body" affect entity visibility (intended as how easy an entity is detected by other entities), enchantments, and armor protection

## Molang

- Released *state_time* which no longer requires the 'Upcoming Creator Features' toggle 

# Technical Experimental Updates

## API

- BlockRecordPlayerComponent
- Added *UIManager* class and *uiManager* object to *@minecraft/server-ui* beta
  - Renamed the componentId to *minecraft:record_player* for consistency
  - Added methods *getRecord*, *ejectRecord*, *pauseRecord* and *playRecord*
  - Removed method *clearRecord*, instead you should now pass undefined to *setRecord* to reset it
  - Removed property *readonly getLifetimeState: EntityLifetimeState* from *beta*
- Removed enum *EntityLifetimeState* from beta
  - Move *setBlockPermutation(location: Vector3, permutation: BlockPermutation): void* from beta to *12.0*
  - Move *setBlockType(location: Vector3, blockType: BlockType \| string): void* from beta to *12.0*
  - Moved *getTags(): string\[\]* from *beta* to *12.0*
  - Moved *hasTag(tag: string): boolean* from *beta* to *12.0*
  - Removed property *readonly fallDistance: number* from *beta*

## Components

- EntityLeashableComponent
  - Added property *canBeStolen: boolean*
  - Added property *hardDistance: number*
  - Added property *leashHolder: Entity*
  - Added property *leashHolderEntityId: string*
  - Added property *maxDistance: number*
  - Added property *isLeashed: boolean*
  - Renamed function *leash(leashHolder: Entity): void* to *leashTo(leashHolder: Entity): void*

## General

- Updated the Hide Paperdoll toggle to default to false for Chromebooks
- Added the 'Creator Cameras: New Third Person Presets' experiment and toggle which contains:
  - New 'minecraft:follow_orbit' preset that is accessible by the /camera command and can have a view offset

## Graphical

- Removed an errant 10 times multiplier in atmospheric scattering in the Deferred Technical Preview
  - This is expected to cause skies in existing packs to become darker and will require content creators to multiply their Rayleigh Strength, Mie Sun Strength, and Mie Moon Strength each by a factor of 10 to achieve the same visual result as before
- Corrected an issue with the ACES tonemapper in the Deferred Technical Preview on Android. ACES tonemapping should now provide the expected results on Android. This should cause no changes on other platforms 
- Volumetric fog density settings are now supported for weather when a format_version of 1.21.0 or higher is specified in the Deferred Technical Preview
