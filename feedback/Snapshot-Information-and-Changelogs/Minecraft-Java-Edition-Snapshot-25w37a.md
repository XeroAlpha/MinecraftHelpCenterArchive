---
title: Minecraft Java Edition - Snapshot 25w37a
date: 2025-09-10T19:54:09Z
updated: 2025-09-10T19:58:32Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/39477612197005-Minecraft-Java-Edition-Snapshot-25w37a
hash:
  h_01K4TK5NQ9Y4DQNV2YYCNGXY0P: changes
  h_01K4TK5NQ99108XEFTX6D0TJ0R: minor-tweaks-to-blocks-items-and-entities
  h_01K4TK5NQ9TQTTPXR0TCGVQH5R: game-mode-switching
  h_01K4TK5NQ9XF664B6WWVQN1ZEF: minecraft-server-management-protocol
  h_01K4TK5NQ9VQAR9HZN4S19T938: server-properties
  h_01K4TK5NQ9HM6GYC9DJSGPQEBP: game-rules
  h_01K4TK5NQ99HYGAHH6EF6XS23B: mob-spawning
  h_01K4TK5NQ9SD5MCWJPM9M9K2J4: sounds
  h_01K4TK5NQ929CGMGFJTHG39XGX: ui
  h_01K4TK5NQ9TY5ZM3DRD6NH0M2H: technical-changes
  h_01K4TK5NQA2E91KGQYC6NHQTMJ: debug-features
  h_01K4TK5NQAJ1ST0YS9W61E9WJW: data-pack-version-870
  h_01K4TK5NQAKV0M1BM62QV3H2SH: resource-pack-version-690
  h_01K4TK5NQAQEQRMNSZN8E3X9HQ: textures
  h_01K4TK5NQA04R2WBJ66X7TSTSK: shaders--post-process-effects
  h_01K4TK5NQAGK5H6KFKQR65P6HH: shaders
  h_01K4TK5NQAEX56WXHC3K31P6VG: fixed-bugs-in-25w37a
  h_01K4TK5NQAS290CDDN4AWPV73Z: get-the-snapshot
---

A new week, and a new snapshot. This one includes another big batch of bug fixes, copper golem polishing and our beloved friend can now open doors.

Happy mining!

## Changes

- OpenGL 3.3 is now required to play the game, up from 3.2. This does not change our posted Minimum Requirements

> **Developer’s Note:** *We do not expect the update to OpenGL version to affect many people, if any at all. Our posted Minimum Requirements has been OpenGL 4.0 since 2017, and OpenGL 3.3 turned 15 years old recently.*

### Minor Tweaks to Blocks, Items and Entities

- Fixed a bug where breaking a Shelf while another player is interacting with it could lead to visual bugs in the player inventory
- Copper Golem's hitbox has been tweaked
  - The hitbox is now 0.49 blocks in width to be able to pathfind through narrow spaces
- Copper Golems can now open doors
- Test Instance Blocks now preserve error markers between world reloads
- Ambient lighting on entities has been adjusted to be more visually in line with blocks and other parts of the game
  - The underside of flat surfaces will now be lit from that direction, instead of the opposite direction
  - This mainly affects models containing cubes that are either flat or "hollow" such as:
    - Worn armor
    - Worn Elytra
    - The outside layers on player skins
    - The ribcages of Skeletons or Skeleton Horses
    - The feet of Chickens or Frogs
    - The wings of Phantoms or the Ender Dragon
    - The fins on fish
    - And more!

### Game Mode Switching

- Switching from Spectator Mode to Creative Mode no longer causes the player to stop flying
  - Instead, flight now only gets disabled when switching game modes if the player is near the ground
    - A player is considered to be near the ground if there is a collidable surface (i.e. blocks, Happy Ghasts, boats...) within 1 block below them
  - Flight will not get disabled if the player was inside a block or collidable entity
    - This is to prevent players from suddenly falling through the ground

> **Developer's Note**: *This change is a partial revert of a bugfix from a previous snapshot. Even though the old behavior prior to the fix was unintended, the approach we took to fixing flight didn't quite **land** the way we wanted it to. In response to community feedback, we're trying this new approach as a less disruptive alternative.*

### Minecraft Server Management Protocol

- Clients must authenticate to access the API
  - Clients should supply an Authorization bearer token header with a server specific secret
  - The secret is configured in the server properties file
    - management-server-secret=
    - The secret should be exactly 40 alphanumeric characters (A-Z, a-z, 0-9)
    - The secret will be automatically generated if the server property is empty
    - Unauthorized requests are rejected with 401 Unauthorized
