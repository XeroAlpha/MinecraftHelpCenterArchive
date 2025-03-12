---
title: "Minecraft: Java Edition - Snapshot 23w17a"
date: 2023-04-26T16:00:32Z
updated: 2025-03-12T11:12:47Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/15245037698701-Minecraft-Java-Edition-Snapshot-23w17a
hash:
  new-unihex-glyph-provider: newunihexglyph-provider
  new-reference-glyph-provider: newreferenceglyph-provider
  removed-legacy_unicode-glyph-provider: removedlegacy_unicodeglyph-provider
---

Hello! Here is a new snapshot with tweaks to the new features, new advancements, new music and some long-awaited technical changes. For some time we've been working on a new faster light engine, and we are finally ready to share the result. Special thank you to the community for not only pointing out the issues with the game's light engine, but also to community members that have developed mods and plugins which have highlighted these performance challenges and served as an inspiration for our new implementation.

Please break it in all possible ways and report bugs!

# NEW FEATURES

- Added new advancements for Trails & Tales
- Added new Trails & Tales ambient music
- Added a new music disc obtainable through archaeology

## NEW ADVANCEMENTS

### HUSBANDRY ADVANCEMENTS

- Smells interesting : Obtain a Sniffer Egg
- Little sniffs : Feed a Snifflet (requires Smells interesting)
- Planting the past : Plant any Sniffer seed (requires Little sniffs)

### ADVENTURE ADVANCEMENTS

- Respecting the remnants : Brush a Suspicious block to obtain a Pottery Sherd
- Careful restoration : Make a Decorated Pot out of 4 Pottery Sherds (requires Respecting the remnants)
- Crafting a new look : Craft a trimmed armor at a Smithing Table
- Smithing with style : Apply these smithing templates at least once: Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder (requires Crafting a new look)

## NEW AMBIENT MUSIC

- Added the following new music tracks by Aaron Cherof to Cherry Groves, Desert, Jungle, Badlands, and Flower Forest biomes
  - A Familiar Room
  - Bromeliad
  - Crescent Dunes
  - Echo in the Wind

## NEW MUSIC DISC

- Added a new music disc which can be found by brushing suspicious blocks in Trail Ruins
  - When put in a Jukebox, Relic by Aaron Cherof is played

# CHANGES

- Both types of Sculk Sensors now stay in their Cooldown phase for 10 ticks, with other phase timings being adjusted to compensate
- Crafted Decorated Pots with at least one pattern now have a hover tooltip displaying the Sherd & Brick ingredients
- Updated the credits
  - Added the ability to scroll upwards by pressing the up arrow key

## SCULK SENSOR PHASES

- Sculk Sensors and Calibrated Sculk Sensors have three phases: Inactive, Active and Cooldown
- The default phase is Inactive
  - This phase lasts indefinitely until the block receives a vibration
  - During this phase, the block is able to listen to nearby vibrations until one has been scheduled
- When a scheduled vibration is received, the block switches to the Active phase
  - This phase lasts 30 game ticks for Sculk Sensors, and 10 game ticks for Calibrated Sculk Sensors
  - During this phase, the block stops listening to nearby vibrations, wiggles its tendrils and emits a redstone signal and light
- After the Active phase has finished, the block switches to a Cooldown phase
  - This phase lasts for 10 game ticks
  - During this phase, the block keeps wiggling its tendrils, but no longer emits a redstone signal nor light
  - Finally, once this phase is finished, the block will switch back to the Inactive phase
- Previously, some of these phases had different timing values:
  - Active: 40 game ticks for Sculk Sensors and 20 game ticks for Calibrated Sculk Sensors
  - Cooldown: 1 game tick for both types of Sculk Sensors
- These phase timings were tweaked so that it is less common for activated contraptions to recursively activate the Sculk Sensor that powered them

# TECHNICAL CHANGES

- The resource pack version is now 15, accounting for the font and credits update
  - legacy_unicode glyph provider has been removed
  - Bitmaps used by uniform font have been removed
  - uniform font has been updated to use Unifont 15.0.01
    - That changes shape of multiple characters, while also adding support for new ones
    - Combining characters no longer include circle overlayed over them (so M◌̆ now renders as M ̆)
  - Added second level of organization of entries in credits.json on top of titles, called disciplines
- Font textures are included in debug texture dump (F3 + S)
- Added new font glyph providers: unihex and reference, removed legacy_unicode
- Improved performance of the light engine

## FONTS

### NEW UNIHEX GLYPH PROVIDER

- New glyph provider for reading Unifont HEX files
  - HEX format describes bitmap font glyphs
    - height of every glyph is 16 pixels
    - width of glyph can be 8, 16, 24 or 32 pixels
  - every line is made of two hexadecimal numbers separated by :
  - first value describes codepoint - it must have 4, 5 or 6 hex digits
  - second value describes glyph as a stream of bits, line by line
