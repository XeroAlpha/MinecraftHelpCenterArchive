---
title: Minecraft Java Edition - Snapshot 25w35a
date: 2025-08-26T17:58:19Z
updated: 2025-09-09T11:09:02Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/39107188599565-Minecraft-Java-Edition-Snapshot-25w35a
hash:
  h_01K4Q2DE2MYVY4V68VYXFBN0HP: new-features
  h_01K4Q2DE2MB56X1MGXQ8FJSYNE: changes
  h_01K4Q2DE2MWED9MGE0PNW2EPBW: recipes
  h_01K4Q2DE2M40GCRHCYWC3BGX22: ui
  h_01K4Q2DE2M8DSBZ77MPYW0SZD3: mouse-cursor
  h_01K4Q2DE2M9479KZJSY1KQ455K: minor-tweaks-to-blocks-items-and-entities
  h_01K4Q2DE2MYSAYVMDMTDFTM66M: technical-changes
  h_01K4Q2DE2MBB9CNDHZZS0A92JV: server-properties
  h_01K4Q2DE2MT2CNXEPFAYJJ5QRZ: minecraft-server-management-protocol
  h_01K4Q2DE2M39BV6KK5WA11MXTK: data-pack-version-850
  h_01K4Q2DE2M07CJWSXTNM10VSD4: game-rules
  h_01K4Q2DE2M3K3HWBB71KB2GCQS: text-rendering
  h_01K4Q2DE2MGPFT0E49T5M9T772: objecttext-component
  h_01K4Q2DE2M5V96PV7171B3S860: atlasobject-type
  h_01K4Q2DE2MVCPAZWEMKMRYPAA6: playerobject-type
  h_01K4Q2DE2NWDW670BPT7DZ6Y00: resource-pack-version-670
  h_01K4Q2DE2NHXCJT2NBEX0W8RC0: block-sprites
  h_01K4Q2DE2NVQWEB192Z4PQGDMR: item-sprites
  h_01K3KRC86DW3Q0TA81X1Q8GGKP: fixed-bugs-in-25w35a
  h_01K3KRC86ZK3F6T42PPJ7RAVV5: get-the-snapshot
---

In this week's snapshot we are adding a Minecraft Server Management Protocol which lets servers query players, tweak game rules, update server settings, and listen for real-time server event notifications. Some server properties have been moved to game rules, allowing them to be updated while the server is running. Additionally, player icons can now be used in chat, the copper golem has received some improvements and we are shipping a bunch of bug fixes.

Happy mining!

## New Features

- Added Halychian language support

## Changes

### Recipes

- Hanging Signs can now only be crafted using Iron Chains

### UI

- When adding a new server to the server list, the name is no longer prefilled. When left empty the default name is used
- More text inputs now support selecting text by mouse dragging

#### Mouse cursor

- Some UI components will now change shape of mouse cursor
  - Examples: text inputs, numeric sliders, buttons, scroll bars
- Additionally, clickable parts of text labels (like links) will now change cursor to the "hand" shape
- This feature can be disabled with "Allow Cursor Changes" option in "Mouse Settings..." menu

### Minor Tweaks to Blocks, Items and Entities

- Copper Golem's hitbox has been tweaked
  - The hitbox is now 0.98 blocks in height to be able to path-find in one block high spaces
- Copper Chests created from spawning a Copper Golem now correctly connect to nearby Copper Chests
- The Copper Golem now uses the Saddle equipment slot for blocks placed atop of its Lightning Rod
  - Its Head equipment slot will now function like a regular head slot, akin to its functionality for humanoid mobs

## Technical Changes

- The Data Pack version is now 85.0
- The Resource Pack version is now 67.0
- Added Minecraft Server Management Protocol

### Server Properties

Several server properties were removed in favor of making them into game rules, allowing these settings to be changed while the server is running.

- Removed server property allow-nether in favor of new game rule
- Removed server property spawn-monsters in favor of new game rule
- Removed server property enable-command-block in favor of new game rule
- Removed server property pvp in favor of new game rule
- Added server property management-server-enabled controlling whether the new Minecraft Server Management Protocol is enabled or not
  - Defaults to false
- Added server property management-server-port controlling on what port the Minecraft Server Management Protocol is started
  - Defaults to 25585
- Added server property management-server-host controlling with what host the new Minecraft Server Management Protocol is started
  - Defaults to localhost
- Added server property status-heartbeat-interval controlling the interval the management server sends heartbeat notifications to connected clients
  - Defaults to 0, meaning it’s disabled

### Minecraft Server Management Protocol

Added a server management API (JSON-RPC over WebSocket) for dedicated servers

- The API is disabled by default and can be enabled in the server properties file
  - management-server-enabled=true
  - management-server-host=localhost
  - management-server-port=25585
