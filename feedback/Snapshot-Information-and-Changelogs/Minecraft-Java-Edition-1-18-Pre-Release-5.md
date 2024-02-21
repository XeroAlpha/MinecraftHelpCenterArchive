---
title: "Minecraft: Java Edition - 1.18 Pre-Release 5"
date: 2021-11-19T16:31:56Z
updated: 2021-11-19T16:32:29Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4414081633293-Minecraft-Java-Edition-1-18-Pre-Release-5
hash:
  changes-in-1.18-pre-release-5: changes-in-118-pre-release-5
  fixed-bugs-in-1.18-pre-release-5: fixed-bugs-in-118-pre-release-5
---

We're now releasing pre-release 5 for Minecraft 1.18. This pre-release contains more bug fixes and a tweak to new cave generation under existing chunks.

# CHANGES IN 1.18 PRE-RELEASE 5

- If there is any bedrock at height 0 in a chunk, new world generation will happen under any non-air block at height 0 in that chunk

# FIXED BUGS IN 1.18 PRE-RELEASE 5

- [MC-138118](https://bugs.mojang.com/browse/MC-138118) - Parrot wing texture is reversed on the bottom
- [MC-148422](https://bugs.mojang.com/browse/MC-148422) - Stripped dark oak log side texture is too bright
- [MC-150567](https://bugs.mojang.com/browse/MC-150567) - Dark oak log top texture bark ring not updated
- [MC-162038](https://bugs.mojang.com/browse/MC-162038) - Pillagers have no hood texture
- [MC-162803](https://bugs.mojang.com/browse/MC-162803) - Lily Pad mirrors texture when placed
- [MC-170557](https://bugs.mojang.com/browse/MC-170557) - Spruce door top/bottom has the incorrect texture
- [MC-176309](https://bugs.mojang.com/browse/MC-176309) - Illusioner has a few misplaced pixels left in their texture
- [MC-176824](https://bugs.mojang.com/browse/MC-176824) - Red glass and outline of blue glass are slightly more opaque.
- [MC-176833](https://bugs.mojang.com/browse/MC-176833) - Anvil GUI hammer uses an outdated iron pallet
- [MC-177664](https://bugs.mojang.com/browse/MC-177664) - Sound system warning messages are spamming the system log
- [MC-180398](https://bugs.mojang.com/browse/MC-180398) - Too many sounds causes client to stall, limit can be easily reached with rabbits
- [MC-194822](https://bugs.mojang.com/browse/MC-194822) - Glass pane top texture has not changed with the Texture Update
- [MC-194950](https://bugs.mojang.com/browse/MC-194950) - Cactus in potted cactus is vertically squished
- [MC-198007](https://bugs.mojang.com/browse/MC-198007) - Villages replace ice with path blocks instead of wood
- [MC-199662](https://bugs.mojang.com/browse/MC-199662) - Extra pixels in cocoa pod textures as of Texture Update
- [MC-200046](https://bugs.mojang.com/browse/MC-200046) - Cartography table planks texture is incorrect/slightly outdated
- [MC-200137](https://bugs.mojang.com/browse/MC-200137) - Lectern base plate texture still uses the old planks texture
- [MC-200956](https://bugs.mojang.com/browse/MC-200956) - Beetroot seeds texture is not vertically centered
- [MC-200957](https://bugs.mojang.com/browse/MC-200957) - Melon seeds texture is not vertically centered
- [MC-202910](https://bugs.mojang.com/browse/MC-202910) - Inconsistent highlight color on armor
- [MC-204901](https://bugs.mojang.com/browse/MC-204901) - Side texture for dirt paths hasn’t been updated with the texture update
- [MC-221172](https://bugs.mojang.com/browse/MC-221172) - Warped and Crimson Stems use different top texture from Bedrock Edition
- [MC-222154](https://bugs.mojang.com/browse/MC-222154) - Cave vines can generate hanging on pointed dripstone
- [MC-222763](https://bugs.mojang.com/browse/MC-222763) - Armor stands use the old smooth stone slab texture
- [MC-225553](https://bugs.mojang.com/browse/MC-225553) - Oak and iron doors have a line in their textures
- [MC-226711](https://bugs.mojang.com/browse/MC-226711) - Carrot crop texture has an incorrect pixel
- [MC-227258](https://bugs.mojang.com/browse/MC-227258) - Flowering Azalea Leaves are in both \#minecraft:mineable/hoe and \#minecraft:mineable/axe tags, while regular Azalea Leaves (and all other leaves) are only in \#minecraft:mineable/hoe
- [MC-228900](https://bugs.mojang.com/browse/MC-228900) - Cave vines can generate floating (Recurrence of MC-218817)
- [MC-229977](https://bugs.mojang.com/browse/MC-229977) - Breaking blocks with pistons on the east/west direction causes significant lag
- [MC-231272](https://bugs.mojang.com/browse/MC-231272) - Cave vines can sometimes generate hanging on cobwebs
- [MC-231818](https://bugs.mojang.com/browse/MC-231818) - You can no longer use the up or down arrow to navigate between servers in the multiplayer menu
- [MC-233883](https://bugs.mojang.com/browse/MC-233883) - The hide and show messages buttons in the social interactions menu display their hover text regardless of the position of the cursor
- [MC-234039](https://bugs.mojang.com/browse/MC-234039) - The back of wild axolotls are off-centered
- [MC-235567](https://bugs.mojang.com/browse/MC-235567) - Clusters of dripstone (stalagmites) tend to generate abnormally frequent with thickness “tip” on tall caves
- [MC-236723](https://bugs.mojang.com/browse/MC-236723) - The Floating Islands preset does not seem to be generating correctly
- [MC-237500](https://bugs.mojang.com/browse/MC-237500) - Azalea trees can generate on top of huge mushrooms, trees & bamboo
- [MC-238360](https://bugs.mojang.com/browse/MC-238360) - Rooted dirt cannot replace terracotta
- [MC-238529](https://bugs.mojang.com/browse/MC-238529) - Azalea trees can fail to generate
- [MC-238892](https://bugs.mojang.com/browse/MC-238892) - Rooted dirt doesn’t replace red sand
- [MC-239128](https://bugs.mojang.com/browse/MC-239128) - Sweet berry bushes generate extremely rare in comparison with 1.17.1
- [MC-239237](https://bugs.mojang.com/browse/MC-239237) - Azalea trees can be generated on icebergs
- [MC-239489](https://bugs.mojang.com/browse/MC-239489) - Melons generate rarely in jungle biomes
- [MC-239847](https://bugs.mojang.com/browse/MC-239847) - Chunk blending occasionally produces sharp chunk border edges
- [MC-241256](https://bugs.mojang.com/browse/MC-241256) - Some feature configs still expect a configured feature instead of a placed feature
- [MC-241278](https://bugs.mojang.com/browse/MC-241278) - Azalea trees are no longer generating
- [MC-241539](https://bugs.mojang.com/browse/MC-241539) - Stone generates in the side of hoodoos
- [MC-241566](https://bugs.mojang.com/browse/MC-241566) - Mossy cobblestone boulders generate in a grid pattern in old-growth spruce taigas
- [MC-241588](https://bugs.mojang.com/browse/MC-241588) - Cave vines can sometimes generate hanging on water
- [MC-241672](https://bugs.mojang.com/browse/MC-241672) - Mobs don’t panic when burning if standing on blocks placed above water
- [MC-241728](https://bugs.mojang.com/browse/MC-241728) - Converting world to 1.18 pre-release 2 generates new caves in too many places
- [MC-241747](https://bugs.mojang.com/browse/MC-241747) - Inconsistent Colors in grindstone gui
- [MC-241784](https://bugs.mojang.com/browse/MC-241784) - Some sliders in options menu do not work properly
- [MC-241800](https://bugs.mojang.com/browse/MC-241800) - Cannot change numbers for gamerules on world creation
- [MC-241847](https://bugs.mojang.com/browse/MC-241847) - Floating stone platform doesn’t generate in void superflat world preset
- [MC-241933](https://bugs.mojang.com/browse/MC-241933) - Spore blossoms, cave vines, and pointed dripstones generate indented into the cave surface

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c29d03e9c6a21a3234a947e1025793c3cc40c13b/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
