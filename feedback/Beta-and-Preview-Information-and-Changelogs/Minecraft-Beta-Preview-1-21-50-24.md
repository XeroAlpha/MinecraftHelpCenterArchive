---
title: Minecraft Beta & Preview - 1.21.50.24
date: 2024-10-17T14:28:52Z
updated: 2024-10-17T15:43:25Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31137892416269-Minecraft-Beta-Preview-1-21-50-24
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-winter-drop-features: winter-drop-features
  user-content-pale-garden: pale-garden
  user-content-creaking-heart: creaking-heart
  user-content-accessibility: accessibility
  user-content-blocks-%26-items: blocks--items
  user-content-gameplay: gameplay
  user-content-graphical: graphical
  user-content-items: items
  user-content-realms: realms
  user-content-realm-events: realm-events
  user-content-sounds: sounds
  user-content-user-interface: user-interface-1
  user-content-technical-updates: technical-updates
  user-content-api: api-1
  01JADC7EB21289JGS5TDCMVMGK: blocks
  user-content-editor: editor
  user-content-experimental-technical-updates: experimental-technical-updates
  user-content-scripting: scripting
---

**Posted:** 17 October 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta ](https://aka.ms/JoinMCBeta)for detailed instructions

![A Pale Garden with a small base setup with pale oak wood. The is a Creaking just visible in the background.](https://feedback.minecraft.net/hc/article_attachments/31137863479565)

It's time for a new Preview and Beta! As always, we’re keen to get your feedback on these new features at [aka.ms/mcgamedropfeedback](https://aka.ms/mcgamedropfeedback), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/)! Here's what's new this week:

# Features and Bug Fixes

## Winter Drop Features

### Pale Garden

- Tweaked the size and placement of Pale Moss patches

  - Pale Moss patches are now larger when naturally generated
  - Pale Moss patches now have a chance to naturally generate without being adjacent to a Pale Oak
  - Pale Moss patches now have less Tall Grass growing on them

- Increased Pale Oak density to match Java edition

- Flowers and Mushrooms no longer generate in the biome

- While in the biome, the sky is now completely gray instead of blue at the horizon ([MCPE-187291](https://bugs.mojang.com/browse/MCPE-187291))

- The color of the Stripped Pale Oak Log is now brighter, matching the rest of the woodset ([MCPE-187289](https://bugs.mojang.com/browse/MCPE-187289))

- Pale Oak Saplings now grow into Pale Oaks with Hanging Pale Moss on them, but no Pale Moss patch at their base

- The Pale Oak Sign UI no longer has a missing pixel in the upper left corner ([MCPE-187304](https://bugs.mojang.com/browse/MCPE-187304))

- The textures of the Pale Oak Sign and Pale Oak Hanging Sign items have been adjusted for consistency with other items in the woodset ([MCPE-187294](https://bugs.mojang.com/browse/MCPE-187294))

- The texture of the Pale Oak Boat with Chest item has been adjusted for consistency with other Boats with Chest

- Pale Moss Carpet no longer floats in the player’s hand while in 3rd-person view

### Creaking Heart

- Creaking Heart with a spawned Creaking and partial Pale Oak support now deactivates if the Creaking is despawned via commands

- Creaking Heart data is no longer retained when ctrl-picking the block in Creative Mode

- Creaking Heart is now immovable by Pistons

- Creaking Heart can no longer be used as fuel

- Creaking Heart spawning and despawning its Creaking now emits vibrations from the Creaking’s position

## Accessibility

- Fixed an issue with Haptic feedback on iOS ([MCPE-145524](https://bugs.mojang.com/browse/MCPE-145524))

## Blocks & Items

> **Developer's Note**: We've fixed several issues where the tool used to mine some blocks didn't affect the drop or mining speed correctly. Related to these changes, any block that drops when its support is broken will also drop when mined with any tool.

- The following blocks now only drop when broken with a pickaxe: Blast Furnace, Cauldron, Dispenser, Dropper, Enchanting Table, Furnace, Hopper, and Smoker ([MCPE-33950](https://bugs.mojang.com/browse/MCPE-33950))

- The following blocks that require support now always drop when broken with any tool: all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate

- Budding Amethyst is now slower to mine with an improper tool

- The following blocks (which always drop) are now mined faster when using the incorrect tool: Bell, Brewing Stand, Crafter, Ender Chest, Lantern, and Soul Lantern. Note that the Ender Chest is considered an 'always drops block' even though the drop is not an Ender Chest ([MCPE-176374](https://bugs.mojang.com/browse/MCPE-176374))

## Gameplay

- The kill command or any damage greater or equal to the target's current life will now kill it in base game versions below 1.18.20

- Zombified Piglins spawned by Nether Portals now have a 15-second cooldown before they can use the Portal again

## Graphical

- Textures with multiple variations will now load PBR texture data ([MCPE-174191](https://bugs.mojang.com/browse/MCPE-174191))

## Items

- Updated Heavy Core's item texture 

## Realms

- Added a loading modal when changing active realms slots to prevent a glitch where multiple Realms Slot Settings Screen are pushed to the stack because of player's button mashing the Edit World button

- Fixed issue where game mode and difficulty were not being preserved after uploading or replacing world in Realms Slot.

### Realm Events

- Added a new Realm Event related to mobs.

## Sounds

- Adjusted volume & pitch for break, hit, place, fall, step & land sounds for the Amethyst Block

## User Interface

- Tweaked position of paper doll to not overlap with UI bars ([MCPE-186341](https://bugs.mojang.com/browse/MCPE-186341))

- Mobile devices: Going into windowed/split-screen mode no longer overwrites saved positions of customized controls ([MCPE-185964](https://bugs.mojang.com/browse/MCPE-185964))

- Thai font rendering improvements for chat and signs. ([MCPE-166005](https://bugs.mojang.com/browse/MCPE-166005))

- Removed the "New Bed Screen" toggle from video settings. (Preview only)

- Added missing quickswap animations in GUI for several blocks

- Bundles that are moved under a player's cursor now correctly update their tooltip

# Technical Updates

## API

- Added `beforeEvents` object to `@minecraft/server-net` module version `1.0.0-beta` which exposes two events
  - `packetReceive`: This event is called when the game server receives a network packet from a client. If cancelled, the server will silently ignore the packet.
  - `packetSend`: This event is called when the game server sends a network packet to client(s). If cancelled, the packet is dropped and never sent to the recipients.

## Blocks

- Added new field `"ambient_occlusion_exponent"` to blocks.json file schema in resource packs, replaces broken `"brightness_gamma"` field.

## Editor

- Fix a bug preventing the Quick Panel from being draggable using the drag icon on the header

- Fix a bug that caused the dropdown menu to open with an incorrect position inside a scrollable pane

- Added overflow handling for menu bar to collapse overflowing items into a menu and improved submenus to fit within window bounds

- Improved persistent settings storage. The editorOptions.txt file is now located in the editor subfolder in the same AppData directory.

- Improved viewport focus visibility with an animated outline on focus and added focused state as a step for Toggle Mode (CTRL + TAB)

- Added `focusToolInputContext` function to `IModalToolContainer` which will try to set modal input focus (e.g. viewport for tool rail)

## User Interface

- Fixed a spelling error in an advanced tip for worlds with resource packs

# Experimental Technical Updates

## API

- Added new method `lookAt` to `Entity` which sets the rotation of the entity to face the desired target location.

## Scripting

- Enum `InputMode`.
  - Removed `Undetermined` entry.
- Class `InputInfo`.
  - Throws `EngineError` instead of `Error` in case of internal error.