---
title: Minecraft Java Edition - Snapshot 20W11A
date: 2020-03-11T18:09:07Z
updated: 2025-03-12T11:15:04Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360040849531-Minecraft-Java-Edition-Snapshot-20W11A
---

11 March 2020

In this snapshot you can be on your merry way across the beautiful Soulsand Valleys with your freshly enchanted boots. It's a bit scary to be fair, so these boots will help you out with that bit...

# BEFORE WE DIVE INTO THIS SNAPSHOT, A WORD ABOUT REDSTONE

Redstone is one of the coolest things in Minecraft and many of you are members of communities that focus on building mind-blowing redstone contraptions, farms, computing machines and 256x256 piston doors.

A lot of redstone behaviour is currently categorized as “undefined”. This is when the behaviour of the block is not the result of intentional code but is a side-effect of unaccounted edge cases or quirks in the game code.​

We know that many players consider undefined behaviour as a very interesting aspect of redstone and enjoy experimenting with and using undefined behaviour to build unique contraptions to share with the rest of the community.​

However, the quirks of undefined behaviour can be quite surprising - even when building simple contraptions. This quirkiness can be a negative experience for players new to redstone and may turn them away from this very unique and exciting aspect of Minecraft as well as the vast redstone community behind it.​

Our goal is to bring all redstone components up to a level of quality that we are happy with and we will be making adjustments where it makes the most sense for redstone going forward.

