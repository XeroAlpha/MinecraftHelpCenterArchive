---
title: "Understanding the Debug Menu in Minecraft: Java Edition"
date: 2021-03-29T19:27:35Z
updated: 2026-11-03T14:58:31Z
categories: "Minecraft: Java Edition Guides"
tags:
  - section_35377765046541
link: https://help.minecraft.net/hc/en-us/articles/360059146051-Understanding-the-Debug-Menu-in-Minecraft-Java-Edition
hash:
  h_01M6EVYW7JZ30MWR1B3M65BJ6Y: on-the-left-side
  h_01M6EW1S4HYWGD22EPCZDQMN53: on-the-right-side
  h_01M6EW2CXAEY21H2K2GPEVAGVE: debug-charts
  h_01M6EW3YFXZSTAZAJ1SPN9JA5P: profiler-graph
  h_01M6F0VEMBE5G655PJHCVMCXAJ: fps-graph
  h_01M6EW4PHWQVXCF9N0DJ8X980G: tps-graph
  h_01M6EYQDCXCKYE6RR0R9M0GJBF: ping-graph
  h_01M6EYQZYPW6GEBCGS28SCMRKG: lightmap-graph
  h_01M6F30N3M9RRCDE9GZA9R1PBB: for-more-information-about-debug-options-in-minecraft-java-edition
---

At first glance, looking at the debug menu in Minecraft: Java Edition can be a bit overwhelming. We will break it down for you here to try to simplify things. 

Here is what the default debug screen looks like in-game when pressing F3, and what each section means: 

<figure class="wysiwyg-image">
<img src="https://minecrafthelp.zendesk.com/hc/article_attachments/50085304154381" alt="image 1.png" />
</figure>

## On the left side

**\#1** You have your current in-game **FPS** (Frames per Second). This is useful to see what performance you are achieving currently in-game. 

**\#2** If you are “Fancy” you can see it says **fancy-clouds** with the cloud settings being displayed as well. The **B,** followed by a number, displays the player’s biome blend setting.  

**\#3** Shows the amount of M**emory** that the game uses, over the max amount of memory the game can use.

**\#4** The **Allocation rate** shows the rate per second the game is using memory.

**\#5 Allocated** shows the amount of memory the game has allocated from the max the game can use as a percentage.

**\#6** The **XYZ** line is essential for tracking in-game coordinates.  

- **X:** The player’s current location in blocks East of 0,0 (negative values are to the west). 
- **Y:** Player’s altitude in blocks tracked by the position of their feet.  
- **Z:** The Player’s location in blocks south of 0,0 (Negative values are to the north).  

**\#7** The **Block** line is the coordinates of the block the player is standing on in XYZ format. 

**\#8** The **Chunk** line is the location of the player within a chunk, and the location of the chunk in the world. 

**\#9** The **Facing** line shows which direction the player is facing in real-time. The two numbers at the end indicate the player’s horizontal and vertical rotation.

**\#10** **minecraftoverworld FC** shows the current dimension of the player with the counted number of force-loaded chunks (FC = Force-loaded Chunk).

**\#11** **Section_relative** shows your position inside a 16x16x16 block section, not your world coordinates.

**\#12** This shows the instructions for displaying the **Debug charts**. For a more detailed explanation, see the **Debug Charts** section below.

## On the right side

**\#1** The top right corner will display the **current game version** you're playing. It will also display whether the game is Vanilla or using a snapshot.

**\#2** This displays the **Terrain Rendering**, which shows how the game is generating terrain in real time.

**\#3** The **Integrated Server** line displays the time it takes for a tick on the integrated server. An integrated server runs locally. This is useful for tracking the tick rate of a LAN server measured in milliseconds, when playing with friends. The ***tx*** shows the number of packets sent by the client. The ***rx*** shows the packets received by the client.

**\#4** **Java** represents the version the player is running.

**\#5 CPU** shows the player's CPU and related information.

**\#6 Display** shows the resolution of Minecraft as well as the GPU manufacturer, the graphics card, the OpenGL version, and what driver you're using.

# Debug Charts

In Minecraft: Java Edition, the debug charts are part of the **F3 debug screen**, which shows five toggleable graphs plus other technical info like FPS, TPS, bandwidth, ping, and lightmap usage. 

## Profiler Graph

The **profiler graph**, known informally as the pie chart, can be toggled using **F3 + 1** and displays profiling information. This is a real-time chart showing how game time is spent across different systems.

## FPS Graph

The **frame rate graph** (or simply **FPS graph**) displays on the left side of the screen when enabled with **F3 + 2**. It shows the last 240 frames of gameplay. The height of each bar is proportional to the time a frame took to generate. The colors are on a gradient from neon green (good) through yellow, to neon red (bad).

## TPS Graph

The **tick rate graph** (or simply **TPS** graph) displays on the right side of the screen when enabled with **F3 + 2** if in singleplayer or playing as an operator on a server. It shows the last 240 ticks of gameplay. The height of each bar is proportional to the time a tick took to process.

The minimum, average, and maximum tick times for the last 240 ticks are shown on top.

The colors stack. From top to bottom:

- **Light green/yellow/red**: Idling, waiting for next tick (color gradient like the FPS graph above)
- **Purple**: Miscellaneous (all other code during the tick)
- **Light brown**: Scheduled tasks
- **Dark red**: Main logic of the server tick

## Ping Graph

The **ping graph** displays on the right side of the screen when enabled with **F3 + 3**. It shows the last 240 ping times. The higher the line, the longer the time. The minimum, average, and maximum are shown on top. The colors are on a gradient from neon green (good) through yellow, to neon red (bad).

## Lightmap Graph

The **lightmap graph** displays on the right side of the screen when enabled with **F3 + 4**. It shows the lightmap texture in real-time. The color of each pixel represents the resulting color that will be applied to blocks and entities lit with the corresponding block and sky light levels.

The horizontal axis represents block light levels (0-15 from left to right).

The vertical axis represents sky light levels (0-15 from bottom to top).

## For More Information About Debug Options in Minecraft: Java Edition:

- [Editing the Debug Screen Text via the Debug Options Menu in Minecraft: Java Edition \| Minecraft Help](./Editing-the-Debug-Screen-Text-via-the-Debug-Options-Menu-in-Minecraft-Java-Edition.md)
- [Input Actions in Minecraft: Java Edition](./Input-Actions-in-Minecraft-Java-Edition.md)
