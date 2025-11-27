---
title: Minecraft Java Edition - 1.21.11 Pre-Release 3
date: 2025-11-27T09:07:26Z
updated: 2025-11-27T09:07:30Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/41466420931853-Minecraft-Java-Edition-1-21-11-Pre-Release-3
hash:
  h_01KB28WCBHRPZBPGCZWGZHV9Z8: new-features
  h_01KB28WCBH4XY4FHVSCYEJ53M7: spear-weapon
  h_01KB28WCBK2JJ52B784DV150V8: changes
  h_01KB28WCBM203TPPCVP1QRZV68: fixed-bugs-in-12111-pre-release-3
  h_01KB28WCBVP7H58E997TG6YXCJ: get-the-pre-release
---

We'll kick the week off with a third pre-release for the Mounts of Mayhem drop. This pre-release includes bug fixes and spear weapon tweaks.

Happy mining!

## New Features

### Spear Weapon

- While charging, the Spear hit animation and sound now play only after the previous hit animation has fully completed
- While charging in first person, the Spear head now gradually rotates to a fully vertical position over time, matching the behavior in third person

## Changes

- The "See-Through Leaves" video setting is now turned off on the "Fast" graphics preset
- Tamed horses no longer run into cacti or sweet berry bushes

## Fixed bugs in 1.21.11 Pre-Release 3

- [MC-302900](https://bugs.mojang.com/browse/MC-302900) - Spears' reach overrides the player's entity interaction range
- [MC-303036](https://bugs.mojang.com/browse/MC-303036) - Zombie nautiluses with a negative age possess a hitbox the size of a baby nautilus
- [MC-303709](https://bugs.mojang.com/browse/MC-303709) - Dumping dynamic textures with large textures makes the game crash
- [MC-304045](https://bugs.mojang.com/browse/MC-304045) - Spear hit sounds play the normal hit sounds
- [MC-304362](https://bugs.mojang.com/browse/MC-304362) - RGSS breaks permanently when toggling hardware anisotropic filtering
- [MC-304363](https://bugs.mojang.com/browse/MC-304363) - Copper golem statues render at the wrong position in shelves when reloading resource packs
- [MC-304407](https://bugs.mojang.com/browse/MC-304407) - Charge attacks are impossible when looking at a mob that's between 3 and 4.5 blocks away
- [MC-304440](https://bugs.mojang.com/browse/MC-304440) - The mouse cursor changes to the pointing hand shape when hovering over inventory slots in the crafter UI
- [MC-304441](https://bugs.mojang.com/browse/MC-304441) - The mouse cursor changes to the pointing hand shape when hovering over the creative inventory scroll bar's bounds even if it's invisible or inactive
- [MC-304452](https://bugs.mojang.com/browse/MC-304452) - Non-see-through leaves in Programmer Art still look abnormal

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/51c894709733663dd6e20edd7fa254b904402cab/server.jar)

As we are [preparing to remove obfuscation from Java Edition](https://www.minecraft.net/en-us/article/removing-obfuscation-in-java-edition), you can also get a non-obfuscated experimental version of this snapshot using the Minecraft Launcher:

- [Download this zip file](https://piston-data.mojang.com/v1/objects/7717a481468cc33d2414d82ee9c0450f56264db0/1_21_11-pre3_unobfuscated.zip)
- Unpack the folder into your "versions" folder of your local Minecraft application data folder
- Start (or restart) the Launcher
- Create a new launch installation and select the "unobfuscated 1.21.11 Pre-Release 3_unobfuscated" version
- Start the game and the remaining files will be downloaded

An unobfuscated server jar can be found here:

- [Unobfuscated server jar](https://piston-data.mojang.com/v1/objects/880c7007f5456c9bb30e170ea982d39df119a095/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