- TLS is enabled by default
  - Can be disabled in the server properties file
    - management-server-tls-enabled=false
  - Requires a keystore file to be set in the server properties file
    - management-server-tls-keystore=path/to/keystore.p12
  - The keystore file must be in PKCS12 format
  - Keystore password can be set in the following ways, in order of priority
    - Environment variable: MINECRAFT_MANAGEMENT_TLS_KEYSTORE_PASSWORD
    - JVM argument: -Dmanagement.tls.keystore.password=
    - Server property: management-server-tls-keystore-password=

### Server Properties

- Default value of management-server-port was changed from 25585 to 0, assigning an available port each time management server is started
- Added server property management-server-tls-enabled controlling whether the Minecraft Server Management Protocol uses TLS or not
  - Defaults to true
- Added server property management-server-tls-keystore controlling the path to the keystore file used for TLS
  - Defaults to an empty string
  - A dedicated server won't start when TLS is enabled and no keystore is provided
- Added server property management-server-tls-keystore-password controlling the password to the keystore file used for TLS
  - Defaults to an empty string

### Game Rules

- Added spawnerBlocksEnabled game rule controlling if Spawner Blocks should be enabled or not
  - Defaults to true

### Mob Spawning

- Logic for choosing type of equipment for mobs spawning with equipment has been tweaked to add Copper as a possibility
  - The initial roll to choose a type now chooses between Leather, Copper and Gold
  - The chance to increase an armor tier has increased from 9.5% to 10.87%

### Sounds

- Some sound sliders in the Music & Sound Options now play a preview sound when adjusting the setting outside a world

### UI

- The Resource Pack and Data Pack selection screens now have a search box

## Technical Changes

- The Data Pack version is now 87.0
- The Resource Pack version is now 69.0
- Some previously hidden debug features have been exposed to players

### Debug features

- Some debug features that were previously removed during compilation are now preserved and can be used by players
- Individual values can be enabled with JVM properties:
  - First, a global debug flag must be enabled with -DMC_DEBUG_ENABLED or -DMC_DEBUG_ENABLED=true
  - Then, a specific feature can be enabled, for example -DMC_DEBUG_BRAIN or -DMC_DEBUG_BRAIN=true
  - To get the list of all available debug properties, add -DMC_DEBUG_PRINT_PROPERTIES
- Warning: this is debug code. Handle with extreme care!
  - This is an advanced feature, meant to help modders - it should not be used for normal play
  - Features not guaranteed to work as intended
  - It might crash your game or corrupt your worlds
  - Individual options might be added, changed or removed without a notice

## Data Pack Version 87.0

- Changed name of game rule enableCommandBlocks to commandBlocksEnabled

## Resource Pack Version 69.0

### Textures

- Moved the result slot of gui/container/villager.png up by one pixel

### Shaders & Post-process Effects

#### Shaders

- A new PER_FACE_LIGHTING flag has been added to the following shaders:
  - core/entity.vsh
  - core/entity.fsh
- When set, cardinal lighting will be computed separately for front- and back-faces
- As we now require OpenGL 3.3, we have bumped the version of all shaders from 150 to 330

## Fixed bugs in 25w37a

