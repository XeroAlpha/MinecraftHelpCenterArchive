---
title: Minecraft Java Edition - 26.3 Snapshot 6
date: 2026-07-28T14:02:02Z
updated: 2026-07-28T14:02:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/47701137203213-Minecraft-Java-Edition-26-3-Snapshot-6
hash:
  h_01KYMGFHZ3B9SNTXWZNHYY4F8R: minecraft-263-snapshot-6
  h_01KYMGFHZ80643AWRZC7BK495M: changes
  h_01KYMGFHZ8HHCK8RDM9D647DQN: ui
  h_01KYMGFHZ9979R82Q4471CGB3Y: world-options
  h_01KYMGFHZBDGR2HY6B65ED50T5: technical-changes
  h_01KYMGFHZCXR50PVD5RJ4HE6E4: data-pack-version-1130
  h_01KYMGFHZCSCM85K69HYNNQ3MJ: commands
  h_01KYMGFHZCQRCMTYZMRE096YVT: changes-topublish
  h_01KYMGFHZEWG3VVQ5TFB68F4JC: data-components
  h_01KYMGFHZE3R4KAGTYX48BQC4G: changedminecraftcooking_fuel
  h_01KYMGFHZE9YKRVV6DF6V4QY5N: changedminecraftbrewing_fuel
  h_01KYMGFHZF66R4GTJ3WEP39FMH: changedminecraftcompostable
  h_01KYMGFHZF29PD380C5815F9QS: entity-data
  h_01KYMGFHZGCMVBR4C77MV3KWQJ: loot-table-types
  h_01KYMGFHZGW8YJ0P5R13HH8MDR: changedminecraftblock_interact
  h_01KYMGFHZG4K3NM8NK17MFD9BD: world-generation
  h_01KYMGFHZHNAJKKWN0N2HCD3V9: noises
  h_01KYMGFHZVW49NG5YCBPHHZ8SN: density-functions
  h_01KYMGFHZWQ0BE0ZHJPG8KTW51: addedpow
  h_01KYMGFHZWVKTC27673JH9DTF1: addedsqrt
  h_01KYMGFHZXAR2RBK1Z4QZZ17FV: addedlog
  h_01KYMGFHZYDEW7HAKTQBM89VN9: addedsign
  h_01KYMGFHZZ89PB4VCK6S49QEXJ: addeddistance_to_point
  h_01KYMGFJ03X693WWAQVB6K27VC: updatedgradientrenamed-fromy_clamped_gradient
  h_01KYMGFJ07P132X9FEP280DTD1: addedslice
  h_01KYMGFJ08A4DXVA0TZ886QBZC: changedend_outer_islands
  h_01KYMGFJ09PAXVHY36T9XS1C2K: structure-pool-elements
  h_01KYMGFJ09SQ5WRZ5GHWCFWJ38: changedminecraftfeature_pool_element
  h_01KYMGFJ091ARX8NN8SZAGJP8M: resource-pack-version-940
  h_01KYMGFJ09WQ5NZ852K861MMKE: shaders--post-process-effects
  h_01KYMGFJ0A2QEYEXPM9VAN86AT: equipment-assets
  h_01KYMGFJ0FCB1AKF4H50PTHMB2: fixed-bugs-in-263-snapshot-6
  h_01KYMGFJ0SG8PG35A45W1BAPV7: get-the-snapshot
---

# Minecraft 26.3 Snapshot 6

A Minecraft Java Snapshot

 

 

 

It's yet another Tuesday, and it seems that we've officially run out of quippy snapshot intros until the next delivery. Anyway, here's Snapshot 6, bringing some tweaks and improvements to the Abandoned Camp, a new World Options UI, as well as changing up how terrain is rendered.

Happy camping!

## Changes

- Added a new Abandoned Camp campsite variant for each biome
- Minor tweaks to Abandoned Camp structures

### UI

- Fixed an issue where Realm owners could not select automatic region preference as their Realm region

#### World Options

- The World Options button has been moved to where the Open to Lan button used to be, accessible from the pause menu
  - The World Options screen is divided into two sections: "General" and "Multiplayer"
    - The "General" section contains the same options as the previous World Options screen
    - The "Multiplayer" section contains three options:
      - LAN: changes the multiplayer scope of the world
      - Command Access: Controls whether players that join your world can use commands or not
      - Port: the port number to use when opening the world to LAN
