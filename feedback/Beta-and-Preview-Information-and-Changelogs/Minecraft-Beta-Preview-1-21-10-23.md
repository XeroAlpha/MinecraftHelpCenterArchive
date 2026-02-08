---
title: Minecraft Beta & Preview - 1.21.10.23
date: 2024-06-01T08:55:54Z
updated: 2024-06-11T23:05:19Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/27211163694861-Minecraft-Beta-Preview-1-21-10-23
hash:
  h_01J04RJ2KRCJNNKPXM4YM2EN0F: features-and-bug-fixes
  h_01J04RJ2KRQERT77RSD0TWSG9Z: blocks
  h_01J04RJ2KRWG2M0M7X7B9DY7H6: chat
  h_01J04RJ2KR0EW07P85WHPSYZJD: commands
  h_01J04RJ2KRT22SP56FEC8W7MWQ: mobs
  h_01J04RJ2KRC4094P7Q68J66S7E: wind-charge
  h_01J04RJ2KRFBW8DH3YHF0RCXTA: user-interface
  h_01J04RJ2KRRR3Z4Q9F9VFYCF3E: technical-updates
  h_01J04RJ2KRY718P62JEJ7SY3DJ: add-ons-and-script-engine
  h_01J04RJ2KRMBVP9DTJDZMTN4P2: api
  h_01J04RJ2KR5WR268EN1MWGF8R4: molang
  h_01J04RJ2KRSK5C22S3KREEACYD: experimental-technical-updates
  h_01J04RJ2KRD4JJEYH5TQCGVXDC: api-1
  h_01J04RJ2KSDZBHWCZ7EK0ATJFG: blocks-1
  h_01J04RJ2KSTQND7DJA12QWH2YB: editor
---

**Posted:** 12 June 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

Here’s what’s new in the latest Minecraft: Bedrock Edition Beta and Preview update! Please keep sending in any suggestions you have at [feedback.minecraft.net](https://feedback.minecraft.net/), and please report and upvote any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/)!\
\

# **Features and Bug Fixes:**

## **Blocks**

- Copper Doors now follow the intended design of only dropping when mined with a Stone Pickaxe or better
- Doors no longer drop when top block is mined in Creative mode
- Smooth Quartz Slab’s texture is back to normal ([MCPE-182104](https://bugs.mojang.com/browse/MCPE-182104))
- Added break, fall, hit, jump, land, place, and step sounds for the Mob Spawner block

## **Chat**

- Fixed the message that appears when using the ‘Copy Coordinates’ feature to copy player coordinates to the clipboard ([MCPE-182146](https://bugs.mojang.com/browse/MCPE-182146))

## **Commands**

- Fixed a bug where the /spreadplayers command could result in the target being teleported one block below the intended location
- Added a *Max Height* parameter to the /spreadplayers command, which allows you to specify a maximum height that the spreading is done underneath

## **Mobs**

- Wolves, Bears, and Pandas will panic and try to avoid danger when damaged by environmental sources, eg: fire, lava, freezing

## **Wind Charge**

- Wind charges now work the same on all terrain
- Crouching no longer affects wind charge knockback / jump amount
- Wind charges used by the player aimed straight down now knock the player upward ~6 blocks instead of ~2.5
- Latency related fall damage when using a Wind Charge will occur less often
- The launch position of the Wind Charge has been adjusted so it no longer fires too far from the player

## **User Interface**

- Fixed a bug where the unread badge for the Realms Stories button on the Pause Screen did not update
- Safe Zone Screen position now saves properly on closing the menu
- Safe Zone Screen text no longer is obscured when you hover over it
- Safe Zone Screen sliders now properly save even when the value is changed by just 0.1
- Safe Zone Screen Position sliders now properly reset and rescale based on the Scale sliders
- Safe Zone Screen no longer errors on IOS when set to minimum values
- Fixed tags showing up vertically in Marketplace item descriptions
- Fixed missing texture in My Content section of Marketplace ([MCPE-181964](https://bugs.mojang.com/browse/MCPE-181964))
- Game tips now appear and disappear from the screen with “fade-in” and “fade-out” animations
- Replaced Marketplace Pass gradient with solid gray to improve readability\
  \

# **Technical Updates:**

## **Add-Ons and Script Engine**

- Fixed an issue where particle effect lifetime event timeline did not trigger events as expected

## **API**

- Fixed an issue where a warning would incorrectly appear when reloading item custom components
- EntityTameMountComponent
  - Moved method *tameToPlayer* and readonly properties *tamedToPlayerId*, *tamedToPlayer*, *isTamed*, *isTamedToPlayer* from *beta* to *1.12.0*
- Released *runJob* method on *System* from *beta* to *1.12.0*
- Released *clearJob* method on *System* from *beta* to *1.12.0*
- Released *waitTicks* method on *System* from *beta* to *1.12.0*
- @minecraft/server-ui
  - Released version *1.2.0*
  - Added new *beta* version *1.3.0*
  - Released *submitButton* method on *ModalFormData* from *beta* to *1.2.0*

## **Molang**

- Fixed Molang content errors to include the expression in the logged message\
  \

# **Experimental Technical Updates:**

## **API**

- *WorldInitializeBeforeEvent*
  - Renamed property *blockTypeRegistry* to *blockComponentRegistry*
- Moved *BlockComponentRegistry* from *beta* to *1.12.0*
- Moved *BlockCustomComponentAlreadyRegisteredError* from *beta* to *1.12.0*
- Moved *BlockCustomComponentReloadVersionError* from *beta* to *1.12.0*
- Moved *BlockCustomComponentReloadNewEventError* from *beta* to *1.12.0*
- Moved *BlockCustomComponentReloadNewComponentError* from *beta* to *1.12.0*
- Moved *BlockCustomComponent* from *beta* to *1.12.0*
- Moved *BlockComponentStepOnEvent* from *beta* to *1.12.0*
- Moved *BlockComponentTickEvent* from *beta* to *1.12.0*
- Moved *BlockComponentRandomTickEvent* from *beta* to *1.12.0*
- Moved *BlockComponentEntityFallOnEvent* from *beta* to *1.12.0*
- Moved *BlockComponentStepOffEvent* from *beta* to *1.12.0*
- Moved *BlockComponentPlayerInteractEvent* from *beta* to *1.12.0*
- Moved *BlockComponentPlayerPlaceBeforeEvent* from *beta* to *1.12.0*
- Moved *BlockComponentPlayerDestroyEvent* from *beta* to *1.12.0*
- Moved *BlockComponentOnPlaceEvent* from *beta* to *1.12.0*
- Added four new error class types used for custom block component registration
  - *ScriptBlockCustomComponentAlreadyRegisteredError* - When registering a custom block component and it has already been registered
  - *ScriptBlockCustomComponentReloadVersionError* - When registering a custom block component with a different script version between reloading
  - *ScriptBlockCustomComponentReloadNewEventError* - When registering a custom block component and it implements a new event between reloading
  - *ScriptBlockCustomComponentReloadNewComponentError* - When registering a custom block component between reloading
- Added *Block::getMapColor* binding to Script Block API (Beta)

## **Blocks**

- *minecraft:custom_components* no longer requires the Beta APIs experiment
- *minecraft:entity_fall_on* no longer requires the Beta APIs experiment
- *minecraft:tick* no longer requires the Beta APIs experiment

## **Editor**

- Matches caret color to font default color in built-in UI themes
