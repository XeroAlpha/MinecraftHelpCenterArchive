---
title: "Minecraft: Java Edition Snapshot 22w16a/22w16b"
date: 2022-04-27T09:21:22Z
updated: 2022-09-15T14:13:42Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/5824877514509-Minecraft-Java-Edition-Snapshot-22w16a-22w16b
---

<div>

<div class="container">

<div class="row justify-content-center text-center">

<div class="col-12 col-md-8 col-lg-6">

# MINECRAFT SNAPSHOT 22W16B  

</div>

</div>

</div>

</div>

<div class="aem-Grid aem-Grid--12 aem-Grid--default--12">

<div class="text parbase aem-GridColumn aem-GridColumn--default--12">

<div class="container article-paragraph text-generic">

<div class="row justify-content-center">

<div class="col-md-8 col-lg-6">

<div class="end-with-block">

A  chance to re-live the good old times appears in snapshot 22w16a with the ability to de-fragment a Disc – a new Music Disc, to be precise! This snapshot also comes with even more new music, tweaks to the Allay, and to top it all off some random gameplay events are slightly more predictable.

Enjoy!

**Update**: We've now released snapshot 22w16b to fix a crash.

# FIXED BUGS IN 22W16B

- [MC-250312](https://bugs.mojang.com/browse/MC-250312) - Game crashing when clicking singleplayer \|\| java.lang.NullPointerException: Cannot invoke "java.lang.Comparable.compareTo(Object)" because "pivot" is null

# NEW FEATURES IN 22W16A

- Added new music
- Added Disc Fragment 5 and Music Disc 5

## FOUR NEW MUSIC TRACKS

- The new music tracks are called Ancestry, Aerie, Firebugs, and Labyrinthine
- They play in certain biomes and in the main menu

## MUSIC DISC 5

A new music disc has been added to the game.

- Unlike other discs, it can only be obtained by finding and crafting 9 Disc Fragments together
- These Disc Fragments can be found rarely in Ancient City chests

# CHANGES IN 22W16A

- Allay tweaks
- Improved the predictability a number of gameplay elements
- Frogs can now spawn on Grass, Mud, Moss Carpet, Mangrove Roots and Muddy Mangrove Roots
- Froglights are now movable by pistons

## ALLAY TWEAKS

- Allay health raised from 10 to 20
- Delay after item throw lowered from 5 secs to 3 secs
- Item search range raised from 9 to 32
- Movement speed changes:
  - Allay is now slower when just wandering
  - Allay is now faster when collecting items, going to the player or going to a noteblock
- Throw arc has changed following community feedback

## PREDICTABILITY OF RANDOMIZED EVENTS

Some randomized events are now more predictable and no longer have a possibility of extreme behaviors.

- Placement and velocity of things dropped from Droppers/Dispensers
- Placement and velocity of items spawned from containers upon destroy
- Randomized follow_range component attribute for mobs
- Velocity of Horses spawned from skeleton traps
- Blaze random position and randomized speed of Blaze projectiles
- Randomized portion of damage and velocity of Arrows
- Randomized flight pattern of Fireworks
- Bobbing patterns and time until a fish for Fishing Rods

# TECHNICAL CHANGES IN 22W16A

- LWJGL library has been updated to version 3.3.1
- Added a heap memory allocation metric to the F3 debug screen
- Added doWardenSpawning game rule
- Updates to paintings

## PAINTING

- Paintings that are placeable in survival can now be controlled with the painting_variant/placeable tag
- Added unused paintings from Bedrock edition (earth, wind, fire, water)
  - These paintings are not placeable by default, but can be added through a datapack

# FIXED BUGS IN 22W16A

- [MC-81870](https://bugs.mojang.com/browse/MC-81870) - Editing entitydata of Painting does not reflect ingame until chunk reload
- [MC-111809](https://bugs.mojang.com/browse/MC-111809) - Paintings unrender when entity data is updated rapidly
- [MC-187188](https://bugs.mojang.com/browse/MC-187188) - Painting NBT and registry contain a typo: “Motive” instead of “Motif”
- [MC-226184](https://bugs.mojang.com/browse/MC-226184) - Axolotls pathfinding to water can sometimes fall in wide holes
- [MC-228049](https://bugs.mojang.com/browse/MC-228049) - Axolotl can’t pathfind through open doors
- [MC-228174](https://bugs.mojang.com/browse/MC-228174) - Axolotls try to pathfind through 2 tall walls
- [MC-244957](https://bugs.mojang.com/browse/MC-244957) - “Search” Option in Social Interactions Screen is not labeled in the right order when using Tab
- [MC-245001](https://bugs.mojang.com/browse/MC-245001) - “Manage with Microsoft account” button in Social Interactions menu is not centered
- [MC-249084](https://bugs.mojang.com/browse/MC-249084) - No sound is present for placing a Bucket of Tadpole
- [MC-249092](https://bugs.mojang.com/browse/MC-249092) - Mangrove Stripped Log, Stripped Wood and Wood are in the incorrect order in the creative inventory
- [MC-249176](https://bugs.mojang.com/browse/MC-249176) - Froglights are not visible on maps
- [MC-249193](https://bugs.mojang.com/browse/MC-249193) - Frog can’t pathfind through open doors
- [MC-249217](https://bugs.mojang.com/browse/MC-249217) - Fluid level next to froglights is too low
- [MC-249245](https://bugs.mojang.com/browse/MC-249245) - Turtle can’t pathfind through open doors
- [MC-249246](https://bugs.mojang.com/browse/MC-249246) - Strider can’t pathfind through open doors
- [MC-249265](https://bugs.mojang.com/browse/MC-249265) - Some blocks cannot be placed on froglights
- [MC-249459](https://bugs.mojang.com/browse/MC-249459) - Cactus is not destroyed by froglights
- [MC-249663](https://bugs.mojang.com/browse/MC-249663) - The subtitles of some parrot imitation sounds are inconsistent with the original sounds’ subtitles
- [MC-249679](https://bugs.mojang.com/browse/MC-249679) - Incorrect activation of warden’s sniffing animations and behavior
- [MC-249715](https://bugs.mojang.com/browse/MC-249715) - Allays don’t drop their held items upon death
- [MC-249766](https://bugs.mojang.com/browse/MC-249766) - Allays can despawn after being given an item if they haven’t picked up any items yet
- [MC-249790](https://bugs.mojang.com/browse/MC-249790) - Allay follows and drops items for players in spectator mode
- [MC-249838](https://bugs.mojang.com/browse/MC-249838) - Allays lose their idle animation once they start moving
- [MC-249855](https://bugs.mojang.com/browse/MC-249855) - Parity Issue: Allays don’t have a flying animation in Java
- [MC-249912](https://bugs.mojang.com/browse/MC-249912) - minecraft:ancient_city/city_center_3 is one block shorter compared than the other ancient city centers
- [MC-249928](https://bugs.mojang.com/browse/MC-249928) - Mangrove tree roots do not update blocks around them when generating
- [MC-250039](https://bugs.mojang.com/browse/MC-250039) - Wardens can get angry at mobs outside world border
- [MC-250040](https://bugs.mojang.com/browse/MC-250040) - Wardens can hear mobs beyond the world border
- [MC-250041](https://bugs.mojang.com/browse/MC-250041) - Wardens can spawn outside of world border
- [MC-250044](https://bugs.mojang.com/browse/MC-250044) - Observers don’t detect mangrove roots when tree grows
- [MC-250094](https://bugs.mojang.com/browse/MC-250094) - Wardens ignore /kill execution whilst they’re emerging or digging
- [MC-250095](https://bugs.mojang.com/browse/MC-250095) - Wardens can spawn in very narrow places, causing them to suffocate
- [MC-250293](https://bugs.mojang.com/browse/MC-250293) - The “allay_dust” particle is unused
- [MC-250294](https://bugs.mojang.com/browse/MC-250294) - Parity Issue: Allays item detection range is significantly smaller than in Bedrock

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/a54810e8b1a7a043fa54a462309d680ad67da479/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

</div>

</div>

</div>

</div>

</div>

</div>
