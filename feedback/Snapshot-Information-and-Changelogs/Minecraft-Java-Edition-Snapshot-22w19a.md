---
title: "Minecraft: Java Edition Snapshot - 22w19a "
date: 2022-05-12T18:21:49Z
updated: 2025-03-12T11:13:13Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/6189944134541-Minecraft-Java-Edition-Snapshot-22w19a
---

Thursday snapshot! Apart from some bugfixes and some changes to fancy tags and commands, we're introducing "chat preview" as a way to cryptographically sign chat messages that have been dynamically styled by servers. And for this snapshot only, we've left in our testing option test-rainbow-chat in server.properties, which can be set to true together with the new previews-chat option for testing. If this is something that interests you, and especially if you run a server, we would love your feedback on it.

Enjoy!

# CHANGES IN 22W19A

- Warden and Iron Golems now make sure to spawn above something solid

# TECHNICAL CHANGES IN 22W19A

- Servers can now enable Chat Preview, which displays a server-controlled preview above the chat edit box
- Changes to the locate and place commands
- Point of Interest tags

## CHAT PREVIEW

- Servers can enable Chat Preview by setting previews-chat=true in server.properties
- When enabled, a server-controlled preview appears above the chat edit box, showing how the message will look when sent
- This can be used by servers to preview messages with styling applied, such as emojis or chat coloring
- Chat Preview sends chat messages to the server as they are typed, even before they’re sent
  - The server then sends back the styled preview in real time
  - This allows servers to apply dynamic message stylings while still allowing chat to be securely signed
- A warning screen is shown on the client when joining a server with Chat Preview, and it can be globally disabled in Chat Settings
- Dynamic chat styling can also be controlled by the server, although this is only signed when Chat Preview is enabled
  - Clients can prefer to always show the original, signed message by enabling “Only Show Signed Chat” in Chat Settings

## COMMANDS

- Added template sub-command to place command
- locate command moved to locate structure, locatebiome moved to locate biome
- Added locate poi \<type: point_of_interest_type\>
- Servers will now also send an additional icon and MOTD packet after a player has connected
  - This allows servers with enable-status=false to set an icon and MOTD for players that successfully connect

### PLACE TEMPLATE

The place command can now also place templates at a given location. Syntax:\
place template \<template\> \[pos\] \[rotation\] \[mirror\] \[integrity\] \[seed\]

- place template works like using the load button in the UI for a structure block

Parameters:

- template: The namespaced id of a template (“structure block file”) to load and place
- rotation: The rotation to apply (if omitted, none is used)
- mirror: The mirroring to apply (if omitted, none is used)
- integrity: The structure integrity value between 0 and 1
- seed: The seed to use for the randomized degradation when integrity is less than 1

## POINT OF INTEREST TYPES

- Removed unemployed and nitwit point_of_interest_types
- Added tag point_of_interest_type/acquirable_job_site for all job sites seeked by Villagers with none profession
- Added tag point_of_interest_type/village for PoI that are part of Village
- Added tag point_of_interest_type/bee_home for all PoI targeted by Bees

# FIXED BUGS IN 22W19A

- [MC-197647](https://bugs.mojang.com/browse/MC-197647) - Players cannot jump off the edge of blocks when sneaking if they have a block above
- [MC-231600](https://bugs.mojang.com/browse/MC-231600) - Sculk sensor continuously receives vibrations when next to a powered big dripleaf
- [MC-249130](https://bugs.mojang.com/browse/MC-249130) - Tadpoles hatch inside of adjacent blocks, causing them to suffocate and die
- [MC-249161](https://bugs.mojang.com/browse/MC-249161) - Frogs frequently get stuck below lily pads
- [MC-249634](https://bugs.mojang.com/browse/MC-249634) - Warden’s sniffing behavior continues after being distracted
- [MC-249664](https://bugs.mojang.com/browse/MC-249664) - Warden despawns when far away
- [MC-249801](https://bugs.mojang.com/browse/MC-249801) - Mineshafts can intersect ancient cities
- [MC-249888](https://bugs.mojang.com/browse/MC-249888) - Warden is not angered when hit by a blaze fireball
- [MC-249910](https://bugs.mojang.com/browse/MC-249910) - Warden “Nearby Closest” sound is unused
- [MC-249966](https://bugs.mojang.com/browse/MC-249966) - Warden can stop chasing a target it just roared at
- [MC-250172](https://bugs.mojang.com/browse/MC-250172) - Warden doesn’t turn towards the direction it is firing the Sonic Boom attack
- [MC-250233](https://bugs.mojang.com/browse/MC-250233) - A warden summoned from a spawn egg suddenly losing its AI
- [MC-250255](https://bugs.mojang.com/browse/MC-250255) - Warden’s Sonic Boom cannot hurt Ender Dragon, it only pushes it back
- [MC-250272](https://bugs.mojang.com/browse/MC-250272) - Warden spawns in blocks that have no collision
- [MC-250353](https://bugs.mojang.com/browse/MC-250353) - Warden cannot spawn on a single snow layer like other mobs
- [MC-250357](https://bugs.mojang.com/browse/MC-250357) - Sculk sensors and Wardens detect when a player holds up a shield
- [MC-250948](https://bugs.mojang.com/browse/MC-250948) - Warden’s ranged attack is no longer affected by the game’s difficulty
- [MC-250966](https://bugs.mojang.com/browse/MC-250966) - Dying to the warden’s sonic boom doesn’t count as the warden’s kill
- [MC-251029](https://bugs.mojang.com/browse/MC-251029) - Warden froze and stopped being hostile towards the player
- [MC-251263](https://bugs.mojang.com/browse/MC-251263) - “Invalid signature for profile public key” when trying to open a singleplayer world
- [MC-251316](https://bugs.mojang.com/browse/MC-251316) - The game crashes when loading chunks that consist of jigsaw blocks
- [MC-251321](https://bugs.mojang.com/browse/MC-251321) - Warden can be pushed by explosions while emerging
- [MC-251350](https://bugs.mojang.com/browse/MC-251350) - /give @s goat_horn gives an unregistered goat horn
- [MC-251396](https://bugs.mojang.com/browse/MC-251396) java.lang.IllegalArgumentException: Name and ID cannot both be blank
- [MC-251464](https://bugs.mojang.com/browse/MC-251464) - When passive mobs take damage from warden’s sonic boom, they won’t flee in panic

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c354ac562b44fe5857535935125942ff89616cab/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
