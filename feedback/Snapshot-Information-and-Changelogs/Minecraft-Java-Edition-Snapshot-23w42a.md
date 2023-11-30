---
title: "Minecraft: Java Edition - Snapshot 23w42a"
date: 2023-10-18T15:00:52Z
updated: 2023-10-18T15:00:55Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/20496721748493-Minecraft-Java-Edition-Snapshot-23w42a
---

Hey! Today we bring you the first of the features we've shown you during Minecraft Live last weekend: the Crafter!

## EXPERIMENTAL FEATURES

### CRAFTER

- The Crafter is a new block that enables the crafting of items and blocks via Redstone
- The Crafter will eject one crafted item at a time when powered by a new Redstone signal / pulse (not a continuous signal)
- Upon receiving this new signal, the Crafter will eject the recipe result from the front face
- If the output result has multiple type of items all the result items will be ejected together
- The Crafter can be oriented in any direction when placed

#### CRAFTER UI

- The Crafter has a 3x3 interactable crafting grid
- The Crafter’s crafting grid slots are toggleable, meaning that the player can change the behavior of a slot by clicking or pressing on a slot with an empty hand
- A slot that is ‘toggled’ cannot hold any items, and therefore cannot have items placed into it by other blocks, such as Hoppers and Droppers
- Unlike the Crafting Table, the Crafter displays a preview of the crafted item which will be crafted and ejected on the next Redstone pulse but cannot be manually taken out by the player
- The Crafter UI is shared between all players interacting with the Crafter, meaning that multiple players can interact with the Crafter at the same time, similar to Chests and Hoppers

#### CRAFTER INTERACTION WITH OTHER BLOCKS

- The Comparator signal strength is 0-9, where each non-empty or toggled slot adds 1 strength
- Hoppers can be used to both insert and pull out items from the Crafter
- Droppers can be used to insert items into the Crafter
- Moving items in from another block (ex: Hopper, Dropper) prioritizes filling items into slots following these rules:
  - Prioritize the first empty slot (from left-to-right, top-to-bottom)
  - If there are no empty slots then prioritize the smallest stack of the same item (pick the first if there are multiple)
  - If there is a toggled slot it will be skipped. The item will then be moved into the container
  - If the item cannot be moved, it will be ejected into the world

We want to hear your feedback on the Crafter, so please let us know what you think the over in our dedicated [feedback thread](https://feedback.minecraft.net/hc/en-us/community/posts/20459106029709-Let-s-talk-about-the-Crafter-).

## CHANGES

- Added an accessibility option that allows to hide the yellow splash texts in the main menu
- Added a recovery screen for worlds with missing data (for example, if saving failed due to an unexpected shutdown)

## TECHNICAL CHANGES

- The Data Pack version is now 21
- The Resource Pack version is now 19
- Minor changes to chat component serialization

### CHAT COMPONENTS

#### SERIALIZATION

- The optional type field has a new allowed value: selector
- Components of type nbt now have source field with allowed values entity, block, storage

## DATA PACK VERSION 21

- Introduced Jigsaw structure pool aliases, which can be used to rewire pool selection
- Added field block_state to tnt entity to allow replacement of rendered block model
- Renamed field Fuse to fuse on tnt entity
- Added playersNetherPortalDefaultDelay and playersNetherPortalCreativeDelay gamerules to control time (in ticks) that a player needs to stand in a Nether portal before changing dimensions
- Added new gamerule projectilesCanBreakBlocks to control whether impact projectiles will destroy blocks that are destructible by them, i.e. Chorus Flowers, Pointed Dripstone and Decorated Pots
- Added white_smoke particle type

### JIGSAW POOL ALIASES

- Added optional pool_aliases list to Jigsaw structures
- Aliases represent the possibility to rewire Jigsaw pool connections by redirecting pool references on individual structure instances
- Alias variants are represented in type and is one of:
  - direct 1:1 mapping from an alias to a new pool
    - alias pool to replace
    - target pool to replace with
  - random 1:n mapping where a pool from n is randomly selected for the structure instance
    - alias pool to replace
    - targets randomized list of candidate pools to replace alias with
  - random_group
    - groups each group is a randomized list of above alias types
    - only one group is selected per structure instance
    - this enables modelling selections such as "if pool X is replaced with X1, also replace pool Y with Y1"

## RESOURCE PACK VERSION 19

- Added block model, item model and block state definitions for crafter
- Added GUI container texture and sprites for crafter
- Added white_smoke particle definition

## FIXED BUGS IN SNAPSHOT 23W34A

- [MC-189261](https://bugs.mojang.com/browse/MC-189261) - Various Realms buttons and texts are incorrectly capitalized
- [MC-223774](https://bugs.mojang.com/browse/MC-223774) - Firework Rockets can't be used to break Chorus Flowers
- [MC-232719](https://bugs.mojang.com/browse/MC-232719) - The scroll bar within the singleplayer menu doesn't reset its position to the top of the list when searching for worlds
- [MC-234483](https://bugs.mojang.com/browse/MC-234483) - Some strange pixels can be seen on the left side of world slot frames within several realms menus
- [MC-262888](https://bugs.mojang.com/browse/MC-262888) - Clicking "I know what I'm doing!" on the world loading screen when loading a world in a new snapshot is way too loud
- [MC-264966](https://bugs.mojang.com/browse/MC-264966) - "Signature is missing from Property textures" appears in the logs of some Minecraft worlds due to player heads
- [MC-265515](https://bugs.mojang.com/browse/MC-265515) - The "You don't seem to have a Realm" element in the realms menu cannot be selected via the mouse cursor
- [MC-265517](https://bugs.mojang.com/browse/MC-265517) - The "Buy a realm!" button is automatically selected when opening the "Add Realm" interface
- [MC-265551](https://bugs.mojang.com/browse/MC-265551) - "No pending invites!" tooltip in Realms is now untranslatable
- [MC-265744](https://bugs.mojang.com/browse/MC-265744) - Kick during login causes client error
- [MC-265745](https://bugs.mojang.com/browse/MC-265745) - You can’t break decorated pots with fireworks launched from crossbow
- [MC-265751](https://bugs.mojang.com/browse/MC-265751) - Decorated pot subtitles are inconsistent
- [MC-265758](https://bugs.mojang.com/browse/MC-265758) - Decorated pots can be destroyed by projectiles in adventure mode
- [MC-265761](https://bugs.mojang.com/browse/MC-265761) - Decorated pots are missing from the creative inventory's redstone blocks tab
- [MC-265767](https://bugs.mojang.com/browse/MC-265767) - Commands don't show error messages in chat
- [MC-265773](https://bugs.mojang.com/browse/MC-265773) - Functions executed as advancement rewards are executed at the top level
- [MC-265778](https://bugs.mojang.com/browse/MC-265778) - "gamerule maxCommandChainLength 0" prevents subsequent command execution in the world
- [MC-265789](https://bugs.mojang.com/browse/MC-265789) - Realms popup strings consist of inconsistent concluding punctuation

## GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the Snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the "Installations" tab.

**Testing versions can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

- [Minecraft server jar](https://piston-data.mojang.com/v1/objects/b5f423ba1c4191d133c0284a2b1b36da46f8b5f8/server.jar)

Report bugs here:

- [Minecraft issue tracker](https://bugs.mojang.com/projects/MC/summary)!

Want to give feedback?

- For any feedback and suggestions on our upcoming 1.21 features, head over to the dedicated [Feedback site category](https://aka.ms/Minecraft121Feedback). You can also leave any other feedback on the [Feedback site](https://feedback.minecraft.net/). If you're feeling chatty, join us over at the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
