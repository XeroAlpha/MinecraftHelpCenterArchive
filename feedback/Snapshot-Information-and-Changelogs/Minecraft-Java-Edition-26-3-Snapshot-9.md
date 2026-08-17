---
title: Minecraft Java Edition - 26.3 Snapshot 9
date: 2026-08-17T14:13:15Z
updated: 2026-08-17T14:13:22Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48195693403661-Minecraft-Java-Edition-26-3-Snapshot-9
hash:
  h_01M080VQ0X86PS75RBKM7SQW24: new-features
  h_01M080VQ0YSHKY495EJC4C1Q37: realms
  h_01M080VQ0ZKTFJSS0T10AK9VV9: minor-tweaks-to-blocks-items-and-entities
  h_01M080VQ0ZBRXVRR6VZJ3K6SFP: ui
  h_01M080VQ11HNY40KQQ735JMZPA: technical-changes
  h_01M080VQ11TXFRHRZZVFW30NXW: data-pack-version-1170
  h_01M080VQ1136DYWK57Y6TSK4HW: advancements
  h_01M080VQ11N42T7N3RC53XG4Q2: validation
  h_01M080VQ14QWGY51HM2WN6S1PE: changedminecraftgroup
  h_01M080VQ14AE7T9PTKE7M464J6: changedminecraftsequence
  h_01M080VQ15WW6E5E74NWCYCX8S: changedminecraftsum
  h_01M080VQ16XQ3A2GXPADNT2NMV: addedminecraftproduct
  h_01M080VQ18RTE57YQ5H6BN7T8A: addedminecraftminimum
  h_01M080VQ190TV9BVSC3CQCZCGM: addedminecraftmaximum
  h_01M080VQ1A0H8584VWN5AYSP9F: addedminecraftaverage
  h_01M080VQ1CNK9HJPC9FQ7K0FYC: tags
  h_01M080VQ1CCRC2NQ88CK0X99SZ: block-tags
  h_01M080VQ1FWBB45P64XEPTA8FX: item-tags
  h_01M080VQ1F7T62ZBTMCZ3GBVMT: potion-tags
  h_01M080VQ1H0HT6YGXCQMVBT2V0: fixed-bugs-in-263-snapshot-9
  h_01M080VQ20BKEPNJFEZ6F35EC6: get-the-snapshot
---

Looks like this Snapshot couldn't wait until Tuesday! Arriving a day early, it brings new customization options for Realms. Owners can now increase render distance up to 25 chunks and separately configure render and simulation distance to find the balance that works best for their world.

Aside from these changes, we've also included plenty of technical improvements and bug fixes.

Happy mining!

## New Features

### Realms

- Added render distance and simulation distance sliders to Realm configuration settings

### Minor Tweaks to Blocks, Items and Entities

- Endermen will now take damage from projectiles if they're riding something
- Endermen and Shulkers no longer teleport onto Bedrock

### UI

- On macOS, added a "Right Click Emulation" option in Controls settings, which treats Control + left-click as a right-click
  - Off by default

## Technical Changes

- The Data Pack version is now 117.0

## Data Pack Version 117.0

### Advancements

#### Validation

- Visible root advancements (i.e. ones that have display field, but no parent field) must always declare background field in display structure
- Only root advancements can have background field in display structure

#### Changed minecraft:group

- Can only use an inline definition in a top-level file

#### Changed minecraft:sequence

- Can only use an inline definition in a top-level file

#### Changed minecraft:sum

- The summands field was renamed to operands and now accepts an inline value, a single namespaced ID, a list of namespaced IDs, a list of inline values, or a hash-prefixed tag ID of a minecraft:number_provider type
- Now requires at least one operand
- When used in integer mode, integer mode is used for intermediate steps as well

#### Added minecraft:product

- Fields:
  - operands - A list of numbers as an inline value, a single namespaced ID, a list of namespaced IDs, a list of inline values, or a hash-prefixed tag ID of a minecraft:number_provider type
- Returns the product of the operands, multiplying them all together
- Requires at least one operand

#### Added minecraft:minimum

- Fields:
  - operands - A list of numbers as an inline value, a single namespaced ID, a list of namespaced IDs, a list of inline values, or a hash-prefixed tag ID of a minecraft:number_provider type
- Returns the minmimum value of the operands
- Requires at least one operand

#### Added minecraft:maximum

