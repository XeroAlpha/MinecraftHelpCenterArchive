---
title: Minecraft Beta & Preview - 1.21.80.28
date: 2025-04-15T15:21:53Z
updated: 2025-04-15T15:47:18Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/35868117841933-Minecraft-Beta-Preview-1-21-80-28
hash:
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-blocks: blocks
  user-content-bundles: bundles
  user-content-stability-and-performance: stability-and-performance
  user-content-realms: realms
  user-content-technical-updates: technical-updates
  h_01JRX0A2KWPMHK4W29YWN5HV2Y: stability-and-performance-1
  user-content-structures: structures
  user-content-experimental-features: experimental-technical-features
  user-content-graphical: graphical
---

**Posted:** 15 April 2025

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ) 
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta)  for detailed instructions

It's time for another Preview and Beta! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs at [bugs.mojang.com](https://bugs.mojang.com/).  
  
**Note:** The features outlined in today's article [Unleash Your Imagination](https://www.minecraft.net/en-us/article/unleash-your-imagination) are coming soon to Bedrock Beta & Preview.

 

## Features and Bug Fixes

### Blocks

- Dried Ghast blocks no longer generate with the "Drop 2 2025" experiment turned off ([MCPE-199218](https://bugs.mojang.com/browse/MCPE-199218))

### Bundles

- Empty open Bundle icon now renders correctly when Bundles are tapped with Touch Controls

### Stability and Performance

- Fixed bugs causing marketplace addon content to sometimes not load in a world

### Realms

- Realms Server Hosting Region Preference Selection:
  - Added a new "Advanced" tab to the Realms settings screen
  - In the advanced tab, Realm owners can select which datacenter region they would like to host their Realm in
  - Options include a list of regions, or allowing the Realms service to automatically select the best region for the Realm owner or the first player to join the Realm in a given session
  - Note that this selection is a preference only and due to server capacity, your Realm may be hosted in a different region than selected
  - In that case, the next closest region to your preference will be selected
  - Added a message during joining a Realm to indicate which server region your Realm is assigned to for that session
  - More information will be shared about Realms server hosting with the next full release
  - Known issue: The "set region help" help article has not been published yet, so that button will link to the Minecraft help site home page

## Technical Updates

### Stability and Performance

- Fixed a crash caused by buffer overrun in the data driven renderer when multiple values wrote to overlay color
- Fixed null pointer de-referencing crash in chunk rendering

### Structures

- Data-driven Jigsaw Structures have been put back behind the experimental toggle

## Experimental Technical Features

### Graphical

- Updated the format of "lighting/global.json" to include support for controlling the new End light flash in Vibrant Visuals. The "directional_lights" section now has two groups: "orbital", which contains the lighting information around the sun and moon, and "flash", which contains information about the End light flash. The "flash" section supports an "illuminance" field which controls the max illuminance of the End light flash, and a "color" field, which controls the color of the flash. Example JSON with this new format follows:

``` hljs
{
  "format_version": "1.21.80",
  "minecraft:lighting_settings": {
    "description": {
      "identifier": "minecraft:default_lighting"
    },
    "directional_lights": {
      "orbital": {
        "sun": {
          "illuminance": {
            "0.0": 1.0,
          },
          "color": {
            "0.0": [ 255, 255, 0 ]
          }
        },
        "moon": {
          "illuminance": {
            "0.0": 1.0,
          },
          "color": {
            "0.0": [ 0, 0, 255 ]
          }
        },
        "orbital_offset_degrees": 5.0
      },
      "flash": {
        "illuminance": 1.0,
        "color": [ 255, 0, 255 ]
      }
    },
    "emissive": {
      "desaturation": 0.2
    },
    "ambient": {
      "color": "#FFFFFF",
      "illuminance": 0.4
    },
    "sky": {
      "intensity": 0.8
    }
  }
}
```