- The Online button used to access the Online Options screen will now always be shown in the Options menu

## Technical Changes

- The Data Pack version is now 113.0
- The Resource Pack version is now 94.0
- Terrain blocks are now rendered with MultiDrawIndirect on supported devices

## Data Pack Version 113.0

### Commands

#### Changes to publish

- The gamemode argument has been removed
  - Instead, the default game mode of the world should be set using the defaultgamemode command or the Game Mode button in the World Options screen, while player-specific game modes should be set using the gamemode command

### Data Components

#### Changed minecraft:cooking_fuel

- burn_time and speed_multiplier can now additionally be defined by an inline number

#### Changed minecraft:brewing_fuel

- uses and speed_multiplier can now additionally be defined by an inline number

#### Changed minecraft:compostable

- layers can now additionally be defined by an inline number

### Entity Data

- Added invulnerable_time tag which makes a mob temporarily invulnerable for a specific number of ticks

### Loot Table Types

#### Changed minecraft:block_interact

- origin is now available in context, as the center of the block being interacted with

### World Generation

#### Noises

The format of Noises (defined in the worldgen/noise registry, or inline in noise-based Block State Providers) has been updated.

Noises define a fractal Brownian motion (fBm) configuration with the following properties:

- Produces output values (approximately) fitting a normal distribution
- Unless otherwise specified, fits the output amplitude to \[-1; 1\]
  - Due to the normal distribution, in practice this means that 99.7% of all samples will fit in that range - but values may still be encountered outside of this range
- Parameterized by persistence=0.5, lacunarity=2.0
  - i.e. between each octave, the amplitude is halved and the frequency doubled
- Has stable seeding such that an octave can be boosted, muted, or added without affecting the rest of the octaves
- Renamed firstOctave to base_octave
- Added base_amplitude - non-negative float, a scale factor to apply to the noise output
  - If not specified, defaults to 1.0
- Added octave_count - integer between 1 and 32, the number of octaves to sample
- Added normalize - boolean, or "legacy", controls how the output amplitude should be normalized
  - If true, base_amplitude is the expected amplitude of the output (i.e. 99.7% of all samples in \[-base_amplitude; base_amplitude\])
  - If false, base_amplitude is the amplitude of the first octave
  - If "legacy", inherits the same normalization behavior as expressed by the previous format
    - This would generally fit to a range smaller than expected
  - If not specified, defaults to true
  - Note: normalization is *not* affected by the amplitude_modifiers field - as such, modifying the amplitude of a single octave will not affect the amplitude of others
- Renamed amplitudes to amplitude_modifiers - list of floats, a scaling factor to apply to each octave
  - The number of elements in this list must match octave_count
  - As described above, this scaling factor bypasses normalization and will affect the output amplitude
  - This field is no longer required - if not specified, defaults to all 1.0

#### Density Functions

##### Added pow

Raises the given base value to an exponent.

Format: object with fields:

- base - Density Function, the base value
- exponent - Density Function, the exponent

##### Added sqrt

Computes the square root of the given input.

Format: object with fields:

- input - Density Function, the value for which to compute the square root

##### Added log

Computes the natural logarithm of the given input.

Format: object with fields:

- input - Density Function, the value for which to compute the natural logarithm

##### Added sign

Computes the sign of the input:

- If the input is positive, returns 1
- If the input is 0, returns 0
- If input is negative, returns -1

Format: object with fields:

- input - Density Function, the value of which to compute the sign

##### Added distance_to_point

Computes the distance to a fixed point using the specified distance function.

Format: object with fields:

- point - array of 3 integers in form \[x, y, z\], the point to compute distance to
- metric - one of:
  - euclidean - i.e. sqrt(dx^2 + dy^2 + dz^2)
  - euclidean_squared - i.e. dx^2 + dy^2 + dz^2
  - manhattan - i.e. abs(dx) + abs(dy) + abs(dz)
  - chebyshev - i.e. max(abs(dx), abs(dy), abs(dz))

##### Updated gradient (renamed from y_clamped_gradient)

