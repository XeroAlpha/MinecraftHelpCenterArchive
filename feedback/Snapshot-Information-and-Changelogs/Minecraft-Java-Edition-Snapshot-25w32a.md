---
title: Minecraft Java Edition - Snapshot 25w32a
date: 2025-08-05T14:10:21Z
updated: 2025-09-09T11:33:30Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/38580678455437-Minecraft-Java-Edition-Snapshot-25w32a
hash:
  h_01K4Q4086YPVW01F2HWZ4JBMXN: new-features
  h_01K4Q4086ZQGAE7D2SHZTMH4N9: copper-decorations
  h_01K4Q4086ZMMCS6MJ2DFVBPJZ6: changes
  h_01K4Q4086ZWWA0C8HYCAKKKPW1: minor-tweaks-to-blocks-items-and-entities
  h_01K4Q4086Z59QM2A52BDM3FKVE: recipes
  h_01K4Q4086ZW7QENZ8NXZES0XSZ: technical-changes
  h_01K4Q4086ZZ43EGYGS0WRMN59B: data-pack-version-830
  h_01K4Q4086Z6474GQEHG3H2FPD1: entity-data
  h_01K4Q4086Z44QX3XEJFGQQKJG0: copper_golem
  h_01K4Q4086Z5E1DP7FCAREH6PB0: text-rendering
  h_01K4Q4086Z5XTXRDCHPE0Y9R51: objecttext-component
  h_01K4Q4086ZPPV76Y2WD08Z5SG8: loot-tables
  h_01K4Q4086ZSJ6BCG2SAJEDX0BQ: tags
  h_01K4Q4086ZG1200B9JWW5RG93W: block-tags
  h_01K4Q4086ZVRYTRKZZ6SVEH7G7: item-tags
  h_01K4Q4086ZPKBH9X5M50S4PADY: resource-pack-version-651
  h_01K4Q4086ZQQR0E6BHC47JHB9G: block-sprites
  h_01K4Q4086ZJYB98KCRYKY7MJJ5: item-sprites
  h_01K4Q4086ZMAZR6BH8T1STTR5C: particles
  h_01K1X92J38C16FSH1Z9C671QXM: fixed-bugs-in-25w32a
  h_01K1X92J3P8QEKDX36657FHZ19: get-the-snapshot
---

Another Tuesday, another Snapshot release! Alongside technical updates and bug fixes, this week we're introducing a copper-y collection of goodies from our third game drop of the year: Build with copper torches, lanterns, chains, and bars – and watch them develop that stunning signature patina. With this week's release, you'll also find that items displayed in shelves have learned the noble art of sitting down.

Happy mining!

## New Features

- Added Copper Decorations

### Copper Decorations

- Added Copper Torch
  - A green variant of the Torch crafted from a Copper Nugget, Coal, and Stick
  - Functionally identical to the Torch
- Added Copper Bars
  - Functions like the existing Iron Bars block
  - Made from copper and oxidizes over time
- Added Copper Chain
  - Functions like the existing Chain block (now renamed to Iron Chain)
  - Made from copper and oxidizes over time
- Added Copper Lantern
  - Crafted similarly to a regular Lantern but uses Copper and a Copper Torch
  - The lantern itself oxidizes, changing its look as it ages
  - Functionally identical to the Lantern

## Changes

- The Chain block has been renamed to "Iron Chain"

### Minor Tweaks to Blocks, Items and Entities

- Items on the Shelf have been re-positioned to sit on the Shelf
- All Copper Golem Statues now always drop as item when mined
- All Copper Golem Statues now pop off as an item when pushed by a piston

### Recipes

- Changed the Copper Trapdoor recipe to use 4 Copper Ingots instead of 6

## Technical Changes

- The Data Pack version is now 83.0
- The Resource Pack version is now 65.1
- Added a way to use GUI and item sprites in text

## Data Pack Version 83.0

### Entity Data

#### copper_golem

- The weather_state field now expects a string id instead of integer id
  - 0 -\> unaffected
  - 1 -\> exposed
  - 2 -\> weathered
  - 3 -\> oxidized

### Text rendering

#### object Text Component

- New text component with type object has been added
- This component will display a single sprite from sprite atlas as a character
- Sprites are always rendered as a rectangle, 8x8 pixels in size
- Format:
  - atlas - namespaced ID of a sprite atlas, default value: minecraft:blocks
  - sprite - namespaced ID of a sprite in atlas, for example item/porkchop

