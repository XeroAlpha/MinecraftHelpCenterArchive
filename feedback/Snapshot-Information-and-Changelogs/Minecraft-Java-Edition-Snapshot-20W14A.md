---
title: Minecraft Java Edition - Snapshot 20W14A
date: 2020-04-02T16:30:29Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360041405952-Minecraft-Java-Edition-Snapshot-20W14A
---

2 April 2020

Even though we just added [every update imaginable to Minecraft](https://www.minecraft.net/article/every-update-imaginable-coming-minecraft), we thought that it might be good to pick up the Nether Update snapshots from where we left off. This snapshot introduces the **Zoglins**!

# NEW FEATURES IN 20W14A

- Hoglins that somehow end up in the overworld become Zoglins fairly quickly – but who would ever bring a Hoglin to the Overworld?
- Compasses can now be enchanted with Curse of Vanishing

## ZOGLINS

- Zoglins are zombified Hoglins – the result of bringing a Hoglin into the Overworld
- Unlike Hoglins they can't be bred or fed, and they don't care about warped fungus
- Beware – these beasts are raving mad and attack just about everything they see!

# CHANGES IN 20W14A

- The main menu background is now in the Nether
- The General statistics list is now alphabetically sorted
- Strider balancing

## STRIDER BALANCING

- Strider speed while mounted has been significantly increased to more closely resemble boat speeds
- Warped Fungus on a Stick now has 100 max item damage, and only takes 1 damage per Strider consume
- When Warped Fungus on a Stick is used with Striders, the boost is a great way to traverse the lava sea

# TECHNICAL CHANGES IN 20W14A

- The compass now has LodestonePos, LodestoneDimension and LodestoneTracked data fields. If LodestoneTracked is zero, the game will skip checking for a Lodestone in the specified position.
- Attributes are now added to game registry, similar to items, sound events, etc.
- Region files are now opened in synchronous mode to increase reliability

## ATTRIBUTES

Attributes have been moved to game registry. That means few changes:

- Items and entities will no longer keep unknown attributes
- Names of some attributes have been renamed to meet resource location requirements

### RENAMES

- generic.maxHealth -\> generic.max_health
- zombie.spawnReinforcements -\> zombie.spawn_reinforcements
- horse.jumpStrength -\> horse.jump_strength
- generic.followRange -\> generic.follow_range
- generic.knockbackResistance -\> generic.knockback_resistance
- generic.movementSpeed -\> generic.movement_speed
- generic.flyingSpeed -\> generic.flying_speed
- generic.attackDamage -\> generic.attack_damage
- generic.attackKnockback -\> generic.attack_knockback
- generic.attackSpeed -\> generic.attack_speed
- generic.armorToughness -\> generic.armor_toughness

## SYNCHRONOUS WRITES

Region files are now opened in synchronous mode to prevent data loss and corruption after crash.

- ​Dedicated servers can disable that by changing sync-chunk-writes inside server.propeties

# FIXED BUGS IN 20W14A

- [MC-83039](https://bugs.mojang.com/browse/MC-83039) - End City chests generate destroyed, items on the ground
- [MC-91893](https://bugs.mojang.com/browse/MC-91893) - Missing subtitles for various sounds
- [MC-109248](https://bugs.mojang.com/browse/MC-109248) - Extended piston head not removed when /setblock is used to place a different piston base.
- [MC-115750](https://bugs.mojang.com/browse/MC-115750) - Advancement “Monster Hunter” (kill_a_mob) is not granted for killing certain hostile mobs
- [MC-116756](https://bugs.mojang.com/browse/MC-116756) - Reversed and inconsistent subtitles for iron trapdoor
- [MC-124428](https://bugs.mojang.com/browse/MC-124428) - Firework star crashes game if there’s an int array but no colors
- [MC-125055](https://bugs.mojang.com/browse/MC-125055) - Igloo generates with brewing stand and flower pot contents dropped (and placed)
- [MC-127316](https://bugs.mojang.com/browse/MC-127316) - General statistics out of order
- [MC-133049](https://bugs.mojang.com/browse/MC-133049) - Compasses don’t point to the correct location when in an item frame on the ground or on the ceiling
- [MC-154427](https://bugs.mojang.com/browse/MC-154427) - Villagers only pick up four stacks of items
- [MC-164129](https://bugs.mojang.com/browse/MC-164129) - Ender dragon inner hitboxes are rendered offset by approximately 200 blocks
- [MC-164446](https://bugs.mojang.com/browse/MC-164446) - Tags don’t load if one of their values is invalid, causing all data packs to unload
- [MC-169975](https://bugs.mojang.com/browse/MC-169975) - Highlight players (spectators) key doesn’t affect any players other than yourself
- [MC-171020](https://bugs.mojang.com/browse/MC-171020) - New nether biomes don’t work properly in buffet worlds
- [MC-172069](https://bugs.mojang.com/browse/MC-172069) - Piston arms are not deleted when the base of a pulsing piston is replaced with another piston
- [MC-173192](https://bugs.mojang.com/browse/MC-173192) - Fluid collision is too high
- [MC-173684](https://bugs.mojang.com/browse/MC-173684) - Spawning under the portal when using a nether portal
- [MC-173774](https://bugs.mojang.com/browse/MC-173774) - Shulker bullets do not act as a projectile
- [MC-173875](https://bugs.mojang.com/browse/MC-173875) - Item frames cannot be interacted with after unloading and reloading the chunk
- [MC-174231](https://bugs.mojang.com/browse/MC-174231) - Ocelots are no longer spawning
- [MC-174838](https://bugs.mojang.com/browse/MC-174838) - Target detection of fireworks is unreliable
- [MC-175201](https://bugs.mojang.com/browse/MC-175201) - Misrotated floor block in savanna_small_house_1, savanna_small_house_2, savanna_small_house_3 and savanna_small_house_7
- [MC-175434](https://bugs.mojang.com/browse/MC-175434) - Fireworks launched from upwards-facing dispensers explode inside of the dispenser block
- [MC-175985](https://bugs.mojang.com/browse/MC-175985) - Lodestone compass needle doesn’t have an animation
- [MC-175990](https://bugs.mojang.com/browse/MC-175990) - Lodestone compass needle spins around quickly when the lodestone has been destroyed or is not in the same dimension
- [MC-176052](https://bugs.mojang.com/browse/MC-176052) - Using a compass on a lodestone plays no hand animation
- [MC-176195](https://bugs.mojang.com/browse/MC-176195) - Many mountable mobs and vehicles can still be shot by the rider’s arrows
- [MC-176231](https://bugs.mojang.com/browse/MC-176231) - Compasses with custom enchantments does not display enchanted glint
- [MC-176269](https://bugs.mojang.com/browse/MC-176269) - Right-clicking Lodestone with Compass also uses offhand item
- [MC-176420](https://bugs.mojang.com/browse/MC-176420) - Lodestone compass sound is in friendly creatures option
- [MC-176644](https://bugs.mojang.com/browse/MC-176644) - Observers don’t trigger when a fence connects to a newly grown tree

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/affcf966ca903156070aa90b63417793a78b2165/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
