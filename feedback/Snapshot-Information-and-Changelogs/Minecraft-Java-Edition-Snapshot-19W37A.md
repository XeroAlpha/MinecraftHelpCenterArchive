---
title: "Minecraft: Java Edition - Snapshot 19W37A"
date: 2019-09-11T14:58:26Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360033640551-Minecraft-Java-Edition-Snapshot-19W37A
---

11 September 2019

This week's snapshot brings you more features from other editions of Minecraft and fixes a few bugs.

Do you want to help us fix bugs? Great! We now have a job opening to join the Java Edition team, check it out by clicking [here](https://jobs.mojang.com/jobs/283690-java-game-developer).

# CHANGES IN 19W37A

- Item predicate in advancements now makes distinction between actual enchantments and stored enchantments (like ones stored in enchanted books)
- Blocks that can be manually placed on farmland can now also be pushed onto it by a piston without detroying the farmland
- Fixed bugs

## PARITY

- Boats as fuel now smelt 6 items in a furnace
- Campfire can be extinguished with a shovel
- When breedable mobs in groups spawn naturally they sometimes spawn babies in the groups

## ADVANCEMENTS

- Changes in item predicate:
  - enchantments now only matches enchantments on item itself - it no longer can be used for enchanted books
  - to match contents enchanted book, use stored_enchantments

# FIXED BUGS IN 19W37A

- [MC-2958](https://bugs.mojang.com/browse/MC-2958) - Custom mobs and normal Vexes drop equipped items with looting despite DropChances set to 0
- [MC-42248](https://bugs.mojang.com/browse/MC-42248) - Placing lily pads does not have a hand animation in third-person
- [MC-60634](https://bugs.mojang.com/browse/MC-60634) - Spawn egg ‘use’ animation not shown when using on animal
- [MC-110907](https://bugs.mojang.com/browse/MC-110907) - Curse of vanishing doesn’t work in some places
- [MC-114715](https://bugs.mojang.com/browse/MC-114715) - Mobs picking up items can drop their current item even with drop chance of 0
- [MC-123307](https://bugs.mojang.com/browse/MC-123307) - ‘/execute store’ can modify player data inside item “tags” of their Inventory or EnderItems
- [MC-125880](https://bugs.mojang.com/browse/MC-125880) - Recipe book rejects bows with Damage:0 tag when crafting dispensers
- [MC-127094](https://bugs.mojang.com/browse/MC-127094) - Arm animation is not executed in certain circumstances
- [MC-132445](https://bugs.mojang.com/browse/MC-132445) - Spawn eggs used on water do not display a hand animation
- [MC-136352](https://bugs.mojang.com/browse/MC-136352) - Tools from creative inventory/crafting don’t have Damage:0 set until relog
- [MC-136470](https://bugs.mojang.com/browse/MC-136470) - Buckets’ CanPlaceOn NBT check is applied to the block behind
- [MC-145179](https://bugs.mojang.com/browse/MC-145179) - data modify modifies player item data but shows error message
- [MC-152751](https://bugs.mojang.com/browse/MC-152751) - Horse armor can occasionally be duplicated when killing a horse wearing it with Looting III
- [MC-153661](https://bugs.mojang.com/browse/MC-153661) - Villagers always ring bells in the same direction, even if that should not be possible
- [MC-154873](https://bugs.mojang.com/browse/MC-154873) - When breaking a block with an enchanted book with Silk Touch on it, the block drops itself
- [MC-157494](https://bugs.mojang.com/browse/MC-157494) - Tamed animals no longer teleport to players properly
- [MC-158853](https://bugs.mojang.com/browse/MC-158853) - Chests missing after converting and loading old map from 1.7.10
- [MC-159455](https://bugs.mojang.com/browse/MC-159455) - Mob riding item frame riding mob crashes the server when item frame breaks
- [MC-159785](https://bugs.mojang.com/browse/MC-159785) - Cloned block contains same item in memory
- [MC-160123](https://bugs.mojang.com/browse/MC-160123) - Large ferns no longer drop seeds
- [MC-160248](https://bugs.mojang.com/browse/MC-160248) - Slime and magma cube spawners crash the game
- [MC-160456](https://bugs.mojang.com/browse/MC-160456) - Bee Hives filled with honey are missing their top and bottom texture
- [MC-160458](https://bugs.mojang.com/browse/MC-160458) - Using a portal in an older world creates a new portal instead of taking you to an existing one
- [MC-160461](https://bugs.mojang.com/browse/MC-160461) - When being activated with Redstone, bells always ring in the same direction, even if that should not be possible
- [MC-160464](https://bugs.mojang.com/browse/MC-160464) - New gamerules introduced in snapshot 19w36a default to false in worlds from older versions
- [MC-160484](https://bugs.mojang.com/browse/MC-160484) - Placing wet sponges in the nether does not update redstone
- [MC-160498](https://bugs.mojang.com/browse/MC-160498) - Gamerule fireDamage being set to false does not prevent lava damage

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/e2c6923d9e06f6b98460f0f584567848a70bf71b/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
