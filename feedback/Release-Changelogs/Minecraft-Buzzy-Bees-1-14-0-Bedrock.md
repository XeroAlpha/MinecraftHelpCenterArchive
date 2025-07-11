---
title: Minecraft - Buzzy Bees - 1.14.0 (Bedrock)
date: 2019-12-03T17:13:30Z
updated: 2019-12-16T16:16:16Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360037105792-Minecraft-Buzzy-Bees-1-14-0-Bedrock
---

**Posted: **December 10, 2019

**New Features:**

- **PlayStation®4**
  - Welcome PlayStation®4 players to the Bedrock version of Minecraft! All Bedrock platforms can now cross-play with PS4™ consoles. More information can be found in the [Minecraft for PlayStation®4 FAQ](../../help/Use-or-Link-Microsoft-Accounts/Link-Your-Microsoft-Account-to-Minecraft-on-PlayStation.md).

<!-- -->

- **Bees!**
  - Bees are cute, fuzzy, neutral mobs
  - Don’t hurt them, they don’t want to hurt you
  - Bees love pretty flowers and spend their lives gathering pollen from them
  - After gathering pollen, bees fly back to their nest
  - If a bee can't find pollen, it will return home
  - If a bee doesn’t have a home nest, it will wander around until it finds one it can use
  - Bees don’t like the rain and they sleep at night. They will return to their nest in these cases

<!-- -->

- **Bee Nests and Beehives**
  - Bee Nests generate in Flower Forests, Plains, and Sunflower Plains biomes
  - When a bee visits a nest and completes its journey undisturbed, the level of honey increases
  - Using shears on a full hive or nest will harvest Honeycomb and using a glass bottle will give a Honey Bottle
  - Campfire smoke calms bees - Place one underneath the nest or hive to keep them in chill mode
  - Redstone friendly! Dispensers can shear honeycombs from hives and nests

<!-- -->

- **Honey Block**
  - Greatly reduces movement speed and jump height, but also reduces fall damage
  - You can “slide” down a wall of honey blocks to slow your fall (Parkour FTW!)
  - When a honey block is piston-moved, adjacent blocks also move
  - When a honey block is piston-moved, entities on top are moved along with it

<!-- -->

- **Honeycomb Block**
  - A decorative block that can be crafted with Honeycomb

<!-- -->

- **New Achievements**
  - Bee our guest - Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees (15G)
  - Total Beelocation - Move and place a Bee Nest, with 3 bees inside, using Silk Touch (30G)
  - Sticky Situation - Slide down a honey block to slow your fall (30G)

**Changes:**

- Updated to a fresh menu background full of bees
- Leads can now be used on Polar Bears, Parrots, Ocelots, and Dolphins ([MCPE-46866](https://bugs.mojang.com/browse/MCPE-46866))
- Dispensers can now fill bottles with water and honey
- Tweaked the amount of XP dropped by animals to match Java Edition
  - Most animals will now drop 1-3 XP when killed, but Dolphins now drop 0 XP
- Item tags can now be hidden in the inventory using the '/gamerule showtags' command

**Fixes:**

- **Crashes / Performance**
  - Fixed several crashes that could occur during gameplay
  - Fixed a crash that could occur when signing into Xbox Live on Android
  - Fixed an issue with kelp growth causing lag in specific chunks ([MCPE-50175](https://bugs.mojang.com/browse/MCPE-50175))

<!-- -->

- **General**
  - Fixed a render distance issue that could cause an old style (limited) world to not load correctly if a player logged out in a specific corner of that world
  - Fixed an issue that was causing scripting error messages to show on the Alien Worlds Marketplace world

<!-- -->

- **Gameplay**
  - Fixed a bug that was sometimes causing chests to become invisible ([MCPE-52790](https://bugs.mojang.com/browse/MCPE-52790))
  - Fixed an issue that could sometimes cause touch screen controls to become inverted ([MCPE-50256](https://bugs.mojang.com/browse/MCPE-50256))
  - Players once again experience kinetic energy and get dead upon gliding into walls at high speed with Elytra ([MCPE-21141](https://bugs.mojang.com/browse/MCPE-21141))
  - Players can no longer initiate swimming in shallow water

<!-- -->

- **Mobs**
  - Improved the accuracy of pathfinding for flying mobs
  - Pillager Patrols can no longer spawn in the End or Nether dimensions ([MCPE-51481](https://bugs.mojang.com/browse/MCPE-51481))
  - Baby Pigmen now hold their swords in their hands, rather than around their necks ([MCPE-53454](https://bugs.mojang.com/browse/MCPE-53454))

<!-- -->

- **Blocks**
  - Updated the Slime Block texture to match Java Edition
  - Fixed an issue that was causing sugar cane to break when a nearby water source became waterlogged ([MCPE-52314](https://bugs.mojang.com/browse/MCPE-52314))

<!-- -->

- **Items**
  - Arrows and tridents no longer fall through the ground after being deflected by a shield ([MCPE-44721](https://bugs.mojang.com/browse/MCPE-44721))
  - Dragon Heads now appear at the correct height ([MCPE-53129](https://bugs.mojang.com/browse/MCPE-53129))
  - Buckets can once again be used to milk cows ([MCPE-54623](https://bugs.mojang.com/browse/MCPE-54623))
  - Milk buckets can again be used to craft cakes ([MCPE-52774](https://bugs.mojang.com/browse/MCPE-52774))
  - Fixed acacia leaves sometimes becoming stuck in the inventory hotbar
  - Placing Armor on an Armor Stand in Creative mode no longer equips it on the player as well

<!-- -->

- **Character Creator**
  - Various fixes to the Character Creator
  - Fixed an issue that was causing worn items to transfer between Character Creator models unexpectedly
  - Adding or removing the Founder's Cape now updates the skin in-game without needing to restart
  - Platform restricted skins can now be previewed in the Character Creator
  - Fixed capes not rendering in some skin packs ([MCPE-54181](https://bugs.mojang.com/browse/MCPE-54181))
  - Fixed another issue that was causing player skins to revert to a default Alex or Steve after relaunching the game
  - Skins that don't roam to Minecraft Earth no longer display 'Usable Everywhere' in the Character Creator
  - Equipping a new custom skin will now update the player model without needing to restart the game
  - Optimized the size of Character Creator skins to improve performance when playing in multiplayer

<!-- -->

- **Graphical**
  - Fixed the held item bobbing animation when moving in first person view ([MCPE-51212](https://bugs.mojang.com/browse/MCPE-51212))
  - The block breaking animation will again show if a block is below water when the player is above
  - The player's hand no longer disappears when gliding with Elytra ([MCPE-53092](https://bugs.mojang.com/browse/MCPE-53092))
  - Water now renders correctly when Kelp is placed next to a Glass block

<!-- -->

- **User Interface**
  - Fixed a navigation issue that could cause an incorrect focus change when choosing an option from the pause menu
  - Fixed an issue that could cause menu flickering when navigating through the Character Creator
  - The 'See Pack in Store' button in the Character Creator can now be highlighted and selected when using a controller
  - Fixed some misspelled splash text

<!-- -->

- **Add-Ons and Script Engine**
  - Custom entities once again show their health bar correctly while being ridden
  - Fixed an issue with particle billboarding that was causing them to appear flipped in the wrong direction
  - Fixed an issue with pivot points for custom geometry cube models
  - Fixed a bug that was causing tamed entity damage to be counted as coming from mounted players

**For Map Makers and Add-On Creators:**

- Updated templates for 1.14.0 with new resources, BEEhaviors, documentation, and example packs can be downloaded from [minecraft.net/addons](https://minecraft.net/addons)
