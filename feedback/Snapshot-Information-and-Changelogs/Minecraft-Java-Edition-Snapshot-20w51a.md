---
title: "Minecraft: Java Edition - Snapshot 20w51a"
date: 2020-12-16T17:09:35Z
updated: 2020-12-16T17:13:06Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360053924992-Minecraft-Java-Edition-Snapshot-20w51a
---

Ready your screenshot buttons and start rehearsing your best "*naaaaww*"s. The final snapshot of the year enters Minecraft Java, and what better way to end the year than with something that has been on our *bucket *list for quite a while: the adorable **axolotl**?   
  
We hope you'll end the year on a good note, and the entirety of the Java team wishes you happy holidays.

# NEW FEATURES IN 20W51A

- Added the axolotl!

## AXOLOTL

- Amphibious!
- Axolotls currently love tropical fish, though this may change. Tropical fish or tropical fish buckets can be used to mate axolotls.
- Axolotls will swim around with you if you’re holding a tropical fish or tropical fish bucket in one of your hands.
- When a player kills a mob that the axolotl was attacking or being attacked by, the axolotl will show its appreciation by granting the player temporary regeneration and removing any mining fatigue effects.
- You can pick up your axolotl in a water bucket and carry it around just like a salmon or cod!
- Axolotls will always chase after squids and other types of fish.
- Axolotls are skittish, but they will attack Drowned and Guardians if you tempt them with their favorite food – tropical fish!
- Axolotls do not like it out of the water and will dry up and begin taking damage if they are out of water for longer than 5 minutes.
- An axolotl will not dry up as long as they are in water or rain.
- Sometimes when an axolotl takes damage, it will pretend to be dead so that it stops being attacked.
- There are four common varieties and 1 rare variety of axolotl.
- Axolotls do not spawn in the world in the world yet, but you can find spawn eggs for them in the creative inventory.

# CHANGES IN 20W51A

- Bundles and shulker box items will now drop their items when destroyed.
- Some changes have been made to sculk sensors.

## SCULK SENSORS

- Eating Start has been removed as an event for a few reasons.
  - It is inconsistent with our philosophy around vibrations. Mining a block is not considered a vibration because a physical event hasn’t happened in the world yet (you can stop mining and the block will revert). This is the same for eating: you can start eating, but then stop and the food reverts as if eating never occurred.
  - It wasn’t widely considered to be a useful event for players to use sculk sensors with.
  - Eating Finish is staying, and will likely be much more useful to sculk sensors for this scenario.
- Walking on wool no longer causes vibrations.
- Throwing wool as an item onto the ground no longer causes vibrations.
- Sculk sensors are now silent while waterlogged.  
  ​

### VIBRATION FREQUENCY CHANGES

As we continue to consider feedback from the community, some changes to the frequency ranges have been made. We expect this to change quite heavily up until release to figure out the most interesting ranges for gameplay, and as always feedback is extremely welcome! Here is the newest table in this snapshot.

  
​

|  |  |
|----|----|
| Vibration Types | Frequency Value |
| Step | 1 |
| Flap | 2 |
| Swim | 3 |
| Elytra Free Fall | 4 |
| Hit Ground | 5 |
| Splash, Wolf Shaking | 6 |
| Projectile Shoot | 7 |
| Projectile Land, Eating Finish, Entity Hit | 8 |
| Armor Stand Add Item | 9 |
| Block Close, Block Unswitch, Block Unpress, Block Detach, Dispense Fail | 10 |
| Block Open, Block Switch, Block Press, Block Attach | 11 |
| Block Place, Fluid Place, Flint And Steel Use | 12 |
| Block Destroy, Fluid Pickup | 13 |
| Fishing Rod Reel-In, Container Close, Piston Contract | 14 |
| Fishing Rod Cast, Container Open, Explode, Lightning Strike, Piston Extend | 15 |

#  TECHNICAL CHANGES IN 20W51A

- Added gamerule playersSleepingPercentage (100 by default), which sets what percentage of players must sleep to skip the night. Setting to 0 will mean 1 player is always enough to skip the night. Setting above 100 will prevent skipping the night.

# FIXED BUGS IN 20W51A

- [MC-149799](https://bugs.mojang.com/browse/MC-149799) - When a crossbow is loaded and in the offhand, you do not see it anymore if you carry an item in the main hand
- [MC-176615](https://bugs.mojang.com/browse/MC-176615) - It is possible to destroy netherite items with lava by putting them inside a container
- [MC-203563](https://bugs.mojang.com/browse/MC-203563) - Cake appears eaten for a split second when putting a candle on it
- [MC-203568](https://bugs.mojang.com/browse/MC-203568) - Trying to put a candle onto a candle cake duplicates the candle
- [MC-204058](https://bugs.mojang.com/browse/MC-204058) - Placing a candle on a cake causes hunger display desync
- [MC-204146](https://bugs.mojang.com/browse/MC-204146) - Netherite can burn whilst inside of a bundle
- [MC-205057](https://bugs.mojang.com/browse/MC-205057) - Bundle inventory preview is off-center inside of the tooltip box
- [MC-205212](https://bugs.mojang.com/browse/MC-205212) - Desync when putting a candle on a cake in Survival mode
- [MC-207405](https://bugs.mojang.com/browse/MC-207405) - Nether stars can be blown up while being inside of a bundle/shulker box
- [MC-208082](https://bugs.mojang.com/browse/MC-208082) - Game stalls when any message is displayed in chat while playing with an expired session

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/fc87ef4c3cf1c815809249cc00ccade233b22cf5/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
