---
title: Minecraft Beta & Preview - 1.21.50.25
date: 2024-10-23T14:04:45Z
updated: 2024-10-24T11:52:44Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/31291872110733-Minecraft-Beta-Preview-1-21-50-25
hash:
  features-and-bug-fixes: new-features-and-bug-fixes
  01JAWYFZMBZTNGQ2D4GVW3NHHQ: features-and-bug-fixes
---

**Posted:** 23 October 2024

**Information on Minecraft Preview and Beta:**

- These work-in-progress versions can be unstable and may not be representative of final version quality
- Minecraft Preview is available on Xbox, PlayStation, Windows, and iOS devices. More information can be found at [aka.ms/PreviewFAQ](https://aka.ms/PreviewFAQ)
- The beta is available on Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

![A Pale Garden with resin block types placed near a crafting table and furnace. There are eyeblossom flowers, and there is a Creaking with particles going to and from a pale oak with a Creaking heart.](https://feedback.minecraft.net/hc/article_attachments/31291909576205)

Oh good! You found me! I’ve been wandering around the pale garden ever since the last preview and beta update – and let me tell you – the creaking isn’t the *best* roommate. Luckily this week two new features are coming to the pale garden: resin, and eyeblossoms! Resin is a new block that you can craft after an encounter with the creaking (try asking it to wash its dishes…) and eyeblossoms are a flower unique to the pale garden, that bloom at night. They even bloom with a bit of an orange glow, so perhaps they’ll help me find my way out! As always, we’re keen to get your feedback on these new features at [aka.ms/mcgamedropfeedback](http://aka.ms/mcgamedropfeedback) , and you can report any bugs at [bugs.mojang.com](http://bugs.mojang.com/) ! Here’s what else is new this week:

# New Features and Bug Fixes

## Resin

- Resin Clumps are a new multi-face block:
  - Dropped by the Creaking Heart when it is destroyed
  - Placed around the Creaking Heart when its Creaking is attacked
  - Can be crafted into a Block of Resin
  - Can be hardened into Resin Bricks in a furnace
  - Can be used to trim armor
- Resin Bricks can be crafted into the Resin Brick set:
  - Brick block
  - Stairs
  - Walls
  - Slabs
  - Chiseled Resin Brick block
- Both can be found in Chests in the Woodland Mansion
- Blocks of Resin can be crafted into a Creaking Heart using two Pale Oak Logs

## Eyeblossom

Eyeblossoms are new flowers that generate in the Pale Garden biome. Unique features:

- They exist in two variants: Closed and Open Eyeblossom
- Eyeblossoms transition between the two variants based on the time of day
  - During the night, Eyeblossoms will become Open
  - During the day, they will become Closed
  - In dimensions that do not have a day/night cycle, they will remain as-is
- Eyeblossoms planted on the ground will communicate with each other, helping each other to open or close
- Open Eyeblossoms have glowing eyes during the night
- Eyeblossoms can be obtained by bonemealing the grass in the Pale Garden biome
- Bees get poisoned when they interact with Eyeblossoms
- Suspicious Stew made from Eyeblossom will have Blindness or Nausea effect depending on the variant
- Gray or Orange Dye can be crafted from Closed and Open Eyeblossoms respectively

## Pale Garden

- Further adjusted the color of the Pale Garden sky at the horizon to more closely match Java ([MCPE-187519](https://bugs.mojang.com/browse/MCPE-187519))

- The texture of the Pale Oak Sign model and UI has been adjusted for consistency with other signs ([MCPE-187306](https://bugs.mojang.com/browse/MCPE-187306 "https://bugs.mojang.com/browse/MCPE-187306"))

- Pale Oak Saplings can now be composted ([MCPE-187457](https://bugs.mojang.com/browse/MCPE-187457 "https://bugs.mojang.com/browse/MCPE-187457"))

- Pale Hanging Moss now uses the same sounds as other Moss and Pale Moss blocks ([MCPE-187327](https://bugs.mojang.com/browse/MCPE-187327 "https://bugs.mojang.com/browse/MCPE-187327"))

- Increased frequency of the Pale Hanging Moss ambience sound

- Pale Hanging Moss no longer generates on Pale Oak trees grown from Pale Oak Saplings

## Creaking Heart

- Naturally generated Creaking Hearts now drop 20 to 24 experience, even when collected with Silk Touch

- Increased frequency of the Creaking Heart ambience sound

- The texture of the inactive Creaking Heart has been updated to be more consistent with its active state ([MCPE-187395](https://bugs.mojang.com/browse/MCPE-187395 "https://bugs.mojang.com/browse/MCPE-187395"))

## Creaking

- Increased the speed of aggravated Creakings

- Creakings now deal more attack damage

- When a Creaking Heart is destroyed, its Creaking will now twitch for a few seconds before crumbling

- Creakings spawned by a Creaking Heart will crumble when stuck in a hole with a Player for more than 5 seconds

  - This prevents a potential soft lock, as the invulnerable Creaking would prevent the player from mining or placing any blocks, requiring them to exit and re-enter the world to force the Creaking to despawn

- A Creaking crumbling now causes nearby Sculk Catalysts to bloom

  - However, no Sculk will be placed since the Creaking does not drop any XP

- The Creaking's walking animation has been updated

- The Creaking's attack animation has been updated

- A Creaking spawned by a Creaking Heart no longer avoids damaging blocks

- A Creaking spawned by command or Spawn Egg is no longer invulnerable to Fire and Lava

- A Creaking spawned by command or Spawn Egg now avoids damaging blocks

- The Creaking's attack speed has been decreased to match Java ([MCPE-187309](https://bugs.mojang.com/browse/MCPE-187309 "https://bugs.mojang.com/browse/MCPE-187309"))

# Features and Bug Fixes

## Blocks & Items

- The following blocks now only drop when broken with a pickaxe: Blast Furnace, Cauldron, Dispenser, Dropper, Enchanting Table, Furnace, Hopper, and Smoker ([MCPE-33950](https://bugs.mojang.com/browse/MCPE-33950 "https://bugs.mojang.com/browse/MCPE-33950"))

- The following blocks that require support now always drop when broken with any tool: all Copper Doors, Iron Door, Heavy Weighted Pressure Plate, Light Weighted Pressure Plate, Polished Blackstone Pressure Plate, and Stone Pressure Plate

- Budding Amethyst is now slower to mine with an improper tool

- The following blocks (which always drop) are now mined faster when using the incorrect tool: Bell, Brewing Stand, Crafter, Ender Chest, Lantern, and Soul Lantern. Note that the Ender Chest is considered an 'always drops block' even though the drop is not an Ender Chest ([MCPE-176374](https://bugs.mojang.com/browse/MCPE-176374 "https://bugs.mojang.com/browse/MCPE-176374"))

- Fixed an issue where the color of a Shulker Box was not listed as part of the name ([MCPE-182930)](https://bugs.mojang.com/browse/MCPE-182930)

- Grass and Nylium no longer decay to Dirt and Netherrack when below Slime, Honey, Hopper, or Chemical Heat (Education Edition block) ([MCPE-62132](https://bugs.mojang.com/browse/MCPE-62132))

- Grass and Nylium now decay to Dirt and Netherrack when below Observer

## Features

- Pale Oak Saplings can now grow on Moss Blocks and Pale Moss Blocks ([MCPE-187322](https://bugs.mojang.com/browse/MCPE-187322 "https://bugs.mojang.com/browse/MCPE-187322"))

## Gameplay

- The camera now rotates the correct way around the X and Y axes when using the /camera command

- Using an empty Bundle now causes an animation to play in both first and third person

- Second passenger in a Boat or Camel will now also have the warning message when hitting unloaded chunk.

## General

- Player spawn algorithm has been improved so it is more difficult to spawn in water or powder snow. ([MCPE-120237](https://bugs.mojang.com/browse/MCPE-120237 "https://bugs.mojang.com/browse/MCPE-120237"))

## Graphical

- Removed the unintended darker tinting of Kelp ([MCPE-169713](https://bugs.mojang.com/browse/MCPE-169713))

## Items

- All projectiles on fire now ignite Minecart with TNT & TNT blocks ([MCPE-183512](https://bugs.mojang.com/browse/MCPE-183512 "https://bugs.mojang.com/browse/MCPE-183512"))

- The textures of the Pale Oak Sign and Pale Oak Hanging Sign items have been adjusted for consistency with other signs

## Mobs

- Breeze now plays the correct idle sound if not on a solid surface ([MCPE-180023](https://bugs.mojang.com/browse/MCPE-180023 "https://bugs.mojang.com/browse/MCPE-180023"))

## Realms

- Removed Opt-out option from Realms Stories Settings, now that it is in the Timeline tab instead
- Fixed an issue where players were unable to create a new world on an active Realm

## Sound

- Wet Sponges now play correct block sounds ([MCPE-187287](https://bugs.mojang.com/browse/MCPE-187287))

## Trial Chambers

- Changed contents of chest in end_2 to reference a loot table

## User Interface

- The size of Shield items no longer changes when the item is moved between slots

- Bundles that are moved under a player's cursor now correctly update their tooltip

- It is now possible to collect crafting output with a bundle to add the crafted items to the bundle

- Touch Controls: Fixed a bug where boats were interactable during control customization ([MCPE-184404](https://bugs.mojang.com/browse/MCPE-184404 "https://bugs.mojang.com/browse/MCPE-184404"), [MCPE-184406](https://bugs.mojang.com/browse/MCPE-184406 "https://bugs.mojang.com/browse/MCPE-184406"))

- Touch controls: in joystick modes, it is now possible to double tap "fly up" to stop flying. ([MCPE-185237](https://bugs.mojang.com/browse/MCPE-185237 "https://bugs.mojang.com/browse/MCPE-185237"))

- Touch controls: tapping fly up and fly down in quick succession no longer causes the player to stop flying. ([MCPE-185236](https://bugs.mojang.com/browse/MCPE-185236 "https://bugs.mojang.com/browse/MCPE-185236"))

- Tools in the hotbar no longer animate when their durability decrease ([MCPE-186979](https://bugs.mojang.com/browse/MCPE-186979 "https://bugs.mojang.com/browse/MCPE-186979"))

- Remove 'X' closing button from the Command Block UI when player is using Gamepad

- Fixed an issue that caused IP addresses with bad input to not be properly validated before joining an external server in the New Servers Tab (Preview only)

- A popup now appears showing the item's name when it is selected in a Bundle's tooltip on touch screen devices

# Technical Updates

## API

- Added additional optional arguments of name and parentThemeId to addNewTheme(). When a valid parentThemeId has been passed through the function, the newly created theme would inherit all the theme color properties from the parent

## Biomes

- Fixed an issue where chunks created before 1.17.40 could behave as Ocean biomes, with ocean-like fog, sky color, and mob spawning ([MCPE-186928](https://bugs.mojang.com/browse/MCPE-186928 "https://bugs.mojang.com/browse/MCPE-186928"))

## Editor

- Added new Locate tool to help find biomes

- Time of day is fixed to Noon at Editor startup

- Improved viewport focus visibility with an animated outline on focus and added focused state as a step for Toggle Mode (CTRL + TAB)

- Added `focusToolInputContext` function to `IModalToolContainer` which will try to set modal input focus (e.g. viewport for tool rail)

## Entity Components

- Removed the 'minecraft:can_attack_ghast' component and replaced it with a new component 'minecraft:cannot_be_attacked'. When added to an entity it prevents other entities from attacking it unless they fulfill an exception filter, in vanilla it is added to Ghasts, creators can add their entities to the exception filter allowing them to then attack Ghasts.

## Entity Event Responses

- The "execute_event_on_home_block" entity event response is now marked as \[Beta\] and requires "use_beta_features" to be specified in the root JSON object

  - The current implementation doesn't fully align with our internal standards, so it will remain unavailable for Creator content until we can develop a more robust technical solution
  - This approach allows us to iterate on the feature without risking backward compatibility

- Added the "emit_particle" entity event response, allowing particles to be emitted at the center of the entity's bounding box

  - The "particle" field allows to specify the type of particle to emit

## Network Protocol

- Level event removed: ParticleCreakingTeardown
- New particle type added: CreakingCrumble

# Experimental Technical Updates

## Camera

- Added experimental toggle "Aim Assist" to allow easy targeting while using custom camera perspectives.

  - Aim Assist currently targets blocks. Entites will be enabled in a future release.

- Aim Assist can be enabled through "/aimassist" command.

  - Aim Assist's targeting behavior (distance, width, and height) can be configured through the settings under "aim_assist" folder using a behavior pack.
  - Aim Assist will highlight the selected target. The highlighting textures are customizable through textures under "textures\ui" folder using a resource pack

## API

- Added `shutdown` event to `beforeEvents` within the `system` class. This is fired after all players have left and the world is about to shutdown/close.

- Input APIs

  - Added a suite of input APIs that are readable even if the player's input is disabled with input permissions
  - Added `getMovementVector(): Vector2` to `InputInfo` to read raw movement values
  - Added enum `InputButton` with values `Jump` and `Sneak`
  - Added enum `ButtonState` with values `Pressed` and `Released`
  - Added `getButtonState(button: InputButton): ButtonState` to `InputInfo` to read raw player button inputs
  - Added `world.afterEvents.playerButtonInput` event to listen to button change events

## Creator Options

- Added section "Device Info Settings".
  - Added option to allow override memory tier used in Scripting and Molang.
