---
title: "MInecraft: Java Edition Snapshot - 22w18a "
date: 2022-05-09T08:37:25Z
updated: 2022-05-09T08:37:37Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/6095998423565-MInecraft-Java-Edition-Snapshot-22w18a
---

Another snapshot is now available for Minecraft: Java Edition. This snapshot brings a few gameplay changes and some technical tidbits, such as the place command and cryptographically signed chat commands.

Enjoy!

# CHANGES IN 22W18A

- Allays now follow their liked player even if they can’t see them
- Allays will only lose track of a player if they are more than 64 blocks away
- The texture of the sonic boom particle has been updated
- Vibration listeners such as Sculk Sensors, Sculk Shriekers and Wardens now listen to the closest vibration instead of the first vibration in the tick

# TECHNICAL CHANGES IN 22W18A

- Banner patterns available in the Loom can now be controlled with tags (banner_pattern/no_item_required for no pattern item and banner_pattern/pattern_item/\* for specific banner pattern items)
- Servers can now define different chat style formats for clients
- Removed the placefeature command
- Added the place command
- The bundled Java runtime has been upgraded to 17.0.3
- Removed loot table function set_goat_horn_sound
- Added loot table function set_instrument
- Chat from the /say, /msg, /teammsg, and /me commands are now all also cryptographically signed

## CHAT TYPES

- Different chat style formats can now be controlled by the server through the chat_type registry
  - These are synchronized to clients when they join the server
  - The translation key or translation format can be defined, like chat.type.text or %s says: "%s"
    - Chat can be similarly optionally narrated with a custom translation key or format
  - The entire message can have formatting applied, such as italics or a specific color (but currently not click or hover events)

## PLACE COMMAND

New command that replaces placefeature and can place features, jigsaws and structures at a given location. Syntax:

place feature \<feature\> \[pos\]  
place jigsaw \<pool\> \<start\> \<depth\> \[pos\]  
place structure \<structure\> \[pos\]

- feature: The namespaced id of a feature to try to place
- structure: The namespaced id of a structure to try to generate
- pool: The namespaced id of a template pool to start generating
- start: The namespaced id name of a jigsaw to use as the starting anchor
- depth: The maximum number of jigsaw connections to traverse during placement
- pos: The position to use as the origin for the generation (if omitted, ~ ~ ~ is used)

## LOOT TABLES

### NEW FUNCTIONS

#### SET_INSTRUMENT

Sets item tags needed for instrument items to a random value selected from a tag.

Parameters:

- options - a tag reference specifying the instrument options to randomly pick from

# FIXED BUGS IN 22W18A

- [MC-207935](https://bugs.mojang.com/browse/MC-207935) - Simultaneous vibrations don’t trigger as expected
- [MC-232009](https://bugs.mojang.com/browse/MC-232009) - Minecraft does not resolve SRV records correctly
- [MC-249021](https://bugs.mojang.com/browse/MC-249021) - The invitation and news buttons aren’t consistently displayed within the realms menu
- [MC-249129](https://bugs.mojang.com/browse/MC-249129) - The walking animation of frogs doesn’t change in relation to their movement speed
- [MC-249175](https://bugs.mojang.com/browse/MC-249175) - Only one sculk vein drops when using a Silk Touch hoe on multiple in a single block space
- [MC-249454](https://bugs.mojang.com/browse/MC-249454) - Sculk Catalysts will spread sculk if a baby mob that does not drop experience dies around it
- [MC-249732](https://bugs.mojang.com/browse/MC-249732) - Allays lose picked up items on world restart
- [MC-249740](https://bugs.mojang.com/browse/MC-249740) - Allays leashed to a fence do not move and refuse to pick up items
- [MC-249784](https://bugs.mojang.com/browse/MC-249784) - Ancient Cities can be submerged in aquifers
- [MC-249857](https://bugs.mojang.com/browse/MC-249857) - Parity Issue: Allays don’t follow the player / note blocks as closely on Java
- [MC-250139](https://bugs.mojang.com/browse/MC-250139) - Snow layers cannot be placed on top of mud
- [MC-250143](https://bugs.mojang.com/browse/MC-250143) - Improper advancement description for “Sneak 100”
- [MC-250144](https://bugs.mojang.com/browse/MC-250144) - “Sneak 100” advancement includes sculk shriekers as a block that can “hear” the player
- [MC-250145](https://bugs.mojang.com/browse/MC-250145) - Warden/frogs continue animations when the game is paused
- [MC-250163](https://bugs.mojang.com/browse/MC-250163) - Warden can still detect things after it dies
- [MC-250183](https://bugs.mojang.com/browse/MC-250183) - Warden continues to roar when angered by an ignited creeper
- [MC-250198](https://bugs.mojang.com/browse/MC-250198) - Warden continues to roar when the target of the enraged warden suffers an unnatural death
- [MC-250207](https://bugs.mojang.com/browse/MC-250207) - Warden continues to roar at disconnected players
- [MC-250216](https://bugs.mojang.com/browse/MC-250216) - Warden continues to roar at targets in unloaded chunks
- [MC-250218](https://bugs.mojang.com/browse/MC-250218) - Warden continues to roar at despawned target
- [MC-250244](https://bugs.mojang.com/browse/MC-250244) - Warden continues to roar when the target enters the nether portal, end portal or end gateway
- [MC-250245](https://bugs.mojang.com/browse/MC-250245) - Warden sonic boom attacks can hit player even if the player has entered another dimension
- [MC-250292](https://bugs.mojang.com/browse/MC-250292) - Wardens can sometimes freeze when overwhelmed with enemies/attacks/sounds
- [MC-250506](https://bugs.mojang.com/browse/MC-250506) - Mangrove leaves can appear at a higher altitude when grown below y = 0
- [MC-250557](https://bugs.mojang.com/browse/MC-250557) - Allay permanently stuck trying to pick up item stack if its slots contain stack of the same type with differing NBT (and vice versa)
- [MC-250864](https://bugs.mojang.com/browse/MC-250864) - Game fails to load worldgen settings when .DS_Store files are present in datapack
- [MC-250926](https://bugs.mojang.com/browse/MC-250926) - There is a goat horn in the creative Destroy Item slot / all tabs within the creative inventory contain goat horns
- [MC-250937](https://bugs.mojang.com/browse/MC-250937) - User skins don’t load in singleplayer
- [MC-250939](https://bugs.mojang.com/browse/MC-250939) - Game crashes when a goat horn with an invalid sound variant is used / java.lang.ArrayIndexOutOfBoundsException: Index \<index\> out of bounds for length 8
- [MC-250954](https://bugs.mojang.com/browse/MC-250954) - Player is assigned a new UUID in singleplayer
- [MC-250974](https://bugs.mojang.com/browse/MC-250974) - MinecraftClientHttpException when opening/creating a world

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/d3259a8939a724c78ebbb995dfc31c1c364464e3/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
