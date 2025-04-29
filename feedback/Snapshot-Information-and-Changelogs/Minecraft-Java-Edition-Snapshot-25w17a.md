---
title: Minecraft Java Edition - Snapshot 25w17a
date: 2025-04-29T11:25:49Z
updated: 2025-04-29T11:25:53Z
categories: Snapshot Information and Changelogs
tags:
  - Java Edition
link: https://feedback.minecraft.net/hc/en-us/articles/36204280713997-Minecraft-Java-Edition-Snapshot-25w17a
hash:
  h_01JT0MJN5ZP3TS6X1FS85FZHDT: new-features
  h_01JT0MJN5Z3VQFH7SP5D7MMXJ8: locator-bar
  h_01JT0MJN5Z4QMKF19JFJ9Z358W: player-changes
  h_01JT0MJN5Z0361NZ7VKGT15XFY: item-changes
  h_01JT0MJN5Z3XH777Q2WK8J3Q3R: potion-changes
  h_01JT0MJN5ZHFXTWFTMMEWQ9PG4: changes
  h_01JT0MJN5ZPD2YBQ5R53W27GCF: realms
  h_01JT0MJN5ZXF4ENXGCXCC19ZVZ: technical-changes
  h_01JT0MJN60W24N2XTBYYN453KM: data-pack-version-74
  h_01JT0MJN607H9C1X50N0K3BBAX: commands
  h_01JT0MJN60HSK87XHW3B1S855C: addedwaypoint
  h_01JT0MJN60MQPP4S9EBEW75GN2: waypoint-styles
  h_01JT0MJN608SV3FJJH0EZ0CJ47: game-rules
  h_01JT0MJN60F8G7474M1X5GWJK1: addedlocatorbar
  h_01JT0MJN600J4C7E5N8788QJQ7: addedwaypoint_transmit_rangeandwaypoint_receive_range
  h_01JT0MJN60KWACHS1CMXVZ2M2N: waypoint-broadcasting
  h_01JT0MJN600XDX006FBF7JRRY0: tags
  h_01JT0MJN602W55ZDKXT0XZ36P8: block-tags
  h_01JT0MJN60TSY9HSWG9AQHDG04: resource-pack-version-58
  h_01JT0MJN60RF1Q1W7A2R7JTPB2: shaders--post-process-effects
  h_01JT0MJN6027ZBZPVHZ65GWK34: foguniform-block
  h_01JT0MJN602QJPQYAMBMFRFER4: fixed-bugs-in-25w17a
  h_01JT0MJN61V0Y3CCJZDVXE9JYE: get-the-snapshot
---

