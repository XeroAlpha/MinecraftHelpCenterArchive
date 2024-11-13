---
title: Minecraft Java Edition - Snapshot 24w46a
date: 2024-11-13T15:06:49Z
updated: 2024-11-13T15:06:54Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31850296771213-Minecraft-Java-Edition-Snapshot-24w46a
hash:
  h_01JCK0WR2D69BWPBHQD21P3968: changes
  h_01JCK0WR2DTP9RR01RGXQ2CZW2: technical-changes
  h_01JCK0WR2DES9HRHF1VE4079YT: data-pack-version-60
  h_01JCK0WR2D940XBRTTFJDE8P8Q: item-tags
  h_01JCK0WR2DQ3XXN4S5WVX88EX5: resource-pack-version-45
  h_01JCK0WR2DXACH56R8MF1DWXCZ: item-models
  h_01JCK0WR2DD4GE16TVVE22D3VH: minecraftspecialitem-model-type
  h_01JCK0WR2DXGCJER39JZ9BSC4D: changedminecraftheadspecial-model-type
  h_01JCK0WR2DYB0PAYTSSHZJPQRA: addedminecraftstanding_signspecial-model-type
  h_01JCK0WR2DKZC92KYW4KQQ7HB7: addedminecrafthanging_signspecial-model-type
  h_01JCK0WR2DRMPJYDMFTJG7R1FF: minecraftconditionitem-model-type
  h_01JCK0WR2DDCWPVGWVHXBN76CT: changedminecrafthas_componentboolean-property
  h_01JCK0WR2DE46XJBYVRDQJQF2H: addedminecraftextended_viewboolean-property
  h_01JCK0WR2D3WNMP5DA8CV1R6Z0: addedminecraftkeybind_downboolean-property
  h_01JCK0WR2DGCMMAFH7EB5MDTVH: addedminecraftlocal_timeproperty
  h_01JCK0WR2EEK8Y1XA86DRCB47F: addedminecraftholder_typeproperty
  h_01JCK0WR2EGMZHFDZ72QAFJTDW: fixed-bugs-in-24w46a
  h_01JCK0WR2EDJ1PHHB4TQWQ5W36: get-the-snapshot
---

Sharpen your pickaxes, another snapshot is here! In today's snapshot we have a bunch of component improvements coming your way, Resin Clumps can be waterlogged now, and Rabbits can finally roam free again. Furthermore, there's a whole swarm of other bug fixes.

## Changes

- Wither Skeletons no longer have Bows as their preferred weapon
- Creakings will now persist when a world is reloaded
- Mining speed and blast resistance of creaking hearts is doubled
- Resin sounds have been adjusted to be softer
- Resin Clump block can be placed on any full face of a neighboring block
- Resin Clump block can now be waterlogged, and can therefore be placed underwater

## Technical Changes

- The Data Pack version is now 60
- The Resource Pack version is now 45

## Data Pack Version 60

- Removed creaking_transient entity type

### Item tags

- Removed trim_templates
- Added \#wither_skeleton_disliked_weapons for weapons that Wither Skeletons don't want to pick up

## Resource Pack Version 45

- All blocks that previously rendered only block entity (banners, heads, beds, chests, conduits, decorated pots, shulker boxes and signs) will now also render normal block model over it (same as existing behavior of bells, enchantment tables, etc.)
  - Note: rendered block entity still can't be removed or data-driven, this change only affects previously ignored block models

### Item models

#### minecraft:special item model type

##### Changed minecraft:head special model type

- Added field texture - optional namespaced ID for texture, without textures/entity/ prefix and .png suffix
  - If absent, default texture will be used, depending on kind field
  - Additionally, if present, minecraft:profile component is ignored

##### Added minecraft:standing_sign special model type

- Renders a standing sign
- Fields:
  - wood_type - one of oak, spruce, birch, acacia, cherry, jungle, dark_oak, pale_oak, mangrove, bamboo, crimson, warped
  - texture - optional namespaced ID for texture, without textures/entity/signs/ prefix and .png suffix
    - if not present, it will be derived from wood_type

