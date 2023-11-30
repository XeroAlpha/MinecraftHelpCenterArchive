---
title: "Minecraft: Java Edition - Snapshot 19W39A"
date: 2019-09-27T15:29:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360034174292-Minecraft-Java-Edition-Snapshot-19W39A
---

27 September 2019

<div bi-id="m1r3a3" bi-name="m1r3a3">

<div class="container" bi-id="c1m1r3a3" bi-name="c1m1r3a3">

<div class="row justify-content-center text-center" bi-id="c1c1m1r3a3" bi-name="c1c1m1r3a3">

<div class="col-12 col-md-8 col-lg-6" bi-id="c1c1c1m1r3a3" bi-name="c1c1c1m1r3a3">

# MINECRAFT SNAPSHOT 19W39A

A Minecraft Java Snapshot

</div>

</div>

</div>

</div>

<div class="aem-Grid aem-Grid--12 aem-Grid--default--12" bi-id="m2r3a3" bi-name="m2r3a3">

<div class="text parbase aem-GridColumn aem-GridColumn--default--12" bi-id="c1m2r3a3" bi-name="c1m2r3a3">

<div class="container article-paragraph text-generic" bi-id="c1c1m2r3a3" bi-name="c1c1m2r3a3">

<div class="row justify-content-center" bi-id="c1c1c1m2r3a3" bi-name="c1c1c1m2r3a3">

<div class="col-md-8 col-lg-6" bi-id="c1c1c1c1m2r3a3" bi-name="c1c1c1c1m2r3a3">

<div class="end-with-block" bi-id="c1c1c1c1c1m2r3a3" bi-name="c1c1c1c1c1m2r3a3">

A slightly later snapshot than usual this week, but it addresses a few bugs that we wanted to get rid of. 

