---
title: Minecraft Java Edition - Snapshot 25w44a
date: 2025-10-28T15:15:36Z
updated: 2025-10-28T15:57:10Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/40682495010061-Minecraft-Java-Edition-Snapshot-25w44a
hash:
  h_01K8NP8EMZ6CPK0FNP3VH1TQGD: new-features
  h_01K8NP8EMZGGM60272EEEYTDAD: parched
  h_01K8NP8EMZTXGY1BMJY43F0ZXV: camel-husk
  h_01K8NP8EMZZWG1DESK2EN2AKYH: spear-weapon
  h_01K8NP8EMZ0SSW0QRY3F872PP2: lunge-enchantment
  h_01K8NP8EMZSW8Y03WNVKBEKSKC: anisotropic-filtering
  h_01K8NP8EMZMH1T9C5D7N19CAJY: changes
  h_01K8NP8EMZSK73751NNRD5BR36: ui
  h_01K8NP8EMZHBN9E4TEW27RW017: technical-changes
  h_01K8NP8EMZJNAKHAHCF987PTJ0: minecraft-server-management-protocol-version-200
  h_01K8NP8EMZ4WZ4JSEMSHN8K9AT: commands
  h_01K8NP8EMZZ70A49XS2FDPJK26: changedworldborder
  h_01K8NP8EMZW6G39945C3ZWFYDT: game-rules
  h_01K8NP8EMZXY0XTKPBTMMWS2X8: limits
  h_01K8NP8EMZ3R7KNAT3H2KGKP5X: addedminecraftfire_spread_radius_around_player
  h_01K8NP8EMZZ9Q2SQNQVPPRNV0X: game-tests
  h_01K8NP8EMZM401AEJA4D1EJHJC: environment-attributes
  h_01K8NP8EMZR9TFTXRSHBTJ94KR: modifiers-on-argb-color-values
  h_01K8NP8EMZV8GTHY498T2JV6PC: changed-environment-attributes
  h_01K8NP8EMZSYQY9GHV34QWBE2N: addedminecraftvisualwater_fog_start_distance
  h_01K8NP8EMZPNBX7FV6DEC1BVBB: addedminecraftvisualfog_start_distance
  h_01K8NP8EMZMJ3AHTT7DFSGYYHC: addedminecraftvisualfog_end_distance
  h_01K8NP8EMZNJRYSF0NCNA66RSM: addedminecraftvisualsky_fog_end_distance
  h_01K8NP8EMZ61SHY7RN5VBCAX68: addedminecraftvisualcloud_fog_end_distance
  h_01K8NP8EMZS5Z8FC3CN0SJZ576: addedminecraftvisualcloud_color
  h_01K8NP8EMZM7WJRKJ4W70SG2DP: slot-sources
  h_01K8NP8EMZDVBSXH234S38BKZ2: minecraftemptytype
  h_01K8NP8EMZNYMAAMHJ04C4EXQK: minecraftgrouptype
  h_01K8NP8EMZ0ZQ4179ETHGPPRNW: minecraftslot_rangetype
  h_01K8NP8EMZ6KX5Q0CDR1GP5B1T: minecraftcontentstype
  h_01K8NP8EMZKFZA2JWR0CBFX3QS: minecraftfilteredtype
  h_01K8NP8EMZVD74PVCF3S52W70T: minecraftlimit_slotstype
  h_01K8NP8EMZSQFRD3HYY609ZEWB: loot-tables
  h_01K8NP8EMZF43XM6Q1DGBZWM39: world-generation
  h_01K8NP8EMZT7H5717G7YARRTSY: biomes
  h_01K8NP8EMZ83WDVV77AH19NVKJ: tags
  h_01K8NP8EMZH4PNKKFC9W1D01K8: item-tags
  h_01K8NP8EMZ29R0FQHB2VTK6Z7C: entity-tags
  h_01K8NP8EMZ1YN8CM4YHN29HN5D: resource-pack-version-720
  h_01K8NP8EMZ532DM97CV95XNG8F: textures
  h_01K8NP8EMZ3N78CX8KAF1FJ1WC: item-sprites
  h_01K8NP8EMZ8P8Z886BZE00QHR1: entity-textures
  h_01K8NP8EMZ5X40RXS6K5G1CNMA: sounds
  h_01K8NP8EMZPNCG6CE7Q6B45HS5: shaders--post-process-effects
  h_01K8NP8EMZFM8ES6TCM31BV2XF: sprite-animations
  h_01K8NP8EN0XKS0PYK7RFNJNDY2: fixed-bugs-in-25w44a
  h_01K8NP8EN17FPV7WW8RX735E6H: get-the-snapshot
