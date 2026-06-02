---
title: Minecraft Java Edition - 26.2 Pre-release 3
date: 2026-06-02T14:08:58Z
updated: 2026-06-02T14:09:09Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/46332172222861-Minecraft-Java-Edition-26-2-Pre-release-3
hash:
  h_01KT4AKWDWCHH2E1BC21NTHNR9: changes
  h_01KT4AKWDWH8DHZVAH3WKK91QV: sulfur-cube-mob
  h_01KT4AKWDY0NQZR0K80M8PZCTP: ui
  h_01KT4AKWDZ2E36JARMT25GP86T: telemetry
  h_01KT4AKWDZ5SDH8M98QF9EBGCV: new-property-in-world-events
  h_01KT4AKWE18KSY47E592K707X1: fixed-bugs-in-262-pre-release-3
  h_01KT4AKWEQQ9T72R4SAVWV0HTH: get-the-pre-release
---

Today we are shipping the third pre-release for 26.2, with a few changes and fixes!

With today's pre-release we're reverting a fix that patched an exploit, known as "Attribute Swapping", for unrelated reasons. Please note that this does not mean "Attribute Swapping" is a supported functionality - it will instead be fixed in a future snapshot.

Happy Mining!

## Changes

### Sulfur Cube mob

- The block inside a Sulfur Cube now only aligns vertically with the block grid when the Sulfur Cube is invisible
- The squish animation will no longer be played when a Sulfur Cube has a block inside

### UI

- The tooltip for the "Exclusive Fullscreen" video setting now mentions that Adaptive Sync (Nvidia G-Sync, AMD FreeSync) should work when it is enabled and will not work when it is disabled

## Telemetry

### New property in World Events

The following change was missing from the changelog for 26.2 Pre-Release 2:

- server_session_id a unique identifier for a multiplayer session, shared across all players in that session

## Fixed bugs in 26.2 Pre-Release 3

- [MC-268008](https://bugs.mojang.com/browse/MC-268008) - Players' sneaking state can sometimes desync
- [MC-301325](https://bugs.mojang.com/browse/MC-301325) - Menu music starts for a brief moment during the creation of a new world
- [MC-307713](https://bugs.mojang.com/browse/MC-307713) - The noxious_gas_08 particle texture has a resolution of 16x15
- [MC-307794](https://bugs.mojang.com/browse/MC-307794) - Sulfur cubes with absorbed primed TNT cannot be hit with spears
- [MC-307822](https://bugs.mojang.com/browse/MC-307822) - Geysers are less effective on players riding other entities
- [MC-307860](https://bugs.mojang.com/browse/MC-307860) - The animation of the dark overlay in the advancements screen is slower on lower framerates
- [MC-307884](https://bugs.mojang.com/browse/MC-307884) - Characters in the Unicode font have uneven gaps between them
- [MC-307899](https://bugs.mojang.com/browse/MC-307899) - Adding large animated textures to atlases causes the Vulkan rendering backend to run out of memory
- [MC-307916](https://bugs.mojang.com/browse/MC-307916) - Explosions caused by sulfur cubes with absorbed TNT do not drop every destroyed block
- [MC-307969](https://bugs.mojang.com/browse/MC-307969) - Log spam when attempting to render a monster spawner in Peaceful difficulty
- [MC-308036](https://bugs.mojang.com/browse/MC-308036) - Attempting to send a friend request to yourself silently fails with no user feedback
- [MC-308042](https://bugs.mojang.com/browse/MC-308042) - CTRL+NUM within the friends menu requires the buttons to be focused in order to function, unlike other menus
- [MC-308065](https://bugs.mojang.com/browse/MC-308065) - When placing a bed, the head part takes an extra frame to appear
- [MC-308092](https://bugs.mojang.com/browse/MC-308092) - Disconnecting from the network on the friends screen and exiting the game causes the JVM to crash
- [MC-308107](https://bugs.mojang.com/browse/MC-308107) - The border around the text under the listed friends in the friends menu disappears when pressing Enter and exiting the link confirmation screen
- [MC-308133](https://bugs.mojang.com/browse/MC-308133) - Geysers take away boats' horizontal momentum
- [MC-308152](https://bugs.mojang.com/browse/MC-308152) - Hitting sulfur cubes that are hanging in mid air near the top now causes them to gain a lot more height
- [MC-308245](https://bugs.mojang.com/browse/MC-308245) - Partially transparent flower textures produce ghosting artifacts when mipmapped
- [MC-308426](https://bugs.mojang.com/browse/MC-308426) - Setting a movement key bind and the "Debug Modifier" key bind to the same key lets you move while an inventory is open
- [MC-308436](https://bugs.mojang.com/browse/MC-308436) - Blocks absorbed by small sulfur cubes are displayed incorrectly
- [MC-308448](https://bugs.mojang.com/browse/MC-308448) - The block outline on banners is white
- [MC-308475](https://bugs.mojang.com/browse/MC-308475) - The depth clear value is ignored in GlCommandEncoder.createRenderPass()
- [MC-308476](https://bugs.mojang.com/browse/MC-308476) - The timeout passed into glClientWaitSync is in milliseconds instead of nanoseconds
- [MC-308477](https://bugs.mojang.com/browse/MC-308477) - The vertex buffer slot is hardcoded to 0 in VulkanRenderPass.drawMultipleIndexed()
- [MC-308484](https://bugs.mojang.com/browse/MC-308484) - VulkanRenderPass: scissor is never set when renderArea is null
- [MC-308533](https://bugs.mojang.com/browse/MC-308533) - JVM crash when two shaders fail to compile when using Vulkan
- [MC-308537](https://bugs.mojang.com/browse/MC-308537) - The game can crash due to certain race conditions in multiplayer
- [MC-308541](https://bugs.mojang.com/browse/MC-308541) - You can still swap the blocks inside of a sulfur cube whilst their TNT is about to explode

## Get the Pre-Release

Pre-Releases are available for Minecraft: Java Edition. To install the Pre-Release, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7229ab459c87c919034db33b6fc9ee7367a0bd97/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
