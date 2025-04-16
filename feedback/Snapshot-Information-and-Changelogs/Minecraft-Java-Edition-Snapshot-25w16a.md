---
title: Minecraft Java Edition - Snapshot 25w16a
date: 2025-04-16T09:32:29Z
updated: 2025-04-16T09:32:32Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/35891577995277-Minecraft-Java-Edition-Snapshot-25w16a
hash:
  h_01JRYYSPYCD7XZSE14A03XF2D2: changes
  h_01JRYYSPYC0JVHX3A7S428VQ0V: leash-changes
  h_01JRYYSPYCDS9DZT5FYN7MPZ8C: technical-changes
  h_01JRYYSPYC9YEBWKXQP0EB50XG: data-pack-version-73
  h_01JRYYSPYCSVM1GCSZ1F128ZZM: data-components
  h_01JRYYSPYC4SCNHMS5GTF1Y8EH: paintingvariantitem-component
  h_01JRYYSPYCEEQ75YTW36HGTG7N: resource-pack-version-57
  h_01JRYYSPYCJTP2J5ZSS3P86JJ2: block-models
  h_01JRYYSPYC9473KB7RF18QDZBJ: shaders--post-process-effects
  h_01JRYYSPYCNXMDTQV7Z1CE756X: post-process-effect-definitions
  h_01JRYYSPYCSZ2C656RW9TZYGQT: post-process-effect-shaders
  h_01JRYYSPYCBDHYK4ZYZ7AKN3M6: postbitsfsh
  h_01JRYYSPYCBAA8PM0HF5PX6JEH: postblitfsh
  h_01JRYYSPYCXKG53WAW6JQX6VJ2: postblurvshandpostbox_blurfsh
  h_01JRYYSPYCAACSS69H0S1AQ4CW: postcolor_convolvefsh
  h_01JRYYSPYCQ2T9V0KGETJ0TH43: postinvertfsh
  h_01JRYYSPYCNHXFBN3TF8BC51B7: postrotscalevsh
  h_01JRYYSPYCH9JSBQSYH5M7FKGD: postspiderclipfsh
  h_01JRYYSPYC6QDCFT17QG5TPKP6: globalsuniform-block
  h_01JRYYSPYC5M4603AHSZV2PHJM: foguniform-block
  h_01JRYYSPYD5K5E8HY7RH8PWGZQ: projectionuniform-block
  h_01JRYYSPYDN3J9Z7HEGNPZBWZA: dynamictransformsuniform-block
  h_01JRYYSPYD5R0ETBGPWDHGB8DF: lightinguniform-block
  h_01JRYYSPYDRP1RPHFBPERK3BW4: cloudinfouniform-block
  h_01JRYYSPYD69C8JP6A0T48YR5J: lightmapinfouniform-block
  h_01JRYZ13SC2H1RVVEX42GBJBV2: fixed-bugs-in-25w16a
  h_01JRYYSPYDP9YX9XM8TV4842EF: get-the-snapshot
---

In this week’s snapshot leads are getting new mechanics making it possible to leash mobs together or leash them to entities like boats! Now you can travel the desert with your own camel caravan or airlift your treasures in a boat with chest attached to your happy ghast. Moving villagers have never been easier! As you are soaring through the skies you will see that the clouds render infinitely.

## Changes

