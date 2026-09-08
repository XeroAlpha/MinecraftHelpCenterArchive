---
title: Minecraft Beta & Preview - 26.60.22/23
date: 2026-09-08T14:26:58Z
updated: 2026-09-08T16:05:09Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/48740748263565-Minecraft-Beta-Preview-26-60-22-23
hash:
  h_01KNPK0P63JGFQT6KG30RZEDW7: information-on-minecraft-preview-and-beta
---

**Posted:** 8 September 2026

### **Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

It's time for another Preview and Beta release! For the full list of goodies, browse the changelog below. And as always, we’re keen to get your feedback on these new features at [feedback.minecraft.net](https://feedback.minecraft.net/), and you can report any bugs you find at [bugs.mojang.com](https://bugs.mojang.com/).

# Features and Bug Fixes

## Accessibility Features

- Fixing enumeration problems with controller on various modals on Realms

- Fixing Realm rate limit modal not being enumerated

- Fixing close X button on moderation feed options modal not being enumerated

## Blocks

- Wool and Concrete blocks now correctly produce instrument sounds when used with Note blocks ([MCPE-241748](https://bugs.mojang.com/browse/MCPE-241748)) ([MCPE-241749](https://bugs.mojang.com/browse/MCPE-241749))

### Straw Bed

- Straw Beds can no longer be placed on blocks occupied by an entity

- Fixed the Straw Bed block reporting missing geometry content errors and rendering incorrectly in worlds and templates using a base game version older than 26.50

## Commands

- Fixed an issue where an extended Piston was missing from the results of `/clone` when its arm was outside the cloned area, and where a piston cloned without its arm would destroy itself

- /time command now prevents setting a negative time value. When adding time or setting time to the next day results in a value larger than the maximum time amount, it will evaluate to the equivalent time from the first day

  - Running `/time add <time>` in worlds currently with a negative time will be fixed up to add the result from the first day

## Effects

- Regeneration from Axolotls can no longer be stacked infinitely ([MCPE-183841](https://bugs.mojang.com/browse/MCPE-183841))

## Gameplay

- Fixed a bug where a Zombie trying to simultaneously equip multiple items on the ground could lead to some of those items disappearing instead ([MCPE-238979](https://bugs.mojang.com/browse/MCPE-238979))

- Effects that are weaker but have longer duration now correctly resume after a stronger but shorter duration effect of the same type expires ([MCPE-74059](https://bugs.mojang.com/browse/MCPE-74059))

- Trapdoors now have snappable placement: holding the place block control while a Trapdoor is selected will only place Trapdoors in a fixed direction until the control is released

- Snappable placement de-activates interaction with blocks until the placement interaction is completed.

- Players no longer stop sneaking when touching water ([MCPE-167218](https://bugs.mojang.com/browse/MCPE-167218))

- Red and Brown Mushrooms can now be placed on any block with a top solid face regardless of lighting conditions

  - They still cannot spread unless the brightness at the new growth is less than 13, or its support block overrides light requirements like Mycelium

## General

- Fix untranslated text while importing worlds on PlayStation ([MCPE-237739](https://bugs.mojang.com/browse/MCPE-237739))

## Graphical

- Fixed a crash when adjusting render resolution on PlayStation with high settings in Vibrant Visuals

## Input

- Fixed instances of first inputs not appearing in chat window textbox on Android devices ([MCPE-241422](https://bugs.mojang.com/browse/MCPE-241422))

## Realms

- The correct active world size is now displayed consistently in the Realms Hub World tab

- Realm world settings no longer remain stuck saving when the connection is interrupted

- Hardcore worlds are now identified correctly in Realm world slots

## Stability and Performance

- Dedicated servers now exit cleanly when incompatible `allow-list` and `online-mode` settings are configured

## User Interface

- Improve initial loading time for Ore UI screens in Betas and Previews ([MCPE-180677](https://bugs.mojang.com/browse/MCPE-180677))

- Added an informational message explaining when Improved Input Response is unavailable ([MCPE-230699](https://bugs.mojang.com/browse/MCPE-230699))

- Improved the alignment and line wrapping of Chinese, Japanese, and Korean text in chat, books, and signs

- The Command Block screen no longer censors partially typed words while the command is being edited ([MCPE-238739](https://bugs.mojang.com/browse/MCPE-238739))

- Large worlds can now be duplicated on Switch when sufficient storage is available.

- Fixed Android back button not working in Ore UI

- Fixed issue where accordion component was not narrating expanded hint

- Updated how received party invites are shown and interacted with in the Social Drawer

# Technical Updates

## AI Goals

- Made the schema for `minecraft:behavior.float_tempt` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.60 and newer

- Made the schema for `minecraft:behavior.tempt` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.60 and newer

- Made the schema for `minecraft:behavior.send_event` stricter when parsing, now will fail to load an entity json that has invalid data in versions 1.26.60 and newer

- Made schema for the `minecraft:behavior.panic` component stricter when parsing so that it will fail to load an entity json that has invalid data in versions 1.26.60 and newer

- Changed `minecraft:behavior.panic` to not stop and start every tick when the mob is stuck

## Dedicated Server

- Updated the warning that suggests trying NetherNet to instead be an error when users are not using NetherNet, as RakNet is deprecated

## Editor

- Fixed a bug that selected chunks are not reflecting biome data assignments without reloading the game.
- Fixed a bug that caused flickering after clicking the button of assign biome data.

## Entity Components

- Bred sheep now expose the `minecraft:color` entity component

- Made schema for the `minecraft:annotation.break_door` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

- Made schema for the `minecraft:attack` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

  - `damage` now only accepts a scalar or an object with `min` and `max` values. Array values are no longer valid.

- Made schema for the `minecraft:inventory` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

- Made schema for the `minecraft:spell_effects` component stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

- Made schema for `minecraft:transformation` stricter when parsing and will fail to load an entity json that has invalid data in versions 1.26.60 and newer.

  - `value`, `block_radius`, and `block_max` fields under `delay` now reject negative values
  - `block_assist_chance` and `block_chance` fields under `delay` now take floats in the range 0.0 to 1.0
  - `delay` no longer accepts a bare number shorthand in versions 1.26.60 and newer; use the object form `{ "value": <seconds> }` instead
  - `begin_transform_sound` and `transformation_sound` no longer accept a single string shorthand in versions 1.26.60 and newer; use an array of sound names instead

## Mobs

- Many mob properties are no longer saved if their values are the default

# Experimental Technical Updates

## API

### DDUI

- Fixed labels removing all whitespace adjacent to formatting codes.
- Added support for multi button row at custom forms in beta.
- New interface `ButtonData`.
  - Field `label: ObservableString | ObservableUIRawMessage | string | UIRawMessage`. Text to display.
  - Field `onClick: () => void`. Action to execute when button is pressed.
  - Field `options?: ButtonOptions`. Additional configuration for the button.
- Class `CustomForm`.
  - New method `multiButtonRow(buttons: ButtonData[], options?: MultiButtonRowOptions): CustomForm;`. Adds a multi button row.'
    - Parameter `buttons` is an array that allows maximum three elements.
    - Parameter `options` contains additional configuration for the row, like visibility.

## Commands

- Added new overloads to the `/time` command for more control of the Overworld clock under the Creator World Clocks Features experiment

  - `/time pause` - Pauses the Overworld clock
  - `/time resume` - Resumes the Overworld clock
  - `/time query time` - Outputs the Overworld clock's current time

- Replaced `/time set <TimeSpec>` with `/time set <TimeMarker> (next|previous|stay)` under the Creator World Clocks Features experiment

  - Sets the Overworld clock to the occurrence of the time marker. By default this is `next` and works the same as the old `TimeSpec` variation
