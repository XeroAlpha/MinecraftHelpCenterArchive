---
title: Minecraft Beta - 1.14.0.1 (Xbox One/Windows 10/Android)
date: 2019-10-09T14:01:28Z
updated: 2019-10-09T15:41:22Z
categories: Beta and Preview Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360034989811-Minecraft-Beta-1-14-0-1-Xbox-One-Windows-10-Android
---

**PLEASE READ before participating in the Minecraft Beta**:

- Joining the beta will replace your game with a work in progress version of Minecraft
- You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta
- Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them
- Beta builds can be unstable and are not representative of final version quality
- The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see [aka.ms/JoinMCBeta](https://aka.ms/JoinMCBeta) for detailed instructions

### **New Features:**

- **Added Bees!**
  - Bees are cute, fuzzy, neutral mobs
  - Don’t hurt them, they don’t want to hurt you
  - If a bee does sting you, it will leave its stinger in you and eventually die, dropping nothing :(
  - Bees love pretty flowers and spend their lives gathering pollen from them
  - After gathering pollen, bees fly back to their home nest
  - Bees help you by growing crops while carrying pollen back to the nest
  - Bees can be bred using flowers
  - If a bee can't find nectar, after a while it will return home for a bit
  - If a bee doesn’t have a home nest, it will wander around until it finds one it can use
  - Bees don’t like the rain and they sleep at night. They will go back to the nest in these cases

<!-- -->

- **Added Beehives and Nests**
  - Bee Nests spawn naturally in Flower Forests, Plains, and Sunflower Plains biomes
  - When a bee visits a nest and completes its journey undisturbed, the level of honey increases
  - Max of 5 levels of honey
  - Beehives are crafted by players using honeycomb and wood planks
  - Use a silk touch tool to get the block with the bees stored inside
  - Bee Nests will be destroyed unless you use silk touch
  - Use shears when at full honey to get honeycomb
  - Use a bottle when at full honey to get a honey bottle
  - Campfire smoke calms bees - place one underneath the nest / hive to keep them in chill mode
  - Redstone-friendly!

<!-- -->

- **Added Honeycomb and Honey Bottles**
  - Use an empty glass bottle on a hive or nest that is full of honey to get a bottle of honey!
  - Dispensers can now fill bottles with water and honey
  - Dispensers can now shear honeycombs from Bee Nests and Hives

<!-- -->

- **Added Honeycomb blocks**
  - A decorative block that can be crafted with honeycombs!

<!-- -->

- **Added Honey blocks**
  - Greatly reduces movement speed and jump height, but also reduce fall damage
  - You can “slide” down a wall of honey blocks to slow your fall (parkour ftw!)
  - Honey Block effects carry through up to \< 1 block above
  - When a honey block is piston-moved, adjacent blocks are moved too
  - When a honey block is piston-moved, entities on top are moved along with it
  - Sticky Block Support. Use the ‘BlockProperty::PreventsJumping’ to make it so that the pathfinder won't jump if on one of these blocks and players can't jump when on one of these blocks. Also hooked up level event that spawns terrain particles when prevented from jumping and plays the jump.prevent block sound** **

### **Changes:**

- Leads can now be used on Polar Bears, Parrots, Ocelots, and Dolphins ([MCPE-46866](https://bugs.mojang.com/browse/MCPE-46866))
- Tweaked the amount of XP dropped by animals to match the Java Edition
  - Most animals will now drop 1-3 XP when killed, but Dolphins now drop 0 XP 

 

### **Known Issues in this beta that will be fixed in a future update:**

- Equipped armour is not visible on player’s character

### **Fixes:**

- **Crashes/Performance**
  - Fixed several crashes that could occur during gameplay
  - Fixed an issue with kelp growth causing lag in specific chunks ([MCPE-50175](https://bugs.mojang.com/browse/MCPE-50175)) 

<!-- -->

- **General**
  - Fixed the breaking animation for glass on certain packs
  - Capes now appear correctly in the skin picker
  - Fixed an issue that was preventing the "Beam Me Up" achievement from being obtained ([MCPE-21425](https://bugs.mojang.com/browse/MCPE-21425))
  - Fixed an issue with that caused some skins to show a solid white cape ([MCPE-52005](https://bugs.mojang.com/browse/MCPE-52005))
  - Fixed a render distance issue that could cause an old style (limited) world to not load correctly if a player logged out in a specific corner of that world
  - Fixed an issue that was causing some capes to not scale to skins correctly in the character creator
  - Fixed an issue that would cause some selections in the character creator to become unresponsive
  - Fixed an issue that was causing scripting error messages to show on the Alien Worlds Marketplace pack 

<!-- -->

- **Gameplay**
  - Minecart sounds now load and play correctly
  - Waterlogged blocks are no longer ticked by other Redstone circuits in the same chunk 
  - Armour can once again be equipped correctly from the creative inventory on touch screen devices ([MCPE-52413](https://bugs.mojang.com/browse/MCPE-52413))
  - Fixed an issue that was causing the crossbow to fire immediately after being loaded ([MCPE-52179](https://bugs.mojang.com/browse/MCPE-52179))
  - The Frost Walker enchantment once again freezes water correctly ([MCPE-52788](https://bugs.mojang.com/browse/MCPE-52788))
  - Fixed a bug that could cause players to fall from the sky after riding a entity in creative ([MCPE-52957](https://bugs.mojang.com/browse/MCPE-52957))
  - Arrows or tridents no longer fall through the ground after being deflected by a shield ([MCPE-44721](https://bugs.mojang.com/browse/MCPE-44721))
  - Farmland blocks once again revert into a dirt block when the player jumps on them
  - Placing Armour on an Armour Stand in Creative no longer equips it on the player as well 

<!-- -->

- **Mobs**
  - Reduced the Fox attack radius to match the Java edition
  - Items held by Foxes are no longer invisible ([MCPE-51993](https://bugs.mojang.com/browse/MCPE-51993))
  - Horses now use the correct (newer) model again
  - Improved the accuracy of pathfinding for flying mobs

<!-- -->

- **Items**
  - The Compass and Clock are now animated correctly again when in the hotbar ([MCPE-52901](https://bugs.mojang.com/browse/MCPE-52901))

<!-- -->

- **User Interface**
  - Equipped carpets now appear correctly in the Llama inventory again 

<!-- -->

- **Add-Ons and Script Engine**
  - The boss health bar now shows correctly when creating custom wither entities 
  - Custom entities once again show the health bar correctly while being ridden