---

With today's thrilling new Snapshot, we're bringing more mounts – and more mayhem! Meet the camel husk, an undead passive mob that thrives in the desert, and come face to face with its hostile riders! Ridden by a husk, the camel husk also spawns with a second challenger on board: a desert-dwelling skeleton called the parched!

Bundled with these new threats are further changes to the spear's lunge enchantment (it's less hungry now!), and we've given horses, mules, donkeys and camels the gift of being able to float in water while ridden, where before they would sink.

As usual, this release also brings a slew of bug fixes and technical updates, including renaming game rules to make them more descriptive.

Happy mining!

## New Features

- Updated advancements to include the Camel Husk, and the Parched
- Added a new graphical option "Anisotropic Filtering"

### Parched

- New Skeleton variant
- Spawns at 0 light level in Deserts replacing some of the regular Skeletons
- Does not burn in sunlight
- Shoots Arrows of Weakness
- Has a slower rate of fire compared to normal Skeletons, similar to Bogged
- Does not spawn in caves, following the Husk's spawning rules

### Camel Husk

- New undead Camel variant
- Spawns at 0 light level in Deserts
- Does not burn in sunlight
- Spawns with two riders: A Husk wielding a Spear and a Parched
- Does not spawn in caves, following the Husk's spawning rules
- Is hostile if the rider is a hostile mob
- Passive without a rider
- Despawns like other hostile mobs, but becomes persistent when ridden by a Player
- Favorite food is Rabbit Foot
- Cannot be bred
- As a mount they work similar to normal Camels

### Spear Weapon

#### Lunge Enchantment

- Reduced the number of hunger points consumed by using Lunge across all Enchantment levels
  - Level 1 Lunge now consumes 1 hunger point, level 2 consumes 2 points, and level 3 consumes 3 points (from 4, 5, and 6)
- Added a durability cost of 1 for using Lunge across all Enchantment levels

### Anisotropic Filtering

- This new option improves the visual quality of blocks when viewed at a distance or at an angle
- The default depends on your graphics preset, and the values are "off", "2x", "4x", and "8x"
- If your hardware does not support it, it will not be used
- This significantly impacts video memory usage (especially combined with a high mipmap count)

## Changes

- Parrots now can mimic the sounds of Zombie Nautilus, Zombie Horse, Camel Husk and Parched
- Nautiluses and Zombie Nautiluses can now attack any mob if provoked by that mob, not just players
- Environmental Fog in the Nether is no longer dependent on the render distance setting, and will consistently be applied from 10 to 96 blocks
- Horses, Mules, Donkeys, and Camels no longer sink in water while ridden by a player
- Chunks now fade in instead of appearing out of nowhere, with the fade-in time adjustable through Video Settings
- Bats no longer spawn more frequently and in higher light levels between October 20 and November 3

### UI

- "Interface" inside the Video Settings screen has been renamed to "Preferences"
- The Single Biome Customization screen now has a search box
- The language selection screen now has a search box to filter languages

## Technical Changes

- The Data Pack version is now 92.0
- The Resource Pack version is now 72.0
- The Minecraft Server Management Protocol version is now 2.0.0
- Added support for KQueue on OSX to improve network connection performance

### Minecraft Server Management Protocol Version 2.0.0

- In the typed_game_rule and untyped_game_rule schemas, the type of the value field has been changed from string to take either a boolean or an integer
  - Also, it now uses the game rule resource location as the key

### Commands

#### Changed worldborder

- The time argument for setting the size can now also specify seconds or in-game days using an s or d suffix
- The time argument for setting the warning distance now specifies ticks by default but can also specify seconds or in-game days using an s or d suffix

### Game Rules

Game rules have been moved into a registry. With that, all game rules have been renamed from their previous camel case names to resource locations in snake case.

Additionally, the following game rules have been further renamed:

