---
title: "Minecraft: Java Edition - Snapshot 21w13a"
date: 2021-03-31T17:06:45Z
updated: 2021-03-31T17:13:26Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360059253111-Minecraft-Java-Edition-Snapshot-21w13a
---

Another snapshot hits the streets, and it's dropping some sick bleats. That's right, Goats are leaping into this snapshot!

# NEW FEATURES IN 21W13A

- Added the goat!
- Added an accessibility option

## GOAT

- Goats spawn in Mountains
- Goats can scale the sides of mountains with their incredible jumps!
- Goats can be tempted and bred using Wheat
- Goats are another source of milk!

## ACCESSIBILITY

- Added an alternative solid black background color for the Mojang Studios loading screen, toggleable with the “Monochrome Logo” accessibility option

# CHANGES IN 21W13A

- Tweaks to Caves
- Tweaks to Ore Distribution
- Tweaks to Powdered Snow
- Dripstone clusters can now be found rarely in normal caves
- Deepslate blobs can now be found between heights 0 and 16
- Axolotls and glow squids now spawn in underground water sources
- Axolotls will now always chase after and attack squids, glow squids, tropical fish, cod, salmon, pufferfish, drowned, guardians, and elder guardians
- Axolotls now have a two-minute cooldown after hunting non-hostile targets such as fish, squids, etc.
- They will prioritize targeting hostile mobs first before hunting.
- Bees now see Flowering Azalea (and Flowering Azalea Leaves) as flowers
- Additions to Wandering Trader and Mason trades
- Additions to chest loot tables

## CAVE TWEAKS

- Mineshaft tweak: increased the max length of pillars and chains.
- Carver tweaks: made carvers less likely to be too flat to walk through.
- Noise cave tweaks:
  - Increased likelihood of megacaves (large cheese caves)
  - Reduced likelihood of toothpick pillars (tall 1-block thin pillars)
  - Other tweaks to make the cheese caves more varied and interesting.

## ORE DISTRIBUTION TWEAKS

- Slightly more iron
- Larger diamond blobs sometimes form

## POWDERED SNOW

- Powder snow’s durability/hardness was slightly increased
- Freeze time has decreased to 7 seconds and hurt frequency has decreased to 2 seconds
- Entities on fire now melt Powder Snow when colliding
- Increase vertical movement speed within Powder Snow
- Strays, Polar Bears, and Snow Golems are now immune to freezing
- Mobs now shake when they are fully frozen
- Skeletons converting to strays now only require the 7 seconds it takes for an entity to be fully frozen to begin converting, instead of the 30 seconds it took before
- Leather horse armor now protects horses from freeze damage
- Mobs that enjoy the heat (Blazes, Magma Cubes, and Striders) take increased freeze damage

## TRADE & LOOT TABLE ADDITIONS

- Added the following trades to Mason:
  - Will sell 4 Dripstone blocks for 1 emerald
- Added the following trades to Wandering Trader:
  - Will sell 2 Pointed Dripstones for 1 emerald
  - Will sell 2 Rooted Dirt for 1 emerald
  - Will sell 2 Moss Blocks for 1 emerald
- Moss blocks can be found in Shipwreck chests
- Glow Berries can be found in Mineshaft chest minecarts

# TECHNICAL CHANGES IN 21W13A

- Added metric cube of light!
- Unused parts of code are no longer removed

## LIGHT BLOCK

- Op-only (/give) air-like waterloggable block
- Emits light at a level determined by block state
- Visible and targetable only when the item is held (similar to barrier)
- Right-click cycles light level

# FIXED BUGS IN 21W13A

