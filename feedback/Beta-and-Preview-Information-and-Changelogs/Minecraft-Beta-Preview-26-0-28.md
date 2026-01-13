---
title: Minecraft Beta & Preview - 26.0.28
date: 2026-01-13T14:21:10Z
updated: 2026-01-13T16:51:24Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/42634616536589-Minecraft-Beta-Preview-26-0-28
hash:
  h_01KEVVCRJYJ96D2TDS3PPZKW57: information-on-minecraft-preview-and-beta
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-gameplay: gameplay
  user-content-realms: realms
  user-content-sound: sound
  user-content-user-interface: user-interface
  user-content-settings: settings
  user-content-worlds: worlds
  user-content-technical-updates: technical-updates
  user-content-blocks: blocks
  user-content-editor: editor
  user-content-graphical: graphical
  user-content-experimental-technical-updates: experimental-technical-updates
  h_01KEVVCAVT1SMSC9NB1YMR2W1R: graphical-1
  h_01KEVVCAVVK919JMR2X9AHTRKP: user-interface-1
---

**Posted:** 13 January 2026

#### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).  
 

## Features and Bug Fixes

### Gameplay

- Fixed a rare crash when trying to breed animals

### Realms

- Fixed a freeze that could happen when buying a Realm on Nintendo Switch

### Sound

- Players can now hear the Nautilus riding sound at 16 blocks distance, and the sound volume is now lower

### User Interface

- Fixed a bug where global resource packs did not apply after leaving the settings screen. ([MCPE-233214](https://bugs.mojang.com/browse/MCPE-233214))
- Fixed a bug where the social settings screen softlocks the game upon any dropdown selection. ([MCPE-233215](https://bugs.mojang.com/browse/MCPE-233215))

### Settings

- Our settings have been been rebuilt using Ore UI and we are getting ready to ship these changes
  - Some settings are still in JSON UI and will be converted at a later stage 
  - While most of our work is just visual, we are making some smaller changes: 
    - For example, keybindings for macros and coordinates are now shown by default for all supported platforms under the keyboard and mouse settings tab
- Please provide your feedback regarding this work by heading over to [this feedback thread](https://feedback.minecraft.net/hc/en-us/community/posts/36960637452557-Let-s-talk-about-our-updated-settings-Bedrock)

### Worlds

- Fixed issue where worlds in the "Shared" folder could not be duplicated or exported. ([MCPE-231970](https://bugs.mojang.com/browse/MCPE-231970))

## Technical Updates

### Blocks

- Custom blocks intersecting with other blocks will have a better ambient occlusion

### Editor

- Added Chunk Management panel to World menu for regenerating or deleting chunks
- Adds a dynamic limit for selection volumes that limits the volume to 1,000,000 blocks. This allows for non-cube rectangular volumes larger than the previous 100x100x100 cube limit. A larger cube limit is still present at 1024x1024x1024
- Added Cinematic Tool for creating camera animation paths:
  - Create paths using control points with spline interpolation (Catmull-Rom or Linear)
  - In-game visualization of control points and spline paths with interactive gizmos
  - Play/stop animation preview for camera movement along the spline path
  - Export TypeScript code with validation for duplicate timestamps
- Added Flood Tool to Editor - a new tool for efficiently flooding or draining water and lava across large areas
- The Vibrant Visuals Settings panel now supports editing settings for each biome
- Blocks that leverage the `minecraft:connection` block trait now will connect when used in the Editor

### Graphical

- Fixed attachables not rendering correctly when the game is paused or when rendered in an NPC UI window

## Experimental Technical Updates

### Graphical

- Fixed a crash that can occur with specific blocks in worlds using the Render Dragon Features for Creators experiment
- Fixed a brief flash when removing lights when using static colored lighting
- Added Android/Playstation support for colored block lights in preview for Vibrant Visuals when "Render Dragon Features for Creators" experiment is enabled on world
- Baby tamed Wolf now has MERS maps

### User Interface

- When you're disconnected from a server, third-party and external servers will use the same design as the screen for other types of servers. The screen shows the message sent by the server more prominently