- announceAdvancements -\> minecraft:show_advancement_messages
- commandBlocksEnabled -\> minecraft:command_blocks_work
- command_modification_block_limit -\> minecraft:max_block_modifications
- disableElytraMovementCheck -\> minecraft:elytra_movement_check
  - The value is inverted accordingly in places that use the resource location
- disablePlayerMovementCheck -\> minecraft:player_movement_check
  - The value is inverted accordingly in places that use the resource location
- disableRaids -\> minecraft:raids
  - The value is inverted accordingly in places that use the resource location
- doDaylightCycle -\> minecraft:advance_time
- doEntityDrops -\> minecraft:entity_drops
- doImmediateRespawn -\> minecraft:immediate_respawn
- doInsomnia -\> minecraft:spawn_phantoms
- doLimitedCrafting -\> minecraft:limited_crafting
- doMobLoot -\> minecraft:mob_drops
- doMobSpawning -\> minecraft:spawn_mobs
- doPatrolSpawning -\> minecraft:spawn_patrols
- doTileDrops -\> minecraft:block_drops
- doTraderSpawning -\> minecraft:spawn_wandering_traders
- doVinesSpread -\> minecraft:spread_vines
- doWardenSpawning -\> minecraft:spawn_wardens
- doWeatherCycle -\> minecraft:advance_weather
- maxCommandChainLength -\> minecraft:max_command_sequence_length
- maxCommandForkCount -\> minecraft:max_command_forks
- naturalRegeneration -\> minecraft:natural_health_regeneration
- snowAccumulationHeight -\> minecraft:max_snow_accumulation_height
- spawnRadius -\> minecraft:respawn_radius
- spawnerBlocksEnabled -\> minecraft:spawner_blocks_work

#### Limits

Some game rules that previously did not have a limited value range now do:

- minecraft:max_block_modifications: Minimum 1
- minecraft:max_command_forks: Minimum 1
- minecraft:max_command_sequence_length: Minimum 0
- minecraft:max_entity_cramming: Minimum 1
- minecraft:max_snow_accumulation_height: Minimum 0, maximum: 8
- minecraft:players_nether_portal_creative_delay: Minimum 0
- minecraft:players_nether_portal_default_delay: Minimum 0
- minecraft:players_sleeping_percentage: Minimum 0
- minecraft:random_tick_speed: Minimum 0
- minecraft:respawn_radius: Minimum 0

#### Added minecraft:fire_spread_radius_around_player

- Controls the maximum distance in blocks that fire can spread around a player
  - This replaces the previous doFireTick and allowFireTicksAwayFromPlayer game rules, which have now been removed
  - Setting it to 0 will disable fire spreading
  - Setting it to -1 will allow fire spreading without players around
  - Limit: Minimum -1

### Game Tests

In the game_rules test environment the keys bool_rule and int_rule have been replaced with a single key rules. It is a map from game rules resource locations to the game rules value. The value type is either integer or boolean depending on the game rule.

### Environment Attributes

#### Modifiers on ARGB Color Values

- override
  - Argument format: ARGB Color
- add - component-wise additive color blending
  - Argument format: RGB Color
- subtract - component-wise subtractive color blending
  - Argument format: RGB Color
- multiply - component-wise multiplicative color blending
  - Argument format: RGB or ARGB Color
  - If specified, the alpha component is multiplied independently just like the other color channels
- alpha_blend - traditional alpha blending that might be seen in image editing software
  - Argument format: ARGB Color
  - When the argument alpha is 1, it will behave as an override with no blending

#### Changed Environment Attributes

- Renamed minecraft:visual/water_fog_radius to minecraft:visual/water_fog_end_distance
- Removed minecraft:visual/extra_fog
- Replaced minecraft:visual/cloud_opacity with minecraft:visual/cloud_color

##### Added minecraft:visual/water_fog_start_distance

The distance in blocks from the camera at which underwater fog starts to have an effect. If negative, the fog will start out with density as if it had started that many blocks behind the camera.

- Value type: float
- Default value: -8.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position

##### Added minecraft:visual/fog_start_distance

The distance in blocks from the camera at which fog starts to have an effect (when the camera is not submerged in another substance). If negative, the fog will start out with density as if it had started that many blocks behind the camera. Note: the final value is also modified by weather.

