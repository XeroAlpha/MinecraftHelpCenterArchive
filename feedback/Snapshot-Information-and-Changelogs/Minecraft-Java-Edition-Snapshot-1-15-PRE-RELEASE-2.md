---
title: "Minecraft: Java Edition - Snapshot 1.15 PRE-RELEASE 2"
date: 2019-11-21T17:42:42Z
updated: 2019-11-25T18:31:45Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360036142752-Minecraft-Java-Edition-Snapshot-1-15-PRE-RELEASE-2
---

25 November 2019

# CHANGES IN 1.15 PRE-RELEASE 2

- Tweaked chunked loading performance calculations
- Setting the respawn point by using a bed now shows a message
- Added stats for anvil and grindstone interaction counts
- Fixed bugs

# FIXED BUGS IN 1.15 PRE-RELEASE 2

- [MC-19413](https://bugs.mojang.com/browse/MC-19413) - Horse tries to “finish” pathfinding when you interrupt it by riding it
- [MC-33285](https://bugs.mojang.com/browse/MC-33285) - Summoning slimes with custom maxHealth attributes does not work
- [MC-83003](https://bugs.mojang.com/browse/MC-83003) - Barrier particle not visible if barrier block is in offhand
- [MC-83051](https://bugs.mojang.com/browse/MC-83051) - Spectral/Potion arrows/Channeling tridents apply effect to Endermen
- [MC-94421](https://bugs.mojang.com/browse/MC-94421) - Shooting an enderman with a bow and arrow or trident will play arrow or trident collision sound and subtitles
- [MC-94491](https://bugs.mojang.com/browse/MC-94491) - Pressing ESC in world settings returns to main menu instead of world list
- [MC-124280](https://bugs.mojang.com/browse/MC-124280) - Using fire charges on TNT in creative mode consumes the fire charge
- [MC-129781](https://bugs.mojang.com/browse/MC-129781) - The trident will hit the ground after hitting the enderman
- [MC-147865](https://bugs.mojang.com/browse/MC-147865) - Elder Guardian particle is displayed too high (over the player’s head)
- [MC-155591](https://bugs.mojang.com/browse/MC-155591) - Foxes can spawn in giant spruce taiga, but not in giant tree taiga
- [MC-157212](https://bugs.mojang.com/browse/MC-157212) - Trusted fox hostile AI seems to be broken. Foxes ONLY defend players from mobs that shoot arrows, but ignores mobs that uses melee attacks and projectile entites that are not arrows.
- [MC-162531](https://bugs.mojang.com/browse/MC-162531) - Player sneaks while sleeping if there’s a lantern two blocks above the bed
- [MC-163234](https://bugs.mojang.com/browse/MC-163234) - Flying near the top of honey blocks/soul sand in creative slows down flight speed
- [MC-163411](https://bugs.mojang.com/browse/MC-163411) - All entities but players and items do not produce particles when sliding down honey blocks
- [MC-163665](https://bugs.mojang.com/browse/MC-163665) - Cooldown overlay is solid white
- [MC-163776](https://bugs.mojang.com/browse/MC-163776) - Items thrown at the side of a Honey block will keep their horizontal trajectory despite slower speed
- [MC-163942](https://bugs.mojang.com/browse/MC-163942) - Name tag in mini horse inventory model doesn’t billboard properly
- [MC-163944](https://bugs.mojang.com/browse/MC-163944) - Honey block particles are always produced at the player’s feet
- [MC-164163](https://bugs.mojang.com/browse/MC-164163) - Glowing mobs stop glowing when invisible
- [MC-164368](https://bugs.mojang.com/browse/MC-164368) - Travelling back from Nether creates a new portal in a random location.
- [MC-164706](https://bugs.mojang.com/browse/MC-164706) - Nausea effect makes breaking animation render incorrectly
- [MC-165242](https://bugs.mojang.com/browse/MC-165242) - Hand animation is shown when trying to use a fire charge in water
- [MC-165515](https://bugs.mojang.com/browse/MC-165515) - Smooth lighting does not work for beds and double chests
- [MC-165586](https://bugs.mojang.com/browse/MC-165586) - Creeper and lit TNT flashing is different than before
- [MC-165959](https://bugs.mojang.com/browse/MC-165959) - Something completly breaks texture packs
- [MC-166004](https://bugs.mojang.com/browse/MC-166004) - Getting too close to an end gateway causes the game to crash
- [MC-166068](https://bugs.mojang.com/browse/MC-166068) - Default texture minecraft:entity/conduit/open_eye causing mipmap to drop from 4 to 3 when using Programmer Art texture pack
- [MC-166097](https://bugs.mojang.com/browse/MC-166097) - The maximum height of 1\*1 jungle tree becomes 10 instead of 12

21 November 2019

# CHANGES IN 1.15 PRE-RELEASE 1

- Changed the button highlight to make it easier to distinguish which button is selected
- Optimized chunk rendering
- Optimized explosions
- Recipe changes to match Minecraft Bedrock
- Updates to the Resource pack format
- Dark prismarine is now crafted from black dye instead of ink sacs
- Increased scaffolding burn time when used as fuel in a furnace
- The resource pack version is now 5
- The game now tries to make out of date resource packs work as much as possible
- Fixed bugs

# FIXED BUGS IN 1.15 PRE-RELEASE 1

- [MC-12211](https://bugs.mojang.com/browse/MC-12211) - Comparator in subtraction mode does not update visually under certain conditions
- [MC-14826](https://bugs.mojang.com/browse/MC-14826) - Leads in unloaded chunks break, become invisible or connect to an invisible target far away
- [MC-63669](https://bugs.mojang.com/browse/MC-63669) - Comparator Timing Issue
- [MC-90602](https://bugs.mojang.com/browse/MC-90602) - Chunks don’t load correctly/not rendering
- [MC-94838](https://bugs.mojang.com/browse/MC-94838) - Comparator affected through gap
- [MC-125495](https://bugs.mojang.com/browse/MC-125495) - Owner tag of item entities is ignored if entity is destroyed in 200 ticks (Age \>= 5800)
- [MC-125511](https://bugs.mojang.com/browse/MC-125511) - Item entity merging ignores Owner tag
- [MC-135110](https://bugs.mojang.com/browse/MC-135110) - Crash when using outdated resource pack: Non \[a-z0-9/.\_-\] character in path of location
- [MC-152198](https://bugs.mojang.com/browse/MC-152198) - Actual render distance is 2 chunks lower than render distance setting
- [MC-161132](https://bugs.mojang.com/browse/MC-161132) - Leaves are considered solid faces for block placement
- [MC-161900](https://bugs.mojang.com/browse/MC-161900) - Advancement menu background is rendered in front of toasts
- [MC-163308](https://bugs.mojang.com/browse/MC-163308) - Pillagers still spawning in trees in 1.14.4
- [MC-163553](https://bugs.mojang.com/browse/MC-163553) - Dragon texture flickering issue
- [MC-163560](https://bugs.mojang.com/browse/MC-163560) - Berry bushes no longer slow down the player
- [MC-163745](https://bugs.mojang.com/browse/MC-163745) - Dramatic speed up after falling through cobweb
- [MC-163947](https://bugs.mojang.com/browse/MC-163947) - When mobs sliding down honey blocks, the subtitles will show footsteps
- [MC-163953](https://bugs.mojang.com/browse/MC-163953) - /fill command doesn’t create block entities for all bocks
- [MC-164076](https://bugs.mojang.com/browse/MC-164076) - Transparent texture parts of invisible entities are rendered black when looking at them in spectator mode
- [MC-164535](https://bugs.mojang.com/browse/MC-164535) - /playsound uses wrong feedback message for multiple targets
- [MC-165133](https://bugs.mojang.com/browse/MC-165133) - Ignited TNT appears offset one block to the west
- [MC-165134](https://bugs.mojang.com/browse/MC-165134) - Entities are rendered too dark when in the ground
- [MC-165154](https://bugs.mojang.com/browse/MC-165154) - Entities riding boats, minecarts or other entities are rendered too dark when their hitbox intersects solid blocks
- [MC-165155](https://bugs.mojang.com/browse/MC-165155) - Block hitboxes no longer render behind transparent blocks
- [MC-165156](https://bugs.mojang.com/browse/MC-165156) - Transparent block items no longer render behind transparent blocks
- [MC-165173](https://bugs.mojang.com/browse/MC-165173) - Bees immediately enter their nests/hives after leaving them
- [MC-165298](https://bugs.mojang.com/browse/MC-165298) - Entities are rendered too dark when standing on soul sand or snow layers
- [MC-165358](https://bugs.mojang.com/browse/MC-165358) - Entities are sometimes rendered too dark when changing heights
- [MC-165497](https://bugs.mojang.com/browse/MC-165497) - Programmer art shield pattern textures have not been updated to the new resource pack format
- [MC-165524](https://bugs.mojang.com/browse/MC-165524) - Zombie pigman spawn eggs used on zombie pigmen do not spawn baby zombie pigmen
- [MC-165527](https://bugs.mojang.com/browse/MC-165527) - Item of advancement pop up is visible on text in the advancement menu
- [MC-165550](https://bugs.mojang.com/browse/MC-165550) - Ligthing of slimes and magma cubes becomes dark when they land to the ground
- [MC-165605](https://bugs.mojang.com/browse/MC-165605) - Command starting with / in command block shows error but still works
- [MC-165606](https://bugs.mojang.com/browse/MC-165606) - “Bee Our Guest” advancement is only triggered when more then one bottle is in the players hand while right clicking the hive
- [MC-165627](https://bugs.mojang.com/browse/MC-165627) - Falling blocks glitch through shulkers when the shulker is opening / closing
- [MC-165676](https://bugs.mojang.com/browse/MC-165676) - Aquatic mobs don’t move below sea level
- [MC-165727](https://bugs.mojang.com/browse/MC-165727) - Falling blocks on top of non-full block without block below do not break
- [MC-165876](https://bugs.mojang.com/browse/MC-165876) - Sand particles don’t have gravity anymore

# GET THE PRE-RELEASE

To install the pre-release, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Pre-releases can corrupt your world, please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/332b3382108e5bdb0b23717082c9b97c54ffc8ad/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](http://aka.ms/snapshotfeedback) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
