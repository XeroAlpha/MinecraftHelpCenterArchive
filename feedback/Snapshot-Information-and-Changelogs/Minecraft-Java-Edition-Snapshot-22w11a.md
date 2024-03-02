---
title: "Minecraft: Java Edition - Snapshot 22w11a"
date: 2022-03-16T16:51:10Z
updated: 2022-03-16T16:53:39Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/4849829699597-Minecraft-Java-Edition-Snapshot-22w11a
hash:
  d-directional-audio: 3d-directional-audio
---

Minecraft: Java Edition is jumping on the Wild Update train! The first snapshot for 1.19 is now available. It contains frogs, the Deep Dark, and a bunch of new blocks. We've also entered the era of 3D directional audio. Keeping up with the times!

Happy mining!

# NEW FEATURES IN 22W11A

- Added the Deep Dark biome
- Added Frogs & Tadpoles
- Added mangrove blocks
- Added mud and mud brick blocks
- Added Sculk, Sculk Veins, Sculk Shrieker and Sculk Catalyst blocks
- Added 3D Directional Audio option

## DEEP DARK

Dig into the depths far underground to uncover the darkest biome in Minecraft - the Deep Dark.

- Dimly lit and eerie, the Deep Dark is sure to strike fear into the hearts of even the most brave player
- The floor of the Deep Dark is covered in sculk
- No mobs spawn in the Deep Dark

## FROG

- Frogs can jump
- Frogs can swim
- Frogs can walk on land
- Frogs can croak
- Frogs can eat small slimes, causing a slime ball to drop
- Frogs can eat small Magma Cubes, causing a Froglight block to drop
- Each Frog variant drops a specific Froglight Block
- Three Froglight blocks are added, a lightsource block

## TADPOLES

- Tadpoles can swim in water
- Tadpoles on land “jump around” like fishes on land, and eventually dies
- Tadpoles that grows up turns into a Frog
- Tadpoles grow into a different type of frog based on the biome they are born in (Cold, Temperate, Warm)
- Tadpoles can be caught in a bucket

## MANGROVE WOOD BLOCKS

Added a new type of wood: Mangrove! Mangrove biome + mangrove trees are coming in a later snapshot.

- Mangrove log and stripped mangrove log
- Mangrove wood and stripped mangrove wood
- Mangrove roots and muddy mangrove roots
- Mangrove boat, button, pressure plate, door, trapdoor, sign, slab, fence, fence gate, and stairs

## MANGROVE LEAVES AND PROPAGULES

- Mangrove propagule is a sapling that grows from the bottom of mangrove leaves
- Bonemealing mangrove leaves will cause a new propagule to start growing beneath it
- Propagules grow through 4 stages, and growth can be accelerated by bonemealing
- You can break off a fully grown propagule and plant it like a sapling. For now it will grow in an oak tree, but will of course grow into a mangrove tree when that is done.

## MUD

- Mud is a block that will generate in the upcoming Mangrove biome.
- When walking on mud, entities sink down a bit. Like soul sand, but without the slowdown.
- Mud can be created by using a water bottle on dirt, by hand or with a dispenser.
- Packed mud can be crafted from mud

## MUD BRICKS

- Mud bricks are a building block that can be crafted from packed mud
- Mud bricks can be crafted into Mud brick stairs, walls, and slabs using a crafting table or stonecutter.

## SCULK

The rattling tendrils of the Sculk Sensors had to come from somewhere, right? Introducing Sculk, a new family of blocks that dwells in the Deep Dark.

- Added Sculk Catalyst block, a mysteriously soul-emitting block that blooms with Sculk patches underneath nearby dying mobs
  - Mobs that perish in the presence of the catalyst will not drop their experience
- Added Sculk blocks
  - When a mob dies near a Sculk Catalyst, some unknown process seems to consume blocks beneath and turn them into Sculk blocks
  - Sculk charge when spreading will have a chance to grow certain blocks, like Sculk Sensors on top of it, consuming its charge.
- Added Sculk Vein blocks
  - These veins are found on the edge of Sculk patches
  - Similar to Glow Lichen, they can be placed in any orientation
  - Spreading of veins causes other blocks to be taken over by the sculk
  - Sculk Vein can spread underwater
- Added Sculk Shrieker block.
  - Sculk Shriekers can be found growing rarely from the charge of a Sculk Catalyst
  - Sculk Shrieker can be waterlogged
  - Sculk Shrieker requires Silk Touch to obtain otherwise drops experience when mined
- Souls from mobs will spread through Sculk Veins and Sculk Blocks in random directions until  
  they find a valid substrate they can feed of off
  - The charge from souls in the Sculk Blocks and Sculk Veins will eventually decay, but it will decay much, much slower in the close  
    vicinity of the Sculk Catalyst, and much faster away from its host
  - If the charge is dropped outside the range of the Catalyst, it has a chance of growing a Sculk Sensor
- Sculk, Sculk Veins and Sculk Catalysts require Silk Touch to acquire. Otherwise, they drop experience when mined
- The efficient tool for all Sculk family blocks is the Hoe

## 3D DIRECTIONAL AUDIO

- Added sound option for 3D Directional Audio simulation
- This option is best experienced with headphones

# TECHNICAL CHANGES IN 22W11A

- The data pack format is now 10
- The resource pack format is now 9
- Added 3D Blending
- Added new font glyph provider for spaces
- Added estimated GPU utilization percentage to performance profiling metrics and F3 debug screen
  - This is only available for graphics devices that support GPU timer queries
