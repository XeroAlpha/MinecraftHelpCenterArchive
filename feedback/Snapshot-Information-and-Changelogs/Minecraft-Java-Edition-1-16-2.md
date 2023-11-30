---
title: "Minecraft: Java Edition - 1.16.2"
date: 2020-08-11T18:43:19Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360047630831-Minecraft-Java-Edition-1-16-2
---

11 August 2020

Ever since the [Nether Update](https://www.minecraft.net/en-us/article/nether-update-java), the Piglins have seen players sneaking in and having a peek in their chests – well, no more! With 1.16.2, we’re introducing the Piglin Brute – a Piglin so focused on guarding the Bastion Remnants' chests that even gold can’t distract them.

# FEATURES

## ACCESSIBILITY

Two new accessibility settings have been added to help with visual comfort.

- Distortion effects such as nausea and the Nether portal overlay can now be reduced
- At lower values, the nausea effect is replaced with a green overlay as an alternative visualization
- Field of view effects, shown after speed modifiers are applied, can now be reduced

### CHAT DELAY

- Chat delay has been added to the Chat Settings screen
- Pressing F3+D now clears the pending chat messages

## BASTION REMNANTS

- Tweaked the Bastion Remnant chest loot
- Chests in Bastion Remnants are now more likely to be positioned on top of gilded blackstone

## BLOCKS

- Brewing stands can now be crafted with blackstone
- Lanterns and Soul Lanterns can now be waterlogged
- Crimson and warped fungus can now be placed on mycelium
- Chains can now be placed in all orientations

## ITEMS

- Tools are now sorted based on material in the creative inventory
- Totems of undying now give the fire resistance status effect for 40 seconds when activated

## MOBS

- Endermen will no longer place their held block onto bedrock blocks
- Zoglins can now be leashed
- When a Zombified Piglin is spawned riding a Strider, it will now be holding a Warped Fungus on a Stick

## PIGLINS

- Added Piglin Brutes!
- Piglins now become angry with players who open or destroy a Chest Minecart
- Tweaked bartering loot

### PIGLIN BRUTE

- Piglin Brutes are stronger versions of Piglins that live in bastions and protect the treasures there
- Unlike the their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren’t afraid of anything
- Piglin Brutes attack players on sight, no matter how they are dressed
- Piglin Brutes wield axes and don’t need any armor, because they’re just that tough

## RESPAWN BLOCK POSITIONS

- Modified how respawn positions are chosen for beds and respawn anchors
- Respawn anchors will prioritize cardinal directions over corners
- Beds will prioritize the side of the bed the player entered from and then spaces circling around the foot of the bed up to the head of the bed
- Respawning players will now face the block that they respawned at
- Placing players onto dangerous blocks is now avoided when possible

## VILLAGERS

- Villagers now emit green particles when joining a village, setting a home bed, or acquiring a job site / profession
- Villagers now lose their job sites when changing dimension

# TECHNICAL

- Custom worlds now support custom biomes
- Sign edit screen will now intialize from existing sign text (should have no noticeable impact on vanilla)
- Small improvements to data and resource pack selection screens
- Tags can now have optional entries

## COMMANDS

### EXECUTE

- execute in now respects dimension scaling

### SPAWNPOINT & SETWORLDSPAWN

Added an angle parameter for setting the default facing angle of a respawning player  
Syntax: spawnpoint \[\<targets\>\] \[\<pos\>\] \[\<angle\>\]  
Syntax: setworldspawn \[\<pos\>\] \[\<angle\>\]  
New parameters:

- angle - Floating point angle in degrees. Supports the relative ~ modifier

## CUSTOMIZED WORLD GENERATION

- Custom world generation and dimension settings now use the same folder pattern in data packs as other resources (namespace/\<type\>/resource.json)
- There is now experimental support for a worldgen folder in data packs
- worldgen/biome can contain biome definitions
- worldgen/configured_carver can contain definitions for world carver settings
- worldgen/configured_feature can contain definitions for feature placements
- worldgen/configured_structure_feature can contain definitions for structure placements
- worldgen/configured_surface_builder can contain definitions for surfaces
- worldgen/noise_settings can now contain noise configurations
- worldgen/processor_list can contain sets of block processors
- worldgen/template_pool can contain pool definitions for jigsaw structures
- Custom biomes can now be used in the single biome/caves/floating islands world types (add the data pack containing the biome first)
- Custom biomes can now be used in custom dimension generators

## DEDICATED SERVER PACKET LIMIT

- Dedicated servers can now kick clients that consistently send too many packets within a second
- Controlled with the rate-limit settings in server.properties
- The default rate limit of 0 means “no limit”

## PACK SELECTION SCREENS

- While screen is open, it will automatically update when pack directory contents change
- Both pack selection screen will now display contents of pack.png as pack icon

## PACK VERSION

- Resource pack version raised to 6

## TAGS

### OPTIONAL ENTRIES

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

# BUGS

A total of more than [150 bugs](https://bugs.mojang.com/issues/?filter=25075) have also been fixed in this release!

# GET THE RELEASE

​To install the release, open up the [Minecraft Launcher](https://www.minecraft.net/download) and click play! Make sure your Launcher is set to the "Latest Release" option.

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/c5f6fb23c3876461d46ec380421e42b289789530/server.jar)

Report bugs here:

- [Minecraft issue tracker!](https://bugs.mojang.com/projects/MC/summary)
