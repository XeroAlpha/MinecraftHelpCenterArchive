---
title: "Minecraft: Java Edition - Snapshot 21w11a"
date: 2021-03-17T16:34:36Z
updated: 2025-03-12T11:13:53Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360058629831-Minecraft-Java-Edition-Snapshot-21w11a
---

An absolutely shocking snapshot arrives! This snapshot adds some new functionality to Copper, some general tweaks, a fancy new way of getting performance metrics, and a bunch of bugfixes.

Happy mining!

# NEW FEATURES IN 21W11A

- Lightning rods can now, for the very first time ever, be waterlogged
- New functionality for applying and removing wax from Copper
- Bonemealing rooted dirt now grows hanging roots underneath

## WAXING COPPER AND OXIDIZATION

- Right-click with Honeycomb on Copper Blocks to wax them
- Use honeycomb in a dispenser to wax Copper Blocks
- Axes can scrape off wax and oxidation of Copper Blocks
- Lightning strike hitting Copper will clean its oxidation

# CHANGES IN 21W11A

- Waxed Copper Blocks can be crafted into 4 Copper Ingots
- Tweaked the cave sizes
- Slightly increased the frequency of Diamond Ore blobs
- Hanging roots block now renders randomly offset
- Breaking a Big Dripleaf stem now drops a Big Dripleaf Block
- Moss Blocks can be crafted with cobblestone or stone bricks to make the mossy versions of those blocks
- The facing direction of Small Dripleaf Blocks is now determined by which direction the player is facing when placing it
- Fully-grown Amethyst Clusters now drop 4 Amethyst Shards (or more with Fortune) when mined with a pickaxe, and drop 2 Amethyst Shards when broken by hand, piston, or other means

# TECHNICAL CHANGES IN 21W11A

- Added F3+L shortcut to generate and persist performance metrics from in-game

## IN-GAME CLIENT METRICS REPORTING

Pressing F3+L while in the game will start a recording for 10 seconds capturing metrics such as tick durations, used heap sizes, and other more detailed stats. These will be saved to a zip file in debug/profiling/\<yyyy-MM-dd_HH.mm.ss\>.zip and could be used for performance regression analysis if included in bug reports.

The exact metrics, output format, and names are susceptible to change between versions, and our plan is to continue iterating on which metrics to capture.

# FIXED BUGS IN 21W11A