- [MC-3366](https://bugs.mojang.com/browse/MC-3366) - End portal appears transparent from below
- [MC-70738](https://bugs.mojang.com/browse/MC-70738) - Killing guardian with lava does not give cooked fish
- [MC-102269](https://bugs.mojang.com/browse/MC-102269) - Polar bears drop raw fish instead of cooked fish when killed with fire or lava
- [MC-108636](https://bugs.mojang.com/browse/MC-108636) - There are a number of unused texture files
- [MC-123587](https://bugs.mojang.com/browse/MC-123587) - Kicked from the game when reaching y levels over 30,000,000
- [MC-124667](https://bugs.mojang.com/browse/MC-124667) - Air can be used in custom recipes, causing a crash
- [MC-136776](https://bugs.mojang.com/browse/MC-136776) - Some NBT tags are not kept when fish or axolotl mobs are caught in water buckets
- [MC-167853](https://bugs.mojang.com/browse/MC-167853) - Observer doesn’t detect when a grass block changes to dirt if a tree grows on top
- [MC-174701](https://bugs.mojang.com/browse/MC-174701) - Leash knot sound effect plays when loading singleplayer world
- [MC-187544](https://bugs.mojang.com/browse/MC-187544) - ‘Cover Me With Diamonds’ advancement improperly capitalized
- [MC-190774](https://bugs.mojang.com/browse/MC-190774) - Stonecutter saw spins both ways simultaneously
- [MC-194183](https://bugs.mojang.com/browse/MC-194183) - Some experience points do not go towards Mending repair, even if the Mending gear is not fully repaired
- [MC-195640](https://bugs.mojang.com/browse/MC-195640) - Suspicious stew inedible with full hunger
- [MC-197073](https://bugs.mojang.com/browse/MC-197073) - Turtles laying eggs on red sand produce normal sand particles
- [MC-199065](https://bugs.mojang.com/browse/MC-199065) - Zombies that die while on fire do not drop baked potatoes
- [MC-199237](https://bugs.mojang.com/browse/MC-199237) - Back of ladder is incorrectly mirrored
- [MC-199239](https://bugs.mojang.com/browse/MC-199239) - Vines appear incorrectly mirrored when viewed from behind
- [MC-199242](https://bugs.mojang.com/browse/MC-199242) - Texture planes of crop models appear incorrectly mirrored from behind
- [MC-201748](https://bugs.mojang.com/browse/MC-201748) - Chain model planes are incorrectly mirrored on the rear
- [MC-201751](https://bugs.mojang.com/browse/MC-201751) - Chain section on lanterns is incorrectly mirrored from behind
- [MC-201753](https://bugs.mojang.com/browse/MC-201753) - Sea pickle green top sections do not render correctly from behind
- [MC-203553](https://bugs.mojang.com/browse/MC-203553) - Water bottle doesn’t extinguish candles
- [MC-203605](https://bugs.mojang.com/browse/MC-203605) - Lightning rod bottom texture is mapped incorrectly
- [MC-203617](https://bugs.mojang.com/browse/MC-203617) - Can’t “Pick Block” cauldrons with liquid or powdered snow inside
- [MC-203838](https://bugs.mojang.com/browse/MC-203838) - Aiming a spyglass with a loaded crossbow in offhand creates weird third person effect
- [MC-203847](https://bugs.mojang.com/browse/MC-203847) - Waterlogged candles can be lit
- [MC-204133](https://bugs.mojang.com/browse/MC-204133) - Candle extinguishing particle appears offset from the candle
- [MC-204430](https://bugs.mojang.com/browse/MC-204430) - Cauldrons filled with water, lava or powder snow cannot be used as a workstation for villagers
- [MC-205060](https://bugs.mojang.com/browse/MC-205060) - Powder snow does not cause underlying grass, mycelium or podzol to appear snowy
- [MC-205083](https://bugs.mojang.com/browse/MC-205083) - Mobs wearing leather boots spin around when walking on powder snow
- [MC-205106](https://bugs.mojang.com/browse/MC-205106) - Mobs that get damaged by powder snow can spawn inside powder snow
- [MC-205131](https://bugs.mojang.com/browse/MC-205131) - Landing on powder snow while wearing leather boots inflicts fall damage on Java, but not on Bedrock
- [MC-205143](https://bugs.mojang.com/browse/MC-205143) - The particles produced when extinguishing a campfire are misplaced
- [MC-205158](https://bugs.mojang.com/browse/MC-205158) - Powder snow inside textures are not correctly mirrored
- [MC-205169](https://bugs.mojang.com/browse/MC-205169) - Mobs don’t path find across powder snow blocks when not wandering
- [MC-205302](https://bugs.mojang.com/browse/MC-205302) - Using /setblock to place a structure block defaults to save mode, unlike placing one by hand
- [MC-205613](https://bugs.mojang.com/browse/MC-205613) - Skeletons in powder snow spin when aiming at the player
- [MC-205885](https://bugs.mojang.com/browse/MC-205885) - Endermen holding water, lava or powder snow cauldrons don’t drop cauldrons
- [MC-205914](https://bugs.mojang.com/browse/MC-205914) - Placing turtle egg/sea pickle onto turtle egg/sea pickle while sneaking doesn’t place it next to it, although placing candle onto candle does
- [MC-205918](https://bugs.mojang.com/browse/MC-205918) - Experience orb stacks that were used in the mending process lose their experience amount, even if the stack is still larger than one
- [MC-208075](https://bugs.mojang.com/browse/MC-208075) - Copper slabs and stairs are not included in the \#minecraft:slabs and \#minecraft:stairs tags
- [MC-208588](https://bugs.mojang.com/browse/MC-208588) - Axolotls change color when released from bucket / axolotl entity data isn’t stored in the bucket item
- [MC-208594](https://bugs.mojang.com/browse/MC-208594) - Axolotls aren’t required for the “Two By Two” advancement
- [MC-208647](https://bugs.mojang.com/browse/MC-208647) - Axolotls don’t attack elder guardians
- [MC-208695](https://bugs.mojang.com/browse/MC-208695) - Semi-transparent pixels on axolotl textures
- [MC-208703](https://bugs.mojang.com/browse/MC-208703) - Axolotls don’t give regeneration or remove mining fatigue
- [MC-208745](https://bugs.mojang.com/browse/MC-208745) - Explorer maps & filled maps turn blank after entering the nether or end
- [MC-209371](https://bugs.mojang.com/browse/MC-209371) - Can’t cut stacks in half in furnace output
- [MC-212221](https://bugs.mojang.com/browse/MC-212221) - Glow item frames are rendered dark when a light source is nearby
- [MC-212305](https://bugs.mojang.com/browse/MC-212305) - Back face of glow lichen is not correctly mirrored from behind
- [MC-212736](https://bugs.mojang.com/browse/MC-212736) - Some world border faces are rendered mirrored, resulting in incorrect corners
- [MC-213552](https://bugs.mojang.com/browse/MC-213552) - Shulker hitbox does not immediately rotate after the shulker visually rotates
- [MC-213769](https://bugs.mojang.com/browse/MC-213769) - Rooted dirt is far from other dirt variants in the Creative inventory
- [MC-213771](https://bugs.mojang.com/browse/MC-213771) - Rooted dirt is in decorations tab
- [MC-213772](https://bugs.mojang.com/browse/MC-213772) - Certain faces of azalea are not culled by other blocks
- [MC-213777](https://bugs.mojang.com/browse/MC-213777) - Azalea and flowering azalea z-fight when placed next to blocks
- [MC-213789](https://bugs.mojang.com/browse/MC-213789) - Water behaves as if moss blocks were air
- [MC-213815](https://bugs.mojang.com/browse/MC-213815) - Grass, ferns, flowers, bushes, saplings and bamboo cannot be placed on top of rooted dirt
- [MC-213837](https://bugs.mojang.com/browse/MC-213837) - Can’t pick block big dripleaf stem
- [MC-213841](https://bugs.mojang.com/browse/MC-213841) - Signs, banners, paintings & item frames cannot be placed on moss
- [MC-213860](https://bugs.mojang.com/browse/MC-213860) - Farmland/dirt path don’t convert to dirt when moss is placed above
- [MC-213877](https://bugs.mojang.com/browse/MC-213877) - Cannot turn Rooted Dirt into a Dirt Path
- [MC-213878](https://bugs.mojang.com/browse/MC-213878) - Using bone meal on a small dripleaf shows breaking particles
- [MC-213899](https://bugs.mojang.com/browse/MC-213899) - Big Dripleaf can be rotated incorrectly by breaking and replacing it
- [MC-213907](https://bugs.mojang.com/browse/MC-213907) - Skeletons don’t have a shaking animation while converting to strays
- [MC-213958](https://bugs.mojang.com/browse/MC-213958) - Azalea bushes connect to walls and fences
- [MC-214049](https://bugs.mojang.com/browse/MC-214049) - Mining rooted dirt is slightly faster than mining other dirt blocks
- [MC-214073](https://bugs.mojang.com/browse/MC-214073) - The azalea’s side textures are partially cut off
- [MC-214097](https://bugs.mojang.com/browse/MC-214097) - Cake cannot be placed on top of a moss block
- [MC-214135](https://bugs.mojang.com/browse/MC-214135) - Converted moss blocks do not update redstone
- [MC-214181](https://bugs.mojang.com/browse/MC-214181) - Rooted dirt cannot be picked up by endermen
- [MC-214374](https://bugs.mojang.com/browse/MC-214374) - Redstone doesn’t connect vertically on moss blocks
- [MC-214586](https://bugs.mojang.com/browse/MC-214586) - Rooted Dirt has no assigned tool
- [MC-214589](https://bugs.mojang.com/browse/MC-214589) - End gateway exit portals can be set to high coordinates, kicking the player
- [MC-214639](https://bugs.mojang.com/browse/MC-214639) - Rooted dirt is not randomly rotated
- [MC-214693](https://bugs.mojang.com/browse/MC-214693) - Tripwire texture is not mirrored correctly from behind
- [MC-214694](https://bugs.mojang.com/browse/MC-214694) - Tripwire which is part of a tripwire hook is not mirrored correctly from behind
- [MC-214695](https://bugs.mojang.com/browse/MC-214695) - Big dripleaf texture mirrored incorrectly from underneath
- [MC-214696](https://bugs.mojang.com/browse/MC-214696) - Small dripleaf texture mirrored incorrectly from underneath
- [MC-214698](https://bugs.mojang.com/browse/MC-214698) - Azalea top texture is mirrored incorrectly
- [MC-214818](https://bugs.mojang.com/browse/MC-214818) - Waterlogged pointed stalagmites don’t drop when their support block is broken
- [MC-214858](https://bugs.mojang.com/browse/MC-214858) - Powered big dripleaf play tilting sounds when blocks are changed nearby
- [MC-214879](https://bugs.mojang.com/browse/MC-214879) - Selecting nothing and pressing Ctrl+C clears clipboard
- [MC-214901](https://bugs.mojang.com/browse/MC-214901) - Rain passes through moss blocks
- [MC-214965](https://bugs.mojang.com/browse/MC-214965) - Maximum building height is 319, but warning message says 320
- [MC-216820](https://bugs.mojang.com/browse/MC-216820) - Cobbled Deepslate Slab uses the stone sounds instead of the deepslate sounds
- [MC-217749](https://bugs.mojang.com/browse/MC-217749) - Small Dripleaf can’t be placed on Rooted Dirt while waterlogged
- [MC-218888](https://bugs.mojang.com/browse/MC-218888) - Shift Clicking items into inventory prevents the relevant advancement from triggering
- [MC-219054](https://bugs.mojang.com/browse/MC-219054) - Can type text into anvil text field without putting an item in it, preventing you from closing the UI with E
- [MC-219103](https://bugs.mojang.com/browse/MC-219103) - The eyes of some entities can be seen through powder snow/lava
- [MC-219203](https://bugs.mojang.com/browse/MC-219203) - Mineshaft support legs can generate in lava
- [MC-219240](https://bugs.mojang.com/browse/MC-219240) - Inconsistency: cobbled deepslate does not take longer to mine than deepslate
- [MC-219635](https://bugs.mojang.com/browse/MC-219635) - There is no sound when defrosting from fire/lava (vanilla parity)
- [MC-219740](https://bugs.mojang.com/browse/MC-219740) - Spyglass overlay broken while in water with fast graphics
- [MC-219850](https://bugs.mojang.com/browse/MC-219850) - There is no sound or subtitle for applying/removing/scraping wax or oxidation
- [MC-219868](https://bugs.mojang.com/browse/MC-219868) - Opening a UI darkens the background less than it used to
- [MC-219906](https://bugs.mojang.com/browse/MC-219906) - Minecraft crashes when spectating an entity submerged in water
- [MC-219920](https://bugs.mojang.com/browse/MC-219920) - Amethyst Blocks can no longer be gained by mining them
- [MC-219933](https://bugs.mojang.com/browse/MC-219933) - Shulker heads do not flash red when taking damage / when killed
- [MC-219937](https://bugs.mojang.com/browse/MC-219937) - Parity issue: Clouds are at y=192
- [MC-219973](https://bugs.mojang.com/browse/MC-219973) - Hanging Roots takes about a second to be mined
- [MC-219974](https://bugs.mojang.com/browse/MC-219974) - Big Dripleaf takes about a second to be mined
- [MC-220068](https://bugs.mojang.com/browse/MC-220068) - Experience orbs are no longer affected by the fog from powder snow/lava
- [MC-220069](https://bugs.mojang.com/browse/MC-220069) - Wither/creeper armor is no longer affected by the fog from powder snow/lava
- [MC-220070](https://bugs.mojang.com/browse/MC-220070) - Lightning is not affected by the fog from powder snow/lava
- [MC-220157](https://bugs.mojang.com/browse/MC-220157) - String is not affected by light levels
- [MC-220174](https://bugs.mojang.com/browse/MC-220174) - With graphics set to Fabulous!, blocks such as honey, slime and stained glass appear lit up in third person mode
- [MC-220269](https://bugs.mojang.com/browse/MC-220269) - Shader texture coordinate wrapping mode causes screen effects like glowing to wrap where they shouldn’t
- [MC-220339](https://bugs.mojang.com/browse/MC-220339) - Beacon beam is not affected by the fog from powder snow/lava
- [MC-221146](https://bugs.mojang.com/browse/MC-221146) - Water fog still very subtle making water appear too clear in the distance

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/36d49b1a6d05f1deac293d477bfa2b4a1babb71c/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
