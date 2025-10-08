---
title: Minecraft Beta & Preview - 1.21.120.25
date: 2025-10-07T12:32:03Z
updated: 2025-10-08T15:01:18Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/40147803190669-Minecraft-Beta-Preview-1-21-120-25
hash:
  h_01K4QGGX0VZTA2K57049601A6D: posted7-october-2025
  h_01K4QGH0NC3AWYN35PD4ZSPGX6: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-gameplay: gameplay
  user-content-general: general
  user-content-graphical: graphical
  user-content-input: input
  user-content-stability-and-performance: stability-and-performance
  user-content-realms: realms
  user-content-user-interface: user-interface
  user-content-technical-updates: technical-updates
  h_01K6ZAE79T2WWSEKX41KKQ3ZQR: user-interface-1
---

#### **Posted:** 7 October 2025

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](http://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](http://bugs.mojang.com/).

# Features and Bug Fixes[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=features-and-bug-fixes)

## Gameplay[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=gameplay)

- Fixed a bug where the contents of a Bundle would get deleted if placed in a container above a Hopper with all slots filled ([MCPE-226250](https://bugs.mojang.com/browse/MCPE-226250))

## General[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=general)

- Fixed a bug where window animations were missing when maximizing and minimizing the game in GDK PC  
  ([MCPE-227872](https://bugs.mojang.com/browse/MCPE-227872)) 

## Graphical[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=graphical)

- When the Vibrant Visuals renderer is enabled, particles now receive correct ambient lighting regardless of whether or not they have the "minecraft:particle_appearance_lighting" component. Particles can be made to glow in Vibrant Visuals by supplying emissive values via MERS uniforms or textures ([MCPE-220830](https://bugs.mojang.com/browse/MCPE-220830))
- On Windows, the game will now start with previously used window state (maximized, windowed, etc) ([MCPE-228007](https://bugs.mojang.com/browse/MCPE-228007))

## Input[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=input)

- Fixed an issue where the mouse scroll would still register even if the game was unfocused ([MCPE-228272](https://bugs.mojang.com/browse/MCPE-228272))
- Improved Handling of IME interactions with in-line composition and activations only when actively editing text ([MCPE-227859](https://bugs.mojang.com/browse/MCPE-227859))

## Stability and Performance[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=stability-and-performance)

- Fixed a bug that caused some world data saved by previous PlayStation 5 releases to be loaded incorrectly, resulting in missing or altered terrain and structures ([MCPE-228500](https://bugs.mojang.com/browse/MCPE-228500)) 
- Prevent crash and prompt user to install GameInputRedist.msi if they are missing it during boot of the game on Windows 

## Realms[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=realms)

- Introducing Realms Saves, a new and improved version of our previous backup system. Keep your Realms worlds safe with a new bank of cloud storage included with your Realms subscription.
  - Realms saves come in two flavors:
    - Automatic saves are functionally the same as our previous "backups" system:
      - They are taken at the end of every Realms play session when the server shuts down, or every 30 minutes during a play session.
      - They are only retained for a limited time, according to our retention policy (which has not changed with this update): [How Mojang Saves Backups for Your Minecraft Realm \| Minecraft Help](../../help/Manage-Realms-Worlds/How-Mojang-Saves-Backups-for-Your-Minecraft-Realm.md)
      - They do not count towards your bank of cloud storage.
      - They are on by default - no need to enable anything to keep your Realm world safe with automatic saves.
      - All previous Realms backups will be converted to automatic saves.
    - Manual saves are created by the Realm owner and count towards a bank of storage that comes with your Realms subscription.
      - Manual saves are retained as long as your Realm is. They are not automatically deleted by our retention policy\*, but Realm owners can delete manual saves if they want to free up storage space.
      - Realms plus subscriptions come with 10gb of manual save storage and Realms core subscriptions come with 5gb.
      - Automatic saves can be turned into manual saves by the Realm owner.
  - Realms saves can be found in the Realms settings menu accessed via the "Edit Realm" button rather than the Realms world settings menu that backups used to show up in. While playing on the Realm, saves can also be found in the in-game settings menu for the Realm owner.
  - Realms saves will also now list the world name and the packs that were applied at the time of the save.
  - This feature will slowly rollout to players in Preview. You may not see it when the Preview first ships.

*\*Realms and all of their associated data are automatically deleted 18 months after their subscriptions are cancelled.*

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=user-interface)

- Hotbar hotkeys now also work when hovering over output slots ([MCPE-228671](https://bugs.mojang.com/browse/MCPE-228671)) 

# Technical Updates[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=technical-updates)

## User Interface[](https://dev.azure.com/dev-mc/Minecraft/_wiki/wikis/Minecraft.wiki/30520/R21U12-6-Preview?anchor=user-interface)

- Fixed a crash when using `%.<number>s` specifier with a length longer than the multiplied string 
- Fixing a crash when using hotbar hotkeys while hovering over something that isn't an inventory slot ([MCPE-228539](https://bugs.mojang.com/browse/MCPE-228539))
