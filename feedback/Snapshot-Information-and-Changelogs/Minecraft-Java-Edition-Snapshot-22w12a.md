---
title: "Minecraft: Java Edition - Snapshot 22w12a "
date: 2022-03-25T08:13:16Z
updated: 2025-03-12T11:13:14Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/5059715633933-Minecraft-Java-Edition-Snapshot-22w12a
---

Waaaaaaaaaaah! It's Wal... wait that's not it. It's the warden! The spooky, unfriendly (maybe it just wants a hug?) mob is making its way into our latest snapshot. 

Additionally, you'll be seeing some functionality for the sculk shriekers and some fancy new boats (they have chests).

Enjoy!

# NEW FEATURES IN 22W12A

- Added Darkness mob effect
- Added Sculk Shrieker functionality
- Added the Warden mob
- Added boat with chest
- Added the Swift Sneak enchantment

## SCULK SHRIEKER

- Added functionality to the Sculk Shrieker: Notable for its boney appendages, this block responds to Sculk Sensors detecting vibrations by sending out a warning call to distant Wardens
  - Watch out when stepping on them, as they will feel that too and send out a call!
- Initially it may take some time for a Warden to arrive, but you’ll hear it responding in the distance…
- Once it’s close enough, a call from the Sculk Shrieker will summon the Warden nearby - be prepared!  
  Added Warden mob

## WARDEN

The horror of the Deep Dark! A creature with no eyes, roughly resembling the Sculk that can be found throughout the Deep Dark, the Warden is an unstoppable force of nature that inhabits this biome

- Just like Sculk Sensors, these terrifying creatures use vibrations as a means to navigate their environment
- When vibrations aren’t enough, they will also use a sense of smell to track down their prey - you can observe them sniffing their surroundings to get closer to unsuspecting players and mobs
- To add to their myriad of ways to detect you, try not to get too close! If you collide with a Warden, it will notice you
- In the Deep Dark, Wardens are everywhere - you just can’t see them. They slumber beneath your feet, and only dig out when enough Sculk Shriekers have alerted them of your presence
- Watch your step: the more vibrations a Warden detects, the angrier it will get. You can hear and see this from how fast the souls in its chest are beating
- Once a mob has pushed beyond the Warden’s anger threshold, it will face its prey and roar before charging
- If, however, you keep the Warden from noticing you or getting angry for 60 seconds, it will dig back underground and despawn
- They have a special interaction with thrown projectiles
  - If the Warden receives two projectile vibrations within 5 seconds of one another, it will grow angrier at the shooter
  - If the Warden receives a projectile vibration more than 5 seconds from the last projectile, it will not grow angrier at the shooter
  - This allows you to strategically distract the Warden without it getting angry while you take loot from nearby chests
- Unfortunately for all players, Wardens will also disable shields when they hit them with their fists
- They do not drop any loot
- Wardens are powerful creatures, and it is often better to sneak around one that has emerged instead of taking it head on - you’ve been warned

## DARKNESS

- A new mob effect unique to the Warden and Sculk Shrieker, which will afflict you with it when nearby
- Lowers the gamma down at an equivalent of “Moody” while having this effect
- In periodic pulses, will lower the overall brightness of the world so that the darkness creeps up against light sources
- When the Warden is around, torches will be more important than ever!
- A new Accessibility slider has been added in your Options menu called “Darkness Pulsing”
  - Controls how dark the Darkness effect gets when a Warden or Sculk Shrieker gives it to you, but will not affect the fog distance

## BOAT WITH CHEST

- Lets you bring more stuff on your boat adventures
- If you are in the boat, press the open inventory key to access the chest contents
- If you are not in the boat, shift-right click to access the chest contents
- If you break the boat the chest contents will spill out, like with other chests
- Also works with hoppers, droppers, and other blocks that interact with chests
- Like other chests, opening a boat chest or breaking the boat will anger piglins, since they think all chests belong to them

## SWIFT SNEAK

Imbue your leggings with this shiny new enchantment to move as fast while crouching as you would normally walk!

- When applied, it will increase your movement speed while sneaking
- Has 3 different levels with different speed increases
- It is the first enchantment unique to leggings equipment!

# CHANGES IN 22W12A

- The Deep Dark biome is now less flooded than surrounding areas
- Leaves are now waterloggable
- Removed debug hotkey cycling render distance

