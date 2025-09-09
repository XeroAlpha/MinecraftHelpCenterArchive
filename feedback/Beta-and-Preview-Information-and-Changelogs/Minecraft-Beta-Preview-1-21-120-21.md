---
title: Minecraft Beta & Preview - 1.21.120.21
date: 2025-09-09T15:16:02Z
updated: 2025-09-09T17:02:51Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/39436905010189-Minecraft-Beta-Preview-1-21-120-21
hash:
  h_01K4QGGX0VZTA2K57049601A6D: posted9-september-2025
  h_01K4QGH0NC3AWYN35PD4ZSPGX6: information-on-minecraft-preview-and-beta
  h_01K4QGFPPGJ7JZZ90PCQRJ3ZFV: features-and-bug-fixes
  h_01K4QGFPPGMM62BX6EJQE3MYWV: blocks
  h_01K4QGFPPHH33MY4PVWQRWV04W: copper-golem-statue
  h_01K4QGFPPHVFAHCT66F8A4YEEM: glow-item-frame
  h_01K4QGFPPJ06KPYTAWSAWXZ5S6: graphical
  h_01K4QGFPPK88K9D68BDCS2862R: mobs
  h_01K4QGFPPKJR7F18BNYS5SGV0S: user-interface
  h_01K4QGFPPMW21403KRQ19AZARQ: technical-updates
  h_01K4QGFPPM8YPWVJ389GYRQJK8: ai-goals
  h_01K4QGFPPNTPXK964RW4WW002M: block-textures
  h_01K4QGFPPNJFKXDC2NFVANTDPR: editor
  h_01K4QGFPPN7B4JSXPRH6MMJQAE: gdk-update-on-windows
  h_01K4QGFPPPZTP6FKC96SZNM0HR: experimental-technical-updates
  h_01K4QGFPPQS4BKZJMGTJ7RH32B: api
  h_01K4QGFM1V89F4MMECB9XNKJW2: graphical-1
---

#### **Posted:** 9 September 2025

**NOTE:** This week's Beta version may be delayed on Android and will be available soon.

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

 

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

 

## Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=features-and-bug-fixes)

### Blocks[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=blocks)

- Weathered Copper Bars no longer have pixels that look out of place
- Tilling Coarse Dirt no longer sometimes tills the block twice converting it directly to Farmland
- Copper Lantern and Copper Torch have new textures to make them easier to distinguish from regular Lantern and Torch

#### Copper Golem Statue[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=copper-golem-statue)

- Copper Golem Statue item is no longer offset when dropped ([MCPE-225213](https://bugs.mojang.com/browse/MCPE-225213))

#### Glow Item Frame[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=glow-item-frame)

- Copper Golem Statue now glows when placed in a Glow Item Frame
- Shields, Decorated Pots and Maps now glow when placed in a Glow Item Frame ([MCPE-147418](https://bugs.mojang.com/browse/MCPE-147418))

### Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=graphical)

- Glass blocks and panes will now become slightly transparent if the camera is very close to them
- Reduced distortion on water surface reflections during the Nausea effect in Vibrant Visuals ([MCPE-220700](https://bugs.mojang.com/browse/MCPE-220700))
- Fixed an issue that caused water surfaces to appear noisy and jittery when water waves were enabled in Vibrant Visuals ([MCPE-221279](https://bugs.mojang.com/browse/MCPE-221279))
- The parameter "sampleWidth" was removed from the water configuration JSON file, and consequently the file has a new format and was upgraded to version 1.21.120

### Mobs[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=mobs)

- The Lead now attaches to the body of the Copper Golem instead of the top of its Lightning Rod ([MCPE-227208](https://bugs.mojang.com/browse/MCPE-227208))
- The hitbox of the Copper Golem Statue block is now in parity with Java ([MCPE-225669](https://bugs.mojang.com/browse/MCPE-225669))
- Copper Golems with a flower on their head now drops a Poppy when becoming a statue
- The size of Tadpoles' shadows are now in parity with Java ([MCPE-154318](https://bugs.mojang.com/browse/MCPE-154318))

### User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=user-interface)

- The Game Menu has been updated with a new layout and design
  - Any feedback on this change can be added [here](https://aka.ms/mcgamemenufeedback)
- Copper Chests are no longer sometimes named "Chest" in the chest UI ([MCPE-226332](https://bugs.mojang.com/browse/MCPE-226332))
- Fixed a bug preventing the deletion of Miscellaneous content from the storage management screen ([MCPE-226999](https://bugs.mojang.com/browse/MCPE-226999))
- Fixed a bug where the death screen could be shown for a short while after using a Bed ([MCPE-226081](https://bugs.mojang.com/browse/MCPE-226081))

## Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=technical-updates)

### AI Goals[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=ai-goals)

- Made the schemas for the `minecraft:behavior.dig`, `minecraft:behavior.drink_milk`, `minecraft:behavior.avoid_block`, and `minecraft:behavior.avoid_mob_type` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.21.120 and newer

### Block Textures[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=block-textures)

- Weighted 'variations' block textures no longer require **Upcoming Creator Features** experiment to work on custom blocks

### Editor[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=editor)

- Added a showAlpha flag to color timeline so we can hide picker alpha elements conditionally
- Added `IVector2PropertyItem` API for property pane
- Added `IMenuPropertyItem` which represents a hamburger menu button that can support nested submenus
- Fixed a bug that caused scrollbar to pop in/out in the AGFX Graph Color component

### GDK Update on Windows[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=gdk-update-on-windows)

- Minecraft Preview now runs on the latest GDK (Game Development Kit)
  - This update aligns the game with the standard distribution model on Windows platforms
- File paths have been updated and upon first install load of this version of Minecraft Preview, your existing Minecraft worlds and content will shift to:  
  `%APPDATA%\Minecraft Bedrock Preview`
- Some players will still receive the UWP version of Minecraft Preview as this slowly rolls out for testing
  - If you encounter issues, please report them at [bugs.mojang.com](http://bugs.mojang.com/).

## Experimental Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=experimental-technical-updates)

### API[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=api)

- Added the `BlockRedstoneProducerComponent` to beta
  - Added `power` read-only property
  - Added `getStronglyPoweredFace` method
  - Added `getConnectedFaces` method
- Dimension
  - Remove `CompoundBlockVolume` parameter from `fillBlocks` in `beta`
- Loot table discovery API now includes information about Loot Item Conditions

### Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30350/R21U12-2-Preview?anchor=graphical)

- Updated point light tracking to be able to link to custom blocks
  - Learn how to apply point lights to custom blocks at <https://learn.microsoft.com/en-us/minecraft/creator/documents/vibrantvisuals/lightingcustomization>