- The API is accessible at ws://\<management-server-host\>:\<management-server-port\> when enabled
- Supports querying and updating of server state (players, allowlist, operators, settings, game rules)
- Sends notifications on state changes (e.g. player joins, game rule updates)
- Calling {"id":1,"method":"rpc.discover"} returns an API schema containing supported methods and notifications of the currently running server
- The Data Generator produces an API schema (json-rpc-api-schema.json) in the reports output folder mirroring the contents returned by the rpc.discover method
- The API adheres to the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification)
- Uses namespaced methods and the reserved namespaces are minecraft (e.g. minecraft:players, minecraft:allowlist/add) and notification (e.g. notification:players/joined)
  - Extensible via custom namespaces for additional methods and events
- Core method groups: players, allowlist, operators, server (save, stop), server settings, game rules
- Example method call:
  - Request: {"method":"minecraft:allowlist/add","id":1,"params":\[\[{"name":"jeb\_"}\]\]}
  - Response: {"jsonrpc":"2.0","id":1,"result":\[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb\_"}\]}
- Example notification:
  - {"jsonrpc":"2.0","method":"notification:players/joined","params":\[{"id":"853c80ef-3c37-49fd-aa49-938b674adae6","name":"jeb\_"}\]}
- Example error:
  - Request: {"method": "minecraft:foo/bar","id": 1}
  - Response: {"jsonrpc":"2.0","id":1,"result":{"jsonrpc":"2.0","id":1,"error":{"code":-32601,"message":"Method not found","data":"Method not found: minecraft:foo/bar"}}}
  - Errors and error codes follow [JSON-RPC 2.0 error object format](https://www.jsonrpc.org/specification#error_object)

## Data Pack Version 85.0

- Renamed chain to iron_chain

### Game Rules

- Added pvp game rule controlling whether players can deal damage to other players
  - Defaults to true
- Added allowEnteringNetherUsingPortals game rule controlling if the Nether can be entered through portals
  - Defaults to true
- Added spawnMonsters game rule controlling if monsters should spawn naturally
  - Defaults to true
- Added enableCommandBlocks game rule controlling if Command Blocks should be enabled or not
  - Defaults to true

### Text rendering

#### object Text Component

- This component has been updated to support displaying other non-character objects as a part of text
- New format:
  - object: type of object, string, see below for values
  - \<type-specific\>: additional fields depending on object type
- Similarly to nbt text component object field can be omitted
  - However, it's recommended to provide it for error checking

##### atlas Object Type

- Behaves the same way as the object component did previously, but is now a separate object type
- Uses the same format as before

##### player Object Type

- Renders player head
- If partial profile is given, skin is resolved in the same way as minecraft:profile component on player head
- Format:
  - player: player profile
    - name: player name, optional string
    - id: player uuid, optional UUID
    - properties: profile properties, optional map
  - hat: controls rendering of a hat layer, boolean, default true

## Resource Pack Version 67.0

### Block Sprites

Renamed the following block sprites:

- chain to iron_chain

### Item Sprites

Renamed the following item sprites:

- chain to iron_chain

 

## Fixed bugs in 25w35a

- [MC-278550](https://bugs.mojang.com/browse/MC-278550) - While flying in creative or spectator mode, the surface of water can prevent you from sprinting
- [MC-297126](https://bugs.mojang.com/browse/MC-297126) - "Failed to read field..." error spam when upgrading a 25w15a or 25w16a world
- [MC-300044](https://bugs.mojang.com/browse/MC-300044) - Z-fighting occurs when the heads of copper golems intersect their bodies
- [MC-300049](https://bugs.mojang.com/browse/MC-300049) - The debug text is rendered on top of the debug options
- [MC-300054](https://bugs.mojang.com/browse/MC-300054) - Double oxidized copper chest texture UV is missing pixels
- [MC-300067](https://bugs.mojang.com/browse/MC-300067) - Copper golems continue their chest searching animations while dying
- [MC-300074](https://bugs.mojang.com/browse/MC-300074) - No particles are produced when scraping oxidation off copper golems
- [MC-300077](https://bugs.mojang.com/browse/MC-300077) - Copper golems can interact with chests diagonally through solid blocks
- [MC-300089](https://bugs.mojang.com/browse/MC-300089) - Chests sometimes get stuck in inverted states after being interacted with by copper golems
- [MC-300102](https://bugs.mojang.com/browse/MC-300102) - Shelves float when held in the player's hand in third person
- [MC-300103](https://bugs.mojang.com/browse/MC-300103) - Removing items from a shelf uses the "Item placed" caption
- [MC-300119](https://bugs.mojang.com/browse/MC-300119) - Copper golems don’t always avoid dangerous blocks when pathfinding to chests
- [MC-300124](https://bugs.mojang.com/browse/MC-300124) - All the oxidation states of the lightning rod are listed in the redstone tab of the creative inventory
- [MC-300129](https://bugs.mojang.com/browse/MC-300129) - Copper golems can't put items into chests above them
- [MC-300173](https://bugs.mojang.com/browse/MC-300173) - The Copper Chest textures' diagonal glint direction doesn't match the large chest variants' on some sides
- [MC-300229](https://bugs.mojang.com/browse/MC-300229) - Z-fighting on antenna when putting certain blocks above a copper golem statue
- [MC-300267](https://bugs.mojang.com/browse/MC-300267) - The miniature mobs inside spawners and trial spawners are sometimes lit incorrectly
- [MC-300301](https://bugs.mojang.com/browse/MC-300301) - Shelves produce unusually high-resolution particles due to having a 32x32 texture
- [MC-300304](https://bugs.mojang.com/browse/MC-300304) - Comparators can stay active when measuring the pose of a copper golem statue block which is revived
- [MC-300462](https://bugs.mojang.com/browse/MC-300462) - Copper golems attached to leads still attempt to pathfind toward chests
- [MC-300501](https://bugs.mojang.com/browse/MC-300501) - Variants of copper chests are not included in the "Redstone Blocks" tab in the creative inventory whereas normal chests are
- [MC-300568](https://bugs.mojang.com/browse/MC-300568) - Copper golems don't open chests if given room to walk about
- [MC-300688](https://bugs.mojang.com/browse/MC-300688) - The iron chain's block/item ID is still "chain"
- [MC-300703](https://bugs.mojang.com/browse/MC-300703) - The underside of double copper chests does not use a merged texture
- [MC-300744](https://bugs.mojang.com/browse/MC-300744) - The copper and iron nuggets are inverted and arranged incorrectly in the Creative mode inventory
- [MC-300762](https://bugs.mojang.com/browse/MC-300762) - Copper golems require at least 3 blocks of space above a chest to place anything
- [MC-300797](https://bugs.mojang.com/browse/MC-300797) - The glowing effect causes entities to render incorrectly inside of inventories
- [MC-300827](https://bugs.mojang.com/browse/MC-300827) - Pressing F3+Q in certain screens does not show help, despite F3 suggesting it
- [MC-300977](https://bugs.mojang.com/browse/MC-300977) - Clocks function in the recipe book/villager/crafter UI
- [MC-301023](https://bugs.mojang.com/browse/MC-301023) - When a warden applies the darkness effect to you, the chat interface, item bar, and items become dark
- [MC-301025](https://bugs.mojang.com/browse/MC-301025) - End flash purplish light saturation is affected by brightness values
- [MC-301026](https://bugs.mojang.com/browse/MC-301026) - End flash purplish light becomes extremely saturated when the player is affected by darkness
- [MC-301048](https://bugs.mojang.com/browse/MC-301048) - In the "sitting" pose, the copper statue’s rod becomes shorter
- [MC-301101](https://bugs.mojang.com/browse/MC-301101) - Certain similar blocks are positioned differently on copper golems' heads
- [MC-301224](https://bugs.mojang.com/browse/MC-301224) - The first few stages of block cracks are not rendered on chests
- [MC-301225](https://bugs.mojang.com/browse/MC-301225) - Game crashes when quitting creating new world menu without other worlds created before
- [MC-301226](https://bugs.mojang.com/browse/MC-301226) - Block cracks no longer render on banners
- [MC-301228](https://bugs.mojang.com/browse/MC-301228) - Block cracks no longer render on heads and skulls
- [MC-301230](https://bugs.mojang.com/browse/MC-301230) - The word "resolve" is misspelled as "resolved" within the "commands.profile_fetch.id.failure" string
- [MC-301231](https://bugs.mojang.com/browse/MC-301231) - Enchanting table book animations are not independent
- [MC-301236](https://bugs.mojang.com/browse/MC-301236) - Enchantment glint is no longer visible on held tridents
- [MC-301242](https://bugs.mojang.com/browse/MC-301242) - Enchantment glint is no longer visible on shields
- [MC-301273](https://bugs.mojang.com/browse/MC-301273) - Clicking on the join server hover button now selects the server, unless any server is already selected
- [MC-301290](https://bugs.mojang.com/browse/MC-301290) - Game crashes when trying to render a glowing enchanted item
- [MC-301295](https://bugs.mojang.com/browse/MC-301295) - TTF font provider oversample increases width of characters
- [MC-301328](https://bugs.mojang.com/browse/MC-301328) - Glowing item entities briefly turn white upon pickup
- [MC-301339](https://bugs.mojang.com/browse/MC-301339) - Miniature mobs inside spawners always render fully lit

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/7fb6965adce075e4e6b467ca620f59c76c0f1e52/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
