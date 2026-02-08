---
title: Minecraft Beta & Preview - 1.21.30.24
date: 2024-08-21T15:11:47Z
updated: 2024-08-21T15:53:53Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/29461929917069-Minecraft-Beta-Preview-1-21-30-24
hash:
  user-content-experimental-features: experimental-features
  user-content-bundles: bundles
  user-content-features-and-bug-fixes: features-and-bug-fixes
  user-content-gameplay: gameplay
  user-content-realms: realms
  user-content-sounds: sounds
  user-content-stability-and-performance: stability-and-performance
  user-content-trial-chambers: trial-chambers
  user-content-user-interface: user-interface
  user-content-template-screen: template-screen
  user-content-vanilla-parity: vanilla-parity
  user-content-technical-updates: technical-updates
  user-content-add-ons-and-script-engine: add-ons-and-script-engine
  user-content-editor: editor
  user-content-items: items
  01J5TMY5ZP7M9XJEG4DSRARQWN: sounds-1
  user-content-experimental-technical-updates: experimental-technical-updates
  01J5TMY5ZPKJBY6S64RW6K71VF: gameplay-1
  user-content-graphical: graphical
---

**Posted:** 21 August 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![Sunny is holding a bundle and is standing in a village near a crafter setup with hoppers, with a bundle item on the ground.](https://feedback.minecraft.net/hc/article_attachments/29461929905677)

It's time for a new Minecraft Preview and Beta! We’d love your feedback on bundles, so please let us know what you think at [aka.ms/mcbundlesfeedback](https://aka.ms/mcbundlesfeedback), and report any bugs at [bugs.mojang.com](http://bugs.mojang.com/).

# Experimental Features

## Bundles

- Bundle recipe is now unlocked by obtaining Leather or String
- Bundle now has the correct animation when adding and removing items on touch screen devices 
- Moving a stack of multiple items into a Bundle now correctly moves any existing identical items to the top
- Undyed Shulker Boxes can no longer be placed inside Bundles ([MCPE-185477](https://bugs.mojang.com/browse/MCPE-185477))
- "Up" direction with gamepad's right-stick now correctly navigates in the Bundle's submenu
- The Bundle tooltip now fits 3 rows and can always show at least 8 item types

> **Developer's Note:** *Items fill up a Bundle in rows of four, and when a row is full it is pushed down by the row above. This means there can be empty spaces in the top row.\
> \
> In the previous 2020 Bundle experiment, items filled in from the top without leaving any gaps. We changed this behaviour because it meant that items moved left and right in the Bundle as new items were added. This made it more difficult for some players to keep track of the order of items and some even reported that the items were moving randomly!\
> \
> With only two rows in the tooltip, the behavior of pushing a full row of items further down the Bundle removed half of the visible items, which was too much. We're adding a third row to make the design work better and allow players to see more of the items in their Bundles as they fill up.*

- **Known Issue:** Bundles that are placed inside another Bundle may lose their contents when moved in and out of a Chest

# Features and Bug Fixes

## Gameplay

- Mobs equipped with Maces can now perform Smash attacks

## Realms

- The Realms backup list now displays the date that the backup was created, instead of the age of the backup

## Sounds

- Sculk charge particles now have sound
- Wither Skeleton now has its own "step" sound ([MCPE-174857](https://bugs.mojang.com/browse/MCPE-174857))

## Stability and Performance

- Fixed a crash that could occur when loading texture data ([MCPE-184728](https://bugs.mojang.com/browse/MCPE-184728))

## Trial Chambers

- Due to some unforeseen issues, we are reverting the Trial Chambers fixes which were introduced in the ([1.21.30.21](./Minecraft-Beta-Preview-1-21-30-21.md)) Bedrock Preview release
- However, the addition of the Hopper and Barrel setup will remain
- We aim to reintroduce these fixes in a future release, once the core issues has been resolved

> **Developer's Note:** *We are reverting these fixes to address some underlying issues that were creating a lot of errors in already generated Trial Chambers. While not an easy decision to make, we're doing this to avoid introducing any of these errors in your existing worlds that would risk breaking them.*

## User Interface

- Hardcore worlds will now show a gray border in the new Play and Edit World screens if the player has died in it  (Preview only)
- The icons for the effects will now change size depending on the GUI scale ([MCPE-180238](https://bugs.mojang.com/browse/MCPE-180238)) 
- Fixed an issue where the world seed template button may be missing in the Create New World screen

## Template Screen

We've introduced a new Template screen. Here’s what you can expect showing up over next couple of Previews:

- Create a world from a template
- All content related to templates divided into 3 tabs:
  - **Marketplace Pass tab:** a selection of templates that are included in the Marketplace Pass subscription
  - **Featured creators tab:** a curated selection of templates designed by Minecraft creators (with the option to discover even more in Marketplace).
  - **Owned by me tab**: All the templates you have purchased. From here you can create a world from a template and rate the template.
- **Search bar, filter and sort**: Quickly search through your templates with the search bar and refine the results with the filter and sort order.
- **Subscribe to the Marketplace Pass**: Discover all the contents of the pass and register easily.
- Please send us your feedback on these changes at [aka.ms/startfromtemplatefeedback](https://aka.ms/startfromtemplatefeedback)

## Vanilla Parity

- Players can now craft two Cyan Dye from one Pitcher Plant ([MCPE-171061](https://bugs.mojang.com/browse/MCPE-171061))
- Foxes now have 10 health ([MCPE-48233](https://bugs.mojang.com/browse/MCPE-48233))
- Villagers no longer make idle sounds when sleeping

# Technical Updates

## Add-Ons and Script Engine

- Fixed bug where all custom blocks were rotated 180 degrees in the UI
- The default for the "gui" "item_display_transforms" "rotation" field is `[30, 45, 0]` instead of `[30, 225, 0]`
  - "item_display_transforms": {\
    "gui" : {\
    "translation": \[0, 0, 0\],\
    "rotation": \[30, 45, 0\],\
    "scale": \[0.625, 0.625, 0.625\],\
    "rotation_pivot" : \[0, 0, 0\],\
    "scale_pivot" : \[0, 0, 0\],\
    "fit_to_frame" : true\
    }\
    }

## Editor

- Removed screenshot and profile buttons from editor project pause menu

## Items

- The minecraft:dyeable component is now exposed to creators

## Sounds

- Specifying an invalid sound event in a sounds.json file will now trigger a content error 

# Experimental Technical Updates

## Gameplay

- Focus Target Camera: Added rotation_speed in the free camera preset JSON to control the speed of rotation for targeting an entity. This value will be a float that represents degrees turned per second 
- Focus Target Camera: Added snap_to_target bool in the free camera preset JSON to enable snapping to the target entity on the first tick 

## Graphical

- SSR no longer leaks in wrong direction on Android devices with the Deferred Technical Preview enabled
