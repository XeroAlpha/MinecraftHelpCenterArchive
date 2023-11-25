---
title: "Minecraft: Java Edition Snapshot - 22w17a "
date: 2022-05-09T08:36:40Z
updated: 2022-05-09T08:36:43Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/6096035381773-Minecraft-Java-Edition-Snapshot-22w17a-
---

Prepare to drop some sick bleats in the latest Minecraft: Java Edition snapshot! We\'re bringing in the sweet sounds of the goat horn. There are also some changes to the warden and the allay. 

If the technical aspects of chatting is where it\'s at for you, make sure to check out the changes to chat signing.

Enjoy!

# NEW FEATURES IN 22W17A

-   Added Goat Horn!

## GOAT HORN

-   A Goat Horn drops when a Goat rams a tree or any other hard block that occurs naturally where Goats spawn (Logs, Stone, Packed Ice, Iron Ore, Copper Ore, or Emerald Ore)
    -   Other solid blocks are unfamiliar to the Goat, so it won't ram them
-   Use the horn to play a loud sound that can be heard from afar
-   Each horn has its own sound based on the Goat it originated from
-   There are 8 Goat Horn variants, 4 of them exclusive to screaming Goats
-   Goat Horns can sometimes be found in Pillager Outposts

# CHANGES IN 22W17A

-   The Allay connecting with Note Blocks is now better visualized by the vibration particle
-   The Allay connecting with Note Blocks can now be blocked by Wool Blocks again
-   Replaced realms subtle selected world highlight with a clear green checkmark
-   Updated the Brewing Stand's base UVs and texture to match a graphical fix in Bedrock Edition
-   Explosions caused by player-ignited TNT now cause experience to drop from broken blocks (such as ore blocks and sculk)
    -   We will be keeping an eye on feedback for this change, it might change in a future update
-   Sculk blocks now have very low blast resistance
-   Warden balancing

## WARDEN

-   Their ranged attack will now:
    -   Bypass shields and armor
    -   Deal 10 damage instead of 30 damage, and the cooldown has been reduced from 5 seconds to 2 seconds
    -   Display a custom death message
-   Wardens now drop a single Sculk Catalyst upon death

# TECHNICAL CHANGES IN 22W17A

-   Signed Chat
-   Removed dampenable_vibrations game event tag

## MULTIPLAYER SECURE CHAT SIGNING

<div>

This is the first step in a process to provide more security and player safety features for in-game chat. We\'d love to hear your thoughts, but keep in mind that many features such as server-driven styling of chat messages are still missing.

</div>

-   Chat messages between players are now cryptographically signed
-   Players are given a Mojang provided key-pair on startup
-   Servers can require players to have a Mojang-signed public key by setting enforce-secure-profile=true in server.properties
    -   Enforcing secure profiles will prevent players without a Mojang-signed public key from connecting
    -   By default this is set to false, allowing players to connect without a Mojang-signed public key
-   Chat styling is now handled via server resource packs with the translation key chat.type.text

# FIXED BUGS IN 22W17A

