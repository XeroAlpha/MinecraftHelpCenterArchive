---
title: Minecraft Java Edition - Snapshot 20W13A
date: 2020-03-25T18:51:14Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360041042172-Minecraft-Java-Edition-Snapshot-20W13A
---

**25 March 2020**

Ever felt that you want to take a ride across fields of lava? Yeah? Me too! This snapshot introduces the adorable(?) **Strider**. It might need some help with directions...

# NEW FEATURES IN 20W13A

- Added the lodestone
- Added the Strider
- Basalt is formed when lava flows over soul soil next to blue ice
- Farmer villagers can now compost seeds

## LODESTONE

A new block that can help you get your bearings!

- Crafted from a Netherite ingot and chiseled stone bricks
- Use a compass on a lodestone to create a lodestone compass pointing to that lodestone

## STRIDER

A new mob living the lava lakes of the Nether.

- Striders can walk on top of the surface of lava
- Can be saddled, but has a will of its own
- Really likes the smell of warped fungi – might even be convinced to follow it

## FARMER VILLAGERS

- Farmers can now put excess seeds in the composter to create bone meal
- Bone meal is used by the farmers to grow crops
- Farmers share excess wheat to other farmers, so more farmers can make bread

# CHANGES IN 20W13A

- You're now more likely to get soul speed books and boots from bartering with Piglins
- You now can charge the respawn anchor using a dispenser

# TECHNICAL CHANGES IN 20W13A

- Jigsaw Block
- A fishing location is now considered to be open water if the fishing hook is in water, there are no blocks besides lily pads above water and all water blocks are source blocks with no solid underwater blocks around

## JIGSAW BLOCK

- Jigsaw can now have one of 12 orientations
- Added new property Joint type to describe if attached piece can be rotated (rollable) or not (aligned)
- NBT field target_pool has been renamed to pool
- - attachement_type has been split into name (on parent block) and target (on child block).

# FIXED BUGS IN 20W13A

