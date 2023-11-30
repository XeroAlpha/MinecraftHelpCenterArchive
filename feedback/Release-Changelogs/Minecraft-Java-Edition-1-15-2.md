---
title: "Minecraft: Java Edition - 1.15.2"
date: 2020-01-24T18:32:40Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360038800232-Minecraft-Java-Edition-1-15-2
---

21 January 2020

Next up, Nether!

# CHANGES IN 1.15.2

- Bees no longer anger when a nearby nest/hive is destroyed using a silk touch tool
- Added **doPatrolSpawning** and **doTraderSpawning** game rules that control spawning of patrols and wandering traders, respectively
- Added **gui_light **option in block models to allow controlling light when rendering model as item in GUI  
  - Controls light when rendering block model inside slot. If set to **side**, model will be rendered like block. If set to **front**,  model is shaded like flat item
- Any birch or oak sapling grown near a flower within 2 blocks distance on the same y-level has a 5% chance of having a bee nest
- Bee Nests now have a 2% chance of spawning in Flower Forests
- Bee Nests now have a 0.2% chance of spawning in Forest, Wooded Hills, Birch Forest, Tall Birch Forest, Birch Forest Hills, and Tall Birch Hills biomes
- Fixed bugs

# FIXED BUGS IN 1.15.2

- [MC-169825](https://bugs.mojang.com/browse/MC-169825) - “Multiplayer (3rd party)” shows in window title when disconnecting from a singleplayer world
- [MC-169839](https://bugs.mojang.com/browse/MC-169839) - Certain potion effects that override lower level effects don’t get removed after their duration ends
- [MC-169840](https://bugs.mojang.com/browse/MC-169840) - Drinking a level 1 potion under a level 2 beacon and leaving results in the effect being lost
- [MC-169848](https://bugs.mojang.com/browse/MC-169848) - Crashes when trying to create Beehive From planted tree
- [MC-169886](https://bugs.mojang.com/browse/MC-169886) - No older world protection in 1.15.2 PR 1
- [MC-862](https://bugs.mojang.com/browse/MC-862) - Spawn protection doesn’t work for item frames, paintings and armor stands
- [MC-1541](https://bugs.mojang.com/browse/MC-1541) - Beacon effect removes potion effect of the same type
- [MC-51053](https://bugs.mojang.com/browse/MC-51053) - Furnace minecarts lose power after navigating corners
- [MC-150575](https://bugs.mojang.com/browse/MC-150575) - Concrete powder does not turn into concrete when letting it fall beside water
- [MC-153987](https://bugs.mojang.com/browse/MC-153987) - Falling down ladders while wearing elytra
- [MC-165695](https://bugs.mojang.com/browse/MC-165695) - Hoppers harvesting honeycomb from bee hives and bee nests only pick up one honeycomb
- [MC-166312](https://bugs.mojang.com/browse/MC-166312) - Loom UI pattern icons are too dark
- [MC-166319](https://bugs.mojang.com/browse/MC-166319) - B on “Open in browser” is lowercase in link confirmation GUI
- [MC-166324](https://bugs.mojang.com/browse/MC-166324) - “Raw input” button has lowercase “i”
- [MC-166722](https://bugs.mojang.com/browse/MC-166722) - Some custom item models appear dark in the inventory
- [MC-167018](https://bugs.mojang.com/browse/MC-167018) - Misplaced pixel in critical hit particle texture
- [MC-167079](https://bugs.mojang.com/browse/MC-167079) - Horse Armor texture is off
- [MC-167201](https://bugs.mojang.com/browse/MC-167201) - Invisible glowing entities do not respect their team color
- [MC-167219](https://bugs.mojang.com/browse/MC-167219) - Reloading a resource pack enough times will cause intense lag
- [MC-167220](https://bugs.mojang.com/browse/MC-167220) - Items on marker armor stands no longer glow
- [MC-167235](https://bugs.mojang.com/browse/MC-167235) - Distance from where you can enter a bed is off center
- [MC-167344](https://bugs.mojang.com/browse/MC-167344) - com.mojang.blaze3d.platform.ClipboardManager leaks direct buffers
- [MC-167416](https://bugs.mojang.com/browse/MC-167416) - Distance from where a monster will stop you from sleeping is off center
- [MC-167444](https://bugs.mojang.com/browse/MC-167444) - iron_golem_crackiness\_\* textures show up on invisible iron golems that are damaged
- [MC-167709](https://bugs.mojang.com/browse/MC-167709) - Bees that ride a boat, minecart or other entities when entering their hive or nest can’t leave the hive or nest ever again
- [MC-168091](https://bugs.mojang.com/browse/MC-168091) - Concrete powder doesn’t convert into concrete when dropped into deep water
- [MC-168230](https://bugs.mojang.com/browse/MC-168230) - End crystal beam is dark / desaturated
- [MC-168467](https://bugs.mojang.com/browse/MC-168467) - Bees do not remember how many crops they’ve pollinated
- [MC-169157](https://bugs.mojang.com/browse/MC-169157) - Breaking a hive with obstructed front makes bees vanish

# GET THE RELEASE

To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play!

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/bb2b6b1aefcd70dfd1892149ac3a215f6c636b07/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discord.gg/Minecraft).
