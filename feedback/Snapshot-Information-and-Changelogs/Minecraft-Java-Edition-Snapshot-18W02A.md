---
title: "Minecraft: Java Edition - Snapshot 18W02A"
date: 2018-05-23T09:35:10Z
updated: 2018-05-23T18:37:53Z
categories: Snapshot Information and Changelogs
tags:
  - java
  - 18W02A
  - release_changelog
link: https://feedback.minecraft.net/hc/en-us/articles/360004167991-Minecraft-Java-Edition-Snapshot-18W02A
---

If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the snapshot.

1.13 is getting closer and closer! This weeks snapshot brings some new improvements to the execute command and a bunch of bug fixes!

**Changes:**

- Added new block tag minecraft:enderman_holdable
- Changed translation files from .lang (key=value) to .json (""key"": ""value"")
- Errors during a command are now a nicer error message (with tooltip for more info)
- Teleporting to things in other dimensions is now allowed
- /teleport has been simplified a bit, to avoid ambiguity
- Added anchor points to teleport ... facing ..., so you can look at eyes vs feet
- Added new subcommands to /execute to allow for more control over commands
- Server commands (functions, console, rcon) now run from world spawn in the overworld
- Fixed bug MC-68446 - Some entities have missing translations string in the lang files
- Fixed bug MC-121662 - Unhandled exceptions in commands just dump the exception into chat, without the ""unknown error"" message
- Fixed bug MC-122579 - All COLOR_wall_banners are missing translation keys
- Fixed bug MC-122608 - Minecraft crashes when typing in a block-related command in front of an entity
- Fixed bug MC-122610 - Giving 0 of any item results in the chat message saying that you got 0 air
- Fixed bug MC-122893 - ""/execute as/at"" does not change the dimension of execution
- Fixed bug MC-122956 - Function paths with invalid characters results in game freezing
- Fixed bug MC-123104 - '/scoreboard players reset' removes name from sidebar of different objective
- Fixed bug MC-123764 - Single player menu world version not displaying correctly
- Fixed bug MC-123771 - Server crashes when an item frame with a map is loaded, and no player has that map in their inventory
- Fixed bug MC-123774 - You cannot test for names with name= anymore
- Fixed bug MC-123782 - Game crashes if an item has a name that's invalid json
- Fixed bug MC-123790 - ""italic"":false in custom item names does not make name non-italic
- Fixed bug MC-123832 - Crash reports output TextComponent object for entity names rather than its text
- Fixed bug MC-123833 - Connect/Disconnect messages output TextComponent object rather than the player's name
- Fixed bug MC-123888 - /clear on a player with no items dumps raw TextComponent
- Fixed bug MC-123891 - NullPointerException on empty TextComponent
- Fixed bug MC-123932 - You cannot open locked containers with the Lock nbt anymore
- Fixed bug MC-123943 - Clicking a player's name in chat dumps raw TextComponent
- Fixed bug MC-123974 - Command List DataProvider incorrectly labeled as ""Item List""
- Fixed bug MC-124051 - Varieties of /teleport create ambiguities for tab-completion

 

**Translations**

We've changed our translation file format from key=value to json. This means we can support newlines! The new files look like this: {""thing"": ""Thing"", ""key"": ""Value"", ""some.translation"": ""Text Of Translation""}  
We will pull in the latest translations from the crowdin project soon. Remember that you can help out by translating the game to your native language over there!

**Command Changes**

`/execute`

 

- `facing ` will run the command as though you're facing x y z
- `facing entity (eyes|feet)` will run the command as though you're facing the entity's eyes or feet
- `offset `has been renamed to positioned x y z
- `positioned as ` will change the command position (x y z) but nothing else
- `rotated as ` or `rotated y x` will run the command as though you're rotated in that direction
- `in (overworld|the_end|the_nether)` will run the command as though it's in that dimension
- `at ` will change the dimension, position and rotation of the command to match that entity
- `(if|unless) score matches ` will test for a score in a range (ie 1, 1..5)
- `anchored (feet|eyes)` will make the rest of this command use feet or eyes for ^ ^ ^ coordinates or facing commands

 

 

`/teleport`

 

- `/teleport ` doesn't allow rotation or facing, will teleport you to the entity
- `/teleport ` doesn't allow rotation or facing, will teleport you to the position
- `/teleport ` doesn't allow rotation or facing, will teleport victim to entity
- `/teleport [yRot xRot] `will teleport you to that position with optional rotation
- `/teleport facing [xFacing yFacing zFacing] `will teleport you to that position facing another position
- `/teleport facing entity [feet|eyes]` will teleport you to that position facing an entity's feet or eyes (default feet)
- Teleporting to an entity in another dimension is now totally allowed. Hurrah!
- You can also teleport to another dimension using something like `/execute in the_nether run teleport 0 64 0`

 

**Local Coordinates `(^ ^ ^)`**

If you use a local coordinate in a command, it comes from your feet by default. That means that `^ ^ ^` is at the bottom center of your entity, and `^ ^ ^10` is where your feet are looking, 10 blocks forwards.  
  
You can change this for a command by changing the ""anchor point"" in `/execute`, like this: `/execute anchored eyes`. For example, the following command will place particles 10 blocks forwards where every entity is looking, which for players is the same point where their mouse cursor is: `/execute as @e at @s anchored eyes run particle minecraft:flame ^ ^ ^10 0 0 0 0 1`  
  
Want to know exactly what this command does? Let's take a look!

- `/execute as @e` makes the following run once for every entity
- `at @s` makes the following run at the location of the current entity
- `anchored eyes` makes`^ ^ ^ `in the following command come from the entities eyes (which means exactly where they're looking)
- `run particle minecraft:flame `will spawn the minecraft:flame particle
- `^ ^ ^10` will make that particle appear 10 blocks forwards of the current position (which is the current entity's eyes)
- `0 0 0` means we don't want the particle to move around
- `0 1 `means we want exactly 1 particle, with no speed

 

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**  
Cross-platform server jar:  
Minecraft server jar

<div>

 

</div>
