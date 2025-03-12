---
title: "Minecraft: Java Edition - Snapshot 24w11a"
date: 2024-03-14T16:14:09Z
updated: 2025-03-12T10:45:02Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/25004734224397-Minecraft-Java-Edition-Snapshot-24w11a
hash:
  h_01HRYVV8X3GATF4TC56BFG9B6H: experimental-features
  h_01HRYVV8X3KQ1EBV0Q3VFPX58F: blocks
  h_01HRYVV8X3KQM4KK1K14E035SY: heavy-core
  h_01HRYVV8X4SAPWTW32QGVPA2QS: items
  h_01HRYVV8X49NSZVGR02VVHJVBJ: breeze-rod
  h_01HRYVV8X488XNQEW0EJ8FXK52: mace
  h_01HRYVV8X4H5P5C476GRQH5ZVG: mobs
  h_01HRYVV8X4S3QM39DPTKN1CY4G: breeze
  h_01HRYVV8X40DZ74JGKJBNYWQJ3: pottery-sherds
  h_01HRYVV8X4JRR5ZN43XDSP40A8: banner-patterns
  h_01HRYVV8X46ZQTR8XMKN7DHJZ5: armor-trims
  h_01HRYVV8X4NMDS79YBNK0SEDSC: trial-chambers
  h_01HRYVV8X4N4T0XDAP320H3N8S: changes
  h_01HRYVV8X4RVJKTM5MYTB623ZS: wolf-variants
  h_01HRYVV8X49D3NWAEZ298Z2NCD: technical-changes
  h_01HRYVV8X46PMMB6SET77WBQN2: data-pack-version-35
  h_01HRYVV8X4J2KT4ZA5749WM4C1: predicates
  h_01HRYVV8X4HSSRD7S5BJG52EXX: item-sub-predicate
  h_01HRYVV8X4ANS3X6RAEGENVFT6: example
  h_01HRYVV8X4F7MNFVSP887REKWT: loot-functions
  h_01HRYVV8X4K6QM4Q46J345KP8T: set_fireworks
  h_01HRYVV8X4BH9W2MVAB9ENYZ92: set_firework_explosion
  h_01HRYVV8X4WFJ28MJ0PS2DX5VX: set_book_cover
  h_01HRYVV8X41GNZMA3EZX3Q73Z9: set_writable_book_pages
  h_01HRYVV8X400N2ZXXBSM4BRFRM: set_written_book_pages
  h_01HRYVV8X41TGT5J5640ZH6TZ8: resource-pack-version-29
  h_01HRYVV8X4G0EYPGRRYJZ31RCN: fixed-bugs-in-snapshot-24w11a
  h_01HRYVV8X58K23R82P3QX73Y9N: get-the-snapshot
---

Oh look, it's a rare case of snapshot Thursday! This week we're expanding your arsenal with a smashing new weapon, the Mace! Use this weapon's special smash attack while leaping from a high place and watch your enemies get knocked back. The longer you fall, the harder you hit – but make sure you time it right! Your fall damage is only negated if you land the blow. Craft this new weapon by combining a Breeze Rod with the Heavy Core, a new item you can find by unlocking Trial Chamber Vaults.

