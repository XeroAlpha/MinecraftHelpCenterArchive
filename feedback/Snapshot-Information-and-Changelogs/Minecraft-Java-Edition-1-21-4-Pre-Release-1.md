---
title: Minecraft Java Edition - 1.21.4 Pre-Release 1
date: 2024-11-20T15:44:00Z
updated: 2024-11-20T15:53:41Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/32036384521357-Minecraft-Java-Edition-1-21-4-Pre-Release-1
hash:
  h_01JD53FVY3ZW8VC2RSF9S69NSD: technical-changes
  h_01JD53FVY3HFJS77GQW90XGVMG: resource-pack-version-46
  h_01JD53FVY36J046F28Q2W8B4T1: item-models
  h_01JD53FVY3YG3XKZ0P58MVWYWS: minecraftmodel-item-model-type
  h_01JD53FVY35WJY1NT1Z9QEYWF5: added-minecraftteam-tint-source-type
  h_01JD53FVY3996SBX84M1ZNSB21: changed-minecrafthead-special-model-type
  h_01JD53FVY3E1XB26ZV7WJZN6MD: added-minecraftview_entity-boolean-property
  h_01JD53FVY3NVDMVE7Q0NJYR09T: renamed-property-minecraftholder_type-to-minecraftcontext_entity_type
  h_01JD53FVY3GE6WQM7F1QG2PNMW: added-minecraftcontext_dimension-property
  h_01JD53FVY4Z3QFCBD0CR32Q407: changed-minecrafttime-numeric-property
  h_01JD53FVY4M6AHZPY88RNWTP5V: changed-minecraftcompass-numeric-property
  h_01JD53FVY4CFZQ846ARJQVMHAY: added-minecraftempty-item-model-type
  h_01JD53FVY4H9CJ9GYF7PDV1DSB: fixed-bugs-in-1214-pre-release-1
  h_01JD53FVY4MF71MD9AZXC36TCP: get-the-pre-release
---

The first pre-release of Minecraft 1.21.4 is now available. Today's update and for the remainder of the 1.21.4 cycle, you will mostly see bug fixes and tweaks. In addition to that, pre-releases don't follow the regular snapshot cadence of releasing only on Wednesdays, so keep an eye out for the next pre-release.

As always, a big thank you to the community for your feedback, bugs reported, and awesome ideas throughout the snapshot series. Let the pre-releases commence!

 

# Technical Changes

- The Resource Pack version is now 46
- Similarly to block items, Spawn Eggs for entities that could execute operator-only commands now have a warning in tooltip

## Resource Pack Version 46

- Added a way of suppressing first-person hand animation on item change for specific models
- Unifont has been updated to 16.0.01

## Item models

- A new field has been added to the client-side item info format (i.e. files in /assets/\*/items/\*.json)
  - hand_animation_on_swap - boolean field describing if down-and-up animation should be played in first-person view when item stack is changed (either type, count or components), default: true
    - only value from new item is taken into account
    - does not control "pop" animation in GUI when item is picked or changes count

### minecraft:model item model type

#### Added minecraft:team tint source type

- Returns team color of context entity, if any
- Fields:
  - default - RGB value to return when there is no context entity, entity is not in a team or team has no color

#### Changed minecraft:head special model type

- Added field animation - float controlling head animation (like Piglin ears or Ender Dragon jaw), default: 0.0

#### Added minecraft:view_entity boolean property

- When not spectating, returns true if context entity is the local player entity, i.e. one controlled by client
- When spectating, returns true if context entity is the spectated entity
- If context entity is not present, will return false
- No fields

#### Renamed property minecraft:holder_type to minecraft:context_entity_type

**Developer's Note**: *Context entities were initially used only for compasses and clocks, which means that type is available only in rendering contexts where those items would show correct reading (see [MC-186797](https://bugs.mojang.com/browse/MC-186797) and related bugs). The name change has been made to better reflect that.*

#### Added minecraft:context_dimension property

- Returns the ID of the dimension in context, if any
- No fields
- Values: namespaced dimension ID (like minecraft:overworld)

#### Changed minecraft:time numeric property

- Removed field natural_only
- Added field source - time source, possible values:
  - daytime - time of day
  - moon_phase - moon phase
  - random - random value

#### Changed minecraft:compass numeric property

- Added value none to field target which always returns an invalid target

#### Added minecraft:empty item model type

- Does not render anything
- No fields

## Fixed bugs in 1.21.4 Pre-Release 1

- [MC-128225](https://bugs.mojang.com/browse/MC-128225) - '/data remove' can't remove the NBT "CustomName"
- [MC-138100](https://bugs.mojang.com/browse/MC-138100) - /data remove doesn't work for the Jukebox's RecordItem tag
- [MC-179815](https://bugs.mojang.com/browse/MC-179815) - Data command doesn't remove leash from a mob
- [MC-207605](https://bugs.mojang.com/browse/MC-207605) - /data remove entity \[tamed wolf\] Owner does not remove ownership of the wolf
- [MC-265788](https://bugs.mojang.com/browse/MC-265788) - The "Start free Snapshot Realm" element can be selected or remain selected causing its tooltip to erroneously be visible when other interfaces are open
- [MC-278134](https://bugs.mojang.com/browse/MC-278134) - The TAB key cannot be used to select messages to report after clicking the "X message(s) hidden" element
- [MC-278193](https://bugs.mojang.com/browse/MC-278193) - Baby piglins can't decide between crossbows and golden items
- [MC-278257](https://bugs.mojang.com/browse/MC-278257) - Oxygen bar animation can be interrupted by applying water breathing
- [MC-278290](https://bugs.mojang.com/browse/MC-278290) - Using items while swimming or walking underwater doesn't slow the player down
- [MC-278300](https://bugs.mojang.com/browse/MC-278300) - Creakings struck by lightning show visual fire
- [MC-278302](https://bugs.mojang.com/browse/MC-278302) - Bundle always takes out first item and ignores selected item
- [MC-278311](https://bugs.mojang.com/browse/MC-278311) - Respawned creakings from creaking hearts don't persist when the world is reloaded
- [MC-278312](https://bugs.mojang.com/browse/MC-278312) - Creakings spawned from a creaking heart can be name-tagged once again
- [MC-278387](https://bugs.mojang.com/browse/MC-278387) - Creaking respawns when going to the nether and back
- [MC-278390](https://bugs.mojang.com/browse/MC-278390) - Opening shulkers no longer trigger tripwire or pressure plates

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/4e5fdbf4ecd53962e72a75d4abfc2455e0ae0c1b/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
