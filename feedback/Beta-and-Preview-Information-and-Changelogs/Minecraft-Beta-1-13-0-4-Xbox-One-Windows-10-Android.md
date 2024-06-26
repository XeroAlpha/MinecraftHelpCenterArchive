---
title: Minecraft Beta - 1.13.0.4 (Xbox One/Windows 10/Android)
date: 2019-07-24T14:40:21Z
updated: 2019-07-26T20:01:53Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360031240811-Minecraft-Beta-1-13-0-4-Xbox-One-Windows-10-Android
---

**PLEASE READ before participating in the Minecraft Beta**:

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

**Fixes:**

- **Crashes/Performance**
  - Fixed several crashes that could occur during gameplay 
  - Fixed a crash that happens when quick moving a structure void block ([MCPE-47903](https://bugs.mojang.com/browse/MCPE-47903))
  - Fixed a crash that could occur when blocking projectiles with a shield ([MCPE-48070](https://bugs.mojang.com/browse/MCPE-48070))
  - Fixed a crash that could sometimes occur when approaching world spawn ([MCPE-46686](https://bugs.mojang.com/browse/MCPE-46686))
  - Fixed a crash that could occur on Xbox when changing internet connection
  - Improved performance and stability when playing on split-screen on Xbox  

<!-- -->

- **General**
  - Fixed minecart rider rotation not being updated correctly on some packs 
  - Fixed third person camera view shaking issue ([MCPE-48987](https://bugs.mojang.com/browse/MCPE-48987))
  - Adjusted player sneak animation position ([MCPE-47883)](https://bugs.mojang.com/browse/MCPE-47883)
  - Players can join the world correctly after accepting an invite 
  - Nether portals now connect properly after being cloned 
  - Fixed the animation of nausea (including using nether portals) ([MCPE-47960](https://bugs.mojang.com/browse/MCPE-47960))
  - Added mirror back to left arm in humanoid geometry ([MCPE-47944](https://bugs.mojang.com/browse/MCPE-47944))
  - Split-screen players can only join if they have an adequate controller available
  - The correct Marketplace Inventory items are now shown when switching users 
  - Fixed broken rotations in player animation for attacking 
  - Players now face the specified direction when added to teleport commands 
  - Fix issue of Damaged Elytra texture never getting used ([MCPE-47758](https://bugs.mojang.com/browse/MCPE-47758))
  - /clear now works correctly with damageable items
  - Global Resource Packs in Settings will now update to the new chosen language
  - Throwing animation now plays when charging trident with riptide
  - Corrected player sprint/swim state when exiting water
  - Fixed an issue with making purchases on Oculus Rift
  - Fixed a controller issue when docking the Nintendo Switch
  - Left and right brackets on world/friend/server tabs now function correctly with full keyboard controls toggled on
  - The text to speech narrator now works correctly with punctuation in text boxes

<!-- -->

- - Fixed an issue with in-game patch notes not always showing up correctly
  - Fixed an issue with some damageable items (such as armour, tools) not being suggested in recipe book
  - Armour stands and players can again wear helmets with secondary layers
  - Items no longer appear as mobs when held by armour stands ([MCPE-48629](https://bugs.mojang.com/browse/MCPE-48629))
  - Arrows now render correctly when held by armour stands
  - Removed the “Create Realm” button from beta versions of the game

<!-- -->

- **Gameplay**
  - Fixed an issue that was sometimes causing mobs to despawn randomly ([MCPE-47922](https://bugs.mojang.com/browse/MCPE-47922))
  - Players no longer fall through opening shulker boxes and pistons ([MCPE-47882](https://bugs.mojang.com/browse/MCPE-47882))
  - Items that have been smelted can now be crafted and stacked correctly ([MCPE-47907](https://bugs.mojang.com/browse/MCPE-47907), [MCPE-48421](https://bugs.mojang.com/browse/MCPE-48421), [MCPE-47684](https://bugs.mojang.com/browse/MCPE-47684))
  - Buttons are now craftable from recipe book again ([MCPE-48584](https://bugs.mojang.com/browse/MCPE-48584)) 

<!-- -->

- **Mobs**
  - Adult villagers can now get into beds with low ceilings
  - Creepers no longer lose aggro when line of sight is broken briefly
  - Removed the Fox “moveToVillage” behaviour to match Java
  - Mobs can now enter minecarts and boats again ([MCPE-48596](https://bugs.mojang.com/browse/MCPE-48596))
  - Dolphins now jump properly again
  - Zombies no longer become stuck on doors
  - The parrot dancing animation is now at the correct speed ([MCPE-48356](https://bugs.mojang.com/browse/MCPE-48356))
  - Parrots can now fly correctly again ([MCPE-47954](https://bugs.mojang.com/browse/MCPE-47954)) 
  - Dolphins now follow players in boats again

<!-- -->

- **Graphical**
  - Fixed cloud shading ([MCPE-47814](https://bugs.mojang.com/browse/MCPE-47814))
  - Fixed an issue with water not rendering correctly on some servers ([MCPE-46813](https://bugs.mojang.com/browse/MCPE-46813))
  - Fixed the flame height issue when player in on fire ([MCPE-48175](https://bugs.mojang.com/browse/MCPE-48175))
  - Multiple blocks no longer change colour to black when moved by pistons
  - Using ‘/fill’ and ‘/clone’ commands with glass structures now render correctly 

<!-- -->

- **User Interface**
  - Fixed directional arrow controls when using full keyboard gameplay setting ([MCPE-47853](https://bugs.mojang.com/browse/MCPE-47853))
  - Removed accessibility tab from create world screen 

<!-- -->

- **Add-Ons and Script Engine**
  - Ducks can once again be hit by the player in the MINECON 2018 Pack (not that you would, of course!)
  - Fixed the positioning of particles that were only showing correctly when centered on screen
  - Adding back-compatibility for old player animation flags
  - Experimental UI is registered as trusted pack ([MCPE-47818](https://bugs.mojang.com/browse/MCPE-47818))
  - Fixed horse rein positioning and rotation in certain packs

  <!-- -->

  - Fixed an issue with nested behaviour pack definitions not running correctly
  - Fixed an issue with minimum compatible versions of certain packs not working correctly 
  - Timer component now works on vanilla projectiles
  - ‘minecraft:spell_effects’ no longer trigger a second timer 
  - Fixed an issue with the ‘must_see_forget_duration’ component not working 
  - Fixed an entity collision issue that was affecting some marketplace maps
  - Invisible end rods (variant 6) used in various marketplace maps are now invisible again
