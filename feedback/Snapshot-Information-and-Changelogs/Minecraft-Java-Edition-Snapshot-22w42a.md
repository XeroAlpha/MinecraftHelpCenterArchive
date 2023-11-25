---
title: "Minecraft: Java Edition - Snapshot 22w42a"
date: 2022-10-19T13:10:11Z
updated: 2022-10-19T13:10:19Z
categories: Snapshot Information and Changelogs
link: https://feedback.minecraft.net/hc/en-us/articles/9994475500301-Minecraft-Java-Edition-Snapshot-22w42a
---

Hello there! We are now releasing the first snapshot for 1.19.3! You might have been thinking that this snapshot would be for 1.20, but times are changing. Going forward, we are taking a bit of a different approach to how we release minor and major versions for Minecraft: Java Edition. Essentially, we will be releasing minor versions more often. You can find out more details about this in a post over [here](https://help.minecraft.net/hc/articles/9971900758413).

In this snapshot, we're introducing feature toggles, which you might have seen in [a post we released yesterday](https://www.minecraft.net/en-us/article/testing-new-minecraft-features/feature-toggles-java-edition). This means we can add a toggle for Update 1.20 with features such as the Camel, without committing to releasing them in version 1.19.3. This lets us have experimental features available for testing, while still being able to release updates with new functionality, changes, and improvements, without having to remove those features from the game first.

In this snapshot, you'll be seeing [the features that we talked about during Minecraft Live](https://www.minecraft.net/article/minecraft-live-2022-the-recap) as experimental features, a few changes to chat, some technical changes and many bug fixes.

Happy mining!

# NEW FEATURES IN 22W42A

-   Some experimental features are now available through built-in experimental datapacks
-   Bundles are now available as an experimental feature
-   Added a new "Panorama Scroll Speed" accessibility option

## EXPERIMENTAL FEATURES

-   Some experimental features now need to be enabled to appear in worlds
-   Such features are enabled by adding a built-in datapack when creating a world
-   Feature toggles are meant to hide unfinished or experimental features, to make sure your existing worlds remain unaffected
-   Worlds that are using experimental features will be marked as "Experimental" in world selection list
-   Experimental features cannot be toggled for existing worlds

### ADDED CAMEL

Camels are now available when Update 1.20 experimental features are enabled.

-   Camels can be equipped with a saddle and ridden by two players
-   Camels spawn naturally in Desert Villages
-   Camels are tall
    -   Most hostile mobs will not be able to reach you when you are on a Camel
    -   They can walk over fences without a sweat
-   Camels are very graceful, but grumpy mobs
    -   They randomly sit down
    -   While sitting, it is difficult to convince them to move
-   Camels can either walk slowly or sprint quickly
-   They can also dash forward but will lose stamina for a while when doing so

### BAMBOO WOOD SET

A new set of Bamboo wood blocks are now available when Update 1.20 experimental features are enabled.

-   New wood blocks
    -   Bamboo Planks
    -   Bamboo Door
    -   Bamboo Trapdoor
    -   Bamboo Sign
    -   Bamboo Stairs
    -   Bamboo Slab
    -   Bamboo Fence
    -   Bamboo Fence Gate
    -   Bamboo Button
    -   Bamboo Pressure Plate
-   Bamboo Planks can be crafted with 2x2 Bamboo items
-   Added a new "Mosaic" plank variant that is unique to Bamboo called Bamboo Mosaic
    -   It can be crafted with 1x2 Bamboo Slabs in a vertical strip
    -   You can craft Stair and Slab variants of Bamboo Mosaic
-   Added a unique Bamboo Raft and Bamboo Chest Raft which can be crafted like normal boats, but with Bamboo Planks
    -   They function the same as ordinary boats, but have a unique look to them

### CHISELED BOOKSHELF

A new, chiseled variation of the Bookshelf is now available when Update 1.20 experimental features are enabled.

-   Crafted with 6 planks and 3 wooden slabs
-   Can store Books, Book and Quills, Written Books, and Enchanted Books
    -   Holds up to 6 books
    -   Keeps the stories and lore of your world safe
-   Comparators can detect the last book placed/removed
    -   Perfect for hiding secrets in your spooky library

### HANGING SIGNS

Ever wanted to hang up your signs? Fetch a few chains, strip some logs, and now you can! Hanging signs are now available when Update 1.20 experimental features are enabled.

-   Hanging Signs are a more expensive version of normal Signs
    -   Crafted with 2 chains and 6 stripped logs of your preferred wood type
    -   Crafting results in 6 Hanging Signs
-   Can be hung up in the following ways:
    -   Underneath a block that can provide support in the center, like a full block or a fence
    -   Attached to the solid side of a block
    -   Attached to the side or underneath another Hanging Sign
-   Unlike normal Signs, they cannot be placed directly on the ground without support from the side or above
    -   However, Hanging Signs that have a horizontal bar will not pop when the supporting block is removed

## SOUNDS

-   Various wood types now have unique sounds when placed, broken, or walked on
    -   There are three sets of unique sounds: Overworld wood types, Nether wood types, and Bamboo

# CHANGES IN 22W42A

-   Reworked the Creative Inventory tabs
-   Changes to chat
-   The Realms News button will now show a confirmation screen before opening the link
-   Stronghold placement code has been changed to be more efficient, causing stronghold positions to shift
    -   They are still placed in concentric rings, but their positions in the rings may change by a few degrees

## CREATIVE INVENTORY

The ordering of tabs and the contents in the Creative Inventory have been tweaked to make the experience of finding relevant blocks and items easier.

-   Blocks and items have been moved into categories that fit them better
-   Blocks are now ordered by their material as much as possible
    -   For example, all Oak blocks and variants are now next to each other
-   Some items can now be found in more than one tab
-   Various tabs have been renamed or collapsed into others
-   The search tab now lists items sequentially grouped by the other tabs
    -   For example, items found in Building Blocks will always appear before items in Redstone Blocks
-   Petrified Oak Slab has been removed from the Creative Inventory
    -   It can still be accessed through commands
-   This is a first iteration to bring a better experience to the Creative Inventory, and we will look closely at the feedback for these changes to iterate as needed

## CHAT

-   Removed Chat Preview
-   Chat messages deleted by server moderators will no longer be completely hidden, but rather replaced with text stating "This chat message has been deleted by the server."
-   Deleted chat messages will now be displayed in the chat window for at least 3 total seconds before being hidden
-   The Chat Trust Status indicators have been tweaked:
    -   The 'Modified' tag will no longer display for server-modified messages where only style has been changed
    -   The 'Modified' tag icon and indicator is now dark gray
    -   The 'Not Secure' tag is now light gray and does not have an icon
-   Partially filtered chat messages now show the filtered text as gray hashes with a hover text saying that it was filtered

# TECHNICAL CHANGES IN 22W42A

-   Added Feature Flags - world options to enable or disable some experimental or unfinished features (like blocks, entities and items)
-   Network protocol changes
-   Instances of recipe types that have recipe books now have field category to determine placement

## FEATURE FLAGS

### GENERAL NOTES

-   Feature flags are options that enable or disable certain groups of game elements (like blocks, entities and items), later called "features"
-   Game elements controlled by flags are hardcoded
-   Feature flags are stored in world

### CONFIGURATION AND DATAPACK CHANGES

-   Feature flags are enabled by datapacks
    -   New pack metadata section called features is added, containing enabled feature flags in list named enabled
-   The game now contains built-in datapacks (similar to the "Programmer Art" resource pack) that enable features and provide associated recipes, advancements, loot tables, etc
-   Added new fields to server.properties to allow initial selection of packs (works only during world creation)
    -   initial-enabled-packs - comma-separated list of packs to be enabled (feature packs need to be explicitly enabled)
    -   initial-disabled-packs - comma-separated list of packs to not auto-enable
-   Datapacks discovered after world creation will be disabled if they require features that are not enabled for loaded world

### EFFECTS OF FEATURE FLAGS

#### BLOCKS

-   Disabled block ids are not recognized by commands that can create new blocks
-   Block items for disabled blocks are disabled
-   Disabled blocks won't spawn in structures
-   Disabled blocks won't be loaded as part of entities (for example as falling sand or blocks carried by Endermen)
-   Players can't interact with disabled blocks

#### ENTITIES

-   Disabled entity ids are not recognized by commands that can summon new entities
-   Disabled entities will not spawn or load
-   Spawn egg items for disabled entities are disabled

#### ITEMS

-   Disabled items are hidden from creative menu
-   Recipes and loot tables are prevented from creating disabled items
-   Disabled item ids are not recognized by commands that can create new items
-   Disabled items can't be used for interactions or attacking

## NETWORK PROTOCOL

-   The network protocol now supports adding player entities to the world without being added to the 'tab' player list
-   Servers can now lazily distribute players' profile public keys along with their first chat packet
-   Message 'headers' within the Secure Chat protocol no longer need to be distributed when private messages are sent
-   Contextual message references are now deduplicated for efficiency within the Secure Chat network protocol

## RECIPES

### CRAFTING BOOK CATEGORIES

-   Crafting book categories/tabs can now be controlled by recipe definitions
-   Categories available for shaped/shapeless and various special crafting recipes:
    -   building
    -   redstone
    -   equipment
    -   misc (default)
-   Categories available for smelting, blasting, smoking, campfire_cooking
    -   food
    -   blocks
    -   misc (default)
-   Some crafting books collapse multiple categories into a single tab
-   The exact mappings might change in the future

## RESOURCE PACKS

-   The Resource Pack version is now 11
-   Removed "fixers" for resource packs with versions 3 and 4 (pre-flattening)
    -   The game will no longer try to adapt packs with those versions to the current version

# FIXED BUGS IN 22W42A

-   [MC-14167](https://bugs.mojang.com/browse/MC-14167) - Mobs build up fall damage when dangling on a lead
-   [MC-96449](https://bugs.mojang.com/browse/MC-96449) - Rabbits sometimes don't drop any raw rabbit upon being killed
-   [MC-130754](https://bugs.mojang.com/browse/MC-130754) - Jumping on farmland pushes the player a bit
-   [MC-135973](https://bugs.mojang.com/browse/MC-135973) - Can't hold Q to drop items rapidly from container inventories
-   [MC-145748](https://bugs.mojang.com/browse/MC-145748) - Clicking a settings button when there's a slider under the mouse in the next screen plays the click sound twice
-   [MC-146930](https://bugs.mojang.com/browse/MC-146930) - The "Programmer Art" resource pack is internally called "programer_art"
-   [MC-150488](https://bugs.mojang.com/browse/MC-150488) - Mobs can spawn on scaffolding
-   [MC-152752](https://bugs.mojang.com/browse/MC-152752) - Jukebox music sound originates from north-west edge of the block
-   [MC-160610](https://bugs.mojang.com/browse/MC-160610) - Mobs are able to spawn on Chorus Flowers
-   [MC-170457](https://bugs.mojang.com/browse/MC-170457) - Chest latch doesn't rotate properly
-   [MC-170817](https://bugs.mojang.com/browse/MC-170817) - Click sound of sliders in the video settings noticeably louder than anywhere else
-   [MC-175313](https://bugs.mojang.com/browse/MC-175313) - Composter filling sounds originate from the bottom northwest corner of the block
-   [MC-177738](https://bugs.mojang.com/browse/MC-177738) - Spawnpoint set on respawn anchor using /spawnpoint depletes glowstone charge, and doesn't stay on respawn anchor if its charge is depleted
-   [MC-182708](https://bugs.mojang.com/browse/MC-182708) - Nether and warped wart blocks do not come after leaves in the Creative inventory
-   [MC-183069](https://bugs.mojang.com/browse/MC-183069) - Donkeys, mules and undead horses cannot be saddled by right-clicking
-   [MC-183502](https://bugs.mojang.com/browse/MC-183502) - The sounds for collecting honey in a bottle and collecting honeycomb with shears is categorised under friendly creatures
-   [MC-183831](https://bugs.mojang.com/browse/MC-183831) - Villagers breed when not standing up
-   [MC-183899](https://bugs.mojang.com/browse/MC-183899) - You can set your spawn point inside an end portal, causing the player to become stuck in the End
-   [MC-197150](https://bugs.mojang.com/browse/MC-197150) - Horse armor and carpets cannot be equipped onto horses or llamas by right-clicking them whilst having these items held in your hand
-   [MC-199162](https://bugs.mojang.com/browse/MC-199162) - One farmland block in plains_large_farm_1 has moisture level 0
-   [MC-201684](https://bugs.mojang.com/browse/MC-201684) - Torches and soul torches aren't grouped together in the creative inventory
-   [MC-201759](https://bugs.mojang.com/browse/MC-201759) - Obsidians aren't grouped together in Creative
-   [MC-202607](https://bugs.mojang.com/browse/MC-202607) - Cat can get off lead by teleporting when it gives a gift after sleeping
-   [MC-206854](https://bugs.mojang.com/browse/MC-206854) - Multiplayer warning and Chat Preview warning are off center
-   [MC-216733](https://bugs.mojang.com/browse/MC-216733) - Basalt and blackstone are not grouped together with other "polishable" stone types in the Creative inventory
-   [MC-217644](https://bugs.mojang.com/browse/MC-217644) - Wart blocks and shroomlights are in different Creative tabs
-   [MC-218534](https://bugs.mojang.com/browse/MC-218534) - Blackstone stairs & slabs are not grouped with the other stone type stairs & slabs
-   [MC-220489](https://bugs.mojang.com/browse/MC-220489) - Beds and respawn anchors are not grouped in the Creative inventory
-   [MC-221568](https://bugs.mojang.com/browse/MC-221568) - Inconsistency: Barriers and structure voids produce particles when broken, but light blocks do not
-   [MC-222879](https://bugs.mojang.com/browse/MC-222879) - Netherite scrap comes after netherite ingot in the creative inventory
-   [MC-224921](https://bugs.mojang.com/browse/MC-224921) - Mob pathfinding fails under certain circumstances / mobs fall on closed turns
-   [MC-226184](https://bugs.mojang.com/browse/MC-226184) - Axolotls pathfinding to water can sometimes fall in wide holes
-   [MC-226566](https://bugs.mojang.com/browse/MC-226566) - Inconsistency: Blocks are not placed correctly in Creative inventory
-   [MC-228475](https://bugs.mojang.com/browse/MC-228475) - Pointed dripstone is not grouped with dripstone blocks in the creative inventory
-   [MC-234446](https://bugs.mojang.com/browse/MC-234446) - Moss Block appears in the wrong creative inventory tab
-   [MC-239465](https://bugs.mojang.com/browse/MC-239465) - Emerald block in creative inventory looks out of place
-   [MC-242663](https://bugs.mojang.com/browse/MC-242663) - Melons can generate underwater
-   [MC-243458](https://bugs.mojang.com/browse/MC-243458) - Worldgen data packs don't work on servers at first launch
-   [MC-248753](https://bugs.mojang.com/browse/MC-248753) - Pressure plates don't activate even though visually they should
-   [MC-249106](https://bugs.mojang.com/browse/MC-249106) - Water rendering incorrectly through frogspawn hitbox/model
-   [MC-249232](https://bugs.mojang.com/browse/MC-249232) - Frogs can sometimes fall into deep holes when pathfinding to entities
-   [MC-249257](https://bugs.mojang.com/browse/MC-249257) - The sounds of splashing when creating mud aren't controlled by the "Blocks" sound slider
-   [MC-249294](https://bugs.mojang.com/browse/MC-249294) - Rabbits ignore the "MoreCarrotTicks" value, causing them to always try to eat carrots
-   [MC-249419](https://bugs.mojang.com/browse/MC-249419) - Map color for mud brick slab is no longer consistent with map color for other mud brick blocks
-   [MC-249463](https://bugs.mojang.com/browse/MC-249463) - Shulkers in boats with chests are lowered
-   [MC-249513](https://bugs.mojang.com/browse/MC-249513) - Frogspawn is not grouped with turtle eggs in the Creative inventory
-   [MC-249720](https://bugs.mojang.com/browse/MC-249720) - Allay's wings are not attached to its body
-   [MC-249765](https://bugs.mojang.com/browse/MC-249765) - Allays don't render semi-transparent when invisible where appropriate
-   [MC-249806](https://bugs.mojang.com/browse/MC-249806) - Allay renders too low in boat, boat with chest, minecart and entities
-   [MC-249842](https://bugs.mojang.com/browse/MC-249842) - Allays attempt to pathfind to items that are outside of the world border
-   [MC-249875](https://bugs.mojang.com/browse/MC-249875) - Parity Issue: Allays hesitate for a few seconds before following, throwing items, or doing other actions in Java
-   [MC-249935](https://bugs.mojang.com/browse/MC-249935) - New advancement "Birthday Song" grants no experience
-   [MC-250249](https://bugs.mojang.com/browse/MC-250249) - Parity Issue: Allays pick up arrow/potion items with other effects than the ones they're holding
-   [MC-250311](https://bugs.mojang.com/browse/MC-250311) - The minecraft:entity.tadpole.grow_up sound event doesn't have a translation key
-   [MC-250423](https://bugs.mojang.com/browse/MC-250423) - Frog frequently fails to long jump to small blocks
-   [MC-250943](https://bugs.mojang.com/browse/MC-250943) - minecraft.used:minecraft.goat_horn doesn't increase when using goat horns
-   [MC-251296](https://bugs.mojang.com/browse/MC-251296) - Allay has a transparent texture but it is not transparent in game
-   [MC-251518](https://bugs.mojang.com/browse/MC-251518) - Allay's poses, flying animations, and dancing animations for duping differ from Bedrock's, causing intense clipping, inconsistencies, choppy movements, and strange item positioning
-   [MC-251688](https://bugs.mojang.com/browse/MC-251688) - Chat preview can overlap chat contents if the message is long enough
-   [MC-252089](https://bugs.mojang.com/browse/MC-252089) - The chat preview warning menu is forcibly closed when the player dies or changes dimensions
-   [MC-252415](https://bugs.mojang.com/browse/MC-252415) - Bedrock Edition's new 1.19.10 splash text is not available on Java 1.19
-   [MC-253076](https://bugs.mojang.com/browse/MC-253076) - Allay duplicates Items when its NBT data is updated every tick
-   [MC-253125](https://bugs.mojang.com/browse/MC-253125) - Allays can dance while panicking
-   [MC-253189](https://bugs.mojang.com/browse/MC-253189) - Allays with NoAI can dance
-   [MC-253367](https://bugs.mojang.com/browse/MC-253367) - The screen is sometimes flashed with the "Loading terrain..." screen after proceeding with the chat preview warning when all nearby chunks are loaded
-   [MC-253738](https://bugs.mojang.com/browse/MC-253738) - Vibration particle faces at a constant pitch of about 60 degrees, not pointing towards the target
-   [MC-254119](https://bugs.mojang.com/browse/MC-254119) - Breeding a Screaming Goat and a Regular Goat never results in a screaming goat
-   [MC-254395](https://bugs.mojang.com/browse/MC-254395) - Command suggestions can overlap the chat preview field when the chat preview option is set to "When Sending"
-   [MC-254427](https://bugs.mojang.com/browse/MC-254427) - Secure chat warning toast can appear on singleplayer worlds
-   [MC-254535](https://bugs.mojang.com/browse/MC-254535) - Nether portals cannot replace snow layers
-   [MC-254695](https://bugs.mojang.com/browse/MC-254695) - "Narrator Disabled" pop-up doesn't render fully
-   [MC-254774](https://bugs.mojang.com/browse/MC-254774) - Crash when a villager with a gossip of value 0 shares gossips
-   [MC-255151](https://bugs.mojang.com/browse/MC-255151) - net.minecraft.client.Camera#getMaxZoom(double) issue
-   [MC-255164](https://bugs.mojang.com/browse/MC-255164) - Sculk Shrieker warning level resets to 0 after player's death
-   [MC-255715](https://bugs.mojang.com/browse/MC-255715) - Menu panorama stops spinning after several days
-   [MC-256217](https://bugs.mojang.com/browse/MC-256217) - Explosions create ghost blocks on servers at high coordinates

# GET THE SNAPSHOT

Snapshots are available for Minecraft: Java Edition. To install the snapshot, open up the [Minecraft Launcher](https://www.minecraft.net/download.html) and enable snapshots in the \"Installations\" tab.

**Snapshots can corrupt your world, so please backup and/or run them in a different folder from your main worlds.**

Cross-platform server jar:

-   [Minecraft server jar](https://piston-data.mojang.com/v1/objects/008996e2d1e0d49d7f1b477f69106a6d23c5c103/server.jar)

Report bugs here:

-   [Minecraft issue tracker](https://bugs.mojang.com/browse/MC)!

Want to give feedback?

-   For any feedback and suggestions on our upcoming 1.20 features, head over to the dedicated [Feedback site category](https://aka.ms/MC120Feedback). You can also leave any other feedback on the [Feedback site](https://aka.ms/JavaSnapshotFeedback).  If you\'re feeling chatty, join us over at the the [official Minecraft Discord](https://discordapp.com/invite/minecraft).