On a slightly different note, tomorrow it's time for MINECON Live where we'll announce the theme of the next update! You can find more information about MINECON Live by clicking [here](https://www.minecraft.net/minecon). 

# CHANGES IN 19W39A

- Fixed bugs
- Technical changes listed below

# TECHNICAL

## CHAT COMPONENTS

### NBT CHAT COMPONENT

- Added variant for NBT storage: {"nbt": \<path\>, "storage":"\<resource id\>"}. NBT storage can be manipulated with commands like /data merge storage \<resource id\> ....

## TEXTURES

- Changed texture map for all chests

- Banner patterns are now using alpha channel instead of brightness

- Ender dragon does not have separate texture for the bottom of the wing anymore

- Enchanted item glint texture is now like it looks in the game

# FIXED BUGS IN 19W39A

- [MC-791](https://bugs.mojang.com/browse/MC-791) - Rails are not placed in the direction the player is looking
- [MC-2140](https://bugs.mojang.com/browse/MC-2140) - Connecting to a server with a space in the name fails
- [MC-4240](https://bugs.mojang.com/browse/MC-4240) - Placing fireworks on a side of a block summons it inside that block and makes it stuck under blocks above
- [MC-4378](https://bugs.mojang.com/browse/MC-4378) - Iron doors drop when destroyed by hand
- [MC-9553](https://bugs.mojang.com/browse/MC-9553) - Wrong rendering order of particles, hitboxes, clouds, transparent blocks, breaking animations and various other transparent textures
- [MC-35507](https://bugs.mojang.com/browse/MC-35507) - Block breaking animation renders incorrect at certain angles
- [MC-47941](https://bugs.mojang.com/browse/MC-47941) - TNT/Creepers flash white when exploding
- [MC-63509](https://bugs.mojang.com/browse/MC-63509) - Banners do not have a breaking animation
- [MC-103672](https://bugs.mojang.com/browse/MC-103672) - Steerable ridden entities (boats / pigs / horses) teleport back to their previous position for a short moment on dismount
- [MC-125360](https://bugs.mojang.com/browse/MC-125360) - Enchanted tridents don’t look enchanted
- [MC-136360](https://bugs.mojang.com/browse/MC-136360) - Attached pumpkin and melon stems do not drop seeds when broken
- [MC-154779](https://bugs.mojang.com/browse/MC-154779) - Bed breaking texture is not centered properly
- [MC-158484](https://bugs.mojang.com/browse/MC-158484) - Game crashes when an illager rides any mob
- [MC-158672](https://bugs.mojang.com/browse/MC-158672) - Entering certain chunks causes FPS drops
- [MC-160387](https://bugs.mojang.com/browse/MC-160387) - Server crash due to a command block with a malformed command
- [MC-160915](https://bugs.mojang.com/browse/MC-160915) - Json text crashes the game when rendered if it attempts to translate a string containing the “%” character
- [MC-161267](https://bugs.mojang.com/browse/MC-161267) - Block selection box is darker compared to older versions
- [MC-161273](https://bugs.mojang.com/browse/MC-161273) - Blocks are rendered incorrectly in inventories if a chest, ender chest, bed, shulker box or another item with special rendering is in the inventory
- [MC-161279](https://bugs.mojang.com/browse/MC-161279) - Chunk borders do not render when enabling them with F3+G
- [MC-161281](https://bugs.mojang.com/browse/MC-161281) - Minecarts with a block in them render incredibly dark
- [MC-161282](https://bugs.mojang.com/browse/MC-161282) - Experience orbs occasionally have a black box around them
- [MC-161283](https://bugs.mojang.com/browse/MC-161283) - Item frames are not lit correctly and always appear black
- [MC-161285](https://bugs.mojang.com/browse/MC-161285) - Item entity’s 3D model does not render the item edges properly
- [MC-161298](https://bugs.mojang.com/browse/MC-161298) - Shulker boxes have z-fighting issues
- [MC-161300](https://bugs.mojang.com/browse/MC-161300) - Blocks held by endermen are darker than usual
- [MC-161302](https://bugs.mojang.com/browse/MC-161302) - Banners appear blank white for a split of a second when placing them
- [MC-161305](https://bugs.mojang.com/browse/MC-161305) - End crystals do not render properly
- [MC-161313](https://bugs.mojang.com/browse/MC-161313) - Boats and other ridable entities occasionally teleport back visually to the mounting position
- [MC-161318](https://bugs.mojang.com/browse/MC-161318) - Item entity textures don’t handle transparency properly, causing a square to appear around an item when in water and in other circumstances
- [MC-161328](https://bugs.mojang.com/browse/MC-161328) - Text on signs displays a black background when viewing them from certain angles
- [MC-161343](https://bugs.mojang.com/browse/MC-161343) - Breaking animation for beds, chests and shulker boxes is not displayed properly
- [MC-161344](https://bugs.mojang.com/browse/MC-161344) - Player model sometimes shows transparency issues
- [MC-161346](https://bugs.mojang.com/browse/MC-161346) - Arrows do not render transparent texture parts properly
- [MC-161353](https://bugs.mojang.com/browse/MC-161353) - Fishing rod bobbers have a black square around them
- [MC-161354](https://bugs.mojang.com/browse/MC-161354) - location_check dimension tests fail when the executing position is not loaded
- [MC-161373](https://bugs.mojang.com/browse/MC-161373) - End crystal beams render opaque
- [MC-161409](https://bugs.mojang.com/browse/MC-161409) - Mushrooms on mushroom cows aren’t lit
- [MC-161423](https://bugs.mojang.com/browse/MC-161423) - Transparent texture layers on some mobs (such as villagers and zombie villagers) sometimes appear completely opaque
- [MC-161443](https://bugs.mojang.com/browse/MC-161443) - ‘Fast’ graphics setting no longer makes leaves opaque
- [MC-161449](https://bugs.mojang.com/browse/MC-161449) - Bee wings and feelers are opaque when viewing them from certain angles
- [MC-161488](https://bugs.mojang.com/browse/MC-161488) - Glowing effect outline is applied to the patterns of banners when carried by entities with the glowing effect
- [MC-161651](https://bugs.mojang.com/browse/MC-161651) - Semi-transparent textures, such as water or glass panes, are not rendered through clouds

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c03cf9537bd7a34640d7e173551b7005799d5675/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

</div>

</div>

</div>

</div>

</div>

</div>