As usual, we invite you to share your thoughts about this new feature over at the feedback site: [Let's talk about the Mace!](https://aka.ms/mcmacefeedback)

Alongside this hefty new mob swatter, we're also bringing you new chambers and variations to Trial Chambers, updated loot tables for Vaults, new Pottery Sherds, Armor Trims and Banner Patterns—as well as the usual slew of bug fixes and polish.

Happy mace-ing!

## EXPERIMENTAL FEATURES

- Added the Mace
- Added Breeze Rod
- Added Heavy Core
- Added 2 new Armor Trims
- Added 3 new Pottery Sherds
- Added 2 new Banner Patterns
- Updated Vault loot table
- Updated Trial Chambers

## BLOCKS

### HEAVY CORE

- A mysterious, dense block which can be combined with a Breeze Rod to craft a brand-new weapon: the Mace!

## ITEMS

### BREEZE ROD

- An item dropped by the Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft the Mace

### MACE

- A new heavy weapon to smash your enemies!
- Leverage the weight of this new weapon to deal additional damage the farther you fall before hitting your target
  - Try it out by jumping down toward your target, and hit them before you hit the ground
  - Successfully striking a target in this way will negate any damage accumulated from the fall, similar to how a Wind Charge works
  - Other entities near the struck enemy will be knocked back by the immense force of the Mace
- Using a Mace will decrease its durability like any other weapon; repair it with Breeze Rods at an anvil
- Players can use a Mace in combination with Wind Charges to launch up and deliver devastating smash attacks on their enemies

## MOBS

### BREEZE

- Drops 1-2 Breeze Rods when killed by a player
  - The number of Breeze Rods dropped is affected by looting enchantments

### POTTERY SHERDS

- Added Flow, Guster, and Scrape Pottery Sherds

### BANNER PATTERNS

- Added Flow and Guster Banner Patterns

### ARMOR TRIMS

- Added Bolt and Flow Armor Trims and Smithing Templates
- Bolt can be duplicated using a Copper Block or Waxed Copper
- Flow can be duplicated using a Breeze Rod

### TRIAL CHAMBERS

- Added new chambers and variations, with new challenges
  - Remade chamber_9, and renamed it to "slanted"
  - Remade chamber_3, and renamed it to "pedestal"
- Added Flow, Guster, and Scrape Pottery Sherds to the Decorated Pots in the decor structure pool
- Trial Spawners will now appear more frequently in the corridors
- Changed the layout of the blocks around the Vaults
- The loot tables of Vaults in Trial Chambers have been updated to address some inventory management issues
  - You will now get no more than 1 unstackable item per Vault
  - You will more often get rewards which can stack together
  - Horse Armor and Saddles have been removed from the loot table
- Vaults in Trial Chambers can now eject:
  - Wind Charges
  - Bolt Armor Trim Smithing Template
  - Flow Armor Trim Smithing Template
  - Flow Banner Pattern
  - Guster Banner Pattern
  - Heavy Core

## CHANGES

- Adjusted flying behaviour for Bees and Parrot to keep them from overshooting their position when flying up and down
  - Additionally, a warning toast will be shown periodically while in game
- Status effect particle colors are no longer blended into one particle color
  - All active visible status effect particles are now rendered separately
  - The frequency of emitting status effect particles has been lowered to clutter the screen less
- Updated the wolf armor crack textures
- Menu background blur has been updated to look better and be more performant

### WOLF VARIANTS

When summon in other ways (e.g. using the Spawn Egg or using the summon command), the variant selection follows the natural spawning biome rules with the following extensions:

- Rusty Wolf: will be selected in all Jungle biomes, including Jungle and Bamboo Jungle Biomes
- Spotted Wolf: will be selected in all Savanna biomes, including Savanna and Windswept Savanna Biomes
- Striped Wolf: will be selected in all Badlands biomes, including Badlands and Eroded Badlands Biomes

## TECHNICAL CHANGES

- The Data Pack version is now 35
- The Resource Pack version is now 29

## DATA PACK VERSION 35

- Removed any entity sub-predicate
- Component-specific item predicate properties have been moved to separate field predicates
- Added slot name contents for single-slot entities like item frames and item displays
- Contents of item entity can now be accessed through contents slot name
- Added new loot functions

### PREDICATES

#### ITEM SUB-PREDICATE

- Some fields from item predicate have been moved to a map in an optional field predicates
- The new field is similar to the components field on item stacks
- This was done to simplify addition for future predicates and to allow sub-predicates to more closely resemble names of components they match
- The following fields have been moved:
  - enchantments - field moved to sub-predicate minecraft:enchantments
  - stored_enchantments - field moved to sub-predicate minecraft:stored_enchantments
  - potions - field moved to sub-predicate minecraft:potion_contents
  - custom_data - field moved to sub-predicate minecraft:custom_data
- durability field has been expanded to minecraft:damage predicate:
  - This check now works for any item that has minecraft:damage component
  - An item that does not have a minecraft:damage component can never match
  - To check for unbreakable items, query value of minecraft:unbreakable component
  - Fields:
    - damage - optional bounds for value of minecraft:damage component
    - durability - optional bounds for durability (max damage minus value of minecraft:damage)
- Predicates minecraft:enchantments, minecraft:stored_enchantments, minecraft:potion_contents and minecraft:damage require matching component to exist on item
  - That means that, for example, matching for empty enchantment list will not pass on items without minecraft:damage component
  - Note: some components, like minecraft:enchantments have default values, so they will always match

##### Example:

Before:

    "item": {
      "enchantments": [
        {
          "enchantment": "minecraft:silk_touch",
          "levels": {
            "min": 1
          }
        }
      ]
    }

After:

    "item": {
      "predicates": {
        "minecraft:enchantments": [
            {
              "enchantment": "minecraft:silk_touch",
              "levels": {
                "min": 1
              }
            }
          ]
      }
    }

### LOOT FUNCTIONS

#### SET_FIREWORKS

New function for setting the details of the minecraft:fireworks component.

Fields:

- conditions: list of conditions (default: \[\]):
  - Conditions to check before applying the function
- flight_duration: Optional integer, 0-255:
  - The flight duration measured in number of gunpowder
  - If omitted, the flight duration of the item is left untouched - or set to 0 if the component did not exist before
- explosions: List of firework_explosion data - same format as the explosion field in the minecraft:fireworks component:
  - The explosion data to set
- mode: enumerated value deciding function for explosions:
  - replace_all: fully replace the explosions list
  - replace_section: replace a section of the explosions. Arguments:
    - offset: optional non-negative integer:
      - Start of replaced range
      - If omitted, 0 is used
    - size: optional non-negative integer:
      - Size of range to be replaced in explosions
      - If omitted, the size of explosions field is used
  - insert: insert explosions, moving existing explosions to after the inserted section. Arguments:
    - offset: optional non-negative integer:
      - Index before which explosions will be inserted
      - If omitted, 0 (before first explosion) is used
  - append: append explosions at the end of the list

#### SET_FIREWORK_EXPLOSION

New function for setting the details of the minecraft:firework_explosion component.

Fields:

- conditions: list of conditions (default: \[\]):
  - Conditions to check before applying the function
- shape: optional Explosion Shape:
  - The explosion shape to set
  - If omitted, the original shape is kept (or small_ball is used if there was no component)
- colors: optional integer array, RGB values:
  - List of initial particle colors to replace the ones on the existing explosion with
  - If omitted, the original colors are kept (or \[\] is used if there was no component)
- fade_colors: optional integer array, RGB values:
  - List of fade-to particle colors to replace the ones on the existing explosion with
  - If omitted, the original colors are kept (or \[\] is used if there was no component)
- trail: optional boolean:
  - Set whether the explosion should have a trail or not
  - If omitted, the original has_trail value is kept (or false is used if there was no component)
- twinkle: optional boolean:
  - Set whether the explosion should have a twinkle or not
  - If omitted, the original has_twinkle value is kept (or false is used if there was no component)

#### SET_BOOK_COVER

New function for setting the cover details of the minecraft:written_book_content component. If present, any pages in the book are left untouched.

Fields:

- conditions: list of conditions (default: \[\]):
  - Conditions to check before applying the function
- title: optional Filterable text (same format as title on the minecraft:written_book_content component):
  - The title to set
  - If omitted, the original title is kept (or an empty string is used if there was no component)
- author: optional string:
  - The author to set
  - If omitted, the original author is kept (or an empty string is used if there was no component)
- generation: optional integer \[0; 3\]:
  - The generation value to set
  - If omitted, the original generation is kept (or 0 is used if there was no component)

#### SET_WRITABLE_BOOK_PAGES

New function for manipulating the pages of the minecraft:writable_book_content component.

Fields:

- conditions: list of conditions (default: \[\]):
  - Conditions to check before applying the function
- pages: list of Filterable strings (same format as pages on the minecraft:writable_book_content component):
  - The pages to apply
- mode: enumerated value deciding function:
  - replace_all: fully replace the book contents
  - replace_section: replace a section of the book. Arguments:
    - offset: optional non-negative integer:
      - Start of replaced range
      - If omitted, 0 is used
    - size: optional non-negative integer:
      - Size of range to be replaced in book
      - If omitted, the size of pages field is used
  - insert: insert pages, moving existing pages to after the inserted section. Arguments:
    - offset: optional non-negative integer:
      - Index before which pages will be inserted
      - If omitted, 0 (before first page) is used
  - append: append pages at the end of the book

#### SET_WRITTEN_BOOK_PAGES

New function for manipulating the pages of the minecraft:written_book_content component. Same format as set_writable_book_content but thepages field contains filterable Components instead of Strings (same format as pages on the minecraft:writable_book_content component).

Any cover data is left untouched, and the page content components are set to resolve next time a player opens the book.

## RESOURCE PACK VERSION 29

- Added gui/inworld_menu_background, gui/inworld_menu_list_background, gui/inworld_header_separator, gui/inworld_footer_separator textures to allow menus accessed from the Pause Menu to look different from menus accessed from the Title Screen
- Added gui/tab_header_background texture, which is rendered behind the tab buttons in the Create World Screen
- Added misc/credits_vignette texture, which is rendered behind the poem and the credits
- The blur post-processing shader has been renamed to box_blur
- Added optional boolean field use_linear_filter to post-processing passes which when set to true switches texture sampling mode from nearest-neighbor sampling to linear interpolation for that pass
- Added entity_outline_box_blur post-processing shader

## FIXED BUGS IN SNAPSHOT 24W11A

- [MC-153329](https://bugs.mojang.com/browse/MC-153329) - Leashing an iron golem breaks its pathfinding until reloading the world
- [MC-165948](https://bugs.mojang.com/browse/MC-165948) - Bees can be lured into dangerous blocks
- [MC-168407](https://bugs.mojang.com/browse/MC-168407) - Bees can get stuck in a lantern
- [MC-170000](https://bugs.mojang.com/browse/MC-170000) - Hand lighting / lighting of held items changes drastically in first-person mode when looking around
- [MC-172047](https://bugs.mojang.com/browse/MC-172047) - Wolves try to attack armor stands
- [MC-173303](https://bugs.mojang.com/browse/MC-173303) - Leashed pets teleport to the player when reloaded
- [MC-186626](https://bugs.mojang.com/browse/MC-186626) - /weather not working in custom dimensions
- [MC-208528](https://bugs.mojang.com/browse/MC-208528) - Feeding tamed baby wolves and cats causes them to sit down/stand up
- [MC-221754](https://bugs.mojang.com/browse/MC-221754) - Leashed wolves no longer attack when unleashed
- [MC-229919](https://bugs.mojang.com/browse/MC-229919) - Bees don't recognize beehives or bee nests with a campfire directly below and a block on top
- [MC-232560](https://bugs.mojang.com/browse/MC-232560) - Tamed wolf movement speed decreases when unleashed from a fence
- [MC-260921](https://bugs.mojang.com/browse/MC-260921) - Data is focused last on the statistics screen when using keyboard navigation
- [MC-267923](https://bugs.mojang.com/browse/MC-267923) - The "Done" button doesn't always deselect when you close out of a Sign UI, making typing spaces difficult
- [MC-267930](https://bugs.mojang.com/browse/MC-267930) - No element is focused when opening the statistics screen using keyboard navigation
- [MC-268110](https://bugs.mojang.com/browse/MC-268110) - Deleting world results in a file directory error
- [MC-268282](https://bugs.mojang.com/browse/MC-268282) - Picking up lava, powder snow or water using a bucket can be desynced
- [MC-268405](https://bugs.mojang.com/browse/MC-268405) - Wind charges can move in unusual ways
- [MC-268408](https://bugs.mojang.com/browse/MC-268408) - Game crashes when a wind charge hits an entity after disabling update_1_21 data pack
- [MC-268582](https://bugs.mojang.com/browse/MC-268582) - Facing direction no longer affects shading of the first person arm
- [MC-268796](https://bugs.mojang.com/browse/MC-268796) - "Saving world" text is blurred when pausing
- [MC-268805](https://bugs.mojang.com/browse/MC-268805) - panorama_overlay.png no longer works
- [MC-268811](https://bugs.mojang.com/browse/MC-268811) - Clicking 'Done' for language settings is ineffective; changes apply after double-clicking the language option
- [MC-268812](https://bugs.mojang.com/browse/MC-268812) - Dirt background is used in the pause menu and some other menus in Programmer Art; black background used in High Contrast resource pack
- [MC-268816](https://bugs.mojang.com/browse/MC-268816) - Credits background texture no longer scrolls in Programmer Art and other such resource packs
- [MC-268819](https://bugs.mojang.com/browse/MC-268819) - Programmer Art, High Contrast, other resource packs: top of "Create New World" screen is transparent/not black
- [MC-268855](https://bugs.mojang.com/browse/MC-268855) - Typing /function then space closes the internal server
- [MC-268862](https://bugs.mojang.com/browse/MC-268862) - Areas with no sky light are incredibly dark when using the "High Contrast" resource pack
- [MC-268902](https://bugs.mojang.com/browse/MC-268902) - Low FPS when blurred menu background is visible
- [MC-268908](https://bugs.mojang.com/browse/MC-268908) - Trying to navigate to the Font Settings menu using the Tab key exits the language menu
- [MC-268953](https://bugs.mojang.com/browse/MC-268953) - Layout of gamerules screen breaks when toggling fullscreen mode or changing resolution
- [MC-268956](https://bugs.mojang.com/browse/MC-268956) - Command blocks, structure blocks and jigsaw blocks use menu_background.png
- [MC-268967](https://bugs.mojang.com/browse/MC-268967) - Night vision does not work properly in high constrast mode
- [MC-269032](https://bugs.mojang.com/browse/MC-269032) - Blur shader runs when menu blurriness is 0%
- [MC-269077](https://bugs.mojang.com/browse/MC-269077) - Sign editing screen uses menu_background.png
- [MC-269081](https://bugs.mojang.com/browse/MC-269081) - Some Realms icons are rendered behind the button in the main menu, instead of not being rendered at all
- [MC-269122](https://bugs.mojang.com/browse/MC-269122) - Editing signs causes background blur
- [MC-269136](https://bugs.mojang.com/browse/MC-269136) - Incorrect weapon.\* command suggestions
- [MC-269279](https://bugs.mojang.com/browse/MC-269279) - The "Normal user" button within the realms player menu is improperly capitalized

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/00cab0438130dc3e6ae91f53387bb96ae7986d31/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
