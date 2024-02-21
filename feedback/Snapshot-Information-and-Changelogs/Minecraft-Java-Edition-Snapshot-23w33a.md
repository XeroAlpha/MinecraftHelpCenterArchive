---
title: "Minecraft: Java Edition - Snapshot 23w33a"
date: 2023-08-17T15:14:35Z
updated: 2023-08-17T15:15:33Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/18623099025677-Minecraft-Java-Edition-Snapshot-23w33a
hash:
  01H82107AKCG34RME3WC2NW7FM: new-features
  01H82107AK2XH3SFEA6DGNZZAR: player-skin--name-reporting
  01H82107AK2XDPASMNAG2GK04Q: changes
  01H82107AKFVWQM77YP01SQAG2: mob-attack-reach-changes
  01H82107AM7YX28ZCWZQKS4AMV: technical-changes
  01H82107AM8BYH23CZT0M19N3D: data-pack-changes
  01H82107AM1XE51DWHTZHH0ZZF: fixed-bugs-in-23w33a
  01H82107AMVW2XPKNH6AA86C7Z: get-the-snapshot
---

We are making some important updates to our Player Reporting Tool in this Snapshot to better protect the online safety of our players.

Playing Minecraft should be an inclusive and safe experience for everyone, which is why alongside in-game chat messages, you will now be able to report player skins and usernames that violate our Community Standards in Java Edition.

Just like with chat reports, nothing is automated. Any reported skin or username will be reviewed manually by a team of trained Minecraft moderators, who will use the submitted evidence to decide whether the skin and/or username is in breach of our Community Standards. Skins that are in violation of these standards will be removed from Minecraft and will no longer be accessible for use by any player. Usernames that are in violation of these standards will need to be changed before that player can play online via a shared server or Realm; though single-player mode will still be accessible.

To find out more about this and other safety policies, including more detail on the suspension procedure, appeals process, and how we handle malicious or repeat reporting, please visit our dedicated FAQ page.

# NEW FEATURES

## PLAYER SKIN & NAME REPORTING

- Player Skins and Names can now be reported in the Social Interactions Screen
- If a skin or name is reported, and found to be violating the [Community Standards](https://www.minecraft.net/community-standards), our team of human moderators can action in a few ways:
  - Ban the skin from being used by any player
  - Ban the name from being used by any player
  - Suspend the player from online play in the case of repeated offences
- When a skin is banned, players with that skin:
  - Will have their skin removed
  - Will be notified when they launch the game
  - Will be automatically assigned one of the default skins
  - Can still play multiplayer and singleplayer
  - Can select a new custom skin at any time
- When a player's name is banned, that player:
  - Will need to choose a new name
  - Will be notified when they launch the game
  - Will not be able to play online until they change their name
  - Can still play singleplayer
- A skin or name that has been banned cannot be used by any player in the future

# CHANGES

- Sponges and Wet Sponges now have their own custom sounds
- The calculations to determine whether a mob can attack a player or other mobs have been changed
- Added the "Narrator Hotkey" accessibility option
  - Allows the narrator to be toggled on and off with Ctrl+B
- Added "I want to report them" Player Reporting category
- A change has been reverted where armor trim patterns would be masked by the underlying armor texture

## MOB ATTACK REACH CHANGES

The calculations to determine whether a mob can attack a player or other mobs have been changed. Previously a mob's horizontal width was used to determine their attack reach and their height had no effect. The area where a mob can attack is now their bounding box extended in horizontal directions.

Here are some situations where the new rules will affect the reach of mobs:

- If a mob is entirely below you, or entirely above you, it will not be able to reach you
- While riding on a medium-sized mob, like a Horse, you will be protected from small mobs, like Baby Zombies
- While riding on a tall mob, like a Camel, you will be protected from standard size mobs, like Zombies
- Also, Ravagers won't be able to attack you through a few block thick walls anymore
- However, to escape from an Enderman, you need to be at least 3 blocks above the ground, not 1.5 as before
- Mobs will be able to attack you with the bottom of their hitbox, assuming your head is in range
- Builds that trap hostile mobs might need to be adjusted to be safe

This change does not affect the reach of players, and mobs still need to see their target to attack it. We believe this new system will be more intuitive and will result in a more consistent behavior, and we welcome all feedback on this change.

# TECHNICAL CHANGES

- The charts on the debug screen can now be toggled with F3+1 (pie chart), F3+2 (FPS and TPS) and F3+3 (bandwidth and ping) instead of holding Shift, Alt or Ctrl while opening the screen

## DATA PACK CHANGES

- Added decal field to armor trim patterns (default: false)
  - If true, the pattern texture will be masked based on the underlying armor

# FIXED BUGS IN 23W33A

- [MC-2310](https://bugs.mojang.com/browse/MC-2310) - Wrong attack radius calculation damages/kills entities through blocks and corners
- [MC-112133](https://bugs.mojang.com/browse/MC-112133) - Eating chorus fruit does not reset fall distance
- [MC-118616](https://bugs.mojang.com/browse/MC-118616) - The sounds of magma cubes and slimes aren't controlled by the "Hostile Creatures" sound slider
- [MC-122645](https://bugs.mojang.com/browse/MC-122645) - Narrator hotkey cannot be customized or disabled
- [MC-125046](https://bugs.mojang.com/browse/MC-125046) - "RepairCost" NBT tag is created on any renamed item using anvils which can cause items to not stack properly
- [MC-181109](https://bugs.mojang.com/browse/MC-181109) - Grindstone adds RepairCost: 0
- [MC-182820](https://bugs.mojang.com/browse/MC-182820) - Repeaters and comparators use wood sounds for placing/breaking despite being made mostly of stone
- [MC-197473](https://bugs.mojang.com/browse/MC-197473) - Renamed block entities don't stack properly
- [MC-200484](https://bugs.mojang.com/browse/MC-200484) - Jukeboxes use stone sounds despite being composed predominantly of wood
- [MC-214126](https://bugs.mojang.com/browse/MC-214126) - Bees don't pollinate themselves with spore blossoms or chorus flowers
- [MC-217628](https://bugs.mojang.com/browse/MC-217628) - Levers use wood sounds rather than stone
- [MC-217629](https://bugs.mojang.com/browse/MC-217629) - Tripwire hooks use stone sounds, rather than wood
- [MC-257909](https://bugs.mojang.com/browse/MC-257909) - Zoglins, hoglins, and pandas can still attack players riding camels
- [MC-264741](https://bugs.mojang.com/browse/MC-264741) - Unequip vibration only works in creative mode
- [MC-264743](https://bugs.mojang.com/browse/MC-264743) - The "Debug" line on the debug screen that shows which debug graphs are enabled doesn't mention the ping and network traffic chart
- [MC-264746](https://bugs.mojang.com/browse/MC-264746) - Armor trims no longer render their second layer
- [MC-264753](https://bugs.mojang.com/browse/MC-264753) - Eye armor trim on chainmail helmets now has absolutely no effect
- [MC-264773](https://bugs.mojang.com/browse/MC-264773) - There's a misplaced label in the network traffic graph, overlapping minimum B/s rate text

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/0254dde460b23861840cff6e80fc7fdbbccad88e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
