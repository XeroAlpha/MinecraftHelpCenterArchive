---
title: Minecraft Java Edition - 26.4 Snapshot 1
date: 2026-09-22T14:39:38Z
updated: 2026-09-22T14:39:49Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/49076034811533-Minecraft-Java-Edition-26-4-Snapshot-1
hash:
  h_01M34RTHZWX92VMX9J53FWSFYW: changes
  h_01M34RTHZXTT5FCWVYB1SXEHRY: world-generation
  h_01M34RTJ02VHGYV5KP5GDQWWJN: minor-tweaks-to-blocks-items-and-entities
  h_01M34RTJ06QCVAJ6YQYGY79PRW: graphics-api-video-setting
  h_01M34RTJ08ZXSXJ9AZEQ4A3E4V: technical-changes
  h_01M34RTJ0AXZJRB2S87EJ0X5CC: network-protocol
  h_01M34RTJ0B0H09Y9GJRVPSF9E7: added-minecraftmod_list-custom-packet-payload
  h_01M34RTJ0EXN9SA60YFBRGZCNK: modified-minecraftintention-packet
  h_01M34RTJ1290TV9Q1458QAJCWN: modified-minecrafttransfer-packet
  h_01M34RTJ13RNVTRJCC305KFP0K: dedicated-server-properties
  h_01M34RTJ1C45F9JER7HW7Q4PQS: data-pack-version-1220
  h_01M34RTJ1DWNKRM5B4J042NXM6: commands
  h_01M34RTJ1F3WK5ZX2ZRF6K1SWB: world-generation-1
  h_01M34RTJ1FZYH83HAAVYFX3WBV: features
  h_01M34RTJ1F5VM8KWF2JTBKXDZ7: changed-straight_trunk_placer
  h_01M34RTJ1HKSC3WMW5RADB7VV2: placed-features
  h_01M34RTJ1J88T70WWGZQYMGA5C: placement-modifiers
  h_01M34RTJ1KBE4J20ZYRCWHHSMG: changed-cuboid
  h_01M34RTJ1NZ9MCZTCK7A4Q0QNF: changed-fixed_placement
  h_01M34RTJ1Q39AHSN8MZR25JVZH: noise-settings
  h_01M34RTJ1SSQMJK4K4GKMTYX2R: material-conditions
  h_01M34RTJ1S0M7SHFKDG4699H3M: updated-minecraftsteep
  h_01M34RTJ1V9VQ418E4CZXQGXJ1: tags
  h_01M34RTJ1VGDCB8TZZ42WSPBXY: biome-tags
  h_01M34RTJ1XE579V689JQJG7PW3: resource-pack-version-980
  h_01M34RTJ1Y7KQKF0BEF8FCHRPR: shaders--post-process-effects
  h_01M34RTJ1YTCYQJ7R0PDANZGXX: order-independent-transparency-shaders
  h_01M34RTJ2333SY1XCB1G1NDTVX: fixed-bugs-in-264-snapshot-1
  h_01M34RTJ2SXWAJ9J2Y7KY8QBZ5: get-the-snapshot
---

**Posted: September 22nd, 2026**

Welcome to the first snapshot of 26.4! We're kicking things off with a range of technical updates and improvements, including Vulkan becoming the default graphics API.

## Changes

### World Generation

- Upgrading worlds from before Caves and Cliffs will now also generate sulfur caves below old chunks

### Minor Tweaks to Blocks, Items and Entities

- Red and Brown Mushrooms can now be placed on any block with a solid top face regardless of lighting conditions
  - They can still not spread unless the brightness is less than 13, or their support block overrides light requirements

### "Graphics API" Video Setting

- "Default" now behaves the same as "Prefer Vulkan"
- The game will no longer change the graphics API setting automatically if a startup crash is detected.

## Technical Changes

- The Data Pack version is now 122.0
- The Resource Pack version is now 98.0

### Network Protocol

#### Added minecraft:mod_list Custom Packet Payload

- This packet is intended to inform servers about client mods to simplify debugging
- Vanilla client sends an empty packet at the start of configuration phase, as it does not know about any mods - that is still a responsibility of 3rd-party modding platforms