- Changed leash mechanics
- Changed Elytra so that while gliding, using a firework will only be used as a boost even if placed on a block
- Clouds now exist all the way to the horizon
- Reverted the fix for [MC-101556](https://bugs.mojang.com/browse/MC-101556): Nether Portal teleport range is too large (equivalent to a full block)

> **Developer's Note**: *After consideration, we have decided to revert this change as it came in quite late in the snapshot cycle and unintentionally broke some functionality that our community were relying on. We'd like to revisit this at some point when we have time to deal with the issues that showed up due to this change*

### Leash changes

- Leashes are now rendered twice as thick, to match bedrock
- Leashes can now be used to leash two mobs together
  - Sneak-interact on any mob while holding a bunch of leashed mobs will leash these mobs to the interacted entity
  - You now cannot leash anything to itself
- If the re-leashing an entity would result in immediate leash snapping due to distance, the re-leashing would not happen
- Leashes can be snipped from an entity when interacting them with Shears
  - This applies to its own leash connection as well as all entities attached to it
  - Dispensers can now snip leashes from entities in front of them when they are equipped with Shears
- Improved leash mechanics, with reworked leash physics, allowing for more stable leash connection, especially when leashed entities are not on ground
  - When dragged on the leash, leashed objects will now orient themselves towards the leasher
  - Using a firework rocket when flying with leashed entities will now break the leash connections
- When leashing an already leashed mob, the current leash will now snap and a player will re-leash the object to yourself
  - You cannot steal leashed entities from other players
- Interactions with a Leash Knot and Fence Blocks have changed:
  - When interacting with a Leash Knot or a Fence Block, if there are any player-leashed entities in range of the leash knot, they will be re-leashed to the Leash Knot or a Fence Block
  - In case of attaching of mobs fails due to distance or there is nothing to attach, the player will now transfer all fence leashed entities to itself
  - If there is nothing left attached to the Leash Knot, it disappears
  - Sneak-interact can only result in attaching of the player mobs to the fence
  - Interacting with Shears or punching the Leash Knot will result in all current connections broken
- Boats and large mobs that can be leashed, but cannot fit in the boat (Horses, Donkey, Mule, Camel and Sniffer) can now be leashed in a special 4-leash configuration to the Happy Ghast
  - Happy Ghast will also present a custom layer when its leashing something using a quad connection
  - Leashed in quad connection are now rendered without slack
- Leash snapping distance has been changed from 10 to 12 blocks
  - The distance between centers of entities bounding boxes, rather than their feet is used to determine the distance between two leashed entities
  - Happy Ghast leash is now longer - with free roaming distance of 10 blocks and leash snapping at 16 blocks

## Technical Changes

- The Data Pack version is now 73
- The Resource Pack version is now 57

## Data Pack Version 73

### Data Components

#### painting/variant Item Component

- No longer accepts inline variants

## Resource Pack Version 57

- All core shader uniforms are now uniform blocks
- The cloud texture (clouds.png) can no longer be colored
- Block Model rotations are no longer limited to multiplies of 22.5

### Block Models

- elements\[\].rotation.angle value in block models is no longer limited to multiplies of 22.5 degrees and can now be any angle from -45 to +45

### Shaders & Post-process Effects

> **Developer's Note**: *Although it is possible in Resource Packs, overriding Core Shaders is considered as unsupported and not an intended Resource Pack feature. These shaders exist as part of the internal implementation of the game, and as such, may change at any time as the game's internals evolve. We understand that overriding Core Shaders is used for very cool Resource Pack features, many of which lack supported alternatives. We would like to provide better, supported alternatives in the future.*

- All built-in uniforms are now uniform blocks instead of opaque loose uniforms
- Custom uniforms provided to post-process shaders are now uniform blocks
- Uniform definitions inside json files are now per-block

#### Post-process Effect Definitions

- Entries in the targets map have been expanded to support new properties
  - New optional boolean field: persistent (default: false)
    - If true, this render target will be persistent across frames
    - The contents of the target will be cleared when the screen is resized
  - New optional field: clear_color (default: \[0, 0, 0, 0\])
    - Format: integer ARGB value, or float array in order \[R, G, B, A\]
    - When this target is created or cleared, it will be filled with this color
- The uniforms values is now a list-per-block, instead of a global list
  - e.g. uniforms: { "UniformBlockName": \[ { "type": "vec2", "value": \[...\] } \] }
    - The order of uniforms in a block **must** match the order in the shader
- name as part of a uniform definition is no longer used
  - We encourage setting it to help keep the json file organized/readable, but the game won't use it
- value as part of a uniform definition replaces the old values, and the type depends on the type field
  - This field is required
  - "type": "int" needs "value": 123 (a single int)
  - "type": "float" needs "value": 123.4 (a single float)
  - "type": "vec2" needs "value": \[1.2, 3.4\] (two floats)
  - "type": "vec3" needs "value": \[1.2, 3.4, 5.6\] (three floats)
  - "type": "ivec3" needs "value": \[1, 2, 3\] (three ints)
  - "type": "vec4" needs "value": \[1.2, 3.4, 5.6, 7.8\] (four floats)
  - "type": "matrix4x4" needs "value": \[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0\] (four rows of four columns of floats)
- We do not validate that the uniform block is valid for a given shader, giving incorrect information will cause undefined and funky behavior

#### Post-process Effect Shaders

- Instead of every uniform being an individual opaque type, they are now grouped in uniform blocks
  - They will be set according to the pass definition in the json file, and may be shared across both vertex and fragment shaders
- The list of sizes (all vec2 \*Size uniforms) are now replaced with a single SamplerInfo uniform block
  - This contains, *in order*, the size of the output texture followed by the size every input texture
  - The order of textures in the definition file will dictate the order of samplers in this uniform
  - For most post chains this is just OutSize and InSize as before
  - All sizes are vec2

##### post/bits.fsh

- Expects a BitsConfig of float Resolution and float MosaicSize

##### post/blit.fsh

- Expects a BlitConfig of vec4 ColorModulate

##### post/blur.vsh and post/box_blur.fsh

- Expects a BlurConfig of vec2 BlurDir and float Radius

##### post/color_convolve.fsh

- Expects a ColorConfig of vec3 RedMatrix, vec3 GreenMatrix and vec3 BlueMatrix

##### post/invert.fsh

- Expects a InvertConfig of float InverseAmount

##### post/rotscale.vsh

- Expects a RotScaleConfig of vec2 InScale, vec2 InOffset and float InRotation

##### post/spiderclip.fsh

- Expects a SpiderConfig of vec4 Scissor and vec4 Vignette

#### Globals Uniform Block

- Available through \#moj_import \<minecraft:globals.glsl\> for convenience
- Most shaders are able to receive this uniform block, even if they don't normally use it
- Contains ScreenSize, GlintAlpha, GameTime and MenuBlurRadius (new)
  - MenuBlurRadius is the blur radius of the background when a menu is open

#### Fog Uniform Block

- Available through \#moj_import \<minecraft:fog.glsl\> for convenience
- Most shaders are able to receive this uniform block, even if they don't normally use it
- Contains FogColor, FogShape, FogStart, FogEnd, FogSkyEnd (new) and FogCloudsEnd (new)
  - FogSkyEnd is new and represents where the fog should end when drawing for the sky
  - FogCloudsEnd is new and represents where the fog should end when drawing the clouds
  - FogEnd is the "normal" fog cutoff as before
- FOG_IS_SKY is now available to the position.vsh/position.fsh shaders when they are rendering for the sky

#### Projection Uniform Block

- Available through \#moj_import \<minecraft:projection.glsl\> for convenience
- Most shaders are able to receive this uniform block, even if they don't normally use it
- Contains ProjMat with no changes

#### DynamicTransforms Uniform Block

- Available through \#moj_import \<minecraft:dynamictransforms.glsl\> for convenience
- Is no longer available to shaders that do not normally use it
- Contains ModelViewMat, ColorModulator, ModelOffset, TextureMat, LineWidth
  - These are very likely to change in the near future
  - The values of some of these are often hard coded and may not make sense for a given shader, ie LineWidth in any non-line based pipeline

#### Lighting Uniform Block

- Available through \#moj_import \<minecraft:light.glsl\> for convenience
- Most shaders are able to receive this uniform block, even if they don't normally use it
  - The values may not make sense if the shader wouldn't normally expect it, however
- Contains Light0_Direction and Light1_Direction

#### CloudInfo Uniform Block

- Only available to the clouds shaders (rendertype_clouds.vsh/rendertype_clouds.fsh)
  - Contains CloudColor, CloudOffset and CellSize (new)
    - CellSize contains the size of an individual cloud cell

#### LightmapInfo Uniform Block

- Only available to the lightmap shader (lightmap.fsh)
- Contains AmbientLightFactor, SkyFactor, BlockFactor, UseBrightLightmap, NightVisionFactor, DarknessScale, DarkenWorldFactor, BrightnessFactor, SkyLightColor with no change in behavior

## Fixed bugs in 25w16a

- [MC-104231](https://bugs.mojang.com/browse/MC-104231) - Loading a custom structure doesn't load rails correctly
- [MC-277369](https://bugs.mojang.com/browse/MC-277369) - The draft report icon isn't initially visible when saving a report as a draft
- [MC-277370](https://bugs.mojang.com/browse/MC-277370) - The draft report icon doesn't initially disappear when a report is discarded
- [MC-279515](https://bugs.mojang.com/browse/MC-279515) - The game stalls when running the "/test clearall" command with large radiuses
- [MC-280297](https://bugs.mojang.com/browse/MC-280297) - The volume level between grass and dirt is inconsistent
- [MC-293754](https://bugs.mojang.com/browse/MC-293754) - Minecraft causes OpenGL errors occasionally
- [MC-295395](https://bugs.mojang.com/browse/MC-295395) - Entities interact differently with nether portals
- [MC-295677](https://bugs.mojang.com/browse/MC-295677) - Title screen fades in from black after closing the "Welcome to Minecraft" screen
- [MC-295895](https://bugs.mojang.com/browse/MC-295895) - 1.21.5 breaks minecart behavior when travelling through nether portals
- [MC-295944](https://bugs.mojang.com/browse/MC-295944) - Reloading a professionless zombie villager causes it to gain random profession clothing
- [MC-296099](https://bugs.mojang.com/browse/MC-296099) - Nether portal collision is or isn't working depending on the cardinal direction
- [MC-296121](https://bugs.mojang.com/browse/MC-296121) - ClientboundLevelChunkPacketData buffer size is too big
- [MC-296348](https://bugs.mojang.com/browse/MC-296348) - NoAI:1b mobs cannot be ridden in 1.21.5+
- [MC-296353](https://bugs.mojang.com/browse/MC-296353) - Potions, tipped arrows, and dyed leather armor render with missing or incorrect colors in the inventory
- [MC-296355](https://bugs.mojang.com/browse/MC-296355) - Characters in front of the cursor render one pixel too far to the left
- [MC-296356](https://bugs.mojang.com/browse/MC-296356) - Hitbox rendering in GUIs is broken
- [MC-296357](https://bugs.mojang.com/browse/MC-296357) - Happy ghasts produce footstep sounds when flying close above blocks
- [MC-296358](https://bugs.mojang.com/browse/MC-296358) - A player in Spectator mode on top of a happy ghast makes it stop moving
- [MC-296363](https://bugs.mojang.com/browse/MC-296363) - Scrolling in the experiments screen does not move the positions where the buttons can be selected
- [MC-296365](https://bugs.mojang.com/browse/MC-296365) - Block placing sounds are played when the block states of completely unhydrated dried ghasts are changed
- [MC-296366](https://bugs.mojang.com/browse/MC-296366) - Kicked for flying while flying happy ghast
- [MC-296367](https://bugs.mojang.com/browse/MC-296367) - The enchantment glint in the inventory appears on all items of the same type
- [MC-296373](https://bugs.mojang.com/browse/MC-296373) - The side faces of dried ghast tentacles aren’t culled when covered by blocks
- [MC-296376](https://bugs.mojang.com/browse/MC-296376) - Sounds produced by ghastlings can be heard from too far away
- [MC-296381](https://bugs.mojang.com/browse/MC-296381) - Dried Ghasts always face north in world generation
- [MC-296382](https://bugs.mojang.com/browse/MC-296382) - Filled maps are blurry
- [MC-296401](https://bugs.mojang.com/browse/MC-296401) - Harnesses are not sorted correctly in the Creative Inventory
- [MC-296419](https://bugs.mojang.com/browse/MC-296419) - Spectators' names in multiplayer tab list render improperly compared to 1.21.5
- [MC-296426](https://bugs.mojang.com/browse/MC-296426) - Text background lacks opacity over hotbar icons
- [MC-296427](https://bugs.mojang.com/browse/MC-296427) - Happy ghasts move/spin erratically when leashed to a fence
- [MC-296434](https://bugs.mojang.com/browse/MC-296434) - Unable to see items when hovering over them inside of a bundle
- [MC-296437](https://bugs.mojang.com/browse/MC-296437) - Items render behind effect icons and recipe book inside of the inventory
- [MC-296444](https://bugs.mojang.com/browse/MC-296444) - Blur is applied to resource pack icons
- [MC-296465](https://bugs.mojang.com/browse/MC-296465) - Highlighting text on a sign causes it to override the sign background
- [MC-296467](https://bugs.mojang.com/browse/MC-296467) - Item tooltips cause items behind it to not render
- [MC-296470](https://bugs.mojang.com/browse/MC-296470) - Items render behind text in anvils
- [MC-296471](https://bugs.mojang.com/browse/MC-296471) - Hud is now hidden while in bed resulting in delayed hud rendering
- [MC-296517](https://bugs.mojang.com/browse/MC-296517) - The menu panorama turns gray when the switching realm worlds interface is open
- [MC-296518](https://bugs.mojang.com/browse/MC-296518) - Text inside the middle of the java realms information box completely disappears when selected
- [MC-296524](https://bugs.mojang.com/browse/MC-296524) - Server and singleplayer world icons are blurry
- [MC-296638](https://bugs.mojang.com/browse/MC-296638) - Clocks, compasses, and lodestone compasses do not render enchantment glint in certain display contexts when using Fabulous! graphics

 

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/3d8223843a659d8ebc33459864ba02b34485ea11/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