- [MC-118080](https://bugs.mojang.com/browse/MC-118080) - Bows without pulling predicate animate when other bows are pulled back
- [MC-154427](https://bugs.mojang.com/browse/MC-154427) - Villagers only pick up four stacks of items
- [MC-171003](https://bugs.mojang.com/browse/MC-171003) - Crimson and Warped stairs, planks and slabs can be used as fuel in a furnace
- [MC-171286](https://bugs.mojang.com/browse/MC-171286) - Warped fences and Crimson fences don’t connect with other fences
- [MC-171484](https://bugs.mojang.com/browse/MC-171484) - Shields, crossbows, bows, and fishing rods don’t show their proper animations in first person mode after certain actions
- [MC-171526](https://bugs.mojang.com/browse/MC-171526) - en_us.json issue: weeping_vines and weeping_vines_plant have the same name
- [MC-171830](https://bugs.mojang.com/browse/MC-171830) - Smokers cannot be crafted using crimson or warped stems
- [MC-172123](https://bugs.mojang.com/browse/MC-172123) - Using a spawn egg on a mob without a baby variant spawns an adult mob of the same type without a weapon
- [MC-172279](https://bugs.mojang.com/browse/MC-172279) - Can’t craft campfire with nether stems or hyphae
- [MC-172307](https://bugs.mojang.com/browse/MC-172307) - All loaded tileticks instantly run in the first tick after loading the chunk
- [MC-173258](https://bugs.mojang.com/browse/MC-173258) - Back of zombified piglin heads has very different texture/shading compared to the other sides
- [MC-173367](https://bugs.mojang.com/browse/MC-173367) - Arrows are floating in midair after being pushed by piston
- [MC-173791](https://bugs.mojang.com/browse/MC-173791) - Mobs dismount vehicles only in front of the boat, even if there is danger ahead
- [MC-174368](https://bugs.mojang.com/browse/MC-174368) - Minecarts can no longer eject entities into an open trap door
- [MC-174428](https://bugs.mojang.com/browse/MC-174428) - Nylium can be bonemealed underwater with seagrass above it
- [MC-174434](https://bugs.mojang.com/browse/MC-174434) - Sugar Cane, Kelp and Bamboo are in the incorrect creative inventory tab
- [MC-174481](https://bugs.mojang.com/browse/MC-174481) - en_us.json issue: twisting_vines and twisting_vines_plant have the same name
- [MC-174510](https://bugs.mojang.com/browse/MC-174510) - Stems, Hyphae, and variants do not use the Nether Wood material
- [MC-174537](https://bugs.mojang.com/browse/MC-174537) - Zombie Pigman hooves are still visible on Zombified Piglin texture
- [MC-174547](https://bugs.mojang.com/browse/MC-174547) - Kelp, Weeping Vines, and Twisted Vines can be bonemealed at age 25
- [MC-174642](https://bugs.mojang.com/browse/MC-174642) - Hitbox of twisting vine is incorrect
- [MC-174731](https://bugs.mojang.com/browse/MC-174731) - Modifying “soul.json” (inside of “particles” folder) causes crash
- [MC-174787](https://bugs.mojang.com/browse/MC-174787) - Arrow physics don’t work correctly when in a target that is moved
- [MC-174823](https://bugs.mojang.com/browse/MC-174823) - Sprinting and walking scoreboards don’t update properly
- [MC-174988](https://bugs.mojang.com/browse/MC-174988) - Bee nests are brown on maps
- [MC-175165](https://bugs.mojang.com/browse/MC-175165) - Using glowstone on a respawn anchor doesn’t consume it
- [MC-175171](https://bugs.mojang.com/browse/MC-175171) - Fishing bobber can get stuck on a ledge when being reeled in
- [MC-175174](https://bugs.mojang.com/browse/MC-175174) - Respawn anchor is considered obstructed if all its sides are covered or air
- [MC-175178](https://bugs.mojang.com/browse/MC-175178) - Anchor uses up the glowstone charge even though it didn’t respawn you
- [MC-175185](https://bugs.mojang.com/browse/MC-175185) - No datafixer for item AttributeModifiers UUIDs
- [MC-175191](https://bugs.mojang.com/browse/MC-175191) - Respawn Anchor charging cannot be heard by other players
- [MC-175193](https://bugs.mojang.com/browse/MC-175193) - Using glowstone in the offhand does not charge respawn anchor
- [MC-175199](https://bugs.mojang.com/browse/MC-175199) - In snowy_medium_house_2, some blocks are still misrotated
- [MC-175204](https://bugs.mojang.com/browse/MC-175204) - Four misrotated blocks in snowy_masons_house_1
- [MC-175208](https://bugs.mojang.com/browse/MC-175208) - Incorrect grammar “Your have no home bed or respawn anchor, or it was obstructed.”
- [MC-175209](https://bugs.mojang.com/browse/MC-175209) - Dying in a different dimension than your respawn anchor will cause the anchor to not play the depletion sound
- [MC-175210](https://bugs.mojang.com/browse/MC-175210) - Respawn anchor uses a charge after leaving the end dimension through the end portal
- [MC-175218](https://bugs.mojang.com/browse/MC-175218) - Looking at a map of an area with spruce sign, jungle sign or dark oak sign in it crashes the game
- [MC-175219](https://bugs.mojang.com/browse/MC-175219) - Respawn Anchor plays the “Respawn Point set” sound when right-clicked even when its already your respawn point
- [MC-175224](https://bugs.mojang.com/browse/MC-175224) - Nether gold ore does not yield any experience when mined
- [MC-175239](https://bugs.mojang.com/browse/MC-175239) - Villagers are generated very rarely in villages
- [MC-175278](https://bugs.mojang.com/browse/MC-175278) - Fishing near lily pads prevents players from receiving treasure loot table
- [MC-175289](https://bugs.mojang.com/browse/MC-175289) - Respawn anchor isn’t in the \#dragon_immune tag
- [MC-175322](https://bugs.mojang.com/browse/MC-175322) - Clicking on a fully charged respawn anchor with a glowstone block doesn’t activate it
- [MC-175327](https://bugs.mojang.com/browse/MC-175327) - The crafting recipe of Polished Basalt is inconsistent
- [MC-175514](https://bugs.mojang.com/browse/MC-175514) - Villager Gossips still use old UUID NBT format (TargetMost and TargetLeast)
- [MC-175827](https://bugs.mojang.com/browse/MC-175827) - Entities not loading in structure blocks (duplicate UUID)
- [MC-175830](https://bugs.mojang.com/browse/MC-175830) - F3 + I copies UUID

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/16f18c21286a3f566d3d0431d13aa133bebe6eff/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
