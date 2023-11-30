---
title: "Minecraft: Java Edition - 1.19 Pre-Release 2 "
date: 2022-05-24T16:41:22Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/6445257309069-Minecraft-Java-Edition-1-19-Pre-Release-2-
---

The second pre-release for 1.19 is now available and it comes with a bunch of bugfixes!

Important to note is that a recent change made it possible for more types of mobs to spawn inside Nether Portals, which caused them to instantly change dimensions after spawning. We will not be making any further changes to this before the release of 1.19, but our intent for the future is to prevent most mobs from spawning in Nether Portals and the ones that do will not immediately travel through the portal. Expect to see these changes in a coming version.

# CHANGES IN 1.19 PRE-RELEASE 2

- If the Warden is stuck in a liquid, it will angrily despawn instead of digging
- Reverted using generic equip sound when equipping blocks in the head slot

# TECHNICAL CHANGES IN 1.19 PRE-RELEASE 2

- Added game event teleport with a vibration frequency of 5

# FIXED BUGS IN 1.19 PRE-RELEASE 2

- [MC-186148](https://bugs.mojang.com/browse/MC-186148) - “death.attack.witherSkull.item” displays raw translation string (is untranslated)
- [MC-186851](https://bugs.mojang.com/browse/MC-186851) - “death.attack.sting.item” displays raw translation string (is untranslated)
- [MC-207268](https://bugs.mojang.com/browse/MC-207268) - Sculk sensors don’t detect stripping logs, tilling dirt, or pathing grass
- [MC-208759](https://bugs.mojang.com/browse/MC-208759) - Sculk Sensor’s ‘block placed’ doesn’t trigger with villagers placing crops
- [MC-208760](https://bugs.mojang.com/browse/MC-208760) - Sculk Sensor’s ‘block placed’ doesn’t trigger when snow golems place snow layers
- [MC-208761](https://bugs.mojang.com/browse/MC-208761) - Sculk Sensor’s ‘block destroyed’ doesn’t trigger when blocks are destroyed by pistons
- [MC-209701](https://bugs.mojang.com/browse/MC-209701) - Sculk sensors are not activated upon placing food onto campfires
- [MC-209900](https://bugs.mojang.com/browse/MC-209900) - Sculk sensors are not activated upon inserting or retrieving music discs from jukeboxes
- [MC-210330](https://bugs.mojang.com/browse/MC-210330) - Sculk sensors are not activated upon throwing eyes of ender
- [MC-210489](https://bugs.mojang.com/browse/MC-210489) - Sculk sensors are not activated upon pointed dripstone filling partially filled cauldrons
- [MC-210496](https://bugs.mojang.com/browse/MC-210496) - Sculk sensors are not activated upon harvesting sweet berry bushes
- [MC-210801](https://bugs.mojang.com/browse/MC-210801) - Wool incorrectly occludes the vibration of item frames being placed
- [MC-212430](https://bugs.mojang.com/browse/MC-212430) - Sculk sensors are not activated upon rain or snow filling partially filled cauldrons
- [MC-213387](https://bugs.mojang.com/browse/MC-213387) - Sculk sensors don’t detect endermen/shulkers teleporting from a place to another
- [MC-220086](https://bugs.mojang.com/browse/MC-220086) - Sculk sensors do not detect using an axe to clear the wax/weathering of a copper block
- [MC-220087](https://bugs.mojang.com/browse/MC-220087) - Sculk sensors do not detect using a honeycomb to wax copper
- [MC-249696](https://bugs.mojang.com/browse/MC-249696) - Certain void worlds fail to spawn the player on the stone platform
- [MC-250259](https://bugs.mojang.com/browse/MC-250259) - Warden AI doesn’t function properly when it rides on entities
- [MC-250941](https://bugs.mojang.com/browse/MC-250941) - Goats’ horns don’t snap on copper ore
- [MC-250956](https://bugs.mojang.com/browse/MC-250956) - Baby goats with horns lose their horns when fed
- [MC-251314](https://bugs.mojang.com/browse/MC-251314) - Goats loaded from older worlds lose their horns
- [MC-251336](https://bugs.mojang.com/browse/MC-251336) - Darkness fog flashes at high duration values
- [MC-251412](https://bugs.mojang.com/browse/MC-251412) - Warden afflicting Darkness to players in the same team
- [MC-251500](https://bugs.mojang.com/browse/MC-251500) - Wardens ignore PersistenceRequired and dig away
- [MC-251601](https://bugs.mojang.com/browse/MC-251601) - Darkness rendering incorrectly when reloading the game
- [MC-251639](https://bugs.mojang.com/browse/MC-251639) - Warden emerging particles don’t match up with block they emerge on the entire way
- [MC-251646](https://bugs.mojang.com/browse/MC-251646) - “death.attack.sonic_boom.item” displays raw translation string (is untranslated)
- [MC-251670](https://bugs.mojang.com/browse/MC-251670) - Villager sometimes won’t refill their stock
- [MC-251675](https://bugs.mojang.com/browse/MC-251675) - Mesa Mineshafts no longer generate with /place command outside of badlands biomes despite saying the structure has been generated successfully
- [MC-251736](https://bugs.mojang.com/browse/MC-251736) - Reflected ghast fireball cannot hit the ghast
- [MC-251824](https://bugs.mojang.com/browse/MC-251824) - Wardens aren’t angered by being hit with damageless projectiles
- [MC-251854](https://bugs.mojang.com/browse/MC-251854) - “It Spreads” advancement can be granted when killing a mob that does not give experience
- [MC-251859](https://bugs.mojang.com/browse/MC-251859) - Gear equipping sound plays every time armor/elytra durability changes while equipped
- [MC-251860](https://bugs.mojang.com/browse/MC-251860) - The minecraft:item.armor.equip_generic sound is produced when giving items to allays
- [MC-251862](https://bugs.mojang.com/browse/MC-251862) - Shift clicking the destroy item button in the creative inventory creates a vibration when there is nothing in your equipment slots
- [MC-251864](https://bugs.mojang.com/browse/MC-251864) - The minecraft:item.armor.equip_generic sound is produced when filling water buckets with fish, axolotls, or tadpoles
- [MC-251871](https://bugs.mojang.com/browse/MC-251871) - The minecraft:item.armor.equip_generic sound is produced and can only be heard by other players when switching items between hands
- [MC-251876](https://bugs.mojang.com/browse/MC-251876) - Villagers produce armor equipping sound when previewing armor
- [MC-251889](https://bugs.mojang.com/browse/MC-251889) - io.netty.handler.codec.EncoderException when evaluating too many entity selectors in chat preview
- [MC-251890](https://bugs.mojang.com/browse/MC-251890) - run_command click events send value as command instead of chat message
- [MC-251915](https://bugs.mojang.com/browse/MC-251915) - Milking cows, mooshrooms and goats plays gear equipping sound
- [MC-251916](https://bugs.mojang.com/browse/MC-251916) - Eating food items that return empty containers plays gear equipping sound
- [MC-251919](https://bugs.mojang.com/browse/MC-251919) - Equipping a player head, skull or carved pumpkin displays the generic “Gear equips” subtitle
- [MC-251920](https://bugs.mojang.com/browse/MC-251920) - Taking a plant from a pot plays the gear equipping sound and subtitle
- [MC-251921](https://bugs.mojang.com/browse/MC-251921) - Equipping horse armor onto a horse plays the “Gear equips” sound
- [MC-251922](https://bugs.mojang.com/browse/MC-251922) - “Gear equips” sound plays when equipping or removing a saddle from a horse wearing horse armor
- [MC-251924](https://bugs.mojang.com/browse/MC-251924) - Gear equipping sounds and subtitles are played when foxes pick up any item
- [MC-251925](https://bugs.mojang.com/browse/MC-251925) - Gear equipping sounds and subtitles are played when dolphins throw around items
- [MC-251927](https://bugs.mojang.com/browse/MC-251927) - Gear equipping sounds and subtitles are played when CanPickUpLoot mobs pick up items
- [MC-251928](https://bugs.mojang.com/browse/MC-251928) - Gear equips sound plays when filling a single bottle with honey
- [MC-251929](https://bugs.mojang.com/browse/MC-251929) - Gear equips sound plays when filling a single bottle with water from a water source

# GET THE PRE-RELEASE

Pre-releases are available for Minecraft: Java Edition. To install the pre-release, open up the Minecraft Launcher and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, so please make a backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/6cc6cac49cd862ad9005816eb1ffc7dd4bd066dd/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://aka.ms/snapshotbugs?ref=blog)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
