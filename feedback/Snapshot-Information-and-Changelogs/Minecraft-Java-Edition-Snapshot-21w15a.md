---
title: "Minecraft: Java Edition - Snapshot 21w15a"
date: 2021-04-14T15:19:27Z
updated: 2025-03-12T11:13:52Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/360059421212-Minecraft-Java-Edition-Snapshot-21w15a
hash:
  caves-cliffs-world-generation: caves--cliffs-world-generation
  the-caves-cliffs-prototype-data-pack: the-caves--cliffs-prototype-data-pack
---

In today’s snapshot, we’re making a few needed changes that directly relate to our [recent announcement](https://www.minecraft.net/article/a-caves---cliffs-announcement.html). If you haven’t yet read it, we strongly recommend you do. You can also check out [this Caves & Cliffs video](https://youtu.be/6YgKUZnUyak) from Agnes and Henrik to learn more about our plans for the update.

Even though some features will be released later than we’d planned, you can still try them out through a separate data pack. More information, as well as our latest tweaks, can be found here below.

# CAVES & CLIFFS WORLD GENERATION

The riskier and technically more complex world generation changes for the Caves & Cliffs update will be shipped in a later update and have been switched off in this snapshot. This means:

- World height has been switched back to the 1.16 levels
- Noise caves and aquifers have been switched off
- Cave and ravine carvers have been returned to their old settings
- Crack carvers have been switched off
- Ore distribution has been returned to the 1.16 setup
- Copper now generates between the bottom of the world and height 192, being most common around height 96
- Tuff now generates in blobs between heights 0 and 16
- Worlds created in snapshot 21w05b or any earlier version can now once again be opened
- Worlds created in any version between snapshot 21w06a and 21w14a can no longer be opened

## THE CAVES & CLIFFS PROTOTYPE DATA PACK

You can still try out the world generation for the later update using a datapack which activates the changes as an experimental custom world:

- [Download the data pack](https://launcher.mojang.com/v1/objects/643b1f8f7f71c74ffc913e8572f52fd5bca88282/CavesAndCliffsPreview.zip)
- Launch the game, go to the “Create New World” screen, and click the “Data Packs” button
- Drag the downloaded zip file onto the Minecraft window
- The game will ask you if you want to add the data pack – click “Yes”
- Click the play arrow on the data pack that just appeared in the list – this will move it to the list on the right-hand side of the screen
- Click the “Done” button and continue creating your world as normal

Keep in mind that the world you create with the data pack will be flagged as experimental by the game, and such worlds are not guaranteed to work in future versions. Also, please note that you can’t add data packs that change the world generation to existing worlds, so you must create a new world to access the experimental features.

# NEW FEATURES IN 21W15A

- Goats will ram anything that moves… and also armor stands

# CHANGES IN 21W15A

- A crinkly, crunchy sound now plays when Bone Meal is used
- Reordered some blocks in the Building Blocks Tab in Creative Menu
- Goats will avoid walking on Powder Snow
- Creepers know won't dare mess with Goats
- The main menu background has been updated
- Tweaked the textures of raw ore items
- Just like other ore materials, you can craft a compact version with raw ore items in order to save inventory space

[Click here](https://images.ctfassets.net/8y6ykjruobr4/7nD9Gt9RNA0dKF8uqlfsQZ/2182c36a4e63d459fc5da4b0ce5a6f66/snapshot-21w15a-ore-texture-comparison-full.png) for a full resolution image of the new raw ore textures in snapshot 21w15a.

## BUILDING BLOCKS TAB

- All ores have been reordered to be in the same location in the creative inventory
- Compact forms of raw and refined underground materials have been reordered

# TECHNICAL CHANGES IN 21W15A

- Added the Marker entity
- Added /debug function
- selector and nbt chat components can now configure separators between elements
- Servers can now customize a message to display when prompting players about custom resource packs

## MARKERS

Markers are a new type of entity meant for custom use cases like map making and data packs.

- Only exist on the server side, are never sent to clients
- Do not do any updates of their own
- Have a data compound field that can contain any data

## /DEBUG FUNCTION

New debug subcommand executes command with same syntax as function

- Every executed command, message (even if it would be normally invisible), result or error is stored to file
- Cannot be run from inside functions

## CHAT COMPONENT SEPARATORS

- Components that print lists of names, like selector or nbt can now override separator (", " by default) with separator element
- Examples:
  - {"selector": "@e\[type=chicken\]", "separator": "\|"}
  - {"nbt": "CustomName", "entity": "@e\[type=chicken\]", "interpret": true, "separator": {"text": "\*", "color": "red"}}

## CUSTOM SERVER RESOURCE PACKS

When require-resource-pack is used in server.properties, there’s now an option for servers to add a custom message.

- A dedicated server can configure additional message to be shown on resource pack prompt (resource-pack-prompt in server.properties, expects chat component syntax, can contain multiple lines)

# FIXED BUGS IN 21W15A

- [MC-203855](https://bugs.mojang.com/browse/MC-203855) - A geode configured_feature causes a crash when use_alternate_layer0_chance is used with no entries in inner_placements
- [MC-212145](https://bugs.mojang.com/browse/MC-212145) - Summoning Glow Lichen using /setblock doesn’t place any lichen but creates light until the block is updated
- [MC-212273](https://bugs.mojang.com/browse/MC-212273) - Glow Lichen doesn’t render when being held by an Enderman
- [MC-215836](https://bugs.mojang.com/browse/MC-215836) - Deepslate uses the same color as stone on maps
- [MC-215844](https://bugs.mojang.com/browse/MC-215844) - Stone still generates around lava pools at low levels
- [MC-216588](https://bugs.mojang.com/browse/MC-216588) - Feature placement - java.lang.IllegalArgumentException: bound must be positive
- [MC-218588](https://bugs.mojang.com/browse/MC-218588) - Cracked deepslate bricks & tiles are in the incorrect position in the creative inventory
- [MC-218698](https://bugs.mojang.com/browse/MC-218698) - Infested deepslate makes the old “stone” sounds
- [MC-218705](https://bugs.mojang.com/browse/MC-218705) - Deepslate emerald ore is separated from other deepslate ores in the creative inventory
- [MC-218749](https://bugs.mojang.com/browse/MC-218749) - Deepslate coal ore doesn’t drop experience
- [MC-218944](https://bugs.mojang.com/browse/MC-218944) - Copper ore and deepslate copper ore have inconsistent textures
- [MC-219972](https://bugs.mojang.com/browse/MC-219972) - Deepslate gold ore has an inconsistent pixel
- [MC-221501](https://bugs.mojang.com/browse/MC-221501) - Water splash potions don’t give the axolotl 1.5 minutes of moisture
- [MC-221718](https://bugs.mojang.com/browse/MC-221718) - Lava fog repeatedly fails to render each block at certain y-levels
- [MC-221798](https://bugs.mojang.com/browse/MC-221798) - Blindness doesn’t render correctly
- [MC-222104](https://bugs.mojang.com/browse/MC-222104) - Beacon beam fog is incorrectly computed
- [MC-222266](https://bugs.mojang.com/browse/MC-222266) - Goats don’t attack
- [MC-222522](https://bugs.mojang.com/browse/MC-222522) - Nether Gold Ore is no longer smeltable

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/0a39422009a7aa01dd185043746c50dc909dc345/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/CavesCliffsFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
