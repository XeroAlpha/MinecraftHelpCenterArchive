---
title: Minecraft Java Edition - 26.1 Snapshot 10
date: 2026-03-03T15:28:05Z
updated: 2026-03-03T15:29:34Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/43969369435917-Minecraft-Java-Edition-26-1-Snapshot-10
hash:
  h_01KJT505BZ7PDGNN46QYWBK493: changes
  h_01KJT505C5ZMWJYR5PMJTWJ0M2: ui
  h_01KJT505C61CXMGBGX1RAK6DK0: technical-changes
  h_01KJT505C70EYBJ1PF2TJHW229: data-pack-version-993
  h_01KJT505C7SASC09F5AES5SF8W: particles
  h_01KJT505C90ABA66420VVWN0F8: resource-pack-version-82
  h_01KJT505C962VPH7XNTY548HW2: fixed-bugs-in-261-snapshot-10
  h_01KJT505CHH628B9ZEWJDXNV5J: get-the-snapshot
---

Another Tuesday, another snapshot! This week's release brings you some helpful new particles designed to better tell if your golden dandelion is keeping your mobs young or if you're about to reintroduce the concept of aging into their blocky lives. We've also shrunk baby zombie mob heads and fixed a collection of bugs, as we always do.

Happy mining!

## Changes

- Fix pixel gap in Snifflet texture
- Fix Strider baby not having its bristles animated
- Striders now correctly inherit the warmth of the Strider they are standing on, matching Bedrock
- Reduced the head size of the following baby mob models:
  - Zombie
  - Husk
  - Drowned
- Golden Dandelion now has different particles depending on if it is used to start or stop aging
  - When aging is stopped green particles moving downwards will be shown
  - When aging is started again green particles moving upwards will be shown
- Small Armor Stand now displays correctly by using the adult armor and scaling it down

### UI

- If there are no screens open, IME input will be canceled
- IME will be opened when a text input gains focus and closed when a text input loses focus
- sound_cache debug entry has been added

## Technical Changes

- The Data Pack version is now 99.3
- The Resource Pack version is now 82

## Data Pack Version 99.3

### Particles

- Added pause_mob_growth - particles showing on a baby mob which has had its aging stopped using a Golden Dandelion
- Added reset_mob_growth - particles showing on a baby mob which has had its aging reset and started using a Golden Dandelion

## Resource Pack Version 82

- Updated textures for baby Zombie, baby Husk and Gurgle with smaller heads

## Fixed bugs in 26.1 Snapshot 10

- [MC-91132](https://bugs.mojang.com/browse/MC-91132) - No cross-platform CJK IME support
- [MC-222949](https://bugs.mojang.com/browse/MC-222949) - You can use tridents enchanted with riptide while riding entities
- [MC-305369](https://bugs.mojang.com/browse/MC-305369) - Trying to attach a leash to a fence outside its reach places a ghost leash knot and plays a sound
- [MC-305471](https://bugs.mojang.com/browse/MC-305471) - Cacti appear with seams on the edges and corners when using higher resolution texture packs with mipmaps enabled
- [MC-305494](https://bugs.mojang.com/browse/MC-305494) - Rabbits receive damage if they jump when there's a block above them
- [MC-305507](https://bugs.mojang.com/browse/MC-305507) - Baby cats' model is not scaled
- [MC-306276](https://bugs.mojang.com/browse/MC-306276) - Worried pandas no longer shake and hide their faces during thunderstorms
- [MC-306300](https://bugs.mojang.com/browse/MC-306300) - The riding positions of baby zombies, husks, drowned, piglins, zombified piglins, and zombie villagers are offset, causing them to visually float
- [MC-306304](https://bugs.mojang.com/browse/MC-306304) - The legs of baby zombies, husks, drowned, piglins, zombified piglins, and zombie villagers clip through their worn armor when their limbs move
- [MC-306346](https://bugs.mojang.com/browse/MC-306346) - Baby piglin and zombified piglin legs don't move the same way as their adult counterparts do
- [MC-306361](https://bugs.mojang.com/browse/MC-306361) - Hollow spaces don't render for a while when moving into a block in Spectator mode
- [MC-306376](https://bugs.mojang.com/browse/MC-306376) - Armor now appears incorrectly on small armor stands
- [MC-306454](https://bugs.mojang.com/browse/MC-306454) - The legs of baby striders detach from their bodies when attacked
- [MC-306468](https://bugs.mojang.com/browse/MC-306468) - The IME pre-edit window doesn't show up in the Creative mode inventory
- [MC-306486](https://bugs.mojang.com/browse/MC-306486) - Using an IME keyboard makes some inputs not register
- [MC-306501](https://bugs.mojang.com/browse/MC-306501) - Changing game rules from the world creation screen has no effect
- [MC-306539](https://bugs.mojang.com/browse/MC-306539) - Entities now appear darker than blocks on brightness values other than "Bright"
- [MC-306565](https://bugs.mojang.com/browse/MC-306565) - Farmers now sell 4 cookies instead of 18

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/2781a3d4108bffe9c38523ef6e6ddb1783afce52/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
