---
title: Minecraft Beta & Preview - 1.21.40.25
date: 2024-10-02T08:24:19Z
updated: 2024-10-03T15:23:09Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/30728854635533-Minecraft-Beta-Preview-1-21-40-25
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-graphical: graphical
  user-content-technical-updates: technical-updates
  user-content-components: components
---

**Posted:** 3rd October 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta ](https://aka.ms/JoinMCBeta)for detailed instructions

We’re excited about the new features shown at Minecraft LIVE. These are currently available for testing in the Java Snapshot, and will be coming to Bedrock Preview and Beta soon! You can read more about the features here: [minecraft.net/en-us/article/the-pale-garden](https://www.minecraft.net/en-us/article/the-pale-garden).

Here's what's new in this week's update. Please let us know what you think at [feedback.minecraft.net](https://feedback.minecraft.net/), and report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Graphical

- Fixed an issue where certain Android devices would render transparent items solid black ([MCPE-185038](https://bugs.mojang.com/browse/MCPE-185038))

# Technical Updates

## Components

- Removed support for the "allow_invulnerable" field from the "minecraft:looked_at component"
  - This field never had any functionality, so this change won't affect pre-existing or future content in any way
  - The field will be ignored for any content with a format version lower than 1.21.40
  - A content error will be emitted for any content with a format version equal to or higher than 1.21.40 that still uses this field