- Fields:
  - operands - A list of numbers as an inline value, a single namespaced ID, a list of namespaced IDs, a list of inline values, or a hash-prefixed tag ID of a minecraft:number_provider type
- Returns the minmimum value of the operands
- Requires at least one operand

#### Added minecraft:average

- Fields:
  - operands - A list of numbers as an inline value, a single namespaced ID, a list of namespaced IDs, a list of inline values, or a hash-prefixed tag ID of a minecraft:number_provider type
- Returns the average value of the operands
- Requires at least one operand

### Tags

#### Block Tags

- Added #uncarvable - blocks that Carvers can never carve
- Added #dangerous_for_teleportation - collection tag defining blocks that are dangerous to teleport on
- Added #cat_does_not_teleport_to - blocks that Cats do not teleport to
- Added #enderman_does_not_teleport_to - blocks that Endermen do not teleport to
- Added #shulker_does_not_teleport_to for blocks that Shulkers do not teleport to
- Added #consumable_does_not_teleport_to - blocks that entities do not teleport to when they consume food that teleports randomly when eaten
  - Empty by default

#### Item Tags

- Added #brewing_potion_inputs - Items that can be placed in a Brewing Stand potion slot, regardless of whether they are brewing recipe inputs

#### Potion Tags

- Added #douses_fire - Potions that douse Fire blocks when they hit something
- Added #hurts_water_sensitive_entities - Potions that will hurt entities which are sensitive to water (e.g. Endermen)
- Added #extinguishes_entities - Potions that can extinguish entities
- Added #rehydrates_axolotls - Potions that will cause Axolotls to rehydrate

## Fixed bugs in 26.3 Snapshot 9

