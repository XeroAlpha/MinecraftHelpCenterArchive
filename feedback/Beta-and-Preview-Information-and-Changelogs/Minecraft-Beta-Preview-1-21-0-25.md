---
title: Minecraft Beta & Preview - 1.21.0.25
date: 2024-05-08T13:20:39Z
updated: 2024-05-08T16:00:13Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/26556343464077-Minecraft-Beta-Preview-1-21-0-25
hash:
  h_01HXC5ZGDWF88T7NWFFGM52Q0D: features-and-bug-fixes
  h_01HXC5ZGDWD024ZGPAQVWKT1CF: stability-and-performance
  h_01HXC5ZGDWKZNARR1XTHJWPXFJ: trial-spawner
  h_01HXC5ZGDWH3Y69YCD7WWKEZQY: petrified-oak-slab
  h_01HXC5ZGDWHDYWWSETWG0VEXFC: items
  h_01HXC5ZGDWMBY3FK5PR6W1NR93: updated-servers-tab-experience
---

**Posted:** 8 May 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft trial chamber with hostile mobs.](https://feedback.minecraft.net/hc/article_attachments/26556523296013)

It's time for a Minecraft: Bedrock Edition Beta and Preview update! As always, we want to hear your thoughts about how the [*Tricky Trials*](https://www.minecraft.net/en-us/article/1-21-update-officially-named-tricky-trials) update is shaping up, so leave us any suggestions you have at [feedback.minecraft.net](https://feedback.minecraft.net/), and please report any bugs you find to [bugs.mojang.com](https://bugs.mojang.com/)!

# Features and Bug Fixes

## Stability and Performance

- Fixed not being able to load into worlds with some texture packs ([MCPE-180918](https://bugs.mojang.com/browse/MCPE-180918)) 

## Trial Spawner

- Mobs removed by Trial Spawner converting to Ominous state now drop the items that they previously picked up from the ground 
- Trial Spawners that are configured to spawn baby Zombies now spawn them correctly 

## Petrified Oak Slab

- The oak-slab-looking variation of "stone_block_slab" (aux value 2) is now flattened into its own new block "minecraft:petrified_oak_slab" which will behave like other stone slabs, eg. cannot be destroyed by fire, but will look like an ordinary oak slab. "minecraft:petrified_oak_slab" can only be obtained through commands ([MCPE-180964](https://bugs.mojang.com/browse/MCPE-180964))
  - Please note; this fix will *not* revert slabs which have already been converted in the recent Preview

## Items

- Fixed an issue that could cause missing textures when placing Paintings in some Marketplace worlds. Painting motifs from a version above the current session's will not be selected when placing a Painting

## Updated ‘Servers Tab’ Experience

- We're glad to include the Message of the Day (MOTD) below each of the available servers!
  - Please send us your feedback on this feature at <https://aka.ms/ServersTabFeedback>

![A screenshot of the message of the day screen on the servers tab in Minecraft](https://feedback.minecraft.net/hc/article_attachments/26556565998605)
