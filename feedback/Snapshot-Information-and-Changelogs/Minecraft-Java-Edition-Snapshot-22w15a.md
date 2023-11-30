---
title: "Minecraft: Java Edition - Snapshot 22w15a"
date: 2022-04-27T09:19:58Z
updated: 2022-04-27T09:20:01Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/5824867258509-Minecraft-Java-Edition-Snapshot-22w15a
---

<div>

<div class="container">

<div class="row justify-content-center text-center">

<div class="col-12 col-md-8 col-lg-6">

# MINECRAFT SNAPSHOT 22W15A

A Minecraft Java Snapshot

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

Let me tell you a little story about hubris. Well, not so much a story as a lament. Because some of you have been thinking that the warden was a little too easy. I won’t name names, but I know you’re out there. Why else would we be adding ranged attacks for this already terrifying mob? Was the sniffing not enough? When will it end? Not today, apparently. 

Enjoy a new terrifying warden along with more advancements and technical changes.

# NEW FEATURES IN 22W15A

- Added advancement “When the Squad Hops into Town” for getting each Frog variant on a Lead
- Added advancement “Sneak 100” for sneaking near a Sculk Sensor or Warden to prevent it hearing you
- Added a new ranged attack to the Warden

## WARDEN RANGED ATTACK

- Building up high, hiding behind walls or being out of range of their powerful melee attack will cause Wardens to switch to their ranged attack
  - Their rib cages will open up to shriek a sonically charged ranged attack that can penetrate walls

# CHANGES IN 22W15A

- Added Darkness effect to “How Did We Get Here?” advancement
- Allays have a natural health regen of 2 health per second
- The main menu background now shows a Wild Update panorama
- Mud generates all the way from the surface down to stone in Mangrove Swamps
- Tall Mangroves are far more common than Short Mangroves in Mangrove Swamps
- Moss Carpet generates on top of Mangrove Tree’s roots
- The Wandering Trader will now sometimes offer Propagules for sale
- A previous change to Noteblocks that only Wool and Wool Carpets would block the sounds has been reverted
- Wardens can now sniff you from further away
- The vertical range Wardens get angry at a target while sniffing is now 20 blocks instead of 6 blocks

## CHANGES TO VIBRATIONS

- Carpets, like Wool blocks, will now dampen the vibrations caused by their placing, breaking or dropping as items
- Carpets now also dampen the vibrations caused by running and jumping over them

# TECHNICAL CHANGES IN 22W15A

- Removed item_delivered_to_player advancement trigger
- Added thrown_item_picked_up_by_player advancement trigger
- Added avoid_vibration advancement trigger
- Added sonic_explosion particle

## ADVANCEMENTS

### NEW TRIGGERS

#### THROWN_ITEM_PICKED_UP_BY_PLAYER

- Triggered when a player picks up an item that was thrown by an entity
- Conditions:
  - player - a predicate for the player picking up the item
  - entity - a predicate for the entity that threw the item
  - item - a predicate for the item

#### AVOID_VIBRATION

- Triggered when a vibration event is ignored because the source player is holding the sneak key
- Conditions:
  - player - a player for which this trigger runs

## GAME EVENTS

- Renamed game event tag ignore_vibrations_on_occluding_block to dampenable_vibrations
- Added block tag dampens_vibrations to indicate blocks which will not trigger vibrations when placed, broken or stepped on
- Renamed item tag occludes_vibration_signals to dampens_vibrations item tag as well

# FIXED BUGS IN 22W15A

