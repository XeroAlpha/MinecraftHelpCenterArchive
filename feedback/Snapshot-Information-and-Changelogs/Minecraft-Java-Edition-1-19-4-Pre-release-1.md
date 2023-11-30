---
title: "Minecraft: Java Edition - 1.19.4 Pre-release 1 "
date: 2023-02-22T17:42:12Z
updated: 2023-02-22T17:42:17Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/13332060932621-Minecraft-Java-Edition-1-19-4-Pre-release-1-
---

We are now releasing the first pre-release for Minecraft 1.19.4. This pre-release contains a new high contrast accessibility setting, some updates to the Create World tab visuals, a new execute subcommand, improvements to startup performance, and lots of bug fixes!

For the remainder of the 1.19.4 cycle, you should mostly see bugs being fixed. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing on Wednesdays, so keep an eye out for the next pre-release.

Happy mining!

# IMPORTANT NOTE

- Experimental 1.20 worlds created in the previous snapshot (23w07a) can no longer be opened in this version

# CHANGES

- The enchantment glint for items in the inventory has been made more visible
- The default value of the "Glint Strength" setting has been reduced to 75%
- Potions no longer have an enchantment glint due to it obscuring the color of the potion contents
- Added a notification system for Realms to tell you about important information about your Realm

## ACCESSIBILITY

- Added a built-in resource pack that enhances the contrast of UI elements
  - The resource pack can be enabled in the Accessibility Options screenor manually in the Resource Pack screen
  - This is only available in the menus for now, but we’ll be looking to bring this to gameplay UIs in the future as well

## UPDATED CREATE NEW WORLD SCREEN

- The appearance of the tab bar in the Create New World screen has been updated
  - Tabs now have unique visuals instead of being traditional buttons
  - The tabs now align to the center of the screen
  - The content has been aligned to the top of the screen

# TECHNICAL CHANGES

- The resource pack version is now 13
- Changed the following game events:
  - item_interact_finish now has a vibration frequency of 2 instead of 14
- New Damage Type Tag: bypasses_cooldown - damage types with this tag bypass the regular invincibility time after taking damage
- New Entity Type Tag: fall_damage_immune - entity types with this tag do not take fall damage

## RESOURCE PACK FORMAT

- The enchantment glint now has two separate texture files: enchanted_glint_entity.png and enchanted_glint_item.png

## COMMANDS

#### EXECUTE POSITIONED OVER

New execute sub-command for finding positions on top of a heightmap. Changes the height of the execution position to be on top of the given heightmap. Syntax:

- execute positioned over \<heightmap\>

##### Heightmaps

A heightmap records the highest position in a column of blocks according to some criteria. Available options:

- world_surface: Any non-air block
- motion_blocking: Any motion blocking material (e.g. ignores flowers and grass)
- motion_blocking_no_leaves: Any non-leaf motion blocking material
- ocean_floor: Any non-fluid motion blocking material

# CHANGES FOR EXPERIMENTAL FEATURES

- The Brush crafting recipe now uses a Feather, Copper Ingot and Stick in a vertical line
- The Sniffer Spawn Egg colors have been updated
- The recipe for the Decorated Pot made of all Bricks can now be found in the Recipe Book

# FIXED BUGS IN 1.19.4 PRE-RELEASE 1

