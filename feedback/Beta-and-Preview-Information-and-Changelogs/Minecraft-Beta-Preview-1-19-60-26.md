---
title: Minecraft Beta & Preview - 1.19.60.26
date: 2023-01-11T15:26:25Z
updated: 2023-01-11T17:41:04Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/12150896518669-Minecraft-Beta-Preview-1-19-60-26
---

**Posted:** 11 January, 2023

**Information on the Minecraft Preview and Beta: **

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](http://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Minecraft screenshot of an end gateway in the end dimension. There is an end city in the background, and several endermen scattered about.](https://feedback.minecraft.net/hc/article_attachments/12150766312205)

Here's a list of what is new in this week's Minecraft Preview and Beta! Remember to send us all your feedback at [aka.ms/MC120Feedback](https://aka.ms/MC120Feedback) and report any bugs to [bugs.mojang.com](http://bugs.mojang.com/).

# **Experimental Features**

### **Hanging Sign**

- Placing a Hanging Sign under an axis-aligned Hanging Sign with V-shaped chains will now result in a Hanging Sign with double chains, if the player is not sneaking

# **Features and Bug Fixes**

## **Commands**

- Fixed a bug causing players to not wake up when teleported while sleeping ([MCPE-162346](https://bugs.mojang.com/browse/MCPE-162346))

## **Gameplay**

- Fixed an issue where the "Inception" achievement would not be awarded

## **Graphical**

- The UI no longer flickers on Android when the keyboard pops up ([MCPE-142356](https://bugs.mojang.com/browse/MCPE-142356))
- Highlight selection no longer highlights entire card for transparent objects like saplings
- V-sync settings are properly configured in options (non-ARM devices) ([MCPE-110006](https://bugs.mojang.com/browse/MCPE-110006))
- Resource packs will now be applied to the worlds after navigating to another screen before creation
- Fixed an issue where some resource packs prompted the user with an error after being downloaded

## **Performance and Stability**

- Fixed a potential crash when gliding through an End Gateway
- The game no longer crashes when killing an entity with invalid conditions, functions, or pools entries in its loot table ([MCPE-164623](https://bugs.mojang.com/browse/MCPE-164623))

## **Vanilla Parity**

- Levers now produce the same sound effect as Stone Buttons ([MCPE-163335](https://bugs.mojang.com/browse/MCPE-163335))

## **Touch Controls**

- Fixed the stack splitting feature in non-touch mode

## **Accessibility**

- The new Create New World screen will now be available for text to speech users. We'd be happy to receive your feedback on it here: <https://aka.ms/cnwnarration>

# **Technical Updates**

## **Graphical**

- Fix text being slightly off-centered to the left for Furnace, Blast Furnace, and Smoker Screen UIs ([MCPE-151597](https://bugs.mojang.com/browse/MCPE-151597))

## **User Interface**

- Resource packs will now be applied to the world after navigating to another screen before creation
- Fixed an issue where some resource packs prompted an error after being downloaded

# **Experimental Technical Features**

## **API**

- RawMessage
  - Changed the signature of property withfrom *(string\[\] \| RawMessage)\[\]?*  to *(string\[\] \| RawMessage)?*\
    \
- EntityHealthComponent
  - Fixed a bug where health could be modified on dead entities ([MCPE-130687](https://bugs.mojang.com/browse/MCPE-130687))
- Scoreboard
  - Added *setScore(ScoreboardObjective, ScoreboardIdentity, Number)*
  - Added *getScore(ScoreboardObjective, ScoreboardIdentity)*
- ScoreboardObjective
  - Added *setScore(ScoreboardIdentity, Number)*
  - Added *getScore(ScoreboardIdentity)*
  - Added *removeParticipant(ScoreboardIdentity)*
- ScoreboardIdentity
  - Added *setScore(ScoreboardObjective, Number)*
  - Added *getScore(ScoreboardObjective)*
  - Added *removeFromObjective(ScoreboardObjective)*

## **Commands**

- Reverted an experimental change to animation controller command deferral within the “Upcoming Creator Features” experiment

## **General**

- Release BlockPlacementFilterComponent outside of experimental toggle in JSON formats 1.19.60 and higher
