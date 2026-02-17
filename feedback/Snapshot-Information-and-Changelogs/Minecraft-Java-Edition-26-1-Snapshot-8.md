---
title: Minecraft Java Edition - 26.1 Snapshot 8
date: 2026-02-17T16:58:21Z
updated: 2026-02-17T16:58:27Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43587607851661-Minecraft-Java-Edition-26-1-Snapshot-8
hash:
  h_01KHP8K6QA87CFP356KZ6VMDYD: changes
  h_01KHP8K6QEY5DJRPVBCWWKYXHQ: baby-mobs
  h_01KHP8K6QKK01SSMB4M0XCFFJE: creative-mode
  h_01KHP8K6QM30J7QFPSJ871KXFM: user-interface
  h_01KHP8K6QM34KDYT2F5BNZ156P: debug-screen
  h_01KHP8K6QNB2NP33NPK18RAWCC: default-jvm-options
  h_01KHP8K6QP9F1B7VJC1ZM9AQF4: technical-changes
  h_01KHP8K6QP707RHWS14XHXVRJ0: data-pack-version-992
  h_01KHP8K6QPY6MAN7CW1HPHB9NA: commands
  h_01KHP8K6QPPQH945ZFH0JMP6QD: changes-tofetchprofile
  h_01KHP8K6QRNV9EZ3ZR8J3JHQ65: text-components
  h_01KHP8K6QR5M6MEPAXGTP8E4RM: minecraftselector
  h_01KHP8K6QR4FDEA9S14C0G3586: minecraftnbt
  h_01KHP8K6QWG9W208FAHGY7VXKQ: resource-pack-version-811
  h_01KHP8K6QW87506VBYJ7WC4X54: ui-sprites
  h_01KHP8K6QW90JAZK0ZY4XXB3WQ: entity-textures
  h_01KHP8K6QZG7PKVHFPQRJG501S: fixed-bugs-in-261-snapshot-8
  h_01KHP8K6R5KMZ5NT3QE7Y0EWZH: get-the-snapshot
---

Get ready to meet the last baby mobs waddling into testing! This week's snapshot brings you the final gameplay features of our upcoming drop. Happy mining!

## Changes

- Updated the visuals of more baby mobs
- Deepslate can now be directly crafted into their cobbled, polished, brick, and tile variants in the Stonecutter
- Stone can now be directly crafted into cobbled variants in the Stonecutter
- Adult horse's blackdot markings have been updated to be visually closer to the new baby horse markings
- Updated some of the sound assets for the adult sound variants
- Fix a bug where Cat variant sounds stray_ambient and purreow weren't played

### Baby Mobs

- Updated visuals for the following mobs:
  - Panda
  - Hoglin
  - Zoglin
  - Strider
  - Snifflet
- Hitboxes have been re-adjusted to be able to fit in spaces 1 block high and 0.5 blocks wide for the following mobs:
  - Zombie
  - Husk
  - Drowned
  - Piglin
  - Zombified Piglin
  - Villager
  - Zombie Villager

### Creative Mode

- Using Ctrl + Pick input as an operator on players and mannequins will now show the same results as executing the /fetchprofile command for this entity would

### User Interface

- Input Method Editors (IME) candidates will now be shown in-game (on supported platforms, currently Windows and macOS) above currently edited text field
- Fullscreen no longer uses exclusive mode

#### Debug Screen

- Added a new entry called detailed_memory with additional information about used memory

### Default JVM Options

- Decreased the initial heap size to 2GB

> **Developer's Note**: *The intention of this change is to reduce the amount of crashes we're seeing in the latest snapshots. If you're experiencing crashes, please refer to the *[*help article*](../../help/Performance-Troubleshooting/Fix-Minecraft-Java-Edition-Game-Crashes-by-Checking-Memory-Allocation.md)* for more information on how to configure memory allocation.*

## Technical Changes

- The Data Pack version is now 99.2
- The Resource Pack version is now 81.1

## Data Pack Version 99.2

- Changes to the minecraft:nbt text component format

### Commands

#### Changes to /fetchprofile

- Added a new entity subcommand that will print profile information from entity in world
  - Syntax: /fetchprofile entity \<single entity selector\>
  - If targeted entity does not have profile (currently only Players and Mannequins do) this command will fail
  - Note that the profile is shown as-is - no additional resolving is done

### Text components

#### minecraft:selector