Any changes we make will be communicated in the snapshot changelogs and as always we will be reading your feedback and comments. If you have any immediate feedback regarding redstone then please make a post on the [feedback website](https://feedback.minecraft.net/).

# NEW FEATURES IN 20W11A

- Added Soul Speed enchantment
- Added Twisting Vines that grow upwards
- Nether gold ore can now be found in the nether - it is just like gold ore, but more Nether-y

## SOUL SPEED

Never suffer again drudging through Soul Sand Valleys - Soul Speed has you covered!

- Shine your boots of choice with this soul-sucking enchantment to speed around on Soul Sand and Soul Soil!
- There's a downside, however: enchantments will slowly degrade your boots each Soul block you walk on
- Can only be obtained by bartering with those pesky Piglins

# CHANGES IN 20W11A

- Bone meal can now be used to grow kelp, weeping vines and twisting vines
- Hoes are now the appropriate tools for mining Hay, Targets, Dried Kelp Blocks, Shroomlights, Nether Wart Blocks and Warped Wart Blocks
- Doors, rails, buttons, pressure plates, redstone and more can now be placed on soulsand and full-block of snow layers
- Soul sand with a rail on top will no longer slow-down minecarts
- TNT and Campfires will now ignite when hit by any burning projectile
- Bell blocks will now ring when hit by any projectile

# TECHNICAL CHANGES IN 20W11A

- minecraft:soul_speed_blocks is any block that the Soul Speed enchantment increases speed on
- New particle type: soul

# FIXED BUGS IN 20W11A

- [MC-81659](https://bugs.mojang.com/browse/MC-81659) - Fireball and witherskull hitboxes are frequently invisible for some seconds
- [MC-134900](https://bugs.mojang.com/browse/MC-134900) - server.properties generator-settings for level-type FLAT not implemented; property is stored in ignored flat_world_options NBT
- [MC-145140](https://bugs.mojang.com/browse/MC-145140) - Fireballs cannot be interacted with when summoned
- [MC-146928](https://bugs.mojang.com/browse/MC-146928) - Can’t place doors, rails, buttons, pressure plate, redstone, etc. on soul sand
- [MC-148935](https://bugs.mojang.com/browse/MC-148935) - Zombies with no AI still convert into drowned
- [MC-171079](https://bugs.mojang.com/browse/MC-171079) - Comparators no longer work as expected reading containers through powered blocks
- [MC-171860](https://bugs.mojang.com/browse/MC-171860) - Nether fossils have code implying an unimplemented /locate function
- [MC-172266](https://bugs.mojang.com/browse/MC-172266) - Crossbow wielding piglins do not properly walk backwards to target the player when very close
- [MC-172323](https://bugs.mojang.com/browse/MC-172323) - Game crashes when summoning a hoglin with the attack damage attribute set to 0 or giving a hoglin weakness with a very high level (255)
- [MC-172374](https://bugs.mojang.com/browse/MC-172374) - Can teleport to invalid y coordinates and crash the game
- [MC-172428](https://bugs.mojang.com/browse/MC-172428) - Piglins and hoglins don’t look at their target
- [MC-172470](https://bugs.mojang.com/browse/MC-172470) - When the piglin holds the bow, it will try to attack and follow the enemy eventually stood there not moving
- [MC-172530](https://bugs.mojang.com/browse/MC-172530) - Piglins indefinitely stand around dropped golden items if mobGriefing is disabled
- [MC-172903](https://bugs.mojang.com/browse/MC-172903) - Piglins which convert into zombified piglins delete armor if equipped
- [MC-173156](https://bugs.mojang.com/browse/MC-173156) - Z-fighting at bottom of potted bamboo; bottom texture of bamboo is exposed
- [MC-173167](https://bugs.mojang.com/browse/MC-173167) - Netherite sword/tools not sorted with other swords/tools
- [MC-173180](https://bugs.mojang.com/browse/MC-173180) - Hoglins are not scared of Warped Fungus in flower pots
- [MC-173219](https://bugs.mojang.com/browse/MC-173219) - No sound when climbing weeping vines
- [MC-173243](https://bugs.mojang.com/browse/MC-173243) - Crying obsidian is movable by pistons
- [MC-173283](https://bugs.mojang.com/browse/MC-173283) - Piglin admiring held gold ingot doesn’t drop it when killed
- [MC-173302](https://bugs.mojang.com/browse/MC-173302) - Crying Obsidian can be harvested with any pickaxe
- [MC-173384](https://bugs.mojang.com/browse/MC-173384) - Crying obsidian can be destroyed by the Ender Dragon
- [MC-173433](https://bugs.mojang.com/browse/MC-173433) - Killing a baby Hoglin doesn’t yield experience
- [MC-173462](https://bugs.mojang.com/browse/MC-173462) - Baby piglins can hold soul fire torches
- [MC-173467](https://bugs.mojang.com/browse/MC-173467) - Piglins admiring bartering gold ingot drop nothing when converting to Zombified Piglin
- [MC-173484](https://bugs.mojang.com/browse/MC-173484) - Death message from falling off a trapdoor does not mention it by name
- [MC-173485](https://bugs.mojang.com/browse/MC-173485) - Death message from falling off scaffolding does not mention it by name
- [MC-173706](https://bugs.mojang.com/browse/MC-173706) - NullPointerException in server tick loop when trying to load a flatland world with Nether biome
- [MC-173725](https://bugs.mojang.com/browse/MC-173725) - Anvil name field doesn’t automatically receive focus anymore and is unclickable
- [MC-173731](https://bugs.mojang.com/browse/MC-173731) - Fire and soul fire play a sound and produce particles when extinguished
- [MC-173732](https://bugs.mojang.com/browse/MC-173732) - Fire and soul fire do not have loot tables
- [MC-173739](https://bugs.mojang.com/browse/MC-173739) - Missing sound for event: minecraft:block.smithing_table.use
- [MC-173766](https://bugs.mojang.com/browse/MC-173766) - Thrown tridents disappear after hitting and damaging a mob or entity
- [MC-173776](https://bugs.mojang.com/browse/MC-173776) - Hoes do not mine targets faster
- [MC-173792](https://bugs.mojang.com/browse/MC-173792) - End gateways don’t work using enderpearls
- [MC-173858](https://bugs.mojang.com/browse/MC-173858) - Unable to set “LeftHanded” to “1b” for piglins

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/0c80ec15d36440cdeaffe1a0791fed78faea62ce/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