##### Added minecraft:hanging_sign special model type

- Renders a hanging sign
- Fields:
  - wood_type - one of oak, spruce, birch, acacia, cherry, jungle, dark_oak, pale_oak, mangrove, bamboo, crimson, warped
  - texture - optional namespaced ID for texture, without textures/entity/signs/hanging/ prefix and .png suffix
    - if not present, it will be derived from wood_type

#### minecraft:condition item model type

- Removed minecraft:xmas boolean property, replaced by minecraft:local_time
- Removed minecraft:shift_down boolean property, replaced by minecraft:extended_view

##### Changed minecraft:has_component boolean property

- Added field: ignore_default - if default component value should be handled as "no component", default: false

##### Added minecraft:extended_view boolean property

- Returns true if player has requested extended details by holding shift key down
  - Note: not a keybind, can't be rebound
- Only works when item is displayed in UI
- No fields

##### Added minecraft:keybind_down boolean property

- Returns true if keybind is currently active
- Fields:
  - keybind - keybind ID, same as value in keybind text component
    - Examples: key.use, key.left

##### Added minecraft:local_time property

- Returns the current time formatted according to a given pattern
- The value is updated every second
- For full format documentation for locale, time zone and pattern, see ICU (International Components for Unicode) documentation
- Fields:
  - locale - optional value describing locale
    - Examples:
      - en_US: English language (used for things like week names), formating as in USA
      - cs_AU@numbers=thai;calendar=japanese: Czech language, Australian formatting, Thai numerals and Japanese calendar
    - default value is "", which means "root" locale (a set of defaults, including English names)
  - time_zone - optional value describing time zone
    - If not present, defaults to timezone set on client
    - Examples:
      - Europe/Stockholm
      - GMT+0:45
  - pattern - describes format to be used for time formatting
    - Examples:
      - yyyy-MM-dd - 4-digit year number, then 2-digit month number, then 2-digit day of month number, all zero-padded if needed, separated by -
      - HH:mm:ss - current time (hours, minutes, seconds), 24-hour cycle, all zero-padded to 2 digits of needed, separated by :
- Values: any string

> **Developer's Note**: *There is no "use locale set on client" option to avoid unexpected issues when the user's locale does not match the pack developer's one. Also, time is complicated, be careful.*

##### Added minecraft:holder_type property

- Returns holding entity type, if present
- No fields
- Values: namespaced entity type ID

## Fixed bugs in 24w46a

