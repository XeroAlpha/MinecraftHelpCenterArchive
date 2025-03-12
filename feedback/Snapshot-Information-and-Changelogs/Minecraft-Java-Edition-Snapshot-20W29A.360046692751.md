---
title: Minecraft Java Edition - Snapshot 20W29A
date: 2020-07-22T22:41:49Z
updated: 2025-03-12T11:15:01Z
categories: Snapshot Information and Changelogs
tags:
  - 20W30A
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360046692751-Minecraft-Java-Edition-Snapshot-20W29A
---

22 July 2020

Today we're releasing Snapshot 20w30a for Minecraft Java Edition in which we have tweaked Bastion Remnants and you given you the ability to place lanterns under water.

# CHANGES IN 20W30A

- Modified how respawn positions are chosen for beds and respawn anchors
- Lanterns can now be waterlogged
- Soul Lanterns can now be waterlogged
- Tweaked the Bastion Remnant chest loot
- Chests in Bastion Remnants are now more likely to be located on top of gilded blackstone

## RESPAWN BLOCK POSITIONS

- Respawn anchors will prioritize cardinal directions over corners
- Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
- Respawning players will now face the block that they respawned at
- Placing players onto dangerous blocks is now avoided when possible

# TECHNICAL CHANGES IN 20W30A

- The sign edit screen will now initialize from existing sign text (should have no noticeable impact on vanilla)
- Tags can now have optional entries

## OPTIONAL TAG ENTRIES

Entries in tags can now be marked as optional. Failure to resolve optional entries does not prevent the whole tag from loading.

Example:

{  
  "replace": false,  
  "values": \[  
    "#minecraft:beds", // existing syntax  
    { "id":"#missing:tag", "required": false }, // optional sub-tag entry

    "minecraft:anvil", // existing syntax  
    { "id":"minecraft:stone_button", "required": true }, // new syntax for required tags  
    { "id":"missing:block", "required": false } // optional single-element entry  
  \]  
}

# FIXED BUGS IN 20W30A

- [MC-35765](https://bugs.mojang.com/browse/MC-35765) - Viewing text in Right-to-Left language while in another language renders backward and non-connected
- [MC-57869](https://bugs.mojang.com/browse/MC-57869) - Some item tooltips use § for coloring, rendering them incorrect in right-to-left languages
- [MC-116857](https://bugs.mojang.com/browse/MC-116857) - Advancement descriptions use unnecessary capitalization on generic resource names
- [MC-148447](https://bugs.mojang.com/browse/MC-148447) - Villagers often get stuck while trying to go through a door at the same time
- [MC-149060](https://bugs.mojang.com/browse/MC-149060) - Villagers “spam” doors by opening and closing them really fast
- [MC-153195](https://bugs.mojang.com/browse/MC-153195) - Mobs can drop items with duplicate enchantments
- [MC-181925](https://bugs.mojang.com/browse/MC-181925) - Unarmed vexes raise their arms in an offensive way when attacking
- [MC-187344](https://bugs.mojang.com/browse/MC-187344) - Fast graphics tooltip has incorrect ‘tree-leaves’ spelling
- [MC-187379](https://bugs.mojang.com/browse/MC-187379) - Text for pack.incompatible.confirm.new makes no sense
- [MC-187380](https://bugs.mojang.com/browse/MC-187380) - Incorrect grammar in en_us translation of pack.dropConfirm
- [MC-188389](https://bugs.mojang.com/browse/MC-188389) - Several minor errors in datapackFailure.title
- [MC-188390](https://bugs.mojang.com/browse/MC-188390) - Comma splices in four strings
- [MC-188392](https://bugs.mojang.com/browse/MC-188392) - Death message for getting shot by a skull is not grammatically correct in all situations
- [MC-188621](https://bugs.mojang.com/browse/MC-188621) - Mojang “Production Manager” credit is indented further than other credits
- [MC-188880](https://bugs.mojang.com/browse/MC-188880) - Baby zombified Piglins riding on chickens aren’t positioned properly
- [MC-189918](https://bugs.mojang.com/browse/MC-189918) - Multiplayer warning uses “Mojang” instead of “Mojang Studios”
- [MC-190102](https://bugs.mojang.com/browse/MC-190102) - Some UI strings are not consistently capitalized
- [MC-190288](https://bugs.mojang.com/browse/MC-190288) - Fabulous and Fancy graphics tooltips have missing commas
- [MC-191441](https://bugs.mojang.com/browse/MC-191441) - Right-to-left text is rendered bottom-up in some cases
- [MC-191562](https://bugs.mojang.com/browse/MC-191562) - “Cancel” button overlaps “Done” button when uploading a world to Realms, making users unable to upload world
- [MC-192296](https://bugs.mojang.com/browse/MC-192296) - Spider Jockey from a spawner minecart crashes with"java.lang.IllegalStateException: Entity is already tracked"
- [MC-193276](https://bugs.mojang.com/browse/MC-193276) - Player floats slightly above strider while riding it
- [MC-193339](https://bugs.mojang.com/browse/MC-193339) - NullPointerException during shutdown when rcon enabled with no password
- [MC-194263](https://bugs.mojang.com/browse/MC-194263) - Large End Cities do not generate correctly/get cut off
- [MC-194273](https://bugs.mojang.com/browse/MC-194273) - Save data of new Nether biomes is lost when upgrading a world to 20w28a or above
- [MC-194350](https://bugs.mojang.com/browse/MC-194350) - Some feature configurations don’t load in a datapack (java.lang.IllegalArgumentException: value already present: clh@77f95e19)
- [MC-195052](https://bugs.mojang.com/browse/MC-195052) - “angle” argument in spawnpoint command doesn’t use “minecraft:rotation” parser
- [MC-195582](https://bugs.mojang.com/browse/MC-195582) - Typing a colon twice or after a slash in chat when specifying a function/item/block/etc. in a command crashes the game

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/db5da41d9c5f6c0d839661269d70f5b8c1ff7d0a/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!
