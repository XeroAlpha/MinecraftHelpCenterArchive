---
title: "Minecraft: Java Edition - Snapshot 21w06a"
date: 2021-02-10T17:59:28Z
updated: 2021-02-10T17:59:35Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360056479612-Minecraft-Java-Edition-Snapshot-21w06a
---

Hello, new snapshot! Hello, new cave generation! 

Today's snapshot introduces a major change to how caves are generated within Minecraft. You could say that we're now introducing the cave part of *Caves & Cliffs*. 

This is only the first step in our underground adventure, so please note that snapshots show features in early development and that there are two notable caveats with this snapshot:

- You'll be unable to open old worlds in this snapshot as there is currently no upgrade path towards the new world height
- All caves of the new type between y31 and y63 will be flooded with water

# NEW FEATURES IN 21W06A

- Added noise caves and aquifers

## NOISE CAVES AND AQUIFERS

- Noise caves are a new way of generating caves, providing more natural variety. They can get really huge sometimes!  
  Noise caves come in two flavors:
  - Cheese caves. Like the holes in swiss cheese. These often form caverns of various sizes.
  - Spaghetti caves. Long squiggly tunnels, sometimes wide like tagliatelle.
- No, they aren’t loud. The “noise” part of noise caves is a technical term and has nothing to do with sound.
- The old cave carvers and canyons still generate, combining with the noise caves to form interesting cave systems.
- As with carvers, when noise caves intersect the surface they form cave entrances.
- An aquifer is an area with local water level, independent of sea level. Aquifers are used during world generation to generate bodies of water inside noise caves. This sometimes results in large underground lakes!
- For now, aquifers are only used below y31. This means all noise caves between y31 and sea level (y63) will be flooded with water, and noise cave entrances will essentially be lakes. This will be fixed later.
- Magma sometimes generates at the bottom of underground bodies of water.
- Underwater cave carvers and underwater canyons have been removed since aquifers are used to generate water in caves instead.

# CHANGES IN 21W06A

- Overworld build and generation limits have been expanded
- Mineshafts adapted to larger caves
- You can no longer crouch or jump to prevent a big dripleaf from tilting
- A big dripleaf will now tilt rather than break when hit by a projectile
- A redstone powered big dripleaf will not tilt (except when hit by a projectile)
- The textures for hanging roots and small dripleaves have been updated

## WORLD GENERATION

- Generation range and build limits have been expanded by 64 blocks up and 64 blocks down, to a total range of 384 blocks.
- Underground features, structures, and caves generate all the way down to y -64.

## MINESHAFT CHANGES

- Mineshaft pieces don’t generate if they would be fully floating in the air
- Mineshaft corridors are supported by log pillars when needed
- No floating cobwebs

# FIXED BUGS IN 21W06A

- [MC-214346](https://stackedit.io/%5Bhttps://bugs.mojang.com/browse/MC-214346%5D(https://bugs.mojang.com/browse/MC-214346)) - Big dripleaf can be broken with arrows in spawn protection
- [MC-213813](https://stackedit.io/%5Bhttps://bugs.mojang.com/browse/MC-213813%5D(https://bugs.mojang.com/browse/MC-213813)) - Small dripleaf can destroy any block

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/6290ba4b475fca4a74de990c7fd8eccffd9654dd/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