Format: object with fields:

- axis - x, y, or z, the axis over which to define this gradient
- tiling - one of:
  - clamp_to_edge - outside the gradient boundaries, the value at the nearest boundary will be used
  - repeat - the gradient will be repeated outside its boundaries
  - mirrored_repeat - the gradient will be repeated such that odd repetitions are mirrored, ensuring continuity between repetitions
- from_coordinate - int, the coordinate at which the gradient starts
- to_coordinate - int, the coordinate at which the gradient ends
  - Must not be equal to from_coordinate
- from_value - float, the value at which the gradient starts
- to_value - float, the value at which the gradient ends

##### Added slice

Removes a dimension from the input domain by taking a "slice" along an axis with a specific coordinate. For example, with axis=y and coordinate=0, a slice will be taken along the XZ plane, with all values sampled at y=0.

Format: object with fields:

- axis - x, y, or z, the axis to remove
- coordinate - int, the fixed coordinate to be passed to the input function
- input - Density Function, the input function

##### Changed end_outer_islands

Renamed from end_islands. No longer computes the density of the main island.

#### Structure Pool Elements

##### Changed minecraft:feature_pool_element

- Can now connect to Jigsaw blocks with any target name, instead of just minecraft:bottom

## Resource Pack Version 94.0

### Shaders & Post-process Effects

- terrain.vsh and terrain.fsh shaders are refactored to support multi-draw
- Some of the members in Globals and DynamicTransforms are shuffled to use less memory for those uniform blocks
- Introduced new define: RENDERPEARL_EXPLICIT_DEPTH_INVARIANCE - If present, indicates that an OIT shader should explicitly output a depth value because a device it is running on can produce a slightly different implicit value

### Equipment Assets

The trim_palette_replacements field has been replaced with trim_overrides. This can be used to swap out the texture or palette used with specific trim materials or patterns for a given equipment asset, not just swap specific palettes.

- Format: list of override entries with fields:
  - when - object with fields, the material and/or pattern to match
    - material - optional Trim Material ID, the material to match (if specified)
    - pattern - optional Trim Pattern ID, the pattern to match (if specified)
      - Note: this is *not* the palette ID, as trim_palette_replacements used to be!
    - At least one of material or pattern must be specified
    - If both are specified, both must match for the entry to be used
  - texture - optional trim pattern asset ID, a replacement texture to use if this entry matches
    - Textures are specified in the same format as asset_id
    - If not specified, the default texture for the pattern will be used
  - palette - optional palette ID, a replacement palette to use if this entry matches
    - If not specified, no palette remapping will be applied to the texture
  - The first matching entry will always be selected
  - At least one of texture or palette must be defined

## Fixed bugs in 26.3 Snapshot 6