- Field selector no longer accepts trailing data after a selector

#### minecraft:nbt

- Tags resolved with the minecraft:nbt text component when the interpret field is set to false are now pretty-printed instead of being flattened into a single text component
- Contents of the nbt and block fields are no longer silently rejected when parsing fails
- Field entity no longer accepts trailing data after a selector
- A new option called plain has been added to remove styling from pretty-printed text
  - The plain and interpret options can't both be enabled at the same time

## Resource Pack Version 81.1

### UI Sprites

- Added new UI sprites:
  - gui/sprites/widget/preedit.png for IME preedit overlay background

### Entity Textures

- Added new entity textures:
  - entity/hoglin/hoglin_baby.png
  - entity/hoglin/zoglin_baby.png
  - entity/strider/strider_baby.png
  - entity/strider/strider_cold_baby.png
  - entity/sniffer/snifflet.png
  - entity/panda/aggresive_panda_baby.png
  - entity/panda/brown_panda_baby.png
  - entity/panda/lazy_panda_baby.png
  - entity/panda/playful_panda_baby.png
  - entity/panda/weak_panda_baby.png
  - entity/panda/worried_panda_baby.png
  - entity/panda/panda_baby.png

## Fixed bugs in 26.1 Snapshot 8

- [MC-98631](https://bugs.mojang.com/browse/MC-98631) - The heights of shields in first person are different depending on what hand you have them held in
- [MC-99647](https://bugs.mojang.com/browse/MC-99647) - The "below_name" scoreboard display slot doesn't work with non-player entities
- [MC-129886](https://bugs.mojang.com/browse/MC-129886) - Trying to place a block underneath min_y does not give an error message
- [MC-178713](https://bugs.mojang.com/browse/MC-178713) - Bone meal can be used on certain plants at build height, but they don't grow
- [MC-184432](https://bugs.mojang.com/browse/MC-184432) - There is no warning when plants are bonemealed, but cannot grow above or below world height limits
- [MC-184433](https://bugs.mojang.com/browse/MC-184433) - When applying bone meal to grass / ferns / nether fungi at the upper build limit, there is no warning, and the taller part of the plant is cut off
- [MC-254785](https://bugs.mojang.com/browse/MC-254785) - Bone meal is used when clicked on a bamboo stalk with a block above it
- [MC-264155](https://bugs.mojang.com/browse/MC-264155) - Bone meal doesn't work on grass blocks beneath cave air or void air
- [MC-305103](https://bugs.mojang.com/browse/MC-305103) - The panorama sometimes spins too fast when saving or loading a world
- [MC-305714](https://bugs.mojang.com/browse/MC-305714) - "/time set " is unable to decrease time
- [MC-305989](https://bugs.mojang.com/browse/MC-305989) - Golden dandelions do not stop baby brown mooshrooms from aging
- [MC-306019](https://bugs.mojang.com/browse/MC-306019) - Items added to \#cauldron_can_remove_dye by datapacks can't be undyed
- [MC-306196](https://bugs.mojang.com/browse/MC-306196) - Age-locked baby bees age while in the hive
- [MC-306314](https://bugs.mojang.com/browse/MC-306314) - The glowing effect is no longer visible
- [MC-306319](https://bugs.mojang.com/browse/MC-306319) - The content of the chat restrictions screen can shift off-center and overflow the edge of the game window when the game window is shrunken horizontally while the chat restrictions screen is open
- [MC-306321](https://bugs.mojang.com/browse/MC-306321) - The chat and chat restrictions screen don't update when changing the client chat option from that screen
- [MC-306326](https://bugs.mojang.com/browse/MC-306326) - Various block animations and particles in motion now jitter while the game is frozen
- [MC-306333](https://bugs.mojang.com/browse/MC-306333) - Grass blocks in dark forests no longer have a side overlay if Biome Blend is disabled
- [MC-306342](https://bugs.mojang.com/browse/MC-306342) - Stray adult cats play incorrect sounds
- [MC-306345](https://bugs.mojang.com/browse/MC-306345) - Baby zombies, gurgles, baby husks, and baby zombie villagers can no longer traverse one-block-high passages
- [MC-306364](https://bugs.mojang.com/browse/MC-306364) - Blocks rendered as block entities are now invisible in sections without regularly rendered blocks

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/24c981e6e36754872607fa684d1479fc47135f23/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