After a long weekend we are back with another snapshot! This week we are moving the locator bar out of experiments, try it out and continue to give us your feedback over at [feedback.minecraft.net](http://feedback.minecraft.net/). We have also made some improvements to the Realms UI including region selection for your world. Happy Mining!

## New Features

- Added an option to reduce the cloud range
- Added the Locator Bar, a new HUD element that shows the direction of other Players in multiplayer

### Locator Bar

The Locator Bar is a new default UI element that displays the direction of other players in the world.

If there are no other players in the world the experience bar will display as normal, otherwise if another player is in the world (and that player is not hiding) then the experience bar will appear when experience is gained, otherwise the Locator Bar will display in the same area.

- Multiplayer servers can toggle the Locator Bar with the locatorBar gamerule
- Players can hide by crouching, wearing a mob head or a Carved Pumpkin, or using a Potion of Invisibility
- Players in Spectator Mode are not visible on the Locator Bar
  - However, Spectating player are visible to each other
- Facing other players within a 120 degrees range will display those players as colored indicators on the Locator Bar
  - Other players that are above/below the screen will also display an up/down arrow with their indicator
  - The indicator will change to different sized icons depending on how far away the other Player is
  - Colored indicators are randomized for each player
    - Servers can modify the colors of indicators with the /waypoint command
      - eg: /waypoint modify @s color red to set an indicator to red
    - Players on a team will override their default indicator color with their team color

#### Player Changes

- Crouching will hide the player, preventing them from appearing on the Locator Bar of other players
- Spectators are only visible to other spectators on the Locator Bar

#### Item Changes

- The following items will hide players when worn in the head slot:
  - Carved Pumpkin
  - Skeleton Skull
  - Wither Skeleton Skull
  - Player Head
  - Zombie Head
  - Creeper Head
  - Dragon Head
  - Piglin Head

#### Potion Changes

- Using a Potion of Invisibility will also hide players from the Locator Bar

## Changes

- Improvements to the Realms configuration screen
- Introduced a Region Preference setting that allows for more granular control over in what region a Realm is started

### Realms

- Changed the layout of the Realms configuration screen to use tabs
  - A Worlds tab containing changes to any of the world slots, creating new worlds and changing their settings
  - A Players tab to manage the players that have access and their level of access to the Realm
  - A Subscription tab to manage the Realms subscription
  - A Settings tab to change the settings of the Realm
- Introduced a Region Preference setting that allows for more granular control over what region a Realm is started
- Changed wording for Close/Open Realm to Temporarily close/Reopen Realm

## Technical Changes

- The Data Pack version is now 74
- The Resource Pack version is now 58
- Added a Server-authoritative Waypoint broadcasting system for controlling the Locator Bar behavior for Players

## Data Pack Version 74

### Commands

#### Added waypoint

This is a new command for querying and modifying waypoints.

    waypoint list

    waypoint modify <entity-selector> color <color>
    waypoint modify <entity-selector> color hex <hex-color>
    waypoint modify <entity-selector> color reset
    waypoint modify <entity-selector> style <waypoint_style/resource>
    waypoint modify <entity-selector> style reset

Arguments:

- entity-selector: For selecting entities that are transmitting as waypoints (see waypoint_transmit_range attribute)
- color: Overrides the Locator Bar icon color for this waypoint
- hex \<hex-color\> arguments are in web format (RRGGBB)
  - Red is either hex F00 or hex FF0000
  - Cornflower blue is hex 6495ED
- style: For changing the icon spriteset and selection distances
  - set \<waypoint_style/resource\> changes the style to a specific asset under waypoint_style/
  - reset will restore the default icon behavior of the Locator Bar

#### Waypoint Styles

These define custom icons to be displayed on the Locator Bar and are within the waypoint_style/ asset directory.

The default implementation is as such:

    {
      "near_distance": 128,
      "far_distance": 332,
      "sprites": [
        "minecraft:default_0",
        "minecraft:default_1",
        "minecraft:default_2",
        "minecraft:default_3"
      ]
    }

- near_distance and far_distance are optional and default to the values 128 and 332 respectively.
  - far_distance distance must be greater than near_distance
- Each sprite is searched within the prefix of hud/locator_bar_dot/ (the directory textures/gui/sprites/hud/locator_bar_dot).

### Game Rules

#### Added locatorBar

- Default is true: enabling the Locator Bar
- Changing to false will remove all existing Waypoints from all players
- The Game Rule has been renamed from useLocatorBar during the experiment. This may break minor command related features in worlds created in the previous snapshot.

#### Added waypoint_transmit_range and waypoint_receive_range

- Default: 0.0, Minimum: 0.0, Maximum: 60000000.0
- Players have a default transmission and receive range of 60,000,000
- Mobs with a transmission range above zero will send waypoint packets to nearby receivers that are within that range
- Similarly, receivers only receive waypoints that are inside their receive range (and receive nothing if that range is zero)

Examples:

- /attribute @s minecraft:waypoint_transmit_range base set 0 will prevent a player from transmitting (hiding them)
- /attribute @s minecraft:waypoint_transmit_range base set 80 will only let a player transmit up to 80 blocks (hiding them from players further than that)
- /attribute @s minecraft:waypoint_receive_range base set 0 will prevent a player from receiving (turns off their Locator Bar)
- /attribute @s minecraft:waypoint_receive_range base set 120 will only let a player see Locator Bar dots that are within 120 blocks (hiding all players further than that)

### Waypoint Broadcasting

The Locator Bar works by a server-controlled Waypoint system. Waypoints are received by Players, and connections between Waypoints and Players are managed by the multiplayer server.

- By default, all Players transmit a Waypoint from themselves, and all Players receive all Waypoints
- Individual Players can have their transmission and receive ranges controlled by the waypoint_transmit_range and waypoint_receive_range attributes

### Tags

#### Block Tags

- Added happy_ghast_avoids - blocks that happy ghasts avoid getting close to
- Added triggers_ambient_dried_ghast_block_sounds - blocks that can trigger ambient Dried Ghast sounds to play when a Dried Ghast block is placed on them

## Resource Pack Version 58

### Shaders & Post-process Effects

#### Fog Uniform Block

- FOG_IS_SKY has been removed in favour of splitting up the sky shader

## Fixed bugs in 25w17a

- [MC-240121](https://bugs.mojang.com/browse/MC-240121) - "1x1_b5.nbt" piece does not generate in woodland mansions
- [MC-296369](https://bugs.mojang.com/browse/MC-296369) - Dispensers cannot equip harnesses onto happy ghasts
- [MC-296421](https://bugs.mojang.com/browse/MC-296421) - Right-clicking a happy ghast equipped with a harness while crouching will play hand animation
- [MC-296438](https://bugs.mojang.com/browse/MC-296438) - The "display" field on Attribute Modifiers is not optional, despite the changelog saying it is
- [MC-296443](https://bugs.mojang.com/browse/MC-296443) - Happy ghasts don’t avoid pathfinding into dangerous blocks
- [MC-296511](https://bugs.mojang.com/browse/MC-296511) - Gamemode Switcher icons become invisible when using resource pack with opaque or translucent selection.png
- [MC-296516](https://bugs.mojang.com/browse/MC-296516) - Tooltips are incorrectly rendered below nearby elements when holding your mouse cursor over players that are online on realms
- [MC-296538](https://bugs.mojang.com/browse/MC-296538) - Rarity of Dried Ghast is inconsistent with its crafting ingredients
- [MC-296542](https://bugs.mojang.com/browse/MC-296542) - Waypoints on locator bar do not adjust to 3rd person front camera
- [MC-296567](https://bugs.mojang.com/browse/MC-296567) - Waypoints on locator bar do not respect team colors
- [MC-296583](https://bugs.mojang.com/browse/MC-296583) - Applying the waypoint_transmit_range attribute to an entity at the same time it is summoned makes it not show on the locator bar
- [MC-296750](https://bugs.mojang.com/browse/MC-296750) - The game crashes after startup on some systems (predominantly Linux systems) with AMD graphics
- [MC-296755](https://bugs.mojang.com/browse/MC-296755) - Resource Packs: The panorama overlay now renders in front of everything in the title screen
- [MC-296756](https://bugs.mojang.com/browse/MC-296756) - Clouds do not render at render distance 2 & 3
- [MC-296764](https://bugs.mojang.com/browse/MC-296764) - The text cursor renders behind command auto-complete text
- [MC-296766](https://bugs.mojang.com/browse/MC-296766) - GUIs of rideable mobs are missing their slots as of 25w16a
- [MC-296770](https://bugs.mojang.com/browse/MC-296770) - Strikethrough text in the villager interface is rendered behind characters
- [MC-296774](https://bugs.mojang.com/browse/MC-296774) - Player messages within the "Select Chat Messages to Report" menu aren’t rendered while selected
- [MC-296775](https://bugs.mojang.com/browse/MC-296775) - Some elements within the "Select Chat Messages to Report" menu are rendered darker while player messages are selected
- [MC-296777](https://bugs.mojang.com/browse/MC-296777) - Lead shift right-clicking doesn't work on Boats with Chests
- [MC-296779](https://bugs.mojang.com/browse/MC-296779) - The social interactions menu is rendered darker than normal
- [MC-296782](https://bugs.mojang.com/browse/MC-296782) - Player models within the “Report Player Skin” menu are rendered darker and lower than normal
- [MC-296794](https://bugs.mojang.com/browse/MC-296794) - Furnaces, blast furnaces, and smokers sometimes do not show the burn progress and lit progress animations
- [MC-296805](https://bugs.mojang.com/browse/MC-296805) - The game crashes when holding your mouse cursor over players that are online on realms
- [MC-296806](https://bugs.mojang.com/browse/MC-296806) - Cloud rendering has a considerable impact on performance as of 25w16a
- [MC-296807](https://bugs.mojang.com/browse/MC-296807) - The titles of selected tabs within the "Create New World" menu are rendered behind the background
- [MC-296808](https://bugs.mojang.com/browse/MC-296808) - The titles of lists within the resource pack and data pack menus are rendered behind the background
- [MC-296984](https://bugs.mojang.com/browse/MC-296984) - The "No pending invites!" text within the realms invitation menu is rendered behind the background

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/575756f90e54e5c2cd78997dd9e3579936aa9d6d/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
