---
title: Minecraft Java Edition - 26.4 Snapshot 2
date: 2026-10-01T09:13:02Z
updated: 2026-10-01T09:13:08Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49295421760909-Minecraft-Java-Edition-26-4-Snapshot-2
hash:
  h_01M3VBQTZFMFDQH4HF882KRQYF: changes
  h_01M3VBQTZGJ6T8DJHC90PZHE44: ui
  h_01M3VBQTZH9HP3AAFQ13N2KR1J: technical-changes
  h_01M3VBQTZHD6MHYSSG8AZCRFGF: data-pack-version-1221
  h_01M3VBQTZHFZCBBJQZXBY6M149: new-environment-attributes
  h_01M3VBQTZHJ14WHMMY0H9BYM2E: minecraftvisualhas_sky_occluder
  h_01M3VBQTZKTGAW6NWJENS38HK7: predicates
  h_01M3VBQTZKTQ3HM6942HQ7895R: added-below_heightmap
  h_01M3VBQTZMJ4NP5VRFM4X3AWP0: resource-pack-version-990
  h_01M3VBQTZMQMCK3NYXQQ9NR16T: shaders--post-process-effects
  h_01M3VBQTZMZP84AB45Y6DNNPNW: changes-for-the-improved-fog-feature-that-is-controlled-by-the-improved-transparency-video-setting
  h_01M3VBQTZNSG222EPJRJ5RSBN8: new-shaders-for-the-sky-occlusion
  h_01M3VBQTZN3N00DZRG9VS1PV5R: fixed-bugs-in-264-snapshot-2
  h_01M3VBQV07KQS89WXAK6XXYMZQ: get-the-snapshot
---

Published 9/29/26

 

 

Hi there! It is time for the second snapshot for 26.4, featuring improved render distance fog, a new celestial occluder, and a fresh redesign of the F3 screen.

Happy mining!

## Changes

- When "Improved Transparency" is on, sky background and clouds that are behind the terrain are now blended into the terrain render distance fog making the boundary between the sky and the terrain invisible
- In the Overworld, the bottom half of the skybox is now occluding the celestial objects such as the sun, the moon and the stars

### UI

- The debug overlay (F3 by default) has been redesigned to be easier to read and understand

## Technical Changes

- The Data Pack version is now 122.1
- The Resource Pack version is now 99.0

## Data Pack Version 122.1

### New Environment Attributes

#### minecraft:visual/has_sky_occluder

Determines whether the sky occluder is enabled for the environment. The sky occluder will occlude the sky box up until a certain angle with fog color with a smooth occlusion border.

- Value type: boolean
- Default value: true for the Overworld, false for the Nether and the End
- Interpolated: no

### Predicates

#### Added below_heightmap:

Checks if the height of the position is below a given heightmap value.

Format:

- heightmap: Heightmap type to compare origin against

## Resource Pack Version 99.0

### Shaders & Post-process Effects

- screenquad.vsh was renamed to screentriangle.vsh since it was actually representing a single triangle for a while now

#### Changes for the "Improved Fog" feature that is controlled by the "Improved Transparency" video setting

- Removed OIT (Order-Independent Transparency, controlled by "Improved Transparency" video setting) support from the clouds.fsh, since it is now used to render clouds when OIT is off and to render clouds to an offscreen target when OIT is on
- Added blit_clouds.fsh shader with OIT support that renders clouds from an offscreen target to OIT targets

#### New Shaders for the Sky Occlusion

- Added sky_occluder.vsh and sky_occluder.fsh shaders which are used to occlude the sky box up until the certain angle with fog color with a smooth occlusion border

## Fixed bugs in 26.4 Snapshot 2

