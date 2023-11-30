---
title: Minecraft Java Edition- Snapshot 19W45A
date: 2019-11-07T19:13:14Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360035648212-Minecraft-Java-Edition-Snapshot-19W45A
---

7 November 2019

This week's snapshot brings you many performance improvements and bugfixes.

# CHANGES IN 19W45A

- Bees will now search up to 10 blocks away from itself in all directions to find a nest / hive to call home
- Brought over a change from Minecraft Bedrock
- Improved Performance
- Changed how some textures are used by the game
- Fixed bugs

## PARITY

- Composters are now crafted from wooden slabs

## TEXTURES

- Shield patterns are now using alpha channel instead of brightness
- Command used to change the patterns:  
  for f in \*.png; do convert "\$f" -alpha copy tmp.png && composite tmp.png -compose copy-opacity ../shield_base.png tmp2.png && convert tmp2.png -fill "rgba(0,1,0,1)" -draw "rectangle 0,0 1,63" -draw "rectangle 2,0 63,1" -draw "rectangle 2,22 64,64" -draw "rectangle 12,2 64,64" -fill none -draw "matte 0,0 floodfill" tmp3.png && mv tmp3.png "\$f" && rm tmp.png tmp2.png; done

# FIXED BUGS IN 19W45A

- [MC-164778](https://bugs.mojang.com/browse/MC-164778) - Parrots can still imitate endermen
- [MC-164759](https://bugs.mojang.com/browse/MC-164759) - Potions held by witches float above their arm
- [MC-164732](https://bugs.mojang.com/browse/MC-164732) - When lighting a campfire below a beehive, the campfire does not light up and instead, the hive starts to burn
- [MC-164514](https://bugs.mojang.com/browse/MC-164514) - Blazes and Ghasts can light campfires even when mobGriefing is false
- [MC-164485](https://bugs.mojang.com/browse/MC-164485) - Superflat preset icons cause text to not render
- [MC-164448](https://bugs.mojang.com/browse/MC-164448) - While trading with villagers, the experience progress bar shoots beyond the gui
- [MC-164397](https://bugs.mojang.com/browse/MC-164397) - Birches no longer generate in Dark Forest biome
- [MC-164383](https://bugs.mojang.com/browse/MC-164383) - Game Crash Exploit
- [MC-164289](https://bugs.mojang.com/browse/MC-164289) - Entity shadows cause clouds behind them to not render
- [MC-164121](https://bugs.mojang.com/browse/MC-164121) - Entities in spawners are rendered too dark
- [MC-164114](https://bugs.mojang.com/browse/MC-164114) - Falling blocks no longer support glowing effect
- [MC-164070](https://bugs.mojang.com/browse/MC-164070) - Dispensed Armor Stands only face south
- [MC-164020](https://bugs.mojang.com/browse/MC-164020) - Bees are not taking pollen from tall flowers anymore
- [MC-164012](https://bugs.mojang.com/browse/MC-164012) - 3D inventory models transformed into 2D inventory models have a non-transparent background
- [MC-163870](https://bugs.mojang.com/browse/MC-163870) - Advancements menu still isn't clipped properly on small GUI scale
- [MC-163854](https://bugs.mojang.com/browse/MC-163854) - Breaking animation is flipped horizontally on some sides
- [MC-163789](https://bugs.mojang.com/browse/MC-163789) - Mysterious blinking pixels when in lava
- [MC-163353](https://bugs.mojang.com/browse/MC-163353) - Left wings and legs of the ender dragon are shaded darker than right wings and legs
- [MC-163282](https://bugs.mojang.com/browse/MC-163282) - Shadows are z-fighting when riding an entity
- [MC-163270](https://bugs.mojang.com/browse/MC-163270) - Sign in sign editing GUI is too dark
- [MC-163242](https://bugs.mojang.com/browse/MC-163242) - Blocks on armor stands render shadows based on camera vector
- [MC-163233](https://bugs.mojang.com/browse/MC-163233) - Entity shadows render in front of block hitboxes
- [MC-163144](https://bugs.mojang.com/browse/MC-163144) - World border is rendered in front of all non-transparent blocks
- [MC-163113](https://bugs.mojang.com/browse/MC-163113) - Placing a banner cause an error in the game output
- [MC-163084](https://bugs.mojang.com/browse/MC-163084) - Beacon beam lighting depends on viewing angle
- [MC-163079](https://bugs.mojang.com/browse/MC-163079) - Chunk borders are rendered in front of all non-transparent blocks
- [MC-163064](https://bugs.mojang.com/browse/MC-163064) - Character skin is too dark in inventory
- [MC-163054](https://bugs.mojang.com/browse/MC-163054) - Bee Flower tracking/pollination AI broken
- [MC-163048](https://bugs.mojang.com/browse/MC-163048) - Barrier particle changes to a random texture after changing resource pack
- [MC-163012](https://bugs.mojang.com/browse/MC-163012) - Bees no longer have an animation while pollinating flowers
- [MC-162905](https://bugs.mojang.com/browse/MC-162905) - Kelp naturally generates with 'age' too low
- [MC-162808](https://bugs.mojang.com/browse/MC-162808) - Poppies are positioned incorrectly when held by an iron golem
- [MC-162736](https://bugs.mojang.com/browse/MC-162736) - Text cursor disappears when editing sign text
- [MC-162519](https://bugs.mojang.com/browse/MC-162519) - Block hitboxes are rendered transparent
- [MC-162368](https://bugs.mojang.com/browse/MC-162368) - Burning mobs are no longer bright
- [MC-162338](https://bugs.mojang.com/browse/MC-162338) - Entity shadows don't display properly on transparent blocks
- [MC-162279](https://bugs.mojang.com/browse/MC-162279) - Beacon beam loses color at high altitudes
- [MC-162078](https://bugs.mojang.com/browse/MC-162078) - Bees cannot pathfind if they are submerged in water
- [MC-162013](https://bugs.mojang.com/browse/MC-162013) - Player model in inventory is affected by light level 
- [MC-161976](https://bugs.mojang.com/browse/MC-161976) - Enchanted trident loses enchanted glint when thrown into the ground
- [MC-161948](https://bugs.mojang.com/browse/MC-161948) - Models with alpha channel do not render all faces consistently
- [MC-161927](https://bugs.mojang.com/browse/MC-161927) - Pillagers don't have any arms if they aren't carrying a crossbow
- [MC-161926](https://bugs.mojang.com/browse/MC-161926) - Breaking animation is more transparent when mining ice or stained glass
- [MC-161923](https://bugs.mojang.com/browse/MC-161923) - Breaking animation is rendered behind water and nether portals
- [MC-161849](https://bugs.mojang.com/browse/MC-161849) - Items in inventory, subtitles, background, chat, notifications on the screen and game menu are darker and have a blue tint when you have the night vision effect
- [MC-161302](https://bugs.mojang.com/browse/MC-161302) - Banners appear blank white for a split of a second when placing them
- [MC-161277](https://bugs.mojang.com/browse/MC-161277) - Graphics card information displays method calls on the debug/F3 screen
- [MC-161009](https://bugs.mojang.com/browse/MC-161009) - Bee nests and hives drop in Creative mode even if gamerule doTileDrops is set to false
- [MC-161002](https://bugs.mojang.com/browse/MC-161002) - Endermen don't turn to face you when looked at
- [MC-160978](https://bugs.mojang.com/browse/MC-160978) - Foxes not consuming food anymore
- [MC-160291](https://bugs.mojang.com/browse/MC-160291) - Bees leave their nest/hive when it is sheared or used to fill bottles, even there is a campfire below it and it is night time
- [MC-160177](https://bugs.mojang.com/browse/MC-160177) - Block breaking animation doesn't show for other players
- [MC-159803](https://bugs.mojang.com/browse/MC-159803) - Bees wander too far from their nest and get lost
- [MC-159648](https://bugs.mojang.com/browse/MC-159648) - Bees can claim hives behind walls
- [MC-159646](https://bugs.mojang.com/browse/MC-159646) - Bees get stuck on cocoa beans
- [MC-159576](https://bugs.mojang.com/browse/MC-159576) - Yiddish is displayed left-to-right instead of right-to-left
- [MC-159514](https://bugs.mojang.com/browse/MC-159514) - Bees are flying back to original nest
- [MC-159496](https://bugs.mojang.com/browse/MC-159496) - Player death uses incorrect sound event
- [MC-159447](https://bugs.mojang.com/browse/MC-159447) - Bees occasionally get stuck on fences, fence gates, and walls
- [MC-159418](https://bugs.mojang.com/browse/MC-159418) - Bees do not update their home hive even if there are empty hives nearby
- [MC-159410](https://bugs.mojang.com/browse/MC-159410) - Bees with NoAI can get angry
- [MC-159368](https://bugs.mojang.com/browse/MC-159368) - Bees do not follow players holding tall flowers
- [MC-159350](https://bugs.mojang.com/browse/MC-159350) - Bees freeze if they cannot execute their current AI task / Bees don't seem to have a wandering AI
- [MC-155758](https://bugs.mojang.com/browse/MC-155758) - Endermen don't pick up non collidable blocks
- [MC-155289](https://bugs.mojang.com/browse/MC-155289) - Mob spawning rate in the Overworld is reduced
- [MC-153697](https://bugs.mojang.com/browse/MC-153697) - Iron golems will occasionally attack players in creative/spectator mode
- [MC-153334](https://bugs.mojang.com/browse/MC-153334) - Cured villagers sell bookshelves for 1 emerald and buy books for 1 emerald, allowing players to easily get an unlimited amount of emeralds
- [MC-152683](https://bugs.mojang.com/browse/MC-152683) - Spectral Arrow doesn't count for "Take Aim" achievement
- [MC-152159](https://bugs.mojang.com/browse/MC-152159) - You can hit the dragon during its death animation
- [MC-149343](https://bugs.mojang.com/browse/MC-149343) - Chunk block lag when tall spruce tree is grown in that chunk
- [MC-149181](https://bugs.mojang.com/browse/MC-149181) - Biome blend causes massive stuttering when loading chunks or when placing/breaking blocks
- [MC-147548](https://bugs.mojang.com/browse/MC-147548) - Terrible performance with large forest fires
- [MC-136984](https://bugs.mojang.com/browse/MC-136984) - Game Crash Exploit
- [MC-133877](https://bugs.mojang.com/browse/MC-133877) - Extreme lag from decaying leaves
- [MC-117635](https://bugs.mojang.com/browse/MC-117635) - Rear legs of sitting tamed wolf are displayed hovering
- [MC-94013](https://bugs.mojang.com/browse/MC-94013) - End Stone Bricks are less durable than End Stone and destroyed by the Ender Dragon
- [MC-24336](https://bugs.mojang.com/browse/MC-24336) - Withers are harmed by the explosions of their wither skulls
- [MC-3591](https://bugs.mojang.com/browse/MC-3591) - Cured zombie villagers don't drop picked up items

# GET THE SNAPSHOT

To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/fa9e744ee6e5cccd4000e2269f8dff8ce96ce5a9/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