- [MC-106484](https://bugs.mojang.com/browse/MC-106484) - Some potions are indistinguishable by color
- [MC-132200](https://bugs.mojang.com/browse/MC-132200) - Ghost block hoppers appear if summoned by command to powered location
- [MC-253210](https://bugs.mojang.com/browse/MC-253210) - Goats will panic when receiving fall damage
- [MC-253211](https://bugs.mojang.com/browse/MC-253211) - Frogs will panic when receiving fall damage
- [MC-256484](https://bugs.mojang.com/browse/MC-256484) - Sitting camels don't stand up and begin following players that are tempting them with their favorite food
- [MC-256489](https://bugs.mojang.com/browse/MC-256489) - Sitting camels that are in love don't attempt to stand up and approach one another to breed
- [MC-256731](https://bugs.mojang.com/browse/MC-256731) - The sounds of camels recovering aren't controlled by the "Friendly Creatures" sound slider
- [MC-256861](https://bugs.mojang.com/browse/MC-256861) - Camels panic when receiving fall damage
- [MC-259192](https://bugs.mojang.com/browse/MC-259192) - Server/client position desync when running /ride too fast and manually dismounting
- [MC-259246](https://bugs.mojang.com/browse/MC-259246) - Passengers on an ender dragon ride too high
- [MC-259576](https://bugs.mojang.com/browse/MC-259576) - Passenger's riding position is too high on a phantom
- [MC-259613](https://bugs.mojang.com/browse/MC-259613) - Enchantment glint is hardly noticeable on some items, even when the Glint Strength is set to 100%
- [MC-259630](https://bugs.mojang.com/browse/MC-259630) - Camels, horses and mules bounce high into the air when being ridden across water
- [MC-259882](https://bugs.mojang.com/browse/MC-259882) - Axolotls no longer give the Regeneration effect to nearby players after they kill a mob, and do not grant "The Healing Power of Friendship!" advancement
- [MC-259893](https://bugs.mojang.com/browse/MC-259893) - Long texts on buttons scroll too fast
- [MC-259917](https://bugs.mojang.com/browse/MC-259917) - Entities immune to fall damage are damaged when using minecraft:fall damage type in /damage
- [MC-259918](https://bugs.mojang.com/browse/MC-259918) - Text scrolling speed isn't accessible-friendly
- [MC-259920](https://bugs.mojang.com/browse/MC-259920) - The "ITEM_INTERACT_FINISH" game event overrides other game events causing several actions to not produce their intended vibration frequency
- [MC-260030](https://bugs.mojang.com/browse/MC-260030) - Starting data.Main for data generation crashes
- [MC-260033](https://bugs.mojang.com/browse/MC-260033) - Torchflowers cannot be used to craft suspicious stew
- [MC-260035](https://bugs.mojang.com/browse/MC-260035) - Chickens and parrots are not tempted by torchflower seeds
- [MC-260051](https://bugs.mojang.com/browse/MC-260051) - Bees are not tempted by or attempt to pollinate Pink Petals and Torchflowers
- [MC-260059](https://bugs.mojang.com/browse/MC-260059) - Pigs do not seem to spawn in Cherry Grove biome
- [MC-260071](https://bugs.mojang.com/browse/MC-260071) - Sniffer Digging Sounds can be heard from way too far
- [MC-260089](https://bugs.mojang.com/browse/MC-260089) - Sniffers panic when receiving fall damage
- [MC-260092](https://bugs.mojang.com/browse/MC-260092) - Sniffers' hitboxes are too small resulting in sniffers not being rendered from certain angles despite being visible on the screen
- [MC-260098](https://bugs.mojang.com/browse/MC-260098) - Sniffers aren't required for the "Two by Two" advancement
- [MC-260102](https://bugs.mojang.com/browse/MC-260102) - Torchflower seeds don't contribute to the "A Seedy Place" advancement
- [MC-260107](https://bugs.mojang.com/browse/MC-260107) - Sniffers don't swim properly and their walking animations freeze when in water
- [MC-260109](https://bugs.mojang.com/browse/MC-260109) - Sniffers do not rotate their head to look at the player
- [MC-260118](https://bugs.mojang.com/browse/MC-260118) - Disabling experimental features on the world creation screen causes pack validation to fail
- [MC-260121](https://bugs.mojang.com/browse/MC-260121) - Hoppers are ghost blocks for other players when placed on jukeboxes that are playing music
- [MC-260125](https://bugs.mojang.com/browse/MC-260125) - Sniffer's head occasionally disappears
- [MC-260126](https://bugs.mojang.com/browse/MC-260126) - Using pick block function on grown torchflower crop gives torchflower seeds instead of the plant item
- [MC-260149](https://bugs.mojang.com/browse/MC-260149) - Cherry logs can't be used to craft campfires
- [MC-260156](https://bugs.mojang.com/browse/MC-260156) - The sound of the torchflower being broken after growing is different than the sound of it breaking after being placed
- [MC-260157](https://bugs.mojang.com/browse/MC-260157) - On existing snapshot servers, cherry grove biomes cannot be found with "/locate", nor do they generate
- [MC-260168](https://bugs.mojang.com/browse/MC-260168) - Torchflower crop aren't part of the \#crops block tag
- [MC-260171](https://bugs.mojang.com/browse/MC-260171) - Cherry Leaves and Pink Petals aren't part of the \#flower block tag
- [MC-260172](https://bugs.mojang.com/browse/MC-260172) - Torchflower isn't part of the \#flowers block or item tags
- [MC-260181](https://bugs.mojang.com/browse/MC-260181) - Torchflower seeds are not grouped with other seeds in the creative inventory
- [MC-260185](https://bugs.mojang.com/browse/MC-260185) - Pink Petals aren't insta-mined
- [MC-260189](https://bugs.mojang.com/browse/MC-260189) - Cherry Sapling is not part of the \#saplings item tag
- [MC-260191](https://bugs.mojang.com/browse/MC-260191) - Cherry Leaves aren't part of the \#leaves and \#complete_find_tree_tutorial item tags
- [MC-260192](https://bugs.mojang.com/browse/MC-260192) - You can't make Charcoal with Cherry Logs or Wood
- [MC-260193](https://bugs.mojang.com/browse/MC-260193) - Cherry Logs and Wood can't be used as fuel in furnaces
- [MC-260194](https://bugs.mojang.com/browse/MC-260194) - Create new world screen appears even when world is created; clicking on button causes freeze or crash
- [MC-260195](https://bugs.mojang.com/browse/MC-260195) - Cherry Logs and Wood are missing from the \#log, \#logs_that_burn and \#complete_find_tree_tutorial item tags
- [MC-260209](https://bugs.mojang.com/browse/MC-260209) - breaks_decorated_pots Item Tag is in the Vanilla datapack, not 1.20
- [MC-260210](https://bugs.mojang.com/browse/MC-260210) - Brush Recipe is in the Vanilla datapack, not 1.20

# GET THE PRE-RELEASE

Pre-release are available for Minecraft: Java Edition. To install the Pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/0bc471b96bb0edbc2f03e6cdc3ad981f7a4f5f8a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