- Added ability for data and resource packs to selectively hide files from packs below them
- World presets/types and flat world presets in “Create World” screen can now be controlled by datapacks
- Added server property max-chained-neighbor-updates to limit the amount of consecutive neighbor updates before skipping additional ones. Negative values remove the limit.

## BLENDING

- Blending now support 3d biome blending, so it will blend the underground biomes as well.
- Removed blending_data.old_noise, now existence of blending_data in chunk data determines if a chunk is considered old
- Added blending_data.min_section and blending_data.max_section that determines which sections will be used for data for blending

## SPACE GLYPH PROVIDER

- New glyph provider type space is added to allow creation of space-like glyphs
- New provider has single argument called advances which is map of codepoint to glyph advance (width)
- Rendering of space glyph is not longer hardcoded (needs to be declared manually in font)

## PACK FILTERS

- Data and resource packs can have filter section in pack.mcmeta.
- This section has mandatory field block, which is a list of patterns (regular expressions) for namespaces and paths.
- If any of files in packs added before one with filter section matches any pattern inside block, it will be filtered out (i.e. treated as if it wasn’t present in the first place).
- filter section does not apply to a pack containing it - only to packs loaded before it.
- Both namespace and path can be omited. Missing field matches every value.
- For example, adding pack with this section in pack.mcmeta after vanilla pack will hide all recipes and advancements defined by vanilla pack

``` has-line-data
"filter": {
    "block": [
        {
            "namespace": "minecraft",
            "path": "recipes/.*"
        },
        {
            "namespace": "minecraft",
            "path": "advancements/.*"
        }
    ]
}
```

## WORLD PRESETS

- New registry types worldgen/world_preset and worldgen/flat_level_generator_preset were added to data-drive presents (like “Amplified” or “Single Biome”)
- Two tags for world presets added (normal and alternative) to control values show on “World Type” button in “Create World” screen
- One tag added for flat world presents (visible) to control order of elements displayed in “Configure Flat World” screen
- World presets can also be used as a value of level-type in server.properties

## PREDICATES

- The feature field in location predicates is now called structure

# FIXED BUGS IN 22W11A

- [MC-67308](https://bugs.mojang.com/browse/MC-67308) - Door top and side textures flip illogically when opened and closed
- [MC-95103](https://bugs.mojang.com/browse/MC-95103) - Shield item rendering not adjusted to the center
- [MC-99930](https://bugs.mojang.com/browse/MC-99930) - Brewing stand extends arms and inverts its texture when bottles are placed
- [MC-106510](https://bugs.mojang.com/browse/MC-106510) - Long structure names (over 64 characters) do not fit in the Structure Block GUI
- [MC-109055](https://bugs.mojang.com/browse/MC-109055) - Large Cocoa Pod texture is inconsistent
- [MC-127885](https://bugs.mojang.com/browse/MC-127885) - The textures on the spider models aren’t mirrored properly
- [MC-158668](https://bugs.mojang.com/browse/MC-158668) - Vex continue to attack their target after it has been killed
- [MC-165036](https://bugs.mojang.com/browse/MC-165036) - Boss bars with the notched style are rendered incorrectly if more than one boss bar is active
- [MC-165990](https://bugs.mojang.com/browse/MC-165990) - Crafting bamboo into scaffolding gives you 8 times the furnace fuel for free
- [MC-183309](https://bugs.mojang.com/browse/MC-183309) - Player reach is different for client and server when crawling
- [MC-195717](https://bugs.mojang.com/browse/MC-195717) - Custom Dimensions JSON Requires Seed
- [MC-201150](https://bugs.mojang.com/browse/MC-201150) - Unused pixels in end rod texture
- [MC-202580](https://bugs.mojang.com/browse/MC-202580) - Transition between end stone texture and end portal frame is not as seamless as it previously was
- [MC-219843](https://bugs.mojang.com/browse/MC-219843) - Mycelium’s side texture differs from other dirt-based blocks
- [MC-219852](https://bugs.mojang.com/browse/MC-219852) - Corner in smoker_bottom texture is still rotated incorrectly
- [MC-219875](https://bugs.mojang.com/browse/MC-219875) - You can cause a desync when repeatably picking up liquids
- [MC-221639](https://bugs.mojang.com/browse/MC-221639) - Light Block isn’t Dragon or Wither Immune
- [MC-225837](https://bugs.mojang.com/browse/MC-225837) - The word “Recipe” is spelled as “Reciple” within the “narration.recipe” string
- [MC-230603](https://bugs.mojang.com/browse/MC-230603) - Wolf ears and legs aren’t mirrored
- [MC-235964](https://bugs.mojang.com/browse/MC-235964) - Crash on “Saving world” when F3+L profiling is active - java.lang.NullPointerException: Cannot read field “f” because “this.D” is null
- [MC-238070](https://bugs.mojang.com/browse/MC-238070) - Brewing stand arms do not connect with their bases
- [MC-238807](https://bugs.mojang.com/browse/MC-238807) - “Out of memory!” message is untranslatable
- [MC-248936](https://bugs.mojang.com/browse/MC-248936) - Minecraft icon on MacOS is not showing correct icon

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://launcher.mojang.com/v1/objects/a13b9678c60b0a84767e6cef0086c65cadac036e/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

- Head over to our [feedback website](https://aka.ms/JavaSnapshotFeedback?ref=minecraftnet) or come chat with us about it on the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
