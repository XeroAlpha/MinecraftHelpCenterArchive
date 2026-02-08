---
title: Minecraft - 1.21.20 (Bedrock)
date: 2024-08-08T19:11:40Z
updated: 2024-08-12T17:14:01Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/29110275666957-Minecraft-1-21-20-Bedrock
hash:
  h_01J4SYMRQ6DTY0AFKQS8G0RVNT: fixes-and-changes
  h_01J4SYMZ5RVSG9TNWF31W84B76: performance--stability
  h_01J4SYSCS296GETQ6VD412FYBH: general
  h_01J4SYSQ988GT7RSAJ564GT7BE: gameplay
  h_01J4SYST7PYPKMFR9REEJZNRDP: mobs
  h_01J4SYSX0PCFJXF50KKY7J5AW8: blocks
  h_01J4SYT0PEG4YHB0NEX7GFH5DV: wind-charge
  h_01J4SYT575SG5G4CXDQ4MVSRS4: items
  h_01J4SYT8GG7C1J3W2T6QZZCCKG: music--sound
  h_01J4SYTE4R69J537YYWT8H4QWG: realms-invite-links
  h_01J4SYTH39M8KTXRZADYR5MYDZ: realms
  h_01J4SYTMXM93C5YWWQZNBAPW1A: accessibility
  h_01J4SYTQM11QM66FKBS5AZ7ZMR: customizable-controls
  h_01J4SYTV3XH2PEB9CH9JDEF2V9: user-interface
  h_01J4SYTZ2FY1Z77W9V71BT2QJX: game-tips
  h_01J4SYMRQ7FN3G84BP37TBCE23: technical-updates
  h_01J4SYV46P94WD511SCGJ8AZZ4: general-1
  h_01J4SYV8AZ3408GQC45C5NBC75: add-ons-and-script-engine
  h_01J4SYVB52Z6KB3ARACR2HDS84: api
  h_01J4SYVG621DNQ8QVCKJ343M5K: blocks-1
  h_01J4SYVPR09PR7BESWKFG4C69D: camera
  h_01J4SYVVGGPP2ZK75G0DPMJ8KN: commands
  h_01J4SYVY62XSTZGFNSSC32M875: entities
  h_01J4SYW2687DFE1DB16SJWPHPP: graphical
  h_01J4SYW5MRXVM3ZV55Y6SJN6AT: items-1
  h_01J4SYW9QNJ01WSD1Z0TRDX0HN: molang
  h_01J4SYWC49NDXC2ZK98AAF0VVS: petrified-oak-slab
  h_01J4SYWEY3FSXQTSBDJYDQNJ7F: structure-block
  h_01J4SYMRQ7Y7FSW921ZQMWHD8F: experimental-technical-updates
  h_01J4SYWMJ28G259CZPPMJD5XRS: api-1
  h_01J4SYWZ3JJZW8EQ3F8Q6PX2WZ: blocks-2
  h_01J4SYX48YR5KCRBDEFDK3XC77: entity-components
---

**Posted:** August 13, 2024

A new update has been released with a variety of quality-of-life improvements and fixes to the Minecraft experience! Read below for a full list of the changes included.