- When rendering, empty columns on left and right side of glyph are removed
  - Custom glyph widths can be set with size_overrides
- Provider requires two fields:
  - hex_file - path to ZIP archive containing one or more \*.hex files (files in archive with different extensions are ignored)
  - size_overrides - list of codepoint ranges that should have width different that auto-detected (based on empty space in glyph). Fields:
    - from, to - start and end of codepoint range (inclusive)
    - left, right - integers describing position of left-most and right-most columns of glyph in range
      - any bits in columns outside this range will be discarded

### NEW REFERENCE GLYPH PROVIDER

- New glyph provider can be used to include providers from other fonts
  - Providers are guaranteed to be loaded only once, no matter how many times they are included
- Provider has one field id, that describes other font to be included in currently loaded one
  - Inclusion is performed after all fonts are loaded, so it will include all providers for a given font defined in all datapacks

### REMOVED LEGACY_UNICODE GLYPH PROVIDER

- legacy_unicode glyph provider has been removed
- This functionality has been replaced by unihex provider

# FIXED BUGS IN SNAPSHOT 23W17A

- [MC-108045](https://bugs.mojang.com/browse/MC-108045) - Minecraft not using latest unifont unicode chart; characters are missing
- [MC-127394](https://bugs.mojang.com/browse/MC-127394) - Minecraft does not render characters in Unicode mb4 range
- [MC-172980](https://bugs.mojang.com/browse/MC-172980) - Block light updates don't cross chunk borders properly when updated
- [MC-197772](https://bugs.mojang.com/browse/MC-197772) - Missing textures in minecraft:uniform font
- [MC-225742](https://bugs.mojang.com/browse/MC-225742) - When light emitting blocks generate as ores, they do not emit light
- [MC-241725](https://bugs.mojang.com/browse/MC-241725) - In the credits, an opening parenthesis is missing for Riley Manns
- [MC-241730](https://bugs.mojang.com/browse/MC-241730) - In the credits, a closing parenthesis is missing for Konrad Jówko
- [MC-241732](https://bugs.mojang.com/browse/MC-241732) - In the credits, "Lionbridge" is misspelt in one place
- [MC-241733](https://bugs.mojang.com/browse/MC-241733) - In the credits, "Insight" is misspelt in one place
- [MC-241741](https://bugs.mojang.com/browse/MC-241741) - Certain names are listed twice in the credits
- [MC-241803](https://bugs.mojang.com/browse/MC-241803) - credits.json: Line 2632 has typo in (C instead of O)
- [MC-245819](https://bugs.mojang.com/browse/MC-245819) - Lighting can still occasionally lag behind world generation
- [MC-249341](https://bugs.mojang.com/browse/MC-249341) - Some Mojang employees are not mentioned in the credits
- [MC-249508](https://bugs.mojang.com/browse/MC-249508) - Light emitted from cave vines and glow lichens upon world generation still sometimes doesn't propagate across chunk borders
- [MC-254506](https://bugs.mojang.com/browse/MC-254506) - Font file of some Korean completed font area is wrong
- [MC-258926](https://bugs.mojang.com/browse/MC-258926) - Space is no longer treated as padding in fonts
- [MC-261413](https://bugs.mojang.com/browse/MC-261413) - Particles spawned by brushes held by left-handed players move in the wrong direction
- [MC-261626](https://bugs.mojang.com/browse/MC-261626) - Reversed Comma doesn't render properly when using the Unicode font
- [MC-261900](https://bugs.mojang.com/browse/MC-261900) - Sniffers cannot properly pathfind into water while burning
- [MC-261938](https://bugs.mojang.com/browse/MC-261938) - Sniffer animation is not smooth on slime blocks
- [MC-261997](https://bugs.mojang.com/browse/MC-261997) - Game crashes when generating new chunk / java.lang.IllegalStateException: Asking for biomes before we have biomes
- [MC-262012](https://bugs.mojang.com/browse/MC-262012) - Telemetry Tooltip out of screen
- [MC-262022](https://bugs.mojang.com/browse/MC-262022) - Tooltips get cut off at the bottom of the screen
- [MC-262024](https://bugs.mojang.com/browse/MC-262024) - Sniffer eggs are sometimes spawned in the ground when sniffers breed
- [MC-262030](https://bugs.mojang.com/browse/MC-262030) - Sniffers stand a bit too close to players that are tempting them

# GET THE SNAPSHOT

Snapshot are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/96e1b9db0f3d90309db34e8ce4fd39b52f6ddaa0/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