- Value type: float
- Default value: 0.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position

##### Added minecraft:visual/fog_end_distance

The distance in blocks from the camera at which fog reaches its maximum density (when the camera is not submerged in another substance).

Note: the final value is also modified by weather.

- Value type: non-negative float
- Default value: 1024.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position

##### Added minecraft:visual/sky_fog_end_distance

The distance in blocks from the camera at which the fog that affects the sky reaches its maximum density (when the camera is not submerged in another substance).

Note: this value is restricted by the Render Distance option.

- Value type: non-negative float
- Default value: 512.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position

##### Added minecraft:visual/cloud_fog_end_distance

The distance in blocks from the camera at which the fog that affects clouds reaches its maximum density (when the camera is not submerged in another substance).

Note: this value is restricted by the Cloud Distance option.

- Value type: non-negative float
- Default value: 2048.0
- Modifiers: Float Modifiers
- Interpolated: yes
- Resolved at the camera's position

##### Added minecraft:visual/cloud_color

The color of the clouds. If fully transparent, clouds are entirely disabled and Happy Ghasts will not regenerate health faster when at cloud height.

- Value type: ARGB color
- Default value: \#00000000
- Modifiers: ARGB Color Modifiers
- Interpolated: yes
- Resolved at the camera's position for rendering, or at the position of a Happy Ghast for regeneration

### Slot Sources

- Added slot sources to allow the location of any inventory slot to be specified within datapacks
- Format: object with fields
  - type: the slot source type
  - \<type-specific\>: additional fields depending on the type

#### minecraft:empty Type

- Empty selection containing no slots

#### minecraft:group Type

- Merges several slot sources into one, with the resulting selection containing all slots from each slot source provided
  - If a slot is included in more than one slot source, it will be repeated in the resulting slot source
  - e.g. \[a, b\] + \[c, a\] -\> \[a, b, c, a\]
- Format:
  - terms: list of slot sources to join
- Can alternatively be written inline as a list of slot sources

#### minecraft:slot_range Type

- Selects slots within a slot range from the inventory of an entity or block entity
- Mirrors the behavior of the from argument of the /item command
- Format:
  - source: an entity or block entity from which the slots will be sourced, from loot context
    - Can be block_entity, this, attacking_entity, last_damage_player, direct_attacker, target_entity, or interacting_entity
  - slots: a slot range in the format of \<slot_type\> or \<slot_type\>.\<slot_number\> (e.g. armor.chest or container.\*)

#### minecraft:contents Type

- Selects all non-empty slots from the inventory component of one or more items
  - If no item is stored inside that component, the resulting selection will be empty
- The location of the item(s) whose inventory component to use is specified by another slot source
  - If the slot source includes more than one item with that component, the resulting selections will be merged identically as with the minecraft:group type
  - e.g. Bundle \[a, b\] + Shulker Box \[c, d\] -\> \[a, b, c, d\]
- Format:
  - component: the inventory component to target
    - Allowed values are minecraft:bundle_contents, minecraft:charged_projectiles, and minecraft:container
  - slot_source: a slot source containing slots with item(s) to target

#### minecraft:filtered Type

- Applies a filter to the selected slots, excluding any non-matching slots from the resulting selection
- Format:
  - item_filter: an item predicate to match against the items in each slot
  - slot_source: the slot source to filter

#### minecraft:limit_slots Type

- Limits the number of slots provided, with the resulting selection containing at most that number of slots
  - Any slots bringing the number of slots above that limit will be excluded, in order of inclusion
  - e.g. \[a, b, c, d\] -\> \[a, b, c\] if the limit is set to 3
- Format:
  - limit: integer, the maximum number of slots to include in the resulting selection
  - slot_source: the slot source to limit

Example slot source selecting every slot with more than 16 items from the hotbar and armor slots of an entity:

    {
        "type": "minecraft:filtered",
        "item_filter": {
            "count": {
                "min": 16
            }
        },
        "slot_source": [
            {
                "type": "minecraft:slot_range",
                "source": "this",
                "slots": "hotbar.*"
            },
            {
                "type": "minecraft:slot_range",
                "source": "this",
                "slots": "armor.*"
            }
        ]
    }

### Loot Tables