![image_r21u2.png](https://feedback.minecraft.net/hc/article_attachments/29115191581069)

Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at [bugs.mojang.com](https://bugs.mojang.com/) and leave us your feedback at [feedback.minecraft.net](https://feedback.minecraft.net/).\
\

# **Fixes and Changes:**

## **Performance / Stability:**

- Fixed a number of bugs related to downloading content getting stuck, including errors related to: "Downloads all stuck at 0%" and broken content updates ([MCPE-177684](https://bugs.mojang.com/browse/MCPE-177684))
- Fixed item and block corruption when converting worlds from legacy Console Edition
- Fixed an issue on Amazon devices where game would occasionally crash when joining a world

## **General**

- Fixed an issue so that Marketplace content is properly imported before creating or starting a world
- Legacy worlds no longer have chunks at the edge of the world that don't render

## **Gameplay**

- Fixed a bug that caused the environment within a chunk to noticeably change when thousands of blocks away from spawn ([REALMS-11625](https://bugs.mojang.com/browse/REALMS-11625))
- The sound emitted when a player walks on a Heavy Core Block is now controlled by the appropriate slider in the audio preferences
- Trial Chambers now generate far less frequently in the Deep Dark biome
- Jumping no longer overrides any previous greater upward velocity, and therefore doesn't cancel momentum from a Wind Burst explosion when both happen at the same time
- Loot ejected from Vaults in Trial Chambers are now dependent on level, position and player seed
- Players will no longer receive damage when in the world load or dimension transfer loading screen ([MCPE-42310](https://bugs.mojang.com/browse/MCPE-42310))
- Players no longer momentarily go into a crawl for a single tick when moving towards a Bed with a 1.5 unit gap above it ([MCPE-178370](https://bugs.mojang.com/browse/MCPE-178370), [MCPE-180810](https://bugs.mojang.com/browse/MCPE-180810))
- Area Effect Clouds no longer shrink when entered by entities immune to the effect

## **Mobs**

- The Bogged's underwater melee attack no longer applies a Slowness effect to the victim ([MCPE-178884](https://bugs.mojang.com/browse/MCPE-178884))
- Bogged no longer levitates when riding a Boat, Raft, or Minecart ([MCPE-178876](https://bugs.mojang.com/browse/MCPE-178876))
- Parrots now correctly imitate the Bogged when nearby
- Witches now always drop 4-8 Redstone Dust on death
  - This is to improve the viability of farms that utilize Witch Huts to obtain Redstone Dust
- Fixed mob animations not playing when mobs were unloaded in split screen
- Fixed a bug where the Breeze could get stuck in one place when beneath a roof of blocks while attacking
- Entities that fail to load due to missing content will now be preserved inside the level. These entities will re-appear when the missing content becomes available (i.e. Removing and re-applying an Add-On)
- Drowned now spawn individually in rivers instead of in groups of two
- Drowned now spawn in aquifers in dripstone caves ([MCPE-144066](https://bugs.mojang.com/browse/MCPE-144066))
- Wolves, Bears, and Pandas will panic and try to avoid danger when damaged by environmental sources, eg: fire, lava, freezing
- Pufferfish now gives Nausea I effect instead of Nausea II when consumed ([MCPE-98458](https://bugs.mojang.com/browse/MCPE-98458))
- Zoglins now play angry sounds when chasing the player or mobs ([MCPE-95523](https://bugs.mojang.com/browse/MCPE-95523))
- Bees now start taking drowning damage after one second when underwater ([MCPE-114688](https://bugs.mojang.com/browse/MCPE-114688))
- Mounts and vehicles are no longer given a slight velocity during a dismount

## **Blocks**

- Fixed a bug that caused Crafter to be audible from more than five blocks distance
- Fixed some Trial Spawner texture inconsistencies ([MCPE-181455](https://bugs.mojang.com/browse/MCPE-181455))
- Slabs and Stairs should no longer randomly start placing on the bottom when continuously building ([MCPE-54855](https://bugs.mojang.com/browse/MCPE-54855))
- Particles generated when breaking Leaves will now match the color of the destroyed leaves ([MCPE-179726](https://bugs.mojang.com/browse/MCPE-179726))
- Mirrored the back side of Skull, Guster, and Flow Banner textures ([MCPE-179894](https://bugs.mojang.com/browse/MCPE-179894))
- Fixed an issue with the Quartz Slab's texture ([MCPE-182604](https://bugs.mojang.com/browse/MCPE-182604))
- Restored the back-side texture of the Sunflower to be leafy green ([MCPE-181275](https://bugs.mojang.com/browse/MCPE-181275))
- Doors of different materials will now be able to form a double door
- The Heavy Core Block is now properly scaled in the inventory ([MCPE-179656](https://bugs.mojang.com/browse/MCPE-179656))
- The Heavy Core Block is now positioned correctly in Item Frames ([MCPE-181155](https://bugs.mojang.com/browse/MCPE-181155))
- The Bell Block no longer rings twice when hit with a Wind Charge Projectile
- The Scaffolding block no longer flickers when moving at far distances ([MCPE-120910](https://bugs.mojang.com/browse/MCPE-120910))
- Copper Doors now follow the intended design of only dropping when mined with a Stone Pickaxe or better
- Doors no longer drop when top block is mined in Creative mode
- Smooth Quartz Slab’s texture is back to normal ([MCPE-182104](https://bugs.mojang.com/browse/MCPE-182104))
- Crafting with Oxidized Cut Copper in Stonecutter now yields two slabs instead of one ([MCPE-136077](https://bugs.mojang.com/browse/MCPE-136077))
- Crafting Quartz Bricks from Blocks of Quartz now yield 4 Quartz Bricks instead of 1 ([MCPE-69281](https://bugs.mojang.com/browse/MCPE-69281))
- Naturally spawned Mushroom stems no longer drop Mushrooms when mined ([MCPE-71123](https://bugs.mojang.com/browse/MCPE-71123))
- The chance of dropping Mushrooms (max of 2) from Brown and Red Mushroom Block was increased to match Java Edition, from 10% per Mushroom to 11.11%
- A damaged Anvil block may now spawn in Trail Ruins, as it would in Java Edition
- Trapdoors and Fence Gates no longer push players or mobs when activated by Redstone
- Fixed double-plant blocks breaking in worlds of older versions ([MCPE-183072](https://bugs.mojang.com/browse/MCPE-183072))

## **Wind Charge**

- The Wind Charge Projectile can now be summoned via the /summon command ([MCPE-178937](https://bugs.mojang.com/browse/MCPE-178937))
- Using Trident with Riptide enchantment now correctly cancels fall damage reduction from Wind Charge
- Fixed a bug where the fall damage protection from a Wind Charge incorrectly prevented fall damage when landing a second time
- Wind Charges thrown by players no longer have a chance of dealing more than 1 damage per hit
- The Wind Charge model now correctly renders within its bounding box
- Increased player-fired wind charge speed by 50%, bringing it into parity with Java Edition
- The Wind Charge Projectile shot by the Breeze no longer toggles blocks when Mob Griefing is disabled in Settings ([MCPE-181211](https://bugs.mojang.com/browse/MCPE-181211))
- Mounted entities are no longer immune to Wind Charge projectile damage
- Wind charges now work the same on all terrain
- Crouching no longer affects wind charge knockback / jump amount
- Wind charges used by the player aimed straight down now knock the player upward ~6 blocks instead of ~2.5
- Latency related fall damage when using a Wind Charge will occur less often
- The launch position of the Wind Charge has been adjusted so it no longer fires too far from the player

## **Items**

- Using Trident with Riptide enchantment now correctly cancels fall damage reduction from Wind Charge
- Breeze Rods now render correctly in third-person view ([MCPE-179661](https://bugs.mojang.com/browse/MCPE-179661))
- The Mace no longer breaks Cobwebs and Bamboo as fast as Swords and other sharp items ([MCPE-179754](https://bugs.mojang.com/browse/MCPE-179754))
- The Fishing Rod hook no longer sticks to actors that have the Projectile Reflection component ([MCPE-180337](https://bugs.mojang.com/browse/MCPE-180337))
- The Mace's Smash Attack no longer knocks back Mobs that have been tamed by the Player wielding the Mace ([MCPE-180962](https://bugs.mojang.com/browse/MCPE-180962))
- Attacking an entity with a Mace enchanted with the Wind Burst enchantment no longer negates fall damage ([MCPE-181496](https://bugs.mojang.com/browse/MCPE-181496))
- Locator Maps will now only render head and head attachments ([MCPE-61891](https://bugs.mojang.com/browse/MCPE-61891))
- Leads now attach to the front of Boats, instead of to their center ([MCPE-182145](https://bugs.mojang.com/browse/MCPE-182145))
- Fixed flickering item icon when quick moving a stack to non-empty stacks
- Added rarity coloring in the tooltips of Creeper Charge, Skull Charge, Thing, Snout, Flow, and Guster Banner Patterns
- The rarity color of Trident, Mace, and Heavy Core have been changed to the Epic color (magenta)
- Banners are once again obtainable via the recipe book ([MCPE-179650](https://bugs.mojang.com/browse/MCPE-179650))
- Fixed Wolf Armor breaking not emitting enough Scute particles ([MCPE-179664](https://bugs.mojang.com/browse/MCPE-179664))
- Fixed Torch item icon being temporarily misplaced when transferring it between the inventory and the hotbar when quick-moved ([MCPE-180913](https://bugs.mojang.com/browse/MCPE-180913))
- Fixed an issue where structure icons or other Map decorations were not visible at Map edges on Maps with unlimited tracking, such as Trial Explorer Maps ([MCPE-182681](https://bugs.mojang.com/browse/MCPE-182681))

## **Music / Sound**

- "Echo in the Wind" now plays in Lush Caves biome ([MCPE-182278](https://bugs.mojang.com/browse/MCPE-182278))
- "5", "Otherside", "Relic", "Creator", "Creator (Music Box)" & "Precipice" are now assigned to the Jukebox / Noteblock slider ([MCPE-169933](https://bugs.mojang.com/browse/MCPE-169933))
- The Rooted Dirt block now has unique sounds, to better match the Java Edition ([MCPE-121664](https://bugs.mojang.com/browse/MCPE-121664))
- Copper Door's "open" sound is now pitched differently
- Copper Grate step sounds play at a lower volume
- Trial Spawner break and place sounds are now pitched differently
- Vault break and place sounds are now pitched differently
- Break, place and hit sounds now pitch differently for Tuff, Tuff Bricks, and Polished Tuff Blocks
- Crafter craft and fail sounds now have a random pitch offset
- Crafter fail sound now has a max distance of 3 blocks instead of 5
- Copper Bulb break, place and hit sounds are now pitched differently
- Copper Grate break, place and hit sounds are now pitched differently
- "light_block_0" and its derivatives now have their block sound defined ([MCPE-183449](https://bugs.mojang.com/browse/MCPE-183449))
- Added a sound effect to help players understand that they have already looted a Vault
- Added break, fall, hit, jump, land, place, and step sounds for the Mob Spawner block

## **Realms Invite Links**

We are making some changes to how Realms invite links work to make it easier than ever to invite your friends and to keep your Realm safe from unwanted joiners:

- You can now create up to 5 invite links per Realm
- Invite links can be enabled or disabled at will, or set to have an expiration date in the future
- Invite links can be deleted entirely
- Newly created invite links codes will be 15 characters long (increased from 11)
- All new Realms will not have an invite link created for them by default. Realm owners will need to manually create an invite link for their Realm
- Existing links that have not been used will be deleted, while previously used links will not be deleted

## **Realms**

- Fixed an issue that was preventing RealismCraft and some other packs from working on Realms. This was a service-side fix that went live prior to this release ([REALMS-11940](https://bugs.mojang.com/browse/REALMS-11940), [REALMS-11913](https://bugs.mojang.com/browse/REALMS-11913), [REALMS-11916](https://bugs.mojang.com/browse/REALMS-11916))
- Fixed a crash that could occur when viewing Realms Stories on a busy Realm
- All items on the Realms purchase screens are now focusable and can be navigated through using a gamepad input
- Removed an extra "the" in Realms section of Minecraft Encyclopedia
- Typing into the search box on the Realms Stories Members tab no longer overrides the filter options
- Added a new reporting flow that lets players add more context and information about why the report is being made
- New lines are no longer removed from Realms Stories posts that are displayed in the story feed
- Removed an unnecessary warning from 2 Player Realms subscription
- Cleaned up the disabled Realms Stories button interface on the pause screen when playing as a second user in split screen
- Fixed issues with the Realms button sticking around when it shouldn't or not showing up when it should
- Fixed a bug that locked players on an infinite loop after cancelling the process of joining a recently claimed preview Realm
- Fixed a bug where players with a freshly installed Minecraft needed to restart before being able to see Realms Stories
- Fix so that pressing "Join Realm" on the new Play screen does not lead into an empty void ([MCPE-183428](https://bugs.mojang.com/browse/MCPE-183428))
- Players are no longer kicked from the Realm if the owner enters and exits the Realms Settings screen without modifying packs while multiple Add-Ons are applied
- Navigating away from the Realms Stories Story Feed tab upon reading the first page of stories will remove the unread stories badge as the user has seen the most recent posts
- Fixed a bug where brand new Realm Events wouldn't display properly the first time the Story Feed is opened
- Fixed a bug where items from certain Add-ons could appear without textures or names when joining Realms
- Fixed a bug that prevented two back-to-back error screens when the client was out of date and a Realm had a pending update
- Fixed a bug where the unread badge for the Realms Stories button on the Pause Screen did not update

## **Accessibility**

- Fixed an issue where Apple Pencil was not recognized as a valid input method ([MCPE-158895](https://bugs.mojang.com/browse/MCPE-158895))
- Fixed an issue where Screen Narration would not describe how to accept a game invitation on Android and iOS
- Text to speech now reads the how to play screens by hovering over, tapping on or navigating to the respective headers and paragraphs

## **Customizable Controls**

- Customized controls no longer revert after player stops flight ([MCPE-180234](https://bugs.mojang.com/browse/MCPE-180234))
- The control customization screen is now automatically exited when input mode is switched to something other than touch controls
- The paper doll can now be shown in the HUD when customizable controls is enabled ([MCPE-176334](https://bugs.mojang.com/browse/MCPE-176334))
- Customized control button sizes remain stable when going up or down Scaffolding or Ladders ([MCPE-178820](https://bugs.mojang.com/browse/MCPE-178820))
- Buttons can now slide completely to the right when customizing controls on iOS
- When customizing touch controls, the safe zones on the left and right side are now ignored

## **User Interface**

- Added animated title to the loading tips dialog
- Refreshed assets for Achievements screen: all achievements unlocked illustration, no achievement unlocked illustration, and the GamerScore icon
- Fixed a bug that caused half-absorption hearts not be rendered ([MCPE-181245](https://bugs.mojang.com/browse/MCPE-181245))
- The Water Breathing effect icon and timer no longer flicker while wearing the Turtle Helmet ([MCPE-142173](https://bugs.mojang.com/browse/MCPE-142173))
- Updated the Hide Paperdoll toggle to default to false on Chromebooks
- When Regeneration effect is active, hearts on the HUD no longer move too fast ([MCPE-180864](https://bugs.mojang.com/browse/MCPE-180864))
- Shift-clicking inventory items no longer causes the item stack count to briefly appear above the stack
- Interacting with a block outside of a players reach no longer causes the block interface to briefly appear
- Items no longer render in front of stack size number when being quick moved ([MCPE-180712](https://bugs.mojang.com/browse/MCPE-180712))
- Number on a stack of items no longer overlaps with item hover text in Villager's trade menu ([MCPE-181338](https://bugs.mojang.com/browse/MCPE-181338))
- Item no longer moves slightly in slot after being quick moved to Anvil ([MCPE-180275](https://bugs.mojang.com/browse/MCPE-180275))
- Items no longer stay selected on touch devices when switching between Creative inventory tabs ([MCPE-173506](https://bugs.mojang.com/browse/MCPE-173506))
- Items can now be removed from the off-hand slot and crafting grids by tapping on other items in Creative inventory on mobile devices ([MCPE-168757](https://bugs.mojang.com/browse/MCPE-168757))
- Fixed the Help button link in the Structure Block’s menu ([MCPE-179672](https://bugs.mojang.com/browse/MCPE-179672))
- The chat quick access history no longer stores duplicate chat entries
- Fixed an issue where content of the previously used text field was carried over to Signs on Xbox ([MCPE-182645](https://bugs.mojang.com/browse/MCPE-182645))
- Updated the Dressing Room category names for "Headwear", "Outerwear", and "Footwear"
- Safe Zone Screen position now saves properly on closing the menu
- Safe Zone Screen text no longer is obscured when you hover over it
- Safe Zone Screen sliders now properly save even when the value is changed by just 0.1
- Safe Zone Screen Position sliders now properly reset and rescale based on the Scale sliders
- Safe Zone Screen no longer errors on iOS when set to minimum values
- Fixed tags showing up vertically in Marketplace item descriptions
- Fixed missing texture in My Content section of Marketplace ([MCPE-181964](https://bugs.mojang.com/browse/MCPE-181964))
- Replaced Marketplace Pass gradient with solid gray to improve readability
- Fixed the message that appears when using the ‘Copy Coordinates’ feature to copy player coordinates to the clipboard ([MCPE-182146](https://bugs.mojang.com/browse/MCPE-182146))

## **Game Tips**

- Game tips now appear and disappear from the screen with “fade-in” and “fade-out” animations
- Added a swim tip for touch devices
- How to move is now taught to players on touch devices with the D-pad control scheme
- Sometimes it’s not a good time to learn new game play skills. For example, opening your inventory is not a relevant skill when you just discovered that the floor is lava. So here are some additional constraints for when game tips don’t show up:
  - Only the swim game tip shows up when you are in water
  - The break block tip is the most relevant tip when you're freezing in powder snow. Other tips won't show up
  - When there are hostile mobs nearby you can still learn skills that will help you run away (movement, jumping and camera movement). But other tips won’t bother you
- Added emote game tip. The tip appears when there are remote players close to the player and the player has spent at least 30 seconds with other players in the world
- Added chat game tip. The tip appears when there are remote players in a world or if cheats are enabled
  - If the chat game tip can be shown for a player, the open chat instructions posted in the chat are removed
- Added a game tip that informs players on touch devices that they are sneaking in order to avoid having new players stuck in crouch
- Added some minor tip interruption improvements for existing game tips\
  \

# **Technical Updates**

## **General**

- Removed the "Holiday Creator Features" experiment
  - Content that uses the experimental features may no longer function correctly
  - Please check out Custom Components which replicates most of the functionality: <https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents>
- Fixed an instance where input could stop working as expected when using Touch Controls and Custom Cameras
- Updated documentation for Feature Rules' schema
- Biome components "minecraft:forced_features" and "minecraft:ignore_automatic_features" are now deprecated
- “minecraft:scatter_feature” now has a “distribution” field like “minecraft:feature_rules” to define the scattering settings. Features now use schema version “1.21.10”
- Updated schema documentation for Filter Groups
- Modified *ItemUseInventoryTransaction*packet by adding *Trigger Type*. This new value tells us if the packet is sent from a direct player input or the simulation tick from the button being held down
- Using 'minecraft:wearable' with slot set to 'slot.weapon.offhand' in combination with 'minecraft:allow_off_hand' set to false will now cause a content error

## **Add-Ons and Script Engine**

- Added a content error when ‘snow_accumulation’ array in a biome JSON has the minimum value set higher than the maximum value
- Fixed Camera sometimes having a visible easing motion after a non-eased camera set command ([MCPE-181364](https://bugs.mojang.com/browse/MCPE-181364))
- Fixed an issue that caused sideloaded .mcpack files to fail to apply when uploading to Realms
- Deprecated Entity Permutations
  - Permutations can no longer be parsed and applied to entities via their JSON file under the flag permutations
- Deprecated Volume and /volumearea command
- Entity Aliases is deprecated when a format_version of 1.21.10 or higher is specified
- Fixed an issue where particle effect lifetime event timeline did not trigger events as expected
- Fixed a bug where having an Add-On applied to a dedicated server would force players to download all resource packs applied to that server in order to join. Note: If you downloaded unwanted packs as a result of this issue, you may have to delete them locally from your device to avoid having them apply when joining a world ([MCPE-180344](https://bugs.mojang.com/browse/MCPE-180344))
- Updated the "minecraft:geometry" block component to validate whether geometries fit within the 30/16 unit bounds and have at least 1/16 of their length within the unit cube on each axis. This validation occurs for all geometry components on all blocks using json version 1.21.0 or later ([MCPE-178607](https://bugs.mojang.com/browse/MCPE-178607))

## **API**

- Fixed a crash with *getTags*method on *Item Stack* when called on the Air Block Item
- Dimension
  - Released method *getTopmostBlock* from *beta* to *1.13.0*
  - Released interface *VectorXZ* from *beta* to *1.13.0*
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
- Released *beta* version of *addEffect* method on *Entity* to *1.3.0*, which adds a return type for the newly created effect (or undefined if no effect was added)
- BlockRecordPlayerComponent
- Added *UIManager* class and *uiManager* object to *@minecraft/server-ui* beta
  - Renamed the componentId to *minecraft:record_player* for consistency
  - Added methods *getRecord*, *ejectRecord*, *pauseRecord* and *playRecord*
  - Removed method *clearRecord*, instead you should now pass undefined to *setRecord* to reset it
  - Removed property *readonly getLifetimeState: EntityLifetimeState* from *beta*
- Removed enum *EntityLifetimeState* from *beta*
  - Move *setBlockPermutation(location: Vector3, permutation: BlockPermutation): void* from *beta* to *1.12.0*
  - Move *setBlockType(location: Vector3, blockType: BlockType \| string): void* from *beta* to *1.12.0*
  - Moved *getTags(): string\[\]* from *beta* to *1.12.0*
  - Moved *hasTag(tag: string): boolean* from *beta* to *1.12.0*
  - Removed property *readonly fallDistance: number* from *beta*
- Released WorldInitializeBeforeEvent from *beta* to *1.12.0*
- Released WorldInitializeBeforeEventSignal from *beta* to *1.12.0*
- Custom Components
  - Released ItemComponentRegistry from *beta* to *1.12.0*
  - Released ItemCustomComponent from *beta* to *1.12.0*
  - Released ItemComponentBeforeDurabilityDamageEvent from *beta* to *1.12.0*
  - Released ItemComponentCompleteUseEvent from *beta* to *1.12.0*
  - Released ItemComponentConsumeEvent from *beta* to *1.12.0*
  - Released ItemComponentHitEntityEvent from *beta* to *1.12.0*
  - Released ItemComponentMineBlockEvent from *beta* to *1.12.0*
  - Released ItemComponentUseEvent from *beta* to *1.12.0*
  - Released ItemComponentUseOnEvent from *beta* to *1.12.0*
- Moved EntityTameableComponent from *beta* to *1.12.0* with properties getTameItems, isTamed, probability, tamedToPlayer, tamedToPlayerId and function tame
- Moved *EntityAgeableComponent* from *beta* to *1.12.0* with properties *duration*, *growUp*, *transformToItem* and function *getDropItems*, *getFeedItems*, *EntityDefinitionFeedItem*, *Trigger*
- Fixed an issue where a warning would incorrectly appear when reloading item custom components
- EntityTameMountComponent
  - Moved method tameToPlayer and readonly properties tamedToPlayerId, tamedToPlayer, isTamed, isTamedToPlayer from *beta* to *1.12.0*
- Released runJob method on System from *beta* to *1.12.0*
- Released clearJob method on System from *beta* to *1.12.0*
- Released waitTicks method on System from *beta* to *1.12.0*
- @minecraft/server-ui
  - Released version *1.2.0*
  - Added new *beta* version *1.3.0*
  - Released submitButton method on ModalFormData from *beta* to *1.2.0*
- EntityLeashableComponent
  - Moved class *EntityLeashableComponent* from *beta* to *1.13.0*

## **Blocks**

- Fixed a bug where interacting, while sneaking, with Command, Jigsaw, and Structure blocks could cause the UI to open/close multiple times
- Top Snow/snow_layer block now falls when placed using the /setblock command
- "double_stone_block_slab" block is now split into unique instances "smooth_stone_double_slab", "sandstone_double_slab", "oak_double_slab", "cobblestone_double_slab", "brick_double_slab", "stone_brick_double_slab", "quartz_double_slab", and "nether_brick_double_slab"
  - The id "oak_double_slab" had already been split from "double_wooden_slab", as a result, any "double_stone_block_slab:2" will be turned into the already existing "oak_double_slab" id
- "monster_egg" block is now split into unique instances: "infested_stone", "infested_cobblestone", "infested_stone_bricks", "infested_mossy_stone_bricks", "infested_cracked_stone_bricks", and "infested_chiseled_stone_bricks"
- "infested_cobblestone" block destroy time has been changed to match Java Edition
- "stonebrick" block is now split into unique instances: "stone_bricks", "mossy_stone_bricks", "cracked_stone_bricks", and "chiseled_stone_bricks"
- "Smooth Stone Bricks" block can no longer be obtained through commands and existing "Smooth Stone Bricks" will be converted to "Stone Bricks"
- "stone_block_slab3" block is now split into unique instances "end_stone_brick_slab", "smooth_red_sandstone_slab", "polished_andesite_slab", "andesite_slab", "diorite_slab", "polished_diorite_slab", "granite_slab" and "polished_granite_slab"
- "prismarine_slab", "dark_prismarine_slab", "prismarine_brick_slab", "andesite_slab", "polished_andesite_slab", "diorite_slab", "polished_diorite_slab", "granite_slab" and "polished_granite_slab" now have a destruction time of 1.5
- "end_stone_brick_slab" now has a destruction time of 3.0
- "stone_block_slab2" block is now split into unique instances "red_sandstone_slab", "purpur_slab", "prismarine_slab", "dark_prismarine_slab", "prismarine_brick_slab", "mossy_cobblestone_slab", "smooth_sandstone_slab", and "red_nether_brick_slab"
- The "blocks.json" files found in resource packs are now versioned
  - Overriding the block "stone" with a format_version of 1.20.50 or higher will assume the texture data in terrain_texture.json is flattened and not using an array
  - Overriding the block "prismarine" with a format_version of 1.21.10 or higher will assume the texture data in terrain_texture.json is flattened and not using an array
  - Overriding the block "anvil", "quartz_block", "red_sandstone", "sand" and "sandstone" with a format_version of 1.21.20 or higher will assume the texture data in terrain_texture.json is flattened and not using an array
- "infested_stone" and its derivatives now have their block sound defined ([MCPE-182290](https://bugs.mojang.com/browse/MCPE-182290))
- Texture overrides that intended to target all block variants no longer only override the default variant
- "light_block" block is now split into unique instances: "light_block_0", "light_block_1", "light_block_2", "light_block_3", "light_block_4", "light_block_5", "light_block_6", "light_block_7", "light_block_8", "light_block_9", "light_block_10", "light_block_11", "light_block_12", "light_block_13", "light_block_14", and "light_block_15"
- "coral_fan_hang" block is now split into unique instances "tube_coral_wall_fan", "brain_coral_wall_fan", "dead_tube_coral_wall_fan", and "dead_brain_coral_wall_fan"
- "coral_fan_hang2" block is now split into unique instances "bubble_coral_wall_fan", "fire_coral_wall_fan", "dead_bubble_coral_wall_fan", and "dead_fire_coral_wall_fan"
- "coral_fan_hang3" block is now split into unique instances "horn_coral_wall_fan" and "dead_horn_coral_wall_fan"
- "stone_block_slab4" block is now split into unique instances "mossy_stone_brick_slab", "smooth_quartz_slab", "normal_stone_slab", "cut_sandstone_slab" and "cut_red_sandstone_slab"
- "mossy_stone_brick_slab" now has a destruction time of 1.5
- The "minecraft:yellow_flower" block has been renamed to "minecraft:dandelion"
  - The old name is still understood from commands and data
- "sandstone" block is now split into unique instances "sandstone", "chiseled_sandstone", "cut_sandstone", and "smooth_sandstone"
  - "smooth_sandstone" destroy time changed from 0.8 to 2.0, and explosion resistance from 0.8 to 6.0
- “double_stone_block_slab2” block is now split into unique instances “red_sandstone_double_slab”, “purpur_double_slab”, “prismarine_double_slab”, “dark_prismarine_double_slab”, “prismarine_brick_double_slab”, “mossy_cobblestone_double_slab”, “smooth_sandstone_double_slab” and “red_nether_brick_double_slab”
- “prismarine_double_slab”, “dark_prismarine_double_slab” and “prismarine_brick_double_slab” now have a destruction time of 1.5
- Fixed Ancient City entrance using a single Deepslate tile slab instead of a double slab
- “double_stone_block_slab3” block is now split into unique instances “end_stone_brick_double_slab”, “smooth_red_sandstone_double_slab”, “polished_andesite_double_slab”, “andesite_double_slab”, “diorite_double_slab”, “polished_diorite_double_slab”, “granite_double_slab”, and “polished_granite_double_slab”
- “end_stone_brick_double_slab” now has a destruction time of 3.0
- “andesite_double_slab”, “polished_andesite_double_slab”, “diorite_double_slab”, “polished_diorite_double_slab”, “granite_double_slab”, and “polished_granite_double_slab” now have a destruction time of 1.5
- “double_stone_block_slab4” block is now split into unique instances “mossy_stone_brick_double_slab”, “smooth_quartz_double_slab”, “normal_stone_double_slab”, “cut_sandstone_double_slab”, and “cut_red_sandstone_double_slab”
- “mossy_stone_brick_double_slab” now has a destruction time of 1.5
- “prismarine” block is now split into unique instances “prismarine”, “dark_prismarine”, and “prismarine_bricks”
- Added VanillaBlockTag "one_way_collidable" that can be used to emulate the one way collision of Doors, Trapdoors, and Fence Gates that don't push out a mob when inside their collision box
- "anvil" block is now split into unique instances: "anvil", "chipped_anvil", "damaged_anvil", and "deprecated_anvil"
- "quartz_block" is now split into unique instances "quartz_block", "chiseled_quartz_block", "quartz_pillar", and "smooth_quartz"
- Smooth Quartz has had its destroy-time adjusted to match Java Edition ([MCPE-101893](https://bugs.mojang.com/browse/MCPE-101893))
- Pillar Quartz Block has been renamed to Quartz Pillar
- "red_sandstone" block is now split into unique instances "red_sandstone", "chiseled_red_sandstone", "cut_red_sandstone", and "smooth_red_sandstone"
  - "smooth_red_sandstone" destroy time changed from 0.8 to 2.0
- "dirt" block is now split into unique instances: "dirt" and "coarse_dirt"
- "sand" block is now split into unique instances "sand" and "red_sand"
- *minecraft:custom_components* no longer requires the Beta APIs experiment
- *minecraft:entity_fall_on* no longer requires the Beta APIs experiment
- *minecraft:tick* no longer requires the Beta APIs experiment
- Fixed a recipe bug where "chiseled_sandstone" and "cut_sandstone" sandstone variants could be used in a furnace to craft "smooth_sandstone". It can now only accept normal "sandstone" and no other types of sandstone
- Fixed Vanilla recipes involving "red_sandstone_slab" as an ingredient or result item, they would incorrectly use "red_sandstone" instead
  - "red_sandstone_slab" can now be crafted again with 3 horizontal "red_sandstone:0"
  - "red_sandstone_slab" can now be crafted again with 3 horizontal "red_sandstone:1"
  - "red_sandstone:1" can now be crafted again with 2 vertical "red_sandstone_slab"

## **Camera**

- Two new 3rd person camera experiments are now available!
- Added the 'Creator Cameras: New Third Person Presets' experimental toggle which contains:
  - New 'minecraft:follow_orbit' preset that is accessible by the /camera command and can have a view offset
- Added the Creator Cameras: Focus Target Camera experiment. This functionality can be applied to the free camera preset
  - A new free camera command that pivots the camera to track a target entity
    - Includes option to add an offset from the center of the entity
    - Includes option to remove the target
- Added the view offset to the 3<sup>rd</sup> person camera for the experimental *follow_orbit* preset
  - The view offset is anchored to a pivot point at the center of the screen. When applied to the follow_orbit preset, the player is shifted to be at a distance from center specified by the the offset
  - The range for this offset is -100 to 100
  - This can be set by both commands and JSON
    - /camera @s set minecraft:follow_orbit view_offset viewX viewY
  - A new learning portal article detailing the 3<sup>rd</sup> person camera, including JSON syntax, will be published soon
- Added starting radius and rotation to the *follow_orbit* and 3<sup>rd</sup> person boom camera presets
  - The starting radius (distance from player) is fixed right now at 10 blocks from the player position
  - The starting rotation (pitch and yaw) are fixed right now at 45X and 45Y
  - The follow orbit camera is the only preset available, the 3<sup>rd</sup> person boom preset will be coming in a future release
- Exposed radius component to behavior packs to be overwritten by creator cameras. Also added ‘minecraft:third_person’ and ‘minecraft:third_person_front’ to the allow list of presets that can be inherited from
  - This allows you to make a 3<sup>rd</sup> person camera based on the vanilla 3<sup>rd</sup> person cameras but with a variable radius.\
    The radius (distance from player) is not limited but render distance and other constraints still exist.
  - This does ***not*** allow modifications to the vanilla cameras

## **Commands**

- Music will no longer be stopped by the '/stopsound' command
- Fixed a bug where the /spreadplayers command could result in the target being teleported one block below the intended location
- Added a Max Height parameter to the /spreadplayers command, which allows you to specify a maximum height that the spreading is done underneath
- The /locate structure command now uses namespaced structure names. Structure names provided without a namespace will assume the “minecraft” namespace ([MCPE-151807](https://bugs.mojang.com/browse/MCPE-151807))

## **Entities**

- Improved "behavior.follow_owner" teleportation logic:
  - Entities now seamlessly resume navigation after teleporting to their owner
  - Added the "post_teleport_distance" field, allowing to specify how far from its owner an entity will be placed after teleporting
    - If no value is specified, "stop_distance" increased by one will be used
  - These changes only affect entities with format version of 1.21.20 or above
- Armor equipped to the second slot of "minecraft:equippable" is now applied to "slot.armor.body" instead of "slot.armor.torso"
  - To retrieve information about it, "query.armor_texture_slot", "query.armor_color_slot" and "query.armor_damage_slot" should now be used with a value of 4
  - This change only affects entities with a format version equal to or greater than *1.21.10*
- Added a wind_burst_on_hit subcomponent for Projectiles which creates a wind burst upon collision with an entity or block before being removed from the world
- Wind Charges no longer burst when removed by command
- Exposed "minecraft:behavior.swim_up_for_breath" AI goal component, which allows a mob to try to move to a location where it can breathe air once it is close to running out of its breathable supply
  - In Vanilla, this is used by the Dolphin
  - Any custom content built off of the Vanilla dolphin at or above version 1.21.20 will need to manually add this component to enable this AI behavior
- Added the "behavior.teleport_to_owner" goal, which allows an entity to teleport to its owner
  - This goal is designed for emergency situations where "behavior.follow_owner" could be too slow or too low priority
  - The "filters" field allows defining the conditions for teleportation using entity filters
  - The "cooldown" field allows defining how often the entity should attempt to teleport
- *minecraft:behavior.move_away_from_target* has been renamed to *minecraft:behavior.move_around_target* to better describe what the goal does, since it can be used both for moving away from the target, but also to move towards a random position around the target
- Added new entity filter "owner_distance", which checks the distance of an entity from its owner

## **Graphical**

- Particle Emitters that use the "minecraft:particle_appearance_lighting" component now use the correct light level instead of the world's origin light level
- 2 Channel textures in resource packs are now properly supported. When loaded they will always use the first channel to represent all three color channels and the second channel for alpha (I.E A normal texture would be *(R, G, B, A)*where a 2 channel texture will always be treated as *(R, R, R, A)*)
- Fixed fog JSON validation to allow for *max_density_height* and *zero_density_height* values to range from (-64,320)

## **Items**

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
- Released minecraft:custom_components item component out of experimental in json formats 1.21.10 and higher
- Introduced “slot.armor.body” as an extra armor slot for entities, like horses, limited to a single armor item but needing the effects of a full armor set
- Introduced the “minecraft:damage_absorption” item component, enabling items to absorb damage intended for their wearer
  - The “absorbable_causes” field allows to specify which damage causes to absorb
  - Absorbed damage depletes the item’s durability, and surplus damage is ignored
  - Requires equipping the item in an armor slot for damage to be absorbed
  - When multiple damage absorbing items are equipped, a suitable one is selected at random to absorb incoming damage
- Introduced the “minecraft:durability_sensor” item component, enabling items to emit sounds and particles when damage causes them to lose durability
  - The “durability_thresholds” field allows to define a list of both durability thresholds and the effects to emit when they are met
  - When the item receives enough damage to meet multiple thresholds at the same time, only the one corresponding to the lowest durability is considered
- Learning portal documents on these features and how to use them are being written and will be available soon

## **Molang**

- Released *state_time* which no longer requires the 'Upcoming Creator Features' toggle
- Fixed Molang content errors to include the expression in the logged message

## **Petrified Oak Slab**

- The Oak-Slab-looking variation of "stone_block_slab" (aux value 2) is now flattened into its own new block "minecraft:petrified_oak_slab" ([MCPE-180964](https://bugs.mojang.com/browse/MCPE-180964))
  - Will behave like other Stone Slabs, eg. cannot be destroyed by fire, but will look like an ordinary oak slab
  - "minecraft:petrified_oak_slab" can only be obtained and placed through commands
- The Oak-Slab-looking variation of "double_stone_block_slab" (aux value 2) is now flattened into its own new block "minecraft:petrified_oak_double_slab" ([MCPE-180964](https://bugs.mojang.com/browse/MCPE-180964))
  - Will behave like other stone double slabs, eg. cannot be destroyed by fire, but will look like an ordinary oak double slab
  - "minecraft:petrified_oak_double_slab" can only be placed through commands

## **Structure Block**

- Fixed issue where player ID was not being saved on structure blocks when saving and exiting the level ([MCPE-149183](https://bugs.mojang.com/browse/MCPE-149183))
- From versions 1.21.20, the player ID given to tamed mobs loaded from a Structure Block will always be the original owner's ID\
  \

# **Experimental Technical Updates**

## **API**

- Camera
  - Added \`CameraFixedBoomOptions\` to the options for the \`setCamera\` function in *beta*
  - CameraFixedBoomOptions
    - New interface added to *beta*
    - Allows you to customize \`minecraft:follow_orbit\` cameras only when the third person camera presets toggle is enabled
    - Introduced \`viewOffset?: Vector2\`. This property allows you to change the offset of the camera relative to the player to create an over the shoulder effect
  - *WorldInitializeBeforeEvent*
    - Renamed property *blockTypeRegistry* to *blockComponentRegistry*
  - Moved *BlockComponentRegistry* from *beta* to *1.12.0*
  - Moved *BlockCustomComponentAlreadyRegisteredError* from *beta* to *1.12.0*
  - Moved *BlockCustomComponentReloadVersionError* from *beta* to *1.12.0*
  - Moved *BlockCustomComponentReloadNewEventError* from *beta* to *1.12.0*
  - Moved *BlockCustomComponentReloadNewComponentError* from *beta* to *1.12.0*
  - Moved *BlockCustomComponent* from *beta* to *1.12.0*
  - Moved *BlockComponentStepOnEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentTickEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentRandomTickEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentEntityFallOnEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentStepOffEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentPlayerInteractEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentPlayerPlaceBeforeEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentPlayerDestroyEvent* from *beta* to *1.12.0*
  - Moved *BlockComponentOnPlaceEvent* from *beta* to *1.12.0*
  - Added four new error class types used for custom block component registration
    - *ScriptBlockCustomComponentAlreadyRegisteredError* - When registering a custom block component and it has already been registered
    - *ScriptBlockCustomComponentReloadVersionError* - When registering a custom block component with a different script version between reloading
    - *ScriptBlockCustomComponentReloadNewEventError* - When registering a custom block component and it implements a new event between reloading
    - *ScriptBlockCustomComponentReloadNewComponentError* - When registering a custom block component between reloading
  - Added *Block::getMapColor* binding to Script Block API (Beta)
  - EntityBreathableComponent
    - Changed function *setAirSupply(value: number): void* to property *airSupply: number* in *beta*
    - Added property *readonly canBreathe: boolean* to *beta*
  - EntityComponent
    - Moved class *EntityMovementComponent* from *beta* to *1.12.0*
    - Moved class *EntityLavaMovementComponent* from *beta* to *1.12.0*
    - Moved class *EntityMovementGlideComponent* from *beta* to *1.12.0*
    - Moved class *EntityMovementSwayComponent* from *beta* to *1.12.0*
    - Moved class *EntityUnderwaterMovementComponent* from *beta* to *1.12.0*
  - Added class *PlayerCursorInventoryComponent* which adds read-only access to the players cursor inventory and the ability to clear it
  - Added playerEmote which fires after a player uses an emote
  - Block Custom Components
    - Use of the ‘onTick’ event requires the block has the ‘minecraft:tick’ component to configure how the block ticks
    - Blocks that are world generated, and have the ‘minecraft:tick’ component, will now tick
  - EntityBreathableComponent
    - Changed function *setAirSupply(value: number): void* to property *airSupply: number* in *beta*
    - Added property *readonly canBreathe: boolean* to *beta*
  - Added *isHardcore* to *1.14.0 beta*

## **Blocks**

- Added "item_display_transforms" control to the block geometry file. This controls the way a block is visually represented in the UI, on the player, and floating on the ground. It exists inside minecraft:geometry, and requires format_version 1.21.20
  - Default values example:
    - "item_display_transforms": {\
      "gui" : {\
                      "translation": \[0, 0, 0\],\
                      "rotation": \[30, 225, 0\],\
                      "scale": \[0.625, 0.625, 0.625\]\
        },\
        "firstperson_righthand": {\
                      "translation": \[0, 0, 0\],\
                      "rotation": \[0, 45, 0\],\
                      "scale": \[0.4, 0.4, 0.4\]\
        },\
        "firstperson_lefthand": {\
          "translation": \[0, 0, 0\],\
          "rotation": \[0, -135, 0\],\
          "scale": \[0.4, 0.4, 0.4\]\
        },\
        "thirdperson_righthand": {\
          "translation": \[0, 2.5, 0\],\
          "rotation": \[75, 45, 0\],\
          "scale": \[0.375, 0.375, 0.375\]\
        },\
        "thirdperson_lefthand": {\
          "translation": \[0, 2.5, 0\],\
          "rotation": \[75, 45, 0\],\
          "scale": \[0.375, 0.375, 0.375\]\
        },\
        "ground": {\
          "translation": \[0, 3.0, 0\],\
          "rotation": \[0, 0, 0\],\
          "scale": \[0.25, 0.25, 0.25\]\
        },\
        "fixed": {\
          "translation": \[0, 0, 0\],\
          "rotation": \[0, 0, 0\],\
          "scale": \[0.5, 0.5, 0.5\]\
        },\
        "head": {\
          "translation": \[0, 0, 0\],\
          "rotation": \[0, 0, 0\],\
          "scale": \[1, 1, 1\]\
        }\
      }

## **Entity Components**

- EntityLeashableComponent
  - Added property *canBeStolen: boolean*
  - Added property *hardDistance: number*
  - Added property *leashHolder: Entity*
  - Added property *leashHolderEntityId: string*
  - Added property *maxDistance: number*
  - Added property *isLeashed: boolean*
  - Renamed function *leash(leashHolder: Entity): void* to *leashTo(leashHolder: Entity): void*
