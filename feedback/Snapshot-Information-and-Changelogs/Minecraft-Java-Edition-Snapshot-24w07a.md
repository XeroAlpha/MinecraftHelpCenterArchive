---
title: "Minecraft: Java Edition - Snapshot 24w07a"
date: 2024-02-14T16:23:44Z
updated: 2024-02-14T16:23:50Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/24117322935565-Minecraft-Java-Edition-Snapshot-24w07a
hash:
  h_01HPM6W9BR91M9T5MKAM7PEBVQ: known-issues
  h_01HPM6W9BRH149MYQZR6M2EWKT: experimental-features
  h_01HPM6W9BRH5EQQKNM360TSHJ5: bogged
  h_01HPM6W9BRTSGWB7W8P77WPVPE: changes
  h_01HPM6W9BR0PPFSGERP3QXS3VN: technical-changes
  h_01HPM6W9BRCVCCN1D7D92JA63W: data-pack-version-32
  h_01HPM6W9BRSBR8240SRKAFGSSY: fixed-bugs-in-24w07a
  h_01HPM6W9BRFCQ21X0PZN9PXFVJ: get-the-snapshot
---

We are now releasing 24w07a, containing bug fixes and a new skeleton variant called Bogged.

Good luck dodging poisonous arrows!

## KNOWN ISSUES

- The fall damage reduction for the Wind Charge is not working

## EXPERIMENTAL FEATURES

### BOGGED

- A new variant of Skeletons that shoot poisonous arrows
  - They're faster to take down with 16 health instead of 20 health
  - They attack at a slower interval of 3.5 seconds instead of 2 seconds
- Has a chance to drop Arrows of Poison when killed by players
- These mossy and mushroom covered Skeletons spawn naturally in Swamps and Mangrove Swamps
  - Can also be found spawning from Trial Spawners in some Trial Chambers

## CHANGES

- Hoppers can once again pick up items from beehives and beenests, but other full blocks still block them

## TECHNICAL CHANGES

- The Data Pack version is now 32

## DATA PACK VERSION 32

- Added \#minecraft:does_not_block_hoppers for blocks that will never disable a Hopper when placed above one
- Added gameplay/panda_sneeze loot table for drops when Pandas sneeze

## FIXED BUGS IN 24W07A

- [MC-266570](https://bugs.mojang.com/browse/MC-266570) - Wind charges can't go through non solid blocks
- [MC-267732](https://bugs.mojang.com/browse/MC-267732) - /place jigsaw still caps max depth at 7
- [MC-267866](https://bugs.mojang.com/browse/MC-267866) - Panda slimeball drop is hardcoded
- [MC-268080](https://bugs.mojang.com/browse/MC-268080) - When the projectiles are reflected from the breeze, the projectiles will deflect in the opposite direction in Bedrock, but in Java they will always deflect downward
- [MC-268339](https://bugs.mojang.com/browse/MC-268339) - "Japanese" is misspelled as "Japanse" in options.japaneseGlyphVariants.tooltip
- [MC-268342](https://bugs.mojang.com/browse/MC-268342) - Breeze can be damaged by wind charge
- [MC-268344](https://bugs.mojang.com/browse/MC-268344) - Breezes are not affected by the looting enchantment
- [MC-268349](https://bugs.mojang.com/browse/MC-268349) - Hopper minecarts with a full block above them no longer search for item entities to pick up
- [MC-268353](https://bugs.mojang.com/browse/MC-268353) - Tick Freeze randomizes next AI tick type
- [MC-268355](https://bugs.mojang.com/browse/MC-268355) - Tick freeze lets chunk tickets expire
- [MC-268362](https://bugs.mojang.com/browse/MC-268362) - Blocks which typically negate fall damage fail to do so from falls after using wind charges
- [MC-268368](https://bugs.mojang.com/browse/MC-268368) - Wind charge bounces cause fall damage after exiting water
- [MC-268383](https://bugs.mojang.com/browse/MC-268383) - Wind Charges negate all fall damage that does not occur below the hit point, regardless of whether the fall was caused by the charge or not
- [MC-268389](https://bugs.mojang.com/browse/MC-268389) - Fall damage is conserved between game modes with Wind Charge
- [MC-268418](https://bugs.mojang.com/browse/MC-268418) - Pre-1.9 chunks get regenerated seemingly randomly when upgrading
- [MC-268426](https://bugs.mojang.com/browse/MC-268426) - Wind charges shot from breezes no longer explode and instead are deleted upon hitting breezes after being deflected
- [MC-268451](https://bugs.mojang.com/browse/MC-268451) - Hoppers can't pull honey bottles from bee hives or bee nests

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/94acd52e9b9392e21a06231bdc4f8f0cd6ccb2af/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