- [MC-1483](https://bugs.mojang.com/browse/MC-1483) - Snow covered grass/podzol/mycelium block side texture does not match original block
- [MC-12363](https://bugs.mojang.com/browse/MC-12363) - Lava / water / powder snow bucket desync when using it while rapidly turning
- [MC-70850](https://bugs.mojang.com/browse/MC-70850) - False negatives during occlusion culling
- [MC-71530](https://bugs.mojang.com/browse/MC-71530) - Spectators can’t see through lava
- [MC-145501](https://bugs.mojang.com/browse/MC-145501) - Librarian and zombie librarian torso top texture is incorrect
- [MC-150054](https://bugs.mojang.com/browse/MC-150054) - Spectral arrow texture on item and entity aren’t consistent
- [MC-150784](https://bugs.mojang.com/browse/MC-150784) - Brewing Stand bottle outline incorrect
- [MC-154006](https://bugs.mojang.com/browse/MC-154006) - Overworld wood signs use the outdated wood texture on all sides
- [MC-160195](https://bugs.mojang.com/browse/MC-160195) - Jungle door inventory texture is outdated
- [MC-160388](https://bugs.mojang.com/browse/MC-160388) - Painting back texture has not been updated with the texture update
- [MC-195806](https://bugs.mojang.com/browse/MC-195806) - Smoker’s top and bottom textures have inconsistently colored pixels
- [MC-197561](https://bugs.mojang.com/browse/MC-197561) - Carved pumpkins and jack o’lanterns create swastikas
- [MC-197883](https://bugs.mojang.com/browse/MC-197883) - Jigsaw Structures causing DataFixer spam
- [MC-198805](https://bugs.mojang.com/browse/MC-198805) - Floating pixel in the tailfin of a guardian/elder guardian
- [MC-202760](https://bugs.mojang.com/browse/MC-202760) - Area effect cloud does not enforce a maximum radius
- [MC-203554](https://bugs.mojang.com/browse/MC-203554) - block.amethyst_block.chime has no subtitle
- [MC-203561](https://bugs.mojang.com/browse/MC-203561) - Amethyst crystal cluster drops items when block is moved directly by a piston without actually breaking the block
- [MC-203623](https://bugs.mojang.com/browse/MC-203623) - Inconsistency: Breaking amethyst crystals with hands doesn’t drop the item, but breaking the block they are placed on drops them
- [MC-203676](https://bugs.mojang.com/browse/MC-203676) - Tinted Glass suffocates entities inside of it
- [MC-203753](https://bugs.mojang.com/browse/MC-203753) - Spyglass use statistic never increases
- [MC-203918](https://bugs.mojang.com/browse/MC-203918) - Mobs can spawn on tinted glass
- [MC-204016](https://bugs.mojang.com/browse/MC-204016) - When filling a lava cauldron with lava, the lava is placed on the ground, not in the cauldron. This also affects powder snow.
- [MC-204862](https://bugs.mojang.com/browse/MC-204862) - Tinted glass is not included in the impermeable tag
- [MC-205913](https://bugs.mojang.com/browse/MC-205913) - Lightning rod can spawn skeleton horses with skeletons
- [MC-206787](https://bugs.mojang.com/browse/MC-206787) - World Border is rendered upside down
- [MC-207557](https://bugs.mojang.com/browse/MC-207557) - Frozen hearts in hardcore mode look identical to frozen hearts in survival mode
- [MC-211513](https://bugs.mojang.com/browse/MC-211513) - Trident returning to owner not in the same world can cause permanent player kick
- [MC-212123](https://bugs.mojang.com/browse/MC-212123) - Player lighting is inconsistent in the inventory and appears darker on the front
- [MC-212226](https://bugs.mojang.com/browse/MC-212226) - Bone Meal can still be used on a Glow Lichen when it is unable to grow
- [MC-212410](https://bugs.mojang.com/browse/MC-212410) - Cannot compost glow lichen
- [MC-213743](https://bugs.mojang.com/browse/MC-213743) - Spectators can’t see through powder snow
- [MC-213764](https://bugs.mojang.com/browse/MC-213764) - Removing the block supporting a spore blossom allows the spore blossom to float
- [MC-213765](https://bugs.mojang.com/browse/MC-213765) - Cave vine blocks are inconsistent in ID from other similar blocks
- [MC-213768](https://bugs.mojang.com/browse/MC-213768) - Removing the support block for hanging roots allows it to float
- [MC-213778](https://bugs.mojang.com/browse/MC-213778) - Cave vines cannot be climbed
- [MC-213782](https://bugs.mojang.com/browse/MC-213782) - Cave vines do not slow you down like other vines
- [MC-213798](https://bugs.mojang.com/browse/MC-213798) - Cave vines head and body emit different light levels
- [MC-213886](https://bugs.mojang.com/browse/MC-213886) - Bone meal cannot be used on dripleaf stems
- [MC-213911](https://bugs.mojang.com/browse/MC-213911) - Cave vines body and cave vines head share the same name
- [MC-213980](https://bugs.mojang.com/browse/MC-213980) - Moss appropriate tool is axe rather than hoe
- [MC-214568](https://bugs.mojang.com/browse/MC-214568) - Setting a lectern on fire causes z-fighting
- [MC-215036](https://bugs.mojang.com/browse/MC-215036) - Snow layers in “Snowy Kingdom” superflat preset generate 64 blocks above the ground
- [MC-215384](https://bugs.mojang.com/browse/MC-215384) - Azaleas cannot be used as a fuel
- [MC-216134](https://bugs.mojang.com/browse/MC-216134) - Gilded blackstone texture does not match the new side texture of blackstone
- [MC-216184](https://bugs.mojang.com/browse/MC-216184) - Player takes no fall damage on blocks above y=316
- [MC-216227](https://bugs.mojang.com/browse/MC-216227) - Sugar cane item texture is no longer accurate from 13w36a forward
- [MC-216737](https://bugs.mojang.com/browse/MC-216737) - When replacing tuff, ores still generate with a “stone” background below y=0
- [MC-216945](https://bugs.mojang.com/browse/MC-216945) - Teams become dysfunctional when any entity leaves the team
- [MC-216965](https://bugs.mojang.com/browse/MC-216965) - Flat “slices” of terrain generating in cracks
- [MC-217303](https://bugs.mojang.com/browse/MC-217303) - Potential optimization target in DepthBasedReplacingBaseStoneSource
- [MC-217546](https://bugs.mojang.com/browse/MC-217546) - stat.fallOneCm is not updated when falling onto a block above y=316
- [MC-217802](https://bugs.mojang.com/browse/MC-217802) - Some blocks generate at wrong Y height in a superflat world
- [MC-218587](https://bugs.mojang.com/browse/MC-218587) - Lightning rod still can’t be waterlogged
- [MC-218594](https://bugs.mojang.com/browse/MC-218594) - Debug chunk borders don’t render properly
- [MC-218596](https://bugs.mojang.com/browse/MC-218596) - Debug pie is blacked out
- [MC-218597](https://bugs.mojang.com/browse/MC-218597) - Water has no fog anymore
- [MC-218603](https://bugs.mojang.com/browse/MC-218603) - Screen turns dark grey when switching dimension
- [MC-218604](https://bugs.mojang.com/browse/MC-218604) - Hanging roots can generate hanging on other hanging roots, making them float
- [MC-218609](https://bugs.mojang.com/browse/MC-218609) - Mipmapping causes some block faces to become too dark
- [MC-218610](https://bugs.mojang.com/browse/MC-218610) - Banners are unimpacted by light levels
- [MC-218626](https://bugs.mojang.com/browse/MC-218626) - Cannot enchant items
- [MC-218635](https://bugs.mojang.com/browse/MC-218635) - With fast graphics, the freezing overlay renders black, and covers the whole screen black in first person
- [MC-218640](https://bugs.mojang.com/browse/MC-218640) - Broken spyglass overlay on fast graphics
- [MC-218641](https://bugs.mojang.com/browse/MC-218641) - Red vignette shown when outside the world border is too intense
- [MC-218645](https://bugs.mojang.com/browse/MC-218645) - The carved pumpkin overlay turns the screen completely black when using fast graphics
- [MC-218652](https://bugs.mojang.com/browse/MC-218652) - The green nausea overlay no longer renders
- [MC-218653](https://bugs.mojang.com/browse/MC-218653) - Glowing effect no longer changes to team color
- [MC-218655](https://bugs.mojang.com/browse/MC-218655) - Floating water generates excessively in lush caves
- [MC-218660](https://bugs.mojang.com/browse/MC-218660) - The nether portal overlay no longer renders, whilst using fast graphics
- [MC-218695](https://bugs.mojang.com/browse/MC-218695) - Shulkers do not flash red when hurt or killed
- [MC-218712](https://bugs.mojang.com/browse/MC-218712) - Debug pie has purple box when moving an enchanted item
- [MC-218713](https://bugs.mojang.com/browse/MC-218713) - Right clicking to open alternate recipes does not show the recipes
- [MC-218729](https://bugs.mojang.com/browse/MC-218729) - Noise cave entrances cause unnatural, smooth edges in terrain
- [MC-218734](https://bugs.mojang.com/browse/MC-218734) - Caves generate with very blocky areas
- [MC-218748](https://bugs.mojang.com/browse/MC-218748) - At sunset, a blue line appears in the northern and southern skies
- [MC-218753](https://bugs.mojang.com/browse/MC-218753) - Ambient occlusion of the player seen in the survival inventory has changed
- [MC-218765](https://bugs.mojang.com/browse/MC-218765) - Glowing effect no longer renders around translucent pixels
- [MC-218793](https://bugs.mojang.com/browse/MC-218793) - Two white lines appear on the Mojang loading screen
- [MC-218817](https://bugs.mojang.com/browse/MC-218817) - Cave Vines can generate without supporting blocks
- [MC-218825](https://bugs.mojang.com/browse/MC-218825) - M1 ARM Macs crash when using Fabulous Graphics mode as was the case in older versions, but no lack of support warning is shown
- [MC-218830](https://bugs.mojang.com/browse/MC-218830) - World border is white
- [MC-218834](https://bugs.mojang.com/browse/MC-218834) - You can see block hitboxes very clearly whilst in powder snow/lava
- [MC-218845](https://bugs.mojang.com/browse/MC-218845) - Mojang logo screen flashes blue before changing to red
- [MC-218852](https://bugs.mojang.com/browse/MC-218852) - World border is occasionally shown as a solid color upon being loaded
- [MC-218877](https://bugs.mojang.com/browse/MC-218877) - The red flash when a mob is hurt/killed appears to be slightly dimmed
- [MC-218881](https://bugs.mojang.com/browse/MC-218881) - When selecting text in the end, the sky gets highlighted
- [MC-218911](https://bugs.mojang.com/browse/MC-218911) - The background of hover-event text becomes blue when text is selected in an anvil or chat
- [MC-218945](https://bugs.mojang.com/browse/MC-218945) - Spyglass has a gradient effect while freezing
- [MC-218979](https://bugs.mojang.com/browse/MC-218979) - Cave ceilings and floors sometimes too flat or blocky
- [MC-218988](https://bugs.mojang.com/browse/MC-218988) - Fire is rendered dark in the player/horse/llama UI
- [MC-218990](https://bugs.mojang.com/browse/MC-218990) - Transparency buffers start with blue background instead of empty background
- [MC-219002](https://bugs.mojang.com/browse/MC-219002) - The wither’s wither armor has a blue aura around it
- [MC-219006](https://bugs.mojang.com/browse/MC-219006) - The background opacity of subtitles and chat, are affected by a potion effect UI fading out
- [MC-219014](https://bugs.mojang.com/browse/MC-219014) - Charged creeper layer makes clouds and entities invisible
- [MC-219036](https://bugs.mojang.com/browse/MC-219036) - World border is shown as a solid color when picking up items or experience orbs
- [MC-219039](https://bugs.mojang.com/browse/MC-219039) - World border does not render when below the world
- [MC-219049](https://bugs.mojang.com/browse/MC-219049) - Reloading resource packs no longer shows the progress bar while the transparent background is shown
- [MC-219105](https://bugs.mojang.com/browse/MC-219105) - Entity hitboxes can be seen whilst inside of powder snow/lava
- [MC-219108](https://bugs.mojang.com/browse/MC-219108) - Chat scroll bar is offset
- [MC-219111](https://bugs.mojang.com/browse/MC-219111) - Social interactions scroll bar appears broken
- [MC-219126](https://bugs.mojang.com/browse/MC-219126) - Xray with spyglass
- [MC-219155](https://bugs.mojang.com/browse/MC-219155) - Cast fishing line is disconnected from the rod
- [MC-219180](https://bugs.mojang.com/browse/MC-219180) - Slime blocks, honey blocks, stained glass, and ice are fully lit when moved by pistons
- [MC-219208](https://bugs.mojang.com/browse/MC-219208) - Xray using enchanted items
- [MC-219212](https://bugs.mojang.com/browse/MC-219212) - Entity shadows can be seen whilst inside of powder snow/lava
- [MC-219224](https://bugs.mojang.com/browse/MC-219224) - The background opacity of command syntax help is affected when highlighting text
- [MC-219278](https://bugs.mojang.com/browse/MC-219278) - Being inside of a block no longer shows the block texture
- [MC-219281](https://bugs.mojang.com/browse/MC-219281) - Dying ender dragon is rendered too bright
- [MC-219392](https://bugs.mojang.com/browse/MC-219392) - Lead/fishing line is no longer affected by the fog from powder snow/lava
- [MC-219597](https://bugs.mojang.com/browse/MC-219597) - End portal and end gateway textures expand as the player travels further from the block

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c828957ad249138129ccbc8749bfd14f01d96a4b/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
