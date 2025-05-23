---
title: Minecraft - 1.16.20 (Bedrock)
date: 2020-08-04T17:05:06Z
updated: 2020-08-12T09:30:06Z
categories: Release Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/360046901272-Minecraft-1-16-20-Bedrock
---

**Posted:** August 11, 2020

Our developers have been hard at work to bring you another hotfix. Some of these issues were reported by players, so keep those reports coming at [bugs.mojang.com](https://bugs.mojang.com/)!

# **New Features:**

**Piglin Brute**

- Piglin Brutes are stronger versions of Piglins that live in bastion remnants and protect the treasures there
- Unlike their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren't afraid of anything
- Piglin Brutes attack players on sight, no matter how the player is dressed
- Piglin Brutes wield axes and don't need any armor because they're just that tough!

# **Crafting Interface Changes:**

- Recipe Select button prompt shows when hovering over a non-craftable recipe book item using controller ([MCPE-79725](https://bugs.mojang.com/browse/MCPE-79725))
- Recipe selected items put in crafting input grid can now be hovered over with controller to see their tooltip names
- On controller, hovering over recipes will show them in the crafting grid when no recipe is selected
- On controller, you can deselect a selected recipe when hovering above that selection in the recipe book. You can also clear the crafting grid by clicking the right thumbstick

# **Fixes:**

- **Performance / Stability**
  - Fixed a crash that occurred on PlayStation 4 due to other players using custom skins
  - Fixed a crash that could occur when pressing the Manage Account button in Profile settings
  - Loom blocks no longer cause an out of memory crash when using high resolution resource packs ([MCPE-69848](https://bugs.mojang.com/browse/MCPE-69848))

<!-- -->

- **General**
  - Worlds can once again be uploaded to Realms on Nintendo Switch ([REALMS-474](https://bugs.mojang.com/browse/REALMS-474))
  - Players can once again host 8 max player worlds on PlayStation 4 ([MCPE-85009](https://bugs.mojang.com/browse/MCPE-85009))
  - Fixed an issue where the Hot Tourist Destination trophy would not unlock after visiting the last required Nether biome on PlayStation 4 ([MCPE-85496](https://bugs.mojang.com/browse/MCPE-85496))
  - Meeting requirements for some achievements offline will now unlock it after reconnecting
  - Custom skins once again work properly in multiplayer ([MCPE-48207](https://bugs.mojang.com/browse/MCPE-48207))
  - Emotes can no longer be equipped before unlocking them ([MCPE-84810](https://bugs.mojang.com/browse/MCPE-84810))
  - Fixed notifications not appearing on iOS

<!-- -->

- **Gameplay**
  - Breaking a Furnace will now drop the stored experience from smelting ([MCPE-71651](https://bugs.mojang.com/browse/MCPE-71651))
  - Boats are no longer slowed down by objects with no collision ([MCPE-81316](https://bugs.mojang.com/browse/MCPE-81316))
  - Legacy chunk upgrades will no longer cause chunks to become 100% air ([MCPE-58514](https://bugs.mojang.com/browse/MCPE-58514))
  - New Nether biomes, blocks, and structures no longer generates into worlds with a fixed version ([MCPE-66357](https://bugs.mojang.com/browse/MCPE-66357))
  - Parity: Fixed chests with loot tables not generating loot until opened or destroyed
  - Local split-screen players can once again see the Ender Dragon and Ender Crystal ([MCPE-67596](https://bugs.mojang.com/browse/MCPE-67596))
  - The bounding box of the player used for spawning is now the correct size, so we don't think a player is in a dangerous spot when they are actually safe

<!-- -->

- **Mobs**
  - Mobs max spawn radius is now 44 blocks ([MCPE-79359](https://bugs.mojang.com/browse/MCPE-79359))
  - Zombies can spawn underground again ([MCPE-52743](https://bugs.mojang.com/browse/MCPE-52743))
  - Dolphins, fish, and squid now spawn in bubble columns again ([MCPE-73967](https://bugs.mojang.com/browse/MCPE-73967))
  - Baby pigs now despawn properly ([MCPE-76373](https://bugs.mojang.com/browse/MCPE-76373))
  - Hoglins no longer attack on Peaceful mode when too close ([MCPE-71939](https://bugs.mojang.com/browse/MCPE-71939))
  - Piglins and Brutes can now spawn with enchanted weapons ([MCPE-83536](https://bugs.mojang.com/browse/MCPE-83536))
  - Piglins now spawn on Peaceful difficulty
  - Piglins no longer naturally spawn on Shroomlights
  - Piglin arms are now behaving more like the players arms and less like zombie arms ([MCPE-74089](https://bugs.mojang.com/browse/MCPE-74089))
  - Piglins killed with a single blow while admiring Gold Ingots now drop the admired the Gold Ingot :(
  - Gold Ingots given to baby Piglins are no longer consumed
  - Piglins no longer drop up to a full stack of Gold Ingots upon giving them one by right-clicking and reloading a world while they are admiring it, instead it drops something from its loot table
  - Piglins no longer pick up entire stacks of Gold ([MCPE-76080](https://bugs.mojang.com/browse/MCPE-76080))
  - Piglins no longer spawn with enchanted gear
  - Tweaked arm animation for mobs that have their weapons removed ([MCPE-83581](https://bugs.mojang.com/browse/MCPE-83581))
  - Tamed wolves no longer disappear when returning to overworld through a Nether portal
  - Husks now prefer iron armor over chain armor**  **

<!-- -->

- **Blocks**
  - Walls now connect to open trapdoors ([MCPE-79490](https://bugs.mojang.com/browse/MCPE-79490))
  - Walls now connect to glass blocks ([MCPE-79483](https://bugs.mojang.com/browse/MCPE-79483))
  - Pressure plates have been fixed to have no collision again ([MCPE-80276](https://bugs.mojang.com/browse/MCPE-80276))
  - Melon and pumpkin stems now break again when the block below them is destroyed ([MCPE-79577](https://bugs.mojang.com/browse/MCPE-79577))
  - Slime blocks pushed by pistons launch players correctly again ([MCPE-62419](https://bugs.mojang.com/browse/MCPE-62419))
  - Fixed an issue that prevented players from being able to place beehives or bee nests from their inventory after an update ([MCPE-62067](https://bugs.mojang.com/browse/MCPE-62067))
  - Soul Campfires now emit the correct light level ([MCPE-73890](https://bugs.mojang.com/browse/MCPE-73890))
  - Hyphae blocks now take as long as stem blocks to destroy ([MCPE-72045](https://bugs.mojang.com/browse/MCPE-72045))
  - Quartz Block can no longer be created from Chiseled Quartz Block and Pillar Quartz Block in a Furnace
  - Fixed recipes when crafting a Barrel from Warped or Crimson Slabs
  - Quartz Bricks can no longer be crafted from anything but Quartz Blocks on the Stonecutter
  - Target Block's zones for particular redstone signal strength are no longer misplaced because of old Arrow geometry
  - Setting Soul Sand on fire no longer produces a placeholder Soul Fire block on pre-Nether version locked content

<!-- -->

- **Items**
  - Netherite items no longer bounce on lava ([MCPE-65372](https://bugs.mojang.com/browse/MCPE-65372))
  - Using Bone Meal on flowers or grass blocks no longer consumes the item if nothing can grow ([MCPE-73889](https://bugs.mojang.com/browse/MCPE-73889))
  - Fixed issues around duplicating items when reloading a world while Piglin is admiring an item

<!-- -->

- **Audio**
  - Zoglins now have sounds distinct from pigs ([MCPE-73220](https://bugs.mojang.com/browse/MCPE-73220))
  - Netherite armor now has a unique sound when equipped [MCPE-69047](https://bugs.mojang.com/browse/MCPE-69047))
  - Climbing vines now plays sound ([MCPE-69741](https://bugs.mojang.com/browse/MCPE-69741))
  - Corrected sound for placing Nether Wart
  - Placing or stepping on Warped or Crimson processed materials or planks now make wood sounds ([MCPE-69029](https://bugs.mojang.com/browse/MCPE-69029))
  - Ambient cave sounds are no longer played in Marketplace content prior to 1.16

<!-- -->

- **User Interface**
  - Wither health bar no longer depletes to zero after half of the health is gone ([MCPE-79661](https://bugs.mojang.com/browse/MCPE-79661))
  - Wither health bar now reappears when returning from another dimension
  - The 'Open' tooltip is no longer displayed when looking at Piglins ([MCPE-79376](https://bugs.mojang.com/browse/MCPE-79376))
  - Speed of credits roll is no longer dependent on framerate

<!-- -->

- **Commands**
  - Fixed an issue with several commands being used while cheats were disabled ([MCPE-92557](https://bugs.mojang.com/browse/MCPE-92557))
  - Made using the '/fill' command more efficient, improving performance
  - Using the '/locate' command to find a Ruined Portal will no longer return placeholder text ([MCPE-79323](https://bugs.mojang.com/browse/MCPE-79323))
  - The '/clear' command now correctly removes all blocks with the same block name when no data argument is passed in
  - Making command selectors use the current position of an actor rather than the previous position of an actor
  - Fixed an issue that could cause Command Blocks to stop working unexpectedly

<!-- -->

- **Add-Ons**
  - Updated Piglin geometry and entity files: Fixed issue with scaling carried item for baby humanoid mobs
  - Accessing a Beacon no longer spams the content log with warnings ([MCPE-66357](https://bugs.mojang.com/browse/MCPE-66357))
  - The 'rider_can_interact' field on 'minecraft:rideable' is now used again
  - Behavior animation components will no longer try to reload after a suspend resume and a mob/player rides something
  - Drowned geometry is no longer broken in content packs