-   [MC-13103](https://bugs.mojang.com/browse/MC-13103) - Texture Z-Fighting at Wolf/Dog/Cat snout
-   [MC-53312](https://bugs.mojang.com/browse/MC-53312) - Illager/(zombie) villager/witch robes don't render the last two rows of pixels
-   [MC-106627](https://bugs.mojang.com/browse/MC-106627) - Leather cap texture overlay doesn't align correctly
-   [MC-141064](https://bugs.mojang.com/browse/MC-141064) - Cleric collar z-fighting
-   [MC-176840](https://bugs.mojang.com/browse/MC-176840) - Ores no longer drop experience when blown up
-   [MC-207309](https://bugs.mojang.com/browse/MC-207309) - Landing entities such as minecarts and armor stands trigger sculk sensors but boats do not
-   [MC-208597](https://bugs.mojang.com/browse/MC-208597) - Boats ridden over wool are detected by sculk sensor
-   [MC-208771](https://bugs.mojang.com/browse/MC-208771) - Projectiles landing on wool trigger sculk sensors
-   [MC-210712](https://bugs.mojang.com/browse/MC-210712) - Sculk sensors are not activated upon backwards movement in a boat
-   [MC-210901](https://bugs.mojang.com/browse/MC-210901) - Sculk sensors are not activated upon entities sliding on ice
-   [MC-248161](https://bugs.mojang.com/browse/MC-248161) - Weaponsmith zombie villager texture has leftover pixels from the regular weaponsmith texture
-   [MC-248292](https://bugs.mojang.com/browse/MC-248292) - Llama uses pre-1.14 chest texture
-   [MC-248555](https://bugs.mojang.com/browse/MC-248555) - Mismatches within (zombie) villager textures
-   [MC-248556](https://bugs.mojang.com/browse/MC-248556) - Savanna Zombie Villager missing a body texture
-   [MC-248557](https://bugs.mojang.com/browse/MC-248557) - Savanna villager body defines pixels identical to base villager texture
-   [MC-248561](https://bugs.mojang.com/browse/MC-248561) - Vindicator's crossed arms element has miscolored pixels on the faces touching the other arm elements
-   [MC-248562](https://bugs.mojang.com/browse/MC-248562) - Iron golem has unused pixels in the texture
-   [MC-249032](https://bugs.mojang.com/browse/MC-249032) - Fence item model's bars inconsistent with placed block
-   [MC-249039](https://bugs.mojang.com/browse/MC-249039) - "Half" armor bar icon texture is incorrect
-   [MC-249190](https://bugs.mojang.com/browse/MC-249190) - Sculk blocks don't drop experience orbs when blown up
-   [MC-249262](https://bugs.mojang.com/browse/MC-249262) - Sculk cannot replace soul sand or mud when mobs die on top of them
-   [MC-249669](https://bugs.mojang.com/browse/MC-249669) - tadpole.png has unused frog egg texture
-   [MC-249745](https://bugs.mojang.com/browse/MC-249745) - If allay is holding an item, it can be equipped with armor using a dispenser
-   [MC-249780](https://bugs.mojang.com/browse/MC-249780) - Blocks that require support can generate floating in ancient cities
-   [MC-249919](https://bugs.mojang.com/browse/MC-249919) - Pillar in Ancient City can generate with waterlogged stairs
-   [MC-250000](https://bugs.mojang.com/browse/MC-250000) - Allays and villagers create ghost items when they take items from a stack and cannot fit the whole stack in their inventory
-   [MC-250027](https://bugs.mojang.com/browse/MC-250027) - Allays ignore the dimension when checking for liked note blocks
-   [MC-250075](https://bugs.mojang.com/browse/MC-250075) - The inner two planes in mangrove roots are smaller than they should be
-   [MC-250076](https://bugs.mojang.com/browse/MC-250076) - Shading is disabled for the two inner planes in mangrove roots, even though it isn't for all the other planes
-   [MC-250165](https://bugs.mojang.com/browse/MC-250165) - Doing /locate stronghold in some single biomes causes an unexpected error
-   [MC-250240](https://bugs.mojang.com/browse/MC-250240) - Z-fighting can be seen around the backs of frogs when they open their mouths
-   [MC-250288](https://bugs.mojang.com/browse/MC-250288) - Some blocks in Ancient City structures can only be covered by sculk veins and can't be converted into a sculk block
-   [MC-250321](https://bugs.mojang.com/browse/MC-250321) - Flying and aquatic mobs pathfinding in certain blocks cause crash \|\| The game crashed whilst ticking entity Error: java.lang.NullPointerException: Cannot invoke "dnm.a()" because "\$\$1" is null
-   [MC-250331](https://bugs.mojang.com/browse/MC-250331) - Chunk rendering is glitchy / incorrect when redrawing
-   [MC-250339](https://bugs.mojang.com/browse/MC-250339) - Paintings are off-centered in multiplayer servers
-   [MC-250379](https://bugs.mojang.com/browse/MC-250379) - Teleporting armor stands results in visual desync and abnormal behavior
-   [MC-250400](https://bugs.mojang.com/browse/MC-250400) - Blocks and items can cause the world to render invisibly
-   [MC-250411](https://bugs.mojang.com/browse/MC-250411) - Sculk can spread in ancient city structures and replace soul sand with fire on top, extinguishing fires
-   [MC-250429](https://bugs.mojang.com/browse/MC-250429) - Narrator improperly narrates chat
-   [MC-250460](https://bugs.mojang.com/browse/MC-250460) - The rendering of players is delayed for others

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://launcher.mojang.com/v1/objects/9b4d5a87b48d7c3784fdfc9d6982543e8d9296df/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
