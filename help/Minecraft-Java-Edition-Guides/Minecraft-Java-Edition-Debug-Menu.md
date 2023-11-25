---
title: "Minecraft: Java Edition - Debug Menu"
date: 2021-03-29T19:27:35Z
updated: 2023-01-23T17:25:03Z
categories: "Minecraft: Java Edition Guides"
tags:
  - section_12618583497869
link: https://minecrafthelp.zendesk.com/hc/en-us/articles/360059146051-Minecraft-Java-Edition-Debug-Menu
---

## What is in the debug menu? 

At first glance looking at the debug menu can be a bit overwhelming. We will break it down for you here to try to simplify things. 

Here is what the menu looks like in-game:

![blobid0.png](https://minecrafthelp.zendesk.com/hc/article_attachments/360090982432/blobid0.png)

**#1** Starting from the top left we have the game version. This will also show whether the game is vanilla or using a snapshot. 

**#2** After that you have your current in-game FPS (Frames per Second) this is useful to see what performance you are achieving currently in-game. The Letter after that "T" followed by "inf" means the framerate is unlimited. If you are running on "Fast" graphics this will also be displayed here but if you are "Fancy" you can see it says "fancy-clouds" with the cloud settings being displayed as well. The "B" followed by a number displays the player's biome blend setting. 

**#3** The "Integrated Server" line displays the time it takes for a tick on the integrated server. An integrated server is a server that is integrated into the game itself and runs locally. This is useful for tracking the tick rate of a LAN server measured in milliseconds, when playing with friends. The "tx" shows the number of packets sent by the client. The "rx" shows the packets received by the client. 

**#4** The Letters will be explained as follows: 

**C:** The number of chunk sections rendered over the total number of chunk sections in the loaded area. 

**D:** Client-side render distance 

**pC:** Pending chunks to be arranged or batched. 

**pU:** Pending uploads to your video card 

**aB**: Available buffers to use in the batching process. 

**E:** Number of rendered entities over the total number of entities. 

**P:** Number of Particles in the world. 

**T:** Displays the total number of entities in loading chunks. (Mobs, Dropped items) 

**#5** Client Chunk Cache: is the most chunks that can be loaded on the client. 

**#6** Server Chunk Cache: Similar in how the client stores chunk cache. Made in mind for LAN connections for server caching.  

**#7** Dimension FC: In the screenshot it shows "minecraft:overworld" along with "FC: 0". This is the current dimension of the player with the counted number of force loaded chunks (FC = Force loaded Chunk) 

**#8** The XYZ line is essential for tracking in game coordinates.  

**X:** The player's current location in blocks East of 0,0 (negative values are to the west.). 

**Y:** Player's altitude in blocks tracked by the position of their feet. 

**Z:** The Player's location in blocks south of 0,0 (Negative values are to the north.) 

**#9** The "Block" line is the coordinates of the block the player is standing on in X,Y,Z format. 

**#10** The "Chunk" line is the location of the player within a chunk, and the location of the chunk in the world. 

**#11** The "Facing" line shows which direction the player is facing in real-time. The two numbers at the end indicate the player's horizontal and vertical rotation. 

**#12** The "Client Light" values are where: 

  The first number is the total light level where the player's feet are.  

The second number is the amount of light from the sky at the block the player's feet.  

The third number is the amount of light from other blocks at the block the player's feet are on. 

**#13** "Server Light" is the same as Client Light but the first number for the total light level, does not exist. 

**#14** "CH" displays the highest Y block value that exists at the player's current X/Z coordinates.  

**CH:** Client-side values 

**S:** The Y coordinate of the highest non-air block at the current coordinate. 

**M:** The Y coordinate of the highest block at the current X/Z coordinate that has a blocking-motion material or is liquid. 

**#15** "SH" is the same as CH (client-side values) but describes it for the server side. 

**SH:** Server-side values 

**S:** The Y coordinate of the highest non-air block at the current X/Z coordinate. 

**O:** The Y coordinate of the highest block at the current X/Z coordinate that has a blocking-motion material. 

**M:** The Y coordinate of the highest block at the current X/Z coordinate that has a blocking-motion material or is liquid. 

**ML:** The Y coordinate of the highest block at this X/Z coordinate that has a blocking-motion material and is not the 'leaves' block. 

**#16** The "Biome" line shows what biome the player is currently in.  

**#17** "Local Difficulty" Shows the difficulty of the chunk the player is in. The second number in parentheses displays the number of in-game days the player has been in the world.  

Peaceful difficulty will be 0.0, easy difficulty ranges from 0.75 to 1.5. On normal it ranges from 1.5 to 4.0 and on hard it ranges from 2.25 to 6.75. 

**#18** The "Sounds" line shows the number of sounds playing. 

The first pair represents sounds as breaking or placing a block, moving, or burning fire. 

The second pair represents ambient sounds. The mood in parentheses indicates how close you are to the next cave sound. 

**#19** The "Debug" line tells the player if the debug graphs, or the FPS graphs are visible or not. 

**#20** The "For help" line shows a hotkey (F3 + Q) for extra debug information. 

### On the right side you are presented with some other helpful information 

**Java:** Represents the version the player is running and whether it is 32bit or 64bit. 

**Mem:** Shows the amount of memory that game uses, over the max amount of memory the game can use. 

**Allocated:** Shows the amount of memory the game has allocated from the max the game can use, also as a percent. 

**CPU:** Shows the players CPU and information regarding it. 

**Display:** Shows the resolution of Minecraft as well as the GPU manufacturer, the graphics card, the OpenGL version, and what driver the player uses.