- [MC-152504](https://bugs.mojang.com/browse/MC-152504) - The sky overlaps fog underwater, notably at sunrise and sunset
- [MC-184161](https://bugs.mojang.com/browse/MC-184161) - The "Oh Shiny" advancement title is missing a comma
- [MC-195836](https://bugs.mojang.com/browse/MC-195836) - Some closed captions aren't in the correct tense or are formatted incorrectly
- [MC-212623](https://bugs.mojang.com/browse/MC-212623) - Some closed captions use the word "angers" as a verb, therefore making them grammatically incorrect
- [MC-236052](https://bugs.mojang.com/browse/MC-236052) - Z-fighting can be seen around the necks of small armor stands
- [MC-264274](https://bugs.mojang.com/browse/MC-264274) - Placing lily pads and frogspawn does not increment their used:\[block\] statistics
- [MC-300250](https://bugs.mojang.com/browse/MC-300250) - Clouds render behind foggy terrain
- [MC-300894](https://bugs.mojang.com/browse/MC-300894) - The harness layer is not scaled correctly on baby happy ghasts
- [MC-310503](https://bugs.mojang.com/browse/MC-310503) - LivingEntity's constructor randomizes the yaw in radians instead of degrees
- [MC-311424](https://bugs.mojang.com/browse/MC-311424) - The Right Shift key is recognized as key.keyboard.unknown ("Not Bound") with certain input methods
- [MC-311451](https://bugs.mojang.com/browse/MC-311451) - Mouse input is not recognized on monitors that are in negative positions on Wayland
- [MC-311458](https://bugs.mojang.com/browse/MC-311458) - The "Adventure" advancement's icon is inconsistent with the Adventure game mode's icon in the game mode switcher
- [MC-311758](https://bugs.mojang.com/browse/MC-311758) - Block breaking particles and sounds are not canceled and continue appearing when opening the game mode switcher
- [MC-311777](https://bugs.mojang.com/browse/MC-311777) - Block breaking particles and sounds are not canceled and continue appearing when instantly mining a block and swapping the item into the off hand simultaneously
- [MC-311780](https://bugs.mojang.com/browse/MC-311780) - Trigonometric functions don't wrap angles before being applied and aren't fully periodic
- [MC-311781](https://bugs.mojang.com/browse/MC-311781) - The game is not minimized when losing focus in fullscreen mode
- [MC-311826](https://bugs.mojang.com/browse/MC-311826) - On some systems, tabbing in and out of the game in fullscreen mode while the "Toggle Cinematic Camera" key bind is unbound will toggle it
- [MC-311924](https://bugs.mojang.com/browse/MC-311924) - Breaking an armor stand or block-attached entity near a sculk catalyst consumes the player's experience
- [MC-311933](https://bugs.mojang.com/browse/MC-311933) - The horizontal scroll direction is inverted in the Advancements screen
- [MC-311949](https://bugs.mojang.com/browse/MC-311949) - The "Not Bound" scancode can activate key binds
- [MC-311965](https://bugs.mojang.com/browse/MC-311965) - The commands.posteffect.list.success string always pluralizes the word "effects"
- [MC-311969](https://bugs.mojang.com/browse/MC-311969) - Some strings that mention specified slots are missing articles
- [MC-311970](https://bugs.mojang.com/browse/MC-311970) - The options.debugGuiScale.tooltip string lacks a period, unlike similar strings
- [MC-311971](https://bugs.mojang.com/browse/MC-311971) - Some strings refer to the "LAN" setting as the "multiplayer scope" and write its value as "Off" instead of "OFF"
- [MC-311973](https://bugs.mojang.com/browse/MC-311973) - The options.worldOptions.guest.command_access.tooltip string redundantly includes "or not"
- [MC-311977](https://bugs.mojang.com/browse/MC-311977) - The closed caption for riding zombie nautiluses is "Nautilus bubbles"
- [MC-311978](https://bugs.mojang.com/browse/MC-311978) - Some argument error strings introduce the invalid value with a colon instead of surrounding it with single quotes, unlike similar strings
- [MC-311997](https://bugs.mojang.com/browse/MC-311997) - The options.macFullscreenMenuVisibility.tooltip string is improperly capitalized
- [MC-311999](https://bugs.mojang.com/browse/MC-311999) - The options.ctrlClickEmulatesRightClick string is missing a hyphen between the words "Right" and "Click"
- [MC-312035](https://bugs.mojang.com/browse/MC-312035) - Attacking an entity in Creative mode, then switching to Survival mode adds 5 ticks of block break delay
- [MC-312046](https://bugs.mojang.com/browse/MC-312046) - Mushrooms now generate in excessive quantities in swamps
- [MC-312064](https://bugs.mojang.com/browse/MC-312064) - The game can randomly crash during chunk generation
- [MC-312065](https://bugs.mojang.com/browse/MC-312065) - Some test coordinate strings are displayed with two sets of square brackets, unlike similar strings
- [MC-312066](https://bugs.mojang.com/browse/MC-312066) - Donkeys, horses and mules in water can no longer be ridden onto land without the aid of a partial block
- [MC-312068](https://bugs.mojang.com/browse/MC-312068) - Some strings are missing articles before the word "invalid"
- [MC-312075](https://bugs.mojang.com/browse/MC-312075) - The options.directionalAudio.off.tooltip string is improperly capitalized, unlike similar strings
- [MC-312078](https://bugs.mojang.com/browse/MC-312078) - The options.hideMatchedNames.tooltip string is improperly capitalized, unlike similar strings
- [MC-312079](https://bugs.mojang.com/browse/MC-312079) - The options.fullscreen.unavailable string is improperly capitalized, unlike similar strings
- [MC-312080](https://bugs.mojang.com/browse/MC-312080) - The telemetry.event.world_loaded.description string is improperly capitalized, unlike similar strings
- [MC-312082](https://bugs.mojang.com/browse/MC-312082) - The advancements.husbandry.uh_oh.title string is missing a hyphen between the words "Uh" and "Oh"
- [MC-312084](https://bugs.mojang.com/browse/MC-312084) - The options.fullscreen.entry string is missing a hyphen before the word "bit"
- [MC-312087](https://bugs.mojang.com/browse/MC-312087) - The word "towards" within the options.vignette.tooltip string isn't spelled in American English
- [MC-312088](https://bugs.mojang.com/browse/MC-312088) - Some application control key name strings are displayed without the "AC" prefix, unlike similar strings
- [MC-312089](https://bugs.mojang.com/browse/MC-312089) - Some strings that name screens are improperly capitalized, unlike similar strings
- [MC-312091](https://bugs.mojang.com/browse/MC-312091) - The chat.copy.click string is improperly capitalized, unlike similar strings
- [MC-312092](https://bugs.mojang.com/browse/MC-312092) - The multiplayer.socialInteractions.not_available string is improperly capitalized, unlike similar strings
- [MC-312102](https://bugs.mojang.com/browse/MC-312102) - The disconnect.loginFailedInfo.invalidSession string is improperly capitalized, unlike similar strings
- [MC-312103](https://bugs.mojang.com/browse/MC-312103) - The entity name "Experience Orbs" isn't capitalized within some game rule description strings, unlike similar strings
- [MC-312107](https://bugs.mojang.com/browse/MC-312107) - The selectWorld.backupQuestion.experimental string is improperly capitalized, unlike similar strings
- [MC-312108](https://bugs.mojang.com/browse/MC-312108) - The jigsaw_block.final_state string is improperly capitalized, unlike similar strings
- [MC-312111](https://bugs.mojang.com/browse/MC-312111) - Some Realms snapshot popup strings are improperly capitalized, unlike similar strings
- [MC-312112](https://bugs.mojang.com/browse/MC-312112) - The mco.configure.world.invite_codes.subtitle string uses the verb "add" instead of "create", unlike similar strings
- [MC-312126](https://bugs.mojang.com/browse/MC-312126) - The options.inGameNotification.tooltip string is improperly capitalized, unlike similar strings

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/e6cac6e2fa35d5847e60dede721ec75f7a28c34d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