- Added new minecraft:slots loot pool entry
  - Provides the items contained within the selected slots to the loot table
  - Format:
    - slot_source: a slot source describing where the items are located
  - Supports all standard loot pool entry fields
- Removed contents as a supported value for the dynamic loot entry type
  - Its behavior of providing the contents of a Shulker Box was made redunant by the addition of the slots loot entry type, and can now be replicated with the slot_range slot source

### World Generation

#### Biomes

- The following color fields in the effects definition now support colors as a string in the form "#rrggbb", or a float array in the form \[red, green, blue\]
  - water_color
  - foliage_color
  - dry_foliage_color
  - grass_color
  - grass_color_modifier

### Tags

#### Item Tags

- Added \#camel_husk_food - all items that can be used to feed a Camel Husk

#### Entity Tags

- Added \#can_float_while_ridden - entities that can float on water while being ridden
- Changed \#skeletons to include Parched
- Changed \#zombies to include Zombie Nautilus, Zombie Horse and Camel Husk
- Changed \#can_equip_saddle to include Nautilus, Zombie Nautilus, Zombie Horse and Camel Husk

## Resource Pack Version 72.0

- block.vsh/fsh copies terrain.vsh/fsh and handles ad-hoc blocks (e.g. held by entities)
- Added ChunkSection uniform, used by terrain.vsh (which replaces DynamicTransforms)
- New shaders have been introduced to perform GPU based sprite animations
- Globals uniform now has camera coordinates

## Textures

### Item Sprites

- Added new item sprites:
  - item/camel_husk_spawn_egg
  - item/parched_spawn_egg

### Entity Textures

- Added new entity textures:
  - entity/camel/camel_husk.png
  - entity/equipment/camel_husk_saddle/saddle.png
  - entity/skeleton/parched.png
  - entity/skeleton/parched_overlay.png

## Sounds

- Removed item.underwater_saddle.equip
- Added new sound events for the Nautilus:
  - item.nautilus_saddle_equip
  - item.nautilus_saddle_underwater_equip
- Added new sound events for the Parched:
  - entity.parched.ambient
  - entity.parched.death
  - entity.parched.hurt
  - entity.parched.step
- Added new sound events for Camel Husk:
  - entity.camel_husk.ambient
  - entity.camel_husk.dash
  - entity.camel_husk.dash_ready
  - entity.camel_husk.death
  - entity.camel_husk.eat
  - entity.camel_husk.hurt
  - entity.camel_husk.saddle
  - entity.camel_husk.sit
  - entity.camel_husk.stand
  - entity.camel_husk.step
  - entity.camel_husk.step_sand
- Added new sound events for the Parrot
  - entity.parrot.imitate.camel_husk
  - entity.parrot.imitate.parched
  - entity.parrot.imitate.zombie_horse
  - entity.parrot.imitate.zombie_nautilus

### Shaders & Post-process Effects

- Added animate_sprite\* core shaders, which use a new SpriteAnimationInfo uniform

#### Sprite Animations

- Sprites (textures as part of a larger atlas) are now animated on the GPU rather than per-tick on the CPU
- For regular frame-based animations, animate_sprite.vsh and animate_sprite_blit.fsh are used to perform the draw
- For interpolated animations, animate_sprite.vsh and animate_sprite_interpolate.fsh are used to perform the draw
- The UBO SpriteAnimationInfo contains information on where the sprite should be drawn to, within the greater texture atlas

## Fixed bugs in 25w44a