- [MC-220913](https://bugs.mojang.com/browse/MC-220913) - Parity issue: Adjusting slider in the sound settings when not being in a world does not play a sound of that category
- [MC-254052](https://bugs.mojang.com/browse/MC-254052) - /locate doesn't work outside build limit
- [MC-295841](https://bugs.mojang.com/browse/MC-295841) - Interactive collision check path is broken
- [MC-300076](https://bugs.mojang.com/browse/MC-300076) - Copper golems remain completely stationary while searching chests, causing them to float and making them unable to receive knockback or be pushed
- [MC-300077](https://bugs.mojang.com/browse/MC-300077) - Copper golems can interact with chests diagonally through solid blocks
- [MC-300299](https://bugs.mojang.com/browse/MC-300299) - Copper Golems can open chests that are blocked
- [MC-300723](https://bugs.mojang.com/browse/MC-300723) - Second armor layer is still not rendering properly on all pieces
- [MC-301294](https://bugs.mojang.com/browse/MC-301294) - Higher tiers of mob armor are unreasonably less common than they were before 25w31a
- [MC-301494](https://bugs.mojang.com/browse/MC-301494) - Falling particles no longer appear from floating sand or gravel
- [MC-301510](https://bugs.mojang.com/browse/MC-301510) - GUI sprites nine slice performance regression
- [MC-301531](https://bugs.mojang.com/browse/MC-301531) - Server Management Protocol returns wrong response for invalid method IDs
- [MC-301547](https://bugs.mojang.com/browse/MC-301547) - Switching from Spectator mode to Creative mode now makes you fall out of the sky
- [MC-301554](https://bugs.mojang.com/browse/MC-301554) - Management protocol doesn't support batched requests
- [MC-301558](https://bugs.mojang.com/browse/MC-301558) - Copper golems can't pathfind through thin blocks
- [MC-301563](https://bugs.mojang.com/browse/MC-301563) - When you have the darkness potion effect, the chat, letters and words in the pause menu, items, F3 will darken
- [MC-301564](https://bugs.mojang.com/browse/MC-301564) - Management protocol doesn't support string-based request IDs
- [MC-301574](https://bugs.mojang.com/browse/MC-301574) - The spawnMonsters game rule does not take effect when switched
- [MC-301593](https://bugs.mojang.com/browse/MC-301593) - Monsters can spawn from spawners with the "spawnMonsters" game rule set to false
- [MC-301599](https://bugs.mojang.com/browse/MC-301599) - Action key getting stuck on when entering an interface so you are unable to exit without it reopening instantly
- [MC-301620](https://bugs.mojang.com/browse/MC-301620) - Banner animation is not independent when two banners are rendered
- [MC-301661](https://bugs.mojang.com/browse/MC-301661) - Server Management Protocol prints some incorrectly formatted messages in the console
- [MC-301711](https://bugs.mojang.com/browse/MC-301711) - The name of the "enableCommandBlocks" game rule is inconsistent with Bedrock Edition
- [MC-301748](https://bugs.mojang.com/browse/MC-301748) - Striking a Lightning Rod with non-default oxidation level with Lightning keeps nearby redstone components powered
- [MC-301751](https://bugs.mojang.com/browse/MC-301751) - The client crashes when in the vicinity of a mannequin spawner
- [MC-301752](https://bugs.mojang.com/browse/MC-301752) - Mannequins with profile.model set to "wide" render as a Steve skin
- [MC-301754](https://bugs.mojang.com/browse/MC-301754) - The hand animation plays when right-clicking shelves with nothing in your hand
- [MC-301758](https://bugs.mojang.com/browse/MC-301758) - Shield model clips through shelves
- [MC-301759](https://bugs.mojang.com/browse/MC-301759) - Elements within the realms “Worlds” tab are not selected in order when using the TAB key
- [MC-301766](https://bugs.mojang.com/browse/MC-301766) - Heads and skulls appear too high when placed on shelf
- [MC-301768](https://bugs.mojang.com/browse/MC-301768) - Structure blocks frame is not displayed when in spectator mode
- [MC-301785](https://bugs.mojang.com/browse/MC-301785) - Squid ink particles are yellow
- [MC-301811](https://bugs.mojang.com/browse/MC-301811) - Loot from suspicious blocks does not render while brushing
- [MC-301833](https://bugs.mojang.com/browse/MC-301833) - Text of text_display entities is darker when "see_through" property is set to true
- [MC-301869](https://bugs.mojang.com/browse/MC-301869) - The specification for the minecraft:ip_bans server management method says it returns an array of players even though it returns an array of ip_ban objects
- [MC-301870](https://bugs.mojang.com/browse/MC-301870) - Command feedback for successful /ban and /ban-ip commands with no specified reason can't be sent to the client
- [MC-301889](https://bugs.mojang.com/browse/MC-301889) - Documented return type does not match for clear methods in server managment protocol
- [MC-301891](https://bugs.mojang.com/browse/MC-301891) - Server management method minecraft:bans/clear clears allowlist, not bans
- [MC-301899](https://bugs.mojang.com/browse/MC-301899) - The output slot in the trading GUI is misaligned with other slots
- [MC-301903](https://bugs.mojang.com/browse/MC-301903) - Dropped chests, including variants, are no longer translated upward
- [MC-301935](https://bugs.mojang.com/browse/MC-301935) - Chest placed on bottom of shelf despite the rest of the items arent
- [MC-301952](https://bugs.mojang.com/browse/MC-301952) - Conduit visual bug

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/9675164bd7a8ec5a876a05ac96637c77e9d82a24/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).

\
