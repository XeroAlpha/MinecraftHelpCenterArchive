---
title: Minecraft - 1.21.113
date: 2025-10-09T13:26:56Z
updated: 2025-10-09T13:28:57Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/40208685845005-Minecraft-1-21-113
hash:
  h_01K2HWVV98E0P3N8PDTM7S5GGQ: fixes
---

**Posted:** 9 October 2025

A new update has been released to address issues discovered in the 1.21.111 release.

## Fixes:

- Fixed a bug where the contents of a Bundle would get deleted if placed in a container above a Hopper with all slots filled ([MCPE-226250](https://bugs.mojang.com/browse/MCPE-226250))
- Copper Golem now drops its carried item when player interacts while holding an item in offhand, or when player has armor equipped ([MCPE-228459](https://bugs.mojang.com/browse/MCPE-228459))
- Fixed a crash when using `%.<number>s` specifier with a length longer than the multiplied string 
- Fixed a potential crash if an Actor query in script was happening during world load 
- The `"all_slots_empty"`, `"any_slot_empty"`, `"has_equipment"` filters now support `"main_hand"` as an equipment location