General note about atlas contents:

- Sprite Atlases contain textures for items, blocks, mob effects, GUI elements, etc.
- Contents are controlled by files in assets/minecraft/atlases/ directory in a resource pack
- Current contents can be reviewed with the F3+S key combination

### Loot Tables

- Added harvest/sweet_berry_bush loot table for drops when a Sweet Berry Bush with Sweet Berries is harvested by interacting with it

### Tags

#### Block Tags

- Added \#chains - all Chain blocks
- Added \#lanterns - all Lantern blocks
- Added \#bars - all Bar blocks

#### Item Tags

- Added \#chains - all Chain block items
- Added \#lanterns - all Lantern block items
- Added \#bars - all Bar block items

## Resource Pack Version 65.1

### Block Sprites

Added new block sprites:

- copper_bars
- copper_chain
- copper_lantern
- copper_torch
- exposed_copper_bars
- exposed_copper_chain
- exposed_copper_lantern
- exposed_copper_torch
- oxidized_copper_bars
- oxidized_copper_chain
- oxidized_copper_lantern
- oxidized_copper_torch
- weathered_copper_bars
- weathered_copper_chain
- weathered_copper_lantern
- weathered_copper_torch

### Item Sprites

Added new item sprites:

- copper_chain
- copper_lantern
- exposed_copper_chain
- exposed_copper_lantern
- oxidized_copper_chain
- oxidized_copper_lantern
- weathered_copper_chain
- weathered_copper_lantern

### Particles

Added new particle:

- copper_fire_flame

 

## Fixed bugs in 25w32a

