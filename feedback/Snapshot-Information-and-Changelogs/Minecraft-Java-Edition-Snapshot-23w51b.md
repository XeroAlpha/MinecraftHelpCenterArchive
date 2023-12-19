---
title: "Minecraft: Java Edition - Snapshot 23w51b"
date: 2023-12-19T08:38:10Z
updated: 2023-12-19T08:45:16Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/22483937701517-Minecraft-Java-Edition-Snapshot-23w51b
---

**Update: **Coming in hot, here is Snapshot 23w51b, fixing a crash in 23w51a.

We're now releasing Snapshot 23w51a, the first snapshot for Minecraft 1.20.5. This one comes with a present for your pet Wolf in time for the holidays - and the Armadillo.

Happy brushing!

## BUGS FIXED IN 23W51B

- Fixed a crash that would occur when the nametag of a player was visible during sleeping, swimming or dying

## NEW FEATURES

- Added Armadillo, Armadillo Scutes and Wolf Armor

### ARMADILLO

- The Armadillo is a new passive mob that:
  - drops Armadillo Scutes periodically
  - drops Armadillo Scutes when brushed
  - spawns in Savannas
  - its favorite food is Spider Eye

#### ARMADILLO ROLLING UP BEHAVIOR

- Armadillo rolls up when it detects a threat such as:
  - a sprinting player
  - a player in a vehicle or mounted
  - undead mobs
- It does not roll up when:
  - it is fleeing
  - in water
  - in the air or
  - on a leash
- When an Armadillo is rolled up it does not walk, cannot eat, and will not be tempted by food
  - It will continue to scan for threats: if none are detected for 3 seconds, it will unroll

#### ARMADILLO SCUTES

- Armadillo Scutes can be used to craft Wolf Armor
- They are dropped by Armadillos
- Dispensers can be used to brush Armadillo Scutes off Armadillos

### WOLF ARMOR

- Using Wolf Armor on an adult tamed Wolf will equip the armor on the wolf.
- Only a Wolf's owner can put a Wolf Armor on their tamed Wolf, and with this in mind; Dispensers cannot put Wolf Armor on wolves.
- Wolf Armor gives the same protection as Diamond Horse Armor.
- Using Shears on a Wolf that is wearing armor will make it drop the armor
- Only a Wolf's owner can shear a Wolf Armor from it, and with this in mind; Dispensers cannot remove Wolf Armor from wolves.
- If a Wolf dies while wearing armor, it will drop the armor.

## CHANGES

- Renamed scutes that come from Turtles to Turtle Scutes
- Llamas and Shulkers are no longer able to destroy armor stands

## TECHNICAL CHANGES

- The Data Pack version is now 27

## DATA PACK 27

- Llamas now use a new damage type spit instead of mob_projectile
- FactorCalculationData has been removed from mob effect instance tags
- Added generic.scale attribute that can be used to rescale any living entity
- Player reach distance can now be controlled with the generic.block_interaction_range and generic.entity_interaction_range attributes
- The maximum number of blocks that an entity can step up without jumping is now controlled by the generic.step_height attribute

## EXPERIMENTAL FEATURES

### BREEZE

- Added a new 'whirl' idle sound
- Added a 'charging up attack' sound
- Added a sound that plays while the Breeze is in the air
- Added a projectile deflection sound
- Tweaked existing sounds

### TRIAL SPAWNER

- The Trial Spawner now has the same two default loot tables as they have in the Trial Chamber

## FIXED BUGS IN 23W51A