- [MC-36783](https://bugs.mojang.com/browse/MC-36783) - Item frames/Glow item frames don’t change their hitbox if they contain a map
- [MC-147686](https://bugs.mojang.com/browse/MC-147686) - Joining a world that uses custom resources shows default resources until fully loaded
- [MC-183520](https://bugs.mojang.com/browse/MC-183520) - Phantoms with NoAI can go through blocks
- [MC-212610](https://bugs.mojang.com/browse/MC-212610) - Glow lichens cannot be put on soul sand
- [MC-212629](https://bugs.mojang.com/browse/MC-212629) - Leashes from two or more invisible entities connect to each other
- [MC-216567](https://bugs.mojang.com/browse/MC-216567) - Vines cannot be placed on the sides of 8 layers of snow
- [MC-216569](https://bugs.mojang.com/browse/MC-216569) - Glow lichen cannot be placed on the side of 8 layers of snow
- [MC-219642](https://bugs.mojang.com/browse/MC-219642) - Vines cannot be placed on the sides of soul sand
- [MC-231458](https://bugs.mojang.com/browse/MC-231458) - The word “ingot” within the “Serious Dedication” advancement description is improperly capitalized
- [MC-235035](https://bugs.mojang.com/browse/MC-235035) - Sleeping in a custom dimension with “natural” set to false causes crash
- [MC-237924](https://bugs.mojang.com/browse/MC-237924) - The word “villager” within the “Star Trader” advancement description is improperly capitalized
- [MC-249072](https://bugs.mojang.com/browse/MC-249072) - Sculk shriekers replace water blocks
- [MC-249087](https://bugs.mojang.com/browse/MC-249087) - The inside texture of mangrove roots darkens when solid blocks are placed adjacent to them
- [MC-249094](https://bugs.mojang.com/browse/MC-249094) - Unexpected culling of inner sculk shrieker faces
- [MC-249111](https://bugs.mojang.com/browse/MC-249111) - sculk_charge cannot be used in /particle command
- [MC-249208](https://bugs.mojang.com/browse/MC-249208) - Vines, glow lichens, and sculk veins cannot be placed on the side or top faces of mud
- [MC-249315](https://bugs.mojang.com/browse/MC-249315) - Mangrove Roots cannot be composted
- [MC-249347](https://bugs.mojang.com/browse/MC-249347) - Map color for mangrove sign and mangrove wall sign is incorrect
- [MC-249423](https://bugs.mojang.com/browse/MC-249423) - You can’t open the boat with chests without a shift, even when you can’t get into the boat
- [MC-249445](https://bugs.mojang.com/browse/MC-249445) - Activated sculk shriekers fail to summon the warden when broken
- [MC-249488](https://bugs.mojang.com/browse/MC-249488) - Darkness pulsing option is not saved
- [MC-249495](https://bugs.mojang.com/browse/MC-249495) - Inconsistent shading in boat item sprites
- [MC-249664](https://bugs.mojang.com/browse/MC-249664) - Warden despawns when far away
- [MC-249688](https://bugs.mojang.com/browse/MC-249688) - Mangrove stairs come after nether wood stairs in the Building Blocks tab
- [MC-249737](https://bugs.mojang.com/browse/MC-249737) - Allay can be pushed around with {NoAI:1b}
- [MC-249741](https://bugs.mojang.com/browse/MC-249741) - New advancement names are not properly capitalized
- [MC-249785](https://bugs.mojang.com/browse/MC-249785) - Warden can be pushed when emerging and digging
- [MC-249917](https://bugs.mojang.com/browse/MC-249917) - Mangrove trees don’t replace certain blocks with roots
- [MC-249923](https://bugs.mojang.com/browse/MC-249923) - Recovery compass isn’t sorted with regular compass in creative inventory
- [MC-249927](https://bugs.mojang.com/browse/MC-249927) - You can use a Recovery Compass on a Lodestone
- [MC-249931](https://bugs.mojang.com/browse/MC-249931) - Growing a Mangrove Tree with bone meal creates a ghost block
- [MC-249933](https://bugs.mojang.com/browse/MC-249933) - Game crash related to the frog occurred (Accessing LegacyRandomSource from multiple threads)
- [MC-249934](https://bugs.mojang.com/browse/MC-249934) - Mangrove roots sometimes don’t generate waterlogged when generating within water
- [MC-249936](https://bugs.mojang.com/browse/MC-249936) - Cave carvers don’t cut through mud
- [MC-249938](https://bugs.mojang.com/browse/MC-249938) - Mangrove Leaves do not drop from Silk Touch tools
- [MC-249942](https://bugs.mojang.com/browse/MC-249942) - Water got removed after waterlogged Mangrove Propagule grows
- [MC-249947](https://bugs.mojang.com/browse/MC-249947) - Top of Sculk Shrieker model is vertically squished
- [MC-249966](https://bugs.mojang.com/browse/MC-249966) - Warden can forget a target it just roared at
- [MC-249968](https://bugs.mojang.com/browse/MC-249968) - Powering a beacon disconnects player from server
- [MC-249977](https://bugs.mojang.com/browse/MC-249977) - Harsh chunk borders appear when upgrading a 1.18.2 world
- [MC-249979](https://bugs.mojang.com/browse/MC-249979) - Chance to have mangrove roots not waterlogged when growing from a sapling while underwater
- [MC-249980](https://bugs.mojang.com/browse/MC-249980) - The Birthday Song advancement description is incorrectly capitalized
- [MC-249984](https://bugs.mojang.com/browse/MC-249984) - note_block is inconsistently spelled as noteblock in the allay_deliver_cake_to_noteblock advancement
- [MC-250017](https://bugs.mojang.com/browse/MC-250017) - UUID launch argument required
- [MC-250025](https://bugs.mojang.com/browse/MC-250025) - The “You Got a Friend in Me” advancement is incorrectly presented in the past tense
- [MC-250099](https://bugs.mojang.com/browse/MC-250099) - Mangrove Log and Mangrove Planks don’t spawn in bonus chest
- [MC-250101](https://bugs.mojang.com/browse/MC-250101) - Can’t plant sugar cane on mud
- [MC-250103](https://bugs.mojang.com/browse/MC-250103) - Can’t plant bamboo on mud
- [MC-250104](https://bugs.mojang.com/browse/MC-250104) - Can’t plant big dripleaf on mud
- [MC-250106](https://bugs.mojang.com/browse/MC-250106) - Overworld vegetation cannot be placed on muddy mangrove roots

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/2760f745a00711bcc19bf78d6056019f69318d03/server.jar)

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