- [MC-163218](https://bugs.mojang.com/browse/MC-163218) - Players with the Sneak option set to "Toggle" can sneak while in GUIs
- [MC-174759](https://bugs.mojang.com/browse/MC-174759) - Dragon eggs can be teleported to a height below void
- [MC-257540](https://bugs.mojang.com/browse/MC-257540) - Sheep eat half as often as they did before 21w39a
- [MC-273943](https://bugs.mojang.com/browse/MC-273943) - Sweet berries drop from harvested bushes is hardcoded
- [MC-276431](https://bugs.mojang.com/browse/MC-276431) - Dragon egg teleports above the build height limit and deletes itself
- [MC-279548](https://bugs.mojang.com/browse/MC-279548) - TNT minecart does not remember ignition source when exploding from a fall
- [MC-295841](https://bugs.mojang.com/browse/MC-295841) - Interactive collision check path is broken
- [MC-296054](https://bugs.mojang.com/browse/MC-296054) - Fast non-projectile entity movements may fail to apply block effects from blocks around the starting position when moving in positive directions
- [MC-296055](https://bugs.mojang.com/browse/MC-296055) - Slow non-projectile entity movements may fail to apply block effects from origin block
- [MC-296057](https://bugs.mojang.com/browse/MC-296057) - Sideways non-projectile movements may fail to apply block effects from blocks around start of sideways motion
- [MC-296372](https://bugs.mojang.com/browse/MC-296372) - Teleport duration is unreliable as of 1.21.5
- [MC-299314](https://bugs.mojang.com/browse/MC-299314) - Breaking jukeboxes in certain ways doesn't stop the music
- [MC-299627](https://bugs.mojang.com/browse/MC-299627) - Entity interpolation for high speed projectiles is wildly inaccurate
- [MC-299770](https://bugs.mojang.com/browse/MC-299770) - Chunks loaded by ender pearls permanently unload upon player death even when enderPearlsVanishOnDeath is set to false
- [MC-299837](https://bugs.mojang.com/browse/MC-299837) - Running two or more /rotate commands in the same tick only applies the rotation of the last command
- [MC-299872](https://bugs.mojang.com/browse/MC-299872) - The freezing overlay flashes when a freezing player touches fire
- [MC-299913](https://bugs.mojang.com/browse/MC-299913) - The "You don't seem to have a Realm..." focusable text widget now has a black background
- [MC-300051](https://bugs.mojang.com/browse/MC-300051) - The top part of worn leggings does not render
- [MC-300092](https://bugs.mojang.com/browse/MC-300092) - F3 pie chart particle entries are missing names
- [MC-300094](https://bugs.mojang.com/browse/MC-300094) - Entities' held items no longer follow their arm movements when they have the invisibility effect
- [MC-300100](https://bugs.mojang.com/browse/MC-300100) - The “biome” debug option no longer has a space before its biome name
- [MC-300105](https://bugs.mojang.com/browse/MC-300105) - The player can drown while the game is paused
- [MC-300108](https://bugs.mojang.com/browse/MC-300108) - Villagers' and zombie villagers' clothes are incomplete
- [MC-300113](https://bugs.mojang.com/browse/MC-300113) - pack.mcmeta no longer accepts the longform object syntax in the supported_formats field
- [MC-300121](https://bugs.mojang.com/browse/MC-300121) - Interacting with a group of more than 3 connected shelves causes the game to crash
- [MC-300122](https://bugs.mojang.com/browse/MC-300122) - Certain parts of horse armor are sometimes invisible
- [MC-300131](https://bugs.mojang.com/browse/MC-300131) - The "debug.entry.currently.inF3" string is improperly capitalized
- [MC-300136](https://bugs.mojang.com/browse/MC-300136) - Held item positions are synchronized between entities of the same model in view
- [MC-300145](https://bugs.mojang.com/browse/MC-300145) - Players can use items while their inventories are open when the “Use Item/Place Block” option is set to “Toggle”
- [MC-300146](https://bugs.mojang.com/browse/MC-300146) - Exiting interfaces is incredibly difficult when the “Use Item/Place Block” option is set to “Toggle”
- [MC-300153](https://bugs.mojang.com/browse/MC-300153) - The inner cubes of slimes are sometimes invisible from the outside
- [MC-300155](https://bugs.mojang.com/browse/MC-300155) - Players can freeze while standing in powder snow despite the game being paused
- [MC-300164](https://bugs.mojang.com/browse/MC-300164) - The value of the "Sprint Window" option is not saved
- [MC-300165](https://bugs.mojang.com/browse/MC-300165) - Players are damaged when blocking attacks with shields that disable shields
- [MC-300166](https://bugs.mojang.com/browse/MC-300166) - When looking_at_block or looking_at_fluid is enabled in the debug options, FPS is impacted by server tick rate
- [MC-300168](https://bugs.mojang.com/browse/MC-300168) - All shelf variants are in the redstone section of the creative inventory
- [MC-300180](https://bugs.mojang.com/browse/MC-300180) - Debug screen text now stays on the screen in F1
- [MC-300187](https://bugs.mojang.com/browse/MC-300187) - Interacting with items with certain components in the inventory causes a crash
- [MC-300193](https://bugs.mojang.com/browse/MC-300193) - Dying and respawning within the same dimension consistently shows a loading terrain screen
- [MC-300196](https://bugs.mojang.com/browse/MC-300196) - Local Difficulty debug information flickers if it is open while GUI is hidden
- [MC-300214](https://bugs.mojang.com/browse/MC-300214) - The shadows of baby mobs are now of the same size as those of their adult counterparts
- [MC-300235](https://bugs.mojang.com/browse/MC-300235) - First number in E counter is always stuck at 0
- [MC-300248](https://bugs.mojang.com/browse/MC-300248) - Subtitles/closed captions obstruct the inventory UI
- [MC-300275](https://bugs.mojang.com/browse/MC-300275) - Pausing while riding a strider on top of lava sets the player on fire
- [MC-300305](https://bugs.mojang.com/browse/MC-300305) - When multiple people use fishing rods, an additional black line is drawn
- [MC-300340](https://bugs.mojang.com/browse/MC-300340) - Continuously clicking "Continue" on the welcome page resets the button disappearance animation progress
- [MC-300394](https://bugs.mojang.com/browse/MC-300394) - Oxidized/waxed oxidized copper golems, statue and entity versions, have the wrong pixels underneath their feet compared to their other counterparts
- [MC-300421](https://bugs.mojang.com/browse/MC-300421) - Inconsistent capitalization for F3+F5 description in F3+Q debug menu
- [MC-300440](https://bugs.mojang.com/browse/MC-300440) - Elytra consumes durability while the game is paused in singleplayer
- [MC-300464](https://bugs.mojang.com/browse/MC-300464) - The debug crosshair is rendered in third person

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/c98a125ca315cac45bee91a7ecbc4920007ac5ff/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