#### Modified minecraft:intention Packet

- The host field in the serverbound intention packet can now hold additional parameters (previously it stored only the domain name used for connecting to a server)
  - The new format is similar to URI query strings - the domain can now optionally be followed by a ? character and then followed by key=value pairs separated by a & character
  - Empty values can be omitted (including = sign)
  - Keys and values are escaped according to the standard URI rules ("percent-encoded component")
  - Keys starting with \_ are reserved for vanilla use
  - Example: example.com?key1=value2&key2
  - Users can now input properties in any "Server Address" field in the server list
    - Additionally, any address in form of \<id\>@\<host\> will be parsed as \<host\>?\_id=\<id\>
  - If a server uses SRV DNS records, the host field will contain both original and resolved domains
    - If the resolved domain is different from the original domain, the resolved one will be used as the "primary" one, while the original one will be added as \_o ("origin") property
    - Example host string: \<redirected domain\>?\_o=\<original domain\>:\<original port\>, while the port field in the intention packet will be set to the resolved port value
  - The field size has been extended to 1024 characters
  - Note: since the minecraft:intent packet is unencrypted, properties should not be used for any security-sensitive purpose

#### Modified minecraft:transfer Packet

- Added properties field - a string to string map of properties that will be added to the host field in the minecraft:intent packet sent to the target server

### Dedicated Server Properties

- Added allowed-connection-ids
  - A list of comma-separted ids
  - If non-empty, the server will match the values against \_id property in minecraft:intent packet
    - If there is no match, the server will reject the connection
  - This works both for both status and login connections, so any user connecting without the correct \_id in the server address will not see the status and will not be able to join the server
- Added status-contact-details field
  - If non-empty, the value of this field will be sent in the minecraft:status_response packet JSON payload under the contact property
  - This value is meant to be used to signal a way to contact the server owners about the server, even if there is no website or other information about it
  - This field is meant to be human-readable, but there are no other restrictions on field format
- Added enable-legacy-status field
  - This option allows disabling existing legacy (pre-1.7) server status and ping protocol handling
  - To preserve existing functionality, value defaults to true
  - Note: enable-status needs to be set for any status information (modern or legacy) to be set

## Data Pack Version 122.0

- Entries for different biomes in multi-noise biome sources can no longer overlap across all noise parameters with the same offset

### Commands

- The fillbiome command will now fill biomes with block accuracy
- NBT conversion from floating point types to integer types now always converts to the closest possible valid number after rounding down

### World Generation

#### Features

##### Changed straight_trunk_placer

- Added trunk_width field
  - optional int provider, the width of the trunk centered around the origin
  - defaults to 1.0

#### Placed Features

- The possible domain in the XZ plane of Placed Features included in biomes is now validated
  - Feature placement can only occur within a 3x3 chunk region: as such, it is not valid for a Placed Feature to select a position outside of that range
  - Note: the size of the feature itself is not currently taken into consideration, which may still overflow the chunk

#### Placement Modifiers

##### Changed cuboid

- xz_size and y_size have been adjusted to represent the actual size of the cuboid, instead of implicitly being 1 block larger
  - As such, an xz_size of 2 will actually produce a 2x2 cuboid instead of 3x3

##### Changed fixed_placement

- positions now requires at least one element

#### Noise Settings

- The default_block field has been removed
  - This is now always air - any other block should be defined by the Material Rule

#### Material Conditions

##### Updated minecraft:steep

- No longer considers height modifications from Eroded Badlands "surface extensions" in an order-dependent way

### Tags

#### Biome Tags

- Added \#generated_in_below_zero_retrogen - biomes to generate below worlds that predate Caves and Cliffs
- Added \#is_cave collection tag

## Resource Pack Version 98.0

### Shaders & Post-process Effects

#### Order-Independent Transparency shaders

- The OIT algorithm was simplified by replacing the wavelet-based mathematics with depth bin-based accumulation
  - Slightly improved performance at least on some devices
  - Reduced floating point precision issues on average
  - OIT_WAVELET_RANK shader define was removed
  - OIT_COEFF_COUNT shader define was replaced by OIT_NUMBER_OF_DEPTH_BINS
  - OIT_COEFF_ATTACHMENT_COUNT shader define was renamed to OIT_TRANSMITTANCE_TARGET_COUNT

