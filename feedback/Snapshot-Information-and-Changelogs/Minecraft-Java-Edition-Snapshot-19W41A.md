---
title: "Minecraft: Java Edition - Snapshot 19W41A"
date: 2019-10-09T15:57:25Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360034618512-Minecraft-Java-Edition-Snapshot-19W41A
---

9 October 2019

We get thousands of emails every day demanding we 'make Minecraft stickier!'. Usually we just ignore them (they're pretty weird), but that all changes this week, with the addition of the honey block. Enjoy!

# CHANGES IN 19W41A

- Added Honey Blocks!
- Added Honeycomb Blocks!
- Accessibility improvements
- Iron Golems now start cracking when damage and can be repaired with Iron Ingots
- Added a spectate command
- Added copy_to_clipboard action to clickEvent
- The effect clear command now defaults to @s if no target argument is given
- Fixed bugs

## HONEY BLOCK

Sticky. Very sticky!

- Walking and jumping is limited
- If you stand on a honey block that is pushed by a piston, you come along for the ride
- Jump into a wall of honey blocks to slide down and slow your fall
- Landing on a honey block cushions your fall somewhat
- When a honey block is pushed or pulled by a piston, it attempts to move all adjacent blocks in the same direction (just like slime blocks)
- Mobs and animals dislike walking on honey blocks. Too sticky for their comfort

## HONEYCOMB BLOCK

BYOH - Build Your Own Honeycomb

- Craft 2x2 Honeycomb to get a Honeycomb Block
- Purely decorative!

## ACCESSIBILITY

- Sneak and Sprint inputs can now be switched between Hold and Toggle mode in the Accessibility Options.
- Descriptions under buttons on the Create World screen are now narrated.

## SPECTATE

New command that makes a player in spectator mode spectate an entity. Syntax: spectate \[target\] \[player\]  
Parameters:

- player - The player that should spectate the target. Must be in spectator mode. If omitted, @s is used.
- target - The target to spectate. If omitted, makes the player stop spectating.

# FIXED BUGS IN 19W41A

- [MC-20144](https://bugs.mojang.com/browse/MC-20144) - Saturation and Instant Health/Damage effects don’t have an icon
- [MC-86846](https://bugs.mojang.com/browse/MC-86846) - Changing a powered Command block from impulse/chain mode to repeat mode doesn’t trigger it until repowering
- [MC-120480](https://bugs.mojang.com/browse/MC-120480) - Pets teleport onto blocks which have a solid “bottom”, not “top” face
- [MC-124140](https://bugs.mojang.com/browse/MC-124140) - Anchoring does not reset after use, and is implicitly applied in nonsensical cases by default
- [MC-125104](https://bugs.mojang.com/browse/MC-125104) - Cancelling delete world screen and options sub-menus using ESC opens main menu
- [MC-129806](https://bugs.mojang.com/browse/MC-129806) - Team prefixes and suffixes don’t show for villagers without a custom name
- [MC-131552](https://bugs.mojang.com/browse/MC-131552) - Can’t craft stripped wood from stripped log
- [MC-145021](https://bugs.mojang.com/browse/MC-145021) - Tamed animals are not able to teleport to the player when they are on the snow layer blocks
- [MC-146213](https://bugs.mojang.com/browse/MC-146213) - Loading bar on splash screen is able to extend beyond its black outline
- [MC-156005](https://bugs.mojang.com/browse/MC-156005) - Tamed wolves do no longer teleport to the player when they’re in water
- [MC-159423](https://bugs.mojang.com/browse/MC-159423) - Bees can’t get to flowers on edges
- [MC-160102](https://bugs.mojang.com/browse/MC-160102) - IllegalArgumentException when being attacked by a weak iron golem
- [MC-160865](https://bugs.mojang.com/browse/MC-160865) - Waking up from a bed can cause the server to crash in specific circumstances
- [MC-161297](https://bugs.mojang.com/browse/MC-161297) - Shulker box inside textures are invisible
- [MC-161692](https://bugs.mojang.com/browse/MC-161692) - Hopper creating a furnace blockentity by transferring an item crashes the game
- [MC-161733](https://bugs.mojang.com/browse/MC-161733) - Vindicator idle5 sound is unused
- [MC-162087](https://bugs.mojang.com/browse/MC-162087) - Parrots can imitate pandas
- [MC-162569](https://bugs.mojang.com/browse/MC-162569) - Placing torches in water causes serious lag and stuttering
- [MC-162586](https://bugs.mojang.com/browse/MC-162586) - Log repeatedly prints the message “Ticking entity”, and finally crashes the game
- [MC-162616](https://bugs.mojang.com/browse/MC-162616) - java.lang.NullPointerException after attacking a parrot

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/852eb4bfba2d886efeb88f82bcb706099193b121/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