# FIXED BUGS IN 22W12A

- [MC-149805](https://bugs.mojang.com/browse/MC-149805) - While editing a book, you cannot use Ctrl+Home or Ctrl+End to jump to the beginning or end of the text
- [MC-165503](https://bugs.mojang.com/browse/MC-165503) - Fence gates (between walls) aren’t affected by ambient occlusion/smooth lighting
- [MC-176081](https://bugs.mojang.com/browse/MC-176081) - Striders with NoAI still get cold
- [MC-177321](https://bugs.mojang.com/browse/MC-177321) - Soul sand doesn’t have smooth lighting / ambient occlusion
- [MC-179916](https://bugs.mojang.com/browse/MC-179916) - Foxes path towards origin (0,0) during a thunderstorm
- [MC-190661](https://bugs.mojang.com/browse/MC-190661) - Pressing Esc or using the Cancel button in the “Experimental Settings” warning returns to main menu
- [MC-197854](https://bugs.mojang.com/browse/MC-197854) - Cannot use Ctrl+Backspace to delete entire words in Edit sign GUI
- [MC-236149](https://bugs.mojang.com/browse/MC-236149) - You cannot use CTRL+BACKSPACE to delete words in the book and quill GUI
- [MC-236212](https://bugs.mojang.com/browse/MC-236212) - You cannot use CTRL+ARROW KEY to navigate the cursor between words in the book and quill GUI
- [MC-238009](https://bugs.mojang.com/browse/MC-238009) - Some end cities can generate floating above the ground
- [MC-239019](https://bugs.mojang.com/browse/MC-239019) - /locatebiome command doesn’t consistently locate the nearest cave biome
- [MC-248621](https://bugs.mojang.com/browse/MC-248621) - TagKey creation leads to memory leak
- [MC-249073](https://bugs.mojang.com/browse/MC-249073) - Mangrove Fence Gate & Mangrove Fence are in the wrong tab in the creative inventory
- [MC-249081](https://bugs.mojang.com/browse/MC-249081) - Placing water inside the mangrove propagule breaks it
- [MC-249098](https://bugs.mojang.com/browse/MC-249098) - Mud brick slabs use generic stone sound
- [MC-249112](https://bugs.mojang.com/browse/MC-249112) - Ender dragon fight is not triggered upon entering the End
- [MC-249134](https://bugs.mojang.com/browse/MC-249134) - Subtitle “Frog hatches” should be “Tadpole hatches”
- [MC-249143](https://bugs.mojang.com/browse/MC-249143) - Mud, Mangrove Roots, and their variants are too loud in comparison with other blocks
- [MC-249171](https://bugs.mojang.com/browse/MC-249171) - Map color for mangrove log is incorrect
- [MC-249172](https://bugs.mojang.com/browse/MC-249172) - Map color for mangrove slab is incorrect
- [MC-249173](https://bugs.mojang.com/browse/MC-249173) - Map color for mangrove trapdoor is incorrect
- [MC-249174](https://bugs.mojang.com/browse/MC-249174) - Map color for mud bricks, mud brick stairs, and mud brick walls is incorrect
- [MC-249181](https://bugs.mojang.com/browse/MC-249181) - Powered rail / activator rail update order is reversed
- [MC-249184](https://bugs.mojang.com/browse/MC-249184) - The mangrove fence recipe is not grouped with the fence recipes of other wood types
- [MC-249195](https://bugs.mojang.com/browse/MC-249195) - Some Mangrove Propagules float after leaves decayed
- [MC-249253](https://bugs.mojang.com/browse/MC-249253) - Bee tries to pollinate a waterlogged mangrove propagule and dies
- [MC-249270](https://bugs.mojang.com/browse/MC-249270) - Mangrove leaves do not have a hoe as their preferred tool
- [MC-249303](https://bugs.mojang.com/browse/MC-249303) - Mangrove Leaves cannot be composted
- [MC-249312](https://bugs.mojang.com/browse/MC-249312) - Mud Brick Slab has a slower mining speed then other mud bricks
- [MC-249316](https://bugs.mojang.com/browse/MC-249316) - Mangrove fence, fence gate and boat cannot be used for fuel

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/f238cf129a0848effe5037d8aaefe3f1f350b689/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