## Fixed bugs in 26.4 Snapshot 1

- [MC-8959](https://bugs.mojang.com/browse/MC-8959) - The player automatically jumps when pressing against a block while in water
- [MC-44560](https://bugs.mojang.com/browse/MC-44560) - When pushed to the edge of water or lava, entities jump by themselves
- [MC-50749](https://bugs.mojang.com/browse/MC-50749) - Jumping into water against a wall causes the player to bounce
- [MC-123848](https://bugs.mojang.com/browse/MC-123848) - Item frames (and items within) drop atop the block they're attached to instead of under it when removed from a ceiling
- [MC-135211](https://bugs.mojang.com/browse/MC-135211) - Entities automatically jump when falling into 1-block-deep water from certain heights
- [MC-135212](https://bugs.mojang.com/browse/MC-135212) - Entities automatically jump when falling into water of any depth from certain heights
- [MC-262252](https://bugs.mojang.com/browse/MC-262252) - The generation of lush caves and dripstone caves is poorly defined
- [MC-276879](https://bugs.mojang.com/browse/MC-276879) - /data truncates floats when casting to longs, but rounds down in all other cases
- [MC-278651](https://bugs.mojang.com/browse/MC-278651) - The host name in handshake packets for SRV records is inconsistent
- [MC-296053](https://bugs.mojang.com/browse/MC-296053) - Item frames don't update properly when modifying their Facing NBT tag
- [MC-299060](https://bugs.mojang.com/browse/MC-299060) - Setting item frames' direction with commands can cause desyncs
- [MC-303702](https://bugs.mojang.com/browse/MC-303702) - Small gaps still appear in item models
- [MC-307065](https://bugs.mojang.com/browse/MC-307065) - Missing optimization for the side faces of the builtin/generated item model
- [MC-310051](https://bugs.mojang.com/browse/MC-310051) - Floating point cancellation artifacts from bits.fsh
- [MC-310131](https://bugs.mojang.com/browse/MC-310131) - Placeable entities momentarily appear at the wrong location when placed
- [MC-310767](https://bugs.mojang.com/browse/MC-310767) - Pipelines always declare a D32_FLOAT depth attachment format with the Vulkan rendering backend
- [MC-311195](https://bugs.mojang.com/browse/MC-311195) - Placed armor stands are rotated incorrectly for one tick
- [MC-311265](https://bugs.mojang.com/browse/MC-311265) - The world border renders incorrectly from outside
- [MC-311473](https://bugs.mojang.com/browse/MC-311473) - Duplicating items with the scroll wheel in Creative mode can produce ghost items
- [MC-311582](https://bugs.mojang.com/browse/MC-311582) - The texture of desert pyramid maps has one inconsistent pixel compared to the others
- [MC-311726](https://bugs.mojang.com/browse/MC-311726) - The water inside waterlogged copper grates has the falling fluid state property set to true
- [MC-311727](https://bugs.mojang.com/browse/MC-311727) - The check for whether a player is standing on air doesn't use the player's updated position
- [MC-311773](https://bugs.mojang.com/browse/MC-311773) - Red and brown mushrooms cannot be placed at any light level, unlike in Bedrock Edition
- [MC-311786](https://bugs.mojang.com/browse/MC-311786) - Running /test run with a rotationSteps value that is out of range causes an error
- [MC-311788](https://bugs.mojang.com/browse/MC-311788) - Teleporting item frames moves them further than it should visually
- [MC-311818](https://bugs.mojang.com/browse/MC-311818) - Traveling to the End in Spectator mode regenerates the obsidian platform
- [MC-311836](https://bugs.mojang.com/browse/MC-311836) - Minecart sounds are now distorted
- [MC-311859](https://bugs.mojang.com/browse/MC-311859) - Damaged dyed wolf armor no longer shows cracks in the colored parts
- [MC-311966](https://bugs.mojang.com/browse/MC-311966) - The tooltip of the "Quit Shortcuts" option calls the Command key "Cmd"

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/30c3b4fddc0821345a9464ab1201f0ef44f570dd/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