- [MC-130244](https://bugs.mojang.com/browse/MC-130244) - When opening chat in F1 mode, previous messages aren't visible
- [MC-153643](https://bugs.mojang.com/browse/MC-153643) - Debug overlay is rendered behind hotbar items
- [MC-167375](https://bugs.mojang.com/browse/MC-167375) - Baby turtle subtitles are grammatically incorrect
- [MC-173672](https://bugs.mojang.com/browse/MC-173672) - Title text renders in front of player names in player list
- [MC-184066](https://bugs.mojang.com/browse/MC-184066) - Respawn anchors don't produce an ambient sound
- [MC-184622](https://bugs.mojang.com/browse/MC-184622) - Sound for exiting a portal/travelling to another dimension does not use its subtitle string despite it existing in en_us.json
- [MC-185379](https://bugs.mojang.com/browse/MC-185379) - Baby polar bear subtitle does not explicitly mention it comes from a baby polar bear
- [MC-187267](https://bugs.mojang.com/browse/MC-187267) - Title text renders in front of sidebar
- [MC-187372](https://bugs.mojang.com/browse/MC-187372) - There is no space between fps limit/vsync and graphics level in the debug screen
- [MC-193511](https://bugs.mojang.com/browse/MC-193511) - Title text renders in front of narrator text
- [MC-193515](https://bugs.mojang.com/browse/MC-193515) - Boss bar text renders in front of narrator text
- [MC-193517](https://bugs.mojang.com/browse/MC-193517) - Boss bar text renders in front of sidebar
- [MC-193521](https://bugs.mojang.com/browse/MC-193521) - Boss bar text renders in front of F3
- [MC-193524](https://bugs.mojang.com/browse/MC-193524) - Boss bar text strikethough/underline renders on tab list
- [MC-193753](https://bugs.mojang.com/browse/MC-193753) - Respawn anchor ambient sound subtitle refers to it as a portal
- [MC-194948](https://bugs.mojang.com/browse/MC-194948) - Block breaking subtitle inconsistent with painting, item frame and lead breaking subtitles
- [MC-198787](https://bugs.mojang.com/browse/MC-198787) - Inefficient streams in GoalSelector
- [MC-198963](https://bugs.mojang.com/browse/MC-198963) - Chat text renders in front of player names in player list
- [MC-219899](https://bugs.mojang.com/browse/MC-219899) - Bone meal used on rooted dirt causes the particles to appear above it, despite the growth being below it
- [MC-238242](https://bugs.mojang.com/browse/MC-238242) - There is an unnecessary black pixel in the upper right corner of small potion UI icons in the inventory
- [MC-248961](https://bugs.mojang.com/browse/MC-248961) - takenDamage for achievement criteria is calculated wrongly when the player has equipped a helmet
- [MC-249335](https://bugs.mojang.com/browse/MC-249335) - Using bone meal on mangrove leaves spawns growth particles at the center of the block instead of below it
- [MC-251027](https://bugs.mojang.com/browse/MC-251027) - Wearing a helmet doesn't reduce the damage of falling anvils or stalactites by 1⁄4
- [MC-252409](https://bugs.mojang.com/browse/MC-252409) - Memory statistics within the debug menu contain some unnecessary spaces
- [MC-259587](https://bugs.mojang.com/browse/MC-259587) - Negative item durability causes the durability bar to render incorrectly
- [MC-261577](https://bugs.mojang.com/browse/MC-261577) - The nether portal overlay is rendered completely opaque when using spyglasses while standing inside of nether portals
- [MC-263256](https://bugs.mojang.com/browse/MC-263256) - Chat renders on top of TAB, blocking information
- [MC-265541](https://bugs.mojang.com/browse/MC-265541) - player.dat_old won't be read even if player.dat doesn't exist
- [MC-265669](https://bugs.mojang.com/browse/MC-265669) - Hotbar text renders above subtitle background but under subtitle text
- [MC-265835](https://bugs.mojang.com/browse/MC-265835) - The freezing effect is rendered totally opaque when using a spyglass
- [MC-266055](https://bugs.mojang.com/browse/MC-266055) - Opening or closing a copper door or trapdoor while holding an axe / honeycomb grants wax-related advancement
- [MC-266135](https://bugs.mojang.com/browse/MC-266135) - Cached macro commands ignore permission level, allowing limited permission escalation
- [MC-266136](https://bugs.mojang.com/browse/MC-266136) - Macro commands ignore function-permisson-level server setting, including when lower than default
- [MC-266144](https://bugs.mojang.com/browse/MC-266144) - Copper Doors are not part of the \#doors item tag
- [MC-266145](https://bugs.mojang.com/browse/MC-266145) - Copper Trapdoors are not part of the \#trapdoors item tag
- [MC-266308](https://bugs.mojang.com/browse/MC-266308) - Copper Bulbs have unused "turn_off" sound
- [MC-266334](https://bugs.mojang.com/browse/MC-266334) - Shulker bullets destroy armor stands
- [MC-266389](https://bugs.mojang.com/browse/MC-266389) - Glow berry particles are barely visible when bonemealed
- [MC-266430](https://bugs.mojang.com/browse/MC-266430) - Breeze on top of a non-full block produces particles of the block below it
- [MC-266432](https://bugs.mojang.com/browse/MC-266432) - Exposed, weathered and oxidised copper bulbs are unwaxed in trial chambers
- [MC-266469](https://bugs.mojang.com/browse/MC-266469) - When attacked, breezes sometimes stop pathfinding, jumping, or firing wind charges
- [MC-266524](https://bugs.mojang.com/browse/MC-266524) - Breezes sometimes get the zoomies after jumping
- [MC-266533](https://bugs.mojang.com/browse/MC-266533) - Breeze's AI has serious flaws in open terrain
- [MC-266589](https://bugs.mojang.com/browse/MC-266589) - Armor durability is changed when swapping on creative
- [MC-266628](https://bugs.mojang.com/browse/MC-266628) - High polling rate causing stuttering
- [MC-266680](https://bugs.mojang.com/browse/MC-266680) - The glowing outline isn't applied to the eyes or eyebrows of breezes
- [MC-266685](https://bugs.mojang.com/browse/MC-266685) - The entity shadows of breezes are too large in relation to the size of their models
- [MC-266688](https://bugs.mojang.com/browse/MC-266688) - Breeze model's glowing eyes are not resource pack-friendly
- [MC-266738](https://bugs.mojang.com/browse/MC-266738) - Subtitles string "subtitles.block.trial_spawner.spawn_mob" is misleading and inconsistent
- [MC-266879](https://bugs.mojang.com/browse/MC-266879) - Clouds, entity hitboxes, block outlines, specially rendered blocks, and enchantment glints, render through the insides of breezes' eyes and eyebrows
- [MC-266960](https://bugs.mojang.com/browse/MC-266960) - Bossbar text renders in front of player list background and player icons
- [MC-266990](https://bugs.mojang.com/browse/MC-266990) - Maps with the same 'map' tag value, but different 'display' tag data can cause markers to disappear
- [MC-266999](https://bugs.mojang.com/browse/MC-266999) - Crafter's tooltip buttons can still be visible to players on spectator mode
- [MC-267193](https://bugs.mojang.com/browse/MC-267193) - A function with /return fail run in chat doesn't indicate failure
- [MC-267194](https://bugs.mojang.com/browse/MC-267194) - /return run function in combination with a fork and a function that doesn't return has inconsistent behavior

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/d443ec98f3f3ee2dc92e0788d6d83d74844feb4f/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