- [MC-59810](https://bugs.mojang.com/browse/MC-59810) - Cannot break blocks while sprinting on macOS
- [MC-102836](https://bugs.mojang.com/browse/MC-102836) - Endermen and entities eating chorus fruit can teleport to some dangerous places
- [MC-106416](https://bugs.mojang.com/browse/MC-106416) - Endermen and entities eating chorus fruit can teleport outside the world border and into powder snow
- [MC-183446](https://bugs.mojang.com/browse/MC-183446) - Endermen still avoid projectiles when riding minecart or boat
- [MC-214113](https://bugs.mojang.com/browse/MC-214113) - Endermen and shulkers can teleport onto the Nether roof
- [MC-227008](https://bugs.mojang.com/browse/MC-227008) - Endermen constantly try to teleport when riding a vehicle under daylight
- [MC-273708](https://bugs.mojang.com/browse/MC-273708) - Endermen taking environmental damage attempt to teleport when riding an entity
- [MC-274924](https://bugs.mojang.com/browse/MC-274924) - Angry endermen suffocating while in a boat or minecart can attack their target from really far away
- [MC-296773](https://bugs.mojang.com/browse/MC-296773) - Taken screenshots are rendered as a black image on Intel graphics of Gen7 and Gen7.5 architecture
- [MC-307384](https://bugs.mojang.com/browse/MC-307384) - Screen tearing occurs with the Vulkan rendering backend in fullscreen mode with lower framerates, even if VSync is enabled
- [MC-307596](https://bugs.mojang.com/browse/MC-307596) - The OpenGL rendering backend seems to be very laggy
- [MC-308593](https://bugs.mojang.com/browse/MC-308593) - Animated blocks (notably water and lava) render incorrectly on some graphics
- [MC-309344](https://bugs.mojang.com/browse/MC-309344) - Shelf mushrooms held by foxes clip through their head and muzzle
- [MC-309468](https://bugs.mojang.com/browse/MC-309468) - Dropped shelf mushrooms rotate off-center
- [MC-309479](https://bugs.mojang.com/browse/MC-309479) - The game crashes during the loading screen with the message "Failed to wait for frame completion" on some systems
- [MC-309501](https://bugs.mojang.com/browse/MC-309501) - Dropped shelves rotate off-center
- [MC-309911](https://bugs.mojang.com/browse/MC-309911) - The words "blocks" and "seconds" in the commands.worldborder.set.grow string are always pluralized
- [MC-309918](https://bugs.mojang.com/browse/MC-309918) - The commands.perf.started string is missing a hyphen between the words "10" and "second" and an article before the word "10"
- [MC-310076](https://bugs.mojang.com/browse/MC-310076) - Mobs sometimes stop just far enough away from the player to be unable to attack them
- [MC-310087](https://bugs.mojang.com/browse/MC-310087) - The block texture of poplar hanging signs is inconsistent with the GUI texture
- [MC-310088](https://bugs.mojang.com/browse/MC-310088) - The taskbar icon displays the Java logo instead of the game's logo
- [MC-310116](https://bugs.mojang.com/browse/MC-310116) - Several media keys are named "key.keyboard.\[number\]" in the key binds menu
- [MC-310316](https://bugs.mojang.com/browse/MC-310316) - Item modifier definition files can entirely be a string reference
- [MC-310318](https://bugs.mojang.com/browse/MC-310318) - Slot source definition files can entirely be a string reference
- [MC-310328](https://bugs.mojang.com/browse/MC-310328) - The dedicated server logs Ignoring host properties. minecraft.api.discovery.host or minecraft.api.env needs to be set on startup
- [MC-310372](https://bugs.mojang.com/browse/MC-310372) - Tripwires depowering breaks cross-chunk block tick processing order
- [MC-310506](https://bugs.mojang.com/browse/MC-310506) - The "Exclusive Fullscreen Mode" option has no effect when the "Exclusive Fullscreen" option is disabled
- [MC-310633](https://bugs.mojang.com/browse/MC-310633) - Brewing stand bottle slots no longer accept glass bottles or fully brewed lingering potions
- [MC-310685](https://bugs.mojang.com/browse/MC-310685) - The game crashes when some inline slot sources are parsed
- [MC-310689](https://bugs.mojang.com/browse/MC-310689) - Filled and empty maps are no longer distinguishable when using the "Programmer Art" resource pack
- [MC-310715](https://bugs.mojang.com/browse/MC-310715) - The translation strings for the Meta/Windows keys are not intuitive
- [MC-310717](https://bugs.mojang.com/browse/MC-310717) - The category headers in some options screens cannot be selected via the mouse cursor
- [MC-310723](https://bugs.mojang.com/browse/MC-310723) - There are two distinct, non-conflicting keys named "Menu"
- [MC-310735](https://bugs.mojang.com/browse/MC-310735) - Placing or breaking blocks causes lag spikes in some cases
- [MC-310924](https://bugs.mojang.com/browse/MC-310924) - The game crashes when a rotated_block_provider block state provider is applied with a vertical direction to a block that can only face horizontally
- [MC-310925](https://bugs.mojang.com/browse/MC-310925) - Carvers can now carve through bedrock
- [MC-310944](https://bugs.mojang.com/browse/MC-310944) - Japanese and Korean keyboard keys are recognised wrongly
- [MC-310962](https://bugs.mojang.com/browse/MC-310962) - The trading UI opens and immediately closes when interacting with a villager whose trades were altered with commands
- [MC-310965](https://bugs.mojang.com/browse/MC-310965) - Buried treasure maps' textures are not reverted to the old ones with the "Programmer Art" resource pack enabled
- [MC-310988](https://bugs.mojang.com/browse/MC-310988) - Items are now positioned wrongly when the main hand is the left one
- [MC-310991](https://bugs.mojang.com/browse/MC-310991) - Power management keys are displayed as "key.keyboard.\[number\]" in the key binds screen
- [MC-310993](https://bugs.mojang.com/browse/MC-310993) - The player head's horizontal movement is jittery when riding a vehicle
- [MC-311005](https://bugs.mojang.com/browse/MC-311005) - The trading UI gets desynced if the villager is given trades using commands
- [MC-311008](https://bugs.mojang.com/browse/MC-311008) - All mobs stutter when they move their heads in the vertical direction
- [MC-311010](https://bugs.mojang.com/browse/MC-311010) - Most Application Control keys are still displayed as "key.keyboard.\[number\]" in the key binds menu
- [MC-311012](https://bugs.mojang.com/browse/MC-311012) - The animation of totems of undying pauses in the death screen
- [MC-311045](https://bugs.mojang.com/browse/MC-311045) - Arrows fired from dispensers can no longer destroy chorus flowers and decorated pots
- [MC-311092](https://bugs.mojang.com/browse/MC-311092) - The first person arm stutters heavily while turning the camera if the game is frozen
- [MC-311100](https://bugs.mojang.com/browse/MC-311100) - Using a custom font in a resource pack causes an error
- [MC-311124](https://bugs.mojang.com/browse/MC-311124) - The player's interaction animation stutters when the game is frozen

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/9580afcd37c63cb01e81d5d9f836f21b4d21c540/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