- [MC-299582](https://bugs.mojang.com/browse/MC-299582) - Special crafting recipes behave differently than other recipe types with /recipe and the limited_crafting game rule
- [MC-304195](https://bugs.mojang.com/browse/MC-304195) - The arm overlay textures of parched have unused pixels not used by the model
- [MC-307206](https://bugs.mojang.com/browse/MC-307206) - Std140Builder incorrectly pads vec3s and ivec3s
- [MC-307996](https://bugs.mojang.com/browse/MC-307996) - The game cannot use hardware acceleration on devices lacking the fillModeNonSolid Vulkan feature
- [MC-308694](https://bugs.mojang.com/browse/MC-308694) - Using /defaultgamemode changes everyone's game mode to the one set in "Settings for Other Players" in LAN worlds
- [MC-308699](https://bugs.mojang.com/browse/MC-308699) - Switching the host's game mode causes new LAN players to ignore the forced game mode
- [MC-308749](https://bugs.mojang.com/browse/MC-308749) - Exiting and rejoining the same LAN session resets your game mode
- [MC-309720](https://bugs.mojang.com/browse/MC-309720) - The texture of straw beds has missing and extra pixels
- [MC-309958](https://bugs.mojang.com/browse/MC-309958) - Off-by-one error in SynchedEntityData.Builder#define
- [MC-310088](https://bugs.mojang.com/browse/MC-310088) - The taskbar icon displays the Java logo instead of the game's logo
- [MC-310099](https://bugs.mojang.com/browse/MC-310099) - The game freezes if the head part of straw beds has a different facing than the foot part
- [MC-310101](https://bugs.mojang.com/browse/MC-310101) - Command+W now closes the game on macOS
- [MC-310122](https://bugs.mojang.com/browse/MC-310122) - Traversing the pie chart with keys does not work correctly
- [MC-310132](https://bugs.mojang.com/browse/MC-310132) - Armor trim textures can no longer be overridden
- [MC-310134](https://bugs.mojang.com/browse/MC-310134) - The "Exclusive Fullscreen" button and "Exclusive Fullscreen Mode" slider are still present and enabled on macOS
- [MC-310136](https://bugs.mojang.com/browse/MC-310136) - Player skin rendering is messed up when the "Improved Transparency" setting is enabled
- [MC-310143](https://bugs.mojang.com/browse/MC-310143) - IME candidates are invisible in fullscreen mode even when the "Exclusive Fullscreen" option is disabled
- [MC-310155](https://bugs.mojang.com/browse/MC-310155) - After entering macOS fullscreen by clicking the "Fullscreen" button in the Video Settings menu, you cannot reveal the menu bar or dock by navigating to the edge of the screen
- [MC-310168](https://bugs.mojang.com/browse/MC-310168) - When editing a glowing sign, the glow on the placed sign temporarily disappears
- [MC-310195](https://bugs.mojang.com/browse/MC-310195) - Control+Left click no longer counts as a right click on macOS
- [MC-310213](https://bugs.mojang.com/browse/MC-310213) - On-screen keyboard handling is inconsistent
- [MC-310228](https://bugs.mojang.com/browse/MC-310228) - The game freezes when a player destroys a bed at the exact same moment a villager sleeps in it
- [MC-310235](https://bugs.mojang.com/browse/MC-310235) - The game crashes when a piston pushes a water cauldron with the "Improved Transparency" option enabled
- [MC-310241](https://bugs.mojang.com/browse/MC-310241) - Brewing recipes show up in the command suggestions for /recipe, but cannot be granted or revoked
- [MC-310281](https://bugs.mojang.com/browse/MC-310281) - Using keyboard shortcuts to navigate tabs within UIs doesn't work correctly
- [MC-310311](https://bugs.mojang.com/browse/MC-310311) - Item modifiers that reference themselves crash the game when invoked
- [MC-310313](https://bugs.mojang.com/browse/MC-310313) - Predicates that reference themselves crash the game when invoked
- [MC-310314](https://bugs.mojang.com/browse/MC-310314) - Number providers that reference themselves crash the game when invoked
- [MC-310315](https://bugs.mojang.com/browse/MC-310315) - Slot sources that reference themselves crash the game when invoked
- [MC-310319](https://bugs.mojang.com/browse/MC-310319) - The game crashes when the spider post effect is applied
- [MC-310321](https://bugs.mojang.com/browse/MC-310321) - The creeper post effect is ineffective
- [MC-310357](https://bugs.mojang.com/browse/MC-310357) - The OpenGL rendering backend passes 3 to GL_UNPACK_ALIGNMENT, which is invalid
- [MC-310359](https://bugs.mojang.com/browse/MC-310359) - mipLevel is not respected when copyTextureToTexture is used
- [MC-310360](https://bugs.mojang.com/browse/MC-310360) - clearColorTexture and clearDepthTexture clear all mipmaps with the Vulkan rendering backend, unlike with the OpenGL one
- [MC-310382](https://bugs.mojang.com/browse/MC-310382) - The game crashes when applying a resource pack with a shader that uses #include with uppercase characters in the path
- [MC-310383](https://bugs.mojang.com/browse/MC-310383) - The per-target blend state diverges between the OpenGL and Vulkan rendering backends
- [MC-310388](https://bugs.mojang.com/browse/MC-310388) - The caves and floating_islands noise settings no longer generate as intended
- [MC-310455](https://bugs.mojang.com/browse/MC-310455) - copyTextureToBuffer produces padded rows with the OpenGL rendering backend but tightly-packed rows with the Vulkan one

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/14406bf8b96c4126ed01371a62e50703a7481247/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
