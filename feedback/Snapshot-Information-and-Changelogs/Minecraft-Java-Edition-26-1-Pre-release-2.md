---
title: Minecraft Java Edition - 26.1 Pre-release 2
date: 2026-03-26T13:27:29Z
updated: 2026-03-26T13:27:36Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/44608683881869-Minecraft-Java-Edition-26-1-Pre-release-2
hash:
  h_01KMN57HWTFYRYBV74PDXZW1KR: changes
  h_01KMN57HWW1JD39FHJYK12RDEX: ui
  h_01KMN57HWYHFN0VXTVE253XBVB: trades
  h_01KMN57HWZ32X42QXWC75GWR74: technical-changes
  h_01KMN57HWZC6GBPXB61B8DEBH4: text-components
  h_01KMN57HX04QC8VNZDTPDT524J: fixed-bugs-in-261-pre-release-2
  h_01KMN57HXBY4BX9JJ7WZT9SM00: get-the-pre-release
---

Today we're shipping another pre-release for 26.1 that includes tech changes and fixes to features included in the Tiny Takeover game drop.

Happy Friday mining!

## Changes

- Updated the dismount speed thresholds for Spears to match Bedrock
- Fixed issue with Baby Axolotl's right hind leg not moving correctly when swimming
- Baby Cat is now scaled up to be the same size as baby Ocelot
- Baby Horse model is no longer scaled up slightly

### UI

- Added a new display option called "Exclusive Fullscreen" which controls if fullscreen mode should take full control of a monitor
  - Defaults to false (i.e. non-exclusive mode)
  - Any change will be applied only after the game restarts
  - Warning: exclusive fullscreen mode might prevent use of input methods (IME)

### Trades

- The Master Librarian will now have three available trades to ensure that an enchanted book trade is always offered when using the Rebalance experiment

## Technical Changes

### Text components

- Components in server status messages (MotD) nested more than 16 times will now be discarded and replaced with an ellipsis

## Fixed bugs in 26.1 Pre-Release 2

- [MC-153831](https://bugs.mojang.com/browse/MC-153831) - Trader llamas spawned from breeding can despawn
- [MC-181169](https://bugs.mojang.com/browse/MC-181169) - Skeleton trapped horses with PersistenceRequired still despawn
- [MC-248092](https://bugs.mojang.com/browse/MC-248092) - Untamed cats on lead despawn when attached to fence post
- [MC-274238](https://bugs.mojang.com/browse/MC-274238) - Persistent trader llamas will still despawn when leashed to wandering traders
- [MC-303684](https://bugs.mojang.com/browse/MC-303684) - Hoglins despawn when attached to a lead
- [MC-303685](https://bugs.mojang.com/browse/MC-303685) - Zoglins despawn when attached to leads
- [MC-303749](https://bugs.mojang.com/browse/MC-303749) - Dolphins can despawn when attached to leads
- [MC-303750](https://bugs.mojang.com/browse/MC-303750) - Squids & glow squids can despawn when attached to leads
- [MC-304446](https://bugs.mojang.com/browse/MC-304446) - Activating a stasis chamber with a sponge deletes the ender pearl
- [MC-305123](https://bugs.mojang.com/browse/MC-305123) - Curse of Vanishing doesn't work when the item is equipped on an armor stand
- [MC-305196](https://bugs.mojang.com/browse/MC-305196) - Witches always miss their shots when close to their target
- [MC-306064](https://bugs.mojang.com/browse/MC-306064) - Mobs can be forced to look like they're dying while they aren't by using commands
- [MC-306327](https://bugs.mojang.com/browse/MC-306327) - The chat restriction warning ignores the Chat Width option
- [MC-306328](https://bugs.mojang.com/browse/MC-306328) - Using golden dandelions to unlock aging forcibly removes persistence of baby animals
- [MC-306351](https://bugs.mojang.com/browse/MC-306351) - Line spacing between the chat restriction warning and messages does not have a background
- [MC-306502](https://bugs.mojang.com/browse/MC-306502) - Uploading a world to a snapshot Realm wipes it
- [MC-306516](https://bugs.mojang.com/browse/MC-306516) - G-Sync cannot be enabled in the new borderless window mode
- [MC-306564](https://bugs.mojang.com/browse/MC-306564) - Item entities' health does not decrease uniformly when on cacti
- [MC-306601](https://bugs.mojang.com/browse/MC-306601) - The IME pre-edit window appears in the unfocused text box of the anvil UI when no items are placed in the anvil slots
- [MC-306626](https://bugs.mojang.com/browse/MC-306626) - Adult horses' old black dots markings aren't included in the "Programmer Art" resource pack
- [MC-306632](https://bugs.mojang.com/browse/MC-306632) - Baby undead horses age again
- [MC-306657](https://bugs.mojang.com/browse/MC-306657) - The models for baby horses and baby cats have a different scale compared to Bedrock Edition
- [MC-306658](https://bugs.mojang.com/browse/MC-306658) - Dolphins will let themselves drown even with ample access to air
- [MC-306709](https://bugs.mojang.com/browse/MC-306709) - Librarians' master level book trade is no longer guaranteed when Villager Trade Rebalance is enabled
- [MC-306741](https://bugs.mojang.com/browse/MC-306741) - Opening the chat forces a CJK input method when one is enabled in the system
- [MC-306798](https://bugs.mojang.com/browse/MC-306798) - Ender dragons with a DragonDeathTime of 200 or greater never disappear
- [MC-306812](https://bugs.mojang.com/browse/MC-306812) - Inventories with no text fields cause key binds to conflict with IME input methods
- [MC-306814](https://bugs.mojang.com/browse/MC-306814) - environment_attribute value providers give incorrect results on subsequent accesses within a tick
- [MC-306830](https://bugs.mojang.com/browse/MC-306830) - The mouse cursor now changes to the "not allowed" shape when hovering over part of the Creative mode inventory's Survival Inventory tab

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/f48ed6831e21ca9a94c508d7fef3e80d2fc7836e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
