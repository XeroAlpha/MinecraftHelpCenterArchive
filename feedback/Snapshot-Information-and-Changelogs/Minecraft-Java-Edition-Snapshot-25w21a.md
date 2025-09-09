---
title: Minecraft Java Edition - Snapshot 25w21a
date: 2025-05-20T14:22:10Z
updated: 2025-09-09T11:18:15Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/36754909562509-Minecraft-Java-Edition-Snapshot-25w21a
hash:
  h_01K4Q34NHWG1WSTJ9A3G79JGKH: new-features
  h_01K4Q34NHW9X384G01CCFT9XHT: music-and-sound
  h_01K4Q34NHW3ZB33HX0R5C89W9K: technical-changes
  h_01K4Q34NHWR5A8B004DP4V75FC: data-pack-version-78
  h_01K4Q34NHW0JW0S9HR3B2QZ2XA: dialogs
  h_01K4Q34NHXGB1VM4QZSP3AT7SE: minecrafttextinput-control
  h_01K4Q34NHXCWYCX0GP2HYEF9NE: minecraftnumber_rangeinput-control
  h_01K4Q34NHXGBVN26W4XYBZ4GNV: minecraftmulti_action_input_formdialog-type
  h_01K4Q34NHXNC316E8PY2Y9NQJX: resource-pack-version-62
  h_01K4Q34NHXTMCRS2BZ7YJREKM3: sounds
  h_01JVQ13GTWSYC0P94A90AKTXGW: fixed-bugs-in-25w21a
  h_01JVQ13GTW9MD9BHJGYNTHHXAY: get-the-snapshot
---

Summer is finally here in Stockholm on this fine Snapshot Tuesday - but it seems some of our developers missed those beautiful, gray, rainy skies far too much and absolutely insisted on giving the clouds in Minecraft a new look. What a de-light!

## New Features

- Updated the pattern of clouds in the sky
- Horses, Donkeys, and Mules can now be fed carrots to heal, grow, and improve their temper

### Music and Sound

- Added a new sound for when a Lead snaps
- Added new custom sounds for shearing Saddles, Horse Armor, and Carpets from Llamas

## Technical Changes

- The Data Pack version is now 78
- The Resource Pack version is now 62

## Data Pack Version 78

### Dialogs

- run_command click actions will now correctly close dialogs and book screens even if the command does not require elevated permissions
- Dialogs should now correctly return to the previous non-dialog screen on close in all cases
- If a new dialog is received by the client while warning screen is visible, it will not replace it, but when user clicks the "Back" button, the new dialog will be restored instead
- The sizes of elements in dialogs are now restricted:
  - buttons - between 1 and 1024 (inclusive)
  - minecraft:plain_message dialog body - between 1 and 1024 (inclusive)
  - minecraft:item dialog body
    - width of description - between 1 and 1024 (inclusive)
    - width - between 1 and 256 (inclusive)
    - height - between 1 and 256 (inclusive)
  - minecraft:text input control - between 1 and 1024 (inclusive)
  - minecraft:single_option input control - between 1 and 1024 (inclusive)
  - minecraft:number_range input control - between 1 and 1024 (inclusive)

#### minecraft:text Input Control

- max_length - maximum length of input, positive integer with default of 32
- multiline - if present, allows users to input multiple lines, optional object with fields:
  - max_lines - if present, limits maximum lines, optional positive integer
  - height - height of input, optional integer in range 1 to 512
    - If this field is omitted, but max_lines is present, the height will be chosen to fit the maximum number of lines
    - If this and max_lines are both omitted, it will default to a height that fits 4 lines

#### minecraft:number_range Input Control

- The steps field has been replaced with a new field:
  - step - step size, optional positive float
    - If present, only values of initial + \<any integer\> \* step will be allowed
    - If absent, any value from range the is allowed
- initial - if not specified, now defaults to the middle of the range

#### minecraft:multi_action_input_form Dialog Type

- Added new field columns - positive integer describing number of columns, default: 2

## Resource Pack Version 62

### Sounds

- Added entity/leashknot/break for when a Lead snaps
- The following sounds have been renamed:
  - entity/leashknot/break1 -\> entity/leashknot/unleash1
  - entity/leashknot/break2 -\> entity/leashknot/unleash2
  - entity/leashknot/break3 -\> entity/leashknot/unleash3
  - entity/leashknot/place1 -\> entity/leashknot/leash1
  - entity/leashknot/place2 -\> entity/leashknot/leash2
  - entity/leashknot/place3 -\> entity/leashknot/leash3
- The following sounds have been added for shearing Saddles, Horse Armor, and Carpets from Llamas
  - mob/horse/armor_unequip
  - mob/horse/saddle_unequip
  - mob/llama/unequip

 

## Fixed bugs in 25w21a

- [MC-36696](https://bugs.mojang.com/browse/MC-36696) - Clicking on the statistics button on the menu screen advances the game by 1 tick
- [MC-112730](https://bugs.mojang.com/browse/MC-112730) - Beacon beam and structure block render twice per frame
- [MC-236464](https://bugs.mojang.com/browse/MC-236464) - Beacon beams emitted from below the player are invisible after reloading chunks
- [MC-258336](https://bugs.mojang.com/browse/MC-258336) - Frost Walker causes frequent visual corruption near chunk borders on Threaded and Semi-Blocking Chunk Builder
- [MC-296337](https://bugs.mojang.com/browse/MC-296337) - Minecarts cause memory usage increases and crashes
- [MC-297264](https://bugs.mojang.com/browse/MC-297264) - Cat breeds are not seed based anymore
- [MC-297336](https://bugs.mojang.com/browse/MC-297336) - Experience orbs from thrown bottles o' enchanting are very prone to getting stuck inside blocks when thrown against a corner
- [MC-297615](https://bugs.mojang.com/browse/MC-297615) - Untranslatable error message when trying to join a closed Realm
- [MC-297803](https://bugs.mojang.com/browse/MC-297803) - The string "menu.custom_screen_info.contents" misspells "personal" as "pesonal"
- [MC-297806](https://bugs.mojang.com/browse/MC-297806) - music.game.swamp.labyrinthine misspells the song's title
- [MC-297808](https://bugs.mojang.com/browse/MC-297808) - music.game.oxygene is missing the grave accent sign
- [MC-297812](https://bugs.mojang.com/browse/MC-297812) - Bold text is rendered differently than in previous versions
- [MC-297813](https://bugs.mojang.com/browse/MC-297813) - Amos Roddy is not listed in the credits
- [MC-297823](https://bugs.mojang.com/browse/MC-297823) - music.game.mice_on_venus is using wrong capitalization
- [MC-297845](https://bugs.mojang.com/browse/MC-297845) - Clicking the Statistics button in Singleplayer does not play the button click sound until you resume playing
- [MC-297846](https://bugs.mojang.com/browse/MC-297846) - The music toast flashes in the pause menu when the Music slider is set to zero
- [MC-297875](https://bugs.mojang.com/browse/MC-297875) - Text shadow from underlined text overlaps the text below it in chat messages
- [MC-297888](https://bugs.mojang.com/browse/MC-297888) - Text no longer renders in a consistent order across different fonts
- [MC-297917](https://bugs.mojang.com/browse/MC-297917) - The client stops responding when showing a dialog with an extremely wide button
- [MC-297977](https://bugs.mojang.com/browse/MC-297977) - Dialog columns layout has extra spacing between the grid and the overflow linear layout

## Get the Snapshot

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/content/minecraft-net/language-masters/download) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/a5f7be5d2f05250abfc49639a26f399b8a8ebb61/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions, head over to the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
