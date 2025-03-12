---
title: "Minecraft: Java Edition - Snapshot 24w04a"
date: 2024-01-24T16:04:14Z
updated: 2025-03-12T10:45:49Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/23489515647117-Minecraft-Java-Edition-Snapshot-24w04a
hash:
  h_01HMY3H83946JVR09634G646F4: changes
  h_01HMY3H83A4VT02EMHCPWSWJW9: technical-changes
  h_01HMY3H83A2H6S8FGTBTVD625S: region-file-compression-algorithm
  h_01HMY3H83A83NB3DSMKYDC058V: world-optimizing-changes
  h_01HMY3H83APAKX831S3V2Y9DF2: improved-the-server-tps-debug-chart
  h_01HMY3H83AEEDZ9PWRESYJ8045: data-pack-version-29
  h_01HMY3H83A04E4DFQ5TN5XGRGM: transfercommand
  h_01HMY3H83AXCHAP63DQVN6DM7B: experimental-features
  h_01HMY3H83AGX42N8VVWPA67QNG: breeze
  h_01HMY3H83AX2GC5AZBSD86V78R: copper-grates
  h_01HMY3H83A3Z0NEXZTWN6T1EKE: fixed-bugs-in-snapshot-24w04a
  h_01HMY3H83AMY6JQJEQ3TXRHEYR: get-the-snapshot
---

Hello again! Here is another snapshot bringing you some Armadillo changes, experimental feature changes, and a bunch of technical changes.We have some server-side performance improvements and improved debug tools along with a new transfer command. Enjoy!

## CHANGES

- Armadillo now also rolls up when it detects a mob, or a player that has attacked it recently
- When an Armadillo is in rolled up state, its shell will protect it, and reduce the damage dealt to it, even allowing it to fully resist weak attacks
- Renamed "Allow cheats" to "Allow commands"

## TECHNICAL CHANGES

- The Data Pack version is now 29
- Added an option to use a faster region file compression algorithm on dedicated servers
- Introduced changes to optimizing worlds
- Improved server TPS debug chart
- Reduced time needed to generate explorer maps to buried treasures

### REGION FILE COMPRESSION ALGORITHM

- Added a dedicated server configuration property region-file-compression with 2 possible values:
  - deflate, the default option. Uses the old algorithm
  - lz4 uses LZ4 algorithm, which requires less CPU time to compress and decompress but uses more disk space
- Changing the compression algorithm will not automatically recompress the world
  - New or updated chunks will use the newly configured algorithm, but the old ones will stay in the previous format

### WORLD OPTIMIZING CHANGES

- Optimizing singleplayer worlds and running dedicated server with forceUpgrade now also upgrades contentsof entities and poi directories of the world
- New recreateRegionFiles dedicated server startup parameter
  - It will trigger world optimization similar to forceUpgrade, but will also rewrite all the chunks independentlyof whether they have been upgraded
  - This will create fresh and defragmented region files
  - Using this parameter after changing the region-file-compression server property will recompress all region filesin the new format

### IMPROVED THE SERVER TPS DEBUG CHART

- As before, it is accessible by pressing F3 + 2 in a Singleplayer world
- The bottom dark red section of the chart displays the time spent during the main logic of the server tick. It isequivalent to the value diplayed in the old chart
- The light brown section displays time spent on running scheduled tasks
- The purple section displays time spent executing all other code during the tick
- The top light green (or yellow or red depending on lag) section displays time spent idling, waiting for next tick
- The min, avg, max aggregate values are based on the sum of the first 3 sections

## DATA PACK VERSION 29

- Added the transfer command

### TRANSFER COMMAND

New command that triggers a transfer of a player to another server. Only exists on dedicated servers.

Syntax:

transfer \<hostname\> \[\<port\>\] \[\<players\>\]

Parameters:

- hostname: String describing the hostname of the server to connect to
- port: Integer denoting the port number of the server to connect to - if omitted, 25565 is used
- players: The players to transfer - if omitted, @s is used

## EXPERIMENTAL FEATURES

### BREEZE

- Breeze is now aggressive toward Iron Golems in addition to players
- Breeze no longer retaliates against attacks from the following mobs: Skeletons, Strays, Zombies, Husks, Spiders, Cave Spiders, Slimes
- The above mobs will not retaliate when hurt by the Breeze's Wind Charge Projectile

### COPPER GRATES

- Stonecutting Copper Blocks into Copper Grates outputs 4 Copper Grates

## FIXED BUGS IN SNAPSHOT 24W04A

- [MC-232489](https://bugs.mojang.com/browse/MC-232489) - Retrieving a plant from a flower pot ignores inventory contents
- [MC-266449](https://bugs.mojang.com/browse/MC-266449) - Breeze doesn't attack or retaliate against mob on sight
- [MC-266707](https://bugs.mojang.com/browse/MC-266707) - Trial spawners ignore custom_spawn_rules
- [MC-267925](https://bugs.mojang.com/browse/MC-267925) - Retrieving an item from a flower pot while holding something causes the item to end up in your off hand
- [MC-267937](https://bugs.mojang.com/browse/MC-267937) - Shooting a breeze with a piercing crossbow makes the game crash
- [MC-267938](https://bugs.mojang.com/browse/MC-267938) - The world loading percentage value can get covered by the spawn chunk loading animation when the "spawnChunkRadius" gamerule is set to large values
- [MC-267941](https://bugs.mojang.com/browse/MC-267941) - The end portal kills mobs at spawnChunkRadius 0
- [MC-267953](https://bugs.mojang.com/browse/MC-267953) - No element is focused when opening the realms world backups menu using keyboard navigation

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/d9f13751240a2fe4e85be1c839d9a4de1413c251/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