- [MC-2791](https://bugs.mojang.com/browse/MC-2791) - The player model in the inventory screen renders in the wrong orientation when it's not standing up straight
- [MC-73186](https://bugs.mojang.com/browse/MC-73186) - Gaps between the faces of item models and complex block models
- [MC-149630](https://bugs.mojang.com/browse/MC-149630) - Some particles have very thin, vertical lines that flash in and out around the particles
- [MC-237158](https://bugs.mojang.com/browse/MC-237158) - Magma blocks can generate on the ceilings of caves below aquifers
- [MC-298942](https://bugs.mojang.com/browse/MC-298942) - Character body moves instead of the head when riding a happy ghast
- [MC-300642](https://bugs.mojang.com/browse/MC-300642) - When texture atlases are large, gaps are rendered between blocks that have a low resolution
- [MC-301311](https://bugs.mojang.com/browse/MC-301311) - The “Transfer Now” button no longer renders highlighted when the java realms information box is selected
- [MC-301516](https://bugs.mojang.com/browse/MC-301516) - The mouse cursor doesn’t change to the hand shape when hovering over tabs in the “Create New World” menu and similar screens
- [MC-301517](https://bugs.mojang.com/browse/MC-301517) - The mouse cursor doesn’t change to the hand shape when hovering over arrows in the singleplayer, multiplayer, resource packs, and data packs menus
- [MC-301527](https://bugs.mojang.com/browse/MC-301527) - The mouse cursor doesn’t change to the resize shape when scrolling in the advancements menu
- [MC-301988](https://bugs.mojang.com/browse/MC-301988) - Buttons in the telemetry screen are not aligned properly in some languages
- [MC-302111](https://bugs.mojang.com/browse/MC-302111) - Elements within the resource pack and data pack menus are not selected in order when using the TAB key
- [MC-302325](https://bugs.mojang.com/browse/MC-302325) - When the player toggles a debug renderer using its hotkey (F3+B, F3+G) while in the debug options screen, the corresponding entry is not updated
- [MC-302338](https://bugs.mojang.com/browse/MC-302338) - The narrator button in the Accessibility Settings menu doesn't update upon pressing Ctrl+B
- [MC-302362](https://bugs.mojang.com/browse/MC-302362) - Clicking on "Singleplayer" or "Multiplayer" in the main menu then immediately clicking on a world or server joins it even when not clicking the play button
- [MC-302482](https://bugs.mojang.com/browse/MC-302482) - Resource and data pack names can overlap selection boxes when the scroll bar is present
- [MC-302678](https://bugs.mojang.com/browse/MC-302678) - Arrows and tridents get stuck on players and mobs
- [MC-303072](https://bugs.mojang.com/browse/MC-303072) - Game crashes when a trident entity with PierceLevel ≥ 1 hits a mob or player
- [MC-303168](https://bugs.mojang.com/browse/MC-303168) - Equipping a saddle onto a nautilus uses the "subtitles.entity.horse.saddle" subtitle
- [MC-303255](https://bugs.mojang.com/browse/MC-303255) - Nautiluses do not deal damage if mobGriefing is false
- [MC-303429](https://bugs.mojang.com/browse/MC-303429) - Piglins and hoglins shake in the nether
- [MC-303432](https://bugs.mojang.com/browse/MC-303432) - Chinese input is not recognized
- [MC-303434](https://bugs.mojang.com/browse/MC-303434) - Japanese input is not recognized
- [MC-303439](https://bugs.mojang.com/browse/MC-303439) - Held items in third-person view show strange artifacts when viewed at certain angles
- [MC-303455](https://bugs.mojang.com/browse/MC-303455) - The cursor is no longer centered when opening a container or menu on Wayland
- [MC-303460](https://bugs.mojang.com/browse/MC-303460) - The cursor no longer follows the look set by the system on Wayland
- [MC-303461](https://bugs.mojang.com/browse/MC-303461) - The application icon shows the generic Wayland icon instead of the Minecraft icon on Wayland
- [MC-303478](https://bugs.mojang.com/browse/MC-303478) - Cannot launch 25w43a on Linux with Nvidia Graphics
- [MC-303481](https://bugs.mojang.com/browse/MC-303481) - Game has no audio and crashes with Mac Studio Display
- [MC-303485](https://bugs.mojang.com/browse/MC-303485) - The game can no longer save chunks in custom dimensions
- [MC-303504](https://bugs.mojang.com/browse/MC-303504) - Nether sprouts textures still expand when viewed from a sharp angle
- [MC-303506](https://bugs.mojang.com/browse/MC-303506) - Control-key combinations additionally send the normal letter on Wayland
- [MC-303520](https://bugs.mojang.com/browse/MC-303520) - Sweet berry bush textures still expand when viewed from a sharp angle
- [MC-303541](https://bugs.mojang.com/browse/MC-303541) - The game doesn't boot on Wayland
- [MC-303651](https://bugs.mojang.com/browse/MC-303651) - Rotating dropped items sometimes create visual artifacts

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/1ade1ebd6affbfed6dbfb2ce8864cf19efed07ba/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