- [MC-150224](https://bugs.mojang.com/browse/MC-150224) - Rabbits can occasionally get stuck on the edges of blocks
- [MC-160001](https://bugs.mojang.com/browse/MC-160001) - Skulls, signs, hanging signs, banners and decorated pots have no breaking/sprinting particles
- [MC-256649](https://bugs.mojang.com/browse/MC-256649) - Hanging signs aren't rendered when held by endermen or as block display entities
- [MC-266991](https://bugs.mojang.com/browse/MC-266991) - Exposed Copper Bulb has inconsistent pixels
- [MC-271169](https://bugs.mojang.com/browse/MC-271169) - The "Isn't It Scute?" advancement is granted when unleashing an armadillo while holding a brush
- [MC-272245](https://bugs.mojang.com/browse/MC-272245) - You can get the advancement "Shear Brilliance" when you use shears on a leashed wolf
- [MC-273861](https://bugs.mojang.com/browse/MC-273861) - When a leashed bee enters a hive, the leash disappears
- [MC-274571](https://bugs.mojang.com/browse/MC-274571) - The advancement "Little Sniffs" can be obtained by unleashing the snifflet and not feeding it
- [MC-275339](https://bugs.mojang.com/browse/MC-275339) - Bad contrast in bundle interface with dark blocks
- [MC-276697](https://bugs.mojang.com/browse/MC-276697) - Neutral mobs don't pathfind correctly to their target after being unleashed
- [MC-276986](https://bugs.mojang.com/browse/MC-276986) - Missing pixel in open bundle texture
- [MC-277042](https://bugs.mojang.com/browse/MC-277042) - Blue and Red open bundle are inconsistent with the other colors
- [MC-277071](https://bugs.mojang.com/browse/MC-277071) - Middle clicking on a creaking spawned naturally through a creaking heart doesn't give you the spawn egg
- [MC-277074](https://bugs.mojang.com/browse/MC-277074) - The entity shadows of creakings are slightly too large in relation to the size of their models
- [MC-277140](https://bugs.mojang.com/browse/MC-277140) - The statistics screen does not visually differentiate the creaking and creaking_transient entities
- [MC-277152](https://bugs.mojang.com/browse/MC-277152) - The statistic for killing a creaking doesn't increment when breaking a creaking heart
- [MC-277226](https://bugs.mojang.com/browse/MC-277226) - Creakings not linked to any heart display wrong subtitles when attacked with non-damaging projectiles
- [MC-277399](https://bugs.mojang.com/browse/MC-277399) - The hand animation isn't played when constantly emptying items from bundles
- [MC-277413](https://bugs.mojang.com/browse/MC-277413) - The empty state sprite for the oxygen bar takes a little longer to start displaying compared to Bedrock Edition
- [MC-277533](https://bugs.mojang.com/browse/MC-277533) - Bundles can remain in the open state when taken out from saved hotbars
- [MC-277892](https://bugs.mojang.com/browse/MC-277892) - Clicking on the selected recipe a second time in the stonecutter GUI turns the result item into a ghost item
- [MC-277915](https://bugs.mojang.com/browse/MC-277915) - Translucency sorting seems incorrect in some cases in water
- [MC-277948](https://bugs.mojang.com/browse/MC-277948) - Suspicious stew gives different durations of Blindness for Eyeblossom and Azure Bluet
- [MC-277962](https://bugs.mojang.com/browse/MC-277962) - Chiseled Resin Bricks have a miscolored pixel
- [MC-278028](https://bugs.mojang.com/browse/MC-278028) - Using items underwater can force you to exit swimming mode
- [MC-278058](https://bugs.mojang.com/browse/MC-278058) - Breeze entity model rods no longer spin around when it is moving
- [MC-278102](https://bugs.mojang.com/browse/MC-278102) - Recipe book icons no longer visually indicate that an item has multiple recipes
- [MC-278124](https://bugs.mojang.com/browse/MC-278124) - Resin clumps are not waterloggable
- [MC-278130](https://bugs.mojang.com/browse/MC-278130) - Resin bricks cannot be placed or used inside smithing tables
- [MC-278131](https://bugs.mojang.com/browse/MC-278131) - Resin clumps can be placed inside smithing tables
- [MC-278132](https://bugs.mojang.com/browse/MC-278132) - Using items while riding camels that are sprinting slows the camel down
- [MC-278136](https://bugs.mojang.com/browse/MC-278136) - Bees still get poisoned when touching closed eyeblossoms
- [MC-278149](https://bugs.mojang.com/browse/MC-278149) - Strays, bogged, and wither skeletons hold their bows incorrectly when charging and shooting
- [MC-278158](https://bugs.mojang.com/browse/MC-278158) - Block/item models can no longer override parent model texture references by referencing the textures in the parent model of the first parent model
- [MC-278184](https://bugs.mojang.com/browse/MC-278184) - Eyeblossoms can generate replacing Pale Oak logs
- [MC-278191](https://bugs.mojang.com/browse/MC-278191) - Wandering Traders can sell Pale Oak Saplings in multiple offers at once
- [MC-278212](https://bugs.mojang.com/browse/MC-278212) - Resin clump is placed in an unexpected position in the creative inventory

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/9b2e96ae27afaf9a6c682c5d92d37a99da4a8d1a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
